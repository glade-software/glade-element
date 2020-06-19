---
layout: page.11ty.cjs
title: <glade-annotateable> ⌲ Home
---

# &lt;glade-annotateable>

`<glade-annotateable>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<glade-annotateable>` is just an HTML element. You can it anywhere you can use HTML!

```html
<glade-annotateable></glade-annotateable>
```

  </div>
  <div>

<glade-annotateable></glade-annotateable>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<glade-annotateable>` can be configured with attributed in plain HTML.

```html
<glade-annotateable slug="html">
  <p>this content is annotateable</p>
  <p>this is a paragraph inside a glade-annotateable element</p>
</glade-annotateable>
```

  </div>
  <div>

<glade-annotateable slug="html">
  <p>this content is annotateable</p>
  <p>this is a paragraph inside a glade-annotateable element</p>
</glade-annotateable>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<glade-annotateable>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const slug="lit-html";

render(html`
  <h2>This is a &lt;glade-annotateable&gt;</h2>
  <glade-annotateable .slug=${slug}></glade-annotateable>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;glade-annotateable&gt;</h2>
<glade-annotateable></glade-annotateable>

  </div>
</section>
