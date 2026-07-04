/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Os(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const ae = {}, zt = [], ze = () => {
}, Ki = () => !1, kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), me = Object.assign, Ls = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xo = Object.prototype.hasOwnProperty, se = (e, t) => xo.call(e, t), U = Array.isArray, Bt = (e) => mn(e) === "[object Map]", Ui = (e) => mn(e) === "[object Set]", Gs = (e) => mn(e) === "[object Date]", X = (e) => typeof e == "function", de = (e) => typeof e == "string", ke = (e) => typeof e == "symbol", ie = (e) => e !== null && typeof e == "object", Ji = (e) => (ie(e) || X(e)) && X(e.then) && X(e.catch), qi = Object.prototype.toString, mn = (e) => qi.call(e), So = (e) => mn(e).slice(8, -1), Yi = (e) => mn(e) === "[object Object]", jn = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xt = /* @__PURE__ */ Os(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Co = /-\w/g, Be = zn(
  (e) => e.replace(Co, (t) => t.slice(1).toUpperCase())
), wo = /\B([A-Z])/g, Pt = zn(
  (e) => e.replace(wo, "-$1").toLowerCase()
), Gi = zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zn = zn(
  (e) => e ? `on${Gi(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), es = (e, ...t) => {
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
  const t = de(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Qs;
const Bn = () => Qs || (Qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _t(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = de(s) ? Oo(s) : _t(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (de(e) || ie(e))
    return e;
}
const Mo = /;(?![^(]*\))/g, Io = /:([^]+)/, Ao = /\/\*[^]*?\*\//g;
function Oo(e) {
  const t = {};
  return e.replace(Ao, "").split(Mo).forEach((n) => {
    if (n) {
      const s = n.split(Io);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ot(e[n]);
      s && (t += s + " ");
    }
  else if (ie(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $o = /* @__PURE__ */ Os(Lo);
function Xi(e) {
  return !!e || e === "";
}
function Fo(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = $s(e[s], t[s]);
  return n;
}
function $s(e, t) {
  if (e === t)
    return !0;
  let n = Gs(e), s = Gs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ke(e), s = ke(t), n || s)
    return e === t;
  if (n = U(e), s = U(t), n || s)
    return n && s ? Fo(e, t) : !1;
  if (n = ie(e), s = ie(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !$s(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Zi = (e) => !!(e && e.__v_isRef === !0), _e = (e) => de(e) ? e : e == null ? "" : U(e) || ie(e) && (e.toString === qi || !X(e.toString)) ? Zi(e) ? _e(e.value) : JSON.stringify(e, er, 2) : String(e), er = (e, t) => Zi(t) ? er(e, t.value) : Bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[ts(s, r) + " =>"] = i, n),
    {}
  )
} : Ui(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ts(n))
} : ke(t) ? ts(t) : ie(t) && !U(t) && !Yi(t) ? String(t) : t, ts = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ke(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ve;
class tr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ve && (ve.active ? (this.parent = ve, this.index = (ve.scopes || (ve.scopes = [])).push(
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
      const n = ve;
      try {
        return ve = this, t();
      } finally {
        ve = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ve === this)
        ve = this.prevScope;
      else {
        let t = ve;
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
  return ve;
}
function ir(e, t = !1) {
  ve && ve.cleanups.push(e);
}
let ce;
const ns = /* @__PURE__ */ new WeakSet();
class rr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && (ve.active ? ve.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ns.has(this) && (ns.delete(this), this.trigger()));
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
    this.flags |= 2, Xs(this), cr(this);
    const t = ce, n = He;
    ce = this, He = !0;
    try {
      return this.fn();
    } finally {
      ar(this), ce = t, He = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
      this.deps = this.depsTail = void 0, Xs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ns.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ms(this) && this.run();
  }
  get dirty() {
    return ms(this);
  }
}
let or = 0, Zt, en;
function lr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = en, en = e;
    return;
  }
  e.next = Zt, Zt = e;
}
function Fs() {
  or++;
}
function Ps() {
  if (--or > 0)
    return;
  if (en) {
    let t = en;
    for (en = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Zt; ) {
    let t = Zt;
    for (Zt = void 0; t; ) {
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
    s.version === -1 ? (s === n && (n = i), Ns(s), Po(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ur(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ur(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === an) || (e.globalVersion = an, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ms(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ce, s = He;
  ce = e, He = !0;
  try {
    cr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ye(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ce = n, He = s, ar(e), e.flags &= -3;
  }
}
function Ns(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ns(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Po(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const fr = [];
function Qe() {
  fr.push(He), He = !1;
}
function Xe() {
  const e = fr.pop();
  He = e === void 0 ? !0 : e;
}
function Xs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ce;
    ce = void 0;
    try {
      t();
    } finally {
      ce = n;
    }
  }
}
let an = 0;
class No {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Rs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ce || !He || ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ce)
      n = this.activeLink = new No(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, hr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ce.depsTail, n.nextDep = void 0, ce.depsTail.nextDep = n, ce.depsTail = n, ce.deps === n && (ce.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, an++, this.notify(t);
  }
  notify(t) {
    Fs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ps();
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
const Tn = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), un = /* @__PURE__ */ Symbol(
  ""
);
function xe(e, t, n) {
  if (He && ce) {
    let s = Tn.get(e);
    s || Tn.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Rs()), i.map = s, i.key = n), i.track();
  }
}
function ct(e, t, n, s, i, r) {
  const o = Tn.get(e);
  if (!o) {
    an++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Fs(), t === "clear")
    o.forEach(l);
  else {
    const c = U(e), f = c && jn(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((p, h) => {
        (h === "length" || h === un || !ke(h) && h >= a) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(un)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Lt)), Bt(e) && l(o.get(vs)));
          break;
        case "delete":
          c || (l(o.get(Lt)), Bt(e) && l(o.get(vs)));
          break;
        case "set":
          Bt(e) && l(o.get(Lt));
          break;
      }
  }
  Ps();
}
function Ro(e, t) {
  const n = Tn.get(e);
  return n && n.get(t);
}
function Rt(e) {
  const t = /* @__PURE__ */ ne(e);
  return t === e ? t : (xe(t, "iterate", un), /* @__PURE__ */ Fe(e) ? t : t.map(We));
}
function Hn(e) {
  return xe(e = /* @__PURE__ */ ne(e), "iterate", un), e;
}
function Je(e, t) {
  return /* @__PURE__ */ ut(e) ? Wt(/* @__PURE__ */ at(e) ? We(t) : t) : We(t);
}
const ko = {
  __proto__: null,
  [Symbol.iterator]() {
    return ss(this, Symbol.iterator, (e) => Je(this, e));
  },
  concat(...e) {
    return Rt(this).concat(
      ...e.map((t) => U(t) ? Rt(t) : t)
    );
  },
  entries() {
    return ss(this, "entries", (e) => (e[1] = Je(this, e[1]), e));
  },
  every(e, t) {
    return it(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return it(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Je(this, s)),
      arguments
    );
  },
  find(e, t) {
    return it(
      this,
      "find",
      e,
      t,
      (n) => Je(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return it(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return it(
      this,
      "findLast",
      e,
      t,
      (n) => Je(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return it(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return it(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return is(this, "includes", e);
  },
  indexOf(...e) {
    return is(this, "indexOf", e);
  },
  join(e) {
    return Rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return is(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ut(this, "pop");
  },
  push(...e) {
    return Ut(this, "push", e);
  },
  reduce(e, ...t) {
    return Zs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zs(this, "reduceRight", e, t);
  },
  shift() {
    return Ut(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ut(this, "splice", e);
  },
  toReversed() {
    return Rt(this).toReversed();
  },
  toSorted(e) {
    return Rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ut(this, "unshift", e);
  },
  values() {
    return ss(this, "values", (e) => Je(this, e));
  }
};
function ss(e, t, n) {
  const s = Hn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Fe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Do = Array.prototype;
function it(e, t, n, s, i, r) {
  const o = Hn(e), l = o !== e && !/* @__PURE__ */ Fe(e), c = o[t];
  if (c !== Do[t]) {
    const p = c.apply(e, r);
    return l ? We(p) : p;
  }
  let f = n;
  o !== e && (l ? f = function(p, h) {
    return n.call(this, Je(e, p), h, e);
  } : n.length > 2 && (f = function(p, h) {
    return n.call(this, p, h, e);
  }));
  const a = c.call(o, f, s);
  return l && i ? i(a) : a;
}
function Zs(e, t, n, s) {
  const i = Hn(e), r = i !== e && !/* @__PURE__ */ Fe(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(f, a, p) {
    return l && (l = !1, f = Je(e, f)), n.call(this, f, Je(e, a), p, e);
  }) : n.length > 3 && (o = function(f, a, p) {
    return n.call(this, f, a, p, e);
  }));
  const c = i[t](o, ...s);
  return l ? Je(e, c) : c;
}
function is(e, t, n) {
  const s = /* @__PURE__ */ ne(e);
  xe(s, "iterate", un);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Vn(n[0]) ? (n[0] = /* @__PURE__ */ ne(n[0]), s[t](...n)) : i;
}
function Ut(e, t, n = []) {
  Qe(), Fs();
  const s = (/* @__PURE__ */ ne(e))[t].apply(e, n);
  return Ps(), Xe(), s;
}
const jo = /* @__PURE__ */ Os("__proto__,__v_isRef,__isVue"), dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ke)
);
function zo(e) {
  ke(e) || (e = String(e));
  const t = /* @__PURE__ */ ne(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
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
    const o = U(t);
    if (!i) {
      let c;
      if (o && (c = ko[n]))
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
      /* @__PURE__ */ ge(t) ? t : s
    );
    if ((ke(n) ? dr.has(n) : jo(n)) || (i || xe(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ge(l)) {
      const c = o && jn(n) ? l : l.value;
      return i && ie(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return ie(l) ? i ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ Wn(l) : l;
  }
}
class gr extends pr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = U(t) && jn(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ ut(r);
      if (!/* @__PURE__ */ Fe(s) && !/* @__PURE__ */ ut(s) && (r = /* @__PURE__ */ ne(r), s = /* @__PURE__ */ ne(s)), !o && /* @__PURE__ */ ge(r) && !/* @__PURE__ */ ge(s))
        return f || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : se(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ge(t) ? t : i
    );
    return t === /* @__PURE__ */ ne(i) && c && (l ? Ye(s, r) && ct(t, "set", n, s) : ct(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = se(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ct(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ke(n) || !dr.has(n)) && xe(t, "has", n), s;
  }
  ownKeys(t) {
    return xe(
      t,
      "iterate",
      U(t) ? "length" : Lt
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
const ys = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function Ko(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ ne(i), o = Bt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = i[e](...s), a = n ? ys : t ? Wt : We;
    return !t && xe(
      r,
      "iterate",
      c ? vs : Lt
    ), me(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: p, done: h } = f.next();
          return h ? { value: p, done: h } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: h
          };
        }
      }
    );
  };
}
function bn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Uo(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(i);
      e || (Ye(i, l) && xe(o, "get", i), xe(o, "get", l));
      const { has: c } = _n(o), f = t ? ys : e ? Wt : We;
      if (c.call(o, i))
        return f(r.get(i));
      if (c.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && xe(/* @__PURE__ */ ne(i), "iterate", Lt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(i);
      return e || (Ye(i, l) && xe(o, "has", i), xe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ne(l), f = t ? ys : e ? Wt : We;
      return !e && xe(c, "iterate", Lt), l.forEach((a, p) => i.call(r, f(a), f(p), o));
    }
  };
  return me(
    n,
    e ? {
      add: bn("add"),
      set: bn("set"),
      delete: bn("delete"),
      clear: bn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ne(this), o = _n(r), l = /* @__PURE__ */ ne(i), c = !t && !/* @__PURE__ */ Fe(i) && !/* @__PURE__ */ ut(i) ? l : i;
        return o.has.call(r, c) || Ye(i, c) && o.has.call(r, i) || Ye(l, c) && o.has.call(r, l) || (r.add(c), ct(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Fe(r) && !/* @__PURE__ */ ut(r) && (r = /* @__PURE__ */ ne(r));
        const o = /* @__PURE__ */ ne(this), { has: l, get: c } = _n(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ ne(i), f = l.call(o, i));
        const a = c.call(o, i);
        return o.set(i, r), f ? Ye(r, a) && ct(o, "set", i, r) : ct(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ne(this), { has: o, get: l } = _n(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ ne(i), c = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return c && ct(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ ne(this), r = i.size !== 0, o = i.clear();
        return r && ct(
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
function ks(e, t) {
  const n = Uo(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    se(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Jo = {
  get: /* @__PURE__ */ ks(!1, !1)
}, qo = {
  get: /* @__PURE__ */ ks(!1, !0)
}, Yo = {
  get: /* @__PURE__ */ ks(!0, !1)
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
function Wn(e) {
  return /* @__PURE__ */ ut(e) ? e : Ds(
    e,
    !1,
    Ho,
    Jo,
    mr
  );
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  return Ds(
    e,
    !1,
    Vo,
    qo,
    vr
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return Ds(
    e,
    !0,
    Wo,
    Yo,
    yr
  );
}
function Ds(e, t, n, s, i) {
  if (!ie(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function at(e) {
  return /* @__PURE__ */ ut(e) ? /* @__PURE__ */ at(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ne(t) : e;
}
function js(e) {
  return !se(e, "__v_skip") && Object.isExtensible(e) && Qi(e, "__v_skip", !0), e;
}
const We = (e) => ie(e) ? /* @__PURE__ */ Wn(e) : e, Wt = (e) => ie(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return _r(e, !1);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return _r(e, !0);
}
function _r(e, t) {
  return /* @__PURE__ */ ge(e) ? e : new Zo(e, t);
}
class Zo {
  constructor(t, n) {
    this.dep = new Rs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ne(t), this._value = n ? t : We(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Fe(t) || /* @__PURE__ */ ut(t);
    t = s ? t : /* @__PURE__ */ ne(t), Ye(t, n) && (this._rawValue = t, this._value = s ? t : We(t), this.dep.trigger());
  }
}
function ei(e) {
  e.dep && e.dep.trigger();
}
function Z(e) {
  return /* @__PURE__ */ ge(e) ? e.value : e;
}
const el = {
  get: (e, t, n) => t === "__v_raw" ? e : Z(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ge(i) && !/* @__PURE__ */ ge(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function br(e) {
  return /* @__PURE__ */ at(e) ? e : new Proxy(e, el);
}
// @__NO_SIDE_EFFECTS__
function tl(e) {
  const t = U(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = sl(e, n);
  return t;
}
class nl {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = ke(n) ? n : String(n), this._raw = /* @__PURE__ */ ne(t);
    let i = !0, r = t;
    if (!U(t) || ke(this._key) || !jn(this._key))
      do
        i = !/* @__PURE__ */ Vn(r) || /* @__PURE__ */ Fe(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Z(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ge(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ge(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Ro(this._raw, this._key);
  }
}
function sl(e, t, n) {
  return new nl(e, t, n);
}
class il {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Rs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = an - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ce !== this)
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
  return X(e) ? s = e : (s = e.get, i = e.set), new il(s, i, n);
}
const xn = {}, Mn = /* @__PURE__ */ new WeakMap();
let Mt;
function ol(e, t = !1, n = Mt) {
  if (n) {
    let s = Mn.get(n);
    s || Mn.set(n, s = []), s.push(e);
  }
}
function ll(e, t, n = ae) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, f = (R) => i ? R : /* @__PURE__ */ Fe(R) || i === !1 || i === 0 ? yt(R, 1) : yt(R);
  let a, p, h, b, C = !1, O = !1;
  if (/* @__PURE__ */ ge(e) ? (p = () => e.value, C = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ at(e) ? (p = () => f(e), C = !0) : U(e) ? (O = !0, C = e.some((R) => /* @__PURE__ */ at(R) || /* @__PURE__ */ Fe(R)), p = () => e.map((R) => {
    if (/* @__PURE__ */ ge(R))
      return R.value;
    if (/* @__PURE__ */ at(R))
      return f(R);
    if (X(R))
      return c ? c(R, 2) : R();
  })) : X(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (h) {
      Qe();
      try {
        h();
      } finally {
        Xe();
      }
    }
    const R = Mt;
    Mt = a;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      Mt = R;
    }
  } : p = ze, t && i) {
    const R = p, L = i === !0 ? 1 / 0 : i;
    p = () => yt(R(), L);
  }
  const j = sr(), B = () => {
    a.stop(), j && j.active && Ls(j.effects, a);
  };
  if (r && t) {
    const R = t;
    t = (...L) => {
      const K = R(...L);
      return B(), K;
    };
  }
  let H = O ? new Array(e.length).fill(xn) : xn;
  const k = (R) => {
    if (!(!(a.flags & 1) || !a.dirty && !R))
      if (t) {
        const L = a.run();
        if (R || i || C || (O ? L.some((K, Y) => Ye(K, H[Y])) : Ye(L, H))) {
          h && h();
          const K = Mt;
          Mt = a;
          try {
            const Y = [
              L,
              // pass undefined as the old value when it's changed for the first time
              H === xn ? void 0 : O && H[0] === xn ? [] : H,
              b
            ];
            H = L, c ? c(t, 3, Y) : (
              // @ts-expect-error
              t(...Y)
            );
          } finally {
            Mt = K;
          }
        }
      } else
        a.run();
  };
  return l && l(k), a = new rr(p), a.scheduler = o ? () => o(k, !1) : k, b = (R) => ol(R, !1, a), h = a.onStop = () => {
    const R = Mn.get(a);
    if (R) {
      if (c)
        c(R, 4);
      else
        for (const L of R)
          L();
      Mn.delete(a);
    }
  }, t ? s ? k(!0) : H = a.run() : o ? o(k.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function yt(e, t = 1 / 0, n) {
  if (t <= 0 || !ie(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ge(e))
    yt(e.value, t, n);
  else if (U(e))
    for (let s = 0; s < e.length; s++)
      yt(e[s], t, n);
  else if (Ui(e) || Bt(e))
    e.forEach((s) => {
      yt(s, t, n);
    });
  else if (Yi(e)) {
    for (const s in e)
      yt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && yt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Kn(i, t, n);
  }
}
function De(e, t, n, s) {
  if (X(e)) {
    const i = vn(e, t, n, s);
    return i && Ji(i) && i.catch((r) => {
      Kn(r, t, n);
    }), i;
  }
  if (U(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(De(e[r], t, n, s));
    return i;
  }
}
function Kn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ae;
  if (t) {
    let l = t.parent;
    const c = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, c, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Qe(), vn(r, null, 10, [
        e,
        c,
        f
      ]), Xe();
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
const Ce = [];
let Ue = -1;
const Ht = [];
let vt = null, jt = 0;
const xr = /* @__PURE__ */ Promise.resolve();
let In = null;
function tn(e) {
  const t = In || xr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function al(e) {
  let t = Ue + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ce[s], r = fn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function zs(e) {
  if (!(e.flags & 1)) {
    const t = fn(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fn(n) ? Ce.push(e) : Ce.splice(al(t), 0, e), e.flags |= 1, Sr();
  }
}
function Sr() {
  In || (In = xr.then(wr));
}
function ul(e) {
  U(e) ? Ht.push(...e) : vt && e.id === -1 ? vt.splice(jt + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1), Sr();
}
function ti(e, t, n = Ue + 1) {
  for (; n < Ce.length; n++) {
    const s = Ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Cr(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort(
      (n, s) => fn(n) - fn(s)
    );
    if (Ht.length = 0, vt) {
      vt.push(...t);
      return;
    }
    for (vt = t, jt = 0; jt < vt.length; jt++) {
      const n = vt[jt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vt = null, jt = 0;
  }
}
const fn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wr(e) {
  const t = ze;
  try {
    for (Ue = 0; Ue < Ce.length; Ue++) {
      const n = Ce[Ue];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), vn(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Ue < Ce.length; Ue++) {
      const n = Ce[Ue];
      n && (n.flags &= -2);
    }
    Ue = -1, Ce.length = 0, Cr(), In = null, (Ce.length || Ht.length) && wr();
  }
}
let Ge = null, Er = null;
function An(e) {
  const t = Ge;
  return Ge = e, Er = e && e.type.__scopeId || null, t;
}
function Tr(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && $n(-1);
    const r = An(t);
    let o;
    try {
      o = e(...i);
    } finally {
      An(r), s._d && $n(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ct(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[s];
    c && (Qe(), De(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Xe());
  }
}
function fl(e, t) {
  if (Ee) {
    let n = Ee.provides;
    const s = Ee.parent && Ee.parent.provides;
    s === n && (n = Ee.provides = Object.create(s)), n[e] = t;
  }
}
function nn(e, t, n = !1) {
  const s = Us();
  if (s || Ft) {
    let i = Ft ? Ft._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && X(t) ? t.call(s && s.proxy) : t;
  }
}
function hl() {
  return !!(Us() || Ft);
}
const dl = /* @__PURE__ */ Symbol.for("v-scx"), pl = () => nn(dl);
function $t(e, t, n) {
  return Mr(e, t, n);
}
function Mr(e, t, n = ae) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = me({}, n), c = t && s || !t && r !== "post";
  let f;
  if (pn) {
    if (r === "sync") {
      const b = pl();
      f = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = ze, b.resume = ze, b.pause = ze, b;
    }
  }
  const a = Ee;
  l.call = (b, C, O) => De(b, a, C, O);
  let p = !1;
  r === "post" ? l.scheduler = (b) => {
    Ae(b, a && a.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (b, C) => {
    C ? b() : zs(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), p && (b.flags |= 2, a && (b.id = a.uid, b.i = a));
  };
  const h = ll(e, t, l);
  return pn && (f ? f.push(h) : c && h()), h;
}
function gl(e, t, n) {
  const s = this.proxy, i = de(e) ? e.includes(".") ? Ir(s, e) : () => s[e] : e.bind(s, s);
  let r;
  X(t) ? r = t : (r = t.handler, n = t);
  const o = yn(this), l = Mr(i, r.bind(s), n);
  return o(), l;
}
function Ir(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const ml = /* @__PURE__ */ Symbol("_vte"), Ar = (e) => e.__isTeleport, Ne = /* @__PURE__ */ Symbol("_leaveCb"), Jt = /* @__PURE__ */ Symbol("_enterCb");
function vl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Bs(() => {
    e.isMounted = !0;
  }), Dr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Pe = [Function, Array], Or = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Pe,
  onEnter: Pe,
  onAfterEnter: Pe,
  onEnterCancelled: Pe,
  // leave
  onBeforeLeave: Pe,
  onLeave: Pe,
  onAfterLeave: Pe,
  onLeaveCancelled: Pe,
  // appear
  onBeforeAppear: Pe,
  onAppear: Pe,
  onAfterAppear: Pe,
  onAppearCancelled: Pe
}, Lr = (e) => {
  const t = e.subTree;
  return t.component ? Lr(t.component) : t;
}, yl = {
  name: "BaseTransition",
  props: Or,
  setup(e, { slots: t }) {
    const n = Us(), s = vl();
    return () => {
      const i = t.default && Pr(t.default(), !0), r = i && i.length ? $r(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? je() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ ne(e), { mode: l } = o;
      if (s.isLeaving)
        return rs(r);
      const c = ni(r);
      if (!c)
        return rs(r);
      let f = bs(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      c.type !== we && hn(c, f);
      let a = n.subTree && ni(n.subTree);
      if (a && a.type !== we && !At(a, c) && Lr(n).type !== we) {
        let p = bs(
          a,
          o,
          s,
          n
        );
        if (hn(a, p), l === "out-in" && c.type !== we)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, a = void 0;
          }, rs(r);
        l === "in-out" && c.type !== we ? p.delayLeave = (h, b, C) => {
          const O = Fr(
            s,
            a
          );
          O[String(a.key)] = a, h[Ne] = () => {
            b(), h[Ne] = void 0, delete f.delayedLeave, a = void 0;
          }, f.delayedLeave = () => {
            C(), delete f.delayedLeave, a = void 0;
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
      if (n.type !== we) {
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
function bs(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: f,
    onAfterEnter: a,
    onEnterCancelled: p,
    onBeforeLeave: h,
    onLeave: b,
    onAfterLeave: C,
    onLeaveCancelled: O,
    onBeforeAppear: j,
    onAppear: B,
    onAfterAppear: H,
    onAppearCancelled: k
  } = t, R = String(e.key), L = Fr(n, e), K = (I, W) => {
    I && De(
      I,
      s,
      9,
      W
    );
  }, Y = (I, W) => {
    const q = W[1];
    K(I, W), U(I) ? I.every((F) => F.length <= 1) && q() : I.length <= 1 && q();
  }, P = {
    mode: o,
    persisted: l,
    beforeEnter(I) {
      let W = c;
      if (!n.isMounted)
        if (r)
          W = j || c;
        else
          return;
      I[Ne] && I[Ne](
        !0
        /* cancelled */
      );
      const q = L[R];
      q && At(e, q) && q.el[Ne] && q.el[Ne](), K(W, [I]);
    },
    enter(I) {
      if (L[R] === e)
        return;
      let W = f, q = a, F = p;
      if (!n.isMounted)
        if (r)
          W = B || f, q = H || a, F = k || p;
        else
          return;
      let Q = !1;
      I[Jt] = (Me) => {
        Q || (Q = !0, Me ? K(F, [I]) : K(q, [I]), P.delayedLeave && P.delayedLeave(), I[Jt] = void 0);
      };
      const fe = I[Jt].bind(null, !1);
      W ? Y(W, [I, fe]) : fe();
    },
    leave(I, W) {
      const q = String(e.key);
      if (I[Jt] && I[Jt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      K(h, [I]);
      let F = !1;
      I[Ne] = (fe) => {
        F || (F = !0, W(), fe ? K(O, [I]) : K(C, [I]), I[Ne] = void 0, L[q] === e && delete L[q]);
      };
      const Q = I[Ne].bind(null, !1);
      L[q] = e, b ? Y(b, [I, Q]) : Q();
    },
    clone(I) {
      const W = bs(
        I,
        t,
        n,
        s,
        i
      );
      return i && i(W), W;
    }
  };
  return P;
}
function rs(e) {
  if (Un(e))
    return e = bt(e), e.children = null, e;
}
function ni(e) {
  if (!Un(e))
    return Ar(e.type) && e.children ? $r(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && X(n.default))
      return n.default();
  }
}
function hn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, hn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pr(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Re ? (o.patchFlag & 128 && i++, s = s.concat(
      Pr(o.children, t, l)
    )) : (t || o.type !== we) && s.push(l != null ? bt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Nr(e, t) {
  return X(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => me({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function Rr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function si(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const On = /* @__PURE__ */ new WeakMap();
function sn(e, t, n, s, i = !1) {
  if (U(e)) {
    e.forEach(
      (O, j) => sn(
        O,
        t && (U(t) ? t[j] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (rn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && sn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Js(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, f = t && t.r, a = l.refs === ae ? l.refs = {} : l.refs, p = l.setupState, h = /* @__PURE__ */ ne(p), b = p === ae ? Ki : (O) => si(a, O) ? !1 : se(h, O), C = (O, j) => !(j && si(a, j));
  if (f != null && f !== c) {
    if (ii(t), de(f))
      a[f] = null, b(f) && (p[f] = null);
    else if (/* @__PURE__ */ ge(f)) {
      const O = t;
      C(f, O.k) && (f.value = null), O.k && (a[O.k] = null);
    }
  }
  if (X(c)) {
    Qe();
    try {
      vn(c, l, 12, [o, a]);
    } finally {
      Xe();
    }
  } else {
    const O = de(c), j = /* @__PURE__ */ ge(c);
    if (O || j) {
      const B = () => {
        if (e.f) {
          const H = O ? b(c) ? p[c] : a[c] : C() || !e.k ? c.value : a[e.k];
          if (i)
            U(H) && Ls(H, r);
          else if (U(H))
            H.includes(r) || H.push(r);
          else if (O)
            a[c] = [r], b(c) && (p[c] = a[c]);
          else {
            const k = [r];
            C(c, e.k) && (c.value = k), e.k && (a[e.k] = k);
          }
        } else
          O ? (a[c] = o, b(c) && (p[c] = o)) : j && (C(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const H = () => {
          B(), On.delete(e);
        };
        H.id = -1, On.set(e, H), Ae(H, n);
      } else
        ii(e), B();
    }
  }
}
function ii(e) {
  const t = On.get(e);
  t && (t.flags |= 8, On.delete(e));
}
Bn().requestIdleCallback;
Bn().cancelIdleCallback;
const rn = (e) => !!e.type.__asyncLoader, Un = (e) => e.type.__isKeepAlive;
function bl(e, t) {
  kr(e, "a", t);
}
function xl(e, t) {
  kr(e, "da", t);
}
function kr(e, t, n = Ee) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Jn(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Un(i.parent.vnode) && Sl(s, t, n, i), i = i.parent;
  }
}
function Sl(e, t, n, s) {
  const i = Jn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Hs(() => {
    Ls(s[t], i);
  }, n);
}
function Jn(e, t, n = Ee, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Qe();
      const l = yn(n), c = De(t, n, e, o);
      return l(), Xe(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const ft = (e) => (t, n = Ee) => {
  (!pn || e === "sp") && Jn(e, (...s) => t(...s), n);
}, Cl = ft("bm"), Bs = ft("m"), wl = ft(
  "bu"
), El = ft("u"), Dr = ft(
  "bum"
), Hs = ft("um"), Tl = ft(
  "sp"
), Ml = ft("rtg"), Il = ft("rtc");
function Al(e, t = Ee) {
  Jn("ec", e, t);
}
const Ol = /* @__PURE__ */ Symbol.for("v-ndc");
function jr(e, t, n, s) {
  let i;
  const r = n && n[s], o = U(e);
  if (o || de(e)) {
    const l = o && /* @__PURE__ */ at(e);
    let c = !1, f = !1;
    l && (c = !/* @__PURE__ */ Fe(e), f = /* @__PURE__ */ ut(e), e = Hn(e)), i = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      i[a] = t(
        c ? f ? Wt(We(e[a])) : We(e[a]) : e[a],
        a,
        void 0,
        r && r[a]
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r && r[l]);
  } else if (ie(e))
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
const xs = (e) => e ? ro(e) ? Js(e) : xs(e.parent) : null, on = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ me(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xs(e.parent),
    $root: (e) => xs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ws(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tn.bind(e.proxy)),
    $watch: (e) => gl.bind(e)
  })
), os = (e, t) => e !== ae && !e.__isScriptSetup && se(e, t), Ll = {
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
        if (os(s, t))
          return o[t] = 1, s[t];
        if (i !== ae && se(i, t))
          return o[t] = 2, i[t];
        if (se(r, t))
          return o[t] = 3, r[t];
        if (n !== ae && se(n, t))
          return o[t] = 4, n[t];
        Ss && (o[t] = 0);
      }
    }
    const f = on[t];
    let a, p;
    if (f)
      return t === "$attrs" && xe(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== ae && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, se(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return os(i, t) ? (i[t] = n, !0) : s !== ae && se(s, t) ? (s[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ae && l[0] !== "$" && se(e, l) || os(t, l) || se(r, l) || se(s, l) || se(on, l) || se(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ri(e) {
  return U(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ss = !0;
function $l(e) {
  const t = Ws(e), n = e.proxy, s = e.ctx;
  Ss = !1, t.beforeCreate && oi(t.beforeCreate, e, "bc");
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
    beforeMount: p,
    mounted: h,
    beforeUpdate: b,
    updated: C,
    activated: O,
    deactivated: j,
    beforeDestroy: B,
    beforeUnmount: H,
    destroyed: k,
    unmounted: R,
    render: L,
    renderTracked: K,
    renderTriggered: Y,
    errorCaptured: P,
    serverPrefetch: I,
    // public API
    expose: W,
    inheritAttrs: q,
    // assets
    components: F,
    directives: Q,
    filters: fe
  } = t;
  if (f && Fl(f, s, null), o)
    for (const ee in o) {
      const re = o[ee];
      X(re) && (s[ee] = re.bind(n));
    }
  if (i) {
    const ee = i.call(n, n);
    ie(ee) && (e.data = /* @__PURE__ */ Wn(ee));
  }
  if (Ss = !0, r)
    for (const ee in r) {
      const re = r[ee], Ze = X(re) ? re.bind(n, n) : X(re.get) ? re.get.bind(n, n) : ze, ht = !X(re) && X(re.set) ? re.set.bind(n) : ze, et = Le({
        get: Ze,
        set: ht
      });
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (be) => et.value = be
      });
    }
  if (l)
    for (const ee in l)
      zr(l[ee], s, n, ee);
  if (c) {
    const ee = X(c) ? c.call(n) : c;
    Reflect.ownKeys(ee).forEach((re) => {
      fl(re, ee[re]);
    });
  }
  a && oi(a, e, "c");
  function oe(ee, re) {
    U(re) ? re.forEach((Ze) => ee(Ze.bind(n))) : re && ee(re.bind(n));
  }
  if (oe(Cl, p), oe(Bs, h), oe(wl, b), oe(El, C), oe(bl, O), oe(xl, j), oe(Al, P), oe(Il, K), oe(Ml, Y), oe(Dr, H), oe(Hs, R), oe(Tl, I), U(W))
    if (W.length) {
      const ee = e.exposed || (e.exposed = {});
      W.forEach((re) => {
        Object.defineProperty(ee, re, {
          get: () => n[re],
          set: (Ze) => n[re] = Ze,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  L && e.render === ze && (e.render = L), q != null && (e.inheritAttrs = q), F && (e.components = F), Q && (e.directives = Q), I && Rr(e);
}
function Fl(e, t, n = ze) {
  U(e) && (e = Cs(e));
  for (const s in e) {
    const i = e[s];
    let r;
    ie(i) ? "default" in i ? r = nn(
      i.from || s,
      i.default,
      !0
    ) : r = nn(i.from || s) : r = nn(i), /* @__PURE__ */ ge(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function oi(e, t, n) {
  De(
    U(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zr(e, t, n, s) {
  let i = s.includes(".") ? Ir(n, s) : () => n[s];
  if (de(e)) {
    const r = t[e];
    X(r) && $t(i, r);
  } else if (X(e))
    $t(i, e.bind(n));
  else if (ie(e))
    if (U(e))
      e.forEach((r) => zr(r, t, n, s));
    else {
      const r = X(e.handler) ? e.handler.bind(n) : t[e.handler];
      X(r) && $t(i, r, e);
    }
}
function Ws(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !n && !s ? c = t : (c = {}, i.length && i.forEach(
    (f) => Ln(c, f, o, !0)
  ), Ln(c, t, o)), ie(t) && r.set(t, c), c;
}
function Ln(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Ln(e, r, n, !0), i && i.forEach(
    (o) => Ln(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Pl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Pl = {
  data: li,
  props: ci,
  emits: ci,
  // objects
  methods: Gt,
  computed: Gt,
  // lifecycle
  beforeCreate: Se,
  created: Se,
  beforeMount: Se,
  mounted: Se,
  beforeUpdate: Se,
  updated: Se,
  beforeDestroy: Se,
  beforeUnmount: Se,
  destroyed: Se,
  unmounted: Se,
  activated: Se,
  deactivated: Se,
  errorCaptured: Se,
  serverPrefetch: Se,
  // assets
  components: Gt,
  directives: Gt,
  // watch
  watch: Rl,
  // provide / inject
  provide: li,
  inject: Nl
};
function li(e, t) {
  return t ? e ? function() {
    return me(
      X(e) ? e.call(this, this) : e,
      X(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nl(e, t) {
  return Gt(Cs(e), Cs(t));
}
function Cs(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gt(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ci(e, t) {
  return e ? U(e) && U(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    ri(e),
    ri(t ?? {})
  ) : t;
}
function Rl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Se(e[s], t[s]);
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
let kl = 0;
function Dl(e, t) {
  return function(s, i = null) {
    X(s) || (s = me({}, s)), i != null && !ie(i) && (i = null);
    const r = Br(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = r.app = {
      _uid: kl++,
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
      use(a, ...p) {
        return o.has(a) || (a && X(a.install) ? (o.add(a), a.install(f, ...p)) : X(a) && (o.add(a), a(f, ...p))), f;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), f;
      },
      component(a, p) {
        return p ? (r.components[a] = p, f) : r.components[a];
      },
      directive(a, p) {
        return p ? (r.directives[a] = p, f) : r.directives[a];
      },
      mount(a, p, h) {
        if (!c) {
          const b = f._ceVNode || Te(s, i);
          return b.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), p && t ? t(b, a) : e(b, a, h), c = !0, f._container = a, a.__vue_app__ = f, Js(b.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (De(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(a, p) {
        return r.provides[a] = p, f;
      },
      runWithContext(a) {
        const p = Ft;
        Ft = f;
        try {
          return a();
        } finally {
          Ft = p;
        }
      }
    };
    return f;
  };
}
let Ft = null;
const jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Pt(t)}Modifiers`];
function zl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || ae;
  let i = n;
  const r = t.startsWith("update:"), o = r && jl(s, t.slice(7));
  o && (o.trim && (i = n.map((a) => de(a) ? a.trim() : a)), o.number && (i = n.map(Eo)));
  let l, c = s[l = Zn(t)] || // also try camelCase event handler (#2249)
  s[l = Zn(Be(t))];
  !c && r && (c = s[l = Zn(Pt(t))]), c && De(
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
    e.emitted[l] = !0, De(
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
  if (!X(e)) {
    const c = (f) => {
      const a = Hr(f, t, !0);
      a && (l = !0, me(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (ie(e) && s.set(e, null), null) : (U(r) ? r.forEach((c) => o[c] = null) : me(o, r), ie(e) && s.set(e, o), o);
}
function qn(e, t) {
  return !e || !kn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Pt(t)) || se(e, t));
}
function ls(e) {
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
    props: p,
    data: h,
    setupState: b,
    ctx: C,
    inheritAttrs: O
  } = e, j = An(e);
  let B, H;
  try {
    if (n.shapeFlag & 4) {
      const R = i || s, L = R;
      B = qe(
        f.call(
          L,
          R,
          a,
          p,
          b,
          h,
          C
        )
      ), H = l;
    } else {
      const R = t;
      B = qe(
        R.length > 1 ? R(
          p,
          { attrs: l, slots: o, emit: c }
        ) : R(
          p,
          null
        )
      ), H = t.props ? l : Hl(l);
    }
  } catch (R) {
    ln.length = 0, Kn(R, e, 1), B = Te(we);
  }
  let k = B;
  if (H && O !== !1) {
    const R = Object.keys(H), { shapeFlag: L } = k;
    R.length && L & 7 && (r && R.some(Dn) && (H = Wl(
      H,
      r
    )), k = bt(k, H, !1, !0));
  }
  return n.dirs && (k = bt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && hn(k, n.transition), B = k, An(j), B;
}
const Hl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Dn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
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
      return s ? ai(s, o, f) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const h = a[p];
        if (Wr(o, s, h) && !qn(f, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? ai(s, o, f) : !0 : !!o;
  return !1;
}
function ai(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Wr(t, e, r) && !qn(n, r))
      return !0;
  }
  return !1;
}
function Wr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ie(s) && ie(i) ? !$s(s, i) : s !== i;
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
  } = e, l = /* @__PURE__ */ ne(i), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let h = a[p];
        if (qn(e.emitsOptions, h))
          continue;
        const b = t[h];
        if (c)
          if (se(r, h))
            b !== r[h] && (r[h] = b, f = !0);
          else {
            const C = Be(h);
            i[C] = ws(
              c,
              l,
              C,
              b,
              e,
              !1
            );
          }
        else
          b !== r[h] && (r[h] = b, f = !0);
      }
    }
  } else {
    Jr(e, t, i, r) && (f = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !se(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Pt(p)) === p || !se(t, a))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[p] = ws(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== l)
      for (const p in r)
        (!t || !se(t, p)) && (delete r[p], f = !0);
  }
  f && ct(e.attrs, "set", "");
}
function Jr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Xt(c))
        continue;
      const f = t[c];
      let a;
      i && se(i, a = Be(c)) ? !r || !r.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : qn(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ ne(n), f = l || ae;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      n[p] = ws(
        i,
        c,
        p,
        f[p],
        e,
        !se(f, p)
      );
    }
  }
  return o;
}
function ws(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = se(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && X(c)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const a = yn(i);
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
    ] && (s === "" || s === Pt(n)) && (s = !0));
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
  if (!X(e)) {
    const a = (p) => {
      c = !0;
      const [h, b] = qr(p, t, !0);
      me(o, h), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return ie(e) && s.set(e, zt), zt;
  if (U(r))
    for (let a = 0; a < r.length; a++) {
      const p = Be(r[a]);
      ui(p) && (o[p] = ae);
    }
  else if (r)
    for (const a in r) {
      const p = Be(a);
      if (ui(p)) {
        const h = r[a], b = o[p] = U(h) || X(h) ? { type: h } : me({}, h), C = b.type;
        let O = !1, j = !0;
        if (U(C))
          for (let B = 0; B < C.length; ++B) {
            const H = C[B], k = X(H) && H.name;
            if (k === "Boolean") {
              O = !0;
              break;
            } else
              k === "String" && (j = !1);
          }
        else
          O = X(C) && C.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = O, b[
          1
          /* shouldCastTrue */
        ] = j, (O || se(b, "default")) && l.push(p);
      }
    }
  const f = [o, l];
  return ie(e) && s.set(e, f), f;
}
function ui(e) {
  return e[0] !== "$" && !Xt(e);
}
const Vs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ks = (e) => U(e) ? e.map(qe) : [qe(e)], Yl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Tr((...i) => Ks(t(...i)), n);
  return s._c = !1, s;
}, Yr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Vs(i))
      continue;
    const r = e[i];
    if (X(r))
      t[i] = Yl(i, r, s);
    else if (r != null) {
      const o = Ks(r);
      t[i] = () => o;
    }
  }
}, Gr = (e, t) => {
  const n = Ks(t);
  e.slots.default = () => n;
}, Qr = (e, t, n) => {
  for (const s in t)
    (n || !Vs(s)) && (e[s] = t[s]);
}, Gl = (e, t, n) => {
  const s = e.slots = Kr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Qr(s, t, n), n && Qi(s, "_", i, !0)) : Yr(t, s);
  } else
    t && Gr(e, t);
}, Ql = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ae;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Qr(i, t, n) : (r = !t.$stable, Yr(t, i)), o = t;
  } else
    t && (Gr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Vs(l) && o[l] == null && delete i[l];
}, Ae = nc;
function Xl(e) {
  return Zl(e);
}
function Zl(e, t) {
  const n = Bn();
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
    parentNode: p,
    nextSibling: h,
    setScopeId: b = ze,
    insertStaticContent: C
  } = e, O = (u, m, _, T = null, w = null, E = null, N = void 0, v = null, g = !!m.dynamicChildren) => {
    if (u === m)
      return;
    u && !At(u, m) && (T = nt(u), be(u, w, E, !0), u = null), m.patchFlag === -2 && (g = !1, m.dynamicChildren = null);
    const { type: d, ref: x, shapeFlag: y } = m;
    switch (d) {
      case Yn:
        j(u, m, _, T);
        break;
      case we:
        B(u, m, _, T);
        break;
      case as:
        u == null && H(m, _, T, N);
        break;
      case Re:
        F(
          u,
          m,
          _,
          T,
          w,
          E,
          N,
          v,
          g
        );
        break;
      default:
        y & 1 ? L(
          u,
          m,
          _,
          T,
          w,
          E,
          N,
          v,
          g
        ) : y & 6 ? Q(
          u,
          m,
          _,
          T,
          w,
          E,
          N,
          v,
          g
        ) : (y & 64 || y & 128) && d.process(
          u,
          m,
          _,
          T,
          w,
          E,
          N,
          v,
          g,
          st
        );
    }
    x != null && w ? sn(x, u && u.ref, E, m || u, !m) : x == null && u && u.ref != null && sn(u.ref, null, E, u, !0);
  }, j = (u, m, _, T) => {
    if (u == null)
      s(
        m.el = l(m.children),
        _,
        T
      );
    else {
      const w = m.el = u.el;
      m.children !== u.children && f(w, m.children);
    }
  }, B = (u, m, _, T) => {
    u == null ? s(
      m.el = c(m.children || ""),
      _,
      T
    ) : m.el = u.el;
  }, H = (u, m, _, T) => {
    [u.el, u.anchor] = C(
      u.children,
      m,
      _,
      T,
      u.el,
      u.anchor
    );
  }, k = ({ el: u, anchor: m }, _, T) => {
    let w;
    for (; u && u !== m; )
      w = h(u), s(u, _, T), u = w;
    s(m, _, T);
  }, R = ({ el: u, anchor: m }) => {
    let _;
    for (; u && u !== m; )
      _ = h(u), i(u), u = _;
    i(m);
  }, L = (u, m, _, T, w, E, N, v, g) => {
    if (m.type === "svg" ? N = "svg" : m.type === "math" && (N = "mathml"), u == null)
      K(
        m,
        _,
        T,
        w,
        E,
        N,
        v,
        g
      );
    else {
      const d = u.el && u.el._isVueCE ? u.el : null;
      try {
        d && d._beginPatch(), I(
          u,
          m,
          w,
          E,
          N,
          v,
          g
        );
      } finally {
        d && d._endPatch();
      }
    }
  }, K = (u, m, _, T, w, E, N, v) => {
    let g, d;
    const { props: x, shapeFlag: y, transition: M, dirs: S } = u;
    if (g = u.el = o(
      u.type,
      E,
      x && x.is,
      x
    ), y & 8 ? a(g, u.children) : y & 16 && P(
      u.children,
      g,
      null,
      T,
      w,
      cs(u, E),
      N,
      v
    ), S && Ct(u, null, T, "created"), Y(g, u, u.scopeId, N, T), x) {
      for (const V in x)
        V !== "value" && !Xt(V) && r(g, V, null, x[V], E, T);
      "value" in x && r(g, "value", null, x.value, E), (d = x.onVnodeBeforeMount) && Ke(d, T, u);
    }
    S && Ct(u, null, T, "beforeMount");
    const A = ec(w, M);
    A && M.beforeEnter(g), s(g, m, _), ((d = x && x.onVnodeMounted) || A || S) && Ae(() => {
      try {
        d && Ke(d, T, u), A && M.enter(g), S && Ct(u, null, T, "mounted");
      } finally {
      }
    }, w);
  }, Y = (u, m, _, T, w) => {
    if (_ && b(u, _), T)
      for (let E = 0; E < T.length; E++)
        b(u, T[E]);
    if (w) {
      let E = w.subTree;
      if (m === E || to(E.type) && (E.ssContent === m || E.ssFallback === m)) {
        const N = w.vnode;
        Y(
          u,
          N,
          N.scopeId,
          N.slotScopeIds,
          w.parent
        );
      }
    }
  }, P = (u, m, _, T, w, E, N, v, g = 0) => {
    for (let d = g; d < u.length; d++) {
      const x = u[d] = v ? lt(u[d]) : qe(u[d]);
      O(
        null,
        x,
        m,
        _,
        T,
        w,
        E,
        N,
        v
      );
    }
  }, I = (u, m, _, T, w, E, N) => {
    const v = m.el = u.el;
    let { patchFlag: g, dynamicChildren: d, dirs: x } = m;
    g |= u.patchFlag & 16;
    const y = u.props || ae, M = m.props || ae;
    let S;
    if (_ && wt(_, !1), (S = M.onVnodeBeforeUpdate) && Ke(S, _, m, u), x && Ct(m, u, _, "beforeUpdate"), _ && wt(_, !0), // HMR updated, force full diff
    // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    d && (!u.dynamicChildren || u.dynamicChildren.length !== d.length) && (g = 0, N = !1, d = null), (y.innerHTML && M.innerHTML == null || y.textContent && M.textContent == null) && a(v, ""), d ? W(
      u.dynamicChildren,
      d,
      v,
      _,
      T,
      cs(m, w),
      E
    ) : N || re(
      u,
      m,
      v,
      null,
      _,
      T,
      cs(m, w),
      E,
      !1
    ), g > 0) {
      if (g & 16)
        q(v, y, M, _, w);
      else if (g & 2 && y.class !== M.class && r(v, "class", null, M.class, w), g & 4 && r(v, "style", y.style, M.style, w), g & 8) {
        const A = m.dynamicProps;
        for (let V = 0; V < A.length; V++) {
          const z = A[V], D = y[z], J = M[z];
          (J !== D || z === "value") && r(v, z, D, J, w, _);
        }
      }
      g & 1 && u.children !== m.children && a(v, m.children);
    } else
      !N && d == null && q(v, y, M, _, w);
    ((S = M.onVnodeUpdated) || x) && Ae(() => {
      S && Ke(S, _, m, u), x && Ct(m, u, _, "updated");
    }, T);
  }, W = (u, m, _, T, w, E, N) => {
    for (let v = 0; v < m.length; v++) {
      const g = u[v], d = m[v], x = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        g.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (g.type === Re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !At(g, d) || // - In the case of a component, it could contain anything.
        g.shapeFlag & 198) ? p(g.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      O(
        g,
        d,
        x,
        null,
        T,
        w,
        E,
        N,
        !0
      );
    }
  }, q = (u, m, _, T, w) => {
    if (m !== _) {
      if (m !== ae)
        for (const E in m)
          !Xt(E) && !(E in _) && r(
            u,
            E,
            m[E],
            null,
            w,
            T
          );
      for (const E in _) {
        if (Xt(E))
          continue;
        const N = _[E], v = m[E];
        N !== v && E !== "value" && r(u, E, v, N, w, T);
      }
      "value" in _ && r(u, "value", m.value, _.value, w);
    }
  }, F = (u, m, _, T, w, E, N, v, g) => {
    const d = m.el = u ? u.el : l(""), x = m.anchor = u ? u.anchor : l("");
    let { patchFlag: y, dynamicChildren: M, slotScopeIds: S } = m;
    S && (v = v ? v.concat(S) : S), u == null ? (s(d, _, T), s(x, _, T), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      x,
      w,
      E,
      N,
      v,
      g
    )) : y > 0 && y & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === M.length ? (W(
      u.dynamicChildren,
      M,
      _,
      w,
      E,
      N,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || w && m === w.subTree) && Xr(
      u,
      m,
      !0
      /* shallow */
    )) : re(
      u,
      m,
      _,
      x,
      w,
      E,
      N,
      v,
      g
    );
  }, Q = (u, m, _, T, w, E, N, v, g) => {
    m.slotScopeIds = v, u == null ? m.shapeFlag & 512 ? w.ctx.activate(
      m,
      _,
      T,
      N,
      g
    ) : fe(
      m,
      _,
      T,
      w,
      E,
      N,
      g
    ) : Me(u, m, g);
  }, fe = (u, m, _, T, w, E, N) => {
    const v = u.component = uc(
      u,
      T,
      w
    );
    if (Un(u) && (v.ctx.renderer = st), fc(v, !1, N), v.asyncDep) {
      if (w && w.registerDep(v, oe, N), !u.el) {
        const g = v.subTree = Te(we);
        B(null, g, m, _), u.placeholder = g.el;
      }
    } else
      oe(
        v,
        u,
        m,
        _,
        w,
        E,
        N
      );
  }, Me = (u, m, _) => {
    const T = m.component = u.component;
    if (Vl(u, m, _))
      if (T.asyncDep && !T.asyncResolved) {
        ee(T, m, _);
        return;
      } else
        T.next = m, T.update();
    else
      m.el = u.el, T.vnode = m;
  }, oe = (u, m, _, T, w, E, N) => {
    const v = () => {
      if (u.isMounted) {
        let { next: y, bu: M, u: S, parent: A, vnode: V } = u;
        {
          const le = Zr(u);
          if (le) {
            y && (y.el = V.el, ee(u, y, N)), le.asyncDep.then(() => {
              Ae(() => {
                u.isUnmounted || d();
              }, w);
            });
            return;
          }
        }
        let z = y, D;
        wt(u, !1), y ? (y.el = V.el, ee(u, y, N)) : y = V, M && es(M), (D = y.props && y.props.onVnodeBeforeUpdate) && Ke(D, A, y, V), wt(u, !0);
        const J = ls(u), te = u.subTree;
        u.subTree = J, O(
          te,
          J,
          // parent may have changed if it's in a teleport
          p(te.el),
          // anchor may have changed if it's in a fragment
          nt(te),
          u,
          w,
          E
        ), y.el = J.el, z === null && Kl(u, J.el), S && Ae(S, w), (D = y.props && y.props.onVnodeUpdated) && Ae(
          () => Ke(D, A, y, V),
          w
        );
      } else {
        let y;
        const { el: M, props: S } = m, { bm: A, m: V, parent: z, root: D, type: J } = u, te = rn(m);
        if (wt(u, !1), A && es(A), !te && (y = S && S.onVnodeBeforeMount) && Ke(y, z, m), wt(u, !0), M && Kt) {
          const le = () => {
            u.subTree = ls(u), Kt(
              M,
              u.subTree,
              u,
              w,
              null
            );
          };
          te && J.__asyncHydrate ? J.__asyncHydrate(
            M,
            u,
            le
          ) : le();
        } else {
          D.ce && D.ce._hasShadowRoot() && D.ce._injectChildStyle(
            J,
            u.parent ? u.parent.type : void 0
          );
          const le = u.subTree = ls(u);
          O(
            null,
            le,
            _,
            T,
            u,
            w,
            E
          ), m.el = le.el;
        }
        if (V && Ae(V, w), !te && (y = S && S.onVnodeMounted)) {
          const le = m;
          Ae(
            () => Ke(y, z, le),
            w
          );
        }
        (m.shapeFlag & 256 || z && rn(z.vnode) && z.vnode.shapeFlag & 256) && u.a && Ae(u.a, w), u.isMounted = !0, m = _ = T = null;
      }
    };
    u.scope.on();
    const g = u.effect = new rr(v);
    u.scope.off();
    const d = u.update = g.run.bind(g), x = u.job = g.runIfDirty.bind(g);
    x.i = u, x.id = u.uid, g.scheduler = () => zs(x), wt(u, !0), d();
  }, ee = (u, m, _) => {
    m.component = u;
    const T = u.vnode.props;
    u.vnode = m, u.next = null, Jl(u, m.props, T, _), Ql(u, m.children, _), Qe(), ti(u), Xe();
  }, re = (u, m, _, T, w, E, N, v, g = !1) => {
    const d = u && u.children, x = u ? u.shapeFlag : 0, y = m.children, { patchFlag: M, shapeFlag: S } = m;
    if (M > 0) {
      if (M & 128) {
        ht(
          d,
          y,
          _,
          T,
          w,
          E,
          N,
          v,
          g
        );
        return;
      } else if (M & 256) {
        Ze(
          d,
          y,
          _,
          T,
          w,
          E,
          N,
          v,
          g
        );
        return;
      }
    }
    S & 8 ? (x & 16 && dt(d, w, E), y !== d && a(_, y)) : x & 16 ? S & 16 ? ht(
      d,
      y,
      _,
      T,
      w,
      E,
      N,
      v,
      g
    ) : dt(d, w, E, !0) : (x & 8 && a(_, ""), S & 16 && P(
      y,
      _,
      T,
      w,
      E,
      N,
      v,
      g
    ));
  }, Ze = (u, m, _, T, w, E, N, v, g) => {
    u = u || zt, m = m || zt;
    const d = u.length, x = m.length, y = Math.min(d, x);
    let M;
    for (M = 0; M < y; M++) {
      const S = m[M] = g ? lt(m[M]) : qe(m[M]);
      O(
        u[M],
        S,
        _,
        null,
        w,
        E,
        N,
        v,
        g
      );
    }
    d > x ? dt(
      u,
      w,
      E,
      !0,
      !1,
      y
    ) : P(
      m,
      _,
      T,
      w,
      E,
      N,
      v,
      g,
      y
    );
  }, ht = (u, m, _, T, w, E, N, v, g) => {
    let d = 0;
    const x = m.length;
    let y = u.length - 1, M = x - 1;
    for (; d <= y && d <= M; ) {
      const S = u[d], A = m[d] = g ? lt(m[d]) : qe(m[d]);
      if (At(S, A))
        O(
          S,
          A,
          _,
          null,
          w,
          E,
          N,
          v,
          g
        );
      else
        break;
      d++;
    }
    for (; d <= y && d <= M; ) {
      const S = u[y], A = m[M] = g ? lt(m[M]) : qe(m[M]);
      if (At(S, A))
        O(
          S,
          A,
          _,
          null,
          w,
          E,
          N,
          v,
          g
        );
      else
        break;
      y--, M--;
    }
    if (d > y) {
      if (d <= M) {
        const S = M + 1, A = S < x ? m[S].el : T;
        for (; d <= M; )
          O(
            null,
            m[d] = g ? lt(m[d]) : qe(m[d]),
            _,
            A,
            w,
            E,
            N,
            v,
            g
          ), d++;
      }
    } else if (d > M)
      for (; d <= y; )
        be(u[d], w, E, !0), d++;
    else {
      const S = d, A = d, V = /* @__PURE__ */ new Map();
      for (d = A; d <= M; d++) {
        const ye = m[d] = g ? lt(m[d]) : qe(m[d]);
        ye.key != null && V.set(ye.key, d);
      }
      let z, D = 0;
      const J = M - A + 1;
      let te = !1, le = 0;
      const Ve = new Array(J);
      for (d = 0; d < J; d++)
        Ve[d] = 0;
      for (d = S; d <= y; d++) {
        const ye = u[d];
        if (D >= J) {
          be(ye, w, E, !0);
          continue;
        }
        let Ie;
        if (ye.key != null)
          Ie = V.get(ye.key);
        else
          for (z = A; z <= M; z++)
            if (Ve[z - A] === 0 && At(ye, m[z])) {
              Ie = z;
              break;
            }
        Ie === void 0 ? be(ye, w, E, !0) : (Ve[Ie - A] = d + 1, Ie >= le ? le = Ie : te = !0, O(
          ye,
          m[Ie],
          _,
          null,
          w,
          E,
          N,
          v,
          g
        ), D++);
      }
      const Nt = te ? tc(Ve) : zt;
      for (z = Nt.length - 1, d = J - 1; d >= 0; d--) {
        const ye = A + d, Ie = m[ye], Oe = m[ye + 1], Ys = ye + 1 < x ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Oe.el || eo(Oe)
        ) : T;
        Ve[d] === 0 ? O(
          null,
          Ie,
          _,
          Ys,
          w,
          E,
          N,
          v,
          g
        ) : te && (z < 0 || d !== Nt[z] ? et(Ie, _, Ys, 2) : z--);
      }
    }
  }, et = (u, m, _, T, w = null) => {
    const { el: E, type: N, transition: v, children: g, shapeFlag: d } = u;
    if (d & 6) {
      et(u.component.subTree, m, _, T);
      return;
    }
    if (d & 128) {
      u.suspense.move(m, _, T);
      return;
    }
    if (d & 64) {
      N.move(u, m, _, st);
      return;
    }
    if (N === Re) {
      s(E, m, _);
      for (let y = 0; y < g.length; y++)
        et(g[y], m, _, T);
      s(u.anchor, m, _);
      return;
    }
    if (N === as) {
      k(u, m, _);
      return;
    }
    if (T !== 2 && d & 1 && v)
      if (T === 0)
        v.persisted && !E[Ne] ? s(E, m, _) : (v.beforeEnter(E), s(E, m, _), Ae(() => v.enter(E), w));
      else {
        const { leave: y, delayLeave: M, afterLeave: S } = v, A = () => {
          u.ctx.isUnmounted ? i(E) : s(E, m, _);
        }, V = () => {
          const z = E._isLeaving || !!E[Ne];
          E._isLeaving && E[Ne](
            !0
            /* cancelled */
          ), v.persisted && !z ? A() : y(E, () => {
            A(), S && S();
          });
        };
        M ? M(E, A, V) : V();
      }
    else
      s(E, m, _);
  }, be = (u, m, _, T = !1, w = !1) => {
    const {
      type: E,
      props: N,
      ref: v,
      children: g,
      dynamicChildren: d,
      shapeFlag: x,
      patchFlag: y,
      dirs: M,
      cacheIndex: S,
      memo: A
    } = u;
    if (y === -2 && (w = !1), v != null && (Qe(), sn(v, null, _, u, !0), Xe()), S != null && (m.renderCache[S] = void 0), x & 256) {
      m.ctx.deactivate(u);
      return;
    }
    const V = x & 1 && M, z = !rn(u);
    let D;
    if (z && (D = N && N.onVnodeBeforeUnmount) && Ke(D, m, u), x & 6)
      xt(u.component, _, T);
    else {
      if (x & 128) {
        u.suspense.unmount(_, T);
        return;
      }
      V && Ct(u, null, m, "beforeUnmount"), x & 64 ? u.type.remove(
        u,
        m,
        _,
        st,
        T
      ) : d && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !d.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Re || y > 0 && y & 64) ? dt(
        d,
        m,
        _,
        !1,
        !0
      ) : (E === Re && y & 384 || !w && x & 16) && dt(g, m, _), T && tt(u);
    }
    const J = A != null && S == null;
    (z && (D = N && N.onVnodeUnmounted) || V || J) && Ae(() => {
      D && Ke(D, m, u), V && Ct(u, null, m, "unmounted"), J && (u.el = null);
    }, _);
  }, tt = (u) => {
    const { type: m, el: _, anchor: T, transition: w } = u;
    if (m === Re) {
      Xn(_, T);
      return;
    }
    if (m === as) {
      R(u);
      return;
    }
    const E = () => {
      i(_), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (u.shapeFlag & 1 && w && !w.persisted) {
      const { leave: N, delayLeave: v } = w, g = () => N(_, E);
      v ? v(u.el, E, g) : g();
    } else
      E();
  }, Xn = (u, m) => {
    let _;
    for (; u !== m; )
      _ = h(u), i(u), u = _;
    i(m);
  }, xt = (u, m, _) => {
    const { bum: T, scope: w, job: E, subTree: N, um: v, m: g, a: d } = u;
    fi(g), fi(d), T && es(T), w.stop(), E && (E.flags |= 8, be(N, u, m, _)), v && Ae(v, m), Ae(() => {
      u.isUnmounted = !0;
    }, m);
  }, dt = (u, m, _, T = !1, w = !1, E = 0) => {
    for (let N = E; N < u.length; N++)
      be(u[N], m, _, T, w);
  }, nt = (u) => {
    if (u.shapeFlag & 6)
      return nt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const m = h(u.anchor || u.el), _ = m && m[ml];
    return _ ? h(_) : m;
  };
  let pt = !1;
  const St = (u, m, _) => {
    let T;
    u == null ? m._vnode && (be(m._vnode, null, null, !0), T = m._vnode.component) : O(
      m._vnode || null,
      u,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = u, pt || (pt = !0, ti(T), Cr(), pt = !1);
  }, st = {
    p: O,
    um: be,
    m: et,
    r: tt,
    mt: fe,
    mc: P,
    pc: re,
    pbc: W,
    n: nt,
    o: e
  };
  let Vt, Kt;
  return t && ([Vt, Kt] = t(
    st
  )), {
    render: St,
    hydrate: Vt,
    createApp: Dl(St, Vt)
  };
}
function cs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ec(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (U(s) && U(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = lt(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Xr(o, l)), l.type === Yn && (l.patchFlag === -1 && (l = i[r] = lt(l)), l.el = o.el), l.type === we && !l.el && (l.el = o.el);
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
function fi(e) {
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
  t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : ul(e);
}
const Re = /* @__PURE__ */ Symbol.for("v-fgt"), Yn = /* @__PURE__ */ Symbol.for("v-txt"), we = /* @__PURE__ */ Symbol.for("v-cmt"), as = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let $e = null;
function ue(e = !1) {
  ln.push($e = e ? null : []);
}
function sc() {
  ln.pop(), $e = ln[ln.length - 1] || null;
}
let dn = 1;
function $n(e, t = !1) {
  dn += e, e < 0 && $e && t && ($e.hasOnce = !0);
}
function no(e) {
  return e.dynamicChildren = dn > 0 ? $e || zt : null, sc(), dn > 0 && $e && $e.push(e), e;
}
function he(e, t, n, s, i, r) {
  return no(
    G(
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
    Te(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  return e.type === t.type && e.key === t.key;
}
const so = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || /* @__PURE__ */ ge(e) || X(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function G(e, t = null, n = null, s = 0, i = null, r = e === Re ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && so(t),
    ref: t && En(t),
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
    ctx: Ge
  };
  return l ? (Pn(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= de(n) ? 8 : 16), dn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && $e.push(c), c;
}
const Te = rc;
function rc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Ol) && (e = we), Fn(e)) {
    const l = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pn(l, n), dn > 0 && !r && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (gc(e) && (e = e.__vccOpts), t) {
    t = oc(t);
    let { class: l, style: c } = t;
    l && !de(l) && (t.class = Ot(l)), ie(c) && (/* @__PURE__ */ Vn(c) && !U(c) && (c = me({}, c)), t.style = _t(c));
  }
  const o = de(e) ? 1 : to(e) ? 128 : Ar(e) ? 64 : ie(e) ? 4 : X(e) ? 2 : 0;
  return G(
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
  return e ? /* @__PURE__ */ Vn(e) || Ur(e) ? me({}, e) : e : null;
}
function bt(e, t, n = !1, s = !1) {
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
      n && r ? U(r) ? r.concat(En(t)) : [r, En(t)] : En(t)
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
    ssContent: e.ssContent && bt(e.ssContent),
    ssFallback: e.ssFallback && bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && hn(
    a,
    c.clone(a)
  ), a;
}
function io(e = " ", t = 0) {
  return Te(Yn, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (ue(), ic(we, null, e)) : Te(we, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? Te(we) : U(e) ? Te(
    Re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Fn(e) ? lt(e) : Te(Yn, null, String(e));
}
function lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
}
function Pn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (U(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Pn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ur(t) ? t._ctx = Ge : i === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (X(t)) {
    if (s & 65) {
      Pn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
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
        t.class !== s.class && (t.class = Ot([t.class, s.class]));
      else if (i === "style")
        t.style = _t([t.style, s.style]);
      else if (kn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(U(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dn(i) && (t[i] = o);
      } else
        i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ke(e, t, n, s = null) {
  De(e, t, 7, [
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
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
let Ee = null;
const Us = () => Ee || Ge;
let Nn, Es;
{
  const e = Bn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Nn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ee = n
  ), Es = t(
    "__VUE_SSR_SETTERS__",
    (n) => pn = n
  );
}
const yn = (e) => {
  const t = Ee;
  return Nn(e), e.scope.on(), () => {
    e.scope.off(), Nn(t);
  };
}, hi = () => {
  Ee && Ee.scope.off(), Nn(null);
};
function ro(e) {
  return e.vnode.shapeFlag & 4;
}
let pn = !1;
function fc(e, t = !1, n = !1) {
  t && Es(t);
  const { props: s, children: i } = e.vnode, r = ro(e);
  Ul(e, s, r, t), Gl(e, i, n || t);
  const o = r ? hc(e, t) : void 0;
  return t && Es(!1), o;
}
function hc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ll);
  const { setup: s } = n;
  if (s) {
    Qe();
    const i = e.setupContext = s.length > 1 ? pc(e) : null, r = yn(e), o = vn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ji(o);
    if (Xe(), r(), (l || e.sp) && !rn(e) && Rr(e), l) {
      if (o.then(hi, hi), t)
        return o.then((c) => {
          di(e, c, t);
        }).catch((c) => {
          Kn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      di(e, o, t);
  } else
    oo(e, t);
}
function di(e, t, n) {
  X(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ie(t) && (e.setupState = br(t)), oo(e, n);
}
let pi;
function oo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && pi && !s.render) {
      const i = s.template || Ws(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: c } = s, f = me(
          me(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          c
        );
        s.render = pi(i, f);
      }
    }
    e.render = s.render || ze;
  }
  {
    const i = yn(e);
    Qe();
    try {
      $l(e);
    } finally {
      Xe(), i();
    }
  }
}
const dc = {
  get(e, t) {
    return xe(e, "get", ""), e[t];
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
function Js(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(br(js(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in on)
        return on[n](e);
    },
    has(t, n) {
      return n in t || n in on;
    }
  })) : e.proxy;
}
function gc(e) {
  return X(e) && "__vccOpts" in e;
}
const Le = (e, t) => /* @__PURE__ */ rl(e, t, pn);
function mc(e, t, n) {
  try {
    $n(-1);
    const s = arguments.length;
    return s === 2 ? ie(t) && !U(t) ? Fn(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Fn(n) && (n = [n]), Te(e, t, n));
  } finally {
    $n(1);
  }
}
const vc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ts;
const gi = typeof window < "u" && window.trustedTypes;
if (gi)
  try {
    Ts = /* @__PURE__ */ gi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lo = Ts ? (e) => Ts.createHTML(e) : (e) => e, yc = "http://www.w3.org/2000/svg", _c = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, mi = ot && /* @__PURE__ */ ot.createElement("template"), bc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? ot.createElementNS(yc, e) : t === "mathml" ? ot.createElementNS(_c, e) : n ? ot.createElement(e, { is: n }) : ot.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
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
      mi.innerHTML = lo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = mi.content;
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
}, gt = "transition", qt = "animation", gn = /* @__PURE__ */ Symbol("_vtc"), co = {
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
}, xc = /* @__PURE__ */ me(
  {},
  Or,
  co
), Sc = (e) => (e.displayName = "Transition", e.props = xc, e), Cc = /* @__PURE__ */ Sc(
  (e, { slots: t }) => mc(_l, wc(e), t)
), Et = (e, t = []) => {
  U(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, vi = (e) => e ? U(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function wc(e) {
  const t = {};
  for (const F in e)
    F in co || (t[F] = e[F]);
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
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, C = Ec(i), O = C && C[0], j = C && C[1], {
    onBeforeEnter: B,
    onEnter: H,
    onEnterCancelled: k,
    onLeave: R,
    onLeaveCancelled: L,
    onBeforeAppear: K = B,
    onAppear: Y = H,
    onAppearCancelled: P = k
  } = t, I = (F, Q, fe, Me) => {
    F._enterCancelled = Me, Tt(F, Q ? a : l), Tt(F, Q ? f : o), fe && fe();
  }, W = (F, Q) => {
    F._isLeaving = !1, Tt(F, p), Tt(F, b), Tt(F, h), Q && Q();
  }, q = (F) => (Q, fe) => {
    const Me = F ? Y : H, oe = () => I(Q, F, fe);
    Et(Me, [Q, oe]), yi(() => {
      Tt(Q, F ? c : r), rt(Q, F ? a : l), vi(Me) || _i(Q, s, O, oe);
    });
  };
  return me(t, {
    onBeforeEnter(F) {
      Et(B, [F]), rt(F, r), rt(F, o);
    },
    onBeforeAppear(F) {
      Et(K, [F]), rt(F, c), rt(F, f);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(F, Q) {
      F._isLeaving = !0;
      const fe = () => W(F, Q);
      rt(F, p), F._enterCancelled ? (rt(F, h), Si(F)) : (Si(F), rt(F, h)), yi(() => {
        F._isLeaving && (Tt(F, p), rt(F, b), vi(R) || _i(F, s, j, fe));
      }), Et(R, [F, fe]);
    },
    onEnterCancelled(F) {
      I(F, !1, void 0, !0), Et(k, [F]);
    },
    onAppearCancelled(F) {
      I(F, !0, void 0, !0), Et(P, [F]);
    },
    onLeaveCancelled(F) {
      W(F), Et(L, [F]);
    }
  });
}
function Ec(e) {
  if (e == null)
    return null;
  if (ie(e))
    return [us(e.enter), us(e.leave)];
  {
    const t = us(e);
    return [t, t];
  }
}
function us(e) {
  return To(e);
}
function rt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[gn] || (e[gn] = /* @__PURE__ */ new Set())).add(t);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[gn];
  n && (n.delete(t), n.size || (e[gn] = void 0));
}
function yi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tc = 0;
function _i(e, t, n, s) {
  const i = e._endId = ++Tc, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = Mc(e, t);
  if (!o)
    return s();
  const f = o + "end";
  let a = 0;
  const p = () => {
    e.removeEventListener(f, h), r();
  }, h = (b) => {
    b.target === e && ++a >= c && p();
  };
  setTimeout(() => {
    a < c && p();
  }, l + 1), e.addEventListener(f, h);
}
function Mc(e, t) {
  const n = window.getComputedStyle(e), s = (C) => (n[C] || "").split(", "), i = s(`${gt}Delay`), r = s(`${gt}Duration`), o = bi(i, r), l = s(`${qt}Delay`), c = s(`${qt}Duration`), f = bi(l, c);
  let a = null, p = 0, h = 0;
  t === gt ? o > 0 && (a = gt, p = o, h = r.length) : t === qt ? f > 0 && (a = qt, p = f, h = c.length) : (p = Math.max(o, f), a = p > 0 ? o > f ? gt : qt : null, h = a ? a === gt ? r.length : c.length : 0);
  const b = a === gt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${gt}Property`).toString()
  );
  return {
    type: a,
    timeout: p,
    propCount: h,
    hasTransform: b
  };
}
function bi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => xi(n) + xi(e[s])));
}
function xi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Si(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ic(e, t, n) {
  const s = e[gn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ci = /* @__PURE__ */ Symbol("_vod"), Ac = /* @__PURE__ */ Symbol("_vsh"), Oc = /* @__PURE__ */ Symbol(""), Lc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const s = e.style, i = de(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (de(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Qt(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Qt(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? Pc(
        e,
        o,
        !de(t) && t ? t[o] : void 0,
        l
      ) || Qt(s, o, l) : Qt(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Oc];
      o && (n += ";" + o), s.cssText = n, r = Lc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ci in e && (e[Ci] = r ? s.display : "", e[Ac] && (s.display = "none"));
}
const wi = /\s*!important$/;
function Qt(e, t, n) {
  if (U(n))
    n.forEach((s) => Qt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fc(e, t);
    wi.test(n) ? e.setProperty(
      Pt(s),
      n.replace(wi, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ei = ["Webkit", "Moz", "ms"], fs = {};
function Fc(e, t) {
  const n = fs[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return fs[t] = s;
  s = Gi(s);
  for (let i = 0; i < Ei.length; i++) {
    const r = Ei[i] + s;
    if (r in e)
      return fs[t] = r;
  }
  return t;
}
function Pc(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && de(s) && n === s;
}
const Ti = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, s, i, r = $o(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ti, t.slice(6, t.length)) : e.setAttributeNS(Ti, t, n) : n == null || r && !Xi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ke(n) ? String(n) : n
  );
}
function Ii(e, t, n, s, i) {
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
function Rc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ai = /* @__PURE__ */ Symbol("_vei");
function kc(e, t, n, s, i = null) {
  const r = e[Ai] || (e[Ai] = {}), o = r[t];
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
      o && (Rc(e, l, o, c), r[t] = void 0);
  }
}
const Dc = /(Once|Passive|Capture)$/, jc = /^on:?(?:Once|Passive|Capture)$/;
function zc(e) {
  let t, n;
  for (; (n = e.match(Dc)) && !jc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let hs = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), Hc = () => hs || (Bc.then(() => hs = 0), hs = Date.now());
function Wc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (U(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let c = 0; c < o.length && !s._stopped; c++) {
        const f = o[c];
        f && De(
          f,
          t,
          5,
          l
        );
      }
    } else
      De(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Hc(), n;
}
const Oi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vc = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Ic(e, s, o) : t === "style" ? $c(e, n, s) : kn(t) ? Dn(t) || kc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, s, o)) ? (Ii(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mi(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Uc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !de(s))) ? Ii(e, Be(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Mi(e, t, s, o));
};
function Kc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Oi(t) && X(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Oi(t) && de(n) ? !1 : t in e;
}
function Uc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Be(t);
  return Array.isArray(n) ? n.some((i) => Be(i) === s) : Object.keys(n).some((i) => Be(i) === s);
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
}, It = (e, t) => {
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
}, Yc = /* @__PURE__ */ me({ patchProp: Vc }, bc);
let Li;
function Gc() {
  return Li || (Li = Xl(Yc));
}
const Qc = (...e) => {
  const t = Gc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Zc(s);
    if (!i)
      return;
    const r = t._component;
    !X(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return de(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ao;
const Gn = (e) => ao = e, uo = (
  /* istanbul ignore next */
  Symbol()
);
function Ms(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var cn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(cn || (cn = {}));
function ea() {
  const e = nr(!0), t = e.run(() => /* @__PURE__ */ pe({}));
  let n = [], s = [];
  const i = js({
    install(r) {
      Gn(i), i._a = r, r.provide(uo, i), r.config.globalProperties.$pinia = i, s.forEach((o) => n.push(o)), s = [];
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
function $i(e, t, n, s = fo) {
  e.add(t);
  const i = () => {
    e.delete(t) && s();
  };
  return !n && sr() && ir(i), i;
}
function kt(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const ta = (e) => e(), Fi = Symbol(), ds = Symbol();
function Is(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], i = e[n];
    Ms(i) && Ms(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ge(s) && !/* @__PURE__ */ at(s) ? e[n] = Is(i, s) : e[n] = s;
  }
  return e;
}
const na = (
  /* istanbul ignore next */
  Symbol()
);
function sa(e) {
  return !Ms(e) || !Object.prototype.hasOwnProperty.call(e, na);
}
const { assign: mt } = Object;
function ia(e) {
  return !!(/* @__PURE__ */ ge(e) && e.effect);
}
function ra(e, t, n, s) {
  const { state: i, actions: r, getters: o } = t, l = n.state.value[e];
  let c;
  function f() {
    l || (n.state.value[e] = i ? i() : {});
    const a = /* @__PURE__ */ tl(n.state.value[e]);
    return mt(a, r, Object.keys(o || {}).reduce((p, h) => (p[h] = js(Le(() => {
      Gn(n);
      const b = n._s.get(e);
      return o[h].call(b, b);
    })), p), {}));
  }
  return c = ho(e, f, t, n, s, !0), c;
}
function ho(e, t, n = {}, s, i, r) {
  let o;
  const l = mt({ actions: {} }, n), c = { deep: !0 };
  let f, a, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), b;
  const C = s.state.value[e];
  !r && !C && (s.state.value[e] = {});
  let O;
  function j(P) {
    let I;
    f = a = !1, typeof P == "function" ? (P(s.state.value[e]), I = {
      type: cn.patchFunction,
      storeId: e,
      events: b
    }) : (Is(s.state.value[e], P), I = {
      type: cn.patchObject,
      payload: P,
      storeId: e,
      events: b
    });
    const W = O = Symbol();
    tn().then(() => {
      O === W && (f = !0);
    }), a = !0, kt(p, I, s.state.value[e]);
  }
  const B = r ? function() {
    const { state: I } = n, W = I ? I() : {};
    this.$patch((q) => {
      mt(q, W);
    });
  } : (
    /* istanbul ignore next */
    fo
  );
  function H() {
    o.stop(), p.clear(), h.clear(), s._s.delete(e);
  }
  const k = (P, I = "") => {
    if (Fi in P)
      return P[ds] = I, P;
    const W = function() {
      Gn(s);
      const q = Array.from(arguments), F = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
      function fe(ee) {
        F.add(ee);
      }
      function Me(ee) {
        Q.add(ee);
      }
      kt(h, {
        args: q,
        name: W[ds],
        store: L,
        after: fe,
        onError: Me
      });
      let oe;
      try {
        oe = P.apply(this && this.$id === e ? this : L, q);
      } catch (ee) {
        throw kt(Q, ee), ee;
      }
      return oe instanceof Promise ? oe.then((ee) => (kt(F, ee), ee)).catch((ee) => (kt(Q, ee), Promise.reject(ee))) : (kt(F, oe), oe);
    };
    return W[Fi] = !0, W[ds] = I, W;
  }, R = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: $i.bind(null, h),
    $patch: j,
    $reset: B,
    $subscribe(P, I = {}) {
      const W = $i(p, P, I.detached, () => q()), q = o.run(() => $t(() => s.state.value[e], (F) => {
        (I.flush === "sync" ? a : f) && P({
          storeId: e,
          type: cn.direct,
          events: b
        }, F);
      }, mt({}, c, I)));
      return W;
    },
    $dispose: H
  }, L = /* @__PURE__ */ Wn(R);
  s._s.set(e, L);
  const Y = (s._a && s._a.runWithContext || ta)(() => s._e.run(() => (o = nr()).run(() => t({ action: k }))));
  for (const P in Y) {
    const I = Y[P];
    if (/* @__PURE__ */ ge(I) && !ia(I) || /* @__PURE__ */ at(I))
      r || (C && sa(I) && (/* @__PURE__ */ ge(I) ? I.value = C[P] : Is(I, C[P])), s.state.value[e][P] = I);
    else if (typeof I == "function") {
      const W = k(I, P);
      Y[P] = W, l.actions[P] = I;
    }
  }
  return mt(L, Y), mt(/* @__PURE__ */ ne(L), Y), Object.defineProperty(L, "$state", {
    get: () => s.state.value[e],
    set: (P) => {
      j((I) => {
        mt(I, P);
      });
    }
  }), s._p.forEach((P) => {
    mt(L, o.run(() => P({
      store: L,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), C && r && n.hydrate && n.hydrate(L.$state, C), f = !0, a = !0, L;
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
    o || (c ? nn(uo, null) : null), o && Gn(o), o = ao, o._s.has(e) || (i ? ho(e, t, s, o) : ra(e, s, o)), o._s.get(e);
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
function qs(e, t, n) {
  if (n.length === 0)
    return t;
  const s = n[0];
  return n.length > 1 && (t = qs(typeof e != "object" || e === null || !Object.prototype.hasOwnProperty.call(e, s) ? Number.isInteger(Number(n[1])) ? [] : {} : e[s], t, Array.prototype.slice.call(n, 1))), Number.isInteger(Number(s)) && Array.isArray(e) ? e.slice()[s] : Object.assign({}, e, { [s]: t });
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
  return qs(e, po(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function go(e, t) {
  return t.map((n) => n.split(".")).map((n) => [n, la(e, n)]).filter((n) => n[1] !== void 0).reduce((n, s) => qs(n, s[1], s[0]), {});
}
function mo(e, t) {
  return t.map((n) => n.split(".")).reduce((n, s) => po(n, s), e);
}
function Pi(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o, beforeHydrate: l, afterHydrate: c }, f, a = !0) {
  try {
    a && (l == null || l(f));
    const p = t.getItem(s);
    if (p) {
      const h = n.deserialize(p), b = r ? go(h, r) : h, C = o ? mo(b, o) : b;
      e.$patch(C);
    }
    a && (c == null || c(f));
  } catch (p) {
    i && console.error("[pinia-plugin-persistedstate]", p);
  }
}
function Ni(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o }) {
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
      Pi(i, c, e, l);
    });
  }, i.$persist = () => {
    o.forEach((l) => {
      Ni(i.$state, l);
    });
  }, o.forEach((l) => {
    Pi(i, l, e), i.$subscribe((c, f) => Ni(f, l), { detached: !0 });
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
function Sn(e) {
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
          (Array.isArray(c) ? c.map((a) => [a, a]) : Object.entries(c || {})).forEach(([a, p]) => {
            const h = typeof p == "string" ? p : p.file_name || a;
            if (!h)
              return;
            let b = 0;
            if (typeof p == "object" && (b = Sn(p.last_mes) || Sn(p.create_date) || Sn(p.date) || 0), !b && typeof h == "string") {
              const C = h.match(/(\d{4}-\d{2}-\d{2})@(\d{2})h(\d{2})m/);
              C && (b = Sn(`${C[1]}T${C[2]}:${C[3]}:00`));
            }
            o.push({
              id: h,
              title: typeof p == "object" && p.name ? p.name : h.replace(/\.jsonl?$/, ""),
              charName: l.name,
              avatarUrl: l.avatar,
              msgCount: p.mes_count ?? 0,
              lastActive: b || 1
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
async function As(e, t, n) {
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
async function Ri(e, t, n) {
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
let ps = [];
const vo = /* @__PURE__ */ oa("chatLogManager", () => {
  const e = /* @__PURE__ */ pe([]), t = /* @__PURE__ */ pe(null), n = /* @__PURE__ */ pe([]), s = /* @__PURE__ */ pe(/* @__PURE__ */ new Set()), i = /* @__PURE__ */ pe(""), r = /* @__PURE__ */ pe([]), o = /* @__PURE__ */ pe(!1), l = /* @__PURE__ */ pe(!1), c = /* @__PURE__ */ pe(!1), f = /* @__PURE__ */ pe(!1), a = /* @__PURE__ */ pe([]), p = Le(() => {
    if (i.value.trim())
      return r.value.map((P) => ({
        type: "chat",
        id: P.id,
        charName: P.charName,
        chat: e.value.find((I) => I.id === P.chatId),
        searchHit: { content: P.content }
      }));
    const L = [], K = /* @__PURE__ */ new Map();
    e.value.forEach((P) => {
      const I = P.charName || "未知角色";
      K.has(I) || K.set(I, { avatarUrl: P.avatarUrl, chats: [], folderTime: 0 });
      const W = K.get(I);
      W.chats.push(P), P.lastActive > W.folderTime && (W.folderTime = P.lastActive);
    });
    const Y = Array.from(K.entries()).sort((P, I) => I[1].folderTime - P[1].folderTime);
    for (const [P, I] of Y)
      L.push({ type: "header", id: `header_${P}`, charName: P, avatarUrl: I.avatarUrl, chatCount: I.chats.length }), s.value.has(P) && [...I.chats].sort((q, F) => F.lastActive - q.lastActive).forEach((q) => {
        L.push({ type: "chat", id: `chat_${q.id}`, charName: P, chat: q });
      });
    return L;
  }), h = Le(() => e.value.length === 0 ? !1 : i.value.trim() && r.value.length > 0 ? r.value.every((L) => a.value.includes(L.chatId)) : a.value.length === e.value.length);
  async function b() {
    if (!o.value) {
      o.value = !0;
      try {
        e.value = [], await ha((L) => {
          e.value.push(...L);
        }), C();
      } finally {
        o.value = !1;
      }
    }
  }
  async function C() {
    if (l.value)
      return;
    l.value = !0, ps = [];
    const L = 5, K = e.value;
    for (let Y = 0; Y < K.length; Y += L) {
      const P = K.slice(Y, Y + L);
      await Promise.all(P.map(async (I) => {
        const W = await As(I.charName, I.avatarUrl, I.id);
        if (I.msgCount === 0 && W.length > 0 && (I.msgCount = W.length), W.length > 0) {
          const q = W[W.length - 1], F = q.send_date || q.date || q.time;
          if (F) {
            const Q = typeof F == "number" ? F : new Date(F).getTime();
            !isNaN(Q) && Q > 0 && (I.lastActive = Q);
          }
        }
        ps.push(...W.map((q, F) => ({
          id: `${I.id}_${F}`,
          chatId: I.id,
          charName: I.charName,
          content: q.mes || ""
        })));
      })), await new Promise((I) => setTimeout(I, 10));
    }
    l.value = !1;
  }
  function O(L) {
    i.value = L;
    const K = L.trim().toLowerCase();
    r.value = K ? ps.filter((Y) => Y.content.toLowerCase().includes(K)) : [];
  }
  async function j(L) {
    if (c.value || L.id === t.value)
      return;
    c.value = !0;
    const K = n.value;
    try {
      const Y = await As(L.charName, L.avatarUrl, L.id);
      Array.isArray(Y) ? n.value = Y : K && K.length ? (n.value = K, alert("加载消息失败，已保留原有消息")) : n.value = [];
    } catch (Y) {
      console.error("[ChatLogManager] Load messages error:", Y), K && K.length ? (n.value = K, alert("加载消息异常，已保留原有消息")) : n.value = [];
    } finally {
      c.value = !1, t.value = L.id;
    }
  }
  function B(L) {
    s.value.has(L) ? s.value.delete(L) : s.value.add(L);
  }
  function H() {
    f.value = !f.value, f.value || (a.value = []);
  }
  function k(L) {
    const K = a.value.indexOf(L);
    K > -1 ? a.value.splice(K, 1) : a.value.push(L);
  }
  function R() {
    if (h.value)
      a.value = [];
    else if (i.value.trim()) {
      const L = r.value.map((K) => K.chatId);
      a.value = Array.from(/* @__PURE__ */ new Set([...a.value, ...L]));
    } else
      a.value = e.value.map((L) => L.id);
  }
  return {
    allChats: e,
    displayRows: p,
    currentChatId: t,
    currentMessages: n,
    expandedChars: s,
    searchQuery: i,
    isIndexing: l,
    isBatchMode: f,
    selectedChatIds: a,
    isAllSelected: h,
    loadingMessages: c,
    fetchChats: b,
    loadMessages: j,
    toggleChar: B,
    performSearch: O,
    toggleBatchMode: H,
    toggleSelection: k,
    toggleSelectAll: R
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
function Dt(e, t, n) {
  let s = n.initialDeps ?? [], i, r = !0;
  function o() {
    const l = e();
    return (l.length !== s.length || l.some((f, a) => s[a] !== f)) && (s = l, i = t(...l), n != null && n.onChange && !(r && n.skipInitialOnChange) && n.onChange(i), r = !1), i;
  }
  return o.updateDeps = (l) => {
    s = l;
  }, o;
}
function ki(e, t) {
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
let Yt;
const gs = () => {
  if (Yt !== void 0)
    return Yt;
  if (typeof navigator > "u")
    return Yt = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent))
    return Yt = !0;
  const e = navigator.maxTouchPoints;
  return Yt = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Di = (e) => {
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
  if (i(Di(n)), !s.ResizeObserver)
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
      i(Di(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return r.observe(n, { box: "border-box" }), () => {
    r.unobserve(n);
  };
}, Rn = {
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
  ), c = (p) => () => {
    o = n(s), l == null || l(), t(o, p);
  }, f = c(!0), a = c(!1);
  return s.addEventListener("scroll", f, Rn), r && s.addEventListener("scrollend", a, Rn), () => {
    s.removeEventListener("scroll", f), r && s.removeEventListener("scrollend", a);
  };
}, Sa = (e, t) => xa(e, t, (n) => {
  const { horizontal: s, isRtl: i } = e.options;
  return s ? n.scrollLeft * (i && -1 || 1) : n.scrollTop;
}), Ca = (e, t, n) => {
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
}, wa = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var i, r;
  (r = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null || r.call(i, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, Ea = wa;
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
        measureElement: Ca,
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
        const b = n[h];
        b !== void 0 && (r[h] = b);
      }
      const o = this.options;
      let l = null, c = null, f = !1;
      if (o !== void 0 && o.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const h = o.count, b = r.count, C = this.getMeasurements(), O = h > 0 ? ((s = C[0]) == null ? void 0 : s.key) ?? o.getItemKey(0) : null, j = h > 0 ? ((i = C[h - 1]) == null ? void 0 : i.key) ?? o.getItemKey(h - 1) : null;
        if (b !== h || h > 0 && b > 0 && (r.getItemKey(0) !== O || r.getItemKey(b - 1) !== j)) {
          f = !0;
          const k = h > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? C[0] : null;
          k && (l = [k.key, this.getScrollOffset() - k.start]);
          const R = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          R && b > h && this.isAtEnd(o.scrollEndThreshold) && (h === 0 || r.getItemKey(b - 1) !== j) && (c = R);
        }
      }
      this.options = r, f && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, p = 0;
      if (l && this.scrollOffset !== null) {
        const [h, b] = l, C = this.getMeasurements(), { count: O, getItemKey: j } = this.options;
        let B = 0;
        for (; B < O && j(B) !== h; )
          B++;
        if (B < O) {
          const H = C[B];
          if (H) {
            const k = H.start + b;
            k !== this.scrollOffset && (p = k - this.scrollOffset, this.scrollOffset = k, a = !0);
          }
        }
      }
      (a || c) && (this.pendingScrollAnchor = [
        a ? l[0] : null,
        a ? l[1] : 0,
        c,
        p
      ]);
    }, this.notify = (n) => {
      var s, i;
      (i = (s = this.options).onChange) == null || i.call(s, this, n);
    }, this.maybeNotify = Dt(
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
            this._iosTouching = !1, !(!gs() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            o,
            Rn
          ), r.addEventListener(
            "touchend",
            l,
            Rn
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
        r !== null && !l && (gs() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? c !== 0 && (this._iosDeferredAdjustment += c) : this._scrollToOffset(this.getScrollOffset(), {
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
    }, this.getMeasurementOptions = Dt(
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
    ), this.getMeasurements = Dt(
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
          for (const C of this.laneAssignments.keys())
            C >= n && this.laneAssignments.delete(C);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((C) => {
          this.itemSizeCache.set(C.key, C.size);
        }));
        const p = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), l === 1) {
          const C = this.options.gap, O = n * 2;
          let j = this._flatMeasurements;
          if (!j || j.length < O) {
            const k = new Float64Array(O);
            j && p > 0 && k.set(j.subarray(0, p * 2)), j = k, this._flatMeasurements = j;
          }
          let B;
          if (p === 0)
            B = s + i;
          else {
            const k = p - 1;
            B = j[k * 2] + j[k * 2 + 1] + C;
          }
          for (let k = p; k < n; k++) {
            const R = r(k), L = a.get(R), K = typeof L == "number" ? L : this.options.estimateSize(k);
            j[k * 2] = B, j[k * 2 + 1] = K, B += K + C;
          }
          const H = pa(n, j, r);
          return this.measurementsCache = H, H;
        }
        const h = this.measurementsCache.slice(0, p), b = new Array(l).fill(
          void 0
        );
        for (let C = 0; C < p; C++) {
          const O = h[C];
          O && (b[O.lane] = C);
        }
        for (let C = p; C < n; C++) {
          const O = r(C), j = this.laneAssignments.get(C);
          let B, H;
          const k = c === "estimate" || a.has(O);
          if (j !== void 0 && this.options.lanes > 1) {
            B = j;
            const Y = b[B], P = Y !== void 0 ? h[Y] : void 0;
            H = P ? P.end + this.options.gap : s + i;
          } else {
            const Y = this.options.lanes === 1 ? h[C - 1] : this.getFurthestMeasurement(h, C);
            H = Y ? Y.end + this.options.gap : s + i, B = Y ? Y.lane : C % this.options.lanes, this.options.lanes > 1 && k && this.laneAssignments.set(C, B);
          }
          const R = a.get(O), L = typeof R == "number" ? R : this.options.estimateSize(C), K = H + L;
          h[C] = {
            index: C,
            start: H,
            size: L,
            end: K,
            key: O,
            lane: B
          }, b[B] = C;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Dt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, s, i, r) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = Ia(
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
    ), this.getVirtualIndexes = Dt(
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
      const a = this.itemSizeCache.get(c) ?? o, p = s - a;
      if (p !== 0) {
        const h = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = h ? this.getTotalSize() : 0, C = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
          p,
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
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(c, s), this.itemSizeCacheVersion++, h ? this.applyScrollAdjustment(this.getTotalSize() - b) : C && this.applyScrollAdjustment(p), this.notify(!1);
      }
    }, this.getVirtualItems = Dt(
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
        r ? (l) => i[l * 2] : (l) => ki(s[l]).start,
        n
      );
      return ki(s[o]);
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
    t !== 0 && (gs() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += t : (this._scrollToOffset(this.getScrollOffset(), {
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
function Ma(e, t, n) {
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
function Ia(e, t, n, s, i) {
  const r = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: r };
  if (s === 1 && i !== null) {
    const f = Ma(
      i,
      r,
      n
    );
    let a = f;
    const p = n + t;
    for (; a < r && i[a * 2] + i[a * 2 + 1] < p; )
      a++;
    return { startIndex: f, endIndex: a };
  }
  let l = yo(0, r, (f) => e[f].start, n), c = l;
  if (s === 1)
    for (; c < r && e[c].end < n + t; )
      c++;
  else if (s > 1) {
    const f = Array(s).fill(0);
    for (; c < r && f.some((p) => p < n + t); ) {
      const p = e[c];
      f[p.lane] = p.end, c++;
    }
    const a = Array(s).fill(n + t);
    for (; l >= 0 && a.some((p) => p >= n); ) {
      const p = e[l];
      a[p.lane] = p.start, l--;
    }
    l = Math.max(0, l - l % s), c = Math.min(r, c + (s - 1 - c % s));
  }
  return { startIndex: l, endIndex: c };
}
function Aa(e) {
  const t = new Ta(Z(e)), n = /* @__PURE__ */ wn(t), s = t._didMount();
  return $t(
    () => Z(e).getScrollElement(),
    (i) => {
      i && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), $t(
    () => Z(e),
    (i) => {
      t.setOptions({
        ...i,
        onChange: (r, o) => {
          var l;
          ei(n), (l = i.onChange) == null || l.call(i, r, o);
        }
      }), t._willUpdate(), ei(n);
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
      ...Z(e)
    }))
  );
}
const La = ["data-index"], $a = ["onClick"], Fa = { class: "char-info" }, Pa = { class: "folder-icon" }, Na = { class: "char-name" }, Ra = { class: "chat-badge" }, ka = ["onClick"], Da = ["checked", "onClick"], ja = { class: "chat-item-content" }, za = { class: "chat-title" }, Ba = {
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
    const t = vo(), n = /* @__PURE__ */ pe(null), s = Le(() => t.displayRows), i = Le(() => ({
      count: s.value.length,
      getScrollElement: () => n.value,
      estimateSize: () => 60,
      overscan: 10
    })), r = Oa(i), o = Le(() => r.value.getVirtualItems()), l = () => r.value.getTotalSize(), c = (a) => s.value[a], f = (a) => {
      const p = c(a);
      p.type === "chat" && p.chat && (t.isBatchMode ? t.toggleSelection(p.chat.id) : t.loadMessages(p.chat));
    };
    return (a, p) => (ue(), he("div", {
      ref_key: "containerRef",
      ref: n,
      class: "virtual-list-container"
    }, [
      G("div", {
        style: _t({ height: l() + "px", position: "relative", width: "100%" })
      }, [
        (ue(!0), he(Re, null, jr(o.value, (h) => {
          var b, C, O, j, B, H;
          return ue(), he("div", {
            key: h.index,
            class: "virtual-row",
            style: _t({ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${h.start}px)` }),
            ref_for: !0,
            ref: Z(r).measureElement,
            "data-index": h.index
          }, [
            c(h.index).type === "header" ? (ue(), he("div", {
              key: 0,
              class: "char-header",
              onClick: (k) => Z(t).toggleChar(c(h.index).charName)
            }, [
              G("div", Fa, [
                G("span", Pa, _e(Z(t).expandedChars.has(c(h.index).charName) ? "📂" : "📁"), 1),
                G("span", Na, _e(c(h.index).charName), 1)
              ]),
              G("span", Ra, _e(c(h.index).chatCount), 1)
            ], 8, $a)) : (ue(), he("div", {
              key: 1,
              class: Ot(["chat-item", {
                active: !Z(t).isBatchMode && Z(t).currentChatId === ((b = c(h.index).chat) == null ? void 0 : b.id),
                selected: Z(t).isBatchMode && Z(t).selectedChatIds.includes(((C = c(h.index).chat) == null ? void 0 : C.id) || "")
              }]),
              onClick: (k) => f(h.index)
            }, [
              Z(t).isBatchMode ? (ue(), he("input", {
                key: 0,
                type: "checkbox",
                class: "batch-checkbox",
                checked: Z(t).selectedChatIds.includes(((O = c(h.index).chat) == null ? void 0 : O.id) || ""),
                onClick: It((k) => f(h.index), ["stop"])
              }, null, 8, Da)) : je("", !0),
              G("div", ja, [
                G("div", za, [
                  Z(t).searchQuery ? (ue(), he("span", Ba, "[" + _e(c(h.index).charName) + "]", 1)) : je("", !0),
                  io(" " + _e(((j = c(h.index).chat) == null ? void 0 : j.title) || "未命名会话"), 1)
                ]),
                Z(t).searchQuery ? (ue(), he("div", Ha, '"' + _e((B = c(h.index).searchHit) == null ? void 0 : B.content) + '"', 1)) : (ue(), he("div", Wa, "消息数: " + _e(((H = c(h.index).chat) == null ? void 0 : H.msgCount) ?? "..."), 1))
              ])
            ], 10, ka))
          ], 12, La);
        }), 128))
      ], 4),
      s.value.length === 0 ? (ue(), he("div", Va, "暂无匹配记录")) : je("", !0)
    ], 512));
  }
});
const _o = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Ua = /* @__PURE__ */ _o(Ka, [["__scopeId", "data-v-82b53ab7"]]);
function Qn(e, t, n) {
  const s = new Blob([t], { type: n }), i = URL.createObjectURL(s), r = document.createElement("a");
  r.href = i, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
function ji(e, t) {
  let n = `=== 聊天记录: ${e} ===
导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}

`;
  t.forEach((s) => {
    const i = s.name || (s.is_user ? "You" : "Bot");
    n += `[${i}]:
${s.mes}

`;
  }), Qn(`${e}.txt`, n, "text/plain;charset=utf-8");
}
function zi(e, t) {
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
  }), Qn(`${e}.md`, n, "text/markdown;charset=utf-8");
}
function Bi(e, t, n) {
  const s = {
    user_name: "You",
    character_name: t,
    create_date: Date.now(),
    chat_metadata: {}
  }, i = [JSON.stringify(s), ...n.map((r) => JSON.stringify(r))];
  Qn(`${e}.jsonl`, i.join(`
`), "application/octet-stream");
}
function Ja(e, t) {
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
  })), Qn(s, i, `text/${t === "json" ? "plain" : t};charset=utf-8`);
}
const qa = { class: "modal-header" }, Ya = { class: "header-actions" }, Ga = ["disabled"], Qa = { class: "modal-body" }, Xa = { class: "left-panel" }, Za = { class: "panel-header" }, eu = { class: "search-box" }, tu = ["placeholder", "value", "disabled"], nu = {
  key: 0,
  class: "search-loader"
}, su = {
  key: 0,
  class: "select-all-bar"
}, iu = ["checked"], ru = {
  for: "selectAllBox",
  class: "select-all-label"
}, ou = { class: "right-panel" }, lu = { class: "panel-header right-header" }, cu = {
  key: 0,
  class: "header-actions"
}, au = {
  key: 0,
  class: "batch-panel"
}, uu = { class: "batch-status" }, fu = {
  key: 0,
  class: "hint"
}, hu = {
  key: 0,
  class: "batch-actions"
}, du = ["disabled"], pu = ["disabled"], gu = ["disabled"], mu = ["disabled"], vu = {
  key: 0,
  class: "empty-state"
}, yu = {
  key: 1,
  class: "loading-indicator"
}, _u = ["onClick"], bu = ["innerHTML"], Cn = 72, Hi = 12, xu = /* @__PURE__ */ Nr({
  __name: "LogOverview",
  setup(e) {
    let t = !0;
    const n = /* @__PURE__ */ pe(!0), s = /* @__PURE__ */ pe(0), i = () => {
      const v = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--clm-vh", `${v}px`);
    }, r = () => setTimeout(i, 300), o = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), l = (v) => (v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), c = (v, g) => {
      if (!v)
        return "";
      const d = v.replace(/<[^>]+>/g, "");
      if (!g)
        return l(d);
      const x = d.toLowerCase(), y = g.toLowerCase(), M = x.indexOf(y);
      if (M === -1)
        return l(d);
      const S = Math.max(0, M - 15), A = Math.min(d.length, M + g.length + 30);
      let V = d.slice(S, A);
      const z = S > 0 ? "..." : "", D = A < d.length ? "..." : "";
      let J = l(V);
      const te = new RegExp(o(g), "gi");
      return J = J.replace(te, (le) => `<mark class="search-highlight">${le}</mark>`), `${z}${J}${D}`;
    };
    let f = null;
    const a = (v, g) => {
      if (!g)
        return;
      const d = v.querySelector(".mes_text, .message-text, .content") || v, x = document.createTreeWalker(d, NodeFilter.SHOW_TEXT, null), y = [];
      let M;
      for (; M = x.nextNode(); ) {
        const S = M, A = S.nodeValue || "", V = new RegExp(o(g), "gi");
        if (V.test(A)) {
          const z = document.createElement("span");
          z.innerHTML = l(A).replace(V, (D) => `<mark style="background-color: #ff9800; color: #fff; padding: 0 3px; border-radius: 3px; box-shadow: 0 0 6px rgba(255,152,0,0.8); font-weight: bold;">${D}</mark>`), S.parentNode && y.push({ old: S, new: z, parent: S.parentNode });
        }
      }
      y.forEach((S) => S.parent.replaceChild(S.new, S.old)), f && clearTimeout(f), f = window.setTimeout(() => {
        y.forEach((S) => {
          S.parent.contains(S.new) && S.parent.replaceChild(S.old, S.new);
        }), f = null;
      }, 3500);
    };
    class p {
      get win() {
        return window;
      }
      get context() {
        var g, d;
        try {
          if (typeof ((g = this.win.SillyTavern) == null ? void 0 : g.getContext) == "function")
            return this.win.SillyTavern.getContext();
          if (this.win.context)
            return this.win.context;
          if ((d = this.win.ST) != null && d.context)
            return this.win.ST.context;
        } catch {
        }
        return {};
      }
      getCurrentCharacterId() {
        return this.context.characterId ?? this.win.this_chid ?? -1;
      }
      getCurrentChatFileName() {
        return this.win.chat_file_name || "";
      }
      getCharacters() {
        return this.context.characters || this.win.characters || [];
      }
      selectCharacterById(g) {
        if (typeof this.context.selectCharacter == "function")
          return this.context.selectCharacter(g), !0;
        if (typeof this.win.selectCharacterById == "function")
          return this.win.selectCharacterById(g), !0;
        const d = document.querySelector(`.character_select[chid="${g}"], [data-character-id="${g}"], .character-item[data-id="${g}"]`);
        return d ? (d.click(), !0) : !1;
      }
      loadChat(g) {
        const d = g.replace(/\.jsonl?$/, ""), x = d + ".jsonl";
        try {
          if (typeof this.context.openCharacterChat == "function")
            return this.context.openCharacterChat(d), !0;
          if (typeof this.context.executeSlashCommandsWithOptions == "function")
            return this.context.executeSlashCommandsWithOptions("/chat " + JSON.stringify(d)), !0;
        } catch {
        }
        return typeof this.context.loadChat == "function" ? (this.context.loadChat(x), !0) : typeof this.win.loadChat == "function" ? (this.win.loadChat(x), !0) : typeof this.win.getChat == "function" ? (this.win.chat_file_name = x, this.win.getChat(), !0) : this.clickHistoryItem(x);
      }
      clickHistoryItem(g) {
        const d = g.replace(/\.jsonl?$/, ""), x = d + ".jsonl", y = [`[chatfile="${x}"]`, `[chatfile="${d}"]`, `[file_name="${d}"]`, `[data-chat-file="${x}"]`];
        for (const S of y) {
          const A = document.querySelector(S);
          if (A)
            return A.click(), !0;
        }
        const M = document.querySelectorAll('.past_chat_item, .chat-history-item, [class*="history-item"]');
        for (let S = 0; S < M.length; S++)
          if ((M[S].textContent || "").includes(d))
            return M[S].click(), !0;
        return !1;
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
      findCharacterElement(g, d) {
        var V;
        const x = (z) => (z || "").replace(/\s+/g, "").toLowerCase(), y = x(g), M = d && decodeURIComponent(d).replace(/\\/g, "/").split("/").pop() || "", S = [".character_select", ".character-select", "[data-character-id]", ".ch_card", ".character-item"];
        let A = null;
        for (const z of S) {
          const D = document.querySelectorAll(z);
          if (D.length) {
            A = D;
            break;
          }
        }
        if (!A)
          return { element: null, index: -1 };
        for (const z of A) {
          const D = x(z.textContent || "") + x(z.getAttribute("ch_name") || "") + x(z.getAttribute("name") || ""), J = ((V = z.querySelector("img")) == null ? void 0 : V.getAttribute("src")) || z.getAttribute("avatar") || "", te = J && decodeURIComponent(J).replace(/\\/g, "/").split("/").pop() || "";
          if (D.includes(y) || M && te && (te.includes(M) || M.includes(te))) {
            let le = parseInt(z.getAttribute("chid") || z.getAttribute("data-character-id") || z.getAttribute("data-id") || "-1", 10);
            return { element: z, index: isNaN(le) ? -1 : le };
          }
        }
        return { element: null, index: -1 };
      }
      findMessageElement(g, d, x, y) {
        const M = document.getElementById("chat") || document.body, S = Array.from(M.querySelectorAll(".mes, [mesid]")).filter((D) => !D.closest(".log-manager-modal")), A = g.mesid ?? g.id;
        if (A != null)
          for (let D = S.length - 1; D >= 0; D--) {
            const J = S[D];
            if (J.dataset.mesid === String(A) || J.getAttribute("mesid") === String(A))
              return J;
          }
        if (!x && d >= 0)
          for (let D = S.length - 1; D >= 0; D--) {
            const J = S[D];
            if (parseInt(J.dataset.index || J.getAttribute("mesid") || "-1", 10) === d)
              return J;
          }
        const V = (D) => (D || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        let z = V(g.mes);
        if (z.length > 40 && (z = z.substring(0, 40)), z.length >= 4)
          for (let D = S.length - 1; D >= 0; D--) {
            const J = S[D], te = J.querySelector(".mes_text, .message-text, .content") || J;
            if (V(te.textContent).includes(z))
              return J;
          }
        if (x && y) {
          const D = V(y);
          if (D.length >= 2)
            for (let J = S.length - 1; J >= 0; J--) {
              const te = S[J], le = te.querySelector(".mes_text, .message-text, .content") || te;
              if (V(le.textContent).includes(D))
                return te;
            }
        }
        return null;
      }
      resetCurrentCharacter() {
        this.context.characterId !== void 0 && (this.context.characterId = -1), this.win.this_chid !== void 0 && (this.win.this_chid = -1);
      }
    }
    const h = vo(), b = new p(), C = /* @__PURE__ */ wn(null);
    function O() {
      const v = document.documentElement;
      if (v.classList.contains("dark"))
        return !0;
      if (v.classList.contains("light"))
        return !1;
      const d = (getComputedStyle(document.body).backgroundColor || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (d) {
        const x = parseInt(d[1], 10), y = parseInt(d[2], 10), M = parseInt(d[3], 10);
        return x * 0.299 + y * 0.587 + M * 0.114 < 128;
      }
      return !0;
    }
    const j = /* @__PURE__ */ pe(O());
    let B = null;
    const H = () => {
      B !== null && cancelAnimationFrame(B), B = requestAnimationFrame(() => {
        if (!C.value)
          return;
        const v = getComputedStyle(document.body);
        let g = v.backgroundColor;
        (!g || g === "rgba(0, 0, 0, 0)" || g === "transparent") && (g = j.value ? "#1e1e1e" : "#f5f5f5");
        let d = v.color;
        const x = document.querySelector(".mes_text, .message-text");
        if (x) {
          const A = getComputedStyle(x).color;
          A && A !== "rgba(0, 0, 0, 0)" && A !== "transparent" && (d = A);
        }
        const y = (A) => {
          const V = A.match(/\d+/g);
          return V && V.length >= 3 ? parseInt(V[0], 10) * 0.299 + parseInt(V[1], 10) * 0.587 + parseInt(V[2], 10) * 0.114 : 128;
        }, M = y(g), S = y(d);
        50 > Math.abs(M - S) && (d = M < 128 ? "#E8E8E8" : "#33312F"), C.value.style.backgroundColor = g, C.value.style.color = d, C.value.style.setProperty("--dynamic-solid-bg", g);
      });
    };
    let k = null, R = null;
    const L = /* @__PURE__ */ pe(!1), K = /* @__PURE__ */ wn(null), Y = /* @__PURE__ */ pe({ top: "calc(100% + 5px)", right: "0", bottom: "auto", left: "auto", transform: "none" }), P = /* @__PURE__ */ pe(!1), I = /* @__PURE__ */ pe(!1), W = /* @__PURE__ */ pe(null), q = /* @__PURE__ */ new Set(), F = async () => {
      if (L.value = !L.value, L.value) {
        if (await tn(), window.innerWidth <= 768)
          Y.value = { top: "50%", left: "50%", transform: "translate(-50%, -50%)", bottom: "auto", right: "auto" };
        else if (K.value) {
          const v = K.value.getBoundingClientRect();
          let g = "calc(100% + 5px)", d = "auto", x = "0", y = "auto";
          window.innerHeight - v.bottom < 150 && (g = "auto", d = "calc(100% + 5px)"), v.right < 160 && (x = "auto", y = "0"), Y.value = { top: g, bottom: d, right: x, left: y, transform: "none" };
        }
      }
    }, Q = /* @__PURE__ */ wn(null), fe = /* @__PURE__ */ pe(0), Me = Le(() => {
      const v = h.currentMessages || [];
      return Array.isArray(v) ? h.searchQuery ? [...v].sort((g, d) => (d.send_date ?? d.timestamp ?? 0) - (g.send_date ?? g.timestamp ?? 0)) : v : [];
    }), oe = Le(() => Me.value.length), ee = Le(() => oe.value * Cn), re = Le(() => {
      const v = Q.value;
      if (!v)
        return { start: 0, end: Math.min(oe.value, 20) };
      const g = Math.floor(fe.value / Cn), d = Math.ceil((fe.value + v.clientHeight) / Cn);
      return { start: Math.max(0, g - Hi), end: Math.min(oe.value, d + Hi) };
    }), Ze = Le(() => {
      const v = h.searchQuery, g = re.value.start;
      return Me.value.slice(g, re.value.end).map((d, x) => {
        const y = g + x;
        return { ...d, _localIndex: x, _globalIndex: y, _top: y * Cn, _html: c(d.mes, v) };
      });
    });
    let ht = null;
    const et = () => {
      ht !== null && cancelAnimationFrame(ht), ht = requestAnimationFrame(() => {
        Q.value && (fe.value = Q.value.scrollTop);
      });
    };
    $t(() => h.currentChatId, async () => {
      await tn(), Q.value && (Q.value.scrollTop = 0, fe.value = 0);
    });
    let be = null, tt = null;
    const Xn = (v) => {
      h.$patch({ searchQuery: v.target.value }), be && clearTimeout(be), be = window.setTimeout(() => {
        tt && tt.abort(), tt = new AbortController(), h.performSearch(h.searchQuery, tt.signal);
      }, 300);
    };
    let xt = null;
    const dt = new ResizeObserver(() => {
      xt && clearTimeout(xt), xt = window.setTimeout(() => {
        Q.value && (fe.value = Q.value.scrollTop);
      }, 100);
    });
    Bs(async () => {
      t = !0, i(), window.addEventListener("resize", i), window.addEventListener("orientationchange", r), await tn(), H(), k = new MutationObserver(() => {
        const g = O();
        g !== j.value && (j.value = g), H();
      }), k.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), k.observe(document.body, { attributes: !0, attributeFilter: ["class", "style"] });
      const v = window.matchMedia("(prefers-color-scheme: dark)");
      R = () => {
        const g = O();
        g !== j.value && (j.value = g), H();
      }, v.addEventListener("change", R), h.fetchChats(), window.refreshChatLogManager ? window.refreshChatLogManager_fallback = () => h.fetchChats() : window.refreshChatLogManager = () => h.fetchChats(), Q.value && dt.observe(Q.value);
    }), Hs(() => {
      t = !1, window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r), k && k.disconnect(), R && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", R), B !== null && cancelAnimationFrame(B), xt && clearTimeout(xt), f && clearTimeout(f), be && clearTimeout(be), tt && tt.abort(), dt.disconnect(), q.forEach((v) => v.disconnect()), q.clear();
    });
    const nt = () => {
      typeof window.closeChatLogManager == "function" ? window.closeChatLogManager() : n.value = !1;
    }, pt = (v) => {
      const g = b.getCurrentChatFileName();
      return g && g.replace(/\.jsonl?$/, "") === v.replace(/\.jsonl?$/, "");
    }, St = async (v, g, d) => {
      try {
        b.saveChat();
        let { element: x, index: y } = b.findCharacterElement(v, g);
        if (y === -1) {
          const S = b.getCharacters(), A = (D) => (D || "").replace(/\s+/g, "").toLowerCase(), V = A(v), z = S.find((D) => A(D.name) === V);
          z && (y = S.indexOf(z));
        }
        if (y === -1)
          return alert(`自动定位角色【${v}】失败，请手动在左侧选择该角色后继续。`), !1;
        const M = b.getCurrentCharacterId();
        return String(M) === String(y) ? (b.clickHistoryItem(d) || b.loadChat(d), await new Promise((S) => setTimeout(S, 600))) : (b.resetCurrentCharacter(), x ? x.click() : b.selectCharacterById(y), await new Promise((S) => setTimeout(S, 1200)), b.loadChat(d), await new Promise((S) => setTimeout(S, 600))), !0;
      } catch (x) {
        return console.error("[ChatLogManager] Jump Error:", x), !1;
      }
    }, st = (v, g, d, x) => {
      const y = document.getElementById("chat") || document.querySelector(".chat-container, #chat-window") || document.body;
      if (!y)
        return;
      let M = !1;
      const S = () => {
        if (M)
          return !0;
        const D = b.findMessageElement(v, g, d, x);
        if (D) {
          M = !0;
          const J = () => D.scrollIntoView({ behavior: "smooth", block: "center" });
          return J(), setTimeout(J, 200), setTimeout(J, 500), D.style.transition = "all 0.5s ease", D.style.boxShadow = "0 0 30px 10px rgba(255, 152, 0, 0.8)", D.style.backgroundColor = "rgba(255, 152, 0, 0.25)", setTimeout(() => {
            D.style.boxShadow = "", D.style.backgroundColor = "";
          }, 3e3), d && x && a(D, x), !0;
        }
        return !1;
      };
      if (S())
        return;
      const A = new MutationObserver(() => {
        S() && (A.disconnect(), q.delete(A));
      });
      A.observe(y, { childList: !0, subtree: !0, attributes: !1 }), q.add(A);
      let V = 0;
      const z = setInterval(() => {
        if (V++, S()) {
          clearInterval(z), A.disconnect(), q.delete(A);
          return;
        }
        V > 5 && V % 3 === 0 && (y.scrollTop = Math.max(0, y.scrollTop - 800)), V > 40 && (clearInterval(z), A.disconnect(), q.delete(A));
      }, 200);
    }, Vt = async () => {
      const v = h.allChats.find((g) => g.id === h.currentChatId);
      v && (nt(), await new Promise((g) => setTimeout(g, 100)), pt(v.id) || await St(v.charName, v.avatarUrl, v.id));
    }, Kt = async (v, g) => {
      let d = v.chatId || v.chat_id;
      if (!d && v.id && typeof v.id == "string") {
        const A = v.id.lastIndexOf("_");
        d = A !== -1 ? v.id.substring(0, A) : v.id;
      }
      d || (d = h.currentChatId);
      const x = h.allChats.find((A) => A.id === d);
      if (!x) {
        alert("无法定位该消息归属的聊天文件。");
        return;
      }
      const y = !!h.searchQuery, M = h.searchQuery, S = pt(x.id);
      nt(), await new Promise((A) => setTimeout(A, 100)), S ? st(v, g, y, M) : await St(x.charName, x.avatarUrl, x.id) && (await new Promise((A) => setTimeout(A, 800)), st(v, g, y, M));
    }, u = async () => {
      const v = h.allChats.find((d) => d.id === h.currentChatId);
      if (!v)
        return;
      const g = pt(v.id);
      if (window.confirm(g ? "🚨 正在删除活跃聊天！将自动切换到历史记录，确定删除？" : "⚠️ 确定要永久删除此记录吗？"))
        try {
          if (b.saveChat(), g) {
            const d = h.allChats.find((x) => x.charName === v.charName && x.id !== v.id);
            d && await St(d.charName, d.avatarUrl, d.id);
          }
          await Ri(v.charName, v.avatarUrl, v.id) ? (h.$patch({ currentChatId: null, currentMessages: [], selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch(""), h.fetchChats()) : alert("❌ 删除失败");
        } catch (d) {
          console.error("[ChatLogManager] Delete Error:", d);
        }
    }, m = async () => {
      var d;
      if (h.selectedChatIds.length === 0 || !window.confirm(`🛑 极度危险！将删除 ${h.selectedChatIds.length} 个会话，确定吗？`))
        return;
      P.value = !0;
      let v = 0, g = 0;
      try {
        const x = Array.from(h.selectedChatIds);
        let y = !1, M = "";
        for (const S of x)
          if (pt(S)) {
            y = !0, M = ((d = h.allChats.find((A) => A.id === S)) == null ? void 0 : d.charName) || "";
            break;
          }
        if (b.saveChat(), y) {
          const S = h.allChats.find((A) => A.charName === M && !x.includes(A.id));
          S && await St(S.charName, S.avatarUrl, S.id);
        }
        for (const S of x) {
          const A = h.allChats.find((V) => V.id === S);
          A && await Ri(A.charName, A.avatarUrl, A.id) ? v++ : g++;
        }
        h.$patch({ selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch("");
      } finally {
        P.value = !1, t && (alert(`🗑️ 完毕！成功: ${v}${g > 0 ? ` 失败: ${g}` : ""}`), h.fetchChats());
      }
    };
    async function _(v, g) {
      const d = [];
      let x = 0;
      const y = async () => {
        if (x >= g.length)
          return;
        const M = x++;
        try {
          d[M] = { success: !0, value: await g[M]() };
        } catch (S) {
          d[M] = { success: !1, error: S };
        }
        await y();
      };
      return await Promise.all(Array(Math.min(v, g.length)).fill(null).map(() => y())), d;
    }
    const T = (v) => {
      const g = h.allChats.find((y) => y.id === h.currentChatId);
      if (!g) {
        alert("未找到当前聊天记录");
        return;
      }
      let d = [];
      try {
        d = JSON.parse(JSON.stringify(h.currentMessages || []));
      } catch {
        d = Array.from(h.currentMessages || []);
      }
      if (!Array.isArray(d) || d.length === 0) {
        alert("当前聊天没有消息可导出");
        return;
      }
      const x = g.title || "未命名聊天";
      try {
        if (v === "txt")
          try {
            ji(x, d);
          } catch {
            ji(d, x);
          }
        else if (v === "md")
          try {
            zi(x, d);
          } catch {
            zi(d, x);
          }
        else if (v === "jsonl")
          try {
            Bi(x, g.charName, d);
          } catch {
            Bi(x, d, g.charName);
          }
      } catch (y) {
        alert("导出操作遇到错误。"), console.error(y);
      }
      L.value = !1;
    }, w = async (v) => {
      if (h.selectedChatIds.length !== 0) {
        P.value = !0;
        try {
          const g = Array.from(h.selectedChatIds).map((x) => async () => {
            const y = h.allChats.find((M) => M.id === x);
            return y ? { title: y.title, charName: y.charName, messages: await As(y.charName, y.avatarUrl, y.id) } : null;
          }), d = await _(5, g);
          Ja(d.filter((x) => x.success && x.value !== null).map((x) => x.value), v);
        } finally {
          P.value = !1;
        }
      }
    }, E = () => {
      W.value && W.value.click();
    }, N = async (v) => {
      const g = v.target.files;
      if (!g || g.length === 0)
        return;
      I.value = !0, s.value = 0;
      let d = 0, x = 0;
      try {
        for (let y = 0; y < g.length; y++) {
          const M = await g[y].text();
          let S;
          try {
            S = JSON.parse(M);
          } catch {
            S = M.split(`
`).filter((te) => te.trim()).map((te) => JSON.parse(te));
          }
          let A = [];
          Array.isArray(S) && (S.length > 0 && Array.isArray(S[0]) ? A = S.map((te) => ({ messages: te })) : S.length > 0 && S[0].messages ? A = S : S.length > 0 && S[0].chat_metadata ? A = [{ charName: S[0].character_name, messages: S.slice(1) }] : A = [{ messages: S }]);
          const V = A.length;
          let z = 0;
          const D = async (te) => {
            var le;
            for (const Ve of te) {
              const Nt = Ve.messages.filter((Oe) => Oe.mes !== void 0);
              if (Nt.length === 0)
                continue;
              let ye = Ve.charName || ((le = Nt.find((Oe) => !Oe.is_user && Oe.name)) == null ? void 0 : le.name) || "";
              if (!ye) {
                const Oe = window.prompt("请输入绑定的角色名称：", "");
                if (!Oe) {
                  x++;
                  continue;
                }
                ye = Oe;
              }
              let Ie = h.allChats.find((Oe) => Oe.charName === ye || ye.includes(Oe.charName));
              Ie && await da(Nt, Ie.avatarUrl, Ie.charName) ? d++ : x++;
            }
          }, J = 10;
          for (let te = 0; te < V; te += J) {
            const le = A.slice(te, te + J);
            await D(le), z += le.length, s.value = Math.floor(z / V * 100), await new Promise((Ve) => setTimeout(Ve, 0));
          }
        }
      } finally {
        I.value = !1, W.value && (W.value.value = ""), t && (alert(`🎉 导入完毕！成功: ${d}${x > 0 ? ` 失败: ${x}` : ""}`), h.fetchChats());
      }
    };
    return (v, g) => n.value ? (ue(), he("div", {
      key: 0,
      class: "log-manager-modal",
      onClick: It(nt, ["self"]),
      onTouchmove: g[9] || (g[9] = It(() => {
      }, ["self", "prevent"]))
    }, [
      G("div", {
        class: Ot(["log-manager-container", j.value ? "theme-dark" : "theme-light"]),
        ref_key: "containerRef",
        ref: C
      }, [
        G("header", qa, [
          g[10] || (g[10] = G("h2", null, "📚 聊天记录总览", -1)),
          G("div", Ya, [
            G("button", {
              class: "action-btn import-btn",
              onClick: E,
              disabled: I.value
            }, _e(I.value ? `导入中... ${s.value}%` : "📥 导入"), 9, Ga),
            G("input", {
              type: "file",
              ref_key: "fileInputRef",
              ref: W,
              style: { display: "none" },
              accept: ".json,.jsonl",
              multiple: "",
              onChange: N
            }, null, 544),
            G("button", {
              class: Ot(["action-btn toggle-batch-btn", { active: Z(h).isBatchMode }]),
              onClick: g[0] || (g[0] = //@ts-ignore
              (...d) => Z(h).toggleBatchMode && Z(h).toggleBatchMode(...d))
            }, _e(Z(h).isBatchMode ? "退出批量" : "☑️ 批量"), 3),
            G("button", {
              class: "icon-btn close-btn",
              onClick: nt,
              title: "关闭"
            }, "✕")
          ])
        ]),
        G("main", Qa, [
          G("aside", Xa, [
            G("div", Za, [
              G("div", eu, [
                G("input", {
                  type: "text",
                  placeholder: Z(h).isIndexing ? "后台加载中..." : "搜索全局内容...",
                  class: "search-input",
                  value: Z(h).searchQuery,
                  onInput: Xn,
                  disabled: Z(h).isBatchMode
                }, null, 40, tu),
                Z(h).isIndexing ? (ue(), he("span", nu, "⌛")) : je("", !0)
              ])
            ]),
            Z(h).isBatchMode ? (ue(), he("div", su, [
              G("input", {
                type: "checkbox",
                id: "selectAllBox",
                class: "batch-checkbox",
                checked: Z(h).isAllSelected,
                onChange: g[1] || (g[1] = //@ts-ignore
                (...d) => Z(h).toggleSelectAll && Z(h).toggleSelectAll(...d))
              }, null, 40, iu),
              G("label", ru, "全选 " + _e(Z(h).searchQuery ? "搜索结果" : "所有会话"), 1)
            ])) : je("", !0),
            Te(Ua)
          ]),
          G("section", ou, [
            G("div", lu, [
              G("h3", null, _e(Z(h).isBatchMode ? "批量操作" : "消息预览"), 1),
              !Z(h).isBatchMode && Z(h).currentChatId ? (ue(), he("div", cu, [
                G("button", {
                  class: "action-btn jump-chat-btn",
                  onClick: Vt
                }, "🚀 进入"),
                G("button", {
                  class: "action-btn delete-btn-sm",
                  onClick: u
                }, "🗑️"),
                G("div", {
                  class: "export-dropdown",
                  ref_key: "exportWrapperRef",
                  ref: K
                }, [
                  G("button", {
                    class: "action-btn",
                    onClick: F
                  }, "📤 导出 ▾"),
                  Te(Cc, { name: "fade-slide" }, {
                    default: Tr(() => [
                      L.value ? (ue(), he("div", {
                        key: 0,
                        class: "dropdown-menu",
                        style: _t(Y.value)
                      }, [
                        G("div", {
                          class: "dropdown-item",
                          onClick: g[2] || (g[2] = It(() => T("md"), ["stop"]))
                        }, "📄 Markdown"),
                        G("div", {
                          class: "dropdown-item",
                          onClick: g[3] || (g[3] = It(() => T("txt"), ["stop"]))
                        }, "📝 TXT 纯文本"),
                        G("div", {
                          class: "dropdown-item",
                          onClick: g[4] || (g[4] = It(() => T("jsonl"), ["stop"]))
                        }, "📦 官方 JSONL")
                      ], 4)) : je("", !0)
                    ]),
                    _: 1
                  })
                ], 512)
              ])) : je("", !0)
            ]),
            Z(h).isBatchMode ? (ue(), he("div", au, [
              G("div", uu, [
                G("h3", null, "已选 " + _e(Z(h).selectedChatIds.length) + " 个会话", 1),
                Z(h).selectedChatIds.length === 0 ? (ue(), he("p", fu, "请在左侧勾选")) : je("", !0)
              ]),
              Z(h).selectedChatIds.length > 0 ? (ue(), he("div", hu, [
                G("button", {
                  class: "big-btn md-btn",
                  onClick: g[5] || (g[5] = (d) => w("md")),
                  disabled: P.value
                }, _e(P.value ? "处理中..." : "📥 导出为 Markdown"), 9, du),
                G("button", {
                  class: "big-btn txt-btn",
                  onClick: g[6] || (g[6] = (d) => w("txt")),
                  disabled: P.value
                }, _e(P.value ? "处理中..." : "📥 导出为 TXT"), 9, pu),
                G("button", {
                  class: "big-btn json-btn",
                  onClick: g[7] || (g[7] = (d) => w("json")),
                  disabled: P.value
                }, _e(P.value ? "处理中..." : "📦 导出为 JSON"), 9, gu),
                g[11] || (g[11] = G("div", { class: "divider" }, null, -1)),
                G("button", {
                  class: "big-btn delete-btn",
                  onClick: m,
                  disabled: P.value
                }, _e(P.value ? "删除中..." : "🗑️ 永久删除记录"), 9, mu)
              ])) : je("", !0)
            ])) : (ue(), he("div", {
              key: 1,
              class: "message-container",
              ref_key: "scrollContainer",
              ref: Q,
              onScroll: et,
              onClick: g[8] || (g[8] = (d) => L.value = !1)
            }, [
              Z(h).currentChatId ? Z(h).loadingMessages ? (ue(), he("div", yu, " ⏳ 加载消息中... ")) : (ue(), he("div", {
                key: 2,
                class: "messages",
                style: _t({ height: ee.value + "px" })
              }, [
                (ue(!0), he(Re, null, jr(Ze.value, (d) => (ue(), he("div", {
                  key: d._localIndex,
                  style: _t({ transform: `translateY(${d._top}px)` }),
                  class: "message-bubble-wrapper"
                }, [
                  G("div", {
                    class: Ot(["message-bubble", d.is_user ? "is-user" : "is-bot"])
                  }, [
                    G("button", {
                      class: "msg-jump-btn",
                      onClick: It((x) => Kt(d, d._globalIndex), ["stop"]),
                      title: "跳转到原文"
                    }, "🎯", 8, _u),
                    G("strong", null, _e(d.name || (d.is_user ? "You" : "Bot")) + ":", 1),
                    G("p", {
                      class: "preview-text",
                      innerHTML: d._html
                    }, null, 8, bu)
                  ], 2)
                ], 4))), 128))
              ], 4)) : (ue(), he("div", vu, "👈 请在左侧选择角色或搜索内容"))
            ], 544))
          ])
        ])
      ], 2)
    ], 32)) : je("", !0);
  }
});
const Su = /* @__PURE__ */ _o(xu, [["__scopeId", "data-v-eb256fd8"]]), bo = "chat-log-manager-float-pos";
function Cu() {
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
    }, t = function(p, h) {
      const b = p - o, C = h - l;
      (Math.abs(b) > 5 || Math.abs(C) > 5) && (r = !0), s.style.left = Math.max(0, Math.min(c + b, window.innerWidth - s.offsetWidth)) + "px", s.style.top = Math.max(0, Math.min(f + C, window.innerHeight - s.offsetHeight)) + "px";
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
    const i = Cu();
    i ? (s.style.left = i.x + "px", s.style.top = i.y + "px") : (s.style.left = window.innerWidth - 64 + "px", s.style.top = window.innerHeight - 200 + "px");
    let r = !1, o, l, c, f, a = null;
    e(), s.addEventListener("mousedown", (p) => {
      if (p.button !== 0)
        return;
      e(), o = p.clientX, l = p.clientY;
      const h = s.getBoundingClientRect();
      c = h.left, f = h.top, s.style.transition = "none";
      const b = (O) => t(O.clientX, O.clientY), C = () => {
        document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", C), s.style.transition = "all 0.3s ease", r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("mousemove", b), document.addEventListener("mouseup", C);
    }), s.addEventListener("touchstart", (p) => {
      e();
      const h = p.touches[0];
      o = h.clientX, l = h.clientY;
      const b = s.getBoundingClientRect();
      c = b.left, f = b.top;
      const C = (j) => t(j.touches[0].clientX, j.touches[0].clientY), O = () => {
        document.removeEventListener("touchmove", C), document.removeEventListener("touchend", O), r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("touchend", O);
    }), s.addEventListener("click", () => {
      r || wu();
    }), document.body.appendChild(s);
  } catch {
  }
}
function wu() {
  let e = document.getElementById("chat-log-manager-container");
  if (e)
    e.style.display = "block";
  else {
    e = document.createElement("div"), e.id = "chat-log-manager-container", e.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 99998; backdrop-filter: blur(3px);", document.body.appendChild(e);
    const t = Qc(Su), n = ea();
    n.use(fa), t.use(n), t.mount(e);
  }
  typeof window.refreshChatLogManager == "function" && window.refreshChatLogManager();
}
window.closeChatLogManager = () => {
  const e = document.getElementById("chat-log-manager-container");
  e && (e.style.display = "none");
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Vi) : Vi();
