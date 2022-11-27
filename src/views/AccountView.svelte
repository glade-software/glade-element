<svelte:options tag="glade-annotatable-account-view" />

<script lang="ts">
  import{auth} from '../firebase-instance'
  import { signOut } from "firebase/auth";
  import "@material/mwc-button";
  import { DialogView } from "../DialogView";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const user = auth.currentUser;
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
  async function handleClickSignOut() {
    setView(DialogView.List);
    await signOut(auth);
  }
  async function handleClickSignIn() {
    setView(DialogView.AuthenticationMenu);
  }
  async function goBack(){
    setView(DialogView.List);
  }
</script>

<div>
  <style>
    .account-view {
      display: flex;
      justify-content: center;
      padding-top: 8px;
      min-width: 500px;
    }
    .or {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button {
      display: flex;
    }
    .back-button {
      display: flex;
      --mdc-theme-primary: #848482;
    }

  </style>
  <div class="account-view">
    {#if user}
      <mwc-button class="button" on:click={handleClickSignOut}
        >sign out!</mwc-button
      >
    {:else}
    <div>
      <div>
        <mwc-button class="button" on:click={handleClickSignIn}
          >sign in?</mwc-button
        >
        <div class="or"><span>or</span></div>
        <mwc-button class="back-button" on:click={goBack}>view annotations</mwc-button>
      </div>
    </div>
    {/if}
  </div>
</div>
