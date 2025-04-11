var St = Object.defineProperty;
var bt = (i, t, e) => t in i ? St(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var m = (i, t, e) => bt(i, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis, V = z.ShadowRoot && (z.ShadyCSS === void 0 || z.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, q = Symbol(), G = /* @__PURE__ */ new WeakMap();
let ut = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== q) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (V && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = G.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && G.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Et = (i) => new ut(typeof i == "string" ? i : i + "", void 0, q), x = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, n, r) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[r + 1], i[0]);
  return new ut(e, i, q);
}, Ct = (i, t) => {
  if (V) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), n = z.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = e.cssText, i.appendChild(s);
  }
}, J = V ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return Et(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: xt, defineProperty: Pt, getOwnPropertyDescriptor: Ut, getOwnPropertyNames: Tt, getOwnPropertySymbols: Nt, getPrototypeOf: Ot } = Object, v = globalThis, K = v.trustedTypes, Ht = K ? K.emptyScript : "", Mt = v.reactiveElementPolyfillSupport, U = (i, t) => i, R = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Ht : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, B = (i, t) => !xt(i, t), Z = { attribute: !0, type: String, converter: R, reflect: !1, hasChanged: B };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), v.litPropertyMetadata ?? (v.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class b extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Z) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), n = this.getPropertyDescriptor(t, s, e);
      n !== void 0 && Pt(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: n, set: r } = Ut(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get() {
      return n?.call(this);
    }, set(o) {
      const c = n?.call(this);
      r.call(this, o), this.requestUpdate(t, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Z;
  }
  static _$Ei() {
    if (this.hasOwnProperty(U("elementProperties"))) return;
    const t = Ot(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(U("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(U("properties"))) {
      const e = this.properties, s = [...Tt(e), ...Nt(e)];
      for (const n of s) this.createProperty(n, e[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, n] of e) this.elementProperties.set(s, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const n = this._$Eu(e, s);
      n !== void 0 && this._$Eh.set(n, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const n of s) e.unshift(J(n));
    } else t !== void 0 && e.push(J(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ct(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    const s = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, s);
    if (n !== void 0 && s.reflect === !0) {
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : R).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, n = s._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : R;
      this._$Em = n, this[n] = o.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? B)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, r] of s) r.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((s) => s.hostUpdate?.()), this.update(e)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[U("elementProperties")] = /* @__PURE__ */ new Map(), b[U("finalized")] = /* @__PURE__ */ new Map(), Mt?.({ ReactiveElement: b }), (v.reactiveElementVersions ?? (v.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = globalThis, j = T.trustedTypes, X = j ? j.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, pt = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, gt = "?" + y, It = `<${gt}>`, A = document, O = () => A.createComment(""), H = (i) => i === null || typeof i != "object" && typeof i != "function", Q = Array.isArray, Dt = (i) => Q(i) || typeof i?.[Symbol.iterator] == "function", W = `[ 	
\f\r]`, P = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, tt = />/g, $ = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, st = /"/g, ft = /^(?:script|style|textarea|title)$/i, Lt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), h = Lt(1), E = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), w = A.createTreeWalker(A, 129);
function _t(i, t) {
  if (!Q(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return X !== void 0 ? X.createHTML(t) : t;
}
const zt = (i, t) => {
  const e = i.length - 1, s = [];
  let n, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = P;
  for (let c = 0; c < e; c++) {
    const a = i[c];
    let d, u, l = -1, g = 0;
    for (; g < a.length && (o.lastIndex = g, u = o.exec(a), u !== null); ) g = o.lastIndex, o === P ? u[1] === "!--" ? o = Y : u[1] !== void 0 ? o = tt : u[2] !== void 0 ? (ft.test(u[2]) && (n = RegExp("</" + u[2], "g")), o = $) : u[3] !== void 0 && (o = $) : o === $ ? u[0] === ">" ? (o = n ?? P, l = -1) : u[1] === void 0 ? l = -2 : (l = o.lastIndex - u[2].length, d = u[1], o = u[3] === void 0 ? $ : u[3] === '"' ? st : et) : o === st || o === et ? o = $ : o === Y || o === tt ? o = P : (o = $, n = void 0);
    const f = o === $ && i[c + 1].startsWith("/>") ? " " : "";
    r += o === P ? a + It : l >= 0 ? (s.push(d), a.slice(0, l) + pt + a.slice(l) + y + f) : a + y + (l === -2 ? c : f);
  }
  return [_t(i, r + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class M {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let r = 0, o = 0;
    const c = t.length - 1, a = this.parts, [d, u] = zt(t, e);
    if (this.el = M.createElement(d, s), w.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (n = w.nextNode()) !== null && a.length < c; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const l of n.getAttributeNames()) if (l.endsWith(pt)) {
          const g = u[o++], f = n.getAttribute(l).split(y), L = /([.?@])?(.*)/.exec(g);
          a.push({ type: 1, index: r, name: L[2], strings: f, ctor: L[1] === "." ? jt : L[1] === "?" ? kt : L[1] === "@" ? Wt : k }), n.removeAttribute(l);
        } else l.startsWith(y) && (a.push({ type: 6, index: r }), n.removeAttribute(l));
        if (ft.test(n.tagName)) {
          const l = n.textContent.split(y), g = l.length - 1;
          if (g > 0) {
            n.textContent = j ? j.emptyScript : "";
            for (let f = 0; f < g; f++) n.append(l[f], O()), w.nextNode(), a.push({ type: 2, index: ++r });
            n.append(l[g], O());
          }
        }
      } else if (n.nodeType === 8) if (n.data === gt) a.push({ type: 2, index: r });
      else {
        let l = -1;
        for (; (l = n.data.indexOf(y, l + 1)) !== -1; ) a.push({ type: 7, index: r }), l += y.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function C(i, t, e = i, s) {
  if (t === E) return t;
  let n = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const r = H(t) ? void 0 : t._$litDirective$;
  return n?.constructor !== r && (n?._$AO?.(!1), r === void 0 ? n = void 0 : (n = new r(i), n._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = n : e._$Cl = n), n !== void 0 && (t = C(i, n._$AS(i, t.values), n, s)), t;
}
class Rt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, n = (t?.creationScope ?? A).importNode(e, !0);
    w.currentNode = n;
    let r = w.nextNode(), o = 0, c = 0, a = s[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let d;
        a.type === 2 ? d = new I(r, r.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (d = new Ft(r, this, t)), this._$AV.push(d), a = s[++c];
      }
      o !== a?.index && (r = w.nextNode(), o++);
    }
    return w.currentNode = A, n;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class I {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, n) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = C(this, t, e), H(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== E && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Dt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && H(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = M.createElement(_t(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(e);
    else {
      const r = new Rt(n, this), o = r.u(this.options);
      r.p(e), this.T(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = it.get(t.strings);
    return e === void 0 && it.set(t.strings, e = new M(t)), e;
  }
  k(t) {
    Q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const r of t) n === e.length ? e.push(s = new I(this.O(O()), this.O(O()), this, this.options)) : s = e[n], s._$AI(r), n++;
    n < e.length && (this._$AR(s && s._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class k {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, n, r) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = C(this, t, e, 0), o = !H(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
    else {
      const c = t;
      let a, d;
      for (t = r[0], a = 0; a < r.length - 1; a++) d = C(this, c[s + a], e, a), d === E && (d = this._$AH[a]), o || (o = !H(d) || d !== this._$AH[a]), d === p ? t = p : t !== p && (t += (d ?? "") + r[a + 1]), this._$AH[a] = d;
    }
    o && !n && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class jt extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class kt extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Wt extends k {
  constructor(t, e, s, n, r) {
    super(t, e, s, n, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = C(this, t, e, 0) ?? p) === E) return;
    const s = this._$AH, n = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== p && (s === p || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ft {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    C(this, t);
  }
}
const Vt = T.litHtmlPolyfillSupport;
Vt?.(M, I), (T.litHtmlVersions ?? (T.litHtmlVersions = [])).push("3.2.1");
const qt = (i, t, e) => {
  const s = e?.renderBefore ?? t;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = e?.renderBefore ?? null;
    s._$litPart$ = n = new I(t.insertBefore(O(), r), r, void 0, e ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let N = class extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = qt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return E;
  }
};
N._$litElement$ = !0, N.finalized = !0, globalThis.litElementHydrateSupport?.({ LitElement: N });
const Bt = globalThis.litElementPolyfillSupport;
Bt?.({ LitElement: N });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qt = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gt = { attribute: !0, type: String, converter: R, reflect: !1, hasChanged: B }, Jt = (i = Gt, t, e) => {
  const { kind: s, metadata: n } = e;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), r.set(e.name, i), s === "accessor") {
    const { name: o } = e;
    return { set(c) {
      const a = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(o, a, i);
    }, init(c) {
      return c !== void 0 && this.P(o, void 0, i), c;
    } };
  }
  if (s === "setter") {
    const { name: o } = e;
    return function(c) {
      const a = this[o];
      t.call(this, c), this.requestUpdate(o, a, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function yt(i) {
  return (t, e) => typeof e == "object" ? Jt(i, t, e) : ((s, n, r) => {
    const o = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, o ? { ...s, wrapped: !0 } : s), o ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function D(i) {
  return yt({ ...i, state: !0, attribute: !1 });
}
const nt = {
  clear: "icons/weather/clear.svg",
  cloudy: "icons/weather/cloudy.svg",
  fog: "icons/weather/fog.svg",
  hail: "icons/weather/hail.svg",
  partlycloudy: "icons/weather/partly-cloudy.svg",
  pouring: "icons/weather/pouring.svg",
  rainy: "icons/weather/rain.svg",
  snowy: "icons/weather/snow.svg",
  snowyrainy: "icons/weather/sleet.svg",
  sunny: "icons/weather/sunny.svg",
  windy: "icons/weather/wind.svg",
  exceptional: "icons/weather/alert.svg"
}, rt = {
  clear: "icons/weather/clear.svg",
  cloudy: "icons/weather/cloudy.svg",
  fog: "icons/weather/fog.svg",
  hail: "icons/weather/hail.svg",
  partlycloudy: "icons/weather/partly-cloudy.svg",
  pouring: "icons/weather/pouring.svg",
  rainy: "icons/weather/rain.svg",
  snowy: "icons/weather/snow.svg",
  snowyrainy: "icons/weather/sleet.svg",
  sunny: "icons/weather/sunny.svg",
  windy: "icons/weather/wind.svg",
  exceptional: "icons/weather/alert.svg"
}, ot = {
  clear: "icons/weather/clear.svg",
  cloudy: "icons/weather/cloudy.svg",
  fog: "icons/weather/fog.svg",
  hail: "icons/weather/hail.svg",
  partlycloudy: "icons/weather/partly-cloudy.svg",
  pouring: "icons/weather/pouring.svg",
  rainy: "icons/weather/rain.svg",
  snowy: "icons/weather/snow.svg",
  snowyrainy: "icons/weather/sleet.svg",
  sunny: "icons/weather/sunny.svg",
  windy: "icons/weather/wind.svg",
  exceptional: "icons/weather/alert.svg"
}, at = {
  clear: "icons/icons/weather//clear.svg",
  cloudy: "icons/weather//cloudy.svg",
  fog: "icons/weather//fog.svg",
  hail: "icons/weather//hail.svg",
  partlycloudy: "icons/weather//partly-cloudy.svg",
  pouring: "icons/weather//pouring.svg",
  rainy: "icons/weather//rain.svg",
  snowy: "icons/weather//snow.svg",
  snowyrainy: "icons/weather//sleet.svg",
  sunny: "icons/weather//sunny.svg",
  windy: "icons/weather//wind.svg",
  exceptional: "icons/weather//alert.svg"
}, ct = {
  clear: "icons/weather/clear.svg",
  cloudy: "icons/weather/cloudy.svg",
  fog: "icons/weather/fog.svg",
  hail: "icons/weather/hail.svg",
  partlycloudy: "icons/weather/partly-cloudy.svg",
  pouring: "icons/weather/pouring.svg",
  rainy: "icons/weather/rain.svg",
  snowy: "icons/weather/snow.svg",
  snowyrainy: "icons/weather/sleet.svg",
  sunny: "icons/weather/sunny.svg",
  windy: "icons/weather/wind.svg",
  exceptional: "icons/weather/alert.svg"
};
function Kt(i, t) {
  const e = i.weather?.icons_model?.toLowerCase(), s = {
    iconType: i.animation ? "animated" : "static",
    icons_model: "climacell",
    iconsDay: nt,
    iconsNight: nt,
    path: t
  };
  switch (e) {
    case "darksky":
      return {
        ...s,
        icons_model: "darksky",
        iconsDay: rt,
        iconsNight: rt
      };
    case "openweathermap":
      return {
        ...s,
        icons_model: "openweathermap",
        iconsDay: ot,
        iconsNight: ot
      };
    case "buienradar":
      return {
        ...s,
        icons_model: "buienradar",
        iconsDay: at,
        iconsNight: at
      };
    case "defaulthass":
      return {
        ...s,
        icons_model: "defaulthass",
        iconsDay: ct,
        iconsNight: ct
      };
    default:
      return s;
  }
}
const lt = {
  // HACS installation path
  HACS_IMAGE_PATH: "/local/community/ha-card-weather-conditions",
  // Manual installation path
  MANUAL_IMAGE_PATH: "/local/ha-card-weather-conditions"
}, vt = {
  en: 0,
  it: 1,
  nl: 2,
  es: 3,
  de: 4,
  fr: 5,
  sr: 6,
  pt: 7,
  da: 8,
  no: 9
}, ht = "en", Zt = [
  "en.json",
  "it.json",
  "nl.json",
  "es.json",
  "de.json",
  "fr.json",
  "sr.json",
  "pt.json",
  "da.json",
  "no.json"
], mt = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
  "N"
], $t = {
  cwc_trans_day: "Day",
  cwc_trans_night: "Night",
  cwc_trans_humidity: "Humidity",
  cwc_trans_pressure: "Pressure",
  cwc_trans_visibility: "Visibility",
  cwc_trans_wind: "Wind",
  cwc_trans_precipitation: "Precipitation",
  cwc_trans_precipitation_probability: "Precipitation Probability",
  cwc_trans_daily_forecast: "Daily Forecast",
  cwc_trans_hourly_forecast: "Hourly Forecast",
  cwc_trans_feels_like: "Feels Like",
  cwc_trans_alerts: "Alerts",
  cwc_trans_no_alerts: "No alerts",
  cwc_trans_uv: "UV Index",
  cwc_trans_uv_protection: "UV Protection",
  cwc_trans_ozone_level: "Ozone Level",
  cwc_trans_pollen: "Pollen",
  cwc_trans_tree: "Tree",
  cwc_trans_grass: "Grass",
  cwc_trans_weed: "Weed",
  cwc_trans_air_quality: "Air Quality",
  cwc_trans_co: "CO",
  cwc_trans_no2: "NO₂",
  cwc_trans_o3: "O₃",
  cwc_trans_so2: "SO₂",
  cwc_trans_pm10: "PM₁₀",
  cwc_trans_pm25: "PM₂.₅",
  cwc_trans_epa_aqi: "EPA AQI",
  cwc_trans_epa_health: "Health Concern",
  cwc_trans_sun: "Sun",
  cwc_trans_sunrise: "Sunrise",
  cwc_trans_sunset: "Sunset",
  cwc_trans_high: "High",
  cwc_trans_low: "Low",
  cwc_trans_sea: "Sea",
  cwc_trans_waves: "Waves",
  cwc_trans_swell: "Swell",
  cwc_trans_water_temp: "Water Temperature"
}, wt = {
  humidity: "Humidity",
  pressure: "Pressure",
  visibility: "Visibility",
  wind: "Wind",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, F = {
  ...$t,
  windDirections: mt,
  words: wt
};
function Xt() {
  const i = [lt.HACS_IMAGE_PATH, lt.MANUAL_IMAGE_PATH];
  return dt(i[1]) ? (console.log(`Found valid image directory via manual installation: ${i[1]}`), i[1]) : dt(i[0]) ? (console.log(`Found valid image directory via HACS: ${i[0]}`), i[0]) : (console.warn("No valid image directories found"), "");
}
function dt(i) {
  return i === "/local/ha-card-weather-conditions";
}
function Yt(i) {
  if (!i) return ht;
  const t = i.toLowerCase();
  return Object.keys(vt).includes(t) ? t : ht;
}
async function te(i, t) {
  try {
    const e = vt[t];
    if (e === void 0)
      return console.warn(`Locale ${t} not found, using default`), F;
    const s = Zt[e], n = `${i}/transl/${s}`;
    console.log(`Loading translation from: ${n}`);
    try {
      const r = await fetch(n);
      if (!r.ok)
        throw new Error(`Failed to load translations: ${r.statusText}`);
      const o = await r.json();
      return console.log("Translation loaded successfully"), {
        ...$t,
        ...o,
        windDirections: o.windDirections || mt,
        words: {
          ...wt,
          ...o.words || {}
        }
      };
    } catch (r) {
      return console.warn(`Failed to load translation file ${n}:`, r), F;
    }
  } catch (e) {
    return console.error("Error loading translations:", e), F;
  }
}
function ee(i) {
  if (!i)
    return {
      hasCurrent: !1,
      hasForecast: !1,
      hasMeteogram: !1,
      hasAirQuality: !1,
      hasPollen: !1,
      hasUv: !1,
      hasAlert: !1,
      hasSea: !1
    };
  const t = i.weather || {}, e = i.pollen, s = !!t.current, n = !!t.forecast, r = n && !!t.forecast?.meteogram, o = !!i.air_quality, c = !!e && (!!e.tree || !!e.weed || !!e.grass), a = !!i.uv, d = !!i.alert, u = !!i.sea;
  return {
    hasCurrent: s,
    hasForecast: n,
    hasMeteogram: r,
    hasAirQuality: o,
    hasPollen: c,
    hasUv: a,
    hasAlert: d,
    hasSea: u
  };
}
async function se(i, t) {
  if (!i) throw new Error("Invalid configuration");
  const e = {
    ...i,
    name: i.name || "",
    language: Yt(i.language),
    display: i.display || ["top", "current", "forecast"]
  }, s = ee(e), n = Kt(e, t), r = await te(t, e.language ?? "en");
  return {
    config: e,
    iconConfig: n,
    flags: s,
    terms: r
  };
}
const ie = x`
  .weather-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--card-background-color);
    border-radius: 8px;
    box-shadow: var(--card-box-shadow);
  }
`, ne = x`
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    text-align: center;
    color: var(--primary-text-color);
  }

  .summary .location {
    font-size: 1.2em;
    font-weight: bold;
  }

  .summary .description {
    font-size: 1em;
    font-style: italic;
    margin-top: 0.25em;
    color: var(--secondary-text-color);
  }

  .summary .icon {
    width: 48px;
    height: 48px;
    margin: 0.5em 0;
  }

  .summary .temp {
    font-size: 2.5em;
    font-weight: 500;
  }

  .summary .temp span.unit {
    font-size: 0.6em;
    vertical-align: super;
    margin-left: 0.1em;
  }

  .summary .state {
    font-size: 1em;
    margin-top: 0.25em;
    text-transform: capitalize;
  }
`, re = x`
  .forecast {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 8px;
    margin-top: 1em;
  }

  .forecast .day {
    text-align: center;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }

  .forecast .date {
    font-weight: bold;
  }

  .forecast .condition {
    font-size: 0.9em;
    margin: 4px 0;
  }

  .forecast .high,
  .forecast .low {
    display: block;
  }
`, oe = x`
  .meter {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1em;
    font-size: 0.9em;
    color: var(--secondary-text-color);
  }

  .meter .value {
    font-weight: bold;
    color: var(--primary-text-color);
  }

  .meter .label {
    font-size: 0.8em;
  }
`, ae = x`
  .camera {
    position: relative;
    width: 100%;
    height: auto;
  }

  .camera img {
    width: 100%;
    border-radius: 8px;
  }
`, ce = x`
  .day-night {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
    font-size: 0.9em;
    color: var(--secondary-text-color);
  }

  .day-night .sunrise,
  .day-night .sunset {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .day-night .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 0.25em;
  }

  .day-night .label {
    font-size: 0.75em;
  }

  .day-night .time {
    font-weight: bold;
    font-size: 0.85em;
  }
`, le = [
  ie,
  ne,
  re,
  oe,
  ae,
  ce
];
function he(i, t) {
  const e = t.weather?.forecast, s = e?.temperature_high || {}, n = e?.temperature_low || {}, r = e?.condition || {};
  return {
    daily: Object.keys(s).map((c) => {
      const a = s[c], d = n[c], u = r[c], l = a ? parseFloat(i.states[a]?.state || "0") : 0, g = d ? parseFloat(i.states[d]?.state || "0") : 0, f = u && i.states[u]?.state || "clear";
      return {
        date: c,
        condition: f,
        high: l,
        low: g
      };
    })
  };
}
function de({ hass: i, config: t, icons: e, terms: s }) {
  const n = t.weather?.current?.temperature, r = n ? i.states[n] : void 0;
  if (!r) return h``;
  const o = r.state, c = r.attributes?.weather || "unknown", a = e.iconsDay[c] || e.iconsDay.clear;
  return h`
    <div class="summary">
      <div class="temp">
        ${o}
        <span class="unit">°</span>
      </div>
      <div class="state">${s.words?.[c] || c}</div>
      <img class="icon" src="${e.path}/${a}" />
    </div>
  `;
}
function ue({ hass: i, config: t, terms: e }) {
  const s = t.weather?.current;
  if (!s) return h``;
  const n = (r) => r ? i.states[r]?.state ?? "-" : "-";
  return h`
    <div class="present">
      <div>${e.words.temperature ?? "Temp"}: ${n(s.temperature)}°</div>
      <div>${e.words.humidity ?? "Humidity"}: ${n(s.humidity)}%</div>
      <div>${e.words.pressure ?? "Pressure"}: ${n(s.pressure)} hPa</div>
      <div>${e.words.wind ?? "Wind"}: ${n(s.wind_speed)} km/h</div>
    </div>
  `;
}
function pe(i) {
  return i?.daily?.length ? h`
    <div class="forecast">
      ${i.daily.map((t) => h`
        <div class="day">
          <span class="date">${t.date}</span>
          <span class="condition">${t.condition}</span>
          <span class="high">${t.high}°</span>
          <span class="low">${t.low}°</span>
        </div>
      `)}
    </div>
  ` : h``;
}
function ge({ hass: i, config: t }) {
  const e = t.pollen;
  if (!e) return h``;
  const s = (n) => {
    const r = e[n]?.entity;
    return r ? i.states[r]?.state ?? "-" : "-";
  };
  return h`
    <div class="pollen">
      <div>🌲 Tree: ${s("tree")}</div>
      <div>🌿 Weed: ${s("weed")}</div>
      <div>🌾 Grass: ${s("grass")}</div>
    </div>
  `;
}
function fe({ hass: i, config: t }) {
  const e = t.air_quality;
  if (!e) return h``;
  const s = (n) => {
    const r = e[n];
    return r ? i.states[r]?.state ?? "-" : "-";
  };
  return h`
    <div class="air-quality">
      <div>PM2.5: ${s("pm25")} μg/m³</div>
      <div>PM10: ${s("pm10")} μg/m³</div>
      <div>O₃: ${s("o3")} μg/m³</div>
      <div>NO₂: ${s("no2")} μg/m³</div>
      <div>SO₂: ${s("so2")} μg/m³</div>
      <div>CO: ${s("co")} μg/m³</div>
      <div>AQI: ${s("epa_aqi")}</div>
      <div>Concern: ${s("epa_health_concern")}</div>
    </div>
  `;
}
function _e({ hass: i, config: t }) {
  const e = t.uv;
  if (!e) return h``;
  const s = (n) => {
    const r = e[n];
    return r ? i.states[r]?.state ?? "-" : "-";
  };
  return h`
    <div class="uv">
      <div>🌞 UV Index: ${s("uv_index")}</div>
      <div>Max UV: ${s("max_uv_index")}</div>
      <div>Level: ${s("uv_level")}</div>
      <div>Protection: ${s("protection_window")}</div>
      <div>Ozone: ${s("ozone_level")} DU</div>
    </div>
  `;
}
function ye({ hass: i, config: t }) {
  const e = t.alert;
  if (!e) return h``;
  const s = i.states[e];
  return !s || s.state === "off" ? h`` : h`
    <div class="alert">
      <div class="title">🚨 Alert Active</div>
      <div class="description">${s.attributes.message || "Details not available."}</div>
    </div>
  `;
}
function ve({ hass: i, config: t }) {
  const e = t.sea;
  if (!e) return h``;
  const s = i.states[e];
  return s ? h`
    <div class="sea">
      <div>🌊 Sea State: ${s.state}</div>
      ${s.attributes.wave_height ? h`<div>Height: ${s.attributes.wave_height} m</div>` : ""}
      ${s.attributes.wave_period ? h`<div>Period: ${s.attributes.wave_period} s</div>` : ""}
    </div>
  ` : h``;
}
var At = Object.defineProperty, me = Object.getOwnPropertyDescriptor, $e = (i, t, e) => t in i ? At(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, S = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? me(t, e) : t, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = (s ? o(t, e, n) : o(n)) || n);
  return s && n && At(t, e, n), n;
}, we = (i, t, e) => $e(i, t + "", e);
let _ = class extends N {
  constructor() {
    super(...arguments);
    m(this, "hass");
    m(this, "config");
    m(this, "iconConfig");
    m(this, "flags");
    m(this, "terms");
    m(this, "invalidConfig", !1);
  }
  async setConfig(t) {
    try {
      const e = Xt(), { config: s, iconConfig: n, flags: r, terms: o } = await se(t, e || "");
      this.config = s, this.iconConfig = n, this.flags = r, this.terms = o, this.requestUpdate();
    } catch (e) {
      console.error("Error in setConfig:", e), this.invalidConfig = !0, this.requestUpdate();
    }
  }
  getCardSize() {
    return 2;
  }
  render() {
    const { hass: t, config: e, iconConfig: s, terms: n, flags: r } = this;
    if (!t || !e || !s || !n || !r)
      return h`
        <ha-card class="ha-card-weather-conditions">
          <div class="content">Loading weather card...</div>
        </ha-card>
      `;
    if (this.invalidConfig)
      return h`
        <ha-card class="ha-card-weather-conditions">
          <div class="banner">
            <div class="header">ha-card-weather-conditions</div>
          </div>
          <div class="content">Configuration ERROR!</div>
        </ha-card>
      `;
    const o = { hass: t, config: e, terms: n, icons: s };
    return h`
      <ha-card class="ha-card-weather-conditions">
        <div class="nd-container">
          ${r.hasCurrent ? de(o) : ""}
          ${r.hasCurrent ? ue(o) : ""}
          ${r.hasForecast ? pe(he(t, e)) : ""}
          ${r.hasAlert ? ye({ hass: t, config: e }) : ""}
          ${r.hasAirQuality ? fe(o) : ""}
          ${r.hasPollen ? ge(o) : ""}
          ${r.hasUv ? _e(o) : ""}
          ${r.hasSea ? ve({ hass: t, config: e }) : ""}
        </div>
      </ha-card>
    `;
  }
};
we(_, "styles", le);
S([
  yt({ attribute: !1 })
], _.prototype, "hass", 2);
S([
  D()
], _.prototype, "config", 2);
S([
  D()
], _.prototype, "iconConfig", 2);
S([
  D()
], _.prototype, "flags", 2);
S([
  D()
], _.prototype, "terms", 2);
S([
  D()
], _.prototype, "invalidConfig", 2);
_ = S([
  Qt("ha-card-weather-conditions")
], _);
export {
  _ as HaCardWeatherConditions
};
