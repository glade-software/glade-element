<svelte:options tag="glade-annotatable-annotation" />

<script lang="ts">
  import type Annotation from "../Annotation";
  import currentUser from "../stores/user";
  export let annotation: Annotation;
  export let deleteAnnotation;
  export let isPreview;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleDeleteAnnotation() {
    if (isPreview) return;
    // pass back to ListAnnotationView for deletion
    console.log("handleDelete", annotation);
    deleteAnnotation(annotation);
  }
</script>

<div>
  <style>
    .annotation {
      border: 1px solid #c4cfd6;
      padding: 6px;
      margin: 8px 0px;
      border-radius: 8px;
      min-width: 500px;
    }
    .deleteButton {
      color: #ff0000;
      float: right;
    }
    .htmlContent {
      max-width: 800px;
      object-fit: contain;
    }
    .postedBy {
      color: #1a535c;
    }
    .loading {
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );

      background-repeat: no-repeat;
      background-size: 800px 104px;

      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: forwards;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-name: placeholderShimmer;
      -webkit-animation-timing-function: linear;
    }

    @-webkit-keyframes placeholderShimmer {
      0% {
        background-position: -468px 0;
      }

      100% {
        background-position: 468px 0;
      }
    }
  </style>
  <div class="annotation">
    <span class="postedBy"
      >@{annotation?.postedBy.displayName ||
        "accidental-anonymous-anteater"}</span
    >
    {#if (!isPreview && $currentUser && annotation?.postedBy.uid == $currentUser.uid) || $currentUser.isForestOwner}
      <button class="deleteButton" on:click={handleDeleteAnnotation}>x</button>
    {/if}
    {#if annotation && !annotation?.htmlString}
      <div class="htmlContent loading">{annotation.plainTextBody || ""}</div>
    {/if}
    <div class="htmlContent">{@html annotation?.htmlString}</div>
  </div>
</div>
