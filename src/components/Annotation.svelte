<svelte:options tag="glade-annotatable-annotation" />

<script lang="ts">
  export let annotation: Annotation;
</script>

<div>
  <style>
    .annotation {
      border: 1px solid #c4cfd6;
      margin: 8px;
      padding: 8px;
      border-radius: 8px;
      min-width: 500px;
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
    <span class="postedBy">@{annotation?.postedBy}</span>
    {#if annotation && !annotation?.htmlString}
      <div class="htmlContent loading">{annotation.plainTextBody || ""}</div>
    {/if}
    <div class="htmlContent">{@html annotation?.htmlString}</div>
  </div>
</div>
