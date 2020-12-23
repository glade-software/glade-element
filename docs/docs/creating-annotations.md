---
id: creating-annotations
title: Creating Annotations
sidebar_label: Creating Annotations
---

Annotations are really powerful. They can be plain text, but they can also be written in **Markdown**, which is rendered in a firebase cloud function by [remark](https://github.com/remarkjs/remark).

Annotations also leverage a toolset called [remark-embedder](https://github.com/remark-embedder/core) and the [oembed](https://oembed.com) protocol to render embeds for any media URL you add to your annotation!

This means all you need to do to include other web media as an annotation is to put a URL linking to it on a new line in your annotation!

**annotations can be written like this:**

```md
### This is the input text for a sample annotation!

annotations can include [links](https://developer.mozilla.org/en-US/docs/Glossary/Hyperlink) or embedded media!

for example, here is a video about markdown!

https://www.youtube.com/watch?v=f49LJV1i-_w
```

**Then they are rendered like this:**

<a href="https://demos.glade.app/docs-example"><img src="/img/markdown-embed-example.png" height="300"/></a>
