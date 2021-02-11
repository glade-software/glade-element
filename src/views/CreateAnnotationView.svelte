<svelte:options tag="glade-annotatable-create-annotation-view" />

<script lang="ts">
  import "@material/mwc-button";
  import "@material/mwc-textarea";
  import firebase from "@firebase/app";
  import "@firebase/auth";
  import Annotation from "../Annotation";
  import AnnotationComponent from "../components/Annotation.svelte";
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

  export let focusedGladeDOMNodeHash = 0;
  let htmlString: string | undefined = "";
  $: showPreview = false;
  let plainTextBody: string = "";

  const user = firebase.auth().currentUser;

  $: pendingAnnotation = new Annotation({
    gladeDOMNodeHash: focusedGladeDOMNodeHash,
    plainTextBody,
    htmlString,
    postedBy: user?.displayName || "anonymous",
  });

  async function handleClickPreview(ev: MouseEvent) {
    if (!plainTextBody) {
      setError({
        message: "You need to add content before previewing!",
        code: "CreateAnnotationView.handleClickPreview.nothingToPreview",
      });
      return;
    }
    showPreview = true;
    htmlString = (await pendingAnnotation.getHtmlString()) || undefined;
  }

  function handlePlainTextBodyChange(ev: { target: HTMLTextAreaElement }) {
    plainTextBody = ev.target.value;
  }

  function handleClickEdit(ev: MouseEvent) {
    showPreview = false;
  }

  function handleClickDiscard() {
    pendingAnnotation.htmlString = "";
    pendingAnnotation.plainTextBody = "";
    setView(DialogView.List);
  }

  async function handleClickPublish() {
    if (!plainTextBody) {
      setError({
        message: "You need to add content before posting!",
        code: "CreateAnnotationView.handleClickPreview.nothingToPost",
      });
      return;
    }
    htmlString = (await pendingAnnotation.getHtmlString()) || undefined;
    await pendingAnnotation.save();
    setView(DialogView.List, true);
  }
</script>

<div>
  <style>
    mwc-textarea {
      min-width: 500px;
      margin: 8px 3px;
      padding: 0px 3px;
    }
    .buttonShelf {
      display: flex;
      justify-content: space-between;
    }
    .cancel {
      --mdc-theme-primary: red;
    }
  </style>{#if showPreview}
    <div><AnnotationComponent annotation={pendingAnnotation} /></div>
  {:else}
    <mwc-textarea
      outlined="true"
      value={plainTextBody}
      placeholder=""
      on:change={handlePlainTextBodyChange}
    />
  {/if}
  <div class="buttonShelf">
    <mwc-button class="cancel" on:click={handleClickDiscard}>discard</mwc-button
    >
    <div>
      {#if showPreview}
        <mwc-button on:click={handleClickEdit}>edit!</mwc-button>
      {:else}
        <mwc-button on:click={handleClickPreview}>show preview!</mwc-button>
      {/if}
      <mwc-button on:click={handleClickPublish}>publish!</mwc-button>
    </div>
  </div>
</div>
