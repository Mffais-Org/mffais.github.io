"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [670], {
        5049: (e, t, r) => {
            r.r(t), r.d(t, {
                ErrorCode: () => s,
                FormatError: () => ei,
                IntlMessageFormat: () => ed,
                InvalidValueError: () => ea,
                InvalidValueTypeError: () => el,
                MissingValueError: () => es,
                PART_TYPE: () => u,
                default: () => eh,
                formatToParts: () => ec,
                isFormatXMLElementFn: () => eu
            });
            var n, o, i, a, l, s, u, c = function(e, t) {
                return (c = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function f(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                c(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var d = function() {
                return (d = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function h(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }
            Object.create, Object.create;
            var p = ("function" == typeof SuppressedError && SuppressedError, r(1535));

            function m(e) {
                return e.type === o.literal
            }

            function g(e) {
                return e.type === o.number
            }

            function v(e) {
                return e.type === o.date
            }

            function b(e) {
                return e.type === o.time
            }

            function y(e) {
                return e.type === o.select
            }

            function E(e) {
                return e.type === o.plural
            }

            function w(e) {
                return e.type === o.tag
            }

            function x(e) {
                return !!(e && "object" == typeof e && e.type === i.number)
            }

            function P(e) {
                return !!(e && "object" == typeof e && e.type === i.dateTime)
            }! function(e) {
                e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(n || (n = {})),
            function(e) {
                e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
            }(o || (o = {})),
            function(e) {
                e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
            }(i || (i = {}));
            var _ = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                T = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
                S = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
                A = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                L = /^(@+)?(\+|#+)?[rs]?$/g,
                C = /(\*)(0+)|(#+)(0+)|(0+)/g,
                M = /^(0+)$/;

            function I(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(L, function(e, r, n) {
                    return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
                }), t
            }

            function R(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always", currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero", currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function H(e) {
                return R(e) || {}
            }
            var O = {
                    "001": ["H", "h"],
                    419: ["h", "H", "hB", "hb"],
                    AC: ["H", "h", "hb", "hB"],
                    AD: ["H", "hB"],
                    AE: ["h", "hB", "hb", "H"],
                    AF: ["H", "hb", "hB", "h"],
                    AG: ["h", "hb", "H", "hB"],
                    AI: ["H", "h", "hb", "hB"],
                    AL: ["h", "H", "hB"],
                    AM: ["H", "hB"],
                    AO: ["H", "hB"],
                    AR: ["h", "H", "hB", "hb"],
                    AS: ["h", "H"],
                    AT: ["H", "hB"],
                    AU: ["h", "hb", "H", "hB"],
                    AW: ["H", "hB"],
                    AX: ["H"],
                    AZ: ["H", "hB", "h"],
                    BA: ["H", "hB", "h"],
                    BB: ["h", "hb", "H", "hB"],
                    BD: ["h", "hB", "H"],
                    BE: ["H", "hB"],
                    BF: ["H", "hB"],
                    BG: ["H", "hB", "h"],
                    BH: ["h", "hB", "hb", "H"],
                    BI: ["H", "h"],
                    BJ: ["H", "hB"],
                    BL: ["H", "hB"],
                    BM: ["h", "hb", "H", "hB"],
                    BN: ["hb", "hB", "h", "H"],
                    BO: ["h", "H", "hB", "hb"],
                    BQ: ["H"],
                    BR: ["H", "hB"],
                    BS: ["h", "hb", "H", "hB"],
                    BT: ["h", "H"],
                    BW: ["H", "h", "hb", "hB"],
                    BY: ["H", "h"],
                    BZ: ["H", "h", "hb", "hB"],
                    CA: ["h", "hb", "H", "hB"],
                    CC: ["H", "h", "hb", "hB"],
                    CD: ["hB", "H"],
                    CF: ["H", "h", "hB"],
                    CG: ["H", "hB"],
                    CH: ["H", "hB", "h"],
                    CI: ["H", "hB"],
                    CK: ["H", "h", "hb", "hB"],
                    CL: ["h", "H", "hB", "hb"],
                    CM: ["H", "h", "hB"],
                    CN: ["H", "hB", "hb", "h"],
                    CO: ["h", "H", "hB", "hb"],
                    CP: ["H"],
                    CR: ["h", "H", "hB", "hb"],
                    CU: ["h", "H", "hB", "hb"],
                    CV: ["H", "hB"],
                    CW: ["H", "hB"],
                    CX: ["H", "h", "hb", "hB"],
                    CY: ["h", "H", "hb", "hB"],
                    CZ: ["H"],
                    DE: ["H", "hB"],
                    DG: ["H", "h", "hb", "hB"],
                    DJ: ["h", "H"],
                    DK: ["H"],
                    DM: ["h", "hb", "H", "hB"],
                    DO: ["h", "H", "hB", "hb"],
                    DZ: ["h", "hB", "hb", "H"],
                    EA: ["H", "h", "hB", "hb"],
                    EC: ["h", "H", "hB", "hb"],
                    EE: ["H", "hB"],
                    EG: ["h", "hB", "hb", "H"],
                    EH: ["h", "hB", "hb", "H"],
                    ER: ["h", "H"],
                    ES: ["H", "hB", "h", "hb"],
                    ET: ["hB", "hb", "h", "H"],
                    FI: ["H"],
                    FJ: ["h", "hb", "H", "hB"],
                    FK: ["H", "h", "hb", "hB"],
                    FM: ["h", "hb", "H", "hB"],
                    FO: ["H", "h"],
                    FR: ["H", "hB"],
                    GA: ["H", "hB"],
                    GB: ["H", "h", "hb", "hB"],
                    GD: ["h", "hb", "H", "hB"],
                    GE: ["H", "hB", "h"],
                    GF: ["H", "hB"],
                    GG: ["H", "h", "hb", "hB"],
                    GH: ["h", "H"],
                    GI: ["H", "h", "hb", "hB"],
                    GL: ["H", "h"],
                    GM: ["h", "hb", "H", "hB"],
                    GN: ["H", "hB"],
                    GP: ["H", "hB"],
                    GQ: ["H", "hB", "h", "hb"],
                    GR: ["h", "H", "hb", "hB"],
                    GT: ["h", "H", "hB", "hb"],
                    GU: ["h", "hb", "H", "hB"],
                    GW: ["H", "hB"],
                    GY: ["h", "hb", "H", "hB"],
                    HK: ["h", "hB", "hb", "H"],
                    HN: ["h", "H", "hB", "hb"],
                    HR: ["H", "hB"],
                    HU: ["H", "h"],
                    IC: ["H", "h", "hB", "hb"],
                    ID: ["H"],
                    IE: ["H", "h", "hb", "hB"],
                    IL: ["H", "hB"],
                    IM: ["H", "h", "hb", "hB"],
                    IN: ["h", "H"],
                    IO: ["H", "h", "hb", "hB"],
                    IQ: ["h", "hB", "hb", "H"],
                    IR: ["hB", "H"],
                    IS: ["H"],
                    IT: ["H", "hB"],
                    JE: ["H", "h", "hb", "hB"],
                    JM: ["h", "hb", "H", "hB"],
                    JO: ["h", "hB", "hb", "H"],
                    JP: ["H", "K", "h"],
                    KE: ["hB", "hb", "H", "h"],
                    KG: ["H", "h", "hB", "hb"],
                    KH: ["hB", "h", "H", "hb"],
                    KI: ["h", "hb", "H", "hB"],
                    KM: ["H", "h", "hB", "hb"],
                    KN: ["h", "hb", "H", "hB"],
                    KP: ["h", "H", "hB", "hb"],
                    KR: ["h", "H", "hB", "hb"],
                    KW: ["h", "hB", "hb", "H"],
                    KY: ["h", "hb", "H", "hB"],
                    KZ: ["H", "hB"],
                    LA: ["H", "hb", "hB", "h"],
                    LB: ["h", "hB", "hb", "H"],
                    LC: ["h", "hb", "H", "hB"],
                    LI: ["H", "hB", "h"],
                    LK: ["H", "h", "hB", "hb"],
                    LR: ["h", "hb", "H", "hB"],
                    LS: ["h", "H"],
                    LT: ["H", "h", "hb", "hB"],
                    LU: ["H", "h", "hB"],
                    LV: ["H", "hB", "hb", "h"],
                    LY: ["h", "hB", "hb", "H"],
                    MA: ["H", "h", "hB", "hb"],
                    MC: ["H", "hB"],
                    MD: ["H", "hB"],
                    ME: ["H", "hB", "h"],
                    MF: ["H", "hB"],
                    MG: ["H", "h"],
                    MH: ["h", "hb", "H", "hB"],
                    MK: ["H", "h", "hb", "hB"],
                    ML: ["H"],
                    MM: ["hB", "hb", "H", "h"],
                    MN: ["H", "h", "hb", "hB"],
                    MO: ["h", "hB", "hb", "H"],
                    MP: ["h", "hb", "H", "hB"],
                    MQ: ["H", "hB"],
                    MR: ["h", "hB", "hb", "H"],
                    MS: ["H", "h", "hb", "hB"],
                    MT: ["H", "h"],
                    MU: ["H", "h"],
                    MV: ["H", "h"],
                    MW: ["h", "hb", "H", "hB"],
                    MX: ["h", "H", "hB", "hb"],
                    MY: ["hb", "hB", "h", "H"],
                    MZ: ["H", "hB"],
                    NA: ["h", "H", "hB", "hb"],
                    NC: ["H", "hB"],
                    NE: ["H"],
                    NF: ["H", "h", "hb", "hB"],
                    NG: ["H", "h", "hb", "hB"],
                    NI: ["h", "H", "hB", "hb"],
                    NL: ["H", "hB"],
                    NO: ["H", "h"],
                    NP: ["H", "h", "hB"],
                    NR: ["H", "h", "hb", "hB"],
                    NU: ["H", "h", "hb", "hB"],
                    NZ: ["h", "hb", "H", "hB"],
                    OM: ["h", "hB", "hb", "H"],
                    PA: ["h", "H", "hB", "hb"],
                    PE: ["h", "H", "hB", "hb"],
                    PF: ["H", "h", "hB"],
                    PG: ["h", "H"],
                    PH: ["h", "hB", "hb", "H"],
                    PK: ["h", "hB", "H"],
                    PL: ["H", "h"],
                    PM: ["H", "hB"],
                    PN: ["H", "h", "hb", "hB"],
                    PR: ["h", "H", "hB", "hb"],
                    PS: ["h", "hB", "hb", "H"],
                    PT: ["H", "hB"],
                    PW: ["h", "H"],
                    PY: ["h", "H", "hB", "hb"],
                    QA: ["h", "hB", "hb", "H"],
                    RE: ["H", "hB"],
                    RO: ["H", "hB"],
                    RS: ["H", "hB", "h"],
                    RU: ["H"],
                    RW: ["H", "h"],
                    SA: ["h", "hB", "hb", "H"],
                    SB: ["h", "hb", "H", "hB"],
                    SC: ["H", "h", "hB"],
                    SD: ["h", "hB", "hb", "H"],
                    SE: ["H"],
                    SG: ["h", "hb", "H", "hB"],
                    SH: ["H", "h", "hb", "hB"],
                    SI: ["H", "hB"],
                    SJ: ["H"],
                    SK: ["H"],
                    SL: ["h", "hb", "H", "hB"],
                    SM: ["H", "h", "hB"],
                    SN: ["H", "h", "hB"],
                    SO: ["h", "H"],
                    SR: ["H", "hB"],
                    SS: ["h", "hb", "H", "hB"],
                    ST: ["H", "hB"],
                    SV: ["h", "H", "hB", "hb"],
                    SX: ["H", "h", "hb", "hB"],
                    SY: ["h", "hB", "hb", "H"],
                    SZ: ["h", "hb", "H", "hB"],
                    TA: ["H", "h", "hb", "hB"],
                    TC: ["h", "hb", "H", "hB"],
                    TD: ["h", "H", "hB"],
                    TF: ["H", "h", "hB"],
                    TG: ["H", "hB"],
                    TH: ["H", "h"],
                    TJ: ["H", "h"],
                    TL: ["H", "hB", "hb", "h"],
                    TM: ["H", "h"],
                    TN: ["h", "hB", "hb", "H"],
                    TO: ["h", "H"],
                    TR: ["H", "hB"],
                    TT: ["h", "hb", "H", "hB"],
                    TW: ["hB", "hb", "h", "H"],
                    TZ: ["hB", "hb", "H", "h"],
                    UA: ["H", "hB", "h"],
                    UG: ["hB", "hb", "H", "h"],
                    UM: ["h", "hb", "H", "hB"],
                    US: ["h", "hb", "H", "hB"],
                    UY: ["h", "H", "hB", "hb"],
                    UZ: ["H", "hB", "h"],
                    VA: ["H", "h", "hB"],
                    VC: ["h", "hb", "H", "hB"],
                    VE: ["h", "H", "hB", "hb"],
                    VG: ["h", "hb", "H", "hB"],
                    VI: ["h", "hb", "H", "hB"],
                    VN: ["H", "h"],
                    VU: ["h", "H"],
                    WF: ["H", "hB"],
                    WS: ["h", "H"],
                    XK: ["H", "hB", "h"],
                    YE: ["h", "hB", "hb", "H"],
                    YT: ["H", "hB"],
                    ZA: ["H", "h", "hb", "hB"],
                    ZM: ["h", "hb", "H", "hB"],
                    ZW: ["H", "h"],
                    "af-ZA": ["H", "h", "hB", "hb"],
                    "ar-001": ["h", "hB", "hb", "H"],
                    "ca-ES": ["H", "h", "hB"],
                    "en-001": ["h", "hb", "H", "hB"],
                    "en-HK": ["h", "hb", "H", "hB"],
                    "en-IL": ["H", "h", "hb", "hB"],
                    "en-MY": ["h", "hb", "H", "hB"],
                    "es-BR": ["H", "h", "hB", "hb"],
                    "es-ES": ["H", "h", "hB", "hb"],
                    "es-GQ": ["H", "h", "hB", "hb"],
                    "fr-CA": ["H", "h", "hB"],
                    "gl-ES": ["H", "h", "hB"],
                    "gu-IN": ["hB", "hb", "h", "H"],
                    "hi-IN": ["hB", "h", "H"],
                    "it-CH": ["H", "h", "hB"],
                    "it-IT": ["H", "h", "hB"],
                    "kn-IN": ["hB", "h", "H"],
                    "ml-IN": ["hB", "h", "H"],
                    "mr-IN": ["hB", "hb", "h", "H"],
                    "pa-IN": ["hB", "hb", "h", "H"],
                    "ta-IN": ["hB", "h", "hb", "H"],
                    "te-IN": ["hB", "h", "H"],
                    "zu-ZA": ["H", "hB", "hb", "h"]
                },
                k = new RegExp("^".concat(_.source, "*")),
                N = new RegExp("".concat(_.source, "*$"));

            function B(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var F = !!String.prototype.startsWith && "_a".startsWith("a", 1),
                D = !!String.fromCodePoint,
                j = !!Object.fromEntries,
                U = !!String.prototype.codePointAt,
                G = !!String.prototype.trimStart,
                V = !!String.prototype.trimEnd,
                z = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 0x1fffffffffffff >= Math.abs(e)
                },
                W = !0;
            try {
                var q = J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                W = (null === (a = q.exec("a")) || void 0 === a ? void 0 : a[0]) === "a"
            } catch (e) {
                W = !1
            }
            var K = F ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                X = D ? String.fromCodePoint : function() {
                    for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    for (var n = "", o = t.length, i = 0; o > i;) {
                        if ((e = t[i++]) > 1114111) throw RangeError(e + " is not a valid code point");
                        n += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, e % 1024 + 56320)
                    }
                    return n
                },
                $ = j ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r],
                            o = n[0],
                            i = n[1];
                        t[o] = i
                    }
                    return t
                },
                Y = U ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r, n = e.length;
                    if (!(t < 0) && !(t >= n)) {
                        var o = e.charCodeAt(t);
                        return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : (o - 55296 << 10) + (r - 56320) + 65536
                    }
                },
                Z = G ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(k, "")
                },
                Q = V ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(N, "")
                };

            function J(e, t) {
                return new RegExp(e, t)
            }
            if (W) {
                var ee = J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                l = function(e, t) {
                    var r;
                    return ee.lastIndex = t, null !== (r = ee.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else l = function(e, t) {
                for (var r = [];;) {
                    var n, o = Y(e, t);
                    if (void 0 === o || en(o) || (n = o) >= 33 && n <= 35 || 36 === n || n >= 37 && n <= 39 || 40 === n || 41 === n || 42 === n || 43 === n || 44 === n || 45 === n || n >= 46 && n <= 47 || n >= 58 && n <= 59 || n >= 60 && n <= 62 || n >= 63 && n <= 64 || 91 === n || 92 === n || 93 === n || 94 === n || 96 === n || 123 === n || 124 === n || 125 === n || 126 === n || 161 === n || n >= 162 && n <= 165 || 166 === n || 167 === n || 169 === n || 171 === n || 172 === n || 174 === n || 176 === n || 177 === n || 182 === n || 187 === n || 191 === n || 215 === n || 247 === n || n >= 8208 && n <= 8213 || n >= 8214 && n <= 8215 || 8216 === n || 8217 === n || 8218 === n || n >= 8219 && n <= 8220 || 8221 === n || 8222 === n || 8223 === n || n >= 8224 && n <= 8231 || n >= 8240 && n <= 8248 || 8249 === n || 8250 === n || n >= 8251 && n <= 8254 || n >= 8257 && n <= 8259 || 8260 === n || 8261 === n || 8262 === n || n >= 8263 && n <= 8273 || 8274 === n || 8275 === n || n >= 8277 && n <= 8286 || n >= 8592 && n <= 8596 || n >= 8597 && n <= 8601 || n >= 8602 && n <= 8603 || n >= 8604 && n <= 8607 || 8608 === n || n >= 8609 && n <= 8610 || 8611 === n || n >= 8612 && n <= 8613 || 8614 === n || n >= 8615 && n <= 8621 || 8622 === n || n >= 8623 && n <= 8653 || n >= 8654 && n <= 8655 || n >= 8656 && n <= 8657 || 8658 === n || 8659 === n || 8660 === n || n >= 8661 && n <= 8691 || n >= 8692 && n <= 8959 || n >= 8960 && n <= 8967 || 8968 === n || 8969 === n || 8970 === n || 8971 === n || n >= 8972 && n <= 8991 || n >= 8992 && n <= 8993 || n >= 8994 && n <= 9e3 || 9001 === n || 9002 === n || n >= 9003 && n <= 9083 || 9084 === n || n >= 9085 && n <= 9114 || n >= 9115 && n <= 9139 || n >= 9140 && n <= 9179 || n >= 9180 && n <= 9185 || n >= 9186 && n <= 9254 || n >= 9255 && n <= 9279 || n >= 9280 && n <= 9290 || n >= 9291 && n <= 9311 || n >= 9472 && n <= 9654 || 9655 === n || n >= 9656 && n <= 9664 || 9665 === n || n >= 9666 && n <= 9719 || n >= 9720 && n <= 9727 || n >= 9728 && n <= 9838 || 9839 === n || n >= 9840 && n <= 10087 || 10088 === n || 10089 === n || 10090 === n || 10091 === n || 10092 === n || 10093 === n || 10094 === n || 10095 === n || 10096 === n || 10097 === n || 10098 === n || 10099 === n || 10100 === n || 10101 === n || n >= 10132 && n <= 10175 || n >= 10176 && n <= 10180 || 10181 === n || 10182 === n || n >= 10183 && n <= 10213 || 10214 === n || 10215 === n || 10216 === n || 10217 === n || 10218 === n || 10219 === n || 10220 === n || 10221 === n || 10222 === n || 10223 === n || n >= 10224 && n <= 10239 || n >= 10240 && n <= 10495 || n >= 10496 && n <= 10626 || 10627 === n || 10628 === n || 10629 === n || 10630 === n || 10631 === n || 10632 === n || 10633 === n || 10634 === n || 10635 === n || 10636 === n || 10637 === n || 10638 === n || 10639 === n || 10640 === n || 10641 === n || 10642 === n || 10643 === n || 10644 === n || 10645 === n || 10646 === n || 10647 === n || 10648 === n || n >= 10649 && n <= 10711 || 10712 === n || 10713 === n || 10714 === n || 10715 === n || n >= 10716 && n <= 10747 || 10748 === n || 10749 === n || n >= 10750 && n <= 11007 || n >= 11008 && n <= 11055 || n >= 11056 && n <= 11076 || n >= 11077 && n <= 11078 || n >= 11079 && n <= 11084 || n >= 11085 && n <= 11123 || n >= 11124 && n <= 11125 || n >= 11126 && n <= 11157 || 11158 === n || n >= 11159 && n <= 11263 || n >= 11776 && n <= 11777 || 11778 === n || 11779 === n || 11780 === n || 11781 === n || n >= 11782 && n <= 11784 || 11785 === n || 11786 === n || 11787 === n || 11788 === n || 11789 === n || n >= 11790 && n <= 11798 || 11799 === n || n >= 11800 && n <= 11801 || 11802 === n || 11803 === n || 11804 === n || 11805 === n || n >= 11806 && n <= 11807 || 11808 === n || 11809 === n || 11810 === n || 11811 === n || 11812 === n || 11813 === n || 11814 === n || 11815 === n || 11816 === n || 11817 === n || n >= 11818 && n <= 11822 || 11823 === n || n >= 11824 && n <= 11833 || n >= 11834 && n <= 11835 || n >= 11836 && n <= 11839 || 11840 === n || 11841 === n || 11842 === n || n >= 11843 && n <= 11855 || n >= 11856 && n <= 11857 || 11858 === n || n >= 11859 && n <= 11903 || n >= 12289 && n <= 12291 || 12296 === n || 12297 === n || 12298 === n || 12299 === n || 12300 === n || 12301 === n || 12302 === n || 12303 === n || 12304 === n || 12305 === n || n >= 12306 && n <= 12307 || 12308 === n || 12309 === n || 12310 === n || 12311 === n || 12312 === n || 12313 === n || 12314 === n || 12315 === n || 12316 === n || 12317 === n || n >= 12318 && n <= 12319 || 12320 === n || 12336 === n || 64830 === n || 64831 === n || n >= 65093 && n <= 65094) break;
                    r.push(o), t += o >= 65536 ? 2 : 1
                }
                return X.apply(void 0, r)
            };
            var et = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var i = []; !this.isEOF();) {
                        var a = this.char();
                        if (123 === a) {
                            var l = this.parseArgument(e, r);
                            if (l.err) return l;
                            i.push(l.val)
                        } else if (125 === a && e > 0) break;
                        else if (35 === a && ("plural" === t || "selectordinal" === t)) {
                            var s = this.clonePosition();
                            this.bump(), i.push({
                                type: o.pound,
                                location: B(s, this.clonePosition())
                            })
                        } else if (60 !== a || this.ignoreTag || 47 !== this.peek()) {
                            if (60 === a && !this.ignoreTag && er(this.peek() || 0)) {
                                var l = this.parseTag(e, t);
                                if (l.err) return l;
                                i.push(l.val)
                            } else {
                                var l = this.parseLiteral(e, t);
                                if (l.err) return l;
                                i.push(l.val)
                            }
                        } else {
                            if (!r) return this.error(n.UNMATCHED_CLOSING_TAG, B(this.clonePosition(), this.clonePosition()));
                            break
                        }
                    }
                    return {
                        val: i,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var i = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: o.literal,
                            value: "<".concat(i, "/>"),
                            location: B(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (!this.bumpIf(">")) return this.error(n.INVALID_TAG, B(r, this.clonePosition()));
                    var a = this.parseMessage(e + 1, t, !0);
                    if (a.err) return a;
                    var l = a.val,
                        s = this.clonePosition();
                    if (!this.bumpIf("</")) return this.error(n.UNCLOSED_TAG, B(r, this.clonePosition()));
                    if (this.isEOF() || !er(this.char())) return this.error(n.INVALID_TAG, B(s, this.clonePosition()));
                    var u = this.clonePosition();
                    return i !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, B(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
                        val: {
                            type: o.tag,
                            value: i,
                            children: l,
                            location: B(r, this.clonePosition())
                        },
                        err: null
                    } : this.error(n.INVALID_TAG, B(s, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var i = this.tryParseQuote(t);
                        if (i) {
                            n += i;
                            continue
                        }
                        var a = this.tryParseUnquoted(e, t);
                        if (a) {
                            n += a;
                            continue
                        }
                        var l = this.tryParseLeftAngleBracket();
                        if (l) {
                            n += l;
                            continue
                        }
                        break
                    }
                    var s = B(r, this.clonePosition());
                    return {
                        val: {
                            type: o.literal,
                            value: n,
                            location: s
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    var e;
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (er(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 === this.peek()) t.push(39), this.bump();
                            else {
                                this.bump();
                                break
                            }
                        } else t.push(r);
                        this.bump()
                    }
                    return X.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), X(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, B(r, this.clonePosition()));
                    var i = this.parseIdentifierIfPossible().value;
                    if (!i) return this.error(n.MALFORMED_ARGUMENT, B(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: o.argument,
                                    value: i,
                                    location: B(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition()));
                            return this.parseArgumentOptions(e, t, i, r);
                        default:
                            return this.error(n.MALFORMED_ARGUMENT, B(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = l(this.message, t),
                        n = t + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: B(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, a) {
                    var l, s = this.clonePosition(),
                        u = this.parseIdentifierIfPossible().value,
                        c = this.clonePosition();
                    switch (u) {
                        case "":
                            return this.error(n.EXPECT_ARGUMENT_TYPE, B(s, c));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var f = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var h = this.clonePosition(),
                                    p = this.parseSimpleArgStyleIfPossible();
                                if (p.err) return p;
                                var m = Q(p.val);
                                if (0 === m.length) return this.error(n.EXPECT_ARGUMENT_STYLE, B(this.clonePosition(), this.clonePosition()));
                                f = {
                                    style: m,
                                    styleLocation: B(h, this.clonePosition())
                                }
                            }
                            var g = this.tryParseArgumentClose(a);
                            if (g.err) return g;
                            var v = B(a, this.clonePosition());
                            if (f && K(null == f ? void 0 : f.style, "::", 0)) {
                                var b, y = Z(f.style.slice(2));
                                if ("number" === u) {
                                    var p = this.parseNumberSkeletonFromString(y, f.styleLocation);
                                    if (p.err) return p;
                                    return {
                                        val: {
                                            type: o.number,
                                            value: r,
                                            location: v,
                                            style: p.val
                                        },
                                        err: null
                                    }
                                }
                                if (0 === y.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, v);
                                var E = y;
                                this.locale && (E = function(e, t) {
                                    for (var r = "", n = 0; n < e.length; n++) {
                                        var o = e.charAt(n);
                                        if ("j" === o) {
                                            for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                                            var a = 1 + (1 & i),
                                                l = i < 2 ? 1 : 3 + (i >> 1),
                                                s = function(e) {
                                                    var t, r = e.hourCycle;
                                                    if (void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r) switch (r) {
                                                        case "h24":
                                                            return "k";
                                                        case "h23":
                                                            return "H";
                                                        case "h12":
                                                            return "h";
                                                        case "h11":
                                                            return "K";
                                                        default:
                                                            throw Error("Invalid hourCycle")
                                                    }
                                                    var n = e.language;
                                                    return "root" !== n && (t = e.maximize().region), (O[t || ""] || O[n || ""] || O["".concat(n, "-001")] || O["001"])[0]
                                                }(t);
                                            for (("H" == s || "k" == s) && (l = 0); l-- > 0;) r += "a";
                                            for (; a-- > 0;) r = s + r
                                        } else "J" === o ? r += "H" : r += o
                                    }
                                    return r
                                }(y, this.locale));
                                var m = {
                                    type: i.dateTime,
                                    pattern: E,
                                    location: f.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? (b = {}, E.replace(T, function(e) {
                                        var t = e.length;
                                        switch (e[0]) {
                                            case "G":
                                                b.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "y":
                                                b.year = 2 === t ? "2-digit" : "numeric";
                                                break;
                                            case "Y":
                                            case "u":
                                            case "U":
                                            case "r":
                                                throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                                            case "q":
                                            case "Q":
                                                throw RangeError("`q/Q` (quarter) patterns are not supported");
                                            case "M":
                                            case "L":
                                                b.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                                break;
                                            case "w":
                                            case "W":
                                                throw RangeError("`w/W` (week) patterns are not supported");
                                            case "d":
                                                b.day = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "D":
                                            case "F":
                                            case "g":
                                                throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                                            case "E":
                                                b.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "e":
                                                if (t < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                                                b.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "c":
                                                if (t < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                                b.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "a":
                                                b.hour12 = !0;
                                                break;
                                            case "b":
                                            case "B":
                                                throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                            case "h":
                                                b.hourCycle = "h12", b.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "H":
                                                b.hourCycle = "h23", b.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "K":
                                                b.hourCycle = "h11", b.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "k":
                                                b.hourCycle = "h24", b.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "j":
                                            case "J":
                                            case "C":
                                                throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                            case "m":
                                                b.minute = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "s":
                                                b.second = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "S":
                                            case "A":
                                                throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                            case "z":
                                                b.timeZoneName = t < 4 ? "short" : "long";
                                                break;
                                            case "Z":
                                            case "O":
                                            case "v":
                                            case "V":
                                            case "X":
                                            case "x":
                                                throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                                        }
                                        return ""
                                    }), b) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === u ? o.date : o.time,
                                        value: r,
                                        location: v,
                                        style: m
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === u ? o.number : "date" === u ? o.date : o.time,
                                    value: r,
                                    location: v,
                                    style: null !== (l = null == f ? void 0 : f.style) && void 0 !== l ? l : null
                                }, err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var w = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, B(w, d({}, w)));
                            this.bumpSpace();
                            var x = this.parseIdentifierIfPossible(),
                                P = 0;
                            if ("select" !== u && "offset" === x.value) {
                                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B(this.clonePosition(), this.clonePosition()));
                                this.bumpSpace();
                                var p = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                                if (p.err) return p;
                                this.bumpSpace(), x = this.parseIdentifierIfPossible(), P = p.val
                            }
                            var _ = this.tryParsePluralOrSelectOptions(e, u, t, x);
                            if (_.err) return _;
                            var g = this.tryParseArgumentClose(a);
                            if (g.err) return g;
                            var S = B(a, this.clonePosition());
                            if ("select" === u) return {
                                val: {
                                    type: o.select,
                                    value: r,
                                    options: $(_.val),
                                    location: S
                                },
                                err: null
                            };
                            return {
                                val: {
                                    type: o.plural,
                                    value: r,
                                    options: $(_.val),
                                    offset: P,
                                    pluralType: "plural" === u ? "cardinal" : "ordinal",
                                    location: S
                                }, err: null
                            };
                        default:
                            return this.error(n.INVALID_ARGUMENT_TYPE, B(s, c))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, B(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
                        case 39:
                            this.bump();
                            var r = this.clonePosition();
                            if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, B(r, this.clonePosition()));
                            this.bump();
                            break;
                        case 123:
                            e += 1, this.bump();
                            break;
                        case 125:
                            if (!(e > 0)) return {
                                val: this.message.slice(t.offset, this.offset()),
                                err: null
                            };
                            e -= 1;
                            break;
                        default:
                            this.bump()
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw Error("Number skeleton cannot be empty");
                            for (var t = e.split(S).filter(function(e) {
                                    return e.length > 0
                                }), r = [], n = 0; n < t.length; n++) {
                                var o = t[n].split("/");
                                if (0 === o.length) throw Error("Invalid number skeleton");
                                for (var i = o[0], a = o.slice(1), l = 0; l < a.length; l++)
                                    if (0 === a[l].length) throw Error("Invalid number skeleton");
                                r.push({
                                    stem: i,
                                    options: a
                                })
                            }
                            return r
                        }(e)
                    } catch (e) {
                        return this.error(n.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: i.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? function(e) {
                                for (var t = {}, r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    switch (n.stem) {
                                        case "percent":
                                        case "%":
                                            t.style = "percent";
                                            continue;
                                        case "%x100":
                                            t.style = "percent", t.scale = 100;
                                            continue;
                                        case "currency":
                                            t.style = "currency", t.currency = n.options[0];
                                            continue;
                                        case "group-off":
                                        case ",_":
                                            t.useGrouping = !1;
                                            continue;
                                        case "precision-integer":
                                        case ".":
                                            t.maximumFractionDigits = 0;
                                            continue;
                                        case "measure-unit":
                                        case "unit":
                                            t.style = "unit", t.unit = n.options[0].replace(/^(.*?)-/, "");
                                            continue;
                                        case "compact-short":
                                        case "K":
                                            t.notation = "compact", t.compactDisplay = "short";
                                            continue;
                                        case "compact-long":
                                        case "KK":
                                            t.notation = "compact", t.compactDisplay = "long";
                                            continue;
                                        case "scientific":
                                            t = d(d(d({}, t), {
                                                notation: "scientific"
                                            }), n.options.reduce(function(e, t) {
                                                return d(d({}, e), R(t) || {})
                                            }, {}));
                                            continue;
                                        case "engineering":
                                            t = d(d(d({}, t), {
                                                notation: "engineering"
                                            }), n.options.reduce(function(e, t) {
                                                return d(d({}, e), R(t) || {})
                                            }, {}));
                                            continue;
                                        case "notation-simple":
                                            t.notation = "standard";
                                            continue;
                                        case "unit-width-narrow":
                                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                                            continue;
                                        case "unit-width-short":
                                            t.currencyDisplay = "code", t.unitDisplay = "short";
                                            continue;
                                        case "unit-width-full-name":
                                            t.currencyDisplay = "name", t.unitDisplay = "long";
                                            continue;
                                        case "unit-width-iso-code":
                                            t.currencyDisplay = "symbol";
                                            continue;
                                        case "scale":
                                            t.scale = parseFloat(n.options[0]);
                                            continue;
                                        case "rounding-mode-floor":
                                            t.roundingMode = "floor";
                                            continue;
                                        case "rounding-mode-ceiling":
                                            t.roundingMode = "ceil";
                                            continue;
                                        case "rounding-mode-down":
                                            t.roundingMode = "trunc";
                                            continue;
                                        case "rounding-mode-up":
                                            t.roundingMode = "expand";
                                            continue;
                                        case "rounding-mode-half-even":
                                            t.roundingMode = "halfEven";
                                            continue;
                                        case "rounding-mode-half-down":
                                            t.roundingMode = "halfTrunc";
                                            continue;
                                        case "rounding-mode-half-up":
                                            t.roundingMode = "halfExpand";
                                            continue;
                                        case "integer-width":
                                            if (n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                                            n.options[0].replace(C, function(e, r, n, o, i, a) {
                                                if (r) t.minimumIntegerDigits = n.length;
                                                else if (o && i) throw Error("We currently do not support maximum integer digits");
                                                else if (a) throw Error("We currently do not support exact integer digits");
                                                return ""
                                            });
                                            continue
                                    }
                                    if (M.test(n.stem)) {
                                        t.minimumIntegerDigits = n.stem.length;
                                        continue
                                    }
                                    if (A.test(n.stem)) {
                                        if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                                        n.stem.replace(A, function(e, r, n, o, i, a) {
                                            return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                                        });
                                        var o = n.options[0];
                                        "w" === o ? t = d(d({}, t), {
                                            trailingZeroDisplay: "stripIfInteger"
                                        }) : o && (t = d(d({}, t), I(o)));
                                        continue
                                    }
                                    if (L.test(n.stem)) {
                                        t = d(d({}, t), I(n.stem));
                                        continue
                                    }
                                    var i = R(n.stem);
                                    i && (t = d(d({}, t), i));
                                    var a = function(e) {
                                        var t;
                                        if ("E" === e[0] && "E" === e[1] ? (t = {
                                                notation: "engineering"
                                            }, e = e.slice(2)) : "E" === e[0] && (t = {
                                                notation: "scientific"
                                            }, e = e.slice(1)), t) {
                                            var r = e.slice(0, 2);
                                            if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !M.test(e)) throw Error("Malformed concise eng/scientific notation");
                                            t.minimumIntegerDigits = e.length
                                        }
                                        return t
                                    }(n.stem);
                                    a && (t = d(d({}, t), a))
                                }
                                return t
                            }(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, o) {
                    for (var i, a = !1, l = [], s = new Set, u = o.value, c = o.location;;) {
                        if (0 === u.length) {
                            var f = this.clonePosition();
                            if ("select" !== t && this.bumpIf("=")) {
                                var d = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
                                if (d.err) return d;
                                c = B(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset())
                            } else break
                        }
                        if (s.has(u)) return this.error("select" === t ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                        "other" === u && (a = !0), this.bumpSpace();
                        var h = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, B(this.clonePosition(), this.clonePosition()));
                        var p = this.parseMessage(e + 1, t, r);
                        if (p.err) return p;
                        var m = this.tryParseArgumentClose(h);
                        if (m.err) return m;
                        l.push([u, {
                            value: p.val,
                            location: B(h, this.clonePosition())
                        }]), s.add(u), this.bumpSpace(), u = (i = this.parseIdentifierIfPossible()).value, c = i.location
                    }
                    return 0 === l.length ? this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, B(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(n.MISSING_OTHER_CLAUSE, B(this.clonePosition(), this.clonePosition())) : {
                        val: l,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var o = !1, i = 0; !this.isEOF();) {
                        var a = this.char();
                        if (a >= 48 && a <= 57) o = !0, i = 10 * i + (a - 48), this.bump();
                        else break
                    }
                    var l = B(n, this.clonePosition());
                    return o ? z(i *= r) ? {
                        val: i,
                        err: null
                    } : this.error(t, l) : this.error(e, l)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = Y(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (K(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && en(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null != r ? r : null
                }, e
            }();

            function er(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function en(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function eo(e, t) {
                void 0 === t && (t = {});
                var r = new et(e, t = d({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t)).parse();
                if (r.err) {
                    var o = SyntaxError(n[r.err.kind]);
                    throw o.location = r.err.location, o.originalMessage = r.err.message, o
                }
                return (null == t ? void 0 : t.captureLocation) || function e(t) {
                    t.forEach(function(t) {
                        if (delete t.location, y(t) || E(t))
                            for (var r in t.options) delete t.options[r].location, e(t.options[r].value);
                        else g(t) && x(t.style) ? delete t.style.location : (v(t) || b(t)) && P(t.style) ? delete t.style.location : w(t) && e(t.children)
                    })
                }(r.val), r.val
            }! function(e) {
                e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
            }(s || (s = {}));
            var ei = function(e) {
                    function t(t, r, n) {
                        var o = e.call(this, t) || this;
                        return o.code = r, o.originalMessage = n, o
                    }
                    return f(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                ea = function(e) {
                    function t(t, r, n, o) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), s.INVALID_VALUE, o) || this
                    }
                    return f(t, e), t
                }(ei),
                el = function(e) {
                    function t(t, r, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), s.INVALID_VALUE, n) || this
                    }
                    return f(t, e), t
                }(ei),
                es = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), s.MISSING_VALUE, r) || this
                    }
                    return f(t, e), t
                }(ei);

            function eu(e) {
                return "function" == typeof e
            }

            function ec(e, t, r, n, i, a, l) {
                if (1 === e.length && m(e[0])) return [{
                    type: u.literal,
                    value: e[0].value
                }];
                for (var c = [], f = 0; f < e.length; f++) {
                    var d = e[f];
                    if (m(d)) {
                        c.push({
                            type: u.literal,
                            value: d.value
                        });
                        continue
                    }
                    if (d.type === o.pound) {
                        "number" == typeof a && c.push({
                            type: u.literal,
                            value: r.getNumberFormat(t).format(a)
                        });
                        continue
                    }
                    var h = d.value;
                    if (!(i && h in i)) throw new es(h, l);
                    var p = i[h];
                    if (d.type === o.argument) {
                        p && "string" != typeof p && "number" != typeof p || (p = "string" == typeof p || "number" == typeof p ? String(p) : ""), c.push({
                            type: "string" == typeof p ? u.literal : u.object,
                            value: p
                        });
                        continue
                    }
                    if (v(d)) {
                        var _ = "string" == typeof d.style ? n.date[d.style] : P(d.style) ? d.style.parsedOptions : void 0;
                        c.push({
                            type: u.literal,
                            value: r.getDateTimeFormat(t, _).format(p)
                        });
                        continue
                    }
                    if (b(d)) {
                        var _ = "string" == typeof d.style ? n.time[d.style] : P(d.style) ? d.style.parsedOptions : n.time.medium;
                        c.push({
                            type: u.literal,
                            value: r.getDateTimeFormat(t, _).format(p)
                        });
                        continue
                    }
                    if (g(d)) {
                        var _ = "string" == typeof d.style ? n.number[d.style] : x(d.style) ? d.style.parsedOptions : void 0;
                        _ && _.scale && (p *= _.scale || 1), c.push({
                            type: u.literal,
                            value: r.getNumberFormat(t, _).format(p)
                        });
                        continue
                    }
                    if (w(d)) {
                        var T = d.children,
                            S = d.value,
                            A = i[S];
                        if (!eu(A)) throw new el(S, "function", l);
                        var L = A(ec(T, t, r, n, i, a).map(function(e) {
                            return e.value
                        }));
                        Array.isArray(L) || (L = [L]), c.push.apply(c, L.map(function(e) {
                            return {
                                type: "string" == typeof e ? u.literal : u.object,
                                value: e
                            }
                        }))
                    }
                    if (y(d)) {
                        var C = d.options[p] || d.options.other;
                        if (!C) throw new ea(d.value, p, Object.keys(d.options), l);
                        c.push.apply(c, ec(C.value, t, r, n, i));
                        continue
                    }
                    if (E(d)) {
                        var C = d.options["=".concat(p)];
                        if (!C) {
                            if (!Intl.PluralRules) throw new ei('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.MISSING_INTL_API, l);
                            var M = r.getPluralRules(t, {
                                type: d.pluralType
                            }).select(p - (d.offset || 0));
                            C = d.options[M] || d.options.other
                        }
                        if (!C) throw new ea(d.value, p, Object.keys(d.options), l);
                        c.push.apply(c, ec(C.value, t, r, n, i, p - (d.offset || 0)));
                        continue
                    }
                }
                return c.length < 2 ? c : c.reduce(function(e, t) {
                    var r = e[e.length - 1];
                    return r && r.type === u.literal && t.type === u.literal ? r.value += t.value : e.push(t), e
                }, [])
            }

            function ef(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }! function(e) {
                e[e.literal = 0] = "literal", e[e.object = 1] = "object"
            }(u || (u = {}));
            var ed = function() {
                function e(t, r, n, o) {
                    void 0 === r && (r = e.defaultLocale);
                    var i, a, l = this;
                    if (this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(e) {
                            var t = l.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function(e, t) {
                                return e.length && t.type === u.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                            }, []);
                            return r.length <= 1 ? r[0] || "" : r
                        }, this.formatToParts = function(e) {
                            return ec(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
                        }, this.resolvedOptions = function() {
                            var e;
                            return {
                                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
                            }
                        }, this.getAst = function() {
                            return l.ast
                        }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
                        if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        var s = o || {},
                            c = (s.formatters, function(e, t) {
                                var r = {};
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                                return r
                            }(s, ["formatters"]));
                        this.ast = e.__parse(t, d(d({}, c), {
                            locale: this.resolvedLocale
                        }))
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
                    this.formats = (i = e.formats, n ? Object.keys(i).reduce(function(e, t) {
                        var r, o;
                        return e[t] = (r = i[t], (o = n[t]) ? d(d(d({}, r || {}), o || {}), Object.keys(r).reduce(function(e, t) {
                            return e[t] = d(d({}, r[t]), o[t] || {}), e
                        }, {})) : r), e
                    }, d({}, i)) : i), this.formatters = o && o.formatters || (void 0 === (a = this.formatterCache) && (a = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: (0, p.memoize)(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.NumberFormat).bind.apply(e, h([void 0], t, !1)))
                        }, {
                            cache: ef(a.number),
                            strategy: p.strategies.variadic
                        }),
                        getDateTimeFormat: (0, p.memoize)(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.DateTimeFormat).bind.apply(e, h([void 0], t, !1)))
                        }, {
                            cache: ef(a.dateTime),
                            strategy: p.strategies.variadic
                        }),
                        getPluralRules: (0, p.memoize)(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.PluralRules).bind.apply(e, h([void 0], t, !1)))
                        }, {
                            cache: ef(a.pluralRules),
                            strategy: p.strategies.variadic
                        })
                    })
                }
                return Object.defineProperty(e, "defaultLocale", {
                    get: function() {
                        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                    if (void 0 !== Intl.Locale) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return new Intl.Locale(t.length > 0 ? t[0] : "string" == typeof e ? e : e[0])
                    }
                }, e.__parse = eo, e.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, e
            }();
            let eh = ed
        },
        8175: (e, t) => {
            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extends = r
        },
        7266: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(407),
                o = r(7430),
                i = r(4773),
                a = r(9735);
            t.useFormatter = n.useFormatter, t.useTranslations = n.useTranslations, t.useLocale = o.default, t.NextIntlClientProvider = i.default, Object.keys(a).forEach(function(e) {
                "default" === e || Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                })
            })
        },
        1182: (e, t, r) => {
            var n = r(3142),
                o = r(1662),
                i = r(796);
            n.default, o.default, t.xp = i.default
        },
        477: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(8175),
                o = r(2115),
                i = r(7430),
                a = r(1070),
                l = r(9472),
                s = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o);
            let u = o.forwardRef(function(e, t) {
                let {
                    locale: r,
                    localePrefix: o,
                    ...u
                } = e, c = i.default(), f = r || c, d = a.getLocalePrefix(f, o);
                return s.default.createElement(l.default, n.extends({
                    ref: t,
                    locale: f,
                    localePrefixMode: o.mode,
                    prefix: d
                }, u))
            });
            u.displayName = "ClientLink", t.default = u
        },
        1662: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(8175),
                o = r(2115),
                i = r(7430),
                a = r(9860),
                l = r(5923),
                s = r(477),
                u = r(5559),
                c = r(532),
                f = r(897),
                d = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o);
            t.default = function(e) {
                let t = a.receiveRoutingConfig(e),
                    r = a.receiveLocaleCookie(e.localeCookie);

                function h() {
                    let e = i.default();
                    if (!t.locales.includes(e)) throw Error(void 0);
                    return e
                }
                let p = o.forwardRef(function(e, o) {
                    let {
                        href: i,
                        locale: a,
                        ...u
                    } = e, c = h(), f = a || c;
                    return d.default.createElement(s.default, n.extends({
                        ref: o,
                        href: l.compileLocalizedPathname({
                            locale: f,
                            pathname: i,
                            params: "object" == typeof i ? i.params : void 0,
                            pathnames: t.pathnames
                        }),
                        locale: a,
                        localeCookie: r,
                        localePrefix: t.localePrefix
                    }, u))
                });

                function m(e) {
                    let {
                        href: r,
                        locale: n
                    } = e;
                    return l.compileLocalizedPathname({
                        ...l.normalizeNameOrNameWithParams(r),
                        locale: n,
                        pathnames: t.pathnames
                    })
                }
                return p.displayName = "Link", {
                    Link: p,
                    redirect: function(e) {
                        let r = m({
                            href: e,
                            locale: h()
                        });
                        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                        return u.clientRedirect({
                            pathname: r,
                            localePrefix: t.localePrefix
                        }, ...o)
                    },
                    permanentRedirect: function(e) {
                        let r = m({
                            href: e,
                            locale: h()
                        });
                        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                        return u.clientPermanentRedirect({
                            pathname: r,
                            localePrefix: t.localePrefix
                        }, ...o)
                    },
                    usePathname: function() {
                        let e = c.default(t),
                            r = h();
                        return o.useMemo(() => e ? l.getRoute(r, e, t.pathnames) : e, [r, e])
                    },
                    useRouter: function() {
                        let e = f.default(t.localePrefix, r),
                            n = h();
                        return o.useMemo(() => ({
                            ...e,
                            push(t) {
                                for (var r, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                                let l = m({
                                    href: t,
                                    locale: (null === (r = i[0]) || void 0 === r ? void 0 : r.locale) || n
                                });
                                return e.push(l, ...i)
                            },
                            replace(t) {
                                for (var r, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                                let l = m({
                                    href: t,
                                    locale: (null === (r = i[0]) || void 0 === r ? void 0 : r.locale) || n
                                });
                                return e.replace(l, ...i)
                            },
                            prefetch(t) {
                                for (var r, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                                let l = m({
                                    href: t,
                                    locale: (null === (r = i[0]) || void 0 === r ? void 0 : r.locale) || n
                                });
                                return e.prefetch(l, ...i)
                            }
                        }), [e, n])
                    },
                    getPathname: m
                }
            }
        },
        796: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6046),
                o = r(2115),
                i = r(7430),
                a = r(4126),
                l = r(7657),
                s = r(5923),
                u = r(532);
            t.default = function(e) {
                function t() {
                    return i.default()
                }
                let {
                    Link: r,
                    config: c,
                    getPathname: f,
                    ...d
                } = a.default(t, e);
                return {
                    ...d,
                    Link: r,
                    usePathname: function() {
                        let e = u.default(c),
                            r = t();
                        return o.useMemo(() => e && c.pathnames ? s.getRoute(r, e, c.pathnames) : e, [r, e])
                    },
                    useRouter: function() {
                        let e = n.useRouter(),
                            r = t(),
                            i = n.usePathname();
                        return o.useMemo(() => {
                            function t(e) {
                                return function(t, n) {
                                    let {
                                        locale: o,
                                        ...a
                                    } = n || {}, s = [f({
                                        href: t,
                                        locale: o || r,
                                        domain: window.location.host
                                    })];
                                    Object.keys(a).length > 0 && s.push(a), e(...s), l.default(c.localeCookie, i, r, o)
                                }
                            }
                            return {
                                ...e,
                                push: t(e.push),
                                replace: t(e.replace),
                                prefetch: t(e.prefetch)
                            }
                        }, [r, i, e])
                    },
                    getPathname: f
                }
            }
        },
        3142: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(8175),
                o = r(2115),
                i = r(9860),
                a = r(477),
                l = r(5559),
                s = r(532),
                u = r(897),
                c = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o);
            t.default = function(e) {
                let t = i.receiveLocalePrefixConfig(null == e ? void 0 : e.localePrefix),
                    r = i.receiveLocaleCookie(null == e ? void 0 : e.localeCookie),
                    f = o.forwardRef(function(e, o) {
                        return c.default.createElement(a.default, n.extends({
                            ref: o,
                            localeCookie: r,
                            localePrefix: t
                        }, e))
                    });
                return f.displayName = "Link", {
                    Link: f,
                    redirect: function(e) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return l.clientRedirect({
                            pathname: e,
                            localePrefix: t
                        }, ...n)
                    },
                    permanentRedirect: function(e) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return l.clientPermanentRedirect({
                            pathname: e,
                            localePrefix: t
                        }, ...n)
                    },
                    usePathname: function() {
                        return s.default({
                            localePrefix: t,
                            defaultLocale: null == e ? void 0 : e.defaultLocale
                        })
                    },
                    useRouter: function() {
                        return u.default(t, r)
                    }
                }
            }
        },
        5559: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(7430),
                o = r(4487);

            function i(e) {
                return function(t) {
                    let r;
                    try {
                        r = n.default()
                    } catch (e) {
                        throw e
                    }
                    for (var o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                    return e({
                        ...t,
                        locale: r
                    }, ...i)
                }
            }
            let a = i(o.baseRedirect),
                l = i(o.basePermanentRedirect);
            t.clientPermanentRedirect = l, t.clientRedirect = a
        },
        532: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6046),
                o = r(2115),
                i = r(7430),
                a = r(1070);
            t.default = function(e) {
                let t = n.usePathname(),
                    r = i.default();
                return o.useMemo(() => {
                    if (!t) return t;
                    let n = t,
                        o = a.getLocalePrefix(r, e.localePrefix);
                    if (a.hasPathnamePrefixed(o, t)) n = a.unprefixPathname(t, o);
                    else if ("as-needed" === e.localePrefix.mode && e.localePrefix.prefixes) {
                        let e = a.getLocaleAsPrefix(r);
                        a.hasPathnamePrefixed(e, t) && (n = a.unprefixPathname(t, e))
                    }
                    return n
                }, [e.localePrefix, r, t])
            }
        },
        897: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6046),
                o = r(2115),
                i = r(7430),
                a = r(1070),
                l = r(7657),
                s = r(5923);
            t.default = function(e, t) {
                let r = n.useRouter(),
                    u = i.default(),
                    c = n.usePathname();
                return o.useMemo(() => {
                    function n(r) {
                        return function(n, o) {
                            let {
                                locale: i,
                                ...f
                            } = o || {};
                            l.default(t, c, u, i);
                            let d = [function(t, r) {
                                let n = window.location.pathname,
                                    o = s.getBasePath(c);
                                o && (n = n.replace(o, ""));
                                let i = r || u,
                                    l = a.getLocalePrefix(i, e);
                                return a.localizeHref(t, i, u, n, l)
                            }(n, i)];
                            return Object.keys(f).length > 0 && d.push(f), r(...d)
                        }
                    }
                    return {
                        ...r,
                        push: n(r.push),
                        replace: n(r.replace),
                        prefetch: n(r.prefetch)
                    }
                }, [u, t, e, c, r])
            }
        },
        4095: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(8175),
                o = r(8173),
                i = r(6046),
                a = r(2115),
                l = r(7430),
                s = r(7657);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = u(o),
                f = u(a),
                d = a.forwardRef(function(e, t) {
                    let {
                        defaultLocale: r,
                        href: o,
                        locale: u,
                        localeCookie: d,
                        onClick: h,
                        prefetch: p,
                        unprefixed: m,
                        ...g
                    } = e, v = l.default(), b = null != u && u !== v, y = u || v, E = function() {
                        let [e, t] = a.useState();
                        return a.useEffect(() => {
                            t(window.location.host)
                        }, []), e
                    }(), w = E && m && (m.domains[E] === y || !Object.keys(m.domains).includes(E) && v === r && !u) ? m.pathname : o, x = i.usePathname();
                    return b && (p = !1), f.default.createElement(c.default, n.extends({
                        ref: t,
                        href: w,
                        hrefLang: b ? u : void 0,
                        onClick: function(e) {
                            s.default(d, x, v, u), h && h(e)
                        },
                        prefetch: p
                    }, g))
                });
            t.default = d
        },
        9472: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(8175),
                o = r(6046),
                i = r(2115),
                a = r(7430),
                l = r(1070),
                s = r(4095),
                u = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i);
            let c = i.forwardRef(function(e, t) {
                let {
                    href: r,
                    locale: c,
                    localeCookie: f,
                    localePrefixMode: d,
                    prefix: h,
                    ...p
                } = e, m = o.usePathname(), g = a.default(), v = c !== g, [b, y] = i.useState(() => l.isLocalizableHref(r) && ("never" !== d || v) ? l.prefixHref(r, h) : r);
                return i.useEffect(() => {
                    m && y(l.localizeHref(r, c, g, m, h))
                }, [g, r, c, m, h]), u.default.createElement(s.default, n.extends({
                    ref: t,
                    href: b,
                    locale: c,
                    localeCookie: f
                }, p))
            });
            c.displayName = "ClientLink", t.default = c
        },
        4126: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(8175),
                o = r(6046),
                i = r(2115),
                a = r(9860),
                l = r(1070),
                s = r(4095),
                u = r(5923),
                c = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i);
            t.default = function(e, t) {
                let r = a.receiveRoutingConfig(t || {}),
                    f = r.pathnames,
                    d = "as-needed" === r.localePrefix.mode && r.domains || void 0,
                    h = i.forwardRef(function(t, o) {
                        let a, u, {
                            href: h,
                            locale: m,
                            ...g
                        } = t;
                        "object" == typeof h ? (a = h.pathname, u = h.params) : a = h;
                        let v = l.isLocalizableHref(h),
                            b = e(),
                            y = b instanceof Promise ? i.use(b) : b,
                            E = v ? p({
                                locale: m || y,
                                href: null == f ? a : {
                                    pathname: a,
                                    params: u
                                }
                            }, null != m || d || void 0) : a;
                        return c.default.createElement(s.default, n.extends({
                            ref: o,
                            defaultLocale: r.defaultLocale,
                            href: "object" == typeof h ? {
                                ...h,
                                pathname: E
                            } : E,
                            locale: m,
                            localeCookie: r.localeCookie,
                            unprefixed: d && v ? {
                                domains: r.domains.reduce((e, t) => (e[t.domain] = t.defaultLocale, e), {}),
                                pathname: p({
                                    locale: y,
                                    href: null == f ? a : {
                                        pathname: a,
                                        params: u
                                    }
                                }, !1)
                            } : void 0
                        }, g))
                    });

                function p(e, t) {
                    let n;
                    let {
                        href: o,
                        locale: i
                    } = e;
                    return null == f ? "object" == typeof o ? (n = o.pathname, o.query && (n += u.serializeSearchParams(o.query))) : n = o : n = u.compileLocalizedPathname({
                        locale: i,
                        ...u.normalizeNameOrNameWithParams(o),
                        pathnames: r.pathnames
                    }), u.applyPathnamePrefix(n, i, r, e.domain, t)
                }

                function m(e) {
                    return function(t) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return e(p(t, t.domain ? void 0 : d), ...n)
                    }
                }
                return {
                    config: r,
                    Link: h,
                    redirect: m(o.redirect),
                    permanentRedirect: m(o.permanentRedirect),
                    getPathname: p
                }
            }
        },
        4487: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6046),
                o = r(1070);

            function i(e) {
                return function(t) {
                    let r = o.getLocalePrefix(t.locale, t.localePrefix),
                        n = "never" !== t.localePrefix.mode && o.isLocalizableHref(t.pathname) ? o.prefixPathname(r, t.pathname) : t.pathname;
                    for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) a[l - 1] = arguments[l];
                    return e(n, ...a)
                }
            }
            let a = i(n.redirect),
                l = i(n.permanentRedirect);
            t.basePermanentRedirect = l, t.baseRedirect = a
        },
        7657: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(5923);
            t.default = function(e, t, r, o) {
                if (!e || !(o !== r && null != o) || !t) return;
                let i = n.getBasePath(t),
                    {
                        name: a,
                        ...l
                    } = e;
                l.path || (l.path = "" !== i ? i : "/");
                let s = "".concat(a, "=").concat(o, ";");
                for (let [e, t] of Object.entries(l)) s += "".concat("maxAge" === e ? "max-age" : e), "boolean" != typeof t && (s += "=" + t), s += ";";
                document.cookie = s
            }
        },
        5923: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(1070);

            function o(e) {
                let t = new URLSearchParams;
                for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
                    t.append(r, String(e))
                }) : t.set(r, String(n));
                return "?" + t.toString()
            }
            t.applyPathnamePrefix = function(e, t, r, o, i) {
                let a;
                let {
                    mode: l
                } = r.localePrefix;
                if (void 0 !== i) a = i;
                else if (n.isLocalizableHref(e)) {
                    if ("always" === l) a = !0;
                    else if ("as-needed" === l) {
                        let e = r.defaultLocale;
                        if (r.domains) {
                            let t = r.domains.find(e => e.domain === o);
                            t && (e = t.defaultLocale)
                        }
                        a = e !== t
                    }
                }
                return a ? n.prefixPathname(n.getLocalePrefix(t, r.localePrefix), e) : e
            }, t.compileLocalizedPathname = function(e) {
                let {
                    pathname: t,
                    locale: r,
                    params: i,
                    pathnames: a,
                    query: l
                } = e;

                function s(e) {
                    let t = a[e];
                    return t || (t = e), t
                }

                function u(e) {
                    let t = "string" == typeof e ? e : e[r];
                    return i && Object.entries(i).forEach(e => {
                        let r, n, [o, i] = e;
                        Array.isArray(i) ? (r = "(\\[)?\\[...".concat(o, "\\](\\])?"), n = i.map(e => String(e)).join("/")) : (r = "\\[".concat(o, "\\]"), n = String(i)), t = t.replace(RegExp(r, "g"), n)
                    }), t = t.replace(/\[\[\.\.\..+\]\]/g, ""), t = n.normalizeTrailingSlash(t), l && (t += o(l)), t
                }
                if ("string" == typeof t) return u(s(t));
                {
                    let {
                        pathname: e,
                        ...r
                    } = t;
                    return {
                        ...r,
                        pathname: u(s(e))
                    }
                }
            }, t.getBasePath = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
                return "/" === e ? t : t.replace(e, "")
            }, t.getRoute = function(e, t, r) {
                let o = n.getSortedPathnames(Object.keys(r)),
                    i = decodeURI(t);
                for (let t of o) {
                    let o = r[t];
                    if ("string" == typeof o) {
                        if (n.matchesPathname(o, i)) return t
                    } else if (n.matchesPathname(o[e], i)) return t
                }
                return t
            }, t.normalizeNameOrNameWithParams = function(e) {
                return "string" == typeof e ? {
                    pathname: e
                } : e
            }, t.serializeSearchParams = o
        },
        407: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9735);

            function o(e, t) {
                return function() {
                    try {
                        return t(...arguments)
                    } catch (e) {
                        throw Error(void 0)
                    }
                }
            }
            let i = o(0, n.useTranslations),
                a = o(0, n.useFormatter);
            t.useFormatter = a, t.useTranslations = i, Object.keys(n).forEach(function(e) {
                "default" === e || Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                })
            })
        },
        7430: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6046),
                o = r(2343),
                i = r(3582);
            t.default = function() {
                let e;
                let t = n.useParams();
                try {
                    e = o.useLocale()
                } catch (r) {
                    if ("string" != typeof(null == t ? void 0 : t[i.LOCALE_SEGMENT_NAME])) throw r;
                    e = t[i.LOCALE_SEGMENT_NAME]
                }
                return e
            }
        },
        5433: (e, t, r) => {
            var n = r(7645);
            t.o = n.default
        },
        9860: (e, t) => {
            function r(e) {
                return !(null != e && !e) && {
                    name: "NEXT_LOCALE",
                    maxAge: 31536e3,
                    sameSite: "lax",
                    ..."object" == typeof e && e
                }
            }

            function n(e) {
                return "object" == typeof e ? e : {
                    mode: e || "always"
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.receiveLocaleCookie = r, t.receiveLocalePrefixConfig = n, t.receiveRoutingConfig = function(e) {
                var t, o;
                return {
                    ...e,
                    localePrefix: n(e.localePrefix),
                    localeCookie: r(e.localeCookie),
                    localeDetection: null === (t = e.localeDetection) || void 0 === t || t,
                    alternateLinks: null === (o = e.alternateLinks) || void 0 === o || o
                }
            }
        },
        7645: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return e
            }
        },
        4773: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(8175),
                o = r(2115),
                i = r(4496),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o);
            t.default = function(e) {
                let {
                    locale: t,
                    ...r
                } = e;
                if (!t) throw Error(void 0);
                return a.default.createElement(i.IntlProvider, n.extends({
                    locale: t
                }, r))
            }
        },
        3582: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", t.LOCALE_SEGMENT_NAME = "locale"
        },
        1070: (e, t) => {
            function r(e) {
                return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && ! function(e) {
                    let t = "object" == typeof e ? e.pathname : e;
                    return null != t && !t.startsWith("/")
                }(e)
            }

            function n(e, t) {
                let r;
                return "string" == typeof e ? r = o(t, e) : (r = {
                    ...e
                }, e.pathname && (r.pathname = o(t, e.pathname))), r
            }

            function o(e, t) {
                let r = e;
                return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), r += t
            }

            function i(e, t) {
                return t === e || t.startsWith("".concat(e, "/"))
            }

            function a(e) {
                let t = function() {
                    try {
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                if ("/" !== e) {
                    let r = e.endsWith("/");
                    t && !r ? e += "/" : !t && r && (e = e.slice(0, -1))
                }
                return e
            }

            function l(e) {
                return "/" + e
            }

            function s(e) {
                let t = e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
                return new RegExp("^".concat(t, "$"))
            }

            function u(e) {
                return e.includes("[[...")
            }

            function c(e) {
                return e.includes("[...")
            }

            function f(e) {
                return e.includes("[")
            }

            function d(e, t) {
                let r = e.split("/"),
                    n = t.split("/"),
                    o = Math.max(r.length, n.length);
                for (let e = 0; e < o; e++) {
                    let t = r[e],
                        o = n[e];
                    if (!t && o) return -1;
                    if (t && !o) return 1;
                    if (t || o) {
                        if (!f(t) && f(o)) return -1;
                        if (f(t) && !f(o)) return 1;
                        if (!c(t) && c(o)) return -1;
                        if (c(t) && !c(o)) return 1;
                        if (!u(t) && u(o)) return -1;
                        if (u(t) && !u(o)) return 1
                    }
                }
                return 0
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocaleAsPrefix = l, t.getLocalePrefix = function(e, t) {
                var r;
                return "never" !== t.mode && (null === (r = t.prefixes) || void 0 === r ? void 0 : r[e]) || l(e)
            }, t.getSortedPathnames = function(e) {
                return e.sort(d)
            }, t.hasPathnamePrefixed = i, t.isLocalizableHref = r, t.localizeHref = function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    l = arguments.length > 4 ? arguments[4] : void 0;
                if (!r(e)) return e;
                let s = i(l, a);
                return (t !== o || s) && null != l ? n(e, l) : e
            }, t.matchesPathname = function(e, t) {
                let r = a(e),
                    n = a(t);
                return s(r).test(n)
            }, t.normalizeTrailingSlash = a, t.prefixHref = n, t.prefixPathname = o, t.templateToRegex = s, t.unprefixPathname = function(e, t) {
                return e.replace(new RegExp("^".concat(t)), "") || "/"
            }
        },
        8545: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r(2115);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = ["cdnSuffix", "cdnUrl", "countryCode", "style", "svg"];
            let a = function(e) {
                var t = e.cdnSuffix,
                    r = e.cdnUrl,
                    a = e.countryCode,
                    l = e.style,
                    s = e.svg,
                    u = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, i);
                if ("string" != typeof a) return null;
                if (void 0 !== s && s) {
                    var c = "" + (void 0 === r ? "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/" : r) + a.toLowerCase() + "." + (void 0 === t ? "svg" : t);
                    return (0, n.createElement)("img", Object.assign({}, u, {
                        src: c,
                        style: o({
                            display: "inline-block",
                            width: "1em",
                            height: "1em",
                            verticalAlign: "middle"
                        }, l)
                    }))
                }
                var f = a.toUpperCase().replace(/./g, function(e) {
                    return String.fromCodePoint(e.charCodeAt(0) + 127397)
                });
                return (0, n.createElement)("span", Object.assign({
                    role: "img"
                }, u, {
                    style: o({
                        display: "inline-block",
                        fontSize: "1em",
                        lineHeight: "1em",
                        verticalAlign: "middle"
                    }, l)
                }), f)
            }
        },
        4496: (e, t, r) => {
            e.exports = r(7878)
        },
        2343: (e, t, r) => {
            e.exports = r(985)
        },
        9735: (e, t, r) => {
            e.exports = r(4281)
        },
        7392: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(7646),
                o = r(3398);
            r(5049), r(2115), r(1535), t.IntlError = n.IntlError, t.IntlErrorCode = n.IntlErrorCode, t.createFormatter = n.createFormatter, t._createCache = o.createCache, t._createIntlFormatters = o.createIntlFormatters, t.initializeConfig = o.initializeConfig, t.createTranslator = function(e) {
                let {
                    _cache: t = o.createCache(),
                    _formatters: r = o.createIntlFormatters(t),
                    getMessageFallback: i = o.defaultGetMessageFallback,
                    messages: a,
                    namespace: l,
                    onError: s = o.defaultOnError,
                    ...u
                } = e;
                return function(e, t) {
                    let {
                        messages: r,
                        namespace: o,
                        ...i
                    } = e;
                    return r = r["!"], o = n.resolveNamespace(o, "!"), n.createBaseTranslator({
                        ...i,
                        messages: r,
                        namespace: o
                    })
                }({
                    ...u,
                    onError: s,
                    cache: t,
                    formatters: r,
                    getMessageFallback: i,
                    messages: {
                        "!": a
                    },
                    namespace: l ? "!.".concat(l) : "!"
                }, 0)
            }
        },
        7646: (e, t, r) => {
            var n = r(5049),
                o = r(2115),
                i = r(3398),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n);

            function l(e, t, r) {
                var n;
                return (t = "symbol" == typeof(n = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? n : n + "") in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            let s = function(e) {
                return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e
            }({});
            class u extends Error {
                constructor(e, t) {
                    let r = e;
                    t && (r += ": " + t), super(r), l(this, "code", void 0), l(this, "originalMessage", void 0), this.code = e, t && (this.originalMessage = t)
                }
            }

            function c(e, t) {
                return e ? Object.keys(e).reduce((r, n) => (r[n] = {
                    timeZone: t,
                    ...e[n]
                }, r), {}) : e
            }

            function f(e, t, r, n) {
                let o = i.joinPath(n, r);
                if (!t) throw Error(o);
                let a = t;
                return r.split(".").forEach(t => {
                    let r = a[t];
                    if (null == t || null == r) throw Error(o + " (".concat(e, ")"));
                    a = r
                }), a
            }
            let d = 365 / 12 * 86400,
                h = {
                    second: 1,
                    seconds: 1,
                    minute: 60,
                    minutes: 60,
                    hour: 3600,
                    hours: 3600,
                    day: 86400,
                    days: 86400,
                    week: 604800,
                    weeks: 604800,
                    month: 365 / 12 * 86400,
                    months: 365 / 12 * 86400,
                    quarter: 365 / 12 * 259200,
                    quarters: 365 / 12 * 259200,
                    year: 31536e3,
                    years: 31536e3
                };
            t.IntlError = u, t.IntlErrorCode = s, t.createBaseTranslator = function(e) {
                let t = function(e, t, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.defaultOnError;
                    try {
                        if (!t) throw Error(void 0);
                        let n = r ? f(e, t, r) : t;
                        if (!n) throw Error(r);
                        return n
                    } catch (t) {
                        let e = new u(s.MISSING_MESSAGE, t.message);
                        return n(e), e
                    }
                }(e.locale, e.messages, e.namespace, e.onError);
                return function(e) {
                    let {
                        cache: t,
                        defaultTranslationValues: r,
                        formats: n,
                        formatters: l,
                        getMessageFallback: d = i.defaultGetMessageFallback,
                        locale: h,
                        messagesOrError: p,
                        namespace: m,
                        onError: g,
                        timeZone: v
                    } = e, b = p instanceof u;

                    function y(e, t, r) {
                        let n = new u(t, r);
                        return g(n), d({
                            error: n,
                            key: e,
                            namespace: m
                        })
                    }

                    function E(e, u, g) {
                        let E, w;
                        if (b) return d({
                            error: p,
                            key: e,
                            namespace: m
                        });
                        try {
                            E = f(h, p, e, m)
                        } catch (t) {
                            return y(e, s.MISSING_MESSAGE, t.message)
                        }
                        if ("object" == typeof E) {
                            let t;
                            return y(e, Array.isArray(E) ? s.INVALID_MESSAGE : s.INSUFFICIENT_PATH, t)
                        }
                        let x = function(e, t) {
                            if (t) return;
                            let r = e.replace(/'([{}])/gi, "$1");
                            return /<|{/.test(r) ? void 0 : r
                        }(E, u);
                        if (x) return x;
                        l.getMessageFormat || (l.getMessageFormat = i.memoFn(function() {
                            return new a.default(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], {
                                formatters: l,
                                ...arguments.length <= 3 ? void 0 : arguments[3]
                            })
                        }, t.message));
                        try {
                            w = l.getMessageFormat(E, h, function(e, t) {
                                let r = t ? {
                                        ...e,
                                        dateTime: c(e.dateTime, t)
                                    } : e,
                                    n = a.default.formats.date,
                                    o = t ? c(n, t) : n,
                                    i = a.default.formats.time,
                                    l = t ? c(i, t) : i;
                                return {
                                    ...r,
                                    date: {
                                        ...o,
                                        ...r.dateTime
                                    },
                                    time: {
                                        ...l,
                                        ...r.dateTime
                                    }
                                }
                            }({
                                ...n,
                                ...g
                            }, v), {
                                formatters: {
                                    ...l,
                                    getDateTimeFormat: (e, t) => l.getDateTimeFormat(e, {
                                        timeZone: v,
                                        ...t
                                    })
                                }
                            })
                        } catch (t) {
                            return y(e, s.INVALID_MESSAGE, t.message)
                        }
                        try {
                            let e = w.format(function(e) {
                                if (0 === Object.keys(e).length) return;
                                let t = {};
                                return Object.keys(e).forEach(r => {
                                    let n, i = 0,
                                        a = e[r];
                                    n = "function" == typeof a ? e => {
                                        let t = a(e);
                                        return o.isValidElement(t) ? o.cloneElement(t, {
                                            key: r + i++
                                        }) : t
                                    } : a, t[r] = n
                                }), t
                            }({
                                ...r,
                                ...u
                            }));
                            if (null == e) throw Error(void 0);
                            return o.isValidElement(e) || Array.isArray(e) || "string" == typeof e ? e : String(e)
                        } catch (t) {
                            return y(e, s.FORMATTING_ERROR, t.message)
                        }
                    }

                    function w(e, t, r) {
                        let n = E(e, t, r);
                        return "string" != typeof n ? y(e, s.INVALID_MESSAGE, void 0) : n
                    }
                    return w.rich = E, w.markup = (e, t, r) => {
                        let n = E(e, t, r);
                        if ("string" != typeof n) {
                            let t = new u(s.FORMATTING_ERROR, void 0);
                            return g(t), d({
                                error: t,
                                key: e,
                                namespace: m
                            })
                        }
                        return n
                    }, w.raw = e => {
                        if (b) return d({
                            error: p,
                            key: e,
                            namespace: m
                        });
                        try {
                            return f(h, p, e, m)
                        } catch (t) {
                            return y(e, s.MISSING_MESSAGE, t.message)
                        }
                    }, w.has = e => {
                        if (b) return !1;
                        try {
                            return f(h, p, e, m), !0
                        } catch (e) {
                            return !1
                        }
                    }, w
                }({
                    ...e,
                    messagesOrError: t
                })
            }, t.createFormatter = function(e) {
                let {
                    _cache: t = i.createCache(),
                    _formatters: r = i.createIntlFormatters(t),
                    formats: n,
                    locale: o,
                    now: a,
                    onError: l = i.defaultOnError,
                    timeZone: c
                } = e;

                function f(e) {
                    var t;
                    return null !== (t = e) && void 0 !== t && t.timeZone || (c ? e = {
                        ...e,
                        timeZone: c
                    } : l(new u(s.ENVIRONMENT_FALLBACK, void 0))), e
                }

                function p(e, t, r, n) {
                    let o;
                    try {
                        o = function(e, t) {
                            let r;
                            if ("string" == typeof t) {
                                if (!(r = null == e ? void 0 : e[t])) {
                                    let e = new u(s.MISSING_FORMAT, void 0);
                                    throw l(e), e
                                }
                            } else r = t;
                            return r
                        }(t, e)
                    } catch (e) {
                        return n()
                    }
                    try {
                        return r(o)
                    } catch (e) {
                        return l(new u(s.FORMATTING_ERROR, e.message)), n()
                    }
                }

                function m(e, t) {
                    return p(t, null == n ? void 0 : n.dateTime, t => (t = f(t), r.getDateTimeFormat(o, t).format(e)), () => String(e))
                }

                function g() {
                    return a || (l(new u(s.ENVIRONMENT_FALLBACK, void 0)), new Date)
                }
                return {
                    dateTime: m,
                    number: function(e, t) {
                        return p(t, null == n ? void 0 : n.number, t => r.getNumberFormat(o, t).format(e), () => String(e))
                    },
                    relativeTime: function(e, t) {
                        try {
                            var n;
                            let i, a;
                            let l = {};
                            t instanceof Date || "number" == typeof t ? i = new Date(t) : t && (i = null != t.now ? new Date(t.now) : g(), a = t.unit, l.style = t.style, l.numberingSystem = t.numberingSystem), i || (i = g());
                            let s = (new Date(e).getTime() - i.getTime()) / 1e3;
                            a || (a = function(e) {
                                let t = Math.abs(e);
                                return t < 60 ? "second" : t < 3600 ? "minute" : t < 86400 ? "hour" : t < 604800 ? "day" : t < d ? "week" : t < 31536e3 ? "month" : "year"
                            }(s)), l.numeric = "second" === a ? "auto" : "always";
                            let u = (n = a, Math.round(s / h[n]));
                            return r.getRelativeTimeFormat(o, l).format(u, a)
                        } catch (t) {
                            return l(new u(s.FORMATTING_ERROR, t.message)), String(e)
                        }
                    },
                    list: function(e, t) {
                        let i = [],
                            a = new Map,
                            l = 0;
                        for (let t of e) {
                            let e;
                            "object" == typeof t ? (e = String(l), a.set(e, t)) : e = String(t), i.push(e), l++
                        }
                        return p(t, null == n ? void 0 : n.list, e => {
                            let t = r.getListFormat(o, e).formatToParts(i).map(e => "literal" === e.type ? e.value : a.get(e.value) || e.value);
                            return a.size > 0 ? t : t.join("")
                        }, () => String(e))
                    },
                    dateTimeRange: function(e, t, i) {
                        return p(i, null == n ? void 0 : n.dateTime, n => (n = f(n), r.getDateTimeFormat(o, n).formatRange(e, t)), () => [m(e), m(t)].join(" – "))
                    }
                }
            }, t.resolveNamespace = function(e, t) {
                return e === t ? void 0 : e.slice((t + ".").length)
            }
        },
        4281: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(7646),
                o = r(7392),
                i = r(3398),
                a = r(7878),
                l = r(7994),
                s = r(310);
            r(5049), r(2115), r(1535), r(3351), t.IntlError = n.IntlError, t.IntlErrorCode = n.IntlErrorCode, t.createFormatter = n.createFormatter, t.createTranslator = o.createTranslator, t._createCache = i.createCache, t._createIntlFormatters = i.createIntlFormatters, t.initializeConfig = i.initializeConfig, t.IntlProvider = a.IntlProvider, t.useFormatter = l.useFormatter, t.useMessages = l.useMessages, t.useNow = l.useNow, t.useTimeZone = l.useTimeZone, t.useTranslations = l.useTranslations, t.useLocale = s.useLocale
        },
        7994: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(7878),
                o = r(310),
                i = r(2115),
                a = r(7646);
            r(3398), r(1535), r(3351), r(5049);
            let l = !1,
                s = "undefined" == typeof window;
            t.IntlProvider = n.IntlProvider, t.useLocale = o.useLocale, t.useFormatter = function() {
                let {
                    formats: e,
                    formatters: t,
                    locale: r,
                    now: n,
                    onError: l,
                    timeZone: s
                } = o.useIntlContext();
                return i.useMemo(() => a.createFormatter({
                    formats: e,
                    locale: r,
                    now: n,
                    onError: l,
                    timeZone: s,
                    _formatters: t
                }), [e, t, n, r, l, s])
            }, t.useMessages = function() {
                let e = o.useIntlContext();
                if (!e.messages) throw Error(void 0);
                return e.messages
            }, t.useNow = function(e) {
                let t = null == e ? void 0 : e.updateInterval,
                    {
                        now: r
                    } = o.useIntlContext(),
                    [n, a] = i.useState(r || new Date);
                return i.useEffect(() => {
                    if (!t) return;
                    let e = setInterval(() => {
                        a(new Date)
                    }, t);
                    return () => {
                        clearInterval(e)
                    }
                }, [r, t]), null == t && r ? r : n
            }, t.useTimeZone = function() {
                return o.useIntlContext().timeZone
            }, t.useTranslations = function(e) {
                return function(e, t, r) {
                    let {
                        cache: n,
                        defaultTranslationValues: u,
                        formats: c,
                        formatters: f,
                        getMessageFallback: d,
                        locale: h,
                        onError: p,
                        timeZone: m
                    } = o.useIntlContext(), g = e["!"], v = a.resolveNamespace(t, "!");
                    return m || l || !s || (l = !0, p(new a.IntlError(a.IntlErrorCode.ENVIRONMENT_FALLBACK, void 0))), i.useMemo(() => a.createBaseTranslator({
                        cache: n,
                        formatters: f,
                        getMessageFallback: d,
                        messages: g,
                        defaultTranslationValues: u,
                        namespace: v,
                        onError: p,
                        formats: c,
                        locale: h,
                        timeZone: m
                    }), [n, f, d, g, u, v, p, c, h, m])
                }({
                    "!": o.useIntlContext().messages
                }, e ? "!.".concat(e) : "!", 0)
            }
        },
        7339: (e, t, r) => {
            r.d(t, {
                ll: () => P,
                rD: () => C,
                __: () => _,
                UU: () => A,
                cY: () => T,
                BN: () => S,
                Ej: () => L
            });
            var n = r(9590);

            function o(e, t, r) {
                let o, {
                        reference: i,
                        floating: a
                    } = e,
                    l = (0, n.TV)(t),
                    s = (0, n.Dz)(t),
                    u = (0, n.sq)(s),
                    c = (0, n.C0)(t),
                    f = "y" === l,
                    d = i.x + i.width / 2 - a.width / 2,
                    h = i.y + i.height / 2 - a.height / 2,
                    p = i[u] / 2 - a[u] / 2;
                switch (c) {
                    case "top":
                        o = {
                            x: d,
                            y: i.y - a.height
                        };
                        break;
                    case "bottom":
                        o = {
                            x: d,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        o = {
                            x: i.x + i.width,
                            y: h
                        };
                        break;
                    case "left":
                        o = {
                            x: i.x - a.width,
                            y: h
                        };
                        break;
                    default:
                        o = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch ((0, n.Sg)(t)) {
                    case "start":
                        o[s] -= p * (r && f ? -1 : 1);
                        break;
                    case "end":
                        o[s] += p * (r && f ? -1 : 1)
                }
                return o
            }
            let i = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: i = "absolute",
                    middleware: a = [],
                    platform: l
                } = r, s = a.filter(Boolean), u = await (null == l.isRTL ? void 0 : l.isRTL(t)), c = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }), {
                    x: f,
                    y: d
                } = o(c, n, u), h = n, p = {}, m = 0;
                for (let r = 0; r < s.length; r++) {
                    let {
                        name: a,
                        fn: g
                    } = s[r], {
                        x: v,
                        y: b,
                        data: y,
                        reset: E
                    } = await g({
                        x: f,
                        y: d,
                        initialPlacement: n,
                        placement: h,
                        strategy: i,
                        middlewareData: p,
                        rects: c,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    f = null != v ? v : f, d = null != b ? b : d, p = {
                        ...p,
                        [a]: {
                            ...p[a],
                            ...y
                        }
                    }, E && m <= 50 && (m++, "object" == typeof E && (E.placement && (h = E.placement), E.rects && (c = !0 === E.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: i
                    }) : E.rects), {
                        x: f,
                        y: d
                    } = o(c, h, u)), r = -1)
                }
                return {
                    x: f,
                    y: d,
                    placement: h,
                    strategy: i,
                    middlewareData: p
                }
            };
            async function a(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: o,
                    y: i,
                    platform: a,
                    rects: l,
                    elements: s,
                    strategy: u
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: f = "viewport",
                    elementContext: d = "floating",
                    altBoundary: h = !1,
                    padding: p = 0
                } = (0, n._3)(t, e), m = (0, n.nI)(p), g = s[h ? "floating" === d ? "reference" : "floating" : d], v = (0, n.B1)(await a.getClippingRect({
                    element: null == (r = await (null == a.isElement ? void 0 : a.isElement(g))) || r ? g : g.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(s.floating)),
                    boundary: c,
                    rootBoundary: f,
                    strategy: u
                })), b = "floating" === d ? {
                    x: o,
                    y: i,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, y = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating)), E = await (null == a.isElement ? void 0 : a.isElement(y)) && await (null == a.getScale ? void 0 : a.getScale(y)) || {
                    x: 1,
                    y: 1
                }, w = (0, n.B1)(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: s,
                    rect: b,
                    offsetParent: y,
                    strategy: u
                }) : b);
                return {
                    top: (v.top - w.top + m.top) / E.y,
                    bottom: (w.bottom - v.bottom + m.bottom) / E.y,
                    left: (v.left - w.left + m.left) / E.x,
                    right: (w.right - v.right + m.right) / E.x
                }
            }
            async function l(e, t) {
                let {
                    placement: r,
                    platform: o,
                    elements: i
                } = e, a = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), l = (0, n.C0)(r), s = (0, n.Sg)(r), u = "y" === (0, n.TV)(r), c = ["left", "top"].includes(l) ? -1 : 1, f = a && u ? -1 : 1, d = (0, n._3)(t, e), {
                    mainAxis: h,
                    crossAxis: p,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                };
                return s && "number" == typeof m && (p = "end" === s ? -1 * m : m), u ? {
                    x: p * f,
                    y: h * c
                } : {
                    x: h * c,
                    y: p * f
                }
            }
            var s = r(5640);

            function u(e) {
                let t = (0, s.L9)(e),
                    r = parseFloat(t.width) || 0,
                    o = parseFloat(t.height) || 0,
                    i = (0, s.sb)(e),
                    a = i ? e.offsetWidth : r,
                    l = i ? e.offsetHeight : o,
                    u = (0, n.LI)(r) !== a || (0, n.LI)(o) !== l;
                return u && (r = a, o = l), {
                    width: r,
                    height: o,
                    $: u
                }
            }

            function c(e) {
                return (0, s.vq)(e) ? e : e.contextElement
            }

            function f(e) {
                let t = c(e);
                if (!(0, s.sb)(t)) return (0, n.Jx)(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: o,
                        height: i,
                        $: a
                    } = u(t),
                    l = (a ? (0, n.LI)(r.width) : r.width) / o,
                    f = (a ? (0, n.LI)(r.height) : r.height) / i;
                return l && Number.isFinite(l) || (l = 1), f && Number.isFinite(f) || (f = 1), {
                    x: l,
                    y: f
                }
            }
            let d = (0, n.Jx)(0);

            function h(e) {
                let t = (0, s.zk)(e);
                return (0, s.Tc)() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : d
            }

            function p(e, t, r, o) {
                var i;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let a = e.getBoundingClientRect(),
                    l = c(e),
                    u = (0, n.Jx)(1);
                t && (o ? (0, s.vq)(o) && (u = f(o)) : u = f(e));
                let d = (void 0 === (i = r) && (i = !1), o && (!i || o === (0, s.zk)(l)) && i) ? h(l) : (0, n.Jx)(0),
                    p = (a.left + d.x) / u.x,
                    m = (a.top + d.y) / u.y,
                    g = a.width / u.x,
                    v = a.height / u.y;
                if (l) {
                    let e = (0, s.zk)(l),
                        t = o && (0, s.vq)(o) ? (0, s.zk)(o) : o,
                        r = e,
                        n = (0, s._m)(r);
                    for (; n && o && t !== r;) {
                        let e = f(n),
                            t = n.getBoundingClientRect(),
                            o = (0, s.L9)(n),
                            i = t.left + (n.clientLeft + parseFloat(o.paddingLeft)) * e.x,
                            a = t.top + (n.clientTop + parseFloat(o.paddingTop)) * e.y;
                        p *= e.x, m *= e.y, g *= e.x, v *= e.y, p += i, m += a, r = (0, s.zk)(n), n = (0, s._m)(r)
                    }
                }
                return (0, n.B1)({
                    width: g,
                    height: v,
                    x: p,
                    y: m
                })
            }

            function m(e, t) {
                let r = (0, s.CP)(e).scrollLeft;
                return t ? t.left + r : p((0, s.ep)(e)).left + r
            }

            function g(e, t, r) {
                void 0 === r && (r = !1);
                let n = e.getBoundingClientRect();
                return {
                    x: n.left + t.scrollLeft - (r ? 0 : m(e, n)),
                    y: n.top + t.scrollTop
                }
            }

            function v(e, t, r) {
                let o;
                if ("viewport" === t) o = function(e, t) {
                    let r = (0, s.zk)(e),
                        n = (0, s.ep)(e),
                        o = r.visualViewport,
                        i = n.clientWidth,
                        a = n.clientHeight,
                        l = 0,
                        u = 0;
                    if (o) {
                        i = o.width, a = o.height;
                        let e = (0, s.Tc)();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: l,
                        y: u
                    }
                }(e, r);
                else if ("document" === t) o = function(e) {
                    let t = (0, s.ep)(e),
                        r = (0, s.CP)(e),
                        o = e.ownerDocument.body,
                        i = (0, n.T9)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
                        a = (0, n.T9)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight),
                        l = -r.scrollLeft + m(e),
                        u = -r.scrollTop;
                    return "rtl" === (0, s.L9)(o).direction && (l += (0, n.T9)(t.clientWidth, o.clientWidth) - i), {
                        width: i,
                        height: a,
                        x: l,
                        y: u
                    }
                }((0, s.ep)(e));
                else if ((0, s.vq)(t)) o = function(e, t) {
                    let r = p(e, !0, "fixed" === t),
                        o = r.top + e.clientTop,
                        i = r.left + e.clientLeft,
                        a = (0, s.sb)(e) ? f(e) : (0, n.Jx)(1),
                        l = e.clientWidth * a.x;
                    return {
                        width: l,
                        height: e.clientHeight * a.y,
                        x: i * a.x,
                        y: o * a.y
                    }
                }(t, r);
                else {
                    let r = h(e);
                    o = {
                        x: t.x - r.x,
                        y: t.y - r.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return (0, n.B1)(o)
            }

            function b(e) {
                return "static" === (0, s.L9)(e).position
            }

            function y(e, t) {
                if (!(0, s.sb)(e) || "fixed" === (0, s.L9)(e).position) return null;
                if (t) return t(e);
                let r = e.offsetParent;
                return (0, s.ep)(e) === r && (r = r.ownerDocument.body), r
            }

            function E(e, t) {
                let r = (0, s.zk)(e);
                if ((0, s.Tf)(e)) return r;
                if (!(0, s.sb)(e)) {
                    let t = (0, s.$4)(e);
                    for (; t && !(0, s.eu)(t);) {
                        if ((0, s.vq)(t) && !b(t)) return t;
                        t = (0, s.$4)(t)
                    }
                    return r
                }
                let n = y(e, t);
                for (; n && (0, s.Lv)(n) && b(n);) n = y(n, t);
                return n && (0, s.eu)(n) && b(n) && !(0, s.sQ)(n) ? r : n || (0, s.gJ)(e) || r
            }
            let w = async function(e) {
                let t = this.getOffsetParent || E,
                    r = this.getDimensions,
                    o = await r(e.floating);
                return {
                    reference: function(e, t, r) {
                        let o = (0, s.sb)(t),
                            i = (0, s.ep)(t),
                            a = "fixed" === r,
                            l = p(e, !0, a, t),
                            u = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = (0, n.Jx)(0);
                        if (o || !o && !a) {
                            if (("body" !== (0, s.mq)(t) || (0, s.ZU)(i)) && (u = (0, s.CP)(t)), o) {
                                let e = p(t, !0, a, t);
                                c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                            } else i && (c.x = m(i))
                        }
                        let f = !i || o || a ? (0, n.Jx)(0) : g(i, u);
                        return {
                            x: l.left + u.scrollLeft - c.x - f.x,
                            y: l.top + u.scrollTop - c.y - f.y,
                            width: l.width,
                            height: l.height
                        }
                    }(e.reference, await t(e.floating), e.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: o.width,
                        height: o.height
                    }
                }
            }, x = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        elements: t,
                        rect: r,
                        offsetParent: o,
                        strategy: i
                    } = e, a = "fixed" === i, l = (0, s.ep)(o), u = !!t && (0, s.Tf)(t.floating);
                    if (o === l || u && a) return r;
                    let c = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        d = (0, n.Jx)(1),
                        h = (0, n.Jx)(0),
                        m = (0, s.sb)(o);
                    if ((m || !m && !a) && (("body" !== (0, s.mq)(o) || (0, s.ZU)(l)) && (c = (0, s.CP)(o)), (0, s.sb)(o))) {
                        let e = p(o);
                        d = f(o), h.x = e.x + o.clientLeft, h.y = e.y + o.clientTop
                    }
                    let v = !l || m || a ? (0, n.Jx)(0) : g(l, c, !0);
                    return {
                        width: r.width * d.x,
                        height: r.height * d.y,
                        x: r.x * d.x - c.scrollLeft * d.x + h.x + v.x,
                        y: r.y * d.y - c.scrollTop * d.y + h.y + v.y
                    }
                },
                getDocumentElement: s.ep,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: r,
                        rootBoundary: o,
                        strategy: i
                    } = e, a = [..."clippingAncestors" === r ? (0, s.Tf)(t) ? [] : function(e, t) {
                        let r = t.get(e);
                        if (r) return r;
                        let n = (0, s.v9)(e, [], !1).filter(e => (0, s.vq)(e) && "body" !== (0, s.mq)(e)),
                            o = null,
                            i = "fixed" === (0, s.L9)(e).position,
                            a = i ? (0, s.$4)(e) : e;
                        for (;
                            (0, s.vq)(a) && !(0, s.eu)(a);) {
                            let t = (0, s.L9)(a),
                                r = (0, s.sQ)(a);
                            r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || (0, s.ZU)(a) && !r && function e(t, r) {
                                let n = (0, s.$4)(t);
                                return !(n === r || !(0, s.vq)(n) || (0, s.eu)(n)) && ("fixed" === (0, s.L9)(n).position || e(n, r))
                            }(e, a)) ? n = n.filter(e => e !== a) : o = t, a = (0, s.$4)(a)
                        }
                        return t.set(e, n), n
                    }(t, this._c) : [].concat(r), o], l = a[0], u = a.reduce((e, r) => {
                        let o = v(t, r, i);
                        return e.top = (0, n.T9)(o.top, e.top), e.right = (0, n.jk)(o.right, e.right), e.bottom = (0, n.jk)(o.bottom, e.bottom), e.left = (0, n.T9)(o.left, e.left), e
                    }, v(t, l, i));
                    return {
                        width: u.right - u.left,
                        height: u.bottom - u.top,
                        x: u.left,
                        y: u.top
                    }
                },
                getOffsetParent: E,
                getElementRects: w,
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    let {
                        width: t,
                        height: r
                    } = u(e);
                    return {
                        width: t,
                        height: r
                    }
                },
                getScale: f,
                isElement: s.vq,
                isRTL: function(e) {
                    return "rtl" === (0, s.L9)(e).direction
                }
            };

            function P(e, t, r, o) {
                let i;
                void 0 === o && (o = {});
                let {
                    ancestorScroll: a = !0,
                    ancestorResize: l = !0,
                    elementResize: u = "function" == typeof ResizeObserver,
                    layoutShift: f = "function" == typeof IntersectionObserver,
                    animationFrame: d = !1
                } = o, h = c(e), m = a || l ? [...h ? (0, s.v9)(h) : [], ...(0, s.v9)(t)] : [];
                m.forEach(e => {
                    a && e.addEventListener("scroll", r, {
                        passive: !0
                    }), l && e.addEventListener("resize", r)
                });
                let g = h && f ? function(e, t) {
                        let r, o = null,
                            i = (0, s.ep)(e);

                        function a() {
                            var e;
                            clearTimeout(r), null == (e = o) || e.disconnect(), o = null
                        }
                        return ! function l(s, u) {
                            void 0 === s && (s = !1), void 0 === u && (u = 1), a();
                            let {
                                left: c,
                                top: f,
                                width: d,
                                height: h
                            } = e.getBoundingClientRect();
                            if (s || t(), !d || !h) return;
                            let p = (0, n.RI)(f),
                                m = (0, n.RI)(i.clientWidth - (c + d)),
                                g = {
                                    rootMargin: -p + "px " + -m + "px " + -(0, n.RI)(i.clientHeight - (f + h)) + "px " + -(0, n.RI)(c) + "px",
                                    threshold: (0, n.T9)(0, (0, n.jk)(1, u)) || 1
                                },
                                v = !0;

                            function b(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== u) {
                                    if (!v) return l();
                                    t ? l(!1, t) : r = setTimeout(() => {
                                        l(!1, 1e-7)
                                    }, 1e3)
                                }
                                v = !1
                            }
                            try {
                                o = new IntersectionObserver(b, {
                                    ...g,
                                    root: i.ownerDocument
                                })
                            } catch (e) {
                                o = new IntersectionObserver(b, g)
                            }
                            o.observe(e)
                        }(!0), a
                    }(h, r) : null,
                    v = -1,
                    b = null;
                u && (b = new ResizeObserver(e => {
                    let [n] = e;
                    n && n.target === h && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
                        var e;
                        null == (e = b) || e.observe(t)
                    })), r()
                }), h && !d && b.observe(h), b.observe(t));
                let y = d ? p(e) : null;
                return d && function t() {
                    let n = p(e);
                    y && (n.x !== y.x || n.y !== y.y || n.width !== y.width || n.height !== y.height) && r(), y = n, i = requestAnimationFrame(t)
                }(), r(), () => {
                    var e;
                    m.forEach(e => {
                        a && e.removeEventListener("scroll", r), l && e.removeEventListener("resize", r)
                    }), null == g || g(), null == (e = b) || e.disconnect(), b = null, d && cancelAnimationFrame(i)
                }
            }
            let _ = a,
                T = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            var r, n;
                            let {
                                x: o,
                                y: i,
                                placement: a,
                                middlewareData: s
                            } = t, u = await l(t, e);
                            return a === (null == (r = s.offset) ? void 0 : r.placement) && null != (n = s.arrow) && n.alignmentOffset ? {} : {
                                x: o + u.x,
                                y: i + u.y,
                                data: {
                                    ...u,
                                    placement: a
                                }
                            }
                        }
                    }
                },
                S = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: r,
                                y: o,
                                placement: i
                            } = t, {
                                mainAxis: l = !0,
                                crossAxis: s = !1,
                                limiter: u = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: r
                                        } = e;
                                        return {
                                            x: t,
                                            y: r
                                        }
                                    }
                                },
                                ...c
                            } = (0, n._3)(e, t), f = {
                                x: r,
                                y: o
                            }, d = await a(t, c), h = (0, n.TV)((0, n.C0)(i)), p = (0, n.PG)(h), m = f[p], g = f[h];
                            if (l) {
                                let e = "y" === p ? "top" : "left",
                                    t = "y" === p ? "bottom" : "right",
                                    r = m + d[e],
                                    o = m - d[t];
                                m = (0, n.qE)(r, m, o)
                            }
                            if (s) {
                                let e = "y" === h ? "top" : "left",
                                    t = "y" === h ? "bottom" : "right",
                                    r = g + d[e],
                                    o = g - d[t];
                                g = (0, n.qE)(r, g, o)
                            }
                            let v = u.fn({
                                ...t,
                                [p]: m,
                                [h]: g
                            });
                            return {
                                ...v,
                                data: {
                                    x: v.x - r,
                                    y: v.y - o,
                                    enabled: {
                                        [p]: l,
                                        [h]: s
                                    }
                                }
                            }
                        }
                    }
                },
                A = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var r, o, i, l, s;
                            let {
                                placement: u,
                                middlewareData: c,
                                rects: f,
                                initialPlacement: d,
                                platform: h,
                                elements: p
                            } = t, {
                                mainAxis: m = !0,
                                crossAxis: g = !0,
                                fallbackPlacements: v,
                                fallbackStrategy: b = "bestFit",
                                fallbackAxisSideDirection: y = "none",
                                flipAlignment: E = !0,
                                ...w
                            } = (0, n._3)(e, t);
                            if (null != (r = c.arrow) && r.alignmentOffset) return {};
                            let x = (0, n.C0)(u),
                                P = (0, n.TV)(d),
                                _ = (0, n.C0)(d) === d,
                                T = await (null == h.isRTL ? void 0 : h.isRTL(p.floating)),
                                S = v || (_ || !E ? [(0, n.bV)(d)] : (0, n.WJ)(d)),
                                A = "none" !== y;
                            !v && A && S.push(...(0, n.lP)(d, E, y, T));
                            let L = [d, ...S],
                                C = await a(t, w),
                                M = [],
                                I = (null == (o = c.flip) ? void 0 : o.overflows) || [];
                            if (m && M.push(C[x]), g) {
                                let e = (0, n.w7)(u, f, T);
                                M.push(C[e[0]], C[e[1]])
                            }
                            if (I = [...I, {
                                    placement: u,
                                    overflows: M
                                }], !M.every(e => e <= 0)) {
                                let e = ((null == (i = c.flip) ? void 0 : i.index) || 0) + 1,
                                    t = L[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: I
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let r = null == (l = I.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : l.placement;
                                if (!r) switch (b) {
                                    case "bestFit": {
                                        let e = null == (s = I.filter(e => {
                                            if (A) {
                                                let t = (0, n.TV)(e.placement);
                                                return t === P || "y" === t
                                            }
                                            return !0
                                        }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : s[0];
                                        e && (r = e);
                                        break
                                    }
                                    case "initialPlacement":
                                        r = d
                                }
                                if (u !== r) return {
                                    reset: {
                                        placement: r
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                L = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            var r, o;
                            let i, l;
                            let {
                                placement: s,
                                rects: u,
                                platform: c,
                                elements: f
                            } = t, {
                                apply: d = () => {},
                                ...h
                            } = (0, n._3)(e, t), p = await a(t, h), m = (0, n.C0)(s), g = (0, n.Sg)(s), v = "y" === (0, n.TV)(s), {
                                width: b,
                                height: y
                            } = u.floating;
                            "top" === m || "bottom" === m ? (i = m, l = g === (await (null == c.isRTL ? void 0 : c.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (l = m, i = "end" === g ? "top" : "bottom");
                            let E = y - p.top - p.bottom,
                                w = b - p.left - p.right,
                                x = (0, n.jk)(y - p[i], E),
                                P = (0, n.jk)(b - p[l], w),
                                _ = !t.middlewareData.shift,
                                T = x,
                                S = P;
                            if (null != (r = t.middlewareData.shift) && r.enabled.x && (S = w), null != (o = t.middlewareData.shift) && o.enabled.y && (T = E), _ && !g) {
                                let e = (0, n.T9)(p.left, 0),
                                    t = (0, n.T9)(p.right, 0),
                                    r = (0, n.T9)(p.top, 0),
                                    o = (0, n.T9)(p.bottom, 0);
                                v ? S = b - 2 * (0 !== e || 0 !== t ? e + t : (0, n.T9)(p.left, p.right)) : T = y - 2 * (0 !== r || 0 !== o ? r + o : (0, n.T9)(p.top, p.bottom))
                            }
                            await d({
                                ...t,
                                availableWidth: S,
                                availableHeight: T
                            });
                            let A = await c.getDimensions(f.floating);
                            return b !== A.width || y !== A.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                },
                C = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: x,
                            ...r
                        },
                        a = {
                            ...o.platform,
                            _c: n
                        };
                    return i(e, t, {
                        ...o,
                        platform: a
                    })
                }
        },
        6932: (e, t, r) => {
            r.d(t, {
                BN: () => h,
                Ej: () => m,
                UU: () => p,
                cY: () => d,
                we: () => f
            });
            var n = r(7339),
                o = r(2115),
                i = r(7650),
                a = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function l(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!l(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !l(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function s(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function u(e, t) {
                let r = s(e);
                return Math.round(t * r) / r
            }

            function c(e) {
                let t = o.useRef(e);
                return a(() => {
                    t.current = e
                }), t
            }

            function f(e) {
                void 0 === e && (e = {});
                let {
                    placement: t = "bottom",
                    strategy: r = "absolute",
                    middleware: f = [],
                    platform: d,
                    elements: {
                        reference: h,
                        floating: p
                    } = {},
                    transform: m = !0,
                    whileElementsMounted: g,
                    open: v
                } = e, [b, y] = o.useState({
                    x: 0,
                    y: 0,
                    strategy: r,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                }), [E, w] = o.useState(f);
                l(E, f) || w(f);
                let [x, P] = o.useState(null), [_, T] = o.useState(null), S = o.useCallback(e => {
                    e !== M.current && (M.current = e, P(e))
                }, []), A = o.useCallback(e => {
                    e !== I.current && (I.current = e, T(e))
                }, []), L = h || x, C = p || _, M = o.useRef(null), I = o.useRef(null), R = o.useRef(b), H = null != g, O = c(g), k = c(d), N = c(v), B = o.useCallback(() => {
                    if (!M.current || !I.current) return;
                    let e = {
                        placement: t,
                        strategy: r,
                        middleware: E
                    };
                    k.current && (e.platform = k.current), (0, n.rD)(M.current, I.current, e).then(e => {
                        let t = {
                            ...e,
                            isPositioned: !1 !== N.current
                        };
                        F.current && !l(R.current, t) && (R.current = t, i.flushSync(() => {
                            y(t)
                        }))
                    })
                }, [E, t, r, k, N]);
                a(() => {
                    !1 === v && R.current.isPositioned && (R.current.isPositioned = !1, y(e => ({
                        ...e,
                        isPositioned: !1
                    })))
                }, [v]);
                let F = o.useRef(!1);
                a(() => (F.current = !0, () => {
                    F.current = !1
                }), []), a(() => {
                    if (L && (M.current = L), C && (I.current = C), L && C) {
                        if (O.current) return O.current(L, C, B);
                        B()
                    }
                }, [L, C, B, O, H]);
                let D = o.useMemo(() => ({
                        reference: M,
                        floating: I,
                        setReference: S,
                        setFloating: A
                    }), [S, A]),
                    j = o.useMemo(() => ({
                        reference: L,
                        floating: C
                    }), [L, C]),
                    U = o.useMemo(() => {
                        let e = {
                            position: r,
                            left: 0,
                            top: 0
                        };
                        if (!j.floating) return e;
                        let t = u(j.floating, b.x),
                            n = u(j.floating, b.y);
                        return m ? {
                            ...e,
                            transform: "translate(" + t + "px, " + n + "px)",
                            ...s(j.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: r,
                            left: t,
                            top: n
                        }
                    }, [r, m, j.floating, b.x, b.y]);
                return o.useMemo(() => ({
                    ...b,
                    update: B,
                    refs: D,
                    elements: j,
                    floatingStyles: U
                }), [b, B, D, j, U])
            }
            let d = (e, t) => ({
                    ...(0, n.cY)(e),
                    options: [e, t]
                }),
                h = (e, t) => ({
                    ...(0, n.BN)(e),
                    options: [e, t]
                }),
                p = (e, t) => ({
                    ...(0, n.UU)(e),
                    options: [e, t]
                }),
                m = (e, t) => ({
                    ...(0, n.Ej)(e),
                    options: [e, t]
                })
        },
        5527: (e, t, r) => {
            r.d(t, {
                $t: () => n
            });

            function n() {
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? e.brands.map(e => {
                    let {
                        brand: t,
                        version: r
                    } = e;
                    return t + "/" + r
                }).join(" ") : navigator.userAgent
            }
        },
        5640: (e, t, r) => {
            function n() {
                return "undefined" != typeof window
            }

            function o(e) {
                return l(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function i(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function a(e) {
                var t;
                return null == (t = (l(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function l(e) {
                return !!n() && (e instanceof Node || e instanceof i(e).Node)
            }

            function s(e) {
                return !!n() && (e instanceof Element || e instanceof i(e).Element)
            }

            function u(e) {
                return !!n() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
            }

            function c(e) {
                return !!n() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
            }

            function f(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = b(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
            }

            function d(e) {
                return ["table", "td", "th"].includes(o(e))
            }

            function h(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function p(e) {
                let t = g(),
                    r = s(e) ? b(e) : e;
                return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
            }

            function m(e) {
                let t = E(e);
                for (; u(t) && !v(t);) {
                    if (p(t)) return t;
                    if (h(t)) break;
                    t = E(t)
                }
                return null
            }

            function g() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function v(e) {
                return ["html", "body", "#document"].includes(o(e))
            }

            function b(e) {
                return i(e).getComputedStyle(e)
            }

            function y(e) {
                return s(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function E(e) {
                if ("html" === o(e)) return e;
                let t = e.assignedSlot || e.parentNode || c(e) && e.host || a(e);
                return c(t) ? t.host : t
            }

            function w(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }
            r.d(t, {
                $4: () => E,
                CP: () => y,
                L9: () => b,
                Lv: () => d,
                Tc: () => g,
                Tf: () => h,
                ZU: () => f,
                _m: () => w,
                ep: () => a,
                eu: () => v,
                gJ: () => m,
                mq: () => o,
                sQ: () => p,
                sb: () => u,
                v9: () => function e(t, r, n) {
                    var o;
                    void 0 === r && (r = []), void 0 === n && (n = !0);
                    let a = function e(t) {
                            let r = E(t);
                            return v(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : u(r) && f(r) ? r : e(r)
                        }(t),
                        l = a === (null == (o = t.ownerDocument) ? void 0 : o.body),
                        s = i(a);
                    if (l) {
                        let t = w(s);
                        return r.concat(s, s.visualViewport || [], f(a) ? a : [], t && n ? e(t) : [])
                    }
                    return r.concat(a, e(a, [], n))
                },
                vq: () => s,
                zk: () => i
            })
        },
        9590: (e, t, r) => {
            r.d(t, {
                B1: () => _,
                C0: () => d,
                Dz: () => v,
                Jx: () => l,
                LI: () => i,
                PG: () => p,
                RI: () => a,
                Sg: () => h,
                T9: () => o,
                TV: () => g,
                WJ: () => y,
                _3: () => f,
                bV: () => x,
                jk: () => n,
                lP: () => w,
                nI: () => P,
                qE: () => c,
                sq: () => m,
                w7: () => b
            });
            let n = Math.min,
                o = Math.max,
                i = Math.round,
                a = Math.floor,
                l = e => ({
                    x: e,
                    y: e
                }),
                s = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                u = {
                    start: "end",
                    end: "start"
                };

            function c(e, t, r) {
                return o(e, n(t, r))
            }

            function f(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function d(e) {
                return e.split("-")[0]
            }

            function h(e) {
                return e.split("-")[1]
            }

            function p(e) {
                return "x" === e ? "y" : "x"
            }

            function m(e) {
                return "y" === e ? "height" : "width"
            }

            function g(e) {
                return ["top", "bottom"].includes(d(e)) ? "y" : "x"
            }

            function v(e) {
                return p(g(e))
            }

            function b(e, t, r) {
                void 0 === r && (r = !1);
                let n = h(e),
                    o = v(e),
                    i = m(o),
                    a = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                return t.reference[i] > t.floating[i] && (a = x(a)), [a, x(a)]
            }

            function y(e) {
                let t = x(e);
                return [E(e), t, E(t)]
            }

            function E(e) {
                return e.replace(/start|end/g, e => u[e])
            }

            function w(e, t, r, n) {
                let o = h(e),
                    i = function(e, t, r) {
                        let n = ["left", "right"],
                            o = ["right", "left"];
                        switch (e) {
                            case "top":
                            case "bottom":
                                if (r) return t ? o : n;
                                return t ? n : o;
                            case "left":
                            case "right":
                                return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(d(e), "start" === r, n);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(E)))), i
            }

            function x(e) {
                return e.replace(/left|right|bottom|top/g, e => s[e])
            }

            function P(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function _(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }
        },
        51: (e, t, r) => {
            function n(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
            }

            function o(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
            }

            function i(e) {
                let t = null;
                return () => (null == t && (t = e()), t)
            }
            r.d(t, {
                AM: () => tS,
                ut: () => tx,
                QT: () => tT
            });
            let a = i(function() {
                    return o(/^Mac/i)
                }),
                l = i(function() {
                    return o(/^iPhone/i)
                }),
                s = i(function() {
                    return o(/^iPad/i) || a() && navigator.maxTouchPoints > 1
                }),
                u = i(function() {
                    return l() || s()
                });
            i(function() {
                return a() || u()
            }), i(function() {
                return n(/AppleWebKit/i) && !c()
            });
            let c = i(function() {
                    return n(/Chrome/i)
                }),
                f = i(function() {
                    return n(/Android/i)
                });
            i(function() {
                return n(/Firefox/i)
            });
            let d = e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
                },
                h = e => e && "window" in e && e.window === e ? e : d(e).defaultView || window;
            var p, m, g = r(2115),
                v = r.t(g, 2);
            let b = null,
                y = new Set,
                E = new Map,
                w = !1,
                x = !1,
                P = {
                    Tab: !0,
                    Escape: !0
                };

            function _(e, t) {
                for (let r of y) r(e, t)
            }

            function T(e) {
                w = !0, e.metaKey || !a() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (b = "keyboard", _("keyboard", e))
            }

            function S(e) {
                b = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (w = !0, _("pointer", e))
            }

            function A(e) {
                (0 === e.mozInputSource && e.isTrusted || (f() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)) && (w = !0, b = "virtual")
            }

            function L(e) {
                e.target !== window && e.target !== document && (w || x || (b = "virtual", _("virtual", e)), w = !1, x = !1)
            }

            function C() {
                w = !1, x = !0
            }

            function M(e) {
                if ("undefined" == typeof window || E.get(h(e))) return;
                let t = h(e),
                    r = d(e),
                    n = t.HTMLElement.prototype.focus;
                t.HTMLElement.prototype.focus = function() {
                    w = !0, n.apply(this, arguments)
                }, r.addEventListener("keydown", T, !0), r.addEventListener("keyup", T, !0), r.addEventListener("click", A, !0), t.addEventListener("focus", L, !0), t.addEventListener("blur", C, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", S, !0), r.addEventListener("pointermove", S, !0), r.addEventListener("pointerup", S, !0)) : (r.addEventListener("mousedown", S, !0), r.addEventListener("mousemove", S, !0), r.addEventListener("mouseup", S, !0)), t.addEventListener("beforeunload", () => {
                    I(e)
                }, {
                    once: !0
                }), E.set(t, {
                    focus: n
                })
            }
            let I = (e, t) => {
                let r = h(e),
                    n = d(e);
                t && n.removeEventListener("DOMContentLoaded", t), E.has(r) && (r.HTMLElement.prototype.focus = E.get(r).focus, n.removeEventListener("keydown", T, !0), n.removeEventListener("keyup", T, !0), n.removeEventListener("click", A, !0), r.removeEventListener("focus", L, !0), r.removeEventListener("blur", C, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", S, !0), n.removeEventListener("pointermove", S, !0), n.removeEventListener("pointerup", S, !0)) : (n.removeEventListener("mousedown", S, !0), n.removeEventListener("mousemove", S, !0), n.removeEventListener("mouseup", S, !0)), E.delete(r))
            };

            function R() {
                return "pointer" !== b
            }
            "undefined" != typeof document && function(e) {
                let t;
                let r = d(void 0);
                "loading" !== r.readyState ? M(void 0) : (t = () => {
                    M(void 0)
                }, r.addEventListener("DOMContentLoaded", t)), () => I(e, t)
            }();
            let H = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
                O = "undefined" != typeof document ? g.useLayoutEffect : () => {};
            class k {
                isDefaultPrevented() {
                    return this.nativeEvent.defaultPrevented
                }
                preventDefault() {
                    this.defaultPrevented = !0, this.nativeEvent.preventDefault()
                }
                stopPropagation() {
                    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
                }
                isPropagationStopped() {
                    return !1
                }
                persist() {}
                constructor(e, t) {
                    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
                }
            }

            function N(e) {
                let t = (0, g.useRef)({
                    isFocused: !1,
                    observer: null
                });
                O(() => {
                    let e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), e.observer = null)
                    }
                }, []);
                let r = function(e) {
                    let t = (0, g.useRef)(null);
                    return O(() => {
                        t.current = e
                    }, [e]), (0, g.useCallback)((...e) => {
                        let r = t.current;
                        return null == r ? void 0 : r(...e)
                    }, [])
                }(t => {
                    null == e || e(t)
                });
                return (0, g.useCallback)(e => {
                    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                        t.current.isFocused = !0;
                        let n = e.target;
                        n.addEventListener("focusout", e => {
                            t.current.isFocused = !1, n.disabled && r(new k("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                        }, {
                            once: !0
                        }), t.current.observer = new MutationObserver(() => {
                            if (t.current.isFocused && n.disabled) {
                                var e;
                                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                                let r = n === document.activeElement ? null : document.activeElement;
                                n.dispatchEvent(new FocusEvent("blur", {
                                    relatedTarget: r
                                })), n.dispatchEvent(new FocusEvent("focusout", {
                                    bubbles: !0,
                                    relatedTarget: r
                                }))
                            }
                        }), t.current.observer.observe(n, {
                            attributes: !0,
                            attributeFilter: ["disabled"]
                        })
                    }
                }, [r])
            }
            let B = !1,
                F = 0;

            function D() {
                B = !0, setTimeout(() => {
                    B = !1
                }, 50)
            }

            function j(e) {
                "touch" === e.pointerType && D()
            }

            function U() {
                if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", j) : document.addEventListener("touchend", D), F++, () => {
                    --F > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", j) : document.removeEventListener("touchend", D))
                }
            }
            var G = Object.defineProperty,
                V = (e, t, r) => t in e ? G(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                z = (e, t, r) => (V(e, "symbol" != typeof t ? t + "" : t, r), r);
            class W {
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
                constructor() {
                    z(this, "current", this.detect()), z(this, "handoffState", "pending"), z(this, "currentId", 0)
                }
            }
            let q = new W;

            function K(e) {
                return q.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }

            function X(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                    throw e
                }))
            }

            function $() {
                let e = [],
                    t = {
                        addEventListener: (e, r, n, o) => (e.addEventListener(r, n, o), t.add(() => e.removeEventListener(r, n, o))),
                        requestAnimationFrame() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            let o = requestAnimationFrame(...r);
                            return t.add(() => cancelAnimationFrame(o))
                        },
                        nextFrame() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            return t.requestAnimationFrame(() => t.requestAnimationFrame(...r))
                        },
                        setTimeout() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            let o = setTimeout(...r);
                            return t.add(() => clearTimeout(o))
                        },
                        microTask() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            let o = {
                                current: !0
                            };
                            return X(() => {
                                o.current && r[0]()
                            }), t.add(() => {
                                o.current = !1
                            })
                        },
                        style(e, t, r) {
                            let n = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: r
                            }), this.add(() => {
                                Object.assign(e.style, {
                                    [t]: n
                                })
                            })
                        },
                        group(e) {
                            let t = $();
                            return e(t), this.add(() => t.dispose())
                        },
                        add: t => (e.includes(t) || e.push(t), () => {
                            let r = e.indexOf(t);
                            if (r >= 0)
                                for (let t of e.splice(r, 1)) t()
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        }
                    };
                return t
            }

            function Y() {
                let [e] = (0, g.useState)($);
                return (0, g.useEffect)(() => () => e.dispose(), [e]), e
            }
            let Z = (e, t) => {
                q.isServer ? (0, g.useEffect)(e, t) : (0, g.useLayoutEffect)(e, t)
            };

            function Q(e) {
                let t = (0, g.useRef)(e);
                return Z(() => {
                    t.current = e
                }, [e]), t
            }
            let J = function(e) {
                let t = Q(e);
                return g.useCallback(function() {
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return t.current(...r)
                }, [t])
            };

            function ee(e, t) {
                for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let i = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
                throw Error.captureStackTrace && Error.captureStackTrace(i, ee), i
            }
            let et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(","),
                er = ["[data-autofocus]"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(",");
            var en = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(en || {}),
                eo = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(eo || {}),
                ei = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ei || {});

            function ea() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                return null == e ? [] : Array.from(e.querySelectorAll(et)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var el = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(el || {});

            function es(e) {
                var t;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return e !== (null == (t = K(e)) ? void 0 : t.body) && ee(r, {
                    0: () => e.matches(et),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(et)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }
            var eu = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(eu || {});

            function ec(e, t) {
                var r, n, o;
                let {
                    sorted: i = !0,
                    relativeTo: a = null,
                    skipElements: l = []
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, u = Array.isArray(e) ? i ? function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e;
                    return e.slice().sort((e, r) => {
                        let n = t(e),
                            o = t(r);
                        if (null === n || null === o) return 0;
                        let i = n.compareDocumentPosition(o);
                        return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                    })
                }(e) : e : 64 & t ? function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                    return null == e ? [] : Array.from(e.querySelectorAll(er)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
                }(e) : ea(e);
                l.length > 0 && u.length > 1 && (u = u.filter(e => !l.some(t => null != t && "current" in t ? (null == t ? void 0 : t.current) === e : t === e))), a = null != a ? a : s.activeElement;
                let c = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    f = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, u.indexOf(a)) - 1;
                        if (4 & t) return Math.max(0, u.indexOf(a)) + 1;
                        if (8 & t) return u.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    d = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    h = 0,
                    p = u.length,
                    m;
                do {
                    if (h >= p || h + p <= 0) return 0;
                    let e = f + h;
                    if (16 & t) e = (e + p) % p;
                    else {
                        if (e < 0) return 3;
                        if (e >= p) return 1
                    }
                    null == (m = u[e]) || m.focus(d), h += c
                } while (m !== s.activeElement);
                return 6 & t && null != (o = null == (n = null == (r = m) ? void 0 : r.matches) ? void 0 : n.call(r, "textarea,input")) && o && m.select(), 2
            }

            function ef() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function ed(e, t, r, n) {
                let o = Q(r);
                (0, g.useEffect)(() => {
                    if (e) return document.addEventListener(t, r, n), () => document.removeEventListener(t, r, n);

                    function r(e) {
                        o.current(e)
                    }
                }, [e, t, n])
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0));
            class eh extends Map {
                get(e) {
                    let t = super.get(e);
                    return void 0 === t && (t = this.factory(e), this.set(e, t)), t
                }
                constructor(e) {
                    super(), this.factory = e
                }
            }

            function ep(e, t) {
                let r = e(),
                    n = new Set;
                return {
                    getSnapshot: () => r,
                    subscribe: e => (n.add(e), () => n.delete(e)),
                    dispatch(e) {
                        for (var o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                        let l = t[e].call(r, ...i);
                        l && (r = l, n.forEach(e => e()))
                    }
                }
            }

            function em(e) {
                return (0, g.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot)
            }
            let eg = new eh(() => ep(() => [], {
                ADD(e) {
                    return this.includes(e) ? this : [...this, e]
                },
                REMOVE(e) {
                    let t = this.indexOf(e);
                    if (-1 === t) return this;
                    let r = this.slice();
                    return r.splice(t, 1), r
                }
            }));

            function ev(e, t) {
                let r = eg.get(t),
                    n = (0, g.useId)(),
                    o = em(r);
                if (Z(() => {
                        if (e) return r.dispatch("ADD", n), () => r.dispatch("REMOVE", n)
                    }, [r, e]), !e) return !1;
                let i = o.indexOf(n),
                    a = o.length;
                return -1 === i && (i = a, a += 1), i === a - 1
            }

            function eb(e, t, r, n) {
                let o = Q(r);
                (0, g.useEffect)(() => {
                    if (e) return window.addEventListener(t, r, n), () => window.removeEventListener(t, r, n);

                    function r(e) {
                        o.current(e)
                    }
                }, [e, t, n])
            }

            function ey() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, g.useMemo)(() => K(...t), [...t])
            }

            function eE() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            var ew = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ew || {}),
                ex = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ex || {});

            function eP() {
                let e, t;
                let r = (e = (0, g.useRef)([]), t = (0, g.useCallback)(t => {
                    for (let r of e.current) null != r && ("function" == typeof r ? r(t) : r.current = t)
                }, []), function() {
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    if (!n.every(e => null == e)) return e.current = n, t
                });
                return (0, g.useCallback)(e => (function(e) {
                    let {
                        ourProps: t,
                        theirProps: r,
                        slot: n,
                        defaultTag: o,
                        features: i,
                        visible: a = !0,
                        name: l,
                        mergeRefs: s
                    } = e;
                    s = null != s ? s : eT;
                    let u = eS(r, t);
                    if (a) return e_(u, n, o, l, s);
                    let c = null != i ? i : 0;
                    if (2 & c) {
                        let {
                            static: e = !1,
                            ...t
                        } = u;
                        if (e) return e_(t, n, o, l, s)
                    }
                    if (1 & c) {
                        let {
                            unmount: e = !0,
                            ...t
                        } = u;
                        return ee(e ? 0 : 1, {
                            0: () => null,
                            1: () => e_({
                                ...t,
                                hidden: !0,
                                style: {
                                    display: "none"
                                }
                            }, n, o, l, s)
                        })
                    }
                    return e_(u, n, o, l, s)
                })({
                    mergeRefs: r,
                    ...e
                }), [r])
            }

            function e_(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 ? arguments[4] : void 0,
                    {
                        as: i = r,
                        children: a,
                        refName: l = "ref",
                        ...s
                    } = eM(e, ["unmount", "static"]),
                    u = void 0 !== e.ref ? {
                        [l]: e.ref
                    } : {},
                    c = "function" == typeof a ? a(t) : a;
                "className" in s && s.className && "function" == typeof s.className && (s.className = s.className(t)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
                let f = {};
                if (t) {
                    let e = !1,
                        r = [];
                    for (let [n, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && r.push(n.replace(/([A-Z])/g, e => "-".concat(e.toLowerCase())));
                    if (e)
                        for (let e of (f["data-headlessui-state"] = r.join(" "), r)) f["data-".concat(e)] = ""
                }
                if (i === g.Fragment && (Object.keys(eC(s)).length > 0 || Object.keys(eC(f)).length > 0)) {
                    if (!(0, g.isValidElement)(c) || Array.isArray(c) && c.length > 1) {
                        if (Object.keys(eC(s)).length > 0) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(n, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(eC(s)).concat(Object.keys(eC(f))).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"))
                    } else {
                        let e = c.props,
                            t = null == e ? void 0 : e.className,
                            r = "function" == typeof t ? function() {
                                for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                                return eE(t(...r), s.className)
                            } : eE(t, s.className),
                            n = eS(c.props, eC(eM(s, ["ref"])));
                        for (let e in f) e in n && delete f[e];
                        return (0, g.cloneElement)(c, Object.assign({}, n, f, u, {
                            ref: o(g.version.split(".")[0] >= "19" ? c.props.ref : c.ref, u.ref)
                        }, r ? {
                            className: r
                        } : {}))
                    }
                }
                return (0, g.createElement)(i, Object.assign({}, eM(s, ["ref"]), i !== g.Fragment && u, i !== g.Fragment && f), c)
            }

            function eT() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.every(e => null == e) ? void 0 : e => {
                    for (let r of t) null != r && ("function" == typeof r ? r(e) : r.current = e)
                }
            }

            function eS() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let n = {},
                    o = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : n[t] = e[t];
                if (n.disabled || n["aria-disabled"])
                    for (let e in o) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) && (o[e] = [e => {
                        var t;
                        return null == (t = null == e ? void 0 : e.preventDefault) ? void 0 : t.call(e)
                    }]);
                for (let e in o) Object.assign(n, {
                    [e](t) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        for (let r of o[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            r(t, ...n)
                        }
                    }
                });
                return n
            }

            function eA() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let n = {},
                    o = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : n[t] = e[t];
                for (let e in o) Object.assign(n, {
                    [e]() {
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        for (let t of o[e]) null == t || t(...r)
                    }
                });
                return n
            }

            function eL(e) {
                var t;
                return Object.assign((0, g.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function eC(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function eM(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = Object.assign({}, e);
                for (let e of t) e in r && delete r[e];
                return r
            }
            var eI = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(eI || {});
            let eR = eL(function(e, t) {
                    var r;
                    let {
                        features: n = 1,
                        ...o
                    } = e, i = {
                        ref: t,
                        "aria-hidden": (2 & n) == 2 || (null != (r = o["aria-hidden"]) ? r : void 0),
                        hidden: (4 & n) == 4 || void 0,
                        style: {
                            position: "fixed",
                            top: 1,
                            left: 1,
                            width: 1,
                            height: 0,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            ...(4 & n) == 4 && (2 & n) != 2 && {
                                display: "none"
                            }
                        }
                    };
                    return eP()({
                        ourProps: i,
                        theirProps: o,
                        slot: {},
                        defaultTag: "span",
                        name: "Hidden"
                    })
                }),
                eH = (0, g.createContext)(null);

            function eO(e) {
                let {
                    children: t,
                    node: r
                } = e, [n, o] = (0, g.useState)(null), i = ek(null != r ? r : n);
                return g.createElement(eH.Provider, {
                    value: i
                }, t, null === i && g.createElement(eR, {
                    features: eI.Hidden,
                    ref: e => {
                        var t, r;
                        if (e) {
                            for (let n of null != (r = null == (t = K(e)) ? void 0 : t.querySelectorAll("html > *, body > *")) ? r : [])
                                if (n !== document.body && n !== document.head && n instanceof HTMLElement && null != n && n.contains(e)) {
                                    o(n);
                                    break
                                }
                        }
                    }
                }))
            }

            function ek() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return null != (e = (0, g.useContext)(eH)) ? e : t
            }
            let eN = ep(() => new Map, {
                PUSH(e, t) {
                    var r;
                    let n = null != (r = this.get(e)) ? r : {
                        doc: e,
                        count: 0,
                        d: $(),
                        meta: new Set
                    };
                    return n.count++, n.meta.add(t), this.set(e, n), this
                },
                POP(e, t) {
                    let r = this.get(e);
                    return r && (r.count--, r.meta.delete(t)), this
                },
                SCROLL_PREVENT(e) {
                    let t, {
                            doc: r,
                            d: n,
                            meta: o
                        } = e,
                        i = {
                            doc: r,
                            d: n,
                            meta: function(e) {
                                let t = {};
                                for (let r of e) Object.assign(t, r(t));
                                return t
                            }(o)
                        },
                        a = [ef() ? {
                            before(e) {
                                let {
                                    doc: t,
                                    d: r,
                                    meta: n
                                } = e;

                                function o(e) {
                                    return n.containers.flatMap(e => e()).some(t => t.contains(e))
                                }
                                r.microTask(() => {
                                    var e;
                                    if ("auto" !== window.getComputedStyle(t.documentElement).scrollBehavior) {
                                        let e = $();
                                        e.style(t.documentElement, "scrollBehavior", "auto"), r.add(() => r.microTask(() => e.dispose()))
                                    }
                                    let n = null != (e = window.scrollY) ? e : window.pageYOffset,
                                        i = null;
                                    r.addEventListener(t, "click", e => {
                                        if (e.target instanceof HTMLElement) try {
                                            let r = e.target.closest("a");
                                            if (!r) return;
                                            let {
                                                hash: n
                                            } = new URL(r.href), a = t.querySelector(n);
                                            a && !o(a) && (i = a)
                                        } catch (e) {}
                                    }, !0), r.addEventListener(t, "touchstart", e => {
                                        if (e.target instanceof HTMLElement) {
                                            if (o(e.target)) {
                                                let t = e.target;
                                                for (; t.parentElement && o(t.parentElement);) t = t.parentElement;
                                                r.style(t, "overscrollBehavior", "contain")
                                            } else r.style(e.target, "touchAction", "none")
                                        }
                                    }), r.addEventListener(t, "touchmove", e => {
                                        if (e.target instanceof HTMLElement && "INPUT" !== e.target.tagName) {
                                            if (o(e.target)) {
                                                let t = e.target;
                                                for (; t.parentElement && "" !== t.dataset.headlessuiPortal && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);) t = t.parentElement;
                                                "" === t.dataset.headlessuiPortal && e.preventDefault()
                                            } else e.preventDefault()
                                        }
                                    }, {
                                        passive: !1
                                    }), r.add(() => {
                                        var e;
                                        n !== (null != (e = window.scrollY) ? e : window.pageYOffset) && window.scrollTo(0, n), i && i.isConnected && (i.scrollIntoView({
                                            block: "nearest"
                                        }), i = null)
                                    })
                                })
                            }
                        } : {}, {
                            before(e) {
                                var r;
                                let {
                                    doc: n
                                } = e, o = n.documentElement;
                                t = Math.max(0, (null != (r = n.defaultView) ? r : window).innerWidth - o.clientWidth)
                            },
                            after(e) {
                                let {
                                    doc: r,
                                    d: n
                                } = e, o = r.documentElement, i = Math.max(0, o.clientWidth - o.offsetWidth), a = Math.max(0, t - i);
                                n.style(o, "paddingRight", "".concat(a, "px"))
                            }
                        }, {
                            before(e) {
                                let {
                                    doc: t,
                                    d: r
                                } = e;
                                r.style(t.documentElement, "overflow", "hidden")
                            }
                        }];
                    a.forEach(e => {
                        let {
                            before: t
                        } = e;
                        return null == t ? void 0 : t(i)
                    }), a.forEach(e => {
                        let {
                            after: t
                        } = e;
                        return null == t ? void 0 : t(i)
                    })
                },
                SCROLL_ALLOW(e) {
                    let {
                        d: t
                    } = e;
                    t.dispose()
                },
                TEARDOWN(e) {
                    let {
                        doc: t
                    } = e;
                    this.delete(t)
                }
            });
            eN.subscribe(() => {
                let e = eN.getSnapshot(),
                    t = new Map;
                for (let [r] of e) t.set(r, r.documentElement.style.overflow);
                for (let r of e.values()) {
                    let e = "hidden" === t.get(r.doc),
                        n = 0 !== r.count;
                    (n && !e || !n && e) && eN.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), 0 === r.count && eN.dispatch("TEARDOWN", r)
                }
            });
            let eB = Symbol();

            function eF(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return Object.assign(e, {
                    [eB]: t
                })
            }

            function eD() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let n = (0, g.useRef)(t);
                (0, g.useEffect)(() => {
                    n.current = t
                }, [t]);
                let o = J(e => {
                    for (let t of n.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                });
                return t.every(e => null == e || (null == e ? void 0 : e[eB])) ? void 0 : o
            }
            var ej = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ej || {});

            function eU() {
                let e = (0, g.useRef)(0);
                return eb(!0, "keydown", t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }, !0), e
            }
            var eG = r(2818);
            void 0 !== eG && "undefined" != typeof globalThis && "undefined" != typeof Element && (null == (p = null == eG ? void 0 : eG.env) ? void 0 : p.NODE_ENV) === "test" && void 0 === (null == (m = null == Element ? void 0 : Element.prototype) ? void 0 : m.getAnimations) && (Element.prototype.getAnimations = function() {
                return console.warn("Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"), []
            });
            var eV = (e => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(eV || {});

            function ez(e) {
                let t = {};
                for (let r in e) !0 === e[r] && (t["data-".concat(r)] = "");
                return t
            }

            function eW(e, t, r, n) {
                let [o, i] = (0, g.useState)(r), {
                    hasFlag: a,
                    addFlag: l,
                    removeFlag: s
                } = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        [t, r] = (0, g.useState)(e),
                        n = (0, g.useCallback)(e => r(e), [t]),
                        o = (0, g.useCallback)(e => r(t => t | e), [t]),
                        i = (0, g.useCallback)(e => (t & e) === e, [t]);
                    return {
                        flags: t,
                        setFlag: n,
                        addFlag: o,
                        hasFlag: i,
                        removeFlag: (0, g.useCallback)(e => r(t => t & ~e), [r]),
                        toggleFlag: (0, g.useCallback)(e => r(t => t ^ e), [r])
                    }
                }(e && o ? 3 : 0), u = (0, g.useRef)(!1), c = (0, g.useRef)(!1);
                return Z(() => {
                    var o;
                    if (e) {
                        if (r && i(!0), !t) {
                            r && l(3);
                            return
                        }
                        return null == (o = null == n ? void 0 : n.start) || o.call(n, r),
                            function(e, t) {
                                let {
                                    prepare: r,
                                    run: n,
                                    done: o,
                                    inFlight: i
                                } = t, a = $();
                                return function(e, t) {
                                    let {
                                        inFlight: r,
                                        prepare: n
                                    } = t;
                                    if (null != r && r.current) {
                                        n();
                                        return
                                    }
                                    let o = e.style.transition;
                                    e.style.transition = "none", n(), e.offsetHeight, e.style.transition = o
                                }(e, {
                                    prepare: r,
                                    inFlight: i
                                }), a.nextFrame(() => {
                                    n(), a.requestAnimationFrame(() => {
                                        a.add(function(e, t) {
                                            var r, n;
                                            let o = $();
                                            if (!e) return o.dispose;
                                            let i = !1;
                                            o.add(() => {
                                                i = !0
                                            });
                                            let a = null != (n = null == (r = e.getAnimations) ? void 0 : r.call(e).filter(e => e instanceof CSSTransition)) ? n : [];
                                            return 0 === a.length ? t() : Promise.allSettled(a.map(e => e.finished)).then(() => {
                                                i || t()
                                            }), o.dispose
                                        }(e, o))
                                    })
                                }), a.dispose
                            }(t, {
                                inFlight: u,
                                prepare() {
                                    c.current ? c.current = !1 : c.current = u.current, u.current = !0, c.current || (r ? (l(3), s(4)) : (l(4), s(2)))
                                },
                                run() {
                                    c.current ? r ? (s(3), l(4)) : (s(4), l(3)) : r ? s(1) : l(1)
                                },
                                done() {
                                    var e;
                                    c.current && "function" == typeof t.getAnimations && t.getAnimations().length > 0 || (u.current = !1, s(7), r || i(!1), null == (e = null == n ? void 0 : n.end) || e.call(n, r))
                                }
                            })
                    }
                }, [e, r, t, Y()]), e ? [o, {
                    closed: a(1),
                    enter: a(2),
                    leave: a(4),
                    transition: a(2) || a(4)
                }] : [r, {
                    closed: void 0,
                    enter: void 0,
                    leave: void 0,
                    transition: void 0
                }]
            }
            let eq = (0, g.createContext)(() => {});

            function eK(e) {
                let {
                    value: t,
                    children: r
                } = e;
                return g.createElement(eq.Provider, {
                    value: t
                }, r)
            }
            var eX = r(4462),
                e$ = r(6932),
                eY = r(7339);
            let eZ = (0, g.createContext)({
                styles: void 0,
                setReference: () => {},
                setFloating: () => {},
                getReferenceProps: () => ({}),
                getFloatingProps: () => ({}),
                slot: {}
            });
            eZ.displayName = "FloatingContext";
            let eQ = (0, g.createContext)(null);

            function eJ(e) {
                var t, r, n, o;
                let i, a, l, {
                        children: s,
                        enabled: u = !0
                    } = e,
                    [c, f] = (0, g.useState)(null),
                    [d, h] = (0, g.useState)(0),
                    p = (0, g.useRef)(null),
                    [m, v] = (0, g.useState)(null);
                Z(() => {
                    if (!t) return;
                    let e = new MutationObserver(() => {
                        let e = window.getComputedStyle(t).maxHeight,
                            r = parseFloat(e);
                        if (isNaN(r)) return;
                        let n = parseInt(e);
                        isNaN(n) || r !== n && (t.style.maxHeight = "".concat(Math.ceil(r), "px"))
                    });
                    return e.observe(t, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    }), () => {
                        e.disconnect()
                    }
                }, [t = m]);
                let b = u && null !== c && null !== m,
                    {
                        to: y = "bottom",
                        gap: E = 0,
                        offset: w = 0,
                        padding: x = 0,
                        inner: P
                    } = (i = e0(null != (r = null == c ? void 0 : c.gap) ? r : "var(--anchor-gap, 0)", m), a = e0(null != (n = null == c ? void 0 : c.offset) ? n : "var(--anchor-offset, 0)", m), l = e0(null != (o = null == c ? void 0 : c.padding) ? o : "var(--anchor-padding, 0)", m), {
                        ...c,
                        gap: i,
                        offset: a,
                        padding: l
                    }),
                    [_, T = "center"] = y.split(" ");
                Z(() => {
                    b && h(0)
                }, [b]);
                let {
                    refs: S,
                    floatingStyles: A,
                    context: L
                } = (0, eX.we)({
                    open: b,
                    placement: "selection" === _ ? "center" === T ? "bottom" : "bottom-".concat(T) : "center" === T ? "".concat(_) : "".concat(_, "-").concat(T),
                    strategy: "absolute",
                    transform: !1,
                    middleware: [(0, e$.cY)({
                        mainAxis: "selection" === _ ? 0 : E,
                        crossAxis: w
                    }), (0, e$.BN)({
                        padding: x
                    }), "selection" !== _ && (0, e$.UU)({
                        padding: x
                    }), "selection" === _ && P ? (0, eX.vW)({
                        ...P,
                        padding: x,
                        overflowRef: p,
                        offset: d,
                        minItemsVisible: 4,
                        referenceOverflowThreshold: x,
                        onFallbackChange(e) {
                            var t, r;
                            if (!e) return;
                            let n = L.elements.floating;
                            if (!n) return;
                            let o = parseFloat(getComputedStyle(n).scrollPaddingBottom) || 0,
                                i = Math.min(4, n.childElementCount),
                                a = 0,
                                l = 0;
                            for (let e of null != (r = null == (t = L.elements.floating) ? void 0 : t.childNodes) ? r : [])
                                if (e instanceof HTMLElement) {
                                    let t = e.offsetTop,
                                        r = t + e.clientHeight + o,
                                        s = n.scrollTop,
                                        u = s + n.clientHeight;
                                    if (t >= s && r <= u) i--;
                                    else {
                                        l = Math.max(0, Math.min(r, u) - Math.max(t, s)), a = e.clientHeight;
                                        break
                                    }
                                } i >= 1 && h(e => {
                                let t = a * i - l + o;
                                return e >= t ? e : t
                            })
                        }
                    }) : null, (0, e$.Ej)({
                        padding: x,
                        apply(e) {
                            let {
                                availableWidth: t,
                                availableHeight: r,
                                elements: n
                            } = e;
                            Object.assign(n.floating.style, {
                                overflow: "auto",
                                maxWidth: "".concat(t, "px"),
                                maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(r, "px)")
                            })
                        }
                    })].filter(Boolean),
                    whileElementsMounted: eY.ll
                }), [C = _, M = T] = L.placement.split("-");
                "selection" === _ && (C = "selection");
                let I = (0, g.useMemo)(() => ({
                        anchor: [C, M].filter(Boolean).join(" ")
                    }), [C, M]),
                    R = (0, eX.Zx)(L, {
                        overflowRef: p,
                        onChange: h
                    }),
                    {
                        getReferenceProps: H,
                        getFloatingProps: O
                    } = (0, eX.bv)([R]),
                    k = J(e => {
                        v(e), S.setFloating(e)
                    });
                return g.createElement(eQ.Provider, {
                    value: f
                }, g.createElement(eZ.Provider, {
                    value: {
                        setFloating: k,
                        setReference: S.setReference,
                        styles: A,
                        getReferenceProps: H,
                        getFloatingProps: O,
                        slot: I
                    }
                }, s))
            }

            function e0(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    n = Y(),
                    o = J((e, t) => {
                        if (null == e) return [r, null];
                        if ("number" == typeof e) return [e, null];
                        if ("string" == typeof e) {
                            if (!t) return [r, null];
                            let o = e1(e, t);
                            return [o, r => {
                                let i = function e(t) {
                                    let r = /var\((.*)\)/.exec(t);
                                    if (r) {
                                        let t = r[1].indexOf(",");
                                        if (-1 === t) return [r[1]];
                                        let n = r[1].slice(0, t).trim(),
                                            o = r[1].slice(t + 1).trim();
                                        return o ? [n, ...e(o)] : [n]
                                    }
                                    return []
                                }(e);
                                {
                                    let a = i.map(e => window.getComputedStyle(t).getPropertyValue(e));
                                    n.requestAnimationFrame(function l() {
                                        n.nextFrame(l);
                                        let s = !1;
                                        for (let [e, r] of i.entries()) {
                                            let n = window.getComputedStyle(t).getPropertyValue(r);
                                            if (a[e] !== n) {
                                                a[e] = n, s = !0;
                                                break
                                            }
                                        }
                                        if (!s) return;
                                        let u = e1(e, t);
                                        o !== u && (r(u), o = u)
                                    })
                                }
                                return n.dispose
                            }]
                        }
                        return [r, null]
                    }),
                    i = (0, g.useMemo)(() => o(e, t)[0], [e, t]),
                    [a = i, l] = (0, g.useState)();
                return Z(() => {
                    let [r, n] = o(e, t);
                    if (l(r), n) return n(l)
                }, [e, t]), a
            }

            function e1(e, t) {
                let r = document.createElement("div");
                t.appendChild(r), r.style.setProperty("margin-top", "0px", "important"), r.style.setProperty("margin-top", e, "important");
                let n = parseFloat(window.getComputedStyle(r).marginTop) || 0;
                return t.removeChild(r), n
            }
            eQ.displayName = "PlacementContext";
            let e2 = (0, g.createContext)(null);
            e2.displayName = "OpenClosedContext";
            var e8 = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(e8 || {});

            function e3() {
                return (0, g.useContext)(e2)
            }

            function e5(e) {
                let {
                    value: t,
                    children: r
                } = e;
                return g.createElement(e2.Provider, {
                    value: t
                }, r)
            }

            function e6(e) {
                let {
                    children: t
                } = e;
                return g.createElement(e2.Provider, {
                    value: null
                }, t)
            }

            function e9(e) {
                let t = e.parentElement,
                    r = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
                let n = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                return !(n && function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(r)) && n
            }
            var e4 = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(e4 || {}),
                e7 = r(7650);
            let te = (0, g.createContext)(!1),
                tt = g.Fragment,
                tr = eL(function(e, t) {
                    let r, n, o = (0, g.useRef)(null),
                        i = eD(eF(e => {
                            o.current = e
                        }), t),
                        a = ey(o),
                        l = function(e) {
                            let t = (0, g.useContext)(te),
                                r = (0, g.useContext)(to),
                                n = ey(e),
                                [o, i] = (0, g.useState)(() => {
                                    var e;
                                    if (!t && null !== r) return null != (e = r.current) ? e : null;
                                    if (q.isServer) return null;
                                    let o = null == n ? void 0 : n.getElementById("headlessui-portal-root");
                                    if (o) return o;
                                    if (null === n) return null;
                                    let i = n.createElement("div");
                                    return i.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(i)
                                });
                            return (0, g.useEffect)(() => {
                                null !== o && (null != n && n.body.contains(o) || null == n || n.body.appendChild(o))
                            }, [o, n]), (0, g.useEffect)(() => {
                                t || null !== r && i(r.current)
                            }, [r, i, t]), o
                        }(o),
                        [s] = (0, g.useState)(() => {
                            var e;
                            return q.isServer ? null : null != (e = null == a ? void 0 : a.createElement("div")) ? e : null
                        }),
                        u = (0, g.useContext)(ti),
                        c = function() {
                            let e;
                            let t = (e = "undefined" == typeof document, (0, v.useSyncExternalStore)(() => () => {}, () => !1, () => !e)),
                                [r, n] = g.useState(q.isHandoffComplete);
                            return r && !1 === q.isHandoffComplete && n(!1), g.useEffect(() => {
                                !0 !== r && n(!0)
                            }, [r]), g.useEffect(() => q.handoff(), []), !t && r
                        }();
                    Z(() => {
                        !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s))
                    }, [l, s]), Z(() => {
                        if (s && u) return u.register(s)
                    }, [u, s]), r = J(() => {
                        var e;
                        l && s && (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && (null == (e = l.parentElement) || e.removeChild(l)))
                    }), n = (0, g.useRef)(!1), (0, g.useEffect)(() => (n.current = !1, () => {
                        n.current = !0, X(() => {
                            n.current && r()
                        })
                    }), [r]);
                    let f = eP();
                    return c && l && s ? (0, e7.createPortal)(f({
                        ourProps: {
                            ref: i
                        },
                        theirProps: e,
                        slot: {},
                        defaultTag: tt,
                        name: "Portal"
                    }), s) : null
                }),
                tn = g.Fragment,
                to = (0, g.createContext)(null),
                ti = (0, g.createContext)(null),
                ta = Object.assign(eL(function(e, t) {
                    let r = eD(t),
                        {
                            enabled: n = !0,
                            ...o
                        } = e,
                        i = eP();
                    return n ? g.createElement(tr, {
                        ...o,
                        ref: r
                    }) : i({
                        ourProps: {
                            ref: r
                        },
                        theirProps: o,
                        slot: {},
                        defaultTag: tt,
                        name: "Portal"
                    })
                }), {
                    Group: eL(function(e, t) {
                        let {
                            target: r,
                            ...n
                        } = e, o = {
                            ref: eD(t)
                        }, i = eP();
                        return g.createElement(to.Provider, {
                            value: r
                        }, i({
                            ourProps: o,
                            theirProps: n,
                            defaultTag: tn,
                            name: "Popover.Group"
                        }))
                    })
                });
            var tl = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(tl || {}),
                ts = (e => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(ts || {});
            let tu = {
                    0: e => ({
                        ...e,
                        popoverState: ee(e.popoverState, {
                            0: 1,
                            1: 0
                        }),
                        __demoMode: !1
                    }),
                    1: e => 1 === e.popoverState ? e : {
                        ...e,
                        popoverState: 1,
                        __demoMode: !1
                    },
                    2: (e, t) => e.button === t.button ? e : {
                        ...e,
                        button: t.button
                    },
                    3: (e, t) => e.buttonId === t.buttonId ? e : {
                        ...e,
                        buttonId: t.buttonId
                    },
                    4: (e, t) => e.panel === t.panel ? e : {
                        ...e,
                        panel: t.panel
                    },
                    5: (e, t) => e.panelId === t.panelId ? e : {
                        ...e,
                        panelId: t.panelId
                    }
                },
                tc = (0, g.createContext)(null);

            function tf(e) {
                let t = (0, g.useContext)(tc);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, tf), t
                }
                return t
            }
            tc.displayName = "PopoverContext";
            let td = (0, g.createContext)(null);

            function th(e) {
                let t = (0, g.useContext)(td);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, th), t
                }
                return t
            }
            td.displayName = "PopoverAPIContext";
            let tp = (0, g.createContext)(null);

            function tm() {
                return (0, g.useContext)(tp)
            }
            tp.displayName = "PopoverGroupContext";
            let tg = (0, g.createContext)(null);

            function tv(e, t) {
                return ee(t.type, tu, e, t)
            }
            tg.displayName = "PopoverPanelContext";
            let tb = ew.RenderStrategy | ew.Static;

            function ty(e, t) {
                let r = (0, g.useId)(),
                    {
                        id: n = "headlessui-popover-backdrop-".concat(r),
                        transition: o = !1,
                        ...i
                    } = e,
                    [{
                        popoverState: a
                    }, l] = tf("Popover.Backdrop"),
                    [s, u] = (0, g.useState)(null),
                    c = eD(t, u),
                    f = e3(),
                    [d, h] = eW(o, s, null !== f ? (f & e8.Open) === e8.Open : 0 === a),
                    p = J(e => {
                        if (e9(e.currentTarget)) return e.preventDefault();
                        l({
                            type: 1
                        })
                    }),
                    m = (0, g.useMemo)(() => ({
                        open: 0 === a
                    }), [a]),
                    v = {
                        ref: c,
                        id: n,
                        "aria-hidden": !0,
                        onClick: p,
                        ...ez(h)
                    };
                return eP()({
                    ourProps: v,
                    theirProps: i,
                    slot: m,
                    defaultTag: "div",
                    features: tb,
                    visible: d,
                    name: "Popover.Backdrop"
                })
            }
            let tE = ew.RenderStrategy | ew.Static,
                tw = eL(function(e, t) {
                    var r, n, o, i, a, l;
                    let s, u, c, f, d, h, p, m, v, b, y;
                    let {
                        __demoMode: E = !1,
                        ...w
                    } = e, x = (0, g.useRef)(null), P = eD(t, eF(e => {
                        x.current = e
                    })), _ = (0, g.useRef)([]), T = (0, g.useReducer)(tv, {
                        __demoMode: E,
                        popoverState: E ? 0 : 1,
                        buttons: _,
                        button: null,
                        buttonId: null,
                        panel: null,
                        panelId: null,
                        beforePanelSentinel: (0, g.createRef)(),
                        afterPanelSentinel: (0, g.createRef)(),
                        afterButtonSentinel: (0, g.createRef)()
                    }), [{
                        popoverState: S,
                        button: A,
                        buttonId: L,
                        panel: C,
                        panelId: M,
                        beforePanelSentinel: I,
                        afterPanelSentinel: R,
                        afterButtonSentinel: H
                    }, O] = T, k = ey(null != (r = x.current) ? r : A), N = (0, g.useMemo)(() => {
                        if (!A || !C) return !1;
                        for (let e of document.querySelectorAll("body > *"))
                            if (Number(null == e ? void 0 : e.contains(A)) ^ Number(null == e ? void 0 : e.contains(C))) return !0;
                        let e = ea(),
                            t = e.indexOf(A),
                            r = (t + e.length - 1) % e.length,
                            n = (t + 1) % e.length,
                            o = e[r],
                            i = e[n];
                        return !C.contains(o) && !C.contains(i)
                    }, [A, C]), B = Q(L), F = Q(M), D = (0, g.useMemo)(() => ({
                        buttonId: B,
                        panelId: F,
                        close: () => O({
                            type: 1
                        })
                    }), [B, F, O]), j = tm(), U = null == j ? void 0 : j.registerPopover, G = J(() => {
                        var e;
                        return null != (e = null == j ? void 0 : j.isFocusWithinPopoverGroup()) ? e : (null == k ? void 0 : k.activeElement) && ((null == A ? void 0 : A.contains(k.activeElement)) || (null == C ? void 0 : C.contains(k.activeElement)))
                    });
                    (0, g.useEffect)(() => null == U ? void 0 : U(D), [U, D]);
                    let [V, z] = (s = (0, g.useContext)(ti), u = (0, g.useRef)([]), c = J(e => (u.current.push(e), s && s.register(e), () => f(e))), f = J(e => {
                        let t = u.current.indexOf(e); - 1 !== t && u.current.splice(t, 1), s && s.unregister(e)
                    }), d = (0, g.useMemo)(() => ({
                        register: c,
                        unregister: f,
                        portals: u
                    }), [c, f, u]), [u, (0, g.useMemo)(() => function(e) {
                        let {
                            children: t
                        } = e;
                        return g.createElement(ti.Provider, {
                            value: d
                        }, t)
                    }, [d])]), W = ek(A), q = function() {
                        let {
                            defaultContainers: e = [],
                            portals: t,
                            mainTreeNode: r
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = ey(r), o = J(() => {
                            var o, i;
                            let a = [];
                            for (let t of e) null !== t && (t instanceof HTMLElement ? a.push(t) : "current" in t && t.current instanceof HTMLElement && a.push(t.current));
                            if (null != t && t.current)
                                for (let e of t.current) a.push(e);
                            for (let e of null != (o = null == n ? void 0 : n.querySelectorAll("html > *, body > *")) ? o : []) e !== document.body && e !== document.head && e instanceof HTMLElement && "headlessui-portal-root" !== e.id && (r && (e.contains(r) || e.contains(null == (i = null == r ? void 0 : r.getRootNode()) ? void 0 : i.host)) || a.some(t => e.contains(t)) || a.push(e));
                            return a
                        });
                        return {
                            resolveContainers: o,
                            contains: J(e => o().some(t => t.contains(e)))
                        }
                    }({
                        mainTreeNode: W,
                        portals: V,
                        defaultContainers: [A, C]
                    });
                    n = null == k ? void 0 : k.defaultView, o = "focus", h = Q(e => {
                        var t, r, n, o, i, a;
                        e.target !== window && e.target instanceof HTMLElement && 0 === S && (G() || A && C && (q.contains(e.target) || null != (r = null == (t = I.current) ? void 0 : t.contains) && r.call(t, e.target) || null != (o = null == (n = R.current) ? void 0 : n.contains) && o.call(n, e.target) || null != (a = null == (i = H.current) ? void 0 : i.contains) && a.call(i, e.target) || O({
                            type: 1
                        })))
                    }), (0, g.useEffect)(() => {
                        function e(e) {
                            h.current(e)
                        }
                        return (n = null != n ? n : window).addEventListener(o, e, !0), () => n.removeEventListener(o, e, !0)
                    }, [n, o, !0]), i = 0 === S, a = q.resolveContainers, l = (e, t) => {
                        O({
                            type: 1
                        }), es(t, el.Loose) || (e.preventDefault(), null == A || A.focus())
                    }, p = ev(i, "outside-click"), m = Q(l), v = (0, g.useCallback)(function(e, t) {
                        if (e.defaultPrevented) return;
                        let r = t(e);
                        if (null !== r && r.getRootNode().contains(r) && r.isConnected) {
                            for (let t of function e(t) {
                                    return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                }(a))
                                if (null !== t && (t.contains(r) || e.composed && e.composedPath().includes(t))) return;
                            return es(r, el.Loose) || -1 === r.tabIndex || e.preventDefault(), m.current(e, r)
                        }
                    }, [m, a]), b = (0, g.useRef)(null), ed(p, "pointerdown", e => {
                        var t, r;
                        b.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target
                    }, !0), ed(p, "mousedown", e => {
                        var t, r;
                        b.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target
                    }, !0), ed(p, "click", e => {
                        ef() || /Android/gi.test(window.navigator.userAgent) || b.current && (v(e, () => b.current), b.current = null)
                    }, !0), y = (0, g.useRef)({
                        x: 0,
                        y: 0
                    }), ed(p, "touchstart", e => {
                        y.current.x = e.touches[0].clientX, y.current.y = e.touches[0].clientY
                    }, !0), ed(p, "touchend", e => {
                        let t = {
                            x: e.changedTouches[0].clientX,
                            y: e.changedTouches[0].clientY
                        };
                        if (!(Math.abs(t.x - y.current.x) >= 30 || Math.abs(t.y - y.current.y) >= 30)) return v(e, () => e.target instanceof HTMLElement ? e.target : null)
                    }, !0), eb(p, "blur", e => v(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
                    let K = J(e => {
                            O({
                                type: 1
                            });
                            let t = e ? e instanceof HTMLElement ? e : "current" in e && e.current instanceof HTMLElement ? e.current : A : A;
                            null == t || t.focus()
                        }),
                        X = (0, g.useMemo)(() => ({
                            close: K,
                            isPortalled: N
                        }), [K, N]),
                        $ = (0, g.useMemo)(() => ({
                            open: 0 === S,
                            close: K
                        }), [S, K]),
                        Y = eP();
                    return g.createElement(eO, {
                        node: W
                    }, g.createElement(eJ, null, g.createElement(tg.Provider, {
                        value: null
                    }, g.createElement(tc.Provider, {
                        value: T
                    }, g.createElement(td.Provider, {
                        value: X
                    }, g.createElement(eK, {
                        value: K
                    }, g.createElement(e5, {
                        value: ee(S, {
                            0: e8.Open,
                            1: e8.Closed
                        })
                    }, g.createElement(z, null, Y({
                        ourProps: {
                            ref: P
                        },
                        theirProps: w,
                        slot: $,
                        defaultTag: "div",
                        name: "Popover"
                    })))))))))
                }),
                tx = eL(function(e, t) {
                    var r;
                    let n = (0, g.useId)(),
                        {
                            id: o = "headlessui-popover-button-".concat(n),
                            disabled: i = !1,
                            autoFocus: a = !1,
                            ...l
                        } = e,
                        [s, u] = tf("Popover.Button"),
                        {
                            isPortalled: c
                        } = th("Popover.Button"),
                        f = (0, g.useRef)(null),
                        p = "headlessui-focus-sentinel-".concat((0, g.useId)()),
                        m = tm(),
                        v = null == m ? void 0 : m.closeOthers,
                        b = null !== (0, g.useContext)(tg);
                    (0, g.useEffect)(() => {
                        if (!b) return u({
                            type: 3,
                            buttonId: o
                        }), () => {
                            u({
                                type: 3,
                                buttonId: null
                            })
                        }
                    }, [b, o, u]);
                    let [E] = (0, g.useState)(() => Symbol()), w = eD(f, t, (0, g.useContext)(eZ).setReference, J(e => {
                        if (!b) {
                            if (e) s.buttons.current.push(E);
                            else {
                                let e = s.buttons.current.indexOf(E); - 1 !== e && s.buttons.current.splice(e, 1)
                            }
                            s.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e && u({
                                type: 2,
                                button: e
                            })
                        }
                    })), x = eD(f, t), _ = ey(f), T = J(e => {
                        var t, r, n;
                        if (b) {
                            if (1 === s.popoverState) return;
                            switch (e.key) {
                                case e4.Space:
                                case e4.Enter:
                                    e.preventDefault(), null == (r = (t = e.target).click) || r.call(t), u({
                                        type: 1
                                    }), null == (n = s.button) || n.focus()
                            }
                        } else switch (e.key) {
                            case e4.Space:
                            case e4.Enter:
                                e.preventDefault(), e.stopPropagation(), 1 === s.popoverState && (null == v || v(s.buttonId)), u({
                                    type: 0
                                });
                                break;
                            case e4.Escape:
                                if (0 !== s.popoverState) return null == v ? void 0 : v(s.buttonId);
                                if (!f.current || null != _ && _.activeElement && !f.current.contains(_.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), u({
                                    type: 1
                                })
                        }
                    }), S = J(e => {
                        b || e.key === e4.Space && e.preventDefault()
                    }), A = J(e => {
                        var t, r;
                        e9(e.currentTarget) || i || (b ? (u({
                            type: 1
                        }), null == (t = s.button) || t.focus()) : (e.preventDefault(), e.stopPropagation(), 1 === s.popoverState && (null == v || v(s.buttonId)), u({
                            type: 0
                        }), null == (r = s.button) || r.focus()))
                    }), L = J(e => {
                        e.preventDefault(), e.stopPropagation()
                    }), {
                        isFocusVisible: C,
                        focusProps: I
                    } = function(e = {}) {
                        var t, r, n;
                        let {
                            autoFocus: o = !1,
                            isTextInput: i,
                            within: a
                        } = e, l = (0, g.useRef)({
                            isFocused: !1,
                            isFocusVisible: o || R()
                        }), [s, u] = (0, g.useState)(!1), [c, f] = (0, g.useState)(() => l.current.isFocused && l.current.isFocusVisible), p = (0, g.useCallback)(() => f(l.current.isFocused && l.current.isFocusVisible), []), m = (0, g.useCallback)(e => {
                            l.current.isFocused = e, u(e), p()
                        }, [p]);
                        t = e => {
                            l.current.isFocusVisible = e, p()
                        }, r = [], n = {
                            isTextInput: i
                        }, M(), (0, g.useEffect)(() => {
                            let e = (e, r) => {
                                (function(e, t, r) {
                                    var n;
                                    let o = "undefined" != typeof window ? h(null == r ? void 0 : r.target).HTMLInputElement : HTMLInputElement,
                                        i = "undefined" != typeof window ? h(null == r ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                        a = "undefined" != typeof window ? h(null == r ? void 0 : r.target).HTMLElement : HTMLElement,
                                        l = "undefined" != typeof window ? h(null == r ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
                                    return !((e = e || (null == r ? void 0 : r.target) instanceof o && !H.has(null == r ? void 0 : null === (n = r.target) || void 0 === n ? void 0 : n.type) || (null == r ? void 0 : r.target) instanceof i || (null == r ? void 0 : r.target) instanceof a && (null == r ? void 0 : r.target.isContentEditable)) && "keyboard" === t && r instanceof l && !P[r.key])
                                })(!!(null == n ? void 0 : n.isTextInput), e, r) && t(R())
                            };
                            return y.add(e), () => {
                                y.delete(e)
                            }
                        }, r);
                        let {
                            focusProps: v
                        } = function(e) {
                            let {
                                isDisabled: t,
                                onFocus: r,
                                onBlur: n,
                                onFocusChange: o
                            } = e, i = (0, g.useCallback)(e => {
                                if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
                            }, [n, o]), a = N(i), l = (0, g.useCallback)(e => {
                                let t = d(e.target);
                                e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), o && o(!0), a(e))
                            }, [o, r, a]);
                            return {
                                focusProps: {
                                    onFocus: !t && (r || o || n) ? l : void 0,
                                    onBlur: !t && (n || o) ? i : void 0
                                }
                            }
                        }({
                            isDisabled: a,
                            onFocusChange: m
                        }), {
                            focusWithinProps: b
                        } = function(e) {
                            let {
                                isDisabled: t,
                                onBlurWithin: r,
                                onFocusWithin: n,
                                onFocusWithinChange: o
                            } = e, i = (0, g.useRef)({
                                isFocusWithin: !1
                            }), a = (0, g.useCallback)(e => {
                                i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, r && r(e), o && o(!1))
                            }, [r, o, i]), l = N(a), s = (0, g.useCallback)(e => {
                                i.current.isFocusWithin || document.activeElement !== e.target || (n && n(e), o && o(!0), i.current.isFocusWithin = !0, l(e))
                            }, [n, o, l]);
                            return t ? {
                                focusWithinProps: {
                                    onFocus: void 0,
                                    onBlur: void 0
                                }
                            } : {
                                focusWithinProps: {
                                    onFocus: s,
                                    onBlur: a
                                }
                            }
                        }({
                            isDisabled: !a,
                            onFocusWithinChange: m
                        });
                        return {
                            isFocused: s,
                            isFocusVisible: c,
                            focusProps: a ? b : v
                        }
                    }({
                        autoFocus: a
                    }), {
                        isHovered: O,
                        hoverProps: k
                    } = function(e) {
                        let {
                            onHoverStart: t,
                            onHoverChange: r,
                            onHoverEnd: n,
                            isDisabled: o
                        } = e, [i, a] = (0, g.useState)(!1), l = (0, g.useRef)({
                            isHovered: !1,
                            ignoreEmulatedMouseEvents: !1,
                            pointerType: "",
                            target: null
                        }).current;
                        (0, g.useEffect)(U, []);
                        let {
                            hoverProps: s,
                            triggerHoverEnd: u
                        } = (0, g.useMemo)(() => {
                            let e = (e, n) => {
                                    if (l.pointerType = n, o || "touch" === n || l.isHovered || !e.currentTarget.contains(e.target)) return;
                                    l.isHovered = !0;
                                    let i = e.currentTarget;
                                    l.target = i, t && t({
                                        type: "hoverstart",
                                        target: i,
                                        pointerType: n
                                    }), r && r(!0), a(!0)
                                },
                                i = (e, t) => {
                                    if (l.pointerType = "", l.target = null, "touch" === t || !l.isHovered) return;
                                    l.isHovered = !1;
                                    let o = e.currentTarget;
                                    n && n({
                                        type: "hoverend",
                                        target: o,
                                        pointerType: t
                                    }), r && r(!1), a(!1)
                                },
                                s = {};
                            return "undefined" != typeof PointerEvent ? (s.onPointerEnter = t => {
                                B && "mouse" === t.pointerType || e(t, t.pointerType)
                            }, s.onPointerLeave = e => {
                                !o && e.currentTarget.contains(e.target) && i(e, e.pointerType)
                            }) : (s.onTouchStart = () => {
                                l.ignoreEmulatedMouseEvents = !0
                            }, s.onMouseEnter = t => {
                                l.ignoreEmulatedMouseEvents || B || e(t, "mouse"), l.ignoreEmulatedMouseEvents = !1
                            }, s.onMouseLeave = e => {
                                !o && e.currentTarget.contains(e.target) && i(e, "mouse")
                            }), {
                                hoverProps: s,
                                triggerHoverEnd: i
                            }
                        }, [t, r, n, o, l]);
                        return (0, g.useEffect)(() => {
                            o && u({
                                currentTarget: l.target
                            }, l.pointerType)
                        }, [o]), {
                            hoverProps: s,
                            isHovered: i
                        }
                    }({
                        isDisabled: i
                    }), {
                        pressed: F,
                        pressProps: D
                    } = function() {
                        let {
                            disabled: e = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, g.useRef)(null), [r, n] = (0, g.useState)(!1), o = Y(), i = J(() => {
                            t.current = null, n(!1), o.dispose()
                        }), a = J(e => {
                            if (o.dispose(), null === t.current) {
                                t.current = e.currentTarget, n(!0);
                                {
                                    let r = K(e.currentTarget);
                                    o.addEventListener(r, "pointerup", i, !1), o.addEventListener(r, "pointermove", e => {
                                        if (t.current) {
                                            var r, o;
                                            let i, a;
                                            n((i = e.width / 2, a = e.height / 2, r = {
                                                top: e.clientY - a,
                                                right: e.clientX + i,
                                                bottom: e.clientY + a,
                                                left: e.clientX - i
                                            }, o = t.current.getBoundingClientRect(), !(!r || !o || r.right < o.left || r.left > o.right || r.bottom < o.top || r.top > o.bottom)))
                                        }
                                    }, !1), o.addEventListener(r, "pointercancel", i, !1)
                                }
                            }
                        });
                        return {
                            pressed: r,
                            pressProps: e ? {} : {
                                onPointerDown: a,
                                onPointerUp: i,
                                onClick: i
                            }
                        }
                    }({
                        disabled: i
                    }), j = 0 === s.popoverState, G = (0, g.useMemo)(() => ({
                        open: j,
                        active: F || j,
                        disabled: i,
                        hover: O,
                        focus: C,
                        autofocus: a
                    }), [j, O, C, F, i, a]), V = (r = s.button, (0, g.useMemo)(() => {
                        var t;
                        if (e.type) return e.type;
                        let n = null != (t = e.as) ? t : "button";
                        if ("string" == typeof n && "button" === n.toLowerCase() || (null == r ? void 0 : r.tagName) === "BUTTON" && !r.hasAttribute("type")) return "button"
                    }, [e.type, e.as, r])), z = b ? eA({
                        ref: x,
                        type: V,
                        onKeyDown: T,
                        onClick: A,
                        disabled: i || void 0,
                        autoFocus: a
                    }, I, k, D) : eA({
                        ref: w,
                        id: s.buttonId,
                        type: V,
                        "aria-expanded": 0 === s.popoverState,
                        "aria-controls": s.panel ? s.panelId : void 0,
                        disabled: i || void 0,
                        autoFocus: a,
                        onKeyDown: T,
                        onKeyUp: S,
                        onClick: A,
                        onMouseDown: L
                    }, I, k, D), W = eU(), q = J(() => {
                        let e = s.panel;
                        e && ee(W.current, {
                            [ej.Forwards]: () => ec(e, en.First),
                            [ej.Backwards]: () => ec(e, en.Last)
                        }) === eo.Error && ec(ea().filter(e => "true" !== e.dataset.headlessuiFocusGuard), ee(W.current, {
                            [ej.Forwards]: en.Next,
                            [ej.Backwards]: en.Previous
                        }), {
                            relativeTo: s.button
                        })
                    }), X = eP();
                    return g.createElement(g.Fragment, null, X({
                        ourProps: z,
                        theirProps: l,
                        slot: G,
                        defaultTag: "button",
                        name: "Popover.Button"
                    }), j && !b && c && g.createElement(eR, {
                        id: p,
                        ref: s.afterButtonSentinel,
                        features: eI.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: q
                    }))
                }),
                tP = eL(ty),
                t_ = eL(ty),
                tT = eL(function(e, t) {
                    var r, n;
                    let o;
                    let i = (0, g.useId)(),
                        {
                            id: a = "headlessui-popover-panel-".concat(i),
                            focus: l = !1,
                            anchor: s,
                            portal: u = !1,
                            modal: c = !1,
                            transition: f = !1,
                            ...d
                        } = e,
                        [h, p] = tf("Popover.Panel"),
                        {
                            close: m,
                            isPortalled: v
                        } = th("Popover.Panel"),
                        b = "headlessui-focus-sentinel-before-".concat(i),
                        y = "headlessui-focus-sentinel-after-".concat(i),
                        E = (0, g.useRef)(null),
                        w = (0, g.useMemo)(() => s ? "string" == typeof s ? {
                            to: s
                        } : s : null, [s]),
                        [x, P] = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            !1 === e && (e = null), "string" == typeof e && (e = {
                                to: e
                            });
                            let t = (0, g.useContext)(eQ),
                                r = (0, g.useMemo)(() => e, [JSON.stringify(e, (e, t) => {
                                    var r;
                                    return null != (r = null == t ? void 0 : t.outerHTML) ? r : t
                                })]);
                            Z(() => {
                                null == t || t(null != r ? r : null)
                            }, [t, r]);
                            let n = (0, g.useContext)(eZ);
                            return (0, g.useMemo)(() => [n.setFloating, e ? n.styles : {}], [n.setFloating, e, n.styles])
                        }(w),
                        _ = function() {
                            let {
                                getFloatingProps: e,
                                slot: t
                            } = (0, g.useContext)(eZ);
                            return (0, g.useCallback)(function() {
                                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                                return Object.assign({}, e(...n), {
                                    "data-anchor": t.anchor
                                })
                            }, [e, t])
                        }();
                    w && (u = !0);
                    let [T, S] = (0, g.useState)(null), A = eD(E, t, w ? x : null, J(e => p({
                        type: 4,
                        panel: e
                    })), S), L = ey(E);
                    Z(() => (p({
                        type: 5,
                        panelId: a
                    }), () => {
                        p({
                            type: 5,
                            panelId: null
                        })
                    }), [a, p]);
                    let C = e3(),
                        [M, I] = eW(f, T, null !== C ? (C & e8.Open) === e8.Open : 0 === h.popoverState);
                    r = h.button, n = () => {
                            p({
                                type: 1
                            })
                        }, o = Q(e => {
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && n()
                        }), (0, g.useEffect)(() => {
                            if (!M) return;
                            let e = null === r ? null : r instanceof HTMLElement ? r : r.current;
                            if (!e) return;
                            let t = $();
                            if ("undefined" != typeof ResizeObserver) {
                                let r = new ResizeObserver(() => o.current(e));
                                r.observe(e), t.add(() => r.disconnect())
                            }
                            if ("undefined" != typeof IntersectionObserver) {
                                let r = new IntersectionObserver(() => o.current(e));
                                r.observe(e), t.add(() => r.disconnect())
                            }
                            return () => t.dispose()
                        }, [r, o, M]),
                        function(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => [document.body];
                            ! function(e, t) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => ({
                                        containers: []
                                    }),
                                    n = em(eN),
                                    o = t ? n.get(t) : void 0;
                                o && o.count, Z(() => {
                                    if (!(!t || !e)) return eN.dispatch("PUSH", t, r), () => eN.dispatch("POP", t, r)
                                }, [e, t])
                            }(ev(e, "scroll-lock"), t, e => {
                                var t;
                                return {
                                    containers: [...null != (t = e.containers) ? t : [], r]
                                }
                            })
                        }(!h.__demoMode && c && M, L);
                    let R = J(e => {
                        var t;
                        if (e.key === e4.Escape) {
                            if (0 !== h.popoverState || !E.current || null != L && L.activeElement && !E.current.contains(L.activeElement)) return;
                            e.preventDefault(), e.stopPropagation(), p({
                                type: 1
                            }), null == (t = h.button) || t.focus()
                        }
                    });
                    (0, g.useEffect)(() => {
                        var t;
                        e.static || 1 === h.popoverState && (null == (t = e.unmount) || t) && p({
                            type: 4,
                            panel: null
                        })
                    }, [h.popoverState, e.unmount, e.static, p]), (0, g.useEffect)(() => {
                        if (h.__demoMode || !l || 0 !== h.popoverState || !E.current) return;
                        let e = null == L ? void 0 : L.activeElement;
                        E.current.contains(e) || ec(E.current, en.First)
                    }, [h.__demoMode, l, E.current, h.popoverState]);
                    let H = (0, g.useMemo)(() => ({
                            open: 0 === h.popoverState,
                            close: m
                        }), [h.popoverState, m]),
                        O = eA(w ? _() : {}, {
                            ref: A,
                            id: a,
                            onKeyDown: R,
                            onBlur: l && 0 === h.popoverState ? e => {
                                var t, r, n, o, i;
                                let a = e.relatedTarget;
                                a && E.current && (null != (t = E.current) && t.contains(a) || (p({
                                    type: 1
                                }), (null != (n = null == (r = h.beforePanelSentinel.current) ? void 0 : r.contains) && n.call(r, a) || null != (i = null == (o = h.afterPanelSentinel.current) ? void 0 : o.contains) && i.call(o, a)) && a.focus({
                                    preventScroll: !0
                                })))
                            } : void 0,
                            tabIndex: -1,
                            style: {
                                ...d.style,
                                ...P,
                                "--button-width": function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        [r, n] = (0, g.useReducer)(() => ({}), {}),
                                        o = (0, g.useMemo)(() => (function(e) {
                                            if (null === e) return {
                                                width: 0,
                                                height: 0
                                            };
                                            let {
                                                width: t,
                                                height: r
                                            } = e.getBoundingClientRect();
                                            return {
                                                width: t,
                                                height: r
                                            }
                                        })(e), [e, r]);
                                    return Z(() => {
                                        if (!e) return;
                                        let t = new ResizeObserver(n);
                                        return t.observe(e), () => {
                                            t.disconnect()
                                        }
                                    }, [e]), t ? {
                                        width: "".concat(o.width, "px"),
                                        height: "".concat(o.height, "px")
                                    } : o
                                }(h.button, !0).width
                            },
                            ...ez(I)
                        }),
                        k = eU(),
                        N = J(() => {
                            let e = E.current;
                            e && ee(k.current, {
                                [ej.Forwards]: () => {
                                    var t;
                                    ec(e, en.First) === eo.Error && (null == (t = h.afterPanelSentinel.current) || t.focus())
                                },
                                [ej.Backwards]: () => {
                                    var e;
                                    null == (e = h.button) || e.focus({
                                        preventScroll: !0
                                    })
                                }
                            })
                        }),
                        B = J(() => {
                            let e = E.current;
                            e && ee(k.current, {
                                [ej.Forwards]: () => {
                                    if (!h.button) return;
                                    let e = ea(),
                                        t = e.indexOf(h.button),
                                        r = e.slice(0, t + 1),
                                        n = [...e.slice(t + 1), ...r];
                                    for (let e of n.slice())
                                        if ("true" === e.dataset.headlessuiFocusGuard || null != T && T.contains(e)) {
                                            let t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                                        } ec(n, en.First, {
                                        sorted: !1
                                    })
                                },
                                [ej.Backwards]: () => {
                                    var t;
                                    ec(e, en.Previous) === eo.Error && (null == (t = h.button) || t.focus())
                                }
                            })
                        }),
                        F = eP();
                    return g.createElement(e6, null, g.createElement(tg.Provider, {
                        value: a
                    }, g.createElement(td.Provider, {
                        value: {
                            close: m,
                            isPortalled: v
                        }
                    }, g.createElement(ta, {
                        enabled: !!u && (e.static || M)
                    }, M && v && g.createElement(eR, {
                        id: b,
                        ref: h.beforePanelSentinel,
                        features: eI.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: N
                    }), F({
                        ourProps: O,
                        theirProps: d,
                        slot: H,
                        defaultTag: "div",
                        features: tE,
                        visible: M,
                        name: "Popover.Panel"
                    }), M && v && g.createElement(eR, {
                        id: y,
                        ref: h.afterPanelSentinel,
                        features: eI.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: B
                    })))))
                }),
                tS = Object.assign(tw, {
                    Button: tx,
                    Backdrop: t_,
                    Overlay: tP,
                    Panel: tT,
                    Group: eL(function(e, t) {
                        let r = (0, g.useRef)(null),
                            n = eD(r, t),
                            [o, i] = (0, g.useState)([]),
                            a = J(e => {
                                i(t => {
                                    let r = t.indexOf(e);
                                    if (-1 !== r) {
                                        let e = t.slice();
                                        return e.splice(r, 1), e
                                    }
                                    return t
                                })
                            }),
                            l = J(e => (i(t => [...t, e]), () => a(e))),
                            s = J(() => {
                                var e;
                                let t = K(r);
                                if (!t) return !1;
                                let n = t.activeElement;
                                return !!(null != (e = r.current) && e.contains(n)) || o.some(e => {
                                    var r, o;
                                    return (null == (r = t.getElementById(e.buttonId.current)) ? void 0 : r.contains(n)) || (null == (o = t.getElementById(e.panelId.current)) ? void 0 : o.contains(n))
                                })
                            }),
                            u = J(e => {
                                for (let t of o) t.buttonId.current !== e && t.close()
                            }),
                            c = (0, g.useMemo)(() => ({
                                registerPopover: l,
                                unregisterPopover: a,
                                isFocusWithinPopoverGroup: s,
                                closeOthers: u
                            }), [l, a, s, u]),
                            f = (0, g.useMemo)(() => ({}), []),
                            d = eP();
                        return g.createElement(eO, null, g.createElement(tp.Provider, {
                            value: c
                        }, d({
                            ourProps: {
                                ref: n
                            },
                            theirProps: e,
                            slot: f,
                            defaultTag: "div",
                            name: "Popover.Group"
                        })))
                    })
                })
        },
        8862: (e, t, r) => {
            r.d(t, {
                CS: () => rd,
                zh: () => t3
            });
            var n, o, i, a, l = P(),
                s = e => y(e, l),
                u = P();
            s.write = e => y(e, u);
            var c = P();
            s.onStart = e => y(e, c);
            var f = P();
            s.onFrame = e => y(e, f);
            var d = P();
            s.onFinish = e => y(e, d);
            var h = [];
            s.setTimeout = (e, t) => {
                let r = s.now() + t,
                    n = () => {
                        let e = h.findIndex(e => e.cancel == n);
                        ~e && h.splice(e, 1), v -= ~e ? 1 : 0
                    },
                    o = {
                        time: r,
                        handler: e,
                        cancel: n
                    };
                return h.splice(p(r), 0, o), v += 1, E(), o
            };
            var p = e => ~(~h.findIndex(t => t.time > e) || ~h.length);
            s.cancel = e => {
                c.delete(e), f.delete(e), d.delete(e), l.delete(e), u.delete(e)
            }, s.sync = e => {
                b = !0, s.batchedUpdates(e), b = !1
            }, s.throttle = e => {
                let t;

                function r() {
                    try {
                        e(...t)
                    } finally {
                        t = null
                    }
                }

                function n(...e) {
                    t = e, s.onStart(r)
                }
                return n.handler = e, n.cancel = () => {
                    c.delete(r), t = null
                }, n
            };
            var m = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
            s.use = e => m = e, s.now = "undefined" != typeof performance ? () => performance.now() : Date.now, s.batchedUpdates = e => e(), s.catch = console.error, s.frameLoop = "always", s.advance = () => {
                "demand" !== s.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : x()
            };
            var g = -1,
                v = 0,
                b = !1;

            function y(e, t) {
                b ? (t.delete(e), e(0)) : (t.add(e), E())
            }

            function E() {
                g < 0 && (g = 0, "demand" !== s.frameLoop && m(w))
            }

            function w() {
                ~g && (m(w), s.batchedUpdates(x))
            }

            function x() {
                let e = g,
                    t = p(g = s.now());
                if (t && (_(h.splice(0, t), e => e.handler()), v -= t), !v) {
                    g = -1;
                    return
                }
                c.flush(), l.flush(e ? Math.min(64, g - e) : 16.667), f.flush(), u.flush(), d.flush()
            }

            function P() {
                let e = new Set,
                    t = e;
                return {
                    add(r) {
                        v += t != e || e.has(r) ? 0 : 1, e.add(r)
                    },
                    delete: r => (v -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
                    flush(r) {
                        t.size && (e = new Set, v -= t.size, _(t, t => t(r) && e.add(t)), v += e.size, t = e)
                    }
                }
            }

            function _(e, t) {
                e.forEach(e => {
                    try {
                        t(e)
                    } catch (e) {
                        s.catch(e)
                    }
                })
            }
            var T = r(2115),
                S = Object.defineProperty,
                A = {};

            function L() {}((e, t) => {
                for (var r in t) S(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(A, {
                assign: () => U,
                colors: () => F,
                createStringInterpolator: () => n,
                skipAnimation: () => D,
                to: () => o,
                willAdvance: () => j
            });
            var C = (e, t, r) => Object.defineProperty(e, t, {
                    value: r,
                    writable: !0,
                    configurable: !0
                }),
                M = {
                    arr: Array.isArray,
                    obj: e => !!e && "Object" === e.constructor.name,
                    fun: e => "function" == typeof e,
                    str: e => "string" == typeof e,
                    num: e => "number" == typeof e,
                    und: e => void 0 === e
                };

            function I(e, t) {
                if (M.arr(e)) {
                    if (!M.arr(t) || e.length !== t.length) return !1;
                    for (let r = 0; r < e.length; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                }
                return e === t
            }
            var R = (e, t) => e.forEach(t);

            function H(e, t, r) {
                if (M.arr(e)) {
                    for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
                    return
                }
                for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
            }
            var O = e => M.und(e) ? [] : M.arr(e) ? e : [e];

            function k(e, t) {
                if (e.size) {
                    let r = Array.from(e);
                    e.clear(), R(r, t)
                }
            }
            var N = (e, ...t) => k(e, e => e(...t)),
                B = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                F = null,
                D = !1,
                j = L,
                U = e => {
                    e.to && (o = e.to), e.now && (s.now = e.now), void 0 !== e.colors && (F = e.colors), null != e.skipAnimation && (D = e.skipAnimation), e.createStringInterpolator && (n = e.createStringInterpolator), e.requestAnimationFrame && s.use(e.requestAnimationFrame), e.batchedUpdates && (s.batchedUpdates = e.batchedUpdates), e.willAdvance && (j = e.willAdvance), e.frameLoop && (s.frameLoop = e.frameLoop)
                },
                G = new Set,
                V = [],
                z = [],
                W = 0,
                q = {
                    get idle() {
                        return !G.size && !V.length
                    },
                    start(e) {
                        W > e.priority ? (G.add(e), s.onStart(K)) : (X(e), s(Y))
                    },
                    advance: Y,
                    sort(e) {
                        if (W) s.onFrame(() => q.sort(e));
                        else {
                            let t = V.indexOf(e);
                            ~t && (V.splice(t, 1), $(e))
                        }
                    },
                    clear() {
                        V = [], G.clear()
                    }
                };

            function K() {
                G.forEach(X), G.clear(), s(Y)
            }

            function X(e) {
                V.includes(e) || $(e)
            }

            function $(e) {
                V.splice(function(e, t) {
                    let r = e.findIndex(t);
                    return r < 0 ? e.length : r
                }(V, t => t.priority > e.priority), 0, e)
            }

            function Y(e) {
                let t = z;
                for (let r = 0; r < V.length; r++) {
                    let n = V[r];
                    W = n.priority, n.idle || (j(n), n.advance(e), n.idle || t.push(n))
                }
                return W = 0, (z = V).length = 0, (V = t).length > 0
            }
            var Z = "[-+]?\\d*\\.?\\d+",
                Q = Z + "%";

            function J(...e) {
                return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var ee = RegExp("rgb" + J(Z, Z, Z)),
                et = RegExp("rgba" + J(Z, Z, Z, Z)),
                er = RegExp("hsl" + J(Z, Q, Q)),
                en = RegExp("hsla" + J(Z, Q, Q, Z)),
                eo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ei = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ea = /^#([0-9a-fA-F]{6})$/,
                el = /^#([0-9a-fA-F]{8})$/;

            function es(e, t, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }

            function eu(e, t, r) {
                let n = r < .5 ? r * (1 + t) : r + t - r * t,
                    o = 2 * r - n;
                return Math.round(255 * es(o, n, e + 1 / 3)) << 24 | Math.round(255 * es(o, n, e)) << 16 | Math.round(255 * es(o, n, e - 1 / 3)) << 8
            }

            function ec(e) {
                let t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t
            }

            function ef(e) {
                return (parseFloat(e) % 360 + 360) % 360 / 360
            }

            function ed(e) {
                let t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
            }

            function eh(e) {
                let t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100
            }

            function ep(e) {
                let t;
                let r = "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 0xffffffff ? e : null : (t = ea.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : F && void 0 !== F[e] ? F[e] : (t = ee.exec(e)) ? (ec(t[1]) << 24 | ec(t[2]) << 16 | ec(t[3]) << 8 | 255) >>> 0 : (t = et.exec(e)) ? (ec(t[1]) << 24 | ec(t[2]) << 16 | ec(t[3]) << 8 | ed(t[4])) >>> 0 : (t = eo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = el.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ei.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = er.exec(e)) ? (255 | eu(ef(t[1]), eh(t[2]), eh(t[3]))) >>> 0 : (t = en.exec(e)) ? (eu(ef(t[1]), eh(t[2]), eh(t[3])) | ed(t[4])) >>> 0 : null;
                if (null === r) return e;
                let n = (0xff000000 & (r = r || 0)) >>> 24,
                    o = (0xff0000 & r) >>> 16,
                    i = (65280 & r) >>> 8,
                    a = (255 & r) / 255;
                return `rgba(${n}, ${o}, ${i}, ${a})`
            }
            var em = (e, t, r) => {
                    if (M.fun(e)) return e;
                    if (M.arr(e)) return em({
                        range: e,
                        output: t,
                        extrapolate: r
                    });
                    if (M.str(e.output[0])) return n(e);
                    let o = e.output,
                        i = e.range || [0, 1],
                        a = e.extrapolateLeft || e.extrapolate || "extend",
                        l = e.extrapolateRight || e.extrapolate || "extend",
                        s = e.easing || (e => e);
                    return t => {
                        let r = function(e, t) {
                            for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
                            return r - 1
                        }(t, i);
                        return function(e, t, r, n, o, i, a, l, s) {
                            let u = s ? s(e) : e;
                            if (u < t) {
                                if ("identity" === a) return u;
                                "clamp" === a && (u = t)
                            }
                            if (u > r) {
                                if ("identity" === l) return u;
                                "clamp" === l && (u = r)
                            }
                            return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = i(u), n === -1 / 0 ? u = -u : o === 1 / 0 ? u += n : u = u * (o - n) + n, u)
                        }(t, i[r], i[r + 1], o[r], o[r + 1], s, a, l, e.map)
                    }
                },
                eg = Symbol.for("FluidValue.get"),
                ev = Symbol.for("FluidValue.observers"),
                eb = e => !!(e && e[eg]),
                ey = e => e && e[eg] ? e[eg]() : e,
                eE = e => e[ev] || null;

            function ew(e, t) {
                let r = e[ev];
                r && r.forEach(e => {
                    e.eventObserved ? e.eventObserved(t) : e(t)
                })
            }
            var ex = class {
                    constructor(e) {
                        if (!e && !(e = this.get)) throw Error("Unknown getter");
                        eP(this, e)
                    }
                },
                eP = (e, t) => eS(e, eg, t);

            function e_(e, t) {
                if (e[eg]) {
                    let r = e[ev];
                    r || eS(e, ev, r = new Set), !r.has(t) && (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
                }
                return t
            }

            function eT(e, t) {
                let r = e[ev];
                if (r && r.has(t)) {
                    let n = r.size - 1;
                    n ? r.delete(t) : e[ev] = null, e.observerRemoved && e.observerRemoved(n, t)
                }
            }
            var eS = (e, t, r) => Object.defineProperty(e, t, {
                    value: r,
                    writable: !0,
                    configurable: !0
                }),
                eA = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                eL = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                eC = RegExp(`(${eA.source})(%|[a-z]+)`, "i"),
                eM = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                eI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
                eR = e => {
                    let [t, r] = eH(e);
                    if (!t || B()) return e;
                    let n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
                    if (n) return n.trim();
                    if (r && r.startsWith("--")) {
                        let e = window.getComputedStyle(document.documentElement).getPropertyValue(r);
                        if (e) return e
                    } else if (r && eI.test(r)) return eR(r);
                    else if (r) return r;
                    return e
                },
                eH = e => {
                    let t = eI.exec(e);
                    if (!t) return [, ];
                    let [, r, n] = t;
                    return [r, n]
                },
                eO = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
                ek = e => {
                    i || (i = F ? RegExp(`(${Object.keys(F).join("|")})(?!\\w)`, "g") : /^\b$/);
                    let t = e.output.map(e => ey(e).replace(eI, eR).replace(eL, ep).replace(i, ep)),
                        r = t.map(e => e.match(eA).map(Number)),
                        n = r[0].map((e, t) => r.map(e => {
                            if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                            return e[t]
                        })).map(t => em({
                            ...e,
                            output: t
                        }));
                    return e => {
                        let r = !eC.test(t[0]) && t.find(e => eC.test(e))?.replace(eA, ""),
                            o = 0;
                        return t[0].replace(eA, () => `${n[o++](e)}${r||""}`).replace(eM, eO)
                    }
                },
                eN = "react-spring: ",
                eB = e => {
                    let t = !1;
                    if ("function" != typeof e) throw TypeError(`${eN}once requires a function parameter`);
                    return (...r) => {
                        t || (e(...r), t = !0)
                    }
                },
                eF = eB(console.warn),
                eD = eB(console.warn);

            function ej(e) {
                return M.str(e) && ("#" == e[0] || /\d/.test(e) || !B() && eI.test(e) || e in (F || {}))
            }
            var eU = new WeakMap,
                eG = new Set,
                eV = () => {
                    let e = () => {
                        eG.forEach(e => e({
                            width: window.innerWidth,
                            height: window.innerHeight
                        }))
                    };
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                },
                ez = B() ? T.useEffect : T.useLayoutEffect,
                eW = () => {
                    let e = (0, T.useRef)(!1);
                    return ez(() => (e.current = !0, () => {
                        e.current = !1
                    }), []), e
                };

            function eq() {
                let e = (0, T.useState)()[1],
                    t = eW();
                return () => {
                    t.current && e(Math.random())
                }
            }
            var eK = e => (0, T.useEffect)(e, eX),
                eX = [];

            function e$(e) {
                let t = (0, T.useRef)();
                return (0, T.useEffect)(() => {
                    t.current = e
                }), t.current
            }
            var eY = Symbol.for("Animated:node"),
                eZ = e => !!e && e[eY] === e,
                eQ = e => e && e[eY],
                eJ = (e, t) => C(e, eY, t),
                e0 = e => e && e[eY] && e[eY].getPayload(),
                e1 = class {
                    constructor() {
                        eJ(this, this)
                    }
                    getPayload() {
                        return this.payload || []
                    }
                },
                e2 = class extends e1 {
                    constructor(e) {
                        super(), this._value = e, this.done = !0, this.durationProgress = 0, M.num(this._value) && (this.lastPosition = this._value)
                    }
                    static create(e) {
                        return new e2(e)
                    }
                    getPayload() {
                        return [this]
                    }
                    getValue() {
                        return this._value
                    }
                    setValue(e, t) {
                        return M.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
                    }
                    reset() {
                        let {
                            done: e
                        } = this;
                        this.done = !1, M.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
                    }
                },
                e8 = class extends e2 {
                    constructor(e) {
                        super(0), this._string = null, this._toString = em({
                            output: [e, e]
                        })
                    }
                    static create(e) {
                        return new e8(e)
                    }
                    getValue() {
                        let e = this._string;
                        return null == e ? this._string = this._toString(this._value) : e
                    }
                    setValue(e) {
                        if (M.str(e)) {
                            if (e == this._string) return !1;
                            this._string = e, this._value = 1
                        } else {
                            if (!super.setValue(e)) return !1;
                            this._string = null
                        }
                        return !0
                    }
                    reset(e) {
                        e && (this._toString = em({
                            output: [this.getValue(), e]
                        })), this._value = 0, super.reset()
                    }
                },
                e3 = {
                    dependencies: null
                },
                e5 = class extends e1 {
                    constructor(e) {
                        super(), this.source = e, this.setValue(e)
                    }
                    getValue(e) {
                        let t = {};
                        return H(this.source, (r, n) => {
                            eZ(r) ? t[n] = r.getValue(e) : eb(r) ? t[n] = ey(r) : e || (t[n] = r)
                        }), t
                    }
                    setValue(e) {
                        this.source = e, this.payload = this._makePayload(e)
                    }
                    reset() {
                        this.payload && R(this.payload, e => e.reset())
                    }
                    _makePayload(e) {
                        if (e) {
                            let t = new Set;
                            return H(e, this._addToPayload, t), Array.from(t)
                        }
                    }
                    _addToPayload(e) {
                        e3.dependencies && eb(e) && e3.dependencies.add(e);
                        let t = e0(e);
                        t && R(t, e => this.add(e))
                    }
                },
                e6 = class extends e5 {
                    constructor(e) {
                        super(e)
                    }
                    static create(e) {
                        return new e6(e)
                    }
                    getValue() {
                        return this.source.map(e => e.getValue())
                    }
                    setValue(e) {
                        let t = this.getPayload();
                        return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(e9)), !0)
                    }
                };

            function e9(e) {
                return (ej(e) ? e8 : e2).create(e)
            }

            function e4(e) {
                let t = eQ(e);
                return t ? t.constructor : M.arr(e) ? e6 : ej(e) ? e8 : e2
            }
            var e7 = (e, t) => {
                    let r = !M.fun(e) || e.prototype && e.prototype.isReactComponent;
                    return (0, T.forwardRef)((n, o) => {
                        let i = (0, T.useRef)(null),
                            a = r && (0, T.useCallback)(e => {
                                i.current = function(e, t) {
                                    return e && (M.fun(e) ? e(t) : e.current = t), t
                                }(o, e)
                            }, [o]),
                            [l, u] = function(e, t) {
                                let r = new Set;
                                return e3.dependencies = r, e.style && (e = {
                                    ...e,
                                    style: t.createAnimatedStyle(e.style)
                                }), e = new e5(e), e3.dependencies = null, [e, r]
                            }(n, t),
                            c = eq(),
                            f = () => {
                                let e = i.current;
                                (!r || e) && !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c()
                            },
                            d = new te(f, u),
                            h = (0, T.useRef)();
                        ez(() => (h.current = d, R(u, e => e_(e, d)), () => {
                            h.current && (R(h.current.deps, e => eT(e, h.current)), s.cancel(h.current.update))
                        })), (0, T.useEffect)(f, []), eK(() => () => {
                            let e = h.current;
                            R(e.deps, t => eT(t, e))
                        });
                        let p = t.getComponentProps(l.getValue());
                        return T.createElement(e, {
                            ...p,
                            ref: a
                        })
                    })
                },
                te = class {
                    constructor(e, t) {
                        this.update = e, this.deps = t
                    }
                    eventObserved(e) {
                        "change" == e.type && s.write(this.update)
                    }
                },
                tt = Symbol.for("AnimatedComponent"),
                tr = e => M.str(e) ? e : e && M.str(e.displayName) ? e.displayName : M.fun(e) && e.name || null;

            function tn(e, ...t) {
                return M.fun(e) ? e(...t) : e
            }
            var to = (e, t) => !0 === e || !!(t && e && (M.fun(e) ? e(t) : O(e).includes(t))),
                ti = (e, t) => M.obj(e) ? t && e[t] : e,
                ta = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
                tl = e => e,
                ts = (e, t = tl) => {
                    let r = tu;
                    e.default && !0 !== e.default && (r = Object.keys(e = e.default));
                    let n = {};
                    for (let o of r) {
                        let r = t(e[o], o);
                        M.und(r) || (n[o] = r)
                    }
                    return n
                },
                tu = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
                tc = {
                    config: 1,
                    from: 1,
                    to: 1,
                    ref: 1,
                    loop: 1,
                    reset: 1,
                    pause: 1,
                    cancel: 1,
                    reverse: 1,
                    immediate: 1,
                    default: 1,
                    delay: 1,
                    onProps: 1,
                    onStart: 1,
                    onChange: 1,
                    onPause: 1,
                    onResume: 1,
                    onRest: 1,
                    onResolve: 1,
                    items: 1,
                    trail: 1,
                    sort: 1,
                    expires: 1,
                    initial: 1,
                    enter: 1,
                    update: 1,
                    leave: 1,
                    children: 1,
                    onDestroyed: 1,
                    keys: 1,
                    callId: 1,
                    parentId: 1
                };

            function tf(e) {
                let t = function(e) {
                    let t = {},
                        r = 0;
                    if (H(e, (e, n) => {
                            !tc[n] && (t[n] = e, r++)
                        }), r) return t
                }(e);
                if (t) {
                    let r = {
                        to: t
                    };
                    return H(e, (e, n) => n in t || (r[n] = e)), r
                }
                return {
                    ...e
                }
            }

            function td(e) {
                return e = ey(e), M.arr(e) ? e.map(td) : ej(e) ? A.createStringInterpolator({
                    range: [0, 1],
                    output: [e, e]
                })(1) : e
            }

            function th(e) {
                return M.fun(e) || M.arr(e) && M.obj(e[0])
            }
            var tp = {
                    tension: 170,
                    friction: 26,
                    mass: 1,
                    damping: 1,
                    easing: e => e,
                    clamp: !1
                },
                tm = class {
                    constructor() {
                        this.velocity = 0, Object.assign(this, tp)
                    }
                };

            function tg(e, t) {
                if (M.und(t.decay)) {
                    let r = !M.und(t.tension) || !M.und(t.friction);
                    !r && M.und(t.frequency) && M.und(t.damping) && M.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
                } else e.duration = void 0
            }
            var tv = [],
                tb = class {
                    constructor() {
                        this.changed = !1, this.values = tv, this.toValues = null, this.fromValues = tv, this.config = new tm, this.immediate = !1
                    }
                };

            function ty(e, {
                key: t,
                props: r,
                defaultProps: n,
                state: o,
                actions: i
            }) {
                return new Promise((a, l) => {
                    let u, c;
                    let f = to(r.cancel ?? n?.cancel, t);
                    if (f) p();
                    else {
                        M.und(r.pause) || (o.paused = to(r.pause, t));
                        let e = n?.pause;
                        !0 !== e && (e = o.paused || to(e, t)), u = tn(r.delay || 0, t), e ? (o.resumeQueue.add(h), i.pause()) : (i.resume(), h())
                    }

                    function d() {
                        o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), u = c.time - s.now()
                    }

                    function h() {
                        u > 0 && !A.skipAnimation ? (o.delayed = !0, c = s.setTimeout(p, u), o.pauseQueue.add(d), o.timeouts.add(c)) : p()
                    }

                    function p() {
                        o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (f = !0);
                        try {
                            i.start({
                                ...r,
                                callId: e,
                                cancel: f
                            }, a)
                        } catch (e) {
                            l(e)
                        }
                    }
                })
            }
            var tE = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? tP(e.get()) : t.every(e => e.noop) ? tw(e.get()) : tx(e.get(), t.every(e => e.finished)),
                tw = e => ({
                    value: e,
                    noop: !0,
                    finished: !0,
                    cancelled: !1
                }),
                tx = (e, t, r = !1) => ({
                    value: e,
                    finished: t,
                    cancelled: r
                }),
                tP = e => ({
                    value: e,
                    cancelled: !0,
                    finished: !1
                });

            function t_(e, t, r, n) {
                let {
                    callId: o,
                    parentId: i,
                    onRest: a
                } = t, {
                    asyncTo: l,
                    promise: u
                } = r;
                return i || e !== l || t.reset ? r.promise = (async () => {
                    let c, f, d;
                    r.asyncId = o, r.asyncTo = e;
                    let h = ts(t, (e, t) => "onRest" === t ? void 0 : e),
                        p = new Promise((e, t) => (c = e, f = t)),
                        m = e => {
                            let t = o <= (r.cancelId || 0) && tP(n) || o !== r.asyncId && tx(n, !1);
                            if (t) throw e.result = t, f(e), e
                        },
                        g = (e, t) => {
                            let i = new tS,
                                a = new tA;
                            return (async () => {
                                if (A.skipAnimation) throw tT(r), a.result = tx(n, !1), f(a), a;
                                m(i);
                                let l = M.obj(e) ? {
                                    ...e
                                } : {
                                    ...t,
                                    to: e
                                };
                                l.parentId = o, H(h, (e, t) => {
                                    M.und(l[t]) && (l[t] = e)
                                });
                                let s = await n.start(l);
                                return m(i), r.paused && await new Promise(e => {
                                    r.resumeQueue.add(e)
                                }), s
                            })()
                        };
                    if (A.skipAnimation) return tT(r), tx(n, !1);
                    try {
                        let t;
                        t = M.arr(e) ? (async e => {
                            for (let t of e) await g(t)
                        })(e) : Promise.resolve(e(g, n.stop.bind(n))), await Promise.all([t.then(c), p]), d = tx(n.get(), !0, !1)
                    } catch (e) {
                        if (e instanceof tS) d = e.result;
                        else if (e instanceof tA) d = e.result;
                        else throw e
                    } finally {
                        o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? l : void 0, r.promise = i ? u : void 0)
                    }
                    return M.fun(a) && s.batchedUpdates(() => {
                        a(d, n, n.item)
                    }), d
                })() : u
            }

            function tT(e, t) {
                k(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
            }
            var tS = class extends Error {
                    constructor() {
                        super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
                    }
                },
                tA = class extends Error {
                    constructor() {
                        super("SkipAnimationSignal")
                    }
                },
                tL = e => e instanceof tM,
                tC = 1,
                tM = class extends ex {
                    constructor() {
                        super(...arguments), this.id = tC++, this._priority = 0
                    }
                    get priority() {
                        return this._priority
                    }
                    set priority(e) {
                        this._priority != e && (this._priority = e, this._onPriorityChange(e))
                    }
                    get() {
                        let e = eQ(this);
                        return e && e.getValue()
                    }
                    to(...e) {
                        return A.to(this, e)
                    }
                    interpolate(...e) {
                        return eF(`${eN}The "interpolate" function is deprecated in v9 (use "to" instead)`), A.to(this, e)
                    }
                    toJSON() {
                        return this.get()
                    }
                    observerAdded(e) {
                        1 == e && this._attach()
                    }
                    observerRemoved(e) {
                        0 == e && this._detach()
                    }
                    _attach() {}
                    _detach() {}
                    _onChange(e, t = !1) {
                        ew(this, {
                            type: "change",
                            parent: this,
                            value: e,
                            idle: t
                        })
                    }
                    _onPriorityChange(e) {
                        this.idle || q.sort(this), ew(this, {
                            type: "priority",
                            parent: this,
                            priority: e
                        })
                    }
                },
                tI = Symbol.for("SpringPhase"),
                tR = e => (1 & e[tI]) > 0,
                tH = e => (2 & e[tI]) > 0,
                tO = e => (4 & e[tI]) > 0,
                tk = (e, t) => t ? e[tI] |= 3 : e[tI] &= -3,
                tN = (e, t) => t ? e[tI] |= 4 : e[tI] &= -5,
                tB = class extends tM {
                    constructor(e, t) {
                        if (super(), this.animation = new tb, this.defaultProps = {}, this._state = {
                                paused: !1,
                                delayed: !1,
                                pauseQueue: new Set,
                                resumeQueue: new Set,
                                timeouts: new Set
                            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !M.und(e) || !M.und(t)) {
                            let r = M.obj(e) ? {
                                ...e
                            } : {
                                ...t,
                                from: e
                            };
                            M.und(r.default) && (r.default = !0), this.start(r)
                        }
                    }
                    get idle() {
                        return !(tH(this) || this._state.asyncTo) || tO(this)
                    }
                    get goal() {
                        return ey(this.animation.to)
                    }
                    get velocity() {
                        let e = eQ(this);
                        return e instanceof e2 ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
                    }
                    get hasAnimated() {
                        return tR(this)
                    }
                    get isAnimating() {
                        return tH(this)
                    }
                    get isPaused() {
                        return tO(this)
                    }
                    get isDelayed() {
                        return this._state.delayed
                    }
                    advance(e) {
                        let t = !0,
                            r = !1,
                            n = this.animation,
                            {
                                toValues: o
                            } = n,
                            {
                                config: i
                            } = n,
                            a = e0(n.to);
                        !a && eb(n.to) && (o = O(ey(n.to))), n.values.forEach((l, s) => {
                            if (l.done) return;
                            let u = l.constructor == e8 ? 1 : a ? a[s].lastPosition : o[s],
                                c = n.immediate,
                                f = u;
                            if (!c) {
                                let t;
                                if (f = l.lastPosition, i.tension <= 0) {
                                    l.done = !0;
                                    return
                                }
                                let r = l.elapsedTime += e,
                                    o = n.fromValues[s],
                                    a = null != l.v0 ? l.v0 : l.v0 = M.arr(i.velocity) ? i.velocity[s] : i.velocity,
                                    d = i.precision || (o == u ? .005 : Math.min(1, .001 * Math.abs(u - o)));
                                if (M.und(i.duration)) {
                                    if (i.decay) {
                                        let e = !0 === i.decay ? .998 : i.decay,
                                            n = Math.exp(-(1 - e) * r);
                                        f = o + a / (1 - e) * (1 - n), c = Math.abs(l.lastPosition - f) <= d, t = a * n
                                    } else {
                                        t = null == l.lastVelocity ? a : l.lastVelocity;
                                        let r = i.restVelocity || d / 10,
                                            n = i.clamp ? 0 : i.bounce,
                                            s = !M.und(n),
                                            h = o == u ? l.v0 > 0 : o < u,
                                            p = Math.ceil(e / 1);
                                        for (let e = 0; e < p && !(!(Math.abs(t) > r) && (c = Math.abs(u - f) <= d)); ++e) {
                                            s && (f == u || f > u == h) && (t = -t * n, f = u);
                                            let e = (-(1e-6 * i.tension) * (f - u) + -(.001 * i.friction) * t) / i.mass;
                                            t += 1 * e, f += 1 * t
                                        }
                                    }
                                } else {
                                    let n = 1;
                                    i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, l.durationProgress > 0 && (l.elapsedTime = i.duration * l.durationProgress, r = l.elapsedTime += e)), n = (n = (i.progress || 0) + r / this._memoizedDuration) > 1 ? 1 : n < 0 ? 0 : n, l.durationProgress = n), t = ((f = o + i.easing(n) * (u - o)) - l.lastPosition) / e, c = 1 == n
                                }
                                l.lastVelocity = t, Number.isNaN(f) && (console.warn("Got NaN while animating:", this), c = !0)
                            }
                            a && !a[s].done && (c = !1), c ? l.done = !0 : t = !1, l.setValue(f, i.round) && (r = !0)
                        });
                        let l = eQ(this),
                            s = l.getValue();
                        if (t) {
                            let e = ey(n.to);
                            (s !== e || r) && !i.decay ? (l.setValue(e), this._onChange(e)) : r && i.decay && this._onChange(s), this._stop()
                        } else r && this._onChange(s)
                    }
                    set(e) {
                        return s.batchedUpdates(() => {
                            this._stop(), this._focus(e), this._set(e)
                        }), this
                    }
                    pause() {
                        this._update({
                            pause: !0
                        })
                    }
                    resume() {
                        this._update({
                            pause: !1
                        })
                    }
                    finish() {
                        if (tH(this)) {
                            let {
                                to: e,
                                config: t
                            } = this.animation;
                            s.batchedUpdates(() => {
                                this._onStart(), t.decay || this._set(e, !1), this._stop()
                            })
                        }
                        return this
                    }
                    update(e) {
                        return (this.queue || (this.queue = [])).push(e), this
                    }
                    start(e, t) {
                        let r;
                        return M.und(e) ? (r = this.queue || [], this.queue = []) : r = [M.obj(e) ? e : {
                            ...t,
                            to: e
                        }], Promise.all(r.map(e => this._update(e))).then(e => tE(this, e))
                    }
                    stop(e) {
                        let {
                            to: t
                        } = this.animation;
                        return this._focus(this.get()), tT(this._state, e && this._lastCallId), s.batchedUpdates(() => this._stop(t, e)), this
                    }
                    reset() {
                        this._update({
                            reset: !0
                        })
                    }
                    eventObserved(e) {
                        "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
                    }
                    _prepareNode(e) {
                        let t = this.key || "",
                            {
                                to: r,
                                from: n
                            } = e;
                        (null == (r = M.obj(r) ? r[t] : r) || th(r)) && (r = void 0), null == (n = M.obj(n) ? n[t] : n) && (n = void 0);
                        let o = {
                            to: r,
                            from: n
                        };
                        return tR(this) || (e.reverse && ([r, n] = [n, r]), n = ey(n), M.und(n) ? eQ(this) || this._set(r) : this._set(n)), o
                    }
                    _update({
                        ...e
                    }, t) {
                        let {
                            key: r,
                            defaultProps: n
                        } = this;
                        e.default && Object.assign(n, ts(e, (e, t) => /^on/.test(t) ? ti(e, r) : e)), tV(this, e, "onProps"), tz(this, "onProps", e, this);
                        let o = this._prepareNode(e);
                        if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
                        let i = this._state;
                        return ty(++this._lastCallId, {
                            key: r,
                            props: e,
                            defaultProps: n,
                            state: i,
                            actions: {
                                pause: () => {
                                    tO(this) || (tN(this, !0), N(i.pauseQueue), tz(this, "onPause", tx(this, tF(this, this.animation.to)), this))
                                },
                                resume: () => {
                                    tO(this) && (tN(this, !1), tH(this) && this._resume(), N(i.resumeQueue), tz(this, "onResume", tx(this, tF(this, this.animation.to)), this))
                                },
                                start: this._merge.bind(this, o)
                            }
                        }).then(r => {
                            if (e.loop && r.finished && !(t && r.noop)) {
                                let t = tD(e);
                                if (t) return this._update(t, !0)
                            }
                            return r
                        })
                    }
                    _merge(e, t, r) {
                        if (t.cancel) return this.stop(!0), r(tP(this));
                        let n = !M.und(e.to),
                            o = !M.und(e.from);
                        if (n || o) {
                            if (!(t.callId > this._lastToId)) return r(tP(this));
                            this._lastToId = t.callId
                        }
                        let {
                            key: i,
                            defaultProps: a,
                            animation: l
                        } = this, {
                            to: u,
                            from: c
                        } = l, {
                            to: f = u,
                            from: d = c
                        } = e;
                        o && !n && (!t.default || M.und(f)) && (f = d), t.reverse && ([f, d] = [d, f]);
                        let h = !I(d, c);
                        h && (l.from = d), d = ey(d);
                        let p = !I(f, u);
                        p && this._focus(f);
                        let m = th(t.to),
                            {
                                config: g
                            } = l,
                            {
                                decay: v,
                                velocity: b
                            } = g;
                        (n || o) && (g.velocity = 0), t.config && !m && function(e, t, r) {
                            for (let n in r && (tg(r = {
                                    ...r
                                }, t), t = {
                                    ...r,
                                    ...t
                                }), tg(e, t), Object.assign(e, t), tp) null == e[n] && (e[n] = tp[n]);
                            let {
                                frequency: n,
                                damping: o
                            } = e, {
                                mass: i
                            } = e;
                            M.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
                        }(g, tn(t.config, i), t.config !== a.config ? tn(a.config, i) : void 0);
                        let y = eQ(this);
                        if (!y || M.und(f)) return r(tx(this, !0));
                        let E = M.und(t.reset) ? o && !t.default : !M.und(d) && to(t.reset, i),
                            w = E ? d : this.get(),
                            x = td(f),
                            P = M.num(x) || M.arr(x) || ej(x),
                            _ = !m && (!P || to(a.immediate || t.immediate, i));
                        if (p) {
                            let e = e4(f);
                            if (e !== y.constructor) {
                                if (_) y = this._set(x);
                                else throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`)
                            }
                        }
                        let T = y.constructor,
                            S = eb(f),
                            A = !1;
                        if (!S) {
                            let e = E || !tR(this) && h;
                            (p || e) && (S = !(A = I(td(w), x))), (I(l.immediate, _) || _) && I(g.decay, v) && I(g.velocity, b) || (S = !0)
                        }
                        if (A && tH(this) && (l.changed && !E ? S = !0 : S || this._stop(u)), !m && ((S || eb(u)) && (l.values = y.getPayload(), l.toValues = eb(f) ? null : T == e8 ? [1] : O(x)), l.immediate == _ || (l.immediate = _, _ || E || this._set(u)), S)) {
                            let {
                                onRest: e
                            } = l;
                            R(tG, e => tV(this, t, e));
                            let n = tx(this, tF(this, u));
                            N(this._pendingCalls, n), this._pendingCalls.add(r), l.changed && s.batchedUpdates(() => {
                                l.changed = !E, e?.(n, this), E ? tn(a.onRest, n) : l.onStart?.(n, this)
                            })
                        }
                        E && this._set(w), m ? r(t_(t.to, t, this._state, this)) : S ? this._start() : tH(this) && !p ? this._pendingCalls.add(r) : r(tw(w))
                    }
                    _focus(e) {
                        let t = this.animation;
                        e !== t.to && (eE(this) && this._detach(), t.to = e, eE(this) && this._attach())
                    }
                    _attach() {
                        let e = 0,
                            {
                                to: t
                            } = this.animation;
                        eb(t) && (e_(t, this), tL(t) && (e = t.priority + 1)), this.priority = e
                    }
                    _detach() {
                        let {
                            to: e
                        } = this.animation;
                        eb(e) && eT(e, this)
                    }
                    _set(e, t = !0) {
                        let r = ey(e);
                        if (!M.und(r)) {
                            let e = eQ(this);
                            if (!e || !I(r, e.getValue())) {
                                let n = e4(r);
                                e && e.constructor == n ? e.setValue(r) : eJ(this, n.create(r)), e && s.batchedUpdates(() => {
                                    this._onChange(r, t)
                                })
                            }
                        }
                        return eQ(this)
                    }
                    _onStart() {
                        let e = this.animation;
                        e.changed || (e.changed = !0, tz(this, "onStart", tx(this, tF(this, e.to)), this))
                    }
                    _onChange(e, t) {
                        t || (this._onStart(), tn(this.animation.onChange, e, this)), tn(this.defaultProps.onChange, e, this), super._onChange(e, t)
                    }
                    _start() {
                        let e = this.animation;
                        eQ(this).reset(ey(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), tH(this) || (tk(this, !0), tO(this) || this._resume())
                    }
                    _resume() {
                        A.skipAnimation ? this.finish() : q.start(this)
                    }
                    _stop(e, t) {
                        if (tH(this)) {
                            tk(this, !1);
                            let r = this.animation;
                            R(r.values, e => {
                                e.done = !0
                            }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ew(this, {
                                type: "idle",
                                parent: this
                            });
                            let n = t ? tP(this.get()) : tx(this.get(), tF(this, e ?? r.to));
                            N(this._pendingCalls, n), r.changed && (r.changed = !1, tz(this, "onRest", n, this))
                        }
                    }
                };

            function tF(e, t) {
                let r = td(t);
                return I(td(e.get()), r)
            }

            function tD(e, t = e.loop, r = e.to) {
                let n = tn(t);
                if (n) {
                    let o = !0 !== n && tf(n),
                        i = (o || e).reverse,
                        a = !o || o.reset;
                    return tj({
                        ...e,
                        loop: t,
                        default: !1,
                        pause: void 0,
                        to: !i || th(r) ? r : void 0,
                        from: a ? e.from : void 0,
                        reset: a,
                        ...o
                    })
                }
            }

            function tj(e) {
                let {
                    to: t,
                    from: r
                } = e = tf(e), n = new Set;
                return M.obj(t) && tU(t, n), M.obj(r) && tU(r, n), e.keys = n.size ? Array.from(n) : null, e
            }

            function tU(e, t) {
                H(e, (e, r) => null != e && t.add(r))
            }
            var tG = ["onStart", "onRest", "onChange", "onPause", "onResume"];

            function tV(e, t, r) {
                e.animation[r] = t[r] !== ta(t, r) ? ti(t[r], e.key) : void 0
            }

            function tz(e, t, ...r) {
                e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
            }
            var tW = ["onStart", "onChange", "onRest"],
                tq = 1,
                tK = class {
                    constructor(e, t) {
                        this.id = tq++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                            paused: !1,
                            pauseQueue: new Set,
                            resumeQueue: new Set,
                            timeouts: new Set
                        }, this._events = {
                            onStart: new Map,
                            onChange: new Map,
                            onRest: new Map
                        }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                            default: !0,
                            ...e
                        })
                    }
                    get idle() {
                        return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
                    }
                    get item() {
                        return this._item
                    }
                    set item(e) {
                        this._item = e
                    }
                    get() {
                        let e = {};
                        return this.each((t, r) => e[r] = t.get()), e
                    }
                    set(e) {
                        for (let t in e) {
                            let r = e[t];
                            M.und(r) || this.springs[t].set(r)
                        }
                    }
                    update(e) {
                        return e && this.queue.push(tj(e)), this
                    }
                    start(e) {
                        let {
                            queue: t
                        } = this;
                        return (e ? t = O(e).map(tj) : this.queue = [], this._flush) ? this._flush(this, t) : (t0(this, t), tX(this, t))
                    }
                    stop(e, t) {
                        if (!!e !== e && (t = e), t) {
                            let r = this.springs;
                            R(O(t), t => r[t].stop(!!e))
                        } else tT(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
                        return this
                    }
                    pause(e) {
                        if (M.und(e)) this.start({
                            pause: !0
                        });
                        else {
                            let t = this.springs;
                            R(O(e), e => t[e].pause())
                        }
                        return this
                    }
                    resume(e) {
                        if (M.und(e)) this.start({
                            pause: !1
                        });
                        else {
                            let t = this.springs;
                            R(O(e), e => t[e].resume())
                        }
                        return this
                    }
                    each(e) {
                        H(this.springs, e)
                    }
                    _onFrame() {
                        let {
                            onStart: e,
                            onChange: t,
                            onRest: r
                        } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
                        (n && !this._started || o && !this._started) && (this._started = !0, k(e, ([e, t]) => {
                            t.value = this.get(), e(t, this, this._item)
                        }));
                        let i = !n && this._started,
                            a = o || i && r.size ? this.get() : null;
                        o && t.size && k(t, ([e, t]) => {
                            t.value = a, e(t, this, this._item)
                        }), i && (this._started = !1, k(r, ([e, t]) => {
                            t.value = a, e(t, this, this._item)
                        }))
                    }
                    eventObserved(e) {
                        if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
                        else {
                            if ("idle" != e.type) return;
                            this._active.delete(e.parent)
                        }
                        s.onFrame(this._onFrame)
                    }
                };

            function tX(e, t) {
                return Promise.all(t.map(t => t$(e, t))).then(t => tE(e, t))
            }
            async function t$(e, t, r) {
                let {
                    keys: n,
                    to: o,
                    from: i,
                    loop: a,
                    onRest: l,
                    onResolve: u
                } = t, c = M.obj(t.default) && t.default;
                a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
                let f = M.arr(o) || M.fun(o) ? o : void 0;
                f ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : R(tW, r => {
                    let n = t[r];
                    if (M.fun(n)) {
                        let o = e._events[r];
                        t[r] = ({
                            finished: e,
                            cancelled: t
                        }) => {
                            let r = o.get(n);
                            r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : o.set(n, {
                                value: null,
                                finished: e || !1,
                                cancelled: t || !1
                            })
                        }, c && (c[r] = t[r])
                    }
                });
                let d = e._state;
                !d.paused === t.pause ? (d.paused = t.pause, N(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
                let h = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
                    p = !0 === t.cancel || !0 === ta(t, "cancel");
                (f || p && d.asyncId) && h.push(ty(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: L,
                        resume: L,
                        start(t, r) {
                            p ? (tT(d, e._lastAsyncId), r(tP(e))) : (t.onRest = l, r(t_(f, t, d, e)))
                        }
                    }
                })), d.paused && await new Promise(e => {
                    d.resumeQueue.add(e)
                });
                let m = tE(e, await Promise.all(h));
                if (a && m.finished && !(r && m.noop)) {
                    let r = tD(t, a, o);
                    if (r) return t0(e, [r]), t$(e, r, !0)
                }
                return u && s.batchedUpdates(() => u(m, e, e.item)), m
            }

            function tY(e, t) {
                let r = {
                    ...e.springs
                };
                return t && R(O(t), e => {
                    M.und(e.keys) && (e = tj(e)), M.obj(e.to) || (e = {
                        ...e,
                        to: void 0
                    }), tJ(r, e, e => tQ(e))
                }), tZ(e, r), r
            }

            function tZ(e, t) {
                H(t, (t, r) => {
                    e.springs[r] || (e.springs[r] = t, e_(t, e))
                })
            }

            function tQ(e, t) {
                let r = new tB;
                return r.key = e, t && e_(r, t), r
            }

            function tJ(e, t, r) {
                t.keys && R(t.keys, n => {
                    (e[n] || (e[n] = r(n)))._prepareNode(t)
                })
            }

            function t0(e, t) {
                R(t, t => {
                    tJ(e.springs, t, t => tQ(t, e))
                })
            }
            var t1 = ({
                    children: e,
                    ...t
                }) => {
                    let r = (0, T.useContext)(t2),
                        n = t.pause || !!r.pause,
                        o = t.immediate || !!r.immediate;
                    t = function(e, t) {
                        let [r] = (0, T.useState)(() => ({
                            inputs: t,
                            result: e()
                        })), n = (0, T.useRef)(), o = n.current, i = o;
                        return i ? t && i.inputs && function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (let r = 0; r < e.length; r++)
                                if (e[r] !== t[r]) return !1;
                            return !0
                        }(t, i.inputs) || (i = {
                            inputs: t,
                            result: e()
                        }) : i = r, (0, T.useEffect)(() => {
                            n.current = i, o == r && (r.inputs = r.result = void 0)
                        }, [i]), i.result
                    }(() => ({
                        pause: n,
                        immediate: o
                    }), [n, o]);
                    let {
                        Provider: i
                    } = t2;
                    return T.createElement(i, {
                        value: t
                    }, e)
                },
                t2 = function(e, t) {
                    return Object.assign(e, T.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
                }(t1, {});
            t1.Provider = t2.Provider, t1.Consumer = t2.Consumer;
            var t8 = () => {
                let e = [],
                    t = function(t) {
                        eD(`${eN}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
                        let n = [];
                        return R(e, (e, o) => {
                            if (M.und(t)) n.push(e.start());
                            else {
                                let i = r(t, e, o);
                                i && n.push(e.start(i))
                            }
                        }), n
                    };
                t.current = e, t.add = function(t) {
                    e.includes(t) || e.push(t)
                }, t.delete = function(t) {
                    let r = e.indexOf(t);
                    ~r && e.splice(r, 1)
                }, t.pause = function() {
                    return R(e, e => e.pause(...arguments)), this
                }, t.resume = function() {
                    return R(e, e => e.resume(...arguments)), this
                }, t.set = function(t) {
                    R(e, (e, r) => {
                        let n = M.fun(t) ? t(r, e) : t;
                        n && e.set(n)
                    })
                }, t.start = function(t) {
                    let r = [];
                    return R(e, (e, n) => {
                        if (M.und(t)) r.push(e.start());
                        else {
                            let o = this._getProps(t, e, n);
                            o && r.push(e.start(o))
                        }
                    }), r
                }, t.stop = function() {
                    return R(e, e => e.stop(...arguments)), this
                }, t.update = function(t) {
                    return R(e, (e, r) => e.update(this._getProps(t, e, r))), this
                };
                let r = function(e, t, r) {
                    return M.fun(e) ? e(r, t) : e
                };
                return t._getProps = r, t
            };

            function t3(e, t) {
                let r = M.fun(e),
                    [
                        [n], o
                    ] = function(e, t, r) {
                        let n = M.fun(t) && t;
                        n && !r && (r = []);
                        let o = (0, T.useMemo)(() => n || 3 == arguments.length ? t8() : void 0, []),
                            i = (0, T.useRef)(0),
                            a = eq(),
                            l = (0, T.useMemo)(() => ({
                                ctrls: [],
                                queue: [],
                                flush(e, t) {
                                    let r = tY(e, t);
                                    return !(i.current > 0) || l.queue.length || Object.keys(r).some(t => !e.springs[t]) ? new Promise(n => {
                                        tZ(e, r), l.queue.push(() => {
                                            n(tX(e, t))
                                        }), a()
                                    }) : tX(e, t)
                                }
                            }), []),
                            s = (0, T.useRef)([...l.ctrls]),
                            u = [],
                            c = e$(e) || 0;

                        function f(e, r) {
                            for (let o = e; o < r; o++) {
                                let e = s.current[o] || (s.current[o] = new tK(null, l.flush)),
                                    r = n ? n(o, e) : t[o];
                                r && (u[o] = function(e) {
                                    let t = tj(e);
                                    return M.und(t.default) && (t.default = ts(t)), t
                                }(r))
                            }
                        }(0, T.useMemo)(() => {
                            R(s.current.slice(e, c), e => {
                                e.ref?.delete(e), o?.delete(e), e.stop(!0)
                            }), s.current.length = e, f(c, e)
                        }, [e]), (0, T.useMemo)(() => {
                            f(0, Math.min(c, e))
                        }, r);
                        let d = s.current.map((e, t) => tY(e, u[t])),
                            h = (0, T.useContext)(t1),
                            p = e$(h),
                            m = h !== p && function(e) {
                                for (let t in e) return !0;
                                return !1
                            }(h);
                        ez(() => {
                            i.current++, l.ctrls = s.current;
                            let {
                                queue: e
                            } = l;
                            e.length && (l.queue = [], R(e, e => e())), R(s.current, (e, t) => {
                                var r;
                                o?.add(e), m && e.start({
                                    default: h
                                });
                                let n = u[t];
                                n && ((r = n.ref) && e.ref !== r && (e.ref?.delete(e), r.add(e), e.ref = r), e.ref ? e.queue.push(n) : e.start(n))
                            })
                        }), eK(() => () => {
                            R(l.ctrls, e => e.stop(!0))
                        });
                        let g = d.map(e => ({
                            ...e
                        }));
                        return o ? [g, o] : g
                    }(1, r ? e : [e], r ? t || [] : t);
                return r || 2 == arguments.length ? [n, o] : n
            }
            var t5 = class extends tM {
                constructor(e, t) {
                    super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = em(...t);
                    let r = this._get();
                    eJ(this, e4(r).create(r))
                }
                advance(e) {
                    let t = this._get();
                    I(t, this.get()) || (eQ(this).setValue(t), this._onChange(t, this.idle)), !this.idle && t9(this._active) && t4(this)
                }
                _get() {
                    let e = M.arr(this.source) ? this.source.map(ey) : O(ey(this.source));
                    return this.calc(...e)
                }
                _start() {
                    this.idle && !t9(this._active) && (this.idle = !1, R(e0(this), e => {
                        e.done = !1
                    }), A.skipAnimation ? (s.batchedUpdates(() => this.advance()), t4(this)) : q.start(this))
                }
                _attach() {
                    let e = 1;
                    R(O(this.source), t => {
                        eb(t) && e_(t, this), tL(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
                    }), this.priority = e, this._start()
                }
                _detach() {
                    R(O(this.source), e => {
                        eb(e) && eT(e, this)
                    }), this._active.clear(), t4(this)
                }
                eventObserved(e) {
                    "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = O(this.source).reduce((e, t) => Math.max(e, (tL(t) ? t.priority : 0) + 1), 0))
                }
            };

            function t6(e) {
                return !1 !== e.idle
            }

            function t9(e) {
                return !e.size || Array.from(e).every(t6)
            }

            function t4(e) {
                e.idle || (e.idle = !0, R(e0(e), e => {
                    e.done = !0
                }), ew(e, {
                    type: "idle",
                    parent: e
                }))
            }
            A.assign({
                createStringInterpolator: ek,
                to: (e, t) => new t5(e, t)
            }), q.advance;
            var t7 = r(7650),
                re = /^--/,
                rt = {},
                rr = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                rn = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
                ro = ["Webkit", "Ms", "Moz", "O"];
            rr = Object.keys(rr).reduce((e, t) => (ro.forEach(r => e[rn(r, t)] = e[t]), e), rr);
            var ri = /^(matrix|translate|scale|rotate|skew)/,
                ra = /^(translate)/,
                rl = /^(rotate|skew)/,
                rs = (e, t) => M.num(e) && 0 !== e ? e + t : e,
                ru = (e, t) => M.arr(e) ? e.every(e => ru(e, t)) : M.num(e) ? e === t : parseFloat(e) === t,
                rc = class extends e5 {
                    constructor({
                        x: e,
                        y: t,
                        z: r,
                        ...n
                    }) {
                        let o = [],
                            i = [];
                        (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>rs(e,"px")).join(",")})`, ru(e, 0)])), H(n, (e, t) => {
                            if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
                            else if (ri.test(t)) {
                                if (delete n[t], M.und(e)) return;
                                let r = ra.test(t) ? "px" : rl.test(t) ? "deg" : "";
                                o.push(O(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${rs(o,r)})`, ru(o, 0)] : e => [`${t}(${e.map(e=>rs(e,r)).join(",")})`, ru(e, t.startsWith("scale") ? 1 : 0)])
                            }
                        }), o.length && (n.transform = new rf(o, i)), super(n)
                    }
                },
                rf = class extends ex {
                    constructor(e, t) {
                        super(), this.inputs = e, this.transforms = t, this._value = null
                    }
                    get() {
                        return this._value || (this._value = this._get())
                    }
                    _get() {
                        let e = "",
                            t = !0;
                        return R(this.inputs, (r, n) => {
                            let o = ey(r[0]),
                                [i, a] = this.transforms[n](M.arr(o) ? o : r.map(ey));
                            e += " " + i, t = t && a
                        }), t ? "none" : e
                    }
                    observerAdded(e) {
                        1 == e && R(this.inputs, e => R(e, e => eb(e) && e_(e, this)))
                    }
                    observerRemoved(e) {
                        0 == e && R(this.inputs, e => R(e, e => eb(e) && eT(e, this)))
                    }
                    eventObserved(e) {
                        "change" == e.type && (this._value = null), ew(this, e)
                    }
                };
            A.assign({
                batchedUpdates: t7.unstable_batchedUpdates,
                createStringInterpolator: ek,
                colors: {
                    transparent: 0,
                    aliceblue: 0xf0f8ffff,
                    antiquewhite: 0xfaebd7ff,
                    aqua: 0xffffff,
                    aquamarine: 0x7fffd4ff,
                    azure: 0xf0ffffff,
                    beige: 0xf5f5dcff,
                    bisque: 0xffe4c4ff,
                    black: 255,
                    blanchedalmond: 0xffebcdff,
                    blue: 65535,
                    blueviolet: 0x8a2be2ff,
                    brown: 0xa52a2aff,
                    burlywood: 0xdeb887ff,
                    burntsienna: 0xea7e5dff,
                    cadetblue: 0x5f9ea0ff,
                    chartreuse: 0x7fff00ff,
                    chocolate: 0xd2691eff,
                    coral: 0xff7f50ff,
                    cornflowerblue: 0x6495edff,
                    cornsilk: 0xfff8dcff,
                    crimson: 0xdc143cff,
                    cyan: 0xffffff,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 0xb8860bff,
                    darkgray: 0xa9a9a9ff,
                    darkgreen: 6553855,
                    darkgrey: 0xa9a9a9ff,
                    darkkhaki: 0xbdb76bff,
                    darkmagenta: 0x8b008bff,
                    darkolivegreen: 0x556b2fff,
                    darkorange: 0xff8c00ff,
                    darkorchid: 0x9932ccff,
                    darkred: 0x8b0000ff,
                    darksalmon: 0xe9967aff,
                    darkseagreen: 0x8fbc8fff,
                    darkslateblue: 0x483d8bff,
                    darkslategray: 0x2f4f4fff,
                    darkslategrey: 0x2f4f4fff,
                    darkturquoise: 0xced1ff,
                    darkviolet: 0x9400d3ff,
                    deeppink: 0xff1493ff,
                    deepskyblue: 0xbfffff,
                    dimgray: 0x696969ff,
                    dimgrey: 0x696969ff,
                    dodgerblue: 0x1e90ffff,
                    firebrick: 0xb22222ff,
                    floralwhite: 0xfffaf0ff,
                    forestgreen: 0x228b22ff,
                    fuchsia: 0xff00ffff,
                    gainsboro: 0xdcdcdcff,
                    ghostwhite: 0xf8f8ffff,
                    gold: 0xffd700ff,
                    goldenrod: 0xdaa520ff,
                    gray: 0x808080ff,
                    green: 8388863,
                    greenyellow: 0xadff2fff,
                    grey: 0x808080ff,
                    honeydew: 0xf0fff0ff,
                    hotpink: 0xff69b4ff,
                    indianred: 0xcd5c5cff,
                    indigo: 0x4b0082ff,
                    ivory: 0xfffff0ff,
                    khaki: 0xf0e68cff,
                    lavender: 0xe6e6faff,
                    lavenderblush: 0xfff0f5ff,
                    lawngreen: 0x7cfc00ff,
                    lemonchiffon: 0xfffacdff,
                    lightblue: 0xadd8e6ff,
                    lightcoral: 0xf08080ff,
                    lightcyan: 0xe0ffffff,
                    lightgoldenrodyellow: 0xfafad2ff,
                    lightgray: 0xd3d3d3ff,
                    lightgreen: 0x90ee90ff,
                    lightgrey: 0xd3d3d3ff,
                    lightpink: 0xffb6c1ff,
                    lightsalmon: 0xffa07aff,
                    lightseagreen: 0x20b2aaff,
                    lightskyblue: 0x87cefaff,
                    lightslategray: 0x778899ff,
                    lightslategrey: 0x778899ff,
                    lightsteelblue: 0xb0c4deff,
                    lightyellow: 0xffffe0ff,
                    lime: 0xff00ff,
                    limegreen: 0x32cd32ff,
                    linen: 0xfaf0e6ff,
                    magenta: 0xff00ffff,
                    maroon: 0x800000ff,
                    mediumaquamarine: 0x66cdaaff,
                    mediumblue: 52735,
                    mediumorchid: 0xba55d3ff,
                    mediumpurple: 0x9370dbff,
                    mediumseagreen: 0x3cb371ff,
                    mediumslateblue: 0x7b68eeff,
                    mediumspringgreen: 0xfa9aff,
                    mediumturquoise: 0x48d1ccff,
                    mediumvioletred: 0xc71585ff,
                    midnightblue: 0x191970ff,
                    mintcream: 0xf5fffaff,
                    mistyrose: 0xffe4e1ff,
                    moccasin: 0xffe4b5ff,
                    navajowhite: 0xffdeadff,
                    navy: 33023,
                    oldlace: 0xfdf5e6ff,
                    olive: 0x808000ff,
                    olivedrab: 0x6b8e23ff,
                    orange: 0xffa500ff,
                    orangered: 0xff4500ff,
                    orchid: 0xda70d6ff,
                    palegoldenrod: 0xeee8aaff,
                    palegreen: 0x98fb98ff,
                    paleturquoise: 0xafeeeeff,
                    palevioletred: 0xdb7093ff,
                    papayawhip: 0xffefd5ff,
                    peachpuff: 0xffdab9ff,
                    peru: 0xcd853fff,
                    pink: 0xffc0cbff,
                    plum: 0xdda0ddff,
                    powderblue: 0xb0e0e6ff,
                    purple: 0x800080ff,
                    rebeccapurple: 0x663399ff,
                    red: 0xff0000ff,
                    rosybrown: 0xbc8f8fff,
                    royalblue: 0x4169e1ff,
                    saddlebrown: 0x8b4513ff,
                    salmon: 0xfa8072ff,
                    sandybrown: 0xf4a460ff,
                    seagreen: 0x2e8b57ff,
                    seashell: 0xfff5eeff,
                    sienna: 0xa0522dff,
                    silver: 0xc0c0c0ff,
                    skyblue: 0x87ceebff,
                    slateblue: 0x6a5acdff,
                    slategray: 0x708090ff,
                    slategrey: 0x708090ff,
                    snow: 0xfffafaff,
                    springgreen: 0xff7fff,
                    steelblue: 0x4682b4ff,
                    tan: 0xd2b48cff,
                    teal: 8421631,
                    thistle: 0xd8bfd8ff,
                    tomato: 0xff6347ff,
                    turquoise: 0x40e0d0ff,
                    violet: 0xee82eeff,
                    wheat: 0xf5deb3ff,
                    white: 0xffffffff,
                    whitesmoke: 0xf5f5f5ff,
                    yellow: 0xffff00ff,
                    yellowgreen: 0x9acd32ff
                }
            });
            var rd = ((e, {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: r = e => new e5(e),
                getComponentProps: n = e => e
            } = {}) => {
                let o = {
                        applyAnimatedValues: t,
                        createAnimatedStyle: r,
                        getComponentProps: n
                    },
                    i = e => {
                        let t = tr(e) || "Anonymous";
                        return (e = M.str(e) ? i[e] || (i[e] = e7(e, o)) : e[tt] || (e[tt] = e7(e, o))).displayName = `Animated(${t})`, e
                    };
                return H(e, (t, r) => {
                    M.arr(e) && (r = tr(t)), i[r] = i(t)
                }), {
                    animated: i
                }
            })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
                applyAnimatedValues: function(e, t) {
                    if (!e.nodeType || !e.setAttribute) return !1;
                    let r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
                        {
                            className: n,
                            style: o,
                            children: i,
                            scrollTop: a,
                            scrollLeft: l,
                            viewBox: s,
                            ...u
                        } = t,
                        c = Object.values(u),
                        f = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : rt[t] || (rt[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
                    for (let t in void 0 !== i && (e.textContent = i), o)
                        if (o.hasOwnProperty(t)) {
                            var d;
                            let r = null == (d = o[t]) || "boolean" == typeof d || "" === d ? "" : "number" != typeof d || 0 === d || re.test(t) || rr.hasOwnProperty(t) && rr[t] ? ("" + d).trim() : d + "px";
                            re.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
                        } f.forEach((t, r) => {
                        e.setAttribute(t, c[r])
                    }), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== l && (e.scrollLeft = l), void 0 !== s && e.setAttribute("viewBox", s)
                },
                createAnimatedStyle: e => new rc(e),
                getComponentProps: ({
                    scrollTop: e,
                    scrollLeft: t,
                    ...r
                }) => r
            }).animated
        },
        9795: (e, t, r) => {
            r.d(t, {
                QP: () => $
            });
            let n = e => {
                    let t = l(e),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: n
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let r = e.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || a(e)
                        },
                        getConflictingClassGroupIds: (e, t) => {
                            let o = r[e] || [];
                            return t && n[e] ? [...o, ...n[e]] : o
                        }
                    }
                },
                o = (e, t) => {
                    if (0 === e.length) return t.classGroupId;
                    let r = e[0],
                        n = t.nextPart.get(r),
                        i = n ? o(e.slice(1), n) : void 0;
                    if (i) return i;
                    if (0 === t.validators.length) return;
                    let a = e.join("-");
                    return t.validators.find(({
                        validator: e
                    }) => e(a))?.classGroupId
                },
                i = /^\[(.+)\]$/,
                a = e => {
                    if (i.test(e)) {
                        let t = i.exec(e)[1],
                            r = t?.substring(0, t.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                l = e => {
                    let {
                        theme: t,
                        prefix: r
                    } = e, n = {
                        nextPart: new Map,
                        validators: []
                    };
                    return f(Object.entries(e.classGroups), r).forEach(([e, r]) => {
                        s(r, n, e, t)
                    }), n
                },
                s = (e, t, r, n) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? t : u(t, e)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof e) {
                            if (c(e)) {
                                s(e(n), t, r, n);
                                return
                            }
                            t.validators.push({
                                validator: e,
                                classGroupId: r
                            });
                            return
                        }
                        Object.entries(e).forEach(([e, o]) => {
                            s(o, u(t, e), r, n)
                        })
                    })
                },
                u = (e, t) => {
                    let r = e;
                    return t.split("-").forEach(e => {
                        r.nextPart.has(e) || r.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(e)
                    }), r
                },
                c = e => e.isThemeGetter,
                f = (e, t) => t ? e.map(([e, r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [t + e, r])) : e)]) : e,
                d = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let t = 0,
                        r = new Map,
                        n = new Map,
                        o = (o, i) => {
                            r.set(o, i), ++t > e && (t = 0, n = r, r = new Map)
                        };
                    return {
                        get(e) {
                            let t = r.get(e);
                            return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                        },
                        set(e, t) {
                            r.has(e) ? r.set(e, t) : o(e, t)
                        }
                    }
                },
                h = e => {
                    let {
                        separator: t,
                        experimentalParseClassName: r
                    } = e, n = 1 === t.length, o = t[0], i = t.length, a = e => {
                        let r;
                        let a = [],
                            l = 0,
                            s = 0;
                        for (let u = 0; u < e.length; u++) {
                            let c = e[u];
                            if (0 === l) {
                                if (c === o && (n || e.slice(u, u + i) === t)) {
                                    a.push(e.slice(s, u)), s = u + i;
                                    continue
                                }
                                if ("/" === c) {
                                    r = u;
                                    continue
                                }
                            }
                            "[" === c ? l++ : "]" === c && l--
                        }
                        let u = 0 === a.length ? e : e.substring(s),
                            c = u.startsWith("!"),
                            f = c ? u.substring(1) : u;
                        return {
                            modifiers: a,
                            hasImportantModifier: c,
                            baseClassName: f,
                            maybePostfixModifierPosition: r && r > s ? r - s : void 0
                        }
                    };
                    return r ? e => r({
                        className: e,
                        parseClassName: a
                    }) : a
                },
                p = e => {
                    if (e.length <= 1) return e;
                    let t = [],
                        r = [];
                    return e.forEach(e => {
                        "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
                    }), t.push(...r.sort()), t
                },
                m = e => ({
                    cache: d(e.cacheSize),
                    parseClassName: h(e),
                    ...n(e)
                }),
                g = /\s+/,
                v = (e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: n,
                        getConflictingClassGroupIds: o
                    } = t, i = [], a = e.trim().split(g), l = "";
                    for (let e = a.length - 1; e >= 0; e -= 1) {
                        let t = a[e],
                            {
                                modifiers: s,
                                hasImportantModifier: u,
                                baseClassName: c,
                                maybePostfixModifierPosition: f
                            } = r(t),
                            d = !!f,
                            h = n(d ? c.substring(0, f) : c);
                        if (!h) {
                            if (!d || !(h = n(c))) {
                                l = t + (l.length > 0 ? " " + l : l);
                                continue
                            }
                            d = !1
                        }
                        let m = p(s).join(":"),
                            g = u ? m + "!" : m,
                            v = g + h;
                        if (i.includes(v)) continue;
                        i.push(v);
                        let b = o(h, d);
                        for (let e = 0; e < b.length; ++e) {
                            let t = b[e];
                            i.push(g + t)
                        }
                        l = t + (l.length > 0 ? " " + l : l)
                    }
                    return l
                };

            function b() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = y(e)) && (n && (n += " "), n += t);
                return n
            }
            let y = e => {
                    let t;
                    if ("string" == typeof e) return e;
                    let r = "";
                    for (let n = 0; n < e.length; n++) e[n] && (t = y(e[n])) && (r && (r += " "), r += t);
                    return r
                },
                E = e => {
                    let t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                x = /^\d+\/\d+$/,
                P = new Set(["px", "full", "screen"]),
                _ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                T = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                A = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                L = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                C = e => I(e) || P.has(e) || x.test(e),
                M = e => z(e, "length", W),
                I = e => !!e && !Number.isNaN(Number(e)),
                R = e => z(e, "number", I),
                H = e => !!e && Number.isInteger(Number(e)),
                O = e => e.endsWith("%") && I(e.slice(0, -1)),
                k = e => w.test(e),
                N = e => _.test(e),
                B = new Set(["length", "size", "percentage"]),
                F = e => z(e, B, q),
                D = e => z(e, "position", q),
                j = new Set(["image", "url"]),
                U = e => z(e, j, X),
                G = e => z(e, "", K),
                V = () => !0,
                z = (e, t, r) => {
                    let n = w.exec(e);
                    return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
                },
                W = e => T.test(e) && !S.test(e),
                q = () => !1,
                K = e => A.test(e),
                X = e => L.test(e);
            Symbol.toStringTag;
            let $ = function(e, ...t) {
                let r, n, o;
                let i = function(l) {
                    return n = (r = m(t.reduce((e, t) => t(e), e()))).cache.get, o = r.cache.set, i = a, a(l)
                };

                function a(e) {
                    let t = n(e);
                    if (t) return t;
                    let i = v(e, r);
                    return o(e, i), i
                }
                return function() {
                    return i(b.apply(null, arguments))
                }
            }(() => {
                let e = E("colors"),
                    t = E("spacing"),
                    r = E("blur"),
                    n = E("brightness"),
                    o = E("borderColor"),
                    i = E("borderRadius"),
                    a = E("borderSpacing"),
                    l = E("borderWidth"),
                    s = E("contrast"),
                    u = E("grayscale"),
                    c = E("hueRotate"),
                    f = E("invert"),
                    d = E("gap"),
                    h = E("gradientColorStops"),
                    p = E("gradientColorStopPositions"),
                    m = E("inset"),
                    g = E("margin"),
                    v = E("opacity"),
                    b = E("padding"),
                    y = E("saturate"),
                    w = E("scale"),
                    x = E("sepia"),
                    P = E("skew"),
                    _ = E("space"),
                    T = E("translate"),
                    S = () => ["auto", "contain", "none"],
                    A = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    L = () => ["auto", k, t],
                    B = () => [k, t],
                    j = () => ["", C, M],
                    z = () => ["auto", I, k],
                    W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    q = () => ["solid", "dashed", "dotted", "double", "none"],
                    K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    $ = () => ["", "0", k],
                    Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    Z = () => [I, k];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [V],
                        spacing: [C, M],
                        blur: ["none", "", N, k],
                        brightness: Z(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", N, k],
                        borderSpacing: B(),
                        borderWidth: j(),
                        contrast: Z(),
                        grayscale: $(),
                        hueRotate: Z(),
                        invert: $(),
                        gap: B(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [O, M],
                        inset: L(),
                        margin: L(),
                        opacity: Z(),
                        padding: B(),
                        saturate: Z(),
                        scale: Z(),
                        sepia: $(),
                        skew: Z(),
                        space: B(),
                        translate: B()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", k]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [N]
                        }],
                        "break-after": [{
                            "break-after": Y()
                        }],
                        "break-before": [{
                            "break-before": Y()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...W(), k]
                        }],
                        overflow: [{
                            overflow: A()
                        }],
                        "overflow-x": [{
                            "overflow-x": A()
                        }],
                        "overflow-y": [{
                            "overflow-y": A()
                        }],
                        overscroll: [{
                            overscroll: S()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": S()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": S()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [m]
                        }],
                        "inset-x": [{
                            "inset-x": [m]
                        }],
                        "inset-y": [{
                            "inset-y": [m]
                        }],
                        start: [{
                            start: [m]
                        }],
                        end: [{
                            end: [m]
                        }],
                        top: [{
                            top: [m]
                        }],
                        right: [{
                            right: [m]
                        }],
                        bottom: [{
                            bottom: [m]
                        }],
                        left: [{
                            left: [m]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", H, k]
                        }],
                        basis: [{
                            basis: L()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", k]
                        }],
                        grow: [{
                            grow: $()
                        }],
                        shrink: [{
                            shrink: $()
                        }],
                        order: [{
                            order: ["first", "last", "none", H, k]
                        }],
                        "grid-cols": [{
                            "grid-cols": [V]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", H, k]
                            }, k]
                        }],
                        "col-start": [{
                            "col-start": z()
                        }],
                        "col-end": [{
                            "col-end": z()
                        }],
                        "grid-rows": [{
                            "grid-rows": [V]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [H, k]
                            }, k]
                        }],
                        "row-start": [{
                            "row-start": z()
                        }],
                        "row-end": [{
                            "row-end": z()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", k]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", k]
                        }],
                        gap: [{
                            gap: [d]
                        }],
                        "gap-x": [{
                            "gap-x": [d]
                        }],
                        "gap-y": [{
                            "gap-y": [d]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...X()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...X(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...X(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [b]
                        }],
                        px: [{
                            px: [b]
                        }],
                        py: [{
                            py: [b]
                        }],
                        ps: [{
                            ps: [b]
                        }],
                        pe: [{
                            pe: [b]
                        }],
                        pt: [{
                            pt: [b]
                        }],
                        pr: [{
                            pr: [b]
                        }],
                        pb: [{
                            pb: [b]
                        }],
                        pl: [{
                            pl: [b]
                        }],
                        m: [{
                            m: [g]
                        }],
                        mx: [{
                            mx: [g]
                        }],
                        my: [{
                            my: [g]
                        }],
                        ms: [{
                            ms: [g]
                        }],
                        me: [{
                            me: [g]
                        }],
                        mt: [{
                            mt: [g]
                        }],
                        mr: [{
                            mr: [g]
                        }],
                        mb: [{
                            mb: [g]
                        }],
                        ml: [{
                            ml: [g]
                        }],
                        "space-x": [{
                            "space-x": [_]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [_]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t]
                        }],
                        "min-w": [{
                            "min-w": [k, t, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", {
                                screen: [N]
                            }, N]
                        }],
                        h: [{
                            h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [k, t, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", N, M]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", R]
                        }],
                        "font-family": [{
                            font: [V]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", I, R]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C, k]
                        }],
                        "list-image": [{
                            "list-image": ["none", k]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", k]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [v]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [v]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...q(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", C, M]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", C, k]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: B()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", k]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [v]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...W(), D]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", F]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, U]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [p]
                        }],
                        "gradient-via-pos": [{
                            via: [p]
                        }],
                        "gradient-to-pos": [{
                            to: [p]
                        }],
                        "gradient-from": [{
                            from: [h]
                        }],
                        "gradient-via": [{
                            via: [h]
                        }],
                        "gradient-to": [{
                            to: [h]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [l]
                        }],
                        "border-w-x": [{
                            "border-x": [l]
                        }],
                        "border-w-y": [{
                            "border-y": [l]
                        }],
                        "border-w-s": [{
                            "border-s": [l]
                        }],
                        "border-w-e": [{
                            "border-e": [l]
                        }],
                        "border-w-t": [{
                            "border-t": [l]
                        }],
                        "border-w-r": [{
                            "border-r": [l]
                        }],
                        "border-w-b": [{
                            "border-b": [l]
                        }],
                        "border-w-l": [{
                            "border-l": [l]
                        }],
                        "border-opacity": [{
                            "border-opacity": [v]
                        }],
                        "border-style": [{
                            border: [...q(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [l]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [l]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [v]
                        }],
                        "divide-style": [{
                            divide: q()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-s": [{
                            "border-s": [o]
                        }],
                        "border-color-e": [{
                            "border-e": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: ["", ...q()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [C, k]
                        }],
                        "outline-w": [{
                            outline: [C, M]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: j()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [v]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [C, M]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", N, G]
                        }],
                        "shadow-color": [{
                            shadow: [V]
                        }],
                        opacity: [{
                            opacity: [v]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...K(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": K()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [s]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", N, k]
                        }],
                        grayscale: [{
                            grayscale: [u]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [c]
                        }],
                        invert: [{
                            invert: [f]
                        }],
                        saturate: [{
                            saturate: [y]
                        }],
                        sepia: [{
                            sepia: [x]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [s]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [u]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [c]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [f]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [v]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [y]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [x]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [a]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [a]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [a]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
                        }],
                        duration: [{
                            duration: Z()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", k]
                        }],
                        delay: [{
                            delay: Z()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", k]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [w]
                        }],
                        "scale-x": [{
                            "scale-x": [w]
                        }],
                        "scale-y": [{
                            "scale-y": [w]
                        }],
                        rotate: [{
                            rotate: [H, k]
                        }],
                        "translate-x": [{
                            "translate-x": [T]
                        }],
                        "translate-y": [{
                            "translate-y": [T]
                        }],
                        "skew-x": [{
                            "skew-x": [P]
                        }],
                        "skew-y": [{
                            "skew-y": [P]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": B()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": B()
                        }],
                        "scroll-my": [{
                            "scroll-my": B()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": B()
                        }],
                        "scroll-me": [{
                            "scroll-me": B()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": B()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": B()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": B()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": B()
                        }],
                        "scroll-p": [{
                            "scroll-p": B()
                        }],
                        "scroll-px": [{
                            "scroll-px": B()
                        }],
                        "scroll-py": [{
                            "scroll-py": B()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": B()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": B()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": B()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": B()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": B()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": B()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", k]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [C, M, R]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);