function R() {
}
function Xn(i) {
  return i();
}
function _r() {
  return /* @__PURE__ */ Object.create(null);
}
function me(i) {
  i.forEach(Xn);
}
function yi(i) {
  return typeof i == "function";
}
function ge(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function ua(i) {
  return Object.keys(i).length === 0;
}
function ha(i, ...e) {
  if (i == null)
    return R;
  const t = i.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function fa(i, e, t) {
  i.$$.on_destroy.push(ha(e, t));
}
const pa = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in pa;
function w(i, e) {
  i.appendChild(e);
}
function D(i, e, t) {
  i.insertBefore(e, t || null);
}
function H(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function ma(i, e) {
  for (let t = 0; t < i.length; t += 1)
    i[t] && i[t].d(e);
}
function I(i) {
  return document.createElement(i);
}
function br(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function fe(i) {
  return document.createTextNode(i);
}
function F() {
  return fe(" ");
}
function ga() {
  return fe("");
}
function G(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function z(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function C(i, e, t) {
  e in i ? i[e] = typeof i[e] == "boolean" && t === "" ? !0 : t : z(i, e, t);
}
function _a(i) {
  return Array.from(i.childNodes);
}
function Li(i, e) {
  e = "" + e, i.data !== e && (i.data = e);
}
function ba(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(i, t, n, e), r;
}
function we(i) {
  const e = {};
  for (const t of i)
    e[t.name] = t.value;
  return e;
}
let zt;
function Ft(i) {
  zt = i;
}
function Lo() {
  if (!zt)
    throw new Error("Function called outside component initialization");
  return zt;
}
function Po(i) {
  Lo().$$.on_mount.push(i);
}
function St() {
  const i = Lo();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const o = ba(e, t, { cancelable: n });
      return r.slice().forEach((s) => {
        s.call(i, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const ut = [], Te = [];
let gt = [];
const yr = [], ya = /* @__PURE__ */ Promise.resolve();
let bn = !1;
function va() {
  bn || (bn = !0, ya.then(W));
}
function yn(i) {
  gt.push(i);
}
const Wi = /* @__PURE__ */ new Set();
let dt = 0;
function W() {
  if (dt !== 0)
    return;
  const i = zt;
  do {
    try {
      for (; dt < ut.length; ) {
        const e = ut[dt];
        dt++, Ft(e), xa(e.$$);
      }
    } catch (e) {
      throw ut.length = 0, dt = 0, e;
    }
    for (Ft(null), ut.length = 0, dt = 0; Te.length; )
      Te.pop()();
    for (let e = 0; e < gt.length; e += 1) {
      const t = gt[e];
      Wi.has(t) || (Wi.add(t), t());
    }
    gt.length = 0;
  } while (ut.length);
  for (; yr.length; )
    yr.pop()();
  bn = !1, Wi.clear(), Ft(i);
}
function xa(i) {
  if (i.fragment !== null) {
    i.update(), me(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(yn);
  }
}
function wa(i) {
  const e = [], t = [];
  gt.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), gt = e;
}
const pi = /* @__PURE__ */ new Set();
let Ye;
function Pi() {
  Ye = {
    r: 0,
    c: [],
    p: Ye
    // parent group
  };
}
function Di() {
  Ye.r || me(Ye.c), Ye = Ye.p;
}
function q(i, e) {
  i && i.i && (pi.delete(i), i.i(e));
}
function J(i, e, t, n) {
  if (i && i.o) {
    if (pi.has(i))
      return;
    pi.add(i), Ye.c.push(() => {
      pi.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else
    n && n();
}
const Ea = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...Ea];
function Ee(i) {
  i && i.c();
}
function _e(i, e, t, n) {
  const { fragment: r, after_update: o } = i.$$;
  r && r.m(e, t), n || yn(() => {
    const s = i.$$.on_mount.map(Xn).filter(yi);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : me(s), i.$$.on_mount = [];
  }), o.forEach(yn);
}
function be(i, e) {
  const t = i.$$;
  t.fragment !== null && (wa(t.after_update), me(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Aa(i, e) {
  i.$$.dirty[0] === -1 && (ut.push(i), va(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ae(i, e, t, n, r, o, s, a = [-1]) {
  const d = zt;
  Ft(i);
  const l = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: R,
    not_equal: r,
    bound: _r(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: _r(),
    dirty: a,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  s && s(l.root);
  let u = !1;
  if (l.ctx = t ? t(i, e.props || {}, (c, f, ...h) => {
    const p = h.length ? h[0] : f;
    return l.ctx && r(l.ctx[c], l.ctx[c] = p) && (!l.skip_bound && l.bound[c] && l.bound[c](p), u && Aa(i, c)), f;
  }) : [], l.update(), u = !0, me(l.before_update), l.fragment = n ? n(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = _a(e.target);
      l.fragment && l.fragment.l(c), c.forEach(H);
    } else
      l.fragment && l.fragment.c();
    e.intro && q(i.$$.fragment), _e(i, e.target, e.anchor, e.customElement), W();
  }
  Ft(d);
}
let ye;
typeof HTMLElement == "function" && (ye = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: i } = this.$$;
    this.$$.on_disconnect = i.map(Xn).filter(yi);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(i, e, t) {
    this[i] = t;
  }
  disconnectedCallback() {
    me(this.$$.on_disconnect);
  }
  $destroy() {
    be(this, 1), this.$destroy = R;
  }
  $on(i, e) {
    if (!yi(e))
      return R;
    const t = this.$$.callbacks[i] || (this.$$.callbacks[i] = []);
    return t.push(e), () => {
      const n = t.indexOf(e);
      n !== -1 && t.splice(n, 1);
    };
  }
  $set(i) {
    this.$$set && !ua(i) && (this.$$.skip_bound = !0, this.$$set(i), this.$$.skip_bound = !1);
  }
});
function Yn(i, e) {
  var t = {};
  for (var n in i)
    Object.prototype.hasOwnProperty.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(i); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[r]) && (t[n[r]] = i[n[r]]);
  return t;
}
function b(i, e, t, n) {
  var r = arguments.length, o = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(i, e, t, n);
  else
    for (var a = i.length - 1; a >= 0; a--)
      (s = i[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}
/**
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
 */
const vr = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Jn = (i, e, t = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    i.removeChild(e), e = n;
  }
};
/**
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
 */
const Oe = `{{lit-${String(Math.random()).slice(2)}}}`, Do = `<!--${Oe}-->`, xr = new RegExp(`${Oe}|${Do}`), Dt = "$lit$";
class $o {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const n = [], r = [], o = document.createTreeWalker(t.content, 133, null, !1);
    let s = 0, a = -1, d = 0;
    const { strings: l, values: { length: u } } = e;
    for (; d < u; ) {
      const c = o.nextNode();
      if (c === null) {
        o.currentNode = r.pop();
        continue;
      }
      if (a++, c.nodeType === 1) {
        if (c.hasAttributes()) {
          const f = c.attributes, { length: h } = f;
          let p = 0;
          for (let _ = 0; _ < h; _++)
            wr(f[_].name, Dt) && p++;
          for (; p-- > 0; ) {
            const _ = l[d], v = vn.exec(_)[2], y = v.toLowerCase() + Dt, g = c.getAttribute(y);
            c.removeAttribute(y);
            const m = g.split(xr);
            this.parts.push({ type: "attribute", index: a, name: v, strings: m }), d += m.length - 1;
          }
        }
        c.tagName === "TEMPLATE" && (r.push(c), o.currentNode = c.content);
      } else if (c.nodeType === 3) {
        const f = c.data;
        if (f.indexOf(Oe) >= 0) {
          const h = c.parentNode, p = f.split(xr), _ = p.length - 1;
          for (let v = 0; v < _; v++) {
            let y, g = p[v];
            if (g === "")
              y = Me();
            else {
              const m = vn.exec(g);
              m !== null && wr(m[2], Dt) && (g = g.slice(0, m.index) + m[1] + m[2].slice(0, -Dt.length) + m[3]), y = document.createTextNode(g);
            }
            h.insertBefore(y, c), this.parts.push({ type: "node", index: ++a });
          }
          p[_] === "" ? (h.insertBefore(Me(), c), n.push(c)) : c.data = p[_], d += _;
        }
      } else if (c.nodeType === 8)
        if (c.data === Oe) {
          const f = c.parentNode;
          (c.previousSibling === null || a === s) && (a++, f.insertBefore(Me(), c)), s = a, this.parts.push({ type: "node", index: a }), c.nextSibling === null ? c.data = "" : (n.push(c), a--), d++;
        } else {
          let f = -1;
          for (; (f = c.data.indexOf(Oe, f + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), d++;
        }
    }
    for (const c of n)
      c.parentNode.removeChild(c);
  }
}
const wr = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, Mo = (i) => i.index !== -1, Me = () => document.createComment(""), vn = (
  // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
/**
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
 */
const Qn = 133;
function Fo(i, e) {
  const { element: { content: t }, parts: n } = i, r = document.createTreeWalker(t, Qn, null, !1);
  let o = Ut(n), s = n[o], a = -1, d = 0;
  const l = [];
  let u = null;
  for (; r.nextNode(); ) {
    a++;
    const c = r.currentNode;
    for (c.previousSibling === u && (u = null), e.has(c) && (l.push(c), u === null && (u = c)), u !== null && d++; s !== void 0 && s.index === a; )
      s.index = u !== null ? -1 : s.index - d, o = Ut(n, o), s = n[o];
  }
  l.forEach((c) => c.parentNode.removeChild(c));
}
const Ia = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, Qn, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, Ut = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const n = i[t];
    if (Mo(n))
      return t;
  }
  return -1;
};
function Sa(i, e, t = null) {
  const { element: { content: n }, parts: r } = i;
  if (t == null) {
    n.appendChild(e);
    return;
  }
  const o = document.createTreeWalker(n, Qn, null, !1);
  let s = Ut(r), a = 0, d = -1;
  for (; o.nextNode(); )
    for (d++, o.currentNode === t && (a = Ia(e), t.parentNode.insertBefore(e, t)); s !== -1 && r[s].index === d; ) {
      if (a > 0) {
        for (; s !== -1; )
          r[s].index += a, s = Ut(r, s);
        return;
      }
      s = Ut(r, s);
    }
}
/**
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
 */
const Uo = /* @__PURE__ */ new WeakMap(), Tt = (i) => (...e) => {
  const t = i(...e);
  return Uo.set(t, !0), t;
}, jt = (i) => typeof i == "function" && Uo.has(i);
/**
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
 */
const he = {}, Er = {};
/**
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
 */
class xn {
  constructor(e, t, n) {
    this.__parts = [], this.template = e, this.processor = t, this.options = n;
  }
  update(e) {
    let t = 0;
    for (const n of this.__parts)
      n !== void 0 && n.setValue(e[t]), t++;
    for (const n of this.__parts)
      n !== void 0 && n.commit();
  }
  _clone() {
    const e = vr ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let o = 0, s = 0, a, d = r.nextNode();
    for (; o < n.length; ) {
      if (a = n[o], !Mo(a)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; s < a.index; )
        s++, d.nodeName === "TEMPLATE" && (t.push(d), r.currentNode = d.content), (d = r.nextNode()) === null && (r.currentNode = t.pop(), d = r.nextNode());
      if (a.type === "node") {
        const l = this.processor.handleTextExpression(this.options);
        l.insertAfterNode(d.previousSibling), this.__parts.push(l);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(d, a.name, a.strings, this.options));
      o++;
    }
    return vr && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
/**
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
 */
const Ar = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), Ta = ` ${Oe} `;
class Ho {
  constructor(e, t, n, r) {
    this.strings = e, this.values = t, this.type = n, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", n = !1;
    for (let r = 0; r < e; r++) {
      const o = this.strings[r], s = o.lastIndexOf("<!--");
      n = (s > -1 || n) && o.indexOf("-->", s + 1) === -1;
      const a = vn.exec(o);
      a === null ? t += o + (n ? Ta : Do) : t += o.substr(0, a.index) + a[1] + a[2] + Dt + a[3] + Oe;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Ar !== void 0 && (t = Ar.createHTML(t)), e.innerHTML = t, e;
  }
}
/**
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
 */
const Zn = (i) => i === null || !(typeof i == "object" || typeof i == "function"), wn = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class Bo {
  constructor(e, t, n) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Ct(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, n = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const o = n[0].value;
      if (typeof o == "symbol")
        return String(o);
      if (typeof o == "string" || !wn(o))
        return o;
    }
    let r = "";
    for (let o = 0; o < t; o++) {
      r += e[o];
      const s = n[o];
      if (s !== void 0) {
        const a = s.value;
        if (Zn(a) || !wn(a))
          r += typeof a == "string" ? a : String(a);
        else
          for (const d of a)
            r += typeof d == "string" ? d : String(d);
      }
    }
    return r += e[t], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Ct {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== he && (!Zn(e) || e !== this.value) && (this.value = e, jt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; jt(this.value); ) {
      const e = this.value;
      this.value = he, e(this);
    }
    this.value !== he && this.committer.commit();
  }
}
class Qt {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(Me()), this.endNode = e.appendChild(Me());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(e) {
    e.__insert(this.startNode = Me()), e.__insert(this.endNode = Me());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = Me()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; jt(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = he, t(this);
    }
    const e = this.__pendingValue;
    e !== he && (Zn(e) ? e !== this.value && this.__commitText(e) : e instanceof Ho ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : wn(e) ? this.__commitIterable(e) : e === Er ? (this.value = Er, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const t = this.startNode.nextSibling;
    e = e ?? "";
    const n = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = n : this.__commitNode(document.createTextNode(n)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof xn && this.value.template === t)
      this.value.update(e.values);
    else {
      const n = new xn(t, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let n = 0, r;
    for (const o of e)
      r = t[n], r === void 0 && (r = new Qt(this.options), t.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(t[n - 1])), r.setValue(o), r.commit(), n++;
    n < t.length && (t.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    Jn(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Vo {
  constructor(e, t, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; jt(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = he, t(this);
    }
    if (this.__pendingValue === he)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = he;
  }
}
class Ca extends Bo {
  constructor(e, t, n) {
    super(e, t, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new $i(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class $i extends Ct {
}
let zo = !1;
(() => {
  try {
    const i = {
      get capture() {
        return zo = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class jo {
  constructor(e, t, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; jt(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = he, o(this);
    }
    if (this.__pendingValue === he)
      return;
    const e = this.__pendingValue, t = this.value, n = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), r = e != null && (t == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = ka(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = he;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const ka = (i) => i && (zo ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
/**
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
 */
function Oa(i) {
  let e = Wt.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Wt.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const n = i.strings.join(Oe);
  return t = e.keyString.get(n), t === void 0 && (t = new $o(i, i.getTemplateElement()), e.keyString.set(n, t)), e.stringsArray.set(i.strings, t), t;
}
const Wt = /* @__PURE__ */ new Map();
/**
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
 */
const ft = /* @__PURE__ */ new WeakMap(), Ra = (i, e, t) => {
  let n = ft.get(e);
  n === void 0 && (Jn(e, e.firstChild), ft.set(e, n = new Qt(Object.assign({ templateFactory: Oa }, t))), n.appendInto(e)), n.setValue(i), n.commit();
};
/**
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
 */
class Na {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, n, r) {
    const o = t[0];
    return o === "." ? new Ca(e, t.slice(1), n).parts : o === "@" ? [new jo(e, t.slice(1), r.eventContext)] : o === "?" ? [new Vo(e, t.slice(1), n)] : new Bo(e, t, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Qt(e);
  }
}
const La = new Na();
/**
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
 */
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
const j = (i, ...e) => new Ho(i, e, "html", La);
/**
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
 */
const Wo = (i, e) => `${i}--${e}`;
let vi = !0;
typeof window.ShadyCSS > "u" ? vi = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), vi = !1);
const Pa = (i) => (e) => {
  const t = Wo(e.type, i);
  let n = Wt.get(t);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Wt.set(t, n));
  let r = n.stringsArray.get(e.strings);
  if (r !== void 0)
    return r;
  const o = e.strings.join(Oe);
  if (r = n.keyString.get(o), r === void 0) {
    const s = e.getTemplateElement();
    vi && window.ShadyCSS.prepareTemplateDom(s, i), r = new $o(e, s), n.keyString.set(o, r);
  }
  return n.stringsArray.set(e.strings, r), r;
}, Da = ["html", "svg"], $a = (i) => {
  Da.forEach((e) => {
    const t = Wt.get(Wo(e, i));
    t !== void 0 && t.keyString.forEach((n) => {
      const { element: { content: r } } = n, o = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((s) => {
        o.add(s);
      }), Fo(n, o);
    });
  });
}, Go = /* @__PURE__ */ new Set(), Ma = (i, e, t) => {
  Go.add(i);
  const n = t ? t.element : document.createElement("template"), r = e.querySelectorAll("style"), { length: o } = r;
  if (o === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, i);
    return;
  }
  const s = document.createElement("style");
  for (let l = 0; l < o; l++) {
    const u = r[l];
    u.parentNode.removeChild(u), s.textContent += u.textContent;
  }
  $a(i);
  const a = n.content;
  t ? Sa(t, s, a.firstChild) : a.insertBefore(s, a.firstChild), window.ShadyCSS.prepareTemplateStyles(n, i);
  const d = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && d !== null)
    e.insertBefore(d.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(s, a.firstChild);
    const l = /* @__PURE__ */ new Set();
    l.add(s), Fo(t, l);
  }
}, Fa = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = t.scopeName, r = ft.has(e), o = vi && e.nodeType === 11 && !!e.host, s = o && !Go.has(n), a = s ? document.createDocumentFragment() : e;
  if (Ra(i, a, Object.assign({ templateFactory: Pa(n) }, t)), s) {
    const d = ft.get(a);
    ft.delete(a);
    const l = d.value instanceof xn ? d.value.template : void 0;
    Ma(n, a, l), Jn(e, e.firstChild), e.appendChild(a), ft.set(e, d);
  }
  !r && o && window.ShadyCSS.styleElement(e.host);
};
/**
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
 */
var qo;
window.JSCompiler_renameProperty = (i, e) => i;
const En = {
  toAttribute(i, e) {
    switch (e) {
      case Boolean:
        return i ? "" : null;
      case Object:
      case Array:
        return i == null ? i : JSON.stringify(i);
    }
    return i;
  },
  fromAttribute(i, e) {
    switch (e) {
      case Boolean:
        return i !== null;
      case Number:
        return i === null ? null : Number(i);
      case Object:
      case Array:
        return JSON.parse(i);
    }
    return i;
  }
}, Ko = (i, e) => e !== i && (e === e || i === i), Gi = {
  attribute: !0,
  type: String,
  converter: En,
  reflect: !1,
  hasChanged: Ko
}, qi = 1, Ki = 4, Xi = 8, Yi = 16, An = "finalized";
class Xo extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this._classProperties.forEach((t, n) => {
      const r = this._attributeNameForProperty(n, t);
      r !== void 0 && (this._attributeToPropertyMap.set(r, n), e.push(r));
    }), e;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */
  /** @nocollapse */
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = /* @__PURE__ */ new Map();
      const e = Object.getPrototypeOf(this)._classProperties;
      e !== void 0 && e.forEach((t, n) => this._classProperties.set(n, t));
    }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a PropertyDeclaration for the property with the given options.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   *
   * @nocollapse
   */
  static createProperty(e, t = Gi) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const n = typeof e == "symbol" ? Symbol() : `__${e}`, r = this.getPropertyDescriptor(e, n, t);
    r !== void 0 && Object.defineProperty(this.prototype, e, r);
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   *   class MyElement extends LitElement {
   *     static getPropertyDescriptor(name, key, options) {
   *       const defaultDescriptor =
   *           super.getPropertyDescriptor(name, key, options);
   *       const setter = defaultDescriptor.set;
   *       return {
   *         get: defaultDescriptor.get,
   *         set(value) {
   *           setter.call(this, value);
   *           // custom action.
   *         },
   *         configurable: true,
   *         enumerable: true
   *       }
   *     }
   *   }
   *
   * @nocollapse
   */
  static getPropertyDescriptor(e, t, n) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(r) {
        const o = this[e];
        this[t] = r, this.requestUpdateInternal(e, o, n);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a PropertyDeclaration via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override `createProperty`.
   *
   * @nocollapse
   * @final
   */
  static getPropertyOptions(e) {
    return this._classProperties && this._classProperties.get(e) || Gi;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(An) || e.finalize(), this[An] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, n = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const r of n)
        this.createProperty(r, t[r]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, n = Ko) {
    return n(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const n = t.type, r = t.converter || En, o = typeof r == "function" ? r : r.fromAttribute;
    return o ? o(e, n) : e;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(e, t) {
    if (t.reflect === void 0)
      return;
    const n = t.type, r = t.converter;
    return (r && r.toAttribute || En.toAttribute)(e, n);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */
  initialize() {
    this._updateState = 0, this._updatePromise = new Promise((e) => this._enableUpdatingResolver = e), this._changedProperties = /* @__PURE__ */ new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const n = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, n);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    this._enableUpdatingResolver !== void 0 && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */
  disconnectedCallback() {
  }
  /**
   * Synchronizes property values when attributes change.
   */
  attributeChangedCallback(e, t, n) {
    t !== n && this._attributeToProperty(e, n);
  }
  _propertyToAttribute(e, t, n = Gi) {
    const r = this.constructor, o = r._attributeNameForProperty(e, n);
    if (o !== void 0) {
      const s = r._propertyValueToAttribute(t, n);
      if (s === void 0)
        return;
      this._updateState = this._updateState | Xi, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._updateState = this._updateState & ~Xi;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & Xi)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(e);
    if (r !== void 0) {
      const o = n.getPropertyOptions(r);
      this._updateState = this._updateState | Yi, this[r] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(t, o), this._updateState = this._updateState & ~Yi;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, n) {
    let r = !0;
    if (e !== void 0) {
      const o = this.constructor;
      n = n || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), n.reflect === !0 && !(this._updateState & Yi) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : r = !1;
    }
    !this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate());
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | Ki;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Ki;
  }
  get hasUpdated() {
    return this._updateState & qi;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */
  performUpdate() {
    if (!this._hasRequestedUpdate)
      return;
    this._instanceProperties && this._applyInstanceProperties();
    let e = !1;
    const t = this._changedProperties;
    try {
      e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated();
    } catch (n) {
      throw e = !1, this._markUpdated(), n;
    }
    e && (this._updateState & qi || (this._updateState = this._updateState | qi, this.firstUpdated(t)), this.updated(t));
  }
  _markUpdated() {
    this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = this._updateState & ~Ki;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `_getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super._getUpdateComplete()`, then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */
  get updateComplete() {
    return this._getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async _getUpdateComplete() {
   *       await super._getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   */
  _getUpdateComplete() {
    return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  shouldUpdate(e) {
    return !0;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  update(e) {
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, n) => this._propertyToAttribute(n, this[n], t)), this._reflectingProperties = void 0), this._markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  updated(e) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  firstUpdated(e) {
  }
}
qo = An;
Xo[qo] = !0;
/**
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
 */
const Ua = (i, e) => (window.customElements.define(i, e), e), Ha = (i, e) => {
  const { kind: t, elements: n } = e;
  return {
    kind: t,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(i, r);
    }
  };
}, rt = (i) => (e) => typeof e == "function" ? Ua(i, e) : Ha(i, e), Ba = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
  t.createProperty(e.key, i);
} }) : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  // When @babel/plugin-proposal-decorators implements initializers,
  // do this instead of the initializer below. See:
  // https://github.com/babel/babel/issues/9260 extras: [
  //   {
  //     kind: 'initializer',
  //     placement: 'own',
  //     initializer: descriptor.initializer,
  //   }
  // ],
  initializer() {
    typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
  },
  finisher(t) {
    t.createProperty(e.key, i);
  }
}, Va = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function T(i) {
  return (e, t) => t !== void 0 ? Va(i, e, t) : Ba(i, e);
}
function de(i) {
  return T({ attribute: !1, hasChanged: i == null ? void 0 : i.hasChanged });
}
function Z(i, e) {
  return (t, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    if (e) {
      const o = typeof n == "symbol" ? Symbol() : `__${n}`;
      r.get = function() {
        return this[o] === void 0 && (this[o] = this.renderRoot.querySelector(i)), this[o];
      };
    }
    return n !== void 0 ? Yo(r, t, n) : Jo(r, t);
  };
}
function za(i) {
  return (e, t) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? Yo(n, e, t) : Jo(n, e);
  };
}
const Yo = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, Jo = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), ja = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), Wa = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function Qo(i) {
  return (e, t) => t !== void 0 ? Wa(i, e, t) : ja(i, e);
}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const In = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, er = Symbol();
class tr {
  constructor(e, t) {
    if (t !== er)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (In ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Ga = (i) => new tr(String(i), er), qa = (i) => {
  if (i instanceof tr)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, ot = (i, ...e) => {
  const t = e.reduce((n, r, o) => n + qa(r) + i[o + 1], i[0]);
  return new tr(t, er);
};
/**
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
 */
(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
const Ir = {};
class Zt extends Xo {
  /**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */
  static getStyles() {
    return this.styles;
  }
  /** @nocollapse */
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
      return;
    const e = this.getStyles();
    if (Array.isArray(e)) {
      const t = (o, s) => o.reduceRight((a, d) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(d) ? t(d, a) : (a.add(d), a)
      ), s), n = t(e, /* @__PURE__ */ new Set()), r = [];
      n.forEach((o) => r.unshift(o)), this._styles = r;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !In) {
        const n = Array.prototype.slice.call(t.cssRules).reduce((r, o) => r + o.cssText, "");
        return Ga(n);
      }
      return t;
    });
  }
  /**
   * Performs element initialization. By default this calls
   * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
   * captures any pre-set values for registered properties.
   */
  initialize() {
    super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */
  adoptStyles() {
    const e = this.constructor._styles;
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : In ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
  }
  connectedCallback() {
    super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this);
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param _changedProperties Map of changed properties with old values
   */
  update(e) {
    const t = this.render();
    super.update(e), t !== Ir && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n.cssText, this.renderRoot.appendChild(r);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return Ir;
  }
}
Zt.finalized = !0;
Zt.render = Fa;
/**
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
 */
(() => {
  var i, e, t;
  const n = Symbol(), r = Symbol(), o = Symbol(), s = Symbol(), a = Symbol(), d = Symbol(), l = Symbol(), u = Symbol(), c = Symbol(), f = Symbol(), h = Symbol(), p = Symbol(), _ = Symbol();
  class v {
    constructor() {
      this[i] = [], this[e] = [], this[t] = /* @__PURE__ */ new Set();
    }
    destructor() {
      this[c](this[o]);
      const g = this;
      g[n] = null, g[o] = null, g[r] = null;
    }
    get top() {
      const g = this[n];
      return g[g.length - 1] || null;
    }
    push(g) {
      !g || g === this.top || (this.remove(g), this[d](g), this[n].push(g));
    }
    remove(g) {
      const m = this[n].indexOf(g);
      return m === -1 ? !1 : (this[n].splice(m, 1), m === this[n].length && this[d](this.top), !0);
    }
    pop() {
      const g = this.top;
      return g && this.remove(g), g;
    }
    has(g) {
      return this[n].indexOf(g) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */
    [(i = n, e = o, t = r, d)](g) {
      const m = this[r], x = this[o];
      if (!g) {
        this[c](x), m.clear(), this[o] = [];
        return;
      }
      const E = this[f](g);
      if (E[E.length - 1].parentNode !== document.body)
        throw Error("Non-connected element cannot be a blocking element");
      this[o] = E;
      const O = this[h](g);
      if (!x.length) {
        this[u](E, O, m);
        return;
      }
      let k = x.length - 1, A = E.length - 1;
      for (; k > 0 && A > 0 && x[k] === E[A]; )
        k--, A--;
      x[k] !== E[A] && this[l](x[k], E[A]), k > 0 && this[c](x.slice(0, k)), A > 0 && this[u](E.slice(0, A), O, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [l](g, m) {
      const x = g[s];
      this[p](g) && !g.inert && (g.inert = !0, x.add(g)), x.has(m) && (m.inert = !1, x.delete(m)), m[a] = g[a], m[s] = x, g[a] = void 0, g[s] = void 0;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [c](g) {
      for (const m of g) {
        m[a].disconnect(), m[a] = void 0;
        const E = m[s];
        for (const O of E)
          O.inert = !1;
        m[s] = void 0;
      }
    }
    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [u](g, m, x) {
      for (const E of g) {
        const O = E.parentNode, k = O.children, A = /* @__PURE__ */ new Set();
        for (let le = 0; le < k.length; le++) {
          const S = k[le];
          S === E || !this[p](S) || m && m.has(S) || (x && S.inert ? x.add(S) : (S.inert = !0, A.add(S)));
        }
        E[s] = A;
        const P = new MutationObserver(this[_].bind(this));
        E[a] = P;
        let $ = O;
        const M = $;
        M.__shady && M.host && ($ = M.host), P.observe($, {
          childList: !0
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */
    [_](g) {
      const m = this[o], x = this[r];
      for (const E of g) {
        const O = E.target.host || E.target, k = O === document.body ? m.length : m.indexOf(O), A = m[k - 1], P = A[s];
        for (let $ = 0; $ < E.removedNodes.length; $++) {
          const M = E.removedNodes[$];
          if (M === A) {
            console.info("Detected removal of the top Blocking Element."), this.pop();
            return;
          }
          P.has(M) && (M.inert = !1, P.delete(M));
        }
        for (let $ = 0; $ < E.addedNodes.length; $++) {
          const M = E.addedNodes[$];
          this[p](M) && (x && M.inert ? x.add(M) : (M.inert = !0, P.add(M)));
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */
    [p](g) {
      return /^(style|template|script)$/.test(g.localName) === !1;
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */
    [f](g) {
      const m = [];
      let x = g;
      for (; x && x !== document.body; ) {
        if (x.nodeType === Node.ELEMENT_NODE && m.push(x), x.assignedSlot) {
          for (; x = x.assignedSlot; )
            m.push(x);
          x = m.pop();
          continue;
        }
        x = x.parentNode || x.host;
      }
      return m;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */
    [h](g) {
      const m = g.shadowRoot;
      if (!m)
        return null;
      const x = /* @__PURE__ */ new Set();
      let E, O, k;
      const A = m.querySelectorAll("slot");
      if (A.length && A[0].assignedNodes)
        for (E = 0; E < A.length; E++)
          for (k = A[E].assignedNodes({
            flatten: !0
          }), O = 0; O < k.length; O++)
            k[O].nodeType === Node.ELEMENT_NODE && x.add(k[O]);
      return x;
    }
  }
  document.$blockingElements = new v();
})();
var Ji = function() {
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  return function(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  };
}();
function Qi(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var i = Array.prototype.slice, e = Element.prototype.matches || Element.prototype.msMatchesSelector, t = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function l(u, c) {
      Qi(this, l), this._inertManager = c, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Ji(l, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(c) {
          this._unmanageNode(c.node);
        }, this), this._observer = /** @type {?} */
        null, this._rootElement = /** @type {?} */
        null, this._managedNodes = /** @type {?} */
        null, this._inertManager = /** @type {?} */
        null;
      }
      /**
       * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
       */
    }, {
      key: "_makeSubtreeUnfocusable",
      /**
       * @param {!Node} startNode
       */
      value: function(c) {
        var f = this;
        s(c, function(v) {
          return f._visitNode(v);
        });
        var h = document.activeElement;
        if (!document.body.contains(c)) {
          for (var p = c, _ = void 0; p; ) {
            if (p.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              _ = /** @type {!ShadowRoot} */
              p;
              break;
            }
            p = p.parentNode;
          }
          _ && (h = _.activeElement);
        }
        c.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
      }
      /**
       * @param {!Node} node
       */
    }, {
      key: "_visitNode",
      value: function(c) {
        if (c.nodeType === Node.ELEMENT_NODE) {
          var f = (
            /** @type {!Element} */
            c
          );
          f !== this._rootElement && f.hasAttribute("inert") && this._adoptInertRoot(f), (e.call(f, t) || f.hasAttribute("tabindex")) && this._manageNode(f);
        }
      }
      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_manageNode",
      value: function(c) {
        var f = this._inertManager.register(c, this);
        this._managedNodes.add(f);
      }
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_unmanageNode",
      value: function(c) {
        var f = this._inertManager.deregister(c, this);
        f && this._managedNodes.delete(f);
      }
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
    }, {
      key: "_unmanageSubtree",
      value: function(c) {
        var f = this;
        s(c, function(h) {
          return f._unmanageNode(h);
        });
      }
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!Element} node
       */
    }, {
      key: "_adoptInertRoot",
      value: function(c) {
        var f = this._inertManager.getInertRoot(c);
        f || (this._inertManager.setInert(c, !0), f = this._inertManager.getInertRoot(c)), f.managedNodes.forEach(function(h) {
          this._manageNode(h.node);
        }, this);
      }
      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_onMutation",
      value: function(c, f) {
        c.forEach(function(h) {
          var p = (
            /** @type {!Element} */
            h.target
          );
          if (h.type === "childList")
            i.call(h.addedNodes).forEach(function(v) {
              this._makeSubtreeUnfocusable(v);
            }, this), i.call(h.removedNodes).forEach(function(v) {
              this._unmanageSubtree(v);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(p);
            else if (p !== this._rootElement && h.attributeName === "inert" && p.hasAttribute("inert")) {
              this._adoptInertRoot(p);
              var _ = this._inertManager.getInertRoot(p);
              this._managedNodes.forEach(function(v) {
                p.contains(v.node) && _._manageNode(v.node);
              });
            }
          }
        }, this);
      }
    }, {
      key: "managedNodes",
      get: function() {
        return new Set(this._managedNodes);
      }
      /** @return {boolean} */
    }, {
      key: "hasSavedAriaHidden",
      get: function() {
        return this._savedAriaHidden !== null;
      }
      /** @param {?string} ariaHidden */
    }, {
      key: "savedAriaHidden",
      set: function(c) {
        this._savedAriaHidden = c;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), l;
  }(), r = function() {
    function l(u, c) {
      Qi(this, l), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([c]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Ji(l, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var c = (
            /** @type {!Element} */
            this._node
          );
          this._savedTabIndex !== null ? c.setAttribute("tabindex", this._savedTabIndex) : c.removeAttribute("tabindex"), this._overrodeFocusMethod && delete c.focus;
        }
        this._node = /** @type {?} */
        null, this._inertRoots = /** @type {?} */
        null, this._destroyed = !0;
      }
      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */
    }, {
      key: "_throwIfDestroyed",
      /**
       * Throw if user tries to access destroyed InertNode.
       */
      value: function() {
        if (this.destroyed)
          throw new Error("Trying to access destroyed InertNode");
      }
      /** @return {boolean} */
    }, {
      key: "ensureUntabbable",
      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      value: function() {
        if (this.node.nodeType === Node.ELEMENT_NODE) {
          var c = (
            /** @type {!Element} */
            this.node
          );
          if (e.call(c, t)) {
            if (
              /** @type {!HTMLElement} */
              c.tabIndex === -1 && this.hasSavedTabIndex
            )
              return;
            c.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            c.tabIndex), c.setAttribute("tabindex", "-1"), c.nodeType === Node.ELEMENT_NODE && (c.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            c.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            c.tabIndex, c.removeAttribute("tabindex"));
        }
      }
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "addInertRoot",
      value: function(c) {
        this._throwIfDestroyed(), this._inertRoots.add(c);
      }
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "removeInertRoot",
      value: function(c) {
        this._throwIfDestroyed(), this._inertRoots.delete(c), this._inertRoots.size === 0 && this.destructor();
      }
    }, {
      key: "destroyed",
      get: function() {
        return (
          /** @type {!InertNode} */
          this._destroyed
        );
      }
    }, {
      key: "hasSavedTabIndex",
      get: function() {
        return this._savedTabIndex !== null;
      }
      /** @return {!Node} */
    }, {
      key: "node",
      get: function() {
        return this._throwIfDestroyed(), this._node;
      }
      /** @param {?number} tabIndex */
    }, {
      key: "savedTabIndex",
      set: function(c) {
        this._throwIfDestroyed(), this._savedTabIndex = c;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), l;
  }(), o = function() {
    function l(u) {
      if (Qi(this, l), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), a(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Ji(l, [{
      key: "setInert",
      value: function(c, f) {
        if (f) {
          if (this._inertRoots.has(c))
            return;
          var h = new n(c, this);
          if (c.setAttribute("inert", ""), this._inertRoots.set(c, h), !this._document.body.contains(c))
            for (var p = c.parentNode; p; )
              p.nodeType === 11 && a(p), p = p.parentNode;
        } else {
          if (!this._inertRoots.has(c))
            return;
          var _ = this._inertRoots.get(c);
          _.destructor(), this._inertRoots.delete(c), c.removeAttribute("inert");
        }
      }
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
    }, {
      key: "getInertRoot",
      value: function(c) {
        return this._inertRoots.get(c);
      }
      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {!InertNode} inertNode
       */
    }, {
      key: "register",
      value: function(c, f) {
        var h = this._managedNodes.get(c);
        return h !== void 0 ? h.addInertRoot(f) : h = new r(c, f), this._managedNodes.set(c, h), h;
      }
      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
       */
    }, {
      key: "deregister",
      value: function(c, f) {
        var h = this._managedNodes.get(c);
        return h ? (h.removeInertRoot(f), h.destroyed && this._managedNodes.delete(c), h) : null;
      }
      /**
       * Callback used when document has finished loading.
       */
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var c = i.call(this._document.querySelectorAll("[inert]"));
        c.forEach(function(f) {
          this.setInert(f, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_watchForInert",
      value: function(c, f) {
        var h = this;
        c.forEach(function(p) {
          switch (p.type) {
            case "childList":
              i.call(p.addedNodes).forEach(function(y) {
                if (y.nodeType === Node.ELEMENT_NODE) {
                  var g = i.call(y.querySelectorAll("[inert]"));
                  e.call(y, "[inert]") && g.unshift(y), g.forEach(function(m) {
                    this.setInert(m, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (p.attributeName !== "inert")
                return;
              var _ = (
                /** @type {!Element} */
                p.target
              ), v = _.hasAttribute("inert");
              h.setInert(_, v);
              break;
          }
        }, this);
      }
    }]), l;
  }();
  function s(l, u, c) {
    if (l.nodeType == Node.ELEMENT_NODE) {
      var f = (
        /** @type {!Element} */
        l
      );
      u && u(f);
      var h = (
        /** @type {!HTMLElement} */
        f.shadowRoot
      );
      if (h) {
        s(h, u);
        return;
      }
      if (f.localName == "content") {
        for (var p = (
          /** @type {!HTMLContentElement} */
          f
        ), _ = p.getDistributedNodes ? p.getDistributedNodes() : [], v = 0; v < _.length; v++)
          s(_[v], u);
        return;
      }
      if (f.localName == "slot") {
        for (var y = (
          /** @type {!HTMLSlotElement} */
          f
        ), g = y.assignedNodes ? y.assignedNodes({ flatten: !0 }) : [], m = 0; m < g.length; m++)
          s(g[m], u);
        return;
      }
    }
    for (var x = l.firstChild; x != null; )
      s(x, u), x = x.nextSibling;
  }
  function a(l) {
    if (!l.querySelector("style#inert-style, link#inert-style")) {
      var u = document.createElement("style");
      u.setAttribute("id", "inert-style"), u.textContent = `
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
`, l.appendChild(u);
    }
  }
  var d = new o(document);
  Element.prototype.hasOwnProperty("inert") || Object.defineProperty(Element.prototype, "inert", {
    enumerable: !0,
    /** @this {!Element} */
    get: function() {
      return this.hasAttribute("inert");
    },
    /** @this {!Element} */
    set: function(u) {
      d.setInert(this, u);
    }
  });
})();
/**
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
 */
var re = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked"
}, lt = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, Zi = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
/*! *****************************************************************************
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
***************************************************************************** */
var Sn = function(i, e) {
  return Sn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n)
      n.hasOwnProperty(r) && (t[r] = n[r]);
  }, Sn(i, e);
};
function Ka(i, e) {
  Sn(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var xi = function() {
  return xi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, xi.apply(this, arguments);
};
/**
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
 */
var kt = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(i, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i, "strings", {
      get: function() {
        return {};
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.init = function() {
    }, i.prototype.destroy = function() {
    }, i;
  }()
);
/**
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
 */
var Xa = (
  /** @class */
  function(i) {
    Ka(e, i);
    function e(t) {
      var n = i.call(this, xi(xi({}, e.defaultAdapter), t)) || this;
      return n.isOpen_ = !1, n.animationFrame_ = 0, n.animationTimer_ = 0, n.layoutFrame_ = 0, n.escapeKeyAction_ = lt.CLOSE_ACTION, n.scrimClickAction_ = lt.CLOSE_ACTION, n.autoStackButtons_ = !0, n.areButtonsStacked_ = !1, n.suppressDefaultPressSelector = lt.SUPPRESS_DEFAULT_PRESS_SELECTOR, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return re;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return lt;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Zi;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          }
        };
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.hasClass(re.STACKED) && this.setAutoStackButtons(!1);
    }, e.prototype.destroy = function() {
      this.isOpen_ && this.close(lt.DESTROY_ACTION), this.animationTimer_ && (clearTimeout(this.animationTimer_), this.handleAnimationTimerEnd_()), this.layoutFrame_ && (cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = 0);
    }, e.prototype.open = function() {
      var t = this;
      this.isOpen_ = !0, this.adapter.notifyOpening(), this.adapter.addClass(re.OPENING), this.runNextAnimationFrame_(function() {
        t.adapter.addClass(re.OPEN), t.adapter.addBodyClass(re.SCROLL_LOCK), t.layout(), t.animationTimer_ = setTimeout(function() {
          t.handleAnimationTimerEnd_(), t.adapter.trapFocus(t.adapter.getInitialFocusEl()), t.adapter.notifyOpened();
        }, Zi.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var n = this;
      t === void 0 && (t = ""), this.isOpen_ && (this.isOpen_ = !1, this.adapter.notifyClosing(t), this.adapter.addClass(re.CLOSING), this.adapter.removeClass(re.OPEN), this.adapter.removeBodyClass(re.SCROLL_LOCK), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout(function() {
        n.adapter.releaseFocus(), n.handleAnimationTimerEnd_(), n.adapter.notifyClosed(t);
      }, Zi.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.isOpen = function() {
      return this.isOpen_;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction_;
    }, e.prototype.setEscapeKeyAction = function(t) {
      this.escapeKeyAction_ = t;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction_;
    }, e.prototype.setScrimClickAction = function(t) {
      this.scrimClickAction_ = t;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons_;
    }, e.prototype.setAutoStackButtons = function(t) {
      this.autoStackButtons_ = t;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(t) {
      this.suppressDefaultPressSelector = t;
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function() {
        t.layoutInternal_(), t.layoutFrame_ = 0;
      });
    }, e.prototype.handleClick = function(t) {
      var n = this.adapter.eventTargetMatches(t.target, lt.SCRIM_SELECTOR);
      if (n && this.scrimClickAction_ !== "")
        this.close(this.scrimClickAction_);
      else {
        var r = this.adapter.getActionFromEvent(t);
        r && this.close(r);
      }
    }, e.prototype.handleKeydown = function(t) {
      var n = t.key === "Enter" || t.keyCode === 13;
      if (n) {
        var r = this.adapter.getActionFromEvent(t);
        if (!r) {
          var o = t.composedPath ? t.composedPath()[0] : t.target, s = !this.adapter.eventTargetMatches(o, this.suppressDefaultPressSelector);
          n && s && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(t) {
      var n = t.key === "Escape" || t.keyCode === 27;
      n && this.escapeKeyAction_ !== "" && this.close(this.escapeKeyAction_);
    }, e.prototype.layoutInternal_ = function() {
      this.autoStackButtons_ && this.detectStackedButtons_(), this.detectScrollableContent_();
    }, e.prototype.handleAnimationTimerEnd_ = function() {
      this.animationTimer_ = 0, this.adapter.removeClass(re.OPENING), this.adapter.removeClass(re.CLOSING);
    }, e.prototype.runNextAnimationFrame_ = function(t) {
      var n = this;
      cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function() {
        n.animationFrame_ = 0, clearTimeout(n.animationTimer_), n.animationTimer_ = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons_ = function() {
      this.adapter.removeClass(re.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(re.STACKED), t !== this.areButtonsStacked_ && (this.adapter.reverseButtons(), this.areButtonsStacked_ = t);
    }, e.prototype.detectScrollableContent_ = function() {
      this.adapter.removeClass(re.SCROLLABLE), this.adapter.isContentScrollable() && this.adapter.addClass(re.SCROLLABLE);
    }, e;
  }(kt)
);
const Ya = Xa;
/**
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
 */
function ui(i) {
  return i === void 0 && (i = window), Ja(i) ? { passive: !0 } : !1;
}
function Ja(i) {
  i === void 0 && (i = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, n = function() {
    };
    i.document.addEventListener("test", n, t), i.document.removeEventListener("test", n, t);
  } catch {
    e = !1;
  }
  return e;
}
/**
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
 */
function Qa(i, e) {
  if (i.closest)
    return i.closest(e);
  for (var t = i; t; ) {
    if (Zo(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Zo(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
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
*/
function es(i) {
  return {
    addClass: (e) => {
      i.classList.add(e);
    },
    removeClass: (e) => {
      i.classList.remove(e);
    },
    hasClass: (e) => i.classList.contains(e)
  };
}
const ts = () => {
}, Za = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", ts, Za);
document.removeEventListener("x", ts);
/**
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
*/
class Mi extends Zt {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus(), this.mdcRoot.click();
      return;
    }
    super.click();
  }
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
/**
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
*/
const Ot = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const n = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, o) => e.constructor._observers.set(o, r)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const n = e.updated;
      e.updated = function(r) {
        n.call(this, r), r.forEach((o, s) => {
          const d = this.constructor._observers.get(s);
          d !== void 0 && d.call(this, this[s], o);
        });
      };
    }
    e.constructor._observers.set(t, i);
  }
);
/**
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
 */
class ed {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const n of t)
      this.classes.add(n);
  }
  add(e) {
    this.classes.add(e), this.changed = !0;
  }
  remove(e) {
    this.classes.delete(e), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let e = "";
      this.classes.forEach((t) => e += t + " "), this.element.setAttribute("class", e);
    }
  }
}
const Sr = /* @__PURE__ */ new WeakMap(), ue = Tt((i) => (e) => {
  if (!(e instanceof Ct) || e instanceof $i || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: n } = t;
  let r = Sr.get(e);
  r === void 0 && (n.setAttribute("class", t.strings.join(" ")), Sr.set(e, r = /* @__PURE__ */ new Set()));
  const o = n.classList || new ed(n);
  r.forEach((s) => {
    s in i || (o.remove(s), r.delete(s));
  });
  for (const s in i) {
    const a = i[s];
    a != r.has(s) && (a ? (o.add(s), r.add(s)) : (o.remove(s), r.delete(s)));
  }
  typeof o.commit == "function" && o.commit();
}), en = document.$blockingElements;
class ne extends Mi {
  constructor() {
    super(...arguments), this.hideActions = !1, this.stacked = !1, this.heading = "", this.scrimClickAction = "close", this.escapeKeyAction = "close", this.open = !1, this.defaultAction = "close", this.actionAttribute = "dialogAction", this.initialFocusAttribute = "dialogInitialFocus", this.mdcFoundationClass = Ya, this.boundLayout = null, this.boundHandleClick = null, this.boundHandleKeydown = null, this.boundHandleDocumentKeydown = null;
  }
  get primaryButton() {
    let e = this.primarySlot.assignedNodes();
    e = e.filter((n) => n instanceof HTMLElement);
    const t = e[0];
    return t || null;
  }
  emitNotification(e, t) {
    const n = { detail: t ? { action: t } : {} }, r = new CustomEvent(e, n);
    this.dispatchEvent(r);
  }
  getInitialFocusEl() {
    const e = `[${this.initialFocusAttribute}]`, t = this.querySelector(e);
    if (t)
      return t;
    const r = this.primarySlot.assignedNodes({ flatten: !0 }), o = this.searchNodeTreesForAttribute(r, this.initialFocusAttribute);
    if (o)
      return o;
    const a = this.secondarySlot.assignedNodes({ flatten: !0 }), d = this.searchNodeTreesForAttribute(a, this.initialFocusAttribute);
    if (d)
      return d;
    const u = this.contentSlot.assignedNodes({ flatten: !0 });
    return this.searchNodeTreesForAttribute(u, this.initialFocusAttribute);
  }
  searchNodeTreesForAttribute(e, t) {
    for (const n of e)
      if (n instanceof HTMLElement) {
        if (n.hasAttribute(t))
          return n;
        {
          const r = n.querySelector(`[${t}]`);
          if (r)
            return r;
        }
      }
    return null;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, es(this.mdcRoot)), { addBodyClass: () => document.body.style.overflow = "hidden", removeBodyClass: () => document.body.style.overflow = "", areButtonsStacked: () => this.stacked, clickDefaultButton: () => {
      const e = this.primaryButton;
      e && e.click();
    }, eventTargetMatches: (e, t) => e ? Zo(e, t) : !1, getActionFromEvent: (e) => {
      if (!e.target)
        return "";
      const t = Qa(e.target, `[${this.actionAttribute}]`);
      return t && t.getAttribute(this.actionAttribute);
    }, getInitialFocusEl: () => this.getInitialFocusEl(), isContentScrollable: () => {
      const e = this.contentElement;
      return e ? e.scrollHeight > e.offsetHeight : !1;
    }, notifyClosed: (e) => this.emitNotification("closed", e), notifyClosing: (e) => {
      this.closingDueToDisconnect || (this.open = !1), this.emitNotification("closing", e);
    }, notifyOpened: () => this.emitNotification("opened"), notifyOpening: () => {
      this.open = !0, this.emitNotification("opening");
    }, reverseButtons: () => {
    }, releaseFocus: () => {
      en.remove(this);
    }, trapFocus: (e) => {
      en.push(this), e && e.focus();
    } });
  }
  render() {
    const e = {
      [re.STACKED]: this.stacked
    };
    let t = j``;
    this.heading && (t = this.renderHeading());
    const n = {
      "mdc-dialog__actions": !this.hideActions
    };
    return j`
    <div class="mdc-dialog ${ue(e)}"
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
              class="${ue(n)}">
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
    </div>`;
  }
  renderHeading() {
    return j`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
  }
  firstUpdated() {
    super.firstUpdated(), this.mdcFoundation.setAutoStackButtons(!0);
  }
  connectedCallback() {
    super.connectedCallback(), this.open && this.mdcFoundation && !this.mdcFoundation.isOpen() && (this.setEventListeners(), this.mdcFoundation.open());
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.open && this.mdcFoundation && (this.removeEventListeners(), this.closingDueToDisconnect = !0, this.mdcFoundation.close(this.currentAction || this.defaultAction), this.closingDueToDisconnect = !1, this.currentAction = void 0, en.remove(this));
  }
  forceLayout() {
    this.mdcFoundation.layout();
  }
  focus() {
    const e = this.getInitialFocusEl();
    e && e.focus();
  }
  blur() {
    if (!this.shadowRoot)
      return;
    const e = this.shadowRoot.activeElement;
    if (e)
      e instanceof HTMLElement && e.blur();
    else {
      const t = this.getRootNode(), n = t instanceof Document ? t.activeElement : null;
      n instanceof HTMLElement && n.blur();
    }
  }
  setEventListeners() {
    this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation), this.boundLayout = () => {
      this.open && this.mdcFoundation.layout.bind(this.mdcFoundation);
    }, this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation), this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation), this.mdcRoot.addEventListener("click", this.boundHandleClick), window.addEventListener("resize", this.boundLayout, ui()), window.addEventListener("orientationchange", this.boundLayout, ui()), this.mdcRoot.addEventListener("keydown", this.boundHandleKeydown, ui()), document.addEventListener("keydown", this.boundHandleDocumentKeydown, ui());
  }
  removeEventListeners() {
    this.boundHandleClick && this.mdcRoot.removeEventListener("click", this.boundHandleClick), this.boundLayout && (window.removeEventListener("resize", this.boundLayout), window.removeEventListener("orientationchange", this.boundLayout)), this.boundHandleKeydown && this.mdcRoot.removeEventListener("keydown", this.boundHandleKeydown), this.boundHandleDocumentKeydown && this.mdcRoot.removeEventListener("keydown", this.boundHandleDocumentKeydown);
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
b([
  Z(".mdc-dialog")
], ne.prototype, "mdcRoot", void 0);
b([
  Z('slot[name="primaryAction"]')
], ne.prototype, "primarySlot", void 0);
b([
  Z('slot[name="secondaryAction"]')
], ne.prototype, "secondarySlot", void 0);
b([
  Z("#contentSlot")
], ne.prototype, "contentSlot", void 0);
b([
  Z(".mdc-dialog__content")
], ne.prototype, "contentElement", void 0);
b([
  Z(".mdc-container")
], ne.prototype, "conatinerElement", void 0);
b([
  T({ type: Boolean })
], ne.prototype, "hideActions", void 0);
b([
  T({ type: Boolean }),
  Ot(function() {
    this.forceLayout();
  })
], ne.prototype, "stacked", void 0);
b([
  T({ type: String })
], ne.prototype, "heading", void 0);
b([
  T({ type: String }),
  Ot(function(i) {
    this.mdcFoundation.setScrimClickAction(i);
  })
], ne.prototype, "scrimClickAction", void 0);
b([
  T({ type: String }),
  Ot(function(i) {
    this.mdcFoundation.setEscapeKeyAction(i);
  })
], ne.prototype, "escapeKeyAction", void 0);
b([
  T({ type: Boolean, reflect: !0 }),
  Ot(function(i) {
    this.mdcFoundation && this.isConnected && (i ? (this.setEventListeners(), this.mdcFoundation.open()) : (this.removeEventListeners(), this.mdcFoundation.close(this.currentAction || this.defaultAction), this.currentAction = void 0));
  })
], ne.prototype, "open", void 0);
b([
  T()
], ne.prototype, "defaultAction", void 0);
b([
  T()
], ne.prototype, "actionAttribute", void 0);
b([
  T()
], ne.prototype, "initialFocusAttribute", void 0);
/**
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
*/
const td = ot`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;
let Tn = class extends ne {
};
Tn.styles = td;
Tn = b([
  rt("mwc-dialog")
], Tn);
/**
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
*/
const id = ot`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let Cn = class extends Zt {
  /** @soyTemplate */
  render() {
    return j`<slot></slot>`;
  }
};
Cn.styles = id;
Cn = b([
  rt("mwc-icon")
], Cn);
/*! *****************************************************************************
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
***************************************************************************** */
var kn = function(i, e) {
  return kn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n)
      n.hasOwnProperty(r) && (t[r] = n[r]);
  }, kn(i, e);
};
function nd(i, e) {
  kn(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ht = function() {
  return Ht = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ht.apply(this, arguments);
};
/**
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
 */
var rd = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, od = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Tr = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
function sd(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, o = n + t.left, s = r + t.top, a, d;
  if (i.type === "touchstart") {
    var l = i;
    a = l.changedTouches[0].pageX - o, d = l.changedTouches[0].pageY - s;
  } else {
    var u = i;
    a = u.pageX - o, d = u.pageY - s;
  }
  return { x: a, y: d };
}
/**
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
 */
var Cr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], kr = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], hi = [], ad = (
  /** @class */
  function(i) {
    nd(e, i);
    function e(t) {
      var n = i.call(this, Ht(Ht({}, e.defaultAdapter), t)) || this;
      return n.activationAnimationHasEnded_ = !1, n.activationTimer_ = 0, n.fgDeactivationRemovalTimer_ = 0, n.fgScale_ = "0", n.frame_ = { width: 0, height: 0 }, n.initialSize_ = 0, n.layoutFrame_ = 0, n.maxRadius_ = 0, n.unboundedCoords_ = { left: 0, top: 0 }, n.activationState_ = n.defaultActivationState_(), n.activationTimerCallback_ = function() {
        n.activationAnimationHasEnded_ = !0, n.runDeactivationUXLogicIfReady_();
      }, n.activateHandler_ = function(r) {
        return n.activate_(r);
      }, n.deactivateHandler_ = function() {
        return n.deactivate_();
      }, n.focusHandler_ = function() {
        return n.handleFocus();
      }, n.blurHandler_ = function() {
        return n.handleBlur();
      }, n.resizeHandler_ = function() {
        return n.layout();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rd;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return od;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Tr;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this, n = this.supportsPressRipple_();
      if (this.registerRootHandlers_(n), n) {
        var r = e.cssClasses, o = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(o), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal_());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple_()) {
        this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var n = e.cssClasses, r = n.ROOT, o = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(o), t.removeCssVars_();
        });
      }
      this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_();
    }, e.prototype.activate = function(t) {
      this.activate_(t);
    }, e.prototype.deactivate = function() {
      this.deactivate_();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function() {
        t.layoutInternal_(), t.layoutFrame_ = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var n = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple_ = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState_ = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers_ = function(t) {
      var n = this;
      t && (Cr.forEach(function(r) {
        n.adapter.registerInteractionHandler(r, n.activateHandler_);
      }), this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler_)), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_);
    }, e.prototype.registerDeactivationHandlers_ = function(t) {
      var n = this;
      t.type === "keydown" ? this.adapter.registerInteractionHandler("keyup", this.deactivateHandler_) : kr.forEach(function(r) {
        n.adapter.registerDocumentInteractionHandler(r, n.deactivateHandler_);
      });
    }, e.prototype.deregisterRootHandlers_ = function() {
      var t = this;
      Cr.forEach(function(n) {
        t.adapter.deregisterInteractionHandler(n, t.activateHandler_);
      }), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler_);
    }, e.prototype.deregisterDeactivationHandlers_ = function() {
      var t = this;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler_), kr.forEach(function(n) {
        t.adapter.deregisterDocumentInteractionHandler(n, t.deactivateHandler_);
      });
    }, e.prototype.removeCssVars_ = function() {
      var t = this, n = e.strings, r = Object.keys(n);
      r.forEach(function(o) {
        o.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(n[o], null);
      });
    }, e.prototype.activate_ = function(t) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState_;
        if (!r.isActivated) {
          var o = this.previousActivationEvent_, s = o && t !== void 0 && o.type !== t.type;
          if (!s) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var a = t !== void 0 && hi.length > 0 && hi.some(function(d) {
              return n.adapter.containsEventTarget(d);
            });
            if (a) {
              this.resetActivationState_();
              return;
            }
            t !== void 0 && (hi.push(t.target), this.registerDeactivationHandlers_(t)), r.wasElementMadeActive = this.checkElementMadeActive_(t), r.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame(function() {
              hi = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive_(t), r.wasElementMadeActive && n.animateActivation_()), r.wasElementMadeActive || (n.activationState_ = n.defaultActivationState_());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive_ = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation_ = function() {
      var t = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, o = n.VAR_FG_TRANSLATE_END, s = e.cssClasses, a = s.FG_DEACTIVATION, d = s.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal_();
      var u = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates_(), h = f.startPoint, p = f.endPoint;
        u = h.x + "px, " + h.y + "px", c = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(r, u), this.adapter.updateCssVariable(o, c), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer_ = setTimeout(function() {
        return t.activationTimerCallback_();
      }, l);
    }, e.prototype.getFgTranslationCoordinates_ = function() {
      var t = this.activationState_, n = t.activationEvent, r = t.wasActivatedByPointer, o;
      r ? o = sd(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      }, o = {
        x: o.x - this.initialSize_ / 2,
        y: o.y - this.initialSize_ / 2
      };
      var s = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };
      return { startPoint: o, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady_ = function() {
      var t = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState_, o = r.hasDeactivationUXRun, s = r.isActivated, a = o || !s;
      a && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer_ = setTimeout(function() {
        t.adapter.removeClass(n);
      }, Tr.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses_ = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded_ = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState_ = function() {
      var t = this;
      this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout(function() {
        return t.previousActivationEvent_ = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivate_ = function() {
      var t = this, n = this.activationState_;
      if (n.isActivated) {
        var r = Ht({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          return t.animateDeactivation_(r);
        }), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame(function() {
          t.activationState_.hasDeactivationUXRun = !0, t.animateDeactivation_(r), t.resetActivationState_();
        }));
      }
    }, e.prototype.animateDeactivation_ = function(t) {
      var n = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (n || r) && this.runDeactivationUXLogicIfReady_();
    }, e.prototype.layoutInternal_ = function() {
      var t = this;
      this.frame_ = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame_.height, this.frame_.width), r = function() {
        var s = Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius_ = this.adapter.isUnbounded() ? n : r();
      var o = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize_ = o - 1 : this.initialSize_ = o, this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_();
    }, e.prototype.updateLayoutCssVars_ = function() {
      var t = e.strings, n = t.VAR_FG_SIZE, r = t.VAR_LEFT, o = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize_ + "px"), this.adapter.updateCssVariable(s, this.fgScale_), this.adapter.isUnbounded() && (this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords_.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords_.top + "px"));
    }, e;
  }(kt)
);
const dd = ad;
/**
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
 */
const Or = /* @__PURE__ */ new WeakMap(), ld = Tt((i) => (e) => {
  if (!(e instanceof Ct) || e instanceof $i || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: n } = t.element;
  let r = Or.get(e);
  r === void 0 && (n.cssText = t.strings.join(" "), Or.set(e, r = /* @__PURE__ */ new Set())), r.forEach((o) => {
    o in i || (r.delete(o), o.indexOf("-") === -1 ? n[o] = null : n.removeProperty(o));
  });
  for (const o in i)
    r.add(o), o.indexOf("-") === -1 ? n[o] = i[o] : n.setProperty(o, i[o]);
});
class Q extends Mi {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = dd;
  }
  get isActive() {
    return (this.parentElement || this).matches(":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
            break;
        }
      },
      removeClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
            break;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      registerDocumentInteractionHandler: () => {
      },
      deregisterDocumentInteractionHandler: () => {
      },
      registerResizeHandler: () => {
      },
      deregisterResizeHandler: () => {
      },
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), n = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": t,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded
    };
    return j`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ue(n)}"
          style="${ld({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
b([
  Z(".mdc-ripple-surface")
], Q.prototype, "mdcRoot", void 0);
b([
  T({ type: Boolean })
], Q.prototype, "primary", void 0);
b([
  T({ type: Boolean })
], Q.prototype, "accent", void 0);
b([
  T({ type: Boolean })
], Q.prototype, "unbounded", void 0);
b([
  T({ type: Boolean })
], Q.prototype, "disabled", void 0);
b([
  T({ type: Boolean })
], Q.prototype, "activated", void 0);
b([
  T({ type: Boolean })
], Q.prototype, "selected", void 0);
b([
  de()
], Q.prototype, "hovering", void 0);
b([
  de()
], Q.prototype, "bgFocused", void 0);
b([
  de()
], Q.prototype, "fgActivation", void 0);
b([
  de()
], Q.prototype, "fgDeactivation", void 0);
b([
  de()
], Q.prototype, "fgScale", void 0);
b([
  de()
], Q.prototype, "fgSize", void 0);
b([
  de()
], Q.prototype, "translateStart", void 0);
b([
  de()
], Q.prototype, "translateEnd", void 0);
b([
  de()
], Q.prototype, "leftPos", void 0);
b([
  de()
], Q.prototype, "topPos", void 0);
/**
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
*/
const cd = ot`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;
let On = class extends Q {
};
On.styles = cd;
On = b([
  rt("mwc-ripple")
], On);
/**
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
*/
class ud {
  constructor(e) {
    this.startPress = (t) => {
      e().then((n) => {
        n && n.startPress(t);
      });
    }, this.endPress = () => {
      e().then((t) => {
        t && t.endPress();
      });
    }, this.startFocus = () => {
      e().then((t) => {
        t && t.startFocus();
      });
    }, this.endFocus = () => {
      e().then((t) => {
        t && t.endFocus();
      });
    }, this.startHover = () => {
      e().then((t) => {
        t && t.startHover();
      });
    }, this.endHover = () => {
      e().then((t) => {
        t && t.endHover();
      });
    };
  }
}
class oe extends Zt {
  constructor() {
    super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new ud(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderOverlay() {
    return j``;
  }
  /** @soyTemplate */
  renderRipple() {
    const e = this.raised || this.unelevated;
    return this.shouldRenderRipple ? j`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  createRenderRoot() {
    return this.attachShadow({ mode: "open", delegatesFocus: !0 });
  }
  focus() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.startFocus(), e.focus());
  }
  blur() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.endFocus(), e.blur());
  }
  /** @soyTemplate classMap */
  getRenderClasses() {
    return ue({
      "mdc-button--raised": this.raised,
      "mdc-button--unelevated": this.unelevated,
      "mdc-button--outlined": this.outlined,
      "mdc-button--dense": this.dense
    });
  }
  /**
   * @soyTemplate
   * @soyAttributes buttonAttributes: #button
   * @soyClasses buttonClasses: #button
   */
  render() {
    return j`
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
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
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${ue({
      flex: this.expandContent
    })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
  }
  /** @soyTemplate */
  renderIcon() {
    return j`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(e) {
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}
b([
  T({ type: Boolean, reflect: !0 })
], oe.prototype, "raised", void 0);
b([
  T({ type: Boolean, reflect: !0 })
], oe.prototype, "unelevated", void 0);
b([
  T({ type: Boolean, reflect: !0 })
], oe.prototype, "outlined", void 0);
b([
  T({ type: Boolean })
], oe.prototype, "dense", void 0);
b([
  T({ type: Boolean, reflect: !0 })
], oe.prototype, "disabled", void 0);
b([
  T({ type: Boolean, attribute: "trailingicon" })
], oe.prototype, "trailingIcon", void 0);
b([
  T({ type: Boolean, reflect: !0 })
], oe.prototype, "fullwidth", void 0);
b([
  T({ type: String })
], oe.prototype, "icon", void 0);
b([
  T({ type: String })
], oe.prototype, "label", void 0);
b([
  T({ type: Boolean })
], oe.prototype, "expandContent", void 0);
b([
  Z("#button")
], oe.prototype, "buttonElement", void 0);
b([
  za("mwc-ripple")
], oe.prototype, "ripple", void 0);
b([
  de()
], oe.prototype, "shouldRenderRipple", void 0);
b([
  Qo({ passive: !0 })
], oe.prototype, "handleRippleActivate", null);
/**
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
*/
const hd = ot`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color: #fff;--mdc-ripple-focus-opacity: 0.24;--mdc-ripple-hover-opacity: 0.08;--mdc-ripple-press-opacity: 0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
let Rn = class extends oe {
};
Rn.styles = hd;
Rn = b([
  rt("mwc-button")
], Rn);
var U = /* @__PURE__ */ ((i) => (i[i.List = 0] = "List", i[i.Create = 1] = "Create", i[i.LoginForm = 2] = "LoginForm", i[i.SignupForm = 3] = "SignupForm", i[i.Account = 4] = "Account", i[i.AuthenticationMenu = 5] = "AuthenticationMenu", i))(U || {});
/**
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
 */
/**
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
 */
const is = function(i) {
  const e = [];
  let t = 0;
  for (let n = 0; n < i.length; n++) {
    let r = i.charCodeAt(n);
    r < 128 ? e[t++] = r : r < 2048 ? (e[t++] = r >> 6 | 192, e[t++] = r & 63 | 128) : (r & 64512) === 55296 && n + 1 < i.length && (i.charCodeAt(n + 1) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (i.charCodeAt(++n) & 1023), e[t++] = r >> 18 | 240, e[t++] = r >> 12 & 63 | 128, e[t++] = r >> 6 & 63 | 128, e[t++] = r & 63 | 128) : (e[t++] = r >> 12 | 224, e[t++] = r >> 6 & 63 | 128, e[t++] = r & 63 | 128);
  }
  return e;
}, fd = function(i) {
  const e = [];
  let t = 0, n = 0;
  for (; t < i.length; ) {
    const r = i[t++];
    if (r < 128)
      e[n++] = String.fromCharCode(r);
    else if (r > 191 && r < 224) {
      const o = i[t++];
      e[n++] = String.fromCharCode((r & 31) << 6 | o & 63);
    } else if (r > 239 && r < 365) {
      const o = i[t++], s = i[t++], a = i[t++], d = ((r & 7) << 18 | (o & 63) << 12 | (s & 63) << 6 | a & 63) - 65536;
      e[n++] = String.fromCharCode(55296 + (d >> 10)), e[n++] = String.fromCharCode(56320 + (d & 1023));
    } else {
      const o = i[t++], s = i[t++];
      e[n++] = String.fromCharCode((r & 15) << 12 | (o & 63) << 6 | s & 63);
    }
  }
  return e.join("");
}, ns = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(i, e) {
    if (!Array.isArray(i))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [];
    for (let r = 0; r < i.length; r += 3) {
      const o = i[r], s = r + 1 < i.length, a = s ? i[r + 1] : 0, d = r + 2 < i.length, l = d ? i[r + 2] : 0, u = o >> 2, c = (o & 3) << 4 | a >> 4;
      let f = (a & 15) << 2 | l >> 6, h = l & 63;
      d || (h = 64, s || (f = 64)), n.push(t[u], t[c], t[f], t[h]);
    }
    return n.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(i, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(i) : this.encodeByteArray(is(i), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(i, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(i) : fd(this.decodeStringToByteArray(i, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(i, e) {
    this.init_();
    const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [];
    for (let r = 0; r < i.length; ) {
      const o = t[i.charAt(r++)], a = r < i.length ? t[i.charAt(r)] : 0;
      ++r;
      const l = r < i.length ? t[i.charAt(r)] : 64;
      ++r;
      const c = r < i.length ? t[i.charAt(r)] : 64;
      if (++r, o == null || a == null || l == null || c == null)
        throw Error();
      const f = o << 2 | a >> 4;
      if (n.push(f), l !== 64) {
        const h = a << 4 & 240 | l >> 2;
        if (n.push(h), c !== 64) {
          const p = l << 6 & 192 | c;
          n.push(p);
        }
      }
    }
    return n;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let i = 0; i < this.ENCODED_VALS.length; i++)
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i), this.charToByteMap_[this.byteToCharMap_[i]] = i, this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i, i >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i);
    }
  }
}, pd = function(i) {
  const e = is(i);
  return ns.encodeByteArray(e, !0);
}, rs = function(i) {
  return pd(i).replace(/\./g, "");
}, md = function(i) {
  try {
    return ns.decodeString(i, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
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
 */
class gd {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (t, n) => {
      t ? this.reject(t) : this.resolve(n), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(t) : e(t, n));
    };
  }
}
/**
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
 */
function ie() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function _d() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie());
}
function bd() {
  const i = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof i == "object" && i.id !== void 0;
}
function yd() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function vd() {
  const i = ie();
  return i.indexOf("MSIE ") >= 0 || i.indexOf("Trident/") >= 0;
}
function xd() {
  return typeof indexedDB == "object";
}
function wd() {
  return new Promise((i, e) => {
    try {
      let t = !0;
      const n = "validate-browser-context-for-indexeddb-analytics-module", r = self.indexedDB.open(n);
      r.onsuccess = () => {
        r.result.close(), t || self.indexedDB.deleteDatabase(n), i(!0);
      }, r.onupgradeneeded = () => {
        t = !1;
      }, r.onerror = () => {
        var o;
        e(((o = r.error) === null || o === void 0 ? void 0 : o.message) || "");
      };
    } catch (t) {
      e(t);
    }
  });
}
/**
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
 */
const Ed = "FirebaseError";
class Pe extends Error {
  constructor(e, t, n) {
    super(t), this.code = e, this.customData = n, this.name = Ed, Object.setPrototypeOf(this, Pe.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ei.prototype.create);
  }
}
class ei {
  constructor(e, t, n) {
    this.service = e, this.serviceName = t, this.errors = n;
  }
  create(e, ...t) {
    const n = t[0] || {}, r = `${this.service}/${e}`, o = this.errors[e], s = o ? Ad(o, n) : "Error", a = `${this.serviceName}: ${s} (${r}).`;
    return new Pe(r, a, n);
  }
}
function Ad(i, e) {
  return i.replace(Id, (t, n) => {
    const r = e[n];
    return r != null ? String(r) : `<${n}?>`;
  });
}
const Id = /\{\$([^}]+)}/g;
function Sd(i) {
  for (const e in i)
    if (Object.prototype.hasOwnProperty.call(i, e))
      return !1;
  return !0;
}
function wi(i, e) {
  if (i === e)
    return !0;
  const t = Object.keys(i), n = Object.keys(e);
  for (const r of t) {
    if (!n.includes(r))
      return !1;
    const o = i[r], s = e[r];
    if (Rr(o) && Rr(s)) {
      if (!wi(o, s))
        return !1;
    } else if (o !== s)
      return !1;
  }
  for (const r of n)
    if (!t.includes(r))
      return !1;
  return !0;
}
function Rr(i) {
  return i !== null && typeof i == "object";
}
/**
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
 */
function ti(i) {
  const e = [];
  for (const [t, n] of Object.entries(i))
    Array.isArray(n) ? n.forEach((r) => {
      e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
  return e.length ? "&" + e.join("&") : "";
}
function $t(i) {
  const e = {};
  return i.replace(/^\?/, "").split("&").forEach((n) => {
    if (n) {
      const [r, o] = n.split("=");
      e[decodeURIComponent(r)] = decodeURIComponent(o);
    }
  }), e;
}
function Mt(i) {
  const e = i.indexOf("?");
  if (!e)
    return "";
  const t = i.indexOf("#", e);
  return i.substring(e, t > 0 ? t : void 0);
}
function Td(i, e) {
  const t = new Cd(i, e);
  return t.subscribe.bind(t);
}
class Cd {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, t) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
      e(this);
    }).catch((n) => {
      this.error(n);
    });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  subscribe(e, t, n) {
    let r;
    if (e === void 0 && t === void 0 && n === void 0)
      throw new Error("Missing Observer.");
    kd(e, [
      "next",
      "error",
      "complete"
    ]) ? r = e : r = {
      next: e,
      error: t,
      complete: n
    }, r.next === void 0 && (r.next = tn), r.error === void 0 && (r.error = tn), r.complete === void 0 && (r.complete = tn);
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? r.error(this.finalError) : r.complete();
      } catch {
      }
    }), this.observers.push(r), o;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++)
        this.sendOne(t, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (n) {
          typeof console < "u" && console.error && console.error(n);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function kd(i, e) {
  if (typeof i != "object" || i === null)
    return !1;
  for (const t of e)
    if (t in i && typeof i[t] == "function")
      return !0;
  return !1;
}
function tn() {
}
/**
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
 */
function Ie(i) {
  return i && i._delegate ? i._delegate : i;
}
class Qe {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, t, n) {
    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
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
 */
const Xe = "[DEFAULT]";
/**
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
 */
class Od {
  constructor(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const n = new gd();
      if (this.instancesDeferred.set(t, n), this.isInitialized(t) || this.shouldAutoInitialize())
        try {
          const r = this.getOrInitializeService({
            instanceIdentifier: t
          });
          r && n.resolve(r);
        } catch {
        }
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const n = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), r = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n
        });
      } catch (o) {
        if (r)
          return null;
        throw o;
      }
    else {
      if (r)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (Nd(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Xe });
        } catch {
        }
      for (const [t, n] of this.instancesDeferred.entries()) {
        const r = this.normalizeInstanceIdentifier(t);
        try {
          const o = this.getOrInitializeService({
            instanceIdentifier: r
          });
          n.resolve(o);
        } catch {
        }
      }
    }
  }
  clearInstance(e = Xe) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => "_delete" in t).map((t) => t._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Xe) {
    return this.instances.has(e);
  }
  getOptions(e = Xe) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(n))
      throw Error(`${this.name}(${n}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const r = this.getOrInitializeService({
      instanceIdentifier: n,
      options: t
    });
    for (const [o, s] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(o);
      n === a && s.resolve(r);
    }
    return r;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, t) {
    var n;
    const r = this.normalizeInstanceIdentifier(t), o = (n = this.onInitCallbacks.get(r)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set();
    o.add(e), this.onInitCallbacks.set(r, o);
    const s = this.instances.get(r);
    return s && e(s, r), () => {
      o.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, t) {
    const n = this.onInitCallbacks.get(t);
    if (n)
      for (const r of n)
        try {
          r(e, t);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let n = this.instances.get(e);
    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
      instanceIdentifier: Rd(e),
      options: t
    }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, n);
      } catch {
      }
    return n || null;
  }
  normalizeInstanceIdentifier(e = Xe) {
    return this.component ? this.component.multipleInstances ? e : Xe : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Rd(i) {
  return i === Xe ? void 0 : i;
}
function Nd(i) {
  return i.instantiationMode === "EAGER";
}
/**
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
 */
class Ld {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const t = new Od(e, this);
    return this.providers.set(e, t), t;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
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
 */
var V;
(function(i) {
  i[i.DEBUG = 0] = "DEBUG", i[i.VERBOSE = 1] = "VERBOSE", i[i.INFO = 2] = "INFO", i[i.WARN = 3] = "WARN", i[i.ERROR = 4] = "ERROR", i[i.SILENT = 5] = "SILENT";
})(V || (V = {}));
const Pd = {
  debug: V.DEBUG,
  verbose: V.VERBOSE,
  info: V.INFO,
  warn: V.WARN,
  error: V.ERROR,
  silent: V.SILENT
}, Dd = V.INFO, $d = {
  [V.DEBUG]: "log",
  [V.VERBOSE]: "log",
  [V.INFO]: "info",
  [V.WARN]: "warn",
  [V.ERROR]: "error"
}, Md = (i, e, ...t) => {
  if (e < i.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), r = $d[e];
  if (r)
    console[r](`[${n}]  ${i.name}:`, ...t);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class os {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Dd, this._logHandler = Md, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in V))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Pd[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, V.DEBUG, ...e), this._logHandler(this, V.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, V.VERBOSE, ...e), this._logHandler(this, V.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, V.INFO, ...e), this._logHandler(this, V.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, V.WARN, ...e), this._logHandler(this, V.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, V.ERROR, ...e), this._logHandler(this, V.ERROR, ...e);
  }
}
const Fd = (i, e) => e.some((t) => i instanceof t);
let Nr, Lr;
function Ud() {
  return Nr || (Nr = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Hd() {
  return Lr || (Lr = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const ss = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap();
function Bd(i) {
  const e = new Promise((t, n) => {
    const r = () => {
      i.removeEventListener("success", o), i.removeEventListener("error", s);
    }, o = () => {
      t(ze(i.result)), r();
    }, s = () => {
      n(i.error), r();
    };
    i.addEventListener("success", o), i.addEventListener("error", s);
  });
  return e.then((t) => {
    t instanceof IDBCursor && ss.set(t, i);
  }).catch(() => {
  }), ir.set(e, i), e;
}
function Vd(i) {
  if (Nn.has(i))
    return;
  const e = new Promise((t, n) => {
    const r = () => {
      i.removeEventListener("complete", o), i.removeEventListener("error", s), i.removeEventListener("abort", s);
    }, o = () => {
      t(), r();
    }, s = () => {
      n(i.error || new DOMException("AbortError", "AbortError")), r();
    };
    i.addEventListener("complete", o), i.addEventListener("error", s), i.addEventListener("abort", s);
  });
  Nn.set(i, e);
}
let Ln = {
  get(i, e, t) {
    if (i instanceof IDBTransaction) {
      if (e === "done")
        return Nn.get(i);
      if (e === "objectStoreNames")
        return i.objectStoreNames || as.get(i);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return ze(i[e]);
  },
  set(i, e, t) {
    return i[e] = t, !0;
  },
  has(i, e) {
    return i instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in i;
  }
};
function zd(i) {
  Ln = i(Ln);
}
function jd(i) {
  return i === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const n = i.call(rn(this), e, ...t);
    return as.set(n, e.sort ? e.sort() : [e]), ze(n);
  } : Hd().includes(i) ? function(...e) {
    return i.apply(rn(this), e), ze(ss.get(this));
  } : function(...e) {
    return ze(i.apply(rn(this), e));
  };
}
function Wd(i) {
  return typeof i == "function" ? jd(i) : (i instanceof IDBTransaction && Vd(i), Fd(i, Ud()) ? new Proxy(i, Ln) : i);
}
function ze(i) {
  if (i instanceof IDBRequest)
    return Bd(i);
  if (nn.has(i))
    return nn.get(i);
  const e = Wd(i);
  return e !== i && (nn.set(i, e), ir.set(e, i)), e;
}
const rn = (i) => ir.get(i);
function Gd(i, e, { blocked: t, upgrade: n, blocking: r, terminated: o } = {}) {
  const s = indexedDB.open(i, e), a = ze(s);
  return n && s.addEventListener("upgradeneeded", (d) => {
    n(ze(s.result), d.oldVersion, d.newVersion, ze(s.transaction));
  }), t && s.addEventListener("blocked", () => t()), a.then((d) => {
    o && d.addEventListener("close", () => o()), r && d.addEventListener("versionchange", () => r());
  }).catch(() => {
  }), a;
}
const qd = ["get", "getKey", "getAll", "getAllKeys", "count"], Kd = ["put", "add", "delete", "clear"], on = /* @__PURE__ */ new Map();
function Pr(i, e) {
  if (!(i instanceof IDBDatabase && !(e in i) && typeof e == "string"))
    return;
  if (on.get(e))
    return on.get(e);
  const t = e.replace(/FromIndex$/, ""), n = e !== t, r = Kd.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (n ? IDBIndex : IDBObjectStore).prototype) || !(r || qd.includes(t))
  )
    return;
  const o = async function(s, ...a) {
    const d = this.transaction(s, r ? "readwrite" : "readonly");
    let l = d.store;
    return n && (l = l.index(a.shift())), (await Promise.all([
      l[t](...a),
      r && d.done
    ]))[0];
  };
  return on.set(e, o), o;
}
zd((i) => ({
  ...i,
  get: (e, t, n) => Pr(e, t) || i.get(e, t, n),
  has: (e, t) => !!Pr(e, t) || i.has(e, t)
}));
/**
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
 */
class Xd {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((t) => {
      if (Yd(t)) {
        const n = t.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((t) => t).join(" ");
  }
}
function Yd(i) {
  const e = i.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Pn = "@firebase/app", Dr = "0.7.30";
/**
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
 */
const Ze = new os("@firebase/app"), Jd = "@firebase/app-compat", Qd = "@firebase/analytics-compat", Zd = "@firebase/analytics", el = "@firebase/app-check-compat", tl = "@firebase/app-check", il = "@firebase/auth", nl = "@firebase/auth-compat", rl = "@firebase/database", ol = "@firebase/database-compat", sl = "@firebase/functions", al = "@firebase/functions-compat", dl = "@firebase/installations", ll = "@firebase/installations-compat", cl = "@firebase/messaging", ul = "@firebase/messaging-compat", hl = "@firebase/performance", fl = "@firebase/performance-compat", pl = "@firebase/remote-config", ml = "@firebase/remote-config-compat", gl = "@firebase/storage", _l = "@firebase/storage-compat", bl = "@firebase/firestore", yl = "@firebase/firestore-compat", vl = "firebase", xl = "9.9.2";
/**
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
 */
const ds = "[DEFAULT]", wl = {
  [Pn]: "fire-core",
  [Jd]: "fire-core-compat",
  [Zd]: "fire-analytics",
  [Qd]: "fire-analytics-compat",
  [tl]: "fire-app-check",
  [el]: "fire-app-check-compat",
  [il]: "fire-auth",
  [nl]: "fire-auth-compat",
  [rl]: "fire-rtdb",
  [ol]: "fire-rtdb-compat",
  [sl]: "fire-fn",
  [al]: "fire-fn-compat",
  [dl]: "fire-iid",
  [ll]: "fire-iid-compat",
  [cl]: "fire-fcm",
  [ul]: "fire-fcm-compat",
  [hl]: "fire-perf",
  [fl]: "fire-perf-compat",
  [pl]: "fire-rc",
  [ml]: "fire-rc-compat",
  [gl]: "fire-gcs",
  [_l]: "fire-gcs-compat",
  [bl]: "fire-fst",
  [yl]: "fire-fst-compat",
  "fire-js": "fire-js",
  [vl]: "fire-js-all"
};
/**
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
 */
const Ei = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map();
function El(i, e) {
  try {
    i.container.addComponent(e);
  } catch (t) {
    Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`, t);
  }
}
function xt(i) {
  const e = i.name;
  if (Dn.has(e))
    return Ze.debug(`There were multiple attempts to register component ${e}.`), !1;
  Dn.set(e, i);
  for (const t of Ei.values())
    El(t, i);
  return !0;
}
function nr(i, e) {
  const t = i.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), i.container.getProvider(e);
}
/**
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
 */
const Al = {
  [
    "no-app"
    /* NO_APP */
  ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  [
    "bad-app-name"
    /* BAD_APP_NAME */
  ]: "Illegal App name: '{$appName}",
  [
    "duplicate-app"
    /* DUPLICATE_APP */
  ]: "Firebase App named '{$appName}' already exists with different options or config",
  [
    "app-deleted"
    /* APP_DELETED */
  ]: "Firebase App named '{$appName}' already deleted",
  [
    "invalid-app-argument"
    /* INVALID_APP_ARGUMENT */
  ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  [
    "invalid-log-argument"
    /* INVALID_LOG_ARGUMENT */
  ]: "First argument to `onLog` must be null or a function.",
  [
    "idb-open"
    /* IDB_OPEN */
  ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-get"
    /* IDB_GET */
  ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-set"
    /* IDB_WRITE */
  ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-delete"
    /* IDB_DELETE */
  ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}, et = new ei("app", "Firebase", Al);
/**
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
 */
class Il {
  constructor(e, t, n) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new Qe(
      "app",
      () => this,
      "PUBLIC"
      /* PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw et.create("app-deleted", { appName: this._name });
  }
}
/**
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
 */
const Fi = xl;
function Sl(i, e = {}) {
  typeof e != "object" && (e = { name: e });
  const t = Object.assign({ name: ds, automaticDataCollectionEnabled: !1 }, e), n = t.name;
  if (typeof n != "string" || !n)
    throw et.create("bad-app-name", {
      appName: String(n)
    });
  const r = Ei.get(n);
  if (r) {
    if (wi(i, r.options) && wi(t, r.config))
      return r;
    throw et.create("duplicate-app", { appName: n });
  }
  const o = new Ld(n);
  for (const a of Dn.values())
    o.addComponent(a);
  const s = new Il(i, t, o);
  return Ei.set(n, s), s;
}
function ls(i = ds) {
  const e = Ei.get(i);
  if (!e)
    throw et.create("no-app", { appName: i });
  return e;
}
function je(i, e, t) {
  var n;
  let r = (n = wl[i]) !== null && n !== void 0 ? n : i;
  t && (r += `-${t}`);
  const o = r.match(/\s|\//), s = e.match(/\s|\//);
  if (o || s) {
    const a = [
      `Unable to register library "${r}" with version "${e}":`
    ];
    o && a.push(`library name "${r}" contains illegal characters (whitespace or "/")`), o && s && a.push("and"), s && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`), Ze.warn(a.join(" "));
    return;
  }
  xt(new Qe(
    `${r}-version`,
    () => ({ library: r, version: e }),
    "VERSION"
    /* VERSION */
  ));
}
/**
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
 */
const Tl = "firebase-heartbeat-database", Cl = 1, Gt = "firebase-heartbeat-store";
let sn = null;
function cs() {
  return sn || (sn = Gd(Tl, Cl, {
    upgrade: (i, e) => {
      switch (e) {
        case 0:
          i.createObjectStore(Gt);
      }
    }
  }).catch((i) => {
    throw et.create("idb-open", {
      originalErrorMessage: i.message
    });
  })), sn;
}
async function kl(i) {
  var e;
  try {
    return (await cs()).transaction(Gt).objectStore(Gt).get(us(i));
  } catch (t) {
    if (t instanceof Pe)
      Ze.warn(t.message);
    else {
      const n = et.create("idb-get", {
        originalErrorMessage: (e = t) === null || e === void 0 ? void 0 : e.message
      });
      Ze.warn(n.message);
    }
  }
}
async function $r(i, e) {
  var t;
  try {
    const r = (await cs()).transaction(Gt, "readwrite");
    return await r.objectStore(Gt).put(e, us(i)), r.done;
  } catch (n) {
    if (n instanceof Pe)
      Ze.warn(n.message);
    else {
      const r = et.create("idb-set", {
        originalErrorMessage: (t = n) === null || t === void 0 ? void 0 : t.message
      });
      Ze.warn(r.message);
    }
  }
}
function us(i) {
  return `${i.name}!${i.options.appId}`;
}
/**
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
 */
const Ol = 1024, Rl = 30 * 24 * 60 * 60 * 1e3;
class Nl {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const t = this.container.getProvider("app").getImmediate();
    this._storage = new Pl(t), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), n = Mr();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === n || this._heartbeatsCache.heartbeats.some((r) => r.date === n)))
      return this._heartbeatsCache.heartbeats.push({ date: n, agent: t }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((r) => {
        const o = new Date(r.date).valueOf();
        return Date.now() - o <= Rl;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const e = Mr(), { heartbeatsToSend: t, unsentEntries: n } = Ll(this._heartbeatsCache.heartbeats), r = rs(JSON.stringify({ version: 2, heartbeats: t }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r;
  }
}
function Mr() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Ll(i, e = Ol) {
  const t = [];
  let n = i.slice();
  for (const r of i) {
    const o = t.find((s) => s.agent === r.agent);
    if (o) {
      if (o.dates.push(r.date), Fr(t) > e) {
        o.dates.pop();
        break;
      }
    } else if (t.push({
      agent: r.agent,
      dates: [r.date]
    }), Fr(t) > e) {
      t.pop();
      break;
    }
    n = n.slice(1);
  }
  return {
    heartbeatsToSend: t,
    unsentEntries: n
  };
}
class Pl {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return xd() ? wd().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await kl(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return $r(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : r.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return $r(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : r.lastSentHeartbeatDate,
        heartbeats: [
          ...r.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function Fr(i) {
  return rs(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: i })
  ).length;
}
/**
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
 */
function Dl(i) {
  xt(new Qe(
    "platform-logger",
    (e) => new Xd(e),
    "PRIVATE"
    /* PRIVATE */
  )), xt(new Qe(
    "heartbeat",
    (e) => new Nl(e),
    "PRIVATE"
    /* PRIVATE */
  )), je(Pn, Dr, i), je(Pn, Dr, "esm2017"), je("fire-js", "");
}
Dl("");
/**
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
 */
const $l = "type.googleapis.com/google.protobuf.Int64Value", Ml = "type.googleapis.com/google.protobuf.UInt64Value";
function hs(i, e) {
  const t = {};
  for (const n in i)
    i.hasOwnProperty(n) && (t[n] = e(i[n]));
  return t;
}
function $n(i) {
  if (i == null)
    return null;
  if (i instanceof Number && (i = i.valueOf()), typeof i == "number" && isFinite(i) || i === !0 || i === !1 || Object.prototype.toString.call(i) === "[object String]")
    return i;
  if (i instanceof Date)
    return i.toISOString();
  if (Array.isArray(i))
    return i.map((e) => $n(e));
  if (typeof i == "function" || typeof i == "object")
    return hs(i, (e) => $n(e));
  throw new Error("Data cannot be encoded in JSON: " + i);
}
function Ai(i) {
  if (i == null)
    return i;
  if (i["@type"])
    switch (i["@type"]) {
      case $l:
      case Ml: {
        const e = Number(i.value);
        if (isNaN(e))
          throw new Error("Data cannot be decoded from JSON: " + i);
        return e;
      }
      default:
        throw new Error("Data cannot be decoded from JSON: " + i);
    }
  return Array.isArray(i) ? i.map((e) => Ai(e)) : typeof i == "function" || typeof i == "object" ? hs(i, (e) => Ai(e)) : i;
}
/**
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
 */
const rr = "functions";
/**
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
 */
const Ur = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
class _t extends Pe {
  constructor(e, t, n) {
    super(`${rr}/${e}`, t || ""), this.details = n;
  }
}
function Fl(i) {
  if (i >= 200 && i < 300)
    return "ok";
  switch (i) {
    case 0:
      return "internal";
    case 400:
      return "invalid-argument";
    case 401:
      return "unauthenticated";
    case 403:
      return "permission-denied";
    case 404:
      return "not-found";
    case 409:
      return "aborted";
    case 429:
      return "resource-exhausted";
    case 499:
      return "cancelled";
    case 500:
      return "internal";
    case 501:
      return "unimplemented";
    case 503:
      return "unavailable";
    case 504:
      return "deadline-exceeded";
  }
  return "unknown";
}
function Ul(i, e) {
  let t = Fl(i), n = t, r;
  try {
    const o = e && e.error;
    if (o) {
      const s = o.status;
      if (typeof s == "string") {
        if (!Ur[s])
          return new _t("internal", "internal");
        t = Ur[s], n = s;
      }
      const a = o.message;
      typeof a == "string" && (n = a), r = o.details, r !== void 0 && (r = Ai(r));
    }
  } catch {
  }
  return t === "ok" ? null : new _t(t, n, r);
}
/**
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
 */
class Hl {
  constructor(e, t, n) {
    this.auth = null, this.messaging = null, this.appCheck = null, this.auth = e.getImmediate({ optional: !0 }), this.messaging = t.getImmediate({
      optional: !0
    }), this.auth || e.get().then((r) => this.auth = r, () => {
    }), this.messaging || t.get().then((r) => this.messaging = r, () => {
    }), this.appCheck || n.get().then((r) => this.appCheck = r, () => {
    });
  }
  async getAuthToken() {
    if (this.auth)
      try {
        const e = await this.auth.getToken();
        return e == null ? void 0 : e.accessToken;
      } catch {
        return;
      }
  }
  async getMessagingToken() {
    if (!(!this.messaging || !("Notification" in self) || Notification.permission !== "granted"))
      try {
        return await this.messaging.getToken();
      } catch {
        return;
      }
  }
  async getAppCheckToken() {
    if (this.appCheck) {
      const e = await this.appCheck.getToken();
      return e.error ? null : e.token;
    }
    return null;
  }
  async getContext() {
    const e = await this.getAuthToken(), t = await this.getMessagingToken(), n = await this.getAppCheckToken();
    return { authToken: e, messagingToken: t, appCheckToken: n };
  }
}
/**
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
 */
const Mn = "us-central1";
function Bl(i) {
  let e = null;
  return {
    promise: new Promise((t, n) => {
      e = setTimeout(() => {
        n(new _t("deadline-exceeded", "deadline-exceeded"));
      }, i);
    }),
    cancel: () => {
      e && clearTimeout(e);
    }
  };
}
class Vl {
  /**
   * Creates a new Functions service for the given app.
   * @param app - The FirebaseApp to use.
   */
  constructor(e, t, n, r, o = Mn, s) {
    this.app = e, this.fetchImpl = s, this.emulatorOrigin = null, this.contextProvider = new Hl(t, n, r), this.cancelAllRequests = new Promise((a) => {
      this.deleteService = () => Promise.resolve(a());
    });
    try {
      const a = new URL(o);
      this.customDomain = a.origin, this.region = Mn;
    } catch {
      this.customDomain = null, this.region = o;
    }
  }
  _delete() {
    return this.deleteService();
  }
  /**
   * Returns the URL for a callable with the given name.
   * @param name - The name of the callable.
   * @internal
   */
  _url(e) {
    const t = this.app.options.projectId;
    return this.emulatorOrigin !== null ? `${this.emulatorOrigin}/${t}/${this.region}/${e}` : this.customDomain !== null ? `${this.customDomain}/${e}` : `https://${this.region}-${t}.cloudfunctions.net/${e}`;
  }
}
function zl(i, e, t) {
  return (n) => Wl(i, e, n, t || {});
}
async function jl(i, e, t, n) {
  t["Content-Type"] = "application/json";
  let r;
  try {
    r = await n(i, {
      method: "POST",
      body: JSON.stringify(e),
      headers: t
    });
  } catch {
    return {
      status: 0,
      json: null
    };
  }
  let o = null;
  try {
    o = await r.json();
  } catch {
  }
  return {
    status: r.status,
    json: o
  };
}
function Wl(i, e, t, n) {
  const r = i._url(e);
  return Gl(i, r, t, n);
}
async function Gl(i, e, t, n) {
  t = $n(t);
  const r = { data: t }, o = {}, s = await i.contextProvider.getContext();
  s.authToken && (o.Authorization = "Bearer " + s.authToken), s.messagingToken && (o["Firebase-Instance-ID-Token"] = s.messagingToken), s.appCheckToken !== null && (o["X-Firebase-AppCheck"] = s.appCheckToken);
  const a = n.timeout || 7e4, d = Bl(a), l = await Promise.race([
    jl(e, r, o, i.fetchImpl),
    d.promise,
    i.cancelAllRequests
  ]);
  if (d.cancel(), !l)
    throw new _t("cancelled", "Firebase Functions instance was deleted.");
  const u = Ul(l.status, l.json);
  if (u)
    throw u;
  if (!l.json)
    throw new _t("internal", "Response is not valid JSON object.");
  let c = l.json.data;
  if (typeof c > "u" && (c = l.json.result), typeof c > "u")
    throw new _t("internal", "Response is missing data field.");
  return { data: Ai(c) };
}
const Hr = "@firebase/functions", Br = "0.8.4";
/**
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
 */
const ql = "auth-internal", Kl = "app-check-internal", Xl = "messaging-internal";
function Yl(i, e) {
  const t = (n, { instanceIdentifier: r }) => {
    const o = n.getProvider("app").getImmediate(), s = n.getProvider(ql), a = n.getProvider(Xl), d = n.getProvider(Kl);
    return new Vl(o, s, a, d, r, i);
  };
  xt(new Qe(
    rr,
    t,
    "PUBLIC"
    /* PUBLIC */
  ).setMultipleInstances(!0)), je(Hr, Br, e), je(Hr, Br, "esm2017");
}
/**
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
 */
function Jl(i = ls(), e = Mn) {
  return nr(Ie(i), rr).getImmediate({
    identifier: e
  });
}
function tt(i, e, t) {
  return zl(Ie(i), e, t);
}
Yl(fetch.bind(self));
var Ql = "firebase", Zl = "9.9.2";
/**
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
 */
je(Ql, Zl, "app");
function fs() {
  return {
    [
      "dependent-sdk-initialized-before-auth"
      /* DEPENDENT_SDK_INIT_BEFORE_AUTH */
    ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const ec = fs, ps = new ei("auth", "Firebase", fs());
/**
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
 */
const Vr = new os("@firebase/auth");
function mi(i, ...e) {
  Vr.logLevel <= V.ERROR && Vr.error(`Auth (${Fi}): ${i}`, ...e);
}
/**
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
 */
function pe(i, ...e) {
  throw or(i, ...e);
}
function ve(i, ...e) {
  return or(i, ...e);
}
function tc(i, e, t) {
  const n = Object.assign(Object.assign({}, ec()), { [e]: t });
  return new ei("auth", "Firebase", n).create(e, {
    appName: i.name
  });
}
function or(i, ...e) {
  if (typeof i != "string") {
    const t = e[0], n = [...e.slice(1)];
    return n[0] && (n[0].appName = i.name), i._errorFactory.create(t, ...n);
  }
  return ps.create(i, ...e);
}
function N(i, e, ...t) {
  if (!i)
    throw or(e, ...t);
}
function Ce(i) {
  const e = "INTERNAL ASSERTION FAILED: " + i;
  throw mi(e), new Error(e);
}
function Re(i, e) {
  i || Ce(e);
}
/**
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
 */
const zr = /* @__PURE__ */ new Map();
function ke(i) {
  Re(i instanceof Function, "Expected a class definition");
  let e = zr.get(i);
  return e ? (Re(e instanceof i, "Instance stored in cache mismatched with class"), e) : (e = new i(), zr.set(i, e), e);
}
/**
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
 */
function ic(i, e) {
  const t = nr(i, "auth");
  if (t.isInitialized()) {
    const r = t.getImmediate(), o = t.getOptions();
    if (wi(o, e ?? {}))
      return r;
    pe(
      r,
      "already-initialized"
      /* ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function nc(i, e) {
  const t = (e == null ? void 0 : e.persistence) || [], n = (Array.isArray(t) ? t : [t]).map(ke);
  e != null && e.errorMap && i._updateErrorMap(e.errorMap), i._initializeWithPersistence(n, e == null ? void 0 : e.popupRedirectResolver);
}
/**
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
 */
function Fn() {
  var i;
  return typeof self < "u" && ((i = self.location) === null || i === void 0 ? void 0 : i.href) || "";
}
function rc() {
  return jr() === "http:" || jr() === "https:";
}
function jr() {
  var i;
  return typeof self < "u" && ((i = self.location) === null || i === void 0 ? void 0 : i.protocol) || null;
}
/**
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
 */
function oc() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (rc() || bd() || "connection" in navigator) ? navigator.onLine : !0;
}
function sc() {
  if (typeof navigator > "u")
    return null;
  const i = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    i.languages && i.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    i.language || // Couldn't determine language.
    null
  );
}
/**
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
 */
class ii {
  constructor(e, t) {
    this.shortDelay = e, this.longDelay = t, Re(t > e, "Short delay should be less than long delay!"), this.isMobile = _d() || yd();
  }
  get() {
    return oc() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
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
 */
function sr(i, e) {
  Re(i.emulator, "Emulator should always be set here");
  const { url: t } = i.emulator;
  return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t;
}
/**
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
 */
class ms {
  static initialize(e, t, n) {
    this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    Ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    Ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    Ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
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
 */
const ac = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "internal-error",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
};
/**
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
 */
const dc = new ii(3e4, 6e4);
function ni(i, e) {
  return i.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: i.tenantId }) : e;
}
async function Rt(i, e, t, n, r = {}) {
  return gs(i, r, async () => {
    let o = {}, s = {};
    n && (e === "GET" ? s = n : o = {
      body: JSON.stringify(n)
    });
    const a = ti(Object.assign({ key: i.config.apiKey }, s)).slice(1), d = await i._getAdditionalHeaders();
    return d[
      "Content-Type"
      /* CONTENT_TYPE */
    ] = "application/json", i.languageCode && (d[
      "X-Firebase-Locale"
      /* X_FIREBASE_LOCALE */
    ] = i.languageCode), ms.fetch()(_s(i, i.config.apiHost, t, a), Object.assign({
      method: e,
      headers: d,
      referrerPolicy: "no-referrer"
    }, o));
  });
}
async function gs(i, e, t) {
  i._canInitEmulator = !1;
  const n = Object.assign(Object.assign({}, ac), e);
  try {
    const r = new lc(i), o = await Promise.race([
      t(),
      r.promise
    ]);
    r.clearNetworkTimeout();
    const s = await o.json();
    if ("needConfirmation" in s)
      throw fi(i, "account-exists-with-different-credential", s);
    if (o.ok && !("errorMessage" in s))
      return s;
    {
      const a = o.ok ? s.errorMessage : s.error.message, [d, l] = a.split(" : ");
      if (d === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw fi(i, "credential-already-in-use", s);
      if (d === "EMAIL_EXISTS")
        throw fi(i, "email-already-in-use", s);
      if (d === "USER_DISABLED")
        throw fi(i, "user-disabled", s);
      const u = n[d] || d.toLowerCase().replace(/[_\s]+/g, "-");
      if (l)
        throw tc(i, u, l);
      pe(i, u);
    }
  } catch (r) {
    if (r instanceof Pe)
      throw r;
    pe(
      i,
      "network-request-failed"
      /* NETWORK_REQUEST_FAILED */
    );
  }
}
async function ri(i, e, t, n, r = {}) {
  const o = await Rt(i, e, t, n, r);
  return "mfaPendingCredential" in o && pe(i, "multi-factor-auth-required", {
    _serverResponse: o
  }), o;
}
function _s(i, e, t, n) {
  const r = `${e}${t}?${n}`;
  return i.config.emulator ? sr(i.config, r) : `${i.config.apiScheme}://${r}`;
}
class lc {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((t, n) => {
      this.timer = setTimeout(() => n(ve(
        this.auth,
        "network-request-failed"
        /* NETWORK_REQUEST_FAILED */
      )), dc.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function fi(i, e, t) {
  const n = {
    appName: i.name
  };
  t.email && (n.email = t.email), t.phoneNumber && (n.phoneNumber = t.phoneNumber);
  const r = ve(i, e, n);
  return r.customData._tokenResponse = t, r;
}
/**
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
 */
async function cc(i, e) {
  return Rt(i, "POST", "/v1/accounts:delete", e);
}
async function uc(i, e) {
  return Rt(i, "POST", "/v1/accounts:lookup", e);
}
/**
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
 */
function Bt(i) {
  if (i)
    try {
      const e = new Date(Number(i));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function hc(i, e = !1) {
  const t = Ie(i), n = await t.getIdToken(e), r = ar(n);
  N(
    r && r.exp && r.auth_time && r.iat,
    t.auth,
    "internal-error"
    /* INTERNAL_ERROR */
  );
  const o = typeof r.firebase == "object" ? r.firebase : void 0, s = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: r,
    token: n,
    authTime: Bt(an(r.auth_time)),
    issuedAtTime: Bt(an(r.iat)),
    expirationTime: Bt(an(r.exp)),
    signInProvider: s || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null
  };
}
function an(i) {
  return Number(i) * 1e3;
}
function ar(i) {
  var e;
  const [t, n, r] = i.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return mi("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const o = md(n);
    return o ? JSON.parse(o) : (mi("Failed to decode base64 JWT payload"), null);
  } catch (o) {
    return mi("Caught error parsing JWT payload as JSON", (e = o) === null || e === void 0 ? void 0 : e.toString()), null;
  }
}
function fc(i) {
  const e = ar(i);
  return N(
    e,
    "internal-error"
    /* INTERNAL_ERROR */
  ), N(
    typeof e.exp < "u",
    "internal-error"
    /* INTERNAL_ERROR */
  ), N(
    typeof e.iat < "u",
    "internal-error"
    /* INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
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
 */
async function wt(i, e, t = !1) {
  if (t)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Pe && pc(n) && i.auth.currentUser === i && await i.auth.signOut(), n;
  }
}
function pc({ code: i }) {
  return i === "auth/user-disabled" || i === "auth/user-token-expired";
}
/**
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
 */
class mc {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const n = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* RETRY_BACKOFF_MAX */
      ), n;
    } else {
      this.errorBackoff = 3e4;
      const r = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
      return Math.max(0, r);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    var e;
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      ((e = t) === null || e === void 0 ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
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
 */
class bs {
  constructor(e, t) {
    this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Bt(this.lastLoginAt), this.creationTime = Bt(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
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
 */
async function Ii(i) {
  var e;
  const t = i.auth, n = await i.getIdToken(), r = await wt(i, uc(t, { idToken: n }));
  N(
    r == null ? void 0 : r.users.length,
    t,
    "internal-error"
    /* INTERNAL_ERROR */
  );
  const o = r.users[0];
  i._notifyReloadListener(o);
  const s = !((e = o.providerUserInfo) === null || e === void 0) && e.length ? bc(o.providerUserInfo) : [], a = _c(i.providerData, s), d = i.isAnonymous, l = !(i.email && o.passwordHash) && !(a != null && a.length), u = d ? l : !1, c = {
    uid: o.localId,
    displayName: o.displayName || null,
    photoURL: o.photoUrl || null,
    email: o.email || null,
    emailVerified: o.emailVerified || !1,
    phoneNumber: o.phoneNumber || null,
    tenantId: o.tenantId || null,
    providerData: a,
    metadata: new bs(o.createdAt, o.lastLoginAt),
    isAnonymous: u
  };
  Object.assign(i, c);
}
async function gc(i) {
  const e = Ie(i);
  await Ii(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function _c(i, e) {
  return [...i.filter((n) => !e.some((r) => r.providerId === n.providerId)), ...e];
}
function bc(i) {
  return i.map((e) => {
    var { providerId: t } = e, n = Yn(e, ["providerId"]);
    return {
      providerId: t,
      uid: n.rawId || "",
      displayName: n.displayName || null,
      email: n.email || null,
      phoneNumber: n.phoneNumber || null,
      photoURL: n.photoUrl || null
    };
  });
}
/**
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
 */
async function yc(i, e) {
  const t = await gs(i, {}, async () => {
    const n = ti({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: r, apiKey: o } = i.config, s = _s(i, r, "/v1/token", `key=${o}`), a = await i._getAdditionalHeaders();
    return a[
      "Content-Type"
      /* CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", ms.fetch()(s, {
      method: "POST",
      headers: a,
      body: n
    });
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token
  };
}
/**
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
 */
class qt {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    N(
      e.idToken,
      "internal-error"
      /* INTERNAL_ERROR */
    ), N(
      typeof e.idToken < "u",
      "internal-error"
      /* INTERNAL_ERROR */
    ), N(
      typeof e.refreshToken < "u",
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : fc(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  async getToken(e, t = !1) {
    return N(
      !this.accessToken || this.refreshToken,
      e,
      "user-token-expired"
      /* TOKEN_EXPIRED */
    ), !t && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: n, refreshToken: r, expiresIn: o } = await yc(e, t);
    this.updateTokensAndExpiration(n, r, Number(o));
  }
  updateTokensAndExpiration(e, t, n) {
    this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
  }
  static fromJSON(e, t) {
    const { refreshToken: n, accessToken: r, expirationTime: o } = t, s = new qt();
    return n && (N(typeof n == "string", "internal-error", {
      appName: e
    }), s.refreshToken = n), r && (N(typeof r == "string", "internal-error", {
      appName: e
    }), s.accessToken = r), o && (N(typeof o == "number", "internal-error", {
      appName: e
    }), s.expirationTime = o), s;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new qt(), this.toJSON());
  }
  _performRefresh() {
    return Ce("not implemented");
  }
}
/**
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
 */
function $e(i, e) {
  N(typeof i == "string" || typeof i > "u", "internal-error", { appName: e });
}
class Je {
  constructor(e) {
    var { uid: t, auth: n, stsTokenManager: r } = e, o = Yn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new mc(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = n, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = o.displayName || null, this.email = o.email || null, this.emailVerified = o.emailVerified || !1, this.phoneNumber = o.phoneNumber || null, this.photoURL = o.photoURL || null, this.isAnonymous = o.isAnonymous || !1, this.tenantId = o.tenantId || null, this.providerData = o.providerData ? [...o.providerData] : [], this.metadata = new bs(o.createdAt || void 0, o.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const t = await wt(this, this.stsTokenManager.getToken(this.auth, e));
    return N(
      t,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
  }
  getIdTokenResult(e) {
    return hc(this, e);
  }
  reload() {
    return gc(this);
  }
  _assign(e) {
    this !== e && (N(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((t) => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    return new Je(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
  }
  _onReload(e) {
    N(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let n = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await Ii(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return await wt(this, cc(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, t) {
    var n, r, o, s, a, d, l, u;
    const c = (n = t.displayName) !== null && n !== void 0 ? n : void 0, f = (r = t.email) !== null && r !== void 0 ? r : void 0, h = (o = t.phoneNumber) !== null && o !== void 0 ? o : void 0, p = (s = t.photoURL) !== null && s !== void 0 ? s : void 0, _ = (a = t.tenantId) !== null && a !== void 0 ? a : void 0, v = (d = t._redirectEventId) !== null && d !== void 0 ? d : void 0, y = (l = t.createdAt) !== null && l !== void 0 ? l : void 0, g = (u = t.lastLoginAt) !== null && u !== void 0 ? u : void 0, { uid: m, emailVerified: x, isAnonymous: E, providerData: O, stsTokenManager: k } = t;
    N(
      m && k,
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const A = qt.fromJSON(this.name, k);
    N(
      typeof m == "string",
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    ), $e(c, e.name), $e(f, e.name), N(
      typeof x == "boolean",
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    ), N(
      typeof E == "boolean",
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    ), $e(h, e.name), $e(p, e.name), $e(_, e.name), $e(v, e.name), $e(y, e.name), $e(g, e.name);
    const P = new Je({
      uid: m,
      auth: e,
      email: f,
      emailVerified: x,
      displayName: c,
      isAnonymous: E,
      photoURL: p,
      phoneNumber: h,
      tenantId: _,
      stsTokenManager: A,
      createdAt: y,
      lastLoginAt: g
    });
    return O && Array.isArray(O) && (P.providerData = O.map(($) => Object.assign({}, $))), v && (P._redirectEventId = v), P;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, t, n = !1) {
    const r = new qt();
    r.updateFromServerResponse(t);
    const o = new Je({
      uid: t.localId,
      auth: e,
      stsTokenManager: r,
      isAnonymous: n
    });
    return await Ii(o), o;
  }
}
/**
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
 */
class ys {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
ys.type = "NONE";
const Wr = ys;
/**
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
 */
function gi(i, e, t) {
  return `firebase:${i}:${e}:${t}`;
}
class bt {
  constructor(e, t, n) {
    this.persistence = e, this.auth = t, this.userKey = n;
    const { config: r, name: o } = this.auth;
    this.fullUserKey = gi(this.userKey, r.apiKey, o), this.fullPersistenceKey = gi("persistence", r.apiKey, o), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Je._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const t = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, t)
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, n = "authUser") {
    if (!t.length)
      return new bt(ke(Wr), e, n);
    const r = (await Promise.all(t.map(async (l) => {
      if (await l._isAvailable())
        return l;
    }))).filter((l) => l);
    let o = r[0] || ke(Wr);
    const s = gi(n, e.config.apiKey, e.name);
    let a = null;
    for (const l of t)
      try {
        const u = await l._get(s);
        if (u) {
          const c = Je._fromJSON(e, u);
          l !== o && (a = c), o = l;
          break;
        }
      } catch {
      }
    const d = r.filter((l) => l._shouldAllowMigration);
    return !o._shouldAllowMigration || !d.length ? new bt(o, e, n) : (o = d[0], a && await o._set(s, a.toJSON()), await Promise.all(t.map(async (l) => {
      if (l !== o)
        try {
          await l._remove(s);
        } catch {
        }
    })), new bt(o, e, n));
  }
}
/**
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
 */
function Gr(i) {
  const e = i.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (ws(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (vs(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (As(e))
    return "Blackberry";
  if (Is(e))
    return "Webos";
  if (dr(e))
    return "Safari";
  if ((e.includes("chrome/") || xs(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Es(e))
    return "Android";
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = i.match(t);
    if ((n == null ? void 0 : n.length) === 2)
      return n[1];
  }
  return "Other";
}
function vs(i = ie()) {
  return /firefox\//i.test(i);
}
function dr(i = ie()) {
  const e = i.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function xs(i = ie()) {
  return /crios\//i.test(i);
}
function ws(i = ie()) {
  return /iemobile/i.test(i);
}
function Es(i = ie()) {
  return /android/i.test(i);
}
function As(i = ie()) {
  return /blackberry/i.test(i);
}
function Is(i = ie()) {
  return /webos/i.test(i);
}
function Ui(i = ie()) {
  return /iphone|ipad|ipod/i.test(i) || /macintosh/i.test(i) && /mobile/i.test(i);
}
function vc(i = ie()) {
  var e;
  return Ui(i) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function xc() {
  return vd() && document.documentMode === 10;
}
function Ss(i = ie()) {
  return Ui(i) || Es(i) || Is(i) || As(i) || /windows phone/i.test(i) || ws(i);
}
function wc() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
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
 */
function Ts(i, e = []) {
  let t;
  switch (i) {
    case "Browser":
      t = Gr(ie());
      break;
    case "Worker":
      t = `${Gr(ie())}-${i}`;
      break;
    default:
      t = i;
  }
  const n = e.length ? e.join(",") : "FirebaseCore-web";
  return `${t}/JsCore/${Fi}/${n}`;
}
/**
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
 */
class Ec {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, t) {
    const n = (o) => new Promise((s, a) => {
      try {
        const d = e(o);
        s(d);
      } catch (d) {
        a(d);
      }
    });
    n.onAbort = t, this.queue.push(n);
    const r = this.queue.length - 1;
    return () => {
      this.queue[r] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    var t;
    if (this.auth.currentUser === e)
      return;
    const n = [];
    try {
      for (const r of this.queue)
        await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const o of n)
        try {
          o();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", { originalMessage: (t = r) === null || t === void 0 ? void 0 : t.message });
    }
  }
}
/**
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
 */
class Ac {
  constructor(e, t, n) {
    this.app = e, this.heartbeatServiceProvider = t, this.config = n, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new qr(this), this.idTokenSubscription = new qr(this), this.beforeStateQueue = new Ec(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ps, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = n.sdkClientVersion;
  }
  _initializeWithPersistence(e, t) {
    return t && (this._popupRedirectResolver = ke(t)), this._initializationPromise = this.queue(async () => {
      var n, r;
      if (!this._deleted && (this.persistenceManager = await bt.create(this, e), !this._deleted)) {
        if (!((n = this._popupRedirectResolver) === null || n === void 0) && n._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(t), this.lastNotifiedUid = ((r = this.currentUser) === null || r === void 0 ? void 0 : r.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUser(e) {
    var t;
    const n = await this.assertedPersistence.getCurrentUser();
    let r = n, o = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId, a = r == null ? void 0 : r._redirectEventId, d = await this.tryRedirectSignIn(e);
      (!s || s === a) && (d != null && d.user) && (r = d.user, o = !0);
    }
    if (!r)
      return this.directlySetCurrentUser(null);
    if (!r._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(r);
        } catch (s) {
          r = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s));
        }
      return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null);
    }
    return N(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r);
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    var t;
    try {
      await Ii(e);
    } catch (n) {
      if (((t = n) === null || t === void 0 ? void 0 : t.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = sc();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const t = e ? Ie(e) : null;
    return t && N(
      t.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* INVALID_AUTH */
    ), this._updateCurrentUser(t && t._clone(this));
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return e && N(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* TENANT_ID_MISMATCH */
      ), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    );
  }
  setPersistence(e) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(ke(e));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new ei("auth", "Firebase", e());
  }
  onAuthStateChanged(e, t, n) {
    return this.registerStateListener(this.authStateSubscription, e, t, n);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, n) {
    return this.registerStateListener(this.idTokenSubscription, e, t, n);
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, t) {
    const n = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? n.removeCurrentUser() : n.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = e && ke(e) || this._popupRedirectResolver;
      N(
        t,
        this,
        "argument-error"
        /* ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await bt.create(
        this,
        [ke(t._redirectPersistence)],
        "redirectUser"
        /* REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, n;
    return this._isInitialized && await this.queue(async () => {
    }), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const n = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
    this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, n, r) {
    if (this._deleted)
      return () => {
      };
    const o = typeof t == "function" ? t : t.next.bind(t), s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return N(
      s,
      this,
      "internal-error"
      /* INTERNAL_ERROR */
    ), s.then(() => o(this.currentUser)), typeof t == "function" ? e.addObserver(t, n, r) : e.addObserver(t);
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && (this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh()), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return N(
      this.persistenceManager,
      this,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Ts(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = {
      [
        "X-Client-Version"
        /* X_CLIENT_VERSION */
      ]: this.clientVersion
    };
    this.app.options.appId && (t[
      "X-Firebase-gmpid"
      /* X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const n = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    return n && (t[
      "X-Firebase-Client"
      /* X_FIREBASE_CLIENT */
    ] = n), t;
  }
}
function oi(i) {
  return Ie(i);
}
class qr {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = Td((t) => this.observer = t);
  }
  get next() {
    return N(
      this.observer,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
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
 */
class lr {
  /** @internal */
  constructor(e, t) {
    this.providerId = e, this.signInMethod = t;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return Ce("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Ce("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, t) {
    return Ce("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Ce("not implemented");
  }
}
async function Ic(i, e) {
  return Rt(i, "POST", "/v1/accounts:update", e);
}
/**
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
 */
async function Sc(i, e) {
  return ri(i, "POST", "/v1/accounts:signInWithPassword", ni(i, e));
}
/**
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
 */
async function Tc(i, e) {
  return ri(i, "POST", "/v1/accounts:signInWithEmailLink", ni(i, e));
}
async function Cc(i, e) {
  return ri(i, "POST", "/v1/accounts:signInWithEmailLink", ni(i, e));
}
/**
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
 */
class Kt extends lr {
  /** @internal */
  constructor(e, t, n, r = null) {
    super("password", n), this._email = e, this._password = t, this._tenantId = r;
  }
  /** @internal */
  static _fromEmailAndPassword(e, t) {
    return new Kt(
      e,
      t,
      "password"
      /* EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, t, n = null) {
    return new Kt(e, t, "emailLink", n);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e;
    if (t != null && t.email && (t != null && t.password)) {
      if (t.signInMethod === "password")
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === "emailLink")
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        return Sc(e, {
          returnSecureToken: !0,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return Tc(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        pe(
          e,
          "internal-error"
          /* INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case "password":
        return Ic(e, {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return Cc(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password
        });
      default:
        pe(
          e,
          "internal-error"
          /* INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
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
 */
async function yt(i, e) {
  return ri(i, "POST", "/v1/accounts:signInWithIdp", ni(i, e));
}
/**
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
 */
const kc = "http://localhost";
class it extends lr {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const t = new it(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : pe(
      "argument-error"
      /* ARGUMENT_ERROR */
    ), t;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e, { providerId: n, signInMethod: r } = t, o = Yn(t, ["providerId", "signInMethod"]);
    if (!n || !r)
      return null;
    const s = new it(n, r);
    return s.idToken = o.idToken || void 0, s.accessToken = o.accessToken || void 0, s.secret = o.secret, s.nonce = o.nonce, s.pendingToken = o.pendingToken || null, s;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return yt(e, t);
  }
  /** @internal */
  _linkToIdToken(e, t) {
    const n = this.buildRequest();
    return n.idToken = t, yt(e, n);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return t.autoCreate = !1, yt(e, t);
  }
  buildRequest() {
    const e = {
      requestUri: kc,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = ti(t);
    }
    return e;
  }
}
/**
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
 */
function Oc(i) {
  switch (i) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function Rc(i) {
  const e = $t(Mt(i)).link, t = e ? $t(Mt(e)).deep_link_id : null, n = $t(Mt(i)).deep_link_id;
  return (n ? $t(Mt(n)).link : null) || n || t || e || i;
}
class cr {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    var t, n, r, o, s, a;
    const d = $t(Mt(e)), l = (t = d.apiKey) !== null && t !== void 0 ? t : null, u = (n = d.oobCode) !== null && n !== void 0 ? n : null, c = Oc((r = d.mode) !== null && r !== void 0 ? r : null);
    N(
      l && u && c,
      "argument-error"
      /* ARGUMENT_ERROR */
    ), this.apiKey = l, this.operation = c, this.code = u, this.continueUrl = (o = d.continueUrl) !== null && o !== void 0 ? o : null, this.languageCode = (s = d.languageCode) !== null && s !== void 0 ? s : null, this.tenantId = (a = d.tenantId) !== null && a !== void 0 ? a : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(e) {
    const t = Rc(e);
    try {
      return new cr(t);
    } catch {
      return null;
    }
  }
}
/**
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
 */
class Nt {
  constructor() {
    this.providerId = Nt.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(e, t) {
    return Kt._fromEmailAndPassword(e, t);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(e, t) {
    const n = cr.parseLink(t);
    return N(
      n,
      "argument-error"
      /* ARGUMENT_ERROR */
    ), Kt._fromEmailAndCode(e, n.code, n.tenantId);
  }
}
Nt.PROVIDER_ID = "password";
Nt.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Nt.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
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
 */
class Cs {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
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
 */
class si extends Cs {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
/**
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
 */
class Fe extends si {
  constructor() {
    super(
      "facebook.com"
      /* FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return it._fromParams({
      providerId: Fe.PROVIDER_ID,
      signInMethod: Fe.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Fe.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Fe.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Fe.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Fe.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Fe.PROVIDER_ID = "facebook.com";
/**
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
 */
class Ue extends si {
  constructor() {
    super(
      "google.com"
      /* GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, t) {
    return it._fromParams({
      providerId: Ue.PROVIDER_ID,
      signInMethod: Ue.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Ue.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Ue.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: n } = e;
    if (!t && !n)
      return null;
    try {
      return Ue.credential(t, n);
    } catch {
      return null;
    }
  }
}
Ue.GOOGLE_SIGN_IN_METHOD = "google.com";
Ue.PROVIDER_ID = "google.com";
/**
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
 */
class He extends si {
  constructor() {
    super(
      "github.com"
      /* GITHUB */
    );
  }
  /**
   * Creates a credential for Github.
   *
   * @param accessToken - Github access token.
   */
  static credential(e) {
    return it._fromParams({
      providerId: He.PROVIDER_ID,
      signInMethod: He.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return He.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return He.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return He.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
He.GITHUB_SIGN_IN_METHOD = "github.com";
He.PROVIDER_ID = "github.com";
/**
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
 */
class Be extends si {
  constructor() {
    super(
      "twitter.com"
      /* TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, t) {
    return it._fromParams({
      providerId: Be.PROVIDER_ID,
      signInMethod: Be.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Be.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Be.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: t, oauthTokenSecret: n } = e;
    if (!t || !n)
      return null;
    try {
      return Be.credential(t, n);
    } catch {
      return null;
    }
  }
}
Be.TWITTER_SIGN_IN_METHOD = "twitter.com";
Be.PROVIDER_ID = "twitter.com";
/**
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
 */
async function ks(i, e) {
  return ri(i, "POST", "/v1/accounts:signUp", ni(i, e));
}
/**
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
 */
class Ne {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, t, n, r = !1) {
    const o = await Je._fromIdTokenResponse(e, n, r), s = Kr(n);
    return new Ne({
      user: o,
      providerId: s,
      _tokenResponse: n,
      operationType: t
    });
  }
  static async _forOperation(e, t, n) {
    await e._updateTokensIfNecessary(
      n,
      /* reload */
      !0
    );
    const r = Kr(n);
    return new Ne({
      user: e,
      providerId: r,
      _tokenResponse: n,
      operationType: t
    });
  }
}
function Kr(i) {
  return i.providerId ? i.providerId : "phoneNumber" in i ? "phone" : null;
}
/**
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
 */
async function Nc(i) {
  var e;
  const t = oi(i);
  if (await t._initializationPromise, !((e = t.currentUser) === null || e === void 0) && e.isAnonymous)
    return new Ne({
      user: t.currentUser,
      providerId: null,
      operationType: "signIn"
      /* SIGN_IN */
    });
  const n = await ks(t, {
    returnSecureToken: !0
  }), r = await Ne._fromIdTokenResponse(t, "signIn", n, !0);
  return await t._updateCurrentUser(r.user), r;
}
/**
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
 */
class Si extends Pe {
  constructor(e, t, n, r) {
    var o;
    super(t.code, t.message), this.operationType = n, this.user = r, Object.setPrototypeOf(this, Si.prototype), this.customData = {
      appName: e.name,
      tenantId: (o = e.tenantId) !== null && o !== void 0 ? o : void 0,
      _serverResponse: t.customData._serverResponse,
      operationType: n
    };
  }
  static _fromErrorAndOperation(e, t, n, r) {
    return new Si(e, t, n, r);
  }
}
function Os(i, e, t, n) {
  return (e === "reauthenticate" ? t._getReauthenticationResolver(i) : t._getIdTokenResponse(i)).catch((o) => {
    throw o.code === "auth/multi-factor-auth-required" ? Si._fromErrorAndOperation(i, o, e, n) : o;
  });
}
async function Lc(i, e, t = !1) {
  const n = await wt(i, e._linkToIdToken(i.auth, await i.getIdToken()), t);
  return Ne._forOperation(i, "link", n);
}
/**
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
 */
async function Pc(i, e, t = !1) {
  var n;
  const { auth: r } = i, o = "reauthenticate";
  try {
    const s = await wt(i, Os(r, o, e, i), t);
    N(
      s.idToken,
      r,
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const a = ar(s.idToken);
    N(
      a,
      r,
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const { sub: d } = a;
    return N(
      i.uid === d,
      r,
      "user-mismatch"
      /* USER_MISMATCH */
    ), Ne._forOperation(i, o, s);
  } catch (s) {
    throw ((n = s) === null || n === void 0 ? void 0 : n.code) === "auth/user-not-found" && pe(
      r,
      "user-mismatch"
      /* USER_MISMATCH */
    ), s;
  }
}
/**
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
 */
async function Rs(i, e, t = !1) {
  const n = "signIn", r = await Os(i, n, e), o = await Ne._fromIdTokenResponse(i, n, r);
  return t || await i._updateCurrentUser(o.user), o;
}
async function Dc(i, e) {
  return Rs(oi(i), e);
}
async function $c(i, e, t) {
  const n = oi(i), r = await ks(n, {
    returnSecureToken: !0,
    email: e,
    password: t
  }), o = await Ne._fromIdTokenResponse(n, "signIn", r);
  return await n._updateCurrentUser(o.user), o;
}
function Mc(i, e, t) {
  return Dc(Ie(i), Nt.credential(e, t));
}
/**
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
 */
async function Fc(i, e) {
  return Rt(i, "POST", "/v1/accounts:update", e);
}
/**
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
 */
async function Uc(i, { displayName: e, photoURL: t }) {
  if (e === void 0 && t === void 0)
    return;
  const n = Ie(i), o = {
    idToken: await n.getIdToken(),
    displayName: e,
    photoUrl: t,
    returnSecureToken: !0
  }, s = await wt(n, Fc(n.auth, o));
  n.displayName = s.displayName || null, n.photoURL = s.photoUrl || null;
  const a = n.providerData.find(
    ({ providerId: d }) => d === "password"
    /* PASSWORD */
  );
  a && (a.displayName = n.displayName, a.photoURL = n.photoURL), await n._updateTokensIfNecessary(s);
}
function Hc(i, e, t, n) {
  return Ie(i).onAuthStateChanged(e, t, n);
}
function Bc(i) {
  return Ie(i).signOut();
}
const Ti = "__sak";
/**
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
 */
class Ns {
  constructor(e, t) {
    this.storageRetriever = e, this.type = t;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Ti, "1"), this.storage.removeItem(Ti), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
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
 */
function Vc() {
  const i = ie();
  return dr(i) || Ui(i);
}
const zc = 1e3, jc = 10;
class Ls extends Ns {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* LOCAL */
    ), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = Vc() && wc(), this.fallbackToPolling = Ss(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const n = this.storage.getItem(t), r = this.localCache[t];
      n !== r && e(t, r, n);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((s, a, d) => {
        this.notifyListeners(s, d);
      });
      return;
    }
    const n = e.key;
    if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const s = this.storage.getItem(n);
      if (e.newValue !== s)
        e.newValue !== null ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
      else if (this.localCache[n] === e.newValue && !t)
        return;
    }
    const r = () => {
      const s = this.storage.getItem(n);
      !t && this.localCache[n] === s || this.notifyListeners(n, s);
    }, o = this.storage.getItem(n);
    xc() && o !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, jc) : r();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const n = this.listeners[e];
    if (n)
      for (const r of Array.from(n))
        r(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, t, n) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: t,
            newValue: n
          }),
          /* poll */
          !0
        );
      });
    }, zc);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, t) {
    await super._set(e, t), this.localCache[e] = JSON.stringify(t);
  }
  async _get(e) {
    const t = await super._get(e);
    return this.localCache[e] = JSON.stringify(t), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Ls.type = "LOCAL";
const Wc = Ls;
/**
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
 */
class Ps extends Ns {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* SESSION */
    );
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
Ps.type = "SESSION";
const Ds = Ps;
/**
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
 */
function Gc(i) {
  return Promise.all(i.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (t) {
      return {
        fulfilled: !1,
        reason: t
      };
    }
  }));
}
/**
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
 */
class Hi {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const t = this.receivers.find((r) => r.isListeningto(e));
    if (t)
      return t;
    const n = new Hi(e);
    return this.receivers.push(n), n;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const t = e, { eventId: n, eventType: r, data: o } = t.data, s = this.handlersMap[r];
    if (!(s != null && s.size))
      return;
    t.ports[0].postMessage({
      status: "ack",
      eventId: n,
      eventType: r
    });
    const a = Array.from(s).map(async (l) => l(t.origin, o)), d = await Gc(a);
    t.ports[0].postMessage({
      status: "done",
      eventId: n,
      eventType: r,
      response: d
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(t);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Hi.receivers = [];
/**
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
 */
function ur(i = "", e = 10) {
  let t = "";
  for (let n = 0; n < e; n++)
    t += Math.floor(Math.random() * 10);
  return i + t;
}
/**
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
 */
class qc {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, t, n = 50) {
    const r = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!r)
      throw new Error(
        "connection_unavailable"
        /* CONNECTION_UNAVAILABLE */
      );
    let o, s;
    return new Promise((a, d) => {
      const l = ur("", 20);
      r.port1.start();
      const u = setTimeout(() => {
        d(new Error(
          "unsupported_event"
          /* UNSUPPORTED_EVENT */
        ));
      }, n);
      s = {
        messageChannel: r,
        onMessage(c) {
          const f = c;
          if (f.data.eventId === l)
            switch (f.data.status) {
              case "ack":
                clearTimeout(u), o = setTimeout(
                  () => {
                    d(new Error(
                      "timeout"
                      /* TIMEOUT */
                    ));
                  },
                  3e3
                  /* COMPLETION */
                );
                break;
              case "done":
                clearTimeout(o), a(f.data.response);
                break;
              default:
                clearTimeout(u), clearTimeout(o), d(new Error(
                  "invalid_response"
                  /* INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(s), r.port1.addEventListener("message", s.onMessage), this.target.postMessage({
        eventType: e,
        eventId: l,
        data: t
      }, [r.port2]);
    }).finally(() => {
      s && this.removeMessageHandler(s);
    });
  }
}
/**
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
 */
function xe() {
  return window;
}
function Kc(i) {
  xe().location.href = i;
}
/**
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
 */
function $s() {
  return typeof xe().WorkerGlobalScope < "u" && typeof xe().importScripts == "function";
}
async function Xc() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Yc() {
  var i;
  return ((i = navigator == null ? void 0 : navigator.serviceWorker) === null || i === void 0 ? void 0 : i.controller) || null;
}
function Jc() {
  return $s() ? self : null;
}
/**
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
 */
const Ms = "firebaseLocalStorageDb", Qc = 1, Ci = "firebaseLocalStorage", Fs = "fbase_key";
class ai {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        t(this.request.error);
      });
    });
  }
}
function Bi(i, e) {
  return i.transaction([Ci], e ? "readwrite" : "readonly").objectStore(Ci);
}
function Zc() {
  const i = indexedDB.deleteDatabase(Ms);
  return new ai(i).toPromise();
}
function Un() {
  const i = indexedDB.open(Ms, Qc);
  return new Promise((e, t) => {
    i.addEventListener("error", () => {
      t(i.error);
    }), i.addEventListener("upgradeneeded", () => {
      const n = i.result;
      try {
        n.createObjectStore(Ci, { keyPath: Fs });
      } catch (r) {
        t(r);
      }
    }), i.addEventListener("success", async () => {
      const n = i.result;
      n.objectStoreNames.contains(Ci) ? e(n) : (n.close(), await Zc(), e(await Un()));
    });
  });
}
async function Xr(i, e, t) {
  const n = Bi(i, !0).put({
    [Fs]: e,
    value: t
  });
  return new ai(n).toPromise();
}
async function eu(i, e) {
  const t = Bi(i, !1).get(e), n = await new ai(t).toPromise();
  return n === void 0 ? null : n.value;
}
function Yr(i, e) {
  const t = Bi(i, !0).delete(e);
  return new ai(t).toPromise();
}
const tu = 800, iu = 3;
class Us {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await Un(), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (; ; )
      try {
        const n = await this._openDb();
        return await e(n);
      } catch (n) {
        if (t++ > iu)
          throw n;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return $s() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Hi._getInstance(Jc()), this.receiver._subscribe("keyChanged", async (e, t) => ({
      keyProcessed: (await this._poll()).includes(t.key)
    })), this.receiver._subscribe("ping", async (e, t) => [
      "keyChanged"
      /* KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var e, t;
    if (this.activeServiceWorker = await Xc(), !this.activeServiceWorker)
      return;
    this.sender = new qc(this.activeServiceWorker);
    const n = await this.sender._send(
      "ping",
      {},
      800
      /* LONG_ACK */
    );
    n && !((e = n[0]) === null || e === void 0) && e.fulfilled && !((t = n[0]) === null || t === void 0) && t.value.includes(
      "keyChanged"
      /* KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || Yc() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await Un();
      return await Xr(e, Ti, "1"), await Yr(e, Ti), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => Xr(n, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const t = await this._withRetries((n) => eu(n, e));
    return this.localCache[e] = t, t;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((t) => Yr(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((r) => {
      const o = Bi(r, !1).getAll();
      return new ai(o).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const t = [], n = /* @__PURE__ */ new Set();
    for (const { fbase_key: r, value: o } of e)
      n.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(o) && (this.notifyListeners(r, o), t.push(r));
    for (const r of Object.keys(this.localCache))
      this.localCache[r] && !n.has(r) && (this.notifyListeners(r, null), t.push(r));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const n = this.listeners[e];
    if (n)
      for (const r of Array.from(n))
        r(t);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), tu);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Us.type = "LOCAL";
const nu = Us;
/**
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
 */
function ru() {
  var i, e;
  return (e = (i = document.getElementsByTagName("head")) === null || i === void 0 ? void 0 : i[0]) !== null && e !== void 0 ? e : document;
}
function ou(i) {
  return new Promise((e, t) => {
    const n = document.createElement("script");
    n.setAttribute("src", i), n.onload = e, n.onerror = (r) => {
      const o = ve(
        "internal-error"
        /* INTERNAL_ERROR */
      );
      o.customData = r, t(o);
    }, n.type = "text/javascript", n.charset = "UTF-8", ru().appendChild(n);
  });
}
function su(i) {
  return `__${i}${Math.floor(Math.random() * 1e6)}`;
}
new ii(3e4, 6e4);
/**
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
 */
function au(i, e) {
  return e ? ke(e) : (N(
    i._popupRedirectResolver,
    i,
    "argument-error"
    /* ARGUMENT_ERROR */
  ), i._popupRedirectResolver);
}
/**
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
 */
class hr extends lr {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return yt(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return yt(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return yt(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (t.idToken = e), t;
  }
}
function du(i) {
  return Rs(i.auth, new hr(i), i.bypassAuthState);
}
function lu(i) {
  const { auth: e, user: t } = i;
  return N(
    t,
    e,
    "internal-error"
    /* INTERNAL_ERROR */
  ), Pc(t, new hr(i), i.bypassAuthState);
}
async function cu(i) {
  const { auth: e, user: t } = i;
  return N(
    t,
    e,
    "internal-error"
    /* INTERNAL_ERROR */
  ), Lc(t, new hr(i), i.bypassAuthState);
}
/**
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
 */
class Hs {
  constructor(e, t, n, r, o = !1) {
    this.auth = e, this.resolver = n, this.user = r, this.bypassAuthState = o, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t];
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (n) {
        this.reject(n);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: t, sessionId: n, postBody: r, tenantId: o, error: s, type: a } = e;
    if (s) {
      this.reject(s);
      return;
    }
    const d = {
      auth: this.auth,
      requestUri: t,
      sessionId: n,
      tenantId: o || void 0,
      postBody: r || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(a)(d));
    } catch (l) {
      this.reject(l);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return du;
      case "linkViaPopup":
      case "linkViaRedirect":
        return cu;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return lu;
      default:
        pe(
          this.auth,
          "internal-error"
          /* INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    Re(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    Re(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
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
 */
const uu = new ii(2e3, 1e4);
class pt extends Hs {
  constructor(e, t, n, r, o) {
    super(e, t, r, o), this.provider = n, this.authWindow = null, this.pollId = null, pt.currentPopupAction && pt.currentPopupAction.cancel(), pt.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return N(
      e,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    Re(this.filter.length === 1, "Popup operations only handle one event");
    const e = ur();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((t) => {
      this.reject(t);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
      t || this.reject(ve(
        this.auth,
        "web-storage-unsupported"
        /* WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(ve(
      this.auth,
      "cancelled-popup-request"
      /* EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, pt.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var t, n;
      if (!((n = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || n === void 0) && n.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(ve(
              this.auth,
              "popup-closed-by-user"
              /* POPUP_CLOSED_BY_USER */
            ));
          },
          2e3
          /* AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, uu.get());
    };
    e();
  }
}
pt.currentPopupAction = null;
/**
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
 */
const hu = "pendingRedirect", _i = /* @__PURE__ */ new Map();
class fu extends Hs {
  constructor(e, t, n = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* UNKNOWN */
    ], t, void 0, n), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = _i.get(this.auth._key());
    if (!e) {
      try {
        const n = await pu(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(n);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      _i.set(this.auth._key(), e);
    }
    return this.bypassAuthState || _i.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t)
        return this.user = t, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function pu(i, e) {
  const t = _u(e), n = gu(i);
  if (!await n._isAvailable())
    return !1;
  const r = await n._get(t) === "true";
  return await n._remove(t), r;
}
function mu(i, e) {
  _i.set(i._key(), e);
}
function gu(i) {
  return ke(i._redirectPersistence);
}
function _u(i) {
  return gi(hu, i.config.apiKey, i.name);
}
async function bu(i, e, t = !1) {
  const n = oi(i), r = au(n, e), s = await new fu(n, r, t).execute();
  return s && !t && (delete s.user._redirectEventId, await n._persistUserIfCurrent(s.user), await n._setRedirectUser(null, e)), s;
}
/**
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
 */
const yu = 10 * 60 * 1e3;
class vu {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let t = !1;
    return this.consumers.forEach((n) => {
      this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !xu(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t;
  }
  sendToConsumer(e, t) {
    var n;
    if (e.error && !Bs(e)) {
      const r = ((n = e.error.code) === null || n === void 0 ? void 0 : n.split("auth/")[1]) || "internal-error";
      t.onError(ve(this.auth, r));
    } else
      t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const n = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
    return t.filter.includes(e.type) && n;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= yu && this.cachedEventUids.clear(), this.cachedEventUids.has(Jr(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Jr(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Jr(i) {
  return [i.type, i.eventId, i.sessionId, i.tenantId].filter((e) => e).join("-");
}
function Bs({ type: i, error: e }) {
  return i === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function xu(i) {
  switch (i.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Bs(i);
    default:
      return !1;
  }
}
/**
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
 */
async function wu(i, e = {}) {
  return Rt(i, "GET", "/v1/projects", e);
}
/**
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
 */
const Eu = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Au = /^https?/;
async function Iu(i) {
  if (i.config.emulator)
    return;
  const { authorizedDomains: e } = await wu(i);
  for (const t of e)
    try {
      if (Su(t))
        return;
    } catch {
    }
  pe(
    i,
    "unauthorized-domain"
    /* INVALID_ORIGIN */
  );
}
function Su(i) {
  const e = Fn(), { protocol: t, hostname: n } = new URL(e);
  if (i.startsWith("chrome-extension://")) {
    const s = new URL(i);
    return s.hostname === "" && n === "" ? t === "chrome-extension:" && i.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && s.hostname === n;
  }
  if (!Au.test(t))
    return !1;
  if (Eu.test(i))
    return n === i;
  const r = i.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(n);
}
/**
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
 */
const Tu = new ii(3e4, 6e4);
function Qr() {
  const i = xe().___jsl;
  if (i != null && i.H) {
    for (const e of Object.keys(i.H))
      if (i.H[e].r = i.H[e].r || [], i.H[e].L = i.H[e].L || [], i.H[e].r = [...i.H[e].L], i.CP)
        for (let t = 0; t < i.CP.length; t++)
          i.CP[t] = null;
  }
}
function Cu(i) {
  return new Promise((e, t) => {
    var n, r, o;
    function s() {
      Qr(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Qr(), t(ve(
            i,
            "network-request-failed"
            /* NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Tu.get()
      });
    }
    if (!((r = (n = xe().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || r === void 0) && r.Iframe)
      e(gapi.iframes.getContext());
    else if (!((o = xe().gapi) === null || o === void 0) && o.load)
      s();
    else {
      const a = su("iframefcb");
      return xe()[a] = () => {
        gapi.load ? s() : t(ve(
          i,
          "network-request-failed"
          /* NETWORK_REQUEST_FAILED */
        ));
      }, ou(`https://apis.google.com/js/api.js?onload=${a}`).catch((d) => t(d));
    }
  }).catch((e) => {
    throw bi = null, e;
  });
}
let bi = null;
function ku(i) {
  return bi = bi || Cu(i), bi;
}
/**
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
 */
const Ou = new ii(5e3, 15e3), Ru = "__/auth/iframe", Nu = "emulator/auth/iframe", Lu = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Pu = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Du(i) {
  const e = i.config;
  N(
    e.authDomain,
    i,
    "auth-domain-config-required"
    /* MISSING_AUTH_DOMAIN */
  );
  const t = e.emulator ? sr(e, Nu) : `https://${i.config.authDomain}/${Ru}`, n = {
    apiKey: e.apiKey,
    appName: i.name,
    v: Fi
  }, r = Pu.get(i.config.apiHost);
  r && (n.eid = r);
  const o = i._getFrameworks();
  return o.length && (n.fw = o.join(",")), `${t}?${ti(n).slice(1)}`;
}
async function $u(i) {
  const e = await ku(i), t = xe().gapi;
  return N(
    t,
    i,
    "internal-error"
    /* INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Du(i),
    messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Lu,
    dontclear: !0
  }, (n) => new Promise(async (r, o) => {
    await n.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const s = ve(
      i,
      "network-request-failed"
      /* NETWORK_REQUEST_FAILED */
    ), a = xe().setTimeout(() => {
      o(s);
    }, Ou.get());
    function d() {
      xe().clearTimeout(a), r(n);
    }
    n.ping(d).then(d, () => {
      o(s);
    });
  }));
}
/**
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
 */
const Mu = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Fu = 500, Uu = 600, Hu = "_blank", Bu = "http://localhost";
class Zr {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function Vu(i, e, t, n = Fu, r = Uu) {
  const o = Math.max((window.screen.availHeight - r) / 2, 0).toString(), s = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let a = "";
  const d = Object.assign(Object.assign({}, Mu), {
    width: n.toString(),
    height: r.toString(),
    top: o,
    left: s
  }), l = ie().toLowerCase();
  t && (a = xs(l) ? Hu : t), vs(l) && (e = e || Bu, d.scrollbars = "yes");
  const u = Object.entries(d).reduce((f, [h, p]) => `${f}${h}=${p},`, "");
  if (vc(l) && a !== "_self")
    return zu(e || "", a), new Zr(null);
  const c = window.open(e || "", a, u);
  N(
    c,
    i,
    "popup-blocked"
    /* POPUP_BLOCKED */
  );
  try {
    c.focus();
  } catch {
  }
  return new Zr(c);
}
function zu(i, e) {
  const t = document.createElement("a");
  t.href = i, t.target = e;
  const n = document.createEvent("MouseEvent");
  n.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(n);
}
/**
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
 */
const ju = "__/auth/handler", Wu = "emulator/auth/handler";
function eo(i, e, t, n, r, o) {
  N(
    i.config.authDomain,
    i,
    "auth-domain-config-required"
    /* MISSING_AUTH_DOMAIN */
  ), N(
    i.config.apiKey,
    i,
    "invalid-api-key"
    /* INVALID_API_KEY */
  );
  const s = {
    apiKey: i.config.apiKey,
    appName: i.name,
    authType: t,
    redirectUrl: n,
    v: Fi,
    eventId: r
  };
  if (e instanceof Cs) {
    e.setDefaultLanguage(i.languageCode), s.providerId = e.providerId || "", Sd(e.getCustomParameters()) || (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, l] of Object.entries(o || {}))
      s[d] = l;
  }
  if (e instanceof si) {
    const d = e.getScopes().filter((l) => l !== "");
    d.length > 0 && (s.scopes = d.join(","));
  }
  i.tenantId && (s.tid = i.tenantId);
  const a = s;
  for (const d of Object.keys(a))
    a[d] === void 0 && delete a[d];
  return `${Gu(i)}?${ti(a).slice(1)}`;
}
function Gu({ config: i }) {
  return i.emulator ? sr(i, Wu) : `https://${i.authDomain}/${ju}`;
}
/**
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
 */
const dn = "webStorageSupport";
class qu {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Ds, this._completeRedirectFn = bu, this._overrideRedirectResult = mu;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, t, n, r) {
    var o;
    Re((o = this.eventManagers[e._key()]) === null || o === void 0 ? void 0 : o.manager, "_initialize() not called before _openPopup()");
    const s = eo(e, t, n, Fn(), r);
    return Vu(e, s, ur());
  }
  async _openRedirect(e, t, n, r) {
    return await this._originValidation(e), Kc(eo(e, t, n, Fn(), r)), new Promise(() => {
    });
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: r, promise: o } = this.eventManagers[t];
      return r ? Promise.resolve(r) : (Re(o, "If manager is not set, promise should be"), o);
    }
    const n = this.initAndGetManager(e);
    return this.eventManagers[t] = { promise: n }, n.catch(() => {
      delete this.eventManagers[t];
    }), n;
  }
  async initAndGetManager(e) {
    const t = await $u(e), n = new vu(e);
    return t.register("authEvent", (r) => (N(
      r == null ? void 0 : r.authEvent,
      e,
      "invalid-auth-event"
      /* INVALID_AUTH_EVENT */
    ), {
      status: n.onEvent(r.authEvent) ? "ACK" : "ERROR"
      /* ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: n }, this.iframes[e._key()] = t, n;
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(dn, { type: dn }, (r) => {
      var o;
      const s = (o = r == null ? void 0 : r[0]) === null || o === void 0 ? void 0 : o[dn];
      s !== void 0 && t(!!s), pe(
        e,
        "internal-error"
        /* INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const t = e._key();
    return this.originValidationPromises[t] || (this.originValidationPromises[t] = Iu(e)), this.originValidationPromises[t];
  }
  get _shouldInitProactively() {
    return Ss() || dr() || Ui();
  }
}
const Ku = qu;
var to = "@firebase/auth", io = "0.20.5";
/**
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
 */
class Xu {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const t = this.auth.onIdTokenChanged((n) => {
      var r;
      e(((r = n) === null || r === void 0 ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    N(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
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
 */
function Yu(i) {
  switch (i) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function Ju(i) {
  xt(new Qe(
    "auth",
    (e, { options: t }) => {
      const n = e.getProvider("app").getImmediate(), r = e.getProvider("heartbeat"), { apiKey: o, authDomain: s } = n.options;
      return ((a, d) => {
        N(o && !o.includes(":"), "invalid-api-key", { appName: a.name }), N(!(s != null && s.includes(":")), "argument-error", {
          appName: a.name
        });
        const l = {
          apiKey: o,
          authDomain: s,
          clientPlatform: i,
          apiHost: "identitytoolkit.googleapis.com",
          tokenApiHost: "securetoken.googleapis.com",
          apiScheme: "https",
          sdkClientVersion: Ts(i)
        }, u = new Ac(a, d, l);
        return nc(u, t), u;
      })(n, r);
    },
    "PUBLIC"
    /* PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* EXPLICIT */
  ).setInstanceCreatedCallback((e, t, n) => {
    e.getProvider(
      "auth-internal"
      /* AUTH_INTERNAL */
    ).initialize();
  })), xt(new Qe(
    "auth-internal",
    (e) => {
      const t = oi(e.getProvider(
        "auth"
        /* AUTH */
      ).getImmediate());
      return ((n) => new Xu(n))(t);
    },
    "PRIVATE"
    /* PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* EXPLICIT */
  )), je(to, io, Yu(i)), je(to, io, "esm2017");
}
/**
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
 */
function Qu(i = ls()) {
  const e = nr(i, "auth");
  return e.isInitialized() ? e.getImmediate() : ic(i, {
    popupRedirectResolver: Ku,
    persistence: [
      nu,
      Wc,
      Ds
    ]
  });
}
Ju(
  "Browser"
  /* BROWSER */
);
const Zu = {
  apiKey: "AIzaSyAtc2ed5rsHT7IOF9E1psFhkqtCqKib25U",
  authDomain: "glade-software-firebase.firebaseapp.com",
  databaseURL: "https://glade-software-firebase.firebaseio.com",
  projectId: "glade-software-firebase",
  storageBucket: "glade-software-firebase.appspot.com",
  messagingSenderId: "527964919900",
  appId: "1:527964919900:web:dc1ffc9e14a70b08b3ae99"
}, Vs = Sl(Zu), Le = Qu(Vs), nt = Jl(Vs), ct = [];
function eh(i, e = R) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function r(a) {
    if (ge(i, a) && (i = a, t)) {
      const d = !ct.length;
      for (const l of n)
        l[1](), ct.push(l, i);
      if (d) {
        for (let l = 0; l < ct.length; l += 2)
          ct[l][0](ct[l + 1]);
        ct.length = 0;
      }
    }
  }
  function o(a) {
    r(a(i));
  }
  function s(a, d = R) {
    const l = [a, d];
    return n.add(l), n.size === 1 && (t = e(r) || R), a(i), () => {
      n.delete(l), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: o, subscribe: s };
}
const mt = eh(null);
function no(i) {
  let e, t, n, r;
  return {
    c() {
      e = I("button"), t = fe("delete"), z(e, "class", "deleteButton"), e.disabled = /*isDeleting*/
      i[2];
    },
    m(o, s) {
      D(o, e, s), w(e, t), n || (r = G(
        e,
        "click",
        /*handleDeleteAnnotation*/
        i[4]
      ), n = !0);
    },
    p(o, s) {
      s & /*isDeleting*/
      4 && (e.disabled = /*isDeleting*/
      o[2]);
    },
    d(o) {
      o && H(e), n = !1, r();
    }
  };
}
function ro(i) {
  let e, t = (
    /*annotation*/
    (i[0].plainTextBody || "") + ""
  ), n;
  return {
    c() {
      e = I("div"), n = fe(t), z(e, "class", "htmlContent loading");
    },
    m(r, o) {
      D(r, e, o), w(e, n);
    },
    p(r, o) {
      o & /*annotation*/
      1 && t !== (t = /*annotation*/
      (r[0].plainTextBody || "") + "") && Li(n, t);
    },
    d(r) {
      r && H(e);
    }
  };
}
function th(i) {
  var v, y, g, m, x;
  let e, t, n, r, o, s, a = (
    /*annotation*/
    (((v = i[0]) == null ? void 0 : v.postedBy.displayName) || "accidental-anonymous-anteater") + ""
  ), d, l, u, c, f, h = (
    /*annotation*/
    ((y = i[0]) == null ? void 0 : y.htmlString) + ""
  ), p = (!/*isPreview*/
  i[1] && /*$currentUser*/
  i[3] && /*annotation*/
  ((g = i[0]) == null ? void 0 : g.postedBy.uid) == /*$currentUser*/
  i[3].uid || /*$currentUser*/
  ((m = i[3]) == null ? void 0 : m.isForestOwner)) && no(i), _ = (
    /*annotation*/
    i[0] && !/*annotation*/
    ((x = i[0]) != null && x.htmlString) && ro(i)
  );
  return {
    c() {
      e = I("div"), t = I("style"), t.textContent = `.annotation {
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
    }`, n = F(), r = I("div"), o = I("span"), s = fe("@"), d = fe(a), l = F(), p && p.c(), u = F(), _ && _.c(), c = F(), f = I("div"), this.c = R, z(o, "class", "postedBy"), z(f, "class", "htmlContent"), z(r, "class", "annotation");
    },
    m(E, O) {
      D(E, e, O), w(e, t), w(e, n), w(e, r), w(r, o), w(o, s), w(o, d), w(r, l), p && p.m(r, null), w(r, u), _ && _.m(r, null), w(r, c), w(r, f), f.innerHTML = h;
    },
    p(E, [O]) {
      var k, A, P, $, M;
      O & /*annotation*/
      1 && a !== (a = /*annotation*/
      (((k = E[0]) == null ? void 0 : k.postedBy.displayName) || "accidental-anonymous-anteater") + "") && Li(d, a), !/*isPreview*/
      E[1] && /*$currentUser*/
      E[3] && /*annotation*/
      ((A = E[0]) == null ? void 0 : A.postedBy.uid) == /*$currentUser*/
      E[3].uid || /*$currentUser*/
      (P = E[3]) != null && P.isForestOwner ? p ? p.p(E, O) : (p = no(E), p.c(), p.m(r, u)) : p && (p.d(1), p = null), /*annotation*/
      E[0] && !/*annotation*/
      (($ = E[0]) != null && $.htmlString) ? _ ? _.p(E, O) : (_ = ro(E), _.c(), _.m(r, c)) : _ && (_.d(1), _ = null), O & /*annotation*/
      1 && h !== (h = /*annotation*/
      ((M = E[0]) == null ? void 0 : M.htmlString) + "") && (f.innerHTML = h);
    },
    i: R,
    o: R,
    d(E) {
      E && H(e), p && p.d(), _ && _.d();
    }
  };
}
function ih(i, e, t) {
  let n;
  fa(i, mt, (u) => t(3, n = u));
  var r = this && this.__awaiter || function(u, c, f, h) {
    function p(_) {
      return _ instanceof f ? _ : new f(function(v) {
        v(_);
      });
    }
    return new (f || (f = Promise))(function(_, v) {
      function y(x) {
        try {
          m(h.next(x));
        } catch (E) {
          v(E);
        }
      }
      function g(x) {
        try {
          m(h.throw(x));
        } catch (E) {
          v(E);
        }
      }
      function m(x) {
        x.done ? _(x.value) : p(x.value).then(y, g);
      }
      m((h = h.apply(u, c || [])).next());
    });
  };
  let { annotation: o } = e, { deleteAnnotation: s } = e, { isPreview: a } = e, d = !1;
  function l() {
    return r(this, void 0, void 0, function* () {
      a || (t(2, d = !0), console.log("handleDelete", o), yield s(o), t(2, d = !1));
    });
  }
  return i.$$set = (u) => {
    "annotation" in u && t(0, o = u.annotation), "deleteAnnotation" in u && t(5, s = u.deleteAnnotation), "isPreview" in u && t(1, a = u.isPreview);
  }, [
    o,
    a,
    d,
    n,
    l,
    s
  ];
}
let fr = class extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      ih,
      th,
      ge,
      {
        annotation: 0,
        deleteAnnotation: 5,
        isPreview: 1
      },
      null
    ), e && (e.target && D(e.target, this, e.anchor), e.props && (this.$set(e.props), W()));
  }
  static get observedAttributes() {
    return ["annotation", "deleteAnnotation", "isPreview"];
  }
  get annotation() {
    return this.$$.ctx[0];
  }
  set annotation(e) {
    this.$$set({ annotation: e }), W();
  }
  get deleteAnnotation() {
    return this.$$.ctx[5];
  }
  set deleteAnnotation(e) {
    this.$$set({ deleteAnnotation: e }), W();
  }
  get isPreview() {
    return this.$$.ctx[1];
  }
  set isPreview(e) {
    this.$$set({ isPreview: e }), W();
  }
};
customElements.define("glade-annotatable-annotation", fr);
function oo(i, e, t) {
  const n = i.slice();
  return n[11] = e[t], n;
}
function nh(i) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "No annotations here yet!", z(e, "class", "noAnnotationsMsg");
    },
    m(t, n) {
      D(t, e, n);
    },
    p: R,
    i: R,
    o: R,
    d(t) {
      t && H(e);
    }
  };
}
function rh(i) {
  let e, t, n = (
    /*annotations*/
    i[0]
  ), r = [];
  for (let s = 0; s < n.length; s += 1)
    r[s] = so(oo(i, n, s));
  const o = (s) => J(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      e = ga();
    },
    m(s, a) {
      for (let d = 0; d < r.length; d += 1)
        r[d] && r[d].m(s, a);
      D(s, e, a), t = !0;
    },
    p(s, a) {
      if (a & /*annotations, deleteAnnotation*/
      5) {
        n = /*annotations*/
        s[0];
        let d;
        for (d = 0; d < n.length; d += 1) {
          const l = oo(s, n, d);
          r[d] ? (r[d].p(l, a), q(r[d], 1)) : (r[d] = so(l), r[d].c(), q(r[d], 1), r[d].m(e.parentNode, e));
        }
        for (Pi(), d = n.length; d < r.length; d += 1)
          o(d);
        Di();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          q(r[a]);
        t = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        J(r[a]);
      t = !1;
    },
    d(s) {
      ma(r, s), s && H(e);
    }
  };
}
function so(i) {
  let e, t;
  return e = new fr({
    props: {
      annotation: (
        /*annotation*/
        i[11]
      ),
      deleteAnnotation: (
        /*deleteAnnotation*/
        i[2]
      ),
      isPreview: !1
    }
  }), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      _e(e, n, r), t = !0;
    },
    p(n, r) {
      const o = {};
      r & /*annotations*/
      1 && (o.annotation = /*annotation*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      be(e, n);
    }
  };
}
function oh(i) {
  let e, t, n, r, o, s, a, d, l, u, c, f;
  const h = [rh, nh], p = [];
  function _(v, y) {
    return (
      /*annotations*/
      v[0] && /*annotations*/
      v[0].length ? 0 : 1
    );
  }
  return o = _(i), s = p[o] = h[o](i), {
    c() {
      e = I("div"), t = I("style"), t.textContent = `.htmlContent {
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
    }`, n = F(), r = I("div"), s.c(), a = F(), d = I("div"), l = I("mwc-button"), l.textContent = "Create Annotation!", this.c = R, z(d, "class", "buttonShelf");
    },
    m(v, y) {
      D(v, e, y), w(e, t), w(e, n), w(e, r), p[o].m(r, null), w(r, a), w(r, d), w(d, l), u = !0, c || (f = G(
        l,
        "click",
        /*handleClickCreateAnnotation*/
        i[1]
      ), c = !0);
    },
    p(v, [y]) {
      let g = o;
      o = _(v), o === g ? p[o].p(v, y) : (Pi(), J(p[g], 1, 1, () => {
        p[g] = null;
      }), Di(), s = p[o], s ? s.p(v, y) : (s = p[o] = h[o](v), s.c()), q(s, 1), s.m(r, a));
    },
    i(v) {
      u || (q(s), u = !0);
    },
    o(v) {
      J(s), u = !1;
    },
    d(v) {
      v && H(e), p[o].d(), c = !1, f();
    }
  };
}
function sh(i, e, t) {
  var n = this && this.__awaiter || function(h, p, _, v) {
    function y(g) {
      return g instanceof _ ? g : new _(function(m) {
        m(g);
      });
    }
    return new (_ || (_ = Promise))(function(g, m) {
      function x(k) {
        try {
          O(v.next(k));
        } catch (A) {
          m(A);
        }
      }
      function E(k) {
        try {
          O(v.throw(k));
        } catch (A) {
          m(A);
        }
      }
      function O(k) {
        k.done ? g(k.value) : y(k.value).then(x, E);
      }
      O((v = v.apply(h, p || [])).next());
    });
  };
  let { annotations: r } = e, { apikey: o } = e, { gladedocumenthash: s } = e;
  const a = tt(nt, "deleteAnnotation");
  mt.subscribe((h) => {
  });
  const d = St();
  function l(h, p) {
    console.log("dispatching change-view"), d("set-view", { nextView: h, dismissModal: p });
  }
  function u(h) {
    console.debug("dispatching", h.code), d("error", h);
  }
  const c = () => {
    if (!Le.currentUser) {
      u({
        code: "ListAnnotationsView.handleClickCreateAnnotation.notLoggedIn",
        message: "You need to login to create an annotation!"
      }), l(U.AuthenticationMenu);
      return;
    }
    l(U.Create);
  }, f = ({ uid: h }) => n(void 0, void 0, void 0, function* () {
    console.log("deleting annotation", h);
    const p = {
      annotationUid: h,
      gladeAPIKey: o,
      gladeDocumentHash: s
    };
    yield a(p), d("delete-annotation", p), d("set-view", {
      nextView: U.List,
      dismissModal: !0
    });
  });
  return console.debug("ListAnnotationsView initialized"), i.$$set = (h) => {
    "annotations" in h && t(0, r = h.annotations), "apikey" in h && t(3, o = h.apikey), "gladedocumenthash" in h && t(4, s = h.gladedocumenthash);
  }, [
    r,
    c,
    f,
    o,
    s
  ];
}
class zs extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      sh,
      oh,
      ge,
      {
        annotations: 0,
        apikey: 3,
        gladedocumenthash: 4
      },
      null
    ), e && (e.target && D(e.target, this, e.anchor), e.props && (this.$set(e.props), W()));
  }
  static get observedAttributes() {
    return ["annotations", "apikey", "gladedocumenthash"];
  }
  get annotations() {
    return this.$$.ctx[0];
  }
  set annotations(e) {
    this.$$set({ annotations: e }), W();
  }
  get apikey() {
    return this.$$.ctx[3];
  }
  set apikey(e) {
    this.$$set({ apikey: e }), W();
  }
  get gladedocumenthash() {
    return this.$$.ctx[4];
  }
  set gladedocumenthash(e) {
    this.$$set({ gladedocumenthash: e }), W();
  }
}
customElements.define("glade-annotatable-list-annotations-view", zs);
/**
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
*/
const js = ot`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/*! *****************************************************************************
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
***************************************************************************** */
var Hn = function(i, e) {
  return Hn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n)
      n.hasOwnProperty(r) && (t[r] = n[r]);
  }, Hn(i, e);
};
function ah(i, e) {
  Hn(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ki = function() {
  return ki = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ki.apply(this, arguments);
};
/**
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
 */
var dh = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ao = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, lh = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
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
 */
var ch = (
  /** @class */
  function(i) {
    ah(e, i);
    function e(t) {
      return i.call(this, ki(ki({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return dh;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lh;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ao;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.notch = function(t) {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += ao.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(n);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(kt)
);
class di extends Mi {
  constructor() {
    super(...arguments), this.mdcFoundationClass = ch, this.width = 0, this.open = !1, this.lastOpen = this.open;
  }
  createAdapter() {
    return {
      addClass: (e) => this.mdcRoot.classList.add(e),
      removeClass: (e) => this.mdcRoot.classList.remove(e),
      setNotchWidthProperty: (e) => this.notchElement.style.setProperty("width", `${e}px`),
      removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width")
    };
  }
  openOrClose(e, t) {
    this.mdcFoundation && (e && t !== void 0 ? this.mdcFoundation.notch(t) : this.mdcFoundation.closeNotch());
  }
  render() {
    this.openOrClose(this.open, this.width);
    const e = ue({
      "mdc-notched-outline--notched": this.open
    });
    return j`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
b([
  Z(".mdc-notched-outline")
], di.prototype, "mdcRoot", void 0);
b([
  T({ type: Number })
], di.prototype, "width", void 0);
b([
  T({ type: Boolean, reflect: !0 })
], di.prototype, "open", void 0);
b([
  Z(".mdc-notched-outline__notch")
], di.prototype, "notchElement", void 0);
/**
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
*/
const uh = ot`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let Bn = class extends di {
};
Bn.styles = uh;
Bn = b([
  rt("mwc-notched-outline")
], Bn);
/**
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
*/
class hh extends Mi {
  createRenderRoot() {
    return this.attachShadow({ mode: "open", delegatesFocus: !0 });
  }
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(e) {
    this.formElement && this.formElement.setAttribute("aria-label", e);
  }
  firstUpdated() {
    super.firstUpdated(), this.mdcRoot.addEventListener("change", (e) => {
      this.dispatchEvent(new Event("change", e));
    });
  }
}
/*! *****************************************************************************
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
***************************************************************************** */
var Vn = function(i, e) {
  return Vn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n)
      n.hasOwnProperty(r) && (t[r] = n[r]);
  }, Vn(i, e);
};
function fh(i, e) {
  Vn(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Oi = function() {
  return Oi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Oi.apply(this, arguments);
};
/**
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
 */
var ph = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
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
 */
var mh = (
  /** @class */
  function(i) {
    fh(e, i);
    function e(t) {
      var n = i.call(this, Oi(Oi({}, e.defaultAdapter), t)) || this;
      return n.shakeAnimationEndHandler_ = function() {
        return n.handleShakeAnimationEnd_();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ph;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(t) {
      var n = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.float = function(t) {
      var n = e.cssClasses, r = n.LABEL_FLOAT_ABOVE, o = n.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(o));
    }, e.prototype.setRequired = function(t) {
      var n = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.handleShakeAnimationEnd_ = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(kt)
);
const gh = (i) => ({
  addClass: (e) => i.classList.add(e),
  removeClass: (e) => i.classList.remove(e),
  getWidth: () => i.scrollWidth,
  registerInteractionHandler: (e, t) => {
    i.addEventListener(e, t);
  },
  deregisterInteractionHandler: (e, t) => {
    i.removeEventListener(e, t);
  }
}), lo = /* @__PURE__ */ new WeakMap(), _h = Tt((i) => (e) => {
  if (!lo.get(e)) {
    const n = e.committer.element;
    n.classList.add("mdc-floating-label");
    const r = gh(n), o = new mh(r);
    o.init(), e.setValue(o), lo.set(e, { label: i, foundation: o });
  }
});
/*! *****************************************************************************
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
***************************************************************************** */
var zn = function(i, e) {
  return zn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n)
      n.hasOwnProperty(r) && (t[r] = n[r]);
  }, zn(i, e);
};
function bh(i, e) {
  zn(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ri = function() {
  return Ri = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ri.apply(this, arguments);
};
/**
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
 */
var qe = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
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
 */
var yh = (
  /** @class */
  function(i) {
    bh(e, i);
    function e(t) {
      var n = i.call(this, Ri(Ri({}, e.defaultAdapter), t)) || this;
      return n.transitionEndHandler_ = function(r) {
        return n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qe;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler_);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler_);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(qe.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(qe.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(qe.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var n = this.adapter.hasClass(qe.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && n && (this.adapter.removeClass(qe.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(qe.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(kt)
);
const vh = (i) => ({
  addClass: (e) => i.classList.add(e),
  removeClass: (e) => i.classList.remove(e),
  hasClass: (e) => i.classList.contains(e),
  setStyle: (e, t) => i.style.setProperty(e, t),
  registerEventHandler: (e, t) => {
    i.addEventListener(e, t);
  },
  deregisterEventHandler: (e, t) => {
    i.removeEventListener(e, t);
  }
}), co = /* @__PURE__ */ new WeakMap(), xh = Tt(() => (i) => {
  if (!co.get(i)) {
    const t = i.committer.element;
    t.classList.add("mdc-line-ripple");
    const n = vh(t), r = new yh(n);
    r.init(), i.setValue(r), co.set(i, r);
  }
});
/*! *****************************************************************************
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
***************************************************************************** */
var jn = function(i, e) {
  return jn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n)
      n.hasOwnProperty(r) && (t[r] = n[r]);
  }, jn(i, e);
};
function wh(i, e) {
  jn(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ni = function() {
  return Ni = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ni.apply(this, arguments);
};
/**
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
 */
var ln = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, Eh = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"
}, uo = {
  LABEL_SCALE: 0.75
}, Ah = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Ih = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
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
 */
var ho = ["mousedown", "touchstart"], fo = ["click", "keydown"], Sh = (
  /** @class */
  function(i) {
    wh(e, i);
    function e(t, n) {
      n === void 0 && (n = {});
      var r = i.call(this, Ni(Ni({}, e.defaultAdapter), t)) || this;
      return r.isFocused_ = !1, r.receivedUserInput_ = !1, r.isValid_ = !0, r.useNativeValidation_ = !0, r.validateOnValueChange_ = !0, r.helperText_ = n.helperText, r.characterCounter_ = n.characterCounter, r.leadingIcon_ = n.leadingIcon, r.trailingIcon_ = n.trailingIcon, r.inputFocusHandler_ = function() {
        return r.activateFocus();
      }, r.inputBlurHandler_ = function() {
        return r.deactivateFocus();
      }, r.inputInputHandler_ = function() {
        return r.handleInput();
      }, r.setPointerXOffset_ = function(o) {
        return r.setTransformOrigin(o);
      }, r.textFieldInteractionHandler_ = function() {
        return r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler_ = function(o) {
        return r.handleValidationAttributeChange(o);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Eh;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ln;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return uo;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat_", {
      get: function() {
        var t = this.getNativeInput_().type;
        return Ih.indexOf(t) >= 0;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused_ && !this.isValid() && !!this.getValue();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this;
      this.adapter.hasLabel() && this.getNativeInput_().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler_() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating_(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler_), ho.forEach(function(n) {
        t.adapter.registerInputInteractionHandler(n, t.setPointerXOffset_);
      }), fo.forEach(function(n) {
        t.adapter.registerTextFieldInteractionHandler(n, t.textFieldInteractionHandler_);
      }), this.validationObserver_ = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t = this;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler_), ho.forEach(function(n) {
        t.adapter.deregisterInputInteractionHandler(n, t.setPointerXOffset_);
      }), fo.forEach(function(n) {
        t.adapter.deregisterTextFieldInteractionHandler(n, t.textFieldInteractionHandler_);
      }), this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput_ = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var n = this;
      t.some(function(r) {
        return Ah.indexOf(r) > -1 ? (n.styleValidity_(!0), n.adapter.setLabelRequired(n.getNativeInput_().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setCharacterCounter_(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var n = this.adapter.getLabelWidth() * uo.LABEL_SCALE;
          this.adapter.notchOutline(n);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused_ = !0, this.styleFocused_(this.isFocused_), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText_ && (this.helperText_.isPersistent() || !this.helperText_.isValidation() || !this.isValid_) && this.helperText_.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var n = t.touches, r = n ? n[0] : t, o = r.target.getBoundingClientRect(), s = r.clientX - o.left;
        this.adapter.setLineRippleTransformOrigin(s);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput_ || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused_ = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity_(t), this.styleFocused_(this.isFocused_), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput_().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput_().value = t), this.setCharacterCounter_(t.length), this.validateOnValueChange_) {
        var n = this.isValid();
        this.styleValidity_(n);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.validateOnValueChange_ && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
    }, e.prototype.setValid = function(t) {
      this.isValid_ = t, this.styleValidity_(t);
      var n = !t && !this.isFocused_ && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(n);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange_ = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange_;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation_ = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput_().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput_().disabled = t, this.styleDisabled_(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText_ && this.helperText_.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon_ && this.leadingIcon_.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon_ && this.trailingIcon_.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon_ && this.trailingIcon_.setContent(t);
    }, e.prototype.setCharacterCounter_ = function(t) {
      if (this.characterCounter_) {
        var n = this.getNativeInput_().maxLength;
        if (n === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter_.setCounterValue(t, n);
      }
    }, e.prototype.isBadInput_ = function() {
      return this.getNativeInput_().validity.badInput || !1;
    }, e.prototype.isNativeInputValid_ = function() {
      return this.getNativeInput_().validity.valid;
    }, e.prototype.styleValidity_ = function(t) {
      var n = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText_) {
        this.helperText_.setValidity(t);
        var r = this.helperText_.isValidation();
        if (!r)
          return;
        var o = this.helperText_.isVisible(), s = this.helperText_.getId();
        o && s ? this.adapter.setInputAttr(ln.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(ln.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused_ = function(t) {
      var n = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.styleDisabled_ = function(t) {
      var n = e.cssClasses, r = n.DISABLED, o = n.INVALID;
      t ? (this.adapter.addClass(r), this.adapter.removeClass(o)) : this.adapter.removeClass(r), this.leadingIcon_ && this.leadingIcon_.setDisabled(t), this.trailingIcon_ && this.trailingIcon_.setDisabled(t);
    }, e.prototype.styleFloating_ = function(t) {
      var n = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.getNativeInput_ = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(kt)
);
const Th = Sh;
/**
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
 */
const cn = /* @__PURE__ */ new WeakMap(), X = Tt((i) => (e) => {
  const t = cn.get(e);
  if (i === void 0 && e instanceof Ct) {
    if (t !== void 0 || !cn.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else
    i !== t && e.setValue(i);
  cn.set(e, i);
});
/**
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
 */
const Ws = Tt((i) => (e) => {
  let t;
  if (e instanceof jo || e instanceof Qt)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof Vo)
    po(e.strings), t = e.element.hasAttribute(e.name), e.value = t;
  else {
    const { element: n, name: r, strings: o } = e.committer;
    if (po(o), e instanceof $i) {
      if (t = n[r], t === i)
        return;
    } else
      e instanceof Ct && (t = n.getAttribute(r));
    if (t === String(i))
      return;
  }
  e.setValue(i);
}), po = (i) => {
  if (i.length !== 2 || i[0] !== "" || i[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
}, Ch = ["touchstart", "touchmove", "scroll", "mousewheel"], mo = (i = {}) => {
  const e = {};
  for (const t in i)
    e[t] = i[t];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class L extends hh {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Th, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = mo(), this._outlineUpdateComplete = null, this.validityTransform = null;
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  get willValidate() {
    return this.formElement.willValidate;
  }
  get selectionStart() {
    return this.formElement.selectionStart;
  }
  get selectionEnd() {
    return this.formElement.selectionEnd;
  }
  focus() {
    const e = new CustomEvent("focus");
    this.formElement.dispatchEvent(e), this.formElement.focus();
  }
  blur() {
    const e = new CustomEvent("blur");
    this.formElement.dispatchEvent(e), this.formElement.blur();
  }
  select() {
    this.formElement.select();
  }
  setSelectionRange(e, t, n) {
    this.formElement.setSelectionRange(e, t, n);
  }
  update(e) {
    e.has("autoValidate") && this.mdcFoundation && this.mdcFoundation.setValidateOnValueChange(this.autoValidate), e.has("value") && typeof this.value != "string" && (this.value = `${this.value}`), super.update(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.charCounter && this.maxLength !== -1, t = !!this.helper || !!this.validationMessage || e, n = {
      "mdc-text-field--disabled": this.disabled,
      "mdc-text-field--no-label": !this.label,
      "mdc-text-field--filled": !this.outlined,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--with-leading-icon": this.icon,
      "mdc-text-field--with-trailing-icon": this.iconTrailing,
      "mdc-text-field--end-aligned": this.endAligned
    };
    return j`
      <label class="mdc-text-field ${ue(n)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t, e)}
    `;
  }
  updated(e) {
    e.has("value") && e.get("value") !== void 0 && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity());
  }
  /** @soyTemplate */
  renderRipple() {
    return this.outlined ? "" : j`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  /** @soyTemplate */
  renderOutline() {
    return this.outlined ? j`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : "";
  }
  /** @soyTemplate */
  renderLabel() {
    return this.label ? j`
      <span
          .floatingLabelFoundation=${_h(this.label)}
          id="label">${this.label}</span>
    ` : "";
  }
  /** @soyTemplate */
  renderLeadingIcon() {
    return this.icon ? this.renderIcon(this.icon) : "";
  }
  /** @soyTemplate */
  renderTrailingIcon() {
    return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : "";
  }
  /** @soyTemplate */
  renderIcon(e, t = !1) {
    return j`<i class="material-icons mdc-text-field__icon ${ue({
      "mdc-text-field__icon--leading": !t,
      "mdc-text-field__icon--trailing": t
    })}">${e}</i>`;
  }
  /** @soyTemplate */
  renderPrefix() {
    return this.prefix ? this.renderAffix(this.prefix) : "";
  }
  /** @soyTemplate */
  renderSuffix() {
    return this.suffix ? this.renderAffix(this.suffix, !0) : "";
  }
  /** @soyTemplate */
  renderAffix(e, t = !1) {
    return j`<span class="mdc-text-field__affix ${ue({
      "mdc-text-field__affix--prefix": !t,
      "mdc-text-field__affix--suffix": t
    })}">
        ${e}</span>`;
  }
  /** @soyTemplate */
  renderInput(e) {
    const t = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0, o = this.validationMessage && !this.isUiValid, s = e ? "helper-text" : void 0, a = this.focused || this.helperPersistent || o ? "helper-text" : void 0, d = o ? "helper-text" : void 0;
    return j`
      <input
          aria-labelledby="label"
          aria-controls="${X(s)}"
          aria-describedby="${X(a)}"
          aria-errortext="${X(d)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Ws(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${X(t)}"
          maxlength="${X(n)}"
          pattern="${X(this.pattern ? this.pattern : void 0)}"
          min="${X(this.min === "" ? void 0 : this.min)}"
          max="${X(this.max === "" ? void 0 : this.max)}"
          step="${X(this.step === null ? void 0 : this.step)}"
          size="${X(this.size === null ? void 0 : this.size)}"
          name="${X(this.name === "" ? void 0 : this.name)}"
          inputmode="${X(this.inputMode)}"
          autocapitalize="${X(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  /** @soyTemplate */
  renderLineRipple() {
    return this.outlined ? "" : j`
      <span .lineRippleFoundation=${xh()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(e, t) {
    const n = this.validationMessage && !this.isUiValid, r = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": n
    }, o = this.focused || this.helperPersistent || n ? void 0 : "true", s = n ? this.validationMessage : this.helper;
    return e ? j`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${X(o)}"
             class="mdc-text-field-helper-text ${ue(r)}"
             >${s}</div>
        ${this.renderCharCounter(t)}
      </div>` : "";
  }
  /** @soyTemplate */
  renderCharCounter(e) {
    const t = Math.min(this.value.length, this.maxLength);
    return e ? j`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>` : "";
  }
  onInputFocus() {
    this.focused = !0;
  }
  onInputBlur() {
    this.focused = !1, this.reportValidity();
  }
  checkValidity() {
    const e = this._checkValidity(this.value);
    if (!e) {
      const t = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(t);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return this.mdcFoundation.setValid(e), this.isUiValid = e, e;
  }
  _checkValidity(e) {
    const t = this.formElement.validity;
    let n = mo(t);
    if (this.validityTransform) {
      const r = this.validityTransform(e, n);
      n = Object.assign(Object.assign({}, n), r), this.mdcFoundation.setUseNativeValidation(!1);
    } else
      this.mdcFoundation.setUseNativeValidation(!0);
    return this._validity = n, this._validity.valid;
  }
  setCustomValidity(e) {
    this.validationMessage = e, this.formElement.setCustomValidity(e);
  }
  handleInputChange() {
    this.value = this.formElement.value;
  }
  createFoundation() {
    this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(), this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init();
  }
  createAdapter() {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
  }
  getRootAdapterMethods() {
    return Object.assign({ registerTextFieldInteractionHandler: (e, t) => this.addEventListener(e, t), deregisterTextFieldInteractionHandler: (e, t) => this.removeEventListener(e, t), registerValidationAttributeChangeHandler: (e) => {
      const t = (o) => o.map((s) => s.attributeName).filter((s) => s), n = new MutationObserver((o) => {
        e(t(o));
      }), r = { attributes: !0 };
      return n.observe(this.formElement, r), n;
    }, deregisterValidationAttributeChangeHandler: (e) => e.disconnect() }, es(this.mdcRoot));
  }
  getInputAdapterMethods() {
    return {
      getNativeInput: () => this.formElement,
      // since HelperTextFoundation is not used, aria-describedby a11y logic
      // is implemented in render method instead of these adapter methods
      setInputAttr: () => {
      },
      removeInputAttr: () => {
      },
      isFocused: () => this.shadowRoot ? this.shadowRoot.activeElement === this.formElement : !1,
      registerInputInteractionHandler: (e, t) => this.formElement.addEventListener(e, t, { passive: e in Ch }),
      deregisterInputInteractionHandler: (e, t) => this.formElement.removeEventListener(e, t)
    };
  }
  getLabelAdapterMethods() {
    return {
      floatLabel: (e) => this.labelElement && this.labelElement.floatingLabelFoundation.float(e),
      getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0,
      hasLabel: () => !!this.labelElement,
      shakeLabel: (e) => this.labelElement && this.labelElement.floatingLabelFoundation.shake(e),
      setLabelRequired: (e) => {
        this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(e);
      }
    };
  }
  getLineRippleAdapterMethods() {
    return {
      activateLineRipple: () => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
      },
      deactivateLineRipple: () => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
      },
      setLineRippleTransformOrigin: (e) => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
      }
    };
  }
  async _getUpdateComplete() {
    await super._getUpdateComplete(), await this._outlineUpdateComplete;
  }
  async firstUpdated() {
    const e = this.outlineElement;
    e && (this._outlineUpdateComplete = e.updateComplete, await this._outlineUpdateComplete), super.firstUpdated(), this.mdcFoundation.setValidateOnValueChange(this.autoValidate), this.validateOnInitialRender && this.reportValidity();
  }
  getOutlineAdapterMethods() {
    return {
      closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
      hasOutline: () => !!this.outlineElement,
      notchOutline: (e) => {
        this.outlineElement && !this.outlineOpen && (this.outlineWidth = e, this.outlineOpen = !0);
      }
    };
  }
  async layout() {
    await this.updateComplete;
    const e = this.labelElement;
    if (!e) {
      this.outlineOpen = !1;
      return;
    }
    const t = !!this.label && !!this.value;
    if (e.floatingLabelFoundation.float(t), !this.outlined)
      return;
    this.outlineOpen = t, await this.updateComplete;
    const n = e.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = n);
  }
}
b([
  Z(".mdc-text-field")
], L.prototype, "mdcRoot", void 0);
b([
  Z("input")
], L.prototype, "formElement", void 0);
b([
  Z(".mdc-floating-label")
], L.prototype, "labelElement", void 0);
b([
  Z(".mdc-line-ripple")
], L.prototype, "lineRippleElement", void 0);
b([
  Z("mwc-notched-outline")
], L.prototype, "outlineElement", void 0);
b([
  Z(".mdc-notched-outline__notch")
], L.prototype, "notchElement", void 0);
b([
  T({ type: String })
], L.prototype, "value", void 0);
b([
  T({ type: String })
], L.prototype, "type", void 0);
b([
  T({ type: String })
], L.prototype, "placeholder", void 0);
b([
  T({ type: String }),
  Ot(function(i, e) {
    e !== void 0 && this.label !== e && this.layout();
  })
], L.prototype, "label", void 0);
b([
  T({ type: String })
], L.prototype, "icon", void 0);
b([
  T({ type: String })
], L.prototype, "iconTrailing", void 0);
b([
  T({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", void 0);
b([
  T({ type: Boolean })
], L.prototype, "required", void 0);
b([
  T({ type: Number })
], L.prototype, "minLength", void 0);
b([
  T({ type: Number })
], L.prototype, "maxLength", void 0);
b([
  T({ type: Boolean, reflect: !0 }),
  Ot(function(i, e) {
    e !== void 0 && this.outlined !== e && this.layout();
  })
], L.prototype, "outlined", void 0);
b([
  T({ type: String })
], L.prototype, "helper", void 0);
b([
  T({ type: Boolean })
], L.prototype, "validateOnInitialRender", void 0);
b([
  T({ type: String })
], L.prototype, "validationMessage", void 0);
b([
  T({ type: Boolean })
], L.prototype, "autoValidate", void 0);
b([
  T({ type: String })
], L.prototype, "pattern", void 0);
b([
  T({ type: String })
], L.prototype, "min", void 0);
b([
  T({ type: String })
], L.prototype, "max", void 0);
b([
  T({ type: Number })
], L.prototype, "step", void 0);
b([
  T({ type: Number })
], L.prototype, "size", void 0);
b([
  T({ type: Boolean })
], L.prototype, "helperPersistent", void 0);
b([
  T({ type: Boolean })
], L.prototype, "charCounter", void 0);
b([
  T({ type: Boolean })
], L.prototype, "endAligned", void 0);
b([
  T({ type: String })
], L.prototype, "prefix", void 0);
b([
  T({ type: String })
], L.prototype, "suffix", void 0);
b([
  T({ type: String })
], L.prototype, "name", void 0);
b([
  T({ type: String })
], L.prototype, "inputMode", void 0);
b([
  T({ type: Boolean })
], L.prototype, "readOnly", void 0);
b([
  T({ type: String })
], L.prototype, "autocapitalize", void 0);
b([
  T({ type: Boolean })
], L.prototype, "outlineOpen", void 0);
b([
  T({ type: Number })
], L.prototype, "outlineWidth", void 0);
b([
  T({ type: Boolean })
], L.prototype, "isUiValid", void 0);
b([
  de()
], L.prototype, "focused", void 0);
b([
  Qo({ passive: !0 })
], L.prototype, "handleInputChange", null);
/**
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
*/
const kh = {
  fromAttribute(i) {
    return i === null ? !1 : i === "" ? !0 : i;
  },
  toAttribute(i) {
    return typeof i == "boolean" ? i ? "" : null : i;
  }
};
class li extends L {
  constructor() {
    super(...arguments), this.rows = 2, this.cols = 20, this.charCounter = !1;
  }
  /** @soyTemplate */
  render() {
    const e = this.charCounter && this.maxLength !== -1, t = e && this.charCounter === "internal", n = e && !t, r = !!this.helper || !!this.validationMessage || n, o = {
      "mdc-text-field--disabled": this.disabled,
      "mdc-text-field--no-label": !this.label,
      "mdc-text-field--filled": !this.outlined,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--end-aligned": this.endAligned,
      "mdc-text-field--with-internal-counter": t
    };
    return j`
      <label class="mdc-text-field mdc-text-field--textarea ${ue(o)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(r, n)}
    `;
  }
  /** @soyTemplate */
  renderInput() {
    const e = this.minLength === -1 ? void 0 : this.minLength, t = this.maxLength === -1 ? void 0 : this.maxLength, n = this.autocapitalize ? this.autocapitalize : void 0;
    return j`
      <textarea
          aria-labelledby="label"
          class="mdc-text-field__input"
          .value="${Ws(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${X(e)}"
          maxlength="${X(t)}"
          name="${X(this.name === "" ? void 0 : this.name)}"
          inputmode="${X(this.inputMode)}"
          autocapitalize="${X(n)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`;
  }
}
b([
  Z("textarea")
], li.prototype, "formElement", void 0);
b([
  T({ type: Number })
], li.prototype, "rows", void 0);
b([
  T({ type: Number })
], li.prototype, "cols", void 0);
b([
  T({ converter: kh })
], li.prototype, "charCounter", void 0);
/**
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
*/
const Oh = ot`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;
/**
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
*/
let Wn = class extends li {
};
Wn.styles = [js, Oh];
Wn = b([
  rt("mwc-textarea")
], Wn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rh = (i) => (e) => typeof e == "function" ? ((t, n) => (window.customElements.define(t, n), n))(i, e) : ((t, n) => {
  const { kind: r, elements: o } = n;
  return { kind: r, elements: o, finisher(s) {
    window.customElements.define(t, s);
  } };
})(i, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nh = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(t) {
  t.createProperty(e.key, i);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(t) {
  t.createProperty(e.key, i);
} };
function st(i) {
  return (e, t) => t !== void 0 ? ((n, r, o) => {
    r.constructor.createProperty(o, n);
  })(i, e, t) : Nh(i, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function at(i) {
  return st({ ...i, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lh = ({ finisher: i, descriptor: e }) => (t, n) => {
  var r;
  if (n === void 0) {
    const o = (r = t.originalKey) !== null && r !== void 0 ? r : t.key, s = e != null ? { kind: "method", placement: "prototype", key: o, descriptor: e(t.key) } : { ...t, key: o };
    return i != null && (s.finisher = function(a) {
      i(a, o);
    }), s;
  }
  {
    const o = t.constructor;
    e !== void 0 && Object.defineProperty(t, n, e(n)), i == null || i(o, n);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ph(i, e) {
  return Lh({ descriptor: (t) => {
    const n = { get() {
      var r, o;
      return (o = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(i)) !== null && o !== void 0 ? o : null;
    }, enumerable: !0, configurable: !0 };
    if (e) {
      const r = typeof t == "symbol" ? Symbol() : "__" + t;
      n.get = function() {
        var o, s;
        return this[r] === void 0 && (this[r] = (s = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(i)) !== null && s !== void 0 ? s : null), this[r];
      };
    }
    return n;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Dh(i, e, t) {
  const n = i.constructor;
  if (!t) {
    const a = `__${e}`;
    if (t = n.getPropertyDescriptor(e, a), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = t;
  let o = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  if (i.dispatchWizEvent)
    return t;
  const s = {
    configurable: !0,
    enumerable: !0,
    set(a) {
      if (o === "") {
        const d = n.getPropertyOptions(e);
        o = typeof d.attribute == "string" ? d.attribute : e;
      }
      this.hasAttribute(o) && this.removeAttribute(o), r.set.call(this, a);
    }
  };
  return r.get && (s.get = function() {
    return r.get.call(this);
  }), s;
}
function $h(i, e, t) {
  if (e !== void 0)
    return Dh(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, mr = Symbol(), go = /* @__PURE__ */ new Map();
let Gs = class {
  constructor(e, t) {
    if (this._$cssResult$ = !0, t !== mr)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  get styleSheet() {
    let e = go.get(this.cssText);
    return pr && e === void 0 && (go.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
  }
  toString() {
    return this.cssText;
  }
};
const Mh = (i) => new Gs(typeof i == "string" ? i : i + "", mr), Fh = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, r, o) => n + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + i[o + 1], i[0]);
  return new Gs(t, mr);
}, Uh = (i, e) => {
  pr ? i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((t) => {
    const n = document.createElement("style"), r = window.litNonce;
    r !== void 0 && n.setAttribute("nonce", r), n.textContent = t.cssText, i.appendChild(n);
  });
}, _o = pr ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules)
    t += n.cssText;
  return Mh(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var un;
const bo = window.trustedTypes, Hh = bo ? bo.emptyScript : "", yo = window.reactiveElementPolyfillSupport, Gn = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Hh : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, qs = (i, e) => e !== i && (e == e || i == i), hn = { attribute: !0, type: String, converter: Gn, reflect: !1, hasChanged: qs };
let ht = class extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
  }
  static addInitializer(e) {
    var t;
    (t = this.l) !== null && t !== void 0 || (this.l = []), this.l.push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, n) => {
      const r = this._$Eh(n, t);
      r !== void 0 && (this._$Eu.set(r, n), e.push(r));
    }), e;
  }
  static createProperty(e, t = hn) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const n = typeof e == "symbol" ? Symbol() : "__" + e, r = this.getPropertyDescriptor(e, n, t);
      r !== void 0 && Object.defineProperty(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    return { get() {
      return this[t];
    }, set(r) {
      const o = this[e];
      this[t] = r, this.requestUpdate(e, o, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || hn;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties, n = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const r of n)
        this.createProperty(r, t[r]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const r of n)
        t.unshift(_o(r));
    } else
      e !== void 0 && t.push(_o(e));
    return t;
  }
  static _$Eh(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  o() {
    var e;
    this._$Ep = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (e = this.constructor.l) === null || e === void 0 || e.forEach((t) => t(this));
  }
  addController(e) {
    var t, n;
    ((t = this._$Eg) !== null && t !== void 0 ? t : this._$Eg = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) === null || n === void 0 || n.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$Eg) === null || t === void 0 || t.splice(this._$Eg.indexOf(e) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Et.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Uh(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$Eg) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) === null || n === void 0 ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$Eg) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) === null || n === void 0 ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$ES(e, t, n = hn) {
    var r, o;
    const s = this.constructor._$Eh(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const a = ((o = (r = n.converter) === null || r === void 0 ? void 0 : r.toAttribute) !== null && o !== void 0 ? o : Gn.toAttribute)(t, n.type);
      this._$Ei = e, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._$Ei = null;
    }
  }
  _$AK(e, t) {
    var n, r, o;
    const s = this.constructor, a = s._$Eu.get(e);
    if (a !== void 0 && this._$Ei !== a) {
      const d = s.getPropertyOptions(a), l = d.converter, u = (o = (r = (n = l) === null || n === void 0 ? void 0 : n.fromAttribute) !== null && r !== void 0 ? r : typeof l == "function" ? l : null) !== null && o !== void 0 ? o : Gn.fromAttribute;
      this._$Ei = a, this[a] = u(t, d.type), this._$Ei = null;
    }
  }
  requestUpdate(e, t, n) {
    let r = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || qs)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Ei !== e && (this._$E_ === void 0 && (this._$E_ = /* @__PURE__ */ new Map()), this._$E_.set(e, n))) : r = !1), !this.isUpdatePending && r && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = !0;
    try {
      await this._$Ep;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((r, o) => this[o] = r), this._$Et = void 0);
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), (e = this._$Eg) === null || e === void 0 || e.forEach((r) => {
        var o;
        return (o = r.hostUpdate) === null || o === void 0 ? void 0 : o.call(r);
      }), this.update(n)) : this._$EU();
    } catch (r) {
      throw t = !1, this._$EU(), r;
    }
    t && this._$AE(n);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$Eg) === null || t === void 0 || t.forEach((n) => {
      var r;
      return (r = n.hostUpdated) === null || r === void 0 ? void 0 : r.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$E_ !== void 0 && (this._$E_.forEach((t, n) => this._$ES(n, this[n], t)), this._$E_ = void 0), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
ht.finalized = !0, ht.elementProperties = /* @__PURE__ */ new Map(), ht.elementStyles = [], ht.shadowRootOptions = { mode: "open" }, yo == null || yo({ ReactiveElement: ht }), ((un = globalThis.reactiveElementVersions) !== null && un !== void 0 ? un : globalThis.reactiveElementVersions = []).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var fn;
const Et = globalThis.trustedTypes, vo = Et ? Et.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Ve = `lit$${(Math.random() + "").slice(9)}$`, Ks = "?" + Ve, Bh = `<${Ks}>`, At = document, Xt = (i = "") => At.createComment(i), Yt = (i) => i === null || typeof i != "object" && typeof i != "function", Xs = Array.isArray, Vh = (i) => {
  var e;
  return Xs(i) || typeof ((e = i) === null || e === void 0 ? void 0 : e[Symbol.iterator]) == "function";
}, Lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, xo = /-->/g, wo = />/g, Ke = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, Eo = /'/g, Ao = /"/g, Ys = /^(?:script|style|textarea)$/i, zh = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), jh = zh(1), We = Symbol.for("lit-noChange"), Y = Symbol.for("lit-nothing"), Io = /* @__PURE__ */ new WeakMap(), Wh = (i, e, t) => {
  var n, r;
  const o = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const a = (r = t == null ? void 0 : t.renderBefore) !== null && r !== void 0 ? r : null;
    o._$litPart$ = s = new ci(e.insertBefore(Xt(), a), a, void 0, t ?? {});
  }
  return s._$AI(i), s;
}, vt = At.createTreeWalker(At, 129, null, !1), Gh = (i, e) => {
  const t = i.length - 1, n = [];
  let r, o = e === 2 ? "<svg>" : "", s = Lt;
  for (let d = 0; d < t; d++) {
    const l = i[d];
    let u, c, f = -1, h = 0;
    for (; h < l.length && (s.lastIndex = h, c = s.exec(l), c !== null); )
      h = s.lastIndex, s === Lt ? c[1] === "!--" ? s = xo : c[1] !== void 0 ? s = wo : c[2] !== void 0 ? (Ys.test(c[2]) && (r = RegExp("</" + c[2], "g")), s = Ke) : c[3] !== void 0 && (s = Ke) : s === Ke ? c[0] === ">" ? (s = r ?? Lt, f = -1) : c[1] === void 0 ? f = -2 : (f = s.lastIndex - c[2].length, u = c[1], s = c[3] === void 0 ? Ke : c[3] === '"' ? Ao : Eo) : s === Ao || s === Eo ? s = Ke : s === xo || s === wo ? s = Lt : (s = Ke, r = void 0);
    const p = s === Ke && i[d + 1].startsWith("/>") ? " " : "";
    o += s === Lt ? l + Bh : f >= 0 ? (n.push(u), l.slice(0, f) + "$lit$" + l.slice(f) + Ve + p) : l + Ve + (f === -2 ? (n.push(void 0), d) : p);
  }
  const a = o + (i[t] || "<?>") + (e === 2 ? "</svg>" : "");
  return [vo !== void 0 ? vo.createHTML(a) : a, n];
};
class Jt {
  constructor({ strings: e, _$litType$: t }, n) {
    let r;
    this.parts = [];
    let o = 0, s = 0;
    const a = e.length - 1, d = this.parts, [l, u] = Gh(e, t);
    if (this.el = Jt.createElement(l, n), vt.currentNode = this.el.content, t === 2) {
      const c = this.el.content, f = c.firstChild;
      f.remove(), c.append(...f.childNodes);
    }
    for (; (r = vt.nextNode()) !== null && d.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const c = [];
          for (const f of r.getAttributeNames())
            if (f.endsWith("$lit$") || f.startsWith(Ve)) {
              const h = u[s++];
              if (c.push(f), h !== void 0) {
                const p = r.getAttribute(h.toLowerCase() + "$lit$").split(Ve), _ = /([.?@])?(.*)/.exec(h);
                d.push({ type: 1, index: o, name: _[2], strings: p, ctor: _[1] === "." ? Kh : _[1] === "?" ? Yh : _[1] === "@" ? Jh : Vi });
              } else
                d.push({ type: 6, index: o });
            }
          for (const f of c)
            r.removeAttribute(f);
        }
        if (Ys.test(r.tagName)) {
          const c = r.textContent.split(Ve), f = c.length - 1;
          if (f > 0) {
            r.textContent = Et ? Et.emptyScript : "";
            for (let h = 0; h < f; h++)
              r.append(c[h], Xt()), vt.nextNode(), d.push({ type: 2, index: ++o });
            r.append(c[f], Xt());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === Ks)
          d.push({ type: 2, index: o });
        else {
          let c = -1;
          for (; (c = r.data.indexOf(Ve, c + 1)) !== -1; )
            d.push({ type: 7, index: o }), c += Ve.length - 1;
        }
      o++;
    }
  }
  static createElement(e, t) {
    const n = At.createElement("template");
    return n.innerHTML = e, n;
  }
}
function It(i, e, t = i, n) {
  var r, o, s, a;
  if (e === We)
    return e;
  let d = n !== void 0 ? (r = t._$Cl) === null || r === void 0 ? void 0 : r[n] : t._$Cu;
  const l = Yt(e) ? void 0 : e._$litDirective$;
  return (d == null ? void 0 : d.constructor) !== l && ((o = d == null ? void 0 : d._$AO) === null || o === void 0 || o.call(d, !1), l === void 0 ? d = void 0 : (d = new l(i), d._$AT(i, t, n)), n !== void 0 ? ((s = (a = t)._$Cl) !== null && s !== void 0 ? s : a._$Cl = [])[n] = d : t._$Cu = d), d !== void 0 && (e = It(i, d._$AS(i, e.values), d, n)), e;
}
class qh {
  constructor(e, t) {
    this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(e) {
    var t;
    const { el: { content: n }, parts: r } = this._$AD, o = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : At).importNode(n, !0);
    vt.currentNode = o;
    let s = vt.nextNode(), a = 0, d = 0, l = r[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let u;
        l.type === 2 ? u = new ci(s, s.nextSibling, this, e) : l.type === 1 ? u = new l.ctor(s, l.name, l.strings, this, e) : l.type === 6 && (u = new Qh(s, this, e)), this.v.push(u), l = r[++d];
      }
      a !== (l == null ? void 0 : l.index) && (s = vt.nextNode(), a++);
    }
    return o;
  }
  m(e) {
    let t = 0;
    for (const n of this.v)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ci {
  constructor(e, t, n, r) {
    var o;
    this.type = 2, this._$AH = Y, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cg = (o = r == null ? void 0 : r.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0 ? t : this._$Cg;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = It(this, e, t), Yt(e) ? e === Y || e == null || e === "" ? (this._$AH !== Y && this._$AR(), this._$AH = Y) : e !== this._$AH && e !== We && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.S(e) : Vh(e) ? this.M(e) : this.$(e);
  }
  A(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  S(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.A(e));
  }
  $(e) {
    this._$AH !== Y && Yt(this._$AH) ? this._$AA.nextSibling.data = e : this.S(At.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var t;
    const { values: n, _$litType$: r } = e, o = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = Jt.createElement(r.h, this.options)), r);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === o)
      this._$AH.m(n);
    else {
      const s = new qh(o, this), a = s.p(this.options);
      s.m(n), this.S(a), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = Io.get(e.strings);
    return t === void 0 && Io.set(e.strings, t = new Jt(e)), t;
  }
  M(e) {
    Xs(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, r = 0;
    for (const o of e)
      r === t.length ? t.push(n = new ci(this.A(Xt()), this.A(Xt()), this, this.options)) : n = t[r], n._$AI(o), r++;
    r < t.length && (this._$AR(n && n._$AB.nextSibling, r), t.length = r);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const r = e.nextSibling;
      e.remove(), e = r;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cg = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
}
class Vi {
  constructor(e, t, n, r, o) {
    this.type = 1, this._$AH = Y, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = o, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Y;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, n, r) {
    const o = this.strings;
    let s = !1;
    if (o === void 0)
      e = It(this, e, t, 0), s = !Yt(e) || e !== this._$AH && e !== We, s && (this._$AH = e);
    else {
      const a = e;
      let d, l;
      for (e = o[0], d = 0; d < o.length - 1; d++)
        l = It(this, a[n + d], t, d), l === We && (l = this._$AH[d]), s || (s = !Yt(l) || l !== this._$AH[d]), l === Y ? e = Y : e !== Y && (e += (l ?? "") + o[d + 1]), this._$AH[d] = l;
    }
    s && !r && this.k(e);
  }
  k(e) {
    e === Y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Kh extends Vi {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(e) {
    this.element[this.name] = e === Y ? void 0 : e;
  }
}
const Xh = Et ? Et.emptyScript : "";
class Yh extends Vi {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(e) {
    e && e !== Y ? this.element.setAttribute(this.name, Xh) : this.element.removeAttribute(this.name);
  }
}
class Jh extends Vi {
  constructor(e, t, n, r, o) {
    super(e, t, n, r, o), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = It(this, e, t, 0)) !== null && n !== void 0 ? n : Y) === We)
      return;
    const r = this._$AH, o = e === Y && r !== Y || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, s = e !== Y && (r === Y || o);
    o && this.element.removeEventListener(this.name, this, r), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Qh {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    It(this, e);
  }
}
const So = window.litHtmlPolyfillSupport;
So == null || So(Jt, ci), ((fn = globalThis.litHtmlVersions) !== null && fn !== void 0 ? fn : globalThis.litHtmlVersions = []).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pn, mn;
class Vt extends ht {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var e, t;
    const n = super.createRenderRoot();
    return (e = (t = this.renderOptions).renderBefore) !== null && e !== void 0 || (t.renderBefore = n.firstChild), n;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Dt = Wh(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Dt) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Dt) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return We;
  }
}
Vt.finalized = !0, Vt._$litElement$ = !0, (pn = globalThis.litElementHydrateSupport) === null || pn === void 0 || pn.call(globalThis, { LitElement: Vt });
const To = globalThis.litElementPolyfillSupport;
To == null || To({ LitElement: Vt });
((mn = globalThis.litElementVersions) !== null && mn !== void 0 ? mn : globalThis.litElementVersions = []).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Js = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Qs = (i) => (...e) => ({ _$litDirective$: i, values: e });
let Zs = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zh = Qs(class extends Zs {
  constructor(i) {
    var e;
    if (super(i), i.type !== Js.ATTRIBUTE || i.name !== "class" || ((e = i.strings) === null || e === void 0 ? void 0 : e.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return " " + Object.keys(i).filter((e) => i[e]).join(" ") + " ";
  }
  update(i, [e]) {
    var t, n;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.et = new Set(i.strings.join(" ").split(/\s/).filter((o) => o !== "")));
      for (const o in e)
        e[o] && !(!((t = this.et) === null || t === void 0) && t.has(o)) && this.st.add(o);
      return this.render(e);
    }
    const r = i.element.classList;
    this.st.forEach((o) => {
      o in e || (r.remove(o), this.st.delete(o));
    });
    for (const o in e) {
      const s = !!e[o];
      s === this.st.has(o) || !((n = this.et) === null || n === void 0) && n.has(o) || (s ? (r.add(o), this.st.add(o)) : (r.remove(o), this.st.delete(o)));
    }
    return We;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gn = (i) => i ?? Y;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _n = Qs(class extends Zs {
  constructor(i) {
    var e;
    if (super(i), i.type !== Js.ATTRIBUTE || i.name !== "style" || ((e = i.strings) === null || e === void 0 ? void 0 : e.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return Object.keys(i).reduce((e, t) => {
      const n = i[t];
      return n == null ? e : e + `${t = t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${n};`;
    }, "");
  }
  update(i, [e]) {
    const { style: t } = i.element;
    if (this.ut === void 0) {
      this.ut = /* @__PURE__ */ new Set();
      for (const n in e)
        this.ut.add(n);
      return this.render(e);
    }
    this.ut.forEach((n) => {
      e[n] == null && (this.ut.delete(n), n.includes("-") ? t.removeProperty(n) : t[n] = "");
    });
    for (const n in e) {
      const r = e[n];
      r != null && (this.ut.add(n), n.includes("-") ? t.setProperty(n, r) : t[n] = r);
    }
    return We;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class se extends Vt {
  constructor() {
    super(...arguments), this.indeterminate = !1, this.progress = 0, this.buffer = 1, this.reverse = !1, this.closed = !1, this.stylePrimaryHalf = "", this.stylePrimaryFull = "", this.styleSecondaryQuarter = "", this.styleSecondaryHalf = "", this.styleSecondaryFull = "", this.animationReady = !0, this.closedAnimationOff = !1, this.resizeObserver = null;
  }
  connectedCallback() {
    super.connectedCallback(), this.rootEl && this.attachResizeObserver();
  }
  /**
   * @soyTemplate
   */
  render() {
    const e = {
      "mdc-linear-progress--closed": this.closed,
      "mdc-linear-progress--closed-animation-off": this.closedAnimationOff,
      "mdc-linear-progress--indeterminate": this.indeterminate,
      // needed for controller-less render
      "mdc-linear-progress--animation-ready": this.animationReady
    }, t = {
      "--mdc-linear-progress-primary-half": this.stylePrimaryHalf,
      "--mdc-linear-progress-primary-half-neg": this.stylePrimaryHalf !== "" ? `-${this.stylePrimaryHalf}` : "",
      "--mdc-linear-progress-primary-full": this.stylePrimaryFull,
      "--mdc-linear-progress-primary-full-neg": this.stylePrimaryFull !== "" ? `-${this.stylePrimaryFull}` : "",
      "--mdc-linear-progress-secondary-quarter": this.styleSecondaryQuarter,
      "--mdc-linear-progress-secondary-quarter-neg": this.styleSecondaryQuarter !== "" ? `-${this.styleSecondaryQuarter}` : "",
      "--mdc-linear-progress-secondary-half": this.styleSecondaryHalf,
      "--mdc-linear-progress-secondary-half-neg": this.styleSecondaryHalf !== "" ? `-${this.styleSecondaryHalf}` : "",
      "--mdc-linear-progress-secondary-full": this.styleSecondaryFull,
      "--mdc-linear-progress-secondary-full-neg": this.styleSecondaryFull !== "" ? `-${this.styleSecondaryFull}` : ""
    }, n = {
      "flex-basis": this.indeterminate ? "100%" : `${this.buffer * 100}%`
    }, r = {
      transform: this.indeterminate ? "scaleX(1)" : `scaleX(${this.progress})`
    };
    return jh`
      <div
          role="progressbar"
          class="mdc-linear-progress ${Zh(e)}"
          style="${_n(t)}"
          dir="${gn(this.reverse ? "rtl" : void 0)}"
          aria-label="${gn(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${gn(this.indeterminate ? void 0 : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${_n(n)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${_n(r)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
  }
  update(e) {
    e.has("closed") && (!this.closed || e.get("closed") === void 0) && this.syncClosedState(), super.update(e);
  }
  async firstUpdated(e) {
    super.firstUpdated(e), this.attachResizeObserver();
  }
  syncClosedState() {
    this.closedAnimationOff = this.closed;
  }
  updated(e) {
    !e.has("indeterminate") && e.has("reverse") && this.indeterminate && this.restartAnimation(), e.has("indeterminate") && e.get("indeterminate") !== void 0 && this.indeterminate && window.ResizeObserver && this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth), super.updated(e);
  }
  disconnectedCallback() {
    this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), super.disconnectedCallback();
  }
  attachResizeObserver() {
    if (window.ResizeObserver) {
      this.resizeObserver = new window.ResizeObserver((e) => {
        if (this.indeterminate) {
          for (const t of e)
            if (t.contentRect) {
              const n = t.contentRect.width;
              this.calculateAndSetAnimationDimensions(n);
            }
        }
      }), this.resizeObserver.observe(this.rootEl);
      return;
    }
    this.resizeObserver = null;
  }
  calculateAndSetAnimationDimensions(e) {
    const t = e * 0.8367142, n = e * 2.00611057, r = e * 0.37651913, o = e * 0.84386165, s = e * 1.60277782;
    this.stylePrimaryHalf = `${t}px`, this.stylePrimaryFull = `${n}px`, this.styleSecondaryQuarter = `${r}px`, this.styleSecondaryHalf = `${o}px`, this.styleSecondaryFull = `${s}px`, this.restartAnimation();
  }
  async restartAnimation() {
    this.animationReady = !1, await this.updateComplete, await new Promise(requestAnimationFrame), this.animationReady = !0, await this.updateComplete;
  }
  open() {
    this.closed = !1;
  }
  close() {
    this.closed = !0;
  }
}
b([
  Ph(".mdc-linear-progress")
], se.prototype, "rootEl", void 0);
b([
  st({ type: Boolean, reflect: !0 })
], se.prototype, "indeterminate", void 0);
b([
  st({ type: Number })
], se.prototype, "progress", void 0);
b([
  st({ type: Number })
], se.prototype, "buffer", void 0);
b([
  st({ type: Boolean, reflect: !0 })
], se.prototype, "reverse", void 0);
b([
  st({ type: Boolean, reflect: !0 })
], se.prototype, "closed", void 0);
b([
  $h,
  st({ attribute: "aria-label" })
], se.prototype, "ariaLabel", void 0);
b([
  at()
], se.prototype, "stylePrimaryHalf", void 0);
b([
  at()
], se.prototype, "stylePrimaryFull", void 0);
b([
  at()
], se.prototype, "styleSecondaryQuarter", void 0);
b([
  at()
], se.prototype, "styleSecondaryHalf", void 0);
b([
  at()
], se.prototype, "styleSecondaryFull", void 0);
b([
  at()
], se.prototype, "animationReady", void 0);
b([
  at()
], se.prototype, "closedAnimationOff", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ef = Fh`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let qn = class extends se {
};
qn.styles = [ef];
qn = b([
  Rh("mwc-linear-progress")
], qn);
class ea {
  constructor(e) {
    this.plainTextBody = e.plainTextBody, this.gladeDOMNodeHash = e.gladeDOMNodeHash, this.postedBy = e.postedBy, this.htmlString = e.htmlString, this.updatedAt = e.updatedAt, this.hidden = e.hidden, this.uid = e.uid, this.isSaving = !1;
  }
  async getHtmlString() {
    const e = tt(nt, "getHTMLFromMarkdownStringArray");
    try {
      const t = await e({
        markdownStrings: [this.plainTextBody]
      });
      return this.htmlString = t.data.htmlStrings[0], this.htmlString;
    } catch (t) {
      console.error(t);
    }
  }
  async delete(e, t) {
    this.hidden = !0, this.save(e, t);
  }
  async save(e, t) {
    this.isSaving = !0, console.log("gladeAPIKey", t);
    const n = {
      plainTextBody: this.plainTextBody,
      gladeDOMNodeHash: this.gladeDOMNodeHash,
      postedBy: this.postedBy,
      htmlString: this.htmlString,
      gladeDocumentHash: parseInt(e),
      gladeAPIKey: t,
      uid: null
    }, r = tt(nt, "publishAnnotation");
    try {
      const o = await r(n);
      return this.isSaving = !1, console.log("annotation published!", o.data), n.uid = o.data.uid, n;
    } catch (o) {
      return console.error(o.code, o.message), this.isSaving = !1, null;
    }
  }
}
function tf(i) {
  let e, t, n;
  return {
    c() {
      e = I("mwc-textarea"), C(e, "outlined", "true"), C(
        e,
        "value",
        /*plainTextBody*/
        i[0]
      ), C(e, "placeholder", "");
    },
    m(r, o) {
      D(r, e, o), t || (n = G(
        e,
        "change",
        /*handlePlainTextBodyChange*/
        i[5]
      ), t = !0);
    },
    p(r, o) {
      o & /*plainTextBody*/
      1 && C(
        e,
        "value",
        /*plainTextBody*/
        r[0]
      );
    },
    i: R,
    o: R,
    d(r) {
      r && H(e), t = !1, n();
    }
  };
}
function nf(i) {
  let e, t, n;
  return t = new fr({
    props: {
      annotation: (
        /*pendingAnnotation*/
        i[2]
      ),
      isPreview: !0,
      deleteAnnotation: null
    }
  }), {
    c() {
      e = I("div"), Ee(t.$$.fragment);
    },
    m(r, o) {
      D(r, e, o), _e(t, e, null), n = !0;
    },
    p(r, o) {
      const s = {};
      o & /*pendingAnnotation*/
      4 && (s.annotation = /*pendingAnnotation*/
      r[2]), t.$set(s);
    },
    i(r) {
      n || (q(t.$$.fragment, r), n = !0);
    },
    o(r) {
      J(t.$$.fragment, r), n = !1;
    },
    d(r) {
      r && H(e), be(t);
    }
  };
}
function rf(i) {
  let e, t, n, r;
  return {
    c() {
      e = I("mwc-button"), t = fe("show preview!"), C(
        e,
        "disabled",
        /*publishing*/
        i[1]
      );
    },
    m(o, s) {
      D(o, e, s), w(e, t), n || (r = G(
        e,
        "click",
        /*handleClickPreview*/
        i[4]
      ), n = !0);
    },
    p(o, s) {
      s & /*publishing*/
      2 && C(
        e,
        "disabled",
        /*publishing*/
        o[1]
      );
    },
    d(o) {
      o && H(e), n = !1, r();
    }
  };
}
function of(i) {
  let e, t, n, r;
  return {
    c() {
      e = I("mwc-button"), t = fe("edit!"), C(
        e,
        "disabled",
        /*publishing*/
        i[1]
      );
    },
    m(o, s) {
      D(o, e, s), w(e, t), n || (r = G(
        e,
        "click",
        /*handleClickEdit*/
        i[6]
      ), n = !0);
    },
    p(o, s) {
      s & /*publishing*/
      2 && C(
        e,
        "disabled",
        /*publishing*/
        o[1]
      );
    },
    d(o) {
      o && H(e), n = !1, r();
    }
  };
}
function Co(i) {
  let e;
  return {
    c() {
      e = I("div"), e.innerHTML = '<mwc-linear-progress indeterminate=""></mwc-linear-progress>';
    },
    m(t, n) {
      D(t, e, n);
    },
    d(t) {
      t && H(e);
    }
  };
}
function sf(i) {
  let e, t, n, r, o, s, a, d, l, u, c, f, h, p, _, v, y;
  const g = [nf, tf], m = [];
  function x(P, $) {
    return (
      /*showPreview*/
      P[3] ? 0 : 1
    );
  }
  n = x(i), r = m[n] = g[n](i);
  function E(P, $) {
    return (
      /*showPreview*/
      P[3] ? of : rf
    );
  }
  let O = E(i), k = O(i), A = (
    /*publishing*/
    i[1] && Co()
  );
  return {
    c() {
      e = I("div"), t = I("style"), t.textContent = `mwc-textarea {
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
    #gladeEditorDiv {
      min-width: 500px;
      min-height: 24px;
      border: 1px solid #6200ee;
      margin: 8px 3px;
      padding: 0px 3px;
    }
  `, r.c(), o = F(), s = I("div"), a = I("mwc-button"), a.textContent = "discard", d = F(), l = I("div"), k.c(), u = F(), c = I("mwc-button"), f = fe("publish!"), h = F(), p = I("div"), A && A.c(), this.c = R, C(a, "class", "cancel"), C(
        c,
        "disabled",
        /*publishing*/
        i[1]
      ), z(s, "class", "buttonShelf");
    },
    m(P, $) {
      D(P, e, $), w(e, t), m[n].m(e, null), w(e, o), w(e, s), w(s, a), w(s, d), w(s, l), k.m(l, null), w(l, u), w(l, c), w(c, f), w(e, h), w(e, p), A && A.m(p, null), _ = !0, v || (y = [
        G(
          a,
          "click",
          /*handleClickDiscard*/
          i[7]
        ),
        G(
          c,
          "click",
          /*handleClickPublish*/
          i[8]
        )
      ], v = !0);
    },
    p(P, [$]) {
      let M = n;
      n = x(P), n === M ? m[n].p(P, $) : (Pi(), J(m[M], 1, 1, () => {
        m[M] = null;
      }), Di(), r = m[n], r ? r.p(P, $) : (r = m[n] = g[n](P), r.c()), q(r, 1), r.m(e, o)), O === (O = E(P)) && k ? k.p(P, $) : (k.d(1), k = O(P), k && (k.c(), k.m(l, u))), (!_ || $ & /*publishing*/
      2) && C(
        c,
        "disabled",
        /*publishing*/
        P[1]
      ), /*publishing*/
      P[1] ? A || (A = Co(), A.c(), A.m(p, null)) : A && (A.d(1), A = null);
    },
    i(P) {
      _ || (q(r), _ = !0);
    },
    o(P) {
      J(r), _ = !1;
    },
    d(P) {
      P && H(e), m[n].d(), k.d(), A && A.d(), v = !1, me(y);
    }
  };
}
function af(i, e, t) {
  let n, r;
  var o = this && this.__awaiter || function(A, P, $, M) {
    function le(S) {
      return S instanceof $ ? S : new $(function(B) {
        B(S);
      });
    }
    return new ($ || ($ = Promise))(function(S, B) {
      function K(te) {
        try {
          ae(M.next(te));
        } catch (De) {
          B(De);
        }
      }
      function ee(te) {
        try {
          ae(M.throw(te));
        } catch (De) {
          B(De);
        }
      }
      function ae(te) {
        te.done ? S(te.value) : le(te.value).then(K, ee);
      }
      ae((M = M.apply(A, P || [])).next());
    });
  }, s, a;
  const d = St();
  function l(A, P) {
    console.log("dispatching change-view"), d("set-view", { nextView: A, dismissModal: P });
  }
  function u(A) {
    console.debug("dispatching", A.code), d("error", A);
  }
  let c, { gladedocumenthash: f = "0" } = e, { focusedGladeDOMNodeHash: h = 0 } = e, { apikey: p } = e, _ = "", v = "", y = !1;
  Po(() => {
    console.log("onMount"), console.log("editorDiv", c);
  });
  function g() {
    return o(this, void 0, void 0, function* () {
      if (!v) {
        u({
          message: "You need to add content before previewing!",
          code: "CreateAnnotationView.handleClickPreview.nothingToPreview"
        });
        return;
      }
      t(3, n = !0), t(14, _ = (yield r.getHtmlString()) || void 0);
    });
  }
  function m(A) {
    d("publish", { annotation: A }), l(U.List, !0);
  }
  function x(A) {
    t(0, v = A.target.value);
  }
  function E() {
    t(3, n = !1);
  }
  function O() {
    t(2, r.htmlString = "", r), t(2, r.plainTextBody = "", r), l(U.List);
  }
  function k() {
    return o(this, void 0, void 0, function* () {
      if (t(1, y = !0), !v) {
        u({
          message: "You need to add content before posting!",
          code: "CreateAnnotationView.handleClickPreview.nothingToPost"
        });
        return;
      }
      t(14, _ = (yield r.getHtmlString()) || void 0);
      const A = yield r.save(f, p);
      A ? (m(A), l(U.List, !0)) : (console.log(`failed to publish!
are you sure your API key is correct?`), u({
        message: "Oh no! we couldn't publish your annotation",
        code: "CreateAnnotationView.handleClickPublish.failedToSave"
      })), t(1, y = !1);
    });
  }
  return i.$$set = (A) => {
    "gladedocumenthash" in A && t(9, f = A.gladedocumenthash), "focusedGladeDOMNodeHash" in A && t(10, h = A.focusedGladeDOMNodeHash), "apikey" in A && t(11, p = A.apikey);
  }, i.$$.update = () => {
    i.$$.dirty & /*focusedGladeDOMNodeHash, plainTextBody, htmlString, _a, _b*/
    29697 && t(2, r = new ea({
      gladeDOMNodeHash: h,
      plainTextBody: v,
      htmlString: _,
      postedBy: {
        displayName: (t(12, s = Le.currentUser) === null || s === void 0 ? void 0 : s.displayName) || "tiny-anonymous-ocelot",
        uid: t(13, a = Le.currentUser) === null || a === void 0 ? void 0 : a.uid
      }
    }));
  }, t(3, n = !1), [
    v,
    y,
    r,
    n,
    g,
    x,
    E,
    O,
    k,
    f,
    h,
    p,
    s,
    a,
    _
  ];
}
class ta extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      af,
      sf,
      ge,
      {
        gladedocumenthash: 9,
        focusedGladeDOMNodeHash: 10,
        apikey: 11
      },
      null
    ), e && (e.target && D(e.target, this, e.anchor), e.props && (this.$set(e.props), W()));
  }
  static get observedAttributes() {
    return ["gladedocumenthash", "focusedGladeDOMNodeHash", "apikey"];
  }
  get gladedocumenthash() {
    return this.$$.ctx[9];
  }
  set gladedocumenthash(e) {
    this.$$set({ gladedocumenthash: e }), W();
  }
  get focusedGladeDOMNodeHash() {
    return this.$$.ctx[10];
  }
  set focusedGladeDOMNodeHash(e) {
    this.$$set({ focusedGladeDOMNodeHash: e }), W();
  }
  get apikey() {
    return this.$$.ctx[11];
  }
  set apikey(e) {
    this.$$set({ apikey: e }), W();
  }
}
customElements.define("glade-annotatable-create-annotation-view", ta);
function df(i) {
  let e, t, n;
  return {
    c() {
      e = I("mwc-button"), e.textContent = "sign in?", C(e, "class", "flex");
    },
    m(r, o) {
      D(r, e, o), t || (n = G(
        e,
        "click",
        /*handleClickSignIn*/
        i[2]
      ), t = !0);
    },
    p: R,
    d(r) {
      r && H(e), t = !1, n();
    }
  };
}
function lf(i) {
  let e, t, n;
  return {
    c() {
      e = I("mwc-button"), e.textContent = "sign out!", C(e, "class", "flex");
    },
    m(r, o) {
      D(r, e, o), t || (n = G(
        e,
        "click",
        /*handleClickSignOut*/
        i[1]
      ), t = !0);
    },
    p: R,
    d(r) {
      r && H(e), t = !1, n();
    }
  };
}
function cf(i) {
  let e, t, n, r, o, s, a, d, l, u;
  function c(p, _) {
    return (
      /*user*/
      p[0] ? lf : df
    );
  }
  let h = c(i)(i);
  return {
    c() {
      e = I("div"), t = I("style"), t.textContent = `.account-view {
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
    }`, n = F(), r = I("div"), h.c(), o = F(), s = I("div"), s.innerHTML = "<span>or</span>", a = F(), d = I("mwc-button"), d.textContent = "back to annotations", this.c = R, z(s, "class", "or"), C(d, "class", "flex"), z(r, "class", "account-view");
    },
    m(p, _) {
      D(p, e, _), w(e, t), w(e, n), w(e, r), h.m(r, null), w(r, o), w(r, s), w(r, a), w(r, d), l || (u = G(
        d,
        "click",
        /*goBack*/
        i[3]
      ), l = !0);
    },
    p(p, [_]) {
      h.p(p, _);
    },
    i: R,
    o: R,
    d(p) {
      p && H(e), h.d(), l = !1, u();
    }
  };
}
function uf(i) {
  var e = this && this.__awaiter || function(d, l, u, c) {
    function f(h) {
      return h instanceof u ? h : new u(function(p) {
        p(h);
      });
    }
    return new (u || (u = Promise))(function(h, p) {
      function _(g) {
        try {
          y(c.next(g));
        } catch (m) {
          p(m);
        }
      }
      function v(g) {
        try {
          y(c.throw(g));
        } catch (m) {
          p(m);
        }
      }
      function y(g) {
        g.done ? h(g.value) : f(g.value).then(_, v);
      }
      y((c = c.apply(d, l || [])).next());
    });
  };
  const t = St(), n = Le.currentUser;
  function r(d, l) {
    console.log("dispatching change-view"), t("set-view", { nextView: d, dismissModal: l });
  }
  function o() {
    return e(this, void 0, void 0, function* () {
      r(U.List), yield Bc(Le);
    });
  }
  function s() {
    return e(this, void 0, void 0, function* () {
      r(U.AuthenticationMenu);
    });
  }
  function a() {
    return e(this, void 0, void 0, function* () {
      r(U.List);
    });
  }
  return [n, o, s, a];
}
class ia extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      uf,
      cf,
      ge,
      {},
      null
    ), e && e.target && D(e.target, this, e.anchor);
  }
}
customElements.define("glade-annotatable-account-view", ia);
/**
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
*/
let Kn = class extends L {
};
Kn.styles = js;
Kn = b([
  rt("mwc-textfield")
], Kn);
function hf(i) {
  let e, t, n, r, o, s, a, d, l, u, c;
  return {
    c() {
      e = I("div"), t = I("style"), t.textContent = `.formRow {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }`, n = F(), r = I("div"), o = I("mwc-textfield"), s = F(), a = I("mwc-textfield"), d = F(), l = I("mwc-button"), l.textContent = "Sign In", this.c = R, C(o, "class", "formRow"), C(o, "label", "email"), C(o, "outlined", ""), C(o, "placeholder", "matt@glade.software"), C(o, "type", "email"), C(a, "class", "formRow"), C(a, "outlined", ""), C(a, "type", "password"), C(a, "label", "password"), C(l, "class", "formRow"), C(l, "outlined", "");
    },
    m(f, h) {
      D(f, e, h), w(e, t), w(e, n), w(e, r), w(r, o), i[4](o), w(r, s), w(r, a), i[5](a), w(r, d), w(r, l), u || (c = [
        G(
          a,
          "keyup",
          /*onKeyUp*/
          i[3]
        ),
        G(
          l,
          "click",
          /*handleClickSignIn*/
          i[2]
        )
      ], u = !0);
    },
    p: R,
    i: R,
    o: R,
    d(f) {
      f && H(e), i[4](null), i[5](null), u = !1, me(c);
    }
  };
}
function ff(i, e, t) {
  var n = this && this.__awaiter || function(h, p, _, v) {
    function y(g) {
      return g instanceof _ ? g : new _(function(m) {
        m(g);
      });
    }
    return new (_ || (_ = Promise))(function(g, m) {
      function x(k) {
        try {
          O(v.next(k));
        } catch (A) {
          m(A);
        }
      }
      function E(k) {
        try {
          O(v.throw(k));
        } catch (A) {
          m(A);
        }
      }
      function O(k) {
        k.done ? g(k.value) : y(k.value).then(x, E);
      }
      O((v = v.apply(h, p || [])).next());
    });
  };
  let r, o;
  const s = St();
  function a(h, p) {
    console.log("dispatching change-view"), s("set-view", { nextView: h, dismissModal: p });
  }
  function d(h) {
    console.debug("dispatching", h.code), s("error", h);
  }
  console.debug("LoginFormView initialized");
  function l() {
    return n(this, void 0, void 0, function* () {
      const h = r.value, p = o.value;
      try {
        yield Mc(Le, h, p), a(U.List);
      } catch (_) {
        d(_);
      }
    });
  }
  function u(h) {
    return n(this, void 0, void 0, function* () {
      h.key === "Enter" && l();
    });
  }
  function c(h) {
    Te[h ? "unshift" : "push"](() => {
      r = h, t(0, r);
    });
  }
  function f(h) {
    Te[h ? "unshift" : "push"](() => {
      o = h, t(1, o);
    });
  }
  return [
    r,
    o,
    l,
    u,
    c,
    f
  ];
}
class na extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      ff,
      hf,
      ge,
      {},
      null
    ), e && e.target && D(e.target, this, e.anchor);
  }
}
customElements.define("glade-annotatable-login-form-view", na);
function pf(i) {
  let e, t, n, r, o, s, a, d, l, u, c, f, h, p, _, v;
  return {
    c() {
      e = I("div"), t = I("style"), t.textContent = `.formItem {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }`, n = F(), r = I("div"), o = I("form"), s = I("mwc-textfield"), a = F(), d = I("mwc-textfield"), l = F(), u = I("mwc-textfield"), c = F(), f = I("mwc-textfield"), h = F(), p = I("mwc-button"), p.textContent = "Create Account", this.c = R, C(s, "id", "usernameTextField"), C(s, "required", ""), C(s, "class", "formItem"), C(s, "placeholder", "donklonk"), C(s, "prefix", "@"), C(s, "label", "username"), C(s, "autocomplete", "off"), C(s, "outlined", "true"), C(d, "required", ""), C(d, "class", "formItem"), C(d, "outlined", "true"), C(d, "label", "email"), C(d, "placeholder", "matt@glade.software"), C(d, "type", "email"), C(u, "required", ""), C(u, "class", "formItem"), C(u, "outlined", "true"), C(u, "type", "password"), C(u, "name", "password"), C(u, "label", "password"), C(f, "required", ""), C(f, "class", "formItem"), C(f, "outlined", "true"), C(f, "type", "password"), C(f, "label", "confirm password"), C(p, "class", "formItem"), C(p, "outlined", "");
    },
    m(y, g) {
      D(y, e, g), w(e, t), w(e, n), w(e, r), w(r, o), w(o, s), i[7](s), w(o, a), w(o, d), i[8](d), w(o, l), w(o, u), i[9](u), w(o, c), w(o, f), i[10](f), w(o, h), w(o, p), _ || (v = [
        G(
          s,
          "blur",
          /*handleUsernameBlur*/
          i[5]
        ),
        G(
          f,
          "keyup",
          /*onKeyUp*/
          i[4]
        ),
        G(
          p,
          "click",
          /*handleClickCreateAccount*/
          i[6]
        )
      ], _ = !0);
    },
    p: R,
    i: R,
    o: R,
    d(y) {
      y && H(e), i[7](null), i[8](null), i[9](null), i[10](null), _ = !1, me(v);
    }
  };
}
function mf(i, e, t) {
  var n = this && this.__awaiter || function(y, g, m, x) {
    function E(O) {
      return O instanceof m ? O : new m(function(k) {
        k(O);
      });
    }
    return new (m || (m = Promise))(function(O, k) {
      function A(M) {
        try {
          $(x.next(M));
        } catch (le) {
          k(le);
        }
      }
      function P(M) {
        try {
          $(x.throw(M));
        } catch (le) {
          k(le);
        }
      }
      function $(M) {
        M.done ? O(M.value) : E(M.value).then(A, P);
      }
      $((x = x.apply(y, g || [])).next());
    });
  };
  const r = St();
  function o(y, g) {
    console.log("dispatching change-view"), r("set-view", { nextView: y, dismissModal: g });
  }
  let s, a, d, l;
  console.debug("SignupFormView initialized");
  function u(y) {
    return n(this, void 0, void 0, function* () {
      y.key === "Enter" && f();
    });
  }
  function c(y) {
    return n(this, void 0, void 0, function* () {
      const g = y.target.value, m = tt(nt, "checkUsernameAvailability");
      try {
        (yield m(g)).data.usernameAvailable ? (s.setCustomValidity(""), s.reportValidity()) : (console.log("username unavailable"), s.setCustomValidity("username unavailable!"), s.reportValidity());
      } catch (x) {
        console.debug("error checking username availability"), console.error(x);
      }
    });
  }
  function f() {
    return n(this, void 0, void 0, function* () {
      const y = s.value, g = tt(nt, "checkUsernameAvailability");
      try {
        if (!(yield g(y)).data.usernameAvailable)
          console.log("username unavailable"), s.setCustomValidity("username unavailable!"), s.reportValidity();
        else {
          s.setCustomValidity(""), s.reportValidity();
          try {
            if (a.value !== d.value) {
              d.setCustomValidity("passwords don't match!"), d.reportValidity();
              return;
            }
            const { user: E } = yield $c(Le, l.value, a.value);
            console.debug("user created!"), yield Uc(E, { displayName: y }), t(0, s.value = "", s), t(3, l.value = "", l), t(1, a.value = "", a), t(2, d.value = "", d), console.debug(`user "${E.displayName}" created`), o(U.List);
          } catch (E) {
            console.error(E);
          }
        }
      } catch (m) {
        console.debug("error checking username availability"), console.error(m);
      }
    });
  }
  function h(y) {
    Te[y ? "unshift" : "push"](() => {
      s = y, t(0, s);
    });
  }
  function p(y) {
    Te[y ? "unshift" : "push"](() => {
      l = y, t(3, l);
    });
  }
  function _(y) {
    Te[y ? "unshift" : "push"](() => {
      a = y, t(1, a);
    });
  }
  function v(y) {
    Te[y ? "unshift" : "push"](() => {
      d = y, t(2, d);
    });
  }
  return [
    s,
    a,
    d,
    l,
    u,
    c,
    f,
    h,
    p,
    _,
    v
  ];
}
class ra extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      mf,
      pf,
      ge,
      {},
      null
    ), e && e.target && D(e.target, this, e.anchor);
  }
}
customElements.define("glade-annotatable-signup-form-view", ra);
function gf(i) {
  let e, t, n, r, o, s, a, d, l, u, c;
  return {
    c() {
      e = I("div"), t = I("style"), t.textContent = `.option {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      margin: 8px;
    }`, n = F(), r = I("div"), o = I("mwc-button"), o.textContent = "Create Account", s = F(), a = I("mwc-button"), a.textContent = "Sign In", d = F(), l = I("mwc-button"), l.textContent = "Use Anonymously", this.c = R, C(o, "class", "option"), C(o, "outlined", ""), C(a, "class", "option"), C(a, "outlined", ""), C(l, "class", "option"), C(l, "outlined", "");
    },
    m(f, h) {
      D(f, e, h), w(e, t), w(e, n), w(e, r), w(r, o), w(r, s), w(r, a), w(r, d), w(r, l), u || (c = [
        G(
          o,
          "click",
          /*handleClickCreateAccount*/
          i[2]
        ),
        G(
          a,
          "click",
          /*handleClickSignin*/
          i[1]
        ),
        G(
          l,
          "click",
          /*handleClickUseAnonymously*/
          i[0]
        )
      ], u = !0);
    },
    p: R,
    i: R,
    o: R,
    d(f) {
      f && H(e), u = !1, me(c);
    }
  };
}
function _f(i) {
  var e = this && this.__awaiter || function(d, l, u, c) {
    function f(h) {
      return h instanceof u ? h : new u(function(p) {
        p(h);
      });
    }
    return new (u || (u = Promise))(function(h, p) {
      function _(g) {
        try {
          y(c.next(g));
        } catch (m) {
          p(m);
        }
      }
      function v(g) {
        try {
          y(c.throw(g));
        } catch (m) {
          p(m);
        }
      }
      function y(g) {
        g.done ? h(g.value) : f(g.value).then(_, v);
      }
      y((c = c.apply(d, l || [])).next());
    });
  };
  const t = St();
  console.debug("AuthenticationMenuView initialized");
  function n(d, l) {
    console.log("dispatching change-view"), t("set-view", { nextView: d, dismissModal: l });
  }
  function r(d) {
    t("error", d);
  }
  function o() {
    return e(this, void 0, void 0, function* () {
      yield Nc(Le), n(U.List);
    });
  }
  function s() {
    n(U.LoginForm);
  }
  function a() {
    r(null), n(U.SignupForm);
  }
  return [o, s, a];
}
class oa extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      _f,
      gf,
      ge,
      {},
      null
    ), e && e.target && D(e.target, this, e.anchor);
  }
}
customElements.define("glade-annotatable-authentication-menu-view", oa);
function bf(i) {
  let e, t;
  return {
    c() {
      e = br("svg"), t = br("path"), this.c = R, z(t, "d", "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"), z(e, "height", "16"), z(e, "width", "16"), z(e, "xmlns", "http://www.w3.org/2000/svg"), z(e, "viewBox", "0 0 448 512");
    },
    m(n, r) {
      D(n, e, r), w(e, t);
    },
    p: R,
    i: R,
    o: R,
    d(n) {
      n && H(e);
    }
  };
}
class sa extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      null,
      bf,
      ge,
      {},
      null
    ), e && e.target && D(e.target, this, e.anchor);
  }
}
customElements.define("account-icon", sa);
function yf(i) {
  let e, t, n, r, o, s, a, d, l, u, c, f, h, p, _, v;
  return c = new sa({ props: { class: "sm-icon" } }), {
    c() {
      e = I("div"), t = I("style"), t.textContent = `hr {
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
    }`, n = F(), r = I("div"), o = I("div"), s = fe(
        /*title*/
        i[0]
      ), a = F(), d = I("span"), l = F(), u = I("div"), Ee(c.$$.fragment), f = F(), h = I("hr"), this.c = R, z(o, "class", "title"), z(d, "class", "shamelessSpacer"), z(u, "class", "sm-icon"), z(r, "class", "heading");
    },
    m(y, g) {
      D(y, e, g), w(e, t), w(e, n), w(e, r), w(r, o), w(o, s), w(r, a), w(r, d), w(r, l), w(r, u), _e(c, u, null), w(e, f), w(e, h), p = !0, _ || (v = G(u, "click", function() {
        yi(
          /*handleClickAccount*/
          i[1]
        ) && i[1].apply(this, arguments);
      }), _ = !0);
    },
    p(y, [g]) {
      i = y, (!p || g & /*title*/
      1) && Li(
        s,
        /*title*/
        i[0]
      );
    },
    i(y) {
      p || (q(c.$$.fragment, y), p = !0);
    },
    o(y) {
      J(c.$$.fragment, y), p = !1;
    },
    d(y) {
      y && H(e), be(c), _ = !1, v();
    }
  };
}
function vf(i, e, t) {
  let { title: n } = e, { handleClickAccount: r } = e;
  return i.$$set = (o) => {
    "title" in o && t(0, n = o.title), "handleClickAccount" in o && t(1, r = o.handleClickAccount);
  }, [n, r];
}
class aa extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      vf,
      yf,
      ge,
      { title: 0, handleClickAccount: 1 },
      null
    ), e && (e.target && D(e.target, this, e.anchor), e.props && (this.$set(e.props), W()));
  }
  static get observedAttributes() {
    return ["title", "handleClickAccount"];
  }
  get title() {
    return this.$$.ctx[0];
  }
  set title(e) {
    this.$$set({ title: e }), W();
  }
  get handleClickAccount() {
    return this.$$.ctx[1];
  }
  set handleClickAccount(e) {
    this.$$set({ handleClickAccount: e }), W();
  }
}
customElements.define("glade-annotatable-dialog-header", aa);
function xf(i) {
  const e = i.textContent || "";
  return da(e);
}
function da(i) {
  let e = 0;
  if (!i.length)
    return `${e}`;
  for (var t = 0; t < i.length; t++) {
    var n = i.charCodeAt(t);
    e = (e << 5) - e + n, e = e & e;
  }
  return `${e}`;
}
const Pt = (i, e) => {
  const t = Object.getOwnPropertyDescriptor(i, e);
  Object.defineProperty(i, e, {
    set(n) {
      this.dispatchEvent(new Event("coherevalueupdate")), t && t.set && t.set.call(this, n);
    }
  });
};
let ko = !1;
const Oo = () => {
  if (window.analytics && !ko) {
    ko = !0;
    const i = window.analytics.identify.bind(window.analytics);
    window.analytics.identify = (...e) => {
      const t = e[0];
      if (typeof t == "string") {
        const n = e[1] && typeof e[1] == "object" ? e[1] : {}, { name: r, ...o } = n;
        window.Cohere.identify(t, { displayName: r, ...o });
      }
      i(...e);
    };
  }
}, gr = typeof window > "u" || !window.document || window.document.documentMode;
gr || (Pt(HTMLInputElement.prototype, "value"), Pt(HTMLInputElement.prototype, "checked"), Pt(HTMLTextAreaElement.prototype, "value"), Pt(HTMLSelectElement.prototype, "value"), Pt(HTMLSelectElement.prototype, "selectedIndex"));
const wf = [
  "init",
  "identify",
  "stop",
  "showCode",
  "getSessionUrl",
  "makeCall",
  "addCallStatusListener",
  "removeCallStatusListener",
  "widget",
  "addSessionUrlListener",
  "removeSessionUrlListener"
], ce = () => {
}, Ef = {
  init: ce,
  identify: ce,
  stop: ce,
  showCode: ce,
  getSessionUrl: ce,
  makeCall: ce,
  addCallStatusListener: ce,
  removeCallStatusListener: ce,
  widget: ce,
  addSessionUrlListener: ce,
  removeSessionUrlListener: ce
};
let Se = gr ? Ef : window.Cohere = [];
if (!gr) {
  Se.invoked = !0, Se.snippet = "0.6", Se.valhook = !0, Se.methods = wf, Se.hookSegment = Oo, Se.methods.forEach((t) => {
    Se[t] = (...n) => {
      if (t === "init") {
        const r = n[1];
        r != null && r.segmentIntegration && Oo();
      }
      n.unshift(t), Se.push(n);
    };
  });
  const i = document.createElement("script");
  i.type = "text/javascript", i.async = !0, i.src = "https://static.cohere.so/main.js";
  const e = document.getElementsByTagName("script")[0];
  e && e.parentNode && e.parentNode.insertBefore(i, e);
}
const Ro = Se;
function No(i) {
  let e, t, n, r = `  ${/*error*/
  i[8].message}`, o;
  return {
    c() {
      e = I("div"), t = F(), n = I("div"), o = fe(r), z(n, "class", "error");
    },
    m(s, a) {
      D(s, e, a), D(s, t, a), D(s, n, a), w(n, o);
    },
    p(s, a) {
      a & /*error*/
      256 && r !== (r = `  ${/*error*/
      s[8].message}`) && Li(o, r);
    },
    d(s) {
      s && H(e), s && H(t), s && H(n);
    }
  };
}
function Af(i) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Never let it get this far.";
    },
    m(t, n) {
      D(t, e, n);
    },
    p: R,
    i: R,
    o: R,
    d(t) {
      t && H(e);
    }
  };
}
function If(i) {
  let e, t;
  return e = new ia({}), e.$on(
    "set-view",
    /*handleSetView*/
    i[13]
  ), e.$on(
    "error",
    /*handleError*/
    i[12]
  ), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      _e(e, n, r), t = !0;
    },
    p: R,
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      be(e, n);
    }
  };
}
function Sf(i) {
  let e, t;
  return e = new ra({}), e.$on(
    "set-view",
    /*handleSetView*/
    i[13]
  ), e.$on(
    "error",
    /*handleError*/
    i[12]
  ), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      _e(e, n, r), t = !0;
    },
    p: R,
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      be(e, n);
    }
  };
}
function Tf(i) {
  let e, t;
  return e = new na({}), e.$on(
    "set-view",
    /*handleSetView*/
    i[13]
  ), e.$on(
    "error",
    /*handleError*/
    i[12]
  ), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      _e(e, n, r), t = !0;
    },
    p: R,
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      be(e, n);
    }
  };
}
function Cf(i) {
  let e, t;
  return e = new oa({}), e.$on(
    "set-view",
    /*handleSetView*/
    i[13]
  ), e.$on(
    "error",
    /*handleError*/
    i[12]
  ), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      _e(e, n, r), t = !0;
    },
    p: R,
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      be(e, n);
    }
  };
}
function kf(i) {
  let e, t;
  return e = new ta({
    props: {
      gladedocumenthash: (
        /*gladedocumenthash*/
        i[2]
      ),
      apikey: (
        /*apikey*/
        i[0]
      ),
      focusedGladeDOMNodeHash: (
        /*focusedGladeDOMNodeHash*/
        i[5]
      )
    }
  }), e.$on(
    "error",
    /*handleError*/
    i[12]
  ), e.$on(
    "set-view",
    /*handleSetView*/
    i[13]
  ), e.$on(
    "publish",
    /*handlePublish*/
    i[14]
  ), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      _e(e, n, r), t = !0;
    },
    p(n, r) {
      const o = {};
      r & /*gladedocumenthash*/
      4 && (o.gladedocumenthash = /*gladedocumenthash*/
      n[2]), r & /*apikey*/
      1 && (o.apikey = /*apikey*/
      n[0]), r & /*focusedGladeDOMNodeHash*/
      32 && (o.focusedGladeDOMNodeHash = /*focusedGladeDOMNodeHash*/
      n[5]), e.$set(o);
    },
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      be(e, n);
    }
  };
}
function Of(i) {
  let e, t;
  return e = new zs({
    props: {
      apikey: (
        /*apikey*/
        i[0]
      ),
      gladedocumenthash: (
        /*gladedocumenthash*/
        i[2]
      ),
      annotations: (
        /*activeAnnotations*/
        i[6]
      )
    }
  }), e.$on(
    "error",
    /*handleError*/
    i[12]
  ), e.$on(
    "set-view",
    /*handleSetView*/
    i[13]
  ), e.$on(
    "delete-annotation",
    /*handleDeleteAnnotation*/
    i[15]
  ), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      _e(e, n, r), t = !0;
    },
    p(n, r) {
      const o = {};
      r & /*apikey*/
      1 && (o.apikey = /*apikey*/
      n[0]), r & /*gladedocumenthash*/
      4 && (o.gladedocumenthash = /*gladedocumenthash*/
      n[2]), r & /*activeAnnotations*/
      64 && (o.annotations = /*activeAnnotations*/
      n[6]), e.$set(o);
    },
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      be(e, n);
    }
  };
}
function Rf(i) {
  let e, t, n, r, o, s, a, d, l, u, c, f, h, p;
  a = new aa({
    props: {
      title: (
        /*title*/
        i[7]
      ),
      handleClickAccount: (
        /*handleClickAccount*/
        i[11]
      )
    }
  });
  let _ = (
    /*error*/
    i[8] && No(i)
  );
  const v = [
    Of,
    kf,
    Cf,
    Tf,
    Sf,
    If,
    Af
  ], y = [];
  function g(m, x) {
    return (
      /*activeView*/
      m[3] === U.List ? 0 : (
        /*activeView*/
        m[3] === U.Create ? 1 : (
          /*activeView*/
          m[3] === U.AuthenticationMenu ? 2 : (
            /*activeView*/
            m[3] === U.LoginForm ? 3 : (
              /*activeView*/
              m[3] === U.SignupForm ? 4 : (
                /*activeView*/
                m[3] === U.Account ? 5 : 6
              )
            )
          )
        )
      )
    );
  }
  return u = g(i), c = y[u] = v[u](i), {
    c() {
      e = I("article"), t = I("slot"), n = F(), r = I("mwc-dialog"), o = I("style"), o.textContent = `.error {
      border: solid 1px red;
      color: red;
      border-radius: 8px;
      padding: 8px;
      margin: 8px;
    }`, s = F(), Ee(a.$$.fragment), d = F(), _ && _.c(), l = F(), c.c(), this.c = R, z(
        e,
        "data-glade-document-hash",
        /*gladedocumenthash*/
        i[2]
      ), C(
        r,
        "open",
        /*showGladeUI*/
        i[4]
      ), C(r, "hideactions", "");
    },
    m(m, x) {
      D(m, e, x), w(e, t), i[16](e), D(m, n, x), D(m, r, x), w(r, o), w(r, s), _e(a, r, null), w(r, d), _ && _.m(r, null), w(r, l), y[u].m(r, null), f = !0, h || (p = [
        G(
          e,
          "mouseup",
          /*handleArticleMouseUp*/
          i[9]
        ),
        G(
          r,
          "closed",
          /*handleCloseDialog*/
          i[10]
        )
      ], h = !0);
    },
    p(m, [x]) {
      (!f || x & /*gladedocumenthash*/
      4) && z(
        e,
        "data-glade-document-hash",
        /*gladedocumenthash*/
        m[2]
      );
      const E = {};
      x & /*title*/
      128 && (E.title = /*title*/
      m[7]), a.$set(E), /*error*/
      m[8] ? _ ? _.p(m, x) : (_ = No(m), _.c(), _.m(r, l)) : _ && (_.d(1), _ = null);
      let O = u;
      u = g(m), u === O ? y[u].p(m, x) : (Pi(), J(y[O], 1, 1, () => {
        y[O] = null;
      }), Di(), c = y[u], c ? c.p(m, x) : (c = y[u] = v[u](m), c.c()), q(c, 1), c.m(r, null)), (!f || x & /*showGladeUI*/
      16) && C(
        r,
        "open",
        /*showGladeUI*/
        m[4]
      );
    },
    i(m) {
      f || (q(a.$$.fragment, m), q(c), f = !0);
    },
    o(m) {
      J(a.$$.fragment, m), J(c), f = !1;
    },
    d(m) {
      m && H(e), i[16](null), m && H(n), m && H(r), be(a), _ && _.d(), y[u].d(), h = !1, me(p);
    }
  };
}
let Nf = null;
const Lf = "v0ru.379031335f10b4cb40cff8f6feeb3d598db6529d52aa98637549ca8b63694c10", Pf = "0bEMs-b6UkqjiNepPJ1M4gZ9";
function Df(i, e, t) {
  let n, r;
  var o = this && this.__awaiter || function(S, B, K, ee) {
    function ae(te) {
      return te instanceof K ? te : new K(function(De) {
        De(te);
      });
    }
    return new (K || (K = Promise))(function(te, De) {
      function la(Ge) {
        try {
          zi(ee.next(Ge));
        } catch (ji) {
          De(ji);
        }
      }
      function ca(Ge) {
        try {
          zi(ee.throw(Ge));
        } catch (ji) {
          De(ji);
        }
      }
      function zi(Ge) {
        Ge.done ? te(Ge.value) : ae(Ge.value).then(la, ca);
      }
      zi((ee = ee.apply(S, B || [])).next());
    });
  };
  let { apikey: s } = e;
  Ro.init(Pf);
  let a = null;
  mt.subscribe((S) => {
    a = S;
  }), Hc(Le, (S) => {
    if (S) {
      console.debug("logged in");
      const B = {
        uid: S.uid,
        email: S.email,
        displayName: S.displayName
      };
      mt.set(B), Ro.identify(S.uid, {
        email: S.email || "",
        displayName: S.displayName || ""
      });
    } else
      mt.set(null);
  });
  let { article: d } = e, { gladedocumenthash: l } = e, u;
  u = U.List, console.debug("initalized"), s || (s = Lf), (() => o(void 0, void 0, void 0, function* () {
    if (s) {
      const S = tt(nt, "validateAPIKey");
      try {
        const B = yield S({ apiKey: s }), { isValid: K, forest: ee } = B.data;
        if (K) {
          console.debug("apikey is valid", ee);
          const ae = (a == null ? void 0 : a.uid) === ee.ownerUid;
          mt.update((te) => te ? Object.assign(Object.assign({}, te), { isForestOwner: ae }) : null), console.debug("currentUser.isForestOwner", ae);
        } else
          console.error("apikey is not valid");
      } catch (B) {
        console.error(B);
      }
    }
  }))(), console.debug(`apiKey: ${s}`);
  let f = !1, h = 0, p = [], _ = [];
  const v = (S) => p.filter((B) => B.gladeDOMNodeHash === S && !B.hidden), y = () => {
    const S = [], B = d.querySelector("slot");
    Array.from(B.assignedElements()).forEach((ee) => {
      const ae = xf(ee);
      ae && (ee.setAttribute("data-glade-node-hash", ae), S.push(ae));
    }), t(2, l = da(S.join("_"))), console.debug("glade-document-hash", l);
  }, g = () => o(void 0, void 0, void 0, function* () {
    var S;
    try {
      let K = yield tt(nt, "getAnnotations")({
        gladeDocumentHash: l,
        gladeAPIKey: s
      });
      p = (S = K == null ? void 0 : K.data) === null || S === void 0 ? void 0 : S.annotations.map((ee) => new ea(ee));
    } catch (B) {
      console.error(B);
    }
  }), m = () => {
    const S = d.querySelector("slot");
    Array.from(S.assignedElements()).forEach((K) => {
      const ee = parseInt(K.getAttribute("data-glade-node-hash") || "0");
      v(ee).length ? K.classList.add("glade-has-annotations") : K.classList.remove("glade-has-annotations");
    });
  };
  Po(() => {
    console.debug("mounted"), x();
  });
  const x = () => o(void 0, void 0, void 0, function* () {
    y(), yield g(), m();
  }), E = (S) => {
    if (S.button === 0) {
      const B = S == null ? void 0 : S.composedPath()[0], K = parseInt(B.getAttribute("data-glade-node-hash"));
      t(5, h = K), t(6, _ = v(h)), t(4, f = !0);
    }
  }, O = () => {
    t(4, f = !1), t(3, u = U.List);
  }, k = () => {
    t(3, u = u !== U.Account ? U.Account : U.List);
  }, A = (S) => {
    t(8, n = S.detail), console.debug(`error ${n}`), setTimeout(
      () => {
        t(8, n = null);
      },
      3e3
    );
  }, P = (S) => {
    console.debug("handleChangeView", S), S.detail.dismissModal && t(4, f = !1), t(3, u = S.detail.nextView);
  }, $ = (S) => {
    const { annotation: B } = S.detail;
    p.push(B), m();
  }, M = (S) => {
    p = p.filter((B) => B.uid !== S.detail.annotationUid), m();
  };
  function le(S) {
    Te[S ? "unshift" : "push"](() => {
      d = S, t(1, d);
    });
  }
  return i.$$set = (S) => {
    "apikey" in S && t(0, s = S.apikey), "article" in S && t(1, d = S.article), "gladedocumenthash" in S && t(2, l = S.gladedocumenthash);
  }, i.$$.update = () => {
    i.$$.dirty & /*activeView*/
    8 && t(7, r = u !== U.Account && u !== U.AuthenticationMenu ? "annotations" : "account");
  }, t(8, n = Nf), [
    s,
    d,
    l,
    u,
    f,
    h,
    _,
    r,
    n,
    E,
    O,
    k,
    A,
    P,
    $,
    M,
    le
  ];
}
class $f extends ye {
  constructor(e) {
    super(), Ae(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      Df,
      Rf,
      ge,
      {
        apikey: 0,
        article: 1,
        gladedocumenthash: 2
      },
      null
    ), e && (e.target && D(e.target, this, e.anchor), e.props && (this.$set(e.props), W()));
  }
  static get observedAttributes() {
    return ["apikey", "article", "gladedocumenthash"];
  }
  get apikey() {
    return this.$$.ctx[0];
  }
  set apikey(e) {
    this.$$set({ apikey: e }), W();
  }
  get article() {
    return this.$$.ctx[1];
  }
  set article(e) {
    this.$$set({ article: e }), W();
  }
  get gladedocumenthash() {
    return this.$$.ctx[2];
  }
  set gladedocumenthash(e) {
    this.$$set({ gladedocumenthash: e }), W();
  }
}
customElements.define("glade-annotatable", $f);
export {
  $f as default
};
