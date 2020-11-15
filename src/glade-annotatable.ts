import {LitElement, html, customElement, property, css} from 'lit-element';
import {queryAssignedNodes} from 'lit-element/lib/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-textarea';

import firebase from 'firebase';

// Different views the modal may reflect
enum DialogRole {
  List = 'LIST', // Listing annotations in the modal
  Create = 'CREATE', // Annotation creation form
  Login = 'LOGIN', // User authentication form
}

@customElement('glade-annotatable')
export class GladeAnnotatable extends LitElement {
  /**
   * The content nodes inside the tag
   */
  @queryAssignedNodes()
  gladeContentNodes?: NodeListOf<Element>;

  /**
   * Verbosity of logs
   */
  @property({type: Boolean})
  verbose = false;

  /**
   * A hash of the concatenation of all gladeDomNodeHashes
   */
  @property({type: Number, reflect: true})
  gladeDocumentHash = 0;

  /**
   * Whether or not the Glade dialog is currently opened
   */
  @property({type: Boolean})
  annotationsModalOpened = false;

  /**
   * The current login form error message
   */
  @property({type: String})
  loginErrorMessage = '';

  /**
   * An object with all firebase configuration options, traditionally this config should not be published, but the embeddable nature of <glade-component> seems to be an exception
   */
  firebaseConfig = {
    apiKey: 'AIzaSyAtc2ed5rsHT7IOF9E1psFhkqtCqKib25U',
    authDomain: 'glade-software-firebase.firebaseapp.com',
    databaseURL: 'https://glade-software-firebase.firebaseio.com',
    projectId: 'glade-software-firebase',
    storageBucket: 'glade-software-firebase.appspot.com',
    messagingSenderId: '527964919900',
    appId: '1:527964919900:web:dc1ffc9e14a70b08b3ae99',
  };

  /**
   * the current firebase instance
   */
  firebase: any;

  /**
   * the current firestore database instance
   */
  db!: firebase.firestore.Firestore;

  /**
   * the active firebase user
   */
  user!: firebase.User | null;

  /**
   * the email currently being used to sign in
   */
  @property()
  email = '';

  /**
   * the password currently being used to sign in
   */
  @property()
  password = '';

  /**
   * the body of the annotation that is currently being composed
   */
  @property({type: String})
  pendingAnnotationBody = '';

  /**
   * the index of the referrent DOM node for the pending annotation
   */
  @property({type: Number})
  pendingGladeDomNodeHash = 0;

  /**
   * an array of all annotations for this document
   */
  @property({type: Array})
  annotations: Array<{
    body: string;
    gladeDomNodeHash: number;
    postedBy: string | undefined;
  }> = [];

  /**
   * an array of all annotations that are currently listed for the selected referrent
   */
  @property({type: Array})
  activeAnnotations: Array<{
    body: string;
    gladeDomNodeHash: number;
    postedBy: string | undefined;
  }> = [];

  /**
   * the current UI mode of the Glade dialog
   * List, Create, or Login
   */
  @property({type: String})
  dialogRole: DialogRole = DialogRole.List;

  @property({type: Array})
  nodeHashes: string[] = [];

  firstUpdate = true;

  static styles = css`
    :host {
      display: block;
      max-width: 800px;
    }
    .create-annotation-form {
      min-width: 320px;
    }
    .dialog {
      width: 60%;
      margin: 20%;
    }
    .large {
      font-size: x-large;
    }
  `;

  constructor() {
    super();
    this.initializeFirebase();
  }

  /**
   * This is called everytime a lit-element property changes, including first render
   */
  async updated() {
    if (this.firstUpdate) {
      this.firstUpdate = false;

      this.log('glade initializing');

      this.setContentHashes();
      this.log('content parsed');
      await this.getAnnotationsFromDB();
      this.log('annotations fetched');
      this.processAnnotations();
      this.log('annotations rendered');
    }
  }

  /**
   * the template to display when in Login DialogRole
   */
  get loginTemplate() {
    if (this.user) return html``;
    return html`
      <div
        id="loginTemplate"
        style="border: 1px solid; margin:8px; padding:8px;"
      >
        <p>you need an account to add annotations</p>
        <input id="email" name="email" placeholder="email" type="email" />
        <input
          id="password"
          name="password"
          placeholder="password"
          type="password"
        />
      </div>
      <div style="color:red;">${this.loginErrorMessage}</div>
      <mwc-button slot="secondaryAction"
        ><a
          href="https://glade.app/signup?from=${encodeURIComponent(
            window.location.href
          )}"
          >sign up?</a
        ></mwc-button
      >
      <mwc-button slot="primaryAction" @click=${this.handleClickLogin}
        >Sign in!</mwc-button
      >
    `;
  }

