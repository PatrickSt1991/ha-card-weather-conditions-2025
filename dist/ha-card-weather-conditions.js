var ft = Object.defineProperty;
var vt = (i, t, e) => t in i ? ft(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var m = (i, t, e) => vt(i, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis, B = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, F = Symbol(), J = /* @__PURE__ */ new WeakMap();
let ct = class {
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
const yt = (i) => new ct(typeof i == "string" ? i : i + "", void 0, F), C = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, r, n) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + i[n + 1], i[0]);
  return new ct(e, i, F);
}, $t = (i, t) => {
  if (B) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), r = D.litNonce;
    r !== void 0 && s.setAttribute("nonce", r), s.textContent = e.cssText, i.appendChild(s);
  }
}, Q = B ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return yt(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: mt, defineProperty: wt, getOwnPropertyDescriptor: _t, getOwnPropertyNames: At, getOwnPropertySymbols: St, getPrototypeOf: bt } = Object, $ = globalThis, K = $.trustedTypes, Et = K ? K.emptyScript : "", xt = $.reactiveElementPolyfillSupport, N = (i, t) => i, j = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Et : null;
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
} }, V = (i, t) => !mt(i, t), Z = { attribute: !0, type: String, converter: j, reflect: !1, hasChanged: V };
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
      const s = Symbol(), r = this.getPropertyDescriptor(t, s, e);
      r !== void 0 && wt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: r, set: n } = _t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get() {
      return r?.call(this);
    }, set(o) {
      const c = r?.call(this);
      n.call(this, o), this.requestUpdate(t, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Z;
  }
  static _$Ei() {
    if (this.hasOwnProperty(N("elementProperties"))) return;
    const t = bt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(N("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(N("properties"))) {
      const e = this.properties, s = [...At(e), ...St(e)];
      for (const r of s) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, r] of e) this.elementProperties.set(s, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const r = this._$Eu(e, s);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const r of s) e.unshift(Q(r));
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
    return $t(t, this.constructor.elementStyles), t;
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
    const s = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, s);
    if (r !== void 0 && s.reflect === !0) {
      const n = (s.converter?.toAttribute !== void 0 ? s.converter : j).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, r = s._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = s.getPropertyOptions(r), o = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : j;
      this._$Em = r, this[r] = o.fromAttribute(e, n.type), this._$Em = null;
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
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [r, n] of s) n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
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
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[N("elementProperties")] = /* @__PURE__ */ new Map(), b[N("finalized")] = /* @__PURE__ */ new Map(), xt?.({ ReactiveElement: b }), ($.reactiveElementVersions ?? ($.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O = globalThis, k = O.trustedTypes, G = k ? k.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, lt = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + y, Ct = `<${ht}>`, A = document, U = () => A.createComment(""), H = (i) => i === null || typeof i != "object" && typeof i != "function", q = Array.isArray, Pt = (i) => q(i) || typeof i?.[Symbol.iterator] == "function", W = `[ 	
\f\r]`, P = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, X = /-->/g, Y = />/g, w = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, et = /"/g, dt = /^(?:script|style|textarea|title)$/i, Nt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), h = Nt(1), E = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), _ = A.createTreeWalker(A, 129);
function ut(i, t) {
  if (!q(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(t) : t;
}
const Ot = (i, t) => {
  const e = i.length - 1, s = [];
  let r, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = P;
  for (let c = 0; c < e; c++) {
    const a = i[c];
    let d, u, l = -1, g = 0;
    for (; g < a.length && (o.lastIndex = g, u = o.exec(a), u !== null); ) g = o.lastIndex, o === P ? u[1] === "!--" ? o = X : u[1] !== void 0 ? o = Y : u[2] !== void 0 ? (dt.test(u[2]) && (r = RegExp("</" + u[2], "g")), o = w) : u[3] !== void 0 && (o = w) : o === w ? u[0] === ">" ? (o = r ?? P, l = -1) : u[1] === void 0 ? l = -2 : (l = o.lastIndex - u[2].length, d = u[1], o = u[3] === void 0 ? w : u[3] === '"' ? et : tt) : o === et || o === tt ? o = w : o === X || o === Y ? o = P : (o = w, r = void 0);
    const f = o === w && i[c + 1].startsWith("/>") ? " " : "";
    n += o === P ? a + Ct : l >= 0 ? (s.push(d), a.slice(0, l) + lt + a.slice(l) + y + f) : a + y + (l === -2 ? c : f);
  }
  return [ut(i, n + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class M {
  constructor({ strings: t, _$litType$: e }, s) {
    let r;
    this.parts = [];
    let n = 0, o = 0;
    const c = t.length - 1, a = this.parts, [d, u] = Ot(t, e);
    if (this.el = M.createElement(d, s), _.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (r = _.nextNode()) !== null && a.length < c; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const l of r.getAttributeNames()) if (l.endsWith(lt)) {
          const g = u[o++], f = r.getAttribute(l).split(y), I = /([.?@])?(.*)/.exec(g);
          a.push({ type: 1, index: n, name: I[2], strings: f, ctor: I[1] === "." ? Ut : I[1] === "?" ? Ht : I[1] === "@" ? Mt : L }), r.removeAttribute(l);
        } else l.startsWith(y) && (a.push({ type: 6, index: n }), r.removeAttribute(l));
        if (dt.test(r.tagName)) {
          const l = r.textContent.split(y), g = l.length - 1;
          if (g > 0) {
            r.textContent = k ? k.emptyScript : "";
            for (let f = 0; f < g; f++) r.append(l[f], U()), _.nextNode(), a.push({ type: 2, index: ++n });
            r.append(l[g], U());
          }
        }
      } else if (r.nodeType === 8) if (r.data === ht) a.push({ type: 2, index: n });
      else {
        let l = -1;
        for (; (l = r.data.indexOf(y, l + 1)) !== -1; ) a.push({ type: 7, index: n }), l += y.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function x(i, t, e = i, s) {
  if (t === E) return t;
  let r = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const n = H(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== n && (r?._$AO?.(!1), n === void 0 ? r = void 0 : (r = new n(i), r._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = r : e._$Cl = r), r !== void 0 && (t = x(i, r._$AS(i, t.values), r, s)), t;
}
class Tt {
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
    const { el: { content: e }, parts: s } = this._$AD, r = (t?.creationScope ?? A).importNode(e, !0);
    _.currentNode = r;
    let n = _.nextNode(), o = 0, c = 0, a = s[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let d;
        a.type === 2 ? d = new R(n, n.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(n, a.name, a.strings, this, t) : a.type === 6 && (d = new Rt(n, this, t)), this._$AV.push(d), a = s[++c];
      }
      o !== a?.index && (n = _.nextNode(), o++);
    }
    return _.currentNode = A, r;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, r) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
    t = x(this, t, e), H(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== E && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Pt(t) ? this.k(t) : this._(t);
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
    const { values: e, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = M.createElement(ut(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === r) this._$AH.p(e);
    else {
      const n = new Tt(r, this), o = n.u(this.options);
      n.p(e), this.T(o), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = st.get(t.strings);
    return e === void 0 && st.set(t.strings, e = new M(t)), e;
  }
  k(t) {
    q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, r = 0;
    for (const n of t) r === e.length ? e.push(s = new R(this.O(U()), this.O(U()), this, this.options)) : s = e[r], s._$AI(n), r++;
    r < e.length && (this._$AR(s && s._$AB.nextSibling, r), e.length = r);
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
  constructor(t, e, s, r, n) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, r) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = x(this, t, e, 0), o = !H(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
    else {
      const c = t;
      let a, d;
      for (t = n[0], a = 0; a < n.length - 1; a++) d = x(this, c[s + a], e, a), d === E && (d = this._$AH[a]), o || (o = !H(d) || d !== this._$AH[a]), d === p ? t = p : t !== p && (t += (d ?? "") + n[a + 1]), this._$AH[a] = d;
    }
    o && !r && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ut extends L {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class Ht extends L {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Mt extends L {
  constructor(t, e, s, r, n) {
    super(t, e, s, r, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = x(this, t, e, 0) ?? p) === E) return;
    const s = this._$AH, r = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== p && (s === p || r);
    r && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Rt {
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
const zt = O.litHtmlPolyfillSupport;
zt?.(M, R), (O.litHtmlVersions ?? (O.litHtmlVersions = [])).push("3.2.1");
const It = (i, t, e) => {
  const s = e?.renderBefore ?? t;
  let r = s._$litPart$;
  if (r === void 0) {
    const n = e?.renderBefore ?? null;
    s._$litPart$ = r = new R(t.insertBefore(U(), n), n, void 0, e ?? {});
  }
  return r._$AI(i), r;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = It(e, this.renderRoot, this.renderOptions);
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
const jt = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt = { attribute: !0, type: String, converter: j, reflect: !1, hasChanged: V }, Lt = (i = kt, t, e) => {
  const { kind: s, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, i), s === "accessor") {
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
function pt(i) {
  return (t, e) => typeof e == "object" ? Lt(i, t, e) : ((s, r, n) => {
    const o = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, o ? { ...s, wrapped: !0 } : s), o ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function z(i) {
  return pt({ ...i, state: !0, attribute: !1 });
}
const it = {
  clear: "weather/clear.svg",
  cloudy: "weather/cloudy.svg",
  fog: "weather/fog.svg",
  hail: "weather/hail.svg",
  partlycloudy: "weather/partly-cloudy.svg",
  pouring: "weather/pouring.svg",
  rainy: "weather/rain.svg",
  snowy: "weather/snow.svg",
  snowyrainy: "weather/sleet.svg",
  sunny: "weather/sunny.svg",
  windy: "weather/wind.svg",
  exceptional: "weather/alert.svg"
}, rt = {
  clear: "weather/clear.svg",
  cloudy: "weather/cloudy.svg",
  fog: "weather/fog.svg",
  hail: "weather/hail.svg",
  partlycloudy: "weather/partly-cloudy.svg",
  pouring: "weather/pouring.svg",
  rainy: "weather/rain.svg",
  snowy: "weather/snow.svg",
  snowyrainy: "weather/sleet.svg",
  sunny: "weather/sunny.svg",
  windy: "weather/wind.svg",
  exceptional: "weather/alert.svg"
}, nt = {
  clear: "weather/clear.svg",
  cloudy: "weather/cloudy.svg",
  fog: "weather/fog.svg",
  hail: "weather/hail.svg",
  partlycloudy: "weather/partly-cloudy.svg",
  pouring: "weather/pouring.svg",
  rainy: "weather/rain.svg",
  snowy: "weather/snow.svg",
  snowyrainy: "weather/sleet.svg",
  sunny: "weather/sunny.svg",
  windy: "weather/wind.svg",
  exceptional: "weather/alert.svg"
}, ot = {
  clear: "weather/clear.svg",
  cloudy: "weather/cloudy.svg",
  fog: "weather/fog.svg",
  hail: "weather/hail.svg",
  partlycloudy: "weather/partly-cloudy.svg",
  pouring: "weather/pouring.svg",
  rainy: "weather/rain.svg",
  snowy: "weather/snow.svg",
  snowyrainy: "weather/sleet.svg",
  sunny: "weather/sunny.svg",
  windy: "weather/wind.svg",
  exceptional: "weather/alert.svg"
}, at = {
  clear: "weather/clear.svg",
  cloudy: "weather/cloudy.svg",
  fog: "weather/fog.svg",
  hail: "weather/hail.svg",
  partlycloudy: "weather/partly-cloudy.svg",
  pouring: "weather/pouring.svg",
  rainy: "weather/rain.svg",
  snowy: "weather/snow.svg",
  snowyrainy: "weather/sleet.svg",
  sunny: "weather/sunny.svg",
  windy: "weather/wind.svg",
  exceptional: "weather/alert.svg"
};
function Wt(i, t) {
  const e = i.weather?.icons_model?.toLowerCase(), s = {
    iconType: i.animation ? "animated" : "static",
    icons_model: "climacell",
    iconsDay: it,
    iconsNight: it,
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
        iconsDay: nt,
        iconsNight: nt
      };
    case "buienradar":
      return {
        ...s,
        icons_model: "buienradar",
        iconsDay: ot,
        iconsNight: ot
      };
    case "defaulthass":
      return {
        ...s,
        icons_model: "defaulthass",
        iconsDay: at,
        iconsNight: at
      };
    default:
      return s;
  }
}
const Bt = {
  // Translations folder relative to image path
  TRANSLATIONS_DIR: "/../transl/"
};
async function Ft(i) {
  try {
    const t = await fetch(i);
    if (!t.ok) throw new Error(`Failed to load JSON from ${i}: ${t.statusText}`);
    return await t.json();
  } catch (t) {
    return console.error(`Error loading JSON from ${i}:`, t), null;
  }
}
const Vt = {
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
function qt(i) {
  return i?.toLowerCase() || "en";
}
function Jt(i, t, e) {
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
    const r = i.toLowerCase(), n = t[r] ?? 0, o = e[n];
    return {
      windDirections: o?.cwcLocWindDirections || s.windDirections,
      words: o?.cwcTerms || s.words
    };
  } catch (r) {
    return console.error(`Error processing translations for ${i}:`, r), s;
  }
}
async function Qt(i) {
  const t = i + Bt.TRANSLATIONS_DIR, e = [
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
  return Promise.all(e.map((s) => Ft(`${t}${s}`)));
}
async function Kt(i, t) {
  const e = await Qt(i);
  return Jt(t, Vt, e);
}
function Zt(i) {
  return "./icons";
}
function Gt(i) {
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
  const t = i.weather || {}, e = i.pollen, s = !!t.current, r = !!t.forecast, n = r && !!t.forecast?.meteogram, o = !!i.air_quality, c = !!e && (!!e.tree || !!e.weed || !!e.grass), a = !!i.uv, d = !!i.alert, u = !!i.sea;
  return {
    hasCurrent: s,
    hasForecast: r,
    hasMeteogram: n,
    hasAirQuality: o,
    hasPollen: c,
    hasUv: a,
    hasAlert: d,
    hasSea: u
  };
}
async function Xt(i, t) {
  if (!i) throw new Error("Invalid configuration");
  const e = {
    ...i,
    name: i.name || "",
    language: qt(i.language),
    display: i.display || ["top", "current", "forecast"]
  }, s = Gt(e), r = Wt(e, t), n = await Kt(t, e.language ?? "en");
  return {
    config: e,
    iconConfig: r,
    flags: s,
    terms: n
  };
}
const Yt = C`
  .weather-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--card-background-color);
    border-radius: 8px;
    box-shadow: var(--card-box-shadow);
  }
`, te = C`
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
`, ee = C`
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
`, se = C`
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
`, ie = C`
  .camera {
    position: relative;
    width: 100%;
    height: auto;
  }

  .camera img {
    width: 100%;
    border-radius: 8px;
  }
`, re = C`
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
`, ne = [
  Yt,
  te,
  ee,
  se,
  ie,
  re
];
function oe(i, t) {
  const e = t.weather?.forecast, s = e?.temperature_high || {}, r = e?.temperature_low || {}, n = e?.condition || {};
  return {
    daily: Object.keys(s).map((c) => {
      const a = s[c], d = r[c], u = n[c], l = a ? parseFloat(i.states[a]?.state || "0") : 0, g = d ? parseFloat(i.states[d]?.state || "0") : 0, f = u && i.states[u]?.state || "clear";
      return {
        date: c,
        condition: f,
        high: l,
        low: g
      };
    })
  };
}
function ae({ hass: i, config: t, icons: e, terms: s }) {
  const r = t.weather?.current?.temperature, n = r ? i.states[r] : void 0;
  if (!n) return h``;
  const o = n.state, c = n.attributes?.weather || "unknown", a = e.iconsDay[c] || e.iconsDay.clear;
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
function ce({ hass: i, config: t, terms: e }) {
  const s = t.weather?.current;
  if (!s) return h``;
  const r = (n) => n ? i.states[n]?.state ?? "-" : "-";
  return h`
    <div class="present">
      <div>${e.words.temperature ?? "Temp"}: ${r(s.temperature)}°</div>
      <div>${e.words.humidity ?? "Humidity"}: ${r(s.humidity)}%</div>
      <div>${e.words.pressure ?? "Pressure"}: ${r(s.pressure)} hPa</div>
      <div>${e.words.wind ?? "Wind"}: ${r(s.wind_speed)} km/h</div>
    </div>
  `;
}
function le(i) {
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
function he({ hass: i, config: t }) {
  const e = t.pollen;
  if (!e) return h``;
  const s = (r) => {
    const n = e[r]?.entity;
    return n ? i.states[n]?.state ?? "-" : "-";
  };
  return h`
    <div class="pollen">
      <div>🌲 Tree: ${s("tree")}</div>
      <div>🌿 Weed: ${s("weed")}</div>
      <div>🌾 Grass: ${s("grass")}</div>
    </div>
  `;
}
function de({ hass: i, config: t }) {
  const e = t.air_quality;
  if (!e) return h``;
  const s = (r) => {
    const n = e[r];
    return n ? i.states[n]?.state ?? "-" : "-";
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
function ue({ hass: i, config: t }) {
  const e = t.uv;
  if (!e) return h``;
  const s = (r) => {
    const n = e[r];
    return n ? i.states[n]?.state ?? "-" : "-";
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
function pe({ hass: i, config: t }) {
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
function ge({ hass: i, config: t }) {
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
var gt = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, ve = (i, t, e) => t in i ? gt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, S = (i, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? fe(t, e) : t, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(t, e, r) : o(r)) || r);
  return s && r && gt(t, e, r), r;
}, ye = (i, t, e) => ve(i, t + "", e);
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
      const e = Zt(), { config: s, iconConfig: r, flags: n, terms: o } = await Xt(t, e || "");
      this.config = s, this.iconConfig = r, this.flags = n, this.terms = o;
    } catch (e) {
      console.error("Error in setConfig:", e), this.invalidConfig = !0;
    }
  }
  getCardSize() {
    return 2;
  }
  render() {
    const { hass: t, config: e, iconConfig: s, terms: r, flags: n } = this;
    if (!t || !e || !s || !r || !n)
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
    const o = { hass: t, config: e, terms: r, icons: s };
    return h`
      <ha-card class="ha-card-weather-conditions">
        <div class="nd-container">
          ${n.hasCurrent ? ae(o) : ""}
          ${n.hasCurrent ? ce(o) : ""}
          ${n.hasForecast ? le(oe(t, e)) : ""}
          ${n.hasAlert ? pe({ hass: t, config: e }) : ""}
          ${n.hasAirQuality ? de(o) : ""}
          ${n.hasPollen ? he(o) : ""}
          ${n.hasUv ? ue(o) : ""}
          ${n.hasSea ? ge({ hass: t, config: e }) : ""}
        </div>
      </ha-card>
    `;
  }
};
ye(v, "styles", ne);
S([
  pt({ attribute: !1 })
], v.prototype, "hass", 2);
S([
  z()
], v.prototype, "config", 2);
S([
  z()
], v.prototype, "iconConfig", 2);
S([
  z()
], v.prototype, "flags", 2);
S([
  z()
], v.prototype, "terms", 2);
S([
  z()
], v.prototype, "invalidConfig", 2);
v = S([
  jt("ha-card-weather-conditions")
], v);
export {
  v as HaCardWeatherConditions
};
