<svelte:options tag="glade-annotatable-signup-form-view" />

<script lang="ts">
  import "@material/mwc-textfield";
  import type { TextField } from "@material/mwc-textfield";
  import "@material/mwc-button";
  import { auth, functions } from "../firebase-instance";
  import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
  import {httpsCallable} from "firebase/functions";
  import { DialogView } from "../DialogView";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /**
   * Sets the activeView in GladeAnnotatable
   * @param nextView
   */
  function setView(nextView: DialogView, dismissModal?: Boolean) {
    console.log("dispatching change-view");
    dispatch("set-view", {
      nextView,
      dismissModal,
    });
  }

  let usernameTextField: TextField;
  let passwordTextField: TextField;
  let confirmPasswordTextField: TextField;
  let emailTextField: TextField;

  console.debug("SignupFormView initialized");

  async function onKeyUp(event: KeyboardEvent) {
    if(event.key === "Enter"){
      handleClickCreateAccount();
    }
  }

  async function handleUsernameBlur(ev: { target: TextField }) {
    const usernameToCheck = ev.target.value;
    const checkUsernameAvailability = httpsCallable(functions, "checkUsernameAvailability");

    try {
      const usernameIsAvailableResponse = await checkUsernameAvailability(
        usernameToCheck
      )  as CheckUsernameAvailabilityResponse;

      const usernameIsAvailable =
        usernameIsAvailableResponse.data.usernameAvailable;

      if (!usernameIsAvailable) {
        console.log("username unavailable");
        usernameTextField.setCustomValidity("username unavailable!");
        usernameTextField.reportValidity();
      } else {
        usernameTextField.setCustomValidity("");
        usernameTextField.reportValidity();
      }
    } catch (error) {
      console.debug("error checking username availability");
      console.error(error);
    }
  }

  interface CheckUsernameAvailabilityResponse {
    data:{
      usernameAvailable: boolean;
    }
  }

  async function handleClickCreateAccount() {
    const username = usernameTextField.value;
    const checkUsernameAvailability = httpsCallable(functions,"checkUsernameAvailability");

    try {
      const usernameIsAvailableResponse = await checkUsernameAvailability(
        username
      ) as CheckUsernameAvailabilityResponse;

      const usernameIsAvailable =
        usernameIsAvailableResponse.data.usernameAvailable;

      if (!usernameIsAvailable) {
        console.log("username unavailable");
        usernameTextField.setCustomValidity("username unavailable!");
        usernameTextField.reportValidity();
      } else {
        usernameTextField.setCustomValidity("");
        usernameTextField.reportValidity();
        try {
          if (passwordTextField.value !== confirmPasswordTextField.value) {
            confirmPasswordTextField.setCustomValidity(
              "passwords don't match!"
            );
            confirmPasswordTextField.reportValidity();
            return;
          }
          const { user } = await createUserWithEmailAndPassword(auth,
              emailTextField.value,
              passwordTextField.value
            );
          console.debug("user created!");
          await updateProfile(user,{ displayName: username });

          usernameTextField.value = "";
          emailTextField.value = "";
          passwordTextField.value = "";
          confirmPasswordTextField.value = "";

          console.debug(`user "${user.displayName}" created`);
          setView(DialogView.List);
        } catch (createUserError) {
          console.error(createUserError);
        }
      }
    } catch (error) {
      console.debug("error checking username availability");
      console.error(error);
    }
  }
</script>

<div>
  <style>
    .formItem {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }
  </style>
  <div>
    <form>
      <mwc-textfield
        bind:this={usernameTextField}
        id="usernameTextField"
        required
        class="formItem"
        placeholder="donklonk"
        prefix="@"
        label="username"
        autocomplete="off"
        outlined="true"
        on:blur={handleUsernameBlur}
      />
      <mwc-textfield
        required
        class="formItem"
        outlined="true"
        label="email"
        placeholder="matt@glade.software"
        type="email"
        bind:this={emailTextField}
      />
      <mwc-textfield
        required
        class="formItem"
        outlined="true"
        type="password"
        name="password"
        label="password"
        bind:this={passwordTextField}
      />
      <mwc-textfield
        required
        class="formItem"
        outlined="true"
        type="password"
        label="confirm password"
        bind:this={confirmPasswordTextField}
        on:keyup={onKeyUp}
      />
      <mwc-button class="formItem" outlined on:click={handleClickCreateAccount}
        >Create Account</mwc-button
      >
    </form>
  </div>
</div>
