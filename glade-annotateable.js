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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import '@material/mwc-dialog';
import '@material/mwc-button';
import firebase from 'firebase';
let GladeAnnotateable = /** @class */ (() => {
    let GladeAnnotateable = class GladeAnnotateable extends LitElement {
        constructor() {
            super();
            /**
             * The slug used to fetch the Glade document
             */
            this.slug = '';
            this.annotationsModalOpened = false;
            // traditionally should not be published, but the embeddable nature of <glade-component> seems to be an exception
            this.firebaseConfig = {
                apiKey: 'AIzaSyAtc2ed5rsHT7IOF9E1psFhkqtCqKib25U',
                authDomain: 'glade-software-firebase.firebaseapp.com',
                databaseURL: 'https://glade-software-firebase.firebaseio.com',
                projectId: 'glade-software-firebase',
                storageBucket: 'glade-software-firebase.appspot.com',
                messagingSenderId: '527964919900',
                appId: '1:527964919900:web:dc1ffc9e14a70b08b3ae99',
            };
            this.annotations = [];
            this.activeAnnotations = [];
            this.gladeContentNodes = this.querySelectorAll('glade-annotateable > *');
        }
        annotationsForIndex(domNodeIndex) {
            return this.annotations.filter((annotation) => annotation.gladeDomNodeIndex === domNodeIndex);
        }
        initializeFirebase() {
            if (!firebase.apps.length) {
                firebase.initializeApp(this.firebaseConfig);
            }
            this.db = firebase.firestore();
        }
        async getAnnotationsFromDB() {
            if (this.slug.length) {
                const annotationsSnapshots = await this.db
                    .collection('glade-trees')
                    .doc(this.slug)
                    .collection('annotations')
                    .get();
                annotationsSnapshots.forEach((document) => {
                    const { body, postedBy, domNodeIndex } = document.data();
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
                const annotationsForIndex = this.annotations.filter(({ gladeDomNodeIndex }) => {
                    return gladeDomNodeIndex === idx;
                });
                // if a node index has annotations, give it a class for CSS styles and a click listener
                if (annotationsForIndex.length) {
                    node.classList.add('glade-has-annotations');
                }
                else {
                    // clear class if it is wrongly present on a DOM node that has no annotations
                    node.classList.remove('glade-has-annotations');
                }
                // set the index attribute corresponding to the node's position in the list
                node.setAttribute('data-glade-index', `${idx}`);
            });
        }
        render() {
            return html `<mwc-dialog
        @closed=${() => {
                this.annotationsModalOpened = false;
            }}
        heading="annotations"
        ?open=${this.annotationsModalOpened}
      >
        <div>
          ${this.activeAnnotations.map((annotation) => {
                return html `<span style="color: #1A535C;"
                >${annotation.postedBy}</span
              >:
              <p>${annotation.body}</p>`;
            })}
        </div>
        <mwc-button slot="primaryAction">create annotation!</mwc-button>
      </mwc-dialog>
      <slot
        @mouseup=${(ev) => {
                if (ev.button === 0) {
                    // deepest node in DOM tree that recieved this event
                    const targetNode = ev === null || ev === void 0 ? void 0 : ev.composedPath()[0];
                    const gladeDomNodeIndex = parseInt(targetNode.getAttribute('data-glade-index'));
                    this.activeAnnotations = this.annotationsForIndex(gladeDomNodeIndex);
                    this.annotationsModalOpened = true;
                    this.requestUpdate();
                }
            }}
      ></slot>`;
        }
    };
    GladeAnnotateable.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
    __decorate([
        property({ type: String })
    ], GladeAnnotateable.prototype, "slug", void 0);
    __decorate([
        property({ type: Boolean })
    ], GladeAnnotateable.prototype, "annotationsModalOpened", void 0);
    GladeAnnotateable = __decorate([
        customElement('glade-annotateable')
    ], GladeAnnotateable);
    return GladeAnnotateable;
})();
export { GladeAnnotateable };
//# sourceMappingURL=glade-annotateable.js.map