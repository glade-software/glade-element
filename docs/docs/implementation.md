---
id: implementation
title: How it Works
sidebar_label: How it Works
---

## Custom Element

Glade is built using web components, and the library itself is a custom element.

Wrapping content with the Glade custom element augments that content and makes it annotatable by web users!

That's done like this:

```html
<glade-annotatable>
  <p>Lorem Ipsum</p>
  <p>I don't know latin</p>
</glade-annotatable>
```

## User Experience

Now as a user, if I encountered that _magnum opus_ online in the wild, I would be able to interact with it, and add annotations to any of the DOM nodes inside by clicking on them.
At that point I'd be prompted to log in to my Glade account.

Sign up for a Glade account [here!](https://glade.app)

## Styling

Glade will iterate through the [**referents**](/docs/glossary#referent) that make up your [**document**](/docs/glossary#document) and it will add the [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) `glade-has-annotations` if a [**referent**](/docs/glossary#referent) has annotations, so you can choose how to style those [**referent**](/docs/glossary#referent) nodes however you want.

## In the Weeds

### lit-element

glade-annotatable is built with a library called [lit-element](https://lit-element.polymer-project.org/) which makes the declaration of custom elements simpler, supposedly.

### Lifecycle

Let's assume you've gone through the [Getting Started Guide](/docs/getting-started)

At that point after your page loads, the following events will occur in the browser as a result of the component being rendered to the DOM.

### Constructor

The constructor initializes [firebase](https://firebase.com), which is the BaaS platform that holds Glade's annotations.

Unlike the following steps it's initialization does not depend on any DOM content being parsed.

### Updated

Whenever a lit-element property is changed, lit-element will call the `updated` handler, including on first load

1. Upon first load `updated` will call a function called `setContentHashes` which will hash each DOM node in the Glade [**document**](/docs/glossary#document), these nodes being hashed are also known as [**referents**](/docs/glossary#referent).

   Currently it is _only_ the [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property of the nodes that is hashed.
   Each DOM node hash is known as a `gladeDomNodeHash`.

2. Next, all these hashes are concatenated and hashed once more, this new hash is called the `gladeDocumentHash` and this is used as the unique identifier for the Glade [**document**](/docs/glossary#document).

3. Then `getAnnotationsFromDb` is called and all Glade [**annotations**](/docs/glossary#annotations) are looked up by their `gladeDocumentHash` in [firestore](https://firebase.google.com/products/firestore), and are subsequently iterated through in the client and assigned to their [**referent**](/docs/glossary#referent) nodes by looking at their respective `gladeDomNodeHash`s and comparing them to the ones in the DOM currently.
4. If a [**referent**](/docs/glossary#referent) has annotations, the `glade-has-annotations` [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) is applied to that node so that users can style their nodes accordingly.
