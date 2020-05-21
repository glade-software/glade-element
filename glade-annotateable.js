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
        this.slug = null;
        this.annotations = [
            {
                gladeIndex: 3,
                body: 'this is some body text',
                postedBy: 'matt',
            },
        ];
        this.gladeContentNodes = this.querySelectorAll('glade-annotateable > *');
    }
    initializeFirebase() { }
    showAnnotations(gladeIndex) {
        console.log(this.annotations.filter((annotation) => annotation.gladeIndex === gladeIndex));
    }
    connectedCallback() {
        super.connectedCallback();
        console.log(`there are ${this.gladeContentNodes.length} DOM nodes descending from this component`);
        console.log(this.slug);
        this.gladeContentNodes.forEach((node, idx) => {
            const annotationsForIndex = this.annotations.filter(({ gladeIndex }) => {
                return gladeIndex === idx;
            });
            if (annotationsForIndex.length) {
                node.classList.add('glade-has-annotations');
                node.addEventListener('click', () => {
                    this.showAnnotations(idx);
                });
            }
            node.setAttribute('data-glade-index', `${idx}`);
        });
        this.initializeFirebase();
    }
    render() {
        return html `<slot
        @mouseup=${(ev) => {
            const targetNode = ev.path[0];
            const gladeIndex = targetNode.getAttribute('data-glade-index');
            console.log('mouseup @ gladeIndex', gladeIndex);
        }}
      ></slot>
      <div></div> `;
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