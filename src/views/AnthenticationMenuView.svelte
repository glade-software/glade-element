<svelte:options tag="glade-annotatable-authentication-menu-view" />

<script lang="ts">
  import "@material/mwc-textfield";
  import "@material/mwc-button";
  import firebase from "@firebase/app";
  import "@firebase/auth";
  import type { Err } from "../Err";
  import { DialogView } from "../DialogView";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  console.debug("AuthenticationMenuView initialized");

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
  function setError(err: Err | null) {
    dispatch("error", err);
  }

  async function handleClickUseAnonymously(ev: MouseEvent) {
    await firebase.auth().signInAnonymously();
    setView(DialogView.List);
  }

  function handleClickSignin(ev: MouseEvent) {
    setView(DialogView.LoginForm);
  }

  function handleClickCreateAccount(ev: MouseEvent) {
    setError(null);
    setView(DialogView.SignupForm);
  }
</script>

<div>
  <style>
    .option {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }
  </style>
  <div>
    <mwc-button class="option" outlined on:click={handleClickCreateAccount}
      >Create Account</mwc-button
    >
    <mwc-button class="option" outlined on:click={handleClickSignin}
      >Sign In</mwc-button
    >
    <mwc-button class="option" outlined on:click={handleClickUseAnonymously}
      >Use Anonymously</mwc-button
    >
  </div>
</div>
