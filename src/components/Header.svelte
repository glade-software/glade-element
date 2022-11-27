<svelte:options tag="glade-annotatable-dialog-header" />

<script lang="ts">
  export let title: string;
  export let handleClickAccount: svelte.JSX.EventHandler;
  import AccountIcon from '../img/icon/user.svelte'

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
    .sm-icon:hover {
      cursor: pointer;
    }
    .shamelessSpacer {
      display: flex;
    }
    .sm-icon {
      padding-top: 4px;
    }
  </style>
  <div class="heading">
    <div class="title">{title}</div>
    <span class="shamelessSpacer" />
    <div class="sm-icon" on:click={handleClickAccount}><AccountIcon class="sm-icon"/></div>
  </div>
  <hr />
</div>
