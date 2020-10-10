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

Then you need to decide on a **unique** `slug` for your content.

A `slug` must _only_ use letters, numbers, and hypens.

The only thing left to do is wrap your content with our tag!

That looks like this:

```html
<glade-annotateable slug="@matt/some-post">
  <p>This content can be whatever you want!</p>
  <p>Users will be able to click on it, sign in, and add annotations!</p>
</glade-annotateable>
```

It's important to prefix your slug with your [Glade](https://glade.app) username, because at the moment everyone shares the same namespace 😳
