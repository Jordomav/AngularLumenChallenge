if (function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length, n = oe.type(e);
            return "function" === n || oe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function r(e, t, n) {
            if (oe.isFunction(t))return oe.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType)return oe.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ge.test(t))return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function (e) {
                return Z.call(t, e) > -1 !== n
            })
        }

        function i(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = {};
            return oe.each(e.match(we) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            K.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), oe.ready()
        }

        function s() {
            this.expando = oe.expando + s.uid++
        }

        function u(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(De, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? oe.parseJSON(n) : n
                } catch (i) {
                }
                Se.set(e, t, n)
            } else n = void 0;
            return n
        }

        function l(e, t, n, r) {
            var i, o = 1, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return oe.css(e, t, "")
            }, u = s(), l = n && n[3] || (oe.cssNumber[t] ? "" : "px"), c = (oe.cssNumber[t] || "px" !== l && +u) && _e.exec(oe.css(e, t));
            if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do o = o || ".5", c /= o, oe.style(e, t, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        function c(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
        }

        function f(e, t) {
            for (var n = 0, r = e.length; r > n; n++)Te.set(e[n], "globalEval", !t || Te.get(t[n], "globalEval"))
        }

        function p(e, t, n, r, i) {
            for (var o, a, s, u, l, p, d = t.createDocumentFragment(), h = [], g = 0, v = e.length; v > g; g++)if (o = e[g], o || 0 === o)if ("object" === oe.type(o))oe.merge(h, o.nodeType ? [o] : o); else if (Re.test(o)) {
                for (a = a || d.appendChild(t.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), u = Pe[s] || Pe._default, a.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], p = u[0]; p--;)a = a.lastChild;
                oe.merge(h, a.childNodes), a = d.firstChild, a.textContent = ""
            } else h.push(t.createTextNode(o));
            for (d.textContent = "", g = 0; o = h[g++];)if (r && oe.inArray(o, r) > -1)i && i.push(o); else if (l = oe.contains(o.ownerDocument, o), a = c(d.appendChild(o), "script"), l && f(a), n)for (p = 0; o = a[p++];)Ie.test(o.type || "") && n.push(o);
            return d
        }

        function d() {
            return !0
        }

        function h() {
            return !1
        }

        function g() {
            try {
                return K.activeElement
            } catch (e) {
            }
        }

        function v(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in t)v(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1)i = h; else if (!i)return e;
            return 1 === o && (a = i, i = function (e) {
                return oe().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = oe.guid++)), e.each(function () {
                oe.event.add(this, t, i, r, n)
            })
        }

        function m(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function $(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function y(e) {
            var t = Be.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function b(e, t) {
            var n, r, i, o, a, s, u, l;
            if (1 === t.nodeType) {
                if (Te.hasData(e) && (o = Te.access(e), a = Te.set(t, o), l = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in l)for (n = 0, r = l[i].length; r > n; n++)oe.event.add(t, i, l[i][n])
                }
                Se.hasData(e) && (s = Se.access(e), u = oe.extend({}, s), Se.set(t, u))
            }
        }

        function w(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ne.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function x(e, t, n, r) {
            t = J.apply([], t);
            var i, o, a, s, u, l, f = 0, d = e.length, h = d - 1, g = t[0], v = oe.isFunction(g);
            if (v || d > 1 && "string" == typeof g && !re.checkClone && He.test(g))return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = g.call(this, i, o.html())), x(o, t, n, r)
            });
            if (d && (i = p(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (a = oe.map(c(i, "script"), $), s = a.length; d > f; f++)u = i, f !== h && (u = oe.clone(u, !0, !0), s && oe.merge(a, c(u, "script"))), n.call(e[f], u, f);
                if (s)for (l = a[a.length - 1].ownerDocument, oe.map(a, y), f = 0; s > f; f++)u = a[f], Ie.test(u.type || "") && !Te.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(We, "")))
            }
            return e
        }

        function C(e, t, n) {
            for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || oe.cleanData(c(r)), r.parentNode && (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function k(e, t) {
            var n = oe(t.createElement(e)).appendTo(t.body), r = oe.css(n[0], "display");
            return n.detach(), r
        }

        function T(e) {
            var t = K, n = Ye[e];
            return n || (n = k(e, t), "none" !== n && n || (ze = (ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = ze[0].contentDocument, t.write(), t.close(), n = k(e, t), ze.detach()), Ye[e] = n), n
        }

        function S(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || Xe(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), n && !re.pixelMarginRight() && Ke.test(a) && Ge.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a
        }

        function E(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function D(e) {
            if (e in rt)return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)if (e = nt[n] + t, e in rt)return e
        }

        function A(e, t, n) {
            var r = _e.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function _(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += oe.css(e, n + Oe[o], !0, i)), r ? ("content" === n && (a -= oe.css(e, "padding" + Oe[o], !0, i)), "margin" !== n && (a -= oe.css(e, "border" + Oe[o] + "Width", !0, i))) : (a += oe.css(e, "padding" + Oe[o], !0, i), "padding" !== n && (a += oe.css(e, "border" + Oe[o] + "Width", !0, i)));
            return a
        }

        function O(t, n, r) {
            var i = !0, o = "width" === n ? t.offsetWidth : t.offsetHeight, a = Xe(t), s = "border-box" === oe.css(t, "boxSizing", !1, a);
            if (K.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
                if (o = S(t, n, a), (0 > o || null == o) && (o = t.style[n]), Ke.test(o))return o;
                i = s && (re.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
            }
            return o + _(t, n, r || (s ? "border" : "content"), i, a) + "px"
        }

        function M(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)r = e[a], r.style && (o[a] = Te.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Me(r) && (o[a] = Te.access(r, "olddisplay", T(r.nodeName)))) : (i = Me(r), "none" === n && i || Te.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
            for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function N(e, t, n, r, i) {
            return new N.prototype.init(e, t, n, r, i)
        }

        function j() {
            return e.setTimeout(function () {
                it = void 0
            }), it = oe.now()
        }

        function I(e, t) {
            var n, r = 0, i = {height: e};
            for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Oe[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function P(e, t, n) {
            for (var r, i = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = i.length; a > o; o++)if (r = i[o].call(n, t, e))return r
        }

        function R(e, t, n) {
            var r, i, o, a, s, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Me(e), g = Te.get(e, "fxshow");
            n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                s.unqueued || u()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = oe.css(e, "display"), c = "none" === l ? Te.get(e, "olddisplay") || T(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in t)if (i = t[r], at.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])continue;
                    h = !0
                }
                p[r] = g && g[r] || oe.style(e, r)
            } else l = void 0;
            if (oe.isEmptyObject(p))"inline" === ("none" === l ? T(e.nodeName) : l) && (d.display = l); else {
                g ? "hidden" in g && (h = g.hidden) : g = Te.access(e, "fxshow", {}), o && (g.hidden = !h), h ? oe(e).show() : f.done(function () {
                    oe(e).hide()
                }), f.done(function () {
                    var t;
                    Te.remove(e, "fxshow");
                    for (t in p)oe.style(e, t, p[t])
                });
                for (r in p)a = P(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function F(e, t) {
            var n, r, i, o, a;
            for (n in e)if (r = oe.camelCase(n), i = t[r], o = e[n], oe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = oe.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o)n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }

        function U(e, t, n) {
            var r, i, o = 0, a = U.prefilters.length, s = oe.Deferred().always(function () {
                delete u.elem
            }), u = function () {
                if (i)return !1;
                for (var t = it || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {specialEasing: {}, easing: oe.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || j(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? l.tweens.length : 0;
                    if (i)return this;
                    for (i = !0; r > n; n++)l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }), c = l.props;
            for (F(c, l.opts.specialEasing); a > o; o++)if (r = U.prefilters[o].call(l, e, c, l.opts))return oe.isFunction(r.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(r.stop, r)), r;
            return oe.map(c, P, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function q(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function L(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0, o = t.toLowerCase().match(we) || [];
                if (oe.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function V(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, oe.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                }), u
            }

            var o = {}, a = e === Tt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function H(e, t) {
            var n, r, i = oe.ajaxSettings.flatOptions || {};
            for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && oe.extend(!0, e, r), e
        }

        function B(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)for (i in s)if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
            }
            if (u[0] in n)o = u[0]; else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
        }

        function W(e, t, n, r) {
            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
            if (c[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
                if (a = l[u + " " + o] || l["* " + o], !a)for (i in l)if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && e["throws"])t = a(t); else try {
                    t = a(t)
                } catch (f) {
                    return {state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o}
                }
            }
            return {state: "success", data: t}
        }

        function z(e, t, n, r) {
            var i;
            if (oe.isArray(t))oe.each(t, function (t, i) {
                n || At.test(e) ? r(e, i) : z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }); else if (n || "object" !== oe.type(t))r(e, t); else for (i in t)z(e + "[" + i + "]", t[i], n, r)
        }

        function Y(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }

        var G = [], K = e.document, X = G.slice, J = G.concat, Q = G.push, Z = G.indexOf, ee = {}, te = ee.toString, ne = ee.hasOwnProperty, re = {}, ie = "2.2.1", oe = function (e, t) {
            return new oe.fn.init(e, t)
        }, ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, se = /^-ms-/, ue = /-([\da-z])/gi, le = function (e, t) {
            return t.toUpperCase()
        };
        oe.fn = oe.prototype = {
            jquery: ie, constructor: oe, selector: "", length: 0, toArray: function () {
                return X.call(this)
            }, get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
            }, pushStack: function (e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e) {
                return oe.each(this, e)
            }, map: function (e) {
                return this.pushStack(oe.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(X.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: Q, sort: G.sort, splice: G.splice
        }, oe.extend = oe.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)if (null != (e = arguments[s]))for (t in e)n = a[t], r = e[t], a !== r && (l && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, a[t] = oe.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, oe.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === oe.type(e)
            }, isArray: Array.isArray, isWindow: function (e) {
                return null != e && e === e.window
            }, isNumeric: function (e) {
                var t = e && e.toString();
                return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
            }, isPlainObject: function (e) {
                return "object" !== oe.type(e) || e.nodeType || oe.isWindow(e) ? !1 : !e.constructor || ne.call(e.constructor.prototype, "isPrototypeOf")
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
            }, globalEval: function (e) {
                var t, n = eval;
                e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            }, camelCase: function (e) {
                return e.replace(se, "ms-").replace(ue, le)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t) {
                var r, i = 0;
                if (n(e))for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++); else for (i in e)if (t.call(e[i], i, e[i]) === !1)break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(ae, "")
            }, makeArray: function (e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
            }, inArray: function (e, t, n) {
                return null == t ? -1 : Z.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++)e[i++] = t[r];
                return e.length = i, e
            }, grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)r = !t(e[o], o), r !== s && i.push(e[o]);
                return i
            }, map: function (e, t, r) {
                var i, o, a = 0, s = [];
                if (n(e))for (i = e.length; i > a; a++)o = t(e[a], a, r), null != o && s.push(o); else for (a in e)o = t(e[a], a, r), null != o && s.push(o);
                return J.apply([], s)
            }, guid: 1, proxy: function (e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (r = X.call(arguments, 2), i = function () {
                    return e.apply(t || this, r.concat(X.call(arguments)))
                }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
            }, now: Date.now, support: re
        }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = G[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        });
        var ce = function (e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, l, f, d, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)return n;
                if (!r && ((t ? t.ownerDocument || t : q) !== M && O(t), t = t || M, j)) {
                    if (11 !== g && (l = me.exec(e)))if (i = l[1]) {
                        if (9 === g) {
                            if (!(a = t.getElementById(i)))return n;
                            if (a.id === i)return n.push(a), n
                        } else if (h && (a = h.getElementById(i)) && F(t, a) && a.id === i)return n.push(a), n
                    } else {
                        if (l[2])return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)return Q.apply(n, t.getElementsByClassName(i)), n
                    }
                    if (w.qsa && !W[e + " "] && (!I || !I.test(e))) {
                        if (1 !== g)h = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = U), f = T(e), o = f.length, u = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--;)f[o] = u + " " + p(f[o]);
                            d = f.join(","), h = $e.test(e) && c(t.parentNode) || t
                        }
                        if (d)try {
                            return Q.apply(n, h.querySelectorAll(d)), n
                        } catch (v) {
                        } finally {
                            s === U && t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(se, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
                }

                var t = [];
                return e
            }

            function r(e) {
                return e[U] = !0, e
            }

            function i(e) {
                var t = M.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = n.length; r--;)x.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (r)return r;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return r(function (t) {
                    return t = +t, r(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {
            }

            function p(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
                return r
            }

            function d(e, t, n) {
                var r = t.dir, i = n && "parentNode" === r, o = V++;
                return t.first ? function (t, n, o) {
                    for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
                } : function (t, n, a) {
                    var s, u, l, c = [L, o];
                    if (a) {
                        for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                    } else for (; t = t[r];)if (1 === t.nodeType || i) {
                        if (l = t[U] || (t[U] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === L && s[1] === o)return c[2] = s[2];
                        if (u[r] = c, c[2] = e(t, n, a))return !0
                    }
                }
            }

            function h(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, r) {
                for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r);
                return r
            }

            function v(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function m(e, t, n, i, o, a) {
                return i && !i[U] && (i = m(i)), o && !o[U] && (o = m(o, a)), r(function (r, a, s, u) {
                    var l, c, f, p = [], d = [], h = a.length, m = r || g(t || "*", s.nodeType ? [s] : s, []), $ = !e || !r && t ? m : v(m, p, e, s, u), y = n ? o || (r ? e : h || i) ? [] : a : $;
                    if (n && n($, y, s, u), i)for (l = v(y, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !($[d[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = y.length; c--;)(f = y[c]) && l.push($[c] = f);
                                o(null, y = [], l, u)
                            }
                            for (c = y.length; c--;)(f = y[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                        }
                    } else y = v(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : Q.apply(a, y)
                })
            }

            function $(e) {
                for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = d(function (e) {
                    return e === t
                }, a, !0), l = d(function (e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)if (n = x.relative[e[s].type])c = [d(h(c), n)]; else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches), n[U]) {
                        for (r = ++s; i > r && !x.relative[e[r].type]; r++);
                        return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, r > s && $(e.slice(s, r)), i > r && $(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
                return h(c)
            }

            function y(e, n) {
                var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                    var c, f, p, d = 0, h = "0", g = r && [], m = [], $ = D, y = r || o && x.find.TAG("*", l), b = L += null == $ ? 1 : Math.random() || .1, w = y.length;
                    for (l && (D = a === M || a || l); h !== w && null != (c = y[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === M || (O(c), s = !j); p = e[f++];)if (p(c, a || M, s)) {
                                u.push(c);
                                break
                            }
                            l && (L = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];)p(g, m, a, s);
                        if (r) {
                            if (d > 0)for (; h--;)g[h] || m[h] || (m[h] = X.call(u));
                            m = v(m)
                        }
                        Q.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (L = b, D = $), g
                };
                return i ? r(a) : a
            }

            var b, w, x, C, k, T, S, E, D, A, _, O, M, N, j, I, P, R, F, U = "sizzle" + 1 * new Date, q = e.document, L = 0, V = 0, H = n(), B = n(), W = n(), z = function (e, t) {
                return e === t && (_ = !0), 0
            }, Y = 1 << 31, G = {}.hasOwnProperty, K = [], X = K.pop, J = K.push, Q = K.push, Z = K.slice, ee = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), pe = new RegExp("^" + re + "$"), de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $e = /[+~]/, ye = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, xe = function () {
                O()
            };
            try {
                Q.apply(K = Z.call(q.childNodes), q.childNodes), K[q.childNodes.length].nodeType
            } catch (Ce) {
                Q = {
                    apply: K.length ? function (e, t) {
                        J.apply(e, Z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, k = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, O = t.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : q;
                return r !== M && 9 === r.nodeType && r.documentElement ? (M = r, N = M.documentElement, j = !k(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = i(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function (e) {
                    return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(M.getElementsByClassName), w.getById = i(function (e) {
                    return N.appendChild(e).id = U, !M.getElementsByName || !M.getElementsByName(U).length
                }), w.getById ? (x.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && j) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, x.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), x.find.TAG = w.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];)1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function (e, t) {
                        return "undefined" != typeof t.getElementsByClassName && j ? t.getElementsByClassName(e) : void 0
                    }, P = [], I = [], (w.qsa = ve.test(M.querySelectorAll)) && (i(function (e) {
                    N.appendChild(e).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + U + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + U + "+*").length || I.push(".#.+[+~]")
                }), i(function (e) {
                    var t = M.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (w.matchesSelector = ve.test(R = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function (e) {
                    w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", oe)
                }), I = I.length && new RegExp(I.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(N.compareDocumentPosition), F = t || ve.test(N.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, z = t ? function (e, t) {
                    if (e === t)return _ = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === q && F(q, e) ? -1 : t === M || t.ownerDocument === q && F(q, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t)return _ = !0, 0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                    if (!i || !o)return e === M ? -1 : t === M ? 1 : i ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (i === o)return a(e, t);
                    for (n = e; n = n.parentNode;)s.unshift(n);
                    for (n = t; n = n.parentNode;)u.unshift(n);
                    for (; s[r] === u[r];)r++;
                    return r ? a(s[r], u[r]) : s[r] === q ? -1 : u[r] === q ? 1 : 0
                }, M) : M
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== M && O(e), n = n.replace(ce, "='$1']"), w.matchesSelector && j && !W[n + " "] && (!P || !P.test(n)) && (!I || !I.test(n)))try {
                    var r = R.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
                } catch (i) {
                }
                return t(n, M, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== M && O(e), F(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== M && O(e);
                var n = x.attrHandle[t.toLowerCase()], r = n && G.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                return void 0 !== r ? r : w.attributes || !j ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [], r = 0, i = 0;
                if (_ = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(z), _) {
                    for (; t = e[i++];)t === e[i] && (r = n.push(i));
                    for (; r--;)e.splice(n[r], 1)
                }
                return A = null, e
            }, C = t.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                    } else if (3 === i || 4 === i)return e.nodeValue
                } else for (; t = e[r++];)n += C(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = H[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    }, CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), $ = !u && !s, y = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && $) {
                                    for (p = v, f = p[U] || (p[U] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === L && l[1], y = d && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (y = d = 0) || h.pop();)if (1 === p.nodeType && ++y && p === t) {
                                        c[e] = [L, d, y];
                                        break
                                    }
                                } else if ($ && (p = t, f = p[U] || (p[U] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === L && l[1], y = d), y === !1)for (; (p = ++d && p && p[g] || (y = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++y || ($ && (f = p[U] || (p[U] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [L, y]), p !== t)););
                                return y -= i, y === r || y % r === 0 && y / r >= 0
                            }
                        }
                    }, PSEUDO: function (e, n) {
                        var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[U] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;)r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                        }) : function (e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [], n = [], i = S(e.replace(se, "$1"));
                        return i[U] ? r(function (e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }), has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }), contains: r(function (e) {
                        return e = e.replace(be, we), function (t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                    }), lang: r(function (e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function (t) {
                            var n;
                            do if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === N
                    }, focus: function (e) {
                        return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === !1
                    }, disabled: function (e) {
                        return e.disabled === !0
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                        return !0
                    }, parent: function (e) {
                        return !x.pseudos.empty(e)
                    }, header: function (e) {
                        return ge.test(e.nodeName)
                    }, input: function (e) {
                        return he.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (e, t) {
                        return [t - 1]
                    }), eq: l(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }), even: l(function (e, t) {
                        for (var n = 0; t > n; n += 2)e.push(n);
                        return e;
                    }), odd: l(function (e, t) {
                        for (var n = 1; t > n; n += 2)e.push(n);
                        return e
                    }), lt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                        return e
                    }), gt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[b] = s(b);
            for (b in{submit: !0, reset: !0})x.pseudos[b] = u(b);
            return f.prototype = x.filters = x.pseudos, x.setFilters = new f, T = t.tokenize = function (e, n) {
                var r, i, o, a, s, u, l, c = B[e + " "];
                if (c)return n ? 0 : c.slice(0);
                for (s = e, u = [], l = x.preFilter; s;) {
                    r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(se, " ")
                    }), s = s.slice(r.length));
                    for (a in x.filter)!(i = de[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r)break
                }
                return n ? s.length : s ? t.error(e) : B(e, u).slice(0)
            }, S = t.compile = function (e, t) {
                var n, r = [], i = [], o = W[e + " "];
                if (!o) {
                    for (t || (t = T(e)), n = t.length; n--;)o = $(t[n]), o[U] ? r.push(o) : i.push(o);
                    o = W(e, y(i, r)), o.selector = e
                }
                return o
            }, E = t.select = function (e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, f = !r && T(e = l.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && j && x.relative[o[1].type]) {
                        if (t = (x.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t)return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)if ((u = x.find[s]) && (r = u(a.matches[0].replace(be, we), $e.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e)return Q.apply(n, r), n;
                        break
                    }
                }
                return (l || S(e, f))(r, t, !j, n, !t || $e.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = U.split("").sort(z).join("") === U, w.detectDuplicates = !!_, O(), w.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(M.createElement("div"))
            }), i(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function (e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
        oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
        var fe = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (i && oe(e).is(n))break;
                r.push(e)
            }
            return r
        }, pe = function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }, de = oe.expr.match.needsContext, he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ge = /^.[^:#\[\.,]*$/;
        oe.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, oe.fn.extend({
            find: function (e) {
                var t, n = this.length, r = [], i = this;
                if ("string" != typeof e)return this.pushStack(oe(e).filter(function () {
                    for (t = 0; n > t; t++)if (oe.contains(i[t], this))return !0
                }));
                for (t = 0; n > t; t++)oe.find(e, i[t], r);
                return r = this.pushStack(n > 1 ? oe.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
            }, filter: function (e) {
                return this.pushStack(r(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(r(this, e || [], !0))
            }, is: function (e) {
                return !!r(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
            }
        });
        var ve, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, $e = oe.fn.init = function (e, t, n) {
            var r, i;
            if (!e)return this;
            if (n = n || ve, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), he.test(r[1]) && oe.isPlainObject(t))for (r in t)oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = K.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
        $e.prototype = oe.fn, ve = oe(K);
        var ye = /^(?:parents|prev(?:Until|All))/, be = {children: !0, contents: !0, next: !0, prev: !0};
        oe.fn.extend({
            has: function (e) {
                var t = oe(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; n > e; e++)if (oe.contains(this, t[e]))return !0
                })
            }, closest: function (e, t) {
                for (var n, r = 0, i = this.length, o = [], a = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), oe.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return fe(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return fe(e, "parentNode", n)
            }, next: function (e) {
                return i(e, "nextSibling")
            }, prev: function (e) {
                return i(e, "previousSibling")
            }, nextAll: function (e) {
                return fe(e, "nextSibling")
            }, prevAll: function (e) {
                return fe(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return fe(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return fe(e, "previousSibling", n)
            }, siblings: function (e) {
                return pe((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return pe(e.firstChild)
            }, contents: function (e) {
                return e.contentDocument || oe.merge([], e.childNodes)
            }
        }, function (e, t) {
            oe.fn[e] = function (n, r) {
                var i = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (be[e] || oe.uniqueSort(i), ye.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var we = /\S+/g;
        oe.Callbacks = function (e) {
            e = "string" == typeof e ? o(e) : oe.extend({}, e);
            var t, n, r, i, a = [], s = [], u = -1, l = function () {
                for (i = e.once, r = t = !0; s.length; u = -1)for (n = s.shift(); ++u < a.length;)a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            }, c = {
                add: function () {
                    return a && (n && !t && (u = a.length - 1, s.push(n)), function r(t) {
                        oe.each(t, function (t, n) {
                            oe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== oe.type(n) && r(n)
                        })
                    }(arguments), n && !t && l()), this
                }, remove: function () {
                    return oe.each(arguments, function (e, t) {
                        for (var n; (n = oe.inArray(t, a, n)) > -1;)a.splice(n, 1), u >= n && u--
                    }), this
                }, has: function (e) {
                    return e ? oe.inArray(e, a) > -1 : a.length > 0
                }, empty: function () {
                    return a && (a = []), this
                }, disable: function () {
                    return i = s = [], a = n = "", this
                }, disabled: function () {
                    return !a
                }, lock: function () {
                    return i = s = [], n || (a = n = ""), this
                }, locked: function () {
                    return !!i
                }, fireWith: function (e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return c
        }, oe.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]], n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, o) {
                                var a = oe.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                }, i = {};
                return r.pipe = r.then, oe.each(t, function (e, o) {
                    var a = o[2], s = o[3];
                    r[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            }, when: function (e) {
                var t, n, r, i = 0, o = X.call(arguments), a = o.length, s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0, u = 1 === s ? e : oe.Deferred(), l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? X.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
                if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        });
        var xe;
        oe.fn.ready = function (e) {
            return oe.ready.promise().done(e), this
        }, oe.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? oe.readyWait++ : oe.ready(!0)
            }, ready: function (e) {
                (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(K, [oe]), oe.fn.triggerHandler && (oe(K).triggerHandler("ready"), oe(K).off("ready"))))
            }
        }), oe.ready.promise = function (t) {
            return xe || (xe = oe.Deferred(), "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? e.setTimeout(oe.ready) : (K.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), xe.promise(t)
        }, oe.ready.promise();
        var Ce = function (e, t, n, r, i, o, a) {
            var s = 0, u = e.length, l = null == n;
            if ("object" === oe.type(n)) {
                i = !0;
                for (s in n)Ce(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, oe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(oe(e), n)
                })), t))for (; u > s; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }, ke = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        s.uid = 1, s.prototype = {
            register: function (e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            }, cache: function (e) {
                if (!ke(e))return {};
                var t = e[this.expando];
                return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)i[t] = n; else for (r in t)i[r] = t[r];
                return i
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            }, access: function (e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, r, i, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t)this.register(e); else {
                        oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(we) || [])), n = r.length;
                        for (; n--;)delete o[r[n]]
                    }
                    (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !oe.isEmptyObject(t)
            }
        };
        var Te = new s, Se = new s, Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, De = /[A-Z]/g;
        oe.extend({
            hasData: function (e) {
                return Se.hasData(e) || Te.hasData(e)
            }, data: function (e, t, n) {
                return Se.access(e, t, n)
            }, removeData: function (e, t) {
                Se.remove(e, t)
            }, _data: function (e, t, n) {
                return Te.access(e, t, n)
            }, _removeData: function (e, t) {
                Te.remove(e, t)
            }
        }), oe.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Se.get(o), 1 === o.nodeType && !Te.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), u(o, r, i[r])));
                        Te.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    Se.set(this, e)
                }) : Ce(this, function (t) {
                    var n, r;
                    if (o && void 0 === t) {
                        if (n = Se.get(o, e) || Se.get(o, e.replace(De, "-$&").toLowerCase()), void 0 !== n)return n;
                        if (r = oe.camelCase(e), n = Se.get(o, r), void 0 !== n)return n;
                        if (n = u(o, r, void 0), void 0 !== n)return n
                    } else r = oe.camelCase(e), this.each(function () {
                        var n = Se.get(this, r);
                        Se.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    Se.remove(this, e)
                })
            }
        }), oe.extend({
            queue: function (e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = Te.get(e, t), n && (!r || oe.isArray(n) ? r = Te.access(e, t, oe.makeArray(n)) : r.push(n)), r || []) : void 0
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = oe.queue(e, t), r = n.length, i = n.shift(), o = oe._queueHooks(e, t), a = function () {
                    oe.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Te.get(e, n) || Te.access(e, n, {
                        empty: oe.Callbacks("once memory").add(function () {
                            Te.remove(e, [t + "queue", n])
                        })
                    })
            }
        }), oe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    oe.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, r = 1, i = oe.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = Te.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, _e = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"), Oe = ["Top", "Right", "Bottom", "Left"], Me = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        }, Ne = /^(?:checkbox|radio)$/i, je = /<([\w:-]+)/, Ie = /^$|\/(?:java|ecma)script/i, Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td;
        var Re = /<|&#?\w+;/;
        !function () {
            var e = K.createDocumentFragment(), t = e.appendChild(K.createElement("div")), n = K.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Fe = /^key/, Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, qe = /^([^.]*)(?:\.(.+)|)/;
        oe.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, v = Te.get(e);
                if (v)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = oe.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                    return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(we) || [""], l = t.length; l--;)s = qe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = oe.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = oe.event.special[d] || {}, c = oe.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && oe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), oe.event.global[d] = !0)
            },
            remove: function (e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, v = Te.hasData(e) && Te.get(e);
                if (v && (u = v.events)) {
                    for (t = (t || "").match(we) || [""], l = t.length; l--;)if (s = qe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = oe.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;)c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || oe.removeEvent(e, d, v.handle), delete u[d])
                    } else for (d in u)oe.event.remove(e, d + t[l], n, r, !0);
                    oe.isEmptyObject(u) && Te.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                e = oe.event.fix(e);
                var t, n, r, i, o, a = [], s = X.call(arguments), u = (Te.get(this, "events") || {})[e.type] || [], l = oe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (a = oe.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
                if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; u !== this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                    for (r = [], n = 0; s > n; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(u) > -1 : oe.find(i, this, null, [u]).length), r[i] && r.push(o);
                    r.length && a.push({elem: u, handlers: r})
                }
                return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, r, i, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[oe.expando])return e;
                var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Ue.test(i) ? this.mouseHooks : Fe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
                return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === g() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                    }, _default: function (e) {
                        return oe.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, oe.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, oe.Event = function (e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
        }, oe.Event.prototype = {
            constructor: oe.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = d, e && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = d, e && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            oe.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || oe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), oe.fn.extend({
            on: function (e, t, n, r) {
                return v(this, e, t, n, r)
            }, one: function (e, t, n, r) {
                return v(this, e, t, n, r, 1)
            }, off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e)this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                    oe.event.remove(this, e, n, t)
                })
            }
        });
        var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ve = /<script|<style|<link/i, He = /checked\s*(?:[^=]|=\s*.checked.)/i, Be = /^true\/(.*)/, We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        oe.extend({
            htmlPrefilter: function (e) {
                return e.replace(Le, "<$1></$2>")
            }, clone: function (e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0), u = oe.contains(e.ownerDocument, e);
                if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))for (a = c(s), o = c(e), r = 0, i = o.length; i > r; r++)w(o[r], a[r]);
                if (t)if (n)for (o = o || c(e), a = a || c(s), r = 0, i = o.length; i > r; r++)b(o[r], a[r]); else b(e, s);
                return a = c(s, "script"), a.length > 0 && f(a, !u && c(e, "script")), s
            }, cleanData: function (e) {
                for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)if (ke(n)) {
                    if (t = n[Te.expando]) {
                        if (t.events)for (r in t.events)i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[Te.expando] = void 0
                    }
                    n[Se.expando] && (n[Se.expando] = void 0)
                }
            }
        }), oe.fn.extend({
            domManip: x, detach: function (e) {
                return C(this, e, !0)
            }, remove: function (e) {
                return C(this, e)
            }, text: function (e) {
                return Ce(this, function (e) {
                    return void 0 === e ? oe.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return x(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = m(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return x(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = m(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return x(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return x(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return oe.clone(this, e, t)
                })
            }, html: function (e) {
                return Ce(this, function (e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                    if ("string" == typeof e && !Ve.test(e) && !Pe[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = oe.htmlPrefilter(e);
                        try {
                            for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (i) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return x(this, arguments, function (t) {
                    var n = this.parentNode;
                    oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            oe.fn[e] = function (e) {
                for (var n, r = [], i = oe(e), o = i.length - 1, a = 0; o >= a; a++)n = a === o ? this : this.clone(!0), oe(i[a])[t](n), Q.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ze, Ye = {
            HTML: "block",
            BODY: "block"
        }, Ge = /^margin/, Ke = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"), Xe = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, Je = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        }, Qe = K.documentElement;
        !function () {
            function t() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Qe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Qe.removeChild(a)
            }

            var n, r, i, o, a = K.createElement("div"), s = K.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), oe.extend(re, {
                pixelPosition: function () {
                    return t(), n
                }, boxSizingReliable: function () {
                    return null == r && t(), r
                }, pixelMarginRight: function () {
                    return null == r && t(), i
                }, reliableMarginLeft: function () {
                    return null == r && t(), o
                }, reliableMarginRight: function () {
                    var t, n = s.appendChild(K.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Qe.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Qe.removeChild(a), s.removeChild(n), t
                }
            }))
        }();
        var Ze = /^(none|table(?!-c[ea]).+)/, et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, tt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, nt = ["Webkit", "O", "Moz", "ms"], rt = K.createElement("div").style;
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = S(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": "cssFloat"},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = oe.camelCase(t), u = e.style;
                    return t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = _e.exec(n)) && i[1] && (n = l(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[s] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = oe.camelCase(t);
                return t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = S(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }), oe.each(["height", "width"], function (e, t) {
            oe.cssHooks[t] = {
                get: function (e, n, r) {
                    return n ? Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Je(e, et, function () {
                        return O(e, t, r)
                    }) : O(e, t, r) : void 0
                }, set: function (e, n, r) {
                    var i, o = r && Xe(e), a = r && _(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                    return a && (i = _e.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), A(e, n, a)
                }
            }
        }), oe.cssHooks.marginLeft = E(re.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), oe.cssHooks.marginRight = E(re.reliableMarginRight, function (e, t) {
            return t ? Je(e, {display: "inline-block"}, S, [e, "marginRight"]) : void 0
        }), oe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            oe.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, Ge.test(e) || (oe.cssHooks[e + t].set = A)
        }), oe.fn.extend({
            css: function (e, t) {
                return Ce(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (oe.isArray(t)) {
                        for (r = Xe(e), i = t.length; i > a; a++)o[t[a]] = oe.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return M(this, !0)
            }, hide: function () {
                return M(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Me(this) ? oe(this).show() : oe(this).hide()
                })
            }
        }), oe.Tween = N, N.prototype = {
            constructor: N, init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (oe.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
            }
        }, N.prototype.init.prototype = N.prototype, N.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, oe.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, oe.fx = N.prototype.init, oe.fx.step = {};
        var it, ot, at = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
        oe.Animation = oe.extend(U, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return l(n.elem, e, _e.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
                for (var n, r = 0, i = e.length; i > r; r++)n = e[r], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
            }, prefilters: [R], prefilter: function (e, t) {
                t ? U.prefilters.unshift(e) : U.prefilters.push(e)
            }
        }), oe.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
            }, r
        }, oe.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Me).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                var i = oe.isEmptyObject(e), o = oe.speed(t, n, r), a = function () {
                    var t = U(this, oe.extend({}, e), o);
                    (i || Te.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, i = null != e && e + "queueHooks", o = oe.timers, a = Te.get(this);
                    if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && st.test(i) && r(a[i]);
                    for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || oe.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = Te.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = oe.timers, a = r ? r.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
            }
        }), oe.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            oe.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var e, t = 0, n = oe.timers;
            for (it = oe.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(),
                it = void 0
        }, oe.fx.timer = function (e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function () {
            ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            e.clearInterval(ot), ot = null
        }, oe.fx.speeds = {slow: 600, fast: 200, _default: 400}, oe.fn.delay = function (t, n) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        }, function () {
            var e = K.createElement("input"), t = K.createElement("select"), n = t.appendChild(K.createElement("option"));
            e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
        }();
        var ut, lt = oe.expr.attrHandle;
        oe.fn.extend({
            attr: function (e, t) {
                return Ce(this, oe.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    oe.removeAttr(this, e)
                })
            }
        }), oe.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r))
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, r, i = 0, o = t && t.match(we);
                if (o && 1 === e.nodeType)for (; n = o[i++];)r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
            }
        }), ut = {
            set: function (e, t, n) {
                return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = lt[t] || oe.find.attr;
            lt[t] = function (e, t, r) {
                var i, o;
                return r || (o = lt[t], lt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = o), i
            }
        });
        var ct = /^(?:input|select|textarea|button)$/i, ft = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function (e, t) {
                return Ce(this, oe.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[oe.propFix[e] || e]
                })
            }
        }), oe.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {"for": "htmlFor", "class": "className"}
        }), re.optSelected || (oe.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            oe.propFix[this.toLowerCase()] = this
        });
        var pt = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, s, u = 0;
                if (oe.isFunction(e))return this.each(function (t) {
                    oe(this).addClass(e.call(this, t, q(this)))
                });
                if ("string" == typeof e && e)for (t = e.match(we) || []; n = this[u++];)if (i = q(n), r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")) {
                    for (a = 0; o = t[a++];)r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    s = oe.trim(r), i !== s && n.setAttribute("class", s)
                }
                return this
            }, removeClass: function (e) {
                var t, n, r, i, o, a, s, u = 0;
                if (oe.isFunction(e))return this.each(function (t) {
                    oe(this).removeClass(e.call(this, t, q(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof e && e)for (t = e.match(we) || []; n = this[u++];)if (i = q(n), r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")) {
                    for (a = 0; o = t[a++];)for (; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " ");
                    s = oe.trim(r), i !== s && n.setAttribute("class", s)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
                    oe(this).toggleClass(e.call(this, n, q(this), t), t)
                }) : this.each(function () {
                    var t, r, i, o;
                    if ("string" === n)for (r = 0, i = oe(this), o = e.match(we) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = q(this), t && Te.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Te.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + q(n) + " ").replace(pt, " ").indexOf(t) > -1)return !0;
                return !1
            }
        });
        var dt = /\r/g;
        oe.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0];
                {
                    if (arguments.length)return r = oe.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i)return t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
                }
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        return oe.trim(e.value)
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o)return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, r, i = e.options, o = oe.makeArray(t), a = i.length; a--;)r = i[a], (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function () {
            oe.valHooks[this] = {
                set: function (e, t) {
                    return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
                }
            }, re.checkOn || (oe.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var ht = /^(?:focusinfocus|focusoutblur)$/;
        oe.extend(oe.event, {
            trigger: function (t, n, r, i) {
                var o, a, s, u, l, c, f, p = [r || K], d = ne.call(t, "type") ? t.type : t, h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !ht.test(d + oe.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[oe.expando] ? t : new oe.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                    if (!i && !f.noBubble && !oe.isWindow(r)) {
                        for (u = f.delegateType || d, ht.test(u + d) || (a = a.parentNode); a; a = a.parentNode)p.push(a), s = a;
                        s === (r.ownerDocument || K) && p.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0; (a = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : f.bindType || d, c = (Te.get(a, "events") || {})[t.type] && Te.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && ke(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !ke(r) || l && oe.isFunction(r[d]) && !oe.isWindow(r) && (s = r[l], s && (r[l] = null), oe.event.triggered = d, r[d](), oe.event.triggered = void 0, s && (r[l] = s)), t.result
                }
            }, simulate: function (e, t, n) {
                var r = oe.extend(new oe.Event, n, {type: e, isSimulated: !0});
                oe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
            }
        }), oe.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    oe.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                return n ? oe.event.trigger(e, t, n, !0) : void 0
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            oe.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), oe.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), re.focusin = "onfocusin" in e, re.focusin || oe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                oe.event.simulate(t, e.target, oe.event.fix(e))
            };
            oe.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = Te.access(r, t);
                    i || r.addEventListener(e, n, !0), Te.access(r, t, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = Te.access(r, t) - 1;
                    i ? Te.access(r, t, i) : (r.removeEventListener(e, n, !0), Te.remove(r, t))
                }
            }
        });
        var gt = e.location, vt = oe.now(), mt = /\?/;
        oe.parseJSON = function (e) {
            return JSON.parse(e + "")
        }, oe.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t)return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (r) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
        };
        var $t = /#.*$/, yt = /([?&])_=[^&]*/, bt = /^(.*?):[ \t]*([^\r\n]*)$/gm, wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, xt = /^(?:GET|HEAD)$/, Ct = /^\/\//, kt = {}, Tt = {}, St = "*/".concat("*"), Et = K.createElement("a");
        Et.href = gt.href, oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal: wt.test(gt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": St,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? H(H(e, oe.ajaxSettings), t) : H(oe.ajaxSettings, e)
            },
            ajaxPrefilter: L(kt),
            ajaxTransport: L(Tt),
            ajax: function (t, n) {
                function r(t, n, r, s) {
                    var l, f, $, y, w, C = n;
                    2 !== b && (b = 2, u && e.clearTimeout(u), i = void 0, a = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (y = B(p, x, r)), y = W(p, y, x, l), l ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, f = y.data, $ = y.error, l = !$)) : ($ = C, !t && C || (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || C) + "", l ? g.resolveWith(d, [f, C, x]) : g.rejectWith(d, [x, C, $]), x.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? f : $]), v.fireWith(d, [x, C]), c && (h.trigger("ajaxComplete", [x, p]), --oe.active || oe.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var i, o, a, s, u, l, c, f, p = oe.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event, g = oe.Deferred(), v = oe.Callbacks("once memory"), m = p.statusCode || {}, $ = {}, y = {}, b = 0, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!s)for (s = {}; t = bt.exec(a);)s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, $[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
                if (g.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || gt.href) + "").replace($t, "").replace(Ct, gt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
                    l = K.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = Et.protocol + "//" + Et.host != l.protocol + "//" + l.host
                    } catch (C) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), V(kt, p, n, x), 2 === b)return x;
                c = oe.event && p.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !xt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (mt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = yt.test(o) ? o.replace(yt, "$1_=" + vt++) : o + (mt.test(o) ? "&" : "?") + "_=" + vt++)), p.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + St + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers)x.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(d, x, p) === !1 || 2 === b))return x.abort();
                w = "abort";
                for (f in{success: 1, error: 1, complete: 1})x[f](p[f]);
                if (i = V(Tt, p, n, x)) {
                    if (x.readyState = 1, c && h.trigger("ajaxSend", [x, p]), 2 === b)return x;
                    p.async && p.timeout > 0 && (u = e.setTimeout(function () {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, i.send($, r)
                    } catch (C) {
                        if (!(2 > b))throw C;
                        r(-1, C)
                    }
                } else r(-1, "No Transport");
                return x
            },
            getJSON: function (e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }), oe.each(["get", "post"], function (e, t) {
            oe[t] = function (e, n, r, i) {
                return oe.isFunction(n) && (i = i || r, r = n, n = void 0), oe.ajax(oe.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, oe.isPlainObject(e) && e))
            }
        }), oe._evalUrl = function (e) {
            return oe.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, oe.fn.extend({
            wrapAll: function (e) {
                var t;
                return oe.isFunction(e) ? this.each(function (t) {
                    oe(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                    return e
                }).append(this)), this)
            }, wrapInner: function (e) {
                return oe.isFunction(e) ? this.each(function (t) {
                    oe(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = oe(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = oe.isFunction(e);
                return this.each(function (n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), oe.expr.filters.hidden = function (e) {
            return !oe.expr.filters.visible(e)
        }, oe.expr.filters.visible = function (e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
        };
        var Dt = /%20/g, At = /\[\]$/, _t = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i, Mt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function (e, t) {
            var n, r = [], i = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e))oe.each(e, function () {
                i(this.name, this.value)
            }); else for (n in e)z(n, e[n], t, i);
            return r.join("&").replace(Dt, "+")
        }, oe.fn.extend({
            serialize: function () {
                return oe.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && Mt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Ne.test(e))
                }).map(function (e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                        return {name: t.name, value: e.replace(_t, "\r\n")}
                    }) : {name: t.name, value: n.replace(_t, "\r\n")}
                }).get()
            }
        }), oe.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch (t) {
            }
        };
        var Nt = {0: 200, 1223: 204}, jt = oe.ajaxSettings.xhr();
        re.cors = !!jt && "withCredentials" in jt, re.ajax = jt = !!jt, oe.ajaxTransport(function (t) {
            var n, r;
            return re.cors || jt && !t.crossDomain ? {
                send: function (i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (a in t.xhrFields)s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)s.setRequestHeader(a, i[a]);
                    n = function (e) {
                        return function () {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Nt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && e.setTimeout(function () {
                            n && r()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (u) {
                        if (n)throw u
                    }
                }, abort: function () {
                    n && n()
                }
            } : void 0
        }), oe.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return oe.globalEval(e), e
                }
            }
        }), oe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), oe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (r, i) {
                        t = oe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), K.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var It = [], Pt = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = It.pop() || oe.expando + "_" + vt++;
                return this[e] = !0, e
            }
        }), oe.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Pt, "$1" + i) : t.jsonp !== !1 && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return a || oe.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === o ? oe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, It.push(i)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), re.createHTMLDocument = function () {
            var e = K.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), oe.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || (re.createHTMLDocument ? K.implementation.createHTMLDocument("") : K);
            var r = he.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = p([e], t, i), i && i.length && oe(i).remove(), oe.merge([], r.childNodes))
        };
        var Rt = oe.fn.load;
        oe.fn.load = function (e, t, n) {
            if ("string" != typeof e && Rt)return Rt.apply(this, arguments);
            var r, i, o, a = this, s = e.indexOf(" ");
            return s > -1 && (r = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && oe.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(a, o || [e.responseText, t, e])
                    })
                }), this
        }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            oe.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), oe.expr.filters.animated = function (e) {
            return oe.grep(oe.timers, function (t) {
                return e === t.elem
            }).length
        }, oe.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l, c = oe.css(e, "position"), f = oe(e), p = {};
                "static" === c && (e.style.position = "relative"), s = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
            }
        }, oe.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    oe.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
                if (o)return t = o.documentElement, oe.contains(t, r) ? (i = r.getBoundingClientRect(), n = Y(o), {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
            }, position: function () {
                if (this[0]) {
                    var e, t, n = this[0], r = {top: 0, left: 0};
                    return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - r.top - oe.css(n, "marginTop", !0),
                        left: t.left - r.left - oe.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === oe.css(e, "position");)e = e.offsetParent;
                    return e || Qe
                })
            }
        }), oe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = "pageYOffset" === t;
            oe.fn[e] = function (r) {
                return Ce(this, function (e, r, i) {
                    var o = Y(e);
                    return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                }, e, r, arguments.length)
            }
        }), oe.each(["top", "left"], function (e, t) {
            oe.cssHooks[t] = E(re.pixelPosition, function (e, n) {
                return n ? (n = S(e, t), Ke.test(n) ? oe(e).position()[t] + "px" : n) : void 0
            })
        }), oe.each({Height: "height", Width: "width"}, function (e, t) {
            oe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                oe.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Ce(this, function (t, n, r) {
                        var i;
                        return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, a) : oe.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }), oe.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }, size: function () {
                return this.length
            }
        }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return oe
        });
        var Ft = e.jQuery, Ut = e.$;
        return oe.noConflict = function (t) {
            return e.$ === oe && (e.$ = Ut), t && e.jQuery === oe && (e.jQuery = Ft), oe
        }, t || (e.jQuery = e.$ = oe), oe
    }), function () {
        function e(e, t) {
            return e.set(t[0], t[1]), e
        }

        function t(e, t) {
            return e.add(t), e
        }

        function n(e, t, n) {
            var r = n.length;
            switch (r) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }

        function r(e, t, n, r) {
            for (var i = -1, o = e.length; ++i < o;) {
                var a = e[i];
                t(r, a, n(a), e)
            }
            return r
        }

        function i(e, t) {
            for (var n = -1, r = e.length, i = -1, o = t.length, a = Array(r + o); ++n < r;)a[n] = e[n];
            for (; ++i < o;)a[n++] = t[i];
            return a
        }

        function o(e, t) {
            for (var n = -1, r = e.length; ++n < r && t(e[n], n, e) !== !1;);
            return e
        }

        function a(e, t) {
            for (var n = e.length; n-- && t(e[n], n, e) !== !1;);
            return e
        }

        function s(e, t) {
            for (var n = -1, r = e.length; ++n < r;)if (!t(e[n], n, e))return !1;
            return !0
        }

        function u(e, t) {
            for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }

        function l(e, t) {
            return !!e.length && y(e, t, 0) > -1
        }

        function c(e, t, n) {
            for (var r = -1, i = e.length; ++r < i;)if (n(t, e[r]))return !0;
            return !1
        }

        function f(e, t) {
            for (var n = -1, r = e.length, i = Array(r); ++n < r;)i[n] = t(e[n], n, e);
            return i
        }

        function p(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;)e[i + n] = t[n];
            return e
        }

        function d(e, t, n, r) {
            var i = -1, o = e.length;
            for (r && o && (n = e[++i]); ++i < o;)n = t(n, e[i], i, e);
            return n
        }

        function h(e, t, n, r) {
            var i = e.length;
            for (r && i && (n = e[--i]); i--;)n = t(n, e[i], i, e);
            return n
        }

        function g(e, t) {
            for (var n = -1, r = e.length; ++n < r;)if (t(e[n], n, e))return !0;
            return !1
        }

        function v(e, t, n) {
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r], a = t(o);
                if (null != a && (s === G ? a === a : n(a, s)))var s = a, u = o
            }
            return u
        }

        function m(e, t, n, r) {
            var i;
            return n(e, function (e, n, o) {
                return t(e, n, o) ? (i = r ? n : e, !1) : void 0
            }), i
        }

        function $(e, t, n) {
            for (var r = e.length, i = n ? r : -1; n ? i-- : ++i < r;)if (t(e[i], i, e))return i;
            return -1
        }

        function y(e, t, n) {
            if (t !== t)return R(e, n);
            for (var r = n - 1, i = e.length; ++r < i;)if (e[r] === t)return r;
            return -1
        }

        function b(e, t, n, r) {
            for (var i = n - 1, o = e.length; ++i < o;)if (r(e[i], t))return i;
            return -1
        }

        function w(e, t, n, r, i) {
            return i(e, function (e, i, o) {
                n = r ? (r = !1, e) : t(n, e, i, o)
            }), n
        }

        function x(e, t) {
            var n = e.length;
            for (e.sort(t); n--;)e[n] = e[n].value;
            return e
        }

        function C(e, t) {
            for (var n, r = -1, i = e.length; ++r < i;) {
                var o = t(e[r]);
                o !== G && (n = n === G ? o : n + o)
            }
            return n
        }

        function k(e, t) {
            for (var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
            return r
        }

        function T(e, t) {
            return f(t, function (t) {
                return [t, e[t]]
            })
        }

        function S(e) {
            return function (t) {
                return e(t)
            }
        }

        function E(e, t) {
            return f(t, function (t) {
                return e[t]
            })
        }

        function D(e, t) {
            for (var n = -1, r = e.length; ++n < r && y(t, e[n], 0) > -1;);
            return n
        }

        function A(e, t) {
            for (var n = e.length; n-- && y(t, e[n], 0) > -1;);
            return n
        }

        function _(e) {
            return e && e.Object === Object ? e : null
        }

        function O(e, t) {
            if (e !== t) {
                var n = null === e, r = e === G, i = e === e, o = null === t, a = t === G, s = t === t;
                if (e > t && !o || !i || n && !a && s || r && s)return 1;
                if (t > e && !n || !s || o && !r && i || a && i)return -1
            }
            return 0
        }

        function M(e, t, n) {
            for (var r = -1, i = e.criteria, o = t.criteria, a = i.length, s = n.length; ++r < a;) {
                var u = O(i[r], o[r]);
                if (u) {
                    if (r >= s)return u;
                    var l = n[r];
                    return u * ("desc" == l ? -1 : 1)
                }
            }
            return e.index - t.index
        }

        function N(e, t) {
            for (var n = e.length, r = 0; n--;)e[n] === t && r++;
            return r
        }

        function j(e) {
            return yn[e]
        }

        function I(e) {
            return bn[e]
        }

        function P(e) {
            return "\\" + Cn[e]
        }

        function R(e, t, n) {
            for (var r = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < r;) {
                var o = e[i];
                if (o !== o)return i
            }
            return -1
        }

        function F(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)try {
                t = !!(e + "")
            } catch (n) {
            }
            return t
        }

        function U(e, t) {
            return e = "number" == typeof e || kt.test(e) ? +e : -1, t = null == t ? be : t, e > -1 && e % 1 == 0 && t > e
        }

        function q(e) {
            for (var t, n = []; !(t = e.next()).done;)n.push(t.value);
            return n
        }

        function L(e) {
            var t = -1, n = Array(e.size);
            return e.forEach(function (e, r) {
                n[++t] = [r, e]
            }), n
        }

        function V(e, t) {
            for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
                var a = e[n];
                a !== t && a !== Z || (e[n] = Z, o[i++] = n)
            }
            return o
        }

        function H(e) {
            var t = -1, n = Array(e.size);
            return e.forEach(function (e) {
                n[++t] = e
            }), n
        }

        function B(e) {
            if (!e || !fn.test(e))return e.length;
            for (var t = cn.lastIndex = 0; cn.test(e);)t++;
            return t
        }

        function W(e) {
            return e.match(cn)
        }

        function z(e) {
            return wn[e]
        }

        function Y(_) {
            function kt(e) {
                if (La(e) && !Sc(e) && !(e instanceof _t)) {
                    if (e instanceof At)return e;
                    if (Gu.call(e, "__wrapped__"))return ji(e)
                }
                return new At(e)
            }

            function Dt() {
            }

            function At(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = G
            }

            function _t(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ce, this.__views__ = []
            }

            function Ot() {
                var e = new _t(this.__wrapped__);
                return e.__actions__ = Ur(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ur(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ur(this.__views__), e
            }

            function Mt() {
                if (this.__filtered__) {
                    var e = new _t(this);
                    e.__dir__ = -1, e.__filtered__ = !0
                } else e = this.clone(), e.__dir__ *= -1;
                return e
            }

            function Nt() {
                var e = this.__wrapped__.value(), t = this.__dir__, n = Sc(e), r = 0 > t, i = n ? e.length : 0, o = mi(0, i, this.__views__), a = o.start, s = o.end, u = s - a, l = r ? s : a - 1, c = this.__iteratees__, f = c.length, p = 0, d = yl(u, this.__takeCount__);
                if (!n || X > i || i == u && d == u)return Er(e, this.__actions__);
                var h = [];
                e:for (; u-- && d > p;) {
                    l += t;
                    for (var g = -1, v = e[l]; ++g < f;) {
                        var m = c[g], $ = m.iteratee, y = m.type, b = $(v);
                        if (y == me)v = b; else if (!b) {
                            if (y == ve)continue e;
                            break e
                        }
                    }
                    h[p++] = v
                }
                return h
            }

            function jt() {
            }

            function It(e, t) {
                return Rt(e, t) && delete e[t]
            }

            function Pt(e, t) {
                if (Sl) {
                    var n = e[t];
                    return n === Q ? G : n
                }
                return Gu.call(e, t) ? e[t] : G
            }

            function Rt(e, t) {
                return Sl ? e[t] !== G : Gu.call(e, t)
            }

            function Ft(e, t, n) {
                e[t] = Sl && n === G ? Q : n
            }

            function Ut(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function qt() {
                this.__data__ = {hash: new jt, map: Cl ? new Cl : [], string: new jt}
            }

            function Lt(e) {
                var t = this.__data__;
                return Ti(e) ? It("string" == typeof e ? t.string : t.hash, e) : Cl ? t.map["delete"](e) : en(t.map, e)
            }

            function Vt(e) {
                var t = this.__data__;
                return Ti(e) ? Pt("string" == typeof e ? t.string : t.hash, e) : Cl ? t.map.get(e) : tn(t.map, e)
            }

            function Ht(e) {
                var t = this.__data__;
                return Ti(e) ? Rt("string" == typeof e ? t.string : t.hash, e) : Cl ? t.map.has(e) : nn(t.map, e)
            }

            function Bt(e, t) {
                var n = this.__data__;
                return Ti(e) ? Ft("string" == typeof e ? n.string : n.hash, e, t) : Cl ? n.map.set(e, t) : on(n.map, e, t), this
            }

            function Wt(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.__data__ = new Ut; ++t < n;)this.push(e[t])
            }

            function zt(e, t) {
                var n = e.__data__;
                if (Ti(t)) {
                    var r = n.__data__, i = "string" == typeof t ? r.string : r.hash;
                    return i[t] === Q
                }
                return n.has(t)
            }

            function Yt(e) {
                var t = this.__data__;
                if (Ti(e)) {
                    var n = t.__data__, r = "string" == typeof e ? n.string : n.hash;
                    r[e] = Q
                } else t.set(e, Q)
            }

            function Gt(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function Kt() {
                this.__data__ = {array: [], map: null}
            }

            function Xt(e) {
                var t = this.__data__, n = t.array;
                return n ? en(n, e) : t.map["delete"](e)
            }

            function Jt(e) {
                var t = this.__data__, n = t.array;
                return n ? tn(n, e) : t.map.get(e)
            }

            function Qt(e) {
                var t = this.__data__, n = t.array;
                return n ? nn(n, e) : t.map.has(e)
            }

            function Zt(e, t) {
                var n = this.__data__, r = n.array;
                r && (r.length < X - 1 ? on(r, e, t) : (n.array = null, n.map = new Ut(r)));
                var i = n.map;
                return i && i.set(e, t), this
            }

            function en(e, t) {
                var n = rn(e, t);
                if (0 > n)return !1;
                var r = e.length - 1;
                return n == r ? e.pop() : pl.call(e, n, 1), !0
            }

            function tn(e, t) {
                var n = rn(e, t);
                return 0 > n ? G : e[n][1]
            }

            function nn(e, t) {
                return rn(e, t) > -1
            }

            function rn(e, t) {
                for (var n = e.length; n--;)if (xa(e[n][0], t))return n;
                return -1
            }

            function on(e, t, n) {
                var r = rn(e, t);
                0 > r ? e.push([t, n]) : e[r][1] = n
            }

            function an(e, t, n, r) {
                return e === G || xa(e, zu[n]) && !Gu.call(r, n) ? t : e
            }

            function sn(e, t, n) {
                (n === G || xa(e[t], n)) && ("number" != typeof t || n !== G || t in e) || (e[t] = n)
            }

            function un(e, t, n) {
                var r = e[t];
                Gu.call(e, t) && xa(r, n) && (n !== G || t in e) || (e[t] = n)
            }

            function cn(e, t, n, r) {
                return Pl(e, function (e, i, o) {
                    t(r, e, n(e), o)
                }), r
            }

            function yn(e, t) {
                return e && qr(t, Es(t), e)
            }

            function bn(e, t) {
                for (var n = -1, r = null == e, i = t.length, o = Array(i); ++n < i;)o[n] = r ? G : ks(e, t[n]);
                return o
            }

            function wn(e) {
                return Da(e) ? e : []
            }

            function xn(e) {
                return "function" == typeof e ? e : $u
            }

            function Cn(e) {
                return Sc(e) ? e : Ni(e)
            }

            function Sn(e, t, n) {
                return e === e && (n !== G && (e = n >= e ? e : n), t !== G && (e = e >= t ? e : t)), e
            }

            function En(e, t, n, r, i, a, s) {
                var u;
                if (r && (u = a ? r(e, i, a, s) : r(e)), u !== G)return u;
                if (!qa(e))return e;
                var l = Sc(e);
                if (l) {
                    if (u = yi(e), !t)return Ur(e, u)
                } else {
                    var c = vi(e), f = c == Oe || c == Me;
                    if (Ec(e))return _r(e, t);
                    if (c == Ie || c == Se || f && !a) {
                        if (F(e))return a ? e : {};
                        if (u = bi(f ? {} : e), !t)return u = yn(u, e), n ? Vr(e, u) : u
                    } else {
                        if (!$n[c])return a ? e : {};
                        u = wi(e, c, t)
                    }
                }
                s || (s = new Gt);
                var p = s.get(e);
                return p ? p : (s.set(e, u), (l ? o : qn)(e, function (i, o) {
                    un(u, o, En(i, t, n, r, o, e, s))
                }), n && !l ? Vr(e, u) : u)
            }

            function An(e) {
                var t = Es(e), n = t.length;
                return function (r) {
                    if (null == r)return !n;
                    for (var i = n; i--;) {
                        var o = t[i], a = e[o], s = r[o];
                        if (s === G && !(o in Object(r)) || !a(s))return !1
                    }
                    return !0
                }
            }

            function _n(e) {
                return qa(e) ? ll(e) : {}
            }

            function On(e, t, n) {
                if ("function" != typeof e)throw new Bu(J);
                return fl(function () {
                    e.apply(G, n)
                }, t)
            }

            function Mn(e, t, n, r) {
                var i = -1, o = l, a = !0, s = e.length, u = [], p = t.length;
                if (!s)return u;
                n && (t = f(t, S(n))), r ? (o = c, a = !1) : t.length >= X && (o = zt, a = !1, t = new Wt(t));
                e:for (; ++i < s;) {
                    var d = e[i], h = n ? n(d) : d;
                    if (a && h === h) {
                        for (var g = p; g--;)if (t[g] === h)continue e;
                        u.push(d)
                    } else o(t, h, r) || u.push(d)
                }
                return u
            }

            function In(e, t) {
                var n = !0;
                return Pl(e, function (e, r, i) {
                    return n = !!t(e, r, i)
                }), n
            }

            function Pn(e, t, n, r) {
                var i = e.length;
                for (n = ls(n), 0 > n && (n = -n > i ? 0 : i + n), r = r === G || r > i ? i : ls(r), 0 > r && (r += i), r = n > r ? 0 : cs(r); r > n;)e[n++] = t;
                return e
            }

            function Rn(e, t) {
                var n = [];
                return Pl(e, function (e, r, i) {
                    t(e, r, i) && n.push(e)
                }), n
            }

            function Fn(e, t, n, r) {
                r || (r = []);
                for (var i = -1, o = e.length; ++i < o;) {
                    var a = e[i];
                    t > 0 && Da(a) && (n || Sc(a) || Ta(a)) ? t > 1 ? Fn(a, t - 1, n, r) : p(r, a) : n || (r[r.length] = a)
                }
                return r
            }

            function Un(e, t) {
                return null == e ? e : Fl(e, t, Ds)
            }

            function qn(e, t) {
                return e && Fl(e, t, Es)
            }

            function Ln(e, t) {
                return e && Ul(e, t, Es)
            }

            function Vn(e, t) {
                return u(t, function (t) {
                    return Ra(e[t])
                })
            }

            function Hn(e, t) {
                t = ki(t, e) ? [t + ""] : Cn(t);
                for (var n = 0, r = t.length; null != e && r > n;)e = e[t[n++]];
                return n && n == r ? e : G
            }

            function Bn(e, t) {
                return Gu.call(e, t) || "object" == typeof e && t in e && null === al(e)
            }

            function Wn(e, t) {
                return t in Object(e)
            }

            function zn(e, t, n) {
                return e >= yl(t, n) && e < $l(t, n)
            }

            function Yn(e, t, n) {
                for (var r = n ? c : l, i = e[0].length, o = e.length, a = o, s = Array(o), u = 1 / 0, p = []; a--;) {
                    var d = e[a];
                    a && t && (d = f(d, S(t))), u = yl(d.length, u), s[a] = !n && (t || i >= 120 && d.length >= 120) ? new Wt(a && d) : G;
                }
                d = e[0];
                var h = -1, g = s[0];
                e:for (; ++h < i && p.length < u;) {
                    var v = d[h], m = t ? t(v) : v;
                    if (!(g ? zt(g, m) : r(p, m, n))) {
                        for (a = o; --a;) {
                            var $ = s[a];
                            if (!($ ? zt($, m) : r(e[a], m, n)))continue e
                        }
                        g && g.push(m), p.push(v)
                    }
                }
                return p
            }

            function Gn(e, t, n, r) {
                return qn(e, function (e, i, o) {
                    t(r, n(e), i, o)
                }), r
            }

            function Kn(e, t, r) {
                ki(t, e) || (t = Cn(t), e = Oi(e, t), t = Qi(t));
                var i = null == e ? e : e[t];
                return null == i ? G : n(i, e, r)
            }

            function Xn(e, t, n, r, i) {
                return e === t ? !0 : null == e || null == t || !qa(e) && !La(t) ? e !== e && t !== t : Jn(e, t, Xn, n, r, i)
            }

            function Jn(e, t, n, r, i, o) {
                var a = Sc(e), s = Sc(t), u = Ee, l = Ee;
                a || (u = vi(e), u = u == Se ? Ie : u), s || (l = vi(t), l = l == Se ? Ie : l);
                var c = u == Ie && !F(e), f = l == Ie && !F(t), p = u == l;
                if (p && !c)return o || (o = new Gt), a || ns(e) ? ui(e, t, n, r, i, o) : li(e, t, u, n, r, i, o);
                if (!(i & fe)) {
                    var d = c && Gu.call(e, "__wrapped__"), h = f && Gu.call(t, "__wrapped__");
                    if (d || h)return o || (o = new Gt), n(d ? e.value() : e, h ? t.value() : t, r, i, o)
                }
                return p ? (o || (o = new Gt), ci(e, t, n, r, i, o)) : !1
            }

            function Qn(e, t, n, r) {
                var i = n.length, o = i, a = !r;
                if (null == e)return !o;
                for (e = Object(e); i--;) {
                    var s = n[i];
                    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))return !1
                }
                for (; ++i < o;) {
                    s = n[i];
                    var u = s[0], l = e[u], c = s[1];
                    if (a && s[2]) {
                        if (l === G && !(u in e))return !1
                    } else {
                        var f = new Gt, p = r ? r(l, c, u, e, t, f) : G;
                        if (!(p === G ? Xn(c, l, r, ce | fe, f) : p))return !1
                    }
                }
                return !0
            }

            function Zn(e) {
                var t = typeof e;
                return "function" == t ? e : null == e ? $u : "object" == t ? Sc(e) ? ir(e[0], e[1]) : rr(e) : Su(e)
            }

            function er(e) {
                return ml(Object(e))
            }

            function tr(e) {
                e = null == e ? e : Object(e);
                var t = [];
                for (var n in e)t.push(n);
                return t
            }

            function nr(e, t) {
                var n = -1, r = Ea(e) ? Array(e.length) : [];
                return Pl(e, function (e, i, o) {
                    r[++n] = t(e, i, o)
                }), r
            }

            function rr(e) {
                var t = di(e);
                if (1 == t.length && t[0][2]) {
                    var n = t[0][0], r = t[0][1];
                    return function (e) {
                        return null == e ? !1 : e[n] === r && (r !== G || n in Object(e))
                    }
                }
                return function (n) {
                    return n === e || Qn(n, e, t)
                }
            }

            function ir(e, t) {
                return function (n) {
                    var r = ks(n, e);
                    return r === G && r === t ? Ss(n, e) : Xn(t, r, G, ce | fe)
                }
            }

            function or(e, t, n, r, i) {
                if (e !== t) {
                    var a = Sc(t) || ns(t) ? G : Ds(t);
                    o(a || t, function (o, s) {
                        if (a && (s = o, o = t[s]), qa(o))i || (i = new Gt), ar(e, t, s, n, or, r, i); else {
                            var u = r ? r(e[s], o, s + "", e, t, i) : G;
                            u === G && (u = o), sn(e, s, u)
                        }
                    })
                }
            }

            function ar(e, t, n, r, i, o, a) {
                var s = e[n], u = t[n], l = a.get(u);
                if (l)return void sn(e, n, l);
                var c = o ? o(s, u, n + "", e, t, a) : G, f = c === G;
                f && (c = u, Sc(u) || ns(u) ? Sc(s) ? c = s : Da(s) ? c = Ur(s) : (f = !1, c = En(u, !o)) : Xa(u) || Ta(u) ? Ta(s) ? c = ps(s) : !qa(s) || r && Ra(s) ? (f = !1, c = En(u, !o)) : c = s : f = !1), a.set(u, c), f && i(c, u, r, o, a), a["delete"](u), sn(e, n, c)
            }

            function sr(e, t, n) {
                var r = -1;
                t = f(t.length ? t : Array(1), pi());
                var i = nr(e, function (e, n, i) {
                    var o = f(t, function (t) {
                        return t(e)
                    });
                    return {criteria: o, index: ++r, value: e}
                });
                return x(i, function (e, t) {
                    return M(e, t, n)
                })
            }

            function ur(e, t) {
                return e = Object(e), d(t, function (t, n) {
                    return n in e && (t[n] = e[n]), t
                }, {})
            }

            function lr(e, t) {
                var n = {};
                return Un(e, function (e, r) {
                    t(e, r) && (n[r] = e)
                }), n
            }

            function cr(e) {
                return function (t) {
                    return null == t ? G : t[e]
                }
            }

            function fr(e) {
                return function (t) {
                    return Hn(t, e)
                }
            }

            function pr(e, t, n, r) {
                var i = r ? b : y, o = -1, a = t.length, s = e;
                for (n && (s = f(e, S(n))); ++o < a;)for (var u = 0, l = t[o], c = n ? n(l) : l; (u = i(s, c, u, r)) > -1;)s !== e && pl.call(s, u, 1), pl.call(e, u, 1);
                return e
            }

            function dr(e, t) {
                for (var n = e ? t.length : 0, r = n - 1; n--;) {
                    var i = t[n];
                    if (r == n || i != o) {
                        var o = i;
                        if (U(i))pl.call(e, i, 1); else if (ki(i, e))delete e[i]; else {
                            var a = Cn(i), s = Oi(e, a);
                            null != s && delete s[Qi(a)]
                        }
                    }
                }
                return e
            }

            function hr(e, t) {
                return e + hl(wl() * (t - e + 1))
            }

            function gr(e, t, n, r) {
                for (var i = -1, o = $l(dl((t - e) / (n || 1)), 0), a = Array(o); o--;)a[r ? o : ++i] = e, e += n;
                return a
            }

            function vr(e, t, n, r) {
                t = ki(t, e) ? [t + ""] : Cn(t);
                for (var i = -1, o = t.length, a = o - 1, s = e; null != s && ++i < o;) {
                    var u = t[i];
                    if (qa(s)) {
                        var l = n;
                        if (i != a) {
                            var c = s[u];
                            l = r ? r(c, u, s) : G, l === G && (l = null == c ? U(t[i + 1]) ? [] : {} : c)
                        }
                        un(s, u, l)
                    }
                    s = s[u]
                }
                return e
            }

            function mr(e, t, n) {
                var r = -1, i = e.length;
                0 > t && (t = -t > i ? 0 : i + t), n = n > i ? i : n, 0 > n && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var o = Array(i); ++r < i;)o[r] = e[r + t];
                return o
            }

            function $r(e, t) {
                var n;
                return Pl(e, function (e, r, i) {
                    return n = t(e, r, i), !n
                }), !!n
            }

            function yr(e, t, n) {
                var r = 0, i = e ? e.length : r;
                if ("number" == typeof t && t === t && Te >= i) {
                    for (; i > r;) {
                        var o = r + i >>> 1, a = e[o];
                        (n ? t >= a : t > a) && null !== a ? r = o + 1 : i = o
                    }
                    return i
                }
                return br(e, t, $u, n)
            }

            function br(e, t, n, r) {
                t = n(t);
                for (var i = 0, o = e ? e.length : 0, a = t !== t, s = null === t, u = t === G; o > i;) {
                    var l = hl((i + o) / 2), c = n(e[l]), f = c !== G, p = c === c;
                    if (a)var d = p || r; else d = s ? p && f && (r || null != c) : u ? p && (r || f) : null == c ? !1 : r ? t >= c : t > c;
                    d ? i = l + 1 : o = l
                }
                return yl(o, ke)
            }

            function wr(e) {
                return xr(e)
            }

            function xr(e, t) {
                for (var n = 0, r = e.length, i = e[0], o = t ? t(i) : i, a = o, s = 1, u = [i]; ++n < r;)i = e[n], o = t ? t(i) : i, xa(o, a) || (a = o, u[s++] = i);
                return u
            }

            function Cr(e, t, n) {
                var r = -1, i = l, o = e.length, a = !0, s = [], u = s;
                if (n)a = !1, i = c; else if (o >= X) {
                    var f = t ? null : Ll(e);
                    if (f)return H(f);
                    a = !1, i = zt, u = new Wt
                } else u = t ? [] : s;
                e:for (; ++r < o;) {
                    var p = e[r], d = t ? t(p) : p;
                    if (a && d === d) {
                        for (var h = u.length; h--;)if (u[h] === d)continue e;
                        t && u.push(d), s.push(p)
                    } else i(u, d, n) || (u !== s && u.push(d), s.push(p))
                }
                return s
            }

            function kr(e, t) {
                t = ki(t, e) ? [t + ""] : Cn(t), e = Oi(e, t);
                var n = Qi(t);
                return null != e && Ts(e, n) ? delete e[n] : !0
            }

            function Tr(e, t, n, r) {
                return vr(e, t, n(Hn(e, t)), r)
            }

            function Sr(e, t, n, r) {
                for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e););
                return n ? mr(e, r ? 0 : o, r ? o + 1 : i) : mr(e, r ? o + 1 : 0, r ? i : o)
            }

            function Er(e, t) {
                var n = e;
                return n instanceof _t && (n = n.value()), d(t, function (e, t) {
                    return t.func.apply(t.thisArg, p([e], t.args))
                }, n)
            }

            function Dr(e, t, n) {
                for (var r = -1, i = e.length; ++r < i;)var o = o ? p(Mn(o, e[r], t, n), Mn(e[r], o, t, n)) : e[r];
                return o && o.length ? Cr(o, t, n) : []
            }

            function Ar(e, t, n) {
                for (var r = -1, i = e.length, o = t.length, a = {}; ++r < i;)n(a, e[r], o > r ? t[r] : G);
                return a
            }

            function _r(e, t) {
                if (t)return e.slice();
                var n = new e.constructor(e.length);
                return e.copy(n), n
            }

            function Or(e) {
                var t = new e.constructor(e.byteLength);
                return new rl(t).set(new rl(e)), t
            }

            function Mr(t) {
                return d(L(t), e, new t.constructor)
            }

            function Nr(e) {
                var t = new e.constructor(e.source, $t.exec(e));
                return t.lastIndex = e.lastIndex, t
            }

            function jr(e) {
                return d(H(e), t, new e.constructor)
            }

            function Ir(e) {
                return jl ? Object(jl.call(e)) : {}
            }

            function Pr(e, t) {
                var n = t ? Or(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length)
            }

            function Rr(e, t, n, r) {
                for (var i = -1, o = e.length, a = n.length, s = -1, u = t.length, l = $l(o - a, 0), c = Array(u + l), f = !r; ++s < u;)c[s] = t[s];
                for (; ++i < a;)(f || o > i) && (c[n[i]] = e[i]);
                for (; l--;)c[s++] = e[i++];
                return c
            }

            function Fr(e, t, n, r) {
                for (var i = -1, o = e.length, a = -1, s = n.length, u = -1, l = t.length, c = $l(o - s, 0), f = Array(c + l), p = !r; ++i < c;)f[i] = e[i];
                for (var d = i; ++u < l;)f[d + u] = t[u];
                for (; ++a < s;)(p || o > i) && (f[d + n[a]] = e[i++]);
                return f
            }

            function Ur(e, t) {
                var n = -1, r = e.length;
                for (t || (t = Array(r)); ++n < r;)t[n] = e[n];
                return t
            }

            function qr(e, t, n) {
                return Lr(e, t, n)
            }

            function Lr(e, t, n, r) {
                n || (n = {});
                for (var i = -1, o = t.length; ++i < o;) {
                    var a = t[i], s = r ? r(n[a], e[a], a, n, e) : e[a];
                    un(n, a, s)
                }
                return n
            }

            function Vr(e, t) {
                return qr(e, Bl(e), t)
            }

            function Hr(e, t) {
                return function (n, i) {
                    var o = Sc(n) ? r : cn, a = t ? t() : {};
                    return o(n, e, pi(i), a)
                }
            }

            function Br(e) {
                return pa(function (t, n) {
                    var r = -1, i = n.length, o = i > 1 ? n[i - 1] : G, a = i > 2 ? n[2] : G;
                    for (o = "function" == typeof o ? (i--, o) : G, a && Ci(n[0], n[1], a) && (o = 3 > i ? G : o, i = 1), t = Object(t); ++r < i;) {
                        var s = n[r];
                        s && e(t, s, r, o)
                    }
                    return t
                })
            }

            function Wr(e, t) {
                return function (n, r) {
                    if (null == n)return n;
                    if (!Ea(n))return e(n, r);
                    for (var i = n.length, o = t ? i : -1, a = Object(n); (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                    return n
                }
            }

            function zr(e) {
                return function (t, n, r) {
                    for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                        var u = a[e ? s : ++i];
                        if (n(o[u], u, o) === !1)break
                    }
                    return t
                }
            }

            function Yr(e, t, n) {
                function r() {
                    var t = this && this !== Nn && this instanceof r ? o : e;
                    return t.apply(i ? n : this, arguments)
                }

                var i = t & ee, o = Xr(e);
                return r
            }

            function Gr(e) {
                return function (t) {
                    t = hs(t);
                    var n = fn.test(t) ? W(t) : G, r = n ? n[0] : t.charAt(0), i = n ? n.slice(1).join("") : t.slice(1);
                    return r[e]() + i
                }
            }

            function Kr(e) {
                return function (t) {
                    return d(hu(Gs(t)), e, "")
                }
            }

            function Xr(e) {
                return function () {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var n = _n(e.prototype), r = e.apply(n, t);
                    return qa(r) ? r : n
                }
            }

            function Jr(e, t, r) {
                function i() {
                    for (var a = arguments.length, s = Array(a), u = a, l = gi(i); u--;)s[u] = arguments[u];
                    var c = 3 > a && s[0] !== l && s[a - 1] !== l ? [] : V(s, l);
                    if (a -= c.length, r > a)return oi(e, t, Zr, i.placeholder, G, s, c, G, G, r - a);
                    var f = this && this !== Nn && this instanceof i ? o : e;
                    return n(f, this, s)
                }

                var o = Xr(e);
                return i
            }

            function Qr(e) {
                return pa(function (t) {
                    t = Fn(t, 1);
                    var n = t.length, r = n, i = At.prototype.thru;
                    for (e && t.reverse(); r--;) {
                        var o = t[r];
                        if ("function" != typeof o)throw new Bu(J);
                        if (i && !a && "wrapper" == fi(o))var a = new At([], !0)
                    }
                    for (r = a ? r : n; ++r < n;) {
                        o = t[r];
                        var s = fi(o), u = "wrapper" == s ? Vl(o) : G;
                        a = u && Si(u[0]) && u[1] == (se | re | oe | ue) && !u[4].length && 1 == u[9] ? a[fi(u[0])].apply(a, u[3]) : 1 == o.length && Si(o) ? a[s]() : a.thru(o)
                    }
                    return function () {
                        var e = arguments, r = e[0];
                        if (a && 1 == e.length && Sc(r) && r.length >= X)return a.plant(r).value();
                        for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n;)o = t[i].call(this, o);
                        return o
                    }
                })
            }

            function Zr(e, t, n, r, i, o, a, s, u, l) {
                function c() {
                    for (var m = arguments.length, $ = m, y = Array(m); $--;)y[$] = arguments[$];
                    if (h)var b = gi(c), w = N(y, b);
                    if (r && (y = Rr(y, r, i, h)), o && (y = Fr(y, o, a, h)), m -= w, h && l > m) {
                        var x = V(y, b);
                        return oi(e, t, Zr, c.placeholder, n, y, x, s, u, l - m)
                    }
                    var C = p ? n : this, k = d ? C[e] : e;
                    return m = y.length, s ? y = Mi(y, s) : g && m > 1 && y.reverse(), f && m > u && (y.length = u), this && this !== Nn && this instanceof c && (k = v || Xr(k)), k.apply(C, y)
                }

                var f = t & se, p = t & ee, d = t & te, h = t & (re | ie), g = t & le, v = d ? G : Xr(e);
                return c
            }

            function ei(e, t) {
                return function (n, r) {
                    return Gn(n, e, t(r), {})
                }
            }

            function ti(e) {
                return pa(function (t) {
                    return t = f(Fn(t, 1), pi()), pa(function (r) {
                        var i = this;
                        return e(t, function (e) {
                            return n(e, i, r)
                        })
                    })
                })
            }

            function ni(e, t, n) {
                t = ls(t);
                var r = B(e);
                if (!t || r >= t)return "";
                var i = t - r;
                n = n === G ? " " : n + "";
                var o = nu(n, dl(i / B(n)));
                return fn.test(n) ? W(o).slice(0, i).join("") : o.slice(0, i)
            }

            function ri(e, t, r, i) {
                function o() {
                    for (var t = -1, u = arguments.length, l = -1, c = i.length, f = Array(c + u), p = this && this !== Nn && this instanceof o ? s : e; ++l < c;)f[l] = i[l];
                    for (; u--;)f[l++] = arguments[++t];
                    return n(p, a ? r : this, f)
                }

                var a = t & ee, s = Xr(e);
                return o
            }

            function ii(e) {
                return function (t, n, r) {
                    return r && "number" != typeof r && Ci(t, n, r) && (n = r = G), t = fs(t), t = t === t ? t : 0, n === G ? (n = t, t = 0) : n = fs(n) || 0, r = r === G ? n > t ? 1 : -1 : fs(r) || 0, gr(t, n, r, e)
                }
            }

            function oi(e, t, n, r, i, o, a, s, u, l) {
                var c = t & re, f = s ? Ur(s) : G, p = c ? a : G, d = c ? G : a, h = c ? o : G, g = c ? G : o;
                t |= c ? oe : ae, t &= ~(c ? ae : oe), t & ne || (t &= ~(ee | te));
                var v = [e, t, i, h, p, g, d, f, u, l], m = n.apply(G, v);
                return Si(e) && Wl(m, v), m.placeholder = r, m
            }

            function ai(e) {
                var t = Vu[e];
                return function (e, n) {
                    if (e = fs(e), n = ls(n)) {
                        var r = (hs(e) + "e").split("e"), i = t(r[0] + "e" + (+r[1] + n));
                        return r = (hs(i) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                    }
                    return t(e)
                }
            }

            function si(e, t, n, r, i, o, a, s) {
                var u = t & te;
                if (!u && "function" != typeof e)throw new Bu(J);
                var l = r ? r.length : 0;
                if (l || (t &= ~(oe | ae), r = i = G), a = a === G ? a : $l(ls(a), 0), s = s === G ? s : ls(s), l -= i ? i.length : 0, t & ae) {
                    var c = r, f = i;
                    r = i = G
                }
                var p = u ? G : Vl(e), d = [e, t, n, r, i, c, f, o, a, s];
                if (p && Ai(d, p), e = d[0], t = d[1], n = d[2], r = d[3], i = d[4], s = d[9] = null == d[9] ? u ? 0 : e.length : $l(d[9] - l, 0), !s && t & (re | ie) && (t &= ~(re | ie)), t && t != ee)h = t == re || t == ie ? Jr(e, t, s) : t != oe && t != (ee | oe) || i.length ? Zr.apply(G, d) : ri(e, t, n, r); else var h = Yr(e, t, n);
                var g = p ? ql : Wl;
                return g(h, d)
            }

            function ui(e, t, n, r, i, o) {
                var a = -1, s = i & fe, u = i & ce, l = e.length, c = t.length;
                if (l != c && !(s && c > l))return !1;
                var f = o.get(e);
                if (f)return f == t;
                var p = !0;
                for (o.set(e, t); ++a < l;) {
                    var d = e[a], h = t[a];
                    if (r)var v = s ? r(h, d, a, t, e, o) : r(d, h, a, e, t, o);
                    if (v !== G) {
                        if (v)continue;
                        p = !1;
                        break
                    }
                    if (u) {
                        if (!g(t, function (e) {
                                return d === e || n(d, e, r, i, o)
                            })) {
                            p = !1;
                            break
                        }
                    } else if (d !== h && !n(d, h, r, i, o)) {
                        p = !1;
                        break
                    }
                }
                return o["delete"](e), p
            }

            function li(e, t, n, r, i, o, a) {
                switch (n) {
                    case Ve:
                        return !(e.byteLength != t.byteLength || !r(new rl(e), new rl(t)));
                    case De:
                    case Ae:
                        return +e == +t;
                    case _e:
                        return e.name == t.name && e.message == t.message;
                    case je:
                        return e != +e ? t != +t : e == +t;
                    case Pe:
                    case Fe:
                        return e == t + "";
                    case Ne:
                        var s = L;
                    case Re:
                        var u = o & fe;
                        if (s || (s = H), e.size != t.size && !u)return !1;
                        var l = a.get(e);
                        return l ? l == t : ui(s(e), s(t), r, i, o | ce, a.set(e, t));
                    case Ue:
                        if (jl)return jl.call(e) == jl.call(t)
                }
                return !1
            }

            function ci(e, t, n, r, i, o) {
                var a = i & fe, s = Es(e), u = s.length, l = Es(t), c = l.length;
                if (u != c && !a)return !1;
                for (var f = u; f--;) {
                    var p = s[f];
                    if (!(a ? p in t : Bn(t, p)))return !1
                }
                var d = o.get(e);
                if (d)return d == t;
                var h = !0;
                o.set(e, t);
                for (var g = a; ++f < u;) {
                    p = s[f];
                    var v = e[p], m = t[p];
                    if (r)var $ = a ? r(m, v, p, t, e, o) : r(v, m, p, e, t, o);
                    if (!($ === G ? v === m || n(v, m, r, i, o) : $)) {
                        h = !1;
                        break
                    }
                    g || (g = "constructor" == p)
                }
                if (h && !g) {
                    var y = e.constructor, b = t.constructor;
                    y != b && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b) && (h = !1)
                }
                return o["delete"](e), h
            }

            function fi(e) {
                for (var t = e.name + "", n = Al[t], r = Gu.call(Al, t) ? n.length : 0; r--;) {
                    var i = n[r], o = i.func;
                    if (null == o || o == e)return i.name
                }
                return t
            }

            function pi() {
                var e = kt.iteratee || yu;
                return e = e === yu ? Zn : e, arguments.length ? e(arguments[0], arguments[1]) : e
            }

            function di(e) {
                for (var t = Ps(e), n = t.length; n--;)t[n][2] = Di(t[n][1]);
                return t
            }

            function hi(e, t) {
                var n = e[t];
                return za(n) ? n : G
            }

            function gi(e) {
                var t = Gu.call(kt, "placeholder") ? kt : e;
                return t.placeholder
            }

            function vi(e) {
                return Ju.call(e)
            }

            function mi(e, t, n) {
                for (var r = -1, i = n.length; ++r < i;) {
                    var o = n[r], a = o.size;
                    switch (o.type) {
                        case"drop":
                            e += a;
                            break;
                        case"dropRight":
                            t -= a;
                            break;
                        case"take":
                            t = yl(t, e + a);
                            break;
                        case"takeRight":
                            e = $l(e, t - a)
                    }
                }
                return {start: e, end: t}
            }

            function $i(e, t, n) {
                if (null == e)return !1;
                var r = n(e, t);
                r || ki(t) || (t = Cn(t), e = Oi(e, t), null != e && (t = Qi(t), r = n(e, t)));
                var i = e ? e.length : G;
                return r || !!i && Ua(i) && U(t, i) && (Sc(e) || es(e) || Ta(e))
            }

            function yi(e) {
                var t = e.length, n = e.constructor(t);
                return t && "string" == typeof e[0] && Gu.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }

            function bi(e) {
                return "function" != typeof e.constructor || Ei(e) ? {} : _n(al(e))
            }

            function wi(e, t, n) {
                var r = e.constructor;
                switch (t) {
                    case Ve:
                        return Or(e);
                    case De:
                    case Ae:
                        return new r(+e);
                    case He:
                    case Be:
                    case We:
                    case ze:
                    case Ye:
                    case Ge:
                    case Ke:
                    case Xe:
                    case Je:
                        return Pr(e, n);
                    case Ne:
                        return Mr(e);
                    case je:
                    case Fe:
                        return new r(e);
                    case Pe:
                        return Nr(e);
                    case Re:
                        return jr(e);
                    case Ue:
                        return Ir(e)
                }
            }

            function xi(e) {
                var t = e ? e.length : G;
                return Ua(t) && (Sc(e) || es(e) || Ta(e)) ? k(t, String) : null
            }

            function Ci(e, t, n) {
                if (!qa(n))return !1;
                var r = typeof t;
                return ("number" == r ? Ea(n) && U(t, n.length) : "string" == r && t in n) ? xa(n[t], e) : !1
            }

            function ki(e, t) {
                return "number" == typeof e ? !0 : !Sc(e) && (lt.test(e) || !ut.test(e) || null != t && e in Object(t))
            }

            function Ti(e) {
                var t = typeof e;
                return "number" == t || "boolean" == t || "string" == t && "__proto__" != e || null == e
            }

            function Si(e) {
                var t = fi(e), n = kt[t];
                if ("function" != typeof n || !(t in _t.prototype))return !1;
                if (e === n)return !0;
                var r = Vl(n);
                return !!r && e === r[0]
            }

            function Ei(e) {
                var t = e && e.constructor, n = "function" == typeof t && t.prototype || zu;
                return e === n
            }

            function Di(e) {
                return e === e && !qa(e)
            }

            function Ai(e, t) {
                var n = e[1], r = t[1], i = n | r, o = (ee | te | se) > i, a = r == se && n == re || r == se && n == ue && e[7].length <= t[8] || r == (se | ue) && t[7].length <= t[8] && n == re;
                if (!o && !a)return e;
                r & ee && (e[2] = t[2], i |= n & ee ? 0 : ne);
                var s = t[3];
                if (s) {
                    var u = e[3];
                    e[3] = u ? Rr(u, s, t[4]) : Ur(s), e[4] = u ? V(e[3], Z) : Ur(t[4])
                }
                return s = t[5], s && (u = e[5], e[5] = u ? Fr(u, s, t[6]) : Ur(s), e[6] = u ? V(e[5], Z) : Ur(t[6])), s = t[7], s && (e[7] = Ur(s)), r & se && (e[8] = null == e[8] ? t[8] : yl(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i, e
            }

            function _i(e, t, n, r, i, o) {
                return qa(e) && qa(t) && or(e, t, G, _i, o.set(t, e)), e
            }

            function Oi(e, t) {
                return 1 == t.length ? e : ks(e, mr(t, 0, -1))
            }

            function Mi(e, t) {
                for (var n = e.length, r = yl(t.length, n), i = Ur(e); r--;) {
                    var o = t[r];
                    e[r] = U(o, n) ? i[o] : G
                }
                return e
            }

            function Ni(e) {
                var t = [];
                return hs(e).replace(ct, function (e, n, r, i) {
                    t.push(r ? i.replace(vt, "$1") : n || e)
                }), t
            }

            function ji(e) {
                if (e instanceof _t)return e.clone();
                var t = new At(e.__wrapped__, e.__chain__);
                return t.__actions__ = Ur(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }

            function Ii(e, t) {
                t = $l(ls(t), 0);
                var n = e ? e.length : 0;
                if (!n || 1 > t)return [];
                for (var r = 0, i = 0, o = Array(dl(n / t)); n > r;)o[i++] = mr(e, r, r += t);
                return o
            }

            function Pi(e) {
                for (var t = -1, n = e ? e.length : 0, r = 0, i = []; ++t < n;) {
                    var o = e[t];
                    o && (i[r++] = o)
                }
                return i
            }

            function Ri(e, t, n) {
                var r = e ? e.length : 0;
                return r ? (t = n || t === G ? 1 : ls(t), mr(e, 0 > t ? 0 : t, r)) : []
            }

            function Fi(e, t, n) {
                var r = e ? e.length : 0;
                return r ? (t = n || t === G ? 1 : ls(t), t = r - t, mr(e, 0, 0 > t ? 0 : t)) : []
            }

            function Ui(e, t) {
                return e && e.length ? Sr(e, pi(t, 3), !0, !0) : []
            }

            function qi(e, t) {
                return e && e.length ? Sr(e, pi(t, 3), !0) : []
            }

            function Li(e, t, n, r) {
                var i = e ? e.length : 0;
                return i ? (n && "number" != typeof n && Ci(e, t, n) && (n = 0, r = i), Pn(e, t, n, r)) : []
            }

            function Vi(e, t) {
                return e && e.length ? $(e, pi(t, 3)) : -1
            }

            function Hi(e, t) {
                return e && e.length ? $(e, pi(t, 3), !0) : -1
            }

            function Bi(e) {
                var t = e ? e.length : 0;
                return t ? Fn(e, 1) : []
            }

            function Wi(e) {
                var t = e ? e.length : 0;
                return t ? Fn(e, ye) : []
            }

            function zi(e, t) {
                var n = e ? e.length : 0;
                return n ? (t = t === G ? 1 : ls(t), Fn(e, t)) : []
            }

            function Yi(e) {
                for (var t = -1, n = e ? e.length : 0, r = {}; ++t < n;) {
                    var i = e[t];
                    r[i[0]] = i[1]
                }
                return r
            }

            function Gi(e) {
                return e ? e[0] : G
            }

            function Ki(e, t, n) {
                var r = e ? e.length : 0;
                return r ? (n = ls(n), 0 > n && (n = $l(r + n, 0)), y(e, t, n)) : -1
            }

            function Xi(e) {
                return Fi(e, 1)
            }

            function Ji(e, t) {
                return e ? vl.call(e, t) : ""
            }

            function Qi(e) {
                var t = e ? e.length : 0;
                return t ? e[t - 1] : G
            }

            function Zi(e, t, n) {
                var r = e ? e.length : 0;
                if (!r)return -1;
                var i = r;
                if (n !== G && (i = ls(n), i = (0 > i ? $l(r + i, 0) : yl(i, r - 1)) + 1), t !== t)return R(e, i, !0);
                for (; i--;)if (e[i] === t)return i;
                return -1
            }

            function eo(e, t) {
                return e && e.length && t && t.length ? pr(e, t) : e
            }

            function to(e, t, n) {
                return e && e.length && t && t.length ? pr(e, t, pi(n)) : e
            }

            function no(e, t, n) {
                return e && e.length && t && t.length ? pr(e, t, G, n) : e
            }

            function ro(e, t) {
                var n = [];
                if (!e || !e.length)return n;
                var r = -1, i = [], o = e.length;
                for (t = pi(t, 3); ++r < o;) {
                    var a = e[r];
                    t(a, r, e) && (n.push(a), i.push(r))
                }
                return dr(e, i), n
            }

            function io(e) {
                return e ? xl.call(e) : e
            }

            function oo(e, t, n) {
                var r = e ? e.length : 0;
                return r ? (n && "number" != typeof n && Ci(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : ls(t), n = n === G ? r : ls(n)), mr(e, t, n)) : []
            }

            function ao(e, t) {
                return yr(e, t)
            }

            function so(e, t, n) {
                return br(e, t, pi(n))
            }

            function uo(e, t) {
                var n = e ? e.length : 0;
                if (n) {
                    var r = yr(e, t);
                    if (n > r && xa(e[r], t))return r
                }
                return -1
            }

            function lo(e, t) {
                return yr(e, t, !0)
            }

            function co(e, t, n) {
                return br(e, t, pi(n), !0)
            }

            function fo(e, t) {
                var n = e ? e.length : 0;
                if (n) {
                    var r = yr(e, t, !0) - 1;
                    if (xa(e[r], t))return r
                }
                return -1
            }

            function po(e) {
                return e && e.length ? wr(e) : []
            }

            function ho(e, t) {
                return e && e.length ? xr(e, pi(t)) : []
            }

            function go(e) {
                return Ri(e, 1)
            }

            function vo(e, t, n) {
                return e && e.length ? (t = n || t === G ? 1 : ls(t), mr(e, 0, 0 > t ? 0 : t)) : []
            }

            function mo(e, t, n) {
                var r = e ? e.length : 0;
                return r ? (t = n || t === G ? 1 : ls(t), t = r - t, mr(e, 0 > t ? 0 : t, r)) : []
            }

            function $o(e, t) {
                return e && e.length ? Sr(e, pi(t, 3), !1, !0) : []
            }

            function yo(e, t) {
                return e && e.length ? Sr(e, pi(t, 3)) : []
            }

            function bo(e) {
                return e && e.length ? Cr(e) : []
            }

            function wo(e, t) {
                return e && e.length ? Cr(e, pi(t)) : []
            }

            function xo(e, t) {
                return e && e.length ? Cr(e, G, t) : []
            }

            function Co(e) {
                if (!e || !e.length)return [];
                var t = 0;
                return e = u(e, function (e) {
                    return Da(e) ? (t = $l(e.length, t), !0) : void 0
                }), k(t, function (t) {
                    return f(e, cr(t))
                })
            }

            function ko(e, t) {
                if (!e || !e.length)return [];
                var r = Co(e);
                return null == t ? r : f(r, function (e) {
                    return n(t, G, e)
                })
            }

            function To(e, t) {
                return Ar(e || [], t || [], un)
            }

            function So(e, t) {
                return Ar(e || [], t || [], vr)
            }

            function Eo(e) {
                var t = kt(e);
                return t.__chain__ = !0, t
            }

            function Do(e, t) {
                return t(e), e
            }

            function Ao(e, t) {
                return t(e)
            }

            function _o() {
                return Eo(this)
            }

            function Oo() {
                return new At(this.value(), this.__chain__)
            }

            function Mo(e) {
                return this.map(e).flatten()
            }

            function No() {
                this.__values__ === G && (this.__values__ = us(this.value()));
                var e = this.__index__ >= this.__values__.length, t = e ? G : this.__values__[this.__index__++];
                return {done: e, value: t}
            }

            function jo() {
                return this
            }

            function Io(e) {
                for (var t, n = this; n instanceof Dt;) {
                    var r = ji(n);
                    r.__index__ = 0, r.__values__ = G, t ? i.__wrapped__ = r : t = r;
                    var i = r;
                    n = n.__wrapped__
                }
                return i.__wrapped__ = e, t
            }

            function Po() {
                var e = this.__wrapped__;
                if (e instanceof _t) {
                    var t = e;
                    return this.__actions__.length && (t = new _t(this)), t = t.reverse(), t.__actions__.push({
                        func: Ao,
                        args: [io],
                        thisArg: G
                    }), new At(t, this.__chain__)
                }
                return this.thru(io)
            }

            function Ro() {
                return Er(this.__wrapped__, this.__actions__)
            }

            function Fo(e, t, n) {
                var r = Sc(e) ? s : In;
                return n && Ci(e, t, n) && (t = G), r(e, pi(t, 3))
            }

            function Uo(e, t) {
                var n = Sc(e) ? u : Rn;
                return n(e, pi(t, 3))
            }

            function qo(e, t) {
                if (t = pi(t, 3), Sc(e)) {
                    var n = $(e, t);
                    return n > -1 ? e[n] : G
                }
                return m(e, t, Pl)
            }

            function Lo(e, t) {
                if (t = pi(t, 3), Sc(e)) {
                    var n = $(e, t, !0);
                    return n > -1 ? e[n] : G
                }
                return m(e, t, Rl)
            }

            function Vo(e, t) {
                return Fn(zo(e, t), 1)
            }

            function Ho(e, t) {
                return "function" == typeof t && Sc(e) ? o(e, t) : Pl(e, xn(t))
            }

            function Bo(e, t) {
                return "function" == typeof t && Sc(e) ? a(e, t) : Rl(e, xn(t))
            }

            function Wo(e, t, n, r) {
                e = Ea(e) ? e : Vs(e), n = n && !r ? ls(n) : 0;
                var i = e.length;
                return 0 > n && (n = $l(i + n, 0)), es(e) ? i >= n && e.indexOf(t, n) > -1 : !!i && y(e, t, n) > -1
            }

            function zo(e, t) {
                var n = Sc(e) ? f : nr;
                return n(e, pi(t, 3))
            }

            function Yo(e, t, n, r) {
                return null == e ? [] : (Sc(t) || (t = null == t ? [] : [t]), n = r ? G : n, Sc(n) || (n = null == n ? [] : [n]), sr(e, t, n))
            }

            function Go(e, t, n) {
                var r = Sc(e) ? d : w, i = arguments.length < 3;
                return r(e, pi(t, 4), n, i, Pl)
            }

            function Ko(e, t, n) {
                var r = Sc(e) ? h : w, i = arguments.length < 3;
                return r(e, pi(t, 4), n, i, Rl)
            }

            function Xo(e, t) {
                var n = Sc(e) ? u : Rn;
                return t = pi(t, 3), n(e, function (e, n, r) {
                    return !t(e, n, r)
                })
            }

            function Jo(e) {
                var t = Ea(e) ? e : Vs(e), n = t.length;
                return n > 0 ? t[hr(0, n - 1)] : G
            }

            function Qo(e, t) {
                var n = -1, r = us(e), i = r.length, o = i - 1;
                for (t = Sn(ls(t), 0, i); ++n < t;) {
                    var a = hr(n, o), s = r[a];
                    r[a] = r[n], r[n] = s
                }
                return r.length = t, r
            }

            function Zo(e) {
                return Qo(e, Ce)
            }

            function ea(e) {
                if (null == e)return 0;
                if (Ea(e)) {
                    var t = e.length;
                    return t && es(e) ? B(e) : t
                }
                return Es(e).length
            }

            function ta(e, t, n) {
                var r = Sc(e) ? g : $r;
                return n && Ci(e, t, n) && (t = G), r(e, pi(t, 3))
            }

            function na(e, t) {
                if ("function" != typeof t)throw new Bu(J);
                return e = ls(e), function () {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }

            function ra(e, t, n) {
                return t = n ? G : t, t = e && null == t ? e.length : t, si(e, se, G, G, G, G, t)
            }

            function ia(e, t) {
                var n;
                if ("function" != typeof t)throw new Bu(J);
                return e = ls(e), function () {
                    return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = G), n
                }
            }

            function oa(e, t, n) {
                t = n ? G : t;
                var r = si(e, re, G, G, G, G, G, t);
                return r.placeholder = oa.placeholder, r
            }

            function aa(e, t, n) {
                t = n ? G : t;
                var r = si(e, ie, G, G, G, G, G, t);
                return r.placeholder = aa.placeholder, r
            }

            function sa(e, t, n) {
                function r() {
                    h && il(h), c && il(c), v = 0, l = c = d = h = g = G
                }

                function i(t, n) {
                    n && il(n), c = h = g = G, t && (v = mc(), f = e.apply(d, l), h || c || (l = d = G))
                }

                function o() {
                    var e = t - (mc() - p);
                    0 >= e || e > t ? i(g, c) : h = fl(o, e)
                }

                function a() {
                    return (h && g || c && y) && (f = e.apply(d, l)), r(), f
                }

                function s() {
                    i(y, h)
                }

                function u() {
                    if (l = arguments, p = mc(), d = this, g = y && (h || !m), $ === !1)var n = m && !h; else {
                        v || c || m || (v = p);
                        var r = $ - (p - v), i = (0 >= r || r > $) && (m || c);
                        i ? (c && (c = il(c)), v = p, f = e.apply(d, l)) : c || (c = fl(s, r))
                    }
                    return i && h ? h = il(h) : h || t === $ || (h = fl(o, t)), n && (i = !0, f = e.apply(d, l)), !i || h || c || (l = d = G), f
                }

                var l, c, f, p, d, h, g, v = 0, m = !1, $ = !1, y = !0;
                if ("function" != typeof e)throw new Bu(J);
                return t = fs(t) || 0, qa(n) && (m = !!n.leading, $ = "maxWait" in n && $l(fs(n.maxWait) || 0, t), y = "trailing" in n ? !!n.trailing : y), u.cancel = r, u.flush = a, u
            }

            function ua(e) {
                return si(e, le)
            }

            function la(e, t) {
                if ("function" != typeof e || t && "function" != typeof t)throw new Bu(J);
                var n = function () {
                    var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
                    if (o.has(i))return o.get(i);
                    var a = e.apply(this, r);
                    return n.cache = o.set(i, a), a
                };
                return n.cache = new la.Cache, n
            }

            function ca(e) {
                if ("function" != typeof e)throw new Bu(J);
                return function () {
                    return !e.apply(this, arguments)
                }
            }

            function fa(e) {
                return ia(2, e)
            }

            function pa(e, t) {
                if ("function" != typeof e)throw new Bu(J);
                return t = $l(t === G ? e.length - 1 : ls(t), 0), function () {
                    for (var r = arguments, i = -1, o = $l(r.length - t, 0), a = Array(o); ++i < o;)a[i] = r[t + i];
                    switch (t) {
                        case 0:
                            return e.call(this, a);
                        case 1:
                            return e.call(this, r[0], a);
                        case 2:
                            return e.call(this, r[0], r[1], a)
                    }
                    var s = Array(t + 1);
                    for (i = -1; ++i < t;)s[i] = r[i];
                    return s[t] = a, n(e, this, s)
                }
            }

            function da(e, t) {
                if ("function" != typeof e)throw new Bu(J);
                return t = t === G ? 0 : $l(ls(t), 0), pa(function (r) {
                    var i = r[t], o = r.slice(0, t);
                    return i && p(o, i), n(e, this, o)
                })
            }

            function ha(e, t, n) {
                var r = !0, i = !0;
                if ("function" != typeof e)throw new Bu(J);
                return qa(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), sa(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: i
                })
            }

            function ga(e) {
                return ra(e, 1)
            }

            function va(e, t) {
                return t = null == t ? $u : t, Cc(t, e)
            }

            function ma() {
                if (!arguments.length)return [];
                var e = arguments[0];
                return Sc(e) ? e : [e]
            }

            function $a(e) {
                return En(e, !1, !0)
            }

            function ya(e, t) {
                return En(e, !1, !0, t)
            }

            function ba(e) {
                return En(e, !0, !0)
            }

            function wa(e, t) {
                return En(e, !0, !0, t)
            }

            function xa(e, t) {
                return e === t || e !== e && t !== t
            }

            function Ca(e, t) {
                return e > t
            }

            function ka(e, t) {
                return e >= t
            }

            function Ta(e) {
                return Da(e) && Gu.call(e, "callee") && (!cl.call(e, "callee") || Ju.call(e) == Se)
            }

            function Sa(e) {
                return La(e) && Ju.call(e) == Ve
            }

            function Ea(e) {
                return null != e && Ua(Hl(e)) && !Ra(e)
            }

            function Da(e) {
                return La(e) && Ea(e)
            }

            function Aa(e) {
                return e === !0 || e === !1 || La(e) && Ju.call(e) == De
            }

            function _a(e) {
                return La(e) && Ju.call(e) == Ae
            }

            function Oa(e) {
                return !!e && 1 === e.nodeType && La(e) && !Xa(e)
            }

            function Ma(e) {
                if (Ea(e) && (Sc(e) || es(e) || Ra(e.splice) || Ta(e)))return !e.length;
                for (var t in e)if (Gu.call(e, t))return !1;
                return !0
            }

            function Na(e, t) {
                return Xn(e, t)
            }

            function ja(e, t, n) {
                n = "function" == typeof n ? n : G;
                var r = n ? n(e, t) : G;
                return r === G ? Xn(e, t, n) : !!r
            }

            function Ia(e) {
                return La(e) ? Ju.call(e) == _e || "string" == typeof e.message && "string" == typeof e.name : !1
            }

            function Pa(e) {
                return "number" == typeof e && gl(e)
            }

            function Ra(e) {
                var t = qa(e) ? Ju.call(e) : "";
                return t == Oe || t == Me
            }

            function Fa(e) {
                return "number" == typeof e && e == ls(e)
            }

            function Ua(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && be >= e
            }

            function qa(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function La(e) {
                return !!e && "object" == typeof e
            }

            function Va(e) {
                return La(e) && vi(e) == Ne
            }

            function Ha(e, t) {
                return e === t || Qn(e, t, di(t))
            }

            function Ba(e, t, n) {
                return n = "function" == typeof n ? n : G, Qn(e, t, di(t), n)
            }

            function Wa(e) {
                return Ka(e) && e != +e
            }

            function za(e) {
                return null == e ? !1 : Ra(e) ? Zu.test(Yu.call(e)) : La(e) && (F(e) ? Zu : xt).test(e)
            }

            function Ya(e) {
                return null === e
            }

            function Ga(e) {
                return null == e
            }

            function Ka(e) {
                return "number" == typeof e || La(e) && Ju.call(e) == je
            }

            function Xa(e) {
                if (!La(e) || Ju.call(e) != Ie || F(e))return !1;
                var t = al(e);
                if (null === t)return !0;
                var n = t.constructor;
                return "function" == typeof n && n instanceof n && Yu.call(n) == Xu
            }

            function Ja(e) {
                return qa(e) && Ju.call(e) == Pe
            }

            function Qa(e) {
                return Fa(e) && e >= -be && be >= e
            }

            function Za(e) {
                return La(e) && vi(e) == Re
            }

            function es(e) {
                return "string" == typeof e || !Sc(e) && La(e) && Ju.call(e) == Fe
            }

            function ts(e) {
                return "symbol" == typeof e || La(e) && Ju.call(e) == Ue
            }

            function ns(e) {
                return La(e) && Ua(e.length) && !!mn[Ju.call(e)]
            }

            function rs(e) {
                return e === G
            }

            function is(e) {
                return La(e) && vi(e) == qe
            }

            function os(e) {
                return La(e) && Ju.call(e) == Le
            }

            function as(e, t) {
                return t > e
            }

            function ss(e, t) {
                return t >= e
            }

            function us(e) {
                if (!e)return [];
                if (Ea(e))return es(e) ? W(e) : Ur(e);
                if (ul && e[ul])return q(e[ul]());
                var t = vi(e), n = t == Ne ? L : t == Re ? H : Vs;
                return n(e)
            }

            function ls(e) {
                if (!e)return 0 === e ? e : 0;
                if (e = fs(e), e === ye || e === -ye) {
                    var t = 0 > e ? -1 : 1;
                    return t * we
                }
                var n = e % 1;
                return e === e ? n ? e - n : e : 0
            }

            function cs(e) {
                return e ? Sn(ls(e), 0, Ce) : 0
            }

            function fs(e) {
                if (qa(e)) {
                    var t = Ra(e.valueOf) ? e.valueOf() : e;
                    e = qa(t) ? t + "" : t
                }
                if ("string" != typeof e)return 0 === e ? e : +e;
                e = e.replace(dt, "");
                var n = wt.test(e);
                return n || Ct.test(e) ? Tn(e.slice(2), n ? 2 : 8) : bt.test(e) ? xe : +e
            }

            function ps(e) {
                return qr(e, Ds(e))
            }

            function ds(e) {
                return Sn(ls(e), -be, be)
            }

            function hs(e) {
                if ("string" == typeof e)return e;
                if (null == e)return "";
                if (ts(e))return Il ? Il.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -ye ? "-0" : t
            }

            function gs(e, t) {
                var n = _n(e);
                return t ? yn(n, t) : n
            }

            function vs(e, t) {
                return m(e, pi(t, 3), qn, !0)
            }

            function ms(e, t) {
                return m(e, pi(t, 3), Ln, !0)
            }

            function $s(e, t) {
                return null == e ? e : Fl(e, xn(t), Ds)
            }

            function ys(e, t) {
                return null == e ? e : Ul(e, xn(t), Ds)
            }

            function bs(e, t) {
                return e && qn(e, xn(t))
            }

            function ws(e, t) {
                return e && Ln(e, xn(t))
            }

            function xs(e) {
                return null == e ? [] : Vn(e, Es(e))
            }

            function Cs(e) {
                return null == e ? [] : Vn(e, Ds(e))
            }

            function ks(e, t, n) {
                var r = null == e ? G : Hn(e, t);
                return r === G ? n : r
            }

            function Ts(e, t) {
                return $i(e, t, Bn)
            }

            function Ss(e, t) {
                return $i(e, t, Wn)
            }

            function Es(e) {
                var t = Ei(e);
                if (!t && !Ea(e))return er(e);
                var n = xi(e), r = !!n, i = n || [], o = i.length;
                for (var a in e)!Bn(e, a) || r && ("length" == a || U(a, o)) || t && "constructor" == a || i.push(a);
                return i
            }

            function Ds(e) {
                for (var t = -1, n = Ei(e), r = tr(e), i = r.length, o = xi(e), a = !!o, s = o || [], u = s.length; ++t < i;) {
                    var l = r[t];
                    a && ("length" == l || U(l, u)) || "constructor" == l && (n || !Gu.call(e, l)) || s.push(l)
                }
                return s
            }

            function As(e, t) {
                var n = {};
                return t = pi(t, 3), qn(e, function (e, r, i) {
                    n[t(e, r, i)] = e
                }), n
            }

            function _s(e, t) {
                var n = {};
                return t = pi(t, 3), qn(e, function (e, r, i) {
                    n[r] = t(e, r, i)
                }), n
            }

            function Os(e, t) {
                return t = pi(t), lr(e, function (e, n) {
                    return !t(e, n)
                })
            }

            function Ms(e, t) {
                return null == e ? {} : lr(e, pi(t))
            }

            function Ns(e, t, n) {
                if (ki(t, e))r = null == e ? G : e[t]; else {
                    t = Cn(t);
                    var r = ks(e, t);
                    e = Oi(e, t)
                }
                return r === G && (r = n), Ra(r) ? r.call(e) : r
            }

            function js(e, t, n) {
                return null == e ? e : vr(e, t, n)
            }

            function Is(e, t, n, r) {
                return r = "function" == typeof r ? r : G, null == e ? e : vr(e, t, n, r)
            }

            function Ps(e) {
                return T(e, Es(e))
            }

            function Rs(e) {
                return T(e, Ds(e))
            }

            function Fs(e, t, n) {
                var r = Sc(e) || ns(e);
                if (t = pi(t, 4), null == n)if (r || qa(e)) {
                    var i = e.constructor;
                    n = r ? Sc(e) ? new i : [] : Ra(i) ? _n(al(e)) : {}
                } else n = {};
                return (r ? o : qn)(e, function (e, r, i) {
                    return t(n, e, r, i)
                }), n
            }

            function Us(e, t) {
                return null == e ? !0 : kr(e, t)
            }

            function qs(e, t, n) {
                return null == e ? e : Tr(e, t, xn(n))
            }

            function Ls(e, t, n, r) {
                return r = "function" == typeof r ? r : G, null == e ? e : Tr(e, t, xn(n), r)
            }

            function Vs(e) {
                return e ? E(e, Es(e)) : []
            }

            function Hs(e) {
                return null == e ? [] : E(e, Ds(e))
            }

            function Bs(e, t, n) {
                return n === G && (n = t, t = G), n !== G && (n = fs(n), n = n === n ? n : 0), t !== G && (t = fs(t), t = t === t ? t : 0), Sn(fs(e), t, n)
            }

            function Ws(e, t, n) {
                return t = fs(t) || 0, n === G ? (n = t, t = 0) : n = fs(n) || 0, e = fs(e), zn(e, t, n)
            }

            function zs(e, t, n) {
                if (n && "boolean" != typeof n && Ci(e, t, n) && (t = n = G), n === G && ("boolean" == typeof t ? (n = t, t = G) : "boolean" == typeof e && (n = e, e = G)), e === G && t === G ? (e = 0, t = 1) : (e = fs(e) || 0, t === G ? (t = e, e = 0) : t = fs(t) || 0), e > t) {
                    var r = e;
                    e = t, t = r
                }
                if (n || e % 1 || t % 1) {
                    var i = wl();
                    return yl(e + i * (t - e + kn("1e-" + ((i + "").length - 1))), t)
                }
                return hr(e, t)
            }

            function Ys(e) {
                return zc(hs(e).toLowerCase())
            }

            function Gs(e) {
                return e = hs(e), e && e.replace(Tt, j).replace(ln, "")
            }

            function Ks(e, t, n) {
                e = hs(e), t = "string" == typeof t ? t : t + "";
                var r = e.length;
                return n = n === G ? r : Sn(ls(n), 0, r), n -= t.length, n >= 0 && e.indexOf(t, n) == n
            }

            function Xs(e) {
                return e = hs(e), e && it.test(e) ? e.replace(nt, I) : e
            }

            function Js(e) {
                return e = hs(e), e && pt.test(e) ? e.replace(ft, "\\$&") : e
            }

            function Qs(e, t, n) {
                e = hs(e), t = ls(t);
                var r = B(e);
                if (!t || r >= t)return e;
                var i = (t - r) / 2, o = hl(i), a = dl(i);
                return ni("", o, n) + e + ni("", a, n)
            }

            function Zs(e, t, n) {
                return e = hs(e), e + ni(e, t, n)
            }

            function eu(e, t, n) {
                return e = hs(e), ni(e, t, n) + e
            }

            function tu(e, t, n) {
                return n || null == t ? t = 0 : t && (t = +t), e = hs(e).replace(dt, ""), bl(e, t || (yt.test(e) ? 16 : 10))
            }

            function nu(e, t) {
                e = hs(e), t = ls(t);
                var n = "";
                if (!e || 1 > t || t > be)return n;
                do t % 2 && (n += e), t = hl(t / 2), e += e; while (t);
                return n
            }

            function ru() {
                var e = arguments, t = hs(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2])
            }

            function iu(e, t, n) {
                return hs(e).split(t, n)
            }

            function ou(e, t, n) {
                return e = hs(e), n = Sn(ls(n), 0, e.length), e.lastIndexOf(t, n) == n
            }

            function au(e, t, n) {
                var r = kt.templateSettings;
                n && Ci(e, t, n) && (t = G), e = hs(e), t = _c({}, t, r, an);
                var i, o, a = _c({}, t.imports, r.imports, an), s = Es(a), u = E(a, s), l = 0, c = t.interpolate || St, f = "__p += '", p = Hu((t.escape || St).source + "|" + c.source + "|" + (c === st ? mt : St).source + "|" + (t.evaluate || St).source + "|$", "g"), d = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++vn + "]") + "\n";
                e.replace(p, function (t, n, r, a, s, u) {
                    return r || (r = a), f += e.slice(l, u).replace(Et, P), n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), s && (o = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + t.length, t
                }), f += "';\n";
                var h = t.variable;
                h || (f = "with (obj) {\n" + f + "\n}\n"), f = (o ? f.replace(Qe, "") : f).replace(Ze, "$1").replace(et, "$1;"), f = "function(" + (h || "obj") + ") {\n" + (h ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                var g = Xc(function () {
                    return Function(s, d + "return " + f).apply(G, u)
                });
                if (g.source = f, Ia(g))throw g;
                return g
            }

            function su(e) {
                return hs(e).toLowerCase()
            }

            function uu(e) {
                return hs(e).toUpperCase()
            }

            function lu(e, t, n) {
                if (e = hs(e), !e)return e;
                if (n || t === G)return e.replace(dt, "");
                if (t += "", !t)return e;
                var r = W(e), i = W(t);
                return r.slice(D(r, i), A(r, i) + 1).join("")
            }

            function cu(e, t, n) {
                if (e = hs(e), !e)return e;
                if (n || t === G)return e.replace(gt, "");
                if (t += "", !t)return e;
                var r = W(e);
                return r.slice(0, A(r, W(t)) + 1).join("")
            }

            function fu(e, t, n) {
                if (e = hs(e), !e)return e;
                if (n || t === G)return e.replace(ht, "");
                if (t += "", !t)return e;
                var r = W(e);
                return r.slice(D(r, W(t))).join("")
            }

            function pu(e, t) {
                var n = pe, r = de;
                if (qa(t)) {
                    var i = "separator" in t ? t.separator : i;
                    n = "length" in t ? ls(t.length) : n, r = "omission" in t ? hs(t.omission) : r
                }
                e = hs(e);
                var o = e.length;
                if (fn.test(e)) {
                    var a = W(e);
                    o = a.length
                }
                if (n >= o)return e;
                var s = n - B(r);
                if (1 > s)return r;
                var u = a ? a.slice(0, s).join("") : e.slice(0, s);
                if (i === G)return u + r;
                if (a && (s += u.length - s), Ja(i)) {
                    if (e.slice(s).search(i)) {
                        var l, c = u;
                        for (i.global || (i = Hu(i.source, hs($t.exec(i)) + "g")),
                                 i.lastIndex = 0; l = i.exec(c);)var f = l.index;
                        u = u.slice(0, f === G ? s : f)
                    }
                } else if (e.indexOf(i, s) != s) {
                    var p = u.lastIndexOf(i);
                    p > -1 && (u = u.slice(0, p))
                }
                return u + r
            }

            function du(e) {
                return e = hs(e), e && rt.test(e) ? e.replace(tt, z) : e
            }

            function hu(e, t, n) {
                return e = hs(e), t = n ? G : t, t === G && (t = hn.test(e) ? dn : pn), e.match(t) || []
            }

            function gu(e) {
                var t = e ? e.length : 0, r = pi();
                return e = t ? f(e, function (e) {
                    if ("function" != typeof e[1])throw new Bu(J);
                    return [r(e[0]), e[1]]
                }) : [], pa(function (r) {
                    for (var i = -1; ++i < t;) {
                        var o = e[i];
                        if (n(o[0], this, r))return n(o[1], this, r)
                    }
                })
            }

            function vu(e) {
                return An(En(e, !0))
            }

            function mu(e) {
                return function () {
                    return e
                }
            }

            function $u(e) {
                return e
            }

            function yu(e) {
                return Zn("function" == typeof e ? e : En(e, !0))
            }

            function bu(e) {
                return rr(En(e, !0))
            }

            function wu(e, t) {
                return ir(e, En(t, !0))
            }

            function xu(e, t, n) {
                var r = Es(t), i = Vn(t, r);
                null != n || qa(t) && (i.length || !r.length) || (n = t, t = e, e = this, i = Vn(t, Es(t)));
                var a = qa(n) && "chain" in n ? n.chain : !0, s = Ra(e);
                return o(i, function (n) {
                    var r = t[n];
                    e[n] = r, s && (e.prototype[n] = function () {
                        var t = this.__chain__;
                        if (a || t) {
                            var n = e(this.__wrapped__), i = n.__actions__ = Ur(this.__actions__);
                            return i.push({func: r, args: arguments, thisArg: e}), n.__chain__ = t, n
                        }
                        return r.apply(e, p([this.value()], arguments))
                    })
                }), e
            }

            function Cu() {
                return Nn._ === this && (Nn._ = Qu), this
            }

            function ku() {
            }

            function Tu(e) {
                return e = ls(e), function () {
                    return arguments[e]
                }
            }

            function Su(e) {
                return ki(e) ? cr(e) : fr(e)
            }

            function Eu(e) {
                return function (t) {
                    return null == e ? G : Hn(e, t)
                }
            }

            function Du(e, t) {
                if (e = ls(e), 1 > e || e > be)return [];
                var n = Ce, r = yl(e, Ce);
                t = xn(t), e -= Ce;
                for (var i = k(r, t); ++n < e;)t(n);
                return i
            }

            function Au(e) {
                return Sc(e) ? f(e, String) : Ni(e)
            }

            function _u(e) {
                var t = ++Ku;
                return hs(e) + t
            }

            function Ou(e, t) {
                var n;
                return e === G && t === G ? 0 : (e !== G && (n = e), t !== G && (n = n === G ? t : n + t), n)
            }

            function Mu(e) {
                return e && e.length ? v(e, $u, Ca) : G
            }

            function Nu(e, t) {
                return e && e.length ? v(e, pi(t), Ca) : G
            }

            function ju(e) {
                return Fu(e) / (e ? e.length : 0)
            }

            function Iu(e) {
                return e && e.length ? v(e, $u, as) : G
            }

            function Pu(e, t) {
                return e && e.length ? v(e, pi(t), as) : G
            }

            function Ru(e, t) {
                var n;
                return e === G && t === G ? 0 : (e !== G && (n = e), t !== G && (n = n === G ? t : n - t), n)
            }

            function Fu(e) {
                return e && e.length ? C(e, $u) : 0
            }

            function Uu(e, t) {
                return e && e.length ? C(e, pi(t)) : 0
            }

            _ = _ ? jn.defaults({}, _, jn.pick(Nn, gn)) : Nn;
            var qu = _.Date, Lu = _.Error, Vu = _.Math, Hu = _.RegExp, Bu = _.TypeError, Wu = _.Array.prototype, zu = _.Object.prototype, Yu = _.Function.prototype.toString, Gu = zu.hasOwnProperty, Ku = 0, Xu = Yu.call(Object), Ju = zu.toString, Qu = Nn._, Zu = Hu("^" + Yu.call(Gu).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), el = Dn ? _.Buffer : G, tl = _.Reflect, nl = _.Symbol, rl = _.Uint8Array, il = _.clearTimeout, ol = tl ? tl.enumerate : G, al = Object.getPrototypeOf, sl = Object.getOwnPropertySymbols, ul = "symbol" == typeof(ul = nl && nl.iterator) ? ul : G, ll = Object.create, cl = zu.propertyIsEnumerable, fl = _.setTimeout, pl = Wu.splice, dl = Vu.ceil, hl = Vu.floor, gl = _.isFinite, vl = Wu.join, ml = Object.keys, $l = Vu.max, yl = Vu.min, bl = _.parseInt, wl = Vu.random, xl = Wu.reverse, Cl = hi(_, "Map"), kl = hi(_, "Set"), Tl = hi(_, "WeakMap"), Sl = hi(Object, "create"), El = Tl && new Tl, Dl = !cl.call({valueOf: 1}, "valueOf"), Al = {}, _l = Cl ? Yu.call(Cl) : "", Ol = kl ? Yu.call(kl) : "", Ml = Tl ? Yu.call(Tl) : "", Nl = nl ? nl.prototype : G, jl = Nl ? Nl.valueOf : G, Il = Nl ? Nl.toString : G;
            kt.templateSettings = {escape: ot, evaluate: at, interpolate: st, variable: "", imports: {_: kt}};
            var Pl = Wr(qn), Rl = Wr(Ln, !0), Fl = zr(), Ul = zr(!0);
            ol && !cl.call({valueOf: 1}, "valueOf") && (tr = function (e) {
                return q(ol(e))
            });
            var ql = El ? function (e, t) {
                return El.set(e, t), e
            } : $u, Ll = kl && 2 === new kl([1, 2]).size ? function (e) {
                return new kl(e)
            } : ku, Vl = El ? function (e) {
                return El.get(e)
            } : ku, Hl = cr("length"), Bl = sl || function () {
                    return []
                };
            (Cl && vi(new Cl) != Ne || kl && vi(new kl) != Re || Tl && vi(new Tl) != qe) && (vi = function (e) {
                var t = Ju.call(e), n = t == Ie ? e.constructor : null, r = "function" == typeof n ? Yu.call(n) : "";
                if (r)switch (r) {
                    case _l:
                        return Ne;
                    case Ol:
                        return Re;
                    case Ml:
                        return qe
                }
                return t
            });
            var Wl = function () {
                var e = 0, t = 0;
                return function (n, r) {
                    var i = mc(), o = ge - (i - t);
                    if (t = i, o > 0) {
                        if (++e >= he)return n
                    } else e = 0;
                    return ql(n, r)
                }
            }(), zl = pa(function (e, t) {
                return Sc(e) || (e = null == e ? [] : [Object(e)]), t = Fn(t, 1), i(e, t)
            }), Yl = pa(function (e, t) {
                return Da(e) ? Mn(e, Fn(t, 1, !0)) : []
            }), Gl = pa(function (e, t) {
                var n = Qi(t);
                return Da(n) && (n = G), Da(e) ? Mn(e, Fn(t, 1, !0), pi(n)) : []
            }), Kl = pa(function (e, t) {
                var n = Qi(t);
                return Da(n) && (n = G), Da(e) ? Mn(e, Fn(t, 1, !0), G, n) : []
            }), Xl = pa(function (e) {
                var t = f(e, wn);
                return t.length && t[0] === e[0] ? Yn(t) : []
            }), Jl = pa(function (e) {
                var t = Qi(e), n = f(e, wn);
                return t === Qi(n) ? t = G : n.pop(), n.length && n[0] === e[0] ? Yn(n, pi(t)) : []
            }), Ql = pa(function (e) {
                var t = Qi(e), n = f(e, wn);
                return t === Qi(n) ? t = G : n.pop(), n.length && n[0] === e[0] ? Yn(n, G, t) : []
            }), Zl = pa(eo), ec = pa(function (e, t) {
                t = f(Fn(t, 1), String);
                var n = bn(e, t);
                return dr(e, t.sort(O)), n
            }), tc = pa(function (e) {
                return Cr(Fn(e, 1, !0))
            }), nc = pa(function (e) {
                var t = Qi(e);
                return Da(t) && (t = G), Cr(Fn(e, 1, !0), pi(t))
            }), rc = pa(function (e) {
                var t = Qi(e);
                return Da(t) && (t = G), Cr(Fn(e, 1, !0), G, t)
            }), ic = pa(function (e, t) {
                return Da(e) ? Mn(e, t) : []
            }), oc = pa(function (e) {
                return Dr(u(e, Da))
            }), ac = pa(function (e) {
                var t = Qi(e);
                return Da(t) && (t = G), Dr(u(e, Da), pi(t))
            }), sc = pa(function (e) {
                var t = Qi(e);
                return Da(t) && (t = G), Dr(u(e, Da), G, t)
            }), uc = pa(Co), lc = pa(function (e) {
                var t = e.length, n = t > 1 ? e[t - 1] : G;
                return n = "function" == typeof n ? (e.pop(), n) : G, ko(e, n)
            }), cc = pa(function (e) {
                e = Fn(e, 1);
                var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, i = function (t) {
                    return bn(t, e)
                };
                return !(t > 1 || this.__actions__.length) && r instanceof _t && U(n) ? (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
                    func: Ao,
                    args: [i],
                    thisArg: G
                }), new At(r, this.__chain__).thru(function (e) {
                    return t && !e.length && e.push(G), e
                })) : this.thru(i)
            }), fc = Hr(function (e, t, n) {
                Gu.call(e, n) ? ++e[n] : e[n] = 1
            }), pc = Hr(function (e, t, n) {
                Gu.call(e, n) ? e[n].push(t) : e[n] = [t]
            }), dc = pa(function (e, t, r) {
                var i = -1, o = "function" == typeof t, a = ki(t), s = Ea(e) ? Array(e.length) : [];
                return Pl(e, function (e) {
                    var u = o ? t : a && null != e ? e[t] : G;
                    s[++i] = u ? n(u, e, r) : Kn(e, t, r)
                }), s
            }), hc = Hr(function (e, t, n) {
                e[n] = t
            }), gc = Hr(function (e, t, n) {
                e[n ? 0 : 1].push(t)
            }, function () {
                return [[], []]
            }), vc = pa(function (e, t) {
                if (null == e)return [];
                var n = t.length;
                return n > 1 && Ci(e, t[0], t[1]) ? t = [] : n > 2 && Ci(t[0], t[1], t[2]) && (t.length = 1), sr(e, Fn(t, 1), [])
            }), mc = qu.now, $c = pa(function (e, t, n) {
                var r = ee;
                if (n.length) {
                    var i = V(n, gi($c));
                    r |= oe
                }
                return si(e, r, t, n, i)
            }), yc = pa(function (e, t, n) {
                var r = ee | te;
                if (n.length) {
                    var i = V(n, gi(yc));
                    r |= oe
                }
                return si(t, r, e, n, i)
            }), bc = pa(function (e, t) {
                return On(e, 1, t)
            }), wc = pa(function (e, t, n) {
                return On(e, fs(t) || 0, n)
            }), xc = pa(function (e, t) {
                t = f(Fn(t, 1), pi());
                var r = t.length;
                return pa(function (i) {
                    for (var o = -1, a = yl(i.length, r); ++o < a;)i[o] = t[o].call(this, i[o]);
                    return n(e, this, i)
                })
            }), Cc = pa(function (e, t) {
                var n = V(t, gi(Cc));
                return si(e, oe, G, t, n)
            }), kc = pa(function (e, t) {
                var n = V(t, gi(kc));
                return si(e, ae, G, t, n)
            }), Tc = pa(function (e, t) {
                return si(e, ue, G, G, G, Fn(t, 1))
            }), Sc = Array.isArray, Ec = el ? function (e) {
                return e instanceof el
            } : mu(!1), Dc = Br(function (e, t) {
                if (Dl || Ei(t) || Ea(t))return void qr(t, Es(t), e);
                for (var n in t)Gu.call(t, n) && un(e, n, t[n])
            }), Ac = Br(function (e, t) {
                if (Dl || Ei(t) || Ea(t))return void qr(t, Ds(t), e);
                for (var n in t)un(e, n, t[n])
            }), _c = Br(function (e, t, n, r) {
                Lr(t, Ds(t), e, r)
            }), Oc = Br(function (e, t, n, r) {
                Lr(t, Es(t), e, r)
            }), Mc = pa(function (e, t) {
                return bn(e, Fn(t, 1))
            }), Nc = pa(function (e) {
                return e.push(G, an), n(_c, G, e)
            }), jc = pa(function (e) {
                return e.push(G, _i), n(Uc, G, e)
            }), Ic = ei(function (e, t, n) {
                e[t] = n
            }, mu($u)), Pc = ei(function (e, t, n) {
                Gu.call(e, t) ? e[t].push(n) : e[t] = [n]
            }, pi), Rc = pa(Kn), Fc = Br(function (e, t, n) {
                or(e, t, n)
            }), Uc = Br(function (e, t, n, r) {
                or(e, t, n, r)
            }), qc = pa(function (e, t) {
                return null == e ? {} : (t = f(Fn(t, 1), String), ur(e, Mn(Ds(e), t)))
            }), Lc = pa(function (e, t) {
                return null == e ? {} : ur(e, Fn(t, 1))
            }), Vc = Kr(function (e, t, n) {
                return t = t.toLowerCase(), e + (n ? Ys(t) : t)
            }), Hc = Kr(function (e, t, n) {
                return e + (n ? "-" : "") + t.toLowerCase()
            }), Bc = Kr(function (e, t, n) {
                return e + (n ? " " : "") + t.toLowerCase()
            }), Wc = Gr("toLowerCase"), zc = Gr("toUpperCase"), Yc = Kr(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase()
            }), Gc = Kr(function (e, t, n) {
                return e + (n ? " " : "") + Ys(t)
            }), Kc = Kr(function (e, t, n) {
                return e + (n ? " " : "") + t.toUpperCase()
            }), Xc = pa(function (e, t) {
                try {
                    return n(e, G, t)
                } catch (r) {
                    return Ia(r) ? r : new Lu(r)
                }
            }), Jc = pa(function (e, t) {
                return o(Fn(t, 1), function (t) {
                    e[t] = $c(e[t], e)
                }), e
            }), Qc = Qr(), Zc = Qr(!0), ef = pa(function (e, t) {
                return function (n) {
                    return Kn(n, e, t)
                }
            }), tf = pa(function (e, t) {
                return function (n) {
                    return Kn(e, n, t)
                }
            }), nf = ti(f), rf = ti(s), of = ti(g), af = ii(), sf = ii(!0), uf = ai("ceil"), lf = ai("floor"), cf = ai("round");
            return kt.prototype = Dt.prototype, kt.prototype.constructor = kt, At.prototype = _n(Dt.prototype), At.prototype.constructor = At, _t.prototype = _n(Dt.prototype), _t.prototype.constructor = _t, jt.prototype = Sl ? Sl(null) : zu, Ut.prototype.clear = qt, Ut.prototype["delete"] = Lt, Ut.prototype.get = Vt, Ut.prototype.has = Ht, Ut.prototype.set = Bt, Wt.prototype.push = Yt, Gt.prototype.clear = Kt, Gt.prototype["delete"] = Xt, Gt.prototype.get = Jt, Gt.prototype.has = Qt, Gt.prototype.set = Zt, la.Cache = Ut, kt.after = na, kt.ary = ra, kt.assign = Dc, kt.assignIn = Ac, kt.assignInWith = _c, kt.assignWith = Oc, kt.at = Mc, kt.before = ia, kt.bind = $c, kt.bindAll = Jc, kt.bindKey = yc, kt.castArray = ma, kt.chain = Eo, kt.chunk = Ii, kt.compact = Pi, kt.concat = zl, kt.cond = gu, kt.conforms = vu, kt.constant = mu, kt.countBy = fc, kt.create = gs, kt.curry = oa, kt.curryRight = aa, kt.debounce = sa, kt.defaults = Nc, kt.defaultsDeep = jc, kt.defer = bc, kt.delay = wc, kt.difference = Yl, kt.differenceBy = Gl, kt.differenceWith = Kl, kt.drop = Ri, kt.dropRight = Fi, kt.dropRightWhile = Ui, kt.dropWhile = qi, kt.fill = Li, kt.filter = Uo, kt.flatMap = Vo, kt.flatten = Bi, kt.flattenDeep = Wi, kt.flattenDepth = zi, kt.flip = ua, kt.flow = Qc, kt.flowRight = Zc, kt.fromPairs = Yi, kt.functions = xs, kt.functionsIn = Cs, kt.groupBy = pc, kt.initial = Xi, kt.intersection = Xl, kt.intersectionBy = Jl, kt.intersectionWith = Ql, kt.invert = Ic, kt.invertBy = Pc, kt.invokeMap = dc, kt.iteratee = yu, kt.keyBy = hc, kt.keys = Es, kt.keysIn = Ds, kt.map = zo, kt.mapKeys = As, kt.mapValues = _s, kt.matches = bu, kt.matchesProperty = wu, kt.memoize = la, kt.merge = Fc, kt.mergeWith = Uc, kt.method = ef, kt.methodOf = tf, kt.mixin = xu, kt.negate = ca, kt.nthArg = Tu, kt.omit = qc, kt.omitBy = Os, kt.once = fa, kt.orderBy = Yo, kt.over = nf, kt.overArgs = xc, kt.overEvery = rf, kt.overSome = of, kt.partial = Cc, kt.partialRight = kc,kt.partition = gc,kt.pick = Lc,kt.pickBy = Ms,kt.property = Su,kt.propertyOf = Eu,kt.pull = Zl,kt.pullAll = eo,kt.pullAllBy = to,kt.pullAllWith = no,kt.pullAt = ec,kt.range = af,kt.rangeRight = sf,kt.rearg = Tc,kt.reject = Xo,kt.remove = ro,kt.rest = pa,kt.reverse = io,kt.sampleSize = Qo,kt.set = js,kt.setWith = Is,kt.shuffle = Zo,kt.slice = oo,kt.sortBy = vc,kt.sortedUniq = po,kt.sortedUniqBy = ho,kt.split = iu,kt.spread = da,kt.tail = go,kt.take = vo,kt.takeRight = mo,kt.takeRightWhile = $o,kt.takeWhile = yo,kt.tap = Do,kt.throttle = ha,kt.thru = Ao,kt.toArray = us,kt.toPairs = Ps,kt.toPairsIn = Rs,kt.toPath = Au,kt.toPlainObject = ps,kt.transform = Fs,kt.unary = ga,kt.union = tc,kt.unionBy = nc,kt.unionWith = rc,kt.uniq = bo,kt.uniqBy = wo,kt.uniqWith = xo,kt.unset = Us,kt.unzip = Co,kt.unzipWith = ko,kt.update = qs,kt.updateWith = Ls,kt.values = Vs,kt.valuesIn = Hs,kt.without = ic,kt.words = hu,kt.wrap = va,kt.xor = oc,kt.xorBy = ac,kt.xorWith = sc,kt.zip = uc,kt.zipObject = To,kt.zipObjectDeep = So,kt.zipWith = lc,kt.extend = Ac,kt.extendWith = _c,xu(kt, kt),kt.add = Ou,kt.attempt = Xc,kt.camelCase = Vc,kt.capitalize = Ys,kt.ceil = uf,kt.clamp = Bs,kt.clone = $a,kt.cloneDeep = ba,kt.cloneDeepWith = wa,kt.cloneWith = ya,kt.deburr = Gs,kt.endsWith = Ks,kt.eq = xa,kt.escape = Xs,kt.escapeRegExp = Js,kt.every = Fo,kt.find = qo,kt.findIndex = Vi,kt.findKey = vs,kt.findLast = Lo,kt.findLastIndex = Hi,kt.findLastKey = ms,kt.floor = lf,kt.forEach = Ho,kt.forEachRight = Bo,kt.forIn = $s,kt.forInRight = ys,kt.forOwn = bs,kt.forOwnRight = ws,kt.get = ks,kt.gt = Ca,kt.gte = ka,kt.has = Ts,kt.hasIn = Ss,kt.head = Gi,kt.identity = $u,kt.includes = Wo,kt.indexOf = Ki,kt.inRange = Ws,kt.invoke = Rc,kt.isArguments = Ta,kt.isArray = Sc,kt.isArrayBuffer = Sa,kt.isArrayLike = Ea,kt.isArrayLikeObject = Da,kt.isBoolean = Aa,kt.isBuffer = Ec,kt.isDate = _a,kt.isElement = Oa,kt.isEmpty = Ma,kt.isEqual = Na,kt.isEqualWith = ja,kt.isError = Ia,kt.isFinite = Pa,kt.isFunction = Ra,kt.isInteger = Fa,kt.isLength = Ua,kt.isMap = Va,kt.isMatch = Ha,kt.isMatchWith = Ba,kt.isNaN = Wa,kt.isNative = za,kt.isNil = Ga,kt.isNull = Ya,kt.isNumber = Ka,kt.isObject = qa,kt.isObjectLike = La,kt.isPlainObject = Xa,kt.isRegExp = Ja,kt.isSafeInteger = Qa,kt.isSet = Za,kt.isString = es,kt.isSymbol = ts,kt.isTypedArray = ns,kt.isUndefined = rs,kt.isWeakMap = is,kt.isWeakSet = os,kt.join = Ji,kt.kebabCase = Hc,kt.last = Qi,kt.lastIndexOf = Zi,kt.lowerCase = Bc,kt.lowerFirst = Wc,kt.lt = as,kt.lte = ss,kt.max = Mu,kt.maxBy = Nu,kt.mean = ju,kt.min = Iu,kt.minBy = Pu,kt.noConflict = Cu,kt.noop = ku,kt.now = mc,kt.pad = Qs,kt.padEnd = Zs,kt.padStart = eu,kt.parseInt = tu,kt.random = zs,kt.reduce = Go,kt.reduceRight = Ko,kt.repeat = nu,kt.replace = ru,kt.result = Ns,kt.round = cf,kt.runInContext = Y,kt.sample = Jo,kt.size = ea,kt.snakeCase = Yc,kt.some = ta,kt.sortedIndex = ao,kt.sortedIndexBy = so,kt.sortedIndexOf = uo,kt.sortedLastIndex = lo,kt.sortedLastIndexBy = co,kt.sortedLastIndexOf = fo,kt.startCase = Gc,kt.startsWith = ou,kt.subtract = Ru,kt.sum = Fu,kt.sumBy = Uu,kt.template = au,kt.times = Du,kt.toInteger = ls,kt.toLength = cs,kt.toLower = su,kt.toNumber = fs,kt.toSafeInteger = ds,kt.toString = hs,kt.toUpper = uu,kt.trim = lu,kt.trimEnd = cu,kt.trimStart = fu,kt.truncate = pu,kt.unescape = du,kt.uniqueId = _u,kt.upperCase = Kc,kt.upperFirst = zc,kt.each = Ho,kt.eachRight = Bo,kt.first = Gi,xu(kt, function () {
                var e = {};
                return qn(kt, function (t, n) {
                    Gu.call(kt.prototype, n) || (e[n] = t)
                }), e
            }(), {chain: !1}),kt.VERSION = K,o(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                kt[e].placeholder = kt
            }),o(["drop", "take"], function (e, t) {
                _t.prototype[e] = function (n) {
                    var r = this.__filtered__;
                    if (r && !t)return new _t(this);
                    n = n === G ? 1 : $l(ls(n), 0);
                    var i = this.clone();
                    return r ? i.__takeCount__ = yl(n, i.__takeCount__) : i.__views__.push({
                        size: yl(n, Ce),
                        type: e + (i.__dir__ < 0 ? "Right" : "")
                    }), i
                }, _t.prototype[e + "Right"] = function (t) {
                    return this.reverse()[e](t).reverse()
                }
            }),o(["filter", "map", "takeWhile"], function (e, t) {
                var n = t + 1, r = n == ve || n == $e;
                _t.prototype[e] = function (e) {
                    var t = this.clone();
                    return t.__iteratees__.push({iteratee: pi(e, 3), type: n}), t.__filtered__ = t.__filtered__ || r, t
                }
            }),o(["head", "last"], function (e, t) {
                var n = "take" + (t ? "Right" : "");
                _t.prototype[e] = function () {
                    return this[n](1).value()[0]
                }
            }),o(["initial", "tail"], function (e, t) {
                var n = "drop" + (t ? "" : "Right");
                _t.prototype[e] = function () {
                    return this.__filtered__ ? new _t(this) : this[n](1)
                }
            }),_t.prototype.compact = function () {
                return this.filter($u)
            },_t.prototype.find = function (e) {
                return this.filter(e).head()
            },_t.prototype.findLast = function (e) {
                return this.reverse().find(e)
            },_t.prototype.invokeMap = pa(function (e, t) {
                return "function" == typeof e ? new _t(this) : this.map(function (n) {
                    return Kn(n, e, t)
                })
            }),_t.prototype.reject = function (e) {
                return e = pi(e, 3), this.filter(function (t) {
                    return !e(t)
                })
            },_t.prototype.slice = function (e, t) {
                e = ls(e);
                var n = this;
                return n.__filtered__ && (e > 0 || 0 > t) ? new _t(n) : (0 > e ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== G && (t = ls(t), n = 0 > t ? n.dropRight(-t) : n.take(t - e)), n)
            },_t.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse()
            },_t.prototype.toArray = function () {
                return this.take(Ce)
            },qn(_t.prototype, function (e, t) {
                var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = kt[r ? "take" + ("last" == t ? "Right" : "") : t], o = r || /^find/.test(t);
                i && (kt.prototype[t] = function () {
                    var t = this.__wrapped__, a = r ? [1] : arguments, s = t instanceof _t, u = a[0], l = s || Sc(t), c = function (e) {
                        var t = i.apply(kt, p([e], a));
                        return r && f ? t[0] : t
                    };
                    l && n && "function" == typeof u && 1 != u.length && (s = l = !1);
                    var f = this.__chain__, d = !!this.__actions__.length, h = o && !f, g = s && !d;
                    if (!o && l) {
                        t = g ? t : new _t(this);
                        var v = e.apply(t, a);
                        return v.__actions__.push({func: Ao, args: [c], thisArg: G}), new At(v, f)
                    }
                    return h && g ? e.apply(this, a) : (v = this.thru(c), h ? r ? v.value()[0] : v.value() : v)
                })
            }),o(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
                var t = Wu[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
                kt.prototype[e] = function () {
                    var e = arguments;
                    return r && !this.__chain__ ? t.apply(this.value(), e) : this[n](function (n) {
                        return t.apply(n, e)
                    })
                }
            }),qn(_t.prototype, function (e, t) {
                var n = kt[t];
                if (n) {
                    var r = n.name + "", i = Al[r] || (Al[r] = []);
                    i.push({name: t, func: n})
                }
            }),Al[Zr(G, te).name] = [{
                name: "wrapper",
                func: G
            }],_t.prototype.clone = Ot,_t.prototype.reverse = Mt,_t.prototype.value = Nt,kt.prototype.at = cc,kt.prototype.chain = _o,kt.prototype.commit = Oo,kt.prototype.flatMap = Mo,kt.prototype.next = No,kt.prototype.plant = Io,kt.prototype.reverse = Po,kt.prototype.toJSON = kt.prototype.valueOf = kt.prototype.value = Ro,ul && (kt.prototype[ul] = jo),kt
        }

        var G, K = "4.6.1", X = 200, J = "Expected a function", Q = "__lodash_hash_undefined__", Z = "__lodash_placeholder__", ee = 1, te = 2, ne = 4, re = 8, ie = 16, oe = 32, ae = 64, se = 128, ue = 256, le = 512, ce = 1, fe = 2, pe = 30, de = "...", he = 150, ge = 16, ve = 1, me = 2, $e = 3, ye = 1 / 0, be = 9007199254740991, we = 1.7976931348623157e308, xe = NaN, Ce = 4294967295, ke = Ce - 1, Te = Ce >>> 1, Se = "[object Arguments]", Ee = "[object Array]", De = "[object Boolean]", Ae = "[object Date]", _e = "[object Error]", Oe = "[object Function]", Me = "[object GeneratorFunction]", Ne = "[object Map]", je = "[object Number]", Ie = "[object Object]", Pe = "[object RegExp]", Re = "[object Set]", Fe = "[object String]", Ue = "[object Symbol]", qe = "[object WeakMap]", Le = "[object WeakSet]", Ve = "[object ArrayBuffer]", He = "[object Float32Array]", Be = "[object Float64Array]", We = "[object Int8Array]", ze = "[object Int16Array]", Ye = "[object Int32Array]", Ge = "[object Uint8Array]", Ke = "[object Uint8ClampedArray]", Xe = "[object Uint16Array]", Je = "[object Uint32Array]", Qe = /\b__p \+= '';/g, Ze = /\b(__p \+=) '' \+/g, et = /(__e\(.*?\)|\b__t\)) \+\n'';/g, tt = /&(?:amp|lt|gt|quot|#39|#96);/g, nt = /[&<>"'`]/g, rt = RegExp(tt.source), it = RegExp(nt.source), ot = /<%-([\s\S]+?)%>/g, at = /<%([\s\S]+?)%>/g, st = /<%=([\s\S]+?)%>/g, ut = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lt = /^\w*$/, ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g, ft = /[\\^$.*+?()[\]{}|]/g, pt = RegExp(ft.source), dt = /^\s+|\s+$/g, ht = /^\s+/, gt = /\s+$/, vt = /\\(\\)?/g, mt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, $t = /\w*$/, yt = /^0x/i, bt = /^[-+]0x[0-9a-f]+$/i, wt = /^0b[01]+$/i, xt = /^\[object .+?Constructor\]$/, Ct = /^0o[0-7]+$/i, kt = /^(?:0|[1-9]\d*)$/, Tt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, St = /($^)/, Et = /['\n\r\u2028\u2029\\]/g, Dt = "\\ud800-\\udfff", At = "\\u0300-\\u036f\\ufe20-\\ufe23", _t = "\\u20d0-\\u20f0", Ot = "\\u2700-\\u27bf", Mt = "a-z\\xdf-\\xf6\\xf8-\\xff", Nt = "\\xac\\xb1\\xd7\\xf7", jt = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", It = "\\u2018\\u2019\\u201c\\u201d", Pt = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Rt = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ft = "\\ufe0e\\ufe0f", Ut = Nt + jt + It + Pt, qt = "[" + Dt + "]", Lt = "[" + Ut + "]", Vt = "[" + At + _t + "]", Ht = "\\d+", Bt = "[" + Ot + "]", Wt = "[" + Mt + "]", zt = "[^" + Dt + Ut + Ht + Ot + Mt + Rt + "]", Yt = "\\ud83c[\\udffb-\\udfff]", Gt = "(?:" + Vt + "|" + Yt + ")", Kt = "[^" + Dt + "]", Xt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Jt = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qt = "[" + Rt + "]", Zt = "\\u200d", en = "(?:" + Wt + "|" + zt + ")", tn = "(?:" + Qt + "|" + zt + ")", nn = Gt + "?", rn = "[" + Ft + "]?", on = "(?:" + Zt + "(?:" + [Kt, Xt, Jt].join("|") + ")" + rn + nn + ")*", an = rn + nn + on, sn = "(?:" + [Bt, Xt, Jt].join("|") + ")" + an, un = "(?:" + [Kt + Vt + "?", Vt, Xt, Jt, qt].join("|") + ")", ln = RegExp(Vt, "g"), cn = RegExp(Yt + "(?=" + Yt + ")|" + un + an, "g"), fn = RegExp("[" + Zt + Dt + At + _t + Ft + "]"), pn = /[a-zA-Z0-9]+/g, dn = RegExp([Qt + "?" + Wt + "+(?=" + [Lt, Qt, "$"].join("|") + ")", tn + "+(?=" + [Lt, Qt + en, "$"].join("|") + ")", Qt + "?" + en + "+", Qt + "+", Ht, sn].join("|"), "g"), hn = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gn = ["Array", "Buffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], vn = -1, mn = {};
        mn[He] = mn[Be] = mn[We] = mn[ze] = mn[Ye] = mn[Ge] = mn[Ke] = mn[Xe] = mn[Je] = !0, mn[Se] = mn[Ee] = mn[Ve] = mn[De] = mn[Ae] = mn[_e] = mn[Oe] = mn[Ne] = mn[je] = mn[Ie] = mn[Pe] = mn[Re] = mn[Fe] = mn[qe] = !1;
        var $n = {};
        $n[Se] = $n[Ee] = $n[Ve] = $n[De] = $n[Ae] = $n[He] = $n[Be] = $n[We] = $n[ze] = $n[Ye] = $n[Ne] = $n[je] = $n[Ie] = $n[Pe] = $n[Re] = $n[Fe] = $n[Ue] = $n[Ge] = $n[Ke] = $n[Xe] = $n[Je] = !0, $n[_e] = $n[Oe] = $n[qe] = !1;
        var yn = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss"
        }, bn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"}, wn = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        }, xn = {"function": !0, object: !0}, Cn = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, kn = parseFloat, Tn = parseInt, Sn = xn[typeof exports] && exports && !exports.nodeType ? exports : G, En = xn[typeof module] && module && !module.nodeType ? module : G, Dn = En && En.exports === Sn ? Sn : G, An = _(Sn && En && "object" == typeof global && global), _n = _(xn[typeof self] && self), On = _(xn[typeof window] && window), Mn = _(xn[typeof this] && this), Nn = An || On !== (Mn && Mn.window) && On || _n || Mn || Function("return this")(), jn = Y();
        (On || _n || {})._ = jn, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
            return jn
        }) : Sn && En ? (Dn && ((En.exports = jn)._ = jn), Sn._ = jn) : Nn._ = jn
    }.call(this), function (e, t, n) {
        "use strict";
        function r(e, t) {
            return t = t || Error, function () {
                var n, r, i = 2, o = arguments, a = o[0], s = "[" + (e ? e + ":" : "") + a + "] ", u = o[1];
                for (s += u.replace(/\{\d+\}/g, function (e) {
                    var t = +e.slice(1, -1), n = t + i;
                    return n < o.length ? be(o[n]) : e
                }), s += "\nhttp://errors.angularjs.org/1.5.0/" + (e ? e + "/" : "") + a, r = i, n = "?"; r < o.length; r++, n = "&")s += n + "p" + (r - i) + "=" + encodeURIComponent(be(o[r]));
                return new t(s)
            }
        }

        function i(e) {
            if (null == e || D(e))return !1;
            if (zr(e) || C(e) || Ir && e instanceof Ir)return !0;
            var t = "length" in Object(e) && e.length;
            return k(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
        }

        function o(e, t, n) {
            var r, a;
            if (e)if (S(e))for (r in e)"prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e); else if (zr(e) || i(e)) {
                var s = "object" != typeof e;
                for (r = 0, a = e.length; a > r; r++)(s || r in e) && t.call(n, e[r], r, e)
            } else if (e.forEach && e.forEach !== o)e.forEach(t, n, e); else if (x(e))for (r in e)t.call(n, e[r], r, e); else if ("function" == typeof e.hasOwnProperty)for (r in e)e.hasOwnProperty(r) && t.call(n, e[r], r, e); else for (r in e)Ar.call(e, r) && t.call(n, e[r], r, e);
            return e
        }

        function a(e, t, n) {
            for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++)t.call(n, e[r[i]], r[i]);
            return r
        }

        function s(e) {
            return function (t, n) {
                e(n, t)
            }
        }

        function u() {
            return ++Wr
        }

        function l(e, t) {
            t ? e.$$hashKey = t : delete e.$$hashKey
        }

        function c(e, t, n) {
            for (var r = e.$$hashKey, i = 0, o = t.length; o > i; ++i) {
                var a = t[i];
                if (w(a) || S(a))for (var s = Object.keys(a), u = 0, f = s.length; f > u; u++) {
                    var p = s[u], d = a[p];
                    n && w(d) ? T(d) ? e[p] = new Date(d.valueOf()) : E(d) ? e[p] = new RegExp(d) : d.nodeName ? e[p] = d.cloneNode(!0) : R(d) ? e[p] = d.clone() : (w(e[p]) || (e[p] = zr(d) ? [] : {}), c(e[p], [d], !0)) : e[p] = d
                }
            }
            return l(e, r), e
        }

        function f(e) {
            return c(e, Fr.call(arguments, 1), !1)
        }

        function p(e) {
            return c(e, Fr.call(arguments, 1), !0)
        }

        function d(e) {
            return parseInt(e, 10)
        }

        function h(e, t) {
            return f(Object.create(e), t)
        }

        function g() {
        }

        function v(e) {
            return e
        }

        function m(e) {
            return function () {
                return e
            }
        }

        function $(e) {
            return S(e.toString) && e.toString !== Lr
        }

        function y(e) {
            return "undefined" == typeof e
        }

        function b(e) {
            return "undefined" != typeof e
        }

        function w(e) {
            return null !== e && "object" == typeof e
        }

        function x(e) {
            return null !== e && "object" == typeof e && !Vr(e)
        }

        function C(e) {
            return "string" == typeof e
        }

        function k(e) {
            return "number" == typeof e
        }

        function T(e) {
            return "[object Date]" === Lr.call(e)
        }

        function S(e) {
            return "function" == typeof e
        }

        function E(e) {
            return "[object RegExp]" === Lr.call(e)
        }

        function D(e) {
            return e && e.window === e
        }

        function A(e) {
            return e && e.$evalAsync && e.$watch
        }

        function _(e) {
            return "[object File]" === Lr.call(e)
        }

        function O(e) {
            return "[object FormData]" === Lr.call(e)
        }

        function M(e) {
            return "[object Blob]" === Lr.call(e)
        }

        function N(e) {
            return "boolean" == typeof e
        }

        function j(e) {
            return e && S(e.then)
        }

        function I(e) {
            return e && k(e.length) && Yr.test(Lr.call(e))
        }

        function P(e) {
            return "[object ArrayBuffer]" === Lr.call(e)
        }

        function R(e) {
            return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
        }

        function F(e) {
            var t, n = {}, r = e.split(",");
            for (t = 0; t < r.length; t++)n[r[t]] = !0;
            return n
        }

        function U(e) {
            return _r(e.nodeName || e[0] && e[0].nodeName)
        }

        function q(e, t) {
            var n = e.indexOf(t);
            return n >= 0 && e.splice(n, 1), n
        }

        function L(e, t) {
            function r(e, t) {
                var n, r = t.$$hashKey;
                if (zr(e))for (var o = 0, a = e.length; a > o; o++)t.push(i(e[o])); else if (x(e))for (n in e)t[n] = i(e[n]); else if (e && "function" == typeof e.hasOwnProperty)for (n in e)e.hasOwnProperty(n) && (t[n] = i(e[n])); else for (n in e)Ar.call(e, n) && (t[n] = i(e[n]));
                return l(t, r), t
            }

            function i(e) {
                if (!w(e))return e;
                var t = s.indexOf(e);
                if (-1 !== t)return u[t];
                if (D(e) || A(e))throw Hr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                var i = !1, o = a(e);
                return o === n && (o = zr(e) ? [] : Object.create(Vr(e)), i = !0), s.push(e), u.push(o), i ? r(e, o) : o
            }

            function a(e) {
                switch (Lr.call(e)) {
                    case"[object Int8Array]":
                    case"[object Int16Array]":
                    case"[object Int32Array]":
                    case"[object Float32Array]":
                    case"[object Float64Array]":
                    case"[object Uint8Array]":
                    case"[object Uint8ClampedArray]":
                    case"[object Uint16Array]":
                    case"[object Uint32Array]":
                        return new e.constructor(i(e.buffer));
                    case"[object ArrayBuffer]":
                        if (!e.slice) {
                            var t = new ArrayBuffer(e.byteLength);
                            return new Uint8Array(t).set(new Uint8Array(e)), t
                        }
                        return e.slice(0);
                    case"[object Boolean]":
                    case"[object Number]":
                    case"[object String]":
                    case"[object Date]":
                        return new e.constructor(e.valueOf());
                    case"[object RegExp]":
                        var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
                        return n.lastIndex = e.lastIndex, n
                }
                return S(e.cloneNode) ? e.cloneNode(!0) : void 0
            }

            var s = [], u = [];
            if (t) {
                if (I(t) || P(t))throw Hr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                if (e === t)throw Hr("cpi", "Can't copy! Source and destination are identical.");
                return zr(t) ? t.length = 0 : o(t, function (e, n) {
                    "$$hashKey" !== n && delete t[n]
                }), s.push(e), u.push(t), r(e, t)
            }
            return i(e)
        }

        function V(e, t) {
            if (zr(e)) {
                t = t || [];
                for (var n = 0, r = e.length; r > n; n++)t[n] = e[n]
            } else if (w(e)) {
                t = t || {};
                for (var i in e)"$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i])
            }
            return t || e
        }

        function H(e, t) {
            if (e === t)return !0;
            if (null === e || null === t)return !1;
            if (e !== e && t !== t)return !0;
            var n, r, i, o = typeof e, a = typeof t;
            if (o == a && "object" == o) {
                if (!zr(e)) {
                    if (T(e))return T(t) ? H(e.getTime(), t.getTime()) : !1;
                    if (E(e))return E(t) ? e.toString() == t.toString() : !1;
                    if (A(e) || A(t) || D(e) || D(t) || zr(t) || T(t) || E(t))return !1;
                    i = me();
                    for (r in e)if ("$" !== r.charAt(0) && !S(e[r])) {
                        if (!H(e[r], t[r]))return !1;
                        i[r] = !0
                    }
                    for (r in t)if (!(r in i) && "$" !== r.charAt(0) && b(t[r]) && !S(t[r]))return !1;
                    return !0
                }
                if (!zr(t))return !1;
                if ((n = e.length) == t.length) {
                    for (r = 0; n > r; r++)if (!H(e[r], t[r]))return !1;
                    return !0
                }
            }
            return !1
        }

        function B(e, t, n) {
            return e.concat(Fr.call(t, n))
        }

        function W(e, t) {
            return Fr.call(e, t || 0)
        }

        function z(e, t) {
            var n = arguments.length > 2 ? W(arguments, 2) : [];
            return !S(t) || t instanceof RegExp ? t : n.length ? function () {
                return arguments.length ? t.apply(e, B(n, arguments, 0)) : t.apply(e, n)
            } : function () {
                return arguments.length ? t.apply(e, arguments) : t.call(e)
            }
        }

        function Y(e, r) {
            var i = r;
            return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : D(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : A(r) && (i = "$SCOPE"), i
        }

        function G(e, t) {
            return y(e) ? n : (k(t) || (t = t ? 2 : null), JSON.stringify(e, Y, t))
        }

        function K(e) {
            return C(e) ? JSON.parse(e) : e
        }

        function X(e, t) {
            e = e.replace(Qr, "");
            var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
            return isNaN(n) ? t : n
        }

        function J(e, t) {
            return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
        }

        function Q(e, t, n) {
            n = n ? -1 : 1;
            var r = e.getTimezoneOffset(), i = X(t, r);
            return J(e, n * (i - r))
        }

        function Z(e) {
            e = Ir(e).clone();
            try {
                e.empty()
            } catch (t) {
            }
            var n = Ir("<div>").append(e).html();
            try {
                return e[0].nodeType === ii ? _r(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
                    return "<" + _r(t)
                })
            } catch (t) {
                return _r(n)
            }
        }

        function ee(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
            }
        }

        function te(e) {
            var t = {};
            return o((e || "").split("&"), function (e) {
                var n, r, i;
                e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), i = e.substring(n + 1)), r = ee(r), b(r) && (i = b(i) ? ee(i) : !0, Ar.call(t, r) ? zr(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
            }), t
        }

        function ne(e) {
            var t = [];
            return o(e, function (e, n) {
                zr(e) ? o(e, function (e) {
                    t.push(ie(n, !0) + (e === !0 ? "" : "=" + ie(e, !0)))
                }) : t.push(ie(n, !0) + (e === !0 ? "" : "=" + ie(e, !0)))
            }), t.length ? t.join("&") : ""
        }

        function re(e) {
            return ie(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function ie(e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
        }

        function oe(e, t) {
            var n, r, i = Zr.length;
            for (r = 0; i > r; ++r)if (n = Zr[r] + t, C(n = e.getAttribute(n)))return n;
            return null
        }

        function ae(e, t) {
            var n, r, i = {};
            o(Zr, function (t) {
                var i = t + "app";
                !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
            }), o(Zr, function (t) {
                var i, o = t + "app";
                !n && (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
            }), n && (i.strictDi = null !== oe(n, "strict-di"), t(n, r ? [r] : [], i))
        }

        function se(n, r, i) {
            w(i) || (i = {});
            var a = {strictDi: !1};
            i = f(a, i);
            var s = function () {
                if (n = Ir(n), n.injector()) {
                    var e = n[0] === t ? "document" : Z(n);
                    throw Hr("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                r = r || [], r.unshift(["$provide", function (e) {
                    e.value("$rootElement", n)
                }]), i.debugInfoEnabled && r.push(["$compileProvider", function (e) {
                    e.debugInfoEnabled(!0)
                }]), r.unshift("ng");
                var o = it(r, i.strictDi);
                return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (e, t, n, r) {
                    e.$apply(function () {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), o
            }, u = /^NG_ENABLE_DEBUG_INFO!/, l = /^NG_DEFER_BOOTSTRAP!/;
            return e && u.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(u, "")), e && !l.test(e.name) ? s() : (e.name = e.name.replace(l, ""), Br.resumeBootstrap = function (e) {
                return o(e, function (e) {
                    r.push(e)
                }), s()
            }, void(S(Br.resumeDeferredBootstrap) && Br.resumeDeferredBootstrap()))
        }

        function ue() {
            e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
        }

        function le(e) {
            var t = Br.element(e).injector();
            if (!t)throw Hr("test", "no injector found for element argument to getTestability");
            return t.get("$$testability")
        }

        function ce(e, t) {
            return t = t || "_", e.replace(ei, function (e, n) {
                return (n ? t : "") + e.toLowerCase()
            })
        }

        function fe() {
            var t;
            if (!ti) {
                var r = Jr();
                Pr = y(r) ? e.jQuery : r ? e[r] : n, Pr && Pr.fn.on ? (Ir = Pr, f(Pr.fn, {
                    scope: Ci.scope,
                    isolateScope: Ci.isolateScope,
                    controller: Ci.controller,
                    injector: Ci.injector,
                    inheritedData: Ci.inheritedData
                }), t = Pr.cleanData, Pr.cleanData = function (e) {
                    for (var n, r, i = 0; null != (r = e[i]); i++)n = Pr._data(r, "events"), n && n.$destroy && Pr(r).triggerHandler("$destroy");
                    t(e)
                }) : Ir = Oe, Br.element = Ir, ti = !0
            }
        }

        function pe(e, t, n) {
            if (!e)throw Hr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function de(e, t, n) {
            return n && zr(e) && (e = e[e.length - 1]), pe(S(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
        }

        function he(e, t) {
            if ("hasOwnProperty" === e)throw Hr("badname", "hasOwnProperty is not a valid {0} name", t)
        }

        function ge(e, t, n) {
            if (!t)return e;
            for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++)r = i[s], e && (e = (o = e)[r]);
            return !n && S(e) ? z(o, e) : e
        }

        function ve(e) {
            for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = Ir(Fr.call(e, 0, i))), t.push(n));
            return t || e
        }

        function me() {
            return Object.create(null)
        }

        function $e(e) {
            function t(e, t, n) {
                return e[t] || (e[t] = n())
            }

            var n = r("$injector"), i = r("ng"), o = t(e, "angular", Object);
            return o.$$minErr = o.$$minErr || r, t(o, "module", function () {
                var e = {};
                return function (r, o, a) {
                    var s = function (e, t) {
                        if ("hasOwnProperty" === e)throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                    };
                    return s(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function () {
                        function e(e, t, n, r) {
                            return r || (r = i), function () {
                                return r[n || "push"]([e, t, arguments]), c
                            }
                        }

                        function t(e, t) {
                            return function (n, o) {
                                return o && S(o) && (o.$$moduleName = r), i.push([e, t, arguments]), c
                            }
                        }

                        if (!o)throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                        var i = [], s = [], u = [], l = e("$injector", "invoke", "push", s), c = {
                            _invokeQueue: i,
                            _configBlocks: s,
                            _runBlocks: u,
                            requires: o,
                            name: r,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            decorator: t("$provide", "decorator"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            component: t("$compileProvider", "component"),
                            config: l,
                            run: function (e) {
                                return u.push(e), this
                            }
                        };
                        return a && l(a), c
                    })
                }
            })
        }

        function ye(e) {
            var t = [];
            return JSON.stringify(e, function (e, n) {
                if (n = Y(e, n), w(n)) {
                    if (t.indexOf(n) >= 0)return "...";
                    t.push(n)
                }
                return n
            })
        }

        function be(e) {
            return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : y(e) ? "undefined" : "string" != typeof e ? ye(e) : e
        }

        function we(t) {
            f(t, {
                bootstrap: se,
                copy: L,
                extend: f,
                merge: p,
                equals: H,
                element: Ir,
                forEach: o,
                injector: it,
                noop: g,
                bind: z,
                toJson: G,
                fromJson: K,
                identity: v,
                isUndefined: y,
                isDefined: b,
                isString: C,
                isFunction: S,
                isObject: w,
                isNumber: k,
                isElement: R,
                isArray: zr,
                version: ui,
                isDate: T,
                lowercase: _r,
                uppercase: Or,
                callbacks: {counter: 0},
                getTestability: le,
                $$minErr: r,
                $$csp: Xr,
                reloadWithDebugInfo: ue
            }), (Rr = $e(e))("ng", ["ngLocale"], ["$provide", function (e) {
                e.provider({$$sanitizeUri: Cn}), e.provider("$compile", ht).directive({
                    a: Ao,
                    input: zo,
                    textarea: zo,
                    form: jo,
                    script: La,
                    select: Ba,
                    style: za,
                    option: Wa,
                    ngBind: Ko,
                    ngBindHtml: Jo,
                    ngBindTemplate: Xo,
                    ngClass: Zo,
                    ngClassEven: ta,
                    ngClassOdd: ea,
                    ngCloak: na,
                    ngController: ra,
                    ngForm: Io,
                    ngHide: ja,
                    ngIf: aa,
                    ngInclude: sa,
                    ngInit: la,
                    ngNonBindable: Ta,
                    ngPluralize: Aa,
                    ngRepeat: _a,
                    ngShow: Na,
                    ngStyle: Ia,
                    ngSwitch: Pa,
                    ngSwitchWhen: Ra,
                    ngSwitchDefault: Fa,
                    ngOptions: Da,
                    ngTransclude: qa,
                    ngModel: xa,
                    ngList: ca,
                    ngChange: Qo,
                    pattern: Ga,
                    ngPattern: Ga,
                    required: Ya,
                    ngRequired: Ya,
                    minlength: Xa,
                    ngMinlength: Xa,
                    maxlength: Ka,
                    ngMaxlength: Ka,
                    ngValue: Go,
                    ngModelOptions: ka
                }).directive({ngInclude: ua}).directive(_o).directive(ia), e.provider({
                    $anchorScroll: ot,
                    $animate: Ui,
                    $animateCss: Vi,
                    $$animateJs: Ri,
                    $$animateQueue: Fi,
                    $$AnimateRunner: Li,
                    $$animateAsyncRun: qi,
                    $browser: ft,
                    $cacheFactory: pt,
                    $controller: yt,
                    $document: bt,
                    $exceptionHandler: wt,
                    $filter: Rn,
                    $$forceReflow: Yi,
                    $interpolate: It,
                    $interval: Pt,
                    $http: Ot,
                    $httpParamSerializer: Ct,
                    $httpParamSerializerJQLike: kt,
                    $httpBackend: Nt,
                    $xhrFactory: Mt,
                    $location: Xt,
                    $log: Jt,
                    $parse: mn,
                    $rootScope: xn,
                    $q: $n,
                    $$q: yn,
                    $sce: En,
                    $sceDelegate: Sn,
                    $sniffer: Dn,
                    $templateCache: dt,
                    $templateRequest: An,
                    $$testability: _n,
                    $timeout: On,
                    $window: jn,
                    $$rAF: wn,
                    $$jqLite: Qe,
                    $$HashMap: Ei,
                    $$cookieReader: Pn
                })
            }])
        }

        function xe() {
            return ++ci
        }

        function Ce(e) {
            return e.replace(di, function (e, t, n, r) {
                return r ? n.toUpperCase() : n
            }).replace(hi, "Moz$1")
        }

        function ke(e) {
            return !$i.test(e)
        }

        function Te(e) {
            var t = e.nodeType;
            return t === ni || !t || t === ai
        }

        function Se(e) {
            for (var t in li[e.ng339])return !0;
            return !1
        }

        function Ee(e) {
            for (var t = 0, n = e.length; n > t; t++)Ie(e[t])
        }

        function De(e, t) {
            var n, r, i, a, s = t.createDocumentFragment(), u = [];
            if (ke(e))u.push(t.createTextNode(e)); else {
                for (n = n || s.appendChild(t.createElement("div")), r = (yi.exec(e) || ["", ""])[1].toLowerCase(), i = wi[r] || wi._default, n.innerHTML = i[1] + e.replace(bi, "<$1></$2>") + i[2], a = i[0]; a--;)n = n.lastChild;
                u = B(u, n.childNodes), n = s.firstChild, n.textContent = ""
            }
            return s.textContent = "", s.innerHTML = "", o(u, function (e) {
                s.appendChild(e)
            }), s
        }

        function Ae(e, n) {
            n = n || t;
            var r;
            return (r = mi.exec(e)) ? [n.createElement(r[1])] : (r = De(e, n)) ? r.childNodes : []
        }

        function _e(e, t) {
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        }

        function Oe(e) {
            if (e instanceof Oe)return e;
            var t;
            if (C(e) && (e = Gr(e), t = !0), !(this instanceof Oe)) {
                if (t && "<" != e.charAt(0))throw vi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new Oe(e)
            }
            t ? Le(this, Ae(e)) : Le(this, e)
        }

        function Me(e) {
            return e.cloneNode(!0)
        }

        function Ne(e, t) {
            if (t || Ie(e), e.querySelectorAll)for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)Ie(n[r])
        }

        function je(e, t, n, r) {
            if (b(r))throw vi("offargs", "jqLite#off() does not support the `selector` argument");
            var i = Pe(e), a = i && i.events, s = i && i.handle;
            if (s)if (t) {
                var u = function (t) {
                    var r = a[t];
                    b(n) && q(r || [], n), b(n) && r && r.length > 0 || (pi(e, t, s), delete a[t])
                };
                o(t.split(" "), function (e) {
                    u(e), gi[e] && u(gi[e])
                })
            } else for (t in a)"$destroy" !== t && pi(e, t, s), delete a[t]
        }

        function Ie(e, t) {
            var r = e.ng339, i = r && li[r];
            if (i) {
                if (t)return void delete i.data[t];
                i.handle && (i.events.$destroy && i.handle({}, "$destroy"), je(e)), delete li[r], e.ng339 = n
            }
        }

        function Pe(e, t) {
            var r = e.ng339, i = r && li[r];
            return t && !i && (e.ng339 = r = xe(), i = li[r] = {events: {}, data: {}, handle: n}), i
        }

        function Re(e, t, n) {
            if (Te(e)) {
                var r = b(n), i = !r && t && !w(t), o = !t, a = Pe(e, !i), s = a && a.data;
                if (r)s[t] = n; else {
                    if (o)return s;
                    if (i)return s && s[t];
                    f(s, t)
                }
            }
        }

        function Fe(e, t) {
            return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
        }

        function Ue(e, t) {
            t && e.setAttribute && o(t.split(" "), function (t) {
                e.setAttribute("class", Gr((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Gr(t) + " ", " ")))
            })
        }

        function qe(e, t) {
            if (t && e.setAttribute) {
                var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                o(t.split(" "), function (e) {
                    e = Gr(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
                }), e.setAttribute("class", Gr(n))
            }
        }

        function Le(e, t) {
            if (t)if (t.nodeType)e[e.length++] = t; else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)for (var r = 0; n > r; r++)e[e.length++] = t[r]
                } else e[e.length++] = t
            }
        }

        function Ve(e, t) {
            return He(e, "$" + (t || "ngController") + "Controller")
        }

        function He(e, t, n) {
            e.nodeType == ai && (e = e.documentElement);
            for (var r = zr(t) ? t : [t]; e;) {
                for (var i = 0, o = r.length; o > i; i++)if (b(n = Ir.data(e, r[i])))return n;
                e = e.parentNode || e.nodeType === si && e.host
            }
        }

        function Be(e) {
            for (Ne(e, !0); e.firstChild;)e.removeChild(e.firstChild)
        }

        function We(e, t) {
            t || Ne(e);
            var n = e.parentNode;
            n && n.removeChild(e)
        }

        function ze(t, n) {
            n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : Ir(n).on("load", t)
        }

        function Ye(e, t) {
            var n = ki[t.toLowerCase()];
            return n && Ti[U(e)] && n
        }

        function Ge(e) {
            return Si[e]
        }

        function Ke(e, t) {
            var n = function (n, r) {
                n.isDefaultPrevented = function () {
                    return n.defaultPrevented
                };
                var i = t[r || n.type], o = i ? i.length : 0;
                if (o) {
                    if (y(n.immediatePropagationStopped)) {
                        var a = n.stopImmediatePropagation;
                        n.stopImmediatePropagation = function () {
                            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                        }
                    }
                    n.isImmediatePropagationStopped = function () {
                        return n.immediatePropagationStopped === !0
                    };
                    var s = i.specialHandlerWrapper || Xe;
                    o > 1 && (i = V(i));
                    for (var u = 0; o > u; u++)n.isImmediatePropagationStopped() || s(e, n, i[u])
                }
            };
            return n.elem = e, n
        }

        function Xe(e, t, n) {
            n.call(e, t)
        }

        function Je(e, t, n) {
            var r = t.relatedTarget;
            r && (r === e || xi.call(e, r)) || n.call(e, t)
        }

        function Qe() {
            this.$get = function () {
                return f(Oe, {
                    hasClass: function (e, t) {
                        return e.attr && (e = e[0]), Fe(e, t)
                    }, addClass: function (e, t) {
                        return e.attr && (e = e[0]), qe(e, t)
                    }, removeClass: function (e, t) {
                        return e.attr && (e = e[0]), Ue(e, t)
                    }
                })
            }
        }

        function Ze(e, t) {
            var n = e && e.$$hashKey;
            if (n)return "function" == typeof n && (n = e.$$hashKey()), n;
            var r = typeof e;
            return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || u)() : r + ":" + e
        }

        function et(e, t) {
            if (t) {
                var n = 0;
                this.nextUid = function () {
                    return ++n
                }
            }
            o(e, this.put, this)
        }

        function tt(e) {
            var t = e.toString().replace(Mi, ""), n = t.match(Di) || t.match(Ai);
            return n
        }

        function nt(e) {
            var t = tt(e);
            return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function rt(e, t, n) {
            var r, i, a;
            if ("function" == typeof e) {
                if (!(r = e.$inject)) {
                    if (r = [], e.length) {
                        if (t)throw C(n) && n || (n = e.name || nt(e)), Ni("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                        i = tt(e), o(i[1].split(_i), function (e) {
                            e.replace(Oi, function (e, t, n) {
                                r.push(n)
                            })
                        })
                    }
                    e.$inject = r
                }
            } else zr(e) ? (a = e.length - 1, de(e[a], "fn"), r = e.slice(0, a)) : de(e, "fn", !0);
            return r
        }

        function it(e, t) {
            function r(e) {
                return function (t, n) {
                    return w(t) ? void o(t, s(e)) : e(t, n)
                }
            }

            function i(e, t) {
                if (he(e, "service"), (S(t) || zr(t)) && (t = k.instantiate(t)), !t.$get)throw Ni("pget", "Provider '{0}' must define $get factory method.", e);
                return x[e + v] = t
            }

            function a(e, t) {
                return function () {
                    var n = D.invoke(t, this);
                    if (y(n))throw Ni("undef", "Provider '{0}' must return a value from $get factory method.", e);
                    return n
                }
            }

            function u(e, t, n) {
                return i(e, {$get: n !== !1 ? a(e, t) : t})
            }

            function l(e, t) {
                return u(e, ["$injector", function (e) {
                    return e.instantiate(t)
                }])
            }

            function c(e, t) {
                return u(e, m(t), !1)
            }

            function f(e, t) {
                he(e, "constant"), x[e] = t, T[e] = t
            }

            function p(e, t) {
                var n = k.get(e + v), r = n.$get;
                n.$get = function () {
                    var e = D.invoke(r, n);
                    return D.invoke(t, null, {$delegate: e})
                }
            }

            function d(e) {
                pe(y(e) || zr(e), "modulesToLoad", "not an array");
                var t, n = [];
                return o(e, function (e) {
                    function r(e) {
                        var t, n;
                        for (t = 0, n = e.length; n > t; t++) {
                            var r = e[t], i = k.get(r[0]);
                            i[r[1]].apply(i, r[2])
                        }
                    }

                    if (!b.get(e)) {
                        b.put(e, !0);
                        try {
                            C(e) ? (t = Rr(e), n = n.concat(d(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : S(e) ? n.push(k.invoke(e)) : zr(e) ? n.push(k.invoke(e)) : de(e, "module")
                        } catch (i) {
                            throw zr(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Ni("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                        }
                    }
                }), n
            }

            function h(e, n) {
                function r(t, r) {
                    if (e.hasOwnProperty(t)) {
                        if (e[t] === g)throw Ni("cdep", "Circular dependency found: {0}", t + " <- " + $.join(" <- "));
                        return e[t]
                    }
                    try {
                        return $.unshift(t), e[t] = g, e[t] = n(t, r)
                    } catch (i) {
                        throw e[t] === g && delete e[t], i
                    } finally {
                        $.shift()
                    }
                }

                function i(e, n, i) {
                    for (var o = [], a = it.$$annotate(e, t, i), s = 0, u = a.length; u > s; s++) {
                        var l = a[s];
                        if ("string" != typeof l)throw Ni("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
                        o.push(n && n.hasOwnProperty(l) ? n[l] : r(l, i))
                    }
                    return o
                }

                function o(e) {
                    return 11 >= jr ? !1 : "function" == typeof e && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(e))
                }

                function a(e, t, n, r) {
                    "string" == typeof n && (r = n, n = null);
                    var a = i(e, n, r);
                    return zr(e) && (e = e[e.length - 1]), o(e) ? (a.unshift(null), new (Function.prototype.bind.apply(e, a))) : e.apply(t, a)
                }

                function s(e, t, n) {
                    var r = zr(e) ? e[e.length - 1] : e, o = i(e, t, n);
                    return o.unshift(null), new (Function.prototype.bind.apply(r, o))
                }

                return {
                    invoke: a, instantiate: s, get: r, annotate: it.$$annotate, has: function (t) {
                        return x.hasOwnProperty(t + v) || e.hasOwnProperty(t)
                    }
                }
            }

            t = t === !0;
            var g = {}, v = "Provider", $ = [], b = new et([], !0), x = {
                $provide: {
                    provider: r(i),
                    factory: r(u),
                    service: r(l),
                    value: r(c),
                    constant: r(f),
                    decorator: p
                }
            }, k = x.$injector = h(x, function (e, t) {
                throw Br.isString(t) && $.push(t), Ni("unpr", "Unknown provider: {0}", $.join(" <- "))
            }), T = {}, E = h(T, function (e, t) {
                var r = k.get(e + v, t);
                return D.invoke(r.$get, r, n, e)
            }), D = E;
            x["$injector" + v] = {$get: m(E)};
            var A = d(e);
            return D = E.get("$injector"), D.strictDi = t, o(A, function (e) {
                e && D.invoke(e)
            }), D
        }

        function ot() {
            var e = !0;
            this.disableAutoScrolling = function () {
                e = !1
            }, this.$get = ["$window", "$location", "$rootScope", function (t, n, r) {
                function i(e) {
                    var t = null;
                    return Array.prototype.some.call(e, function (e) {
                        return "a" === U(e) ? (t = e, !0) : void 0
                    }), t
                }

                function o() {
                    var e = s.yOffset;
                    if (S(e))e = e(); else if (R(e)) {
                        var n = e[0], r = t.getComputedStyle(n);
                        e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                    } else k(e) || (e = 0);
                    return e
                }

                function a(e) {
                    if (e) {
                        e.scrollIntoView();
                        var n = o();
                        if (n) {
                            var r = e.getBoundingClientRect().top;
                            t.scrollBy(0, r - n)
                        }
                    } else t.scrollTo(0, 0)
                }

                function s(e) {
                    e = C(e) ? e : n.hash();
                    var t;
                    e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
                }

                var u = t.document;
                return e && r.$watch(function () {
                    return n.hash()
                }, function (e, t) {
                    e === t && "" === e || ze(function () {
                        r.$evalAsync(s)
                    })
                }), s
            }]
        }

        function at(e, t) {
            return e || t ? e ? t ? (zr(e) && (e = e.join(" ")), zr(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function st(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType === Ii)return n
            }
        }

        function ut(e) {
            C(e) && (e = e.split(" "));
            var t = me();
            return o(e, function (e) {
                e.length && (t[e] = !0)
            }), t
        }

        function lt(e) {
            return w(e) ? e : {}
        }

        function ct(e, t, n, r) {
            function i(e) {
                try {
                    e.apply(null, W(arguments, 1))
                } finally {
                    if ($--, 0 === $)for (; b.length;)try {
                        b.pop()()
                    } catch (t) {
                        n.error(t)
                    }
                }
            }

            function a(e) {
                var t = e.indexOf("#");
                return -1 === t ? "" : e.substr(t)
            }

            function s() {
                T = null, l(), c()
            }

            function u() {
                try {
                    return d.state
                } catch (e) {
                }
            }

            function l() {
                w = u(), w = y(w) ? null : w, H(w, D) && (w = D), D = w
            }

            function c() {
                C === f.url() && x === w || (C = f.url(), x = w, o(S, function (e) {
                    e(f.url(), w)
                }))
            }

            var f = this, p = (t[0], e.location), d = e.history, h = e.setTimeout, v = e.clearTimeout, m = {};
            f.isMock = !1;
            var $ = 0, b = [];
            f.$$completeOutstandingRequest = i, f.$$incOutstandingRequestCount = function () {
                $++
            }, f.notifyWhenNoOutstandingRequests = function (e) {
                0 === $ ? e() : b.push(e)
            };
            var w, x, C = p.href, k = t.find("base"), T = null;
            l(), x = w, f.url = function (t, n, i) {
                if (y(i) && (i = null), p !== e.location && (p = e.location), d !== e.history && (d = e.history), t) {
                    var o = x === i;
                    if (C === t && (!r.history || o))return f;
                    var s = C && Lt(C) === Lt(t);
                    return C = t, x = i, !r.history || s && o ? (s && !T || (T = t), n ? p.replace(t) : s ? p.hash = a(t) : p.href = t, p.href !== t && (T = t)) : (d[n ? "replaceState" : "pushState"](i, "", t), l(), x = w), f
                }
                return T || p.href.replace(/%27/g, "'")
            }, f.state = function () {
                return w
            };
            var S = [], E = !1, D = null;
            f.onUrlChange = function (t) {
                return E || (r.history && Ir(e).on("popstate", s), Ir(e).on("hashchange", s), E = !0), S.push(t), t
            }, f.$$applicationDestroyed = function () {
                Ir(e).off("hashchange popstate", s)
            }, f.$$checkUrlChange = c, f.baseHref = function () {
                var e = k.attr("href");
                return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            }, f.defer = function (e, t) {
                var n;
                return $++, n = h(function () {
                    delete m[n], i(e)
                }, t || 0), m[n] = !0, n
            }, f.defer.cancel = function (e) {
                return m[e] ? (delete m[e], v(e), i(g), !0) : !1
            }
        }

        function ft() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, r) {
                return new ct(e, r, t, n)
            }]
        }

        function pt() {
            this.$get = function () {
                function e(e, n) {
                    function i(e) {
                        e != p && (d ? d == e && (d = e.n) : d = e, o(e.n, e.p), o(e, p), p = e, p.n = null)
                    }

                    function o(e, t) {
                        e != t && (e && (e.p = t), t && (t.n = e))
                    }

                    if (e in t)throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                    var a = 0, s = f({}, n, {id: e}), u = me(), l = n && n.capacity || Number.MAX_VALUE, c = me(), p = null, d = null;
                    return t[e] = {
                        put: function (e, t) {
                            if (!y(t)) {
                                if (l < Number.MAX_VALUE) {
                                    var n = c[e] || (c[e] = {key: e});
                                    i(n)
                                }
                                return e in u || a++, u[e] = t, a > l && this.remove(d.key), t
                            }
                        }, get: function (e) {
                            if (l < Number.MAX_VALUE) {
                                var t = c[e];
                                if (!t)return;
                                i(t)
                            }
                            return u[e]
                        }, remove: function (e) {
                            if (l < Number.MAX_VALUE) {
                                var t = c[e];
                                if (!t)return;
                                t == p && (p = t.p), t == d && (d = t.n), o(t.n, t.p), delete c[e]
                            }
                            e in u && (delete u[e], a--)
                        }, removeAll: function () {
                            u = me(), a = 0, c = me(), p = d = null
                        }, destroy: function () {
                            u = null, s = null, c = null, delete t[e]
                        }, info: function () {
                            return f({}, s, {size: a})
                        }
                    }
                }

                var t = {};
                return e.info = function () {
                    var e = {};
                    return o(t, function (t, n) {
                        e[n] = t.info()
                    }), e
                }, e.get = function (e) {
                    return t[e]
                }, e
            }
        }

        function dt() {
            this.$get = ["$cacheFactory", function (e) {
                return e("templates")
            }]
        }

        function ht(e, r) {
            function i(e, t, n) {
                var r = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, i = {};
                return o(e, function (e, o) {
                    var a = e.match(r);
                    if (!a)throw Hi("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {mode: a[1][0], collection: "*" === a[2], optional: "?" === a[3], attrName: a[4] || o}
                }), i
            }

            function a(e, t) {
                var n = {isolateScope: null, bindToController: null};
                if (w(e.scope) && (e.bindToController === !0 ? (n.bindToController = i(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = i(e.scope, t, !1)), w(e.bindToController) && (n.bindToController = i(e.bindToController, t, !0)), w(n.bindToController)) {
                    var r = e.controller, o = e.controllerAs;
                    if (!r)throw Hi("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                    if (!$t(r, o))throw Hi("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
                }
                return n
            }

            function u(e) {
                var t = e.charAt(0);
                if (!t || t !== _r(t))throw Hi("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", e);
                if (e !== e.trim())throw Hi("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
            }

            var l = {}, c = "Directive", p = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, d = /(([\w\-]+)(?:\:([^;]+))?;?)/, $ = F("ngSrc,ngSrcset,src,srcset"), x = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, k = /^(on[a-z]+|formaction)$/;
            this.directive = function E(t, n) {
                return he(t, "directive"), C(t) ? (u(t), pe(n, "directiveFactory"), l.hasOwnProperty(t) || (l[t] = [], e.factory(t + c, ["$injector", "$exceptionHandler", function (e, n) {
                    var r = [];
                    return o(l[t], function (i, o) {
                        try {
                            var s = e.invoke(i);
                            S(s) ? s = {compile: m(s)} : !s.compile && s.link && (s.compile = m(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || t, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA";
                            var u = s.$$bindings = a(s, s.name);
                            w(u.isolateScope) && (s.$$isolateBindings = u.isolateScope), s.$$moduleName = i.$$moduleName, r.push(s)
                        } catch (l) {
                            n(l)
                        }
                    }), r
                }])), l[t].push(n)) : o(t, s(E)), this
            }, this.component = function (e, t) {
                function n(e) {
                    function n(t) {
                        return S(t) || zr(t) ? function (n, r) {
                            return e.invoke(t, this, {$element: n, $attrs: r})
                        } : t
                    }

                    var i = t.template || t.templateUrl ? t.template : "";
                    return {
                        controller: r,
                        controllerAs: $t(t.controller) || t.controllerAs || "$ctrl",
                        template: n(i),
                        templateUrl: n(t.templateUrl),
                        transclude: t.transclude,
                        scope: {},
                        bindToController: t.bindings || {},
                        restrict: "E",
                        require: t.require
                    }
                }

                var r = t.controller || function () {
                    };
                return o(t, function (e, t) {
                    "$" === t.charAt(0) && (n[t] = e)
                }), n.$inject = ["$injector"], this.directive(e, n)
            }, this.aHrefSanitizationWhitelist = function (e) {
                return b(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function (e) {
                return b(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
            };
            var T = !0;
            this.debugInfoEnabled = function (e) {
                return b(e) ? (T = e, this) : T
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (e, r, i, a, s, u, m, b, E, D) {
                function _(e, t, n) {
                    le.innerHTML = "<span " + t + ">";
                    var r = le.firstChild.attributes, i = r[0];
                    r.removeNamedItem(i.name), i.value = n, e.attributes.setNamedItem(i)
                }

                function O(e, t) {
                    try {
                        e.addClass(t)
                    } catch (n) {
                    }
                }

                function M(e, n, r, i, o) {
                    e instanceof Ir || (e = Ir(e));
                    for (var a = /\S+/, s = 0, u = e.length; u > s; s++) {
                        var l = e[s];
                        l.nodeType === ii && l.nodeValue.match(a) && _e(l, e[s] = t.createElement("span"))
                    }
                    var c = I(e, n, e, r, i, o);
                    M.$$addScopeClass(e);
                    var f = null;
                    return function (t, n, r) {
                        pe(t, "scope"), o && o.needsNewScope && (t = t.$parent.$new()), r = r || {};
                        var i = r.parentBoundTranscludeFn, a = r.transcludeControllers, s = r.futureParentElement;
                        i && i.$$boundTransclude && (i = i.$$boundTransclude), f || (f = j(s));
                        var u;
                        if (u = "html" !== f ? Ir(te(f, Ir("<div>").append(e).html())) : n ? Ci.clone.call(e) : e, a)for (var l in a)u.data("$" + l + "Controller", a[l].instance);
                        return M.$$addScopeInfo(u, t), n && n(u, t), c && c(t, u, u, i), u
                    }
                }

                function j(e) {
                    var t = e && e[0];
                    return t && "foreignobject" !== U(t) && Lr.call(t).match(/SVG/) ? "svg" : "html"
                }

                function I(e, t, r, i, o, a) {
                    function s(e, r, i, o) {
                        var a, s, u, l, c, f, p, d, v;
                        if (h) {
                            var m = r.length;
                            for (v = new Array(m), c = 0; c < g.length; c += 3)p = g[c], v[p] = r[p]
                        } else v = r;
                        for (c = 0, f = g.length; f > c;)u = v[g[c++]], a = g[c++], s = g[c++], a ? (a.scope ? (l = e.$new(), M.$$addScopeInfo(Ir(u), l)) : l = e, d = a.transcludeOnThisElement ? P(e, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && t ? P(e, t) : null, a(s, l, u, i, d)) : s && s(e, u.childNodes, n, o)
                    }

                    for (var u, l, c, f, p, d, h, g = [], v = 0; v < e.length; v++)u = new fe, l = R(e[v], [], u, 0 === v ? i : n, o), c = l.length ? B(l, e[v], u, t, r, null, [], [], a) : null, c && c.scope && M.$$addScopeClass(u.$$element), p = c && c.terminal || !(f = e[v].childNodes) || !f.length ? null : I(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), (c || p) && (g.push(v, c, p), d = !0, h = h || c), a = null;
                    return d ? s : null
                }

                function P(e, t, n) {
                    var r = function (r, i, o, a, s) {
                        return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
                            parentBoundTranscludeFn: n,
                            transcludeControllers: o,
                            futureParentElement: a
                        })
                    }, i = r.$$slots = me();
                    for (var o in t.$$slots)t.$$slots[o] ? i[o] = P(e, t.$$slots[o], n) : i[o] = null;
                    return r
                }

                function R(e, t, n, r, i) {
                    var o, a, s = e.nodeType, u = n.$attr;
                    switch (s) {
                        case ni:
                            Y(t, gt(U(e)), "E", r, i);
                            for (var l, c, f, h, g, v, m = e.attributes, $ = 0, y = m && m.length; y > $; $++) {
                                var b = !1, x = !1;
                                l = m[$], c = l.name, g = Gr(l.value), h = gt(c), (v = ve.test(h)) && (c = c.replace(Bi, "").substr(8).replace(/_(.)/g, function (e, t) {
                                    return t.toUpperCase()
                                }));
                                var k = h.match($e);
                                k && G(k[1]) && (b = c, x = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)), f = gt(c.toLowerCase()), u[f] = c, !v && n.hasOwnProperty(f) || (n[f] = g, Ye(e, f) && (n[f] = !0)), re(e, t, g, f, v), Y(t, f, "A", r, i, b, x)
                            }
                            if (a = e.className, w(a) && (a = a.animVal), C(a) && "" !== a)for (; o = d.exec(a);)f = gt(o[2]), Y(t, f, "C", r, i) && (n[f] = Gr(o[3])), a = a.substr(o.index + o[0].length);
                            break;
                        case ii:
                            if (11 === jr)for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === ii;)e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                            ee(t, e.nodeValue);
                            break;
                        case oi:
                            try {
                                o = p.exec(e.nodeValue), o && (f = gt(o[1]), Y(t, f, "M", r, i) && (n[f] = Gr(o[2])))
                            } catch (T) {
                            }
                    }
                    return t.sort(J), t
                }

                function F(e, t, n) {
                    var r = [], i = 0;
                    if (t && e.hasAttribute && e.hasAttribute(t)) {
                        do {
                            if (!e)throw Hi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                            e.nodeType == ni && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                        } while (i > 0)
                    } else r.push(e);
                    return Ir(r)
                }

                function L(e, t, n) {
                    return function (r, i, o, a, s) {
                        return i = F(i[0], t, n), e(r, i, o, a, s)
                    }
                }

                function V(e, t, n, r, i, o) {
                    if (e)return M(t, n, r, i, o);
                    var a;
                    return function () {
                        return a || (a = M(t, n, r, i, o), t = n = o = null), a.apply(this, arguments)
                    }
                }

                function B(e, r, a, s, l, c, p, d, h) {
                    function g(e, t, n, r) {
                        e && (n && (e = L(e, n, r)), e.require = b.require, e.directiveName = k, (j === b || b.$$isolateScope) && (e = oe(e, {isolateScope: !0})), p.push(e)), t && (n && (t = L(t, n, r)), t.require = b.require, t.directiveName = k, (j === b || b.$$isolateScope) && (t = oe(t, {isolateScope: !0})), d.push(t))
                    }

                    function v(e, t, n, r) {
                        var i;
                        if (C(t)) {
                            var a = t.match(x), s = t.substring(a[0].length), u = a[1] || a[3], l = "?" === a[2];
                            if ("^^" === u ? n = n.parent() : (i = r && r[s], i = i && i.instance), !i) {
                                var c = "$" + s + "Controller";
                                i = u ? n.inheritedData(c) : n.data(c)
                            }
                            if (!i && !l)throw Hi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", s, e)
                        } else if (zr(t)) {
                            i = [];
                            for (var f = 0, p = t.length; p > f; f++)i[f] = v(e, t[f], n, r)
                        } else w(t) && (i = {}, o(t, function (t, o) {
                            i[o] = v(e, t, n, r)
                        }));
                        return i || null
                    }

                    function m(e, t, n, r, i, o) {
                        var a = me();
                        for (var s in r) {
                            var l = r[s], c = {
                                $scope: l === j || l.$$isolateScope ? i : o,
                                $element: e,
                                $attrs: t,
                                $transclude: n
                            }, f = l.controller;
                            "@" == f && (f = t[l.name]);
                            var p = u(f, c, !0, l.controllerAs);
                            a[l.name] = p, B || e.data("$" + l.name + "Controller", p.instance)
                        }
                        return a
                    }

                    function $(e, t, i, s, u) {
                        function l(e, t, r, i) {
                            var o;
                            if (A(e) || (i = r, r = t, t = e, e = n), B && (o = x), r || (r = B ? k.parent() : k), !i)return u(e, t, o, r, q);
                            var a = u.$$slots[i];
                            if (a)return a(e, t, o, r, q);
                            if (y(a))throw Hi("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', i, Z(k))
                        }

                        var c, h, g, $, b, x, C, k, T, E, D;
                        r === i ? (T = a, k = a.$$element) : (k = Ir(i), T = new fe(k, a)), b = t, j ? $ = t.$new(!0) : O && (b = t.$parent), u && (C = l, C.$$boundTransclude = u, C.isSlotFilled = function (e) {
                            return !!u.$$slots[e]
                        }), N && (x = m(k, T, C, N, $, t)), j && (M.$$addScopeInfo(k, $, !0, !(I && (I === j || I === j.$$originalDirective))), M.$$addScopeClass(k, !0), $.$$isolateBindings = j.$$isolateBindings, E = se(t, T, $, $.$$isolateBindings, j), E && $.$on("$destroy", E));
                        for (var _ in x) {
                            var P = N[_], R = x[_], F = P.$$bindings.bindToController;
                            R.identifier && F && (D = se(b, T, R.instance, F, P));
                            var U = R();
                            U !== R.instance && (R.instance = U, k.data("$" + P.name + "Controller", U), D && D(), D = se(b, T, R.instance, F, P))
                        }
                        for (o(N, function (e, t) {
                            var n = e.require;
                            e.bindToController && !zr(n) && w(n) && f(x[t].instance, v(t, n, k, x))
                        }), o(x, function (e) {
                            S(e.instance.$onInit) && e.instance.$onInit()
                        }), c = 0, h = p.length; h > c; c++)g = p[c], ae(g, g.isolateScope ? $ : t, k, T, g.require && v(g.directiveName, g.require, k, x), C);
                        var q = t;
                        for (j && (j.template || null === j.templateUrl) && (q = $), e && e(q, i.childNodes, n, u), c = d.length - 1; c >= 0; c--)g = d[c], ae(g, g.isolateScope ? $ : t, k, T, g.require && v(g.directiveName, g.require, k, x), C)
                    }

                    h = h || {};
                    for (var b, k, T, E, D, _ = -Number.MAX_VALUE, O = h.newScopeDirective, N = h.controllerDirectives, j = h.newIsolateScopeDirective, I = h.templateDirective, P = h.nonTlbTranscludeDirective, q = !1, H = !1, B = h.hasElementTranscludeDirective, Y = a.$$element = Ir(r), G = c, J = s, ee = !1, ne = !1, re = 0, ue = e.length; ue > re; re++) {
                        b = e[re];
                        var le = b.$$start, ce = b.$$end;
                        if (le && (Y = F(r, le, ce)), T = n, _ > b.priority)break;
                        if ((D = b.scope) && (b.templateUrl || (w(D) ? (Q("new/isolated scope", j || O, b, Y), j = b) : Q("new/isolated scope", j, b, Y)), O = O || b), k = b.name, !ee && (b.replace && (b.templateUrl || b.template) || b.transclude && !b.$$tlb)) {
                            for (var pe, de = re + 1; pe = e[de++];)if (pe.transclude && !pe.$$tlb || pe.replace && (pe.templateUrl || pe.template)) {
                                ne = !0;
                                break
                            }
                            ee = !0
                        }
                        if (!b.templateUrl && b.controller && (D = b.controller, N = N || me(), Q("'" + k + "' controller", N[k], b, Y), N[k] = b), D = b.transclude)if (q = !0, b.$$tlb || (Q("transclusion", P, b, Y), P = b), "element" == D)B = !0, _ = b.priority, T = Y, Y = a.$$element = Ir(t.createComment(" " + k + ": " + a[k] + " ")), r = Y[0], ie(l, W(T), r), J = V(ne, T, s, _, G && G.name, {nonTlbTranscludeDirective: P}); else {
                            var he = me();
                            if (T = Ir(Me(r)).contents(), w(D)) {
                                T = [];
                                var ve = me(), $e = me();
                                o(D, function (e, t) {
                                    var n = "?" === e.charAt(0);
                                    e = n ? e.substring(1) : e, ve[e] = t, he[t] = null, $e[t] = n
                                }), o(Y.contents(), function (e) {
                                    var t = ve[gt(U(e))];
                                    t ? ($e[t] = !0, he[t] = he[t] || [], he[t].push(e)) : T.push(e)
                                }), o($e, function (e, t) {
                                    if (!e)throw Hi("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                                });
                                for (var ye in he)he[ye] && (he[ye] = V(ne, he[ye], s))
                            }
                            Y.empty(), J = V(ne, T, s, n, n, {needsNewScope: b.$$isolateScope || b.$$newScope}), J.$$slots = he
                        }
                        if (b.template)if (H = !0, Q("template", I, b, Y), I = b, D = S(b.template) ? b.template(Y, a) : b.template, D = ge(D), b.replace) {
                            if (G = b, T = ke(D) ? [] : mt(te(b.templateNamespace, Gr(D))), r = T[0], 1 != T.length || r.nodeType !== ni)throw Hi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", k, "");
                            ie(l, Y, r);
                            var be = {$attr: {}}, we = R(r, [], be), xe = e.splice(re + 1, e.length - (re + 1));
                            (j || O) && z(we, j, O), e = e.concat(we).concat(xe), K(a, be), ue = e.length
                        } else Y.html(D);
                        if (b.templateUrl)H = !0, Q("template", I, b, Y), I = b, b.replace && (G = b), $ = X(e.splice(re, e.length - re), Y, a, l, q && J, p, d, {
                            controllerDirectives: N,
                            newScopeDirective: O !== b && O,
                            newIsolateScopeDirective: j,
                            templateDirective: I,
                            nonTlbTranscludeDirective: P
                        }), ue = e.length; else if (b.compile)try {
                            E = b.compile(Y, a, J), S(E) ? g(null, E, le, ce) : E && g(E.pre, E.post, le, ce)
                        } catch (Ce) {
                            i(Ce, Z(Y))
                        }
                        b.terminal && ($.terminal = !0, _ = Math.max(_, b.priority))
                    }
                    return $.scope = O && O.scope === !0, $.transcludeOnThisElement = q, $.templateOnThisElement = H, $.transclude = J, h.hasElementTranscludeDirective = B, $
                }

                function z(e, t, n) {
                    for (var r = 0, i = e.length; i > r; r++)e[r] = h(e[r], {$$isolateScope: t, $$newScope: n})
                }

                function Y(t, n, r, o, a, s, u) {
                    if (n === a)return null;
                    var f = null;
                    if (l.hasOwnProperty(n))for (var p, d = e.get(n + c), g = 0, v = d.length; v > g; g++)try {
                        p = d[g], (y(o) || o > p.priority) && -1 != p.restrict.indexOf(r) && (s && (p = h(p, {
                            $$start: s,
                            $$end: u
                        })), t.push(p), f = p)
                    } catch (m) {
                        i(m)
                    }
                    return f
                }

                function G(t) {
                    if (l.hasOwnProperty(t))for (var n, r = e.get(t + c), i = 0, o = r.length; o > i; i++)if (n = r[i], n.multiElement)return !0;
                    return !1
                }

                function K(e, t) {
                    var n = t.$attr, r = e.$attr, i = e.$$element;
                    o(e, function (r, i) {
                        "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                    }), o(t, function (t, o) {
                        "class" == o ? (O(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
                    })
                }

                function X(e, t, n, r, i, s, u, l) {
                    var c, f, p = [], d = t[0], g = e.shift(), v = h(g, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: g
                    }), m = S(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl, $ = g.templateNamespace;
                    return t.empty(), a(m).then(function (a) {
                        var h, y, b, x;
                        if (a = ge(a), g.replace) {
                            if (b = ke(a) ? [] : mt(te($, Gr(a))), h = b[0], 1 != b.length || h.nodeType !== ni)throw Hi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, m);
                            y = {$attr: {}}, ie(r, t, h);
                            var C = R(h, [], y);
                            w(g.scope) && z(C, !0), e = C.concat(e), K(n, y)
                        } else h = d, t.html(a);
                        for (e.unshift(v), c = B(e, h, n, i, t, g, s, u, l), o(r, function (e, n) {
                            e == h && (r[n] = t[0])
                        }), f = I(t[0].childNodes, i); p.length;) {
                            var k = p.shift(), T = p.shift(), S = p.shift(), E = p.shift(), D = t[0];
                            if (!k.$$destroyed) {
                                if (T !== d) {
                                    var A = T.className;
                                    l.hasElementTranscludeDirective && g.replace || (D = Me(h)), ie(S, Ir(T), D), O(Ir(D), A)
                                }
                                x = c.transcludeOnThisElement ? P(k, c.transclude, E) : E, c(f, k, D, r, x)
                            }
                        }
                        p = null
                    }), function (e, t, n, r, i) {
                        var o = i;
                        t.$$destroyed || (p ? p.push(t, n, r, o) : (c.transcludeOnThisElement && (o = P(t, c.transclude, i)), c(f, t, n, r, o)))
                    }
                }

                function J(e, t) {
                    var n = t.priority - e.priority;
                    return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
                }

                function Q(e, t, n, r) {
                    function i(e) {
                        return e ? " (module: " + e + ")" : ""
                    }

                    if (t)throw Hi("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, Z(r))
                }

                function ee(e, t) {
                    var n = r(t, !0);
                    n && e.push({
                        priority: 0, compile: function (e) {
                            var t = e.parent(), r = !!t.length;
                            return r && M.$$addBindingClass(t), function (e, t) {
                                var i = t.parent();
                                r || M.$$addBindingClass(i), M.$$addBindingInfo(i, n.expressions), e.$watch(n, function (e) {
                                    t[0].nodeValue = e
                                })
                            }
                        }
                    })
                }

                function te(e, n) {
                    switch (e = _r(e || "html")) {
                        case"svg":
                        case"math":
                            var r = t.createElement("div");
                            return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                        default:
                            return n
                    }
                }

                function ne(e, t) {
                    if ("srcdoc" == t)return b.HTML;
                    var n = U(e);
                    return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? b.RESOURCE_URL : void 0
                }

                function re(e, t, n, i, o) {
                    var a = ne(e, i);
                    o = $[i] || o;
                    var s = r(n, !0, a, o);
                    if (s) {
                        if ("multiple" === i && "select" === U(e))throw Hi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Z(e));
                        t.push({
                            priority: 100, compile: function () {
                                return {
                                    pre: function (e, t, u) {
                                        var l = u.$$observers || (u.$$observers = me());
                                        if (k.test(i))throw Hi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        var c = u[i];
                                        c !== n && (s = c && r(c, !0, a, o), n = c), s && (u[i] = s(e), (l[i] || (l[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || e).$watch(s, function (e, t) {
                                            "class" === i && e != t ? u.$updateClass(e, t) : u.$set(i, e)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function ie(e, n, r) {
                    var i, o, a = n[0], s = n.length, u = a.parentNode;
                    if (e)for (i = 0, o = e.length; o > i; i++)if (e[i] == a) {
                        e[i++] = r;
                        for (var l = i, c = l + s - 1, f = e.length; f > l; l++, c++)f > c ? e[l] = e[c] : delete e[l];
                        e.length -= s - 1, e.context === a && (e.context = r);
                        break
                    }
                    u && u.replaceChild(r, a);
                    var p = t.createDocumentFragment();
                    for (i = 0; s > i; i++)p.appendChild(n[i]);
                    for (Ir.hasData(a) && (Ir.data(r, Ir.data(a)), Ir(a).off("$destroy")), Ir.cleanData(p.querySelectorAll("*")), i = 1; s > i; i++)delete n[i];
                    n[0] = r, n.length = 1
                }

                function oe(e, t) {
                    return f(function () {
                        return e.apply(null, arguments)
                    }, e, t)
                }

                function ae(e, t, n, r, o, a) {
                    try {
                        e(t, n, r, o, a)
                    } catch (s) {
                        i(s, Z(n))
                    }
                }

                function se(e, t, n, i, a) {
                    var u = [];
                    return o(i, function (i, o) {
                        var l, c, f, p, d, h = i.attrName, v = i.optional, m = i.mode;
                        switch (m) {
                            case"@":
                                v || Ar.call(t, h) || (n[o] = t[h] = void 0), t.$observe(h, function (e) {
                                    C(e) && (n[o] = e)
                                }), t.$$observers[h].$$scope = e, l = t[h], C(l) ? n[o] = r(l)(e) : N(l) && (n[o] = l);
                                break;
                            case"=":
                                if (!Ar.call(t, h)) {
                                    if (v)break;
                                    t[h] = void 0
                                }
                                if (v && !t[h])break;
                                c = s(t[h]), p = c.literal ? H : function (e, t) {
                                    return e === t || e !== e && t !== t
                                }, f = c.assign || function () {
                                        throw l = n[o] = c(e), Hi("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[h], h, a.name)
                                    }, l = n[o] = c(e);
                                var $ = function (t) {
                                    return p(t, n[o]) || (p(t, l) ? f(e, t = n[o]) : n[o] = t), l = t
                                };
                                $.$stateful = !0, d = i.collection ? e.$watchCollection(t[h], $) : e.$watch(s(t[h], $), null, c.literal), u.push(d);
                                break;
                            case"<":
                                if (!Ar.call(t, h)) {
                                    if (v)break;
                                    t[h] = void 0
                                }
                                if (v && !t[h])break;
                                c = s(t[h]), n[o] = c(e), d = e.$watch(c, function (e) {
                                    n[o] = e
                                }, c.literal), u.push(d);
                                break;
                            case"&":
                                if (c = t.hasOwnProperty(h) ? s(t[h]) : g, c === g && v)break;
                                n[o] = function (t) {
                                    return c(e, t)
                                }
                        }
                    }), u.length && function () {
                        for (var e = 0, t = u.length; t > e; ++e)u[e]()
                    }
                }

                var ue = /^\w/, le = t.createElement("div"), fe = function (e, t) {
                    if (t) {
                        var n, r, i, o = Object.keys(t);
                        for (n = 0, r = o.length; r > n; n++)i = o[n], this[i] = t[i]
                    } else this.$attr = {};
                    this.$$element = e
                };
                fe.prototype = {
                    $normalize: gt, $addClass: function (e) {
                        e && e.length > 0 && E.addClass(this.$$element, e)
                    }, $removeClass: function (e) {
                        e && e.length > 0 && E.removeClass(this.$$element, e)
                    }, $updateClass: function (e, t) {
                        var n = vt(e, t);
                        n && n.length && E.addClass(this.$$element, n);
                        var r = vt(t, e);
                        r && r.length && E.removeClass(this.$$element, r)
                    }, $set: function (e, t, n, r) {
                        var a, s = this.$$element[0], u = Ye(s, e), l = Ge(e), c = e;
                        if (u ? (this.$$element.prop(e, t), r = u) : l && (this[l] = t, c = l), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e], r || (this.$attr[e] = r = ce(e, "-"))), a = U(this.$$element), "a" === a && ("href" === e || "xlinkHref" === e) || "img" === a && "src" === e)this[e] = t = D(t, "src" === e); else if ("img" === a && "srcset" === e) {
                            for (var f = "", p = Gr(t), d = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(p) ? d : /(,)/, g = p.split(h), v = Math.floor(g.length / 2), m = 0; v > m; m++) {
                                var $ = 2 * m;
                                f += D(Gr(g[$]), !0), f += " " + Gr(g[$ + 1])
                            }
                            var b = Gr(g[2 * m]).split(/\s/);
                            f += D(Gr(b[0]), !0), 2 === b.length && (f += " " + Gr(b[1])), this[e] = t = f
                        }
                        n !== !1 && (null === t || y(t) ? this.$$element.removeAttr(r) : ue.test(r) ? this.$$element.attr(r, t) : _(this.$$element[0], r, t));
                        var w = this.$$observers;
                        w && o(w[c], function (e) {
                            try {
                                e(t)
                            } catch (n) {
                                i(n)
                            }
                        })
                    }, $observe: function (e, t) {
                        var n = this, r = n.$$observers || (n.$$observers = me()), i = r[e] || (r[e] = []);
                        return i.push(t), m.$evalAsync(function () {
                            i.$$inter || !n.hasOwnProperty(e) || y(n[e]) || t(n[e])
                        }), function () {
                            q(i, t)
                        }
                    }
                };
                var de = r.startSymbol(), he = r.endSymbol(), ge = "{{" == de && "}}" == he ? v : function (e) {
                    return e.replace(/\{\{/g, de).replace(/}}/g, he)
                }, ve = /^ngAttr[A-Z]/, $e = /^(.+)Start$/;
                return M.$$addBindingInfo = T ? function (e, t) {
                    var n = e.data("$binding") || [];
                    zr(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
                } : g, M.$$addBindingClass = T ? function (e) {
                    O(e, "ng-binding")
                } : g, M.$$addScopeInfo = T ? function (e, t, n, r) {
                    var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    e.data(i, t)
                } : g, M.$$addScopeClass = T ? function (e, t) {
                    O(e, t ? "ng-isolate-scope" : "ng-scope")
                } : g, M
            }]
        }

        function gt(e) {
            return Ce(e.replace(Bi, ""))
        }

        function vt(e, t) {
            var n = "", r = e.split(/\s+/), i = t.split(/\s+/);
            e:for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++)if (a == i[s])continue e;
                n += (n.length > 0 ? " " : "") + a
            }
            return n
        }

        function mt(e) {
            e = Ir(e);
            var t = e.length;
            if (1 >= t)return e;
            for (; t--;) {
                var n = e[t];
                n.nodeType === oi && Ur.call(e, t, 1)
            }
            return e
        }

        function $t(e, t) {
            if (t && C(t))return t;
            if (C(e)) {
                var n = zi.exec(e);
                if (n)return n[3]
            }
        }

        function yt() {
            var e = {}, t = !1;
            this.register = function (t, n) {
                he(t, "controller"), w(t) ? f(e, t) : e[t] = n
            }, this.allowGlobals = function () {
                t = !0
            }, this.$get = ["$injector", "$window", function (i, o) {
                function a(e, t, n, i) {
                    if (!e || !w(e.$scope))throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                    e.$scope[t] = n
                }

                return function (r, s, u, l) {
                    var c, p, d, h;
                    if (u = u === !0, l && C(l) && (h = l), C(r)) {
                        if (p = r.match(zi), !p)throw Wi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                        d = p[1], h = h || p[3], r = e.hasOwnProperty(d) ? e[d] : ge(s.$scope, d, !0) || (t ? ge(o, d, !0) : n), de(r, d, !0)
                    }
                    if (u) {
                        var g = (zr(r) ? r[r.length - 1] : r).prototype;
                        c = Object.create(g || null), h && a(s, h, c, d || r.name);
                        var v;
                        return v = f(function () {
                            var e = i.invoke(r, c, s, d);
                            return e !== c && (w(e) || S(e)) && (c = e, h && a(s, h, c, d || r.name)), c
                        }, {instance: c, identifier: h})
                    }
                    return c = i.instantiate(r, s, d), h && a(s, h, c, d || r.name), c
                }
            }]
        }

        function bt() {
            this.$get = ["$window", function (e) {
                return Ir(e.document)
            }]
        }

        function wt() {
            this.$get = ["$log", function (e) {
                return function (t, n) {
                    e.error.apply(e, arguments)
                }
            }]
        }

        function xt(e) {
            return w(e) ? T(e) ? e.toISOString() : G(e) : e
        }

        function Ct() {
            this.$get = function () {
                return function (e) {
                    if (!e)return "";
                    var t = [];
                    return a(e, function (e, n) {
                        null === e || y(e) || (zr(e) ? o(e, function (e, r) {
                            t.push(ie(n) + "=" + ie(xt(e)))
                        }) : t.push(ie(n) + "=" + ie(xt(e))))
                    }), t.join("&")
                }
            }
        }

        function kt() {
            this.$get = function () {
                return function (e) {
                    function t(e, r, i) {
                        null === e || y(e) || (zr(e) ? o(e, function (e, n) {
                            t(e, r + "[" + (w(e) ? n : "") + "]")
                        }) : w(e) && !T(e) ? a(e, function (e, n) {
                            t(e, r + (i ? "" : "[") + n + (i ? "" : "]"))
                        }) : n.push(ie(r) + "=" + ie(xt(e))))
                    }

                    if (!e)return "";
                    var n = [];
                    return t(e, "", !0), n.join("&")
                }
            }
        }

        function Tt(e, t) {
            if (C(e)) {
                var n = e.replace(Qi, "").trim();
                if (n) {
                    var r = t("Content-Type");
                    (r && 0 === r.indexOf(Gi) || St(n)) && (e = K(n))
                }
            }
            return e
        }

        function St(e) {
            var t = e.match(Xi);
            return t && Ji[t[0]].test(e)
        }

        function Et(e) {
            function t(e, t) {
                e && (r[e] = r[e] ? r[e] + ", " + t : t)
            }

            var n, r = me();
            return C(e) ? o(e.split("\n"), function (e) {
                n = e.indexOf(":"), t(_r(Gr(e.substr(0, n))), Gr(e.substr(n + 1)))
            }) : w(e) && o(e, function (e, n) {
                t(_r(n), Gr(e))
            }), r
        }

        function Dt(e) {
            var t;
            return function (n) {
                if (t || (t = Et(e)), n) {
                    var r = t[_r(n)];
                    return void 0 === r && (r = null), r
                }
                return t
            }
        }

        function At(e, t, n, r) {
            return S(r) ? r(e, t, n) : (o(r, function (r) {
                e = r(e, t, n)
            }), e)
        }

        function _t(e) {
            return e >= 200 && 300 > e
        }

        function Ot() {
            var e = this.defaults = {
                transformResponse: [Tt],
                transformRequest: [function (e) {
                    return !w(e) || _(e) || M(e) || O(e) ? e : G(e)
                }],
                headers: {common: {Accept: "application/json, text/plain, */*"}, post: V(Ki), put: V(Ki), patch: V(Ki)},
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            }, t = !1;
            this.useApplyAsync = function (e) {
                return b(e) ? (t = !!e, this) : t
            };
            var i = !0;
            this.useLegacyPromiseExtensions = function (e) {
                return b(e) ? (i = !!e, this) : i
            };
            var a = this.interceptors = [];
            this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (s, u, l, c, p, d) {
                function h(t) {
                    function a(e) {
                        var t = f({}, e);
                        return t.data = At(e.data, e.headers, e.status, l.transformResponse), _t(e.status) ? t : p.reject(t)
                    }

                    function s(e, t) {
                        var n, r = {};
                        return o(e, function (e, i) {
                            S(e) ? (n = e(t), null != n && (r[i] = n)) : r[i] = e
                        }), r
                    }

                    function u(t) {
                        var n, r, i, o = e.headers, a = f({}, t.headers);
                        o = f({}, o.common, o[_r(t.method)]);
                        e:for (n in o) {
                            r = _r(n);
                            for (i in a)if (_r(i) === r)continue e;
                            a[n] = o[n]
                        }
                        return s(a, V(t))
                    }

                    if (!w(t))throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                    if (!C(t.url))throw r("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", t.url);
                    var l = f({
                        method: "get",
                        transformRequest: e.transformRequest,
                        transformResponse: e.transformResponse,
                        paramSerializer: e.paramSerializer
                    }, t);
                    l.headers = u(t), l.method = Or(l.method), l.paramSerializer = C(l.paramSerializer) ? d.get(l.paramSerializer) : l.paramSerializer;
                    var c = function (t) {
                        var r = t.headers, i = At(t.data, Dt(r), n, t.transformRequest);
                        return y(i) && o(r, function (e, t) {
                            "content-type" === _r(t) && delete r[t]
                        }), y(t.withCredentials) && !y(e.withCredentials) && (t.withCredentials = e.withCredentials), m(t, i).then(a, a)
                    }, h = [c, n], g = p.when(l);
                    for (o(k, function (e) {
                        (e.request || e.requestError) && h.unshift(e.request, e.requestError), (e.response || e.responseError) && h.push(e.response, e.responseError)
                    }); h.length;) {
                        var v = h.shift(), $ = h.shift();
                        g = g.then(v, $)
                    }
                    return i ? (g.success = function (e) {
                        return de(e, "fn"), g.then(function (t) {
                            e(t.data, t.status, t.headers, l)
                        }), g
                    }, g.error = function (e) {
                        return de(e, "fn"), g.then(null, function (t) {
                            e(t.data, t.status, t.headers, l)
                        }), g
                    }) : (g.success = eo("success"), g.error = eo("error")), g
                }

                function g(e) {
                    o(arguments, function (e) {
                        h[e] = function (t, n) {
                            return h(f({}, n || {}, {method: e, url: t}))
                        }
                    })
                }

                function v(e) {
                    o(arguments, function (e) {
                        h[e] = function (t, n, r) {
                            return h(f({}, r || {}, {method: e, url: t, data: n}))
                        }
                    })
                }

                function m(r, i) {
                    function o(e, n, r, i) {
                        function o() {
                            a(n, e, r, i)
                        }

                        d && (_t(e) ? d.put(k, [e, n, Et(r), i]) : d.remove(k)), t ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
                    }

                    function a(e, t, n, i) {
                        t = t >= -1 ? t : 0, (_t(t) ? v.resolve : v.reject)({
                            data: e,
                            status: t,
                            headers: Dt(n),
                            config: r,
                            statusText: i
                        })
                    }

                    function l(e) {
                        a(e.data, e.status, V(e.headers()), e.statusText)
                    }

                    function f() {
                        var e = h.pendingRequests.indexOf(r);
                        -1 !== e && h.pendingRequests.splice(e, 1)
                    }

                    var d, g, v = p.defer(), m = v.promise, C = r.headers, k = $(r.url, r.paramSerializer(r.params));
                    if (h.pendingRequests.push(r), m.then(f, f), !r.cache && !e.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (d = w(r.cache) ? r.cache : w(e.cache) ? e.cache : x), d && (g = d.get(k), b(g) ? j(g) ? g.then(l, l) : zr(g) ? a(g[1], g[0], V(g[2]), g[3]) : a(g, 200, {}, "OK") : d.put(k, m)), y(g)) {
                        var T = Nn(r.url) ? u()[r.xsrfCookieName || e.xsrfCookieName] : n;
                        T && (C[r.xsrfHeaderName || e.xsrfHeaderName] = T), s(r.method, k, i, o, C, r.timeout, r.withCredentials, r.responseType)
                    }
                    return m
                }

                function $(e, t) {
                    return t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
                }

                var x = l("$http");
                e.paramSerializer = C(e.paramSerializer) ? d.get(e.paramSerializer) : e.paramSerializer;
                var k = [];
                return o(a, function (e) {
                    k.unshift(C(e) ? d.get(e) : d.invoke(e))
                }), h.pendingRequests = [], g("get", "delete", "head", "jsonp"), v("post", "put", "patch"), h.defaults = e, h
            }]
        }

        function Mt() {
            this.$get = function () {
                return function () {
                    return new e.XMLHttpRequest
                }
            }
        }

        function Nt() {
            this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (e, t, n, r) {
                return jt(e, r, e.defer, t.angular.callbacks, n[0])
            }]
        }

        function jt(e, t, n, r, i) {
            function a(e, t, n) {
                var o = i.createElement("script"), a = null;
                return o.type = "text/javascript", o.src = e, o.async = !0, a = function (e) {
                    pi(o, "load", a), pi(o, "error", a), i.body.removeChild(o), o = null;
                    var s = -1, u = "unknown";
                    e && ("load" !== e.type || r[t].called || (e = {type: "error"}), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
                }, fi(o, "load", a), fi(o, "error", a), i.body.appendChild(o), a
            }

            return function (i, s, u, l, c, f, p, d) {
                function h() {
                    $ && $(), w && w.abort()
                }

                function v(t, r, i, o, a) {
                    b(k) && n.cancel(k), $ = w = null, t(r, i, o, a), e.$$completeOutstandingRequest(g)
                }

                if (e.$$incOutstandingRequestCount(), s = s || e.url(), "jsonp" == _r(i)) {
                    var m = "_" + (r.counter++).toString(36);
                    r[m] = function (e) {
                        r[m].data = e, r[m].called = !0
                    };
                    var $ = a(s.replace("JSON_CALLBACK", "angular.callbacks." + m), m, function (e, t) {
                        v(l, e, r[m].data, "", t), r[m] = g
                    })
                } else {
                    var w = t(i, s);
                    w.open(i, s, !0), o(c, function (e, t) {
                        b(e) && w.setRequestHeader(t, e)
                    }), w.onload = function () {
                        var e = w.statusText || "", t = "response" in w ? w.response : w.responseText, n = 1223 === w.status ? 204 : w.status;
                        0 === n && (n = t ? 200 : "file" == Mn(s).protocol ? 404 : 0), v(l, n, t, w.getAllResponseHeaders(), e)
                    };
                    var x = function () {
                        v(l, -1, null, null, "")
                    };
                    if (w.onerror = x, w.onabort = x, p && (w.withCredentials = !0), d)try {
                        w.responseType = d
                    } catch (C) {
                        if ("json" !== d)throw C
                    }
                    w.send(y(u) ? null : u)
                }
                if (f > 0)var k = n(h, f); else j(f) && f.then(h)
            }
        }

        function It() {
            var e = "{{", t = "}}";
            this.startSymbol = function (t) {
                return t ? (e = t, this) : e
            }, this.endSymbol = function (e) {
                return e ? (t = e, this) : t
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
                function o(e) {
                    return "\\\\\\" + e
                }

                function a(n) {
                    return n.replace(d, e).replace(h, t)
                }

                function s(e) {
                    if (null == e)return "";
                    switch (typeof e) {
                        case"string":
                            break;
                        case"number":
                            e = "" + e;
                            break;
                        default:
                            e = G(e)
                    }
                    return e
                }

                function u(e, t, n, r) {
                    var i;
                    return i = e.$watch(function (e) {
                        return i(), r(e)
                    }, t, n)
                }

                function l(o, l, d, h) {
                    function g(e) {
                        try {
                            return e = M(e), h && !b(e) ? e : s(e)
                        } catch (t) {
                            r(to.interr(o, t))
                        }
                    }

                    if (!o.length || -1 === o.indexOf(e)) {
                        var v;
                        if (!l) {
                            var $ = a(o);
                            v = m($), v.exp = o, v.expressions = [], v.$$watchDelegate = u
                        }
                        return v
                    }
                    h = !!h;
                    for (var w, x, C, k = 0, T = [], E = [], D = o.length, A = [], _ = []; D > k;) {
                        if (-1 == (w = o.indexOf(e, k)) || -1 == (x = o.indexOf(t, w + c))) {
                            k !== D && A.push(a(o.substring(k)));
                            break
                        }
                        k !== w && A.push(a(o.substring(k, w))), C = o.substring(w + c, x), T.push(C), E.push(n(C, g)), k = x + p, _.push(A.length), A.push("")
                    }
                    if (d && A.length > 1 && to.throwNoconcat(o), !l || T.length) {
                        var O = function (e) {
                            for (var t = 0, n = T.length; n > t; t++) {
                                if (h && y(e[t]))return;
                                A[_[t]] = e[t]
                            }
                            return A.join("")
                        }, M = function (e) {
                            return d ? i.getTrusted(d, e) : i.valueOf(e)
                        };
                        return f(function (e) {
                            var t = 0, n = T.length, i = new Array(n);
                            try {
                                for (; n > t; t++)i[t] = E[t](e);
                                return O(i)
                            } catch (a) {
                                r(to.interr(o, a))
                            }
                        }, {
                            exp: o, expressions: T, $$watchDelegate: function (e, t) {
                                var n;
                                return e.$watchGroup(E, function (r, i) {
                                    var o = O(r);
                                    S(t) && t.call(this, o, r !== i ? n : o, e), n = o
                                })
                            }
                        })
                    }
                }

                var c = e.length, p = t.length, d = new RegExp(e.replace(/./g, o), "g"), h = new RegExp(t.replace(/./g, o), "g");
                return l.startSymbol = function () {
                    return e
                }, l.endSymbol = function () {
                    return t
                }, l
            }]
        }

        function Pt() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (e, t, n, r, i) {
                function o(o, s, u, l) {
                    function c() {
                        f ? o.apply(null, p) : o(g)
                    }

                    var f = arguments.length > 4, p = f ? W(arguments, 4) : [], d = t.setInterval, h = t.clearInterval, g = 0, v = b(l) && !l, m = (v ? r : n).defer(), $ = m.promise;
                    return u = b(u) ? u : 0, $.$$intervalId = d(function () {
                        v ? i.defer(c) : e.$evalAsync(c), m.notify(g++), u > 0 && g >= u && (m.resolve(g), h($.$$intervalId), delete a[$.$$intervalId]), v || e.$apply()
                    }, s), a[$.$$intervalId] = m, $
                }

                var a = {};
                return o.cancel = function (e) {
                    return e && e.$$intervalId in a ? (a[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete a[e.$$intervalId], !0) : !1
                }, o
            }]
        }

        function Rt(e) {
            for (var t = e.split("/"), n = t.length; n--;)t[n] = re(t[n]);
            return t.join("/")
        }

        function Ft(e, t) {
            var n = Mn(e);
            t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = d(n.port) || ro[n.protocol] || null
        }

        function Ut(e, t) {
            var n = "/" !== e.charAt(0);
            n && (e = "/" + e);
            var r = Mn(e);
            t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = te(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
        }

        function qt(e, t) {
            return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
        }

        function Lt(e) {
            var t = e.indexOf("#");
            return -1 == t ? e : e.substr(0, t)
        }

        function Vt(e) {
            return e.replace(/(#.+)|#$/, "$1")
        }

        function Ht(e) {
            return e.substr(0, Lt(e).lastIndexOf("/") + 1)
        }

        function Bt(e) {
            return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
        }

        function Wt(e, t, n) {
            this.$$html5 = !0, n = n || "", Ft(e, this), this.$$parse = function (e) {
                var n = qt(t, e);
                if (!C(n))throw io("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
                Ut(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function () {
                var e = ne(this.$$search), n = this.$$hash ? "#" + re(this.$$hash) : "";
                this.$$url = Rt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
            }, this.$$parseLinkUrl = function (r, i) {
                if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
                var o, a, s;
                return b(o = qt(e, r)) ? (a = o, s = b(o = qt(n, o)) ? t + (qt("/", o) || o) : e + a) : b(o = qt(t, r)) ? s = t + o : t == r + "/" && (s = t), s && this.$$parse(s), !!s
            }
        }

        function zt(e, t, n) {
            Ft(e, this), this.$$parse = function (r) {
                function i(e, t, n) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
                }

                var o, a = qt(e, r) || qt(t, r);
                y(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", y(a) && (e = r, this.replace())) : (o = qt(n, a), y(o) && (o = a)), Ut(o, this), this.$$path = i(this.$$path, o, e), this.$$compose()
            }, this.$$compose = function () {
                var t = ne(this.$$search), r = this.$$hash ? "#" + re(this.$$hash) : "";
                this.$$url = Rt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
            }, this.$$parseLinkUrl = function (t, n) {
                return Lt(e) == Lt(t) ? (this.$$parse(t), !0) : !1
            }
        }

        function Yt(e, t, n) {
            this.$$html5 = !0, zt.apply(this, arguments), this.$$parseLinkUrl = function (r, i) {
                if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
                var o, a;
                return e == Lt(r) ? o = r : (a = qt(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o
            }, this.$$compose = function () {
                var t = ne(this.$$search), r = this.$$hash ? "#" + re(this.$$hash) : "";
                this.$$url = Rt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url
            }
        }

        function Gt(e) {
            return function () {
                return this[e]
            }
        }

        function Kt(e, t) {
            return function (n) {
                return y(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
            }
        }

        function Xt() {
            var e = "", t = {enabled: !1, requireBase: !0, rewriteLinks: !0};
            this.hashPrefix = function (t) {
                return b(t) ? (e = t, this) : e
            }, this.html5Mode = function (e) {
                return N(e) ? (t.enabled = e, this) : w(e) ? (N(e.enabled) && (t.enabled = e.enabled), N(e.requireBase) && (t.requireBase = e.requireBase), N(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
                function s(e, t, n) {
                    var i = l.url(), o = l.$$state;
                    try {
                        r.url(e, t, n), l.$$state = r.state()
                    } catch (a) {
                        throw l.url(i), l.$$state = o, a
                    }
                }

                function u(e, t) {
                    n.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
                }

                var l, c, f, p = r.baseHref(), d = r.url();
                if (t.enabled) {
                    if (!p && t.requireBase)throw io("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    f = Bt(d) + (p || "/"), c = i.history ? Wt : Yt
                } else f = Lt(d), c = zt;
                var h = Ht(f);
                l = new c(f, h, "#" + e), l.$$parseLinkUrl(d, d), l.$$state = r.state();
                var g = /^\s*(javascript|mailto):/i;
                o.on("click", function (e) {
                    if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                        for (var i = Ir(e.target); "a" !== U(i[0]);)if (i[0] === o[0] || !(i = i.parent())[0])return;
                        var s = i.prop("href"), u = i.attr("href") || i.attr("xlink:href");
                        w(s) && "[object SVGAnimatedString]" === s.toString() && (s = Mn(s.animVal).href), g.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || l.$$parseLinkUrl(s, u) && (e.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }), Vt(l.absUrl()) != Vt(d) && r.url(l.absUrl(), !0);
                var v = !0;
                return r.onUrlChange(function (e, t) {
                    return y(qt(h, e)) ? void(a.location.href = e) : (n.$evalAsync(function () {
                        var r, i = l.absUrl(), o = l.$$state;
                        e = Vt(e), l.$$parse(e), l.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, l.absUrl() === e && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (v = !1, u(i, o)))
                    }), void(n.$$phase || n.$digest()))
                }), n.$watch(function () {
                    var e = Vt(r.url()), t = Vt(l.absUrl()), o = r.state(), a = l.$$replace, c = e !== t || l.$$html5 && i.history && o !== l.$$state;
                    (v || c) && (v = !1, n.$evalAsync(function () {
                        var t = l.absUrl(), r = n.$broadcast("$locationChangeStart", t, e, l.$$state, o).defaultPrevented;
                        l.absUrl() === t && (r ? (l.$$parse(e), l.$$state = o) : (c && s(t, a, o === l.$$state ? null : l.$$state), u(e, o)))
                    })), l.$$replace = !1
                }), l
            }]
        }

        function Jt() {
            var e = !0, t = this;
            this.debugEnabled = function (t) {
                return b(t) ? (e = t, this) : e
            }, this.$get = ["$window", function (n) {
                function r(e) {
                    return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                }

                function i(e) {
                    var t = n.console || {}, i = t[e] || t.log || g, a = !1;
                    try {
                        a = !!i.apply
                    } catch (s) {
                    }
                    return a ? function () {
                        var e = [];
                        return o(arguments, function (t) {
                            e.push(r(t))
                        }), i.apply(t, e)
                    } : function (e, t) {
                        i(e, null == t ? "" : t)
                    }
                }

                return {
                    log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                        var n = i("debug");
                        return function () {
                            e && n.apply(t, arguments)
                        }
                    }()
                }
            }]
        }

        function Qt(e, t) {
            if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e)throw ao("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
            return e
        }

        function Zt(e) {
            return e + ""
        }

        function en(e, t) {
            if (e) {
                if (e.constructor === e)throw ao("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                if (e.window === e)throw ao("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
                if (e.children && (e.nodeName || e.prop && e.attr && e.find))throw ao("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
                if (e === Object)throw ao("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
            }
            return e
        }

        function tn(e, t) {
            if (e) {
                if (e.constructor === e)throw ao("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                if (e === so || e === uo || e === lo)throw ao("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
            }
        }

        function nn(e, t) {
            if (e && (e === 0..constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor))throw ao("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
        }

        function rn(e, t) {
            return "undefined" != typeof e ? e : t
        }

        function on(e, t) {
            return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
        }

        function an(e, t) {
            var n = e(t);
            return !n.$stateful
        }

        function sn(e, t) {
            var n, r;
            switch (e.type) {
                case ho.Program:
                    n = !0, o(e.body, function (e) {
                        sn(e.expression, t), n = n && e.expression.constant
                    }), e.constant = n;
                    break;
                case ho.Literal:
                    e.constant = !0, e.toWatch = [];
                    break;
                case ho.UnaryExpression:
                    sn(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                    break;
                case ho.BinaryExpression:
                    sn(e.left, t), sn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                    break;
                case ho.LogicalExpression:
                    sn(e.left, t), sn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case ho.ConditionalExpression:
                    sn(e.test, t), sn(e.alternate, t), sn(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case ho.Identifier:
                    e.constant = !1, e.toWatch = [e];
                    break;
                case ho.MemberExpression:
                    sn(e.object, t), e.computed && sn(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
                    break;
                case ho.CallExpression:
                    n = e.filter ? an(t, e.callee.name) : !1, r = [], o(e.arguments, function (e) {
                        sn(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                    }), e.constant = n, e.toWatch = e.filter && an(t, e.callee.name) ? r : [e];
                    break;
                case ho.AssignmentExpression:
                    sn(e.left, t), sn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                    break;
                case ho.ArrayExpression:
                    n = !0, r = [], o(e.elements, function (e) {
                        sn(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                    }), e.constant = n, e.toWatch = r;
                    break;
                case ho.ObjectExpression:
                    n = !0, r = [], o(e.properties, function (e) {
                        sn(e.value, t), n = n && e.value.constant, e.value.constant || r.push.apply(r, e.value.toWatch)
                    }), e.constant = n, e.toWatch = r;
                    break;
                case ho.ThisExpression:
                    e.constant = !1, e.toWatch = [];
                    break;
                case ho.LocalsExpression:
                    e.constant = !1, e.toWatch = []
            }
        }

        function un(e) {
            if (1 == e.length) {
                var t = e[0].expression, r = t.toWatch;
                return 1 !== r.length ? r : r[0] !== t ? r : n
            }
        }

        function ln(e) {
            return e.type === ho.Identifier || e.type === ho.MemberExpression
        }

        function cn(e) {
            return 1 === e.body.length && ln(e.body[0].expression) ? {
                type: ho.AssignmentExpression,
                left: e.body[0].expression,
                right: {type: ho.NGValueParameter},
                operator: "="
            } : void 0
        }

        function fn(e) {
            return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === ho.Literal || e.body[0].expression.type === ho.ArrayExpression || e.body[0].expression.type === ho.ObjectExpression)
        }

        function pn(e) {
            return e.constant
        }

        function dn(e, t) {
            this.astBuilder = e, this.$filter = t
        }

        function hn(e, t) {
            this.astBuilder = e, this.$filter = t
        }

        function gn(e) {
            return "constructor" == e
        }

        function vn(e) {
            return S(e.valueOf) ? e.valueOf() : vo.call(e)
        }

        function mn() {
            var e = me(), t = me();
            this.$get = ["$filter", function (r) {
                function i(n, i, o) {
                    var s, d, $;
                    switch (o = o || m, typeof n) {
                        case"string":
                            n = n.trim(), $ = n;
                            var y = o ? t : e;
                            if (s = y[$], !s) {
                                ":" === n.charAt(0) && ":" === n.charAt(1) && (d = !0, n = n.substring(2));
                                var b = o ? v : h, w = new po(b), x = new go(w, r, b);
                                s = x.parse(n), s.constant ? s.$$watchDelegate = f : d ? s.$$watchDelegate = s.literal ? c : l : s.inputs && (s.$$watchDelegate = u), o && (s = a(s)), y[$] = s
                            }
                            return p(s, i);
                        case"function":
                            return p(n, i);
                        default:
                            return p(g, i)
                    }
                }

                function a(e) {
                    function t(t, n, r, i) {
                        var o = m;
                        m = !0;
                        try {
                            return e(t, n, r, i)
                        } finally {
                            m = o
                        }
                    }

                    if (!e)return e;
                    t.$$watchDelegate = e.$$watchDelegate, t.assign = a(e.assign), t.constant = e.constant, t.literal = e.literal;
                    for (var n = 0; e.inputs && n < e.inputs.length; ++n)e.inputs[n] = a(e.inputs[n]);
                    return t.inputs = e.inputs, t
                }

                function s(e, t) {
                    return null == e || null == t ? e === t : "object" == typeof e && (e = vn(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
                }

                function u(e, t, r, i, o) {
                    var a, u = i.inputs;
                    if (1 === u.length) {
                        var l = s;
                        return u = u[0], e.$watch(function (e) {
                            var t = u(e);
                            return s(t, l) || (a = i(e, n, n, [t]), l = t && vn(t)), a
                        }, t, r, o)
                    }
                    for (var c = [], f = [], p = 0, d = u.length; d > p; p++)c[p] = s, f[p] = null;
                    return e.$watch(function (e) {
                        for (var t = !1, r = 0, o = u.length; o > r; r++) {
                            var l = u[r](e);
                            (t || (t = !s(l, c[r]))) && (f[r] = l, c[r] = l && vn(l))
                        }
                        return t && (a = i(e, n, n, f)), a
                    }, t, r, o)
                }

                function l(e, t, n, r) {
                    var i, o;
                    return i = e.$watch(function (e) {
                        return r(e)
                    }, function (e, n, r) {
                        o = e, S(t) && t.apply(this, arguments), b(e) && r.$$postDigest(function () {
                            b(o) && i()
                        })
                    }, n)
                }

                function c(e, t, n, r) {
                    function i(e) {
                        var t = !0;
                        return o(e, function (e) {
                            b(e) || (t = !1)
                        }), t
                    }

                    var a, s;
                    return a = e.$watch(function (e) {
                        return r(e)
                    }, function (e, n, r) {
                        s = e, S(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function () {
                            i(s) && a()
                        })
                    }, n)
                }

                function f(e, t, n, r) {
                    var i;
                    return i = e.$watch(function (e) {
                        return i(), r(e)
                    }, t, n)
                }

                function p(e, t) {
                    if (!t)return e;
                    var n = e.$$watchDelegate, r = !1, i = n !== c && n !== l, o = i ? function (n, i, o, a) {
                        var s = r && a ? a[0] : e(n, i, o, a);
                        return t(s, n, i)
                    } : function (n, r, i, o) {
                        var a = e(n, r, i, o), s = t(a, n, r);
                        return b(a) ? s : a
                    };
                    return e.$$watchDelegate && e.$$watchDelegate !== u ? o.$$watchDelegate = e.$$watchDelegate : t.$stateful || (o.$$watchDelegate = u, r = !e.inputs, o.inputs = e.inputs ? e.inputs : [e]), o
                }

                var d = Xr().noUnsafeEval, h = {csp: d, expensiveChecks: !1}, v = {csp: d, expensiveChecks: !0}, m = !1;
                return i.$$runningExpensiveChecks = function () {
                    return m
                }, i
            }]
        }

        function $n() {
            this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
                return bn(function (t) {
                    e.$evalAsync(t)
                }, t)
            }]
        }

        function yn() {
            this.$get = ["$browser", "$exceptionHandler", function (e, t) {
                return bn(function (t) {
                    e.defer(t)
                }, t)
            }]
        }

        function bn(e, t) {
            function i() {
                this.$$state = {status: 0}
            }

            function a(e, t) {
                return function (n) {
                    t.call(e, n)
                }
            }

            function s(e) {
                var r, i, o;
                o = e.pending, e.processScheduled = !1, e.pending = n;
                for (var a = 0, s = o.length; s > a; ++a) {
                    i = o[a][0], r = o[a][e.status];
                    try {
                        S(r) ? i.resolve(r(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                    } catch (u) {
                        i.reject(u), t(u)
                    }
                }
            }

            function u(t) {
                !t.processScheduled && t.pending && (t.processScheduled = !0, e(function () {
                    s(t)
                }))
            }

            function l() {
                this.promise = new i
            }

            function c(e) {
                var t = new l, n = 0, r = zr(e) ? [] : {};
                return o(e, function (e, i) {
                    n++, m(e).then(function (e) {
                        r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                    }, function (e) {
                        r.hasOwnProperty(i) || t.reject(e)
                    })
                }), 0 === n && t.resolve(r), t.promise
            }

            var p = r("$q", TypeError), d = function () {
                var e = new l;
                return e.resolve = a(e, e.resolve), e.reject = a(e, e.reject), e.notify = a(e, e.notify), e
            };
            f(i.prototype, {
                then: function (e, t, n) {
                    if (y(e) && y(t) && y(n))return this;
                    var r = new l;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && u(this.$$state), r.promise
                }, "catch": function (e) {
                    return this.then(null, e)
                }, "finally": function (e, t) {
                    return this.then(function (t) {
                        return v(t, !0, e)
                    }, function (t) {
                        return v(t, !1, e)
                    }, t)
                }
            }), f(l.prototype, {
                resolve: function (e) {
                    this.promise.$$state.status || (e === this.promise ? this.$$reject(p("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
                }, $$resolve: function (e) {
                    function n(e) {
                        s || (s = !0, o.$$resolve(e))
                    }

                    function r(e) {
                        s || (s = !0, o.$$reject(e))
                    }

                    var i, o = this, s = !1;
                    try {
                        (w(e) || S(e)) && (i = e && e.then), S(i) ? (this.promise.$$state.status = -1, i.call(e, n, r, a(this, this.notify))) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, u(this.promise.$$state))
                    } catch (l) {
                        r(l), t(l)
                    }
                }, reject: function (e) {
                    this.promise.$$state.status || this.$$reject(e)
                }, $$reject: function (e) {
                    this.promise.$$state.value = e, this.promise.$$state.status = 2, u(this.promise.$$state)
                }, notify: function (n) {
                    var r = this.promise.$$state.pending;
                    this.promise.$$state.status <= 0 && r && r.length && e(function () {
                        for (var e, i, o = 0, a = r.length; a > o; o++) {
                            i = r[o][0], e = r[o][3];
                            try {
                                i.notify(S(e) ? e(n) : n)
                            } catch (s) {
                                t(s)
                            }
                        }
                    })
                }
            });
            var h = function (e) {
                var t = new l;
                return t.reject(e), t.promise
            }, g = function (e, t) {
                var n = new l;
                return t ? n.resolve(e) : n.reject(e), n.promise
            }, v = function (e, t, n) {
                var r = null;
                try {
                    S(n) && (r = n())
                } catch (i) {
                    return g(i, !1)
                }
                return j(r) ? r.then(function () {
                    return g(e, t)
                }, function (e) {
                    return g(e, !1)
                }) : g(e, t)
            }, m = function (e, t, n, r) {
                var i = new l;
                return i.resolve(e), i.promise.then(t, n, r)
            }, $ = m, b = function (e) {
                function t(e) {
                    r.resolve(e)
                }

                function n(e) {
                    r.reject(e)
                }

                if (!S(e))throw p("norslvr", "Expected resolverFn, got '{0}'", e);
                var r = new l;
                return e(t, n), r.promise
            };
            return b.prototype = i.prototype, b.defer = d, b.reject = h, b.when = m, b.resolve = $, b.all = c, b
        }

        function wn() {
            this.$get = ["$window", "$timeout", function (e, t) {
                var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame, r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function (e) {
                    var t = n(e);
                    return function () {
                        r(t)
                    }
                } : function (e) {
                    var n = t(e, 16.66, !1);
                    return function () {
                        t.cancel(n)
                    }
                };
                return o.supported = i, o
            }]
        }

        function xn() {
            function e(e) {
                function t() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = u(), this.$$ChildScope = null
                }

                return t.prototype = e, t
            }

            var t = 10, n = r("$rootScope"), a = null, s = null;
            this.digestTtl = function (e) {
                return arguments.length && (t = e), t
            }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (r, l, c) {
                function f(e) {
                    e.currentScope.$$destroyed = !0
                }

                function p(e) {
                    9 === jr && (e.$$childHead && p(e.$$childHead), e.$$nextSibling && p(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
                }

                function d() {
                    this.$id = u(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
                }

                function h(e) {
                    if (k.$$phase)throw n("inprog", "{0} already in progress", k.$$phase);
                    k.$$phase = e
                }

                function v() {
                    k.$$phase = null
                }

                function m(e, t) {
                    do e.$$watchersCount += t; while (e = e.$parent)
                }

                function $(e, t, n) {
                    do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
                }

                function b() {
                }

                function x() {
                    for (; D.length;)try {
                        D.shift()()
                    } catch (e) {
                        r(e)
                    }
                    s = null
                }

                function C() {
                    null === s && (s = c.defer(function () {
                        k.$apply(x)
                    }))
                }

                d.prototype = {
                    constructor: d, $new: function (t, n) {
                        var r;
                        return n = n || this, t ? (r = new d, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", f), r
                    }, $watch: function (e, t, n, r) {
                        var i = l(e);
                        if (i.$$watchDelegate)return i.$$watchDelegate(this, t, n, i, e);
                        var o = this, s = o.$$watchers, u = {fn: t, last: b, get: i, exp: r || e, eq: !!n};
                        return a = null, S(t) || (u.fn = g), s || (s = o.$$watchers = []), s.unshift(u), m(this, 1), function () {
                            q(s, u) >= 0 && m(o, -1), a = null
                        }
                    }, $watchGroup: function (e, t) {
                        function n() {
                            u = !1, l ? (l = !1, t(i, i, s)) : t(i, r, s)
                        }

                        var r = new Array(e.length), i = new Array(e.length), a = [], s = this, u = !1, l = !0;
                        if (!e.length) {
                            var c = !0;
                            return s.$evalAsync(function () {
                                c && t(i, i, s)
                            }), function () {
                                c = !1
                            }
                        }
                        return 1 === e.length ? this.$watch(e[0], function (e, n, o) {
                            i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                        }) : (o(e, function (e, t) {
                            var o = s.$watch(e, function (e, o) {
                                i[t] = e, r[t] = o, u || (u = !0, s.$evalAsync(n))
                            });
                            a.push(o)
                        }), function () {
                            for (; a.length;)a.shift()()
                        })
                    }, $watchCollection: function (e, t) {
                        function n(e) {
                            o = e;
                            var t, n, r, s, u;
                            if (!y(o)) {
                                if (w(o))if (i(o)) {
                                    a !== d && (a = d, v = a.length = 0, f++), t = o.length, v !== t && (f++, a.length = v = t);
                                    for (var l = 0; t > l; l++)u = a[l], s = o[l], r = u !== u && s !== s, r || u === s || (f++, a[l] = s)
                                } else {
                                    a !== h && (a = h = {}, v = 0, f++), t = 0;
                                    for (n in o)Ar.call(o, n) && (t++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (v++, a[n] = s, f++));
                                    if (v > t) {
                                        f++;
                                        for (n in a)Ar.call(o, n) || (v--, delete a[n])
                                    }
                                } else a !== o && (a = o, f++);
                                return f
                            }
                        }

                        function r() {
                            if (g ? (g = !1, t(o, o, u)) : t(o, s, u), c)if (w(o))if (i(o)) {
                                s = new Array(o.length);
                                for (var e = 0; e < o.length; e++)s[e] = o[e]
                            } else {
                                s = {};
                                for (var n in o)Ar.call(o, n) && (s[n] = o[n])
                            } else s = o
                        }

                        n.$stateful = !0;
                        var o, a, s, u = this, c = t.length > 1, f = 0, p = l(e, n), d = [], h = {}, g = !0, v = 0;
                        return this.$watch(p, r)
                    }, $digest: function () {
                        var e, i, o, u, l, f, p, d, g, m, $, y, w = t, C = this, D = [];
                        h("$digest"), c.$$checkUrlChange(), this === k && null !== s && (c.defer.cancel(s), x()), a = null;
                        do {
                            for (d = !1, m = C; T.length;) {
                                try {
                                    y = T.shift(), y.scope.$eval(y.expression, y.locals)
                                } catch (A) {
                                    r(A)
                                }
                                a = null
                            }
                            e:do {
                                if (f = m.$$watchers)for (p = f.length; p--;)try {
                                    if (e = f[p])if (l = e.get, (i = l(m)) === (o = e.last) || (e.eq ? H(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                                        if (e === a) {
                                            d = !1;
                                            break e
                                        }
                                    } else d = !0, a = e, e.last = e.eq ? L(i, null) : i, u = e.fn, u(i, o === b ? i : o, m), 5 > w && ($ = 4 - w, D[$] || (D[$] = []), D[$].push({
                                        msg: S(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                        newVal: i,
                                        oldVal: o
                                    }))
                                } catch (A) {
                                    r(A)
                                }
                                if (!(g = m.$$watchersCount && m.$$childHead || m !== C && m.$$nextSibling))for (; m !== C && !(g = m.$$nextSibling);)m = m.$parent
                            } while (m = g);
                            if ((d || T.length) && !w--)throw v(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, D)
                        } while (d || T.length);
                        for (v(); E.length;)try {
                            E.shift()()
                        } catch (A) {
                            r(A)
                        }
                    }, $destroy: function () {
                        if (!this.$$destroyed) {
                            var e = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this === k && c.$$applicationDestroyed(), m(this, -this.$$watchersCount);
                            for (var t in this.$$listenerCount)$(this, this.$$listenerCount[t], t);
                            e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = g, this.$on = this.$watch = this.$watchGroup = function () {
                                return g
                            }, this.$$listeners = {}, this.$$nextSibling = null, p(this)
                        }
                    }, $eval: function (e, t) {
                        return l(e)(this, t)
                    }, $evalAsync: function (e, t) {
                        k.$$phase || T.length || c.defer(function () {
                            T.length && k.$digest()
                        }), T.push({scope: this, expression: l(e), locals: t})
                    }, $$postDigest: function (e) {
                        E.push(e)
                    }, $apply: function (e) {
                        try {
                            h("$apply");
                            try {
                                return this.$eval(e)
                            } finally {
                                v()
                            }
                        } catch (t) {
                            r(t)
                        } finally {
                            try {
                                k.$digest()
                            } catch (t) {
                                throw r(t), t
                            }
                        }
                    }, $applyAsync: function (e) {
                        function t() {
                            n.$eval(e)
                        }

                        var n = this;
                        e && D.push(t), e = l(e), C()
                    }, $on: function (e, t) {
                        var n = this.$$listeners[e];
                        n || (this.$$listeners[e] = n = []), n.push(t);
                        var r = this;
                        do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                        var i = this;
                        return function () {
                            var r = n.indexOf(t);
                            -1 !== r && (n[r] = null, $(i, 1, e))
                        }
                    }, $emit: function (e, t) {
                        var n, i, o, a = [], s = this, u = !1, l = {
                            name: e,
                            targetScope: s,
                            stopPropagation: function () {
                                u = !0
                            },
                            preventDefault: function () {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        }, c = B([l], arguments, 1);
                        do {
                            for (n = s.$$listeners[e] || a, l.currentScope = s, i = 0, o = n.length; o > i; i++)if (n[i])try {
                                n[i].apply(null, c)
                            } catch (f) {
                                r(f)
                            } else n.splice(i, 1), i--, o--;
                            if (u)return l.currentScope = null, l;
                            s = s.$parent
                        } while (s);
                        return l.currentScope = null, l
                    }, $broadcast: function (e, t) {
                        var n = this, i = n, o = n, a = {
                            name: e, targetScope: n, preventDefault: function () {
                                a.defaultPrevented = !0
                            }, defaultPrevented: !1
                        };
                        if (!n.$$listenerCount[e])return a;
                        for (var s, u, l, c = B([a], arguments, 1); i = o;) {
                            for (a.currentScope = i, s = i.$$listeners[e] || [],
                                     u = 0, l = s.length; l > u; u++)if (s[u])try {
                                s[u].apply(null, c)
                            } catch (f) {
                                r(f)
                            } else s.splice(u, 1), u--, l--;
                            if (!(o = i.$$listenerCount[e] && i.$$childHead || i !== n && i.$$nextSibling))for (; i !== n && !(o = i.$$nextSibling);)i = i.$parent
                        }
                        return a.currentScope = null, a
                    }
                };
                var k = new d, T = k.$$asyncQueue = [], E = k.$$postDigestQueue = [], D = k.$$applyAsyncQueue = [];
                return k
            }]
        }

        function Cn() {
            var e = /^\s*(https?|ftp|mailto|tel|file):/, t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function (t) {
                return b(t) ? (e = t, this) : e
            }, this.imgSrcSanitizationWhitelist = function (e) {
                return b(e) ? (t = e, this) : t
            }, this.$get = function () {
                return function (n, r) {
                    var i, o = r ? t : e;
                    return i = Mn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
                }
            }
        }

        function kn(e) {
            if ("self" === e)return e;
            if (C(e)) {
                if (e.indexOf("***") > -1)throw mo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                return e = Kr(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
            }
            if (E(e))return new RegExp("^" + e.source + "$");
            throw mo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function Tn(e) {
            var t = [];
            return b(e) && o(e, function (e) {
                t.push(kn(e))
            }), t
        }

        function Sn() {
            this.SCE_CONTEXTS = $o;
            var e = ["self"], t = [];
            this.resourceUrlWhitelist = function (t) {
                return arguments.length && (e = Tn(t)), e
            }, this.resourceUrlBlacklist = function (e) {
                return arguments.length && (t = Tn(e)), t
            }, this.$get = ["$injector", function (n) {
                function r(e, t) {
                    return "self" === e ? Nn(t) : !!e.exec(t.href)
                }

                function i(n) {
                    var i, o, a = Mn(n.toString()), s = !1;
                    for (i = 0, o = e.length; o > i; i++)if (r(e[i], a)) {
                        s = !0;
                        break
                    }
                    if (s)for (i = 0, o = t.length; o > i; i++)if (r(t[i], a)) {
                        s = !1;
                        break
                    }
                    return s
                }

                function o(e) {
                    var t = function (e) {
                        this.$$unwrapTrustedValue = function () {
                            return e
                        }
                    };
                    return e && (t.prototype = new e), t.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    }, t.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    }, t
                }

                function a(e, t) {
                    var n = f.hasOwnProperty(e) ? f[e] : null;
                    if (!n)throw mo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                    if (null === t || y(t) || "" === t)return t;
                    if ("string" != typeof t)throw mo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                    return new n(t)
                }

                function s(e) {
                    return e instanceof c ? e.$$unwrapTrustedValue() : e
                }

                function u(e, t) {
                    if (null === t || y(t) || "" === t)return t;
                    var n = f.hasOwnProperty(e) ? f[e] : null;
                    if (n && t instanceof n)return t.$$unwrapTrustedValue();
                    if (e === $o.RESOURCE_URL) {
                        if (i(t))return t;
                        throw mo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                    }
                    if (e === $o.HTML)return l(t);
                    throw mo("unsafe", "Attempting to use an unsafe value in a safe context.")
                }

                var l = function (e) {
                    throw mo("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                n.has("$sanitize") && (l = n.get("$sanitize"));
                var c = o(), f = {};
                return f[$o.HTML] = o(c), f[$o.CSS] = o(c), f[$o.URL] = o(c), f[$o.JS] = o(c), f[$o.RESOURCE_URL] = o(f[$o.URL]), {
                    trustAs: a,
                    getTrusted: u,
                    valueOf: s
                }
            }]
        }

        function En() {
            var e = !0;
            this.enabled = function (t) {
                return arguments.length && (e = !!t), e
            }, this.$get = ["$parse", "$sceDelegate", function (t, n) {
                if (e && 8 > jr)throw mo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var r = V($o);
                r.isEnabled = function () {
                    return e
                }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function (e, t) {
                    return t
                }, r.valueOf = v), r.parseAs = function (e, n) {
                    var i = t(n);
                    return i.literal && i.constant ? i : t(n, function (t) {
                        return r.getTrusted(e, t)
                    })
                };
                var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
                return o($o, function (e, t) {
                    var n = _r(t);
                    r[Ce("parse_as_" + n)] = function (t) {
                        return i(e, t)
                    }, r[Ce("get_trusted_" + n)] = function (t) {
                        return a(e, t)
                    }, r[Ce("trust_as_" + n)] = function (t) {
                        return s(e, t)
                    }
                }), r
            }]
        }

        function Dn() {
            this.$get = ["$window", "$document", function (e, t) {
                var n, r, i = {}, o = d((/android (\d+)/.exec(_r((e.navigator || {}).userAgent)) || [])[1]), a = /Boxee/i.test((e.navigator || {}).userAgent), s = t[0] || {}, u = /^(Moz|webkit|ms)(?=[A-Z])/, l = s.body && s.body.style, c = !1, f = !1;
                if (l) {
                    for (var p in l)if (r = u.exec(p)) {
                        n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                    n || (n = "WebkitOpacity" in l && "webkit"), c = !!("transition" in l || n + "Transition" in l), f = !!("animation" in l || n + "Animation" in l), !o || c && f || (c = C(l.webkitTransition), f = C(l.webkitAnimation))
                }
                return {
                    history: !(!e.history || !e.history.pushState || 4 > o || a), hasEvent: function (e) {
                        if ("input" === e && 11 >= jr)return !1;
                        if (y(i[e])) {
                            var t = s.createElement("div");
                            i[e] = "on" + e in t
                        }
                        return i[e]
                    }, csp: Xr(), vendorPrefix: n, transitions: c, animations: f, android: o
                }
            }]
        }

        function An() {
            var e;
            this.httpOptions = function (t) {
                return t ? (e = t, this) : e
            }, this.$get = ["$templateCache", "$http", "$q", "$sce", function (t, n, r, i) {
                function o(a, s) {
                    function u(e) {
                        if (!s)throw Hi("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", a, e.status, e.statusText);
                        return r.reject(e)
                    }

                    o.totalPendingRequests++, C(a) && t.get(a) || (a = i.getTrustedResourceUrl(a));
                    var l = n.defaults && n.defaults.transformResponse;
                    return zr(l) ? l = l.filter(function (e) {
                        return e !== Tt
                    }) : l === Tt && (l = null), n.get(a, f({
                        cache: t,
                        transformResponse: l
                    }, e))["finally"](function () {
                        o.totalPendingRequests--
                    }).then(function (e) {
                        return t.put(a, e.data), e.data
                    }, u)
                }

                return o.totalPendingRequests = 0, o
            }]
        }

        function _n() {
            this.$get = ["$rootScope", "$browser", "$location", function (e, t, n) {
                var r = {};
                return r.findBindings = function (e, t, n) {
                    var r = e.getElementsByClassName("ng-binding"), i = [];
                    return o(r, function (e) {
                        var r = Br.element(e).data("$binding");
                        r && o(r, function (r) {
                            if (n) {
                                var o = new RegExp("(^|\\s)" + Kr(t) + "(\\s|\\||$)");
                                o.test(r) && i.push(e)
                            } else-1 != r.indexOf(t) && i.push(e)
                        })
                    }), i
                }, r.findModels = function (e, t, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = n ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + t + '"]', s = e.querySelectorAll(a);
                        if (s.length)return s
                    }
                }, r.getLocation = function () {
                    return n.url()
                }, r.setLocation = function (t) {
                    t !== n.url() && (n.url(t), e.$digest())
                }, r.whenStable = function (e) {
                    t.notifyWhenNoOutstandingRequests(e)
                }, r
            }]
        }

        function On() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (e, t, n, r, i) {
                function o(o, s, u) {
                    S(o) || (u = s, s = o, o = g);
                    var l, c = W(arguments, 3), f = b(u) && !u, p = (f ? r : n).defer(), d = p.promise;
                    return l = t.defer(function () {
                        try {
                            p.resolve(o.apply(null, c))
                        } catch (t) {
                            p.reject(t), i(t)
                        } finally {
                            delete a[d.$$timeoutId]
                        }
                        f || e.$apply()
                    }, s), d.$$timeoutId = l, a[l] = p, d
                }

                var a = {};
                return o.cancel = function (e) {
                    return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
                }, o
            }]
        }

        function Mn(e) {
            var t = e;
            return jr && (yo.setAttribute("href", t), t = yo.href), yo.setAttribute("href", t), {
                href: yo.href,
                protocol: yo.protocol ? yo.protocol.replace(/:$/, "") : "",
                host: yo.host,
                search: yo.search ? yo.search.replace(/^\?/, "") : "",
                hash: yo.hash ? yo.hash.replace(/^#/, "") : "",
                hostname: yo.hostname,
                port: yo.port,
                pathname: "/" === yo.pathname.charAt(0) ? yo.pathname : "/" + yo.pathname
            }
        }

        function Nn(e) {
            var t = C(e) ? Mn(e) : e;
            return t.protocol === bo.protocol && t.host === bo.host
        }

        function jn() {
            this.$get = m(e)
        }

        function In(e) {
            function t(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }

            var n = e[0] || {}, r = {}, i = "";
            return function () {
                var e, o, a, s, u, l = n.cookie || "";
                if (l !== i)for (i = l, e = i.split("; "), r = {}, a = 0; a < e.length; a++)o = e[a], s = o.indexOf("="), s > 0 && (u = t(o.substring(0, s)), y(r[u]) && (r[u] = t(o.substring(s + 1))));
                return r
            }
        }

        function Pn() {
            this.$get = In
        }

        function Rn(e) {
            function t(r, i) {
                if (w(r)) {
                    var a = {};
                    return o(r, function (e, n) {
                        a[n] = t(n, e)
                    }), a
                }
                return e.factory(r + n, i)
            }

            var n = "Filter";
            this.register = t, this.$get = ["$injector", function (e) {
                return function (t) {
                    return e.get(t + n)
                }
            }], t("currency", Vn), t("date", rr), t("filter", Fn), t("json", ir), t("limitTo", or), t("lowercase", Eo), t("number", Hn), t("orderBy", ar), t("uppercase", Do)
        }

        function Fn() {
            return function (e, t, n) {
                if (!i(e)) {
                    if (null == e)return e;
                    throw r("filter")("notarray", "Expected array but received: {0}", e)
                }
                var o, a, s = Ln(t);
                switch (s) {
                    case"function":
                        o = t;
                        break;
                    case"boolean":
                    case"null":
                    case"number":
                    case"string":
                        a = !0;
                    case"object":
                        o = Un(t, n, a);
                        break;
                    default:
                        return e
                }
                return Array.prototype.filter.call(e, o)
            }
        }

        function Un(e, t, n) {
            var r, i = w(e) && "$" in e;
            return t === !0 ? t = H : S(t) || (t = function (e, t) {
                return y(e) ? !1 : null === e || null === t ? e === t : w(t) || w(e) && !$(e) ? !1 : (e = _r("" + e), t = _r("" + t), -1 !== e.indexOf(t))
            }), r = function (r) {
                return i && !w(r) ? qn(r, e.$, t, !1) : qn(r, e, t, n)
            }
        }

        function qn(e, t, n, r, i) {
            var o = Ln(e), a = Ln(t);
            if ("string" === a && "!" === t.charAt(0))return !qn(e, t.substring(1), n, r);
            if (zr(e))return e.some(function (e) {
                return qn(e, t, n, r)
            });
            switch (o) {
                case"object":
                    var s;
                    if (r) {
                        for (s in e)if ("$" !== s.charAt(0) && qn(e[s], t, n, !0))return !0;
                        return i ? !1 : qn(e, t, n, !1)
                    }
                    if ("object" === a) {
                        for (s in t) {
                            var u = t[s];
                            if (!S(u) && !y(u)) {
                                var l = "$" === s, c = l ? e : e[s];
                                if (!qn(c, u, n, l, l))return !1
                            }
                        }
                        return !0
                    }
                    return n(e, t);
                case"function":
                    return !1;
                default:
                    return n(e, t)
            }
        }

        function Ln(e) {
            return null === e ? "null" : typeof e
        }

        function Vn(e) {
            var t = e.NUMBER_FORMATS;
            return function (e, n, r) {
                return y(n) && (n = t.CURRENCY_SYM), y(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : zn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
            }
        }

        function Hn(e) {
            var t = e.NUMBER_FORMATS;
            return function (e, n) {
                return null == e ? e : zn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
            }
        }

        function Bn(e) {
            var t, n, r, i, o, a = 0;
            for ((n = e.indexOf(xo)) > -1 && (e = e.replace(xo, "")), (r = e.search(/e/i)) > 0 ? (0 > n && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : 0 > n && (n = e.length), r = 0; e.charAt(r) == Co; r++);
            if (r == (o = e.length))t = [0], n = 1; else {
                for (o--; e.charAt(o) == Co;)o--;
                for (n -= r, t = [], i = 0; o >= r; r++, i++)t[i] = +e.charAt(r)
            }
            return n > wo && (t = t.splice(0, wo - 1), a = n - 1, n = 1), {d: t, e: a, i: n}
        }

        function Wn(e, t, n, r) {
            var i = e.d, o = i.length - e.i;
            t = y(t) ? Math.min(Math.max(n, o), r) : +t;
            var a = t + e.i, s = i[a];
            if (a > 0)i.splice(a); else {
                e.i = 1, i.length = a = t + 1;
                for (var u = 0; a > u; u++)i[u] = 0
            }
            for (s >= 5 && i[a - 1]++; t > o; o++)i.push(0);
            var l = i.reduceRight(function (e, t, n, r) {
                return t += e, r[n] = t % 10, Math.floor(t / 10)
            }, 0);
            l && (i.unshift(l), e.i++)
        }

        function zn(e, t, n, r, i) {
            if (!C(e) && !k(e) || isNaN(e))return "";
            var o, a = !isFinite(e), s = !1, u = Math.abs(e) + "", l = "";
            if (a)l = "∞"; else {
                o = Bn(u), Wn(o, i, t.minFrac, t.maxFrac);
                var c = o.d, f = o.i, p = o.e, d = [];
                for (s = c.reduce(function (e, t) {
                    return e && !t
                }, !0); 0 > f;)c.unshift(0), f++;
                f > 0 ? d = c.splice(f) : (d = c, c = [0]);
                var h = [];
                for (c.length > t.lgSize && h.unshift(c.splice(-t.lgSize).join("")); c.length > t.gSize;)h.unshift(c.splice(-t.gSize).join(""));
                c.length && h.unshift(c.join("")), l = h.join(n), d.length && (l += r + d.join("")), p && (l += "e+" + p)
            }
            return 0 > e && !s ? t.negPre + l + t.negSuf : t.posPre + l + t.posSuf
        }

        function Yn(e, t, n) {
            var r = "";
            for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;)e = Co + e;
            return n && (e = e.substr(e.length - t)), r + e
        }

        function Gn(e, t, n, r) {
            return n = n || 0, function (i) {
                var o = i["get" + e]();
                return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), Yn(o, t, r)
            }
        }

        function Kn(e, t) {
            return function (n, r) {
                var i = n["get" + e](), o = Or(t ? "SHORT" + e : e);
                return r[o][i]
            }
        }

        function Xn(e, t, n) {
            var r = -1 * n, i = r >= 0 ? "+" : "";
            return i += Yn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Yn(Math.abs(r % 60), 2)
        }

        function Jn(e) {
            var t = new Date(e, 0, 1).getDay();
            return new Date(e, 0, (4 >= t ? 5 : 12) - t)
        }

        function Qn(e) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
        }

        function Zn(e) {
            return function (t) {
                var n = Jn(t.getFullYear()), r = Qn(t), i = +r - +n, o = 1 + Math.round(i / 6048e5);
                return Yn(o, e)
            }
        }

        function er(e, t) {
            return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
        }

        function tr(e, t) {
            return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
        }

        function nr(e, t) {
            return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
        }

        function rr(e) {
            function t(e) {
                var t;
                if (t = e.match(n)) {
                    var r = new Date(0), i = 0, o = 0, a = t[8] ? r.setUTCFullYear : r.setFullYear, s = t[8] ? r.setUTCHours : r.setHours;
                    t[9] && (i = d(t[9] + t[10]), o = d(t[9] + t[11])), a.call(r, d(t[1]), d(t[2]) - 1, d(t[3]));
                    var u = d(t[4] || 0) - i, l = d(t[5] || 0) - o, c = d(t[6] || 0), f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                    return s.call(r, u, l, c, f), r
                }
                return e
            }

            var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (n, r, i) {
                var a, s, u = "", l = [];
                if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, C(n) && (n = So.test(n) ? d(n) : t(n)), k(n) && (n = new Date(n)), !T(n) || !isFinite(n.getTime()))return n;
                for (; r;)s = To.exec(r), s ? (l = B(l, s, 1), r = l.pop()) : (l.push(r), r = null);
                var c = n.getTimezoneOffset();
                return i && (c = X(i, c), n = Q(n, i, !0)), o(l, function (t) {
                    a = ko[t], u += a ? a(n, e.DATETIME_FORMATS, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), u
            }
        }

        function ir() {
            return function (e, t) {
                return y(t) && (t = 2), G(e, t)
            }
        }

        function or() {
            return function (e, t, n) {
                return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : d(t), isNaN(t) ? e : (k(e) && (e = e.toString()), zr(e) || C(e) ? (n = !n || isNaN(n) ? 0 : d(n), n = 0 > n ? Math.max(0, e.length + n) : n, t >= 0 ? e.slice(n, n + t) : 0 === n ? e.slice(t, e.length) : e.slice(Math.max(0, n + t), n)) : e)
            }
        }

        function ar(e) {
            function t(t, n) {
                return n = n ? -1 : 1, t.map(function (t) {
                    var r = 1, i = v;
                    if (S(t))i = t; else if (C(t) && ("+" != t.charAt(0) && "-" != t.charAt(0) || (r = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t), i.constant))) {
                        var o = i();
                        i = function (e) {
                            return e[o]
                        }
                    }
                    return {get: i, descending: r * n}
                })
            }

            function n(e) {
                switch (typeof e) {
                    case"number":
                    case"boolean":
                    case"string":
                        return !0;
                    default:
                        return !1
                }
            }

            function o(e, t) {
                return "function" == typeof e.valueOf && (e = e.valueOf(), n(e)) ? e : $(e) && (e = e.toString(), n(e)) ? e : t
            }

            function a(e, t) {
                var n = typeof e;
                return null === e ? (n = "string", e = "null") : "string" === n ? e = e.toLowerCase() : "object" === n && (e = o(e, t)), {
                    value: e,
                    type: n
                }
            }

            function s(e, t) {
                var n = 0;
                return e.type === t.type ? e.value !== t.value && (n = e.value < t.value ? -1 : 1) : n = e.type < t.type ? -1 : 1, n
            }

            return function (e, n, o) {
                function u(e, t) {
                    return {
                        value: e, predicateValues: c.map(function (n) {
                            return a(n.get(e), t)
                        })
                    }
                }

                function l(e, t) {
                    for (var n = 0, r = 0, i = c.length; i > r && !(n = s(e.predicateValues[r], t.predicateValues[r]) * c[r].descending); ++r);
                    return n
                }

                if (null == e)return e;
                if (!i(e))throw r("orderBy")("notarray", "Expected array but received: {0}", e);
                zr(n) || (n = [n]), 0 === n.length && (n = ["+"]);
                var c = t(n, o);
                c.push({
                    get: function () {
                        return {}
                    }, descending: o ? -1 : 1
                });
                var f = Array.prototype.map.call(e, u);
                return f.sort(l), e = f.map(function (e) {
                    return e.value
                })
            }
        }

        function sr(e) {
            return S(e) && (e = {link: e}), e.restrict = e.restrict || "AC", m(e)
        }

        function ur(e, t) {
            e.$name = t
        }

        function lr(e, t, r, i, a) {
            var s = this, u = [];
            s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(t.name || t.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, s.$$parentForm = Oo, s.$rollbackViewValue = function () {
                o(u, function (e) {
                    e.$rollbackViewValue()
                })
            }, s.$commitViewValue = function () {
                o(u, function (e) {
                    e.$commitViewValue()
                })
            }, s.$addControl = function (e) {
                he(e.$name, "input"), u.push(e), e.$name && (s[e.$name] = e), e.$$parentForm = s
            }, s.$$renameControl = function (e, t) {
                var n = e.$name;
                s[n] === e && delete s[n], s[t] = e, e.$name = t
            }, s.$removeControl = function (e) {
                e.$name && s[e.$name] === e && delete s[e.$name], o(s.$pending, function (t, n) {
                    s.$setValidity(n, null, e)
                }), o(s.$error, function (t, n) {
                    s.$setValidity(n, null, e)
                }), o(s.$$success, function (t, n) {
                    s.$setValidity(n, null, e)
                }), q(u, e), e.$$parentForm = Oo
            }, kr({
                ctrl: this, $element: e, set: function (e, t, n) {
                    var r = e[t];
                    if (r) {
                        var i = r.indexOf(n);
                        -1 === i && r.push(n)
                    } else e[t] = [n]
                }, unset: function (e, t, n) {
                    var r = e[t];
                    r && (q(r, n), 0 === r.length && delete e[t])
                }, $animate: i
            }), s.$setDirty = function () {
                i.removeClass(e, da), i.addClass(e, ha), s.$dirty = !0, s.$pristine = !1, s.$$parentForm.$setDirty()
            }, s.$setPristine = function () {
                i.setClass(e, da, ha + " " + Mo), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function (e) {
                    e.$setPristine()
                })
            }, s.$setUntouched = function () {
                o(u, function (e) {
                    e.$setUntouched()
                })
            }, s.$setSubmitted = function () {
                i.addClass(e, Mo), s.$submitted = !0, s.$$parentForm.$setSubmitted()
            }
        }

        function cr(e) {
            e.$formatters.push(function (t) {
                return e.$isEmpty(t) ? t : t.toString()
            })
        }

        function fr(e, t, n, r, i, o) {
            pr(e, t, n, r, i, o), cr(r)
        }

        function pr(e, t, n, r, i, o) {
            var a = _r(t[0].type);
            if (!i.android) {
                var s = !1;
                t.on("compositionstart", function (e) {
                    s = !0
                }), t.on("compositionend", function () {
                    s = !1, u()
                })
            }
            var u = function (e) {
                if (l && (o.defer.cancel(l), l = null), !s) {
                    var i = t.val(), u = e && e.type;
                    "password" === a || n.ngTrim && "false" === n.ngTrim || (i = Gr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
                }
            };
            if (i.hasEvent("input"))t.on("input", u); else {
                var l, c = function (e, t, n) {
                    l || (l = o.defer(function () {
                        l = null, t && t.value === n || u(e)
                    }))
                };
                t.on("keydown", function (e) {
                    var t = e.keyCode;
                    91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || c(e, this, this.value)
                }), i.hasEvent("paste") && t.on("paste cut", c)
            }
            t.on("change", u), r.$render = function () {
                var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                t.val() !== e && t.val(e)
            }
        }

        function dr(e, t) {
            if (T(e))return e;
            if (C(e)) {
                Vo.lastIndex = 0;
                var n = Vo.exec(e);
                if (n) {
                    var r = +n[1], i = +n[2], o = 0, a = 0, s = 0, u = 0, l = Jn(r), c = 7 * (i - 1);
                    return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), u = t.getMilliseconds()), new Date(r, 0, l.getDate() + c, o, a, s, u)
                }
            }
            return NaN
        }

        function hr(e, t) {
            return function (n, r) {
                var i, a;
                if (T(n))return n;
                if (C(n)) {
                    if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Po.test(n))return new Date(n);
                    if (e.lastIndex = 0, i = e.exec(n))return i.shift(), a = r ? {
                        yyyy: r.getFullYear(),
                        MM: r.getMonth() + 1,
                        dd: r.getDate(),
                        HH: r.getHours(),
                        mm: r.getMinutes(),
                        ss: r.getSeconds(),
                        sss: r.getMilliseconds() / 1e3
                    } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function (e, n) {
                        n < t.length && (a[t[n]] = +e)
                    }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
                }
                return NaN
            }
        }

        function gr(e, t, r, i) {
            return function (o, a, s, u, l, c, f) {
                function p(e) {
                    return e && !(e.getTime && e.getTime() !== e.getTime())
                }

                function d(e) {
                    return b(e) && !T(e) ? r(e) || n : e
                }

                vr(o, a, s, u), pr(o, a, s, u, l, c);
                var h, g = u && u.$options && u.$options.timezone;
                if (u.$$parserName = e, u.$parsers.push(function (e) {
                        if (u.$isEmpty(e))return null;
                        if (t.test(e)) {
                            var i = r(e, h);
                            return g && (i = Q(i, g)), i
                        }
                        return n
                    }), u.$formatters.push(function (e) {
                        if (e && !T(e))throw ba("datefmt", "Expected `{0}` to be a date", e);
                        return p(e) ? (h = e, h && g && (h = Q(h, g, !0)), f("date")(e, i, g)) : (h = null, "")
                    }), b(s.min) || s.ngMin) {
                    var v;
                    u.$validators.min = function (e) {
                        return !p(e) || y(v) || r(e) >= v
                    }, s.$observe("min", function (e) {
                        v = d(e), u.$validate()
                    })
                }
                if (b(s.max) || s.ngMax) {
                    var m;
                    u.$validators.max = function (e) {
                        return !p(e) || y(m) || r(e) <= m
                    }, s.$observe("max", function (e) {
                        m = d(e), u.$validate()
                    })
                }
            }
        }

        function vr(e, t, r, i) {
            var o = t[0], a = i.$$hasNativeValidators = w(o.validity);
            a && i.$parsers.push(function (e) {
                var r = t.prop(Dr) || {};
                return r.badInput || r.typeMismatch ? n : e
            })
        }

        function mr(e, t, r, i, o, a) {
            if (vr(e, t, r, i), pr(e, t, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function (e) {
                    return i.$isEmpty(e) ? null : Uo.test(e) ? parseFloat(e) : n
                }), i.$formatters.push(function (e) {
                    if (!i.$isEmpty(e)) {
                        if (!k(e))throw ba("numfmt", "Expected `{0}` to be a number", e);
                        e = e.toString()
                    }
                    return e
                }), b(r.min) || r.ngMin) {
                var s;
                i.$validators.min = function (e) {
                    return i.$isEmpty(e) || y(s) || e >= s
                }, r.$observe("min", function (e) {
                    b(e) && !k(e) && (e = parseFloat(e, 10)), s = k(e) && !isNaN(e) ? e : n, i.$validate()
                })
            }
            if (b(r.max) || r.ngMax) {
                var u;
                i.$validators.max = function (e) {
                    return i.$isEmpty(e) || y(u) || u >= e
                }, r.$observe("max", function (e) {
                    b(e) && !k(e) && (e = parseFloat(e, 10)), u = k(e) && !isNaN(e) ? e : n, i.$validate()
                })
            }
        }

        function $r(e, t, n, r, i, o) {
            pr(e, t, n, r, i, o), cr(r), r.$$parserName = "url", r.$validators.url = function (e, t) {
                var n = e || t;
                return r.$isEmpty(n) || Ro.test(n)
            }
        }

        function yr(e, t, n, r, i, o) {
            pr(e, t, n, r, i, o), cr(r), r.$$parserName = "email", r.$validators.email = function (e, t) {
                var n = e || t;
                return r.$isEmpty(n) || Fo.test(n)
            }
        }

        function br(e, t, n, r) {
            y(n.name) && t.attr("name", u());
            var i = function (e) {
                t[0].checked && r.$setViewValue(n.value, e && e.type)
            };
            t.on("click", i), r.$render = function () {
                var e = n.value;
                t[0].checked = e == r.$viewValue
            }, n.$observe("value", r.$render)
        }

        function wr(e, t, n, r, i) {
            var o;
            if (b(r)) {
                if (o = e(r), !o.constant)throw ba("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
                return o(t)
            }
            return i
        }

        function xr(e, t, n, r, i, o, a, s) {
            var u = wr(s, e, "ngTrueValue", n.ngTrueValue, !0), l = wr(s, e, "ngFalseValue", n.ngFalseValue, !1), c = function (e) {
                r.$setViewValue(t[0].checked, e && e.type)
            };
            t.on("click", c), r.$render = function () {
                t[0].checked = r.$viewValue
            }, r.$isEmpty = function (e) {
                return e === !1
            }, r.$formatters.push(function (e) {
                return H(e, u)
            }), r.$parsers.push(function (e) {
                return e ? u : l
            })
        }

        function Cr(e, t) {
            return e = "ngClass" + e, ["$animate", function (n) {
                function r(e, t) {
                    var n = [];
                    e:for (var r = 0; r < e.length; r++) {
                        for (var i = e[r], o = 0; o < t.length; o++)if (i == t[o])continue e;
                        n.push(i)
                    }
                    return n
                }

                function i(e) {
                    var t = [];
                    return zr(e) ? (o(e, function (e) {
                        t = t.concat(i(e))
                    }), t) : C(e) ? e.split(" ") : w(e) ? (o(e, function (e, n) {
                        e && (t = t.concat(n.split(" ")))
                    }), t) : e
                }

                return {
                    restrict: "AC", link: function (a, s, u) {
                        function l(e) {
                            var t = f(e, 1);
                            u.$addClass(t)
                        }

                        function c(e) {
                            var t = f(e, -1);
                            u.$removeClass(t)
                        }

                        function f(e, t) {
                            var n = s.data("$classCounts") || me(), r = [];
                            return o(e, function (e) {
                                (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                            }), s.data("$classCounts", n), r.join(" ")
                        }

                        function p(e, t) {
                            var i = r(t, e), o = r(e, t);
                            i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                        }

                        function d(e) {
                            if (t === !0 || a.$index % 2 === t) {
                                var n = i(e || []);
                                if (h) {
                                    if (!H(e, h)) {
                                        var r = i(h);
                                        p(r, n)
                                    }
                                } else l(n)
                            }
                            h = V(e)
                        }

                        var h;
                        a.$watch(u[e], d, !0), u.$observe("class", function (t) {
                            d(a.$eval(u[e]))
                        }), "ngClass" !== e && a.$watch("$index", function (n, r) {
                            var o = 1 & n;
                            if (o !== (1 & r)) {
                                var s = i(a.$eval(u[e]));
                                o === t ? l(s) : c(s)
                            }
                        })
                    }
                }
            }]
        }

        function kr(e) {
            function t(e, t, u) {
                y(t) ? r("$pending", e, u) : i("$pending", e, u), N(t) ? t ? (f(s.$error, e, u), c(s.$$success, e, u)) : (c(s.$error, e, u), f(s.$$success, e, u)) : (f(s.$error, e, u), f(s.$$success, e, u)), s.$pending ? (o(ma, !0), s.$valid = s.$invalid = n, a("", null)) : (o(ma, !1), s.$valid = Tr(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
                var l;
                l = s.$pending && s.$pending[e] ? n : s.$error[e] ? !1 : s.$$success[e] ? !0 : null, a(e, l), s.$$parentForm.$setValidity(e, l, s)
            }

            function r(e, t, n) {
                s[e] || (s[e] = {}), c(s[e], t, n)
            }

            function i(e, t, r) {
                s[e] && f(s[e], t, r), Tr(s[e]) && (s[e] = n)
            }

            function o(e, t) {
                t && !l[e] ? (p.addClass(u, e), l[e] = !0) : !t && l[e] && (p.removeClass(u, e), l[e] = !1)
            }

            function a(e, t) {
                e = e ? "-" + ce(e, "-") : "", o(fa + e, t === !0), o(pa + e, t === !1)
            }

            var s = e.ctrl, u = e.$element, l = {}, c = e.set, f = e.unset, p = e.$animate;
            l[pa] = !(l[fa] = u.hasClass(fa)), s.$setValidity = t
        }

        function Tr(e) {
            if (e)for (var t in e)if (e.hasOwnProperty(t))return !1;
            return !0
        }

        function Sr(e) {
            e[0].hasAttribute("selected") && (e[0].selected = !0)
        }

        var Er = /^\/(.+)\/([a-z]*)$/, Dr = "validity", Ar = Object.prototype.hasOwnProperty, _r = function (e) {
            return C(e) ? e.toLowerCase() : e
        }, Or = function (e) {
            return C(e) ? e.toUpperCase() : e
        }, Mr = function (e) {
            return C(e) ? e.replace(/[A-Z]/g, function (e) {
                return String.fromCharCode(32 | e.charCodeAt(0))
            }) : e
        }, Nr = function (e) {
            return C(e) ? e.replace(/[a-z]/g, function (e) {
                return String.fromCharCode(-33 & e.charCodeAt(0))
            }) : e
        };
        "i" !== "I".toLowerCase() && (_r = Mr, Or = Nr);
        var jr, Ir, Pr, Rr, Fr = [].slice, Ur = [].splice, qr = [].push, Lr = Object.prototype.toString, Vr = Object.getPrototypeOf, Hr = r("ng"), Br = e.angular || (e.angular = {}), Wr = 0;
        jr = t.documentMode, g.$inject = [], v.$inject = [];
        var zr = Array.isArray, Yr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, Gr = function (e) {
            return C(e) ? e.trim() : e
        }, Kr = function (e) {
            return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, Xr = function () {
            function e() {
                try {
                    return new Function(""), !1
                } catch (e) {
                    return !0
                }
            }

            if (!b(Xr.rules)) {
                var n = t.querySelector("[ng-csp]") || t.querySelector("[data-ng-csp]");
                if (n) {
                    var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                    Xr.rules = {
                        noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
                        noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
                    }
                } else Xr.rules = {noUnsafeEval: e(), noInlineStyle: !1}
            }
            return Xr.rules
        }, Jr = function () {
            if (b(Jr.name_))return Jr.name_;
            var e, n, r, i, o = Zr.length;
            for (n = 0; o > n; ++n)if (r = Zr[n], e = t.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                i = e.getAttribute(r + "jq");
                break
            }
            return Jr.name_ = i
        }, Qr = /:/g, Zr = ["ng-", "data-ng-", "ng:", "x-ng-"], ei = /[A-Z]/g, ti = !1, ni = 1, ri = 2, ii = 3, oi = 8, ai = 9, si = 11, ui = {
            full: "1.5.0",
            major: 1,
            minor: 5,
            dot: 0,
            codeName: "ennoblement-facilitation"
        };
        Oe.expando = "ng339";
        var li = Oe.cache = {}, ci = 1, fi = function (e, t, n) {
            e.addEventListener(t, n, !1)
        }, pi = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        };
        Oe._data = function (e) {
            return this.cache[e[this.expando]] || {}
        };
        var di = /([\:\-\_]+(.))/g, hi = /^moz([A-Z])/, gi = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        }, vi = r("jqLite"), mi = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, $i = /<|&#?\w+;/, yi = /<([\w:-]+)/, bi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wi = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        wi.optgroup = wi.option, wi.tbody = wi.tfoot = wi.colgroup = wi.caption = wi.thead, wi.th = wi.td;
        var xi = Node.prototype.contains || function (e) {
                return !!(16 & this.compareDocumentPosition(e))
            }, Ci = Oe.prototype = {
            ready: function (n) {
                function r() {
                    i || (i = !0, n())
                }

                var i = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), Oe(e).on("load", r))
            }, toString: function () {
                var e = [];
                return o(this, function (t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            }, eq: function (e) {
                return Ir(e >= 0 ? this[e] : this[this.length + e])
            }, length: 0, push: qr, sort: [].sort, splice: [].splice
        }, ki = {};
        o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
            ki[_r(e)] = e
        });
        var Ti = {};
        o("input,select,option,textarea,button,form,details".split(","), function (e) {
            Ti[e] = !0
        });
        var Si = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
        o({data: Re, removeData: Ie, hasData: Se, cleanData: Ee}, function (e, t) {
            Oe[t] = e
        }), o({
            data: Re, inheritedData: He, scope: function (e) {
                return Ir.data(e, "$scope") || He(e.parentNode || e, ["$isolateScope", "$scope"])
            }, isolateScope: function (e) {
                return Ir.data(e, "$isolateScope") || Ir.data(e, "$isolateScopeNoTemplate")
            }, controller: Ve, injector: function (e) {
                return He(e, "$injector")
            }, removeAttr: function (e, t) {
                e.removeAttribute(t)
            }, hasClass: Fe, css: function (e, t, n) {
                return t = Ce(t), b(n) ? void(e.style[t] = n) : e.style[t]
            }, attr: function (e, t, r) {
                var i = e.nodeType;
                if (i !== ii && i !== ri && i !== oi) {
                    var o = _r(t);
                    if (ki[o]) {
                        if (!b(r))return e[t] || (e.attributes.getNamedItem(t) || g).specified ? o : n;
                        r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
                    } else if (b(r))e.setAttribute(t, r); else if (e.getAttribute) {
                        var a = e.getAttribute(t, 2);
                        return null === a ? n : a
                    }
                }
            }, prop: function (e, t, n) {
                return b(n) ? void(e[t] = n) : e[t]
            }, text: function () {
                function e(e, t) {
                    if (y(t)) {
                        var n = e.nodeType;
                        return n === ni || n === ii ? e.textContent : ""
                    }
                    e.textContent = t
                }

                return e.$dv = "", e
            }(), val: function (e, t) {
                if (y(t)) {
                    if (e.multiple && "select" === U(e)) {
                        var n = [];
                        return o(e.options, function (e) {
                            e.selected && n.push(e.value || e.text)
                        }), 0 === n.length ? null : n
                    }
                    return e.value
                }
                e.value = t
            }, html: function (e, t) {
                return y(t) ? e.innerHTML : (Ne(e, !0), void(e.innerHTML = t))
            }, empty: Be
        }, function (e, t) {
            Oe.prototype[t] = function (t, n) {
                var r, i, o = this.length;
                if (e !== Be && y(2 == e.length && e !== Fe && e !== Ve ? t : n)) {
                    if (w(t)) {
                        for (r = 0; o > r; r++)if (e === Re)e(this[r], t); else for (i in t)e(this[r], i, t[i]);
                        return this
                    }
                    for (var a = e.$dv, s = y(a) ? Math.min(o, 1) : o, u = 0; s > u; u++) {
                        var l = e(this[u], t, n);
                        a = a ? a + l : l
                    }
                    return a
                }
                for (r = 0; o > r; r++)e(this[r], t, n);
                return this
            }
        }), o({
            removeData: Ie, on: function (e, t, r, i) {
                if (b(i))throw vi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (Te(e)) {
                    var o = Pe(e, !0), a = o.events, s = o.handle;
                    s || (s = o.handle = Ke(e, a));
                    for (var u = t.indexOf(" ") >= 0 ? t.split(" ") : [t], l = u.length, c = function (t, n, i) {
                        var o = a[t];
                        o || (o = a[t] = [], o.specialHandlerWrapper = n, "$destroy" === t || i || fi(e, t, s)), o.push(r)
                    }; l--;)t = u[l], gi[t] ? (c(gi[t], Je), c(t, n, !0)) : c(t)
                }
            }, off: je, one: function (e, t, n) {
                e = Ir(e), e.on(t, function r() {
                    e.off(t, n), e.off(t, r)
                }), e.on(t, n)
            }, replaceWith: function (e, t) {
                var n, r = e.parentNode;
                Ne(e), o(new Oe(t), function (t) {
                    n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
                })
            }, children: function (e) {
                var t = [];
                return o(e.childNodes, function (e) {
                    e.nodeType === ni && t.push(e)
                }), t
            }, contents: function (e) {
                return e.contentDocument || e.childNodes || []
            }, append: function (e, t) {
                var n = e.nodeType;
                if (n === ni || n === si) {
                    t = new Oe(t);
                    for (var r = 0, i = t.length; i > r; r++) {
                        var o = t[r];
                        e.appendChild(o)
                    }
                }
            }, prepend: function (e, t) {
                if (e.nodeType === ni) {
                    var n = e.firstChild;
                    o(new Oe(t), function (t) {
                        e.insertBefore(t, n)
                    })
                }
            }, wrap: function (e, t) {
                _e(e, Ir(t).eq(0).clone()[0])
            }, remove: We, detach: function (e) {
                We(e, !0)
            }, after: function (e, t) {
                var n = e, r = e.parentNode;
                t = new Oe(t);
                for (var i = 0, o = t.length; o > i; i++) {
                    var a = t[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
            }, addClass: qe, removeClass: Ue, toggleClass: function (e, t, n) {
                t && o(t.split(" "), function (t) {
                    var r = n;
                    y(r) && (r = !Fe(e, t)), (r ? qe : Ue)(e, t)
                })
            }, parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== si ? t : null
            }, next: function (e) {
                return e.nextElementSibling
            }, find: function (e, t) {
                return e.getElementsByTagName ? e.getElementsByTagName(t) : []
            }, clone: Me, triggerHandler: function (e, t, n) {
                var r, i, a, s = t.type || t, u = Pe(e), l = u && u.events, c = l && l[s];
                c && (r = {
                    preventDefault: function () {
                        this.defaultPrevented = !0
                    }, isDefaultPrevented: function () {
                        return this.defaultPrevented === !0
                    }, stopImmediatePropagation: function () {
                        this.immediatePropagationStopped = !0
                    }, isImmediatePropagationStopped: function () {
                        return this.immediatePropagationStopped === !0
                    }, stopPropagation: g, type: s, target: e
                }, t.type && (r = f(r, t)), i = V(c), a = n ? [r].concat(n) : [r], o(i, function (t) {
                    r.isImmediatePropagationStopped() || t.apply(e, a)
                }))
            }
        }, function (e, t) {
            Oe.prototype[t] = function (t, n, r) {
                for (var i, o = 0, a = this.length; a > o; o++)y(i) ? (i = e(this[o], t, n, r), b(i) && (i = Ir(i))) : Le(i, e(this[o], t, n, r));
                return b(i) ? i : this
            }, Oe.prototype.bind = Oe.prototype.on, Oe.prototype.unbind = Oe.prototype.off
        }), et.prototype = {
            put: function (e, t) {
                this[Ze(e, this.nextUid)] = t
            }, get: function (e) {
                return this[Ze(e, this.nextUid)]
            }, remove: function (e) {
                var t = this[e = Ze(e, this.nextUid)];
                return delete this[e], t
            }
        };
        var Ei = [function () {
            this.$get = [function () {
                return et
            }]
        }], Di = /^([^\(]+?)=>/, Ai = /^[^\(]*\(\s*([^\)]*)\)/m, _i = /,/, Oi = /^\s*(_?)(\S+?)\1\s*$/, Mi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ni = r("$injector");
        it.$$annotate = rt;
        var ji = r("$animate"), Ii = 1, Pi = "ng-animate", Ri = function () {
            this.$get = function () {
            }
        }, Fi = function () {
            var e = new et, t = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
                function i(e, t, n) {
                    var r = !1;
                    return t && (t = C(t) ? t.split(" ") : zr(t) ? t : [], o(t, function (t) {
                        t && (r = !0, e[t] = n)
                    })), r
                }

                function a() {
                    o(t, function (t) {
                        var n = e.get(t);
                        if (n) {
                            var r = ut(t.attr("class")), i = "", a = "";
                            o(n, function (e, t) {
                                var n = !!r[t];
                                e !== n && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                            }), o(t, function (e) {
                                i && qe(e, i), a && Ue(e, a)
                            }), e.remove(t)
                        }
                    }), t.length = 0
                }

                function s(n, o, s) {
                    var u = e.get(n) || {}, l = i(u, o, !0), c = i(u, s, !1);
                    (l || c) && (e.put(n, u), t.push(n), 1 === t.length && r.$$postDigest(a))
                }

                return {
                    enabled: g, on: g, off: g, pin: g, push: function (e, t, r, i) {
                        i && i(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && s(e, r.addClass, r.removeClass);
                        var o = new n;
                        return o.complete(), o
                    }
                }
            }]
        }, Ui = ["$provide", function (e) {
            var t = this;
            this.$$registeredAnimations = Object.create(null), this.register = function (n, r) {
                if (n && "." !== n.charAt(0))throw ji("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                var i = n + "-animation";
                t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
            }, this.classNameFilter = function (e) {
                if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter)) {
                    var t = new RegExp("(\\s+|\\/)" + Pi + "(\\s+|\\/)");
                    if (t.test(this.$$classNameFilter.toString()))throw ji("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Pi)
                }
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function (e) {
                function t(e, t, n) {
                    if (n) {
                        var r = st(n);
                        !r || r.parentNode || r.previousElementSibling || (n = null)
                    }
                    n ? n.after(e) : t.prepend(e)
                }

                return {
                    on: e.on, off: e.off, pin: e.pin, enabled: e.enabled, cancel: function (e) {
                        e.end && e.end()
                    }, enter: function (n, r, i, o) {
                        return r = r && Ir(r), i = i && Ir(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", lt(o))
                    }, move: function (n, r, i, o) {
                        return r = r && Ir(r), i = i && Ir(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", lt(o))
                    }, leave: function (t, n) {
                        return e.push(t, "leave", lt(n), function () {
                            t.remove()
                        })
                    }, addClass: function (t, n, r) {
                        return r = lt(r), r.addClass = at(r.addclass, n), e.push(t, "addClass", r)
                    }, removeClass: function (t, n, r) {
                        return r = lt(r), r.removeClass = at(r.removeClass, n), e.push(t, "removeClass", r)
                    }, setClass: function (t, n, r, i) {
                        return i = lt(i), i.addClass = at(i.addClass, n), i.removeClass = at(i.removeClass, r), e.push(t, "setClass", i)
                    }, animate: function (t, n, r, i, o) {
                        return o = lt(o), o.from = o.from ? f(o.from, n) : n, o.to = o.to ? f(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = at(o.tempClasses, i), e.push(t, "animate", o)
                    }
                }
            }]
        }], qi = function () {
            this.$get = ["$$rAF", function (e) {
                function t(t) {
                    n.push(t), n.length > 1 || e(function () {
                        for (var e = 0; e < n.length; e++)n[e]();
                        n = []
                    })
                }

                var n = [];
                return function () {
                    var e = !1;
                    return t(function () {
                        e = !0;
                    }), function (n) {
                        e ? n() : t(n)
                    }
                }
            }]
        }, Li = function () {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (e, t, n, r, i) {
                function a(e) {
                    this.setHost(e);
                    var t = n(), o = function (e) {
                        i(e, 0, !1)
                    };
                    this._doneCallbacks = [], this._tick = function (e) {
                        var n = r[0];
                        n && n.hidden ? o(e) : t(e)
                    }, this._state = 0
                }

                var s = 0, u = 1, l = 2;
                return a.chain = function (e, t) {
                    function n() {
                        return r === e.length ? void t(!0) : void e[r](function (e) {
                            return e === !1 ? void t(!1) : (r++, void n())
                        })
                    }

                    var r = 0;
                    n()
                }, a.all = function (e, t) {
                    function n(n) {
                        i = i && n, ++r === e.length && t(i)
                    }

                    var r = 0, i = !0;
                    o(e, function (e) {
                        e.done(n)
                    })
                }, a.prototype = {
                    setHost: function (e) {
                        this.host = e || {}
                    }, done: function (e) {
                        this._state === l ? e() : this._doneCallbacks.push(e)
                    }, progress: g, getPromise: function () {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function (e, n) {
                                t.done(function (t) {
                                    t === !1 ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    }, then: function (e, t) {
                        return this.getPromise().then(e, t)
                    }, "catch": function (e) {
                        return this.getPromise()["catch"](e)
                    }, "finally": function (e) {
                        return this.getPromise()["finally"](e)
                    }, pause: function () {
                        this.host.pause && this.host.pause()
                    }, resume: function () {
                        this.host.resume && this.host.resume()
                    }, end: function () {
                        this.host.end && this.host.end(), this._resolve(!0)
                    }, cancel: function () {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    }, complete: function (e) {
                        var t = this;
                        t._state === s && (t._state = u, t._tick(function () {
                            t._resolve(e)
                        }))
                    }, _resolve: function (e) {
                        this._state !== l && (o(this._doneCallbacks, function (t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = l)
                    }
                }, a
            }]
        }, Vi = function () {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (e, t, n) {
                return function (t, r) {
                    function i() {
                        return e(function () {
                            o(), s || u.complete(), s = !0
                        }), u
                    }

                    function o() {
                        a.addClass && (t.addClass(a.addClass), a.addClass = null), a.removeClass && (t.removeClass(a.removeClass), a.removeClass = null), a.to && (t.css(a.to), a.to = null)
                    }

                    var a = r || {};
                    a.$$prepared || (a = L(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (t.css(a.from), a.from = null);
                    var s, u = new n;
                    return {start: i, end: i}
                }
            }]
        }, Hi = r("$compile");
        ht.$inject = ["$provide", "$$sanitizeUriProvider"];
        var Bi = /^((?:x|data)[\:\-_])/i, Wi = r("$controller"), zi = /^(\S+)(\s+as\s+([\w$]+))?$/, Yi = function () {
            this.$get = ["$document", function (e) {
                return function (t) {
                    return t ? !t.nodeType && t instanceof Ir && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        }, Gi = "application/json", Ki = {"Content-Type": Gi + ";charset=utf-8"}, Xi = /^\[|^\{(?!\{)/, Ji = {
            "[": /]$/,
            "{": /}$/
        }, Qi = /^\)\]\}',?\n/, Zi = r("$http"), eo = function (e) {
            return function () {
                throw Zi("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
            }
        }, to = Br.$interpolateMinErr = r("$interpolate");
        to.throwNoconcat = function (e) {
            throw to("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
        }, to.interr = function (e, t) {
            return to("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
        };
        var no = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, ro = {
            http: 80,
            https: 443,
            ftp: 21
        }, io = r("$location"), oo = {
            $$html5: !1, $$replace: !1, absUrl: Gt("$$absUrl"), url: function (e) {
                if (y(e))return this.$$url;
                var t = no.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            }, protocol: Gt("$$protocol"), host: Gt("$$host"), port: Gt("$$port"), path: Kt("$$path", function (e) {
                return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
            }), search: function (e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (C(e) || k(e))e = e.toString(), this.$$search = te(e); else {
                            if (!w(e))throw io("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            e = L(e, {}), o(e, function (t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        y(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            }, hash: Kt("$$hash", function (e) {
                return null !== e ? e.toString() : ""
            }), replace: function () {
                return this.$$replace = !0, this
            }
        };
        o([Yt, zt, Wt], function (e) {
            e.prototype = Object.create(oo), e.prototype.state = function (t) {
                if (!arguments.length)return this.$$state;
                if (e !== Wt || !this.$$html5)throw io("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = y(t) ? null : t, this
            }
        });
        var ao = r("$parse"), so = Function.prototype.call, uo = Function.prototype.apply, lo = Function.prototype.bind, co = me();
        o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
            co[e] = !0
        });
        var fo = {n: "\n", f: "\f", r: "\r", t: "	", v: "\x0B", "'": "'", '"': '"'}, po = function (e) {
            this.options = e
        };
        po.prototype = {
            constructor: po, lex: function (e) {
                for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var t = this.text.charAt(this.index);
                    if ('"' === t || "'" === t)this.readString(t); else if (this.isNumber(t) || "." === t && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(t))this.readIdent(); else if (this.is(t, "(){}[].,;:?"))this.tokens.push({
                        index: this.index,
                        text: t
                    }), this.index++; else if (this.isWhitespace(t))this.index++; else {
                        var n = t + this.peek(), r = n + this.peek(2), i = co[t], o = co[n], a = co[r];
                        if (i || o || a) {
                            var s = a ? r : o ? n : t;
                            this.tokens.push({index: this.index, text: s, operator: !0}), this.index += s.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            }, is: function (e, t) {
                return -1 !== t.indexOf(e)
            }, peek: function (e) {
                var t = e || 1;
                return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
            }, isNumber: function (e) {
                return e >= "0" && "9" >= e && "string" == typeof e
            }, isWhitespace: function (e) {
                return " " === e || "\r" === e || "	" === e || "\n" === e || "\x0B" === e || " " === e
            }, isIdent: function (e) {
                return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
            }, isExpOperator: function (e) {
                return "-" === e || "+" === e || this.isNumber(e)
            }, throwError: function (e, t, n) {
                n = n || this.index;
                var r = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
                throw ao("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
            }, readNumber: function () {
                for (var e = "", t = this.index; this.index < this.text.length;) {
                    var n = _r(this.text.charAt(this.index));
                    if ("." == n || this.isNumber(n))e += n; else {
                        var r = this.peek();
                        if ("e" == n && this.isExpOperator(r))e += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1))e += n; else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1))break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({index: t, text: e, constant: !0, value: Number(e)})
            }, readIdent: function () {
                for (var e = this.index; this.index < this.text.length;) {
                    var t = this.text.charAt(this.index);
                    if (!this.isIdent(t) && !this.isNumber(t))break;
                    this.index++
                }
                this.tokens.push({index: e, text: this.text.slice(e, this.index), identifier: !0})
            }, readString: function (e) {
                var t = this.index;
                this.index++;
                for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                        } else {
                            var s = fo[o];
                            n += s || o
                        }
                        i = !1
                    } else if ("\\" === o)i = !0; else {
                        if (o === e)return this.index++, void this.tokens.push({
                            index: t,
                            text: r,
                            constant: !0,
                            value: n
                        });
                        n += o
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", t)
            }
        };
        var ho = function (e, t) {
            this.lexer = e, this.options = t
        };
        ho.Program = "Program", ho.ExpressionStatement = "ExpressionStatement", ho.AssignmentExpression = "AssignmentExpression", ho.ConditionalExpression = "ConditionalExpression", ho.LogicalExpression = "LogicalExpression", ho.BinaryExpression = "BinaryExpression", ho.UnaryExpression = "UnaryExpression", ho.CallExpression = "CallExpression", ho.MemberExpression = "MemberExpression", ho.Identifier = "Identifier", ho.Literal = "Literal", ho.ArrayExpression = "ArrayExpression", ho.Property = "Property", ho.ObjectExpression = "ObjectExpression", ho.ThisExpression = "ThisExpression", ho.LocalsExpression = "LocalsExpression", ho.NGValueParameter = "NGValueParameter", ho.prototype = {
            ast: function (e) {
                this.text = e, this.tokens = this.lexer.lex(e);
                var t = this.program();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
            },
            program: function () {
                for (var e = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";"))return {
                    type: ho.Program,
                    body: e
                }
            },
            expressionStatement: function () {
                return {type: ho.ExpressionStatement, expression: this.filterChain()}
            },
            filterChain: function () {
                for (var e, t = this.expression(); e = this.expect("|");)t = this.filter(t);
                return t
            },
            expression: function () {
                return this.assignment()
            },
            assignment: function () {
                var e = this.ternary();
                return this.expect("=") && (e = {
                    type: ho.AssignmentExpression,
                    left: e,
                    right: this.assignment(),
                    operator: "="
                }), e
            },
            ternary: function () {
                var e, t, n = this.logicalOR();
                return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                    type: ho.ConditionalExpression,
                    test: n,
                    alternate: e,
                    consequent: t
                }) : n
            },
            logicalOR: function () {
                for (var e = this.logicalAND(); this.expect("||");)e = {
                    type: ho.LogicalExpression,
                    operator: "||",
                    left: e,
                    right: this.logicalAND()
                };
                return e
            },
            logicalAND: function () {
                for (var e = this.equality(); this.expect("&&");)e = {
                    type: ho.LogicalExpression,
                    operator: "&&",
                    left: e,
                    right: this.equality()
                };
                return e
            },
            equality: function () {
                for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");)t = {
                    type: ho.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.relational()
                };
                return t
            },
            relational: function () {
                for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");)t = {
                    type: ho.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.additive()
                };
                return t
            },
            additive: function () {
                for (var e, t = this.multiplicative(); e = this.expect("+", "-");)t = {
                    type: ho.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.multiplicative()
                };
                return t
            },
            multiplicative: function () {
                for (var e, t = this.unary(); e = this.expect("*", "/", "%");)t = {
                    type: ho.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.unary()
                };
                return t
            },
            unary: function () {
                var e;
                return (e = this.expect("+", "-", "!")) ? {
                    type: ho.UnaryExpression,
                    operator: e.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary()
            },
            primary: function () {
                var e;
                this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.constants.hasOwnProperty(this.peek().text) ? e = L(this.constants[this.consume().text]) : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var t; t = this.expect("(", "[", ".");)"(" === t.text ? (e = {
                    type: ho.CallExpression,
                    callee: e,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === t.text ? (e = {
                    type: ho.MemberExpression,
                    object: e,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === t.text ? e = {
                    type: ho.MemberExpression,
                    object: e,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return e
            },
            filter: function (e) {
                for (var t = [e], n = {
                    type: ho.CallExpression,
                    callee: this.identifier(),
                    arguments: t,
                    filter: !0
                }; this.expect(":");)t.push(this.expression());
                return n
            },
            parseArguments: function () {
                var e = [];
                if (")" !== this.peekToken().text)do e.push(this.expression()); while (this.expect(","));
                return e
            },
            identifier: function () {
                var e = this.consume();
                return e.identifier || this.throwError("is not a valid identifier", e), {
                    type: ho.Identifier,
                    name: e.text
                }
            },
            constant: function () {
                return {type: ho.Literal, value: this.consume().value}
            },
            arrayDeclaration: function () {
                var e = [];
                if ("]" !== this.peekToken().text)do {
                    if (this.peek("]"))break;
                    e.push(this.expression())
                } while (this.expect(","));
                return this.consume("]"), {type: ho.ArrayExpression, elements: e}
            },
            object: function () {
                var e, t = [];
                if ("}" !== this.peekToken().text)do {
                    if (this.peek("}"))break;
                    e = {
                        type: ho.Property,
                        kind: "init"
                    }, this.peek().constant ? e.key = this.constant() : this.peek().identifier ? e.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), e.value = this.expression(), t.push(e)
                } while (this.expect(","));
                return this.consume("}"), {type: ho.ObjectExpression, properties: t}
            },
            throwError: function (e, t) {
                throw ao("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
            },
            consume: function (e) {
                if (0 === this.tokens.length)throw ao("ueoe", "Unexpected end of expression: {0}", this.text);
                var t = this.expect(e);
                return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
            },
            peekToken: function () {
                if (0 === this.tokens.length)throw ao("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function (e, t, n, r) {
                return this.peekAhead(0, e, t, n, r)
            },
            peekAhead: function (e, t, n, r, i) {
                if (this.tokens.length > e) {
                    var o = this.tokens[e], a = o.text;
                    if (a === t || a === n || a === r || a === i || !t && !n && !r && !i)return o
                }
                return !1
            },
            expect: function (e, t, n, r) {
                var i = this.peek(e, t, n, r);
                return i ? (this.tokens.shift(), i) : !1
            },
            constants: {
                "true": {type: ho.Literal, value: !0},
                "false": {type: ho.Literal, value: !1},
                "null": {type: ho.Literal, value: null},
                undefined: {type: ho.Literal, value: n},
                "this": {type: ho.ThisExpression},
                $locals: {type: ho.LocalsExpression}
            }
        }, dn.prototype = {
            compile: function (e, t) {
                var r = this, i = this.astBuilder.ast(e);
                this.state = {
                    nextId: 0,
                    filters: {},
                    expensiveChecks: t,
                    fn: {vars: [], body: [], own: {}},
                    assign: {vars: [], body: [], own: {}},
                    inputs: []
                }, sn(i, r.$filter);
                var a, s = "";
                if (this.stage = "assign", a = cn(i)) {
                    this.state.computing = "assign";
                    var u = this.nextId();
                    this.recurse(a, u), this.return_(u), s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                }
                var l = un(i.body);
                r.stage = "inputs", o(l, function (e, t) {
                    var n = "fn" + t;
                    r.state[n] = {vars: [], body: [], own: {}}, r.state.computing = n;
                    var i = r.nextId();
                    r.recurse(e, i), r.return_(i), r.state.inputs.push(n), e.watchId = t
                }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
                var c = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;", f = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", c)(this.$filter, Qt, en, tn, Zt, nn, rn, on, e);
                return this.state = this.stage = n, f.literal = fn(i), f.constant = pn(i), f
            }, USE: "use", STRICT: "strict", watchFns: function () {
                var e = [], t = this.state.inputs, n = this;
                return o(t, function (t) {
                    e.push("var " + t + "=" + n.generateFunction(t, "s"))
                }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
            }, generateFunction: function (e, t) {
                return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
            }, filterPrefix: function () {
                var e = [], t = this;
                return o(this.state.filters, function (n, r) {
                    e.push(n + "=$filter(" + t.escape(r) + ")")
                }), e.length ? "var " + e.join(",") + ";" : ""
            }, varsPrefix: function (e) {
                return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
            }, body: function (e) {
                return this.state[e].body.join("")
            }, recurse: function (e, t, r, i, a, s) {
                var u, l, c, f, p = this;
                if (i = i || g, !s && b(e.watchId))return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, r, i, a, !0));
                switch (e.type) {
                    case ho.Program:
                        o(e.body, function (t, r) {
                            p.recurse(t.expression, n, n, function (e) {
                                l = e
                            }), r !== e.body.length - 1 ? p.current().body.push(l, ";") : p.return_(l)
                        });
                        break;
                    case ho.Literal:
                        f = this.escape(e.value), this.assign(t, f), i(f);
                        break;
                    case ho.UnaryExpression:
                        this.recurse(e.argument, n, n, function (e) {
                            l = e
                        }), f = e.operator + "(" + this.ifDefined(l, 0) + ")", this.assign(t, f), i(f);
                        break;
                    case ho.BinaryExpression:
                        this.recurse(e.left, n, n, function (e) {
                            u = e
                        }), this.recurse(e.right, n, n, function (e) {
                            l = e
                        }), f = "+" === e.operator ? this.plus(u, l) : "-" === e.operator ? this.ifDefined(u, 0) + e.operator + this.ifDefined(l, 0) : "(" + u + ")" + e.operator + "(" + l + ")", this.assign(t, f), i(f);
                        break;
                    case ho.LogicalExpression:
                        t = t || this.nextId(), p.recurse(e.left, t), p.if_("&&" === e.operator ? t : p.not(t), p.lazyRecurse(e.right, t)), i(t);
                        break;
                    case ho.ConditionalExpression:
                        t = t || this.nextId(), p.recurse(e.test, t), p.if_(t, p.lazyRecurse(e.alternate, t), p.lazyRecurse(e.consequent, t)), i(t);
                        break;
                    case ho.Identifier:
                        t = t || this.nextId(), r && (r.context = "inputs" === p.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), r.computed = !1, r.name = e.name), Qt(e.name), p.if_("inputs" === p.stage || p.not(p.getHasOwnProperty("l", e.name)), function () {
                            p.if_("inputs" === p.stage || "s", function () {
                                a && 1 !== a && p.if_(p.not(p.nonComputedMember("s", e.name)), p.lazyAssign(p.nonComputedMember("s", e.name), "{}")), p.assign(t, p.nonComputedMember("s", e.name))
                            })
                        }, t && p.lazyAssign(t, p.nonComputedMember("l", e.name))), (p.state.expensiveChecks || gn(e.name)) && p.addEnsureSafeObject(t), i(t);
                        break;
                    case ho.MemberExpression:
                        u = r && (r.context = this.nextId()) || this.nextId(), t = t || this.nextId(), p.recurse(e.object, u, n, function () {
                            p.if_(p.notNull(u), function () {
                                a && 1 !== a && p.addEnsureSafeAssignContext(u), e.computed ? (l = p.nextId(), p.recurse(e.property, l), p.getStringValue(l), p.addEnsureSafeMemberName(l), a && 1 !== a && p.if_(p.not(p.computedMember(u, l)), p.lazyAssign(p.computedMember(u, l), "{}")), f = p.ensureSafeObject(p.computedMember(u, l)), p.assign(t, f), r && (r.computed = !0, r.name = l)) : (Qt(e.property.name), a && 1 !== a && p.if_(p.not(p.nonComputedMember(u, e.property.name)), p.lazyAssign(p.nonComputedMember(u, e.property.name), "{}")), f = p.nonComputedMember(u, e.property.name), (p.state.expensiveChecks || gn(e.property.name)) && (f = p.ensureSafeObject(f)), p.assign(t, f), r && (r.computed = !1, r.name = e.property.name))
                            }, function () {
                                p.assign(t, "undefined")
                            }), i(t)
                        }, !!a);
                        break;
                    case ho.CallExpression:
                        t = t || this.nextId(), e.filter ? (l = p.filter(e.callee.name), c = [], o(e.arguments, function (e) {
                            var t = p.nextId();
                            p.recurse(e, t), c.push(t)
                        }), f = l + "(" + c.join(",") + ")", p.assign(t, f), i(t)) : (l = p.nextId(), u = {}, c = [], p.recurse(e.callee, l, u, function () {
                            p.if_(p.notNull(l), function () {
                                p.addEnsureSafeFunction(l), o(e.arguments, function (e) {
                                    p.recurse(e, p.nextId(), n, function (e) {
                                        c.push(p.ensureSafeObject(e))
                                    })
                                }), u.name ? (p.state.expensiveChecks || p.addEnsureSafeObject(u.context), f = p.member(u.context, u.name, u.computed) + "(" + c.join(",") + ")") : f = l + "(" + c.join(",") + ")", f = p.ensureSafeObject(f), p.assign(t, f)
                            }, function () {
                                p.assign(t, "undefined")
                            }), i(t)
                        }));
                        break;
                    case ho.AssignmentExpression:
                        if (l = this.nextId(), u = {}, !ln(e.left))throw ao("lval", "Trying to assign a value to a non l-value");
                        this.recurse(e.left, n, u, function () {
                            p.if_(p.notNull(u.context), function () {
                                p.recurse(e.right, l), p.addEnsureSafeObject(p.member(u.context, u.name, u.computed)), p.addEnsureSafeAssignContext(u.context), f = p.member(u.context, u.name, u.computed) + e.operator + l, p.assign(t, f), i(t || f)
                            })
                        }, 1);
                        break;
                    case ho.ArrayExpression:
                        c = [], o(e.elements, function (e) {
                            p.recurse(e, p.nextId(), n, function (e) {
                                c.push(e)
                            })
                        }), f = "[" + c.join(",") + "]", this.assign(t, f), i(f);
                        break;
                    case ho.ObjectExpression:
                        c = [], o(e.properties, function (e) {
                            p.recurse(e.value, p.nextId(), n, function (t) {
                                c.push(p.escape(e.key.type === ho.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                            })
                        }), f = "{" + c.join(",") + "}", this.assign(t, f), i(f);
                        break;
                    case ho.ThisExpression:
                        this.assign(t, "s"), i("s");
                        break;
                    case ho.LocalsExpression:
                        this.assign(t, "l"), i("l");
                        break;
                    case ho.NGValueParameter:
                        this.assign(t, "v"), i("v")
                }
            }, getHasOwnProperty: function (e, t) {
                var n = e + "." + t, r = this.current().own;
                return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
            }, assign: function (e, t) {
                return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
            }, filter: function (e) {
                return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
            }, ifDefined: function (e, t) {
                return "ifDefined(" + e + "," + this.escape(t) + ")"
            }, plus: function (e, t) {
                return "plus(" + e + "," + t + ")"
            }, return_: function (e) {
                this.current().body.push("return ", e, ";")
            }, if_: function (e, t, n) {
                if (e === !0)t(); else {
                    var r = this.current().body;
                    r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
                }
            }, not: function (e) {
                return "!(" + e + ")"
            }, notNull: function (e) {
                return e + "!=null"
            }, nonComputedMember: function (e, t) {
                return e + "." + t
            }, computedMember: function (e, t) {
                return e + "[" + t + "]"
            }, member: function (e, t, n) {
                return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
            }, addEnsureSafeObject: function (e) {
                this.current().body.push(this.ensureSafeObject(e), ";")
            }, addEnsureSafeMemberName: function (e) {
                this.current().body.push(this.ensureSafeMemberName(e), ";")
            }, addEnsureSafeFunction: function (e) {
                this.current().body.push(this.ensureSafeFunction(e), ";")
            }, addEnsureSafeAssignContext: function (e) {
                this.current().body.push(this.ensureSafeAssignContext(e), ";")
            }, ensureSafeObject: function (e) {
                return "ensureSafeObject(" + e + ",text)"
            }, ensureSafeMemberName: function (e) {
                return "ensureSafeMemberName(" + e + ",text)"
            }, ensureSafeFunction: function (e) {
                return "ensureSafeFunction(" + e + ",text)"
            }, getStringValue: function (e) {
                this.assign(e, "getStringValue(" + e + ")")
            }, ensureSafeAssignContext: function (e) {
                return "ensureSafeAssignContext(" + e + ",text)"
            }, lazyRecurse: function (e, t, n, r, i, o) {
                var a = this;
                return function () {
                    a.recurse(e, t, n, r, i, o)
                }
            }, lazyAssign: function (e, t) {
                var n = this;
                return function () {
                    n.assign(e, t)
                }
            }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }, escape: function (e) {
                if (C(e))return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (k(e))return e.toString();
                if (e === !0)return "true";
                if (e === !1)return "false";
                if (null === e)return "null";
                if ("undefined" == typeof e)return "undefined";
                throw ao("esc", "IMPOSSIBLE")
            }, nextId: function (e, t) {
                var n = "v" + this.state.nextId++;
                return e || this.current().vars.push(n + (t ? "=" + t : "")), n
            }, current: function () {
                return this.state[this.state.computing]
            }
        }, hn.prototype = {
            compile: function (e, t) {
                var n = this, r = this.astBuilder.ast(e);
                this.expression = e, this.expensiveChecks = t, sn(r, n.$filter);
                var i, a;
                (i = cn(r)) && (a = this.recurse(i));
                var s, u = un(r.body);
                u && (s = [], o(u, function (e, t) {
                    var r = n.recurse(e);
                    e.input = r, s.push(r), e.watchId = t
                }));
                var l = [];
                o(r.body, function (e) {
                    l.push(n.recurse(e.expression))
                });
                var c = 0 === r.body.length ? function () {
                } : 1 === r.body.length ? l[0] : function (e, t) {
                    var n;
                    return o(l, function (r) {
                        n = r(e, t)
                    }), n
                };
                return a && (c.assign = function (e, t, n) {
                    return a(e, n, t)
                }), s && (c.inputs = s), c.literal = fn(r), c.constant = pn(r), c
            }, recurse: function (e, t, r) {
                var i, a, s, u = this;
                if (e.input)return this.inputs(e.input, e.watchId);
                switch (e.type) {
                    case ho.Literal:
                        return this.value(e.value, t);
                    case ho.UnaryExpression:
                        return a = this.recurse(e.argument), this["unary" + e.operator](a, t);
                    case ho.BinaryExpression:
                        return i = this.recurse(e.left), a = this.recurse(e.right), this["binary" + e.operator](i, a, t);
                    case ho.LogicalExpression:
                        return i = this.recurse(e.left), a = this.recurse(e.right), this["binary" + e.operator](i, a, t);
                    case ho.ConditionalExpression:
                        return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                    case ho.Identifier:
                        return Qt(e.name, u.expression), u.identifier(e.name, u.expensiveChecks || gn(e.name), t, r, u.expression);
                    case ho.MemberExpression:
                        return i = this.recurse(e.object, !1, !!r), e.computed || (Qt(e.property.name, u.expression), a = e.property.name), e.computed && (a = this.recurse(e.property)), e.computed ? this.computedMember(i, a, t, r, u.expression) : this.nonComputedMember(i, a, u.expensiveChecks, t, r, u.expression);
                    case ho.CallExpression:
                        return s = [], o(e.arguments, function (e) {
                            s.push(u.recurse(e))
                        }), e.filter && (a = this.$filter(e.callee.name)), e.filter || (a = this.recurse(e.callee, !0)), e.filter ? function (e, r, i, o) {
                            for (var u = [], l = 0; l < s.length; ++l)u.push(s[l](e, r, i, o));
                            var c = a.apply(n, u, o);
                            return t ? {context: n, name: n, value: c} : c
                        } : function (e, n, r, i) {
                            var o, l = a(e, n, r, i);
                            if (null != l.value) {
                                en(l.context, u.expression), tn(l.value, u.expression);
                                for (var c = [], f = 0; f < s.length; ++f)c.push(en(s[f](e, n, r, i), u.expression));
                                o = en(l.value.apply(l.context, c), u.expression)
                            }
                            return t ? {value: o} : o
                        };
                    case ho.AssignmentExpression:
                        return i = this.recurse(e.left, !0, 1), a = this.recurse(e.right), function (e, n, r, o) {
                            var s = i(e, n, r, o), l = a(e, n, r, o);
                            return en(s.value, u.expression), nn(s.context), s.context[s.name] = l, t ? {value: l} : l
                        };
                    case ho.ArrayExpression:
                        return s = [], o(e.elements, function (e) {
                            s.push(u.recurse(e))
                        }), function (e, n, r, i) {
                            for (var o = [], a = 0; a < s.length; ++a)o.push(s[a](e, n, r, i));
                            return t ? {value: o} : o
                        };
                    case ho.ObjectExpression:
                        return s = [], o(e.properties, function (e) {
                            s.push({
                                key: e.key.type === ho.Identifier ? e.key.name : "" + e.key.value,
                                value: u.recurse(e.value)
                            })
                        }), function (e, n, r, i) {
                            for (var o = {}, a = 0; a < s.length; ++a)o[s[a].key] = s[a].value(e, n, r, i);
                            return t ? {value: o} : o
                        };
                    case ho.ThisExpression:
                        return function (e) {
                            return t ? {value: e} : e
                        };
                    case ho.LocalsExpression:
                        return function (e, n) {
                            return t ? {value: n} : n
                        };
                    case ho.NGValueParameter:
                        return function (e, n, r, i) {
                            return t ? {value: r} : r
                        }
                }
            }, "unary+": function (e, t) {
                return function (n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = b(a) ? +a : 0, t ? {value: a} : a
                }
            }, "unary-": function (e, t) {
                return function (n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = b(a) ? -a : 0, t ? {value: a} : a
                }
            }, "unary!": function (e, t) {
                return function (n, r, i, o) {
                    var a = !e(n, r, i, o);
                    return t ? {value: a} : a
                }
            }, "binary+": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a), u = t(r, i, o, a), l = on(s, u);
                    return n ? {value: l} : l
                }
            }, "binary-": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a), u = t(r, i, o, a), l = (b(s) ? s : 0) - (b(u) ? u : 0);
                    return n ? {value: l} : l
                }
            }, "binary*": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) * t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary/": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) / t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary%": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) % t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary===": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) === t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary!==": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) !== t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary==": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) == t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary!=": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) != t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary<": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) < t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary>": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) > t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary<=": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) <= t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary>=": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) >= t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary&&": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) && t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "binary||": function (e, t, n) {
                return function (r, i, o, a) {
                    var s = e(r, i, o, a) || t(r, i, o, a);
                    return n ? {value: s} : s
                }
            }, "ternary?:": function (e, t, n, r) {
                return function (i, o, a, s) {
                    var u = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
                    return r ? {value: u} : u
                }
            }, value: function (e, t) {
                return function () {
                    return t ? {context: n, name: n, value: e} : e
                }
            }, identifier: function (e, t, r, i, o) {
                return function (a, s, u, l) {
                    var c = s && e in s ? s : a;
                    i && 1 !== i && c && !c[e] && (c[e] = {});
                    var f = c ? c[e] : n;
                    return t && en(f, o), r ? {context: c, name: e, value: f} : f
                }
            }, computedMember: function (e, t, n, r, i) {
                return function (o, a, s, u) {
                    var l, c, f = e(o, a, s, u);
                    return null != f && (l = t(o, a, s, u), l = Zt(l), Qt(l, i), r && 1 !== r && (nn(f), f && !f[l] && (f[l] = {})), c = f[l], en(c, i)), n ? {
                        context: f,
                        name: l,
                        value: c
                    } : c
                }
            }, nonComputedMember: function (e, t, r, i, o, a) {
                return function (s, u, l, c) {
                    var f = e(s, u, l, c);
                    o && 1 !== o && (nn(f), f && !f[t] && (f[t] = {}));
                    var p = null != f ? f[t] : n;
                    return (r || gn(t)) && en(p, a), i ? {context: f, name: t, value: p} : p
                }
            }, inputs: function (e, t) {
                return function (n, r, i, o) {
                    return o ? o[t] : e(n, r, i)
                }
            }
        };
        var go = function (e, t, n) {
            this.lexer = e, this.$filter = t, this.options = n, this.ast = new ho(this.lexer), this.astCompiler = n.csp ? new hn(this.ast, t) : new dn(this.ast, t)
        };
        go.prototype = {
            constructor: go, parse: function (e) {
                return this.astCompiler.compile(e, this.options.expensiveChecks)
            }
        };
        var vo = Object.prototype.valueOf, mo = r("$sce"), $o = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }, Hi = r("$compile"), yo = t.createElement("a"), bo = Mn(e.location.href);
        In.$inject = ["$document"], Rn.$inject = ["$provide"];
        var wo = 22, xo = ".", Co = "0";
        Vn.$inject = ["$locale"], Hn.$inject = ["$locale"];
        var ko = {
            yyyy: Gn("FullYear", 4),
            yy: Gn("FullYear", 2, 0, !0),
            y: Gn("FullYear", 1),
            MMMM: Kn("Month"),
            MMM: Kn("Month", !0),
            MM: Gn("Month", 2, 1),
            M: Gn("Month", 1, 1),
            dd: Gn("Date", 2),
            d: Gn("Date", 1),
            HH: Gn("Hours", 2),
            H: Gn("Hours", 1),
            hh: Gn("Hours", 2, -12),
            h: Gn("Hours", 1, -12),
            mm: Gn("Minutes", 2),
            m: Gn("Minutes", 1),
            ss: Gn("Seconds", 2),
            s: Gn("Seconds", 1),
            sss: Gn("Milliseconds", 3),
            EEEE: Kn("Day"),
            EEE: Kn("Day", !0),
            a: er,
            Z: Xn,
            ww: Zn(2),
            w: Zn(1),
            G: tr,
            GG: tr,
            GGG: tr,
            GGGG: nr
        }, To = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, So = /^\-?\d+$/;
        rr.$inject = ["$locale"];
        var Eo = m(_r), Do = m(Or);
        ar.$inject = ["$parse"];
        var Ao = m({
            restrict: "E", compile: function (e, t) {
                return t.href || t.xlinkHref ? void 0 : function (e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === Lr.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function (e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }), _o = {};
        o(ki, function (e, t) {
            function n(e, n, i) {
                e.$watch(i[r], function (e) {
                    i.$set(t, !!e)
                })
            }

            if ("multiple" != e) {
                var r = gt("ng-" + t), i = n;
                "checked" === e && (i = function (e, t, i) {
                    i.ngModel !== i[r] && n(e, t, i)
                }), _o[r] = function () {
                    return {restrict: "A", priority: 100, link: i}
                }
            }
        }), o(Si, function (e, t) {
            _o[t] = function () {
                return {
                    priority: 100, link: function (e, n, r) {
                        if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
                            var i = r.ngPattern.match(Er);
                            if (i)return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                        }
                        e.$watch(r[t], function (e) {
                            r.$set(t, e)
                        })
                    }
                }
            }
        }), o(["src", "srcset", "href"], function (e) {
            var t = gt("ng-" + e);
            _o[t] = function () {
                return {
                    priority: 99, link: function (n, r, i) {
                        var o = e, a = e;
                        "href" === e && "[object SVGAnimatedString]" === Lr.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function (t) {
                            return t ? (i.$set(a, t), void(jr && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
                        })
                    }
                }
            }
        });
        var Oo = {
            $addControl: g,
            $$renameControl: ur,
            $removeControl: g,
            $setValidity: g,
            $setDirty: g,
            $setPristine: g,
            $setSubmitted: g
        }, Mo = "ng-submitted";
        lr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var No = function (e) {
            return ["$timeout", "$parse", function (t, r) {
                function i(e) {
                    return "" === e ? r('this[""]').assign : r(e).assign || g
                }

                var o = {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: lr,
                    compile: function (r, o) {
                        r.addClass(da).addClass(fa);
                        var a = o.name ? "name" : e && o.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (e, r, o, s) {
                                var u = s[0];
                                if (!("action" in o)) {
                                    var l = function (t) {
                                        e.$apply(function () {
                                            u.$commitViewValue(), u.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    fi(r[0], "submit", l), r.on("$destroy", function () {
                                        t(function () {
                                            pi(r[0], "submit", l)
                                        }, 0, !1)
                                    })
                                }
                                var c = s[1] || u.$$parentForm;
                                c.$addControl(u);
                                var p = a ? i(u.$name) : g;
                                a && (p(e, u), o.$observe(a, function (t) {
                                    u.$name !== t && (p(e, n), u.$$parentForm.$$renameControl(u, t), (p = i(u.$name))(e, u))
                                })), r.on("$destroy", function () {
                                    u.$$parentForm.$removeControl(u), p(e, n), f(u, Oo)
                                })
                            }
                        }
                    }
                };
                return o
            }]
        }, jo = No(), Io = No(!0), Po = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Ro = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Fo = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Uo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, qo = /^(\d{4})-(\d{2})-(\d{2})$/, Lo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Vo = /^(\d{4})-W(\d\d)$/, Ho = /^(\d{4})-(\d\d)$/, Bo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Wo = {
            text: fr,
            date: gr("date", qo, hr(qo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": gr("datetimelocal", Lo, hr(Lo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: gr("time", Bo, hr(Bo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: gr("week", Vo, dr, "yyyy-Www"),
            month: gr("month", Ho, hr(Ho, ["yyyy", "MM"]), "yyyy-MM"),
            number: mr,
            url: $r,
            email: yr,
            radio: br,
            checkbox: xr,
            hidden: g,
            button: g,
            submit: g,
            reset: g,
            file: g
        }, zo = ["$browser", "$sniffer", "$filter", "$parse", function (e, t, n, r) {
            return {
                restrict: "E", require: ["?ngModel"], link: {
                    pre: function (i, o, a, s) {
                        s[0] && (Wo[_r(a.type)] || Wo.text)(i, o, a, s[0], t, e, n, r)
                    }
                }
            }
        }], Yo = /^(true|false|\d+)$/, Go = function () {
            return {
                restrict: "A", priority: 100, compile: function (e, t) {
                    return Yo.test(t.ngValue) ? function (e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function (e, t, n) {
                        e.$watch(n.ngValue, function (e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        }, Ko = ["$compile", function (e) {
            return {
                restrict: "AC", compile: function (t) {
                    return e.$$addBindingClass(t), function (t, n, r) {
                        e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function (e) {
                            n.textContent = y(e) ? "" : e
                        })
                    }
                }
            }
        }], Xo = ["$interpolate", "$compile", function (e, t) {
            return {
                compile: function (n) {
                    return t.$$addBindingClass(n), function (n, r, i) {
                        var o = e(r.attr(i.$attr.ngBindTemplate));
                        t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function (e) {
                            r.textContent = y(e) ? "" : e
                        })
                    }
                }
            }
        }], Jo = ["$sce", "$parse", "$compile", function (e, t, n) {
            return {
                restrict: "A", compile: function (r, i) {
                    var o = t(i.ngBindHtml), a = t(i.ngBindHtml, function (e) {
                        return (e || "").toString()
                    });
                    return n.$$addBindingClass(r), function (t, r, i) {
                        n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function () {
                            r.html(e.getTrustedHtml(o(t)) || "")
                        })
                    }
                }
            }
        }], Qo = m({
            restrict: "A", require: "ngModel", link: function (e, t, n, r) {
                r.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                })
            }
        }), Zo = Cr("", !0), ea = Cr("Odd", 0), ta = Cr("Even", 1), na = sr({
            compile: function (e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }), ra = [function () {
            return {restrict: "A", scope: !0, controller: "@", priority: 500}
        }], ia = {}, oa = {blur: !0, focus: !0};
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
            var t = gt("ng-" + e);
            ia[t] = ["$parse", "$rootScope", function (n, r) {
                return {
                    restrict: "A", compile: function (i, o) {
                        var a = n(o[t], null, !0);
                        return function (t, n) {
                            n.on(e, function (n) {
                                var i = function () {
                                    a(t, {$event: n})
                                };
                                oa[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                            })
                        }
                    }
                }
            }]
        });
        var aa = ["$animate", function (e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (n, r, i, o, a) {
                    var s, u, l;
                    n.$watch(i.ngIf, function (n) {
                        n ? u || a(function (n, o) {
                            u = o, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {clone: n}, e.enter(n, r.parent(), r)
                        }) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ve(s.clone), e.leave(l).then(function () {
                            l = null
                        }), s = null))
                    })
                }
            }
        }], sa = ["$templateRequest", "$anchorScroll", "$animate", function (e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Br.noop,
                compile: function (r, i) {
                    var o = i.ngInclude || i.src, a = i.onload || "", s = i.autoscroll;
                    return function (r, i, u, l, c) {
                        var f, p, d, h = 0, g = function () {
                            p && (p.remove(), p = null), f && (f.$destroy(), f = null), d && (n.leave(d).then(function () {
                                p = null
                            }), p = d, d = null)
                        };
                        r.$watch(o, function (o) {
                            var u = function () {
                                !b(s) || s && !r.$eval(s) || t()
                            }, p = ++h;
                            o ? (e(o, !0).then(function (e) {
                                if (!r.$$destroyed && p === h) {
                                    var t = r.$new();
                                    l.template = e;
                                    var s = c(t, function (e) {
                                        g(), n.enter(e, null, i).then(u)
                                    });
                                    f = t, d = s, f.$emit("$includeContentLoaded", o), r.$eval(a)
                                }
                            }, function () {
                                r.$$destroyed || p === h && (g(), r.$emit("$includeContentError", o))
                            }), r.$emit("$includeContentRequested", o)) : (g(), l.template = null)
                        })
                    }
                }
            }
        }], ua = ["$compile", function (e) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
                    return Lr.call(r[0]).match(/SVG/) ? (r.empty(), void e(De(o.template, t).childNodes)(n, function (e) {
                        r.append(e)
                    }, {futureParentElement: r})) : (r.html(o.template), void e(r.contents())(n))
                }
            }
        }], la = sr({
            priority: 450, compile: function () {
                return {
                    pre: function (e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }), ca = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (e, t, r, i) {
                    var a = t.attr(r.$attr.ngList) || ", ", s = "false" !== r.ngTrim, u = s ? Gr(a) : a, l = function (e) {
                        if (!y(e)) {
                            var t = [];
                            return e && o(e.split(u), function (e) {
                                e && t.push(s ? Gr(e) : e)
                            }), t
                        }
                    };
                    i.$parsers.push(l), i.$formatters.push(function (e) {
                        return zr(e) ? e.join(a) : n
                    }), i.$isEmpty = function (e) {
                        return !e || !e.length
                    }
                }
            }
        }, fa = "ng-valid", pa = "ng-invalid", da = "ng-pristine", ha = "ng-dirty", ga = "ng-untouched", va = "ng-touched", ma = "ng-pending", $a = "ng-empty", ya = "ng-not-empty", ba = r("ngModel"), wa = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (e, t, r, i, a, s, u, l, c, f) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(e), this.$$parentForm = Oo;
            var p, d = a(r.ngModel), h = d.assign, v = d, m = h, $ = null, w = this;
            this.$$setOptions = function (e) {
                if (w.$options = e, e && e.getterSetter) {
                    var t = a(r.ngModel + "()"), n = a(r.ngModel + "($$$p)");
                    v = function (e) {
                        var n = d(e);
                        return S(n) && (n = t(e)), n
                    }, m = function (e, t) {
                        S(d(e)) ? n(e, {$$$p: w.$modelValue}) : h(e, w.$modelValue)
                    }
                } else if (!d.assign)throw ba("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, Z(i))
            }, this.$render = g, this.$isEmpty = function (e) {
                return y(e) || "" === e || null === e || e !== e
            }, this.$$updateEmptyClasses = function (e) {
                w.$isEmpty(e) ? (s.removeClass(i, ya), s.addClass(i, $a)) : (s.removeClass(i, $a), s.addClass(i, ya))
            };
            var x = 0;
            kr({
                ctrl: this, $element: i, set: function (e, t) {
                    e[t] = !0
                }, unset: function (e, t) {
                    delete e[t]
                }, $animate: s
            }), this.$setPristine = function () {
                w.$dirty = !1, w.$pristine = !0, s.removeClass(i, ha), s.addClass(i, da)
            }, this.$setDirty = function () {
                w.$dirty = !0, w.$pristine = !1, s.removeClass(i, da), s.addClass(i, ha), w.$$parentForm.$setDirty()
            }, this.$setUntouched = function () {
                w.$touched = !1, w.$untouched = !0, s.setClass(i, ga, va)
            }, this.$setTouched = function () {
                w.$touched = !0, w.$untouched = !1, s.setClass(i, va, ga)
            }, this.$rollbackViewValue = function () {
                u.cancel($), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
            }, this.$validate = function () {
                if (!k(w.$modelValue) || !isNaN(w.$modelValue)) {
                    var e = w.$$lastCommittedViewValue, t = w.$$rawModelValue, r = w.$valid, i = w.$modelValue, o = w.$options && w.$options.allowInvalid;
                    w.$$runValidators(t, e, function (e) {
                        o || r === e || (w.$modelValue = e ? t : n, w.$modelValue !== i && w.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function (e, t, r) {
                function i() {
                    var e = w.$$parserName || "parse";
                    return y(p) ? (u(e, null), !0) : (p || (o(w.$validators, function (e, t) {
                        u(t, null)
                    }), o(w.$asyncValidators, function (e, t) {
                        u(t, null)
                    })), u(e, p), p)
                }

                function a() {
                    var n = !0;
                    return o(w.$validators, function (r, i) {
                        var o = r(e, t);
                        n = n && o, u(i, o)
                    }), n ? !0 : (o(w.$asyncValidators, function (e, t) {
                        u(t, null)
                    }), !1)
                }

                function s() {
                    var r = [], i = !0;
                    o(w.$asyncValidators, function (o, a) {
                        var s = o(e, t);
                        if (!j(s))throw ba("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                        u(a, n), r.push(s.then(function () {
                            u(a, !0)
                        }, function (e) {
                            i = !1, u(a, !1)
                        }))
                    }), r.length ? c.all(r).then(function () {
                        l(i)
                    }, g) : l(!0)
                }

                function u(e, t) {
                    f === x && w.$setValidity(e, t)
                }

                function l(e) {
                    f === x && r(e)
                }

                x++;
                var f = x;
                return i() && a() ? void s() : void l(!1)
            }, this.$commitViewValue = function () {
                var e = w.$viewValue;
                u.cancel($), (w.$$lastCommittedViewValue !== e || "" === e && w.$$hasNativeValidators) && (w.$$updateEmptyClasses(e), w.$$lastCommittedViewValue = e, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function () {
                function t() {
                    w.$modelValue !== a && w.$$writeModelToScope()
                }

                var r = w.$$lastCommittedViewValue, i = r;
                if (p = y(i) ? n : !0)for (var o = 0; o < w.$parsers.length; o++)if (i = w.$parsers[o](i), y(i)) {
                    p = !1;
                    break
                }
                k(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = v(e));
                var a = w.$modelValue, s = w.$options && w.$options.allowInvalid;
                w.$$rawModelValue = i, s && (w.$modelValue = i, t()), w.$$runValidators(i, w.$$lastCommittedViewValue, function (e) {
                    s || (w.$modelValue = e ? i : n, t())
                })
            }, this.$$writeModelToScope = function () {
                m(e, w.$modelValue), o(w.$viewChangeListeners, function (e) {
                    try {
                        e()
                    } catch (n) {
                        t(n)
                    }
                })
            }, this.$setViewValue = function (e, t) {
                w.$viewValue = e, w.$options && !w.$options.updateOnDefault || w.$$debounceViewValueCommit(t)
            }, this.$$debounceViewValueCommit = function (t) {
                var n, r = 0, i = w.$options;
                i && b(i.debounce) && (n = i.debounce, k(n) ? r = n : k(n[t]) ? r = n[t] : k(n["default"]) && (r = n["default"])), u.cancel($), r ? $ = u(function () {
                    w.$commitViewValue()
                }, r) : l.$$phase ? w.$commitViewValue() : e.$apply(function () {
                    w.$commitViewValue()
                })
            }, e.$watch(function () {
                var t = v(e);
                if (t !== w.$modelValue && (w.$modelValue === w.$modelValue || t === t)) {
                    w.$modelValue = w.$$rawModelValue = t, p = n;
                    for (var r = w.$formatters, i = r.length, o = t; i--;)o = r[i](o);
                    w.$viewValue !== o && (w.$$updateEmptyClasses(o), w.$viewValue = w.$$lastCommittedViewValue = o, w.$render(), w.$$runValidators(t, o, g))
                }
                return t
            })
        }], xa = ["$rootScope", function (e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: wa,
                priority: 1,
                compile: function (t) {
                    return t.addClass(da).addClass(ga).addClass(fa), {
                        pre: function (e, t, n, r) {
                            var i = r[0], o = r[1] || i.$$parentForm;
                            i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function (e) {
                                i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                            }), e.$on("$destroy", function () {
                                i.$$parentForm.$removeControl(i)
                            })
                        }, post: function (t, n, r, i) {
                            var o = i[0];
                            o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (e) {
                                o.$$debounceViewValueCommit(e && e.type)
                            }), n.on("blur", function (n) {
                                o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
                            })
                        }
                    }
                }
            }
        }], Ca = /(\s+|^)default(\s+|$)/, ka = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (e, t) {
                    var n = this;
                    this.$options = L(e.$eval(t.ngModelOptions)), b(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Gr(this.$options.updateOn.replace(Ca, function () {
                        return n.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, Ta = sr({
            terminal: !0,
            priority: 1e3
        }), Sa = r("ngOptions"), Ea = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Da = ["$compile", "$parse", function (e, n) {
            function r(e, t, r) {
                function o(e, t, n, r, i) {
                    this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                }

                function a(e) {
                    var t;
                    if (!l && i(e))t = e; else {
                        t = [];
                        for (var n in e)e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
                    }
                    return t
                }

                var s = e.match(Ea);
                if (!s)throw Sa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, Z(t));
                var u = s[5] || s[7], l = s[6], c = / as /.test(s[0]) && s[1], f = s[9], p = n(s[2] ? s[1] : u), d = c && n(c), h = d || p, g = f && n(f), v = f ? function (e, t) {
                    return g(r, t)
                } : function (e) {
                    return Ze(e)
                }, m = function (e, t) {
                    return v(e, C(e, t))
                }, $ = n(s[2] || s[1]), y = n(s[3] || ""), b = n(s[4] || ""), w = n(s[8]), x = {}, C = l ? function (e, t) {
                    return x[l] = t, x[u] = e, x
                } : function (e) {
                    return x[u] = e, x
                };
                return {
                    trackBy: f, getTrackByValue: m, getWatchables: n(w, function (e) {
                        var t = [];
                        e = e || [];
                        for (var n = a(e), i = n.length, o = 0; i > o; o++) {
                            var u = e === n ? o : n[o], l = (e[u], C(e[u], u)), c = v(e[u], l);
                            if (t.push(c), s[2] || s[1]) {
                                var f = $(r, l);
                                t.push(f)
                            }
                            if (s[4]) {
                                var p = b(r, l);
                                t.push(p)
                            }
                        }
                        return t
                    }), getOptions: function () {
                        for (var e = [], t = {}, n = w(r) || [], i = a(n), s = i.length, u = 0; s > u; u++) {
                            var l = n === i ? u : i[u], c = n[l], p = C(c, l), d = h(r, p), g = v(d, p), x = $(r, p), k = y(r, p), T = b(r, p), S = new o(g, d, x, k, T);
                            e.push(S), t[g] = S
                        }
                        return {
                            items: e, selectValueMap: t, getOptionFromViewValue: function (e) {
                                return t[m(e)]
                            }, getViewValueFromOption: function (e) {
                                return f ? Br.copy(e.viewValue) : e.viewValue
                            }
                        }
                    }
                }
            }

            function a(t, n, i, a) {
                function l(e, t) {
                    e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), e.value !== t.value && (t.value = e.selectValue)
                }

                function c(e, t, n, r) {
                    var i;
                    return t && _r(t.nodeName) === n ? i = t : (i = r.cloneNode(!1), t ? e.insertBefore(i, t) : e.appendChild(i)), i
                }

                function f(e) {
                    for (var t; e;)t = e.nextSibling, We(e), e = t
                }

                function p(e) {
                    var t = h && h[0], n = C && C[0];
                    if (t || n)for (; e && (e === t || e === n || e.nodeType === oi || "option" === U(e) && "" === e.value);)e = e.nextSibling;
                    return e
                }

                function d() {
                    var e = k && g.readValue();
                    k = T.getOptions();
                    var t = {}, r = n[0].firstChild;
                    if (x && n.prepend(h), r = p(r), k.items.forEach(function (e) {
                            var i, o, a;
                            b(e.group) ? (i = t[e.group], i || (o = c(n[0], r, "optgroup", u), r = o.nextSibling, o.label = e.group, i = t[e.group] = {
                                groupElement: o,
                                currentOptionElement: o.firstChild
                            }), a = c(i.groupElement, i.currentOptionElement, "option", s), l(e, a), i.currentOptionElement = a.nextSibling) : (a = c(n[0], r, "option", s), l(e, a), r = a.nextSibling)
                        }), Object.keys(t).forEach(function (e) {
                            f(t[e].currentOptionElement)
                        }), f(r), v.$render(), !v.$isEmpty(e)) {
                        var i = g.readValue(), o = T.trackBy || m;
                        (o ? H(e, i) : e === i) || (v.$setViewValue(i), v.$render())
                    }
                }

                for (var h, g = a[0], v = a[1], m = i.multiple, $ = 0, y = n.children(), w = y.length; w > $; $++)if ("" === y[$].value) {
                    h = y.eq($);
                    break
                }
                var x = !!h, C = Ir(s.cloneNode(!1));
                C.val("?");
                var k, T = r(i.ngOptions, n, t), S = function () {
                    x || n.prepend(h), n.val(""), h.prop("selected", !0), h.attr("selected", !0)
                }, E = function () {
                    x || h.remove()
                }, D = function () {
                    n.prepend(C), n.val("?"), C.prop("selected", !0), C.attr("selected", !0)
                }, A = function () {
                    C.remove()
                };
                m ? (v.$isEmpty = function (e) {
                    return !e || 0 === e.length
                }, g.writeValue = function (e) {
                    k.items.forEach(function (e) {
                        e.element.selected = !1
                    }), e && e.forEach(function (e) {
                        var t = k.getOptionFromViewValue(e);
                        t && !t.disabled && (t.element.selected = !0)
                    })
                }, g.readValue = function () {
                    var e = n.val() || [], t = [];
                    return o(e, function (e) {
                        var n = k.selectValueMap[e];
                        n && !n.disabled && t.push(k.getViewValueFromOption(n))
                    }), t
                }, T.trackBy && t.$watchCollection(function () {
                    return zr(v.$viewValue) ? v.$viewValue.map(function (e) {
                        return T.getTrackByValue(e)
                    }) : void 0
                }, function () {
                    v.$render()
                })) : (g.writeValue = function (e) {
                    var t = k.getOptionFromViewValue(e);
                    t && !t.disabled ? n[0].value !== t.selectValue && (A(), E(), n[0].value = t.selectValue, t.element.selected = !0, t.element.setAttribute("selected", "selected")) : null === e || x ? (A(), S()) : (E(), D())
                }, g.readValue = function () {
                    var e = k.selectValueMap[n.val()];
                    return e && !e.disabled ? (E(), A(), k.getViewValueFromOption(e)) : null
                }, T.trackBy && t.$watch(function () {
                    return T.getTrackByValue(v.$viewValue)
                }, function () {
                    v.$render()
                })), x ? (h.remove(), e(h)(t), h.removeClass("ng-scope")) : h = Ir(s.cloneNode(!1)), d(), t.$watchCollection(T.getWatchables, d)
            }

            var s = t.createElement("option"), u = t.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (e, t, n, r) {
                        r[0].registerOption = g
                    }, post: a
                }
            }
        }], Aa = ["$locale", "$interpolate", "$log", function (e, t, n) {
            var r = /{}/g, i = /^when(Minus)?(.+)$/;
            return {
                link: function (a, s, u) {
                    function l(e) {
                        s.text(e || "")
                    }

                    var c, f = u.count, p = u.$attr.when && s.attr(u.$attr.when), d = u.offset || 0, h = a.$eval(p) || {}, v = {}, m = t.startSymbol(), $ = t.endSymbol(), b = m + f + "-" + d + $, w = Br.noop;
                    o(u, function (e, t) {
                        var n = i.exec(t);
                        if (n) {
                            var r = (n[1] ? "-" : "") + _r(n[2]);
                            h[r] = s.attr(u.$attr[t])
                        }
                    }), o(h, function (e, n) {
                        v[n] = t(e.replace(r, b))
                    }), a.$watch(f, function (t) {
                        var r = parseFloat(t), i = isNaN(r);
                        if (i || r in h || (r = e.pluralCat(r - d)), r !== c && !(i && k(c) && isNaN(c))) {
                            w();
                            var o = v[r];
                            y(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + p), w = g, l()) : w = a.$watch(o, l), c = r
                        }
                    })
                }
            }
        }], _a = ["$parse", "$animate", function (e, a) {
            var s = "$$NG_REMOVED", u = r("ngRepeat"), l = function (e, t, n, r, i, o, a) {
                e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
            }, c = function (e) {
                return e.clone[0]
            }, f = function (e) {
                return e.clone[e.clone.length - 1]
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (r, p) {
                    var d = p.ngRepeat, h = t.createComment(" end ngRepeat: " + d + " "), g = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!g)throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
                    var v = g[1], m = g[2], $ = g[3], y = g[4];
                    if (g = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !g)throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
                    var b = g[3] || g[1], w = g[2];
                    if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($)))throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", $);
                    var x, C, k, T, S = {$id: Ze};
                    return y ? x = e(y) : (k = function (e, t) {
                        return Ze(t)
                    }, T = function (e) {
                        return e
                    }), function (e, t, r, p, g) {
                        x && (C = function (t, n, r) {
                            return w && (S[w] = t), S[b] = n, S.$index = r, x(e, S)
                        });
                        var v = me();
                        e.$watchCollection(m, function (r) {
                            var p, m, y, x, S, E, D, A, _, O, M, N, j = t[0], I = me();
                            if ($ && (e[$] = r), i(r))_ = r, A = C || k; else {
                                A = C || T, _ = [];
                                for (var P in r)Ar.call(r, P) && "$" !== P.charAt(0) && _.push(P)
                            }
                            for (x = _.length, M = new Array(x), p = 0; x > p; p++)if (S = r === _ ? p : _[p], E = r[S], D = A(S, E, p), v[D])O = v[D], delete v[D], I[D] = O, M[p] = O; else {
                                if (I[D])throw o(M, function (e) {
                                    e && e.scope && (v[e.id] = e)
                                }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, D, E);
                                M[p] = {id: D, scope: n, clone: n}, I[D] = !0
                            }
                            for (var R in v) {
                                if (O = v[R], N = ve(O.clone), a.leave(N), N[0].parentNode)for (p = 0, m = N.length; m > p; p++)N[p][s] = !0;
                                O.scope.$destroy()
                            }
                            for (p = 0; x > p; p++)if (S = r === _ ? p : _[p], E = r[S], O = M[p], O.scope) {
                                y = j;
                                do y = y.nextSibling; while (y && y[s]);
                                c(O) != y && a.move(ve(O.clone), null, Ir(j)), j = f(O), l(O.scope, p, b, E, w, S, x)
                            } else g(function (e, t) {
                                O.scope = t;
                                var n = h.cloneNode(!1);
                                e[e.length++] = n, a.enter(e, null, Ir(j)), j = n, O.clone = e, I[O.id] = O, l(O.scope, p, b, E, w, S, x)
                            });
                            v = I
                        })
                    }
                }
            }
        }], Oa = "ng-hide", Ma = "ng-hide-animate", Na = ["$animate", function (e) {
            return {
                restrict: "A", multiElement: !0, link: function (t, n, r) {
                    t.$watch(r.ngShow, function (t) {
                        e[t ? "removeClass" : "addClass"](n, Oa, {tempClasses: Ma})
                    })
                }
            }
        }], ja = ["$animate", function (e) {
            return {
                restrict: "A", multiElement: !0, link: function (t, n, r) {
                    t.$watch(r.ngHide, function (t) {
                        e[t ? "addClass" : "removeClass"](n, Oa, {tempClasses: Ma})
                    })
                }
            }
        }], Ia = sr(function (e, t, n) {
            e.$watch(n.ngStyle, function (e, n) {
                n && e !== n && o(n, function (e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }), Pa = ["$animate", function (e) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (n, r, i, a) {
                    var s = i.ngSwitch || i.on, u = [], l = [], c = [], f = [], p = function (e, t) {
                        return function () {
                            e.splice(t, 1)
                        }
                    };
                    n.$watch(s, function (n) {
                        var r, i;
                        for (r = 0, i = c.length; i > r; ++r)e.cancel(c[r]);
                        for (c.length = 0, r = 0, i = f.length; i > r; ++r) {
                            var s = ve(l[r].clone);
                            f[r].$destroy();
                            var d = c[r] = e.leave(s);
                            d.then(p(c, r))
                        }
                        l.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function (n) {
                            n.transclude(function (r, i) {
                                f.push(i);
                                var o = n.element;
                                r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                                var a = {clone: r};
                                l.push(a), e.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }], Ra = sr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (e, t, n, r, i) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: i,
                    element: t
                })
            }
        }), Fa = sr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (e, t, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: t})
            }
        }), Ua = r("ngTransclude"), qa = sr({
            restrict: "EAC", link: function (e, t, n, r, i) {
                function o(e) {
                    e.length && (t.empty(), t.append(e))
                }

                if (n.ngTransclude === n.$attr.ngTransclude && (n.ngTransclude = ""), !i)throw Ua("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Z(t));
                var a = n.ngTransclude || n.ngTranscludeSlot;
                i(o, null, a)
            }
        }), La = ["$templateCache", function (e) {
            return {
                restrict: "E", terminal: !0, compile: function (t, n) {
                    if ("text/ng-template" == n.type) {
                        var r = n.id, i = t[0].text;
                        e.put(r, i)
                    }
                }
            }
        }], Va = {$setViewValue: g, $render: g}, Ha = ["$element", "$scope", "$attrs", function (e, r, i) {
            var o = this, a = new et;
            o.ngModelCtrl = Va, o.unknownOption = Ir(t.createElement("option")), o.renderUnknownOption = function (t) {
                var n = "? " + Ze(t) + " ?";
                o.unknownOption.val(n), e.prepend(o.unknownOption), e.val(n)
            }, r.$on("$destroy", function () {
                o.renderUnknownOption = g
            }), o.removeUnknownOption = function () {
                o.unknownOption.parent() && o.unknownOption.remove()
            }, o.readValue = function () {
                return o.removeUnknownOption(), e.val()
            }, o.writeValue = function (t) {
                o.hasOption(t) ? (o.removeUnknownOption(), e.val(t), "" === t && o.emptyOption.prop("selected", !0)) : null == t && o.emptyOption ? (o.removeUnknownOption(), e.val("")) : o.renderUnknownOption(t)
            }, o.addOption = function (e, t) {
                if (t[0].nodeType !== oi) {
                    he(e, '"option value"'), "" === e && (o.emptyOption = t);
                    var n = a.get(e) || 0;
                    a.put(e, n + 1), o.ngModelCtrl.$render(), Sr(t)
                }
            }, o.removeOption = function (e) {
                var t = a.get(e);
                t && (1 === t ? (a.remove(e), "" === e && (o.emptyOption = n)) : a.put(e, t - 1))
            }, o.hasOption = function (e) {
                return !!a.get(e)
            }, o.registerOption = function (e, t, n, r, i) {
                if (r) {
                    var a;
                    n.$observe("value", function (e) {
                        b(a) && o.removeOption(a), a = e, o.addOption(e, t)
                    })
                } else i ? e.$watch(i, function (e, r) {
                    n.$set("value", e), r !== e && o.removeOption(r), o.addOption(e, t)
                }) : o.addOption(n.value, t);
                t.on("$destroy", function () {
                    o.removeOption(n.value), o.ngModelCtrl.$render()
                })
            }
        }], Ba = function () {
            function e(e, t, n, r) {
                var i = r[1];
                if (i) {
                    var a = r[0];
                    if (a.ngModelCtrl = i, t.on("change", function () {
                            e.$apply(function () {
                                i.$setViewValue(a.readValue())
                            })
                        }), n.multiple) {
                        a.readValue = function () {
                            var e = [];
                            return o(t.find("option"), function (t) {
                                t.selected && e.push(t.value)
                            }), e
                        }, a.writeValue = function (e) {
                            var n = new et(e);
                            o(t.find("option"), function (e) {
                                e.selected = b(n.get(e.value))
                            })
                        };
                        var s, u = NaN;
                        e.$watch(function () {
                            u !== i.$viewValue || H(s, i.$viewValue) || (s = V(i.$viewValue), i.$render()), u = i.$viewValue
                        }), i.$isEmpty = function (e) {
                            return !e || 0 === e.length
                        }
                    }
                }
            }

            function t(e, t, n, r) {
                var i = r[1];
                if (i) {
                    var o = r[0];
                    i.$render = function () {
                        o.writeValue(i.$viewValue)
                    }
                }
            }

            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Ha,
                priority: 1,
                link: {pre: e, post: t}
            }
        }, Wa = ["$interpolate", function (e) {
            return {
                restrict: "E", priority: 100, compile: function (t, n) {
                    if (b(n.value))var r = e(n.value, !0); else {
                        var i = e(t.text(), !0);
                        i || n.$set("value", t.text())
                    }
                    return function (e, t, n) {
                        var o = "$selectController", a = t.parent(), s = a.data(o) || a.parent().data(o);
                        s && s.registerOption(e, t, n, r, i)
                    }
                }
            }
        }], za = m({restrict: "E", terminal: !1}), Ya = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
                    r && (n.required = !0, r.$validators.required = function (e, t) {
                        return !n.required || !r.$isEmpty(t)
                    }, n.$observe("required", function () {
                        r.$validate()
                    }))
                }
            }
        }, Ga = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (e, t, i, o) {
                    if (o) {
                        var a, s = i.ngPattern || i.pattern;
                        i.$observe("pattern", function (e) {
                            if (C(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test)throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, Z(t));
                            a = e || n, o.$validate()
                        }), o.$validators.pattern = function (e, t) {
                            return o.$isEmpty(t) || y(a) || a.test(t)
                        }
                    }
                }
            }
        }, Ka = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function (e) {
                            var t = d(e);
                            i = isNaN(t) ? -1 : t, r.$validate()
                        }), r.$validators.maxlength = function (e, t) {
                            return 0 > i || r.$isEmpty(t) || t.length <= i
                        }
                    }
                }
            }
        }, Xa = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function (e) {
                            i = d(e) || 0, r.$validate()
                        }), r.$validators.minlength = function (e, t) {
                            return r.$isEmpty(t) || t.length >= i
                        }
                    }
                }
            }
        };
        return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (fe(), we(Br), Br.module("ngLocale", [], ["$provide", function (e) {
            function t(e) {
                e += "";
                var t = e.indexOf(".");
                return -1 == t ? 0 : e.length - t - 1
            }

            function r(e, r) {
                var i = r;
                n === i && (i = Math.min(t(e), 3));
                var o = Math.pow(10, i), a = (e * o | 0) % o;
                return {v: i, f: a}
            }

            var i = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
            e.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["AM", "PM"],
                    DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-¤",
                        negSuf: "",
                        posPre: "¤",
                        posSuf: ""
                    }]
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function (e, t) {
                    var n = 0 | e, o = r(e, t);
                    return 1 == n && 0 == o.v ? i.ONE : i.OTHER
                }
            })
        }]), void Ir(t).ready(function () {
            ae(t, se)
        }))
    }(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), angular.module("ui.bootstrap", ["ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.debounce", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.paging", "ui.bootstrap.pager", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$q", "$parse", "$injector", function (e, t, n, r) {
        var i = r.has("$animateCss") ? r.get("$animateCss") : null;
        return {
            link: function (r, o, a) {
                function s() {
                    o.hasClass("collapse") && o.hasClass("in") || t.resolve(f(r)).then(function () {
                        o.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), i ? i(o, {
                            addClass: "in",
                            easing: "ease",
                            to: {height: o[0].scrollHeight + "px"}
                        }).start()["finally"](u) : e.addClass(o, "in", {to: {height: o[0].scrollHeight + "px"}}).then(u)
                    })
                }

                function u() {
                    o.removeClass("collapsing").addClass("collapse").css({height: "auto"}), p(r)
                }

                function l() {
                    return o.hasClass("collapse") || o.hasClass("in") ? void t.resolve(d(r)).then(function () {
                        o.css({height: o[0].scrollHeight + "px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), i ? i(o, {
                            removeClass: "in",
                            to: {height: "0"}
                        }).start()["finally"](c) : e.removeClass(o, "in", {to: {height: "0"}}).then(c)
                    }) : c()
                }

                function c() {
                    o.css({height: "0"}), o.removeClass("collapsing").addClass("collapse"), h(r)
                }

                var f = n(a.expanding), p = n(a.expanded), d = n(a.collapsing), h = n(a.collapsed);
                r.$eval(a.uibCollapse) || o.addClass("in").addClass("collapse").attr("aria-expanded", !0).attr("aria-hidden", !1).css({height: "auto"}), r.$watch(a.uibCollapse, function (e) {
                    e ? l() : s()
                })
            }
        }
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("uibAccordionConfig", {closeOthers: !0}).controller("UibAccordionController", ["$scope", "$attrs", "uibAccordionConfig", function (e, t, n) {
        this.groups = [], this.closeOthers = function (r) {
            var i = angular.isDefined(t.closeOthers) ? e.$eval(t.closeOthers) : n.closeOthers;
            i && angular.forEach(this.groups, function (e) {
                e !== r && (e.isOpen = !1)
            })
        }, this.addGroup = function (e) {
            var t = this;
            this.groups.push(e), e.$on("$destroy", function (n) {
                t.removeGroup(e)
            })
        }, this.removeGroup = function (e) {
            var t = this.groups.indexOf(e);
            -1 !== t && this.groups.splice(t, 1)
        }
    }]).directive("uibAccordion", function () {
        return {
            controller: "UibAccordionController",
            controllerAs: "accordion",
            transclude: !0,
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/accordion/accordion.html"
            }
        }
    }).directive("uibAccordionGroup", function () {
        return {
            require: "^uibAccordion", transclude: !0, replace: !0, templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/accordion/accordion-group.html"
            }, scope: {heading: "@", isOpen: "=?", isDisabled: "=?"}, controller: function () {
                this.setHeading = function (e) {
                    this.heading = e
                }
            }, link: function (e, t, n, r) {
                r.addGroup(e), e.openClass = n.openClass || "panel-open", e.panelClass = n.panelClass || "panel-default", e.$watch("isOpen", function (n) {
                    t.toggleClass(e.openClass, !!n), n && r.closeOthers(e)
                }), e.toggleOpen = function (t) {
                    e.isDisabled || t && 32 !== t.which || (e.isOpen = !e.isOpen)
                };
                var i = "accordiongroup-" + e.$id + "-" + Math.floor(1e4 * Math.random());
                e.headingId = i + "-tab", e.panelId = i + "-panel"
            }
        }
    }).directive("uibAccordionHeading", function () {
        return {
            transclude: !0,
            template: "",
            replace: !0,
            require: "^uibAccordionGroup",
            link: function (e, t, n, r, i) {
                r.setHeading(i(e, angular.noop))
            }
        }
    }).directive("uibAccordionTransclude", function () {
        return {
            require: "^uibAccordionGroup", link: function (e, t, n, r) {
                e.$watch(function () {
                    return r[n.uibAccordionTransclude]
                }, function (e) {
                    if (e) {
                        var n = angular.element(t[0].querySelector("[uib-accordion-header]"));
                        n.html(""), n.append(e)
                    }
                })
            }
        }
    }), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", ["$scope", "$attrs", "$interpolate", "$timeout", function (e, t, n, r) {
        e.closeable = !!t.close;
        var i = angular.isDefined(t.dismissOnTimeout) ? n(t.dismissOnTimeout)(e.$parent) : null;
        i && r(function () {
            e.close()
        }, parseInt(i, 10))
    }]).directive("uibAlert", function () {
        return {
            controller: "UibAlertController", controllerAs: "alert", templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/alert/alert.html"
            }, transclude: !0, replace: !0, scope: {type: "@", close: "&"}
        }
    }), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", {
        activeClass: "active",
        toggleEvent: "click"
    }).controller("UibButtonsController", ["uibButtonConfig", function (e) {
        this.activeClass = e.activeClass || "active", this.toggleEvent = e.toggleEvent || "click"
    }]).directive("uibBtnRadio", ["$parse", function (e) {
        return {
            require: ["uibBtnRadio", "ngModel"],
            controller: "UibButtonsController",
            controllerAs: "buttons",
            link: function (t, n, r, i) {
                var o = i[0], a = i[1], s = e(r.uibUncheckable);
                n.find("input").css({display: "none"}), a.$render = function () {
                    n.toggleClass(o.activeClass, angular.equals(a.$modelValue, t.$eval(r.uibBtnRadio)))
                }, n.on(o.toggleEvent, function () {
                    if (!r.disabled) {
                        var e = n.hasClass(o.activeClass);
                        e && !angular.isDefined(r.uncheckable) || t.$apply(function () {
                            a.$setViewValue(e ? null : t.$eval(r.uibBtnRadio)), a.$render()
                        })
                    }
                }), r.uibUncheckable && t.$watch(s, function (e) {
                    r.$set("uncheckable", e ? "" : void 0)
                })
            }
        }
    }]).directive("uibBtnCheckbox", function () {
        return {
            require: ["uibBtnCheckbox", "ngModel"],
            controller: "UibButtonsController",
            controllerAs: "button",
            link: function (e, t, n, r) {
                function i() {
                    return a(n.btnCheckboxTrue, !0)
                }

                function o() {
                    return a(n.btnCheckboxFalse, !1)
                }

                function a(t, n) {
                    return angular.isDefined(t) ? e.$eval(t) : n
                }

                var s = r[0], u = r[1];
                t.find("input").css({display: "none"}), u.$render = function () {
                    t.toggleClass(s.activeClass, angular.equals(u.$modelValue, i()))
                }, t.on(s.toggleEvent, function () {
                    n.disabled || e.$apply(function () {
                        u.$setViewValue(t.hasClass(s.activeClass) ? o() : i()), u.$render()
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function (e, t, n, r, i) {
        function o() {
            for (; y.length;)y.shift()
        }

        function a(e) {
            for (var t = 0; t < v.length; t++)v[t].slide.active = t === e
        }

        function s(n, r, u) {
            if (!b) {
                if (angular.extend(n, {direction: u}), angular.extend(v[$].slide || {}, {direction: u}), i.enabled(t) && !e.$currentTransition && v[r].element && g.slides.length > 1) {
                    v[r].element.data(m, n.direction);
                    var l = g.getCurrentIndex();
                    angular.isNumber(l) && v[l].element && v[l].element.data(m, n.direction), e.$currentTransition = !0, i.on("addClass", v[r].element, function (t, n) {
                        if ("close" === n && (e.$currentTransition = null, i.off("addClass", t), y.length)) {
                            var r = y.pop().slide, a = r.index, u = a > g.getCurrentIndex() ? "next" : "prev";
                            o(), s(r, a, u)
                        }
                    })
                }
                e.active = n.index, $ = n.index, a(r), f()
            }
        }

        function u(e) {
            for (var t = 0; t < v.length; t++)if (v[t].slide === e)return t
        }

        function l() {
            d && (n.cancel(d), d = null)
        }

        function c(t) {
            t.length || (e.$currentTransition = null, o())
        }

        function f() {
            l();
            var t = +e.interval;
            !isNaN(t) && t > 0 && (d = n(p, t))
        }

        function p() {
            var t = +e.interval;
            h && !isNaN(t) && t > 0 && v.length ? e.next() : e.pause()
        }

        var d, h, g = this, v = g.slides = e.slides = [], m = "uib-slideDirection", $ = e.active, y = [], b = !1;
        g.addSlide = function (t, n) {
            v.push({slide: t, element: n}), v.sort(function (e, t) {
                return +e.slide.index > +t.slide.index
            }), (t.index === e.active || 1 === v.length && !angular.isNumber(e.active)) && (e.$currentTransition && (e.$currentTransition = null), $ = t.index, e.active = t.index, a($), g.select(v[u(t)]), 1 === v.length && e.play())
        }, g.getCurrentIndex = function () {
            for (var e = 0; e < v.length; e++)if (v[e].slide.index === $)return e
        }, g.next = e.next = function () {
            var t = (g.getCurrentIndex() + 1) % v.length;
            return 0 === t && e.noWrap() ? void e.pause() : g.select(v[t], "next")
        }, g.prev = e.prev = function () {
            var t = g.getCurrentIndex() - 1 < 0 ? v.length - 1 : g.getCurrentIndex() - 1;
            return e.noWrap() && t === v.length - 1 ? void e.pause() : g.select(v[t], "prev")
        }, g.removeSlide = function (t) {
            var n = u(t), r = y.indexOf(v[n]);
            -1 !== r && y.splice(r, 1), v.splice(n, 1), v.length > 0 && $ === n ? n >= v.length ? ($ = v.length - 1, e.active = $, a($), g.select(v[v.length - 1])) : ($ = n, e.active = $, a($), g.select(v[n])) : $ > n && ($--, e.active = $), 0 === v.length && ($ = null, e.active = null, o())
        }, g.select = e.select = function (t, n) {
            var r = u(t.slide);
            void 0 === n && (n = r > g.getCurrentIndex() ? "next" : "prev"), t.slide.index === $ || e.$currentTransition ? t && t.slide.index !== $ && e.$currentTransition && y.push(v[r]) : s(t.slide, r, n)
        }, e.indexOfSlide = function (e) {
            return +e.slide.index;
        }, e.isActive = function (t) {
            return e.active === t.slide.index
        }, e.pause = function () {
            e.noPause || (h = !1, l())
        }, e.play = function () {
            h || (h = !0, f())
        }, e.$on("$destroy", function () {
            b = !0, l()
        }), e.$watch("noTransition", function (e) {
            i.enabled(t, !e)
        }), e.$watch("interval", f), e.$watchCollection("slides", c), e.$watch("active", function (e) {
            if (angular.isNumber(e) && $ !== e) {
                for (var t = 0; t < v.length; t++)if (v[t].slide.index === e) {
                    e = t;
                    break
                }
                var n = v[e];
                n && ($ = e, a(e), g.select(v[e]))
            }
        })
    }]).directive("uibCarousel", function () {
        return {
            transclude: !0,
            replace: !0,
            controller: "UibCarouselController",
            controllerAs: "carousel",
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/carousel/carousel.html"
            },
            scope: {active: "=", interval: "=", noTransition: "=", noPause: "=", noWrap: "&"}
        }
    }).directive("uibSlide", function () {
        return {
            require: "^uibCarousel", transclude: !0, replace: !0, templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/carousel/slide.html"
            }, scope: {actual: "=?", index: "=?"}, link: function (e, t, n, r) {
                r.addSlide(e, t), e.$on("$destroy", function () {
                    r.removeSlide(e)
                })
            }
        }
    }).animation(".item", ["$animateCss", function (e) {
        function t(e, t, n) {
            e.removeClass(t), n && n()
        }

        var n = "uib-slideDirection";
        return {
            beforeAddClass: function (r, i, o) {
                if ("active" === i) {
                    var a = !1, s = r.data(n), u = "next" === s ? "left" : "right", l = t.bind(this, r, u + " " + s, o);
                    return r.addClass(s), e(r, {addClass: u}).start().done(l), function () {
                        a = !0
                    }
                }
                o()
            }, beforeRemoveClass: function (r, i, o) {
                if ("active" === i) {
                    var a = !1, s = r.data(n), u = "next" === s ? "left" : "right", l = t.bind(this, r, u, o);
                    return e(r, {addClass: u}).start().done(l), function () {
                        a = !0
                    }
                }
                o()
            }
        }
    }]), angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", ["$log", "$locale", "dateFilter", "orderByFilter", function (e, t, n, r) {
        function i(e, t) {
            var n = [], i = e.split(""), o = e.indexOf("'");
            if (o > -1) {
                var a = !1;
                e = e.split("");
                for (var s = o; s < e.length; s++)a ? ("'" === e[s] && (s + 1 < e.length && "'" === e[s + 1] ? (e[s + 1] = "$", i[s + 1] = "") : (i[s] = "", a = !1)), e[s] = "$") : "'" === e[s] && (e[s] = "$", i[s] = "", a = !0);
                e = e.join("")
            }
            return angular.forEach(d, function (r) {
                var o = e.indexOf(r.key);
                if (o > -1) {
                    e = e.split(""), i[o] = "(" + r.regex + ")", e[o] = "$";
                    for (var a = o + 1, s = o + r.key.length; s > a; a++)i[a] = "", e[a] = "$";
                    e = e.join(""), n.push({index: o, key: r.key, apply: r[t], matcher: r.regex})
                }
            }), {regex: new RegExp("^" + i.join("") + "$"), map: r(n, "index")}
        }

        function o(e, t, n) {
            return 1 > n ? !1 : 1 === t && n > 28 ? 29 === n && (e % 4 === 0 && e % 100 !== 0 || e % 400 === 0) : 3 === t || 5 === t || 8 === t || 10 === t ? 31 > n : !0
        }

        function a(e) {
            return parseInt(e, 10)
        }

        function s(e, t) {
            return e && t ? f(e, t) : e
        }

        function u(e, t) {
            return e && t ? f(e, t, !0) : e
        }

        function l(e, t) {
            var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
            return isNaN(n) ? t : n
        }

        function c(e, t) {
            return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
        }

        function f(e, t, n) {
            n = n ? -1 : 1;
            var r = l(t, e.getTimezoneOffset());
            return c(e, n * (r - e.getTimezoneOffset()))
        }

        var p, d, h = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        this.init = function () {
            p = t.id, this.parsers = {}, this.formatters = {}, d = [{
                key: "yyyy", regex: "\\d{4}", apply: function (e) {
                    this.year = +e
                }, formatter: function (e) {
                    var t = new Date;
                    return t.setFullYear(Math.abs(e.getFullYear())), n(t, "yyyy")
                }
            }, {
                key: "yy", regex: "\\d{2}", apply: function (e) {
                    this.year = +e + 2e3
                }, formatter: function (e) {
                    var t = new Date;
                    return t.setFullYear(Math.abs(e.getFullYear())), n(t, "yy")
                }
            }, {
                key: "y", regex: "\\d{1,4}", apply: function (e) {
                    this.year = +e
                }, formatter: function (e) {
                    var t = new Date;
                    return t.setFullYear(Math.abs(e.getFullYear())), n(t, "y")
                }
            }, {
                key: "M!", regex: "0?[1-9]|1[0-2]", apply: function (e) {
                    this.month = e - 1
                }, formatter: function (e) {
                    var t = e.getMonth();
                    return /^[0-9]$/.test(t) ? n(e, "MM") : n(e, "M")
                }
            }, {
                key: "MMMM", regex: t.DATETIME_FORMATS.MONTH.join("|"), apply: function (e) {
                    this.month = t.DATETIME_FORMATS.MONTH.indexOf(e)
                }, formatter: function (e) {
                    return n(e, "MMMM")
                }
            }, {
                key: "MMM", regex: t.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (e) {
                    this.month = t.DATETIME_FORMATS.SHORTMONTH.indexOf(e)
                }, formatter: function (e) {
                    return n(e, "MMM")
                }
            }, {
                key: "MM", regex: "0[1-9]|1[0-2]", apply: function (e) {
                    this.month = e - 1
                }, formatter: function (e) {
                    return n(e, "MM")
                }
            }, {
                key: "M", regex: "[1-9]|1[0-2]", apply: function (e) {
                    this.month = e - 1
                }, formatter: function (e) {
                    return n(e, "M")
                }
            }, {
                key: "d!", regex: "[0-2]?[0-9]{1}|3[0-1]{1}", apply: function (e) {
                    this.date = +e
                }, formatter: function (e) {
                    var t = e.getDate();
                    return /^[1-9]$/.test(t) ? n(e, "dd") : n(e, "d")
                }
            }, {
                key: "dd", regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (e) {
                    this.date = +e
                }, formatter: function (e) {
                    return n(e, "dd")
                }
            }, {
                key: "d", regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (e) {
                    this.date = +e
                }, formatter: function (e) {
                    return n(e, "d")
                }
            }, {
                key: "EEEE", regex: t.DATETIME_FORMATS.DAY.join("|"), formatter: function (e) {
                    return n(e, "EEEE")
                }
            }, {
                key: "EEE", regex: t.DATETIME_FORMATS.SHORTDAY.join("|"), formatter: function (e) {
                    return n(e, "EEE")
                }
            }, {
                key: "HH", regex: "(?:0|1)[0-9]|2[0-3]", apply: function (e) {
                    this.hours = +e
                }, formatter: function (e) {
                    return n(e, "HH")
                }
            }, {
                key: "hh", regex: "0[0-9]|1[0-2]", apply: function (e) {
                    this.hours = +e
                }, formatter: function (e) {
                    return n(e, "hh")
                }
            }, {
                key: "H", regex: "1?[0-9]|2[0-3]", apply: function (e) {
                    this.hours = +e
                }, formatter: function (e) {
                    return n(e, "H")
                }
            }, {
                key: "h", regex: "[0-9]|1[0-2]", apply: function (e) {
                    this.hours = +e
                }, formatter: function (e) {
                    return n(e, "h")
                }
            }, {
                key: "mm", regex: "[0-5][0-9]", apply: function (e) {
                    this.minutes = +e
                }, formatter: function (e) {
                    return n(e, "mm")
                }
            }, {
                key: "m", regex: "[0-9]|[1-5][0-9]", apply: function (e) {
                    this.minutes = +e
                }, formatter: function (e) {
                    return n(e, "m")
                }
            }, {
                key: "sss", regex: "[0-9][0-9][0-9]", apply: function (e) {
                    this.milliseconds = +e
                }, formatter: function (e) {
                    return n(e, "sss")
                }
            }, {
                key: "ss", regex: "[0-5][0-9]", apply: function (e) {
                    this.seconds = +e
                }, formatter: function (e) {
                    return n(e, "ss")
                }
            }, {
                key: "s", regex: "[0-9]|[1-5][0-9]", apply: function (e) {
                    this.seconds = +e
                }, formatter: function (e) {
                    return n(e, "s")
                }
            }, {
                key: "a", regex: t.DATETIME_FORMATS.AMPMS.join("|"), apply: function (e) {
                    12 === this.hours && (this.hours = 0), "PM" === e && (this.hours += 12)
                }, formatter: function (e) {
                    return n(e, "a")
                }
            }, {
                key: "Z", regex: "[+-]\\d{4}", apply: function (e) {
                    var t = e.match(/([+-])(\d{2})(\d{2})/), n = t[1], r = t[2], i = t[3];
                    this.hours += a(n + r), this.minutes += a(n + i)
                }, formatter: function (e) {
                    return n(e, "Z")
                }
            }, {
                key: "ww", regex: "[0-4][0-9]|5[0-3]", formatter: function (e) {
                    return n(e, "ww")
                }
            }, {
                key: "w", regex: "[0-9]|[1-4][0-9]|5[0-3]", formatter: function (e) {
                    return n(e, "w")
                }
            }, {
                key: "GGGG",
                regex: t.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g, "\\s"),
                formatter: function (e) {
                    return n(e, "GGGG")
                }
            }, {
                key: "GGG", regex: t.DATETIME_FORMATS.ERAS.join("|"), formatter: function (e) {
                    return n(e, "GGG")
                }
            }, {
                key: "GG", regex: t.DATETIME_FORMATS.ERAS.join("|"), formatter: function (e) {
                    return n(e, "GG")
                }
            }, {
                key: "G", regex: t.DATETIME_FORMATS.ERAS.join("|"), formatter: function (e) {
                    return n(e, "G")
                }
            }]
        }, this.init(), this.filter = function (e, n) {
            if (!angular.isDate(e) || isNaN(e) || !n)return "";
            n = t.DATETIME_FORMATS[n] || n, t.id !== p && this.init(), this.formatters[n] || (this.formatters[n] = i(n, "formatter"));
            var r = this.formatters[n], o = r.map, a = n;
            return o.reduce(function (t, n, r) {
                var i = a.match(new RegExp("(.*)" + n.key));
                i && angular.isString(i[1]) && (t += i[1], a = a.replace(i[1] + n.key, ""));
                var s = r === o.length - 1 ? a : "";
                return n.apply ? t + n.apply.call(null, e) + s : t + s
            }, "")
        }, this.parse = function (n, r, a) {
            if (!angular.isString(n) || !r)return n;
            r = t.DATETIME_FORMATS[r] || r, r = r.replace(h, "\\$&"), t.id !== p && this.init(), this.parsers[r] || (this.parsers[r] = i(r, "apply"));
            var s = this.parsers[r], u = s.regex, l = s.map, c = n.match(u), f = !1;
            if (c && c.length) {
                var d, g;
                angular.isDate(a) && !isNaN(a.getTime()) ? d = {
                    year: a.getFullYear(),
                    month: a.getMonth(),
                    date: a.getDate(),
                    hours: a.getHours(),
                    minutes: a.getMinutes(),
                    seconds: a.getSeconds(),
                    milliseconds: a.getMilliseconds()
                } : (a && e.warn("dateparser:", "baseDate is not a valid date"), d = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0
                });
                for (var v = 1, m = c.length; m > v; v++) {
                    var $ = l[v - 1];
                    "Z" === $.matcher && (f = !0), $.apply && $.apply.call(d, c[v])
                }
                var y = f ? Date.prototype.setUTCFullYear : Date.prototype.setFullYear, b = f ? Date.prototype.setUTCHours : Date.prototype.setHours;
                return o(d.year, d.month, d.date) && (!angular.isDate(a) || isNaN(a.getTime()) || f ? (g = new Date(0), y.call(g, d.year, d.month, d.date), b.call(g, d.hours || 0, d.minutes || 0, d.seconds || 0, d.milliseconds || 0)) : (g = new Date(a), y.call(g, d.year, d.month, d.date), b.call(g, d.hours, d.minutes, d.seconds, d.milliseconds))), g
            }
        }, this.toTimezone = s, this.fromTimezone = u, this.timezoneToOffset = l, this.addDateMinutes = c, this.convertTimezoneToLocal = f
    }]), angular.module("ui.bootstrap.isClass", []).directive("uibIsClass", ["$animate", function (e) {
        var t = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/, n = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
        return {
            restrict: "A", compile: function (r, i) {
                function o(e, t, n) {
                    u.push(e), l.push({scope: e, element: t}), h.forEach(function (t, n) {
                        a(t, e)
                    }), e.$on("$destroy", s)
                }

                function a(t, r) {
                    var i = t.match(n), o = r.$eval(i[1]), a = i[2], s = c[t];
                    if (!s) {
                        var u = function (t) {
                            var n = null;
                            l.some(function (e) {
                                var r = e.scope.$eval(p);
                                return r === t ? (n = e, !0) : void 0
                            }), s.lastActivated !== n && (s.lastActivated && e.removeClass(s.lastActivated.element, o), n && e.addClass(n.element, o), s.lastActivated = n)
                        };
                        c[t] = s = {
                            lastActivated: null,
                            scope: r,
                            watchFn: u,
                            compareWithExp: a,
                            watcher: r.$watch(a, u)
                        }
                    }
                    s.watchFn(r.$eval(a))
                }

                function s(e) {
                    var t = e.targetScope, n = u.indexOf(t);
                    if (u.splice(n, 1), l.splice(n, 1), u.length) {
                        var r = u[0];
                        angular.forEach(c, function (e) {
                            e.scope === t && (e.watcher = r.$watch(e.compareWithExp, e.watchFn), e.scope = r)
                        })
                    } else c = {}
                }

                var u = [], l = [], c = {}, f = i.uibIsClass.match(t), p = f[2], d = f[1], h = d.split(",");
                return o
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (e, t) {
        var n, r = {normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/}, i = {
            auto: /\s?auto?\s?/i,
            primary: /^(top|bottom|left|right)$/,
            secondary: /^(top|bottom|left|right|center)$/,
            vertical: /^(top|bottom)$/
        };
        return {
            getRawNode: function (e) {
                return e.nodeName ? e : e[0] || e
            }, parseStyle: function (e) {
                return e = parseFloat(e), isFinite(e) ? e : 0
            }, offsetParent: function (n) {
                function r(e) {
                    return "static" === (t.getComputedStyle(e).position || "static")
                }

                n = this.getRawNode(n);
                for (var i = n.offsetParent || e[0].documentElement; i && i !== e[0].documentElement && r(i);)i = i.offsetParent;
                return i || e[0].documentElement
            }, scrollbarWidth: function () {
                if (angular.isUndefined(n)) {
                    var t = angular.element('<div class="uib-position-scrollbar-measure"></div>');
                    e.find("body").append(t), n = t[0].offsetWidth - t[0].clientWidth, n = isFinite(n) ? n : 0, t.remove()
                }
                return n
            }, isScrollable: function (e, n) {
                e = this.getRawNode(e);
                var i = n ? r.hidden : r.normal, o = t.getComputedStyle(e);
                return i.test(o.overflow + o.overflowY + o.overflowX)
            }, scrollParent: function (n, i) {
                n = this.getRawNode(n);
                var o = i ? r.hidden : r.normal, a = e[0].documentElement, s = t.getComputedStyle(n), u = "absolute" === s.position, l = n.parentElement || a;
                if (l === a || "fixed" === s.position)return a;
                for (; l.parentElement && l !== a;) {
                    var c = t.getComputedStyle(l);
                    if (u && "static" !== c.position && (u = !1), !u && o.test(c.overflow + c.overflowY + c.overflowX))break;
                    l = l.parentElement
                }
                return l
            }, position: function (n, r) {
                n = this.getRawNode(n);
                var i = this.offset(n);
                if (r) {
                    var o = t.getComputedStyle(n);
                    i.top -= this.parseStyle(o.marginTop), i.left -= this.parseStyle(o.marginLeft)
                }
                var a = this.offsetParent(n), s = {top: 0, left: 0};
                return a !== e[0].documentElement && (s = this.offset(a), s.top += a.clientTop - a.scrollTop, s.left += a.clientLeft - a.scrollLeft), {
                    width: Math.round(angular.isNumber(i.width) ? i.width : n.offsetWidth),
                    height: Math.round(angular.isNumber(i.height) ? i.height : n.offsetHeight),
                    top: Math.round(i.top - s.top),
                    left: Math.round(i.left - s.left)
                }
            }, offset: function (n) {
                n = this.getRawNode(n);
                var r = n.getBoundingClientRect();
                return {
                    width: Math.round(angular.isNumber(r.width) ? r.width : n.offsetWidth),
                    height: Math.round(angular.isNumber(r.height) ? r.height : n.offsetHeight),
                    top: Math.round(r.top + (t.pageYOffset || e[0].documentElement.scrollTop)),
                    left: Math.round(r.left + (t.pageXOffset || e[0].documentElement.scrollLeft))
                }
            }, viewportOffset: function (n, r, i) {
                n = this.getRawNode(n), i = i !== !1;
                var o = n.getBoundingClientRect(), a = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }, s = r ? e[0].documentElement : this.scrollParent(n), u = s.getBoundingClientRect();
                if (a.top = u.top + s.clientTop, a.left = u.left + s.clientLeft, s === e[0].documentElement && (a.top += t.pageYOffset, a.left += t.pageXOffset), a.bottom = a.top + s.clientHeight, a.right = a.left + s.clientWidth, i) {
                    var l = t.getComputedStyle(s);
                    a.top += this.parseStyle(l.paddingTop), a.bottom -= this.parseStyle(l.paddingBottom), a.left += this.parseStyle(l.paddingLeft), a.right -= this.parseStyle(l.paddingRight)
                }
                return {
                    top: Math.round(o.top - a.top),
                    bottom: Math.round(a.bottom - o.bottom),
                    left: Math.round(o.left - a.left),
                    right: Math.round(a.right - o.right)
                }
            }, parsePlacement: function (e) {
                var t = i.auto.test(e);
                return t && (e = e.replace(i.auto, "")), e = e.split("-"), e[0] = e[0] || "top", i.primary.test(e[0]) || (e[0] = "top"), e[1] = e[1] || "center", i.secondary.test(e[1]) || (e[1] = "center"), t ? e[2] = !0 : e[2] = !1, e
            }, positionElements: function (e, n, r, o) {
                e = this.getRawNode(e), n = this.getRawNode(n);
                var a = angular.isDefined(n.offsetWidth) ? n.offsetWidth : n.prop("offsetWidth"), s = angular.isDefined(n.offsetHeight) ? n.offsetHeight : n.prop("offsetHeight");
                r = this.parsePlacement(r);
                var u = o ? this.offset(e) : this.position(e), l = {top: 0, left: 0, placement: ""};
                if (r[2]) {
                    var c = this.viewportOffset(e, o), f = t.getComputedStyle(n), p = {
                        width: a + Math.round(Math.abs(this.parseStyle(f.marginLeft) + this.parseStyle(f.marginRight))),
                        height: s + Math.round(Math.abs(this.parseStyle(f.marginTop) + this.parseStyle(f.marginBottom)))
                    };
                    if (r[0] = "top" === r[0] && p.height > c.top && p.height <= c.bottom ? "bottom" : "bottom" === r[0] && p.height > c.bottom && p.height <= c.top ? "top" : "left" === r[0] && p.width > c.left && p.width <= c.right ? "right" : "right" === r[0] && p.width > c.right && p.width <= c.left ? "left" : r[0], r[1] = "top" === r[1] && p.height - u.height > c.bottom && p.height - u.height <= c.top ? "bottom" : "bottom" === r[1] && p.height - u.height > c.top && p.height - u.height <= c.bottom ? "top" : "left" === r[1] && p.width - u.width > c.right && p.width - u.width <= c.left ? "right" : "right" === r[1] && p.width - u.width > c.left && p.width - u.width <= c.right ? "left" : r[1], "center" === r[1])if (i.vertical.test(r[0])) {
                        var d = u.width / 2 - a / 2;
                        c.left + d < 0 && p.width - u.width <= c.right ? r[1] = "left" : c.right + d < 0 && p.width - u.width <= c.left && (r[1] = "right")
                    } else {
                        var h = u.height / 2 - p.height / 2;
                        c.top + h < 0 && p.height - u.height <= c.bottom ? r[1] = "top" : c.bottom + h < 0 && p.height - u.height <= c.top && (r[1] = "bottom")
                    }
                }
                switch (r[0]) {
                    case"top":
                        l.top = u.top - s;
                        break;
                    case"bottom":
                        l.top = u.top + u.height;
                        break;
                    case"left":
                        l.left = u.left - a;
                        break;
                    case"right":
                        l.left = u.left + u.width
                }
                switch (r[1]) {
                    case"top":
                        l.top = u.top;
                        break;
                    case"bottom":
                        l.top = u.top + u.height - s;
                        break;
                    case"left":
                        l.left = u.left;
                        break;
                    case"right":
                        l.left = u.left + u.width - a;
                        break;
                    case"center":
                        i.vertical.test(r[0]) ? l.left = u.left + u.width / 2 - a / 2 : l.top = u.top + u.height / 2 - s / 2
                }
                return l.top = Math.round(l.top), l.left = Math.round(l.left), l.placement = "center" === r[1] ? r[0] : r[0] + "-" + r[1], l
            }, positionArrow: function (e, n) {
                e = this.getRawNode(e);
                var r = e.querySelector(".tooltip-inner, .popover-inner");
                if (r) {
                    var o = angular.element(r).hasClass("tooltip-inner"), a = o ? e.querySelector(".tooltip-arrow") : e.querySelector(".arrow");
                    if (a) {
                        var s = {top: "", bottom: "", left: "", right: ""};
                        if (n = this.parsePlacement(n), "center" === n[1])return void angular.element(a).css(s);
                        var u = "border-" + n[0] + "-width", l = t.getComputedStyle(a)[u], c = "border-";
                        c += i.vertical.test(n[0]) ? n[0] + "-" + n[1] : n[1] + "-" + n[0], c += "-radius";
                        var f = t.getComputedStyle(o ? r : e)[c];
                        switch (n[0]) {
                            case"top":
                                s.bottom = o ? "0" : "-" + l;
                                break;
                            case"bottom":
                                s.top = o ? "0" : "-" + l;
                                break;
                            case"left":
                                s.right = o ? "0" : "-" + l;
                                break;
                            case"right":
                                s.left = o ? "0" : "-" + l
                        }
                        s[n[1]] = f, angular.element(a).css(s)
                    }
                }
            }
        }
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.position"]).value("$datepickerSuppressError", !1).value("uibDatepickerAttributeWarning", !0).constant("uibDatepickerConfig", {
        datepickerMode: "day",
        formatDay: "dd",
        formatMonth: "MMMM",
        formatYear: "yyyy",
        formatDayHeader: "EEE",
        formatDayTitle: "MMMM yyyy",
        formatMonthTitle: "yyyy",
        maxDate: null,
        maxMode: "year",
        minDate: null,
        minMode: "day",
        ngModelOptions: {},
        shortcutPropagation: !1,
        showWeeks: !0,
        yearColumns: 5,
        yearRows: 4
    }).controller("UibDatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$locale", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerSuppressError", "uibDatepickerAttributeWarning", "uibDateParser", function (e, t, n, r, i, o, a, s, u, l, c) {
        function f(t) {
            e.datepickerMode = t, v && (e.datepickerOptions.datepickerMode = t)
        }

        var p = this, d = {$setViewValue: angular.noop}, h = {}, g = [], v = !!t.datepickerOptions;
        if (this.modes = ["day", "month", "year"], v)["customClass", "dateDisabled", "datepickerMode", "formatDay", "formatDayHeader", "formatDayTitle", "formatMonth", "formatMonthTitle", "formatYear", "initDate", "maxDate", "maxMode", "minDate", "minMode", "showWeeks", "shortcutPropagation", "startingDay", "yearColumns", "yearRows"].forEach(function (t) {
            switch (t) {
                case"customClass":
                case"dateDisabled":
                    e[t] = e.datepickerOptions[t] || angular.noop;
                    break;
                case"datepickerMode":
                    e.datepickerMode = angular.isDefined(e.datepickerOptions.datepickerMode) ? e.datepickerOptions.datepickerMode : s.datepickerMode;
                    break;
                case"formatDay":
                case"formatDayHeader":
                case"formatDayTitle":
                case"formatMonth":
                case"formatMonthTitle":
                case"formatYear":
                    p[t] = angular.isDefined(e.datepickerOptions[t]) ? r(e.datepickerOptions[t])(e.$parent) : s[t];
                    break;
                case"showWeeks":
                case"shortcutPropagation":
                case"yearColumns":
                case"yearRows":
                    p[t] = angular.isDefined(e.datepickerOptions[t]) ? e.datepickerOptions[t] : s[t];
                    break;
                case"startingDay":
                    angular.isDefined(e.datepickerOptions.startingDay) ? p.startingDay = e.datepickerOptions.startingDay : angular.isNumber(s.startingDay) ? p.startingDay = s.startingDay : p.startingDay = (i.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
                    break;
                case"maxDate":
                case"minDate":
                    e.datepickerOptions[t] ? e.$watch(function () {
                        return e.datepickerOptions[t]
                    }, function (e) {
                        e ? angular.isDate(e) ? p[t] = c.fromTimezone(new Date(e), h.timezone) : p[t] = new Date(a(e, "medium")) : p[t] = null, p.refreshView()
                    }) : p[t] = s[t] ? c.fromTimezone(new Date(s[t]), h.timezone) : null;
                    break;
                case"maxMode":
                case"minMode":
                    e.datepickerOptions[t] ? e.$watch(function () {
                        return e.datepickerOptions[t]
                    }, function (n) {
                        p[t] = e[t] = angular.isDefined(n) ? n : datepickerOptions[t], ("minMode" === t && p.modes.indexOf(e.datepickerOptions.datepickerMode) < p.modes.indexOf(p[t]) || "maxMode" === t && p.modes.indexOf(e.datepickerOptions.datepickerMode) > p.modes.indexOf(p[t])) && (e.datepickerMode = p[t], e.datepickerOptions.datepickerMode = p[t])
                    }) : p[t] = e[t] = s[t] || null;
                    break;
                case"initDate":
                    e.datepickerOptions.initDate ? (p.activeDate = c.fromTimezone(e.datepickerOptions.initDate, h.timezone) || new Date, e.$watch(function () {
                        return e.datepickerOptions.initDate
                    }, function (e) {
                        e && (d.$isEmpty(d.$modelValue) || d.$invalid) && (p.activeDate = c.fromTimezone(e, h.timezone), p.refreshView())
                    })) : p.activeDate = new Date
            }
        }); else {
            if (angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle"], function (n) {
                    p[n] = angular.isDefined(t[n]) ? r(t[n])(e.$parent) : s[n], angular.isDefined(t[n]) && l && o.warn("uib-datepicker " + n + " attribute usage is deprecated, use datepicker-options attribute instead")
                }), angular.forEach(["showWeeks", "yearRows", "yearColumns", "shortcutPropagation"], function (n) {
                    p[n] = angular.isDefined(t[n]) ? e.$parent.$eval(t[n]) : s[n], angular.isDefined(t[n]) && l && o.warn("uib-datepicker " + n + " attribute usage is deprecated, use datepicker-options attribute instead")
                }), angular.forEach(["dateDisabled", "customClass"], function (e) {
                    angular.isDefined(t[e]) && l && o.warn("uib-datepicker " + e + " attribute usage is deprecated, use datepicker-options attribute instead")
                }), angular.isDefined(t.startingDay) ? (l && o.warn("uib-datepicker startingDay attribute usage is deprecated, use datepicker-options attribute instead"), p.startingDay = e.$parent.$eval(t.startingDay)) : angular.isNumber(s.startingDay) ? p.startingDay = s.startingDay : p.startingDay = (i.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7, angular.forEach(["minDate", "maxDate"], function (n) {
                    t[n] ? (l && o.warn("uib-datepicker " + n + " attribute usage is deprecated, use datepicker-options attribute instead"), g.push(e.$parent.$watch(t[n], function (e) {
                        e ? angular.isDate(e) ? p[n] = c.fromTimezone(new Date(e), h.timezone) : p[n] = new Date(a(e, "medium")) : p[n] = null, p.refreshView()
                    }))) : p[n] = s[n] ? c.fromTimezone(new Date(s[n]), h.timezone) : null
                }), angular.forEach(["minMode", "maxMode"], function (n) {
                    t[n] ? (l && o.warn("uib-datepicker " + n + " attribute usage is deprecated, use datepicker-options attribute instead"), g.push(e.$parent.$watch(t[n], function (r) {
                        p[n] = e[n] = angular.isDefined(r) ? r : t[n], ("minMode" === n && p.modes.indexOf(e.datepickerMode) < p.modes.indexOf(p[n]) || "maxMode" === n && p.modes.indexOf(e.datepickerMode) > p.modes.indexOf(p[n])) && (e.datepickerMode = p[n])
                    }))) : p[n] = e[n] = s[n] || null
                }), angular.isDefined(t.initDate)) {
                l && o.warn("uib-datepicker initDate attribute usage is deprecated, use datepicker-options attribute instead");
                var m = c.fromTimezone(e.$parent.$eval(t.initDate), h.timezone);
                this.activeDate = isNaN(m) ? new Date : m, g.push(e.$parent.$watch(t.initDate, function (e) {
                    e && (d.$isEmpty(d.$modelValue) || d.$invalid) && (e = c.fromTimezone(e, h.timezone), p.activeDate = isNaN(e) ? new Date : e, p.refreshView())
                }))
            } else this.activeDate = new Date;
            t.datepickerMode && l && o.warn("uib-datepicker datepickerMode attribute usage is deprecated, use datepicker-options attribute instead"), e.datepickerMode = e.datepickerMode || s.datepickerMode
        }
        e.uniqueId = "datepicker-" + e.$id + "-" + Math.floor(1e4 * Math.random()), e.disabled = angular.isDefined(t.disabled) || !1, angular.isDefined(t.ngDisabled) && g.push(e.$parent.$watch(t.ngDisabled, function (t) {
            e.disabled = t, p.refreshView()
        })), e.isActive = function (t) {
            return 0 === p.compare(t.date, p.activeDate) ? (e.activeDateId = t.uid, !0) : !1
        }, this.init = function (e) {
            d = e, h = e.$options || s.ngModelOptions, this.activeDate = d.$modelValue || new Date, d.$render = function () {
                p.render()
            }
        }, this.render = function () {
            if (d.$viewValue) {
                var e = new Date(d.$viewValue), t = !isNaN(e);
                t ? this.activeDate = c.fromTimezone(e, h.timezone) : u || o.error('Datepicker directive: "ng-model" value must be a Date object')
            }
            this.refreshView()
        }, this.refreshView = function () {
            if (this.element) {
                e.selectedDt = null, this._refreshView(), e.activeDt && (e.activeDateId = e.activeDt.uid);
                var t = d.$viewValue ? new Date(d.$viewValue) : null;
                t = c.fromTimezone(t, h.timezone), d.$setValidity("dateDisabled", !t || this.element && !this.isDisabled(t))
            }
        }, this.createDateObject = function (t, n) {
            var r = d.$viewValue ? new Date(d.$viewValue) : null;
            r = c.fromTimezone(r, h.timezone);
            var i = new Date;
            i = c.fromTimezone(i, h.timezone);
            var o = this.compare(t, i), a = {
                date: t,
                label: c.filter(t, n),
                selected: r && 0 === this.compare(t, r),
                disabled: this.isDisabled(t),
                past: 0 > o,
                current: 0 === o,
                future: o > 0,
                customClass: this.customClass(t) || null
            };
            return r && 0 === this.compare(t, r) && (e.selectedDt = a), p.activeDate && 0 === this.compare(a.date, p.activeDate) && (e.activeDt = a), a
        }, this.isDisabled = function (t) {
            return e.disabled || this.minDate && this.compare(t, this.minDate) < 0 || this.maxDate && this.compare(t, this.maxDate) > 0 || e.dateDisabled && e.dateDisabled({
                    date: t,
                    mode: e.datepickerMode
                })
        }, this.customClass = function (t) {
            return e.customClass({date: t, mode: e.datepickerMode})
        }, this.split = function (e, t) {
            for (var n = []; e.length > 0;)n.push(e.splice(0, t));
            return n
        }, e.select = function (t) {
            if (e.datepickerMode === p.minMode) {
                var n = d.$viewValue ? c.fromTimezone(new Date(d.$viewValue), h.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
                n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n = c.toTimezone(n, h.timezone), d.$setViewValue(n), d.$render()
            } else p.activeDate = t, f(p.modes[p.modes.indexOf(e.datepickerMode) - 1]), e.$emit("uib:datepicker.mode")
        }, e.move = function (e) {
            var t = p.activeDate.getFullYear() + e * (p.step.years || 0), n = p.activeDate.getMonth() + e * (p.step.months || 0);
            p.activeDate.setFullYear(t, n, 1), p.refreshView()
        }, e.toggleMode = function (t) {
            t = t || 1, e.datepickerMode === p.maxMode && 1 === t || e.datepickerMode === p.minMode && -1 === t || (f(p.modes[p.modes.indexOf(e.datepickerMode) + t]), e.$emit("uib:datepicker.mode"))
        }, e.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var $ = function () {
            p.element[0].focus()
        };
        e.$on("uib:datepicker.focus", $), e.keydown = function (t) {
            var n = e.keys[t.which];
            if (n && !t.shiftKey && !t.altKey && !e.disabled)if (t.preventDefault(), p.shortcutPropagation || t.stopPropagation(), "enter" === n || "space" === n) {
                if (p.isDisabled(p.activeDate))return;
                e.select(p.activeDate)
            } else!t.ctrlKey || "up" !== n && "down" !== n ? (p.handleKeyDown(n, t), p.refreshView()) : e.toggleMode("up" === n ? 1 : -1)
        }, e.$on("$destroy", function () {
            for (; g.length;)g.shift()()
        })
    }]).controller("UibDaypickerController", ["$scope", "$element", "dateFilter", function (e, t, n) {
        function r(e, t) {
            return 1 !== t || e % 4 !== 0 || e % 100 === 0 && e % 400 !== 0 ? o[t] : 29
        }

        function i(e) {
            var t = new Date(e);
            t.setDate(t.getDate() + 4 - (t.getDay() || 7));
            var n = t.getTime();
            return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
        }

        var o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.step = {months: 1}, this.element = t, this.init = function (t) {
            angular.extend(t, this), e.showWeeks = t.showWeeks, t.refreshView()
        }, this.getDates = function (e, t) {
            for (var n, r = new Array(t), i = new Date(e), o = 0; t > o;)n = new Date(i), r[o++] = n, i.setDate(i.getDate() + 1);
            return r
        }, this._refreshView = function () {
            var t = this.activeDate.getFullYear(), r = this.activeDate.getMonth(), o = new Date(this.activeDate);
            o.setFullYear(t, r, 1);
            var a = this.startingDay - o.getDay(), s = a > 0 ? 7 - a : -a, u = new Date(o);
            s > 0 && u.setDate(-s + 1);
            for (var l = this.getDates(u, 42), c = 0; 42 > c; c++)l[c] = angular.extend(this.createDateObject(l[c], this.formatDay), {
                secondary: l[c].getMonth() !== r,
                uid: e.uniqueId + "-" + c
            });
            e.labels = new Array(7);
            for (var f = 0; 7 > f; f++)e.labels[f] = {
                abbr: n(l[f].date, this.formatDayHeader),
                full: n(l[f].date, "EEEE")
            };
            if (e.title = n(this.activeDate, this.formatDayTitle), e.rows = this.split(l, 7), e.showWeeks) {
                e.weekNumbers = [];
                for (var p = (11 - this.startingDay) % 7, d = e.rows.length, h = 0; d > h; h++)e.weekNumbers.push(i(e.rows[h][p].date))
            }
        }, this.compare = function (e, t) {
            var n = new Date(e.getFullYear(), e.getMonth(), e.getDate()), r = new Date(t.getFullYear(), t.getMonth(), t.getDate());
            return n.setFullYear(e.getFullYear()), r.setFullYear(t.getFullYear()), n - r
        }, this.handleKeyDown = function (e, t) {
            var n = this.activeDate.getDate();
            if ("left" === e)n -= 1; else if ("up" === e)n -= 7; else if ("right" === e)n += 1; else if ("down" === e)n += 7; else if ("pageup" === e || "pagedown" === e) {
                var i = this.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
                this.activeDate.setMonth(i, 1), n = Math.min(r(this.activeDate.getFullYear(), this.activeDate.getMonth()), n)
            } else"home" === e ? n = 1 : "end" === e && (n = r(this.activeDate.getFullYear(), this.activeDate.getMonth()));
            this.activeDate.setDate(n)
        }
    }]).controller("UibMonthpickerController", ["$scope", "$element", "dateFilter", function (e, t, n) {
        this.step = {years: 1}, this.element = t, this.init = function (e) {
            angular.extend(e, this), e.refreshView()
        }, this._refreshView = function () {
            for (var t, r = new Array(12), i = this.activeDate.getFullYear(), o = 0; 12 > o; o++)t = new Date(this.activeDate), t.setFullYear(i, o, 1), r[o] = angular.extend(this.createDateObject(t, this.formatMonth), {uid: e.uniqueId + "-" + o});
            e.title = n(this.activeDate, this.formatMonthTitle), e.rows = this.split(r, 3)
        }, this.compare = function (e, t) {
            var n = new Date(e.getFullYear(), e.getMonth()), r = new Date(t.getFullYear(), t.getMonth());
            return n.setFullYear(e.getFullYear()), r.setFullYear(t.getFullYear()), n - r
        }, this.handleKeyDown = function (e, t) {
            var n = this.activeDate.getMonth();
            if ("left" === e)n -= 1; else if ("up" === e)n -= 3; else if ("right" === e)n += 1; else if ("down" === e)n += 3; else if ("pageup" === e || "pagedown" === e) {
                var r = this.activeDate.getFullYear() + ("pageup" === e ? -1 : 1);
                this.activeDate.setFullYear(r)
            } else"home" === e ? n = 0 : "end" === e && (n = 11);
            this.activeDate.setMonth(n)
        }
    }]).controller("UibYearpickerController", ["$scope", "$element", "dateFilter", function (e, t, n) {
        function r(e) {
            return parseInt((e - 1) / o, 10) * o + 1
        }

        var i, o;
        this.element = t, this.yearpickerInit = function () {
            i = this.yearColumns, o = this.yearRows * i, this.step = {years: o}
        }, this._refreshView = function () {
            for (var t, n = new Array(o), a = 0, s = r(this.activeDate.getFullYear()); o > a; a++)t = new Date(this.activeDate), t.setFullYear(s + a, 0, 1), n[a] = angular.extend(this.createDateObject(t, this.formatYear), {uid: e.uniqueId + "-" + a});
            e.title = [n[0].label, n[o - 1].label].join(" - "), e.rows = this.split(n, i), e.columns = i
        }, this.compare = function (e, t) {
            return e.getFullYear() - t.getFullYear()
        }, this.handleKeyDown = function (e, t) {
            var n = this.activeDate.getFullYear();
            "left" === e ? n -= 1 : "up" === e ? n -= i : "right" === e ? n += 1 : "down" === e ? n += i : "pageup" === e || "pagedown" === e ? n += ("pageup" === e ? -1 : 1) * o : "home" === e ? n = r(this.activeDate.getFullYear()) : "end" === e && (n = r(this.activeDate.getFullYear()) + o - 1), this.activeDate.setFullYear(n)
        }
    }]).directive("uibDatepicker", function () {
        return {
            replace: !0,
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/datepicker/datepicker.html"
            },
            scope: {
                datepickerMode: "=?",
                datepickerOptions: "=?",
                dateDisabled: "&",
                customClass: "&",
                shortcutPropagation: "&?"
            },
            require: ["uibDatepicker", "^ngModel"],
            controller: "UibDatepickerController",
            controllerAs: "datepicker",
            link: function (e, t, n, r) {
                var i = r[0], o = r[1];
                i.init(o)
            }
        }
    }).directive("uibDaypicker", function () {
        return {
            replace: !0,
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/datepicker/day.html"
            },
            require: ["^uibDatepicker", "uibDaypicker"],
            controller: "UibDaypickerController",
            link: function (e, t, n, r) {
                var i = r[0], o = r[1];
                o.init(i)
            }
        }
    }).directive("uibMonthpicker", function () {
        return {
            replace: !0,
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/datepicker/month.html"
            },
            require: ["^uibDatepicker", "uibMonthpicker"],
            controller: "UibMonthpickerController",
            link: function (e, t, n, r) {
                var i = r[0], o = r[1];
                o.init(i)
            }
        }
    }).directive("uibYearpicker", function () {
        return {
            replace: !0,
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/datepicker/year.html"
            },
            require: ["^uibDatepicker", "uibYearpicker"],
            controller: "UibYearpickerController",
            link: function (e, t, n, r) {
                var i = r[0];
                angular.extend(i, r[1]), i.yearpickerInit(), i.refreshView()
            }
        }
    }).value("uibDatepickerPopupAttributeWarning", !0).constant("uibDatepickerPopupConfig", {
        altInputFormats: [],
        appendToBody: !1,
        clearText: "Clear",
        closeOnDateSelection: !0,
        closeText: "Done",
        currentText: "Today",
        datepickerPopup: "yyyy-MM-dd",
        datepickerPopupTemplateUrl: "uib/template/datepicker/popup.html",
        datepickerTemplateUrl: "uib/template/datepicker/datepicker.html",
        html5Types: {date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM"},
        onOpenFocus: !0,
        showButtonBar: !0,
        placement: "auto bottom-left"
    }).controller("UibDatepickerPopupController", ["$scope", "$element", "$attrs", "$compile", "$log", "$parse", "$window", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", "uibDatepickerConfig", "uibDatepickerPopupAttributeWarning", function (e, t, n, r, i, o, a, s, u, l, c, f, p, d, h, g) {
        function v(e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        }

        function m(t) {
            var n = f.parse(t, C, e.date);
            if (isNaN(n))for (var r = 0; r < I.length; r++)if (n = f.parse(t, I[r], e.date), !isNaN(n))return n;
            return n
        }

        function $(e) {
            if (angular.isNumber(e) && (e = new Date(e)), !e)return null;
            if (angular.isDate(e) && !isNaN(e))return e;
            if (angular.isString(e)) {
                var t = m(e);
                if (!isNaN(t))return f.toTimezone(t, N.timezone)
            }
            return M.$options && M.$options.allowInvalid ? e : void 0
        }

        function y(e, t) {
            var r = e || t;
            return n.ngRequired || r ? (angular.isNumber(r) && (r = new Date(r)), r ? angular.isDate(r) && !isNaN(r) ? !0 : angular.isString(r) ? !isNaN(m(t)) : !1 : !0) : !0
        }

        function b(n) {
            if (e.isOpen || !e.disabled) {
                var r = j[0], i = t[0].contains(n.target), o = void 0 !== r.contains && r.contains(n.target);
                !e.isOpen || i || o || e.$apply(function () {
                    e.isOpen = !1
                })
            }
        }

        function w(n) {
            27 === n.which && e.isOpen ? (n.preventDefault(), n.stopPropagation(), e.$apply(function () {
                e.isOpen = !1
            }), t[0].focus()) : 40 !== n.which || e.isOpen || (n.preventDefault(), n.stopPropagation(), e.$apply(function () {
                e.isOpen = !0
            }))
        }

        function x() {
            if (e.isOpen) {
                var r = angular.element(j[0].querySelector(".uib-datepicker-popup")), i = n.popupPlacement ? n.popupPlacement : p.placement, o = l.positionElements(t, r, i, T);
                r.css({
                    top: o.top + "px",
                    left: o.left + "px"
                }), r.hasClass("uib-position-measure") && r.removeClass("uib-position-measure")
            }
        }

        var C, k, T, S, E, D, A, _, O, M, N, j, I, P = {}, R = !1, F = [];
        e.watchData = {}, this.init = function (l) {
            if (M = l, N = l.$options || h.ngModelOptions, k = angular.isDefined(n.closeOnDateSelection) ? e.$parent.$eval(n.closeOnDateSelection) : p.closeOnDateSelection, T = angular.isDefined(n.datepickerAppendToBody) ? e.$parent.$eval(n.datepickerAppendToBody) : p.appendToBody, S = angular.isDefined(n.onOpenFocus) ? e.$parent.$eval(n.onOpenFocus) : p.onOpenFocus, E = angular.isDefined(n.datepickerPopupTemplateUrl) ? n.datepickerPopupTemplateUrl : p.datepickerPopupTemplateUrl, D = angular.isDefined(n.datepickerTemplateUrl) ? n.datepickerTemplateUrl : p.datepickerTemplateUrl, I = angular.isDefined(n.altInputFormats) ? e.$parent.$eval(n.altInputFormats) : p.altInputFormats, e.showButtonBar = angular.isDefined(n.showButtonBar) ? e.$parent.$eval(n.showButtonBar) : p.showButtonBar,
                    p.html5Types[n.type] ? (C = p.html5Types[n.type], R = !0) : (C = n.uibDatepickerPopup || p.datepickerPopup, n.$observe("uibDatepickerPopup", function (e, t) {
                        var n = e || p.datepickerPopup;
                        if (n !== C && (C = n, M.$modelValue = null, !C))throw new Error("uibDatepickerPopup must have a date format specified.")
                    })), !C)throw new Error("uibDatepickerPopup must have a date format specified.");
            if (R && n.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");
            A = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), e.ngModelOptions = angular.copy(N), e.ngModelOptions.timezone = null, e.ngModelOptions.updateOnDefault === !0 && (e.ngModelOptions.updateOn = e.ngModelOptions.updateOn ? e.ngModelOptions.updateOn + " default" : "default"), A.attr({
                "ng-model": "date",
                "ng-model-options": "ngModelOptions",
                "ng-change": "dateSelection(date)",
                "template-url": E
            }), _ = angular.element(A.children()[0]), _.attr("template-url", D), R && "month" === n.type && (_.attr("datepicker-mode", '"month"'), _.attr("min-mode", "month")), e.datepickerOptions && _.attr("datepicker-options", "datepickerOptions"), angular.forEach(["minMode", "maxMode", "datepickerMode", "shortcutPropagation"], function (t) {
                if (n[t]) {
                    g && i.warn("uib-datepicker settings via uib-datepicker-popup attributes are deprecated and will be removed in UI Bootstrap 1.3, use datepicker-options attribute instead");
                    var r = o(n[t]), a = {
                        get: function () {
                            return r(e.$parent)
                        }
                    };
                    if (_.attr(v(t), "watchData." + t), "datepickerMode" === t) {
                        var s = r.assign;
                        a.set = function (t) {
                            s(e.$parent, t)
                        }
                    }
                    Object.defineProperty(e.watchData, t, a)
                }
            }), angular.forEach(["minDate", "maxDate", "initDate"], function (t) {
                if (n[t]) {
                    g && i.warn("uib-datepicker settings via uib-datepicker-popup attributes are deprecated and will be removed in UI Bootstrap 1.3, use datepicker-options attribute instead");
                    var r = o(n[t]);
                    F.push(e.$parent.$watch(r, function (n) {
                        if ("minDate" === t || "maxDate" === t)null === n ? P[t] = null : angular.isDate(n) ? P[t] = f.fromTimezone(new Date(n), N.timezone) : P[t] = new Date(c(n, "medium")), e.watchData[t] = null === n ? null : P[t]; else {
                            var r = n ? new Date(n) : new Date;
                            e.watchData[t] = f.fromTimezone(r, N.timezone)
                        }
                    })), _.attr(v(t), "watchData." + t)
                }
            }), n.dateDisabled && (g && i.warn("uib-datepicker settings via uib-datepicker-popup attributes are deprecated and will be removed in UI Bootstrap 1.3, use datepicker-options attribute instead"), _.attr("date-disabled", "dateDisabled({ date: date, mode: mode })")), angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRows", "yearColumns"], function (e) {
                angular.isDefined(n[e]) && (g && i.warn("uib-datepicker settings via uib-datepicker-popup attributes are deprecated and will be removed in UI Bootstrap 1.3, use datepicker-options attribute instead"), _.attr(v(e), n[e]))
            }), n.customClass && (g && i.warn("uib-datepicker settings via uib-datepicker-popup attributes are deprecated and will be removed in UI Bootstrap 1.3, use datepicker-options attribute instead"), _.attr("custom-class", "customClass({ date: date, mode: mode })")), R ? M.$formatters.push(function (t) {
                return e.date = f.fromTimezone(t, N.timezone), t
            }) : (M.$$parserName = "date", M.$validators.date = y, M.$parsers.unshift($), M.$formatters.push(function (t) {
                return M.$isEmpty(t) ? (e.date = t, t) : (e.date = f.fromTimezone(t, N.timezone), angular.isNumber(e.date) && (e.date = new Date(e.date)), f.filter(e.date, C))
            })), M.$viewChangeListeners.push(function () {
                e.date = m(M.$viewValue)
            }), t.on("keydown", w), j = r(A)(e), A.remove(), T ? s.find("body").append(j) : t.after(j), e.$on("$destroy", function () {
                for (e.isOpen === !0 && (u.$$phase || e.$apply(function () {
                    e.isOpen = !1
                })), j.remove(), t.off("keydown", w), s.off("click", b), O && O.off("scroll", x), angular.element(a).off("resize", x); F.length;)F.shift()()
            })
        }, e.getText = function (t) {
            return e[t + "Text"] || p[t + "Text"]
        }, e.isDisabled = function (t) {
            return "today" === t && (t = new Date), e.watchData.minDate && e.compare(t, P.minDate) < 0 || e.watchData.maxDate && e.compare(t, P.maxDate) > 0
        }, e.compare = function (e, t) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())
        }, e.dateSelection = function (n) {
            angular.isDefined(n) && (e.date = n);
            var r = e.date ? f.filter(e.date, C) : null;
            t.val(r), M.$setViewValue(r), k && (e.isOpen = !1, t[0].focus())
        }, e.keydown = function (n) {
            27 === n.which && (n.stopPropagation(), e.isOpen = !1, t[0].focus())
        }, e.select = function (t, n) {
            if (n.stopPropagation(), "today" === t) {
                var r = new Date;
                angular.isDate(e.date) ? (t = new Date(e.date), t.setFullYear(r.getFullYear(), r.getMonth(), r.getDate())) : t = new Date(r.setHours(0, 0, 0, 0))
            }
            e.dateSelection(t)
        }, e.close = function (n) {
            n.stopPropagation(), e.isOpen = !1, t[0].focus()
        }, e.disabled = angular.isDefined(n.disabled) || !1, n.ngDisabled && F.push(e.$parent.$watch(o(n.ngDisabled), function (t) {
            e.disabled = t
        })), e.$watch("isOpen", function (r) {
            r ? e.disabled ? e.isOpen = !1 : d(function () {
                x(), S && e.$broadcast("uib:datepicker.focus"), s.on("click", b);
                var r = n.popupPlacement ? n.popupPlacement : p.placement;
                T || l.parsePlacement(r)[2] ? (O = O || angular.element(l.scrollParent(t)), O && O.on("scroll", x)) : O = null, angular.element(a).on("resize", x)
            }, 0, !1) : (s.off("click", b), O && O.off("scroll", x), angular.element(a).off("resize", x))
        }), e.$on("uib:datepicker.mode", function () {
            d(x, 0, !1)
        })
    }]).directive("uibDatepickerPopup", function () {
        return {
            require: ["ngModel", "uibDatepickerPopup"],
            controller: "UibDatepickerPopupController",
            scope: {
                datepickerOptions: "=?",
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&",
                customClass: "&"
            },
            link: function (e, t, n, r) {
                var i = r[0], o = r[1];
                o.init(i)
            }
        }
    }).directive("uibDatepickerPopupWrap", function () {
        return {
            replace: !0, transclude: !0, templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/datepicker/popup.html"
            }
        }
    }), angular.module("ui.bootstrap.debounce", []).factory("$$debounce", ["$timeout", function (e) {
        return function (t, n) {
            var r;
            return function () {
                var i = this, o = Array.prototype.slice.call(arguments);
                r && e.cancel(r), r = e(function () {
                    t.apply(i, o)
                }, n)
            }
        }
    }]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("uibDropdownConfig", {
        appendToOpenClass: "uib-dropdown-open",
        openClass: "open"
    }).service("uibDropdownService", ["$document", "$rootScope", function (e, t) {
        var n = null;
        this.open = function (t) {
            n || (e.on("click", r), e.on("keydown", i)), n && n !== t && (n.isOpen = !1), n = t
        }, this.close = function (t) {
            n === t && (n = null, e.off("click", r), e.off("keydown", i))
        };
        var r = function (e) {
            if (n && !(e && "disabled" === n.getAutoClose() || e && 3 === e.which)) {
                var r = n.getToggleElement();
                if (!(e && r && r[0].contains(e.target))) {
                    var i = n.getDropdownElement();
                    e && "outsideClick" === n.getAutoClose() && i && i[0].contains(e.target) || (n.isOpen = !1, t.$$phase || n.$apply())
                }
            }
        }, i = function (e) {
            27 === e.which ? (n.focusToggleElement(), r()) : n.isKeynavEnabled() && -1 !== [38, 40].indexOf(e.which) && n.isOpen && (e.preventDefault(), e.stopPropagation(), n.focusDropdownEntry(e.which))
        }
    }]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function (e, t, n, r, i, o, a, s, u, l, c) {
        var f, p, d = this, h = e.$new(), g = i.appendToOpenClass, v = i.openClass, m = angular.noop, $ = n.onToggle ? r(n.onToggle) : angular.noop, y = !1, b = null, w = !1, x = u.find("body");
        t.addClass("dropdown"), this.init = function () {
            if (n.isOpen && (p = r(n.isOpen), m = p.assign, e.$watch(p, function (e) {
                    h.isOpen = !!e
                })), angular.isDefined(n.dropdownAppendTo)) {
                var i = r(n.dropdownAppendTo)(h);
                i && (b = angular.element(i))
            }
            y = angular.isDefined(n.dropdownAppendToBody), w = angular.isDefined(n.keyboardNav), y && !b && (b = x), b && d.dropdownMenu && (b.append(d.dropdownMenu), t.on("$destroy", function () {
                d.dropdownMenu.remove()
            }))
        }, this.toggle = function (e) {
            return h.isOpen = arguments.length ? !!e : !h.isOpen, angular.isFunction(m) && m(h, h.isOpen), h.isOpen
        }, this.isOpen = function () {
            return h.isOpen
        }, h.getToggleElement = function () {
            return d.toggleElement
        }, h.getAutoClose = function () {
            return n.autoClose || "always"
        }, h.getElement = function () {
            return t
        }, h.isKeynavEnabled = function () {
            return w
        }, h.focusDropdownEntry = function (e) {
            var n = d.dropdownMenu ? angular.element(d.dropdownMenu).find("a") : t.find("ul").eq(0).find("a");
            switch (e) {
                case 40:
                    angular.isNumber(d.selectedOption) ? d.selectedOption = d.selectedOption === n.length - 1 ? d.selectedOption : d.selectedOption + 1 : d.selectedOption = 0;
                    break;
                case 38:
                    angular.isNumber(d.selectedOption) ? d.selectedOption = 0 === d.selectedOption ? 0 : d.selectedOption - 1 : d.selectedOption = n.length - 1
            }
            n[d.selectedOption].focus()
        }, h.getDropdownElement = function () {
            return d.dropdownMenu
        }, h.focusToggleElement = function () {
            d.toggleElement && d.toggleElement[0].focus()
        }, h.$watch("isOpen", function (n, r) {
            if (b && d.dropdownMenu) {
                var i, u, p = s.positionElements(t, d.dropdownMenu, "bottom-left", !0);
                if (i = {
                        top: p.top + "px",
                        display: n ? "block" : "none"
                    }, u = d.dropdownMenu.hasClass("dropdown-menu-right"), u ? (i.left = "auto", i.right = window.innerWidth - (p.left + t.prop("offsetWidth")) + "px") : (i.left = p.left + "px", i.right = "auto"), !y) {
                    var w = s.offset(b);
                    i.top = p.top - w.top + "px", u ? i.right = window.innerWidth - (p.left - w.left + t.prop("offsetWidth")) + "px" : i.left = p.left - w.left + "px"
                }
                d.dropdownMenu.css(i)
            }
            var x = b ? b : t, C = x.hasClass(b ? g : v);
            if (C === !n && a[n ? "addClass" : "removeClass"](x, b ? g : v).then(function () {
                    angular.isDefined(n) && n !== r && $(e, {open: !!n})
                }), n)d.dropdownMenuTemplateUrl && c(d.dropdownMenuTemplateUrl).then(function (e) {
                f = h.$new(), l(e.trim())(f, function (e) {
                    var t = e;
                    d.dropdownMenu.replaceWith(t), d.dropdownMenu = t
                })
            }), h.focusToggleElement(), o.open(h); else {
                if (d.dropdownMenuTemplateUrl) {
                    f && f.$destroy();
                    var k = angular.element('<ul class="dropdown-menu"></ul>');
                    d.dropdownMenu.replaceWith(k), d.dropdownMenu = k
                }
                o.close(h), d.selectedOption = null
            }
            angular.isFunction(m) && m(e, n)
        }), e.$on("$locationChangeSuccess", function () {
            "disabled" !== h.getAutoClose() && (h.isOpen = !1)
        })
    }]).directive("uibDropdown", function () {
        return {
            controller: "UibDropdownController", link: function (e, t, n, r) {
                r.init()
            }
        }
    }).directive("uibDropdownMenu", function () {
        return {
            restrict: "A", require: "?^uibDropdown", link: function (e, t, n, r) {
                if (r && !angular.isDefined(n.dropdownNested)) {
                    t.addClass("dropdown-menu");
                    var i = n.templateUrl;
                    i && (r.dropdownMenuTemplateUrl = i), r.dropdownMenu || (r.dropdownMenu = t)
                }
            }
        }
    }).directive("uibDropdownToggle", function () {
        return {
            require: "?^uibDropdown", link: function (e, t, n, r) {
                if (r) {
                    t.addClass("dropdown-toggle"), r.toggleElement = t;
                    var i = function (i) {
                        i.preventDefault(), t.hasClass("disabled") || n.disabled || e.$apply(function () {
                            r.toggle()
                        })
                    };
                    t.bind("click", i), t.attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), e.$watch(r.isOpen, function (e) {
                        t.attr("aria-expanded", !!e)
                    }), e.$on("$destroy", function () {
                        t.unbind("click", i)
                    })
                }
            }
        }
    }), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
        return {
            createNew: function () {
                var e = [];
                return {
                    add: function (t, n) {
                        e.push({key: t, value: n})
                    }, get: function (t) {
                        for (var n = 0; n < e.length; n++)if (t === e[n].key)return e[n]
                    }, keys: function () {
                        for (var t = [], n = 0; n < e.length; n++)t.push(e[n].key);
                        return t
                    }, top: function () {
                        return e[e.length - 1]
                    }, remove: function (t) {
                        for (var n = -1, r = 0; r < e.length; r++)if (t === e[r].key) {
                            n = r;
                            break
                        }
                        return e.splice(n, 1)[0]
                    }, removeTop: function () {
                        return e.splice(e.length - 1, 1)[0]
                    }, length: function () {
                        return e.length
                    }
                }
            }
        }
    }), angular.module("ui.bootstrap.modal", ["ui.bootstrap.stackedMap"]).factory("$$multiMap", function () {
        return {
            createNew: function () {
                var e = {};
                return {
                    entries: function () {
                        return Object.keys(e).map(function (t) {
                            return {key: t, value: e[t]}
                        })
                    }, get: function (t) {
                        return e[t]
                    }, hasKey: function (t) {
                        return !!e[t]
                    }, keys: function () {
                        return Object.keys(e)
                    }, put: function (t, n) {
                        e[t] || (e[t] = []), e[t].push(n)
                    }, remove: function (t, n) {
                        var r = e[t];
                        if (r) {
                            var i = r.indexOf(n);
                            -1 !== i && r.splice(i, 1), r.length || delete e[t]
                        }
                    }
                }
            }
        }
    }).provider("$uibResolve", function () {
        var e = this;
        this.resolver = null, this.setResolver = function (e) {
            this.resolver = e
        }, this.$get = ["$injector", "$q", function (t, n) {
            var r = e.resolver ? t.get(e.resolver) : null;
            return {
                resolve: function (e, i, o, a) {
                    if (r)return r.resolve(e, i, o, a);
                    var s = [];
                    return angular.forEach(e, function (e) {
                        angular.isFunction(e) || angular.isArray(e) ? s.push(n.resolve(t.invoke(e))) : angular.isString(e) ? s.push(n.resolve(t.get(e))) : s.push(n.resolve(e))
                    }), n.all(s).then(function (t) {
                        var n = {}, r = 0;
                        return angular.forEach(e, function (e, i) {
                            n[i] = t[r++]
                        }), n
                    })
                }
            }
        }]
    }).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function (e, t, n) {
        function r(t, r, i) {
            i.modalInClass && (e.addClass(r, i.modalInClass), t.$on(n.NOW_CLOSING_EVENT, function (n, o) {
                var a = o();
                t.modalOptions.animation ? e.removeClass(r, i.modalInClass).then(a) : a()
            }))
        }

        return {
            replace: !0, templateUrl: "uib/template/modal/backdrop.html", compile: function (e, t) {
                return e.addClass(t.backdropClass), r
            }
        }
    }]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function (e, t, n, r) {
        return {
            scope: {index: "@"}, replace: !0, transclude: !0, templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/modal/window.html"
            }, link: function (i, o, a) {
                o.addClass(a.windowClass || ""), o.addClass(a.windowTopClass || ""), i.size = a.size, i.close = function (t) {
                    var n = e.getTop();
                    n && n.value.backdrop && "static" !== n.value.backdrop && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), e.dismiss(n.key, "backdrop click"))
                }, o.on("click", i.close), i.$isRendered = !0;
                var s = t.defer();
                a.$observe("modalRender", function (e) {
                    "true" === e && s.resolve()
                }), s.promise.then(function () {
                    var s = null;
                    a.modalInClass && (s = n(o, {addClass: a.modalInClass}).start(), i.$on(e.NOW_CLOSING_EVENT, function (e, t) {
                        var r = t();
                        n(o, {removeClass: a.modalInClass}).start().then(r)
                    })), t.when(s).then(function () {
                        var t = e.getTop();
                        if (t && e.modalRendered(t.key), !r[0].activeElement || !o[0].contains(r[0].activeElement)) {
                            var n = o[0].querySelector("[autofocus]");
                            n ? n.focus() : o[0].focus()
                        }
                    })
                })
            }
        }
    }]).directive("uibModalAnimationClass", function () {
        return {
            compile: function (e, t) {
                t.modalAnimation && e.addClass(t.uibModalAnimationClass)
            }
        }
    }).directive("uibModalTransclude", function () {
        return {
            link: function (e, t, n, r, i) {
                i(e.$parent, function (e) {
                    t.empty(), t.append(e)
                })
            }
        }
    }).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", function (e, t, n, r, i, o, a, s) {
        function u() {
            for (var e = -1, t = y.keys(), n = 0; n < t.length; n++)y.get(t[n]).value.backdrop && (e = n);
            return e
        }

        function l(e, t) {
            var n = y.get(e).value, r = n.appendTo;
            y.remove(e), p(n.modalDomEl, n.modalScope, function () {
                var t = n.openedClass || $;
                b.remove(t, e), r.toggleClass(t, b.hasKey(t)), c(!0)
            }, n.closedDeferred), f(), t && t.focus ? t.focus() : r.focus && r.focus()
        }

        function c(e) {
            var t;
            y.length() > 0 && (t = y.top().value, t.modalDomEl.toggleClass(t.windowTopClass || "", e))
        }

        function f() {
            if (g && -1 === u()) {
                var e = v;
                p(g, v, function () {
                    e = null
                }), g = void 0, v = void 0
            }
        }

        function p(t, n, r, i) {
            function a() {
                a.done || (a.done = !0, e.leave(t).then(function () {
                    t.remove(), i && i.resolve()
                }), n.$destroy(), r && r())
            }

            var s, u = null, l = function () {
                return s || (s = o.defer(), u = s.promise), function () {
                    s.resolve()
                }
            };
            return n.$broadcast(w.NOW_CLOSING_EVENT, l), o.when(u).then(a)
        }

        function d(e) {
            if (e.isDefaultPrevented())return e;
            var t = y.top();
            if (t)switch (e.which) {
                case 27:
                    t.value.keyboard && (e.preventDefault(), i.$apply(function () {
                        w.dismiss(t.key, "escape key press")
                    }));
                    break;
                case 9:
                    w.loadFocusElementList(t);
                    var n = !1;
                    e.shiftKey ? (w.isFocusInFirstItem(e) || w.isModalFocused(e, t)) && (n = w.focusLastFocusableElement()) : w.isFocusInLastItem(e) && (n = w.focusFirstFocusableElement()), n && (e.preventDefault(), e.stopPropagation())
            }
        }

        function h(e, t, n) {
            return !e.value.modalScope.$broadcast("modal.closing", t, n).defaultPrevented
        }

        var g, v, m, $ = "modal-open", y = s.createNew(), b = a.createNew(), w = {NOW_CLOSING_EVENT: "modal.stack.now-closing"}, x = 0, C = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";
        return i.$watch(u, function (e) {
            v && (v.index = e)
        }), n.on("keydown", d), i.$on("$destroy", function () {
            n.off("keydown", d)
        }), w.open = function (t, o) {
            var a = n[0].activeElement, s = o.openedClass || $;
            c(!1), y.add(t, {
                deferred: o.deferred,
                renderDeferred: o.renderDeferred,
                closedDeferred: o.closedDeferred,
                modalScope: o.scope,
                backdrop: o.backdrop,
                keyboard: o.keyboard,
                openedClass: o.openedClass,
                windowTopClass: o.windowTopClass,
                animation: o.animation,
                appendTo: o.appendTo
            }), b.put(s, t);
            var l = o.appendTo, f = u();
            if (!l.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");
            f >= 0 && !g && (v = i.$new(!0), v.modalOptions = o, v.index = f, g = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), g.attr("backdrop-class", o.backdropClass), o.animation && g.attr("modal-animation", "true"), r(g)(v), e.enter(g, l));
            var p = angular.element('<div uib-modal-window="modal-window"></div>');
            p.attr({
                "template-url": o.windowTemplateUrl,
                "window-class": o.windowClass,
                "window-top-class": o.windowTopClass,
                size: o.size,
                index: y.length() - 1,
                animate: "animate"
            }).html(o.content), o.animation && p.attr("modal-animation", "true"), e.enter(r(p)(o.scope), l).then(function () {
                o.scope.$$uibDestructionScheduled || e.addClass(l, s)
            }), y.top().value.modalDomEl = p, y.top().value.modalOpener = a, w.clearFocusListCache()
        }, w.close = function (e, t) {
            var n = y.get(e);
            return n && h(n, t, !0) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.resolve(t), l(e, n.value.modalOpener), !0) : !n
        }, w.dismiss = function (e, t) {
            var n = y.get(e);
            return n && h(n, t, !1) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.reject(t), l(e, n.value.modalOpener), !0) : !n
        }, w.dismissAll = function (e) {
            for (var t = this.getTop(); t && this.dismiss(t.key, e);)t = this.getTop()
        }, w.getTop = function () {
            return y.top()
        }, w.modalRendered = function (e) {
            var t = y.get(e);
            t && t.value.renderDeferred.resolve()
        }, w.focusFirstFocusableElement = function () {
            return m.length > 0 ? (m[0].focus(), !0) : !1
        }, w.focusLastFocusableElement = function () {
            return m.length > 0 ? (m[m.length - 1].focus(), !0) : !1
        }, w.isModalFocused = function (e, t) {
            if (e && t) {
                var n = t.value.modalDomEl;
                if (n && n.length)return (e.target || e.srcElement) === n[0]
            }
            return !1
        }, w.isFocusInFirstItem = function (e) {
            return m.length > 0 ? (e.target || e.srcElement) === m[0] : !1
        }, w.isFocusInLastItem = function (e) {
            return m.length > 0 ? (e.target || e.srcElement) === m[m.length - 1] : !1
        }, w.clearFocusListCache = function () {
            m = [], x = 0
        }, w.loadFocusElementList = function (e) {
            if ((void 0 === m || !m.length) && e) {
                var t = e.value.modalDomEl;
                t && t.length && (m = t[0].querySelectorAll(C))
            }
        }, w
    }]).provider("$uibModal", function () {
        var e = {
            options: {animation: !0, backdrop: !0, keyboard: !0},
            $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (t, n, r, i, o, a, s) {
                function u(e) {
                    return e.template ? n.when(e.template) : i(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl)
                }

                var l = {}, c = null;
                return l.getPromiseChain = function () {
                    return c
                }, l.open = function (i) {
                    function l() {
                        return m
                    }

                    var f = n.defer(), p = n.defer(), d = n.defer(), h = n.defer(), g = {
                        result: f.promise,
                        opened: p.promise,
                        closed: d.promise,
                        rendered: h.promise,
                        close: function (e) {
                            return s.close(g, e)
                        },
                        dismiss: function (e) {
                            return s.dismiss(g, e)
                        }
                    };
                    if (i = angular.extend({}, e.options, i), i.resolve = i.resolve || {}, i.appendTo = i.appendTo || r.find("body").eq(0), !i.template && !i.templateUrl)throw new Error("One of template or templateUrl options is required.");
                    var v, m = n.all([u(i), a.resolve(i.resolve, {}, null, null)]);
                    return v = c = n.all([c]).then(l, l).then(function (e) {
                        var n = i.scope || t, r = n.$new();
                        r.$close = g.close, r.$dismiss = g.dismiss, r.$on("$destroy", function () {
                            r.$$uibDestructionScheduled || r.$dismiss("$uibUnscheduledDestruction")
                        });
                        var a, u, l = {};
                        i.controller && (l.$scope = r, l.$uibModalInstance = g, angular.forEach(e[1], function (e, t) {
                            l[t] = e
                        }), u = o(i.controller, l, !0), i.controllerAs ? (a = u.instance, i.bindToController && (a.$close = r.$close, a.$dismiss = r.$dismiss, angular.extend(a, n)), a = u(), r[i.controllerAs] = a) : a = u(), angular.isFunction(a.$onInit) && a.$onInit()), s.open(g, {
                            scope: r,
                            deferred: f,
                            renderDeferred: h,
                            closedDeferred: d,
                            content: e[0],
                            animation: i.animation,
                            backdrop: i.backdrop,
                            keyboard: i.keyboard,
                            backdropClass: i.backdropClass,
                            windowTopClass: i.windowTopClass,
                            windowClass: i.windowClass,
                            windowTemplateUrl: i.windowTemplateUrl,
                            size: i.size,
                            openedClass: i.openedClass,
                            appendTo: i.appendTo
                        }), p.resolve(!0)
                    }, function (e) {
                        p.reject(e), f.reject(e)
                    })["finally"](function () {
                        c === v && (c = null)
                    }), g
                }, l
            }]
        };
        return e
    }), angular.module("ui.bootstrap.paging", []).factory("uibPaging", ["$parse", function (e) {
        return {
            create: function (t, n, r) {
                t.setNumPages = r.numPages ? e(r.numPages).assign : angular.noop, t.ngModelCtrl = {$setViewValue: angular.noop}, t._watchers = [], t.init = function (e, i) {
                    t.ngModelCtrl = e, t.config = i, e.$render = function () {
                        t.render()
                    }, r.itemsPerPage ? t._watchers.push(n.$parent.$watch(r.itemsPerPage, function (e) {
                        t.itemsPerPage = parseInt(e, 10), n.totalPages = t.calculateTotalPages(), t.updatePage()
                    })) : t.itemsPerPage = i.itemsPerPage, n.$watch("totalItems", function (e, r) {
                        (angular.isDefined(e) || e !== r) && (n.totalPages = t.calculateTotalPages(), t.updatePage())
                    })
                }, t.calculateTotalPages = function () {
                    var e = t.itemsPerPage < 1 ? 1 : Math.ceil(n.totalItems / t.itemsPerPage);
                    return Math.max(e || 0, 1)
                }, t.render = function () {
                    n.page = parseInt(t.ngModelCtrl.$viewValue, 10) || 1
                }, n.selectPage = function (e, r) {
                    r && r.preventDefault();
                    var i = !n.ngDisabled || !r;
                    i && n.page !== e && e > 0 && e <= n.totalPages && (r && r.target && r.target.blur(), t.ngModelCtrl.$setViewValue(e), t.ngModelCtrl.$render())
                }, n.getText = function (e) {
                    return n[e + "Text"] || t.config[e + "Text"]
                }, n.noPrevious = function () {
                    return 1 === n.page
                }, n.noNext = function () {
                    return n.page === n.totalPages
                }, t.updatePage = function () {
                    t.setNumPages(n.$parent, n.totalPages), n.page > n.totalPages ? n.selectPage(n.totalPages) : t.ngModelCtrl.$render()
                }, n.$on("$destroy", function () {
                    for (; t._watchers.length;)t._watchers.shift()()
                })
            }
        }
    }]), angular.module("ui.bootstrap.pager", ["ui.bootstrap.paging"]).controller("UibPagerController", ["$scope", "$attrs", "uibPaging", "uibPagerConfig", function (e, t, n, r) {
        e.align = angular.isDefined(t.align) ? e.$parent.$eval(t.align) : r.align, n.create(this, e, t)
    }]).constant("uibPagerConfig", {
        itemsPerPage: 10,
        previousText: "« Previous",
        nextText: "Next »",
        align: !0
    }).directive("uibPager", ["uibPagerConfig", function (e) {
        return {
            scope: {totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "="},
            require: ["uibPager", "?ngModel"],
            controller: "UibPagerController",
            controllerAs: "pager",
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/pager/pager.html"
            },
            replace: !0,
            link: function (t, n, r, i) {
                var o = i[0], a = i[1];
                a && o.init(a, e)
            }
        }
    }]), angular.module("ui.bootstrap.pagination", ["ui.bootstrap.paging"]).controller("UibPaginationController", ["$scope", "$attrs", "$parse", "uibPaging", "uibPaginationConfig", function (e, t, n, r, i) {
        function o(e, t, n) {
            return {number: e, text: t, active: n}
        }

        function a(e, t) {
            var n = [], r = 1, i = t, a = angular.isDefined(u) && t > u;
            a && (l ? (r = Math.max(e - Math.floor(u / 2), 1), i = r + u - 1, i > t && (i = t, r = i - u + 1)) : (r = (Math.ceil(e / u) - 1) * u + 1, i = Math.min(r + u - 1, t)));
            for (var s = r; i >= s; s++) {
                var d = o(s, p(s), s === e);
                n.push(d)
            }
            if (a && u > 0 && (!l || c || f)) {
                if (r > 1) {
                    if (!f || r > 3) {
                        var h = o(r - 1, "...", !1);
                        n.unshift(h)
                    }
                    if (f) {
                        if (3 === r) {
                            var g = o(2, "2", !1);
                            n.unshift(g)
                        }
                        var v = o(1, "1", !1);
                        n.unshift(v)
                    }
                }
                if (t > i) {
                    if (!f || t - 2 > i) {
                        var m = o(i + 1, "...", !1);
                        n.push(m)
                    }
                    if (f) {
                        if (i === t - 2) {
                            var $ = o(t - 1, t - 1, !1);
                            n.push($)
                        }
                        var y = o(t, t, !1);
                        n.push(y)
                    }
                }
            }
            return n
        }

        var s = this, u = angular.isDefined(t.maxSize) ? e.$parent.$eval(t.maxSize) : i.maxSize, l = angular.isDefined(t.rotate) ? e.$parent.$eval(t.rotate) : i.rotate, c = angular.isDefined(t.forceEllipses) ? e.$parent.$eval(t.forceEllipses) : i.forceEllipses, f = angular.isDefined(t.boundaryLinkNumbers) ? e.$parent.$eval(t.boundaryLinkNumbers) : i.boundaryLinkNumbers, p = angular.isDefined(t.pageLabel) ? function (n) {
            return e.$parent.$eval(t.pageLabel, {$page: n})
        } : angular.identity;
        e.boundaryLinks = angular.isDefined(t.boundaryLinks) ? e.$parent.$eval(t.boundaryLinks) : i.boundaryLinks, e.directionLinks = angular.isDefined(t.directionLinks) ? e.$parent.$eval(t.directionLinks) : i.directionLinks, r.create(this, e, t), t.maxSize && s._watchers.push(e.$parent.$watch(n(t.maxSize), function (e) {
            u = parseInt(e, 10), s.render()
        }));
        var d = this.render;
        this.render = function () {
            d(), e.page > 0 && e.page <= e.totalPages && (e.pages = a(e.page, e.totalPages))
        }
    }]).constant("uibPaginationConfig", {
        itemsPerPage: 10,
        boundaryLinks: !1,
        boundaryLinkNumbers: !1,
        directionLinks: !0,
        firstText: "First",
        previousText: "Previous",
        nextText: "Next",
        lastText: "Last",
        rotate: !0,
        forceEllipses: !1
    }).directive("uibPagination", ["$parse", "uibPaginationConfig", function (e, t) {
        return {
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@",
                ngDisabled: "="
            },
            require: ["uibPagination", "?ngModel"],
            controller: "UibPaginationController",
            controllerAs: "pagination",
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/pagination/pagination.html"
            },
            replace: !0,
            link: function (e, n, r, i) {
                var o = i[0], a = i[1];
                a && o.init(a, t)
            }
        }
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function () {
        function e(e) {
            var t = /[A-Z]/g, n = "-";
            return e.replace(t, function (e, t) {
                return (t ? n : "") + e.toLowerCase()
            })
        }

        var t = {
            placement: "top",
            placementClassPrefix: "",
            animation: !0,
            popupDelay: 0,
            popupCloseDelay: 0,
            useContentExp: !1
        }, n = {
            mouseenter: "mouseleave",
            click: "click",
            outsideClick: "outsideClick",
            focus: "blur",
            none: ""
        }, r = {};
        this.options = function (e) {
            angular.extend(r, e)
        }, this.setTriggers = function (e) {
            angular.extend(n, e)
        }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function (i, o, a, s, u, l, c, f, p) {
            function d(e) {
                if (27 === e.which) {
                    var t = h.top();
                    t && (t.value.close(), h.removeTop(), t = null)
                }
            }

            var h = p.createNew();
            return s.on("keypress", d), c.$on("$destroy", function () {
                s.off("keypress", d)
            }), function (i, c, p, d) {
                function g(e) {
                    var t = (e || d.trigger || p).split(" "), r = t.map(function (e) {
                        return n[e] || e
                    });
                    return {show: t, hide: r}
                }

                d = angular.extend({}, t, r, d);
                var v = e(i), m = l.startSymbol(), $ = l.endSymbol(), y = "<div " + v + '-popup title="' + m + "title" + $ + '" ' + (d.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + m + "content" + $ + '" ') + 'placement="' + m + "placement" + $ + '" popup-class="' + m + "popupClass" + $ + '" animation="animation" is-open="isOpen"origin-scope="origScope" class="uib-position-measure"></div>';
                return {
                    compile: function (e, t) {
                        var n = o(y);
                        return function (e, t, r, o) {
                            function l() {
                                U.isOpen ? v() : p()
                            }

                            function p() {
                                F && !e.$eval(r[c + "Enable"]) || (b(), C(), U.popupDelay ? M || (M = a(m, U.popupDelay, !1)) : m())
                            }

                            function v() {
                                $(), U.popupCloseDelay ? N || (N = a(y, U.popupCloseDelay, !1)) : y()
                            }

                            function m() {
                                return $(), b(), U.content ? (w(), void U.$evalAsync(function () {
                                    U.isOpen = !0, k(!0), B()
                                })) : angular.noop
                            }

                            function $() {
                                M && (a.cancel(M), M = null), j && (a.cancel(j), j = null)
                            }

                            function y() {
                                U && U.$evalAsync(function () {
                                    U && (U.isOpen = !1, k(!1), U.animation ? O || (O = a(x, 150, !1)) : x())
                                })
                            }

                            function b() {
                                N && (a.cancel(N), N = null), O && (a.cancel(O), O = null)
                            }

                            function w() {
                                A || (_ = U.$new(), A = n(_, function (e) {
                                    P ? s.find("body").append(e) : t.after(e)
                                }), T())
                            }

                            function x() {
                                $(), b(), S(), A && (A.remove(), A = null), _ && (_.$destroy(), _ = null)
                            }

                            function C() {
                                U.title = r[c + "Title"], V ? U.content = V(e) : U.content = r[i], U.popupClass = r[c + "Class"], U.placement = angular.isDefined(r[c + "Placement"]) ? r[c + "Placement"] : d.placement;
                                var t = u.parsePlacement(U.placement);
                                I = t[1] ? t[0] + "-" + t[1] : t[0];
                                var n = parseInt(r[c + "PopupDelay"], 10), o = parseInt(r[c + "PopupCloseDelay"], 10);
                                U.popupDelay = isNaN(n) ? d.popupDelay : n, U.popupCloseDelay = isNaN(o) ? d.popupCloseDelay : o
                            }

                            function k(t) {
                                L && angular.isFunction(L.assign) && L.assign(e, t)
                            }

                            function T() {
                                H.length = 0, V ? (H.push(e.$watch(V, function (e) {
                                    U.content = e, !e && U.isOpen && y()
                                })), H.push(_.$watch(function () {
                                    q || (q = !0, _.$$postDigest(function () {
                                        q = !1, U && U.isOpen && B()
                                    }))
                                }))) : H.push(r.$observe(i, function (e) {
                                    U.content = e, !e && U.isOpen ? y() : B()
                                })), H.push(r.$observe(c + "Title", function (e) {
                                    U.title = e, U.isOpen && B()
                                })), H.push(r.$observe(c + "Placement", function (e) {
                                    U.placement = e ? e : d.placement;
                                    var t = u.parsePlacement(U.placement);
                                    I = t[1] ? t[0] + "-" + t[1] : t[0], U.isOpen && B()
                                }))
                            }

                            function S() {
                                H.length && (angular.forEach(H, function (e) {
                                    e()
                                }), H.length = 0)
                            }

                            function E(e) {
                                U && U.isOpen && A && (t[0].contains(e.target) || A[0].contains(e.target) || v())
                            }

                            function D() {
                                var e = r[c + "Trigger"];
                                W(), R = g(e), "none" !== R.show && R.show.forEach(function (e, n) {
                                    "outsideClick" === e ? (t.on("click", l), s.on("click", E)) : e === R.hide[n] ? t.on(e, l) : e && (t.on(e, p), t.on(R.hide[n], v)), t.on("keypress", function (e) {
                                        27 === e.which && v()
                                    })
                                })
                            }

                            var A, _, O, M, N, j, I, P = angular.isDefined(d.appendToBody) ? d.appendToBody : !1, R = g(void 0), F = angular.isDefined(r[c + "Enable"]), U = e.$new(!0), q = !1, L = angular.isDefined(r[c + "IsOpen"]) ? f(r[c + "IsOpen"]) : !1, V = d.useContentExp ? f(r[i]) : !1, H = [], B = function () {
                                A && A.html() && (j || (j = a(function () {
                                    var e = u.positionElements(t, A, U.placement, P);
                                    A.css({
                                        top: e.top + "px",
                                        left: e.left + "px"
                                    }), A.hasClass(e.placement.split("-")[0]) || (A.removeClass(I.split("-")[0]), A.addClass(e.placement.split("-")[0])), A.hasClass(d.placementClassPrefix + e.placement) || (A.removeClass(d.placementClassPrefix + I), A.addClass(d.placementClassPrefix + e.placement)), A.hasClass("uib-position-measure") ? (u.positionArrow(A, e.placement), A.removeClass("uib-position-measure")) : I !== e.placement && u.positionArrow(A, e.placement), I = e.placement, j = null
                                }, 0, !1)))
                            };
                            U.origScope = e, U.isOpen = !1, h.add(U, {close: y}), U.contentExp = function () {
                                return U.content
                            }, r.$observe("disabled", function (e) {
                                e && $(), e && U.isOpen && y()
                            }), L && e.$watch(L, function (e) {
                                U && !e === U.isOpen && l()
                            });
                            var W = function () {
                                R.show.forEach(function (e) {
                                    "outsideClick" === e ? t.off("click", l) : (t.off(e, p), t.off(e, l))
                                }), R.hide.forEach(function (e) {
                                    "outsideClick" === e ? s.off("click", E) : t.off(e, v)
                                })
                            };
                            D();
                            var z = e.$eval(r[c + "Animation"]);
                            U.animation = angular.isDefined(z) ? !!z : d.animation;
                            var Y, G = c + "AppendToBody";
                            Y = G in r && void 0 === r[G] ? !0 : e.$eval(r[G]), P = angular.isDefined(Y) ? Y : P, e.$on("$destroy", function () {
                                W(), x(), h.remove(U), U = null
                            })
                        }
                    }
                }
            }
        }]
    }).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (e, t, n, r) {
        return {
            link: function (i, o, a) {
                var s, u, l, c = i.$eval(a.tooltipTemplateTranscludeScope), f = 0, p = function () {
                    u && (u.remove(), u = null), s && (s.$destroy(), s = null), l && (e.leave(l).then(function () {
                        u = null
                    }), u = l, l = null)
                };
                i.$watch(t.parseAsResourceUrl(a.uibTooltipTemplateTransclude), function (t) {
                    var a = ++f;
                    t ? (r(t, !0).then(function (r) {
                        if (a === f) {
                            var i = c.$new(), u = r, d = n(u)(i, function (t) {
                                p(), e.enter(t, o)
                            });
                            s = i, l = d, s.$emit("$includeContentLoaded", t)
                        }
                    }, function () {
                        a === f && (p(), i.$emit("$includeContentError", t))
                    }), i.$emit("$includeContentRequested", t)) : p()
                }), i.$on("$destroy", p)
            }
        }
    }]).directive("uibTooltipClasses", ["$uibPosition", function (e) {
        return {
            restrict: "A", link: function (t, n, r) {
                if (t.placement) {
                    var i = e.parsePlacement(t.placement);
                    n.addClass(i[0])
                }
                t.popupClass && n.addClass(t.popupClass), t.animation() && n.addClass(r.tooltipAnimationClass)
            }
        }
    }]).directive("uibTooltipPopup", function () {
        return {
            replace: !0,
            scope: {content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
            templateUrl: "uib/template/tooltip/tooltip-popup.html"
        }
    }).directive("uibTooltip", ["$uibTooltip", function (e) {
        return e("uibTooltip", "tooltip", "mouseenter")
    }]).directive("uibTooltipTemplatePopup", function () {
        return {
            replace: !0,
            scope: {contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&", originScope: "&"},
            templateUrl: "uib/template/tooltip/tooltip-template-popup.html"
        }
    }).directive("uibTooltipTemplate", ["$uibTooltip", function (e) {
        return e("uibTooltipTemplate", "tooltip", "mouseenter", {useContentExp: !0})
    }]).directive("uibTooltipHtmlPopup", function () {
        return {
            replace: !0,
            scope: {contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
            templateUrl: "uib/template/tooltip/tooltip-html-popup.html"
        }
    }).directive("uibTooltipHtml", ["$uibTooltip", function (e) {
        return e("uibTooltipHtml", "tooltip", "mouseenter", {useContentExp: !0})
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function () {
        return {
            replace: !0,
            scope: {
                title: "@",
                contentExp: "&",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&",
                originScope: "&"
            },
            templateUrl: "uib/template/popover/popover-template.html"
        }
    }).directive("uibPopoverTemplate", ["$uibTooltip", function (e) {
        return e("uibPopoverTemplate", "popover", "click", {useContentExp: !0})
    }]).directive("uibPopoverHtmlPopup", function () {
        return {
            replace: !0,
            scope: {contentExp: "&", title: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
            templateUrl: "uib/template/popover/popover-html.html"
        }
    }).directive("uibPopoverHtml", ["$uibTooltip", function (e) {
        return e("uibPopoverHtml", "popover", "click", {useContentExp: !0})
    }]).directive("uibPopoverPopup", function () {
        return {
            replace: !0,
            scope: {title: "@", content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
            templateUrl: "uib/template/popover/popover.html"
        }
    }).directive("uibPopover", ["$uibTooltip", function (e) {
        return e("uibPopover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", {
        animate: !0, max: 100
    }).controller("UibProgressController", ["$scope", "$attrs", "uibProgressConfig", function (e, t, n) {
        function r() {
            return angular.isDefined(e.maxParam) ? e.maxParam : n.max
        }

        var i = this, o = angular.isDefined(t.animate) ? e.$parent.$eval(t.animate) : n.animate;
        this.bars = [], e.max = r(), this.addBar = function (e, t, n) {
            o || t.css({transition: "none"}), this.bars.push(e), e.max = r(), e.title = n && angular.isDefined(n.title) ? n.title : "progressbar", e.$watch("value", function (t) {
                e.recalculatePercentage()
            }), e.recalculatePercentage = function () {
                var t = i.bars.reduce(function (e, t) {
                    return t.percent = +(100 * t.value / t.max).toFixed(2), e + t.percent
                }, 0);
                t > 100 && (e.percent -= t - 100)
            }, e.$on("$destroy", function () {
                t = null, i.removeBar(e)
            })
        }, this.removeBar = function (e) {
            this.bars.splice(this.bars.indexOf(e), 1), this.bars.forEach(function (e) {
                e.recalculatePercentage()
            })
        }, e.$watch("maxParam", function (e) {
            i.bars.forEach(function (e) {
                e.max = r(), e.recalculatePercentage()
            })
        })
    }]).directive("uibProgress", function () {
        return {
            replace: !0,
            transclude: !0,
            controller: "UibProgressController",
            require: "uibProgress",
            scope: {maxParam: "=?max"},
            templateUrl: "uib/template/progressbar/progress.html"
        }
    }).directive("uibBar", function () {
        return {
            replace: !0,
            transclude: !0,
            require: "^uibProgress",
            scope: {value: "=", type: "@"},
            templateUrl: "uib/template/progressbar/bar.html",
            link: function (e, t, n, r) {
                r.addBar(e, t, n)
            }
        }
    }).directive("uibProgressbar", function () {
        return {
            replace: !0,
            transclude: !0,
            controller: "UibProgressController",
            scope: {value: "=", maxParam: "=?max", type: "@"},
            templateUrl: "uib/template/progressbar/progressbar.html",
            link: function (e, t, n, r) {
                r.addBar(e, angular.element(t.children()[0]), {title: n.title})
            }
        }
    }), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", {
        max: 5,
        stateOn: null,
        stateOff: null,
        titles: ["one", "two", "three", "four", "five"]
    }).controller("UibRatingController", ["$scope", "$attrs", "uibRatingConfig", function (e, t, n) {
        var r = {$setViewValue: angular.noop}, i = this;
        this.init = function (i) {
            r = i, r.$render = this.render, r.$formatters.push(function (e) {
                return angular.isNumber(e) && e << 0 !== e && (e = Math.round(e)), e
            }), this.stateOn = angular.isDefined(t.stateOn) ? e.$parent.$eval(t.stateOn) : n.stateOn, this.stateOff = angular.isDefined(t.stateOff) ? e.$parent.$eval(t.stateOff) : n.stateOff;
            var o = angular.isDefined(t.titles) ? e.$parent.$eval(t.titles) : n.titles;
            this.titles = angular.isArray(o) && o.length > 0 ? o : n.titles;
            var a = angular.isDefined(t.ratingStates) ? e.$parent.$eval(t.ratingStates) : new Array(angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max);
            e.range = this.buildTemplateObjects(a)
        }, this.buildTemplateObjects = function (e) {
            for (var t = 0, n = e.length; n > t; t++)e[t] = angular.extend({index: t}, {
                stateOn: this.stateOn,
                stateOff: this.stateOff,
                title: this.getTitle(t)
            }, e[t]);
            return e
        }, this.getTitle = function (e) {
            return e >= this.titles.length ? e + 1 : this.titles[e]
        }, e.rate = function (t) {
            !e.readonly && t >= 0 && t <= e.range.length && (r.$setViewValue(r.$viewValue === t ? 0 : t), r.$render())
        }, e.enter = function (t) {
            e.readonly || (e.value = t), e.onHover({value: t})
        }, e.reset = function () {
            e.value = r.$viewValue, e.onLeave()
        }, e.onKeydown = function (t) {
            /(37|38|39|40)/.test(t.which) && (t.preventDefault(), t.stopPropagation(), e.rate(e.value + (38 === t.which || 39 === t.which ? 1 : -1)))
        }, this.render = function () {
            e.value = r.$viewValue, e.title = i.getTitle(e.value - 1)
        }
    }]).directive("uibRating", function () {
        return {
            require: ["uibRating", "ngModel"],
            scope: {readonly: "=?readOnly", onHover: "&", onLeave: "&"},
            controller: "UibRatingController",
            templateUrl: "uib/template/rating/rating.html",
            replace: !0,
            link: function (e, t, n, r) {
                var i = r[0], o = r[1];
                i.init(o)
            }
        }
    }), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", ["$scope", function (e) {
        function t(e) {
            for (var t = 0; t < r.tabs.length; t++)if (r.tabs[t].index === e)return t
        }

        var n, r = this;
        r.tabs = [], r.select = function (e) {
            if (!i) {
                var o = t(n), a = r.tabs[o];
                a && (a.tab.onDeselect(), a.tab.active = !1);
                var s = r.tabs[e];
                s ? (s.tab.onSelect(), s.tab.active = !0, r.active = s.index, n = s.index) : !s && angular.isNumber(n) && (r.active = null, n = null)
            }
        }, r.addTab = function (e) {
            if (r.tabs.push({tab: e, index: e.index}), r.tabs.sort(function (e, t) {
                    return e.index > t.index ? 1 : e.index < t.index ? -1 : 0
                }), e.index === r.active || !angular.isNumber(r.active) && 1 === r.tabs.length) {
                var n = t(e.index);
                r.select(n)
            }
        }, r.removeTab = function (e) {
            var n = t(e.index);
            if (e.index === r.active) {
                var i = n === r.tabs.length - 1 ? n - 1 : n + 1 % r.tabs.length;
                r.select(i)
            }
            r.tabs.splice(n, 1)
        }, e.$watch("tabset.active", function (e) {
            angular.isNumber(e) && e !== n && r.select(t(e))
        });
        var i;
        e.$on("$destroy", function () {
            i = !0
        })
    }]).directive("uibTabset", function () {
        return {
            transclude: !0,
            replace: !0,
            scope: {},
            bindToController: {active: "=?", type: "@"},
            controller: "UibTabsetController",
            controllerAs: "tabset",
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/tabs/tabset.html"
            },
            link: function (e, t, n) {
                e.vertical = angular.isDefined(n.vertical) ? e.$parent.$eval(n.vertical) : !1, e.justified = angular.isDefined(n.justified) ? e.$parent.$eval(n.justified) : !1, angular.isUndefined(n.active) && (e.active = 0)
            }
        }
    }).directive("uibTab", ["$parse", function (e) {
        return {
            require: "^uibTabset",
            replace: !0,
            templateUrl: function (e, t) {
                return t.templateUrl || "uib/template/tabs/tab.html"
            },
            transclude: !0,
            scope: {heading: "@", index: "=?", classes: "@?", onSelect: "&select", onDeselect: "&deselect"},
            controller: function () {
            },
            controllerAs: "tab",
            link: function (t, n, r, i, o) {
                t.disabled = !1, r.disable && t.$parent.$watch(e(r.disable), function (e) {
                    t.disabled = !!e
                }), angular.isUndefined(r.index) && (i.tabs && i.tabs.length ? t.index = Math.max.apply(null, i.tabs.map(function (e) {
                        return e.index
                    })) + 1 : t.index = 0), angular.isUndefined(r.classes) && (t.classes = ""), t.select = function () {
                    if (!t.disabled) {
                        for (var e, n = 0; n < i.tabs.length; n++)if (i.tabs[n].tab === t) {
                            e = n;
                            break
                        }
                        i.select(e)
                    }
                }, i.addTab(t), t.$on("$destroy", function () {
                    i.removeTab(t)
                }), t.$transcludeFn = o
            }
        }
    }]).directive("uibTabHeadingTransclude", function () {
        return {
            restrict: "A", require: "^uibTab", link: function (e, t) {
                e.$watch("headingElement", function (e) {
                    e && (t.html(""), t.append(e))
                })
            }
        }
    }).directive("uibTabContentTransclude", function () {
        function e(e) {
            return e.tagName && (e.hasAttribute("uib-tab-heading") || e.hasAttribute("data-uib-tab-heading") || e.hasAttribute("x-uib-tab-heading") || "uib-tab-heading" === e.tagName.toLowerCase() || "data-uib-tab-heading" === e.tagName.toLowerCase() || "x-uib-tab-heading" === e.tagName.toLowerCase() || "uib:tab-heading" === e.tagName.toLowerCase())
        }

        return {
            restrict: "A", require: "^uibTabset", link: function (t, n, r) {
                var i = t.$eval(r.uibTabContentTransclude).tab;
                i.$transcludeFn(i.$parent, function (t) {
                    angular.forEach(t, function (t) {
                        e(t) ? i.headingElement = t : n.append(t)
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", {
        hourStep: 1,
        minuteStep: 1,
        secondStep: 1,
        showMeridian: !0,
        showSeconds: !1,
        meridians: null,
        readonlyInput: !1,
        mousewheel: !0,
        arrowkeys: !0,
        showSpinners: !0,
        templateUrl: "uib/template/timepicker/timepicker.html"
    }).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function (e, t, n, r, i, o, a) {
        function s() {
            var t = +e.hours, n = e.showMeridian ? t > 0 && 13 > t : t >= 0 && 24 > t;
            return n ? (e.showMeridian && (12 === t && (t = 0), e.meridian === b[1] && (t += 12)), t) : void 0
        }

        function u() {
            var t = +e.minutes;
            return t >= 0 && 60 > t ? t : void 0
        }

        function l() {
            var t = +e.seconds;
            return t >= 0 && 60 > t ? t : void 0
        }

        function c(e) {
            return null === e ? "" : angular.isDefined(e) && e.toString().length < 2 ? "0" + e : e.toString()
        }

        function f(e) {
            p(), y.$setViewValue(new Date(m)), d(e)
        }

        function p() {
            y.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1, e.invalidSeconds = !1
        }

        function d(t) {
            if (y.$modelValue) {
                var n = m.getHours(), r = m.getMinutes(), i = m.getSeconds();
                e.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12), e.hours = "h" === t ? n : c(n), "m" !== t && (e.minutes = c(r)), e.meridian = m.getHours() < 12 ? b[0] : b[1], "s" !== t && (e.seconds = c(i)), e.meridian = m.getHours() < 12 ? b[0] : b[1]
            } else e.hours = null, e.minutes = null, e.seconds = null, e.meridian = b[0]
        }

        function h(e) {
            m = v(m, e), f()
        }

        function g(e, t) {
            return v(e, 60 * t)
        }

        function v(e, t) {
            var n = new Date(e.getTime() + 1e3 * t), r = new Date(e);
            return r.setHours(n.getHours(), n.getMinutes(), n.getSeconds()), r
        }

        var m = new Date, $ = [], y = {$setViewValue: angular.noop}, b = angular.isDefined(n.meridians) ? e.$parent.$eval(n.meridians) : a.meridians || o.DATETIME_FORMATS.AMPMS;
        e.tabindex = angular.isDefined(n.tabindex) ? n.tabindex : 0, t.removeAttr("tabindex"), this.init = function (t, r) {
            y = t, y.$render = this.render, y.$formatters.unshift(function (e) {
                return e ? new Date(e) : null
            });
            var i = r.eq(0), o = r.eq(1), s = r.eq(2), u = angular.isDefined(n.mousewheel) ? e.$parent.$eval(n.mousewheel) : a.mousewheel;
            u && this.setupMousewheelEvents(i, o, s);
            var l = angular.isDefined(n.arrowkeys) ? e.$parent.$eval(n.arrowkeys) : a.arrowkeys;
            l && this.setupArrowkeyEvents(i, o, s), e.readonlyInput = angular.isDefined(n.readonlyInput) ? e.$parent.$eval(n.readonlyInput) : a.readonlyInput, this.setupInputEvents(i, o, s)
        };
        var w = a.hourStep;
        n.hourStep && $.push(e.$parent.$watch(r(n.hourStep), function (e) {
            w = +e
        }));
        var x = a.minuteStep;
        n.minuteStep && $.push(e.$parent.$watch(r(n.minuteStep), function (e) {
            x = +e
        }));
        var C;
        $.push(e.$parent.$watch(r(n.min), function (e) {
            var t = new Date(e);
            C = isNaN(t) ? void 0 : t
        }));
        var k;
        $.push(e.$parent.$watch(r(n.max), function (e) {
            var t = new Date(e);
            k = isNaN(t) ? void 0 : t
        }));
        var T = !1;
        n.ngDisabled && $.push(e.$parent.$watch(r(n.ngDisabled), function (e) {
            T = e
        })), e.noIncrementHours = function () {
            var e = g(m, 60 * w);
            return T || e > k || m > e && C > e
        }, e.noDecrementHours = function () {
            var e = g(m, 60 * -w);
            return T || C > e || e > m && e > k
        }, e.noIncrementMinutes = function () {
            var e = g(m, x);
            return T || e > k || m > e && C > e
        }, e.noDecrementMinutes = function () {
            var e = g(m, -x);
            return T || C > e || e > m && e > k
        }, e.noIncrementSeconds = function () {
            var e = v(m, S);
            return T || e > k || m > e && C > e
        }, e.noDecrementSeconds = function () {
            var e = v(m, -S);
            return T || C > e || e > m && e > k
        }, e.noToggleMeridian = function () {
            return m.getHours() < 12 ? T || g(m, 720) > k : T || g(m, -720) < C
        };
        var S = a.secondStep;
        n.secondStep && $.push(e.$parent.$watch(r(n.secondStep), function (e) {
            S = +e
        })), e.showSeconds = a.showSeconds, n.showSeconds && $.push(e.$parent.$watch(r(n.showSeconds), function (t) {
            e.showSeconds = !!t
        })), e.showMeridian = a.showMeridian, n.showMeridian && $.push(e.$parent.$watch(r(n.showMeridian), function (t) {
            if (e.showMeridian = !!t, y.$error.time) {
                var n = s(), r = u();
                angular.isDefined(n) && angular.isDefined(r) && (m.setHours(n), f())
            } else d()
        })), this.setupMousewheelEvents = function (t, n, r) {
            var i = function (e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                return e.detail || t > 0
            };
            t.bind("mousewheel wheel", function (t) {
                T || e.$apply(i(t) ? e.incrementHours() : e.decrementHours()), t.preventDefault()
            }), n.bind("mousewheel wheel", function (t) {
                T || e.$apply(i(t) ? e.incrementMinutes() : e.decrementMinutes()), t.preventDefault()
            }), r.bind("mousewheel wheel", function (t) {
                T || e.$apply(i(t) ? e.incrementSeconds() : e.decrementSeconds()), t.preventDefault()
            })
        }, this.setupArrowkeyEvents = function (t, n, r) {
            t.bind("keydown", function (t) {
                T || (38 === t.which ? (t.preventDefault(), e.incrementHours(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementHours(), e.$apply()))
            }), n.bind("keydown", function (t) {
                T || (38 === t.which ? (t.preventDefault(), e.incrementMinutes(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementMinutes(), e.$apply()))
            }), r.bind("keydown", function (t) {
                T || (38 === t.which ? (t.preventDefault(), e.incrementSeconds(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementSeconds(), e.$apply()))
            })
        }, this.setupInputEvents = function (t, n, r) {
            if (e.readonlyInput)return e.updateHours = angular.noop, e.updateMinutes = angular.noop, void(e.updateSeconds = angular.noop);
            var i = function (t, n, r) {
                y.$setViewValue(null), y.$setValidity("time", !1), angular.isDefined(t) && (e.invalidHours = t), angular.isDefined(n) && (e.invalidMinutes = n), angular.isDefined(r) && (e.invalidSeconds = r)
            };
            e.updateHours = function () {
                var e = s(), t = u();
                y.$setDirty(), angular.isDefined(e) && angular.isDefined(t) ? (m.setHours(e), m.setMinutes(t), C > m || m > k ? i(!0) : f("h")) : i(!0)
            }, t.bind("blur", function (t) {
                y.$setTouched(), null === e.hours || "" === e.hours ? i(!0) : !e.invalidHours && e.hours < 10 && e.$apply(function () {
                    e.hours = c(e.hours)
                })
            }), e.updateMinutes = function () {
                var e = u(), t = s();
                y.$setDirty(), angular.isDefined(e) && angular.isDefined(t) ? (m.setHours(t), m.setMinutes(e), C > m || m > k ? i(void 0, !0) : f("m")) : i(void 0, !0)
            }, n.bind("blur", function (t) {
                y.$setTouched(), null === e.minutes ? i(void 0, !0) : !e.invalidMinutes && e.minutes < 10 && e.$apply(function () {
                    e.minutes = c(e.minutes)
                })
            }), e.updateSeconds = function () {
                var e = l();
                y.$setDirty(), angular.isDefined(e) ? (m.setSeconds(e), f("s")) : i(void 0, void 0, !0)
            }, r.bind("blur", function (t) {
                !e.invalidSeconds && e.seconds < 10 && e.$apply(function () {
                    e.seconds = c(e.seconds)
                })
            })
        }, this.render = function () {
            var t = y.$viewValue;
            isNaN(t) ? (y.$setValidity("time", !1), i.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (t && (m = t), C > m || m > k ? (y.$setValidity("time", !1), e.invalidHours = !0, e.invalidMinutes = !0) : p(), d())
        }, e.showSpinners = angular.isDefined(n.showSpinners) ? e.$parent.$eval(n.showSpinners) : a.showSpinners, e.incrementHours = function () {
            e.noIncrementHours() || h(60 * w * 60)
        }, e.decrementHours = function () {
            e.noDecrementHours() || h(60 * -w * 60)
        }, e.incrementMinutes = function () {
            e.noIncrementMinutes() || h(60 * x)
        }, e.decrementMinutes = function () {
            e.noDecrementMinutes() || h(60 * -x)
        }, e.incrementSeconds = function () {
            e.noIncrementSeconds() || h(S)
        }, e.decrementSeconds = function () {
            e.noDecrementSeconds() || h(-S)
        }, e.toggleMeridian = function () {
            var t = u(), n = s();
            e.noToggleMeridian() || (angular.isDefined(t) && angular.isDefined(n) ? h(720 * (m.getHours() < 12 ? 60 : -60)) : e.meridian = e.meridian === b[0] ? b[1] : b[0])
        }, e.blur = function () {
            y.$setTouched()
        }, e.$on("$destroy", function () {
            for (; $.length;)$.shift()()
        })
    }]).directive("uibTimepicker", ["uibTimepickerConfig", function (e) {
        return {
            require: ["uibTimepicker", "?^ngModel"],
            controller: "UibTimepickerController",
            controllerAs: "timepicker",
            replace: !0,
            scope: {},
            templateUrl: function (t, n) {
                return n.templateUrl || e.templateUrl
            },
            link: function (e, t, n, r) {
                var i = r[0], o = r[1];
                o && i.init(o, t.find("input"))
            }
        }
    }]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.debounce", "ui.bootstrap.position"]).factory("uibTypeaheadParser", ["$parse", function (e) {
        var t = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function (n) {
                var r = n.match(t);
                if (!r)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
                return {itemName: r[3], source: e(r[4]), viewMapper: e(r[2] || r[1]), modelMapper: e(r[1])}
            }
        }
    }]).controller("UibTypeaheadController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$$debounce", "$uibPosition", "uibTypeaheadParser", function (e, t, n, r, i, o, a, s, u, l, c, f, p) {
        function d() {
            U.moveInProgress || (U.moveInProgress = !0, U.$digest()), X()
        }

        function h() {
            U.position = A ? f.offset(t) : f.position(t), U.position.top += t.prop("offsetHeight")
        }

        var g, v, m = [9, 13, 27, 38, 40], $ = 200, y = e.$eval(n.typeaheadMinLength);
        y || 0 === y || (y = 1), e.$watch(n.typeaheadMinLength, function (e) {
            y = e || 0 === e ? e : 1
        });
        var b = e.$eval(n.typeaheadWaitMs) || 0, w = e.$eval(n.typeaheadEditable) !== !1;
        e.$watch(n.typeaheadEditable, function (e) {
            w = e !== !1
        });
        var x, C, k = i(n.typeaheadLoading).assign || angular.noop, T = i(n.typeaheadOnSelect), S = angular.isDefined(n.typeaheadSelectOnBlur) ? e.$eval(n.typeaheadSelectOnBlur) : !1, E = i(n.typeaheadNoResults).assign || angular.noop, D = n.typeaheadInputFormatter ? i(n.typeaheadInputFormatter) : void 0, A = n.typeaheadAppendToBody ? e.$eval(n.typeaheadAppendToBody) : !1, _ = n.typeaheadAppendTo ? e.$eval(n.typeaheadAppendTo) : null, O = e.$eval(n.typeaheadFocusFirst) !== !1, M = n.typeaheadSelectOnExact ? e.$eval(n.typeaheadSelectOnExact) : !1, N = i(n.typeaheadIsOpen).assign || angular.noop, j = e.$eval(n.typeaheadShowHint) || !1, I = i(n.ngModel), P = i(n.ngModel + "($$$p)"), R = function (t, n) {
            return angular.isFunction(I(e)) && v && v.$options && v.$options.getterSetter ? P(t, {$$$p: n}) : I.assign(t, n)
        }, F = p.parse(n.uibTypeahead), U = e.$new(), q = e.$on("$destroy", function () {
            U.$destroy()
        });
        U.$on("$destroy", q);
        var L = "typeahead-" + U.$id + "-" + Math.floor(1e4 * Math.random());
        t.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": L});
        var V, H;
        j && (V = angular.element("<div></div>"), V.css("position", "relative"), t.after(V), H = t.clone(), H.attr("placeholder", ""), H.attr("tabindex", "-1"), H.val(""), H.css({
            position: "absolute",
            top: "0px",
            left: "0px",
            "border-color": "transparent",
            "box-shadow": "none",
            opacity: 1,
            background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
            color: "#999"
        }), t.css({
            position: "relative",
            "vertical-align": "top",
            "background-color": "transparent"
        }), V.append(H), H.after(t));
        var B = angular.element("<div uib-typeahead-popup></div>");
        B.attr({
            id: L,
            matches: "matches",
            active: "activeIdx",
            select: "select(activeIdx, evt)",
            "move-in-progress": "moveInProgress",
            query: "query",
            position: "position",
            "assign-is-open": "assignIsOpen(isOpen)",
            debounce: "debounceUpdate"
        }), angular.isDefined(n.typeaheadTemplateUrl) && B.attr("template-url", n.typeaheadTemplateUrl), angular.isDefined(n.typeaheadPopupTemplateUrl) && B.attr("popup-template-url", n.typeaheadPopupTemplateUrl);
        var W = function () {
            j && H.val("")
        }, z = function () {
            U.matches = [], U.activeIdx = -1, t.attr("aria-expanded", !1), W()
        }, Y = function (e) {
            return L + "-option-" + e
        };
        U.$watch("activeIdx", function (e) {
            0 > e ? t.removeAttr("aria-activedescendant") : t.attr("aria-activedescendant", Y(e))
        });
        var G = function (e, t) {
            return U.matches.length > t && e ? e.toUpperCase() === U.matches[t].label.toUpperCase() : !1
        }, K = function (n, r) {
            var i = {$viewValue: n};
            k(e, !0), E(e, !1), o.when(F.source(e, i)).then(function (o) {
                var a = n === g.$viewValue;
                if (a && x)if (o && o.length > 0) {
                    U.activeIdx = O ? 0 : -1, E(e, !1), U.matches.length = 0;
                    for (var s = 0; s < o.length; s++)i[F.itemName] = o[s], U.matches.push({
                        id: Y(s),
                        label: F.viewMapper(U, i),
                        model: o[s]
                    });
                    if (U.query = n, h(), t.attr("aria-expanded", !0), M && 1 === U.matches.length && G(n, 0) && (angular.isNumber(U.debounceUpdate) || angular.isObject(U.debounceUpdate) ? c(function () {
                            U.select(0, r)
                        }, angular.isNumber(U.debounceUpdate) ? U.debounceUpdate : U.debounceUpdate["default"]) : U.select(0, r)), j) {
                        var u = U.matches[0].label;
                        angular.isString(n) && n.length > 0 && u.slice(0, n.length).toUpperCase() === n.toUpperCase() ? H.val(n + u.slice(n.length)) : H.val("")
                    }
                } else z(), E(e, !0);
                a && k(e, !1)
            }, function () {
                z(), k(e, !1), E(e, !0)
            })
        };
        A && (angular.element(u).on("resize", d), s.find("body").on("scroll", d));
        var X = c(function () {
            U.matches.length && h(), U.moveInProgress = !1
        }, $);
        U.moveInProgress = !1, U.query = void 0;
        var J, Q = function (e) {
            J = a(function () {
                K(e)
            }, b)
        }, Z = function () {
            J && a.cancel(J)
        };
        z(), U.assignIsOpen = function (t) {
            N(e, t)
        }, U.select = function (r, i) {
            var o, s, u = {};
            C = !0, u[F.itemName] = s = U.matches[r].model, o = F.modelMapper(e, u), R(e, o), g.$setValidity("editable", !0), g.$setValidity("parse", !0), T(e, {
                $item: s,
                $model: o,
                $label: F.viewMapper(e, u),
                $event: i
            }), z(), U.$eval(n.typeaheadFocusOnSelect) !== !1 && a(function () {
                t[0].focus()
            }, 0, !1)
        }, t.on("keydown", function (t) {
            if (0 !== U.matches.length && -1 !== m.indexOf(t.which)) {
                if (-1 === U.activeIdx && (9 === t.which || 13 === t.which) || 9 === t.which && t.shiftKey)return z(), void U.$digest();
                t.preventDefault();
                var n;
                switch (t.which) {
                    case 9:
                    case 13:
                        U.$apply(function () {
                            angular.isNumber(U.debounceUpdate) || angular.isObject(U.debounceUpdate) ? c(function () {
                                U.select(U.activeIdx, t)
                            }, angular.isNumber(U.debounceUpdate) ? U.debounceUpdate : U.debounceUpdate["default"]) : U.select(U.activeIdx, t)
                        });
                        break;
                    case 27:
                        t.stopPropagation(), z(), e.$digest();
                        break;
                    case 38:
                        U.activeIdx = (U.activeIdx > 0 ? U.activeIdx : U.matches.length) - 1, U.$digest(), n = B.find("li")[U.activeIdx], n.parentNode.scrollTop = n.offsetTop;
                        break;
                    case 40:
                        U.activeIdx = (U.activeIdx + 1) % U.matches.length, U.$digest(), n = B.find("li")[U.activeIdx], n.parentNode.scrollTop = n.offsetTop
                }
            }
        }), t.bind("focus", function (e) {
            x = !0, 0 !== y || g.$viewValue || a(function () {
                K(g.$viewValue, e)
            }, 0)
        }), t.bind("blur", function (e) {
            S && U.matches.length && -1 !== U.activeIdx && !C && (C = !0, U.$apply(function () {
                angular.isObject(U.debounceUpdate) && angular.isNumber(U.debounceUpdate.blur) ? c(function () {
                    U.select(U.activeIdx, e)
                }, U.debounceUpdate.blur) : U.select(U.activeIdx, e)
            })), !w && g.$error.editable && (g.$viewValue = "", t.val("")), x = !1, C = !1
        });
        var ee = function (n) {
            t[0] !== n.target && 3 !== n.which && 0 !== U.matches.length && (z(), l.$$phase || e.$digest())
        };
        s.on("click", ee), e.$on("$destroy", function () {
            s.off("click", ee), (A || _) && te.remove(), A && (angular.element(u).off("resize", d), s.find("body").off("scroll", d)), B.remove(), j && V.remove()
        });
        var te = r(B)(U);
        A ? s.find("body").append(te) : _ ? angular.element(_).eq(0).append(te) : t.after(te), this.init = function (t, n) {
            g = t, v = n, U.debounceUpdate = g.$options && i(g.$options.debounce)(e), g.$parsers.unshift(function (t) {
                return x = !0, 0 === y || t && t.length >= y ? b > 0 ? (Z(), Q(t)) : K(t) : (k(e, !1), Z(), z()), w ? t : t ? void g.$setValidity("editable", !1) : (g.$setValidity("editable", !0), null)
            }), g.$formatters.push(function (t) {
                var n, r, i = {};
                return w || g.$setValidity("editable", !0), D ? (i.$model = t, D(e, i)) : (i[F.itemName] = t, n = F.viewMapper(e, i), i[F.itemName] = void 0, r = F.viewMapper(e, i), n !== r ? n : t)
            })
        }
    }]).directive("uibTypeahead", function () {
        return {
            controller: "UibTypeaheadController",
            require: ["ngModel", "^?ngModelOptions", "uibTypeahead"],
            link: function (e, t, n, r) {
                r[2].init(r[0], r[1])
            }
        }
    }).directive("uibTypeaheadPopup", ["$$debounce", function (e) {
        return {
            scope: {
                matches: "=",
                query: "=",
                active: "=",
                position: "&",
                moveInProgress: "=",
                select: "&",
                assignIsOpen: "&",
                debounce: "&"
            }, replace: !0, templateUrl: function (e, t) {
                return t.popupTemplateUrl || "uib/template/typeahead/typeahead-popup.html"
            }, link: function (t, n, r) {
                t.templateUrl = r.templateUrl, t.isOpen = function () {
                    var e = t.matches.length > 0;
                    return t.assignIsOpen({isOpen: e}), e
                }, t.isActive = function (e) {
                    return t.active === e
                }, t.selectActive = function (e) {
                    t.active = e
                }, t.selectMatch = function (n, r) {
                    var i = t.debounce();
                    angular.isNumber(i) || angular.isObject(i) ? e(function () {
                        t.select({activeIdx: n, evt: r})
                    }, angular.isNumber(i) ? i : i["default"]) : t.select({activeIdx: n, evt: r})
                }
            }
        }
    }]).directive("uibTypeaheadMatch", ["$templateRequest", "$compile", "$parse", function (e, t, n) {
        return {
            scope: {index: "=", match: "=", query: "="}, link: function (r, i, o) {
                var a = n(o.templateUrl)(r.$parent) || "uib/template/typeahead/typeahead-match.html";
                e(a).then(function (e) {
                    var n = angular.element(e.trim());
                    i.replaceWith(n), t(n)(r)
                })
            }
        }
    }]).filter("uibTypeaheadHighlight", ["$sce", "$injector", "$log", function (e, t, n) {
        function r(e) {
            return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        }

        function i(e) {
            return /<.*>/g.test(e)
        }

        var o;
        return o = t.has("$sanitize"), function (t, a) {
            return !o && i(t) && n.warn("Unsafe use of typeahead please use ngSanitize"), t = a ? ("" + t).replace(new RegExp(r(a), "gi"), "<strong>$&</strong>") : t, o || (t = e.trustAsHtml(t)), t
        }
    }]), angular.module("ui.bootstrap.carousel").run(function () {
        !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), angular.$$uibCarouselCss = !0
    }), angular.module("ui.bootstrap.position").run(function () {
        !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll;}</style>'), angular.$$uibPositionCss = !0
    }), angular.module("ui.bootstrap.datepicker").run(function () {
        !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}.uib-left,.uib-right{width:100%}</style>'), angular.$$uibDatepickerCss = !0
    }), angular.module("ui.bootstrap.tooltip").run(function () {
        !angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'), angular.$$uibTooltipCss = !0
    }), angular.module("ui.bootstrap.timepicker").run(function () {
        !angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'), angular.$$uibTimepickerCss = !0
    }), angular.module("ui.bootstrap.typeahead").run(function () {
        !angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'), angular.$$uibTypeaheadCss = !0
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)if (void 0 !== e.style[n])return {end: t[n]};
        return !1
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1, r = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var i = function () {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var n = e(this), i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)), "string" == typeof t && i[t].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', r = function (t) {
        e(t).on("click", n, this.close)
    };
    r.VERSION = "3.3.6", r.TRANSITION_DURATION = 150, r.prototype.close = function (t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var i = e(this), o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e(o);
        t && t.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = r, e.fn.alert.noConflict = function () {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.button"), o = "object" == typeof t && t;
            i || r.data("bs.button", i = new n(this, o)), "toggle" == t ? i.toggle() : t && i.setState(t)
        })
    }

    var n = function (t, r) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, r), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (t) {
        var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
        t += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(e.proxy(function () {
            r[i](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var r = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
        return e.fn.button = r, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var r = e(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")), t.call(r, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.carousel"), o = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t), a = "string" == typeof t ? t : o.slide;
            i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof t ? i.to(t) : a ? i[a]() : o.interval && i.pause().cycle()
        })
    }

    var n = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t), r = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (r && !this.options.wrap)return t;
        var i = "prev" == e ? -1 : 1, o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (t, r) {
        var i = this.$element.find(".item.active"), o = r || this.getItemForDirection(t, i), a = this.interval, s = "next" == t ? "left" : "right", u = this;
        if (o.hasClass("active"))return this.sliding = !1;
        var l = o[0], c = e.Event("slide.bs.carousel", {relatedTarget: l, direction: s});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = e(this.$indicators.children()[this.getItemIndex(o)]);
                f && f.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {relatedTarget: l, direction: s});
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t),
                o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), u.sliding = !1, setTimeout(function () {
                    u.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var r = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = r, this
    };
    var i = function (n) {
        var r, i = e(this), o = e(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = e.extend({}, o.data(), i.data()), s = i.attr("data-slide-to");
            s && (a.interval = !1), t.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(r)
    }

    function n(t) {
        return this.each(function () {
            var n = e(this), i = n.data("bs.collapse"), o = e.extend({}, r.DEFAULTS, n.data(), "object" == typeof t && t);
            !i && o.toggle && /show|hide/.test(t) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof t && i[t]()
        })
    }

    var r = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, r.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.6", r.TRANSITION_DURATION = 350, r.DEFAULTS = {toggle: !0}, r.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, r.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)return s.call(this);
                    var u = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][u])
                }
            }
        }
    }, r.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, r.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, r.prototype.getParent = function () {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, r) {
            var i = e(r);
            this.addAriaAndCollapsedClass(t(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = r, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = i, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (r) {
        var i = e(this);
        i.attr("data-target") || r.preventDefault();
        var o = t(i), a = o.data("bs.collapse"), s = a ? "toggle" : i.data();
        n.call(o, s)
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(i).remove(), e(o).each(function () {
            var r = e(this), i = t(r), o = {relatedTarget: this};
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function r(t) {
        return this.each(function () {
            var n = e(this), r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new a(this)), "string" == typeof t && r[t].call(n)
        })
    }

    var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', a = function (t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.6", a.prototype.toggle = function (r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var o = t(i), a = o.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {relatedTarget: this};
                if (o.trigger(r = e.Event("show.bs.dropdown", s)), r.isDefaultPrevented())return;
                i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = e(this);
            if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = t(r), a = i.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which)return 27 == n.which && i.find(o).trigger("focus"), r.trigger("click");
                var s = " li:not(.disabled):visible a", u = i.find(".dropdown-menu" + s);
                if (u.length) {
                    var l = u.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = r, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), +function (e) {
    "use strict";
    function t(t, r) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.modal"), a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
            o || i.data("bs.modal", o = new n(this, a)), "string" == typeof t ? o[t](r) : a.show && o.show(r)
        })
    }

    var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function (t) {
        var r = this, i = e.Event("show.bs.modal", {relatedTarget: t});
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            r.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var i = e.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
            var o = e.Event("shown.bs.modal", {relatedTarget: t});
            i ? r.$dialog.one("bsTransitionEnd", function () {
                r.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (t) {
        var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && i;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                r.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var r = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = r, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var r = e(this), i = r.attr("href"), o = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), a = o.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                r.is(":visible") && r.trigger("focus")
            })
        }), t.call(o, a, this)
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.tooltip"), o = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof t && i[t]())
        })
    }

    var n = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (t, n, r) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a)this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin", u = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function () {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function (e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, n.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var e in this.inState)if (this.inState[e])return !0;
        return !1
    }, n.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !r)return;
            var i = this, o = this.tip(), a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, u = /\s?auto?\s?/i, l = u.test(s);
            l && (s = s.replace(u, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), f = o[0].offsetWidth, p = o[0].offsetHeight;
            if (l) {
                var d = s, h = this.getPosition(this.$viewport);
                s = "bottom" == s && c.bottom + p > h.bottom ? "top" : "top" == s && c.top - p < h.top ? "bottom" : "right" == s && c.right + f > h.width ? "left" : "left" == s && c.left - f < h.left ? "right" : s, o.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, f, p);
            this.applyPlacement(g, s);
            var v = function () {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == e && i.leave(i)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function (t, n) {
        var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, a = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(r[0], e.extend({
            using: function (e) {
                r.css({top: Math.round(e.top), left: Math.round(e.left)})
            }
        }, t), 0), r.addClass("in");
        var u = r[0].offsetWidth, l = r[0].offsetHeight;
        "top" == n && l != o && (t.top = t.top + o - l);
        var c = this.getViewportAdjustedDelta(n, t, u, l);
        c.left ? t.left += c.left : t.top += c.top;
        var f = /top|bottom/.test(n), p = f ? 2 * c.left - i + u : 2 * c.top - o + l, d = f ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(p, r[0][d], f)
    }, n.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (t) {
        function r() {
            "in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
        }

        var i = this, o = e(this.$tip), a = e.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
        var o = r ? {
            top: 0,
            left: 0
        } : t.offset(), a = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()}, s = r ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, i, a, s, o)
    }, n.prototype.getCalculatedOffset = function (e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {top: t.top + t.height / 2 - r / 2, left: t.left - n} : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (e, t, n, r) {
        var i = {top: 0, left: 0};
        if (!this.$viewport)return i;
        var o = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - o - a.scroll, u = t.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
        } else {
            var l = t.left - o, c = t.left + o + n;
            l < a.left ? i.left = a.left - l : c > a.right && (i.left = a.left + a.width - c)
        }
        return i
    }, n.prototype.getTitle = function () {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function (e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout), this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = r, this
    }
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.popover"), o = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof t && i[t]())
        })
    }

    var n = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function () {
        return e.fn.popover = r, this
    }
}(jQuery), +function (e) {
    "use strict";
    function t(n, r) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this, o)), "string" == typeof n && i[n]()
        })
    }

    t.VERSION = "3.3.6", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function () {
        var t = this, n = "offset", r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var t = e(this), i = t.data("target") || t.attr("href"), o = /^#./.test(i) && e(i);
            return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets, a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= r)return a != (e = o[o.length - 1]) && this.activate(e);
        if (a && t < i[0])return this.activeTarget = null, this.clear();
        for (e = i.length; e--;)a != o[e] && t >= i[e] && (void 0 === i[e + 1] || t < i[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function () {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = r, this
    }, e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
    }

    var n = function (t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"), o = e.Event("hide.bs.tab", {relatedTarget: t[0]}), a = e.Event("show.bs.tab", {relatedTarget: i[0]});
            if (i.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = e(r);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function () {
                    i.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (t, r, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }

        var a = r.find("> .active"), s = i && e.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = r, this
    };
    var i = function (n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.affix"), o = "object" == typeof t && t;
            i || r.data("bs.affix", i = new n(this, o)), "string" == typeof t && i[t]()
        })
    }

    var n = function (t, r) {
        this.options = e.extend({}, n.DEFAULTS, r), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (e, t, n, r) {
        var i = this.$target.scrollTop(), o = this.$element.offset(), a = this.$target.height();
        if (null != n && "top" == this.affixed)return n > i ? "top" : !1;
        if ("bottom" == this.affixed)return null != n ? i + this.unpin <= o.top ? !1 : "bottom" : e - r >= i + a ? !1 : "bottom";
        var s = null == this.affixed, u = s ? i : o.top, l = s ? a : t;
        return null != n && n >= i ? "top" : null != r && u + l >= e - r ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(), t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(), r = this.options.offset, i = r.top, o = r.bottom, a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
            var s = this.getState(a, t, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (s ? "-" + s : ""), l = e.Event(u + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented())return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({top: a - t - o})
        }
    };
    var r = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
        return e.fn.affix = r, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var n = e(this), r = n.data();
            r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), t.call(n, r)
        })
    })
}(jQuery);