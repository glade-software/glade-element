import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json" assert { type: "json" };
// import typescript from "@rollup/plugin-typescript";
import ts2 from "rollup-plugin-typescript2";
import autoPreprocess from "svelte-preprocess";
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
    svelte({
      preprocess: autoPreprocess(), //({ typescript: true }),
      include: ["src/**/*.svelte", "node_modules/svelte-lexical/**/*.svelte"], //, "node_modules/**/*.svelte"],
      compilerOptions: {
        customElement: true,
      },
    }),
    ts2(),
    replace({
      "Reflect.decorate": "undefined",
      "process.env.NODE_ENV": JSON.stringify(
        !!production ? "production" : "development" // lexical uses this, but it's not defined in the browser
      ),
      // preventAssignment: true,
    }),
    resolve({
      // Below is an important line!
      dedupe: ["svelte", "svelte/transition", "svelte/internal"],
      browser: true,
      main: true,
    }),
    commonjs(),
    json(),
  ],
};
