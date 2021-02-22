<svelte:options tag="glade-annotatable" />

<script lang="ts">
  // Svelte Utils
  import { onMount } from "svelte";
  // UI Components
  import "@material/mwc-dialog";
  import "@material/mwc-button";

  // VIEWS
  import ListAnnotationsView from "./views/ListAnnotationsView.svelte";
  import CreateAnnotationView from "./views/CreateAnnotationView.svelte";
  import SettingsView from "./views/SettingsView.svelte";
  import LoginFormView from "./views/LoginFormView.svelte";
  import SignupFormView from "./views/SignupFormView.svelte";
  import AuthenticationMenuView from "./views/AnthenticationMenuView.svelte";

  // COMPONENTS
  import Header from "./components/Header.svelte";

  // Glade Classes
  import Annotation from "./Annotation";

  // SemanticHash Library
  import { hashForString, getSemanticHashForDOMNode } from "./semanticHashing";

  // Datastore
  import firebase from "firebase/app";
  import "@firebase/functions";
  import initializeFirebase from "./initializeFirebase";
  import { DialogView } from "./DialogView";
  import type { Err } from "./Err";
  initializeFirebase();

  export let article: HTMLElement;

  let gladedocumenthash: string;

  // Set the default view to the ListAnnotationsView
  let activeView: DialogView;
  activeView = DialogView.List;
  console.debug("initalized");

  // if this is true, we show the Glade UI
  let showGladeUI = false;
  let err: Err | null = null;
  $: error = err;

  // the "semantic hash" of the refferent Glade DOM node (subject of annotations)
  let focusedGladeDOMNodeHash: number = 0;

  // all Annotations for the current article live in this array
  let annotations: Annotation[] = [];

  // all focused Annotations for the current article live in this array
  let activeAnnotations: Annotation[] = [];

  const annotationsForGladeDOMNodeHash = (
    referentGladeDomNodeHash: number
  ): Annotation[] =>
    annotations.filter(
      (annotation) => annotation.gladeDOMNodeHash === referentGladeDomNodeHash
    );

  const setSematicContentHashes = () => {
    const gladeDOMNodeHashes: string[] = [];
    const articleContent = article.querySelector("slot") as HTMLSlotElement;
    const children = Array.from(articleContent.assignedElements());
    children.forEach((node: Element) => {
      const gladeDOMNodeHash = getSemanticHashForDOMNode(node);
      if (gladeDOMNodeHash) {
        node.setAttribute("data-glade-node-hash", gladeDOMNodeHash);
        gladeDOMNodeHashes.push(gladeDOMNodeHash);
      }
    });
    // Recursive hashing for document ID
    gladedocumenthash = hashForString(gladeDOMNodeHashes.join("_"));
    console.debug("glade-document-hash", gladedocumenthash);
  };

  const getAnnotations = async () => {
    try {
      const fetchAnnotationsForDocumentHash = firebase
        .functions()
        .httpsCallable("getAnnotations");

      let response = await fetchAnnotationsForDocumentHash({
        gladeDocumentHash: gladedocumenthash,
      });

      annotations = response?.data?.annotations.map(
        (a: any) => new Annotation(a)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const processAnnotations = () => {
    const articleContent = article.querySelector("slot") as HTMLSlotElement;
    const children = Array.from(articleContent.assignedElements());
    children.forEach((node) => {
      const gladeDOMNodeHash = parseInt(
        node.getAttribute("data-glade-node-hash") || "0"
      );

      const annotations = annotationsForGladeDOMNodeHash(gladeDOMNodeHash);

      if (annotations.length) {
        node.classList.add("glade-has-annotations");
      } else {
        node.classList.remove("glade-has-annotations");
      }
    });
  };

  /**
   * Called when the Slot content exists
   */
  onMount(() => {
    console.debug("mounted");
    // TODO: investigate: for some reason the element isn't actually in the DOM until a ms later
    setTimeout(startGlade, 1);
  });

  const startGlade = async () => {
    setSematicContentHashes();
    await getAnnotations();
    processAnnotations();
  };

  /**
   * Handles mouseup events, sets active DOM node that is the subject of the panel, and opens panel
   * @param {MouseEvent} ev The "mouseup" event that might trigger the opening of the Glade UI
   */
  const handleArticleMouseUp = (ev: MouseEvent) => {
    console.debug(document.querySelector("glade-annotatable"));
    if (ev.button === 0) {
      // deepest node in DOM tree that recieved this event
      const targetNode = ev?.composedPath()[0] as Element;

      const gladeDOMNodeHash: number = parseInt(
        targetNode.getAttribute("data-glade-node-hash") as string
      );

      focusedGladeDOMNodeHash = gladeDOMNodeHash;
      activeAnnotations = annotationsForGladeDOMNodeHash(
        focusedGladeDOMNodeHash
      );
      showGladeUI = true;
    }
  };

  /**
   * Cleanup when Dialog is closed
   */
  const handleCloseDialog = () => {
    showGladeUI = false;
    activeView = DialogView.List;
  };

  const handleClickSettings = () => {
    activeView =
      activeView !== DialogView.Settings
        ? DialogView.Settings
        : DialogView.List;
  };

  const handleClickCreateAnnotation = () => {
    activeView = DialogView.Create;
  };

  const handleError = (ev: { detail: Err | null }) => {
    error = ev.detail;
    console.debug(`error ${error}`);
    setTimeout(() => {
      error = null;
    }, 3000);
  };

  const handleSetView = (ev: {
    detail: { nextView: DialogView; dismissModal: Boolean };
  }) => {
    console.debug("handleChangeView", ev);
    if (ev.detail.dismissModal) {
      showGladeUI = false;
    }
    activeView = ev.detail.nextView;
  };

  console.debug(annotations);

  $: title = activeView === DialogView.Settings ? "settings" : "annotations";

  export { gladedocumenthash };
</script>

<!-- The host website's DOM-->
<article
  glade-document-hash={gladedocumenthash}
  bind:this={article}
  on:mouseup={handleArticleMouseUp}
>
  <slot />
</article>

<!--Glade's UI-->
<mwc-dialog open={showGladeUI} on:closed={handleCloseDialog} hideActions>
  <style>
    .error {
      border: solid 1px red;
      color: red;
      border-radius: 8px;
      padding: 8px;
      margin: 8px;
    }
  </style>
  <Header {title} {handleClickSettings} />
  {#if error}
    <div />
    <div class="error">
      {`  ${error.message}`}
    </div>
  {/if}
  {#if activeView === DialogView.List}
    <ListAnnotationsView
      on:error={handleError}
      on:set-view={handleSetView}
      annotations={activeAnnotations}
    />
  {:else if activeView === DialogView.Create}
    <CreateAnnotationView
      {gladedocumenthash}
      on:error={handleError}
      on:set-view={handleSetView}
      {focusedGladeDOMNodeHash}
    />
  {:else if activeView === DialogView.AuthenticationMenu}
    <AuthenticationMenuView
      on:set-view={handleSetView}
      on:error={handleError}
    />
  {:else if activeView === DialogView.LoginForm}
    <LoginFormView on:set-view={handleSetView} on:error={handleError} />
  {:else if activeView === DialogView.SignupForm}
    <SignupFormView on:set-view={handleSetView} on:error={handleError} />
  {:else if activeView === DialogView.Settings}
    <SettingsView on:set-view={handleSetView} on:error={handleError} />
  {:else}
    <div>Never let it get this far.</div>
  {/if}
</mwc-dialog>
