<svelte:options tag="glade-annotatable-login-form-view" />

<script lang="ts">
  import "@material/mwc-textfield";
  import "@material/mwc-button";
  import type { TextField } from "@material/mwc-textfield";
  import firebase from "@firebase/app";
  import "@firebase/auth";
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
   * @param setError
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
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setView(DialogView.List);
    } catch (signInError) {
      setError(signInError);
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
    />
    <mwc-button class="formRow" outlined on:click={handleClickSignIn}
      >Sign In</mwc-button
    >
  </div>
</div>
