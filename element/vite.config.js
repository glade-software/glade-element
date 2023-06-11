import { defineConfig } from "vite";

import { svelte } from "@sveltejs/vite-plugin-svelte";

// vite.config.js
import { resolve } from "path";
import sveltePreprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [sveltePreprocess({ typescript: true })],
      compilerOptions: {
        customElement: true,
      },
      onwarn: (warning, handler) => {
        if (warning.code.includes("a11y")) {
          return;
        }
        handler(warning);
      },
    }),
    replace({
      preventAssignment: true,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/main.ts"),
      name: "GladeAnnotatable",
      // the proper extensions will be added
      fileName: "glade-annotatable",
    },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: [], // ["vue"],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       //   vue: "Vue",
    //     },
    //   },
    // },
  },
});
