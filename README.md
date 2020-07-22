# glade-element

### Glade's vision for the internet is that every webpage can be annotated by any user.

After wrapping your content with the tag, all users will need to do is highlight a section of a webpage, to add an annotation, whatever media that may be.

```
<glade-annotateable slug="readme-example">
    <p>This web content will be ingested by Glade, because it is encapsulated within the glade-annotateable tag</p>
    <p>Users viewing this will be able to highlight any portion of this text, and attach an annotation!</p>
    <p>When this content is loaded, we will look for annotations in our db, using the "slug" attribute</p>
</glade-annotateable>
```

### All you need to make this work
```
  <script type="module" src="https://unpkg.com/@glade-software/glade-annotateable"></script>
  <style>
    .glade-has-annotations {
      // style nodes with annotations however you wish
      background-color:skyblue;
      cursor: pointer;
    }
  </style>
```

## Dev Guide

`npm run build` yields a file in the root of the repo called `glade-annotateable.bundled.js` it is the only file required to declare the web component for use on the page, and is the one [https://unpkg.com/@glade-software/glade-annotateable](https://unpkg.com/@glade-software/glade-annotateable) points to.

For a dev server, run `npm run build:watch` and `npm serve`

This will serve the `restless` demo on http://localhost:8000/dev/index.html

### Feature and bug requests encouraged!
