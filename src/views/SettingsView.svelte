<svelte:options tag="glade-annotatable-settings-view" />

<script lang="ts">
  import firebase from "@firebase/app";
  import "@firebase/auth";
  import "@material/mwc-button";
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
  async function handleClickSignOut() {
    setView(DialogView.List);
    await firebase.auth().signOut();
  }
</script>

<div>
  <style>
    .settings {
      display: flex;
      justify-content: center;
      padding-top: 8px;
      min-width: 500px;
    }
  </style>
  <div class="settings">
    <mwc-button class="settingsButton" on:click={handleClickSignOut}
      >sign out!</mwc-button
    >
  </div>
</div>
