<svelte:options tag="glade-annotatable-authentication-menu-view" />

<script lang="ts">
  import "@material/mwc-textfield";
  import "@material/mwc-button";
  import { signInAnonymously } from "firebase/auth";
  import { auth } from "../firebase-instance";
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
   * @param err
   */
  function setError(err: Err | null) {
    dispatch("error", err);
  }

  async function handleClickUseAnonymously() {
    await signInAnonymously(auth);
    setView(DialogView.List);
  }

  function handleClickSignin() {
    setView(DialogView.LoginForm);
  }

  function handleClickCreateAccount() {
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
