/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function js(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const fe = {}, Rt = [], Ue = () => {
}, rr = () => !1, Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jn = (e) => e.startsWith("onUpdate:"), me = Object.assign, Bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fo = Object.prototype.hasOwnProperty, ie = (e, t) => Fo.call(e, t), G = Array.isArray, Dt = (e) => gn(e) === "[object Map]", or = (e) => gn(e) === "[object Set]", oi = (e) => gn(e) === "[object Date]", ee = (e) => typeof e == "function", pe = (e) => typeof e == "string", He = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", lr = (e) => (re(e) || ee(e)) && ee(e.then) && ee(e.catch), ar = Object.prototype.toString, gn = (e) => ar.call(e), Po = (e) => gn(e).slice(8, -1), cr = (e) => gn(e) === "[object Object]", Bn = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ js(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ro = /-\w/g, Ke = Hn(
  (e) => e.replace(Ro, (t) => t.slice(1).toUpperCase())
), Do = /\B([A-Z])/g, yt = Hn(
  (e) => e.replace(Do, "-$1").toLowerCase()
), ur = Hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), is = Hn(
  (e) => e ? `on${ur(e)}` : ""
), tt = (e, t) => !Object.is(e, t), En = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Hs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, jo = (e) => {
  const t = pe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let li;
const zn = () => li || (li = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function At(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = pe(s) ? Vo(s) : At(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (pe(e) || re(e))
    return e;
}
const Bo = /;(?![^(]*\))/g, Ho = /:([^]+)/, zo = /\/\*[^]*?\*\//g;
function Vo(e) {
  const t = {};
  return e.replace(zo, "").split(Bo).forEach((n) => {
    if (n) {
      const s = n.split(Ho);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Tt(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const s = Tt(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Wo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Uo = /* @__PURE__ */ js(Wo);
function hr(e) {
  return !!e || e === "";
}
function Ko(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = zs(e[s], t[s]);
  return n;
}
function zs(e, t) {
  if (e === t)
    return !0;
  let n = oi(e), s = oi(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = He(e), s = He(t), n || s)
    return e === t;
  if (n = G(e), s = G(t), n || s)
    return n && s ? Ko(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !zs(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const dr = (e) => !!(e && e.__v_isRef === !0), ge = (e) => pe(e) ? e : e == null ? "" : G(e) || re(e) && (e.toString === ar || !ee(e.toString)) ? dr(e) ? ge(e.value) : JSON.stringify(e, pr, 2) : String(e), pr = (e, t) => dr(t) ? pr(e, t.value) : Dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[rs(s, r) + " =>"] = i, n),
    {}
  )
} : or(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rs(n))
} : He(t) ? rs(t) : re(t) && !G(t) && !cr(t) ? String(t) : t, rs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ye;
class gr {
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
function mr(e) {
  return new gr(e);
}
function vr() {
  return ye;
}
function br(e, t = !1) {
  ye && ye.cleanups.push(e);
}
let he;
const os = /* @__PURE__ */ new WeakSet();
class yr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && (ye.active ? ye.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ai(this), xr(this);
    const t = he, n = Je;
    he = this, Je = !0;
    try {
      return this.fn();
    } finally {
      Sr(this), he = t, Je = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Us(t);
      this.deps = this.depsTail = void 0, ai(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? os.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ws(this) && this.run();
  }
  get dirty() {
    return ws(this);
  }
}
let _r = 0, Xt, Zt;
function Cr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zt, Zt = e;
    return;
  }
  e.next = Xt, Xt = e;
}
function Vs() {
  _r++;
}
function Ws() {
  if (--_r > 0)
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
function xr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Sr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Us(s), Jo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ws(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === an) || (e.globalVersion = an, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ws(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = he, s = Je;
  he = e, Je = !0;
  try {
    xr(e);
    const i = e.fn(e._value);
    (t.version === 0 || tt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    he = n, Je = s, Sr(e), e.flags &= -3;
  }
}
function Us(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Us(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Jo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Je = !0;
const Er = [];
function nt() {
  Er.push(Je), Je = !1;
}
function st() {
  const e = Er.pop();
  Je = e === void 0 ? !0 : e;
}
function ai(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = he;
    he = void 0;
    try {
      t();
    } finally {
      he = n;
    }
  }
}
let an = 0;
class qo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ks {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!he || !Je || he === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== he)
      n = this.activeLink = new qo(he, this), he.deps ? (n.prevDep = he.depsTail, he.depsTail.nextDep = n, he.depsTail = n) : he.deps = he.depsTail = n, Tr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = he.depsTail, n.nextDep = void 0, he.depsTail.nextDep = n, he.depsTail = n, he.deps === n && (he.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, an++, this.notify(t);
  }
  notify(t) {
    Vs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ws();
    }
  }
}
function Tr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Tr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Mn = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ Symbol(
  ""
), Es = /* @__PURE__ */ Symbol(
  ""
), cn = /* @__PURE__ */ Symbol(
  ""
);
function Ce(e, t, n) {
  if (Je && he) {
    let s = Mn.get(e);
    s || Mn.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ks()), i.map = s, i.key = n), i.track();
  }
}
function ct(e, t, n, s, i, r) {
  const o = Mn.get(e);
  if (!o) {
    an++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Vs(), t === "clear")
    o.forEach(l);
  else {
    const a = G(e), u = a && Bn(n);
    if (a && n === "length") {
      const c = Number(s);
      o.forEach((h, d) => {
        (d === "length" || d === cn || !He(d) && d >= c) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(cn)), t) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Mt)), Dt(e) && l(o.get(Es)));
          break;
        case "delete":
          a || (l(o.get(Mt)), Dt(e) && l(o.get(Es)));
          break;
        case "set":
          Dt(e) && l(o.get(Mt));
          break;
      }
  }
  Ws();
}
function Yo(e, t) {
  const n = Mn.get(e);
  return n && n.get(t);
}
function $t(e) {
  const t = /* @__PURE__ */ se(e);
  return t === e ? t : (Ce(t, "iterate", cn), /* @__PURE__ */ Le(e) ? t : t.map(qe));
}
function Vn(e) {
  return Ce(e = /* @__PURE__ */ se(e), "iterate", cn), e;
}
function Ze(e, t) {
  return /* @__PURE__ */ ht(e) ? Bt(/* @__PURE__ */ ft(e) ? qe(t) : t) : qe(t);
}
const Go = {
  __proto__: null,
  [Symbol.iterator]() {
    return ls(this, Symbol.iterator, (e) => Ze(this, e));
  },
  concat(...e) {
    return $t(this).concat(
      ...e.map((t) => G(t) ? $t(t) : t)
    );
  },
  entries() {
    return ls(this, "entries", (e) => (e[1] = Ze(this, e[1]), e));
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
      (n) => n.map((s) => Ze(this, s)),
      arguments
    );
  },
  find(e, t) {
    return it(
      this,
      "find",
      e,
      t,
      (n) => Ze(this, n),
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
      (n) => Ze(this, n),
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
    return as(this, "includes", e);
  },
  indexOf(...e) {
    return as(this, "indexOf", e);
  },
  join(e) {
    return $t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return as(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wt(this, "pop");
  },
  push(...e) {
    return Wt(this, "push", e);
  },
  reduce(e, ...t) {
    return ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ci(this, "reduceRight", e, t);
  },
  shift() {
    return Wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wt(this, "splice", e);
  },
  toReversed() {
    return $t(this).toReversed();
  },
  toSorted(e) {
    return $t(this).toSorted(e);
  },
  toSpliced(...e) {
    return $t(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wt(this, "unshift", e);
  },
  values() {
    return ls(this, "values", (e) => Ze(this, e));
  }
};
function ls(e, t, n) {
  const s = Vn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Le(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Qo = Array.prototype;
function it(e, t, n, s, i, r) {
  const o = Vn(e), l = o !== e && !/* @__PURE__ */ Le(e), a = o[t];
  if (a !== Qo[t]) {
    const h = a.apply(e, r);
    return l ? qe(h) : h;
  }
  let u = n;
  o !== e && (l ? u = function(h, d) {
    return n.call(this, Ze(e, h), d, e);
  } : n.length > 2 && (u = function(h, d) {
    return n.call(this, h, d, e);
  }));
  const c = a.call(o, u, s);
  return l && i ? i(c) : c;
}
function ci(e, t, n, s) {
  const i = Vn(e), r = i !== e && !/* @__PURE__ */ Le(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(u, c, h) {
    return l && (l = !1, u = Ze(e, u)), n.call(this, u, Ze(e, c), h, e);
  }) : n.length > 3 && (o = function(u, c, h) {
    return n.call(this, u, c, h, e);
  }));
  const a = i[t](o, ...s);
  return l ? Ze(e, a) : a;
}
function as(e, t, n) {
  const s = /* @__PURE__ */ se(e);
  Ce(s, "iterate", cn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Un(n[0]) ? (n[0] = /* @__PURE__ */ se(n[0]), s[t](...n)) : i;
}
function Wt(e, t, n = []) {
  nt(), Vs();
  const s = (/* @__PURE__ */ se(e))[t].apply(e, n);
  return Ws(), st(), s;
}
const Xo = /* @__PURE__ */ js("__proto__,__v_isRef,__isVue"), Mr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function Zo(e) {
  He(e) || (e = String(e));
  const t = /* @__PURE__ */ se(this);
  return Ce(t, "has", e), t.hasOwnProperty(e);
}
class Ir {
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
      return s === (i ? r ? cl : $r : r ? Nr : Or).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = G(t);
    if (!i) {
      let a;
      if (o && (a = Go[n]))
        return a;
      if (n === "hasOwnProperty")
        return Zo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ de(t) ? t : s
    );
    if ((He(n) ? Mr.has(n) : Xo(n)) || (i || Ce(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ de(l)) {
      const a = o && Bn(n) ? l : l.value;
      return i && re(a) ? /* @__PURE__ */ Ms(a) : a;
    }
    return re(l) ? i ? /* @__PURE__ */ Ms(l) : /* @__PURE__ */ Wn(l) : l;
  }
}
class Ar extends Ir {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = G(t) && Bn(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ht(r);
      if (!/* @__PURE__ */ Le(s) && !/* @__PURE__ */ ht(s) && (r = /* @__PURE__ */ se(r), s = /* @__PURE__ */ se(s)), !o && /* @__PURE__ */ de(r) && !/* @__PURE__ */ de(s))
        return u || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ de(t) ? t : i
    );
    return t === /* @__PURE__ */ se(i) && a && (l ? tt(s, r) && ct(t, "set", n, s) : ct(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ct(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!He(n) || !Mr.has(n)) && Ce(t, "has", n), s;
  }
  ownKeys(t) {
    return Ce(
      t,
      "iterate",
      G(t) ? "length" : Mt
    ), Reflect.ownKeys(t);
  }
}
class el extends Ir {
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
const tl = /* @__PURE__ */ new Ar(), nl = /* @__PURE__ */ new el(), sl = /* @__PURE__ */ new Ar(!0);
const Ts = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function il(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ se(i), o = Dt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = i[e](...s), c = n ? Ts : t ? Bt : qe;
    return !t && Ce(
      r,
      "iterate",
      a ? Es : Mt
    ), me(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: h, done: d } = u.next();
          return d ? { value: h, done: d } : {
            value: l ? [c(h[0]), c(h[1])] : c(h),
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
function rl(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ se(r), l = /* @__PURE__ */ se(i);
      e || (tt(i, l) && Ce(o, "get", i), Ce(o, "get", l));
      const { has: a } = yn(o), u = t ? Ts : e ? Bt : qe;
      if (a.call(o, i))
        return u(r.get(i));
      if (a.call(o, l))
        return u(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ce(/* @__PURE__ */ se(i), "iterate", Mt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ se(r), l = /* @__PURE__ */ se(i);
      return e || (tt(i, l) && Ce(o, "has", i), Ce(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ se(l), u = t ? Ts : e ? Bt : qe;
      return !e && Ce(a, "iterate", Mt), l.forEach((c, h) => i.call(r, u(c), u(h), o));
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
        const r = /* @__PURE__ */ se(this), o = yn(r), l = /* @__PURE__ */ se(i), a = !t && !/* @__PURE__ */ Le(i) && !/* @__PURE__ */ ht(i) ? l : i;
        return o.has.call(r, a) || tt(i, a) && o.has.call(r, i) || tt(l, a) && o.has.call(r, l) || (r.add(a), ct(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Le(r) && !/* @__PURE__ */ ht(r) && (r = /* @__PURE__ */ se(r));
        const o = /* @__PURE__ */ se(this), { has: l, get: a } = yn(o);
        let u = l.call(o, i);
        u || (i = /* @__PURE__ */ se(i), u = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), u ? tt(r, c) && ct(o, "set", i, r) : ct(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ se(this), { has: o, get: l } = yn(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ se(i), a = o.call(r, i)), l && l.call(r, i);
        const u = r.delete(i);
        return a && ct(r, "delete", i, void 0), u;
      },
      clear() {
        const i = /* @__PURE__ */ se(this), r = i.size !== 0, o = i.clear();
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
    n[i] = il(i, e, t);
  }), n;
}
function Js(e, t) {
  const n = rl(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ie(n, i) && i in s ? n : s,
    i,
    r
  );
}
const ol = {
  get: /* @__PURE__ */ Js(!1, !1)
}, ll = {
  get: /* @__PURE__ */ Js(!1, !0)
}, al = {
  get: /* @__PURE__ */ Js(!0, !1)
};
const Or = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), cl = /* @__PURE__ */ new WeakMap();
function ul(e) {
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
  return /* @__PURE__ */ ht(e) ? e : qs(
    e,
    !1,
    tl,
    ol,
    Or
  );
}
// @__NO_SIDE_EFFECTS__
function fl(e) {
  return qs(
    e,
    !1,
    sl,
    ll,
    Nr
  );
}
// @__NO_SIDE_EFFECTS__
function Ms(e) {
  return qs(
    e,
    !0,
    nl,
    al,
    $r
  );
}
function qs(e, t, n, s, i) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = ul(Po(e));
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
function Le(e) {
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
function Ys(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && fr(e, "__v_skip", !0), e;
}
const qe = (e) => re(e) ? /* @__PURE__ */ Wn(e) : e, Bt = (e) => re(e) ? /* @__PURE__ */ Ms(e) : e;
// @__NO_SIDE_EFFECTS__
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return kr(e, !1);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return kr(e, !0);
}
function kr(e, t) {
  return /* @__PURE__ */ de(e) ? e : new hl(e, t);
}
class hl {
  constructor(t, n) {
    this.dep = new Ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ se(t), this._value = n ? t : qe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ ht(t);
    t = s ? t : /* @__PURE__ */ se(t), tt(t, n) && (this._rawValue = t, this._value = s ? t : qe(t), this.dep.trigger());
  }
}
function Is(e) {
  e.dep && e.dep.trigger();
}
function S(e) {
  return /* @__PURE__ */ de(e) ? e.value : e;
}
const dl = {
  get: (e, t, n) => t === "__v_raw" ? e : S(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ de(i) && !/* @__PURE__ */ de(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Lr(e) {
  return /* @__PURE__ */ ft(e) ? e : new Proxy(e, dl);
}
// @__NO_SIDE_EFFECTS__
function pl(e) {
  const t = G(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ml(e, n);
  return t;
}
class gl {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = He(n) ? n : String(n), this._raw = /* @__PURE__ */ se(t);
    let i = !0, r = t;
    if (!G(t) || He(this._key) || !Bn(this._key))
      do
        i = !/* @__PURE__ */ Un(r) || /* @__PURE__ */ Le(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = S(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ de(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ de(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Yo(this._raw, this._key);
  }
}
function ml(e, t, n) {
  return new gl(e, t, n);
}
class vl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = an - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    he !== this)
      return Cr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return wr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function bl(e, t, n = !1) {
  let s, i;
  return ee(e) ? s = e : (s = e.get, i = e.set), new vl(s, i, n);
}
const Cn = {}, In = /* @__PURE__ */ new WeakMap();
let wt;
function yl(e, t = !1, n = wt) {
  if (n) {
    let s = In.get(n);
    s || In.set(n, s = []), s.push(e);
  }
}
function _l(e, t, n = fe) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, u = (b) => i ? b : /* @__PURE__ */ Le(b) || i === !1 || i === 0 ? ut(b, 1) : ut(b);
  let c, h, d, g, m = !1, w = !1;
  if (/* @__PURE__ */ de(e) ? (h = () => e.value, m = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ ft(e) ? (h = () => u(e), m = !0) : G(e) ? (w = !0, m = e.some((b) => /* @__PURE__ */ ft(b) || /* @__PURE__ */ Le(b)), h = () => e.map((b) => {
    if (/* @__PURE__ */ de(b))
      return b.value;
    if (/* @__PURE__ */ ft(b))
      return u(b);
    if (ee(b))
      return a ? a(b, 2) : b();
  })) : ee(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (d) {
      nt();
      try {
        d();
      } finally {
        st();
      }
    }
    const b = wt;
    wt = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      wt = b;
    }
  } : h = Ue, t && i) {
    const b = h, E = i === !0 ? 1 / 0 : i;
    h = () => ut(b(), E);
  }
  const L = vr(), C = () => {
    c.stop(), L && L.active && Bs(L.effects, c);
  };
  if (r && t) {
    const b = t;
    t = (...E) => {
      const F = b(...E);
      return C(), F;
    };
  }
  let T = w ? new Array(e.length).fill(Cn) : Cn;
  const x = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const E = c.run();
        if (b || i || m || (w ? E.some((F, j) => tt(F, T[j])) : tt(E, T))) {
          d && d();
          const F = wt;
          wt = c;
          try {
            const j = [
              E,
              // pass undefined as the old value when it's changed for the first time
              T === Cn ? void 0 : w && T[0] === Cn ? [] : T,
              g
            ];
            T = E, a ? a(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            wt = F;
          }
        }
      } else
        c.run();
  };
  return l && l(x), c = new yr(h), c.scheduler = o ? () => o(x, !1) : x, g = (b) => yl(b, !1, c), d = c.onStop = () => {
    const b = In.get(c);
    if (b) {
      if (a)
        a(b, 4);
      else
        for (const E of b)
          E();
      In.delete(c);
    }
  }, t ? s ? x(!0) : T = c.run() : o ? o(x.bind(null, !0), !0) : c.run(), C.pause = c.pause.bind(c), C.resume = c.resume.bind(c), C.stop = C, C;
}
function ut(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ de(e))
    ut(e.value, t, n);
  else if (G(e))
    for (let s = 0; s < e.length; s++)
      ut(e[s], t, n);
  else if (or(e) || Dt(e))
    e.forEach((s) => {
      ut(s, t, n);
    });
  else if (cr(e)) {
    for (const s in e)
      ut(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ut(e[s], t, n);
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
function ze(e, t, n, s) {
  if (ee(e)) {
    const i = mn(e, t, n, s);
    return i && lr(i) && i.catch((r) => {
      Kn(r, t, n);
    }), i;
  }
  if (G(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ze(e[r], t, n, s));
    return i;
  }
}
function Kn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      nt(), mn(r, null, 10, [
        e,
        a,
        u
      ]), st();
      return;
    }
  }
  Cl(e, n, i, s, o);
}
function Cl(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ee = [];
let Xe = -1;
const jt = [];
let mt = null, Ft = 0;
const Fr = /* @__PURE__ */ Promise.resolve();
let An = null;
function Jn(e) {
  const t = An || Fr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xl(e) {
  let t = Xe + 1, n = Ee.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ee[s], r = un(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = un(e), n = Ee[Ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= un(n) ? Ee.push(e) : Ee.splice(xl(t), 0, e), e.flags |= 1, Pr();
  }
}
function Pr() {
  An || (An = Fr.then(Dr));
}
function Sl(e) {
  G(e) ? jt.push(...e) : mt && e.id === -1 ? mt.splice(Ft + 1, 0, e) : e.flags & 1 || (jt.push(e), e.flags |= 1), Pr();
}
function ui(e, t, n = Xe + 1) {
  for (; n < Ee.length; n++) {
    const s = Ee[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Rr(e) {
  if (jt.length) {
    const t = [...new Set(jt)].sort(
      (n, s) => un(n) - un(s)
    );
    if (jt.length = 0, mt) {
      mt.push(...t);
      return;
    }
    for (mt = t, Ft = 0; Ft < mt.length; Ft++) {
      const n = mt[Ft];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    mt = null, Ft = 0;
  }
}
const un = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Dr(e) {
  const t = Ue;
  try {
    for (Xe = 0; Xe < Ee.length; Xe++) {
      const n = Ee[Xe];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), mn(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Xe < Ee.length; Xe++) {
      const n = Ee[Xe];
      n && (n.flags &= -2);
    }
    Xe = -1, Ee.length = 0, Rr(), An = null, (Ee.length || jt.length) && Dr();
  }
}
let Be = null, jr = null;
function On(e) {
  const t = Be;
  return Be = e, jr = e && e.type.__scopeId || null, t;
}
function qt(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && kn(-1);
    const r = On(t);
    let o;
    try {
      o = e(...i);
    } finally {
      On(r), s._d && kn(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function cs(e, t) {
  if (Be === null)
    return e;
  const n = Zn(Be), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = fe] = t[i];
    r && (ee(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ut(o), s.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function _t(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (nt(), ze(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
function wl(e, t) {
  if (Me) {
    let n = Me.provides;
    const s = Me.parent && Me.parent.provides;
    s === n && (n = Me.provides = Object.create(s)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const s = ei();
  if (s || It) {
    let i = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(s && s.proxy) : t;
  }
}
function El() {
  return !!(ei() || It);
}
const Tl = /* @__PURE__ */ Symbol.for("v-scx"), Ml = () => tn(Tl);
function vt(e, t, n) {
  return Br(e, t, n);
}
function Br(e, t, n = fe) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = me({}, n), a = t && s || !t && r !== "post";
  let u;
  if (dn) {
    if (r === "sync") {
      const g = Ml();
      u = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Ue, g.resume = Ue, g.pause = Ue, g;
    }
  }
  const c = Me;
  l.call = (g, m, w) => ze(g, c, m, w);
  let h = !1;
  r === "post" ? l.scheduler = (g) => {
    Ie(g, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (g, m) => {
    m ? g() : Gs(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
  };
  const d = _l(e, t, l);
  return dn && (u ? u.push(d) : a && d()), d;
}
function Il(e, t, n) {
  const s = this.proxy, i = pe(e) ? e.includes(".") ? Hr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  ee(t) ? r = t : (r = t.handler, n = t);
  const o = vn(this), l = Br(i, r.bind(s), n);
  return o(), l;
}
function Hr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const Al = /* @__PURE__ */ Symbol("_vte"), zr = (e) => e.__isTeleport, Re = /* @__PURE__ */ Symbol("_leaveCb"), Ut = /* @__PURE__ */ Symbol("_enterCb");
function Ol() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Gn(() => {
    e.isMounted = !0;
  }), Qr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Fe = [Function, Array], Vr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Fe,
  onEnter: Fe,
  onAfterEnter: Fe,
  onEnterCancelled: Fe,
  // leave
  onBeforeLeave: Fe,
  onLeave: Fe,
  onAfterLeave: Fe,
  onLeaveCancelled: Fe,
  // appear
  onBeforeAppear: Fe,
  onAppear: Fe,
  onAfterAppear: Fe,
  onAppearCancelled: Fe
}, Wr = (e) => {
  const t = e.subTree;
  return t.component ? Wr(t.component) : t;
}, Nl = {
  name: "BaseTransition",
  props: Vr,
  setup(e, { slots: t }) {
    const n = ei(), s = Ol();
    return () => {
      const i = t.default && Jr(t.default(), !0), r = i && i.length ? Ur(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? Ae() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ se(e), { mode: l } = o;
      if (s.isLeaving)
        return us(r);
      const a = fi(r);
      if (!a)
        return us(r);
      let u = As(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => u = h
      );
      a.type !== Te && fn(a, u);
      let c = n.subTree && fi(n.subTree);
      if (c && c.type !== Te && !Et(c, a) && Wr(n).type !== Te) {
        let h = As(
          c,
          o,
          s,
          n
        );
        if (fn(c, h), l === "out-in" && a.type !== Te)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, us(r);
        l === "in-out" && a.type !== Te ? h.delayLeave = (d, g, m) => {
          const w = Kr(
            s,
            c
          );
          w[String(c.key)] = c, d[Re] = () => {
            g(), d[Re] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else
        c && (c = void 0);
      return r;
    };
  }
};
function Ur(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Te) {
        t = n;
        break;
      }
  }
  return t;
}
const $l = Nl;
function Kr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function As(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: d,
    onLeave: g,
    onAfterLeave: m,
    onLeaveCancelled: w,
    onBeforeAppear: L,
    onAppear: C,
    onAfterAppear: T,
    onAppearCancelled: x
  } = t, b = String(e.key), E = Kr(n, e), F = (v, I) => {
    v && ze(
      v,
      s,
      9,
      I
    );
  }, j = (v, I) => {
    const P = I[1];
    F(v, I), G(v) ? v.every((_) => _.length <= 1) && P() : v.length <= 1 && P();
  }, R = {
    mode: o,
    persisted: l,
    beforeEnter(v) {
      let I = a;
      if (!n.isMounted)
        if (r)
          I = L || a;
        else
          return;
      v[Re] && v[Re](
        !0
        /* cancelled */
      );
      const P = E[b];
      P && Et(e, P) && P.el[Re] && P.el[Re](), F(I, [v]);
    },
    enter(v) {
      if (E[b] === e)
        return;
      let I = u, P = c, _ = h;
      if (!n.isMounted)
        if (r)
          I = C || u, P = T || c, _ = x || h;
        else
          return;
      let V = !1;
      v[Ut] = (K) => {
        V || (V = !0, K ? F(_, [v]) : F(P, [v]), R.delayedLeave && R.delayedLeave(), v[Ut] = void 0);
      };
      const Q = v[Ut].bind(null, !1);
      I ? j(I, [v, Q]) : Q();
    },
    leave(v, I) {
      const P = String(e.key);
      if (v[Ut] && v[Ut](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return I();
      F(d, [v]);
      let _ = !1;
      v[Re] = (Q) => {
        _ || (_ = !0, I(), Q ? F(w, [v]) : F(m, [v]), v[Re] = void 0, E[P] === e && delete E[P]);
      };
      const V = v[Re].bind(null, !1);
      E[P] = e, g ? j(g, [v, V]) : V();
    },
    clone(v) {
      const I = As(
        v,
        t,
        n,
        s,
        i
      );
      return i && i(I), I;
    }
  };
  return R;
}
function us(e) {
  if (qn(e))
    return e = bt(e), e.children = null, e;
}
function fi(e) {
  if (!qn(e))
    return zr(e.type) && e.children ? Ur(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function fn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Jr(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === De ? (o.patchFlag & 128 && i++, s = s.concat(
      Jr(o.children, t, l)
    )) : (t || o.type !== Te) && s.push(l != null ? bt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function qr(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => me({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function Yr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Nn = /* @__PURE__ */ new WeakMap();
function nn(e, t, n, s, i = !1) {
  if (G(e)) {
    e.forEach(
      (w, L) => nn(
        w,
        t && (G(t) ? t[L] : t),
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
  const r = s.shapeFlag & 4 ? Zn(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, u = t && t.r, c = l.refs === fe ? l.refs = {} : l.refs, h = l.setupState, d = /* @__PURE__ */ se(h), g = h === fe ? rr : (w) => hi(c, w) ? !1 : ie(d, w), m = (w, L) => !(L && hi(c, L));
  if (u != null && u !== a) {
    if (di(t), pe(u))
      c[u] = null, g(u) && (h[u] = null);
    else if (/* @__PURE__ */ de(u)) {
      const w = t;
      m(u, w.k) && (u.value = null), w.k && (c[w.k] = null);
    }
  }
  if (ee(a)) {
    nt();
    try {
      mn(a, l, 12, [o, c]);
    } finally {
      st();
    }
  } else {
    const w = pe(a), L = /* @__PURE__ */ de(a);
    if (w || L) {
      const C = () => {
        if (e.f) {
          const T = w ? g(a) ? h[a] : c[a] : m() || !e.k ? a.value : c[e.k];
          if (i)
            G(T) && Bs(T, r);
          else if (G(T))
            T.includes(r) || T.push(r);
          else if (w)
            c[a] = [r], g(a) && (h[a] = c[a]);
          else {
            const x = [r];
            m(a, e.k) && (a.value = x), e.k && (c[e.k] = x);
          }
        } else
          w ? (c[a] = o, g(a) && (h[a] = o)) : L && (m(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const T = () => {
          C(), Nn.delete(e);
        };
        T.id = -1, Nn.set(e, T), Ie(T, n);
      } else
        di(e), C();
    }
  }
}
function di(e) {
  const t = Nn.get(e);
  t && (t.flags |= 8, Nn.delete(e));
}
zn().requestIdleCallback;
zn().cancelIdleCallback;
const sn = (e) => !!e.type.__asyncLoader, qn = (e) => e.type.__isKeepAlive;
function kl(e, t) {
  Gr(e, "a", t);
}
function Ll(e, t) {
  Gr(e, "da", t);
}
function Gr(e, t, n = Me) {
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
      qn(i.parent.vnode) && Fl(s, t, n, i), i = i.parent;
  }
}
function Fl(e, t, n, s) {
  const i = Yn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ot(() => {
    Bs(s[t], i);
  }, n);
}
function Yn(e, t, n = Me, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      nt();
      const l = vn(n), a = ze(t, n, e, o);
      return l(), st(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const dt = (e) => (t, n = Me) => {
  (!dn || e === "sp") && Yn(e, (...s) => t(...s), n);
}, Pl = dt("bm"), Gn = dt("m"), Rl = dt(
  "bu"
), Dl = dt("u"), Qr = dt(
  "bum"
), Ot = dt("um"), jl = dt(
  "sp"
), Bl = dt("rtg"), Hl = dt("rtc");
function zl(e, t = Me) {
  Yn("ec", e, t);
}
const Vl = /* @__PURE__ */ Symbol.for("v-ndc");
function Xr(e, t, n, s) {
  let i;
  const r = n && n[s], o = G(e);
  if (o || pe(e)) {
    const l = o && /* @__PURE__ */ ft(e);
    let a = !1, u = !1;
    l && (a = !/* @__PURE__ */ Le(e), u = /* @__PURE__ */ ht(e), e = Vn(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? u ? Bt(qe(e[c])) : qe(e[c]) : e[c],
        c,
        void 0,
        r && r[c]
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r && r[l]);
  } else if (re(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r && r[a])
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, r && r[a]);
      }
    }
  else
    i = [];
  return n && (n[s] = i), i;
}
const Os = (e) => e ? bo(e) ? Zn(e) : Os(e.parent) : null, rn = (
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
    $parent: (e) => Os(e.parent),
    $root: (e) => Os(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Qs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jn.bind(e.proxy)),
    $watch: (e) => Il.bind(e)
  })
), fs = (e, t) => e !== fe && !e.__isScriptSetup && ie(e, t), Wl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
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
        if (fs(s, t))
          return o[t] = 1, s[t];
        if (i !== fe && ie(i, t))
          return o[t] = 2, i[t];
        if (ie(r, t))
          return o[t] = 3, r[t];
        if (n !== fe && ie(n, t))
          return o[t] = 4, n[t];
        Ns && (o[t] = 0);
      }
    }
    const u = rn[t];
    let c, h;
    if (u)
      return t === "$attrs" && Ce(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== fe && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, ie(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return fs(i, t) ? (i[t] = n, !0) : s !== fe && ie(s, t) ? (s[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || e !== fe && l[0] !== "$" && ie(e, l) || fs(t, l) || ie(r, l) || ie(s, l) || ie(rn, l) || ie(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function pi(e) {
  return G(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ns = !0;
function Ul(e) {
  const t = Qs(e), n = e.proxy, s = e.ctx;
  Ns = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: d,
    beforeUpdate: g,
    updated: m,
    activated: w,
    deactivated: L,
    beforeDestroy: C,
    beforeUnmount: T,
    destroyed: x,
    unmounted: b,
    render: E,
    renderTracked: F,
    renderTriggered: j,
    errorCaptured: R,
    serverPrefetch: v,
    // public API
    expose: I,
    inheritAttrs: P,
    // assets
    components: _,
    directives: V,
    filters: Q
  } = t;
  if (u && Kl(u, s, null), o)
    for (const Y in o) {
      const te = o[Y];
      ee(te) && (s[Y] = te.bind(n));
    }
  if (i) {
    const Y = i.call(n, n);
    re(Y) && (e.data = /* @__PURE__ */ Wn(Y));
  }
  if (Ns = !0, r)
    for (const Y in r) {
      const te = r[Y], xe = ee(te) ? te.bind(n, n) : ee(te.get) ? te.get.bind(n, n) : Ue, Ye = !ee(te) && ee(te.set) ? te.set.bind(n) : Ue, Oe = je({
        get: xe,
        set: Ye
      });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Se) => Oe.value = Se
      });
    }
  if (l)
    for (const Y in l)
      Zr(l[Y], s, n, Y);
  if (a) {
    const Y = ee(a) ? a.call(n) : a;
    Reflect.ownKeys(Y).forEach((te) => {
      wl(te, Y[te]);
    });
  }
  c && gi(c, e, "c");
  function J(Y, te) {
    G(te) ? te.forEach((xe) => Y(xe.bind(n))) : te && Y(te.bind(n));
  }
  if (J(Pl, h), J(Gn, d), J(Rl, g), J(Dl, m), J(kl, w), J(Ll, L), J(zl, R), J(Hl, F), J(Bl, j), J(Qr, T), J(Ot, b), J(jl, v), G(I))
    if (I.length) {
      const Y = e.exposed || (e.exposed = {});
      I.forEach((te) => {
        Object.defineProperty(Y, te, {
          get: () => n[te],
          set: (xe) => n[te] = xe,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  E && e.render === Ue && (e.render = E), P != null && (e.inheritAttrs = P), _ && (e.components = _), V && (e.directives = V), v && Yr(e);
}
function Kl(e, t, n = Ue) {
  G(e) && (e = $s(e));
  for (const s in e) {
    const i = e[s];
    let r;
    re(i) ? "default" in i ? r = tn(
      i.from || s,
      i.default,
      !0
    ) : r = tn(i.from || s) : r = tn(i), /* @__PURE__ */ de(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function gi(e, t, n) {
  ze(
    G(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Zr(e, t, n, s) {
  let i = s.includes(".") ? Hr(n, s) : () => n[s];
  if (pe(e)) {
    const r = t[e];
    ee(r) && vt(i, r);
  } else if (ee(e))
    vt(i, e.bind(n));
  else if (re(e))
    if (G(e))
      e.forEach((r) => Zr(r, t, n, s));
    else {
      const r = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(r) && vt(i, r, e);
    }
}
function Qs(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !n && !s ? a = t : (a = {}, i.length && i.forEach(
    (u) => $n(a, u, o, !0)
  ), $n(a, t, o)), re(t) && r.set(t, a), a;
}
function $n(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && $n(e, r, n, !0), i && i.forEach(
    (o) => $n(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Jl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Jl = {
  data: mi,
  props: vi,
  emits: vi,
  // objects
  methods: Yt,
  computed: Yt,
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
  components: Yt,
  directives: Yt,
  // watch
  watch: Yl,
  // provide / inject
  provide: mi,
  inject: ql
};
function mi(e, t) {
  return t ? e ? function() {
    return me(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ql(e, t) {
  return Yt($s(e), $s(t));
}
function $s(e) {
  if (G(e)) {
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
function Yt(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vi(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    pi(e),
    pi(t ?? {})
  ) : t;
}
function Yl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = we(e[s], t[s]);
  return n;
}
function eo() {
  return {
    app: null,
    config: {
      isNativeTag: rr,
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
let Gl = 0;
function Ql(e, t) {
  return function(s, i = null) {
    ee(s) || (s = me({}, s)), i != null && !re(i) && (i = null);
    const r = eo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = r.app = {
      _uid: Gl++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Oa,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && ee(c.install) ? (o.add(c), c.install(u, ...h)) : ee(c) && (o.add(c), c(u, ...h))), u;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u;
      },
      component(c, h) {
        return h ? (r.components[c] = h, u) : r.components[c];
      },
      directive(c, h) {
        return h ? (r.directives[c] = h, u) : r.directives[c];
      },
      mount(c, h, d) {
        if (!a) {
          const g = u._ceVNode || _e(s, i);
          return g.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), h && t ? t(g, c) : e(g, c, d), a = !0, u._container = c, c.__vue_app__ = u, Zn(g.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (ze(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, u;
      },
      runWithContext(c) {
        const h = It;
        It = u;
        try {
          return c();
        } finally {
          It = h;
        }
      }
    };
    return u;
  };
}
let It = null;
const Xl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${yt(t)}Modifiers`];
function Zl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || fe;
  let i = n;
  const r = t.startsWith("update:"), o = r && Xl(s, t.slice(7));
  o && (o.trim && (i = n.map((c) => pe(c) ? c.trim() : c)), o.number && (i = n.map(Hs)));
  let l, a = s[l = is(t)] || // also try camelCase event handler (#2249)
  s[l = is(Ke(t))];
  !a && r && (a = s[l = is(yt(t))]), a && ze(
    a,
    e,
    6,
    i
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ze(
      u,
      e,
      6,
      i
    );
  }
}
const ea = /* @__PURE__ */ new WeakMap();
function to(e, t, n = !1) {
  const s = n ? ea : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!ee(e)) {
    const a = (u) => {
      const c = to(u, t, !0);
      c && (l = !0, me(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (re(e) && s.set(e, null), null) : (G(r) ? r.forEach((a) => o[a] = null) : me(o, r), re(e) && s.set(e, o), o);
}
function Qn(e, t) {
  return !e || !Dn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, yt(t)) || ie(e, t));
}
function hs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: h,
    data: d,
    setupState: g,
    ctx: m,
    inheritAttrs: w
  } = e, L = On(e);
  let C, T;
  try {
    if (n.shapeFlag & 4) {
      const b = i || s, E = b;
      C = et(
        u.call(
          E,
          b,
          c,
          h,
          g,
          d,
          m
        )
      ), T = l;
    } else {
      const b = t;
      C = et(
        b.length > 1 ? b(
          h,
          { attrs: l, slots: o, emit: a }
        ) : b(
          h,
          null
        )
      ), T = t.props ? l : ta(l);
    }
  } catch (b) {
    on.length = 0, Kn(b, e, 1), C = _e(Te);
  }
  let x = C;
  if (T && w !== !1) {
    const b = Object.keys(T), { shapeFlag: E } = x;
    b.length && E & 7 && (r && b.some(jn) && (T = na(
      T,
      r
    )), x = bt(x, T, !1, !0));
  }
  return n.dirs && (x = bt(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && fn(x, n.transition), C = x, On(L), C;
}
const ta = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Dn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, na = (e, t) => {
  const n = {};
  for (const s in e)
    (!jn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function sa(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, u = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? bi(s, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const d = c[h];
        if (no(o, s, d) && !Qn(u, d))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? bi(s, o, u) : !0 : !!o;
  return !1;
}
function bi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (no(t, e, r) && !Qn(n, r))
      return !0;
  }
  return !1;
}
function no(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && re(s) && re(i) ? !zs(s, i) : s !== i;
}
function ia({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const so = {}, io = () => Object.create(so), ro = (e) => Object.getPrototypeOf(e) === so;
function ra(e, t, n, s = !1) {
  const i = {}, r = io();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), oo(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ fl(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function oa(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ se(i), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let d = c[h];
        if (Qn(e.emitsOptions, d))
          continue;
        const g = t[d];
        if (a)
          if (ie(r, d))
            g !== r[d] && (r[d] = g, u = !0);
          else {
            const m = Ke(d);
            i[m] = ks(
              a,
              l,
              m,
              g,
              e,
              !1
            );
          }
        else
          g !== r[d] && (r[d] = g, u = !0);
      }
    }
  } else {
    oo(e, t, i, r) && (u = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !ie(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = yt(h)) === h || !ie(t, c))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[h] = ks(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !ie(t, h)) && (delete r[h], u = !0);
  }
  u && ct(e.attrs, "set", "");
}
function oo(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Qt(a))
        continue;
      const u = t[a];
      let c;
      i && ie(i, c = Ke(a)) ? !r || !r.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Qn(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ se(n), u = l || fe;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      n[h] = ks(
        i,
        a,
        h,
        u[h],
        e,
        !ie(u, h)
      );
    }
  }
  return o;
}
function ks(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ee(a)) {
        const { propsDefaults: u } = i;
        if (n in u)
          s = u[n];
        else {
          const c = vn(i);
          s = u[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === yt(n)) && (s = !0));
  }
  return s;
}
const la = /* @__PURE__ */ new WeakMap();
function lo(e, t, n = !1) {
  const s = n ? la : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!ee(e)) {
    const c = (h) => {
      a = !0;
      const [d, g] = lo(h, t, !0);
      me(o, d), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return re(e) && s.set(e, Rt), Rt;
  if (G(r))
    for (let c = 0; c < r.length; c++) {
      const h = Ke(r[c]);
      yi(h) && (o[h] = fe);
    }
  else if (r)
    for (const c in r) {
      const h = Ke(c);
      if (yi(h)) {
        const d = r[c], g = o[h] = G(d) || ee(d) ? { type: d } : me({}, d), m = g.type;
        let w = !1, L = !0;
        if (G(m))
          for (let C = 0; C < m.length; ++C) {
            const T = m[C], x = ee(T) && T.name;
            if (x === "Boolean") {
              w = !0;
              break;
            } else
              x === "String" && (L = !1);
          }
        else
          w = ee(m) && m.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = w, g[
          1
          /* shouldCastTrue */
        ] = L, (w || ie(g, "default")) && l.push(h);
      }
    }
  const u = [o, l];
  return re(e) && s.set(e, u), u;
}
function yi(e) {
  return e[0] !== "$" && !Qt(e);
}
const Xs = (e) => e === "_" || e === "_ctx" || e === "$stable", Zs = (e) => G(e) ? e.map(et) : [et(e)], aa = (e, t, n) => {
  if (t._n)
    return t;
  const s = qt((...i) => Zs(t(...i)), n);
  return s._c = !1, s;
}, ao = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Xs(i))
      continue;
    const r = e[i];
    if (ee(r))
      t[i] = aa(i, r, s);
    else if (r != null) {
      const o = Zs(r);
      t[i] = () => o;
    }
  }
}, co = (e, t) => {
  const n = Zs(t);
  e.slots.default = () => n;
}, uo = (e, t, n) => {
  for (const s in t)
    (n || !Xs(s)) && (e[s] = t[s]);
}, ca = (e, t, n) => {
  const s = e.slots = io();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (uo(s, t, n), n && fr(s, "_", i, !0)) : ao(t, s);
  } else
    t && co(e, t);
}, ua = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = fe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : uo(i, t, n) : (r = !t.$stable, ao(t, i)), o = t;
  } else
    t && (co(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Xs(l) && o[l] == null && delete i[l];
}, Ie = ga;
function fa(e) {
  return ha(e);
}
function ha(e, t) {
  const n = zn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: h,
    nextSibling: d,
    setScopeId: g = Ue,
    insertStaticContent: m
  } = e, w = (f, p, y, k = null, A = null, M = null, z = void 0, B = null, D = !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !Et(f, p) && (k = U(f), Se(f, A, M, !0), f = null), p.patchFlag === -2 && (D = !1, p.dynamicChildren = null);
    const { type: O, ref: X, shapeFlag: W } = p;
    switch (O) {
      case Xn:
        L(f, p, y, k);
        break;
      case Te:
        C(f, p, y, k);
        break;
      case ps:
        f == null && T(p, y, k, z);
        break;
      case De:
        _(
          f,
          p,
          y,
          k,
          A,
          M,
          z,
          B,
          D
        );
        break;
      default:
        W & 1 ? E(
          f,
          p,
          y,
          k,
          A,
          M,
          z,
          B,
          D
        ) : W & 6 ? V(
          f,
          p,
          y,
          k,
          A,
          M,
          z,
          B,
          D
        ) : (W & 64 || W & 128) && O.process(
          f,
          p,
          y,
          k,
          A,
          M,
          z,
          B,
          D,
          Nt
        );
    }
    X != null && A ? nn(X, f && f.ref, M, p || f, !p) : X == null && f && f.ref != null && nn(f.ref, null, M, f, !0);
  }, L = (f, p, y, k) => {
    if (f == null)
      s(
        p.el = l(p.children),
        y,
        k
      );
    else {
      const A = p.el = f.el;
      p.children !== f.children && u(A, p.children);
    }
  }, C = (f, p, y, k) => {
    f == null ? s(
      p.el = a(p.children || ""),
      y,
      k
    ) : p.el = f.el;
  }, T = (f, p, y, k) => {
    [f.el, f.anchor] = m(
      f.children,
      p,
      y,
      k,
      f.el,
      f.anchor
    );
  }, x = ({ el: f, anchor: p }, y, k) => {
    let A;
    for (; f && f !== p; )
      A = d(f), s(f, y, k), f = A;
    s(p, y, k);
  }, b = ({ el: f, anchor: p }) => {
    let y;
    for (; f && f !== p; )
      y = d(f), i(f), f = y;
    i(p);
  }, E = (f, p, y, k, A, M, z, B, D) => {
    if (p.type === "svg" ? z = "svg" : p.type === "math" && (z = "mathml"), f == null)
      F(
        p,
        y,
        k,
        A,
        M,
        z,
        B,
        D
      );
    else {
      const O = f.el && f.el._isVueCE ? f.el : null;
      try {
        O && O._beginPatch(), v(
          f,
          p,
          A,
          M,
          z,
          B,
          D
        );
      } finally {
        O && O._endPatch();
      }
    }
  }, F = (f, p, y, k, A, M, z, B) => {
    let D, O;
    const { props: X, shapeFlag: W, transition: q, dirs: Z } = f;
    if (D = f.el = o(
      f.type,
      M,
      X && X.is,
      X
    ), W & 8 ? c(D, f.children) : W & 16 && R(
      f.children,
      D,
      null,
      k,
      A,
      ds(f, M),
      z,
      B
    ), Z && _t(f, null, k, "created"), j(D, f, f.scopeId, z, k), X) {
      for (const ce in X)
        ce !== "value" && !Qt(ce) && r(D, ce, null, X[ce], M, k);
      "value" in X && r(D, "value", null, X.value, M), (O = X.onVnodeBeforeMount) && Qe(O, k, f);
    }
    Z && _t(f, null, k, "beforeMount");
    const ne = da(A, q);
    ne && q.beforeEnter(D), s(D, p, y), ((O = X && X.onVnodeMounted) || ne || Z) && Ie(() => {
      try {
        O && Qe(O, k, f), ne && q.enter(D), Z && _t(f, null, k, "mounted");
      } finally {
      }
    }, A);
  }, j = (f, p, y, k, A) => {
    if (y && g(f, y), k)
      for (let M = 0; M < k.length; M++)
        g(f, k[M]);
    if (A) {
      let M = A.subTree;
      if (p === M || go(M.type) && (M.ssContent === p || M.ssFallback === p)) {
        const z = A.vnode;
        j(
          f,
          z,
          z.scopeId,
          z.slotScopeIds,
          A.parent
        );
      }
    }
  }, R = (f, p, y, k, A, M, z, B, D = 0) => {
    for (let O = D; O < f.length; O++) {
      const X = f[O] = B ? at(f[O]) : et(f[O]);
      w(
        null,
        X,
        p,
        y,
        k,
        A,
        M,
        z,
        B
      );
    }
  }, v = (f, p, y, k, A, M, z) => {
    const B = p.el = f.el;
    let { patchFlag: D, dynamicChildren: O, dirs: X } = p;
    D |= f.patchFlag & 16;
    const W = f.props || fe, q = p.props || fe;
    let Z;
    if (y && Ct(y, !1), (Z = q.onVnodeBeforeUpdate) && Qe(Z, y, p, f), X && _t(p, f, y, "beforeUpdate"), y && Ct(y, !0), // HMR updated, force full diff
    // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    O && (!f.dynamicChildren || f.dynamicChildren.length !== O.length) && (D = 0, z = !1, O = null), (W.innerHTML && q.innerHTML == null || W.textContent && q.textContent == null) && c(B, ""), O ? I(
      f.dynamicChildren,
      O,
      B,
      y,
      k,
      ds(p, A),
      M
    ) : z || te(
      f,
      p,
      B,
      null,
      y,
      k,
      ds(p, A),
      M,
      !1
    ), D > 0) {
      if (D & 16)
        P(B, W, q, y, A);
      else if (D & 2 && W.class !== q.class && r(B, "class", null, q.class, A), D & 4 && r(B, "style", W.style, q.style, A), D & 8) {
        const ne = p.dynamicProps;
        for (let ce = 0; ce < ne.length; ce++) {
          const oe = ne[ce], ve = W[oe], be = q[oe];
          (be !== ve || oe === "value") && r(B, oe, ve, be, A, y);
        }
      }
      D & 1 && f.children !== p.children && c(B, p.children);
    } else
      !z && O == null && P(B, W, q, y, A);
    ((Z = q.onVnodeUpdated) || X) && Ie(() => {
      Z && Qe(Z, y, p, f), X && _t(p, f, y, "updated");
    }, k);
  }, I = (f, p, y, k, A, M, z) => {
    for (let B = 0; B < p.length; B++) {
      const D = f[B], O = p[B], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Et(D, O) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? h(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          y
        )
      );
      w(
        D,
        O,
        X,
        null,
        k,
        A,
        M,
        z,
        !0
      );
    }
  }, P = (f, p, y, k, A) => {
    if (p !== y) {
      if (p !== fe)
        for (const M in p)
          !Qt(M) && !(M in y) && r(
            f,
            M,
            p[M],
            null,
            A,
            k
          );
      for (const M in y) {
        if (Qt(M))
          continue;
        const z = y[M], B = p[M];
        z !== B && M !== "value" && r(f, M, B, z, A, k);
      }
      "value" in y && r(f, "value", p.value, y.value, A);
    }
  }, _ = (f, p, y, k, A, M, z, B, D) => {
    const O = p.el = f ? f.el : l(""), X = p.anchor = f ? f.anchor : l("");
    let { patchFlag: W, dynamicChildren: q, slotScopeIds: Z } = p;
    Z && (B = B ? B.concat(Z) : Z), f == null ? (s(O, y, k), s(X, y, k), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      y,
      X,
      A,
      M,
      z,
      B,
      D
    )) : W > 0 && W & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === q.length ? (I(
      f.dynamicChildren,
      q,
      y,
      A,
      M,
      z,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || A && p === A.subTree) && fo(
      f,
      p,
      !0
      /* shallow */
    )) : te(
      f,
      p,
      y,
      X,
      A,
      M,
      z,
      B,
      D
    );
  }, V = (f, p, y, k, A, M, z, B, D) => {
    p.slotScopeIds = B, f == null ? p.shapeFlag & 512 ? A.ctx.activate(
      p,
      y,
      k,
      z,
      D
    ) : Q(
      p,
      y,
      k,
      A,
      M,
      z,
      D
    ) : K(f, p, D);
  }, Q = (f, p, y, k, A, M, z) => {
    const B = f.component = Sa(
      f,
      k,
      A
    );
    if (qn(f) && (B.ctx.renderer = Nt), wa(B, !1, z), B.asyncDep) {
      if (A && A.registerDep(B, J, z), !f.el) {
        const D = B.subTree = _e(Te);
        C(null, D, p, y), f.placeholder = D.el;
      }
    } else
      J(
        B,
        f,
        p,
        y,
        A,
        M,
        z
      );
  }, K = (f, p, y) => {
    const k = p.component = f.component;
    if (sa(f, p, y))
      if (k.asyncDep && !k.asyncResolved) {
        Y(k, p, y);
        return;
      } else
        k.next = p, k.update();
    else
      p.el = f.el, k.vnode = p;
  }, J = (f, p, y, k, A, M, z) => {
    const B = () => {
      if (f.isMounted) {
        let { next: W, bu: q, u: Z, parent: ne, vnode: ce } = f;
        {
          const Ne = ho(f);
          if (Ne) {
            W && (W.el = ce.el, Y(f, W, z)), Ne.asyncDep.then(() => {
              Ie(() => {
                f.isUnmounted || O();
              }, A);
            });
            return;
          }
        }
        let oe = W, ve;
        Ct(f, !1), W ? (W.el = ce.el, Y(f, W, z)) : W = ce, q && En(q), (ve = W.props && W.props.onVnodeBeforeUpdate) && Qe(ve, ne, W, ce), Ct(f, !0);
        const be = hs(f), We = f.subTree;
        f.subTree = be, w(
          We,
          be,
          // parent may have changed if it's in a teleport
          h(We.el),
          // anchor may have changed if it's in a fragment
          U(We),
          f,
          A,
          M
        ), W.el = be.el, oe === null && ia(f, be.el), Z && Ie(Z, A), (ve = W.props && W.props.onVnodeUpdated) && Ie(
          () => Qe(ve, ne, W, ce),
          A
        );
      } else {
        let W;
        const { el: q, props: Z } = p, { bm: ne, m: ce, parent: oe, root: ve, type: be } = f, We = sn(p);
        if (Ct(f, !1), ne && En(ne), !We && (W = Z && Z.onVnodeBeforeMount) && Qe(W, oe, p), Ct(f, !0), q && ss) {
          const Ne = () => {
            f.subTree = hs(f), ss(
              q,
              f.subTree,
              f,
              A,
              null
            );
          };
          We && be.__asyncHydrate ? be.__asyncHydrate(
            q,
            f,
            Ne
          ) : Ne();
        } else {
          ve.ce && ve.ce._hasShadowRoot() && ve.ce._injectChildStyle(
            be,
            f.parent ? f.parent.type : void 0
          );
          const Ne = f.subTree = hs(f);
          w(
            null,
            Ne,
            y,
            k,
            f,
            A,
            M
          ), p.el = Ne.el;
        }
        if (ce && Ie(ce, A), !We && (W = Z && Z.onVnodeMounted)) {
          const Ne = p;
          Ie(
            () => Qe(W, oe, Ne),
            A
          );
        }
        (p.shapeFlag & 256 || oe && sn(oe.vnode) && oe.vnode.shapeFlag & 256) && f.a && Ie(f.a, A), f.isMounted = !0, p = y = k = null;
      }
    };
    f.scope.on();
    const D = f.effect = new yr(B);
    f.scope.off();
    const O = f.update = D.run.bind(D), X = f.job = D.runIfDirty.bind(D);
    X.i = f, X.id = f.uid, D.scheduler = () => Gs(X), Ct(f, !0), O();
  }, Y = (f, p, y) => {
    p.component = f;
    const k = f.vnode.props;
    f.vnode = p, f.next = null, oa(f, p.props, k, y), ua(f, p.children, y), nt(), ui(f), st();
  }, te = (f, p, y, k, A, M, z, B, D = !1) => {
    const O = f && f.children, X = f ? f.shapeFlag : 0, W = p.children, { patchFlag: q, shapeFlag: Z } = p;
    if (q > 0) {
      if (q & 128) {
        Ye(
          O,
          W,
          y,
          k,
          A,
          M,
          z,
          B,
          D
        );
        return;
      } else if (q & 256) {
        xe(
          O,
          W,
          y,
          k,
          A,
          M,
          z,
          B,
          D
        );
        return;
      }
    }
    Z & 8 ? (X & 16 && N(O, A, M), W !== O && c(y, W)) : X & 16 ? Z & 16 ? Ye(
      O,
      W,
      y,
      k,
      A,
      M,
      z,
      B,
      D
    ) : N(O, A, M, !0) : (X & 8 && c(y, ""), Z & 16 && R(
      W,
      y,
      k,
      A,
      M,
      z,
      B,
      D
    ));
  }, xe = (f, p, y, k, A, M, z, B, D) => {
    f = f || Rt, p = p || Rt;
    const O = f.length, X = p.length, W = Math.min(O, X);
    let q;
    for (q = 0; q < W; q++) {
      const Z = p[q] = D ? at(p[q]) : et(p[q]);
      w(
        f[q],
        Z,
        y,
        null,
        A,
        M,
        z,
        B,
        D
      );
    }
    O > X ? N(
      f,
      A,
      M,
      !0,
      !1,
      W
    ) : R(
      p,
      y,
      k,
      A,
      M,
      z,
      B,
      D,
      W
    );
  }, Ye = (f, p, y, k, A, M, z, B, D) => {
    let O = 0;
    const X = p.length;
    let W = f.length - 1, q = X - 1;
    for (; O <= W && O <= q; ) {
      const Z = f[O], ne = p[O] = D ? at(p[O]) : et(p[O]);
      if (Et(Z, ne))
        w(
          Z,
          ne,
          y,
          null,
          A,
          M,
          z,
          B,
          D
        );
      else
        break;
      O++;
    }
    for (; O <= W && O <= q; ) {
      const Z = f[W], ne = p[q] = D ? at(p[q]) : et(p[q]);
      if (Et(Z, ne))
        w(
          Z,
          ne,
          y,
          null,
          A,
          M,
          z,
          B,
          D
        );
      else
        break;
      W--, q--;
    }
    if (O > W) {
      if (O <= q) {
        const Z = q + 1, ne = Z < X ? p[Z].el : k;
        for (; O <= q; )
          w(
            null,
            p[O] = D ? at(p[O]) : et(p[O]),
            y,
            ne,
            A,
            M,
            z,
            B,
            D
          ), O++;
      }
    } else if (O > q)
      for (; O <= W; )
        Se(f[O], A, M, !0), O++;
    else {
      const Z = O, ne = O, ce = /* @__PURE__ */ new Map();
      for (O = ne; O <= q; O++) {
        const $e = p[O] = D ? at(p[O]) : et(p[O]);
        $e.key != null && ce.set($e.key, O);
      }
      let oe, ve = 0;
      const be = q - ne + 1;
      let We = !1, Ne = 0;
      const Vt = new Array(be);
      for (O = 0; O < be; O++)
        Vt[O] = 0;
      for (O = Z; O <= W; O++) {
        const $e = f[O];
        if (ve >= be) {
          Se($e, A, M, !0);
          continue;
        }
        let Ge;
        if ($e.key != null)
          Ge = ce.get($e.key);
        else
          for (oe = ne; oe <= q; oe++)
            if (Vt[oe - ne] === 0 && Et($e, p[oe])) {
              Ge = oe;
              break;
            }
        Ge === void 0 ? Se($e, A, M, !0) : (Vt[Ge - ne] = O + 1, Ge >= Ne ? Ne = Ge : We = !0, w(
          $e,
          p[Ge],
          y,
          null,
          A,
          M,
          z,
          B,
          D
        ), ve++);
      }
      const si = We ? pa(Vt) : Rt;
      for (oe = si.length - 1, O = be - 1; O >= 0; O--) {
        const $e = ne + O, Ge = p[$e], ii = p[$e + 1], ri = $e + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ii.el || po(ii)
        ) : k;
        Vt[O] === 0 ? w(
          null,
          Ge,
          y,
          ri,
          A,
          M,
          z,
          B,
          D
        ) : We && (oe < 0 || O !== si[oe] ? Oe(Ge, y, ri, 2) : oe--);
      }
    }
  }, Oe = (f, p, y, k, A = null) => {
    const { el: M, type: z, transition: B, children: D, shapeFlag: O } = f;
    if (O & 6) {
      Oe(f.component.subTree, p, y, k);
      return;
    }
    if (O & 128) {
      f.suspense.move(p, y, k);
      return;
    }
    if (O & 64) {
      z.move(f, p, y, Nt);
      return;
    }
    if (z === De) {
      s(M, p, y);
      for (let W = 0; W < D.length; W++)
        Oe(D[W], p, y, k);
      s(f.anchor, p, y);
      return;
    }
    if (z === ps) {
      x(f, p, y);
      return;
    }
    if (k !== 2 && O & 1 && B)
      if (k === 0)
        B.persisted && !M[Re] ? s(M, p, y) : (B.beforeEnter(M), s(M, p, y), Ie(() => B.enter(M), A));
      else {
        const { leave: W, delayLeave: q, afterLeave: Z } = B, ne = () => {
          f.ctx.isUnmounted ? i(M) : s(M, p, y);
        }, ce = () => {
          const oe = M._isLeaving || !!M[Re];
          M._isLeaving && M[Re](
            !0
            /* cancelled */
          ), B.persisted && !oe ? ne() : W(M, () => {
            ne(), Z && Z();
          });
        };
        q ? q(M, ne, ce) : ce();
      }
    else
      s(M, p, y);
  }, Se = (f, p, y, k = !1, A = !1) => {
    const {
      type: M,
      props: z,
      ref: B,
      children: D,
      dynamicChildren: O,
      shapeFlag: X,
      patchFlag: W,
      dirs: q,
      cacheIndex: Z,
      memo: ne
    } = f;
    if (W === -2 && (A = !1), B != null && (nt(), nn(B, null, y, f, !0), st()), Z != null && (p.renderCache[Z] = void 0), X & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const ce = X & 1 && q, oe = !sn(f);
    let ve;
    if (oe && (ve = z && z.onVnodeBeforeUnmount) && Qe(ve, p, f), X & 6)
      Ve(f.component, y, k);
    else {
      if (X & 128) {
        f.suspense.unmount(y, k);
        return;
      }
      ce && _t(f, null, p, "beforeUnmount"), X & 64 ? f.type.remove(
        f,
        p,
        y,
        Nt,
        k
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== De || W > 0 && W & 64) ? N(
        O,
        p,
        y,
        !1,
        !0
      ) : (M === De && W & 384 || !A && X & 16) && N(D, p, y), k && bn(f);
    }
    const be = ne != null && Z == null;
    (oe && (ve = z && z.onVnodeUnmounted) || ce || be) && Ie(() => {
      ve && Qe(ve, p, f), ce && _t(f, null, p, "unmounted"), be && (f.el = null);
    }, y);
  }, bn = (f) => {
    const { type: p, el: y, anchor: k, transition: A } = f;
    if (p === De) {
      Ht(y, k);
      return;
    }
    if (p === ps) {
      b(f);
      return;
    }
    const M = () => {
      i(y), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (f.shapeFlag & 1 && A && !A.persisted) {
      const { leave: z, delayLeave: B } = A, D = () => z(y, M);
      B ? B(f.el, M, D) : D();
    } else
      M();
  }, Ht = (f, p) => {
    let y;
    for (; f !== p; )
      y = d(f), i(f), f = y;
    i(p);
  }, Ve = (f, p, y) => {
    const { bum: k, scope: A, job: M, subTree: z, um: B, m: D, a: O } = f;
    _i(D), _i(O), k && En(k), A.stop(), M && (M.flags |= 8, Se(z, f, p, y)), B && Ie(B, p), Ie(() => {
      f.isUnmounted = !0;
    }, p);
  }, N = (f, p, y, k = !1, A = !1, M = 0) => {
    for (let z = M; z < f.length; z++)
      Se(f[z], p, y, k, A);
  }, U = (f) => {
    if (f.shapeFlag & 6)
      return U(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = d(f.anchor || f.el), y = p && p[Al];
    return y ? d(y) : p;
  };
  let zt = !1;
  const ni = (f, p, y) => {
    let k;
    f == null ? p._vnode && (Se(p._vnode, null, null, !0), k = p._vnode.component) : w(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      y
    ), p._vnode = f, zt || (zt = !0, ui(k), Rr(), zt = !1);
  }, Nt = {
    p: w,
    um: Se,
    m: Oe,
    r: bn,
    mt: Q,
    mc: R,
    pc: te,
    pbc: I,
    n: U,
    o: e
  };
  let ns, ss;
  return t && ([ns, ss] = t(
    Nt
  )), {
    render: ni,
    hydrate: ns,
    createApp: Ql(ni, ns)
  };
}
function ds({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function da(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (G(s) && G(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = at(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && fo(o, l)), l.type === Xn && (l.patchFlag === -1 && (l = i[r] = at(l)), l.el = o.el), l.type === Te && !l.el && (l.el = o.el);
    }
}
function pa(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < u ? r = l + 1 : o = l;
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function ho(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ho(t);
}
function _i(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function po(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? po(t.subTree) : null;
}
const go = (e) => e.__isSuspense;
function ga(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Sl(e);
}
const De = /* @__PURE__ */ Symbol.for("v-fgt"), Xn = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), ps = /* @__PURE__ */ Symbol.for("v-stc"), on = [];
let ke = null;
function le(e = !1) {
  on.push(ke = e ? null : []);
}
function ma() {
  on.pop(), ke = on[on.length - 1] || null;
}
let hn = 1;
function kn(e, t = !1) {
  hn += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function mo(e) {
  return e.dynamicChildren = hn > 0 ? ke || Rt : null, ma(), hn > 0 && ke && ke.push(e), e;
}
function ue(e, t, n, s, i, r) {
  return mo(
    H(
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
function va(e, t, n, s, i) {
  return mo(
    _e(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Et(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vo = ({ key: e }) => e ?? null, Tn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || /* @__PURE__ */ de(e) || ee(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, s = 0, i = null, r = e === De ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vo(t),
    ref: t && Tn(t),
    scopeId: jr,
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
    ctx: Be
  };
  return l ? (Fn(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= pe(n) ? 8 : 16), hn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ke.push(a), a;
}
const _e = ba;
function ba(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Vl) && (e = Te), Ln(e)) {
    const l = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Fn(l, n), hn > 0 && !r && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (Ia(e) && (e = e.__vccOpts), t) {
    t = ya(t);
    let { class: l, style: a } = t;
    l && !pe(l) && (t.class = Tt(l)), re(a) && (/* @__PURE__ */ Un(a) && !G(a) && (a = me({}, a)), t.style = At(a));
  }
  const o = pe(e) ? 1 : go(e) ? 128 : zr(e) ? 64 : re(e) ? 4 : ee(e) ? 2 : 0;
  return H(
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
function ya(e) {
  return e ? /* @__PURE__ */ Un(e) || ro(e) ? me({}, e) : e : null;
}
function bt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, u = t ? _a(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && vo(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? G(r) ? r.concat(Tn(t)) : [r, Tn(t)] : Tn(t)
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
    patchFlag: t && e.type !== De ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
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
  return a && s && fn(
    c,
    a.clone(c)
  ), c;
}
function ot(e = " ", t = 0) {
  return _e(Xn, null, e, t);
}
function Ae(e = "", t = !1) {
  return t ? (le(), va(Te, null, e)) : _e(Te, null, e);
}
function et(e) {
  return e == null || typeof e == "boolean" ? _e(Te) : G(e) ? _e(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ln(e) ? at(e) : _e(Xn, null, String(e));
}
function at(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
}
function Fn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (G(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Fn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !ro(t) ? t._ctx = Be : i === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (s & 65) {
      Fn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Be }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ot(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function _a(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Tt([t.class, s.class]));
      else if (i === "style")
        t.style = At([t.style, s.style]);
      else if (Dn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(G(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !jn(i) && (t[i] = o);
      } else
        i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Qe(e, t, n, s = null) {
  ze(e, t, 7, [
    n,
    s
  ]);
}
const Ca = eo();
let xa = 0;
function Sa(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Ca, r = {
    uid: xa++,
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
    scope: new gr(
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
    propsOptions: lo(s, i),
    emitsOptions: to(s, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Zl.bind(null, r), e.ce && e.ce(r), r;
}
let Me = null;
const ei = () => Me || Be;
let Pn, Ls;
{
  const e = zn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Pn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Me = n
  ), Ls = t(
    "__VUE_SSR_SETTERS__",
    (n) => dn = n
  );
}
const vn = (e) => {
  const t = Me;
  return Pn(e), e.scope.on(), () => {
    e.scope.off(), Pn(t);
  };
}, Ci = () => {
  Me && Me.scope.off(), Pn(null);
};
function bo(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function wa(e, t = !1, n = !1) {
  t && Ls(t);
  const { props: s, children: i } = e.vnode, r = bo(e);
  ra(e, s, r, t), ca(e, i, n || t);
  const o = r ? Ea(e, t) : void 0;
  return t && Ls(!1), o;
}
function Ea(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wl);
  const { setup: s } = n;
  if (s) {
    nt();
    const i = e.setupContext = s.length > 1 ? Ma(e) : null, r = vn(e), o = mn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = lr(o);
    if (st(), r(), (l || e.sp) && !sn(e) && Yr(e), l) {
      if (o.then(Ci, Ci), t)
        return o.then((a) => {
          xi(e, a, t);
        }).catch((a) => {
          Kn(a, e, 0);
        });
      e.asyncDep = o;
    } else
      xi(e, o, t);
  } else
    yo(e, t);
}
function xi(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Lr(t)), yo(e, n);
}
let Si;
function yo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Si && !s.render) {
      const i = s.template || Qs(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, u = me(
          me(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          a
        );
        s.render = Si(i, u);
      }
    }
    e.render = s.render || Ue;
  }
  {
    const i = vn(e);
    nt();
    try {
      Ul(e);
    } finally {
      st(), i();
    }
  }
}
const Ta = {
  get(e, t) {
    return Ce(e, "get", ""), e[t];
  }
};
function Ma(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ta),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lr(Ys(e.exposed)), {
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
function Ia(e) {
  return ee(e) && "__vccOpts" in e;
}
const je = (e, t) => /* @__PURE__ */ bl(e, t, dn);
function Aa(e, t, n) {
  try {
    kn(-1);
    const s = arguments.length;
    return s === 2 ? re(t) && !G(t) ? Ln(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ln(n) && (n = [n]), _e(e, t, n));
  } finally {
    kn(1);
  }
}
const Oa = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fs;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Fs = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _o = Fs ? (e) => Fs.createHTML(e) : (e) => e, Na = "http://www.w3.org/2000/svg", $a = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Ei = lt && /* @__PURE__ */ lt.createElement("template"), ka = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? lt.createElementNS(Na, e) : t === "mathml" ? lt.createElementNS($a, e) : n ? lt.createElement(e, { is: n }) : lt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
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
      Ei.innerHTML = _o(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ei.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
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
}, pt = "transition", Kt = "animation", pn = /* @__PURE__ */ Symbol("_vtc"), Co = {
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
}, La = /* @__PURE__ */ me(
  {},
  Vr,
  Co
), Fa = (e) => (e.displayName = "Transition", e.props = La, e), xn = /* @__PURE__ */ Fa(
  (e, { slots: t }) => Aa($l, Pa(e), t)
), xt = (e, t = []) => {
  G(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ti = (e) => e ? G(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Pa(e) {
  const t = {};
  for (const _ in e)
    _ in Co || (t[_] = e[_]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: i,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: u = o,
    appearToClass: c = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, m = Ra(i), w = m && m[0], L = m && m[1], {
    onBeforeEnter: C,
    onEnter: T,
    onEnterCancelled: x,
    onLeave: b,
    onLeaveCancelled: E,
    onBeforeAppear: F = C,
    onAppear: j = T,
    onAppearCancelled: R = x
  } = t, v = (_, V, Q, K) => {
    _._enterCancelled = K, St(_, V ? c : l), St(_, V ? u : o), Q && Q();
  }, I = (_, V) => {
    _._isLeaving = !1, St(_, h), St(_, g), St(_, d), V && V();
  }, P = (_) => (V, Q) => {
    const K = _ ? j : T, J = () => v(V, _, Q);
    xt(K, [V, J]), Mi(() => {
      St(V, _ ? a : r), rt(V, _ ? c : l), Ti(K) || Ii(V, s, w, J);
    });
  };
  return me(t, {
    onBeforeEnter(_) {
      xt(C, [_]), rt(_, r), rt(_, o);
    },
    onBeforeAppear(_) {
      xt(F, [_]), rt(_, a), rt(_, u);
    },
    onEnter: P(!1),
    onAppear: P(!0),
    onLeave(_, V) {
      _._isLeaving = !0;
      const Q = () => I(_, V);
      rt(_, h), _._enterCancelled ? (rt(_, d), Ni(_)) : (Ni(_), rt(_, d)), Mi(() => {
        _._isLeaving && (St(_, h), rt(_, g), Ti(b) || Ii(_, s, L, Q));
      }), xt(b, [_, Q]);
    },
    onEnterCancelled(_) {
      v(_, !1, void 0, !0), xt(x, [_]);
    },
    onAppearCancelled(_) {
      v(_, !0, void 0, !0), xt(R, [_]);
    },
    onLeaveCancelled(_) {
      I(_), xt(E, [_]);
    }
  });
}
function Ra(e) {
  if (e == null)
    return null;
  if (re(e))
    return [gs(e.enter), gs(e.leave)];
  {
    const t = gs(e);
    return [t, t];
  }
}
function gs(e) {
  return jo(e);
}
function rt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[pn] || (e[pn] = /* @__PURE__ */ new Set())).add(t);
}
function St(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[pn];
  n && (n.delete(t), n.size || (e[pn] = void 0));
}
function Mi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Da = 0;
function Ii(e, t, n, s) {
  const i = e._endId = ++Da, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: a } = ja(e, t);
  if (!o)
    return s();
  const u = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(u, d), r();
  }, d = (g) => {
    g.target === e && ++c >= a && h();
  };
  setTimeout(() => {
    c < a && h();
  }, l + 1), e.addEventListener(u, d);
}
function ja(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), i = s(`${pt}Delay`), r = s(`${pt}Duration`), o = Ai(i, r), l = s(`${Kt}Delay`), a = s(`${Kt}Duration`), u = Ai(l, a);
  let c = null, h = 0, d = 0;
  t === pt ? o > 0 && (c = pt, h = o, d = r.length) : t === Kt ? u > 0 && (c = Kt, h = u, d = a.length) : (h = Math.max(o, u), c = h > 0 ? o > u ? pt : Kt : null, d = c ? c === pt ? r.length : a.length : 0);
  const g = c === pt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${pt}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: d,
    hasTransform: g
  };
}
function Ai(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Oi(n) + Oi(e[s])));
}
function Oi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ni(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ba(e, t, n) {
  const s = e[pn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const $i = /* @__PURE__ */ Symbol("_vod"), Ha = /* @__PURE__ */ Symbol("_vsh"), za = /* @__PURE__ */ Symbol(""), Va = /(?:^|;)\s*display\s*:/;
function Wa(e, t, n) {
  const s = e.style, i = pe(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (pe(t))
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
      l != null ? Ka(
        e,
        o,
        !pe(t) && t ? t[o] : void 0,
        l
      ) || Gt(s, o, l) : Gt(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[za];
      o && (n += ";" + o), s.cssText = n, r = Va.test(n);
    }
  } else
    t && e.removeAttribute("style");
  $i in e && (e[$i] = r ? s.display : "", e[Ha] && (s.display = "none"));
}
const ki = /\s*!important$/;
function Gt(e, t, n) {
  if (G(n))
    n.forEach((s) => Gt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ua(e, t);
    ki.test(n) ? e.setProperty(
      yt(s),
      n.replace(ki, ""),
      "important"
    ) : e[s] = n;
  }
}
const Li = ["Webkit", "Moz", "ms"], ms = {};
function Ua(e, t) {
  const n = ms[t];
  if (n)
    return n;
  let s = Ke(t);
  if (s !== "filter" && s in e)
    return ms[t] = s;
  s = ur(s);
  for (let i = 0; i < Li.length; i++) {
    const r = Li[i] + s;
    if (r in e)
      return ms[t] = r;
  }
  return t;
}
function Ka(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && pe(s) && n === s;
}
const Fi = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, s, i, r = Uo(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fi, t.slice(6, t.length)) : e.setAttributeNS(Fi, t, n) : n == null || r && !hr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : He(n) ? String(n) : n
  );
}
function Ri(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _o(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = hr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Pt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ja(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Di = /* @__PURE__ */ Symbol("_vei");
function qa(e, t, n, s, i = null) {
  const r = e[Di] || (e[Di] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = Qa(t);
    if (s) {
      const u = r[t] = ec(
        s,
        i
      );
      Pt(e, l, u, a);
    } else
      o && (Ja(e, l, o, a), r[t] = void 0);
  }
}
const Ya = /(Once|Passive|Capture)$/, Ga = /^on:?(?:Once|Passive|Capture)$/;
function Qa(e) {
  let t, n;
  for (; (n = e.match(Ya)) && !Ga.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let vs = 0;
const Xa = /* @__PURE__ */ Promise.resolve(), Za = () => vs || (Xa.then(() => vs = 0), vs = Date.now());
function ec(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (G(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const u = o[a];
        u && ze(
          u,
          t,
          5,
          l
        );
      }
    } else
      ze(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Za(), n;
}
const ji = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tc = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Ba(e, s, o) : t === "style" ? Wa(e, n, s) : Dn(t) ? jn(t) || qa(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nc(e, t, s, o)) ? (Ri(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(s))) ? Ri(e, Ke(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Pi(e, t, s, o));
};
function nc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ji(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ji(t) && pe(n) ? !1 : t in e;
}
function sc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ke(t);
  return Array.isArray(n) ? n.some((i) => Ke(i) === s) : Object.keys(n).some((i) => Ke(i) === s);
}
const Bi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (n) => En(t, n) : t;
};
function ic(e) {
  e.target.composing = !0;
}
function Hi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const bs = /* @__PURE__ */ Symbol("_assign");
function zi(e, t, n) {
  return t && (e = e.trim()), n && (e = Hs(e)), e;
}
const ys = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e[bs] = Bi(i);
    const r = s || i.props && i.props.type === "number";
    Pt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[bs](zi(e.value, n, r));
    }), (n || r) && Pt(e, "change", () => {
      e.value = zi(e.value, n, r);
    }), t || (Pt(e, "compositionstart", ic), Pt(e, "compositionend", Hi), Pt(e, "change", Hi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[bs] = Bi(o), e.composing)
      return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Hs(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, rc = ["ctrl", "shift", "alt", "meta"], oc = {
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
  exact: (e, t) => rc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Pe = (e, t) => {
  if (!e)
    return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = oc[t[o]];
      if (l && l(i, t))
        return;
    }
    return e(i, ...r);
  });
}, lc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ac = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (i) => {
    if (!("key" in i))
      return;
    const r = yt(i.key);
    if (t.some(
      (o) => o === r || lc[o] === r
    ))
      return e(i);
  });
}, cc = /* @__PURE__ */ me({ patchProp: tc }, ka);
let Vi;
function uc() {
  return Vi || (Vi = fa(cc));
}
const fc = (...e) => {
  const t = uc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = dc(s);
    if (!i)
      return;
    const r = t._component;
    !ee(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, hc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function hc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function dc(e) {
  return pe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let xo;
const es = (e) => xo = e, So = (
  /* istanbul ignore next */
  Symbol()
);
function Ps(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ln;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ln || (ln = {}));
function pc() {
  const e = mr(!0), t = e.run(() => /* @__PURE__ */ ae({}));
  let n = [], s = [];
  const i = Ys({
    install(r) {
      es(i), i._a = r, r.provide(So, i), r.config.globalProperties.$pinia = i, s.forEach((o) => n.push(o)), s = [];
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
const wo = () => {
};
function Wi(e, t, n, s = wo) {
  e.add(t);
  const i = () => {
    e.delete(t) && s();
  };
  return !n && vr() && br(i), i;
}
function kt(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const gc = (e) => e(), Ui = Symbol(), _s = Symbol();
function Rs(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], i = e[n];
    Ps(i) && Ps(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ de(s) && !/* @__PURE__ */ ft(s) ? e[n] = Rs(i, s) : e[n] = s;
  }
  return e;
}
const mc = (
  /* istanbul ignore next */
  Symbol()
);
function vc(e) {
  return !Ps(e) || !Object.prototype.hasOwnProperty.call(e, mc);
}
const { assign: gt } = Object;
function bc(e) {
  return !!(/* @__PURE__ */ de(e) && e.effect);
}
function yc(e, t, n, s) {
  const { state: i, actions: r, getters: o } = t, l = n.state.value[e];
  let a;
  function u() {
    l || (n.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ pl(n.state.value[e]);
    return gt(c, r, Object.keys(o || {}).reduce((h, d) => (h[d] = Ys(je(() => {
      es(n);
      const g = n._s.get(e);
      return o[d].call(g, g);
    })), h), {}));
  }
  return a = Eo(e, u, t, n, s, !0), a;
}
function Eo(e, t, n = {}, s, i, r) {
  let o;
  const l = gt({ actions: {} }, n), a = { deep: !0 };
  let u, c, h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), g;
  const m = s.state.value[e];
  !r && !m && (s.state.value[e] = {});
  let w;
  function L(R) {
    let v;
    u = c = !1, typeof R == "function" ? (R(s.state.value[e]), v = {
      type: ln.patchFunction,
      storeId: e,
      events: g
    }) : (Rs(s.state.value[e], R), v = {
      type: ln.patchObject,
      payload: R,
      storeId: e,
      events: g
    });
    const I = w = Symbol();
    Jn().then(() => {
      w === I && (u = !0);
    }), c = !0, kt(h, v, s.state.value[e]);
  }
  const C = r ? function() {
    const { state: v } = n, I = v ? v() : {};
    this.$patch((P) => {
      gt(P, I);
    });
  } : (
    /* istanbul ignore next */
    wo
  );
  function T() {
    o.stop(), h.clear(), d.clear(), s._s.delete(e);
  }
  const x = (R, v = "") => {
    if (Ui in R)
      return R[_s] = v, R;
    const I = function() {
      es(s);
      const P = Array.from(arguments), _ = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
      function Q(Y) {
        _.add(Y);
      }
      function K(Y) {
        V.add(Y);
      }
      kt(d, {
        args: P,
        name: I[_s],
        store: E,
        after: Q,
        onError: K
      });
      let J;
      try {
        J = R.apply(this && this.$id === e ? this : E, P);
      } catch (Y) {
        throw kt(V, Y), Y;
      }
      return J instanceof Promise ? J.then((Y) => (kt(_, Y), Y)).catch((Y) => (kt(V, Y), Promise.reject(Y))) : (kt(_, J), J);
    };
    return I[Ui] = !0, I[_s] = v, I;
  }, b = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Wi.bind(null, d),
    $patch: L,
    $reset: C,
    $subscribe(R, v = {}) {
      const I = Wi(h, R, v.detached, () => P()), P = o.run(() => vt(() => s.state.value[e], (_) => {
        (v.flush === "sync" ? c : u) && R({
          storeId: e,
          type: ln.direct,
          events: g
        }, _);
      }, gt({}, a, v)));
      return I;
    },
    $dispose: T
  }, E = /* @__PURE__ */ Wn(b);
  s._s.set(e, E);
  const j = (s._a && s._a.runWithContext || gc)(() => s._e.run(() => (o = mr()).run(() => t({ action: x }))));
  for (const R in j) {
    const v = j[R];
    if (/* @__PURE__ */ de(v) && !bc(v) || /* @__PURE__ */ ft(v))
      r || (m && vc(v) && (/* @__PURE__ */ de(v) ? v.value = m[R] : Rs(v, m[R])), s.state.value[e][R] = v);
    else if (typeof v == "function") {
      const I = x(v, R);
      j[R] = I, l.actions[R] = v;
    }
  }
  return gt(E, j), gt(/* @__PURE__ */ se(E), j), Object.defineProperty(E, "$state", {
    get: () => s.state.value[e],
    set: (R) => {
      L((v) => {
        gt(v, R);
      });
    }
  }), s._p.forEach((R) => {
    gt(E, o.run(() => R({
      store: E,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), m && r && n.hydrate && n.hydrate(E.$state, m), u = !0, c = !0, E;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _c(e, t, n) {
  let s;
  const i = typeof t == "function";
  s = i ? n : t;
  function r(o, l) {
    const a = El();
    return o = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    o || (a ? tn(So, null) : null), o && es(o), o = xo, o._s.has(e) || (i ? Eo(e, t, s, o) : yc(e, s, o)), o._s.get(e);
  }
  return r.$id = e, r;
}
function Cc(e, t) {
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
function ti(e, t, n) {
  if (n.length === 0)
    return t;
  const s = n[0];
  return n.length > 1 && (t = ti(typeof e != "object" || e === null || !Object.prototype.hasOwnProperty.call(e, s) ? Number.isInteger(Number(n[1])) ? [] : {} : e[s], t, Array.prototype.slice.call(n, 1))), Number.isInteger(Number(s)) && Array.isArray(e) ? e.slice()[s] : Object.assign({}, e, { [s]: t });
}
function To(e, t) {
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
  return ti(e, To(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function Mo(e, t) {
  return t.map((n) => n.split(".")).map((n) => [n, Cc(e, n)]).filter((n) => n[1] !== void 0).reduce((n, s) => ti(n, s[1], s[0]), {});
}
function Io(e, t) {
  return t.map((n) => n.split(".")).reduce((n, s) => To(n, s), e);
}
function Ki(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o, beforeHydrate: l, afterHydrate: a }, u, c = !0) {
  try {
    c && (l == null || l(u));
    const h = t.getItem(s);
    if (h) {
      const d = n.deserialize(h), g = r ? Mo(d, r) : d, m = o ? Io(g, o) : g;
      e.$patch(m);
    }
    c && (a == null || a(u));
  } catch (h) {
    i && console.error("[pinia-plugin-persistedstate]", h);
  }
}
function Ji(e, { storage: t, serializer: n, key: s, debug: i, pick: r, omit: o }) {
  try {
    const l = r ? Mo(e, r) : e, a = o ? Io(l, o) : l, u = n.serialize(a);
    t.setItem(s, u);
  } catch (l) {
    i && console.error("[pinia-plugin-persistedstate]", l);
  }
}
function xc(e, t) {
  return typeof e == "function" ? e(t) : typeof e == "string" ? e : t;
}
function Sc(e, t, n) {
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
    o.forEach((a) => {
      Ki(i, a, e, l);
    });
  }, i.$persist = () => {
    o.forEach((l) => {
      Ji(i.$state, l);
    });
  }, o.forEach((l) => {
    Ki(i, l, e), i.$subscribe((a, u) => Ji(u, l), { detached: !0 });
  });
}
function wc(e = {}) {
  return function(t) {
    Sc(t, (n) => {
      const s = xc(n.key, t.store.$id);
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
var Ec = wc();
function Sn(e) {
  if (!e)
    return 0;
  if (typeof e == "number")
    return e;
  const t = new Date(e).getTime();
  return isNaN(t) ? 0 : t;
}
async function Tc(e) {
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
          const a = await $.ajax({
            url: "/api/characters/chats",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ avatar_url: l.avatar })
          });
          (Array.isArray(a) ? a.map((c) => [c, c]) : Object.entries(a || {})).forEach(([c, h]) => {
            const d = typeof h == "string" ? h : h.file_name || c;
            if (!d)
              return;
            let g = 0;
            if (typeof h == "object" && (g = Sn(h.last_mes) || Sn(h.create_date) || Sn(h.date) || 0), !g && typeof d == "string") {
              const m = d.match(/(\d{4}-\d{2}-\d{2})@(\d{2})h(\d{2})m/);
              m && (g = Sn(`${m[1]}T${m[2]}:${m[3]}:00`));
            }
            o.push({
              id: `${l.name}::${d}`,
              // ✨ 创造全局唯一前端ID防冲突
              fileName: d,
              // ✨ 保留真实文件名供API调用
              title: typeof h == "object" && h.name ? h.name : d.replace(/\.jsonl?$/, ""),
              charName: l.name,
              avatarUrl: l.avatar,
              msgCount: h.mes_count ?? h.chat_items ?? null,
              lastActive: g || 1
            });
          });
        } catch {
        }
      })), t.push(...o), e && o.length > 0 && e(o);
    }
    return t;
  } catch (n) {
    return console.error("[ChatLogManager] Fetch Chats Failed:", n), [];
  }
}
async function Ds(e, t, n) {
  try {
    const s = await $.ajax({
      url: "/api/chats/get",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        ch_name: e,
        file_name: n.replace(/\.jsonl?$/, ""),
        avatar_url: t
      })
    }), i = Array.isArray(s) ? s : (s == null ? void 0 : s.chat) || (s == null ? void 0 : s.messages) || Object.values(s || {});
    return Array.isArray(i) ? i.map((r, o) => (r && typeof r == "object" && (r._st_index = o), r)).filter((r) => (r == null ? void 0 : r.mes) !== void 0) : [];
  } catch {
    return [];
  }
}
async function qi(e, t, n) {
  try {
    const s = n.includes(".json") ? n : `${n}.jsonl`;
    return await $.ajax({
      url: "/api/chats/delete",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ chatfile: s, avatar_url: t })
    }), !0;
  } catch {
    return !1;
  }
}
async function Mc(e, t, n) {
  try {
    const s = /* @__PURE__ */ new Date(), i = (a) => a.toString().padStart(2, "0"), r = Math.random().toString(36).substring(2, 8), o = `${s.getFullYear()}-${i(s.getMonth() + 1)}-${i(s.getDate())}@${i(s.getHours())}h${i(s.getMinutes())}m${i(s.getSeconds())}s_${s.getMilliseconds()}ms_${r}`, l = [
      { user_name: "You", character_name: n, create_date: Date.now(), chat_metadata: {} },
      ...e
    ];
    return await $.ajax({
      url: "/api/chats/save",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ ch_name: n, file_name: o, chat: l, avatar_url: t })
    }), !0;
  } catch {
    return !1;
  }
}
const wn = /* @__PURE__ */ new Map();
let Yi = 0;
const Ao = "clm_meta_cache_v1";
function Ic() {
  try {
    return JSON.parse(localStorage.getItem(Ao) || "{}");
  } catch {
    return {};
  }
}
function Gi(e) {
  localStorage.setItem(Ao, JSON.stringify(e));
}
const Oo = /* @__PURE__ */ _c("chatLogManager", () => {
  const e = /* @__PURE__ */ en([]), t = /* @__PURE__ */ en([]), n = /* @__PURE__ */ en([]), s = /* @__PURE__ */ ae(null), i = /* @__PURE__ */ ae(/* @__PURE__ */ new Set()), r = /* @__PURE__ */ ae(""), o = /* @__PURE__ */ ae(!1), l = /* @__PURE__ */ ae(!1), a = /* @__PURE__ */ ae(!1), u = /* @__PURE__ */ ae([]), c = je(() => {
    if (r.value.trim())
      return n.value.map((v) => ({
        type: "chat",
        id: v.id,
        charName: v.charName,
        chat: e.value.find((I) => I.id === v.chatId),
        searchHit: { content: v.content }
      }));
    const F = [], j = /* @__PURE__ */ new Map();
    e.value.forEach((v) => {
      const I = v.charName || "未知角色";
      j.has(I) || j.set(I, { avatarUrl: v.avatarUrl, chats: [], folderTime: 0 });
      const P = j.get(I);
      P.chats.push(v), v.lastActive > P.folderTime && (P.folderTime = v.lastActive);
    });
    const R = Array.from(j.entries()).sort((v, I) => I[1].folderTime - v[1].folderTime);
    for (const [v, I] of R)
      F.push({ type: "header", id: `header_${v}`, charName: v, avatarUrl: I.avatarUrl, chatCount: I.chats.length }), i.value.has(v) && [...I.chats].sort((_, V) => V.lastActive - _.lastActive).forEach((_) => F.push({ type: "chat", id: `chat_${_.id}`, charName: v, chat: _ }));
    return F;
  }), h = je(() => e.value.length === 0 ? !1 : r.value.trim() && n.value.length > 0 ? n.value.every((F) => u.value.includes(F.chatId)) : u.value.length === e.value.length), d = Ic();
  async function g() {
    if (!o.value) {
      o.value = !0;
      try {
        let F = [];
        await Tc((v) => {
          const I = v.map((P) => {
            let _ = P.msgCount, V = P.lastActive;
            const Q = d[P.id];
            return Q && ((_ === null || _ === 0 || _ !== Q.msgCount) && (_ = Q.msgCount), Q.lastActive > V && (V = Q.lastActive)), { ...P, msgCount: _, lastActive: V };
          });
          F = F.concat(I);
        }), e.value = F;
        const j = new Set(F.map((v) => v.id));
        let R = !1;
        for (const v in d)
          j.has(v) || (delete d[v], wn.delete(v), R = !0);
        R && Gi(d), m();
      } finally {
        o.value = !1;
      }
    }
  }
  async function m() {
    if (l.value)
      return;
    l.value = !0;
    const F = e.value.filter((v) => {
      const I = wn.has(v.id), P = d[v.id];
      return !!(!I || P && v.lastActive > P.lastActive);
    });
    let j = !1;
    const R = 5;
    for (let v = 0; v < F.length && l.value; v += R) {
      let I = !1;
      const P = F.slice(v, v + R);
      await Promise.all(P.map(async (_) => {
        const V = await Ds(_.charName, _.avatarUrl, _.fileName);
        let Q = !1;
        if (V.length > 0 && _.msgCount !== V.length && (_.msgCount = V.length, Q = !0), V.length > 0) {
          const K = V[V.length - 1], J = K.send_date || K.date || K.time;
          if (J) {
            const Y = typeof J == "number" ? J : new Date(J).getTime();
            !isNaN(Y) && Y > 0 && Y > _.lastActive && (_.lastActive = Y, Q = !0);
          }
        }
        wn.set(_.id, V.map((K, J) => ({
          id: `${_.id}_${J}`,
          chatId: _.id,
          charName: _.charName,
          content: K.mes || ""
        }))), (Q || !d[_.id]) && (d[_.id] = { msgCount: _.msgCount, lastActive: _.lastActive }, j = !0, I = !0);
      })), I && Is(e), await new Promise((_) => setTimeout(_, 10));
    }
    j && Gi(d), l.value = !1;
  }
  function w() {
    l.value = !1;
  }
  function L(F) {
    r.value = F;
    const j = F.trim().toLowerCase();
    if (!j) {
      n.value = [];
      return;
    }
    const R = [];
    for (const v of wn.values())
      for (let I = 0; I < v.length; I++)
        v[I].content.toLowerCase().includes(j) && R.push(v[I]);
    n.value = R;
  }
  async function C(F) {
    const j = ++Yi;
    s.value = F.id, t.value = [];
    const R = await Ds(F.charName, F.avatarUrl, F.fileName);
    if (j === Yi) {
      for (let v = 0; v < R.length; v++)
        R[v]._originalFloor = v, R[v]._srcChatId = F.id;
      t.value = R;
    }
  }
  function T(F) {
    i.value.has(F) ? i.value.delete(F) : i.value.add(F);
  }
  function x() {
    a.value = !a.value, a.value || (u.value = []);
  }
  function b(F) {
    const j = u.value.indexOf(F);
    j > -1 ? u.value.splice(j, 1) : u.value.push(F);
  }
  function E() {
    if (h.value)
      u.value = [];
    else if (r.value.trim()) {
      const F = n.value.map((j) => j.chatId);
      u.value = Array.from(/* @__PURE__ */ new Set([...u.value, ...F]));
    } else
      u.value = e.value.map((F) => F.id);
  }
  return {
    allChats: e,
    displayRows: c,
    currentChatId: s,
    currentMessages: t,
    expandedChars: i,
    searchQuery: r,
    isIndexing: l,
    isBatchMode: a,
    selectedChatIds: u,
    isAllSelected: h,
    fetchChats: g,
    loadMessages: C,
    toggleChar: T,
    performSearch: L,
    toggleBatchMode: x,
    toggleSelection: b,
    toggleSelectAll: E,
    stopIndexing: w
  };
});
function Ac(e, t, n) {
  const s = new Array(e);
  return new Proxy(s, {
    get(i, r, o) {
      if (typeof r == "string") {
        const l = r.charCodeAt(0);
        if (l >= 48 && l <= 57) {
          const a = +r;
          if (Number.isInteger(a) && a >= 0 && a < e) {
            let u = i[a];
            if (!u) {
              const c = t[a * 2];
              u = i[a] = {
                index: a,
                key: n(a),
                start: c,
                size: t[a * 2 + 1],
                end: c + t[a * 2 + 1],
                lane: 0
              };
            }
            return u;
          }
        }
        if (r === "length")
          return e;
      }
      return Reflect.get(i, r, o);
    }
  });
}
function Lt(e, t, n) {
  let s = n.initialDeps ?? [], i, r = !0;
  function o() {
    const l = e();
    return (l.length !== s.length || l.some((u, c) => s[c] !== u)) && (s = l, i = t(...l), n != null && n.onChange && !(r && n.skipInitialOnChange) && n.onChange(i), r = !1), i;
  }
  return o.updateDeps = (l) => {
    s = l;
  }, o;
}
function Qi(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
const Oc = (e, t) => Math.abs(e - t) < 1.01, Nc = (e, t, n) => {
  let s;
  return function(...i) {
    e.clearTimeout(s), s = e.setTimeout(() => t.apply(this, i), n);
  };
};
let Jt;
const Cs = () => {
  if (Jt !== void 0)
    return Jt;
  if (typeof navigator > "u")
    return Jt = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent))
    return Jt = !0;
  const e = navigator.maxTouchPoints;
  return Jt = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Xi = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, $c = (e) => e, kc = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, i = new Array(s);
  for (let r = 0; r < s; r++)
    i[r] = t + r;
  return i;
}, Lc = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const i = (o) => {
    const { width: l, height: a } = o;
    t({ width: Math.round(l), height: Math.round(a) });
  };
  if (i(Xi(n)), !s.ResizeObserver)
    return () => {
    };
  const r = new s.ResizeObserver((o) => {
    const l = () => {
      const a = o[0];
      if (a != null && a.borderBoxSize) {
        const u = a.borderBoxSize[0];
        if (u) {
          i({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      i(Xi(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return r.observe(n, { box: "border-box" }), () => {
    r.unobserve(n);
  };
}, Rn = {
  passive: !0
}, Fc = typeof window > "u" ? !0 : "onscrollend" in window, Pc = (e, t, n) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const i = e.targetWindow;
  if (!i)
    return;
  const r = e.options.useScrollendEvent && Fc;
  let o = 0;
  const l = r ? null : Nc(
    i,
    () => t(o, !1),
    e.options.isScrollingResetDelay
  ), a = (h) => () => {
    o = n(s), l == null || l(), t(o, h);
  }, u = a(!0), c = a(!1);
  return s.addEventListener("scroll", u, Rn), r && s.addEventListener("scrollend", c, Rn), () => {
    s.removeEventListener("scroll", u), r && s.removeEventListener("scrollend", c);
  };
}, Rc = (e, t) => Pc(e, t, (n) => {
  const { horizontal: s, isRtl: i } = e.options;
  return s ? n.scrollLeft * (i && -1 || 1) : n.scrollTop;
}), Dc = (e, t, n) => {
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
}, jc = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var i, r;
  (r = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null || r.call(i, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, Bc = jc;
class Hc {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var n, s, i;
      return ((i = (s = (n = this.targetWindow) == null ? void 0 : n.performance) == null ? void 0 : s.now) == null ? void 0 : i.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const s = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((r) => {
          const o = () => {
            const l = r.target, a = this.indexFromElement(l);
            if (!l.isConnected) {
              this.observer.unobserve(l);
              for (const [u, c] of this.elementsCache)
                if (c === l) {
                  this.elementsCache.delete(u);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(a) && this.resizeItem(
              a,
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
        getItemKey: $c,
        rangeExtractor: kc,
        onChange: () => {
        },
        measureElement: Dc,
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
        const g = n[d];
        g !== void 0 && (r[d] = g);
      }
      const o = this.options;
      let l = null, a = null, u = !1;
      if (o !== void 0 && o.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const d = o.count, g = r.count, m = this.getMeasurements(), w = d > 0 ? ((s = m[0]) == null ? void 0 : s.key) ?? o.getItemKey(0) : null, L = d > 0 ? ((i = m[d - 1]) == null ? void 0 : i.key) ?? o.getItemKey(d - 1) : null;
        if (g !== d || d > 0 && g > 0 && (r.getItemKey(0) !== w || r.getItemKey(g - 1) !== L)) {
          u = !0;
          const x = d > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? m[0] : null;
          x && (l = [x.key, this.getScrollOffset() - x.start]);
          const b = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          b && g > d && this.isAtEnd(o.scrollEndThreshold) && (d === 0 || r.getItemKey(g - 1) !== L) && (a = b);
        }
      }
      this.options = r, u && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let c = !1, h = 0;
      if (l && this.scrollOffset !== null) {
        const [d, g] = l, m = this.getMeasurements(), { count: w, getItemKey: L } = this.options;
        let C = 0;
        for (; C < w && L(C) !== d; )
          C++;
        if (C < w) {
          const T = m[C];
          if (T) {
            const x = T.start + g;
            x !== this.scrollOffset && (h = x - this.scrollOffset, this.scrollOffset = x, c = !0);
          }
        }
      }
      (c || a) && (this.pendingScrollAnchor = [
        c ? l[0] : null,
        c ? l[1] : 0,
        a,
        h
      ]);
    }, this.notify = (n) => {
      var s, i;
      (i = (s = this.options).onChange) == null || i.call(s, this, n);
    }, this.maybeNotify = Lt(
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
            this._iosTouching = !1, !(!Cs() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
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
        const [r, o, l, a] = i;
        r !== null && !l && (Cs() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? a !== 0 && (this._iosDeferredAdjustment += a) : this._scrollToOffset(this.getScrollOffset(), {
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
        const a = r.get(
          l.lane
        );
        if (a == null || l.end > a.end ? r.set(l.lane, l) : l.end < a.end && i.set(l.lane, !0), i.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((o, l) => o.end === l.end ? o.index - l.index : o.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = Lt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode
      ],
      (n, s, i, r, o, l, a) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = !0), this.prevLanes = l, this.pendingMin = null, {
        count: n,
        paddingStart: s,
        scrollMargin: i,
        getItemKey: r,
        enabled: o,
        lanes: l,
        laneAssignmentMode: a
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Lt(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: n,
        paddingStart: s,
        scrollMargin: i,
        getItemKey: r,
        enabled: o,
        lanes: l,
        laneAssignmentMode: a
      }, u) => {
        const c = this.itemSizeCache;
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const m of this.laneAssignments.keys())
            m >= n && this.laneAssignments.delete(m);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((m) => {
          this.itemSizeCache.set(m.key, m.size);
        }));
        const h = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), l === 1) {
          const m = this.options.gap, w = n * 2;
          let L = this._flatMeasurements;
          if (!L || L.length < w) {
            const x = new Float64Array(w);
            L && h > 0 && x.set(L.subarray(0, h * 2)), L = x, this._flatMeasurements = L;
          }
          let C;
          if (h === 0)
            C = s + i;
          else {
            const x = h - 1;
            C = L[x * 2] + L[x * 2 + 1] + m;
          }
          for (let x = h; x < n; x++) {
            const b = r(x), E = c.get(b), F = typeof E == "number" ? E : this.options.estimateSize(x);
            L[x * 2] = C, L[x * 2 + 1] = F, C += F + m;
          }
          const T = Ac(n, L, r);
          return this.measurementsCache = T, T;
        }
        const d = this.measurementsCache.slice(0, h), g = new Array(l).fill(
          void 0
        );
        for (let m = 0; m < h; m++) {
          const w = d[m];
          w && (g[w.lane] = m);
        }
        for (let m = h; m < n; m++) {
          const w = r(m), L = this.laneAssignments.get(m);
          let C, T;
          const x = a === "estimate" || c.has(w);
          if (L !== void 0 && this.options.lanes > 1) {
            C = L;
            const j = g[C], R = j !== void 0 ? d[j] : void 0;
            T = R ? R.end + this.options.gap : s + i;
          } else {
            const j = this.options.lanes === 1 ? d[m - 1] : this.getFurthestMeasurement(d, m);
            T = j ? j.end + this.options.gap : s + i, C = j ? j.lane : m % this.options.lanes, this.options.lanes > 1 && x && this.laneAssignments.set(m, C);
          }
          const b = c.get(w), E = typeof b == "number" ? b : this.options.estimateSize(m), F = T + E;
          d[m] = {
            index: m,
            start: T,
            size: E,
            end: F,
            key: w,
            lane: C
          }, g[C] = m;
        }
        return this.measurementsCache = d, d;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Lt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, s, i, r) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = Vc(
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
    ), this.getVirtualIndexes = Lt(
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
      let o, l, a;
      const u = this._flatMeasurements;
      if (this.options.lanes === 1 && u !== null)
        a = this.options.getItemKey(n), l = u[n * 2], o = u[n * 2 + 1];
      else {
        const d = this.measurementsCache[n];
        if (!d)
          return;
        a = d.key, l = d.start, o = d.size;
      }
      const c = this.itemSizeCache.get(a) ?? o, h = s - c;
      if (h !== 0) {
        const d = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, g = d ? this.getTotalSize() : 0, m = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[n] ?? {
            index: n,
            key: a,
            start: l,
            size: o,
            end: l + o,
            lane: 0
          },
          h,
          this
        ) : (
          // Default: adjust when the resize is an above-viewport item.
          // First measurement (!has(key)): always adjust — the item
          // has never been sized, so the estimate→actual delta must
          // be compensated regardless of scroll direction.
          // Re-measurement (has(key)): skip during backward scroll
          // to avoid the "items jump while scrolling up" cascade.
          l < this.getScrollOffset() + this.scrollAdjustments && (!this.itemSizeCache.has(a) || this.scrollDirection !== "backward")
        ));
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(a, s), this.itemSizeCacheVersion++, d ? this.applyScrollAdjustment(this.getTotalSize() - g) : m && this.applyScrollAdjustment(h), this.notify(!1);
      }
    }, this.getVirtualItems = Lt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, s) => {
        const i = [];
        for (let r = 0, o = n.length; r < o; r++) {
          const l = n[r], a = s[l];
          i.push(a);
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
      const i = this._flatMeasurements, r = this.options.lanes === 1 && i != null, o = No(
        0,
        s.length - 1,
        r ? (l) => i[l * 2] : (l) => Qi(s[l]).start,
        n
      );
      return Qi(s[o]);
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
      const [o, l] = r, a = this.now();
      this.scrollState = {
        index: n,
        align: l,
        behavior: i,
        startedAt: a,
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
    t !== 0 && (Cs() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += t : (this._scrollToOffset(this.getScrollOffset(), {
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
    if (!o && Oc(i, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== i && this._scrollToOffset(i, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, o) {
      const l = this.getSize() || 600, a = Math.abs(i - this.getScrollOffset()), u = this.scrollState.behavior === "smooth" && a > l;
      this.scrollState.lastTargetOffset = i, u || (this.scrollState.behavior = "auto"), this._scrollToOffset(i, {
        adjustments: void 0,
        behavior: u ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const No = (e, t, n, s) => {
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
function zc(e, t, n) {
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
function Vc(e, t, n, s, i) {
  const r = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: r };
  if (s === 1 && i !== null) {
    const u = zc(
      i,
      r,
      n
    );
    let c = u;
    const h = n + t;
    for (; c < r && i[c * 2] + i[c * 2 + 1] < h; )
      c++;
    return { startIndex: u, endIndex: c };
  }
  let l = No(0, r, (u) => e[u].start, n), a = l;
  if (s === 1)
    for (; a < r && e[a].end < n + t; )
      a++;
  else if (s > 1) {
    const u = Array(s).fill(0);
    for (; a < r && u.some((h) => h < n + t); ) {
      const h = e[a];
      u[h.lane] = h.end, a++;
    }
    const c = Array(s).fill(n + t);
    for (; l >= 0 && c.some((h) => h >= n); ) {
      const h = e[l];
      c[h.lane] = h.start, l--;
    }
    l = Math.max(0, l - l % s), a = Math.min(r, a + (s - 1 - a % s));
  }
  return { startIndex: l, endIndex: a };
}
function Wc(e) {
  const t = new Hc(S(e)), n = /* @__PURE__ */ en(t), s = t._didMount();
  return vt(
    () => S(e).getScrollElement(),
    (i) => {
      i && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), vt(
    () => S(e),
    (i) => {
      t.setOptions({
        ...i,
        onChange: (r, o) => {
          var l;
          Is(n), (l = i.onChange) == null || l.call(i, r, o);
        }
      }), t._willUpdate(), Is(n);
    },
    {
      immediate: !0
    }
  ), br(s), n;
}
function Uc(e) {
  return Wc(
    je(() => ({
      observeElementRect: Lc,
      observeElementOffset: Rc,
      scrollToFn: Bc,
      ...S(e)
    }))
  );
}
const Kc = ["data-index"], Jc = ["onClick"], qc = { class: "char-info" }, Yc = { class: "folder-icon" }, Gc = { class: "char-name" }, Qc = { class: "chat-badge" }, Xc = ["onClick"], Zc = ["checked", "onClick"], eu = { class: "chat-item-content" }, tu = { class: "chat-title" }, nu = {
  key: 0,
  class: "search-tag"
}, su = {
  key: 0,
  class: "hit-content"
}, iu = {
  key: 1,
  class: "chat-meta"
}, ru = {
  key: 0,
  class: "empty-state"
}, ou = /* @__PURE__ */ qr({
  __name: "SessionList",
  setup(e) {
    const t = Oo(), n = /* @__PURE__ */ ae(null), s = je(() => t.displayRows), i = je(() => ({
      count: s.value.length,
      getScrollElement: () => n.value,
      estimateSize: () => 60,
      overscan: 10
    })), r = Uc(i), o = (a) => s.value[a], l = (a) => {
      const u = o(a);
      u.type === "chat" && u.chat && (t.isBatchMode ? t.toggleSelection(u.chat.id) : t.loadMessages(u.chat));
    };
    return (a, u) => (le(), ue("div", {
      ref_key: "containerRef",
      ref: n,
      class: "virtual-list-container"
    }, [
      H("div", {
        style: At({ height: S(r).getTotalSize() + "px", position: "relative", width: "100%" })
      }, [
        (le(!0), ue(De, null, Xr(S(r).getVirtualItems(), (c) => {
          var h, d, g, m, w, L, C, T;
          return le(), ue("div", {
            key: c.index,
            class: "virtual-row",
            style: At({ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${c.start}px)` }),
            ref_for: !0,
            ref: S(r).measureElement,
            "data-index": c.index
          }, [
            o(c.index).type === "header" ? (le(), ue("div", {
              key: 0,
              class: "char-header",
              onClick: (x) => S(t).toggleChar(o(c.index).charName)
            }, [
              H("div", qc, [
                H("span", Yc, ge(S(t).expandedChars.has(o(c.index).charName) ? "📂" : "📁"), 1),
                H("span", Gc, ge(o(c.index).charName), 1)
              ]),
              H("span", Qc, ge(o(c.index).chatCount), 1)
            ], 8, Jc)) : (le(), ue("div", {
              key: 1,
              class: Tt(["chat-item", {
                active: !S(t).isBatchMode && S(t).currentChatId === ((h = o(c.index).chat) == null ? void 0 : h.id),
                selected: S(t).isBatchMode && S(t).selectedChatIds.includes(((d = o(c.index).chat) == null ? void 0 : d.id) || "")
              }]),
              onClick: (x) => l(c.index)
            }, [
              S(t).isBatchMode ? (le(), ue("input", {
                key: 0,
                type: "checkbox",
                class: "batch-checkbox",
                checked: S(t).selectedChatIds.includes(((g = o(c.index).chat) == null ? void 0 : g.id) || ""),
                onClick: Pe((x) => l(c.index), ["stop"])
              }, null, 8, Zc)) : Ae("", !0),
              H("div", eu, [
                H("div", tu, [
                  S(t).searchQuery ? (le(), ue("span", nu, "[" + ge(o(c.index).charName) + "]", 1)) : Ae("", !0),
                  ot(" " + ge(((m = o(c.index).chat) == null ? void 0 : m.title) || "未命名会话"), 1)
                ]),
                S(t).searchQuery ? (le(), ue("div", su, ' "' + ge((w = o(c.index).searchHit) == null ? void 0 : w.content) + '" ', 1)) : (le(), ue("div", iu, " 消息数: " + ge(((L = o(c.index).chat) == null ? void 0 : L.msgCount) === null || ((C = o(c.index).chat) == null ? void 0 : C.msgCount) === void 0 ? "..." : (T = o(c.index).chat) == null ? void 0 : T.msgCount), 1))
              ])
            ], 10, Xc))
          ], 12, Kc);
        }), 128))
      ], 4),
      s.value.length === 0 ? (le(), ue("div", ru, "暂无匹配记录")) : Ae("", !0)
    ], 512));
  }
});
const $o = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, lu = /* @__PURE__ */ $o(ou, [["__scopeId", "data-v-893b6a66"]]);
function au() {
  const e = /* @__PURE__ */ ae(!0), t = /* @__PURE__ */ ae(!1), n = /* @__PURE__ */ ae(!1), s = /* @__PURE__ */ ae("chat"), i = /* @__PURE__ */ ae(!1), r = /* @__PURE__ */ ae(0), o = /* @__PURE__ */ ae(0), l = /* @__PURE__ */ ae(!1);
  return {
    isVisible: e,
    showToolsMenu: t,
    showExportMenu: n,
    exportTarget: s,
    showRangeExportModal: i,
    rangeStart: r,
    rangeEnd: o,
    showJumpFloorModal: l,
    targetFloor: /* @__PURE__ */ ae(0),
    closeInternalModals: () => {
      t.value = !1, n.value = !1, i.value = !1, l.value = !1, s.value = "chat";
    }
  };
}
class cu {
  get win() {
    return window;
  }
  get context() {
    var t, n;
    try {
      if (typeof ((t = this.win.SillyTavern) == null ? void 0 : t.getContext) == "function")
        return this.win.SillyTavern.getContext();
      if (this.win.context)
        return this.win.context;
      if ((n = this.win.ST) != null && n.context)
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
  selectCharacterById(t) {
    if (typeof this.context.selectCharacter == "function")
      return this.context.selectCharacter(t), !0;
    if (typeof this.win.selectCharacterById == "function")
      return this.win.selectCharacterById(t), !0;
    const n = document.querySelector(`.character_select[chid="${t}"], [data-character-id="${t}"], .character-item[data-id="${t}"]`);
    return n ? (n.click(), !0) : !1;
  }
  clickHistoryItem(t) {
    const n = t.replace(/\.jsonl?$/, ""), s = `${n}.jsonl`, i = [
      `[chatfile="${s}"]`,
      `[chatfile="${n}"]`,
      `[file_name="${n}"]`,
      `[data-chat-file="${s}"]`
    ];
    for (const o of i) {
      const l = document.querySelector(o);
      if (l)
        return l.click(), !0;
    }
    const r = document.querySelectorAll('.past_chat_item, .chat-history-item, [class*="history-item"]');
    for (let o = 0; o < r.length; o++)
      if ((r[o].textContent || "").includes(n))
        return r[o].click(), !0;
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
  findCharacterElement(t, n) {
    var a;
    const s = (u) => (u || "").replace(/\s+/g, "").toLowerCase(), i = s(t), r = n && decodeURIComponent(n).replace(/\\/g, "/").split("/").pop() || "", o = [".character_select", ".character-select", "[data-character-id]", ".ch_card", ".character-item"];
    let l = null;
    for (const u of o) {
      const c = document.querySelectorAll(u);
      if (c.length) {
        l = c;
        break;
      }
    }
    if (!l)
      return { element: null, index: -1 };
    for (const u of Array.from(l)) {
      const c = s(u.textContent || "") + s(u.getAttribute("ch_name") || "") + s(u.getAttribute("name") || ""), h = ((a = u.querySelector("img")) == null ? void 0 : a.getAttribute("src")) || u.getAttribute("avatar") || "", d = h && decodeURIComponent(h).replace(/\\/g, "/").split("/").pop() || "";
      if (c.includes(i) || r && d && (d.includes(r) || r.includes(d))) {
        const g = parseInt(u.getAttribute("chid") || u.getAttribute("data-character-id") || u.getAttribute("data-id") || "-1", 10);
        return { element: u, index: isNaN(g) ? -1 : g };
      }
    }
    return { element: null, index: -1 };
  }
  findMessageElement(t, n, s, i) {
    const r = document.getElementById("chat") || document.body, o = Array.from(r.querySelectorAll(".mes, [mesid]")).filter((c) => !c.closest(".log-manager-modal")), l = t.mesid ?? t.id;
    if (l != null)
      for (let c = o.length - 1; c >= 0; c--) {
        const h = o[c];
        if (h.dataset.mesid === String(l) || h.getAttribute("mesid") === String(l))
          return h;
      }
    if (!s && n >= 0)
      for (let c = o.length - 1; c >= 0; c--) {
        const h = o[c];
        if (parseInt(h.dataset.index || h.getAttribute("mesid") || "-1", 10) === n)
          return h;
      }
    const a = (c) => (c || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
    let u = a(t.mes);
    if (u.length > 40 && (u = u.substring(0, 40)), u.length >= 4)
      for (let c = o.length - 1; c >= 0; c--) {
        const h = o[c], d = h.querySelector(".mes_text, .message-text, .content") || h;
        if (a(d.textContent || "").includes(u))
          return h;
      }
    return null;
  }
  resetCurrentCharacter() {
    this.context.characterId !== void 0 && (this.context.characterId = -1), this.win.this_chid !== void 0 && (this.win.this_chid = -1);
  }
}
const uu = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), xs = (e) => (e || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), fu = (e) => (e || "").replace(/<[^>]+>/g, ""), Zi = (e) => {
  const t = (e || "").match(/\d+/g);
  return t && t.length >= 3 ? parseInt(t[0], 10) * 0.299 + parseInt(t[1], 10) * 0.587 + parseInt(t[2], 10) * 0.114 : 128;
};
function Ss() {
  const e = document.documentElement;
  if (e.classList.contains("dark"))
    return !0;
  if (e.classList.contains("light"))
    return !1;
  const n = (getComputedStyle(document.body).backgroundColor || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (n) {
    const s = parseInt(n[1], 10), i = parseInt(n[2], 10), r = parseInt(n[3], 10);
    return s * 0.299 + i * 0.587 + r * 0.114 < 128;
  }
  return !0;
}
function hu(e) {
  const t = /* @__PURE__ */ ae(Ss()), n = () => {
    const a = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--clm-vh", `${a}px`);
  }, s = () => {
    window.setTimeout(n, 300);
  };
  let i = null, r = null, o = null;
  const l = () => {
    i !== null && cancelAnimationFrame(i), i = requestAnimationFrame(() => {
      if (!e.value)
        return;
      const a = getComputedStyle(document.body);
      let u = a.backgroundColor;
      (!u || u === "rgba(0, 0, 0, 0)" || u === "transparent") && (u = t.value ? "#1e1e1e" : "#f5f5f5");
      let c = a.color;
      const h = document.querySelector(".mes_text, .message-text");
      if (h) {
        const m = getComputedStyle(h).color;
        m && m !== "rgba(0, 0, 0, 0)" && m !== "transparent" && (c = m);
      }
      const d = Zi(u), g = Zi(c);
      50 > Math.abs(d - g) && (c = d < 128 ? "#E8E8E8" : "#33312F"), e.value.style.backgroundColor = u, e.value.style.color = c, e.value.style.setProperty("--dynamic-solid-bg", u);
    });
  };
  return Gn(async () => {
    n(), window.addEventListener("resize", n), window.addEventListener("orientationchange", s), await Jn(), l(), r = new MutationObserver(() => {
      const u = Ss();
      u !== t.value && (t.value = u), l();
    }), r.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class", "style"]
    }), r.observe(document.body, {
      attributes: !0,
      attributeFilter: ["class", "style"]
    });
    const a = window.matchMedia("(prefers-color-scheme: dark)");
    o = () => {
      const u = Ss();
      u !== t.value && (t.value = u), l();
    }, a.addEventListener("change", o);
  }), Ot(() => {
    window.removeEventListener("resize", n), window.removeEventListener("orientationchange", s), r && r.disconnect(), o && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o), i !== null && cancelAnimationFrame(i);
  }), {
    isDarkMode: t,
    applyThemeColors: l
  };
}
function du(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ ae("");
  let s = null, i = null;
  const r = (a, u, c) => {
    u !== n.value && (t.clear(), n.value = u);
    const h = `${a._srcChatId ?? e.currentChatId}_${a.mesid ?? a.id ?? c}_${u}`;
    let d = t.get(h);
    if (!d) {
      const g = fu(a.mes);
      if (!u)
        d = xs(g);
      else {
        const m = g.toLowerCase(), w = u.toLowerCase(), L = m.indexOf(w);
        if (L === -1)
          d = xs(g);
        else {
          const C = Math.max(0, L - 15), T = Math.min(g.length, L + u.length + 30), x = g.slice(C, T);
          let b = xs(x);
          const E = new RegExp(uu(u), "gi");
          b = b.replace(
            E,
            (F) => `<mark class="search-highlight">${F}</mark>`
          ), d = `${C > 0 ? "..." : ""}${b}${T < g.length ? "..." : ""}`;
        }
      }
      t.set(h, d);
    }
    return d;
  }, o = (a) => {
    const u = a.target.value;
    e.$patch({ searchQuery: u }), s && clearTimeout(s), s = window.setTimeout(() => {
      i && i.abort(), i = new AbortController(), e.performSearch(u);
    }, 300);
  }, l = () => {
    t.clear();
  };
  return vt(() => e.currentChatId, () => {
    t.clear();
  }), Ot(() => {
    s && clearTimeout(s), i && i.abort(), t.clear();
  }), { onSearchInput: o, getPreviewHtml: r, clearCache: l };
}
function pu(e, t) {
  const i = /* @__PURE__ */ ae(null), r = /* @__PURE__ */ ae(0), o = /* @__PURE__ */ ae(0), l = je(() => {
    const m = e.currentMessages || [];
    return Array.isArray(m) ? e.searchQuery ? [...m].sort((w, L) => (L.send_date ?? L.timestamp ?? 0) - (w.send_date ?? w.timestamp ?? 0)) : m : [];
  }), a = je(() => l.value.length), u = je(() => a.value * 72), c = je(() => {
    const m = i.value, w = m ? Math.ceil(m.clientHeight / 72) : 20;
    return {
      start: o.value,
      end: Math.min(a.value, o.value + w + 12 * 2)
    };
  }), h = je(() => {
    const m = c.value.start, w = e.searchQuery || "";
    return l.value.slice(m, c.value.end).map((L, C) => {
      const T = m + C, x = L._originalFloor ?? e.currentMessages.indexOf(L);
      return {
        ...L,
        _localIndex: C,
        _globalIndex: T,
        _floorNumber: x,
        _top: T * 72,
        _html: t(L, w, String(x))
      };
    });
  });
  let d = null;
  const g = () => {
    d !== null && cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      if (!i.value)
        return;
      const m = i.value.scrollTop;
      r.value = m;
      const w = Math.max(0, Math.floor(m / 72) - 12);
      w !== o.value && (o.value = w);
    });
  };
  return vt(() => e.currentChatId, async () => {
    await Jn(), i.value && (i.value.scrollTop = 0, r.value = 0, o.value = 0);
  }), Ot(() => {
    d !== null && cancelAnimationFrame(d);
  }), {
    ITEM_HEIGHT: 72,
    BUFFER_SIZE: 12,
    scrollContainer: i,
    scrollTop: r,
    displayMessages: l,
    totalCount: a,
    totalHeight: u,
    visibleRange: c,
    visibleMessages: h,
    onScroll: g
  };
}
function gu(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = null, r = [], o = null;
  const l = (C, T) => {
    if (!T)
      return;
    const x = C.querySelector(".mes_text, .message-text, .content") || C, b = document.createTreeWalker(x, NodeFilter.SHOW_TEXT, null), E = [];
    let F;
    for (; F = b.nextNode(); )
      E.push(F);
    const j = (P) => P.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), R = (P) => P.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), v = [];
    E.forEach((P) => {
      const _ = P.nodeValue || "", V = new RegExp(R(T), "gi");
      if (V.test(_)) {
        const Q = document.createElement("span");
        Q.innerHTML = j(_).replace(
          V,
          (K) => `<mark style="background-color: #ff9800; color: #fff; padding: 0 3px; border-radius: 3px; box-shadow: 0 0 6px rgba(255,152,0,0.8); font-weight: bold;">${K}</mark>`
        ), P.parentNode && v.push({ old: P, new: Q, parent: P.parentNode });
      }
    }), v.forEach((P) => P.parent.replaceChild(P.new, P.old));
    const I = () => {
      v.forEach((P) => {
        P.parent.contains(P.new) && P.parent.replaceChild(P.old, P.new);
      });
    };
    r.push(I), o && clearTimeout(o), o = window.setTimeout(() => {
      r.forEach((P) => P()), r = [], o = null;
    }, 3500);
  }, a = (C) => {
    const T = (t.getCurrentChatFileName() || "").replace(/\.jsonl?$/, ""), x = (C || "").replace(/\.jsonl?$/, "");
    return T === x;
  }, u = async (C, T) => {
    const x = document.getElementById("option_start_new_chat");
    if (x)
      x.click();
    else {
      let { element: b, index: E } = t.findCharacterElement(C, T);
      b ? b.click() : E !== -1 && t.selectCharacterById(E);
    }
    await new Promise((b) => setTimeout(b, 800));
  }, c = async (C, T, x) => {
    try {
      e.stopIndexing();
      const b = t.context, E = x.replace(/\.jsonl?$/, ""), F = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (typeof b.saveChat == "function") {
        try {
          await b.saveChat();
        } catch {
        }
        await new Promise((_) => setTimeout(_, 300));
      } else
        t.saveChat(), await new Promise((_) => setTimeout(_, 300));
      let { element: j, index: R } = t.findCharacterElement(C, T);
      if (R === -1) {
        const _ = t.getCharacters(), V = (J) => (J || "").replace(/\s+/g, "").toLowerCase(), Q = V(C), K = _.find((J) => V(J.name) === Q);
        K && (R = _.indexOf(K));
      }
      if (R === -1)
        return alert(`自动定位角色【${C}】失败，请手动在左侧选择该角色后继续。`), !1;
      const v = t.getCurrentCharacterId(), I = t.getCurrentChatFileName();
      if (String(v) !== String(R)) {
        if (j && typeof j.click == "function")
          j.click();
        else if (typeof t.win.selectCharacterById == "function") {
          const K = t.win.selectCharacterById(R);
          K instanceof Promise && await K;
        } else
          t.selectCharacterById(R);
        let _ = 0, V = !1;
        for (; _ < 50; ) {
          if (String(t.getCurrentCharacterId()) === String(R)) {
            V = !0;
            break;
          }
          await new Promise((K) => setTimeout(K, 100)), _++;
        }
        if (!V)
          return alert("角色切换异常，请重试。"), !1;
        let Q = 0;
        for (; Q < 40 && t.getCurrentChatFileName() === I; )
          await new Promise((J) => setTimeout(J, 100)), Q++;
        await new Promise((K) => setTimeout(K, F ? 1800 : 800));
      }
      if ((t.getCurrentChatFileName() || "").replace(/\.jsonl?$/, "") !== E) {
        typeof b.openCharacterChat == "function" ? await b.openCharacterChat(E) : typeof b.executeSlashCommandsWithOptions == "function" ? await b.executeSlashCommandsWithOptions("/chat " + JSON.stringify(E)) : t.clickHistoryItem(x);
        let _ = 0;
        for (; _ < 40 && (t.getCurrentChatFileName() || "").replace(/\.jsonl?$/, "") !== E; )
          await new Promise((Q) => setTimeout(Q, 150)), _++;
        await new Promise((V) => setTimeout(V, F ? 1200 : 600));
      }
      return !0;
    } catch (b) {
      return console.error("[ChatLogManager] Jump Error:", b), !1;
    }
  }, h = (C, T, x, b, E) => {
    try {
      const j = (() => {
        const K = ["#dialogue", ".chat-container", "#chat_story_container", ".list-messages", ".chatdisplay", "#chat", ".messages-container", ".chat-messages"];
        for (const Y of K) {
          const te = document.querySelector(Y);
          if (te && te.scrollHeight > te.clientHeight)
            return te;
        }
        return document.querySelector(".chat-container, #chat-window, #chat") || document.body;
      })();
      if (!j)
        return;
      const R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), v = R ? "auto" : "smooth";
      let I = !1;
      const P = () => {
        if (I)
          return !0;
        if (!a(C))
          return !1;
        let K = null;
        const J = T.mesid ?? x;
        if (J != null && (K = j.querySelector(`.mes[mesid="${J}"], .message[mesid="${J}"]`)), !K && T.id !== void 0 && (K = j.querySelector(`[id="${T.id}"]`)), !K && x >= 0 && (K = j.querySelector(`.mes[data-index="${x}"], .message[data-index="${x}"]`)), !K && b && E) {
          const Y = (xe) => (xe || "").replace(/[^\p{L}\p{N}]/gu, "").toLowerCase(), te = Y(T.mes).substring(0, 40);
          if (te.length > 4) {
            const xe = j.querySelectorAll(".mes, .message, .chat-message");
            for (let Ye = xe.length - 1; Ye >= 0; Ye--) {
              const Oe = xe[Ye], Se = Oe.querySelector(".mes_text, .message-text, .content") || Oe;
              if (Y(Se.textContent || "").includes(te)) {
                K = Oe;
                break;
              }
            }
          }
        }
        if (K) {
          I = !0;
          const Y = () => K == null ? void 0 : K.scrollIntoView({ behavior: v, block: "center" });
          return Y(), setTimeout(Y, 300), R || setTimeout(Y, 800), K.style.transition = "all 0.5s ease", K.style.boxShadow = "0 0 30px 10px rgba(255, 152, 0, 0.8)", K.style.backgroundColor = "rgba(255, 152, 0, 0.25)", setTimeout(() => {
            K && (K.style.boxShadow = "", K.style.backgroundColor = "");
          }, 3e3), b && E && l(K, E), !0;
        }
        return !1;
      };
      if (P())
        return;
      let _ = null;
      const V = new MutationObserver(() => {
        I || (_ && clearTimeout(_), _ = window.setTimeout(() => {
          P() && (V.disconnect(), s.delete(V));
        }, 300));
      });
      V.observe(j, { childList: !0, subtree: !0, attributes: !1 }), s.add(V);
      let Q = 0;
      i && clearInterval(i), i = window.setInterval(() => {
        if (Q++, P()) {
          clearInterval(i), V.disconnect(), s.delete(V);
          return;
        }
        if (Q > 3 && Q % 3 === 0) {
          const K = document.querySelector("#show_more_messages");
          K && K.offsetParent !== null ? K.click() : (j.scrollTop = Math.max(0, j.scrollTop - 1200), j.scrollTop < 100 && (j.scrollTop = 0));
        }
        Q > 40 && (clearInterval(i), V.disconnect(), s.delete(V));
      }, 300);
    } catch (F) {
      console.warn("[ChatLogManager] Scroll to message failed:", F);
    }
  }, d = async () => {
    const C = e.allChats.find((x) => x.id === e.currentChatId);
    if (!C)
      return;
    const T = a(C.fileName);
    n(), T || await c(C.charName, C.avatarUrl, C.fileName);
  }, g = async (C, T) => {
    const x = C.chatId || e.currentChatId, b = e.allChats.find((R) => R.id === x);
    if (!b) {
      alert("无法定位该消息归属的聊天文件。");
      return;
    }
    const E = !!e.searchQuery, F = e.searchQuery, j = a(b.fileName);
    n(), (j || await c(b.charName, b.avatarUrl, b.fileName)) && h(b.fileName, C, T, E, F);
  }, m = async (C, T) => {
    const x = T.length, b = Math.floor(Number(C));
    if (isNaN(b) || b < 0 || b >= x) {
      alert(`请输入有效的楼层号 (0 - ${x > 0 ? x - 1 : 0})`);
      return;
    }
    const E = T[b];
    await g(E, b);
  }, w = async () => {
    const C = e.allChats.find((b) => b.id === e.currentChatId);
    if (!C)
      return;
    const T = a(C.fileName), x = T ? "🚨 正在删除活跃聊天！将自动切换到最新记录或新建聊天，确定删除？" : "⚠️ 确定要永久删除此记录吗？";
    if (window.confirm(x))
      try {
        if (e.stopIndexing(), await new Promise((E) => setTimeout(E, 100)), T) {
          t.saveChat();
          const E = e.allChats.find((F) => F.charName === C.charName && F.id !== C.id);
          E ? await c(E.charName, E.avatarUrl, E.fileName) : await u(C.charName, C.avatarUrl);
        }
        await qi(C.charName, C.avatarUrl, C.fileName) ? (e.$patch({ currentChatId: null, currentMessages: [], selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), e.performSearch(""), e.fetchChats()) : alert("❌ 删除失败");
      } catch (b) {
        console.error("[ChatLogManager] Delete Error:", b);
      }
  }, L = async (C, T) => {
    if (C.length === 0 || !window.confirm(`🛑 极度危险！将删除 ${C.length} 个会话，确定吗？`))
      return;
    let x = 0, b = 0;
    try {
      e.stopIndexing(), await new Promise((v) => setTimeout(v, 100));
      const E = Array.from(C);
      let F = !1, j = "", R = "";
      for (const v of E) {
        const I = e.allChats.find((P) => P.id === v);
        if (I && a(I.fileName)) {
          F = !0, j = I.charName, R = I.avatarUrl;
          break;
        }
      }
      if (F) {
        t.saveChat();
        const v = e.allChats.find((I) => I.charName === j && !E.includes(I.id));
        v ? await c(v.charName, v.avatarUrl, v.fileName) : await u(j, R);
      }
      for (const v of E) {
        if (!T.value)
          break;
        const I = e.allChats.find((P) => P.id === v);
        I && (await qi(I.charName, I.avatarUrl, I.fileName) ? x++ : b++);
      }
      T.value && (e.$patch({ selectedChatIds: [], isBatchMode: !1, searchQuery: "" }), e.performSearch(""));
    } finally {
      T.value && (alert(`🗑️ 完毕！成功: ${x}${b > 0 ? ` 失败: ${b}` : ""}`), e.fetchChats());
    }
  };
  return Ot(() => {
    o && clearTimeout(o), r.forEach((C) => C()), r = [], i && clearInterval(i), s.forEach((C) => C.disconnect()), s.clear();
  }), {
    isChatActiveInMainUI: a,
    switchToChat: c,
    scrollToMessage: h,
    handleJumpToChat: d,
    handleMessageClick: g,
    executeJumpFloor: m,
    handleSingleDelete: w,
    handleBatchDelete: L
  };
}
function ts(e, t, n) {
  const s = new Blob([t], { type: n }), i = URL.createObjectURL(s), r = document.createElement("a");
  r.href = i, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
function ko(e) {
  return e.map((t) => {
    const n = {};
    for (const s in t)
      s.startsWith("_") || (n[s] = t[s]);
    return n;
  });
}
function er(e, t) {
  let n = `=== 聊天记录: ${e} ===
导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}

`;
  t.forEach((s) => {
    const i = s.name || (s.is_user ? "You" : "Bot");
    n += `[${i}]:
${s.mes}

`;
  }), ts(`${e}.txt`, n, "text/plain;charset=utf-8");
}
function tr(e, t) {
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
  }), ts(`${e}.md`, n, "text/markdown;charset=utf-8");
}
function nr(e, t, n) {
  const s = { user_name: "You", character_name: t, create_date: Date.now(), chat_metadata: {} }, i = [JSON.stringify(s), ...ko(n).map((r) => JSON.stringify(r))];
  ts(`${e}.jsonl`, i.join(`
`), "application/octet-stream");
}
function mu(e, t) {
  const n = `Batch_Export_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.${t}`;
  let s = "";
  if (t === "json") {
    const i = e.map((r) => ({ ...r, messages: ko(r.messages) }));
    s = JSON.stringify(i, null, 2);
  } else
    t === "md" ? (s = `# 批量导出聊天记录
> 导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}
> 共包含 ${e.length} 个会话

`, e.forEach((i) => {
      s += `## 会话: ${i.title}

`, i.messages.forEach((r) => {
        const o = r.name || (r.is_user ? "You" : "Bot");
        s += `**${o}**:

${r.mes}

---

`;
      });
    })) : t === "txt" && (s = `=== 批量导出聊天记录 ===
导出时间: ${(/* @__PURE__ */ new Date()).toLocaleString()}
共包含 ${e.length} 个会话

`, e.forEach((i) => {
      s += `
>>> 会话: ${i.title} <<<

`, i.messages.forEach((r) => {
        const o = r.name || (r.is_user ? "You" : "Bot");
        s += `[${o}]:
${r.mes}

`;
      }), s += `=========================
`;
    }));
  ts(n, s, `text/${t === "json" ? "plain" : t};charset=utf-8`);
}
function vu(e, t, n) {
  const s = /* @__PURE__ */ ae(!1), i = /* @__PURE__ */ ae(!1), r = /* @__PURE__ */ ae(0), o = /* @__PURE__ */ ae(null);
  return { isWorking: s, isImporting: i, importProgress: r, fileInputRef: o, triggerImport: () => {
    o.value && o.value.click();
  }, handleSingleExport: (d, g) => {
    t();
    const m = e.allChats.find((C) => C.id === e.currentChatId);
    if (!m)
      return alert("未找到当前聊天记录");
    let w = [];
    if (g === "chat") {
      if (w = Array.from(e.currentMessages || []), w.length === 0)
        return alert("当前聊天没有消息可导出");
    } else
      w = [g];
    const L = g === "chat" ? m.title || "未命名聊天" : `单条消息_${m.title || "未命名聊天"}_${Date.now()}`;
    try {
      d === "txt" ? er(L, w) : d === "md" ? tr(L, w) : nr(L, m.charName, w);
    } catch (C) {
      console.error("[ChatLogManager] 单独导出失败:", C);
    }
  }, handleRangeExport: (d, g, m) => {
    const w = e.currentMessages.length;
    let L = Math.floor(Number(g)), C = Math.floor(Number(m));
    if ((isNaN(L) || L < 0) && (L = 0), (isNaN(C) || C >= w) && (C = w > 0 ? w - 1 : 0), L > C)
      return alert("起始楼层不能大于结束楼层！");
    t();
    const T = e.allChats.find((E) => E.id === e.currentChatId);
    if (!T)
      return alert("未找到当前聊天记录");
    const x = Array.from(e.currentMessages.slice(L, C + 1));
    if (!x.length)
      return alert("此范围内没有消息可导出");
    const b = `范围导出_${L}-${C}_${T.title || "未命名聊天"}`;
    try {
      d === "txt" ? er(b, x) : d === "md" ? tr(b, x) : nr(b, T.charName, x);
    } catch (E) {
      console.error("[ChatLogManager] 范围导出失败:", E);
    }
  }, handleBatchExport: async (d, g) => {
    if (g.length !== 0) {
      s.value = !0;
      try {
        const m = Array.from(g).map((x) => async () => {
          const b = e.allChats.find((E) => E.id === x);
          return b ? {
            title: b.title,
            charName: b.charName,
            messages: await Ds(b.charName, b.avatarUrl, b.fileName)
          } : null;
        }), w = [];
        let L = 0;
        const C = async () => {
          if (!n.value || L >= m.length)
            return;
          const x = L++;
          try {
            w[x] = { success: !0, value: await m[x]() };
          } catch (b) {
            w[x] = { success: !1, error: b };
          }
          await C();
        };
        if (await Promise.all(Array(Math.min(5, m.length)).fill(null).map(() => C())), !n.value)
          return;
        const T = w.filter((x) => x.success && x.value !== null).map((x) => x.value);
        mu(T, d);
      } finally {
        s.value = !1;
      }
    }
  }, handleImport: async (d) => {
    var C, T;
    const m = d.target.files;
    if (!m || m.length === 0)
      return;
    for (let x = 0; x < m.length; x++)
      if (m[x].size > 30 * 1024 * 1024) {
        alert(`❌ 文件 ${m[x].name} 过大 (超过30MB)，为防止浏览器崩溃已中止导入。`), o.value && (o.value.value = "");
        return;
      }
    i.value = !0, r.value = 0;
    let w = 0, L = 0;
    try {
      for (let x = 0; x < m.length && n.value; x++) {
        const b = await m[x].text();
        let E;
        try {
          E = JSON.parse(b);
        } catch {
          E = b.split(`
`).filter((I) => I.trim()).map((I) => JSON.parse(I));
        }
        let F = [];
        Array.isArray(E) && (E.length > 0 && Array.isArray(E[0]) ? F = E.map((I) => ({ messages: I })) : E.length > 0 && ((C = E[0]) != null && C.messages) ? F = E : E.length > 0 && ((T = E[0]) != null && T.chat_metadata) ? F = [{ charName: E[0].character_name, messages: E.slice(1) }] : F = [{ messages: E }]);
        const j = F.length;
        let R = 0;
        const v = async (I) => {
          var P;
          for (const _ of I) {
            if (!n.value)
              return;
            const V = (_.messages || []).filter((J) => J.mes !== void 0);
            if (V.length === 0)
              continue;
            let Q = _.charName || ((P = V.find((J) => !J.is_user && J.name)) == null ? void 0 : P.name) || "";
            if (!Q) {
              const J = window.prompt("无法识别角色名称，请输入绑定的角色名称：", "");
              if (!J) {
                L++;
                continue;
              }
              Q = J;
            }
            const K = e.allChats.find((J) => J.charName === Q || Q.includes(J.charName));
            K && await Mc(V, K.avatarUrl, K.charName) ? w++ : L++;
          }
        };
        for (let I = 0; I < j && n.value; I += 10) {
          const P = F.slice(I, I + 10);
          await v(P), R += P.length, r.value = j > 0 ? Math.floor(R / j * 100) : 100, await new Promise((_) => setTimeout(_, 0));
        }
      }
    } finally {
      i.value = !1, r.value = 0, o.value && (o.value.value = ""), n.value && (alert(`🎉 导入完毕！成功: ${w}${L > 0 ? ` 失败: ${L}` : ""}`), e.fetchChats());
    }
  } };
}
const bu = { class: "modal-header" }, yu = { class: "header-actions" }, _u = ["disabled"], Cu = { class: "modal-body" }, xu = { class: "left-panel" }, Su = { class: "panel-header" }, wu = { class: "search-box" }, Eu = ["placeholder", "value", "disabled"], Tu = {
  key: 0,
  class: "search-loader"
}, Mu = {
  key: 0,
  class: "select-all-bar"
}, Iu = ["checked"], Au = {
  for: "selectAllBox",
  class: "select-all-label"
}, Ou = { class: "right-panel" }, Nu = { class: "panel-header right-header" }, $u = {
  key: 0,
  class: "header-actions"
}, ku = {
  key: 0,
  class: "batch-panel"
}, Lu = { class: "batch-status" }, Fu = {
  key: 0,
  class: "hint"
}, Pu = {
  key: 0,
  class: "batch-actions"
}, Ru = ["disabled"], Du = ["disabled"], ju = ["disabled"], Bu = ["disabled"], Hu = {
  key: 0,
  class: "empty-state"
}, zu = {
  key: 1,
  class: "empty-state"
}, Vu = { class: "msg-actions-group" }, Wu = ["onClick"], Uu = ["onClick"], Ku = { class: "msg-floor" }, Ju = ["innerHTML"], qu = { class: "action-sheet" }, Yu = { class: "action-sheet" }, Gu = { class: "action-sheet-title" }, Qu = { class: "action-sheet range-modal" }, Xu = { class: "range-inputs" }, Zu = ["max"], ef = ["min", "max"], tf = { class: "range-hint" }, nf = { class: "action-sheet range-modal" }, sf = { class: "range-inputs" }, rf = { style: { width: "100%" } }, of = ["max"], lf = /* @__PURE__ */ qr({
  __name: "LogOverview",
  setup(e) {
    const t = Oo(), n = /* @__PURE__ */ en(null), s = /* @__PURE__ */ ae(!0), {
      isVisible: i,
      showToolsMenu: r,
      showExportMenu: o,
      exportTarget: l,
      showRangeExportModal: a,
      rangeStart: u,
      rangeEnd: c,
      showJumpFloorModal: h,
      targetFloor: d,
      closeInternalModals: g
    } = au(), m = new cu(), { isDarkMode: w } = hu(n), { onSearchInput: L, getPreviewHtml: C } = du(t), { scrollContainer: T, totalHeight: x, visibleMessages: b, onScroll: E } = pu(t, C), F = () => {
      typeof window.closeChatLogManager == "function" ? window.closeChatLogManager() : i.value = !1;
    }, { handleJumpToChat: j, handleMessageClick: R, handleSingleDelete: v, handleBatchDelete: I } = gu(t, m, F), {
      isWorking: P,
      isImporting: _,
      importProgress: V,
      fileInputRef: Q,
      triggerImport: K,
      handleSingleExport: J,
      handleRangeExport: Y,
      handleBatchExport: te,
      handleImport: xe
    } = vu(t, g, s), Ye = () => {
      const Ve = t.currentMessages.length;
      if (Ve === 0)
        return alert("当前聊天没有消息，无法导出。");
      u.value = 0, c.value = Ve - 1, a.value = !0;
    }, Oe = () => {
      if (t.currentMessages.length === 0)
        return alert("当前聊天没有消息，无法跳转。");
      d.value = 0, h.value = !0;
    }, Se = () => {
      const Ve = t.currentMessages.length, N = Math.floor(d.value);
      if (isNaN(N) || N < 0 || N >= Ve)
        return alert(`请输入有效的楼层号 (0 - ${Ve > 0 ? Ve - 1 : 0})`);
      g(), R(t.currentMessages[N], N);
    }, bn = () => I(t.selectedChatIds, s), Ht = (Ve) => te(Ve, t.selectedChatIds);
    return Gn(() => {
      s.value = !0, t.fetchChats(), window.refreshChatLogManager ? window.refreshChatLogManager_fallback = () => t.fetchChats() : window.refreshChatLogManager = () => t.fetchChats();
    }), Ot(() => {
      s.value = !1, delete window.refreshChatLogManager, delete window.refreshChatLogManager_fallback;
    }), (Ve, N) => S(i) ? (le(), ue("div", {
      key: 0,
      class: "log-manager-modal",
      onClick: Pe(F, ["self"]),
      onTouchmove: N[32] || (N[32] = Pe(() => {
      }, ["self", "prevent"]))
    }, [
      H("div", {
        class: Tt(["log-manager-container", S(w) ? "theme-dark" : "theme-light"]),
        ref_key: "containerRef",
        ref: n
      }, [
        H("header", bu, [
          N[33] || (N[33] = H("h2", null, "📚 聊天记录总览", -1)),
          H("div", yu, [
            H("button", {
              class: "action-btn import-btn",
              onClick: N[0] || (N[0] = //@ts-ignore
              (...U) => S(K) && S(K)(...U)),
              disabled: S(_)
            }, ge(S(_) ? `导入中... ${S(V)}%` : "📥 导入"), 9, _u),
            H("input", {
              type: "file",
              ref_key: "fileInputRef",
              ref: Q,
              style: { display: "none" },
              accept: ".json,.jsonl",
              multiple: "",
              onChange: N[1] || (N[1] = //@ts-ignore
              (...U) => S(xe) && S(xe)(...U))
            }, null, 544),
            H("button", {
              class: Tt(["action-btn toggle-batch-btn", { active: S(t).isBatchMode }]),
              onClick: N[2] || (N[2] = //@ts-ignore
              (...U) => S(t).toggleBatchMode && S(t).toggleBatchMode(...U))
            }, ge(S(t).isBatchMode ? "退出批量" : "☑️ 批量"), 3),
            H("button", {
              class: "icon-btn close-btn",
              onClick: F,
              title: "关闭"
            }, "✕")
          ])
        ]),
        H("main", Cu, [
          H("aside", xu, [
            H("div", Su, [
              H("div", wu, [
                H("input", {
                  type: "text",
                  placeholder: S(t).isIndexing ? "后台加载中..." : "搜索全局内容...",
                  class: "search-input",
                  value: S(t).searchQuery,
                  onInput: N[3] || (N[3] = //@ts-ignore
                  (...U) => S(L) && S(L)(...U)),
                  disabled: S(t).isBatchMode
                }, null, 40, Eu),
                S(t).isIndexing ? (le(), ue("span", Tu, "⌛")) : Ae("", !0)
              ])
            ]),
            S(t).isBatchMode ? (le(), ue("div", Mu, [
              H("input", {
                type: "checkbox",
                id: "selectAllBox",
                class: "batch-checkbox",
                checked: S(t).isAllSelected,
                onChange: N[4] || (N[4] = //@ts-ignore
                (...U) => S(t).toggleSelectAll && S(t).toggleSelectAll(...U))
              }, null, 40, Iu),
              H("label", Au, "全选 " + ge(S(t).searchQuery ? "搜索结果" : "所有会话"), 1)
            ])) : Ae("", !0),
            _e(lu)
          ]),
          H("section", Ou, [
            H("div", Nu, [
              H("h3", null, ge(S(t).isBatchMode ? "批量操作" : "消息预览"), 1),
              !S(t).isBatchMode && S(t).currentChatId ? (le(), ue("div", $u, [
                H("button", {
                  class: "action-btn jump-chat-btn",
                  onClick: N[5] || (N[5] = Pe(
                    //@ts-ignore
                    (...U) => S(j) && S(j)(...U),
                    ["prevent"]
                  ))
                }, [...N[34] || (N[34] = [
                  ot("🚀", -1),
                  H("span", { class: "hide-m" }, " 进入", -1)
                ])]),
                H("button", {
                  class: "action-btn delete-btn-sm",
                  onClick: N[6] || (N[6] = Pe(
                    //@ts-ignore
                    (...U) => S(v) && S(v)(...U),
                    ["prevent"]
                  ))
                }, "🗑️"),
                H("button", {
                  class: "action-btn",
                  onClick: N[7] || (N[7] = Pe((U) => r.value = !0, ["prevent"]))
                }, [...N[35] || (N[35] = [
                  ot("🛠️", -1),
                  H("span", { class: "hide-m" }, " 菜单", -1)
                ])])
              ])) : Ae("", !0)
            ]),
            S(t).isBatchMode ? (le(), ue("div", ku, [
              H("div", Lu, [
                H("h3", null, "已选 " + ge(S(t).selectedChatIds.length) + " 个会话", 1),
                S(t).selectedChatIds.length === 0 ? (le(), ue("p", Fu, "请在左侧勾选")) : Ae("", !0)
              ]),
              S(t).selectedChatIds.length > 0 ? (le(), ue("div", Pu, [
                H("button", {
                  class: "big-btn md-btn",
                  onClick: N[8] || (N[8] = (U) => Ht("md")),
                  disabled: S(P)
                }, ge(S(P) ? "处理中..." : "📥 导出为 Markdown"), 9, Ru),
                H("button", {
                  class: "big-btn txt-btn",
                  onClick: N[9] || (N[9] = (U) => Ht("txt")),
                  disabled: S(P)
                }, ge(S(P) ? "处理中..." : "📥 导出为 TXT"), 9, Du),
                H("button", {
                  class: "big-btn json-btn",
                  onClick: N[10] || (N[10] = (U) => Ht("json")),
                  disabled: S(P)
                }, ge(S(P) ? "处理中..." : "📦 导出为 JSON"), 9, ju),
                N[36] || (N[36] = H("div", { class: "divider" }, null, -1)),
                H("button", {
                  class: "big-btn delete-btn",
                  onClick: bn,
                  disabled: S(P)
                }, ge(S(P) ? "删除中..." : "🗑️ 永久删除记录"), 9, Bu)
              ])) : Ae("", !0)
            ])) : (le(), ue("div", {
              key: 1,
              class: "message-container",
              ref_key: "scrollContainer",
              ref: T,
              onScroll: N[11] || (N[11] = //@ts-ignore
              (...U) => S(E) && S(E)(...U))
            }, [
              S(t).currentChatId ? S(t).currentMessages.length === 0 ? (le(), ue("div", zu, "该聊天暂无消息")) : (le(), ue("div", {
                key: 2,
                class: "messages",
                style: At({ height: S(x) + "px" })
              }, [
                (le(!0), ue(De, null, Xr(S(b), (U) => (le(), ue("div", {
                  key: U._globalIndex,
                  style: At({ transform: `translateY(${U._top}px)` }),
                  class: "message-bubble-wrapper"
                }, [
                  H("div", {
                    class: Tt(["message-bubble", U.is_user ? "is-user" : "is-bot"])
                  }, [
                    H("div", Vu, [
                      H("button", {
                        class: "msg-action-btn",
                        onClick: Pe((zt) => {
                          l.value = U, o.value = !0;
                        }, ["stop"]),
                        title: "导出此消息"
                      }, "📄", 8, Wu),
                      H("button", {
                        class: "msg-action-btn",
                        onClick: Pe((zt) => S(R)(U, U._floorNumber), ["stop"]),
                        title: "跳转到原文"
                      }, "🎯", 8, Uu)
                    ]),
                    H("span", Ku, "#" + ge(U._floorNumber !== -1 ? U._floorNumber : "?"), 1),
                    H("strong", null, ge(U.name || (U.is_user ? "You" : "Bot")) + ":", 1),
                    H("p", {
                      class: "preview-text",
                      innerHTML: U._html
                    }, null, 8, Ju)
                  ], 2)
                ], 4))), 128))
              ], 4)) : (le(), ue("div", Hu, "👈 请在左侧选择角色或搜索内容"))
            ], 544))
          ])
        ]),
        _e(xn, { name: "fade-scale" }, {
          default: qt(() => [
            S(r) ? (le(), ue("div", {
              key: 0,
              class: "action-sheet-overlay",
              onClick: N[16] || (N[16] = Pe(
                //@ts-ignore
                (...U) => S(g) && S(g)(...U),
                ["self"]
              ))
            }, [
              H("div", qu, [
                N[37] || (N[37] = H("h3", { class: "action-sheet-title" }, "🛠️ 更多操作", -1)),
                H("button", {
                  class: "big-btn txt-btn",
                  onClick: N[12] || (N[12] = (U) => {
                    r.value = !1, Oe();
                  })
                }, "🎯 跳转到指定楼层"),
                H("button", {
                  class: "big-btn md-btn",
                  onClick: N[13] || (N[13] = (U) => {
                    r.value = !1, Ye();
                  })
                }, "✂️ 指定范围导出"),
                H("button", {
                  class: "big-btn json-btn",
                  onClick: N[14] || (N[14] = (U) => {
                    r.value = !1, l.value = "chat", o.value = !0;
                  })
                }, "📤 导出全部记录"),
                H("button", {
                  class: "big-btn cancel-btn",
                  onClick: N[15] || (N[15] = //@ts-ignore
                  (...U) => S(g) && S(g)(...U))
                }, "取消")
              ])
            ])) : Ae("", !0)
          ]),
          _: 1
        }),
        _e(xn, { name: "fade-scale" }, {
          default: qt(() => [
            S(o) ? (le(), ue("div", {
              key: 0,
              class: "action-sheet-overlay",
              onClick: N[21] || (N[21] = Pe(
                //@ts-ignore
                (...U) => S(g) && S(g)(...U),
                ["self"]
              ))
            }, [
              H("div", Yu, [
                H("h3", Gu, ge(S(l) === "chat" ? "选择导出格式" : "导出单条消息"), 1),
                H("button", {
                  class: "big-btn md-btn",
                  onClick: N[17] || (N[17] = (U) => S(J)("md", S(l)))
                }, "📄 导出为 Markdown"),
                H("button", {
                  class: "big-btn txt-btn",
                  onClick: N[18] || (N[18] = (U) => S(J)("txt", S(l)))
                }, "📝 导出为 TXT"),
                H("button", {
                  class: "big-btn json-btn",
                  onClick: N[19] || (N[19] = (U) => S(J)("jsonl", S(l)))
                }, "📦 导出为 JSONL"),
                H("button", {
                  class: "big-btn cancel-btn",
                  onClick: N[20] || (N[20] = //@ts-ignore
                  (...U) => S(g) && S(g)(...U))
                }, "取消")
              ])
            ])) : Ae("", !0)
          ]),
          _: 1
        }),
        _e(xn, { name: "fade-scale" }, {
          default: qt(() => [
            S(a) ? (le(), ue("div", {
              key: 0,
              class: "action-sheet-overlay",
              onClick: N[28] || (N[28] = Pe(
                //@ts-ignore
                (...U) => S(g) && S(g)(...U),
                ["self"]
              ))
            }, [
              H("div", Qu, [
                N[42] || (N[42] = H("h3", { class: "action-sheet-title" }, "✂️ 指定楼层范围导出", -1)),
                H("div", Xu, [
                  H("label", null, [
                    N[38] || (N[38] = ot("起始楼层", -1)),
                    cs(H("input", {
                      type: "number",
                      "onUpdate:modelValue": N[22] || (N[22] = (U) => /* @__PURE__ */ de(u) ? u.value = U : null),
                      min: "0",
                      max: S(c)
                    }, null, 8, Zu), [
                      [
                        ys,
                        S(u),
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  H("label", null, [
                    N[39] || (N[39] = ot("结束楼层", -1)),
                    cs(H("input", {
                      type: "number",
                      "onUpdate:modelValue": N[23] || (N[23] = (U) => /* @__PURE__ */ de(c) ? c.value = U : null),
                      min: S(u),
                      max: S(t).currentMessages.length > 0 ? S(t).currentMessages.length - 1 : 0
                    }, null, 8, ef), [
                      [
                        ys,
                        S(c),
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                H("div", tf, [
                  N[40] || (N[40] = ot("预计导出 ", -1)),
                  H("strong", null, ge(Math.max(0, S(c) - S(u) + 1)), 1),
                  N[41] || (N[41] = ot(" 条消息", -1))
                ]),
                H("button", {
                  class: "big-btn md-btn",
                  onClick: N[24] || (N[24] = (U) => S(Y)("md", S(u), S(c)))
                }, "📄 导出为 Markdown"),
                H("button", {
                  class: "big-btn txt-btn",
                  onClick: N[25] || (N[25] = (U) => S(Y)("txt", S(u), S(c)))
                }, "📝 导出为 TXT"),
                H("button", {
                  class: "big-btn json-btn",
                  onClick: N[26] || (N[26] = (U) => S(Y)("jsonl", S(u), S(c)))
                }, "📦 导出为 JSONL"),
                H("button", {
                  class: "big-btn cancel-btn",
                  onClick: N[27] || (N[27] = //@ts-ignore
                  (...U) => S(g) && S(g)(...U))
                }, "取消")
              ])
            ])) : Ae("", !0)
          ]),
          _: 1
        }),
        _e(xn, { name: "fade-scale" }, {
          default: qt(() => [
            S(h) ? (le(), ue("div", {
              key: 0,
              class: "action-sheet-overlay",
              onClick: N[31] || (N[31] = Pe(
                //@ts-ignore
                (...U) => S(g) && S(g)(...U),
                ["self"]
              ))
            }, [
              H("div", nf, [
                N[43] || (N[43] = H("h3", { class: "action-sheet-title" }, "🎯 跳转到指定楼层", -1)),
                H("div", sf, [
                  H("label", rf, [
                    ot("目标楼层 (0 - " + ge(S(t).currentMessages.length > 0 ? S(t).currentMessages.length - 1 : 0) + ") ", 1),
                    cs(H("input", {
                      type: "number",
                      "onUpdate:modelValue": N[29] || (N[29] = (U) => /* @__PURE__ */ de(d) ? d.value = U : null),
                      min: "0",
                      max: S(t).currentMessages.length > 0 ? S(t).currentMessages.length - 1 : 0,
                      onKeydown: ac(Se, ["enter"])
                    }, null, 40, of), [
                      [
                        ys,
                        S(d),
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ]),
                H("button", {
                  class: "big-btn jump-chat-btn",
                  onClick: Se
                }, "🚀 确定跳转"),
                H("button", {
                  class: "big-btn cancel-btn",
                  onClick: N[30] || (N[30] = //@ts-ignore
                  (...U) => S(g) && S(g)(...U))
                }, "取消")
              ])
            ])) : Ae("", !0)
          ]),
          _: 1
        })
      ], 2)
    ], 32)) : Ae("", !0);
  }
});
const af = /* @__PURE__ */ $o(lf, [["__scopeId", "data-v-de3b1108"]]), Lo = "chat-log-manager-float-pos";
function cf() {
  try {
    const e = localStorage.getItem(Lo);
    if (e) {
      const t = JSON.parse(e), n = window.innerWidth - 50, s = window.innerHeight - 50;
      return { x: Math.max(0, Math.min(t.x, n)), y: Math.max(0, Math.min(t.y, s)) };
    }
  } catch {
  }
  return null;
}
function sr(e, t) {
  localStorage.setItem(Lo, JSON.stringify({ x: e, y: t }));
}
function ir() {
  try {
    let e = function() {
      s.classList.remove("idle-transparent"), clearTimeout(c), c = setTimeout(() => {
        s.classList.add("idle-transparent");
      }, 3e3);
    }, t = function(h, d) {
      const g = h - o, m = d - l;
      (Math.abs(g) > 5 || Math.abs(m) > 5) && (r = !0), s.style.left = Math.max(0, Math.min(a + g, window.innerWidth - s.offsetWidth)) + "px", s.style.top = Math.max(0, Math.min(u + m, window.innerHeight - s.offsetHeight)) + "px";
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
    const i = cf();
    i ? (s.style.left = i.x + "px", s.style.top = i.y + "px") : (s.style.left = window.innerWidth - 64 + "px", s.style.top = window.innerHeight - 200 + "px");
    let r = !1, o, l, a, u, c = null;
    e(), s.addEventListener("mousedown", (h) => {
      if (h.button !== 0)
        return;
      e(), o = h.clientX, l = h.clientY;
      const d = s.getBoundingClientRect();
      a = d.left, u = d.top, s.style.transition = "none";
      const g = (w) => t(w.clientX, w.clientY), m = () => {
        document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", m), s.style.transition = "all 0.3s ease", r && sr(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("mousemove", g), document.addEventListener("mouseup", m);
    }), s.addEventListener("touchstart", (h) => {
      e();
      const d = h.touches[0];
      o = d.clientX, l = d.clientY;
      const g = s.getBoundingClientRect();
      a = g.left, u = g.top;
      const m = (L) => t(L.touches[0].clientX, L.touches[0].clientY), w = () => {
        document.removeEventListener("touchmove", m), document.removeEventListener("touchend", w), r && sr(parseInt(s.style.left), parseInt(s.style.top)), setTimeout(() => r = !1, 50), e();
      };
      document.addEventListener("touchmove", m, { passive: !1 }), document.addEventListener("touchend", w);
    }), s.addEventListener("click", () => {
      r || uf();
    }), document.body.appendChild(s);
  } catch {
  }
}
function uf() {
  let e = document.getElementById("chat-log-manager-container");
  if (e)
    e.style.display = "block";
  else {
    e = document.createElement("div"), e.id = "chat-log-manager-container", e.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 99998; backdrop-filter: blur(3px);", document.body.appendChild(e);
    const t = fc(af), n = pc();
    n.use(Ec), t.use(n), t.mount(e);
  }
  typeof window.refreshChatLogManager == "function" && window.refreshChatLogManager();
}
window.closeChatLogManager = () => {
  const e = document.getElementById("chat-log-manager-container");
  e && (e.style.display = "none");
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ir) : ir();
