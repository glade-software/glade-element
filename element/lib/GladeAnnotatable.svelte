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
  import AccountView from "./views/AccountView.svelte";
  import LoginFormView from "./views/LoginFormView.svelte";
  import SignupFormView from "./views/SignupFormView.svelte";
  import AuthenticationMenuView from "./views/AnthenticationMenuView.svelte";

  import userStore from "./stores/user";
  // COMPONENTS
  import Header from "./components/Header.svelte";

  // Glade Classes
  import Annotation from "./Annotation";
  import type {AnnotationData} from './Annotation'

  // SemanticHash Library
  import { hashForString, getSemanticHashForDOMNode } from "./semanticHashing";


  import {functions, auth} from './firebase-instance'
  import { onAuthStateChanged } from "firebase/auth";
  import { httpsCallable } from "firebase/functions";

  import { DialogView } from "./DialogView";
  import type { Err } from "./Err";
  import Cohere from "cohere-js";

  let err: Err | null = null;
  $: error = err; // wat

  const ROOT_API_KEY =
    "v0ru.379031335f10b4cb40cff8f6feeb3d598db6529d52aa98637549ca8b63694c10";

  // this comes from the attribute "apikey" on glade-annotatable
  export let apikey: string;

  const COHERE_API_KEY = "0bEMs-b6UkqjiNepPJ1M4gZ9";

  Cohere.init(COHERE_API_KEY);


  let currentUser = null;

  userStore.subscribe((u) => {
    currentUser = u;
  });

  onAuthStateChanged(auth, (u) => {
    if (u) {
      console.debug("logged in");
      const user = {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName,
      };

      userStore.set(user);

      Cohere.identify(u.uid, {
        email: u.email || "",
        displayName: u.displayName || "",
      });
    } else {
      userStore.set(null);
    }
  });

  export let article: HTMLElement;

  let gladedocumenthash: string;

  // Set the default view to the ListAnnotationsView
  let activeView: DialogView;
  activeView = DialogView.List;
  console.debug("initalized");

  if (!apikey) {
    apikey = ROOT_API_KEY;
  }

  interface ValidateAPIKeyResponse {
    data: {
      isValid: boolean;
      forest: {
        ownerUid: string;
      };
    };
  }

  const doAPIKeyValidation = async () => {
    if (apikey) {
      const validateAPIKey = httpsCallable(functions, "validateAPIKey");
      try {
        // TODO: can we share this type as a return value for the cloud function?
        const validityResponse = (await validateAPIKey({
          apiKey: apikey,
        })) as ValidateAPIKeyResponse;

        const { isValid, forest } = validityResponse.data;

        if (isValid) {
          console.debug("apikey is valid", forest);

          const isForestOwner = currentUser?.uid === forest.ownerUid;

          userStore.update((u) => {
            if (!u) {
              return null;
            }
            return {
              ...u,
              isForestOwner,
            };
          });

          console.debug("currentUser.isForestOwner", isForestOwner);
        } else {
          console.error("apikey is not valid");
        }
      } catch (errorCheckingValidity) {
        console.error(errorCheckingValidity);
      }
    }
  };

  doAPIKeyValidation();

  console.debug(`apiKey: ${apikey}`);

  // if this is true, we show the Glade UI
  let showGladeUI = false;

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
      (annotation) =>
        annotation.gladeDOMNodeHash === referentGladeDomNodeHash &&
        !annotation.hidden
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

  interface GetAnnotationsResponse {
    data: {
      annotations: AnnotationData[];
    };
  }

  const getAnnotations = async () => {
    try {
      const fetchAnnotationsForDocumentHash = httpsCallable(
        functions,
        "getAnnotations"
      );

      let response = await fetchAnnotationsForDocumentHash({
        gladeDocumentHash: gladedocumenthash,
        gladeAPIKey: apikey,
      }) as GetAnnotationsResponse;

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
    startGlade();
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

  const handleClickAccount = () => {
    activeView =
      activeView !== DialogView.Account
        ? DialogView.Account
        : DialogView.List;
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

  const handlePublish = (ev: { detail: { annotation: Annotation } }) => {
    const { annotation } = ev.detail;
    annotations.push(annotation);
    processAnnotations();
  };

  const handleDeleteAnnotation = (ev: {
    detail: { annotationUid: string };
  }) => {
    annotations = annotations.filter((annotation) => {
      return annotation.uid !== ev.detail.annotationUid;
    });
    processAnnotations();
  };

  $: title = activeView !== DialogView.Account && activeView !== DialogView.AuthenticationMenu ? "annotations" : "account";

  export { gladedocumenthash };
</script>

<!-- The host website's DOM-->
<article
  data-glade-document-hash={gladedocumenthash}
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
  <Header {title} {handleClickAccount} />
  {#if error}
    <div />
    <div class="error">
      {`  ${error.message}`}
    </div>
  {/if}
  {#if activeView === DialogView.List}
    <ListAnnotationsView
      {apikey}
      {gladedocumenthash}
      on:error={handleError}
      on:set-view={handleSetView}
      on:delete-annotation={handleDeleteAnnotation}
      annotations={activeAnnotations}
    />
  {:else if activeView === DialogView.Create}
    <CreateAnnotationView
      {gladedocumenthash}
      {apikey}
      on:error={handleError}
      on:set-view={handleSetView}
      on:publish={handlePublish}
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
  {:else if activeView === DialogView.Account}
    <AccountView on:set-view={handleSetView} on:error={handleError} />
  {:else}
    <div>Never let it get this far.</div>
  {/if}
</mwc-dialog>
