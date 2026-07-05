/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const ae = {}, Bt = [], Be = () => {
}, Hi = () => !1, kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), me = Object.assign, $s = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yo = Object.prototype.hasOwnProperty, ie = (e, t) => yo.call(e, t), q = Array.isArray, Ht = (e) => vn(e) === "[object Map]", Wi = (e) => vn(e) === "[object Set]", Gs = (e) => vn(e) === "[object Date]", Q = (e) => typeof e == "function", he = (e) => typeof e == "string", ke = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Vi = (e) => (re(e) || Q(e)) && Q(e.then) && Q(e.catch), Ki = Object.prototype.toString, vn = (e) => Ki.call(e), _o = (e) => vn(e).slice(8, -1), Ui = (e) => vn(e) === "[object Object]", jn = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ Ls(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, bo = /-\w/g, He = zn(
  (e) => e.replace(bo, (t) => t.slice(1).toUpperCase())
), xo = /\B([A-Z])/g, Nt = zn(
  (e) => e.replace(xo, "-$1").toLowerCase()
), Ji = zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zn = zn(
  (e) => e ? `on${Ji(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), es = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, So = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Co = (e) => {
  const t = he(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Qs;
const Bn = () => Qs || (Qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pt(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = he(s) ? Io(s) : Pt(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (he(e) || re(e))
    return e;
}
const wo = /;(?![^(]*\))/g, Eo = /:([^]+)/, To = /\/\*[^]*?\*\//g;
function Io(e) {
  const t = {};
  return e.replace(To, "").split(wo).forEach((n) => {
    if (n) {
      const s = n.split(Eo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ot(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Mo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ao = /* @__PURE__ */ Ls(Mo);
function Yi(e) {
  return !!e || e === "";
}
function Oo(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Fs(e[s], t[s]);
  return n;
}
function Fs(e, t) {
  if (e === t)
    return !0;
  let n = Gs(e), s = Gs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ke(e), s = ke(t), n || s)
    return e === t;
  if (n = q(e), s = q(t), n || s)
    return n && s ? Oo(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Fs(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Gi = (e) => !!(e && e.__v_isRef === !0), ye = (e) => he(e) ? e : e == null ? "" : q(e) || re(e) && (e.toString === Ki || !Q(e.toString)) ? Gi(e) ? ye(e.value) : JSON.stringify(e, Qi, 2) : String(e), Qi = (e, t) => Gi(t) ? Qi(e, t.value) : Ht(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[ts(s, r) + " =>"] = i, n),
    {}
  )
} : Wi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ts(n))
} : ke(t) ? ts(t) : re(t) && !q(t) && !Ui(t) ? String(t) : t, ts = (e, t = "") => {
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
class Xi {
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
function Zi(e) {
  return new Xi(e);
}
function er() {
  return ve;
}
function tr(e, t = !1) {
  ve && ve.cleanups.push(e);
}
let ce;
const ns = /* @__PURE__ */ new WeakSet();
class nr {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ir(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Xs(this), rr(this);
    const t = ce, n = We;
    ce = this, We = !0;
    try {
      return this.fn();
    } finally {
      or(this), ce = t, We = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Rs(t);
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
let sr = 0, tn, nn;
function ir(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = nn, nn = e;
    return;
  }
  e.next = tn, tn = e;
}
function Ps() {
  sr++;
}
function Ns() {
  if (--sr > 0)
    return;
  if (nn) {
    let t = nn;
    for (nn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; tn; ) {
    let t = tn;
    for (tn = void 0; t; ) {
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
function rr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function or(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Rs(s), Lo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === un) || (e.globalVersion = un, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ms(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ce, s = We;
  ce = e, We = !0;
  try {
    rr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ye(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ce = n, We = s, or(e), e.flags &= -3;
  }
}
function Rs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Rs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Lo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let We = !0;
const cr = [];
function Qe() {
  cr.push(We), We = !1;
}
function Xe() {
  const e = cr.pop();
  We = e === void 0 ? !0 : e;
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
let un = 0;
class $o {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ks {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ce || !We || ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ce)
      n = this.activeLink = new $o(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, ar(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ce.depsTail, n.nextDep = void 0, ce.depsTail.nextDep = n, ce.depsTail = n, ce.deps === n && (ce.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, un++, this.notify(t);
  }
  notify(t) {
    Ps();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ns();
    }
  }
}
function ar(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ar(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Tn = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), fn = /* @__PURE__ */ Symbol(
  ""
);
function xe(e, t, n) {
  if (We && ce) {
    let s = Tn.get(e);
    s || Tn.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new ks()), i.map = s, i.key = n), i.track();
  }
}
function lt(e, t, n, s, i, r) {
  const o = Tn.get(e);
  if (!o) {
    un++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ps(), t === "clear")
    o.forEach(l);
  else {
    const c = q(e), f = c && jn(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((p, h) => {
        (h === "length" || h === fn || !ke(h) && h >= a) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(fn)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Lt)), Ht(e) && l(o.get(vs)));
          break;
        case "delete":
          c || (l(o.get(Lt)), Ht(e) && l(o.get(vs)));
          break;
        case "set":
          Ht(e) && l(o.get(Lt));
          break;
      }
  }
  Ns();
}
function Fo(e, t) {
  const n = Tn.get(e);
  return n && n.get(t);
}
function kt(e) {
  const t = /* @__PURE__ */ ne(e);
  return t === e ? t : (xe(t, "iterate", fn), /* @__PURE__ */ Fe(e) ? t : t.map(Ve));
}
function Hn(e) {
  return xe(e = /* @__PURE__ */ ne(e), "iterate", fn), e;
}
function Je(e, t) {
  return /* @__PURE__ */ at(e) ? Vt(/* @__PURE__ */ ct(e) ? Ve(t) : t) : Ve(t);
}
const Po = {
  __proto__: null,
  [Symbol.iterator]() {
    return ss(this, Symbol.iterator, (e) => Je(this, e));
  },
  concat(...e) {
    return kt(this).concat(
      ...e.map((t) => q(t) ? kt(t) : t)
    );
  },
  entries() {
    return ss(this, "entries", (e) => (e[1] = Je(this, e[1]), e));
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
      (n) => n.map((s) => Je(this, s)),
      arguments
    );
  },
  find(e, t) {
    return st(
      this,
      "find",
      e,
      t,
      (n) => Je(this, n),
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
      (n) => Je(this, n),
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
    return is(this, "includes", e);
  },
  indexOf(...e) {
    return is(this, "indexOf", e);
  },
  join(e) {
    return kt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return is(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Jt(this, "pop");
  },
  push(...e) {
    return Jt(this, "push", e);
  },
  reduce(e, ...t) {
    return Zs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zs(this, "reduceRight", e, t);
  },
  shift() {
    return Jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Jt(this, "splice", e);
  },
  toReversed() {
    return kt(this).toReversed();
  },
  toSorted(e) {
    return kt(this).toSorted(e);
  },
  toSpliced(...e) {
    return kt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Jt(this, "unshift", e);
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
const No = Array.prototype;
function st(e, t, n, s, i, r) {
  const o = Hn(e), l = o !== e && !/* @__PURE__ */ Fe(e), c = o[t];
  if (c !== No[t]) {
    const p = c.apply(e, r);
    return l ? Ve(p) : p;
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
  xe(s, "iterate", fn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Vn(n[0]) ? (n[0] = /* @__PURE__ */ ne(n[0]), s[t](...n)) : i;
}
function Jt(e, t, n = []) {
  Qe(), Ps();
  const s = (/* @__PURE__ */ ne(e))[t].apply(e, n);
  return Ns(), Xe(), s;
}
const Ro = /* @__PURE__ */ Ls("__proto__,__v_isRef,__isVue"), ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ke)
);
function ko(e) {
  ke(e) || (e = String(e));
  const t = /* @__PURE__ */ ne(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
}
class fr {
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
      return s === (i ? r ? Jo : gr : r ? pr : dr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = q(t);
    if (!i) {
      let c;
      if (o && (c = Po[n]))
        return c;
      if (n === "hasOwnProperty")
        return ko;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : s
    );
    if ((ke(n) ? ur.has(n) : Ro(n)) || (i || xe(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const c = o && jn(n) ? l : l.value;
      return i && re(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return re(l) ? i ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ Wn(l) : l;
  }
}
class hr extends fr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = q(t) && jn(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ at(r);
      if (!/* @__PURE__ */ Fe(s) && !/* @__PURE__ */ at(s) && (r = /* @__PURE__ */ ne(r), s = /* @__PURE__ */ ne(s)), !o && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(s))
        return f || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ pe(t) ? t : i
    );
    return t === /* @__PURE__ */ ne(i) && c && (l ? Ye(s, r) && lt(t, "set", n, s) : lt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && lt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ke(n) || !ur.has(n)) && xe(t, "has", n), s;
  }
  ownKeys(t) {
    return xe(
      t,
      "iterate",
      q(t) ? "length" : Lt
    ), Reflect.ownKeys(t);
  }
}
class Do extends fr {
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
const jo = /* @__PURE__ */ new hr(), zo = /* @__PURE__ */ new Do(), Bo = /* @__PURE__ */ new hr(!0);
const ys = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function Ho(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ ne(i), o = Ht(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = i[e](...s), a = n ? ys : t ? Vt : Ve;
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
function xn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wo(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(i);
      e || (Ye(i, l) && xe(o, "get", i), xe(o, "get", l));
      const { has: c } = bn(o), f = t ? ys : e ? Vt : Ve;
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
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ne(l), f = t ? ys : e ? Vt : Ve;
      return !e && xe(c, "iterate", Lt), l.forEach((a, p) => i.call(r, f(a), f(p), o));
    }
  };
  return me(
    n,
    e ? {
      add: xn("add"),
      set: xn("set"),
      delete: xn("delete"),
      clear: xn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ne(this), o = bn(r), l = /* @__PURE__ */ ne(i), c = !t && !/* @__PURE__ */ Fe(i) && !/* @__PURE__ */ at(i) ? l : i;
        return o.has.call(r, c) || Ye(i, c) && o.has.call(r, i) || Ye(l, c) && o.has.call(r, l) || (r.add(c), lt(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Fe(r) && !/* @__PURE__ */ at(r) && (r = /* @__PURE__ */ ne(r));
        const o = /* @__PURE__ */ ne(this), { has: l, get: c } = bn(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ ne(i), f = l.call(o, i));
        const a = c.call(o, i);
        return o.set(i, r), f ? Ye(r, a) && lt(o, "set", i, r) : lt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ne(this), { has: o, get: l } = bn(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ ne(i), c = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return c && lt(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ ne(this), r = i.size !== 0, o = i.clear();
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
    n[i] = Ho(i, e, t);
  }), n;
}
function Ds(e, t) {
  const n = Wo(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ie(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Vo = {
  get: /* @__PURE__ */ Ds(!1, !1)
}, Ko = {
  get: /* @__PURE__ */ Ds(!1, !0)
}, Uo = {
  get: /* @__PURE__ */ Ds(!0, !1)
};
const dr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap();
function qo(e) {
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
  return /* @__PURE__ */ at(e) ? e : js(
    e,
    !1,
    jo,
    Vo,
    dr
  );
}
// @__NO_SIDE_EFFECTS__
function Yo(e) {
  return js(
    e,
    !1,
    Bo,
    Ko,
    pr
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return js(
    e,
    !0,
    zo,
    Uo,
    gr
  );
}
function js(e, t, n, s, i) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = qo(_o(e));
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
function zs(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && qi(e, "__v_skip", !0), e;
}
const Ve = (e) => re(e) ? /* @__PURE__ */ Wn(e) : e, Vt = (e) => re(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return mr(e, !1);
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return mr(e, !0);
}
function mr(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new Go(e, t);
}
class Go {
  constructor(t, n) {
    this.dep = new ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ne(t), this._value = n ? t : Ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Fe(t) || /* @__PURE__ */ at(t);
    t = s ? t : /* @__PURE__ */ ne(t), Ye(t, n) && (this._rawValue = t, this._value = s ? t : Ve(t), this.dep.trigger());
  }
}
function ei(e) {
  e.dep && e.dep.trigger();
}
function Z(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const Qo = {
  get: (e, t, n) => t === "__v_raw" ? e : Z(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function vr(e) {
  return /* @__PURE__ */ ct(e) ? e : new Proxy(e, Qo);
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  const t = q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = el(e, n);
  return t;
}
class Zo {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = ke(n) ? n : String(n), this._raw = /* @__PURE__ */ ne(t);
    let i = !0, r = t;
    if (!q(t) || ke(this._key) || !jn(this._key))
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
    return Fo(this._raw, this._key);
  }
}
function el(e, t, n) {
  return new Zo(e, t, n);
}
class tl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = un - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ce !== this)
      return ir(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return lr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function nl(e, t, n = !1) {
  let s, i;
  return Q(e) ? s = e : (s = e.get, i = e.set), new tl(s, i, n);
}
const Sn = {}, In = /* @__PURE__ */ new WeakMap();
let It;
function sl(e, t = !1, n = It) {
  if (n) {
    let s = In.get(n);
    s || In.set(n, s = []), s.push(e);
  }
}
function il(e, t, n = ae) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, f = (k) => i ? k : /* @__PURE__ */ Fe(k) || i === !1 || i === 0 ? yt(k, 1) : yt(k);
  let a, p, h, b, w = !1, O = !1;
  if (/* @__PURE__ */ pe(e) ? (p = () => e.value, w = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ ct(e) ? (p = () => f(e), w = !0) : q(e) ? (O = !0, w = e.some((k) => /* @__PURE__ */ ct(k) || /* @__PURE__ */ Fe(k)), p = () => e.map((k) => {
    if (/* @__PURE__ */ pe(k))
      return k.value;
    if (/* @__PURE__ */ ct(k))
      return f(k);
    if (Q(k))
      return c ? c(k, 2) : k();
  })) : Q(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (h) {
      Qe();
      try {
        h();
      } finally {
        Xe();
      }
    }
    const k = It;
    It = a;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      It = k;
    }
  } : p = Be, t && i) {
    const k = p, F = i === !0 ? 1 / 0 : i;
    p = () => yt(k(), F);
  }
  const z = er(), H = () => {
    a.stop(), z && z.active && $s(z.effects, a);
  };
  if (r && t) {
    const k = t;
    t = (...F) => {
      const K = k(...F);
      return H(), K;
    };
  }
  let V = O ? new Array(e.length).fill(Sn) : Sn;
  const D = (k) => {
    if (!(!(a.flags & 1) || !a.dirty && !k))
      if (t) {
        const F = a.run();
        if (k || i || w || (O ? F.some((K, G) => Ye(K, V[G])) : Ye(F, V))) {
          h && h();
          const K = It;
          It = a;
          try {
            const G = [
              F,
              // pass undefined as the old value when it's changed for the first time
              V === Sn ? void 0 : O && V[0] === Sn ? [] : V,
              b
            ];
            V = F, c ? c(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            It = K;
          }
        }
      } else
        a.run();
  };
  return l && l(D), a = new nr(p), a.scheduler = o ? () => o(D, !1) : D, b = (k) => sl(k, !1, a), h = a.onStop = () => {
    const k = In.get(a);
    if (k) {
      if (c)
        c(k, 4);
      else
        for (const F of k)
          F();
      In.delete(a);
    }
  }, t ? s ? D(!0) : V = a.run() : o ? o(D.bind(null, !0), !0) : a.run(), H.pause = a.pause.bind(a), H.resume = a.resume.bind(a), H.stop = H, H;
}
function yt(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pe(e))
    yt(e.value, t, n);
  else if (q(e))
    for (let s = 0; s < e.length; s++)
      yt(e[s], t, n);
  else if (Wi(e) || Ht(e))
    e.forEach((s) => {
      yt(s, t, n);
    });
  else if (Ui(e)) {
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
function yn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Kn(i, t, n);
  }
}
function De(e, t, n, s) {
  if (Q(e)) {
    const i = yn(e, t, n, s);
    return i && Vi(i) && i.catch((r) => {
      Kn(r, t, n);
    }), i;
  }
  if (q(e)) {
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
      Qe(), yn(r, null, 10, [
        e,
        c,
        f
      ]), Xe();
      return;
    }
  }
  rl(e, n, i, s, o);
}
function rl(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const we = [];
let Ue = -1;
const Wt = [];
let vt = null, zt = 0;
const yr = /* @__PURE__ */ Promise.resolve();
let Mn = null;
function Mt(e) {
  const t = Mn || yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ol(e) {
  let t = Ue + 1, n = we.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = we[s], r = hn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Bs(e) {
  if (!(e.flags & 1)) {
    const t = hn(e), n = we[we.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hn(n) ? we.push(e) : we.splice(ol(t), 0, e), e.flags |= 1, _r();
  }
}
function _r() {
  Mn || (Mn = yr.then(xr));
}
function ll(e) {
  q(e) ? Wt.push(...e) : vt && e.id === -1 ? vt.splice(zt + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), _r();
}
function ti(e, t, n = Ue + 1) {
  for (; n < we.length; n++) {
    const s = we[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      we.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function br(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, s) => hn(n) - hn(s)
    );
    if (Wt.length = 0, vt) {
      vt.push(...t);
      return;
    }
    for (vt = t, zt = 0; zt < vt.length; zt++) {
      const n = vt[zt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vt = null, zt = 0;
  }
}
const hn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xr(e) {
  const t = Be;
  try {
    for (Ue = 0; Ue < we.length; Ue++) {
      const n = we[Ue];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), yn(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Ue < we.length; Ue++) {
      const n = we[Ue];
      n && (n.flags &= -2);
    }
    Ue = -1, we.length = 0, br(), Mn = null, (we.length || Wt.length) && xr();
  }
}
let Ge = null, Sr = null;
function An(e) {
  const t = Ge;
  return Ge = e, Sr = e && e.type.__scopeId || null, t;
}
function Cr(e, t = Ge, n) {
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
function cl(e, t) {
  if (Te) {
    let n = Te.provides;
    const s = Te.parent && Te.parent.provides;
    s === n && (n = Te.provides = Object.create(s)), n[e] = t;
  }
}
function sn(e, t, n = !1) {
  const s = Js();
  if (s || Ft) {
    let i = Ft ? Ft._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(s && s.proxy) : t;
  }
}
function al() {
  return !!(Js() || Ft);
}
const ul = /* @__PURE__ */ Symbol.for("v-scx"), fl = () => sn(ul);
function $t(e, t, n) {
  return wr(e, t, n);
}
function wr(e, t, n = ae) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = me({}, n), c = t && s || !t && r !== "post";
  let f;
  if (gn) {
    if (r === "sync") {
      const b = fl();
      f = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = Be, b.resume = Be, b.pause = Be, b;
    }
  }
  const a = Te;
  l.call = (b, w, O) => De(b, a, w, O);
  let p = !1;
  r === "post" ? l.scheduler = (b) => {
    Me(b, a && a.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (b, w) => {
    w ? b() : Bs(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), p && (b.flags |= 2, a && (b.id = a.uid, b.i = a));
  };
  const h = il(e, t, l);
  return gn && (f ? f.push(h) : c && h()), h;
}
function hl(e, t, n) {
  const s = this.proxy, i = he(e) ? e.includes(".") ? Er(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Q(t) ? r = t : (r = t.handler, n = t);
  const o = _n(this), l = wr(i, r.bind(s), n);
  return o(), l;
}
function Er(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const dl = /* @__PURE__ */ Symbol("_vte"), Tr = (e) => e.__isTeleport, Ne = /* @__PURE__ */ Symbol("_leaveCb"), qt = /* @__PURE__ */ Symbol("_enterCb");
function pl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Hs(() => {
    e.isMounted = !0;
  }), Nr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Pe = [Function, Array], Ir = {
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
}, Mr = (e) => {
  const t = e.subTree;
  return t.component ? Mr(t.component) : t;
}, gl = {
  name: "BaseTransition",
  props: Ir,
  setup(e, { slots: t }) {
    const n = Js(), s = pl();
    return () => {
      const i = t.default && Lr(t.default(), !0), r = i && i.length ? Ar(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ze() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ ne(e), { mode: l } = o;
      if (s.isLeaving)
        return rs(r);
      const c = ni(r);
      if (!c)
        return rs(r);
      let f = xs(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      c.type !== Ee && dn(c, f);
      let a = n.subTree && ni(n.subTree);
      if (a && a.type !== Ee && !At(a, c) && Mr(n).type !== Ee) {
        let p = xs(
          a,
          o,
          s,
          n
        );
        if (dn(a, p), l === "out-in" && c.type !== Ee)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, a = void 0;
          }, rs(r);
        l === "in-out" && c.type !== Ee ? p.delayLeave = (h, b, w) => {
          const O = Or(
            s,
            a
          );
          O[String(a.key)] = a, h[Ne] = () => {
            b(), h[Ne] = void 0, delete f.delayedLeave, a = void 0;
          }, f.delayedLeave = () => {
            w(), delete f.delayedLeave, a = void 0;
          };
        } : a = void 0;
      } else
        a && (a = void 0);
      return r;
    };
  }
};
function Ar(e) {
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
const ml = gl;
function Or(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function xs(e, t, n, s, i) {
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
    onAfterLeave: w,
    onLeaveCancelled: O,
    onBeforeAppear: z,
    onAppear: H,
    onAfterAppear: V,
    onAppearCancelled: D
  } = t, k = String(e.key), F = Or(n, e), K = (M, W) => {
    M && De(
      M,
      s,
      9,
      W
    );
  }, G = (M, W) => {
    const U = W[1];
    K(M, W), q(M) ? M.every((L) => L.length <= 1) && U() : M.length <= 1 && U();
  }, R = {
    mode: o,
    persisted: l,
    beforeEnter(M) {
      let W = c;
      if (!n.isMounted)
        if (r)
          W = z || c;
        else
          return;
      M[Ne] && M[Ne](
        !0
        /* cancelled */
      );
      const U = F[k];
      U && At(e, U) && U.el[Ne] && U.el[Ne](), K(W, [M]);
    },
    enter(M) {
      if (F[k] === e)
        return;
      let W = f, U = a, L = p;
      if (!n.isMounted)
        if (r)
          W = H || f, U = V || a, L = D || p;
        else
          return;
      let ee = !1;
      M[qt] = (Ae) => {
        ee || (ee = !0, Ae ? K(L, [M]) : K(U, [M]), R.delayedLeave && R.delayedLeave(), M[qt] = void 0);
      };
      const de = M[qt].bind(null, !1);
      W ? G(W, [M, de]) : de();
    },
    leave(M, W) {
      const U = String(e.key);
      if (M[qt] && M[qt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      K(h, [M]);
      let L = !1;
      M[Ne] = (de) => {
        L || (L = !0, W(), de ? K(O, [M]) : K(w, [M]), M[Ne] = void 0, F[U] === e && delete F[U]);
      };
      const ee = M[Ne].bind(null, !1);
      F[U] = e, b ? G(b, [M, ee]) : ee();
    },
    clone(M) {
      const W = xs(
        M,
        t,
        n,
        s,
        i
      );
      return i && i(W), W;
    }
  };
  return R;
}
function rs(e) {
  if (Un(e))
    return e = _t(e), e.children = null, e;
}
function ni(e) {
  if (!Un(e))
    return Tr(e.type) && e.children ? Ar(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function dn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, dn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lr(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Re ? (o.patchFlag & 128 && i++, s = s.concat(
      Lr(o.children, t, l)
    )) : (t || o.type !== Ee) && s.push(l != null ? _t(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function $r(e, t) {
  return Q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => me({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function Fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function si(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const On = /* @__PURE__ */ new WeakMap();
function rn(e, t, n, s, i = !1) {
  if (q(e)) {
    e.forEach(
      (O, z) => rn(
        O,
        t && (q(t) ? t[z] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (on(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && rn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? qs(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, f = t && t.r, a = l.refs === ae ? l.refs = {} : l.refs, p = l.setupState, h = /* @__PURE__ */ ne(p), b = p === ae ? Hi : (O) => si(a, O) ? !1 : ie(h, O), w = (O, z) => !(z && si(a, z));
  if (f != null && f !== c) {
    if (ii(t), he(f))
      a[f] = null, b(f) && (p[f] = null);
    else if (/* @__PURE__ */ pe(f)) {
      const O = t;
      w(f, O.k) && (f.value = null), O.k && (a[O.k] = null);
    }
  }
  if (Q(c)) {
    Qe();
    try {
      yn(c, l, 12, [o, a]);
    } finally {
      Xe();
    }
  } else {
    const O = he(c), z = /* @__PURE__ */ pe(c);
    if (O || z) {
      const H = () => {
        if (e.f) {
          const V = O ? b(c) ? p[c] : a[c] : w() || !e.k ? c.value : a[e.k];
          if (i)
            q(V) && $s(V, r);
          else if (q(V))
            V.includes(r) || V.push(r);
          else if (O)
            a[c] = [r], b(c) && (p[c] = a[c]);
          else {
            const D = [r];
            w(c, e.k) && (c.value = D), e.k && (a[e.k] = D);
          }
        } else
          O ? (a[c] = o, b(c) && (p[c] = o)) : z && (w(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const V = () => {
          H(), On.delete(e);
        };
        V.id = -1, On.set(e, V), Me(V, n);
      } else
        ii(e), H();
    }
  }
}
function ii(e) {
  const t = On.get(e);
  t && (t.flags |= 8, On.delete(e));
}
Bn().requestIdleCallback;
Bn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, Un = (e) => e.type.__isKeepAlive;
function vl(e, t) {
  Pr(e, "a", t);
}
function yl(e, t) {
  Pr(e, "da", t);
}
function Pr(e, t, n = Te) {
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
      Un(i.parent.vnode) && _l(s, t, n, i), i = i.parent;
  }
}
function _l(e, t, n, s) {
  const i = Jn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ws(() => {
    $s(s[t], i);
  }, n);
}
function Jn(e, t, n = Te, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Qe();
      const l = _n(n), c = De(t, n, e, o);
      return l(), Xe(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const ut = (e) => (t, n = Te) => {
  (!gn || e === "sp") && Jn(e, (...s) => t(...s), n);
}, bl = ut("bm"), Hs = ut("m"), xl = ut(
  "bu"
), Sl = ut("u"), Nr = ut(
  "bum"
), Ws = ut("um"), Cl = ut(
  "sp"
), wl = ut("rtg"), El = ut("rtc");
function Tl(e, t = Te) {
  Jn("ec", e, t);
}
const Il = /* @__PURE__ */ Symbol.for("v-ndc");
function Rr(e, t, n, s) {
  let i;
  const r = n && n[s], o = q(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ ct(e);
    let c = !1, f = !1;
    l && (c = !/* @__PURE__ */ Fe(e), f = /* @__PURE__ */ at(e), e = Hn(e)), i = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      i[a] = t(
        c ? f ? Vt(Ve(e[a])) : Ve(e[a]) : e[a],
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
const Ss = (e) => e ? no(e) ? qs(e) : Ss(e.parent) : null, ln = (
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
    $parent: (e) => Ss(e.parent),
    $root: (e) => Ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Bs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mt.bind(e.proxy)),
    $watch: (e) => hl.bind(e)
  })
), os = (e, t) => e !== ae && !e.__isScriptSetup && ie(e, t), Ml = {
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
        if (i !== ae && ie(i, t))
          return o[t] = 2, i[t];
        if (ie(r, t))
          return o[t] = 3, r[t];
        if (n !== ae && ie(n, t))
          return o[t] = 4, n[t];
        Cs && (o[t] = 0);
      }
    }
    const f = ln[t];
    let a, p;
    if (f)
      return t === "$attrs" && xe(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== ae && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, ie(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return os(i, t) ? (i[t] = n, !0) : s !== ae && ie(s, t) ? (s[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ae && l[0] !== "$" && ie(e, l) || os(t, l) || ie(r, l) || ie(s, l) || ie(ln, l) || ie(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ri(e) {
  return q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Cs = !0;
function Al(e) {
  const t = Vs(e), n = e.proxy, s = e.ctx;
  Cs = !1, t.beforeCreate && oi(t.beforeCreate, e, "bc");
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
    updated: w,
    activated: O,
    deactivated: z,
    beforeDestroy: H,
    beforeUnmount: V,
    destroyed: D,
    unmounted: k,
    render: F,
    renderTracked: K,
    renderTriggered: G,
    errorCaptured: R,
    serverPrefetch: M,
    // public API
    expose: W,
    inheritAttrs: U,
    // assets
    components: L,
    directives: ee,
    filters: de
  } = t;
  if (f && Ol(f, s, null), o)
    for (const X in o) {
      const oe = o[X];
      Q(oe) && (s[X] = oe.bind(n));
    }
  if (i) {
    const X = i.call(n, n);
    re(X) && (e.data = /* @__PURE__ */ Wn(X));
  }
  if (Cs = !0, r)
    for (const X in r) {
      const oe = r[X], Ze = Q(oe) ? oe.bind(n, n) : Q(oe.get) ? oe.get.bind(n, n) : Be, ft = !Q(oe) && Q(oe.set) ? oe.set.bind(n) : Be, et = Le({
        get: Ze,
        set: ft
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (be) => et.value = be
      });
    }
  if (l)
    for (const X in l)
      kr(l[X], s, n, X);
  if (c) {
    const X = Q(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((oe) => {
      cl(oe, X[oe]);
    });
  }
  a && oi(a, e, "c");
  function le(X, oe) {
    q(oe) ? oe.forEach((Ze) => X(Ze.bind(n))) : oe && X(oe.bind(n));
  }
  if (le(bl, p), le(Hs, h), le(xl, b), le(Sl, w), le(vl, O), le(yl, z), le(Tl, R), le(El, K), le(wl, G), le(Nr, V), le(Ws, k), le(Cl, M), q(W))
    if (W.length) {
      const X = e.exposed || (e.exposed = {});
      W.forEach((oe) => {
        Object.defineProperty(X, oe, {
          get: () => n[oe],
          set: (Ze) => n[oe] = Ze,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  F && e.render === Be && (e.render = F), U != null && (e.inheritAttrs = U), L && (e.components = L), ee && (e.directives = ee), M && Fr(e);
}
function Ol(e, t, n = Be) {
  q(e) && (e = ws(e));
  for (const s in e) {
    const i = e[s];
    let r;
    re(i) ? "default" in i ? r = sn(
      i.from || s,
      i.default,
      !0
    ) : r = sn(i.from || s) : r = sn(i), /* @__PURE__ */ pe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function oi(e, t, n) {
  De(
    q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function kr(e, t, n, s) {
  let i = s.includes(".") ? Er(n, s) : () => n[s];
  if (he(e)) {
    const r = t[e];
    Q(r) && $t(i, r);
  } else if (Q(e))
    $t(i, e.bind(n));
  else if (re(e))
    if (q(e))
      e.forEach((r) => kr(r, t, n, s));
    else {
      const r = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(r) && $t(i, r, e);
    }
}
function Vs(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !n && !s ? c = t : (c = {}, i.length && i.forEach(
    (f) => Ln(c, f, o, !0)
  ), Ln(c, t, o)), re(t) && r.set(t, c), c;
}
function Ln(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Ln(e, r, n, !0), i && i.forEach(
    (o) => Ln(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Ll[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ll = {
  data: li,
  props: ci,
  emits: ci,
  // objects
  methods: Qt,
  computed: Qt,
  // lifecycle
  beforeCreate: Ce,
  created: Ce,
  beforeMount: Ce,
  mounted: Ce,
  beforeUpdate: Ce,
  updated: Ce,
  beforeDestroy: Ce,
  beforeUnmount: Ce,
  destroyed: Ce,
  unmounted: Ce,
  activated: Ce,
  deactivated: Ce,
  errorCaptured: Ce,
  serverPrefetch: Ce,
  // assets
  components: Qt,
  directives: Qt,
  // watch
  watch: Fl,
  // provide / inject
  provide: li,
  inject: $l
};
function li(e, t) {
  return t ? e ? function() {
    return me(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $l(e, t) {
  return Qt(ws(e), ws(t));
}
function ws(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qt(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ci(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    ri(e),
    ri(t ?? {})
  ) : t;
}
function Fl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ce(e[s], t[s]);
  return n;
}
function Dr() {
  return {
    app: null,
    config: {
      isNativeTag: Hi,
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
let Pl = 0;
function Nl(e, t) {
  return function(s, i = null) {
    Q(s) || (s = me({}, s)), i != null && !re(i) && (i = null);
    const r = Dr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = r.app = {
      _uid: Pl++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: pc,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && Q(a.install) ? (o.add(a), a.install(f, ...p)) : Q(a) && (o.add(a), a(f, ...p))), f;
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
          return b.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), p && t ? t(b, a) : e(b, a, h), c = !0, f._container = a, a.__vue_app__ = f, qs(b.component);
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
const Rl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${Nt(t)}Modifiers`];
function kl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || ae;
  let i = n;
  const r = t.startsWith("update:"), o = r && Rl(s, t.slice(7));
  o && (o.trim && (i = n.map((a) => he(a) ? a.trim() : a)), o.number && (i = n.map(So)));
  let l, c = s[l = Zn(t)] || // also try camelCase event handler (#2249)
  s[l = Zn(He(t))];
  !c && r && (c = s[l = Zn(Nt(t))]), c && De(
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
const Dl = /* @__PURE__ */ new WeakMap();
function jr(e, t, n = !1) {
  const s = n ? Dl : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Q(e)) {
    const c = (f) => {
      const a = jr(f, t, !0);
      a && (l = !0, me(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (re(e) && s.set(e, null), null) : (q(r) ? r.forEach((c) => o[c] = null) : me(o, r), re(e) && s.set(e, o), o);
}
function qn(e, t) {
  return !e || !kn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Nt(t)) || ie(e, t));
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
    ctx: w,
    inheritAttrs: O
  } = e, z = An(e);
  let H, V;
  try {
    if (n.shapeFlag & 4) {
      const k = i || s, F = k;
      H = qe(
        f.call(
          F,
          k,
          a,
          p,
          b,
          h,
          w
        )
      ), V = l;
    } else {
      const k = t;
      H = qe(
        k.length > 1 ? k(
          p,
          { attrs: l, slots: o, emit: c }
        ) : k(
          p,
          null
        )
      ), V = t.props ? l : jl(l);
    }
  } catch (k) {
    cn.length = 0, Kn(k, e, 1), H = Ie(Ee);
  }
  let D = H;
  if (V && O !== !1) {
    const k = Object.keys(V), { shapeFlag: F } = D;
    k.length && F & 7 && (r && k.some(Dn) && (V = zl(
      V,
      r
    )), D = _t(D, V, !1, !0));
  }
  return n.dirs && (D = _t(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && dn(D, n.transition), H = D, An(z), H;
}
const jl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Dn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Bl(e, t, n) {
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
        if (zr(o, s, h) && !qn(f, h))
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
    if (zr(t, e, r) && !qn(n, r))
      return !0;
  }
  return !1;
}
function zr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && re(s) && re(i) ? !Fs(s, i) : s !== i;
}
function Hl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Br = {}, Hr = () => Object.create(Br), Wr = (e) => Object.getPrototypeOf(e) === Br;
function Wl(e, t, n, s = !1) {
  const i = {}, r = Hr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Yo(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Vl(e, t, n, s) {
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
          if (ie(r, h))
            b !== r[h] && (r[h] = b, f = !0);
          else {
            const w = He(h);
            i[w] = Es(
              c,
              l,
              w,
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
    Vr(e, t, i, r) && (f = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !ie(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Nt(p)) === p || !ie(t, a))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[p] = Es(
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
function Vr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (en(c))
        continue;
      const f = t[c];
      let a;
      i && ie(i, a = He(c)) ? !r || !r.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : qn(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ ne(n), f = l || ae;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      n[p] = Es(
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
function Es(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Q(c)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const a = _n(i);
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
    ] && (s === "" || s === Nt(n)) && (s = !0));
  }
  return s;
}
const Kl = /* @__PURE__ */ new WeakMap();
function Kr(e, t, n = !1) {
  const s = n ? Kl : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!Q(e)) {
    const a = (p) => {
      c = !0;
      const [h, b] = Kr(p, t, !0);
      me(o, h), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return re(e) && s.set(e, Bt), Bt;
  if (q(r))
    for (let a = 0; a < r.length; a++) {
      const p = He(r[a]);
      ui(p) && (o[p] = ae);
    }
  else if (r)
    for (const a in r) {
      const p = He(a);
      if (ui(p)) {
        const h = r[a], b = o[p] = q(h) || Q(h) ? { type: h } : me({}, h), w = b.type;
        let O = !1, z = !0;
        if (q(w))
          for (let H = 0; H < w.length; ++H) {
            const V = w[H], D = Q(V) && V.name;
            if (D === "Boolean") {
              O = !0;
              break;
            } else
              D === "String" && (z = !1);
          }
        else
          O = Q(w) && w.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = O, b[
          1
          /* shouldCastTrue */
        ] = z, (O || ie(b, "default")) && l.push(p);
      }
    }
  const f = [o, l];
  return re(e) && s.set(e, f), f;
}
function ui(e) {
  return e[0] !== "$" && !en(e);
}
const Ks = (e) => e === "_" || e === "_ctx" || e === "$stable", Us = (e) => q(e) ? e.map(qe) : [qe(e)], Ul = (e, t, n) => {
  if (t._n)
    return t;
  const s = Cr((...i) => Us(t(...i)), n);
  return s._c = !1, s;
}, Ur = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Ks(i))
      continue;
    const r = e[i];
    if (Q(r))
      t[i] = Ul(i, r, s);
    else if (r != null) {
      const o = Us(r);
      t[i] = () => o;
    }
  }
}, Jr = (e, t) => {
  const n = Us(t);
  e.slots.default = () => n;
}, qr = (e, t, n) => {
  for (const s in t)
    (n || !Ks(s)) && (e[s] = t[s]);
}, Jl = (e, t, n) => {
  const s = e.slots = Hr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (qr(s, t, n), n && qi(s, "_", i, !0)) : Ur(t, s);
  } else
    t && Jr(e, t);
}, ql = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ae;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : qr(i, t, n) : (r = !t.$stable, Ur(t, i)), o = t;
  } else
    t && (Jr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Ks(l) && o[l] == null && delete i[l];
}, Me = Zl;
function Yl(e) {
  return Gl(e);
}
function Gl(e, t) {
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
    setScopeId: b = Be,
    insertStaticContent: w
  } = e, O = (u, m, y, I = null, E = null, T = null, P = void 0, v = null, g = !!m.dynamicChildren) => {
    if (u === m)
      return;
    u && !At(u, m) && (I = tt(u), be(u, E, T, !0), u = null), m.patchFlag === -2 && (g = !1, m.dynamicChildren = null);
    const { type: d, ref: x, shapeFlag: _ } = m;
    switch (d) {
      case Yn:
        z(u, m, y, I);
        break;
      case Ee:
        H(u, m, y, I);
        break;
      case as:
        u == null && V(m, y, I, P);
        break;
      case Re:
        L(
          u,
          m,
          y,
          I,
          E,
          T,
          P,
          v,
          g
        );
        break;
      default:
        _ & 1 ? F(
          u,
          m,
          y,
          I,
          E,
          T,
          P,
          v,
          g
        ) : _ & 6 ? ee(
          u,
          m,
          y,
          I,
          E,
          T,
          P,
          v,
          g
        ) : (_ & 64 || _ & 128) && d.process(
          u,
          m,
          y,
          I,
          E,
          T,
          P,
          v,
          g,
          nt
        );
    }
    x != null && E ? rn(x, u && u.ref, T, m || u, !m) : x == null && u && u.ref != null && rn(u.ref, null, T, u, !0);
  }, z = (u, m, y, I) => {
    if (u == null)
      s(
        m.el = l(m.children),
        y,
        I
      );
    else {
      const E = m.el = u.el;
      m.children !== u.children && f(E, m.children);
    }
  }, H = (u, m, y, I) => {
    u == null ? s(
      m.el = c(m.children || ""),
      y,
      I
    ) : m.el = u.el;
  }, V = (u, m, y, I) => {
    [u.el, u.anchor] = w(
      u.children,
      m,
      y,
      I,
      u.el,
      u.anchor
    );
  }, D = ({ el: u, anchor: m }, y, I) => {
    let E;
    for (; u && u !== m; )
      E = h(u), s(u, y, I), u = E;
    s(m, y, I);
  }, k = ({ el: u, anchor: m }) => {
    let y;
    for (; u && u !== m; )
      y = h(u), i(u), u = y;
    i(m);
  }, F = (u, m, y, I, E, T, P, v, g) => {
    if (m.type === "svg" ? P = "svg" : m.type === "math" && (P = "mathml"), u == null)
      K(
        m,
        y,
        I,
        E,
        T,
        P,
        v,
        g
      );
    else {
      const d = u.el && u.el._isVueCE ? u.el : null;
      try {
        d && d._beginPatch(), M(
          u,
          m,
          E,
          T,
          P,
          v,
          g
        );
      } finally {
        d && d._endPatch();
      }
    }
  }, K = (u, m, y, I, E, T, P, v) => {
    let g, d;
    const { props: x, shapeFlag: _, transition: C, dirs: S } = u;
    if (g = u.el = o(
      u.type,
      T,
      x && x.is,
      x
    ), _ & 8 ? a(g, u.children) : _ & 16 && R(
      u.children,
      g,
      null,
      I,
      E,
      cs(u, T),
      P,
      v
    ), S && Ct(u, null, I, "created"), G(g, u, u.scopeId, P, I), x) {
      for (const N in x)
        N !== "value" && !en(N) && r(g, N, null, x[N], T, I);
      "value" in x && r(g, "value", null, x.value, T), (d = x.onVnodeBeforeMount) && Ke(d, I, u);
    }
    S && Ct(u, null, I, "beforeMount");
    const A = Ql(E, C);
    A && C.beforeEnter(g), s(g, m, y), ((d = x && x.onVnodeMounted) || A || S) && Me(() => {
      try {
        d && Ke(d, I, u), A && C.enter(g), S && Ct(u, null, I, "mounted");
      } finally {
      }
    }, E);
  }, G = (u, m, y, I, E) => {
    if (y && b(u, y), I)
      for (let T = 0; T < I.length; T++)
        b(u, I[T]);
    if (E) {
      let T = E.subTree;
      if (m === T || Xr(T.type) && (T.ssContent === m || T.ssFallback === m)) {
        const P = E.vnode;
        G(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          E.parent
        );
      }
    }
  }, R = (u, m, y, I, E, T, P, v, g = 0) => {
    for (let d = g; d < u.length; d++) {
      const x = u[d] = v ? ot(u[d]) : qe(u[d]);
      O(
        null,
        x,
        m,
        y,
        I,
        E,
        T,
        P,
        v
      );
    }
  }, M = (u, m, y, I, E, T, P) => {
    const v = m.el = u.el;
    let { patchFlag: g, dynamicChildren: d, dirs: x } = m;
    g |= u.patchFlag & 16;
    const _ = u.props || ae, C = m.props || ae;
    let S;
    if (y && wt(y, !1), (S = C.onVnodeBeforeUpdate) && Ke(S, y, m, u), x && Ct(m, u, y, "beforeUpdate"), y && wt(y, !0), // HMR updated, force full diff
    // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    d && (!u.dynamicChildren || u.dynamicChildren.length !== d.length) && (g = 0, P = !1, d = null), (_.innerHTML && C.innerHTML == null || _.textContent && C.textContent == null) && a(v, ""), d ? W(
      u.dynamicChildren,
      d,
      v,
      y,
      I,
      cs(m, E),
      T
    ) : P || oe(
      u,
      m,
      v,
      null,
      y,
      I,
      cs(m, E),
      T,
      !1
    ), g > 0) {
      if (g & 16)
        U(v, _, C, y, E);
      else if (g & 2 && _.class !== C.class && r(v, "class", null, C.class, E), g & 4 && r(v, "style", _.style, C.style, E), g & 8) {
        const A = m.dynamicProps;
        for (let N = 0; N < A.length; N++) {
          const j = A[N], B = _[j], J = C[j];
          (J !== B || j === "value") && r(v, j, B, J, E, y);
        }
      }
      g & 1 && u.children !== m.children && a(v, m.children);
    } else
      !P && d == null && U(v, _, C, y, E);
    ((S = C.onVnodeUpdated) || x) && Me(() => {
      S && Ke(S, y, m, u), x && Ct(m, u, y, "updated");
    }, I);
  }, W = (u, m, y, I, E, T, P) => {
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
          y
        )
      );
      O(
        g,
        d,
        x,
        null,
        I,
        E,
        T,
        P,
        !0
      );
    }
  }, U = (u, m, y, I, E) => {
    if (m !== y) {
      if (m !== ae)
        for (const T in m)
          !en(T) && !(T in y) && r(
            u,
            T,
            m[T],
            null,
            E,
            I
          );
      for (const T in y) {
        if (en(T))
          continue;
        const P = y[T], v = m[T];
        P !== v && T !== "value" && r(u, T, v, P, E, I);
      }
      "value" in y && r(u, "value", m.value, y.value, E);
    }
  }, L = (u, m, y, I, E, T, P, v, g) => {
    const d = m.el = u ? u.el : l(""), x = m.anchor = u ? u.anchor : l("");
    let { patchFlag: _, dynamicChildren: C, slotScopeIds: S } = m;
    S && (v = v ? v.concat(S) : S), u == null ? (s(d, y, I), s(x, y, I), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      y,
      x,
      E,
      T,
      P,
      v,
      g
    )) : _ > 0 && _ & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === C.length ? (W(
      u.dynamicChildren,
      C,
      y,
      E,
      T,
      P,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || E && m === E.subTree) && Yr(
      u,
      m,
      !0
      /* shallow */
    )) : oe(
      u,
      m,
      y,
      x,
      E,
      T,
      P,
      v,
      g
    );
  }, ee = (u, m, y, I, E, T, P, v, g) => {
    m.slotScopeIds = v, u == null ? m.shapeFlag & 512 ? E.ctx.activate(
      m,
      y,
      I,
      P,
      g
    ) : de(
      m,
      y,
      I,
      E,
      T,
      P,
      g
    ) : Ae(u, m, g);
  }, de = (u, m, y, I, E, T, P) => {
    const v = u.component = lc(
      u,
      I,
      E
    );
    if (Un(u) && (v.ctx.renderer = nt), cc(v, !1, P), v.asyncDep) {
      if (E && E.registerDep(v, le, P), !u.el) {
        const g = v.subTree = Ie(Ee);
        H(null, g, m, y), u.placeholder = g.el;
      }
    } else
      le(
        v,
        u,
        m,
        y,
        E,
        T,
        P
      );
  }, Ae = (u, m, y) => {
    const I = m.component = u.component;
    if (Bl(u, m, y))
      if (I.asyncDep && !I.asyncResolved) {
        X(I, m, y);
        return;
      } else
        I.next = m, I.update();
    else
      m.el = u.el, I.vnode = m;
  }, le = (u, m, y, I, E, T, P) => {
    const v = () => {
      if (u.isMounted) {
        let { next: _, bu: C, u: S, parent: A, vnode: N } = u;
        {
          const te = Gr(u);
          if (te) {
            _ && (_.el = N.el, X(u, _, P)), te.asyncDep.then(() => {
              Me(() => {
                u.isUnmounted || d();
              }, E);
            });
            return;
          }
        }
        let j = _, B;
        wt(u, !1), _ ? (_.el = N.el, X(u, _, P)) : _ = N, C && es(C), (B = _.props && _.props.onVnodeBeforeUpdate) && Ke(B, A, _, N), wt(u, !0);
        const J = ls(u), se = u.subTree;
        u.subTree = J, O(
          se,
          J,
          // parent may have changed if it's in a teleport
          p(se.el),
          // anchor may have changed if it's in a fragment
          tt(se),
          u,
          E,
          T
        ), _.el = J.el, j === null && Hl(u, J.el), S && Me(S, E), (B = _.props && _.props.onVnodeUpdated) && Me(
          () => Ke(B, A, _, N),
          E
        );
      } else {
        let _;
        const { el: C, props: S } = m, { bm: A, m: N, parent: j, root: B, type: J } = u, se = on(m);
        if (wt(u, !1), A && es(A), !se && (_ = S && S.onVnodeBeforeMount) && Ke(_, j, m), wt(u, !0), C && Ut) {
          const te = () => {
            u.subTree = ls(u), Ut(
              C,
              u.subTree,
              u,
              E,
              null
            );
          };
          se && J.__asyncHydrate ? J.__asyncHydrate(
            C,
            u,
            te
          ) : te();
        } else {
          B.ce && B.ce._hasShadowRoot() && B.ce._injectChildStyle(
            J,
            u.parent ? u.parent.type : void 0
          );
          const te = u.subTree = ls(u);
          O(
            null,
            te,
            y,
            I,
            u,
            E,
            T
          ), m.el = te.el;
        }
        if (N && Me(N, E), !se && (_ = S && S.onVnodeMounted)) {
          const te = m;
          Me(
            () => Ke(_, j, te),
            E
          );
        }
        (m.shapeFlag & 256 || j && on(j.vnode) && j.vnode.shapeFlag & 256) && u.a && Me(u.a, E), u.isMounted = !0, m = y = I = null;
      }
    };
    u.scope.on();
    const g = u.effect = new nr(v);
    u.scope.off();
    const d = u.update = g.run.bind(g), x = u.job = g.runIfDirty.bind(g);
    x.i = u, x.id = u.uid, g.scheduler = () => Bs(x), wt(u, !0), d();
  }, X = (u, m, y) => {
    m.component = u;
    const I = u.vnode.props;
    u.vnode = m, u.next = null, Vl(u, m.props, I, y), ql(u, m.children, y), Qe(), ti(u), Xe();
  }, oe = (u, m, y, I, E, T, P, v, g = !1) => {
    const d = u && u.children, x = u ? u.shapeFlag : 0, _ = m.children, { patchFlag: C, shapeFlag: S } = m;
    if (C > 0) {
      if (C & 128) {
        ft(
          d,
          _,
          y,
          I,
          E,
          T,
          P,
          v,
          g
        );
        return;
      } else if (C & 256) {
        Ze(
          d,
          _,
          y,
          I,
          E,
          T,
          P,
          v,
          g
        );
        return;
      }
    }
    S & 8 ? (x & 16 && dt(d, E, T), _ !== d && a(y, _)) : x & 16 ? S & 16 ? ft(
      d,
      _,
      y,
      I,
      E,
      T,
      P,
      v,
      g
    ) : dt(d, E, T, !0) : (x & 8 && a(y, ""), S & 16 && R(
      _,
      y,
      I,
      E,
      T,
      P,
      v,
      g
    ));
  }, Ze = (u, m, y, I, E, T, P, v, g) => {
    u = u || Bt, m = m || Bt;
    const d = u.length, x = m.length, _ = Math.min(d, x);
    let C;
    for (C = 0; C < _; C++) {
      const S = m[C] = g ? ot(m[C]) : qe(m[C]);
      O(
        u[C],
        S,
        y,
        null,
        E,
        T,
        P,
        v,
        g
      );
    }
    d > x ? dt(
      u,
      E,
      T,
      !0,
      !1,
      _
    ) : R(
      m,
      y,
      I,
      E,
      T,
      P,
      v,
      g,
      _
    );
  }, ft = (u, m, y, I, E, T, P, v, g) => {
    let d = 0;
    const x = m.length;
    let _ = u.length - 1, C = x - 1;
    for (; d <= _ && d <= C; ) {
      const S = u[d], A = m[d] = g ? ot(m[d]) : qe(m[d]);
      if (At(S, A))
        O(
          S,
          A,
          y,
          null,
          E,
          T,
          P,
          v,
          g
        );
      else
        break;
      d++;
    }
    for (; d <= _ && d <= C; ) {
      const S = u[_], A = m[C] = g ? ot(m[C]) : qe(m[C]);
      if (At(S, A))
        O(
          S,
          A,
          y,
          null,
          E,
          T,
          P,
          v,
          g
        );
      else
        break;
      _--, C--;
    }
    if (d > _) {
      if (d <= C) {
        const S = C + 1, A = S < x ? m[S].el : I;
        for (; d <= C; )
          O(
            null,
            m[d] = g ? ot(m[d]) : qe(m[d]),
            y,
            A,
            E,
            T,
            P,
            v,
            g
          ), d++;
      }
    } else if (d > C)
      for (; d <= _; )
        be(u[d], E, T, !0), d++;
    else {
      const S = d, A = d, N = /* @__PURE__ */ new Map();
      for (d = A; d <= C; d++) {
        const _e = m[d] = g ? ot(m[d]) : qe(m[d]);
        _e.key != null && N.set(_e.key, d);
      }
      let j, B = 0;
      const J = C - A + 1;
      let se = !1, te = 0;
      const je = new Array(J);
      for (d = 0; d < J; d++)
        je[d] = 0;
      for (d = S; d <= _; d++) {
        const _e = u[d];
        if (B >= J) {
          be(_e, E, T, !0);
          continue;
        }
        let Se;
        if (_e.key != null)
          Se = N.get(_e.key);
        else
          for (j = A; j <= C; j++)
            if (je[j - A] === 0 && At(_e, m[j])) {
              Se = j;
              break;
            }
        Se === void 0 ? be(_e, E, T, !0) : (je[Se - A] = d + 1, Se >= te ? te = Se : se = !0, O(
          _e,
          m[Se],
          y,
          null,
          E,
          T,
          P,
          v,
          g
        ), B++);
      }
      const St = se ? Xl(je) : Bt;
      for (j = St.length - 1, d = J - 1; d >= 0; d--) {
        const _e = A + d, Se = m[_e], Rt = m[_e + 1], Oe = _e + 1 < x ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Rt.el || Qr(Rt)
        ) : I;
        je[d] === 0 ? O(
          null,
          Se,
          y,
          Oe,
          E,
          T,
          P,
          v,
          g
        ) : se && (j < 0 || d !== St[j] ? et(Se, y, Oe, 2) : j--);
      }
    }
  }, et = (u, m, y, I, E = null) => {
    const { el: T, type: P, transition: v, children: g, shapeFlag: d } = u;
    if (d & 6) {
      et(u.component.subTree, m, y, I);
      return;
    }
    if (d & 128) {
      u.suspense.move(m, y, I);
      return;
    }
    if (d & 64) {
      P.move(u, m, y, nt);
      return;
    }
    if (P === Re) {
      s(T, m, y);
      for (let _ = 0; _ < g.length; _++)
        et(g[_], m, y, I);
      s(u.anchor, m, y);
      return;
    }
    if (P === as) {
      D(u, m, y);
      return;
    }
    if (I !== 2 && d & 1 && v)
      if (I === 0)
        v.persisted && !T[Ne] ? s(T, m, y) : (v.beforeEnter(T), s(T, m, y), Me(() => v.enter(T), E));
      else {
        const { leave: _, delayLeave: C, afterLeave: S } = v, A = () => {
          u.ctx.isUnmounted ? i(T) : s(T, m, y);
        }, N = () => {
          const j = T._isLeaving || !!T[Ne];
          T._isLeaving && T[Ne](
            !0
            /* cancelled */
          ), v.persisted && !j ? A() : _(T, () => {
            A(), S && S();
          });
        };
        C ? C(T, A, N) : N();
      }
    else
      s(T, m, y);
  }, be = (u, m, y, I = !1, E = !1) => {
    const {
      type: T,
      props: P,
      ref: v,
      children: g,
      dynamicChildren: d,
      shapeFlag: x,
      patchFlag: _,
      dirs: C,
      cacheIndex: S,
      memo: A
    } = u;
    if (_ === -2 && (E = !1), v != null && (Qe(), rn(v, null, y, u, !0), Xe()), S != null && (m.renderCache[S] = void 0), x & 256) {
      m.ctx.deactivate(u);
      return;
    }
    const N = x & 1 && C, j = !on(u);
    let B;
    if (j && (B = P && P.onVnodeBeforeUnmount) && Ke(B, m, u), x & 6)
      bt(u.component, y, I);
    else {
      if (x & 128) {
        u.suspense.unmount(y, I);
        return;
      }
      N && Ct(u, null, m, "beforeUnmount"), x & 64 ? u.type.remove(
        u,
        m,
        y,
        nt,
        I
      ) : d && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !d.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== Re || _ > 0 && _ & 64) ? dt(
        d,
        m,
        y,
        !1,
        !0
      ) : (T === Re && _ & 384 || !E && x & 16) && dt(g, m, y), I && ht(u);
    }
    const J = A != null && S == null;
    (j && (B = P && P.onVnodeUnmounted) || N || J) && Me(() => {
      B && Ke(B, m, u), N && Ct(u, null, m, "unmounted"), J && (u.el = null);
    }, y);
  }, ht = (u) => {
    const { type: m, el: y, anchor: I, transition: E } = u;
    if (m === Re) {
      Xn(y, I);
      return;
    }
    if (m === as) {
      k(u);
      return;
    }
    const T = () => {
      i(y), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (u.shapeFlag & 1 && E && !E.persisted) {
      const { leave: P, delayLeave: v } = E, g = () => P(y, T);
      v ? v(u.el, T, g) : g();
    } else
      T();
  }, Xn = (u, m) => {
    let y;
    for (; u !== m; )
      y = h(u), i(u), u = y;
    i(m);
  }, bt = (u, m, y) => {
    const { bum: I, scope: E, job: T, subTree: P, um: v, m: g, a: d } = u;
    fi(g), fi(d), I && es(I), E.stop(), T && (T.flags |= 8, be(P, u, m, y)), v && Me(v, m), Me(() => {
      u.isUnmounted = !0;
    }, m);
  }, dt = (u, m, y, I = !1, E = !1, T = 0) => {
    for (let P = T; P < u.length; P++)
      be(u[P], m, y, I, E);
  }, tt = (u) => {
    if (u.shapeFlag & 6)
      return tt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const m = h(u.anchor || u.el), y = m && m[dl];
    return y ? h(y) : m;
  };
  let pt = !1;
  const xt = (u, m, y) => {
    let I;
    u == null ? m._vnode && (be(m._vnode, null, null, !0), I = m._vnode.component) : O(
      m._vnode || null,
      u,
      m,
      null,
      null,
      null,
      y
    ), m._vnode = u, pt || (pt = !0, ti(I), br(), pt = !1);
  }, nt = {
    p: O,
    um: be,
    m: et,
    r: ht,
    mt: de,
    mc: R,
    pc: oe,
    pbc: W,
    n: tt,
    o: e
  };
  let Kt, Ut;
  return t && ([Kt, Ut] = t(
    nt
  )), {
    render: xt,
    hydrate: Kt,
    createApp: Nl(xt, Kt)
  };
}
function cs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ql(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (q(s) && q(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ot(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Yr(o, l)), l.type === Yn && (l.patchFlag === -1 && (l = i[r] = ot(l)), l.el = o.el), l.type === Ee && !l.el && (l.el = o.el);
    }
}
function Xl(e) {
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
function Gr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gr(t);
}
function fi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qr(t.subTree) : null;
}
const Xr = (e) => e.__isSuspense;
function Zl(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : ll(e);
}
const Re = /* @__PURE__ */ Symbol.for("v-fgt"), Yn = /* @__PURE__ */ Symbol.for("v-txt"), Ee = /* @__PURE__ */ Symbol.for("v-cmt"), as = /* @__PURE__ */ Symbol.for("v-stc"), cn = [];
let $e = null;
function ue(e = !1) {
  cn.push($e = e ? null : []);
}
function ec() {
  cn.pop(), $e = cn[cn.length - 1] || null;
}
let pn = 1;
function $n(e, t = !1) {
  pn += e, e < 0 && $e && t && ($e.hasOnce = !0);
}
function Zr(e) {
  return e.dynamicChildren = pn > 0 ? $e || Bt : null, ec(), pn > 0 && $e && $e.push(e), e;
}
function fe(e, t, n, s, i, r) {
  return Zr(
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
function tc(e, t, n, s, i) {
  return Zr(
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
function Fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  return e.type === t.type && e.key === t.key;
}
const eo = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || /* @__PURE__ */ pe(e) || Q(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function Y(e, t = null, n = null, s = 0, i = null, r = e === Re ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && eo(t),
    ref: t && En(t),
    scopeId: Sr,
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
  return l ? (Pn(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= he(n) ? 8 : 16), pn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && $e.push(c), c;
}
const Ie = nc;
function nc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Il) && (e = Ee), Fn(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pn(l, n), pn > 0 && !r && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (hc(e) && (e = e.__vccOpts), t) {
    t = sc(t);
    let { class: l, style: c } = t;
    l && !he(l) && (t.class = Ot(l)), re(c) && (/* @__PURE__ */ Vn(c) && !q(c) && (c = me({}, c)), t.style = Pt(c));
  }
  const o = he(e) ? 1 : Xr(e) ? 128 : Tr(e) ? 64 : re(e) ? 4 : Q(e) ? 2 : 0;
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
function sc(e) {
  return e ? /* @__PURE__ */ Vn(e) || Wr(e) ? me({}, e) : e : null;
}
function _t(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, f = t ? ic(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && eo(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? q(r) ? r.concat(En(t)) : [r, En(t)] : En(t)
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
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && dn(
    a,
    c.clone(a)
  ), a;
}
function to(e = " ", t = 0) {
  return Ie(Yn, null, e, t);
}
function ze(e = "", t = !1) {
  return t ? (ue(), tc(Ee, null, e)) : Ie(Ee, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? Ie(Ee) : q(e) ? Ie(
    Re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Fn(e) ? ot(e) : Ie(Yn, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function Pn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Pn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Wr(t) ? t._ctx = Ge : i === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (s & 65) {
      Pn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [to(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function ic(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ot([t.class, s.class]));
      else if (i === "style")
        t.style = Pt([t.style, s.style]);
      else if (kn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(q(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
const rc = Dr();
let oc = 0;
function lc(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || rc, r = {
    uid: oc++,
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
    scope: new Xi(
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
    propsOptions: Kr(s, i),
    emitsOptions: jr(s, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = kl.bind(null, r), e.ce && e.ce(r), r;
}
let Te = null;
const Js = () => Te || Ge;
let Nn, Ts;
{
  const e = Bn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Nn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Te = n
  ), Ts = t(
    "__VUE_SSR_SETTERS__",
    (n) => gn = n
  );
}
const _n = (e) => {
  const t = Te;
  return Nn(e), e.scope.on(), () => {
    e.scope.off(), Nn(t);
  };
}, hi = () => {
  Te && Te.scope.off(), Nn(null);
};
function no(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function cc(e, t = !1, n = !1) {
  t && Ts(t);
  const { props: s, children: i } = e.vnode, r = no(e);
  Wl(e, s, r, t), Jl(e, i, n || t);
  const o = r ? ac(e, t) : void 0;
  return t && Ts(!1), o;
}
function ac(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ml);
  const { setup: s } = n;
  if (s) {
    Qe();
    const i = e.setupContext = s.length > 1 ? fc(e) : null, r = _n(e), o = yn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Vi(o);
    if (Xe(), r(), (l || e.sp) && !on(e) && Fr(e), l) {
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
    so(e, t);
}
function di(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = vr(t)), so(e, n);
}
let pi;
function so(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && pi && !s.render) {
      const i = s.template || Vs(e).template;
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
    e.render = s.render || Be;
  }
  {
    const i = _n(e);
    Qe();
    try {
      Al(e);
    } finally {
      Xe(), i();
    }
  }
}
const uc = {
  get(e, t) {
    return xe(e, "get", ""), e[t];
  }
};
function fc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, uc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vr(zs(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ln)
        return ln[n](e);
    },
    has(t, n) {
      return n in t || n in ln;
    }
  })) : e.proxy;
}
function hc(e) {
  return Q(e) && "__vccOpts" in e;
}
const Le = (e, t) => /* @__PURE__ */ nl(e, t, gn);
function dc(e, t, n) {
  try {
    $n(-1);
    const s = arguments.length;
    return s === 2 ? re(t) && !q(t) ? Fn(t) ? Ie(e, null, [t]) : Ie(e, t) : Ie(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Fn(n) && (n = [n]), Ie(e, t, n));
  } finally {
    $n(1);
  }
}
const pc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Is;
const gi = typeof window < "u" && window.trustedTypes;
if (gi)
  try {
    Is = /* @__PURE__ */ gi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const io = Is ? (e) => Is.createHTML(e) : (e) => e, gc = "http://www.w3.org/2000/svg", mc = "http://www.w3.org/1998/Math/MathML", rt = typeof document < "u" ? document : null, mi = rt && /* @__PURE__ */ rt.createElement("template"), vc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? rt.createElementNS(gc, e) : t === "mathml" ? rt.createElementNS(mc, e) : n ? rt.createElement(e, { is: n }) : rt.createElement(e);
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
      mi.innerHTML = io(
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
}, gt = "transition", Yt = "animation", mn = /* @__PURE__ */ Symbol("_vtc"), ro = {
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
}, yc = /* @__PURE__ */ me(
  {},
  Ir,
  ro
), _c = (e) => (e.displayName = "Transition", e.props = yc, e), bc = /* @__PURE__ */ _c(
  (e, { slots: t }) => dc(ml, xc(e), t)
), Et = (e, t = []) => {
  q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, vi = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function xc(e) {
  const t = {};
  for (const L in e)
    L in ro || (t[L] = e[L]);
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
  } = e, w = Sc(i), O = w && w[0], z = w && w[1], {
    onBeforeEnter: H,
    onEnter: V,
    onEnterCancelled: D,
    onLeave: k,
    onLeaveCancelled: F,
    onBeforeAppear: K = H,
    onAppear: G = V,
    onAppearCancelled: R = D
  } = t, M = (L, ee, de, Ae) => {
    L._enterCancelled = Ae, Tt(L, ee ? a : l), Tt(L, ee ? f : o), de && de();
  }, W = (L, ee) => {
    L._isLeaving = !1, Tt(L, p), Tt(L, b), Tt(L, h), ee && ee();
  }, U = (L) => (ee, de) => {
    const Ae = L ? G : V, le = () => M(ee, L, de);
    Et(Ae, [ee, le]), yi(() => {
      Tt(ee, L ? c : r), it(ee, L ? a : l), vi(Ae) || _i(ee, s, O, le);
    });
  };
  return me(t, {
    onBeforeEnter(L) {
      Et(H, [L]), it(L, r), it(L, o);
    },
    onBeforeAppear(L) {
      Et(K, [L]), it(L, c), it(L, f);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(L, ee) {
      L._isLeaving = !0;
      const de = () => W(L, ee);
      it(L, p), L._enterCancelled ? (it(L, h), Si(L)) : (Si(L), it(L, h)), yi(() => {
        L._isLeaving && (Tt(L, p), it(L, b), vi(k) || _i(L, s, z, de));
      }), Et(k, [L, de]);
    },
    onEnterCancelled(L) {
      M(L, !1, void 0, !0), Et(D, [L]);
    },
    onAppearCancelled(L) {
      M(L, !0, void 0, !0), Et(R, [L]);
    },
    onLeaveCancelled(L) {
      W(L), Et(F, [L]);
    }
  });
}
function Sc(e) {
  if (e == null)
    return null;
  if (re(e))
    return [us(e.enter), us(e.leave)];
  {
    const t = us(e);
    return [t, t];
  }
}
function us(e) {
  return Co(e);
}
function it(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[mn] || (e[mn] = /* @__PURE__ */ new Set())).add(t);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[mn];
  n && (n.delete(t), n.size || (e[mn] = void 0));
}
function yi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Cc = 0;
function _i(e, t, n, s) {
  const i = e._endId = ++Cc, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = wc(e, t);
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
function wc(e, t) {
  const n = window.getComputedStyle(e), s = (w) => (n[w] || "").split(", "), i = s(`${gt}Delay`), r = s(`${gt}Duration`), o = bi(i, r), l = s(`${Yt}Delay`), c = s(`${Yt}Duration`), f = bi(l, c);
  let a = null, p = 0, h = 0;
  t === gt ? o > 0 && (a = gt, p = o, h = r.length) : t === Yt ? f > 0 && (a = Yt, p = f, h = c.length) : (p = Math.max(o, f), a = p > 0 ? o > f ? gt : Yt : null, h = a ? a === gt ? r.length : c.length : 0);
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
function Ec(e, t, n) {
  const s = e[mn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ci = /* @__PURE__ */ Symbol("_vod"), Tc = /* @__PURE__ */ Symbol("_vsh"), Ic = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Ac(e, t, n) {
  const s = e.style, i = he(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (he(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Xt(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Xt(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? Lc(
        e,
        o,
        !he(t) && t ? t[o] : void 0,
        l
      ) || Xt(s, o, l) : Xt(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Ic];
      o && (n += ";" + o), s.cssText = n, r = Mc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ci in e && (e[Ci] = r ? s.display : "", e[Tc] && (s.display = "none"));
}
const wi = /\s*!important$/;
function Xt(e, t, n) {
  if (q(n))
    n.forEach((s) => Xt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Oc(e, t);
    wi.test(n) ? e.setProperty(
      Nt(s),
      n.replace(wi, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ei = ["Webkit", "Moz", "ms"], fs = {};
function Oc(e, t) {
  const n = fs[t];
  if (n)
    return n;
  let s = He(t);
  if (s !== "filter" && s in e)
    return fs[t] = s;
  s = Ji(s);
  for (let i = 0; i < Ei.length; i++) {
    const r = Ei[i] + s;
    if (r in e)
      return fs[t] = r;
  }
  return t;
}
function Lc(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && he(s) && n === s;
}
const Ti = "http://www.w3.org/1999/xlink";
function Ii(e, t, n, s, i, r = Ao(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ti, t.slice(6, t.length)) : e.setAttributeNS(Ti, t, n) : n == null || r && !Yi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ke(n) ? String(n) : n
  );
}
function Mi(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? io(n) : n);
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
    l === "boolean" ? n = Yi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function $c(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Fc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ai = /* @__PURE__ */ Symbol("_vei");
function Pc(e, t, n, s, i = null) {
  const r = e[Ai] || (e[Ai] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = kc(t);
    if (s) {
      const f = r[t] = zc(
        s,
        i
      );
      $c(e, l, f, c);
    } else
      o && (Fc(e, l, o, c), r[t] = void 0);
  }
}
const Nc = /(Once|Passive|Capture)$/, Rc = /^on:?(?:Once|Passive|Capture)$/;
function kc(e) {
  let t, n;
  for (; (n = e.match(Nc)) && !Rc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Nt(e.slice(2)), t];
}
let hs = 0;
const Dc = /* @__PURE__ */ Promise.resolve(), jc = () => hs || (Dc.then(() => hs = 0), hs = Date.now());
function zc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (q(i)) {
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
  return n.value = e, n.attached = jc(), n;
}
const Oi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bc = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Ec(e, s, o) : t === "style" ? Ac(e, n, s) : kn(t) ? Dn(t) || Pc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hc(e, t, s, o)) ? (Mi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Wc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !he(s))) ? Mi(e, He(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ii(e, t, s, o));
};
function Hc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Oi(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Oi(t) && he(n) ? !1 : t in e;
}
function Wc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = He(t);
  return Array.isArray(n) ? n.some((i) => He(i) === s) : Object.keys(n).some((i) => He(i) === s);
}
const Vc = ["ctrl", "shift", "alt", "meta"], Kc = {
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
  exact: (e, t) => Vc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Zt = (e, t) => {
  if (!e)
    return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Kc[t[o]];
      if (l && l(i, t))
        return;
    }
    return e(i, ...r);
  });
}, Uc = /* @__PURE__ */ me({ patchProp: Bc }, vc);
let Li;
function Jc() {
  return Li || (Li = Yl(Uc));
}
const qc = (...e) => {
  const t = Jc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Gc(s);
    if (!i)
      return;
    const r = t._component;
    !Q(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Yc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function Yc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gc(e) {
  return he(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let oo;
const Gn = (e) => oo = e, lo = (
  /* istanbul ignore next */
  Symbol()
);
function Ms(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var an;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(an || (an = {}));
function Qc() {
  const e = Zi(!0), t = e.run(() => /* @__PURE__ */ ge({}));
  let n = [], s = [];
  const i = zs({
    install(r) {
      Gn(i), i._a = r, r.provide(lo, i), r.config.globalProperties.$pinia = i, s.forEach((o) => n.push(o)), s = [];
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
const co = () => {
};
function $i(e, t, n, s = co) {
  e.add(t);
  const i = () => {
    e.delete(t) && s();
  };
  return !n && er() && tr(i), i;
}
function Dt(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const Xc = (e) => e(), Fi = Symbol(), ds = Symbol();
function As(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], i = e[n];
    Ms(i) && Ms(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ pe(s) && !/* @__PURE__ */ ct(s) ? e[n] = As(i, s) : e[n] = s;
  }
  return e;
}
const Zc = (
  /* istanbul ignore next */
  Symbol()
);
function ea(e) {
  return !Ms(e) || !Object.prototype.hasOwnProperty.call(e, Zc);
}
const { assign: mt } = Object;
function ta(e) {
  return !!(/* @__PURE__ */ pe(e) && e.effect);
}
function na(e, t, n, s) {
  const { state: i, actions: r, getters: o } = t, l = n.state.value[e];
  let c;
  function f() {
    l || (n.state.value[e] = i ? i() : {});
    const a = /* @__PURE__ */ Xo(n.state.value[e]);
    return mt(a, r, Object.keys(o || {}).reduce((p, h) => (p[h] = zs(Le(() => {
      Gn(n);
      const b = n._s.get(e);
      return o[h].call(b, b);
    })), p), {}));
  }
  return c = ao(e, f, t, n, s, !0), c;
}
function ao(e, t, n = {}, s, i, r) {
  let o;
  const l = mt({ actions: {} }, n), c = { deep: !0 };
  let f, a, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), b;
  const w = s.state.value[e];
  !r && !w && (s.state.value[e] = {});
  let O;
  function z(R) {
    let M;
    f = a = !1, typeof R == "function" ? (R(s.state.value[e]), M = {
      type: an.patchFunction,
      storeId: e,
      events: b
    }) : (As(s.state.value[e], R), M = {
      type: an.patchObject,
      payload: R,
      storeId: e,
      events: b
    });
    const W = O = Symbol();
    Mt().then(() => {
      O === W && (f = !0);
    }), a = !0, Dt(p, M, s.state.value[e]);
  }
  const H = r ? function() {
    const { state: M } = n, W = M ? M() : {};
    this.$patch((U) => {
      mt(U, W);
    });
  } : (
    /* istanbul ignore next */
    co
  );
  function V() {
    o.stop(), p.clear(), h.clear(), s._s.delete(e);
  }
  const D = (R, M = "") => {
    if (Fi in R)
      return R[ds] = M, R;
    const W = function() {
      Gn(s);
      const U = Array.from(arguments), L = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set();
      function de(X) {
        L.add(X);
      }
      function Ae(X) {
        ee.add(X);
      }
      Dt(h, {
        args: U,
        name: W[ds],
        store: F,
        after: de,
        onError: Ae
      });
      let le;
      try {
        le = R.apply(this && this.$id === e ? this : F, U);
      } catch (X) {
        throw Dt(ee, X), X;
      }
      return le instanceof Promise ? le.then((X) => (Dt(L, X), X)).catch((X) => (Dt(ee, X), Promise.reject(X))) : (Dt(L, le), le);
    };
    return W[Fi] = !0, W[ds] = M, W;
  }, k = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: $i.bind(null, h),
    $patch: z,
    $reset: H,
    $subscribe(R, M = {}) {
      const W = $i(p, R, M.detached, () => U()), U = o.run(() => $t(() => s.state.value[e], (L) => {
        (M.flush === "sync" ? a : f) && R({
          storeId: e,
          type: an.direct,
          events: b
        }, L);
      }, mt({}, c, M)));
      return W;
    },
    $dispose: V
  }, F = /* @__PURE__ */ Wn(k);
  s._s.set(e, F);
  const G = (s._a && s._a.runWithContext || Xc)(() => s._e.run(() => (o = Zi()).run(() => t({ action: D }))));
  for (const R in G) {
    const M = G[R];
    if (/* @__PURE__ */ pe(M) && !ta(M) || /* @__PURE__ */ ct(M))
      r || (w && ea(M) && (/* @__PURE__ */ pe(M) ? M.value = w[R] : As(M, w[R])), s.state.value[e][R] = M);
    else if (typeof M == "function") {
      const W = D(M, R);
      G[R] = W, l.actions[R] = M;
    }
  }
  return mt(F, G), mt(/* @__PURE__ */ ne(F), G), Object.defineProperty(F, "$state", {
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
  }), w && r && n.hydrate && n.hydrate(F.$state, w), f = !0, a = !0, F;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function sa(e, t, n) {
  let s;
  const i = typeof t == "function";
  s = i ? n : t;
  function r(o, l) {
    const c = al();
    return o = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    o || (c ? sn(lo, null) : null), o && Gn(o), o = oo, o._s.has(e) || (i ? ao(e, t, s, o) : na(e, s, o)), o._s.get(e);
  }
  return r.$id = e, r;
}
function ia(e, t) {
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
function Ys(e, t, n) {
  if (n.length === 0)
    return t;
  const s = n[0];
  return n.length > 1 && (t = Ys(typeof e != "object" || e === null || !Object.prototype.hasOwnProperty.call(e, s) ? Number.isInteger(Number(n[1])) ? [] : {} : e[s], t, Array.prototype.slice.call(n, 1))), Number.isInteger(Number(s)) && Array.isArray(e) ? e.slice()[s] : Object.assign({}, e, { [s]: t });
}
function uo(e, t) {
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
  return Ys(e, uo(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function fo(e, t) {
  return t.map((n) => n.split(".")).map((n) => [n, ia(e, n)]).filter((n) => n[1] !== void 0).reduce((n, s) => Ys(n, s[1], s[0]), {});
}
function ho(e, t) {
  return t.map((n) => n.split(".")).reduce((n, s) => uo(n, s), e);
}
function Pi(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o, beforeHydrate: l, afterHydrate: c }, f, a = !0) {
  try {
    a && (l == null || l(f));
    const p = t.getItem(s);
    if (p) {
      const h = n.deserialize(p), b = r ? fo(h, r) : h, w = o ? ho(b, o) : b;
      e.$patch(w);
    }
    a && (c == null || c(f));
  } catch (p) {
    i && console.error("[pinia-plugin-persistedstate]", p);
  }
}
function Ni(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o }) {
  try {
    const l = r ? fo(e, r) : e, c = o ? ho(l, o) : l, f = n.serialize(c);
    t.setItem(s, f);
  } catch (l) {
    i && console.error("[pinia-plugin-persistedstate]", l);
  }
}
function ra(e, t) {
  return typeof e == "function" ? e(t) : typeof e == "string" ? e : t;
}
function oa(e, t, n) {
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
function la(e = {}) {
  return function(t) {
    oa(t, (n) => {
      const s = ra(n.key, t.store.$id);
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
var ca = la();
function Cn(e) {
  if (!e)
    return 0;
  if (typeof e == "number")
    return e;
  const t = new Date(e).getTime();
  return isNaN(t) ? 0 : t;
}
async function aa(e) {
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
              const w = h.match(/(\d{4}-\d{2}-\d{2})@(\d{2})h(\d{2})m/);
              w && (b = Cn(`${w[1]}T${w[2]}:${w[3]}:00`));
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
async function Os(e, t, n) {
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
async function ua(e, t, n) {
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
const po = /* @__PURE__ */ sa("chatLogManager", () => {
  const e = /* @__PURE__ */ ge([]), t = /* @__PURE__ */ ge(null), n = /* @__PURE__ */ ge([]), s = /* @__PURE__ */ ge(/* @__PURE__ */ new Set()), i = /* @__PURE__ */ ge(""), r = /* @__PURE__ */ ge([]), o = /* @__PURE__ */ ge(!1), l = /* @__PURE__ */ ge(!1), c = /* @__PURE__ */ ge(!1), f = /* @__PURE__ */ ge([]), a = Le(() => {
    if (i.value.trim())
      return r.value.map((R) => ({
        type: "chat",
        id: R.id,
        charName: R.charName,
        chat: e.value.find((M) => M.id === R.chatId),
        searchHit: { content: R.content }
      }));
    const F = [], K = /* @__PURE__ */ new Map();
    e.value.forEach((R) => {
      const M = R.charName || "未知角色";
      K.has(M) || K.set(M, { avatarUrl: R.avatarUrl, chats: [], folderTime: 0 });
      const W = K.get(M);
      W.chats.push(R), R.lastActive > W.folderTime && (W.folderTime = R.lastActive);
    });
    const G = Array.from(K.entries()).sort((R, M) => M[1].folderTime - R[1].folderTime);
    for (const [R, M] of G)
      F.push({ type: "header", id: `header_${R}`, charName: R, avatarUrl: M.avatarUrl, chatCount: M.chats.length }), s.value.has(R) && [...M.chats].sort((U, L) => L.lastActive - U.lastActive).forEach((U) => {
        F.push({ type: "chat", id: `chat_${U.id}`, charName: R, chat: U });
      });
    return F;
  }), p = Le(() => e.value.length === 0 ? !1 : i.value.trim() && r.value.length > 0 ? r.value.every((F) => f.value.includes(F.chatId)) : f.value.length === e.value.length);
  async function h() {
    if (!o.value) {
      o.value = !0;
      try {
        e.value = [], await aa((F) => {
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
    l.value = !0, ps = [];
    const F = 5, K = e.value;
    for (let G = 0; G < K.length && l.value; G += F) {
      const R = K.slice(G, G + F);
      await Promise.all(R.map(async (M) => {
        const W = await Os(M.charName, M.avatarUrl, M.id);
        if (M.msgCount === 0 && W.length > 0 && (M.msgCount = W.length), W.length > 0) {
          const U = W[W.length - 1], L = U.send_date || U.date || U.time;
          if (L) {
            const ee = typeof L == "number" ? L : new Date(L).getTime();
            !isNaN(ee) && ee > 0 && (M.lastActive = ee);
          }
        }
        ps.push(...W.map((U, L) => ({
          id: `${M.id}_${L}`,
          chatId: M.id,
          charName: M.charName,
          content: U.mes || ""
        })));
      })), await new Promise((M) => setTimeout(M, 10));
    }
    l.value = !1;
  }
  function w() {
    l.value = !1;
  }
  function O(F) {
    i.value = F;
    const K = F.trim().toLowerCase();
    r.value = K ? ps.filter((G) => G.content.toLowerCase().includes(K)) : [];
  }
  async function z(F) {
    t.value = F.id, n.value = await Os(F.charName, F.avatarUrl, F.id);
  }
  function H(F) {
    s.value.has(F) ? s.value.delete(F) : s.value.add(F);
  }
  function V() {
    c.value = !c.value, c.value || (f.value = []);
  }
  function D(F) {
    const K = f.value.indexOf(F);
    K > -1 ? f.value.splice(K, 1) : f.value.push(F);
  }
  function k() {
    if (p.value)
      f.value = [];
    else if (i.value.trim()) {
      const F = r.value.map((K) => K.chatId);
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
    toggleChar: H,
    performSearch: O,
    toggleBatchMode: V,
    toggleSelection: D,
    toggleSelectAll: k,
    stopIndexing: w
    // 暴露中断方法
  };
});
function fa(e, t, n) {
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
function jt(e, t, n) {
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
const ha = (e, t) => Math.abs(e - t) < 1.01, da = (e, t, n) => {
  let s;
  return function(...i) {
    e.clearTimeout(s), s = e.setTimeout(() => t.apply(this, i), n);
  };
};
let Gt;
const gs = () => {
  if (Gt !== void 0)
    return Gt;
  if (typeof navigator > "u")
    return Gt = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent))
    return Gt = !0;
  const e = navigator.maxTouchPoints;
  return Gt = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Di = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, pa = (e) => e, ga = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, i = new Array(s);
  for (let r = 0; r < s; r++)
    i[r] = t + r;
  return i;
}, ma = (e, t) => {
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
}, va = typeof window > "u" ? !0 : "onscrollend" in window, ya = (e, t, n) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const i = e.targetWindow;
  if (!i)
    return;
  const r = e.options.useScrollendEvent && va;
  let o = 0;
  const l = r ? null : da(
    i,
    () => t(o, !1),
    e.options.isScrollingResetDelay
  ), c = (p) => () => {
    o = n(s), l == null || l(), t(o, p);
  }, f = c(!0), a = c(!1);
  return s.addEventListener("scroll", f, Rn), r && s.addEventListener("scrollend", a, Rn), () => {
    s.removeEventListener("scroll", f), r && s.removeEventListener("scrollend", a);
  };
}, _a = (e, t) => ya(e, t, (n) => {
  const { horizontal: s, isRtl: i } = e.options;
  return s ? n.scrollLeft * (i && -1 || 1) : n.scrollTop;
}), ba = (e, t, n) => {
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
}, xa = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var i, r;
  (r = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null || r.call(i, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, Sa = xa;
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
        getItemKey: pa,
        rangeExtractor: ga,
        onChange: () => {
        },
        measureElement: ba,
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
        const h = o.count, b = r.count, w = this.getMeasurements(), O = h > 0 ? ((s = w[0]) == null ? void 0 : s.key) ?? o.getItemKey(0) : null, z = h > 0 ? ((i = w[h - 1]) == null ? void 0 : i.key) ?? o.getItemKey(h - 1) : null;
        if (b !== h || h > 0 && b > 0 && (r.getItemKey(0) !== O || r.getItemKey(b - 1) !== z)) {
          f = !0;
          const D = h > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? w[0] : null;
          D && (l = [D.key, this.getScrollOffset() - D.start]);
          const k = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          k && b > h && this.isAtEnd(o.scrollEndThreshold) && (h === 0 || r.getItemKey(b - 1) !== z) && (c = k);
        }
      }
      this.options = r, f && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, p = 0;
      if (l && this.scrollOffset !== null) {
        const [h, b] = l, w = this.getMeasurements(), { count: O, getItemKey: z } = this.options;
        let H = 0;
        for (; H < O && z(H) !== h; )
          H++;
        if (H < O) {
          const V = w[H];
          if (V) {
            const D = V.start + b;
            D !== this.scrollOffset && (p = D - this.scrollOffset, this.scrollOffset = D, a = !0);
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
    }, this.maybeNotify = jt(
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
    }, this.getMeasurementOptions = jt(
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
    ), this.getMeasurements = jt(
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
          for (const w of this.laneAssignments.keys())
            w >= n && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const p = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), l === 1) {
          const w = this.options.gap, O = n * 2;
          let z = this._flatMeasurements;
          if (!z || z.length < O) {
            const D = new Float64Array(O);
            z && p > 0 && D.set(z.subarray(0, p * 2)), z = D, this._flatMeasurements = z;
          }
          let H;
          if (p === 0)
            H = s + i;
          else {
            const D = p - 1;
            H = z[D * 2] + z[D * 2 + 1] + w;
          }
          for (let D = p; D < n; D++) {
            const k = r(D), F = a.get(k), K = typeof F == "number" ? F : this.options.estimateSize(D);
            z[D * 2] = H, z[D * 2 + 1] = K, H += K + w;
          }
          const V = fa(n, z, r);
          return this.measurementsCache = V, V;
        }
        const h = this.measurementsCache.slice(0, p), b = new Array(l).fill(
          void 0
        );
        for (let w = 0; w < p; w++) {
          const O = h[w];
          O && (b[O.lane] = w);
        }
        for (let w = p; w < n; w++) {
          const O = r(w), z = this.laneAssignments.get(w);
          let H, V;
          const D = c === "estimate" || a.has(O);
          if (z !== void 0 && this.options.lanes > 1) {
            H = z;
            const G = b[H], R = G !== void 0 ? h[G] : void 0;
            V = R ? R.end + this.options.gap : s + i;
          } else {
            const G = this.options.lanes === 1 ? h[w - 1] : this.getFurthestMeasurement(h, w);
            V = G ? G.end + this.options.gap : s + i, H = G ? G.lane : w % this.options.lanes, this.options.lanes > 1 && D && this.laneAssignments.set(w, H);
          }
          const k = a.get(O), F = typeof k == "number" ? k : this.options.estimateSize(w), K = V + F;
          h[w] = {
            index: w,
            start: V,
            size: F,
            end: K,
            key: O,
            lane: H
          }, b[H] = w;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = jt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, s, i, r) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = Ea(
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
    ), this.getVirtualIndexes = jt(
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
        const h = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = h ? this.getTotalSize() : 0, w = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(c, s), this.itemSizeCacheVersion++, h ? this.applyScrollAdjustment(this.getTotalSize() - b) : w && this.applyScrollAdjustment(p), this.notify(!1);
      }
    }, this.getVirtualItems = jt(
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
      const i = this._flatMeasurements, r = this.options.lanes === 1 && i != null, o = go(
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
    if (!o && ha(i, this.getScrollOffset())) {
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
const go = (e, t, n, s) => {
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
function wa(e, t, n) {
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
function Ea(e, t, n, s, i) {
  const r = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: r };
  if (s === 1 && i !== null) {
    const f = wa(
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
  let l = go(0, r, (f) => e[f].start, n), c = l;
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
function Ta(e) {
  const t = new Ca(Z(e)), n = /* @__PURE__ */ bs(t), s = t._didMount();
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
  ), tr(s), n;
}
function Ia(e) {
  return Ta(
    Le(() => ({
      observeElementRect: ma,
      observeElementOffset: _a,
      scrollToFn: Sa,
      ...Z(e)
    }))
  );
}
const Ma = ["data-index"], Aa = ["onClick"], Oa = { class: "char-info" }, La = { class: "folder-icon" }, $a = { class: "char-name" }, Fa = { class: "chat-badge" }, Pa = ["onClick"], Na = ["checked", "onClick"], Ra = { class: "chat-item-content" }, ka = { class: "chat-title" }, Da = {
  key: 0,
  class: "search-tag"
}, ja = {
  key: 0,
  class: "hit-content"
}, za = {
  key: 1,
  class: "chat-meta"
}, Ba = {
  key: 0,
  class: "empty-state"
}, Ha = /* @__PURE__ */ $r({
  __name: "SessionList",
  setup(e) {
    const t = po(), n = /* @__PURE__ */ ge(null), s = Le(() => t.displayRows), i = Le(() => ({
      count: s.value.length,
      getScrollElement: () => n.value,
      estimateSize: () => 60,
      overscan: 10
    })), r = Ia(i), o = Le(() => r.value.getVirtualItems()), l = () => r.value.getTotalSize(), c = (a) => s.value[a], f = (a) => {
      const p = c(a);
      p.type === "chat" && p.chat && (t.isBatchMode ? t.toggleSelection(p.chat.id) : t.loadMessages(p.chat));
    };
    return (a, p) => (ue(), fe("div", {
      ref_key: "containerRef",
      ref: n,
      class: "virtual-list-container"
    }, [
      Y("div", {
        style: Pt({ height: l() + "px", position: "relative", width: "100%" })
      }, [
        (ue(!0), fe(Re, null, Rr(o.value, (h) => {
          var b, w, O, z, H, V;
          return ue(), fe("div", {
            key: h.index,
            class: "virtual-row",
            style: Pt({ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${h.start}px)` }),
            ref_for: !0,
            ref: Z(r).measureElement,
            "data-index": h.index
          }, [
            c(h.index).type === "header" ? (ue(), fe("div", {
              key: 0,
              class: "char-header",
              onClick: (D) => Z(t).toggleChar(c(h.index).charName)
            }, [
              Y("div", Oa, [
                Y("span", La, ye(Z(t).expandedChars.has(c(h.index).charName) ? "📂" : "📁"), 1),
                Y("span", $a, ye(c(h.index).charName), 1)
              ]),
              Y("span", Fa, ye(c(h.index).chatCount), 1)
            ], 8, Aa)) : (ue(), fe("div", {
              key: 1,
              class: Ot(["chat-item", {
                active: !Z(t).isBatchMode && Z(t).currentChatId === ((b = c(h.index).chat) == null ? void 0 : b.id),
                selected: Z(t).isBatchMode && Z(t).selectedChatIds.includes(((w = c(h.index).chat) == null ? void 0 : w.id) || "")
              }]),
              onClick: (D) => f(h.index)
            }, [
              Z(t).isBatchMode ? (ue(), fe("input", {
                key: 0,
                type: "checkbox",
                class: "batch-checkbox",
                checked: Z(t).selectedChatIds.includes(((O = c(h.index).chat) == null ? void 0 : O.id) || ""),
                onClick: Zt((D) => f(h.index), ["stop"])
              }, null, 8, Na)) : ze("", !0),
              Y("div", Ra, [
                Y("div", ka, [
                  Z(t).searchQuery ? (ue(), fe("span", Da, "[" + ye(c(h.index).charName) + "]", 1)) : ze("", !0),
                  to(" " + ye(((z = c(h.index).chat) == null ? void 0 : z.title) || "未命名会话"), 1)
                ]),
                Z(t).searchQuery ? (ue(), fe("div", ja, '"' + ye((H = c(h.index).searchHit) == null ? void 0 : H.content) + '"', 1)) : (ue(), fe("div", za, "消息数: " + ye(((V = c(h.index).chat) == null ? void 0 : V.msgCount) ?? "..."), 1))
              ])
            ], 10, Pa))
          ], 12, Ma);
        }), 128))
      ], 4),
      s.value.length === 0 ? (ue(), fe("div", Ba, "暂无匹配记录")) : ze("", !0)
    ], 512));
  }
});
const mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Wa = /* @__PURE__ */ mo(Ha, [["__scopeId", "data-v-82b53ab7"]]);
function Qn(e, t, n) {
  const s = new Blob([t], { type: n }), i = URL.createObjectURL(s), r = document.createElement("a");
  r.href = i, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
function Va(e, t) {
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
function Ka(e, t) {
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
function Ua(e, t, n) {
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
}, _u = ["onClick"], bu = ["innerHTML"], xu = { class: "action-sheet" }, wn = 72, ji = 12, Su = /* @__PURE__ */ $r({
  __name: "LogOverview",
  setup(e) {
    let t = !0;
    const n = /* @__PURE__ */ ge(!0), s = /* @__PURE__ */ ge(0), i = () => {
      const v = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--clm-vh", `${v}px`);
    }, r = () => setTimeout(i, 300), o = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), l = (v) => (v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), c = (v, g) => {
      if (!v)
        return "";
      const d = v.replace(/<[^>]+>/g, "");
      if (!g)
        return l(d);
      const x = d.toLowerCase(), _ = g.toLowerCase(), C = x.indexOf(_);
      if (C === -1)
        return l(d);
      const S = Math.max(0, C - 15), A = Math.min(d.length, C + g.length + 30);
      let N = d.slice(S, A);
      const j = S > 0 ? "..." : "", B = A < d.length ? "..." : "";
      let J = l(N);
      const se = new RegExp(o(g), "gi");
      return J = J.replace(se, (te) => `<mark class="search-highlight">${te}</mark>`), `${j}${J}${B}`;
    };
    let f = null;
    const a = (v, g) => {
      if (!g)
        return;
      const d = v.querySelector(".mes_text, .message-text, .content") || v, x = document.createTreeWalker(d, NodeFilter.SHOW_TEXT, null), _ = [];
      let C;
      for (; C = x.nextNode(); ) {
        const S = C, A = S.nodeValue || "", N = new RegExp(o(g), "gi");
        if (N.test(A)) {
          const j = document.createElement("span");
          j.innerHTML = l(A).replace(N, (B) => `<mark style="background-color: #ff9800; color: #fff; padding: 0 3px; border-radius: 3px; box-shadow: 0 0 6px rgba(255,152,0,0.8); font-weight: bold;">${B}</mark>`), S.parentNode && _.push({ old: S, new: j, parent: S.parentNode });
        }
      }
      _.forEach((S) => S.parent.replaceChild(S.new, S.old)), f && clearTimeout(f), f = window.setTimeout(() => {
        _.forEach((S) => {
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
        const d = document.querySelector(`.character_select[chid="${g}"], [data-character-id="${g}"], .character-item[data-id="${g}"]`);
        return d ? (d.click(), !0) : !1;
      }
      clickHistoryItem(g) {
        const d = g.replace(/\.jsonl?$/, ""), x = d + ".jsonl", _ = [`[chatfile="${x}"]`, `[chatfile="${d}"]`, `[file_name="${d}"]`, `[data-chat-file="${x}"]`];
        for (const S of _) {
          const A = document.querySelector(S);
          if (A)
            return A.click(), !0;
        }
        const C = document.querySelectorAll('.past_chat_item, .chat-history-item, [class*="history-item"]');
        for (let S = 0; S < C.length; S++)
          if ((C[S].textContent || "").includes(d))
            return C[S].click(), !0;
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
        var N;
        const x = (j) => (j || "").replace(/\s+/g, "").toLowerCase(), _ = x(g), C = d && decodeURIComponent(d).replace(/\\/g, "/").split("/").pop() || "", S = [".character_select", ".character-select", "[data-character-id]", ".ch_card", ".character-item"];
        let A = null;
        for (const j of S) {
          const B = document.querySelectorAll(j);
          if (B.length) {
            A = B;
            break;
          }
        }
        if (!A)
          return { element: null, index: -1 };
        for (const j of A) {
          const B = x(j.textContent || "") + x(j.getAttribute("ch_name") || "") + x(j.getAttribute("name") || ""), J = ((N = j.querySelector("img")) == null ? void 0 : N.getAttribute("src")) || j.getAttribute("avatar") || "", se = J && decodeURIComponent(J).replace(/\\/g, "/").split("/").pop() || "";
          if (B.includes(_) || C && se && (se.includes(C) || C.includes(se))) {
            let te = parseInt(j.getAttribute("chid") || j.getAttribute("data-character-id") || j.getAttribute("data-id") || "-1", 10);
            return { element: j, index: isNaN(te) ? -1 : te };
          }
        }
        return { element: null, index: -1 };
      }
      findMessageElement(g, d, x, _) {
        const C = document.getElementById("chat") || document.body, S = Array.from(C.querySelectorAll(".mes, [mesid]")).filter((B) => !B.closest(".log-manager-modal")), A = g.mesid ?? g.id;
        if (A != null)
          for (let B = S.length - 1; B >= 0; B--) {
            const J = S[B];
            if (J.dataset.mesid === String(A) || J.getAttribute("mesid") === String(A))
              return J;
          }
        if (!x && d >= 0)
          for (let B = S.length - 1; B >= 0; B--) {
            const J = S[B];
            if (parseInt(J.dataset.index || J.getAttribute("mesid") || "-1", 10) === d)
              return J;
          }
        const N = (B) => (B || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        let j = N(g.mes);
        if (j.length > 40 && (j = j.substring(0, 40)), j.length >= 4)
          for (let B = S.length - 1; B >= 0; B--) {
            const J = S[B], se = J.querySelector(".mes_text, .message-text, .content") || J;
            if (N(se.textContent).includes(j))
              return J;
          }
        if (x && _) {
          const B = N(_);
          if (B.length >= 2)
            for (let J = S.length - 1; J >= 0; J--) {
              const se = S[J], te = se.querySelector(".mes_text, .message-text, .content") || se;
              if (N(te.textContent).includes(B))
                return se;
            }
        }
        return null;
      }
      resetCurrentCharacter() {
        this.context.characterId !== void 0 && (this.context.characterId = -1), this.win.this_chid !== void 0 && (this.win.this_chid = -1);
      }
    }
    const h = po(), b = new p(), w = /* @__PURE__ */ bs(null);
    function O() {
      const v = document.documentElement;
      if (v.classList.contains("dark"))
        return !0;
      if (v.classList.contains("light"))
        return !1;
      const d = (getComputedStyle(document.body).backgroundColor || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (d) {
        const x = parseInt(d[1], 10), _ = parseInt(d[2], 10), C = parseInt(d[3], 10);
        return x * 0.299 + _ * 0.587 + C * 0.114 < 128;
      }
      return !0;
    }
    const z = /* @__PURE__ */ ge(O());
    let H = null;
    const V = () => {
      H !== null && cancelAnimationFrame(H), H = requestAnimationFrame(() => {
        if (!w.value)
          return;
        const v = getComputedStyle(document.body);
        let g = v.backgroundColor;
        (!g || g === "rgba(0, 0, 0, 0)" || g === "transparent") && (g = z.value ? "#1e1e1e" : "#f5f5f5");
        let d = v.color;
        const x = document.querySelector(".mes_text, .message-text");
        if (x) {
          const A = getComputedStyle(x).color;
          A && A !== "rgba(0, 0, 0, 0)" && A !== "transparent" && (d = A);
        }
        const _ = (A) => {
          const N = A.match(/\d+/g);
          return N && N.length >= 3 ? parseInt(N[0], 10) * 0.299 + parseInt(N[1], 10) * 0.587 + parseInt(N[2], 10) * 0.114 : 128;
        }, C = _(g), S = _(d);
        50 > Math.abs(C - S) && (d = C < 128 ? "#E8E8E8" : "#33312F"), w.value.style.backgroundColor = g, w.value.style.color = d, w.value.style.setProperty("--dynamic-solid-bg", g);
      });
    };
    let D = null, k = null;
    const F = /* @__PURE__ */ ge(!1), K = /* @__PURE__ */ ge(!1), G = /* @__PURE__ */ ge(!1), R = /* @__PURE__ */ ge(null), M = /* @__PURE__ */ new Set();
    let W = null;
    const U = /* @__PURE__ */ bs(null), L = /* @__PURE__ */ ge(0), ee = Le(() => {
      const v = h.currentMessages || [];
      return Array.isArray(v) ? h.searchQuery ? [...v].sort((g, d) => (d.send_date ?? d.timestamp ?? 0) - (g.send_date ?? g.timestamp ?? 0)) : v : [];
    }), de = Le(() => ee.value.length), Ae = Le(() => de.value * wn), le = Le(() => {
      const v = U.value;
      if (!v)
        return { start: 0, end: Math.min(de.value, 20) };
      const g = Math.floor(L.value / wn), d = Math.ceil((L.value + v.clientHeight) / wn);
      return { start: Math.max(0, g - ji), end: Math.min(de.value, d + ji) };
    }), X = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ ge(""), Ze = Le(() => {
      const v = h.searchQuery;
      v !== oe.value && (X.clear(), oe.value = v);
      const g = le.value.start;
      return ee.value.slice(g, le.value.end).map((d, x) => {
        const _ = g + x, C = String(d.mesid ?? d.id ?? _);
        let S = X.get(C);
        return S || (S = c(d.mes, v), X.set(C, S)), { ...d, _localIndex: x, _globalIndex: _, _top: _ * wn, _html: S };
      });
    });
    let ft = null;
    const et = () => {
      ft !== null && cancelAnimationFrame(ft), ft = requestAnimationFrame(() => {
        U.value && (L.value = U.value.scrollTop);
      });
    };
    $t(() => h.currentChatId, async () => {
      X.clear(), await Mt(), U.value && (U.value.scrollTop = 0, L.value = 0);
    });
    let be = null, ht = null;
    const Xn = (v) => {
      h.$patch({ searchQuery: v.target.value }), be && clearTimeout(be), be = window.setTimeout(() => {
        ht && ht.abort(), ht = new AbortController(), h.performSearch(h.searchQuery);
      }, 300);
    };
    let bt = null;
    const dt = new ResizeObserver(() => {
      bt && clearTimeout(bt), bt = window.setTimeout(() => {
        U.value && (L.value = U.value.scrollTop);
      }, 100);
    });
    Hs(async () => {
      t = !0, i(), window.addEventListener("resize", i), window.addEventListener("orientationchange", r), await Mt(), V(), D = new MutationObserver(() => {
        const g = O();
        g !== z.value && (z.value = g), V();
      }), D.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), D.observe(document.body, { attributes: !0, attributeFilter: ["class", "style"] });
      const v = window.matchMedia("(prefers-color-scheme: dark)");
      k = () => {
        const g = O();
        g !== z.value && (z.value = g), V();
      }, v.addEventListener("change", k), h.fetchChats(), window.refreshChatLogManager ? window.refreshChatLogManager_fallback = () => h.fetchChats() : window.refreshChatLogManager = () => h.fetchChats(), U.value && dt.observe(U.value);
    }), Ws(() => {
      t = !1, window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r), D && D.disconnect(), k && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", k), H !== null && cancelAnimationFrame(H), bt && clearTimeout(bt), f && clearTimeout(f), be && clearTimeout(be), ht && ht.abort(), dt.disconnect(), M.forEach((v) => v.disconnect()), M.clear(), W && clearInterval(W), delete window.refreshChatLogManager, delete window.refreshChatLogManager_fallback;
    });
    const tt = () => {
      typeof window.closeChatLogManager == "function" ? window.closeChatLogManager() : n.value = !1;
    }, pt = (v) => {
      const d = (b.getCurrentChatFileName() || "").replace(/\.jsonl?$/, ""), x = (v || "").replace(/\.jsonl?$/, "");
      return d === x;
    }, xt = async (v, g, d) => {
      try {
        h.stopIndexing();
        const x = b.context, _ = d.replace(/\.jsonl?$/, "");
        if (typeof x.saveChat == "function") {
          try {
            await x.saveChat();
          } catch {
          }
          await new Promise((N) => setTimeout(N, 300));
        } else
          b.saveChat(), await new Promise((N) => setTimeout(N, 300));
        let { element: C, index: S } = b.findCharacterElement(v, g);
        if (S === -1) {
          const N = b.getCharacters(), j = (se) => (se || "").replace(/\s+/g, "").toLowerCase(), B = j(v), J = N.find((se) => j(se.name) === B);
          J && (S = N.indexOf(J));
        }
        if (S === -1)
          return alert(`自动定位角色【${v}】失败，请手动在左侧选择该角色后继续。`), !1;
        const A = b.getCurrentCharacterId();
        return String(A) !== String(S) && (b.resetCurrentCharacter(), C ? C.click() : b.selectCharacterById(S), await new Promise((N) => setTimeout(N, 1200))), typeof x.openCharacterChat == "function" ? await x.openCharacterChat(_) : typeof x.executeSlashCommandsWithOptions == "function" ? await x.executeSlashCommandsWithOptions("/chat " + JSON.stringify(_)) : b.clickHistoryItem(d), await new Promise((N) => setTimeout(N, 600)), !0;
      } catch (x) {
        return console.error("[ChatLogManager] Jump Error:", x), !1;
      }
    }, nt = (v, g, d, x) => {
      try {
        const _ = document.getElementById("chat") || document.querySelector(".chat-container, #chat-window") || document.body;
        if (!_)
          return;
        let C = !1;
        const S = () => {
          if (C)
            return !0;
          const B = b.findMessageElement(v, g, d, x);
          if (B) {
            C = !0;
            const J = () => B.scrollIntoView({ behavior: "smooth", block: "center" });
            return J(), setTimeout(J, 200), setTimeout(J, 500), B.style.transition = "all 0.5s ease", B.style.boxShadow = "0 0 30px 10px rgba(255, 152, 0, 0.8)", B.style.backgroundColor = "rgba(255, 152, 0, 0.25)", setTimeout(() => {
              B.style.boxShadow = "", B.style.backgroundColor = "";
            }, 3e3), d && x && a(B, x), !0;
          }
          return !1;
        };
        if (S())
          return;
        let A = null;
        const N = new MutationObserver(() => {
          C || (A && clearTimeout(A), A = window.setTimeout(() => {
            S() && (N.disconnect(), M.delete(N));
          }, 100));
        });
        N.observe(_, { childList: !0, subtree: !0, attributes: !1 }), M.add(N);
        let j = 0;
        W && clearInterval(W), W = window.setInterval(() => {
          if (j++, S()) {
            clearInterval(W), N.disconnect(), M.delete(N);
            return;
          }
          j > 5 && j % 3 === 0 && (_.scrollTop = Math.max(0, _.scrollTop - 800)), j > 40 && (clearInterval(W), N.disconnect(), M.delete(N));
        }, 200);
      } catch (_) {
        console.warn("[ChatLogManager] Scroll to message failed:", _);
      }
    }, Kt = async () => {
      const v = h.allChats.find((d) => d.id === h.currentChatId);
      if (!v)
        return;
      const g = pt(v.id);
      tt(), await Mt(), g || await xt(v.charName, v.avatarUrl, v.id) && await h.loadMessages(v);
    }, Ut = async (v, g) => {
      const d = v.chatId || h.currentChatId, x = h.allChats.find((A) => A.id === d);
      if (!x) {
        alert("无法定位该消息归属的聊天文件。");
        return;
      }
      const _ = !!h.searchQuery, C = h.searchQuery, S = pt(x.id);
      tt(), await Mt(), S ? nt(v, g, _, C) : await xt(x.charName, x.avatarUrl, x.id) && (await h.loadMessages(x), await Mt(), nt(v, g, _, C));
    }, u = async () => {
      const v = h.allChats.find((d) => d.id === h.currentChatId);
      if (!v)
        return;
      const g = pt(v.id);
      if (window.confirm(g ? "🚨 正在删除活跃聊天！将自动切换到历史记录，确定删除？" : "⚠️ 确定要永久删除此记录吗？"))
        try {
          if (h.stopIndexing(), await new Promise((d) => setTimeout(d, 100)), b.saveChat(), g) {
            const d = h.allChats.find((x) => x.charName === v.charName && x.id !== v.id);
            d && await xt(d.charName, d.avatarUrl, d.id);
          }
          await Ri(v.charName, v.avatarUrl, v.id) ? (h.$patch({ currentChatId: null, currentMessages: [], selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch(""), h.fetchChats()) : alert("❌ 删除失败");
        } catch (d) {
          console.error("[ChatLogManager] Delete Error:", d);
        }
    }, m = async () => {
      var d;
      if (h.selectedChatIds.length === 0 || !window.confirm(`🛑 极度危险！将删除 ${h.selectedChatIds.length} 个会话，确定吗？`))
        return;
      K.value = !0;
      let v = 0, g = 0;
      try {
        h.stopIndexing(), await new Promise((S) => setTimeout(S, 100));
        const x = Array.from(h.selectedChatIds);
        let _ = !1, C = "";
        for (const S of x)
          if (pt(S)) {
            _ = !0, C = ((d = h.allChats.find((A) => A.id === S)) == null ? void 0 : d.charName) || "";
            break;
          }
        if (b.saveChat(), _) {
          const S = h.allChats.find((A) => A.charName === C && !x.includes(A.id));
          S && await xt(S.charName, S.avatarUrl, S.id);
        }
        for (const S of x) {
          const A = h.allChats.find((N) => N.id === S);
          A && await Ri(A.charName, A.avatarUrl, A.id) ? v++ : g++;
        }
        h.$patch({ selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), h.performSearch("");
      } finally {
        K.value = !1, t && (alert(`🗑️ 完毕！成功: ${v}${g > 0 ? ` 失败: ${g}` : ""}`), h.fetchChats());
      }
    };
    async function y(v, g) {
      const d = [];
      let x = 0;
      const _ = async () => {
        if (x >= g.length)
          return;
        const C = x++;
        try {
          d[C] = { success: !0, value: await g[C]() };
        } catch (S) {
          d[C] = { success: !1, error: S };
        }
        await _();
      };
      return await Promise.all(Array(Math.min(v, g.length)).fill(null).map(() => _())), d;
    }
    const I = (v) => {
      const g = h.allChats.find((_) => _.id === h.currentChatId);
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
        v === "txt" ? Va(x, d) : v === "md" ? Ka(x, d) : v === "jsonl" && Ua(x, g.charName, d);
      } catch (_) {
        console.error("[ChatLogManager] 单独导出失败:", _), alert("导出操作遇到错误，请查看控制台日志。");
      }
      F.value = !1;
    }, E = async (v) => {
      if (h.selectedChatIds.length !== 0) {
        K.value = !0;
        try {
          const g = Array.from(h.selectedChatIds).map((x) => async () => {
            const _ = h.allChats.find((C) => C.id === x);
            return _ ? { title: _.title, charName: _.charName, messages: await Os(_.charName, _.avatarUrl, _.id) } : null;
          }), d = await y(5, g);
          Ja(d.filter((x) => x.success && x.value !== null).map((x) => x.value), v);
        } finally {
          K.value = !1;
        }
      }
    }, T = () => {
      R.value && R.value.click();
    }, P = async (v) => {
      const g = v.target.files;
      if (!g || g.length === 0)
        return;
      const d = 30 * 1024 * 1024;
      for (let C = 0; C < g.length; C++)
        if (g[C].size > d) {
          alert(`❌ 文件 ${g[C].name} 过大 (超过30MB)，为防止浏览器崩溃已中止导入。`), R.value && (R.value.value = "");
          return;
        }
      G.value = !0, s.value = 0;
      let x = 0, _ = 0;
      try {
        for (let C = 0; C < g.length; C++) {
          const S = await g[C].text();
          let A;
          try {
            A = JSON.parse(S);
          } catch {
            A = S.split(`
`).filter((te) => te.trim()).map((te) => JSON.parse(te));
          }
          let N = [];
          Array.isArray(A) && (A.length > 0 && Array.isArray(A[0]) ? N = A.map((te) => ({ messages: te })) : A.length > 0 && A[0].messages ? N = A : A.length > 0 && A[0].chat_metadata ? N = [{ charName: A[0].character_name, messages: A.slice(1) }] : N = [{ messages: A }]);
          const j = N.length;
          let B = 0;
          const J = async (te) => {
            var je;
            for (const St of te) {
              const _e = St.messages.filter((Oe) => Oe.mes !== void 0);
              if (_e.length === 0)
                continue;
              let Se = St.charName || ((je = _e.find((Oe) => !Oe.is_user && Oe.name)) == null ? void 0 : je.name) || "";
              if (!Se) {
                const Oe = window.prompt("请输入绑定的角色名称：", "");
                if (!Oe) {
                  _++;
                  continue;
                }
                Se = Oe;
              }
              let Rt = h.allChats.find((Oe) => Oe.charName === Se || Se.includes(Oe.charName));
              Rt && await ua(_e, Rt.avatarUrl, Rt.charName) ? x++ : _++;
            }
          }, se = 10;
          for (let te = 0; te < j; te += se) {
            const je = N.slice(te, te + se);
            await J(je), B += je.length, s.value = Math.floor(B / j * 100), await new Promise((St) => setTimeout(St, 0));
          }
        }
      } finally {
        G.value = !1, s.value = 0, R.value && (R.value.value = ""), t && (alert(`🎉 导入完毕！成功: ${x}${_ > 0 ? ` 失败: ${_}` : ""}`), h.fetchChats());
      }
    };
    return (v, g) => n.value ? (ue(), fe("div", {
      key: 0,
      class: "log-manager-modal",
      onClick: Zt(tt, ["self"]),
      onTouchmove: g[11] || (g[11] = Zt(() => {
      }, ["self", "prevent"]))
    }, [
      Y("div", {
        class: Ot(["log-manager-container", z.value ? "theme-dark" : "theme-light"]),
        ref_key: "containerRef",
        ref: w
      }, [
        Y("header", qa, [
          g[12] || (g[12] = Y("h2", null, "📚 聊天记录总览", -1)),
          Y("div", Ya, [
            Y("button", {
              class: "action-btn import-btn",
              onClick: T,
              disabled: G.value
            }, ye(G.value ? `导入中... ${s.value}%` : "📥 导入"), 9, Ga),
            Y("input", {
              type: "file",
              ref_key: "fileInputRef",
              ref: R,
              style: { display: "none" },
              accept: ".json,.jsonl",
              multiple: "",
              onChange: P
            }, null, 544),
            Y("button", {
              class: Ot(["action-btn toggle-batch-btn", { active: Z(h).isBatchMode }]),
              onClick: g[0] || (g[0] = //@ts-ignore
              (...d) => Z(h).toggleBatchMode && Z(h).toggleBatchMode(...d))
            }, ye(Z(h).isBatchMode ? "退出批量" : "☑️ 批量"), 3),
            Y("button", {
              class: "icon-btn close-btn",
              onClick: tt,
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
                  placeholder: Z(h).isIndexing ? "后台加载中..." : "搜索全局内容...",
                  class: "search-input",
                  value: Z(h).searchQuery,
                  onInput: Xn,
                  disabled: Z(h).isBatchMode
                }, null, 40, tu),
                Z(h).isIndexing ? (ue(), fe("span", nu, "⌛")) : ze("", !0)
              ])
            ]),
            Z(h).isBatchMode ? (ue(), fe("div", su, [
              Y("input", {
                type: "checkbox",
                id: "selectAllBox",
                class: "batch-checkbox",
                checked: Z(h).isAllSelected,
                onChange: g[1] || (g[1] = //@ts-ignore
                (...d) => Z(h).toggleSelectAll && Z(h).toggleSelectAll(...d))
              }, null, 40, iu),
              Y("label", ru, "全选 " + ye(Z(h).searchQuery ? "搜索结果" : "所有会话"), 1)
            ])) : ze("", !0),
            Ie(Wa)
          ]),
          Y("section", ou, [
            Y("div", lu, [
              Y("h3", null, ye(Z(h).isBatchMode ? "批量操作" : "消息预览"), 1),
              !Z(h).isBatchMode && Z(h).currentChatId ? (ue(), fe("div", cu, [
                Y("button", {
                  class: "action-btn jump-chat-btn",
                  onClick: Kt
                }, "🚀 进入"),
                Y("button", {
                  class: "action-btn delete-btn-sm",
                  onClick: u
                }, "🗑️"),
                Y("button", {
                  class: "action-btn",
                  onClick: g[2] || (g[2] = (d) => F.value = !0)
                }, "📤 导出 ▾")
              ])) : ze("", !0)
            ]),
            Z(h).isBatchMode ? (ue(), fe("div", au, [
              Y("div", uu, [
                Y("h3", null, "已选 " + ye(Z(h).selectedChatIds.length) + " 个会话", 1),
                Z(h).selectedChatIds.length === 0 ? (ue(), fe("p", fu, "请在左侧勾选")) : ze("", !0)
              ]),
              Z(h).selectedChatIds.length > 0 ? (ue(), fe("div", hu, [
                Y("button", {
                  class: "big-btn md-btn",
                  onClick: g[3] || (g[3] = (d) => E("md")),
                  disabled: K.value
                }, ye(K.value ? "处理中..." : "📥 导出为 Markdown"), 9, du),
                Y("button", {
                  class: "big-btn txt-btn",
                  onClick: g[4] || (g[4] = (d) => E("txt")),
                  disabled: K.value
                }, ye(K.value ? "处理中..." : "📥 导出为 TXT"), 9, pu),
                Y("button", {
                  class: "big-btn json-btn",
                  onClick: g[5] || (g[5] = (d) => E("json")),
                  disabled: K.value
                }, ye(K.value ? "处理中..." : "📦 导出为 JSON"), 9, gu),
                g[13] || (g[13] = Y("div", { class: "divider" }, null, -1)),
                Y("button", {
                  class: "big-btn delete-btn",
                  onClick: m,
                  disabled: K.value
                }, ye(K.value ? "删除中..." : "🗑️ 永久删除记录"), 9, mu)
              ])) : ze("", !0)
            ])) : (ue(), fe("div", {
              key: 1,
              class: "message-container",
              ref_key: "scrollContainer",
              ref: U,
              onScroll: et
            }, [
              Z(h).currentChatId ? Z(h).loadingMessages ? (ue(), fe("div", yu, " ⏳ 加载庞大消息记录中，请稍候... ")) : (ue(), fe("div", {
                key: 2,
                class: "messages",
                style: Pt({ height: Ae.value + "px" })
              }, [
                (ue(!0), fe(Re, null, Rr(Ze.value, (d) => (ue(), fe("div", {
                  key: d._globalIndex,
                  style: Pt({ transform: `translateY(${d._top}px)` }),
                  class: "message-bubble-wrapper"
                }, [
                  Y("div", {
                    class: Ot(["message-bubble", d.is_user ? "is-user" : "is-bot"])
                  }, [
                    Y("button", {
                      class: "msg-jump-btn",
                      onClick: Zt((x) => Ut(d, d._globalIndex), ["stop"]),
                      title: "跳转到原文"
                    }, "🎯", 8, _u),
                    Y("strong", null, ye(d.name || (d.is_user ? "You" : "Bot")) + ":", 1),
                    Y("p", {
                      class: "preview-text",
                      innerHTML: d._html
                    }, null, 8, bu)
                  ], 2)
                ], 4))), 128))
              ], 4)) : (ue(), fe("div", vu, "👈 请在左侧选择角色或搜索内容"))
            ], 544))
          ])
        ]),
        Ie(bc, { name: "fade-scale" }, {
          default: Cr(() => [
            F.value ? (ue(), fe("div", {
              key: 0,
              class: "action-sheet-overlay",
              onClick: g[10] || (g[10] = Zt((d) => F.value = !1, ["self"]))
            }, [
              Y("div", xu, [
                g[14] || (g[14] = Y("h3", { class: "action-sheet-title" }, "选择导出格式", -1)),
                Y("button", {
                  class: "big-btn md-btn",
                  onClick: g[6] || (g[6] = (d) => I("md"))
                }, "📄 导出为 Markdown"),
                Y("button", {
                  class: "big-btn txt-btn",
                  onClick: g[7] || (g[7] = (d) => I("txt"))
                }, "📝 导出为 TXT"),
                Y("button", {
                  class: "big-btn json-btn",
                  onClick: g[8] || (g[8] = (d) => I("jsonl"))
                }, "📦 导出为 JSONL"),
                Y("button", {
                  class: "big-btn cancel-btn",
                  onClick: g[9] || (g[9] = (d) => F.value = !1)
                }, "取消")
              ])
            ])) : ze("", !0)
          ]),
          _: 1
        })
      ], 2)
    ], 32)) : ze("", !0);
  }
});
const Cu = /* @__PURE__ */ mo(Su, [["__scopeId", "data-v-31f24782"]]), vo = "chat-log-manager-float-pos";
function wu() {
  try {
    const e = localStorage.getItem(vo);
    if (e) {
      const t = JSON.parse(e), n = window.innerWidth - 50, s = window.innerHeight - 50;
      return { x: Math.max(0, Math.min(t.x, n)), y: Math.max(0, Math.min(t.y, s)) };
    }
  } catch {
  }
  return null;
}
function zi(e, t) {
  localStorage.setItem(vo, JSON.stringify({ x: e, y: t }));
}
function Bi() {
  try {
    let e = function() {
      s.classList.remove("idle-transparent"), clearTimeout(a), a = setTimeout(() => {
        s.classList.add("idle-transparent");
      }, 3e3);
    }, t = function(p, h) {
      const b = p - o, w = h - l;
      (Math.abs(b) > 5 || Math.abs(w) > 5) && (r = !0), s.style.left = Math.max(0, Math.min(c + b, window.innerWidth - s.offsetWidth)) + "px", s.style.top = Math.max(0, Math.min(f + w, window.innerHeight - s.offsetHeight)) + "px";
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
    const i = wu();
    i ? (s.style.left = i.x + "px", s.style.top = i.y + "px") : (s.style.left = window.innerWidth - 64 + "px", s.style.top = window.innerHeight - 200 + "px");
    let r = !1, o, l, c, f, a = null;
    e(), s.addEventListener("mousedown", (p) => {
      if (p.button !== 0)
        return;
      e(), o = p.clientX, l = p.clientY;
      const h = s.getBoundingClientRect();
      c = h.left, f = h.top, s.style.transition = "none";
      const b = (O) => t(O.clientX, O.clientY), w = () => {
        document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", w), s.style.transition = "all 0.3s ease", r && zi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("mousemove", b), document.addEventListener("mouseup", w);
    }), s.addEventListener("touchstart", (p) => {
      e();
      const h = p.touches[0];
      o = h.clientX, l = h.clientY;
      const b = s.getBoundingClientRect();
      c = b.left, f = b.top;
      const w = (z) => t(z.touches[0].clientX, z.touches[0].clientY), O = () => {
        document.removeEventListener("touchmove", w), document.removeEventListener("touchend", O), r && zi(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("touchmove", w, { passive: !1 }), document.addEventListener("touchend", O);
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
    const t = qc(Cu), n = Qc();
    n.use(ca), t.use(n), t.mount(e);
  }
  typeof window.refreshChatLogManager == "function" && window.refreshChatLogManager();
}
window.closeChatLogManager = () => {
  const e = document.getElementById("chat-log-manager-container");
  e && (e.style.display = "none");
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Bi) : Bi();
