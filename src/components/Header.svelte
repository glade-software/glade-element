<svelte:options tag="glade-annotatable-dialog-header" />

<script lang="ts">
  export let title;
  export let activeView;
  console.log("activeView");
  console.log(activeView);

  export let handleClickSettings;
</script>

<div>
  <style>
    hr {
      width: 100%;
      margin: 0px;
      color: rgba(0, 0, 0, 0.6);
    }
    .title {
      font-style: thin;
      display: flex;
      -webkit-font-smoothing: antialiased;
      font-family: Roboto, sans-serif;
      border-bottom: 1px solid transparent;
      color: rgba(0, 0, 0, 0.87);
      font-size: 1.25rem;
      letter-spacing: 0.0125rem;
    }
    .heading {
      display: flex;
      height: 40px;
      vertical-align: 0;
      justify-content: space-around;
    }
    .settingsIcon {
      display: flex;
      justify-self: self-end;
      font-size: 1.15rem;
    }
    .settingsIcon:hover {
      color: #6200f3;
      cursor: pointer;
    }
    .shamelessSpacer {
      display: flex;
    }
  </style>
  <div class="heading">
    <div class="title">{title}</div>
    <span class="shamelessSpacer" />
    <div class="settingsIcon" on:click={handleClickSettings}>⚙</div>
  </div>
  <hr />
</div>
