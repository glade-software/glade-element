import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import svelteConfig from "./svelte.config.ts";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
const production = process.env.PRE_PUBLISH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
  input: "src/index.ts",
  output: [{ file: pkg.module, format: "es", sourcemap: !production }],
  plugins: [
    svelte({ ...svelteConfig }),
    typescript(),
    replace({
      "Reflect.decorate": "undefined",
      "process.env.NODE_ENV": JSON.stringify(
        !!production ? "production" : "development" // lexical uses this, but it's not defined in the browser
      ),
    }),
    resolve({
      // Below is an important line!
      dedupe: ["svelte", "svelte/transition", "svelte/internal", "lexical"],
      browser: true,
      main: true,
    }),
    commonjs(),
    json(),
  ],
};
