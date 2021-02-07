<svelte:options tag="glade-annotatable" />

<script lang="ts">
  // Svelte Utils
  import { onMount } from "svelte";
  // UI Components
  import "@material/mwc-dialog";

  // VIEWS
  import ListAnnotationsView from "./views/ListAnnotationsView.svelte";
  import CreateAnnotationView from "./views/CreateAnnotationView.svelte";
  import SettingsView from "./views/SettingsView.svelte";
  import LoginView from "./views/LoginView.svelte";

  // COMPONENTS
  import Header from "./components/Header.svelte";

  // Glade Classes
  import Annotation from "./Annotation";

  // SemanticHash Library
  import { hashForString, getSemanticHashForDOMNode } from "./semanticHashing";

  // Datastore
  import firebase, { database } from "firebase/app";
  import "@firebase/functions";
  import initializeFirebase from "./initializeFirebase";
  initializeFirebase();

  export let article: HTMLElement;
  let gladedocumenthash: string;

  enum DialogView {
    List,
    Create,
    Login,
    Settings,
  }

  // Set the default view to the ListAnnotationsView
  let activeView: DialogView = DialogView.List;
  console.log("initalized");

  // if this is true, we show the Glade UI
  let showGladeUI = false;

  // the "semantic hash" of the refferent Glade DOM node (subject of annotations)
  let focusedGladeDOMNodeHash: number = 0;

  // all Annotations for the current article live in this array
  let annotations: Annotation[] = [
    new Annotation({
      gladeDOMNodeHash: -1039869147,
      plainTextBody: "foo",
      htmlString: "<p>foo</p>",
      postedBy: "matt",
    }),
  ];

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
  };

  /**
   * Called when the Slot content exists
   */
  onMount(() => {
    console.log("mounted");
    // TODO: investigate: for some reason the element isn't actually in the DOM until a ms later
    setTimeout(startGlade, 1);
  });

  const startGlade = async () => {
    setSematicContentHashes();
    try {
      const fetchAnnotationsForDocumentHash = firebase
        .functions()
        .httpsCallable("getAnnotations");
      console.log(gladedocumenthash);

      let response = await fetchAnnotationsForDocumentHash({
        gladeDocumentHash: gladedocumenthash,
      });

      annotations = response?.data?.annotations.map(
        (a: any) => new Annotation(a)
      );
      console.log(annotations);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Handles mouseup events, sets active DOM node that is the subject of the panel, and opens panel
   * @param {MouseEvent} ev The "mouseup" event that might trigger the opening of the Glade UI
   */
  const handleArticleMouseUp = (ev: MouseEvent) => {
    console.log(document.querySelector("glade-annotatable"));
    if (ev.button === 0) {
      // deepest node in DOM tree that recieved this event
      const targetNode = ev?.composedPath()[0] as Element;

      const gladeDOMNodeHash: number = parseInt(
        targetNode.getAttribute("data-glade-node-hash") as string
      );

      focusedGladeDOMNodeHash = gladeDOMNodeHash;

      activeAnnotations = annotationsForGladeDOMNodeHash(gladeDOMNodeHash);
      showGladeUI = true;
      console.log("activeAnnotations");
      console.log(activeAnnotations);
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
    activeView = DialogView.Settings;
  };

  const title = activeView === DialogView.Settings ? "settings" : "annotations";
  console.log(annotations);
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
<mwc-dialog open={showGladeUI} on:closed={handleCloseDialog}>
  <Header {title} {handleClickSettings} />
  {#if activeView === DialogView.List}
    <ListAnnotationsView annotations={activeAnnotations} />
  {:else if activeView === DialogView.Create}
    <CreateAnnotationView />
  {:else if activeView === DialogView.Login}
    <LoginView />
  {:else if activeView === DialogView.Settings}
    <SettingsView />
  {:else}
    <div>Never let it get this far.</div>
  {/if}
</mwc-dialog>
