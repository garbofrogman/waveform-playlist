/*! For license information please see waveform-playlist.js.LICENSE.txt */
var WaveformPlaylist;
(() => {
    var t = {
            7135: (t, e, n) => {
                t.exports = n(6248)
            },
            8098: t => {
                t.exports = function(t) {
                    var e, n = String.prototype.split,
                        r = /()??/.exec("")[1] === t;
                    return e = function(e, i, o) {
                        if ("[object RegExp]" !== Object.prototype.toString.call(i)) return n.call(e, i, o);
                        var a, s, u, c, l = [],
                            h = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.extended ? "x" : "") + (i.sticky ? "y" : ""),
                            f = 0;
                        for (i = new RegExp(i.source, h + "g"), e += "", r || (a = new RegExp("^" + i.source + "$(?!\\s)", h)), o = o === t ? -1 >>> 0 : o >>> 0;
                            (s = i.exec(e)) && !((u = s.index + s[0].length) > f && (l.push(e.slice(f, s.index)), !r && s.length > 1 && s[0].replace(a, (function() {
                                for (var e = 1; e < arguments.length - 2; e++) arguments[e] === t && (s[e] = t)
                            })), s.length > 1 && s.index < e.length && Array.prototype.push.apply(l, s.slice(1)), c = s[0].length, f = u, l.length >= o));) i.lastIndex === s.index && i.lastIndex++;
                        return f === e.length ? !c && i.test("") || l.push("") : l.push(e.slice(f)), l.length > o ? l.slice(0, o) : l
                    }, e
                }()
            },
            7296: (t, e, n) => {
                "use strict";
                var r = n(1102),
                    i = n(2307),
                    o = n(4339),
                    a = n(3957),
                    s = n(3246);
                (t.exports = function(t, e) {
                    var n, i, u, c, l;
                    return arguments.length < 2 || "string" != typeof t ? (c = e, e = t, t = null) : c = arguments[2], r(t) ? (n = s.call(t, "c"), i = s.call(t, "e"), u = s.call(t, "w")) : (n = u = !0, i = !1), l = {
                        value: e,
                        configurable: n,
                        enumerable: i,
                        writable: u
                    }, c ? o(a(c), l) : l
                }).gs = function(t, e, n) {
                    var u, c, l, h;
                    return "string" != typeof t ? (l = n, n = e, e = t, t = null) : l = arguments[3], r(e) ? i(e) ? r(n) ? i(n) || (l = n, n = void 0) : n = void 0 : (l = e, e = n = void 0) : e = void 0, r(t) ? (u = s.call(t, "c"), c = s.call(t, "e")) : (u = !0, c = !1), h = {
                        get: e,
                        set: n,
                        configurable: u,
                        enumerable: c
                    }, l ? o(a(l), h) : h
                }
            },
            817: t => {
                "use strict";
                t.exports = function() {}
            },
            4339: (t, e, n) => {
                "use strict";
                t.exports = n(1994)() ? Object.assign : n(963)
            },
            1994: t => {
                "use strict";
                t.exports = function() {
                    var t, e = Object.assign;
                    return "function" == typeof e && (e(t = {
                        foo: "raz"
                    }, {
                        bar: "dwa"
                    }, {
                        trzy: "trzy"
                    }), t.foo + t.bar + t.trzy === "razdwatrzy")
                }
            },
            963: (t, e, n) => {
                "use strict";
                var r = n(3450),
                    i = n(1836),
                    o = Math.max;
                t.exports = function(t, e) {
                    var n, a, s, u = o(arguments.length, 2);
                    for (t = Object(i(t)), s = function(r) {
                            try {
                                t[r] = e[r]
                            } catch (t) {
                                n || (n = t)
                            }
                        }, a = 1; a < u; ++a) r(e = arguments[a]).forEach(s);
                    if (void 0 !== n) throw n;
                    return t
                }
            },
            8349: (t, e, n) => {
                "use strict";
                var r = n(817)();
                t.exports = function(t) {
                    return t !== r && null !== t
                }
            },
            3450: (t, e, n) => {
                "use strict";
                t.exports = n(3446)() ? Object.keys : n(9177)
            },
            3446: t => {
                "use strict";
                t.exports = function() {
                    try {
                        return Object.keys("primitive"), !0
                    } catch (t) {
                        return !1
                    }
                }
            },
            9177: (t, e, n) => {
                "use strict";
                var r = n(8349),
                    i = Object.keys;
                t.exports = function(t) {
                    return i(r(t) ? Object(t) : t)
                }
            },
            3957: (t, e, n) => {
                "use strict";
                var r = n(8349),
                    i = Array.prototype.forEach,
                    o = Object.create,
                    a = function(t, e) {
                        var n;
                        for (n in t) e[n] = t[n]
                    };
                t.exports = function(t) {
                    var e = o(null);
                    return i.call(arguments, (function(t) {
                        r(t) && a(Object(t), e)
                    })), e
                }
            },
            79: t => {
                "use strict";
                t.exports = function(t) {
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    return t
                }
            },
            1836: (t, e, n) => {
                "use strict";
                var r = n(8349);
                t.exports = function(t) {
                    if (!r(t)) throw new TypeError("Cannot use null or undefined");
                    return t
                }
            },
            3246: (t, e, n) => {
                "use strict";
                t.exports = n(8711)() ? String.prototype.contains : n(2370)
            },
            8711: t => {
                "use strict";
                var e = "razdwatrzy";
                t.exports = function() {
                    return "function" == typeof e.contains && !0 === e.contains("dwa") && !1 === e.contains("foo")
                }
            },
            2370: t => {
                "use strict";
                var e = String.prototype.indexOf;
                t.exports = function(t) {
                    return e.call(this, t, arguments[1]) > -1
                }
            },
            9401: (t, e, n) => {
                "use strict";
                n(8625)("ev-store", "7");
                var r = "__EV_STORE_KEY@7";
                t.exports = function(t) {
                    var e = t[r];
                    return e || (e = t[r] = {}), e
                }
            },
            8709: (t, e, n) => {
                "use strict";
                var r, i, o, a, s, u, c, l = n(7296),
                    h = n(79),
                    f = Function.prototype.apply,
                    p = Function.prototype.call,
                    d = Object.create,
                    v = Object.defineProperty,
                    y = Object.defineProperties,
                    m = Object.prototype.hasOwnProperty,
                    g = {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    };
                i = function(t, e) {
                    var n, i;
                    return h(e), i = this, r.call(this, t, n = function() {
                        o.call(i, t, n), f.call(e, this, arguments)
                    }), n.__eeOnceListener__ = e, this
                }, s = {
                    on: r = function(t, e) {
                        var n;
                        return h(e), m.call(this, "__ee__") ? n = this.__ee__ : (n = g.value = d(null), v(this, "__ee__", g), g.value = null), n[t] ? "object" == typeof n[t] ? n[t].push(e) : n[t] = [n[t], e] : n[t] = e, this
                    },
                    once: i,
                    off: o = function(t, e) {
                        var n, r, i, o;
                        if (h(e), !m.call(this, "__ee__")) return this;
                        if (!(n = this.__ee__)[t]) return this;
                        if ("object" == typeof(r = n[t]))
                            for (o = 0; i = r[o]; ++o) i !== e && i.__eeOnceListener__ !== e || (2 === r.length ? n[t] = r[o ? 0 : 1] : r.splice(o, 1));
                        else r !== e && r.__eeOnceListener__ !== e || delete n[t];
                        return this
                    },
                    emit: a = function(t) {
                        var e, n, r, i, o;
                        if (m.call(this, "__ee__") && (i = this.__ee__[t]))
                            if ("object" == typeof i) {
                                for (n = arguments.length, o = new Array(n - 1), e = 1; e < n; ++e) o[e - 1] = arguments[e];
                                for (i = i.slice(), e = 0; r = i[e]; ++e) f.call(r, this, o)
                            } else switch (arguments.length) {
                                case 1:
                                    p.call(i, this);
                                    break;
                                case 2:
                                    p.call(i, this, arguments[1]);
                                    break;
                                case 3:
                                    p.call(i, this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    for (n = arguments.length, o = new Array(n - 1), e = 1; e < n; ++e) o[e - 1] = arguments[e];
                                    f.call(i, this, o)
                            }
                    }
                }, u = {
                    on: l(r),
                    once: l(i),
                    off: l(o),
                    emit: l(a)
                }, c = y({}, u), t.exports = e = function(t) {
                    return null == t ? d(c) : y(Object(t), u)
                }, e.methods = s
            },
            4571: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.linear = function(t, e) {
                    var n, r, i = new Float32Array(t),
                        o = t - 1;
                    for (n = 0; n < t; n++) r = n / o, i[n] = e > 0 ? r : 1 - r;
                    return i
                }, e.exponential = function(t, e) {
                    var n, r, i = new Float32Array(t),
                        o = t - 1;
                    for (n = 0; n < t; n++) r = n / o, i[e > 0 ? n : t - 1 - n] = Math.exp(2 * r - 1) / Math.exp(1);
                    return i
                }, e.sCurve = function(t, e) {
                    var n, r = new Float32Array(t),
                        i = e > 0 ? Math.PI / 2 : -Math.PI / 2;
                    for (n = 0; n < t; ++n) r[n] = Math.sin(Math.PI * n / t - i) / 2 + .5;
                    return r
                }, e.logarithmic = function(t, e, n) {
                    var r, i = new Float32Array(t),
                        o = 0;
                    for (r = 0; r < t; r++) o = r / t, i[n > 0 ? r : t - 1 - r] = Math.log(1 + e * o) / Math.log(1 + e);
                    return i
                }
            },
            9304: (t, e, n) => {
                "use strict";
                e.h7 = e.Y1 = e.Hp = e.Jl = e.t$ = e._h = void 0, e.L7 = function(t, e, n, r) {
                    switch (e) {
                        case i:
                            u.call(t, n, r);
                            break;
                        case o:
                            l.call(t, n, r);
                            break;
                        case a:
                            f.call(t, n, r);
                            break;
                        case s:
                            d.call(t, n, r);
                            break;
                        default:
                            throw new Error("Unsupported Fade type")
                    }
                }, e.Mt = function(t, e, n, r) {
                    switch (e) {
                        case i:
                            c.call(t, n, r);
                            break;
                        case o:
                            h.call(t, n, r);
                            break;
                        case a:
                            p.call(t, n, r);
                            break;
                        case s:
                            v.call(t, n, r);
                            break;
                        default:
                            throw new Error("Unsupported Fade type")
                    }
                };
                var r = n(4571),
                    i = e._h = "sCurve",
                    o = e.t$ = "linear",
                    a = e.Jl = "exponential",
                    s = e.Hp = "logarithmic";

                function u(t, e) {
                    var n = (0, r.sCurve)(1e4, 1);
                    this.setValueCurveAtTime(n, t, e)
                }

                function c(t, e) {
                    var n = (0, r.sCurve)(1e4, -1);
                    this.setValueCurveAtTime(n, t, e)
                }

                function l(t, e) {
                    this.linearRampToValueAtTime(0, t), this.linearRampToValueAtTime(1, t + e)
                }

                function h(t, e) {
                    this.linearRampToValueAtTime(1, t), this.linearRampToValueAtTime(0, t + e)
                }

                function f(t, e) {
                    this.exponentialRampToValueAtTime(.01, t), this.exponentialRampToValueAtTime(1, t + e)
                }

                function p(t, e) {
                    this.exponentialRampToValueAtTime(1, t), this.exponentialRampToValueAtTime(.01, t + e)
                }

                function d(t, e) {
                    var n = (0, r.logarithmic)(1e4, 10, 1);
                    this.setValueCurveAtTime(n, t, e)
                }

                function v(t, e) {
                    var n = (0, r.logarithmic)(1e4, 10, -1);
                    this.setValueCurveAtTime(n, t, e)
                }
                e.Y1 = "FadeIn", e.h7 = "FadeOut"
            },
            474: (t, e, n) => {
                var r, i = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : {},
                    o = n(444);
                "undefined" != typeof document ? r = document : (r = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), t.exports = r
            },
            7051: (t, e, n) => {
                "use strict";
                var r = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {};
                t.exports = function(t, e) {
                    return t in r ? r[t] : (r[t] = e, e)
                }
            },
            8625: (t, e, n) => {
                "use strict";
                var r = n(7051);
                t.exports = function(t, e, n) {
                    var i = "__INDIVIDUAL_ONE_VERSION_" + t,
                        o = r(i + "_ENFORCE_SINGLETON", e);
                    if (o !== e) throw new Error("Can only have one copy of " + t + ".\nYou already have version " + o + " installed.\nThis means you cannot install version " + e);
                    return r(i, n)
                }
            },
            1072: (t, e, n) => {
                var r = !!(n.g === n.g.window && n.g.URL && n.g.Blob && n.g.Worker);

                function i(t, e) {
                    var i, o = this;
                    if (e = e || {}, r) return i = t.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1], new n.g.Worker(n.g.URL.createObjectURL(new n.g.Blob([i], {
                        type: "text/javascript"
                    })));
                    this.self = e, this.self.postMessage = function(t) {
                        setTimeout((function() {
                            o.onmessage({
                                data: t
                            })
                        }), 0)
                    }, setTimeout(t.bind(e, e), 0)
                }
                i.prototype.postMessage = function(t) {
                    var e = this;
                    setTimeout((function() {
                        e.self.onmessage({
                            data: t
                        })
                    }), 0)
                }, t.exports = i
            },
            4436: t => {
                "use strict";
                t.exports = function(t) {
                    return "object" == typeof t && null !== t
                }
            },
            2473: t => {
                var e = 9007199254740991,
                    n = /^(?:0|[1-9]\d*)$/;

                function r(t, e, n) {
                    switch (n.length) {
                        case 0:
                            return t.call(e);
                        case 1:
                            return t.call(e, n[0]);
                        case 2:
                            return t.call(e, n[0], n[1]);
                        case 3:
                            return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }
                var i, o, a = Object.prototype,
                    s = a.hasOwnProperty,
                    u = a.toString,
                    c = a.propertyIsEnumerable,
                    l = (i = Object.keys, o = Object, function(t) {
                        return i(o(t))
                    }),
                    h = Math.max,
                    f = !c.call({
                        valueOf: 1
                    }, "valueOf");

                function p(t, e, n) {
                    var r = t[e];
                    s.call(t, e) && y(r, n) && (void 0 !== n || e in t) || (t[e] = n)
                }

                function d(t, r) {
                    return !!(r = null == r ? e : r) && ("number" == typeof t || n.test(t)) && t > -1 && t % 1 == 0 && t < r
                }

                function v(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || a)
                }

                function y(t, e) {
                    return t === e || t != t && e != e
                }
                var m = Array.isArray;

                function g(t) {
                    return null != t && function(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= e
                    }(t.length) && ! function(t) {
                        var e = k(t) ? u.call(t) : "";
                        return "[object Function]" == e || "[object GeneratorFunction]" == e
                    }(t)
                }

                function k(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }
                var b, w = (b = function(t, e) {
                    if (f || v(e) || g(e)) ! function(t, e, n, r) {
                        n || (n = {});
                        for (var i = -1, o = e.length; ++i < o;) {
                            var a = e[i];
                            p(n, a, t[a])
                        }
                    }(e, function(t) {
                        return g(t) ? function(t, e) {
                            var n = m(t) || function(t) {
                                    return function(t) {
                                        return function(t) {
                                            return !!t && "object" == typeof t
                                        }(t) && g(t)
                                    }(t) && s.call(t, "callee") && (!c.call(t, "callee") || "[object Arguments]" == u.call(t))
                                }(t) ? function(t, e) {
                                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                                    return r
                                }(t.length, String) : [],
                                r = n.length,
                                i = !!r;
                            for (var o in t) !e && !s.call(t, o) || i && ("length" == o || d(o, r)) || n.push(o);
                            return n
                        }(t) : function(t) {
                            if (!v(t)) return l(t);
                            var e = [];
                            for (var n in Object(t)) s.call(t, n) && "constructor" != n && e.push(n);
                            return e
                        }(t)
                    }(e), t);
                    else
                        for (var n in e) s.call(e, n) && p(t, n, e[n])
                }, function(t, e) {
                    return e = h(void 0 === e ? t.length - 1 : e, 0),
                        function() {
                            for (var n = arguments, i = -1, o = h(n.length - e, 0), a = Array(o); ++i < o;) a[i] = n[e + i];
                            i = -1;
                            for (var s = Array(e + 1); ++i < e;) s[i] = n[i];
                            return s[e] = a, r(t, this, s)
                        }
                }((function(t, e) {
                    var n = -1,
                        r = e.length,
                        i = r > 1 ? e[r - 1] : void 0,
                        o = r > 2 ? e[2] : void 0;
                    for (i = b.length > 3 && "function" == typeof i ? (r--, i) : void 0, o && function(t, e, n) {
                            if (!k(n)) return !1;
                            var r = typeof e;
                            return !!("number" == r ? g(n) && d(e, n.length) : "string" == r && e in n) && y(n[e], t)
                        }(e[0], e[1], o) && (i = r < 3 ? void 0 : i, r = 1), t = Object(t); ++n < r;) {
                        var a = e[n];
                        a && b(t, a)
                    }
                    return t
                })));
                t.exports = w
            },
            6146: (t, e, n) => {
                t = n.nmd(t);
                var r = "__lodash_hash_undefined__",
                    i = 9007199254740991,
                    o = "[object Arguments]",
                    a = "[object Function]",
                    s = "[object Object]",
                    u = /^\[object .+?Constructor\]$/,
                    c = /^(?:0|[1-9]\d*)$/,
                    l = {};
                l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l[o] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l[a] = l["[object Map]"] = l["[object Number]"] = l[s] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1;
                var h = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                    f = "object" == typeof self && self && self.Object === Object && self,
                    p = h || f || Function("return this")(),
                    d = e && !e.nodeType && e,
                    v = d && t && !t.nodeType && t,
                    y = v && v.exports === d,
                    m = y && h.process,
                    g = function() {
                        try {
                            return v && v.require && v.require("util").types || m && m.binding && m.binding("util")
                        } catch (t) {}
                    }(),
                    k = g && g.isTypedArray;

                function b(t, e, n) {
                    switch (n.length) {
                        case 0:
                            return t.call(e);
                        case 1:
                            return t.call(e, n[0]);
                        case 2:
                            return t.call(e, n[0], n[1]);
                        case 3:
                            return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }
                var w, x, P, S = Array.prototype,
                    T = Function.prototype,
                    O = Object.prototype,
                    _ = p["__core-js_shared__"],
                    E = T.toString,
                    R = O.hasOwnProperty,
                    j = (w = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "")) ? "Symbol(src)_1." + w : "",
                    A = O.toString,
                    C = E.call(Object),
                    L = RegExp("^" + E.call(R).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    G = y ? p.Buffer : void 0,
                    M = p.Symbol,
                    I = p.Uint8Array,
                    F = (G && G.allocUnsafe, x = Object.getPrototypeOf, P = Object, function(t) {
                        return x(P(t))
                    }),
                    D = Object.create,
                    N = O.propertyIsEnumerable,
                    z = S.splice,
                    V = M ? M.toStringTag : void 0,
                    W = function() {
                        try {
                            var t = lt(Object, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {}
                    }(),
                    U = G ? G.isBuffer : void 0,
                    q = Math.max,
                    B = Date.now,
                    H = lt(p, "Map"),
                    X = lt(Object, "create"),
                    $ = function() {
                        function t() {}
                        return function(e) {
                            if (!xt(e)) return {};
                            if (D) return D(e);
                            t.prototype = e;
                            var n = new t;
                            return t.prototype = void 0, n
                        }
                    }();

                function Y(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function Z(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function J(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function K(t) {
                    var e = this.__data__ = new Z(t);
                    this.size = e.size
                }

                function Q(t, e, n) {
                    (void 0 !== n && !vt(t[e], n) || void 0 === n && !(e in t)) && nt(t, e, n)
                }

                function tt(t, e, n) {
                    var r = t[e];
                    R.call(t, e) && vt(r, n) && (void 0 !== n || e in t) || nt(t, e, n)
                }

                function et(t, e) {
                    for (var n = t.length; n--;)
                        if (vt(t[n][0], e)) return n;
                    return -1
                }

                function nt(t, e, n) {
                    "__proto__" == e && W ? W(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : t[e] = n
                }
                Y.prototype.clear = function() {
                    this.__data__ = X ? X(null) : {}, this.size = 0
                }, Y.prototype.delete = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }, Y.prototype.get = function(t) {
                    var e = this.__data__;
                    if (X) {
                        var n = e[t];
                        return n === r ? void 0 : n
                    }
                    return R.call(e, t) ? e[t] : void 0
                }, Y.prototype.has = function(t) {
                    var e = this.__data__;
                    return X ? void 0 !== e[t] : R.call(e, t)
                }, Y.prototype.set = function(t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = X && void 0 === e ? r : e, this
                }, Z.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, Z.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = et(e, t);
                    return !(n < 0 || (n == e.length - 1 ? e.pop() : z.call(e, n, 1), --this.size, 0))
                }, Z.prototype.get = function(t) {
                    var e = this.__data__,
                        n = et(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }, Z.prototype.has = function(t) {
                    return et(this.__data__, t) > -1
                }, Z.prototype.set = function(t, e) {
                    var n = this.__data__,
                        r = et(n, t);
                    return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                }, J.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Y,
                        map: new(H || Z),
                        string: new Y
                    }
                }, J.prototype.delete = function(t) {
                    var e = ct(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }, J.prototype.get = function(t) {
                    return ct(this, t).get(t)
                }, J.prototype.has = function(t) {
                    return ct(this, t).has(t)
                }, J.prototype.set = function(t, e) {
                    var n = ct(this, t),
                        r = n.size;
                    return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                }, K.prototype.clear = function() {
                    this.__data__ = new Z, this.size = 0
                }, K.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = e.delete(t);
                    return this.size = e.size, n
                }, K.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, K.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, K.prototype.set = function(t, e) {
                    var n = this.__data__;
                    if (n instanceof Z) {
                        var r = n.__data__;
                        if (!H || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new J(r)
                    }
                    return n.set(t, e), this.size = n.size, this
                };

                function rt(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : V && V in Object(t) ? function(t) {
                        var e = R.call(t, V),
                            n = t[V];
                        try {
                            t[V] = void 0;
                            var r = !0
                        } catch (t) {}
                        var i = A.call(t);
                        return r && (e ? t[V] = n : delete t[V]), i
                    }(t) : function(t) {
                        return A.call(t)
                    }(t)
                }

                function it(t) {
                    return Pt(t) && rt(t) == o
                }

                function ot(t, e, n, r, i) {
                    t !== e && function(t, e, n) {
                        for (var r = -1, i = Object(t), o = n(t), a = o.length; a--;) {
                            var s = o[++r];
                            if (!1 === e(i[s], s, i)) break
                        }
                    }(e, (function(o, a) {
                        if (i || (i = new K), xt(o)) ! function(t, e, n, r, i, o, a) {
                            var u = pt(t, n),
                                c = pt(e, n),
                                l = a.get(c);
                            if (l) Q(t, n, l);
                            else {
                                var h, f, p, d, v, y = o ? o(u, c, n + "", t, e, a) : void 0,
                                    m = void 0 === y;
                                if (m) {
                                    var g = mt(c),
                                        k = !g && kt(c),
                                        b = !g && !k && St(c);
                                    y = c, g || k || b ? mt(u) ? y = u : Pt(v = u) && gt(v) ? y = function(t, e) {
                                        var n = -1,
                                            r = t.length;
                                        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                                        return e
                                    }(u) : k ? (m = !1, y = function(t, e) {
                                        return t.slice()
                                    }(c)) : b ? (m = !1, d = new(p = (h = c).buffer).constructor(p.byteLength), new I(d).set(new I(p)), f = d, y = new h.constructor(f, h.byteOffset, h.length)) : y = [] : function(t) {
                                        if (!Pt(t) || rt(t) != s) return !1;
                                        var e = F(t);
                                        if (null === e) return !0;
                                        var n = R.call(e, "constructor") && e.constructor;
                                        return "function" == typeof n && n instanceof n && E.call(n) == C
                                    }(c) || yt(c) ? (y = u, yt(u) ? y = function(t) {
                                        return function(t, e, n, r) {
                                            var i = !n;
                                            n || (n = {});
                                            for (var o = -1, a = e.length; ++o < a;) {
                                                var s = e[o],
                                                    u = void 0;
                                                void 0 === u && (u = t[s]), i ? nt(n, s, u) : tt(n, s, u)
                                            }
                                            return n
                                        }(t, Ot(t))
                                    }(u) : xt(u) && !bt(u) || (y = function(t) {
                                        return "function" != typeof t.constructor || ft(t) ? {} : $(F(t))
                                    }(c))) : m = !1
                                }
                                m && (a.set(c, y), i(y, c, r, o, a), a.delete(c)), Q(t, n, y)
                            }
                        }(t, e, a, n, ot, r, i);
                        else {
                            var u = r ? r(pt(t, a), o, a + "", t, e, i) : void 0;
                            void 0 === u && (u = o), Q(t, a, u)
                        }
                    }), Ot)
                }

                function at(t, e) {
                    return dt(function(t, e, n) {
                        return e = q(void 0 === e ? t.length - 1 : e, 0),
                            function() {
                                for (var r = arguments, i = -1, o = q(r.length - e, 0), a = Array(o); ++i < o;) a[i] = r[e + i];
                                i = -1;
                                for (var s = Array(e + 1); ++i < e;) s[i] = r[i];
                                return s[e] = n(a), b(t, this, s)
                            }
                    }(t, e, Rt), t + "")
                }
                var st = W ? function(t, e) {
                    return W(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: (n = e, function() {
                            return n
                        }),
                        writable: !0
                    });
                    var n
                } : Rt;

                function ut(t, e, n, r, i, o) {
                    return xt(t) && xt(e) && (o.set(e, t), ot(t, e, void 0, ut, o), o.delete(e)), t
                }

                function ct(t, e) {
                    var n, r, i = t.__data__;
                    return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof e ? "string" : "hash"] : i.map
                }

                function lt(t, e) {
                    var n = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return function(t) {
                        return !(!xt(t) || function(t) {
                            return !!j && j in t
                        }(t)) && (bt(t) ? L : u).test(function(t) {
                            if (null != t) {
                                try {
                                    return E.call(t)
                                } catch (t) {}
                                try {
                                    return t + ""
                                } catch (t) {}
                            }
                            return ""
                        }(t))
                    }(n) ? n : void 0
                }

                function ht(t, e) {
                    var n = typeof t;
                    return !!(e = null == e ? i : e) && ("number" == n || "symbol" != n && c.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function ft(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || O)
                }

                function pt(t, e) {
                    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                }
                var dt = function(t) {
                    var e = 0,
                        n = 0;
                    return function() {
                        var r = B(),
                            i = 16 - (r - n);
                        if (n = r, i > 0) {
                            if (++e >= 800) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }(st);

                function vt(t, e) {
                    return t === e || t != t && e != e
                }
                var yt = it(function() {
                        return arguments
                    }()) ? it : function(t) {
                        return Pt(t) && R.call(t, "callee") && !N.call(t, "callee")
                    },
                    mt = Array.isArray;

                function gt(t) {
                    return null != t && wt(t.length) && !bt(t)
                }
                var kt = U || function() {
                    return !1
                };

                function bt(t) {
                    if (!xt(t)) return !1;
                    var e = rt(t);
                    return e == a || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }

                function wt(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
                }

                function xt(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function Pt(t) {
                    return null != t && "object" == typeof t
                }
                var St = k ? function(t) {
                        return function(e) {
                            return t(e)
                        }
                    }(k) : function(t) {
                        return Pt(t) && wt(t.length) && !!l[rt(t)]
                    },
                    Tt = at((function(t) {
                        return t.push(void 0, ut), b(Et, void 0, t)
                    }));

                function Ot(t) {
                    return gt(t) ? function(t, e) {
                        var n = mt(t),
                            r = !n && yt(t),
                            i = !n && !r && kt(t),
                            o = !n && !r && !i && St(t),
                            a = n || r || i || o,
                            s = a ? function(t, e) {
                                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                                return r
                            }(t.length, String) : [],
                            u = s.length;
                        for (var c in t) !e && !R.call(t, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ht(c, u)) || s.push(c);
                        return s
                    }(t, !0) : function(t) {
                        if (!xt(t)) return function(t) {
                            var e = [];
                            if (null != t)
                                for (var n in Object(t)) e.push(n);
                            return e
                        }(t);
                        var e = ft(t),
                            n = [];
                        for (var r in t)("constructor" != r || !e && R.call(t, r)) && n.push(r);
                        return n
                    }(t)
                }
                var _t, Et = (_t = function(t, e, n, r) {
                    ot(t, e, n, r)
                }, at((function(t, e) {
                    var n = -1,
                        r = e.length,
                        i = r > 1 ? e[r - 1] : void 0,
                        o = r > 2 ? e[2] : void 0;
                    for (i = _t.length > 3 && "function" == typeof i ? (r--, i) : void 0, o && function(t, e, n) {
                            if (!xt(n)) return !1;
                            var r = typeof e;
                            return !!("number" == r ? gt(n) && ht(e, n.length) : "string" == r && e in n) && vt(n[e], t)
                        }(e[0], e[1], o) && (i = r < 3 ? void 0 : i, r = 1), t = Object(t); ++n < r;) {
                        var a = e[n];
                        a && _t(t, a, n, i)
                    }
                    return t
                })));

                function Rt(t) {
                    return t
                }
                t.exports = Tt
            },
            9052: t => {
                var e, n, r = 9007199254740991,
                    i = /^(?:0|[1-9]\d*)$/,
                    o = Object.prototype,
                    a = o.hasOwnProperty,
                    s = o.toString,
                    u = o.propertyIsEnumerable,
                    c = (e = Object.keys, n = Object, function(t) {
                        return e(n(t))
                    });

                function l(t, e) {
                    return !!(e = null == e ? r : e) && ("number" == typeof t || i.test(t)) && t > -1 && t % 1 == 0 && t < e
                }
                var h = Array.isArray;

                function f(t) {
                    return null != t && function(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
                    }(t.length) && ! function(t) {
                        var e = function(t) {
                            var e = typeof t;
                            return !!t && ("object" == e || "function" == e)
                        }(t) ? s.call(t) : "";
                        return "[object Function]" == e || "[object GeneratorFunction]" == e
                    }(t)
                }

                function p(t) {
                    return f(t) ? function(t, e) {
                        var n = h(t) || function(t) {
                                return function(t) {
                                    return function(t) {
                                        return !!t && "object" == typeof t
                                    }(t) && f(t)
                                }(t) && a.call(t, "callee") && (!u.call(t, "callee") || "[object Arguments]" == s.call(t))
                            }(t) ? function(t, e) {
                                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                                return r
                            }(t.length, String) : [],
                            r = n.length,
                            i = !!r;
                        for (var o in t) !e && !a.call(t, o) || i && ("length" == o || l(o, r)) || n.push(o);
                        return n
                    }(t) : function(t) {
                        if (n = (e = t) && e.constructor, e !== ("function" == typeof n && n.prototype || o)) return c(t);
                        var e, n, r = [];
                        for (var i in Object(t)) a.call(t, i) && "constructor" != i && r.push(i);
                        return r
                    }(t)
                }

                function d(t) {
                    return t
                }
                t.exports = function(t, e) {
                    return t && function(t, e) {
                        return t && function(t, e, n) {
                            for (var r = -1, i = Object(t), o = n(t), a = o.length; a--;) {
                                var s = o[++r];
                                if (!1 === e(i[s], s, i)) break
                            }
                            return t
                        }(t, e, p)
                    }(t, "function" == typeof e ? e : d)
                }
            },
            6248: t => {
                var e = function(t) {
                    "use strict";
                    var e, n = Object.prototype,
                        r = n.hasOwnProperty,
                        i = "function" == typeof Symbol ? Symbol : {},
                        o = i.iterator || "@@iterator",
                        a = i.asyncIterator || "@@asyncIterator",
                        s = i.toStringTag || "@@toStringTag";

                    function u(t, e, n) {
                        return Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), t[e]
                    }
                    try {
                        u({}, "")
                    } catch (t) {
                        u = function(t, e, n) {
                            return t[e] = n
                        }
                    }

                    function c(t, e, n, r) {
                        var i = e && e.prototype instanceof y ? e : y,
                            o = Object.create(i.prototype),
                            a = new E(r || []);
                        return o._invoke = function(t, e, n) {
                            var r = h;
                            return function(i, o) {
                                if (r === p) throw new Error("Generator is already running");
                                if (r === d) {
                                    if ("throw" === i) throw o;
                                    return j()
                                }
                                for (n.method = i, n.arg = o;;) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = T(a, n);
                                        if (s) {
                                            if (s === v) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === h) throw r = d, n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = p;
                                    var u = l(t, e, n);
                                    if ("normal" === u.type) {
                                        if (r = n.done ? d : f, u.arg === v) continue;
                                        return {
                                            value: u.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === u.type && (r = d, n.method = "throw", n.arg = u.arg)
                                }
                            }
                        }(t, n, a), o
                    }

                    function l(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    t.wrap = c;
                    var h = "suspendedStart",
                        f = "suspendedYield",
                        p = "executing",
                        d = "completed",
                        v = {};

                    function y() {}

                    function m() {}

                    function g() {}
                    var k = {};
                    u(k, o, (function() {
                        return this
                    }));
                    var b = Object.getPrototypeOf,
                        w = b && b(b(R([])));
                    w && w !== n && r.call(w, o) && (k = w);
                    var x = g.prototype = y.prototype = Object.create(k);

                    function P(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            u(t, e, (function(t) {
                                return this._invoke(e, t)
                            }))
                        }))
                    }

                    function S(t, e) {
                        function n(i, o, a, s) {
                            var u = l(t[i], t, o);
                            if ("throw" !== u.type) {
                                var c = u.arg,
                                    h = c.value;
                                return h && "object" == typeof h && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                    n("next", t, a, s)
                                }), (function(t) {
                                    n("throw", t, a, s)
                                })) : e.resolve(h).then((function(t) {
                                    c.value = t, a(c)
                                }), (function(t) {
                                    return n("throw", t, a, s)
                                }))
                            }
                            s(u.arg)
                        }
                        var i;
                        this._invoke = function(t, r) {
                            function o() {
                                return new e((function(e, i) {
                                    n(t, r, e, i)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    }

                    function T(t, n) {
                        var r = t.iterator[n.method];
                        if (r === e) {
                            if (n.delegate = null, "throw" === n.method) {
                                if (t.iterator.return && (n.method = "return", n.arg = e, T(t, n), "throw" === n.method)) return v;
                                n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return v
                        }
                        var i = l(r, t.iterator, n.arg);
                        if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, v;
                        var o = i.arg;
                        return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, v) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
                    }

                    function O(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                    }

                    function _(t) {
                        var e = t.completion || {};
                        e.type = "normal", delete e.arg, t.completion = e
                    }

                    function E(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], t.forEach(O, this), this.reset(!0)
                    }

                    function R(t) {
                        if (t) {
                            var n = t[o];
                            if (n) return n.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var i = -1,
                                    a = function n() {
                                        for (; ++i < t.length;)
                                            if (r.call(t, i)) return n.value = t[i], n.done = !1, n;
                                        return n.value = e, n.done = !0, n
                                    };
                                return a.next = a
                            }
                        }
                        return {
                            next: j
                        }
                    }

                    function j() {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    return m.prototype = g, u(x, "constructor", g), u(g, "constructor", m), m.displayName = u(g, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
                    }, t.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, s, "GeneratorFunction")), t.prototype = Object.create(x), t
                    }, t.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }, P(S.prototype), u(S.prototype, a, (function() {
                        return this
                    })), t.AsyncIterator = S, t.async = function(e, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new S(c(e, n, r, i), o);
                        return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                            return t.done ? t.value : a.next()
                        }))
                    }, P(x), u(x, s, "Generator"), u(x, o, (function() {
                        return this
                    })), u(x, "toString", (function() {
                        return "[object Generator]"
                    })), t.keys = function(t) {
                        var e = [];
                        for (var n in t) e.push(n);
                        return e.reverse(),
                            function n() {
                                for (; e.length;) {
                                    var r = e.pop();
                                    if (r in t) return n.value = r, n.done = !1, n
                                }
                                return n.done = !0, n
                            }
                    }, t.values = R, E.prototype = {
                        constructor: E,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
                                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var n = this;

                            function i(r, i) {
                                return s.type = "throw", s.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o],
                                    s = a.completion;
                                if ("root" === a.tryLoc) return i("end");
                                if (a.tryLoc <= this.prev) {
                                    var u = r.call(a, "catchLoc"),
                                        c = r.call(a, "finallyLoc");
                                    if (u && c) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                    } else if (u) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), _(n), v
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        _(n)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, n, r) {
                            return this.delegate = {
                                iterator: R(t),
                                resultName: n,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = e), v
                        }
                    }, t
                }(t.exports);
                try {
                    regeneratorRuntime = e
                } catch (t) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
                }
            },
            5111: (t, e, n) => {
                "use strict";
                var r = n(9666);
                t.exports = function(t) {
                    if ("function" != typeof t) return !1;
                    if (!hasOwnProperty.call(t, "length")) return !1;
                    try {
                        if ("number" != typeof t.length) return !1;
                        if ("function" != typeof t.call) return !1;
                        if ("function" != typeof t.apply) return !1
                    } catch (t) {
                        return !1
                    }
                    return !r(t)
                }
            },
            4617: (t, e, n) => {
                "use strict";
                var r = n(1102),
                    i = {
                        object: !0,
                        function: !0,
                        undefined: !0
                    };
                t.exports = function(t) {
                    return !!r(t) && hasOwnProperty.call(i, typeof t)
                }
            },
            2307: (t, e, n) => {
                "use strict";
                var r = n(5111),
                    i = /^\s*class[\s{/}]/,
                    o = Function.prototype.toString;
                t.exports = function(t) {
                    return !!r(t) && !i.test(o.call(t))
                }
            },
            9666: (t, e, n) => {
                "use strict";
                var r = n(4617);
                t.exports = function(t) {
                    if (!r(t)) return !1;
                    try {
                        return !!t.constructor && t.constructor.prototype === t
                    } catch (t) {
                        return !1
                    }
                }
            },
            1102: t => {
                "use strict";
                t.exports = function(t) {
                    return null != t
                }
            },
            1583: (t, e, n) => {
                var r = n(5556);
                t.exports = r
            },
            3132: (t, e, n) => {
                var r = n(7382);
                t.exports = r
            },
            542: (t, e, n) => {
                var r = n(3123);
                t.exports = r
            },
            44: (t, e, n) => {
                var r = n(2446);
                t.exports = r
            },
            8554: (t, e, n) => {
                var r = n(4436),
                    i = n(4270);

                function o(t, e, n, r) {
                    if (r) {
                        var o = r[e];
                        if (i(o)) o.unhook && o.unhook(t, e, n);
                        else if ("attributes" === e)
                            for (var a in o) t.removeAttribute(a);
                        else if ("style" === e)
                            for (var s in o) t.style[s] = "";
                        else t[e] = "string" == typeof o ? "" : null
                    }
                }

                function a(t, e, n, i, o) {
                    var a = n ? n[i] : void 0;
                    if ("attributes" !== i)
                        if (a && r(a) && s(a) !== s(o)) t[i] = o;
                        else {
                            r(t[i]) || (t[i] = {});
                            var u = "style" === i ? "" : void 0;
                            for (var c in o) {
                                var l = o[c];
                                t[i][c] = void 0 === l ? u : l
                            }
                        }
                    else
                        for (var h in o) {
                            var f = o[h];
                            void 0 === f ? t.removeAttribute(h) : t.setAttribute(h, f)
                        }
                }

                function s(t) {
                    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__ ? t.__proto__ : t.constructor ? t.constructor.prototype : void 0
                }
                t.exports = function(t, e, n) {
                    for (var s in e) {
                        var u = e[s];
                        void 0 === u ? o(t, s, u, n) : i(u) ? (o(t, s, u, n), u.hook && u.hook(t, s, n ? n[s] : void 0)) : r(u) ? a(t, 0, n, s, u) : t[s] = u
                    }
                }
            },
            5556: (t, e, n) => {
                var r = n(474),
                    i = n(8554),
                    o = n(9683),
                    a = n(2592),
                    s = n(7127),
                    u = n(1575);
                t.exports = function t(e, n) {
                    var c = n && n.document || r,
                        l = n ? n.warn : null;
                    if (e = u(e).a, s(e)) return e.init();
                    if (a(e)) return c.createTextNode(e.text);
                    if (!o(e)) return l && l("Item is not a valid virtual dom node", e), null;
                    var h = null === e.namespace ? c.createElement(e.tagName) : c.createElementNS(e.namespace, e.tagName),
                        f = e.properties;
                    i(h, f);
                    for (var p = e.children, d = 0; d < p.length; d++) {
                        var v = t(p[d], n);
                        v && h.appendChild(v)
                    }
                    return h
                }
            },
            476: t => {
                var e = {};

                function n(t, i, o, a, s) {
                    if (a = a || {}, t) {
                        r(o, s, s) && (a[s] = t);
                        var u = i.children;
                        if (u)
                            for (var c = t.childNodes, l = 0; l < i.children.length; l++) {
                                s += 1;
                                var h = u[l] || e,
                                    f = s + (h.count || 0);
                                r(o, s, f) && n(c[l], h, o, a, s), s = f
                            }
                    }
                    return a
                }

                function r(t, e, n) {
                    if (0 === t.length) return !1;
                    for (var r, i, o = 0, a = t.length - 1; o <= a;) {
                        if (i = t[r = (a + o) / 2 >> 0], o === a) return i >= e && i <= n;
                        if (i < e) o = r + 1;
                        else {
                            if (!(i > n)) return !0;
                            a = r - 1
                        }
                    }
                    return !1
                }

                function i(t, e) {
                    return t > e ? 1 : -1
                }
                t.exports = function(t, e, r, o) {
                    return r && 0 !== r.length ? (r.sort(i), n(t, e, r, o, 0)) : {}
                }
            },
            4345: (t, e, n) => {
                var r = n(8554),
                    i = n(7127),
                    o = n(8248),
                    a = n(9243);

                function s(t, e) {
                    "function" == typeof e.destroy && i(e) && e.destroy(t)
                }
                t.exports = function(t, e, n) {
                    var i, u, c = t.type,
                        l = t.vNode,
                        h = t.patch;
                    switch (c) {
                        case o.REMOVE:
                            return function(t, e) {
                                var n = t.parentNode;
                                return n && n.removeChild(t), s(t, e), null
                            }(e, l);
                        case o.INSERT:
                            return function(t, e, n) {
                                var r = n.render(e, n);
                                return t && t.appendChild(r), t
                            }(e, h, n);
                        case o.VTEXT:
                            return function(t, e, n, r) {
                                var i;
                                if (3 === t.nodeType) t.replaceData(0, t.length, n.text), i = t;
                                else {
                                    var o = t.parentNode;
                                    i = r.render(n, r), o && i !== t && o.replaceChild(i, t)
                                }
                                return i
                            }(e, 0, h, n);
                        case o.WIDGET:
                            return function(t, e, n, r) {
                                var i, o = a(e, n);
                                i = o ? n.update(e, t) || t : r.render(n, r);
                                var u = t.parentNode;
                                return u && i !== t && u.replaceChild(i, t), o || s(t, e), i
                            }(e, l, h, n);
                        case o.VNODE:
                            return function(t, e, n, r) {
                                var i = t.parentNode,
                                    o = r.render(n, r);
                                return i && o !== t && i.replaceChild(o, t), o
                            }(e, 0, h, n);
                        case o.ORDER:
                            return function(t, e) {
                                for (var n, r, i, o = t.childNodes, a = {}, s = 0; s < e.removes.length; s++) n = o[(r = e.removes[s]).from], r.key && (a[r.key] = n), t.removeChild(n);
                                for (var u = o.length, c = 0; c < e.inserts.length; c++) n = a[(i = e.inserts[c]).key], t.insertBefore(n, i.to >= u++ ? null : o[i.to])
                            }(e, h), e;
                        case o.PROPS:
                            return r(e, h, l.properties), e;
                        case o.THUNK:
                            return i = e, u = n.patch(e, h, n), i && u && i !== u && i.parentNode && i.parentNode.replaceChild(u, i), u;
                        default:
                            return e
                    }
                }
            },
            2446: (t, e, n) => {
                var r = n(474),
                    i = n(8722),
                    o = n(5556),
                    a = n(476),
                    s = n(4345);

                function u(t, e, n) {
                    var i = function(t) {
                        var e = [];
                        for (var n in t) "a" !== n && e.push(Number(n));
                        return e
                    }(e);
                    if (0 === i.length) return t;
                    var o = a(t, e.a, i),
                        s = t.ownerDocument;
                    n.document || s === r || (n.document = s);
                    for (var u = 0; u < i.length; u++) {
                        var l = i[u];
                        t = c(t, o[l], e[l], n)
                    }
                    return t
                }

                function c(t, e, n, r) {
                    if (!e) return t;
                    var o;
                    if (i(n))
                        for (var a = 0; a < n.length; a++) o = s(n[a], e, r), e === t && (t = o);
                    else o = s(n, e, r), e === t && (t = o);
                    return t
                }
                t.exports = function t(e, n, r) {
                    return (r = r || {}).patch = r.patch && r.patch !== t ? r.patch : u, r.render = r.render || o, r.patch(e, n, r)
                }
            },
            9243: (t, e, n) => {
                var r = n(7127);
                t.exports = function(t, e) {
                    return !(!r(t) || !r(e)) && ("name" in t && "name" in e ? t.id === e.id : t.init === e.init)
                }
            },
            2796: (t, e, n) => {
                "use strict";
                var r = n(9401);

                function i(t) {
                    if (!(this instanceof i)) return new i(t);
                    this.value = t
                }
                t.exports = i, i.prototype.hook = function(t, e) {
                    r(t)[e.substr(3)] = this.value
                }, i.prototype.unhook = function(t, e) {
                    r(t)[e.substr(3)] = void 0
                }
            },
            3726: t => {
                "use strict";

                function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    this.value = t
                }
                t.exports = e, e.prototype.hook = function(t, e) {
                    t[e] !== this.value && (t[e] = this.value)
                }
            },
            3123: (t, e, n) => {
                "use strict";
                var r = n(8722),
                    i = n(9327),
                    o = n(6181),
                    a = n(9683),
                    s = n(2592),
                    u = n(7127),
                    c = n(4270),
                    l = n(5483),
                    h = n(7303),
                    f = n(3726),
                    p = n(2796);

                function d(t, e, n, i) {
                    if ("string" == typeof t) e.push(new o(t));
                    else if ("number" == typeof t) e.push(new o(String(t)));
                    else if (v(t)) e.push(t);
                    else {
                        if (!r(t)) {
                            if (null == t) return;
                            throw s = {
                                foreignObject: t,
                                parentVnode: {
                                    tagName: n,
                                    properties: i
                                }
                            }, (u = new Error).type = "virtual-hyperscript.unexpected.virtual-element", u.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + y(s.foreignObject) + ".\nThe parent vnode is:\n" + y(s.parentVnode), u.foreignObject = s.foreignObject, u.parentVnode = s.parentVnode, u
                        }
                        for (var a = 0; a < t.length; a++) d(t[a], e, n, i)
                    }
                    var s, u
                }

                function v(t) {
                    return a(t) || s(t) || u(t) || l(t)
                }

                function y(t) {
                    try {
                        return JSON.stringify(t, null, "    ")
                    } catch (e) {
                        return String(t)
                    }
                }
                t.exports = function(t, e, n) {
                    var o, a, s, u, l, y = [];
                    return !n && ("string" == typeof(l = e) || r(l) || v(l)) && (n = e, a = {}), o = h(t, a = a || e || {}), a.hasOwnProperty("key") && (s = a.key, a.key = void 0), a.hasOwnProperty("namespace") && (u = a.namespace, a.namespace = void 0), "INPUT" !== o || u || !a.hasOwnProperty("value") || void 0 === a.value || c(a.value) || (a.value = f(a.value)),
                        function(t) {
                            for (var e in t)
                                if (t.hasOwnProperty(e)) {
                                    var n = t[e];
                                    if (c(n)) continue;
                                    "ev-" === e.substr(0, 3) && (t[e] = p(n))
                                }
                        }(a), null != n && d(n, y, o, a), new i(o, a, y, s, u)
                }
            },
            7303: (t, e, n) => {
                "use strict";
                var r = n(8098),
                    i = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,
                    o = /^\.|#/;
                t.exports = function(t, e) {
                    if (!t) return "DIV";
                    var n, a, s, u, c = !e.hasOwnProperty("id"),
                        l = r(t, i),
                        h = null;
                    for (o.test(l[1]) && (h = "DIV"), u = 0; u < l.length; u++)(a = l[u]) && (s = a.charAt(0), h ? "." === s ? (n = n || []).push(a.substring(1, a.length)) : "#" === s && c && (e.id = a.substring(1, a.length)) : h = a);
                    return n && (e.className && n.push(e.className), e.className = n.join(" ")), e.namespace ? h : h.toUpperCase()
                }
            },
            1575: (t, e, n) => {
                var r = n(9683),
                    i = n(2592),
                    o = n(7127),
                    a = n(5483);

                function s(t, e) {
                    var n = t.vnode;
                    if (n || (n = t.vnode = t.render(e)), !(r(n) || i(n) || o(n))) throw new Error("thunk did not return a valid node");
                    return n
                }
                t.exports = function(t, e) {
                    var n = t,
                        r = e;
                    return a(e) && (r = s(e, t)), a(t) && (n = s(t, null)), {
                        a: n,
                        b: r
                    }
                }
            },
            5483: t => {
                t.exports = function(t) {
                    return t && "Thunk" === t.type
                }
            },
            4270: t => {
                t.exports = function(t) {
                    return t && ("function" == typeof t.hook && !t.hasOwnProperty("hook") || "function" == typeof t.unhook && !t.hasOwnProperty("unhook"))
                }
            },
            9683: (t, e, n) => {
                var r = n(9289);
                t.exports = function(t) {
                    return t && "VirtualNode" === t.type && t.version === r
                }
            },
            2592: (t, e, n) => {
                var r = n(9289);
                t.exports = function(t) {
                    return t && "VirtualText" === t.type && t.version === r
                }
            },
            7127: t => {
                t.exports = function(t) {
                    return t && "Widget" === t.type
                }
            },
            9289: t => {
                t.exports = "2"
            },
            9327: (t, e, n) => {
                var r = n(9289),
                    i = n(9683),
                    o = n(7127),
                    a = n(5483),
                    s = n(4270);
                t.exports = l;
                var u = {},
                    c = [];

                function l(t, e, n, r, l) {
                    this.tagName = t, this.properties = e || u, this.children = n || c, this.key = null != r ? String(r) : void 0, this.namespace = "string" == typeof l ? l : null;
                    var h, f = n && n.length || 0,
                        p = 0,
                        d = !1,
                        v = !1,
                        y = !1;
                    for (var m in e)
                        if (e.hasOwnProperty(m)) {
                            var g = e[m];
                            s(g) && g.unhook && (h || (h = {}), h[m] = g)
                        } for (var k = 0; k < f; k++) {
                        var b = n[k];
                        i(b) ? (p += b.count || 0, !d && b.hasWidgets && (d = !0), !v && b.hasThunks && (v = !0), y || !b.hooks && !b.descendantHooks || (y = !0)) : !d && o(b) ? "function" == typeof b.destroy && (d = !0) : !v && a(b) && (v = !0)
                    }
                    this.count = f + p, this.hasWidgets = d, this.hasThunks = v, this.hooks = h, this.descendantHooks = y
                }
                l.prototype.version = r, l.prototype.type = "VirtualNode"
            },
            8248: (t, e, n) => {
                var r = n(9289);

                function i(t, e, n) {
                    this.type = Number(t), this.vNode = e, this.patch = n
                }
                i.NONE = 0, i.VTEXT = 1, i.VNODE = 2, i.WIDGET = 3, i.PROPS = 4, i.ORDER = 5, i.INSERT = 6, i.REMOVE = 7, i.THUNK = 8, t.exports = i, i.prototype.version = r, i.prototype.type = "VirtualPatch"
            },
            6181: (t, e, n) => {
                var r = n(9289);

                function i(t) {
                    this.text = String(t)
                }
                t.exports = i, i.prototype.version = r, i.prototype.type = "VirtualText"
            },
            2416: (t, e, n) => {
                var r = n(4436),
                    i = n(4270);

                function o(t) {
                    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__ ? t.__proto__ : t.constructor ? t.constructor.prototype : void 0
                }
                t.exports = function t(e, n) {
                    var a;
                    for (var s in e) {
                        s in n || ((a = a || {})[s] = void 0);
                        var u = e[s],
                            c = n[s];
                        if (u !== c)
                            if (r(u) && r(c))
                                if (o(c) !== o(u))(a = a || {})[s] = c;
                                else if (i(c))(a = a || {})[s] = c;
                        else {
                            var l = t(u, c);
                            l && ((a = a || {})[s] = l)
                        } else(a = a || {})[s] = c
                    }
                    for (var h in n) h in e || ((a = a || {})[h] = n[h]);
                    return a
                }
            },
            7382: (t, e, n) => {
                var r = n(8722),
                    i = n(8248),
                    o = n(9683),
                    a = n(2592),
                    s = n(7127),
                    u = n(5483),
                    c = n(1575),
                    l = n(2416);

                function h(t, e) {
                    var n = {
                        a: t
                    };
                    return f(t, e, n, 0), n
                }

                function f(t, e, n, r) {
                    if (t !== e) {
                        var c = n[r],
                            h = !1;
                        if (u(t) || u(e)) v(t, e, n, r);
                        else if (null == e) s(t) || (p(t, n, r), c = n[r]), c = k(c, new i(i.REMOVE, t, e));
                        else if (o(e))
                            if (o(t))
                                if (t.tagName === e.tagName && t.namespace === e.namespace && t.key === e.key) {
                                    var d = l(t.properties, e.properties);
                                    d && (c = k(c, new i(i.PROPS, t, d))), c = function(t, e, n, r, a) {
                                        for (var s = t.children, u = function(t, e) {
                                                var n = g(e),
                                                    r = n.keys,
                                                    i = n.free;
                                                if (i.length === e.length) return {
                                                    children: e,
                                                    moves: null
                                                };
                                                var o = g(t),
                                                    a = o.keys;
                                                if (o.free.length === t.length) return {
                                                    children: e,
                                                    moves: null
                                                };
                                                for (var s = [], u = 0, c = i.length, l = 0, h = 0; h < t.length; h++) {
                                                    var f, p = t[h];
                                                    p.key ? r.hasOwnProperty(p.key) ? (f = r[p.key], s.push(e[f])) : (f = h - l++, s.push(null)) : u < c ? (f = i[u++], s.push(e[f])) : (f = h - l++, s.push(null))
                                                }
                                                for (var d = u >= i.length ? e.length : i[u], v = 0; v < e.length; v++) {
                                                    var y = e[v];
                                                    y.key ? a.hasOwnProperty(y.key) || s.push(y) : v >= d && s.push(y)
                                                }
                                                for (var k, b = s.slice(), w = 0, x = [], P = [], S = 0; S < e.length;) {
                                                    var T = e[S];
                                                    for (k = b[w]; null === k && b.length;) x.push(m(b, w, null)), k = b[w];
                                                    k && k.key === T.key ? (w++, S++) : T.key ? (k && k.key && r[k.key] !== S + 1 ? (x.push(m(b, w, k.key)), (k = b[w]) && k.key === T.key ? w++ : P.push({
                                                        key: T.key,
                                                        to: S
                                                    })) : P.push({
                                                        key: T.key,
                                                        to: S
                                                    }), S++) : k && k.key && x.push(m(b, w, k.key))
                                                }
                                                for (; w < b.length;) k = b[w], x.push(m(b, w, k && k.key));
                                                return x.length !== l || P.length ? {
                                                    children: s,
                                                    moves: {
                                                        removes: x,
                                                        inserts: P
                                                    }
                                                } : {
                                                    children: s,
                                                    moves: null
                                                }
                                            }(s, e.children), c = u.children, l = s.length, h = c.length, p = l > h ? l : h, d = 0; d < p; d++) {
                                            var v = s[d],
                                                y = c[d];
                                            a += 1, v ? f(v, y, n, a) : y && (r = k(r, new i(i.INSERT, null, y))), o(v) && v.count && (a += v.count)
                                        }
                                        return u.moves && (r = k(r, new i(i.ORDER, t, u.moves))), r
                                    }(t, e, n, c, r)
                                } else c = k(c, new i(i.VNODE, t, e)), h = !0;
                        else c = k(c, new i(i.VNODE, t, e)), h = !0;
                        else a(e) ? a(t) ? t.text !== e.text && (c = k(c, new i(i.VTEXT, t, e))) : (c = k(c, new i(i.VTEXT, t, e)), h = !0) : s(e) && (s(t) || (h = !0), c = k(c, new i(i.WIDGET, t, e)));
                        c && (n[r] = c), h && p(t, n, r)
                    }
                }

                function p(t, e, n) {
                    y(t, e, n), d(t, e, n)
                }

                function d(t, e, n) {
                    if (s(t)) "function" == typeof t.destroy && (e[n] = k(e[n], new i(i.REMOVE, t, null)));
                    else if (o(t) && (t.hasWidgets || t.hasThunks))
                        for (var r = t.children, a = r.length, c = 0; c < a; c++) {
                            var l = r[c];
                            d(l, e, n += 1), o(l) && l.count && (n += l.count)
                        } else u(t) && v(t, null, e, n)
                }

                function v(t, e, n, r) {
                    var o = c(t, e),
                        a = h(o.a, o.b);
                    (function(t) {
                        for (var e in t)
                            if ("a" !== e) return !0;
                        return !1
                    })(a) && (n[r] = new i(i.THUNK, null, a))
                }

                function y(t, e, n) {
                    if (o(t)) {
                        if (t.hooks && (e[n] = k(e[n], new i(i.PROPS, t, function(t) {
                                var e = {};
                                for (var n in t) e[n] = void 0;
                                return e
                            }(t.hooks)))), t.descendantHooks || t.hasThunks)
                            for (var r = t.children, a = r.length, s = 0; s < a; s++) {
                                var c = r[s];
                                y(c, e, n += 1), o(c) && c.count && (n += c.count)
                            }
                    } else u(t) && v(t, null, e, n)
                }

                function m(t, e, n) {
                    return t.splice(e, 1), {
                        from: e,
                        key: n
                    }
                }

                function g(t) {
                    for (var e = {}, n = [], r = t.length, i = 0; i < r; i++) {
                        var o = t[i];
                        o.key ? e[o.key] = i : n.push(i)
                    }
                    return {
                        keys: e,
                        free: n
                    }
                }

                function k(t, e) {
                    return t ? (r(t) ? t.push(e) : t = [t, e], t) : e
                }
                t.exports = h
            },
            6385: t => {
                "use strict";

                function e(t) {
                    for (var e, n = 1 / 0, r = -1 / 0, i = 0, o = t.length; i < o; i++) n > (e = t[i]) && (n = e), r < e && (r = e);
                    return {
                        min: n,
                        max: r
                    }
                }

                function n(t, e) {
                    var n = Math.pow(2, e - 1),
                        r = t < 0 ? t * n : t * (n - 1);
                    return Math.max(-n, Math.min(n - 1, r))
                }

                function r(t, r, o) {
                    var a, s, u, c, l, h, f = t.length,
                        p = Math.ceil(f / r),
                        d = i(o, 2 * p);
                    for (a = 0; a < p; a++) s = a * r, u = (a + 1) * r > f ? f : (a + 1) * r, l = n((h = e(t.subarray(s, u))).min, o), c = n(h.max, o), d[2 * a] = l, d[2 * a + 1] = c;
                    return d
                }

                function i(t, e) {
                    return new(new Function(`return Int${t}Array`)())(e)
                }

                function o(t, e) {
                    return "number" == typeof t ? t : e
                }
                t.exports = function(t, e, n, a, s, u) {
                    if (e = o(e, 1e3), u = o(u, 16), null == n && (n = !0), [8, 16, 32].indexOf(u) < 0) throw new Error("Invalid number of bits specified for peaks.");
                    var c, l, h = t.numberOfChannels,
                        f = [];
                    if (a = o(a, 0), s = o(s, t.length), void 0 === t.subarray)
                        for (c = 0; c < h; c++) l = t.getChannelData(c).subarray(a, s), f.push(r(l, e, u));
                    else f.push(r(t.subarray(a, s), e, u));
                    return n && f.length > 1 && (f = function(t, e) {
                        var n, r, o = t.length,
                            a = 1 / o,
                            s = t[0].length / 2,
                            u = 0,
                            c = 0,
                            l = i(e, 2 * s);
                        for (c = 0; c < s; c++) {
                            for (n = 0, r = 0, u = 0; u < o; u++) n += a * t[u][2 * c], r += a * t[u][2 * c + 1];
                            l[2 * c] = n, l[2 * c + 1] = r
                        }
                        return [l]
                    }(f, u)), {
                        length: f[0].length / 2,
                        data: f,
                        bits: u
                    }
                }
            },
            8722: t => {
                var e = Array.isArray,
                    n = Object.prototype.toString;
                t.exports = e || function(t) {
                    return "[object Array]" === n.call(t)
                }
            },
            444: () => {}
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r](o, o.exports, n), o.loaded = !0, o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.nmd = t => (t.paths = [], t.children || (t.children = []), t);
    var r = {};
    (() => {
        "use strict";
        n.r(r), n.d(r, {
            default: () => _t,
            init: () => Ot
        });
        var t = n(6146),
            e = n.n(t),
            i = n(1583),
            o = n.n(i),
            a = n(8709),
            s = n.n(a);

        function u(t, e, n, r, i, o, a) {
            try {
                var s = t[o](a),
                    u = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(r, i)
        }

        function c(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function h(t, e, n) {
            return e && l(t.prototype, e), n && l(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }
        var f = n(7135),
            p = n.n(f),
            d = n(542),
            v = n.n(d),
            y = n(3132),
            m = n.n(y),
            g = n(44),
            k = n.n(g),
            b = n(1072),
            w = n.n(b);

        function x(t, e) {
            return Math.ceil(t * e)
        }

        function P(t, e, n) {
            return t * e / n
        }

        function S(t, e, n) {
            return Math.ceil(t * n / e)
        }

        function T(t) {
            return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, T(t)
        }

        function O(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = T(t)););
            return t
        }

        function _() {
            return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var r = O(t, e);
                if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                }
            }, _.apply(this, arguments)
        }

        function E(t, e) {
            return E = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            }, E(t, e)
        }

        function R(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && E(t, e)
        }

        function j(t) {
            return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, j(t)
        }

        function A(t, e) {
            if (e && ("object" === j(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }
        var C = function() {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s()();
                c(this, t), this.src = e, this.ac = n, this.audioRequestState = 0, this.ee = r
            }
            return h(t, [{
                key: "setStateChange",
                value: function(t) {
                    this.audioRequestState = t, this.ee.emit("audiorequeststatechange", this.audioRequestState, this.src)
                }
            }, {
                key: "fileProgress",
                value: function(t) {
                    var e = 0;
                    0 === this.audioRequestState && this.setStateChange(1), t.lengthComputable && (e = t.loaded / t.total * 100), this.ee.emit("loadprogress", e, this.src)
                }
            }, {
                key: "fileLoad",
                value: function(t) {
                    var e = this,
                        n = t.target.response || t.target.result;
                    return this.setStateChange(2), new Promise((function(t, r) {
                        e.ac.decodeAudioData(n, (function(n) {
                            e.audioBuffer = n, e.setStateChange(3), t(n)
                        }), (function(t) {
                            r(null === t ? Error("MediaDecodeAudioDataUnknownContentType") : t)
                        }))
                    }))
                }
            }]), t
        }();
        var L = function(t) {
            R(i, t);
            var e, n, r = (e = i, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }(), function() {
                var t, r = T(e);
                if (n) {
                    var i = T(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else t = r.apply(this, arguments);
                return A(this, t)
            });

            function i() {
                return c(this, i), r.apply(this, arguments)
            }
            return h(i, [{
                key: "load",
                value: function() {
                    var t = this;
                    return new Promise((function(e, n) {
                        if (t.src.type.match(/audio.*/) || t.src.type.match(/video\/ogg/)) {
                            var r = new FileReader;
                            r.readAsArrayBuffer(t.src), r.addEventListener("progress", (function(e) {
                                _(T(i.prototype), "fileProgress", t).call(t, e)
                            })), r.addEventListener("load", (function(r) {
                                _(T(i.prototype), "fileLoad", t).call(t, r).then((function(t) {
                                    e(t)
                                })).catch(n)
                            })), r.addEventListener("error", n)
                        } else n(Error("Unsupported file type ".concat(t.src.type)))
                    }))
                }
            }]), i
        }(C);
        var G = function(t) {
            R(i, t);
            var e, n, r = (e = i, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }(), function() {
                var t, r = T(e);
                if (n) {
                    var i = T(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else t = r.apply(this, arguments);
                return A(this, t)
            });

            function i() {
                return c(this, i), r.apply(this, arguments)
            }
            return h(i, [{
                key: "load",
                value: function() {
                    return Promise.resolve(this.src)
                }
            }]), i
        }(C);
        var M = function(t) {
                R(i, t);
                var e, n, r = (e = i, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, r = T(e);
                    if (n) {
                        var i = T(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return A(this, t)
                });

                function i() {
                    return c(this, i), r.apply(this, arguments)
                }
                return h(i, [{
                    key: "load",
                    value: function() {
                        var t = this;
                        return new Promise((function(e, n) {
                            var r = new XMLHttpRequest;
                            r.open("GET", t.src, !0), r.responseType = "arraybuffer", r.send(), r.addEventListener("progress", (function(e) {
                                _(T(i.prototype), "fileProgress", t).call(t, e)
                            })), r.addEventListener("load", (function(r) {
                                _(T(i.prototype), "fileLoad", t).call(t, r).then((function(t) {
                                    e(t)
                                })).catch(n)
                            })), r.addEventListener("error", (function() {
                                n(Error("Track ".concat(t.src, " failed to load")))
                            }))
                        }))
                    }
                }]), i
            }(C),
            I = function() {
                function t() {
                    c(this, t)
                }
                return h(t, null, [{
                    key: "createLoader",
                    value: function(t, e, n) {
                        if (t instanceof Blob) return new L(t, e, n);
                        if (t instanceof AudioBuffer) return new G(t, e, n);
                        if ("string" == typeof t) return new M(t, e, n);
                        throw new Error("Unsupported src type")
                    }
                }]), t
            }(),
            F = function() {
                function t(e) {
                    c(this, t), this.playlist = e
                }
                return h(t, [{
                    key: "hook",
                    value: function(t) {
                        var e = this.playlist;
                        if (!e.isScrolling) {
                            var n = t;
                            if (e.isAutomaticScroll) {
                                var r = t.getBoundingClientRect(),
                                    i = e.controls.show ? e.controls.width : 0,
                                    o = P(r.width - i, e.samplesPerPixel, e.sampleRate),
                                    a = e.isPlaying() ? e.playbackSeconds : e.getTimeSelection().start;
                                (a < e.scrollLeft || a >= e.scrollLeft + o) && (e.scrollLeft = Math.min(a, e.duration - o))
                            }
                            var s = S(e.scrollLeft, e.samplesPerPixel, e.sampleRate);
                            n.scrollLeft = s
                        }
                    }
                }]), t
            }(),
            D = function() {
                function t(e, n, r, i, o) {
                    c(this, t), this.tickInfo = e, this.offset = n, this.samplesPerPixel = r, this.duration = i, this.colors = o
                }
                return h(t, [{
                    key: "hook",
                    value: function(t, e, n) {
                        var r = this;
                        if (void 0 === n || n.offset !== this.offset || n.duration !== this.duration || n.samplesPerPixel !== this.samplesPerPixel) {
                            var i = t.width,
                                o = t.height,
                                a = t.getContext("2d");
                            a.clearRect(0, 0, i, o), a.fillStyle = this.colors.timeColor, Object.keys(this.tickInfo).forEach((function(t) {
                                var e = r.tickInfo[t],
                                    n = o - e;
                                a.fillRect(t, n, 1, e)
                            }))
                        }
                    }
                }]), t
            }(),
            N = function() {
                function t(e, n, r, i) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = arguments.length > 5 ? arguments[5] : void 0;
                    c(this, t), this.duration = e, this.offset = n, this.samplesPerPixel = r, this.sampleRate = i, this.marginLeft = o, this.colors = a, this.timeinfo = {
                        2e4: {
                            marker: 3e4,
                            bigStep: 1e4,
                            smallStep: 5e3,
                            secondStep: 5
                        },
                        12e3: {
                            marker: 15e3,
                            bigStep: 5e3,
                            smallStep: 1e3,
                            secondStep: 1
                        },
                        1e4: {
                            marker: 1e4,
                            bigStep: 5e3,
                            smallStep: 1e3,
                            secondStep: 1
                        },
                        5e3: {
                            marker: 5e3,
                            bigStep: 1e3,
                            smallStep: 500,
                            secondStep: .5
                        },
                        2500: {
                            marker: 2e3,
                            bigStep: 1e3,
                            smallStep: 500,
                            secondStep: .5
                        },
                        1500: {
                            marker: 2e3,
                            bigStep: 1e3,
                            smallStep: 200,
                            secondStep: .2
                        },
                        700: {
                            marker: 1e3,
                            bigStep: 500,
                            smallStep: 100,
                            secondStep: .1
                        }
                    }
                }
                return h(t, [{
                    key: "getScaleInfo",
                    value: function(t) {
                        var e = Object.keys(this.timeinfo).map((function(t) {
                            return parseInt(t, 10)
                        }));
                        e = e.sort((function(t, e) {
                            return t - e
                        }));
                        for (var n = 0; n < e.length; n += 1)
                            if (t <= e[n]) return this.timeinfo[e[n]];
                        return this.timeinfo[e[0]]
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var e = S(this.duration, this.samplesPerPixel, this.sampleRate), n = this.sampleRate / this.samplesPerPixel, r = S(this.offset, this.samplesPerPixel, this.sampleRate), i = this.getScaleInfo(this.samplesPerPixel), o = {}, a = [], s = e + r, u = 0, c = 0; c < s; c += n * i.secondStep) {
                            var l = Math.floor(c),
                                h = l - r;
                            l >= r && (i.marker && u % i.marker == 0 ? (a.push(v()("div.time", {
                                attributes: {
                                    style: "position: absolute; left: ".concat(h, "px;")
                                }
                            }, [t.formatTime(u)])), o[h] = 10) : i.bigStep && u % i.bigStep == 0 ? o[h] = 5 : i.smallStep && u % i.smallStep == 0 && (o[h] = 2)), u += 1e3 * i.secondStep
                        }
                        return v()("div.playlist-time-scale", {
                            attributes: {
                                style: "position: relative; left: 0; right: 0; margin-left: ".concat(this.marginLeft, "px;")
                            }
                        }, [a, v()("canvas", {
                            attributes: {
                                width: e,
                                height: 30,
                                style: "position: absolute; left: 0; right: 0; top: 0; bottom: 0;"
                            },
                            hook: new D(o, this.offset, this.samplesPerPixel, this.duration, this.colors)
                        })])
                    }
                }], [{
                    key: "formatTime",
                    value: function(t) {
                        var e = t / 1e3,
                            n = e % 60,
                            r = (e - n) / 60;
                        return n < 10 && (n = "0".concat(n)), "".concat(r, ":").concat(n)
                    }
                }]), t
            }();
        const z = N;
        var V, W = n(2473),
            U = n.n(W),
            q = n(9052),
            B = n.n(q),
            H = new Uint8Array(16);

        function X() {
            if (!V && !(V = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return V(H)
        }
        const $ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
            Y = function(t) {
                return "string" == typeof t && $.test(t)
            };
        for (var Z = [], J = 0; J < 256; ++J) Z.push((J + 256).toString(16).substr(1));
        const K = function(t, e, n) {
            var r = (t = t || {}).random || (t.rng || X)();
            if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {
                n = n || 0;
                for (var i = 0; i < 16; ++i) e[n + i] = r[i];
                return e
            }
            return function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (Z[t[e + 0]] + Z[t[e + 1]] + Z[t[e + 2]] + Z[t[e + 3]] + "-" + Z[t[e + 4]] + Z[t[e + 5]] + "-" + Z[t[e + 6]] + Z[t[e + 7]] + "-" + Z[t[e + 8]] + Z[t[e + 9]] + "-" + Z[t[e + 10]] + Z[t[e + 11]] + Z[t[e + 12]] + Z[t[e + 13]] + Z[t[e + 14]] + Z[t[e + 15]]).toLowerCase();
                if (!Y(n)) throw TypeError("Stringified UUID is invalid");
                return n
            }(r)
        };
        var Q = n(6385),
            tt = n.n(Q),
            et = n(9304),
            nt = function() {
                function t(e) {
                    c(this, t), this.track = e
                }
                return h(t, [{
                    key: "setup",
                    value: function(t, e) {
                        this.samplesPerPixel = t, this.sampleRate = e
                    }
                }, {
                    key: "click",
                    value: function(t) {
                        t.preventDefault();
                        var e = P(t.offsetX, this.samplesPerPixel, this.sampleRate);
                        this.track.ee.emit("select", e, e, this.track)
                    }
                }], [{
                    key: "getClass",
                    value: function() {
                        return ".state-cursor"
                    }
                }, {
                    key: "getEvents",
                    value: function() {
                        return ["click"]
                    }
                }]), t
            }(),
            rt = function() {
                function t(e) {
                    c(this, t), this.track = e, this.active = !1
                }
                return h(t, [{
                    key: "setup",
                    value: function(t, e) {
                        this.samplesPerPixel = t, this.sampleRate = e
                    }
                }, {
                    key: "emitSelection",
                    value: function(t) {
                        var e = Math.min(t, this.startX),
                            n = Math.max(t, this.startX),
                            r = P(e, this.samplesPerPixel, this.sampleRate),
                            i = P(n, this.samplesPerPixel, this.sampleRate);
                        this.track.ee.emit("select", r, i, this.track)
                    }
                }, {
                    key: "complete",
                    value: function(t) {
                        this.emitSelection(t), this.active = !1
                    }
                }, {
                    key: "mousedown",
                    value: function(t) {
                        t.preventDefault(), this.active = !0, this.startX = t.offsetX;
                        var e = P(this.startX, this.samplesPerPixel, this.sampleRate);
                        this.track.ee.emit("select", e, e, this.track)
                    }
                }, {
                    key: "mousemove",
                    value: function(t) {
                        this.active && (t.preventDefault(), this.emitSelection(t.offsetX))
                    }
                }, {
                    key: "mouseup",
                    value: function(t) {
                        this.active && (t.preventDefault(), this.complete(t.offsetX))
                    }
                }, {
                    key: "mouseleave",
                    value: function(t) {
                        this.active && (t.preventDefault(), this.complete(t.offsetX))
                    }
                }], [{
                    key: "getClass",
                    value: function() {
                        return ".state-select"
                    }
                }, {
                    key: "getEvents",
                    value: function() {
                        return ["mousedown", "mousemove", "mouseup", "mouseleave"]
                    }
                }]), t
            }(),
            it = function() {
                function t(e) {
                    c(this, t), this.track = e, this.active = !1
                }
                return h(t, [{
                    key: "setup",
                    value: function(t, e) {
                        this.samplesPerPixel = t, this.sampleRate = e
                    }
                }, {
                    key: "emitShift",
                    value: function(t) {
                        var e = P(t - this.prevX, this.samplesPerPixel, this.sampleRate);
                        this.prevX = t, this.track.ee.emit("shift", e, this.track)
                    }
                }, {
                    key: "complete",
                    value: function(t) {
                        this.emitShift(t), this.active = !1
                    }
                }, {
                    key: "mousedown",
                    value: function(t) {
                        t.preventDefault(), this.active = !0, this.el = t.target, this.prevX = t.offsetX
                    }
                }, {
                    key: "mousemove",
                    value: function(t) {
                        this.active && (t.preventDefault(), this.emitShift(t.offsetX))
                    }
                }, {
                    key: "mouseup",
                    value: function(t) {
                        this.active && (t.preventDefault(), this.complete(t.offsetX))
                    }
                }, {
                    key: "mouseleave",
                    value: function(t) {
                        this.active && (t.preventDefault(), this.complete(t.offsetX))
                    }
                }], [{
                    key: "getClass",
                    value: function() {
                        return ".state-shift"
                    }
                }, {
                    key: "getEvents",
                    value: function() {
                        return ["mousedown", "mousemove", "mouseup", "mouseleave"]
                    }
                }]), t
            }(),
            ot = function() {
                function t(e) {
                    c(this, t), this.track = e
                }
                return h(t, [{
                    key: "setup",
                    value: function(t, e) {
                        this.samplesPerPixel = t, this.sampleRate = e
                    }
                }, {
                    key: "click",
                    value: function(t) {
                        var e = P(t.offsetX, this.samplesPerPixel, this.sampleRate);
                        e > this.track.getStartTime() && e < this.track.getEndTime() && this.track.ee.emit("fadein", e - this.track.getStartTime(), this.track)
                    }
                }], [{
                    key: "getClass",
                    value: function() {
                        return ".state-fadein"
                    }
                }, {
                    key: "getEvents",
                    value: function() {
                        return ["click"]
                    }
                }]), t
            }(),
            at = function() {
                function t(e) {
                    c(this, t), this.track = e
                }
                return h(t, [{
                    key: "setup",
                    value: function(t, e) {
                        this.samplesPerPixel = t, this.sampleRate = e
                    }
                }, {
                    key: "click",
                    value: function(t) {
                        var e = P(t.offsetX, this.samplesPerPixel, this.sampleRate);
                        e > this.track.getStartTime() && e < this.track.getEndTime() && this.track.ee.emit("fadeout", this.track.getEndTime() - e, this.track)
                    }
                }], [{
                    key: "getClass",
                    value: function() {
                        return ".state-fadeout"
                    }
                }, {
                    key: "getEvents",
                    value: function() {
                        return ["click"]
                    }
                }]), t
            }();
        const st = {
                cursor: nt,
                select: rt,
                shift: it,
                fadein: ot,
                fadeout: at
            },
            ut = function() {
                function t(e, n, r, i, o, a, s, u) {
                    c(this, t), this.peaks = e, this.offset = n, this.color = i, this.bits = r, this.scale = o, this.height = a, this.barWidth = s, this.barGap = u
                }
                return h(t, [{
                    key: "hook",
                    value: function(e, n, r) {
                        if (void 0 === r || r.peaks !== this.peaks || r.scale !== this.scale || r.height !== this.height) {
                            var i = this.scale,
                                o = e.width / i,
                                a = e.getContext("2d"),
                                s = e.height / i / 2,
                                u = Math.pow(2, this.bits - 1),
                                c = this.barWidth,
                                l = this.barGap,
                                h = c + l;
                            a.clearRect(0, 0, e.width, e.height), a.save(), a.fillStyle = this.color, a.scale(i, i);
                            for (var f = 0; f < o; f += h) {
                                var p = this.peaks[2 * (f + this.offset)] / u,
                                    d = this.peaks[2 * (f + this.offset) + 1] / u;
                                t.drawFrame(a, s, f, p, d, c, l)
                            }
                            a.restore()
                        }
                    }
                }], [{
                    key: "drawFrame",
                    value: function(t, e, n, r, i, o, a) {
                        var s = Math.abs(r * e),
                            u = Math.abs(i * e);
                        t.fillRect(n, 0, o, e - u), t.fillRect(n, e + s, o, e - s), 0 !== a && t.fillRect(n + o, 0, a, 2 * e)
                    }
                }]), t
            }();
        var ct = n(4571),
            lt = function() {
                function t(e, n, r, i) {
                    c(this, t), this.type = e, this.shape = n, this.duration = r, this.samplesPerPixel = i
                }
                return h(t, [{
                    key: "hook",
                    value: function(e, n, r) {
                        if (void 0 === r || r.shape !== this.shape || r.type !== this.type || r.duration !== this.duration || r.samplesPerPixel !== this.samplesPerPixel) {
                            var i = e.getContext("2d"),
                                o = e.width,
                                a = e.height,
                                s = t.createCurve(this.shape, this.type, o),
                                u = s.length,
                                c = a - s[0] * a;
                            i.clearRect(0, 0, e.width, e.height), i.save(), i.strokeStyle = "black", i.beginPath(), i.moveTo(0, c);
                            for (var l = 1; l < u; l += 1) c = a - s[l] * a, i.lineTo(l, c);
                            i.stroke(), i.restore()
                        }
                    }
                }], [{
                    key: "createCurve",
                    value: function(t, e, n) {
                        var r, i;
                        switch (e) {
                            case et.Y1:
                                r = 1;
                                break;
                            case et.h7:
                                r = -1;
                                break;
                            default:
                                throw new Error("Unsupported fade type.")
                        }
                        switch (t) {
                            case et._h:
                                i = (0, ct.sCurve)(n, r);
                                break;
                            case et.t$:
                                i = (0, ct.linear)(n, r);
                                break;
                            case et.Jl:
                                i = (0, ct.exponential)(n, r);
                                break;
                            case et.Hp:
                                i = (0, ct.logarithmic)(n, 10, r);
                                break;
                            default:
                                throw new Error("Unsupported fade shape")
                        }
                        return i
                    }
                }]), t
            }();
        const ht = lt;
        var ft = function() {
                function t(e) {
                    c(this, t), this.gain = e
                }
                return h(t, [{
                    key: "hook",
                    value: function(t) {
                        t.value = 100 * this.gain, t.title = "".concat(Math.round(100 * this.gain), "% volume")
                    }
                }]), t
            }(),
            pt = function() {
                function t(e) {
                    c(this, t), this.stereoPan = e
                }
                return h(t, [{
                    key: "hook",
                    value: function(t) {
                        var e;
                        t.value = 100 * this.stereoPan, e = 0 === this.stereoPan ? "Center" : this.stereoPan < 0 ? "Left" : "Right";
                        var n = "".concat(Math.abs(Math.round(100 * this.stereoPan)), "% ");
                        t.title = "Pan: ".concat(0 !== this.stereoPan ? n : "").concat(e)
                    }
                }]), t
            }(),
            dt = function() {
                function t() {
                    c(this, t), this.name = "Untitled", this.customClass = void 0, this.waveOutlineColor = void 0, this.gain = 1, this.fades = {}, this.peakData = {
                        type: "WebAudio",
                        mono: !1
                    }, this.cueIn = 0, this.cueOut = 0, this.duration = 0, this.startTime = 0, this.endTime = 0, this.stereoPan = 0
                }
                return h(t, [{
                    key: "setEventEmitter",
                    value: function(t) {
                        this.ee = t
                    }
                }, {
                    key: "setName",
                    value: function(t) {
                        this.name = t
                    }
                }, {
                    key: "setCustomClass",
                    value: function(t) {
                        this.customClass = t
                    }
                }, {
                    key: "setWaveOutlineColor",
                    value: function(t) {
                        this.waveOutlineColor = t
                    }
                }, {
                    key: "setCues",
                    value: function(t, e) {
                        if (e < t) throw new Error("cue out cannot be less than cue in");
                        this.cueIn = t, this.cueOut = e, this.duration = this.cueOut - this.cueIn, this.endTime = this.startTime + this.duration
                    }
                }, {
                    key: "trim",
                    value: function(t, e) {
                        var n = this.getStartTime(),
                            r = this.getEndTime(),
                            i = this.cueIn - n;
                        if (n <= t && r >= t || n <= e && r >= e) {
                            var o = t < n ? n : t,
                                a = e > r ? r : e;
                            this.setCues(o + i, a + i), t > n && this.setStartTime(t)
                        }
                    }
                }, {
                    key: "setStartTime",
                    value: function(t) {
                        this.startTime = t, this.endTime = t + this.duration
                    }
                }, {
                    key: "setPlayout",
                    value: function(t) {
                        this.playout = t
                    }
                }, {
                    key: "setOfflinePlayout",
                    value: function(t) {
                        this.offlinePlayout = t
                    }
                }, {
                    key: "setEnabledStates",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = {
                                cursor: !0,
                                fadein: !0,
                                fadeout: !0,
                                select: !0,
                                shift: !0
                            };
                        this.enabledStates = U()({}, e, t)
                    }
                }, {
                    key: "setFadeIn",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "logarithmic";
                        if (t > this.duration) throw new Error("Invalid Fade In");
                        var n = {
                            shape: e,
                            start: 0,
                            end: t
                        };
                        this.fadeIn && (this.removeFade(this.fadeIn), this.fadeIn = void 0), this.fadeIn = this.saveFade(et.Y1, n.shape, n.start, n.end)
                    }
                }, {
                    key: "setFadeOut",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "logarithmic";
                        if (t > this.duration) throw new Error("Invalid Fade Out");
                        var n = {
                            shape: e,
                            start: this.duration - t,
                            end: this.duration
                        };
                        this.fadeOut && (this.removeFade(this.fadeOut), this.fadeOut = void 0), this.fadeOut = this.saveFade(et.h7, n.shape, n.start, n.end)
                    }
                }, {
                    key: "saveFade",
                    value: function(t, e, n, r) {
                        var i = K();
                        return this.fades[i] = {
                            type: t,
                            shape: e,
                            start: n,
                            end: r
                        }, i
                    }
                }, {
                    key: "removeFade",
                    value: function(t) {
                        delete this.fades[t]
                    }
                }, {
                    key: "setBuffer",
                    value: function(t) {
                        this.buffer = t
                    }
                }, {
                    key: "setPeakData",
                    value: function(t) {
                        this.peakData = t
                    }
                }, {
                    key: "calculatePeaks",
                    value: function(t, e) {
                        var n = x(this.cueIn, e),
                            r = x(this.cueOut, e);
                        this.setPeaks(tt()(this.buffer, t, this.peakData.mono, n, r))
                    }
                }, {
                    key: "setPeaks",
                    value: function(t) {
                        this.peaks = t
                    }
                }, {
                    key: "setState",
                    value: function(t) {
                        if (this.state = t, this.state && this.enabledStates[this.state]) {
                            var e = st[this.state];
                            this.stateObj = new e(this)
                        } else this.stateObj = void 0
                    }
                }, {
                    key: "getStartTime",
                    value: function() {
                        return this.startTime
                    }
                }, {
                    key: "getEndTime",
                    value: function() {
                        return this.endTime
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "isPlaying",
                    value: function() {
                        return this.playout.isPlaying()
                    }
                }, {
                    key: "setShouldPlay",
                    value: function(t) {
                        this.playout.setShouldPlay(t)
                    }
                }, {
                    key: "setGainLevel",
                    value: function(t) {
                        this.gain = t, this.playout.setVolumeGainLevel(t)
                    }
                }, {
                    key: "setMasterGainLevel",
                    value: function(t) {
                        this.playout.setMasterGainLevel(t)
                    }
                }, {
                    key: "setStereoPanValue",
                    value: function(t) {
                        this.stereoPan = t, this.playout.setStereoPanValue(t)
                    }
                }, {
                    key: "setEffects",
                    value: function(t) {
                        this.effectsGraph = t, this.playout.setEffects(t)
                    }
                }, {
                    key: "schedulePlay",
                    value: function(t, e, n, r) {
                        var i, o, a = t,
                            s = n ? n - e : void 0,
                            u = U()({}, {
                                shouldPlay: !0,
                                masterGain: 1,
                                isOffline: !1
                            }, r),
                            c = u.isOffline ? this.offlinePlayout : this.playout;
                        if (this.endTime <= e || s && e + s < this.startTime) return Promise.resolve();
                        this.startTime >= e ? (i = 0, a += this.startTime - e, n ? (s -= this.startTime - e, o = Math.min(s, this.duration)) : o = this.duration) : (i = e - this.startTime, o = n ? Math.min(s, this.duration - i) : this.duration - i), i += this.cueIn;
                        var l = e - this.startTime,
                            h = c.setUpSource();
                        return B()(this.fades, (function(e) {
                            var n, r;
                            if (l < e.end) switch (l <= e.start ? (n = t + (e.start - l), r = e.end - e.start) : l > e.start && l < e.end && (n = t - (l - e.start), r = e.end - e.start), e.type) {
                                case et.Y1:
                                    c.applyFadeIn(n, r, e.shape);
                                    break;
                                case et.h7:
                                    c.applyFadeOut(n, r, e.shape);
                                    break;
                                default:
                                    throw new Error("Invalid fade type saved on track.")
                            }
                        })), c.setVolumeGainLevel(this.gain), c.setShouldPlay(u.shouldPlay), c.setMasterGainLevel(u.masterGain), c.setStereoPanValue(this.stereoPan), c.play(a, i, o), h
                    }
                }, {
                    key: "scheduleStop",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.playout.stop(t)
                    }
                }, {
                    key: "renderOverlay",
                    value: function(t) {
                        var e = this,
                            n = S(t.playlistLength, t.resolution, t.sampleRate),
                            r = {
                                attributes: {
                                    style: "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: ".concat(n, "px; z-index: 9;")
                                }
                            },
                            i = "";
                        if (this.stateObj) {
                            this.stateObj.setup(t.resolution, t.sampleRate);
                            var o = st[this.state];
                            o.getEvents().forEach((function(t) {
                                r["on".concat(t)] = e.stateObj[t].bind(e.stateObj)
                            })), i = o.getClass()
                        }
                        return v()("div.playlist-overlay".concat(i), r)
                    }
                }, {
                    key: "renderControls",
                    value: function(t) {
                        var e = this,
                            n = t.muted ? ".active" : "",
                            r = t.soloed ? ".active" : "",
                            i = t.collapsed,
                            o = this.peaks.data.length,
                            a = t.controls.widgets,
                            s = v()("button.btn.btn-danger.btn-xs.track-remove", {
                                attributes: {
                                    type: "button",
                                    title: "Remove track"
                                },
                                onclick: function() {
                                    e.ee.emit("removeTrack", e)
                                }
                            }, [v()("i.fas.fa-times")]),
                            u = v()("span", [this.name]),
                            c = v()("button.btn.btn-info.btn-xs.track-collapse", {
                                attributes: {
                                    type: "button",
                                    title: i ? "Expand track" : "Collapse track"
                                },
                                onclick: function() {
                                    e.ee.emit("changeTrackView", e, {
                                        collapsed: !i
                                    })
                                }
                            }, [v()("i.fas.".concat(i ? "fa-caret-down" : "fa-caret-up"))]),
                            l = [];
                        a.remove && l.push(s), l.push(u), a.collapse && l.push(c);
                        var h = [v()("div.track-header", l)];
                        return i || (a.muteOrSolo && h.push(v()("div.btn-group", [v()("button.btn.btn-outline-dark.btn-xs.btn-mute".concat(n), {
                            attributes: {
                                type: "button"
                            },
                            onclick: function() {
                                e.ee.emit("mute", e)
                            }
                        }, ["Mute"]), v()("button.btn.btn-outline-dark.btn-xs.btn-solo".concat(r), {
                            onclick: function() {
                                e.ee.emit("solo", e)
                            }
                        }, ["Solo"])])), a.volume && h.push(v()("label.volume", [v()("input.volume-slider", {
                            attributes: {
                                "aria-label": "Track volume control",
                                type: "range",
                                min: 0,
                                max: 100,
                                value: 100
                            },
                            hook: new ft(this.gain),
                            oninput: function(t) {
                                e.ee.emit("volumechange", t.target.value, e)
                            }
                        })])), a.stereoPan && h.push(v()("label.stereopan", [v()("input.stereopan-slider", {
                            attributes: {
                                "aria-label": "Track stereo pan control",
                                type: "range",
                                min: -100,
                                max: 100,
                                value: 100
                            },
                            hook: new pt(this.stereoPan),
                            oninput: function(t) {
                                e.ee.emit("stereopan", t.target.value / 100, e)
                            }
                        })]))), v()("div.controls", {
                            attributes: {
                                style: "height: ".concat(o * t.height, "px; width: ").concat(t.controls.width, "px; position: absolute; left: 0; z-index: 10;")
                            }
                        }, h)
                    }
                }, {
                    key: "render",
                    value: function(t) {
                        var e = this,
                            n = this.peaks.length,
                            r = S(t.playbackSeconds, t.resolution, t.sampleRate),
                            i = S(this.startTime, t.resolution, t.sampleRate),
                            o = S(this.endTime, t.resolution, t.sampleRate),
                            a = 0,
                            s = this.peaks.data.length,
                            u = Math.ceil(window.devicePixelRatio);
                        r > 0 && r > i && (a = r < o ? r - i : n);
                        var c = [v()("div.cursor", {
                                attributes: {
                                    style: "position: absolute; width: 1px; margin: 0; padding: 0; top: 0; left: ".concat(r, "px; bottom: 0; z-index: 5;")
                                }
                            })],
                            l = Object.keys(this.peaks.data).map((function(r) {
                                for (var o = [v()("div.channel-progress", {
                                        attributes: {
                                            style: "position: absolute; width: ".concat(a, "px; height: ").concat(t.height, "px; z-index: 2;")
                                        }
                                    })], s = 0, c = n, l = e.peaks.data[r]; c > 0;) {
                                    var h = Math.min(c, 1e3),
                                        f = e.waveOutlineColor ? e.waveOutlineColor : t.colors.waveOutlineColor;
                                    o.push(v()("canvas", {
                                        attributes: {
                                            width: h * u,
                                            height: t.height * u,
                                            style: "float: left; position: relative; margin: 0; padding: 0; z-index: 3; width: ".concat(h, "px; height: ").concat(t.height, "px;")
                                        },
                                        hook: new ut(l, s, e.peaks.bits, f, u, t.height, t.barWidth, t.barGap)
                                    })), c -= h, s += 1e3
                                }
                                if (e.fadeIn) {
                                    var p = e.fades[e.fadeIn],
                                        d = S(p.end - p.start, t.resolution, t.sampleRate);
                                    o.push(v()("div.wp-fade.wp-fadein", {
                                        attributes: {
                                            style: "position: absolute; height: ".concat(t.height, "px; width: ").concat(d, "px; top: 0; left: 0; z-index: 4;")
                                        }
                                    }, [v()("canvas", {
                                        attributes: {
                                            width: d,
                                            height: t.height
                                        },
                                        hook: new ht(p.type, p.shape, p.end - p.start, t.resolution)
                                    })]))
                                }
                                if (e.fadeOut) {
                                    var y = e.fades[e.fadeOut],
                                        m = S(y.end - y.start, t.resolution, t.sampleRate);
                                    o.push(v()("div.wp-fade.wp-fadeout", {
                                        attributes: {
                                            style: "position: absolute; height: ".concat(t.height, "px; width: ").concat(m, "px; top: 0; right: 0; z-index: 4;")
                                        }
                                    }, [v()("canvas", {
                                        attributes: {
                                            width: m,
                                            height: t.height
                                        },
                                        hook: new ht(y.type, y.shape, y.end - y.start, t.resolution)
                                    })]))
                                }
                                return v()("div.channel.channel-".concat(r), {
                                    attributes: {
                                        style: "height: ".concat(t.height, "px; width: ").concat(n, "px; top: ").concat(r * t.height, "px; left: ").concat(i, "px; position: absolute; margin: 0; padding: 0; z-index: 1;")
                                    }
                                }, o)
                            }));
                        if (c.push(l), c.push(this.renderOverlay(t)), !0 === t.isActive) {
                            var h = S(t.timeSelection.start, t.resolution, t.sampleRate),
                                f = S(t.timeSelection.end, t.resolution, t.sampleRate) - h + 1,
                                p = f > 1 ? ".segment" : ".point";
                            c.push(v()("div.selection".concat(p), {
                                attributes: {
                                    style: "position: absolute; width: ".concat(f, "px; bottom: 0; top: 0; left: ").concat(h, "px; z-index: 4;")
                                }
                            }))
                        }
                        var d = v()("div.waveform", {
                                attributes: {
                                    style: "height: ".concat(s * t.height, "px; position: relative;")
                                }
                            }, c),
                            y = [],
                            m = 0;
                        t.controls.show && (y.push(this.renderControls(t)), m = t.controls.width), y.push(d);
                        var g = t.shouldPlay ? "" : ".silent",
                            k = void 0 === this.customClass ? "" : ".".concat(this.customClass);
                        return v()("div.channel-wrapper".concat(g).concat(k), {
                            attributes: {
                                style: "margin-left: ".concat(m, "px; height: ").concat(t.height * s, "px;")
                            }
                        }, y)
                    }
                }, {
                    key: "getTrackDetails",
                    value: function() {
                        var t = {
                            src: this.src,
                            start: this.startTime,
                            end: this.endTime,
                            name: this.name,
                            customClass: this.customClass,
                            cuein: this.cueIn,
                            cueout: this.cueOut,
                            stereoPan: this.stereoPan,
                            gain: this.gain,
                            effects: this.effectsGraph
                        };
                        if (this.fadeIn) {
                            var e = this.fades[this.fadeIn];
                            t.fadeIn = {
                                shape: e.shape,
                                duration: e.end - e.start
                            }
                        }
                        if (this.fadeOut) {
                            var n = this.fades[this.fadeOut];
                            t.fadeOut = {
                                shape: n.shape,
                                duration: n.end - n.start
                            }
                        }
                        return t
                    }
                }]), t
            }();

        function vt(t, e) {
            t.connect(e)
        }
        var yt = function() {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.createGain();
                c(this, t), this.ac = e, this.gain = 1, this.effectsGraph = vt, this.masterEffectsGraph = vt, this.buffer = n, this.masterGain = r, this.destination = this.ac.destination
            }
            return h(t, [{
                key: "applyFade",
                value: function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "logarithmic";
                    if (t === et.Y1)(0, et.L7)(this.fadeGain.gain, r, e, n);
                    else {
                        if (t !== et.h7) throw new Error("Unsupported fade type");
                        (0, et.Mt)(this.fadeGain.gain, r, e, n)
                    }
                }
            }, {
                key: "applyFadeIn",
                value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "logarithmic";
                    this.applyFade(et.Y1, t, e, n)
                }
            }, {
                key: "applyFadeOut",
                value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "logarithmic";
                    this.applyFade(et.h7, t, e, n)
                }
            }, {
                key: "isPlaying",
                value: function() {
                    return void 0 !== this.source
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.buffer.duration
                }
            }, {
                key: "setAudioContext",
                value: function(t) {
                    this.ac = t, this.destination = this.ac.destination
                }
            }, {
                key: "createStereoPanner",
                value: function() {
                    return this.ac.createStereoPanner ? this.ac.createStereoPanner() : this.ac.createPanner()
                }
            }, {
                key: "setUpSource",
                value: function() {
                    var t, e, n = this;
                    this.source = this.ac.createBufferSource(), this.source.buffer = this.buffer;
                    var r = new Promise((function(r) {
                        n.source.onended = function() {
                            n.source.disconnect(), n.fadeGain.disconnect(), n.volumeGain.disconnect(), n.shouldPlayGain.disconnect(), n.panner.disconnect(), t && t(), e && e(), n.source = void 0, n.fadeGain = void 0, n.volumeGain = void 0, n.shouldPlayGain = void 0, n.panner = void 0, r()
                        }
                    }));
                    return this.fadeGain = this.ac.createGain(), this.volumeGain = this.ac.createGain(), this.shouldPlayGain = this.ac.createGain(), this.panner = this.createStereoPanner(), this.source.connect(this.fadeGain), this.fadeGain.connect(this.volumeGain), this.volumeGain.connect(this.shouldPlayGain), this.shouldPlayGain.connect(this.panner), t = this.effectsGraph(this.panner, this.masterGain, this.ac instanceof OfflineAudioContext), e = this.masterEffectsGraph(this.masterGain, this.destination, this.ac instanceof OfflineAudioContext), r
                }
            }, {
                key: "setVolumeGainLevel",
                value: function(t) {
                    this.volumeGain && (this.volumeGain.gain.value = t)
                }
            }, {
                key: "setShouldPlay",
                value: function(t) {
                    this.shouldPlayGain && (this.shouldPlayGain.gain.value = t ? 1 : 0)
                }
            }, {
                key: "setMasterGainLevel",
                value: function(t) {
                    this.masterGain && (this.masterGain.gain.value = t)
                }
            }, {
                key: "setStereoPanValue",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.panner && (void 0 !== this.panner.pan ? this.panner.pan.value = t : (this.panner.panningModel = "equalpower", this.panner.setPosition(t, 0, 1 - Math.abs(t))))
                }
            }, {
                key: "setEffects",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vt;
                    this.effectsGraph = t
                }
            }, {
                key: "setMasterEffects",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vt;
                    this.masterEffectsGraph = t
                }
            }, {
                key: "play",
                value: function(t, e, n) {
                    this.source.start(t, e, n)
                }
            }, {
                key: "stop",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.source && this.source.stop(t)
                }
            }]), t
        }();

        function mt(t) {
            return {
                id: t.id || K(),
                start: Number(t.begin) || 0,
                end: Number(t.end) || 0,
                lines: t.lines || [""],
                lang: t.language || "en"
            }
        }
        var gt = function() {
                function t(e) {
                    var n = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    c(this, t), this.playlist = e, this.data = r, this.active = !1, this.ondragover = function(t) {
                        n.active && (t.preventDefault(), n.emitDrag(t.clientX))
                    }
                }
                return h(t, [{
                    key: "emitDrag",
                    value: function(t) {
                        var e = t - this.prevX;
                        if (e) {
                            var n = P(e, this.playlist.samplesPerPixel, this.playlist.sampleRate);
                            this.prevX = t, this.playlist.ee.emit("dragged", n, this.data)
                        }
                    }
                }, {
                    key: "complete",
                    value: function() {
                        this.active = !1, document.removeEventListener("dragover", this.ondragover)
                    }
                }, {
                    key: "dragstart",
                    value: function(t) {
                        var e = t;
                        this.active = !0, this.prevX = t.clientX, e.dataTransfer.dropEffect = "move", e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", ""), document.addEventListener("dragover", this.ondragover)
                    }
                }, {
                    key: "dragend",
                    value: function(t) {
                        this.active && (t.preventDefault(), this.complete())
                    }
                }], [{
                    key: "getClass",
                    value: function() {
                        return ".shift"
                    }
                }, {
                    key: "getEvents",
                    value: function() {
                        return ["dragstart", "dragend"]
                    }
                }]), t
            }(),
            kt = function() {};
        kt.prototype.hook = function(t) {
            var e = t.querySelector(".current");
            if (e) {
                var n = t.getBoundingClientRect(),
                    r = e.getBoundingClientRect().top - n.top;
                t.scrollTop += r
            }
        };
        const bt = kt;
        var wt = function() {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
                c(this, t), this.playlist = e, this.marginLeft = s, this.resizeHandlers = [], this.editable = i, this.annotations = n.map((function(t) {
                    return mt(t)
                })), this.setupInteractions(), this.controls = r, this.setupEE(e.ee), this.playlist.isContinuousPlay = a, this.playlist.linkEndpoints = o, this.length = this.annotations.length
            }
            return h(t, [{
                key: "setupInteractions",
                value: function() {
                    var t = this;
                    this.annotations.forEach((function(e, n) {
                        var r = new gt(t.playlist, {
                                direction: "left",
                                index: n
                            }),
                            i = new gt(t.playlist, {
                                direction: "right",
                                index: n
                            });
                        t.resizeHandlers.push(r), t.resizeHandlers.push(i)
                    }))
                }
            }, {
                key: "setupEE",
                value: function(t) {
                    var e = this;
                    return t.on("dragged", (function(t, n) {
                        var r = n.index,
                            i = e.annotations,
                            o = i[r];
                        if ("left" === n.direction) {
                            var a = o.start;
                            o.start += t, o.start < 0 && (o.start = 0), r && i[r - 1].end > o.start && (i[r - 1].end = o.start), e.playlist.linkEndpoints && r && i[r - 1].end === a && (i[r - 1].end = o.start)
                        } else {
                            var s = o.end;
                            o.end += t, o.end > e.playlist.duration && (o.end = e.playlist.duration), r < i.length - 1 && i[r + 1].start < o.end && (i[r + 1].start = o.end), e.playlist.linkEndpoints && r < i.length - 1 && i[r + 1].start === s && (i[r + 1].start = o.end)
                        }
                        e.playlist.drawRequest()
                    })), t.on("continuousplay", (function(t) {
                        e.playlist.isContinuousPlay = t
                    })), t.on("linkendpoints", (function(t) {
                        e.playlist.linkEndpoints = t
                    })), t.on("annotationsrequest", (function() {
                        e.export()
                    })), t
                }
            }, {
                key: "export",
                value: function() {
                    var t = this.annotations.map((function(t) {
                            return e = t, {
                                begin: String(e.start.toFixed(3)),
                                end: String(e.end.toFixed(3)),
                                id: String(e.id),
                                language: e.lang,
                                lines: e.lines
                            };
                            var e
                        })),
                        e = "data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(t))),
                        n = document.createElement("a");
                    document.body.appendChild(n), n.href = e, n.download = "annotations.json", n.click(), document.body.removeChild(n)
                }
            }, {
                key: "renderResizeLeft",
                value: function(t) {
                    var e = gt.getEvents(),
                        n = {
                            attributes: {
                                style: "position: absolute; height: 30px; width: 10px; top: 0; left: -2px",
                                draggable: !0
                            }
                        },
                        r = this.resizeHandlers[2 * t];
                    return e.forEach((function(t) {
                        n["on".concat(t)] = r[t].bind(r)
                    })), v()("div.resize-handle.resize-w", n)
                }
            }, {
                key: "renderResizeRight",
                value: function(t) {
                    var e = gt.getEvents(),
                        n = {
                            attributes: {
                                style: "position: absolute; height: 30px; width: 10px; top: 0; right: -2px",
                                draggable: !0
                            }
                        },
                        r = this.resizeHandlers[2 * t + 1];
                    return e.forEach((function(t) {
                        n["on".concat(t)] = r[t].bind(r)
                    })), v()("div.resize-handle.resize-e", n)
                }
            }, {
                key: "renderControls",
                value: function(t, e) {
                    var n = this,
                        r = this;
                    return this.controls.map((function(i) {
                        return v()("i.".concat(i.class), {
                            attributes: {
                                title: i.title
                            },
                            onclick: function() {
                                i.action(t, e, r.annotations, {
                                    linkEndpoints: r.playlist.linkEndpoints
                                }), n.setupInteractions(), r.playlist.drawRequest()
                            }
                        })
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = v()("div.annotations-boxes", {
                            attributes: {
                                style: "height: 30px; position: relative; margin-left: ".concat(this.marginLeft, "px;")
                            }
                        }, this.annotations.map((function(e, n) {
                            var r = t.playlist.samplesPerPixel,
                                i = t.playlist.sampleRate,
                                o = i / r,
                                a = S(t.playlist.scrollLeft, r, i),
                                s = Math.floor(e.start * o - a),
                                u = Math.ceil(e.end * o - e.start * o);
                            return v()("div.annotation-box", {
                                attributes: {
                                    style: "position: absolute; height: 30px; width: ".concat(u, "px; left: ").concat(s, "px"),
                                    "data-id": e.id
                                }
                            }, [t.renderResizeLeft(n), v()("span.id", {
                                onclick: function() {
                                    var e = t.annotations[n].start,
                                        r = t.annotations[n].end;
                                    t.playlist.isContinuousPlay ? (t.playlist.seek(e, e), t.playlist.ee.emit("play", e)) : (t.playlist.seek(e, r), t.playlist.ee.emit("play", e, r))
                                }
                            }, [e.id]), t.renderResizeRight(n)])
                        }))),
                        n = v()("div.annotations-boxes-wrapper", {
                            attributes: {
                                style: "overflow: hidden;"
                            }
                        }, [e]),
                        r = v()("div.annotations-text", {
                            hook: new bt
                        }, this.annotations.map((function(e, n) {
                            var r = function(t) {
                                    function e(t, e) {
                                        var n = parseInt(t / 3600, 10) % 24,
                                            r = parseInt(t / 60, 10) % 60,
                                            i = (t % 60).toFixed(e),
                                            o = n < 10 ? "0".concat(n) : n,
                                            a = r < 10 ? "0".concat(r) : r,
                                            s = i < 10 ? "0".concat(i) : i;
                                        return "".concat(o, ":").concat(a, ":").concat(s)
                                    }
                                    return {
                                        seconds: function(t) {
                                            return t.toFixed(0)
                                        },
                                        thousandths: function(t) {
                                            return t.toFixed(3)
                                        },
                                        "hh:mm:ss": function(t) {
                                            return e(t, 0)
                                        },
                                        "hh:mm:ss.u": function(t) {
                                            return e(t, 1)
                                        },
                                        "hh:mm:ss.uu": function(t) {
                                            return e(t, 2)
                                        },
                                        "hh:mm:ss.uuu": function(t) {
                                            return e(t, 3)
                                        }
                                    } [t]
                                }(t.playlist.durationFormat),
                                i = r(e.start),
                                o = r(e.end),
                                a = "";
                            t.playlist.isPlaying() && t.playlist.playbackSeconds >= e.start && t.playlist.playbackSeconds <= e.end && (a = ".current");
                            var s = {
                                    attributes: {
                                        contenteditable: !0
                                    },
                                    oninput: function(t) {
                                        e.lines = [t.target.innerText]
                                    },
                                    onkeypress: function(t) {
                                        13 !== t.which && 13 !== t.keyCode || (t.target.blur(), t.preventDefault())
                                    }
                                },
                                u = t.editable ? s : {};
                            return v()("div.annotation".concat(a), [v()("span.annotation-id", [e.id]), v()("span.annotation-start", [i]), v()("span.annotation-end", [o]), v()("span.annotation-lines", u, [e.lines]), v()("span.annotation-actions", t.renderControls(e, n))])
                        })));
                    return v()("div.annotations", [n, r])
                }
            }]), t
        }();
        const xt = wt;

        function Pt() {
            function t(t) {
                for (var e, n = 1 / 0, r = -1 / 0, i = 0; i < t.length; i += 1) n > (e = t[i]) && (n = e), r < e && (r = e);
                return {
                    min: n,
                    max: r
                }
            }

            function e(t, e) {
                var n = Math.pow(2, e - 1),
                    r = t < 0 ? t * n : t * n - 1;
                return Math.max(-n, Math.min(n - 1, r))
            }

            function n(n, r, i) {
                for (var o, a, s, u, c, l = n.length, h = Math.ceil(l / r), f = new(self["Int".concat(i, "Array")])(2 * h), p = 0; p < h; p += 1) o = p * r, a = (p + 1) * r > l ? l : (p + 1) * r, u = e((c = t(n.subarray(o, a))).min, i), s = e(c.max, i), f[2 * p] = u, f[2 * p + 1] = s;
                return f
            }
            onmessage = function(t) {
                var e = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
                    if ([8, 16, 32].indexOf(r) < 0) throw new Error("Invalid number of bits specified for peaks.");
                    var i = [],
                        o = 0,
                        a = t.length;
                    i.push(n(t.subarray(o, a), e, r));
                    var s = i[0].length / 2;
                    return {
                        bits: r,
                        length: s,
                        data: i
                    }
                }(t.data.samples, t.data.samplesPerPixel);
                postMessage(e)
            }
        }

        function St() {
            var t, e = 0,
                n = [],
                r = [];

            function i(t, e, n) {
                for (var r = 0; r < n.length; r += 1) t.setUint8(e + r, n.charCodeAt(r))
            }

            function o(t, e, n) {
                for (var r = e, i = 0; i < n.length; i += 1, r += 2) {
                    var o = Math.max(-1, Math.min(1, n[i]));
                    t.setInt16(r, o < 0 ? 32768 * o : 32767 * o, !0)
                }
            }

            function a(t, e) {
                for (var n = new Float32Array(e), r = 0, i = 0; i < t.length; i += 1) n.set(t[i], r), r += t[i].length;
                return n
            }
            onmessage = function(s) {
                switch (s.data.command) {
                    case "init":
                        f = s.data.config, t = f.sampleRate;
                        break;
                    case "record":
                        h = s.data.buffer, n.push(h[0]), r.push(h[1]), e += h[0].length;
                        break;
                    case "exportWAV":
                        u = s.data.type, c = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = new ArrayBuffer(44 + 2 * e.length),
                                a = new DataView(r);
                            return i(a, 0, "RIFF"), a.setUint32(4, 32 + 2 * e.length, !0), i(a, 8, "WAVE"), i(a, 12, "fmt "), a.setUint32(16, 16, !0), a.setUint16(20, 1, !0), a.setUint16(22, n ? 1 : 2, !0), a.setUint32(24, t, !0), a.setUint32(28, 4 * t, !0), a.setUint16(32, 4, !0), a.setUint16(34, 16, !0), i(a, 36, "data"), a.setUint32(40, 2 * e.length, !0), o(a, 44, e), a
                        }(function(t, e) {
                            for (var n = t.length + e.length, r = new Float32Array(n), i = 0, o = 0; i < n;) r[i += 1] = t[o], r[i += 1] = e[o], o += 1;
                            return r
                        }(a(n, e), a(r, e))), l = new Blob([c], {
                            type: u
                        }), postMessage(l);
                        break;
                    case "clear":
                        e = 0, n = [], r = [];
                        break;
                    default:
                        throw new Error("Unknown export worker command")
                }
                var u, c, l, h, f
            }
        }
        var Tt = function() {
            function t() {
                c(this, t), this.tracks = [], this.soloedTracks = [], this.mutedTracks = [], this.collapsedTracks = [], this.playoutPromises = [], this.cursor = 0, this.playbackSeconds = 0, this.duration = 0, this.scrollLeft = 0, this.scrollTimer = void 0, this.showTimescale = !1, this.isScrolling = !1, this.fadeType = "logarithmic", this.masterGain = 1, this.annotations = [], this.durationFormat = "hh:mm:ss.uuu", this.isAutomaticScroll = !1, this.resetDrawTimer = void 0
            }
            var n, r;
            return h(t, [{
                key: "initExporter",
                value: function() {
                    this.exportWorker = new(w())(St)
                }
            }, {
                key: "initRecorder",
                value: function(t) {
                    var e = this;
                    this.mediaRecorder = new MediaRecorder(t), this.mediaRecorder.onstart = function() {
                        var t = new dt;
                        t.setName("Recording"), t.setEnabledStates(), t.setEventEmitter(e.ee), e.recordingTrack = t, e.tracks.push(t), e.chunks = [], e.working = !1
                    }, this.mediaRecorder.ondataavailable = function(t) {
                        if (e.chunks.push(t.data), !e.working) {
                            var n = new Blob(e.chunks, {
                                type: "audio/ogg; codecs=opus"
                            });
                            I.createLoader(n, e.ac).load().then((function(t) {
                                e.recorderWorker.postMessage({
                                    samples: t.getChannelData(0),
                                    samplesPerPixel: e.samplesPerPixel
                                }), e.recordingTrack.setCues(0, t.duration), e.recordingTrack.setBuffer(t), e.recordingTrack.setPlayout(new yt(e.ac, t, e.masterGainNode)), e.adjustDuration()
                            })).catch((function() {
                                e.working = !1
                            })), e.working = !0
                        }
                    }, this.mediaRecorder.onstop = function() {
                        e.chunks = [], e.working = !1
                    }, this.recorderWorker = new(w())(Pt), this.recorderWorker.onmessage = function(t) {
                        e.recordingTrack.setPeaks(t.data), e.working = !1, e.drawRequest()
                    }
                }
            }, {
                key: "setShowTimeScale",
                value: function(t) {
                    this.showTimescale = t
                }
            }, {
                key: "setMono",
                value: function(t) {
                    this.mono = t
                }
            }, {
                key: "setExclSolo",
                value: function(t) {
                    this.exclSolo = t
                }
            }, {
                key: "setSeekStyle",
                value: function(t) {
                    this.seekStyle = t
                }
            }, {
                key: "getSeekStyle",
                value: function() {
                    return this.seekStyle
                }
            }, {
                key: "setSampleRate",
                value: function(t) {
                    this.sampleRate = t
                }
            }, {
                key: "setSamplesPerPixel",
                value: function(t) {
                    this.samplesPerPixel = t
                }
            }, {
                key: "setAudioContext",
                value: function(t) {
                    this.ac = t, this.masterGainNode = t.createGain()
                }
            }, {
                key: "getAudioContext",
                value: function() {
                    return this.ac
                }
            }, {
                key: "setControlOptions",
                value: function(t) {
                    this.controls = t
                }
            }, {
                key: "setWaveHeight",
                value: function(t) {
                    this.waveHeight = t
                }
            }, {
                key: "setCollapsedWaveHeight",
                value: function(t) {
                    this.collapsedWaveHeight = t
                }
            }, {
                key: "setColors",
                value: function(t) {
                    this.colors = t
                }
            }, {
                key: "setBarWidth",
                value: function(t) {
                    this.barWidth = t
                }
            }, {
                key: "setBarGap",
                value: function(t) {
                    this.barGap = t
                }
            }, {
                key: "setAnnotations",
                value: function(t) {
                    var e = this.controls.show ? this.controls.width : 0;
                    this.annotationList = new xt(this, t.annotations, t.controls, t.editable, t.linkEndpoints, t.isContinuousPlay, e)
                }
            }, {
                key: "setEffects",
                value: function(t) {
                    this.effectsGraph = t
                }
            }, {
                key: "setEventEmitter",
                value: function(t) {
                    this.ee = t
                }
            }, {
                key: "getEventEmitter",
                value: function() {
                    return this.ee
                }
            }, {
                key: "setUpEventEmitter",
                value: function() {
                    var t = this,
                        e = this.ee;
                    e.on("automaticscroll", (function(e) {
                        t.isAutomaticScroll = e
                    })), e.on("durationformat", (function(e) {
                        t.durationFormat = e, t.drawRequest()
                    })), e.on("select", (function(e, n, r) {
                        t.isPlaying() ? (t.lastSeeked = e, t.pausedAt = void 0, t.restartPlayFrom(e)) : (t.seek(e, n, r), t.ee.emit("timeupdate", e), t.drawRequest())
                    })), e.on("startaudiorendering", (function(e) {
                        t.startOfflineRender(e)
                    })), e.on("statechange", (function(e) {
                        t.setState(e), t.drawRequest()
                    })), e.on("shift", (function(e, n) {
                        n.setStartTime(n.getStartTime() + e), t.adjustDuration(), t.drawRequest()
                    })), e.on("record", (function() {
                        t.record()
                    })), e.on("play", (function(e, n) {
                        t.play(e, n)
                    })), e.on("pause", (function() {
                        t.pause()
                    })), e.on("stop", (function() {
                        t.stop()
                    })), e.on("rewind", (function() {
                        t.rewind()
                    })), e.on("fastforward", (function() {
                        t.fastForward()
                    })), e.on("clear", (function() {
                        t.clear().then((function() {
                            t.drawRequest()
                        }))
                    })), e.on("solo", (function(e) {
                        t.soloTrack(e), t.adjustTrackPlayout(), t.drawRequest()
                    })), e.on("mute", (function(e) {
                        t.muteTrack(e), t.adjustTrackPlayout(), t.drawRequest()
                    })), e.on("removeTrack", (function(e) {
                        t.removeTrack(e), t.adjustTrackPlayout(), t.drawRequest()
                    })), e.on("changeTrackView", (function(e, n) {
                        t.collapseTrack(e, n), t.drawRequest()
                    })), e.on("volumechange", (function(e, n) {
                        n.setGainLevel(e / 100), t.drawRequest()
                    })), e.on("mastervolumechange", (function(e) {
                        t.masterGain = e / 100, t.tracks.forEach((function(e) {
                            e.setMasterGainLevel(t.masterGain)
                        }))
                    })), e.on("fadein", (function(e, n) {
                        n.setFadeIn(e, t.fadeType), t.drawRequest()
                    })), e.on("fadeout", (function(e, n) {
                        n.setFadeOut(e, t.fadeType), t.drawRequest()
                    })), e.on("stereopan", (function(e, n) {
                        n.setStereoPanValue(e), t.drawRequest()
                    })), e.on("fadetype", (function(e) {
                        t.fadeType = e
                    })), e.on("newtrack", (function(e) {
                        t.load([{
                            src: e,
                            name: e.name
                        }])
                    })), e.on("trim", (function() {
                        var e = t.getActiveTrack(),
                            n = t.getTimeSelection();
                        e.trim(n.start, n.end), e.calculatePeaks(t.samplesPerPixel, t.sampleRate), t.setTimeSelection(0, 0), t.drawRequest()
                    })), e.on("zoomin", (function() {
                        var e = Math.max(0, t.zoomIndex - 1),
                            n = t.zoomLevels[e];
                        n !== t.samplesPerPixel && (t.setZoom(n), t.drawRequest())
                    })), e.on("zoomout", (function() {
                        var e = Math.min(t.zoomLevels.length - 1, t.zoomIndex + 1),
                            n = t.zoomLevels[e];
                        n !== t.samplesPerPixel && (t.setZoom(n), t.drawRequest())
                    })), e.on("scroll", (function() {
                        t.isScrolling = !0, t.drawRequest(), clearTimeout(t.scrollTimer), t.scrollTimer = setTimeout((function() {
                            t.isScrolling = !1
                        }), 200)
                    }))
                }
            }, {
                key: "load",
                value: function(t) {
                    var e = this,
                        n = t.map((function(t) {
                            return I.createLoader(t.src, e.ac, e.ee).load().then((function(t) {
                                return t.sampleRate === e.sampleRate ? t : function(t, e) {
                                    var n = Math.ceil(t.duration * e),
                                        r = new OfflineAudioContext(t.numberOfChannels, n, e),
                                        i = r.createBufferSource();
                                    return i.buffer = t, i.connect(r.destination), i.start(), r.startRendering()
                                }(t, e.sampleRate)
                            }))
                        }));
                    return Promise.all(n).then((function(n) {
                        e.ee.emit("audiosourcesloaded");
                        var r = n.map((function(n, r) {
                            var i = t[r],
                                o = i.name || "Untitled",
                                a = i.start || 0,
                                s = i.states || {},
                                u = i.fadeIn,
                                c = i.fadeOut,
                                l = i.cuein || 0,
                                h = i.cueout || n.duration,
                                f = i.gain || 1,
                                p = i.muted || !1,
                                d = i.soloed || !1,
                                v = i.selected,
                                y = i.peaks || {
                                    type: "WebAudio",
                                    mono: e.mono
                                },
                                m = i.customClass || void 0,
                                g = i.waveOutlineColor || void 0,
                                k = i.stereoPan || 0,
                                b = i.effects || null,
                                w = new yt(e.ac, n, e.masterGainNode),
                                x = new dt;
                            return x.src = i.src, x.setBuffer(n), x.setName(o), x.setEventEmitter(e.ee), x.setEnabledStates(s), x.setCues(l, h), x.setCustomClass(m), x.setWaveOutlineColor(g), void 0 !== u && x.setFadeIn(u.duration, u.shape), void 0 !== c && x.setFadeOut(c.duration, c.shape), void 0 !== v && (e.setActiveTrack(x), e.setTimeSelection(v.start, v.end)), void 0 !== y && x.setPeakData(y), x.setState(e.getState()), x.setStartTime(a), x.setPlayout(w), x.setGainLevel(f), x.setStereoPanValue(k), b && x.setEffects(b), p && e.muteTrack(x), d && e.soloTrack(x), x.calculatePeaks(e.samplesPerPixel, e.sampleRate), x
                        }));
                        e.tracks = e.tracks.concat(r), e.adjustDuration(), e.draw(e.render()), e.ee.emit("audiosourcesrendered")
                    })).catch((function(t) {
                        e.ee.emit("audiosourceserror", t)
                    }))
                }
            }, {
                key: "setActiveTrack",
                value: function(t) {
                    this.activeTrack = t
                }
            }, {
                key: "getActiveTrack",
                value: function() {
                    return this.activeTrack
                }
            }, {
                key: "isSegmentSelection",
                value: function() {
                    return this.timeSelection.start !== this.timeSelection.end
                }
            }, {
                key: "setTimeSelection",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    this.timeSelection = {
                        start: t,
                        end: void 0 === e ? t : e
                    }, this.cursor = t
                }
            }, {
                key: "startOfflineRender",
                value: (n = p().mark((function t(e) {
                    var n, r, i, o, a = this;
                    return p().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!this.isRendering) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return this.isRendering = !0, this.offlineAudioContext = new OfflineAudioContext(2, 44100 * this.duration, 44100), n = [], this.ee.emit("audiorenderingstarting", this.offlineAudioContext, n), r = this.offlineAudioContext.currentTime, i = this.offlineAudioContext.createGain(), this.tracks.forEach((function(t) {
                                    var e = new yt(a.offlineAudioContext, t.buffer, i);
                                    e.setEffects(t.effectsGraph), e.setMasterEffects(a.effectsGraph), t.setOfflinePlayout(e), t.schedulePlay(r, 0, 0, {
                                        shouldPlay: a.shouldTrackPlay(t),
                                        masterGain: 1,
                                        isOffline: !0
                                    })
                                })), t.next = 11, Promise.all(n);
                            case 11:
                                return t.next = 13, this.offlineAudioContext.startRendering();
                            case 13:
                                o = t.sent, "buffer" === e ? (this.ee.emit("audiorenderingfinished", e, o), this.isRendering = !1) : "wav" === e && (this.exportWorker.postMessage({
                                    command: "init",
                                    config: {
                                        sampleRate: 44100
                                    }
                                }), this.exportWorker.onmessage = function(t) {
                                    a.ee.emit("audiorenderingfinished", e, t.data), a.isRendering = !1, a.exportWorker.postMessage({
                                        command: "clear"
                                    })
                                }, this.exportWorker.postMessage({
                                    command: "record",
                                    buffer: [o.getChannelData(0), o.getChannelData(1)]
                                }), this.exportWorker.postMessage({
                                    command: "exportWAV",
                                    type: "audio/wav"
                                }));
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                })), r = function() {
                    var t = this,
                        e = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(t, e);

                        function a(t) {
                            u(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            u(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }, function(t) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "getTimeSelection",
                value: function() {
                    return this.timeSelection
                }
            }, {
                key: "setState",
                value: function(t) {
                    this.state = t, this.tracks.forEach((function(e) {
                        e.setState(t)
                    }))
                }
            }, {
                key: "getState",
                value: function() {
                    return this.state
                }
            }, {
                key: "setZoomIndex",
                value: function(t) {
                    this.zoomIndex = t
                }
            }, {
                key: "setZoomLevels",
                value: function(t) {
                    this.zoomLevels = t
                }
            }, {
                key: "setZoom",
                value: function(t) {
                    var e = this;
                    this.samplesPerPixel = t, this.zoomIndex = this.zoomLevels.indexOf(t), this.tracks.forEach((function(n) {
                        n.calculatePeaks(t, e.sampleRate)
                    }))
                }
            }, {
                key: "muteTrack",
                value: function(t) {
                    var e = this.mutedTracks.indexOf(t);
                    e > -1 ? this.mutedTracks.splice(e, 1) : this.mutedTracks.push(t)
                }
            }, {
                key: "soloTrack",
                value: function(t) {
                    var e = this.soloedTracks.indexOf(t);
                    e > -1 ? this.soloedTracks.splice(e, 1) : this.exclSolo ? this.soloedTracks = [t] : this.soloedTracks.push(t)
                }
            }, {
                key: "collapseTrack",
                value: function(t, e) {
                    if (e.collapsed) this.collapsedTracks.push(t);
                    else {
                        var n = this.collapsedTracks.indexOf(t);
                        n > -1 && this.collapsedTracks.splice(n, 1)
                    }
                }
            }, {
                key: "removeTrack",
                value: function(t) {
                    t.isPlaying() && t.scheduleStop(), [this.mutedTracks, this.soloedTracks, this.collapsedTracks, this.tracks].forEach((function(e) {
                        var n = e.indexOf(t);
                        n > -1 && e.splice(n, 1)
                    }))
                }
            }, {
                key: "adjustTrackPlayout",
                value: function() {
                    var t = this;
                    this.tracks.forEach((function(e) {
                        e.setShouldPlay(t.shouldTrackPlay(e))
                    }))
                }
            }, {
                key: "adjustDuration",
                value: function() {
                    this.duration = this.tracks.reduce((function(t, e) {
                        return Math.max(t, e.getEndTime())
                    }), 0)
                }
            }, {
                key: "shouldTrackPlay",
                value: function(t) {
                    var e;
                    return this.soloedTracks.length > 0 ? (e = !1, this.soloedTracks.indexOf(t) > -1 && (e = !0)) : (e = !0, this.mutedTracks.indexOf(t) > -1 && (e = !1)), e
                }
            }, {
                key: "isPlaying",
                value: function() {
                    return this.tracks.reduce((function(t, e) {
                        return t || e.isPlaying()
                    }), !1)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return (this.lastSeeked || this.pausedAt || this.cursor) + this.getElapsedTime()
                }
            }, {
                key: "getElapsedTime",
                value: function() {
                    return this.ac.currentTime - this.lastPlay
                }
            }, {
                key: "setMasterGain",
                value: function(t) {
                    this.ee.emit("mastervolumechange", t)
                }
            }, {
                key: "restartPlayFrom",
                value: function(t, e) {
                    return this.stopAnimation(), this.tracks.forEach((function(t) {
                        t.scheduleStop()
                    })), Promise.all(this.playoutPromises).then(this.play.bind(this, t, e))
                }
            }, {
                key: "play",
                value: function(t, e) {
                    var n = this;
                    clearTimeout(this.resetDrawTimer);
                    var r = this.ac.currentTime,
                        i = this.getTimeSelection(),
                        o = [],
                        a = t || this.pausedAt || this.cursor,
                        s = e;
                    return !s && i.end !== i.start && i.end > a && (s = i.end), this.isPlaying() ? this.restartPlayFrom(a, s) : (this.effectsGraph && this.tracks && this.tracks[0].playout.setMasterEffects(this.effectsGraph), this.tracks.forEach((function(t) {
                        t.setState("cursor"), o.push(t.schedulePlay(r, a, s, {
                            shouldPlay: n.shouldTrackPlay(t),
                            masterGain: n.masterGain
                        }))
                    })), this.lastPlay = r, this.playoutPromises = o, this.startAnimation(a), Promise.all(this.playoutPromises))
                }
            }, {
                key: "pause",
                value: function() {
                    return this.isPlaying() ? (this.pausedAt = this.getCurrentTime(), this.playbackReset()) : Promise.all(this.playoutPromises)
                }
            }, {
                key: "stop",
                value: function() {
                    return this.mediaRecorder && "recording" === this.mediaRecorder.state && this.mediaRecorder.stop(), this.pausedAt = void 0, this.playbackSeconds = 0, this.playbackReset()
                }
            }, {
                key: "playbackReset",
                value: function() {
                    var t = this;
                    return this.lastSeeked = void 0, this.stopAnimation(), this.tracks.forEach((function(e) {
                        e.scheduleStop(), e.setState(t.getState())
                    })), this.masterGainNode.disconnect(), this.drawRequest(), Promise.all(this.playoutPromises)
                }
            }, {
                key: "rewind",
                value: function() {
                    var t = this;
                    return this.stop().then((function() {
                        t.scrollLeft = 0, t.ee.emit("select", 0, 0)
                    }))
                }
            }, {
                key: "fastForward",
                value: function() {
                    var t = this;
                    return this.stop().then((function() {
                        t.viewDuration < t.duration ? t.scrollLeft = t.duration - t.viewDuration : t.scrollLeft = 0, t.ee.emit("select", t.duration, t.duration)
                    }))
                }
            }, {
                key: "clear",
                value: function() {
                    var t = this;
                    return this.stop().then((function() {
                        t.tracks = [], t.soloedTracks = [], t.mutedTracks = [], t.playoutPromises = [], t.cursor = 0, t.playbackSeconds = 0, t.duration = 0, t.scrollLeft = 0, t.seek(0, 0, void 0)
                    }))
                }
            }, {
                key: "record",
                value: function() {
                    var t = this,
                        e = [];
                    this.mediaRecorder.start(300), this.tracks.forEach((function(n) {
                        n.setState("none"), e.push(n.schedulePlay(t.ac.currentTime, 0, void 0, {
                            shouldPlay: t.shouldTrackPlay(n)
                        }))
                    })), this.playoutPromises = e
                }
            }, {
                key: "startAnimation",
                value: function(t) {
                    var e = this;
                    this.lastDraw = this.ac.currentTime, this.animationRequest = window.requestAnimationFrame((function() {
                        e.updateEditor(t)
                    }))
                }
            }, {
                key: "stopAnimation",
                value: function() {
                    window.cancelAnimationFrame(this.animationRequest), this.lastDraw = void 0
                }
            }, {
                key: "seek",
                value: function(t, e, n) {
                    this.isPlaying() ? (this.lastSeeked = t, this.pausedAt = void 0, this.restartPlayFrom(t)) : (this.setActiveTrack(n || this.tracks[0]), this.pausedAt = t, this.setTimeSelection(t, e), "fill" === this.getSeekStyle() && (this.playbackSeconds = t))
                }
            }, {
                key: "updateEditor",
                value: function(t) {
                    var e = this,
                        n = this.ac.currentTime,
                        r = this.getTimeSelection(),
                        i = t || this.cursor,
                        o = n - this.lastDraw;
                    if (this.isPlaying()) {
                        var a = i + o;
                        this.ee.emit("timeupdate", a), this.animationRequest = window.requestAnimationFrame((function() {
                            e.updateEditor(a)
                        })), this.playbackSeconds = a, this.draw(this.render()), this.lastDraw = n
                    } else i + o >= (this.isSegmentSelection() ? r.end : this.duration) && this.ee.emit("finished"), this.stopAnimation(), this.resetDrawTimer = setTimeout((function() {
                        e.pausedAt = void 0, e.lastSeeked = void 0, e.setState(e.getState()), e.playbackSeconds = 0, e.draw(e.render())
                    }), 0)
                }
            }, {
                key: "drawRequest",
                value: function() {
                    var t = this;
                    window.requestAnimationFrame((function() {
                        t.draw(t.render())
                    }))
                }
            }, {
                key: "draw",
                value: function(t) {
                    var e = m()(this.tree, t);
                    this.rootNode = k()(this.rootNode, e), this.tree = t, this.viewDuration = P(this.rootNode.clientWidth - this.controls.width, this.samplesPerPixel, this.sampleRate)
                }
            }, {
                key: "getTrackRenderData",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = {
                            height: this.waveHeight,
                            resolution: this.samplesPerPixel,
                            sampleRate: this.sampleRate,
                            controls: this.controls,
                            isActive: !1,
                            timeSelection: this.getTimeSelection(),
                            playlistLength: this.duration,
                            playbackSeconds: this.playbackSeconds,
                            colors: this.colors,
                            barWidth: this.barWidth,
                            barGap: this.barGap
                        };
                    return e()({}, t, n)
                }
            }, {
                key: "isActiveTrack",
                value: function(t) {
                    var e = this.getActiveTrack();
                    return !this.isSegmentSelection() || e === t
                }
            }, {
                key: "renderAnnotations",
                value: function() {
                    return this.annotationList.render()
                }
            }, {
                key: "renderTimeScale",
                value: function() {
                    var t = this.controls.show ? this.controls.width : 0;
                    return new z(this.duration, this.scrollLeft, this.samplesPerPixel, this.sampleRate, t, this.colors).render()
                }
            }, {
                key: "renderTrackSection",
                value: function() {
                    var t = this,
                        e = this.tracks.map((function(e) {
                            var n = t.collapsedTracks.indexOf(e) > -1;
                            return e.render(t.getTrackRenderData({
                                isActive: t.isActiveTrack(e),
                                shouldPlay: t.shouldTrackPlay(e),
                                soloed: t.soloedTracks.indexOf(e) > -1,
                                muted: t.mutedTracks.indexOf(e) > -1,
                                collapsed: n,
                                height: n ? t.collapsedWaveHeight : t.waveHeight,
                                barGap: t.barGap,
                                barWidth: t.barWidth
                            }))
                        }));
                    return v()("div.playlist-tracks", {
                        attributes: {
                            style: "overflow: auto;"
                        },
                        onscroll: function(e) {
                            t.scrollLeft = P(e.target.scrollLeft, t.samplesPerPixel, t.sampleRate), t.ee.emit("scroll")
                        },
                        hook: new F(this)
                    }, e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = [];
                    return this.showTimescale && t.push(this.renderTimeScale()), t.push(this.renderTrackSection()), this.annotationList.length && t.push(this.renderAnnotations()), v()("div.playlist", {
                        attributes: {
                            style: "overflow: hidden; position: relative;"
                        }
                    }, t)
                }
            }, {
                key: "getInfo",
                value: function() {
                    var t = [];
                    return this.tracks.forEach((function(e) {
                        t.push(e.getTrackDetails())
                    })), {
                        tracks: t,
                        effects: this.effectsGraph
                    }
                }
            }]), t
        }();

        function Ot() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s()();
            if (void 0 === t.container) throw new Error("DOM element container must be given.");
            var r = {
                    samplesPerPixel: 4096,
                    mono: !0,
                    fadeType: "logarithmic",
                    exclSolo: !1,
                    timescale: !1,
                    controls: {
                        show: !1,
                        width: 150,
                        widgets: {
                            muteOrSolo: !0,
                            volume: !0,
                            stereoPan: !0,
                            collapse: !0,
                            remove: !0
                        }
                    },
                    colors: {
                        waveOutlineColor: "white",
                        timeColor: "grey",
                        fadeColor: "black"
                    },
                    seekStyle: "line",
                    waveHeight: 128,
                    collapsedWaveHeight: 30,
                    barWidth: 1,
                    barGap: 0,
                    state: "cursor",
                    zoomLevels: [512, 1024, 2048, 4096],
                    annotationList: {
                        annotations: [],
                        controls: [],
                        editable: !1,
                        linkEndpoints: !1,
                        isContinuousPlay: !1
                    },
                    isAutomaticScroll: !1
                },
                i = e()({}, t, r),
                a = i.zoomLevels.indexOf(i.samplesPerPixel);
            if (-1 === a) throw new Error("initial samplesPerPixel must be included in array zoomLevels");
            var u = new Tt,
                c = i.ac || new AudioContext;
            u.setAudioContext(c), u.setSampleRate(i.sampleRate || c.sampleRate), u.setSamplesPerPixel(i.samplesPerPixel), u.setEventEmitter(n), u.setUpEventEmitter(), u.setTimeSelection(0, 0), u.setState(i.state), u.setControlOptions(i.controls), u.setWaveHeight(i.waveHeight), u.setCollapsedWaveHeight(i.collapsedWaveHeight), u.setColors(i.colors), u.setZoomLevels(i.zoomLevels), u.setZoomIndex(a), u.setMono(i.mono), u.setExclSolo(i.exclSolo), u.setShowTimeScale(i.timescale), u.setSeekStyle(i.seekStyle), u.setAnnotations(i.annotationList), u.setBarGap(i.barGap), u.setBarWidth(i.barWidth), u.isAutomaticScroll = i.isAutomaticScroll, u.isContinuousPlay = i.isContinuousPlay, u.linkedEndpoints = i.linkedEndpoints, i.effects && u.setEffects(i.effects);
            var l = u.render(),
                h = o()(l);
            return i.container.appendChild(h), u.tree = l, u.rootNode = h, u
        }

        function _t() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s()();
            return Ot(t, e)
        }
    })(), WaveformPlaylist = r
})();
