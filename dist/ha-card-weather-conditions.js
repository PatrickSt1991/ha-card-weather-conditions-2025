var dt = Object.defineProperty;
var ht = (i, t, e) => t in i ? dt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var m = (i, t, e) => ht(i, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis, B = z.ShadowRoot && (z.ShadyCSS === void 0 || z.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, F = Symbol(), J = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== F) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (B && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = J.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && J.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ut = (i) => new it(typeof i == "string" ? i : i + "", void 0, F), C = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, n, r) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[r + 1], i[0]);
  return new it(e, i, F);
}, gt = (i, t) => {
  if (B) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), n = z.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = e.cssText, i.appendChild(s);
  }
}, Q = B ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return ut(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: pt, defineProperty: yt, getOwnPropertyDescriptor: vt, getOwnPropertyNames: ft, getOwnPropertySymbols: $t, getPrototypeOf: mt } = Object, $ = globalThis, K = $.trustedTypes, _t = K ? K.emptyScript : "", wt = $.reactiveElementPolyfillSupport, N = (i, t) => i, k = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? _t : null;
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
} }, V = (i, t) => !pt(i, t), Z = { attribute: !0, type: String, converter: k, reflect: !1, hasChanged: V };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), $.litPropertyMetadata ?? ($.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
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
      n !== void 0 && yt(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: n, set: r } = vt(this.prototype, t) ?? { get() {
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
    if (this.hasOwnProperty(N("elementProperties"))) return;
    const t = mt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(N("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(N("properties"))) {
      const e = this.properties, s = [...ft(e), ...$t(e)];
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
      for (const n of s) e.unshift(Q(n));
    } else t !== void 0 && e.push(Q(t));
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
    return gt(t, this.constructor.elementStyles), t;
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
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : k).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, n = s._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : k;
      this._$Em = n, this[n] = o.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? V)(this[t], e)) return;
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
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[N("elementProperties")] = /* @__PURE__ */ new Map(), b[N("finalized")] = /* @__PURE__ */ new Map(), wt?.({ ReactiveElement: b }), ($.reactiveElementVersions ?? ($.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O = globalThis, j = O.trustedTypes, G = j ? j.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, rt = "?" + f, At = `<${rt}>`, A = document, U = () => A.createComment(""), D = (i) => i === null || typeof i != "object" && typeof i != "function", q = Array.isArray, St = (i) => q(i) || typeof i?.[Symbol.iterator] == "function", W = `[ 	
\f\r]`, P = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, X = /-->/g, Y = />/g, _ = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, et = /"/g, ot = /^(?:script|style|textarea|title)$/i, bt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), d = bt(1), E = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), w = A.createTreeWalker(A, 129);
function at(i, t) {
  if (!q(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(t) : t;
}
const Et = (i, t) => {
  const e = i.length - 1, s = [];
  let n, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = P;
  for (let c = 0; c < e; c++) {
    const a = i[c];
    let h, u, l = -1, p = 0;
    for (; p < a.length && (o.lastIndex = p, u = o.exec(a), u !== null); ) p = o.lastIndex, o === P ? u[1] === "!--" ? o = X : u[1] !== void 0 ? o = Y : u[2] !== void 0 ? (ot.test(u[2]) && (n = RegExp("</" + u[2], "g")), o = _) : u[3] !== void 0 && (o = _) : o === _ ? u[0] === ">" ? (o = n ?? P, l = -1) : u[1] === void 0 ? l = -2 : (l = o.lastIndex - u[2].length, h = u[1], o = u[3] === void 0 ? _ : u[3] === '"' ? et : tt) : o === et || o === tt ? o = _ : o === X || o === Y ? o = P : (o = _, n = void 0);
    const y = o === _ && i[c + 1].startsWith("/>") ? " " : "";
    r += o === P ? a + At : l >= 0 ? (s.push(h), a.slice(0, l) + nt + a.slice(l) + f + y) : a + f + (l === -2 ? c : y);
  }
  return [at(i, r + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class H {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let r = 0, o = 0;
    const c = t.length - 1, a = this.parts, [h, u] = Et(t, e);
    if (this.el = H.createElement(h, s), w.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (n = w.nextNode()) !== null && a.length < c; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const l of n.getAttributeNames()) if (l.endsWith(nt)) {
          const p = u[o++], y = n.getAttribute(l).split(f), R = /([.?@])?(.*)/.exec(p);
          a.push({ type: 1, index: r, name: R[2], strings: y, ctor: R[1] === "." ? Ct : R[1] === "?" ? Pt : R[1] === "@" ? Nt : L }), n.removeAttribute(l);
        } else l.startsWith(f) && (a.push({ type: 6, index: r }), n.removeAttribute(l));
        if (ot.test(n.tagName)) {
          const l = n.textContent.split(f), p = l.length - 1;
          if (p > 0) {
            n.textContent = j ? j.emptyScript : "";
            for (let y = 0; y < p; y++) n.append(l[y], U()), w.nextNode(), a.push({ type: 2, index: ++r });
            n.append(l[p], U());
          }
        }
      } else if (n.nodeType === 8) if (n.data === rt) a.push({ type: 2, index: r });
      else {
        let l = -1;
        for (; (l = n.data.indexOf(f, l + 1)) !== -1; ) a.push({ type: 7, index: r }), l += f.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function x(i, t, e = i, s) {
  if (t === E) return t;
  let n = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const r = D(t) ? void 0 : t._$litDirective$;
  return n?.constructor !== r && (n?._$AO?.(!1), r === void 0 ? n = void 0 : (n = new r(i), n._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = n : e._$Cl = n), n !== void 0 && (t = x(i, n._$AS(i, t.values), n, s)), t;
}
class xt {
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
        let h;
        a.type === 2 ? h = new I(r, r.nextSibling, this, t) : a.type === 1 ? h = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (h = new Ot(r, this, t)), this._$AV.push(h), a = s[++c];
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
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    t = x(this, t, e), D(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : t !== this._$AH && t !== E && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : St(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== g && D(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = H.createElement(at(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(e);
    else {
      const r = new xt(n, this), o = r.u(this.options);
      r.p(e), this.T(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = st.get(t.strings);
    return e === void 0 && st.set(t.strings, e = new H(t)), e;
  }
  k(t) {
    q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const r of t) n === e.length ? e.push(s = new I(this.O(U()), this.O(U()), this, this.options)) : s = e[n], s._$AI(r), n++;
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
class L {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, n, r) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = g;
  }
  _$AI(t, e = this, s, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = x(this, t, e, 0), o = !D(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
    else {
      const c = t;
      let a, h;
      for (t = r[0], a = 0; a < r.length - 1; a++) h = x(this, c[s + a], e, a), h === E && (h = this._$AH[a]), o || (o = !D(h) || h !== this._$AH[a]), h === g ? t = g : t !== g && (t += (h ?? "") + r[a + 1]), this._$AH[a] = h;
    }
    o && !n && this.j(t);
  }
  j(t) {
    t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ct extends L {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
class Pt extends L {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== g);
  }
}
class Nt extends L {
  constructor(t, e, s, n, r) {
    super(t, e, s, n, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = x(this, t, e, 0) ?? g) === E) return;
    const s = this._$AH, n = t === g && s !== g || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== g && (s === g || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ot {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    x(this, t);
  }
}
const Tt = O.litHtmlPolyfillSupport;
Tt?.(H, I), (O.litHtmlVersions ?? (O.litHtmlVersions = [])).push("3.2.1");
const Ut = (i, t, e) => {
  const s = e?.renderBefore ?? t;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = e?.renderBefore ?? null;
    s._$litPart$ = n = new I(t.insertBefore(U(), r), r, void 0, e ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let T = class extends b {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ut(e, this.renderRoot, this.renderOptions);
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
T._$litElement$ = !0, T.finalized = !0, globalThis.litElementHydrateSupport?.({ LitElement: T });
const Dt = globalThis.litElementPolyfillSupport;
Dt?.({ LitElement: T });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = { attribute: !0, type: String, converter: k, reflect: !1, hasChanged: V }, Mt = (i = It, t, e) => {
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
function ct(i) {
  return (t, e) => typeof e == "object" ? Mt(i, t, e) : ((s, n, r) => {
    const o = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, o ? { ...s, wrapped: !0 } : s), o ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function M(i) {
  return ct({ ...i, state: !0, attribute: !1 });
}
const Rt = {
  clear: "day/clear.svg",
  cloudy: "day/cloudy.svg",
  fog: "day/fog.svg",
  hail: "day/hail.svg",
  partlycloudy: "day/partly-cloudy.svg",
  pouring: "day/pouring.svg",
  rainy: "day/rain.svg",
  snowy: "day/snow.svg",
  snowyrainy: "day/sleet.svg",
  sunny: "day/sunny.svg",
  windy: "day/wind.svg",
  exceptional: "day/alert.svg"
}, zt = {
  clear: "night/clear.svg",
  cloudy: "night/cloudy.svg",
  fog: "night/fog.svg",
  hail: "night/hail.svg",
  partlycloudy: "night/partly-cloudy.svg",
  pouring: "night/pouring.svg",
  rainy: "night/rain.svg",
  snowy: "night/snow.svg",
  snowyrainy: "night/sleet.svg",
  sunny: "night/clear.svg",
  windy: "night/wind.svg",
  exceptional: "night/alert.svg"
}, kt = {
  clear: "day/clear.svg",
  cloudy: "day/cloudy.svg",
  fog: "day/fog.svg",
  hail: "day/hail.svg",
  partlycloudy: "day/partly-cloudy.svg",
  pouring: "day/pouring.svg",
  rainy: "day/rain.svg",
  snowy: "day/snow.svg",
  snowyrainy: "day/sleet.svg",
  sunny: "day/sunny.svg",
  windy: "day/wind.svg",
  exceptional: "day/alert.svg"
}, jt = {
  clear: "night/clear.svg",
  cloudy: "night/cloudy.svg",
  fog: "night/fog.svg",
  hail: "night/hail.svg",
  partlycloudy: "night/partly-cloudy.svg",
  pouring: "night/pouring.svg",
  rainy: "night/rain.svg",
  snowy: "night/snow.svg",
  snowyrainy: "night/sleet.svg",
  sunny: "night/clear.svg",
  windy: "night/wind.svg",
  exceptional: "night/alert.svg"
}, Lt = {
  clear: "day/clear.svg",
  cloudy: "day/cloudy.svg",
  fog: "day/fog.svg",
  hail: "day/hail.svg",
  partlycloudy: "day/partly-cloudy.svg",
  pouring: "day/pouring.svg",
  rainy: "day/rain.svg",
  snowy: "day/snow.svg",
  snowyrainy: "day/sleet.svg",
  sunny: "day/sunny.svg",
  windy: "day/wind.svg",
  exceptional: "day/alert.svg"
}, Wt = {
  clear: "night/clear.svg",
  cloudy: "night/cloudy.svg",
  fog: "night/fog.svg",
  hail: "night/hail.svg",
  partlycloudy: "night/partly-cloudy.svg",
  pouring: "night/pouring.svg",
  rainy: "night/rain.svg",
  snowy: "night/snow.svg",
  snowyrainy: "night/sleet.svg",
  sunny: "night/clear.svg",
  windy: "night/wind.svg",
  exceptional: "night/alert.svg"
}, Bt = {
  clear: "day/clear.svg",
  cloudy: "day/cloudy.svg",
  fog: "day/fog.svg",
  hail: "day/hail.svg",
  partlycloudy: "day/partly-cloudy.svg",
  pouring: "day/pouring.svg",
  rainy: "day/rain.svg",
  snowy: "day/snow.svg",
  snowyrainy: "day/sleet.svg",
  sunny: "day/sunny.svg",
  windy: "day/wind.svg",
  exceptional: "day/alert.svg"
}, Ft = {
  clear: "night/clear.svg",
  cloudy: "night/cloudy.svg",
  fog: "night/fog.svg",
  hail: "night/hail.svg",
  partlycloudy: "night/partly-cloudy.svg",
  pouring: "night/pouring.svg",
  rainy: "night/rain.svg",
  snowy: "night/snow.svg",
  snowyrainy: "night/sleet.svg",
  sunny: "night/clear.svg",
  windy: "night/wind.svg",
  exceptional: "night/alert.svg"
}, Vt = {
  clear: "day/clear.svg",
  cloudy: "day/cloudy.svg",
  fog: "day/fog.svg",
  hail: "day/hail.svg",
  partlycloudy: "day/partly-cloudy.svg",
  pouring: "day/pouring.svg",
  rainy: "day/rain.svg",
  snowy: "day/snow.svg",
  snowyrainy: "day/sleet.svg",
  sunny: "day/sunny.svg",
  windy: "day/wind.svg",
  exceptional: "day/alert.svg"
}, qt = {
  clear: "night/clear.svg",
  cloudy: "night/cloudy.svg",
  fog: "night/fog.svg",
  hail: "night/hail.svg",
  partlycloudy: "night/partly-cloudy.svg",
  pouring: "night/pouring.svg",
  rainy: "night/rain.svg",
  snowy: "night/snow.svg",
  snowyrainy: "night/sleet.svg",
  sunny: "night/clear.svg",
  windy: "night/wind.svg",
  exceptional: "night/alert.svg"
};
function Jt(i, t) {
  const e = i.weather?.icons_model?.toLowerCase(), s = {
    iconType: i.animation ? "animated" : "static",
    icons_model: "climacell",
    iconsDay: Rt,
    iconsNight: zt,
    path: t
  };
  switch (e) {
    case "darksky":
      return {
        ...s,
        icons_model: "darksky",
        iconsDay: kt,
        iconsNight: jt
      };
    case "openweathermap":
      return {
        ...s,
        icons_model: "openweathermap",
        iconsDay: Lt,
        iconsNight: Wt
      };
    case "buienradar":
      return {
        ...s,
        icons_model: "buienradar",
        iconsDay: Bt,
        iconsNight: Ft
      };
    case "defaulthass":
      return {
        ...s,
        icons_model: "defaulthass",
        iconsDay: Vt,
        iconsNight: qt
      };
    default:
      return s;
  }
}
const Qt = {
  // Translations folder relative to image path
  TRANSLATIONS_DIR: "/../transl/"
};
async function Kt(i) {
  try {
    const t = await fetch(i);
    if (!t.ok) throw new Error(`Failed to load JSON from ${i}: ${t.statusText}`);
    return await t.json();
  } catch (t) {
    return console.error(`Error loading JSON from ${i}:`, t), null;
  }
}
const Zt = {
  en: 0,
  it: 1,
  nl: 2,
  es: 3,
  de: 4,
  fr: 5,
  "sr-latn": 6,
  pt: 7,
  da: 8,
  "no-no": 9
};
function Gt(i) {
  return i?.toLowerCase() || "en";
}
function Xt(i, t, e) {
  const s = {
    windDirections: [
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
    ],
    words: {
      humidity: "Humidity",
      pressure: "Pressure",
      visibility: "Visibility",
      wind: "Wind",
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }
  };
  if (!e) return s;
  try {
    const n = i.toLowerCase(), r = t[n] ?? 0, o = e[r];
    return {
      windDirections: o?.cwcLocWindDirections || s.windDirections,
      words: o?.cwcTerms || s.words
    };
  } catch (n) {
    return console.error(`Error processing translations for ${i}:`, n), s;
  }
}
async function Yt(i) {
  const t = i + Qt.TRANSLATIONS_DIR, e = [
    "en.json",
    "it.json",
    "nl.json",
    "es.json",
    "de.json",
    "fr.json",
    "sr-latn.json",
    "pt.json",
    "da.json",
    "no-NO.json"
  ];
  return Promise.all(e.map((s) => Kt(`${t}${s}`)));
}
async function te(i, t) {
  const e = await Yt(i);
  return Xt(t, Zt, e);
}
function ee(i) {
  const t = document.currentScript, e = t?.src ? t.src.substring(0, t.src.lastIndexOf("/")) : "";
  return e.includes("/community_plugin/") ? "/hacsfiles/ha-card-weather-conditions" : e.includes("/local/") ? "/local/ha-card-weather-conditions" : "/hacsfiles/ha-card-weather-conditions";
}
function se(i) {
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
  const t = i.weather || {}, e = i.pollen, s = !!t.current, n = !!t.forecast, r = n && !!t.forecast?.meteogram, o = !!i.air_quality, c = !!e && (!!e.tree || !!e.weed || !!e.grass), a = !!i.uv, h = !!i.alert, u = !!i.sea;
  return {
    hasCurrent: s,
    hasForecast: n,
    hasMeteogram: r,
    hasAirQuality: o,
    hasPollen: c,
    hasUv: a,
    hasAlert: h,
    hasSea: u
  };
}
async function ie(i, t) {
  if (!i) throw new Error("Invalid configuration");
  const e = {
    ...i,
    name: i.name || "",
    language: Gt(i.language),
    display: i.display || ["top", "current", "forecast"]
  }, s = se(e), n = Jt(e, t), r = await te(t, e.language ?? "en");
  return {
    config: e,
    iconConfig: n,
    flags: s,
    terms: r
  };
}
const ne = C`
  .weather-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--card-background-color);
    border-radius: 8px;
    box-shadow: var(--card-box-shadow);
  }
`, re = C`
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
`, oe = C`
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
`, ae = C`
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
`, ce = C`
  .camera {
    position: relative;
    width: 100%;
    height: auto;
  }

  .camera img {
    width: 100%;
    border-radius: 8px;
  }
`, le = C`
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
`, de = [
  ne,
  re,
  oe,
  ae,
  ce,
  le
];
function he(i, t) {
  const e = t.weather?.forecast, s = e?.temperature_high || {}, n = e?.temperature_low || {}, r = e?.condition || {};
  return {
    daily: Object.keys(s).map((c) => {
      const a = s[c], h = n[c], u = r[c], l = a ? parseFloat(i.states[a]?.state || "0") : 0, p = h ? parseFloat(i.states[h]?.state || "0") : 0, y = u && i.states[u]?.state || "clear";
      return {
        date: c,
        condition: y,
        high: l,
        low: p
      };
    })
  };
}
function ue({ hass: i, config: t, icons: e, terms: s }) {
  const n = t.weather?.current?.temperature, r = n ? i.states[n] : void 0;
  if (!r) return d``;
  const o = r.state, c = r.attributes?.weather || "unknown", a = e.iconsDay[c] || e.iconsDay.clear;
  return d`
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
function ge({ hass: i, config: t, terms: e }) {
  const s = t.weather?.current;
  if (!s) return d``;
  const n = (r) => r ? i.states[r]?.state ?? "-" : "-";
  return d`
    <div class="present">
      <div>${e.words.temperature ?? "Temp"}: ${n(s.temperature)}°</div>
      <div>${e.words.humidity ?? "Humidity"}: ${n(s.humidity)}%</div>
      <div>${e.words.pressure ?? "Pressure"}: ${n(s.pressure)} hPa</div>
      <div>${e.words.wind ?? "Wind"}: ${n(s.wind_speed)} km/h</div>
    </div>
  `;
}
function pe(i) {
  return i?.daily?.length ? d`
    <div class="forecast">
      ${i.daily.map((t) => d`
        <div class="day">
          <span class="date">${t.date}</span>
          <span class="condition">${t.condition}</span>
          <span class="high">${t.high}°</span>
          <span class="low">${t.low}°</span>
        </div>
      `)}
    </div>
  ` : d``;
}
function ye({ hass: i, config: t }) {
  const e = t.pollen;
  if (!e) return d``;
  const s = (n) => {
    const r = e[n]?.entity;
    return r ? i.states[r]?.state ?? "-" : "-";
  };
  return d`
    <div class="pollen">
      <div>🌲 Tree: ${s("tree")}</div>
      <div>🌿 Weed: ${s("weed")}</div>
      <div>🌾 Grass: ${s("grass")}</div>
    </div>
  `;
}
function ve({ hass: i, config: t }) {
  const e = t.air_quality;
  if (!e) return d``;
  const s = (n) => {
    const r = e[n];
    return r ? i.states[r]?.state ?? "-" : "-";
  };
  return d`
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
function fe({ hass: i, config: t }) {
  const e = t.uv;
  if (!e) return d``;
  const s = (n) => {
    const r = e[n];
    return r ? i.states[r]?.state ?? "-" : "-";
  };
  return d`
    <div class="uv">
      <div>🌞 UV Index: ${s("uv_index")}</div>
      <div>Max UV: ${s("max_uv_index")}</div>
      <div>Level: ${s("uv_level")}</div>
      <div>Protection: ${s("protection_window")}</div>
      <div>Ozone: ${s("ozone_level")} DU</div>
    </div>
  `;
}
function $e({ hass: i, config: t }) {
  const e = t.alert;
  if (!e) return d``;
  const s = i.states[e];
  return !s || s.state === "off" ? d`` : d`
    <div class="alert">
      <div class="title">🚨 Alert Active</div>
      <div class="description">${s.attributes.message || "Details not available."}</div>
    </div>
  `;
}
function me({ hass: i, config: t }) {
  const e = t.sea;
  if (!e) return d``;
  const s = i.states[e];
  return s ? d`
    <div class="sea">
      <div>🌊 Sea State: ${s.state}</div>
      ${s.attributes.wave_height ? d`<div>Height: ${s.attributes.wave_height} m</div>` : ""}
      ${s.attributes.wave_period ? d`<div>Period: ${s.attributes.wave_period} s</div>` : ""}
    </div>
  ` : d``;
}
var lt = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, we = (i, t, e) => t in i ? lt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, S = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? _e(t, e) : t, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = (s ? o(t, e, n) : o(n)) || n);
  return s && n && lt(t, e, n), n;
}, Ae = (i, t, e) => we(i, t + "", e);
let v = class extends T {
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
      const e = ee(), { config: s, iconConfig: n, flags: r, terms: o } = await ie(t, e || "");
      this.config = s, this.iconConfig = n, this.flags = r, this.terms = o;
    } catch (e) {
      console.error("Error in setConfig:", e), this.invalidConfig = !0;
    }
  }
  getCardSize() {
    return 2;
  }
  render() {
    const { hass: t, config: e, iconConfig: s, terms: n, flags: r } = this;
    if (!t || !e || !s || !n || !r)
      return d`
        <ha-card class="ha-card-weather-conditions">
          <div class="content">Loading weather card...</div>
        </ha-card>
      `;
    if (this.invalidConfig)
      return d`
        <ha-card class="ha-card-weather-conditions">
          <div class="banner">
            <div class="header">ha-card-weather-conditions</div>
          </div>
          <div class="content">Configuration ERROR!</div>
        </ha-card>
      `;
    const o = { hass: t, config: e, terms: n, icons: s };
    return d`
      <ha-card class="ha-card-weather-conditions">
        <div class="nd-container">
          ${r.hasCurrent ? ue(o) : ""}
          ${r.hasCurrent ? ge(o) : ""}
          ${r.hasForecast ? pe(he(t, e)) : ""}
          ${r.hasAlert ? $e({ hass: t, config: e }) : ""}
          ${r.hasAirQuality ? ve(o) : ""}
          ${r.hasPollen ? ye(o) : ""}
          ${r.hasUv ? fe(o) : ""}
          ${r.hasSea ? me({ hass: t, config: e }) : ""}
        </div>
      </ha-card>
    `;
  }
};
Ae(v, "styles", de);
S([
  ct({ attribute: !1 })
], v.prototype, "hass", 2);
S([
  M()
], v.prototype, "config", 2);
S([
  M()
], v.prototype, "iconConfig", 2);
S([
  M()
], v.prototype, "flags", 2);
S([
  M()
], v.prototype, "terms", 2);
S([
  M()
], v.prototype, "invalidConfig", 2);
v = S([
  Ht("ha-card-weather-conditions")
], v);
export {
  v as HaCardWeatherConditions
};
