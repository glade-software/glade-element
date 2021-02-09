<svelte:options tag="glade-annotatable-list-annotations-view" />

<script lang="ts">
  import { DialogView } from "../DialogView";
  import { createEventDispatcher } from "svelte";
  import AnnotationComponent from "../components/Annotation.svelte";
  import type Annotation from "../Annotation";

  export let annotations: Annotation[];

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

  const handleClickCreateAnnotation = () => {
    setView(DialogView.Create);
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
      margin: 8;
      padding-top: 8;
    }

    .buttonShelf {
      display: flex;
      justify-content: flex-end;
    }
  </style>
  <div>
    {#if annotations && annotations.length}
      {#each annotations as annotation}
        <AnnotationComponent {annotation} />
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
