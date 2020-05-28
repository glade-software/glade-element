/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, customElement, property, css} from 'lit-element';
import '@material/mwc-dialog';
import '@material/mwc-button';
import firebase from 'firebase';

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

  @property({type: Boolean})
  annotationsModalOpened = false;

  // traditionally should not be published, but the embeddable nature of <glade-component> seems to be an exception
  firebaseConfig = {
    apiKey: 'AIzaSyAtc2ed5rsHT7IOF9E1psFhkqtCqKib25U',
    authDomain: 'glade-software-firebase.firebaseapp.com',
    databaseURL: 'https://glade-software-firebase.firebaseio.com',
    projectId: 'glade-software-firebase',
    storageBucket: 'glade-software-firebase.appspot.com',
    messagingSenderId: '527964919900',
    appId: '1:527964919900:web:dc1ffc9e14a70b08b3ae99',
  };

  db!: firebase.firestore.Firestore;

  user!: firebase.User | null;

  annotations: Array<{
    body: string;
    gladeDomNodeIndex: number;
    postedBy: string;
  }> = [];

  activeAnnotations: Array<{
    body: string;
    gladeDomNodeIndex: number;
    postedBy: string;
  }> = [];


  constructor() {
    super();
    this.gladeContentNodes = this.querySelectorAll('glade-annotateable > *');
  }

  get showLoginForm(){
    return !this.user && this.
  }

  get loginTemplate(){
    if(this.user) return html``;
    return html`
      <div id="loginTemplate" style="border: 1px solid; margin:8px; padding:8px;">
        <input name="username" placeholder="username" type="text"/>
        <input name="password" placeholder="password" type="password"/>
        <input type="submit">
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

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

  handleAuthStateChanged(u: firebase.User | null){
    console.log('user is',u);
    if(u) {
      this.user = u;
    } else {
      this.user = null;
    }
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
        console.log('document.data()', document.data());
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

  handleClickCreateAnnotation(ev: MouseEvent) {
    console.log(this.user)
    console.log('clicked create annotation', ev);
    firebase.auth().signInAnonymously();
  }

  render() {
    return html`<mwc-dialog
        @closed=${() => {
          this.annotationsModalOpened = false;
        }}
        heading="annotations"
        ?open=${this.annotationsModalOpened}
      >
        <div>
          ${this.activeAnnotations.map((annotation) => {
            return html`<div style="border: 1px solid; margin:8px; padding:8px;">
              <span style="color: #1A535C;">${annotation.postedBy}</span>:
              <p>${annotation.body}</p>
            </div>`;
          })}
        </div>

        ${this.loginTemplate}

        <mwc-button
          slot="primaryAction"
          @click=${this.handleClickCreateAnnotation}
          ?disabled=${!this.user}
          >create annotation!</mwc-button
        >
      </mwc-dialog>
      <slot
        @mouseup=${(ev: MouseEvent) => {
          if (ev.button === 0) {
            // deepest node in DOM tree that recieved this event
            const targetNode = ev?.composedPath()[0] as Element;

            const gladeDomNodeIndex: number = parseInt(
              targetNode.getAttribute('data-glade-index') as string
            );

            this.activeAnnotations = this.annotationsForIndex(
              gladeDomNodeIndex
            );
            this.annotationsModalOpened = true;
            this.requestUpdate();
          }
        }}
      ></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'glade-annotateable': GladeAnnotateable;
  }
}
