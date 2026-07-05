/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function $s(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const fe = {}, Vt = [], We = () => {
}, Wi = () => !1, jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), zn = (e) => e.startsWith("onUpdate:"), ve = Object.assign, Fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _o = Object.prototype.hasOwnProperty, ie = (e, t) => _o.call(e, t), U = Array.isArray, Kt = (e) => yn(e) === "[object Map]", Vi = (e) => yn(e) === "[object Set]", Qs = (e) => yn(e) === "[object Date]", X = (e) => typeof e == "function", pe = (e) => typeof e == "string", ke = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Ki = (e) => (re(e) || X(e)) && X(e.then) && X(e.catch), Ui = Object.prototype.toString, yn = (e) => Ui.call(e), bo = (e) => yn(e).slice(8, -1), Ji = (e) => yn(e) === "[object Object]", Bn = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ $s(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, xo = /-\w/g, Ve = Hn(
  (e) => e.replace(xo, (t) => t.slice(1).toUpperCase())
), So = /\B([A-Z])/g, Rt = Hn(
  (e) => e.replace(So, "-$1").toLowerCase()
), qi = Hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ts = Hn(
  (e) => e ? `on${qi(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), ns = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, wo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Co = (e) => {
  const t = pe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xs;
const Wn = () => Xs || (Xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bt(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = pe(s) ? Mo(s) : bt(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (pe(e) || re(e))
    return e;
}
const Eo = /;(?![^(]*\))/g, To = /:([^]+)/, Io = /\/\*[^]*?\*\//g;
function Mo(e) {
  const t = {};
  return e.replace(Io, "").split(Eo).forEach((n) => {
    if (n) {
      const s = n.split(To);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function $t(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const s = $t(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ao = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Oo = /* @__PURE__ */ $s(Ao);
function Gi(e) {
  return !!e || e === "";
}
function Lo(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ps(e[s], t[s]);
  return n;
}
function Ps(e, t) {
  if (e === t)
    return !0;
  let n = Qs(e), s = Qs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ke(e), s = ke(t), n || s)
    return e === t;
  if (n = U(e), s = U(t), n || s)
    return n && s ? Lo(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Ps(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Qi = (e) => !!(e && e.__v_isRef === !0), be = (e) => pe(e) ? e : e == null ? "" : U(e) || re(e) && (e.toString === Ui || !X(e.toString)) ? Qi(e) ? be(e.value) : JSON.stringify(e, Xi, 2) : String(e), Xi = (e, t) => Qi(t) ? Xi(e, t.value) : Kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[ss(s, r) + " =>"] = i, n),
    {}
  )
} : Vi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ss(n))
} : ke(t) ? ss(t) : re(t) && !U(t) && !Ji(t) ? String(t) : t, ss = (e, t = "") => {
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
class Zi {
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
function er(e) {
  return new Zi(e);
}
function tr() {
  return ye;
}
function nr(e, t = !1) {
  ye && ye.cleanups.push(e);
}
let ue;
const is = /* @__PURE__ */ new WeakSet();
class sr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && (ye.active ? ye.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, is.has(this) && (is.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || rr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zs(this), or(this);
    const t = ue, n = Ke;
    ue = this, Ke = !0;
    try {
      return this.fn();
    } finally {
      lr(this), ue = t, Ke = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ks(t);
      this.deps = this.depsTail = void 0, Zs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ys(this) && this.run();
  }
  get dirty() {
    return ys(this);
  }
}
let ir = 0, nn, sn;
function rr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = sn, sn = e;
    return;
  }
  e.next = nn, nn = e;
}
function Ns() {
  ir++;
}
function Rs() {
  if (--ir > 0)
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
function or(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ks(s), $o(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ys(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (cr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function cr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn) || (e.globalVersion = fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ys(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ue, s = Ke;
  ue = e, Ke = !0;
  try {
    or(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ze(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ue = n, Ke = s, lr(e), e.flags &= -3;
  }
}
function ks(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ks(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $o(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ke = !0;
const ar = [];
function tt() {
  ar.push(Ke), Ke = !1;
}
function nt() {
  const e = ar.pop();
  Ke = e === void 0 ? !0 : e;
}
function Zs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ue;
    ue = void 0;
    try {
      t();
    } finally {
      ue = n;
    }
  }
}
let fn = 0;
class Fo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ds {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ue || !Ke || ue === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ue)
      n = this.activeLink = new Fo(ue, this), ue.deps ? (n.prevDep = ue.depsTail, ue.depsTail.nextDep = n, ue.depsTail = n) : ue.deps = ue.depsTail = n, ur(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ue.depsTail, n.nextDep = void 0, ue.depsTail.nextDep = n, ue.depsTail = n, ue.deps === n && (ue.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    Ns();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Rs();
    }
  }
}
function ur(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ur(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Mn = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ Symbol(
  ""
), _s = /* @__PURE__ */ Symbol(
  ""
), hn = /* @__PURE__ */ Symbol(
  ""
);
function Se(e, t, n) {
  if (Ke && ue) {
    let s = Mn.get(e);
    s || Mn.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ds()), i.map = s, i.key = n), i.track();
  }
}
function lt(e, t, n, s, i, r) {
  const o = Mn.get(e);
  if (!o) {
    fn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ns(), t === "clear")
    o.forEach(l);
  else {
    const c = U(e), f = c && Bn(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((p, h) => {
        (h === "length" || h === hn || !ke(h) && h >= a) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(hn)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Ft)), Kt(e) && l(o.get(_s)));
          break;
        case "delete":
          c || (l(o.get(Ft)), Kt(e) && l(o.get(_s)));
          break;
        case "set":
          Kt(e) && l(o.get(Ft));
          break;
      }
  }
  Rs();
}
function Po(e, t) {
  const n = Mn.get(e);
  return n && n.get(t);
}
function zt(e) {
  const t = /* @__PURE__ */ se(e);
  return t === e ? t : (Se(t, "iterate", hn), /* @__PURE__ */ $e(e) ? t : t.map(Ue));
}
function Vn(e) {
  return Se(e = /* @__PURE__ */ se(e), "iterate", hn), e;
}
function Qe(e, t) {
  return /* @__PURE__ */ at(e) ? Jt(/* @__PURE__ */ ct(e) ? Ue(t) : t) : Ue(t);
}
const No = {
  __proto__: null,
  [Symbol.iterator]() {
    return rs(this, Symbol.iterator, (e) => Qe(this, e));
  },
  concat(...e) {
    return zt(this).concat(
      ...e.map((t) => U(t) ? zt(t) : t)
    );
  },
  entries() {
    return rs(this, "entries", (e) => (e[1] = Qe(this, e[1]), e));
  },
  every(e, t) {
    return st(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return st(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Qe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return st(
      this,
      "find",
      e,
      t,
      (n) => Qe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return st(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return st(
      this,
      "findLast",
      e,
      t,
      (n) => Qe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return st(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return st(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return os(this, "includes", e);
  },
  indexOf(...e) {
    return os(this, "indexOf", e);
  },
  join(e) {
    return zt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return os(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yt(this, "pop");
  },
  push(...e) {
    return Yt(this, "push", e);
  },
  reduce(e, ...t) {
    return ei(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ei(this, "reduceRight", e, t);
  },
  shift() {
    return Yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
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
    return rs(this, "values", (e) => Qe(this, e));
  }
};
function rs(e, t, n) {
  const s = Vn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ $e(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Ro = Array.prototype;
function st(e, t, n, s, i, r) {
  const o = Vn(e), l = o !== e && !/* @__PURE__ */ $e(e), c = o[t];
  if (c !== Ro[t]) {
    const p = c.apply(e, r);
    return l ? Ue(p) : p;
  }
  let f = n;
  o !== e && (l ? f = function(p, h) {
    return n.call(this, Qe(e, p), h, e);
  } : n.length > 2 && (f = function(p, h) {
    return n.call(this, p, h, e);
  }));
  const a = c.call(o, f, s);
  return l && i ? i(a) : a;
}
function ei(e, t, n, s) {
  const i = Vn(e), r = i !== e && !/* @__PURE__ */ $e(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(f, a, p) {
    return l && (l = !1, f = Qe(e, f)), n.call(this, f, Qe(e, a), p, e);
  }) : n.length > 3 && (o = function(f, a, p) {
    return n.call(this, f, a, p, e);
  }));
  const c = i[t](o, ...s);
  return l ? Qe(e, c) : c;
}
function os(e, t, n) {
  const s = /* @__PURE__ */ se(e);
  Se(s, "iterate", hn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Un(n[0]) ? (n[0] = /* @__PURE__ */ se(n[0]), s[t](...n)) : i;
}
function Yt(e, t, n = []) {
  tt(), Ns();
  const s = (/* @__PURE__ */ se(e))[t].apply(e, n);
  return Rs(), nt(), s;
}
const ko = /* @__PURE__ */ $s("__proto__,__v_isRef,__isVue"), fr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ke)
);
function Do(e) {
  ke(e) || (e = String(e));
  const t = /* @__PURE__ */ se(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class hr {
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
      return s === (i ? r ? qo : mr : r ? gr : pr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = U(t);
    if (!i) {
      let c;
      if (o && (c = No[n]))
        return c;
      if (n === "hasOwnProperty")
        return Do;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ge(t) ? t : s
    );
    if ((ke(n) ? fr.has(n) : ko(n)) || (i || Se(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ge(l)) {
      const c = o && Bn(n) ? l : l.value;
      return i && re(c) ? /* @__PURE__ */ xs(c) : c;
    }
    return re(l) ? i ? /* @__PURE__ */ xs(l) : /* @__PURE__ */ Kn(l) : l;
  }
}
class dr extends hr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = U(t) && Bn(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ at(r);
      if (!/* @__PURE__ */ $e(s) && !/* @__PURE__ */ at(s) && (r = /* @__PURE__ */ se(r), s = /* @__PURE__ */ se(s)), !o && /* @__PURE__ */ ge(r) && !/* @__PURE__ */ ge(s))
        return f || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ge(t) ? t : i
    );
    return t === /* @__PURE__ */ se(i) && c && (l ? Ze(s, r) && lt(t, "set", n, s) : lt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && lt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ke(n) || !fr.has(n)) && Se(t, "has", n), s;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      U(t) ? "length" : Ft
    ), Reflect.ownKeys(t);
  }
}
class jo extends hr {
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
const zo = /* @__PURE__ */ new dr(), Bo = /* @__PURE__ */ new jo(), Ho = /* @__PURE__ */ new dr(!0);
const bs = (e) => e, xn = (e) => Reflect.getPrototypeOf(e);
function Wo(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ se(i), o = Kt(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = i[e](...s), a = n ? bs : t ? Jt : Ue;
    return !t && Se(
      r,
      "iterate",
      c ? _s : Ft
    ), ve(
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
function Sn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vo(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ se(r), l = /* @__PURE__ */ se(i);
      e || (Ze(i, l) && Se(o, "get", i), Se(o, "get", l));
      const { has: c } = xn(o), f = t ? bs : e ? Jt : Ue;
      if (c.call(o, i))
        return f(r.get(i));
      if (c.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ se(i), "iterate", Ft), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ se(r), l = /* @__PURE__ */ se(i);
      return e || (Ze(i, l) && Se(o, "has", i), Se(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ se(l), f = t ? bs : e ? Jt : Ue;
      return !e && Se(c, "iterate", Ft), l.forEach((a, p) => i.call(r, f(a), f(p), o));
    }
  };
  return ve(
    n,
    e ? {
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ se(this), o = xn(r), l = /* @__PURE__ */ se(i), c = !t && !/* @__PURE__ */ $e(i) && !/* @__PURE__ */ at(i) ? l : i;
        return o.has.call(r, c) || Ze(i, c) && o.has.call(r, i) || Ze(l, c) && o.has.call(r, l) || (r.add(c), lt(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ $e(r) && !/* @__PURE__ */ at(r) && (r = /* @__PURE__ */ se(r));
        const o = /* @__PURE__ */ se(this), { has: l, get: c } = xn(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ se(i), f = l.call(o, i));
        const a = c.call(o, i);
        return o.set(i, r), f ? Ze(r, a) && lt(o, "set", i, r) : lt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ se(this), { has: o, get: l } = xn(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ se(i), c = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return c && lt(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ se(this), r = i.size !== 0, o = i.clear();
        return r && lt(
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
    n[i] = Wo(i, e, t);
  }), n;
}
function js(e, t) {
  const n = Vo(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ie(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Ko = {
  get: /* @__PURE__ */ js(!1, !1)
}, Uo = {
  get: /* @__PURE__ */ js(!1, !0)
}, Jo = {
  get: /* @__PURE__ */ js(!0, !1)
};
const pr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap();
function Yo(e) {
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
function Kn(e) {
  return /* @__PURE__ */ at(e) ? e : zs(
    e,
    !1,
    zo,
    Ko,
    pr
  );
}
// @__NO_SIDE_EFFECTS__
function Go(e) {
  return zs(
    e,
    !1,
    Ho,
    Uo,
    gr
  );
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  return zs(
    e,
    !0,
    Bo,
    Jo,
    mr
  );
}
function zs(e, t, n, s, i) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Yo(bo(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return /* @__PURE__ */ at(e) ? /* @__PURE__ */ ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Un(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ se(t) : e;
}
function Bs(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && Yi(e, "__v_skip", !0), e;
}
const Ue = (e) => re(e) ? /* @__PURE__ */ Kn(e) : e, Jt = (e) => re(e) ? /* @__PURE__ */ xs(e) : e;
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return vr(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return vr(e, !0);
}
function vr(e, t) {
  return /* @__PURE__ */ ge(e) ? e : new Qo(e, t);
}
class Qo {
  constructor(t, n) {
    this.dep = new Ds(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ se(t), this._value = n ? t : Ue(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ $e(t) || /* @__PURE__ */ at(t);
    t = s ? t : /* @__PURE__ */ se(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : Ue(t), this.dep.trigger());
  }
}
function ti(e) {
  e.dep && e.dep.trigger();
}
function ee(e) {
  return /* @__PURE__ */ ge(e) ? e.value : e;
}
const Xo = {
  get: (e, t, n) => t === "__v_raw" ? e : ee(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ge(i) && !/* @__PURE__ */ ge(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function yr(e) {
  return /* @__PURE__ */ ct(e) ? e : new Proxy(e, Xo);
}
// @__NO_SIDE_EFFECTS__
function Zo(e) {
  const t = U(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = tl(e, n);
  return t;
}
class el {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = ke(n) ? n : String(n), this._raw = /* @__PURE__ */ se(t);
    let i = !0, r = t;
    if (!U(t) || ke(this._key) || !Bn(this._key))
      do
        i = !/* @__PURE__ */ Un(r) || /* @__PURE__ */ $e(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = ee(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return Po(this._raw, this._key);
  }
}
function tl(e, t, n) {
  return new el(e, t, n);
}
class nl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ds(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ue !== this)
      return rr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return cr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function sl(e, t, n = !1) {
  let s, i;
  return X(e) ? s = e : (s = e.get, i = e.set), new nl(s, i, n);
}
const wn = {}, An = /* @__PURE__ */ new WeakMap();
let Ot;
function il(e, t = !1, n = Ot) {
  if (n) {
    let s = An.get(n);
    s || An.set(n, s = []), s.push(e);
  }
}
function rl(e, t, n = fe) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, f = (D) => i ? D : /* @__PURE__ */ $e(D) || i === !1 || i === 0 ? _t(D, 1) : _t(D);
  let a, p, h, b, S = !1, L = !1;
  if (/* @__PURE__ */ ge(e) ? (p = () => e.value, S = /* @__PURE__ */ $e(e)) : /* @__PURE__ */ ct(e) ? (p = () => f(e), S = !0) : U(e) ? (L = !0, S = e.some((D) => /* @__PURE__ */ ct(D) || /* @__PURE__ */ $e(D)), p = () => e.map((D) => {
    if (/* @__PURE__ */ ge(D))
      return D.value;
    if (/* @__PURE__ */ ct(D))
      return f(D);
    if (X(D))
      return c ? c(D, 2) : D();
  })) : X(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (h) {
      tt();
      try {
        h();
      } finally {
        nt();
      }
    }
    const D = Ot;
    Ot = a;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      Ot = D;
    }
  } : p = We, t && i) {
    const D = p, F = i === !0 ? 1 / 0 : i;
    p = () => _t(D(), F);
  }
  const z = tr(), B = () => {
    a.stop(), z && z.active && Fs(z.effects, a);
  };
  if (r && t) {
    const D = t;
    t = (...F) => {
      const q = D(...F);
      return B(), q;
    };
  }
  let V = L ? new Array(e.length).fill(wn) : wn;
  const j = (D) => {
    if (!(!(a.flags & 1) || !a.dirty && !D))
      if (t) {
        const F = a.run();
        if (D || i || S || (L ? F.some((q, Q) => Ze(q, V[Q])) : Ze(F, V))) {
          h && h();
          const q = Ot;
          Ot = a;
          try {
            const Q = [
              F,
              // pass undefined as the old value when it's changed for the first time
              V === wn ? void 0 : L && V[0] === wn ? [] : V,
              b
            ];
            V = F, c ? c(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            Ot = q;
          }
        }
      } else
        a.run();
  };
  return l && l(j), a = new sr(p), a.scheduler = o ? () => o(j, !1) : j, b = (D) => il(D, !1, a), h = a.onStop = () => {
    const D = An.get(a);
    if (D) {
      if (c)
        c(D, 4);
      else
        for (const F of D)
          F();
      An.delete(a);
    }
  }, t ? s ? j(!0) : V = a.run() : o ? o(j.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ge(e))
    _t(e.value, t, n);
  else if (U(e))
    for (let s = 0; s < e.length; s++)
      _t(e[s], t, n);
  else if (Vi(e) || Kt(e))
    e.forEach((s) => {
      _t(s, t, n);
    });
  else if (Ji(e)) {
    for (const s in e)
      _t(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && _t(e[s], t, n);
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
    Jn(i, t, n);
  }
}
function De(e, t, n, s) {
  if (X(e)) {
    const i = _n(e, t, n, s);
    return i && Ki(i) && i.catch((r) => {
      Jn(r, t, n);
    }), i;
  }
  if (U(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(De(e[r], t, n, s));
    return i;
  }
}
function Jn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
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
      tt(), _n(r, null, 10, [
        e,
        c,
        f
      ]), nt();
      return;
    }
  }
  ol(e, n, i, s, o);
}
function ol(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ce = [];
let Ge = -1;
const Ut = [];
let vt = null, Wt = 0;
const _r = /* @__PURE__ */ Promise.resolve();
let On = null;
function yt(e) {
  const t = On || _r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ll(e) {
  let t = Ge + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ce[s], r = dn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Hs(e) {
  if (!(e.flags & 1)) {
    const t = dn(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dn(n) ? Ce.push(e) : Ce.splice(ll(t), 0, e), e.flags |= 1, br();
  }
}
function br() {
  On || (On = _r.then(Sr));
}
function cl(e) {
  U(e) ? Ut.push(...e) : vt && e.id === -1 ? vt.splice(Wt + 1, 0, e) : e.flags & 1 || (Ut.push(e), e.flags |= 1), br();
}
function ni(e, t, n = Ge + 1) {
  for (; n < Ce.length; n++) {
    const s = Ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function xr(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)].sort(
      (n, s) => dn(n) - dn(s)
    );
    if (Ut.length = 0, vt) {
      vt.push(...t);
      return;
    }
    for (vt = t, Wt = 0; Wt < vt.length; Wt++) {
      const n = vt[Wt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vt = null, Wt = 0;
  }
}
const dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sr(e) {
  const t = We;
  try {
    for (Ge = 0; Ge < Ce.length; Ge++) {
      const n = Ce[Ge];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), _n(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Ge < Ce.length; Ge++) {
      const n = Ce[Ge];
      n && (n.flags &= -2);
    }
    Ge = -1, Ce.length = 0, xr(), On = null, (Ce.length || Ut.length) && Sr();
  }
}
let et = null, wr = null;
function Ln(e) {
  const t = et;
  return et = e, wr = e && e.type.__scopeId || null, t;
}
function Cr(e, t = et, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Pn(-1);
    const r = Ln(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Ln(r), s._d && Pn(1);
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
    c && (tt(), De(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), nt());
  }
}
function al(e, t) {
  if (Te) {
    let n = Te.provides;
    const s = Te.parent && Te.parent.provides;
    s === n && (n = Te.provides = Object.create(s)), n[e] = t;
  }
}
function rn(e, t, n = !1) {
  const s = qs();
  if (s || Nt) {
    let i = Nt ? Nt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && X(t) ? t.call(s && s.proxy) : t;
  }
}
function ul() {
  return !!(qs() || Nt);
}
const fl = /* @__PURE__ */ Symbol.for("v-scx"), hl = () => rn(fl);
function Pt(e, t, n) {
  return Er(e, t, n);
}
function Er(e, t, n = fe) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = ve({}, n), c = t && s || !t && r !== "post";
  let f;
  if (mn) {
    if (r === "sync") {
      const b = hl();
      f = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = We, b.resume = We, b.pause = We, b;
    }
  }
  const a = Te;
  l.call = (b, S, L) => De(b, a, S, L);
  let p = !1;
  r === "post" ? l.scheduler = (b) => {
    Ae(b, a && a.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (b, S) => {
    S ? b() : Hs(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), p && (b.flags |= 2, a && (b.id = a.uid, b.i = a));
  };
  const h = rl(e, t, l);
  return mn && (f ? f.push(h) : c && h()), h;
}
function dl(e, t, n) {
  const s = this.proxy, i = pe(e) ? e.includes(".") ? Tr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  X(t) ? r = t : (r = t.handler, n = t);
  const o = bn(this), l = Er(i, r.bind(s), n);
  return o(), l;
}
function Tr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const pl = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Ne = /* @__PURE__ */ Symbol("_leaveCb"), Gt = /* @__PURE__ */ Symbol("_enterCb");
function gl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ws(() => {
    e.isMounted = !0;
  }), Rr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Pe = [Function, Array], Mr = {
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
}, Ar = (e) => {
  const t = e.subTree;
  return t.component ? Ar(t.component) : t;
}, ml = {
  name: "BaseTransition",
  props: Mr,
  setup(e, { slots: t }) {
    const n = qs(), s = gl();
    return () => {
      const i = t.default && $r(t.default(), !0), r = i && i.length ? Or(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? He() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ se(e), { mode: l } = o;
      if (s.isLeaving)
        return ls(r);
      const c = si(r);
      if (!c)
        return ls(r);
      let f = Ss(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      c.type !== Ee && pn(c, f);
      let a = n.subTree && si(n.subTree);
      if (a && a.type !== Ee && !Lt(a, c) && Ar(n).type !== Ee) {
        let p = Ss(
          a,
          o,
          s,
          n
        );
        if (pn(a, p), l === "out-in" && c.type !== Ee)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, a = void 0;
          }, ls(r);
        l === "in-out" && c.type !== Ee ? p.delayLeave = (h, b, S) => {
          const L = Lr(
            s,
            a
          );
          L[String(a.key)] = a, h[Ne] = () => {
            b(), h[Ne] = void 0, delete f.delayedLeave, a = void 0;
          }, f.delayedLeave = () => {
            S(), delete f.delayedLeave, a = void 0;
          };
        } : a = void 0;
      } else
        a && (a = void 0);
      return r;
    };
  }
};
function Or(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ee) {
        t = n;
        break;
      }
  }
  return t;
}
const vl = ml;
function Lr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ss(e, t, n, s, i) {
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
    onAfterLeave: S,
    onLeaveCancelled: L,
    onBeforeAppear: z,
    onAppear: B,
    onAfterAppear: V,
    onAppearCancelled: j
  } = t, D = String(e.key), F = Lr(n, e), q = (M, H) => {
    M && De(
      M,
      s,
      9,
      H
    );
  }, Q = (M, H) => {
    const J = H[1];
    q(M, H), U(M) ? M.every((O) => O.length <= 1) && J() : M.length <= 1 && J();
  }, R = {
    mode: o,
    persisted: l,
    beforeEnter(M) {
      let H = c;
      if (!n.isMounted)
        if (r)
          H = z || c;
        else
          return;
      M[Ne] && M[Ne](
        !0
        /* cancelled */
      );
      const J = F[D];
      J && Lt(e, J) && J.el[Ne] && J.el[Ne](), q(H, [M]);
    },
    enter(M) {
      if (F[D] === e)
        return;
      let H = f, J = a, O = p;
      if (!n.isMounted)
        if (r)
          H = B || f, J = V || a, O = j || p;
        else
          return;
      let te = !1;
      M[Gt] = (xe) => {
        te || (te = !0, xe ? q(O, [M]) : q(J, [M]), R.delayedLeave && R.delayedLeave(), M[Gt] = void 0);
      };
      const oe = M[Gt].bind(null, !1);
      H ? Q(H, [M, oe]) : oe();
    },
    leave(M, H) {
      const J = String(e.key);
      if (M[Gt] && M[Gt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return H();
      q(h, [M]);
      let O = !1;
      M[Ne] = (oe) => {
        O || (O = !0, H(), oe ? q(L, [M]) : q(S, [M]), M[Ne] = void 0, F[J] === e && delete F[J]);
      };
      const te = M[Ne].bind(null, !1);
      F[J] = e, b ? Q(b, [M, te]) : te();
    },
    clone(M) {
      const H = Ss(
        M,
        t,
        n,
        s,
        i
      );
      return i && i(H), H;
    }
  };
  return R;
}
function ls(e) {
  if (qn(e))
    return e = xt(e), e.children = null, e;
}
function si(e) {
  if (!qn(e))
    return Ir(e.type) && e.children ? Or(e.children) : e;
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
function pn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $r(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Re ? (o.patchFlag & 128 && i++, s = s.concat(
      $r(o.children, t, l)
    )) : (t || o.type !== Ee) && s.push(l != null ? xt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t) {
  return X(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ve({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function Pr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ii(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const $n = /* @__PURE__ */ new WeakMap();
function on(e, t, n, s, i = !1) {
  if (U(e)) {
    e.forEach(
      (L, z) => on(
        L,
        t && (U(t) ? t[z] : t),
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
  const r = s.shapeFlag & 4 ? Ys(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, f = t && t.r, a = l.refs === fe ? l.refs = {} : l.refs, p = l.setupState, h = /* @__PURE__ */ se(p), b = p === fe ? Wi : (L) => ii(a, L) ? !1 : ie(h, L), S = (L, z) => !(z && ii(a, z));
  if (f != null && f !== c) {
    if (ri(t), pe(f))
      a[f] = null, b(f) && (p[f] = null);
    else if (/* @__PURE__ */ ge(f)) {
      const L = t;
      S(f, L.k) && (f.value = null), L.k && (a[L.k] = null);
    }
  }
  if (X(c)) {
    tt();
    try {
      _n(c, l, 12, [o, a]);
    } finally {
      nt();
    }
  } else {
    const L = pe(c), z = /* @__PURE__ */ ge(c);
    if (L || z) {
      const B = () => {
        if (e.f) {
          const V = L ? b(c) ? p[c] : a[c] : S() || !e.k ? c.value : a[e.k];
          if (i)
            U(V) && Fs(V, r);
          else if (U(V))
            V.includes(r) || V.push(r);
          else if (L)
            a[c] = [r], b(c) && (p[c] = a[c]);
          else {
            const j = [r];
            S(c, e.k) && (c.value = j), e.k && (a[e.k] = j);
          }
        } else
          L ? (a[c] = o, b(c) && (p[c] = o)) : z && (S(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const V = () => {
          B(), $n.delete(e);
        };
        V.id = -1, $n.set(e, V), Ae(V, n);
      } else
        ri(e), B();
    }
  }
}
function ri(e) {
  const t = $n.get(e);
  t && (t.flags |= 8, $n.delete(e));
}
Wn().requestIdleCallback;
Wn().cancelIdleCallback;
const ln = (e) => !!e.type.__asyncLoader, qn = (e) => e.type.__isKeepAlive;
function yl(e, t) {
  Nr(e, "a", t);
}
function _l(e, t) {
  Nr(e, "da", t);
}
function Nr(e, t, n = Te) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Yn(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      qn(i.parent.vnode) && bl(s, t, n, i), i = i.parent;
  }
}
function bl(e, t, n, s) {
  const i = Yn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Vs(() => {
    Fs(s[t], i);
  }, n);
}
function Yn(e, t, n = Te, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      tt();
      const l = bn(n), c = De(t, n, e, o);
      return l(), nt(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const ut = (e) => (t, n = Te) => {
  (!mn || e === "sp") && Yn(e, (...s) => t(...s), n);
}, xl = ut("bm"), Ws = ut("m"), Sl = ut(
  "bu"
), wl = ut("u"), Rr = ut(
  "bum"
), Vs = ut("um"), Cl = ut(
  "sp"
), El = ut("rtg"), Tl = ut("rtc");
function Il(e, t = Te) {
  Yn("ec", e, t);
}
const Ml = /* @__PURE__ */ Symbol.for("v-ndc");
function kr(e, t, n, s) {
  let i;
  const r = n && n[s], o = U(e);
  if (o || pe(e)) {
    const l = o && /* @__PURE__ */ ct(e);
    let c = !1, f = !1;
    l && (c = !/* @__PURE__ */ $e(e), f = /* @__PURE__ */ at(e), e = Vn(e)), i = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
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
  } else if (re(e))
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
const ws = (e) => e ? so(e) ? Ys(e) : ws(e.parent) : null, cn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ve(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ks(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = yt.bind(e.proxy)),
    $watch: (e) => dl.bind(e)
  })
), cs = (e, t) => e !== fe && !e.__isScriptSetup && ie(e, t), Al = {
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
        if (cs(s, t))
          return o[t] = 1, s[t];
        if (i !== fe && ie(i, t))
          return o[t] = 2, i[t];
        if (ie(r, t))
          return o[t] = 3, r[t];
        if (n !== fe && ie(n, t))
          return o[t] = 4, n[t];
        Cs && (o[t] = 0);
      }
    }
    const f = cn[t];
    let a, p;
    if (f)
      return t === "$attrs" && Se(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== fe && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, ie(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return cs(i, t) ? (i[t] = n, !0) : s !== fe && ie(s, t) ? (s[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== fe && l[0] !== "$" && ie(e, l) || cs(t, l) || ie(r, l) || ie(s, l) || ie(cn, l) || ie(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function oi(e) {
  return U(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Cs = !0;
function Ol(e) {
  const t = Ks(e), n = e.proxy, s = e.ctx;
  Cs = !1, t.beforeCreate && li(t.beforeCreate, e, "bc");
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
    updated: S,
    activated: L,
    deactivated: z,
    beforeDestroy: B,
    beforeUnmount: V,
    destroyed: j,
    unmounted: D,
    render: F,
    renderTracked: q,
    renderTriggered: Q,
    errorCaptured: R,
    serverPrefetch: M,
    // public API
    expose: H,
    inheritAttrs: J,
    // assets
    components: O,
    directives: te,
    filters: oe
  } = t;
  if (f && Ll(f, s, null), o)
    for (const Z in o) {
      const le = o[Z];
      X(le) && (s[Z] = le.bind(n));
    }
  if (i) {
    const Z = i.call(n, n);
    re(Z) && (e.data = /* @__PURE__ */ Kn(Z));
  }
  if (Cs = !0, r)
    for (const Z in r) {
      const le = r[Z], Je = X(le) ? le.bind(n, n) : X(le.get) ? le.get.bind(n, n) : We, kt = !X(le) && X(le.set) ? le.set.bind(n) : We, je = Oe({
        get: Je,
        set: kt
      });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (Fe) => je.value = Fe
      });
    }
  if (l)
    for (const Z in l)
      Dr(l[Z], s, n, Z);
  if (c) {
    const Z = X(c) ? c.call(n) : c;
    Reflect.ownKeys(Z).forEach((le) => {
      al(le, Z[le]);
    });
  }
  a && li(a, e, "c");
  function ce(Z, le) {
    U(le) ? le.forEach((Je) => Z(Je.bind(n))) : le && Z(le.bind(n));
  }
  if (ce(xl, p), ce(Ws, h), ce(Sl, b), ce(wl, S), ce(yl, L), ce(_l, z), ce(Il, R), ce(Tl, q), ce(El, Q), ce(Rr, V), ce(Vs, D), ce(Cl, M), U(H))
    if (H.length) {
      const Z = e.exposed || (e.exposed = {});
      H.forEach((le) => {
        Object.defineProperty(Z, le, {
          get: () => n[le],
          set: (Je) => n[le] = Je,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  F && e.render === We && (e.render = F), J != null && (e.inheritAttrs = J), O && (e.components = O), te && (e.directives = te), M && Pr(e);
}
function Ll(e, t, n = We) {
  U(e) && (e = Es(e));
  for (const s in e) {
    const i = e[s];
    let r;
    re(i) ? "default" in i ? r = rn(
      i.from || s,
      i.default,
      !0
    ) : r = rn(i.from || s) : r = rn(i), /* @__PURE__ */ ge(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function li(e, t, n) {
  De(
    U(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Dr(e, t, n, s) {
  let i = s.includes(".") ? Tr(n, s) : () => n[s];
  if (pe(e)) {
    const r = t[e];
    X(r) && Pt(i, r);
  } else if (X(e))
    Pt(i, e.bind(n));
  else if (re(e))
    if (U(e))
      e.forEach((r) => Dr(r, t, n, s));
    else {
      const r = X(e.handler) ? e.handler.bind(n) : t[e.handler];
      X(r) && Pt(i, r, e);
    }
}
function Ks(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !n && !s ? c = t : (c = {}, i.length && i.forEach(
    (f) => Fn(c, f, o, !0)
  ), Fn(c, t, o)), re(t) && r.set(t, c), c;
}
function Fn(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Fn(e, r, n, !0), i && i.forEach(
    (o) => Fn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = $l[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const $l = {
  data: ci,
  props: ai,
  emits: ai,
  // objects
  methods: Zt,
  computed: Zt,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: Zt,
  directives: Zt,
  // watch
  watch: Pl,
  // provide / inject
  provide: ci,
  inject: Fl
};
function ci(e, t) {
  return t ? e ? function() {
    return ve(
      X(e) ? e.call(this, this) : e,
      X(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fl(e, t) {
  return Zt(Es(e), Es(t));
}
function Es(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Zt(e, t) {
  return e ? ve(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ai(e, t) {
  return e ? U(e) && U(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ve(
    /* @__PURE__ */ Object.create(null),
    oi(e),
    oi(t ?? {})
  ) : t;
}
function Pl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ve(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = we(e[s], t[s]);
  return n;
}
function jr() {
  return {
    app: null,
    config: {
      isNativeTag: Wi,
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
let Nl = 0;
function Rl(e, t) {
  return function(s, i = null) {
    X(s) || (s = ve({}, s)), i != null && !re(i) && (i = null);
    const r = jr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = r.app = {
      _uid: Nl++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: gc,
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
          const b = f._ceVNode || Ie(s, i);
          return b.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), p && t ? t(b, a) : e(b, a, h), c = !0, f._container = a, a.__vue_app__ = f, Ys(b.component);
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
        const p = Nt;
        Nt = f;
        try {
          return a();
        } finally {
          Nt = p;
        }
      }
    };
    return f;
  };
}
let Nt = null;
const kl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Rt(t)}Modifiers`];
function Dl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || fe;
  let i = n;
  const r = t.startsWith("update:"), o = r && kl(s, t.slice(7));
  o && (o.trim && (i = n.map((a) => pe(a) ? a.trim() : a)), o.number && (i = n.map(wo)));
  let l, c = s[l = ts(t)] || // also try camelCase event handler (#2249)
  s[l = ts(Ve(t))];
  !c && r && (c = s[l = ts(Rt(t))]), c && De(
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
const jl = /* @__PURE__ */ new WeakMap();
function zr(e, t, n = !1) {
  const s = n ? jl : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!X(e)) {
    const c = (f) => {
      const a = zr(f, t, !0);
      a && (l = !0, ve(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (re(e) && s.set(e, null), null) : (U(r) ? r.forEach((c) => o[c] = null) : ve(o, r), re(e) && s.set(e, o), o);
}
function Gn(e, t) {
  return !e || !jn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Rt(t)) || ie(e, t));
}
function as(e) {
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
    ctx: S,
    inheritAttrs: L
  } = e, z = Ln(e);
  let B, V;
  try {
    if (n.shapeFlag & 4) {
      const D = i || s, F = D;
      B = Xe(
        f.call(
          F,
          D,
          a,
          p,
          b,
          h,
          S
        )
      ), V = l;
    } else {
      const D = t;
      B = Xe(
        D.length > 1 ? D(
          p,
          { attrs: l, slots: o, emit: c }
        ) : D(
          p,
          null
        )
      ), V = t.props ? l : zl(l);
    }
  } catch (D) {
    an.length = 0, Jn(D, e, 1), B = Ie(Ee);
  }
  let j = B;
  if (V && L !== !1) {
    const D = Object.keys(V), { shapeFlag: F } = j;
    D.length && F & 7 && (r && D.some(zn) && (V = Bl(
      V,
      r
    )), j = xt(j, V, !1, !0));
  }
  return n.dirs && (j = xt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && pn(j, n.transition), B = j, Ln(z), B;
}
const zl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Bl = (e, t) => {
  const n = {};
  for (const s in e)
    (!zn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Hl(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? ui(s, o, f) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const h = a[p];
        if (Br(o, s, h) && !Gn(f, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? ui(s, o, f) : !0 : !!o;
  return !1;
}
function ui(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Br(t, e, r) && !Gn(n, r))
      return !0;
  }
  return !1;
}
function Br(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && re(s) && re(i) ? !Ps(s, i) : s !== i;
}
function Wl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Hr = {}, Wr = () => Object.create(Hr), Vr = (e) => Object.getPrototypeOf(e) === Hr;
function Vl(e, t, n, s = !1) {
  const i = {}, r = Wr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Kr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Go(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Kl(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ se(i), [c] = e.propsOptions;
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
        if (Gn(e.emitsOptions, h))
          continue;
        const b = t[h];
        if (c)
          if (ie(r, h))
            b !== r[h] && (r[h] = b, f = !0);
          else {
            const S = Ve(h);
            i[S] = Ts(
              c,
              l,
              S,
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
    Kr(e, t, i, r) && (f = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !ie(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Rt(p)) === p || !ie(t, a))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[p] = Ts(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== l)
      for (const p in r)
        (!t || !ie(t, p)) && (delete r[p], f = !0);
  }
  f && lt(e.attrs, "set", "");
}
function Kr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (tn(c))
        continue;
      const f = t[c];
      let a;
      i && ie(i, a = Ve(c)) ? !r || !r.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : Gn(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ se(n), f = l || fe;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      n[p] = Ts(
        i,
        c,
        p,
        f[p],
        e,
        !ie(f, p)
      );
    }
  }
  return o;
}
function Ts(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && X(c)) {
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
    ] && (s === "" || s === Rt(n)) && (s = !0));
  }
  return s;
}
const Ul = /* @__PURE__ */ new WeakMap();
function Ur(e, t, n = !1) {
  const s = n ? Ul : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!X(e)) {
    const a = (p) => {
      c = !0;
      const [h, b] = Ur(p, t, !0);
      ve(o, h), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return re(e) && s.set(e, Vt), Vt;
  if (U(r))
    for (let a = 0; a < r.length; a++) {
      const p = Ve(r[a]);
      fi(p) && (o[p] = fe);
    }
  else if (r)
    for (const a in r) {
      const p = Ve(a);
      if (fi(p)) {
        const h = r[a], b = o[p] = U(h) || X(h) ? { type: h } : ve({}, h), S = b.type;
        let L = !1, z = !0;
        if (U(S))
          for (let B = 0; B < S.length; ++B) {
            const V = S[B], j = X(V) && V.name;
            if (j === "Boolean") {
              L = !0;
              break;
            } else
              j === "String" && (z = !1);
          }
        else
          L = X(S) && S.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = L, b[
          1
          /* shouldCastTrue */
        ] = z, (L || ie(b, "default")) && l.push(p);
      }
    }
  const f = [o, l];
  return re(e) && s.set(e, f), f;
}
function fi(e) {
  return e[0] !== "$" && !tn(e);
}
const Us = (e) => e === "_" || e === "_ctx" || e === "$stable", Js = (e) => U(e) ? e.map(Xe) : [Xe(e)], Jl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Cr((...i) => Js(t(...i)), n);
  return s._c = !1, s;
}, Jr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Us(i))
      continue;
    const r = e[i];
    if (X(r))
      t[i] = Jl(i, r, s);
    else if (r != null) {
      const o = Js(r);
      t[i] = () => o;
    }
  }
}, qr = (e, t) => {
  const n = Js(t);
  e.slots.default = () => n;
}, Yr = (e, t, n) => {
  for (const s in t)
    (n || !Us(s)) && (e[s] = t[s]);
}, ql = (e, t, n) => {
  const s = e.slots = Wr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Yr(s, t, n), n && Yi(s, "_", i, !0)) : Jr(t, s);
  } else
    t && qr(e, t);
}, Yl = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = fe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Yr(i, t, n) : (r = !t.$stable, Jr(t, i)), o = t;
  } else
    t && (qr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Us(l) && o[l] == null && delete i[l];
}, Ae = ec;
function Gl(e) {
  return Ql(e);
}
function Ql(e, t) {
  const n = Wn();
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
    setScopeId: b = We,
    insertStaticContent: S
  } = e, L = (u, g, _, I = null, C = null, w = null, k = void 0, P = null, m = !!g.dynamicChildren) => {
    if (u === g)
      return;
    u && !Lt(u, g) && (I = wt(u), Fe(u, C, w, !0), u = null), g.patchFlag === -2 && (m = !1, g.dynamicChildren = null);
    const { type: d, ref: v, shapeFlag: y } = g;
    switch (d) {
      case Qn:
        z(u, g, _, I);
        break;
      case Ee:
        B(u, g, _, I);
        break;
      case fs:
        u == null && V(g, _, I, k);
        break;
      case Re:
        O(
          u,
          g,
          _,
          I,
          C,
          w,
          k,
          P,
          m
        );
        break;
      default:
        y & 1 ? F(
          u,
          g,
          _,
          I,
          C,
          w,
          k,
          P,
          m
        ) : y & 6 ? te(
          u,
          g,
          _,
          I,
          C,
          w,
          k,
          P,
          m
        ) : (y & 64 || y & 128) && d.process(
          u,
          g,
          _,
          I,
          C,
          w,
          k,
          P,
          m,
          Be
        );
    }
    v != null && C ? on(v, u && u.ref, w, g || u, !g) : v == null && u && u.ref != null && on(u.ref, null, w, u, !0);
  }, z = (u, g, _, I) => {
    if (u == null)
      s(
        g.el = l(g.children),
        _,
        I
      );
    else {
      const C = g.el = u.el;
      g.children !== u.children && f(C, g.children);
    }
  }, B = (u, g, _, I) => {
    u == null ? s(
      g.el = c(g.children || ""),
      _,
      I
    ) : g.el = u.el;
  }, V = (u, g, _, I) => {
    [u.el, u.anchor] = S(
      u.children,
      g,
      _,
      I,
      u.el,
      u.anchor
    );
  }, j = ({ el: u, anchor: g }, _, I) => {
    let C;
    for (; u && u !== g; )
      C = h(u), s(u, _, I), u = C;
    s(g, _, I);
  }, D = ({ el: u, anchor: g }) => {
    let _;
    for (; u && u !== g; )
      _ = h(u), i(u), u = _;
    i(g);
  }, F = (u, g, _, I, C, w, k, P, m) => {
    if (g.type === "svg" ? k = "svg" : g.type === "math" && (k = "mathml"), u == null)
      q(
        g,
        _,
        I,
        C,
        w,
        k,
        P,
        m
      );
    else {
      const d = u.el && u.el._isVueCE ? u.el : null;
      try {
        d && d._beginPatch(), M(
          u,
          g,
          C,
          w,
          k,
          P,
          m
        );
      } finally {
        d && d._endPatch();
      }
    }
  }, q = (u, g, _, I, C, w, k, P) => {
    let m, d;
    const { props: v, shapeFlag: y, transition: x, dirs: T } = u;
    if (m = u.el = o(
      u.type,
      w,
      v && v.is,
      v
    ), y & 8 ? a(m, u.children) : y & 16 && R(
      u.children,
      m,
      null,
      I,
      C,
      us(u, w),
      k,
      P
    ), T && Tt(u, null, I, "created"), Q(m, u, u.scopeId, k, I), v) {
      for (const A in v)
        A !== "value" && !tn(A) && r(m, A, null, v[A], w, I);
      "value" in v && r(m, "value", null, v.value, w), (d = v.onVnodeBeforeMount) && Ye(d, I, u);
    }
    T && Tt(u, null, I, "beforeMount");
    const E = Xl(C, x);
    E && x.beforeEnter(m), s(m, g, _), ((d = v && v.onVnodeMounted) || E || T) && Ae(() => {
      try {
        d && Ye(d, I, u), E && x.enter(m), T && Tt(u, null, I, "mounted");
      } finally {
      }
    }, C);
  }, Q = (u, g, _, I, C) => {
    if (_ && b(u, _), I)
      for (let w = 0; w < I.length; w++)
        b(u, I[w]);
    if (C) {
      let w = C.subTree;
      if (g === w || Zr(w.type) && (w.ssContent === g || w.ssFallback === g)) {
        const k = C.vnode;
        Q(
          u,
          k,
          k.scopeId,
          k.slotScopeIds,
          C.parent
        );
      }
    }
  }, R = (u, g, _, I, C, w, k, P, m = 0) => {
    for (let d = m; d < u.length; d++) {
      const v = u[d] = P ? ot(u[d]) : Xe(u[d]);
      L(
        null,
        v,
        g,
        _,
        I,
        C,
        w,
        k,
        P
      );
    }
  }, M = (u, g, _, I, C, w, k) => {
    const P = g.el = u.el;
    let { patchFlag: m, dynamicChildren: d, dirs: v } = g;
    m |= u.patchFlag & 16;
    const y = u.props || fe, x = g.props || fe;
    let T;
    if (_ && It(_, !1), (T = x.onVnodeBeforeUpdate) && Ye(T, _, g, u), v && Tt(g, u, _, "beforeUpdate"), _ && It(_, !0), // HMR updated, force full diff
    // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    d && (!u.dynamicChildren || u.dynamicChildren.length !== d.length) && (m = 0, k = !1, d = null), (y.innerHTML && x.innerHTML == null || y.textContent && x.textContent == null) && a(P, ""), d ? H(
      u.dynamicChildren,
      d,
      P,
      _,
      I,
      us(g, C),
      w
    ) : k || le(
      u,
      g,
      P,
      null,
      _,
      I,
      us(g, C),
      w,
      !1
    ), m > 0) {
      if (m & 16)
        J(P, y, x, _, C);
      else if (m & 2 && y.class !== x.class && r(P, "class", null, x.class, C), m & 4 && r(P, "style", y.style, x.style, C), m & 8) {
        const E = g.dynamicProps;
        for (let A = 0; A < E.length; A++) {
          const N = E[A], K = y[N], W = x[N];
          (W !== K || N === "value") && r(P, N, K, W, C, _);
        }
      }
      m & 1 && u.children !== g.children && a(P, g.children);
    } else
      !k && d == null && J(P, y, x, _, C);
    ((T = x.onVnodeUpdated) || v) && Ae(() => {
      T && Ye(T, _, g, u), v && Tt(g, u, _, "updated");
    }, I);
  }, H = (u, g, _, I, C, w, k) => {
    for (let P = 0; P < g.length; P++) {
      const m = u[P], d = g[P], v = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        m.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (m.type === Re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(m, d) || // - In the case of a component, it could contain anything.
        m.shapeFlag & 198) ? p(m.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      L(
        m,
        d,
        v,
        null,
        I,
        C,
        w,
        k,
        !0
      );
    }
  }, J = (u, g, _, I, C) => {
    if (g !== _) {
      if (g !== fe)
        for (const w in g)
          !tn(w) && !(w in _) && r(
            u,
            w,
            g[w],
            null,
            C,
            I
          );
      for (const w in _) {
        if (tn(w))
          continue;
        const k = _[w], P = g[w];
        k !== P && w !== "value" && r(u, w, P, k, C, I);
      }
      "value" in _ && r(u, "value", g.value, _.value, C);
    }
  }, O = (u, g, _, I, C, w, k, P, m) => {
    const d = g.el = u ? u.el : l(""), v = g.anchor = u ? u.anchor : l("");
    let { patchFlag: y, dynamicChildren: x, slotScopeIds: T } = g;
    T && (P = P ? P.concat(T) : T), u == null ? (s(d, _, I), s(v, _, I), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      _,
      v,
      C,
      w,
      k,
      P,
      m
    )) : y > 0 && y & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === x.length ? (H(
      u.dynamicChildren,
      x,
      _,
      C,
      w,
      k,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || C && g === C.subTree) && Gr(
      u,
      g,
      !0
      /* shallow */
    )) : le(
      u,
      g,
      _,
      v,
      C,
      w,
      k,
      P,
      m
    );
  }, te = (u, g, _, I, C, w, k, P, m) => {
    g.slotScopeIds = P, u == null ? g.shapeFlag & 512 ? C.ctx.activate(
      g,
      _,
      I,
      k,
      m
    ) : oe(
      g,
      _,
      I,
      C,
      w,
      k,
      m
    ) : xe(u, g, m);
  }, oe = (u, g, _, I, C, w, k) => {
    const P = u.component = cc(
      u,
      I,
      C
    );
    if (qn(u) && (P.ctx.renderer = Be), ac(P, !1, k), P.asyncDep) {
      if (C && C.registerDep(P, ce, k), !u.el) {
        const m = P.subTree = Ie(Ee);
        B(null, m, g, _), u.placeholder = m.el;
      }
    } else
      ce(
        P,
        u,
        g,
        _,
        C,
        w,
        k
      );
  }, xe = (u, g, _) => {
    const I = g.component = u.component;
    if (Hl(u, g, _))
      if (I.asyncDep && !I.asyncResolved) {
        Z(I, g, _);
        return;
      } else
        I.next = g, I.update();
    else
      g.el = u.el, I.vnode = g;
  }, ce = (u, g, _, I, C, w, k) => {
    const P = () => {
      if (u.isMounted) {
        let { next: y, bu: x, u: T, parent: E, vnode: A } = u;
        {
          const ne = Qr(u);
          if (ne) {
            y && (y.el = A.el, Z(u, y, k)), ne.asyncDep.then(() => {
              Ae(() => {
                u.isUnmounted || d();
              }, C);
            });
            return;
          }
        }
        let N = y, K;
        It(u, !1), y ? (y.el = A.el, Z(u, y, k)) : y = A, x && ns(x), (K = y.props && y.props.onVnodeBeforeUpdate) && Ye(K, E, y, A), It(u, !0);
        const W = as(u), G = u.subTree;
        u.subTree = W, L(
          G,
          W,
          // parent may have changed if it's in a teleport
          p(G.el),
          // anchor may have changed if it's in a fragment
          wt(G),
          u,
          C,
          w
        ), y.el = W.el, N === null && Wl(u, W.el), T && Ae(T, C), (K = y.props && y.props.onVnodeUpdated) && Ae(
          () => Ye(K, E, y, A),
          C
        );
      } else {
        let y;
        const { el: x, props: T } = g, { bm: E, m: A, parent: N, root: K, type: W } = u, G = ln(g);
        if (It(u, !1), E && ns(E), !G && (y = T && T.onVnodeBeforeMount) && Ye(y, N, g), It(u, !0), x && qt) {
          const ne = () => {
            u.subTree = as(u), qt(
              x,
              u.subTree,
              u,
              C,
              null
            );
          };
          G && W.__asyncHydrate ? W.__asyncHydrate(
            x,
            u,
            ne
          ) : ne();
        } else {
          K.ce && K.ce._hasShadowRoot() && K.ce._injectChildStyle(
            W,
            u.parent ? u.parent.type : void 0
          );
          const ne = u.subTree = as(u);
          L(
            null,
            ne,
            _,
            I,
            u,
            C,
            w
          ), g.el = ne.el;
        }
        if (A && Ae(A, C), !G && (y = T && T.onVnodeMounted)) {
          const ne = g;
          Ae(
            () => Ye(y, N, ne),
            C
          );
        }
        (g.shapeFlag & 256 || N && ln(N.vnode) && N.vnode.shapeFlag & 256) && u.a && Ae(u.a, C), u.isMounted = !0, g = _ = I = null;
      }
    };
    u.scope.on();
    const m = u.effect = new sr(P);
    u.scope.off();
    const d = u.update = m.run.bind(m), v = u.job = m.runIfDirty.bind(m);
    v.i = u, v.id = u.uid, m.scheduler = () => Hs(v), It(u, !0), d();
  }, Z = (u, g, _) => {
    g.component = u;
    const I = u.vnode.props;
    u.vnode = g, u.next = null, Kl(u, g.props, I, _), Yl(u, g.children, _), tt(), ni(u), nt();
  }, le = (u, g, _, I, C, w, k, P, m = !1) => {
    const d = u && u.children, v = u ? u.shapeFlag : 0, y = g.children, { patchFlag: x, shapeFlag: T } = g;
    if (x > 0) {
      if (x & 128) {
        kt(
          d,
          y,
          _,
          I,
          C,
          w,
          k,
          P,
          m
        );
        return;
      } else if (x & 256) {
        Je(
          d,
          y,
          _,
          I,
          C,
          w,
          k,
          P,
          m
        );
        return;
      }
    }
    T & 8 ? (v & 16 && ze(d, C, w), y !== d && a(_, y)) : v & 16 ? T & 16 ? kt(
      d,
      y,
      _,
      I,
      C,
      w,
      k,
      P,
      m
    ) : ze(d, C, w, !0) : (v & 8 && a(_, ""), T & 16 && R(
      y,
      _,
      I,
      C,
      w,
      k,
      P,
      m
    ));
  }, Je = (u, g, _, I, C, w, k, P, m) => {
    u = u || Vt, g = g || Vt;
    const d = u.length, v = g.length, y = Math.min(d, v);
    let x;
    for (x = 0; x < y; x++) {
      const T = g[x] = m ? ot(g[x]) : Xe(g[x]);
      L(
        u[x],
        T,
        _,
        null,
        C,
        w,
        k,
        P,
        m
      );
    }
    d > v ? ze(
      u,
      C,
      w,
      !0,
      !1,
      y
    ) : R(
      g,
      _,
      I,
      C,
      w,
      k,
      P,
      m,
      y
    );
  }, kt = (u, g, _, I, C, w, k, P, m) => {
    let d = 0;
    const v = g.length;
    let y = u.length - 1, x = v - 1;
    for (; d <= y && d <= x; ) {
      const T = u[d], E = g[d] = m ? ot(g[d]) : Xe(g[d]);
      if (Lt(T, E))
        L(
          T,
          E,
          _,
          null,
          C,
          w,
          k,
          P,
          m
        );
      else
        break;
      d++;
    }
    for (; d <= y && d <= x; ) {
      const T = u[y], E = g[x] = m ? ot(g[x]) : Xe(g[x]);
      if (Lt(T, E))
        L(
          T,
          E,
          _,
          null,
          C,
          w,
          k,
          P,
          m
        );
      else
        break;
      y--, x--;
    }
    if (d > y) {
      if (d <= x) {
        const T = x + 1, E = T < v ? g[T].el : I;
        for (; d <= x; )
          L(
            null,
            g[d] = m ? ot(g[d]) : Xe(g[d]),
            _,
            E,
            C,
            w,
            k,
            P,
            m
          ), d++;
      }
    } else if (d > x)
      for (; d <= y; )
        Fe(u[d], C, w, !0), d++;
    else {
      const T = d, E = d, A = /* @__PURE__ */ new Map();
      for (d = E; d <= x; d++) {
        const _e = g[d] = m ? ot(g[d]) : Xe(g[d]);
        _e.key != null && A.set(_e.key, d);
      }
      let N, K = 0;
      const W = x - E + 1;
      let G = !1, ne = 0;
      const ae = new Array(W);
      for (d = 0; d < W; d++)
        ae[d] = 0;
      for (d = T; d <= y; d++) {
        const _e = u[d];
        if (K >= W) {
          Fe(_e, C, w, !0);
          continue;
        }
        let Me;
        if (_e.key != null)
          Me = A.get(_e.key);
        else
          for (N = E; N <= x; N++)
            if (ae[N - E] === 0 && Lt(_e, g[N])) {
              Me = N;
              break;
            }
        Me === void 0 ? Fe(_e, C, w, !0) : (ae[Me - E] = d + 1, Me >= ne ? ne = Me : G = !0, L(
          _e,
          g[Me],
          _,
          null,
          C,
          w,
          k,
          P,
          m
        ), K++);
      }
      const dt = G ? Zl(ae) : Vt;
      for (N = dt.length - 1, d = W - 1; d >= 0; d--) {
        const _e = E + d, Me = g[_e], Et = g[_e + 1], jt = _e + 1 < v ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Et.el || Xr(Et)
        ) : I;
        ae[d] === 0 ? L(
          null,
          Me,
          _,
          jt,
          C,
          w,
          k,
          P,
          m
        ) : G && (N < 0 || d !== dt[N] ? je(Me, _, jt, 2) : N--);
      }
    }
  }, je = (u, g, _, I, C = null) => {
    const { el: w, type: k, transition: P, children: m, shapeFlag: d } = u;
    if (d & 6) {
      je(u.component.subTree, g, _, I);
      return;
    }
    if (d & 128) {
      u.suspense.move(g, _, I);
      return;
    }
    if (d & 64) {
      k.move(u, g, _, Be);
      return;
    }
    if (k === Re) {
      s(w, g, _);
      for (let y = 0; y < m.length; y++)
        je(m[y], g, _, I);
      s(u.anchor, g, _);
      return;
    }
    if (k === fs) {
      j(u, g, _);
      return;
    }
    if (I !== 2 && d & 1 && P)
      if (I === 0)
        P.persisted && !w[Ne] ? s(w, g, _) : (P.beforeEnter(w), s(w, g, _), Ae(() => P.enter(w), C));
      else {
        const { leave: y, delayLeave: x, afterLeave: T } = P, E = () => {
          u.ctx.isUnmounted ? i(w) : s(w, g, _);
        }, A = () => {
          const N = w._isLeaving || !!w[Ne];
          w._isLeaving && w[Ne](
            !0
            /* cancelled */
          ), P.persisted && !N ? E() : y(w, () => {
            E(), T && T();
          });
        };
        x ? x(w, E, A) : A();
      }
    else
      s(w, g, _);
  }, Fe = (u, g, _, I = !1, C = !1) => {
    const {
      type: w,
      props: k,
      ref: P,
      children: m,
      dynamicChildren: d,
      shapeFlag: v,
      patchFlag: y,
      dirs: x,
      cacheIndex: T,
      memo: E
    } = u;
    if (y === -2 && (C = !1), P != null && (tt(), on(P, null, _, u, !0), nt()), T != null && (g.renderCache[T] = void 0), v & 256) {
      g.ctx.deactivate(u);
      return;
    }
    const A = v & 1 && x, N = !ln(u);
    let K;
    if (N && (K = k && k.onVnodeBeforeUnmount) && Ye(K, g, u), v & 6)
      es(u.component, _, I);
    else {
      if (v & 128) {
        u.suspense.unmount(_, I);
        return;
      }
      A && Tt(u, null, g, "beforeUnmount"), v & 64 ? u.type.remove(
        u,
        g,
        _,
        Be,
        I
      ) : d && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !d.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== Re || y > 0 && y & 64) ? ze(
        d,
        g,
        _,
        !1,
        !0
      ) : (w === Re && y & 384 || !C && v & 16) && ze(m, g, _), I && ft(u);
    }
    const W = E != null && T == null;
    (N && (K = k && k.onVnodeUnmounted) || A || W) && Ae(() => {
      K && Ye(K, g, u), A && Tt(u, null, g, "unmounted"), W && (u.el = null);
    }, _);
  }, ft = (u) => {
    const { type: g, el: _, anchor: I, transition: C } = u;
    if (g === Re) {
      St(_, I);
      return;
    }
    if (g === fs) {
      D(u);
      return;
    }
    const w = () => {
      i(_), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (u.shapeFlag & 1 && C && !C.persisted) {
      const { leave: k, delayLeave: P } = C, m = () => k(_, w);
      P ? P(u.el, w, m) : m();
    } else
      w();
  }, St = (u, g) => {
    let _;
    for (; u !== g; )
      _ = h(u), i(u), u = _;
    i(g);
  }, es = (u, g, _) => {
    const { bum: I, scope: C, job: w, subTree: k, um: P, m, a: d } = u;
    hi(m), hi(d), I && ns(I), C.stop(), w && (w.flags |= 8, Fe(k, u, g, _)), P && Ae(P, g), Ae(() => {
      u.isUnmounted = !0;
    }, g);
  }, ze = (u, g, _, I = !1, C = !1, w = 0) => {
    for (let k = w; k < u.length; k++)
      Fe(u[k], g, _, I, C);
  }, wt = (u) => {
    if (u.shapeFlag & 6)
      return wt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const g = h(u.anchor || u.el), _ = g && g[pl];
    return _ ? h(_) : g;
  };
  let ht = !1;
  const Ct = (u, g, _) => {
    let I;
    u == null ? g._vnode && (Fe(g._vnode, null, null, !0), I = g._vnode.component) : L(
      g._vnode || null,
      u,
      g,
      null,
      null,
      null,
      _
    ), g._vnode = u, ht || (ht = !0, ni(I), xr(), ht = !1);
  }, Be = {
    p: L,
    um: Fe,
    m: je,
    r: ft,
    mt: oe,
    mc: R,
    pc: le,
    pbc: H,
    n: wt,
    o: e
  };
  let Dt, qt;
  return t && ([Dt, qt] = t(
    Be
  )), {
    render: Ct,
    hydrate: Dt,
    createApp: Rl(Ct, Dt)
  };
}
function us({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function It({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (U(s) && U(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ot(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Gr(o, l)), l.type === Qn && (l.patchFlag === -1 && (l = i[r] = ot(l)), l.el = o.el), l.type === Ee && !l.el && (l.el = o.el);
    }
}
function Zl(e) {
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
function Qr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qr(t);
}
function hi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xr(t.subTree) : null;
}
const Zr = (e) => e.__isSuspense;
function ec(e, t) {
  t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : cl(e);
}
const Re = /* @__PURE__ */ Symbol.for("v-fgt"), Qn = /* @__PURE__ */ Symbol.for("v-txt"), Ee = /* @__PURE__ */ Symbol.for("v-cmt"), fs = /* @__PURE__ */ Symbol.for("v-stc"), an = [];
let Le = null;
function he(e = !1) {
  an.push(Le = e ? null : []);
}
function tc() {
  an.pop(), Le = an[an.length - 1] || null;
}
let gn = 1;
function Pn(e, t = !1) {
  gn += e, e < 0 && Le && t && (Le.hasOnce = !0);
}
function eo(e) {
  return e.dynamicChildren = gn > 0 ? Le || Vt : null, tc(), gn > 0 && Le && Le.push(e), e;
}
function de(e, t, n, s, i, r) {
  return eo(
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
function nc(e, t, n, s, i) {
  return eo(
    Ie(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Nn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const to = ({ key: e }) => e ?? null, In = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || /* @__PURE__ */ ge(e) || X(e) ? { i: et, r: e, k: t, f: !!n } : e : null);
function Y(e, t = null, n = null, s = 0, i = null, r = e === Re ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && to(t),
    ref: t && In(t),
    scopeId: wr,
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
    ctx: et
  };
  return l ? (Rn(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Le.push(c), c;
}
const Ie = sc;
function sc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Ml) && (e = Ee), Nn(e)) {
    const l = xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Rn(l, n), gn > 0 && !r && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag = -2, l;
  }
  if (dc(e) && (e = e.__vccOpts), t) {
    t = ic(t);
    let { class: l, style: c } = t;
    l && !pe(l) && (t.class = $t(l)), re(c) && (/* @__PURE__ */ Un(c) && !U(c) && (c = ve({}, c)), t.style = bt(c));
  }
  const o = pe(e) ? 1 : Zr(e) ? 128 : Ir(e) ? 64 : re(e) ? 4 : X(e) ? 2 : 0;
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
function ic(e) {
  return e ? /* @__PURE__ */ Un(e) || Vr(e) ? ve({}, e) : e : null;
}
function xt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, f = t ? rc(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && to(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? U(r) ? r.concat(In(t)) : [r, In(t)] : In(t)
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
    ssContent: e.ssContent && xt(e.ssContent),
    ssFallback: e.ssFallback && xt(e.ssFallback),
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
function no(e = " ", t = 0) {
  return Ie(Qn, null, e, t);
}
function He(e = "", t = !1) {
  return t ? (he(), nc(Ee, null, e)) : Ie(Ee, null, e);
}
function Xe(e) {
  return e == null || typeof e == "boolean" ? Ie(Ee) : U(e) ? Ie(
    Re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Nn(e) ? ot(e) : Ie(Qn, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e);
}
function Rn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (U(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Rn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Vr(t) ? t._ctx = et : i === 3 && et && (et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (X(t)) {
    if (s & 65) {
      Rn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: et }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [no(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function rc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = $t([t.class, s.class]));
      else if (i === "style")
        t.style = bt([t.style, s.style]);
      else if (jn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(U(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !zn(i) && (t[i] = o);
      } else
        i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ye(e, t, n, s = null) {
  De(e, t, 7, [
    n,
    s
  ]);
}
const oc = jr();
let lc = 0;
function cc(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || oc, r = {
    uid: lc++,
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
    scope: new Zi(
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
    propsOptions: Ur(s, i),
    emitsOptions: zr(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Dl.bind(null, r), e.ce && e.ce(r), r;
}
let Te = null;
const qs = () => Te || et;
let kn, Is;
{
  const e = Wn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  kn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Te = n
  ), Is = t(
    "__VUE_SSR_SETTERS__",
    (n) => mn = n
  );
}
const bn = (e) => {
  const t = Te;
  return kn(e), e.scope.on(), () => {
    e.scope.off(), kn(t);
  };
}, di = () => {
  Te && Te.scope.off(), kn(null);
};
function so(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function ac(e, t = !1, n = !1) {
  t && Is(t);
  const { props: s, children: i } = e.vnode, r = so(e);
  Vl(e, s, r, t), ql(e, i, n || t);
  const o = r ? uc(e, t) : void 0;
  return t && Is(!1), o;
}
function uc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Al);
  const { setup: s } = n;
  if (s) {
    tt();
    const i = e.setupContext = s.length > 1 ? hc(e) : null, r = bn(e), o = _n(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ki(o);
    if (nt(), r(), (l || e.sp) && !ln(e) && Pr(e), l) {
      if (o.then(di, di), t)
        return o.then((c) => {
          pi(e, c, t);
        }).catch((c) => {
          Jn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      pi(e, o, t);
  } else
    io(e, t);
}
function pi(e, t, n) {
  X(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = yr(t)), io(e, n);
}
let gi;
function io(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && gi && !s.render) {
      const i = s.template || Ks(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: c } = s, f = ve(
          ve(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          c
        );
        s.render = gi(i, f);
      }
    }
    e.render = s.render || We;
  }
  {
    const i = bn(e);
    tt();
    try {
      Ol(e);
    } finally {
      nt(), i();
    }
  }
}
const fc = {
  get(e, t) {
    return Se(e, "get", ""), e[t];
  }
};
function hc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, fc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ys(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yr(Bs(e.exposed)), {
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
function dc(e) {
  return X(e) && "__vccOpts" in e;
}
const Oe = (e, t) => /* @__PURE__ */ sl(e, t, mn);
function pc(e, t, n) {
  try {
    Pn(-1);
    const s = arguments.length;
    return s === 2 ? re(t) && !U(t) ? Nn(t) ? Ie(e, null, [t]) : Ie(e, t) : Ie(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Nn(n) && (n = [n]), Ie(e, t, n));
  } finally {
    Pn(1);
  }
}
const gc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ms;
const mi = typeof window < "u" && window.trustedTypes;
if (mi)
  try {
    Ms = /* @__PURE__ */ mi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ro = Ms ? (e) => Ms.createHTML(e) : (e) => e, mc = "http://www.w3.org/2000/svg", vc = "http://www.w3.org/1998/Math/MathML", rt = typeof document < "u" ? document : null, vi = rt && /* @__PURE__ */ rt.createElement("template"), yc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? rt.createElementNS(mc, e) : t === "mathml" ? rt.createElementNS(vc, e) : n ? rt.createElement(e, { is: n }) : rt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => rt.createTextNode(e),
  createComment: (e) => rt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => rt.querySelector(e),
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
      vi.innerHTML = ro(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = vi.content;
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
}, pt = "transition", Qt = "animation", vn = /* @__PURE__ */ Symbol("_vtc"), oo = {
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
}, _c = /* @__PURE__ */ ve(
  {},
  Mr,
  oo
), bc = (e) => (e.displayName = "Transition", e.props = _c, e), xc = /* @__PURE__ */ bc(
  (e, { slots: t }) => pc(vl, Sc(e), t)
), Mt = (e, t = []) => {
  U(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, yi = (e) => e ? U(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Sc(e) {
  const t = {};
  for (const O in e)
    O in oo || (t[O] = e[O]);
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
  } = e, S = wc(i), L = S && S[0], z = S && S[1], {
    onBeforeEnter: B,
    onEnter: V,
    onEnterCancelled: j,
    onLeave: D,
    onLeaveCancelled: F,
    onBeforeAppear: q = B,
    onAppear: Q = V,
    onAppearCancelled: R = j
  } = t, M = (O, te, oe, xe) => {
    O._enterCancelled = xe, At(O, te ? a : l), At(O, te ? f : o), oe && oe();
  }, H = (O, te) => {
    O._isLeaving = !1, At(O, p), At(O, b), At(O, h), te && te();
  }, J = (O) => (te, oe) => {
    const xe = O ? Q : V, ce = () => M(te, O, oe);
    Mt(xe, [te, ce]), _i(() => {
      At(te, O ? c : r), it(te, O ? a : l), yi(xe) || bi(te, s, L, ce);
    });
  };
  return ve(t, {
    onBeforeEnter(O) {
      Mt(B, [O]), it(O, r), it(O, o);
    },
    onBeforeAppear(O) {
      Mt(q, [O]), it(O, c), it(O, f);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(O, te) {
      O._isLeaving = !0;
      const oe = () => H(O, te);
      it(O, p), O._enterCancelled ? (it(O, h), wi(O)) : (wi(O), it(O, h)), _i(() => {
        O._isLeaving && (At(O, p), it(O, b), yi(D) || bi(O, s, z, oe));
      }), Mt(D, [O, oe]);
    },
    onEnterCancelled(O) {
      M(O, !1, void 0, !0), Mt(j, [O]);
    },
    onAppearCancelled(O) {
      M(O, !0, void 0, !0), Mt(R, [O]);
    },
    onLeaveCancelled(O) {
      H(O), Mt(F, [O]);
    }
  });
}
function wc(e) {
  if (e == null)
    return null;
  if (re(e))
    return [hs(e.enter), hs(e.leave)];
  {
    const t = hs(e);
    return [t, t];
  }
}
function hs(e) {
  return Co(e);
}
function it(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[vn] || (e[vn] = /* @__PURE__ */ new Set())).add(t);
}
function At(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[vn];
  n && (n.delete(t), n.size || (e[vn] = void 0));
}
function _i(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Cc = 0;
function bi(e, t, n, s) {
  const i = e._endId = ++Cc, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = Ec(e, t);
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
function Ec(e, t) {
  const n = window.getComputedStyle(e), s = (S) => (n[S] || "").split(", "), i = s(`${pt}Delay`), r = s(`${pt}Duration`), o = xi(i, r), l = s(`${Qt}Delay`), c = s(`${Qt}Duration`), f = xi(l, c);
  let a = null, p = 0, h = 0;
  t === pt ? o > 0 && (a = pt, p = o, h = r.length) : t === Qt ? f > 0 && (a = Qt, p = f, h = c.length) : (p = Math.max(o, f), a = p > 0 ? o > f ? pt : Qt : null, h = a ? a === pt ? r.length : c.length : 0);
  const b = a === pt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${pt}Property`).toString()
  );
  return {
    type: a,
    timeout: p,
    propCount: h,
    hasTransform: b
  };
}
function xi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Si(n) + Si(e[s])));
}
function Si(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Tc(e, t, n) {
  const s = e[vn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ci = /* @__PURE__ */ Symbol("_vod"), Ic = /* @__PURE__ */ Symbol("_vsh"), Mc = /* @__PURE__ */ Symbol(""), Ac = /(?:^|;)\s*display\s*:/;
function Oc(e, t, n) {
  const s = e.style, i = pe(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (pe(t))
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
      l != null ? $c(
        e,
        o,
        !pe(t) && t ? t[o] : void 0,
        l
      ) || en(s, o, l) : en(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Mc];
      o && (n += ";" + o), s.cssText = n, r = Ac.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ci in e && (e[Ci] = r ? s.display : "", e[Ic] && (s.display = "none"));
}
const Ei = /\s*!important$/;
function en(e, t, n) {
  if (U(n))
    n.forEach((s) => en(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Lc(e, t);
    Ei.test(n) ? e.setProperty(
      Rt(s),
      n.replace(Ei, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ti = ["Webkit", "Moz", "ms"], ds = {};
function Lc(e, t) {
  const n = ds[t];
  if (n)
    return n;
  let s = Ve(t);
  if (s !== "filter" && s in e)
    return ds[t] = s;
  s = qi(s);
  for (let i = 0; i < Ti.length; i++) {
    const r = Ti[i] + s;
    if (r in e)
      return ds[t] = r;
  }
  return t;
}
function $c(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && pe(s) && n === s;
}
const Ii = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, s, i, r = Oo(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || r && !Gi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ke(n) ? String(n) : n
  );
}
function Ai(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ro(n) : n);
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
    l === "boolean" ? n = Gi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Fc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Pc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Oi = /* @__PURE__ */ Symbol("_vei");
function Nc(e, t, n, s, i = null) {
  const r = e[Oi] || (e[Oi] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = Dc(t);
    if (s) {
      const f = r[t] = Bc(
        s,
        i
      );
      Fc(e, l, f, c);
    } else
      o && (Pc(e, l, o, c), r[t] = void 0);
  }
}
const Rc = /(Once|Passive|Capture)$/, kc = /^on:?(?:Once|Passive|Capture)$/;
function Dc(e) {
  let t, n;
  for (; (n = e.match(Rc)) && !kc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Rt(e.slice(2)), t];
}
let ps = 0;
const jc = /* @__PURE__ */ Promise.resolve(), zc = () => ps || (jc.then(() => ps = 0), ps = Date.now());
function Bc(e, t) {
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
  return n.value = e, n.attached = zc(), n;
}
const Li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Hc = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Tc(e, s, o) : t === "style" ? Oc(e, n, s) : jn(t) ? zn(t) || Nc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wc(e, t, s, o)) ? (Ai(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mi(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Vc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(s))) ? Ai(e, Ve(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Mi(e, t, s, o));
};
function Wc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Li(t) && X(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Li(t) && pe(n) ? !1 : t in e;
}
function Vc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ve(t);
  return Array.isArray(n) ? n.some((i) => Ve(i) === s) : Object.keys(n).some((i) => Ve(i) === s);
}
const Kc = ["ctrl", "shift", "alt", "meta"], Uc = {
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
  exact: (e, t) => Kc.some((n) => e[`${n}Key`] && !t.includes(n))
}, gt = (e, t) => {
  if (!e)
    return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Uc[t[o]];
      if (l && l(i, t))
        return;
    }
    return e(i, ...r);
  });
}, Jc = /* @__PURE__ */ ve({ patchProp: Hc }, yc);
let $i;
function qc() {
  return $i || ($i = Gl(Jc));
}
const Yc = (...e) => {
  const t = qc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Qc(s);
    if (!i)
      return;
    const r = t._component;
    !X(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Gc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function Gc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qc(e) {
  return pe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let lo;
const Xn = (e) => lo = e, co = (
  /* istanbul ignore next */
  Symbol()
);
function As(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var un;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(un || (un = {}));
function Xc() {
  const e = er(!0), t = e.run(() => /* @__PURE__ */ me({}));
  let n = [], s = [];
  const i = Bs({
    install(r) {
      Xn(i), i._a = r, r.provide(co, i), r.config.globalProperties.$pinia = i, s.forEach((o) => n.push(o)), s = [];
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
const ao = () => {
};
function Fi(e, t, n, s = ao) {
  e.add(t);
  const i = () => {
    e.delete(t) && s();
  };
  return !n && tr() && nr(i), i;
}
function Bt(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const Zc = (e) => e(), Pi = Symbol(), gs = Symbol();
function Os(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], i = e[n];
    As(i) && As(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ge(s) && !/* @__PURE__ */ ct(s) ? e[n] = Os(i, s) : e[n] = s;
  }
  return e;
}
const ea = (
  /* istanbul ignore next */
  Symbol()
);
function ta(e) {
  return !As(e) || !Object.prototype.hasOwnProperty.call(e, ea);
}
const { assign: mt } = Object;
function na(e) {
  return !!(/* @__PURE__ */ ge(e) && e.effect);
}
function sa(e, t, n, s) {
  const { state: i, actions: r, getters: o } = t, l = n.state.value[e];
  let c;
  function f() {
    l || (n.state.value[e] = i ? i() : {});
    const a = /* @__PURE__ */ Zo(n.state.value[e]);
    return mt(a, r, Object.keys(o || {}).reduce((p, h) => (p[h] = Bs(Oe(() => {
      Xn(n);
      const b = n._s.get(e);
      return o[h].call(b, b);
    })), p), {}));
  }
  return c = uo(e, f, t, n, s, !0), c;
}
function uo(e, t, n = {}, s, i, r) {
  let o;
  const l = mt({ actions: {} }, n), c = { deep: !0 };
  let f, a, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), b;
  const S = s.state.value[e];
  !r && !S && (s.state.value[e] = {});
  let L;
  function z(R) {
    let M;
    f = a = !1, typeof R == "function" ? (R(s.state.value[e]), M = {
      type: un.patchFunction,
      storeId: e,
      events: b
    }) : (Os(s.state.value[e], R), M = {
      type: un.patchObject,
      payload: R,
      storeId: e,
      events: b
    });
    const H = L = Symbol();
    yt().then(() => {
      L === H && (f = !0);
    }), a = !0, Bt(p, M, s.state.value[e]);
  }
  const B = r ? function() {
    const { state: M } = n, H = M ? M() : {};
    this.$patch((J) => {
      mt(J, H);
    });
  } : (
    /* istanbul ignore next */
    ao
  );
  function V() {
    o.stop(), p.clear(), h.clear(), s._s.delete(e);
  }
  const j = (R, M = "") => {
    if (Pi in R)
      return R[gs] = M, R;
    const H = function() {
      Xn(s);
      const J = Array.from(arguments), O = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set();
      function oe(Z) {
        O.add(Z);
      }
      function xe(Z) {
        te.add(Z);
      }
      Bt(h, {
        args: J,
        name: H[gs],
        store: F,
        after: oe,
        onError: xe
      });
      let ce;
      try {
        ce = R.apply(this && this.$id === e ? this : F, J);
      } catch (Z) {
        throw Bt(te, Z), Z;
      }
      return ce instanceof Promise ? ce.then((Z) => (Bt(O, Z), Z)).catch((Z) => (Bt(te, Z), Promise.reject(Z))) : (Bt(O, ce), ce);
    };
    return H[Pi] = !0, H[gs] = M, H;
  }, D = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Fi.bind(null, h),
    $patch: z,
    $reset: B,
    $subscribe(R, M = {}) {
      const H = Fi(p, R, M.detached, () => J()), J = o.run(() => Pt(() => s.state.value[e], (O) => {
        (M.flush === "sync" ? a : f) && R({
          storeId: e,
          type: un.direct,
          events: b
        }, O);
      }, mt({}, c, M)));
      return H;
    },
    $dispose: V
  }, F = /* @__PURE__ */ Kn(D);
  s._s.set(e, F);
  const Q = (s._a && s._a.runWithContext || Zc)(() => s._e.run(() => (o = er()).run(() => t({ action: j }))));
  for (const R in Q) {
    const M = Q[R];
    if (/* @__PURE__ */ ge(M) && !na(M) || /* @__PURE__ */ ct(M))
      r || (S && ta(M) && (/* @__PURE__ */ ge(M) ? M.value = S[R] : Os(M, S[R])), s.state.value[e][R] = M);
    else if (typeof M == "function") {
      const H = j(M, R);
      Q[R] = H, l.actions[R] = M;
    }
  }
  return mt(F, Q), mt(/* @__PURE__ */ se(F), Q), Object.defineProperty(F, "$state", {
    get: () => s.state.value[e],
    set: (R) => {
      z((M) => {
        mt(M, R);
      });
    }
  }), s._p.forEach((R) => {
    mt(F, o.run(() => R({
      store: F,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), S && r && n.hydrate && n.hydrate(F.$state, S), f = !0, a = !0, F;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ia(e, t, n) {
  let s;
  const i = typeof t == "function";
  s = i ? n : t;
  function r(o, l) {
    const c = ul();
    return o = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    o || (c ? rn(co, null) : null), o && Xn(o), o = lo, o._s.has(e) || (i ? uo(e, t, s, o) : sa(e, s, o)), o._s.get(e);
  }
  return r.$id = e, r;
}
function ra(e, t) {
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
function Gs(e, t, n) {
  if (n.length === 0)
    return t;
  const s = n[0];
  return n.length > 1 && (t = Gs(typeof e != "object" || e === null || !Object.prototype.hasOwnProperty.call(e, s) ? Number.isInteger(Number(n[1])) ? [] : {} : e[s], t, Array.prototype.slice.call(n, 1))), Number.isInteger(Number(s)) && Array.isArray(e) ? e.slice()[s] : Object.assign({}, e, { [s]: t });
}
function fo(e, t) {
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
  return Gs(e, fo(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function ho(e, t) {
  return t.map((n) => n.split(".")).map((n) => [n, ra(e, n)]).filter((n) => n[1] !== void 0).reduce((n, s) => Gs(n, s[1], s[0]), {});
}
function po(e, t) {
  return t.map((n) => n.split(".")).reduce((n, s) => fo(n, s), e);
}
function Ni(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o, beforeHydrate: l, afterHydrate: c }, f, a = !0) {
  try {
    a && (l == null || l(f));
    const p = t.getItem(s);
    if (p) {
      const h = n.deserialize(p), b = r ? ho(h, r) : h, S = o ? po(b, o) : b;
      e.$patch(S);
    }
    a && (c == null || c(f));
  } catch (p) {
    i && console.error("[pinia-plugin-persistedstate]", p);
  }
}
function Ri(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o }) {
  try {
    const l = r ? ho(e, r) : e, c = o ? po(l, o) : l, f = n.serialize(c);
    t.setItem(s, f);
  } catch (l) {
    i && console.error("[pinia-plugin-persistedstate]", l);
  }
}
function oa(e, t) {
  return typeof e == "function" ? e(t) : typeof e == "string" ? e : t;
}
function la(e, t, n) {
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
      Ni(i, c, e, l);
    });
  }, i.$persist = () => {
    o.forEach((l) => {
      Ri(i.$state, l);
    });
  }, o.forEach((l) => {
    Ni(i, l, e), i.$subscribe((c, f) => Ri(f, l), { detached: !0 });
  });
}
function ca(e = {}) {
  return function(t) {
    la(t, (n) => {
      const s = oa(n.key, t.store.$id);
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
var aa = ca();
function Cn(e) {
  if (!e)
    return 0;
  if (typeof e == "number")
    return e;
  const t = new Date(e).getTime();
  return isNaN(t) ? 0 : t;
}
async function ua(e) {
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
            if (typeof p == "object" && (b = Cn(p.last_mes) || Cn(p.create_date) || Cn(p.date) || 0), !b && typeof h == "string") {
              const S = h.match(/(\d{4}-\d{2}-\d{2})@(\d{2})h(\d{2})m/);
              S && (b = Cn(`${S[1]}T${S[2]}:${S[3]}:00`));
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
async function Ls(e, t, n) {
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
async function fa(e, t, n) {
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
async function ki(e, t, n) {
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
let ms = [];
const go = /* @__PURE__ */ ia("chatLogManager", () => {
  const e = /* @__PURE__ */ me([]), t = /* @__PURE__ */ me(null), n = /* @__PURE__ */ me([]), s = /* @__PURE__ */ me(/* @__PURE__ */ new Set()), i = /* @__PURE__ */ me(""), r = /* @__PURE__ */ me([]), o = /* @__PURE__ */ me(!1), l = /* @__PURE__ */ me(!1), c = /* @__PURE__ */ me(!1), f = /* @__PURE__ */ me([]), a = Oe(() => {
    if (i.value.trim())
      return r.value.map((R) => ({
        type: "chat",
        id: R.id,
        charName: R.charName,
        chat: e.value.find((M) => M.id === R.chatId),
        searchHit: { content: R.content }
      }));
    const F = [], q = /* @__PURE__ */ new Map();
    e.value.forEach((R) => {
      const M = R.charName || "未知角色";
      q.has(M) || q.set(M, { avatarUrl: R.avatarUrl, chats: [], folderTime: 0 });
      const H = q.get(M);
      H.chats.push(R), R.lastActive > H.folderTime && (H.folderTime = R.lastActive);
    });
    const Q = Array.from(q.entries()).sort((R, M) => M[1].folderTime - R[1].folderTime);
    for (const [R, M] of Q)
      F.push({ type: "header", id: `header_${R}`, charName: R, avatarUrl: M.avatarUrl, chatCount: M.chats.length }), s.value.has(R) && [...M.chats].sort((J, O) => O.lastActive - J.lastActive).forEach((J) => {
        F.push({ type: "chat", id: `chat_${J.id}`, charName: R, chat: J });
      });
    return F;
  }), p = Oe(() => e.value.length === 0 ? !1 : i.value.trim() && r.value.length > 0 ? r.value.every((F) => f.value.includes(F.chatId)) : f.value.length === e.value.length);
  async function h() {
    if (!o.value) {
      o.value = !0;
      try {
        e.value = [], await ua((F) => {
          e.value.push(...F);
        }), b();
      } finally {
        o.value = !1;
      }
    }
  }
  async function b() {
    if (l.value)
      return;
    l.value = !0, ms = [];
    const F = 5, q = e.value;
    for (let Q = 0; Q < q.length && l.value; Q += F) {
      const R = q.slice(Q, Q + F);
      await Promise.all(R.map(async (M) => {
        const H = await Ls(M.charName, M.avatarUrl, M.id);
        if (M.msgCount === 0 && H.length > 0 && (M.msgCount = H.length), H.length > 0) {
          const J = H[H.length - 1], O = J.send_date || J.date || J.time;
          if (O) {
            const te = typeof O == "number" ? O : new Date(O).getTime();
            !isNaN(te) && te > 0 && (M.lastActive = te);
          }
        }
        ms.push(...H.map((J, O) => ({
          id: `${M.id}_${O}`,
          chatId: M.id,
          charName: M.charName,
          content: J.mes || ""
        })));
      })), await new Promise((M) => setTimeout(M, 10));
    }
    l.value = !1;
  }
  function S() {
    l.value = !1;
  }
  function L(F) {
    i.value = F;
    const q = F.trim().toLowerCase();
    r.value = q ? ms.filter((Q) => Q.content.toLowerCase().includes(q)) : [];
  }
  async function z(F) {
    t.value = F.id, n.value = await Ls(F.charName, F.avatarUrl, F.id);
  }
  function B(F) {
    s.value.has(F) ? s.value.delete(F) : s.value.add(F);
  }
  function V() {
    c.value = !c.value, c.value || (f.value = []);
  }
  function j(F) {
    const q = f.value.indexOf(F);
    q > -1 ? f.value.splice(q, 1) : f.value.push(F);
  }
  function D() {
    if (p.value)
      f.value = [];
    else if (i.value.trim()) {
      const F = r.value.map((q) => q.chatId);
      f.value = Array.from(/* @__PURE__ */ new Set([...f.value, ...F]));
    } else
      f.value = e.value.map((F) => F.id);
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
    fetchChats: h,
    loadMessages: z,
    toggleChar: B,
    performSearch: L,
    toggleBatchMode: V,
    toggleSelection: j,
    toggleSelectAll: D,
    stopIndexing: S
    // 暴露中断方法
  };
});
function ha(e, t, n) {
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
function Di(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
const da = (e, t) => Math.abs(e - t) < 1.01, pa = (e, t, n) => {
  let s;
  return function(...i) {
    e.clearTimeout(s), s = e.setTimeout(() => t.apply(this, i), n);
  };
};
let Xt;
const vs = () => {
  if (Xt !== void 0)
    return Xt;
  if (typeof navigator > "u")
    return Xt = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent))
    return Xt = !0;
  const e = navigator.maxTouchPoints;
  return Xt = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, ji = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, ga = (e) => e, ma = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, i = new Array(s);
  for (let r = 0; r < s; r++)
    i[r] = t + r;
  return i;
}, va = (e, t) => {
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
  if (i(ji(n)), !s.ResizeObserver)
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
      i(ji(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return r.observe(n, { box: "border-box" }), () => {
    r.unobserve(n);
  };
}, Dn = {
  passive: !0
}, ya = typeof window > "u" ? !0 : "onscrollend" in window, _a = (e, t, n) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const i = e.targetWindow;
  if (!i)
    return;
  const r = e.options.useScrollendEvent && ya;
  let o = 0;
  const l = r ? null : pa(
    i,
    () => t(o, !1),
    e.options.isScrollingResetDelay
  ), c = (p) => () => {
    o = n(s), l == null || l(), t(o, p);
  }, f = c(!0), a = c(!1);
  return s.addEventListener("scroll", f, Dn), r && s.addEventListener("scrollend", a, Dn), () => {
    s.removeEventListener("scroll", f), r && s.removeEventListener("scrollend", a);
  };
}, ba = (e, t) => _a(e, t, (n) => {
  const { horizontal: s, isRtl: i } = e.options;
  return s ? n.scrollLeft * (i && -1 || 1) : n.scrollTop;
}), xa = (e, t, n) => {
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
}, Sa = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var i, r;
  (r = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null || r.call(i, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, wa = Sa;
class Ca {
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
        getItemKey: ga,
        rangeExtractor: ma,
        onChange: () => {
        },
        measureElement: xa,
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
        const h = o.count, b = r.count, S = this.getMeasurements(), L = h > 0 ? ((s = S[0]) == null ? void 0 : s.key) ?? o.getItemKey(0) : null, z = h > 0 ? ((i = S[h - 1]) == null ? void 0 : i.key) ?? o.getItemKey(h - 1) : null;
        if (b !== h || h > 0 && b > 0 && (r.getItemKey(0) !== L || r.getItemKey(b - 1) !== z)) {
          f = !0;
          const j = h > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? S[0] : null;
          j && (l = [j.key, this.getScrollOffset() - j.start]);
          const D = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          D && b > h && this.isAtEnd(o.scrollEndThreshold) && (h === 0 || r.getItemKey(b - 1) !== z) && (c = D);
        }
      }
      this.options = r, f && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, p = 0;
      if (l && this.scrollOffset !== null) {
        const [h, b] = l, S = this.getMeasurements(), { count: L, getItemKey: z } = this.options;
        let B = 0;
        for (; B < L && z(B) !== h; )
          B++;
        if (B < L) {
          const V = S[B];
          if (V) {
            const j = V.start + b;
            j !== this.scrollOffset && (p = j - this.scrollOffset, this.scrollOffset = j, a = !0);
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
            this._iosTouching = !1, !(!vs() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            o,
            Dn
          ), r.addEventListener(
            "touchend",
            l,
            Dn
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
        r !== null && !l && (vs() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? c !== 0 && (this._iosDeferredAdjustment += c) : this._scrollToOffset(this.getScrollOffset(), {
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
          for (const S of this.laneAssignments.keys())
            S >= n && this.laneAssignments.delete(S);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((S) => {
          this.itemSizeCache.set(S.key, S.size);
        }));
        const p = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), l === 1) {
          const S = this.options.gap, L = n * 2;
          let z = this._flatMeasurements;
          if (!z || z.length < L) {
            const j = new Float64Array(L);
            z && p > 0 && j.set(z.subarray(0, p * 2)), z = j, this._flatMeasurements = z;
          }
          let B;
          if (p === 0)
            B = s + i;
          else {
            const j = p - 1;
            B = z[j * 2] + z[j * 2 + 1] + S;
          }
          for (let j = p; j < n; j++) {
            const D = r(j), F = a.get(D), q = typeof F == "number" ? F : this.options.estimateSize(j);
            z[j * 2] = B, z[j * 2 + 1] = q, B += q + S;
          }
          const V = ha(n, z, r);
          return this.measurementsCache = V, V;
        }
        const h = this.measurementsCache.slice(0, p), b = new Array(l).fill(
          void 0
        );
        for (let S = 0; S < p; S++) {
          const L = h[S];
          L && (b[L.lane] = S);
        }
        for (let S = p; S < n; S++) {
          const L = r(S), z = this.laneAssignments.get(S);
          let B, V;
          const j = c === "estimate" || a.has(L);
          if (z !== void 0 && this.options.lanes > 1) {
            B = z;
            const Q = b[B], R = Q !== void 0 ? h[Q] : void 0;
            V = R ? R.end + this.options.gap : s + i;
          } else {
            const Q = this.options.lanes === 1 ? h[S - 1] : this.getFurthestMeasurement(h, S);
            V = Q ? Q.end + this.options.gap : s + i, B = Q ? Q.lane : S % this.options.lanes, this.options.lanes > 1 && j && this.laneAssignments.set(S, B);
          }
          const D = a.get(L), F = typeof D == "number" ? D : this.options.estimateSize(S), q = V + F;
          h[S] = {
            index: S,
            start: V,
            size: F,
            end: q,
            key: L,
            lane: B
          }, b[B] = S;
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
      (n, s, i, r) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = Ta(
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
      const a = this.itemSizeCache.get(c) ?? o, p = s - a;
      if (p !== 0) {
        const h = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = h ? this.getTotalSize() : 0, S = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(c, s), this.itemSizeCacheVersion++, h ? this.applyScrollAdjustment(this.getTotalSize() - b) : S && this.applyScrollAdjustment(p), this.notify(!1);
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
      const i = this._flatMeasurements, r = this.options.lanes === 1 && i != null, o = mo(
        0,
        s.length - 1,
        r ? (l) => i[l * 2] : (l) => Di(s[l]).start,
        n
      );
      return Di(s[o]);
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
    t !== 0 && (vs() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += t : (this._scrollToOffset(this.getScrollOffset(), {
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
    if (!o && da(i, this.getScrollOffset())) {
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
const mo = (e, t, n, s) => {
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
function Ea(e, t, n) {
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
function Ta(e, t, n, s, i) {
  const r = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: r };
  if (s === 1 && i !== null) {
    const f = Ea(
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
  let l = mo(0, r, (f) => e[f].start, n), c = l;
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
function Ia(e) {
  const t = new Ca(ee(e)), n = /* @__PURE__ */ Tn(t), s = t._didMount();
  return Pt(
    () => ee(e).getScrollElement(),
    (i) => {
      i && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), Pt(
    () => ee(e),
    (i) => {
      t.setOptions({
        ...i,
        onChange: (r, o) => {
          var l;
          ti(n), (l = i.onChange) == null || l.call(i, r, o);
        }
      }), t._willUpdate(), ti(n);
    },
    {
      immediate: !0
    }
  ), nr(s), n;
}
function Ma(e) {
  return Ia(
    Oe(() => ({
      observeElementRect: va,
      observeElementOffset: ba,
      scrollToFn: wa,
      ...ee(e)
    }))
  );
}
const Aa = ["data-index"], Oa = ["onClick"], La = { class: "char-info" }, $a = { class: "folder-icon" }, Fa = { class: "char-name" }, Pa = { class: "chat-badge" }, Na = ["onClick"], Ra = ["checked", "onClick"], ka = { class: "chat-item-content" }, Da = { class: "chat-title" }, ja = {
  key: 0,
  class: "search-tag"
}, za = {
  key: 0,
  class: "hit-content"
}, Ba = {
  key: 1,
  class: "chat-meta"
}, Ha = {
  key: 0,
  class: "empty-state"
}, Wa = /* @__PURE__ */ Fr({
  __name: "SessionList",
  setup(e) {
    const t = go(), n = /* @__PURE__ */ me(null), s = Oe(() => t.displayRows), i = Oe(() => ({
      count: s.value.length,
      getScrollElement: () => n.value,
      estimateSize: () => 60,
      overscan: 10
    })), r = Ma(i), o = Oe(() => r.value.getVirtualItems()), l = () => r.value.getTotalSize(), c = (a) => s.value[a], f = (a) => {
      const p = c(a);
      p.type === "chat" && p.chat && (t.isBatchMode ? t.toggleSelection(p.chat.id) : t.loadMessages(p.chat));
    };
    return (a, p) => (he(), de("div", {
      ref_key: "containerRef",
      ref: n,
      class: "virtual-list-container"
    }, [
      Y("div", {
        style: bt({ height: l() + "px", position: "relative", width: "100%" })
      }, [
        (he(!0), de(Re, null, kr(o.value, (h) => {
          var b, S, L, z, B, V;
          return he(), de("div", {
            key: h.index,
            class: "virtual-row",
            style: bt({ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${h.start}px)` }),
            ref_for: !0,
            ref: ee(r).measureElement,
            "data-index": h.index
          }, [
            c(h.index).type === "header" ? (he(), de("div", {
              key: 0,
              class: "char-header",
              onClick: (j) => ee(t).toggleChar(c(h.index).charName)
            }, [
              Y("div", La, [
                Y("span", $a, be(ee(t).expandedChars.has(c(h.index).charName) ? "📂" : "📁"), 1),
                Y("span", Fa, be(c(h.index).charName), 1)
              ]),
              Y("span", Pa, be(c(h.index).chatCount), 1)
            ], 8, Oa)) : (he(), de("div", {
              key: 1,
              class: $t(["chat-item", {
                active: !ee(t).isBatchMode && ee(t).currentChatId === ((b = c(h.index).chat) == null ? void 0 : b.id),
                selected: ee(t).isBatchMode && ee(t).selectedChatIds.includes(((S = c(h.index).chat) == null ? void 0 : S.id) || "")
              }]),
              onClick: (j) => f(h.index)
            }, [
              ee(t).isBatchMode ? (he(), de("input", {
                key: 0,
                type: "checkbox",
                class: "batch-checkbox",
                checked: ee(t).selectedChatIds.includes(((L = c(h.index).chat) == null ? void 0 : L.id) || ""),
                onClick: gt((j) => f(h.index), ["stop"])
              }, null, 8, Ra)) : He("", !0),
              Y("div", ka, [
                Y("div", Da, [
                  ee(t).searchQuery ? (he(), de("span", ja, "[" + be(c(h.index).charName) + "]", 1)) : He("", !0),
                  no(" " + be(((z = c(h.index).chat) == null ? void 0 : z.title) || "未命名会话"), 1)
                ]),
                ee(t).searchQuery ? (he(), de("div", za, '"' + be((B = c(h.index).searchHit) == null ? void 0 : B.content) + '"', 1)) : (he(), de("div", Ba, "消息数: " + be(((V = c(h.index).chat) == null ? void 0 : V.msgCount) ?? "..."), 1))
              ])
            ], 10, Na))
          ], 12, Aa);
        }), 128))
      ], 4),
      s.value.length === 0 ? (he(), de("div", Ha, "暂无匹配记录")) : He("", !0)
    ], 512));
  }
});
const vo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Va = /* @__PURE__ */ vo(Wa, [["__scopeId", "data-v-82b53ab7"]]);
function Zn(e, t, n) {
  const s = new Blob([t], { type: n }), i = URL.createObjectURL(s), r = document.createElement("a");
  r.href = i, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
function Ka(e, t) {
  let n = `=== 聊天记录: ${e} ===
导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}

`;
  t.forEach((s) => {
    const i = s.name || (s.is_user ? "You" : "Bot");
    n += `[${i}]:
${s.mes}

`;
  }), Zn(`${e}.txt`, n, "text/plain;charset=utf-8");
}
function Ua(e, t) {
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
  }), Zn(`${e}.md`, n, "text/markdown;charset=utf-8");
}
function Ja(e, t, n) {
  const s = {
    user_name: "You",
    character_name: t,
    create_date: Date.now(),
    chat_metadata: {}
  }, i = [JSON.stringify(s), ...n.map((r) => JSON.stringify(r))];
  Zn(`${e}.jsonl`, i.join(`
`), "application/octet-stream");
}
function qa(e, t) {
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
  })), Zn(s, i, `text/${t === "json" ? "plain" : t};charset=utf-8`);
}
const Ya = { class: "modal-header" }, Ga = { class: "header-actions" }, Qa = ["disabled"], Xa = { class: "modal-body" }, Za = { class: "left-panel" }, eu = { class: "panel-header" }, tu = { class: "search-box" }, nu = ["placeholder", "value", "disabled"], su = {
  key: 0,
  class: "search-loader"
}, iu = {
  key: 0,
  class: "select-all-bar"
}, ru = ["checked"], ou = {
  for: "selectAllBox",
  class: "select-all-label"
}, lu = { class: "right-panel" }, cu = { class: "panel-header right-header" }, au = {
  key: 0,
  class: "header-actions"
}, uu = {
  key: 0,
  class: "batch-panel"
}, fu = { class: "batch-status" }, hu = {
  key: 0,
  class: "hint"
}, du = {
  key: 0,
  class: "batch-actions"
}, pu = ["disabled"], gu = ["disabled"], mu = ["disabled"], vu = ["disabled"], yu = {
  key: 0,
  class: "empty-state"
}, _u = {
  key: 1,
  class: "loading-indicator"
}, bu = ["onClick"], xu = ["innerHTML"], En = 72, zi = 12, Su = /* @__PURE__ */ Fr({
  __name: "LogOverview",
  setup(e) {
    let t = !0;
    const n = /* @__PURE__ */ me(!0), s = /* @__PURE__ */ me(0), i = () => {
      const m = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--clm-vh", `${m}px`);
    }, r = () => setTimeout(i, 300), o = (m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), l = (m) => (m || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), c = (m, d) => {
      if (!m)
        return "";
      const v = m.replace(/<[^>]+>/g, "");
      if (!d)
        return l(v);
      const y = v.toLowerCase(), x = d.toLowerCase(), T = y.indexOf(x);
      if (T === -1)
        return l(v);
      const E = Math.max(0, T - 15), A = Math.min(v.length, T + d.length + 30);
      let N = v.slice(E, A);
      const K = E > 0 ? "..." : "", W = A < v.length ? "..." : "";
      let G = l(N);
      const ne = new RegExp(o(d), "gi");
      return G = G.replace(ne, (ae) => `<mark class="search-highlight">${ae}</mark>`), `${K}${G}${W}`;
    };
    let f = null;
    const a = (m, d) => {
      if (!d)
        return;
      const v = m.querySelector(".mes_text, .message-text, .content") || m, y = document.createTreeWalker(v, NodeFilter.SHOW_TEXT, null), x = [];
      let T;
      for (; T = y.nextNode(); ) {
        const E = T, A = E.nodeValue || "", N = new RegExp(o(d), "gi");
        if (N.test(A)) {
          const K = document.createElement("span");
          K.innerHTML = l(A).replace(N, (W) => `<mark style="background-color: #ff9800; color: #fff; padding: 0 3px; border-radius: 3px; box-shadow: 0 0 6px rgba(255,152,0,0.8); font-weight: bold;">${W}</mark>`), E.parentNode && x.push({ old: E, new: K, parent: E.parentNode });
        }
      }
      x.forEach((E) => E.parent.replaceChild(E.new, E.old)), f && clearTimeout(f), f = window.setTimeout(() => {
        x.forEach((E) => {
          E.parent.contains(E.new) && E.parent.replaceChild(E.old, E.new);
        }), f = null;
      }, 3500);
    };
    class p {
      get win() {
        return window;
      }
      get context() {
        var d, v;
        try {
          if (typeof ((d = this.win.SillyTavern) == null ? void 0 : d.getContext) == "function")
            return this.win.SillyTavern.getContext();
          if (this.win.context)
            return this.win.context;
          if ((v = this.win.ST) != null && v.context)
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
      selectCharacterById(d) {
        if (typeof this.context.selectCharacter == "function")
          return this.context.selectCharacter(d), !0;
        if (typeof this.win.selectCharacterById == "function")
          return this.win.selectCharacterById(d), !0;
        const v = document.querySelector(`.character_select[chid="${d}"], [data-character-id="${d}"], .character-item[data-id="${d}"]`);
        return v ? (v.click(), !0) : !1;
      }
      clickHistoryItem(d) {
        const v = d.replace(/\.jsonl?$/, ""), y = v + ".jsonl", x = [`[chatfile="${y}"]`, `[chatfile="${v}"]`, `[file_name="${v}"]`, `[data-chat-file="${y}"]`];
        for (const E of x) {
          const A = document.querySelector(E);
          if (A)
            return A.click(), !0;
        }
        const T = document.querySelectorAll('.past_chat_item, .chat-history-item, [class*="history-item"]');
        for (let E = 0; E < T.length; E++)
          if ((T[E].textContent || "").includes(v))
            return T[E].click(), !0;
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
      findCharacterElement(d, v) {
        var N;
        const y = (K) => (K || "").replace(/\s+/g, "").toLowerCase(), x = y(d), T = v && decodeURIComponent(v).replace(/\\/g, "/").split("/").pop() || "", E = [".character_select", ".character-select", "[data-character-id]", ".ch_card", ".character-item"];
        let A = null;
        for (const K of E) {
          const W = document.querySelectorAll(K);
          if (W.length) {
            A = W;
            break;
          }
        }
        if (!A)
          return { element: null, index: -1 };
        for (const K of A) {
          const W = y(K.textContent || "") + y(K.getAttribute("ch_name") || "") + y(K.getAttribute("name") || ""), G = ((N = K.querySelector("img")) == null ? void 0 : N.getAttribute("src")) || K.getAttribute("avatar") || "", ne = G && decodeURIComponent(G).replace(/\\/g, "/").split("/").pop() || "";
          if (W.includes(x) || T && ne && (ne.includes(T) || T.includes(ne))) {
            let ae = parseInt(K.getAttribute("chid") || K.getAttribute("data-character-id") || K.getAttribute("data-id") || "-1", 10);
            return { element: K, index: isNaN(ae) ? -1 : ae };
          }
        }
        return { element: null, index: -1 };
      }
      findMessageElement(d, v, y, x) {
        const T = document.getElementById("chat") || document.body, E = Array.from(T.querySelectorAll(".mes, [mesid]")).filter((W) => !W.closest(".log-manager-modal")), A = d.mesid ?? d.id;
        if (A != null)
          for (let W = E.length - 1; W >= 0; W--) {
            const G = E[W];
            if (G.dataset.mesid === String(A) || G.getAttribute("mesid") === String(A))
              return G;
          }
        if (!y && v >= 0)
          for (let W = E.length - 1; W >= 0; W--) {
            const G = E[W];
            if (parseInt(G.dataset.index || G.getAttribute("mesid") || "-1", 10) === v)
              return G;
          }
        const N = (W) => (W || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        let K = N(d.mes);
        if (K.length > 40 && (K = K.substring(0, 40)), K.length >= 4)
          for (let W = E.length - 1; W >= 0; W--) {
            const G = E[W], ne = G.querySelector(".mes_text, .message-text, .content") || G;
            if (N(ne.textContent).includes(K))
              return G;
          }
        if (y && x) {
          const W = N(x);
          if (W.length >= 2)
            for (let G = E.length - 1; G >= 0; G--) {
              const ne = E[G], ae = ne.querySelector(".mes_text, .message-text, .content") || ne;
              if (N(ae.textContent).includes(W))
                return ne;
            }
        }
        return null;
      }
      resetCurrentCharacter() {
        this.context.characterId !== void 0 && (this.context.characterId = -1), this.win.this_chid !== void 0 && (this.win.this_chid = -1);
      }
    }
    const h = go(), b = new p(), S = /* @__PURE__ */ Tn(null);
    function L() {
      const m = document.documentElement;
      if (m.classList.contains("dark"))
        return !0;
      if (m.classList.contains("light"))
        return !1;
      const v = (getComputedStyle(document.body).backgroundColor || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (v) {
        const y = parseInt(v[1], 10), x = parseInt(v[2], 10), T = parseInt(v[3], 10);
        return y * 0.299 + x * 0.587 + T * 0.114 < 128;
      }
      return !0;
    }
    const z = /* @__PURE__ */ me(L());
    let B = null;
    const V = () => {
      B !== null && cancelAnimationFrame(B), B = requestAnimationFrame(() => {
        if (!S.value)
          return;
        const m = getComputedStyle(document.body);
        let d = m.backgroundColor;
        (!d || d === "rgba(0, 0, 0, 0)" || d === "transparent") && (d = z.value ? "#1e1e1e" : "#f5f5f5");
        let v = m.color;
        const y = document.querySelector(".mes_text, .message-text");
        if (y) {
          const A = getComputedStyle(y).color;
          A && A !== "rgba(0, 0, 0, 0)" && A !== "transparent" && (v = A);
        }
        const x = (A) => {
          const N = A.match(/\d+/g);
          return N && N.length >= 3 ? parseInt(N[0], 10) * 0.299 + parseInt(N[1], 10) * 0.587 + parseInt(N[2], 10) * 0.114 : 128;
        }, T = x(d), E = x(v);
        50 > Math.abs(T - E) && (v = T < 128 ? "#E8E8E8" : "#33312F"), S.value.style.backgroundColor = d, S.value.style.color = v, S.value.style.setProperty("--dynamic-solid-bg", d);
      });
    };
    let j = null, D = null;
    const F = /* @__PURE__ */ me(!1), q = /* @__PURE__ */ Tn(null), Q = /* @__PURE__ */ me({ top: "calc(100% + 5px)", right: "0", bottom: "auto", left: "auto", transform: "none" }), R = /* @__PURE__ */ me(!1), M = /* @__PURE__ */ me(!1), H = /* @__PURE__ */ me(null), J = /* @__PURE__ */ new Set();
    let O = null;
    const te = (m) => {
      m && m.stopPropagation(), F.value = !F.value, F.value && yt(() => {
        if (window.innerWidth <= 768)
          Q.value = { top: "50%", left: "50%", transform: "translate(-50%, -50%)", bottom: "auto", right: "auto" };
        else if (q.value) {
          const d = q.value.getBoundingClientRect();
          let v = "calc(100% + 5px)", y = "auto", x = "0", T = "auto";
          window.innerHeight - d.bottom < 150 && (v = "auto", y = "calc(100% + 5px)"), d.right < 160 && (x = "auto", T = "0"), Q.value = { top: v, bottom: y, right: x, left: T, transform: "none" };
        }
      });
    }, oe = /* @__PURE__ */ Tn(null), xe = /* @__PURE__ */ me(0), ce = Oe(() => {
      const m = h.currentMessages || [];
      return Array.isArray(m) ? h.searchQuery ? [...m].sort((d, v) => (v.send_date ?? v.timestamp ?? 0) - (d.send_date ?? d.timestamp ?? 0)) : m : [];
    }), Z = Oe(() => ce.value.length), le = Oe(() => Z.value * En), Je = Oe(() => {
      const m = oe.value;
      if (!m)
        return { start: 0, end: Math.min(Z.value, 20) };
      const d = Math.floor(xe.value / En), v = Math.ceil((xe.value + m.clientHeight) / En);
      return { start: Math.max(0, d - zi), end: Math.min(Z.value, v + zi) };
    }), kt = Oe(() => {
      const m = h.searchQuery, d = Je.value.start;
      return ce.value.slice(d, Je.value.end).map((v, y) => {
        const x = d + y;
        return { ...v, _localIndex: y, _globalIndex: x, _top: x * En, _html: c(v.mes, m) };
      });
    });
    let je = null;
    const Fe = () => {
      je !== null && cancelAnimationFrame(je), je = requestAnimationFrame(() => {
        oe.value && (xe.value = oe.value.scrollTop);
      });
    };
    Pt(() => h.currentChatId, async () => {
      await yt(), oe.value && (oe.value.scrollTop = 0, xe.value = 0);
    });
    let ft = null, St = null;
    const es = (m) => {
      h.$patch({ searchQuery: m.target.value }), ft && clearTimeout(ft), ft = window.setTimeout(() => {
        St && St.abort(), St = new AbortController(), h.performSearch(h.searchQuery);
      }, 300);
    };
    let ze = null;
    const wt = new ResizeObserver(() => {
      ze && clearTimeout(ze), ze = window.setTimeout(() => {
        oe.value && (xe.value = oe.value.scrollTop);
      }, 100);
    });
    Ws(async () => {
      t = !0, i(), window.addEventListener("resize", i), window.addEventListener("orientationchange", r), await yt(), V(), j = new MutationObserver(() => {
        const d = L();
        d !== z.value && (z.value = d), V();
      }), j.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), j.observe(document.body, { attributes: !0, attributeFilter: ["class", "style"] });
      const m = window.matchMedia("(prefers-color-scheme: dark)");
      D = () => {
        const d = L();
        d !== z.value && (z.value = d), V();
      }, m.addEventListener("change", D), h.fetchChats(), window.refreshChatLogManager ? window.refreshChatLogManager_fallback = () => h.fetchChats() : window.refreshChatLogManager = () => h.fetchChats(), oe.value && wt.observe(oe.value);
    }), Vs(() => {
      t = !1, window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r), j && j.disconnect(), D && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", D), B !== null && cancelAnimationFrame(B), ze && clearTimeout(ze), f && clearTimeout(f), ft && clearTimeout(ft), St && St.abort(), wt.disconnect(), J.forEach((m) => m.disconnect()), J.clear(), O && clearInterval(O), delete window.refreshChatLogManager, delete window.refreshChatLogManager_fallback;
    });
    const ht = () => {
      typeof window.closeChatLogManager == "function" ? window.closeChatLogManager() : n.value = !1;
    }, Ct = (m) => {
      const d = b.getCurrentChatFileName();
      return d && d.replace(/\.jsonl?$/, "") === m.replace(/\.jsonl?$/, "");
    }, Be = async (m, d, v) => {
      try {
        h.stopIndexing();
        const y = b.context, x = v.replace(/\.jsonl?$/, "");
        if (typeof y.saveChat == "function") {
          try {
            await y.saveChat();
          } catch {
          }
          await new Promise((N) => setTimeout(N, 300));
        } else
          b.saveChat(), await new Promise((N) => setTimeout(N, 300));
        let { element: T, index: E } = b.findCharacterElement(m, d);
        if (E === -1) {
          const N = b.getCharacters(), K = (ne) => (ne || "").replace(/\s+/g, "").toLowerCase(), W = K(m), G = N.find((ne) => K(ne.name) === W);
          G && (E = N.indexOf(G));
        }
        if (E === -1)
          return alert(`自动定位角色【${m}】失败，请手动在左侧选择该角色后继续。`), !1;
        const A = b.getCurrentCharacterId();
        return String(A) !== String(E) && (b.resetCurrentCharacter(), T ? T.click() : b.selectCharacterById(E), await new Promise((N) => setTimeout(N, 1200))), typeof y.openCharacterChat == "function" ? await y.openCharacterChat(x) : typeof y.executeSlashCommandsWithOptions == "function" ? await y.executeSlashCommandsWithOptions("/chat " + JSON.stringify(x)) : b.clickHistoryItem(v), await new Promise((N) => setTimeout(N, 600)), !0;
      } catch (y) {
        return console.error("[ChatLogManager] Jump Error:", y), !1;
      }
    }, Dt = (m, d, v, y) => {
      try {
        const x = document.getElementById("chat") || document.querySelector(".chat-container, #chat-window") || document.body;
        if (!x)
          return;
        let T = !1;
        const E = () => {
          if (T)
            return !0;
          const W = b.findMessageElement(m, d, v, y);
          if (W) {
            T = !0;
            const G = () => W.scrollIntoView({ behavior: "smooth", block: "center" });
            return G(), setTimeout(G, 200), setTimeout(G, 500), W.style.transition = "all 0.5s ease", W.style.boxShadow = "0 0 30px 10px rgba(255, 152, 0, 0.8)", W.style.backgroundColor = "rgba(255, 152, 0, 0.25)", setTimeout(() => {
              W.style.boxShadow = "", W.style.backgroundColor = "";
            }, 3e3), v && y && a(W, y), !0;
          }
          return !1;
        };
        if (E())
          return;
        let A = null;
        const N = new MutationObserver(() => {
          T || (A && clearTimeout(A), A = window.setTimeout(() => {
            E() && (N.disconnect(), J.delete(N));
          }, 100));
        });
        N.observe(x, { childList: !0, subtree: !0, attributes: !1 }), J.add(N);
        let K = 0;
        O && clearInterval(O), O = window.setInterval(() => {
          if (K++, E()) {
            clearInterval(O), N.disconnect(), J.delete(N);
            return;
          }
          K > 5 && K % 3 === 0 && (x.scrollTop = Math.max(0, x.scrollTop - 800)), K > 40 && (clearInterval(O), N.disconnect(), J.delete(N));
        }, 200);
      } catch (x) {
        console.warn("[ChatLogManager] Scroll to message failed:", x);
      }
    }, qt = async () => {
      const m = h.allChats.find((v) => v.id === h.currentChatId);
      if (!m)
        return;
      const d = Ct(m.id);
      ht(), await yt(), d || await Be(m.charName, m.avatarUrl, m.id) && await h.loadMessages(m);
    }, u = async (m, d) => {
      let v = m.chatId || m.chat_id;
      if (!v && m.id && typeof m.id == "string") {
        const A = m.id.lastIndexOf("_");
        v = A !== -1 ? m.id.substring(0, A) : m.id;
      }
      v || (v = h.currentChatId);
      const y = h.allChats.find((A) => A.id === v);
      if (!y) {
        alert("无法定位该消息归属的聊天文件。");
        return;
      }
      const x = !!h.searchQuery, T = h.searchQuery, E = Ct(y.id);
      ht(), await yt(), E ? Dt(m, d, x, T) : await Be(y.charName, y.avatarUrl, y.id) && (await h.loadMessages(y), await yt(), Dt(m, d, x, T));
    }, g = async () => {
      const m = h.allChats.find((v) => v.id === h.currentChatId);
      if (!m)
        return;
      const d = Ct(m.id);
      if (window.confirm(d ? "🚨 正在删除活跃聊天！将自动切换到历史记录，确定删除？" : "⚠️ 确定要永久删除此记录吗？"))
        try {
          if (h.stopIndexing(), await new Promise((v) => setTimeout(v, 100)), b.saveChat(), d) {
            const v = h.allChats.find((y) => y.charName === m.charName && y.id !== m.id);
            v && await Be(v.charName, v.avatarUrl, v.id);
          }
          await ki(m.charName, m.avatarUrl, m.id) ? (h.$patch({ currentChatId: null, currentMessages: [], selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch(""), h.fetchChats()) : alert("❌ 删除失败");
        } catch (v) {
          console.error("[ChatLogManager] Delete Error:", v);
        }
    }, _ = async () => {
      var v;
      if (h.selectedChatIds.length === 0 || !window.confirm(`🛑 极度危险！将删除 ${h.selectedChatIds.length} 个会话，确定吗？`))
        return;
      R.value = !0;
      let m = 0, d = 0;
      try {
        h.stopIndexing(), await new Promise((E) => setTimeout(E, 100));
        const y = Array.from(h.selectedChatIds);
        let x = !1, T = "";
        for (const E of y)
          if (Ct(E)) {
            x = !0, T = ((v = h.allChats.find((A) => A.id === E)) == null ? void 0 : v.charName) || "";
            break;
          }
        if (b.saveChat(), x) {
          const E = h.allChats.find((A) => A.charName === T && !y.includes(A.id));
          E && await Be(E.charName, E.avatarUrl, E.id);
        }
        for (const E of y) {
          const A = h.allChats.find((N) => N.id === E);
          A && await ki(A.charName, A.avatarUrl, A.id) ? m++ : d++;
        }
        h.$patch({ selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch("");
      } finally {
        R.value = !1, t && (alert(`🗑️ 完毕！成功: ${m}${d > 0 ? ` 失败: ${d}` : ""}`), h.fetchChats());
      }
    };
    async function I(m, d) {
      const v = [];
      let y = 0;
      const x = async () => {
        if (y >= d.length)
          return;
        const T = y++;
        try {
          v[T] = { success: !0, value: await d[T]() };
        } catch (E) {
          v[T] = { success: !1, error: E };
        }
        await x();
      };
      return await Promise.all(Array(Math.min(m, d.length)).fill(null).map(() => x())), v;
    }
    const C = (m) => {
      const d = h.allChats.find((x) => x.id === h.currentChatId);
      if (!d) {
        alert("未找到当前聊天记录");
        return;
      }
      let v = [];
      try {
        v = JSON.parse(JSON.stringify(h.currentMessages || []));
      } catch {
        v = Array.from(h.currentMessages || []);
      }
      if (!Array.isArray(v) || v.length === 0) {
        alert("当前聊天没有消息可导出");
        return;
      }
      const y = d.title || "未命名聊天";
      try {
        m === "txt" ? Ka(y, v) : m === "md" ? Ua(y, v) : m === "jsonl" && Ja(y, d.charName, v);
      } catch (x) {
        console.error("[ChatLogManager] 单独导出失败:", x), alert("导出操作遇到错误，请查看控制台日志。");
      }
      F.value = !1;
    }, w = async (m) => {
      if (h.selectedChatIds.length !== 0) {
        R.value = !0;
        try {
          const d = Array.from(h.selectedChatIds).map((y) => async () => {
            const x = h.allChats.find((T) => T.id === y);
            return x ? { title: x.title, charName: x.charName, messages: await Ls(x.charName, x.avatarUrl, x.id) } : null;
          }), v = await I(5, d);
          qa(v.filter((y) => y.success && y.value !== null).map((y) => y.value), m);
        } finally {
          R.value = !1;
        }
      }
    }, k = () => {
      H.value && H.value.click();
    }, P = async (m) => {
      const d = m.target.files;
      if (!d || d.length === 0)
        return;
      const v = 30 * 1024 * 1024;
      for (let T = 0; T < d.length; T++)
        if (d[T].size > v) {
          alert(`❌ 文件 ${d[T].name} 过大 (超过30MB)，为防止浏览器崩溃已中止导入。`), H.value && (H.value.value = "");
          return;
        }
      M.value = !0, s.value = 0;
      let y = 0, x = 0;
      try {
        for (let T = 0; T < d.length; T++) {
          const E = await d[T].text();
          let A;
          try {
            A = JSON.parse(E);
          } catch {
            A = E.split(`
`).filter((ae) => ae.trim()).map((ae) => JSON.parse(ae));
          }
          let N = [];
          Array.isArray(A) && (A.length > 0 && Array.isArray(A[0]) ? N = A.map((ae) => ({ messages: ae })) : A.length > 0 && A[0].messages ? N = A : A.length > 0 && A[0].chat_metadata ? N = [{ charName: A[0].character_name, messages: A.slice(1) }] : N = [{ messages: A }]);
          const K = N.length;
          let W = 0;
          const G = async (ae) => {
            var dt;
            for (const _e of ae) {
              const Me = _e.messages.filter((qe) => qe.mes !== void 0);
              if (Me.length === 0)
                continue;
              let Et = _e.charName || ((dt = Me.find((qe) => !qe.is_user && qe.name)) == null ? void 0 : dt.name) || "";
              if (!Et) {
                const qe = window.prompt("请输入绑定的角色名称：", "");
                if (!qe) {
                  x++;
                  continue;
                }
                Et = qe;
              }
              let jt = h.allChats.find((qe) => qe.charName === Et || Et.includes(qe.charName));
              jt && await fa(Me, jt.avatarUrl, jt.charName) ? y++ : x++;
            }
          }, ne = 10;
          for (let ae = 0; ae < K; ae += ne) {
            const dt = N.slice(ae, ae + ne);
            await G(dt), W += dt.length, s.value = Math.floor(W / K * 100), await new Promise((_e) => setTimeout(_e, 0));
          }
        }
      } finally {
        M.value = !1, s.value = 0, H.value && (H.value.value = ""), t && (alert(`🎉 导入完毕！成功: ${y}${x > 0 ? ` 失败: ${x}` : ""}`), h.fetchChats());
      }
    };
    return (m, d) => n.value ? (he(), de("div", {
      key: 0,
      class: "log-manager-modal",
      onClick: gt(ht, ["self"]),
      onTouchmove: d[9] || (d[9] = gt(() => {
      }, ["self", "prevent"]))
    }, [
      Y("div", {
        class: $t(["log-manager-container", z.value ? "theme-dark" : "theme-light"]),
        ref_key: "containerRef",
        ref: S
      }, [
        Y("header", Ya, [
          d[10] || (d[10] = Y("h2", null, "📚 聊天记录总览", -1)),
          Y("div", Ga, [
            Y("button", {
              class: "action-btn import-btn",
              onClick: k,
              disabled: M.value
            }, be(M.value ? `导入中... ${s.value}%` : "📥 导入"), 9, Qa),
            Y("input", {
              type: "file",
              ref_key: "fileInputRef",
              ref: H,
              style: { display: "none" },
              accept: ".json,.jsonl",
              multiple: "",
              onChange: P
            }, null, 544),
            Y("button", {
              class: $t(["action-btn toggle-batch-btn", { active: ee(h).isBatchMode }]),
              onClick: d[0] || (d[0] = //@ts-ignore
              (...v) => ee(h).toggleBatchMode && ee(h).toggleBatchMode(...v))
            }, be(ee(h).isBatchMode ? "退出批量" : "☑️ 批量"), 3),
            Y("button", {
              class: "icon-btn close-btn",
              onClick: ht,
              title: "关闭"
            }, "✕")
          ])
        ]),
        Y("main", Xa, [
          Y("aside", Za, [
            Y("div", eu, [
              Y("div", tu, [
                Y("input", {
                  type: "text",
                  placeholder: ee(h).isIndexing ? "后台加载中..." : "搜索全局内容...",
                  class: "search-input",
                  value: ee(h).searchQuery,
                  onInput: es,
                  disabled: ee(h).isBatchMode
                }, null, 40, nu),
                ee(h).isIndexing ? (he(), de("span", su, "⌛")) : He("", !0)
              ])
            ]),
            ee(h).isBatchMode ? (he(), de("div", iu, [
              Y("input", {
                type: "checkbox",
                id: "selectAllBox",
                class: "batch-checkbox",
                checked: ee(h).isAllSelected,
                onChange: d[1] || (d[1] = //@ts-ignore
                (...v) => ee(h).toggleSelectAll && ee(h).toggleSelectAll(...v))
              }, null, 40, ru),
              Y("label", ou, "全选 " + be(ee(h).searchQuery ? "搜索结果" : "所有会话"), 1)
            ])) : He("", !0),
            Ie(Va)
          ]),
          Y("section", lu, [
            Y("div", cu, [
              Y("h3", null, be(ee(h).isBatchMode ? "批量操作" : "消息预览"), 1),
              !ee(h).isBatchMode && ee(h).currentChatId ? (he(), de("div", au, [
                Y("button", {
                  class: "action-btn jump-chat-btn",
                  onClick: qt
                }, "🚀 进入"),
                Y("button", {
                  class: "action-btn delete-btn-sm",
                  onClick: g
                }, "🗑️"),
                Y("div", {
                  class: "export-dropdown",
                  ref_key: "exportWrapperRef",
                  ref: q
                }, [
                  Y("button", {
                    class: "action-btn",
                    onPointerdown: gt(te, ["prevent", "stop"])
                  }, "📤 导出 ▾", 32),
                  Ie(xc, { name: "fade-slide" }, {
                    default: Cr(() => [
                      F.value ? (he(), de("div", {
                        key: 0,
                        class: "dropdown-menu",
                        style: bt(Q.value)
                      }, [
                        Y("div", {
                          class: "dropdown-item",
                          onPointerdown: d[2] || (d[2] = gt((v) => C("md"), ["prevent", "stop"]))
                        }, "📄 Markdown", 32),
                        Y("div", {
                          class: "dropdown-item",
                          onPointerdown: d[3] || (d[3] = gt((v) => C("txt"), ["prevent", "stop"]))
                        }, "📝 TXT 纯文本", 32),
                        Y("div", {
                          class: "dropdown-item",
                          onPointerdown: d[4] || (d[4] = gt((v) => C("jsonl"), ["prevent", "stop"]))
                        }, "📦 官方 JSONL", 32)
                      ], 4)) : He("", !0)
                    ]),
                    _: 1
                  })
                ], 512)
              ])) : He("", !0)
            ]),
            ee(h).isBatchMode ? (he(), de("div", uu, [
              Y("div", fu, [
                Y("h3", null, "已选 " + be(ee(h).selectedChatIds.length) + " 个会话", 1),
                ee(h).selectedChatIds.length === 0 ? (he(), de("p", hu, "请在左侧勾选")) : He("", !0)
              ]),
              ee(h).selectedChatIds.length > 0 ? (he(), de("div", du, [
                Y("button", {
                  class: "big-btn md-btn",
                  onClick: d[5] || (d[5] = (v) => w("md")),
                  disabled: R.value
                }, be(R.value ? "处理中..." : "📥 导出为 Markdown"), 9, pu),
                Y("button", {
                  class: "big-btn txt-btn",
                  onClick: d[6] || (d[6] = (v) => w("txt")),
                  disabled: R.value
                }, be(R.value ? "处理中..." : "📥 导出为 TXT"), 9, gu),
                Y("button", {
                  class: "big-btn json-btn",
                  onClick: d[7] || (d[7] = (v) => w("json")),
                  disabled: R.value
                }, be(R.value ? "处理中..." : "📦 导出为 JSON"), 9, mu),
                d[11] || (d[11] = Y("div", { class: "divider" }, null, -1)),
                Y("button", {
                  class: "big-btn delete-btn",
                  onClick: _,
                  disabled: R.value
                }, be(R.value ? "删除中..." : "🗑️ 永久删除记录"), 9, vu)
              ])) : He("", !0)
            ])) : (he(), de("div", {
              key: 1,
              class: "message-container",
              ref_key: "scrollContainer",
              ref: oe,
              onScroll: Fe,
              onClick: d[8] || (d[8] = (v) => F.value = !1)
            }, [
              ee(h).currentChatId ? ee(h).loadingMessages ? (he(), de("div", _u, " ⏳ 加载庞大消息记录中，请稍候... ")) : (he(), de("div", {
                key: 2,
                class: "messages",
                style: bt({ height: le.value + "px" })
              }, [
                (he(!0), de(Re, null, kr(kt.value, (v) => (he(), de("div", {
                  key: v._globalIndex,
                  style: bt({ transform: `translateY(${v._top}px)` }),
                  class: "message-bubble-wrapper"
                }, [
                  Y("div", {
                    class: $t(["message-bubble", v.is_user ? "is-user" : "is-bot"])
                  }, [
                    Y("button", {
                      class: "msg-jump-btn",
                      onClick: gt((y) => u(v, v._globalIndex), ["stop"]),
                      title: "跳转到原文"
                    }, "🎯", 8, bu),
                    Y("strong", null, be(v.name || (v.is_user ? "You" : "Bot")) + ":", 1),
                    Y("p", {
                      class: "preview-text",
                      innerHTML: v._html
                    }, null, 8, xu)
                  ], 2)
                ], 4))), 128))
              ], 4)) : (he(), de("div", yu, "👈 请在左侧选择角色或搜索内容"))
            ], 544))
          ])
        ])
      ], 2)
    ], 32)) : He("", !0);
  }
});
const wu = /* @__PURE__ */ vo(Su, [["__scopeId", "data-v-99a755df"]]), yo = "chat-log-manager-float-pos";
function Cu() {
  try {
    const e = localStorage.getItem(yo);
    if (e) {
      const t = JSON.parse(e), n = window.innerWidth - 50, s = window.innerHeight - 50;
      return { x: Math.max(0, Math.min(t.x, n)), y: Math.max(0, Math.min(t.y, s)) };
    }
  } catch {
  }
  return null;
}
function Bi(e, t) {
  localStorage.setItem(yo, JSON.stringify({ x: e, y: t }));
}
function Hi() {
  try {
    let e = function() {
      s.classList.remove("idle-transparent"), clearTimeout(a), a = setTimeout(() => {
        s.classList.add("idle-transparent");
      }, 3e3);
    }, t = function(p, h) {
      const b = p - o, S = h - l;
      (Math.abs(b) > 5 || Math.abs(S) > 5) && (r = !0), s.style.left = Math.max(0, Math.min(c + b, window.innerWidth - s.offsetWidth)) + "px", s.style.top = Math.max(0, Math.min(f + S, window.innerHeight - s.offsetHeight)) + "px";
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
      const b = (L) => t(L.clientX, L.clientY), S = () => {
        document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", S), s.style.transition = "all 0.3s ease", r && Bi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("mousemove", b), document.addEventListener("mouseup", S);
    }), s.addEventListener("touchstart", (p) => {
      e();
      const h = p.touches[0];
      o = h.clientX, l = h.clientY;
      const b = s.getBoundingClientRect();
      c = b.left, f = b.top;
      const S = (z) => t(z.touches[0].clientX, z.touches[0].clientY), L = () => {
        document.removeEventListener("touchmove", S), document.removeEventListener("touchend", L), r && Bi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("touchmove", S, { passive: !1 }), document.addEventListener("touchend", L);
    }), s.addEventListener("click", () => {
      r || Eu();
    }), document.body.appendChild(s);
  } catch {
  }
}
function Eu() {
  let e = document.getElementById("chat-log-manager-container");
  if (e)
    e.style.display = "block";
  else {
    e = document.createElement("div"), e.id = "chat-log-manager-container", e.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 99998; backdrop-filter: blur(3px);", document.body.appendChild(e);
    const t = Yc(wu), n = Xc();
    n.use(aa), t.use(n), t.mount(e);
  }
  typeof window.refreshChatLogManager == "function" && window.refreshChatLogManager();
}
window.closeChatLogManager = () => {
  const e = document.getElementById("chat-log-manager-container");
  e && (e.style.display = "none");
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Hi) : Hi();
