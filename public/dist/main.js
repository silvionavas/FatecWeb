var x=1;
! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 9)
}([function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(3),
        i = n(19),
        a = Object.prototype.toString;

    function s(e) {
        return "[object Array]" === a.call(e)
    }

    function u(e) {
        return null !== e && "object" === (void 0 === e ? "undefined" : r(e))
    }

    function c(e) {
        return "[object Function]" === a.call(e)
    }

    function l(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" !== (void 0 === e ? "undefined" : r(e)) && (e = [e]), s(e))
                for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
            else
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }
    e.exports = {
        isArray: s,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === a.call(e)
        },
        isBuffer: i,
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: u,
        isUndefined: function(e) {
            return void 0 === e
        },
        isDate: function(e) {
            return "[object Date]" === a.call(e)
        },
        isFile: function(e) {
            return "[object File]" === a.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === a.call(e)
        },
        isFunction: c,
        isStream: function(e) {
            return u(e) && c(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        },
        forEach: l,
        merge: function e() {
            var t = {};

            function n(n, o) {
                "object" === r(t[o]) && "object" === (void 0 === n ? "undefined" : r(n)) ? t[o] = e(t[o], n) : t[o] = n
            }
            for (var o = 0, i = arguments.length; o < i; o++) l(arguments[o], n);
            return t
        },
        extend: function(e, t, n) {
            return l(t, function(t, r) {
                e[r] = n && "function" == typeof t ? o(t, n) : t
            }), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(18)
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(0),
            o = n(22),
            i = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function a(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var s = {
            adapter: function() {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = n(4) : void 0 !== t && (e = n(4)), e
            }(),
            transformRequest: [function(e, t) {
                return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        r.forEach(["delete", "get", "head"], function(e) {
            s.headers[e] = {}
        }), r.forEach(["post", "put", "patch"], function(e) {
            s.headers[e] = r.merge(i)
        }), e.exports = s
    }).call(this, n(21))
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n(23),
        i = n(25),
        a = n(26),
        s = n(27),
        u = n(5),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(28);
    e.exports = function(e) {
        return new Promise(function(t, l) {
            var f = e.data,
                d = e.headers;
            r.isFormData(f) && delete d["Content-Type"];
            var p = new XMLHttpRequest,
                h = "onreadystatechange",
                m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || s(e.url) || (p = new window.XDomainRequest, h = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
                var v = e.auth.username || "",
                    y = e.auth.password || "";
                d.Authorization = "Basic " + c(v + ":" + y)
            }
            if (p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[h] = function() {
                    if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: 1223 === p.status ? 204 : p.status,
                                statusText: 1223 === p.status ? "No Content" : p.statusText,
                                headers: n,
                                config: e,
                                request: p
                            };
                        o(t, l, r), p = null
                    }
                }, p.onerror = function() {
                    l(u("Network Error", e, null, p)), p = null
                }, p.ontimeout = function() {
                    l(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                }, r.isStandardBrowserEnv()) {
                var g = n(29),
                    b = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                b && (d[e.xsrfHeaderName] = b)
            }
            if ("setRequestHeader" in p && r.forEach(d, function(e, t) {
                    void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                p && (p.abort(), l(e), p = null)
            }), void 0 === f && (f = null), p.send(f)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(24);
    e.exports = function(e, t, n, o, i) {
        var a = new Error(e);
        return r(a, t, n, o, i)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.formateDate = function(e) {
        var t = e.split("-");
        return t[2] + "-" + t[1] + "-" + t[0]
    }, t.formateYearAndSemester = function(e) {
        var t = e.split("-");
        return t[2] + "-" + t[1] + "-" + t[0]
    }
}, function(e, t, n) {
    "use strict";
    n(10);
    var r = n(15),
        o = n(39),
        i = n(40),
        a = n(41),
        s = n(42),
        u = n(43),
        c = n(44),
        l = window,
        f = document;
    (0, s.startVestibular)(!0, f.querySelector(".accordions")), (0, o.startTabs)(f.querySelector(".page-tabs")), (0, i.startSlider)({
        slides: f.querySelectorAll(".manager"),
        controls: f.querySelectorAll(".control")
    }), (0, a.startAccordion)(f.querySelector(".accordions")), (0, u.startInternalMenu)({
        menu: f.querySelector(".page-menuList"),
        button: f.querySelector(".btn--change")
    }), (0, c.menuScroll)(f.querySelector(".auxiliaryBar")), (0, c.toggleMenu)({
        menu: f.querySelector(".mainBar-menu"),
        button: f.querySelector(".mobileMenu")
    }), (0, r.router)(l.location.pathname)
}, function(e, t, n) {
    var r = n(11);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(13)(r, o);
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {}, , function(e, t, n) {
    var r = {},
        o = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        i = function(e) {
            var t = {};
            return function(e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var r = function(e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    t[e] = r
                }
                return t[e]
            }
        }(),
        a = null,
        s = 0,
        u = [],
        c = n(14);

    function l(e, t) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n],
                i = r[o.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++) i.parts.push(v(o.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < o.parts.length; a++) s.push(v(o.parts[a], t));
                r[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function f(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                a = t.base ? i[0] + t.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function d(e, t) {
        var n = i(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = i(e.insertAt.before, n);
            n.insertBefore(t, o)
        }
    }

    function p(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1)
    }

    function h(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = function() {
                0;
                return n.nc
            }();
            r && (e.attrs.nonce = r)
        }
        return m(t, e.attrs), d(e, t), t
    }

    function m(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }

    function v(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = t.transform(e.css))) return function() {};
            e.css = i
        }
        if (t.singleton) {
            var u = s++;
            n = a || (a = h(t)), r = g.bind(null, n, u, !1), o = g.bind(null, n, u, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), d(e, t), t
        }(t), r = function(e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = c(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), o = function() {
            p(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = h(t), r = function(e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function() {
            p(n)
        });
        return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = f(e, t);
        return l(n, t),
            function(e) {
                for (var o = [], i = 0; i < n.length; i++) {
                    var a = n[i];
                    (s = r[a.id]).refs--, o.push(s)
                }
                e && l(f(e, t), t);
                for (i = 0; i < o.length; i++) {
                    var s;
                    if (0 === (s = o[i]).refs) {
                        for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                        delete r[s.id]
                    }
                }
            }
    };
    var y = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }();

    function g(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.router = function(e) {
        "eventos" === e.split("/")[1] ? (0, r.events)(e) : "wally" === e.split("/")[1] && (0, o.wally)()
    };
    var r = n(16),
        o = n(38)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.events = function(e) {
        "maratonas-de-programacao" === e.split("/")[2] && (0, r.marathonAPI)(e)
    };
    var r = n(17);
    n(37)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.marathonAPI = function(e) {
        void 0 === e.split("/")[3] && r.default.get("").then(function(e) {
            ! function(e, t) {
                for (var n = [], r = t; r > 0; r--) n.push('<option class="marathon-edition" value="' + r + '">' + r + "ª edição</option>");
                e.innerHTML = n.join("")
            }(a.selectBox, e.data.qtd), c(e.data.fotos), u(e.data.vencedores.lugares), s(e.data.competicao.data, e.data.competicao.horarios, e.data.competicao.responsaveis)
        }, !1);
        ! function(e) {
            e && e.addEventListener("change", function(t) {
                r.default.get("https://api.fatecrl.edu.br/api/v1/maratonas-de-programacao/edicoes/" + e.value).then(function(e) {
                    c(e.data.fotos), u(e.data.vencedores.lugares), s(e.data.competicao.data, e.data.competicao.horarios, e.data.competicao.responsaveis)
                })
            })
        }(a.selectBox)
    };
    var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1)),
        o = n(8);
    var i = document,
        a = {
            photos: i.querySelector("[data-id=marathon-edition-photos]"),
            selectBox: i.querySelector("[data-id=marathon-editions]"),
            rankings: i.querySelectorAll("[data-id=ranking]"),
            responsable: i.querySelector("[data-id=marathon-responsable]"),
            date: i.querySelector("[data-id=marathon-date]"),
            training: i.querySelector("[data-id=marathon-training]"),
            tournament: i.querySelector("[data-id=marathon-tournament]")
        };

    function s(e, t, n) {
        a.date.textContent = (0, o.formateDate)(e), a.responsable.textContent = n.principal + ", " + n.auxiliar, a.training.textContent = "" + t.aquecimento, a.tournament.textContent = "" + t.competicao
    }

    function u(e) {
        a.rankings[0].textContent = e.primeiro, a.rankings[1].textContent = e.segundo, a.rankings[2].textContent = e.terceiro
    }

    function c(e) {
        a.photos.setAttribute("href", e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n(3),
        i = n(20),
        a = n(2);

    function s(e) {
        var t = new i(e),
            n = o(i.prototype.request, t);
        return r.extend(n, i.prototype, t), r.extend(n, t), n
    }
    var u = s(a);
    u.Axios = i, u.create = function(e) {
        return s(r.merge(a, e))
    }, u.Cancel = n(7), u.CancelToken = n(35), u.isCancel = n(6), u.all = function(e) {
        return Promise.all(e)
    }, u.spread = n(36), e.exports = u, e.exports.default = u
}, function(e, t, n) {
    "use strict";
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    function r(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    e.exports = function(e) {
        return null != e && (r(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        o = n(0),
        i = n(30),
        a = n(31);

    function s(e) {
        this.defaults = e, this.interceptors = {
            request: new i,
            response: new i
        }
    }
    s.prototype.request = function(e) {
        "string" == typeof e && (e = o.merge({
            url: arguments[0]
        }, arguments[1])), (e = o.merge(r, {
            method: "get"
        }, this.defaults, e)).method = e.method.toLowerCase();
        var t = [a, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function(e) {
        s.prototype[e] = function(t, n) {
            return this.request(o.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    }), o.forEach(["post", "put", "patch"], function(e) {
        s.prototype[e] = function(t, n, r) {
            return this.request(o.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }), e.exports = s
}, function(e, t, n) {
    "use strict";
    var r, o, i = e.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function u(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            r = a
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            o = s
        }
    }();
    var c, l = [],
        f = !1,
        d = -1;

    function p() {
        f && c && (f = !1, c.length ? l = c.concat(l) : d = -1, l.length && h())
    }

    function h() {
        if (!f) {
            var e = u(p);
            f = !0;
            for (var t = l.length; t;) {
                for (c = l, l = []; ++d < t;) c && c[d].run();
                d = -1, t = l.length
            }
            c = null, f = !1,
                function(e) {
                    if (o === clearTimeout) return clearTimeout(e);
                    if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                    try {
                        o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function m(e, t) {
        this.fun = e, this.array = t
    }

    function v() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new m(e, t)), 1 !== l.length || f || u(h)
    }, m.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t) {
        r.forEach(e, function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(5);
    e.exports = function(e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);

    function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (r.isURLSearchParams(t)) i = t.toString();
        else {
            var a = [];
            r.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                }))
            }), i = a.join("&")
        }
        return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, i, a = {};
        return e ? (r.forEach(e.split("\n"), function(e) {
            if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                if (a[t] && o.indexOf(t) >= 0) return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
            }
        }), a) : a
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function o(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = o(window.location.href),
            function(t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function o() {
        this.message = "String contains an invalid character"
    }
    o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function(e) {
        for (var t, n, i = String(e), a = "", s = 0, u = r; i.charAt(0 | s) || (u = "=", s % 1); a += u.charAt(63 & t >> 8 - s % 1 * 8)) {
            if ((n = i.charCodeAt(s += .75)) > 255) throw new o;
            t = t << 8 | n
        }
        return a
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function(e, t, n, o, i, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);

    function o() {
        this.handlers = []
    }
    o.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, o.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function(e) {
        r.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n(32),
        i = n(6),
        a = n(2),
        s = n(33),
        u = n(34);

    function c(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return c(e), e.baseURL && !s(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }), (e.adapter || a.adapter)(e).then(function(t) {
            return c(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function(t) {
            return i(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t, n) {
        return r.forEach(n, function(n) {
            e = n(e, t)
        }), e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(7);

    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        });
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        })
    }
    o.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, o.source = function() {
        var e;
        return {
            token: new o(function(t) {
                e = t
            }),
            cancel: e
        }
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        e && e.__esModule
    })(n(1)), n(8)
}, function(e, t, n) {
    
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startTabs = function(e) {
        var t = Array.from(r.querySelectorAll(".page-tab"));
        e && e.addEventListener("click", function(e) {
            var n = e.target;
            t.forEach(function(e, r) {
                "LI" === e.tagName && n === e && (! function(e) {
                    e.map(function(e) {
                        return e.classList.remove("page-tab--active")
                    })
                }(t), o.map(function(e) {
                    return e.classList.remove("page-tab-content--active")
                }), i.map(function(e) {
                    return e.classList.remove("page-tab-manager--active")
                }), e.classList.add("page-tab--active"), o[r].classList.add("page-tab-content--active"), i[r].classList.add("page-tab-manager--active"))
            })
        })
    };
    var r = document,
        o = Array.from(r.querySelectorAll(".page-tab-content")),
        i = Array.from(r.querySelectorAll(".page-tab-manager"))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startSlider = function(e) {
        return e.slides.length > 1 && function e(t) {
            ! function(e) {
                Array.from(e).filter(function(e) {
                    return e.classList.remove("manager--active")
                })
            }(t.slides);
            ! function(e) {
                Array.from(e).filter(function(e) {
                    return e.classList.remove("control--active")
                })
            }(t.controls);
            t.slides[r].classList.add("manager--active");
            t.controls[r].classList.add("control--active");
            r++;
            setTimeout(function() {
                r === t.slides.length && (r = 0), e(t)
            }, 4e3)
        }(e)
    };
    var r = 0
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startAccordion = function(e) {
        e && e.addEventListener("click", function(t) {
            var n = t.target;
            Array.from(e.querySelectorAll(".accordion-question")).map(function(e) {
                return e.classList.remove("question--active")
            }), "SPAN" === n.tagName && n.classList.add("question--active"), Array.from(e.querySelectorAll(".accordion-panel")).map(function(e) {
                return e.classList.remove("panel--show")
            });
            var r = n.nextElementSibling;
            r.classList.add("panel--show")
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startVestibular = function(e, t) {
        !0 === e && t && t.insertAdjacentHTML("afterbegin", function(e, t, n) {}(o, i, a))
    };
    var r = {
            title: "",
            text: "",
            button: ""
        },
        o = r.title,
        i = r.content,
        a = r.button
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startInternalMenu = function(e) {
        e.button && e.button.addEventListener("click", function(t) {
            e.menu.classList.toggle("menu--show")
        }, !1)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.menuScroll = function(e) {
        e && window.addEventListener("scroll", function(t) {
            window.scrollY > e.scrollHeight ? e.classList.add("hide") : e.classList.remove("hide")
        })
    }, t.toggleMenu = function(e) {
        e.button.addEventListener("click", function(t) {
            e.button.classList.toggle("button--active"), e.menu.classList.toggle("menu--show"),
                function(e) {
                    
                    if(x==1){
                         x=5;
                         console.log(x);
                        e.querySelector(".menu").insertAdjacentHTML("beforeend", '\n <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="https://siga.cps.sp.gov.br/aluno/login.aspx">Siga</a>\n </div>\n </li>\n <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="http://fatecrledu.kinghost.net/moodle/">Moodle</a>\n </div>\n </li>\n <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="http://outlook.com/fatec.sp.gov.br">E-mail - Fatec</a>\n </div>\n </li>\n  <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="http://facebook.com/fatecrl">Facebook</a>\n </div>\n </li>\n  <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="http://instagram.com/fatecrl/?hl=pt-br">Instagram</a>\n </div>\n </li>\n  <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="http://twitter.com/fatecrubenslara">Twitter</a>\n </div>\n </li>\n  <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="https://www.linkedin.com/school/fatecrl">Linkedin</a>\n </div>\n </li>\n   <li class="menu-item" data-id="logins-mobile">\n <div class="menu-item-box">\n <a class="menu-link" href="http://youtube.com/channel/UCFTMm_Z9XAUQL0j9ueHfnEQ">Youtube</a>\n </div>\n </li>\n ')
                        }
                    }(e.menu)
        })
    }
}]);
//# sourceMappingURL=main.js.map