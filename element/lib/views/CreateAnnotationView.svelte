<svelte:options tag="glade-annotatable-create-annotation-view" />

<script lang="ts">
  import "@material/mwc-button";
  import "@material/mwc-textarea";
  import "@material/mwc-linear-progress";

  import { auth } from "../firebase-instance";

  import Annotation from "../Annotation";
  import AnnotationComponent from "../components/Annotation.svelte";
  import { DialogView } from "../DialogView";
  import type { Err } from "../Err";
  import { createEventDispatcher, onMount } from "svelte";

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

  export let gladedocumenthash: string = "0";
  export let focusedGladeDOMNodeHash: number = 0;
  export let apikey: string;

  let htmlString: string | undefined = "";
  $: showPreview = false;
  let plainTextBody: string = "";

  let publishing = false;

  $: pendingAnnotation = new Annotation({
    gladeDOMNodeHash: focusedGladeDOMNodeHash,
    plainTextBody,
    htmlString,
    postedBy: {
      displayName: auth.currentUser?.displayName || "tiny-anonymous-ocelot", // If the user is creating their first anon post, the displayName hasn't sync'd yet
      uid: auth.currentUser?.uid,
    },
  });

  async function handleClickPreview() {
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

  function processNewAnnotation(pendingAnnotation: any) {
    dispatch("publish", { annotation: pendingAnnotation });
    setView(DialogView.List, true);
  }

  function handlePlainTextBodyChange(ev: { target: HTMLTextAreaElement }) {
    plainTextBody = ev.target.value;
  }

  function handleClickEdit() {
    showPreview = false;
  }

  function handleClickDiscard() {
    pendingAnnotation.htmlString = "";
    pendingAnnotation.plainTextBody = "";
    setView(DialogView.List);
  }

  async function handleClickPublish() {
    publishing = true;
    if (!plainTextBody) {
      setError({
        message: "You need to add content before posting!",
        code: "CreateAnnotationView.handleClickPreview.nothingToPost",
      });
      return;
    }
    htmlString = (await pendingAnnotation.getHtmlString()) || undefined;
    const published = await pendingAnnotation.save(gladedocumenthash, apikey);
    if (published) {
      processNewAnnotation(published);
      setView(DialogView.List, true);
    } else {
      console.log("failed to publish!\nare you sure your API key is correct?");
      setError({
        message: "Oh no! we couldn't publish your annotation",
        code: "CreateAnnotationView.handleClickPublish.failedToSave",
      });
    }
    publishing = false;
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
    mwc-linear-progress {
      --mdc-theme-primary: rgb(78, 205, 196);
    }
  </style>{#if showPreview}
    <div>
      <AnnotationComponent
        annotation={pendingAnnotation}
        isPreview={true}
        deleteAnnotation={null}
      />
    </div>
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
        <mwc-button on:click={handleClickEdit} disabled={publishing}
          >edit!</mwc-button
        >
      {:else}
        <mwc-button on:click={handleClickPreview} disabled={publishing}
          >show preview!</mwc-button
        >
      {/if}
      <mwc-button on:click={handleClickPublish} disabled={publishing}
        >publish!</mwc-button
      >
    </div>
  </div>
  <div>
    {#if publishing}
      <div><mwc-linear-progress indeterminate /></div>
    {/if}
  </div>
</div>
