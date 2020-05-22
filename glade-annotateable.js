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
import firebase from 'firebase';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let GladeAnnotateable = class GladeAnnotateable extends LitElement {
    constructor() {
        super();
        /**
         * The slug used to fetch the Glade document
         */
        this.slug = '';
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
        this.gladeContentNodes = this.querySelectorAll('glade-annotateable > *');
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
    showAnnotations(gladeDomNodeIndex) {
        console.log(this.annotations.filter((annotation) => annotation.gladeDomNodeIndex === gladeDomNodeIndex));
    }
    async connectedCallback() {
        super.connectedCallback();
        this.initializeFirebase();
        await this.getAnnotationsFromDB();
        console.log(`there are ${this.gladeContentNodes.length} DOM nodes descending from this component`);
        console.log(this.slug);
        this.gladeContentNodes.forEach((node, idx) => {
            const annotationsForIndex = this.annotations.filter(({ gladeDomNodeIndex }) => {
                return gladeDomNodeIndex === idx;
            });
            if (annotationsForIndex.length) {
                node.classList.add('glade-has-annotations');
                node.addEventListener('click', () => {
                    this.showAnnotations(idx);
                });
            }
            node.setAttribute('data-glade-index', `${idx}`);
        });
    }
    render() {
        return html `<slot
      @mouseup=${(ev) => {
            const targetNode = ev.path[0];
            const gladeDomNodeIndex = targetNode.getAttribute('data-glade-index');
            console.log('mouseup @ gladeIndex', gladeDomNodeIndex);
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
GladeAnnotateable = __decorate([
    customElement('glade-annotateable')
], GladeAnnotateable);
export { GladeAnnotateable };
//# sourceMappingURL=glade-annotateable.js.map