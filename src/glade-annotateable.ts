import {LitElement, html, customElement, property, css} from 'lit-element';
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

@customElement('glade-annotateable')
export class GladeAnnotateable extends LitElement {
  /**
   * The content nodes inside the tag
   */
  gladeContentNodes: NodeListOf<Element>;

  /**
   * The slug used to fetch the Glade document
   */
  @property({type: String})
  slug = '';

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
  @property({type: String})
  email = '';

  /**
   * the password currently being used to sign in
   */
  @property({type: String})
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
  pendingGladeDomNodeIndex = -1;

  /**
   * an array of all annotations for this document
   */
  @property({type: Array})
  annotations: Array<{
    body: string;
    gladeDomNodeIndex: number;
    postedBy: string;
  }> = [];

  /**
   * an array of all annotations that are currently listed for the selected referrent
   */
  @property({type: Array})
  activeAnnotations: Array<{
    body: string;
    gladeDomNodeIndex: number;
    postedBy: string;
  }> = [];

  /**
   * the current UI mode of the Glade dialog
   * List, Create, or Login
   */
  @property({type: String})
  dialogRole: DialogRole = DialogRole.List;

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }
    .create-annotation-form {
      min-width: 320px;
    }
    .dialog {
      width: 60%;
      margin: 20%;
    }
  `;

  constructor() {
    super();
    this.gladeContentNodes = this.querySelectorAll('glade-annotateable > *');
  }

  handleEmailInputChange(ev: Event) {
    const inputEl = ev.composedPath()[0] as HTMLInputElement;
    this.email = inputEl.value;
  }

  handlePasswordInputChange(ev: Event) {
    const inputEl = ev.composedPath()[0] as HTMLInputElement;
    this.password = inputEl.value;
  }

  handleAnnotationBodyChange(ev: Event) {
    const inputEl = ev.composedPath()[0] as HTMLInputElement;
    this.pendingAnnotationBody = inputEl.value;
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
        <input
          name="email"
          placeholder="email"
          type="email"
          @change="${this.handleEmailInputChange}"
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          @change="${this.handlePasswordInputChange}"
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
        @change=${this.handleAnnotationBodyChange}
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
                <span style="color: #1A535C;">${annotation.postedBy}</span>:
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

  annotationsForIndex(domNodeIndex: number) {
    return this.annotations.filter(
      (annotation) => annotation.gladeDomNodeIndex === domNodeIndex
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

      if (displayName) {
        this.user.updateProfile({displayName});
      }
    } else {
      this.user = null;
    }
    this.requestUpdate();
  }

  async getAnnotationsFromDB() {
    if (this.slug.length) {
      const annotationsSnapshots = await this.db
        .collection('glade-trees')
        .doc(this.slug)
        .collection('annotations')
        .get();

      annotationsSnapshots.forEach((document) => {
        const {body, postedBy, domNodeIndex} = document.data();
        this.annotations.push({
          body,
          postedBy,
          gladeDomNodeIndex: domNodeIndex,
        });
      });
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    this.initializeFirebase();
    await this.getAnnotationsFromDB();

    console.log(`glade document slug is: ${this.slug}`);

    this.processAnnotations();
  }

  processAnnotations() {
    this.gladeContentNodes.forEach((node, idx) => {
      // aggregate all annotations for a given node index in the DOM
      const annotationsForIndex = this.annotations.filter(
        ({gladeDomNodeIndex}) => {
          return gladeDomNodeIndex === idx;
        }
      );

      // if a node index has annotations, give it a class for CSS styles and a click listener
      if (annotationsForIndex.length) {
        node.classList.add('glade-has-annotations');
      } else {
        // clear class if it is wrongly present on a DOM node that has no annotations
        node.classList.remove('glade-has-annotations');
      }

      // set the index attribute corresponding to the node's position in the list
      node.setAttribute('data-glade-index', `${idx}`);
    });
  }

  handleClickCreateAnnotation(_: MouseEvent) {
    if (this.user) {
      console.log('user is signed in');
      this.dialogRole = DialogRole.Create;
    } else {
      this.dialogRole = DialogRole.Login;
    }
    this.requestUpdate();
  }

  async handleClickPublishAnnotation(_: MouseEvent) {
    console.log('publish button clicked');
    const postedBy = this.user?.displayName;
    const body = this.pendingAnnotationBody;
    const domNodeIndex = this.pendingGladeDomNodeIndex;
    await this.db
      .collection('glade-trees')
      .doc(this.slug)
      .collection('annotations')
      .add({postedBy, body, domNodeIndex});
    this.annotationsModalOpened = false;
    this.dialogRole = DialogRole.List;

    this.annotations.push({
      postedBy: postedBy || 'anonymous',
      body,
      gladeDomNodeIndex: domNodeIndex,
    });

    this.processAnnotations();
  }

  async handleClickLogin(_: MouseEvent) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      this.annotationsModalOpened = false;
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        this.loginErrorMessage = 'password incorrect!';
        console.log('wrong password');
      } else if (error.code === 'auth/user-not-found') {
        this.loginErrorMessage = 'no user with that email!';
        console.log('user not found');
      } else if (error.code === 'auth/too-many-requests') {
        this.loginErrorMessage = 'too many attempts! try again later';
      }
      console.log(error);
    }
    this.requestUpdate();
  }

  handleMouseUpOnChildren(ev: MouseEvent) {
    if (ev.button === 0) {
      // deepest node in DOM tree that recieved this event
      const targetNode = ev?.composedPath()[0] as Element;

      const gladeDomNodeIndex: number = parseInt(
        targetNode.getAttribute('data-glade-index') as string
      );

      this.pendingGladeDomNodeIndex = gladeDomNodeIndex;

      this.activeAnnotations = this.annotationsForIndex(gladeDomNodeIndex);
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
    'glade-annotateable': GladeAnnotateable;
  }
}
