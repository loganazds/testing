!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(r, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "/",
    n(n.s = 250)
}({
    /* ... other modules unchanged ... */
    63: function(t, e, n) {
        "use strict";
        var r = n(1);
        window.nckSet = "8558122169",
        e.a = {
            bookingEngine: {
                bookingEngine: "azds-14916-stb"
            },
            pageUrlPatterns: {
                checkout: /#\/booking\/step-3\?/,
                confirmation: /#\/booking\/step-4\?/
            },
            eventListeners: [{
                defaultValue: "",
                destinationKey: "firstname",
                dataType: "select-value",
                elementId: "firstName_0",
                listenerType: "change"
            }, {
                defaultValue: "",
                destinationKey: "lastname",
                dataType: "select-value",
                elementId: "lastName_0",
                listenerType: "change"
            }, {
                defaultValue: "",
                destinationKey: "email",
                dataType: "select-value",
                elementId: "pay-by-card-email", // patched from "email_0"
                listenerType: "change"
            }, {
                defaultValue: "",
                destinationKey: "phone",
                dataType: "select-value",
                elementId: "phone_0",
                listenerType: "change"
            }
            /* ... remaining listeners ... */
            ],
            globalListeners: ["beforeunload", "close"],
            tokenKeys: [{
                dataType: "window",
                key: ["_GlobalTokens", "CHAIN_ID"]
            }]
        }
    }
    /* ... other modules unchanged ... */
});