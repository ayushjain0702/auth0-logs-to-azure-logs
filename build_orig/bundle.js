module.exports = function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.i = function (e) {
        return e
    }, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 100)
}([function (e, t) {
    e.exports = require("auth0-extension-tools@1.3.1")
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t, n) {
    var r = n(35)("wks"),
        o = n(24),
        i = n(1).Symbol,
        s = "function" == typeof i;
    (e.exports = function (e) {
        return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
    }).store = r
}, function (e, t) {
    var n = e.exports = {
        version: "2.5.5"
    };
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    var r = n(9);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(0).config()
}, function (e, t, n) {
    e.exports = !n(20)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(10),
        o = n(22);
    e.exports = n(6) ? function (e, t, n) {
        return r.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    var r = n(4),
        o = n(51),
        i = n(37),
        s = Object.defineProperty;
    t.f = n(6) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return s(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(117),
        o = n(28);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    const r = n(90),
        o = n(43),
        i = n(83),
        s = n(89);
    e.exports.createServer = r.createServer, e.exports.urlHelpers = o, e.exports.middlewares = i, e.exports.routes = s
}, function (e, t, n) {
    "use strict";
    var r = n(172);
    r.emitErrs = !0;
    var o = new r.Logger({
        transports: [new r.transports.Console({
            timestamp: !0,
            level: "debug",
            handleExceptions: !0,
            json: !1,
            colorize: !0
        })],
        exitOnError: !1
    });
    e.exports = o, e.exports.stream = {
        write: function (e) {
            o.info(e.replace(/\n$/, ""))
        }
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(1),
        o = n(3),
        i = n(19),
        s = n(8),
        c = n(7),
        a = function (e, t, n) {
            var u, l, f, d = e & a.F,
                p = e & a.G,
                h = e & a.S,
                v = e & a.P,
                g = e & a.B,
                m = e & a.W,
                y = p ? o : o[t] || (o[t] = {}),
                x = y.prototype,
                w = p ? r : h ? r[t] : (r[t] || {}).prototype;
            p && (n = t);
            for (u in n)(l = !d && w && void 0 !== w[u]) && c(y, u) || (f = l ? w[u] : n[u], y[u] = p && "function" != typeof w[u] ? n[u] : g && l ? i(f, r) : m && w[u] == f ? function (e) {
                var t = function (t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(f) : v && "function" == typeof f ? i(Function.call, f) : f, v && ((y.virtual || (y.virtual = {}))[u] = f, e & a.R && x && !x[u] && s(x, u, f)))
        };
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, e.exports = a
}, function (e, t) {
    e.exports = {}
}, function (e, t) {
    e.exports = require("express@4.12.4")
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var r = n(18);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t) {
    e.exports = !0
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function (e, t, n) {
    var r = n(10).f,
        o = n(7),
        i = n(2)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function (e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.JwksClient = void 0;
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        c = n(41),
        a = r(c),
        u = n(76),
        l = r(u),
        f = n(66),
        d = (r(f), n(67)),
        p = r(d),
        h = n(69),
        v = r(h),
        g = n(148),
        m = n(150);
    t.JwksClient = function () {
        function e(t) {
            var n = this;
            o(this, e), this.getSigningKey = function (e, t) {
                n.logger("Fetching signing key for '" + e + "'"), n.getSigningKeys(function (r, o) {
                    if (r) return t(r);
                    var i = o.find(function (t) {
                        return t.kid === e
                    });
                    return i ? t(null, i) : (n.logger("Unable to find a signing key that matches '" + e + "'"), t(new v.default("Unable to find a signing key that matches '" + e + "'")))
                })
            }, this.options = i({
                rateLimit: !1,
                cache: !1,
                strictSsl: !0
            }, t), this.logger = (0, a.default)("jwks"), this.options.rateLimit && (this.getSigningKey = (0, m.rateLimitSigningKey)(this, t)), this.options.cache && (this.getSigningKey = (0, m.cacheSigningKey)(this, t))
        }
        return s(e, [{
            key: "getKeys",
            value: function (e) {
                var t = this;
                this.logger("Fetching keys from '" + this.options.jwksUri + "'"), (0, l.default)({
                    json: !0,
                    uri: this.options.jwksUri,
                    strictSSL: this.options.strictSsl
                }, function (n, r) {
                    return n || r.statusCode < 200 || r.statusCode >= 300 ? (t.logger("Failure:", r && r.body || n), e(r ? new p.default(r.body && (r.body.message || r.body) || r.statusMessage || "Http Error " + r.statusCode) : n)) : (t.logger("Keys:", r.body.keys), e(null, r.body.keys))
                })
            }
        }, {
            key: "getSigningKeys",
            value: function (e) {
                var t = this;
                this.getKeys(function (n, r) {
                    if (n) return e(n);
                    if (!r || !r.length) return e(new p.default("The JWKS endpoint did not contain any keys"));
                    var o = r.filter(function (e) {
                        return "sig" === e.use && "RSA" === e.kty && e.kid && (e.x5c && e.x5c.length || e.n && e.e)
                    }).map(function (e) {
                        return e.x5c && e.x5c.length ? {
                            kid: e.kid,
                            nbf: e.nbf,
                            publicKey: (0, g.certToPEM)(e.x5c[0])
                        } : {
                            kid: e.kid,
                            nbf: e.nbf,
                            rsaPublicKey: (0, g.rsaPublicKeyToPEM)(e.n, e.e)
                        }
                    });
                    return o.length ? (t.logger("Signing Keys:", o), e(null, o)) : e(new p.default("The JWKS endpoint did not contain any signing keys"))
                })
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SigningKeyNotFoundError = t.JwksRateLimitError = t.JwksError = t.ArgumentError = void 0;
    var o = n(66),
        i = r(o),
        s = n(67),
        c = r(s),
        a = n(68),
        u = r(a),
        l = n(69),
        f = r(l);
    t.ArgumentError = i.default, t.JwksError = c.default, t.JwksRateLimitError = u.default, t.SigningKeyNotFoundError = f.default
}, function (e, t, n) {
    e.exports = {
        default: n(107),
        __esModule: !0
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(9),
        o = n(1).document,
        i = r(o) && r(o.createElement);
    e.exports = function (e) {
        return i ? o.createElement(e) : {}
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t, n;
        this.promise = new e(function (e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r
        }), this.resolve = o(t), this.reject = o(n)
    }
    var o = n(18);
    e.exports.f = function (e) {
        return new r(e)
    }
}, function (e, t, n) {
    var r = n(56),
        o = n(30);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    var r = n(35)("keys"),
        o = n(24);
    e.exports = function (e) {
        return r[e] || (r[e] = o(e))
    }
}, function (e, t, n) {
    var r = n(1),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function (e) {
        return o[e] || (o[e] = {})
    }
}, function (e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(9);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var r = n(1),
        o = n(3),
        i = n(21),
        s = n(39),
        c = n(10).f;
    e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || c(t, e, {
            value: s.f(e)
        })
    }
}, function (e, t, n) {
    t.f = n(2)
}, function (e, t) {
    e.exports = require("bluebird@3.4.6")
}, function (e, t) {
    e.exports = require("debug@2.2.0")
}, function (e, t) {
    e.exports = require("lodash@4.8.2")
}, function (e, t, n) {
    function r(e) {
        if (!e.container) return null;
        const t = e.container.replace(u, "\\$&"),
            n = e.jtn ? e.jtn.replace(u, "\\$&") : "";
        if (e.url_format === a) return new RegExp("^/api/run/" + t + "/(?:" + n + "/?)?");
        if (e.url_format === c) return new RegExp("^/" + t + "/(?:" + n + "/?)?");
        if (e.url_format === s) return new RegExp("^/(?:" + n + "/?)?");
        throw new Error("Unsupported webtask URL format.")
    }

    function o(e, t) {
        if (!e) return null;
        const n = e.indexOf("sandbox8") >= 0 ? "8" : "";
        return "https://" + t + "." + (e.split(".it.auth0.com")[0].split("-")[1] || "us") + n + ".webtask.io/"
    }
    const i = n(78),
        s = 3,
        c = 2,
        a = 1,
        u = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
        l = function (e, t) {
            var n = i.parse(e).pathname || "";
            return n = n.replace(t, "").replace(/^\/|\/$/g, ""), n.startsWith("/") || (n = "/" + n), n.endsWith("/") || (n += "/"), n
        };
    e.exports.getBasePath = function (e) {
        return l(e.originalUrl || "", e.path)
    }, e.exports.getBaseUrl = function (e, t) {
        var n = t;
        const r = i.parse(e.originalUrl || "").pathname || "";
        return i.format({
            protocol: n || "https",
            host: e.headers.host,
            pathname: r.replace(e.path, "").replace(/\/$/g, "")
        })
    }, e.exports.getWebtaskUrl = function (e) {
        const t = r(e.x_wt),
            n = e.url,
            s = e.url.replace(t, "/"),
            c = i.parse(s || "").pathname,
            a = e.x_wt && e.x_wt.ectx && e.x_wt.ectx.ISOLATED_DOMAIN || !1,
            u = i.parse(n || "").pathname || "";
        var l;
        if (a) {
            l = i.format({
                protocol: "https",
                host: e.headers.host,
                pathname: u.replace(c, "").replace(/\/$/g, "")
            });
            const f = ".it.auth0.com/api/run/" + e.x_wt.container + "/",
                d = o(l, e.x_wt.container);
            l.indexOf(f) >= 0 && (l = l.replace("https://" + e.headers.host + "/api/run/" + e.x_wt.container + "/", d))
        } else l = u;
        return l
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (null === e || void 0 === e) throw new c.ArgumentError("Must provide an options object");
        if (null === e.domain || void 0 === e.domain) throw new c.ArgumentError("Must provide a valid domain");
        if ("string" != typeof e.domain || 0 === e.domain.length) throw new c.ArgumentError("The provided domain is invalid: " + e.domain);
        if (null === e.clientId || void 0 === e.clientId) throw new c.ArgumentError("Must provide a valid clientId");
        if ("string" != typeof e.clientId || 0 === e.clientId.length) throw new c.ArgumentError("The provided clientId is invalid: " + e.clientId);
        if (null === e.clientSecret || void 0 === e.clientSecret) throw new c.ArgumentError("Must provide a valid clientSecret");
        if ("string" != typeof e.clientSecret || 0 === e.clientSecret.length) throw new c.ArgumentError("The provided clientSecret is invalid: " + e.clientSecret);
        this.options = e, this.tokenCache = e.tokenCache || {
            getToken: function () {
                return o.resolve()
            },
            setToken: function () {
                return o.resolve()
            }
        }
    }
    var o = n(40),
        i = n(77),
        s = n(167),
        c = n(0);
    r.prototype.getAccessToken = function () {
        var e = this;
        return new o(function (t, n) {
            i.post("https://" + e.options.domain + "/oauth/token").send({
                audience: "https://" + e.options.domain + "/api/v2/",
                client_id: e.options.clientId,
                client_secret: e.options.clientSecret,
                grant_type: "client_credentials"
            }).set("Accept", "application/json").end(function (r, o) {
                if (r && 401 === r.status) return n(new c.ManagementApiError("unauthorized", "Invalid credentials for " + e.options.clientId, r.status));
                if (r && o && o.body && o.body.error) return n(new c.ManagementApiError(o.body.error, o.body.error_description || o.body.error, r.status));
                if (r) return n(r);
                if (!o.ok || !o.body.access_token) return n(new c.ManagementApiError("unknown_error", "Unknown error from Management API or no access_token was provided: " + (o.text || o.status)));
                var i = new Date;
                return t({
                    token: o.body.access_token,
                    expiresAt: i.setSeconds(i.getSeconds() + o.body.expires_in)
                })
            })
        })
    }, r.prototype.getAccessTokenCached = function () {
        var e = this;
        return e.tokenCache.getToken().then(function (t) {
            if (t && t.token) {
                var n = (new Date).valueOf();
                if (t.expiresAt - n > 1e4) return t
            }
            return e.getAccessToken(e.options).then(function (t) {
                return e.tokenCache.setToken(t).then(function () {
                    return t
                })
            })
        })
    }, r.prototype.getLogs = function (e) {
        var t = this;
        return new o(function (n, r) {
            t.getAccessTokenCached(t.options, t.storage).then(function (o) {
                var a = s.stringify(e);
                i.get("https://" + t.options.domain + "/api/v2/logs?" + a).set("Authorization", "Bearer " + o.token).set("Content-Type", "application/json").end(function (e, o) {
                    if (e && 403 === e.status) {
                        var i = function () {
                            return r(new c.ManagementApiError(o.body.error, o.body.error_description || o.body.error, e.status))
                        };
                        t.tokenCache.setToken(null).then(i).catch(i)
                    }
                    return e && o && o.body && o.body.error ? r(new c.ManagementApiError(o.body.error, o.body.error_description || o.body.error, e.status)) : e ? r(e) : o.ok ? n({
                        logs: o.body,
                        limits: {
                            limit: o.headers["x-ratelimit-limit"],
                            remaining: o.headers["x-ratelimit-remaining"],
                            reset: o.headers["x-ratelimit-reset"]
                        }
                    }) : r(new c.ManagementApiError("unknown_error", "Unknown error from Management API: " + (o.text || o.status)))
                })
            })
        })
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = n(92);
    e.exports.LogsProcessor = n(91), e.exports.LogsApiClient = n(44), e.exports.LogsApiStream = n(47), e.exports.logTypes = n(46), e.exports.reporters = {
        SlackReporter: r
    }
}, function (e, t, n) {
    "use strict";
    var r = {
            success: "success",
            error: "error",
            warning: "warning"
        },
        o = {
            s: {
                name: "Success Login",
                icon: "icon-budicon-448",
                severity: r.success,
                level: 1
            },
            ssa: {
                name: "Success Silent Auth",
                icon: "icon-budicon-448",
                severity: r.success,
                level: 1
            },
            fsa: {
                name: "Failed Silent Auth",
                icon: "icon-budicon-448",
                severity: r.error,
                level: 3
            },
            seacft: {
                name: "Success Exchange",
                description: "Authorization Code for Access Token",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            feacft: {
                name: "Failed Exchange",
                description: "Authorization Code for Access Token",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            seccft: {
                name: "Success Exchange",
                description: "Client Credentials for Access Token",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            feccft: {
                name: "Failed Exchange",
                description: "Client Credentials for Access Token",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            sepft: {
                name: "Success Exchange",
                description: "Password for Access Token",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            fepft: {
                name: "Failed Exchange",
                description: "Password for Access Token",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            sertft: {
                name: "Success Exchange",
                description: "Refresh Token for Access Token",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            fertft: {
                name: "Failed Exchange",
                description: "Refresh Token for Access Token",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            seoobft: {
                name: "Success Exchange",
                description: "Password and OOB Challenge for Access Token",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            feoobft: {
                name: "Failed Exchange",
                description: "Password and OOB Challenge for Access Token",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            seotpft: {
                name: "Success Exchange",
                description: "Password and OTP Challenge for Access Token",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            feotpft: {
                name: "Failed Exchange",
                description: "Password and OTP Challenge for Access Token",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            sercft: {
                name: "Success Exchange",
                description: "Password and MFA Recovery code for Access Token",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            fercft: {
                name: "Failed Exchange",
                description: "Password and MFA Recovery code for Access Token",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            f: {
                name: "Failed Login",
                icon: "icon-budicon-448",
                severity: r.error,
                level: 3
            },
            w: {
                name: "Warning",
                icon: "icon-budicon-354",
                severity: r.warning,
                level: 2
            },
            depnote: {
                name: "Deprecation Notice",
                icon: "icon-budicon-354",
                severity: r.warning,
                level: 2
            },
            du: {
                name: "Deleted User",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            fu: {
                name: "Failed Login (invalid email/username)",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            fp: {
                name: "Failed Login (wrong password)",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            fc: {
                name: "Failed by Connector",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 3
            },
            fco: {
                name: "Failed by CORS",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 3
            },
            con: {
                name: "Connector Online",
                icon: "icon-budicon-143",
                severity: r.success,
                level: 1
            },
            coff: {
                name: "Connector Offline",
                icon: "icon-budicon-143",
                severity: r.error,
                level: 3
            },
            fcpro: {
                name: "Failed Connector Provisioning",
                icon: "icon-budicon-143",
                severity: r.error,
                level: 4
            },
            ss: {
                name: "Success Signup",
                icon: "icon-budicon-314",
                severity: r.success,
                level: 1
            },
            fs: {
                name: "Failed Signup",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            cs: {
                name: "Code Sent",
                icon: "icon-budicon-243",
                severity: r.success,
                level: 1
            },
            cls: {
                name: "Code/Link Sent",
                icon: "icon-budicon-781",
                severity: r.success,
                level: 1
            },
            sv: {
                name: "Success Verification Email",
                icon: "icon-budicon-781",
                severity: r.success,
                level: 1
            },
            fv: {
                name: "Failed Verification Email",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            scp: {
                name: "Success Change Password",
                icon: "icon-budicon-280",
                severity: r.success,
                level: 1
            },
            fcp: {
                name: "Failed Change Password",
                icon: "icon-budicon-266",
                severity: r.error,
                level: 3
            },
            scph: {
                name: "Success Post Change Password Hook",
                icon: "icon-budicon-280",
                severity: r.success,
                level: 1
            },
            fcph: {
                name: "Failed Post Change Password Hook",
                icon: "icon-budicon-266",
                severity: r.error,
                level: 3
            },
            sce: {
                name: "Success Change Email",
                icon: "icon-budicon-266",
                severity: r.success,
                level: 1
            },
            fce: {
                name: "Failed Change Email",
                icon: "icon-budicon-266",
                severity: r.error,
                level: 3
            },
            scu: {
                name: "Success Change Username",
                icon: "icon-budicon-266",
                severity: r.success,
                level: 1
            },
            fcu: {
                name: "Failed Change Username",
                icon: "icon-budicon-266",
                severity: r.error,
                level: 3
            },
            scpn: {
                name: "Success Change Phone Number",
                icon: "icon-budicon-266",
                severity: r.success,
                level: 1
            },
            fcpn: {
                name: "Failed Change Phone Number",
                icon: "icon-budicon-266",
                severity: r.error,
                level: 3
            },
            svr: {
                name: "Success Verification Email Request",
                icon: "icon-budicon-781",
                severity: r.success,
                level: 1
            },
            fvr: {
                name: "Failed Verification Email Request",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            scpr: {
                name: "Success Change Password Request",
                icon: "icon-budicon-280",
                severity: r.success,
                level: 1
            },
            fcpr: {
                name: "Failed Change Password Request",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            fn: {
                name: "Failed Sending Notification",
                icon: "icon-budicon-782",
                severity: r.error,
                level: 3
            },
            sapi: {
                name: "API Operation",
                icon: "icon-budicon-546",
                severity: r.success,
                level: 1,
                category: "api"
            },
            fapi: {
                name: "Failed API Operation",
                icon: "icon-budicon-546",
                severity: r.error,
                level: 3,
                category: "api"
            },
            limit_wc: {
                name: "Blocked Account",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 4
            },
            limit_mu: {
                name: "Blocked IP Address",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 4
            },
            limit_ui: {
                name: "Too Many Calls to /userinfo",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 4
            },
            api_limit: {
                name: "Rate Limit On API",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 4
            },
            limit_delegation: {
                name: "Too Many Calls to /delegation",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 4
            },
            sdu: {
                name: "Successful User Deletion",
                icon: "icon-budicon-312",
                severity: r.success,
                level: 1
            },
            fdu: {
                name: "Failed User Deletion",
                icon: "icon-budicon-311",
                severity: r.error,
                level: 3
            },
            admin_update_launch: {
                name: "Auth0 Update Launched",
                icon: "icon-budicon-774",
                severity: r.success,
                level: 1
            },
            sys_os_update_start: {
                name: "Auth0 OS Update Started",
                icon: "icon-budicon-661",
                severity: r.success,
                level: 1
            },
            sys_os_update_end: {
                name: "Auth0 OS Update Ended",
                icon: "icon-budicon-661",
                severity: r.success,
                level: 1
            },
            sys_update_start: {
                name: "Auth0 Update Started",
                icon: "icon-budicon-661",
                severity: r.success,
                level: 1
            },
            sys_update_end: {
                name: "Auth0 Update Ended",
                icon: "icon-budicon-661",
                severity: r.success,
                level: 1
            },
            slo: {
                name: "Success Logout",
                icon: "icon-budicon-449",
                severity: r.success,
                level: 1
            },
            flo: {
                name: "Failed Logout",
                icon: "icon-budicon-449",
                severity: r.error,
                level: 3
            },
            sd: {
                name: "Success Delegation",
                icon: "icon-budicon-456",
                severity: r.success,
                level: 1
            },
            fd: {
                name: "Failed Delegation",
                icon: "icon-budicon-456",
                severity: r.error,
                level: 3
            },
            gd_unenroll: {
                name: "Unenroll device account",
                icon: "icon-budicon-298",
                severity: r.success,
                level: 1
            },
            gd_update_device_account: {
                name: "Update device account",
                icon: "icon-budicon-257",
                severity: r.success,
                level: 1
            },
            gd_module_switch: {
                name: "Module switch",
                icon: "icon-budicon-329",
                severity: r.success,
                level: 1
            },
            gd_tenant_update: {
                name: "Guardian tenant update",
                icon: "icon-budicon-170",
                severity: r.success,
                level: 1
            },
            gd_start_auth: {
                name: "Second factor started",
                icon: "icon-budicon-285",
                severity: r.success,
                level: 1
            },
            gd_start_enroll: {
                name: "Enroll started",
                icon: "icon-budicon-299",
                severity: r.success,
                level: 1
            },
            gd_start_enroll_failed: {
                name: "MFA Enrollment start failed",
                icon: "icon-budicon-299",
                severity: r.error,
                level: 3
            },
            gd_user_delete: {
                name: "User delete",
                icon: "icon-budicon-298",
                severity: r.success,
                level: 1
            },
            gd_auth_succeed: {
                name: "OTP Auth suceed",
                icon: "icon-budicon-mfa-login-succeed",
                severity: r.success,
                level: 1
            },
            gd_auth_failed: {
                name: "OTP Auth failed",
                icon: "icon-budicon-mfa-login-failed",
                severity: r.error,
                level: 3
            },
            gd_send_pn: {
                name: "Push notification sent",
                icon: "icon-budicon-mfa-send-pn",
                severity: r.success,
                level: 1
            },
            gd_send_pn_failure: {
                name: "Error sending MFA Push Notification",
                icon: "icon-budicon-mfa-send-pn",
                severity: r.error,
                level: 3
            },
            gd_auth_rejected: {
                name: "OTP Auth rejected",
                icon: "icon-budicon-mfa-login-failed",
                severity: r.error,
                level: 3
            },
            gd_recovery_succeed: {
                name: "Recovery succeed",
                icon: "icon-budicon-mfa-recovery-succeed",
                severity: r.success,
                level: 1
            },
            gd_recovery_failed: {
                name: "Recovery failed",
                icon: "icon-budicon-mfa-recovery-failed",
                severity: r.error,
                level: 3
            },
            gd_send_sms: {
                name: "SMS Sent",
                icon: "icon-budicon-799",
                severity: r.success,
                level: 1
            },
            gd_send_sms_failure: {
                name: "Error sending MFA SMS",
                icon: "icon-budicon-799",
                severity: r.error,
                level: 3
            },
            gd_otp_rate_limit_exceed: {
                name: "Too many failures",
                icon: "icon-budicon-435",
                severity: r.warning,
                level: 2
            },
            gd_recovery_rate_limit_exceed: {
                name: "Too many failures",
                icon: "icon-budicon-435",
                severity: r.warning,
                level: 2
            },
            gd_enrollment_complete: {
                name: "Guardian enrollment complete",
                icon: "icon-budicon-299",
                severity: r.success,
                level: 1
            },
            fui: {
                name: "Users import",
                icon: "icon-budicon-299",
                severity: r.warning,
                level: 2
            },
            sui: {
                name: "Users import",
                icon: "icon-budicon-299",
                severity: r.success,
                level: 1
            },
            pwd_leak: {
                name: "Breached password",
                icon: "icon-budicon-313",
                severity: r.error,
                level: 3
            },
            fcoa: {
                name: "Failed cross origin authentication",
                icon: "icon-budicon-448",
                severity: r.error,
                level: 3
            },
            scoa: {
                name: "Success cross origin authentication",
                icon: "icon-budicon-448",
                severity: r.success,
                level: 1
            },
            ublkdu: {
                name: "Account unblocked",
                icon: "icon-budicon-313",
                severity: r.success,
                level: 1
            }
        };
    e.exports = o, e.exports.get = function (e) {
        return o[e] && o[e].name || "Unknown Log Type: " + e
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (null === e || void 0 === e) throw new s.ArgumentError("Must provide an options object");
        i.call(this, {
            objectMode: !0
        }), this.client = new c(e), this.options = e, this.remaining = 50, this.lastBatch = 0, this.retries = 0, this.previousCheckpoint = e.checkpointId || null, this.lastCheckpoint = e.checkpointId || null, this.status = {
            startCheckpoint: e.checkpointId || null,
            start: new Date,
            end: null,
            logsProcessed: 0
        }
    }
    var o = n(170),
        i = n(168).Readable,
        s = n(0),
        c = n(44);
    o.inherits(r, i), r.prototype.getQuery = function (e) {
        return e && e.length ? "type:" + e.join(" OR type:") : ""
    }, r.prototype.done = function () {
        this.status.end = new Date, this.push(null)
    }, r.prototype.next = function (e) {
        var t = this,
            n = this.options.logger,
            r = e;
        if (t.remaining < 1) t.status.warning = "Auth0 Management API rate limit reached.", t.done();
        else {
            var o = t.lastCheckpoint ? {
                take: r,
                from: t.lastCheckpoint
            } : {
                per_page: r,
                page: 0
            };
            if (o.q = t.getQuery(t.options.types), o.sort = "date:1", n) {
                var i = o.from ? "checkpoint " + o.from : "page " + o.page;
                n.debug("Requesting logs from " + i)
            }
            var s = process.hrtime();
            ! function r() {
                t.client.getLogs(o).then(function (r) {
                    var o = process.hrtime(s),
                        i = 1e3 * o[0] + o[1] / 1e6;
                    n && n.debug("Retrieved logs in " + i + "ms.");
                    var c = r.logs;
                    if (t.remaining = r.limits.remaining, c && c.length) {
                        var a = c;
                        t.options.types && t.options.types.length && (a = c.filter(function (e) {
                            return t.options.types.indexOf(e.type) >= 0
                        }).slice(0, e || 100)), a.length ? (t.lastCheckpoint = a[a.length - 1]._id, t.lastBatch += a.length, t.push({
                            logs: a,
                            limits: r.limits
                        })) : (t.lastCheckpoint = c[c.length - 1]._id, t.lastBatch += 0, t.push({
                            logs: [],
                            limits: r.limits
                        }))
                    } else t.status.end = new Date, t.push(null);
                    return c
                }).catch(function (e) {
                    var n = t.options.start,
                        o = t.options.maxRunTimeSeconds,
                        i = (new Date).getTime(),
                        s = n + 1e3 * o >= i;
                    return t.options.maxRetries > t.retries && s ? (t.retries++, r()) : t.emit("error", e)
                })
            }()
        }
    }, r.prototype.batchSaved = function () {
        this.status.logsProcessed += this.lastBatch, this.previousCheckpoint = this.lastCheckpoint, this.lastBatch = 0
    }, r.prototype._read = function () {}, e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = n(157);
    e.exports = function (e, t, n) {
        return function (o, i, s) {
            var c = r(s);
            return !0 === e || "function" == typeof e && e(o, i, c) ? t(o, i, c) : n ? n(o, i, c) : c()
        }
    }
}, function (e, t, n) {
    var r = n(14),
        o = n(2)("toStringTag"),
        i = "Arguments" == r(function () {
            return arguments
        }()),
        s = function (e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function (e) {
        var t, n, c;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = s(t = Object(e), o)) ? n : i ? r(t) : "Object" == (c = r(t)) && "function" == typeof t.callee ? "Arguments" : c
    }
}, function (e, t, n) {
    var r = n(1).document;
    e.exports = r && r.documentElement
}, function (e, t, n) {
    e.exports = !n(6) && !n(20)(function () {
        return 7 != Object.defineProperty(n(29)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    "use strict";
    var r = n(21),
        o = n(15),
        i = n(59),
        s = n(8),
        c = n(16),
        a = n(121),
        u = n(23),
        l = n(129),
        f = n(2)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function () {
            return this
        };
    e.exports = function (e, t, n, h, v, g, m) {
        a(n, t, h);
        var y, x, w, b = function (e) {
                if (!d && e in E) return E[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            },
            k = t + " Iterator",
            S = "values" == v,
            _ = !1,
            E = e.prototype,
            T = E[f] || E["@@iterator"] || v && E[v],
            A = T || b(v),
            C = v ? S ? b("entries") : A : void 0,
            P = "Array" == t ? E.entries || T : T;
        if (P && (w = l(P.call(new e))) !== Object.prototype && w.next && (u(w, k, !0), r || "function" == typeof w[f] || s(w, f, p)), S && T && "values" !== T.name && (_ = !0, A = function () {
                return T.call(this)
            }), r && !m || !d && !_ && E[f] || s(E, f, A), c[t] = A, c[k] = p, v)
            if (y = {
                    values: S ? A : b("values"),
                    keys: g ? A : b("keys"),
                    entries: C
                }, m)
                for (x in y) x in E || i(E, x, y[x]);
            else o(o.P + o.F * (d || _), t, y);
        return y
    }
}, function (e, t, n) {
    var r = n(4),
        o = n(126),
        i = n(30),
        s = n(34)("IE_PROTO"),
        c = function () {},
        a = function () {
            var e, t = n(29)("iframe"),
                r = i.length;
            for (t.style.display = "none", n(50).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), a = e.F; r--;) delete a.prototype[i[r]];
            return a()
        };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (c.prototype = r(e), n = new c, c.prototype = null, n[s] = e) : n = a(), void 0 === t ? n : o(n, t)
    }
}, function (e, t, n) {
    var r = n(56),
        o = n(30).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(7),
        o = n(11),
        i = n(113)(!1),
        s = n(34)("IE_PROTO");
    e.exports = function (e, t) {
        var n, c = o(e),
            a = 0,
            u = [];
        for (n in c) n != s && r(c, n) && u.push(n);
        for (; t.length > a;) r(c, n = t[a++]) && (~i(u, n) || u.push(n));
        return u
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function (e, t, n) {
    var r = n(4),
        o = n(9),
        i = n(31);
    e.exports = function (e, t) {
        if (r(e), o(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    e.exports = n(8)
}, function (e, t, n) {
    var r = n(4),
        o = n(18),
        i = n(2)("species");
    e.exports = function (e, t) {
        var n, s = r(e).constructor;
        return void 0 === s || void 0 == (n = r(s)[i]) ? t : o(n)
    }
}, function (e, t, n) {
    var r, o, i, s = n(19),
        c = n(116),
        a = n(50),
        u = n(29),
        l = n(1),
        f = l.process,
        d = l.setImmediate,
        p = l.clearImmediate,
        h = l.MessageChannel,
        v = l.Dispatch,
        g = 0,
        m = {},
        y = function () {
            var e = +this;
            if (m.hasOwnProperty(e)) {
                var t = m[e];
                delete m[e], t()
            }
        },
        x = function (e) {
            y.call(e.data)
        };
    d && p || (d = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return m[++g] = function () {
            c("function" == typeof e ? e : Function(e), t)
        }, r(g), g
    }, p = function (e) {
        delete m[e]
    }, "process" == n(14)(f) ? r = function (e) {
        f.nextTick(s(y, e, 1))
    } : v && v.now ? r = function (e) {
        v.now(s(y, e, 1))
    } : h ? (o = new h, i = o.port2, o.port1.onmessage = x, r = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function (e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", x, !1)) : r = "onreadystatechange" in u("script") ? function (e) {
        a.appendChild(u("script")).onreadystatechange = function () {
            a.removeChild(this), y.call(e)
        }
    } : function (e) {
        setTimeout(s(y, e, 1), 0)
    }), e.exports = {
        set: d,
        clear: p
    }
}, function (e, t, n) {
    var r = n(36),
        o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t) {}, function (e, t, n) {
    "use strict";
    var r = n(132)(!0);
    n(52)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function (e, t, n) {
    n(136);
    for (var r = n(1), o = n(8), i = n(16), s = n(2)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < c.length; a++) {
        var u = c[a],
            l = r[u],
            f = l && l.prototype;
        f && !f[s] && o(f, s, u), i[u] = i.Array
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "ArgumentError", this.message = e
    }
    r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "JwksError", this.message = e
    }
    r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "JwksRateLimitError", this.message = e
    }
    r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "SigningKeyNotFoundError", this.message = e
    }
    r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }
    var o = n(153);
    r.prototype = new Error, r.prototype.name = "InvalidTokenError", e.exports = function (e, t) {
        if ("string" != typeof e) throw new r("Invalid token specified");
        t = t || {};
        var n = !0 === t.header ? 0 : 1;
        try {
            return JSON.parse(o(e.split(".")[n]))
        } catch (e) {
            throw new r("Invalid token specified: " + e.message)
        }
    }, e.exports.InvalidTokenError = r
}, function (e, t) {
    var n = function (e, t, n, r) {
        if (this.bucketSize = e, this.tokensPerInterval = t, "string" == typeof n) switch (n) {
            case "sec":
            case "second":
                this.interval = 1e3;
                break;
            case "min":
            case "minute":
                this.interval = 6e4;
                break;
            case "hr":
            case "hour":
                this.interval = 36e5;
                break;
            case "day":
                this.interval = 864e5;
                break;
            default:
                throw new Error("Invaid interval " + n)
        } else this.interval = n;
        this.parentBucket = r, this.content = 0, this.lastDrip = +new Date
    };
    n.prototype = {
        bucketSize: 1,
        tokensPerInterval: 1,
        interval: 1e3,
        parentBucket: null,
        content: 0,
        lastDrip: 0,
        removeTokens: function (e, t) {
            function n() {
                var n = Math.ceil((e - r.content) * (r.interval / r.tokensPerInterval));
                return setTimeout(function () {
                    r.removeTokens(e, t)
                }, n), !1
            }
            var r = this;
            return this.bucketSize ? e > this.bucketSize ? (process.nextTick(t.bind(null, "Requested tokens " + e + " exceeds bucket size " + this.bucketSize, null)), !1) : (this.drip(), e > this.content ? n() : this.parentBucket ? this.parentBucket.removeTokens(e, function (o, i) {
                return o ? t(o, null) : e > r.content ? n() : (r.content -= e, void t(null, Math.min(i, r.content)))
            }) : (this.content -= e, process.nextTick(t.bind(null, null, this.content)), !0)) : (process.nextTick(t.bind(null, null, e, Number.POSITIVE_INFINITY)), !0)
        },
        tryRemoveTokens: function (e) {
            return !this.bucketSize || !(e > this.bucketSize) && (this.drip(), !(e > this.content) && (!(this.parentBucket && !this.parent.tryRemoveTokens(e)) && (this.content -= e, !0)))
        },
        drip: function () {
            if (!this.tokensPerInterval) return void(this.content = this.bucketSize);
            var e = +new Date,
                t = Math.max(e - this.lastDrip, 0);
            this.lastDrip = e;
            var n = t * (this.tokensPerInterval / this.interval);
            this.content = Math.min(this.content + n, this.bucketSize)
        }
    }, e.exports = n
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t) {
    e.exports = require("express-jwt@3.1.0")
}, function (e, t) {
    e.exports = require("moment@2.10.3")
}, function (e, t) {
    e.exports = require("path")
}, function (e, t) {
    e.exports = require("request@2.56.0")
}, function (e, t) {
    e.exports = require("superagent@1.2.0")
}, function (e, t) {
    e.exports = require("url")
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var r = (n(78), n(75)),
            o = n(165),
            i = n(17),
            s = n(159),
            c = n(0),
            a = n(12),
            u = n(98),
            l = n(99),
            f = n(96),
            d = n(13),
            p = n(5),
            h = n(94);
        e.exports = function (e, n) {
            p.setProvider(e);
            var v = n ? new c.WebtaskStorageContext(n, {
                    force: 1
                }) : new c.FileStorageContext(r.join(t, "./data.json"), {
                    mergeWrites: !0
                }),
                g = new i;
            g.use(o(":method :url :status :response-time ms - :res[content-length]", {
                stream: d.stream
            }));
            var m = function (e) {
                return function (t, n, r) {
                    return t.webtaskContext && t.webtaskContext.body ? (t.body = t.webtaskContext.body, r()) : e(t, n, r)
                }
            };
            return g.use(m(s.json())), g.use(m(s.urlencoded({
                extended: !1
            }))), g.use(a.routes.dashboardAdmins({
                secret: p("EXTENSION_SECRET"),
                audience: "urn:logs-to-provider",
                rta: p("AUTH0_RTA").replace("https://", ""),
                domain: p("AUTH0_DOMAIN"),
                baseUrl: p("PUBLIC_WT_URL") || p("WT_URL"),
                clientName: "Logs to Any Provider",
                urlPrefix: "",
                sessionStorageKey: "logs-to-provider:apiToken"
            })), g.use("/meta", l()), g.use("/.extensions", f()), g.use("/app", i.static(r.join(t, "../dist"))), g.use(h(v)), g.use("/", u(v)), g.use(a.middlewares.errorHandler(d.error.bind(d))), g
        }
    }).call(t, "/")
}, function (e, t, n) {
    const r = n(70),
        o = n(73),
        i = n(0),
        s = n(48);
    e.exports = function (e) {
        if (!e || "object" != typeof e) throw new i.ArgumentError("Must provide the options");
        if (null === e.secret || void 0 === e.secret) throw new i.ArgumentError("Must provide a valid secret");
        if ("string" != typeof e.secret || 0 === e.secret.length) throw new i.ArgumentError("The provided secret is invalid: " + e.secret);
        if (null === e.audience || void 0 === e.audience) throw new i.ArgumentError("Must provide a valid secret");
        if ("string" != typeof e.audience || 0 === e.audience.length) throw new i.ArgumentError("The provided audience is invalid: " + e.audience);
        if (null === e.baseUrl || void 0 === e.baseUrl) throw new i.ArgumentError("Must provide a valid base URL");
        if ("string" != typeof e.baseUrl || 0 === e.baseUrl.length) throw new i.ArgumentError("The provided base URL is invalid: " + e.baseUrl);
        const t = o({
            audience: e.audience,
            issuer: e.baseUrl,
            secret: e.secret,
            algorithms: ["HS256"],
            credentialsRequired: e.credentialsRequired || !0
        });
        return function (n, r, o) {
            t(n, r, function (t) {
                return t ? o(t) : e.onLoginSuccess ? e.onLoginSuccess(n, r, o) : o()
            })
        }
    }, e.exports.optional = function (t) {
        const n = e.exports(t);
        return s(function (e) {
            if (e && e.headers && e.headers.authorization && 0 === e.headers.authorization.indexOf("Bearer ")) try {
                const n = r(e.headers.authorization.split(" ")[1]);
                return n && n.iss === t.baseUrl
            } catch (e) {
                return !1
            }
            return !1
        }, n)
    }
}, function (e, t, n) {
    const r = n(70),
        o = n(73),
        i = n(144),
        s = n(0),
        c = n(48),
        a = n(0).UnauthorizedError;
    e.exports = function (e) {
        if (!e || "object" != typeof e) throw new s.ArgumentError("Must provide the options");
        if (null === e.domain || void 0 === e.domain) throw new s.ArgumentError("Must provide a valid domain");
        if ("string" != typeof e.domain || 0 === e.domain.length) throw new s.ArgumentError("The provided domain is invalid: " + e.domain);
        if (null === e.audience || void 0 === e.audience) throw new s.ArgumentError("Must provide a valid audience");
        if ("string" != typeof e.audience || 0 === e.audience.length) throw new s.ArgumentError("The provided audience is invalid: " + e.audience);
        const t = o({
            secret: i.expressJwtSecret({
                cache: !0,
                rateLimit: !0,
                jwksRequestsPerMinute: 5,
                jwksUri: "https://" + e.domain + "/.well-known/jwks.json",
                handleSigningKeyError: function (e, t) {
                    return t(e instanceof i.SigningKeyNotFoundError ? new a("A token was provided with an invalid kid") : e)
                }
            }),
            audience: e.audience,
            issuer: "https://" + e.domain + "/",
            algorithms: ["RS256"],
            credentialsRequired: e && e.credentialsRequired || !0
        });
        return function (n, r, o) {
            t(n, r, function (t) {
                return t ? o(t) : e.onLoginSuccess ? e.onLoginSuccess(n, r, o) : o()
            })
        }
    }, e.exports.optional = function (t) {
        const n = e.exports(t);
        return c(function (e) {
            if (e && e.headers && e.headers.authorization && 0 === e.headers.authorization.indexOf("Bearer ")) try {
                const n = r(e.headers.authorization.split(" ")[1]);
                return n && n.iss === "https://" + t.domain + "/"
            } catch (e) {
                return !1
            }
            return !1
        }, n)
    }
}, function (e, t, n) {
    e.exports = function (e) {
        return function (t, n, r, o) {
            return e && e(t), t && t.status ? (r.status(t.status), r.json({
                error: t.code || t.name,
                message: t.message || t.name
            })) : (r.status(t.status || 500), r.json({
                error: "InternalServerError",
                message: t.message || t.name
            }))
        }
    }
}, function (e, t, n) {
    e.exports.authenticateAdmins = n(80), e.exports.authenticateUsers = n(81), e.exports.requireAuthentication = n(85), e.exports.errorHandler = n(82), e.exports.managementApiClient = n(84), e.exports.validateHookToken = n(86), e.exports.webtaskConfig = n(87)
}, function (e, t, n) {
    const r = n(0);
    e.exports = function (e) {
        return function (t, n, o) {
            const i = t,
                s = t.user && t.user.access_token && t.user.access_token.length,
                c = s ? {
                    domain: e.domain,
                    accessToken: t.user.access_token
                } : e;
            r.managementApi.getClient(c).then(function (e) {
                return i.auth0 = e, o(), null
            }).catch(function (e) {
                o(e)
            })
        }
    }
}, function (e, t, n) {
    const r = n(0).UnauthorizedError;
    e.exports = function (e, t, n) {
        return e.user ? n() : n(new r("Authentication required for this endpoint."))
    }
}, function (e, t, n) {
    const r = n(0);
    e.exports = function (e, t, n) {
        if (null === e || void 0 === e) throw new r.ArgumentError("Must provide the domain");
        if ("string" != typeof e || 0 === e.length) throw new r.ArgumentError("The provided domain is invalid: " + e);
        if (null === t || void 0 === t) throw new r.ArgumentError("Must provide the webtaskUrl");
        if ("string" != typeof t || 0 === t.length) throw new r.ArgumentError("The provided webtaskUrl is invalid: " + t);
        if (null === n || void 0 === n) throw new r.ArgumentError("Must provide the extensionSecret");
        if ("string" != typeof n || 0 === n.length) throw new r.ArgumentError("The provided extensionSecret is invalid: " + n);
        return function (o) {
            if (null === o || void 0 === o) throw new r.ArgumentError("Must provide the hookPath");
            if ("string" != typeof o || 0 === o.length) throw new r.ArgumentError("The provided hookPath is invalid: " + o);
            return function (i, s, c) {
                if (i.headers.authorization && "Bearer" === i.headers.authorization.split(" ")[0]) {
                    const a = i.headers.authorization.split(" ")[1];
                    try {
                        if (r.validateHookToken(e, t, o, n, a)) return c()
                    } catch (e) {
                        return c(e)
                    }
                }
                return c(new r.HookTokenError("Hook token missing for the call to: " + o))
            }
        }
    }
}, function (e, t, n) {
    const r = n(0);
    e.exports = function (e) {
        return function (t, n, o) {
            return t.webtaskContext && e.setProvider(r.configProvider.fromWebtaskContext(t.webtaskContext)), o()
        }
    }
}, function (e, t, n) {
    const r = n(17),
        o = n(72),
        i = n(105),
        s = n(163),
        c = n(0),
        a = n(43);
    e.exports = function (e) {
        if (!e || "object" != typeof e) throw new c.ArgumentError("Must provide the options");
        if (null === e.secret || void 0 === e.secret) throw new c.ArgumentError("Must provide a valid secret");
        if ("string" != typeof e.secret || 0 === e.secret.length) throw new c.ArgumentError("The provided secret is invalid: " + e.secret);
        if (null === e.audience || void 0 === e.audience) throw new c.ArgumentError("Must provide a valid audience");
        if ("string" != typeof e.audience || 0 === e.audience.length) throw new c.ArgumentError("The provided audience is invalid: " + e.audience);
        if (null === e.rta || void 0 === e.rta) throw new c.ArgumentError("Must provide a valid rta");
        if ("string" != typeof e.rta || 0 === e.rta.length) throw new c.ArgumentError("The provided rta is invalid: " + e.rta);
        if (null === e.domain || void 0 === e.domain) throw new c.ArgumentError("Must provide a valid domain");
        if ("string" != typeof e.domain || 0 === e.domain.length) throw new c.ArgumentError("The provided domain is invalid: " + e.domain);
        if (null === e.baseUrl || void 0 === e.baseUrl) throw new c.ArgumentError("Must provide a valid base URL");
        if ("string" != typeof e.baseUrl || 0 === e.baseUrl.length) throw new c.ArgumentError("The provided base URL is invalid: " + e.baseUrl);
        if (null === e.clientName || void 0 === e.clientName) throw new c.ArgumentError("Must provide a valid client name");
        if ("string" != typeof e.clientName || 0 === e.clientName.length) throw new c.ArgumentError("The provided client name is invalid: " + e.clientName);
        if (void 0 !== e.storageType && "sessionStorage" !== e.storageType && "localStorage" !== e.storageType) throw new c.ArgumentError('The storageType must be either "sessionStorage" or "localStorage". Incorrect storageType: ' + e.storageType);
        const t = e.stateKey || "state",
            n = e.nonceKey || "nonce",
            u = e.urlPrefix || "",
            l = e.storageType || "sessionStorage",
            f = e.storageKey || e.sessionStorageKey || "apiToken",
            d = new c.SessionManager(e.rta, e.domain, e.baseUrl),
            p = r.Router();
        return p.get(u + "/login", function (r, i) {
            const s = a.getBasePath(r),
                c = o.randomBytes(16).toString("hex"),
                l = o.randomBytes(16).toString("hex");
            i.cookie(t, c, {
                path: s
            }), i.cookie(n, l, {
                path: s
            });
            const f = d.createAuthorizeUrl({
                redirectUri: a.getBaseUrl(r) + u + "/login/callback",
                scopes: e.scopes,
                expiration: e.expiration,
                nonce: l,
                state: c
            });
            i.redirect(f)
        }), p.post(u + "/login/callback", i(), function (r, o, i) {
            var u;
            try {
                u = s.decode(r.body.id_token)
            } catch (e) {
                u = null
            }
            if (!u) return i(new c.ValidationError("Login failed. Invalid token."));
            if (!r.cookies || r.cookies[n] !== u.nonce) return i(new c.ValidationError("Login failed. Nonce mismatch."));
            if (!r.cookies || r.cookies[t] !== r.body.state) return i(new c.ValidationError("Login failed. State mismatch."));
            const p = a.getBasePath(r);
            return d.create(r.body.id_token, r.body.access_token, {
                secret: e.secret,
                issuer: e.baseUrl,
                audience: e.audience,
                noAccessToken: e.noAccessToken
            }).then(function (e) {
                o.clearCookie(t, {
                    path: p
                }), o.clearCookie(n, {
                    path: p
                }), o.header("Content-Type", "text/html"), o.status(200).send('<html><head><script type="text/javascript">' + l + '.setItem("' + f + '", "' + e + '");window.location.href = "' + a.getBaseUrl(r) + '";<\/script></head></html>')
            }).catch(function (e) {
                i(e)
            })
        }), p.get(u + "/logout", function (r, o) {
            const i = a.getBasePath(r),
                s = encodeURIComponent(a.getBaseUrl(r));
            o.clearCookie(t, {
                path: i
            }), o.clearCookie(n, {
                path: i
            }), o.header("Content-Type", "text/html"), o.status(200).send('<html><head><script type="text/javascript">' + l + '.removeItem("' + f + '");window.location.href = "https://' + e.rta + "/v2/logout/?returnTo=" + s + "&client_id=" + s + '";<\/script></head></html>')
        }), p.get("/.well-known/oauth2-client-configuration", function (t, n) {
            n.header("Content-Type", "application/json"), n.status(200).send({
                redirect_uris: [a.getBaseUrl(t) + u + "/login/callback"],
                client_name: e.clientName,
                post_logout_redirect_uris: [a.getBaseUrl(t)]
            })
        }), p
    }
}, function (e, t, n) {
    e.exports.dashboardAdmins = n(88)
}, function (e, t, n) {
    const r = n(0),
        o = n(171);
    e.exports.createServer = function (e) {
        const t = r.createServer(e);
        var n = null;
        return o.fromExpress(function (e, r) {
            return n || (n = t(e.webtaskContext)), n(e, r)
        })
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (null === t || void 0 === t) throw new s.ArgumentError("Must provide an options object");
        this.start = (new Date).getTime(), this.storage = new u(e), this.options = o.assign({}, {
            batchSize: 100,
            maxRetries: 5,
            maxRunTimeSeconds: 22
        }, t)
    }
    var o = n(42),
        i = n(40),
        s = n(0),
        c = n(46),
        a = n(47),
        u = n(93);
    r.prototype.hasTimeLeft = function (e, t) {
        var n = (new Date).getTime(),
            r = (n - e) / t,
            o = this.options.maxRunTimeSeconds,
            i = e + 1e3 * o - n;
        return this.options.logger && this.options.logger.debug(i / 1e3 + " seconds run time left, average response time is " + r / 1e3 + " seconds."), i >= r
    }, r.prototype.getLogFilter = function (e) {
        var t = e.logTypes || [];
        if (e.logLevel) {
            var n = o.map(c, function (e, t) {
                var n = e;
                return n.type = t, n
            });
            t = t.concat(o.map(o.filter(n, function (t) {
                return t.level >= e.logLevel
            }), "type"))
        }
        return o.uniq(t)
    }, r.prototype.getReport = function (e, t) {
        var n = new Date(e).getTime(),
            r = t ? new Date(t).getTime() : (new Date).getTime();
        return this.storage.read().then(function (e) {
            return o.filter(e.logs, function (e) {
                var t = new Date(e.start).getTime(),
                    o = new Date(e.end).getTime();
                return t >= n && o <= r
            })
        }).then(function (e) {
            var t = {
                type: "report",
                processed: 0,
                warnings: 0,
                errors: 0,
                checkpoint: ""
            };
            return o.each(e, function (e) {
                t.processed += e.logsProcessed, t.checkpoint = e.checkpoint, e.error && (t.errors += 1), e.warning && (t.warnings += 1)
            }), t
        })
    }, r.prototype.createStream = function (e) {
        var t = this;
        return this.storage.getCheckpoint(e.startFrom).then(function (n) {
            return e.logger && e.logger.debug("Starting logs processor from checkpoint:", n), new a({
                checkpointId: n,
                types: t.getLogFilter(e),
                start: t.start,
                maxRetries: e.maxRetries,
                maxRunTimeSeconds: e.maxRunTimeSeconds,
                domain: e.domain,
                clientId: e.clientId,
                clientSecret: e.clientSecret,
                tokenCache: t.storage,
                logger: e.logger
            })
        })
    }, r.prototype.run = function (e) {
        var t = this,
            n = i.promisify(e);
        return new i(function (e, r) {
            var o = t.start,
                s = 0,
                c = 0,
                a = 0,
                u = [],
                l = t.storage,
                f = t.options,
                d = f.batchSize,
                p = f.maxRetries,
                h = function (t, n, o) {
                    f.logger && f.logger.debug("Processor failed:", t), n.error = t, l.done(n, o).then(function () {
                        return e({
                            status: n,
                            checkpoint: o
                        })
                    }).catch(r)
                },
                v = function (t, n) {
                    if (f.logger && f.logger.debug("Processor run complete. Logs processed:", t.logsProcessed), n !== t.startCheckpoint) {
                        return (new Date).getTime() - a >= 6048e5 && (t.warning = "Logs are outdated more than for week. Last processed log has date is " + new Date(a)), l.done(t, n).then(function () {
                            return e({
                                status: t,
                                checkpoint: n
                            })
                        }).catch(r)
                    }
                    return e({
                        status: t,
                        checkpoint: n
                    })
                },
                g = function () {
                    var e = d;
                    return e -= u.length, e > 1e3 && (e = 1e3), e
                },
                m = function (e, r) {
                    if (!t.hasTimeLeft(o, s)) return i.reject({
                        err: e,
                        status: r.status,
                        checkpoint: r.previousCheckpoint,
                        unrecoverable: !0
                    });
                    if (c < p) return c += 1, n(u);
                    var a = [e, "Skipping logs from " + r.previousCheckpoint + " to " + r.lastCheckpoint + " after " + p + " retries."];
                    return f.logger && f.logger.error(a[0] && a[0].message || a[0], a[1]), i.reject({
                        err: a,
                        status: r.status,
                        checkpoint: r.lastCheckpoint,
                        unrecoverable: !0
                    })
                };
            t.createStream(f).then(function (e) {
                return new i(function (r, c) {
                    var l = g();
                    f.logger && f.logger.debug("Loading next batch of logs. Next limit:", l), e.next(l), e.on("data", function (r) {
                        var i = r.logs;
                        if (u = u.concat(i), s++, i && i.length && (a = new Date(i[i.length - 1].date).getTime()), u.length < d && t.hasTimeLeft(o, s)) return e.next(g());
                        var l = function n(r) {
                            return r ? r.unrecoverable ? c(r) : m(r.err || r, e).then(function () {
                                return n()
                            }).catch(function (e) {
                                return n(e)
                            }) : (u = [], t.hasTimeLeft(o, s) ? (e.batchSaved(), e.next(g())) : (f.logger && f.logger.debug("No time left for additional requests"), e.done()))
                        };
                        return n(u).then(function () {
                            return l()
                        }).catch(function (e) {
                            return l(e)
                        })
                    });
                    var p = function () {
                        var t = function t(n) {
                            return n ? n.unrecoverable ? c(n) : m(n.err || n, e).then(function () {
                                return t()
                            }).catch(function (e) {
                                return t(e)
                            }) : (e.batchSaved(), r({
                                status: e.status,
                                checkpoint: e.lastCheckpoint
                            }))
                        };
                        return n(u).then(function () {
                            return t()
                        }).catch(function (e) {
                            return t(e)
                        })
                    };
                    new i(function (t) {
                        e.on("end", t)
                    }).then(p), e.on("error", function (t) {
                        return c({
                            err: t,
                            status: e.status,
                            checkpoint: e.previousCheckpoint
                        })
                    })
                })
            }).then(function (e) {
                return v(e.status, e.checkpoint)
            }).catch(function (e) {
                return h(e.err, e.status, e.checkpoint)
            })
        })
    }, e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        this.options = e || {}
    }
    var i = n(27),
        s = r(i),
        c = n(104),
        a = r(c),
        u = n(40),
        l = n(77);
    o.prototype.send = function (e, t) {
        if (!e || "object" !== (void 0 === e ? "undefined" : (0, a.default)(e))) throw new Error("object status is required");
        var n = this.options,
            r = this.createMessage(this.options, e, t);
        return new u(function (e, t) {
            return n.hook ? l.post(n.hook).send(r).set("Accept", "application/json").end(function (n) {
                return n ? t(n) : e()
            }) : e()
        })
    }, o.prototype.createMessage = function (e, t, n) {
        var r = {
                username: e.username || "auth0-logger",
                icon_emoji: e.icon || ":rocket:",
                attachments: []
            },
            o = e.title || "Auth0 Logger",
            i = "report" === t.type ? o + " Daily Report" : t.error ? o + " Error" : o + " Success",
            c = t.error || null,
            a = {
                fallback: e.fallback || i,
                text: e.text || i,
                error_field: {
                    title: "Error",
                    value: (0, s.default)(c),
                    short: !1
                }
            };
        "report" === t.type ? a.fields = [{
            title: "Logs processed",
            value: t.processed,
            short: !0
        }, {
            title: "Warnings",
            value: t.warnings,
            short: !0
        }, {
            title: "Errors",
            value: t.errors,
            short: !0
        }, {
            title: "Next checkpoint",
            value: t.checkpoint,
            short: !0
        }] : a.fields = [{
            title: "Start time",
            value: t.start,
            short: !0
        }, {
            title: "End time",
            value: t.end,
            short: !0
        }, {
            title: "Logs processed",
            value: t.logsProcessed,
            short: !0
        }, {
            title: "Next checkpoint",
            value: n,
            short: !0
        }];
        var u = e.url ? " (<" + e.url + "|Details>)" : null,
            l = a.fields;
        return t.error && l.push(a.error_field), r.attachments.push({
            color: t.error ? "#d13f42" : "#7cd197",
            fallback: a.fallback,
            text: a.fallback + (u || ""),
            fields: l
        }), r
    }, e.exports = o
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!e) throw new c("The storageContext is required");
        this.storageContext = e, this.options = s({}, {
            limit: 400
        }, t)
    }
    var o = n(27),
        i = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o),
        s = n(42).assign,
        c = n(0).ArgumentError;
    r.prototype.read = function () {
        return this.storageContext.read().then(function (e) {
            var t = e || {};
            return t.logs = t.logs || [], t
        })
    }, r.prototype.write = function (e) {
        return this.storageContext.write(e)
    }, r.prototype.getCheckpoint = function (e) {
        var t = this;
        return t.read().then(function (n) {
            return e && e !== n.startFrom ? (n.startFrom = e, n.checkpointId = e, t.write(n).then(function () {
                return n.checkpointId || e || null
            })) : n.checkpointId
        })
    }, r.prototype.getToken = function () {
        return this.read().then(function (e) {
            return e.logs_access_token || null
        })
    }, r.prototype.setToken = function (e) {
        var t = this;
        return t.read().then(function (n) {
            return n.logs_access_token = e, t.write(n)
        })
    }, r.prototype.done = function (e, t) {
        var n = this;
        return n.read().then(function (r) {
            return Buffer.byteLength((0, i.default)(r), "utf8") >= 1024 * n.options.limit && r.logs && r.logs.length && r.logs.splice(0, 5), e.checkpoint = t, r.logs.push(e), r.checkpointId = t, n.write(r)
        })
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = n(74),
        o = n(45),
        i = n(13),
        s = n(5),
        c = n(95);
    e.exports = function (e) {
        return function (t, n, a) {
            var u = t.webtaskContext && t.webtaskContext.body || t.body || {},
                l = t.webtaskContext && t.webtaskContext.headers || {};
            if (!(u.schedule && "active" === u.state || "https://manage.auth0.com/" === l.referer && l["if-none-match"])) return a();
            var f = c(),
                d = function (e, t) {
                    var n = process.hrtime();
                    f(e, function (e) {
                        var r = process.hrtime(n),
                            o = 1e3 * r[0] + r[1] / 1e6;
                        i.info("Finished request to 'azurelogs' in " + o + "ms."), t(e)
                    })
                },
                p = {
                    hook: s("SLACK_INCOMING_WEBHOOK_URL"),
                    username: "auth0-logs-to-azurelogs",
                    title: "Logs Export"
                },
                h = new o.reporters.SlackReporter(p),
                v = {
                    domain: s("AUTH0_DOMAIN"),
                    clientId: s("AUTH0_CLIENT_ID"),
                    clientSecret: s("AUTH0_CLIENT_SECRET"),
                    batchSize: parseInt(s("BATCH_SIZE")),
                    startFrom: s("START_FROM"),
                    logTypes: s("LOG_TYPES"),
                    logLevel: s("LOG_LEVEL"),
                    logger: i
                },
                g = 100;
            1e3 === v.batchSize && (g = v.batchSize), (!v.batchSize || v.batchSize > g) && (v.batchSize = g), v.logTypes && !Array.isArray(v.logTypes) && (v.logTypes = v.logTypes.replace(/\s/g, "").split(","));
            var m = new o.LogsProcessor(e, v),
                y = function (t) {
                    var n = new Date,
                        r = n.getTime(),
                        o = r - 864e5;
                    m.getReport(o, r).then(function (e) {
                        return h.send(e, e.checkpoint)
                    }).then(function () {
                        return e.read()
                    }).then(function (n) {
                        return n.lastReportDate = t, e.write(n)
                    })
                },
                x = function () {
                    e.read().then(function (e) {
                        var t = r().format("DD-MM-YYYY"),
                            n = s("DAILY_REPORT_TIME") || 16;
                        e.lastReportDate !== t && (new Date).getHours() >= n && y(t)
                    })
                };
            return function () {
                return e.read().then(function (t) {
                    return t.lastRun = new Date, e.write(t)
                })
            }().then(function () {
                return m.run(d).then(function (e) {
                    e && e.status && e.status.error ? h.send(e.status, e.checkpoint) : !0 !== s("SLACK_SEND_SUCCESS") && "true" !== s("SLACK_SEND_SUCCESS") || h.send(e.status, e.checkpoint), x(), n.json(e)
                }).catch(function (e) {
                    h.send({
                        error: e,
                        logsProcessed: 0
                    }, null), x(), a(e)
                })
            })
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = n(101),
        i = r(o),
        s = n(27),
        c = r(s),
        a = n(158),
        u = n(74),
        l = n(169),
        f = n(76),
        d = n(72),
        p = n(45),
        h = n(5),
        v = n(13),
        g = function (e, t, n, r) {
            r = r || "2016-04-01";
            var o = "https://" + e + ".ods.opinsights.azure.com/api/logs?api-version=" + r,
                s = new Buffer(t, "base64"),
                a = (new Date).toUTCString(),
                u = function (t, n, r, o, i) {
                    var c = t + "\n" + n + "\n" + r + "\nx-ms-date:" + o + "\n" + i,
                        a = d.createHmac("sha256", s).update(c).digest("base64");
                    return "SharedKey " + e + ":" + a
                };
            return {
                pushRecord: function (e, t) {
                    var r = (0, c.default)(e);
                    return new i.default(function (e, i) {
                        var s = u("POST", r.length, "application/json", a, "/api/logs");
                        f({
                            url: o,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Log-Type": n,
                                "x-ms-date": a,
                                Authorization: s,
                                "time-generated-field": "date"
                            },
                            body: r
                        }, function (n, r, o) {
                            n || 200 != r.statusCode && 202 != r.statusCode ? i() : e(t + 1)
                        })
                    })
                }
            }
        };
    e.exports = function () {
        var e = g(h("LOGANALYTICS_WORKSPACEID"), h("LOGANALYTICS_WORKSPACEKEY"), h("LOGANALYTICS_NAMESPACE"), h("LOGANALYTICS_APIVERSION")),
            t = function (e) {
                if (e.type_code = e.type, e.type = p.logTypes.get(e.type), e.user_agent && e.user_agent.length) {
                    var t = l.parse(e.user_agent);
                    e.os = t.os.toString(), e.os_version = t.os.toVersion(), e.device = t.device.toString(), e.device_version = t.device.toVersion()
                }
                return e
            };
        return function (n, r) {
            if (!n || !n.length) return r();
            v.info("Sending " + n.length + " logs to Azure Log Analytics."), a.eachLimit(n.map(t), 5, function (t, n) {
                var r = u(t.date);
                r.format("YYYY/MM/DD"), r.format("HH"), t._id;
                e.pushRecord(t)
            }, function (e) {
                return e ? r(e) : (v.info("Upload complete."), r())
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(17).Router,
        o = n(12).middlewares,
        i = n(5),
        s = n(13);
    e.exports = function () {
        var e = r(),
            t = o.validateHookToken(i("AUTH0_DOMAIN"), i("WT_URL"), i("EXTENSION_SECRET"));
        return e.use("/on-uninstall", t("/.extensions/on-uninstall")), e.use(o.managementApiClient({
            domain: i("AUTH0_DOMAIN"),
            clientId: i("AUTH0_CLIENT_ID"),
            clientSecret: i("AUTH0_CLIENT_SECRET")
        })), e.delete("/on-uninstall", function (e, t) {
            var n = i("AUTH0_CLIENT_ID");
            e.auth0.clients.delete({
                client_id: n
            }).then(function () {
                s.debug("Deleted client " + n), t.sendStatus(204)
            }).catch(function (e) {
                s.debug("Error deleting client: " + i("AUTH0_CLIENT_ID")), s.error(e), t.sendStatus(204)
            })
        }), e
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var r = (n(162), n(161)),
            o = (n(75), n(12).urlHelpers),
            i = n(5);
        e.exports = function () {
            var e = '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <title><%= config.TITLE %></title>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1672/css/index.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.min.css" />\n    <% if (assets.style) { %><link rel="stylesheet" type="text/css" href="/app/<%= assets.style %>" /><% } %>\n    <% if (assets.useCdn) { %><link rel="stylesheet" type="text/css" href="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.css" /><% } %>\n    <% if (assets.customCss) { %><link rel="stylesheet" type="text/css" href="<%= assets.customCss %>" /><% } %>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="text/javascript" src="//cdn.auth0.com/w2/auth0-7.0.4.min.js"><\/script>\n    <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1672/js/bundle.js"><\/script>\n    <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;<\/script>\n    <% if (assets.vendors) { %><script type="text/javascript" src="/app/<%= assets.vendors %>"><\/script><% } %>\n    <% if (assets.app) { %><script type="text/javascript" src="<%= assets.app %>"><\/script><% } %>\n    <% if (assets.useCdn) { %>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.vendors.js"><\/script>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.js"><\/script>\n    <% } %>\n  </body>\n  </html>\n  ';
            return function (t, n, s) {
                if (0 === t.url.indexOf("/api")) return s();
                var c = {
                    AUTH0_DOMAIN: i("AUTH0_DOMAIN"),
                    AUTH0_CLIENT_ID: i("EXTENSION_CLIENT_ID"),
                    AUTH0_MANAGE_URL: i("AUTH0_MANAGE_URL") || "https://manage.auth0.com",
                    BASE_URL: o.getBaseUrl(t),
                    BASE_PATH: o.getBasePath(t),
                    TITLE: i("TITLE")
                };
                return n.send(r.render(e, {
                    config: c,
                    assets: {
                        customCss: i("CUSTOM_CSS"),
                        useCdn: !0
                    }
                }))
            }
        }
    }).call(t, "/")
}, function (e, t, n) {
    "use strict";
    var r = n(42),
        o = n(17).Router,
        i = n(12).middlewares,
        s = n(5),
        c = n(97);
    e.exports = function (e) {
        var t = o(),
            n = i.authenticateAdmins({
                credentialsRequired: !0,
                secret: s("EXTENSION_SECRET"),
                audience: "urn:logs-to-provider",
                baseUrl: s("PUBLIC_WT_URL") || s("WT_URL"),
                onLoginSuccess: function (e, t, n) {
                    return n()
                }
            });
        return t.get("/", c()), t.get("/api/report", n, function (t, n, o) {
            return e.read().then(function (e) {
                var o = e && e.lastRun,
                    i = e && e.logs ? r.orderBy(e.logs, "start", "desc") : [],
                    s = t.query.filter && "errors" === t.query.filter ? r.filter(i, function (e) {
                        return !!e.error
                    }) : i,
                    c = t.query.page && parseInt(t.query.page) ? parseInt(t.query.page) - 1 : 0,
                    a = t.query.per_page && parseInt(t.query.per_page) || 10,
                    u = a * c;
                return n.json({
                    logs: s.slice(u, u + a),
                    total: s.length,
                    lastRun: o
                })
            }).catch(o)
        }), t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(17),
        o = n(143);
    e.exports = function () {
        var e = r.Router();
        return e.get("/", function (e, t) {
            t.status(200).send(o)
        }), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(12),
        o = n(79),
        i = n(5),
        s = n(13),
        c = r.createServer(function (e, t) {
            return s.info("Starting Auth0 Logging Extension - Version:", "2.2.1"), o(e, t)
        });
    e.exports = function (e, t, n) {
        t.x_wt && t.x_wt.ectx && t.x_wt.ectx.PUBLIC_WT_URL || !1 || i.setValue("PUBLIC_WT_URL", r.urlHelpers.getWebtaskUrl(t)), c(e, t, n)
    }
}, function (e, t, n) {
    e.exports = {
        default: n(108),
        __esModule: !0
    }
}, function (e, t, n) {
    e.exports = {
        default: n(109),
        __esModule: !0
    }
}, function (e, t, n) {
    e.exports = {
        default: n(110),
        __esModule: !0
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = n(103),
        i = r(o),
        s = n(102),
        c = r(s),
        a = "function" == typeof c.default && "symbol" == typeof i.default ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof c.default && e.constructor === c.default && e !== c.default.prototype ? "symbol" : typeof e
        };
    t.default = "function" == typeof c.default && "symbol" === a(i.default) ? function (e) {
        return void 0 === e ? "undefined" : a(e)
    } : function (e) {
        return e && "function" == typeof c.default && e.constructor === c.default && e !== c.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return function (n, r, o) {
            if (n.cookies) return o();
            var s = n.headers.cookie,
                u = !e || Array.isArray(e) ? e || [] : [e];
            if (n.secret = u[0], n.cookies = Object.create(null), n.signedCookies = Object.create(null), !s) return o();
            n.cookies = a.parse(s, t), 0 !== u.length && (n.signedCookies = c(n.cookies, u), n.signedCookies = i(n.signedCookies)), n.cookies = i(n.cookies), o()
        }
    }

    function o(e) {
        if ("string" == typeof e && "j:" === e.substr(0, 2)) try {
            return JSON.parse(e.slice(2))
        } catch (e) {
            return
        }
    }

    function i(e) {
        for (var t, n, r = Object.keys(e), i = 0; i < r.length; i++) t = r[i], (n = o(e[t])) && (e[t] = n);
        return e
    }

    function s(e, t) {
        if ("string" == typeof e) {
            if ("s:" !== e.substr(0, 2)) return e;
            for (var n = !t || Array.isArray(t) ? t || [] : [t], r = 0; r < n.length; r++) {
                var o = u.unsign(e.slice(2), n[r]);
                if (!1 !== o) return o
            }
            return !1
        }
    }

    function c(e, t) {
        for (var n, r, o, i = Object.keys(e), c = Object.create(null), a = 0; a < i.length; a++) r = i[a], o = e[r], n = s(o, t), o !== n && (c[r] = n, delete e[r]);
        return c
    }
    var a = n(106),
        u = n(160);
    e.exports = r, e.exports.JSONCookie = o, e.exports.JSONCookies = i, e.exports.signedCookie = s, e.exports.signedCookies = c
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if ("string" != typeof e) throw new TypeError("argument str must be a string");
        for (var n = {}, r = t || {}, o = e.split(a), c = r.decode || s, u = 0; u < o.length; u++) {
            var l = o[u],
                f = l.indexOf("=");
            if (!(f < 0)) {
                var d = l.substr(0, f).trim(),
                    p = l.substr(++f, l.length).trim();
                '"' == p[0] && (p = p.slice(1, -1)), void 0 == n[d] && (n[d] = i(p, c))
            }
        }
        return n
    }

    function o(e, t, n) {
        var r = n || {},
            o = r.encode || c;
        if ("function" != typeof o) throw new TypeError("option encode is invalid");
        if (!u.test(e)) throw new TypeError("argument name is invalid");
        var i = o(t);
        if (i && !u.test(i)) throw new TypeError("argument val is invalid");
        var s = e + "=" + i;
        if (null != r.maxAge) {
            var a = r.maxAge - 0;
            if (isNaN(a)) throw new Error("maxAge should be a Number");
            s += "; Max-Age=" + Math.floor(a)
        }
        if (r.domain) {
            if (!u.test(r.domain)) throw new TypeError("option domain is invalid");
            s += "; Domain=" + r.domain
        }
        if (r.path) {
            if (!u.test(r.path)) throw new TypeError("option path is invalid");
            s += "; Path=" + r.path
        }
        if (r.expires) {
            if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
            s += "; Expires=" + r.expires.toUTCString()
        }
        if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.sameSite) {
            switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                case !0:
                    s += "; SameSite=Strict";
                    break;
                case "lax":
                    s += "; SameSite=Lax";
                    break;
                case "strict":
                    s += "; SameSite=Strict";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
        }
        return s
    }

    function i(e, t) {
        try {
            return t(e)
        } catch (t) {
            return e
        }
    }
    t.parse = r, t.serialize = o;
    var s = decodeURIComponent,
        c = encodeURIComponent,
        a = /; */,
        u = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
}, function (e, t, n) {
    var r = n(3),
        o = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function (e) {
        return o.stringify.apply(o, arguments)
    }
}, function (e, t, n) {
    n(63), n(64), n(65), n(137), n(139), n(140), e.exports = n(3).Promise
}, function (e, t, n) {
    n(138), n(63), n(141), n(142), e.exports = n(3).Symbol
}, function (e, t, n) {
    n(64), n(65), e.exports = n(39).f("iterator")
}, function (e, t) {
    e.exports = function () {}
}, function (e, t) {
    e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function (e, t, n) {
    var r = n(11),
        o = n(62),
        i = n(133);
    e.exports = function (e) {
        return function (t, n, s) {
            var c, a = r(t),
                u = o(a.length),
                l = i(s, u);
            if (e && n != n) {
                for (; u > l;)
                    if ((c = a[l++]) != c) return !0
            } else
                for (; u > l; l++)
                    if ((e || l in a) && a[l] === n) return e || l || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var r = n(32),
        o = n(55),
        i = n(33);
    e.exports = function (e) {
        var t = r(e),
            n = o.f;
        if (n)
            for (var s, c = n(e), a = i.f, u = 0; c.length > u;) a.call(e, s = c[u++]) && t.push(s);
        return t
    }
}, function (e, t, n) {
    var r = n(19),
        o = n(120),
        i = n(118),
        s = n(4),
        c = n(62),
        a = n(135),
        u = {},
        l = {},
        t = e.exports = function (e, t, n, f, d) {
            var p, h, v, g, m = d ? function () {
                    return e
                } : a(e),
                y = r(n, f, t ? 2 : 1),
                x = 0;
            if ("function" != typeof m) throw TypeError(e + " is not iterable!");
            if (i(m)) {
                for (p = c(e.length); p > x; x++)
                    if ((g = t ? y(s(h = e[x])[0], h[1]) : y(e[x])) === u || g === l) return g
            } else
                for (v = m.call(e); !(h = v.next()).done;)
                    if ((g = o(v, y, h.value, t)) === u || g === l) return g
        };
    t.BREAK = u, t.RETURN = l
}, function (e, t) {
    e.exports = function (e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function (e, t, n) {
    var r = n(14);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var r = n(16),
        o = n(2)("iterator"),
        i = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}, function (e, t, n) {
    var r = n(14);
    e.exports = Array.isArray || function (e) {
        return "Array" == r(e)
    }
}, function (e, t, n) {
    var r = n(4);
    e.exports = function (e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(53),
        o = n(22),
        i = n(23),
        s = {};
    n(8)(s, n(2)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = r(s, {
            next: o(1, n)
        }), i(e, t + " Iterator")
    }
}, function (e, t, n) {
    var r = n(2)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i.return = function () {
            o = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (e) {}
    e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [7],
                s = i[r]();
            s.next = function () {
                return {
                    done: n = !0
                }
            }, i[r] = function () {
                return s
            }, e(i)
        } catch (e) {}
        return n
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function (e, t, n) {
    var r = n(24)("meta"),
        o = n(9),
        i = n(7),
        s = n(10).f,
        c = 0,
        a = Object.isExtensible || function () {
            return !0
        },
        u = !n(20)(function () {
            return a(Object.preventExtensions({}))
        }),
        l = function (e) {
            s(e, r, {
                value: {
                    i: "O" + ++c,
                    w: {}
                }
            })
        },
        f = function (e, t) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, r)) {
                if (!a(e)) return "F";
                if (!t) return "E";
                l(e)
            }
            return e[r].i
        },
        d = function (e, t) {
            if (!i(e, r)) {
                if (!a(e)) return !0;
                if (!t) return !1;
                l(e)
            }
            return e[r].w
        },
        p = function (e) {
            return u && h.NEED && a(e) && !i(e, r) && l(e), e
        },
        h = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: f,
            getWeak: d,
            onFreeze: p
        }
}, function (e, t, n) {
    var r = n(1),
        o = n(61).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        s = r.process,
        c = r.Promise,
        a = "process" == n(14)(s);
    e.exports = function () {
        var e, t, n, u = function () {
            var r, o;
            for (a && (r = s.domain) && r.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (a) n = function () {
            s.nextTick(u)
        };
        else if (!i || r.navigator && r.navigator.standalone)
            if (c && c.resolve) {
                var l = c.resolve();
                n = function () {
                    l.then(u)
                }
            } else n = function () {
                o.call(r, u)
            };
        else {
            var f = !0,
                d = document.createTextNode("");
            new i(u).observe(d, {
                characterData: !0
            }), n = function () {
                d.data = f = !f
            }
        }
        return function (r) {
            var o = {
                fn: r,
                next: void 0
            };
            t && (t.next = o), e || (e = o, n()), t = o
        }
    }
}, function (e, t, n) {
    var r = n(10),
        o = n(4),
        i = n(32);
    e.exports = n(6) ? Object.defineProperties : function (e, t) {
        o(e);
        for (var n, s = i(t), c = s.length, a = 0; c > a;) r.f(e, n = s[a++], t[n]);
        return e
    }
}, function (e, t, n) {
    var r = n(33),
        o = n(22),
        i = n(11),
        s = n(37),
        c = n(7),
        a = n(51),
        u = Object.getOwnPropertyDescriptor;
    t.f = n(6) ? u : function (e, t) {
        if (e = i(e), t = s(t, !0), a) try {
            return u(e, t)
        } catch (e) {}
        if (c(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    var r = n(11),
        o = n(54).f,
        i = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        c = function (e) {
            try {
                return o(e)
            } catch (e) {
                return s.slice()
            }
        };
    e.exports.f = function (e) {
        return s && "[object Window]" == i.call(e) ? c(e) : o(r(e))
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(134),
        i = n(34)("IE_PROTO"),
        s = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function (e, t, n) {
    var r = n(8);
    e.exports = function (e, t, n) {
        for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = n(3),
        i = n(10),
        s = n(6),
        c = n(2)("species");
    e.exports = function (e) {
        var t = "function" == typeof o[e] ? o[e] : r[e];
        s && t && !t[c] && i.f(t, c, {
            configurable: !0,
            get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    var r = n(36),
        o = n(28);
    e.exports = function (e) {
        return function (t, n) {
            var i, s, c = String(o(t)),
                a = r(n),
                u = c.length;
            return a < 0 || a >= u ? e ? "" : void 0 : (i = c.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === u || (s = c.charCodeAt(a + 1)) < 56320 || s > 57343 ? e ? c.charAt(a) : i : e ? c.slice(a, a + 2) : s - 56320 + (i - 55296 << 10) + 65536)
        }
    }
}, function (e, t, n) {
    var r = n(36),
        o = Math.max,
        i = Math.min;
    e.exports = function (e, t) {
        return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
    }
}, function (e, t, n) {
    var r = n(28);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    var r = n(49),
        o = n(2)("iterator"),
        i = n(16);
    e.exports = n(3).getIteratorMethod = function (e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function (e, t, n) {
    "use strict";
    var r = n(111),
        o = n(123),
        i = n(16),
        s = n(11);
    e.exports = n(52)(Array, "Array", function (e, t) {
        this._t = s(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (e, t, n) {
    "use strict";
    var r, o, i, s, c = n(21),
        a = n(1),
        u = n(19),
        l = n(49),
        f = n(15),
        d = n(9),
        p = n(18),
        h = n(112),
        v = n(115),
        g = n(60),
        m = n(61).set,
        y = n(125)(),
        x = n(31),
        w = n(57),
        b = n(58),
        k = a.TypeError,
        S = a.process,
        _ = a.Promise,
        E = "process" == l(S),
        T = function () {},
        A = o = x.f,
        C = !! function () {
            try {
                var e = _.resolve(1),
                    t = (e.constructor = {})[n(2)("species")] = function (e) {
                        e(T, T)
                    };
                return (E || "function" == typeof PromiseRejectionEvent) && e.then(T) instanceof t
            } catch (e) {}
        }(),
        P = function (e) {
            var t;
            return !(!d(e) || "function" != typeof (t = e.then)) && t
        },
        O = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                y(function () {
                    for (var r = e._v, o = 1 == e._s, i = 0; n.length > i;) ! function (t) {
                        var n, i, s, c = o ? t.ok : t.fail,
                            a = t.resolve,
                            u = t.reject,
                            l = t.domain;
                        try {
                            c ? (o || (2 == e._h && M(e), e._h = 1), !0 === c ? n = r : (l && l.enter(), n = c(r), l && (l.exit(), s = !0)), n === t.promise ? u(k("Promise-chain cycle")) : (i = P(n)) ? i.call(n, a, u) : a(n)) : u(r)
                        } catch (e) {
                            l && !s && l.exit(), u(e)
                        }
                    }(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && L(e)
                })
            }
        },
        L = function (e) {
            m.call(a, function () {
                var t, n, r, o = e._v,
                    i = I(e);
                if (i && (t = w(function () {
                        E ? S.emit("unhandledRejection", o, e) : (n = a.onunhandledrejection) ? n({
                            promise: e,
                            reason: o
                        }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), e._h = E || I(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
            })
        },
        I = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        M = function (e) {
            m.call(a, function () {
                var t;
                E ? S.emit("rejectionHandled", e) : (t = a.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        j = function (e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), O(t, !0))
        },
        R = function (e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw k("Promise can't be resolved itself");
                    (t = P(e)) ? y(function () {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, u(R, r, 1), u(j, r, 1))
                        } catch (e) {
                            j.call(r, e)
                        }
                    }): (n._v = e, n._s = 1, O(n, !1))
                } catch (e) {
                    j.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    C || (_ = function (e) {
        h(this, _, "Promise", "_h"), p(e), r.call(this);
        try {
            e(u(R, this, 1), u(j, this, 1))
        } catch (e) {
            j.call(this, e)
        }
    }, r = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(130)(_.prototype, {
        then: function (e, t) {
            var n = A(g(this, _));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = E ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && O(this, !1), n.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), i = function () {
        var e = new r;
        this.promise = e, this.resolve = u(R, e, 1), this.reject = u(j, e, 1)
    }, x.f = A = function (e) {
        return e === _ || e === s ? new i(e) : o(e)
    }), f(f.G + f.W + f.F * !C, {
        Promise: _
    }), n(23)(_, "Promise"), n(131)("Promise"), s = n(3).Promise, f(f.S + f.F * !C, "Promise", {
        reject: function (e) {
            var t = A(this);
            return (0, t.reject)(e), t.promise
        }
    }), f(f.S + f.F * (c || !C), "Promise", {
        resolve: function (e) {
            return b(c && this === s ? _ : this, e)
        }
    }), f(f.S + f.F * !(C && n(122)(function (e) {
        _.all(e).catch(T)
    })), "Promise", {
        all: function (e) {
            var t = this,
                n = A(t),
                r = n.resolve,
                o = n.reject,
                i = w(function () {
                    var n = [],
                        i = 0,
                        s = 1;
                    v(e, !1, function (e) {
                        var c = i++,
                            a = !1;
                        n.push(void 0), s++, t.resolve(e).then(function (e) {
                            a || (a = !0, n[c] = e, --s || r(n))
                        }, o)
                    }), --s || r(n)
                });
            return i.e && o(i.v), n.promise
        },
        race: function (e) {
            var t = this,
                n = A(t),
                r = n.reject,
                o = w(function () {
                    v(e, !1, function (e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
            return o.e && r(o.v), n.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = n(7),
        i = n(6),
        s = n(15),
        c = n(59),
        a = n(124).KEY,
        u = n(20),
        l = n(35),
        f = n(23),
        d = n(24),
        p = n(2),
        h = n(39),
        v = n(38),
        g = n(114),
        m = n(119),
        y = n(4),
        x = n(9),
        w = n(11),
        b = n(37),
        k = n(22),
        S = n(53),
        _ = n(128),
        E = n(127),
        T = n(10),
        A = n(32),
        C = E.f,
        P = T.f,
        O = _.f,
        L = r.Symbol,
        I = r.JSON,
        M = I && I.stringify,
        j = p("_hidden"),
        R = p("toPrimitive"),
        U = {}.propertyIsEnumerable,
        F = l("symbol-registry"),
        N = l("symbols"),
        D = l("op-symbols"),
        K = Object.prototype,
        B = "function" == typeof L,
        q = r.QObject,
        z = !q || !q.prototype || !q.prototype.findChild,
        H = i && u(function () {
            return 7 != S(P({}, "a", {
                get: function () {
                    return P(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function (e, t, n) {
            var r = C(K, t);
            r && delete K[t], P(e, t, n), r && e !== K && P(K, t, r)
        } : P,
        J = function (e) {
            var t = N[e] = S(L.prototype);
            return t._k = e, t
        },
        W = B && "symbol" == typeof L.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof L
        },
        G = function (e, t, n) {
            return e === K && G(D, t, n), y(e), t = b(t, !0), y(n), o(N, t) ? (n.enumerable ? (o(e, j) && e[j][t] && (e[j][t] = !1), n = S(n, {
                enumerable: k(0, !1)
            })) : (o(e, j) || P(e, j, k(1, {})), e[j][t] = !0), H(e, t, n)) : P(e, t, n)
        },
        V = function (e, t) {
            y(e);
            for (var n, r = g(t = w(t)), o = 0, i = r.length; i > o;) G(e, n = r[o++], t[n]);
            return e
        },
        Y = function (e, t) {
            return void 0 === t ? S(e) : V(S(e), t)
        },
        $ = function (e) {
            var t = U.call(this, e = b(e, !0));
            return !(this === K && o(N, e) && !o(D, e)) && (!(t || !o(this, e) || !o(N, e) || o(this, j) && this[j][e]) || t)
        },
        X = function (e, t) {
            if (e = w(e), t = b(t, !0), e !== K || !o(N, t) || o(D, t)) {
                var n = C(e, t);
                return !n || !o(N, t) || o(e, j) && e[j][t] || (n.enumerable = !0), n
            }
        },
        Q = function (e) {
            for (var t, n = O(w(e)), r = [], i = 0; n.length > i;) o(N, t = n[i++]) || t == j || t == a || r.push(t);
            return r
        },
        Z = function (e) {
            for (var t, n = e === K, r = O(n ? D : w(e)), i = [], s = 0; r.length > s;) !o(N, t = r[s++]) || n && !o(K, t) || i.push(N[t]);
            return i
        };
    B || (L = function () {
        if (this instanceof L) throw TypeError("Symbol is not a constructor!");
        var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function (n) {
                this === K && t.call(D, n), o(this, j) && o(this[j], e) && (this[j][e] = !1), H(this, e, k(1, n))
            };
        return i && z && H(K, e, {
            configurable: !0,
            set: t
        }), J(e)
    }, c(L.prototype, "toString", function () {
        return this._k
    }), E.f = X, T.f = G, n(54).f = _.f = Q, n(33).f = $, n(55).f = Z, i && !n(21) && c(K, "propertyIsEnumerable", $, !0), h.f = function (e) {
        return J(p(e))
    }), s(s.G + s.W + s.F * !B, {
        Symbol: L
    });
    for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) p(ee[te++]);
    for (var ne = A(p.store), re = 0; ne.length > re;) v(ne[re++]);
    s(s.S + s.F * !B, "Symbol", {
        for: function (e) {
            return o(F, e += "") ? F[e] : F[e] = L(e)
        },
        keyFor: function (e) {
            if (!W(e)) throw TypeError(e + " is not a symbol!");
            for (var t in F)
                if (F[t] === e) return t
        },
        useSetter: function () {
            z = !0
        },
        useSimple: function () {
            z = !1
        }
    }), s(s.S + s.F * !B, "Object", {
        create: Y,
        defineProperty: G,
        defineProperties: V,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: Z
    }), I && s(s.S + s.F * (!B || u(function () {
        var e = L();
        return "[null]" != M([e]) || "{}" != M({
            a: e
        }) || "{}" != M(Object(e))
    })), "JSON", {
        stringify: function (e) {
            for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = t = r[1], (x(t) || void 0 !== e) && !W(e)) return m(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !W(t)) return t
            }), r[1] = t, M.apply(I, r)
        }
    }), L.prototype[R] || n(8)(L.prototype, R, L.prototype.valueOf), f(L, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function (e, t, n) {
    "use strict";
    var r = n(15),
        o = n(3),
        i = n(1),
        s = n(60),
        c = n(58);
    r(r.P + r.R, "Promise", {
        finally: function (e) {
            var t = s(this, o.Promise || i.Promise),
                n = "function" == typeof e;
            return this.then(n ? function (n) {
                return c(t, e()).then(function () {
                    return n
                })
            } : e, n ? function (n) {
                return c(t, e()).then(function () {
                    throw n
                })
            } : e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(15),
        o = n(31),
        i = n(57);
    r(r.S, "Promise", {
        try: function (e) {
            var t = o.f(this),
                n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function (e, t, n) {
    n(38)("asyncIterator")
}, function (e, t, n) {
    n(38)("observable")
}, function (e, t) {
    e.exports = {
        author: "auth0",
        type: "cron",
        category: "log_export",
        initialUrlPath: "/login",
        repository: "https://github.com/auth0-extensions/auth0-logs-to-provider",
        keywords: ["auth0", "extension"],
        schedule: "0 */5 * * * *",
        auth0: {
            createClient: !0,
            onUninstallPath: "/.extensions/on-uninstall",
            scopes: "read:logs delete:clients"
        },
        secrets: {
            BATCH_SIZE: {
                description: "The ammount of logs to be read on each execution. Maximun is 100.",
                default: 100
            },
            START_FROM: {
                description: "Checkpoint ID of log to start from."
            },
            SLACK_INCOMING_WEBHOOK_URL: {
                description: "Slack Incoming Webhook URL used to report statistics and possible failures"
            },
            SLACK_SEND_SUCCESS: {
                description: "This setting will enable verbose notifications to Slack which are useful for troubleshooting",
                type: "select",
                allowMultiple: !1,
                default: "false",
                options: [{
                    value: "false",
                    text: "No"
                }, {
                    value: "true",
                    text: "Yes"
                }]
            },
            LOG_LEVEL: {
                description: "This allows you to specify the log level of events that need to be sent. Selected level includes all levels above.",
                type: "select",
                allowMultiple: !1,
                options: [{
                    value: "-",
                    text: ""
                }, {
                    value: "4",
                    text: "Critical"
                }, {
                    value: "3",
                    text: "Error"
                }, {
                    value: "2",
                    text: "Warning"
                }, {
                    value: "1",
                    text: "Info"
                }, {
                    value: "0",
                    text: "Debug"
                }]
            },
            LOG_TYPES: {
                description: "If you only want to send events with a specific type (eg: failed logins)",
                type: "select",
                allowMultiple: !0,
                options: [{
                    text: "",
                    value: "-"
                }, {
                    text: "Success Login",
                    value: "s"
                }, {
                    text: "Success Silent Auth",
                    value: "ssa"
                }, {
                    text: "Failed Silent Auth",
                    value: "fsa"
                }, {
                    text: "Success Exchange",
                    value: "seacft"
                }, {
                    text: "Failed Exchange",
                    value: "feacft"
                }, {
                    text: "Success Exchange",
                    value: "seccft"
                }, {
                    text: "Failed Exchange",
                    value: "feccft"
                }, {
                    text: "Success Exchange",
                    value: "sepft"
                }, {
                    text: "Failed Exchange",
                    value: "fepft"
                }, {
                    text: "Success Exchange",
                    value: "sertft"
                }, {
                    text: "Failed Exchange",
                    value: "fertft"
                }, {
                    text: "Success Exchange",
                    value: "seoobft"
                }, {
                    text: "Failed Exchange",
                    value: "feoobft"
                }, {
                    text: "Success Exchange",
                    value: "seotpft"
                }, {
                    text: "Failed Exchange",
                    value: "feotpft"
                }, {
                    text: "Success Exchange",
                    value: "sercft"
                }, {
                    text: "Failed Exchange",
                    value: "fercft"
                }, {
                    text: "Failed Login",
                    value: "f"
                }, {
                    text: "Warning",
                    value: "w"
                }, {
                    text: "Deprecation Notice",
                    value: "depnote"
                }, {
                    text: "Deleted User",
                    value: "du"
                }, {
                    text: "Failed Login (invalid email/username)",
                    value: "fu"
                }, {
                    text: "Failed Login (wrong password)",
                    value: "fp"
                }, {
                    text: "Failed by Connector",
                    value: "fc"
                }, {
                    text: "Failed by CORS",
                    value: "fco"
                }, {
                    text: "Connector Online",
                    value: "con"
                }, {
                    text: "Connector Offline",
                    value: "coff"
                }, {
                    text: "Failed Connector Provisioning",
                    value: "fcpro"
                }, {
                    text: "Success Signup",
                    value: "ss"
                }, {
                    text: "Failed Signup",
                    value: "fs"
                }, {
                    text: "Code Sent",
                    value: "cs"
                }, {
                    text: "Code/Link Sent",
                    value: "cls"
                }, {
                    text: "Success Verification Email",
                    value: "sv"
                }, {
                    text: "Failed Verification Email",
                    value: "fv"
                }, {
                    text: "Success Change Password",
                    value: "scp"
                }, {
                    text: "Failed Change Password",
                    value: "fcp"
                }, {
                    text: "Success Post Change Password Hook",
                    value: "scph"
                }, {
                    text: "Failed Post Change Password Hook",
                    value: "fcph"
                }, {
                    text: "Success Change Email",
                    value: "sce"
                }, {
                    text: "Failed Change Email",
                    value: "fce"
                }, {
                    text: "Success Change Username",
                    value: "scu"
                }, {
                    text: "Failed Change Username",
                    value: "fcu"
                }, {
                    text: "Success Change Phone Number",
                    value: "scpn"
                }, {
                    text: "Failed Change Phone Number",
                    value: "fcpn"
                }, {
                    text: "Success Verification Email Request",
                    value: "svr"
                }, {
                    text: "Failed Verification Email Request",
                    value: "fvr"
                }, {
                    text: "Success Change Password Request",
                    value: "scpr"
                }, {
                    text: "Failed Change Password Request",
                    value: "fcpr"
                }, {
                    text: "Failed Sending Notification",
                    value: "fn"
                }, {
                    text: "API Operation",
                    value: "sapi"
                }, {
                    text: "Failed API Operation",
                    value: "fapi"
                }, {
                    text: "Blocked Account",
                    value: "limit_wc"
                }, {
                    text: "Blocked IP Address",
                    value: "limit_mu"
                }, {
                    text: "Too Many Calls to /userinfo",
                    value: "limit_ui"
                }, {
                    text: "Rate Limit On API",
                    value: "api_limit"
                }, {
                    text: "Too Many Calls to /delegation",
                    value: "limit_delegation"
                }, {
                    text: "Successful User Deletion",
                    value: "sdu"
                }, {
                    text: "Failed User Deletion",
                    value: "fdu"
                }, {
                    text: "Auth0 Update Launched",
                    value: "admin_update_launch"
                }, {
                    text: "Auth0 OS Update Started",
                    value: "sys_os_update_start"
                }, {
                    text: "Auth0 OS Update Ended",
                    value: "sys_os_update_end"
                }, {
                    text: "Auth0 Update Started",
                    value: "sys_update_start"
                }, {
                    text: "Auth0 Update Ended",
                    value: "sys_update_end"
                }, {
                    text: "Success Logout",
                    value: "slo"
                }, {
                    text: "Failed Logout",
                    value: "flo"
                }, {
                    text: "Success Delegation",
                    value: "sd"
                }, {
                    text: "Failed Delegation",
                    value: "fd"
                }, {
                    text: "Unenroll device account",
                    value: "gd_unenroll"
                }, {
                    text: "Update device account",
                    value: "gd_update_device_account"
                }, {
                    text: "Module switch",
                    value: "gd_module_switch"
                }, {
                    text: "Guardian tenant update",
                    value: "gd_tenant_update"
                }, {
                    text: "Second factor started",
                    value: "gd_start_auth"
                }, {
                    text: "Enroll started",
                    value: "gd_start_enroll"
                }, {
                    text: "MFA Enrollment start failed",
                    value: "gd_start_enroll_failed"
                }, {
                    text: "User delete",
                    value: "gd_user_delete"
                }, {
                    text: "OTP Auth suceed",
                    value: "gd_auth_succeed"
                }, {
                    text: "OTP Auth failed",
                    value: "gd_auth_failed"
                }, {
                    text: "Push notification sent",
                    value: "gd_send_pn"
                }, {
                    text: "Error sending MFA Push Notification",
                    value: "gd_send_pn_failure"
                }, {
                    text: "OTP Auth rejected",
                    value: "gd_auth_rejected"
                }, {
                    text: "Recovery succeed",
                    value: "gd_recovery_succeed"
                }, {
                    text: "Recovery failed",
                    value: "gd_recovery_failed"
                }, {
                    text: "SMS Sent",
                    value: "gd_send_sms"
                }, {
                    text: "Error sending MFA SMS",
                    value: "gd_send_sms_failure"
                }, {
                    text: "Too many failures",
                    value: "gd_otp_rate_limit_exceed"
                }, {
                    text: "Too many failures",
                    value: "gd_recovery_rate_limit_exceed"
                }, {
                    text: "Guardian enrollment complete",
                    value: "gd_enrollment_complete"
                }, {
                    text: "Users import",
                    value: "fui"
                }, {
                    text: "Users import",
                    value: "sui"
                }, {
                    text: "Breached password",
                    value: "pwd_leak"
                }, {
                    text: "Failed cross origin authentication",
                    value: "fcoa"
                }, {
                    text: "Success cross origin authentication",
                    value: "scoa"
                }, {
                    text: "Account unblocked",
                    value: "ublkdu"
                }]
            },
            LOGANALYTICS_WORKSPACEID: {
                description: "Azure Log Analytics Workspace ID.",
                required: !0
            },
            LOGANALYTICS_WORKSPACEKEY: {
                description: "Azure Log Analytics Workspace Key.",
                required: !0
            },
            LOGANALYTICS_NAMESPACE: {
                description: "Azure Log Analytics Namespace, identifies your application or source.",
                required: !0
            },
            LOGANALYTICS_APIVERSION: {
                description: "Azure Log Analytics API version, defaults to latest.",
                required: !1
            }
        },
        title: "Auth0 Logs to Azure logs analytics",
        name: "auth0-logs-to-azure-logs-analytics",
        version: "2.2.1",
        preVersion: "2.1.3",
        description: "This extension will take all of your Auth0 logs and export them to Azure Log Analytics",
        logoUrl: "https://cdn.auth0.com/extensions/auth0-logs-to-splunk/assets/logo.svg"
    }
}, function (e, t, n) {
    "use strict";
    var r = n(25),
        o = n(26),
        i = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(o),
        s = n(146),
        c = n(145),
        a = n(147);
    e.exports = function (e) {
        return new r.JwksClient(e)
    }, e.exports.ArgumentError = i.ArgumentError, e.exports.JwksError = i.JwksError, e.exports.JwksRateLimitError = i.JwksRateLimitError, e.exports.SigningKeyNotFoundError = i.SigningKeyNotFoundError, e.exports.expressJwtSecret = c.expressJwtSecret, e.exports.hapiJwt2Key = s.hapiJwt2Key, e.exports.koaJwtSecret = a.koaJwtSecret
}, function (e, t, n) {
    "use strict";
    var r = n(26),
        o = n(25),
        i = function (e, t) {
            return e && "SigningKeyNotFoundError" === e.name ? t(null) : e ? t(e) : void 0
        };
    e.exports.expressJwtSecret = function (e) {
        if (null === e || void 0 === e) throw new r.ArgumentError("An options object must be provided when initializing expressJwtSecret");
        var t = new o.JwksClient(e),
            n = e.handleSigningKeyError || i;
        return function (e, r, o, i) {
            if (!r || "RS256" !== r.alg) return i(null, null);
            t.getSigningKey(r.kid, function (e, t) {
                return e ? n(e, function (e) {
                    return i(e, null)
                }) : i(null, t.publicKey || t.rsaPublicKey)
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(26),
        o = n(25),
        i = function (e, t) {
            return e && "SigningKeyNotFoundError" === e.name ? t(null, null, null) : e ? t(e, null, null) : void 0
        };
    e.exports.hapiJwt2Key = function (e) {
        if (null === e || void 0 === e) throw new r.ArgumentError("An options object must be provided when initializing expressJwtSecret");
        var t = new o.JwksClient(e),
            n = e.handleSigningKeyError || i;
        return function (e, r) {
            return e && e.header ? "RS256" !== e.header.alg ? r(null, null, null) : void t.getSigningKey(e.header.kid, function (e, t) {
                return e ? n(e, function (e) {
                    return r(e, null, null)
                }) : r(null, t.publicKey || t.rsaPublicKey, t)
            }) : r(null, null, null)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(26),
        o = n(25);
    e.exports.koaJwtSecret = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!e.jwksUri) throw new r.ArgumentError("No JWKS URI provided");
        var t = new o.JwksClient(e);
        return function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = n.alg,
                o = n.kid;
            return new Promise(function (n, i) {
                if ("RS256" !== r) return i(new Error("Missing / invalid token algorithm"));
                t.getSigningKey(o, function (t, r) {
                    if (t) return e.handleSigningKeyError ? e.handleSigningKeyError(t).then(i) : i(t);
                    n(r.publicKey || r.rsaPublicKey)
                })
            })
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e = e.match(/.{1,64}/g).join("\n"), e = "-----BEGIN CERTIFICATE-----\n" + e + "\n-----END CERTIFICATE-----\n"
    }

    function o(e) {
        var t = e[0];
        return t < "0" || t > "7" ? "00" + e : e
    }

    function i(e) {
        var t = e.toString(16);
        return t.length % 2 ? "0" + t : t
    }

    function s(e) {
        if (e <= 127) return i(e);
        var t = i(e);
        return i(128 + t.length / 2) + t
    }

    function c(e, t) {
        var n = new Buffer(e, "base64"),
            r = new Buffer(t, "base64"),
            i = o(n.toString("hex")),
            c = o(r.toString("hex")),
            a = i.length / 2,
            u = c.length / 2,
            l = s(a),
            f = s(u),
            d = "30" + s(a + u + l.length / 2 + f.length / 2 + 2) + "02" + l + i + "02" + f + c,
            p = new Buffer(d, "hex").toString("base64"),
            h = "-----BEGIN RSA PUBLIC KEY-----\n";
        return h += "" + p.match(/.{1,64}/g).join("\n"), h += "\n-----END RSA PUBLIC KEY-----\n"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.certToPEM = r, t.rsaPublicKeyToPEM = c
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : options,
            n = t.cacheMaxEntries,
            r = void 0 === n ? 5 : n,
            o = t.cacheMaxAge,
            s = void 0 === o ? (0, i.default)("10h") : o,
            a = (0, c.default)("jwks"),
            l = e.getSigningKey;
        return a("Configured caching of singing keys. Max: " + r + " / Age: " + s), (0, u.default)({
            load: function (e, t) {
                l(e, function (n, r) {
                    return n ? t(n) : (a("Caching signing key for '" + e + "':", r), t(null, r))
                })
            },
            hash: function (e) {
                return e
            },
            maxAge: s,
            max: r
        })
    };
    var o = n(166),
        i = r(o),
        s = n(41),
        c = r(s),
        a = n(164),
        u = r(a)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.rateLimitSigningKey = t.cacheSigningKey = void 0;
    var o = n(149),
        i = r(o),
        s = n(151),
        c = r(s);
    t.cacheSigningKey = i.default, t.rateLimitSigningKey = c.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : options,
            n = t.jwksRequestsPerMinute,
            r = void 0 === n ? 10 : n,
            o = (0, i.default)("jwks"),
            c = e.getSigningKey,
            u = new s.RateLimiter(r, "minute", !0);
        return o("Configured rate limiting to JWKS endpoint at " + r + "/minute"),
            function (e, t) {
                u.removeTokens(1, function (n, r) {
                    return n ? t(n) : (o("Requests to the JWKS endpoint available for the next minute:", r), r < 0 ? (o("Too many requests to the JWKS endpoint"), t(new a.default("Too many requests to the JWKS endpoint"))) : c(e, t))
                })
            }
    };
    var o = n(41),
        i = r(o),
        s = n(154),
        c = n(68),
        a = r(c)
}, function (e, t) {
    function n(e) {
        this.message = e
    }

    function r(e) {
        var t = String(e).replace(/=+$/, "");
        if (t.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var r, i, s = 0, c = 0, a = ""; i = t.charAt(c++); ~i && (r = s % 4 ? 64 * r + i : i, s++ % 4) ? a += String.fromCharCode(255 & r >> (-2 * s & 6)) : 0) i = o.indexOf(i);
        return a
    }
    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    n.prototype = new Error, n.prototype.name = "InvalidCharacterError", e.exports = "undefined" != typeof window && window.atob && window.atob.bind(window) || r
}, function (e, t, n) {
    function r(e) {
        return decodeURIComponent(o(e).replace(/(.)/g, function (e, t) {
            var n = t.charCodeAt(0).toString(16).toUpperCase();
            return n.length < 2 && (n = "0" + n), "%" + n
        }))
    }
    var o = n(152);
    e.exports = function (e) {
        var t = e.replace(/-/g, "+").replace(/_/g, "/");
        switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw "Illegal base64url string!"
        }
        try {
            return r(t)
        } catch (e) {
            return o(t)
        }
    }
}, function (e, t, n) {
    t.RateLimiter = n(156), t.TokenBucket = n(71)
}, function (e, t) {
    var n = function () {
        if ("undefined" != typeof process && process.hrtime) {
            var e = process.hrtime(),
                t = e[0],
                n = e[1];
            return 1e3 * t + Math.floor(n / 1e6)
        }
        return (new Date).getTime()
    };
    e.exports = n
}, function (e, t, n) {
    var r = n(71),
        o = n(155),
        i = function (e, t, n) {
            this.tokenBucket = new r(e, e, t, null), this.tokenBucket.content = e, this.curIntervalStart = o(), this.tokensThisInterval = 0, this.fireImmediately = n
        };
    i.prototype = {
        tokenBucket: null,
        curIntervalStart: 0,
        tokensThisInterval: 0,
        fireImmediately: !1,
        removeTokens: function (e, t) {
            function n(n, o) {
                if (n) return t(n, null);
                r.tokensThisInterval += e, t(null, o)
            }
            if (e > this.tokenBucket.bucketSize) return process.nextTick(t.bind(null, "Requested tokens " + e + " exceeds maximum tokens per interval " + this.tokenBucket.bucketSize, null)), !1;
            var r = this,
                i = o();
            if ((i < this.curIntervalStart || i - this.curIntervalStart >= this.tokenBucket.interval) && (this.curIntervalStart = i, this.tokensThisInterval = 0), e > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
                if (this.fireImmediately) process.nextTick(t.bind(null, null, -1));
                else {
                    var s = Math.ceil(this.curIntervalStart + this.tokenBucket.interval - i);
                    setTimeout(function () {
                        r.tokenBucket.removeTokens(e, n)
                    }, s)
                }
                return !1
            }
            return this.tokenBucket.removeTokens(e, n)
        },
        tryRemoveTokens: function (e) {
            if (e > this.tokenBucket.bucketSize) return !1;
            var t = o();
            if ((t < this.curIntervalStart || t - this.curIntervalStart >= this.tokenBucket.interval) && (this.curIntervalStart = t, this.tokensThisInterval = 0), e > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) return !1;
            var n = this.tokenBucket.tryRemoveTokens(e);
            return n && (this.tokensThisInterval += e), n
        },
        getTokensRemaining: function () {
            return this.tokenBucket.drip(), this.tokenBucket.content
        }
    }, e.exports = i
}, function (e, t, n) {
    function r(e) {
        var t = function () {
            return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
        };
        return t.called = !1, t
    }

    function o(e) {
        var t = function () {
                if (t.called) throw new Error(t.onceError);
                return t.called = !0, t.value = e.apply(this, arguments)
            },
            n = e.name || "Function wrapped with `once`";
        return t.onceError = n + " shouldn't be called more than once", t.called = !1, t
    }
    var i = n(173);
    e.exports = i(r), e.exports.strict = i(o), r.proto = r(function () {
        Object.defineProperty(Function.prototype, "once", {
            value: function () {
                return r(this)
            },
            configurable: !0
        }), Object.defineProperty(Function.prototype, "onceStrict", {
            value: function () {
                return o(this)
            },
            configurable: !0
        })
    })
}, function (e, t) {
    e.exports = require("async@2.1.2")
}, function (e, t) {
    e.exports = require("body-parser@1.12.4")
}, function (e, t) {
    e.exports = require("cookie-signature@1.0.6")
}, function (e, t) {
    e.exports = require("ejs@2.3.1")
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t) {
    e.exports = require("jsonwebtoken@7.1.9")
}, function (e, t) {
    e.exports = require("lru-memoizer@1.10.0")
}, function (e, t) {
    e.exports = require("morgan@1.5.3")
}, function (e, t) {
    e.exports = require("ms@0.7.1")
}, function (e, t) {
    e.exports = require("querystring")
}, function (e, t) {
    e.exports = require("stream")
}, function (e, t) {
    e.exports = require("useragent@2.1.6")
}, function (e, t) {
    e.exports = require("util")
}, function (e, t) {
    e.exports = require("webtask-tools")
}, function (e, t) {
    e.exports = require("winston@1.0.0")
}, function (e, t) {
    e.exports = require("wrappy@1.0.1")
}]);