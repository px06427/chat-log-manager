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
let ye;
class tr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ye && (ye.active ? (this.parent = ye, this.index = (ye.scopes || (ye.scopes = [])).push(
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
      const n = ye;
      try {
        return ye = this, t();
      } finally {
        ye = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ye, ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ye === this)
        ye = this.prevScope;
      else {
        let t = ye;
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
  return ye;
}
function ir(e, t = !1) {
  ye && ye.cleanups.push(e);
}
let ce;
const ns = /* @__PURE__ */ new WeakSet();
class rr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && (ye.active ? ye.effects.push(this) : this.flags &= -2);
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
      o.forEach((p, d) => {
        (d === "length" || d === an || !ke(d) && d >= a) && l(p);
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
    const p = c.apply(e, r);
    return l ? We(p) : p;
  }
  let f = n;
  o !== e && (l ? f = function(p, d) {
    return n.call(this, Je(e, p), d, e);
  } : n.length > 2 && (f = function(p, d) {
    return n.call(this, p, d, e);
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
          const { value: p, done: d } = f.next();
          return d ? { value: p, done: d } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
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
      return !e && xe(c, "iterate", Ot), l.forEach((a, p) => i.call(r, f(a), f(p), o));
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
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, f = (A) => i ? A : /* @__PURE__ */ Fe(A) || i === !1 || i === 0 ? yt(A, 1) : yt(A);
  let a, p, d, x, C = !1, F = !1;
  if (/* @__PURE__ */ pe(e) ? (p = () => e.value, C = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ at(e) ? (p = () => f(e), C = !0) : U(e) ? (F = !0, C = e.some((A) => /* @__PURE__ */ at(A) || /* @__PURE__ */ Fe(A)), p = () => e.map((A) => {
    if (/* @__PURE__ */ pe(A))
      return A.value;
    if (/* @__PURE__ */ at(A))
      return f(A);
    if (G(A))
      return c ? c(A, 2) : A();
  })) : G(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (d) {
      Qe();
      try {
        d();
      } finally {
        Xe();
      }
    }
    const A = It;
    It = a;
    try {
      return c ? c(e, 3, [x]) : e(x);
    } finally {
      It = A;
    }
  } : p = ze, t && i) {
    const A = p, D = i === !0 ? 1 / 0 : i;
    p = () => yt(A(), D);
  }
  const z = sr(), B = () => {
    a.stop(), z && z.active && Ls(z.effects, a);
  };
  if (r && t) {
    const A = t;
    t = (...D) => {
      const Q = A(...D);
      return B(), Q;
    };
  }
  let W = F ? new Array(e.length).fill(bn) : bn;
  const k = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const D = a.run();
        if (A || i || C || (F ? D.some((Q, K) => Ye(Q, W[K])) : Ye(D, W))) {
          d && d();
          const Q = It;
          It = a;
          try {
            const K = [
              D,
              // pass undefined as the old value when it's changed for the first time
              W === bn ? void 0 : F && W[0] === bn ? [] : W,
              x
            ];
            W = D, c ? c(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            It = Q;
          }
        }
      } else
        a.run();
  };
  return l && l(k), a = new rr(p), a.scheduler = o ? () => o(k, !1) : k, x = (A) => ol(A, !1, a), d = a.onStop = () => {
    const A = In.get(a);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const D of A)
          D();
      In.delete(a);
    }
  }, t ? s ? k(!0) : W = a.run() : o ? o(k.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
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
        for (let p = 0; p < a.length; p++)
          if (a[p](e, c, f) === !1)
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
      const x = pl();
      f = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = ze, x.resume = ze, x.pause = ze, x;
    }
  }
  const a = Ee;
  l.call = (x, C, F) => De(x, a, C, F);
  let p = !1;
  r === "post" ? l.scheduler = (x) => {
    Ae(x, a && a.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (x, C) => {
    C ? x() : zs(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), p && (x.flags |= 2, a && (x.id = a.uid, x.i = a));
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
        (p) => f = p
      );
      c.type !== we && fn(c, f);
      let a = n.subTree && ni(n.subTree);
      if (a && a.type !== we && !Mt(a, c) && Lr(n).type !== we) {
        let p = bs(
          a,
          o,
          s,
          n
        );
        if (fn(a, p), l === "out-in" && c.type !== we)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, a = void 0;
          }, rs(r);
        l === "in-out" && c.type !== we ? p.delayLeave = (d, x, C) => {
          const F = Fr(
            s,
            a
          );
          F[String(a.key)] = a, d[Ne] = () => {
            x(), d[Ne] = void 0, delete f.delayedLeave, a = void 0;
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
    onBeforeLeave: d,
    onLeave: x,
    onAfterLeave: C,
    onLeaveCancelled: F,
    onBeforeAppear: z,
    onAppear: B,
    onAfterAppear: W,
    onAppearCancelled: k
  } = t, A = String(e.key), D = Fr(n, e), Q = (L, V) => {
    L && De(
      L,
      s,
      9,
      V
    );
  }, K = (L, V) => {
    const q = V[1];
    Q(L, V), U(L) ? L.every((R) => R.length <= 1) && q() : L.length <= 1 && q();
  }, P = {
    mode: o,
    persisted: l,
    beforeEnter(L) {
      let V = c;
      if (!n.isMounted)
        if (r)
          V = z || c;
        else
          return;
      L[Ne] && L[Ne](
        !0
        /* cancelled */
      );
      const q = D[A];
      q && Mt(e, q) && q.el[Ne] && q.el[Ne](), Q(V, [L]);
    },
    enter(L) {
      if (D[A] === e)
        return;
      let V = f, q = a, R = p;
      if (!n.isMounted)
        if (r)
          V = B || f, q = W || a, R = k || p;
        else
          return;
      let X = !1;
      L[Ut] = (Ie) => {
        X || (X = !0, Ie ? Q(R, [L]) : Q(q, [L]), P.delayedLeave && P.delayedLeave(), L[Ut] = void 0);
      };
      const ue = L[Ut].bind(null, !1);
      V ? K(V, [L, ue]) : ue();
    },
    leave(L, V) {
      const q = String(e.key);
      if (L[Ut] && L[Ut](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return V();
      Q(d, [L]);
      let R = !1;
      L[Ne] = (ue) => {
        R || (R = !0, V(), ue ? Q(F, [L]) : Q(C, [L]), L[Ne] = void 0, D[q] === e && delete D[q]);
      };
      const X = L[Ne].bind(null, !1);
      D[q] = e, x ? K(x, [L, X]) : X();
    },
    clone(L) {
      const V = bs(
        L,
        t,
        n,
        s,
        i
      );
      return i && i(V), V;
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
      (F, z) => nn(
        F,
        t && (U(t) ? t[z] : t),
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
  const r = s.shapeFlag & 4 ? Js(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, f = t && t.r, a = l.refs === ae ? l.refs = {} : l.refs, p = l.setupState, d = /* @__PURE__ */ ne(p), x = p === ae ? Ki : (F) => si(a, F) ? !1 : se(d, F), C = (F, z) => !(z && si(a, z));
  if (f != null && f !== c) {
    if (ii(t), de(f))
      a[f] = null, x(f) && (p[f] = null);
    else if (/* @__PURE__ */ pe(f)) {
      const F = t;
      C(f, F.k) && (f.value = null), F.k && (a[F.k] = null);
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
    const F = de(c), z = /* @__PURE__ */ pe(c);
    if (F || z) {
      const B = () => {
        if (e.f) {
          const W = F ? x(c) ? p[c] : a[c] : C() || !e.k ? c.value : a[e.k];
          if (i)
            U(W) && Ls(W, r);
          else if (U(W))
            W.includes(r) || W.push(r);
          else if (F)
            a[c] = [r], x(c) && (p[c] = a[c]);
          else {
            const k = [r];
            C(c, e.k) && (c.value = k), e.k && (a[e.k] = k);
          }
        } else
          F ? (a[c] = o, x(c) && (p[c] = o)) : z && (C(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const W = () => {
          B(), On.delete(e);
        };
        W.id = -1, On.set(e, W), Ae(W, n);
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
    for (let a = 0, p = e.length; a < p; a++)
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
    beforeMount: p,
    mounted: d,
    beforeUpdate: x,
    updated: C,
    activated: F,
    deactivated: z,
    beforeDestroy: B,
    beforeUnmount: W,
    destroyed: k,
    unmounted: A,
    render: D,
    renderTracked: Q,
    renderTriggered: K,
    errorCaptured: P,
    serverPrefetch: L,
    // public API
    expose: V,
    inheritAttrs: q,
    // assets
    components: R,
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
  if (oe(Cl, p), oe(Bs, d), oe(wl, x), oe(El, C), oe(bl, F), oe(xl, z), oe(Al, P), oe(Ml, Q), oe(Il, K), oe(Dr, W), oe(Hs, A), oe(Tl, L), U(V))
    if (V.length) {
      const Z = e.exposed || (e.exposed = {});
      V.forEach((re) => {
        Object.defineProperty(Z, re, {
          get: () => n[re],
          set: (Ze) => n[re] = Ze,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  D && e.render === ze && (e.render = D), q != null && (e.inheritAttrs = q), R && (e.components = R), X && (e.directives = X), L && Rr(e);
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
      use(a, ...p) {
        return o.has(a) || (a && G(a.install) ? (o.add(a), a.install(f, ...p)) : G(a) && (o.add(a), a(f, ...p))), f;
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
      mount(a, p, d) {
        if (!c) {
          const x = f._ceVNode || Te(s, i);
          return x.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), p && t ? t(x, a) : e(x, a, d), c = !0, f._container = a, a.__vue_app__ = f, Js(x.component);
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
        const p = $t;
        $t = f;
        try {
          return a();
        } finally {
          $t = p;
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
    props: p,
    data: d,
    setupState: x,
    ctx: C,
    inheritAttrs: F
  } = e, z = An(e);
  let B, W;
  try {
    if (n.shapeFlag & 4) {
      const A = i || s, D = A;
      B = qe(
        f.call(
          D,
          A,
          a,
          p,
          x,
          d,
          C
        )
      ), W = l;
    } else {
      const A = t;
      B = qe(
        A.length > 1 ? A(
          p,
          { attrs: l, slots: o, emit: c }
        ) : A(
          p,
          null
        )
      ), W = t.props ? l : Hl(l);
    }
  } catch (A) {
    on.length = 0, Kn(A, e, 1), B = Te(we);
  }
  let k = B;
  if (W && F !== !1) {
    const A = Object.keys(W), { shapeFlag: D } = k;
    A.length && D & 7 && (r && A.some(Dn) && (W = Wl(
      W,
      r
    )), k = bt(k, W, !1, !0));
  }
  return n.dirs && (k = bt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && fn(k, n.transition), B = k, An(z), B;
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
        const d = a[p];
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
      for (let p = 0; p < a.length; p++) {
        let d = a[p];
        if (qn(e.emitsOptions, d))
          continue;
        const x = t[d];
        if (c)
          if (se(r, d))
            x !== r[d] && (r[d] = x, f = !0);
          else {
            const C = Be(d);
            i[C] = ws(
              c,
              l,
              C,
              x,
              e,
              !1
            );
          }
        else
          x !== r[d] && (r[d] = x, f = !0);
      }
    }
  } else {
    Jr(e, t, i, r) && (f = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !se(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ft(p)) === p || !se(t, a))) && (c ? n && // for camelCase
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
      if (Qt(c))
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
    const a = (p) => {
      c = !0;
      const [d, x] = qr(p, t, !0);
      me(o, d), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return ie(e) && s.set(e, jt), jt;
  if (U(r))
    for (let a = 0; a < r.length; a++) {
      const p = Be(r[a]);
      ui(p) && (o[p] = ae);
    }
  else if (r)
    for (const a in r) {
      const p = Be(a);
      if (ui(p)) {
        const d = r[a], x = o[p] = U(d) || G(d) ? { type: d } : me({}, d), C = x.type;
        let F = !1, z = !0;
        if (U(C))
          for (let B = 0; B < C.length; ++B) {
            const W = C[B], k = G(W) && W.name;
            if (k === "Boolean") {
              F = !0;
              break;
            } else
              k === "String" && (z = !1);
          }
        else
          F = G(C) && C.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = F, x[
          1
          /* shouldCastTrue */
        ] = z, (F || se(x, "default")) && l.push(p);
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
    parentNode: p,
    nextSibling: d,
    setScopeId: x = ze,
    insertStaticContent: C
  } = e, F = (u, m, b, I = null, E = null, T = null, N = void 0, v = null, g = !!m.dynamicChildren) => {
    if (u === m)
      return;
    u && !Mt(u, m) && (I = nt(u), be(u, E, T, !0), u = null), m.patchFlag === -2 && (g = !1, m.dynamicChildren = null);
    const { type: h, ref: S, shapeFlag: _ } = m;
    switch (h) {
      case Yn:
        z(u, m, b, I);
        break;
      case we:
        B(u, m, b, I);
        break;
      case as:
        u == null && W(m, b, I, N);
        break;
      case Re:
        R(
          u,
          m,
          b,
          I,
          E,
          T,
          N,
          v,
          g
        );
        break;
      default:
        _ & 1 ? D(
          u,
          m,
          b,
          I,
          E,
          T,
          N,
          v,
          g
        ) : _ & 6 ? X(
          u,
          m,
          b,
          I,
          E,
          T,
          N,
          v,
          g
        ) : (_ & 64 || _ & 128) && h.process(
          u,
          m,
          b,
          I,
          E,
          T,
          N,
          v,
          g,
          st
        );
    }
    S != null && E ? nn(S, u && u.ref, T, m || u, !m) : S == null && u && u.ref != null && nn(u.ref, null, T, u, !0);
  }, z = (u, m, b, I) => {
    if (u == null)
      s(
        m.el = l(m.children),
        b,
        I
      );
    else {
      const E = m.el = u.el;
      m.children !== u.children && f(E, m.children);
    }
  }, B = (u, m, b, I) => {
    u == null ? s(
      m.el = c(m.children || ""),
      b,
      I
    ) : m.el = u.el;
  }, W = (u, m, b, I) => {
    [u.el, u.anchor] = C(
      u.children,
      m,
      b,
      I,
      u.el,
      u.anchor
    );
  }, k = ({ el: u, anchor: m }, b, I) => {
    let E;
    for (; u && u !== m; )
      E = d(u), s(u, b, I), u = E;
    s(m, b, I);
  }, A = ({ el: u, anchor: m }) => {
    let b;
    for (; u && u !== m; )
      b = d(u), i(u), u = b;
    i(m);
  }, D = (u, m, b, I, E, T, N, v, g) => {
    if (m.type === "svg" ? N = "svg" : m.type === "math" && (N = "mathml"), u == null)
      Q(
        m,
        b,
        I,
        E,
        T,
        N,
        v,
        g
      );
    else {
      const h = u.el && u.el._isVueCE ? u.el : null;
      try {
        h && h._beginPatch(), L(
          u,
          m,
          E,
          T,
          N,
          v,
          g
        );
      } finally {
        h && h._endPatch();
      }
    }
  }, Q = (u, m, b, I, E, T, N, v) => {
    let g, h;
    const { props: S, shapeFlag: _, transition: w, dirs: y } = u;
    if (g = u.el = o(
      u.type,
      T,
      S && S.is,
      S
    ), _ & 8 ? a(g, u.children) : _ & 16 && P(
      u.children,
      g,
      null,
      I,
      E,
      cs(u, T),
      N,
      v
    ), y && Ct(u, null, I, "created"), K(g, u, u.scopeId, N, I), S) {
      for (const H in S)
        H !== "value" && !Qt(H) && r(g, H, null, S[H], T, I);
      "value" in S && r(g, "value", null, S.value, T), (h = S.onVnodeBeforeMount) && Ke(h, I, u);
    }
    y && Ct(u, null, I, "beforeMount");
    const M = ec(E, w);
    M && w.beforeEnter(g), s(g, m, b), ((h = S && S.onVnodeMounted) || M || y) && Ae(() => {
      try {
        h && Ke(h, I, u), M && w.enter(g), y && Ct(u, null, I, "mounted");
      } finally {
      }
    }, E);
  }, K = (u, m, b, I, E) => {
    if (b && x(u, b), I)
      for (let T = 0; T < I.length; T++)
        x(u, I[T]);
    if (E) {
      let T = E.subTree;
      if (m === T || to(T.type) && (T.ssContent === m || T.ssFallback === m)) {
        const N = E.vnode;
        K(
          u,
          N,
          N.scopeId,
          N.slotScopeIds,
          E.parent
        );
      }
    }
  }, P = (u, m, b, I, E, T, N, v, g = 0) => {
    for (let h = g; h < u.length; h++) {
      const S = u[h] = v ? lt(u[h]) : qe(u[h]);
      F(
        null,
        S,
        m,
        b,
        I,
        E,
        T,
        N,
        v
      );
    }
  }, L = (u, m, b, I, E, T, N) => {
    const v = m.el = u.el;
    let { patchFlag: g, dynamicChildren: h, dirs: S } = m;
    g |= u.patchFlag & 16;
    const _ = u.props || ae, w = m.props || ae;
    let y;
    if (b && wt(b, !1), (y = w.onVnodeBeforeUpdate) && Ke(y, b, m, u), S && Ct(m, u, b, "beforeUpdate"), b && wt(b, !0), // HMR updated, force full diff
    // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    h && (!u.dynamicChildren || u.dynamicChildren.length !== h.length) && (g = 0, N = !1, h = null), (_.innerHTML && w.innerHTML == null || _.textContent && w.textContent == null) && a(v, ""), h ? V(
      u.dynamicChildren,
      h,
      v,
      b,
      I,
      cs(m, E),
      T
    ) : N || re(
      u,
      m,
      v,
      null,
      b,
      I,
      cs(m, E),
      T,
      !1
    ), g > 0) {
      if (g & 16)
        q(v, _, w, b, E);
      else if (g & 2 && _.class !== w.class && r(v, "class", null, w.class, E), g & 4 && r(v, "style", _.style, w.style, E), g & 8) {
        const M = m.dynamicProps;
        for (let H = 0; H < M.length; H++) {
          const j = M[H], O = _[j], J = w[j];
          (J !== O || j === "value") && r(v, j, O, J, E, b);
        }
      }
      g & 1 && u.children !== m.children && a(v, m.children);
    } else
      !N && h == null && q(v, _, w, b, E);
    ((y = w.onVnodeUpdated) || S) && Ae(() => {
      y && Ke(y, b, m, u), S && Ct(m, u, b, "updated");
    }, I);
  }, V = (u, m, b, I, E, T, N) => {
    for (let v = 0; v < m.length; v++) {
      const g = u[v], h = m[v], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        g.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (g.type === Re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(g, h) || // - In the case of a component, it could contain anything.
        g.shapeFlag & 198) ? p(g.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      F(
        g,
        h,
        S,
        null,
        I,
        E,
        T,
        N,
        !0
      );
    }
  }, q = (u, m, b, I, E) => {
    if (m !== b) {
      if (m !== ae)
        for (const T in m)
          !Qt(T) && !(T in b) && r(
            u,
            T,
            m[T],
            null,
            E,
            I
          );
      for (const T in b) {
        if (Qt(T))
          continue;
        const N = b[T], v = m[T];
        N !== v && T !== "value" && r(u, T, v, N, E, I);
      }
      "value" in b && r(u, "value", m.value, b.value, E);
    }
  }, R = (u, m, b, I, E, T, N, v, g) => {
    const h = m.el = u ? u.el : l(""), S = m.anchor = u ? u.anchor : l("");
    let { patchFlag: _, dynamicChildren: w, slotScopeIds: y } = m;
    y && (v = v ? v.concat(y) : y), u == null ? (s(h, b, I), s(S, b, I), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      b,
      S,
      E,
      T,
      N,
      v,
      g
    )) : _ > 0 && _ & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === w.length ? (V(
      u.dynamicChildren,
      w,
      b,
      E,
      T,
      N,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || E && m === E.subTree) && Xr(
      u,
      m,
      !0
      /* shallow */
    )) : re(
      u,
      m,
      b,
      S,
      E,
      T,
      N,
      v,
      g
    );
  }, X = (u, m, b, I, E, T, N, v, g) => {
    m.slotScopeIds = v, u == null ? m.shapeFlag & 512 ? E.ctx.activate(
      m,
      b,
      I,
      N,
      g
    ) : ue(
      m,
      b,
      I,
      E,
      T,
      N,
      g
    ) : Ie(u, m, g);
  }, ue = (u, m, b, I, E, T, N) => {
    const v = u.component = uc(
      u,
      I,
      E
    );
    if (Un(u) && (v.ctx.renderer = st), fc(v, !1, N), v.asyncDep) {
      if (E && E.registerDep(v, oe, N), !u.el) {
        const g = v.subTree = Te(we);
        B(null, g, m, b), u.placeholder = g.el;
      }
    } else
      oe(
        v,
        u,
        m,
        b,
        E,
        T,
        N
      );
  }, Ie = (u, m, b) => {
    const I = m.component = u.component;
    if (Vl(u, m, b))
      if (I.asyncDep && !I.asyncResolved) {
        Z(I, m, b);
        return;
      } else
        I.next = m, I.update();
    else
      m.el = u.el, I.vnode = m;
  }, oe = (u, m, b, I, E, T, N) => {
    const v = () => {
      if (u.isMounted) {
        let { next: _, bu: w, u: y, parent: M, vnode: H } = u;
        {
          const le = Zr(u);
          if (le) {
            _ && (_.el = H.el, Z(u, _, N)), le.asyncDep.then(() => {
              Ae(() => {
                u.isUnmounted || h();
              }, E);
            });
            return;
          }
        }
        let j = _, O;
        wt(u, !1), _ ? (_.el = H.el, Z(u, _, N)) : _ = H, w && es(w), (O = _.props && _.props.onVnodeBeforeUpdate) && Ke(O, M, _, H), wt(u, !0);
        const J = ls(u), te = u.subTree;
        u.subTree = J, F(
          te,
          J,
          // parent may have changed if it's in a teleport
          p(te.el),
          // anchor may have changed if it's in a fragment
          nt(te),
          u,
          E,
          T
        ), _.el = J.el, j === null && Kl(u, J.el), y && Ae(y, E), (O = _.props && _.props.onVnodeUpdated) && Ae(
          () => Ke(O, M, _, H),
          E
        );
      } else {
        let _;
        const { el: w, props: y } = m, { bm: M, m: H, parent: j, root: O, type: J } = u, te = sn(m);
        if (wt(u, !1), M && es(M), !te && (_ = y && y.onVnodeBeforeMount) && Ke(_, j, m), wt(u, !0), w && Vt) {
          const le = () => {
            u.subTree = ls(u), Vt(
              w,
              u.subTree,
              u,
              E,
              null
            );
          };
          te && J.__asyncHydrate ? J.__asyncHydrate(
            w,
            u,
            le
          ) : le();
        } else {
          O.ce && O.ce._hasShadowRoot() && O.ce._injectChildStyle(
            J,
            u.parent ? u.parent.type : void 0
          );
          const le = u.subTree = ls(u);
          F(
            null,
            le,
            b,
            I,
            u,
            E,
            T
          ), m.el = le.el;
        }
        if (H && Ae(H, E), !te && (_ = y && y.onVnodeMounted)) {
          const le = m;
          Ae(
            () => Ke(_, j, le),
            E
          );
        }
        (m.shapeFlag & 256 || j && sn(j.vnode) && j.vnode.shapeFlag & 256) && u.a && Ae(u.a, E), u.isMounted = !0, m = b = I = null;
      }
    };
    u.scope.on();
    const g = u.effect = new rr(v);
    u.scope.off();
    const h = u.update = g.run.bind(g), S = u.job = g.runIfDirty.bind(g);
    S.i = u, S.id = u.uid, g.scheduler = () => zs(S), wt(u, !0), h();
  }, Z = (u, m, b) => {
    m.component = u;
    const I = u.vnode.props;
    u.vnode = m, u.next = null, Jl(u, m.props, I, b), Ql(u, m.children, b), Qe(), ti(u), Xe();
  }, re = (u, m, b, I, E, T, N, v, g = !1) => {
    const h = u && u.children, S = u ? u.shapeFlag : 0, _ = m.children, { patchFlag: w, shapeFlag: y } = m;
    if (w > 0) {
      if (w & 128) {
        ht(
          h,
          _,
          b,
          I,
          E,
          T,
          N,
          v,
          g
        );
        return;
      } else if (w & 256) {
        Ze(
          h,
          _,
          b,
          I,
          E,
          T,
          N,
          v,
          g
        );
        return;
      }
    }
    y & 8 ? (S & 16 && dt(h, E, T), _ !== h && a(b, _)) : S & 16 ? y & 16 ? ht(
      h,
      _,
      b,
      I,
      E,
      T,
      N,
      v,
      g
    ) : dt(h, E, T, !0) : (S & 8 && a(b, ""), y & 16 && P(
      _,
      b,
      I,
      E,
      T,
      N,
      v,
      g
    ));
  }, Ze = (u, m, b, I, E, T, N, v, g) => {
    u = u || jt, m = m || jt;
    const h = u.length, S = m.length, _ = Math.min(h, S);
    let w;
    for (w = 0; w < _; w++) {
      const y = m[w] = g ? lt(m[w]) : qe(m[w]);
      F(
        u[w],
        y,
        b,
        null,
        E,
        T,
        N,
        v,
        g
      );
    }
    h > S ? dt(
      u,
      E,
      T,
      !0,
      !1,
      _
    ) : P(
      m,
      b,
      I,
      E,
      T,
      N,
      v,
      g,
      _
    );
  }, ht = (u, m, b, I, E, T, N, v, g) => {
    let h = 0;
    const S = m.length;
    let _ = u.length - 1, w = S - 1;
    for (; h <= _ && h <= w; ) {
      const y = u[h], M = m[h] = g ? lt(m[h]) : qe(m[h]);
      if (Mt(y, M))
        F(
          y,
          M,
          b,
          null,
          E,
          T,
          N,
          v,
          g
        );
      else
        break;
      h++;
    }
    for (; h <= _ && h <= w; ) {
      const y = u[_], M = m[w] = g ? lt(m[w]) : qe(m[w]);
      if (Mt(y, M))
        F(
          y,
          M,
          b,
          null,
          E,
          T,
          N,
          v,
          g
        );
      else
        break;
      _--, w--;
    }
    if (h > _) {
      if (h <= w) {
        const y = w + 1, M = y < S ? m[y].el : I;
        for (; h <= w; )
          F(
            null,
            m[h] = g ? lt(m[h]) : qe(m[h]),
            b,
            M,
            E,
            T,
            N,
            v,
            g
          ), h++;
      }
    } else if (h > w)
      for (; h <= _; )
        be(u[h], E, T, !0), h++;
    else {
      const y = h, M = h, H = /* @__PURE__ */ new Map();
      for (h = M; h <= w; h++) {
        const ve = m[h] = g ? lt(m[h]) : qe(m[h]);
        ve.key != null && H.set(ve.key, h);
      }
      let j, O = 0;
      const J = w - M + 1;
      let te = !1, le = 0;
      const Ve = new Array(J);
      for (h = 0; h < J; h++)
        Ve[h] = 0;
      for (h = y; h <= _; h++) {
        const ve = u[h];
        if (O >= J) {
          be(ve, E, T, !0);
          continue;
        }
        let Me;
        if (ve.key != null)
          Me = H.get(ve.key);
        else
          for (j = M; j <= w; j++)
            if (Ve[j - M] === 0 && Mt(ve, m[j])) {
              Me = j;
              break;
            }
        Me === void 0 ? be(ve, E, T, !0) : (Ve[Me - M] = h + 1, Me >= le ? le = Me : te = !0, F(
          ve,
          m[Me],
          b,
          null,
          E,
          T,
          N,
          v,
          g
        ), O++);
      }
      const Pt = te ? tc(Ve) : jt;
      for (j = Pt.length - 1, h = J - 1; h >= 0; h--) {
        const ve = M + h, Me = m[ve], Oe = m[ve + 1], Ys = ve + 1 < S ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Oe.el || eo(Oe)
        ) : I;
        Ve[h] === 0 ? F(
          null,
          Me,
          b,
          Ys,
          E,
          T,
          N,
          v,
          g
        ) : te && (j < 0 || h !== Pt[j] ? et(Me, b, Ys, 2) : j--);
      }
    }
  }, et = (u, m, b, I, E = null) => {
    const { el: T, type: N, transition: v, children: g, shapeFlag: h } = u;
    if (h & 6) {
      et(u.component.subTree, m, b, I);
      return;
    }
    if (h & 128) {
      u.suspense.move(m, b, I);
      return;
    }
    if (h & 64) {
      N.move(u, m, b, st);
      return;
    }
    if (N === Re) {
      s(T, m, b);
      for (let _ = 0; _ < g.length; _++)
        et(g[_], m, b, I);
      s(u.anchor, m, b);
      return;
    }
    if (N === as) {
      k(u, m, b);
      return;
    }
    if (I !== 2 && h & 1 && v)
      if (I === 0)
        v.persisted && !T[Ne] ? s(T, m, b) : (v.beforeEnter(T), s(T, m, b), Ae(() => v.enter(T), E));
      else {
        const { leave: _, delayLeave: w, afterLeave: y } = v, M = () => {
          u.ctx.isUnmounted ? i(T) : s(T, m, b);
        }, H = () => {
          const j = T._isLeaving || !!T[Ne];
          T._isLeaving && T[Ne](
            !0
            /* cancelled */
          ), v.persisted && !j ? M() : _(T, () => {
            M(), y && y();
          });
        };
        w ? w(T, M, H) : H();
      }
    else
      s(T, m, b);
  }, be = (u, m, b, I = !1, E = !1) => {
    const {
      type: T,
      props: N,
      ref: v,
      children: g,
      dynamicChildren: h,
      shapeFlag: S,
      patchFlag: _,
      dirs: w,
      cacheIndex: y,
      memo: M
    } = u;
    if (_ === -2 && (E = !1), v != null && (Qe(), nn(v, null, b, u, !0), Xe()), y != null && (m.renderCache[y] = void 0), S & 256) {
      m.ctx.deactivate(u);
      return;
    }
    const H = S & 1 && w, j = !sn(u);
    let O;
    if (j && (O = N && N.onVnodeBeforeUnmount) && Ke(O, m, u), S & 6)
      xt(u.component, b, I);
    else {
      if (S & 128) {
        u.suspense.unmount(b, I);
        return;
      }
      H && Ct(u, null, m, "beforeUnmount"), S & 64 ? u.type.remove(
        u,
        m,
        b,
        st,
        I
      ) : h && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !h.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== Re || _ > 0 && _ & 64) ? dt(
        h,
        m,
        b,
        !1,
        !0
      ) : (T === Re && _ & 384 || !E && S & 16) && dt(g, m, b), I && tt(u);
    }
    const J = M != null && y == null;
    (j && (O = N && N.onVnodeUnmounted) || H || J) && Ae(() => {
      O && Ke(O, m, u), H && Ct(u, null, m, "unmounted"), J && (u.el = null);
    }, b);
  }, tt = (u) => {
    const { type: m, el: b, anchor: I, transition: E } = u;
    if (m === Re) {
      Xn(b, I);
      return;
    }
    if (m === as) {
      A(u);
      return;
    }
    const T = () => {
      i(b), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (u.shapeFlag & 1 && E && !E.persisted) {
      const { leave: N, delayLeave: v } = E, g = () => N(b, T);
      v ? v(u.el, T, g) : g();
    } else
      T();
  }, Xn = (u, m) => {
    let b;
    for (; u !== m; )
      b = d(u), i(u), u = b;
    i(m);
  }, xt = (u, m, b) => {
    const { bum: I, scope: E, job: T, subTree: N, um: v, m: g, a: h } = u;
    fi(g), fi(h), I && es(I), E.stop(), T && (T.flags |= 8, be(N, u, m, b)), v && Ae(v, m), Ae(() => {
      u.isUnmounted = !0;
    }, m);
  }, dt = (u, m, b, I = !1, E = !1, T = 0) => {
    for (let N = T; N < u.length; N++)
      be(u[N], m, b, I, E);
  }, nt = (u) => {
    if (u.shapeFlag & 6)
      return nt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const m = d(u.anchor || u.el), b = m && m[ml];
    return b ? d(b) : m;
  };
  let pt = !1;
  const St = (u, m, b) => {
    let I;
    u == null ? m._vnode && (be(m._vnode, null, null, !0), I = m._vnode.component) : F(
      m._vnode || null,
      u,
      m,
      null,
      null,
      null,
      b
    ), m._vnode = u, pt || (pt = !0, ti(I), Cr(), pt = !1);
  }, st = {
    p: F,
    um: be,
    m: et,
    r: tt,
    mt: ue,
    mc: P,
    pc: re,
    pbc: V,
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
  for (const R in e)
    R in co || (t[R] = e[R]);
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
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, C = Ec(i), F = C && C[0], z = C && C[1], {
    onBeforeEnter: B,
    onEnter: W,
    onEnterCancelled: k,
    onLeave: A,
    onLeaveCancelled: D,
    onBeforeAppear: Q = B,
    onAppear: K = W,
    onAppearCancelled: P = k
  } = t, L = (R, X, ue, Ie) => {
    R._enterCancelled = Ie, Tt(R, X ? a : l), Tt(R, X ? f : o), ue && ue();
  }, V = (R, X) => {
    R._isLeaving = !1, Tt(R, p), Tt(R, x), Tt(R, d), X && X();
  }, q = (R) => (X, ue) => {
    const Ie = R ? K : W, oe = () => L(X, R, ue);
    Et(Ie, [X, oe]), yi(() => {
      Tt(X, R ? c : r), rt(X, R ? a : l), vi(Ie) || _i(X, s, F, oe);
    });
  };
  return me(t, {
    onBeforeEnter(R) {
      Et(B, [R]), rt(R, r), rt(R, o);
    },
    onBeforeAppear(R) {
      Et(Q, [R]), rt(R, c), rt(R, f);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(R, X) {
      R._isLeaving = !0;
      const ue = () => V(R, X);
      rt(R, p), R._enterCancelled ? (rt(R, d), Si(R)) : (Si(R), rt(R, d)), yi(() => {
        R._isLeaving && (Tt(R, p), rt(R, x), vi(A) || _i(R, s, z, ue));
      }), Et(A, [R, ue]);
    },
    onEnterCancelled(R) {
      L(R, !1, void 0, !0), Et(k, [R]);
    },
    onAppearCancelled(R) {
      L(R, !0, void 0, !0), Et(P, [R]);
    },
    onLeaveCancelled(R) {
      V(R), Et(D, [R]);
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
  const p = () => {
    e.removeEventListener(f, d), r();
  }, d = (x) => {
    x.target === e && ++a >= c && p();
  };
  setTimeout(() => {
    a < c && p();
  }, l + 1), e.addEventListener(f, d);
}
function Ic(e, t) {
  const n = window.getComputedStyle(e), s = (C) => (n[C] || "").split(", "), i = s(`${gt}Delay`), r = s(`${gt}Duration`), o = bi(i, r), l = s(`${Jt}Delay`), c = s(`${Jt}Duration`), f = bi(l, c);
  let a = null, p = 0, d = 0;
  t === gt ? o > 0 && (a = gt, p = o, d = r.length) : t === Jt ? f > 0 && (a = Jt, p = f, d = c.length) : (p = Math.max(o, f), a = p > 0 ? o > f ? gt : Jt : null, d = a ? a === gt ? r.length : c.length : 0);
  const x = a === gt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${gt}Property`).toString()
  );
  return {
    type: a,
    timeout: p,
    propCount: d,
    hasTransform: x
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
    return mt(a, r, Object.keys(o || {}).reduce((p, d) => (p[d] = js(Le(() => {
      Gn(n);
      const x = n._s.get(e);
      return o[d].call(x, x);
    })), p), {}));
  }
  return c = ho(e, f, t, n, s, !0), c;
}
function ho(e, t, n = {}, s, i, r) {
  let o;
  const l = mt({ actions: {} }, n), c = { deep: !0 };
  let f, a, p = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), x;
  const C = s.state.value[e];
  !r && !C && (s.state.value[e] = {});
  let F;
  function z(P) {
    let L;
    f = a = !1, typeof P == "function" ? (P(s.state.value[e]), L = {
      type: ln.patchFunction,
      storeId: e,
      events: x
    }) : (Ms(s.state.value[e], P), L = {
      type: ln.patchObject,
      payload: P,
      storeId: e,
      events: x
    });
    const V = F = Symbol();
    en().then(() => {
      F === V && (f = !0);
    }), a = !0, Rt(p, L, s.state.value[e]);
  }
  const B = r ? function() {
    const { state: L } = n, V = L ? L() : {};
    this.$patch((q) => {
      mt(q, V);
    });
  } : (
    /* istanbul ignore next */
    fo
  );
  function W() {
    o.stop(), p.clear(), d.clear(), s._s.delete(e);
  }
  const k = (P, L = "") => {
    if (Fi in P)
      return P[ds] = L, P;
    const V = function() {
      Gn(s);
      const q = Array.from(arguments), R = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
      function ue(Z) {
        R.add(Z);
      }
      function Ie(Z) {
        X.add(Z);
      }
      Rt(d, {
        args: q,
        name: V[ds],
        store: D,
        after: ue,
        onError: Ie
      });
      let oe;
      try {
        oe = P.apply(this && this.$id === e ? this : D, q);
      } catch (Z) {
        throw Rt(X, Z), Z;
      }
      return oe instanceof Promise ? oe.then((Z) => (Rt(R, Z), Z)).catch((Z) => (Rt(X, Z), Promise.reject(Z))) : (Rt(R, oe), oe);
    };
    return V[Fi] = !0, V[ds] = L, V;
  }, A = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: $i.bind(null, d),
    $patch: z,
    $reset: B,
    $subscribe(P, L = {}) {
      const V = $i(p, P, L.detached, () => q()), q = o.run(() => Lt(() => s.state.value[e], (R) => {
        (L.flush === "sync" ? a : f) && P({
          storeId: e,
          type: ln.direct,
          events: x
        }, R);
      }, mt({}, c, L)));
      return V;
    },
    $dispose: W
  }, D = /* @__PURE__ */ Wn(A);
  s._s.set(e, D);
  const K = (s._a && s._a.runWithContext || ta)(() => s._e.run(() => (o = nr()).run(() => t({ action: k }))));
  for (const P in K) {
    const L = K[P];
    if (/* @__PURE__ */ pe(L) && !ia(L) || /* @__PURE__ */ at(L))
      r || (C && sa(L) && (/* @__PURE__ */ pe(L) ? L.value = C[P] : Ms(L, C[P])), s.state.value[e][P] = L);
    else if (typeof L == "function") {
      const V = k(L, P);
      K[P] = V, l.actions[P] = L;
    }
  }
  return mt(D, K), mt(/* @__PURE__ */ ne(D), K), Object.defineProperty(D, "$state", {
    get: () => s.state.value[e],
    set: (P) => {
      z((L) => {
        mt(L, P);
      });
    }
  }), s._p.forEach((P) => {
    mt(D, o.run(() => P({
      store: D,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), C && r && n.hydrate && n.hydrate(D.$state, C), f = !0, a = !0, D;
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
    const p = t.getItem(s);
    if (p) {
      const d = n.deserialize(p), x = r ? go(d, r) : d, C = o ? mo(x, o) : x;
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
          (Array.isArray(c) ? c.map((a) => [a, a]) : Object.entries(c || {})).forEach(([a, p]) => {
            const d = typeof p == "string" ? p : p.file_name || a;
            if (!d)
              return;
            let x = 0;
            if (typeof p == "object" && (x = xn(p.last_mes) || xn(p.create_date) || xn(p.date) || 0), !x && typeof d == "string") {
              const C = d.match(/(\d{4}-\d{2}-\d{2})@(\d{2})h(\d{2})m/);
              C && (x = xn(`${C[1]}T${C[2]}:${C[3]}:00`));
            }
            o.push({
              id: d,
              title: typeof p == "object" && p.name ? p.name : d.replace(/\.jsonl?$/, ""),
              charName: l.name,
              avatarUrl: l.avatar,
              msgCount: p.mes_count ?? 0,
              lastActive: x || 1
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
      return r.value.map((K) => ({
        type: "chat",
        id: K.id,
        charName: K.charName,
        chat: e.value.find((P) => P.id === K.chatId),
        searchHit: { content: K.content }
      }));
    const A = [], D = /* @__PURE__ */ new Map();
    e.value.forEach((K) => {
      const P = K.charName || "未知角色";
      D.has(P) || D.set(P, { avatarUrl: K.avatarUrl, chats: [], folderTime: 0 });
      const L = D.get(P);
      L.chats.push(K), K.lastActive > L.folderTime && (L.folderTime = K.lastActive);
    });
    const Q = Array.from(D.entries()).sort((K, P) => P[1].folderTime - K[1].folderTime);
    for (const [K, P] of Q)
      A.push({ type: "header", id: `header_${K}`, charName: K, avatarUrl: P.avatarUrl, chatCount: P.chats.length }), s.value.has(K) && [...P.chats].sort((V, q) => q.lastActive - V.lastActive).forEach((V) => {
        A.push({ type: "chat", id: `chat_${V.id}`, charName: K, chat: V });
      });
    return A;
  }), p = Le(() => e.value.length === 0 ? !1 : i.value.trim() && r.value.length > 0 ? r.value.every((A) => f.value.includes(A.chatId)) : f.value.length === e.value.length);
  async function d() {
    if (!o.value) {
      o.value = !0;
      try {
        e.value = [], await ha((A) => {
          e.value.push(...A);
        }), x();
      } finally {
        o.value = !1;
      }
    }
  }
  async function x() {
    if (l.value)
      return;
    l.value = !0, ps = [];
    const A = 5, D = e.value;
    for (let Q = 0; Q < D.length; Q += A) {
      const K = D.slice(Q, Q + A);
      await Promise.all(K.map(async (P) => {
        const L = await As(P.charName, P.avatarUrl, P.id);
        if (P.msgCount === 0 && L.length > 0 && (P.msgCount = L.length), L.length > 0) {
          const V = L[L.length - 1], q = V.send_date || V.date || V.time;
          if (q) {
            const R = typeof q == "number" ? q : new Date(q).getTime();
            !isNaN(R) && R > 0 && (P.lastActive = R);
          }
        }
        ps.push(...L.map((V, q) => ({
          id: `${P.id}_${q}`,
          chatId: P.id,
          charName: P.charName,
          content: V.mes || ""
        })));
      })), await new Promise((P) => setTimeout(P, 10));
    }
    l.value = !1;
  }
  function C(A) {
    i.value = A;
    const D = A.trim().toLowerCase();
    r.value = D ? ps.filter((Q) => Q.content.toLowerCase().includes(D)) : [];
  }
  async function F(A) {
    t.value = A.id, n.value = await As(A.charName, A.avatarUrl, A.id);
  }
  function z(A) {
    s.value.has(A) ? s.value.delete(A) : s.value.add(A);
  }
  function B() {
    c.value = !c.value, c.value || (f.value = []);
  }
  function W(A) {
    const D = f.value.indexOf(A);
    D > -1 ? f.value.splice(D, 1) : f.value.push(A);
  }
  function k() {
    if (p.value)
      f.value = [];
    else if (i.value.trim()) {
      const A = r.value.map((D) => D.chatId);
      f.value = Array.from(/* @__PURE__ */ new Set([...f.value, ...A]));
    } else
      f.value = e.value.map((A) => A.id);
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
    isAllSelected: p,
    fetchChats: d,
    loadMessages: F,
    toggleChar: z,
    performSearch: C,
    toggleBatchMode: B,
    toggleSelection: W,
    toggleSelectAll: k
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
      for (const d in n) {
        const x = n[d];
        x !== void 0 && (r[d] = x);
      }
      const o = this.options;
      let l = null, c = null, f = !1;
      if (o !== void 0 && o.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const d = o.count, x = r.count, C = this.getMeasurements(), F = d > 0 ? ((s = C[0]) == null ? void 0 : s.key) ?? o.getItemKey(0) : null, z = d > 0 ? ((i = C[d - 1]) == null ? void 0 : i.key) ?? o.getItemKey(d - 1) : null;
        if (x !== d || d > 0 && x > 0 && (r.getItemKey(0) !== F || r.getItemKey(x - 1) !== z)) {
          f = !0;
          const k = d > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? C[0] : null;
          k && (l = [k.key, this.getScrollOffset() - k.start]);
          const A = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          A && x > d && this.isAtEnd(o.scrollEndThreshold) && (d === 0 || r.getItemKey(x - 1) !== z) && (c = A);
        }
      }
      this.options = r, f && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, p = 0;
      if (l && this.scrollOffset !== null) {
        const [d, x] = l, C = this.getMeasurements(), { count: F, getItemKey: z } = this.options;
        let B = 0;
        for (; B < F && z(B) !== d; )
          B++;
        if (B < F) {
          const W = C[B];
          if (W) {
            const k = W.start + x;
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
        const p = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), l === 1) {
          const C = this.options.gap, F = n * 2;
          let z = this._flatMeasurements;
          if (!z || z.length < F) {
            const k = new Float64Array(F);
            z && p > 0 && k.set(z.subarray(0, p * 2)), z = k, this._flatMeasurements = z;
          }
          let B;
          if (p === 0)
            B = s + i;
          else {
            const k = p - 1;
            B = z[k * 2] + z[k * 2 + 1] + C;
          }
          for (let k = p; k < n; k++) {
            const A = r(k), D = a.get(A), Q = typeof D == "number" ? D : this.options.estimateSize(k);
            z[k * 2] = B, z[k * 2 + 1] = Q, B += Q + C;
          }
          const W = pa(n, z, r);
          return this.measurementsCache = W, W;
        }
        const d = this.measurementsCache.slice(0, p), x = new Array(l).fill(
          void 0
        );
        for (let C = 0; C < p; C++) {
          const F = d[C];
          F && (x[F.lane] = C);
        }
        for (let C = p; C < n; C++) {
          const F = r(C), z = this.laneAssignments.get(C);
          let B, W;
          const k = c === "estimate" || a.has(F);
          if (z !== void 0 && this.options.lanes > 1) {
            B = z;
            const K = x[B], P = K !== void 0 ? d[K] : void 0;
            W = P ? P.end + this.options.gap : s + i;
          } else {
            const K = this.options.lanes === 1 ? d[C - 1] : this.getFurthestMeasurement(d, C);
            W = K ? K.end + this.options.gap : s + i, B = K ? K.lane : C % this.options.lanes, this.options.lanes > 1 && k && this.laneAssignments.set(C, B);
          }
          const A = a.get(F), D = typeof A == "number" ? A : this.options.estimateSize(C), Q = W + D;
          d[C] = {
            index: C,
            start: W,
            size: D,
            end: Q,
            key: F,
            lane: B
          }, x[B] = C;
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
      const a = this.itemSizeCache.get(c) ?? o, p = s - a;
      if (p !== 0) {
        const d = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = d ? this.getTotalSize() : 0, C = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(c, s), this.itemSizeCacheVersion++, d ? this.applyScrollAdjustment(this.getTotalSize() - x) : C && this.applyScrollAdjustment(p), this.notify(!1);
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
      const p = c(a);
      p.type === "chat" && p.chat && (t.isBatchMode ? t.toggleSelection(p.chat.id) : t.loadMessages(p.chat));
    };
    return (a, p) => (fe(), he("div", {
      ref_key: "containerRef",
      ref: n,
      class: "virtual-list-container"
    }, [
      Y("div", {
        style: _t({ height: l() + "px", position: "relative", width: "100%" })
      }, [
        (fe(!0), he(Re, null, jr(o.value, (d) => {
          var x, C, F, z, B, W;
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
              onClick: (k) => ee(t).toggleChar(c(d.index).charName)
            }, [
              Y("div", Fa, [
                Y("span", Pa, _e(ee(t).expandedChars.has(c(d.index).charName) ? "📂" : "📁"), 1),
                Y("span", Na, _e(c(d.index).charName), 1)
              ]),
              Y("span", Ra, _e(c(d.index).chatCount), 1)
            ], 8, $a)) : (fe(), he("div", {
              key: 1,
              class: At(["chat-item", {
                active: !ee(t).isBatchMode && ee(t).currentChatId === ((x = c(d.index).chat) == null ? void 0 : x.id),
                selected: ee(t).isBatchMode && ee(t).selectedChatIds.includes(((C = c(d.index).chat) == null ? void 0 : C.id) || "")
              }]),
              onClick: (k) => f(d.index)
            }, [
              ee(t).isBatchMode ? (fe(), he("input", {
                key: 0,
                type: "checkbox",
                class: "batch-checkbox",
                checked: ee(t).selectedChatIds.includes(((F = c(d.index).chat) == null ? void 0 : F.id) || ""),
                onClick: En((k) => f(d.index), ["stop"])
              }, null, 8, Da)) : je("", !0),
              Y("div", ja, [
                Y("div", za, [
                  ee(t).searchQuery ? (fe(), he("span", Ba, "[" + _e(c(d.index).charName) + "]", 1)) : je("", !0),
                  io(" " + _e(((z = c(d.index).chat) == null ? void 0 : z.title) || "未命名会话"), 1)
                ]),
                ee(t).searchQuery ? (fe(), he("div", Ha, '"' + _e((B = c(d.index).searchHit) == null ? void 0 : B.content) + '"', 1)) : (fe(), he("div", Wa, "消息数: " + _e(((W = c(d.index).chat) == null ? void 0 : W.msgCount) ?? "..."), 1))
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
    }, r = () => setTimeout(i, 300), o = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), l = (v) => (v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), c = (v, g) => {
      if (!v)
        return "";
      const h = v.replace(/<[^>]+>/g, "");
      if (!g)
        return l(h);
      const S = h.toLowerCase(), _ = g.toLowerCase(), w = S.indexOf(_);
      if (w === -1)
        return l(h);
      const y = Math.max(0, w - 15), M = Math.min(h.length, w + g.length + 30);
      let H = h.slice(y, M);
      const j = y > 0 ? "..." : "", O = M < h.length ? "..." : "";
      let J = l(H);
      const te = new RegExp(o(g), "gi");
      return J = J.replace(te, (le) => `<mark class="search-highlight">${le}</mark>`), `${j}${J}${O}`;
    };
    let f = null;
    const a = (v, g) => {
      if (!g)
        return;
      const h = v.querySelector(".mes_text, .message-text, .content") || v, S = document.createTreeWalker(h, NodeFilter.SHOW_TEXT, null), _ = [];
      let w;
      for (; w = S.nextNode(); ) {
        const y = w, M = y.nodeValue || "", H = new RegExp(o(g), "gi");
        if (H.test(M)) {
          const j = document.createElement("span");
          j.innerHTML = l(M).replace(H, (O) => `<mark style="background-color: #ff9800; color: #fff; padding: 0 3px; border-radius: 3px; box-shadow: 0 0 6px rgba(255,152,0,0.8); font-weight: bold;">${O}</mark>`), y.parentNode && _.push({ old: y, new: j, parent: y.parentNode });
        }
      }
      _.forEach((y) => y.parent.replaceChild(y.new, y.old)), f && clearTimeout(f), f = window.setTimeout(() => {
        _.forEach((y) => {
          y.parent.contains(y.new) && y.parent.replaceChild(y.old, y.new);
        }), f = null;
      }, 3500);
    };
    class p {
      get win() {
        return window;
      }
      get context() {
        var g, h;
        try {
          if (typeof ((g = this.win.SillyTavern) == null ? void 0 : g.getContext) == "function")
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
      selectCharacterById(g) {
        if (typeof this.context.selectCharacter == "function")
          return this.context.selectCharacter(g), !0;
        if (typeof this.win.selectCharacterById == "function")
          return this.win.selectCharacterById(g), !0;
        const h = document.querySelector(`.character_select[chid="${g}"], [data-character-id="${g}"], .character-item[data-id="${g}"]`);
        return h ? (h.click(), !0) : !1;
      }
      loadChat(g) {
        const h = g.replace(/\.jsonl?$/, ""), S = h + ".jsonl";
        try {
          if (typeof this.context.openCharacterChat == "function")
            return this.context.openCharacterChat(h), !0;
          if (typeof this.context.executeSlashCommandsWithOptions == "function")
            return this.context.executeSlashCommandsWithOptions("/chat " + JSON.stringify(h)), !0;
        } catch {
        }
        return typeof this.context.loadChat == "function" ? (this.context.loadChat(S), !0) : typeof this.win.loadChat == "function" ? (this.win.loadChat(S), !0) : typeof this.win.getChat == "function" ? (this.win.chat_file_name = S, this.win.getChat(), !0) : this.clickHistoryItem(S);
      }
      clickHistoryItem(g) {
        const h = g.replace(/\.jsonl?$/, ""), S = h + ".jsonl", _ = [`[chatfile="${S}"]`, `[chatfile="${h}"]`, `[file_name="${h}"]`, `[data-chat-file="${S}"]`];
        for (const y of _) {
          const M = document.querySelector(y);
          if (M)
            return M.click(), !0;
        }
        const w = document.querySelectorAll('.past_chat_item, .chat-history-item, [class*="history-item"]');
        for (let y = 0; y < w.length; y++)
          if ((w[y].textContent || "").includes(h))
            return w[y].click(), !0;
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
      findCharacterElement(g, h) {
        var H;
        const S = (j) => (j || "").replace(/\s+/g, "").toLowerCase(), _ = S(g), w = h && decodeURIComponent(h).replace(/\\/g, "/").split("/").pop() || "", y = [".character_select", ".character-select", "[data-character-id]", ".ch_card", ".character-item"];
        let M = null;
        for (const j of y) {
          const O = document.querySelectorAll(j);
          if (O.length) {
            M = O;
            break;
          }
        }
        if (!M)
          return { element: null, index: -1 };
        for (const j of M) {
          const O = S(j.textContent || "") + S(j.getAttribute("ch_name") || "") + S(j.getAttribute("name") || ""), J = ((H = j.querySelector("img")) == null ? void 0 : H.getAttribute("src")) || j.getAttribute("avatar") || "", te = J && decodeURIComponent(J).replace(/\\/g, "/").split("/").pop() || "";
          if (O.includes(_) || w && te && (te.includes(w) || w.includes(te))) {
            let le = parseInt(j.getAttribute("chid") || j.getAttribute("data-character-id") || j.getAttribute("data-id") || "-1", 10);
            return { element: j, index: isNaN(le) ? -1 : le };
          }
        }
        return { element: null, index: -1 };
      }
      findMessageElement(g, h, S, _) {
        const w = document.getElementById("chat") || document.body, y = Array.from(w.querySelectorAll(".mes, [mesid]")).filter((O) => !O.closest(".log-manager-modal")), M = g.mesid ?? g.id;
        if (M != null)
          for (let O = y.length - 1; O >= 0; O--) {
            const J = y[O];
            if (J.dataset.mesid === String(M) || J.getAttribute("mesid") === String(M))
              return J;
          }
        if (!S && h >= 0)
          for (let O = y.length - 1; O >= 0; O--) {
            const J = y[O];
            if (parseInt(J.dataset.index || J.getAttribute("mesid") || "-1", 10) === h)
              return J;
          }
        const H = (O) => (O || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        let j = H(g.mes);
        if (j.length > 40 && (j = j.substring(0, 40)), j.length >= 4)
          for (let O = y.length - 1; O >= 0; O--) {
            const J = y[O], te = J.querySelector(".mes_text, .message-text, .content") || J;
            if (H(te.textContent).includes(j))
              return J;
          }
        if (S && _) {
          const O = H(_);
          if (O.length >= 2)
            for (let J = y.length - 1; J >= 0; J--) {
              const te = y[J], le = te.querySelector(".mes_text, .message-text, .content") || te;
              if (H(le.textContent).includes(O))
                return te;
            }
        }
        return null;
      }
      // ⚠️ 修复：严格保留这段状态切除逻辑，这是您验证成功的基础
      resetCurrentCharacter() {
        this.context.characterId !== void 0 && (this.context.characterId = -1), this.win.this_chid !== void 0 && (this.win.this_chid = -1);
      }
    }
    const d = vo(), x = new p(), C = /* @__PURE__ */ Cn(null);
    function F() {
      const v = document.documentElement;
      if (v.classList.contains("dark"))
        return !0;
      if (v.classList.contains("light"))
        return !1;
      const h = (getComputedStyle(document.body).backgroundColor || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (h) {
        const S = parseInt(h[1], 10), _ = parseInt(h[2], 10), w = parseInt(h[3], 10);
        return 128 > S * 0.299 + _ * 0.587 + w * 0.114;
      }
      return !0;
    }
    const z = /* @__PURE__ */ ge(F());
    let B = null;
    const W = () => {
      B !== null && cancelAnimationFrame(B), B = requestAnimationFrame(() => {
        if (!C.value)
          return;
        const v = getComputedStyle(document.body);
        let g = v.backgroundColor;
        (!g || g === "rgba(0, 0, 0, 0)" || g === "transparent") && (g = z.value ? "#1e1e1e" : "#f5f5f5");
        let h = v.color;
        const S = document.querySelector(".mes_text, .message-text");
        if (S) {
          const M = getComputedStyle(S).color;
          M && M !== "rgba(0, 0, 0, 0)" && M !== "transparent" && (h = M);
        }
        const _ = (M) => {
          const H = M.match(/\d+/g);
          return H && H.length >= 3 ? parseInt(H[0], 10) * 0.299 + parseInt(H[1], 10) * 0.587 + parseInt(H[2], 10) * 0.114 : 128;
        }, w = _(g), y = _(h);
        50 > Math.abs(w - y) && (h = 128 > w ? "#E8E8E8" : "#33312F"), C.value.style.backgroundColor = g, C.value.style.color = h, C.value.style.setProperty("--dynamic-solid-bg", g);
      });
    };
    let k = null, A = null;
    const D = /* @__PURE__ */ ge(!1), Q = /* @__PURE__ */ Cn(null), K = /* @__PURE__ */ ge({ top: "calc(100% + 5px)", right: "0", bottom: "auto", left: "auto", transform: "none" }), P = /* @__PURE__ */ ge(!1), L = /* @__PURE__ */ ge(!1), V = /* @__PURE__ */ ge(null), q = /* @__PURE__ */ new Set(), R = async () => {
      if (D.value = !D.value, D.value) {
        if (await en(), window.innerWidth <= 768)
          K.value = { top: "50%", left: "50%", transform: "translate(-50%, -50%)", bottom: "auto", right: "auto" };
        else if (Q.value) {
          const v = Q.value.getBoundingClientRect();
          let g = "calc(100% + 5px)", h = "auto", S = "0", _ = "auto";
          window.innerHeight - v.bottom < 150 && (g = "auto", h = "calc(100% + 5px)"), v.right < 160 && (S = "auto", _ = "0"), K.value = { top: g, bottom: h, right: S, left: _, transform: "none" };
        }
      }
    }, X = /* @__PURE__ */ Cn(null), ue = /* @__PURE__ */ ge(0), Ie = Le(() => {
      const v = d.currentMessages || [];
      return Array.isArray(v) ? d.searchQuery ? [...v].sort((g, h) => {
        const S = g.send_date ?? g.timestamp ?? 0;
        return (h.send_date ?? h.timestamp ?? 0) - S;
      }) : v : [];
    }), oe = Le(() => Ie.value.length), Z = Le(() => oe.value * Sn), re = Le(() => {
      const v = X.value;
      if (!v)
        return { start: 0, end: Math.min(oe.value, 20) };
      const g = Math.floor(ue.value / Sn), h = Math.ceil((ue.value + v.clientHeight) / Sn);
      return { start: Math.max(0, g - Hi), end: Math.min(oe.value, h + Hi) };
    }), Ze = Le(() => {
      const v = d.searchQuery, g = re.value.start;
      return Ie.value.slice(g, re.value.end).map((h, S) => {
        const _ = g + S;
        return {
          ...h,
          _localIndex: S,
          _globalIndex: _,
          _top: _ * Sn,
          _html: c(h.mes, v)
        };
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
      t = !0, i(), window.addEventListener("resize", i), window.addEventListener("orientationchange", r), await en(), W(), k = new MutationObserver(() => {
        const g = F();
        g !== z.value && (z.value = g), W();
      }), k.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), k.observe(document.body, { attributes: !0, attributeFilter: ["class", "style"] });
      const v = window.matchMedia("(prefers-color-scheme: dark)");
      A = () => {
        const g = F();
        g !== z.value && (z.value = g), W();
      }, v.addEventListener("change", A), d.fetchChats(), window.refreshChatLogManager ? window.refreshChatLogManager_fallback = () => d.fetchChats() : window.refreshChatLogManager = () => d.fetchChats(), X.value && dt.observe(X.value);
    }), Hs(() => {
      t = !1, window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r), k && k.disconnect(), A && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", A), B !== null && cancelAnimationFrame(B), xt && clearTimeout(xt), f && clearTimeout(f), be && clearTimeout(be), tt && tt.abort(), dt.disconnect(), q.forEach((v) => v.disconnect()), q.clear();
    });
    const nt = () => {
      typeof window.closeChatLogManager == "function" ? window.closeChatLogManager() : n.value = !1;
    }, pt = (v) => {
      const g = x.getCurrentChatFileName();
      return g && g.replace(/\.jsonl?$/, "") === v.replace(/\.jsonl?$/, "");
    }, St = async (v, g, h) => {
      try {
        x.saveChat();
        let { element: S, index: _ } = x.findCharacterElement(v, g);
        if (_ === -1) {
          const y = x.getCharacters(), M = (O) => (O || "").replace(/\s+/g, "").toLowerCase(), H = M(v), j = y.find((O) => M(O.name) === H);
          j && (_ = y.indexOf(j));
        }
        if (_ === -1)
          return alert(`自动定位角色【${v}】失败，请手动在左侧选择该角色后继续。`), !1;
        const w = x.getCurrentCharacterId();
        return String(w) === String(_) ? (x.clickHistoryItem(h) || x.loadChat(h), await new Promise((y) => setTimeout(y, 600))) : (x.resetCurrentCharacter(), S ? S.click() : x.selectCharacterById(_), await new Promise((y) => setTimeout(y, 1200)), x.loadChat(h), await new Promise((y) => setTimeout(y, 600))), !0;
      } catch (S) {
        return console.error("[ChatLogManager] Jump Error:", S), !1;
      }
    }, st = (v, g, h, S) => {
      const _ = document.getElementById("chat") || document.querySelector(".chat-container, #chat-window") || document.body;
      if (!_)
        return;
      let w = !1;
      const y = () => {
        if (w)
          return !0;
        const O = x.findMessageElement(v, g, h, S);
        if (O) {
          w = !0;
          const J = () => O.scrollIntoView({ behavior: "smooth", block: "center" });
          return J(), setTimeout(J, 200), setTimeout(J, 500), O.style.transition = "all 0.5s ease", O.style.boxShadow = "0 0 30px 10px rgba(255, 152, 0, 0.8)", O.style.backgroundColor = "rgba(255, 152, 0, 0.25)", setTimeout(() => {
            O.style.boxShadow = "", O.style.backgroundColor = "";
          }, 3e3), h && S && a(O, S), !0;
        }
        return !1;
      };
      if (y())
        return;
      const M = new MutationObserver(() => {
        y() && (M.disconnect(), q.delete(M));
      });
      M.observe(_, { childList: !0, subtree: !0, attributes: !1 }), q.add(M);
      let H = 0;
      const j = setInterval(() => {
        if (H++, y()) {
          clearInterval(j), M.disconnect(), q.delete(M);
          return;
        }
        H > 5 && H % 3 === 0 && (_.scrollTop = Math.max(0, _.scrollTop - 800)), H > 40 && (clearInterval(j), M.disconnect(), q.delete(M));
      }, 200);
    }, Wt = async () => {
      const v = d.allChats.find((h) => h.id === d.currentChatId);
      if (!v)
        return;
      nt(), await new Promise((h) => setTimeout(h, 100)), pt(v.id) || await St(v.charName, v.avatarUrl, v.id);
    }, Vt = async (v, g) => {
      let h = v.chatId || v.chat_id;
      if (!h && v.id && typeof v.id == "string") {
        const M = v.id.lastIndexOf("_");
        M !== -1 ? h = v.id.substring(0, M) : h = v.id;
      }
      h || (h = d.currentChatId);
      const S = d.allChats.find((M) => M.id === h);
      if (!S) {
        alert("无法定位该消息归属的聊天文件，可能数据不完整或被删除。");
        return;
      }
      const _ = !!d.searchQuery, w = d.searchQuery, y = pt(S.id);
      nt(), await new Promise((M) => setTimeout(M, 100)), (y || await St(S.charName, S.avatarUrl, S.id)) && st(v, g, _, w);
    }, u = async () => {
      const v = d.allChats.find((h) => h.id === d.currentChatId);
      if (!v)
        return;
      const g = pt(v.id);
      if (window.confirm(g ? "🚨 正在删除活跃聊天！将自动切换到历史记录，确定删除？" : "⚠️ 确定要永久删除此记录吗？"))
        try {
          if (x.saveChat(), g) {
            const h = d.allChats.find((S) => S.charName === v.charName && S.id !== v.id);
            h && await St(h.charName, h.avatarUrl, h.id);
          }
          await Ri(v.charName, v.avatarUrl, v.id) ? (d.$patch({ currentChatId: null, currentMessages: [], selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), d.performSearch(""), d.fetchChats()) : alert("❌ 删除失败");
        } catch (h) {
          console.error("[ChatLogManager] Delete Error:", h);
        }
    }, m = async () => {
      var h;
      if (d.selectedChatIds.length === 0 || !window.confirm(`🛑 极度危险！将删除 ${d.selectedChatIds.length} 个会话，确定吗？`))
        return;
      P.value = !0;
      let v = 0, g = 0;
      try {
        const S = Array.from(d.selectedChatIds);
        let _ = !1, w = "";
        for (const y of S)
          if (pt(y)) {
            _ = !0, w = ((h = d.allChats.find((M) => M.id === y)) == null ? void 0 : h.charName) || "";
            break;
          }
        if (x.saveChat(), _) {
          const y = d.allChats.find((M) => M.charName === w && !S.includes(M.id));
          y && await St(y.charName, y.avatarUrl, y.id);
        }
        for (const y of S) {
          const M = d.allChats.find((H) => H.id === y);
          M && await Ri(M.charName, M.avatarUrl, M.id) ? v++ : g++;
        }
        d.$patch({ selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), d.performSearch("");
      } catch (S) {
        console.error("[ChatLogManager] Batch Delete Error:", S);
      } finally {
        P.value = !1, t && (alert(`🗑️ 完毕！成功: ${v}${g > 0 ? ` 失败: ${g}` : ""}`), d.fetchChats());
      }
    };
    async function b(v, g) {
      const h = [];
      let S = 0;
      const _ = async () => {
        if (S >= g.length)
          return;
        const w = S++;
        try {
          h[w] = { success: !0, value: await g[w]() };
        } catch (y) {
          console.error(y), h[w] = { success: !1, error: y };
        }
        await _();
      };
      return await Promise.all(Array(Math.min(v, g.length)).fill(null).map(() => _())), h;
    }
    const I = async (v) => {
      var _, w, y, M, H, j;
      D.value = !1;
      const g = d.allChats.find((O) => O.id === d.currentChatId);
      if (!g) {
        alert("未找到当前聊天记录");
        return;
      }
      let h = [];
      try {
        h = JSON.parse(JSON.stringify(d.currentMessages || []));
      } catch {
        h = Array.from(d.currentMessages || []);
      }
      if (!Array.isArray(h) || h.length === 0) {
        alert("当前聊天没有消息可导出");
        return;
      }
      const S = g.title || "未命名聊天";
      try {
        if (v === "txt")
          try {
            await ji(S, h);
          } catch (O) {
            if ((_ = O == null ? void 0 : O.message) != null && _.includes("map") || (w = O == null ? void 0 : O.message) != null && w.includes("iterable"))
              await ji(h, S);
            else
              throw O;
          }
        else if (v === "md")
          try {
            await zi(S, h);
          } catch (O) {
            if ((y = O == null ? void 0 : O.message) != null && y.includes("map") || (M = O == null ? void 0 : O.message) != null && M.includes("iterable"))
              await zi(h, S);
            else
              throw O;
          }
        else if (v === "jsonl")
          try {
            await Bi(S, g.charName, h);
          } catch (O) {
            if ((H = O == null ? void 0 : O.message) != null && H.includes("map") || (j = O == null ? void 0 : O.message) != null && j.includes("iterable"))
              await Bi(S, h, g.charName);
            else
              throw O;
          }
      } catch (O) {
        console.error("[ChatLogManager] 单独导出失败:", O), alert("导出操作遇到错误，请查看控制台日志。");
      }
    }, E = async (v) => {
      if (d.selectedChatIds.length !== 0) {
        P.value = !0;
        try {
          const g = Array.from(d.selectedChatIds).map((_) => async () => {
            const w = d.allChats.find((y) => y.id === _);
            return w ? { title: w.title, charName: w.charName, messages: await As(w.charName, w.avatarUrl, w.id) } : null;
          }), S = (await b(5, g)).filter((_) => _.success && _.value !== null).map((_) => _.value);
          Ja(S, v);
        } catch (g) {
          console.error("[ChatLogManager] Batch Export Error:", g);
        } finally {
          P.value = !1;
        }
      }
    }, T = () => {
      V.value && V.value.click();
    }, N = async (v) => {
      const g = v.target.files;
      if (!g || g.length === 0)
        return;
      L.value = !0, s.value = 0;
      let h = 0, S = 0;
      try {
        for (let _ = 0; _ < g.length; _++) {
          const w = await g[_].text();
          let y;
          try {
            y = JSON.parse(w);
          } catch {
            y = w.split(`
`).filter((te) => te.trim()).map((te) => JSON.parse(te));
          }
          let M = [];
          Array.isArray(y) && (y.length > 0 && Array.isArray(y[0]) ? M = y.map((te) => ({ messages: te })) : y.length > 0 && y[0].messages ? M = y : y.length > 0 && y[0].chat_metadata ? M = [{ charName: y[0].character_name, messages: y.slice(1) }] : M = [{ messages: y }]);
          const H = M.length;
          let j = 0;
          const O = async (te) => {
            var le;
            for (const Ve of te) {
              const Pt = Ve.messages.filter((Oe) => Oe.mes !== void 0);
              if (Pt.length === 0)
                continue;
              let ve = Ve.charName || ((le = Pt.find((Oe) => !Oe.is_user && Oe.name)) == null ? void 0 : le.name) || "";
              if (!ve) {
                const Oe = window.prompt("发现未绑定角色的对话记录，请输入要绑定的角色名称（留空则跳过）：", "");
                if (!Oe) {
                  S++;
                  continue;
                }
                ve = Oe;
              }
              let Me = d.allChats.find((Oe) => Oe.charName === ve || ve.includes(Oe.charName));
              Me && await da(Pt, Me.avatarUrl, Me.charName) ? h++ : (console.warn(`[ChatLogManager] Import skipped, character not found: ${ve}`), S++);
            }
          }, J = 10;
          for (let te = 0; te < H; te += J) {
            const le = M.slice(te, te + J);
            await O(le), j += le.length, s.value = Math.floor(j / H * 100), await new Promise((Ve) => setTimeout(Ve, 0));
          }
        }
      } catch (_) {
        console.error("[ChatLogManager] Import Error:", _);
      } finally {
        L.value = !1, s.value = 0, V.value && (V.value.value = ""), t && (alert(`🎉 导入完毕！成功: ${h}${S > 0 ? ` 失败: ${S} (含跳过)` : ""}`), d.fetchChats());
      }
    };
    return (v, g) => n.value ? (fe(), he("div", {
      key: 0,
      class: "log-manager-modal",
      onClick: En(nt, ["self"]),
      onTouchmove: g[9] || (g[9] = En(() => {
      }, ["self", "prevent"]))
    }, [
      Y("div", {
        class: At(["log-manager-container", z.value ? "theme-dark" : "theme-light"]),
        ref_key: "containerRef",
        ref: C
      }, [
        Y("header", qa, [
          g[10] || (g[10] = Y("h2", null, "📚 聊天记录总览", -1)),
          Y("div", Ya, [
            Y("button", {
              class: "action-btn import-btn",
              onClick: T,
              disabled: L.value
            }, _e(L.value ? `导入中... ${s.value}%` : "📥 导入"), 9, Ga),
            Y("input", {
              type: "file",
              ref_key: "fileInputRef",
              ref: V,
              style: { display: "none" },
              accept: ".json,.jsonl",
              multiple: "",
              onChange: N
            }, null, 544),
            Y("button", {
              class: At(["action-btn toggle-batch-btn", { active: ee(d).isBatchMode }]),
              onClick: g[0] || (g[0] = //@ts-ignore
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
                onChange: g[1] || (g[1] = //@ts-ignore
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
                    onClick: R
                  }, "📤 导出 ▾"),
                  Te(Cc, { name: "fade-slide" }, {
                    default: Tr(() => [
                      D.value ? (fe(), he("div", {
                        key: 0,
                        class: "dropdown-menu",
                        style: _t(K.value)
                      }, [
                        Y("div", {
                          class: "dropdown-item",
                          onClick: g[2] || (g[2] = (h) => I("md"))
                        }, "📄 Markdown"),
                        Y("div", {
                          class: "dropdown-item",
                          onClick: g[3] || (g[3] = (h) => I("txt"))
                        }, "📝 TXT 纯文本"),
                        Y("div", {
                          class: "dropdown-item",
                          onClick: g[4] || (g[4] = (h) => I("jsonl"))
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
                  onClick: g[5] || (g[5] = (h) => E("md")),
                  disabled: P.value
                }, _e(P.value ? "处理中..." : "📥 导出为 Markdown"), 9, du),
                Y("button", {
                  class: "big-btn txt-btn",
                  onClick: g[6] || (g[6] = (h) => E("txt")),
                  disabled: P.value
                }, _e(P.value ? "处理中..." : "📥 导出为 TXT"), 9, pu),
                Y("button", {
                  class: "big-btn json-btn",
                  onClick: g[7] || (g[7] = (h) => E("json")),
                  disabled: P.value
                }, _e(P.value ? "处理中..." : "📦 导出为 JSON"), 9, gu),
                g[11] || (g[11] = Y("div", { class: "divider" }, null, -1)),
                Y("button", {
                  class: "big-btn delete-btn",
                  onClick: m,
                  disabled: P.value
                }, _e(P.value ? "删除中..." : "🗑️ 永久删除记录"), 9, mu)
              ])) : je("", !0)
            ])) : (fe(), he("div", {
              key: 1,
              class: "message-container",
              ref_key: "scrollContainer",
              ref: X,
              onScroll: et,
              onClick: g[8] || (g[8] = (h) => D.value = !1)
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
                      onClick: En((S) => Vt(h, h._globalIndex), ["stop"]),
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
const xu = /* @__PURE__ */ _o(bu, [["__scopeId", "data-v-3affef36"]]), bo = "chat-log-manager-float-pos";
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
    }, t = function(p, d) {
      const x = p - o, C = d - l;
      (Math.abs(x) > 5 || Math.abs(C) > 5) && (r = !0), s.style.left = Math.max(0, Math.min(c + x, window.innerWidth - s.offsetWidth)) + "px", s.style.top = Math.max(0, Math.min(f + C, window.innerHeight - s.offsetHeight)) + "px";
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
    e(), s.addEventListener("mousedown", (p) => {
      if (p.button !== 0)
        return;
      e(), o = p.clientX, l = p.clientY;
      const d = s.getBoundingClientRect();
      c = d.left, f = d.top, s.style.transition = "none";
      const x = (F) => t(F.clientX, F.clientY), C = () => {
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", C), s.style.transition = "all 0.3s ease", r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", C);
    }), s.addEventListener("touchstart", (p) => {
      e();
      const d = p.touches[0];
      o = d.clientX, l = d.clientY;
      const x = s.getBoundingClientRect();
      c = x.left, f = x.top;
      const C = (z) => t(z.touches[0].clientX, z.touches[0].clientY), F = () => {
        document.removeEventListener("touchmove", C), document.removeEventListener("touchend", F), r && Wi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("touchend", F);
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
