<svelte:options tag="glade-annotatable-list-annotations-view" />

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Annotation from "../components/Annotation.svelte";
  export let annotations;
  console.debug("ListAnnotationsView initialized");
</script>

<div>
  <style>
    .annotation {
      border: 1px solid #c4cfd6;
      margin: 8px;
      padding: 8px;
      border-radius: 8px;
    }

    .htmlContent {
      max-width: 800px;
      object-fit: contain;
    }

    .postedBy {
      color: #1a535c;
    }

    .noAnnotationsMsg {
      margin: 8;
      padding: 8;
    }
    .buttonShelf {
      display: flex;
      justify-content: flex-end;
    }
  </style>
  <div>
    {#if annotations && annotations.length}
      {#each annotations as annotation}
        <Annotation {annotation} />
      {/each}
    {:else}
      <div class="noAnnotationsMsg">No annotations here yet!</div>
    {/if}
    <div class="buttonShelf">
      <mwc-button>Create Annotation!</mwc-button>
      <mwc-button />
    </div>
  </div>
</div>
