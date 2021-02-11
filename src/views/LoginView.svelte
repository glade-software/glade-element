<svelte:options tag="glade-annotatable-login-view" />

<script lang="ts">
  import "@material/mwc-textfield";
  console.log("LoginView initialized");
</script>

<form>
  <mwc-textfield name="email" type="email" outlined="true" />
  <mwc-textfield name="password" type="password" outlined="true" />
</form>
