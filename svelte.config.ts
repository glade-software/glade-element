import autoPreprocess from "svelte-preprocess";

export default {
  preprocess: autoPreprocess({ typescript: true }),
  compilerOptions: {
    customElement: true
  },
};
