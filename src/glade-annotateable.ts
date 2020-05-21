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

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
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
  slug = null;

  annotations = [
    {
      gladeIndex: 3,
      body: 'this is some body text',
      postedBy: 'matt',
    },
  ];

  constructor() {
    super();
    this.gladeContentNodes = this.querySelectorAll('glade-annotateable > *');
  }

  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  initializeFirebase() {}

  showAnnotations(gladeIndex: number) {
    console.log(
      this.annotations.filter(
        (annotation) => annotation.gladeIndex === gladeIndex
      )
    );
  }

  connectedCallback() {
    super.connectedCallback();

    console.log(
      `there are ${this.gladeContentNodes.length} DOM nodes descending from this component`
    );

    console.log(this.slug);

    this.gladeContentNodes.forEach((node, idx) => {
      const annotationsForIndex = this.annotations.filter(({gladeIndex}) => {
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
    return html`<slot
        @mouseup=${(ev) => {
          const targetNode = ev.path[0];
          const gladeIndex = targetNode.getAttribute('data-glade-index');

          console.log('mouseup @ gladeIndex', gladeIndex);
        }}
      ></slot>
      <div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'glade-annotateable': GladeAnnotateable;
  }
}
