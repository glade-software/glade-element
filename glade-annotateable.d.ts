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
import '@material/mwc-dialog';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import firebase from 'firebase';
declare enum DialogRole {
    List = "LIST",
    Create = "CREATE",
    Login = "LOGIN"
}
export declare class GladeAnnotateable extends LitElement {
    /**
     * The content nodes inside the tag
     */
    gladeContentNodes: NodeListOf<Element>;
    /**
     * The slug used to fetch the Glade document
     */
    slug: string;
    annotationsModalOpened: boolean;
    loginErrorMessage: string;
    firebaseConfig: {
        apiKey: string;
        authDomain: string;
        databaseURL: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    };
    db: firebase.firestore.Firestore;
    user: firebase.User | null;
    email: string;
    password: string;
    pendingAnnotationBody: string;
    pendingGladeDomNodeIndex: number;
    annotations: Array<{
        body: string;
        gladeDomNodeIndex: number;
        postedBy: string;
    }>;
    activeAnnotations: Array<{
        body: string;
        gladeDomNodeIndex: number;
        postedBy: string;
    }>;
    dialogRole: DialogRole;
    static styles: import("lit-element").CSSResult;
    constructor();
    handleEmailInputChange(ev: Event): void;
    handlePasswordInputChange(ev: Event): void;
    handleAnnotationBodyChange(ev: Event): void;
    get loginTemplate(): import("lit-element").TemplateResult;
    get createAnnotationTemplate(): import("lit-element").TemplateResult;
    get annotationsListTemplate(): import("lit-element").TemplateResult;
    get modalContent(): import("lit-element").TemplateResult;
    annotationsForIndex(domNodeIndex: number): {
        body: string;
        gladeDomNodeIndex: number;
        postedBy: string;
    }[];
    initializeFirebase(): void;
    handleAuthStateChanged(u: firebase.User | null): Promise<void>;
    getAnnotationsFromDB(): Promise<void>;
    connectedCallback(): Promise<void>;
    handleClickCreateAnnotation(_: MouseEvent): void;
    handleClickPublishAnnotation(_: MouseEvent): Promise<void>;
    handleClickLogin(_: MouseEvent): Promise<void>;
    handleMouseUpOnChildren(ev: MouseEvent): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'glade-annotateable': GladeAnnotateable;
    }
}
export {};
//# sourceMappingURL=glade-annotateable.d.ts.map