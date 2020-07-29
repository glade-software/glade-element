# glade-element  [![Published on npm](https://img.shields.io/npm/v/@glade-software/glade-annotateable.svg)](https://www.npmjs.com/package/@glade-software/glade-annotateable)

### Glade's vision for the internet is that every webpage can be annotated by any user.

After wrapping your content with the tag, all users will need to do is highlight a section of a webpage, to add an annotation, whatever media that may be.

```html
<glade-annotateable slug="readme-example">
    <p>This web content will be ingested by Glade</p>
    <p>because it is within the glade-annotateable tag</p>
    <p>Users will now be able to highlight any portion of this text to add an annotation!</p>
    <p>When this content is loaded, we will check for annotations in the database using the "slug" attribute</p>
</glade-annotateable>
```

### All you need to make this work
```html
  <script type="module" src="https://unpkg.com/@glade-software/glade-annotateable"></script>
  <style>
    .glade-has-annotations {
      /* style nodes with annotations however you wish */
      background-color:skyblue;
      cursor: pointer;
    }
  </style>
```

## Developer Guide

`<glade-annotateable>` is a complete web annotation system bundled in a single web component.

### How it works

When the component loads, it requests all annotations from the database that have a matching `slug` attribute.

Each `<glade-annotateable>` instance must have a defined `slug` attribute.

If there are no annotations pertaining to a given `slug`, that's fine. When an annotation is made it will be linked to the defined `slug`.

### Contributing

The component is declared in [/src/glade-annotateable.ts](/src/glade-annotateable.ts), this is where changes to the functionality of the component will likely take place.

To have the typescript compiler watch for changes and compile them, run `npm run build:watch`.

Then to test your changes, run `npm run serve` which serves the demo found in [/dev/index.html](/dev/index.html).

`npm run build` yields a single file in the root of the repo called `glade-annotateable.bundled.js` it is the only file required to declare the web component for use on the page, and is the one [https://unpkg.com/@glade-software/glade-annotateable](https://unpkg.com/@glade-software/glade-annotateable) points to.

### Feature and bug requests encouraged!