  /**
   * the template to display when in Create DialogRole
   */
  get createAnnotationTemplate() {
    return html`
      <mwc-textarea
        style="width:500px; margin:8px; padding:8px;"
        placeholder=""
        id="annotationBody"
      ></mwc-textarea>
      <mwc-button
        slot="secondaryAction"
        @click=${this.handleClickPublishAnnotation}
        >Publish Annotation!</mwc-button
      >
    `;
  }
  /**
   * the template to display when in List DialogRole
   */
  get annotationsListTemplate() {
    return html`<div>
        ${this.activeAnnotations.length
          ? this.activeAnnotations.map((annotation) => {
              return html`<div
                style="border: 1px solid; margin:8px; padding:8px;"
              >
                <span style="color: #1A535C;"
                  >${annotation.postedBy || 'anonymous'}</span
                >:
                <p>${annotation.body}</p>
              </div>`;
            })
          : 'No annotations here yet!'}
      </div>
      <mwc-button
        class="button-cta"
        slot="primaryAction"
        @click=${this.handleClickCreateAnnotation}
        >Create Annotation!</mwc-button
      > `;
  }

  /**
   * the current template to display in the dialog
   */
  get modalContent() {
    switch (this.dialogRole) {
      case DialogRole.List:
        return this.annotationsListTemplate;
      case DialogRole.Login:
        return this.loginTemplate;
      case DialogRole.Create:
        return this.createAnnotationTemplate;
      default:
        return html`DialogRole Error`;
    }
  }

  /**
   * A console logger that only runs if the verbose attribute is truthy
   * @param messages
   */
  log(...messages: String[]) {
    if (this.verbose) console.log(...messages);
  }

  annotationsForHash(domNodeHash: number) {
    return this.annotations.filter(
      (annotation) => annotation.gladeDomNodeHash === domNodeHash
    );
  }

  initializeFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.firebaseConfig);
    }

    this.db = firebase.firestore();
    this.user = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged(this.handleAuthStateChanged.bind(this));
  }

  async handleAuthStateChanged(u: firebase.User | null) {
    if (u) {
      this.user = u;
      const userDocRef = await this.db
        .collection('users')
        .doc(this.user.uid)
        .get();

      const displayName = userDocRef?.data()?.displayName;

      if (displayName + !u.displayName) {
        this.user.updateProfile({displayName});
      }
    } else {
      this.user = null;
    }
    this.requestUpdate();
  }

  async getAnnotationsFromDB() {
    this.log(
      'fetching annotations for glade-tree',
      `${this.gladeDocumentHash}`
    );

    const annotationSnapshots = await this.db
      .collection(`glade-trees`)
      .doc(`${this.gladeDocumentHash}`)
      .collection(`annotations`)
      .get();

    annotationSnapshots.forEach((document) => {
      const {body, postedBy, gladeDomNodeHash} = document.data();
      this.annotations.push({
        body,
        postedBy,
        gladeDomNodeHash,
      });
    });
  }

  /**
   * hashString https://stackoverflow.com/a/8831937/2183475
   * @param stringToHash the string we wish to hash
   */
  hashString(stringToHash: string): string {
    var hash = 0;

    if (stringToHash.length == 0) {
      return `${hash}`;
    }

    for (var i = 0; i < stringToHash.length; i++) {
      var char = stringToHash.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }

    return `${hash}`;
  }

  /**
   * Hash each DOM node and set "data-glade-node-hash" attribute on each node to the new hash
   * Then concatenate all the hashes to calculate the "gladeDocumentHash"
   */
  setContentHashes() {
    const elementNodeType = 1;
    const nodeHashes: string[] = [];
    this.gladeContentNodes?.forEach((node: Element) => {
      // This excludes non-element nodes like textNodes
      if (node.nodeType === elementNodeType) {
        const gladeNodeHash = this.hashString(node.textContent || '');

        node.setAttribute('data-glade-node-hash', gladeNodeHash);
        nodeHashes.push(gladeNodeHash);
      }
    });

    const docHash: string = this.hashString(nodeHashes.join('_'));
    this.gladeDocumentHash = parseInt(docHash);
  }

  /**
   * Takes annotations that have been fetched from the database and applies a class to DOM nodes for which annotations exist
   */
  processAnnotations() {
    this.log('processing annotations');

    const elementNodeType = 1;

    this.gladeContentNodes?.forEach((node) => {
      // This excludes non-element nodes like textNodes
      if (node.nodeType === elementNodeType) {
        const nodeHash = parseInt(
          node.getAttribute('data-glade-node-hash') || '0'
        );

        // aggregate all annotations for a given node index in the DOM
        const annotationsForHash = this.annotations.filter(
          ({gladeDomNodeHash}) => {
            return gladeDomNodeHash == nodeHash;
          }
        );

        // if a node index has annotations, give it a class for CSS styles
        if (annotationsForHash.length) {
          node.classList.add('glade-has-annotations');
        } else {
          // clear class if it is wrongly present on a DOM node that has no annotations
          node.classList.remove('glade-has-annotations');
        }
      }
    });
  }

  handleClickCreateAnnotation(_: MouseEvent) {
    if (this.user) {
      this.dialogRole = DialogRole.Create;
    } else {
      this.dialogRole = DialogRole.Login;
    }
    this.requestUpdate();
  }

  async handleClickPublishAnnotation(_: MouseEvent) {
    this.log('publish button clicked');
    const annotationBodyElement = this.shadowRoot?.querySelector(
      '#annotationBody'
    ) as HTMLTextAreaElement;

    const body = annotationBodyElement?.value;
    this.pendingAnnotationBody = body;

    const postedBy = this.user?.displayName;

    const gladeDomNodeHash = this.pendingGladeDomNodeHash;
    this.log('publishing annotation with nodeHash', `${gladeDomNodeHash}`);

    let annotationDocument = {
      postedBy: postedBy || undefined,
      body,
      gladeDomNodeHash,
    };

    await this.db
      .collection('glade-trees')
      .doc(`${this.gladeDocumentHash}`)
      .collection('annotations')
      .add(annotationDocument);

    this.annotationsModalOpened = false;
    this.dialogRole = DialogRole.List;

    this.annotations.push(annotationDocument);

    this.processAnnotations();
  }

  async handleClickLogin(_: MouseEvent) {
    try {
      const emailElement = this.shadowRoot?.querySelector(
        'input#email'
      ) as HTMLInputElement;
      const passwordElement = this.shadowRoot?.querySelector(
        'input#password'
      ) as HTMLInputElement;

      this.email = emailElement?.value;
      this.password = passwordElement?.value;

      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);

      this.annotationsModalOpened = false;
    } catch (error) {
      let beLouder = !!this.loginErrorMessage;

      if (error.code === 'auth/wrong-password') {
        this.loginErrorMessage = 'password incorrect!';
        this.log('wrong password');
      } else if (error.code === 'auth/user-not-found') {
        this.loginErrorMessage = 'no user with that email!';
        this.log('user not found');
      } else if (error.code === 'auth/too-many-requests') {
        this.loginErrorMessage = 'too many attempts, try again later';
      }
      if (beLouder) {
        this.loginErrorMessage += '!';
      }
    }
    this.requestUpdate();
  }

  handleMouseUpOnChildren(ev: MouseEvent) {
    if (ev.button === 0) {
      // deepest node in DOM tree that recieved this event
      const targetNode = ev?.composedPath()[0] as Element;

      const gladeDomNodeHash: number = parseInt(
        targetNode.getAttribute('data-glade-node-hash') as string
      );

      this.pendingGladeDomNodeHash = gladeDomNodeHash;

      this.activeAnnotations = this.annotationsForHash(gladeDomNodeHash);
      this.annotationsModalOpened = true;
      this.requestUpdate();
    }
  }

  render() {
    return html`<mwc-dialog
        @closed=${() => {
          this.annotationsModalOpened = false;
          this.dialogRole = DialogRole.List;
        }}
        heading="annotations"
        ?open=${this.annotationsModalOpened}
      >
        ${this.modalContent}
      </mwc-dialog>
      <slot @mouseup=${this.handleMouseUpOnChildren.bind(this)}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'glade-annotatable': GladeAnnotatable;
  }
}
