<svelte:options tag="glade-annotatable-list-annotations-view" />

<script>
  export let annotations;
  console.log("ListAnnotationsView initialized", annotations);
</script>

<div>
  {#if annotations && annotations.length}
    {#each annotations as { htmlString, postedBy }}
      <div>
        <pre>
          {htmlString}
        </pre>
        <p>{postedBy}</p>
      </div>
    {/each}
  {/if}
</div>
