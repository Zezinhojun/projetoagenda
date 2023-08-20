!(function (n) {
  var t = {};
  function e(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return n[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = n),
    (e.c = t),
    (e.d = function (n, t, r) {
      e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: r });
    }),
    (e.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (e.t = function (n, t) {
      if ((1 & t && (n = e(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var o in n)
          e.d(
            r,
            o,
            function (t) {
              return n[t];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function (n) {
      var t =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return e.d(t, "a", t), t;
    }),
    (e.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function (n, t, e) {
    "use strict";
    e.r(t);
    e(1);
  },
  function (n, t, e) {
    var r = e(2);
    "string" == typeof r && (r = [[n.i, r, ""]]);
    var o = { insert: "head", singleton: !1 };
    e(4)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function (n, t, e) {
    (t = n.exports = e(3)(!1)).push([
      n.i,
      "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",
      "",
    ]),
      t.push([
        n.i,
        ":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n",
        "",
      ]);
  },
  function (n, t, e) {
    "use strict";
    n.exports = function (n) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var e = (function (n, t) {
              var e = n[1] || "",
                r = n[3];
              if (!r) return e;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        s
                      )),
                    "/*# ".concat(u, " */")),
                  i = r.sources.map(function (n) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(n, " */");
                  });
                return [e].concat(i).concat([o]).join("\n");
              }
              var a, s, u;
              return [e].join("\n");
            })(t, n);
            return t[2] ? "@media ".concat(t[2], "{").concat(e, "}") : e;
          }).join("");
        }),
        (t.i = function (n, e) {
          "string" == typeof n && (n = [[null, n, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (r[i] = !0);
          }
          for (var a = 0; a < n.length; a++) {
            var s = n[a];
            (null != s[0] && r[s[0]]) ||
              (e && !s[2]
                ? (s[2] = e)
                : e && (s[2] = "(".concat(s[2], ") and (").concat(e, ")")),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  function (n, t, e) {
    "use strict";
    var r,
      o = {},
      i = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      a = (function () {
        var n = {};
        return function (t) {
          if (void 0 === n[t]) {
            var e = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              e instanceof window.HTMLIFrameElement
            )
              try {
                e = e.contentDocument.head;
              } catch (n) {
                e = null;
              }
            n[t] = e;
          }
          return n[t];
        };
      })();
    function s(n, t) {
      for (var e = [], r = {}, o = 0; o < n.length; o++) {
        var i = n[o],
          a = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(s) : e.push((r[a] = { id: a, parts: [s] }));
      }
      return e;
    }
    function u(n, t) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e],
          i = o[r.id],
          a = 0;
        if (i) {
          for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) i.parts.push(b(r.parts[a], t));
        } else {
          for (var s = []; a < r.parts.length; a++) s.push(b(r.parts[a], t));
          o[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function c(n) {
      var t = document.createElement("style");
      if (void 0 === n.attributes.nonce) {
        var r = e.nc;
        r && (n.attributes.nonce = r);
      }
      if (
        (Object.keys(n.attributes).forEach(function (e) {
          t.setAttribute(e, n.attributes[e]);
        }),
        "function" == typeof n.insert)
      )
        n.insert(t);
      else {
        var o = a(n.insert || "head");
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(t);
      }
      return t;
    }
    var f,
      l =
        ((f = []),
        function (n, t) {
          return (f[n] = t), f.filter(Boolean).join("\n");
        });
    function p(n, t, e, r) {
      var o = e ? "" : r.css;
      if (n.styleSheet) n.styleSheet.cssText = l(t, o);
      else {
        var i = document.createTextNode(o),
          a = n.childNodes;
        a[t] && n.removeChild(a[t]),
          a.length ? n.insertBefore(i, a[t]) : n.appendChild(i);
      }
    }
    function d(n, t, e) {
      var r = e.css,
        o = e.media,
        i = e.sourceMap;
      if (
        (o && n.setAttribute("media", o),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        n.styleSheet)
      )
        n.styleSheet.cssText = r;
      else {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
        n.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      m = 0;
    function b(n, t) {
      var e, r, o;
      if (t.singleton) {
        var i = m++;
        (e = h || (h = c(t))),
          (r = p.bind(null, e, i, !1)),
          (o = p.bind(null, e, i, !0));
      } else
        (e = c(t)),
          (r = d.bind(null, e, t)),
          (o = function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(e);
          });
      return (
        r(n),
        function (t) {
          if (t) {
            if (
              t.css === n.css &&
              t.media === n.media &&
              t.sourceMap === n.sourceMap
            )
              return;
            r((n = t));
          } else o();
        }
      );
    }
    n.exports = function (n, t) {
      ((t = t || {}).attributes =
        "object" == typeof t.attributes ? t.attributes : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
      var e = s(n, t);
      return (
        u(e, t),
        function (n) {
          for (var r = [], i = 0; i < e.length; i++) {
            var a = e[i],
              c = o[a.id];
            c && (c.refs--, r.push(c));
          }
          n && u(s(n, t), t);
          for (var f = 0; f < r.length; f++) {
            var l = r[f];
            if (0 === l.refs) {
              for (var p = 0; p < l.parts.length; p++) l.parts[p]();
              delete o[l.id];
            }
          }
        }
      );
    };
  },
]);
//# sourceMappingURL=bundle.js.map
