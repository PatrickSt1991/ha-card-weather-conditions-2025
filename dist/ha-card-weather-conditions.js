var xA = Object.defineProperty;
var NA = (n, A, t) => A in n ? xA(n, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[A] = t;
var w = (n, A, t) => NA(n, typeof A != "symbol" ? A + "" : A, t);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis, nA = H.ShadowRoot && (H.ShadyCSS === void 0 || H.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, rA = Symbol(), oA = /* @__PURE__ */ new WeakMap();
let mA = class {
  constructor(A, t, e) {
    if (this._$cssResult$ = !0, e !== rA) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = A, this.t = t;
  }
  get styleSheet() {
    let A = this.o;
    const t = this.t;
    if (nA && A === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (A = oA.get(t)), A === void 0 && ((this.o = A = new CSSStyleSheet()).replaceSync(this.cssText), e && oA.set(t, A));
    }
    return A;
  }
  toString() {
    return this.cssText;
  }
};
const PA = (n) => new mA(typeof n == "string" ? n : n + "", void 0, rA), k = (n, ...A) => {
  const t = n.length === 1 ? n[0] : A.reduce((e, r, s) => e + ((i) => {
    if (i._$cssResult$ === !0) return i.cssText;
    if (typeof i == "number") return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + n[s + 1], n[0]);
  return new mA(t, n, rA);
}, bA = (n, A) => {
  if (nA) n.adoptedStyleSheets = A.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of A) {
    const e = document.createElement("style"), r = H.litNonce;
    r !== void 0 && e.setAttribute("nonce", r), e.textContent = t.cssText, n.appendChild(e);
  }
}, aA = nA ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((A) => {
  let t = "";
  for (const e of A.cssRules) t += e.cssText;
  return PA(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: JA, defineProperty: XA, getOwnPropertyDescriptor: qA, getOwnPropertyNames: MA, getOwnPropertySymbols: UA, getPrototypeOf: LA } = Object, h = globalThis, gA = h.trustedTypes, TA = gA ? gA.emptyScript : "", RA = h.reactiveElementPolyfillSupport, O = (n, A) => n, Y = { toAttribute(n, A) {
  switch (A) {
    case Boolean:
      n = n ? TA : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, A) {
  let t = n;
  switch (A) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, sA = (n, A) => !JA(n, A), lA = { attribute: !0, type: String, converter: Y, reflect: !1, hasChanged: sA };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), h.litPropertyMetadata ?? (h.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class m extends HTMLElement {
  static addInitializer(A) {
    this._$Ei(), (this.l ?? (this.l = [])).push(A);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(A, t = lA) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(A, t), !t.noAccessor) {
      const e = Symbol(), r = this.getPropertyDescriptor(A, e, t);
      r !== void 0 && XA(this.prototype, A, r);
    }
  }
  static getPropertyDescriptor(A, t, e) {
    const { get: r, set: s } = qA(this.prototype, A) ?? { get() {
      return this[t];
    }, set(i) {
      this[t] = i;
    } };
    return { get() {
      return r?.call(this);
    }, set(i) {
      const a = r?.call(this);
      s.call(this, i), this.requestUpdate(A, a, e);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(A) {
    return this.elementProperties.get(A) ?? lA;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties"))) return;
    const A = LA(this);
    A.finalize(), A.l !== void 0 && (this.l = [...A.l]), this.elementProperties = new Map(A.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const t = this.properties, e = [...MA(t), ...UA(t)];
      for (const r of e) this.createProperty(r, t[r]);
    }
    const A = this[Symbol.metadata];
    if (A !== null) {
      const t = litPropertyMetadata.get(A);
      if (t !== void 0) for (const [e, r] of t) this.elementProperties.set(e, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, e] of this.elementProperties) {
      const r = this._$Eu(t, e);
      r !== void 0 && this._$Eh.set(r, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(A) {
    const t = [];
    if (Array.isArray(A)) {
      const e = new Set(A.flat(1 / 0).reverse());
      for (const r of e) t.unshift(aA(r));
    } else A !== void 0 && t.push(aA(A));
    return t;
  }
  static _$Eu(A, t) {
    const e = t.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof A == "string" ? A.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((A) => this.enableUpdating = A), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((A) => A(this));
  }
  addController(A) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(A), this.renderRoot !== void 0 && this.isConnected && A.hostConnected?.();
  }
  removeController(A) {
    this._$EO?.delete(A);
  }
  _$E_() {
    const A = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const e of t.keys()) this.hasOwnProperty(e) && (A.set(e, this[e]), delete this[e]);
    A.size > 0 && (this._$Ep = A);
  }
  createRenderRoot() {
    const A = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return bA(A, this.constructor.elementStyles), A;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((A) => A.hostConnected?.());
  }
  enableUpdating(A) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((A) => A.hostDisconnected?.());
  }
  attributeChangedCallback(A, t, e) {
    this._$AK(A, e);
  }
  _$EC(A, t) {
    const e = this.constructor.elementProperties.get(A), r = this.constructor._$Eu(A, e);
    if (r !== void 0 && e.reflect === !0) {
      const s = (e.converter?.toAttribute !== void 0 ? e.converter : Y).toAttribute(t, e.type);
      this._$Em = A, s == null ? this.removeAttribute(r) : this.setAttribute(r, s), this._$Em = null;
    }
  }
  _$AK(A, t) {
    const e = this.constructor, r = e._$Eh.get(A);
    if (r !== void 0 && this._$Em !== r) {
      const s = e.getPropertyOptions(r), i = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : Y;
      this._$Em = r, this[r] = i.fromAttribute(t, s.type), this._$Em = null;
    }
  }
  requestUpdate(A, t, e) {
    if (A !== void 0) {
      if (e ?? (e = this.constructor.getPropertyOptions(A)), !(e.hasChanged ?? sA)(this[A], t)) return;
      this.P(A, t, e);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(A, t, e) {
    this._$AL.has(A) || this._$AL.set(A, t), e.reflect === !0 && this._$Em !== A && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(A);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const A = this.scheduleUpdate();
    return A != null && await A, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, s] of this._$Ep) this[r] = s;
        this._$Ep = void 0;
      }
      const e = this.constructor.elementProperties;
      if (e.size > 0) for (const [r, s] of e) s.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], s);
    }
    let A = !1;
    const t = this._$AL;
    try {
      A = this.shouldUpdate(t), A ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EU();
    } catch (e) {
      throw A = !1, this._$EU(), e;
    }
    A && this._$AE(t);
  }
  willUpdate(A) {
  }
  _$AE(A) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(A)), this.updated(A);
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
  shouldUpdate(A) {
    return !0;
  }
  update(A) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(A) {
  }
  firstUpdated(A) {
  }
}
m.elementStyles = [], m.shadowRootOptions = { mode: "open" }, m[O("elementProperties")] = /* @__PURE__ */ new Map(), m[O("finalized")] = /* @__PURE__ */ new Map(), RA?.({ ReactiveElement: m }), (h.reactiveElementVersions ?? (h.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis, _ = D.trustedTypes, BA = _ ? _.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, vA = "$lit$", d = `lit$${Math.random().toFixed(9).slice(2)}$`, SA = "?" + d, zA = `<${SA}>`, u = document, N = () => u.createComment(""), P = (n) => n === null || typeof n != "object" && typeof n != "function", iA = Array.isArray, ZA = (n) => iA(n) || typeof n?.[Symbol.iterator] == "function", AA = `[ 	
\f\r]`, y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, CA = /-->/g, cA = />/g, p = RegExp(`>|${AA}(?:([^\\s"'>=/]+)(${AA}*=${AA}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), IA = /'/g, fA = /"/g, kA = /^(?:script|style|textarea|title)$/i, KA = (n) => (A, ...t) => ({ _$litType$: n, strings: A, values: t }), l = KA(1), v = Symbol.for("lit-noChange"), c = Symbol.for("lit-nothing"), EA = /* @__PURE__ */ new WeakMap(), Q = u.createTreeWalker(u, 129);
function yA(n, A) {
  if (!iA(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return BA !== void 0 ? BA.createHTML(A) : A;
}
const GA = (n, A) => {
  const t = n.length - 1, e = [];
  let r, s = A === 2 ? "<svg>" : A === 3 ? "<math>" : "", i = y;
  for (let a = 0; a < t; a++) {
    const o = n[a];
    let B, C, g = -1, I = 0;
    for (; I < o.length && (i.lastIndex = I, C = i.exec(o), C !== null); ) I = i.lastIndex, i === y ? C[1] === "!--" ? i = CA : C[1] !== void 0 ? i = cA : C[2] !== void 0 ? (kA.test(C[2]) && (r = RegExp("</" + C[2], "g")), i = p) : C[3] !== void 0 && (i = p) : i === p ? C[0] === ">" ? (i = r ?? y, g = -1) : C[1] === void 0 ? g = -2 : (g = i.lastIndex - C[2].length, B = C[1], i = C[3] === void 0 ? p : C[3] === '"' ? fA : IA) : i === fA || i === IA ? i = p : i === CA || i === cA ? i = y : (i = p, r = void 0);
    const f = i === p && n[a + 1].startsWith("/>") ? " " : "";
    s += i === y ? o + zA : g >= 0 ? (e.push(B), o.slice(0, g) + vA + o.slice(g) + d + f) : o + d + (g === -2 ? a : f);
  }
  return [yA(n, s + (n[t] || "<?>") + (A === 2 ? "</svg>" : A === 3 ? "</math>" : "")), e];
};
class b {
  constructor({ strings: A, _$litType$: t }, e) {
    let r;
    this.parts = [];
    let s = 0, i = 0;
    const a = A.length - 1, o = this.parts, [B, C] = GA(A, t);
    if (this.el = b.createElement(B, e), Q.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (r = Q.nextNode()) !== null && o.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const g of r.getAttributeNames()) if (g.endsWith(vA)) {
          const I = C[i++], f = r.getAttribute(g).split(d), j = /([.?@])?(.*)/.exec(I);
          o.push({ type: 1, index: s, name: j[2], strings: f, ctor: j[1] === "." ? WA : j[1] === "?" ? jA : j[1] === "@" ? HA : $ }), r.removeAttribute(g);
        } else g.startsWith(d) && (o.push({ type: 6, index: s }), r.removeAttribute(g));
        if (kA.test(r.tagName)) {
          const g = r.textContent.split(d), I = g.length - 1;
          if (I > 0) {
            r.textContent = _ ? _.emptyScript : "";
            for (let f = 0; f < I; f++) r.append(g[f], N()), Q.nextNode(), o.push({ type: 2, index: ++s });
            r.append(g[I], N());
          }
        }
      } else if (r.nodeType === 8) if (r.data === SA) o.push({ type: 2, index: s });
      else {
        let g = -1;
        for (; (g = r.data.indexOf(d, g + 1)) !== -1; ) o.push({ type: 7, index: s }), g += d.length - 1;
      }
      s++;
    }
  }
  static createElement(A, t) {
    const e = u.createElement("template");
    return e.innerHTML = A, e;
  }
}
function S(n, A, t = n, e) {
  if (A === v) return A;
  let r = e !== void 0 ? t._$Co?.[e] : t._$Cl;
  const s = P(A) ? void 0 : A._$litDirective$;
  return r?.constructor !== s && (r?._$AO?.(!1), s === void 0 ? r = void 0 : (r = new s(n), r._$AT(n, t, e)), e !== void 0 ? (t._$Co ?? (t._$Co = []))[e] = r : t._$Cl = r), r !== void 0 && (A = S(n, r._$AS(n, A.values), r, e)), A;
}
class VA {
  constructor(A, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = A, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(A) {
    const { el: { content: t }, parts: e } = this._$AD, r = (A?.creationScope ?? u).importNode(t, !0);
    Q.currentNode = r;
    let s = Q.nextNode(), i = 0, a = 0, o = e[0];
    for (; o !== void 0; ) {
      if (i === o.index) {
        let B;
        o.type === 2 ? B = new J(s, s.nextSibling, this, A) : o.type === 1 ? B = new o.ctor(s, o.name, o.strings, this, A) : o.type === 6 && (B = new YA(s, this, A)), this._$AV.push(B), o = e[++a];
      }
      i !== o?.index && (s = Q.nextNode(), i++);
    }
    return Q.currentNode = u, r;
  }
  p(A) {
    let t = 0;
    for (const e of this._$AV) e !== void 0 && (e.strings !== void 0 ? (e._$AI(A, e, t), t += e.strings.length - 2) : e._$AI(A[t])), t++;
  }
}
class J {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(A, t, e, r) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = A, this._$AB = t, this._$AM = e, this.options = r, this._$Cv = r?.isConnected ?? !0;
  }
  get parentNode() {
    let A = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && A?.nodeType === 11 && (A = t.parentNode), A;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(A, t = this) {
    A = S(this, A, t), P(A) ? A === c || A == null || A === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : A !== this._$AH && A !== v && this._(A) : A._$litType$ !== void 0 ? this.$(A) : A.nodeType !== void 0 ? this.T(A) : ZA(A) ? this.k(A) : this._(A);
  }
  O(A) {
    return this._$AA.parentNode.insertBefore(A, this._$AB);
  }
  T(A) {
    this._$AH !== A && (this._$AR(), this._$AH = this.O(A));
  }
  _(A) {
    this._$AH !== c && P(this._$AH) ? this._$AA.nextSibling.data = A : this.T(u.createTextNode(A)), this._$AH = A;
  }
  $(A) {
    const { values: t, _$litType$: e } = A, r = typeof e == "number" ? this._$AC(A) : (e.el === void 0 && (e.el = b.createElement(yA(e.h, e.h[0]), this.options)), e);
    if (this._$AH?._$AD === r) this._$AH.p(t);
    else {
      const s = new VA(r, this), i = s.u(this.options);
      s.p(t), this.T(i), this._$AH = s;
    }
  }
  _$AC(A) {
    let t = EA.get(A.strings);
    return t === void 0 && EA.set(A.strings, t = new b(A)), t;
  }
  k(A) {
    iA(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let e, r = 0;
    for (const s of A) r === t.length ? t.push(e = new J(this.O(N()), this.O(N()), this, this.options)) : e = t[r], e._$AI(s), r++;
    r < t.length && (this._$AR(e && e._$AB.nextSibling, r), t.length = r);
  }
  _$AR(A = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); A && A !== this._$AB; ) {
      const e = A.nextSibling;
      A.remove(), A = e;
    }
  }
  setConnected(A) {
    this._$AM === void 0 && (this._$Cv = A, this._$AP?.(A));
  }
}
class $ {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(A, t, e, r, s) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = A, this.name = t, this._$AM = r, this.options = s, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = c;
  }
  _$AI(A, t = this, e, r) {
    const s = this.strings;
    let i = !1;
    if (s === void 0) A = S(this, A, t, 0), i = !P(A) || A !== this._$AH && A !== v, i && (this._$AH = A);
    else {
      const a = A;
      let o, B;
      for (A = s[0], o = 0; o < s.length - 1; o++) B = S(this, a[e + o], t, o), B === v && (B = this._$AH[o]), i || (i = !P(B) || B !== this._$AH[o]), B === c ? A = c : A !== c && (A += (B ?? "") + s[o + 1]), this._$AH[o] = B;
    }
    i && !r && this.j(A);
  }
  j(A) {
    A === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, A ?? "");
  }
}
class WA extends $ {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(A) {
    this.element[this.name] = A === c ? void 0 : A;
  }
}
class jA extends $ {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(A) {
    this.element.toggleAttribute(this.name, !!A && A !== c);
  }
}
class HA extends $ {
  constructor(A, t, e, r, s) {
    super(A, t, e, r, s), this.type = 5;
  }
  _$AI(A, t = this) {
    if ((A = S(this, A, t, 0) ?? c) === v) return;
    const e = this._$AH, r = A === c && e !== c || A.capture !== e.capture || A.once !== e.once || A.passive !== e.passive, s = A !== c && (e === c || r);
    r && this.element.removeEventListener(this.name, this, e), s && this.element.addEventListener(this.name, this, A), this._$AH = A;
  }
  handleEvent(A) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, A) : this._$AH.handleEvent(A);
  }
}
class YA {
  constructor(A, t, e) {
    this.element = A, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = e;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(A) {
    S(this, A);
  }
}
const _A = D.litHtmlPolyfillSupport;
_A?.(b, J), (D.litHtmlVersions ?? (D.litHtmlVersions = [])).push("3.2.1");
const $A = (n, A, t) => {
  const e = t?.renderBefore ?? A;
  let r = e._$litPart$;
  if (r === void 0) {
    const s = t?.renderBefore ?? null;
    e._$litPart$ = r = new J(A.insertBefore(N(), s), s, void 0, t ?? {});
  }
  return r._$AI(n), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let x = class extends m {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const A = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = A.firstChild), A;
  }
  update(A) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(A), this._$Do = $A(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return v;
  }
};
x._$litElement$ = !0, x.finalized = !0, globalThis.litElementHydrateSupport?.({ LitElement: x });
const At = globalThis.litElementPolyfillSupport;
At?.({ LitElement: x });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = (n) => (A, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(n, A);
  }) : customElements.define(n, A);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = { attribute: !0, type: String, converter: Y, reflect: !1, hasChanged: sA }, nt = (n = et, A, t) => {
  const { kind: e, metadata: r } = t;
  let s = globalThis.litPropertyMetadata.get(r);
  if (s === void 0 && globalThis.litPropertyMetadata.set(r, s = /* @__PURE__ */ new Map()), s.set(t.name, n), e === "accessor") {
    const { name: i } = t;
    return { set(a) {
      const o = A.get.call(this);
      A.set.call(this, a), this.requestUpdate(i, o, n);
    }, init(a) {
      return a !== void 0 && this.P(i, void 0, n), a;
    } };
  }
  if (e === "setter") {
    const { name: i } = t;
    return function(a) {
      const o = this[i];
      A.call(this, a), this.requestUpdate(i, o, n);
    };
  }
  throw Error("Unsupported decorator location: " + e);
};
function OA(n) {
  return (A, t) => typeof t == "object" ? nt(n, A, t) : ((e, r, s) => {
    const i = r.hasOwnProperty(s);
    return r.constructor.createProperty(s, i ? { ...e, wrapped: !0 } : e), i ? Object.getOwnPropertyDescriptor(r, s) : void 0;
  })(n, A, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function X(n) {
  return OA({ ...n, state: !0, attribute: !1 });
}
const q = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r
 <style>\r
  <![CDATA[#esic8yxwm7h2_to {animation: esic8yxwm7h2_to__to 6000ms linear infinite normal forwards}@keyframes esic8yxwm7h2_to__to { 0% {transform: translate(0px,0px)} 50% {transform: translate(40.000000px,40.000000px)} 100% {transform: translate(0px,0px)} }#esic8yxwm7h2_ts {animation: esic8yxwm7h2_ts__ts 6000ms linear infinite normal forwards}@keyframes esic8yxwm7h2_ts__ts { 0% {transform: scale(1,1)} 50% {transform: scale(0.900000,0.900000)} 100% {transform: scale(1,1)} }]]>\r
 </style>\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <circle cx="400" cy="400" fill="orange" id="esic8yxwm7h2" r="224" transform="matrix(1 0 0 1 0 0)"/>\r
 </g>\r
</svg>`, M = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r
 <style>\r
  <![CDATA[#exkj448c93ak3_to {animation: exkj448c93ak3_to__to 9000ms linear infinite normal forwards}@keyframes exkj448c93ak3_to__to { 0% {transform: translate(0px,0px)} 22.222222% {transform: translate(0px,0px)} 44.444444% {transform: translate(96px,0px)} 66.666667% {transform: translate(96px,0px)} 88.888889% {transform: translate(0px,0px)} 100% {transform: translate(0px,0px)} }]]>\r
 </style>\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <g id="exkj448c93ak3_to"/>\r
  <g id="svg_1">\r
   <path d="m556.864,338.032c-14.944,-74.016 -79.776,-128.032 -156.864,-128.032c-64.032,0 -121.504,38.112 -146.688,96.032c-60.512,1.44 -109.312,51.104 -109.312,111.968c0,61.76 50.24,112 112,112l304,0c52.928,0 96,-43.072 96,-96c0,-53.984 -45.536,-97.344 -99.136,-95.968z" fill="#C6DEFF" id="exkj448c93ak2"/>\r
   <path d="m480,466c-1.408,0 -2.784,0.032 -4.128,0.096c-14.24,-55.808 -64.864,-96.096 -123.872,-96.096c-45.6,0 -87.968,24.8 -110.752,64c-0.416,0 -0.832,0 -1.248,0c-52.928,0 -96,43.072 -96,96c0,52.928 43.072,96 96,96l240,0c44.128,0 80,-35.872 80,-80c0,-44.128 -35.872,-80 -80,-80z" fill="#57A0EE" id="exkj448c93ak3"/>\r
  </g>\r
 </g>\r
</svg>`, U = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r
 <style>\r
  <![CDATA[#e4vknhyk86994_to {animation: e4vknhyk86994_to__to 8000ms linear infinite normal forwards}@keyframes e4vknhyk86994_to__to { 0% {transform: translate(0px,0px)} 8.750000% {transform: translate(32px,0px)} 18.750000% {transform: translate(0px,0px)} 28.750000% {transform: translate(-32px,0px)} 37.500000% {transform: translate(0px,0px)} 46.250000% {transform: translate(32px,0px)} 56.250000% {transform: translate(0px,0px)} 66.250000% {transform: translate(-32px,0px)} 75% {transform: translate(0px,0px)} 100% {transform: translate(0px,0px)} }#e4vknhyk86995_to {animation: e4vknhyk86995_to__to 8000ms linear infinite normal forwards}@keyframes e4vknhyk86995_to__to { 0% {transform: translate(0px,-1.013862px)} 18.750000% {transform: translate(32px,-1.013862px)} 37.500000% {transform: translate(0px,-1.013862px)} 56.250000% {transform: translate(-32px,-1.013862px)} 75% {transform: translate(0px,-1.013862px)} 100% {transform: translate(0px,-1.013862px)} }]]>\r
 </style>\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <g id="e4vknhyk86993">\r
   <g id="e4vknhyk86994_to" transform="translate(0 0)"/>\r
   <g id="e4vknhyk86995_to" transform="translate(0 -1.01386)"/>\r
  </g>\r
  <g id="svg_1">\r
   <path d="m560,368c-1.024,0 -2.048,0 -3.136,0.032c-14.912,-74.016 -79.776,-128.032 -156.864,-128.032c-64.032,0 -121.504,38.112 -146.688,96.032c-60.512,1.44 -109.312,51.104 -109.312,111.968c0,61.76 50.24,112 112,112l304,0c52.928,0 96,-43.072 96,-96c0,-52.928 -43.072,-96 -96,-96z" fill="#57A0EE" id="e4vknhyk86992"/>\r
   <path d="m625.84297,591.50693l-416,0c-8.832,0 -16,7.168 -16,16c0,8.832 7.168,16 16,16l416,0c8.832,0 16,-7.168 16,-16c0,-8.832 -7.168,-16 -16,-16z" fill="rgb(96,125,139)" id="e4vknhyk86994"/>\r
   <path d="m625.84297,655.50693l-416,0c-8.832,0 -16,7.168 -16,16c0,8.832 7.168,16 16,16l416,0c8.832,0 16,-7.168 16,-16c0,-8.832 -7.168,-16 -16,-16z" fill="rgb(96,125,139)" id="e4vknhyk86995"/>\r
  </g>\r
 </g>\r
</svg>`, L = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- (c) ammap.com | SVG weather icons -->\r
<!-- Mix of Sleet and Snow | Contributed by hsoJ95 on GitHub: https://github.com/hsoj95 -->\r
<svg\r
    version="1.1"\r
    xmlns="http://www.w3.org/2000/svg"\r
    xmlns:xlink="http://www.w3.org/1999/xlink"\r
    width="64"\r
    height="64"\r
    viewbox="0 0 64 64">\r
    <defs>\r
        <filter id="blur" width="200%" height="200%">\r
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\r
            <feOffset dx="0" dy="4" result="offsetblur"/>\r
            <feComponentTransfer>\r
                <feFuncA type="linear" slope="0.05"/>\r
            </feComponentTransfer>\r
            <feMerge> \r
                <feMergeNode/>\r
                <feMergeNode in="SourceGraphic"/> \r
            </feMerge>\r
        </filter>\r
    </defs>\r
    <g filter="url(#blur)" id="rainy-7">\r
        <g transform="translate(20,10)">\r
            <g>\r
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>\r
            </g>\r
        </g>\r
        <g transform="translate(31,46), rotate(10)">\r
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />\r
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />\r
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />\r
        </g>\r
        <g class="am-weather-snow-1">\r
                <g transform="translate(21,38)">\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                </g>\r
            </g>\r
            <g class="am-weather-snow-2">\r
                <g transform="translate(40,38)">\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />\r
                </g>\r
            </g>\r
    </g>\r
</svg>`, T = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- (c) ammap.com | SVG weather icons -->\r
<svg\r
    version="1.1"\r
    xmlns="http://www.w3.org/2000/svg"\r
    xmlns:xlink="http://www.w3.org/1999/xlink"\r
    width="64"\r
    height="64"\r
    viewbox="0 0 64 64">\r
    <defs>\r
        <filter id="blur" width="200%" height="200%">\r
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\r
            <feOffset dx="0" dy="4" result="offsetblur"/>\r
            <feComponentTransfer>\r
                <feFuncA type="linear" slope="0.05"/>\r
            </feComponentTransfer>\r
            <feMerge> \r
                <feMergeNode/>\r
                <feMergeNode in="SourceGraphic"/> \r
            </feMerge>\r
        </filter>\r
    </defs>\r
    <g filter="url(#blur)" id="cloudy-day-3">\r
        <g transform="translate(20,10)">\r
            <g transform="translate(0,16)">\r
                <g class="am-weather-sun">\r
                    <g>\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                    <g transform="rotate(45)">\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                    <g transform="rotate(90)">\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                    <g transform="rotate(135)">\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                    <g transform="rotate(180)">\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                    <g transform="rotate(225)">\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                    <g transform="rotate(270)">\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                    <g transform="rotate(315)">\r
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>\r
                    </g>\r
                </g>\r
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>\r
            </g>\r
            <g class="am-weather-cloud-2">\r
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>\r
            </g>\r
        </g>\r
    </g>\r
</svg>`, R = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- (c) ammap.com | SVG weather icons -->\r
<svg\r
    version="1.1"\r
    xmlns="http://www.w3.org/2000/svg"\r
    xmlns:xlink="http://www.w3.org/1999/xlink"\r
    width="64"\r
    height="64"\r
    viewbox="0 0 64 64">\r
    <defs>\r
        <filter id="blur" width="200%" height="200%">\r
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\r
            <feOffset dx="0" dy="4" result="offsetblur"/>\r
            <feComponentTransfer>\r
                <feFuncA type="linear" slope="0.05"/>\r
            </feComponentTransfer>\r
            <feMerge> \r
                <feMergeNode/>\r
                <feMergeNode in="SourceGraphic"/> \r
            </feMerge>\r
        </filter>\r
    </defs>\r
    <g filter="url(#blur)" id="rainy-6">\r
        <g transform="translate(20,10)">\r
            <g>\r
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>\r
            </g>\r
        </g>\r
        <g transform="translate(31,46), rotate(10)">\r
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" />\r
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />\r
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" />\r
        </g>\r
    </g>\r
</svg>`, z = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r
 <style>\r
  <![CDATA[#efuvus6uo8qt3_to {animation: efuvus6uo8qt3_to__to 2500ms linear infinite normal forwards}@keyframes efuvus6uo8qt3_to__to { 0% {transform: translate(158px,-184px)} 60% {transform: translate(158px,-184px)} 80% {transform: translate(158px,-84px)} 100% {transform: translate(158px,16px)} }#efuvus6uo8qt5_to {animation: efuvus6uo8qt5_to__to 2500ms linear infinite normal forwards}@keyframes efuvus6uo8qt5_to__to { 0% {transform: translate(-158px,-184px)} 20% {transform: translate(-158px,-184px)} 40% {transform: translate(-158px,-84px)} 60% {transform: translate(-158px,16px)} 100% {transform: translate(-158px,16px)} }#efuvus6uo8qt5 {animation: efuvus6uo8qt5_f_o 2500ms linear infinite normal forwards}@keyframes efuvus6uo8qt5_f_o { 0% {fill-opacity: 1} 60% {fill-opacity: 1} 64% {fill-opacity: 0} 100% {fill-opacity: 0} }#efuvus6uo8qt6_to {animation: efuvus6uo8qt6_to__to 2500ms linear infinite normal forwards}@keyframes efuvus6uo8qt6_to__to { 0% {transform: translate(0px,-184px)} 40% {transform: translate(0px,16px)} 100% {transform: translate(0px,16px)} }#efuvus6uo8qt6 {animation: efuvus6uo8qt6_f_o 2500ms linear infinite normal forwards}@keyframes efuvus6uo8qt6_f_o { 0% {fill-opacity: 1} 40% {fill-opacity: 1} 44% {fill-opacity: 0} 100% {fill-opacity: 0} }]]>\r
 </style>\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <g id="efuvus6uo8qt3_to" transform="translate(158,-184)"/>\r
  <g id="efuvus6uo8qt4"/>\r
  <g id="efuvus6uo8qt5_to" transform="translate(-158,-184)"/>\r
  <g id="efuvus6uo8qt6_to"/>\r
  <g id="svg_1">\r
   <path d="m575,341c-1.024,0 -2.048,0 -3.136,0.032c-14.912,-74.016 -79.776,-128.032 -156.864,-128.032c-64.032,0 -121.504,38.112 -146.688,96.032c-60.512,1.44 -109.312,51.104 -109.312,111.968c0,61.76 50.24,112 112,112l304,0c52.928,0 96,-43.072 96,-96c0,-52.928 -43.072,-96 -96,-96z" fill="#57A0EE" id="efuvus6uo8qt2"/>\r
   <path d="m401.848,571.912c-10.496,15.136 -34.848,52.608 -34.848,73.088c0,26.464 21.536,48 48,48c26.464,0 48,-21.536 48,-48c0,-20.48 -24.352,-57.952 -34.848,-73.088c-5.952,-8.64 -20.352,-8.64 -26.304,0z" fill="#57A0EE" id="efuvus6uo8qt3"/>\r
   <path d="m401.848,571.912c-10.496,15.136 -34.848,52.608 -34.848,73.088c0,26.464 21.536,48 48,48c26.464,0 48,-21.536 48,-48c0,-20.48 -24.352,-57.952 -34.848,-73.088c-5.952,-8.64 -20.352,-8.64 -26.304,0z" fill="#57A0EE" id="efuvus6uo8qt5"/>\r
   <path d="m401.848,387.912c-10.496,15.136 -34.848,52.608 -34.848,73.088c0,26.464 21.536,48 48,48c26.464,0 48,-21.536 48,-48c0,-20.48 -24.352,-57.952 -34.848,-73.088c-5.952,-8.64 -20.352,-8.64 -26.304,0z" fill="#57A0EE" id="efuvus6uo8qt6"/>\r
  </g>\r
 </g>\r
</svg>`, Z = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <image height="512" id="image0" width="512" x="144" xlink:href="data:image/png;svgedit_url=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABGdBTUEAALGPC%2FxhBQAAACBjSFJN%20AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAA%20CXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH5AIWBgwHeO8OCgAAQSNJREFUeNrt3XeYXPV97%2FH3%20mapVHxUkkJAQICEQIIrpvRhMdWexHSf2jUt8XXJjJze2c6%2BT2Ddx4nKd6xInNnFvYxtjik01mF5E%20F0UIVSShrpVWbWen%2FO4fs7NIIKHV7uxOe7%2BeZ59drbb8zpmZ%2FX7Or50ISQ1vUy6ErXnIB8gVIVeC%20fKn8vrvnbWcRthfKb9sKUChBOgHpCFJxSMXKb%2BkYpOMwIg7DEzA8DiMT0BaHSW1RVOtjlVQdvpil%20BrApF8LSbfDiNnhpB7y4FZZuh5d3lov59kK5wBcDFAIUS0AAKu8rb7D3V3141b%2FjQAxicRi2SzgY%20Fi%2BHgmkj4PCRcOhImDUKZoyAo8caEKRG4YtVqhPru0KYtwnmb4anNsPTm2FNDjbsAHKUX62xnve7%20vsHur%2BS9vKrbcx19bks2ndn9E2EPH%2B8aLCpBI4IxI2HmKDhqTM%2F7UTB7DMwZYziQ6okvSGmIbcqF%20sKkbFm6F%2BzfAvevhwQ3lLnsqb7B7sWf%2FCnitZNOZ3UMB7BZcpg6HU8bDWRPhlHEwqQ0OHWkwkGrB%20F540BO5eF8INK%2BHhDli%2BDVbsALro7WbvLfY9GqHY98VuPQm79hgUy%2B8TbeUhhENHwKUHwtsPhinD%20DQTSUPCFJlXZplwIz26BO9fBr1fA%2FLWUi96rin2zFPn%2B2q23oBIKikAKLpsG50yE8w6Ak8YbCKTB%204AtLqoJl20L47Sq4eTU8vBE254ACvUW%2F1Yv9%2FsimM%2BUgUIL2Ugd3j81w%2BgT4k2nwtmmGAalafDFJ%20%2FXTX2hC%2BtQge3QTLNvV8snKV30Dj9vWqd%2FigMp%2BgAKTh5PFwxUFw0WQ4ZYKBQOovXzzSfrh3XQjf%20WQy%2FWAH5bsrFqadb32I%2F%2BHp7ByorDtrgzw6Bdx8CpzpUIO0XXzDSPjyzOYRrlsBvVsJLnbwynu9V%20fs3s1jtQAGIwKwOXToaPzYLDRxkGpH3xRSLtwYPrQ7huFfzHIujcSrngO55ft7LpzCtLKLvhwPHw%20l7PgvdNhygjDgLQnvjCkXVyzOIT%2F%2BwI8t5lyV3PPlb5Fv7Fkk%2BVAkE6XVxJ8%2Bkg4d5JBQNqVLwi1%20vKXbQvj6QvjuYti2A0hQHtfHwt%2FIepcZloAiTM%2FAew%2BB%2F3OsQUACA4Ba2B2rQ%2Fjn5%2BHOl9ltXN%2Bi%2033x2GyKIw9XT4XNHw1FuT6wW5pNfLefHS0P43DOwtJNyQUiUP2%2Fhb369vQJFIAFvOgg%2BdxScPtEg%20oNbjk14tYem2EL66AL75IuUb6yRxQl8L611FUARycMwU%2BN9HwlXTDQJqHT7Z1dTWd4XwySfhly9B%20LgfEob3boq%2FdZRPlQDB7HHzhaHinOw6qBfgkV1Pq6A7hb5%2BCaxZDqZtyN7%2Fj%2B3odvfMEijB9LPy%2F%20E%2BAtUw0Cal4%2BudVUXugM4csL4JqF9E7s84pf%2B2PXIDB%2BJHzzRHiXQwNqQj6p1RQ25kL4x2fhWwuh%20mMeJfRqwXVcOnDoJvno8nOFkQTURn8xqaGt3hvDZ%2BfBfC3llRr9d%2Faqi3vsP5OAts%2BDzR8OxGYOA%20Gp9PYjWsf32uvI5%2FS8%2FmPRZ9DaZsOgMFaC92MGpOhmtOMgSosfkEVsN5uiOEjz4G964A0njFryHT%20u49AHsaNgn88Gj4%2ByyCgxuQTVw3l%2FQ%2BF8P2FlLfqjVv4VTvZVAbycMQE%2BP7JbiakxuMTVg3hVytC%20%2BNsnYUkH5U18sPir9nrnB8ThPYfAT08zBKhx%2BGRVXVu8NYRPPA6%2FW0y5u9%2Fd%2B1SHsulyb0AqDd85%20Cd53qEFA9c8nqerWP8wP4Z%2Beg3zPRj4WftW7bKrcI3DFdLjmJJjUZhBQ%2FfLJqbrz8o4Q3vUg3P0S%20TvJTw6n0BowfCf9%2BIrS7iZDqlE9M1ZVvvxjCRx7ESX5qaL2rBbrgipnw7RNh6nCDgOqLT0jVhY7u%20EN7%2FMPx2GRDHq341vF3vODgiDXeeB6dMMASofvhkVM3duTaEC%2B6C0A0kLfxqLrveW%2BBDR8J33EBI%20dcInomrqqvtD%2BOUSyrP78xZ%2BNa%2FKToIzM3DT2XDEaIOAassnoGriqY4Q3nYfLO5Z1%2B9Vv1pBZd%2BA%20KFGeIPiRmYYA1Y5PPg25f3wmhL9%2FjPJYvxP91IKyqQzk4D2z3TxIteMTT0Pq44%2BF8I1n8a59anmV%20IYG5E%2BDWc2GyewZoiPmE05A5%2FtYQnlgNpC38Eux%2Bh8HPXplh7jhDgIaOTzYNupXbQzjrTli6GXf0%20k%2FYgm8xABP%2F7GPjCMYYADQ2faBpUD28I4fw%2FwvadWPyl15FNZaAb%2FvvR8O9vMARo8Pkk06D54dIQ%20%2Fuw2YBS0d1v4pX3JpjPQBWdOg%2FsuMARocPkE06D4yLwQvr0Ar%2Fql%2FVRZKnjwKHjkIjjQyYEaJD6x%20VHXH3xLCE2uBlMVf6o9KCEgk4ZZz4MLJhgBVn08qVdUhN4SwbDNu7iNVQTZZvqnQT86AP5lhCFB1%20%2BYRS1Yy9NoTNO8pLmiRVRzZV7g343unw3w4zBKh6fDJpwJZvC%2BHIm2FHDtoLFn%2Bp2iorBD48B%2F7T%20mwmpSmK1boAa29JtIRx3m8VfGkzt3R2Qhv98Fv784RBq3R41B5Ok%2Bm1BZwhzfg%2FFgsVfGgqVZYJv%20mgG3nGtPgAbGHgD1yy2re4p%2F0eIvDZX2XAcMg1uWwwV32ROggTEAaL89tjGEN%2F2hp%2FjnLf7SUGrP%20dUAK%2FrAM3vuQIUD9ZxeS9ssvlodw9d2UN%2Fhxdz%2BpprIhw4WHwB3nORyg%2FWcPgPrsD2tCuPoBLP5S%20vRgGdyyDD8%2BzJ0D7z9SoPlnQGcLsG8sf2%2B0v1Y9sOgM74S%2BOgf9wiaD2gz0A2qf5m0M47pbyxxZ%2F%20qb605zqgDf7jOfjf8%2B0JUN%2BZFrVPw34VQpfr%2FKW6lk1nIA%2B%2FuxAuO8ieAO2bPQB6XQdfH0JXl8Vf%20qnftuQ5IwGV3wnUr7AnQvhkAtFfn3RnCik4gUeuWSOqL9u4OiMFb74ZHNxoC9PoMANqjdz0Qwl0r%20Kc%2F4965%2BUsNo7%2B6ACN5wGzy%2FxRCgvTMA6DU%2B%2FlgIP1%2BIt%2FSVGlUMKMJZf4BN3YYA7ZkBQLv5vwtC%20%2BMZzQNriLzWq9lwHxGHDDrjynlq3RvXKAKBej28K4ZMPAXGLv9ToKiHgvpXlIb1at0f1xwAgANbv%20DOHSe4AkLg6VmkR7rnwb4Z8vgk88ZgjQ7gwAAuCSe2FNJxDz6l9qJu25DkjC15%2BB371sCNArDADi%20XQ%2BE8OhanPQnNbMk%2FOi2Dha4MkA97OxtcdetCOGtdwIpi7%2FUzLLpDBRhdgYWXOZOgbIHoKXdvS6E%20t%2FaM%2B1v8peZWmRS4YBN86BF7AWQPQEsbfW0InV3e4EdqJdl0Brrhl%2BfCVdPtCWhl9gC0qMvvDqFz%20Bz4DpBZTmRT4vkdg7U57AlqZf%2F5b0KeeCOGmJbjNr9SqItiRg9PuqHVDVEsGgBYzvyOEr72AO%2F1J%20LawyH2BJB%2Fz9fHsBWpXjPy1m0m9DWLvN2%2FtKemVlwINvgtMmOB%2Bg1dgD0EL%2Bfn4Ia7cA8Vq3RFI9%20aM%2BV7xx4ifcLaEkGgBbx4IYQ%2FvFpXPInaXcx2LwD3vOgQwGtxgDQInrvCGYnn6RdVOYD%2FPQ5%2BMFS%20Q0ArMQC0gI89GsL6bbjPv6Q9as91wDD4zFOwvssQ0CoMAE3u4Q0hfPN57PqX9Lra8x2s3gIffbTW%20LdFQMQA0ucvvxSt%2FSX2Tgl8uhbvW2gvQCgwATWzXrn9J2pfKqoCPP17rlmgoWBqa1ILOEL75FO72%20J2m%2FtBc6eGYNfPZpewGanQGgSX1oHu72J6l%2F0vBvL8DirYaAZmYAaELXrQjhntW44Y%2Bkfmnv7mDH%20TvjoY7VuiQaTAaAJ%2FcWjQOTVv6QBSMItS%2BGBDfYCNCsDQJP56oLyXv8%2BspIGonLb4L9%2BstYt0WCx%20TDSRdV0hPPJQeVcvr%2F4lDVgcHlgF%2F%2FaCvQDNyI1hm8hHHg3h289Be8niL6k6sqkMiQQUrvJugc3G%20HoAm8WxHCN9%2BEUjUuiWSmkoEhRz8zZP2AjQbA0CTeM%2FDQBH7dCRVVeVmQV9Z4H0Cmo0BoAnctz6E%20J3uW%2FTn2L6na2rs7CDn41%2Bdr3RJVkwGgCfy3R4CUxV%2FSIErCV1%2BAZdvsBWgWBoAGd8OqEBZuwkdS%200uCKIOThc8%2FUuiGqFkeMG9xRvw%2FhuU3l%2FbslaTBl0xnIA3%2FqioBm4HVjA7ttdQjPbcQtfyUNicow%204wcedhigGRgAGtiXF%2BCWv5KGVgJ%2BvBxe3mkIaHQGgAY1f0sIty%2FFq39JQ6q9u4NcF3z6yVq3RANl%20AGhQf%2Fk4zvyXVBsJyL3QwWp7ARqa%2B8Y1oCc7QjjuZspX%2F4Vat0ZSy4kgG88wZUGtG6KBsAegAf3F%20o0Cp1q2Q1KoquwP%2B3wWwMWcvQKMyADSYDV0hPLQCd%2F2TVFPt3R3QDd94sdYtUX85BFBn1nWFsGoH%20rOmCLXnYWoCtedjcDTuLcNodQNriL6kOJOH%2FvVDrRqi%2FDABDbGNXCDuKsGgbPNcJT3SU3y%2FbBtsK%20MO1GyBUhlCh384eeNyhv2xSD9rzFX1IdiKBjJ%2FxsWQjvPsTNgRqND9gge3hDCHetgyc3wzNb4KXt%200LmT8uS9WM9btMsb7PFR8YpfUj3KJjIcOwGefpMBoNH4gFXRoq0hPNUBN6yG7EvQtYPdi%2Fouxd6C%20LqkZZNMZ2AGLroLDRxkCGokP1gDN2xjCT5fDH9bC4m2wYwflQh%2FnNWfXoi%2BpGWXjGT4yG759kgGg%20kfhg7adVO0K4bwP8Yjncshp2bqdc7CsF36t7SS0mm8owJg3LLoPMMENAo3ASYB9s6ArhVyvg5y%2FB%20lOspT84rUS76w3oKvuvyJbWqCLZsg9%2B8XOuGaH%2BY1F7HNYtCyK6AP66DfBflgt8zju9VviS9IpvI%20cPaBcM8F9gA0Ch%2BoV3myI4QvPg%2FZxbxylW%2FRl6TXlU1nIMCSK%2BBQJwM2BIcAevxuVQhfXgDH3UJ5%20id4uZ8bCL0l9UIIbHAZoGC2f0r6zKISvLICF64EkvbfXtehL0v7JJjMcOw6evsQegEbQkg%2FSS9tD%20%2BN4S%2BMoC2NZF74Y8Fn1J6r9sOgPdsOht7gnQCFpuCOBTj4dw2O8gv5PyFX%2FCwi9J1dCe6yAby%2FCL%20l2rdEvVFyyS0ry8M4ROPAnnKhd9JfZJUddlkhqkjYeWb7QGod01%2FO%2BCbVoUw5%2BYQPvFwzydS5dtY%20WvwlaRDE4OUueHxTCAP%2FYRpMTTsEsGhrCJ98Ai6%2FFUhjV78kDYHKMMDPlte6JdqXpgwAH300hMNv%20orycr83CL0lDKgHfW1rrRmhfmmoIILs8hGk3hPCtZ4CAV%2F2SVAsRbNoMK3Y4DFDPmqIH4KXtIbzv%20IWi%2Fk%2FIYPx3QXetWSVJras91kE1k%2BOaLtW6JXk%2FDB4DvLg5h7q3QsZ1XbswjSaqtONy1ttaN0Otp%202CGAjbkQ3nJvCB%2B8Gzq6sLtfkupJBM91wvouhwHqVUP2ANy0KoRJ10Ehj5P8JKkeRbBtGzzpn%2Be6%201XA9AP%2FnmRAuvwsKRbzql6Q61Z7rgBjcvKbWLdHeNFQPwMHXh%2FC%2FHgXSFn5Jqntx%2BM2KWjdCe9MQ%20PQD3rw9hyvUhrOjE4i9JjSKClTthU855APWo7nsA%2FnNRCGfcBgRoL3ZAsdYtkiT1SVQern1gQ60b%20oj2p6x6Ajz4awofvo3zjnoJX%2FZLUcApwvwGgLtVtALj07hC%2B9RzlLv9ui78kNZrKRMDH%2FRNel%2Bou%20AGzsCuGom0P4%2FTIg6Xi%2FJDW0GPxxXa0boT2pqwCwekcIM38Pz22gvKWvxV%2BSGlsEue3lO7TWuina%20Xd0EgCc3hXDQDbBpB67vl6QmURkGuNd5AHWnLlYB%2FHZFCMfdCpR6JvsVat0iSVLVxOCO1bVuhF6t%205gHggfUhnH4r5Zn%2Bea%2F6JanpxOHWNfDZp0PIlyAESMYgk4LRifL7MUkYnYJMEkYnYcrwKKp1s5td%20TU%2Fwj5eG8N77gLgz%2FSWpmWVTmfI%2BLq%2BeCRBe530A2uCosTBzFMwZAzNHwsHD4bCRMGOkIWEganby%20fvlSCFfdW26BxV%2BS9GrZdKb8QYlyGChRrlpxSCdgWBzGJuH4cfCOKXDJQTA%2BbSjoq5qcqHkbQzjp%20ZiBm8Zck9V1vKHh1T0EBSJXDwJkT4e1T4NzJhoHXM%2BQn56ENIXztpg6yyYxj%2FpKkqsmmM%2BVegkqP%20QYBTD4I3TYYrpsCJ4wwEuxrykxHPhlAsOOFPkjQ4ensJoDzvoAQk4Mix8LYp8JdHwAHDDANDegIO%20%2BG0I67a5r78kaejsNpegZyLi3EnwZ4dA%2B8EwZURrhoEhO%2Bhz%2FhDC3S%2FjJj%2BSpJradaggSsLJ4%2BBT%20s%2BGqaa0VBIbkYN%2F%2FcAjffwH39pck1Y1sOvPK6oIijBsFHz4Mvji3NYLAoB%2FkZ54K4YuPA8Ms%2FpKk%20%2BtQbBgpAHD44E75wDExua94wMKgH9ouXQrj6Hsob%2FVj8JUl1btcg0NYGHzgUPjcHJjbhpMFBO6CO%20XAiZ3wDBtf6SpMayW49ADD4wEz45G44a0zxBYNAO5IjfhfBCB179S5IaWjad6R0a%2BPhs%2BMYJzREC%20BuV2wO99KIQX1mPxlyQ1vPZcR%2FnWeRF842mYen0I2eUhDPgH11jVU8w3Fobw8Ydwxr8kqen0LiHM%20wWkHwzdOgDeMb8wegao2es3OECb%2FBm%2FwI0lqWr0bCxUgloS%2FOwq%2BcGzjhYCqNvjCu0K4YyW0Fy3%2B%20kqTml01loBumjoMvz4V3TW%2BcIFC1OQD%2FMD%2BEO1ZQHieRJKkFtHd3QBpWboV3%2FRH%2B%2BonGmRtQvaTy%20s%2FJB2%2FUvSWo1vcMCeZgzAZ69tP57AqrSwCN%2FH8Lzm7zJjySpte26ZPDmc%2BGSg%2Bo3CAx4COCbC0N4%20fkP5YCVJamXtuY7yPLgAl%2FwR%2FvKx%2Bh0SGFAyWbUjhCnX425%2FkiS9SjadgS648jC44ez66wkYUA%2FA%20W%2B6lfG%2FlujssSZJqqz3XAcPghuUw8tch3L%2B%2BvnoD%2Bh0Abno5hHkv425%2FkiTtRWUXwW05OON2uH9D%20%2FYSAfl%2B7j%2F9NCBt3Qnve4i9J0r5kU%2BUJgt88BT52RO2HBPrVA%2FCFZ0LYuL2%2F3y1JUutp7y73Bnzs%20Yfjuotr3BPQrgUS%2FCCGUnPgnSdL%2ByqYzkIPPHg%2F%2FPLd2PQH7fQ3%2FkUdDCHmc%2BCdJUj%2B058q7B%2F7z%20k%2FDO%2B2vXE7BfZXzNzhAm%2FxaX%2FUmSNECVZYLvmQ0%2FPW3oewL26xdedX8Iv1wM7SWLvyRJ1ZAlwxun%20w%2B3nDW0I6PMQwLObQ7h2Jd7sR5KkakrD7cvho0O8a2CfA8D%2Fmg%2FFbhz7lySpiipzAr41v7zKbqh%2B%20b5%2FK%2BZKtIRz6K6DNTX8kSRoM2XQG8vD1U%2BETswZ%2FOKBPPQBfWgAkLf6SJA2Wyq6Bn3gYbn558HsC%209hkA1uwM4YfL8G5%2FkiQNsvbuDojDJX%2BAny0b3BCwzwDwn4th504c%2B5ckaQhUQsC774MHB%2FEGQvss%2066N%2FHUJnt%2Bv%2BJUkaStlkhsww6Hj74MwHeN0egB8uDaFzB179S5I01GLQsQMuvHNwegFeNwB8b0n5%20K5z8J0nS0KpMCrxjJfzD%2FOqHgL0GgMVbQ7h7FU7%2BkySpRtpzHZCEf3gcnuiobgjYawD48oJdfrkk%20SaqJSk%2FAZffA6h3VCwF7DQA%2Ffwm3%2FZUkqQ605zt4eQu0P1C9n7nHAPC9pSFscfKfJEn1Iwn3rIIv%20PledXoA9B4DFQGT3vyRJ9aIyH%2BAzT8FL2wceAvYYAO5biZP%2FJEmqM%2B3dHVCAP3t44D%2FrNQHgJ0vL%20qcKrf0mS6lAC7loNN60aWC%2FAawLAz5bj5D9JkupU5QL9Q48O7OfsFgBW7QjhrnX08R6BkiSpJmLw%20cgd84dn%2B9wLsVurnbfLGP5Ik1bv2XAekynv29HdvgN0CwG9X4da%2FkiQ1gPbuDjq3w4f7ORSwWwC4%20ztn%2FkiQ1jiTc8BLc34%2FbBvcGgMVbQ9iSw%2B5%2FSZIazOef3f%2Fv6Q0Av10JFGt9CJIkqa%2Facx0Qh1uX%20wyMb9q8XoDcAPLRxlx8mSZIaQnuuA2Lw%2Bef27%2Ft6A8CDG3H5nyRJjSgBN62Ep%2FbjlsExgI7uEFZu%20wgAgSVKjKsGnn%2Br7l8cA7l2PN%2F%2BRJKlBVeYC3LwcNuX61gsQA%2Fj1S7j8T5KkBlaZC%2FDxx%2Fv29TGA%20Rzuw%2B1%2BSpEYXh1%2B9VF7av68vjQFscP2%2FJEkNr727g%2B4cfPWFfX9t7PktIWzK17rJkiSpKhLwvSX7%20%2FrLYmi4o2AMgSVJziKArB7evfv1hgNj8LUBwBYAkSc2gPdcBEXx5H8MAsSedAChJUnOJwR%2FW7uNL%20Fm%2FD7n9JkppIe3cHxZ3wrUV7HwaILTIASJLUfJLwrYV7%2F%2B%2FYyzsxAEiS1Gxi8HwnPL2X%2BwPEghMA%20JUlqOu25DkI3fG0vvQAxi78kSU0qATeu2vN%2FOf9fkqRmFcGGzXv%2BLwOAJElNqnKXwJ8ue%2B08AAOA%20JEnNLAY3r97jpyVJUtOKwUMb9%2FhpSZLUtGKwaCss7Nx9GMAAIElSE2vPdUAO5r2qF8AAIElSs0vA%20z1fs%2FikDgCRJzS4Gd659zackSVJTi2BHHpZte2UegAFAkqRWEGDB1lf%2BaQCQJKkVlOD5La%2F80wAg%20SVKLeLbzlY8NAJIkNbn2XAdEsNAhAEmSWkwMnrMHQJKkFhPBBgOAJEmtpT3XASV4clN5KaABQJKk%20VhGD%2Bzf2fihJklpCDJ7q6P1QkiS1hAjW58ofGgAkSWohW%2FLl9wYASZJaRQSdBgBJklrPjlL5vQFA%20kqQWUjAASJLUerqL5fexbDpT67ZIkqShEEE%2BlD%2BMARgCJElqDYVKADhoOBBq3RxJkjQUukuwfmcI%20sekGAEmSWkaxVB4GiB06AgOAJEktIhGDdBxiZ0wEirVujiRJGgqpGIxPR1Fszhgg5kRASZJaQSIq%20v48dOgJGtuEwgCRJzS6UewAAYgePiKLxKQwAkiS1gGQlAADMcCKgJEktoXcIAODyg4BSrZskSZIG%2028hE%2BX0M4I2TgaITASVJamoBRifLH8YA5maiqD3qcBhAkqRmFmBMqvxh790AX5qSMQBIktTkpraV%203%2FcGgJPH4YZAkiQ1sxKc0DPa3xsAzj0AiDsPQJKkplWE0yaUP%2BwNAG89OIqIat0ySZI0GLLpDKRg%205qgogl0CAMCsMbgcUJKkZlSC6aNf%2BeduAeAdU3EegCRJzSjA7L0FgEsPKr93HoAkSU2mBLNGvfLP%203QLAkaPhgNG4HFCSpCaSTWcggqP31gMwPh1FZ03AYQBJkppNDGbtLQAAfGwmUKh1KyVJUlVFMHfs%20K%2F98TQA4b1IURW2QTTkPQJKkphBgYhuMS0e9C%2F5je%2Fq6qw7GYQBJkppFES6ZvPun9hgA%2Fscs3BVQ%20kqQmkE1noARXT9%2F983sMAKdNjKIpI3BTIEmSGl2A5DCYM2b3T8f29vWfOgLI17rVkiRpQEJ5mf%2F0%20EdFuG%2F7vNQB8cnYUJZwMKElSYyvBeQe89tOx1%2Fueyw7CyYCSJDWyIlw0%2BbWfft0A8HdHld87GVCS%20pMZTqd%2BXTYlec7%2Ff1w0AJ4%2BPosMyOBlQkqRGVIJDxu%2F5v2L7%2Bt6%2FnwMU7QWQJKmRZNMZKMIHDt3z%20%2F%2B8zAPzpjCg6eCz2AkiS1Eh6lv%2B1T9vzf%2B8zAAC8ZzpOBpQkqZGU4MQMzBz12vF%2F6GMA%2BJe55W92%20GECSpAaR79nTZy%2F6FAAA3ttzl0BDgCRJ9S2bytA2Et45bc9X%2F7AfAeBf5kIsBYRaH5YkSdqbyt7%2F%20b53y%2Bl%2FX5wAwZXgUuT2wJEkNIMAHD3v9L%2BlzAAD46yMgSrs9sCRJdSvAqOFw3qS9d%2F%2FDfgaASW1R%209NkjcV8ASZLqVR7%2B%2B%2BH7%2FrL9CgAA%2FzQ3itJpnAsgSVKdyaYypNvgg4fu%2B2v3OwAAfOMEXBEgSVK9%20KcCfHAKHj3r97n%2FoZwD40OFRdNJk3BxIkqQ6kU1nIMCX5%2Fbt6%2FsVAAC%2BNBfI2QsgSVKtZdMZKMDl%20M2Bcet9X%2FzCAAHDepCh6s5sDSZJUHxLwteP6%2FuX9DgBQngswYhhOCJQkqZYK8LaDYebovl39wwAD%20wLSRUfSNE4C8vQCSJNVCpf5%2B4Zj9%2B74BBQCA%2F3ZYFF1xCO4NIEnSEMumM1CEKw%2BBOWP6fvUPVQgA%20ANecQnkYwKEASZKGVhH%2B%2Fqj9%2F7aqBIBJw6LoO6dhL4AkSUOpG943G04cv39X%2F1ClAADlvQGumI43%20C5IkaQhkUxkmjIJ%2F2s%2Bx%2F4qqBQCAG8%2BOIpLeLEiSpEGXg384uny33v58e1UDAMBvz8KhAEmSBlE2%20kWHmRPjYrP4VfxiEAPCWqVH0zhm4NFCSpEGQTWcggn87fmA%2Fp%2BoBAOBXZ0bRcROxJ0CSpGrLw9um%20wWVT%2Bn%2F1D4MUAABuOhuIcGmgJElVkk1lSKThP08a%2BM8atAAwdUQUZc8ESvYCSJI0UNl0BrrLN%2BOb%20OGxgV%2F8wiAEAoH16FP3riXjXQEmSBqByt78%2FOQI%2BOXvgxR8GOQAA%2FO2RUXTWVJwUKElSfxVh6mj4%20yWnVKf4wBAEA4N4Lo%2BiYiRgCJEnaT9lUedb%2FI2%2Bs7s8dkgAAcM%2F5cGgGVwZIktRH2XQGSvCLM%2BGg%20fm74szeJoTqITLqn4T8JgeJQ%2FVZJkhpTNp2BHLx7Flw9vbrFH8oL9YbUuq4QDr0JtuWAGLTnOoa6%20CZIk1bXKpL9zp8Afz69%2B8YchHAKoOGBYFM1%2FE1ACgsMBkiTtqtLtn0jBr84YvN8z5AEAYMbIKFr%2B%20NqCAGwVJkrSrEhCDR98IE9ODc%2FUPNQoAANNHRNH8K8sH6t0DJUnqqYclePiNcNy4wSv%2BUMMAAHDM%202Ch66a3AdsgmDQGSpNaVTWUgD9eeC6dMGNziDzWYBLgnq3eGcMhNkMsBcScGSpJaS2XS32%2FOhbcd%20PPjFH2rcA1BxYFsUvXAJxBK4T4AkqaVU9vj%2FlxOHrvhDnQQAgENGRtHat8CUUUB3rVsjSdLgy6Yz%200AXvmQWfPmroij%2FUyRDAq73l3hB%2BuxhIOxwgSWpOlY1%2B3nck%2FOCUoS3%2BUKcBAOCKe0K4cSmQhPZu%20Q4AkqXlUiv97j4AfV%2FEGP%2FujbgMAwA%2BWhvC%2B%2B3ta6a6BkqQmkE1loAj%2FdAL83ZzaFH%2Bo8wAAcNPL%20IVz%2BR8obI7hCQJLUwCpL%2Fb5zBnzo8NoVf2iAAADw9OYQrrgHlncAKUOAJKmxVLb3pQQ%2FPBP%2BbEZt%20iz80SACouOiPIdz2EpAs%2F9sgIEmqd9l0ucs%2FmYK7z4fTh2CTn76om2WAfXHbuVH0qWMoLxMsuV%2BA%20JKm%2BVdb4TxwBT1xUP8UfGqwHoGJBZwjn3glrOimvErAnQJJUZyrj%2Fe8%2FAr5%2Fav0U%2Foq6a1BfbegK%204ZNPwI9epDw5MG8IkCTVXqXLP5WCrxwHn5hVf8UfGjgAVPzX4hD%2B%2Bino2Ip7BkiSaqrS5X%2FgWLjz%20XDhyTH0Wf2iCAFDxqSdCWPlUB9l4BhLlzzk0IEkaCtl0BgJQhA8cAdecXL%2BFv6LuG7g%2FHtoQwl8%2B%20Dg%2B%2FTHmlgJsHSZIGWeVOfgT4rzPgzw%2Br%2F%2BIPTRYAKn66LIT%2F%2BRSs6gDS5c8ZBCRJ1bTr2v7Lp8EP%20T4Xx6cYo%2FtCkAaDiU0%2BE8NXnKHfLuIugJKlKKtv5ThoJPzkV3nhg4xT%2BioZr8P56dGMIn3oS7l4G%20DMNhAUlSv%2FV29wOfORa%2BOLfxCn9FwzZ8f92xOoRPPQVPbcCbC0mS9ktvd3%2BA8w%2BCn50Gk9sat%2FhD%20CwWAil%2BvCOGjj8LaTsqrBQwCkqS96C38RRjeBtecDO%2Be3tiFv6IpDqI%2FfrsyhM%2FNh6fX95wFlw5K%20knr0Fv4CTMvAl%2BbC1U1S%2BCua6mD64551IXztBbhuJeVxnbibCUlSK8smyveZOSIDn5sD7zmkuQp%2F%20RVMeVH8s2BLCfy6Bry0AuijvI%2BDKAUlqer03lisCOTjmQPjsHHhXk13xv1pTH1x%2F%2FWJ5CP%2B%2BCO5Z%20Q%2FkJkaD3TBkIJKnx9Rb9ABQgSsHJ4%2BFfjoXzJjV34a9oiYPsr4c2hHDNEvjRMujO9XwyhhMHJamB%20ZVOvbOAzcji8bwb81Sw4bFRrFP6KljrYgbh%2FfQjZl%2BCGVbCsg%2FKZi%2Fe8jwwEklSvevfpD0Ae2obD%20mw6Ej86ECye3VtHfVcse%2BEA8sSmEX6%2BEX6%2BApdt7egd69hYwDEhS7e16cx6AWBKOHQsfOAw%2BNrN1%20i%2F6uPAkDtHhrCLevhd%2BsgNvWUJ5AGOOV3oFY%2BesMBZI0eHbdqIciUILhI%2BHKKXDxZHjDODhmrIV%2F%20V56MKnt2Swh3rYWbV8OCTliyHUIlFPT0EFRCwa4MCJK0d72T9ioqXfo9Y%2FnEYeZYOHIMvG1KufCP%20a6Ab89SCJ2eQLegMYcUOeKIDHtwAj3TAqq09%2F1l5AkPvXILeR8RVB5Ja0G6FPrzqDV6Zd5Xv4JkD%20Mpw8Hk4ZB6dPgGMzFvz94cmqkaXbQli6DRZshUXbYPl2WLINNnTDhhzszAH5ni9%2BVSh4zceqP0nD%2020Dteo91NaldC%2Fuuj3McSEAqAQcNg6PGwKEj4OixMGd0%2BSp%2Fglf3A%2BYJrGNru0JYtaMnEBRhRxFy%20Pe%2B7ipAPPoD1JhZBvgRfXgCbcoaA%2FsqmM8Rj8PdzYEQCioaAphKAZASZFIxJwtgkjNnl43gEGQv8%20oEvUugHau0nDfAE0osc2hfCZp2rdisZXzJev%2FN5xsK8DaTDEBv4jJO3q44%2FRu%2FRIAxCBQUoaPAYA%20qYo6ukN44GW8j8QAtec6IAYvbiz3qNS6PVIzMgBIVfT5Z%2FBVVSWVEPC5%2BbVuidSc%2FFMlVdFPluPV%20fzXF4fY1sLDTXgCp2gwAUpX8dGkI6ztxaUY1ReWttn%2B4rNYNkZqPf6qkKjnsphAWbylvUKLqyaZ6%20NoZ5t6sBpGqyB0Cqgqc2hbC4E19RgyECuuEPaxwGkKrJP1dSFfx%2BDS79GyTtuQ6Iw89fqnVLpOZi%20AJCq4LqVeCvowRSDO9fWuhFSczEASFXwyFrK%2B5drcMRgyWZ4cavDAFK1GACkAfrJshAoevU%2FmNpz%20HRDgB0tr3RKpeRgApAG6fhVe%2FQ%2BFeM%2B5llQVBgBpgO5fjwFgKMTg2c2waofDAFI1GACkAfjj2hBe%203o47agyRUIRbVte6FVJzMABIA3Bbz%2FI%2Fx%2F8HX2UewO1rat0SqTkYAKQB%2BP5S7P4fSnG4%2FuVaN0Jq%20DgYAaQBWb8VX0VCKYOe2WjdCag7%2B6ZIGolTrBrSWylDL0m1OBJQGygAg9dOzm0Nw8l8NRPDMllo3%20Qmp8BgCpnxbZFV0bMVi4tdaNkBqfAUDqp%2BctQrURwXx7AKQBMwBI%2FbRoK94AqBYieLGz1o2QGp8B%20QOqnVTtwA6BaiGBTd60bITU%2BA4DUTyu7MADUQgSb8rCuy5UA0kAYAKR%2ByrsEsGaKJSh4%2FqUBMQBI%20%2FTTMV0%2FNpGLlN0n950tI6icLUI0EiMdgwrDIARhpAPwTJvVTKgY4Cl0TSUu%2FNGAGAKmf2rwJUM0k%20%2FMslDZgvI6mfJrcBAbLpTK2b0nLGJGvdAqnxGQCkfjp%2BbK1b0KJKcIKZSxowA4DUT8eNxTkAtVCC%20Ew0A0oAZAKR%2BOnYsBoBasAdAqgoDgNRPE4ZFEU4EHFLZdAYieMN4lwBKA2UAkAbggilAsdataCEl%20mHNArRshNQcDgDQA750OFF0JMBSy6QwU4coptW6J1BwMANIAnDoBhg3HuQBDJQEXTa51I6TmYACQ%20BmD26CianMYAMBQCRDE4b5Lj%2F1I1GACkAXpXzzCABlkJrjyo1o2QmocBQBqgd0%2FDeQCDLJvOQKEn%20bEmqCgOANEDHZKLo0AmA96cfPAEmjIGrp9v9L1WLAUCqgqsOBkr2AgyGbDoDJTjP5X9SVRkApCpo%20n4avpsGUhw8eWutGSM3FP1lSFRw%2FLorePh0o1LolTagIsybCRQfa%2Fd%2Fo1q7bEJa%2FtCqsXbfBdTN1%20wBeUVCXPbg5hzu%2BBCNpzHbVuTlOodP%2FfdA5cPtUA0GjmP%2FNCeOaZhaxctYZ8oUA%2BXyCfz5NMJkml%20EiQSCQ46cBKnvOFYDp95iI%2FvEPOES1XUfn8I2SXQXjQAVEM2keGkiTDvYot%2FI7nxd3eGhx95kh07%20dpJKJYnH40BE%2BVGMgEAIEAiUiiVyuRxjRo%2FizLPewIXnneFjPUQ80VIVvbQ9hGnXAkl7AQYqm85A%20N9x5MZw%2F2QDQCB57%2FJlwy2330Nm5jWQyQSzW91HmYrFEvpBnzOhRvPGC0zn5pON8zAeZJ1iqsivv%20CeGGZRgCBqCy7%2F%2BJE%2BExr%2F4bwq9%2Fc3N4ZN7TJBIJ4vEYUT8ethBCOQjk85x26vG87S0X%2B9gPIicB%20SlV2w9lRNGYEbg88UBH8%2BvRaN0J98a1v%2Fzg88NATpNMpEol4v4o%2FQBRFJBJxhg1Lc98Dj%2FHNf%2F%2Bx%20r6JBZACQBsHn5gB59wXoj2w6A3n485kwY5RX%2F%2FXuV9feHJYuX8WI4W39LvyvFkURI4a3sWLly1x3%20%2FW2GgEFiAJAGwadmR9FBY%2FAeAf1RguFt8JW5tW6I9uW2O%2B4Nj8x7irZh6aoV%2F4ooikilUtz5x4d4%20%2FPFnDQGDwAAgDZI%2Fng%2FJJGRT9gL0VWXP%2F7vPh0zaq%2F96tmFDR7j9jvtJp1NVL%2F4VURQxetRIbvz9%20nWzY2GEIqDIDgDRIZo2Ooi8dj0MBfVTp%2Bv%2FgkXDSeIt%2Fvbvr7oeJomi%2FZvr3RywWsW37Du6995Fa%20H3LTMQBIg%2BivZkXR%2B2cDOUPA66kU%2F7OnwHdPtvjXu7Vr14enn36eVCo56L8riiKGpVPc%2F%2BATrHMH%20waoyAEiD7PunRNH08XjL4L2o7PY3fiTcc4HFvxE8%2FcxCct3dg9b1vyfxeIz5z75Y60NvKgYAaQgs%20vyKKMm04KXBPem6j%2FPhFtW6I%2Burxx58hkUgMWQCIoohYPMbzCxbX%2BtCbigFAGiILLgVikE3aC1CR%20TWUgwEMXw%2FSRXv03itVr1xGPD235SMTjLFu6otaH3lQMANIQmdQWRU9dApTKe9y3umwqAzvgDxfC%20qRMs%2Fo1i9Zr1IRaLD%2FnvjaKIYqnEmjXrnAdQJYlaN0BqJXMzUbR2ZwhH3QLZrZmW3C64stQvEYd5%20byvfSrnWbVLfbdmylVhUm2vHWCxi0%2BbOWp%2BCpmEPgDTEJrVF0ca3RtGJk4BCa00MrBT%2FmePg5Tdb%20%2FBtRZ%2Bc2alT%2FiWIxOju31voUNA0DgFQjj10cRZdOA3a2xmZB2XQGcjBrHLx4WRQdMMzi34i6C3kI%20DOkKgIoIyHcXan0KmoYBQKqh358TRV%2FtueFNNplpyt6AbDpTDjgF%2BMzxsPAyC38ji2p8E1mfPdVj%20AJBq7FOzo%2BjuC2BEiqYbEqh0%2BRNB9hz44lz%2FfEv1wgAg1YFzJkXR9ndG0SUHU946uAl6A7Kpcpf%2F%20WQeVx%2Fvbp1n8pXpiAJDqyM3nRtEvzoFJw2nYewhk0xmy8Qxj0vDVU%2BHeC6LooOEWf6neuAxQqjNX%20Ty8XyzffE8L1SyEbz0Ac2rvre7lgNp0p73SYg1MPgpvOhglO9JPqlgFAqlPXnx1FS7eF8JePQ9uS%20jnIQ6HnF1sveAb09FAWgBG%2BcAp8%2FBk6bEEUTat04Sa%2FLACDVsRk92%2BPO3xxCfj78Zln589lkBmK1%20CwKVG%2FhQAAJcOBU%2BdzScfUAU3V7rkyZVwYYNHWHChExT92A19cFJzWbZthCuXQnfWwLPbuj5ZJzy%20KzkavEDQe6Vf6nkrwqyJcNXB8J7pcOQYu%2FqH0oYNHeHp%2Bc%2Bz%2FKWX2bRpC6vXrKO7O9%2BzNj8wZswo%20Dpl%2BMJMnjefoObOYNm1K1R6f%2Bx98PPz2%2Bttoaxs25Me9c2cXb77iAs4846SqHc%2By5avC888vYsXK%201axcuYaOLZ3EYzGiCIrFEuPHZzhw8gEcdujBHHvsbCZOGNc0z%2FWmORCp1Ty7JYQfLoNfLIe1XZDL%209fxHTyAYaBjIpss36qkU%2FXgaDkjDW6bCnx5S7uav9TloNQsXLg233nEf69Zt6C34sXisp2CVH44Q%20AiEEisUixWKJeDzO4YdP5%2BwzT2Lm4YcM%2BDFrlgCweMlL4c67HmTZ8pXk8wXi8TjxeIxYbPe58aVS%20iWKxSKkUSKWSTJ8%2BhfPPOY1DDz244Z%2F%2FDX8AkuCFzhAe3gg3roLb18LmTsrFO0Zv70DvW0XU8zX0%20vN%2F1recWvW2j4OwJcNV0OHEsHOfWvTVzzfd%2BGRYuWko8FiMejxNF0T534yuHASgUChQKBY479kgu%20vvgcJg6ga7sZAsB%2FfT8bFixcRjwW67mt8b53NqwEq0KhvBPhCScczVVvv7ShXw8N3XhJr%2B%2BB9SE8%201wlLt8G6HGzIwbZC%2Ba0EjErAiARMSMPENEwbDseOhSNGwURn8NeFBQsWhWt%2B8GsS8RjJZLLfW%2FCG%20EMjn8xRLJU6YO4d3XX1Fv35QIweA7K9%2FFx577BlisRjJZKLf57JUCnR3d5NOpXj%2Fn72dQw%2Bd1pCv%20FScBSk3s9IkW8Ua2YMGS8Itf3UgqmSQejw1o%2F%2F0oikgmkySBx598li9%2B6dvhtNNO4NyzTmn658hD%20jzwZbrv9Xh5%2F%2FBlSqVSfrvhfTywWkU6nKBSL%2FPDH17Fy1eowdcqBDXce3QhIkurQ%2Bg0d4Zrv%2F5Lu%20fIFEIl6Vm%2B9Uhg3a2oaxbdsObrrxD3zpK98Jzy9YFAb8w%2BvQ0mUrwz%2F%2Fy7fDr669mVyum1QqRSy2%2076GTvoiiiGQiQb5Q4Ovf%2FBGrV69vuHNoAJCkOvTDH%2F2aZDJBPDY4f6bj8Thtw9vYvKWTH%2F74Or71%207Z%2BEjs2dDVfE9mTt2g3hu9%2FPhv%2F4zs%2FYtn07w9uG9c6bqLZEIk48HucnP7uu1oe93wwAklRnvv%2Bj%20a8PadRurduW%2FN1EUkUgkSCYTrFi5mi999Ttcf%2BMdDR0Cbr7l7vBv3%2FgBi15cTiqV7JnkN7i984lE%20nA0bN3PDTX9oqHNnAJCkOvLCwiVhwYIlDBuWHvTCVRFFEalUkngsxv0PPMan%2F%2B7L4f4HHmuoYvbw%20vCfD33z6X8Oddz9IPB4jnU4N%2Bfm77fZ72bRpc8OcNwOAJNWReY%2FNr9k972OxcuFMJOJcf%2BMdfOVr%2014QVK1fXdUFbuWp1%2BLevfz9c%2B5tbSaeTDEunX7OWfyhEUcSIEcO5848P1fqU9JkBQJLqyNNPLxiS%20buu9iaKoNwhs2rSZr339%2B%2FzgR9f2hoAoVtvJ7lHP6vVNHZvDT39%2BffjyV7%2FLuvUbSadTxGIDWykx%20UMlkgqfnL2DDxk11HZoqDACSVCcefPiJUCqViNW4yMIr8wNGDG9jwQtL%2BPTffTnc%2BccHQ7FQrG04%20ice49%2F554Utf%2BS7zn1nI6NGjahqYXt2%2BHTt28uKLy2vdlD5xHwBJqhMLFy4lkaivP8vl%2FQMShBC4%205dZ7GDlyBOl0qiZtSaWS3P%2FgE6xZs653jkQ9FP5dz1U8EWfFypdr3ZQ%2Bqa9nmiS1sLVrNxCP11%2FH%20bKXQptMp8vl8zYpuLBZj8%2BYtDB%2FeVutTsleJeJxFi%2B0BkCTth0KxRD3v0F4PV9u1mOC3P6IoYmdX%20buA%2FaAjU95mUpBZSB%2FVVVRDVcYjblQFAkupKQ0wg1%2BsohcZ4DA0AklQnkklHZZtB1Bj13wAgSfWi%20rW1Yw1w9as%2BKxSIzZkytdTP6xAAgSXViwvgMpWKp1s3QABQKRaZMmVTrZvSJAUCS6sQRRxxKdz5f%2062aon0IIxGIxZh4%2Bo9ZN6RMDgCTVieOOPTIalxlD0V6AhlQslph0wAQOnXFwQywDMABIUh2p9AIE%205wI0nHw%2Bz4xDG2P8HwwAklRXrnr7pdGokcMplewFaCTFYpFkMslbr7yoIa7%2BwQAgSXXnrDNPJtdt%20L0CjCCFQKJR465svrHVT9osBQJLqzHnnnBLNOGQquVy3IaDOhRDYsbOLOUcezklvmNswV%2F9gAJCk%20uvTRv%2FiTKDNuLPl8wRBQp0IIdHfnmXX4Ifzpe9%2FaUMUfDACSVLc%2B8P53MHrUSHsC6lAIga6uHOPG%20jeXDH3xXwxV%2FqOfbTkmSALj2ulvDAw8%2BRjqdJh6P1cVd%2BVpVCIFiqURuZ443vvFM3nTR2Q37YDRs%20wyWplcx7bH644w%2F309GxhVQ6RcwQMORKpUA%2Bn2fUqBFccdn5zD32yIZ%2BEBq68ZLUaq697pbw0MNP%20EovFSKWS9gYMgRAC3fk8hUKB884%2BjcsvO68pTnpTHIQktZJNHVvC735%2FF88%2B9yKxWEQ8HjcIDIIQ%20AsVikVIpMHv2YVxxyXmMn5BpmhPdNAciSa1mwYIl4bc33sbGjZtJpZLE4%2FFaN6lpFIsluru7mTAh%20w2WXns%2FRR81sunrZdAckSa3m7nseDvfcN4%2FOzm2k0yliMRd49UcIgRACuVw3I0a0ccF5p3PWmSc1%20bZ1s2gOTpFbzm9%2FeGh5%2F4lkKhQKpVKrWzWko5d38CkDEqaccx5uvuLDp62PTH6AktZLlL60Kt9x2%20D889t4gRI9qcH7APlWV927btYPYRM7jisgs4eOqBLXHCWuIgJanVPL9gUbj19ntZuWotw9Ipoigy%20COyi0t3f3Z1n%2FPixvP0tF3P44Ye01AlqqYOVpFZzz33zwu9vvosQcNlgj8p6%2FlgsxsUXncm5Z5%2Fa%20kielJQ9aklrNddffFh546AlSyURLrxYoFosUikWOnzuHq6%2B6rKVrYEsfvCS1ko2bNodrvvdLOrdu%20I96CKwVKpRIjRgznQx%2B4mvHjxrZ8%2FWu9Z4Aktaj77ptHV1dXyw4DRFFELpfjgQceq3VT6kJrPgsk%20qYXcdvu94a67H6JYLJFKpYjFWvdPf2XiX7FY4pJLzuaCc09v2ZPRsgcuSc1uwQtLwu9vuZuXV69h%20WDrtSoAelRUAXbluDj5oEhdccCZHz2m%2Bnf72peUOWJKa3caNHeGXv76ZxUuW924RbOF%2Frcpe%2Fzt2%20djHnyJlc%2BqZzmTJlUsucqJY5UElqBb%2B69ubw%2BBPPEkIgmUxY%2BPugcre%2FRDzB3GNnc9U7Lm2Jk9YS%20BylJzW7eo%2FPDzbfezbZt20mlkt4PoB9KpRK5XDdjxozmnLNP5qwz3tDUNbKpD06Smt2CFxaHX%2F3m%20Zjo2ddLWliYWi3nVP0DFYpGurhxjx47mnW%2B7hNmzD2vKE9qUByVJzW7Tps3hxt%2FfyfPPLyYWixGP%20W%2FirqTI%2FIASYNfMQrrj8AiaMzzTVCW6qg5GkVnD9TXeEBx96klAqub3vIKssGySCU06ay9vecnHT%20nOymORBJanaPPjY%2FXH%2FjHXR350kmE47zD6FSqUQ%2Bn2fEiBFccN6pnHF6488PaPgDkKRW8K1v%2FyQs%20W76yd4KfV%2F1DL4RAqVSiO1%2FgoAMP4K8%2B8f6GfhAauvGS1Owemfd0uPa6W4iiyGV9dSKEQKFQoDtf%204MrLL%2BCcs05uyAfF%2FiNJqlP33PdIuPa6W0gkEo7115FyGEvSNizN9TfcznPPvRhq3ab%2BMABIUh16%209rkXw3XX304ymSAe9091PYrFYrS1tfHTn9%2FIypWrGy4E%2BKySpDqzbv3G8Itf3sTwtjYn%2BtW5eDxG%20iRLf%2B%2BG1tW7KfvOZJUl15vc3%2F5Fcd7dX%2Fg0iEY%2BzffsOfpG9qaF6AXx2SVIdefrpBeG5BYtIp1K1%20bor6KIoiUqkk9z%2F4GC8sXNIwIcAAIEl15JFHnyIWucyv0URRxMiRw7n3vnm1bkqfGQAkqY4sfHEZ%20yWSi1s1QP8TjcVasWM2mji0N0QtgAJCkOnH3vY%2BEUqnk1X%2BDiqKIHTu7eOzxZ2rdlD4xAEhSnVi%2B%20fBWJhFf%2FjSqKIuKJci9AIzAASFKd6OjY4rK%2FBhePxVi1em2tm9EnPtMkqU7s7Mph739ji6KIXK67%201s3oEwOAJNWJUgh4i5bG1yghzgAgSXWiQeqG9qkxHkkDgCTViRAC0BAryPS6GuMxNABIUp0YMaKt%20JwTUp1KpRKFQrGkb8vk8pVKpbs9TsVhiyuRJtW5GnxgAJKlOTJ82lWKxVOtmvEYIga6uHKlUihkz%20ptYsBOTzeU484RhSySS5XHddhoBiscghh0ytdTP6xAAgSXVi5uHT6O7O17oZvUII5PN5tm7dzvHH%20HcXn%2Fu5j0YnHH00%2BX5s2FgpFpk2dzOf%2B18ejY46ZzfbtO8jn83UVBLrzeaYcNLnWzegTA4Ak1Yk5%20R82KMpnRNe8FCCFQLJbYtn0HM2ZM49N%2F82He1X5FBOWlirXU3RM%2B3vvuN0ef%2BZ8fYerUA9m5s4ti%20sVjzIFAsFjlw0kSOOWZWQ8wCdMspSaojR8%2BZxUOPPEkslqrJlsClUonu7jzD2tK8911v5oQTjo4%2B%20VOuTshcTJ46LAB5%2F4rnwu5vvpHPrdtKpZM02U8rlujnxvGNqfVr6zAAgSXXkrDPfwLx5TxNCGNIA%20EEIgl%2BsmkUxw8UVncsF5Z0Sf%2F1ytz0bfnHD8URHArbfdG%2B69b17PfIWhDQLFYol4PM6F553eEFf%2F%204BCAJNWViRPGR%2Beecyrd3UM3tp3P5ykUCsydeyT%2F%2FPlPRRecd0bDFLFdXXzRWdH%2F%2Bfwno7nHHkkI%20YcjmU4QQKBSLvPXNF9X6FOwXA4Ak1ZmLLzormnbwgYNawMrj%2FEU6O7dy4IEH8P4%2FfQfvufrKhiz8%20r%2Faed10Z%2Ffn73slBBx1AZ%2Bc2CsXBW7UQQmDnzi6OmTOTU085rqHOn0MAklSHPvbf%2FzT63D98LXR3%2050kmE1UbDgghEALkunNkxo7hXVddwdFHN8aktf1x6KHTIoBHH3s63HX3I6xZs562tjRRFFX1XOZy%203UyZOpk%2FefdbGu4c2gMgSXXqox95L2PHjqramvcQAvlCga6uLi4493Q%2B%2B7cfiZqx%2BO%2FqDSceG%2F3N%20Jz8QnX%2FeqRSLRfL5QtXOZS7XzUEHHsBfffz9DXkO7QGQpDo1adKECOCGG%2B8Id983j3QqSTwe3%2B8r%202BAChUKRQqHAnDmzuPLy8xmXGduQRau%2FLrvkvGjjps3h9jvu45F5T5FOp0kk%2Bncui8USO3fu5Jyz%20T%2BUtV17YsOfRACBJde7KKy6MnnzquXDbHfexceNmYrFYn4pXeSOfArFYjEmTJvDmyy9gxoyDG7Zg%20DdT4ceXQs%2FDFpeHmW%2B5m9Zr1RFHU53NZKBQplUqMGzeGt731Yt5wwtENfS4NAJLUAI6bW17q9tjj%20z4T7H3ycRYuXkUqliMdiu4xrl8f3S6FEsVCiVCpx5OzDuOD80zns0GnR%2F%2Fh4rY%2BiPsyaOSMCePLp%2058M9985j2bIVxGIx4vEYURTrDQPl%2BRLlyZKlUolDpk%2FljDNO4MTjj2nowl9hAJCkBnJiz1Xn%2BnUb%20w4uLl7N23QY6O7eRz%2BeJohjpdJLM2DEcdOABHH%2F8nKYoVIPluGOP7D0%2FjzzyVFizbgNbtmwll%2BsG%20IJ1OMnr0KCZPmsgpJ89tunNpAJCkBjTxgPFNV5Bq6eQmLPD74ioASZJakAFAkqQWZACQJKkFGQAk%20SWpBBgBJklqQAUCS1DiG5gaJLcEAIEnab0N0p%2BLXqtKNfGQAkCTth%2BFtw3o%2BGvoEEEKgrff3a6AM%20AJKkPstkxlCq0eV%2FqRQYN25MrU9B0zAASJL6bNSoEZSKpSH%2FvSEESqUSo0eNrPUpaBoGAElSn40f%20NzZKJuNDPgcghMDYsaMYPz7jJIAqMQBIkvbLcXOPIl%2FID9nvK9%2BKt8CRsw%2Br9aE3FQOAJGm%2FHD1n%20FqFUIgxhN0CpFJh5%2BKG1PvSmYgCQJO2XY4%2BZHU06YCLFIZoLUCyWGDNmFCccf5Td%2F1VkAJAk7bfT%20TzuR7u7uQe8FCCGQLxS46MIza33ITccAIEnab6edelw0evRICoXioP6efL7AjEOmctIbjvXqv8oM%20AJKkfvnQn19NPB4btKGAYrFICIF3X3VFrQ%2B1KRkAJEn9MnnyxOid77iEbdt3UCpVNwQUi0Xy%2BQJX%20veNSxmZGe%2FU%2FCDypkqQBWbJsRfjOd39BFEUkEnGiAezXH0KgWCwSi8W5%2BqpLOXrOEdapQeKJlSQN%202IqVq8OPf3odmzdvJZ1O9SsElEqBfD5PKpXkLz74bqZMmWSNGkSeXElSVXR0bAm333E%2FD897kng8%20TjKZIBaLvW4YKF%2Fxl8jn80TA6WecyDlnnkwmM8b6NMg8wZKkqtqwviPc98CjLHxxKR2bO8nn88Tj%205aGBWCyiVAq9Xf3JRIIJE8ZxxBEzuPzS861JQ8iTLUkaNC%2BteDksWbqSjo7NdHZuZUvnNsaMHsWY%20saMYlxnL9IMPZPr0qdYiSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIk%20SZIkSZIkSZIkSZI0RP4%2FLFuZK4XzJ4oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDItMjJUMDk6%20MTk6NDIrMDM6MDCQ2pt4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAyLTIyVDA5OjE5OjQyKzAz%20OjAw4YcjxAAAAABJRU5ErkJggg%3D%3D;base64,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" y="144"/>\r
 </g>\r
</svg>`, K = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r
 <style>\r
  <![CDATA[#efumo7vt3k5h2_to {animation: efumo7vt3k5h2_to__to 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h2_to__to { 0% {transform: translate(112px,-184px)} 75% {transform: translate(112px,-184px)} 100% {transform: translate(112px,16px)} }#efumo7vt3k5h3_to {animation: efumo7vt3k5h3_to__to 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h3_to__to { 0% {transform: translate(-46px,-184px)} 50% {transform: translate(-46px,-184px)} 75% {transform: translate(-46px,16px)} 100% {transform: translate(-46px,16px)} }#efumo7vt3k5h3 {animation: efumo7vt3k5h3_f_o 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h3_f_o { 0% {fill-opacity: 1} 75% {fill-opacity: 1} 77.500000% {fill-opacity: 0} 100% {fill-opacity: 0} }#efumo7vt3k5h4_to {animation: efumo7vt3k5h4_to__to 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h4_to__to { 0% {transform: translate(270px,-184px)} 12.500000% {transform: translate(270px,-184px)} 37.500000% {transform: translate(270px,16px)} 100% {transform: translate(270px,16px)} }#efumo7vt3k5h4 {animation: efumo7vt3k5h4_f_o 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h4_f_o { 0% {fill-opacity: 1} 37.500000% {fill-opacity: 1} 40% {fill-opacity: 0} 100% {fill-opacity: 0} }#efumo7vt3k5h5_to {animation: efumo7vt3k5h5_to__to 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h5_to__to { 0% {transform: translate(78.410453px,-184px)} 62.500000% {transform: translate(78.410453px,-184px)} 87.500000% {transform: translate(78.410453px,16px)} 100% {transform: translate(78.410453px,16px)} }#efumo7vt3k5h5 {animation: efumo7vt3k5h5_f_o 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h5_f_o { 0% {fill-opacity: 1} 87.500000% {fill-opacity: 1} 90% {fill-opacity: 0} 100% {fill-opacity: 0} }#efumo7vt3k5h6_to {animation: efumo7vt3k5h6_to__to 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h6_to__to { 0% {transform: translate(-238.431665px,-184px)} 25% {transform: translate(-238.431665px,16px)} 100% {transform: translate(-238.431665px,16px)} }#efumo7vt3k5h6 {animation: efumo7vt3k5h6_f_o 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h6_f_o { 0% {fill-opacity: 1} 25% {fill-opacity: 1} 27.500000% {fill-opacity: 0} 100% {fill-opacity: 0} }#efumo7vt3k5h7_to {animation: efumo7vt3k5h7_to__to 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h7_to__to { 0% {transform: translate(-80.010606px,-184px)} 25% {transform: translate(-80.010606px,-184px)} 50% {transform: translate(-80.010606px,16px)} 100% {transform: translate(-80.010606px,16px)} }#efumo7vt3k5h7 {animation: efumo7vt3k5h7_f_o 4000ms linear infinite normal forwards}@keyframes efumo7vt3k5h7_f_o { 0% {fill-opacity: 1} 50% {fill-opacity: 1} 52.500000% {fill-opacity: 0} 100% {fill-opacity: 0} }]]>\r
 </style>\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <g id="efumo7vt3k5h2_to" transform="translate(112,-184)"/>\r
  <g id="efumo7vt3k5h3_to" transform="translate(-46,-184)"/>\r
  <g id="efumo7vt3k5h4_to" transform="translate(270,-184)"/>\r
  <g id="efumo7vt3k5h5_to" transform="translate(78.410453,-184)"/>\r
  <g id="efumo7vt3k5h6_to" transform="translate(-238.431665,-184)"/>\r
  <g id="efumo7vt3k5h7_to" transform="translate(-80.010606,-184)"/>\r
  <g id="svg_5"/>\r
  <g id="svg_6">\r
   <path d="m567.435897,349.897438c-1.024,0 -2.048,0 -3.136,0.032c-14.912,-74.016 -79.776,-128.032 -156.864,-128.032c-64.032,0 -121.504,38.112 -146.688,96.032c-60.512,1.44 -109.312,51.104 -109.312,111.968c0,61.76 50.24,112 112,112l304,0c52.928,0 96,-43.072 96,-96c0,-52.928 -43.072,-96 -96,-96z" fill="#57A0EE" id="efumo7vt3k5h8"/>\r
  </g>\r
  <path d="m282.283897,580.809438c-10.496,15.136 -34.848,52.608 -34.848,73.088c0,26.464 21.536,48 48,48c26.464,0 48,-21.536 48,-48c0,-20.48 -24.352,-57.952 -34.848,-73.088c-5.952,-8.64 -20.352,-8.64 -26.304,0z" fill="#57A0EE" id="efumo7vt3k5h2"/>\r
  <path d="m282.283897,580.809438c-10.496,15.136 -34.848,52.608 -34.848,73.088c0,26.464 21.536,48 48,48c26.464,0 48,-21.536 48,-48c0,-20.48 -24.352,-57.952 -34.848,-73.088c-5.952,-8.64 -20.352,-8.64 -26.304,0z" fill="#57A0EE" id="efumo7vt3k5h3"/>\r
  <path d="m282.283897,580.809438c-10.496,15.136 -34.848,52.608 -34.848,73.088c0,26.464 21.536,48 48,48c26.464,0 48,-21.536 48,-48c0,-20.48 -24.352,-57.952 -34.848,-73.088c-5.952,-8.64 -20.352,-8.64 -26.304,0z" fill="#57A0EE" id="efumo7vt3k5h4"/>\r
  <path d="m542.827897,605.897438c-4.384,-7.68 -14.208,-10.304 -21.856,-5.856l-17.536,10.144l0,-20.288c0,-8.832 -7.168,-16 -16,-16c-8.832,0 -16,7.168 -16,16l0,20.288l-17.568,-10.144c-7.616,-4.416 -17.408,-1.792 -21.856,5.856c-4.416,7.648 -1.792,17.44 5.856,21.856l17.6,10.144l-17.6,10.144c-7.648,4.416 -10.272,14.208 -5.856,21.856c2.976,5.12 8.352,8 13.856,8c2.72,0 5.472,-0.672 8,-2.144l17.568,-10.144l0,20.288c0,8.832 7.168,16 16,16c8.832,0 16,-7.168 16,-16l0,-20.288l17.568,10.144c2.528,1.472 5.28,2.144 8,2.144c5.504,0 10.912,-2.88 13.856,-8c4.448,-7.648 1.824,-17.44 -5.856,-21.856l-17.6,-10.144l17.6,-10.144c7.648,-4.416 10.272,-14.208 5.824,-21.856z" fill="rgb(126,129,144)" id="svg_13"/>\r
 </g>\r
</svg>`, G = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r
 <style>\r
  <![CDATA[#esic8yxwm7h2_to {animation: esic8yxwm7h2_to__to 6000ms linear infinite normal forwards}@keyframes esic8yxwm7h2_to__to { 0% {transform: translate(0px,0px)} 50% {transform: translate(40.000000px,40.000000px)} 100% {transform: translate(0px,0px)} }#esic8yxwm7h2_ts {animation: esic8yxwm7h2_ts__ts 6000ms linear infinite normal forwards}@keyframes esic8yxwm7h2_ts__ts { 0% {transform: scale(1,1)} 50% {transform: scale(0.900000,0.900000)} 100% {transform: scale(1,1)} }]]>\r
 </style>\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <circle cx="400" cy="400" fill="orange" id="esic8yxwm7h2" r="224" transform="matrix(1 0 0 1 0 0)"/>\r
 </g>\r
</svg>`, V = `<?xml version="1.0"?>\r
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
 <g class="layer">\r
  <title>Layer 1</title>\r
  <image height="512" id="image0" width="512" x="144" xlink:href="data:image/png;svgedit_url=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC%2FxhBQAAACBjSFJN%20AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC61BMVEUAAAAA%2F%2F9XoO5XoO5X%20oO5XoO5XoO5XoO5XoO5XoO5XoO5XoO4Ao%2F8Apf9XoO5XoO4Ap%2F8Aov8Ap%2F9XoO5XoO5XoO5XoO4A%20p%2F9XoO5XoO4Apv9XoO5XoO4AgP8Ap%2F9XoO4Aqv8Ap%2F9XoO4Ap%2F9XoO4Ap%2F8Aqf8Ap%2F8Ap%2F8Aqf9X%20oO4Aqf9XoO5XoO4As%2F8Aqf9XoO5XoO4Ap%2F9XoO4Aov9XoO4Aqf9XoO4Aqv9XoO4Apf9XoO5XoO5X%20oO4Ap%2F9XoO5XoO5XoO5XoO5XoO4Aqf8Aqv9XoO4Apv9XoO5XoO5XoO5XoO4Aqf9XoO5XoO4Ap%2F9X%20oO5XoO5XoO4Aqf9XoO4Aqv8Aqf9XoO5XoO4Aqv8Aqv8An%2F8Ap%2F9XoO4Ap%2F8Ap%2F8Aqv8Aqf8Ap%2F8A%20p%2F9XoO4Ap%2F9XoO5XoO4Ap%2F9XoO5XoO4Ap%2F8Aqv8Aqv9XoO4Aqf9XoO4Asf9XoO4Aqv9XoO4Aqf9X%20oO5XoO4Aqf8Ap%2F8Ap%2F9XoO4Aqv8Aqf9XoO5XoO4Aqf8Apf9XoO4Aqf9XoO4Ap%2F9XoO4Aqf8Aqf9X%20oO4Apv9XoO5XoO5XoO4Aqv8Apv9XoO4Apv9XoO4Aqv9XoO5XoO5XoO4Apv8Aqf8Aqf8Ap%2F8Apf9X%20oO5XoO4Aqf9XoO5XoO4Aqf9XoO4Aqf9XoO5XoO5XoO5XoO4ApP8Ap%2F8Aqf9XoO4Av%2F8Aqf8Ap%2F9X%20oO4Ap%2F9XoO5XoO5XoO4Atv8Aqv8Ap%2F8Aqf8Ap%2F8Apv9XoO4Aqf9XoO4Amf9XoO5XoO4Aqf8Apv8A%20p%2F9XoO5XoO5XoO4Aqv9XoO5XoO5XoO4Ap%2F8Aqv9XoO4Aqv8Ap%2F9XoO5XoO5XoO4Aqf9XoO4Ap%2F9X%20oO4Ap%2F8Aqv8Aqf8Aqf9XoO4Ap%2F8Aqf9XoO4Ap%2F8Ar%2F8Ap%2F9XoO5XoO4Ap%2F9XoO5XoO4Aqf8Aqv8A%20qv8Aqf8Aqf9XoO5XoO4Arv8Aqf8Aqv8Ap%2F9XoO4Aqf8Aqf9XoO4Ap%2F8ApP9XoO7%2F%2F%2F90R61PAAAA%2093RSTlMAAUmk3%2Fn04tC4hE8ZIsfIbhZO8PuoKUP9Iyj1bwLAwSFa7UDZYD53oOb%2BaFjRCoiVm5re%20C4d29x6eH%2Fws5amJ2O5hvron7xf4bEzFR6KMN5n213zPEq7nZxsqCDThxnEV4%2Bw9MmPdxICSmMkJ%20M9uxaQ3zGPq9n3hZMSBGA7QvzU0ltmLoo3K3X8pF8n5bMEihFOoPwrDgLoKRlxHccOmnZKvUizWW%201rsOGkHaBJRry3Rmv7UHNh1%2FfSuTO5wF0uSFQoaze60tUvG8XT91JMOlatVW64ONSwxzRIqmjtNR%20EJ04bXomr0o8OWV5zrITUwY6uVBcqlcc1AadfwAAAAFiS0dE%2BDtjZ2YAAAAJcEhZcwAADdcAAA3X%20AUIom3gAAAAHdElNRQfkAhYJEzgIj2qUAAAON0lEQVR42u3d%2BX8V1RnHcQKCWMCGEiCIICASjBAX%20kKsCKiIQECqgiLiwSVErUgNEiwbBgraIWkTFCohoQVCB4m6tiigqrlRoVbSrrXVp1e7za%2FvC%2Birg%20nDszyT3nOznzef8Bc595vk9yZ%2BaemWnQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%20AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZERRw0b7NW6yf9MDvtasuboWuNfiwOD%2Fvl7cUl0P%203PpGq2AvJa3bqEuCQ20bB%2FsqbdROXRVcOahVEKL9wR3UhcGJoo5BuEM6qUuDC50Dky6HqmuDfUVd%20jQMQND5MXR2s6xbkU6YuD7Z1zzsAQbG6Plh2eP4BKD9CXSCs6hREKG2oLhE29YgagKBLJ3WNsKgs%20cgCCnhXqImHPkdEDEBylLhL2HB1jAEq7qauENcfEGICgV291mbAlzldAEByrLhO29Ik1ALnj1HXC%20kujTwN2OV9cJS06INwB9%2B6kLhSX9403Aieo6YUn3eANQwlGAp7rFG4DgJHWhsKPo5HgDMIBrAZ6K%20eR4QnKIuFJYMjDcAp6rrhCWDBsc7ExyiLhSWdKuMNQFD1XXClmGx%2Fgd0VJcJazqdFmMAGnMe4LHh%20I3pFfhGwOtBzvfsV98w3AN%2Bs5XZPH3nyqGDwgNEDR5zRrIV6J5FX0SlNzANwZq02OeasvTYytvXZ%2049R7iTzOMd8qVnJuLbZ33vlf2U7p%2BAkT1bsJo3GTjBNwXvKtDZocfkB54gXq%2FYTJlFGmAfhW4m2N%20mWqcpguHqXcUBheZMrs48aa%2Bne%2Bg8hL%2BC6TTtP0MiQ1MuqVLS%2FMNQFDemkeSpdLZhsCmJ93Qd4II%20rS7jQTQpVDUjPK5cUbLtzJwVNQBBUM1JYQpdbkhrYrLNXBGdfxBMbqbeW3zFdw1hzU62mXgrDcqP%205Gsgba40ZHVVoq3UzIg1AEEwp0q9w9jH2PCkkv23vjpm%2FkEwd6Z6h7G3S8KD6pFoI%2FNiD0DQ6xr1%20HmMv3wvPaX6ijRwWfwCCBeeodxl7ujY8pmSrwiYkGIDg8IPU%2B4w9NCrEAFyXZACC%2Fleqdxr%2F9%2F1C%20fAX8INEABNNZdpweC8MzsnYQuNvCaerdxpcWhEdk6zTwf1onvNQMW0yPj7w%2B0VZqFiWdgBvUO44v%203GgI6KZkm6lOOgClP1TvOXZbbAjo5mSbKUs6AMESfhtMg1vah8eT9Ofg5iWJJ%2BDWGvXOo0GDIwzp%20JF4QclviAQj6qHceDSqWGsJJvCRsdt%2FEA1B5u3r38SNTOHck3tSy5P8C5vIlIHZezpRN8mXhy1ck%20n4A71Q3IuCvHGqOZknxr7VYmHoAm%2FCig1G%2B6MZla3Ro2ZWmC7L9wl7oHGdZhVXtzMHNrtcnldycd%20gPJL1W3IqN63T7gnXzA%2FruV2V6%2B5t33c8Hdbq%2B5EDOuKq5ck%2Ft9Wz9XlOu259%2FW7f8JdvWJ%2BUrLF%20pwo9uqjTcK8Qj4g56KIH4nxU05QvFF9fi9Pb%2Bq8wD4kqanthjM%2FqrI44vw3qLCQ2Fqp9w38S%2BVkP%20pPpfwCZ1FBIlhVux1eHByIPCNN8v1i6nzkLigEL2sM3CiE97SJ1yHg%2Bro9Ao7KvkH1kc8XEJ1544%209Kg6CY0uBX5%2FaFFZ%2FodHXK7O2SjWm%2Fb8U%2Fg3x52SdwIq07pIvCLxSkcvlDxW%2BFZeVp7vEx9XJ23Q%20Vh2FRmsbvTw43yeen9I14k%2Boo5Do%2B1MrzXwy32f%2BTB11uDnqLCSestPMpzvm%2BcwN6qjDPaPOQiFn%204QhgtyHmx5IGS9arsw61WR2GwrPW2rklz4FgOn8TzKnDEOhq8a7NPGfV6bwUMCp%2B33xRavORrreY%20vwRaPaIOO0wGvwLsHo01M39wW3XYYXrGb5wnmhb4IvC%2BzE8TfE4ddpjn1Xm4Ntn2Ku1HjceBC9Vh%20h9mqDsSxvvbv2H7B%2BNlj1GmH2KJOxK3yB%2B239EXjv4CX1GmHqNimzsRp%2FgVbB5bPy6aPT%2BXFwJHq%20UFzmv8lJS41PkzpZHXaY1epU3Kl8xU1LOxjXiqdyUUBmfg6a%2FKqrlr5mKmG4Ouwwr%2BfUybhRfYKz%20lj5mWhyUzueFJHsEaj3VZKPLBRlvGKrYrs463Bp1Otb1HdHJaUd%2FbqjjTXXU4Wo8vzVo1vZBjjs6%20xHApoCStT4%2FdsVMdkj3jNyZ8HGAhmH5iWa1O2qRq49qV5Yn6mn5N9j%2Fz4V%2FM05x5%2FdJQ0yp10HDj%20LcMAFP52BKTS24Z3TDZSFwZHDIttC%2FNQAqTfiPABWKGuC468Ez4AlSm9PwiFtstwFDhRXRjcmGkY%20gISvK0Z9VdQ4fADmqQuDI4ZnCBb2wSRIr0PCB6BYXRcc2R4%2BAGeo64Ijd4QPwLvquuDIseEDcLG6%20LjhyQ%2FgALFPXBUcMC0MtPZsEqbMxfAAWq%2BuCIwxAxvEVkHEcBGYcp4EZx4WgjHuPS8HZZrg7rFhd%20FxzZL3wA%2BDk4IzqwICTbmofnz5KwrLjeMACC%2BxShYLgQmGNZeEY0Ch%2BA6eq64IjhveVpfn8gCqiq%20JHwAuDk0I4YZjgFT%2BbxoFN6vDAOwSl0Y3DC9iulSdWFwYmZ9e0gUCmuo4R%2FAr9WFwY3TDAPASUA2%20HGd64Npr6srgRB9D%2Fil9dSAKrMN00wC0VJcGF4xvjhutrgxOGF8c96S6MrhwtSn%2F4Dfq0uDCbab8%20%2By5XlwYHTjc%2BdPsSdWlw4ULjNwA%2FBWbBS8b80%2FnyaBTWb%2Fsb8x%2BcytfHo7CeMv8D%2BJ26NtjXNs9r%20V65XFwfrZm42579yvbo62Pb0reb8gzvU1cG6vC9g%2FL26Oth2Z778l3JPkO%2BG5ss%2FuEFdHixblfe9%20izmWAvitqCz%2Fezd5PJzfHrk2yO9qdYWwqd%2FciPyr1RXCopqyyoj8g2HqGmFPw6g%2F%2FyDo2kFdJCwp%20ump8ZPxB0ENdJuxoc9GKGPEHTfkH4Jtp415s%2B86JS%2BOk%2F1%2B71OVGW1dcvSTm3iCpU9XpRuvRRd0k%20j5VOUccbZf0ydY%2B89p4630gb1C3yWqtx6nyjbFK3yG%2Fz1flGaZdTt8hr1alfBzBH3SKvNWmhzjfK%20o%2BoW%2Be19db6RjlG3yGsdU38NsGKRukc%2BW5n6M4AGu9Q98lnpcHW80c5QN8lnf1CnGwPnAPZsT%2F0Z%20YAPzQ21RZweeqw43jv5131GEeqB%2BLATPqfvkq0knqKONZ5S6UZ7a%2FEd1sjFtrvu%2B4qsmva4ONq6e%206lZ5aUU7da6xPa%2FulY8W1o%2Fjv922qpvloQ96q1NNYIu6W94pPzL1PwDtqWKbumGeWfkndaQJjVR3%20zC9r71MHmtRqdct8MmBVfbj8vw9%2BDiqU8vdmqsOsDRaFFsiBH6qjrKXr1J3zQsd6sPjDZE3ddz%2Fj%20cts%2FUodYFzXcGlQXpW8Uj1FHWFc7dqq7WF%2F13%2F5xc3V6hVC1ce3K8rq3IzsG7Lx3bfdP5tWTH%2F0B%20AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAL64qrlwTpsWjp%20n%2F9yQ8NP1V3Jjh5d1JGHKR04%2FxZ1ZzJh%2FTJ11Ea5kcepu5MBI9Ux51O5Yaa6P77bpM44wuTO6g75%207ZpKdcKRzpqobpLP5qjjjWHSbHWX%2FPWoOtxYtjVU98lbx6izjafvjepGeapikTramEo%2BU7fKT7vU%20wcY2a566V156Qp1rfKOmqJvlo%2FpwDvClqWPU3fLQM%2BpUk1hbo26XfzarQ02kj7pd%2FsmpM02kso26%20X94Zpc40mfEd1A3zTf36CgiCI9QN801PdaIJLVmn7phnnlcnmtTj6o55Zqs60KRmsD6koLaoA03s%20XXXL%2FFKxTR1oUoPfVvfML6leEBhqo7plflmtzjOxrlwLKKj69HPQF7aoW%2BaXdjl1oEkdrW6ZZ65T%20B5rUgM%2FVLfPMk%2BpEk5qn7phnajaoE01osbpj3tmxU51pIv2L1A3zTtXGtSvL1bnGd466X7Crason%20U%2FMNwPvqAmHd031mmQfgNnV1cOCvh5sPAtS1wYV%2BrYwT0FJdG1xoaDwu3aUuDU4cbxqATerK4ETL%20wYYBuFxdGdx41jAAL6sLgxudSsMHoKu6MDhSHT4A7dV1wZEyw3cANwpnRDfDAAxSFwY3KkrCB%2BAm%20dWFwZGz4AHykrguO3BM%2BAG3VdcGRQ8IHYJ66LjhyKwOQbW%2FyFZBtCzgIzDROAzPuVS4EZdsnhgFY%20ri4MbjwUnn8TdV1wo4VhUdhodWFw4znDNwALQrJhiGldMEvCsqG7If%2FgHXVlcOEtloVn2pQZpvyD%20m9W1wb4LFhjz36yuDdY9fUWJMf%2FgA3V1sKtq9db9gjyGqguENTU7XphUEkTgvRHemn1vVPgBd4d7%207ONcjPx5SJS3esR7TtEwdZ2w44LGsfLvwoMi%2FfT5ybHyD0aqC4UdV8TLP7hfXSismDY4Xv6jeUyk%20n16J%2BQ%2FgMnWhsOOhePkP6K0uFFZUzIo3ACepC4Udh8bLf8YQdaGwoyzeADyhrhOWHBUr%2F5VV6jph%20yV2xBuBBdZmw5dQ4%2BXfkGoC3%2FhYj%2F1HXqKuENXG%2BAl5TFwl7Yry56tQadZGwp09k%2Fiu4Jdhn3aLy%20b%2FKiukTYNC3iUnDjt9QVwq6BefMv%2Bbu6Plj2j7z591CXB9umDTDn3%2BoqdXWwr8yY%2F1ReFZoFn482%205P%2FPT9WlwYkPK8Pi3%2FkvdV1wpfNXbwypvJiXRGbI%2FNze8Y9a8291SXDq6j3eD1D68mHr1PXAtZrP%207t5%2F1qKlcz94YjiX%2FgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%20AAAAAAAAAAAAAAAAAAAAgMJ%2FAMjiuraoNDRYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAyLTIy%20VDA5OjE5OjU2KzAzOjAwqD%2B%2F9QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMi0yMlQwOToxOTo1%20NiswMzowMNliB0kAAAAASUVORK5CYII%3D;base64,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HADic9O9TQfX8bHANXwKWBkBBGYgYN/2zda7xek3ZvBiXoJA4QXu+RuA6X8KWL3unTYY+Vjhp2ZABBBAICcB34iuFJGPSKxfyaklbRDIReA+AWC6YzzZ+aSZvimX7jRBAAEECilgfVX5fNJonSZOv1XIERkKgXkKbBUAxNsCUfm4W58eN8/avB0BBBAok8DAN6L/EJEpUTlPnHbKNDyzIjBbga0DwN0VEnOun54uIg+ZbVFejwACCJRDwG5Sla8lS1pfk55cLCv15nLMzZQIzF9g2wFguvaFtov0ZSzup69KmtG+rpfuJiLbf8/8Z6ICAgggkJVAV0Q2idgfVPTGpBHdKCPyMxnIdbJRrpUV+pusGlEHgbIJ8F/mZbsY8yKAAAIIIJCBAAEgA0RKIIAAAgggUDYBAkDZLsa8CCCAAAIIZCBAAMgAkRIIIIAAAgiUTYAAULaLMS8CCCCAAAIZCBAAMkCkBAIIIIAAAmUTIACU7WLMiwACCCCAQAYCBIAMECmBAAIIIIBA2QQIAGW7GPMigAACCCCQgQABIANESiCAAAIIIFA2AQJA2S7GvAgggAACCGQgQADIAJESCCCAAAIIlE2AAFC2izEvAggggAACGQgQADJApAQCCCCAAAJlEyAAlO1izIsAAggggEAGAgSADBApgQACCCCAQNkECABluxjzIoAAAgggkIEAASADREoggAACCCBQNgECQNkuxrwIIIAAAghkIEAAyACREggggAACCJRNgABQtosxLwIIIIAAAhkIEAAyQKQEAggggAACZRMgAJTtYsyLAAIIIIBABgIEgAwQKYEAAggggEDZBAgAZbsY8yKAAAIIIJCBAAEgA0RKIIAAAgggUDYBAkDZLsa8CCCAAAIIZCBAAMgAkRIIIIAAAgiUTYAAULaLMS8CCCCAAAIZCBAAMkCkBAIIIIAAAmUTIACU7WLMiwACCCCAQAYCBIAMECmBAAIIIIBA2QQIAGW7GPMigAACCCCQgQABIANESiCAAAIIIFA2AQJA2S7GvAgggAACCGQgQADIAJESCCCAAAIIlE2AAFC2izEvAggggAACGQgQADJApAQCCCCAAAJlEyAAlO1izIsAAggggEAGAgSADBApgQACCCCAQNkECABluxjzIoAAAgggkIEAASADREoggAACCCBQNgECQNkuxrwIIIAAAghkIEAA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" y="144"/>\r
 </g>\r
</svg>`, W = `<?xml version="1.0" encoding="utf-8"?>\r
<!-- (c) ammap.com | SVG weather icons -->\r
<!-- Severe Thunderstorm | Contributed by hsoJ95 on GitHub: https://github.com/hsoj95 -->\r
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewbox="0 0 64 64">\r
    <defs>\r
        <filter id="blur" width="200%" height="200%">\r
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />\r
            <feOffset dx="0" dy="4" result="offsetblur" />\r
            <feComponentTransfer>\r
                <feFuncA type="linear" slope="0.05" />\r
            </feComponentTransfer>\r
            <feMerge>\r
                <feMergeNode/>\r
                <feMergeNode in="SourceGraphic" />\r
            </feMerge>\r
        </filter>\r
    </defs>\r
    <g filter="url(#blur)" id="thunder">\r
        <g transform="translate(20,10)">\r
            <g class="am-weather-cloud-1">\r
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"\r
                    fill="#666" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-6), scale(0.6)"\r
                />\r
            </g>\r
            <g>\r
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"\r
                    fill="#333" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" />\r
            </g>\r
            <g transform="translate(-9,28), scale(1.2)">\r
                <polygon class="am-weather-stroke" fill="orange" stroke="white" stroke-width="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9"\r
                />\r
            </g>\r
            <g id="error" transform="translate(23, 25)">\r
                <path d="M7.77911118,2.90598694 L1.78786622,13.0231308 L1.78786622,13.0231308 C1.2250391,13.9735514 1.53924574,15.2002811 2.48966639,15.7631082 C2.79820001,15.9458179 3.15018031,16.0422194 3.50875504,16.0422194 L15.491245,16.0422194 L15.491245,16.0422194 C16.5958145,16.0422194 17.491245,15.1467889 17.491245,14.0422194 C17.491245,13.6836447 17.3948435,13.3316644 17.2121338,13.0231308 L11.2208888,2.90598694 L11.2208888,2.90598694 C10.6580617,1.95556629 9.431332,1.64135966 8.48091135,2.20418678 C8.19172737,2.37543789 7.95036229,2.61680296 7.77911118,2.90598694 Z"\r
                    id="Shape" fill="#CC0000" fill-rule="nonzero"></path>\r
                <path d="M9.5,10.5 L9.5,5.5" id="Line" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"></path>\r
                <circle id="Oval" fill="#FFFFFF" cx="9.5" cy="13" r="1"></circle>\r
            </g>\r
        </g>\r
    </g>\r
</svg>`, dA = {
  clear: q,
  cloudy: M,
  fog: U,
  hail: L,
  partlycloudy: T,
  pouring: R,
  rainy: z,
  snowy: Z,
  snowyrainy: K,
  sunny: G,
  windy: V,
  exceptional: W
}, hA = {
  clear: q,
  cloudy: M,
  fog: U,
  hail: L,
  partlycloudy: T,
  pouring: R,
  rainy: z,
  snowy: Z,
  snowyrainy: K,
  sunny: G,
  windy: V,
  exceptional: W
}, wA = {
  clear: q,
  cloudy: M,
  fog: U,
  hail: L,
  partlycloudy: T,
  pouring: R,
  rainy: z,
  snowy: Z,
  snowyrainy: K,
  sunny: G,
  windy: V,
  exceptional: W
}, pA = {
  clear: q,
  cloudy: M,
  fog: U,
  hail: L,
  partlycloudy: T,
  pouring: R,
  rainy: z,
  snowy: Z,
  snowyrainy: K,
  sunny: G,
  windy: V,
  exceptional: W
}, QA = {
  clear: q,
  cloudy: M,
  fog: U,
  hail: L,
  partlycloudy: T,
  pouring: R,
  rainy: z,
  snowy: Z,
  snowyrainy: K,
  sunny: G,
  windy: V,
  exceptional: W
};
function rt(n, A) {
  const t = n.weather?.icons_model?.toLowerCase(), e = {
    iconType: n.animation ? "animated" : "static",
    icons_model: "climacell",
    iconsDay: dA,
    iconsNight: dA,
    path: A
  };
  switch (t) {
    case "darksky":
      return {
        ...e,
        icons_model: "darksky",
        iconsDay: hA,
        iconsNight: hA
      };
    case "openweathermap":
      return {
        ...e,
        icons_model: "openweathermap",
        iconsDay: wA,
        iconsNight: wA
      };
    case "buienradar":
      return {
        ...e,
        icons_model: "buienradar",
        iconsDay: pA,
        iconsNight: pA
      };
    case "defaulthass":
      return {
        ...e,
        icons_model: "defaulthass",
        iconsDay: QA,
        iconsNight: QA
      };
    default:
      return e;
  }
}
const uA = {
  // HACS installation path
  HACS_IMAGE_PATH: "/local/community/ha-card-weather-conditions",
  // Manual installation path
  MANUAL_IMAGE_PATH: "/local/ha-card-weather-conditions"
}, st = `{\r
  "cwcLocWindDirections": {\r
    "N": "N",\r
    "NNE": "NNE",\r
    "NE": "NE",\r
    "ENE": "ENE",\r
    "E": "E",\r
    "ESE": "ESE",\r
    "SE": "SE",\r
    "SSE": "SSE",\r
    "S": "S",\r
    "SSW": "SSW",\r
    "SW": "SW",\r
    "WSW": "WSW",\r
    "W": "W",\r
    "WNW": "WNW",\r
    "NW": "NW",\r
    "NNW": "NNW"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Feels Like",\r
    "new_moon": "New moon",\r
    "new": "New moon",\r
    "waxing_crescent": "Waxing crescent",\r
    "first_quarter": "First quarter",\r
    "waxing_gibbous": "Waxing Gibbous",\r
    "full": "Full",\r
    "full_moon": "Full",\r
    "waning_gibbous": "Waning Gibbous",\r
    "third_quarter": "Third Quarter",\r
    "last_quarter": "Last Quarter",\r
    "waning_crescent": "Waning Crescent"\r
  }\r
}`, it = `{\r
  "cwcLocWindDirections": {\r
    "N": "N", \r
    "NNE": "NNE",\r
    "NE": "NE", \r
    "ENE": "ENE", \r
    "E": "E",\r
    "ESE": "ESE", \r
    "SE": "SE", \r
    "SSE": "SSE",\r
    "S": "S", \r
    "SSW": "SSO", \r
    "SW": "SO", \r
    "WSW": "OSO", \r
    "W": "O", \r
    "WNW": "ONO", \r
    "NW": "NO", \r
    "NNW": "NNO"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Percepita", \r
    "new_moon": "Novilunio", \r
    "new": "Novilunio", \r
    "waxing_crescent": "Luna crescente", \r
    "first_quarter": "Primo Quarto",\r
    "waxing_gibbous": "Gibbosa crescente", \r
    "full": "Luna piena",\r
    "full_moon": "Luna piena",\r
    "waning_gibbous": "Gibbosa calante", \r
    "third_quarter": "Ultimo quarto", \r
    "last_quarter": "Ultimo quarto", \r
    "waning_crescent": "Luna calante"\r
  }\r
}`, ot = `{\r
  "cwcLocWindDirections": {\r
    "N": "N",\r
    "NNE": "NNO",\r
    "NE": "NO",\r
    "ENE": "ONO",\r
    "E": "O",\r
    "ESE": "OZO",\r
    "SE": "ZO",\r
    "SSE": "ZZO",\r
    "S": "Z",\r
    "SSW": "ZZW",\r
    "SW": "ZW",\r
    "WSW": "WZW",\r
    "W": "W",\r
    "WNW":  "WNW",\r
    "NW": "NW",\r
    "NNW": "NNW"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like": "Voelt Als",\r
    "new_moon": "Nieuwe maan",\r
    "new": "Nieuwe maan",\r
    "waxing_crescent": "Wassende sikkel",\r
    "first_quarter": "Eerste kwartier",\r
    "waxing_gibbous": "Wassende maan",\r
    "full": "Volle maan",\r
    "full_moon": "Volle maan",\r
    "waning_gibbous": "Afnemende maan",\r
    "third_quarter": "Derde kwartier",\r
    "last_quarter": "Laatste kwartier",\r
    "waning_crescent": "Afnemende sikkel"\r
  }\r
}\r
`, at = `{\r
  "cwcLocWindDirections": {\r
    "N": "N",\r
    "NNE": "NNE",\r
    "NE": "NE",\r
    "ENE": "ENE",\r
    "E": "E",\r
    "ESE": "ESE",\r
    "SE": "SE",\r
    "SSE": "SSE",\r
    "S": "S",\r
    "SSW": "SSO",\r
    "SW": "SO",\r
    "WSW": "OSO",\r
    "W": "O",\r
    "WNW": "ONO",\r
    "NW": "NO",\r
    "NNW": "NNO"\r
  },\r
  \r
  "cwcTerms": {\r
    "Feels Like" : "Sensación térmica",\r
    "new_moon": "Luna nueva",\r
    "new": "Luna nueva",\r
    "waxing_crescent": "Luna creciente",\r
    "first_quarter": "Cuarto creciente",\r
    "waxing_gibbous": "Luna menguante gibosa",\r
    "full": "Luna llena",\r
    "full_moon": "Luna llena",\r
    "waning_gibbous": "Luna menguante gibosa",\r
    "third_quarter": "Media luna",\r
    "last_quarter": "Cuarto menguante",\r
    "waning_crescent": "Luna menguante"\r
  }\r
}`, gt = `{\r
  "cwcLocWindDirections": {\r
    "N": "N", \r
    "NNE": "NNO", \r
    "NE": "NO",\r
    "ENE": "ONO", \r
    "E": "O", \r
    "ESE": "OSO", \r
    "SE": "SO",\r
    "SSE": "SSO", \r
    "S": "S", \r
    "SSW": "SSW", \r
    "SW": "SW", \r
    "WSW": "WSW", \r
    "W": "W",\r
    "WNW": "WNW", \r
    "NW": "NW",\r
    "NNW": "NNW"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Gefühlt",\r
    "new_moon": "Neumond",\r
    "new": "Neumond",\r
    "waxing_crescent": "Zunehmende Sichel",\r
    "first_quarter": "Erstes Viertel",\r
    "waxing_gibbous": "Zunehmender Halbmond",\r
    "full": "Vollmond",\r
    "full_moon": "Vollmond",\r
    "waning_gibbous": "Abnehmender Halbmond",\r
    "third_quarter": "Drittes Viertel",\r
    "last_quarter": "Letztes Viertel",\r
    "waning_crescent": "Abnehmende Sichel"\r
  }\r
}`, lt = `{\r
  "cwcLocWindDirections": {\r
    "N": "N",\r
    "NNE": "NNE",\r
    "NE": "NE",\r
    "ENE": "ENE",\r
    "E": "E",\r
    "ESE": "ESE",\r
    "SE": "SE",\r
    "SSE": "SSE",\r
    "S": "S",\r
    "SSW": "SSO",\r
    "SW": "SO",\r
    "WSW": "OSO",\r
    "W": "O",\r
    "WNW": "ONO",\r
    "NW": "NO",\r
    "NNW": "NNO"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Ressentie", \r
    "new_moon": "Nouvelle lune", \r
    "new": "Nouvelle lune", \r
    "waxing_crescent": "Premier croissant", \r
    "first_quarter": "Premier quartier",\r
    "waxing_gibbous": "Gibbeuse croissante",\r
    "full": "Pleine lune",\r
    "full_moon": "Pleine lune",\r
    "waning_gibbous": "Gibbeuse décroissante",\r
    "third_quarter": "Dernier quartier",\r
    "last_quarter": "Dernier quartier",\r
    "waning_crescent": "Lune décroissante"\r
  }\r
}`, Bt = `{\r
  "cwcLocWindDirections": {\r
    "N": "S",\r
    "NNE": "SSI",\r
    "NE": "SI",\r
    "ENE": "ISI",\r
    "E": "I",\r
    "ESE": "IJI",\r
    "SE": "JI",\r
    "SSE": "JJI",\r
    "S": "J",\r
    "SSW": "JJZ",\r
    "SW": "JZ",\r
    "WSW": "ZSZ",\r
    "W": "Z",\r
    "WNW": "ZSZ",\r
    "NW": "SZ",\r
    "NNW": "SSZ"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Subjektivni osećaj",\r
    "new_moon": "Mlad mesec",\r
    "new": "Mlad mesec",\r
    "waxing_crescent": "Prva osmina",\r
    "first_quarter": "Prva četvrt",\r
    "waxing_gibbous": "Treća osmina",\r
    "full": "Pun mesec",\r
    "full_moon": "Pun mesec",\r
    "waning_gibbous": "Peta osmina",\r
    "third_quarter": "Treća četvrtina",\r
    "last_quarter": "Zadnja četvrtina",\r
    "waning_crescent": "Sedma osmina"\r
  }\r
}`, Ct = `{\r
  "cwcLocWindDirections": {\r
    "N": "N",\r
    "NNE": "NNE",\r
    "NE": "NE",\r
    "ENE": "ENE",\r
    "E": "E",\r
    "ESE": "ESE",\r
    "SE": "SE",\r
    "SSE": "SSE",\r
    "S": "S",\r
    "SSW": "SSW",\r
    "SW": "SW",\r
    "WSW": "WSW",\r
    "W": "W",\r
    "WNW": "WNW",\r
    "NW": "NW",\r
    "NNW": "NNW"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Sentida",\r
    "new_moon": "Lua Nova",\r
    "new": "Lua nova",\r
    "waxing_crescent": "Lua Crescente",\r
    "first_quarter": "Quarto Crescente",\r
    "waxing_gibbous": "Crescente Gibosa",\r
    "full": "Lua Cheia",\r
    "full_moon": "Lua Cheia",\r
    "waning_gibbous": "Minguante Gibosa",\r
    "third_quarter": "Quarto Minguante",\r
    "last_quarter": "Quarto Minguante",\r
    "waning_crescent": "Lua Minguante"\r
  }\r
}`, ct = `{\r
  "cwcLocWindDirections": {\r
    "N": "N",\r
    "NNE": "NNØ",\r
    "NE": "NØ",\r
    "ENE": "ØNØ",\r
    "E": "Ø",\r
    "ESE": "ØSØ",\r
    "SE": "SØ",\r
    "SSE": "SSØ",\r
    "S": "S",\r
    "SSW": "SSV",\r
    "SW": "SV",\r
    "WSW": "VSV",\r
    "W": "V",\r
    "WNW": "VNV",\r
    "NW": "NV",\r
    "NNW": "NNV"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Føles som",\r
    "new_moon": "Nymåne",\r
    "new": "Nymåne",\r
    "waxing_crescent": "Tiltagende halvmåne",\r
    "first_quarter": "Første kvartal",\r
    "waxing_gibbous": "Tiltagende måne",\r
    "full": "Fuldmåne",\r
    "full_moon": "Fuldmåne",\r
    "waning_gibbous": "Aftagende måne",\r
    "third_quarter": "Tredje kvartal",\r
    "last_quarter": "Sidste kvartal",\r
    "waning_crescent": "Aftagende halvmåne"\r
  }\r
}`, It = `{\r
  "cwcLocWindDirections": {\r
    "N": "N",\r
    "NNE": "NNØ",\r
    "NE": "NØ",\r
    "ENE": "ØNØ",\r
    "E": "Ø",\r
    "ESE": "ØSØ",\r
    "SE": "SØ",\r
    "SSE": "SSØ",\r
    "S": "S",\r
    "SSW": "SSV",\r
    "SW": "SV",\r
    "WSW": "VSV",\r
    "W": "V",\r
    "WNW": "VNV",\r
    "NW": "NV",\r
    "NNW": "NNV"\r
  },\r
\r
  "cwcTerms": {\r
    "Feels Like" : "Føles som",\r
    "new_moon": "Nymåne",\r
    "new": "Nymåne",\r
    "waxing_crescent": "Tiltagende halvmåne",\r
    "first_quarter": "Første kvartal",\r
    "waxing_gibbous": "Tiltagende måne",\r
    "full": "Fullmåne",\r
    "full_moon": "Fullmåne",\r
    "waning_gibbous": "Avtagende måne",\r
    "third_quarter": "Tredje kvartal",\r
    "last_quarter": "Sidste kvartal",\r
    "waning_crescent": "Avtagende halvmåne"\r
  }\r
}`, tA = {
  en: JSON.parse(st),
  it: JSON.parse(it),
  nl: JSON.parse(ot),
  es: JSON.parse(at),
  de: JSON.parse(gt),
  fr: JSON.parse(lt),
  sr: JSON.parse(Bt),
  pt: JSON.parse(Ct),
  da: JSON.parse(ct),
  no: JSON.parse(It)
}, eA = "en", ft = [
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
], Et = {
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
}, dt = {
  humidity: "Humidity",
  pressure: "Pressure",
  visibility: "Visibility",
  wind: "Wind",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
function ht() {
  const n = [uA.HACS_IMAGE_PATH, uA.MANUAL_IMAGE_PATH];
  return FA(n[1]) ? (console.log(`Found valid image directory via manual installation: ${n[1]}`), n[1]) : FA(n[0]) ? (console.log(`Found valid image directory via HACS: ${n[0]}`), n[0]) : (console.warn("No valid image directories found"), "");
}
function FA(n) {
  return n === "/local/ha-card-weather-conditions";
}
function wt(n) {
  if (!n) return eA;
  const A = n.toLowerCase();
  return Object.keys(tA).includes(A) ? A : eA;
}
async function pt(n) {
  const A = tA[n] || tA[eA];
  return {
    ...Et,
    ...A,
    windDirections: A.windDirections || ft,
    words: {
      ...dt,
      ...A.words || {}
    }
  };
}
function Qt(n) {
  if (!n)
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
  const A = n.weather || {}, t = n.pollen, e = !!A.current, r = !!A.forecast, s = r && !!A.forecast?.meteogram, i = !!n.air_quality, a = !!t && (!!t.tree || !!t.weed || !!t.grass), o = !!n.uv, B = !!n.alert, C = !!n.sea;
  return {
    hasCurrent: e,
    hasForecast: r,
    hasMeteogram: s,
    hasAirQuality: i,
    hasPollen: a,
    hasUv: o,
    hasAlert: B,
    hasSea: C
  };
}
async function ut(n, A) {
  if (!n) throw new Error("Invalid configuration");
  const t = {
    ...n,
    name: n.name || "",
    language: wt(n.language),
    display: n.display || ["top", "current", "forecast"]
  }, e = Qt(t), r = rt(t, A), s = await pt(t.language ?? "en");
  return {
    config: t,
    iconConfig: r,
    flags: e,
    terms: s
  };
}
const Ft = k`
  .weather-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--card-background-color);
    border-radius: 8px;
    box-shadow: var(--card-box-shadow);
  }
`, mt = k`
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
`, vt = k`
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
`, St = k`
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
`, kt = k`
  .camera {
    position: relative;
    width: 100%;
    height: auto;
  }

  .camera img {
    width: 100%;
    border-radius: 8px;
  }
`, yt = k`
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
`, Ot = [
  Ft,
  mt,
  vt,
  St,
  kt,
  yt
];
function Dt(n, A) {
  const t = A.weather?.forecast, e = t?.temperature_high || {}, r = t?.temperature_low || {}, s = t?.condition || {};
  return {
    daily: Object.keys(e).map((a) => {
      const o = e[a], B = r[a], C = s[a], g = o ? parseFloat(n.states[o]?.state || "0") : 0, I = B ? parseFloat(n.states[B]?.state || "0") : 0, f = C && n.states[C]?.state || "clear";
      return {
        date: a,
        condition: f,
        high: g,
        low: I
      };
    })
  };
}
function xt({ hass: n, config: A, icons: t, terms: e }) {
  const r = A.weather?.current?.temperature, s = r ? n.states[r] : void 0;
  if (!s) return l``;
  const i = s.state, a = s.attributes?.weather || "unknown", o = t.iconsDay[a] || t.iconsDay.clear;
  return l`
    <div class="summary">
      <div class="temp">
        ${i}
        <span class="unit">°</span>
      </div>
      <div class="state">${e.words?.[a] || a}</div>
      <img class="icon" src="${t.path}/${o}" />
    </div>
  `;
}
function Nt({ hass: n, config: A, terms: t }) {
  const e = A.weather?.current;
  if (!e) return l``;
  const r = (s) => s ? n.states[s]?.state ?? "-" : "-";
  return l`
    <div class="present">
      <div>${t.words.temperature ?? "Temp"}: ${r(e.temperature)}°</div>
      <div>${t.words.humidity ?? "Humidity"}: ${r(e.humidity)}%</div>
      <div>${t.words.pressure ?? "Pressure"}: ${r(e.pressure)} hPa</div>
      <div>${t.words.wind ?? "Wind"}: ${r(e.wind_speed)} km/h</div>
    </div>
  `;
}
function Pt(n) {
  return n?.daily?.length ? l`
    <div class="forecast">
      ${n.daily.map((A) => l`
        <div class="day">
          <span class="date">${A.date}</span>
          <span class="condition">${A.condition}</span>
          <span class="high">${A.high}°</span>
          <span class="low">${A.low}°</span>
        </div>
      `)}
    </div>
  ` : l``;
}
function bt({ hass: n, config: A }) {
  const t = A.pollen;
  if (!t) return l``;
  const e = (r) => {
    const s = t[r]?.entity;
    return s ? n.states[s]?.state ?? "-" : "-";
  };
  return l`
    <div class="pollen">
      <div>🌲 Tree: ${e("tree")}</div>
      <div>🌿 Weed: ${e("weed")}</div>
      <div>🌾 Grass: ${e("grass")}</div>
    </div>
  `;
}
function Jt({ hass: n, config: A }) {
  const t = A.air_quality;
  if (!t) return l``;
  const e = (r) => {
    const s = t[r];
    return s ? n.states[s]?.state ?? "-" : "-";
  };
  return l`
    <div class="air-quality">
      <div>PM2.5: ${e("pm25")} μg/m³</div>
      <div>PM10: ${e("pm10")} μg/m³</div>
      <div>O₃: ${e("o3")} μg/m³</div>
      <div>NO₂: ${e("no2")} μg/m³</div>
      <div>SO₂: ${e("so2")} μg/m³</div>
      <div>CO: ${e("co")} μg/m³</div>
      <div>AQI: ${e("epa_aqi")}</div>
      <div>Concern: ${e("epa_health_concern")}</div>
    </div>
  `;
}
function Xt({ hass: n, config: A }) {
  const t = A.uv;
  if (!t) return l``;
  const e = (r) => {
    const s = t[r];
    return s ? n.states[s]?.state ?? "-" : "-";
  };
  return l`
    <div class="uv">
      <div>🌞 UV Index: ${e("uv_index")}</div>
      <div>Max UV: ${e("max_uv_index")}</div>
      <div>Level: ${e("uv_level")}</div>
      <div>Protection: ${e("protection_window")}</div>
      <div>Ozone: ${e("ozone_level")} DU</div>
    </div>
  `;
}
function qt({ hass: n, config: A }) {
  const t = A.alert;
  if (!t) return l``;
  const e = n.states[t];
  return !e || e.state === "off" ? l`` : l`
    <div class="alert">
      <div class="title">🚨 Alert Active</div>
      <div class="description">${e.attributes.message || "Details not available."}</div>
    </div>
  `;
}
function Mt({ hass: n, config: A }) {
  const t = A.sea;
  if (!t) return l``;
  const e = n.states[t];
  return e ? l`
    <div class="sea">
      <div>🌊 Sea State: ${e.state}</div>
      ${e.attributes.wave_height ? l`<div>Height: ${e.attributes.wave_height} m</div>` : ""}
      ${e.attributes.wave_period ? l`<div>Period: ${e.attributes.wave_period} s</div>` : ""}
    </div>
  ` : l``;
}
var DA = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, Lt = (n, A, t) => A in n ? DA(n, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[A] = t, F = (n, A, t, e) => {
  for (var r = e > 1 ? void 0 : e ? Ut(A, t) : A, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (r = (e ? i(A, t, r) : i(r)) || r);
  return e && r && DA(A, t, r), r;
}, Tt = (n, A, t) => Lt(n, A + "", t);
let E = class extends x {
  constructor() {
    super(...arguments);
    w(this, "hass");
    w(this, "config");
    w(this, "iconConfig");
    w(this, "flags");
    w(this, "terms");
    w(this, "invalidConfig", !1);
  }
  async setConfig(A) {
    try {
      const t = ht(), { config: e, iconConfig: r, flags: s, terms: i } = await ut(A, t || "");
      this.config = e, this.iconConfig = r, this.flags = s, this.terms = i, this.requestUpdate();
    } catch (t) {
      console.error("Error in setConfig:", t), this.invalidConfig = !0, this.requestUpdate();
    }
  }
  getCardSize() {
    return 2;
  }
  render() {
    const { hass: A, config: t, iconConfig: e, terms: r, flags: s } = this;
    if (!A || !t || !e || !r || !s)
      return l`
        <ha-card class="ha-card-weather-conditions">
          <div class="content">Loading weather card...</div>
        </ha-card>
      `;
    if (this.invalidConfig)
      return l`
        <ha-card class="ha-card-weather-conditions">
          <div class="banner">
            <div class="header">ha-card-weather-conditions</div>
          </div>
          <div class="content">Configuration ERROR!</div>
        </ha-card>
      `;
    const i = { hass: A, config: t, terms: r, icons: e };
    return l`
      <ha-card class="ha-card-weather-conditions">
        <div class="nd-container">
          ${s.hasCurrent ? xt(i) : ""}
          ${s.hasCurrent ? Nt(i) : ""}
          ${s.hasForecast ? Pt(Dt(A, t)) : ""}
          ${s.hasAlert ? qt({ hass: A, config: t }) : ""}
          ${s.hasAirQuality ? Jt(i) : ""}
          ${s.hasPollen ? bt(i) : ""}
          ${s.hasUv ? Xt(i) : ""}
          ${s.hasSea ? Mt({ hass: A, config: t }) : ""}
        </div>
      </ha-card>
    `;
  }
};
Tt(E, "styles", Ot);
F([
  OA({ attribute: !1 })
], E.prototype, "hass", 2);
F([
  X()
], E.prototype, "config", 2);
F([
  X()
], E.prototype, "iconConfig", 2);
F([
  X()
], E.prototype, "flags", 2);
F([
  X()
], E.prototype, "terms", 2);
F([
  X()
], E.prototype, "invalidConfig", 2);
E = F([
  tt("ha-card-weather-conditions")
], E);
export {
  E as HaCardWeatherConditions
};
