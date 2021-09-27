<svelte:options tag="glade-annotatable-list-annotations-view" />

<script lang="ts">
  import { DialogView } from "../DialogView";
  import { createEventDispatcher } from "svelte";
  import firebase from "@firebase/app";
  import "@firebase/auth";
  import userStore from "../stores/user";
  import AnnotationComponent from "../components/Annotation.svelte";
  import type Annotation from "../Annotation";
  import type { Err } from "../Err";
  export let annotations: Annotation[];
  export let apikey: String;

  const deleteAnnotationFromDb = firebase
    .functions()
    .httpsCallable("deleteAnnotation");

  $: currentUser = null;

  userStore.subscribe((u) => {
    currentUser = u;
  });

  console.log("currentUser ListAnnotationView", currentUser);
  const dispatch = createEventDispatcher();

  /**
   * Sets the activeView in GladeAnnotatable
   * @param nextView
   */
  function setView(nextView: DialogView) {
    console.log("dispatching change-view");
    dispatch("set-view", {
      nextView,
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

  const handleClickCreateAnnotation = () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      setError({
        code: "ListAnnotationsView.handleClickCreateAnnotation.notLoggedIn",
        message: "You need to login to create an annotation!",
      });
      setView(DialogView.AuthenticationMenu);
      return;
    }
    setView(DialogView.Create);
  };

  const deleteAnnotation = (uid) => {
    console.log("deleting annotation", uid);
    firebase.functions().httpsCallable;
  };

  console.debug("ListAnnotationsView initialized");
</script>

<div>
  <style>
    .htmlContent {
      max-width: 800px;
      object-fit: contain;
    }

    .postedBy {
      color: #1a535c;
    }

    .noAnnotationsMsg {
      margin: 8px;
      padding-top: 8px;
    }

    .buttonShelf {
      display: flex;
      justify-content: flex-end;
    }
  </style>
  <div>
    {#if annotations && annotations.length}
      {#each annotations as annotation}
        <AnnotationComponent {annotation} {deleteAnnotation} />
      {/each}
    {:else}
      <div class="noAnnotationsMsg">No annotations here yet!</div>
    {/if}
    <div class="buttonShelf">
      <mwc-button on:click={handleClickCreateAnnotation}
        >Create Annotation!</mwc-button
      >
    </div>
  </div>
</div>
