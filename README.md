# glade-annotatable, but svelted

Your component's source code lives in `src/Component.svelte`.

You can create a package that exports multiple components by adding them to the `src` directory and editing `src/index.js` to reexport them as named exports.

TODO

* [ ] some firm opinions about the best way to test components
* [ ] update `degit` so that it automates some of the setup work


## Setting up

* Run `npm init` (or `yarn init`)
* Replace this README with your own


## Consuming components

`npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
