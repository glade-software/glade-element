---
layout: example.11ty.cjs
title: <glade-annotateable> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
    .glade-has-annotations {
      background-color:skyblue;
      cursor: pointer;
    }
</style>

<glade-annotateable slug="basic-example">
  <p>This is a basic example</p>
  <p>it has a few nodes<p>
  <p>click one to annotate it!</p>
</glade-annotateable>

<h3>CSS</h3>

```css
    .glade-has-annotations {
      // style nodes with annotations however you wish
      background-color:skyblue;
      cursor: pointer;
    }
```

<h3>HTML</h3>

```html
<glade-annotateable>
  <p>This is a basic example</p>
  <p>it has a few nodes<p>
  <p>click one to annotate it!</p>
</glade-annotateable>
```
