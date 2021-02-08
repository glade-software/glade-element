<svelte:options tag="glade-annotatable-create-annotation-view" />

<script lang="ts">
  import "@material/mwc-button";
  import firebase from "@firebase/app";
  import "@firebase/auth";
  import Annotation from "../Annotation";
  import AnnotationComponent from "../components/Annotation.svelte";

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
    showPreview = true;
    htmlString = (await pendingAnnotation.getHtmlString()) || undefined;
  }

  function handleClickEdit(ev: MouseEvent) {
    showPreview = false;
  }
</script>

<div>
  <style>
    textarea {
      width: 500px;
      margin: 8px;
      padding: 8px;
    }
    .buttonShelf {
      display: flex;
      justify-content: flex-end;
    }
  </style>{#if showPreview}
    <div><AnnotationComponent annotation={pendingAnnotation} /></div>
  {:else}
    <textarea bind:value={plainTextBody} placeholder="" />
  {/if}
  <div class="buttonShelf">
    {#if showPreview}
      <mwc-button on:click={handleClickEdit}>edit!</mwc-button>
    {:else}
      <mwc-button on:click={handleClickPreview}>show preview!</mwc-button>
    {/if}
    <mwc-button>publish!</mwc-button>
  </div>
</div>
