/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const he = {}, Vt = [], We = () => {
}, Ki = () => !1, zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bn = (e) => e.startsWith("onUpdate:"), _e = Object.assign, Ns = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xo = Object.prototype.hasOwnProperty, oe = (e, t) => xo.call(e, t), J = Array.isArray, Kt = (e) => yn(e) === "[object Map]", Ui = (e) => yn(e) === "[object Set]", Zs = (e) => yn(e) === "[object Date]", Z = (e) => typeof e == "function", ge = (e) => typeof e == "string", De = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", Ji = (e) => (le(e) || Z(e)) && Z(e.then) && Z(e.catch), qi = Object.prototype.toString, yn = (e) => qi.call(e), So = (e) => yn(e).slice(8, -1), Yi = (e) => yn(e) === "[object Object]", Hn = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ Ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, wo = /-\w/g, Ve = Wn(
  (e) => e.replace(wo, (t) => t.slice(1).toUpperCase())
), Co = /\B([A-Z])/g, kt = Wn(
  (e) => e.replace(Co, "-$1").toLowerCase()
), Gi = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ss = Wn(
  (e) => e ? `on${Gi(e)}` : ""
), et = (e, t) => !Object.is(e, t), is = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Qi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Eo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, To = (e) => {
  const t = ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ei;
const Vn = () => ei || (ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ge(s) ? Oo(s) : St(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ge(e) || le(e))
    return e;
}
const Io = /;(?![^(]*\))/g, Mo = /:([^]+)/, Ao = /\/\*[^]*?\*\//g;
function Oo(e) {
  const t = {};
  return e.replace(Ao, "").split(Io).forEach((n) => {
    if (n) {
      const s = n.split(Mo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function $t(e) {
  let t = "";
  if (ge(e))
    t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = $t(e[n]);
      s && (t += s + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $o = /* @__PURE__ */ Ps(Lo);
function Xi(e) {
  return !!e || e === "";
}
function Fo(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = ks(e[s], t[s]);
  return n;
}
function ks(e, t) {
  if (e === t)
    return !0;
  let n = Zs(e), s = Zs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = De(e), s = De(t), n || s)
    return e === t;
  if (n = J(e), s = J(t), n || s)
    return n && s ? Fo(e, t) : !1;
  if (n = le(e), s = le(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !ks(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Zi = (e) => !!(e && e.__v_isRef === !0), xe = (e) => ge(e) ? e : e == null ? "" : J(e) || le(e) && (e.toString === qi || !Z(e.toString)) ? Zi(e) ? xe(e.value) : JSON.stringify(e, er, 2) : String(e), er = (e, t) => Zi(t) ? er(e, t.value) : Kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[rs(s, r) + " =>"] = i, n),
    {}
  )
} : Ui(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rs(n))
} : De(t) ? rs(t) : le(t) && !J(t) && !Yi(t) ? String(t) : t, rs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let be;
class tr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && be && (be.active ? (this.parent = be, this.index = (be.scopes || (be.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return be = this, t();
      } finally {
        be = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = be, be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (be === this)
        be = this.prevScope;
      else {
        let t = be;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function nr(e) {
  return new tr(e);
}
function sr() {
  return be;
}
function ir(e, t = !1) {
  be && be.cleanups.push(e);
}
let fe;
const os = /* @__PURE__ */ new WeakSet();
class rr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, be && (be.active ? be.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, os.has(this) && (os.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ti(this), cr(this);
    const t = fe, n = Ke;
    fe = this, Ke = !0;
    try {
      return this.fn();
    } finally {
      ar(this), fe = t, Ke = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        js(t);
      this.deps = this.depsTail = void 0, ti(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? os.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bs(this) && this.run();
  }
  get dirty() {
    return bs(this);
  }
}
let or = 0, nn, sn;
function lr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = sn, sn = e;
    return;
  }
  e.next = nn, nn = e;
}
function Rs() {
  or++;
}
function Ds() {
  if (--or > 0)
    return;
  if (sn) {
    let t = sn;
    for (sn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; nn; ) {
    let t = nn;
    for (nn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e)
    throw e;
}
function cr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ar(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), js(s), Po(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ur(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ur(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn) || (e.globalVersion = fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = fe, s = Ke;
  fe = e, Ke = !0;
  try {
    cr(e);
    const i = e.fn(e._value);
    (t.version === 0 || et(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    fe = n, Ke = s, ar(e), e.flags &= -3;
  }
}
function js(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      js(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Po(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ke = !0;
const fr = [];
function nt() {
  fr.push(Ke), Ke = !1;
}
function st() {
  const e = fr.pop();
  Ke = e === void 0 ? !0 : e;
}
function ti(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = fe;
    fe = void 0;
    try {
      t();
    } finally {
      fe = n;
    }
  }
}
let fn = 0;
class No {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!fe || !Ke || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new No(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, hr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    Rs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ds();
    }
  }
}
function hr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        hr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const An = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ Symbol(
  ""
), xs = /* @__PURE__ */ Symbol(
  ""
), hn = /* @__PURE__ */ Symbol(
  ""
);
function Ce(e, t, n) {
  if (Ke && fe) {
    let s = An.get(e);
    s || An.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new zs()), i.map = s, i.key = n), i.track();
  }
}
function ut(e, t, n, s, i, r) {
  const o = An.get(e);
  if (!o) {
    fn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Rs(), t === "clear")
    o.forEach(l);
  else {
    const c = J(e), f = c && Hn(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((d, h) => {
        (h === "length" || h === hn || !De(h) && h >= a) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(hn)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Ft)), Kt(e) && l(o.get(xs)));
          break;
        case "delete":
          c || (l(o.get(Ft)), Kt(e) && l(o.get(xs)));
          break;
        case "set":
          Kt(e) && l(o.get(Ft));
          break;
      }
  }
  Ds();
}
function ko(e, t) {
  const n = An.get(e);
  return n && n.get(t);
}
function zt(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Ce(t, "iterate", hn), /* @__PURE__ */ Fe(e) ? t : t.map(Ue));
}
function Kn(e) {
  return Ce(e = /* @__PURE__ */ re(e), "iterate", hn), e;
}
function Xe(e, t) {
  return /* @__PURE__ */ ht(e) ? Jt(/* @__PURE__ */ ft(e) ? Ue(t) : t) : Ue(t);
}
const Ro = {
  __proto__: null,
  [Symbol.iterator]() {
    return ls(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return zt(this).concat(
      ...e.map((t) => J(t) ? zt(t) : t)
    );
  },
  entries() {
    return ls(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
  },
  every(e, t) {
    return ot(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ot(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Xe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return ot(
      this,
      "find",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ot(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ot(
      this,
      "findLast",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ot(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ot(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cs(this, "includes", e);
  },
  indexOf(...e) {
    return cs(this, "indexOf", e);
  },
  join(e) {
    return zt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return cs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ot(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yt(this, "pop");
  },
  push(...e) {
    return Yt(this, "push", e);
  },
  reduce(e, ...t) {
    return ni(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ni(this, "reduceRight", e, t);
  },
  shift() {
    return Yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ot(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yt(this, "splice", e);
  },
  toReversed() {
    return zt(this).toReversed();
  },
  toSorted(e) {
    return zt(this).toSorted(e);
  },
  toSpliced(...e) {
    return zt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yt(this, "unshift", e);
  },
  values() {
    return ls(this, "values", (e) => Xe(this, e));
  }
};
function ls(e, t, n) {
  const s = Kn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Fe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Do = Array.prototype;
function ot(e, t, n, s, i, r) {
  const o = Kn(e), l = o !== e && !/* @__PURE__ */ Fe(e), c = o[t];
  if (c !== Do[t]) {
    const d = c.apply(e, r);
    return l ? Ue(d) : d;
  }
  let f = n;
  o !== e && (l ? f = function(d, h) {
    return n.call(this, Xe(e, d), h, e);
  } : n.length > 2 && (f = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const a = c.call(o, f, s);
  return l && i ? i(a) : a;
}
function ni(e, t, n, s) {
  const i = Kn(e), r = i !== e && !/* @__PURE__ */ Fe(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(f, a, d) {
    return l && (l = !1, f = Xe(e, f)), n.call(this, f, Xe(e, a), d, e);
  }) : n.length > 3 && (o = function(f, a, d) {
    return n.call(this, f, a, d, e);
  }));
  const c = i[t](o, ...s);
  return l ? Xe(e, c) : c;
}
function cs(e, t, n) {
  const s = /* @__PURE__ */ re(e);
  Ce(s, "iterate", hn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Jn(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), s[t](...n)) : i;
}
function Yt(e, t, n = []) {
  nt(), Rs();
  const s = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return Ds(), st(), s;
}
const jo = /* @__PURE__ */ Ps("__proto__,__v_isRef,__isVue"), dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function zo(e) {
  De(e) || (e = String(e));
  const t = /* @__PURE__ */ re(this);
  return Ce(t, "has", e), t.hasOwnProperty(e);
}
class pr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip")
      return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (i ? r ? Go : yr : r ? vr : mr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = J(t);
    if (!i) {
      let c;
      if (o && (c = Ro[n]))
        return c;
      if (n === "hasOwnProperty")
        return zo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ye(t) ? t : s
    );
    if ((De(n) ? dr.has(n) : jo(n)) || (i || Ce(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ye(l)) {
      const c = o && Hn(n) ? l : l.value;
      return i && le(c) ? /* @__PURE__ */ ws(c) : c;
    }
    return le(l) ? i ? /* @__PURE__ */ ws(l) : /* @__PURE__ */ Un(l) : l;
  }
}
class gr extends pr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = J(t) && Hn(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ ht(r);
      if (!/* @__PURE__ */ Fe(s) && !/* @__PURE__ */ ht(s) && (r = /* @__PURE__ */ re(r), s = /* @__PURE__ */ re(s)), !o && /* @__PURE__ */ ye(r) && !/* @__PURE__ */ ye(s))
        return f || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : oe(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ye(t) ? t : i
    );
    return t === /* @__PURE__ */ re(i) && c && (l ? et(s, r) && ut(t, "set", n, s) : ut(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = oe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ut(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!De(n) || !dr.has(n)) && Ce(t, "has", n), s;
  }
  ownKeys(t) {
    return Ce(
      t,
      "iterate",
      J(t) ? "length" : Ft
    ), Reflect.ownKeys(t);
  }
}
class Bo extends pr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ho = /* @__PURE__ */ new gr(), Wo = /* @__PURE__ */ new Bo(), Vo = /* @__PURE__ */ new gr(!0);
const Ss = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function Ko(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ re(i), o = Kt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = i[e](...s), a = n ? Ss : t ? Jt : Ue;
    return !t && Ce(
      r,
      "iterate",
      c ? xs : Ft
    ), _e(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = f.next();
          return h ? { value: d, done: h } : {
            value: l ? [a(d[0]), a(d[1])] : a(d),
            done: h
          };
        }
      }
    );
  };
}
function wn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Uo(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ re(r), l = /* @__PURE__ */ re(i);
      e || (et(i, l) && Ce(o, "get", i), Ce(o, "get", l));
      const { has: c } = Sn(o), f = t ? Ss : e ? Jt : Ue;
      if (c.call(o, i))
        return f(r.get(i));
      if (c.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ce(/* @__PURE__ */ re(i), "iterate", Ft), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ re(r), l = /* @__PURE__ */ re(i);
      return e || (et(i, l) && Ce(o, "has", i), Ce(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ re(l), f = t ? Ss : e ? Jt : Ue;
      return !e && Ce(c, "iterate", Ft), l.forEach((a, d) => i.call(r, f(a), f(d), o));
    }
  };
  return _e(
    n,
    e ? {
      add: wn("add"),
      set: wn("set"),
      delete: wn("delete"),
      clear: wn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ re(this), o = Sn(r), l = /* @__PURE__ */ re(i), c = !t && !/* @__PURE__ */ Fe(i) && !/* @__PURE__ */ ht(i) ? l : i;
        return o.has.call(r, c) || et(i, c) && o.has.call(r, i) || et(l, c) && o.has.call(r, l) || (r.add(c), ut(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Fe(r) && !/* @__PURE__ */ ht(r) && (r = /* @__PURE__ */ re(r));
        const o = /* @__PURE__ */ re(this), { has: l, get: c } = Sn(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ re(i), f = l.call(o, i));
        const a = c.call(o, i);
        return o.set(i, r), f ? et(r, a) && ut(o, "set", i, r) : ut(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ re(this), { has: o, get: l } = Sn(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ re(i), c = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return c && ut(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ re(this), r = i.size !== 0, o = i.clear();
        return r && ut(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Ko(i, e, t);
  }), n;
}
function Bs(e, t) {
  const n = Uo(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    oe(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Jo = {
  get: /* @__PURE__ */ Bs(!1, !1)
}, qo = {
  get: /* @__PURE__ */ Bs(!1, !0)
}, Yo = {
  get: /* @__PURE__ */ Bs(!0, !1)
};
const mr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap();
function Qo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function Un(e) {
  return /* @__PURE__ */ ht(e) ? e : Hs(
    e,
    !1,
    Ho,
    Jo,
    mr
  );
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  return Hs(
    e,
    !1,
    Vo,
    qo,
    vr
  );
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
  return Hs(
    e,
    !0,
    Wo,
    Yo,
    yr
  );
}
function Hs(e, t, n, s, i) {
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Qo(So(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return /* @__PURE__ */ ht(e) ? /* @__PURE__ */ ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ re(t) : e;
}
function Ws(e) {
  return !oe(e, "__v_skip") && Object.isExtensible(e) && Qi(e, "__v_skip", !0), e;
}
const Ue = (e) => le(e) ? /* @__PURE__ */ Un(e) : e, Jt = (e) => le(e) ? /* @__PURE__ */ ws(e) : e;
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return _r(e, !1);
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  return _r(e, !0);
}
function _r(e, t) {
  return /* @__PURE__ */ ye(e) ? e : new Zo(e, t);
}
class Zo {
  constructor(t, n) {
    this.dep = new zs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ re(t), this._value = n ? t : Ue(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Fe(t) || /* @__PURE__ */ ht(t);
    t = s ? t : /* @__PURE__ */ re(t), et(t, n) && (this._rawValue = t, this._value = s ? t : Ue(t), this.dep.trigger());
  }
}
function si(e) {
  e.dep && e.dep.trigger();
}
function te(e) {
  return /* @__PURE__ */ ye(e) ? e.value : e;
}
const el = {
  get: (e, t, n) => t === "__v_raw" ? e : te(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ye(i) && !/* @__PURE__ */ ye(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function br(e) {
  return /* @__PURE__ */ ft(e) ? e : new Proxy(e, el);
}
// @__NO_SIDE_EFFECTS__
function tl(e) {
  const t = J(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = sl(e, n);
  return t;
}
class nl {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = De(n) ? n : String(n), this._raw = /* @__PURE__ */ re(t);
    let i = !0, r = t;
    if (!J(t) || De(this._key) || !Hn(this._key))
      do
        i = !/* @__PURE__ */ Jn(r) || /* @__PURE__ */ Fe(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = te(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ye(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ye(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return ko(this._raw, this._key);
  }
}
function sl(e, t, n) {
  return new nl(e, t, n);
}
class il {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
      return lr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ur(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function rl(e, t, n = !1) {
  let s, i;
  return Z(e) ? s = e : (s = e.get, i = e.set), new il(s, i, n);
}
const Cn = {}, On = /* @__PURE__ */ new WeakMap();
let Ot;
function ol(e, t = !1, n = Ot) {
  if (n) {
    let s = On.get(n);
    s || On.set(n, s = []), s.push(e);
  }
}
function ll(e, t, n = he) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, f = (j) => i ? j : /* @__PURE__ */ Fe(j) || i === !1 || i === 0 ? xt(j, 1) : xt(j);
  let a, d, h, _, x = !1, N = !1;
  if (/* @__PURE__ */ ye(e) ? (d = () => e.value, x = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ ft(e) ? (d = () => f(e), x = !0) : J(e) ? (N = !0, x = e.some((j) => /* @__PURE__ */ ft(j) || /* @__PURE__ */ Fe(j)), d = () => e.map((j) => {
    if (/* @__PURE__ */ ye(j))
      return j.value;
    if (/* @__PURE__ */ ft(j))
      return f(j);
    if (Z(j))
      return c ? c(j, 2) : j();
  })) : Z(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (h) {
      nt();
      try {
        h();
      } finally {
        st();
      }
    }
    const j = Ot;
    Ot = a;
    try {
      return c ? c(e, 3, [_]) : e(_);
    } finally {
      Ot = j;
    }
  } : d = We, t && i) {
    const j = d, k = i === !0 ? 1 / 0 : i;
    d = () => xt(j(), k);
  }
  const H = sr(), W = () => {
    a.stop(), H && H.active && Ns(H.effects, a);
  };
  if (r && t) {
    const j = t;
    t = (...k) => {
      const G = j(...k);
      return W(), G;
    };
  }
  let K = N ? new Array(e.length).fill(Cn) : Cn;
  const B = (j) => {
    if (!(!(a.flags & 1) || !a.dirty && !j))
      if (t) {
        const k = a.run();
        if (j || i || x || (N ? k.some((G, X) => et(G, K[X])) : et(k, K))) {
          h && h();
          const G = Ot;
          Ot = a;
          try {
            const X = [
              k,
              // pass undefined as the old value when it's changed for the first time
              K === Cn ? void 0 : N && K[0] === Cn ? [] : K,
              _
            ];
            K = k, c ? c(t, 3, X) : (
              // @ts-expect-error
              t(...X)
            );
          } finally {
            Ot = G;
          }
        }
      } else
        a.run();
  };
  return l && l(B), a = new rr(d), a.scheduler = o ? () => o(B, !1) : B, _ = (j) => ol(j, !1, a), h = a.onStop = () => {
    const j = On.get(a);
    if (j) {
      if (c)
        c(j, 4);
      else
        for (const k of j)
          k();
      On.delete(a);
    }
  }, t ? s ? B(!0) : K = a.run() : o ? o(B.bind(null, !0), !0) : a.run(), W.pause = a.pause.bind(a), W.resume = a.resume.bind(a), W.stop = W, W;
}
function xt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ye(e))
    xt(e.value, t, n);
  else if (J(e))
    for (let s = 0; s < e.length; s++)
      xt(e[s], t, n);
  else if (Ui(e) || Kt(e))
    e.forEach((s) => {
      xt(s, t, n);
    });
  else if (Yi(e)) {
    for (const s in e)
      xt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && xt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function _n(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    qn(i, t, n);
  }
}
function je(e, t, n, s) {
  if (Z(e)) {
    const i = _n(e, t, n, s);
    return i && Ji(i) && i.catch((r) => {
      qn(r, t, n);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(je(e[r], t, n, s));
    return i;
  }
}
function qn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || he;
  if (t) {
    let l = t.parent;
    const c = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, c, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      nt(), _n(r, null, 10, [
        e,
        c,
        f
      ]), st();
      return;
    }
  }
  cl(e, n, i, s, o);
}
function cl(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Te = [];
let Qe = -1;
const Ut = [];
let _t = null, Wt = 0;
const xr = /* @__PURE__ */ Promise.resolve();
let Ln = null;
function bt(e) {
  const t = Ln || xr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function al(e) {
  let t = Qe + 1, n = Te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Te[s], r = dn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Vs(e) {
  if (!(e.flags & 1)) {
    const t = dn(e), n = Te[Te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dn(n) ? Te.push(e) : Te.splice(al(t), 0, e), e.flags |= 1, Sr();
  }
}
function Sr() {
  Ln || (Ln = xr.then(Cr));
}
function ul(e) {
  J(e) ? Ut.push(...e) : _t && e.id === -1 ? _t.splice(Wt + 1, 0, e) : e.flags & 1 || (Ut.push(e), e.flags |= 1), Sr();
}
function ii(e, t, n = Qe + 1) {
  for (; n < Te.length; n++) {
    const s = Te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Te.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function wr(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)].sort(
      (n, s) => dn(n) - dn(s)
    );
    if (Ut.length = 0, _t) {
      _t.push(...t);
      return;
    }
    for (_t = t, Wt = 0; Wt < _t.length; Wt++) {
      const n = _t[Wt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    _t = null, Wt = 0;
  }
}
const dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Cr(e) {
  const t = We;
  try {
    for (Qe = 0; Qe < Te.length; Qe++) {
      const n = Te[Qe];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), _n(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Qe < Te.length; Qe++) {
      const n = Te[Qe];
      n && (n.flags &= -2);
    }
    Qe = -1, Te.length = 0, wr(), Ln = null, (Te.length || Ut.length) && Cr();
  }
}
let tt = null, Er = null;
function $n(e) {
  const t = tt;
  return tt = e, Er = e && e.type.__scopeId || null, t;
}
function Tr(e, t = tt, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Nn(-1);
    const r = $n(t);
    let o;
    try {
      o = e(...i);
    } finally {
      $n(r), s._d && Nn(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Tt(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[s];
    c && (nt(), je(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
function fl(e, t) {
  if (Me) {
    let n = Me.provides;
    const s = Me.parent && Me.parent.provides;
    s === n && (n = Me.provides = Object.create(s)), n[e] = t;
  }
}
function rn(e, t, n = !1) {
  const s = Gs();
  if (s || Nt) {
    let i = Nt ? Nt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(s && s.proxy) : t;
  }
}
function hl() {
  return !!(Gs() || Nt);
}
const dl = /* @__PURE__ */ Symbol.for("v-scx"), pl = () => rn(dl);
function Pt(e, t, n) {
  return Ir(e, t, n);
}
function Ir(e, t, n = he) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = _e({}, n), c = t && s || !t && r !== "post";
  let f;
  if (mn) {
    if (r === "sync") {
      const _ = pl();
      f = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {
      };
      return _.stop = We, _.resume = We, _.pause = We, _;
    }
  }
  const a = Me;
  l.call = (_, x, N) => je(_, a, x, N);
  let d = !1;
  r === "post" ? l.scheduler = (_) => {
    Oe(_, a && a.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (_, x) => {
    x ? _() : Vs(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, a && (_.id = a.uid, _.i = a));
  };
  const h = ll(e, t, l);
  return mn && (f ? f.push(h) : c && h()), h;
}
function gl(e, t, n) {
  const s = this.proxy, i = ge(e) ? e.includes(".") ? Mr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Z(t) ? r = t : (r = t.handler, n = t);
  const o = bn(this), l = Ir(i, r.bind(s), n);
  return o(), l;
}
function Mr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const ml = /* @__PURE__ */ Symbol("_vte"), Ar = (e) => e.__isTeleport, ke = /* @__PURE__ */ Symbol("_leaveCb"), Gt = /* @__PURE__ */ Symbol("_enterCb");
function vl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ks(() => {
    e.isMounted = !0;
  }), Dr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ne = [Function, Array], Or = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ne,
  onEnter: Ne,
  onAfterEnter: Ne,
  onEnterCancelled: Ne,
  // leave
  onBeforeLeave: Ne,
  onLeave: Ne,
  onAfterLeave: Ne,
  onLeaveCancelled: Ne,
  // appear
  onBeforeAppear: Ne,
  onAppear: Ne,
  onAfterAppear: Ne,
  onAppearCancelled: Ne
}, Lr = (e) => {
  const t = e.subTree;
  return t.component ? Lr(t.component) : t;
}, yl = {
  name: "BaseTransition",
  props: Or,
  setup(e, { slots: t }) {
    const n = Gs(), s = vl();
    return () => {
      const i = t.default && Pr(t.default(), !0), r = i && i.length ? $r(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? He() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ re(e), { mode: l } = o;
      if (s.isLeaving)
        return as(r);
      const c = ri(r);
      if (!c)
        return as(r);
      let f = Cs(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => f = d
      );
      c.type !== Ie && pn(c, f);
      let a = n.subTree && ri(n.subTree);
      if (a && a.type !== Ie && !Lt(a, c) && Lr(n).type !== Ie) {
        let d = Cs(
          a,
          o,
          s,
          n
        );
        if (pn(a, d), l === "out-in" && c.type !== Ie)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, a = void 0;
          }, as(r);
        l === "in-out" && c.type !== Ie ? d.delayLeave = (h, _, x) => {
          const N = Fr(
            s,
            a
          );
          N[String(a.key)] = a, h[ke] = () => {
            _(), h[ke] = void 0, delete f.delayedLeave, a = void 0;
          }, f.delayedLeave = () => {
            x(), delete f.delayedLeave, a = void 0;
          };
        } : a = void 0;
      } else
        a && (a = void 0);
      return r;
    };
  }
};
function $r(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ie) {
        t = n;
        break;
      }
  }
  return t;
}
const _l = yl;
function Fr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Cs(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: f,
    onAfterEnter: a,
    onEnterCancelled: d,
    onBeforeLeave: h,
    onLeave: _,
    onAfterLeave: x,
    onLeaveCancelled: N,
    onBeforeAppear: H,
    onAppear: W,
    onAfterAppear: K,
    onAppearCancelled: B
  } = t, j = String(e.key), k = Fr(n, e), G = (M, V) => {
    M && je(
      M,
      s,
      9,
      V
    );
  }, X = (M, V) => {
    const q = V[1];
    G(M, V), J(M) ? M.every((O) => O.length <= 1) && q() : M.length <= 1 && q();
  }, D = {
    mode: o,
    persisted: l,
    beforeEnter(M) {
      let V = c;
      if (!n.isMounted)
        if (r)
          V = H || c;
        else
          return;
      M[ke] && M[ke](
        !0
        /* cancelled */
      );
      const q = k[j];
      q && Lt(e, q) && q.el[ke] && q.el[ke](), G(V, [M]);
    },
    enter(M) {
      if (k[j] === e)
        return;
      let V = f, q = a, O = d;
      if (!n.isMounted)
        if (r)
          V = W || f, q = K || a, O = B || d;
        else
          return;
      let se = !1;
      M[Gt] = (Se) => {
        se || (se = !0, Se ? G(O, [M]) : G(q, [M]), D.delayedLeave && D.delayedLeave(), M[Gt] = void 0);
      };
      const ce = M[Gt].bind(null, !1);
      V ? X(V, [M, ce]) : ce();
    },
    leave(M, V) {
      const q = String(e.key);
      if (M[Gt] && M[Gt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return V();
      G(h, [M]);
      let O = !1;
      M[ke] = (ce) => {
        O || (O = !0, V(), ce ? G(N, [M]) : G(x, [M]), M[ke] = void 0, k[q] === e && delete k[q]);
      };
      const se = M[ke].bind(null, !1);
      k[q] = e, _ ? X(_, [M, se]) : se();
    },
    clone(M) {
      const V = Cs(
        M,
        t,
        n,
        s,
        i
      );
      return i && i(V), V;
    }
  };
  return D;
}
function as(e) {
  if (Yn(e))
    return e = wt(e), e.children = null, e;
}
function ri(e) {
  if (!Yn(e))
    return Ar(e.type) && e.children ? $r(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Z(n.default))
      return n.default();
  }
}
function pn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pr(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Re ? (o.patchFlag & 128 && i++, s = s.concat(
      Pr(o.children, t, l)
    )) : (t || o.type !== Ie) && s.push(l != null ? wt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Nr(e, t) {
  return Z(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => _e({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function kr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function oi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fn = /* @__PURE__ */ new WeakMap();
function on(e, t, n, s, i = !1) {
  if (J(e)) {
    e.forEach(
      (N, H) => on(
        N,
        t && (J(t) ? t[H] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (ln(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && on(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Qs(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, f = t && t.r, a = l.refs === he ? l.refs = {} : l.refs, d = l.setupState, h = /* @__PURE__ */ re(d), _ = d === he ? Ki : (N) => oi(a, N) ? !1 : oe(h, N), x = (N, H) => !(H && oi(a, H));
  if (f != null && f !== c) {
    if (li(t), ge(f))
      a[f] = null, _(f) && (d[f] = null);
    else if (/* @__PURE__ */ ye(f)) {
      const N = t;
      x(f, N.k) && (f.value = null), N.k && (a[N.k] = null);
    }
  }
  if (Z(c)) {
    nt();
    try {
      _n(c, l, 12, [o, a]);
    } finally {
      st();
    }
  } else {
    const N = ge(c), H = /* @__PURE__ */ ye(c);
    if (N || H) {
      const W = () => {
        if (e.f) {
          const K = N ? _(c) ? d[c] : a[c] : x() || !e.k ? c.value : a[e.k];
          if (i)
            J(K) && Ns(K, r);
          else if (J(K))
            K.includes(r) || K.push(r);
          else if (N)
            a[c] = [r], _(c) && (d[c] = a[c]);
          else {
            const B = [r];
            x(c, e.k) && (c.value = B), e.k && (a[e.k] = B);
          }
        } else
          N ? (a[c] = o, _(c) && (d[c] = o)) : H && (x(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const K = () => {
          W(), Fn.delete(e);
        };
        K.id = -1, Fn.set(e, K), Oe(K, n);
      } else
        li(e), W();
    }
  }
}
function li(e) {
  const t = Fn.get(e);
  t && (t.flags |= 8, Fn.delete(e));
}
Vn().requestIdleCallback;
Vn().cancelIdleCallback;
const ln = (e) => !!e.type.__asyncLoader, Yn = (e) => e.type.__isKeepAlive;
function bl(e, t) {
  Rr(e, "a", t);
}
function xl(e, t) {
  Rr(e, "da", t);
}
function Rr(e, t, n = Me) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Gn(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Yn(i.parent.vnode) && Sl(s, t, n, i), i = i.parent;
  }
}
function Sl(e, t, n, s) {
  const i = Gn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Us(() => {
    Ns(s[t], i);
  }, n);
}
function Gn(e, t, n = Me, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      nt();
      const l = bn(n), c = je(t, n, e, o);
      return l(), st(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const dt = (e) => (t, n = Me) => {
  (!mn || e === "sp") && Gn(e, (...s) => t(...s), n);
}, wl = dt("bm"), Ks = dt("m"), Cl = dt(
  "bu"
), El = dt("u"), Dr = dt(
  "bum"
), Us = dt("um"), Tl = dt(
  "sp"
), Il = dt("rtg"), Ml = dt("rtc");
function Al(e, t = Me) {
  Gn("ec", e, t);
}
const Ol = /* @__PURE__ */ Symbol.for("v-ndc");
function jr(e, t, n, s) {
  let i;
  const r = n && n[s], o = J(e);
  if (o || ge(e)) {
    const l = o && /* @__PURE__ */ ft(e);
    let c = !1, f = !1;
    l && (c = !/* @__PURE__ */ Fe(e), f = /* @__PURE__ */ ht(e), e = Kn(e)), i = new Array(e.length);
    for (let a = 0, d = e.length; a < d; a++)
      i[a] = t(
        c ? f ? Jt(Ue(e[a])) : Ue(e[a]) : e[a],
        a,
        void 0,
        r && r[a]
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r && r[l]);
  } else if (le(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, r && r[c])
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, f = l.length; c < f; c++) {
        const a = l[c];
        i[c] = t(e[a], a, c, r && r[c]);
      }
    }
  else
    i = [];
  return n && (n[s] = i), i;
}
const Es = (e) => e ? ro(e) ? Qs(e) : Es(e.parent) : null, cn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _e(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Js(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = bt.bind(e.proxy)),
    $watch: (e) => gl.bind(e)
  })
), us = (e, t) => e !== he && !e.__isScriptSetup && oe(e, t), Ll = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const h = o[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (us(s, t))
          return o[t] = 1, s[t];
        if (i !== he && oe(i, t))
          return o[t] = 2, i[t];
        if (oe(r, t))
          return o[t] = 3, r[t];
        if (n !== he && oe(n, t))
          return o[t] = 4, n[t];
        Ts && (o[t] = 0);
      }
    }
    const f = cn[t];
    let a, d;
    if (f)
      return t === "$attrs" && Ce(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== he && oe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = c.config.globalProperties, oe(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return us(i, t) ? (i[t] = n, !0) : s !== he && oe(s, t) ? (s[t] = n, !0) : oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== he && l[0] !== "$" && oe(e, l) || us(t, l) || oe(r, l) || oe(s, l) || oe(cn, l) || oe(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ci(e) {
  return J(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ts = !0;
function $l(e) {
  const t = Js(e), n = e.proxy, s = e.ctx;
  Ts = !1, t.beforeCreate && ai(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: f,
    // lifecycle
    created: a,
    beforeMount: d,
    mounted: h,
    beforeUpdate: _,
    updated: x,
    activated: N,
    deactivated: H,
    beforeDestroy: W,
    beforeUnmount: K,
    destroyed: B,
    unmounted: j,
    render: k,
    renderTracked: G,
    renderTriggered: X,
    errorCaptured: D,
    serverPrefetch: M,
    // public API
    expose: V,
    inheritAttrs: q,
    // assets
    components: O,
    directives: se,
    filters: ce
  } = t;
  if (f && Fl(f, s, null), o)
    for (const ee in o) {
      const ae = o[ee];
      Z(ae) && (s[ee] = ae.bind(n));
    }
  if (i) {
    const ee = i.call(n, n);
    le(ee) && (e.data = /* @__PURE__ */ Un(ee));
  }
  if (Ts = !0, r)
    for (const ee in r) {
      const ae = r[ee], Je = Z(ae) ? ae.bind(n, n) : Z(ae.get) ? ae.get.bind(n, n) : We, it = !Z(ae) && Z(ae.set) ? ae.set.bind(n) : We, qe = Le({
        get: Je,
        set: it
      });
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (Pe) => qe.value = Pe
      });
    }
  if (l)
    for (const ee in l)
      zr(l[ee], s, n, ee);
  if (c) {
    const ee = Z(c) ? c.call(n) : c;
    Reflect.ownKeys(ee).forEach((ae) => {
      fl(ae, ee[ae]);
    });
  }
  a && ai(a, e, "c");
  function ue(ee, ae) {
    J(ae) ? ae.forEach((Je) => ee(Je.bind(n))) : ae && ee(ae.bind(n));
  }
  if (ue(wl, d), ue(Ks, h), ue(Cl, _), ue(El, x), ue(bl, N), ue(xl, H), ue(Al, D), ue(Ml, G), ue(Il, X), ue(Dr, K), ue(Us, j), ue(Tl, M), J(V))
    if (V.length) {
      const ee = e.exposed || (e.exposed = {});
      V.forEach((ae) => {
        Object.defineProperty(ee, ae, {
          get: () => n[ae],
          set: (Je) => n[ae] = Je,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  k && e.render === We && (e.render = k), q != null && (e.inheritAttrs = q), O && (e.components = O), se && (e.directives = se), M && kr(e);
}
function Fl(e, t, n = We) {
  J(e) && (e = Is(e));
  for (const s in e) {
    const i = e[s];
    let r;
    le(i) ? "default" in i ? r = rn(
      i.from || s,
      i.default,
      !0
    ) : r = rn(i.from || s) : r = rn(i), /* @__PURE__ */ ye(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function ai(e, t, n) {
  je(
    J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zr(e, t, n, s) {
  let i = s.includes(".") ? Mr(n, s) : () => n[s];
  if (ge(e)) {
    const r = t[e];
    Z(r) && Pt(i, r);
  } else if (Z(e))
    Pt(i, e.bind(n));
  else if (le(e))
    if (J(e))
      e.forEach((r) => zr(r, t, n, s));
    else {
      const r = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(r) && Pt(i, r, e);
    }
}
function Js(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !n && !s ? c = t : (c = {}, i.length && i.forEach(
    (f) => Pn(c, f, o, !0)
  ), Pn(c, t, o)), le(t) && r.set(t, c), c;
}
function Pn(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Pn(e, r, n, !0), i && i.forEach(
    (o) => Pn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Pl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Pl = {
  data: ui,
  props: fi,
  emits: fi,
  // objects
  methods: Zt,
  computed: Zt,
  // lifecycle
  beforeCreate: Ee,
  created: Ee,
  beforeMount: Ee,
  mounted: Ee,
  beforeUpdate: Ee,
  updated: Ee,
  beforeDestroy: Ee,
  beforeUnmount: Ee,
  destroyed: Ee,
  unmounted: Ee,
  activated: Ee,
  deactivated: Ee,
  errorCaptured: Ee,
  serverPrefetch: Ee,
  // assets
  components: Zt,
  directives: Zt,
  // watch
  watch: kl,
  // provide / inject
  provide: ui,
  inject: Nl
};
function ui(e, t) {
  return t ? e ? function() {
    return _e(
      Z(e) ? e.call(this, this) : e,
      Z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nl(e, t) {
  return Zt(Is(e), Is(t));
}
function Is(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Zt(e, t) {
  return e ? _e(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fi(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _e(
    /* @__PURE__ */ Object.create(null),
    ci(e),
    ci(t ?? {})
  ) : t;
}
function kl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = _e(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ee(e[s], t[s]);
  return n;
}
function Br() {
  return {
    app: null,
    config: {
      isNativeTag: Ki,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Rl = 0;
function Dl(e, t) {
  return function(s, i = null) {
    Z(s) || (s = _e({}, s)), i != null && !le(i) && (i = null);
    const r = Br(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = r.app = {
      _uid: Rl++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: vc,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && Z(a.install) ? (o.add(a), a.install(f, ...d)) : Z(a) && (o.add(a), a(f, ...d))), f;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), f;
      },
      component(a, d) {
        return d ? (r.components[a] = d, f) : r.components[a];
      },
      directive(a, d) {
        return d ? (r.directives[a] = d, f) : r.directives[a];
      },
      mount(a, d, h) {
        if (!c) {
          const _ = f._ceVNode || Ae(s, i);
          return _.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), d && t ? t(_, a) : e(_, a, h), c = !0, f._container = a, a.__vue_app__ = f, Qs(_.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (je(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(a, d) {
        return r.provides[a] = d, f;
      },
      runWithContext(a) {
        const d = Nt;
        Nt = f;
        try {
          return a();
        } finally {
          Nt = d;
        }
      }
    };
    return f;
  };
}
let Nt = null;
const jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${kt(t)}Modifiers`];
function zl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || he;
  let i = n;
  const r = t.startsWith("update:"), o = r && jl(s, t.slice(7));
  o && (o.trim && (i = n.map((a) => ge(a) ? a.trim() : a)), o.number && (i = n.map(Eo)));
  let l, c = s[l = ss(t)] || // also try camelCase event handler (#2249)
  s[l = ss(Ve(t))];
  !c && r && (c = s[l = ss(kt(t))]), c && je(
    c,
    e,
    6,
    i
  );
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, je(
      f,
      e,
      6,
      i
    );
  }
}
const Bl = /* @__PURE__ */ new WeakMap();
function Hr(e, t, n = !1) {
  const s = n ? Bl : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Z(e)) {
    const c = (f) => {
      const a = Hr(f, t, !0);
      a && (l = !0, _e(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (le(e) && s.set(e, null), null) : (J(r) ? r.forEach((c) => o[c] = null) : _e(o, r), le(e) && s.set(e, o), o);
}
function Qn(e, t) {
  return !e || !zn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, kt(t)) || oe(e, t));
}
function fs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: c,
    render: f,
    renderCache: a,
    props: d,
    data: h,
    setupState: _,
    ctx: x,
    inheritAttrs: N
  } = e, H = $n(e);
  let W, K;
  try {
    if (n.shapeFlag & 4) {
      const j = i || s, k = j;
      W = Ze(
        f.call(
          k,
          j,
          a,
          d,
          _,
          h,
          x
        )
      ), K = l;
    } else {
      const j = t;
      W = Ze(
        j.length > 1 ? j(
          d,
          { attrs: l, slots: o, emit: c }
        ) : j(
          d,
          null
        )
      ), K = t.props ? l : Hl(l);
    }
  } catch (j) {
    an.length = 0, qn(j, e, 1), W = Ae(Ie);
  }
  let B = W;
  if (K && N !== !1) {
    const j = Object.keys(K), { shapeFlag: k } = B;
    j.length && k & 7 && (r && j.some(Bn) && (K = Wl(
      K,
      r
    )), B = wt(B, K, !1, !0));
  }
  return n.dirs && (B = wt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && pn(B, n.transition), W = B, $n(H), W;
}
const Hl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Bn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Vl(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? hi(s, o, f) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const h = a[d];
        if (Wr(o, s, h) && !Qn(f, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? hi(s, o, f) : !0 : !!o;
  return !1;
}
function hi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Wr(t, e, r) && !Qn(n, r))
      return !0;
  }
  return !1;
}
function Wr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && le(s) && le(i) ? !ks(s, i) : s !== i;
}
function Kl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Vr = {}, Kr = () => Object.create(Vr), Ur = (e) => Object.getPrototypeOf(e) === Vr;
function Ul(e, t, n, s = !1) {
  const i = {}, r = Kr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Xo(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Jl(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ re(i), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let h = a[d];
        if (Qn(e.emitsOptions, h))
          continue;
        const _ = t[h];
        if (c)
          if (oe(r, h))
            _ !== r[h] && (r[h] = _, f = !0);
          else {
            const x = Ve(h);
            i[x] = Ms(
              c,
              l,
              x,
              _,
              e,
              !1
            );
          }
        else
          _ !== r[h] && (r[h] = _, f = !0);
      }
    }
  } else {
    Jr(e, t, i, r) && (f = !0);
    let a;
    for (const d in l)
      (!t || // for camelCase
      !oe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = kt(d)) === d || !oe(t, a))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[d] = Ms(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !oe(t, d)) && (delete r[d], f = !0);
  }
  f && ut(e.attrs, "set", "");
}
function Jr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (tn(c))
        continue;
      const f = t[c];
      let a;
      i && oe(i, a = Ve(c)) ? !r || !r.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : Qn(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ re(n), f = l || he;
    for (let a = 0; a < r.length; a++) {
      const d = r[a];
      n[d] = Ms(
        i,
        c,
        d,
        f[d],
        e,
        !oe(f, d)
      );
    }
  }
  return o;
}
function Ms(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = oe(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Z(c)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const a = bn(i);
          s = f[n] = c.call(
            null,
            t
          ), a();
        }
      } else
        s = c;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === kt(n)) && (s = !0));
  }
  return s;
}
const ql = /* @__PURE__ */ new WeakMap();
function qr(e, t, n = !1) {
  const s = n ? ql : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!Z(e)) {
    const a = (d) => {
      c = !0;
      const [h, _] = qr(d, t, !0);
      _e(o, h), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return le(e) && s.set(e, Vt), Vt;
  if (J(r))
    for (let a = 0; a < r.length; a++) {
      const d = Ve(r[a]);
      di(d) && (o[d] = he);
    }
  else if (r)
    for (const a in r) {
      const d = Ve(a);
      if (di(d)) {
        const h = r[a], _ = o[d] = J(h) || Z(h) ? { type: h } : _e({}, h), x = _.type;
        let N = !1, H = !0;
        if (J(x))
          for (let W = 0; W < x.length; ++W) {
            const K = x[W], B = Z(K) && K.name;
            if (B === "Boolean") {
              N = !0;
              break;
            } else
              B === "String" && (H = !1);
          }
        else
          N = Z(x) && x.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = N, _[
          1
          /* shouldCastTrue */
        ] = H, (N || oe(_, "default")) && l.push(d);
      }
    }
  const f = [o, l];
  return le(e) && s.set(e, f), f;
}
function di(e) {
  return e[0] !== "$" && !tn(e);
}
const qs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ys = (e) => J(e) ? e.map(Ze) : [Ze(e)], Yl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Tr((...i) => Ys(t(...i)), n);
  return s._c = !1, s;
}, Yr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (qs(i))
      continue;
    const r = e[i];
    if (Z(r))
      t[i] = Yl(i, r, s);
    else if (r != null) {
      const o = Ys(r);
      t[i] = () => o;
    }
  }
}, Gr = (e, t) => {
  const n = Ys(t);
  e.slots.default = () => n;
}, Qr = (e, t, n) => {
  for (const s in t)
    (n || !qs(s)) && (e[s] = t[s]);
}, Gl = (e, t, n) => {
  const s = e.slots = Kr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Qr(s, t, n), n && Qi(s, "_", i, !0)) : Yr(t, s);
  } else
    t && Gr(e, t);
}, Ql = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = he;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Qr(i, t, n) : (r = !t.$stable, Yr(t, i)), o = t;
  } else
    t && (Gr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !qs(l) && o[l] == null && delete i[l];
}, Oe = nc;
function Xl(e) {
  return Zl(e);
}
function Zl(e, t) {
  const n = Vn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: f,
    setElementText: a,
    parentNode: d,
    nextSibling: h,
    setScopeId: _ = We,
    insertStaticContent: x
  } = e, N = (u, p, y, I = null, w = null, S = null, R = void 0, P = null, L = !!p.dynamicChildren) => {
    if (u === p)
      return;
    u && !Lt(u, p) && (I = Dt(u), Pe(u, w, S, !0), u = null), p.patchFlag === -2 && (L = !1, p.dynamicChildren = null);
    const { type: C, ref: v, shapeFlag: g } = p;
    switch (C) {
      case Xn:
        H(u, p, y, I);
        break;
      case Ie:
        W(u, p, y, I);
        break;
      case ds:
        u == null && K(p, y, I, R);
        break;
      case Re:
        O(
          u,
          p,
          y,
          I,
          w,
          S,
          R,
          P,
          L
        );
        break;
      default:
        g & 1 ? k(
          u,
          p,
          y,
          I,
          w,
          S,
          R,
          P,
          L
        ) : g & 6 ? se(
          u,
          p,
          y,
          I,
          w,
          S,
          R,
          P,
          L
        ) : (g & 64 || g & 128) && C.process(
          u,
          p,
          y,
          I,
          w,
          S,
          R,
          P,
          L,
          Be
        );
    }
    v != null && w ? on(v, u && u.ref, S, p || u, !p) : v == null && u && u.ref != null && on(u.ref, null, S, u, !0);
  }, H = (u, p, y, I) => {
    if (u == null)
      s(
        p.el = l(p.children),
        y,
        I
      );
    else {
      const w = p.el = u.el;
      p.children !== u.children && f(w, p.children);
    }
  }, W = (u, p, y, I) => {
    u == null ? s(
      p.el = c(p.children || ""),
      y,
      I
    ) : p.el = u.el;
  }, K = (u, p, y, I) => {
    [u.el, u.anchor] = x(
      u.children,
      p,
      y,
      I,
      u.el,
      u.anchor
    );
  }, B = ({ el: u, anchor: p }, y, I) => {
    let w;
    for (; u && u !== p; )
      w = h(u), s(u, y, I), u = w;
    s(p, y, I);
  }, j = ({ el: u, anchor: p }) => {
    let y;
    for (; u && u !== p; )
      y = h(u), i(u), u = y;
    i(p);
  }, k = (u, p, y, I, w, S, R, P, L) => {
    if (p.type === "svg" ? R = "svg" : p.type === "math" && (R = "mathml"), u == null)
      G(
        p,
        y,
        I,
        w,
        S,
        R,
        P,
        L
      );
    else {
      const C = u.el && u.el._isVueCE ? u.el : null;
      try {
        C && C._beginPatch(), M(
          u,
          p,
          w,
          S,
          R,
          P,
          L
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, G = (u, p, y, I, w, S, R, P) => {
    let L, C;
    const { props: v, shapeFlag: g, transition: m, dirs: b } = u;
    if (L = u.el = o(
      u.type,
      S,
      v && v.is,
      v
    ), g & 8 ? a(L, u.children) : g & 16 && D(
      u.children,
      L,
      null,
      I,
      w,
      hs(u, S),
      R,
      P
    ), b && Tt(u, null, I, "created"), X(L, u, u.scopeId, R, I), v) {
      for (const A in v)
        A !== "value" && !tn(A) && r(L, A, null, v[A], S, I);
      "value" in v && r(L, "value", null, v.value, S), (C = v.onVnodeBeforeMount) && Ge(C, I, u);
    }
    b && Tt(u, null, I, "beforeMount");
    const T = ec(w, m);
    T && m.beforeEnter(L), s(L, p, y), ((C = v && v.onVnodeMounted) || T || b) && Oe(() => {
      try {
        C && Ge(C, I, u), T && m.enter(L), b && Tt(u, null, I, "mounted");
      } finally {
      }
    }, w);
  }, X = (u, p, y, I, w) => {
    if (y && _(u, y), I)
      for (let S = 0; S < I.length; S++)
        _(u, I[S]);
    if (w) {
      let S = w.subTree;
      if (p === S || to(S.type) && (S.ssContent === p || S.ssFallback === p)) {
        const R = w.vnode;
        X(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          w.parent
        );
      }
    }
  }, D = (u, p, y, I, w, S, R, P, L = 0) => {
    for (let C = L; C < u.length; C++) {
      const v = u[C] = P ? at(u[C]) : Ze(u[C]);
      N(
        null,
        v,
        p,
        y,
        I,
        w,
        S,
        R,
        P
      );
    }
  }, M = (u, p, y, I, w, S, R) => {
    const P = p.el = u.el;
    let { patchFlag: L, dynamicChildren: C, dirs: v } = p;
    L |= u.patchFlag & 16;
    const g = u.props || he, m = p.props || he;
    let b;
    if (y && It(y, !1), (b = m.onVnodeBeforeUpdate) && Ge(b, y, p, u), v && Tt(p, u, y, "beforeUpdate"), y && It(y, !0), // HMR updated, force full diff
    // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!u.dynamicChildren || u.dynamicChildren.length !== C.length) && (L = 0, R = !1, C = null), (g.innerHTML && m.innerHTML == null || g.textContent && m.textContent == null) && a(P, ""), C ? V(
      u.dynamicChildren,
      C,
      P,
      y,
      I,
      hs(p, w),
      S
    ) : R || ae(
      u,
      p,
      P,
      null,
      y,
      I,
      hs(p, w),
      S,
      !1
    ), L > 0) {
      if (L & 16)
        q(P, g, m, y, w);
      else if (L & 2 && g.class !== m.class && r(P, "class", null, m.class, w), L & 4 && r(P, "style", g.style, m.style, w), L & 8) {
        const T = p.dynamicProps;
        for (let A = 0; A < T.length; A++) {
          const E = T[A], F = g[E], z = m[E];
          (z !== F || E === "value") && r(P, E, F, z, w, y);
        }
      }
      L & 1 && u.children !== p.children && a(P, p.children);
    } else
      !R && C == null && q(P, g, m, y, w);
    ((b = m.onVnodeUpdated) || v) && Oe(() => {
      b && Ge(b, y, p, u), v && Tt(p, u, y, "updated");
    }, I);
  }, V = (u, p, y, I, w, S, R) => {
    for (let P = 0; P < p.length; P++) {
      const L = u[P], C = p[P], v = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === Re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(L, C) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? d(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          y
        )
      );
      N(
        L,
        C,
        v,
        null,
        I,
        w,
        S,
        R,
        !0
      );
    }
  }, q = (u, p, y, I, w) => {
    if (p !== y) {
      if (p !== he)
        for (const S in p)
          !tn(S) && !(S in y) && r(
            u,
            S,
            p[S],
            null,
            w,
            I
          );
      for (const S in y) {
        if (tn(S))
          continue;
        const R = y[S], P = p[S];
        R !== P && S !== "value" && r(u, S, P, R, w, I);
      }
      "value" in y && r(u, "value", p.value, y.value, w);
    }
  }, O = (u, p, y, I, w, S, R, P, L) => {
    const C = p.el = u ? u.el : l(""), v = p.anchor = u ? u.anchor : l("");
    let { patchFlag: g, dynamicChildren: m, slotScopeIds: b } = p;
    b && (P = P ? P.concat(b) : b), u == null ? (s(C, y, I), s(v, y, I), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      y,
      v,
      w,
      S,
      R,
      P,
      L
    )) : g > 0 && g & 64 && m && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === m.length ? (V(
      u.dynamicChildren,
      m,
      y,
      w,
      S,
      R,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || w && p === w.subTree) && Xr(
      u,
      p,
      !0
      /* shallow */
    )) : ae(
      u,
      p,
      y,
      v,
      w,
      S,
      R,
      P,
      L
    );
  }, se = (u, p, y, I, w, S, R, P, L) => {
    p.slotScopeIds = P, u == null ? p.shapeFlag & 512 ? w.ctx.activate(
      p,
      y,
      I,
      R,
      L
    ) : ce(
      p,
      y,
      I,
      w,
      S,
      R,
      L
    ) : Se(u, p, L);
  }, ce = (u, p, y, I, w, S, R) => {
    const P = u.component = uc(
      u,
      I,
      w
    );
    if (Yn(u) && (P.ctx.renderer = Be), fc(P, !1, R), P.asyncDep) {
      if (w && w.registerDep(P, ue, R), !u.el) {
        const L = P.subTree = Ae(Ie);
        W(null, L, p, y), u.placeholder = L.el;
      }
    } else
      ue(
        P,
        u,
        p,
        y,
        w,
        S,
        R
      );
  }, Se = (u, p, y) => {
    const I = p.component = u.component;
    if (Vl(u, p, y))
      if (I.asyncDep && !I.asyncResolved) {
        ee(I, p, y);
        return;
      } else
        I.next = p, I.update();
    else
      p.el = u.el, I.vnode = p;
  }, ue = (u, p, y, I, w, S, R) => {
    const P = () => {
      if (u.isMounted) {
        let { next: g, bu: m, u: b, parent: T, vnode: A } = u;
        {
          const U = Zr(u);
          if (U) {
            g && (g.el = A.el, ee(u, g, R)), U.asyncDep.then(() => {
              Oe(() => {
                u.isUnmounted || C();
              }, w);
            });
            return;
          }
        }
        let E = g, F;
        It(u, !1), g ? (g.el = A.el, ee(u, g, R)) : g = A, m && is(m), (F = g.props && g.props.onVnodeBeforeUpdate) && Ge(F, T, g, A), It(u, !0);
        const z = fs(u), Y = u.subTree;
        u.subTree = z, N(
          Y,
          z,
          // parent may have changed if it's in a teleport
          d(Y.el),
          // anchor may have changed if it's in a fragment
          Dt(Y),
          u,
          w,
          S
        ), g.el = z.el, E === null && Kl(u, z.el), b && Oe(b, w), (F = g.props && g.props.onVnodeUpdated) && Oe(
          () => Ge(F, T, g, A),
          w
        );
      } else {
        let g;
        const { el: m, props: b } = p, { bm: T, m: A, parent: E, root: F, type: z } = u, Y = ln(p);
        if (It(u, !1), T && is(T), !Y && (g = b && b.onVnodeBeforeMount) && Ge(g, E, p), It(u, !0), m && gt) {
          const U = () => {
            u.subTree = fs(u), gt(
              m,
              u.subTree,
              u,
              w,
              null
            );
          };
          Y && z.__asyncHydrate ? z.__asyncHydrate(
            m,
            u,
            U
          ) : U();
        } else {
          F.ce && F.ce._hasShadowRoot() && F.ce._injectChildStyle(
            z,
            u.parent ? u.parent.type : void 0
          );
          const U = u.subTree = fs(u);
          N(
            null,
            U,
            y,
            I,
            u,
            w,
            S
          ), p.el = U.el;
        }
        if (A && Oe(A, w), !Y && (g = b && b.onVnodeMounted)) {
          const U = p;
          Oe(
            () => Ge(g, E, U),
            w
          );
        }
        (p.shapeFlag & 256 || E && ln(E.vnode) && E.vnode.shapeFlag & 256) && u.a && Oe(u.a, w), u.isMounted = !0, p = y = I = null;
      }
    };
    u.scope.on();
    const L = u.effect = new rr(P);
    u.scope.off();
    const C = u.update = L.run.bind(L), v = u.job = L.runIfDirty.bind(L);
    v.i = u, v.id = u.uid, L.scheduler = () => Vs(v), It(u, !0), C();
  }, ee = (u, p, y) => {
    p.component = u;
    const I = u.vnode.props;
    u.vnode = p, u.next = null, Jl(u, p.props, I, y), Ql(u, p.children, y), nt(), ii(u), st();
  }, ae = (u, p, y, I, w, S, R, P, L = !1) => {
    const C = u && u.children, v = u ? u.shapeFlag : 0, g = p.children, { patchFlag: m, shapeFlag: b } = p;
    if (m > 0) {
      if (m & 128) {
        it(
          C,
          g,
          y,
          I,
          w,
          S,
          R,
          P,
          L
        );
        return;
      } else if (m & 256) {
        Je(
          C,
          g,
          y,
          I,
          w,
          S,
          R,
          P,
          L
        );
        return;
      }
    }
    b & 8 ? (v & 16 && ze(C, w, S), g !== C && a(y, g)) : v & 16 ? b & 16 ? it(
      C,
      g,
      y,
      I,
      w,
      S,
      R,
      P,
      L
    ) : ze(C, w, S, !0) : (v & 8 && a(y, ""), b & 16 && D(
      g,
      y,
      I,
      w,
      S,
      R,
      P,
      L
    ));
  }, Je = (u, p, y, I, w, S, R, P, L) => {
    u = u || Vt, p = p || Vt;
    const C = u.length, v = p.length, g = Math.min(C, v);
    let m;
    for (m = 0; m < g; m++) {
      const b = p[m] = L ? at(p[m]) : Ze(p[m]);
      N(
        u[m],
        b,
        y,
        null,
        w,
        S,
        R,
        P,
        L
      );
    }
    C > v ? ze(
      u,
      w,
      S,
      !0,
      !1,
      g
    ) : D(
      p,
      y,
      I,
      w,
      S,
      R,
      P,
      L,
      g
    );
  }, it = (u, p, y, I, w, S, R, P, L) => {
    let C = 0;
    const v = p.length;
    let g = u.length - 1, m = v - 1;
    for (; C <= g && C <= m; ) {
      const b = u[C], T = p[C] = L ? at(p[C]) : Ze(p[C]);
      if (Lt(b, T))
        N(
          b,
          T,
          y,
          null,
          w,
          S,
          R,
          P,
          L
        );
      else
        break;
      C++;
    }
    for (; C <= g && C <= m; ) {
      const b = u[g], T = p[m] = L ? at(p[m]) : Ze(p[m]);
      if (Lt(b, T))
        N(
          b,
          T,
          y,
          null,
          w,
          S,
          R,
          P,
          L
        );
      else
        break;
      g--, m--;
    }
    if (C > g) {
      if (C <= m) {
        const b = m + 1, T = b < v ? p[b].el : I;
        for (; C <= m; )
          N(
            null,
            p[C] = L ? at(p[C]) : Ze(p[C]),
            y,
            T,
            w,
            S,
            R,
            P,
            L
          ), C++;
      }
    } else if (C > m)
      for (; C <= g; )
        Pe(u[C], w, S, !0), C++;
    else {
      const b = C, T = C, A = /* @__PURE__ */ new Map();
      for (C = T; C <= m; C++) {
        const ie = p[C] = L ? at(p[C]) : Ze(p[C]);
        ie.key != null && A.set(ie.key, C);
      }
      let E, F = 0;
      const z = m - T + 1;
      let Y = !1, U = 0;
      const ne = new Array(z);
      for (C = 0; C < z; C++)
        ne[C] = 0;
      for (C = b; C <= g; C++) {
        const ie = u[C];
        if (F >= z) {
          Pe(ie, w, S, !0);
          continue;
        }
        let we;
        if (ie.key != null)
          we = A.get(ie.key);
        else
          for (E = T; E <= m; E++)
            if (ne[E - T] === 0 && Lt(ie, p[E])) {
              we = E;
              break;
            }
        we === void 0 ? Pe(ie, w, S, !0) : (ne[we - T] = C + 1, we >= U ? U = we : Y = !0, N(
          ie,
          p[we],
          y,
          null,
          w,
          S,
          R,
          P,
          L
        ), F++);
      }
      const me = Y ? tc(ne) : Vt;
      for (E = me.length - 1, C = z - 1; C >= 0; C--) {
        const ie = T + C, we = p[ie], Et = p[ie + 1], jt = ie + 1 < v ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Et.el || eo(Et)
        ) : I;
        ne[C] === 0 ? N(
          null,
          we,
          y,
          jt,
          w,
          S,
          R,
          P,
          L
        ) : Y && (E < 0 || C !== me[E] ? qe(we, y, jt, 2) : E--);
      }
    }
  }, qe = (u, p, y, I, w = null) => {
    const { el: S, type: R, transition: P, children: L, shapeFlag: C } = u;
    if (C & 6) {
      qe(u.component.subTree, p, y, I);
      return;
    }
    if (C & 128) {
      u.suspense.move(p, y, I);
      return;
    }
    if (C & 64) {
      R.move(u, p, y, Be);
      return;
    }
    if (R === Re) {
      s(S, p, y);
      for (let g = 0; g < L.length; g++)
        qe(L[g], p, y, I);
      s(u.anchor, p, y);
      return;
    }
    if (R === ds) {
      B(u, p, y);
      return;
    }
    if (I !== 2 && C & 1 && P)
      if (I === 0)
        P.persisted && !S[ke] ? s(S, p, y) : (P.beforeEnter(S), s(S, p, y), Oe(() => P.enter(S), w));
      else {
        const { leave: g, delayLeave: m, afterLeave: b } = P, T = () => {
          u.ctx.isUnmounted ? i(S) : s(S, p, y);
        }, A = () => {
          const E = S._isLeaving || !!S[ke];
          S._isLeaving && S[ke](
            !0
            /* cancelled */
          ), P.persisted && !E ? T() : g(S, () => {
            T(), b && b();
          });
        };
        m ? m(S, T, A) : A();
      }
    else
      s(S, p, y);
  }, Pe = (u, p, y, I = !1, w = !1) => {
    const {
      type: S,
      props: R,
      ref: P,
      children: L,
      dynamicChildren: C,
      shapeFlag: v,
      patchFlag: g,
      dirs: m,
      cacheIndex: b,
      memo: T
    } = u;
    if (g === -2 && (w = !1), P != null && (nt(), on(P, null, y, u, !0), st()), b != null && (p.renderCache[b] = void 0), v & 256) {
      p.ctx.deactivate(u);
      return;
    }
    const A = v & 1 && m, E = !ln(u);
    let F;
    if (E && (F = R && R.onVnodeBeforeUnmount) && Ge(F, p, u), v & 6)
      Ct(u.component, y, I);
    else {
      if (v & 128) {
        u.suspense.unmount(y, I);
        return;
      }
      A && Tt(u, null, p, "beforeUnmount"), v & 64 ? u.type.remove(
        u,
        p,
        y,
        Be,
        I
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== Re || g > 0 && g & 64) ? ze(
        C,
        p,
        y,
        !1,
        !0
      ) : (S === Re && g & 384 || !w && v & 16) && ze(L, p, y), I && Rt(u);
    }
    const z = T != null && b == null;
    (E && (F = R && R.onVnodeUnmounted) || A || z) && Oe(() => {
      F && Ge(F, p, u), A && Tt(u, null, p, "unmounted"), z && (u.el = null);
    }, y);
  }, Rt = (u) => {
    const { type: p, el: y, anchor: I, transition: w } = u;
    if (p === Re) {
      ts(y, I);
      return;
    }
    if (p === ds) {
      j(u);
      return;
    }
    const S = () => {
      i(y), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (u.shapeFlag & 1 && w && !w.persisted) {
      const { leave: R, delayLeave: P } = w, L = () => R(y, S);
      P ? P(u.el, S, L) : L();
    } else
      S();
  }, ts = (u, p) => {
    let y;
    for (; u !== p; )
      y = h(u), i(u), u = y;
    i(p);
  }, Ct = (u, p, y) => {
    const { bum: I, scope: w, job: S, subTree: R, um: P, m: L, a: C } = u;
    pi(L), pi(C), I && is(I), w.stop(), S && (S.flags |= 8, Pe(R, u, p, y)), P && Oe(P, p), Oe(() => {
      u.isUnmounted = !0;
    }, p);
  }, ze = (u, p, y, I = !1, w = !1, S = 0) => {
    for (let R = S; R < u.length; R++)
      Pe(u[R], p, y, I, w);
  }, Dt = (u) => {
    if (u.shapeFlag & 6)
      return Dt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const p = h(u.anchor || u.el), y = p && p[ml];
    return y ? h(y) : p;
  };
  let rt = !1;
  const qt = (u, p, y) => {
    let I;
    u == null ? p._vnode && (Pe(p._vnode, null, null, !0), I = p._vnode.component) : N(
      p._vnode || null,
      u,
      p,
      null,
      null,
      null,
      y
    ), p._vnode = u, rt || (rt = !0, ii(I), wr(), rt = !1);
  }, Be = {
    p: N,
    um: Pe,
    m: qe,
    r: Rt,
    mt: ce,
    mc: D,
    pc: ae,
    pbc: V,
    n: Dt,
    o: e
  };
  let pt, gt;
  return t && ([pt, gt] = t(
    Be
  )), {
    render: qt,
    hydrate: pt,
    createApp: Dl(qt, pt)
  };
}
function hs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function It({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ec(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (J(s) && J(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = at(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Xr(o, l)), l.type === Xn && (l.patchFlag === -1 && (l = i[r] = at(l)), l.el = o.el), l.type === Ie && !l.el && (l.el = o.el);
    }
}
function tc(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const f = e[s];
    if (f !== 0) {
      if (i = n[n.length - 1], e[i] < f) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < f ? r = l + 1 : o = l;
      f < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Zr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zr(t);
}
function pi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function eo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? eo(t.subTree) : null;
}
const to = (e) => e.__isSuspense;
function nc(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : ul(e);
}
const Re = /* @__PURE__ */ Symbol.for("v-fgt"), Xn = /* @__PURE__ */ Symbol.for("v-txt"), Ie = /* @__PURE__ */ Symbol.for("v-cmt"), ds = /* @__PURE__ */ Symbol.for("v-stc"), an = [];
let $e = null;
function de(e = !1) {
  an.push($e = e ? null : []);
}
function sc() {
  an.pop(), $e = an[an.length - 1] || null;
}
let gn = 1;
function Nn(e, t = !1) {
  gn += e, e < 0 && $e && t && ($e.hasOnce = !0);
}
function no(e) {
  return e.dynamicChildren = gn > 0 ? $e || Vt : null, sc(), gn > 0 && $e && $e.push(e), e;
}
function pe(e, t, n, s, i, r) {
  return no(
    Q(
      e,
      t,
      n,
      s,
      i,
      r,
      !0
    )
  );
}
function ic(e, t, n, s, i) {
  return no(
    Ae(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const so = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ge(e) || /* @__PURE__ */ ye(e) || Z(e) ? { i: tt, r: e, k: t, f: !!n } : e : null);
function Q(e, t = null, n = null, s = 0, i = null, r = e === Re ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && so(t),
    ref: t && Mn(t),
    scopeId: Er,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: tt
  };
  return l ? (Rn(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= ge(n) ? 8 : 16), gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && $e.push(c), c;
}
const Ae = rc;
function rc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Ol) && (e = Ie), kn(e)) {
    const l = wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Rn(l, n), gn > 0 && !r && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (gc(e) && (e = e.__vccOpts), t) {
    t = oc(t);
    let { class: l, style: c } = t;
    l && !ge(l) && (t.class = $t(l)), le(c) && (/* @__PURE__ */ Jn(c) && !J(c) && (c = _e({}, c)), t.style = St(c));
  }
  const o = ge(e) ? 1 : to(e) ? 128 : Ar(e) ? 64 : le(e) ? 4 : Z(e) ? 2 : 0;
  return Q(
    e,
    t,
    n,
    s,
    i,
    o,
    r,
    !0
  );
}
function oc(e) {
  return e ? /* @__PURE__ */ Jn(e) || Ur(e) ? _e({}, e) : e : null;
}
function wt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, f = t ? lc(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && so(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? J(r) ? r.concat(Mn(t)) : [r, Mn(t)] : Mn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Re ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && pn(
    a,
    c.clone(a)
  ), a;
}
function io(e = " ", t = 0) {
  return Ae(Xn, null, e, t);
}
function He(e = "", t = !1) {
  return t ? (de(), ic(Ie, null, e)) : Ae(Ie, null, e);
}
function Ze(e) {
  return e == null || typeof e == "boolean" ? Ae(Ie) : J(e) ? Ae(
    Re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? at(e) : Ae(Xn, null, String(e));
}
function at(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wt(e);
}
function Rn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (J(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Rn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ur(t) ? t._ctx = tt : i === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (s & 65) {
      Rn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: tt }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [io(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function lc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = $t([t.class, s.class]));
      else if (i === "style")
        t.style = St([t.style, s.style]);
      else if (zn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(J(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Bn(i) && (t[i] = o);
      } else
        i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ge(e, t, n, s = null) {
  je(e, t, 7, [
    n,
    s
  ]);
}
const cc = Br();
let ac = 0;
function uc(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || cc, r = {
    uid: ac++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new tr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: qr(s, i),
    emitsOptions: Hr(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = zl.bind(null, r), e.ce && e.ce(r), r;
}
let Me = null;
const Gs = () => Me || tt;
let Dn, As;
{
  const e = Vn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Dn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Me = n
  ), As = t(
    "__VUE_SSR_SETTERS__",
    (n) => mn = n
  );
}
const bn = (e) => {
  const t = Me;
  return Dn(e), e.scope.on(), () => {
    e.scope.off(), Dn(t);
  };
}, gi = () => {
  Me && Me.scope.off(), Dn(null);
};
function ro(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function fc(e, t = !1, n = !1) {
  t && As(t);
  const { props: s, children: i } = e.vnode, r = ro(e);
  Ul(e, s, r, t), Gl(e, i, n || t);
  const o = r ? hc(e, t) : void 0;
  return t && As(!1), o;
}
function hc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ll);
  const { setup: s } = n;
  if (s) {
    nt();
    const i = e.setupContext = s.length > 1 ? pc(e) : null, r = bn(e), o = _n(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ji(o);
    if (st(), r(), (l || e.sp) && !ln(e) && kr(e), l) {
      if (o.then(gi, gi), t)
        return o.then((c) => {
          mi(e, c, t);
        }).catch((c) => {
          qn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      mi(e, o, t);
  } else
    oo(e, t);
}
function mi(e, t, n) {
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = br(t)), oo(e, n);
}
let vi;
function oo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && vi && !s.render) {
      const i = s.template || Js(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: c } = s, f = _e(
          _e(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          c
        );
        s.render = vi(i, f);
      }
    }
    e.render = s.render || We;
  }
  {
    const i = bn(e);
    nt();
    try {
      $l(e);
    } finally {
      st(), i();
    }
  }
}
const dc = {
  get(e, t) {
    return Ce(e, "get", ""), e[t];
  }
};
function pc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, dc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(br(Ws(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in cn)
        return cn[n](e);
    },
    has(t, n) {
      return n in t || n in cn;
    }
  })) : e.proxy;
}
function gc(e) {
  return Z(e) && "__vccOpts" in e;
}
const Le = (e, t) => /* @__PURE__ */ rl(e, t, mn);
function mc(e, t, n) {
  try {
    Nn(-1);
    const s = arguments.length;
    return s === 2 ? le(t) && !J(t) ? kn(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && kn(n) && (n = [n]), Ae(e, t, n));
  } finally {
    Nn(1);
  }
}
const vc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Os;
const yi = typeof window < "u" && window.trustedTypes;
if (yi)
  try {
    Os = /* @__PURE__ */ yi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lo = Os ? (e) => Os.createHTML(e) : (e) => e, yc = "http://www.w3.org/2000/svg", _c = "http://www.w3.org/1998/Math/MathML", ct = typeof document < "u" ? document : null, _i = ct && /* @__PURE__ */ ct.createElement("template"), bc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? ct.createElementNS(yc, e) : t === "mathml" ? ct.createElementNS(_c, e) : n ? ct.createElement(e, { is: n }) : ct.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => ct.createTextNode(e),
  createComment: (e) => ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ct.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      _i.innerHTML = lo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = _i.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, mt = "transition", Qt = "animation", vn = /* @__PURE__ */ Symbol("_vtc"), co = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, xc = /* @__PURE__ */ _e(
  {},
  Or,
  co
), Sc = (e) => (e.displayName = "Transition", e.props = xc, e), wc = /* @__PURE__ */ Sc(
  (e, { slots: t }) => mc(_l, Cc(e), t)
), Mt = (e, t = []) => {
  J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, bi = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Cc(e) {
  const t = {};
  for (const O in e)
    O in co || (t[O] = e[O]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: i,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: f = o,
    appearToClass: a = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: _ = `${n}-leave-to`
  } = e, x = Ec(i), N = x && x[0], H = x && x[1], {
    onBeforeEnter: W,
    onEnter: K,
    onEnterCancelled: B,
    onLeave: j,
    onLeaveCancelled: k,
    onBeforeAppear: G = W,
    onAppear: X = K,
    onAppearCancelled: D = B
  } = t, M = (O, se, ce, Se) => {
    O._enterCancelled = Se, At(O, se ? a : l), At(O, se ? f : o), ce && ce();
  }, V = (O, se) => {
    O._isLeaving = !1, At(O, d), At(O, _), At(O, h), se && se();
  }, q = (O) => (se, ce) => {
    const Se = O ? X : K, ue = () => M(se, O, ce);
    Mt(Se, [se, ue]), xi(() => {
      At(se, O ? c : r), lt(se, O ? a : l), bi(Se) || Si(se, s, N, ue);
    });
  };
  return _e(t, {
    onBeforeEnter(O) {
      Mt(W, [O]), lt(O, r), lt(O, o);
    },
    onBeforeAppear(O) {
      Mt(G, [O]), lt(O, c), lt(O, f);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(O, se) {
      O._isLeaving = !0;
      const ce = () => V(O, se);
      lt(O, d), O._enterCancelled ? (lt(O, h), Ei(O)) : (Ei(O), lt(O, h)), xi(() => {
        O._isLeaving && (At(O, d), lt(O, _), bi(j) || Si(O, s, H, ce));
      }), Mt(j, [O, ce]);
    },
    onEnterCancelled(O) {
      M(O, !1, void 0, !0), Mt(B, [O]);
    },
    onAppearCancelled(O) {
      M(O, !0, void 0, !0), Mt(D, [O]);
    },
    onLeaveCancelled(O) {
      V(O), Mt(k, [O]);
    }
  });
}
function Ec(e) {
  if (e == null)
    return null;
  if (le(e))
    return [ps(e.enter), ps(e.leave)];
  {
    const t = ps(e);
    return [t, t];
  }
}
function ps(e) {
  return To(e);
}
function lt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[vn] || (e[vn] = /* @__PURE__ */ new Set())).add(t);
}
function At(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[vn];
  n && (n.delete(t), n.size || (e[vn] = void 0));
}
function xi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tc = 0;
function Si(e, t, n, s) {
  const i = e._endId = ++Tc, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = Ic(e, t);
  if (!o)
    return s();
  const f = o + "end";
  let a = 0;
  const d = () => {
    e.removeEventListener(f, h), r();
  }, h = (_) => {
    _.target === e && ++a >= c && d();
  };
  setTimeout(() => {
    a < c && d();
  }, l + 1), e.addEventListener(f, h);
}
function Ic(e, t) {
  const n = window.getComputedStyle(e), s = (x) => (n[x] || "").split(", "), i = s(`${mt}Delay`), r = s(`${mt}Duration`), o = wi(i, r), l = s(`${Qt}Delay`), c = s(`${Qt}Duration`), f = wi(l, c);
  let a = null, d = 0, h = 0;
  t === mt ? o > 0 && (a = mt, d = o, h = r.length) : t === Qt ? f > 0 && (a = Qt, d = f, h = c.length) : (d = Math.max(o, f), a = d > 0 ? o > f ? mt : Qt : null, h = a ? a === mt ? r.length : c.length : 0);
  const _ = a === mt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${mt}Property`).toString()
  );
  return {
    type: a,
    timeout: d,
    propCount: h,
    hasTransform: _
  };
}
function wi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ci(n) + Ci(e[s])));
}
function Ci(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ei(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Mc(e, t, n) {
  const s = e[vn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ti = /* @__PURE__ */ Symbol("_vod"), Ac = /* @__PURE__ */ Symbol("_vsh"), Oc = /* @__PURE__ */ Symbol(""), Lc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const s = e.style, i = ge(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ge(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && en(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && en(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? Pc(
        e,
        o,
        !ge(t) && t ? t[o] : void 0,
        l
      ) || en(s, o, l) : en(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Oc];
      o && (n += ";" + o), s.cssText = n, r = Lc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ti in e && (e[Ti] = r ? s.display : "", e[Ac] && (s.display = "none"));
}
const Ii = /\s*!important$/;
function en(e, t, n) {
  if (J(n))
    n.forEach((s) => en(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fc(e, t);
    Ii.test(n) ? e.setProperty(
      kt(s),
      n.replace(Ii, ""),
      "important"
    ) : e[s] = n;
  }
}
const Mi = ["Webkit", "Moz", "ms"], gs = {};
function Fc(e, t) {
  const n = gs[t];
  if (n)
    return n;
  let s = Ve(t);
  if (s !== "filter" && s in e)
    return gs[t] = s;
  s = Gi(s);
  for (let i = 0; i < Mi.length; i++) {
    const r = Mi[i] + s;
    if (r in e)
      return gs[t] = r;
  }
  return t;
}
function Pc(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ge(s) && n === s;
}
const Ai = "http://www.w3.org/1999/xlink";
function Oi(e, t, n, s, i, r = $o(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ai, t.slice(6, t.length)) : e.setAttributeNS(Ai, t, n) : n == null || r && !Xi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : De(n) ? String(n) : n
  );
}
function Li(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lo(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Xi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Nc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function kc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const $i = /* @__PURE__ */ Symbol("_vei");
function Rc(e, t, n, s, i = null) {
  const r = e[$i] || (e[$i] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = zc(t);
    if (s) {
      const f = r[t] = Wc(
        s,
        i
      );
      Nc(e, l, f, c);
    } else
      o && (kc(e, l, o, c), r[t] = void 0);
  }
}
const Dc = /(Once|Passive|Capture)$/, jc = /^on:?(?:Once|Passive|Capture)$/;
function zc(e) {
  let t, n;
  for (; (n = e.match(Dc)) && !jc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : kt(e.slice(2)), t];
}
let ms = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), Hc = () => ms || (Bc.then(() => ms = 0), ms = Date.now());
function Wc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (J(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let c = 0; c < o.length && !s._stopped; c++) {
        const f = o[c];
        f && je(
          f,
          t,
          5,
          l
        );
      }
    } else
      je(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Hc(), n;
}
const Fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vc = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Mc(e, s, o) : t === "style" ? $c(e, n, s) : zn(t) ? Bn(t) || Rc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, s, o)) ? (Li(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oi(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Uc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ge(s))) ? Li(e, Ve(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Oi(e, t, s, o));
};
function Kc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fi(t) && Z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Fi(t) && ge(n) ? !1 : t in e;
}
function Uc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ve(t);
  return Array.isArray(n) ? n.some((i) => Ve(i) === s) : Object.keys(n).some((i) => Ve(i) === s);
}
const Jc = ["ctrl", "shift", "alt", "meta"], qc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Jc.some((n) => e[`${n}Key`] && !t.includes(n))
}, vt = (e, t) => {
  if (!e)
    return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = qc[t[o]];
      if (l && l(i, t))
        return;
    }
    return e(i, ...r);
  });
}, Yc = /* @__PURE__ */ _e({ patchProp: Vc }, bc);
let Pi;
function Gc() {
  return Pi || (Pi = Xl(Yc));
}
const Qc = (...e) => {
  const t = Gc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Zc(s);
    if (!i)
      return;
    const r = t._component;
    !Z(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Xc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function Xc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Zc(e) {
  return ge(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ao;
const Zn = (e) => ao = e, uo = (
  /* istanbul ignore next */
  Symbol()
);
function Ls(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var un;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(un || (un = {}));
function ea() {
  const e = nr(!0), t = e.run(() => /* @__PURE__ */ ve({}));
  let n = [], s = [];
  const i = Ws({
    install(r) {
      Zn(i), i._a = r, r.provide(uo, i), r.config.globalProperties.$pinia = i, s.forEach((o) => n.push(o)), s = [];
    },
    use(r) {
      return this._a ? n.push(r) : s.push(r), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return i;
}
const fo = () => {
};
function Ni(e, t, n, s = fo) {
  e.add(t);
  const i = () => {
    e.delete(t) && s();
  };
  return !n && sr() && ir(i), i;
}
function Bt(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const ta = (e) => e(), ki = Symbol(), vs = Symbol();
function $s(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], i = e[n];
    Ls(i) && Ls(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ye(s) && !/* @__PURE__ */ ft(s) ? e[n] = $s(i, s) : e[n] = s;
  }
  return e;
}
const na = (
  /* istanbul ignore next */
  Symbol()
);
function sa(e) {
  return !Ls(e) || !Object.prototype.hasOwnProperty.call(e, na);
}
const { assign: yt } = Object;
function ia(e) {
  return !!(/* @__PURE__ */ ye(e) && e.effect);
}
function ra(e, t, n, s) {
  const { state: i, actions: r, getters: o } = t, l = n.state.value[e];
  let c;
  function f() {
    l || (n.state.value[e] = i ? i() : {});
    const a = /* @__PURE__ */ tl(n.state.value[e]);
    return yt(a, r, Object.keys(o || {}).reduce((d, h) => (d[h] = Ws(Le(() => {
      Zn(n);
      const _ = n._s.get(e);
      return o[h].call(_, _);
    })), d), {}));
  }
  return c = ho(e, f, t, n, s, !0), c;
}
function ho(e, t, n = {}, s, i, r) {
  let o;
  const l = yt({ actions: {} }, n), c = { deep: !0 };
  let f, a, d = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), _;
  const x = s.state.value[e];
  !r && !x && (s.state.value[e] = {});
  let N;
  function H(D) {
    let M;
    f = a = !1, typeof D == "function" ? (D(s.state.value[e]), M = {
      type: un.patchFunction,
      storeId: e,
      events: _
    }) : ($s(s.state.value[e], D), M = {
      type: un.patchObject,
      payload: D,
      storeId: e,
      events: _
    });
    const V = N = Symbol();
    bt().then(() => {
      N === V && (f = !0);
    }), a = !0, Bt(d, M, s.state.value[e]);
  }
  const W = r ? function() {
    const { state: M } = n, V = M ? M() : {};
    this.$patch((q) => {
      yt(q, V);
    });
  } : (
    /* istanbul ignore next */
    fo
  );
  function K() {
    o.stop(), d.clear(), h.clear(), s._s.delete(e);
  }
  const B = (D, M = "") => {
    if (ki in D)
      return D[vs] = M, D;
    const V = function() {
      Zn(s);
      const q = Array.from(arguments), O = /* @__PURE__ */ new Set(), se = /* @__PURE__ */ new Set();
      function ce(ee) {
        O.add(ee);
      }
      function Se(ee) {
        se.add(ee);
      }
      Bt(h, {
        args: q,
        name: V[vs],
        store: k,
        after: ce,
        onError: Se
      });
      let ue;
      try {
        ue = D.apply(this && this.$id === e ? this : k, q);
      } catch (ee) {
        throw Bt(se, ee), ee;
      }
      return ue instanceof Promise ? ue.then((ee) => (Bt(O, ee), ee)).catch((ee) => (Bt(se, ee), Promise.reject(ee))) : (Bt(O, ue), ue);
    };
    return V[ki] = !0, V[vs] = M, V;
  }, j = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Ni.bind(null, h),
    $patch: H,
    $reset: W,
    $subscribe(D, M = {}) {
      const V = Ni(d, D, M.detached, () => q()), q = o.run(() => Pt(() => s.state.value[e], (O) => {
        (M.flush === "sync" ? a : f) && D({
          storeId: e,
          type: un.direct,
          events: _
        }, O);
      }, yt({}, c, M)));
      return V;
    },
    $dispose: K
  }, k = /* @__PURE__ */ Un(j);
  s._s.set(e, k);
  const X = (s._a && s._a.runWithContext || ta)(() => s._e.run(() => (o = nr()).run(() => t({ action: B }))));
  for (const D in X) {
    const M = X[D];
    if (/* @__PURE__ */ ye(M) && !ia(M) || /* @__PURE__ */ ft(M))
      r || (x && sa(M) && (/* @__PURE__ */ ye(M) ? M.value = x[D] : $s(M, x[D])), s.state.value[e][D] = M);
    else if (typeof M == "function") {
      const V = B(M, D);
      X[D] = V, l.actions[D] = M;
    }
  }
  return yt(k, X), yt(/* @__PURE__ */ re(k), X), Object.defineProperty(k, "$state", {
    get: () => s.state.value[e],
    set: (D) => {
      H((M) => {
        yt(M, D);
      });
    }
  }), s._p.forEach((D) => {
    yt(k, o.run(() => D({
      store: k,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), x && r && n.hydrate && n.hydrate(k.$state, x), f = !0, a = !0, k;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oa(e, t, n) {
  let s;
  const i = typeof t == "function";
  s = i ? n : t;
  function r(o, l) {
    const c = hl();
    return o = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    o || (c ? rn(uo, null) : null), o && Zn(o), o = ao, o._s.has(e) || (i ? ho(e, t, s, o) : ra(e, s, o)), o._s.get(e);
  }
  return r.$id = e, r;
}
function la(e, t) {
  if (e == null)
    return;
  let n = e;
  for (let s = 0; s < t.length; s++) {
    if (n === void 0 || n[t[s]] === void 0)
      return;
    if (n === null || n[t[s]] === null)
      return null;
    n = n[t[s]];
  }
  return n;
}
function Xs(e, t, n) {
  if (n.length === 0)
    return t;
  const s = n[0];
  return n.length > 1 && (t = Xs(typeof e != "object" || e === null || !Object.prototype.hasOwnProperty.call(e, s) ? Number.isInteger(Number(n[1])) ? [] : {} : e[s], t, Array.prototype.slice.call(n, 1))), Number.isInteger(Number(s)) && Array.isArray(e) ? e.slice()[s] : Object.assign({}, e, { [s]: t });
}
function po(e, t) {
  if (e == null || t.length === 0)
    return e;
  if (t.length === 1) {
    if (e == null)
      return e;
    if (Number.isInteger(t[0]) && Array.isArray(e))
      return Array.prototype.slice.call(e, 0).splice(t[0], 1);
    const n = {};
    for (const s in e)
      n[s] = e[s];
    return delete n[t[0]], n;
  }
  if (e[t[0]] == null) {
    if (Number.isInteger(t[0]) && Array.isArray(e))
      return Array.prototype.concat.call([], e);
    const n = {};
    for (const s in e)
      n[s] = e[s];
    return n;
  }
  return Xs(e, po(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function go(e, t) {
  return t.map((n) => n.split(".")).map((n) => [n, la(e, n)]).filter((n) => n[1] !== void 0).reduce((n, s) => Xs(n, s[1], s[0]), {});
}
function mo(e, t) {
  return t.map((n) => n.split(".")).reduce((n, s) => po(n, s), e);
}
function Ri(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o, beforeHydrate: l, afterHydrate: c }, f, a = !0) {
  try {
    a && (l == null || l(f));
    const d = t.getItem(s);
    if (d) {
      const h = n.deserialize(d), _ = r ? go(h, r) : h, x = o ? mo(_, o) : _;
      e.$patch(x);
    }
    a && (c == null || c(f));
  } catch (d) {
    i && console.error("[pinia-plugin-persistedstate]", d);
  }
}
function Di(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o }) {
  try {
    const l = r ? go(e, r) : e, c = o ? mo(l, o) : l, f = n.serialize(c);
    t.setItem(s, f);
  } catch (l) {
    i && console.error("[pinia-plugin-persistedstate]", l);
  }
}
function ca(e, t) {
  return typeof e == "function" ? e(t) : typeof e == "string" ? e : t;
}
function aa(e, t, n) {
  const { pinia: s, store: i, options: { persist: r = n } } = e;
  if (!r)
    return;
  // v8 ignore if -- @preserve
  if (!(i.$id in s.state.value)) {
    const l = s._s.get(i.$id.replace("__hot:", ""));
    l && Promise.resolve().then(() => l.$persist());
    return;
  }
  const o = (Array.isArray(r) ? r : r === !0 ? [{}] : [r]).map(t);
  i.$hydrate = ({ runHooks: l = !0 } = {}) => {
    o.forEach((c) => {
      Ri(i, c, e, l);
    });
  }, i.$persist = () => {
    o.forEach((l) => {
      Di(i.$state, l);
    });
  }, o.forEach((l) => {
    Ri(i, l, e), i.$subscribe((c, f) => Di(f, l), { detached: !0 });
  });
}
function ua(e = {}) {
  return function(t) {
    aa(t, (n) => {
      const s = ca(n.key, t.store.$id);
      return {
        key: (e.key ? e.key : (i) => i)(s),
        debug: n.debug ?? e.debug ?? !1,
        serializer: n.serializer ?? e.serializer ?? {
          serialize: (i) => JSON.stringify(i),
          deserialize: (i) => JSON.parse(i)
        },
        storage: n.storage ?? e.storage ?? window.localStorage,
        beforeHydrate: n.beforeHydrate ?? e.beforeHydrate,
        afterHydrate: n.afterHydrate ?? e.afterHydrate,
        pick: n.pick,
        omit: n.omit
      };
    }, e.auto ?? !1);
  };
}
var fa = ua();
function En(e) {
  if (!e)
    return 0;
  if (typeof e == "number")
    return e;
  const t = new Date(e).getTime();
  return isNaN(t) ? 0 : t;
}
async function ha(e) {
  const t = [];
  try {
    let n = [];
    try {
      n = (await new Function("url", "return import(url)")("/scripts/extensions.js")).getContext().characters || [];
    } catch {
      n = window.characters || [];
    }
    if (!n.length)
      return [];
    const s = 10;
    for (let i = 0; i < n.length; i += s) {
      const r = n.slice(i, i + s), o = [];
      await Promise.all(r.map(async (l) => {
        try {
          const c = await $.ajax({
            url: "/api/characters/chats",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ avatar_url: l.avatar })
          });
          (Array.isArray(c) ? c.map((a) => [a, a]) : Object.entries(c || {})).forEach(([a, d]) => {
            const h = typeof d == "string" ? d : d.file_name || a;
            if (!h)
              return;
            let _ = 0;
            if (typeof d == "object" && (_ = En(d.last_mes) || En(d.create_date) || En(d.date) || 0), !_ && typeof h == "string") {
              const x = h.match(/(\d{4}-\d{2}-\d{2})@(\d{2})h(\d{2})m/);
              x && (_ = En(`${x[1]}T${x[2]}:${x[3]}:00`));
            }
            o.push({
              id: h,
              title: typeof d == "object" && d.name ? d.name : h.replace(/\.jsonl?$/, ""),
              charName: l.name,
              avatarUrl: l.avatar,
              msgCount: d.mes_count ?? 0,
              lastActive: _ || 1
            });
          });
        } catch {
        }
      })), t.push(...o), e && o.length > 0 && e(o);
    }
    return t;
  } catch {
    return [];
  }
}
async function Fs(e, t, n) {
  try {
    const s = await $.ajax({
      url: "/api/chats/get",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ ch_name: e, file_name: n.replace(/\.jsonl?$/, ""), avatar_url: t })
    }), i = Array.isArray(s) ? s : (s == null ? void 0 : s.chat) || (s == null ? void 0 : s.messages) || Object.values(s || {});
    return Array.isArray(i) ? i.filter((r) => (r == null ? void 0 : r.mes) !== void 0) : [];
  } catch {
    return [];
  }
}
async function da(e, t, n) {
  try {
    const s = /* @__PURE__ */ new Date(), i = (f) => f.toString().padStart(2, "0"), r = Math.random().toString(36).substring(2, 8), o = `${s.getFullYear()}-${i(s.getMonth() + 1)}-${i(s.getDate())}@${i(s.getHours())}h${i(s.getMinutes())}m${i(s.getSeconds())}s_${s.getMilliseconds()}ms_${r}`, c = [{
      user_name: "You",
      character_name: n,
      create_date: Date.now(),
      chat_metadata: {}
    }, ...e];
    return await $.ajax({
      url: "/api/chats/save",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        ch_name: n,
        file_name: o,
        chat: c,
        avatar_url: t
      })
    }), !0;
  } catch (s) {
    return console.error("Save Data Failed:", (s == null ? void 0 : s.responseText) || s), !1;
  }
}
async function ji(e, t, n) {
  try {
    const s = n.includes(".json") ? n : `${n}.jsonl`;
    return await $.ajax({
      url: "/api/chats/delete",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        chatfile: s,
        avatar_url: t
      })
    }), !0;
  } catch (s) {
    return console.error("Delete Data Failed:", (s == null ? void 0 : s.responseText) || s), !1;
  }
}
let ys = [];
const vo = /* @__PURE__ */ oa("chatLogManager", () => {
  const e = /* @__PURE__ */ ve([]), t = /* @__PURE__ */ ve(null), n = /* @__PURE__ */ ve([]), s = /* @__PURE__ */ ve(/* @__PURE__ */ new Set()), i = /* @__PURE__ */ ve(""), r = /* @__PURE__ */ ve([]), o = /* @__PURE__ */ ve(!1), l = /* @__PURE__ */ ve(!1), c = /* @__PURE__ */ ve(!1), f = /* @__PURE__ */ ve([]), a = Le(() => {
    if (i.value.trim())
      return r.value.map((D) => ({
        type: "chat",
        id: D.id,
        charName: D.charName,
        chat: e.value.find((M) => M.id === D.chatId),
        searchHit: { content: D.content }
      }));
    const k = [], G = /* @__PURE__ */ new Map();
    e.value.forEach((D) => {
      const M = D.charName || "未知角色";
      G.has(M) || G.set(M, { avatarUrl: D.avatarUrl, chats: [], folderTime: 0 });
      const V = G.get(M);
      V.chats.push(D), D.lastActive > V.folderTime && (V.folderTime = D.lastActive);
    });
    const X = Array.from(G.entries()).sort((D, M) => M[1].folderTime - D[1].folderTime);
    for (const [D, M] of X)
      k.push({ type: "header", id: `header_${D}`, charName: D, avatarUrl: M.avatarUrl, chatCount: M.chats.length }), s.value.has(D) && [...M.chats].sort((q, O) => O.lastActive - q.lastActive).forEach((q) => {
        k.push({ type: "chat", id: `chat_${q.id}`, charName: D, chat: q });
      });
    return k;
  }), d = Le(() => e.value.length === 0 ? !1 : i.value.trim() && r.value.length > 0 ? r.value.every((k) => f.value.includes(k.chatId)) : f.value.length === e.value.length);
  async function h() {
    if (!o.value) {
      o.value = !0;
      try {
        e.value = [], await ha((k) => {
          e.value.push(...k);
        }), _();
      } finally {
        o.value = !1;
      }
    }
  }
  async function _() {
    if (l.value)
      return;
    l.value = !0, ys = [];
    const k = 5, G = e.value;
    for (let X = 0; X < G.length && l.value; X += k) {
      const D = G.slice(X, X + k);
      await Promise.all(D.map(async (M) => {
        const V = await Fs(M.charName, M.avatarUrl, M.id);
        if (M.msgCount === 0 && V.length > 0 && (M.msgCount = V.length), V.length > 0) {
          const q = V[V.length - 1], O = q.send_date || q.date || q.time;
          if (O) {
            const se = typeof O == "number" ? O : new Date(O).getTime();
            !isNaN(se) && se > 0 && (M.lastActive = se);
          }
        }
        ys.push(...V.map((q, O) => ({
          id: `${M.id}_${O}`,
          chatId: M.id,
          charName: M.charName,
          content: q.mes || ""
        })));
      })), await new Promise((M) => setTimeout(M, 10));
    }
    l.value = !1;
  }
  function x() {
    l.value = !1;
  }
  function N(k) {
    i.value = k;
    const G = k.trim().toLowerCase();
    r.value = G ? ys.filter((X) => X.content.toLowerCase().includes(G)) : [];
  }
  async function H(k) {
    t.value = k.id, n.value = await Fs(k.charName, k.avatarUrl, k.id);
  }
  function W(k) {
    s.value.has(k) ? s.value.delete(k) : s.value.add(k);
  }
  function K() {
    c.value = !c.value, c.value || (f.value = []);
  }
  function B(k) {
    const G = f.value.indexOf(k);
    G > -1 ? f.value.splice(G, 1) : f.value.push(k);
  }
  function j() {
    if (d.value)
      f.value = [];
    else if (i.value.trim()) {
      const k = r.value.map((G) => G.chatId);
      f.value = Array.from(/* @__PURE__ */ new Set([...f.value, ...k]));
    } else
      f.value = e.value.map((k) => k.id);
  }
  return {
    allChats: e,
    displayRows: a,
    currentChatId: t,
    currentMessages: n,
    expandedChars: s,
    searchQuery: i,
    isIndexing: l,
    isBatchMode: c,
    selectedChatIds: f,
    isAllSelected: d,
    fetchChats: h,
    loadMessages: H,
    toggleChar: W,
    performSearch: N,
    toggleBatchMode: K,
    toggleSelection: B,
    toggleSelectAll: j,
    stopIndexing: x
    // 暴露中断方法
  };
});
function pa(e, t, n) {
  const s = new Array(e);
  return new Proxy(s, {
    get(i, r, o) {
      if (typeof r == "string") {
        const l = r.charCodeAt(0);
        if (l >= 48 && l <= 57) {
          const c = +r;
          if (Number.isInteger(c) && c >= 0 && c < e) {
            let f = i[c];
            if (!f) {
              const a = t[c * 2];
              f = i[c] = {
                index: c,
                key: n(c),
                start: a,
                size: t[c * 2 + 1],
                end: a + t[c * 2 + 1],
                lane: 0
              };
            }
            return f;
          }
        }
        if (r === "length")
          return e;
      }
      return Reflect.get(i, r, o);
    }
  });
}
function Ht(e, t, n) {
  let s = n.initialDeps ?? [], i, r = !0;
  function o() {
    const l = e();
    return (l.length !== s.length || l.some((f, a) => s[a] !== f)) && (s = l, i = t(...l), n != null && n.onChange && !(r && n.skipInitialOnChange) && n.onChange(i), r = !1), i;
  }
  return o.updateDeps = (l) => {
    s = l;
  }, o;
}
function zi(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
const ga = (e, t) => Math.abs(e - t) < 1.01, ma = (e, t, n) => {
  let s;
  return function(...i) {
    e.clearTimeout(s), s = e.setTimeout(() => t.apply(this, i), n);
  };
};
let Xt;
const _s = () => {
  if (Xt !== void 0)
    return Xt;
  if (typeof navigator > "u")
    return Xt = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent))
    return Xt = !0;
  const e = navigator.maxTouchPoints;
  return Xt = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Bi = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, va = (e) => e, ya = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, i = new Array(s);
  for (let r = 0; r < s; r++)
    i[r] = t + r;
  return i;
}, _a = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const i = (o) => {
    const { width: l, height: c } = o;
    t({ width: Math.round(l), height: Math.round(c) });
  };
  if (i(Bi(n)), !s.ResizeObserver)
    return () => {
    };
  const r = new s.ResizeObserver((o) => {
    const l = () => {
      const c = o[0];
      if (c != null && c.borderBoxSize) {
        const f = c.borderBoxSize[0];
        if (f) {
          i({ width: f.inlineSize, height: f.blockSize });
          return;
        }
      }
      i(Bi(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return r.observe(n, { box: "border-box" }), () => {
    r.unobserve(n);
  };
}, jn = {
  passive: !0
}, ba = typeof window > "u" ? !0 : "onscrollend" in window, xa = (e, t, n) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const i = e.targetWindow;
  if (!i)
    return;
  const r = e.options.useScrollendEvent && ba;
  let o = 0;
  const l = r ? null : ma(
    i,
    () => t(o, !1),
    e.options.isScrollingResetDelay
  ), c = (d) => () => {
    o = n(s), l == null || l(), t(o, d);
  }, f = c(!0), a = c(!1);
  return s.addEventListener("scroll", f, jn), r && s.addEventListener("scrollend", a, jn), () => {
    s.removeEventListener("scroll", f), r && s.removeEventListener("scrollend", a);
  };
}, Sa = (e, t) => xa(e, t, (n) => {
  const { horizontal: s, isRtl: i } = e.options;
  return s ? n.scrollLeft * (i && -1 || 1) : n.scrollTop;
}), wa = (e, t, n) => {
  if (n.options.useCachedMeasurements) {
    const s = n.indexFromElement(e), i = n.options.getItemKey(s);
    return n.itemSizeCache.get(i) ?? n.options.estimateSize(s);
  }
  if (t != null && t.borderBoxSize) {
    const s = t.borderBoxSize[0];
    if (s)
      return Math.round(
        s[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!t) {
    const s = n.indexFromElement(e), i = n.options.getItemKey(s), r = n.itemSizeCache.get(i);
    if (r !== void 0)
      return r;
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ca = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var i, r;
  (r = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null || r.call(i, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, Ea = Ca;
class Ta {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var n, s, i;
      return ((i = (s = (n = this.targetWindow) == null ? void 0 : n.performance) == null ? void 0 : s.now) == null ? void 0 : i.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const s = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((r) => {
          const o = () => {
            const l = r.target, c = this.indexFromElement(l);
            if (!l.isConnected) {
              this.observer.unobserve(l);
              for (const [f, a] of this.elementsCache)
                if (a === l) {
                  this.elementsCache.delete(f);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(c) && this.resizeItem(
              c,
              this.options.measureElement(l, r, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var i;
          (i = s()) == null || i.disconnect(), n = null;
        },
        observe: (i) => {
          var r;
          return (r = s()) == null ? void 0 : r.observe(i, { box: "border-box" });
        },
        unobserve: (i) => {
          var r;
          return (r = s()) == null ? void 0 : r.unobserve(i);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      var s, i;
      const r = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: va,
        rangeExtractor: ya,
        onChange: () => {
        },
        measureElement: wa,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: !1,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: !1
      };
      for (const h in n) {
        const _ = n[h];
        _ !== void 0 && (r[h] = _);
      }
      const o = this.options;
      let l = null, c = null, f = !1;
      if (o !== void 0 && o.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const h = o.count, _ = r.count, x = this.getMeasurements(), N = h > 0 ? ((s = x[0]) == null ? void 0 : s.key) ?? o.getItemKey(0) : null, H = h > 0 ? ((i = x[h - 1]) == null ? void 0 : i.key) ?? o.getItemKey(h - 1) : null;
        if (_ !== h || h > 0 && _ > 0 && (r.getItemKey(0) !== N || r.getItemKey(_ - 1) !== H)) {
          f = !0;
          const B = h > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? x[0] : null;
          B && (l = [B.key, this.getScrollOffset() - B.start]);
          const j = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          j && _ > h && this.isAtEnd(o.scrollEndThreshold) && (h === 0 || r.getItemKey(_ - 1) !== H) && (c = j);
        }
      }
      this.options = r, f && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, d = 0;
      if (l && this.scrollOffset !== null) {
        const [h, _] = l, x = this.getMeasurements(), { count: N, getItemKey: H } = this.options;
        let W = 0;
        for (; W < N && H(W) !== h; )
          W++;
        if (W < N) {
          const K = x[W];
          if (K) {
            const B = K.start + _;
            B !== this.scrollOffset && (d = B - this.scrollOffset, this.scrollOffset = B, a = !0);
          }
        }
      }
      (a || c) && (this.pendingScrollAnchor = [
        a ? l[0] : null,
        a ? l[1] : 0,
        c,
        d
      ]);
    }, this.notify = (n) => {
      var s, i;
      (i = (s = this.options).onChange) == null || i.call(s, this, n);
    }, this.maybeNotify = Ht(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, o) => {
            if (o && this._intendedScrollOffset === null && r === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(r - this._intendedScrollOffset) < 1.5 && (r = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const l = this.getScrollOffset();
            this.scrollDirection = o ? l === r ? this.scrollDirection : l < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = o, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, o = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, l = () => {
            this._iosTouching = !1, !(!_s() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            o,
            jn
          ), r.addEventListener(
            "touchend",
            l,
            jn
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", o), r.removeEventListener("touchend", l), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const i = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, i && this.scrollElement && this.options.enabled) {
        const [r, o, l, c] = i;
        r !== null && !l && (_s() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? c !== 0 && (this._iosDeferredAdjustment += c) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), l && this.scrollToEnd({ behavior: l });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded)
        return;
      const n = this.getScrollOffset(), s = this.getMaxScrollOffset();
      if (n < 0 || n > s)
        return;
      const i = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(n, {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, s) => {
      const i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let o = s - 1; o >= 0; o--) {
        const l = n[o];
        if (i.has(l.lane))
          continue;
        const c = r.get(
          l.lane
        );
        if (c == null || l.end > c.end ? r.set(l.lane, l) : l.end < c.end && i.set(l.lane, !0), i.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((o, l) => o.end === l.end ? o.index - l.index : o.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = Ht(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode
      ],
      (n, s, i, r, o, l, c) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = !0), this.prevLanes = l, this.pendingMin = null, {
        count: n,
        paddingStart: s,
        scrollMargin: i,
        getItemKey: r,
        enabled: o,
        lanes: l,
        laneAssignmentMode: c
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ht(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: n,
        paddingStart: s,
        scrollMargin: i,
        getItemKey: r,
        enabled: o,
        lanes: l,
        laneAssignmentMode: c
      }, f) => {
        const a = this.itemSizeCache;
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const x of this.laneAssignments.keys())
            x >= n && this.laneAssignments.delete(x);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((x) => {
          this.itemSizeCache.set(x.key, x.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), l === 1) {
          const x = this.options.gap, N = n * 2;
          let H = this._flatMeasurements;
          if (!H || H.length < N) {
            const B = new Float64Array(N);
            H && d > 0 && B.set(H.subarray(0, d * 2)), H = B, this._flatMeasurements = H;
          }
          let W;
          if (d === 0)
            W = s + i;
          else {
            const B = d - 1;
            W = H[B * 2] + H[B * 2 + 1] + x;
          }
          for (let B = d; B < n; B++) {
            const j = r(B), k = a.get(j), G = typeof k == "number" ? k : this.options.estimateSize(B);
            H[B * 2] = W, H[B * 2 + 1] = G, W += G + x;
          }
          const K = pa(n, H, r);
          return this.measurementsCache = K, K;
        }
        const h = this.measurementsCache.slice(0, d), _ = new Array(l).fill(
          void 0
        );
        for (let x = 0; x < d; x++) {
          const N = h[x];
          N && (_[N.lane] = x);
        }
        for (let x = d; x < n; x++) {
          const N = r(x), H = this.laneAssignments.get(x);
          let W, K;
          const B = c === "estimate" || a.has(N);
          if (H !== void 0 && this.options.lanes > 1) {
            W = H;
            const X = _[W], D = X !== void 0 ? h[X] : void 0;
            K = D ? D.end + this.options.gap : s + i;
          } else {
            const X = this.options.lanes === 1 ? h[x - 1] : this.getFurthestMeasurement(h, x);
            K = X ? X.end + this.options.gap : s + i, W = X ? X.lane : x % this.options.lanes, this.options.lanes > 1 && B && this.laneAssignments.set(x, W);
          }
          const j = a.get(N), k = typeof j == "number" ? j : this.options.estimateSize(x), G = K + k;
          h[x] = {
            index: x,
            start: K,
            size: k,
            end: G,
            key: N,
            lane: W
          }, _[W] = x;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ht(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, s, i, r) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = Ma(
        n,
        s,
        i,
        r,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        r === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ht(
      () => {
        let n = null, s = null;
        const i = this.calculateRange();
        return i && (n = i.startIndex, s = i.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          s
        ];
      },
      (n, s, i, r, o) => r === null || o === null ? [] : n({
        startIndex: r,
        endIndex: o,
        overscan: s,
        count: i
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const s = this.options.indexAttribute, i = n.getAttribute(s);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (n) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const i = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (i !== void 0 && this.range) {
        const r = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), o = Math.max(0, i - r), l = Math.min(
          this.options.count - 1,
          i + r
        );
        return n >= o && n <= l;
      }
      return !0;
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((o, l) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(l));
        });
        return;
      }
      const s = this.indexFromElement(n), i = this.options.getItemKey(s), r = this.elementsCache.get(i);
      r !== n && (r && this.observer.unobserve(r), this.observer.observe(n), this.elementsCache.set(i, n)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(n, void 0, this));
    }, this.resizeItem = (n, s) => {
      var i, r;
      if (n < 0 || n >= this.options.count)
        return;
      let o, l, c;
      const f = this._flatMeasurements;
      if (this.options.lanes === 1 && f !== null)
        c = this.options.getItemKey(n), l = f[n * 2], o = f[n * 2 + 1];
      else {
        const h = this.measurementsCache[n];
        if (!h)
          return;
        c = h.key, l = h.start, o = h.size;
      }
      const a = this.itemSizeCache.get(c) ?? o, d = s - a;
      if (d !== 0) {
        const h = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, _ = h ? this.getTotalSize() : 0, x = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[n] ?? {
            index: n,
            key: c,
            start: l,
            size: o,
            end: l + o,
            lane: 0
          },
          d,
          this
        ) : (
          // Default: adjust when the resize is an above-viewport item.
          // First measurement (!has(key)): always adjust — the item
          // has never been sized, so the estimate→actual delta must
          // be compensated regardless of scroll direction.
          // Re-measurement (has(key)): skip during backward scroll
          // to avoid the "items jump while scrolling up" cascade.
          l < this.getScrollOffset() + this.scrollAdjustments && (!this.itemSizeCache.has(c) || this.scrollDirection !== "backward")
        ));
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(c, s), this.itemSizeCacheVersion++, h ? this.applyScrollAdjustment(this.getTotalSize() - _) : x && this.applyScrollAdjustment(d), this.notify(!1);
      }
    }, this.getVirtualItems = Ht(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, s) => {
        const i = [];
        for (let r = 0, o = n.length; r < o; r++) {
          const l = n[r], c = s[l];
          i.push(c);
        }
        return i;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const s = this.getMeasurements();
      if (s.length === 0)
        return;
      const i = this._flatMeasurements, r = this.options.lanes === 1 && i != null, o = yo(
        0,
        s.length - 1,
        r ? (l) => i[l * 2] : (l) => zi(s[l]).start,
        n
      );
      return zi(s[o]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement)
        return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const n = this.scrollElement.document.documentElement;
        return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this.getTotalSize() - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (n = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= n, this.getOffsetForAlignment = (n, s, i = 0) => {
      if (!this.scrollElement)
        return 0;
      const r = this.getSize(), o = this.getScrollOffset();
      s === "auto" && (s = n >= o + r ? "end" : "start"), s === "center" ? n += (i - r) / 2 : s === "end" && (n -= r);
      const l = this.getMaxScrollOffset();
      return Math.max(Math.min(l, n), 0);
    }, this.getOffsetForIndex = (n, s = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const i = this.getSize(), r = this.getScrollOffset(), o = this.measurementsCache[n];
      if (!o)
        return;
      if (s === "auto")
        if (o.end >= r + i - this.options.scrollPaddingEnd)
          s = "end";
        else if (o.start <= r + this.options.scrollPaddingStart)
          s = "start";
        else
          return [r, s];
      if (s === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const l = s === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, s, o.size),
        s
      ];
    }, this.scrollToOffset = (n, { align: s = "start", behavior: i = "auto" } = {}) => {
      const r = this.getOffsetForAlignment(n, s), o = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: i,
        startedAt: o,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (n, {
      align: s = "auto",
      behavior: i = "auto"
    } = {}) => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const r = this.getOffsetForIndex(n, s);
      if (!r)
        return;
      const [o, l] = r, c = this.now();
      this.scrollState = {
        index: n,
        align: l,
        behavior: i,
        startedAt: c,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollBy = (n, { behavior: s = "auto" } = {}) => {
      const i = this.getScrollOffset() + n, r = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: r,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: n = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: n
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: n
      });
    }, this.getTotalSize = () => {
      var n;
      const s = this.getMeasurements();
      let i;
      if (s.length === 0)
        i = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const r = s.length - 1, o = this._flatMeasurements;
        o != null ? i = o[r * 2] + o[r * 2 + 1] : i = ((n = s[r]) == null ? void 0 : n.end) ?? 0;
      } else {
        const r = Array(this.options.lanes).fill(null);
        let o = s.length - 1;
        for (; o >= 0 && r.some((l) => l === null); ) {
          const l = s[o];
          r[l.lane] === null && (r[l.lane] = l.end), o--;
        }
        i = Math.max(...r.filter((l) => l !== null));
      }
      return Math.max(
        i - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const n = [];
      if (this.itemSizeCache.size === 0)
        return n;
      const s = this.getMeasurements();
      for (const i of s)
        i && this.itemSizeCache.has(i.key) && n.push({
          index: i.index,
          key: i.key,
          start: i.start,
          size: i.size,
          end: i.end,
          lane: i.lane
        });
      return n;
    }, this._scrollToOffset = (n, {
      adjustments: s,
      behavior: i
    }) => {
      this._intendedScrollOffset = n + (s ?? 0), this.options.scrollToFn(n, { behavior: i, adjustments: s }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(t);
  }
  applyScrollAdjustment(t, n) {
    t !== 0 && (_s() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += t : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += t,
      behavior: n
    }), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollAdjustments = 0)));
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement)
      return;
    const n = 5e3;
    if (this.now() - this.scrollState.startedAt > n) {
      this.scrollState = null;
      return;
    }
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, i = s ? s[0] : this.scrollState.lastTargetOffset, r = 1, o = i !== this.scrollState.lastTargetOffset;
    if (!o && ga(i, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== i && this._scrollToOffset(i, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, o) {
      const l = this.getSize() || 600, c = Math.abs(i - this.getScrollOffset()), f = this.scrollState.behavior === "smooth" && c > l;
      this.scrollState.lastTargetOffset = i, f || (this.scrollState.behavior = "auto"), this._scrollToOffset(i, {
        adjustments: void 0,
        behavior: f ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const yo = (e, t, n, s) => {
  for (; e <= t; ) {
    const i = (e + t) / 2 | 0, r = n(i);
    if (r < s)
      e = i + 1;
    else if (r > s)
      t = i - 1;
    else
      return i;
  }
  return e > 0 ? e - 1 : 0;
};
function Ia(e, t, n) {
  let s = 0;
  for (; s <= t; ) {
    const i = (s + t) / 2 | 0, r = e[i * 2];
    if (r < n)
      s = i + 1;
    else if (r > n)
      t = i - 1;
    else
      return i;
  }
  return s > 0 ? s - 1 : 0;
}
function Ma(e, t, n, s, i) {
  const r = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: r };
  if (s === 1 && i !== null) {
    const f = Ia(
      i,
      r,
      n
    );
    let a = f;
    const d = n + t;
    for (; a < r && i[a * 2] + i[a * 2 + 1] < d; )
      a++;
    return { startIndex: f, endIndex: a };
  }
  let l = yo(0, r, (f) => e[f].start, n), c = l;
  if (s === 1)
    for (; c < r && e[c].end < n + t; )
      c++;
  else if (s > 1) {
    const f = Array(s).fill(0);
    for (; c < r && f.some((d) => d < n + t); ) {
      const d = e[c];
      f[d.lane] = d.end, c++;
    }
    const a = Array(s).fill(n + t);
    for (; l >= 0 && a.some((d) => d >= n); ) {
      const d = e[l];
      a[d.lane] = d.start, l--;
    }
    l = Math.max(0, l - l % s), c = Math.min(r, c + (s - 1 - c % s));
  }
  return { startIndex: l, endIndex: c };
}
function Aa(e) {
  const t = new Ta(te(e)), n = /* @__PURE__ */ In(t), s = t._didMount();
  return Pt(
    () => te(e).getScrollElement(),
    (i) => {
      i && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), Pt(
    () => te(e),
    (i) => {
      t.setOptions({
        ...i,
        onChange: (r, o) => {
          var l;
          si(n), (l = i.onChange) == null || l.call(i, r, o);
        }
      }), t._willUpdate(), si(n);
    },
    {
      immediate: !0
    }
  ), ir(s), n;
}
function Oa(e) {
  return Aa(
    Le(() => ({
      observeElementRect: _a,
      observeElementOffset: Sa,
      scrollToFn: Ea,
      ...te(e)
    }))
  );
}
const La = ["data-index"], $a = ["onClick"], Fa = { class: "char-info" }, Pa = { class: "folder-icon" }, Na = { class: "char-name" }, ka = { class: "chat-badge" }, Ra = ["onClick"], Da = ["checked", "onClick"], ja = { class: "chat-item-content" }, za = { class: "chat-title" }, Ba = {
  key: 0,
  class: "search-tag"
}, Ha = {
  key: 0,
  class: "hit-content"
}, Wa = {
  key: 1,
  class: "chat-meta"
}, Va = {
  key: 0,
  class: "empty-state"
}, Ka = /* @__PURE__ */ Nr({
  __name: "SessionList",
  setup(e) {
    const t = vo(), n = /* @__PURE__ */ ve(null), s = Le(() => t.displayRows), i = Le(() => ({
      count: s.value.length,
      getScrollElement: () => n.value,
      estimateSize: () => 60,
      overscan: 10
    })), r = Oa(i), o = Le(() => r.value.getVirtualItems()), l = () => r.value.getTotalSize(), c = (a) => s.value[a], f = (a) => {
      const d = c(a);
      d.type === "chat" && d.chat && (t.isBatchMode ? t.toggleSelection(d.chat.id) : t.loadMessages(d.chat));
    };
    return (a, d) => (de(), pe("div", {
      ref_key: "containerRef",
      ref: n,
      class: "virtual-list-container"
    }, [
      Q("div", {
        style: St({ height: l() + "px", position: "relative", width: "100%" })
      }, [
        (de(!0), pe(Re, null, jr(o.value, (h) => {
          var _, x, N, H, W, K;
          return de(), pe("div", {
            key: h.index,
            class: "virtual-row",
            style: St({ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${h.start}px)` }),
            ref_for: !0,
            ref: te(r).measureElement,
            "data-index": h.index
          }, [
            c(h.index).type === "header" ? (de(), pe("div", {
              key: 0,
              class: "char-header",
              onClick: (B) => te(t).toggleChar(c(h.index).charName)
            }, [
              Q("div", Fa, [
                Q("span", Pa, xe(te(t).expandedChars.has(c(h.index).charName) ? "📂" : "📁"), 1),
                Q("span", Na, xe(c(h.index).charName), 1)
              ]),
              Q("span", ka, xe(c(h.index).chatCount), 1)
            ], 8, $a)) : (de(), pe("div", {
              key: 1,
              class: $t(["chat-item", {
                active: !te(t).isBatchMode && te(t).currentChatId === ((_ = c(h.index).chat) == null ? void 0 : _.id),
                selected: te(t).isBatchMode && te(t).selectedChatIds.includes(((x = c(h.index).chat) == null ? void 0 : x.id) || "")
              }]),
              onClick: (B) => f(h.index)
            }, [
              te(t).isBatchMode ? (de(), pe("input", {
                key: 0,
                type: "checkbox",
                class: "batch-checkbox",
                checked: te(t).selectedChatIds.includes(((N = c(h.index).chat) == null ? void 0 : N.id) || ""),
                onClick: vt((B) => f(h.index), ["stop"])
              }, null, 8, Da)) : He("", !0),
              Q("div", ja, [
                Q("div", za, [
                  te(t).searchQuery ? (de(), pe("span", Ba, "[" + xe(c(h.index).charName) + "]", 1)) : He("", !0),
                  io(" " + xe(((H = c(h.index).chat) == null ? void 0 : H.title) || "未命名会话"), 1)
                ]),
                te(t).searchQuery ? (de(), pe("div", Ha, '"' + xe((W = c(h.index).searchHit) == null ? void 0 : W.content) + '"', 1)) : (de(), pe("div", Wa, "消息数: " + xe(((K = c(h.index).chat) == null ? void 0 : K.msgCount) ?? "..."), 1))
              ])
            ], 10, Ra))
          ], 12, La);
        }), 128))
      ], 4),
      s.value.length === 0 ? (de(), pe("div", Va, "暂无匹配记录")) : He("", !0)
    ], 512));
  }
});
const _o = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Ua = /* @__PURE__ */ _o(Ka, [["__scopeId", "data-v-82b53ab7"]]);
function es(e, t, n) {
  const s = new Blob([t], { type: n }), i = URL.createObjectURL(s), r = document.createElement("a");
  r.href = i, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
function Ja(e, t) {
  let n = `=== 聊天记录: ${e} ===
导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}

`;
  t.forEach((s) => {
    const i = s.name || (s.is_user ? "You" : "Bot");
    n += `[${i}]:
${s.mes}

`;
  }), es(`${e}.txt`, n, "text/plain;charset=utf-8");
}
function qa(e, t) {
  let n = `# 聊天记录: ${e}
> 导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}

---

`;
  t.forEach((s) => {
    const i = s.name || (s.is_user ? "You" : "Bot");
    n += `**${i}**:

${s.mes}

---

`;
  }), es(`${e}.md`, n, "text/markdown;charset=utf-8");
}
function Ya(e, t, n) {
  const s = {
    user_name: "You",
    character_name: t,
    create_date: Date.now(),
    chat_metadata: {}
  }, i = [JSON.stringify(s), ...n.map((r) => JSON.stringify(r))];
  es(`${e}.jsonl`, i.join(`
`), "application/octet-stream");
}
function Ga(e, t) {
  const s = `Batch_Export_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.${t}`;
  let i = "";
  t === "json" ? i = JSON.stringify(e, null, 2) : t === "md" ? (i = `# 批量导出聊天记录
> 导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}
> 共包含 ${e.length} 个会话

`, e.forEach((r) => {
    i += `## 会话: ${r.title}

`, r.messages.forEach((o) => {
      const l = o.name || (o.is_user ? "You" : "Bot");
      i += `**${l}**:

${o.mes}

---

`;
    });
  })) : t === "txt" && (i = `=== 批量导出聊天记录 ===
导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}
共包含 ${e.length} 个会话

`, e.forEach((r) => {
    i += `
>>> 会话: ${r.title} <<<

`, r.messages.forEach((o) => {
      const l = o.name || (o.is_user ? "You" : "Bot");
      i += `[${l}]:
${o.mes}

`;
    }), i += `=========================
`;
  })), es(s, i, `text/${t === "json" ? "plain" : t};charset=utf-8`);
}
const Qa = { class: "modal-header" }, Xa = { class: "header-actions" }, Za = ["disabled"], eu = { class: "modal-body" }, tu = { class: "left-panel" }, nu = { class: "panel-header" }, su = { class: "search-box" }, iu = ["placeholder", "value", "disabled"], ru = {
  key: 0,
  class: "search-loader"
}, ou = {
  key: 0,
  class: "select-all-bar"
}, lu = ["checked"], cu = {
  for: "selectAllBox",
  class: "select-all-label"
}, au = { class: "right-panel" }, uu = { class: "panel-header right-header" }, fu = {
  key: 0,
  class: "header-actions"
}, hu = {
  key: 0,
  class: "batch-panel"
}, du = { class: "batch-status" }, pu = {
  key: 0,
  class: "hint"
}, gu = {
  key: 0,
  class: "batch-actions"
}, mu = ["disabled"], vu = ["disabled"], yu = ["disabled"], _u = ["disabled"], bu = {
  key: 0,
  class: "empty-state"
}, xu = {
  key: 1,
  class: "loading-indicator"
}, Su = ["onClick"], wu = ["innerHTML"], Tn = 72, Hi = 12, Cu = /* @__PURE__ */ Nr({
  __name: "LogOverview",
  setup(e) {
    let t = !0;
    const n = /* @__PURE__ */ ve(!0), s = /* @__PURE__ */ ve(0), i = () => {
      const v = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--clm-vh", `${v}px`);
    }, r = () => setTimeout(i, 300), o = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), l = (v) => (v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), c = (v, g) => {
      if (!v)
        return "";
      const m = v.replace(/<[^>]+>/g, "");
      if (!g)
        return l(m);
      const b = m.toLowerCase(), T = g.toLowerCase(), A = b.indexOf(T);
      if (A === -1)
        return l(m);
      const E = Math.max(0, A - 15), F = Math.min(m.length, A + g.length + 30);
      let z = m.slice(E, F);
      const Y = E > 0 ? "..." : "", U = F < m.length ? "..." : "";
      let ne = l(z);
      const me = new RegExp(o(g), "gi");
      return ne = ne.replace(me, (ie) => `<mark class="search-highlight">${ie}</mark>`), `${Y}${ne}${U}`;
    };
    let f = null;
    const a = (v, g) => {
      if (!g)
        return;
      const m = v.querySelector(".mes_text, .message-text, .content") || v, b = document.createTreeWalker(m, NodeFilter.SHOW_TEXT, null), T = [];
      let A;
      for (; A = b.nextNode(); ) {
        const E = A, F = E.nodeValue || "", z = new RegExp(o(g), "gi");
        if (z.test(F)) {
          const Y = document.createElement("span");
          Y.innerHTML = l(F).replace(z, (U) => `<mark style="background-color: #ff9800; color: #fff; padding: 0 3px; border-radius: 3px; box-shadow: 0 0 6px rgba(255,152,0,0.8); font-weight: bold;">${U}</mark>`), E.parentNode && T.push({ old: E, new: Y, parent: E.parentNode });
        }
      }
      T.forEach((E) => E.parent.replaceChild(E.new, E.old)), f && clearTimeout(f), f = window.setTimeout(() => {
        T.forEach((E) => {
          E.parent.contains(E.new) && E.parent.replaceChild(E.old, E.new);
        }), f = null;
      }, 3500);
    };
    class d {
      get win() {
        return window;
      }
      get context() {
        var g, m;
        try {
          if (typeof ((g = this.win.SillyTavern) == null ? void 0 : g.getContext) == "function")
            return this.win.SillyTavern.getContext();
          if (this.win.context)
            return this.win.context;
          if ((m = this.win.ST) != null && m.context)
            return this.win.ST.context;
        } catch {
        }
        return {};
      }
      getCurrentCharacterId() {
        return this.context.characterId ?? this.win.this_chid ?? -1;
      }
      getCurrentChatFileName() {
        return this.context.chatId || this.win.chat_file_name || "";
      }
      getCharacters() {
        return this.context.characters || this.win.characters || [];
      }
      selectCharacterById(g) {
        if (typeof this.context.selectCharacter == "function")
          return this.context.selectCharacter(g), !0;
        if (typeof this.win.selectCharacterById == "function")
          return this.win.selectCharacterById(g), !0;
        const m = document.querySelector(`.character_select[chid="${g}"], [data-character-id="${g}"], .character-item[data-id="${g}"]`);
        return m ? (m.click(), !0) : !1;
      }
      clickHistoryItem(g) {
        const m = g.replace(/\.jsonl?$/, ""), b = m + ".jsonl", T = [`[chatfile="${b}"]`, `[chatfile="${m}"]`, `[file_name="${m}"]`, `[data-chat-file="${b}"]`];
        for (const E of T) {
          const F = document.querySelector(E);
          if (F)
            return F.click(), !0;
        }
        const A = document.querySelectorAll('.past_chat_item, .chat-history-item, [class*="history-item"]');
        for (let E = 0; E < A.length; E++)
          if ((A[E].textContent || "").includes(m))
            return A[E].click(), !0;
        return !1;
      }
      async forceClickHistoryItem(g) {
        if (this.clickHistoryItem(g))
          return !0;
        const m = document.getElementById("rm_button_past_chats") || document.querySelector('[title="View past chats"]');
        if (m) {
          m.click(), await new Promise((F) => setTimeout(F, 300));
          const A = this.clickHistoryItem(g), E = document.getElementById("past_chats_close") || document.querySelector(".m-dialog-close, .past_chats_cross");
          if (E ? E.click() : m.click(), A)
            return !0;
        }
        const T = g.replace(/\.jsonl?$/, "") + ".jsonl";
        return typeof this.context.loadChat == "function" ? (this.context.loadChat(T), !0) : typeof this.win.loadChat == "function" ? (this.win.loadChat(T), !0) : typeof this.win.getChat == "function" ? (this.win.chat_file_name = T, this.win.getChat(), !0) : !1;
      }
      saveChat() {
        if (typeof this.context.saveChat == "function") {
          this.context.saveChat();
          return;
        }
        if (typeof this.win.saveChatDebounced == "function") {
          this.win.saveChatDebounced();
          return;
        }
        if (typeof this.win.saveChat == "function") {
          this.win.saveChat();
          return;
        }
      }
      findCharacterElement(g, m) {
        var z;
        const b = (Y) => (Y || "").replace(/\s+/g, "").toLowerCase(), T = b(g), A = m && decodeURIComponent(m).replace(/\\/g, "/").split("/").pop() || "", E = [".character_select", ".character-select", "[data-character-id]", ".ch_card", ".character-item"];
        let F = null;
        for (const Y of E) {
          const U = document.querySelectorAll(Y);
          if (U.length) {
            F = U;
            break;
          }
        }
        if (!F)
          return { element: null, index: -1 };
        for (const Y of F) {
          const U = b(Y.textContent || "") + b(Y.getAttribute("ch_name") || "") + b(Y.getAttribute("name") || ""), ne = ((z = Y.querySelector("img")) == null ? void 0 : z.getAttribute("src")) || Y.getAttribute("avatar") || "", me = ne && decodeURIComponent(ne).replace(/\\/g, "/").split("/").pop() || "";
          if (U.includes(T) || A && me && (me.includes(A) || A.includes(me))) {
            let ie = parseInt(Y.getAttribute("chid") || Y.getAttribute("data-character-id") || Y.getAttribute("data-id") || "-1", 10);
            return { element: Y, index: isNaN(ie) ? -1 : ie };
          }
        }
        return { element: null, index: -1 };
      }
      findMessageElement(g, m, b, T) {
        const A = document.getElementById("chat") || document.body, E = Array.from(A.querySelectorAll(".mes, [mesid]")).filter((U) => !U.closest(".log-manager-modal")), F = g.mesid ?? g.id;
        if (F != null)
          for (let U = E.length - 1; U >= 0; U--) {
            const ne = E[U];
            if (ne.dataset.mesid === String(F) || ne.getAttribute("mesid") === String(F))
              return ne;
          }
        if (!b && m >= 0)
          for (let U = E.length - 1; U >= 0; U--) {
            const ne = E[U];
            if (parseInt(ne.dataset.index || ne.getAttribute("mesid") || "-1", 10) === m)
              return ne;
          }
        const z = (U) => (U || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        let Y = z(g.mes);
        if (Y.length > 40 && (Y = Y.substring(0, 40)), Y.length >= 4)
          for (let U = E.length - 1; U >= 0; U--) {
            const ne = E[U], me = ne.querySelector(".mes_text, .message-text, .content") || ne;
            if (z(me.textContent).includes(Y))
              return ne;
          }
        if (b && T) {
          const U = z(T);
          if (U.length >= 2)
            for (let ne = E.length - 1; ne >= 0; ne--) {
              const me = E[ne], ie = me.querySelector(".mes_text, .message-text, .content") || me;
              if (z(ie.textContent).includes(U))
                return me;
            }
        }
        return null;
      }
      resetCurrentCharacter() {
        this.context.characterId !== void 0 && (this.context.characterId = -1), this.win.this_chid !== void 0 && (this.win.this_chid = -1);
      }
    }
    const h = vo(), _ = new d(), x = /* @__PURE__ */ In(null);
    function N() {
      const v = document.documentElement;
      if (v.classList.contains("dark"))
        return !0;
      if (v.classList.contains("light"))
        return !1;
      const m = (getComputedStyle(document.body).backgroundColor || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (m) {
        const b = parseInt(m[1], 10), T = parseInt(m[2], 10), A = parseInt(m[3], 10);
        return b * 0.299 + T * 0.587 + A * 0.114 < 128;
      }
      return !0;
    }
    const H = /* @__PURE__ */ ve(N());
    let W = null;
    const K = () => {
      W !== null && cancelAnimationFrame(W), W = requestAnimationFrame(() => {
        if (!x.value)
          return;
        const v = getComputedStyle(document.body);
        let g = v.backgroundColor;
        (!g || g === "rgba(0, 0, 0, 0)" || g === "transparent") && (g = H.value ? "#1e1e1e" : "#f5f5f5");
        let m = v.color;
        const b = document.querySelector(".mes_text, .message-text");
        if (b) {
          const F = getComputedStyle(b).color;
          F && F !== "rgba(0, 0, 0, 0)" && F !== "transparent" && (m = F);
        }
        const T = (F) => {
          const z = F.match(/\d+/g);
          return z && z.length >= 3 ? parseInt(z[0], 10) * 0.299 + parseInt(z[1], 10) * 0.587 + parseInt(z[2], 10) * 0.114 : 128;
        }, A = T(g), E = T(m);
        50 > Math.abs(A - E) && (m = A < 128 ? "#E8E8E8" : "#33312F"), x.value.style.backgroundColor = g, x.value.style.color = m, x.value.style.setProperty("--dynamic-solid-bg", g);
      });
    };
    let B = null, j = null;
    const k = /* @__PURE__ */ ve(!1), G = /* @__PURE__ */ In(null), X = /* @__PURE__ */ ve({ top: "calc(100% + 5px)", right: "0", bottom: "auto", left: "auto", transform: "none" }), D = /* @__PURE__ */ ve(!1), M = /* @__PURE__ */ ve(!1), V = /* @__PURE__ */ ve(null), q = /* @__PURE__ */ new Set();
    let O = null;
    const se = (v) => {
      v && v.stopPropagation(), k.value = !k.value, k.value && bt(() => {
        if (window.innerWidth <= 768)
          X.value = { top: "50%", left: "50%", transform: "translate(-50%, -50%)", bottom: "auto", right: "auto" };
        else if (G.value) {
          const g = G.value.getBoundingClientRect();
          let m = "calc(100% + 5px)", b = "auto", T = "0", A = "auto";
          window.innerHeight - g.bottom < 150 && (m = "auto", b = "calc(100% + 5px)"), g.right < 160 && (T = "auto", A = "0"), X.value = { top: m, bottom: b, right: T, left: A, transform: "none" };
        }
      });
    }, ce = /* @__PURE__ */ In(null), Se = /* @__PURE__ */ ve(0), ue = Le(() => {
      const v = h.currentMessages || [];
      return Array.isArray(v) ? h.searchQuery ? [...v].sort((g, m) => (m.send_date ?? m.timestamp ?? 0) - (g.send_date ?? g.timestamp ?? 0)) : v : [];
    }), ee = Le(() => ue.value.length), ae = Le(() => ee.value * Tn), Je = Le(() => {
      const v = ce.value;
      if (!v)
        return { start: 0, end: Math.min(ee.value, 20) };
      const g = Math.floor(Se.value / Tn), m = Math.ceil((Se.value + v.clientHeight) / Tn);
      return { start: Math.max(0, g - Hi), end: Math.min(ee.value, m + Hi) };
    }), it = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ ve(""), Pe = Le(() => {
      const v = h.searchQuery;
      v !== qe.value && (it.clear(), qe.value = v);
      const g = Je.value.start;
      return ue.value.slice(g, Je.value.end).map((m, b) => {
        const T = g + b, A = String(m.mesid ?? m.id ?? T);
        let E = it.get(A);
        return E || (E = c(m.mes, v), it.set(A, E)), { ...m, _localIndex: b, _globalIndex: T, _top: T * Tn, _html: E };
      });
    });
    let Rt = null;
    const ts = () => {
      Rt !== null && cancelAnimationFrame(Rt), Rt = requestAnimationFrame(() => {
        ce.value && (Se.value = ce.value.scrollTop);
      });
    };
    Pt(() => h.currentChatId, async () => {
      it.clear(), await bt(), ce.value && (ce.value.scrollTop = 0, Se.value = 0);
    });
    let Ct = null, ze = null;
    const Dt = (v) => {
      h.$patch({ searchQuery: v.target.value }), Ct && clearTimeout(Ct), Ct = window.setTimeout(() => {
        ze && ze.abort(), ze = new AbortController(), h.performSearch(h.searchQuery);
      }, 300);
    };
    let rt = null;
    const qt = new ResizeObserver(() => {
      rt && clearTimeout(rt), rt = window.setTimeout(() => {
        ce.value && (Se.value = ce.value.scrollTop);
      }, 100);
    });
    Ks(async () => {
      t = !0, i(), window.addEventListener("resize", i), window.addEventListener("orientationchange", r), await bt(), K(), B = new MutationObserver(() => {
        const g = N();
        g !== H.value && (H.value = g), K();
      }), B.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), B.observe(document.body, { attributes: !0, attributeFilter: ["class", "style"] });
      const v = window.matchMedia("(prefers-color-scheme: dark)");
      j = () => {
        const g = N();
        g !== H.value && (H.value = g), K();
      }, v.addEventListener("change", j), h.fetchChats(), window.refreshChatLogManager ? window.refreshChatLogManager_fallback = () => h.fetchChats() : window.refreshChatLogManager = () => h.fetchChats(), ce.value && qt.observe(ce.value);
    }), Us(() => {
      t = !1, window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r), B && B.disconnect(), j && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", j), W !== null && cancelAnimationFrame(W), rt && clearTimeout(rt), f && clearTimeout(f), Ct && clearTimeout(Ct), ze && ze.abort(), qt.disconnect(), q.forEach((v) => v.disconnect()), q.clear(), O && clearInterval(O), delete window.refreshChatLogManager, delete window.refreshChatLogManager_fallback;
    });
    const Be = () => {
      typeof window.closeChatLogManager == "function" ? window.closeChatLogManager() : n.value = !1;
    }, pt = (v) => {
      const m = (_.getCurrentChatFileName() || "").replace(/\.jsonl?$/, ""), b = (v || "").replace(/\.jsonl?$/, "");
      return m === b;
    }, gt = async (v, g, m) => {
      try {
        h.stopIndexing();
        const b = _.context, T = m.replace(/\.jsonl?$/, "");
        if (typeof b.saveChat == "function") {
          try {
            await b.saveChat();
          } catch {
          }
          await new Promise((z) => setTimeout(z, 300));
        } else
          _.saveChat(), await new Promise((z) => setTimeout(z, 300));
        let { element: A, index: E } = _.findCharacterElement(v, g);
        if (E === -1) {
          const z = _.getCharacters(), Y = (me) => (me || "").replace(/\s+/g, "").toLowerCase(), U = Y(v), ne = z.find((me) => Y(me.name) === U);
          ne && (E = z.indexOf(ne));
        }
        if (E === -1)
          return alert(`自动定位角色【${v}】失败，请手动在左侧选择该角色后继续。`), !1;
        const F = _.getCurrentCharacterId();
        return String(F) !== String(E) && (_.resetCurrentCharacter(), A ? A.click() : _.selectCharacterById(E), await new Promise((z) => setTimeout(z, 1200))), typeof b.openCharacterChat == "function" ? await b.openCharacterChat(T) : typeof b.executeSlashCommandsWithOptions == "function" ? await b.executeSlashCommandsWithOptions("/chat " + JSON.stringify(T)) : _.clickHistoryItem(m), await new Promise((z) => setTimeout(z, 600)), !0;
      } catch (b) {
        return console.error("[ChatLogManager] Jump Error:", b), !1;
      }
    }, u = (v, g, m, b) => {
      try {
        const T = document.getElementById("chat") || document.querySelector(".chat-container, #chat-window") || document.body;
        if (!T)
          return;
        let A = !1;
        const E = () => {
          if (A)
            return !0;
          const U = _.findMessageElement(v, g, m, b);
          if (U) {
            A = !0;
            const ne = () => U.scrollIntoView({ behavior: "smooth", block: "center" });
            return ne(), setTimeout(ne, 200), setTimeout(ne, 500), U.style.transition = "all 0.5s ease", U.style.boxShadow = "0 0 30px 10px rgba(255, 152, 0, 0.8)", U.style.backgroundColor = "rgba(255, 152, 0, 0.25)", setTimeout(() => {
              U.style.boxShadow = "", U.style.backgroundColor = "";
            }, 3e3), m && b && a(U, b), !0;
          }
          return !1;
        };
        if (E())
          return;
        let F = null;
        const z = new MutationObserver(() => {
          A || (F && clearTimeout(F), F = window.setTimeout(() => {
            E() && (z.disconnect(), q.delete(z));
          }, 100));
        });
        z.observe(T, { childList: !0, subtree: !0, attributes: !1 }), q.add(z);
        let Y = 0;
        O && clearInterval(O), O = window.setInterval(() => {
          if (Y++, E()) {
            clearInterval(O), z.disconnect(), q.delete(z);
            return;
          }
          Y > 5 && Y % 3 === 0 && (T.scrollTop = Math.max(0, T.scrollTop - 800)), Y > 40 && (clearInterval(O), z.disconnect(), q.delete(z));
        }, 200);
      } catch (T) {
        console.warn("[ChatLogManager] Scroll to message failed:", T);
      }
    }, p = async () => {
      const v = h.allChats.find((m) => m.id === h.currentChatId);
      if (!v)
        return;
      const g = pt(v.id);
      Be(), await bt(), g || await gt(v.charName, v.avatarUrl, v.id) && await h.loadMessages(v);
    }, y = async (v, g) => {
      let m = v.chatId || v.chat_id;
      if (!m && v.id && typeof v.id == "string") {
        const F = v.id.lastIndexOf("_");
        m = F !== -1 ? v.id.substring(0, F) : v.id;
      }
      m || (m = h.currentChatId);
      const b = h.allChats.find((F) => F.id === m);
      if (!b) {
        alert("无法定位该消息归属的聊天文件。");
        return;
      }
      const T = !!h.searchQuery, A = h.searchQuery, E = pt(b.id);
      Be(), await bt(), E ? u(v, g, T, A) : await gt(b.charName, b.avatarUrl, b.id) && (await h.loadMessages(b), await bt(), u(v, g, T, A));
    }, I = async () => {
      const v = h.allChats.find((m) => m.id === h.currentChatId);
      if (!v)
        return;
      const g = pt(v.id);
      if (window.confirm(g ? "🚨 正在删除活跃聊天！将自动切换到历史记录，确定删除？" : "⚠️ 确定要永久删除此记录吗？"))
        try {
          if (h.stopIndexing(), await new Promise((m) => setTimeout(m, 100)), _.saveChat(), g) {
            const m = h.allChats.find((b) => b.charName === v.charName && b.id !== v.id);
            m && await gt(m.charName, m.avatarUrl, m.id);
          }
          await ji(v.charName, v.avatarUrl, v.id) ? (h.$patch({ currentChatId: null, currentMessages: [], selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch(""), h.fetchChats()) : alert("❌ 删除失败");
        } catch (m) {
          console.error("[ChatLogManager] Delete Error:", m);
        }
    }, w = async () => {
      var m;
      if (h.selectedChatIds.length === 0 || !window.confirm(`🛑 极度危险！将删除 ${h.selectedChatIds.length} 个会话，确定吗？`))
        return;
      D.value = !0;
      let v = 0, g = 0;
      try {
        h.stopIndexing(), await new Promise((E) => setTimeout(E, 100));
        const b = Array.from(h.selectedChatIds);
        let T = !1, A = "";
        for (const E of b)
          if (pt(E)) {
            T = !0, A = ((m = h.allChats.find((F) => F.id === E)) == null ? void 0 : m.charName) || "";
            break;
          }
        if (_.saveChat(), T) {
          const E = h.allChats.find((F) => F.charName === A && !b.includes(F.id));
          E && await gt(E.charName, E.avatarUrl, E.id);
        }
        for (const E of b) {
          const F = h.allChats.find((z) => z.id === E);
          F && await ji(F.charName, F.avatarUrl, F.id) ? v++ : g++;
        }
        h.$patch({ selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch("");
      } finally {
        D.value = !1, t && (alert(`🗑️ 完毕！成功: ${v}${g > 0 ? ` 失败: ${g}` : ""}`), h.fetchChats());
      }
    };
    async function S(v, g) {
      const m = [];
      let b = 0;
      const T = async () => {
        if (b >= g.length)
          return;
        const A = b++;
        try {
          m[A] = { success: !0, value: await g[A]() };
        } catch (E) {
          m[A] = { success: !1, error: E };
        }
        await T();
      };
      return await Promise.all(Array(Math.min(v, g.length)).fill(null).map(() => T())), m;
    }
    const R = (v) => {
      const g = h.allChats.find((T) => T.id === h.currentChatId);
      if (!g) {
        alert("未找到当前聊天记录");
        return;
      }
      let m = [];
      try {
        m = JSON.parse(JSON.stringify(h.currentMessages || []));
      } catch {
        m = Array.from(h.currentMessages || []);
      }
      if (!Array.isArray(m) || m.length === 0) {
        alert("当前聊天没有消息可导出");
        return;
      }
      const b = g.title || "未命名聊天";
      try {
        v === "txt" ? Ja(b, m) : v === "md" ? qa(b, m) : v === "jsonl" && Ya(b, g.charName, m);
      } catch (T) {
        console.error("[ChatLogManager] 单独导出失败:", T), alert("导出操作遇到错误，请查看控制台日志。");
      }
      k.value = !1;
    }, P = async (v) => {
      if (h.selectedChatIds.length !== 0) {
        D.value = !0;
        try {
          const g = Array.from(h.selectedChatIds).map((b) => async () => {
            const T = h.allChats.find((A) => A.id === b);
            return T ? { title: T.title, charName: T.charName, messages: await Fs(T.charName, T.avatarUrl, T.id) } : null;
          }), m = await S(5, g);
          Ga(m.filter((b) => b.success && b.value !== null).map((b) => b.value), v);
        } finally {
          D.value = !1;
        }
      }
    }, L = () => {
      V.value && V.value.click();
    }, C = async (v) => {
      const g = v.target.files;
      if (!g || g.length === 0)
        return;
      const m = 30 * 1024 * 1024;
      for (let A = 0; A < g.length; A++)
        if (g[A].size > m) {
          alert(`❌ 文件 ${g[A].name} 过大 (超过30MB)，为防止浏览器崩溃已中止导入。`), V.value && (V.value.value = "");
          return;
        }
      M.value = !0, s.value = 0;
      let b = 0, T = 0;
      try {
        for (let A = 0; A < g.length; A++) {
          const E = await g[A].text();
          let F;
          try {
            F = JSON.parse(E);
          } catch {
            F = E.split(`
`).filter((ie) => ie.trim()).map((ie) => JSON.parse(ie));
          }
          let z = [];
          Array.isArray(F) && (F.length > 0 && Array.isArray(F[0]) ? z = F.map((ie) => ({ messages: ie })) : F.length > 0 && F[0].messages ? z = F : F.length > 0 && F[0].chat_metadata ? z = [{ charName: F[0].character_name, messages: F.slice(1) }] : z = [{ messages: F }]);
          const Y = z.length;
          let U = 0;
          const ne = async (ie) => {
            var we;
            for (const Et of ie) {
              const jt = Et.messages.filter((Ye) => Ye.mes !== void 0);
              if (jt.length === 0)
                continue;
              let xn = Et.charName || ((we = jt.find((Ye) => !Ye.is_user && Ye.name)) == null ? void 0 : we.name) || "";
              if (!xn) {
                const Ye = window.prompt("请输入绑定的角色名称：", "");
                if (!Ye) {
                  T++;
                  continue;
                }
                xn = Ye;
              }
              let ns = h.allChats.find((Ye) => Ye.charName === xn || xn.includes(Ye.charName));
              ns && await da(jt, ns.avatarUrl, ns.charName) ? b++ : T++;
            }
          }, me = 10;
          for (let ie = 0; ie < Y; ie += me) {
            const we = z.slice(ie, ie + me);
            await ne(we), U += we.length, s.value = Math.floor(U / Y * 100), await new Promise((Et) => setTimeout(Et, 0));
          }
        }
      } finally {
        M.value = !1, s.value = 0, V.value && (V.value.value = ""), t && (alert(`🎉 导入完毕！成功: ${b}${T > 0 ? ` 失败: ${T}` : ""}`), h.fetchChats());
      }
    };
    return (v, g) => n.value ? (de(), pe("div", {
      key: 0,
      class: "log-manager-modal",
      onClick: vt(Be, ["self"]),
      onTouchmove: g[9] || (g[9] = vt(() => {
      }, ["self", "prevent"]))
    }, [
      Q("div", {
        class: $t(["log-manager-container", H.value ? "theme-dark" : "theme-light"]),
        ref_key: "containerRef",
        ref: x
      }, [
        Q("header", Qa, [
          g[10] || (g[10] = Q("h2", null, "📚 聊天记录总览", -1)),
          Q("div", Xa, [
            Q("button", {
              class: "action-btn import-btn",
              onClick: L,
              disabled: M.value
            }, xe(M.value ? `导入中... ${s.value}%` : "📥 导入"), 9, Za),
            Q("input", {
              type: "file",
              ref_key: "fileInputRef",
              ref: V,
              style: { display: "none" },
              accept: ".json,.jsonl",
              multiple: "",
              onChange: C
            }, null, 544),
            Q("button", {
              class: $t(["action-btn toggle-batch-btn", { active: te(h).isBatchMode }]),
              onClick: g[0] || (g[0] = //@ts-ignore
              (...m) => te(h).toggleBatchMode && te(h).toggleBatchMode(...m))
            }, xe(te(h).isBatchMode ? "退出批量" : "☑️ 批量"), 3),
            Q("button", {
              class: "icon-btn close-btn",
              onClick: Be,
              title: "关闭"
            }, "✕")
          ])
        ]),
        Q("main", eu, [
          Q("aside", tu, [
            Q("div", nu, [
              Q("div", su, [
                Q("input", {
                  type: "text",
                  placeholder: te(h).isIndexing ? "后台加载中..." : "搜索全局内容...",
                  class: "search-input",
                  value: te(h).searchQuery,
                  onInput: Dt,
                  disabled: te(h).isBatchMode
                }, null, 40, iu),
                te(h).isIndexing ? (de(), pe("span", ru, "⌛")) : He("", !0)
              ])
            ]),
            te(h).isBatchMode ? (de(), pe("div", ou, [
              Q("input", {
                type: "checkbox",
                id: "selectAllBox",
                class: "batch-checkbox",
                checked: te(h).isAllSelected,
                onChange: g[1] || (g[1] = //@ts-ignore
                (...m) => te(h).toggleSelectAll && te(h).toggleSelectAll(...m))
              }, null, 40, lu),
              Q("label", cu, "全选 " + xe(te(h).searchQuery ? "搜索结果" : "所有会话"), 1)
            ])) : He("", !0),
            Ae(Ua)
          ]),
          Q("section", au, [
            Q("div", uu, [
              Q("h3", null, xe(te(h).isBatchMode ? "批量操作" : "消息预览"), 1),
              !te(h).isBatchMode && te(h).currentChatId ? (de(), pe("div", fu, [
                Q("button", {
                  class: "action-btn jump-chat-btn",
                  onClick: p
                }, "🚀 进入"),
                Q("button", {
                  class: "action-btn delete-btn-sm",
                  onClick: I
                }, "🗑️"),
                Q("div", {
                  class: "export-dropdown",
                  ref_key: "exportWrapperRef",
                  ref: G
                }, [
                  Q("button", {
                    class: "action-btn",
                    onClick: vt(se, ["stop"])
                  }, "📤 导出 ▾"),
                  Ae(wc, { name: "fade-slide" }, {
                    default: Tr(() => [
                      k.value ? (de(), pe("div", {
                        key: 0,
                        class: "dropdown-menu",
                        style: St(X.value)
                      }, [
                        Q("div", {
                          class: "dropdown-item",
                          onClick: g[2] || (g[2] = vt((m) => R("md"), ["stop"]))
                        }, "📄 Markdown"),
                        Q("div", {
                          class: "dropdown-item",
                          onClick: g[3] || (g[3] = vt((m) => R("txt"), ["stop"]))
                        }, "📝 TXT 纯文本"),
                        Q("div", {
                          class: "dropdown-item",
                          onClick: g[4] || (g[4] = vt((m) => R("jsonl"), ["stop"]))
                        }, "📦 官方 JSONL")
                      ], 4)) : He("", !0)
                    ]),
                    _: 1
                  })
                ], 512)
              ])) : He("", !0)
            ]),
            te(h).isBatchMode ? (de(), pe("div", hu, [
              Q("div", du, [
                Q("h3", null, "已选 " + xe(te(h).selectedChatIds.length) + " 个会话", 1),
                te(h).selectedChatIds.length === 0 ? (de(), pe("p", pu, "请在左侧勾选")) : He("", !0)
              ]),
              te(h).selectedChatIds.length > 0 ? (de(), pe("div", gu, [
                Q("button", {
                  class: "big-btn md-btn",
                  onClick: g[5] || (g[5] = (m) => P("md")),
                  disabled: D.value
                }, xe(D.value ? "处理中..." : "📥 导出为 Markdown"), 9, mu),
                Q("button", {
                  class: "big-btn txt-btn",
                  onClick: g[6] || (g[6] = (m) => P("txt")),
                  disabled: D.value
                }, xe(D.value ? "处理中..." : "📥 导出为 TXT"), 9, vu),
                Q("button", {
                  class: "big-btn json-btn",
                  onClick: g[7] || (g[7] = (m) => P("json")),
                  disabled: D.value
                }, xe(D.value ? "处理中..." : "📦 导出为 JSON"), 9, yu),
                g[11] || (g[11] = Q("div", { class: "divider" }, null, -1)),
                Q("button", {
                  class: "big-btn delete-btn",
                  onClick: w,
                  disabled: D.value
                }, xe(D.value ? "删除中..." : "🗑️ 永久删除记录"), 9, _u)
              ])) : He("", !0)
            ])) : (de(), pe("div", {
              key: 1,
              class: "message-container",
              ref_key: "scrollContainer",
              ref: ce,
              onScroll: ts,
              onClick: g[8] || (g[8] = (m) => k.value = !1)
            }, [
              te(h).currentChatId ? te(h).loadingMessages ? (de(), pe("div", xu, " ⏳ 加载庞大消息记录中，请稍候... ")) : (de(), pe("div", {
                key: 2,
                class: "messages",
                style: St({ height: ae.value + "px" })
              }, [
                (de(!0), pe(Re, null, jr(Pe.value, (m) => (de(), pe("div", {
                  key: m._globalIndex,
                  style: St({ transform: `translateY(${m._top}px)` }),
                  class: "message-bubble-wrapper"
                }, [
                  Q("div", {
                    class: $t(["message-bubble", m.is_user ? "is-user" : "is-bot"])
                  }, [
                    Q("button", {
                      class: "msg-jump-btn",
                      onClick: vt((b) => y(m, m._globalIndex), ["stop"]),
                      title: "跳转到原文"
                    }, "🎯", 8, Su),
                    Q("strong", null, xe(m.name || (m.is_user ? "You" : "Bot")) + ":", 1),
                    Q("p", {
                      class: "preview-text",
                      innerHTML: m._html
                    }, null, 8, wu)
                  ], 2)
                ], 4))), 128))
              ], 4)) : (de(), pe("div", bu, "👈 请在左侧选择角色或搜索内容"))
            ], 544))
          ])
        ])
      ], 2)
    ], 32)) : He("", !0);
  }
});
const Eu = /* @__PURE__ */ _o(Cu, [["__scopeId", "data-v-f24afb81"]]), bo = "chat-log-manager-float-pos";
function Tu() {
  try {
    const e = localStorage.getItem(bo);
    if (e) {
      const t = JSON.parse(e), n = window.innerWidth - 50, s = window.innerHeight - 50;
      return { x: Math.max(0, Math.min(t.x, n)), y: Math.max(0, Math.min(t.y, s)) };
    }
  } catch {
  }
  return null;
}
function Wi(e, t) {
  localStorage.setItem(bo, JSON.stringify({ x: e, y: t }));
}
function Vi() {
  try {
    let e = function() {
      s.classList.remove("idle-transparent"), clearTimeout(a), a = setTimeout(() => {
        s.classList.add("idle-transparent");
      }, 3e3);
    }, t = function(d, h) {
      const _ = d - o, x = h - l;
      (Math.abs(_) > 5 || Math.abs(x) > 5) && (r = !0), s.style.left = Math.max(0, Math.min(c + _, window.innerWidth - s.offsetWidth)) + "px", s.style.top = Math.max(0, Math.min(f + x, window.innerHeight - s.offsetHeight)) + "px";
    };
    if (document.getElementById("chat-log-manager-float-btn"))
      return;
    const n = document.createElement("style");
    n.innerHTML = `
      #chat-log-manager-float-btn { position: fixed; border-radius: 50%; background: rgba(92, 87, 80, 0.85); color: #F9F1DB; backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 99999; border: 1px solid rgba(255,255,255,0.1); user-select: none; touch-action: none; width: 44px; height: 44px; font-size: 20px; transition: all 0.3s ease; opacity: 0.85; }
      #chat-log-manager-float-btn:hover { transform: scale(1.1); opacity: 1; }
      @media (max-width: 768px) { #chat-log-manager-float-btn { width: 36px; height: 36px; font-size: 16px; } #chat-log-manager-float-btn.idle-transparent { opacity: 0.3 !important; transform: scale(0.9); } }
    `, document.head.appendChild(n);
    const s = document.createElement("div");
    s.id = "chat-log-manager-float-btn", s.innerHTML = "📚";
    const i = Tu();
    i ? (s.style.left = i.x + "px", s.style.top = i.y + "px") : (s.style.left = window.innerWidth - 64 + "px", s.style.top = window.innerHeight - 200 + "px");
    let r = !1, o, l, c, f, a = null;
    e(), s.addEventListener("mousedown", (d) => {
      if (d.button !== 0)
        return;
      e(), o = d.clientX, l = d.clientY;
      const h = s.getBoundingClientRect();
      c = h.left, f = h.top, s.style.transition = "none";
      const _ = (N) => t(N.clientX, N.clientY), x = () => {
        document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", x), s.style.transition = "all 0.3s ease", r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("mousemove", _), document.addEventListener("mouseup", x);
    }), s.addEventListener("touchstart", (d) => {
      e();
      const h = d.touches[0];
      o = h.clientX, l = h.clientY;
      const _ = s.getBoundingClientRect();
      c = _.left, f = _.top;
      const x = (H) => t(H.touches[0].clientX, H.touches[0].clientY), N = () => {
        document.removeEventListener("touchmove", x), document.removeEventListener("touchend", N), r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("touchmove", x, { passive: !1 }), document.addEventListener("touchend", N);
    }), s.addEventListener("click", () => {
      r || Iu();
    }), document.body.appendChild(s);
  } catch {
  }
}
function Iu() {
  let e = document.getElementById("chat-log-manager-container");
  if (e)
    e.style.display = "block";
  else {
    e = document.createElement("div"), e.id = "chat-log-manager-container", e.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 99998; backdrop-filter: blur(3px);", document.body.appendChild(e);
    const t = Qc(Eu), n = ea();
    n.use(fa), t.use(n), t.mount(e);
  }
  typeof window.refreshChatLogManager == "function" && window.refreshChatLogManager();
}
window.closeChatLogManager = () => {
  const e = document.getElementById("chat-log-manager-container");
  e && (e.style.display = "none");
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Vi) : Vi();
