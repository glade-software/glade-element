<svelte:options tag="glade-annotatable-login-form-view" />

<script lang="ts">
  import "@material/mwc-textfield";
  import "@material/mwc-button";
  import type { TextField } from "@material/mwc-textfield";
  import {auth} from "../firebase-instance";
  import { signInWithEmailAndPassword } from "firebase/auth";
  let emailTextField: TextField;
  let passwordTextField: TextField;
  import { DialogView } from "../DialogView";
  import type { Err } from "../Err";
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

  /**
   * Sets an error for GladeAnnotatable to react to
   * @param err
   */
  function setError(err: Err) {
    console.debug("dispatching", err.code);
    dispatch("error", err);
  }

  console.debug("LoginFormView initialized");

  async function handleClickSignIn() {
    const email = emailTextField.value;
    const password = passwordTextField.value;
    try {
      await signInWithEmailAndPassword(auth,email, password);
      setView(DialogView.List);
    } catch (signInError) {
      setError(signInError);
    }
  }
  async function onKeyUp(event:KeyboardEvent){
    if(event.key === "Enter"){
      handleClickSignIn();
    }
  }
</script>

<div>
  <style>
    .formRow {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }
  </style>
  <div>
    <mwc-textfield
      bind:this={emailTextField}
      class="formRow"
      label="email"
      outlined
      placeholder="matt@glade.software"
      type="email"
    />
    <mwc-textfield
      class="formRow"
      bind:this={passwordTextField}
      outlined
      type="password"
      label="password"
      on:keyup={onKeyUp}
    />
    <mwc-button class="formRow" outlined on:click={handleClickSignIn}
      >Sign In</mwc-button
    >
  </div>
</div>
