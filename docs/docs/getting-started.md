---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

To get started you just need to include our javascript library on your page like this:

```html
<script
  type="module"
  src="https://unpkg.com/@glade-software/glade-annotateable"
></script>
```

Next, wrap your content with our newly declared custom element

```html
<glade-annotateable>
  <p>This content can be whatever you want!</p>
  <p>Users will be able to click on it, sign in, and add annotations!</p>
</glade-annotateable>
```

Now, users will be able to click on any DOM node within that body of content to add an annotation 🎉

If you're curious what that looks like, check out [this demo](https://demos.glade.app/docs-example) and add an annotation of your own!
