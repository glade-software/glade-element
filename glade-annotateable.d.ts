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
import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class GladeAnnotateable extends LitElement {
    /**
     * The content nodes inside the tag
     */
    gladeContentNodes: NodeListOf<Element>;
    /**
     * The slug used to fetch the Glade document
     */
    slug: null;
    annotations: {
        gladeIndex: number;
        body: string;
        postedBy: string;
    }[];
    constructor();
    static styles: import("lit-element").CSSResult;
    initializeFirebase(): void;
    showAnnotations(gladeIndex: number): void;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'glade-annotateable': GladeAnnotateable;
    }
}
//# sourceMappingURL=glade-annotateable.d.ts.map