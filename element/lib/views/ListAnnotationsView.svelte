<svelte:options tag="glade-annotatable-list-annotations-view" />

<script lang="ts">
  import { DialogView } from "../DialogView";
  import { createEventDispatcher } from "svelte";

  import { httpsCallable } from "@firebase/functions";
  import { functions, auth } from "../firebase-instance";
  import userStore from "../stores/user";
  import AnnotationComponent from "../components/Annotation.svelte";
  import type Annotation from "../Annotation";
  import type { Err } from "../Err";
  export let annotations: Annotation[];
  export let apikey: String;
  export let gladedocumenthash: String;

  type DeleteAnnotationResponse = {
    data: {
      deletedAt: number;
    };
  };

  type DeleteAnnotationFunction = (
    a: DeleteAnnotationParams
  ) => Promise<DeleteAnnotationResponse>;

  const deleteAnnotationFromDb = httpsCallable(
    functions,
    "deleteAnnotation"
  ) as DeleteAnnotationFunction;

  $: currentUser = null;

  userStore.subscribe((u) => {
    currentUser = u;
  });

  const dispatch = createEventDispatcher();

  /**
   * Sets the activeView in GladeAnnotatable
   * @param nextView
   * @param dismissModal
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

  const handleClickCreateAnnotation = () => {
    const user = auth.currentUser;
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

  interface DeleteAnnotationParams {
    annotationUid: String;
    gladeDocumentHash: String;
    gladeAPIKey: String;
  }

  const deleteAnnotation = async ({ uid }) => {
    console.log("deleting annotation", uid);
    const params: DeleteAnnotationParams = {
      annotationUid: uid,
      gladeAPIKey: apikey,
      gladeDocumentHash: gladedocumenthash,
    };
    await deleteAnnotationFromDb(params);
    dispatch("delete-annotation", params);
    dispatch("set-view", { nextView: DialogView.List, dismissModal: true });
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
        <AnnotationComponent
          {annotation}
          {deleteAnnotation}
          isPreview={false}
        />
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
