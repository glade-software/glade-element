(function(R,We){typeof exports=="object"&&typeof module<"u"?module.exports=We():typeof define=="function"&&define.amd?define(We):(R=typeof globalThis<"u"?globalThis:R||self,R.GladeAnnotatable=We())})(this,function(){"use strict";function R(){}function We(i){return i()}function _r(){return Object.create(null)}function ue(i){i.forEach(We)}function ui(i){return typeof i=="function"}function he(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function la(i){return Object.keys(i).length===0}function ca(i,...e){if(i==null)return R;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ua(i,e,t){i.$$.on_destroy.push(ca(e,t))}"WeakMap"in(typeof window<"u"?window:typeof globalThis<"u"?globalThis:global);function x(i,e){i.appendChild(e)}function D(i,e,t){i.insertBefore(e,t||null)}function U(i){i.parentNode&&i.parentNode.removeChild(i)}function ha(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function I(i){return document.createElement(i)}function br(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function fe(i){return document.createTextNode(i)}function M(){return fe(" ")}function fa(){return fe("")}function W(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function z(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function C(i,e,t){e in i?i[e]=typeof i[e]=="boolean"&&t===""?!0:t:z(i,e,t)}function pa(i){return Array.from(i.childNodes)}function hi(i,e){e=""+e,i.data!==e&&(i.data=e)}function ma(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(i,t,n,e),r}function ve(i){const e={};for(const t of i)e[t.name]=t.value;return e}let Lt;function Pt(i){Lt=i}function yr(){if(!Lt)throw new Error("Function called outside component initialization");return Lt}function ga(i){yr().$$.on_mount.push(i)}function st(){const i=yr();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const o=ma(e,t,{cancelable:n});return r.slice().forEach(s=>{s.call(i,o)}),!o.defaultPrevented}return!0}}const at=[],Se=[];let dt=[];const vr=[],_a=Promise.resolve();let ji=!1;function ba(){ji||(ji=!0,_a.then(G))}function Wi(i){dt.push(i)}const Gi=new Set;let lt=0;function G(){if(lt!==0)return;const i=Lt;do{try{for(;lt<at.length;){const e=at[lt];lt++,Pt(e),ya(e.$$)}}catch(e){throw at.length=0,lt=0,e}for(Pt(null),at.length=0,lt=0;Se.length;)Se.pop()();for(let e=0;e<dt.length;e+=1){const t=dt[e];Gi.has(t)||(Gi.add(t),t())}dt.length=0}while(at.length);for(;vr.length;)vr.pop()();ji=!1,Gi.clear(),Pt(i)}function ya(i){if(i.fragment!==null){i.update(),ue(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Wi)}}function va(i){const e=[],t=[];dt.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),dt=e}const fi=new Set;let Ge;function pi(){Ge={r:0,c:[],p:Ge}}function mi(){Ge.r||ue(Ge.c),Ge=Ge.p}function q(i,e){i&&i.i&&(fi.delete(i),i.i(e))}function J(i,e,t,n){if(i&&i.o){if(fi.has(i))return;fi.add(i),Ge.c.push(()=>{fi.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}[...["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]];function xe(i){i&&i.c()}function pe(i,e,t,n){const{fragment:r,after_update:o}=i.$$;r&&r.m(e,t),n||Wi(()=>{const s=i.$$.on_mount.map(We).filter(ui);i.$$.on_destroy?i.$$.on_destroy.push(...s):ue(s),i.$$.on_mount=[]}),o.forEach(Wi)}function me(i,e){const t=i.$$;t.fragment!==null&&(va(t.after_update),ue(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function xa(i,e){i.$$.dirty[0]===-1&&(at.push(i),ba(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function we(i,e,t,n,r,o,s,a=[-1]){const d=Lt;Pt(i);const l=i.$$={fragment:null,ctx:[],props:o,update:R,not_equal:r,bound:_r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:_r(),dirty:a,skip_bound:!1,root:e.target||d.$$.root};s&&s(l.root);let u=!1;if(l.ctx=t?t(i,e.props||{},(c,f,...h)=>{const p=h.length?h[0]:f;return l.ctx&&r(l.ctx[c],l.ctx[c]=p)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](p),u&&xa(i,c)),f}):[],l.update(),u=!0,ue(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const c=pa(e.target);l.fragment&&l.fragment.l(c),c.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&q(i.$$.fragment),pe(i,e.target,e.anchor,e.customElement),G()}Pt(d)}let ge;typeof HTMLElement=="function"&&(ge=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:i}=this.$$;this.$$.on_disconnect=i.map(We).filter(ui);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(i,e,t){this[i]=t}disconnectedCallback(){ue(this.$$.on_disconnect)}$destroy(){me(this,1),this.$destroy=R}$on(i,e){if(!ui(e))return R;const t=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return t.push(e),()=>{const n=t.indexOf(e);n!==-1&&t.splice(n,1)}}$set(i){this.$$set&&!la(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}});function qi(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}function b(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const xr=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Ki=(i,e,t=null)=>{for(;e!==t;){const n=e.nextSibling;i.removeChild(e),e=n}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Te=`{{lit-${String(Math.random()).slice(2)}}}`,wr=`<!--${Te}-->`,Er=new RegExp(`${Te}|${wr}`),Dt="$lit$";class Ar{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,a=-1,d=0;const{strings:l,values:{length:u}}=e;for(;d<u;){const c=o.nextNode();if(c===null){o.currentNode=r.pop();continue}if(a++,c.nodeType===1){if(c.hasAttributes()){const f=c.attributes,{length:h}=f;let p=0;for(let _=0;_<h;_++)Ir(f[_].name,Dt)&&p++;for(;p-- >0;){const _=l[d],w=Xi.exec(_)[2],y=w.toLowerCase()+Dt,g=c.getAttribute(y);c.removeAttribute(y);const m=g.split(Er);this.parts.push({type:"attribute",index:a,name:w,strings:m}),d+=m.length-1}}c.tagName==="TEMPLATE"&&(r.push(c),o.currentNode=c.content)}else if(c.nodeType===3){const f=c.data;if(f.indexOf(Te)>=0){const h=c.parentNode,p=f.split(Er),_=p.length-1;for(let w=0;w<_;w++){let y,g=p[w];if(g==="")y=De();else{const m=Xi.exec(g);m!==null&&Ir(m[2],Dt)&&(g=g.slice(0,m.index)+m[1]+m[2].slice(0,-Dt.length)+m[3]),y=document.createTextNode(g)}h.insertBefore(y,c),this.parts.push({type:"node",index:++a})}p[_]===""?(h.insertBefore(De(),c),n.push(c)):c.data=p[_],d+=_}}else if(c.nodeType===8)if(c.data===Te){const f=c.parentNode;(c.previousSibling===null||a===s)&&(a++,f.insertBefore(De(),c)),s=a,this.parts.push({type:"node",index:a}),c.nextSibling===null?c.data="":(n.push(c),a--),d++}else{let f=-1;for(;(f=c.data.indexOf(Te,f+1))!==-1;)this.parts.push({type:"node",index:-1}),d++}}for(const c of n)c.parentNode.removeChild(c)}}const Ir=(i,e)=>{const t=i.length-e.length;return t>=0&&i.slice(t)===e},Sr=i=>i.index!==-1,De=()=>document.createComment(""),Xi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Yi=133;function Tr(i,e){const{element:{content:t},parts:n}=i,r=document.createTreeWalker(t,Yi,null,!1);let o=$t(n),s=n[o],a=-1,d=0;const l=[];let u=null;for(;r.nextNode();){a++;const c=r.currentNode;for(c.previousSibling===u&&(u=null),e.has(c)&&(l.push(c),u===null&&(u=c)),u!==null&&d++;s!==void 0&&s.index===a;)s.index=u!==null?-1:s.index-d,o=$t(n,o),s=n[o]}l.forEach(c=>c.parentNode.removeChild(c))}const wa=i=>{let e=i.nodeType===11?0:1;const t=document.createTreeWalker(i,Yi,null,!1);for(;t.nextNode();)e++;return e},$t=(i,e=-1)=>{for(let t=e+1;t<i.length;t++){const n=i[t];if(Sr(n))return t}return-1};function Ea(i,e,t=null){const{element:{content:n},parts:r}=i;if(t==null){n.appendChild(e);return}const o=document.createTreeWalker(n,Yi,null,!1);let s=$t(r),a=0,d=-1;for(;o.nextNode();)for(d++,o.currentNode===t&&(a=wa(e),t.parentNode.insertBefore(e,t));s!==-1&&r[s].index===d;){if(a>0){for(;s!==-1;)r[s].index+=a,s=$t(r,s);return}s=$t(r,s)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Cr=new WeakMap,ct=i=>(...e)=>{const t=i(...e);return Cr.set(t,!0),t},Mt=i=>typeof i=="function"&&Cr.has(i);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _e={},kr={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ji{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const e=xr?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o=0,s=0,a,d=r.nextNode();for(;o<n.length;){if(a=n[o],!Sr(a)){this.__parts.push(void 0),o++;continue}for(;s<a.index;)s++,d.nodeName==="TEMPLATE"&&(t.push(d),r.currentNode=d.content),(d=r.nextNode())===null&&(r.currentNode=t.pop(),d=r.nextNode());if(a.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(d.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,a.name,a.strings,this.options));o++}return xr&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Or=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:i=>i}),Aa=` ${Te} `;class Rr{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const o=this.strings[r],s=o.lastIndexOf("<!--");n=(s>-1||n)&&o.indexOf("-->",s+1)===-1;const a=Xi.exec(o);a===null?t+=o+(n?Aa:wr):t+=o.substr(0,a.index)+a[1]+a[2]+Dt+a[3]+Te}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Or!==void 0&&(t=Or.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Qi=i=>i===null||!(typeof i=="object"||typeof i=="function"),Zi=i=>Array.isArray(i)||!!(i&&i[Symbol.iterator]);class Nr{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let r=0;r<n.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new ut(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(t===1&&e[0]===""&&e[1]===""){const o=n[0].value;if(typeof o=="symbol")return String(o);if(typeof o=="string"||!Zi(o))return o}let r="";for(let o=0;o<t;o++){r+=e[o];const s=n[o];if(s!==void 0){const a=s.value;if(Qi(a)||!Zi(a))r+=typeof a=="string"?a:String(a);else for(const d of a)r+=typeof d=="string"?d:String(d)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ut{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==_e&&(!Qi(e)||e!==this.value)&&(this.value=e,Mt(e)||(this.committer.dirty=!0))}commit(){for(;Mt(this.value);){const e=this.value;this.value=_e,e(this)}this.value!==_e&&this.committer.commit()}}class Ft{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(De()),this.endNode=e.appendChild(De())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=De()),e.__insert(this.endNode=De())}insertAfterPart(e){e.__insert(this.startNode=De()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;Mt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_e,t(this)}const e=this.__pendingValue;e!==_e&&(Qi(e)?e!==this.value&&this.__commitText(e):e instanceof Rr?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Zi(e)?this.__commitIterable(e):e===kr?(this.value=kr,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const n=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ji&&this.value.template===t)this.value.update(e.values);else{const n=new Ji(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n=0,r;for(const o of e)r=t[n],r===void 0&&(r=new Ft(this.options),t.push(r),n===0?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(o),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){Ki(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Lr{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Mt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_e,t(this)}if(this.__pendingValue===_e)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=_e}}class Ia extends Nr{constructor(e,t,n){super(e,t,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new gi(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class gi extends ut{}let Pr=!1;(()=>{try{const i={get capture(){return Pr=!0,!1}};window.addEventListener("test",i,i),window.removeEventListener("test",i,i)}catch{}})();class Dr{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=r=>this.handleEvent(r)}setValue(e){this.__pendingValue=e}commit(){for(;Mt(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=_e,o(this)}if(this.__pendingValue===_e)return;const e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=Sa(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=_e}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Sa=i=>i&&(Pr?{capture:i.capture,passive:i.passive,once:i.once}:i.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Ta(i){let e=Ut.get(i.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},Ut.set(i.type,e));let t=e.stringsArray.get(i.strings);if(t!==void 0)return t;const n=i.strings.join(Te);return t=e.keyString.get(n),t===void 0&&(t=new Ar(i,i.getTemplateElement()),e.keyString.set(n,t)),e.stringsArray.set(i.strings,t),t}const Ut=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ht=new WeakMap,Ca=(i,e,t)=>{let n=ht.get(e);n===void 0&&(Ki(e,e.firstChild),ht.set(e,n=new Ft(Object.assign({templateFactory:Ta},t))),n.appendInto(e)),n.setValue(i),n.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ka{handleAttributeExpressions(e,t,n,r){const o=t[0];return o==="."?new Ia(e,t.slice(1),n).parts:o==="@"?[new Dr(e,t.slice(1),r.eventContext)]:o==="?"?[new Lr(e,t.slice(1),n)]:new Nr(e,t,n).parts}handleTextExpression(e){return new Ft(e)}}const Oa=new ka;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const j=(i,...e)=>new Rr(i,e,"html",Oa);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $r=(i,e)=>`${i}--${e}`;let _i=!0;typeof window.ShadyCSS>"u"?_i=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),_i=!1);const Ra=i=>e=>{const t=$r(e.type,i);let n=Ut.get(t);n===void 0&&(n={stringsArray:new WeakMap,keyString:new Map},Ut.set(t,n));let r=n.stringsArray.get(e.strings);if(r!==void 0)return r;const o=e.strings.join(Te);if(r=n.keyString.get(o),r===void 0){const s=e.getTemplateElement();_i&&window.ShadyCSS.prepareTemplateDom(s,i),r=new Ar(e,s),n.keyString.set(o,r)}return n.stringsArray.set(e.strings,r),r},Na=["html","svg"],La=i=>{Na.forEach(e=>{const t=Ut.get($r(e,i));t!==void 0&&t.keyString.forEach(n=>{const{element:{content:r}}=n,o=new Set;Array.from(r.querySelectorAll("style")).forEach(s=>{o.add(s)}),Tr(n,o)})})},Mr=new Set,Pa=(i,e,t)=>{Mr.add(i);const n=t?t.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(o===0){window.ShadyCSS.prepareTemplateStyles(n,i);return}const s=document.createElement("style");for(let l=0;l<o;l++){const u=r[l];u.parentNode.removeChild(u),s.textContent+=u.textContent}La(i);const a=n.content;t?Ea(t,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,i);const d=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&d!==null)e.insertBefore(d.cloneNode(!0),e.firstChild);else if(t){a.insertBefore(s,a.firstChild);const l=new Set;l.add(s),Tr(t,l)}},Da=(i,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const n=t.scopeName,r=ht.has(e),o=_i&&e.nodeType===11&&!!e.host,s=o&&!Mr.has(n),a=s?document.createDocumentFragment():e;if(Ca(i,a,Object.assign({templateFactory:Ra(n)},t)),s){const d=ht.get(a);ht.delete(a);const l=d.value instanceof Ji?d.value.template:void 0;Pa(n,a,l),Ki(e,e.firstChild),e.appendChild(a),ht.set(e,d)}!r&&o&&window.ShadyCSS.styleElement(e.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Fr;window.JSCompiler_renameProperty=(i,e)=>i;const en={toAttribute(i,e){switch(e){case Boolean:return i?"":null;case Object:case Array:return i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){switch(e){case Boolean:return i!==null;case Number:return i===null?null:Number(i);case Object:case Array:return JSON.parse(i)}return i}},Ur=(i,e)=>e!==i&&(e===e||i===i),tn={attribute:!0,type:String,converter:en,reflect:!1,hasChanged:Ur},nn=1,rn=4,on=8,sn=16,an="finalized";class Hr extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);r!==void 0&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,n)=>this._classProperties.set(n,t))}}static createProperty(e,t=tn){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||tn}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(an)||e.finalize(),this[an]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of n)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Ur){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||en,o=typeof r=="function"?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||en.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const n=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,n)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=tn){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(o!==void 0){const s=r._propertyValueToAttribute(t,n);if(s===void 0)return;this._updateState=this._updateState|on,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._updateState=this._updateState&~on}}_attributeToProperty(e,t){if(this._updateState&on)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(r!==void 0){const o=n.getPropertyOptions(r);this._updateState=this._updateState|sn,this[r]=n._propertyValueFromAttribute(t,o),this._updateState=this._updateState&~sn}}requestUpdateInternal(e,t,n){let r=!0;if(e!==void 0){const o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),n.reflect===!0&&!(this._updateState&sn)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|rn;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&rn}get hasUpdated(){return this._updateState&nn}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(n){throw e=!1,this._markUpdated(),n}e&&(this._updateState&nn||(this._updateState=this._updateState|nn,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~rn}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,n)=>this._propertyToAttribute(n,this[n],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Fr=an,Hr[Fr]=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $a=(i,e)=>(window.customElements.define(i,e),e),Ma=(i,e)=>{const{kind:t,elements:n}=e;return{kind:t,elements:n,finisher(r){window.customElements.define(i,r)}}},qe=i=>e=>typeof e=="function"?$a(i,e):Ma(i,e),Fa=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Ua=(i,e,t)=>{e.constructor.createProperty(t,i)};function S(i){return(e,t)=>t!==void 0?Ua(i,e,t):Fa(i,e)}function le(i){return S({attribute:!1,hasChanged:i==null?void 0:i.hasChanged})}function ee(i,e){return(t,n)=>{const r={get(){return this.renderRoot.querySelector(i)},enumerable:!0,configurable:!0};if(e){const o=typeof n=="symbol"?Symbol():`__${n}`;r.get=function(){return this[o]===void 0&&(this[o]=this.renderRoot.querySelector(i)),this[o]}}return n!==void 0?Br(r,t,n):Vr(r,t)}}function Ha(i){return(e,t)=>{const n={async get(){return await this.updateComplete,this.renderRoot.querySelector(i)},enumerable:!0,configurable:!0};return t!==void 0?Br(n,e,t):Vr(n,e)}}const Br=(i,e,t)=>{Object.defineProperty(e,t,i)},Vr=(i,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:i}),Ba=(i,e)=>Object.assign(Object.assign({},e),{finisher(t){Object.assign(t.prototype[e.key],i)}}),Va=(i,e,t)=>{Object.assign(e[t],i)};function zr(i){return(e,t)=>t!==void 0?Va(i,e,t):Ba(i,e)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const dn=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ln=Symbol();class cn{constructor(e,t){if(t!==ln)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(dn?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const za=i=>new cn(String(i),ln),ja=i=>{if(i instanceof cn)return i.cssText;if(typeof i=="number")return i;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Ke=(i,...e)=>{const t=e.reduce((n,r,o)=>n+ja(r)+i[o+1],i[0]);return new cn(t,ln)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const jr={};class Ht extends Hr{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(o,s)=>o.reduceRight((a,d)=>Array.isArray(d)?t(d,a):(a.add(d),a),s),n=t(e,new Set),r=[];n.forEach(o=>r.unshift(o)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!dn){const n=Array.prototype.slice.call(t.cssRules).reduce((r,o)=>r+o.cssText,"");return za(n)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):dn?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==jr&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(n=>{const r=document.createElement("style");r.textContent=n.cssText,this.renderRoot.appendChild(r)}))}render(){return jr}}Ht.finalized=!0,Ht.render=Da;/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{var i,e,t;const n=Symbol(),r=Symbol(),o=Symbol(),s=Symbol(),a=Symbol(),d=Symbol(),l=Symbol(),u=Symbol(),c=Symbol(),f=Symbol(),h=Symbol(),p=Symbol(),_=Symbol();class w{constructor(){this[i]=[],this[e]=[],this[t]=new Set}destructor(){this[c](this[o]);const g=this;g[n]=null,g[o]=null,g[r]=null}get top(){const g=this[n];return g[g.length-1]||null}push(g){!g||g===this.top||(this.remove(g),this[d](g),this[n].push(g))}remove(g){const m=this[n].indexOf(g);return m===-1?!1:(this[n].splice(m,1),m===this[n].length&&this[d](this.top),!0)}pop(){const g=this.top;return g&&this.remove(g),g}has(g){return this[n].indexOf(g)!==-1}[(i=n,e=o,t=r,d)](g){const m=this[r],v=this[o];if(!g){this[c](v),m.clear(),this[o]=[];return}const A=this[f](g);if(A[A.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=A;const k=this[h](g);if(!v.length){this[u](A,k,m);return}let E=v.length-1,O=A.length-1;for(;E>0&&O>0&&v[E]===A[O];)E--,O--;v[E]!==A[O]&&this[l](v[E],A[O]),E>0&&this[c](v.slice(0,E)),O>0&&this[u](A.slice(0,O),k,null)}[l](g,m){const v=g[s];this[p](g)&&!g.inert&&(g.inert=!0,v.add(g)),v.has(m)&&(m.inert=!1,v.delete(m)),m[a]=g[a],m[s]=v,g[a]=void 0,g[s]=void 0}[c](g){for(const m of g){m[a].disconnect(),m[a]=void 0;const A=m[s];for(const k of A)k.inert=!1;m[s]=void 0}}[u](g,m,v){for(const A of g){const k=A.parentNode,E=k.children,O=new Set;for(let de=0;de<E.length;de++){const T=E[de];T===A||!this[p](T)||m&&m.has(T)||(v&&T.inert?v.add(T):(T.inert=!0,O.add(T)))}A[s]=O;const P=new MutationObserver(this[_].bind(this));A[a]=P;let $=k;const F=$;F.__shady&&F.host&&($=F.host),P.observe($,{childList:!0})}}[_](g){const m=this[o],v=this[r];for(const A of g){const k=A.target.host||A.target,E=k===document.body?m.length:m.indexOf(k),O=m[E-1],P=O[s];for(let $=0;$<A.removedNodes.length;$++){const F=A.removedNodes[$];if(F===O){console.info("Detected removal of the top Blocking Element."),this.pop();return}P.has(F)&&(F.inert=!1,P.delete(F))}for(let $=0;$<A.addedNodes.length;$++){const F=A.addedNodes[$];this[p](F)&&(v&&F.inert?v.add(F):(F.inert=!0,P.add(F)))}}}[p](g){return/^(style|template|script)$/.test(g.localName)===!1}[f](g){const m=[];let v=g;for(;v&&v!==document.body;){if(v.nodeType===Node.ELEMENT_NODE&&m.push(v),v.assignedSlot){for(;v=v.assignedSlot;)m.push(v);v=m.pop();continue}v=v.parentNode||v.host}return m}[h](g){const m=g.shadowRoot;if(!m)return null;const v=new Set;let A,k,E;const O=m.querySelectorAll("slot");if(O.length&&O[0].assignedNodes)for(A=0;A<O.length;A++)for(E=O[A].assignedNodes({flatten:!0}),k=0;k<E.length;k++)E[k].nodeType===Node.ELEMENT_NODE&&v.add(E[k]);return v}}document.$blockingElements=new w})();var un=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function hn(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window>"u")return;var i=Array.prototype.slice,e=Element.prototype.matches||Element.prototype.msMatchesSelector,t=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),n=function(){function l(u,c){hn(this,l),this._inertManager=c,this._rootElement=u,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return un(l,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(c){this._unmanageNode(c.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(c){var f=this;s(c,function(w){return f._visitNode(w)});var h=document.activeElement;if(!document.body.contains(c)){for(var p=c,_=void 0;p;){if(p.nodeType===Node.DOCUMENT_FRAGMENT_NODE){_=p;break}p=p.parentNode}_&&(h=_.activeElement)}c.contains(h)&&(h.blur(),h===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(c){if(c.nodeType===Node.ELEMENT_NODE){var f=c;f!==this._rootElement&&f.hasAttribute("inert")&&this._adoptInertRoot(f),(e.call(f,t)||f.hasAttribute("tabindex"))&&this._manageNode(f)}}},{key:"_manageNode",value:function(c){var f=this._inertManager.register(c,this);this._managedNodes.add(f)}},{key:"_unmanageNode",value:function(c){var f=this._inertManager.deregister(c,this);f&&this._managedNodes.delete(f)}},{key:"_unmanageSubtree",value:function(c){var f=this;s(c,function(h){return f._unmanageNode(h)})}},{key:"_adoptInertRoot",value:function(c){var f=this._inertManager.getInertRoot(c);f||(this._inertManager.setInert(c,!0),f=this._inertManager.getInertRoot(c)),f.managedNodes.forEach(function(h){this._manageNode(h.node)},this)}},{key:"_onMutation",value:function(c,f){c.forEach(function(h){var p=h.target;if(h.type==="childList")i.call(h.addedNodes).forEach(function(w){this._makeSubtreeUnfocusable(w)},this),i.call(h.removedNodes).forEach(function(w){this._unmanageSubtree(w)},this);else if(h.type==="attributes"){if(h.attributeName==="tabindex")this._manageNode(p);else if(p!==this._rootElement&&h.attributeName==="inert"&&p.hasAttribute("inert")){this._adoptInertRoot(p);var _=this._inertManager.getInertRoot(p);this._managedNodes.forEach(function(w){p.contains(w.node)&&_._manageNode(w.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(c){this._savedAriaHidden=c},get:function(){return this._savedAriaHidden}}]),l}(),r=function(){function l(u,c){hn(this,l),this._node=u,this._overrodeFocusMethod=!1,this._inertRoots=new Set([c]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return un(l,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var c=this._node;this._savedTabIndex!==null?c.setAttribute("tabindex",this._savedTabIndex):c.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete c.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var c=this.node;if(e.call(c,t)){if(c.tabIndex===-1&&this.hasSavedTabIndex)return;c.hasAttribute("tabindex")&&(this._savedTabIndex=c.tabIndex),c.setAttribute("tabindex","-1"),c.nodeType===Node.ELEMENT_NODE&&(c.focus=function(){},this._overrodeFocusMethod=!0)}else c.hasAttribute("tabindex")&&(this._savedTabIndex=c.tabIndex,c.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(c){this._throwIfDestroyed(),this._inertRoots.add(c)}},{key:"removeInertRoot",value:function(c){this._throwIfDestroyed(),this._inertRoots.delete(c),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(c){this._throwIfDestroyed(),this._savedTabIndex=c},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),l}(),o=function(){function l(u){if(hn(this,l),!u)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=u,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),a(u.head||u.body||u.documentElement),u.readyState==="loading"?u.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return un(l,[{key:"setInert",value:function(c,f){if(f){if(this._inertRoots.has(c))return;var h=new n(c,this);if(c.setAttribute("inert",""),this._inertRoots.set(c,h),!this._document.body.contains(c))for(var p=c.parentNode;p;)p.nodeType===11&&a(p),p=p.parentNode}else{if(!this._inertRoots.has(c))return;var _=this._inertRoots.get(c);_.destructor(),this._inertRoots.delete(c),c.removeAttribute("inert")}}},{key:"getInertRoot",value:function(c){return this._inertRoots.get(c)}},{key:"register",value:function(c,f){var h=this._managedNodes.get(c);return h!==void 0?h.addInertRoot(f):h=new r(c,f),this._managedNodes.set(c,h),h}},{key:"deregister",value:function(c,f){var h=this._managedNodes.get(c);return h?(h.removeInertRoot(f),h.destroyed&&this._managedNodes.delete(c),h):null}},{key:"_onDocumentLoaded",value:function(){var c=i.call(this._document.querySelectorAll("[inert]"));c.forEach(function(f){this.setInert(f,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(c,f){var h=this;c.forEach(function(p){switch(p.type){case"childList":i.call(p.addedNodes).forEach(function(y){if(y.nodeType===Node.ELEMENT_NODE){var g=i.call(y.querySelectorAll("[inert]"));e.call(y,"[inert]")&&g.unshift(y),g.forEach(function(m){this.setInert(m,!0)},h)}},h);break;case"attributes":if(p.attributeName!=="inert")return;var _=p.target,w=_.hasAttribute("inert");h.setInert(_,w);break}},this)}}]),l}();function s(l,u,c){if(l.nodeType==Node.ELEMENT_NODE){var f=l;u&&u(f);var h=f.shadowRoot;if(h){s(h,u);return}if(f.localName=="content"){for(var p=f,_=p.getDistributedNodes?p.getDistributedNodes():[],w=0;w<_.length;w++)s(_[w],u);return}if(f.localName=="slot"){for(var y=f,g=y.assignedNodes?y.assignedNodes({flatten:!0}):[],m=0;m<g.length;m++)s(g[m],u);return}}for(var v=l.firstChild;v!=null;)s(v,u),v=v.nextSibling}function a(l){if(!l.querySelector("style#inert-style, link#inert-style")){var u=document.createElement("style");u.setAttribute("id","inert-style"),u.textContent=`
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`,l.appendChild(u)}}var d=new o(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(u){d.setInert(this,u)}})})();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oe={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},ft={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},fn={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var pn=function(i,e){return pn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},pn(i,e)};function Wa(i,e){pn(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bi=function(){return bi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},bi.apply(this,arguments)};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pt=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ga=function(i){Wa(e,i);function e(t){var n=i.call(this,bi(bi({},e.defaultAdapter),t))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.layoutFrame_=0,n.escapeKeyAction_=ft.CLOSE_ACTION,n.scrimClickAction_=ft.CLOSE_ACTION,n.autoStackButtons_=!0,n.areButtonsStacked_=!1,n.suppressDefaultPressSelector=ft.SUPPRESS_DEFAULT_PRESS_SELECTOR,n}return Object.defineProperty(e,"cssClasses",{get:function(){return oe},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ft},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return fn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(oe.STACKED)&&this.setAutoStackButtons(!1)},e.prototype.destroy=function(){this.isOpen_&&this.close(ft.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},e.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.addClass(oe.OPENING),this.runNextAnimationFrame_(function(){t.adapter.addClass(oe.OPEN),t.adapter.addBodyClass(oe.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout(function(){t.handleAnimationTimerEnd_(),t.adapter.trapFocus(t.adapter.getInitialFocusEl()),t.adapter.notifyOpened()},fn.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter.notifyClosing(t),this.adapter.addClass(oe.CLOSING),this.adapter.removeClass(oe.OPEN),this.adapter.removeBodyClass(oe.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd_(),n.adapter.notifyClosed(t)},fn.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction_},e.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.handleClick=function(t){var n=this.adapter.eventTargetMatches(t.target,ft.SCRIM_SELECTOR);if(n&&this.scrimClickAction_!=="")this.close(this.scrimClickAction_);else{var r=this.adapter.getActionFromEvent(t);r&&this.close(r)}},e.prototype.handleKeydown=function(t){var n=t.key==="Enter"||t.keyCode===13;if(n){var r=this.adapter.getActionFromEvent(t);if(!r){var o=t.composedPath?t.composedPath()[0]:t.target,s=!this.adapter.eventTargetMatches(o,this.suppressDefaultPressSelector);n&&s&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.escapeKeyAction_!==""&&this.close(this.escapeKeyAction_)},e.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(oe.OPENING),this.adapter.removeClass(oe.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var n=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){n.animationFrame_=0,clearTimeout(n.animationTimer_),n.animationTimer_=setTimeout(t,0)})},e.prototype.detectStackedButtons_=function(){this.adapter.removeClass(oe.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(oe.STACKED),t!==this.areButtonsStacked_&&(this.adapter.reverseButtons(),this.areButtonsStacked_=t)},e.prototype.detectScrollableContent_=function(){this.adapter.removeClass(oe.SCROLLABLE),this.adapter.isContentScrollable()&&this.adapter.addClass(oe.SCROLLABLE)},e}(pt);const qa=Ga;/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function yi(i){return i===void 0&&(i=window),Ka(i)?{passive:!0}:!1}function Ka(i){i===void 0&&(i=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};i.document.addEventListener("test",n,t),i.document.removeEventListener("test",n,t)}catch{e=!1}return e}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Xa(i,e){if(i.closest)return i.closest(e);for(var t=i;t;){if(Wr(t,e))return t;t=t.parentElement}return null}function Wr(i,e){var t=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return t.call(i,e)}/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */function Gr(i){return{addClass:e=>{i.classList.add(e)},removeClass:e=>{i.classList.remove(e)},hasClass:e=>i.classList.contains(e)}}const qr=()=>{},Ya={get passive(){return!1}};document.addEventListener("x",qr,Ya),document.removeEventListener("x",qr);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */class vi extends Ht{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const mt=i=>(e,t)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const n=e.constructor._observers;e.constructor._observers=new Map,n.forEach((r,o)=>e.constructor._observers.set(o,r))}}else{e.constructor._observers=new Map;const n=e.updated;e.updated=function(r){n.call(this,r),r.forEach((o,s)=>{const d=this.constructor._observers.get(s);d!==void 0&&d.call(this,this[s],o)})}}e.constructor._observers.set(t,i)};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ja{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const n of t)this.classes.add(n)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const Kr=new WeakMap,be=ct(i=>e=>{if(!(e instanceof ut)||e instanceof gi||e.committer.name!=="class"||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:t}=e,{element:n}=t;let r=Kr.get(e);r===void 0&&(n.setAttribute("class",t.strings.join(" ")),Kr.set(e,r=new Set));const o=n.classList||new Ja(n);r.forEach(s=>{s in i||(o.remove(s),r.delete(s))});for(const s in i){const a=i[s];a!=r.has(s)&&(a?(o.add(s),r.add(s)):(o.remove(s),r.delete(s)))}typeof o.commit=="function"&&o.commit()}),mn=document.$blockingElements;class ne extends vi{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.mdcFoundationClass=qa,this.boundLayout=null,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}get primaryButton(){let e=this.primarySlot.assignedNodes();e=e.filter(n=>n instanceof HTMLElement);const t=e[0];return t||null}emitNotification(e,t){const n={detail:t?{action:t}:{}},r=new CustomEvent(e,n);this.dispatchEvent(r)}getInitialFocusEl(){const e=`[${this.initialFocusAttribute}]`,t=this.querySelector(e);if(t)return t;const r=this.primarySlot.assignedNodes({flatten:!0}),o=this.searchNodeTreesForAttribute(r,this.initialFocusAttribute);if(o)return o;const a=this.secondarySlot.assignedNodes({flatten:!0}),d=this.searchNodeTreesForAttribute(a,this.initialFocusAttribute);if(d)return d;const u=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(u,this.initialFocusAttribute)}searchNodeTreesForAttribute(e,t){for(const n of e)if(n instanceof HTMLElement){if(n.hasAttribute(t))return n;{const r=n.querySelector(`[${t}]`);if(r)return r}}return null}createAdapter(){return Object.assign(Object.assign({},Gr(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const e=this.primaryButton;e&&e.click()},eventTargetMatches:(e,t)=>e?Wr(e,t):!1,getActionFromEvent:e=>{if(!e.target)return"";const t=Xa(e.target,`[${this.actionAttribute}]`);return t&&t.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const e=this.contentElement;return e?e.scrollHeight>e.offsetHeight:!1},notifyClosed:e=>this.emitNotification("closed",e),notifyClosing:e=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",e)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{mn.remove(this)},trapFocus:e=>{mn.push(this),e&&e.focus()}})}render(){const e={[oe.STACKED]:this.stacked};let t=j``;this.heading&&(t=this.renderHeading());const n={"mdc-dialog__actions":!this.hideActions};return j`
    <div class="mdc-dialog ${be(e)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${t}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${be(n)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}renderHeading(){return j`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,mn.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const e=this.getInitialFocusEl();e&&e.focus()}blur(){if(!this.shadowRoot)return;const e=this.shadowRoot.activeElement;if(e)e instanceof HTMLElement&&e.blur();else{const t=this.getRootNode(),n=t instanceof Document?t.activeElement:null;n instanceof HTMLElement&&n.blur()}}setEventListeners(){this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundLayout=()=>{this.open&&this.mdcFoundation.layout.bind(this.mdcFoundation)},this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation),this.mdcRoot.addEventListener("click",this.boundHandleClick),window.addEventListener("resize",this.boundLayout,yi()),window.addEventListener("orientationchange",this.boundLayout,yi()),this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,yi()),document.addEventListener("keydown",this.boundHandleDocumentKeydown,yi())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundLayout&&(window.removeEventListener("resize",this.boundLayout),window.removeEventListener("orientationchange",this.boundLayout)),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}b([ee(".mdc-dialog")],ne.prototype,"mdcRoot",void 0),b([ee('slot[name="primaryAction"]')],ne.prototype,"primarySlot",void 0),b([ee('slot[name="secondaryAction"]')],ne.prototype,"secondarySlot",void 0),b([ee("#contentSlot")],ne.prototype,"contentSlot",void 0),b([ee(".mdc-dialog__content")],ne.prototype,"contentElement",void 0),b([ee(".mdc-container")],ne.prototype,"conatinerElement",void 0),b([S({type:Boolean})],ne.prototype,"hideActions",void 0),b([S({type:Boolean}),mt(function(){this.forceLayout()})],ne.prototype,"stacked",void 0),b([S({type:String})],ne.prototype,"heading",void 0),b([S({type:String}),mt(function(i){this.mdcFoundation.setScrimClickAction(i)})],ne.prototype,"scrimClickAction",void 0),b([S({type:String}),mt(function(i){this.mdcFoundation.setEscapeKeyAction(i)})],ne.prototype,"escapeKeyAction",void 0),b([S({type:Boolean,reflect:!0}),mt(function(i){this.mdcFoundation&&this.isConnected&&(i?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))})],ne.prototype,"open",void 0),b([S()],ne.prototype,"defaultAction",void 0),b([S()],ne.prototype,"actionAttribute",void 0),b([S()],ne.prototype,"initialFocusAttribute",void 0);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const Qa=Ke`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;let gn=class extends ne{};gn.styles=Qa,gn=b([qe("mwc-dialog")],gn);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const Za=Ke`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let _n=class extends Ht{render(){return j`<slot></slot>`}};_n.styles=Za,_n=b([qe("mwc-icon")],_n);/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var bn=function(i,e){return bn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},bn(i,e)};function ed(i,e){bn(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Bt=function(){return Bt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bt.apply(this,arguments)};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var td={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},id={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Xr={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function nd(i,e,t){if(!i)return{x:0,y:0};var n=e.x,r=e.y,o=n+t.left,s=r+t.top,a,d;if(i.type==="touchstart"){var l=i;a=l.changedTouches[0].pageX-o,d=l.changedTouches[0].pageY-s}else{var u=i;a=u.pageX-o,d=u.pageY-s}return{x:a,y:d}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Yr=["touchstart","pointerdown","mousedown","keydown"],Jr=["touchend","pointerup","mouseup","contextmenu"],xi=[],rd=function(i){ed(e,i);function e(t){var n=i.call(this,Bt(Bt({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(r){return n.activate_(r)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return td},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return id},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Xr},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var r=e.cssClasses,o=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(o),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(o),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var n=this;t&&(Yr.forEach(function(r){n.adapter.registerInteractionHandler(r,n.activateHandler_)}),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var n=this;t.type==="keydown"?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):Jr.forEach(function(r){n.adapter.registerDocumentInteractionHandler(r,n.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;Yr.forEach(function(n){t.adapter.deregisterInteractionHandler(n,t.activateHandler_)}),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),Jr.forEach(function(n){t.adapter.deregisterDocumentInteractionHandler(n,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,n=e.strings,r=Object.keys(n);r.forEach(function(o){o.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[o],null)})},e.prototype.activate_=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState_;if(!r.isActivated){var o=this.previousActivationEvent_,s=o&&t!==void 0&&o.type!==t.type;if(!s){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var a=t!==void 0&&xi.length>0&&xi.some(function(d){return n.adapter.containsEventTarget(d)});if(a){this.resetActivationState_();return}t!==void 0&&(xi.push(t.target),this.registerDeactivationHandlers_(t)),r.wasElementMadeActive=this.checkElementMadeActive_(t),r.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){xi=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=n.checkElementMadeActive_(t),r.wasElementMadeActive&&n.animateActivation_()),r.wasElementMadeActive||(n.activationState_=n.defaultActivationState_())})}}}},e.prototype.checkElementMadeActive_=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation_=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,o=n.VAR_FG_TRANSLATE_END,s=e.cssClasses,a=s.FG_DEACTIVATION,d=s.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",c="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates_(),h=f.startPoint,p=f.endPoint;u=h.x+"px, "+h.y+"px",c=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(r,u),this.adapter.updateCssVariable(o,c),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},l)},e.prototype.getFgTranslationCoordinates_=function(){var t=this.activationState_,n=t.activationEvent,r=t.wasActivatedByPointer,o;r?o=nd(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):o={x:this.frame_.width/2,y:this.frame_.height/2},o={x:o.x-this.initialSize_/2,y:o.y-this.initialSize_/2};var s={x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2};return{startPoint:o,endPoint:s}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,o=r.hasDeactivationUXRun,s=r.isActivated,a=o||!s;a&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter.removeClass(n)},Xr.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,n=this.activationState_;if(n.isActivated){var r=Bt({},n);n.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(r)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(r),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var n=t.wasActivatedByPointer,r=t.wasElementMadeActive;(n||r)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width),r=function(){var s=Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2));return s+e.numbers.PADDING};this.maxRadius_=this.adapter.isUnbounded()?n:r();var o=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&o%2!==0?this.initialSize_=o-1:this.initialSize_=o,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,o=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize_+"px"),this.adapter.updateCssVariable(s,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords_.top+"px"))},e}(pt);const od=rd;/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Qr=new WeakMap,sd=ct(i=>e=>{if(!(e instanceof ut)||e instanceof gi||e.committer.name!=="style"||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:t}=e,{style:n}=t.element;let r=Qr.get(e);r===void 0&&(n.cssText=t.strings.join(" "),Qr.set(e,r=new Set)),r.forEach(o=>{o in i||(r.delete(o),o.indexOf("-")===-1?n[o]=null:n.removeProperty(o))});for(const o in i)r.add(o),o.indexOf("-")===-1?n[o]=i[o]:n.setProperty(o,i[o])});class Q extends vi{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=od}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0;break}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1;break}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t;break}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),n={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded};return j`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${be(n)}"
          style="${sd({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}b([ee(".mdc-ripple-surface")],Q.prototype,"mdcRoot",void 0),b([S({type:Boolean})],Q.prototype,"primary",void 0),b([S({type:Boolean})],Q.prototype,"accent",void 0),b([S({type:Boolean})],Q.prototype,"unbounded",void 0),b([S({type:Boolean})],Q.prototype,"disabled",void 0),b([S({type:Boolean})],Q.prototype,"activated",void 0),b([S({type:Boolean})],Q.prototype,"selected",void 0),b([le()],Q.prototype,"hovering",void 0),b([le()],Q.prototype,"bgFocused",void 0),b([le()],Q.prototype,"fgActivation",void 0),b([le()],Q.prototype,"fgDeactivation",void 0),b([le()],Q.prototype,"fgScale",void 0),b([le()],Q.prototype,"fgSize",void 0),b([le()],Q.prototype,"translateStart",void 0),b([le()],Q.prototype,"translateEnd",void 0),b([le()],Q.prototype,"leftPos",void 0),b([le()],Q.prototype,"topPos",void 0);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const ad=Ke`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;let yn=class extends Q{};yn.styles=ad,yn=b([qe("mwc-ripple")],yn);/**
    @license
    Copyright 2020 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */class dd{constructor(e){this.startPress=t=>{e().then(n=>{n&&n.startPress(t)})},this.endPress=()=>{e().then(t=>{t&&t.endPress()})},this.startFocus=()=>{e().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{e().then(t=>{t&&t.endFocus()})},this.startHover=()=>{e().then(t=>{t&&t.startHover()})},this.endHover=()=>{e().then(t=>{t&&t.endHover()})}}}class se extends Ht{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new dd(()=>(this.shouldRenderRipple=!0,this.ripple))}renderOverlay(){return j``}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?j`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}getRenderClasses(){return be({"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense})}render(){return j`
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${be({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return j`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}b([S({type:Boolean,reflect:!0})],se.prototype,"raised",void 0),b([S({type:Boolean,reflect:!0})],se.prototype,"unelevated",void 0),b([S({type:Boolean,reflect:!0})],se.prototype,"outlined",void 0),b([S({type:Boolean})],se.prototype,"dense",void 0),b([S({type:Boolean,reflect:!0})],se.prototype,"disabled",void 0),b([S({type:Boolean,attribute:"trailingicon"})],se.prototype,"trailingIcon",void 0),b([S({type:Boolean,reflect:!0})],se.prototype,"fullwidth",void 0),b([S({type:String})],se.prototype,"icon",void 0),b([S({type:String})],se.prototype,"label",void 0),b([S({type:Boolean})],se.prototype,"expandContent",void 0),b([ee("#button")],se.prototype,"buttonElement",void 0),b([Ha("mwc-ripple")],se.prototype,"ripple",void 0),b([le()],se.prototype,"shouldRenderRipple",void 0),b([zr({passive:!0})],se.prototype,"handleRippleActivate",null);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const ld=Ke`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color: #fff;--mdc-ripple-focus-opacity: 0.24;--mdc-ripple-hover-opacity: 0.08;--mdc-ripple-press-opacity: 0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;let vn=class extends se{};vn.styles=ld,vn=b([qe("mwc-button")],vn);var H=(i=>(i[i.List=0]="List",i[i.Create=1]="Create",i[i.LoginForm=2]="LoginForm",i[i.SignupForm=3]="SignupForm",i[i.Account=4]="Account",i[i.AuthenticationMenu=5]="AuthenticationMenu",i))(H||{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},cd=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=i[t++];e[n++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=i[t++],s=i[t++],a=i[t++],d=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(d>>10)),e[n++]=String.fromCharCode(56320+(d&1023))}else{const o=i[t++],s=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const o=i[r],s=r+1<i.length,a=s?i[r+1]:0,d=r+2<i.length,l=d?i[r+2]:0,u=o>>2,c=(o&3)<<4|a>>4;let f=(a&15)<<2|l>>6,h=l&63;d||(h=64,s||(f=64)),n.push(t[u],t[c],t[f],t[h])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Zr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):cd(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const o=t[i.charAt(r++)],a=r<i.length?t[i.charAt(r)]:0;++r;const l=r<i.length?t[i.charAt(r)]:64;++r;const c=r<i.length?t[i.charAt(r)]:64;if(++r,o==null||a==null||l==null||c==null)throw Error();const f=o<<2|a>>4;if(n.push(f),l!==64){const h=a<<4&240|l>>2;if(n.push(h),c!==64){const p=l<<6&192|c;n.push(p)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},ud=function(i){const e=Zr(i);return eo.encodeByteArray(e,!0)},to=function(i){return ud(i).replace(/\./g,"")},hd=function(i){try{return eo.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function md(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _d(){const i=re();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function bd(){return typeof indexedDB=="object"}function yd(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="FirebaseError";class Ce extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=vd,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vt.prototype.create)}}class Vt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?xd(o,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Ce(r,a,n)}}function xd(i,e){return i.replace(wd,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const wd=/\{\$([^}]+)}/g;function Ed(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function wi(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const o=i[r],s=e[r];if(io(o)&&io(s)){if(!wi(o,s))return!1}else if(o!==s)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function io(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function jt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,o]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function Wt(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Ad(i,e){const t=new Id(i,e);return t.subscribe.bind(t)}class Id{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Sd(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=xn),r.error===void 0&&(r.error=xn),r.complete===void 0&&(r.complete=xn);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sd(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function xn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(i){return i&&i._delegate?i._delegate:i}class Xe{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new fd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kd(e))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});n.resolve(o)}catch{}}}}clearInstance(e=Ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ye){return this.instances.has(e)}getOptions(e=Ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);n===a&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Cd(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ye){return this.component?this.component.multipleInstances?e:Ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cd(i){return i===Ye?void 0:i}function kd(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Td(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(B||(B={}));const Rd={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Nd=B.INFO,Ld={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Pd=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=Ld[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class no{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Dd=(i,e)=>e.some(t=>i instanceof t);let ro,oo;function $d(){return ro||(ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return oo||(oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const so=new WeakMap,wn=new WeakMap,ao=new WeakMap,En=new WeakMap,An=new WeakMap;function Fd(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",o),i.removeEventListener("error",s)},o=()=>{t($e(i.result)),r()},s=()=>{n(i.error),r()};i.addEventListener("success",o),i.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&so.set(t,i)}).catch(()=>{}),An.set(e,i),e}function Ud(i){if(wn.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",o),i.removeEventListener("error",s),i.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",o),i.addEventListener("error",s),i.addEventListener("abort",s)});wn.set(i,e)}let In={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return wn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ao.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $e(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Hd(i){In=i(In)}function Bd(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(Sn(this),e,...t);return ao.set(n,e.sort?e.sort():[e]),$e(n)}:Md().includes(i)?function(...e){return i.apply(Sn(this),e),$e(so.get(this))}:function(...e){return $e(i.apply(Sn(this),e))}}function Vd(i){return typeof i=="function"?Bd(i):(i instanceof IDBTransaction&&Ud(i),Dd(i,$d())?new Proxy(i,In):i)}function $e(i){if(i instanceof IDBRequest)return Fd(i);if(En.has(i))return En.get(i);const e=Vd(i);return e!==i&&(En.set(i,e),An.set(e,i)),e}const Sn=i=>An.get(i);function zd(i,e,{blocked:t,upgrade:n,blocking:r,terminated:o}={}){const s=indexedDB.open(i,e),a=$e(s);return n&&s.addEventListener("upgradeneeded",d=>{n($e(s.result),d.oldVersion,d.newVersion,$e(s.transaction))}),t&&s.addEventListener("blocked",()=>t()),a.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const jd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],Tn=new Map;function lo(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Tn.get(e))return Tn.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=Wd.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||jd.includes(t)))return;const o=async function(s,...a){const d=this.transaction(s,r?"readwrite":"readonly");let l=d.store;return n&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&d.done]))[0]};return Tn.set(e,o),o}Hd(i=>({...i,get:(e,t,n)=>lo(e,t)||i.get(e,t,n),has:(e,t)=>!!lo(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qd(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function qd(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cn="@firebase/app",co="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new no("@firebase/app"),Kd="@firebase/app-compat",Xd="@firebase/analytics-compat",Yd="@firebase/analytics",Jd="@firebase/app-check-compat",Qd="@firebase/app-check",Zd="@firebase/auth",el="@firebase/auth-compat",tl="@firebase/database",il="@firebase/database-compat",nl="@firebase/functions",rl="@firebase/functions-compat",ol="@firebase/installations",sl="@firebase/installations-compat",al="@firebase/messaging",dl="@firebase/messaging-compat",ll="@firebase/performance",cl="@firebase/performance-compat",ul="@firebase/remote-config",hl="@firebase/remote-config-compat",fl="@firebase/storage",pl="@firebase/storage-compat",ml="@firebase/firestore",gl="@firebase/firestore-compat",_l="firebase",bl="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="[DEFAULT]",yl={[Cn]:"fire-core",[Kd]:"fire-core-compat",[Yd]:"fire-analytics",[Xd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Jd]:"fire-app-check-compat",[Zd]:"fire-auth",[el]:"fire-auth-compat",[tl]:"fire-rtdb",[il]:"fire-rtdb-compat",[nl]:"fire-fn",[rl]:"fire-fn-compat",[ol]:"fire-iid",[sl]:"fire-iid-compat",[al]:"fire-fcm",[dl]:"fire-fcm-compat",[ll]:"fire-perf",[cl]:"fire-perf-compat",[ul]:"fire-rc",[hl]:"fire-rc-compat",[fl]:"fire-gcs",[pl]:"fire-gcs-compat",[ml]:"fire-fst",[gl]:"fire-fst-compat","fire-js":"fire-js",[_l]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map,kn=new Map;function vl(i,e){try{i.container.addComponent(e)}catch(t){Je.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function gt(i){const e=i.name;if(kn.has(e))return Je.debug(`There were multiple attempts to register component ${e}.`),!1;kn.set(e,i);for(const t of Ei.values())vl(t,i);return!0}function On(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Vt("app","Firebase",xl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=bl;function El(i,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:uo,automaticDataCollectionEnabled:!1},e),n=t.name;if(typeof n!="string"||!n)throw Qe.create("bad-app-name",{appName:String(n)});const r=Ei.get(n);if(r){if(wi(i,r.options)&&wi(t,r.config))return r;throw Qe.create("duplicate-app",{appName:n})}const o=new Od(n);for(const a of kn.values())o.addComponent(a);const s=new wl(i,t,o);return Ei.set(n,s),s}function ho(i=uo){const e=Ei.get(i);if(!e)throw Qe.create("no-app",{appName:i});return e}function Me(i,e,t){var n;let r=(n=yl[i])!==null&&n!==void 0?n:i;t&&(r+=`-${t}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Je.warn(a.join(" "));return}gt(new Xe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="firebase-heartbeat-database",Il=1,Gt="firebase-heartbeat-store";let Rn=null;function fo(){return Rn||(Rn=zd(Al,Il,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Gt)}}}).catch(i=>{throw Qe.create("idb-open",{originalErrorMessage:i.message})})),Rn}async function Sl(i){var e;try{return(await fo()).transaction(Gt).objectStore(Gt).get(mo(i))}catch(t){if(t instanceof Ce)Je.warn(t.message);else{const n=Qe.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});Je.warn(n.message)}}}async function po(i,e){var t;try{const r=(await fo()).transaction(Gt,"readwrite");return await r.objectStore(Gt).put(e,mo(i)),r.done}catch(n){if(n instanceof Ce)Je.warn(n.message);else{const r=Qe.create("idb-set",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Je.warn(r.message)}}}function mo(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=1024,Cl=30*24*60*60*1e3;class kl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rl(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=go();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Cl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=go(),{heartbeatsToSend:t,unsentEntries:n}=Ol(this._heartbeatsCache.heartbeats),r=to(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function go(){return new Date().toISOString().substring(0,10)}function Ol(i,e=Tl){const t=[];let n=i.slice();for(const r of i){const o=t.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),_o(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),_o(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Rl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bd()?yd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _o(i){return to(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(i){gt(new Xe("platform-logger",e=>new Gd(e),"PRIVATE")),gt(new Xe("heartbeat",e=>new kl(e),"PRIVATE")),Me(Cn,co,i),Me(Cn,co,"esm2017"),Me("fire-js","")}Nl("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="type.googleapis.com/google.protobuf.Int64Value",Pl="type.googleapis.com/google.protobuf.UInt64Value";function bo(i,e){const t={};for(const n in i)i.hasOwnProperty(n)&&(t[n]=e(i[n]));return t}function Nn(i){if(i==null)return null;if(i instanceof Number&&(i=i.valueOf()),typeof i=="number"&&isFinite(i)||i===!0||i===!1||Object.prototype.toString.call(i)==="[object String]")return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(e=>Nn(e));if(typeof i=="function"||typeof i=="object")return bo(i,e=>Nn(e));throw new Error("Data cannot be encoded in JSON: "+i)}function Ii(i){if(i==null)return i;if(i["@type"])switch(i["@type"]){case Ll:case Pl:{const e=Number(i.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+i);return e}default:throw new Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(e=>Ii(e)):typeof i=="function"||typeof i=="object"?bo(i,e=>Ii(e)):i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _t extends Ce{constructor(e,t,n){super(`${Ln}/${e}`,t||""),this.details=n}}function Dl(i){if(i>=200&&i<300)return"ok";switch(i){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function $l(i,e){let t=Dl(i),n=t,r;try{const o=e&&e.error;if(o){const s=o.status;if(typeof s=="string"){if(!yo[s])return new _t("internal","internal");t=yo[s],n=s}const a=o.message;typeof a=="string"&&(n=a),r=o.details,r!==void 0&&(r=Ii(r))}}catch{}return t==="ok"?null:new _t(t,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||t.get().then(r=>this.messaging=r,()=>{}),this.appCheck||n.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),t=await this.getMessagingToken(),n=await this.getAppCheckToken();return{authToken:e,messagingToken:t,appCheckToken:n}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="us-central1";function Fl(i){let e=null;return{promise:new Promise((t,n)=>{e=setTimeout(()=>{n(new _t("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{e&&clearTimeout(e)}}}class Ul{constructor(e,t,n,r,o=Pn,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new Ml(t,n,r),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(o);this.customDomain=a.origin,this.region=Pn}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Hl(i,e,t){return n=>Vl(i,e,n,t||{})}async function Bl(i,e,t,n){t["Content-Type"]="application/json";let r;try{r=await n(i,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let o=null;try{o=await r.json()}catch{}return{status:r.status,json:o}}function Vl(i,e,t,n){const r=i._url(e);return zl(i,r,t,n)}async function zl(i,e,t,n){t=Nn(t);const r={data:t},o={},s=await i.contextProvider.getContext();s.authToken&&(o.Authorization="Bearer "+s.authToken),s.messagingToken&&(o["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(o["X-Firebase-AppCheck"]=s.appCheckToken);const a=n.timeout||7e4,d=Fl(a),l=await Promise.race([Bl(e,r,o,i.fetchImpl),d.promise,i.cancelAllRequests]);if(d.cancel(),!l)throw new _t("cancelled","Firebase Functions instance was deleted.");const u=$l(l.status,l.json);if(u)throw u;if(!l.json)throw new _t("internal","Response is not valid JSON object.");let c=l.json.data;if(typeof c>"u"&&(c=l.json.result),typeof c>"u")throw new _t("internal","Response is missing data field.");return{data:Ii(c)}}const vo="@firebase/functions",xo="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="auth-internal",Wl="app-check-internal",Gl="messaging-internal";function ql(i,e){const t=(n,{instanceIdentifier:r})=>{const o=n.getProvider("app").getImmediate(),s=n.getProvider(jl),a=n.getProvider(Gl),d=n.getProvider(Wl);return new Ul(o,s,a,d,r,i)};gt(new Xe(Ln,t,"PUBLIC").setMultipleInstances(!0)),Me(vo,xo,e),Me(vo,xo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(i=ho(),e=Pn){return On(Ee(i),Ln).getImmediate({identifier:e})}function bt(i,e,t){return Hl(Ee(i),e,t)}ql(fetch.bind(self));var Xl="firebase",Yl="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me(Xl,Yl,"app");function wo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jl=wo,Eo=new Vt("auth","Firebase",wo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new no("@firebase/auth");function Si(i,...e){Ao.logLevel<=B.ERROR&&Ao.error(`Auth (${Ai}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(i,...e){throw Dn(i,...e)}function Ae(i,...e){return Dn(i,...e)}function Ql(i,e,t){const n=Object.assign(Object.assign({},Jl()),{[e]:t});return new Vt("auth","Firebase",n).create(e,{appName:i.name})}function Dn(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return Eo.create(i,...e)}function N(i,e,...t){if(!i)throw Dn(e,...t)}function ke(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Si(e),new Error(e)}function Oe(i,e){i||ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map;function Re(i){Oe(i instanceof Function,"Expected a class definition");let e=Io.get(i);return e?(Oe(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Io.set(i,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(i,e){const t=On(i,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(wi(o,e??{}))return r;ye(r,"already-initialized")}return t.initialize({options:e})}function ec(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Re);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function tc(){return So()==="http:"||So()==="https:"}function So(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tc()||md()||"connection"in navigator)?navigator.onLine:!0}function nc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oe(t>e,"Short delay should be less than long delay!"),this.isMobile=pd()||gd()}get(){return ic()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(i,e){Oe(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new qt(3e4,6e4);function Kt(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function yt(i,e,t,n,r={}){return Co(i,r,async()=>{let o={},s={};n&&(e==="GET"?s=n:o={body:JSON.stringify(n)});const a=zt(Object.assign({key:i.config.apiKey},s)).slice(1),d=await i._getAdditionalHeaders();return d["Content-Type"]="application/json",i.languageCode&&(d["X-Firebase-Locale"]=i.languageCode),To.fetch()(ko(i,i.config.apiHost,t,a),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},o))})}async function Co(i,e,t){i._canInitEmulator=!1;const n=Object.assign(Object.assign({},rc),e);try{const r=new sc(i),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ti(i,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[d,l]=a.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(i,"credential-already-in-use",s);if(d==="EMAIL_EXISTS")throw Ti(i,"email-already-in-use",s);if(d==="USER_DISABLED")throw Ti(i,"user-disabled",s);const u=n[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ql(i,u,l);ye(i,u)}}catch(r){if(r instanceof Ce)throw r;ye(i,"network-request-failed")}}async function Xt(i,e,t,n,r={}){const o=await yt(i,e,t,n,r);return"mfaPendingCredential"in o&&ye(i,"multi-factor-auth-required",{_serverResponse:o}),o}function ko(i,e,t,n){const r=`${e}${t}?${n}`;return i.config.emulator?Mn(i.config,r):`${i.config.apiScheme}://${r}`}class sc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ae(this.auth,"network-request-failed")),oc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ti(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=Ae(i,e,n);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(i,e){return yt(i,"POST","/v1/accounts:delete",e)}async function dc(i,e){return yt(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lc(i,e=!1){const t=Ee(i),n=await t.getIdToken(e),r=Un(n);N(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:n,authTime:Yt(Fn(r.auth_time)),issuedAtTime:Yt(Fn(r.iat)),expirationTime:Yt(Fn(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Fn(i){return Number(i)*1e3}function Un(i){var e;const[t,n,r]=i.split(".");if(t===void 0||n===void 0||r===void 0)return Si("JWT malformed, contained fewer than 3 sections"),null;try{const o=hd(n);return o?JSON.parse(o):(Si("Failed to decode base64 JWT payload"),null)}catch(o){return Si("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function cc(i){const e=Un(i);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Ce&&uc(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function uc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yt(this.lastLoginAt),this.creationTime=Yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(i){var e;const t=i.auth,n=await i.getIdToken(),r=await vt(i,dc(t,{idToken:n}));N(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];i._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?mc(o.providerUserInfo):[],a=pc(i.providerData,s),d=i.isAnonymous,l=!(i.email&&o.passwordHash)&&!(a!=null&&a.length),u=d?l:!1,c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Oo(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(i,c)}async function fc(i){const e=Ee(i);await Ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pc(i,e){return[...i.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function mc(i){return i.map(e=>{var{providerId:t}=e,n=qi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(i,e){const t=await Co(i,{},async()=>{const n=zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=i.config,s=ko(i,r,"/v1/token",`key=${o}`),a=await i._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",To.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await gc(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,s=new Jt;return n&&(N(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),r&&(N(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(N(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(i,e){N(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Oo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await vt(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lc(this,e)}reload(){return fc(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ci(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vt(this,ac(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,s,a,d,l,u;const c=(n=t.displayName)!==null&&n!==void 0?n:void 0,f=(r=t.email)!==null&&r!==void 0?r:void 0,h=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,p=(s=t.photoURL)!==null&&s!==void 0?s:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,y=(l=t.createdAt)!==null&&l!==void 0?l:void 0,g=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:m,emailVerified:v,isAnonymous:A,providerData:k,stsTokenManager:E}=t;N(m&&E,e,"internal-error");const O=Jt.fromJSON(this.name,E);N(typeof m=="string",e,"internal-error"),Fe(c,e.name),Fe(f,e.name),N(typeof v=="boolean",e,"internal-error"),N(typeof A=="boolean",e,"internal-error"),Fe(h,e.name),Fe(p,e.name),Fe(_,e.name),Fe(w,e.name),Fe(y,e.name),Fe(g,e.name);const P=new Ze({uid:m,auth:e,email:f,emailVerified:v,displayName:c,isAnonymous:A,photoURL:p,phoneNumber:h,tenantId:_,stsTokenManager:O,createdAt:y,lastLoginAt:g});return k&&Array.isArray(k)&&(P.providerData=k.map($=>Object.assign({},$))),w&&(P._redirectEventId=w),P}static async _fromIdTokenResponse(e,t,n=!1){const r=new Jt;r.updateFromServerResponse(t);const o=new Ze({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ci(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ro.type="NONE";const No=Ro;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(i,e,t){return`firebase:${i}:${e}:${t}`}class xt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ki(this.userKey,r.apiKey,o),this.fullPersistenceKey=ki("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new xt(Re(No),e,n);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let o=r[0]||Re(No);const s=ki(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(s);if(u){const c=Ze._fromJSON(e,u);l!==o&&(a=c),o=l;break}}catch{}const d=r.filter(l=>l._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new xt(o,e,n):(o=d[0],a&&await o._set(s,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==o)try{await l._remove(s)}catch{}})),new xt(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($o(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Po(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fo(e))return"Blackberry";if(Uo(e))return"Webos";if(Hn(e))return"Safari";if((e.includes("chrome/")||Do(e))&&!e.includes("edge/"))return"Chrome";if(Mo(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Po(i=re()){return/firefox\//i.test(i)}function Hn(i=re()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Do(i=re()){return/crios\//i.test(i)}function $o(i=re()){return/iemobile/i.test(i)}function Mo(i=re()){return/android/i.test(i)}function Fo(i=re()){return/blackberry/i.test(i)}function Uo(i=re()){return/webos/i.test(i)}function Oi(i=re()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _c(i=re()){var e;return Oi(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bc(){return _d()&&document.documentMode===10}function Ho(i=re()){return Oi(i)||Mo(i)||Uo(i)||Fo(i)||/windows phone/i.test(i)||$o(i)}function yc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(i,e=[]){let t;switch(i){case"Browser":t=Lo(re());break;case"Worker":t=`${Lo(re())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ai}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=o=>new Promise((s,a)=>{try{const d=e(o);s(d)}catch(d){a(d)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=r)===null||t===void 0?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vo(this),this.idTokenSubscription=new Vo(this),this.beforeStateQueue=new vc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Re(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await xt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!s||s===a)&&(d!=null&&d.user)&&(r=d.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Ci(e)}catch(n){if(((t=n)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ee(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Re(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await xt.create(this,[Re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof t=="function"?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Qt(i){return Ee(i)}class Vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ad(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,t){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}async function wc(i,e){return yt(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(i,e){return Xt(i,"POST","/v1/accounts:signInWithPassword",Kt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(i,e){return Xt(i,"POST","/v1/accounts:signInWithEmailLink",Kt(i,e))}async function Ic(i,e){return Xt(i,"POST","/v1/accounts:signInWithEmailLink",Kt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Bn{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Zt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Zt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ec(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ac(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return wc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ic(e,{idToken:t,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(i,e){return Xt(i,"POST","/v1/accounts:signInWithIdp",Kt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="http://localhost";class et extends Bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=qi(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new et(n,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return wt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,wt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wt(e,t)}buildRequest(){const e={requestUri:Sc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cc(i){const e=jt(Wt(i)).link,t=e?jt(Wt(e)).deep_link_id:null,n=jt(Wt(i)).deep_link_id;return(n?jt(Wt(n)).link:null)||n||t||e||i}class Vn{constructor(e){var t,n,r,o,s,a;const d=jt(Wt(e)),l=(t=d.apiKey)!==null&&t!==void 0?t:null,u=(n=d.oobCode)!==null&&n!==void 0?n:null,c=Tc((r=d.mode)!==null&&r!==void 0?r:null);N(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=(o=d.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=d.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=d.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Cc(e);try{return new Vn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.providerId=Et.PROVIDER_ID}static credential(e,t){return Zt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Vn.parseLink(t);return N(n,"argument-error"),Zt._fromEmailAndCode(e,n.code,n.tenantId)}}Et.PROVIDER_ID="password",Et.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Et.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends zo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends ei{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return He.credential(t,n)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com",He.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends ei{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com",Be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends ei{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ve.credential(t,n)}catch{return null}}}Ve.TWITTER_SIGN_IN_METHOD="twitter.com",Ve.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(i,e){return Xt(i,"POST","/v1/accounts:signUp",Kt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await Ze._fromIdTokenResponse(e,n,r),s=Wo(n);return new Ne({user:o,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Wo(n);return new Ne({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Wo(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(i){var e;const t=Qt(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ne({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await jo(t,{returnSecureToken:!0}),r=await Ne._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ce{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ri(e,t,n,r)}}function Go(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(i,o,e,n):o})}async function Oc(i,e,t=!1){const n=await vt(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ne._forOperation(i,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(i,e,t=!1){var n;const{auth:r}=i,o="reauthenticate";try{const s=await vt(i,Go(r,o,e,i),t);N(s.idToken,r,"internal-error");const a=Un(s.idToken);N(a,r,"internal-error");const{sub:d}=a;return N(i.uid===d,r,"user-mismatch"),Ne._forOperation(i,o,s)}catch(s){throw((n=s)===null||n===void 0?void 0:n.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(i,e,t=!1){const n="signIn",r=await Go(i,n,e),o=await Ne._fromIdTokenResponse(i,n,r);return t||await i._updateCurrentUser(o.user),o}async function Nc(i,e){return qo(Qt(i),e)}async function Lc(i,e,t){const n=Qt(i),r=await jo(n,{returnSecureToken:!0,email:e,password:t}),o=await Ne._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(o.user),o}function Pc(i,e,t){return Nc(Ee(i),Et.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(i,e){return yt(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Ee(i),o={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},s=await vt(n,Dc(n.auth,o));n.displayName=s.displayName||null,n.photoURL=s.photoUrl||null;const a=n.providerData.find(({providerId:d})=>d==="password");a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(s)}function Mc(i,e,t,n){return Ee(i).onAuthStateChanged(e,t,n)}function Fc(i){return Ee(i).signOut()}const Ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){const i=re();return Hn(i)||Oi(i)}const Hc=1e3,Bc=10;class Xo extends Ko{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uc()&&yc(),this.fallbackToPolling=Ho(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,a,d)=>{this.notifyListeners(s,d)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const s=this.storage.getItem(n);!t&&this.localCache[n]===s||this.notifyListeners(n,s)},o=this.storage.getItem(n);bc()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Bc):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Hc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xo.type="LOCAL";const Vc=Xo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Ko{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yo.type="SESSION";const Jo=Yo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Li(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map(async l=>l(t.origin,o)),d=await zc(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Li.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((a,d)=>{const l=zn("",20);r.port1.start();const u=setTimeout(()=>{d(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(c){const f=c;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function Wc(i){Ie().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function Gc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qc(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Kc(){return Qo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="firebaseLocalStorageDb",Xc=1,Pi="firebaseLocalStorage",es="fbase_key";class ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Di(i,e){return i.transaction([Pi],e?"readwrite":"readonly").objectStore(Pi)}function Yc(){const i=indexedDB.deleteDatabase(Zo);return new ti(i).toPromise()}function jn(){const i=indexedDB.open(Zo,Xc);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(Pi,{keyPath:es})}catch(r){t(r)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(Pi)?e(n):(n.close(),await Yc(),e(await jn()))})})}async function ts(i,e,t){const n=Di(i,!0).put({[es]:e,value:t});return new ti(n).toPromise()}async function Jc(i,e){const t=Di(i,!1).get(e),n=await new ti(t).toPromise();return n===void 0?null:n.value}function is(i,e){const t=Di(i,!0).delete(e);return new ti(t).toPromise()}const Qc=800,Zc=3;class ns{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Zc)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Li._getInstance(Kc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gc(),!this.activeServiceWorker)return;this.sender=new jc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jn();return await ts(e,Ni,"1"),await is(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ts(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Jc(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>is(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Di(r,!1).getAll();return new ti(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ns.type="LOCAL";const eu=ns;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}function iu(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=r=>{const o=Ae("internal-error");o.customData=r,t(o)},n.type="text/javascript",n.charset="UTF-8",tu().appendChild(n)})}function nu(i){return`__${i}${Math.floor(Math.random()*1e6)}`}new qt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(i,e){return e?Re(e):(N(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Bn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ou(i){return qo(i.auth,new Wn(i),i.bypassAuthState)}function su(i){const{auth:e,user:t}=i;return N(t,e,"internal-error"),Rc(t,new Wn(i),i.bypassAuthState)}async function au(i){const{auth:e,user:t}=i;return N(t,e,"internal-error"),Oc(t,new Wn(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const d={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(d))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ou;case"linkViaPopup":case"linkViaRedirect":return au;case"reauthViaPopup":case"reauthViaRedirect":return su;default:ye(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new qt(2e3,1e4);class At extends rs{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,du.get())};e()}}At.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="pendingRedirect",$i=new Map;class cu extends rs{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const n=await uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uu(i,e){const t=pu(e),n=fu(i);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function hu(i,e){$i.set(i._key(),e)}function fu(i){return Re(i._redirectPersistence)}function pu(i){return ki(lu,i.config.apiKey,i.name)}async function mu(i,e,t=!1){const n=Qt(i),r=ru(n,e),s=await new cu(n,r,t).execute();return s&&!t&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=10*60*1e3;class _u{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ss(e)){const r=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ae(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gu&&this.cachedEventUids.clear(),this.cachedEventUids.has(os(e))}saveEventToCache(e){this.cachedEventUids.add(os(e)),this.lastProcessedEventTime=Date.now()}}function os(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function ss({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bu(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ss(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(i,e={}){return yt(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xu=/^https?/;async function wu(i){if(i.config.emulator)return;const{authorizedDomains:e}=await yu(i);for(const t of e)try{if(Eu(t))return}catch{}ye(i,"unauthorized-domain")}function Eu(i){const e=$n(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const s=new URL(i);return s.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===n}if(!xu.test(t))return!1;if(vu.test(i))return n===i;const r=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new qt(3e4,6e4);function as(){const i=Ie().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Iu(i){return new Promise((e,t)=>{var n,r,o;function s(){as(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{as(),t(Ae(i,"network-request-failed"))},timeout:Au.get()})}if(!((r=(n=Ie().gapi)===null||n===void 0?void 0:n.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=Ie().gapi)===null||o===void 0)&&o.load)s();else{const a=nu("iframefcb");return Ie()[a]=()=>{gapi.load?s():t(Ae(i,"network-request-failed"))},iu(`https://apis.google.com/js/api.js?onload=${a}`).catch(d=>t(d))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function Su(i){return Mi=Mi||Iu(i),Mi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new qt(5e3,15e3),Cu="__/auth/iframe",ku="emulator/auth/iframe",Ou={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ru=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nu(i){const e=i.config;N(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Mn(e,ku):`https://${i.config.authDomain}/${Cu}`,n={apiKey:e.apiKey,appName:i.name,v:Ai},r=Ru.get(i.config.apiHost);r&&(n.eid=r);const o=i._getFrameworks();return o.length&&(n.fw=o.join(",")),`${t}?${zt(n).slice(1)}`}async function Lu(i){const e=await Su(i),t=Ie().gapi;return N(t,i,"internal-error"),e.open({where:document.body,url:Nu(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ou,dontclear:!0},n=>new Promise(async(r,o)=>{await n.restyle({setHideOnLeave:!1});const s=Ae(i,"network-request-failed"),a=Ie().setTimeout(()=>{o(s)},Tu.get());function d(){Ie().clearTimeout(a),r(n)}n.ping(d).then(d,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Du=500,$u=600,Mu="_blank",Fu="http://localhost";class ds{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uu(i,e,t,n=Du,r=$u){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const d=Object.assign(Object.assign({},Pu),{width:n.toString(),height:r.toString(),top:o,left:s}),l=re().toLowerCase();t&&(a=Do(l)?Mu:t),Po(l)&&(e=e||Fu,d.scrollbars="yes");const u=Object.entries(d).reduce((f,[h,p])=>`${f}${h}=${p},`,"");if(_c(l)&&a!=="_self")return Hu(e||"",a),new ds(null);const c=window.open(e||"",a,u);N(c,i,"popup-blocked");try{c.focus()}catch{}return new ds(c)}function Hu(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="__/auth/handler",Vu="emulator/auth/handler";function ls(i,e,t,n,r,o){N(i.config.authDomain,i,"auth-domain-config-required"),N(i.config.apiKey,i,"invalid-api-key");const s={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:Ai,eventId:r};if(e instanceof zo){e.setDefaultLanguage(i.languageCode),s.providerId=e.providerId||"",Ed(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,l]of Object.entries(o||{}))s[d]=l}if(e instanceof ei){const d=e.getScopes().filter(l=>l!=="");d.length>0&&(s.scopes=d.join(","))}i.tenantId&&(s.tid=i.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];return`${zu(i)}?${zt(a).slice(1)}`}function zu({config:i}){return i.emulator?Mn(i,Vu):`https://${i.authDomain}/${Bu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="webStorageSupport";class ju{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jo,this._completeRedirectFn=mu,this._overrideRedirectResult=hu}async _openPopup(e,t,n,r){var o;Oe((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=ls(e,t,n,$n(),r);return Uu(e,s,zn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Wc(ls(e,t,n,$n(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(Oe(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Lu(e),n=new _u(e);return t.register("authEvent",r=>(N(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gn,{type:Gn},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[Gn];s!==void 0&&t(!!s),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ho()||Hn()||Oi()}}const Wu=ju;var cs="@firebase/auth",us="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{var r;e(((r=n)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ku(i){gt(new Xe("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=n.options;return((a,d)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const l={apiKey:o,authDomain:s,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bo(i)},u=new xc(a,d,l);return ec(u,t),u})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),gt(new Xe("auth-internal",e=>{const t=Qt(e.getProvider("auth").getImmediate());return(n=>new Gu(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(cs,us,qu(i)),Me(cs,us,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(i=ho()){const e=On(i,"auth");return e.isInitialized()?e.getImmediate():Zl(i,{popupRedirectResolver:Wu,persistence:[eu,Vc,Jo]})}Ku("Browser");const hs=El({apiKey:"AIzaSyAtc2ed5rsHT7IOF9E1psFhkqtCqKib25U",authDomain:"glade-software-firebase.firebaseapp.com",databaseURL:"https://glade-software-firebase.firebaseio.com",projectId:"glade-software-firebase",storageBucket:"glade-software-firebase.appspot.com",messagingSenderId:"527964919900",appId:"1:527964919900:web:dc1ffc9e14a70b08b3ae99"}),Le=Xu(hs),It=Kl(hs),St=[];function Yu(i,e=R){let t;const n=new Set;function r(a){if(he(i,a)&&(i=a,t)){const d=!St.length;for(const l of n)l[1](),St.push(l,i);if(d){for(let l=0;l<St.length;l+=2)St[l][0](St[l+1]);St.length=0}}}function o(a){r(a(i))}function s(a,d=R){const l=[a,d];return n.add(l),n.size===1&&(t=e(r)||R),a(i),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:r,update:o,subscribe:s}}const Tt=Yu(null);function fs(i){let e,t,n,r;return{c(){e=I("button"),t=fe("delete"),z(e,"class","deleteButton"),e.disabled=i[2]},m(o,s){D(o,e,s),x(e,t),n||(r=W(e,"click",i[4]),n=!0)},p(o,s){s&4&&(e.disabled=o[2])},d(o){o&&U(e),n=!1,r()}}}function ps(i){let e,t=(i[0].plainTextBody||"")+"",n;return{c(){e=I("div"),n=fe(t),z(e,"class","htmlContent loading")},m(r,o){D(r,e,o),x(e,n)},p(r,o){o&1&&t!==(t=(r[0].plainTextBody||"")+"")&&hi(n,t)},d(r){r&&U(e)}}}function Ju(i){var w,y,g,m,v;let e,t,n,r,o,s,a=(((w=i[0])==null?void 0:w.postedBy.displayName)||"accidental-anonymous-anteater")+"",d,l,u,c,f,h=((y=i[0])==null?void 0:y.htmlString)+"",p=(!i[1]&&i[3]&&((g=i[0])==null?void 0:g.postedBy.uid)==i[3].uid||((m=i[3])==null?void 0:m.isForestOwner))&&fs(i),_=i[0]&&!((v=i[0])!=null&&v.htmlString)&&ps(i);return{c(){e=I("div"),t=I("style"),t.textContent=`.annotation {
      border: 1px solid #c4cfd6;
      padding: 6px;
      margin: 8px 0px;
      border-radius: 8px;
      min-width: 500px;
    }
    .deleteButton {
      color: #ff0000;
      float: right;
      bakground-color: gray;
      border: none;
      border-radius: 4px
    }
    .htmlContent {
      max-width: 800px;
      object-fit: contain;
    }
    .postedBy {
      color: #1a535c;
    }
    .loading {
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );

      background-repeat: no-repeat;
      background-size: 800px 104px;

      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: forwards;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-name: placeholderShimmer;
      -webkit-animation-timing-function: linear;
    }

    @-webkit-keyframes placeholderShimmer {
      0% {
        background-position: -468px 0;
      }

      100% {
        background-position: 468px 0;
      }
    }`,n=M(),r=I("div"),o=I("span"),s=fe("@"),d=fe(a),l=M(),p&&p.c(),u=M(),_&&_.c(),c=M(),f=I("div"),this.c=R,z(o,"class","postedBy"),z(f,"class","htmlContent"),z(r,"class","annotation")},m(A,k){D(A,e,k),x(e,t),x(e,n),x(e,r),x(r,o),x(o,s),x(o,d),x(r,l),p&&p.m(r,null),x(r,u),_&&_.m(r,null),x(r,c),x(r,f),f.innerHTML=h},p(A,[k]){var E,O,P,$,F;k&1&&a!==(a=(((E=A[0])==null?void 0:E.postedBy.displayName)||"accidental-anonymous-anteater")+"")&&hi(d,a),!A[1]&&A[3]&&((O=A[0])==null?void 0:O.postedBy.uid)==A[3].uid||(P=A[3])!=null&&P.isForestOwner?p?p.p(A,k):(p=fs(A),p.c(),p.m(r,u)):p&&(p.d(1),p=null),A[0]&&!(($=A[0])!=null&&$.htmlString)?_?_.p(A,k):(_=ps(A),_.c(),_.m(r,c)):_&&(_.d(1),_=null),k&1&&h!==(h=((F=A[0])==null?void 0:F.htmlString)+"")&&(f.innerHTML=h)},i:R,o:R,d(A){A&&U(e),p&&p.d(),_&&_.d()}}}function Qu(i,e,t){let n;ua(i,Tt,u=>t(3,n=u));var r=this&&this.__awaiter||function(u,c,f,h){function p(_){return _ instanceof f?_:new f(function(w){w(_)})}return new(f||(f=Promise))(function(_,w){function y(v){try{m(h.next(v))}catch(A){w(A)}}function g(v){try{m(h.throw(v))}catch(A){w(A)}}function m(v){v.done?_(v.value):p(v.value).then(y,g)}m((h=h.apply(u,c||[])).next())})};let{annotation:o}=e,{deleteAnnotation:s}=e,{isPreview:a}=e,d=!1;function l(){return r(this,void 0,void 0,function*(){a||(t(2,d=!0),console.log("handleDelete",o),yield s(o),t(2,d=!1))})}return i.$$set=u=>{"annotation"in u&&t(0,o=u.annotation),"deleteAnnotation"in u&&t(5,s=u.deleteAnnotation),"isPreview"in u&&t(1,a=u.isPreview)},[o,a,d,n,l,s]}let qn=class extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},Qu,Ju,he,{annotation:0,deleteAnnotation:5,isPreview:1},null),e&&(e.target&&D(e.target,this,e.anchor),e.props&&(this.$set(e.props),G()))}static get observedAttributes(){return["annotation","deleteAnnotation","isPreview"]}get annotation(){return this.$$.ctx[0]}set annotation(e){this.$$set({annotation:e}),G()}get deleteAnnotation(){return this.$$.ctx[5]}set deleteAnnotation(e){this.$$set({deleteAnnotation:e}),G()}get isPreview(){return this.$$.ctx[1]}set isPreview(e){this.$$set({isPreview:e}),G()}};customElements.define("glade-annotatable-annotation",qn);function ms(i,e,t){const n=i.slice();return n[11]=e[t],n}function Zu(i){let e;return{c(){e=I("div"),e.textContent="No annotations here yet!",z(e,"class","noAnnotationsMsg")},m(t,n){D(t,e,n)},p:R,i:R,o:R,d(t){t&&U(e)}}}function eh(i){let e,t,n=i[0],r=[];for(let s=0;s<n.length;s+=1)r[s]=gs(ms(i,n,s));const o=s=>J(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=fa()},m(s,a){for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(s,a);D(s,e,a),t=!0},p(s,a){if(a&5){n=s[0];let d;for(d=0;d<n.length;d+=1){const l=ms(s,n,d);r[d]?(r[d].p(l,a),q(r[d],1)):(r[d]=gs(l),r[d].c(),q(r[d],1),r[d].m(e.parentNode,e))}for(pi(),d=n.length;d<r.length;d+=1)o(d);mi()}},i(s){if(!t){for(let a=0;a<n.length;a+=1)q(r[a]);t=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)J(r[a]);t=!1},d(s){ha(r,s),s&&U(e)}}}function gs(i){let e,t;return e=new qn({props:{annotation:i[11],deleteAnnotation:i[2],isPreview:!1}}),{c(){xe(e.$$.fragment)},m(n,r){pe(e,n,r),t=!0},p(n,r){const o={};r&1&&(o.annotation=n[11]),e.$set(o)},i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){J(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function th(i){let e,t,n,r,o,s,a,d,l,u,c,f;const h=[eh,Zu],p=[];function _(w,y){return w[0]&&w[0].length?0:1}return o=_(i),s=p[o]=h[o](i),{c(){e=I("div"),t=I("style"),t.textContent=`.htmlContent {
      max-width: 800px;
      object-fit: contain;
    }

    .postedBy {
      color: #1a535c;
    }

    .noAnnotationsMsg {
      margin: 8px;
      padding-top: 8px;
    }

    .buttonShelf {
      display: flex;
      justify-content: flex-end;
    }`,n=M(),r=I("div"),s.c(),a=M(),d=I("div"),l=I("mwc-button"),l.textContent="Create Annotation!",this.c=R,z(d,"class","buttonShelf")},m(w,y){D(w,e,y),x(e,t),x(e,n),x(e,r),p[o].m(r,null),x(r,a),x(r,d),x(d,l),u=!0,c||(f=W(l,"click",i[1]),c=!0)},p(w,[y]){let g=o;o=_(w),o===g?p[o].p(w,y):(pi(),J(p[g],1,1,()=>{p[g]=null}),mi(),s=p[o],s?s.p(w,y):(s=p[o]=h[o](w),s.c()),q(s,1),s.m(r,a))},i(w){u||(q(s),u=!0)},o(w){J(s),u=!1},d(w){w&&U(e),p[o].d(),c=!1,f()}}}function ih(i,e,t){var n=this&&this.__awaiter||function(h,p,_,w){function y(g){return g instanceof _?g:new _(function(m){m(g)})}return new(_||(_=Promise))(function(g,m){function v(E){try{k(w.next(E))}catch(O){m(O)}}function A(E){try{k(w.throw(E))}catch(O){m(O)}}function k(E){E.done?g(E.value):y(E.value).then(v,A)}k((w=w.apply(h,p||[])).next())})};let{annotations:r}=e,{apikey:o}=e,{gladedocumenthash:s}=e;const a=bt(It,"deleteAnnotation");Tt.subscribe(h=>{});const d=st();function l(h,p){console.log("dispatching change-view"),d("set-view",{nextView:h,dismissModal:p})}function u(h){console.debug("dispatching",h.code),d("error",h)}const c=()=>{if(!Le.currentUser){u({code:"ListAnnotationsView.handleClickCreateAnnotation.notLoggedIn",message:"You need to login to create an annotation!"}),l(H.AuthenticationMenu);return}l(H.Create)},f=({uid:h})=>n(void 0,void 0,void 0,function*(){console.log("deleting annotation",h);const p={annotationUid:h,gladeAPIKey:o,gladeDocumentHash:s};yield a(p),d("delete-annotation",p),d("set-view",{nextView:H.List,dismissModal:!0})});return console.debug("ListAnnotationsView initialized"),i.$$set=h=>{"annotations"in h&&t(0,r=h.annotations),"apikey"in h&&t(3,o=h.apikey),"gladedocumenthash"in h&&t(4,s=h.gladedocumenthash)},[r,c,f,o,s]}class _s extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},ih,th,he,{annotations:0,apikey:3,gladedocumenthash:4},null),e&&(e.target&&D(e.target,this,e.anchor),e.props&&(this.$set(e.props),G()))}static get observedAttributes(){return["annotations","apikey","gladedocumenthash"]}get annotations(){return this.$$.ctx[0]}set annotations(e){this.$$set({annotations:e}),G()}get apikey(){return this.$$.ctx[3]}set apikey(e){this.$$set({apikey:e}),G()}get gladedocumenthash(){return this.$$.ctx[4]}set gladedocumenthash(e){this.$$set({gladedocumenthash:e}),G()}}customElements.define("glade-annotatable-list-annotations-view",_s);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const bs=Ke`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var Kn=function(i,e){return Kn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Kn(i,e)};function nh(i,e){Kn(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Fi=function(){return Fi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fi.apply(this,arguments)};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rh={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},ys={NOTCH_ELEMENT_PADDING:8},oh={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var sh=function(i){nh(e,i);function e(t){return i.call(this,Fi(Fi({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return rh},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return oh},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ys},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=ys.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(pt);class ii extends vi{constructor(){super(...arguments),this.mdcFoundationClass=sh,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:e=>this.mdcRoot.classList.add(e),removeClass:e=>this.mdcRoot.classList.remove(e),setNotchWidthProperty:e=>this.notchElement.style.setProperty("width",`${e}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(e,t){this.mdcFoundation&&(e&&t!==void 0?this.mdcFoundation.notch(t):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const e=be({"mdc-notched-outline--notched":this.open});return j`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}b([ee(".mdc-notched-outline")],ii.prototype,"mdcRoot",void 0),b([S({type:Number})],ii.prototype,"width",void 0),b([S({type:Boolean,reflect:!0})],ii.prototype,"open",void 0),b([ee(".mdc-notched-outline__notch")],ii.prototype,"notchElement",void 0);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const ah=Ke`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;let Xn=class extends ii{};Xn.styles=ah,Xn=b([qe("mwc-notched-outline")],Xn);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */class dh extends vi{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var Yn=function(i,e){return Yn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Yn(i,e)};function lh(i,e){Yn(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ui=function(){return Ui=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ui.apply(this,arguments)};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ch={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var uh=function(i){lh(e,i);function e(t){var n=i.call(this,Ui(Ui({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler_=function(){return n.handleShakeAnimationEnd_()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return ch},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,r=n.LABEL_FLOAT_ABOVE,o=n.LABEL_SHAKE;t?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(o))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd_=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(pt);const hh=i=>({addClass:e=>i.classList.add(e),removeClass:e=>i.classList.remove(e),getWidth:()=>i.scrollWidth,registerInteractionHandler:(e,t)=>{i.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{i.removeEventListener(e,t)}}),vs=new WeakMap,fh=ct(i=>e=>{if(!vs.get(e)){const n=e.committer.element;n.classList.add("mdc-floating-label");const r=hh(n),o=new uh(r);o.init(),e.setValue(o),vs.set(e,{label:i,foundation:o})}});/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var Jn=function(i,e){return Jn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Jn(i,e)};function ph(i,e){Jn(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Hi=function(){return Hi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Hi.apply(this,arguments)};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var tt={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mh=function(i){ph(e,i);function e(t){var n=i.call(this,Hi(Hi({},e.defaultAdapter),t))||this;return n.transitionEndHandler_=function(r){return n.handleTransitionEnd(r)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return tt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.activate=function(){this.adapter.removeClass(tt.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(tt.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(tt.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(tt.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(tt.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(tt.LINE_RIPPLE_DEACTIVATING))},e}(pt);const gh=i=>({addClass:e=>i.classList.add(e),removeClass:e=>i.classList.remove(e),hasClass:e=>i.classList.contains(e),setStyle:(e,t)=>i.style.setProperty(e,t),registerEventHandler:(e,t)=>{i.addEventListener(e,t)},deregisterEventHandler:(e,t)=>{i.removeEventListener(e,t)}}),xs=new WeakMap,_h=ct(()=>i=>{if(!xs.get(i)){const t=i.committer.element;t.classList.add("mdc-line-ripple");const n=gh(t),r=new mh(n);r.init(),i.setValue(r),xs.set(i,r)}});/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var Qn=function(i,e){return Qn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Qn(i,e)};function bh(i,e){Qn(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Bi=function(){return Bi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bi.apply(this,arguments)};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zn={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},yh={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},ws={LABEL_SCALE:.75},vh=["pattern","min","max","required","step","minlength","maxlength"],xh=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Es=["mousedown","touchstart"],As=["click","keydown"],wh=function(i){bh(e,i);function e(t,n){n===void 0&&(n={});var r=i.call(this,Bi(Bi({},e.defaultAdapter),t))||this;return r.isFocused_=!1,r.receivedUserInput_=!1,r.isValid_=!0,r.useNativeValidation_=!0,r.validateOnValueChange_=!0,r.helperText_=n.helperText,r.characterCounter_=n.characterCounter,r.leadingIcon_=n.leadingIcon,r.trailingIcon_=n.trailingIcon,r.inputFocusHandler_=function(){return r.activateFocus()},r.inputBlurHandler_=function(){return r.deactivateFocus()},r.inputInputHandler_=function(){return r.handleInput()},r.setPointerXOffset_=function(o){return r.setTransformOrigin(o)},r.textFieldInteractionHandler_=function(){return r.handleTextFieldInteraction()},r.validationAttributeChangeHandler_=function(o){return r.handleValidationAttributeChange(o)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return yh},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Zn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ws},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return xh.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.adapter.hasLabel()&&this.getNativeInput_().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler_():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating_(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler_),Es.forEach(function(n){t.adapter.registerInputInteractionHandler(n,t.setPointerXOffset_)}),As.forEach(function(n){t.adapter.registerTextFieldInteractionHandler(n,t.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},e.prototype.destroy=function(){var t=this;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler_),Es.forEach(function(n){t.adapter.deregisterInputInteractionHandler(n,t.setPointerXOffset_)}),As.forEach(function(n){t.adapter.deregisterTextFieldInteractionHandler(n,t.textFieldInteractionHandler_)}),this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(r){return vh.indexOf(r)>-1?(n.styleValidity_(!0),n.adapter.setLabelRequired(n.getNativeInput_().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*ws.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText_&&(this.helperText_.isPersistent()||!this.helperText_.isValidation()||!this.isValid_)&&this.helperText_.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,r=n?n[0]:t,o=r.target.getBoundingClientRect(),s=r.clientX-o.left;this.adapter.setLineRippleTransformOrigin(s)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},e.prototype.getValue=function(){return this.getNativeInput_().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length),this.validateOnValueChange_){var n=this.isValid();this.styleValidity_(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.validateOnValueChange_&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},e.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var n=!t&&!this.isFocused_&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange_=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange_},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},e.prototype.isDisabled=function(){return this.getNativeInput_().disabled},e.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},e.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var n=this.getNativeInput_().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,n)}},e.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},e.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},e.prototype.styleValidity_=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText_){this.helperText_.setValidity(t);var r=this.helperText_.isValidation();if(!r)return;var o=this.helperText_.isVisible(),s=this.helperText_.getId();o&&s?this.adapter.setInputAttr(Zn.ARIA_DESCRIBEDBY,s):this.adapter.removeInputAttr(Zn.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused_=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled_=function(t){var n=e.cssClasses,r=n.DISABLED,o=n.INVALID;t?(this.adapter.addClass(r),this.adapter.removeClass(o)):this.adapter.removeClass(r),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},e.prototype.styleFloating_=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput_=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(pt);const Eh=wh;/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const er=new WeakMap,K=ct(i=>e=>{const t=er.get(e);if(i===void 0&&e instanceof ut){if(t!==void 0||!er.has(e)){const n=e.committer.name;e.committer.element.removeAttribute(n)}}else i!==t&&e.setValue(i);er.set(e,i)});/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Is=ct(i=>e=>{let t;if(e instanceof Dr||e instanceof Ft)throw new Error("The `live` directive is not allowed on text or event bindings");if(e instanceof Lr)Ss(e.strings),t=e.element.hasAttribute(e.name),e.value=t;else{const{element:n,name:r,strings:o}=e.committer;if(Ss(o),e instanceof gi){if(t=n[r],t===i)return}else e instanceof ut&&(t=n.getAttribute(r));if(t===String(i))return}e.setValue(i)}),Ss=i=>{if(i.length!==2||i[0]!==""||i[1]!=="")throw new Error("`live` bindings can only contain a single expression")},Ah=["touchstart","touchmove","scroll","mousewheel"],Ts=(i={})=>{const e={};for(const t in i)e[t]=i[t];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class L extends dh{constructor(){super(...arguments),this.mdcFoundationClass=Eh,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this.focused=!1,this._validity=Ts(),this._outlineUpdateComplete=null,this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}focus(){const e=new CustomEvent("focus");this.formElement.dispatchEvent(e),this.formElement.focus()}blur(){const e=new CustomEvent("blur");this.formElement.dispatchEvent(e),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(e,t,n){this.formElement.setSelectionRange(e,t,n)}update(e){e.has("autoValidate")&&this.mdcFoundation&&this.mdcFoundation.setValidateOnValueChange(this.autoValidate),e.has("value")&&typeof this.value!="string"&&(this.value=`${this.value}`),super.update(e)}render(){const e=this.charCounter&&this.maxLength!==-1,t=!!this.helper||!!this.validationMessage||e,n={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return j`
      <label class="mdc-text-field ${be(n)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t,e)}
    `}updated(e){e.has("value")&&e.get("value")!==void 0&&(this.mdcFoundation.setValue(this.value),this.autoValidate&&this.reportValidity())}renderRipple(){return this.outlined?"":j`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?j`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:""}renderLabel(){return this.label?j`
      <span
          .floatingLabelFoundation=${fh(this.label)}
          id="label">${this.label}</span>
    `:""}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):""}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}renderIcon(e,t=!1){return j`<i class="material-icons mdc-text-field__icon ${be({"mdc-text-field__icon--leading":!t,"mdc-text-field__icon--trailing":t})}">${e}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):""}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):""}renderAffix(e,t=!1){return j`<span class="mdc-text-field__affix ${be({"mdc-text-field__affix--prefix":!t,"mdc-text-field__affix--suffix":t})}">
        ${e}</span>`}renderInput(e){const t=this.minLength===-1?void 0:this.minLength,n=this.maxLength===-1?void 0:this.maxLength,r=this.autocapitalize?this.autocapitalize:void 0,o=this.validationMessage&&!this.isUiValid,s=e?"helper-text":void 0,a=this.focused||this.helperPersistent||o?"helper-text":void 0,d=o?"helper-text":void 0;return j`
      <input
          aria-labelledby="label"
          aria-controls="${K(s)}"
          aria-describedby="${K(a)}"
          aria-errortext="${K(d)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Is(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${K(t)}"
          maxlength="${K(n)}"
          pattern="${K(this.pattern?this.pattern:void 0)}"
          min="${K(this.min===""?void 0:this.min)}"
          max="${K(this.max===""?void 0:this.max)}"
          step="${K(this.step===null?void 0:this.step)}"
          size="${K(this.size===null?void 0:this.size)}"
          name="${K(this.name===""?void 0:this.name)}"
          inputmode="${K(this.inputMode)}"
          autocapitalize="${K(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?"":j`
      <span .lineRippleFoundation=${_h()}></span>
    `}renderHelperText(e,t){const n=this.validationMessage&&!this.isUiValid,r={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":n},o=this.focused||this.helperPersistent||n?void 0:"true",s=n?this.validationMessage:this.helper;return e?j`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${K(o)}"
             class="mdc-text-field-helper-text ${be(r)}"
             >${s}</div>
        ${this.renderCharCounter(t)}
      </div>`:""}renderCharCounter(e){const t=Math.min(this.value.length,this.maxLength);return e?j`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>`:""}onInputFocus(){this.focused=!0}onInputBlur(){this.focused=!1,this.reportValidity()}checkValidity(){const e=this._checkValidity(this.value);if(!e){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return e}reportValidity(){const e=this.checkValidity();return this.mdcFoundation.setValid(e),this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let n=Ts(t);if(this.validityTransform){const r=this.validityTransform(e,n);n=Object.assign(Object.assign({},n),r),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=n,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}handleInputChange(){this.value=this.formElement.value}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(e,t)=>this.addEventListener(e,t),deregisterTextFieldInteractionHandler:(e,t)=>this.removeEventListener(e,t),registerValidationAttributeChangeHandler:e=>{const t=o=>o.map(s=>s.attributeName).filter(s=>s),n=new MutationObserver(o=>{e(t(o))}),r={attributes:!0};return n.observe(this.formElement,r),n},deregisterValidationAttributeChangeHandler:e=>e.disconnect()},Gr(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,setInputAttr:()=>{},removeInputAttr:()=>{},isFocused:()=>this.shadowRoot?this.shadowRoot.activeElement===this.formElement:!1,registerInputInteractionHandler:(e,t)=>this.formElement.addEventListener(e,t,{passive:e in Ah}),deregisterInputInteractionHandler:(e,t)=>this.formElement.removeEventListener(e,t)}}getLabelAdapterMethods(){return{floatLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(e),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>!!this.labelElement,shakeLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(e),setLabelRequired:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(e)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:e=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}}}async _getUpdateComplete(){await super._getUpdateComplete(),await this._outlineUpdateComplete}async firstUpdated(){const e=this.outlineElement;e&&(this._outlineUpdateComplete=e.updateComplete,await this._outlineUpdateComplete),super.firstUpdated(),this.mdcFoundation.setValidateOnValueChange(this.autoValidate),this.validateOnInitialRender&&this.reportValidity()}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>!!this.outlineElement,notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const e=this.labelElement;if(!e){this.outlineOpen=!1;return}const t=!!this.label&&!!this.value;if(e.floatingLabelFoundation.float(t),!this.outlined)return;this.outlineOpen=t,await this.updateComplete;const n=e.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=n)}}b([ee(".mdc-text-field")],L.prototype,"mdcRoot",void 0),b([ee("input")],L.prototype,"formElement",void 0),b([ee(".mdc-floating-label")],L.prototype,"labelElement",void 0),b([ee(".mdc-line-ripple")],L.prototype,"lineRippleElement",void 0),b([ee("mwc-notched-outline")],L.prototype,"outlineElement",void 0),b([ee(".mdc-notched-outline__notch")],L.prototype,"notchElement",void 0),b([S({type:String})],L.prototype,"value",void 0),b([S({type:String})],L.prototype,"type",void 0),b([S({type:String})],L.prototype,"placeholder",void 0),b([S({type:String}),mt(function(i,e){e!==void 0&&this.label!==e&&this.layout()})],L.prototype,"label",void 0),b([S({type:String})],L.prototype,"icon",void 0),b([S({type:String})],L.prototype,"iconTrailing",void 0),b([S({type:Boolean,reflect:!0})],L.prototype,"disabled",void 0),b([S({type:Boolean})],L.prototype,"required",void 0),b([S({type:Number})],L.prototype,"minLength",void 0),b([S({type:Number})],L.prototype,"maxLength",void 0),b([S({type:Boolean,reflect:!0}),mt(function(i,e){e!==void 0&&this.outlined!==e&&this.layout()})],L.prototype,"outlined",void 0),b([S({type:String})],L.prototype,"helper",void 0),b([S({type:Boolean})],L.prototype,"validateOnInitialRender",void 0),b([S({type:String})],L.prototype,"validationMessage",void 0),b([S({type:Boolean})],L.prototype,"autoValidate",void 0),b([S({type:String})],L.prototype,"pattern",void 0),b([S({type:String})],L.prototype,"min",void 0),b([S({type:String})],L.prototype,"max",void 0),b([S({type:Number})],L.prototype,"step",void 0),b([S({type:Number})],L.prototype,"size",void 0),b([S({type:Boolean})],L.prototype,"helperPersistent",void 0),b([S({type:Boolean})],L.prototype,"charCounter",void 0),b([S({type:Boolean})],L.prototype,"endAligned",void 0),b([S({type:String})],L.prototype,"prefix",void 0),b([S({type:String})],L.prototype,"suffix",void 0),b([S({type:String})],L.prototype,"name",void 0),b([S({type:String})],L.prototype,"inputMode",void 0),b([S({type:Boolean})],L.prototype,"readOnly",void 0),b([S({type:String})],L.prototype,"autocapitalize",void 0),b([S({type:Boolean})],L.prototype,"outlineOpen",void 0),b([S({type:Number})],L.prototype,"outlineWidth",void 0),b([S({type:Boolean})],L.prototype,"isUiValid",void 0),b([le()],L.prototype,"focused",void 0),b([zr({passive:!0})],L.prototype,"handleInputChange",null);/**
    @license
    Copyright 2019 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const Ih={fromAttribute(i){return i===null?!1:i===""?!0:i},toAttribute(i){return typeof i=="boolean"?i?"":null:i}};class ni extends L{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&this.maxLength!==-1,t=e&&this.charCounter==="internal",n=e&&!t,r=!!this.helper||!!this.validationMessage||n,o={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return j`
      <label class="mdc-text-field mdc-text-field--textarea ${be(o)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(r,n)}
    `}renderInput(){const e=this.minLength===-1?void 0:this.minLength,t=this.maxLength===-1?void 0:this.maxLength,n=this.autocapitalize?this.autocapitalize:void 0;return j`
      <textarea
          aria-labelledby="label"
          class="mdc-text-field__input"
          .value="${Is(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${K(e)}"
          maxlength="${K(t)}"
          name="${K(this.name===""?void 0:this.name)}"
          inputmode="${K(this.inputMode)}"
          autocapitalize="${K(n)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}b([ee("textarea")],ni.prototype,"formElement",void 0),b([S({type:Number})],ni.prototype,"rows",void 0),b([S({type:Number})],ni.prototype,"cols",void 0),b([S({converter:Ih})],ni.prototype,"charCounter",void 0);/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const Sh=Ke`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;/**
    @license
    Copyright 2019 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */let tr=class extends ni{};tr.styles=[bs,Sh],tr=b([qe("mwc-textarea")],tr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Th=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:o}=n;return{kind:r,elements:o,finisher(s){window.customElements.define(t,s)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ch=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function it(i){return(e,t)=>t!==void 0?((n,r,o)=>{r.constructor.createProperty(o,n)})(i,e,t):Ch(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(i){return it({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kh=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const o=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return i!=null&&(s.finisher=function(a){i(a,o)}),s}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(o,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oh(i,e){return kh({descriptor:t=>{const n={get(){var r,o;return(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;n.get=function(){var o,s;return this[r]===void 0&&(this[r]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&s!==void 0?s:null),this[r]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Rh(i,e,t){const n=i.constructor;if(!t){const a=`__${e}`;if(t=n.getPropertyDescriptor(e,a),!t)throw new Error("@ariaProperty must be used after a @property decorator")}const r=t;let o="";if(!r.set)throw new Error(`@ariaProperty requires a setter for ${e}`);if(i.dispatchWizEvent)return t;const s={configurable:!0,enumerable:!0,set(a){if(o===""){const d=n.getPropertyOptions(e);o=typeof d.attribute=="string"?d.attribute:e}this.hasAttribute(o)&&this.removeAttribute(o),r.set.call(this,a)}};return r.get&&(s.get=function(){return r.get.call(this)}),s}function Nh(i,e,t){if(e!==void 0)return Rh(i,e,t);throw new Error("@ariaProperty only supports TypeScript Decorators")}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nr=Symbol(),Cs=new Map;let ks=class{constructor(e,t){if(this._$cssResult$=!0,t!==nr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Cs.get(this.cssText);return ir&&e===void 0&&(Cs.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}};const Lh=i=>new ks(typeof i=="string"?i:i+"",nr),Ph=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new ks(t,nr)},Dh=(i,e)=>{ir?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=window.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Os=ir?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Lh(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rr;const Rs=window.trustedTypes,$h=Rs?Rs.emptyScript:"",Ns=window.reactiveElementPolyfillSupport,or={toAttribute(i,e){switch(e){case Boolean:i=i?$h:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ls=(i,e)=>e!==i&&(e==e||i==i),sr={attribute:!0,type:String,converter:or,reflect:!1,hasChanged:Ls};let Ct=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Eh(n,t);r!==void 0&&(this._$Eu.set(r,n),e.push(r))}),e}static createProperty(e,t=sr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||sr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Os(r))}else e!==void 0&&t.push(Os(e));return t}static _$Eh(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Dh(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=sr){var r,o;const s=this.constructor._$Eh(e,n);if(s!==void 0&&n.reflect===!0){const a=((o=(r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:or.toAttribute)(t,n.type);this._$Ei=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(e,t){var n,r,o;const s=this.constructor,a=s._$Eu.get(e);if(a!==void 0&&this._$Ei!==a){const d=s.getPropertyOptions(a),l=d.converter,u=(o=(r=(n=l)===null||n===void 0?void 0:n.fromAttribute)!==null&&r!==void 0?r:typeof l=="function"?l:null)!==null&&o!==void 0?o:or.fromAttribute;this._$Ei=a,this[a]=u(t,d.type),this._$Ei=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Ls)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,o)=>this[o]=r),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((t,n)=>this._$ES(n,this[n],t)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}};Ct.finalized=!0,Ct.elementProperties=new Map,Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ns==null||Ns({ReactiveElement:Ct}),((rr=globalThis.reactiveElementVersions)!==null&&rr!==void 0?rr:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;const kt=globalThis.trustedTypes,Ps=kt?kt.createPolicy("lit-html",{createHTML:i=>i}):void 0,ze=`lit$${(Math.random()+"").slice(9)}$`,Ds="?"+ze,Mh=`<${Ds}>`,Ot=document,ri=(i="")=>Ot.createComment(i),oi=i=>i===null||typeof i!="object"&&typeof i!="function",$s=Array.isArray,Fh=i=>{var e;return $s(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ms=/-->/g,Fs=/>/g,rt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Us=/'/g,Hs=/"/g,Bs=/^(?:script|style|textarea)$/i,Uh=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),Hh=Uh(1),je=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Vs=new WeakMap,Bh=(i,e,t)=>{var n,r;const o=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let s=o._$litPart$;if(s===void 0){const a=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=s=new di(e.insertBefore(ri(),a),a,void 0,t??{})}return s._$AI(i),s},Rt=Ot.createTreeWalker(Ot,129,null,!1),Vh=(i,e)=>{const t=i.length-1,n=[];let r,o=e===2?"<svg>":"",s=si;for(let d=0;d<t;d++){const l=i[d];let u,c,f=-1,h=0;for(;h<l.length&&(s.lastIndex=h,c=s.exec(l),c!==null);)h=s.lastIndex,s===si?c[1]==="!--"?s=Ms:c[1]!==void 0?s=Fs:c[2]!==void 0?(Bs.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=rt):c[3]!==void 0&&(s=rt):s===rt?c[0]===">"?(s=r??si,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?rt:c[3]==='"'?Hs:Us):s===Hs||s===Us?s=rt:s===Ms||s===Fs?s=si:(s=rt,r=void 0);const p=s===rt&&i[d+1].startsWith("/>")?" ":"";o+=s===si?l+Mh:f>=0?(n.push(u),l.slice(0,f)+"$lit$"+l.slice(f)+ze+p):l+ze+(f===-2?(n.push(void 0),d):p)}const a=o+(i[t]||"<?>")+(e===2?"</svg>":"");return[Ps!==void 0?Ps.createHTML(a):a,n]};class ai{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0;const a=e.length-1,d=this.parts,[l,u]=Vh(e,t);if(this.el=ai.createElement(l,n),Rt.currentNode=this.el.content,t===2){const c=this.el.content,f=c.firstChild;f.remove(),c.append(...f.childNodes)}for(;(r=Rt.nextNode())!==null&&d.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const f of r.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(ze)){const h=u[s++];if(c.push(f),h!==void 0){const p=r.getAttribute(h.toLowerCase()+"$lit$").split(ze),_=/([.?@])?(.*)/.exec(h);d.push({type:1,index:o,name:_[2],strings:p,ctor:_[1]==="."?jh:_[1]==="?"?Gh:_[1]==="@"?qh:Vi})}else d.push({type:6,index:o})}for(const f of c)r.removeAttribute(f)}if(Bs.test(r.tagName)){const c=r.textContent.split(ze),f=c.length-1;if(f>0){r.textContent=kt?kt.emptyScript:"";for(let h=0;h<f;h++)r.append(c[h],ri()),Rt.nextNode(),d.push({type:2,index:++o});r.append(c[f],ri())}}}else if(r.nodeType===8)if(r.data===Ds)d.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(ze,c+1))!==-1;)d.push({type:7,index:o}),c+=ze.length-1}o++}}static createElement(e,t){const n=Ot.createElement("template");return n.innerHTML=e,n}}function Nt(i,e,t=i,n){var r,o,s,a;if(e===je)return e;let d=n!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[n]:t._$Cu;const l=oi(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==l&&((o=d==null?void 0:d._$AO)===null||o===void 0||o.call(d,!1),l===void 0?d=void 0:(d=new l(i),d._$AT(i,t,n)),n!==void 0?((s=(a=t)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[n]=d:t._$Cu=d),d!==void 0&&(e=Nt(i,d._$AS(i,e.values),d,n)),e}class zh{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ot).importNode(n,!0);Rt.currentNode=o;let s=Rt.nextNode(),a=0,d=0,l=r[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new di(s,s.nextSibling,this,e):l.type===1?u=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(u=new Kh(s,this,e)),this.v.push(u),l=r[++d]}a!==(l==null?void 0:l.index)&&(s=Rt.nextNode(),a++)}return o}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class di{constructor(e,t,n,r){var o;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Nt(this,e,t),oi(e)?e===X||e==null||e===""?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==je&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):Fh(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==X&&oi(this._$AH)?this._$AA.nextSibling.data=e:this.S(Ot.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ai.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(n);else{const s=new zh(o,this),a=s.p(this.options);s.m(n),this.S(a),this._$AH=s}}_$AC(e){let t=Vs.get(e.strings);return t===void 0&&Vs.set(e.strings,t=new ai(e)),t}M(e){$s(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new di(this.A(ri()),this.A(ri()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Vi{constructor(e,t,n,r,o){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const o=this.strings;let s=!1;if(o===void 0)e=Nt(this,e,t,0),s=!oi(e)||e!==this._$AH&&e!==je,s&&(this._$AH=e);else{const a=e;let d,l;for(e=o[0],d=0;d<o.length-1;d++)l=Nt(this,a[n+d],t,d),l===je&&(l=this._$AH[d]),s||(s=!oi(l)||l!==this._$AH[d]),l===X?e=X:e!==X&&(e+=(l??"")+o[d+1]),this._$AH[d]=l}s&&!r&&this.k(e)}k(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class jh extends Vi{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===X?void 0:e}}const Wh=kt?kt.emptyScript:"";class Gh extends Vi{constructor(){super(...arguments),this.type=4}k(e){e&&e!==X?this.element.setAttribute(this.name,Wh):this.element.removeAttribute(this.name)}}class qh extends Vi{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=Nt(this,e,t,0))!==null&&n!==void 0?n:X)===je)return;const r=this._$AH,o=e===X&&r!==X||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==X&&(r===X||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Kh{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Nt(this,e)}}const zs=window.litHtmlPolyfillSupport;zs==null||zs(ai,di),((ar=globalThis.litHtmlVersions)!==null&&ar!==void 0?ar:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr,lr;class li extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Bh(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return je}}li.finalized=!0,li._$litElement$=!0,(dr=globalThis.litElementHydrateSupport)===null||dr===void 0||dr.call(globalThis,{LitElement:li});const js=globalThis.litElementPolyfillSupport;js==null||js({LitElement:li}),((lr=globalThis.litElementVersions)!==null&&lr!==void 0?lr:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gs=i=>(...e)=>({_$litDirective$:i,values:e});let qs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xh=Gs(class extends qs{constructor(i){var e;if(super(i),i.type!==Ws.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,n;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((t=this.et)===null||t===void 0)&&t.has(o))&&this.st.add(o);return this.render(e)}const r=i.element.classList;this.st.forEach(o=>{o in e||(r.remove(o),this.st.delete(o))});for(const o in e){const s=!!e[o];s===this.st.has(o)||!((n=this.et)===null||n===void 0)&&n.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return je}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=i=>i??X;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ur=Gs(class extends qs{constructor(i){var e;if(super(i),i.type!==Ws.ATTRIBUTE||i.name!=="style"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const n=i[t];return n==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ut===void 0){this.ut=new Set;for(const n in e)this.ut.add(n);return this.render(e)}this.ut.forEach(n=>{e[n]==null&&(this.ut.delete(n),n.includes("-")?t.removeProperty(n):t[n]="")});for(const n in e){const r=e[n];r!=null&&(this.ut.add(n),n.includes("-")?t.setProperty(n,r):t[n]=r)}return je}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ae extends li{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.stylePrimaryHalf="",this.stylePrimaryFull="",this.styleSecondaryQuarter="",this.styleSecondaryHalf="",this.styleSecondaryFull="",this.animationReady=!0,this.closedAnimationOff=!1,this.resizeObserver=null}connectedCallback(){super.connectedCallback(),this.rootEl&&this.attachResizeObserver()}render(){const e={"mdc-linear-progress--closed":this.closed,"mdc-linear-progress--closed-animation-off":this.closedAnimationOff,"mdc-linear-progress--indeterminate":this.indeterminate,"mdc-linear-progress--animation-ready":this.animationReady},t={"--mdc-linear-progress-primary-half":this.stylePrimaryHalf,"--mdc-linear-progress-primary-half-neg":this.stylePrimaryHalf!==""?`-${this.stylePrimaryHalf}`:"","--mdc-linear-progress-primary-full":this.stylePrimaryFull,"--mdc-linear-progress-primary-full-neg":this.stylePrimaryFull!==""?`-${this.stylePrimaryFull}`:"","--mdc-linear-progress-secondary-quarter":this.styleSecondaryQuarter,"--mdc-linear-progress-secondary-quarter-neg":this.styleSecondaryQuarter!==""?`-${this.styleSecondaryQuarter}`:"","--mdc-linear-progress-secondary-half":this.styleSecondaryHalf,"--mdc-linear-progress-secondary-half-neg":this.styleSecondaryHalf!==""?`-${this.styleSecondaryHalf}`:"","--mdc-linear-progress-secondary-full":this.styleSecondaryFull,"--mdc-linear-progress-secondary-full-neg":this.styleSecondaryFull!==""?`-${this.styleSecondaryFull}`:""},n={"flex-basis":this.indeterminate?"100%":`${this.buffer*100}%`},r={transform:this.indeterminate?"scaleX(1)":`scaleX(${this.progress})`};return Hh`
      <div
          role="progressbar"
          class="mdc-linear-progress ${Xh(e)}"
          style="${ur(t)}"
          dir="${cr(this.reverse?"rtl":void 0)}"
          aria-label="${cr(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${cr(this.indeterminate?void 0:this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${ur(n)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${ur(r)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}update(e){e.has("closed")&&(!this.closed||e.get("closed")===void 0)&&this.syncClosedState(),super.update(e)}async firstUpdated(e){super.firstUpdated(e),this.attachResizeObserver()}syncClosedState(){this.closedAnimationOff=this.closed}updated(e){!e.has("indeterminate")&&e.has("reverse")&&this.indeterminate&&this.restartAnimation(),e.has("indeterminate")&&e.get("indeterminate")!==void 0&&this.indeterminate&&window.ResizeObserver&&this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth),super.updated(e)}disconnectedCallback(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),super.disconnectedCallback()}attachResizeObserver(){if(window.ResizeObserver){this.resizeObserver=new window.ResizeObserver(e=>{if(this.indeterminate){for(const t of e)if(t.contentRect){const n=t.contentRect.width;this.calculateAndSetAnimationDimensions(n)}}}),this.resizeObserver.observe(this.rootEl);return}this.resizeObserver=null}calculateAndSetAnimationDimensions(e){const t=e*.8367142,n=e*2.00611057,r=e*.37651913,o=e*.84386165,s=e*1.60277782;this.stylePrimaryHalf=`${t}px`,this.stylePrimaryFull=`${n}px`,this.styleSecondaryQuarter=`${r}px`,this.styleSecondaryHalf=`${o}px`,this.styleSecondaryFull=`${s}px`,this.restartAnimation()}async restartAnimation(){this.animationReady=!1,await this.updateComplete,await new Promise(requestAnimationFrame),this.animationReady=!0,await this.updateComplete}open(){this.closed=!1}close(){this.closed=!0}}b([Oh(".mdc-linear-progress")],ae.prototype,"rootEl",void 0),b([it({type:Boolean,reflect:!0})],ae.prototype,"indeterminate",void 0),b([it({type:Number})],ae.prototype,"progress",void 0),b([it({type:Number})],ae.prototype,"buffer",void 0),b([it({type:Boolean,reflect:!0})],ae.prototype,"reverse",void 0),b([it({type:Boolean,reflect:!0})],ae.prototype,"closed",void 0),b([Nh,it({attribute:"aria-label"})],ae.prototype,"ariaLabel",void 0),b([nt()],ae.prototype,"stylePrimaryHalf",void 0),b([nt()],ae.prototype,"stylePrimaryFull",void 0),b([nt()],ae.prototype,"styleSecondaryQuarter",void 0),b([nt()],ae.prototype,"styleSecondaryHalf",void 0),b([nt()],ae.prototype,"styleSecondaryFull",void 0),b([nt()],ae.prototype,"animationReady",void 0),b([nt()],ae.prototype,"closedAnimationOff",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Yh=Ph`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let hr=class extends ae{};hr.styles=[Yh],hr=b([Th("mwc-linear-progress")],hr);class Ks{constructor(e){this.plainTextBody=e.plainTextBody,this.gladeDOMNodeHash=e.gladeDOMNodeHash,this.postedBy=e.postedBy,this.htmlString=e.htmlString,this.updatedAt=e.updatedAt,this.hidden=e.hidden,this.uid=e.uid,this.isSaving=!1}async getHtmlString(){try{const t=await(await fetch("https://marker.deno.dev",{method:"POST",body:JSON.stringify({markdown:this.plainTextBody})})).json();return this.htmlString=t.html,this.htmlString}catch(e){console.error(e)}}async delete(e,t){this.hidden=!0,this.save(e,t)}async save(e,t){this.isSaving=!0,console.log("gladeAPIKey",t);const n={plainTextBody:this.plainTextBody,gladeDOMNodeHash:this.gladeDOMNodeHash,postedBy:this.postedBy,htmlString:this.htmlString,gladeDocumentHash:parseInt(e),gladeAPIKey:t,uid:null},r=bt(It,"publishAnnotation");try{const o=await r(n);return this.isSaving=!1,console.log("annotation published!",o.data),n.uid=o.data.uid,n}catch(o){return console.error(o.code,o.message),this.isSaving=!1,null}}}function Jh(i){let e,t,n;return{c(){e=I("mwc-textarea"),C(e,"outlined","true"),C(e,"value",i[0]),C(e,"placeholder","")},m(r,o){D(r,e,o),t||(n=W(e,"change",i[5]),t=!0)},p(r,o){o&1&&C(e,"value",r[0])},i:R,o:R,d(r){r&&U(e),t=!1,n()}}}function Qh(i){let e,t,n;return t=new qn({props:{annotation:i[2],isPreview:!0,deleteAnnotation:null}}),{c(){e=I("div"),xe(t.$$.fragment)},m(r,o){D(r,e,o),pe(t,e,null),n=!0},p(r,o){const s={};o&4&&(s.annotation=r[2]),t.$set(s)},i(r){n||(q(t.$$.fragment,r),n=!0)},o(r){J(t.$$.fragment,r),n=!1},d(r){r&&U(e),me(t)}}}function Zh(i){let e,t,n,r;return{c(){e=I("mwc-button"),t=fe("show preview!"),C(e,"disabled",i[1])},m(o,s){D(o,e,s),x(e,t),n||(r=W(e,"click",i[4]),n=!0)},p(o,s){s&2&&C(e,"disabled",o[1])},d(o){o&&U(e),n=!1,r()}}}function ef(i){let e,t,n,r;return{c(){e=I("mwc-button"),t=fe("edit!"),C(e,"disabled",i[1])},m(o,s){D(o,e,s),x(e,t),n||(r=W(e,"click",i[6]),n=!0)},p(o,s){s&2&&C(e,"disabled",o[1])},d(o){o&&U(e),n=!1,r()}}}function Xs(i){let e;return{c(){e=I("div"),e.innerHTML='<mwc-linear-progress indeterminate=""></mwc-linear-progress>'},m(t,n){D(t,e,n)},d(t){t&&U(e)}}}function tf(i){let e,t,n,r,o,s,a,d,l,u,c,f,h,p,_,w,y;const g=[Qh,Jh],m=[];function v(P,$){return P[3]?0:1}n=v(i),r=m[n]=g[n](i);function A(P,$){return P[3]?ef:Zh}let k=A(i),E=k(i),O=i[1]&&Xs();return{c(){e=I("div"),t=I("style"),t.textContent=`mwc-textarea {
      min-width: 500px;
      margin: 8px 3px;
      padding: 0px 3px;
    }
    .buttonShelf {
      display: flex;
      justify-content: space-between;
    }
    .cancel {
      --mdc-theme-primary: red;
    }
    mwc-linear-progress {
      --mdc-theme-primary: rgb(78, 205, 196);
    }
  `,r.c(),o=M(),s=I("div"),a=I("mwc-button"),a.textContent="discard",d=M(),l=I("div"),E.c(),u=M(),c=I("mwc-button"),f=fe("publish!"),h=M(),p=I("div"),O&&O.c(),this.c=R,C(a,"class","cancel"),C(c,"disabled",i[1]),z(s,"class","buttonShelf")},m(P,$){D(P,e,$),x(e,t),m[n].m(e,null),x(e,o),x(e,s),x(s,a),x(s,d),x(s,l),E.m(l,null),x(l,u),x(l,c),x(c,f),x(e,h),x(e,p),O&&O.m(p,null),_=!0,w||(y=[W(a,"click",i[7]),W(c,"click",i[8])],w=!0)},p(P,[$]){let F=n;n=v(P),n===F?m[n].p(P,$):(pi(),J(m[F],1,1,()=>{m[F]=null}),mi(),r=m[n],r?r.p(P,$):(r=m[n]=g[n](P),r.c()),q(r,1),r.m(e,o)),k===(k=A(P))&&E?E.p(P,$):(E.d(1),E=k(P),E&&(E.c(),E.m(l,u))),(!_||$&2)&&C(c,"disabled",P[1]),P[1]?O||(O=Xs(),O.c(),O.m(p,null)):O&&(O.d(1),O=null)},i(P){_||(q(r),_=!0)},o(P){J(r),_=!1},d(P){P&&U(e),m[n].d(),E.d(),O&&O.d(),w=!1,ue(y)}}}function nf(i,e,t){let n,r;var o=this&&this.__awaiter||function(E,O,P,$){function F(de){return de instanceof P?de:new P(function(T){T(de)})}return new(P||(P=Promise))(function(de,T){function V(ie){try{Z($.next(ie))}catch(ce){T(ce)}}function Y(ie){try{Z($.throw(ie))}catch(ce){T(ce)}}function Z(ie){ie.done?de(ie.value):F(ie.value).then(V,Y)}Z(($=$.apply(E,O||[])).next())})},s,a;const d=st();function l(E,O){console.log("dispatching change-view"),d("set-view",{nextView:E,dismissModal:O})}function u(E){console.debug("dispatching",E.code),d("error",E)}let{gladedocumenthash:c="0"}=e,{focusedGladeDOMNodeHash:f=0}=e,{apikey:h}=e,p="",_="",w=!1;function y(){return o(this,void 0,void 0,function*(){if(!_){u({message:"You need to add content before previewing!",code:"CreateAnnotationView.handleClickPreview.nothingToPreview"});return}t(3,n=!0),t(14,p=(yield r.getHtmlString())||void 0)})}function g(E){d("publish",{annotation:E}),l(H.List,!0)}function m(E){t(0,_=E.target.value)}function v(){t(3,n=!1)}function A(){t(2,r.htmlString="",r),t(2,r.plainTextBody="",r),l(H.List)}function k(){return o(this,void 0,void 0,function*(){if(t(1,w=!0),!_){u({message:"You need to add content before posting!",code:"CreateAnnotationView.handleClickPreview.nothingToPost"});return}t(14,p=(yield r.getHtmlString())||void 0);const E=yield r.save(c,h);E?(g(E),l(H.List,!0)):(console.log(`failed to publish!
are you sure your API key is correct?`),u({message:"Oh no! we couldn't publish your annotation",code:"CreateAnnotationView.handleClickPublish.failedToSave"})),t(1,w=!1)})}return i.$$set=E=>{"gladedocumenthash"in E&&t(9,c=E.gladedocumenthash),"focusedGladeDOMNodeHash"in E&&t(10,f=E.focusedGladeDOMNodeHash),"apikey"in E&&t(11,h=E.apikey)},i.$$.update=()=>{i.$$.dirty&29697&&t(2,r=new Ks({gladeDOMNodeHash:f,plainTextBody:_,htmlString:p,postedBy:{displayName:(t(12,s=Le.currentUser)===null||s===void 0?void 0:s.displayName)||"tiny-anonymous-ocelot",uid:t(13,a=Le.currentUser)===null||a===void 0?void 0:a.uid}}))},t(3,n=!1),[_,w,r,n,y,m,v,A,k,c,f,h,s,a,p]}class Ys extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},nf,tf,he,{gladedocumenthash:9,focusedGladeDOMNodeHash:10,apikey:11},null),e&&(e.target&&D(e.target,this,e.anchor),e.props&&(this.$set(e.props),G()))}static get observedAttributes(){return["gladedocumenthash","focusedGladeDOMNodeHash","apikey"]}get gladedocumenthash(){return this.$$.ctx[9]}set gladedocumenthash(e){this.$$set({gladedocumenthash:e}),G()}get focusedGladeDOMNodeHash(){return this.$$.ctx[10]}set focusedGladeDOMNodeHash(e){this.$$set({focusedGladeDOMNodeHash:e}),G()}get apikey(){return this.$$.ctx[11]}set apikey(e){this.$$set({apikey:e}),G()}}customElements.define("glade-annotatable-create-annotation-view",Ys);function rf(i){let e,t,n;return{c(){e=I("mwc-button"),e.textContent="sign in?",C(e,"class","flex")},m(r,o){D(r,e,o),t||(n=W(e,"click",i[2]),t=!0)},p:R,d(r){r&&U(e),t=!1,n()}}}function of(i){let e,t,n;return{c(){e=I("mwc-button"),e.textContent="sign out!",C(e,"class","flex")},m(r,o){D(r,e,o),t||(n=W(e,"click",i[1]),t=!0)},p:R,d(r){r&&U(e),t=!1,n()}}}function sf(i){let e,t,n,r,o,s,a,d,l,u;function c(p,_){return p[0]?of:rf}let h=c(i)(i);return{c(){e=I("div"),t=I("style"),t.textContent=`.account-view {
      display: flex;
      justify-content: center;
      padding-top: 8px;
      min-width: 500px;
      flex-direction: column;
    }
    .flex {
      display: flex;
    }
    .or {
      display: flex;
      justify-content: center;
      align-items: center;
    }`,n=M(),r=I("div"),h.c(),o=M(),s=I("div"),s.innerHTML="<span>or</span>",a=M(),d=I("mwc-button"),d.textContent="back to annotations",this.c=R,z(s,"class","or"),C(d,"class","flex"),z(r,"class","account-view")},m(p,_){D(p,e,_),x(e,t),x(e,n),x(e,r),h.m(r,null),x(r,o),x(r,s),x(r,a),x(r,d),l||(u=W(d,"click",i[3]),l=!0)},p(p,[_]){h.p(p,_)},i:R,o:R,d(p){p&&U(e),h.d(),l=!1,u()}}}function af(i){var e=this&&this.__awaiter||function(d,l,u,c){function f(h){return h instanceof u?h:new u(function(p){p(h)})}return new(u||(u=Promise))(function(h,p){function _(g){try{y(c.next(g))}catch(m){p(m)}}function w(g){try{y(c.throw(g))}catch(m){p(m)}}function y(g){g.done?h(g.value):f(g.value).then(_,w)}y((c=c.apply(d,l||[])).next())})};const t=st(),n=Le.currentUser;function r(d,l){console.log("dispatching change-view"),t("set-view",{nextView:d,dismissModal:l})}function o(){return e(this,void 0,void 0,function*(){r(H.List),yield Fc(Le)})}function s(){return e(this,void 0,void 0,function*(){r(H.AuthenticationMenu)})}function a(){return e(this,void 0,void 0,function*(){r(H.List)})}return[n,o,s,a]}class Js extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},af,sf,he,{},null),e&&e.target&&D(e.target,this,e.anchor)}}customElements.define("glade-annotatable-account-view",Js);/**
    @license
    Copyright 2019 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */let fr=class extends L{};fr.styles=bs,fr=b([qe("mwc-textfield")],fr);function df(i){let e,t,n,r,o,s,a,d,l,u,c;return{c(){e=I("div"),t=I("style"),t.textContent=`.formRow {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }`,n=M(),r=I("div"),o=I("mwc-textfield"),s=M(),a=I("mwc-textfield"),d=M(),l=I("mwc-button"),l.textContent="Sign In",this.c=R,C(o,"class","formRow"),C(o,"label","email"),C(o,"outlined",""),C(o,"placeholder","matt@glade.software"),C(o,"type","email"),C(a,"class","formRow"),C(a,"outlined",""),C(a,"type","password"),C(a,"label","password"),C(l,"class","formRow"),C(l,"outlined","")},m(f,h){D(f,e,h),x(e,t),x(e,n),x(e,r),x(r,o),i[4](o),x(r,s),x(r,a),i[5](a),x(r,d),x(r,l),u||(c=[W(a,"keyup",i[3]),W(l,"click",i[2])],u=!0)},p:R,i:R,o:R,d(f){f&&U(e),i[4](null),i[5](null),u=!1,ue(c)}}}function lf(i,e,t){var n=this&&this.__awaiter||function(h,p,_,w){function y(g){return g instanceof _?g:new _(function(m){m(g)})}return new(_||(_=Promise))(function(g,m){function v(E){try{k(w.next(E))}catch(O){m(O)}}function A(E){try{k(w.throw(E))}catch(O){m(O)}}function k(E){E.done?g(E.value):y(E.value).then(v,A)}k((w=w.apply(h,p||[])).next())})};let r,o;const s=st();function a(h,p){console.log("dispatching change-view"),s("set-view",{nextView:h,dismissModal:p})}function d(h){console.debug("dispatching",h.code),s("error",h)}console.debug("LoginFormView initialized");function l(){return n(this,void 0,void 0,function*(){const h=r.value,p=o.value;try{yield Pc(Le,h,p),a(H.List)}catch(_){d(_)}})}function u(h){return n(this,void 0,void 0,function*(){h.key==="Enter"&&l()})}function c(h){Se[h?"unshift":"push"](()=>{r=h,t(0,r)})}function f(h){Se[h?"unshift":"push"](()=>{o=h,t(1,o)})}return[r,o,l,u,c,f]}class Qs extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},lf,df,he,{},null),e&&e.target&&D(e.target,this,e.anchor)}}customElements.define("glade-annotatable-login-form-view",Qs);function cf(i){let e,t,n,r,o,s,a,d,l,u,c,f,h,p,_,w;return{c(){e=I("div"),t=I("style"),t.textContent=`.formItem {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }`,n=M(),r=I("div"),o=I("form"),s=I("mwc-textfield"),a=M(),d=I("mwc-textfield"),l=M(),u=I("mwc-textfield"),c=M(),f=I("mwc-textfield"),h=M(),p=I("mwc-button"),p.textContent="Create Account",this.c=R,C(s,"id","usernameTextField"),C(s,"required",""),C(s,"class","formItem"),C(s,"placeholder","donklonk"),C(s,"prefix","@"),C(s,"label","username"),C(s,"autocomplete","off"),C(s,"outlined","true"),C(d,"required",""),C(d,"class","formItem"),C(d,"outlined","true"),C(d,"label","email"),C(d,"placeholder","matt@glade.software"),C(d,"type","email"),C(u,"required",""),C(u,"class","formItem"),C(u,"outlined","true"),C(u,"type","password"),C(u,"name","password"),C(u,"label","password"),C(f,"required",""),C(f,"class","formItem"),C(f,"outlined","true"),C(f,"type","password"),C(f,"label","confirm password"),C(p,"class","formItem"),C(p,"outlined","")},m(y,g){D(y,e,g),x(e,t),x(e,n),x(e,r),x(r,o),x(o,s),i[7](s),x(o,a),x(o,d),i[8](d),x(o,l),x(o,u),i[9](u),x(o,c),x(o,f),i[10](f),x(o,h),x(o,p),_||(w=[W(s,"blur",i[5]),W(f,"keyup",i[4]),W(p,"click",i[6])],_=!0)},p:R,i:R,o:R,d(y){y&&U(e),i[7](null),i[8](null),i[9](null),i[10](null),_=!1,ue(w)}}}function uf(i,e,t){var n=this&&this.__awaiter||function(y,g,m,v){function A(k){return k instanceof m?k:new m(function(E){E(k)})}return new(m||(m=Promise))(function(k,E){function O(F){try{$(v.next(F))}catch(de){E(de)}}function P(F){try{$(v.throw(F))}catch(de){E(de)}}function $(F){F.done?k(F.value):A(F.value).then(O,P)}$((v=v.apply(y,g||[])).next())})};const r=st();function o(y,g){console.log("dispatching change-view"),r("set-view",{nextView:y,dismissModal:g})}let s,a,d,l;console.debug("SignupFormView initialized");function u(y){return n(this,void 0,void 0,function*(){y.key==="Enter"&&f()})}function c(y){return n(this,void 0,void 0,function*(){const g=y.target.value,m=bt(It,"checkUsernameAvailability");try{(yield m(g)).data.usernameAvailable?(s.setCustomValidity(""),s.reportValidity()):(console.log("username unavailable"),s.setCustomValidity("username unavailable!"),s.reportValidity())}catch(v){console.debug("error checking username availability"),console.error(v)}})}function f(){return n(this,void 0,void 0,function*(){const y=s.value,g=bt(It,"checkUsernameAvailability");try{if(!(yield g(y)).data.usernameAvailable)console.log("username unavailable"),s.setCustomValidity("username unavailable!"),s.reportValidity();else{s.setCustomValidity(""),s.reportValidity();try{if(a.value!==d.value){d.setCustomValidity("passwords don't match!"),d.reportValidity();return}const{user:A}=yield Lc(Le,l.value,a.value);console.debug("user created!"),yield $c(A,{displayName:y}),t(0,s.value="",s),t(3,l.value="",l),t(1,a.value="",a),t(2,d.value="",d),console.debug(`user "${A.displayName}" created`),o(H.List)}catch(A){console.error(A)}}}catch(m){console.debug("error checking username availability"),console.error(m)}})}function h(y){Se[y?"unshift":"push"](()=>{s=y,t(0,s)})}function p(y){Se[y?"unshift":"push"](()=>{l=y,t(3,l)})}function _(y){Se[y?"unshift":"push"](()=>{a=y,t(1,a)})}function w(y){Se[y?"unshift":"push"](()=>{d=y,t(2,d)})}return[s,a,d,l,u,c,f,h,p,_,w]}class Zs extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},uf,cf,he,{},null),e&&e.target&&D(e.target,this,e.anchor)}}customElements.define("glade-annotatable-signup-form-view",Zs);function hf(i){let e,t,n,r,o,s,a,d,l,u,c;return{c(){e=I("div"),t=I("style"),t.textContent=`.option {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }`,n=M(),r=I("div"),o=I("mwc-button"),o.textContent="Create Account",s=M(),a=I("mwc-button"),a.textContent="Sign In",d=M(),l=I("mwc-button"),l.textContent="Use Anonymously",this.c=R,C(o,"class","option"),C(o,"outlined",""),C(a,"class","option"),C(a,"outlined",""),C(l,"class","option"),C(l,"outlined","")},m(f,h){D(f,e,h),x(e,t),x(e,n),x(e,r),x(r,o),x(r,s),x(r,a),x(r,d),x(r,l),u||(c=[W(o,"click",i[2]),W(a,"click",i[1]),W(l,"click",i[0])],u=!0)},p:R,i:R,o:R,d(f){f&&U(e),u=!1,ue(c)}}}function ff(i){var e=this&&this.__awaiter||function(d,l,u,c){function f(h){return h instanceof u?h:new u(function(p){p(h)})}return new(u||(u=Promise))(function(h,p){function _(g){try{y(c.next(g))}catch(m){p(m)}}function w(g){try{y(c.throw(g))}catch(m){p(m)}}function y(g){g.done?h(g.value):f(g.value).then(_,w)}y((c=c.apply(d,l||[])).next())})};const t=st();console.debug("AuthenticationMenuView initialized");function n(d,l){console.log("dispatching change-view"),t("set-view",{nextView:d,dismissModal:l})}function r(d){t("error",d)}function o(){return e(this,void 0,void 0,function*(){yield kc(Le),n(H.List)})}function s(){n(H.LoginForm)}function a(){r(null),n(H.SignupForm)}return[o,s,a]}class ea extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},ff,hf,he,{},null),e&&e.target&&D(e.target,this,e.anchor)}}customElements.define("glade-annotatable-authentication-menu-view",ea);function pf(i){let e,t;return{c(){e=br("svg"),t=br("path"),this.c=R,z(t,"d","M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"),z(e,"height","16"),z(e,"width","16"),z(e,"xmlns","http://www.w3.org/2000/svg"),z(e,"viewBox","0 0 448 512")},m(n,r){D(n,e,r),x(e,t)},p:R,i:R,o:R,d(n){n&&U(e)}}}class ta extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},null,pf,he,{},null),e&&e.target&&D(e.target,this,e.anchor)}}customElements.define("account-icon",ta);function mf(i){let e,t,n,r,o,s,a,d,l,u,c,f,h,p,_,w;return c=new ta({props:{class:"sm-icon"}}),{c(){e=I("div"),t=I("style"),t.textContent=`hr {
      width: 100%;
      margin: 0px;
      color: rgba(0, 0, 0, 0.6);
    }
    .title {
      font-style: thin;
      display: flex;
      -webkit-font-smoothing: antialiased;
      font-family: Roboto, sans-serif;
      border-bottom: 1px solid transparent;
      color: rgba(0, 0, 0, 0.87);
      font-size: 1.25rem;
      letter-spacing: 0.0125rem;
    }
    .heading {
      display: flex;
      height: 40px;
      vertical-align: 0;
      justify-content: space-around;
    }
    .sm-icon:hover {
      cursor: pointer;
    }
    .shamelessSpacer {
      display: flex;
    }
    .sm-icon {
      padding-top: 4px;
    }`,n=M(),r=I("div"),o=I("div"),s=fe(i[0]),a=M(),d=I("span"),l=M(),u=I("div"),xe(c.$$.fragment),f=M(),h=I("hr"),this.c=R,z(o,"class","title"),z(d,"class","shamelessSpacer"),z(u,"class","sm-icon"),z(r,"class","heading")},m(y,g){D(y,e,g),x(e,t),x(e,n),x(e,r),x(r,o),x(o,s),x(r,a),x(r,d),x(r,l),x(r,u),pe(c,u,null),x(e,f),x(e,h),p=!0,_||(w=W(u,"click",function(){ui(i[1])&&i[1].apply(this,arguments)}),_=!0)},p(y,[g]){i=y,(!p||g&1)&&hi(s,i[0])},i(y){p||(q(c.$$.fragment,y),p=!0)},o(y){J(c.$$.fragment,y),p=!1},d(y){y&&U(e),me(c),_=!1,w()}}}function gf(i,e,t){let{title:n}=e,{handleClickAccount:r}=e;return i.$$set=o=>{"title"in o&&t(0,n=o.title),"handleClickAccount"in o&&t(1,r=o.handleClickAccount)},[n,r]}class ia extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},gf,mf,he,{title:0,handleClickAccount:1},null),e&&(e.target&&D(e.target,this,e.anchor),e.props&&(this.$set(e.props),G()))}static get observedAttributes(){return["title","handleClickAccount"]}get title(){return this.$$.ctx[0]}set title(e){this.$$set({title:e}),G()}get handleClickAccount(){return this.$$.ctx[1]}set handleClickAccount(e){this.$$set({handleClickAccount:e}),G()}}customElements.define("glade-annotatable-dialog-header",ia);function _f(i){const e=i.textContent||"";return na(e)}function na(i){let e=0;if(!i.length)return`${e}`;for(var t=0;t<i.length;t++){var n=i.charCodeAt(t);e=(e<<5)-e+n,e=e&e}return`${e}`}const ci=(i,e)=>{const t=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(i,e,{set(n){this.dispatchEvent(new Event("coherevalueupdate")),t&&t.set&&t.set.call(this,n)}})};let ra=!1;const oa=()=>{if(window.analytics&&!ra){ra=!0;const i=window.analytics.identify.bind(window.analytics);window.analytics.identify=(...e)=>{const t=e[0];if(typeof t=="string"){const n=e[1]&&typeof e[1]=="object"?e[1]:{},{name:r,...o}=n;window.Cohere.identify(t,{displayName:r,...o})}i(...e)}}},pr=typeof window>"u"||!window.document||window.document.documentMode;pr||(ci(HTMLInputElement.prototype,"value"),ci(HTMLInputElement.prototype,"checked"),ci(HTMLTextAreaElement.prototype,"value"),ci(HTMLSelectElement.prototype,"value"),ci(HTMLSelectElement.prototype,"selectedIndex"));const bf=["init","identify","logout","stop","showCode","getSessionUrl","makeCall","addCallStatusListener","removeCallStatusListener","widget","openChatWindow","addSessionUrlListener","removeSessionUrlListener","triggerOverlayWorkflow","startChat","endChat","closeChatWindow"],te=()=>{};let Pe=pr?{init:te,identify:te,logout:te,stop:te,showCode:te,getSessionUrl:te,makeCall:te,addCallStatusListener:te,removeCallStatusListener:te,widget:te,openChatWindow:te,addSessionUrlListener:te,removeSessionUrlListener:te,triggerOverlayWorkflow:te,startChat:te,endChat:te,closeChatWindow:te}:window.Cohere=[];if(!pr){Pe.invoked=!0,Pe.snippet="0.6",Pe.valhook=!0,Pe.methods=bf,Pe.hookSegment=oa,Pe.methods.forEach(t=>{Pe[t]=(...n)=>{if(t==="init"){const r=n[1];r!=null&&r.segmentIntegration&&oa()}n.unshift(t),Pe.push(n)}});const i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://static.cohere.so/main.js";const e=document.getElementsByTagName("script")[0];e&&e.parentNode&&e.parentNode.insertBefore(i,e)}const sa=Pe;function aa(i){let e,t,n,r=`  ${i[8].message}`,o;return{c(){e=I("div"),t=M(),n=I("div"),o=fe(r),z(n,"class","error")},m(s,a){D(s,e,a),D(s,t,a),D(s,n,a),x(n,o)},p(s,a){a&256&&r!==(r=`  ${s[8].message}`)&&hi(o,r)},d(s){s&&U(e),s&&U(t),s&&U(n)}}}function yf(i){let e;return{c(){e=I("div"),e.textContent="Never let it get this far."},m(t,n){D(t,e,n)},p:R,i:R,o:R,d(t){t&&U(e)}}}function vf(i){let e,t;return e=new Js({}),e.$on("set-view",i[13]),e.$on("error",i[12]),{c(){xe(e.$$.fragment)},m(n,r){pe(e,n,r),t=!0},p:R,i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){J(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function xf(i){let e,t;return e=new Zs({}),e.$on("set-view",i[13]),e.$on("error",i[12]),{c(){xe(e.$$.fragment)},m(n,r){pe(e,n,r),t=!0},p:R,i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){J(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function wf(i){let e,t;return e=new Qs({}),e.$on("set-view",i[13]),e.$on("error",i[12]),{c(){xe(e.$$.fragment)},m(n,r){pe(e,n,r),t=!0},p:R,i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){J(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function Ef(i){let e,t;return e=new ea({}),e.$on("set-view",i[13]),e.$on("error",i[12]),{c(){xe(e.$$.fragment)},m(n,r){pe(e,n,r),t=!0},p:R,i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){J(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function Af(i){let e,t;return e=new Ys({props:{gladedocumenthash:i[2],apikey:i[0],focusedGladeDOMNodeHash:i[5]}}),e.$on("error",i[12]),e.$on("set-view",i[13]),e.$on("publish",i[14]),{c(){xe(e.$$.fragment)},m(n,r){pe(e,n,r),t=!0},p(n,r){const o={};r&4&&(o.gladedocumenthash=n[2]),r&1&&(o.apikey=n[0]),r&32&&(o.focusedGladeDOMNodeHash=n[5]),e.$set(o)},i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){J(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function If(i){let e,t;return e=new _s({props:{apikey:i[0],gladedocumenthash:i[2],annotations:i[6]}}),e.$on("error",i[12]),e.$on("set-view",i[13]),e.$on("delete-annotation",i[15]),{c(){xe(e.$$.fragment)},m(n,r){pe(e,n,r),t=!0},p(n,r){const o={};r&1&&(o.apikey=n[0]),r&4&&(o.gladedocumenthash=n[2]),r&64&&(o.annotations=n[6]),e.$set(o)},i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){J(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function Sf(i){let e,t,n,r,o,s,a,d,l,u,c,f,h,p;a=new ia({props:{title:i[7],handleClickAccount:i[11]}});let _=i[8]&&aa(i);const w=[If,Af,Ef,wf,xf,vf,yf],y=[];function g(m,v){return m[3]===H.List?0:m[3]===H.Create?1:m[3]===H.AuthenticationMenu?2:m[3]===H.LoginForm?3:m[3]===H.SignupForm?4:m[3]===H.Account?5:6}return u=g(i),c=y[u]=w[u](i),{c(){e=I("article"),t=I("slot"),n=M(),r=I("mwc-dialog"),o=I("style"),o.textContent=`.error {
      border: solid 1px red;
      color: red;
      border-radius: 8px;
      padding: 8px;
      margin: 8px;
    }`,s=M(),xe(a.$$.fragment),d=M(),_&&_.c(),l=M(),c.c(),this.c=R,z(e,"data-glade-document-hash",i[2]),C(r,"open",i[4]),C(r,"hideactions","")},m(m,v){D(m,e,v),x(e,t),i[16](e),D(m,n,v),D(m,r,v),x(r,o),x(r,s),pe(a,r,null),x(r,d),_&&_.m(r,null),x(r,l),y[u].m(r,null),f=!0,h||(p=[W(e,"mouseup",i[9]),W(r,"closed",i[10])],h=!0)},p(m,[v]){(!f||v&4)&&z(e,"data-glade-document-hash",m[2]);const A={};v&128&&(A.title=m[7]),a.$set(A),m[8]?_?_.p(m,v):(_=aa(m),_.c(),_.m(r,l)):_&&(_.d(1),_=null);let k=u;u=g(m),u===k?y[u].p(m,v):(pi(),J(y[k],1,1,()=>{y[k]=null}),mi(),c=y[u],c?c.p(m,v):(c=y[u]=w[u](m),c.c()),q(c,1),c.m(r,null)),(!f||v&16)&&C(r,"open",m[4])},i(m){f||(q(a.$$.fragment,m),q(c),f=!0)},o(m){J(a.$$.fragment,m),J(c),f=!1},d(m){m&&U(e),i[16](null),m&&U(n),m&&U(r),me(a),_&&_.d(),y[u].d(),h=!1,ue(p)}}}let Tf=null;const Cf="v0ru.379031335f10b4cb40cff8f6feeb3d598db6529d52aa98637549ca8b63694c10",kf="0bEMs-b6UkqjiNepPJ1M4gZ9";function Of(i,e,t){let n,r;var o=this&&this.__awaiter||function(T,V,Y,Z){function ie(ce){return ce instanceof Y?ce:new Y(function(zi){zi(ce)})}return new(Y||(Y=Promise))(function(ce,zi){function Rf(ot){try{mr(Z.next(ot))}catch(gr){zi(gr)}}function Nf(ot){try{mr(Z.throw(ot))}catch(gr){zi(gr)}}function mr(ot){ot.done?ce(ot.value):ie(ot.value).then(Rf,Nf)}mr((Z=Z.apply(T,V||[])).next())})};let{apikey:s}=e;sa.init(kf);let a=null;Tt.subscribe(T=>{a=T}),Mc(Le,T=>{if(T){console.debug("logged in");const V={uid:T.uid,email:T.email,displayName:T.displayName};Tt.set(V),sa.identify(T.uid,{email:T.email||"",displayName:T.displayName||""})}else Tt.set(null)});let{article:d}=e,{gladedocumenthash:l}=e,u;u=H.List,console.debug("initalized"),s||(s=Cf),(()=>o(void 0,void 0,void 0,function*(){if(s){const T=bt(It,"validateAPIKey");try{const V=yield T({apiKey:s}),{isValid:Y,forest:Z}=V.data;if(Y){console.debug("apikey is valid",Z);const ie=(a==null?void 0:a.uid)===Z.ownerUid;Tt.update(ce=>ce?Object.assign(Object.assign({},ce),{isForestOwner:ie}):null),console.debug("currentUser.isForestOwner",ie)}else console.error("apikey is not valid")}catch(V){console.error(V)}}}))(),console.debug(`apiKey: ${s}`);let f=!1,h=0,p=[],_=[];const w=T=>p.filter(V=>V.gladeDOMNodeHash===T&&!V.hidden),y=()=>{const T=[],V=d.querySelector("slot");Array.from(V.assignedElements()).forEach(Z=>{const ie=_f(Z);ie&&(Z.setAttribute("data-glade-node-hash",ie),T.push(ie))}),t(2,l=na(T.join("_"))),console.debug("glade-document-hash",l)},g=()=>o(void 0,void 0,void 0,function*(){var T;try{let Y=yield bt(It,"getAnnotations")({gladeDocumentHash:l,gladeAPIKey:s});p=(T=Y==null?void 0:Y.data)===null||T===void 0?void 0:T.annotations.map(Z=>new Ks(Z))}catch(V){console.error(V)}}),m=()=>{const T=d.querySelector("slot");Array.from(T.assignedElements()).forEach(Y=>{const Z=parseInt(Y.getAttribute("data-glade-node-hash")||"0");w(Z).length?Y.classList.add("glade-has-annotations"):Y.classList.remove("glade-has-annotations")})};ga(()=>{console.debug("mounted"),v()});const v=()=>o(void 0,void 0,void 0,function*(){y(),yield g(),m()}),A=T=>{if(T.button===0){const V=T==null?void 0:T.composedPath()[0],Y=parseInt(V.getAttribute("data-glade-node-hash"));t(5,h=Y),t(6,_=w(h)),t(4,f=!0)}},k=()=>{t(4,f=!1),t(3,u=H.List)},E=()=>{t(3,u=u!==H.Account?H.Account:H.List)},O=T=>{t(8,n=T.detail),console.debug(`error ${n}`),setTimeout(()=>{t(8,n=null)},3e3)},P=T=>{console.debug("handleChangeView",T),T.detail.dismissModal&&t(4,f=!1),t(3,u=T.detail.nextView)},$=T=>{const{annotation:V}=T.detail;p.push(V),m()},F=T=>{p=p.filter(V=>V.uid!==T.detail.annotationUid),m()};function de(T){Se[T?"unshift":"push"](()=>{d=T,t(1,d)})}return i.$$set=T=>{"apikey"in T&&t(0,s=T.apikey),"article"in T&&t(1,d=T.article),"gladedocumenthash"in T&&t(2,l=T.gladedocumenthash)},i.$$.update=()=>{i.$$.dirty&8&&t(7,r=u!==H.Account&&u!==H.AuthenticationMenu?"annotations":"account")},t(8,n=Tf),[s,d,l,u,f,h,_,r,n,A,k,E,O,P,$,F,de]}class da extends ge{constructor(e){super(),we(this,{target:this.shadowRoot,props:ve(this.attributes),customElement:!0},Of,Sf,he,{apikey:0,article:1,gladedocumenthash:2},null),e&&(e.target&&D(e.target,this,e.anchor),e.props&&(this.$set(e.props),G()))}static get observedAttributes(){return["apikey","article","gladedocumenthash"]}get apikey(){return this.$$.ctx[0]}set apikey(e){this.$$set({apikey:e}),G()}get article(){return this.$$.ctx[1]}set article(e){this.$$set({article:e}),G()}get gladedocumenthash(){return this.$$.ctx[2]}set gladedocumenthash(e){this.$$set({gladedocumenthash:e}),G()}}return customElements.define("glade-annotatable",da),da});
