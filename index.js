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
const ae = {}, jt = [], ze = () => {
}, Ki = () => !1, kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), me = Object.assign, Ls = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xo = Object.prototype.hasOwnProperty, se = (e, t) => xo.call(e, t), U = Array.isArray, zt = (e) => gn(e) === "[object Map]", Ui = (e) => gn(e) === "[object Set]", Gs = (e) => gn(e) === "[object Date]", G = (e) => typeof e == "function", de = (e) => typeof e == "string", ke = (e) => typeof e == "symbol", ie = (e) => e !== null && typeof e == "object", Ji = (e) => (ie(e) || G(e)) && G(e.then) && G(e.catch), qi = Object.prototype.toString, gn = (e) => qi.call(e), So = (e) => gn(e).slice(8, -1), Yi = (e) => gn(e) === "[object Object]", jn = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ Os(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Co = /-\w/g, Be = zn(
  (e) => e.replace(Co, (t) => t.slice(1).toUpperCase())
), wo = /\B([A-Z])/g, Ft = zn(
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
function At(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const s = At(e[n]);
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
const Zi = (e) => !!(e && e.__v_isRef === !0), _e = (e) => de(e) ? e : e == null ? "" : U(e) || ie(e) && (e.toString === qi || !G(e.toString)) ? Zi(e) ? _e(e.value) : JSON.stringify(e, er, 2) : String(e), er = (e, t) => Zi(t) ? er(e, t.value) : zt(t) ? {
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
let or = 0, Xt, Zt;
function lr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zt, Zt = e;
    return;
  }
  e.next = Xt, Xt = e;
}
function Fs() {
  or++;
}
function Ps() {
  if (--or > 0)
    return;
  if (Zt) {
    let t = Zt;
    for (Zt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xt; ) {
    let t = Xt;
    for (Xt = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cn) || (e.globalVersion = cn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ms(e))))
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
let cn = 0;
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
    this.version++, cn++, this.notify(t);
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
const Tn = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), an = /* @__PURE__ */ Symbol(
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
    cn++;
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
      o.forEach((g, d) => {
        (d === "length" || d === an || !ke(d) && d >= a) && l(g);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(an)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Ot)), zt(e) && l(o.get(vs)));
          break;
        case "delete":
          c || (l(o.get(Ot)), zt(e) && l(o.get(vs)));
          break;
        case "set":
          zt(e) && l(o.get(Ot));
          break;
      }
  }
  Ps();
}
function Ro(e, t) {
  const n = Tn.get(e);
  return n && n.get(t);
}
function Nt(e) {
  const t = /* @__PURE__ */ ne(e);
  return t === e ? t : (xe(t, "iterate", an), /* @__PURE__ */ Fe(e) ? t : t.map(We));
}
function Hn(e) {
  return xe(e = /* @__PURE__ */ ne(e), "iterate", an), e;
}
function Je(e, t) {
  return /* @__PURE__ */ ut(e) ? Ht(/* @__PURE__ */ at(e) ? We(t) : t) : We(t);
}
const ko = {
  __proto__: null,
  [Symbol.iterator]() {
    return ss(this, Symbol.iterator, (e) => Je(this, e));
  },
  concat(...e) {
    return Nt(this).concat(
      ...e.map((t) => U(t) ? Nt(t) : t)
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
    return Nt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return is(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Kt(this, "pop");
  },
  push(...e) {
    return Kt(this, "push", e);
  },
  reduce(e, ...t) {
    return Zs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zs(this, "reduceRight", e, t);
  },
  shift() {
    return Kt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Kt(this, "splice", e);
  },
  toReversed() {
    return Nt(this).toReversed();
  },
  toSorted(e) {
    return Nt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Nt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Kt(this, "unshift", e);
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
    const g = c.apply(e, r);
    return l ? We(g) : g;
  }
  let f = n;
  o !== e && (l ? f = function(g, d) {
    return n.call(this, Je(e, g), d, e);
  } : n.length > 2 && (f = function(g, d) {
    return n.call(this, g, d, e);
  }));
  const a = c.call(o, f, s);
  return l && i ? i(a) : a;
}
function Zs(e, t, n, s) {
  const i = Hn(e), r = i !== e && !/* @__PURE__ */ Fe(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(f, a, g) {
    return l && (l = !1, f = Je(e, f)), n.call(this, f, Je(e, a), g, e);
  }) : n.length > 3 && (o = function(f, a, g) {
    return n.call(this, f, a, g, e);
  }));
  const c = i[t](o, ...s);
  return l ? Je(e, c) : c;
}
function is(e, t, n) {
  const s = /* @__PURE__ */ ne(e);
  xe(s, "iterate", an);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Vn(n[0]) ? (n[0] = /* @__PURE__ */ ne(n[0]), s[t](...n)) : i;
}
function Kt(e, t, n = []) {
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
      /* @__PURE__ */ pe(t) ? t : s
    );
    if ((ke(n) ? dr.has(n) : jo(n)) || (i || xe(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ pe(l)) {
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
      if (!/* @__PURE__ */ Fe(s) && !/* @__PURE__ */ ut(s) && (r = /* @__PURE__ */ ne(r), s = /* @__PURE__ */ ne(s)), !o && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(s))
        return f || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : se(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ pe(t) ? t : i
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
      U(t) ? "length" : Ot
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
const ys = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function Ko(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ ne(i), o = zt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = i[e](...s), a = n ? ys : t ? Ht : We;
    return !t && xe(
      r,
      "iterate",
      c ? vs : Ot
    ), me(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: g, done: d } = f.next();
          return d ? { value: g, done: d } : {
            value: l ? [a(g[0]), a(g[1])] : a(g),
            done: d
          };
        }
      }
    );
  };
}
function _n(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Uo(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(i);
      e || (Ye(i, l) && xe(o, "get", i), xe(o, "get", l));
      const { has: c } = yn(o), f = t ? ys : e ? Ht : We;
      if (c.call(o, i))
        return f(r.get(i));
      if (c.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && xe(/* @__PURE__ */ ne(i), "iterate", Ot), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(i);
      return e || (Ye(i, l) && xe(o, "has", i), xe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ne(l), f = t ? ys : e ? Ht : We;
      return !e && xe(c, "iterate", Ot), l.forEach((a, g) => i.call(r, f(a), f(g), o));
    }
  };
  return me(
    n,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ne(this), o = yn(r), l = /* @__PURE__ */ ne(i), c = !t && !/* @__PURE__ */ Fe(i) && !/* @__PURE__ */ ut(i) ? l : i;
        return o.has.call(r, c) || Ye(i, c) && o.has.call(r, i) || Ye(l, c) && o.has.call(r, l) || (r.add(c), ct(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Fe(r) && !/* @__PURE__ */ ut(r) && (r = /* @__PURE__ */ ne(r));
        const o = /* @__PURE__ */ ne(this), { has: l, get: c } = yn(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ ne(i), f = l.call(o, i));
        const a = c.call(o, i);
        return o.set(i, r), f ? Ye(r, a) && ct(o, "set", i, r) : ct(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ne(this), { has: o, get: l } = yn(r);
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
const We = (e) => ie(e) ? /* @__PURE__ */ Wn(e) : e, Ht = (e) => ie(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return _r(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return _r(e, !0);
}
function _r(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new Zo(e, t);
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
function ee(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const el = {
  get: (e, t, n) => t === "__v_raw" ? e : ee(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
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
    return this._shallow && (t = ee(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ pe(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ pe(n)) {
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
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Rs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
  return G(e) ? s = e : (s = e.get, i = e.set), new il(s, i, n);
}
const bn = {}, In = /* @__PURE__ */ new WeakMap();
let It;
function ol(e, t = !1, n = It) {
  if (n) {
    let s = In.get(n);
    s || In.set(n, s = []), s.push(e);
  }
}
function ll(e, t, n = ae) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, f = (M) => i ? M : /* @__PURE__ */ Fe(M) || i === !1 || i === 0 ? yt(M, 1) : yt(M);
  let a, g, d, b, C = !1, L = !1;
  if (/* @__PURE__ */ pe(e) ? (g = () => e.value, C = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ at(e) ? (g = () => f(e), C = !0) : U(e) ? (L = !0, C = e.some((M) => /* @__PURE__ */ at(M) || /* @__PURE__ */ Fe(M)), g = () => e.map((M) => {
    if (/* @__PURE__ */ pe(M))
      return M.value;
    if (/* @__PURE__ */ at(M))
      return f(M);
    if (G(M))
      return c ? c(M, 2) : M();
  })) : G(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (d) {
      Qe();
      try {
        d();
      } finally {
        Xe();
      }
    }
    const M = It;
    It = a;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      It = M;
    }
  } : g = ze, t && i) {
    const M = g, k = i === !0 ? 1 / 0 : i;
    g = () => yt(M(), k);
  }
  const j = sr(), B = () => {
    a.stop(), j && j.active && Ls(j.effects, a);
  };
  if (r && t) {
    const M = t;
    t = (...k) => {
      const Q = M(...k);
      return B(), Q;
    };
  }
  let H = L ? new Array(e.length).fill(bn) : bn;
  const R = (M) => {
    if (!(!(a.flags & 1) || !a.dirty && !M))
      if (t) {
        const k = a.run();
        if (M || i || C || (L ? k.some((Q, V) => Ye(Q, H[V])) : Ye(k, H))) {
          d && d();
          const Q = It;
          It = a;
          try {
            const V = [
              k,
              // pass undefined as the old value when it's changed for the first time
              H === bn ? void 0 : L && H[0] === bn ? [] : H,
              b
            ];
            H = k, c ? c(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            It = Q;
          }
        }
      } else
        a.run();
  };
  return l && l(R), a = new rr(g), a.scheduler = o ? () => o(R, !1) : R, b = (M) => ol(M, !1, a), d = a.onStop = () => {
    const M = In.get(a);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const k of M)
          k();
      In.delete(a);
    }
  }, t ? s ? R(!0) : H = a.run() : o ? o(R.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function yt(e, t = 1 / 0, n) {
  if (t <= 0 || !ie(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pe(e))
    yt(e.value, t, n);
  else if (U(e))
    for (let s = 0; s < e.length; s++)
      yt(e[s], t, n);
  else if (Ui(e) || zt(e))
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
function mn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Kn(i, t, n);
  }
}
function De(e, t, n, s) {
  if (G(e)) {
    const i = mn(e, t, n, s);
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
        for (let g = 0; g < a.length; g++)
          if (a[g](e, c, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Qe(), mn(r, null, 10, [
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
const Bt = [];
let vt = null, Dt = 0;
const xr = /* @__PURE__ */ Promise.resolve();
let Mn = null;
function en(e) {
  const t = Mn || xr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function al(e) {
  let t = Ue + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ce[s], r = un(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function zs(e) {
  if (!(e.flags & 1)) {
    const t = un(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= un(n) ? Ce.push(e) : Ce.splice(al(t), 0, e), e.flags |= 1, Sr();
  }
}
function Sr() {
  Mn || (Mn = xr.then(wr));
}
function ul(e) {
  U(e) ? Bt.push(...e) : vt && e.id === -1 ? vt.splice(Dt + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Sr();
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
  if (Bt.length) {
    const t = [...new Set(Bt)].sort(
      (n, s) => un(n) - un(s)
    );
    if (Bt.length = 0, vt) {
      vt.push(...t);
      return;
    }
    for (vt = t, Dt = 0; Dt < vt.length; Dt++) {
      const n = vt[Dt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vt = null, Dt = 0;
  }
}
const un = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wr(e) {
  const t = ze;
  try {
    for (Ue = 0; Ue < Ce.length; Ue++) {
      const n = Ce[Ue];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), mn(
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
    Ue = -1, Ce.length = 0, Cr(), Mn = null, (Ce.length || Bt.length) && wr();
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
function tn(e, t, n = !1) {
  const s = Us();
  if (s || $t) {
    let i = $t ? $t._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(s && s.proxy) : t;
  }
}
function hl() {
  return !!(Us() || $t);
}
const dl = /* @__PURE__ */ Symbol.for("v-scx"), pl = () => tn(dl);
function Lt(e, t, n) {
  return Ir(e, t, n);
}
function Ir(e, t, n = ae) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = me({}, n), c = t && s || !t && r !== "post";
  let f;
  if (dn) {
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
  l.call = (b, C, L) => De(b, a, C, L);
  let g = !1;
  r === "post" ? l.scheduler = (b) => {
    Ae(b, a && a.suspense);
  } : r !== "sync" && (g = !0, l.scheduler = (b, C) => {
    C ? b() : zs(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), g && (b.flags |= 2, a && (b.id = a.uid, b.i = a));
  };
  const d = ll(e, t, l);
  return dn && (f ? f.push(d) : c && d()), d;
}
function gl(e, t, n) {
  const s = this.proxy, i = de(e) ? e.includes(".") ? Mr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  G(t) ? r = t : (r = t.handler, n = t);
  const o = vn(this), l = Ir(i, r.bind(s), n);
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
const ml = /* @__PURE__ */ Symbol("_vte"), Ar = (e) => e.__isTeleport, Ne = /* @__PURE__ */ Symbol("_leaveCb"), Ut = /* @__PURE__ */ Symbol("_enterCb");
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
        (g) => f = g
      );
      c.type !== we && fn(c, f);
      let a = n.subTree && ni(n.subTree);
      if (a && a.type !== we && !Mt(a, c) && Lr(n).type !== we) {
        let g = bs(
          a,
          o,
          s,
          n
        );
        if (fn(a, g), l === "out-in" && c.type !== we)
          return s.isLeaving = !0, g.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete g.afterLeave, a = void 0;
          }, rs(r);
        l === "in-out" && c.type !== we ? g.delayLeave = (d, b, C) => {
          const L = Fr(
            s,
            a
          );
          L[String(a.key)] = a, d[Ne] = () => {
            b(), d[Ne] = void 0, delete f.delayedLeave, a = void 0;
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
    onEnterCancelled: g,
    onBeforeLeave: d,
    onLeave: b,
    onAfterLeave: C,
    onLeaveCancelled: L,
    onBeforeAppear: j,
    onAppear: B,
    onAfterAppear: H,
    onAppearCancelled: R
  } = t, M = String(e.key), k = Fr(n, e), Q = (A, W) => {
    A && De(
      A,
      s,
      9,
      W
    );
  }, V = (A, W) => {
    const q = W[1];
    Q(A, W), U(A) ? A.every((N) => N.length <= 1) && q() : A.length <= 1 && q();
  }, F = {
    mode: o,
    persisted: l,
    beforeEnter(A) {
      let W = c;
      if (!n.isMounted)
        if (r)
          W = j || c;
        else
          return;
      A[Ne] && A[Ne](
        !0
        /* cancelled */
      );
      const q = k[M];
      q && Mt(e, q) && q.el[Ne] && q.el[Ne](), Q(W, [A]);
    },
    enter(A) {
      if (k[M] === e)
        return;
      let W = f, q = a, N = g;
      if (!n.isMounted)
        if (r)
          W = B || f, q = H || a, N = R || g;
        else
          return;
      let X = !1;
      A[Ut] = (Ie) => {
        X || (X = !0, Ie ? Q(N, [A]) : Q(q, [A]), F.delayedLeave && F.delayedLeave(), A[Ut] = void 0);
      };
      const ue = A[Ut].bind(null, !1);
      W ? V(W, [A, ue]) : ue();
    },
    leave(A, W) {
      const q = String(e.key);
      if (A[Ut] && A[Ut](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      Q(d, [A]);
      let N = !1;
      A[Ne] = (ue) => {
        N || (N = !0, W(), ue ? Q(L, [A]) : Q(C, [A]), A[Ne] = void 0, k[q] === e && delete k[q]);
      };
      const X = A[Ne].bind(null, !1);
      k[q] = e, b ? V(b, [A, X]) : X();
    },
    clone(A) {
      const W = bs(
        A,
        t,
        n,
        s,
        i
      );
      return i && i(W), W;
    }
  };
  return F;
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
    if (t & 32 && G(n.default))
      return n.default();
  }
}
function fn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
  return G(e) ? (
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
function nn(e, t, n, s, i = !1) {
  if (U(e)) {
    e.forEach(
      (L, j) => nn(
        L,
        t && (U(t) ? t[j] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (sn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && nn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Js(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, f = t && t.r, a = l.refs === ae ? l.refs = {} : l.refs, g = l.setupState, d = /* @__PURE__ */ ne(g), b = g === ae ? Ki : (L) => si(a, L) ? !1 : se(d, L), C = (L, j) => !(j && si(a, j));
  if (f != null && f !== c) {
    if (ii(t), de(f))
      a[f] = null, b(f) && (g[f] = null);
    else if (/* @__PURE__ */ pe(f)) {
      const L = t;
      C(f, L.k) && (f.value = null), L.k && (a[L.k] = null);
    }
  }
  if (G(c)) {
    Qe();
    try {
      mn(c, l, 12, [o, a]);
    } finally {
      Xe();
    }
  } else {
    const L = de(c), j = /* @__PURE__ */ pe(c);
    if (L || j) {
      const B = () => {
        if (e.f) {
          const H = L ? b(c) ? g[c] : a[c] : C() || !e.k ? c.value : a[e.k];
          if (i)
            U(H) && Ls(H, r);
          else if (U(H))
            H.includes(r) || H.push(r);
          else if (L)
            a[c] = [r], b(c) && (g[c] = a[c]);
          else {
            const R = [r];
            C(c, e.k) && (c.value = R), e.k && (a[e.k] = R);
          }
        } else
          L ? (a[c] = o, b(c) && (g[c] = o)) : j && (C(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
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
const sn = (e) => !!e.type.__asyncLoader, Un = (e) => e.type.__isKeepAlive;
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
      const l = vn(n), c = De(t, n, e, o);
      return l(), Xe(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const ft = (e) => (t, n = Ee) => {
  (!dn || e === "sp") && Jn(e, (...s) => t(...s), n);
}, Cl = ft("bm"), Bs = ft("m"), wl = ft(
  "bu"
), El = ft("u"), Dr = ft(
  "bum"
), Hs = ft("um"), Tl = ft(
  "sp"
), Il = ft("rtg"), Ml = ft("rtc");
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
    for (let a = 0, g = e.length; a < g; a++)
      i[a] = t(
        c ? f ? Ht(We(e[a])) : We(e[a]) : e[a],
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
const xs = (e) => e ? ro(e) ? Js(e) : xs(e.parent) : null, rn = (
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
    $nextTick: (e) => e.n || (e.n = en.bind(e.proxy)),
    $watch: (e) => gl.bind(e)
  })
), os = (e, t) => e !== ae && !e.__isScriptSetup && se(e, t), Ll = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const d = o[t];
      if (d !== void 0)
        switch (d) {
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
    const f = rn[t];
    let a, g;
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
      g = c.config.globalProperties, se(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return os(i, t) ? (i[t] = n, !0) : s !== ae && se(s, t) ? (s[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ae && l[0] !== "$" && se(e, l) || os(t, l) || se(r, l) || se(s, l) || se(rn, l) || se(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
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
    beforeMount: g,
    mounted: d,
    beforeUpdate: b,
    updated: C,
    activated: L,
    deactivated: j,
    beforeDestroy: B,
    beforeUnmount: H,
    destroyed: R,
    unmounted: M,
    render: k,
    renderTracked: Q,
    renderTriggered: V,
    errorCaptured: F,
    serverPrefetch: A,
    // public API
    expose: W,
    inheritAttrs: q,
    // assets
    components: N,
    directives: X,
    filters: ue
  } = t;
  if (f && Fl(f, s, null), o)
    for (const Z in o) {
      const re = o[Z];
      G(re) && (s[Z] = re.bind(n));
    }
  if (i) {
    const Z = i.call(n, n);
    ie(Z) && (e.data = /* @__PURE__ */ Wn(Z));
  }
  if (Ss = !0, r)
    for (const Z in r) {
      const re = r[Z], Ze = G(re) ? re.bind(n, n) : G(re.get) ? re.get.bind(n, n) : ze, ht = !G(re) && G(re.set) ? re.set.bind(n) : ze, et = Le({
        get: Ze,
        set: ht
      });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (be) => et.value = be
      });
    }
  if (l)
    for (const Z in l)
      zr(l[Z], s, n, Z);
  if (c) {
    const Z = G(c) ? c.call(n) : c;
    Reflect.ownKeys(Z).forEach((re) => {
      fl(re, Z[re]);
    });
  }
  a && oi(a, e, "c");
  function oe(Z, re) {
    U(re) ? re.forEach((Ze) => Z(Ze.bind(n))) : re && Z(re.bind(n));
  }
  if (oe(Cl, g), oe(Bs, d), oe(wl, b), oe(El, C), oe(bl, L), oe(xl, j), oe(Al, F), oe(Ml, Q), oe(Il, V), oe(Dr, H), oe(Hs, M), oe(Tl, A), U(W))
    if (W.length) {
      const Z = e.exposed || (e.exposed = {});
      W.forEach((re) => {
        Object.defineProperty(Z, re, {
          get: () => n[re],
          set: (Ze) => n[re] = Ze,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  k && e.render === ze && (e.render = k), q != null && (e.inheritAttrs = q), N && (e.components = N), X && (e.directives = X), A && Rr(e);
}
function Fl(e, t, n = ze) {
  U(e) && (e = Cs(e));
  for (const s in e) {
    const i = e[s];
    let r;
    ie(i) ? "default" in i ? r = tn(
      i.from || s,
      i.default,
      !0
    ) : r = tn(i.from || s) : r = tn(i), /* @__PURE__ */ pe(r) ? Object.defineProperty(t, s, {
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
  let i = s.includes(".") ? Mr(n, s) : () => n[s];
  if (de(e)) {
    const r = t[e];
    G(r) && Lt(i, r);
  } else if (G(e))
    Lt(i, e.bind(n));
  else if (ie(e))
    if (U(e))
      e.forEach((r) => zr(r, t, n, s));
    else {
      const r = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(r) && Lt(i, r, e);
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
  methods: Yt,
  computed: Yt,
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
  components: Yt,
  directives: Yt,
  // watch
  watch: Rl,
  // provide / inject
  provide: li,
  inject: Nl
};
function li(e, t) {
  return t ? e ? function() {
    return me(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nl(e, t) {
  return Yt(Cs(e), Cs(t));
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
function Yt(e, t) {
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
    G(s) || (s = me({}, s)), i != null && !ie(i) && (i = null);
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
      use(a, ...g) {
        return o.has(a) || (a && G(a.install) ? (o.add(a), a.install(f, ...g)) : G(a) && (o.add(a), a(f, ...g))), f;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), f;
      },
      component(a, g) {
        return g ? (r.components[a] = g, f) : r.components[a];
      },
      directive(a, g) {
        return g ? (r.directives[a] = g, f) : r.directives[a];
      },
      mount(a, g, d) {
        if (!c) {
          const b = f._ceVNode || Te(s, i);
          return b.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), g && t ? t(b, a) : e(b, a, d), c = !0, f._container = a, a.__vue_app__ = f, Js(b.component);
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
      provide(a, g) {
        return r.provides[a] = g, f;
      },
      runWithContext(a) {
        const g = $t;
        $t = f;
        try {
          return a();
        } finally {
          $t = g;
        }
      }
    };
    return f;
  };
}
let $t = null;
const jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Ft(t)}Modifiers`];
function zl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || ae;
  let i = n;
  const r = t.startsWith("update:"), o = r && jl(s, t.slice(7));
  o && (o.trim && (i = n.map((a) => de(a) ? a.trim() : a)), o.number && (i = n.map(Eo)));
  let l, c = s[l = Zn(t)] || // also try camelCase event handler (#2249)
  s[l = Zn(Be(t))];
  !c && r && (c = s[l = Zn(Ft(t))]), c && De(
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
  if (!G(e)) {
    const c = (f) => {
      const a = Hr(f, t, !0);
      a && (l = !0, me(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (ie(e) && s.set(e, null), null) : (U(r) ? r.forEach((c) => o[c] = null) : me(o, r), ie(e) && s.set(e, o), o);
}
function qn(e, t) {
  return !e || !kn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Ft(t)) || se(e, t));
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
    props: g,
    data: d,
    setupState: b,
    ctx: C,
    inheritAttrs: L
  } = e, j = An(e);
  let B, H;
  try {
    if (n.shapeFlag & 4) {
      const M = i || s, k = M;
      B = qe(
        f.call(
          k,
          M,
          a,
          g,
          b,
          d,
          C
        )
      ), H = l;
    } else {
      const M = t;
      B = qe(
        M.length > 1 ? M(
          g,
          { attrs: l, slots: o, emit: c }
        ) : M(
          g,
          null
        )
      ), H = t.props ? l : Hl(l);
    }
  } catch (M) {
    on.length = 0, Kn(M, e, 1), B = Te(we);
  }
  let R = B;
  if (H && L !== !1) {
    const M = Object.keys(H), { shapeFlag: k } = R;
    M.length && k & 7 && (r && M.some(Dn) && (H = Wl(
      H,
      r
    )), R = bt(R, H, !1, !0));
  }
  return n.dirs && (R = bt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && fn(R, n.transition), B = R, An(j), B;
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
      for (let g = 0; g < a.length; g++) {
        const d = a[g];
        if (Wr(o, s, d) && !qn(f, d))
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
      for (let g = 0; g < a.length; g++) {
        let d = a[g];
        if (qn(e.emitsOptions, d))
          continue;
        const b = t[d];
        if (c)
          if (se(r, d))
            b !== r[d] && (r[d] = b, f = !0);
          else {
            const C = Be(d);
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
          b !== r[d] && (r[d] = b, f = !0);
      }
    }
  } else {
    Jr(e, t, i, r) && (f = !0);
    let a;
    for (const g in l)
      (!t || // for camelCase
      !se(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ft(g)) === g || !se(t, a))) && (c ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[g] = ws(
        c,
        l,
        g,
        void 0,
        e,
        !0
      )) : delete i[g]);
    if (r !== l)
      for (const g in r)
        (!t || !se(t, g)) && (delete r[g], f = !0);
  }
  f && ct(e.attrs, "set", "");
}
function Jr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Qt(c))
        continue;
      const f = t[c];
      let a;
      i && se(i, a = Be(c)) ? !r || !r.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : qn(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ ne(n), f = l || ae;
    for (let a = 0; a < r.length; a++) {
      const g = r[a];
      n[g] = ws(
        i,
        c,
        g,
        f[g],
        e,
        !se(f, g)
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
      if (o.type !== Function && !o.skipFactory && G(c)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const a = vn(i);
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
    ] && (s === "" || s === Ft(n)) && (s = !0));
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
  if (!G(e)) {
    const a = (g) => {
      c = !0;
      const [d, b] = qr(g, t, !0);
      me(o, d), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return ie(e) && s.set(e, jt), jt;
  if (U(r))
    for (let a = 0; a < r.length; a++) {
      const g = Be(r[a]);
      ui(g) && (o[g] = ae);
    }
  else if (r)
    for (const a in r) {
      const g = Be(a);
      if (ui(g)) {
        const d = r[a], b = o[g] = U(d) || G(d) ? { type: d } : me({}, d), C = b.type;
        let L = !1, j = !0;
        if (U(C))
          for (let B = 0; B < C.length; ++B) {
            const H = C[B], R = G(H) && H.name;
            if (R === "Boolean") {
              L = !0;
              break;
            } else
              R === "String" && (j = !1);
          }
        else
          L = G(C) && C.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = L, b[
          1
          /* shouldCastTrue */
        ] = j, (L || se(b, "default")) && l.push(g);
      }
    }
  const f = [o, l];
  return ie(e) && s.set(e, f), f;
}
function ui(e) {
  return e[0] !== "$" && !Qt(e);
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
    if (G(r))
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
    parentNode: g,
    nextSibling: d,
    setScopeId: b = ze,
    insertStaticContent: C
  } = e, L = (u, m, S, I = null, w = null, E = null, P = void 0, v = null, p = !!m.dynamicChildren) => {
    if (u === m)
      return;
    u && !Mt(u, m) && (I = nt(u), be(u, w, E, !0), u = null), m.patchFlag === -2 && (p = !1, m.dynamicChildren = null);
    const { type: h, ref: y, shapeFlag: x } = m;
    switch (h) {
      case Yn:
        j(u, m, S, I);
        break;
      case we:
        B(u, m, S, I);
        break;
      case as:
        u == null && H(m, S, I, P);
        break;
      case Re:
        N(
          u,
          m,
          S,
          I,
          w,
          E,
          P,
          v,
          p
        );
        break;
      default:
        x & 1 ? k(
          u,
          m,
          S,
          I,
          w,
          E,
          P,
          v,
          p
        ) : x & 6 ? X(
          u,
          m,
          S,
          I,
          w,
          E,
          P,
          v,
          p
        ) : (x & 64 || x & 128) && h.process(
          u,
          m,
          S,
          I,
          w,
          E,
          P,
          v,
          p,
          st
        );
    }
    y != null && w ? nn(y, u && u.ref, E, m || u, !m) : y == null && u && u.ref != null && nn(u.ref, null, E, u, !0);
  }, j = (u, m, S, I) => {
    if (u == null)
      s(
        m.el = l(m.children),
        S,
        I
      );
    else {
      const w = m.el = u.el;
      m.children !== u.children && f(w, m.children);
    }
  }, B = (u, m, S, I) => {
    u == null ? s(
      m.el = c(m.children || ""),
      S,
      I
    ) : m.el = u.el;
  }, H = (u, m, S, I) => {
    [u.el, u.anchor] = C(
      u.children,
      m,
      S,
      I,
      u.el,
      u.anchor
    );
  }, R = ({ el: u, anchor: m }, S, I) => {
    let w;
    for (; u && u !== m; )
      w = d(u), s(u, S, I), u = w;
    s(m, S, I);
  }, M = ({ el: u, anchor: m }) => {
    let S;
    for (; u && u !== m; )
      S = d(u), i(u), u = S;
    i(m);
  }, k = (u, m, S, I, w, E, P, v, p) => {
    if (m.type === "svg" ? P = "svg" : m.type === "math" && (P = "mathml"), u == null)
      Q(
        m,
        S,
        I,
        w,
        E,
        P,
        v,
        p
      );
    else {
      const h = u.el && u.el._isVueCE ? u.el : null;
      try {
        h && h._beginPatch(), A(
          u,
          m,
          w,
          E,
          P,
          v,
          p
        );
      } finally {
        h && h._endPatch();
      }
    }
  }, Q = (u, m, S, I, w, E, P, v) => {
    let p, h;
    const { props: y, shapeFlag: x, transition: T, dirs: _ } = u;
    if (p = u.el = o(
      u.type,
      E,
      y && y.is,
      y
    ), x & 8 ? a(p, u.children) : x & 16 && F(
      u.children,
      p,
      null,
      I,
      w,
      cs(u, E),
      P,
      v
    ), _ && Ct(u, null, I, "created"), V(p, u, u.scopeId, P, I), y) {
      for (const K in y)
        K !== "value" && !Qt(K) && r(p, K, null, y[K], E, I);
      "value" in y && r(p, "value", null, y.value, E), (h = y.onVnodeBeforeMount) && Ke(h, I, u);
    }
    _ && Ct(u, null, I, "beforeMount");
    const O = ec(w, T);
    O && T.beforeEnter(p), s(p, m, S), ((h = y && y.onVnodeMounted) || O || _) && Ae(() => {
      try {
        h && Ke(h, I, u), O && T.enter(p), _ && Ct(u, null, I, "mounted");
      } finally {
      }
    }, w);
  }, V = (u, m, S, I, w) => {
    if (S && b(u, S), I)
      for (let E = 0; E < I.length; E++)
        b(u, I[E]);
    if (w) {
      let E = w.subTree;
      if (m === E || to(E.type) && (E.ssContent === m || E.ssFallback === m)) {
        const P = w.vnode;
        V(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          w.parent
        );
      }
    }
  }, F = (u, m, S, I, w, E, P, v, p = 0) => {
    for (let h = p; h < u.length; h++) {
      const y = u[h] = v ? lt(u[h]) : qe(u[h]);
      L(
        null,
        y,
        m,
        S,
        I,
        w,
        E,
        P,
        v
      );
    }
  }, A = (u, m, S, I, w, E, P) => {
    const v = m.el = u.el;
    let { patchFlag: p, dynamicChildren: h, dirs: y } = m;
    p |= u.patchFlag & 16;
    const x = u.props || ae, T = m.props || ae;
    let _;
    if (S && wt(S, !1), (_ = T.onVnodeBeforeUpdate) && Ke(_, S, m, u), y && Ct(m, u, S, "beforeUpdate"), S && wt(S, !0), // HMR updated, force full diff
    // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    h && (!u.dynamicChildren || u.dynamicChildren.length !== h.length) && (p = 0, P = !1, h = null), (x.innerHTML && T.innerHTML == null || x.textContent && T.textContent == null) && a(v, ""), h ? W(
      u.dynamicChildren,
      h,
      v,
      S,
      I,
      cs(m, w),
      E
    ) : P || re(
      u,
      m,
      v,
      null,
      S,
      I,
      cs(m, w),
      E,
      !1
    ), p > 0) {
      if (p & 16)
        q(v, x, T, S, w);
      else if (p & 2 && x.class !== T.class && r(v, "class", null, T.class, w), p & 4 && r(v, "style", x.style, T.style, w), p & 8) {
        const O = m.dynamicProps;
        for (let K = 0; K < O.length; K++) {
          const z = O[K], D = x[z], J = T[z];
          (J !== D || z === "value") && r(v, z, D, J, w, S);
        }
      }
      p & 1 && u.children !== m.children && a(v, m.children);
    } else
      !P && h == null && q(v, x, T, S, w);
    ((_ = T.onVnodeUpdated) || y) && Ae(() => {
      _ && Ke(_, S, m, u), y && Ct(m, u, S, "updated");
    }, I);
  }, W = (u, m, S, I, w, E, P) => {
    for (let v = 0; v < m.length; v++) {
      const p = u[v], h = m[v], y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        p.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (p.type === Re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(p, h) || // - In the case of a component, it could contain anything.
        p.shapeFlag & 198) ? g(p.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      L(
        p,
        h,
        y,
        null,
        I,
        w,
        E,
        P,
        !0
      );
    }
  }, q = (u, m, S, I, w) => {
    if (m !== S) {
      if (m !== ae)
        for (const E in m)
          !Qt(E) && !(E in S) && r(
            u,
            E,
            m[E],
            null,
            w,
            I
          );
      for (const E in S) {
        if (Qt(E))
          continue;
        const P = S[E], v = m[E];
        P !== v && E !== "value" && r(u, E, v, P, w, I);
      }
      "value" in S && r(u, "value", m.value, S.value, w);
    }
  }, N = (u, m, S, I, w, E, P, v, p) => {
    const h = m.el = u ? u.el : l(""), y = m.anchor = u ? u.anchor : l("");
    let { patchFlag: x, dynamicChildren: T, slotScopeIds: _ } = m;
    _ && (v = v ? v.concat(_) : _), u == null ? (s(h, S, I), s(y, S, I), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      S,
      y,
      w,
      E,
      P,
      v,
      p
    )) : x > 0 && x & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === T.length ? (W(
      u.dynamicChildren,
      T,
      S,
      w,
      E,
      P,
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
      S,
      y,
      w,
      E,
      P,
      v,
      p
    );
  }, X = (u, m, S, I, w, E, P, v, p) => {
    m.slotScopeIds = v, u == null ? m.shapeFlag & 512 ? w.ctx.activate(
      m,
      S,
      I,
      P,
      p
    ) : ue(
      m,
      S,
      I,
      w,
      E,
      P,
      p
    ) : Ie(u, m, p);
  }, ue = (u, m, S, I, w, E, P) => {
    const v = u.component = uc(
      u,
      I,
      w
    );
    if (Un(u) && (v.ctx.renderer = st), fc(v, !1, P), v.asyncDep) {
      if (w && w.registerDep(v, oe, P), !u.el) {
        const p = v.subTree = Te(we);
        B(null, p, m, S), u.placeholder = p.el;
      }
    } else
      oe(
        v,
        u,
        m,
        S,
        w,
        E,
        P
      );
  }, Ie = (u, m, S) => {
    const I = m.component = u.component;
    if (Vl(u, m, S))
      if (I.asyncDep && !I.asyncResolved) {
        Z(I, m, S);
        return;
      } else
        I.next = m, I.update();
    else
      m.el = u.el, I.vnode = m;
  }, oe = (u, m, S, I, w, E, P) => {
    const v = () => {
      if (u.isMounted) {
        let { next: x, bu: T, u: _, parent: O, vnode: K } = u;
        {
          const le = Zr(u);
          if (le) {
            x && (x.el = K.el, Z(u, x, P)), le.asyncDep.then(() => {
              Ae(() => {
                u.isUnmounted || h();
              }, w);
            });
            return;
          }
        }
        let z = x, D;
        wt(u, !1), x ? (x.el = K.el, Z(u, x, P)) : x = K, T && es(T), (D = x.props && x.props.onVnodeBeforeUpdate) && Ke(D, O, x, K), wt(u, !0);
        const J = ls(u), te = u.subTree;
        u.subTree = J, L(
          te,
          J,
          // parent may have changed if it's in a teleport
          g(te.el),
          // anchor may have changed if it's in a fragment
          nt(te),
          u,
          w,
          E
        ), x.el = J.el, z === null && Kl(u, J.el), _ && Ae(_, w), (D = x.props && x.props.onVnodeUpdated) && Ae(
          () => Ke(D, O, x, K),
          w
        );
      } else {
        let x;
        const { el: T, props: _ } = m, { bm: O, m: K, parent: z, root: D, type: J } = u, te = sn(m);
        if (wt(u, !1), O && es(O), !te && (x = _ && _.onVnodeBeforeMount) && Ke(x, z, m), wt(u, !0), T && Vt) {
          const le = () => {
            u.subTree = ls(u), Vt(
              T,
              u.subTree,
              u,
              w,
              null
            );
          };
          te && J.__asyncHydrate ? J.__asyncHydrate(
            T,
            u,
            le
          ) : le();
        } else {
          D.ce && D.ce._hasShadowRoot() && D.ce._injectChildStyle(
            J,
            u.parent ? u.parent.type : void 0
          );
          const le = u.subTree = ls(u);
          L(
            null,
            le,
            S,
            I,
            u,
            w,
            E
          ), m.el = le.el;
        }
        if (K && Ae(K, w), !te && (x = _ && _.onVnodeMounted)) {
          const le = m;
          Ae(
            () => Ke(x, z, le),
            w
          );
        }
        (m.shapeFlag & 256 || z && sn(z.vnode) && z.vnode.shapeFlag & 256) && u.a && Ae(u.a, w), u.isMounted = !0, m = S = I = null;
      }
    };
    u.scope.on();
    const p = u.effect = new rr(v);
    u.scope.off();
    const h = u.update = p.run.bind(p), y = u.job = p.runIfDirty.bind(p);
    y.i = u, y.id = u.uid, p.scheduler = () => zs(y), wt(u, !0), h();
  }, Z = (u, m, S) => {
    m.component = u;
    const I = u.vnode.props;
    u.vnode = m, u.next = null, Jl(u, m.props, I, S), Ql(u, m.children, S), Qe(), ti(u), Xe();
  }, re = (u, m, S, I, w, E, P, v, p = !1) => {
    const h = u && u.children, y = u ? u.shapeFlag : 0, x = m.children, { patchFlag: T, shapeFlag: _ } = m;
    if (T > 0) {
      if (T & 128) {
        ht(
          h,
          x,
          S,
          I,
          w,
          E,
          P,
          v,
          p
        );
        return;
      } else if (T & 256) {
        Ze(
          h,
          x,
          S,
          I,
          w,
          E,
          P,
          v,
          p
        );
        return;
      }
    }
    _ & 8 ? (y & 16 && dt(h, w, E), x !== h && a(S, x)) : y & 16 ? _ & 16 ? ht(
      h,
      x,
      S,
      I,
      w,
      E,
      P,
      v,
      p
    ) : dt(h, w, E, !0) : (y & 8 && a(S, ""), _ & 16 && F(
      x,
      S,
      I,
      w,
      E,
      P,
      v,
      p
    ));
  }, Ze = (u, m, S, I, w, E, P, v, p) => {
    u = u || jt, m = m || jt;
    const h = u.length, y = m.length, x = Math.min(h, y);
    let T;
    for (T = 0; T < x; T++) {
      const _ = m[T] = p ? lt(m[T]) : qe(m[T]);
      L(
        u[T],
        _,
        S,
        null,
        w,
        E,
        P,
        v,
        p
      );
    }
    h > y ? dt(
      u,
      w,
      E,
      !0,
      !1,
      x
    ) : F(
      m,
      S,
      I,
      w,
      E,
      P,
      v,
      p,
      x
    );
  }, ht = (u, m, S, I, w, E, P, v, p) => {
    let h = 0;
    const y = m.length;
    let x = u.length - 1, T = y - 1;
    for (; h <= x && h <= T; ) {
      const _ = u[h], O = m[h] = p ? lt(m[h]) : qe(m[h]);
      if (Mt(_, O))
        L(
          _,
          O,
          S,
          null,
          w,
          E,
          P,
          v,
          p
        );
      else
        break;
      h++;
    }
    for (; h <= x && h <= T; ) {
      const _ = u[x], O = m[T] = p ? lt(m[T]) : qe(m[T]);
      if (Mt(_, O))
        L(
          _,
          O,
          S,
          null,
          w,
          E,
          P,
          v,
          p
        );
      else
        break;
      x--, T--;
    }
    if (h > x) {
      if (h <= T) {
        const _ = T + 1, O = _ < y ? m[_].el : I;
        for (; h <= T; )
          L(
            null,
            m[h] = p ? lt(m[h]) : qe(m[h]),
            S,
            O,
            w,
            E,
            P,
            v,
            p
          ), h++;
      }
    } else if (h > T)
      for (; h <= x; )
        be(u[h], w, E, !0), h++;
    else {
      const _ = h, O = h, K = /* @__PURE__ */ new Map();
      for (h = O; h <= T; h++) {
        const ye = m[h] = p ? lt(m[h]) : qe(m[h]);
        ye.key != null && K.set(ye.key, h);
      }
      let z, D = 0;
      const J = T - O + 1;
      let te = !1, le = 0;
      const Ve = new Array(J);
      for (h = 0; h < J; h++)
        Ve[h] = 0;
      for (h = _; h <= x; h++) {
        const ye = u[h];
        if (D >= J) {
          be(ye, w, E, !0);
          continue;
        }
        let Me;
        if (ye.key != null)
          Me = K.get(ye.key);
        else
          for (z = O; z <= T; z++)
            if (Ve[z - O] === 0 && Mt(ye, m[z])) {
              Me = z;
              break;
            }
        Me === void 0 ? be(ye, w, E, !0) : (Ve[Me - O] = h + 1, Me >= le ? le = Me : te = !0, L(
          ye,
          m[Me],
          S,
          null,
          w,
          E,
          P,
          v,
          p
        ), D++);
      }
      const Pt = te ? tc(Ve) : jt;
      for (z = Pt.length - 1, h = J - 1; h >= 0; h--) {
        const ye = O + h, Me = m[ye], Oe = m[ye + 1], Ys = ye + 1 < y ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Oe.el || eo(Oe)
        ) : I;
        Ve[h] === 0 ? L(
          null,
          Me,
          S,
          Ys,
          w,
          E,
          P,
          v,
          p
        ) : te && (z < 0 || h !== Pt[z] ? et(Me, S, Ys, 2) : z--);
      }
    }
  }, et = (u, m, S, I, w = null) => {
    const { el: E, type: P, transition: v, children: p, shapeFlag: h } = u;
    if (h & 6) {
      et(u.component.subTree, m, S, I);
      return;
    }
    if (h & 128) {
      u.suspense.move(m, S, I);
      return;
    }
    if (h & 64) {
      P.move(u, m, S, st);
      return;
    }
    if (P === Re) {
      s(E, m, S);
      for (let x = 0; x < p.length; x++)
        et(p[x], m, S, I);
      s(u.anchor, m, S);
      return;
    }
    if (P === as) {
      R(u, m, S);
      return;
    }
    if (I !== 2 && h & 1 && v)
      if (I === 0)
        v.persisted && !E[Ne] ? s(E, m, S) : (v.beforeEnter(E), s(E, m, S), Ae(() => v.enter(E), w));
      else {
        const { leave: x, delayLeave: T, afterLeave: _ } = v, O = () => {
          u.ctx.isUnmounted ? i(E) : s(E, m, S);
        }, K = () => {
          const z = E._isLeaving || !!E[Ne];
          E._isLeaving && E[Ne](
            !0
            /* cancelled */
          ), v.persisted && !z ? O() : x(E, () => {
            O(), _ && _();
          });
        };
        T ? T(E, O, K) : K();
      }
    else
      s(E, m, S);
  }, be = (u, m, S, I = !1, w = !1) => {
    const {
      type: E,
      props: P,
      ref: v,
      children: p,
      dynamicChildren: h,
      shapeFlag: y,
      patchFlag: x,
      dirs: T,
      cacheIndex: _,
      memo: O
    } = u;
    if (x === -2 && (w = !1), v != null && (Qe(), nn(v, null, S, u, !0), Xe()), _ != null && (m.renderCache[_] = void 0), y & 256) {
      m.ctx.deactivate(u);
      return;
    }
    const K = y & 1 && T, z = !sn(u);
    let D;
    if (z && (D = P && P.onVnodeBeforeUnmount) && Ke(D, m, u), y & 6)
      xt(u.component, S, I);
    else {
      if (y & 128) {
        u.suspense.unmount(S, I);
        return;
      }
      K && Ct(u, null, m, "beforeUnmount"), y & 64 ? u.type.remove(
        u,
        m,
        S,
        st,
        I
      ) : h && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !h.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Re || x > 0 && x & 64) ? dt(
        h,
        m,
        S,
        !1,
        !0
      ) : (E === Re && x & 384 || !w && y & 16) && dt(p, m, S), I && tt(u);
    }
    const J = O != null && _ == null;
    (z && (D = P && P.onVnodeUnmounted) || K || J) && Ae(() => {
      D && Ke(D, m, u), K && Ct(u, null, m, "unmounted"), J && (u.el = null);
    }, S);
  }, tt = (u) => {
    const { type: m, el: S, anchor: I, transition: w } = u;
    if (m === Re) {
      Xn(S, I);
      return;
    }
    if (m === as) {
      M(u);
      return;
    }
    const E = () => {
      i(S), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (u.shapeFlag & 1 && w && !w.persisted) {
      const { leave: P, delayLeave: v } = w, p = () => P(S, E);
      v ? v(u.el, E, p) : p();
    } else
      E();
  }, Xn = (u, m) => {
    let S;
    for (; u !== m; )
      S = d(u), i(u), u = S;
    i(m);
  }, xt = (u, m, S) => {
    const { bum: I, scope: w, job: E, subTree: P, um: v, m: p, a: h } = u;
    fi(p), fi(h), I && es(I), w.stop(), E && (E.flags |= 8, be(P, u, m, S)), v && Ae(v, m), Ae(() => {
      u.isUnmounted = !0;
    }, m);
  }, dt = (u, m, S, I = !1, w = !1, E = 0) => {
    for (let P = E; P < u.length; P++)
      be(u[P], m, S, I, w);
  }, nt = (u) => {
    if (u.shapeFlag & 6)
      return nt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const m = d(u.anchor || u.el), S = m && m[ml];
    return S ? d(S) : m;
  };
  let pt = !1;
  const St = (u, m, S) => {
    let I;
    u == null ? m._vnode && (be(m._vnode, null, null, !0), I = m._vnode.component) : L(
      m._vnode || null,
      u,
      m,
      null,
      null,
      null,
      S
    ), m._vnode = u, pt || (pt = !0, ti(I), Cr(), pt = !1);
  }, st = {
    p: L,
    um: be,
    m: et,
    r: tt,
    mt: ue,
    mc: F,
    pc: re,
    pbc: W,
    n: nt,
    o: e
  };
  let Wt, Vt;
  return t && ([Wt, Vt] = t(
    st
  )), {
    render: St,
    hydrate: Wt,
    createApp: Dl(St, Wt)
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
const Re = /* @__PURE__ */ Symbol.for("v-fgt"), Yn = /* @__PURE__ */ Symbol.for("v-txt"), we = /* @__PURE__ */ Symbol.for("v-cmt"), as = /* @__PURE__ */ Symbol.for("v-stc"), on = [];
let $e = null;
function fe(e = !1) {
  on.push($e = e ? null : []);
}
function sc() {
  on.pop(), $e = on[on.length - 1] || null;
}
let hn = 1;
function $n(e, t = !1) {
  hn += e, e < 0 && $e && t && ($e.hasOnce = !0);
}
function no(e) {
  return e.dynamicChildren = hn > 0 ? $e || jt : null, sc(), hn > 0 && $e && $e.push(e), e;
}
function he(e, t, n, s, i, r) {
  return no(
    Y(
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
function Mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const so = ({ key: e }) => e ?? null, wn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || /* @__PURE__ */ pe(e) || G(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function Y(e, t = null, n = null, s = 0, i = null, r = e === Re ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && so(t),
    ref: t && wn(t),
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
  return l ? (Pn(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= de(n) ? 8 : 16), hn > 0 && // avoid a block node from tracking itself
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
    return n && Pn(l, n), hn > 0 && !r && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (gc(e) && (e = e.__vccOpts), t) {
    t = oc(t);
    let { class: l, style: c } = t;
    l && !de(l) && (t.class = At(l)), ie(c) && (/* @__PURE__ */ Vn(c) && !U(c) && (c = me({}, c)), t.style = _t(c));
  }
  const o = de(e) ? 1 : to(e) ? 128 : Ar(e) ? 64 : ie(e) ? 4 : G(e) ? 2 : 0;
  return Y(
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
      n && r ? U(r) ? r.concat(wn(t)) : [r, wn(t)] : wn(t)
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
  return c && s && fn(
    a,
    c.clone(a)
  ), a;
}
function io(e = " ", t = 0) {
  return Te(Yn, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (fe(), ic(we, null, e)) : Te(we, null, e);
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
  else if (G(t)) {
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
        t.class !== s.class && (t.class = At([t.class, s.class]));
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
    (n) => dn = n
  );
}
const vn = (e) => {
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
let dn = !1;
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
    const i = e.setupContext = s.length > 1 ? pc(e) : null, r = vn(e), o = mn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ji(o);
    if (Xe(), r(), (l || e.sp) && !sn(e) && Rr(e), l) {
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
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ie(t) && (e.setupState = br(t)), oo(e, n);
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
    const i = vn(e);
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
      if (n in rn)
        return rn[n](e);
    },
    has(t, n) {
      return n in t || n in rn;
    }
  })) : e.proxy;
}
function gc(e) {
  return G(e) && "__vccOpts" in e;
}
const Le = (e, t) => /* @__PURE__ */ rl(e, t, dn);
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
}, gt = "transition", Jt = "animation", pn = /* @__PURE__ */ Symbol("_vtc"), co = {
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
  for (const N in e)
    N in co || (t[N] = e[N]);
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
    leaveFromClass: g = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, C = Ec(i), L = C && C[0], j = C && C[1], {
    onBeforeEnter: B,
    onEnter: H,
    onEnterCancelled: R,
    onLeave: M,
    onLeaveCancelled: k,
    onBeforeAppear: Q = B,
    onAppear: V = H,
    onAppearCancelled: F = R
  } = t, A = (N, X, ue, Ie) => {
    N._enterCancelled = Ie, Tt(N, X ? a : l), Tt(N, X ? f : o), ue && ue();
  }, W = (N, X) => {
    N._isLeaving = !1, Tt(N, g), Tt(N, b), Tt(N, d), X && X();
  }, q = (N) => (X, ue) => {
    const Ie = N ? V : H, oe = () => A(X, N, ue);
    Et(Ie, [X, oe]), yi(() => {
      Tt(X, N ? c : r), rt(X, N ? a : l), vi(Ie) || _i(X, s, L, oe);
    });
  };
  return me(t, {
    onBeforeEnter(N) {
      Et(B, [N]), rt(N, r), rt(N, o);
    },
    onBeforeAppear(N) {
      Et(Q, [N]), rt(N, c), rt(N, f);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(N, X) {
      N._isLeaving = !0;
      const ue = () => W(N, X);
      rt(N, g), N._enterCancelled ? (rt(N, d), Si(N)) : (Si(N), rt(N, d)), yi(() => {
        N._isLeaving && (Tt(N, g), rt(N, b), vi(M) || _i(N, s, j, ue));
      }), Et(M, [N, ue]);
    },
    onEnterCancelled(N) {
      A(N, !1, void 0, !0), Et(R, [N]);
    },
    onAppearCancelled(N) {
      A(N, !0, void 0, !0), Et(F, [N]);
    },
    onLeaveCancelled(N) {
      W(N), Et(k, [N]);
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
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[pn] || (e[pn] = /* @__PURE__ */ new Set())).add(t);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[pn];
  n && (n.delete(t), n.size || (e[pn] = void 0));
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
  const { type: o, timeout: l, propCount: c } = Ic(e, t);
  if (!o)
    return s();
  const f = o + "end";
  let a = 0;
  const g = () => {
    e.removeEventListener(f, d), r();
  }, d = (b) => {
    b.target === e && ++a >= c && g();
  };
  setTimeout(() => {
    a < c && g();
  }, l + 1), e.addEventListener(f, d);
}
function Ic(e, t) {
  const n = window.getComputedStyle(e), s = (C) => (n[C] || "").split(", "), i = s(`${gt}Delay`), r = s(`${gt}Duration`), o = bi(i, r), l = s(`${Jt}Delay`), c = s(`${Jt}Duration`), f = bi(l, c);
  let a = null, g = 0, d = 0;
  t === gt ? o > 0 && (a = gt, g = o, d = r.length) : t === Jt ? f > 0 && (a = Jt, g = f, d = c.length) : (g = Math.max(o, f), a = g > 0 ? o > f ? gt : Jt : null, d = a ? a === gt ? r.length : c.length : 0);
  const b = a === gt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${gt}Property`).toString()
  );
  return {
    type: a,
    timeout: g,
    propCount: d,
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
function Mc(e, t, n) {
  const s = e[pn];
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
          n[l] == null && Gt(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Gt(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? Pc(
        e,
        o,
        !de(t) && t ? t[o] : void 0,
        l
      ) || Gt(s, o, l) : Gt(s, o, "");
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
function Gt(e, t, n) {
  if (U(n))
    n.forEach((s) => Gt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fc(e, t);
    wi.test(n) ? e.setProperty(
      Ft(s),
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
function Ii(e, t, n, s, i, r = $o(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ti, t.slice(6, t.length)) : e.setAttributeNS(Ti, t, n) : n == null || r && !Xi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ke(n) ? String(n) : n
  );
}
function Mi(e, t, n, s, i) {
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
  return [e[2] === ":" ? e.slice(3) : Ft(e.slice(2)), t];
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
  t === "class" ? Mc(e, s, o) : t === "style" ? $c(e, n, s) : kn(t) ? Dn(t) || kc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, s, o)) ? (Mi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Uc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !de(s))) ? Mi(e, Be(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ii(e, t, s, o));
};
function Kc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Oi(t) && G(n));
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
}, En = (e, t) => {
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
    !G(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
function Is(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ln;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ln || (ln = {}));
function ea() {
  const e = nr(!0), t = e.run(() => /* @__PURE__ */ ge({}));
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
function Rt(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const ta = (e) => e(), Fi = Symbol(), ds = Symbol();
function Ms(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], i = e[n];
    Is(i) && Is(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ pe(s) && !/* @__PURE__ */ at(s) ? e[n] = Ms(i, s) : e[n] = s;
  }
  return e;
}
const na = (
  /* istanbul ignore next */
  Symbol()
);
function sa(e) {
  return !Is(e) || !Object.prototype.hasOwnProperty.call(e, na);
}
const { assign: mt } = Object;
function ia(e) {
  return !!(/* @__PURE__ */ pe(e) && e.effect);
}
function ra(e, t, n, s) {
  const { state: i, actions: r, getters: o } = t, l = n.state.value[e];
  let c;
  function f() {
    l || (n.state.value[e] = i ? i() : {});
    const a = /* @__PURE__ */ tl(n.state.value[e]);
    return mt(a, r, Object.keys(o || {}).reduce((g, d) => (g[d] = js(Le(() => {
      Gn(n);
      const b = n._s.get(e);
      return o[d].call(b, b);
    })), g), {}));
  }
  return c = ho(e, f, t, n, s, !0), c;
}
function ho(e, t, n = {}, s, i, r) {
  let o;
  const l = mt({ actions: {} }, n), c = { deep: !0 };
  let f, a, g = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), b;
  const C = s.state.value[e];
  !r && !C && (s.state.value[e] = {});
  let L;
  function j(F) {
    let A;
    f = a = !1, typeof F == "function" ? (F(s.state.value[e]), A = {
      type: ln.patchFunction,
      storeId: e,
      events: b
    }) : (Ms(s.state.value[e], F), A = {
      type: ln.patchObject,
      payload: F,
      storeId: e,
      events: b
    });
    const W = L = Symbol();
    en().then(() => {
      L === W && (f = !0);
    }), a = !0, Rt(g, A, s.state.value[e]);
  }
  const B = r ? function() {
    const { state: A } = n, W = A ? A() : {};
    this.$patch((q) => {
      mt(q, W);
    });
  } : (
    /* istanbul ignore next */
    fo
  );
  function H() {
    o.stop(), g.clear(), d.clear(), s._s.delete(e);
  }
  const R = (F, A = "") => {
    if (Fi in F)
      return F[ds] = A, F;
    const W = function() {
      Gn(s);
      const q = Array.from(arguments), N = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
      function ue(Z) {
        N.add(Z);
      }
      function Ie(Z) {
        X.add(Z);
      }
      Rt(d, {
        args: q,
        name: W[ds],
        store: k,
        after: ue,
        onError: Ie
      });
      let oe;
      try {
        oe = F.apply(this && this.$id === e ? this : k, q);
      } catch (Z) {
        throw Rt(X, Z), Z;
      }
      return oe instanceof Promise ? oe.then((Z) => (Rt(N, Z), Z)).catch((Z) => (Rt(X, Z), Promise.reject(Z))) : (Rt(N, oe), oe);
    };
    return W[Fi] = !0, W[ds] = A, W;
  }, M = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: $i.bind(null, d),
    $patch: j,
    $reset: B,
    $subscribe(F, A = {}) {
      const W = $i(g, F, A.detached, () => q()), q = o.run(() => Lt(() => s.state.value[e], (N) => {
        (A.flush === "sync" ? a : f) && F({
          storeId: e,
          type: ln.direct,
          events: b
        }, N);
      }, mt({}, c, A)));
      return W;
    },
    $dispose: H
  }, k = /* @__PURE__ */ Wn(M);
  s._s.set(e, k);
  const V = (s._a && s._a.runWithContext || ta)(() => s._e.run(() => (o = nr()).run(() => t({ action: R }))));
  for (const F in V) {
    const A = V[F];
    if (/* @__PURE__ */ pe(A) && !ia(A) || /* @__PURE__ */ at(A))
      r || (C && sa(A) && (/* @__PURE__ */ pe(A) ? A.value = C[F] : Ms(A, C[F])), s.state.value[e][F] = A);
    else if (typeof A == "function") {
      const W = R(A, F);
      V[F] = W, l.actions[F] = A;
    }
  }
  return mt(k, V), mt(/* @__PURE__ */ ne(k), V), Object.defineProperty(k, "$state", {
    get: () => s.state.value[e],
    set: (F) => {
      j((A) => {
        mt(A, F);
      });
    }
  }), s._p.forEach((F) => {
    mt(k, o.run(() => F({
      store: k,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), C && r && n.hydrate && n.hydrate(k.$state, C), f = !0, a = !0, k;
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
    o || (c ? tn(uo, null) : null), o && Gn(o), o = ao, o._s.has(e) || (i ? ho(e, t, s, o) : ra(e, s, o)), o._s.get(e);
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
    const g = t.getItem(s);
    if (g) {
      const d = n.deserialize(g), b = r ? go(d, r) : d, C = o ? mo(b, o) : b;
      e.$patch(C);
    }
    a && (c == null || c(f));
  } catch (g) {
    i && console.error("[pinia-plugin-persistedstate]", g);
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
function xn(e) {
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
          (Array.isArray(c) ? c.map((a) => [a, a]) : Object.entries(c || {})).forEach(([a, g]) => {
            const d = typeof g == "string" ? g : g.file_name || a;
            if (!d)
              return;
            let b = 0;
            if (typeof g == "object" && (b = xn(g.last_mes) || xn(g.create_date) || xn(g.date) || 0), !b && typeof d == "string") {
              const C = d.match(/(\d{4}-\d{2}-\d{2})@(\d{2})h(\d{2})m/);
              C && (b = xn(`${C[1]}T${C[2]}:${C[3]}:00`));
            }
            o.push({
              id: d,
              title: typeof g == "object" && g.name ? g.name : d.replace(/\.jsonl?$/, ""),
              charName: l.name,
              avatarUrl: l.avatar,
              msgCount: g.mes_count ?? 0,
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
  const e = /* @__PURE__ */ ge([]), t = /* @__PURE__ */ ge(null), n = /* @__PURE__ */ ge([]), s = /* @__PURE__ */ ge(/* @__PURE__ */ new Set()), i = /* @__PURE__ */ ge(""), r = /* @__PURE__ */ ge([]), o = /* @__PURE__ */ ge(!1), l = /* @__PURE__ */ ge(!1), c = /* @__PURE__ */ ge(!1), f = /* @__PURE__ */ ge([]), a = Le(() => {
    if (i.value.trim())
      return r.value.map((V) => ({
        type: "chat",
        id: V.id,
        charName: V.charName,
        chat: e.value.find((F) => F.id === V.chatId),
        searchHit: { content: V.content }
      }));
    const M = [], k = /* @__PURE__ */ new Map();
    e.value.forEach((V) => {
      const F = V.charName || "未知角色";
      k.has(F) || k.set(F, { avatarUrl: V.avatarUrl, chats: [], folderTime: 0 });
      const A = k.get(F);
      A.chats.push(V), V.lastActive > A.folderTime && (A.folderTime = V.lastActive);
    });
    const Q = Array.from(k.entries()).sort((V, F) => F[1].folderTime - V[1].folderTime);
    for (const [V, F] of Q)
      M.push({ type: "header", id: `header_${V}`, charName: V, avatarUrl: F.avatarUrl, chatCount: F.chats.length }), s.value.has(V) && [...F.chats].sort((W, q) => q.lastActive - W.lastActive).forEach((W) => {
        M.push({ type: "chat", id: `chat_${W.id}`, charName: V, chat: W });
      });
    return M;
  }), g = Le(() => e.value.length === 0 ? !1 : i.value.trim() && r.value.length > 0 ? r.value.every((M) => f.value.includes(M.chatId)) : f.value.length === e.value.length);
  async function d() {
    if (!o.value) {
      o.value = !0;
      try {
        e.value = [], await ha((M) => {
          e.value.push(...M);
        }), b();
      } finally {
        o.value = !1;
      }
    }
  }
  async function b() {
    if (l.value)
      return;
    l.value = !0, ps = [];
    const M = 5, k = e.value;
    for (let Q = 0; Q < k.length; Q += M) {
      const V = k.slice(Q, Q + M);
      await Promise.all(V.map(async (F) => {
        const A = await As(F.charName, F.avatarUrl, F.id);
        if (F.msgCount === 0 && A.length > 0 && (F.msgCount = A.length), A.length > 0) {
          const W = A[A.length - 1], q = W.send_date || W.date || W.time;
          if (q) {
            const N = typeof q == "number" ? q : new Date(q).getTime();
            !isNaN(N) && N > 0 && (F.lastActive = N);
          }
        }
        ps.push(...A.map((W, q) => ({
          id: `${F.id}_${q}`,
          chatId: F.id,
          charName: F.charName,
          content: W.mes || ""
        })));
      })), await new Promise((F) => setTimeout(F, 10));
    }
    l.value = !1;
  }
  function C(M) {
    i.value = M;
    const k = M.trim().toLowerCase();
    r.value = k ? ps.filter((Q) => Q.content.toLowerCase().includes(k)) : [];
  }
  async function L(M) {
    t.value = M.id, n.value = await As(M.charName, M.avatarUrl, M.id);
  }
  function j(M) {
    s.value.has(M) ? s.value.delete(M) : s.value.add(M);
  }
  function B() {
    c.value = !c.value, c.value || (f.value = []);
  }
  function H(M) {
    const k = f.value.indexOf(M);
    k > -1 ? f.value.splice(k, 1) : f.value.push(M);
  }
  function R() {
    if (g.value)
      f.value = [];
    else if (i.value.trim()) {
      const M = r.value.map((k) => k.chatId);
      f.value = Array.from(/* @__PURE__ */ new Set([...f.value, ...M]));
    } else
      f.value = e.value.map((M) => M.id);
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
    isAllSelected: g,
    fetchChats: d,
    loadMessages: L,
    toggleChar: j,
    performSearch: C,
    toggleBatchMode: B,
    toggleSelection: H,
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
function kt(e, t, n) {
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
let qt;
const gs = () => {
  if (qt !== void 0)
    return qt;
  if (typeof navigator > "u")
    return qt = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent))
    return qt = !0;
  const e = navigator.maxTouchPoints;
  return qt = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
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
  ), c = (g) => () => {
    o = n(s), l == null || l(), t(o, g);
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
      for (const d in n) {
        const b = n[d];
        b !== void 0 && (r[d] = b);
      }
      const o = this.options;
      let l = null, c = null, f = !1;
      if (o !== void 0 && o.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const d = o.count, b = r.count, C = this.getMeasurements(), L = d > 0 ? ((s = C[0]) == null ? void 0 : s.key) ?? o.getItemKey(0) : null, j = d > 0 ? ((i = C[d - 1]) == null ? void 0 : i.key) ?? o.getItemKey(d - 1) : null;
        if (b !== d || d > 0 && b > 0 && (r.getItemKey(0) !== L || r.getItemKey(b - 1) !== j)) {
          f = !0;
          const R = d > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? C[0] : null;
          R && (l = [R.key, this.getScrollOffset() - R.start]);
          const M = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          M && b > d && this.isAtEnd(o.scrollEndThreshold) && (d === 0 || r.getItemKey(b - 1) !== j) && (c = M);
        }
      }
      this.options = r, f && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, g = 0;
      if (l && this.scrollOffset !== null) {
        const [d, b] = l, C = this.getMeasurements(), { count: L, getItemKey: j } = this.options;
        let B = 0;
        for (; B < L && j(B) !== d; )
          B++;
        if (B < L) {
          const H = C[B];
          if (H) {
            const R = H.start + b;
            R !== this.scrollOffset && (g = R - this.scrollOffset, this.scrollOffset = R, a = !0);
          }
        }
      }
      (a || c) && (this.pendingScrollAnchor = [
        a ? l[0] : null,
        a ? l[1] : 0,
        c,
        g
      ]);
    }, this.notify = (n) => {
      var s, i;
      (i = (s = this.options).onChange) == null || i.call(s, this, n);
    }, this.maybeNotify = kt(
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
    }, this.getMeasurementOptions = kt(
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
    ), this.getMeasurements = kt(
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
        const g = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), l === 1) {
          const C = this.options.gap, L = n * 2;
          let j = this._flatMeasurements;
          if (!j || j.length < L) {
            const R = new Float64Array(L);
            j && g > 0 && R.set(j.subarray(0, g * 2)), j = R, this._flatMeasurements = j;
          }
          let B;
          if (g === 0)
            B = s + i;
          else {
            const R = g - 1;
            B = j[R * 2] + j[R * 2 + 1] + C;
          }
          for (let R = g; R < n; R++) {
            const M = r(R), k = a.get(M), Q = typeof k == "number" ? k : this.options.estimateSize(R);
            j[R * 2] = B, j[R * 2 + 1] = Q, B += Q + C;
          }
          const H = pa(n, j, r);
          return this.measurementsCache = H, H;
        }
        const d = this.measurementsCache.slice(0, g), b = new Array(l).fill(
          void 0
        );
        for (let C = 0; C < g; C++) {
          const L = d[C];
          L && (b[L.lane] = C);
        }
        for (let C = g; C < n; C++) {
          const L = r(C), j = this.laneAssignments.get(C);
          let B, H;
          const R = c === "estimate" || a.has(L);
          if (j !== void 0 && this.options.lanes > 1) {
            B = j;
            const V = b[B], F = V !== void 0 ? d[V] : void 0;
            H = F ? F.end + this.options.gap : s + i;
          } else {
            const V = this.options.lanes === 1 ? d[C - 1] : this.getFurthestMeasurement(d, C);
            H = V ? V.end + this.options.gap : s + i, B = V ? V.lane : C % this.options.lanes, this.options.lanes > 1 && R && this.laneAssignments.set(C, B);
          }
          const M = a.get(L), k = typeof M == "number" ? M : this.options.estimateSize(C), Q = H + k;
          d[C] = {
            index: C,
            start: H,
            size: k,
            end: Q,
            key: L,
            lane: B
          }, b[B] = C;
        }
        return this.measurementsCache = d, d;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = kt(
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
    ), this.getVirtualIndexes = kt(
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
        const d = this.measurementsCache[n];
        if (!d)
          return;
        c = d.key, l = d.start, o = d.size;
      }
      const a = this.itemSizeCache.get(c) ?? o, g = s - a;
      if (g !== 0) {
        const d = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = d ? this.getTotalSize() : 0, C = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
          g,
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
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(c, s), this.itemSizeCacheVersion++, d ? this.applyScrollAdjustment(this.getTotalSize() - b) : C && this.applyScrollAdjustment(g), this.notify(!1);
      }
    }, this.getVirtualItems = kt(
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
    const g = n + t;
    for (; a < r && i[a * 2] + i[a * 2 + 1] < g; )
      a++;
    return { startIndex: f, endIndex: a };
  }
  let l = yo(0, r, (f) => e[f].start, n), c = l;
  if (s === 1)
    for (; c < r && e[c].end < n + t; )
      c++;
  else if (s > 1) {
    const f = Array(s).fill(0);
    for (; c < r && f.some((g) => g < n + t); ) {
      const g = e[c];
      f[g.lane] = g.end, c++;
    }
    const a = Array(s).fill(n + t);
    for (; l >= 0 && a.some((g) => g >= n); ) {
      const g = e[l];
      a[g.lane] = g.start, l--;
    }
    l = Math.max(0, l - l % s), c = Math.min(r, c + (s - 1 - c % s));
  }
  return { startIndex: l, endIndex: c };
}
function Aa(e) {
  const t = new Ta(ee(e)), n = /* @__PURE__ */ Cn(t), s = t._didMount();
  return Lt(
    () => ee(e).getScrollElement(),
    (i) => {
      i && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), Lt(
    () => ee(e),
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
      ...ee(e)
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
    const t = vo(), n = /* @__PURE__ */ ge(null), s = Le(() => t.displayRows), i = Le(() => ({
      count: s.value.length,
      getScrollElement: () => n.value,
      estimateSize: () => 60,
      overscan: 10
    })), r = Oa(i), o = Le(() => r.value.getVirtualItems()), l = () => r.value.getTotalSize(), c = (a) => s.value[a], f = (a) => {
      const g = c(a);
      g.type === "chat" && g.chat && (t.isBatchMode ? t.toggleSelection(g.chat.id) : t.loadMessages(g.chat));
    };
    return (a, g) => (fe(), he("div", {
      ref_key: "containerRef",
      ref: n,
      class: "virtual-list-container"
    }, [
      Y("div", {
        style: _t({ height: l() + "px", position: "relative", width: "100%" })
      }, [
        (fe(!0), he(Re, null, jr(o.value, (d) => {
          var b, C, L, j, B, H;
          return fe(), he("div", {
            key: d.index,
            class: "virtual-row",
            style: _t({ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${d.start}px)` }),
            ref_for: !0,
            ref: ee(r).measureElement,
            "data-index": d.index
          }, [
            c(d.index).type === "header" ? (fe(), he("div", {
              key: 0,
              class: "char-header",
              onClick: (R) => ee(t).toggleChar(c(d.index).charName)
            }, [
              Y("div", Fa, [
                Y("span", Pa, _e(ee(t).expandedChars.has(c(d.index).charName) ? "📂" : "📁"), 1),
                Y("span", Na, _e(c(d.index).charName), 1)
              ]),
              Y("span", Ra, _e(c(d.index).chatCount), 1)
            ], 8, $a)) : (fe(), he("div", {
              key: 1,
              class: At(["chat-item", {
                active: !ee(t).isBatchMode && ee(t).currentChatId === ((b = c(d.index).chat) == null ? void 0 : b.id),
                selected: ee(t).isBatchMode && ee(t).selectedChatIds.includes(((C = c(d.index).chat) == null ? void 0 : C.id) || "")
              }]),
              onClick: (R) => f(d.index)
            }, [
              ee(t).isBatchMode ? (fe(), he("input", {
                key: 0,
                type: "checkbox",
                class: "batch-checkbox",
                checked: ee(t).selectedChatIds.includes(((L = c(d.index).chat) == null ? void 0 : L.id) || ""),
                onClick: En((R) => f(d.index), ["stop"])
              }, null, 8, Da)) : je("", !0),
              Y("div", ja, [
                Y("div", za, [
                  ee(t).searchQuery ? (fe(), he("span", Ba, "[" + _e(c(d.index).charName) + "]", 1)) : je("", !0),
                  io(" " + _e(((j = c(d.index).chat) == null ? void 0 : j.title) || "未命名会话"), 1)
                ]),
                ee(t).searchQuery ? (fe(), he("div", Ha, '"' + _e((B = c(d.index).searchHit) == null ? void 0 : B.content) + '"', 1)) : (fe(), he("div", Wa, "消息数: " + _e(((H = c(d.index).chat) == null ? void 0 : H.msgCount) ?? "..."), 1))
              ])
            ], 10, ka))
          ], 12, La);
        }), 128))
      ], 4),
      s.value.length === 0 ? (fe(), he("div", Va, "暂无匹配记录")) : je("", !0)
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
}, yu = ["onClick"], _u = ["innerHTML"], Sn = 72, Hi = 12, bu = /* @__PURE__ */ Nr({
  __name: "LogOverview",
  setup(e) {
    let t = !0;
    const n = /* @__PURE__ */ ge(!0), s = /* @__PURE__ */ ge(0), i = () => {
      const v = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--clm-vh", `${v}px`);
    }, r = () => setTimeout(i, 300), o = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), l = (v) => (v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), c = (v, p) => {
      if (!v)
        return "";
      const h = v.replace(/<[^>]+>/g, "");
      if (!p)
        return l(h);
      const y = h.toLowerCase(), x = p.toLowerCase(), T = y.indexOf(x);
      if (T === -1)
        return l(h);
      const _ = Math.max(0, T - 15), O = Math.min(h.length, T + p.length + 30);
      let K = h.slice(_, O);
      const z = _ > 0 ? "..." : "", D = O < h.length ? "..." : "";
      let J = l(K);
      const te = new RegExp(o(p), "gi");
      return J = J.replace(te, (le) => `<mark class="search-highlight">${le}</mark>`), `${z}${J}${D}`;
    };
    let f = null;
    const a = (v, p) => {
      if (!p)
        return;
      const h = v.querySelector(".mes_text, .message-text, .content") || v, y = document.createTreeWalker(h, NodeFilter.SHOW_TEXT, null), x = [];
      let T;
      for (; T = y.nextNode(); ) {
        const _ = T, O = _.nodeValue || "", K = new RegExp(o(p), "gi");
        if (K.test(O)) {
          const z = document.createElement("span");
          z.innerHTML = l(O).replace(K, (D) => `<mark style="background-color: #ff9800; color: #fff; padding: 0 3px; border-radius: 3px; box-shadow: 0 0 6px rgba(255,152,0,0.8); font-weight: bold;">${D}</mark>`), _.parentNode && x.push({ old: _, new: z, parent: _.parentNode });
        }
      }
      x.forEach((_) => _.parent.replaceChild(_.new, _.old)), f && clearTimeout(f), f = window.setTimeout(() => {
        x.forEach((_) => {
          _.parent.contains(_.new) && _.parent.replaceChild(_.old, _.new);
        }), f = null;
      }, 3500);
    };
    class g {
      get win() {
        return window;
      }
      get context() {
        var p, h;
        try {
          if (typeof ((p = this.win.SillyTavern) == null ? void 0 : p.getContext) == "function")
            return this.win.SillyTavern.getContext();
          if (this.win.context)
            return this.win.context;
          if ((h = this.win.ST) != null && h.context)
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
      selectCharacterById(p) {
        if (typeof this.context.selectCharacter == "function")
          return this.context.selectCharacter(p), !0;
        if (typeof this.win.selectCharacterById == "function")
          return this.win.selectCharacterById(p), !0;
        const h = document.querySelector(`.character_select[chid="${p}"], [data-character-id="${p}"], .character-item[data-id="${p}"]`);
        return h ? (h.click(), !0) : !1;
      }
      loadChat(p) {
        const h = p.replace(/\.jsonl?$/, ""), y = h + ".jsonl";
        try {
          if (typeof this.context.openCharacterChat == "function")
            return this.context.openCharacterChat(h), !0;
          if (typeof this.context.executeSlashCommandsWithOptions == "function")
            return this.context.executeSlashCommandsWithOptions("/chat " + JSON.stringify(h)), !0;
        } catch {
        }
        return typeof this.context.loadChat == "function" ? (this.context.loadChat(y), !0) : typeof this.win.loadChat == "function" ? (this.win.loadChat(y), !0) : typeof this.win.getChat == "function" ? (this.win.chat_file_name = y, this.win.getChat(), !0) : this.clickHistoryItem(y);
      }
      clickHistoryItem(p) {
        const h = p.replace(/\.jsonl?$/, ""), y = h + ".jsonl", x = [`[chatfile="${y}"]`, `[chatfile="${h}"]`, `[file_name="${h}"]`, `[data-chat-file="${y}"]`];
        for (const _ of x) {
          const O = document.querySelector(_);
          if (O)
            return O.click(), !0;
        }
        const T = document.querySelectorAll('.past_chat_item, .chat-history-item, [class*="history-item"]');
        for (let _ = 0; _ < T.length; _++)
          if ((T[_].textContent || "").includes(h))
            return T[_].click(), !0;
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
      findCharacterElement(p, h) {
        var K;
        const y = (z) => (z || "").replace(/\s+/g, "").toLowerCase(), x = y(p), T = h && decodeURIComponent(h).replace(/\\/g, "/").split("/").pop() || "", _ = [".character_select", ".character-select", "[data-character-id]", ".ch_card", ".character-item"];
        let O = null;
        for (const z of _) {
          const D = document.querySelectorAll(z);
          if (D.length) {
            O = D;
            break;
          }
        }
        if (!O)
          return { element: null, index: -1 };
        for (const z of O) {
          const D = y(z.textContent || "") + y(z.getAttribute("ch_name") || "") + y(z.getAttribute("name") || ""), J = ((K = z.querySelector("img")) == null ? void 0 : K.getAttribute("src")) || z.getAttribute("avatar") || "", te = J && decodeURIComponent(J).replace(/\\/g, "/").split("/").pop() || "";
          if (D.includes(x) || T && te && (te.includes(T) || T.includes(te))) {
            let le = parseInt(z.getAttribute("chid") || z.getAttribute("data-character-id") || z.getAttribute("data-id") || "-1", 10);
            return { element: z, index: isNaN(le) ? -1 : le };
          }
        }
        return { element: null, index: -1 };
      }
      findMessageElement(p, h, y, x) {
        const T = document.getElementById("chat") || document.body, _ = Array.from(T.querySelectorAll(".mes, [mesid]")).filter((D) => !D.closest(".log-manager-modal")), O = p.mesid ?? p.id;
        if (O != null)
          for (let D = _.length - 1; D >= 0; D--) {
            const J = _[D];
            if (J.dataset.mesid === String(O) || J.getAttribute("mesid") === String(O))
              return J;
          }
        if (!y && h >= 0)
          for (let D = _.length - 1; D >= 0; D--) {
            const J = _[D];
            if (parseInt(J.dataset.index || J.getAttribute("mesid") || "-1", 10) === h)
              return J;
          }
        const K = (D) => (D || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        let z = K(p.mes);
        if (z.length > 40 && (z = z.substring(0, 40)), z.length >= 4)
          for (let D = _.length - 1; D >= 0; D--) {
            const J = _[D], te = J.querySelector(".mes_text, .message-text, .content") || J;
            if (K(te.textContent).includes(z))
              return J;
          }
        if (y && x) {
          const D = K(x);
          if (D.length >= 2)
            for (let J = _.length - 1; J >= 0; J--) {
              const te = _[J], le = te.querySelector(".mes_text, .message-text, .content") || te;
              if (K(le.textContent).includes(D))
                return te;
            }
        }
        return null;
      }
      resetCurrentCharacter() {
        this.context.characterId !== void 0 && (this.context.characterId = -1), this.win.this_chid !== void 0 && (this.win.this_chid = -1);
      }
    }
    const d = vo(), b = new g(), C = /* @__PURE__ */ Cn(null);
    function L() {
      const v = document.documentElement;
      if (v.classList.contains("dark"))
        return !0;
      if (v.classList.contains("light"))
        return !1;
      const h = (getComputedStyle(document.body).backgroundColor || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (h) {
        const y = parseInt(h[1], 10), x = parseInt(h[2], 10), T = parseInt(h[3], 10);
        return 128 > y * 0.299 + x * 0.587 + T * 0.114;
      }
      return !0;
    }
    const j = /* @__PURE__ */ ge(L());
    let B = null;
    const H = () => {
      B !== null && cancelAnimationFrame(B), B = requestAnimationFrame(() => {
        if (!C.value)
          return;
        const v = getComputedStyle(document.body);
        let p = v.backgroundColor;
        (!p || p === "rgba(0, 0, 0, 0)" || p === "transparent") && (p = j.value ? "#1e1e1e" : "#f5f5f5");
        let h = v.color;
        const y = document.querySelector(".mes_text, .message-text");
        if (y) {
          const T = getComputedStyle(y).color;
          T && T !== "rgba(0, 0, 0, 0)" && T !== "transparent" && (h = T);
        }
        const x = (T) => {
          const _ = T.match(/\d+/g);
          return _ && _.length >= 3 ? parseInt(_[0], 10) * 0.299 + parseInt(_[1], 10) * 0.587 + parseInt(_[2], 10) * 0.114 : 128;
        };
        50 > Math.abs(x(p) - x(h)) && (h = 128 > x(p) ? "#E8E8E8" : "#33312F"), C.value.style.backgroundColor = p, C.value.style.color = h, C.value.style.setProperty("--dynamic-solid-bg", p);
      });
    };
    let R = null, M = null;
    const k = /* @__PURE__ */ ge(!1), Q = /* @__PURE__ */ Cn(null), V = /* @__PURE__ */ ge({ top: "calc(100% + 5px)", right: "0", bottom: "auto", left: "auto", transform: "none" }), F = /* @__PURE__ */ ge(!1), A = /* @__PURE__ */ ge(!1), W = /* @__PURE__ */ ge(null), q = /* @__PURE__ */ new Set(), N = async () => {
      if (k.value = !k.value, k.value) {
        if (await en(), window.innerWidth <= 768)
          V.value = { top: "50%", left: "50%", transform: "translate(-50%, -50%)", bottom: "auto", right: "auto" };
        else if (Q.value) {
          const v = Q.value.getBoundingClientRect();
          let p = "calc(100% + 5px)", h = "auto", y = "0", x = "auto";
          window.innerHeight - v.bottom < 150 && (p = "auto", h = "calc(100% + 5px)"), v.right < 160 && (y = "auto", x = "0"), V.value = { top: p, bottom: h, right: y, left: x, transform: "none" };
        }
      }
    }, X = /* @__PURE__ */ Cn(null), ue = /* @__PURE__ */ ge(0), Ie = Le(() => {
      const v = d.currentMessages || [];
      return Array.isArray(v) ? d.searchQuery ? [...v].sort((p, h) => {
        const y = p.send_date ?? p.timestamp ?? 0;
        return (h.send_date ?? h.timestamp ?? 0) - y;
      }) : v : [];
    }), oe = Le(() => Ie.value.length), Z = Le(() => oe.value * Sn), re = Le(() => {
      const v = X.value;
      if (!v)
        return { start: 0, end: Math.min(oe.value, 20) };
      const p = Math.floor(ue.value / Sn), h = Math.ceil((ue.value + v.clientHeight) / Sn);
      return { start: Math.max(0, p - Hi), end: Math.min(oe.value, h + Hi) };
    }), Ze = Le(() => {
      const v = d.searchQuery, p = re.value.start;
      return Ie.value.slice(p, re.value.end).map((h, y) => {
        const x = p + y;
        return { ...h, _localIndex: y, _globalIndex: x, _top: x * Sn, _html: c(h.mes, v) };
      });
    });
    let ht = null;
    const et = () => {
      ht !== null && cancelAnimationFrame(ht), ht = requestAnimationFrame(() => {
        X.value && (ue.value = X.value.scrollTop);
      });
    };
    Lt(() => d.currentChatId, async () => {
      await en(), X.value && (X.value.scrollTop = 0, ue.value = 0);
    });
    let be = null, tt = null;
    const Xn = (v) => {
      d.$patch({ searchQuery: v.target.value }), be && clearTimeout(be), be = window.setTimeout(() => {
        tt && tt.abort(), tt = new AbortController(), d.performSearch(d.searchQuery, tt.signal);
      }, 300);
    };
    let xt = null;
    const dt = new ResizeObserver(() => {
      xt && clearTimeout(xt), xt = window.setTimeout(() => {
        X.value && (ue.value = X.value.scrollTop);
      }, 100);
    });
    Bs(async () => {
      t = !0, i(), window.addEventListener("resize", i), window.addEventListener("orientationchange", r), await en(), H(), R = new MutationObserver(() => {
        const p = L();
        p !== j.value && (j.value = p), H();
      }), R.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), R.observe(document.body, { attributes: !0, attributeFilter: ["class", "style"] });
      const v = window.matchMedia("(prefers-color-scheme: dark)");
      M = () => {
        const p = L();
        p !== j.value && (j.value = p), H();
      }, v.addEventListener("change", M), d.fetchChats(), window.refreshChatLogManager ? window.refreshChatLogManager_fallback = () => d.fetchChats() : window.refreshChatLogManager = () => d.fetchChats(), X.value && dt.observe(X.value);
    }), Hs(() => {
      t = !1, window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r), R && R.disconnect(), M && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", M), B !== null && cancelAnimationFrame(B), xt && clearTimeout(xt), f && clearTimeout(f), be && clearTimeout(be), tt && tt.abort(), dt.disconnect(), q.forEach((v) => v.disconnect()), q.clear();
    });
    const nt = () => {
      typeof window.closeChatLogManager == "function" ? window.closeChatLogManager() : n.value = !1;
    }, pt = (v) => {
      const p = b.getCurrentChatFileName();
      return p && p.replace(/\.jsonl?$/, "") === v.replace(/\.jsonl?$/, "");
    }, St = async (v, p, h) => {
      try {
        b.saveChat();
        let { element: y, index: x } = b.findCharacterElement(v, p);
        if (x === -1) {
          const _ = b.getCharacters(), O = (D) => (D || "").replace(/\s+/g, "").toLowerCase(), K = O(v), z = _.find((D) => O(D.name) === K);
          z && (x = _.indexOf(z));
        }
        if (x === -1)
          return alert(`自动定位角色【${v}】失败，请手动在左侧选择该角色后继续。`), !1;
        const T = b.getCurrentCharacterId();
        return String(T) === String(x) ? (b.clickHistoryItem(h) || b.loadChat(h), await new Promise((_) => setTimeout(_, 600))) : (b.resetCurrentCharacter(), y ? y.click() : b.selectCharacterById(x), await new Promise((_) => setTimeout(_, 1200)), b.loadChat(h), await new Promise((_) => setTimeout(_, 600))), !0;
      } catch (y) {
        return console.error("[ChatLogManager] Jump Error:", y), !1;
      }
    }, st = (v, p, h, y) => {
      const x = document.getElementById("chat") || document.querySelector(".chat-container, #chat-window") || document.body;
      if (!x)
        return;
      let T = !1;
      const _ = () => {
        if (T)
          return !0;
        const D = b.findMessageElement(v, p, h, y);
        if (D) {
          T = !0;
          const J = () => D.scrollIntoView({ behavior: "smooth", block: "center" });
          return J(), setTimeout(J, 200), setTimeout(J, 500), D.style.transition = "all 0.5s ease", D.style.boxShadow = "0 0 30px 10px rgba(255, 152, 0, 0.8)", D.style.backgroundColor = "rgba(255, 152, 0, 0.25)", setTimeout(() => {
            D.style.boxShadow = "", D.style.backgroundColor = "";
          }, 3e3), h && y && a(D, y), !0;
        }
        return !1;
      };
      if (_())
        return;
      const O = new MutationObserver(() => {
        _() && (O.disconnect(), q.delete(O));
      });
      O.observe(x, { childList: !0, subtree: !0, attributes: !1 }), q.add(O);
      let K = 0;
      const z = setInterval(() => {
        if (K++, _()) {
          clearInterval(z), O.disconnect(), q.delete(O);
          return;
        }
        K > 5 && K % 3 === 0 && (x.scrollTop = Math.max(0, x.scrollTop - 800)), K > 40 && (clearInterval(z), O.disconnect(), q.delete(O));
      }, 200);
    }, Wt = async () => {
      const v = d.allChats.find((p) => p.id === d.currentChatId);
      v && (nt(), await new Promise((p) => setTimeout(p, 100)), pt(v.id) || await St(v.charName, v.avatarUrl, v.id));
    }, Vt = async (v, p) => {
      let h = v.chatId || v.chat_id;
      if (!h && v.id && typeof v.id == "string") {
        const O = v.id.lastIndexOf("_");
        h = O !== -1 ? v.id.substring(0, O) : v.id;
      }
      h || (h = d.currentChatId);
      const y = d.allChats.find((O) => O.id === h);
      if (!y) {
        alert("无法定位该消息归属的聊天文件。");
        return;
      }
      const x = !!d.searchQuery, T = d.searchQuery, _ = pt(y.id);
      nt(), await new Promise((O) => setTimeout(O, 100)), (_ || await St(y.charName, y.avatarUrl, y.id)) && st(v, p, x, T);
    }, u = async () => {
      const v = d.allChats.find((h) => h.id === d.currentChatId);
      if (!v)
        return;
      const p = pt(v.id);
      if (window.confirm(p ? "🚨 正在删除活跃聊天！将自动切换到历史记录，确定删除？" : "⚠️ 确定要永久删除此记录吗？"))
        try {
          if (b.saveChat(), p) {
            const h = d.allChats.find((y) => y.charName === v.charName && y.id !== v.id);
            h ? await St(h.charName, h.avatarUrl, h.id) : b.resetCurrentCharacter();
          }
          await Ri(v.charName, v.avatarUrl, v.id) ? (d.$patch({ currentChatId: null, currentMessages: [], selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), d.performSearch(""), d.fetchChats()) : alert("❌ 删除失败");
        } catch (h) {
          console.error("[ChatLogManager] Delete Error:", h);
        }
    }, m = async () => {
      var h;
      if (d.selectedChatIds.length === 0 || !window.confirm(`🛑 极度危险！将删除 ${d.selectedChatIds.length} 个会话，确定吗？`))
        return;
      F.value = !0;
      let v = 0, p = 0;
      try {
        const y = Array.from(d.selectedChatIds);
        let x = !1, T = "";
        for (const _ of y)
          if (pt(_)) {
            x = !0, T = ((h = d.allChats.find((O) => O.id === _)) == null ? void 0 : h.charName) || "";
            break;
          }
        if (b.saveChat(), x) {
          const _ = d.allChats.find((O) => O.charName === T && !y.includes(O.id));
          _ ? await St(_.charName, _.avatarUrl, _.id) : b.resetCurrentCharacter();
        }
        for (const _ of y) {
          const O = d.allChats.find((K) => K.id === _);
          O && await Ri(O.charName, O.avatarUrl, O.id) ? v++ : p++;
        }
        d.$patch({ selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), d.performSearch("");
      } catch (y) {
        console.error("[ChatLogManager] Batch Delete Error:", y);
      } finally {
        F.value = !1, t && (alert(`🗑️ 完毕！成功: ${v}${p > 0 ? ` 失败: ${p}` : ""}`), d.fetchChats());
      }
    };
    async function S(v, p) {
      const h = [];
      let y = 0;
      const x = async () => {
        if (y >= p.length)
          return;
        const T = y++;
        try {
          h[T] = { success: !0, value: await p[T]() };
        } catch (_) {
          h[T] = { success: !1, error: _ };
        }
        await x();
      };
      return await Promise.all(Array(Math.min(v, p.length)).fill(null).map(() => x())), h;
    }
    const I = async (v) => {
      k.value = !1;
      const p = d.allChats.find((y) => y.id === d.currentChatId);
      if (!p)
        return;
      let h = [];
      try {
        h = JSON.parse(JSON.stringify(d.currentMessages || []));
      } catch {
        h = Array.from(d.currentMessages || []);
      }
      if (!(!Array.isArray(h) || h.length === 0))
        try {
          if (v === "txt")
            try {
              await ji(p.title, h);
            } catch {
              await ji(h, p.title);
            }
          else if (v === "md")
            try {
              await zi(p.title, h);
            } catch {
              await zi(h, p.title);
            }
          else if (v === "jsonl")
            try {
              await Bi(p.title, p.charName, h);
            } catch {
              await Bi(p.title, h, p.charName);
            }
        } catch (y) {
          console.error("[ChatLogManager] 单独导出失败:", y);
        }
    }, w = async (v) => {
      if (d.selectedChatIds.length !== 0) {
        F.value = !0;
        try {
          const p = Array.from(d.selectedChatIds).map((y) => async () => {
            const x = d.allChats.find((T) => T.id === y);
            return x ? { title: x.title, charName: x.charName, messages: await As(x.charName, x.avatarUrl, x.id) } : null;
          }), h = await S(5, p);
          Ja(h.filter((y) => y.success && y.value !== null).map((y) => y.value), v);
        } finally {
          F.value = !1;
        }
      }
    }, E = () => {
      W.value && W.value.click();
    }, P = async (v) => {
      const p = v.target.files;
      if (!p || p.length === 0)
        return;
      A.value = !0, s.value = 0;
      let h = 0, y = 0;
      try {
        for (let x = 0; x < p.length; x++) {
          const T = await p[x].text();
          let _;
          try {
            _ = JSON.parse(T);
          } catch {
            _ = T.split(`
`).filter((te) => te.trim()).map((te) => JSON.parse(te));
          }
          let O = Array.isArray(_) ? _.length > 0 && Array.isArray(_[0]) ? _.map((te) => ({ messages: te })) : _.length > 0 && _[0].messages ? _ : _.length > 0 && _[0].chat_metadata ? [{ charName: _[0].character_name, messages: _.slice(1) }] : [{ messages: _ }] : [];
          const K = O.length;
          let z = 0;
          const D = async (te) => {
            var le;
            for (const Ve of te) {
              const Pt = Ve.messages.filter((Oe) => Oe.mes !== void 0);
              if (Pt.length === 0)
                continue;
              let ye = Ve.charName || ((le = Pt.find((Oe) => !Oe.is_user && Oe.name)) == null ? void 0 : le.name) || "";
              if (!ye) {
                const Oe = window.prompt("发现未绑定角色的对话记录，请输入要绑定的角色名称：", "");
                if (!Oe) {
                  y++;
                  continue;
                }
                ye = Oe;
              }
              let Me = d.allChats.find((Oe) => Oe.charName === ye || ye.includes(Oe.charName));
              Me && await da(Pt, Me.avatarUrl, Me.charName) ? h++ : y++;
            }
          }, J = 10;
          for (let te = 0; te < K; te += J) {
            const le = O.slice(te, te + J);
            await D(le), z += le.length, s.value = Math.floor(z / K * 100), await new Promise((Ve) => setTimeout(Ve, 0));
          }
        }
      } catch (x) {
        console.error("[ChatLogManager] Import Error:", x);
      } finally {
        A.value = !1, W.value && (W.value.value = ""), t && (alert(`🎉 导入完毕！成功: ${h}${y > 0 ? ` 失败: ${y}` : ""}`), d.fetchChats());
      }
    };
    return (v, p) => n.value ? (fe(), he("div", {
      key: 0,
      class: "log-manager-modal",
      onClick: En(nt, ["self"]),
      onTouchmove: p[9] || (p[9] = En(() => {
      }, ["self", "prevent"]))
    }, [
      Y("div", {
        class: At(["log-manager-container", j.value ? "theme-dark" : "theme-light"]),
        ref_key: "containerRef",
        ref: C
      }, [
        Y("header", qa, [
          p[10] || (p[10] = Y("h2", null, "📚 聊天记录总览", -1)),
          Y("div", Ya, [
            Y("button", {
              class: "action-btn import-btn",
              onClick: E,
              disabled: A.value
            }, _e(A.value ? `导入中... ${s.value}%` : "📥 导入"), 9, Ga),
            Y("input", {
              type: "file",
              ref_key: "fileInputRef",
              ref: W,
              style: { display: "none" },
              accept: ".json,.jsonl",
              multiple: "",
              onChange: P
            }, null, 544),
            Y("button", {
              class: At(["action-btn toggle-batch-btn", { active: ee(d).isBatchMode }]),
              onClick: p[0] || (p[0] = //@ts-ignore
              (...h) => ee(d).toggleBatchMode && ee(d).toggleBatchMode(...h))
            }, _e(ee(d).isBatchMode ? "退出批量" : "☑️ 批量"), 3),
            Y("button", {
              class: "icon-btn close-btn",
              onClick: nt,
              title: "关闭"
            }, "✕")
          ])
        ]),
        Y("main", Qa, [
          Y("aside", Xa, [
            Y("div", Za, [
              Y("div", eu, [
                Y("input", {
                  type: "text",
                  placeholder: ee(d).isIndexing ? "后台加载中..." : "搜索全局内容...",
                  class: "search-input",
                  value: ee(d).searchQuery,
                  onInput: Xn,
                  disabled: ee(d).isBatchMode
                }, null, 40, tu),
                ee(d).isIndexing ? (fe(), he("span", nu, "⌛")) : je("", !0)
              ])
            ]),
            ee(d).isBatchMode ? (fe(), he("div", su, [
              Y("input", {
                type: "checkbox",
                id: "selectAllBox",
                class: "batch-checkbox",
                checked: ee(d).isAllSelected,
                onChange: p[1] || (p[1] = //@ts-ignore
                (...h) => ee(d).toggleSelectAll && ee(d).toggleSelectAll(...h))
              }, null, 40, iu),
              Y("label", ru, "全选 " + _e(ee(d).searchQuery ? "搜索结果" : "所有会话"), 1)
            ])) : je("", !0),
            Te(Ua)
          ]),
          Y("section", ou, [
            Y("div", lu, [
              Y("h3", null, _e(ee(d).isBatchMode ? "批量操作" : "消息预览"), 1),
              !ee(d).isBatchMode && ee(d).currentChatId ? (fe(), he("div", cu, [
                Y("button", {
                  class: "action-btn jump-chat-btn",
                  onClick: Wt
                }, "🚀 进入"),
                Y("button", {
                  class: "action-btn delete-btn-sm",
                  onClick: u
                }, "🗑️"),
                Y("div", {
                  class: "export-dropdown",
                  ref_key: "exportWrapperRef",
                  ref: Q
                }, [
                  Y("button", {
                    class: "action-btn",
                    onClick: N
                  }, "📤 导出 ▾"),
                  Te(Cc, { name: "fade-slide" }, {
                    default: Tr(() => [
                      k.value ? (fe(), he("div", {
                        key: 0,
                        class: "dropdown-menu",
                        style: _t(V.value)
                      }, [
                        Y("div", {
                          class: "dropdown-item",
                          onClick: p[2] || (p[2] = (h) => I("md"))
                        }, "📄 Markdown"),
                        Y("div", {
                          class: "dropdown-item",
                          onClick: p[3] || (p[3] = (h) => I("txt"))
                        }, "📝 TXT 纯文本"),
                        Y("div", {
                          class: "dropdown-item",
                          onClick: p[4] || (p[4] = (h) => I("jsonl"))
                        }, "📦 官方 JSONL")
                      ], 4)) : je("", !0)
                    ]),
                    _: 1
                  })
                ], 512)
              ])) : je("", !0)
            ]),
            ee(d).isBatchMode ? (fe(), he("div", au, [
              Y("div", uu, [
                Y("h3", null, "已选 " + _e(ee(d).selectedChatIds.length) + " 个会话", 1),
                ee(d).selectedChatIds.length === 0 ? (fe(), he("p", fu, "请在左侧勾选")) : je("", !0)
              ]),
              ee(d).selectedChatIds.length > 0 ? (fe(), he("div", hu, [
                Y("button", {
                  class: "big-btn md-btn",
                  onClick: p[5] || (p[5] = (h) => w("md")),
                  disabled: F.value
                }, _e(F.value ? "处理中..." : "📥 导出为 Markdown"), 9, du),
                Y("button", {
                  class: "big-btn txt-btn",
                  onClick: p[6] || (p[6] = (h) => w("txt")),
                  disabled: F.value
                }, _e(F.value ? "处理中..." : "📥 导出为 TXT"), 9, pu),
                Y("button", {
                  class: "big-btn json-btn",
                  onClick: p[7] || (p[7] = (h) => w("json")),
                  disabled: F.value
                }, _e(F.value ? "处理中..." : "📦 导出为 JSON"), 9, gu),
                p[11] || (p[11] = Y("div", { class: "divider" }, null, -1)),
                Y("button", {
                  class: "big-btn delete-btn",
                  onClick: m,
                  disabled: F.value
                }, _e(F.value ? "删除中..." : "🗑️ 永久删除记录"), 9, mu)
              ])) : je("", !0)
            ])) : (fe(), he("div", {
              key: 1,
              class: "message-container",
              ref_key: "scrollContainer",
              ref: X,
              onScroll: et,
              onClick: p[8] || (p[8] = (h) => k.value = !1)
            }, [
              ee(d).currentChatId ? (fe(), he("div", {
                key: 1,
                class: "messages",
                style: _t({ height: Z.value + "px" })
              }, [
                (fe(!0), he(Re, null, jr(Ze.value, (h) => (fe(), he("div", {
                  key: h._localIndex,
                  style: _t({ transform: `translateY(${h._top}px)` }),
                  class: "message-bubble-wrapper"
                }, [
                  Y("div", {
                    class: At(["message-bubble", h.is_user ? "is-user" : "is-bot"])
                  }, [
                    Y("button", {
                      class: "msg-jump-btn",
                      onClick: En((y) => Vt(h, h._globalIndex), ["stop"]),
                      title: "跳转到原文"
                    }, "🎯", 8, yu),
                    Y("strong", null, _e(h.name || (h.is_user ? "You" : "Bot")) + ":", 1),
                    Y("p", {
                      class: "preview-text",
                      innerHTML: h._html
                    }, null, 8, _u)
                  ], 2)
                ], 4))), 128))
              ], 4)) : (fe(), he("div", vu, "👈 请在左侧选择角色或搜索内容"))
            ], 544))
          ])
        ])
      ], 2)
    ], 32)) : je("", !0);
  }
});
const xu = /* @__PURE__ */ _o(bu, [["__scopeId", "data-v-0b37c4a6"]]), bo = "chat-log-manager-float-pos";
function Su() {
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
    }, t = function(g, d) {
      const b = g - o, C = d - l;
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
    const i = Su();
    i ? (s.style.left = i.x + "px", s.style.top = i.y + "px") : (s.style.left = window.innerWidth - 64 + "px", s.style.top = window.innerHeight - 200 + "px");
    let r = !1, o, l, c, f, a = null;
    e(), s.addEventListener("mousedown", (g) => {
      if (g.button !== 0)
        return;
      e(), o = g.clientX, l = g.clientY;
      const d = s.getBoundingClientRect();
      c = d.left, f = d.top, s.style.transition = "none";
      const b = (L) => t(L.clientX, L.clientY), C = () => {
        document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", C), s.style.transition = "all 0.3s ease", r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("mousemove", b), document.addEventListener("mouseup", C);
    }), s.addEventListener("touchstart", (g) => {
      e();
      const d = g.touches[0];
      o = d.clientX, l = d.clientY;
      const b = s.getBoundingClientRect();
      c = b.left, f = b.top;
      const C = (j) => t(j.touches[0].clientX, j.touches[0].clientY), L = () => {
        document.removeEventListener("touchmove", C), document.removeEventListener("touchend", L), r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("touchend", L);
    }), s.addEventListener("click", () => {
      r || Cu();
    }), document.body.appendChild(s);
  } catch {
  }
}
function Cu() {
  let e = document.getElementById("chat-log-manager-container");
  if (e)
    e.style.display = "block";
  else {
    e = document.createElement("div"), e.id = "chat-log-manager-container", e.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 99998; backdrop-filter: blur(3px);", document.body.appendChild(e);
    const t = Qc(xu), n = ea();
    n.use(fa), t.use(n), t.mount(e);
  }
  typeof window.refreshChatLogManager == "function" && window.refreshChatLogManager();
}
window.closeChatLogManager = () => {
  const e = document.getElementById("chat-log-manager-container");
  e && (e.style.display = "none");
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Vi) : Vi();
