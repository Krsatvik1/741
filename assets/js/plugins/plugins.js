/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "2.2.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isPlainObject: function (a) {
        var b;
        if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
        if (
          a.constructor &&
          !k.call(a, "constructor") &&
          !k.call(a.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = d.createElement("script")),
                (b.text = a),
                d.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : h.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((d = e.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && f.parentNode && ((this.length = 1), (this[0] = f)),
          (this.context = d),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? h.call(n(a), this[0])
          : h.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.removeEventListener("DOMContentLoaded", J),
      a.removeEventListener("load", J),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      I ||
        ((I = n.Deferred()),
        "complete" === d.readyState ||
        ("loading" !== d.readyState && !d.documentElement.doScroll)
          ? a.setTimeout(n.ready)
          : (d.addEventListener("DOMContentLoaded", J),
            a.addEventListener("load", J))),
      I.promise(b)
    );
  }),
    n.ready.promise();
  var K = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    L = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function M() {
    this.expando = n.expando + M.uid++;
  }
  (M.uid = 1),
    (M.prototype = {
      register: function (a, b) {
        var c = b || {};
        return (
          a.nodeType
            ? (a[this.expando] = c)
            : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0,
              }),
          a[this.expando]
        );
      },
      cache: function (a) {
        if (!L(a)) return {};
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            L(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[b] = c;
        else for (d in b) e[d] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = a[this.expando];
        if (void 0 !== f) {
          if (void 0 === b) this.register(a);
          else {
            n.isArray(b)
              ? (d = b.concat(b.map(n.camelCase)))
              : ((e = n.camelCase(b)),
                b in f
                  ? (d = [b, e])
                  : ((d = e), (d = d in f ? [d] : d.match(G) || []))),
              (c = d.length);
            while (c--) delete f[d[c]];
          }
          (void 0 === b || n.isEmptyObject(f)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !n.isEmptyObject(b);
      },
    });
  var N = new M(),
    O = new M(),
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;
  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Q, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : P.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        O.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function (a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function (a, b) {
      O.remove(a, b);
    },
    _data: function (a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function (a, b) {
      N.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = O.get(f)), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), R(f, d, e[d])));
            N.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              O.set(this, a);
            })
          : K(
              this,
              function (b) {
                var c, d;
                if (f && void 0 === b) {
                  if (
                    ((c =
                      O.get(f, a) ||
                      O.get(f, a.replace(Q, "-$&").toLowerCase())),
                    void 0 !== c)
                  )
                    return c;
                  if (((d = n.camelCase(a)), (c = O.get(f, d)), void 0 !== c))
                    return c;
                  if (((c = R(f, d, void 0)), void 0 !== c)) return c;
                } else
                  (d = n.camelCase(a)),
                    this.each(function () {
                      var c = O.get(this, d);
                      O.set(this, d, b),
                        a.indexOf("-") > -1 &&
                          void 0 !== c &&
                          O.set(this, a, b);
                    });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          O.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = N.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = N.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          N.get(a, c) ||
          N.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              N.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = N.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function W(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  ($.optgroup = $.option),
    ($.tbody = $.tfoot = $.colgroup = $.caption = $.thead),
    ($.th = $.td);
  function _(a, b) {
    var c =
      "undefined" != typeof a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : "undefined" != typeof a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }
  var ba = /<|&#?\w+;/;
  function ca(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        o = 0,
        p = a.length;
      p > o;
      o++
    )
      if (((f = a[o]), f || 0 === f))
        if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (Y.exec(f) || ["", ""])[1].toLowerCase()),
            (i = $[h] || $._default),
            (g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          n.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (o = 0);
    while ((f = m[o++]))
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = n.contains(f.ownerDocument, f)),
        (g = _(l.appendChild(f), "script")),
        j && aa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) Z.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;
  function ga() {
    return !0;
  }
  function ha() {
    return !1;
  }
  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ja(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ja(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = ha;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return "undefined" != typeof n && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(G) || [""]),
          (j = b.length);
        while (j--)
          (h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (N.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || d),
            (e = c.documentElement),
            (f = c.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) -
              ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (f && f.scrollTop) || 0) -
              ((e && e.clientTop) || (f && f.clientTop) || 0))),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        h.filter ? h.filter(a, g) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ga
                  : ha))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: ha,
      isPropagationStopped: ha,
      isImmediatePropagationStopped: ha,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = ga),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = ga),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = ga),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    n.fn.extend({
      on: function (a, b, c, d) {
        return ja(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ja(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = ha),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
    });
  var ka =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function pa(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function qa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function ra(a) {
    var b = na.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function sa(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        N.hasData(a) &&
        ((f = N.access(a)), (g = N.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      O.hasData(a) && ((h = O.access(a)), (i = n.extend({}, h)), O.set(b, i));
    }
  }
  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
      });
    if (
      o &&
      ((e = ca(b, a[0].ownerDocument, !1, a, d)),
      (g = e.firstChild),
      1 === e.childNodes.length && (e = g),
      g || d)
    ) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++)
        (j = e),
          m !== p &&
            ((j = n.clone(j, !0, !0)), i && n.merge(h, _(j, "script"))),
          c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)
          (j = h[m]),
            Z.test(j.type || "") &&
              !N.access(j, "globalEval") &&
              n.contains(k, j) &&
              (j.src
                ? n._evalUrl && n._evalUrl(j.src)
                : n.globalEval(j.textContent.replace(oa, "")));
    }
    return a;
  }
  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(_(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, "<$1><$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          l.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)
          ta(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++)
            sa(f[d], g[d]);
        else sa(a, h);
      return (
        (g = _(h, "script")), g.length > 0 && aa(g, !i && _(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (L(c)) {
          if ((b = c[N.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            c[N.expando] = void 0;
          }
          c[O.expando] && (c[O.expando] = void 0);
        }
    },
  }),
    n.fn.extend({
      domManip: ua,
      detach: function (a) {
        return va(this, a, !0);
      },
      remove: function (a) {
        return va(this, a);
      },
      text: function (a) {
        return K(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(_(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return K(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !la.test(a) &&
              !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(_(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return ua(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(_(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
            (c = h === f ? this : this.clone(!0)),
              n(e[h])[b](c),
              g.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var wa,
    xa = { HTML: "block", BODY: "block" };
  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function za(a) {
    var b = d,
      c = xa[a];
    return (
      c ||
        ((c = ya(a, b)),
        ("none" !== c && c) ||
          ((wa = (
            wa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = wa[0].contentDocument),
          b.write(),
          b.close(),
          (c = ya(a, b)),
          wa.detach()),
        (xa[a] = c)),
      c
    );
  }
  var Aa = /^margin/,
    Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ca = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    },
    Da = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Ea = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g = d.createElement("div"),
      h = d.createElement("div");
    if (h.style) {
      (h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (g.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        g.appendChild(h);
      function i() {
        (h.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        (b = "1%" !== d.top),
          (f = "2px" === d.marginLeft),
          (c = "4px" === d.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === d.marginRight),
          Ea.removeChild(g);
      }
      n.extend(l, {
        pixelPosition: function () {
          return i(), b;
        },
        boxSizingReliable: function () {
          return null == c && i(), c;
        },
        pixelMarginRight: function () {
          return null == c && i(), e;
        },
        reliableMarginLeft: function () {
          return null == c && i(), f;
        },
        reliableMarginRight: function () {
          var b,
            c = h.appendChild(d.createElement("div"));
          return (
            (c.style.cssText = h.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (c.style.marginRight = c.style.width = "0"),
            (h.style.width = "1px"),
            Ea.appendChild(g),
            (b = !parseFloat(a.getComputedStyle(c).marginRight)),
            Ea.removeChild(g),
            h.removeChild(c),
            b
          );
        },
      });
    }
  })();
  function Fa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Ca(a)),
      (g = c ? c.getPropertyValue(b) || c[b] : void 0),
      ("" !== g && void 0 !== g) ||
        n.contains(a.ownerDocument, a) ||
        (g = n.style(a, b)),
      c &&
        !l.pixelMarginRight() &&
        Ba.test(g) &&
        Aa.test(b) &&
        ((d = h.width),
        (e = h.minWidth),
        (f = h.maxWidth),
        (h.minWidth = h.maxWidth = h.width = g),
        (g = c.width),
        (h.width = d),
        (h.minWidth = e),
        (h.maxWidth = f)),
      void 0 !== g ? g + "" : g
    );
  }
  function Ga(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = { position: "absolute", visibility: "hidden", display: "block" },
    Ja = { letterSpacing: "0", fontWeight: "400" },
    Ka = ["Webkit", "O", "Moz", "ms"],
    La = d.createElement("div").style;
  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ka.length;
    while (c--) if (((a = Ka[c] + b), a in La)) return a;
  }
  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Oa(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + U[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + U[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g;
  }
  function Pa(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ca(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Fa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ba.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = N.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                V(d) &&
                (f[g] = N.access(d, "olddisplay", za(d.nodeName))))
            : ((e = V(d)),
              ("none" === c && e) ||
                N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = T.exec(c)) &&
                e[1] &&
                ((c = W(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Fa(a, b, d)),
        "normal" === e && b in Ja && (e = Ja[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Da(a, Ia, function () {
                  return Pa(a, b, d);
                })
              : Pa(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e,
            f = d && Ca(a),
            g =
              d &&
              Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = T.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = n.css(a, b))),
            Na(a, c, g)
          );
        },
      };
    }),
    (n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Fa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              Da(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
      return b
        ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }),
    n.fn.extend({
      css: function (a, b) {
        return K(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ca(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Qa(this, !0);
      },
      hide: function () {
        return Qa(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ra),
    (Ra.prototype = {
      constructor: Ra,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Ra.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ra.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ra.prototype.init.prototype = Ra.prototype),
    (Ra.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = Ra.prototype.init),
    (n.fx.step = {});
  var Sa,
    Ta,
    Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;
  function Wa() {
    return (
      a.setTimeout(function () {
        Sa = void 0;
      }),
      (Sa = n.now())
    );
  }
  function Xa(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = U[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ya(a, b, c) {
    for (
      var d,
        e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Za(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && V(a),
      q = N.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Ua.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = N.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          N.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ya(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function $a(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function _a(a, b, c) {
    var d,
      e,
      f = 0,
      g = _a.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Sa || Wa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Sa || Wa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for ($a(k, j.opts.specialEasing); g > f; f++)
      if ((d = _a.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, Ya, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(_a, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (_a.tweeners[c] = _a.tweeners[c] || []),
          _a.tweeners[c].unshift(b);
    },
    prefilters: [Za],
    prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = _a(this, n.extend({}, a), f);
            (e || N.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = N.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = N.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Xa(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (Sa = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Sa = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(Ta), (Ta = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (l.checkOn = "" !== a.value),
        (l.optSelected = c.selected),
        (b.disabled = !0),
        (l.optDisabled = !c.disabled),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (l.radioValue = "t" === a.value);
    })();
  var ab,
    bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e =
                  n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
    }),
    (ab = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = bb[b] || n.find.attr;
      bb[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = bb[b]),
            (bb[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            (bb[b] = f)),
          e
        );
      };
    });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : cb.test(a.nodeName) || (db.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var eb = /[\t\r\n\f]/g;
  function fb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, fb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, fb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, fb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = fb(this)), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  });
  var gb = /\r/g,
    hb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !ib.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (l = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          f || !o.trigger || o.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (
            j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            p.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            p.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : o.bindType || q),
            (m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle")),
            m && m.apply(h, c),
            (m = l && h[l]),
            m &&
              m.apply &&
              L(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          f ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !L(e) ||
            (l &&
              n.isFunction(e[q]) &&
              !n.isWindow(e) &&
              ((i = e[l]),
              i && (e[l] = null),
              (n.event.triggered = q),
              e[q](),
              (n.event.triggered = void 0),
              i && (e[l] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b);
    },
  }),
    n.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (l.focusin = "onfocusin" in a),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b);
            e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b) - 1;
            e
              ? N.access(d, b, e)
              : (d.removeEventListener(a, c, !0), N.remove(d, b));
          },
        };
      });
  var jb = a.location,
    kb = n.now(),
    lb = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
        c = new a.DOMParser().parseFromString(b, "text/xml");
      } catch (d) {
        c = void 0;
      }
      return (
        (c && !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var mb = /#.*$/,
    nb = /([?&])_=[^&]*/,
    ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    qb = /^(?:GET|HEAD)$/,
    rb = /^\/\//,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = d.createElement("a");
  vb.href = jb.href;
  function wb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function xb(a, b, c, d) {
    var e = {},
      f = a === tb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function yb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function zb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Ab(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: "GET",
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks("once memory"),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while ((b = ob.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return v || ((a = u[c] = u[c] || a), (t[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return v || (m.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > v) for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this;
          },
          abort: function (a) {
            var b = a || w;
            return e && e.abort(b), z(0, b), this;
          },
        };
      if (
        ((q.promise(x).complete = r.add),
        (x.success = x.done),
        (x.error = x.fail),
        (m.url = ((b || m.url || jb.href) + "")
          .replace(mb, "")
          .replace(rb, jb.protocol + "//")),
        (m.type = c.method || c.type || m.method || m.type),
        (m.dataTypes = n
          .trim(m.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == m.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = m.url),
            (j.href = j.href),
            (m.crossDomain =
              vb.protocol + "//" + vb.host != j.protocol + "//" + j.host);
        } catch (y) {
          m.crossDomain = !0;
        }
      }
      if (
        (m.data &&
          m.processData &&
          "string" != typeof m.data &&
          (m.data = n.param(m.data, m.traditional)),
        xb(sb, m, c, x),
        2 === v)
      )
        return x;
      (k = n.event && m.global),
        k && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !qb.test(m.type)),
        (f = m.url),
        m.hasContent ||
          (m.data &&
            ((f = m.url += (lb.test(f) ? "&" : "?") + m.data), delete m.data),
          m.cache === !1 &&
            (m.url = nb.test(f)
              ? f.replace(nb, "$1_=" + kb++)
              : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
        m.ifModified &&
          (n.lastModified[f] &&
            x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
        ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) &&
          x.setRequestHeader("Content-Type", m.contentType),
        x.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
            : m.accepts["*"]
        );
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
        return x.abort();
      w = "abort";
      for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
      if ((e = xb(tb, m, c, x))) {
        if (((x.readyState = 1), k && p.trigger("ajaxSend", [x, m]), 2 === v))
          return x;
        m.async &&
          m.timeout > 0 &&
          (i = a.setTimeout(function () {
            x.abort("timeout");
          }, m.timeout));
        try {
          (v = 1), e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, "No Transport");
      function z(b, c, d, h) {
        var j,
          l,
          t,
          u,
          w,
          y = c;
        2 !== v &&
          ((v = 2),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (x.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && 300 > b) || 304 === b),
          d && (u = zb(m, x, d)),
          (u = Ab(m, u, x, j)),
          j
            ? (m.ifModified &&
                ((w = x.getResponseHeader("Last-Modified")),
                w && (n.lastModified[f] = w),
                (w = x.getResponseHeader("etag")),
                w && (n.etag[f] = w)),
              204 === b || "HEAD" === m.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = u.state), (l = u.data), (t = u.error), (j = !t)))
            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
          (x.status = b),
          (x.statusText = (c || y) + ""),
          j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
          x.statusCode(s),
          (s = void 0),
          k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
          r.fireWith(o, [x, y]),
          k &&
            (p.trigger("ajaxComplete", [x, m]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return x;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return !n.expr.filters.visible(a);
    }),
    (n.expr.filters.visible = function (a) {
      return (
        a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
      );
    });
  var Bb = /%20/g,
    Cb = /\[\]$/,
    Db = /\r?\n/g,
    Eb = /^(?:submit|button|image|reset|file)$/i,
    Fb = /^(?:input|select|textarea|keygen)/i;
  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || Cb.test(a)
          ? d(a, e)
          : Gb(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Gb(c, a[c], b, e);
    return d.join("&").replace(Bb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              Fb.test(this.nodeName) &&
              !Eb.test(a) &&
              (this.checked || !X.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(Db, "\r\n") };
                })
              : { name: b.name, value: c.replace(Db, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Hb = { 0: 200, 1223: 204 },
    Ib = n.ajaxSettings.xhr();
  (l.cors = !!Ib && "withCredentials" in Ib),
    (l.ajax = Ib = !!Ib),
    n.ajaxTransport(function (b) {
      var c, d;
      return l.cors || (Ib && !b.crossDomain)
        ? {
            send: function (e, f) {
              var g,
                h = b.xhr();
              if (
                (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              for (g in e) h.setRequestHeader(g, e[g]);
              (c = function (a) {
                return function () {
                  c &&
                    ((c =
                      d =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.onreadystatechange =
                        null),
                    "abort" === a
                      ? h.abort()
                      : "error" === a
                      ? "number" != typeof h.status
                        ? f(0, "error")
                        : f(h.status, h.statusText)
                      : f(
                          Hb[h.status] || h.status,
                          h.statusText,
                          "text" !== (h.responseType || "text") ||
                            "string" != typeof h.responseText
                            ? { binary: h.response }
                            : { text: h.responseText },
                          h.getAllResponseHeaders()
                        ));
                };
              }),
                (h.onload = c()),
                (d = h.onerror = c("error")),
                void 0 !== h.onabort
                  ? (h.onabort = d)
                  : (h.onreadystatechange = function () {
                      4 === h.readyState &&
                        a.setTimeout(function () {
                          c && d();
                        });
                    }),
                (c = c("abort"));
              try {
                h.send((b.hasContent && b.data) || null);
              } catch (i) {
                if (c) throw i;
              }
            },
            abort: function () {
              c && c();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = n("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Jb = [],
    Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Jb.pop() || n.expando + "_" + kb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Kb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Kb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Kb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ca([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var Lb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? ((e = d.getBoundingClientRect()),
                (c = Mb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === n.css(a, "position")) a = a.offsetParent;
          return a || Ea;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function (d) {
          return K(
            this,
            function (a, d, e) {
              var f = Mb(a);
              return void 0 === e
                ? f
                  ? f[b]
                  : a[d]
                : void (f
                    ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Fa(a, b)), Ba.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return K(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      size: function () {
        return this.length;
      },
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Nb = a.jQuery,
    Ob = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
              a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
                (c.preventDefault(),
                d.is("input,button")
                  ? d.trigger("focus")
                  : d
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
              : c.hide()
          );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
//
// SmoothScroll for websites v1.4.9 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//
!(function () {
  var e,
    t,
    o,
    n,
    r = {
      frameRate: 150,
      animationTime: 700,
      stepSize: 80,
      pulseAlgorithm: !0,
      pulseScale: 8,
      pulseNormalize: 1,
      accelerationDelta: 10,
      accelerationMax: 1,
      keyboardSupport: !1,
      arrowScroll: 400,
      touchpadSupport: !1,
      fixedBackground: !0,
      excluded: "",
    },
    a = r,
    l = !1,
    i = !1,
    c = { x: 0, y: 0 },
    u = !1,
    s = document.documentElement,
    d = [],
    f = /^Mac/.test(navigator.platform),
    m = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
    },
    h = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function w() {
    if (!u && document.body) {
      u = !0;
      var n = document.body,
        r = document.documentElement,
        c = window.innerHeight,
        d = n.scrollHeight;
      if (
        ((s = document.compatMode.indexOf("CSS") >= 0 ? r : n),
        (e = n),
        a.keyboardSupport && A("keydown", S),
        top != self)
      )
        i = !0;
      else if (Z && d > c && (n.offsetHeight <= c || r.offsetHeight <= c)) {
        var f,
          m = document.createElement("div");
        (m.style.cssText =
          "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
          s.scrollHeight +
          "px"),
          document.body.appendChild(m),
          (o = function () {
            f ||
              (f = setTimeout(function () {
                l ||
                  ((m.style.height = "0"),
                  (m.style.height = s.scrollHeight + "px"),
                  (f = null));
              }, 500));
          }),
          setTimeout(o, 10),
          A("resize", o);
        if (
          ((t = new q(o)).observe(n, {
            attributes: !0,
            childList: !0,
            characterData: !1,
          }),
          s.offsetHeight <= c)
        ) {
          var h = document.createElement("div");
          (h.style.clear = "both"), n.appendChild(h);
        }
      }
      a.fixedBackground ||
        l ||
        ((n.style.backgroundAttachment = "scroll"),
        (r.style.backgroundAttachment = "scroll"));
    }
  }
  var p = [],
    v = !1,
    y = Date.now();
  function b(e, t, o) {
    var n, r;
    if (
      ((n = (n = t) > 0 ? 1 : -1),
      (r = (r = o) > 0 ? 1 : -1),
      (c.x !== n || c.y !== r) && ((c.x = n), (c.y = r), (p = []), (y = 0)),
      1 != a.accelerationMax)
    ) {
      var l = Date.now() - y;
      if (l < a.accelerationDelta) {
        var i = (1 + 50 / l) / 2;
        i > 1 && ((i = Math.min(i, a.accelerationMax)), (t *= i), (o *= i));
      }
      y = Date.now();
    }
    if (
      (p.push({
        x: t,
        y: o,
        lastX: t < 0 ? 0.99 : -0.99,
        lastY: o < 0 ? 0.99 : -0.99,
        start: Date.now(),
      }),
      !v)
    ) {
      var u = V(),
        s = e === u || e === document.body;
      null == e.$scrollBehavior &&
        (function (e) {
          var t = M(e);
          if (null == B[t]) {
            var o = getComputedStyle(e, "")["scroll-behavior"];
            B[t] = "smooth" == o;
          }
          return B[t];
        })(e) &&
        ((e.$scrollBehavior = e.style.scrollBehavior),
        (e.style.scrollBehavior = "auto"));
      var d = function (n) {
        for (var r = Date.now(), l = 0, i = 0, c = 0; c < p.length; c++) {
          var u = p[c],
            f = r - u.start,
            m = f >= a.animationTime,
            h = m ? 1 : f / a.animationTime;
          a.pulseAlgorithm && (h = I(h));
          var w = (u.x * h - u.lastX) >> 0,
            y = (u.y * h - u.lastY) >> 0;
          (l += w),
            (i += y),
            (u.lastX += w),
            (u.lastY += y),
            m && (p.splice(c, 1), c--);
        }
        s
          ? window.scrollBy(l, i)
          : (l && (e.scrollLeft += l), i && (e.scrollTop += i)),
          t || o || (p = []),
          p.length
            ? R(d, e, 1e3 / a.frameRate + 1)
            : ((v = !1),
              null != e.$scrollBehavior &&
                ((e.style.scrollBehavior = e.$scrollBehavior),
                (e.$scrollBehavior = null)));
      };
      R(d, e, 0), (v = !0);
    }
  }
  function g(t) {
    u || w();
    var o = t.target;
    if (t.defaultPrevented || t.ctrlKey) return !0;
    if (
      K(e, "embed") ||
      (K(o, "embed") && /\.pdf/i.test(o.src)) ||
      K(e, "object") ||
      o.shadowRoot
    )
      return !0;
    var r = -t.wheelDeltaX || t.deltaX || 0,
      l = -t.wheelDeltaY || t.deltaY || 0;
    f &&
      (t.wheelDeltaX &&
        P(t.wheelDeltaX, 120) &&
        (r = (t.wheelDeltaX / Math.abs(t.wheelDeltaX)) * -120),
      t.wheelDeltaY &&
        P(t.wheelDeltaY, 120) &&
        (l = (t.wheelDeltaY / Math.abs(t.wheelDeltaY)) * -120)),
      r || l || (l = -t.wheelDelta || 0),
      1 === t.deltaMode && ((r *= 40), (l *= 40));
    var c = L(o);
    return c
      ? !!(function (e) {
          if (!e) return;
          d.length || (d = [e, e, e]);
          (e = Math.abs(e)),
            d.push(e),
            d.shift(),
            clearTimeout(n),
            (n = setTimeout(function () {
              try {
                localStorage.SS_deltaBuffer = d.join(",");
              } catch (e) {}
            }, 1e3));
          var t = e > 120 && $(e);
          return !$(120) && !$(100) && !t;
        })(l) ||
          (Math.abs(r) > 1.2 && (r *= a.stepSize / 120),
          Math.abs(l) > 1.2 && (l *= a.stepSize / 120),
          b(c, r, l),
          t.preventDefault(),
          void C())
      : !i ||
          !U ||
          (Object.defineProperty(t, "target", { value: window.frameElement }),
          parent.wheel(t));
  }
  function S(t) {
    var o = t.target,
      n =
        t.ctrlKey ||
        t.altKey ||
        t.metaKey ||
        (t.shiftKey && t.keyCode !== m.spacebar);
    document.body.contains(e) || (e = document.activeElement);
    var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      t.defaultPrevented ||
      /^(textarea|select|embed|object)$/i.test(o.nodeName) ||
      (K(o, "input") && !r.test(o.type)) ||
      K(e, "video") ||
      (function (e) {
        var t = e.target,
          o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do {
            if (
              (o = t.classList && t.classList.contains("html5-video-controls"))
            )
              break;
          } while ((t = t.parentNode));
        return o;
      })(t) ||
      o.isContentEditable ||
      n
    )
      return !0;
    if (
      (K(o, "button") || (K(o, "input") && r.test(o.type))) &&
      t.keyCode === m.spacebar
    )
      return !0;
    if (K(o, "input") && "radio" == o.type && h[t.keyCode]) return !0;
    var l = 0,
      c = 0,
      u = L(e);
    if (!u) return !i || !U || parent.keydown(t);
    var s = u.clientHeight;
    switch ((u == document.body && (s = window.innerHeight), t.keyCode)) {
      case m.up:
        c = -a.arrowScroll;
        break;
      case m.down:
        c = a.arrowScroll;
        break;
      case m.spacebar:
        c = -(t.shiftKey ? 1 : -1) * s * 0.9;
        break;
      case m.pageup:
        c = 0.9 * -s;
        break;
      case m.pagedown:
        c = 0.9 * s;
        break;
      case m.home:
        u == document.body &&
          document.scrollingElement &&
          (u = document.scrollingElement),
          (c = -u.scrollTop);
        break;
      case m.end:
        var d = u.scrollHeight - u.scrollTop - s;
        c = d > 0 ? d + 10 : 0;
        break;
      case m.left:
        l = -a.arrowScroll;
        break;
      case m.right:
        l = a.arrowScroll;
        break;
      default:
        return !0;
    }
    b(u, l, c), t.preventDefault(), C();
  }
  function x(t) {
    e = t.target;
  }
  var k,
    D,
    M =
      ((k = 0),
      function (e) {
        return e.uniqueID || (e.uniqueID = k++);
      }),
    E = {},
    T = {},
    B = {};
  function C() {
    clearTimeout(D),
      (D = setInterval(function () {
        E = T = B = {};
      }, 1e3));
  }
  function H(e, t, o) {
    for (var n = o ? E : T, r = e.length; r--; ) n[M(e[r])] = t;
    return t;
  }
  function z(e, t) {
    return (t ? E : T)[M(e)];
  }
  function L(e) {
    var t = [],
      o = document.body,
      n = s.scrollHeight;
    do {
      var r = z(e, !1);
      if (r) return H(t, r);
      if ((t.push(e), n === e.scrollHeight)) {
        var a = (X(s) && X(o)) || Y(s);
        if ((i && O(s)) || (!i && a)) return H(t, V());
      } else if (O(e) && Y(e)) return H(t, e);
    } while ((e = e.parentElement));
  }
  function O(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function X(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }
  function Y(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }
  function A(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }
  function N(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }
  function K(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer)
    try {
      d = localStorage.SS_deltaBuffer.split(",");
    } catch (e) {}
  function P(e, t) {
    return Math.floor(e / t) == e / t;
  }
  function $(e) {
    return P(d[0], e) && P(d[1], e) && P(d[2], e);
  }
  var j,
    R =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60);
      },
    q =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
    V =
      ((j = document.scrollingElement),
      function () {
        if (!j) {
          var e = document.createElement("div");
          (e.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(e);
          var t = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            (j =
              document.body.scrollTop != t
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e);
        }
        return j;
      });
  function F(e) {
    var t, o;
    return (
      (e *= a.pulseScale) < 1
        ? (t = e - (1 - Math.exp(-e)))
        : ((e -= 1), (t = (o = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - o))),
      t * a.pulseNormalize
    );
  }
  function I(e) {
    return e >= 1
      ? 1
      : e <= 0
      ? 0
      : (1 == a.pulseNormalize && (a.pulseNormalize /= F(1)), F(e));
  }
  var _ = window.navigator.userAgent,
    W = /Edge/.test(_),
    U = /chrome/i.test(_) && !W,
    G = /safari/i.test(_) && !W,
    J = /mobile/i.test(_),
    Q = /Windows NT 6.1/i.test(_) && /rv:11/i.test(_),
    Z = G && (/Version\/8/i.test(_) || /Version\/9/i.test(_)),
    ee = (U || G || Q) && !J,
    te = !1;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          te = !0;
        },
      })
    );
  } catch (e) {}
  var oe = !!te && { passive: !1 },
    ne = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function re(e) {
    for (var t in e) r.hasOwnProperty(t) && (a[t] = e[t]);
  }
  ne && ee && (A(ne, g, oe), A("mousedown", x), A("load", w)),
    (re.destroy = function () {
      t && t.disconnect(),
        N(ne, g),
        N("mousedown", x),
        N("keydown", S),
        N("resize", o),
        N("load", w);
    }),
    window.SmoothScrollOptions && re(window.SmoothScrollOptions),
    "function" == typeof define && define.amd
      ? define(function () {
          return re;
        })
      : "object" == typeof exports
      ? (module.exports = re)
      : (window.SmoothScroll = re);
})();
/*
 * Cube Portfolio - Responsive jQuery Grid Plugin
 *
 * version: 4.2.0 (2 June, 2017)
 * require: jQuery v1.8+
 *
 * Copyright 2013-2017, Mihai Buricea (http://scriptpie.com/cubeportfolio/live-preview/)
 * Licensed under CodeCanyon License (http://codecanyon.net/licenses)
 *
 */
!(function (a, b, c, d) {
  "use strict";
  function e(b, c, f) {
    var g = this;
    if (a.data(b, "cubeportfolio"))
      throw new Error(
        "cubeportfolio is already initialized. Destroy it before initialize again!"
      );
    (g.obj = b),
      (g.$obj = a(b)),
      a.data(g.obj, "cubeportfolio", g),
      c.sortToPreventGaps !== d &&
        ((c.sortByDimension = c.sortToPreventGaps), delete c.sortToPreventGaps),
      (g.options = a.extend(
        {},
        a.fn.cubeportfolio.options,
        c,
        g.$obj.data("cbp-options")
      )),
      (g.isAnimating = !0),
      (g.defaultFilter = g.options.defaultFilter),
      (g.registeredEvents = []),
      (g.queue = []),
      (g.addedWrapp = !1),
      a.isFunction(f) && g.registerEvent("initFinish", f, !0);
    var h = g.$obj.children();
    g.$obj.addClass("cbp"),
      (0 === h.length || h.first().hasClass("cbp-item")) &&
        (g.wrapInner(g.obj, "cbp-wrapper"), (g.addedWrapp = !0)),
      (g.$ul = g.$obj.children().addClass("cbp-wrapper")),
      g.wrapInner(g.obj, "cbp-wrapper-outer"),
      (g.wrapper = g.$obj.children(".cbp-wrapper-outer")),
      (g.blocks = g.$ul.children(".cbp-item")),
      (g.blocksOn = g.blocks),
      g.wrapInner(g.blocks, "cbp-item-wrapper"),
      (g.plugins = {}),
      a.each(e.plugins, function (a, b) {
        var c = b(g);
        c && (g.plugins[a] = c);
      }),
      g.triggerEvent("afterPlugins"),
      (g.removeAttrAfterStoreData = a.Deferred()),
      g.loadImages(g.$obj, g.display);
  }
  a.extend(e.prototype, {
    storeData: function (b, c) {
      var d = this;
      (c = c || 0),
        b.each(function (b, e) {
          var f = a(e),
            g = f.width(),
            h = f.height();
          f.data("cbp", {
            index: c + b,
            wrapper: f.children(".cbp-item-wrapper"),
            widthInitial: g,
            heightInitial: h,
            width: g,
            height: h,
            widthAndGap: g + d.options.gapVertical,
            heightAndGap: h + d.options.gapHorizontal,
            left: null,
            leftNew: null,
            top: null,
            topNew: null,
            pack: !1,
          });
        }),
        this.removeAttrAfterStoreData.resolve();
    },
    wrapInner: function (a, b) {
      var e, f, g;
      if (((b = b || ""), !(a.length && a.length < 1)))
        for (a.length === d && (a = [a]), f = a.length - 1; f >= 0; f--) {
          for (
            e = a[f], g = c.createElement("div"), g.setAttribute("class", b);
            e.childNodes.length;

          )
            g.appendChild(e.childNodes[0]);
          e.appendChild(g);
        }
    },
    removeAttrImage: function (a) {
      this.removeAttrAfterStoreData.then(function () {
        a.removeAttribute("width"),
          a.removeAttribute("height"),
          a.removeAttribute("style");
      });
    },
    loadImages: function (b, c) {
      var d = this;
      requestAnimationFrame(function () {
        var e = b.find("img").map(function (b, c) {
            if (c.hasAttribute("width") && c.hasAttribute("height")) {
              if (
                ((c.style.width = c.getAttribute("width") + "px"),
                (c.style.height = c.getAttribute("height") + "px"),
                c.hasAttribute("data-cbp-src"))
              )
                return null;
              if (null === d.checkSrc(c)) d.removeAttrImage(c);
              else {
                var e = a("<img>");
                e.on("load.cbp error.cbp", function () {
                  a(this).off("load.cbp error.cbp"), d.removeAttrImage(c);
                }),
                  c.srcset
                    ? (e.attr("sizes", c.sizes || "100vw"),
                      e.attr("srcset", c.srcset))
                    : e.attr("src", c.src);
              }
              return null;
            }
            return d.checkSrc(c);
          }),
          f = e.length;
        return 0 === f
          ? void c.call(d)
          : void a.each(e, function (b, e) {
              var g = a("<img>");
              g.on("load.cbp error.cbp", function () {
                a(this).off("load.cbp error.cbp"), f--, 0 === f && c.call(d);
              }),
                e.srcset
                  ? (g.attr("sizes", e.sizes), g.attr("srcset", e.srcset))
                  : g.attr("src", e.src);
            });
      });
    },
    checkSrc: function (b) {
      var c = b.srcset,
        e = b.src;
      if ("" === e) return null;
      var f = a("<img>");
      c
        ? (f.attr("sizes", b.sizes || "100vw"), f.attr("srcset", c))
        : f.attr("src", e);
      var g = f[0];
      return g.complete && g.naturalWidth !== d && 0 !== g.naturalWidth
        ? null
        : g;
    },
    display: function () {
      var a = this;
      (a.width = a.$obj.outerWidth()),
        a.triggerEvent("initStartRead"),
        a.triggerEvent("initStartWrite"),
        a.width > 0 && (a.storeData(a.blocks), a.layoutAndAdjustment()),
        a.triggerEvent("initEndRead"),
        a.triggerEvent("initEndWrite"),
        a.$obj.addClass("cbp-ready"),
        a.runQueue("delayFrame", a.delayFrame);
    },
    delayFrame: function () {
      var a = this;
      requestAnimationFrame(function () {
        a.resizeEvent(),
          a.triggerEvent("initFinish"),
          (a.isAnimating = !1),
          a.$obj.trigger("initComplete.cbp");
      });
    },
    resizeEvent: function () {
      var a = this;
      e.private.resize.initEvent({
        instance: a,
        fn: function () {
          a.triggerEvent("beforeResizeGrid");
          var b = a.$obj.outerWidth();
          a.width !== b &&
            ((a.width = b),
            "alignCenter" === a.options.gridAdjustment &&
              (a.wrapper[0].style.maxWidth = ""),
            a.layoutAndAdjustment(),
            a.triggerEvent("resizeGrid")),
            a.triggerEvent("resizeWindow");
        },
      });
    },
    gridAdjust: function () {
      var b = this;
      "responsive" === b.options.gridAdjustment
        ? b.responsiveLayout()
        : (b.blocks.removeAttr("style"),
          b.blocks.each(function (c, d) {
            var e = a(d).data("cbp"),
              f = d.getBoundingClientRect(),
              g = b.columnWidthTruncate(f.right - f.left),
              h = Math.round(f.bottom - f.top);
            (e.height = h),
              (e.heightAndGap = h + b.options.gapHorizontal),
              (e.width = g),
              (e.widthAndGap = g + b.options.gapVertical);
          }),
          (b.widthAvailable = b.width + b.options.gapVertical)),
        b.triggerEvent("gridAdjust");
    },
    layoutAndAdjustment: function (a) {
      var b = this;
      a && (b.width = b.$obj.outerWidth()), b.gridAdjust(), b.layout();
    },
    layout: function () {
      var a = this;
      a.computeBlocks(a.filterConcat(a.defaultFilter)),
        "slider" === a.options.layoutMode
          ? (a.sliderLayoutReset(), a.sliderLayout())
          : (a.mosaicLayoutReset(), a.mosaicLayout()),
        a.positionateItems(),
        a.resizeMainContainer();
    },
    computeFilter: function (a) {
      var b = this;
      b.computeBlocks(a),
        b.mosaicLayoutReset(),
        b.mosaicLayout(),
        b.filterLayout();
    },
    filterLayout: function () {
      var b = this;
      b.blocksOff.addClass("cbp-item-off"),
        b.blocksOn.removeClass("cbp-item-off").each(function (b, c) {
          var d = a(c).data("cbp");
          (d.left = d.leftNew),
            (d.top = d.topNew),
            (c.style.left = d.left + "px"),
            (c.style.top = d.top + "px");
        }),
        b.resizeMainContainer(),
        b.filterFinish();
    },
    filterFinish: function () {
      var a = this;
      a.blocksAreSorted && a.sortBlocks(a.blocks, "index"),
        (a.isAnimating = !1),
        a.$obj.trigger("filterComplete.cbp"),
        a.triggerEvent("filterFinish");
    },
    computeBlocks: function (a) {
      var b = this;
      (b.blocksOnInitial = b.blocksOn),
        (b.blocksOn = b.blocks.filter(a)),
        (b.blocksOff = b.blocks.not(a)),
        b.triggerEvent("computeBlocksFinish", a);
    },
    responsiveLayout: function () {
      var b = this;
      (b.cols =
        b[
          a.isArray(b.options.mediaQueries)
            ? "getColumnsBreakpoints"
            : "getColumnsAuto"
        ]()),
        (b.columnWidth = b.columnWidthTruncate(
          (b.width + b.options.gapVertical) / b.cols
        )),
        (b.widthAvailable = b.columnWidth * b.cols),
        "mosaic" === b.options.layoutMode && b.getMosaicWidthReference(),
        b.blocks.each(function (c, d) {
          var e,
            f = a(d).data("cbp"),
            g = 1;
          "mosaic" === b.options.layoutMode &&
            (g = b.getColsMosaic(f.widthInitial)),
            (e = b.columnWidth * g - b.options.gapVertical),
            (d.style.width = e + "px"),
            (f.width = e),
            (f.widthAndGap = e + b.options.gapVertical),
            (d.style.height = "");
        });
      var c = [];
      b.blocks.each(function (b, d) {
        a.each(a(d).find("img").filter("[width][height]"), function (b, d) {
          var e = 0;
          a(d)
            .parentsUntil(".cbp-item")
            .each(function (b, c) {
              var d = a(c).width();
              if (d > 0) return (e = d), !1;
            });
          var f = parseInt(d.getAttribute("width"), 10),
            g = parseInt(d.getAttribute("height"), 10),
            h = parseFloat((f / g).toFixed(10));
          c.push({ el: d, width: e, height: Math.round(e / h) });
        });
      }),
        a.each(c, function (a, b) {
          (b.el.width = b.width),
            (b.el.height = b.height),
            (b.el.style.width = b.width + "px"),
            (b.el.style.height = b.height + "px");
        }),
        b.blocks.each(function (c, d) {
          var e = a(d).data("cbp"),
            f = d.getBoundingClientRect(),
            g = Math.round(f.bottom - f.top);
          (e.height = g), (e.heightAndGap = g + b.options.gapHorizontal);
        });
    },
    getMosaicWidthReference: function () {
      var b = this,
        c = [];
      b.blocks.each(function (b, d) {
        var e = a(d).data("cbp");
        c.push(e.widthInitial);
      }),
        c.sort(function (a, b) {
          return a - b;
        }),
        c[0]
          ? (b.mosaicWidthReference = c[0])
          : (b.mosaicWidthReference = b.columnWidth);
    },
    getColsMosaic: function (a) {
      var b = this;
      if (a === b.width) return b.cols;
      var c = a / b.mosaicWidthReference;
      return (
        (c = c % 1 >= 0.79 ? Math.ceil(c) : Math.floor(c)),
        Math.min(Math.max(c, 1), b.cols)
      );
    },
    getColumnsAuto: function () {
      var a = this;
      if (0 === a.blocks.length) return 1;
      var b = a.blocks.first().data("cbp").widthInitial + a.options.gapVertical;
      return Math.max(Math.round(a.width / b), 1);
    },
    getColumnsBreakpoints: function () {
      var b,
        c = this,
        d = c.width;
      return (
        a.each(c.options.mediaQueries, function (a, c) {
          if (d >= c.width) return (b = c), !1;
        }),
        b || (b = c.options.mediaQueries[c.options.mediaQueries.length - 1]),
        c.triggerEvent("onMediaQueries", b.options),
        b.cols
      );
    },
    columnWidthTruncate: function (a) {
      return Math.floor(a);
    },
    positionateItems: function () {
      var b,
        c = this;
      c.blocksOn.removeClass("cbp-item-off").each(function (c, d) {
        (b = a(d).data("cbp")),
          (b.left = b.leftNew),
          (b.top = b.topNew),
          (d.style.left = b.left + "px"),
          (d.style.top = b.top + "px");
      }),
        c.blocksOff.addClass("cbp-item-off"),
        c.blocksAreSorted && c.sortBlocks(c.blocks, "index");
    },
    resizeMainContainer: function () {
      var b,
        c = this,
        f = Math.max(
          c.freeSpaces.slice(-1)[0].topStart - c.options.gapHorizontal,
          0
        );
      return (
        "alignCenter" === c.options.gridAdjustment &&
          ((b = 0),
          c.blocksOn.each(function (c, d) {
            var e = a(d).data("cbp"),
              f = e.left + e.width;
            f > b && (b = f);
          }),
          (c.wrapper[0].style.maxWidth = b + "px")),
        f === c.height
          ? void c.triggerEvent("resizeMainContainer")
          : ((c.obj.style.height = f + "px"),
            c.height !== d &&
              (e.private.modernBrowser
                ? c.$obj.one(e.private.transitionend, function () {
                    c.$obj.trigger("pluginResize.cbp");
                  })
                : c.$obj.trigger("pluginResize.cbp")),
            (c.height = f),
            void c.triggerEvent("resizeMainContainer"))
      );
    },
    filterConcat: function (a) {
      return a.replace(/\|/gi, "");
    },
    pushQueue: function (a, b) {
      var c = this;
      (c.queue[a] = c.queue[a] || []), c.queue[a].push(b);
    },
    runQueue: function (b, c) {
      var d = this,
        e = d.queue[b] || [];
      a.when.apply(a, e).then(a.proxy(c, d));
    },
    clearQueue: function (a) {
      var b = this;
      b.queue[a] = [];
    },
    registerEvent: function (a, b, c) {
      var d = this;
      d.registeredEvents[a] || (d.registeredEvents[a] = []),
        d.registeredEvents[a].push({ func: b, oneTime: c || !1 });
    },
    triggerEvent: function (a, b) {
      var c,
        d,
        e = this;
      if (e.registeredEvents[a])
        for (c = 0, d = e.registeredEvents[a].length; c < d; c++)
          e.registeredEvents[a][c].func.call(e, b),
            e.registeredEvents[a][c].oneTime &&
              (e.registeredEvents[a].splice(c, 1), c--, d--);
    },
    addItems: function (b, c, d) {
      var f = this;
      f.wrapInner(b, "cbp-item-wrapper"),
        f.$ul[d](b.addClass("cbp-item-loading").css({ top: "100%", left: 0 })),
        e.private.modernBrowser
          ? b.last().one(e.private.animationend, function () {
              f.addItemsFinish(b, c);
            })
          : f.addItemsFinish(b, c),
        f.loadImages(b, function () {
          if ((f.$obj.addClass("cbp-updateItems"), "append" === d))
            f.storeData(b, f.blocks.length), a.merge(f.blocks, b);
          else {
            f.storeData(b);
            var c = b.length;
            f.blocks.each(function (b, d) {
              a(d).data("cbp").index = c + b;
            }),
              (f.blocks = a.merge(b, f.blocks));
          }
          f.triggerEvent("addItemsToDOM", b),
            f.layoutAndAdjustment(!0),
            f.elems && e.public.showCounter.call(f.obj, f.elems);
        });
    },
    addItemsFinish: function (b, c) {
      var d = this;
      (d.isAnimating = !1),
        d.$obj.removeClass("cbp-updateItems"),
        b.removeClass("cbp-item-loading"),
        a.isFunction(c) && c.call(d, b),
        d.$obj.trigger("onAfterLoadMore.cbp", [b]);
    },
    removeItems: function (b, c) {
      var d = this;
      d.$obj.addClass("cbp-updateItems"),
        e.private.modernBrowser
          ? b.last().one(e.private.animationend, function () {
              d.removeItemsFinish(b, c);
            })
          : d.removeItemsFinish(b, c),
        b.each(function (b, c) {
          d.blocks.each(function (b, f) {
            if (c === f) {
              var g = a(f);
              d.blocks.splice(b, 1),
                e.private.modernBrowser
                  ? (g.one(e.private.animationend, function () {
                      g.remove();
                    }),
                    g.addClass("cbp-removeItem"))
                  : g.remove();
            }
          });
        }),
        d.blocks.each(function (b, c) {
          a(c).data("cbp").index = b;
        }),
        d.layoutAndAdjustment(!0),
        d.elems && e.public.showCounter.call(d.obj, d.elems);
    },
    removeItemsFinish: function (b, c) {
      var d = this;
      (d.isAnimating = !1),
        d.$obj.removeClass("cbp-updateItems"),
        a.isFunction(c) && c.call(d, b);
    },
  }),
    (a.fn.cubeportfolio = function (a, b, c) {
      return this.each(function () {
        if ("object" == typeof a || !a) return e.public.init.call(this, a, b);
        if (e.public[a]) return e.public[a].call(this, b, c);
        throw new Error(
          "Method " + a + " does not exist on jquery.cubeportfolio.js"
        );
      });
    }),
    (e.plugins = {}),
    (a.fn.cubeportfolio.constructor = e);
})(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = a.fn.cubeportfolio.constructor;
    a.extend(e.prototype, {
      mosaicLayoutReset: function () {
        var b = this;
        (b.blocksAreSorted = !1),
          b.blocksOn.each(function (c, d) {
            (a(d).data("cbp").pack = !1),
              b.options.sortByDimension && (d.style.height = "");
          }),
          (b.freeSpaces = [
            {
              leftStart: 0,
              leftEnd: b.widthAvailable,
              topStart: 0,
              topEnd: Math.pow(2, 18),
            },
          ]);
      },
      mosaicLayout: function () {
        for (var a = this, b = 0, c = a.blocksOn.length; b < c; b++) {
          var d = a.getSpaceIndexAndBlock();
          if (null === d)
            return (
              a.mosaicLayoutReset(),
              a.sortBlocksToPreventGaps(),
              void a.mosaicLayout()
            );
          a.generateF1F2(d.spaceIndex, d.dataBlock),
            a.generateG1G2G3G4(d.dataBlock),
            a.cleanFreeSpaces(),
            a.addHeightToBlocks();
        }
        a.blocksAreSorted && a.sortBlocks(a.blocksOn, "topNew");
      },
      getSpaceIndexAndBlock: function () {
        var b = this,
          c = null;
        return (
          a.each(b.freeSpaces, function (d, e) {
            var f = e.leftEnd - e.leftStart,
              g = e.topEnd - e.topStart;
            return (
              b.blocksOn.each(function (b, h) {
                var i = a(h).data("cbp");
                if (i.pack !== !0)
                  return i.widthAndGap <= f && i.heightAndGap <= g
                    ? ((i.pack = !0),
                      (c = { spaceIndex: d, dataBlock: i }),
                      (i.leftNew = e.leftStart),
                      (i.topNew = e.topStart),
                      !1)
                    : void 0;
              }),
              !b.blocksAreSorted && b.options.sortByDimension && d > 0
                ? ((c = null), !1)
                : null === c && void 0
            );
          }),
          c
        );
      },
      generateF1F2: function (a, b) {
        var c = this,
          d = c.freeSpaces[a],
          e = {
            leftStart: d.leftStart + b.widthAndGap,
            leftEnd: d.leftEnd,
            topStart: d.topStart,
            topEnd: d.topEnd,
          },
          f = {
            leftStart: d.leftStart,
            leftEnd: d.leftEnd,
            topStart: d.topStart + b.heightAndGap,
            topEnd: d.topEnd,
          };
        c.freeSpaces.splice(a, 1),
          e.leftEnd > e.leftStart &&
            e.topEnd > e.topStart &&
            (c.freeSpaces.splice(a, 0, e), a++),
          f.leftEnd > f.leftStart &&
            f.topEnd > f.topStart &&
            c.freeSpaces.splice(a, 0, f);
      },
      generateG1G2G3G4: function (b) {
        var c = this,
          d = [];
        a.each(c.freeSpaces, function (a, e) {
          var f = c.intersectSpaces(e, b);
          return null === f
            ? void d.push(e)
            : (c.generateG1(e, f, d),
              c.generateG2(e, f, d),
              c.generateG3(e, f, d),
              void c.generateG4(e, f, d));
        }),
          (c.freeSpaces = d);
      },
      intersectSpaces: function (a, b) {
        var c = {
          leftStart: b.leftNew,
          leftEnd: b.leftNew + b.widthAndGap,
          topStart: b.topNew,
          topEnd: b.topNew + b.heightAndGap,
        };
        if (
          a.leftStart === c.leftStart &&
          a.leftEnd === c.leftEnd &&
          a.topStart === c.topStart &&
          a.topEnd === c.topEnd
        )
          return null;
        var d = Math.max(a.leftStart, c.leftStart),
          e = Math.min(a.leftEnd, c.leftEnd),
          f = Math.max(a.topStart, c.topStart),
          g = Math.min(a.topEnd, c.topEnd);
        return e <= d || g <= f
          ? null
          : { leftStart: d, leftEnd: e, topStart: f, topEnd: g };
      },
      generateG1: function (a, b, c) {
        a.topStart !== b.topStart &&
          c.push({
            leftStart: a.leftStart,
            leftEnd: a.leftEnd,
            topStart: a.topStart,
            topEnd: b.topStart,
          });
      },
      generateG2: function (a, b, c) {
        a.leftEnd !== b.leftEnd &&
          c.push({
            leftStart: b.leftEnd,
            leftEnd: a.leftEnd,
            topStart: a.topStart,
            topEnd: a.topEnd,
          });
      },
      generateG3: function (a, b, c) {
        a.topEnd !== b.topEnd &&
          c.push({
            leftStart: a.leftStart,
            leftEnd: a.leftEnd,
            topStart: b.topEnd,
            topEnd: a.topEnd,
          });
      },
      generateG4: function (a, b, c) {
        a.leftStart !== b.leftStart &&
          c.push({
            leftStart: a.leftStart,
            leftEnd: b.leftStart,
            topStart: a.topStart,
            topEnd: a.topEnd,
          });
      },
      cleanFreeSpaces: function () {
        var a = this;
        a.freeSpaces.sort(function (a, b) {
          return a.topStart > b.topStart
            ? 1
            : a.topStart < b.topStart
            ? -1
            : a.leftStart > b.leftStart
            ? 1
            : a.leftStart < b.leftStart
            ? -1
            : 0;
        }),
          a.correctSubPixelValues(),
          a.removeNonMaximalFreeSpaces();
      },
      correctSubPixelValues: function () {
        var a,
          b,
          c,
          d,
          e = this;
        for (a = 0, b = e.freeSpaces.length - 1; a < b; a++)
          (c = e.freeSpaces[a]),
            (d = e.freeSpaces[a + 1]),
            d.topStart - c.topStart <= 1 && (d.topStart = c.topStart);
      },
      removeNonMaximalFreeSpaces: function () {
        var b = this;
        b.uniqueFreeSpaces(),
          (b.freeSpaces = a.map(b.freeSpaces, function (c, d) {
            return (
              a.each(b.freeSpaces, function (a, b) {
                if (d !== a)
                  return b.leftStart <= c.leftStart &&
                    b.leftEnd >= c.leftEnd &&
                    b.topStart <= c.topStart &&
                    b.topEnd >= c.topEnd
                    ? ((c = null), !1)
                    : void 0;
              }),
              c
            );
          }));
      },
      uniqueFreeSpaces: function () {
        var b = this,
          c = [];
        a.each(b.freeSpaces, function (b, d) {
          a.each(c, function (a, b) {
            if (
              b.leftStart === d.leftStart &&
              b.leftEnd === d.leftEnd &&
              b.topStart === d.topStart &&
              b.topEnd === d.topEnd
            )
              return (d = null), !1;
          }),
            null !== d && c.push(d);
        }),
          (b.freeSpaces = c);
      },
      addHeightToBlocks: function () {
        var b = this;
        a.each(b.freeSpaces, function (c, d) {
          b.blocksOn.each(function (c, e) {
            var f = a(e).data("cbp");
            if (f.pack === !0 && b.intersectSpaces(d, f)) {
              var g = d.topStart - f.topNew - f.heightAndGap;
              g === -1 && (e.style.height = f.height - 1 + "px");
            }
          });
        });
      },
      sortBlocksToPreventGaps: function () {
        var b = this;
        (b.blocksAreSorted = !0),
          b.blocksOn.sort(function (b, c) {
            var d = a(b).data("cbp"),
              e = a(c).data("cbp");
            return d.widthAndGap < e.widthAndGap
              ? 1
              : d.widthAndGap > e.widthAndGap
              ? -1
              : d.heightAndGap < e.heightAndGap
              ? 1
              : d.heightAndGap > e.heightAndGap
              ? -1
              : d.index > e.index
              ? 1
              : d.index < e.index
              ? -1
              : void 0;
          });
      },
      sortBlocks: function (b, c) {
        b.sort(function (b, d) {
          var e = a(b).data("cbp"),
            f = a(d).data("cbp");
          return e[c] > f[c]
            ? 1
            : e[c] < f[c]
            ? -1
            : e.leftNew > f.leftNew
            ? 1
            : e.leftNew < f.leftNew
            ? -1
            : 0;
        });
      },
    });
  })(jQuery, window, document),
  (jQuery.fn.cubeportfolio.options = {
    filters: "",
    search: "",
    layoutMode: "grid",
    sortByDimension: !1,
    drag: !0,
    auto: !1,
    autoTimeout: 5e3,
    autoPauseOnHover: !0,
    showNavigation: !0,
    showPagination: !0,
    rewindNav: !0,
    scrollByPage: !1,
    defaultFilter: "*",
    filterDeeplinking: !1,
    animationType: "fadeOut",
    gridAdjustment: "responsive",
    mediaQueries: !1,
    gapHorizontal: 10,
    gapVertical: 10,
    caption: "pushTop",
    displayType: "fadeIn",
    displayTypeSpeed: 400,
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: !0,
    lightboxTitleSrc: "data-title",
    lightboxCounter:
      '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    singlePageDelegate: ".cbp-singlePage",
    singlePageDeeplinking: !0,
    singlePageStickyNavigation: !0,
    singlePageCounter:
      '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
    singlePageAnimation: "left",
    singlePageCallback: null,
    singlePageInlineDelegate: ".cbp-singlePageInline",
    singlePageInlineDeeplinking: !1,
    singlePageInlinePosition: "top",
    singlePageInlineInFocus: !0,
    singlePageInlineCallback: null,
    plugins: {},
  }),
  (function (a, b, c, d) {
    "use strict";
    var e = a.fn.cubeportfolio.constructor,
      f = a(b);
    (e.private = {
      publicEvents: function (b, c, d) {
        var e = this;
        (e.events = []),
          (e.initEvent = function (a) {
            0 === e.events.length && e.scrollEvent(), e.events.push(a);
          }),
          (e.destroyEvent = function (c) {
            (e.events = a.map(e.events, function (a, b) {
              if (a.instance !== c) return a;
            })),
              0 === e.events.length && f.off(b);
          }),
          (e.scrollEvent = function () {
            var g;
            f.on(b, function () {
              clearTimeout(g),
                (g = setTimeout(function () {
                  (a.isFunction(d) && d.call(e)) ||
                    a.each(e.events, function (a, b) {
                      b.fn.call(b.instance);
                    });
                }, c));
            });
          });
      },
      checkInstance: function (b) {
        var c = a.data(this, "cubeportfolio");
        if (!c)
          throw new Error(
            "cubeportfolio is not initialized. Initialize it before calling " +
              b +
              " method!"
          );
        return c.triggerEvent("publicMethod"), c;
      },
      browserInfo: function () {
        var a,
          c,
          f,
          g = e.private,
          h = navigator.appVersion;
        h.indexOf("MSIE 8.") !== -1
          ? (g.browser = "ie8")
          : h.indexOf("MSIE 9.") !== -1
          ? (g.browser = "ie9")
          : h.indexOf("MSIE 10.") !== -1
          ? (g.browser = "ie10")
          : b.ActiveXObject || "ActiveXObject" in b
          ? (g.browser = "ie11")
          : /android/gi.test(h)
          ? (g.browser = "android")
          : /iphone|ipad|ipod/gi.test(h)
          ? (g.browser = "ios")
          : /chrome/gi.test(h)
          ? (g.browser = "chrome")
          : (g.browser = ""),
          (f = g.styleSupport("perspective")),
          typeof f !== d &&
            ((a = g.styleSupport("transition")),
            (g.transitionend = {
              WebkitTransition: "webkitTransitionEnd",
              transition: "transitionend",
            }[a]),
            (c = g.styleSupport("animation")),
            (g.animationend = {
              WebkitAnimation: "webkitAnimationEnd",
              animation: "animationend",
            }[c]),
            (g.animationDuration = {
              WebkitAnimation: "webkitAnimationDuration",
              animation: "animationDuration",
            }[c]),
            (g.animationDelay = {
              WebkitAnimation: "webkitAnimationDelay",
              animation: "animationDelay",
            }[c]),
            (g.transform = g.styleSupport("transform")),
            a && c && g.transform && (g.modernBrowser = !0));
      },
      styleSupport: function (a) {
        var b,
          d = "Webkit" + a.charAt(0).toUpperCase() + a.slice(1),
          e = c.createElement("div");
        return a in e.style ? (b = a) : d in e.style && (b = d), (e = null), b;
      },
    }),
      e.private.browserInfo(),
      (e.private.resize = new e.private.publicEvents(
        "resize.cbp",
        50,
        function () {
          if (b.innerHeight == screen.height) return !0;
        }
      ));
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = a.fn.cubeportfolio.constructor;
    e.public = {
      init: function (a, b) {
        new e(this, a, b);
      },
      destroy: function (b) {
        var c = e.private.checkInstance.call(this, "destroy");
        c.triggerEvent("beforeDestroy"),
          a.removeData(this, "cubeportfolio"),
          c.blocks.removeData("cbp"),
          c.$obj.removeClass("cbp-ready").removeAttr("style"),
          c.$ul.removeClass("cbp-wrapper"),
          e.private.resize.destroyEvent(c),
          c.$obj.off(".cbp"),
          c.blocks.removeClass("cbp-item-off").removeAttr("style"),
          c.blocks.find(".cbp-item-wrapper").each(function (b, c) {
            var d = a(c),
              e = d.children();
            e.length ? e.unwrap() : d.remove();
          }),
          c.destroySlider && c.destroySlider(),
          c.$ul.unwrap(),
          c.addedWrapp && c.blocks.unwrap(),
          0 === c.blocks.length && c.$ul.remove(),
          a.each(c.plugins, function (a, b) {
            "function" == typeof b.destroy && b.destroy();
          }),
          a.isFunction(b) && b.call(c),
          c.triggerEvent("afterDestroy");
      },
      filter: function (b, c) {
        var f,
          g = e.private.checkInstance.call(this, "filter");
        if (!g.isAnimating) {
          if (
            ((g.isAnimating = !0),
            a.isFunction(c) && g.registerEvent("filterFinish", c, !0),
            a.isFunction(b))
          ) {
            if (((f = b.call(g, g.blocks)), f === d))
              throw new Error(
                "When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible."
              );
          } else {
            if (g.options.filterDeeplinking) {
              var h = location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi, "");
              (location.href = h + "#cbpf=" + encodeURIComponent(b)),
                g.singlePage &&
                  g.singlePage.url &&
                  (g.singlePage.url = location.href);
            }
            (g.defaultFilter = b), (f = g.filterConcat(g.defaultFilter));
          }
          g.triggerEvent("filterStart", f),
            g.singlePageInline && g.singlePageInline.isOpen
              ? g.singlePageInline.close("promise", {
                  callback: function () {
                    g.computeFilter(f);
                  },
                })
              : g.computeFilter(f);
        }
      },
      showCounter: function (b, c) {
        var d = e.private.checkInstance.call(this, "showCounter");
        a.isFunction(c) && d.registerEvent("showCounterFinish", c, !0),
          (d.elems = b),
          b.each(function () {
            var b = a(this),
              c = d.blocks.filter(b.data("filter")).length;
            b.find(".cbp-filter-counter").text(c);
          }),
          d.triggerEvent("showCounterFinish", b);
      },
      appendItems: function (a, b) {
        e.public.append.call(this, a, b);
      },
      append: function (b, c) {
        var d = e.private.checkInstance.call(this, "append"),
          f = a(b).filter(".cbp-item");
        return d.isAnimating || f.length < 1
          ? void (a.isFunction(c) && c.call(d, f))
          : ((d.isAnimating = !0),
            void (d.singlePageInline && d.singlePageInline.isOpen
              ? d.singlePageInline.close("promise", {
                  callback: function () {
                    d.addItems(f, c, "append");
                  },
                })
              : d.addItems(f, c, "append")));
      },
      prepend: function (b, c) {
        var d = e.private.checkInstance.call(this, "prepend"),
          f = a(b).filter(".cbp-item");
        return d.isAnimating || f.length < 1
          ? void (a.isFunction(c) && c.call(d, f))
          : ((d.isAnimating = !0),
            void (d.singlePageInline && d.singlePageInline.isOpen
              ? d.singlePageInline.close("promise", {
                  callback: function () {
                    d.addItems(f, c, "prepend");
                  },
                })
              : d.addItems(f, c, "prepend")));
      },
      remove: function (b, c) {
        var d = e.private.checkInstance.call(this, "remove"),
          f = a(b).filter(".cbp-item");
        return d.isAnimating || f.length < 1
          ? void (a.isFunction(c) && c.call(d, f))
          : ((d.isAnimating = !0),
            void (d.singlePageInline && d.singlePageInline.isOpen
              ? d.singlePageInline.close("promise", {
                  callback: function () {
                    d.removeItems(f, c);
                  },
                })
              : d.removeItems(f, c)));
      },
      layout: function (b) {
        var c = e.private.checkInstance.call(this, "layout");
        return (
          (c.width = c.$obj.outerWidth()),
          c.isAnimating || c.width <= 0
            ? void (a.isFunction(b) && b.call(c))
            : ("alignCenter" === c.options.gridAdjustment &&
                (c.wrapper[0].style.maxWidth = ""),
              c.storeData(c.blocks),
              c.layoutAndAdjustment(),
              void (a.isFunction(b) && b.call(c)))
        );
      },
    };
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = a.fn.cubeportfolio.constructor;
    a.extend(e.prototype, {
      updateSliderPagination: function () {
        var b,
          c,
          d = this;
        if (d.options.showPagination) {
          for (
            b = Math.ceil(d.blocksOn.length / d.cols),
              d.navPagination.empty(),
              c = b - 1;
            c >= 0;
            c--
          )
            a("<div/>", {
              class: "cbp-nav-pagination-item",
              "data-slider-action": "jumpTo",
            }).appendTo(d.navPagination);
          d.navPaginationItems = d.navPagination.children();
        }
        d.enableDisableNavSlider();
      },
      destroySlider: function () {
        var b = this;
        "slider" === b.options.layoutMode &&
          (b.$obj.removeClass("cbp-mode-slider"),
          b.$ul.removeAttr("style"),
          b.$ul.off(".cbp"),
          a(c).off(".cbp"),
          b.options.auto && b.stopSliderAuto());
      },
      nextSlider: function (a) {
        var b = this;
        if (b.isEndSlider()) {
          if (!b.isRewindNav()) return;
          b.sliderActive = 0;
        } else
          b.options.scrollByPage
            ? (b.sliderActive = Math.min(
                b.sliderActive + b.cols,
                b.blocksOn.length - b.cols
              ))
            : (b.sliderActive += 1);
        b.goToSlider();
      },
      prevSlider: function (a) {
        var b = this;
        if (b.isStartSlider()) {
          if (!b.isRewindNav()) return;
          b.sliderActive = b.blocksOn.length - b.cols;
        } else
          b.options.scrollByPage
            ? (b.sliderActive = Math.max(0, b.sliderActive - b.cols))
            : (b.sliderActive -= 1);
        b.goToSlider();
      },
      jumpToSlider: function (a) {
        var b = this,
          c = Math.min(a.index() * b.cols, b.blocksOn.length - b.cols);
        c !== b.sliderActive && ((b.sliderActive = c), b.goToSlider());
      },
      jumpDragToSlider: function (a) {
        var b,
          c,
          d,
          e = this,
          f = a > 0;
        e.options.scrollByPage
          ? ((b = e.cols * e.columnWidth), (c = e.cols))
          : ((b = e.columnWidth), (c = 1)),
          (a = Math.abs(a)),
          (d = Math.floor(a / b) * c),
          a % b > 20 && (d += c),
          f
            ? (e.sliderActive = Math.min(
                e.sliderActive + d,
                e.blocksOn.length - e.cols
              ))
            : (e.sliderActive = Math.max(0, e.sliderActive - d)),
          e.goToSlider();
      },
      isStartSlider: function () {
        return 0 === this.sliderActive;
      },
      isEndSlider: function () {
        var a = this;
        return a.sliderActive + a.cols > a.blocksOn.length - 1;
      },
      goToSlider: function () {
        var a = this;
        a.enableDisableNavSlider(), a.updateSliderPosition();
      },
      startSliderAuto: function () {
        var a = this;
        return a.isDrag
          ? void a.stopSliderAuto()
          : void (a.timeout = setTimeout(function () {
              a.nextSlider(), a.startSliderAuto();
            }, a.options.autoTimeout));
      },
      stopSliderAuto: function () {
        clearTimeout(this.timeout);
      },
      enableDisableNavSlider: function () {
        var a,
          b,
          c = this;
        c.isRewindNav() ||
          ((b = c.isStartSlider() ? "addClass" : "removeClass"),
          c.navPrev[b]("cbp-nav-stop"),
          (b = c.isEndSlider() ? "addClass" : "removeClass"),
          c.navNext[b]("cbp-nav-stop")),
          c.options.showPagination &&
            ((a = c.options.scrollByPage
              ? Math.ceil(c.sliderActive / c.cols)
              : c.isEndSlider()
              ? c.navPaginationItems.length - 1
              : Math.floor(c.sliderActive / c.cols)),
            c.navPaginationItems
              .removeClass("cbp-nav-pagination-active")
              .eq(a)
              .addClass("cbp-nav-pagination-active")),
          c.customPagination &&
            ((a = c.options.scrollByPage
              ? Math.ceil(c.sliderActive / c.cols)
              : c.isEndSlider()
              ? c.customPaginationItems.length - 1
              : Math.floor(c.sliderActive / c.cols)),
            c.customPaginationItems
              .removeClass(c.customPaginationClass)
              .eq(a)
              .addClass(c.customPaginationClass));
      },
      isRewindNav: function () {
        var a = this;
        return (
          !a.options.showNavigation ||
          (!(a.blocksOn.length <= a.cols) && !!a.options.rewindNav)
        );
      },
      sliderItemsLength: function () {
        return this.blocksOn.length <= this.cols;
      },
      sliderLayout: function () {
        var b = this;
        b.blocksOn.each(function (c, d) {
          var e = a(d).data("cbp");
          (e.leftNew = b.columnWidth * c),
            (e.topNew = 0),
            b.sliderFreeSpaces.push({ topStart: e.heightAndGap });
        }),
          b.getFreeSpacesForSlider(),
          b.$ul.width(
            b.columnWidth * b.blocksOn.length - b.options.gapVertical
          );
      },
      getFreeSpacesForSlider: function () {
        var a = this;
        (a.freeSpaces = a.sliderFreeSpaces.slice(
          a.sliderActive,
          a.sliderActive + a.cols
        )),
          a.freeSpaces.sort(function (a, b) {
            return a.topStart > b.topStart
              ? 1
              : a.topStart < b.topStart
              ? -1
              : void 0;
          });
      },
      updateSliderPosition: function () {
        var a = this,
          b = -a.sliderActive * a.columnWidth;
        e.private.modernBrowser
          ? (a.$ul[0].style[e.private.transform] =
              "translate3d(" + b + "px, 0px, 0)")
          : (a.$ul[0].style.left = b + "px"),
          a.getFreeSpacesForSlider(),
          a.resizeMainContainer();
      },
      dragSlider: function () {
        function f(b) {
          if (!q.sliderItemsLength()) {
            if (
              (u ? (p = b) : b.preventDefault(),
              q.options.auto && q.stopSliderAuto(),
              s)
            )
              return void a(m).one("click.cbp", function () {
                return !1;
              });
            (m = a(b.target)),
              (k = j(b).x),
              (l = 0),
              (n = -q.sliderActive * q.columnWidth),
              (o = q.columnWidth * (q.blocksOn.length - q.cols)),
              r.on(t.move, h),
              r.on(t.end, g),
              q.$obj.addClass("cbp-mode-slider-dragStart");
          }
        }
        function g(a) {
          q.$obj.removeClass("cbp-mode-slider-dragStart"),
            (s = !0),
            0 !== l
              ? (m.one("click.cbp", function (a) {
                  return !1;
                }),
                requestAnimationFrame(function () {
                  q.jumpDragToSlider(l), q.$ul.one(e.private.transitionend, i);
                }))
              : i.call(q),
            r.off(t.move),
            r.off(t.end);
        }
        function h(a) {
          (l = k - j(a).x),
            (l > 8 || l < -8) && a.preventDefault(),
            (q.isDrag = !0);
          var b = n - l;
          l < 0 && l < n
            ? (b = (n - l) / 5)
            : l > 0 && n - l < -o && (b = -o + (o + n - l) / 5),
            e.private.modernBrowser
              ? (q.$ul[0].style[e.private.transform] =
                  "translate3d(" + b + "px, 0px, 0)")
              : (q.$ul[0].style.left = b + "px");
        }
        function i() {
          if (((s = !1), (q.isDrag = !1), q.options.auto)) {
            if (q.mouseIsEntered) return;
            q.startSliderAuto();
          }
        }
        function j(a) {
          return (
            a.originalEvent !== d &&
              a.originalEvent.touches !== d &&
              (a = a.originalEvent.touches[0]),
            { x: a.pageX, y: a.pageY }
          );
        }
        var k,
          l,
          m,
          n,
          o,
          p,
          q = this,
          r = a(c),
          s = !1,
          t = {},
          u = !1;
        (q.isDrag = !1),
          "ontouchstart" in b ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
            ? ((t = {
                start: "touchstart.cbp",
                move: "touchmove.cbp",
                end: "touchend.cbp",
              }),
              (u = !0))
            : (t = {
                start: "mousedown.cbp",
                move: "mousemove.cbp",
                end: "mouseup.cbp",
              }),
          q.$ul.on(t.start, f);
      },
      sliderLayoutReset: function () {
        var a = this;
        (a.freeSpaces = []), (a.sliderFreeSpaces = []);
      },
    });
  })(jQuery, window, document),
  "function" != typeof Object.create &&
    (Object.create = function (a) {
      function b() {}
      return (b.prototype = a), new b();
    }),
  (function () {
    for (
      var a = 0, b = ["moz", "webkit"], c = 0;
      c < b.length && !window.requestAnimationFrame;
      c++
    )
      (window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[b[c] + "CancelAnimationFrame"] ||
          window[b[c] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (b, c) {
        var d = new Date().getTime(),
          e = Math.max(0, 16 - (d - a)),
          f = window.setTimeout(function () {
            b(d + e);
          }, e);
        return (a = d + e), f;
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (a) {
          clearTimeout(a);
        });
  })(),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      var b = this;
      (b.parent = a),
        (a.filterLayout = b.filterLayout),
        a.registerEvent("computeBlocksFinish", function (b) {
          (a.blocksOn2On = a.blocksOnInitial.filter(b)),
            (a.blocksOn2Off = a.blocksOnInitial.not(b));
        });
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.filterLayout = function () {
      function b() {
        c.blocks
          .removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on")
          .each(function (b, c) {
            var d = a(c).data("cbp");
            (d.left = d.leftNew),
              (d.top = d.topNew),
              (c.style.left = d.left + "px"),
              (c.style.top = d.top + "px"),
              (c.style[f.private.transform] = "");
          }),
          c.blocksOff.addClass("cbp-item-off"),
          c.$obj.removeClass("cbp-animation-" + c.options.animationType),
          c.filterFinish();
      }
      var c = this;
      c.$obj.addClass("cbp-animation-" + c.options.animationType),
        c.blocksOn2On.addClass("cbp-item-on2on").each(function (b, c) {
          var d = a(c).data("cbp");
          c.style[f.private.transform] =
            "translate3d(" +
            (d.leftNew - d.left) +
            "px, " +
            (d.topNew - d.top) +
            "px, 0)";
        }),
        c.blocksOn2Off.addClass("cbp-item-on2off"),
        (c.blocksOff2On = c.blocksOn
          .filter(".cbp-item-off")
          .removeClass("cbp-item-off")
          .addClass("cbp-item-off2on")
          .each(function (b, c) {
            var d = a(c).data("cbp");
            (c.style.left = d.leftNew + "px"), (c.style.top = d.topNew + "px");
          })),
        c.blocksOn2Off.length
          ? c.blocksOn2Off
              .last()
              .data("cbp")
              .wrapper.one(f.private.animationend, b)
          : c.blocksOff2On.length
          ? c.blocksOff2On
              .last()
              .data("cbp")
              .wrapper.one(f.private.animationend, b)
          : b(),
        c.resizeMainContainer();
    }),
      (e.prototype.destroy = function () {
        var a = this.parent;
        a.$obj.removeClass("cbp-animation-" + a.options.animationType);
      }),
      (f.plugins.animationClassic = function (b) {
        return !f.private.modernBrowser ||
          a.inArray(b.options.animationType, [
            "boxShadow",
            "fadeOut",
            "flipBottom",
            "flipOut",
            "quicksand",
            "scaleSides",
            "skew",
          ]) < 0
          ? null
          : new e(b);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      var b = this;
      (b.parent = a), (a.filterLayout = b.filterLayout);
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.filterLayout = function () {
      function b() {
        c.wrapper[0].removeChild(d),
          "sequentially" === c.options.animationType &&
            c.blocksOn.each(function (b, c) {
              a(c).data("cbp").wrapper[0].style[f.private.animationDelay] = "";
            }),
          c.$obj.removeClass("cbp-animation-" + c.options.animationType),
          c.filterFinish();
      }
      var c = this,
        d = c.$ul[0].cloneNode(!0);
      d.setAttribute("class", "cbp-wrapper-helper"),
        c.wrapper[0].insertBefore(d, c.$ul[0]),
        requestAnimationFrame(function () {
          c.$obj.addClass("cbp-animation-" + c.options.animationType),
            c.blocksOff.addClass("cbp-item-off"),
            c.blocksOn.removeClass("cbp-item-off").each(function (b, d) {
              var e = a(d).data("cbp");
              (e.left = e.leftNew),
                (e.top = e.topNew),
                (d.style.left = e.left + "px"),
                (d.style.top = e.top + "px"),
                "sequentially" === c.options.animationType &&
                  (e.wrapper[0].style[f.private.animationDelay] =
                    60 * b + "ms");
            }),
            c.blocksOn.length
              ? c.blocksOn
                  .last()
                  .data("cbp")
                  .wrapper.one(f.private.animationend, b)
              : c.blocksOnInitial.length
              ? c.blocksOnInitial
                  .last()
                  .data("cbp")
                  .wrapper.one(f.private.animationend, b)
              : b(),
            c.resizeMainContainer();
        });
    }),
      (e.prototype.destroy = function () {
        var a = this.parent;
        a.$obj.removeClass("cbp-animation-" + a.options.animationType);
      }),
      (f.plugins.animationClone = function (b) {
        return !f.private.modernBrowser ||
          a.inArray(b.options.animationType, [
            "fadeOutTop",
            "slideLeft",
            "sequentially",
          ]) < 0
          ? null
          : new e(b);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      var b = this;
      (b.parent = a), (a.filterLayout = b.filterLayout);
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.filterLayout = function () {
      function b() {
        c.wrapper[0].removeChild(d[0]),
          c.$obj.removeClass("cbp-animation-" + c.options.animationType),
          c.blocks.each(function (b, c) {
            a(c).data("cbp").wrapper[0].style[f.private.animationDelay] = "";
          }),
          c.filterFinish();
      }
      var c = this,
        d = c.$ul.clone(!0, !0);
      d[0].setAttribute("class", "cbp-wrapper-helper"),
        c.wrapper[0].insertBefore(d[0], c.$ul[0]);
      var e = d.find(".cbp-item").not(".cbp-item-off");
      c.sortBlocks(e, "top"),
        e.children(".cbp-item-wrapper").each(function (a, b) {
          b.style[f.private.animationDelay] = 50 * a + "ms";
        }),
        requestAnimationFrame(function () {
          c.$obj.addClass("cbp-animation-" + c.options.animationType),
            c.blocksOff.addClass("cbp-item-off"),
            c.blocksOn.removeClass("cbp-item-off").each(function (b, c) {
              var d = a(c).data("cbp");
              (d.left = d.leftNew),
                (d.top = d.topNew),
                (c.style.left = d.left + "px"),
                (c.style.top = d.top + "px"),
                (d.wrapper[0].style[f.private.animationDelay] = 50 * b + "ms");
            });
          var d = c.blocksOn.length,
            g = e.length;
          0 === d && 0 === g
            ? b()
            : d < g
            ? e
                .last()
                .children(".cbp-item-wrapper")
                .one(f.private.animationend, b)
            : c.blocksOn
                .last()
                .data("cbp")
                .wrapper.one(f.private.animationend, b),
            c.resizeMainContainer();
        });
    }),
      (e.prototype.destroy = function () {
        var a = this.parent;
        a.$obj.removeClass("cbp-animation-" + a.options.animationType);
      }),
      (f.plugins.animationCloneDelay = function (b) {
        return !f.private.modernBrowser ||
          a.inArray(b.options.animationType, [
            "3dflip",
            "flipOutDelay",
            "foldLeft",
            "frontRow",
            "rotateRoom",
            "rotateSides",
            "scaleDown",
            "slideDelay",
            "unfold",
          ]) < 0
          ? null
          : new e(b);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      var b = this;
      (b.parent = a), (a.filterLayout = b.filterLayout);
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.filterLayout = function () {
      function b() {
        c.wrapper[0].removeChild(d),
          c.$obj.removeClass("cbp-animation-" + c.options.animationType),
          c.filterFinish();
      }
      var c = this,
        d = c.$ul[0].cloneNode(!0);
      d.setAttribute("class", "cbp-wrapper-helper"),
        c.wrapper[0].insertBefore(d, c.$ul[0]),
        requestAnimationFrame(function () {
          c.$obj.addClass("cbp-animation-" + c.options.animationType),
            c.blocksOff.addClass("cbp-item-off"),
            c.blocksOn.removeClass("cbp-item-off").each(function (b, c) {
              var d = a(c).data("cbp");
              (d.left = d.leftNew),
                (d.top = d.topNew),
                (c.style.left = d.left + "px"),
                (c.style.top = d.top + "px");
            }),
            c.blocksOn.length
              ? c.$ul.one(f.private.animationend, b)
              : c.blocksOnInitial.length
              ? a(d).one(f.private.animationend, b)
              : b(),
            c.resizeMainContainer();
        });
    }),
      (e.prototype.destroy = function () {
        var a = this.parent;
        a.$obj.removeClass("cbp-animation-" + a.options.animationType);
      }),
      (f.plugins.animationWrapper = function (b) {
        return !f.private.modernBrowser ||
          a.inArray(b.options.animationType, [
            "bounceBottom",
            "bounceLeft",
            "bounceTop",
            "moveLeft",
          ]) < 0
          ? null
          : new e(b);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      var b = this,
        c = a.options;
      (b.parent = a),
        (b.captionOn = c.caption),
        a.registerEvent("onMediaQueries", function (a) {
          a && a.hasOwnProperty("caption")
            ? b.captionOn !== a.caption &&
              (b.destroy(), (b.captionOn = a.caption), b.init())
            : b.captionOn !== c.caption &&
              (b.destroy(), (b.captionOn = c.caption), b.init());
        }),
        b.init();
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.init = function () {
      var a = this;
      "" != a.captionOn &&
        ("expand" === a.captionOn ||
          f.private.modernBrowser ||
          (a.parent.options.caption = a.captionOn = "minimal"),
        a.parent.$obj.addClass(
          "cbp-caption-active cbp-caption-" + a.captionOn
        ));
    }),
      (e.prototype.destroy = function () {
        this.parent.$obj.removeClass(
          "cbp-caption-active cbp-caption-" + this.captionOn
        );
      }),
      (f.plugins.caption = function (a) {
        return new e(a);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = this;
      (c.parent = b),
        b.registerEvent(
          "initFinish",
          function () {
            b.$obj.on("click.cbp", ".cbp-caption-defaultWrap", function (c) {
              if ((c.preventDefault(), !b.isAnimating)) {
                b.isAnimating = !0;
                var d = a(this),
                  e = d.next(),
                  f = d.parent(),
                  g = { position: "relative", height: e.outerHeight(!0) },
                  h = { position: "relative", height: 0 };
                if (
                  (b.$obj.addClass("cbp-caption-expand-active"),
                  f.hasClass("cbp-caption-expand-open"))
                ) {
                  var i = h;
                  (h = g), (g = i), f.removeClass("cbp-caption-expand-open");
                }
                e.css(g),
                  b.$obj.one("pluginResize.cbp", function () {
                    (b.isAnimating = !1),
                      b.$obj.removeClass("cbp-caption-expand-active"),
                      0 === g.height &&
                        (f.removeClass("cbp-caption-expand-open"),
                        e.attr("style", ""));
                  }),
                  b.layoutAndAdjustment(!0),
                  e.css(h),
                  requestAnimationFrame(function () {
                    f.addClass("cbp-caption-expand-open"),
                      e.css(g),
                      b.triggerEvent("gridAdjust"),
                      b.triggerEvent("resizeGrid");
                  });
              }
            });
          },
          !0
        );
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.destroy = function () {
      this.parent.$obj
        .find(".cbp-caption-defaultWrap")
        .off("click.cbp")
        .parent()
        .removeClass("cbp-caption-expand-active");
    }),
      (f.plugins.captionExpand = function (a) {
        return "expand" !== a.options.caption ? null : new e(a);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      b.registerEvent(
        "initEndWrite",
        function () {
          if (!(b.width <= 0)) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c),
              b.blocksOn.each(function (a, c) {
                c.style[f.private.animationDelay] =
                  a * b.options.displayTypeSpeed + "ms";
              }),
              b.$obj.addClass("cbp-displayType-bottomToTop"),
              b.blocksOn.last().one(f.private.animationend, function () {
                b.$obj.removeClass("cbp-displayType-bottomToTop"),
                  b.blocksOn.each(function (a, b) {
                    b.style[f.private.animationDelay] = "";
                  }),
                  c.resolve();
              });
          }
        },
        !0
      );
    }
    var f = a.fn.cubeportfolio.constructor;
    f.plugins.displayBottomToTop = function (a) {
      return f.private.modernBrowser &&
        "bottomToTop" === a.options.displayType &&
        0 !== a.blocksOn.length
        ? new e(a)
        : null;
    };
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      b.registerEvent(
        "initEndWrite",
        function () {
          if (!(b.width <= 0)) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c),
              (b.obj.style[f.private.animationDuration] =
                b.options.displayTypeSpeed + "ms"),
              b.$obj.addClass("cbp-displayType-fadeIn"),
              b.$obj.one(f.private.animationend, function () {
                b.$obj.removeClass("cbp-displayType-fadeIn"),
                  (b.obj.style[f.private.animationDuration] = ""),
                  c.resolve();
              });
          }
        },
        !0
      );
    }
    var f = a.fn.cubeportfolio.constructor;
    f.plugins.displayFadeIn = function (a) {
      return !f.private.modernBrowser ||
        ("lazyLoading" !== a.options.displayType &&
          "fadeIn" !== a.options.displayType) ||
        0 === a.blocksOn.length
        ? null
        : new e(a);
    };
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      b.registerEvent(
        "initEndWrite",
        function () {
          if (!(b.width <= 0)) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c),
              (b.obj.style[f.private.animationDuration] =
                b.options.displayTypeSpeed + "ms"),
              b.$obj.addClass("cbp-displayType-fadeInToTop"),
              b.$obj.one(f.private.animationend, function () {
                b.$obj.removeClass("cbp-displayType-fadeInToTop"),
                  (b.obj.style[f.private.animationDuration] = ""),
                  c.resolve();
              });
          }
        },
        !0
      );
    }
    var f = a.fn.cubeportfolio.constructor;
    f.plugins.displayFadeInToTop = function (a) {
      return f.private.modernBrowser &&
        "fadeInToTop" === a.options.displayType &&
        0 !== a.blocksOn.length
        ? new e(a)
        : null;
    };
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      b.registerEvent(
        "initEndWrite",
        function () {
          if (!(b.width <= 0)) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c),
              b.blocksOn.each(function (a, c) {
                c.style[f.private.animationDelay] =
                  a * b.options.displayTypeSpeed + "ms";
              }),
              b.$obj.addClass("cbp-displayType-sequentially"),
              b.blocksOn.last().one(f.private.animationend, function () {
                b.$obj.removeClass("cbp-displayType-sequentially"),
                  b.blocksOn.each(function (a, b) {
                    b.style[f.private.animationDelay] = "";
                  }),
                  c.resolve();
              });
          }
        },
        !0
      );
    }
    var f = a.fn.cubeportfolio.constructor;
    f.plugins.displaySequentially = function (a) {
      return f.private.modernBrowser &&
        "sequentially" === a.options.displayType &&
        0 !== a.blocksOn.length
        ? new e(a)
        : null;
    };
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = this;
      (c.parent = b),
        (c.filters = a(b.options.filters)),
        (c.filterData = []),
        b.registerEvent("afterPlugins", function (a) {
          c.filterFromUrl(), c.registerFilter();
        }),
        b.registerEvent("resetFiltersVisual", function () {
          var d = b.options.defaultFilter.split("|");
          c.filters.each(function (b, c) {
            var e = a(c).find(".cbp-filter-item");
            a.each(d, function (a, b) {
              var c = e.filter('[data-filter="' + b + '"]');
              if (c.length)
                return (
                  c
                    .addClass("cbp-filter-item-active")
                    .siblings()
                    .removeClass("cbp-filter-item-active"),
                  d.splice(a, 1),
                  !1
                );
            });
          }),
            (b.defaultFilter = b.options.defaultFilter);
        });
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.registerFilter = function () {
      var b = this,
        c = b.parent,
        d = c.defaultFilter.split("|");
      (b.wrap = b.filters.find(".cbp-l-filters-dropdownWrap").on({
        "mouseover.cbp": function () {
          a(this).addClass("cbp-l-filters-dropdownWrap-open");
        },
        "mouseleave.cbp": function () {
          a(this).removeClass("cbp-l-filters-dropdownWrap-open");
        },
      })),
        b.filters.each(function (e, f) {
          var g = a(f),
            h = "*",
            i = g.find(".cbp-filter-item"),
            j = {};
          g.hasClass("cbp-l-filters-dropdown") &&
            ((j.wrap = g.find(".cbp-l-filters-dropdownWrap")),
            (j.header = g.find(".cbp-l-filters-dropdownHeader")),
            (j.headerText = j.header.text())),
            c.$obj.cubeportfolio("showCounter", i),
            a.each(d, function (a, b) {
              if (i.filter('[data-filter="' + b + '"]').length)
                return (h = b), d.splice(a, 1), !1;
            }),
            a.data(f, "filterName", h),
            b.filterData.push(f),
            b.filtersCallback(j, i.filter('[data-filter="' + h + '"]')),
            i.on("click.cbp", function () {
              var d = a(this);
              if (!d.hasClass("cbp-filter-item-active") && !c.isAnimating) {
                b.filtersCallback(j, d),
                  a.data(f, "filterName", d.data("filter"));
                var e = a.map(b.filterData, function (b, c) {
                  var d = a.data(b, "filterName");
                  return "" !== d && "*" !== d ? d : null;
                });
                e.length < 1 && (e = ["*"]);
                var g = e.join("|");
                c.defaultFilter !== g && c.$obj.cubeportfolio("filter", g);
              }
            });
        });
    }),
      (e.prototype.filtersCallback = function (b, c) {
        a.isEmptyObject(b) ||
          (b.wrap.trigger("mouseleave.cbp"),
          b.headerText ? (b.headerText = "") : b.header.html(c.html())),
          c
            .addClass("cbp-filter-item-active")
            .siblings()
            .removeClass("cbp-filter-item-active");
      }),
      (e.prototype.filterFromUrl = function () {
        var a = /#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);
        null !== a && (this.parent.defaultFilter = decodeURIComponent(a[1]));
      }),
      (e.prototype.destroy = function () {
        var a = this;
        a.filters.find(".cbp-filter-item").off(".cbp"), a.wrap.off(".cbp");
      }),
      (f.plugins.filters = function (a) {
        return "" === a.options.filters ? null : new e(a);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = b.options.gapVertical,
        d = b.options.gapHorizontal;
      b.registerEvent("onMediaQueries", function (e) {
        (b.options.gapVertical =
          e && e.hasOwnProperty("gapVertical") ? e.gapVertical : c),
          (b.options.gapHorizontal =
            e && e.hasOwnProperty("gapHorizontal") ? e.gapHorizontal : d),
          b.blocks.each(function (c, d) {
            var e = a(d).data("cbp");
            (e.widthAndGap = e.width + b.options.gapVertical),
              (e.heightAndGap = e.height + b.options.gapHorizontal);
          });
      });
    }
    var f = a.fn.cubeportfolio.constructor;
    f.plugins.changeGapOnMediaQueries = function (a) {
      return new e(a);
    };
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = this;
      (c.parent = b),
        (c.options = a.extend({}, g, c.parent.options.plugins.inlineSlider)),
        c.runInit(),
        b.registerEvent("addItemsToDOM", function () {
          c.runInit();
        });
    }
    function f(a) {
      var b = this;
      a.hasClass("cbp-slider-inline-ready") ||
        (a.addClass("cbp-slider-inline-ready"),
        (b.items = a.find(".cbp-slider-wrapper").children(".cbp-slider-item")),
        (b.active = b.items.filter(".cbp-slider-item--active").index()),
        (b.total = b.items.length - 1),
        b.updateLeft(),
        a.find(".cbp-slider-next").on("click.cbp", function (a) {
          a.preventDefault(),
            b.active < b.total
              ? (b.active++, b.updateLeft())
              : b.active === b.total && ((b.active = 0), b.updateLeft());
        }),
        a.find(".cbp-slider-prev").on("click.cbp", function (a) {
          a.preventDefault(),
            b.active > 0
              ? (b.active--, b.updateLeft())
              : 0 === b.active && ((b.active = b.total), b.updateLeft());
        }));
    }
    var g = {},
      h = a.fn.cubeportfolio.constructor;
    (f.prototype.updateLeft = function () {
      var a = this;
      a.items.removeClass("cbp-slider-item--active"),
        a.items.eq(a.active).addClass("cbp-slider-item--active"),
        a.items.each(function (b, c) {
          c.style.left = b - a.active + "00%";
        });
    }),
      (e.prototype.runInit = function () {
        var b = this;
        b.parent.$obj
          .find(".cbp-slider-inline")
          .not(".cbp-slider-inline-ready")
          .each(function (c, d) {
            var e = a(d),
              g = e.find(".cbp-slider-item--active").find("img")[0];
            g.hasAttribute("data-cbp-src")
              ? b.parent.$obj.on("lazyLoad.cbp", function (a, b) {
                  b.src === g.src && new f(e);
                })
              : new f(e);
          });
      }),
      (e.prototype.destroy = function () {
        var b = this;
        b.parent.$obj.find(".cbp-slider-next").off("click.cbp"),
          b.parent.$obj.find(".cbp-slider-prev").off("click.cbp"),
          b.parent.$obj.off("lazyLoad.cbp"),
          b.parent.$obj.find(".cbp-slider-inline").each(function (b, c) {
            var d = a(c);
            d.removeClass("cbp-slider-inline-ready");
            var e = d.find(".cbp-slider-item");
            e.removeClass("cbp-slider-item--active"),
              e.removeAttr("style"),
              e.eq(0).addClass("cbp-slider-item--active");
          });
      }),
      (h.plugins.inlineSlider = function (a) {
        return new e(a);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = this;
      (c.parent = b),
        (c.options = a.extend({}, f, c.parent.options.plugins.lazyLoad)),
        b.registerEvent(
          "initFinish",
          function () {
            c.loadImages(),
              b.registerEvent("resizeMainContainer", function () {
                c.loadImages();
              }),
              b.registerEvent("filterFinish", function () {
                c.loadImages();
              }),
              g.private.lazyLoadScroll.initEvent({
                instance: c,
                fn: c.loadImages,
              });
          },
          !0
        );
    }
    var f = { loadingClass: "cbp-lazyload", threshold: 400 },
      g = a.fn.cubeportfolio.constructor,
      h = a(b);
    (g.private.lazyLoadScroll = new g.private.publicEvents(
      "scroll.cbplazyLoad",
      50
    )),
      (e.prototype.loadImages = function () {
        var b = this,
          c = b.parent.$obj.find("img").filter("[data-cbp-src]");
        0 !== c.length &&
          ((b.screenHeight = h.height()),
          c.each(function (c, d) {
            var e = a(d.parentNode);
            if (!b.isElementInScreen(d))
              return void e.addClass(b.options.loadingClass);
            var f = d.getAttribute("data-cbp-src");
            null === b.parent.checkSrc(a("<img>").attr("src", f))
              ? (b.removeLazyLoad(d, f), e.removeClass(b.options.loadingClass))
              : (e.addClass(b.options.loadingClass),
                a("<img>")
                  .on("load.cbp error.cbp", function () {
                    b.removeLazyLoad(d, f, e);
                  })
                  .attr("src", f));
          }));
      }),
      (e.prototype.removeLazyLoad = function (b, c, d) {
        var e = this;
        (b.src = c),
          b.removeAttribute("data-cbp-src"),
          e.parent.removeAttrImage(b),
          e.parent.$obj.trigger("lazyLoad.cbp", b),
          d &&
            (g.private.modernBrowser
              ? a(b).one(g.private.transitionend, function () {
                  d.removeClass(e.options.loadingClass);
                })
              : d.removeClass(e.options.loadingClass));
      }),
      (e.prototype.isElementInScreen = function (a) {
        var b = this,
          c = a.getBoundingClientRect(),
          d = c.bottom + b.options.threshold,
          e = b.screenHeight + d - (c.top - b.options.threshold);
        return d >= 0 && d <= e;
      }),
      (e.prototype.destroy = function () {
        g.private.lazyLoadScroll.destroyEvent(this);
      }),
      (g.plugins.lazyLoad = function (a) {
        return new e(a);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = this;
      (c.parent = b),
        (c.options = a.extend({}, f, c.parent.options.plugins.loadMore)),
        (c.loadMore = a(c.options.element).find(".cbp-l-loadMore-link")),
        0 !== c.loadMore.length &&
          ((c.loadItems = c.loadMore.find(".cbp-l-loadMore-loadItems")),
          "0" === c.loadItems.text() &&
            c.loadMore.addClass("cbp-l-loadMore-stop"),
          b.registerEvent("filterStart", function (a) {
            c.populateItems().then(function () {
              var b = c.items.filter(a).length;
              b > 0
                ? (c.loadMore.removeClass("cbp-l-loadMore-stop"),
                  c.loadItems.html(b))
                : c.loadMore.addClass("cbp-l-loadMore-stop");
            });
          }),
          c[c.options.action]());
    }
    var f = { element: "", action: "click", loadItems: 3 },
      g = a.fn.cubeportfolio.constructor;
    (e.prototype.populateItems = function () {
      var b = this;
      return b.items
        ? a.Deferred().resolve()
        : ((b.items = a()),
          a
            .ajax({
              url: b.loadMore.attr("href"),
              type: "GET",
              dataType: "HTML",
            })
            .done(function (c) {
              var d = a
                .map(c.split(/\r?\n/), function (b, c) {
                  return a.trim(b);
                })
                .join("");
              0 !== d.length &&
                a.each(a.parseHTML(d), function (c, d) {
                  a(d).hasClass("cbp-item")
                    ? (b.items = b.items.add(d))
                    : a.each(d.children, function (c, d) {
                        a(d).hasClass("cbp-item") && (b.items = b.items.add(d));
                      });
                });
            })
            .fail(function () {
              (b.items = null),
                b.loadMore.removeClass("cbp-l-loadMore-loading");
            }));
    }),
      (e.prototype.populateInsertItems = function (b) {
        var c = this,
          d = [],
          e = c.parent.defaultFilter,
          f = 0;
        return (
          c.items.each(function (b, g) {
            return (
              f !== c.options.loadItems &&
              void (e && "*" !== e
                ? a(g).filter(e).length && (d.push(g), (c.items[b] = null), f++)
                : (d.push(g), (c.items[b] = null), f++))
            );
          }),
          (c.items = c.items.map(function (a, b) {
            return b;
          })),
          0 === d.length
            ? void c.loadMore
                .removeClass("cbp-l-loadMore-loading")
                .addClass("cbp-l-loadMore-stop")
            : void c.parent.$obj.cubeportfolio("append", d, b)
        );
      }),
      (e.prototype.click = function () {
        function a() {
          b.loadMore.removeClass("cbp-l-loadMore-loading");
          var a,
            c = b.parent.defaultFilter;
          (a = c && "*" !== c ? b.items.filter(c).length : b.items.length),
            0 === a
              ? b.loadMore.addClass("cbp-l-loadMore-stop")
              : b.loadItems.html(a);
        }
        var b = this;
        b.loadMore.on("click.cbp", function (c) {
          c.preventDefault(),
            b.parent.isAnimating ||
              b.loadMore.hasClass("cbp-l-loadMore-stop") ||
              (b.loadMore.addClass("cbp-l-loadMore-loading"),
              b.populateItems().then(function () {
                b.populateInsertItems(a);
              }));
        });
      }),
      (e.prototype.auto = function () {
        function c() {
          if (!h && !e.loadMore.hasClass("cbp-l-loadMore-stop")) {
            var a = e.loadMore.offset().top - 200,
              b = f.scrollTop() + f.height();
            a > b ||
              ((h = !0),
              e
                .populateItems()
                .then(function () {
                  e.populateInsertItems(d);
                })
                .fail(function () {
                  h = !1;
                }));
          }
        }
        function d() {
          var a,
            b = e.parent.defaultFilter;
          (a = b && "*" !== b ? e.items.filter(b).length : e.items.length),
            0 === a
              ? e.loadMore
                  .removeClass("cbp-l-loadMore-loading")
                  .addClass("cbp-l-loadMore-stop")
              : (e.loadItems.html(a), f.trigger("scroll.loadMore")),
            (h = !1),
            0 === e.items.length &&
              (g.private.loadMoreScroll.destroyEvent(e),
              e.parent.$obj.off("filterComplete.cbp"));
        }
        var e = this,
          f = a(b),
          h = !1;
        (g.private.loadMoreScroll = new g.private.publicEvents(
          "scroll.loadMore",
          100
        )),
          e.parent.$obj.one("initComplete.cbp", function () {
            e.loadMore
              .addClass("cbp-l-loadMore-loading")
              .on("click.cbp", function (a) {
                a.preventDefault();
              }),
              g.private.loadMoreScroll.initEvent({
                instance: e,
                fn: function () {
                  e.parent.isAnimating || c();
                },
              }),
              e.parent.$obj.on("filterComplete.cbp", function () {
                c();
              }),
              c();
          });
      }),
      (e.prototype.destroy = function () {
        this.loadMore.off(".cbp"),
          g.private.loadMoreScroll &&
            g.private.loadMoreScroll.destroyEvent(this);
      }),
      (g.plugins.loadMore = function (a) {
        var b = a.options.plugins;
        return (
          a.options.loadMore &&
            (b.loadMore || (b.loadMore = {}),
            (b.loadMore.element = a.options.loadMore)),
          a.options.loadMoreAction &&
            (b.loadMore || (b.loadMore = {}),
            (b.loadMore.action = a.options.loadMoreAction)),
          b.loadMore &&
            b.loadMore.selector !== d &&
            ((b.loadMore.element = b.loadMore.selector),
            delete b.loadMore.selector),
          b.loadMore && b.loadMore.element ? new e(a) : null
        );
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      var b = this;
      (b.parent = a),
        a.options.lightboxShowCounter === !1 &&
          (a.options.lightboxCounter = ""),
        a.options.singlePageShowCounter === !1 &&
          (a.options.singlePageCounter = ""),
        a.registerEvent(
          "initStartRead",
          function () {
            b.run();
          },
          !0
        );
    }
    var f = a.fn.cubeportfolio.constructor,
      g = { delay: 0 },
      h = {
        init: function (b, d) {
          var e,
            f = this;
          if (
            ((f.cubeportfolio = b),
            (f.type = d),
            (f.isOpen = !1),
            (f.options = f.cubeportfolio.options),
            "lightbox" === d &&
              (f.cubeportfolio.registerEvent("resizeWindow", function () {
                f.resizeImage();
              }),
              (f.localOptions = a.extend(
                {},
                g,
                f.cubeportfolio.options.plugins.lightbox
              ))),
            "singlePageInline" === d)
          ) {
            if (
              ((f.height = 0),
              f.createMarkupSinglePageInline(),
              f.cubeportfolio.registerEvent("resizeGrid", function () {
                f.isOpen && f.close();
              }),
              f.options.singlePageInlineDeeplinking)
            ) {
              (f.url = location.href),
                "#" === f.url.slice(-1) && (f.url = f.url.slice(0, -1));
              var h = f.url.split("#cbpi="),
                i = h.shift();
              a.each(h, function (b, c) {
                if (
                  (f.cubeportfolio.blocksOn.each(function (b, d) {
                    var g = a(d).find(
                      f.options.singlePageInlineDelegate + '[href="' + c + '"]'
                    );
                    if (g.length) return (e = g), !1;
                  }),
                  e)
                )
                  return !1;
              }),
                e &&
                  f.cubeportfolio.registerEvent(
                    "initFinish",
                    function () {
                      f.openSinglePageInline(f.cubeportfolio.blocksOn, e[0]);
                    },
                    !0
                  );
            }
            return void (f.localOptions = a.extend(
              {},
              g,
              f.cubeportfolio.options.plugins.singlePageInline
            ));
          }
          if ((f.createMarkup(), "singlePage" === d)) {
            if (
              (f.cubeportfolio.registerEvent("resizeWindow", function () {
                if (f.options.singlePageStickyNavigation) {
                  var a = f.contentWrap[0].clientWidth;
                  a > 0 && (f.navigationWrap.width(a), f.navigation.width(a));
                }
              }),
              f.options.singlePageDeeplinking)
            ) {
              (f.url = location.href),
                "#" === f.url.slice(-1) && (f.url = f.url.slice(0, -1));
              var h = f.url.split("#cbp="),
                i = h.shift();
              if (
                (a.each(h, function (b, c) {
                  if (
                    (f.cubeportfolio.blocksOn.each(function (b, d) {
                      var g = a(d).find(
                        f.options.singlePageDelegate + '[href="' + c + '"]'
                      );
                      if (g.length) return (e = g), !1;
                    }),
                    e)
                  )
                    return !1;
                }),
                e)
              ) {
                f.url = i;
                var j = e,
                  k = j.attr("data-cbp-singlePage"),
                  l = [];
                k
                  ? (l = j
                      .closest(a(".cbp-item"))
                      .find('[data-cbp-singlePage="' + k + '"]'))
                  : f.cubeportfolio.blocksOn.each(function (b, c) {
                      var d = a(c);
                      d.not(".cbp-item-off") &&
                        d
                          .find(f.options.singlePageDelegate)
                          .each(function (b, c) {
                            a(c).attr("data-cbp-singlePage") || l.push(c);
                          });
                    }),
                  f.openSinglePage(l, e[0]);
              } else if (h.length) {
                var m = c.createElement("a");
                m.setAttribute("href", h[0]), f.openSinglePage([m], m);
              }
            }
            f.localOptions = a.extend(
              {},
              g,
              f.cubeportfolio.options.plugins.singlePage
            );
          }
        },
        createMarkup: function () {
          var b = this,
            e = "";
          "singlePage" === b.type &&
            "left" !== b.options.singlePageAnimation &&
            (e = " cbp-popup-singlePage-" + b.options.singlePageAnimation),
            (b.wrap = a("<div/>", {
              class: "cbp-popup-wrap cbp-popup-" + b.type + e,
              "data-action": "lightbox" === b.type ? "close" : "",
            }).on("click.cbp", function (c) {
              if (!b.stopEvents) {
                var d = a(c.target).attr("data-action");
                b[d] && (b[d](), c.preventDefault());
              }
            })),
            "singlePage" === b.type
              ? ((b.contentWrap = a("<div/>", {
                  class: "cbp-popup-content-wrap",
                }).appendTo(b.wrap)),
                "ios" === f.private.browser &&
                  b.contentWrap.css("overflow", "auto"),
                (b.content = a("<div/>", {
                  class: "cbp-popup-content",
                }).appendTo(b.contentWrap)))
              : (b.content = a("<div/>", {
                  class: "cbp-popup-content",
                }).appendTo(b.wrap)),
            a("<div/>", { class: "cbp-popup-loadingBox" }).appendTo(b.wrap),
            "ie8" === f.private.browser &&
              (b.bg = a("<div/>", {
                class: "cbp-popup-ie8bg",
                "data-action": "lightbox" === b.type ? "close" : "",
              }).appendTo(b.wrap)),
            "singlePage" === b.type &&
            b.options.singlePageStickyNavigation === !1
              ? (b.navigationWrap = a("<div/>", {
                  class: "cbp-popup-navigation-wrap",
                }).appendTo(b.contentWrap))
              : (b.navigationWrap = a("<div/>", {
                  class: "cbp-popup-navigation-wrap",
                }).appendTo(b.wrap)),
            (b.navigation = a("<div/>", {
              class: "cbp-popup-navigation",
            }).appendTo(b.navigationWrap)),
            (b.closeButton = a("<div/>", {
              class: "cbp-popup-close",
              title: "Close (Esc arrow key)",
              "data-action": "close",
            }).appendTo(b.navigation)),
            (b.nextButton = a("<div/>", {
              class: "cbp-popup-next",
              title: "Next (Right arrow key)",
              "data-action": "next",
            }).appendTo(b.navigation)),
            (b.prevButton = a("<div/>", {
              class: "cbp-popup-prev",
              title: "Previous (Left arrow key)",
              "data-action": "prev",
            }).appendTo(b.navigation)),
            "singlePage" === b.type &&
              (b.options.singlePageCounter &&
                ((b.counter = a(b.options.singlePageCounter).appendTo(
                  b.navigation
                )),
                b.counter.text("")),
              b.content.on(
                "click.cbp",
                b.options.singlePageDelegate,
                function (a) {
                  a.preventDefault();
                  var e,
                    f,
                    g = b.dataArray.length,
                    h = this.getAttribute("href");
                  for (e = 0; e < g; e++)
                    if (b.dataArray[e].url === h) {
                      f = e;
                      break;
                    }
                  if (f === d) {
                    var i = c.createElement("a");
                    i.setAttribute("href", h),
                      (b.dataArray = [{ url: h, element: i }]),
                      (b.counterTotal = 1),
                      b.nextButton.hide(),
                      b.prevButton.hide(),
                      b.singlePageJumpTo(0);
                  } else b.singlePageJumpTo(f - b.current);
                }
              ),
              b.contentWrap.on(
                "mousewheel.cbp DOMMouseScroll.cbp",
                function (a) {
                  a.stopImmediatePropagation();
                }
              )),
            a(c).on("keydown.cbp", function (a) {
              b.isOpen &&
                (b.stopEvents ||
                  (i && a.stopImmediatePropagation(),
                  37 === a.keyCode
                    ? b.prev()
                    : 39 === a.keyCode
                    ? b.next()
                    : 27 === a.keyCode && b.close()));
            });
        },
        createMarkupSinglePageInline: function () {
          var b = this;
          (b.wrap = a("<div/>", { class: "cbp-popup-singlePageInline" }).on(
            "click.cbp",
            function (c) {
              if (!b.stopEvents) {
                var d = a(c.target).attr("data-action");
                d && b[d] && (b[d](), c.preventDefault());
              }
            }
          )),
            (b.content = a("<div/>", { class: "cbp-popup-content" }).appendTo(
              b.wrap
            )),
            (b.navigation = a("<div/>", {
              class: "cbp-popup-navigation",
            }).appendTo(b.wrap)),
            (b.closeButton = a("<div/>", {
              class: "cbp-popup-close",
              title: "Close (Esc arrow key)",
              "data-action": "close",
            }).appendTo(b.navigation));
        },
        destroy: function () {
          var b = this,
            d = a("body");
          a(c).off("keydown.cbp"),
            d.off("click.cbp", b.options.lightboxDelegate),
            d.off("click.cbp", b.options.singlePageDelegate),
            b.content.off("click.cbp", b.options.singlePageDelegate),
            b.cubeportfolio.$obj.off(
              "click.cbp",
              b.options.singlePageInlineDelegate
            ),
            b.cubeportfolio.$obj.off("click.cbp", b.options.lightboxDelegate),
            b.cubeportfolio.$obj.off("click.cbp", b.options.singlePageDelegate),
            b.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),
            b.cubeportfolio.$obj
              .find(".cbp-item")
              .removeClass("cbp-singlePageInline-active"),
            b.wrap.remove();
        },
        openLightbox: function (d, e) {
          var f,
            g,
            h = this,
            j = 0,
            k = [];
          if (!h.isOpen) {
            if (
              ((i = !0),
              (h.isOpen = !0),
              (h.stopEvents = !1),
              (h.dataArray = []),
              (h.current = null),
              (f = e.getAttribute("href")),
              null === f)
            )
              throw new Error(
                "HEI! Your clicked element doesn't have a href attribute."
              );
            a.each(d, function (b, c) {
              var d,
                e = c.getAttribute("href"),
                g = e,
                i = "isImage";
              if (a.inArray(e, k) === -1) {
                if (f === e) h.current = j;
                else if (!h.options.lightboxGallery) return;
                if (/youtu\.?be/i.test(e)) {
                  var l = e.lastIndexOf("v=") + 2;
                  1 === l && (l = e.lastIndexOf("/") + 1),
                    (d = e.substring(l)),
                    /autoplay=/i.test(d) || (d += "&autoplay=1"),
                    (d = d.replace(/\?|&/, "?")),
                    (g = "//www.youtube.com/embed/" + d),
                    (i = "isYoutube");
                } else
                  /vimeo\.com/i.test(e)
                    ? ((d = e.substring(e.lastIndexOf("/") + 1)),
                      /autoplay=/i.test(d) || (d += "&autoplay=1"),
                      (d = d.replace(/\?|&/, "?")),
                      (g = "//player.vimeo.com/video/" + d),
                      (i = "isVimeo"))
                    : /www\.ted\.com/i.test(e)
                    ? ((g =
                        "http://embed.ted.com/talks/" +
                        e.substring(e.lastIndexOf("/") + 1) +
                        ".html"),
                      (i = "isTed"))
                    : /soundcloud\.com/i.test(e)
                    ? ((g = e), (i = "isSoundCloud"))
                    : /(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(e)
                    ? ((g =
                        e.indexOf("|") !== -1 ? e.split("|") : e.split("%7C")),
                      (i = "isSelfHostedVideo"))
                    : /\.mp3$/i.test(e) && ((g = e), (i = "isSelfHostedAudio"));
                h.dataArray.push({
                  src: g,
                  title: c.getAttribute(h.options.lightboxTitleSrc),
                  type: i,
                }),
                  j++;
              }
              k.push(e);
            }),
              (h.counterTotal = h.dataArray.length),
              1 === h.counterTotal
                ? (h.nextButton.hide(),
                  h.prevButton.hide(),
                  (h.dataActionImg = ""))
                : (h.nextButton.show(),
                  h.prevButton.show(),
                  (h.dataActionImg = 'data-action="next"')),
              h.wrap.appendTo(c.body),
              (h.scrollTop = a(b).scrollTop()),
              (h.originalStyle = a("html").attr("style")),
              a("html").css({
                overflow: "hidden",
                marginRight: b.innerWidth - a(c).width(),
              }),
              h.wrap.addClass("cbp-popup-transitionend"),
              h.wrap.show(),
              (g = h.dataArray[h.current]),
              h[g.type](g);
          }
        },
        openSinglePage: function (d, e) {
          var g,
            h = this,
            i = 0,
            j = [];
          if (!h.isOpen) {
            if (
              (h.cubeportfolio.singlePageInline &&
                h.cubeportfolio.singlePageInline.isOpen &&
                h.cubeportfolio.singlePageInline.close(),
              (h.isOpen = !0),
              (h.stopEvents = !1),
              (h.dataArray = []),
              (h.current = null),
              (g = e.getAttribute("href")),
              null === g)
            )
              throw new Error(
                "HEI! Your clicked element doesn't have a href attribute."
              );
            if (
              (a.each(d, function (b, c) {
                var d = c.getAttribute("href");
                a.inArray(d, j) === -1 &&
                  (g === d && (h.current = i),
                  h.dataArray.push({ url: d, element: c }),
                  i++),
                  j.push(d);
              }),
              (h.counterTotal = h.dataArray.length),
              1 === h.counterTotal
                ? (h.nextButton.hide(), h.prevButton.hide())
                : (h.nextButton.show(), h.prevButton.show()),
              h.wrap.appendTo(c.body),
              (h.scrollTop = a(b).scrollTop()),
              h.contentWrap.scrollTop(0),
              h.wrap.show(),
              (h.finishOpen = 2),
              (h.navigationMobile = a()),
              h.wrap.one(f.private.transitionend, function () {
                a("html").css({
                  overflow: "hidden",
                  marginRight: b.innerWidth - a(c).width(),
                }),
                  h.wrap.addClass("cbp-popup-transitionend"),
                  h.options.singlePageStickyNavigation &&
                    (h.wrap.addClass("cbp-popup-singlePage-sticky"),
                    h.navigationWrap.width(h.contentWrap[0].clientWidth)),
                  h.finishOpen--,
                  h.finishOpen <= 0 && h.updateSinglePageIsOpen.call(h);
              }),
              ("ie8" !== f.private.browser && "ie9" !== f.private.browser) ||
                (a("html").css({
                  overflow: "hidden",
                  marginRight: b.innerWidth - a(c).width(),
                }),
                h.wrap.addClass("cbp-popup-transitionend"),
                h.options.singlePageStickyNavigation &&
                  (h.navigationWrap.width(h.contentWrap[0].clientWidth),
                  setTimeout(function () {
                    h.wrap.addClass("cbp-popup-singlePage-sticky");
                  }, 1e3)),
                h.finishOpen--),
              h.wrap.addClass("cbp-popup-loading"),
              h.wrap.offset(),
              h.wrap.addClass("cbp-popup-singlePage-open"),
              h.options.singlePageDeeplinking &&
                ((h.url = h.url.split("#cbp=")[0]),
                (location.href = h.url + "#cbp=" + h.dataArray[h.current].url)),
              a.isFunction(h.options.singlePageCallback) &&
                h.options.singlePageCallback.call(
                  h,
                  h.dataArray[h.current].url,
                  h.dataArray[h.current].element
                ),
              "ios" === f.private.browser)
            ) {
              var k = h.contentWrap[0];
              k.addEventListener("touchstart", function () {
                var a = k.scrollTop,
                  b = k.scrollHeight,
                  c = a + k.offsetHeight;
                0 === a ? (k.scrollTop = 1) : c === b && (k.scrollTop = a - 1);
              });
            }
          }
        },
        openSinglePageInline: function (c, d, e) {
          var f,
            g,
            h,
            i,
            j = this;
          if (
            ((e = e || !1),
            (j.fromOpen = e),
            (j.storeBlocks = c),
            (j.storeCurrentBlock = d),
            j.isOpen)
          )
            return (
              (g = j.cubeportfolio.blocksOn.index(a(d).closest(".cbp-item"))),
              void (j.dataArray[j.current].url !== d.getAttribute("href") ||
              j.current !== g
                ? j.cubeportfolio.singlePageInline.close("open", {
                    blocks: c,
                    currentBlock: d,
                    fromOpen: !0,
                  })
                : j.close())
            );
          if (
            ((j.isOpen = !0),
            (j.stopEvents = !1),
            (j.dataArray = []),
            (j.current = null),
            (f = d.getAttribute("href")),
            null === f)
          )
            throw new Error(
              "HEI! Your clicked element doesn't have a href attribute."
            );
          if (
            ((h = a(d).closest(".cbp-item")[0]),
            c.each(function (a, b) {
              h === b && (j.current = a);
            }),
            (j.dataArray[j.current] = { url: f, element: d }),
            (i = a(j.dataArray[j.current].element)
              .parents(".cbp-item")
              .addClass("cbp-singlePageInline-active")),
            (j.counterTotal = c.length),
            j.wrap.insertBefore(j.cubeportfolio.wrapper),
            (j.topDifference = 0),
            "top" === j.options.singlePageInlinePosition)
          )
            (j.blocksToMove = c), (j.top = 0);
          else if ("bottom" === j.options.singlePageInlinePosition)
            (j.blocksToMove = a()), (j.top = j.cubeportfolio.height);
          else if ("above" === j.options.singlePageInlinePosition) {
            var k = a(c[j.current]),
              l = k.data("cbp").top,
              m = l + k.height();
            (j.top = l),
              (j.blocksToMove = a()),
              c.each(function (b, c) {
                var d = a(c),
                  e = d.data("cbp").top,
                  f = e + d.height();
                f <= l ||
                  (e >= l && (j.blocksToMove = j.blocksToMove.add(c)),
                  e < l &&
                    f > l &&
                    ((j.top = f + j.options.gapHorizontal),
                    f - l > j.topDifference &&
                      (j.topDifference = f - l + j.options.gapHorizontal)));
              }),
              (j.top = Math.max(j.top - j.options.gapHorizontal, 0));
          } else {
            var k = a(c[j.current]),
              l = k.data("cbp").top,
              m = l + k.height();
            (j.top = m),
              (j.blocksToMove = a()),
              c.each(function (b, c) {
                var d = a(c),
                  e = d.height(),
                  f = d.data("cbp").top,
                  g = f + e;
                if (!(g <= m))
                  return f >= m - e / 2
                    ? void (j.blocksToMove = j.blocksToMove.add(c))
                    : void (
                        g > m &&
                        f < m &&
                        (g > j.top && (j.top = g),
                        g - m > j.topDifference && (j.topDifference = g - m))
                      );
              });
          }
          if (
            ((j.wrap[0].style.height = j.wrap.outerHeight(!0) + "px"),
            (j.deferredInline = a.Deferred()),
            j.options.singlePageInlineInFocus)
          ) {
            j.scrollTop = a(b).scrollTop();
            var n = j.cubeportfolio.$obj.offset().top + j.top - 100;
            j.scrollTop !== n
              ? a("html,body")
                  .animate({ scrollTop: n }, 350)
                  .promise()
                  .then(function () {
                    j.resizeSinglePageInline(), j.deferredInline.resolve();
                  })
              : (j.resizeSinglePageInline(), j.deferredInline.resolve());
          } else j.resizeSinglePageInline(), j.deferredInline.resolve();
          j.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"),
            j.wrap.css({ top: j.top }),
            j.options.singlePageInlineDeeplinking &&
              ((j.url = j.url.split("#cbpi=")[0]),
              (location.href = j.url + "#cbpi=" + j.dataArray[j.current].url)),
            a.isFunction(j.options.singlePageInlineCallback) &&
              j.options.singlePageInlineCallback.call(
                j,
                j.dataArray[j.current].url,
                j.dataArray[j.current].element
              );
        },
        resizeSinglePageInline: function () {
          var a = this;
          (a.height =
            0 === a.top || a.top === a.cubeportfolio.height
              ? a.wrap.outerHeight(!0)
              : a.wrap.outerHeight(!0) - a.options.gapHorizontal),
            (a.height += a.topDifference),
            a.storeBlocks.each(function (a, b) {
              f.private.modernBrowser
                ? (b.style[f.private.transform] = "")
                : (b.style.marginTop = "");
            }),
            a.blocksToMove.each(function (b, c) {
              f.private.modernBrowser
                ? (c.style[f.private.transform] =
                    "translate3d(0px, " + a.height + "px, 0)")
                : (c.style.marginTop = a.height + "px");
            }),
            (a.cubeportfolio.obj.style.height =
              a.cubeportfolio.height + a.height + "px");
        },
        revertResizeSinglePageInline: function () {
          var b = this;
          (b.deferredInline = a.Deferred()),
            b.storeBlocks.each(function (a, b) {
              f.private.modernBrowser
                ? (b.style[f.private.transform] = "")
                : (b.style.marginTop = "");
            }),
            (b.cubeportfolio.obj.style.height = b.cubeportfolio.height + "px");
        },
        appendScriptsToWrap: function (a) {
          var b = this,
            d = 0,
            e = function (f) {
              var g = c.createElement("script"),
                h = f.src;
              (g.type = "text/javascript"),
                g.readyState
                  ? (g.onreadystatechange = function () {
                      ("loaded" != g.readyState &&
                        "complete" != g.readyState) ||
                        ((g.onreadystatechange = null), d++, a[d] && e(a[d]));
                    })
                  : (g.onload = function () {
                      d++, a[d] && e(a[d]);
                    }),
                h ? (g.src = h) : (g.text = f.text),
                b.content[0].appendChild(g);
            };
          e(a[0]);
        },
        updateSinglePage: function (b, c, d) {
          var e,
            f = this;
          f.content
            .addClass("cbp-popup-content")
            .removeClass("cbp-popup-content-basic"),
            d === !1 &&
              f.content
                .removeClass("cbp-popup-content")
                .addClass("cbp-popup-content-basic"),
            f.counter &&
              ((e = a(
                f.getCounterMarkup(
                  f.options.singlePageCounter,
                  f.current + 1,
                  f.counterTotal
                )
              )),
              f.counter.text(e.text())),
            (f.fromAJAX = { html: b, scripts: c }),
            f.finishOpen--,
            f.finishOpen <= 0 && f.updateSinglePageIsOpen.call(f);
        },
        updateSinglePageIsOpen: function () {
          var a,
            b = this;
          b.wrap.addClass("cbp-popup-ready"),
            b.wrap.removeClass("cbp-popup-loading"),
            b.content.html(b.fromAJAX.html),
            b.fromAJAX.scripts && b.appendScriptsToWrap(b.fromAJAX.scripts),
            (b.fromAJAX = {}),
            b.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"),
            (a = b.content.find(".cbp-slider")),
            a.length
              ? (a.find(".cbp-slider-item").addClass("cbp-item"),
                (b.slider = a.cubeportfolio({
                  layoutMode: "slider",
                  mediaQueries: [{ width: 1, cols: 1 }],
                  gapHorizontal: 0,
                  gapVertical: 0,
                  caption: "",
                  coverRatio: "",
                })))
              : (b.slider = null),
            b.checkForSocialLinks(b.content),
            b.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp");
        },
        checkForSocialLinks: function (a) {
          var b = this;
          b.createFacebookShare(a.find(".cbp-social-fb")),
            b.createTwitterShare(a.find(".cbp-social-twitter")),
            b.createGooglePlusShare(a.find(".cbp-social-googleplus")),
            b.createPinterestShare(a.find(".cbp-social-pinterest"));
        },
        createFacebookShare: function (a) {
          a.length &&
            !a.attr("onclick") &&
            a.attr(
              "onclick",
              "window.open('http://www.facebook.com/sharer.php?u=" +
                encodeURIComponent(b.location.href) +
                "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;"
            );
        },
        createTwitterShare: function (a) {
          a.length &&
            !a.attr("onclick") &&
            a.attr(
              "onclick",
              "window.open('https://twitter.com/intent/tweet?source=" +
                encodeURIComponent(b.location.href) +
                "&text=" +
                encodeURIComponent(c.title) +
                "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;"
            );
        },
        createGooglePlusShare: function (a) {
          a.length &&
            !a.attr("onclick") &&
            a.attr(
              "onclick",
              "window.open('https://plus.google.com/share?url=" +
                encodeURIComponent(b.location.href) +
                "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;"
            );
        },
        createPinterestShare: function (a) {
          if (a.length && !a.attr("onclick")) {
            var c = "",
              d = this.content.find("img")[0];
            d && (c = d.src),
              a.attr(
                "onclick",
                "window.open('http://pinterest.com/pin/create/button/?url=" +
                  encodeURIComponent(b.location.href) +
                  "&media=" +
                  c +
                  "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;"
              );
          }
        },
        updateSinglePageInline: function (a, b) {
          var c = this;
          c.content.html(a),
            b && c.appendScriptsToWrap(b),
            c.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"),
            0 !== c.localOptions.delay
              ? setTimeout(function () {
                  c.singlePageInlineIsOpen.call(c);
                }, c.localOptions.delay)
              : c.singlePageInlineIsOpen.call(c);
        },
        singlePageInlineIsOpen: function () {
          function a() {
            b.wrap.addClass("cbp-popup-singlePageInline-ready"),
              (b.wrap[0].style.height = ""),
              b.resizeSinglePageInline(),
              b.cubeportfolio.$obj.trigger(
                "updateSinglePageInlineComplete.cbp"
              );
          }
          var b = this;
          b.cubeportfolio.loadImages(b.wrap, function () {
            var c = b.content.find(".cbp-slider");
            c.length
              ? (c.find(".cbp-slider-item").addClass("cbp-item"),
                c.one("initComplete.cbp", function () {
                  b.deferredInline.done(a);
                }),
                c.on("pluginResize.cbp", function () {
                  b.deferredInline.done(a);
                }),
                (b.slider = c.cubeportfolio({
                  layoutMode: "slider",
                  displayType: "default",
                  mediaQueries: [{ width: 1, cols: 1 }],
                  gapHorizontal: 0,
                  gapVertical: 0,
                  caption: "",
                  coverRatio: "",
                })))
              : ((b.slider = null), b.deferredInline.done(a)),
              b.checkForSocialLinks(b.content);
          });
        },
        isImage: function (b) {
          var c = this;
          new Image();
          c.tooggleLoading(!0),
            c.cubeportfolio.loadImages(
              a('<div><img src="' + b.src + '"></div>'),
              function () {
                c.updateImagesMarkup(
                  b.src,
                  b.title,
                  c.getCounterMarkup(
                    c.options.lightboxCounter,
                    c.current + 1,
                    c.counterTotal
                  )
                ),
                  c.tooggleLoading(!1);
              }
            );
        },
        isVimeo: function (a) {
          var b = this;
          b.updateVideoMarkup(
            a.src,
            a.title,
            b.getCounterMarkup(
              b.options.lightboxCounter,
              b.current + 1,
              b.counterTotal
            )
          );
        },
        isYoutube: function (a) {
          var b = this;
          b.updateVideoMarkup(
            a.src,
            a.title,
            b.getCounterMarkup(
              b.options.lightboxCounter,
              b.current + 1,
              b.counterTotal
            )
          );
        },
        isTed: function (a) {
          var b = this;
          b.updateVideoMarkup(
            a.src,
            a.title,
            b.getCounterMarkup(
              b.options.lightboxCounter,
              b.current + 1,
              b.counterTotal
            )
          );
        },
        isSoundCloud: function (a) {
          var b = this;
          b.updateVideoMarkup(
            a.src,
            a.title,
            b.getCounterMarkup(
              b.options.lightboxCounter,
              b.current + 1,
              b.counterTotal
            )
          );
        },
        isSelfHostedVideo: function (a) {
          var b = this;
          b.updateSelfHostedVideo(
            a.src,
            a.title,
            b.getCounterMarkup(
              b.options.lightboxCounter,
              b.current + 1,
              b.counterTotal
            )
          );
        },
        isSelfHostedAudio: function (a) {
          var b = this;
          b.updateSelfHostedAudio(
            a.src,
            a.title,
            b.getCounterMarkup(
              b.options.lightboxCounter,
              b.current + 1,
              b.counterTotal
            )
          );
        },
        getCounterMarkup: function (a, b, c) {
          if (!a.length) return "";
          var d = { current: b, total: c };
          return a.replace(/\{\{current}}|\{\{total}}/gi, function (a) {
            return d[a.slice(2, -2)];
          });
        },
        updateSelfHostedVideo: function (a, b, c) {
          var d,
            e = this;
          e.wrap.addClass("cbp-popup-lightbox-isIframe");
          var f =
            '<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';
          for (d = 0; d < a.length; d++)
            /(\.mp4)/i.test(a[d])
              ? (f += '<source src="' + a[d] + '" type="video/mp4">')
              : /(\.ogg)|(\.ogv)/i.test(a[d])
              ? (f += '<source src="' + a[d] + '" type="video/ogg">')
              : /(\.webm)/i.test(a[d]) &&
                (f += '<source src="' + a[d] + '" type="video/webm">');
          (f +=
            'Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">' +
            (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") +
            c +
            "</div></div>"),
            e.content.html(f),
            e.wrap.addClass("cbp-popup-ready"),
            e.preloadNearbyImages();
        },
        updateSelfHostedAudio: function (a, b, c) {
          var d = this;
          d.wrap.addClass("cbp-popup-lightbox-isIframe");
          var e =
            '<div class="cbp-popup-lightbox-iframe"><div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%"><source src="' +
            a +
            '" type="audio/mpeg">Your browser does not support the audio tag.</audio></div><div class="cbp-popup-lightbox-bottom">' +
            (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") +
            c +
            "</div></div>";
          d.content.html(e),
            d.wrap.addClass("cbp-popup-ready"),
            d.preloadNearbyImages();
        },
        updateVideoMarkup: function (a, b, c) {
          var d = this;
          d.wrap.addClass("cbp-popup-lightbox-isIframe");
          var e =
            '<div class="cbp-popup-lightbox-iframe"><iframe src="' +
            a +
            '" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">' +
            (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") +
            c +
            "</div></div>";
          d.content.html(e),
            d.wrap.addClass("cbp-popup-ready"),
            d.preloadNearbyImages();
        },
        updateImagesMarkup: function (a, b, c) {
          var d = this;
          d.wrap.removeClass("cbp-popup-lightbox-isIframe");
          var e =
            '<div class="cbp-popup-lightbox-figure"><img src="' +
            a +
            '" class="cbp-popup-lightbox-img" ' +
            d.dataActionImg +
            ' /><div class="cbp-popup-lightbox-bottom">' +
            (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") +
            c +
            "</div></div>";
          d.content.html(e),
            d.wrap.addClass("cbp-popup-ready"),
            d.resizeImage(),
            d.preloadNearbyImages();
        },
        next: function () {
          var a = this;
          a[a.type + "JumpTo"](1);
        },
        prev: function () {
          var a = this;
          a[a.type + "JumpTo"](-1);
        },
        lightboxJumpTo: function (a) {
          var b,
            c = this;
          (c.current = c.getIndex(c.current + a)),
            (b = c.dataArray[c.current]),
            c[b.type](b);
        },
        singlePageJumpTo: function (b) {
          var c = this;
          (c.current = c.getIndex(c.current + b)),
            a.isFunction(c.options.singlePageCallback) &&
              (c.resetWrap(),
              c.contentWrap.scrollTop(0),
              c.wrap.addClass("cbp-popup-loading"),
              c.slider &&
                f.private.resize.destroyEvent(
                  a.data(c.slider[0], "cubeportfolio")
                ),
              c.options.singlePageCallback.call(
                c,
                c.dataArray[c.current].url,
                c.dataArray[c.current].element
              ),
              c.options.singlePageDeeplinking &&
                (location.href = c.url + "#cbp=" + c.dataArray[c.current].url));
        },
        resetWrap: function () {
          var a = this;
          "singlePage" === a.type &&
            a.options.singlePageDeeplinking &&
            (location.href = a.url + "#"),
            "singlePageInline" === a.type &&
              a.options.singlePageInlineDeeplinking &&
              (location.href = a.url + "#");
        },
        getIndex: function (a) {
          var b = this;
          return (a %= b.counterTotal), a < 0 && (a = b.counterTotal + a), a;
        },
        close: function (c, d) {
          function e() {
            h.slider &&
              f.private.resize.destroyEvent(
                a.data(h.slider[0], "cubeportfolio")
              ),
              h.content.html(""),
              h.wrap.detach(),
              h.cubeportfolio.$obj.removeClass(
                "cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"
              ),
              "promise" === c &&
                a.isFunction(d.callback) &&
                d.callback.call(h.cubeportfolio);
          }
          function g() {
            var d = a(b).scrollTop();
            h.resetWrap(),
              a(b).scrollTop(d),
              h.options.singlePageInlineInFocus && "promise" !== c
                ? a("html,body")
                    .animate({ scrollTop: h.scrollTop }, 350)
                    .promise()
                    .then(function () {
                      e();
                    })
                : e();
          }
          var h = this;
          (h.isOpen = !1),
            "singlePageInline" === h.type
              ? "open" === c
                ? (h.wrap.removeClass("cbp-popup-singlePageInline-ready"),
                  a(h.dataArray[h.current].element)
                    .closest(".cbp-item")
                    .removeClass("cbp-singlePageInline-active"),
                  h.openSinglePageInline(d.blocks, d.currentBlock, d.fromOpen))
                : ((h.height = 0),
                  h.revertResizeSinglePageInline(),
                  h.wrap.removeClass("cbp-popup-singlePageInline-ready"),
                  h.cubeportfolio.$obj.addClass(
                    "cbp-popup-singlePageInline-close"
                  ),
                  h.cubeportfolio.$obj
                    .find(".cbp-item")
                    .removeClass("cbp-singlePageInline-active"),
                  f.private.modernBrowser
                    ? h.wrap.one(f.private.transitionend, function () {
                        g();
                      })
                    : g())
              : "singlePage" === h.type
              ? (h.resetWrap(),
                a(b).scrollTop(h.scrollTop),
                (h.stopScroll = !0),
                h.wrap.removeClass(
                  "cbp-popup-ready cbp-popup-transitionend cbp-popup-singlePage-open cbp-popup-singlePage-sticky"
                ),
                a("html").css({ overflow: "", marginRight: "", position: "" }),
                ("ie8" !== f.private.browser && "ie9" !== f.private.browser) ||
                  (h.slider &&
                    f.private.resize.destroyEvent(
                      a.data(h.slider[0], "cubeportfolio")
                    ),
                  h.content.html(""),
                  h.wrap.detach()),
                h.wrap.one(f.private.transitionend, function () {
                  h.slider &&
                    f.private.resize.destroyEvent(
                      a.data(h.slider[0], "cubeportfolio")
                    ),
                    h.content.html(""),
                    h.wrap.detach();
                }))
              : ((i = !1),
                h.originalStyle
                  ? a("html").attr("style", h.originalStyle)
                  : a("html").css({ overflow: "", marginRight: "" }),
                a(b).scrollTop(h.scrollTop),
                h.slider &&
                  f.private.resize.destroyEvent(
                    a.data(h.slider[0], "cubeportfolio")
                  ),
                h.content.html(""),
                h.wrap.detach());
        },
        tooggleLoading: function (a) {
          var b = this;
          (b.stopEvents = a),
            b.wrap[a ? "addClass" : "removeClass"]("cbp-popup-loading");
        },
        resizeImage: function () {
          if (this.isOpen) {
            var c = this.content.find("img"),
              d = c.parent(),
              e =
                a(b).height() -
                (d.outerHeight(!0) - d.height()) -
                this.content.find(".cbp-popup-lightbox-bottom").outerHeight(!0);
            c.css("max-height", e + "px");
          }
        },
        preloadNearbyImages: function () {
          for (
            var a = this,
              b = [
                a.getIndex(a.current + 1),
                a.getIndex(a.current + 2),
                a.getIndex(a.current + 3),
                a.getIndex(a.current - 1),
                a.getIndex(a.current - 2),
                a.getIndex(a.current - 3),
              ],
              c = b.length - 1;
            c >= 0;
            c--
          )
            "isImage" === a.dataArray[b[c]].type &&
              a.cubeportfolio.checkSrc(a.dataArray[b[c]]);
        },
      },
      i = !1,
      j = !1,
      k = !1;
    (e.prototype.run = function () {
      var b = this,
        d = b.parent,
        e = a(c.body);
      (d.lightbox = null),
        d.options.lightboxDelegate &&
          !j &&
          ((j = !0),
          (d.lightbox = Object.create(h)),
          d.lightbox.init(d, "lightbox"),
          e.on("click.cbp", d.options.lightboxDelegate, function (c) {
            c.preventDefault();
            var e = a(this),
              f = e.attr("data-cbp-lightbox"),
              g = b.detectScope(e),
              h = g.data("cubeportfolio"),
              i = [];
            h
              ? h.blocksOn.each(function (b, c) {
                  var e = a(c);
                  e.not(".cbp-item-off") &&
                    e.find(d.options.lightboxDelegate).each(function (b, c) {
                      f
                        ? a(c).attr("data-cbp-lightbox") === f && i.push(c)
                        : i.push(c);
                    });
                })
              : (i = f
                  ? g.find(
                      d.options.lightboxDelegate +
                        "[data-cbp-lightbox=" +
                        f +
                        "]"
                    )
                  : g.find(d.options.lightboxDelegate)),
              d.lightbox.openLightbox(i, e[0]);
          })),
        (d.singlePage = null),
        d.options.singlePageDelegate &&
          !k &&
          ((k = !0),
          (d.singlePage = Object.create(h)),
          d.singlePage.init(d, "singlePage"),
          e.on("click.cbp", d.options.singlePageDelegate, function (c) {
            c.preventDefault();
            var e = a(this),
              f = e.attr("data-cbp-singlePage"),
              g = b.detectScope(e),
              h = g.data("cubeportfolio"),
              i = [];
            h
              ? h.blocksOn.each(function (b, c) {
                  var e = a(c);
                  e.not(".cbp-item-off") &&
                    e.find(d.options.singlePageDelegate).each(function (b, c) {
                      f
                        ? a(c).attr("data-cbp-singlePage") === f && i.push(c)
                        : i.push(c);
                    });
                })
              : (i = f
                  ? g.find(
                      d.options.singlePageDelegate +
                        "[data-cbp-singlePage=" +
                        f +
                        "]"
                    )
                  : g.find(d.options.singlePageDelegate)),
              d.singlePage.openSinglePage(i, e[0]);
          })),
        (d.singlePageInline = null),
        d.options.singlePageInlineDelegate &&
          ((d.singlePageInline = Object.create(h)),
          d.singlePageInline.init(d, "singlePageInline"),
          d.$obj.on(
            "click.cbp",
            d.options.singlePageInlineDelegate,
            function (b) {
              b.preventDefault();
              var c = a.data(this, "cbp-locked"),
                e = a.data(this, "cbp-locked", +new Date());
              (!c || e - c > 300) &&
                d.singlePageInline.openSinglePageInline(d.blocksOn, this);
            }
          ));
    }),
      (e.prototype.detectScope = function (b) {
        var d, e, f;
        return (
          (d = b.closest(".cbp-popup-singlePageInline")),
          d.length
            ? ((f = b.closest(".cbp", d[0])), f.length ? f : d)
            : ((e = b.closest(".cbp-popup-singlePage")),
              e.length
                ? ((f = b.closest(".cbp", e[0])), f.length ? f : e)
                : ((f = b.closest(".cbp")), f.length ? f : a(c.body)))
        );
      }),
      (e.prototype.destroy = function () {
        var b = this.parent;
        a(c.body).off("click.cbp"),
          (j = !1),
          (k = !1),
          b.lightbox && b.lightbox.destroy(),
          b.singlePage && b.singlePage.destroy(),
          b.singlePageInline && b.singlePageInline.destroy();
      }),
      (f.plugins.popUp = function (a) {
        return new e(a);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = this;
      (c.parent = b),
        (c.searchInput = a(b.options.search)),
        c.searchInput.each(function (b, c) {
          var d = c.getAttribute("data-search");
          d || (d = "*"), a.data(c, "searchData", { value: c.value, el: d });
        });
      var d = null;
      c.searchInput.on("keyup.cbp paste.cbp", function (b) {
        b.preventDefault();
        var e = a(this);
        clearTimeout(d),
          (d = setTimeout(function () {
            c.runEvent.call(c, e);
          }, 350));
      }),
        (c.searchNothing = c.searchInput
          .siblings(".cbp-search-nothing")
          .detach()),
        (c.searchNothingHeight = null),
        (c.searchNothingHTML = c.searchNothing.html()),
        c.searchInput
          .siblings(".cbp-search-icon")
          .on("click.cbp", function (b) {
            b.preventDefault(), c.runEvent.call(c, a(this).prev().val(""));
          });
    }
    var f = a.fn.cubeportfolio.constructor;
    (e.prototype.runEvent = function (b) {
      var c = this,
        d = b.val(),
        e = b.data("searchData"),
        f = new RegExp(d, "i");
      e.value === d ||
        c.parent.isAnimating ||
        ((e.value = d),
        d.length > 0 ? b.attr("value", d) : b.removeAttr("value"),
        c.parent.$obj.cubeportfolio(
          "filter",
          function (b) {
            var g = b.filter(function (b, c) {
              var d = a(c).find(e.el).text();
              if (d.search(f) > -1) return !0;
            });
            if (0 === g.length && c.searchNothing.length) {
              var h = c.searchNothingHTML.replace("{{query}}", d);
              c.searchNothing.html(h),
                c.searchNothing.appendTo(c.parent.$obj),
                null === c.searchNothingHeight &&
                  (c.searchNothingHeight = c.searchNothing.outerHeight(!0)),
                c.parent.registerEvent(
                  "resizeMainContainer",
                  function () {
                    (c.parent.height = c.parent.height + c.searchNothingHeight),
                      (c.parent.obj.style.height = c.parent.height + "px");
                  },
                  !0
                );
            } else c.searchNothing.detach();
            return c.parent.triggerEvent("resetFiltersVisual"), g;
          },
          function () {
            b.trigger("keyup.cbp");
          }
        ));
    }),
      (e.prototype.destroy = function () {
        var b = this;
        b.searchInput.off(".cbp"),
          b.searchInput.next(".cbp-search-icon").off(".cbp"),
          b.searchInput.each(function (b, c) {
            a.removeData(c);
          });
      }),
      (f.plugins.search = function (a) {
        return "" === a.options.search ? null : new e(a);
      });
  })(jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    function e(b) {
      var c = this;
      (c.parent = b),
        (c.options = a.extend({}, f, c.parent.options.plugins.slider));
      var d = a(c.options.pagination);
      d.length > 0 &&
        ((c.parent.customPagination = d),
        (c.parent.customPaginationItems = d.children()),
        (c.parent.customPaginationClass = c.options.paginationClass),
        c.parent.customPaginationItems.on("click.cbp", function (b) {
          b.preventDefault(),
            b.stopImmediatePropagation(),
            b.stopPropagation(),
            c.parent.sliderStopEvents || c.parent.jumpToSlider(a(this));
        })),
        c.parent.registerEvent(
          "gridAdjust",
          function () {
            c.sliderMarkup.call(c.parent),
              c.parent.registerEvent("gridAdjust", function () {
                c.updateSlider.call(c.parent);
              });
          },
          !0
        );
    }
    var f = { pagination: "", paginationClass: "cbp-pagination-active" },
      g = a.fn.cubeportfolio.constructor;
    (e.prototype.sliderMarkup = function () {
      var b = this;
      (b.sliderStopEvents = !1),
        (b.sliderActive = 0),
        b.$obj.one("initComplete.cbp", function () {
          b.$obj.addClass("cbp-mode-slider");
        }),
        (b.nav = a("<div/>", { class: "cbp-nav" })),
        b.nav.on("click.cbp", "[data-slider-action]", function (c) {
          if (
            (c.preventDefault(),
            c.stopImmediatePropagation(),
            c.stopPropagation(),
            !b.sliderStopEvents)
          ) {
            var d = a(this),
              e = d.attr("data-slider-action");
            b[e + "Slider"] && b[e + "Slider"](d);
          }
        }),
        b.options.showNavigation &&
          ((b.controls = a("<div/>", { class: "cbp-nav-controls" })),
          (b.navPrev = a("<div/>", {
            class: "cbp-nav-prev",
            "data-slider-action": "prev",
          }).appendTo(b.controls)),
          (b.navNext = a("<div/>", {
            class: "cbp-nav-next",
            "data-slider-action": "next",
          }).appendTo(b.controls)),
          b.controls.appendTo(b.nav)),
        b.options.showPagination &&
          (b.navPagination = a("<div/>", {
            class: "cbp-nav-pagination",
          }).appendTo(b.nav)),
        (b.controls || b.navPagination) && b.nav.appendTo(b.$obj),
        b.updateSliderPagination(),
        b.options.auto &&
          (b.options.autoPauseOnHover &&
            ((b.mouseIsEntered = !1),
            b.$obj
              .on("mouseenter.cbp", function (a) {
                (b.mouseIsEntered = !0), b.stopSliderAuto();
              })
              .on("mouseleave.cbp", function (a) {
                (b.mouseIsEntered = !1), b.startSliderAuto();
              })),
          b.startSliderAuto()),
        b.options.drag && g.private.modernBrowser && b.dragSlider();
    }),
      (e.prototype.updateSlider = function () {
        var a = this;
        a.updateSliderPosition(), a.updateSliderPagination();
      }),
      (e.prototype.destroy = function () {
        var a = this;
        a.parent.customPaginationItems &&
          a.parent.customPaginationItems.off(".cbp"),
          (a.parent.controls || a.parent.navPagination) &&
            (a.parent.nav.off(".cbp"), a.parent.nav.remove());
      }),
      (g.plugins.slider = function (a) {
        return "slider" !== a.options.layoutMode ? null : new e(a);
      });
  })(jQuery, window, document);
/**
 * jQuery || Zepto Parallax Plugin
 * @author Matthew Wagerfield - @wagerfield
 * @description Creates a parallax effect between an array of layers,
 *              driving the motion from the gyroscope output of a smartdevice.
 *              If no gyroscope is available, the cursor position is used.
 */
!(function (t, i, e, s) {
  "use strict";
  function o(i, e) {
    (this.element = i),
      (this.$context = t(i).data("api", this)),
      (this.$layers = this.$context.find(".layer"));
    var s = {
      calibrateX: this.$context.data("calibrate-x") || null,
      calibrateY: this.$context.data("calibrate-y") || null,
      invertX: this.$context.data("invert-x") || null,
      invertY: this.$context.data("invert-y") || null,
      limitX: parseFloat(this.$context.data("limit-x")) || null,
      limitY: parseFloat(this.$context.data("limit-y")) || null,
      scalarX: parseFloat(this.$context.data("scalar-x")) || null,
      scalarY: parseFloat(this.$context.data("scalar-y")) || null,
      frictionX: parseFloat(this.$context.data("friction-x")) || null,
      frictionY: parseFloat(this.$context.data("friction-y")) || null,
      originX: parseFloat(this.$context.data("origin-x")) || null,
      originY: parseFloat(this.$context.data("origin-y")) || null,
    };
    for (var o in s) null === s[o] && delete s[o];
    t.extend(this, r, e, s),
      (this.calibrationTimer = null),
      (this.calibrationFlag = !0),
      (this.enabled = !1),
      (this.depths = []),
      (this.raf = null),
      (this.bounds = null),
      (this.ex = 0),
      (this.ey = 0),
      (this.ew = 0),
      (this.eh = 0),
      (this.ecx = 0),
      (this.ecy = 0),
      (this.erx = 0),
      (this.ery = 0),
      (this.cx = 0),
      (this.cy = 0),
      (this.ix = 0),
      (this.iy = 0),
      (this.mx = 0),
      (this.my = 0),
      (this.vx = 0),
      (this.vy = 0),
      (this.onMouseMove = this.onMouseMove.bind(this)),
      (this.onDeviceOrientation = this.onDeviceOrientation.bind(this)),
      (this.onOrientationTimer = this.onOrientationTimer.bind(this)),
      (this.onCalibrationTimer = this.onCalibrationTimer.bind(this)),
      (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
      (this.onWindowResize = this.onWindowResize.bind(this)),
      this.initialise();
  }
  var n = "parallax",
    a = 30,
    r = {
      relativeInput: !1,
      clipRelativeInput: !1,
      calibrationThreshold: 100,
      calibrationDelay: 500,
      supportDelay: 500,
      calibrateX: !1,
      calibrateY: !0,
      invertX: !0,
      invertY: !0,
      limitX: !1,
      limitY: !1,
      scalarX: 10,
      scalarY: 10,
      frictionX: 0.1,
      frictionY: 0.1,
      originX: 0.5,
      originY: 0.5,
    };
  (o.prototype.transformSupport = function (t) {
    for (
      var o = e.createElement("div"),
        n = !1,
        a = null,
        r = !1,
        h = null,
        l = null,
        p = 0,
        c = this.vendors.length;
      c > p;
      p++
    )
      if (
        (null !== this.vendors[p]
          ? ((h = this.vendors[p][0] + "transform"),
            (l = this.vendors[p][1] + "Transform"))
          : ((h = "transform"), (l = "transform")),
        o.style[l] !== s)
      ) {
        n = !0;
        break;
      }
    switch (t) {
      case "2D":
        r = n;
        break;
      case "3D":
        if (n) {
          var m = e.body || e.createElement("body"),
            u = e.documentElement,
            y = u.style.overflow;
          e.body ||
            ((u.style.overflow = "hidden"),
            u.appendChild(m),
            (m.style.overflow = "hidden"),
            (m.style.background = "")),
            m.appendChild(o),
            (o.style[l] = "translate3d(1px,1px,1px)"),
            (a = i.getComputedStyle(o).getPropertyValue(h)),
            (r = a !== s && a.length > 0 && "none" !== a),
            (u.style.overflow = y),
            m.removeChild(o);
        }
    }
    return r;
  }),
    (o.prototype.ww = null),
    (o.prototype.wh = null),
    (o.prototype.wcx = null),
    (o.prototype.wcy = null),
    (o.prototype.wrx = null),
    (o.prototype.wry = null),
    (o.prototype.portrait = null),
    (o.prototype.desktop = !navigator.userAgent.match(
      /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
    )),
    (o.prototype.vendors = [
      null,
      ["-webkit-", "webkit"],
      ["-moz-", "Moz"],
      ["-o-", "O"],
      ["-ms-", "ms"],
    ]),
    (o.prototype.motionSupport = !!i.DeviceMotionEvent),
    (o.prototype.orientationSupport = !!i.DeviceOrientationEvent),
    (o.prototype.orientationStatus = 0),
    (o.prototype.transform2DSupport = o.prototype.transformSupport("2D")),
    (o.prototype.transform3DSupport = o.prototype.transformSupport("3D")),
    (o.prototype.propertyCache = {}),
    (o.prototype.initialise = function () {
      "static" === this.$context.css("position") &&
        this.$context.css({ position: "relative" }),
        this.accelerate(this.$context),
        this.updateLayers(),
        this.updateDimensions(),
        this.enable(),
        this.queueCalibration(this.calibrationDelay);
    }),
    (o.prototype.updateLayers = function () {
      (this.$layers = this.$context.find(".layer")),
        (this.depths = []),
        this.$layers.css({
          position: "absolute",
          display: "block",
          left: 0,
          top: 0,
        }),
        this.$layers.first().css({ position: "relative" }),
        this.accelerate(this.$layers),
        this.$layers.each(
          t.proxy(function (i, e) {
            this.depths.push(t(e).data("depth") || 0);
          }, this)
        );
    }),
    (o.prototype.updateDimensions = function () {
      (this.ww = i.innerWidth),
        (this.wh = i.innerHeight),
        (this.wcx = this.ww * this.originX),
        (this.wcy = this.wh * this.originY),
        (this.wrx = Math.max(this.wcx, this.ww - this.wcx)),
        (this.wry = Math.max(this.wcy, this.wh - this.wcy));
    }),
    (o.prototype.updateBounds = function () {
      (this.bounds = this.element.getBoundingClientRect()),
        (this.ex = this.bounds.left),
        (this.ey = this.bounds.top),
        (this.ew = this.bounds.width),
        (this.eh = this.bounds.height),
        (this.ecx = this.ew * this.originX),
        (this.ecy = this.eh * this.originY),
        (this.erx = Math.max(this.ecx, this.ew - this.ecx)),
        (this.ery = Math.max(this.ecy, this.eh - this.ecy));
    }),
    (o.prototype.queueCalibration = function (t) {
      clearTimeout(this.calibrationTimer),
        (this.calibrationTimer = setTimeout(this.onCalibrationTimer, t));
    }),
    (o.prototype.enable = function () {
      this.enabled ||
        ((this.enabled = !0),
        this.orientationSupport
          ? ((this.portrait = null),
            i.addEventListener("deviceorientation", this.onDeviceOrientation),
            setTimeout(this.onOrientationTimer, this.supportDelay))
          : ((this.cx = 0),
            (this.cy = 0),
            (this.portrait = !1),
            i.addEventListener("mousemove", this.onMouseMove)),
        i.addEventListener("resize", this.onWindowResize),
        (this.raf = requestAnimationFrame(this.onAnimationFrame)));
    }),
    (o.prototype.disable = function () {
      this.enabled &&
        ((this.enabled = !1),
        this.orientationSupport
          ? i.removeEventListener("deviceorientation", this.onDeviceOrientation)
          : i.removeEventListener("mousemove", this.onMouseMove),
        i.removeEventListener("resize", this.onWindowResize),
        cancelAnimationFrame(this.raf));
    }),
    (o.prototype.calibrate = function (t, i) {
      (this.calibrateX = t === s ? this.calibrateX : t),
        (this.calibrateY = i === s ? this.calibrateY : i);
    }),
    (o.prototype.invert = function (t, i) {
      (this.invertX = t === s ? this.invertX : t),
        (this.invertY = i === s ? this.invertY : i);
    }),
    (o.prototype.friction = function (t, i) {
      (this.frictionX = t === s ? this.frictionX : t),
        (this.frictionY = i === s ? this.frictionY : i);
    }),
    (o.prototype.scalar = function (t, i) {
      (this.scalarX = t === s ? this.scalarX : t),
        (this.scalarY = i === s ? this.scalarY : i);
    }),
    (o.prototype.limit = function (t, i) {
      (this.limitX = t === s ? this.limitX : t),
        (this.limitY = i === s ? this.limitY : i);
    }),
    (o.prototype.origin = function (t, i) {
      (this.originX = t === s ? this.originX : t),
        (this.originY = i === s ? this.originY : i);
    }),
    (o.prototype.clamp = function (t, i, e) {
      return (t = Math.max(t, i)), (t = Math.min(t, e));
    }),
    (o.prototype.css = function (i, e, o) {
      var n = this.propertyCache[e];
      if (!n)
        for (var a = 0, r = this.vendors.length; r > a; a++)
          if (
            ((n =
              null !== this.vendors[a]
                ? t.camelCase(this.vendors[a][1] + "-" + e)
                : e),
            i.style[n] !== s)
          ) {
            this.propertyCache[e] = n;
            break;
          }
      i.style[n] = o;
    }),
    (o.prototype.accelerate = function (t) {
      for (var i = 0, e = t.length; e > i; i++) {
        var s = t[i];
        this.css(s, "transform", "translate3d(0,0,0)"),
          this.css(s, "transform-style", "preserve-3d"),
          this.css(s, "backface-visibility", "hidden");
      }
    }),
    (o.prototype.setPosition = function (t, i, e) {
      (i += "px"),
        (e += "px"),
        this.transform3DSupport
          ? this.css(t, "transform", "translate3d(" + i + "," + e + ",0)")
          : this.transform2DSupport
          ? this.css(t, "transform", "translate(" + i + "," + e + ")")
          : ((t.style.left = i), (t.style.top = e));
    }),
    (o.prototype.onOrientationTimer = function (t) {
      this.orientationSupport &&
        0 === this.orientationStatus &&
        (this.disable(), (this.orientationSupport = !1), this.enable());
    }),
    (o.prototype.onCalibrationTimer = function (t) {
      this.calibrationFlag = !0;
    }),
    (o.prototype.onWindowResize = function (t) {
      this.updateDimensions();
    }),
    (o.prototype.onAnimationFrame = function () {
      this.updateBounds();
      var t = this.ix - this.cx,
        i = this.iy - this.cy;
      (Math.abs(t) > this.calibrationThreshold ||
        Math.abs(i) > this.calibrationThreshold) &&
        this.queueCalibration(0),
        this.portrait
          ? ((this.mx = this.calibrateX ? i : this.iy),
            (this.my = this.calibrateY ? t : this.ix))
          : ((this.mx = this.calibrateX ? t : this.ix),
            (this.my = this.calibrateY ? i : this.iy)),
        (this.mx *= this.ew * (this.scalarX / 100)),
        (this.my *= this.eh * (this.scalarY / 100)),
        isNaN(parseFloat(this.limitX)) ||
          (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
        isNaN(parseFloat(this.limitY)) ||
          (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
        (this.vx += (this.mx - this.vx) * this.frictionX),
        (this.vy += (this.my - this.vy) * this.frictionY);
      for (var e = 0, s = this.$layers.length; s > e; e++) {
        var o = this.depths[e],
          n = this.$layers[e],
          a = this.vx * o * (this.invertX ? -1 : 1),
          r = this.vy * o * (this.invertY ? -1 : 1);
        this.setPosition(n, a, r);
      }
      this.raf = requestAnimationFrame(this.onAnimationFrame);
    }),
    (o.prototype.onDeviceOrientation = function (t) {
      if (!this.desktop && null !== t.beta && null !== t.gamma) {
        this.orientationStatus = 1;
        var e = (t.beta || 0) / a,
          s = (t.gamma || 0) / a,
          o = i.innerHeight > i.innerWidth;
        this.portrait !== o &&
          ((this.portrait = o), (this.calibrationFlag = !0)),
          this.calibrationFlag &&
            ((this.calibrationFlag = !1), (this.cx = e), (this.cy = s)),
          (this.ix = e),
          (this.iy = s);
      }
    }),
    (o.prototype.onMouseMove = function (t) {
      var i = t.clientX,
        e = t.clientY;
      !this.orientationSupport && this.relativeInput
        ? (this.clipRelativeInput &&
            ((i = Math.max(i, this.ex)),
            (i = Math.min(i, this.ex + this.ew)),
            (e = Math.max(e, this.ey)),
            (e = Math.min(e, this.ey + this.eh))),
          (this.ix = (i - this.ex - this.ecx) / this.erx),
          (this.iy = (e - this.ey - this.ecy) / this.ery))
        : ((this.ix = (i - this.wcx) / this.wrx),
          (this.iy = (e - this.wcy) / this.wry));
    });
  var h = {
    enable: o.prototype.enable,
    disable: o.prototype.disable,
    updateLayers: o.prototype.updateLayers,
    calibrate: o.prototype.calibrate,
    friction: o.prototype.friction,
    invert: o.prototype.invert,
    scalar: o.prototype.scalar,
    limit: o.prototype.limit,
    origin: o.prototype.origin,
  };
  t.fn[n] = function (i) {
    var e = arguments;
    return this.each(function () {
      var s = t(this),
        a = s.data(n);
      a || ((a = new o(this, i)), s.data(n, a)),
        h[i] && a[i].apply(a, Array.prototype.slice.call(e, 1));
    });
  };
})(window.jQuery || window.Zepto, window, document),
  (function () {
    for (
      var t = 0, i = ["ms", "moz", "webkit", "o"], e = 0;
      e < i.length && !window.requestAnimationFrame;
      ++e
    )
      (window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[i[e] + "CancelAnimationFrame"] ||
          window[i[e] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (i, e) {
        var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          n = window.setTimeout(function () {
            i(s + o);
          }, o);
        return (t = s + o), n;
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })();
/*
 * Author: Digital Zoom Studio
 * Website: http://digitalzoomstudio.net/
 * Portfolio: http://codecanyon.net/user/ZoomIt/portfolio
 *
 * Version: 2.63
 */
window.dzsprx_self_options = {};
(function (c) {
  c.fn.dzsparallaxer = function (a) {
    if (
      "undefined" == typeof a &&
      "undefined" != typeof c(this).attr("data-options") &&
      "" != c(this).attr("data-options")
    ) {
      var l = c(this).attr("data-options");
      eval("window.dzsprx_self_options = " + l);
      a = c.extend({}, window.dzsprx_self_options);
      window.dzsprx_self_options = c.extend({}, {});
    }
    a = c.extend(
      {
        settings_mode: "scroll",
        mode_scroll: "normal",
        easing: "easeIn",
        animation_duration: "20",
        direction: "normal",
        js_breakout: "off",
        breakout_fix: "off",
        is_fullscreen: "off",
        settings_movexaftermouse: "off",
        init_delay: "0",
        init_functional_delay: "0",
        settings_substract_from_th: 0,
        settings_detect_out_of_screen: !0,
        init_functional_remove_delay_on_scroll: "off",
        settings_makeFunctional: !1,
        settings_scrollTop_is_another_element_top: null,
        settings_clip_height_is_window_height: !1,
        settings_listen_to_object_scroll_top: null,
        settings_mode_oneelement_max_offset: "20",
        simple_parallaxer_convert_simple_img_to_bg_if_possible: "on",
      },
      a
    );
    Math.easeIn = function (a, c, l, x) {
      return -l * (a /= x) * (a - 2) + c;
    };
    Math.easeOutQuad = function (a, c, l, x) {
      a /= x;
      return -l * a * (a - 2) + c;
    };
    Math.easeInOutSine = function (a, c, l, x) {
      return (-l / 2) * (Math.cos((Math.PI * a) / x) - 1) + c;
    };
    a.settings_mode_oneelement_max_offset = parseInt(
      a.settings_mode_oneelement_max_offset,
      10
    );
    var x = parseInt(a.settings_mode_oneelement_max_offset, 10);
    this.each(function () {
      function l() {
        if (1 == a.settings_makeFunctional) {
          var d = !1,
            f = document.URL,
            m = f.indexOf("://") + 3,
            e = f.indexOf("/", m),
            f = f.substring(m, e);
          -1 < f.indexOf("l") &&
            -1 < f.indexOf("c") &&
            -1 < f.indexOf("o") &&
            -1 < f.indexOf("l") &&
            -1 < f.indexOf("a") &&
            -1 < f.indexOf("h") &&
            (d = !0);
          -1 < f.indexOf("d") &&
            -1 < f.indexOf("i") &&
            -1 < f.indexOf("g") &&
            -1 < f.indexOf("d") &&
            -1 < f.indexOf("z") &&
            -1 < f.indexOf("s") &&
            (d = !0);
          -1 < f.indexOf("o") &&
            -1 < f.indexOf("z") &&
            -1 < f.indexOf("e") &&
            -1 < f.indexOf("h") &&
            -1 < f.indexOf("t") &&
            (d = !0);
          -1 < f.indexOf("e") &&
            -1 < f.indexOf("v") &&
            -1 < f.indexOf("n") &&
            -1 < f.indexOf("a") &&
            -1 < f.indexOf("t") &&
            (d = !0);
          if (0 == d) return;
        }
        a.settings_scrollTop_is_another_element_top &&
          (u = a.settings_scrollTop_is_another_element_top);
        h = b.find(".dzsparallaxer--target").eq(0);
        0 < b.find(".dzsparallaxer--blackoverlay").length &&
          (G = b.find(".dzsparallaxer--blackoverlay").eq(0));
        0 < b.find(".dzsparallaxer--fadeouttarget").length &&
          (T = b.find(".dzsparallaxer--fadeouttarget").eq(0));
        b.hasClass("wait-readyall") ||
          setTimeout(function () {
            y = Number(a.animation_duration);
          }, 300);
        b.addClass("mode-" + a.settings_mode);
        g = b.height();
        "on" == a.settings_movexaftermouse && (z = b.width());
        h &&
          ((k = h.height()),
          "on" == a.settings_movexaftermouse && (H = h.width()));
        a.settings_substract_from_th && (k -= a.settings_substract_from_th);
        U = g;
        "2" == a.breakout_fix && console.info(b.prev());
        b.attr("data-responsive-reference-width") &&
          (I = Number(b.attr("data-responsive-reference-width")));
        b.attr("data-responsive-optimal-height") &&
          (P = Number(b.attr("data-responsive-optimal-height")));
        0 < b.find(".dzsprxseparator--bigcurvedline").length &&
          b
            .find(".dzsprxseparator--bigcurvedline")
            .append(
              '<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="#FFFFFF" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>'
            );
        0 < b.find(".dzsprxseparator--2triangles").length &&
          b
            .find(".dzsprxseparator--2triangles")
            .append(
              '<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="#FFFFFF" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>'
            );
        0 < b.find(".dzsprxseparator--triangle").length &&
          b
            .find(".dzsprxseparator--triangle")
            .append(
              '<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="#FFFFFF" points="2200,100 0,100 0,0 2200,100 "/></svg>'
            );
        b.get(0) &&
          (b.get(0).api_set_scrollTop_is_another_element_top = function (a) {
            u = a;
          });
        0 < b.find(".divimage").length || 0 < b.find("img").length
          ? ((d = b.children(".divimage, img").eq(0)),
            d.attr("data-src")
              ? ((V = d.attr("data-src")), c(window).bind("scroll", n), n())
              : S())
          : S();
      }
      function S() {
        if (!J) {
          J = !0;
          is_ie11() && b.addClass("is-ie-11");
          c(window).bind("resize", da);
          da();
          b.hasClass("wait-readyall") &&
            setTimeout(function () {
              n();
            }, 700);
          setTimeout(function () {
            b.addClass("dzsprx-readyall");
            n();
            b.hasClass("wait-readyall") && (y = Number(a.animation_duration));
          }, 1e3);
          0 < b.find("*[data-parallaxanimation]").length &&
            b.find("*[data-parallaxanimation]").each(function () {
              var a = c(this);
              if (a.attr("data-parallaxanimation")) {
                null == F && (F = []);
                F.push(a);
                var b = a.attr("data-parallaxanimation"),
                  b = ("window.aux_opts2 = " + b).replace(/'/g, '"');
                try {
                  eval(b);
                } catch (d) {
                  console.info(b, d), (window.aux_opts2 = null);
                }
                if (window.aux_opts2) {
                  for (r = 0; r < window.aux_opts2.length; r++)
                    0 == isNaN(Number(window.aux_opts2[r].initial)) &&
                      (window.aux_opts2[r].initial = Number(
                        window.aux_opts2[r].initial
                      )),
                      0 == isNaN(Number(window.aux_opts2[r].mid)) &&
                        (window.aux_opts2[r].mid = Number(
                          window.aux_opts2[r].mid
                        )),
                      0 == isNaN(Number(window.aux_opts2[r]["final"])) &&
                        (window.aux_opts2[r]["final"] = Number(
                          window.aux_opts2[r]["final"]
                        ));
                  a.data("parallax_options", window.aux_opts2);
                }
              }
            });
          W &&
            ((D = !0),
            setTimeout(function () {
              D = !1;
            }, W));
          b.hasClass("simple-parallax")
            ? (h.wrap('<div class="simple-parallax-inner"></div>'),
              "on" ==
                a.simple_parallaxer_convert_simple_img_to_bg_if_possible &&
                h.attr("data-src") &&
                0 == h.children().length &&
                h.parent().addClass("is-image"),
              0 < x && K())
            : K();
          ea = setInterval(na, 1e3);
          setTimeout(function () {}, 1500);
          if (b.hasClass("use-loading")) {
            if (
              0 < b.find(".divimage").length ||
              0 < b.children("img").length
            ) {
              if (0 < b.find(".divimage").length) {
                V &&
                  b
                    .find(".divimage")
                    .eq(0)
                    .css("background-image", "url(" + V + ")");
                var d = String(
                  b.find(".divimage").eq(0).css("background-image")
                ).split('"')[1];
                void 0 == d &&
                  ((d = String(
                    b.find(".divimage").eq(0).css("background-image")
                  ).split("url(")[1]),
                  (d = String(d).split(")")[0]));
                var f = new Image();
                f.onload = function (a) {
                  b.addClass("loaded");
                };
                f.src = d;
              }
            } else b.addClass("loaded");
            setTimeout(function () {
              b.addClass("loaded");
              fa();
            }, 1e4);
          }
          b.get(0).api_set_update_func = function (a) {
            t = a;
          };
          b.get(0).api_handle_scroll = n;
          b.get(0).api_destroy = ma;
          b.get(0).api_destroy_listeners = oa;
          if ("scroll" == a.settings_mode || "oneelement" == a.settings_mode)
            c(window).unbind("scroll", n),
              c(window).bind("scroll", n),
              n(),
              setTimeout(n, 1e3),
              document &&
                document.addEventListener &&
                document.addEventListener("touchmove", X, !1);
          ("mouse_body" != a.settings_mode &&
            "on" != a.settings_movexaftermouse) ||
            c(document).bind("mousemove", X);
        }
      }
      function ma() {
        t = null;
        ga = !0;
        t = null;
        c(window).unbind("scroll", n);
        document &&
          document.addEventListener &&
          document.removeEventListener("touchmove", X, !1);
      }
      function na() {
        Y = !0;
      }
      function oa() {
        clearInterval(ea);
      }
      function da() {
        z = b.width();
        m = c(window).height();
        Z = c(window).width();
        !1 !== J &&
          ("oneelement" == a.settings_mode &&
            b.css("transform", "translate3d(0,0,0)"),
          (v = b.offset().top),
          I && P && (z < I ? b.height((z / I) * P) : b.height(P)),
          760 > z ? b.addClass("under-760") : b.removeClass("under-760"),
          aa && clearTimeout(aa),
          (aa = setTimeout(fa, 700)),
          "on" == a.js_breakout &&
            (b.css("width", Z + "px"),
            b.css("margin-left", "0"),
            0 < b.offset().left &&
              b.css("margin-left", "-" + b.offset().left + "px")));
      }
      function fa() {
        g = b.height();
        k = h.height();
        m = c(window).height();
        a.settings_substract_from_th && (k -= a.settings_substract_from_th);
        a.settings_clip_height_is_window_height && (g = c(window).height());
        0 == b.hasClass("allbody") &&
          0 == b.hasClass("dzsparallaxer---window-height") &&
          0 == I &&
          (k <= U && 0 < k
            ? ("oneelement" != a.settings_mode &&
                0 == b.hasClass("do-not-set-js-height") &&
                0 == b.hasClass("height-is-based-on-content") &&
                b.height(k),
              (g = b.height()),
              is_ie() && 10 >= version_ie()
                ? h.css("top", "0")
                : h.css("transform", "translate3d(0,0px,0)"),
              G && G.css("opacity", "0"))
            : (console.info(b.hasClass("do-not-set-js-height")),
              "oneelement" != a.settings_mode &&
                0 == b.hasClass("do-not-set-js-height") &&
                0 == b.hasClass("height-is-based-on-content") &&
                b.height(U)));
        h.attr("data-forcewidth_ratio") &&
          (h.width(Number(h.attr("data-forcewidth_ratio")) * h.height()),
          h.width() < b.width() && h.width(b.width()));
        clearTimeout(ha);
        ha = setTimeout(n, 200);
      }
      function X(b) {
        if ("mouse_body" == a.settings_mode) {
          d = b.pageY;
          var c;
          if (0 == k) return;
          c = (d / m) * (g - k);
          A = d / g;
          0 < c && (c = 0);
          c < g - k && (c = g - k);
          1 < A && (A = 1);
          0 > A && (A = 0);
          L = c;
        }
        "on" == a.settings_movexaftermouse &&
          ((b = (b.pageX / Z) * (z - H)),
          0 < b && (b = 0),
          b < z - H && (b = z - H),
          (ia = b));
      }
      function n(l, f) {
        d = c(window).scrollTop();
        p = 0;
        (v > d - m && d < v + b.outerHeight()) || "fromtop" == a.mode_scroll
          ? (D = !1)
          : a.settings_detect_out_of_screen && (D = !0);
        u &&
          ((d = -parseInt(u.css("top"), 10)),
          u.data("targettop") && (d = -u.data("targettop")));
        a.settings_listen_to_object_scroll_top &&
          (d = a.settings_listen_to_object_scroll_top.val);
        isNaN(d) && (d = 0);
        l && "on" == a.init_functional_remove_delay_on_scroll && (D = !1);
        var n = { force_vi_y: null, from: "", force_ch: null, force_th: null };
        f && (n = c.extend(n, f));
        a.settings_clip_height_is_window_height && (g = c(window).height());
        null != n.force_ch && (g = n.force_ch);
        null != n.force_th && (k = n.force_th);
        !1 === J && ((m = c(window).height()), d + m >= b.offset().top && S());
        if (
          0 != k &&
          !1 !== J &&
          ("scroll" == a.settings_mode || "oneelement" == a.settings_mode)
        ) {
          if ("oneelement" == a.settings_mode) {
            var e = (d - v + m) / m;
            0 > e && (e = 0);
            1 < e && (e = 1);
            "reverse" == a.direction && (e = Math.abs(1 - e));
            L = p =
              2 * e * a.settings_mode_oneelement_max_offset -
              a.settings_mode_oneelement_max_offset;
          }
          if ("scroll" == a.settings_mode) {
            "fromtop" == a.mode_scroll &&
              ((p = (d / g) * (g - k)),
              "on" == a.is_fullscreen &&
                ((p = (d / (c("body").height() - m)) * (g - k)),
                u && (p = (d / (u.height() - m)) * (g - k))),
              "reverse" == a.direction &&
                ((p = (1 - d / g) * (g - k)),
                "on" == a.is_fullscreen &&
                  ((p = (1 - d / (c("body").height() - m)) * (g - k)),
                  u && (p = (1 - d / (u.height() - m)) * (g - k)))));
            v = b.offset().top;
            u && (v = -parseInt(u.css("top"), 10));
            e = (d - (v - m)) / (v + g - (v - m));
            "on" == a.is_fullscreen &&
              ((e = d / (c("body").height() - m)),
              u && (e = d / (u.outerHeight() - m)));
            1 < e && (e = 1);
            0 > e && (e = 0);
            if (F)
              for (r = 0; r < F.length; r++) {
                var z = F[r],
                  B = z.data("parallax_options");
                if (B)
                  for (var C = 0; C < B.length; C++) {
                    if (0.5 >= e) {
                      var t = 2 * e,
                        w = 2 * e - 1;
                      0 > w && (w = -w);
                      t = w * B[C].initial + t * B[C].mid;
                    } else
                      (t = 2 * (e - 0.5)),
                        (w = t - 1),
                        0 > w && (w = -w),
                        (t = w * B[C].mid + t * B[C]["final"]);
                    w = B[C].value;
                    w = w.replace("{{val}}", t);
                    z.css(B[C].property, w);
                  }
              }
            "normal" == a.mode_scroll &&
              ((p = e * (g - k)),
              "reverse" == a.direction && (p = (1 - e) * (g - k)),
              b.hasClass("debug-target") &&
                console.info(a.mode_scroll, d, v, m, g, v + g, e));
            b.hasClass("simple-parallax") &&
              ((e = (d + m - v) / (m + k)),
              0 > e && (e = 0),
              1 < e && (e = 1),
              (e = Math.abs(1 - e)),
              (p = 2 * e * x - x));
            T &&
              ((e = Math.abs((d - v) / b.outerHeight() - 1)),
              1 < e && (e = 1),
              0 > e && (e = 0),
              T.css("opacity", e));
            A = d / g;
            0 == b.hasClass("simple-parallax") &&
              (0 < p && (p = 0), p < g - k && (p = g - k));
            1 < A && (A = 1);
            0 > A && (A = 0);
            n.force_vi_y && (p = n.force_vi_y);
            L = p;
            ja = A;
            0 === y &&
              ((q = L),
              0 == D &&
                (b.hasClass("simple-parallax")
                  ? h.parent().hasClass("is-image") &&
                    h.css(
                      "background-position-y",
                      "calc(50% - " + parseInt(q, 10) + "px)"
                    )
                  : is_ie() && 10 >= version_ie()
                  ? h.css("top", "" + q + "px")
                  : (h.css(
                      "transform",
                      "translate3d(" + E + "px," + q + "px,0)"
                    ),
                    "oneelement" == a.settings_mode &&
                      b.css(
                        "transform",
                        "translate3d(" + E + "px," + q + "px,0)"
                      ))));
          }
        }
      }
      function K() {
        if (D) return requestAnimFrame(K), !1;
        isNaN(q) && (q = 0);
        Y && (Y = !1);
        if (0 === y) return t && t(q), requestAnimFrame(K), !1;
        M = q;
        Q = L - M;
        N = O;
        R = ja - N;
        "easeIn" == a.easing &&
          ((q = Number(Math.easeIn(1, M, Q, y).toFixed(5))),
          (O = Number(Math.easeIn(1, N, R, y).toFixed(5))));
        "easeOutQuad" == a.easing &&
          ((q = Math.easeOutQuad(1, M, Q, y)),
          (O = Math.easeOutQuad(1, N, R, y)));
        "easeInOutSine" == a.easing &&
          ((q = Math.easeInOutSine(1, M, Q, y)),
          (O = Math.easeInOutSine(1, N, R, y)));
        E = 0;
        "on" == a.settings_movexaftermouse &&
          ((ba = E), (ka = ia - ba), (E = Math.easeIn(1, ba, ka, y)));
        b.hasClass("simple-parallax")
          ? h.parent().hasClass("is-image") &&
            h.css(
              "background-position-y",
              "calc(50% - " + parseInt(q, 10) + "px)"
            )
          : is_ie() && 10 >= version_ie()
          ? h.css("top", "" + q + "px")
          : (h.css("transform", "translate3d(" + E + "px," + q + "px,0)"),
            "oneelement" == a.settings_mode &&
              b.css("transform", "translate3d(" + E + "px," + q + "px,0)"));
        G && G.css("opacity", O);
        t && t(q);
        if (ga) return !1;
        requestAnimFrame(K);
      }
      var b = c(this),
        h = null,
        G = null,
        T = null,
        r = 0,
        H = 0,
        k = 0,
        g = 0,
        z = (H = 0),
        Z = 0,
        m = 0,
        U = 0,
        aa = 0,
        y = 0,
        q = 0,
        E = 0,
        O = 0,
        M = 0,
        ba = 0,
        N = 0,
        L = 0,
        ia = 0,
        ja = 0,
        Q = 0,
        ka = 0,
        R = 0,
        t = null,
        u = null,
        d = 0,
        p = 0,
        A = 0,
        v = 0,
        V = "",
        J = !1,
        Y = !1,
        F = null,
        ga = !1,
        D = !1,
        ca = 0,
        W = 0,
        ea = 0,
        ha = 0,
        I = 0,
        P = 0,
        ca = Number(a.init_delay),
        W = Number(a.init_functional_delay);
      ca ? setTimeout(l, ca) : l();
    });
  };
  window.dzsprx_init = function (a, l) {
    if (
      "undefined" != typeof l &&
      "undefined" != typeof l.init_each &&
      1 == l.init_each
    ) {
      var x = 0,
        la;
      for (la in l) x++;
      1 == x && (l = void 0);
      c(a).each(function () {
        c(this).dzsparallaxer(l);
      });
    } else c(a).dzsparallaxer(l);
  };
})(jQuery);
function is_touch_device() {
  return !!("ontouchstart" in window);
}
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (c) {
      window.setTimeout(c, 1e3 / 60);
    }
  );
})();
function is_ie() {
  var c = window.navigator.userAgent,
    a = c.indexOf("MSIE ");
  if (0 < a) return parseInt(c.substring(a + 5, c.indexOf(".", a)), 10);
  if (0 < c.indexOf("Trident/"))
    return (
      (a = c.indexOf("rv:")),
      parseInt(c.substring(a + 3, c.indexOf(".", a)), 10)
    );
  a = c.indexOf("Edge/");
  return 0 < a ? parseInt(c.substring(a + 5, c.indexOf(".", a)), 10) : !1;
}
function is_ie11() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}
function version_ie() {
  return parseFloat(navigator.appVersion.split("MSIE")[1]);
}
jQuery(document).ready(function (c) {
  c(".dzsparallaxer---window-height").each(function () {
    function a() {
      var a = c(window).height();
      l.height(a);
    }
    var l = c(this);
    c(window).bind("resize", a);
    a();
  });
  dzsprx_init(".dzsparallaxer.auto-init", { init_each: !0 });
});
/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 */
!(function (t, n, i, s) {
  var e = function (s, e) {
    (this.elem = s),
      (this.$elem = t(s)),
      (this.options = e),
      (this.metadata = this.$elem.data("plugin-options")),
      (this.$win = t(n)),
      (this.sections = {}),
      (this.didScroll = !1),
      (this.$doc = t(i)),
      (this.docHeight = this.$doc.height());
  };
  (e.prototype = {
    defaults: {
      navItems: "a",
      currentClass: "current",
      changeHash: !1,
      easing: "swing",
      filter: "",
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      begin: !1,
      end: !1,
      scrollChange: !1,
    },
    init: function () {
      return (
        (this.config = t.extend(
          {},
          this.defaults,
          this.options,
          this.metadata
        )),
        (this.$nav = this.$elem.find(this.config.navItems)),
        "" !== this.config.filter &&
          (this.$nav = this.$nav.filter(this.config.filter)),
        this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)),
        this.getPositions(),
        this.bindInterval(),
        this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)),
        this
      );
    },
    adjustNav: function (t, n) {
      t.$elem
        .find("." + t.config.currentClass)
        .removeClass(t.config.currentClass),
        n.addClass(t.config.currentClass);
    },
    bindInterval: function () {
      var t,
        n = this;
      n.$win.on("scroll.onePageNav", function () {
        n.didScroll = !0;
      }),
        (n.t = setInterval(function () {
          (t = n.$doc.height()),
            n.didScroll && ((n.didScroll = !1), n.scrollChange()),
            t !== n.docHeight && ((n.docHeight = t), n.getPositions());
        }, 250));
    },
    getHash: function (t) {
      return t.attr("href").split("#")[1];
    },
    getPositions: function () {
      var n,
        i,
        s,
        e = this;
      e.$nav.each(function () {
        (n = e.getHash(t(this))),
          (s = t("#" + n)),
          s.length && ((i = s.offset().top), (e.sections[n] = Math.round(i)));
      });
    },
    getSection: function (t) {
      var n = null,
        i = Math.round(this.$win.height() * this.config.scrollThreshold);
      for (var s in this.sections) this.sections[s] - i < t && (n = s);
      return n;
    },
    handleClick: function (i) {
      var s = this,
        e = t(i.currentTarget),
        o = e.parent(),
        a = "#" + s.getHash(e);
      o.hasClass(s.config.currentClass) ||
        (s.config.begin && s.config.begin(),
        s.adjustNav(s, o),
        s.unbindInterval(),
        s.scrollTo(a, function () {
          s.config.changeHash && (n.location.hash = a),
            s.bindInterval(),
            s.config.end && s.config.end();
        })),
        i.preventDefault();
    },
    scrollChange: function () {
      var t,
        n = this.$win.scrollTop(),
        i = this.getSection(n);
      null !== i &&
        ((t = this.$elem.find('a[href$="#' + i + '"]').parent()),
        t.hasClass(this.config.currentClass) ||
          (this.adjustNav(this, t),
          this.config.scrollChange && this.config.scrollChange(t)));
    },
    scrollTo: function (n, i) {
      var s = t(n).offset().top;
      t("html, body").animate(
        { scrollTop: s },
        this.config.scrollSpeed,
        this.config.easing,
        i
      );
    },
    unbindInterval: function () {
      clearInterval(this.t), this.$win.unbind("scroll.onePageNav");
    },
  }),
    (e.defaults = e.prototype.defaults),
    (t.fn.onePageNav = function (t) {
      return this.each(function () {
        new e(this, t).init();
      });
    });
})(jQuery, window, document);
// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" == typeof module && module.exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  var e = Array.prototype.slice,
    i = Array.prototype.splice,
    n = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: "is-sticky",
      wrapperClassName: "sticky-wrapper",
      center: !1,
      getWidthFrom: "",
      widthFromWrapper: !0,
      responsiveWidth: !1,
      zIndex: "auto",
    },
    r = t(window),
    s = t(document),
    o = [],
    a = r.height(),
    c = function () {
      for (
        var e = r.scrollTop(),
          i = s.height(),
          n = i - a,
          c = e > n ? n - e : 0,
          p = 0,
          d = o.length;
        d > p;
        p++
      ) {
        var l = o[p],
          u = l.stickyWrapper.offset().top,
          h = u - l.topSpacing - c;
        if (
          (l.stickyWrapper.css("height", l.stickyElement.outerHeight()), h >= e)
        )
          null !== l.currentTop &&
            (l.stickyElement.css({
              width: "",
              position: "",
              top: "",
              "z-index": "",
            }),
            l.stickyElement.parent().removeClass(l.className),
            l.stickyElement.trigger("sticky-end", [l]),
            (l.currentTop = null));
        else {
          var g =
            i -
            l.stickyElement.outerHeight() -
            l.topSpacing -
            l.bottomSpacing -
            e -
            c;
          if (
            (0 > g ? (g += l.topSpacing) : (g = l.topSpacing),
            l.currentTop !== g)
          ) {
            var m;
            l.getWidthFrom
              ? (m = t(l.getWidthFrom).width() || null)
              : l.widthFromWrapper && (m = l.stickyWrapper.width()),
              null == m && (m = l.stickyElement.width()),
              l.stickyElement
                .css("width", m)
                .css("position", "fixed")
                .css("top", g)
                .css("z-index", l.zIndex),
              l.stickyElement.parent().addClass(l.className),
              null === l.currentTop
                ? l.stickyElement.trigger("sticky-start", [l])
                : l.stickyElement.trigger("sticky-update", [l]),
              (l.currentTop === l.topSpacing && l.currentTop > g) ||
              (null === l.currentTop && g < l.topSpacing)
                ? l.stickyElement.trigger("sticky-bottom-reached", [l])
                : null !== l.currentTop &&
                  g === l.topSpacing &&
                  l.currentTop < g &&
                  l.stickyElement.trigger("sticky-bottom-unreached", [l]),
              (l.currentTop = g);
          }
          var y = l.stickyWrapper.parent(),
            f =
              l.stickyElement.offset().top + l.stickyElement.outerHeight() >=
                y.offset().top + y.outerHeight() &&
              l.stickyElement.offset().top <= l.topSpacing;
          f
            ? l.stickyElement
                .css("position", "absolute")
                .css("top", "")
                .css("bottom", 0)
                .css("z-index", "")
            : l.stickyElement
                .css("position", "fixed")
                .css("top", g)
                .css("bottom", "")
                .css("z-index", l.zIndex);
        }
      }
    },
    p = function () {
      a = r.height();
      for (var e = 0, i = o.length; i > e; e++) {
        var n = o[e],
          s = null;
        n.getWidthFrom
          ? n.responsiveWidth && (s = t(n.getWidthFrom).width())
          : n.widthFromWrapper && (s = n.stickyWrapper.width()),
          null != s && n.stickyElement.css("width", s);
      }
    },
    d = {
      init: function (e) {
        var i = t.extend({}, n, e);
        return this.each(function () {
          var e = t(this),
            r = e.attr("id"),
            s = r ? r + "-" + n.wrapperClassName : n.wrapperClassName,
            a = t("<div></div>").attr("id", s).addClass(i.wrapperClassName);
          e.wrapAll(function () {
            return 0 == t(this).parent("#" + s).length ? a : void 0;
          });
          var c = e.parent();
          i.center &&
            c.css({
              width: e.outerWidth(),
              marginLeft: "auto",
              marginRight: "auto",
            }),
            "right" === e.css("float") &&
              e.css({ float: "none" }).parent().css({ float: "right" }),
            (i.stickyElement = e),
            (i.stickyWrapper = c),
            (i.currentTop = null),
            o.push(i),
            d.setWrapperHeight(this),
            d.setupChangeListeners(this);
        });
      },
      setWrapperHeight: function (e) {
        var i = t(e),
          n = i.parent();
        n && n.css("height", i.outerHeight());
      },
      setupChangeListeners: function (t) {
        if (window.MutationObserver) {
          var e = new window.MutationObserver(function (e) {
            (e[0].addedNodes.length || e[0].removedNodes.length) &&
              d.setWrapperHeight(t);
          });
          e.observe(t, { subtree: !0, childList: !0 });
        } else
          window.addEventListener
            ? (t.addEventListener(
                "DOMNodeInserted",
                function () {
                  d.setWrapperHeight(t);
                },
                !1
              ),
              t.addEventListener(
                "DOMNodeRemoved",
                function () {
                  d.setWrapperHeight(t);
                },
                !1
              ))
            : window.attachEvent &&
              (t.attachEvent("onDOMNodeInserted", function () {
                d.setWrapperHeight(t);
              }),
              t.attachEvent("onDOMNodeRemoved", function () {
                d.setWrapperHeight(t);
              }));
      },
      update: c,
      unstick: function (e) {
        return this.each(function () {
          for (var e = this, n = t(e), r = -1, s = o.length; s-- > 0; )
            o[s].stickyElement.get(0) === e && (i.call(o, s, 1), (r = s));
          -1 !== r &&
            (n.unwrap(),
            n.css({
              width: "",
              position: "",
              top: "",
              float: "",
              "z-index": "",
            }));
        });
      },
    };
  window.addEventListener
    ? (window.addEventListener("scroll", c, !1),
      window.addEventListener("resize", p, !1))
    : window.attachEvent &&
      (window.attachEvent("onscroll", c), window.attachEvent("onresize", p)),
    (t.fn.sticky = function (i) {
      return d[i]
        ? d[i].apply(this, e.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.sticky")
        : d.init.apply(this, arguments);
    }),
    (t.fn.unstick = function (i) {
      return d[i]
        ? d[i].apply(this, e.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.sticky")
        : d.unstick.apply(this, arguments);
    }),
    t(function () {
      setTimeout(c, 0);
    });
});
/*!
Vegas 2.4.0 - http://vegas.jaysalvat.com/
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Jay Salvat */
!(function (t) {
  "use strict";
  var s = {
      slide: 0,
      delay: 5e3,
      loop: !0,
      preload: !1,
      preloadImage: !1,
      preloadVideo: !1,
      timer: !0,
      overlay: !1,
      autoplay: !0,
      shuffle: !1,
      cover: !0,
      color: null,
      align: "center",
      valign: "center",
      firstTransition: null,
      firstTransitionDuration: null,
      transition: "fade",
      transitionDuration: 1e3,
      transitionRegister: [],
      animation: null,
      animationDuration: "auto",
      animationRegister: [],
      slidesToKeep: 1,
      init: function () {},
      play: function () {},
      pause: function () {},
      walk: function () {},
      slides: [],
    },
    i = {},
    e = function (i, e) {
      (this.elmt = i),
        (this.settings = t.extend({}, s, t.vegas.defaults, e)),
        (this.slide = this.settings.slide),
        (this.total = this.settings.slides.length),
        (this.noshow = this.total < 2),
        (this.paused = !this.settings.autoplay || this.noshow),
        (this.ended = !1),
        (this.$elmt = t(i)),
        (this.$timer = null),
        (this.$overlay = null),
        (this.$slide = null),
        (this.timeout = null),
        (this.first = !0),
        (this.transitions = [
          "fade",
          "fade2",
          "blur",
          "blur2",
          "flash",
          "flash2",
          "negative",
          "negative2",
          "burn",
          "burn2",
          "slideLeft",
          "slideLeft2",
          "slideRight",
          "slideRight2",
          "slideUp",
          "slideUp2",
          "slideDown",
          "slideDown2",
          "zoomIn",
          "zoomIn2",
          "zoomOut",
          "zoomOut2",
          "swirlLeft",
          "swirlLeft2",
          "swirlRight",
          "swirlRight2",
        ]),
        (this.animations = [
          "kenburns",
          "kenburnsLeft",
          "kenburnsRight",
          "kenburnsUp",
          "kenburnsUpLeft",
          "kenburnsUpRight",
          "kenburnsDown",
          "kenburnsDownLeft",
          "kenburnsDownRight",
        ]),
        this.settings.transitionRegister instanceof Array == !1 &&
          (this.settings.transitionRegister = [
            this.settings.transitionRegister,
          ]),
        this.settings.animationRegister instanceof Array == !1 &&
          (this.settings.animationRegister = [this.settings.animationRegister]),
        (this.transitions = this.transitions.concat(
          this.settings.transitionRegister
        )),
        (this.animations = this.animations.concat(
          this.settings.animationRegister
        )),
        (this.support = {
          objectFit: "objectFit" in document.body.style,
          transition:
            "transition" in document.body.style ||
            "WebkitTransition" in document.body.style,
          video: t.vegas.isVideoCompatible(),
        }),
        this.settings.shuffle === !0 && this.shuffle(),
        this._init();
    };
  (e.prototype = {
    _init: function () {
      var s,
        i,
        e,
        n = "BODY" === this.elmt.tagName,
        o = this.settings.timer,
        a = this.settings.overlay,
        r = this;
      this._preload(),
        n ||
          (this.$elmt.css("height", this.$elmt.css("height")),
          (s = t('<div class="vegas-wrapper">')
            .css("overflow", this.$elmt.css("overflow"))
            .css("padding", this.$elmt.css("padding"))),
          this.$elmt.css("padding") ||
            s
              .css("padding-top", this.$elmt.css("padding-top"))
              .css("padding-bottom", this.$elmt.css("padding-bottom"))
              .css("padding-left", this.$elmt.css("padding-left"))
              .css("padding-right", this.$elmt.css("padding-right")),
          this.$elmt.clone(!0).children().appendTo(s),
          (this.elmt.innerHTML = "")),
        o &&
          this.support.transition &&
          ((e = t(
            '<div class="vegas-timer"><div class="vegas-timer-progress">'
          )),
          (this.$timer = e),
          this.$elmt.prepend(e)),
        a &&
          ((i = t('<div class="vegas-overlay">')),
          "string" == typeof a && i.css("background-image", "url(" + a + ")"),
          (this.$overlay = i),
          this.$elmt.prepend(i)),
        this.$elmt.addClass("vegas-container"),
        n || this.$elmt.append(s),
        setTimeout(function () {
          r.trigger("init"),
            r._goto(r.slide),
            r.settings.autoplay && r.trigger("play");
        }, 1);
    },
    _preload: function () {
      var t, s;
      for (s = 0; s < this.settings.slides.length; s++)
        (this.settings.preload || this.settings.preloadImages) &&
          this.settings.slides[s].src &&
          ((t = new Image()), (t.src = this.settings.slides[s].src)),
          (this.settings.preload || this.settings.preloadVideos) &&
            this.support.video &&
            this.settings.slides[s].video &&
            (this.settings.slides[s].video instanceof Array
              ? this._video(this.settings.slides[s].video)
              : this._video(this.settings.slides[s].video.src));
    },
    _random: function (t) {
      return t[Math.floor(Math.random() * t.length)];
    },
    _slideShow: function () {
      var t = this;
      this.total > 1 &&
        !this.ended &&
        !this.paused &&
        !this.noshow &&
        (this.timeout = setTimeout(function () {
          t.next();
        }, this._options("delay")));
    },
    _timer: function (t) {
      var s = this;
      clearTimeout(this.timeout),
        this.$timer &&
          (this.$timer
            .removeClass("vegas-timer-running")
            .find("div")
            .css("transition-duration", "0ms"),
          this.ended ||
            this.paused ||
            this.noshow ||
            (t &&
              setTimeout(function () {
                s.$timer
                  .addClass("vegas-timer-running")
                  .find("div")
                  .css("transition-duration", s._options("delay") - 100 + "ms");
              }, 100)));
    },
    _video: function (t) {
      var s,
        e,
        n = t.toString();
      return i[n]
        ? i[n]
        : (t instanceof Array == !1 && (t = [t]),
          (s = document.createElement("video")),
          (s.preload = !0),
          t.forEach(function (t) {
            (e = document.createElement("source")),
              (e.src = t),
              s.appendChild(e);
          }),
          (i[n] = s),
          s);
    },
    _fadeOutSound: function (t, s) {
      var i = this,
        e = s / 10,
        n = t.volume - 0.09;
      n > 0
        ? ((t.volume = n),
          setTimeout(function () {
            i._fadeOutSound(t, s);
          }, e))
        : t.pause();
    },
    _fadeInSound: function (t, s) {
      var i = this,
        e = s / 10,
        n = t.volume + 0.09;
      n < 1 &&
        ((t.volume = n),
        setTimeout(function () {
          i._fadeInSound(t, s);
        }, e));
    },
    _options: function (t, s) {
      return (
        void 0 === s && (s = this.slide),
        void 0 !== this.settings.slides[s][t]
          ? this.settings.slides[s][t]
          : this.settings[t]
      );
    },
    _goto: function (s) {
      function i() {
        f._timer(!0),
          setTimeout(function () {
            y &&
              (f.support.transition
                ? (h
                    .css("transition", "all " + _ + "ms")
                    .addClass("vegas-transition-" + y + "-out"),
                  h.each(function () {
                    var t = h.find("video").get(0);
                    t && ((t.volume = 1), f._fadeOutSound(t, _));
                  }),
                  e
                    .css("transition", "all " + _ + "ms")
                    .addClass("vegas-transition-" + y + "-in"))
                : e.fadeIn(_));
            for (var t = 0; t < h.length - f.settings.slidesToKeep; t++)
              h.eq(t).remove();
            f.trigger("walk"), f._slideShow();
          }, 100);
      }
      "undefined" == typeof this.settings.slides[s] && (s = 0),
        (this.slide = s);
      var e,
        n,
        o,
        a,
        r,
        h = this.$elmt.children(".vegas-slide"),
        d = this.settings.slides[s].src,
        l = this.settings.slides[s].video,
        g = this._options("delay"),
        u = this._options("align"),
        c = this._options("valign"),
        p = this._options("cover"),
        m = this._options("color") || this.$elmt.css("background-color"),
        f = this,
        v = h.length,
        y = this._options("transition"),
        _ = this._options("transitionDuration"),
        w = this._options("animation"),
        b = this._options("animationDuration");
      this.settings.firstTransition &&
        this.first &&
        (y = this.settings.firstTransition || y),
        this.settings.firstTransitionDuration &&
          this.first &&
          (_ = this.settings.firstTransitionDuration || _),
        this.first && (this.first = !1),
        "repeat" !== p &&
          (p === !0 ? (p = "cover") : p === !1 && (p = "contain")),
        ("random" === y || y instanceof Array) &&
          (y =
            y instanceof Array
              ? this._random(y)
              : this._random(this.transitions)),
        ("random" === w || w instanceof Array) &&
          (w =
            w instanceof Array
              ? this._random(w)
              : this._random(this.animations)),
        ("auto" === _ || _ > g) && (_ = g),
        "auto" === b && (b = g),
        (e = t('<div class="vegas-slide"></div>')),
        this.support.transition && y && e.addClass("vegas-transition-" + y),
        this.support.video && l
          ? ((a = l instanceof Array ? this._video(l) : this._video(l.src)),
            (a.loop = void 0 === l.loop || l.loop),
            (a.muted = void 0 === l.mute || l.mute),
            a.muted === !1
              ? ((a.volume = 0), this._fadeInSound(a, _))
              : a.pause(),
            (o = t(a).addClass("vegas-video").css("background-color", m)),
            this.support.objectFit
              ? o
                  .css("object-position", u + " " + c)
                  .css("object-fit", p)
                  .css("width", "100%")
                  .css("height", "100%")
              : "contain" === p && o.css("width", "100%").css("height", "100%"),
            e.append(o))
          : ((r = new Image()),
            (n = t('<div class="vegas-slide-inner"></div>')
              .css("background-image", 'url("' + d + '")')
              .css("background-color", m)
              .css("background-position", u + " " + c)),
            "repeat" === p
              ? n.css("background-repeat", "repeat")
              : n.css("background-size", p),
            this.support.transition &&
              w &&
              n
                .addClass("vegas-animation-" + w)
                .css("animation-duration", b + "ms"),
            e.append(n)),
        this.support.transition || e.css("display", "none"),
        v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e),
        h.css("transition", "all 0ms").each(function () {
          (this.className = "vegas-slide"),
            "VIDEO" === this.tagName && (this.className += " vegas-video"),
            y &&
              ((this.className += " vegas-transition-" + y),
              (this.className += " vegas-transition-" + y + "-in"));
        }),
        f._timer(!1),
        a
          ? (4 === a.readyState && (a.currentTime = 0), a.play(), i())
          : ((r.src = d), r.complete ? i() : (r.onload = i));
    },
    _end: function () {
      (this.ended = !0), this._timer(!1), this.trigger("end");
    },
    shuffle: function () {
      for (var t, s, i = this.total - 1; i > 0; i--)
        (s = Math.floor(Math.random() * (i + 1))),
          (t = this.settings.slides[i]),
          (this.settings.slides[i] = this.settings.slides[s]),
          (this.settings.slides[s] = t);
    },
    play: function () {
      this.paused && ((this.paused = !1), this.next(), this.trigger("play"));
    },
    pause: function () {
      this._timer(!1), (this.paused = !0), this.trigger("pause");
    },
    toggle: function () {
      this.paused ? this.play() : this.pause();
    },
    playing: function () {
      return !this.paused && !this.noshow;
    },
    current: function (t) {
      return t
        ? { slide: this.slide, data: this.settings.slides[this.slide] }
        : this.slide;
    },
    jump: function (t) {
      t < 0 ||
        t > this.total - 1 ||
        t === this.slide ||
        ((this.slide = t), this._goto(this.slide));
    },
    next: function () {
      if ((this.slide++, this.slide >= this.total)) {
        if (!this.settings.loop) return this._end();
        this.slide = 0;
      }
      this._goto(this.slide);
    },
    previous: function () {
      if ((this.slide--, this.slide < 0)) {
        if (!this.settings.loop) return void this.slide++;
        this.slide = this.total - 1;
      }
      this._goto(this.slide);
    },
    trigger: function (t) {
      var s = [];
      (s =
        "init" === t
          ? [this.settings]
          : [this.slide, this.settings.slides[this.slide]]),
        this.$elmt.trigger("vegas" + t, s),
        "function" == typeof this.settings[t] &&
          this.settings[t].apply(this.$elmt, s);
    },
    options: function (i, e) {
      var n = this.settings.slides.slice();
      if ("object" == typeof i)
        this.settings = t.extend({}, s, t.vegas.defaults, i);
      else {
        if ("string" != typeof i) return this.settings;
        if (void 0 === e) return this.settings[i];
        this.settings[i] = e;
      }
      this.settings.slides !== n &&
        ((this.total = this.settings.slides.length),
        (this.noshow = this.total < 2),
        this._preload());
    },
    destroy: function () {
      clearTimeout(this.timeout),
        this.$elmt.removeClass("vegas-container"),
        this.$elmt.find("> .vegas-slide").remove(),
        this.$elmt
          .find("> .vegas-wrapper")
          .clone(!0)
          .children()
          .appendTo(this.$elmt),
        this.$elmt.find("> .vegas-wrapper").remove(),
        this.settings.timer && this.$timer.remove(),
        this.settings.overlay && this.$overlay.remove(),
        (this.elmt._vegas = null);
    },
  }),
    (t.fn.vegas = function (t) {
      var s,
        i = arguments,
        n = !1;
      if (void 0 === t || "object" == typeof t)
        return this.each(function () {
          this._vegas || (this._vegas = new e(this, t));
        });
      if ("string" == typeof t) {
        if (
          (this.each(function () {
            var e = this._vegas;
            if (!e) throw new Error("No Vegas applied to this element.");
            "function" == typeof e[t] && "_" !== t[0]
              ? (s = e[t].apply(e, [].slice.call(i, 1)))
              : (n = !0);
          }),
          n)
        )
          throw new Error('No method "' + t + '" in Vegas.');
        return void 0 !== s ? s : this;
      }
    }),
    (t.vegas = {}),
    (t.vegas.defaults = s),
    (t.vegas.isVideoCompatible = function () {
      return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(
        navigator.userAgent
      );
    });
})(window.jQuery || window.Zepto);
/*jquery.mb.YTPlayer 03-08-2017
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady ||
    ((ytp.YTAPIReady = !0), jQuery(document).trigger("YTAPIReady"));
}
function uncamel(a) {
  return a.replace(/([A-Z])/g, function (a) {
    return "-" + a.toLowerCase();
  });
}
function setUnit(a, b) {
  return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a;
}
function setFilter(a, b, c) {
  var d = uncamel(b),
    e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
  (a[e + "filter"] = a[e + "filter"] || ""),
    (c = setUnit(
      c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c,
      jQuery.CSS.filters[b].unit
    )),
    (a[e + "filter"] += d + "(" + c + ") "),
    delete a[b];
}
function isTouchSupported() {
  var a = nAgt.msMaxTouchPoints,
    b = "ontouchstart" in document.createElement("div");
  return a || b ? !0 : !1;
}
var ytp = ytp || {},
  getYTPVideoID = function (a) {
    var b, c;
    return (
      a.indexOf("youtu.be") > 0
        ? ((b = a.substr(a.lastIndexOf("/") + 1, a.length)),
          (c =
            b.indexOf("?list=") > 0
              ? b.substr(b.lastIndexOf("="), b.length)
              : null),
          (b = c ? b.substr(0, b.lastIndexOf("?")) : b))
        : a.indexOf("http") > -1
        ? ((b = a.match(/[\\?&]v=([^&#]*)/)[1]),
          (c =
            a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null))
        : ((b = a.length > 15 ? null : a), (c = b ? null : a)),
      { videoID: b, playlistID: c }
    );
  };
!(function (jQuery, ytp) {
  (jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.0.20",
    build: "6308",
    author: "Matteo Bicocchi (pupunzi)",
    apiKey: "",
    defaults: {
      containment: "body",
      ratio: "auto",
      videoURL: null,
      playlistURL: null,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      vol: 50,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "default",
      mute: !1,
      loop: !0,
      fadeOnStartTime: 500,
      showControls: !0,
      showAnnotations: !1,
      showYTLogo: !0,
      stopMovieOnBlur: !0,
      realfullscreen: !0,
      mobileFallbackImage: null,
      gaTrack: !0,
      optimizeDisplay: !0,
      remember_last_time: !1,
      playOnlyIfVisible: !1,
      anchor: "center,center",
      onReady: function (a) {},
      onError: function (a, b) {},
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y",
    },
    controlBar: null,
    loading: null,
    locationProtocol: "https:",
    filters: {
      grayscale: { value: 0, unit: "%" },
      hue_rotate: { value: 0, unit: "deg" },
      invert: { value: 0, unit: "%" },
      opacity: { value: 0, unit: "%" },
      saturate: { value: 0, unit: "%" },
      sepia: { value: 0, unit: "%" },
      brightness: { value: 0, unit: "%" },
      contrast: { value: 0, unit: "%" },
      blur: { value: 0, unit: "px" },
    },
    buildPlayer: function (options) {
      return this.each(function () {
        var YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        (YTPlayer.loop = 0),
          (YTPlayer.opt = {}),
          (YTPlayer.state = 0),
          (YTPlayer.filters = jQuery.mbYTPlayer.filters),
          (YTPlayer.filtersEnabled = !0),
          (YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime()),
          $YTPlayer.addClass("mb_YTPlayer");
        var property =
          $YTPlayer.data("property") &&
          "string" == typeof $YTPlayer.data("property")
            ? eval("(" + $YTPlayer.data("property") + ")")
            : $YTPlayer.data("property");
        "undefined" != typeof property &&
          "undefined" != typeof property.vol &&
          0 === property.vol &&
          ((property.vol = 1), (property.mute = !0)),
          jQuery.extend(
            YTPlayer.opt,
            jQuery.mbYTPlayer.defaults,
            options,
            property
          ),
          YTPlayer.hasChanged ||
            ((YTPlayer.defaultOpt = {}),
            jQuery.extend(
              YTPlayer.defaultOpt,
              jQuery.mbYTPlayer.defaults,
              options
            )),
          "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999),
          (YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1);
        var isIframe = function () {
          var a = !1;
          try {
            self.location.href != top.location.href && (a = !0);
          } catch (b) {
            a = !0;
          }
          return a;
        };
        (YTPlayer.canGoFullScreen = !(
          jQuery.mbBrowser.msie ||
          jQuery.mbBrowser.opera ||
          isIframe()
        )),
          YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1),
          $YTPlayer.attr("id") ||
            $YTPlayer.attr("id", "ytp_" + new Date().getTime());
        var playerID = "iframe_" + YTPlayer.id;
        (YTPlayer.isAlone = !1),
          (YTPlayer.hasFocus = !0),
          (YTPlayer.videoID = this.opt.videoURL
            ? getYTPVideoID(this.opt.videoURL).videoID
            : $YTPlayer.attr("href")
            ? getYTPVideoID($YTPlayer.attr("href")).videoID
            : !1),
          (YTPlayer.playlistID = this.opt.videoURL
            ? getYTPVideoID(this.opt.videoURL).playlistID
            : $YTPlayer.attr("href")
            ? getYTPVideoID($YTPlayer.attr("href")).playlistID
            : !1),
          (YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations
            ? "1"
            : "3");
        var start_from_last = 0;
        jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) &&
          (start_from_last = parseFloat(
            jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID)
          )),
          YTPlayer.opt.remember_last_time &&
            start_from_last &&
            ((YTPlayer.start_from_last = start_from_last),
            jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)),
          jQuery.isTablet && (YTPlayer.opt.autoPlay = !1);
        var playerVars = {
          modestbranding: 1,
          autoplay: (jQuery.isTablet, 0),
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          version: 3,
          playerapiid: playerID,
          origin: "*",
          allowfullscreen: !0,
          wmode: "transparent",
          iv_load_policy: YTPlayer.opt.showAnnotations,
          playsinline: 1,
        };
        if (
          (document.createElement("video").canPlayType &&
            jQuery.extend(playerVars, { html5: 1 }),
          jQuery.mbBrowser.msie &&
            jQuery.mbBrowser.version < 9 &&
            (this.opt.opacity = 1),
          (YTPlayer.isSelf = "self" == YTPlayer.opt.containment),
          (YTPlayer.defaultOpt.containment = YTPlayer.opt.containment =
            jQuery(
              "self" == YTPlayer.opt.containment
                ? this
                : YTPlayer.opt.containment
            )),
          (YTPlayer.isBackground = YTPlayer.opt.containment.is("body")),
          !YTPlayer.isBackground || !ytp.backgroundIsInited)
        ) {
          var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
          (YTPlayer.canPlayOnMobile =
            isPlayer && 0 === jQuery(this).children().length),
            (YTPlayer.isPlayer = !1),
            isPlayer ? (YTPlayer.isPlayer = !0) : $YTPlayer.hide();
          var overlay = jQuery("<div/>")
            .css({
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            })
            .addClass("YTPOverlay");
          YTPlayer.isPlayer &&
            overlay.on("click", function () {
              $YTPlayer.YTPTogglePlay();
            });
          var wrapper = jQuery("<div/>")
            .addClass("mbYTP_wrapper")
            .attr("id", "wrapper_" + YTPlayer.id);
          wrapper.css({
            position: "absolute",
            zIndex: 0,
            minWidth: "100%",
            minHeight: "100%",
            left: 0,
            top: 0,
            overflow: "hidden",
            opacity: 0,
          });
          var playerBox = jQuery("<div/>")
            .attr("id", playerID)
            .addClass("playerBox");
          if (
            (playerBox.css({
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              overflow: "hidden",
            }),
            wrapper.append(playerBox),
            YTPlayer.opt.containment
              .children()
              .not("script, style")
              .each(function () {
                "static" == jQuery(this).css("position") &&
                  jQuery(this).css("position", "relative");
              }),
            YTPlayer.isBackground
              ? (jQuery("body").css({ boxSizing: "border-box" }),
                wrapper.css({ position: "fixed", top: 0, left: 0, zIndex: 0 }),
                $YTPlayer.hide())
              : "static" == YTPlayer.opt.containment.css("position") &&
                YTPlayer.opt.containment.css({ position: "relative" }),
            YTPlayer.opt.containment.prepend(wrapper),
            (YTPlayer.wrapper = wrapper),
            playerBox.css({ opacity: 1 }),
            playerBox.after(overlay),
            (YTPlayer.overlay = overlay),
            jQuery.isTablet &&
              jQuery("body").one("touchstart", function () {
                YTPlayer.player.playVideo();
              }),
            YTPlayer.isBackground ||
              overlay
                .on("mouseenter", function () {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.addClass("visible");
                })
                .on("mouseleave", function () {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.removeClass("visible");
                }),
            ytp.YTAPIReady)
          )
            setTimeout(function () {
              jQuery(document).trigger("YTAPIReady");
            }, 100);
          else {
            jQuery("#YTAPI").remove();
            var tag = jQuery("<script/>").attr({
              async: "async",
              src:
                jQuery.mbYTPlayer.locationProtocol +
                "//www.youtube.com/iframe_api?v=" +
                jQuery.mbYTPlayer.version,
              id: "YTAPI",
            });
            jQuery("head").prepend(tag);
          }
          if (
            (console.debug(
              jQuery.mbBrowser.mobile,
              jQuery.isTablet,
              YTPlayer.canPlayOnMobile
            ),
            jQuery.mbBrowser.mobile &&
              !jQuery.isTablet &&
              !YTPlayer.canPlayOnMobile)
          )
            return (
              YTPlayer.opt.mobileFallbackImage &&
                wrapper.css({
                  backgroundImage:
                    "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  opacity: 1,
                }),
              YTPlayer.isPlayer || $YTPlayer.remove(),
              void jQuery(document).trigger("YTPUnavailable")
            );
          jQuery(document).on("YTAPIReady", function () {
            (YTPlayer.isBackground && ytp.backgroundIsInited) ||
              YTPlayer.isInit ||
              (YTPlayer.isBackground && (ytp.backgroundIsInited = !0),
              (YTPlayer.opt.autoPlay =
                "undefined" == typeof YTPlayer.opt.autoPlay
                  ? YTPlayer.isBackground
                    ? !0
                    : !1
                  : YTPlayer.opt.autoPlay),
              (YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100),
              jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),
              jQuery(YTPlayer).on("YTPChanged", function () {
                if (!YTPlayer.isInit) {
                  if (
                    ((YTPlayer.isInit = !0),
                    jQuery.mbBrowser.mobile &&
                      YTPlayer.canPlayOnMobile &&
                      !jQuery.isTablet)
                  ) {
                    if (
                      YTPlayer.opt.containment.outerWidth() >
                      jQuery(window).width()
                    ) {
                      YTPlayer.opt.containment.css({ maxWidth: "100%" });
                      var h = 0.563 * YTPlayer.opt.containment.outerWidth();
                      YTPlayer.opt.containment.css({ maxHeight: h });
                    }
                    return void new YT.Player(playerID, {
                      videoId: YTPlayer.videoID.toString(),
                      width: "100%",
                      height: h,
                      playerVars: playerVars,
                      events: {
                        onReady: function (a) {
                          (YTPlayer.player = a.target),
                            playerBox.css({ opacity: 1 }),
                            YTPlayer.wrapper.css({ opacity: 1 });
                        },
                      },
                    });
                  }
                  new YT.Player(playerID, {
                    videoId: YTPlayer.videoID.toString(),
                    playerVars: playerVars,
                    events: {
                      onReady: function (a) {
                        (YTPlayer.player = a.target),
                          YTPlayer.isReady ||
                            ((YTPlayer.isReady =
                              YTPlayer.isPlayer && !YTPlayer.opt.autoPlay
                                ? !1
                                : !0),
                            (YTPlayer.playerEl = YTPlayer.player.getIframe()),
                            jQuery(YTPlayer.playerEl).unselectable(),
                            $YTPlayer.optimizeDisplay(),
                            jQuery(window)
                              .off("resize.YTP_" + YTPlayer.id)
                              .on("resize.YTP_" + YTPlayer.id, function () {
                                $YTPlayer.optimizeDisplay();
                              }),
                            YTPlayer.opt.remember_last_time &&
                              jQuery(window).on(
                                "unload.YTP_" + YTPlayer.id,
                                function () {
                                  var a = YTPlayer.player.getCurrentTime();
                                  jQuery.mbCookie.set(
                                    "YTPlayer_start_from" + YTPlayer.videoID,
                                    a,
                                    0
                                  );
                                }
                              ),
                            jQuery.mbYTPlayer.checkForState(YTPlayer));
                      },
                      onStateChange: function (event) {
                        if ("function" == typeof event.target.getPlayerState) {
                          var state = event.target.getPlayerState();
                          if (YTPlayer.preventTrigger)
                            return void (YTPlayer.preventTrigger = !1);
                          YTPlayer.state = state;
                          var eventType;
                          switch (state) {
                            case -1:
                              eventType = "YTPUnstarted";
                              break;
                            case 0:
                              eventType = "YTPRealEnd";
                              break;
                            case 1:
                              (eventType = "YTPPlay"),
                                YTPlayer.controlBar.length &&
                                  YTPlayer.controlBar
                                    .find(".mb_YTPPlaypause")
                                    .html(jQuery.mbYTPlayer.controls.pause),
                                "undefined" != typeof _gaq &&
                                  eval(YTPlayer.opt.gaTrack) &&
                                  _gaq.push([
                                    "_trackEvent",
                                    "YTPlayer",
                                    "Play",
                                    YTPlayer.hasData
                                      ? YTPlayer.videoData.title
                                      : YTPlayer.videoID.toString(),
                                  ]),
                                "undefined" != typeof ga &&
                                  eval(YTPlayer.opt.gaTrack) &&
                                  ga(
                                    "send",
                                    "event",
                                    "YTPlayer",
                                    "play",
                                    YTPlayer.hasData
                                      ? YTPlayer.videoData.title
                                      : YTPlayer.videoID.toString()
                                  );
                              break;
                            case 2:
                              (eventType = "YTPPause"),
                                YTPlayer.controlBar.length &&
                                  YTPlayer.controlBar
                                    .find(".mb_YTPPlaypause")
                                    .html(jQuery.mbYTPlayer.controls.play);
                              break;
                            case 3:
                              YTPlayer.player.setPlaybackQuality(
                                YTPlayer.opt.quality
                              ),
                                (eventType = "YTPBuffering"),
                                YTPlayer.controlBar.length &&
                                  YTPlayer.controlBar
                                    .find(".mb_YTPPlaypause")
                                    .html(jQuery.mbYTPlayer.controls.play);
                              break;
                            case 5:
                              eventType = "YTPCued";
                          }
                          var YTPEvent = jQuery.Event(eventType);
                          (YTPEvent.time = YTPlayer.currentTime),
                            YTPlayer.canTrigger &&
                              jQuery(YTPlayer).trigger(YTPEvent);
                        }
                      },
                      onPlaybackQualityChange: function (a) {
                        var b = a.target.getPlaybackQuality(),
                          c = jQuery.Event("YTPQualityChange");
                        (c.quality = b), jQuery(YTPlayer).trigger(c);
                      },
                      onError: function (a) {
                        150 == a.data &&
                          (console.log(
                            "Embedding this video is restricted by Youtube."
                          ),
                          YTPlayer.isPlayList && jQuery(YTPlayer).playNext()),
                          2 == a.data &&
                            YTPlayer.isPlayList &&
                            jQuery(YTPlayer).playNext(),
                          "function" == typeof YTPlayer.opt.onError &&
                            YTPlayer.opt.onError($YTPlayer, a);
                      },
                    },
                  });
                }
              }));
          }),
            $YTPlayer.off("YTPTime.mask"),
            jQuery.mbYTPlayer.applyMask(YTPlayer);
        }
      });
    },
    isOnScreen: function (a) {
      var b = a.wrapper,
        c = $(window).scrollTop(),
        d = c + $(window).height(),
        e = b.offset().top,
        f = e + b.height();
      return d >= f && e >= c;
    },
    getDataFromAPI: function (a) {
      if (
        ((a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID)),
        jQuery(a)
          .off("YTPData.YTPlayer")
          .on("YTPData.YTPlayer", function () {
            if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
              var b =
                a.videoData.thumb_max ||
                a.videoData.thumb_high ||
                a.videoData.thumb_medium;
              a.opt.containment.css({
                background: "rgba(0,0,0,0.5) url(" + b + ") center center",
                backgroundSize: "cover",
              }),
                (a.opt.backgroundUrl = b);
            }
          }),
        a.videoData)
      )
        setTimeout(function () {
          (a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio),
            (a.dataReceived = !0),
            jQuery(a).trigger("YTPChanged");
          var b = jQuery.Event("YTPData");
          b.prop = {};
          for (var c in a.videoData) b.prop[c] = a.videoData[c];
          jQuery(a).trigger(b);
        }, a.opt.fadeOnStartTime),
          (a.hasData = !0);
      else if (jQuery.mbYTPlayer.apiKey)
        jQuery.getJSON(
          jQuery.mbYTPlayer.locationProtocol +
            "//www.googleapis.com/youtube/v3/videos?id=" +
            a.videoID +
            "&key=" +
            jQuery.mbYTPlayer.apiKey +
            "&part=snippet",
          function (b) {
            function c(b) {
              (a.videoData = {}),
                (a.videoData.id = a.videoID),
                (a.videoData.channelTitle = b.channelTitle),
                (a.videoData.title = b.title),
                (a.videoData.description =
                  b.description.length < 400
                    ? b.description
                    : b.description.substring(0, 400) + " ..."),
                (a.videoData.aspectratio =
                  "auto" == a.opt.ratio ? "16/9" : a.opt.ratio),
                (a.opt.ratio = a.videoData.aspectratio),
                (a.videoData.thumb_max = b.thumbnails.maxres
                  ? b.thumbnails.maxres.url
                  : null),
                (a.videoData.thumb_high = b.thumbnails.high
                  ? b.thumbnails.high.url
                  : null),
                (a.videoData.thumb_medium = b.thumbnails.medium
                  ? b.thumbnails.medium.url
                  : null),
                jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData);
            }
            (a.dataReceived = !0),
              jQuery(a).trigger("YTPChanged"),
              c(b.items[0].snippet),
              (a.hasData = !0);
            var d = jQuery.Event("YTPData");
            d.prop = {};
            for (var e in a.videoData) d.prop[e] = a.videoData[e];
            jQuery(a).trigger(d);
          }
        );
      else {
        if (
          (setTimeout(function () {
            jQuery(a).trigger("YTPChanged");
          }, 50),
          a.isPlayer && !a.opt.autoPlay)
        ) {
          var b =
            jQuery.mbYTPlayer.locationProtocol +
            "//i.ytimg.com/vi/" +
            a.videoID +
            "/hqdefault.jpg";
          b &&
            a.opt.containment.css({
              background: "rgba(0,0,0,0.5) url(" + b + ") center center",
              backgroundSize: "cover",
            }),
            (a.opt.backgroundUrl = b);
        }
        (a.videoData = null),
          (a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio);
      }
      !a.isPlayer ||
        a.opt.autoPlay ||
        jQuery.mbBrowser.mobile ||
        jQuery.isTablet ||
        ((a.loading = jQuery("<div/>")
          .addClass("loading")
          .html("Loading")
          .hide()),
        jQuery(a).append(a.loading),
        a.loading.fadeIn());
    },
    removeStoredData: function () {
      jQuery.mbStorage.remove();
    },
    getVideoData: function () {
      var a = this.get(0);
      return a.videoData;
    },
    getVideoID: function () {
      var a = this.get(0);
      return a.videoID || !1;
    },
    setVideoQuality: function (a) {
      var b = this.get(0);
      b.player.setPlaybackQuality(a);
    },
    playlist: function (a, b, c) {
      var d = this,
        e = d.get(0);
      return (
        (e.isPlayList = !0),
        b && (a = jQuery.shuffle(a)),
        e.videoID ||
          ((e.videos = a),
          (e.videoCounter = 0),
          (e.videoLength = a.length),
          jQuery(e).data("property", a[0]),
          jQuery(e).mb_YTPlayer()),
        "function" == typeof c &&
          jQuery(e).one("YTPChanged", function () {
            c(e);
          }),
        jQuery(e).on("YTPEnd", function () {
          jQuery(e).playNext();
        }),
        this
      );
    },
    playNext: function () {
      var a = this.get(0);
      return (
        a.checkForStartAt &&
          (clearInterval(a.checkForStartAt), clearInterval(a.getState)),
        a.videoCounter++,
        a.videoCounter >= a.videoLength && (a.videoCounter = 0),
        jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),
        this
      );
    },
    playPrev: function () {
      var a = this.get(0);
      return (
        a.checkForStartAt &&
          (clearInterval(a.checkForStartAt), clearInterval(a.getState)),
        a.videoCounter--,
        a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1),
        jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),
        this
      );
    },
    playIndex: function (a) {
      var b = this.get(0);
      return (
        (a -= 1),
        b.checkForStartAt &&
          (clearInterval(b.checkForStartAt), clearInterval(b.getState)),
        (b.videoCounter = a),
        b.videoCounter >= b.videoLength - 1 &&
          (b.videoCounter = b.videoLength - 1),
        jQuery(b).YTPChangeMovie(b.videos[b.videoCounter]),
        this
      );
    },
    changeMovie: function (a) {
      var b = this,
        c = b.get(0);
      (c.opt.startAt = 0),
        (c.opt.stopAt = 0),
        (c.opt.mask = !1),
        (c.opt.mute = !0),
        (c.hasData = !1),
        (c.hasChanged = !0),
        (c.player.loopTime = void 0),
        a && jQuery.extend(c.opt, a),
        (c.videoID = getYTPVideoID(c.opt.videoURL).videoID),
        "true" == c.opt.loop && (c.opt.loop = 9999),
        jQuery(c.playerEl).CSSAnimate(
          { opacity: 0 },
          c.opt.fadeOnStartTime,
          function () {
            var a = jQuery.Event("YTPChangeMovie");
            (a.time = c.currentTime),
              (a.videoId = c.videoID),
              jQuery(c).trigger(a),
              jQuery(c)
                .YTPGetPlayer()
                .cueVideoByUrl(
                  encodeURI(
                    jQuery.mbYTPlayer.locationProtocol +
                      "//www.youtube.com/v/" +
                      c.videoID
                  ),
                  1,
                  c.opt.quality
                ),
              jQuery(c).optimizeDisplay(),
              jQuery.mbYTPlayer.checkForState(c),
              jQuery.mbYTPlayer.getDataFromAPI(c);
          }
        ),
        jQuery.mbYTPlayer.applyMask(c);
    },
    getPlayer: function () {
      return jQuery(this).get(0).player;
    },
    playerDestroy: function () {
      var a = this.get(0);
      (ytp.YTAPIReady = !0),
        (ytp.backgroundIsInited = !1),
        (a.isInit = !1),
        (a.videoID = null),
        (a.isReady = !1);
      var b = a.wrapper;
      return (
        b.remove(),
        jQuery("#controlBar_" + a.id).remove(),
        clearInterval(a.checkForStartAt),
        clearInterval(a.getState),
        this
      );
    },
    fullscreen: function (real) {
      function hideMouse() {
        YTPlayer.overlay.css({ cursor: "none" });
      }
      function RunPrefixMethod(a, b) {
        for (
          var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0;
          f < e.length && !a[c];

        ) {
          if (
            ((c = b),
            "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)),
            (c = e[f] + c),
            (d = typeof a[c]),
            "undefined" != d)
          )
            return (e = [e[f]]), "function" == d ? a[c]() : a[c];
          f++;
        }
      }
      function launchFullscreen(a) {
        RunPrefixMethod(a, "RequestFullScreen");
      }
      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") ||
          RunPrefixMethod(document, "IsFullScreen")) &&
          RunPrefixMethod(document, "CancelFullScreen");
      }
      var YTPlayer = this.get(0);
      "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen),
        (real = eval(real));
      var controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isSelf
          ? YTPlayer.opt.containment
          : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.mbBrowser.mozilla
          ? "mozfullscreenchange"
          : jQuery.mbBrowser.webkit
          ? "webkitfullscreenchange"
          : "fullscreenchange";
        jQuery(document)
          .off(fullscreenchange)
          .on(fullscreenchange, function () {
            var a =
              RunPrefixMethod(document, "IsFullScreen") ||
              RunPrefixMethod(document, "FullScreen");
            a
              ? (jQuery(YTPlayer).YTPSetVideoQuality("default"),
                jQuery(YTPlayer).trigger("YTPFullScreenStart"))
              : ((YTPlayer.isAlone = !1),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                videoWrapper.removeClass("YTPFullscreen"),
                videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime
                ),
                videoWrapper.css({ zIndex: 0 }),
                YTPlayer.isBackground
                  ? jQuery("body").after(controls)
                  : YTPlayer.wrapper.before(controls),
                jQuery(window).resize(),
                jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
          });
      }
      return (
        YTPlayer.isAlone
          ? (jQuery(document).off("mousemove.YTPlayer"),
            clearTimeout(YTPlayer.hideCursor),
            YTPlayer.overlay.css({ cursor: "auto" }),
            real
              ? cancelFullscreen()
              : (videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime
                ),
                videoWrapper.css({ zIndex: 0 })),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
            (YTPlayer.isAlone = !1))
          : (jQuery(document).on("mousemove.YTPlayer", function (a) {
              YTPlayer.overlay.css({ cursor: "auto" }),
                clearTimeout(YTPlayer.hideCursor),
                jQuery(a.target).parents().is(".mb_YTPBar") ||
                  (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
            }),
            hideMouse(),
            real
              ? (videoWrapper.css({ opacity: 0 }),
                videoWrapper.addClass("YTPFullscreen"),
                launchFullscreen(videoWrapper.get(0)),
                setTimeout(function () {
                  videoWrapper.CSSAnimate(
                    { opacity: 1 },
                    2 * YTPlayer.opt.fadeOnStartTime
                  ),
                    YTPlayer.wrapper.append(controls),
                    jQuery(YTPlayer).optimizeDisplay(),
                    YTPlayer.player.seekTo(
                      YTPlayer.player.getCurrentTime() + 0.1,
                      !0
                    );
                }, YTPlayer.opt.fadeOnStartTime))
              : videoWrapper
                  .css({ zIndex: 1e4 })
                  .CSSAnimate({ opacity: 1 }, 2 * YTPlayer.opt.fadeOnStartTime),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
            (YTPlayer.isAlone = !0)),
        this
      );
    },
    toggleLoops: function () {
      var a = this.get(0),
        b = a.opt;
      return (
        1 == b.loop
          ? (b.loop = 0)
          : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(),
            (b.loop = 1)),
        this
      );
    },
    play: function () {
      var a = this.get(0);
      if (!a.isReady) return this;
      a.player.playVideo(),
        a.wrapper.CSSAnimate(
          { opacity: a.isAlone ? 1 : a.opt.opacity },
          4 * a.opt.fadeOnStartTime
        ),
        jQuery(a.playerEl).CSSAnimate(
          { opacity: 1 },
          2 * a.opt.fadeOnStartTime
        );
      var b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPPlaypause");
      return (
        c.html(jQuery.mbYTPlayer.controls.pause),
        (a.state = 1),
        (a.orig_background = jQuery(a).css("background-image")),
        this
      );
    },
    togglePlay: function (a) {
      var b = this.get(0);
      return (
        1 == b.state ? this.YTPPause() : this.YTPPlay(),
        "function" == typeof a && a(b.state),
        this
      );
    },
    stop: function () {
      var a = this.get(0),
        b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPPlaypause");
      return (
        c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this
      );
    },
    pause: function () {
      var a = this.get(0);
      return a.player.pauseVideo(), (a.state = 2), this;
    },
    seekTo: function (a) {
      var b = this.get(0);
      return b.player.seekTo(a, !0), this;
    },
    setVolume: function (a) {
      var b = this.get(0);
      return (
        a || b.opt.vol || 0 != b.player.getVolume()
          ? (!a && b.player.getVolume() > 0) || (a && b.opt.vol == a)
            ? b.isMute
              ? jQuery(b).YTPUnmute()
              : jQuery(b).YTPMute()
            : ((b.opt.vol = a),
              b.player.setVolume(b.opt.vol),
              b.volumeBar &&
                b.volumeBar.length &&
                b.volumeBar.updateSliderVal(a))
          : jQuery(b).YTPUnmute(),
        this
      );
    },
    toggleVolume: function () {
      var a = this.get(0);
      if (a)
        return a.player.isMuted()
          ? (jQuery(a).YTPUnmute(), !0)
          : (jQuery(a).YTPMute(), !1);
    },
    mute: function () {
      var a = this.get(0);
      if (!a.isMute) {
        a.player.mute(),
          (a.isMute = !0),
          a.player.setVolume(0),
          a.volumeBar &&
            a.volumeBar.length &&
            a.volumeBar.width() > 10 &&
            a.volumeBar.updateSliderVal(0);
        var b = jQuery("#controlBar_" + a.id),
          c = b.find(".mb_YTPMuteUnmute");
        c.html(jQuery.mbYTPlayer.controls.unmute),
          jQuery(a).addClass("isMuted"),
          a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
        var d = jQuery.Event("YTPMuted");
        return (
          (d.time = a.currentTime), a.canTrigger && jQuery(a).trigger(d), this
        );
      }
    },
    unmute: function () {
      var a = this.get(0);
      if (a.isMute) {
        a.player.unMute(),
          (a.isMute = !1),
          a.player.setVolume(a.opt.vol),
          a.volumeBar &&
            a.volumeBar.length &&
            a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
        var b = jQuery("#controlBar_" + a.id),
          c = b.find(".mb_YTPMuteUnmute");
        c.html(jQuery.mbYTPlayer.controls.mute),
          jQuery(a).removeClass("isMuted"),
          a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
        var d = jQuery.Event("YTPUnmuted");
        return (
          (d.time = a.currentTime), a.canTrigger && jQuery(a).trigger(d), this
        );
      }
    },
    applyFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        (c.filters[a].value = b),
          c.filtersEnabled && jQuery(c).YTPEnableFilters();
      });
    },
    applyFilters: function (a) {
      return this.each(function () {
        var b = this;
        if (!b.isReady)
          return void jQuery(b).on("YTPReady", function () {
            jQuery(b).YTPApplyFilters(a);
          });
        for (var c in a) jQuery(b).YTPApplyFilter(c, a[c]);
        jQuery(b).trigger("YTPFiltersApplied");
      });
    },
    toggleFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        c.filters[a].value
          ? (c.filters[a].value = 0)
          : (c.filters[a].value = b),
          c.filtersEnabled && jQuery(this).YTPEnableFilters();
      });
    },
    toggleFilters: function (a) {
      return this.each(function () {
        var b = this;
        b.filtersEnabled
          ? (jQuery(b).trigger("YTPDisableFilters"),
            jQuery(b).YTPDisableFilters())
          : (jQuery(b).YTPEnableFilters(),
            jQuery(b).trigger("YTPEnableFilters")),
          "function" == typeof a && a(b.filtersEnabled);
      });
    },
    disableFilters: function () {
      return this.each(function () {
        var a = this,
          b = jQuery(a.playerEl);
        b.css("-webkit-filter", ""),
          b.css("filter", ""),
          (a.filtersEnabled = !1);
      });
    },
    enableFilters: function () {
      return this.each(function () {
        var a = this,
          b = jQuery(a.playerEl),
          c = "";
        for (var d in a.filters)
          a.filters[d].value &&
            (c +=
              d.replace("_", "-") +
              "(" +
              a.filters[d].value +
              a.filters[d].unit +
              ") ");
        b.css("-webkit-filter", c), b.css("filter", c), (a.filtersEnabled = !0);
      });
    },
    removeFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        if (("function" == typeof a && ((b = a), (a = null)), a))
          jQuery(this).YTPApplyFilter(a, 0), "function" == typeof b && b(a);
        else
          for (var d in c.filters)
            jQuery(this).YTPApplyFilter(d, 0), "function" == typeof b && b(d);
      });
    },
    getFilters: function () {
      var a = this.get(0);
      return a.filters;
    },
    addMask: function (a) {
      var b = this.get(0),
        c = b.overlay;
      a || (a = b.actualMask);
      var d = jQuery("<img/>")
        .attr("src", a)
        .on("load", function () {
          c.CSSAnimate({ opacity: 0 }, b.opt.fadeOnStartTime, function () {
            (b.hasMask = !0),
              d.remove(),
              c.css({
                backgroundImage: "url(" + a + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }),
              c.CSSAnimate({ opacity: 1 }, b.opt.fadeOnStartTime);
          });
        });
      return this;
    },
    removeMask: function () {
      var a = this.get(0),
        b = a.overlay;
      return (
        b.CSSAnimate({ opacity: 0 }, a.opt.fadeOnStartTime, function () {
          (a.hasMask = !1),
            b.css({
              backgroundImage: "",
              backgroundRepeat: "",
              backgroundPosition: "",
              backgroundSize: "",
            }),
            b.CSSAnimate({ opacity: 1 }, a.opt.fadeOnStartTime);
        }),
        this
      );
    },
    applyMask: function (a) {
      var b = jQuery(a);
      if ((b.off("YTPTime.mask"), a.opt.mask))
        if ("string" == typeof a.opt.mask)
          b.YTPAddMask(a.opt.mask), (a.actualMask = a.opt.mask);
        else if ("object" == typeof a.opt.mask) {
          for (var c in a.opt.mask)
            if (a.opt.mask[c]) {
              jQuery("<img/>").attr("src", a.opt.mask[c]);
            }
          a.opt.mask[0] && b.YTPAddMask(a.opt.mask[0]),
            b.on("YTPTime.mask", function (c) {
              for (var d in a.opt.mask)
                c.time == d &&
                  (a.opt.mask[d]
                    ? (b.YTPAddMask(a.opt.mask[d]),
                      (a.actualMask = a.opt.mask[d]))
                    : b.YTPRemoveMask());
            });
        }
    },
    toggleMask: function () {
      var a = this.get(0),
        b = $(a);
      return a.hasMask ? b.YTPRemoveMask() : b.YTPAddMask(), this;
    },
    manageProgress: function () {
      var a = this.get(0),
        b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPProgress"),
        d = b.find(".mb_YTPLoaded"),
        e = b.find(".mb_YTPseekbar"),
        f = c.outerWidth(),
        g = Math.floor(a.player.getCurrentTime()),
        h = Math.floor(a.player.getDuration()),
        i = (g * f) / h,
        j = 0,
        k = 100 * a.player.getVideoLoadedFraction();
      return (
        d.css({ left: j, width: k + "%" }),
        e.css({ left: 0, width: i }),
        { totalTime: h, currentTime: g }
      );
    },
    buildControls: function (YTPlayer) {
      var data = YTPlayer.opt;
      if (
        ((data.showYTLogo = data.showYTLogo || data.printUrl),
        !jQuery("#controlBar_" + YTPlayer.id).length)
      ) {
        YTPlayer.controlBar = jQuery("<span/>")
          .attr("id", "controlBar_" + YTPlayer.id)
          .addClass("mb_YTPBar")
          .css({
            whiteSpace: "noWrap",
            position: YTPlayer.isBackground ? "fixed" : "absolute",
            zIndex: YTPlayer.isBackground ? 1e4 : 1e3,
          })
          .hide();
        var buttonBar = jQuery("<div/>").addClass("buttonBar"),
          playpause = jQuery(
            "<span>" + jQuery.mbYTPlayer.controls.play + "</span>"
          )
            .addClass("mb_YTPPlaypause ytpicon")
            .click(function () {
              1 == YTPlayer.player.getPlayerState()
                ? jQuery(YTPlayer).YTPPause()
                : jQuery(YTPlayer).YTPPlay();
            }),
          MuteUnmute = jQuery(
            "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>"
          )
            .addClass("mb_YTPMuteUnmute ytpicon")
            .click(function () {
              0 == YTPlayer.player.getVolume()
                ? jQuery(YTPlayer).YTPUnmute()
                : jQuery(YTPlayer).YTPMute();
            }),
          volumeBar = jQuery("<div/>")
            .addClass("mb_YTPVolumeBar")
            .css({ display: "inline-block" });
        YTPlayer.volumeBar = volumeBar;
        var idx = jQuery("<span/>").addClass("mb_YTPTime"),
          vURL = data.videoURL ? data.videoURL : "";
        vURL.indexOf("http") < 0 &&
          (vURL =
            jQuery.mbYTPlayer.locationProtocol +
            "//www.youtube.com/watch?v=" +
            data.videoURL);
        var movieUrl = jQuery("<span/>")
            .html(jQuery.mbYTPlayer.controls.ytLogo)
            .addClass("mb_YTPUrl ytpicon")
            .attr("title", "view on YouTube")
            .on("click", function () {
              window.open(vURL, "viewOnYT");
            }),
          onlyVideo = jQuery("<span/>")
            .html(jQuery.mbYTPlayer.controls.onlyYT)
            .addClass("mb_OnlyYT ytpicon")
            .on("click", function () {
              jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
            }),
          progressBar = jQuery("<div/>")
            .addClass("mb_YTPProgress")
            .css("position", "absolute")
            .click(function (a) {
              timeBar.css({ width: a.clientX - timeBar.offset().left }),
                (YTPlayer.timeW = a.clientX - timeBar.offset().left),
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
              var b = Math.floor(YTPlayer.player.getDuration());
              (YTPlayer["goto"] =
                (timeBar.outerWidth() * b) / progressBar.outerWidth()),
                YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0),
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
            }),
          loadedBar = jQuery("<div/>")
            .addClass("mb_YTPLoaded")
            .css("position", "absolute"),
          timeBar = jQuery("<div/>")
            .addClass("mb_YTPseekbar")
            .css("position", "absolute");
        progressBar.append(loadedBar).append(timeBar),
          buttonBar
            .append(playpause)
            .append(MuteUnmute)
            .append(volumeBar)
            .append(idx),
          data.showYTLogo && buttonBar.append(movieUrl),
          (YTPlayer.isBackground ||
            (eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground)) &&
            buttonBar.append(onlyVideo),
          YTPlayer.controlBar.append(buttonBar).append(progressBar),
          YTPlayer.isBackground
            ? jQuery("body").after(YTPlayer.controlBar)
            : (YTPlayer.controlBar.addClass("inlinePlayer"),
              YTPlayer.wrapper.before(YTPlayer.controlBar)),
          volumeBar.simpleSlider({
            initialval: YTPlayer.opt.vol,
            scale: 100,
            orientation: "h",
            callback: function (a) {
              0 == a.value
                ? jQuery(YTPlayer).YTPMute()
                : jQuery(YTPlayer).YTPUnmute(),
                YTPlayer.player.setVolume(a.value),
                YTPlayer.isMute || (YTPlayer.opt.vol = a.value);
            },
          });
      }
    },
    checkForState: function (YTPlayer) {
      var interval = YTPlayer.opt.showControls ? 100 : 400;
      return (
        clearInterval(YTPlayer.getState),
        jQuery.contains(document, YTPlayer)
          ? (jQuery.mbYTPlayer.checkForStart(YTPlayer),
            void (YTPlayer.getState = setInterval(function () {
              var prog = jQuery(YTPlayer).YTPManageProgress(),
                $YTPlayer = jQuery(YTPlayer),
                data = YTPlayer.opt,
                startAt = YTPlayer.start_from_last
                  ? YTPlayer.start_from_last
                  : YTPlayer.opt.startAt
                  ? YTPlayer.opt.startAt
                  : 1;
              YTPlayer.start_from_last = null;
              var stopAt =
                YTPlayer.opt.stopAt > YTPlayer.opt.startAt
                  ? YTPlayer.opt.stopAt
                  : 0;
              if (
                ((stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0),
                YTPlayer.currentTime != prog.currentTime)
              ) {
                var YTPEvent = jQuery.Event("YTPTime");
                (YTPEvent.time = YTPlayer.currentTime),
                  jQuery(YTPlayer).trigger(YTPEvent);
              }
              if (
                ((YTPlayer.currentTime = prog.currentTime),
                (YTPlayer.totalTime = YTPlayer.player.getDuration()),
                0 == YTPlayer.player.getVolume()
                  ? $YTPlayer.addClass("isMuted")
                  : $YTPlayer.removeClass("isMuted"),
                YTPlayer.opt.showControls &&
                  (prog.totalTime
                    ? YTPlayer.controlBar
                        .find(".mb_YTPTime")
                        .html(
                          jQuery.mbYTPlayer.formatTime(prog.currentTime) +
                            " / " +
                            jQuery.mbYTPlayer.formatTime(prog.totalTime)
                        )
                    : YTPlayer.controlBar
                        .find(".mb_YTPTime")
                        .html("-- : -- / -- : --")),
                eval(YTPlayer.opt.stopMovieOnBlur) &&
                  (document.hasFocus()
                    ? document.hasFocus() &&
                      !YTPlayer.hasFocus &&
                      -1 != YTPlayer.state &&
                      0 != YTPlayer.state &&
                      ((YTPlayer.hasFocus = !0), $YTPlayer.YTPPlay())
                    : 1 == YTPlayer.state &&
                      ((YTPlayer.hasFocus = !1), $YTPlayer.YTPPause())),
                YTPlayer.opt.playOnlyIfVisible)
              ) {
                var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
                isOnScreen || 1 != YTPlayer.state
                  ? YTPlayer.hasFocus ||
                    -1 == YTPlayer.state ||
                    0 == YTPlayer.state ||
                    ((YTPlayer.hasFocus = !0), $YTPlayer.YTPPlay())
                  : ((YTPlayer.hasFocus = !1),
                    $YTPlayer.YTPPause(),
                    console.debug(YTPlayer.id, isOnScreen),
                    console.debug(YTPlayer.state));
              }
              if (
                (YTPlayer.controlBar.length &&
                YTPlayer.controlBar.outerWidth() <= 400 &&
                !YTPlayer.isCompact
                  ? (YTPlayer.controlBar.addClass("compact"),
                    (YTPlayer.isCompact = !0),
                    !YTPlayer.isMute &&
                      YTPlayer.volumeBar &&
                      YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol))
                  : YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.outerWidth() > 400 &&
                    YTPlayer.isCompact &&
                    (YTPlayer.controlBar.removeClass("compact"),
                    (YTPlayer.isCompact = !1),
                    !YTPlayer.isMute &&
                      YTPlayer.volumeBar &&
                      YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
                1 == YTPlayer.player.getPlayerState() &&
                  (parseFloat(YTPlayer.player.getDuration() - 0.5) <
                    YTPlayer.player.getCurrentTime() ||
                    (stopAt > 0 &&
                      parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)))
              ) {
                if (YTPlayer.isEnded) return;
                if (
                  ((YTPlayer.isEnded = !0),
                  setTimeout(function () {
                    YTPlayer.isEnded = !1;
                  }, 1e3),
                  YTPlayer.isPlayList)
                ) {
                  if (
                    !data.loop ||
                    (data.loop > 0 &&
                      YTPlayer.player.loopTime === data.loop - 1)
                  ) {
                    (YTPlayer.player.loopTime = void 0),
                      clearInterval(YTPlayer.getState);
                    var YTPEnd = jQuery.Event("YTPEnd");
                    return (
                      (YTPEnd.time = YTPlayer.currentTime),
                      void jQuery(YTPlayer).trigger(YTPEnd)
                    );
                  }
                } else if (
                  !data.loop ||
                  (data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)
                )
                  return (
                    (YTPlayer.player.loopTime = void 0),
                    (YTPlayer.preventTrigger = !0),
                    (YTPlayer.state = 2),
                    jQuery(YTPlayer).YTPPause(),
                    void YTPlayer.wrapper.CSSAnimate(
                      { opacity: 0 },
                      YTPlayer.opt.fadeOnStartTime,
                      function () {
                        YTPlayer.controlBar.length &&
                          YTPlayer.controlBar
                            .find(".mb_YTPPlaypause")
                            .html(jQuery.mbYTPlayer.controls.play);
                        var a = jQuery.Event("YTPEnd");
                        (a.time = YTPlayer.currentTime),
                          jQuery(YTPlayer).trigger(a),
                          YTPlayer.player.seekTo(startAt, !0),
                          YTPlayer.isBackground
                            ? YTPlayer.orig_background &&
                              jQuery(YTPlayer).css(
                                "background-image",
                                YTPlayer.orig_background
                              )
                            : YTPlayer.opt.backgroundUrl &&
                              YTPlayer.isPlayer &&
                              ((YTPlayer.opt.backgroundUrl =
                                YTPlayer.opt.backgroundUrl ||
                                YTPlayer.orig_background),
                              YTPlayer.opt.containment.css({
                                background:
                                  "url(" +
                                  YTPlayer.opt.backgroundUrl +
                                  ") center center",
                                backgroundSize: "cover",
                              }));
                      }
                    )
                  );
                (YTPlayer.player.loopTime = YTPlayer.player.loopTime
                  ? ++YTPlayer.player.loopTime
                  : 1),
                  (startAt = startAt || 1),
                  (YTPlayer.preventTrigger = !0),
                  (YTPlayer.state = 2),
                  jQuery(YTPlayer).YTPPause(),
                  YTPlayer.player.seekTo(startAt, !0),
                  $YTPlayer.YTPPlay();
              }
            }, interval)))
          : (jQuery(YTPlayer).YTPPlayerDestroy(),
            clearInterval(YTPlayer.getState),
            void clearInterval(YTPlayer.checkForStartAt))
      );
    },
    getTime: function () {
      var a = this.get(0);
      return jQuery.mbYTPlayer.formatTime(a.currentTime);
    },
    getTotalTime: function () {
      var a = this.get(0);
      return jQuery.mbYTPlayer.formatTime(a.totalTime);
    },
    checkForStart: function (a) {
      var b = jQuery(a);
      if (!jQuery.contains(document, a))
        return void jQuery(a).YTPPlayerDestroy();
      if (
        ((a.preventTrigger = !0),
        (a.state = 2),
        jQuery(a).YTPPause(),
        jQuery(a).muteYTPVolume(),
        jQuery("#controlBar_" + a.id).remove(),
        (a.controlBar = !1),
        a.opt.showControls && jQuery.mbYTPlayer.buildControls(a),
        a.overlay)
      )
        if (a.opt.addRaster) {
          var c = "dot" == a.opt.addRaster ? "raster-dot" : "raster";
          a.overlay.addClass(a.isRetina ? c + " retina" : c);
        } else
          a.overlay.removeClass(function (a, b) {
            var c = b.split(" "),
              d = [];
            return (
              jQuery.each(c, function (a, b) {
                /raster.*/.test(b) && d.push(b);
              }),
              d.push("retina"),
              d.join(" ")
            );
          });
      var d = a.start_from_last
        ? a.start_from_last
        : a.opt.startAt
        ? a.opt.startAt
        : 1;
      (a.start_from_last = null),
        a.player.playVideo(),
        a.player.seekTo(d, !0),
        clearInterval(a.checkForStartAt),
        (a.checkForStartAt = setInterval(function () {
          jQuery(a).YTPMute();
          var c =
            a.player.getVideoLoadedFraction() >= d / a.player.getDuration();
          if (
            a.player.getDuration() > 0 &&
            a.player.getCurrentTime() >= d &&
            c
          ) {
            clearInterval(a.checkForStartAt),
              "function" == typeof a.opt.onReady && a.opt.onReady(a),
              (a.isReady = !0);
            var e = jQuery.Event("YTPReady");
            if (
              ((e.time = a.currentTime),
              jQuery(a).trigger(e),
              (a.preventTrigger = !0),
              (a.state = 2),
              jQuery(a).YTPPause(),
              a.opt.mute || jQuery(a).YTPUnmute(),
              (a.canTrigger = !0),
              a.opt.autoPlay)
            ) {
              var f = jQuery.Event("YTPStart");
              (f.time = a.currentTime),
                jQuery(a).trigger(f),
                jQuery(a.playerEl).CSSAnimate({ opacity: 1 }, 1e3),
                b.YTPPlay(),
                a.wrapper.CSSAnimate(
                  { opacity: a.isAlone ? 1 : a.opt.opacity },
                  2 * a.opt.fadeOnStartTime
                ),
                "mac" == jQuery.mbBrowser.os.name &&
                  jQuery.mbBrowser.safari &&
                  jQuery.mbBrowser.versionCompare(
                    jQuery.mbBrowser.fullVersion,
                    "10.1"
                  ) < 0 &&
                  (a.safariPlay = setInterval(function () {
                    1 != a.state ? b.YTPPlay() : clearInterval(a.safariPlay);
                  }, 10)),
                b.one("YTPReady", function () {
                  b.YTPPlay();
                });
            } else
              a.player.pauseVideo(),
                a.isPlayer ||
                  (jQuery(a.playerEl).CSSAnimate(
                    { opacity: 1 },
                    a.opt.fadeOnStartTime
                  ),
                  a.wrapper.CSSAnimate(
                    { opacity: a.isAlone ? 1 : a.opt.opacity },
                    a.opt.fadeOnStartTime
                  )),
                a.controlBar.length &&
                  a.controlBar
                    .find(".mb_YTPPlaypause")
                    .html(jQuery.mbYTPlayer.controls.play);
            a.isPlayer &&
              !a.opt.autoPlay &&
              a.loading &&
              a.loading.length &&
              (a.loading.html("Ready"),
              setTimeout(function () {
                a.loading.fadeOut();
              }, 100)),
              a.controlBar &&
                a.controlBar.length &&
                a.controlBar.slideDown(1e3);
          } else "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.fullVersion && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (a.player.playVideo(), d >= 0 && a.player.seekTo(d, !0));
        }, 10));
    },
    setAnchor: function (a) {
      var b = this;
      b.optimizeDisplay(a);
    },
    getAnchor: function () {
      var a = this.get(0);
      return a.opt.anchor;
    },
    formatTime: function (a) {
      var b = Math.floor(a / 60),
        c = Math.floor(a - 60 * b);
      return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c);
    },
  }),
    (jQuery.fn.optimizeDisplay = function (anchor) {
      var YTPlayer = this.get(0),
        playerBox = jQuery(YTPlayer.playerEl),
        vid = {};
      (YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor),
        (YTPlayer.opt.anchor =
          "undefined " != typeof YTPlayer.opt.anchor
            ? YTPlayer.opt.anchor
            : "center,center");
      var YTPAlign = YTPlayer.opt.anchor.split(",");
      if (YTPlayer.opt.optimizeDisplay) {
        var abundance = YTPlayer.isPlayer ? 0 : 180,
          win = {},
          el = YTPlayer.wrapper;
        (win.width = el.outerWidth()),
          (win.height = el.outerHeight() + abundance),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (vid.width = win.width),
          (vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio)),
          (vid.marginTop = Math.ceil(-((vid.height - win.height) / 2))),
          (vid.marginLeft = 0);
        var lowest = vid.height < win.height;
        lowest &&
          ((vid.height = win.height),
          (vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio)),
          (vid.marginTop = 0),
          (vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2))));
        for (var a in YTPAlign)
          if (YTPAlign.hasOwnProperty(a)) {
            var al = YTPAlign[a].replace(/ /g, "");
            switch (al) {
              case "top":
                vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                break;
              case "bottom":
                vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                break;
              case "left":
                vid.marginLeft = 0;
                break;
              case "right":
                vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                break;
              default:
                vid.width > win.width &&
                  (vid.marginLeft = -((vid.width - win.width) / 2));
            }
          }
      } else
        (vid.width = "100%"),
          (vid.height = "100%"),
          (vid.marginTop = 0),
          (vid.marginLeft = 0);
      playerBox.css({
        width: vid.width,
        height: vid.height,
        marginTop: vid.marginTop,
        marginLeft: vid.marginLeft,
        maxWidth: "initial",
      });
    }),
    (jQuery.shuffle = function (a) {
      for (var b = a.slice(), c = b.length, d = c; d--; ) {
        var e = parseInt(Math.random() * c),
          f = b[d];
        (b[d] = b[e]), (b[e] = f);
      }
      return b;
    }),
    (jQuery.fn.unselectable = function () {
      return this.each(function () {
        jQuery(this)
          .css({
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          })
          .attr("unselectable", "on");
      });
    }),
    (jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie),
    (jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play),
    (jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay),
    (jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop),
    (jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause),
    (jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist),
    (jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex),
    (jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute),
    (jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume),
    (jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData),
    (jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter),
    (jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters),
    (jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter),
    (jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters),
    (jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter),
    (jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters),
    (jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters),
    (jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters),
    (jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime),
    (jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime),
    (jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask),
    (jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask),
    (jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask),
    (jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor),
    (jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor),
    (jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.playNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie),
    (jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls),
    (jQuery.fn.playYTP = jQuery.mbYTPlayer.play),
    (jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop),
    (jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause),
    (jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute),
    (jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData);
})(jQuery, ytp),
  (jQuery.support.CSStransition = (function () {
    var a = document.body || document.documentElement,
      b = a.style;
    return (
      void 0 !== b.transition ||
      void 0 !== b.WebkitTransition ||
      void 0 !== b.MozTransition ||
      void 0 !== b.MsTransition ||
      void 0 !== b.OTransition
    );
  })()),
  (jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
      blur: { min: 0, max: 100, unit: "px" },
      brightness: { min: 0, max: 400, unit: "%" },
      contrast: { min: 0, max: 400, unit: "%" },
      grayscale: { min: 0, max: 100, unit: "%" },
      hueRotate: { min: 0, max: 360, unit: "deg" },
      invert: { min: 0, max: 100, unit: "%" },
      saturate: { min: 0, max: 400, unit: "%" },
      sepia: { min: 0, max: 100, unit: "%" },
    },
    normalizeCss: function (a) {
      var b = jQuery.extend(!0, {}, a);
      jQuery.browser.webkit || jQuery.browser.opera
        ? (jQuery.CSS.sfx = "-webkit-")
        : jQuery.browser.mozilla
        ? (jQuery.CSS.sfx = "-moz-")
        : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
      for (var c in b) {
        "transform" === c &&
          ((b[jQuery.CSS.sfx + "transform"] = b[c]), delete b[c]),
          "transform-origin" === c &&
            ((b[jQuery.CSS.sfx + "transform-origin"] = a[c]), delete b[c]),
          "filter" !== c ||
            jQuery.browser.mozilla ||
            ((b[jQuery.CSS.sfx + "filter"] = a[c]), delete b[c]),
          "blur" === c && setFilter(b, "blur", a[c]),
          "brightness" === c && setFilter(b, "brightness", a[c]),
          "contrast" === c && setFilter(b, "contrast", a[c]),
          "grayscale" === c && setFilter(b, "grayscale", a[c]),
          "hueRotate" === c && setFilter(b, "hueRotate", a[c]),
          "invert" === c && setFilter(b, "invert", a[c]),
          "saturate" === c && setFilter(b, "saturate", a[c]),
          "sepia" === c && setFilter(b, "sepia", a[c]);
        var d = "";
        "x" === c &&
          ((d = jQuery.CSS.sfx + "transform"),
          (b[d] = b[d] || ""),
          (b[d] += " translateX(" + setUnit(a[c], "px") + ")"),
          delete b[c]),
          "y" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " translateY(" + setUnit(a[c], "px") + ")"),
            delete b[c]),
          "z" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " translateZ(" + setUnit(a[c], "px") + ")"),
            delete b[c]),
          "rotate" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotate(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "rotateX" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotateX(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "rotateY" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotateY(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "rotateZ" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "scale" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scale(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "scaleX" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scaleX(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "scaleY" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scaleY(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "scaleZ" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " scaleZ(" + setUnit(a[c], "") + ")"),
            delete b[c]),
          "skew" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " skew(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "skewX" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " skewX(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "skewY" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " skewY(" + setUnit(a[c], "deg") + ")"),
            delete b[c]),
          "perspective" === c &&
            ((d = jQuery.CSS.sfx + "transform"),
            (b[d] = b[d] || ""),
            (b[d] += " perspective(" + setUnit(a[c], "px") + ")"),
            delete b[c]);
      }
      return b;
    },
    getProp: function (a) {
      var b = [];
      for (var c in a) b.indexOf(c) < 0 && b.push(uncamel(c));
      return b.join(",");
    },
    animate: function (a, b, c, d, e) {
      return this.each(function () {
        function f() {
          (g.called = !0),
            (g.CSSAIsRunning = !1),
            h.off(jQuery.CSS.transitionEnd + "." + g.id),
            clearTimeout(g.timeout),
            h.css(jQuery.CSS.sfx + "transition", ""),
            "function" == typeof e && e.apply(g),
            "function" == typeof g.CSSqueue &&
              (g.CSSqueue(), (g.CSSqueue = null));
        }
        var g = this,
          h = jQuery(this);
        g.id = g.id || "CSSA_" + new Date().getTime();
        var i = i || { type: "noEvent" };
        if (
          g.CSSAIsRunning &&
          g.eventType == i.type &&
          !jQuery.browser.msie &&
          jQuery.browser.version <= 9
        )
          return void (g.CSSqueue = function () {
            h.CSSAnimate(a, b, c, d, e);
          });
        if (
          ((g.CSSqueue = null), (g.eventType = i.type), 0 !== h.length && a)
        ) {
          if (
            ((a = jQuery.normalizeCss(a)),
            (g.CSSAIsRunning = !0),
            "function" == typeof b &&
              ((e = b), (b = jQuery.fx.speeds._default)),
            "function" == typeof c && ((d = c), (c = 0)),
            "string" == typeof c && ((e = c), (c = 0)),
            "function" == typeof d &&
              ((e = d), (d = "cubic-bezier(0.65,0.03,0.36,0.72)")),
            "string" == typeof b)
          )
            for (var j in jQuery.fx.speeds) {
              if (b == j) {
                b = jQuery.fx.speeds[j];
                break;
              }
              b = jQuery.fx.speeds._default;
            }
          if (
            (b || (b = jQuery.fx.speeds._default),
            "string" == typeof e && ((d = e), (e = null)),
            !jQuery.support.CSStransition)
          ) {
            for (var k in a) {
              if (
                ("transform" === k && delete a[k],
                "filter" === k && delete a[k],
                "transform-origin" === k && delete a[k],
                "auto" === a[k] && delete a[k],
                "x" === k)
              ) {
                var l = a[k],
                  m = "left";
                (a[m] = l), delete a[k];
              }
              if ("y" === k) {
                var l = a[k],
                  m = "top";
                (a[m] = l), delete a[k];
              }
              ("-ms-transform" === k || "-ms-filter" === k) && delete a[k];
            }
            return void h.delay(c).animate(a, b, e);
          }
          var n = {
            default: "ease",
            in: "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
          };
          n[d] && (d = n[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id);
          var o = jQuery.CSS.getProp(a),
            p = {};
          jQuery.extend(p, a),
            (p[jQuery.CSS.sfx + "transition-property"] = o),
            (p[jQuery.CSS.sfx + "transition-duration"] = b + "ms"),
            (p[jQuery.CSS.sfx + "transition-delay"] = c + "ms"),
            (p[jQuery.CSS.sfx + "transition-timing-function"] = d),
            setTimeout(function () {
              h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(p);
            }, 1),
            (g.timeout = setTimeout(function () {
              return g.called || !e
                ? ((g.called = !1), void (g.CSSAIsRunning = !1))
                : (h.css(jQuery.CSS.sfx + "transition", ""),
                  e.apply(g),
                  (g.CSSAIsRunning = !1),
                  void (
                    "function" == typeof g.CSSqueue &&
                    (g.CSSqueue(), (g.CSSqueue = null))
                  ));
            }, b + c + 10));
        }
      });
    },
  }),
  (jQuery.fn.CSSAnimate = jQuery.CSS.animate),
  (jQuery.normalizeCss = jQuery.CSS.normalizeCss),
  (jQuery.fn.css3 = function (a) {
    return this.each(function () {
      var b = jQuery(this),
        c = jQuery.normalizeCss(a);
      b.css(c);
    });
  });
var nAgt = navigator.userAgent;
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function () {
  var a = { version: "Unknown version", name: "Unknown OS" };
  return (
    -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") &&
      0 > navigator.appVersion.indexOf("Mobile") &&
      (a.name = "Mac"),
    -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"),
    /Mac OS X/.test(nAgt) &&
      !/Mobile/.test(nAgt) &&
      ((a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]),
      (a.version = a.version.replace(/_/g, ".").substring(0, 5))),
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"),
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"),
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"),
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"),
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"),
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"),
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"),
    (a.name = a.name.toLowerCase()),
    (a.major_version = "Unknown"),
    (a.minor_version = "Unknown"),
    "Unknown.Unknown" != a.version &&
      ((a.major_version = parseFloat(a.version.split(".")[0])),
      (a.minor_version = parseFloat(a.version.split(".")[1]))),
    a
  );
};
(jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = "Microsoft Edge"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = "Chrome"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = "androidStock"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = "Firefox"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function (a, b) {
    if ("stringstring" != typeof a + typeof b) return !1;
    for (
      var c = a.split("."),
        d = b.split("."),
        e = 0,
        f = Math.max(c.length, d.length);
      f > e;
      e++
    ) {
      if (
        (c[e] && !d[e] && 0 < parseInt(c[e])) ||
        parseInt(c[e]) > parseInt(d[e])
      )
        return 1;
      if (
        (d[e] && !c[e] && 0 < parseInt(d[e])) ||
        parseInt(c[e]) < parseInt(d[e])
      )
        return -1;
    }
    return 0;
  }),
  (function (a) {
    (a.simpleSlider = {
      defaults: {
        initialval: 0,
        scale: 100,
        orientation: "h",
        readonly: !1,
        callback: !1,
      },
      events: {
        start: a.browser.mobile ? "touchstart" : "mousedown",
        end: a.browser.mobile ? "touchend" : "mouseup",
        move: a.browser.mobile ? "touchmove" : "mousemove",
      },
      init: function (b) {
        return this.each(function () {
          var c = this,
            d = a(c);
          d.addClass("simpleSlider"),
            (c.opt = {}),
            a.extend(c.opt, a.simpleSlider.defaults, b),
            a.extend(c.opt, d.data());
          var e = "h" == c.opt.orientation ? "horizontal" : "vertical",
            e = a("<div/>").addClass("level").addClass(e);
          d.prepend(e),
            (c.level = e),
            d.css({ cursor: "default" }),
            "auto" == c.opt.scale && (c.opt.scale = a(c).outerWidth()),
            d.updateSliderVal(),
            c.opt.readonly ||
              (d.on(a.simpleSlider.events.start, function (b) {
                a.browser.mobile && (b = b.changedTouches[0]),
                  (c.canSlide = !0),
                  d.updateSliderVal(b),
                  "h" == c.opt.orientation
                    ? d.css({ cursor: "col-resize" })
                    : d.css({ cursor: "row-resize" }),
                  b.preventDefault(),
                  b.stopPropagation();
              }),
              a(document)
                .on(a.simpleSlider.events.move, function (b) {
                  a.browser.mobile && (b = b.changedTouches[0]),
                    c.canSlide &&
                      (a(document).css({ cursor: "default" }),
                      d.updateSliderVal(b),
                      b.preventDefault(),
                      b.stopPropagation());
                })
                .on(a.simpleSlider.events.end, function () {
                  a(document).css({ cursor: "auto" }),
                    (c.canSlide = !1),
                    d.css({ cursor: "auto" });
                }));
        });
      },
      updateSliderVal: function (b) {
        var c = this.get(0);
        if (c.opt) {
          c.opt.initialval =
            "number" == typeof c.opt.initialval
              ? c.opt.initialval
              : c.opt.initialval(c);
          var d = a(c).outerWidth(),
            e = a(c).outerHeight();
          (c.x =
            "object" == typeof b
              ? b.clientX + document.body.scrollLeft - this.offset().left
              : "number" == typeof b
              ? (b * d) / c.opt.scale
              : (c.opt.initialval * d) / c.opt.scale),
            (c.y =
              "object" == typeof b
                ? b.clientY + document.body.scrollTop - this.offset().top
                : "number" == typeof b
                ? ((c.opt.scale - c.opt.initialval - b) * e) / c.opt.scale
                : (c.opt.initialval * e) / c.opt.scale),
            (c.y = this.outerHeight() - c.y),
            (c.scaleX = (c.x * c.opt.scale) / d),
            (c.scaleY = (c.y * c.opt.scale) / e),
            (c.outOfRangeX =
              c.scaleX > c.opt.scale
                ? c.scaleX - c.opt.scale
                : 0 > c.scaleX
                ? c.scaleX
                : 0),
            (c.outOfRangeY =
              c.scaleY > c.opt.scale
                ? c.scaleY - c.opt.scale
                : 0 > c.scaleY
                ? c.scaleY
                : 0),
            (c.outOfRange =
              "h" == c.opt.orientation ? c.outOfRangeX : c.outOfRangeY),
            (c.value =
              "undefined" != typeof b
                ? "h" == c.opt.orientation
                  ? c.x >= this.outerWidth()
                    ? c.opt.scale
                    : 0 >= c.x
                    ? 0
                    : c.scaleX
                  : c.y >= this.outerHeight()
                  ? c.opt.scale
                  : 0 >= c.y
                  ? 0
                  : c.scaleY
                : "h" == c.opt.orientation
                ? c.scaleX
                : c.scaleY),
            "h" == c.opt.orientation
              ? c.level.width(Math.floor((100 * c.x) / d) + "%")
              : c.level.height(Math.floor((100 * c.y) / e)),
            "function" == typeof c.opt.callback && c.opt.callback(c);
        }
      },
    }),
      (a.fn.simpleSlider = a.simpleSlider.init),
      (a.fn.updateSliderVal = a.simpleSlider.updateSliderVal);
  })(jQuery),
  (function (a) {
    (a.mbCookie = {
      set: function (a, b, c, d) {
        "object" == typeof b && (b = JSON.stringify(b)),
          (d = d ? "; domain=" + d : "");
        var e = new Date(),
          f = "";
        c > 0 &&
          (e.setTime(e.getTime() + 864e5 * c),
          (f = "; expires=" + e.toGMTString())),
          (document.cookie = a + "=" + b + f + "; path=/" + d);
      },
      get: function (a) {
        a += "=";
        for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
          for (var d = b[c]; " " == d.charAt(0); ) d = d.substring(1, d.length);
          if (0 == d.indexOf(a))
            try {
              return JSON.parse(d.substring(a.length, d.length));
            } catch (e) {
              return d.substring(a.length, d.length);
            }
        }
        return null;
      },
      remove: function (b) {
        a.mbCookie.set(b, "", -1);
      },
    }),
      (a.mbStorage = {
        set: function (a, b) {
          "object" == typeof b && (b = JSON.stringify(b)),
            localStorage.setItem(a, b);
        },
        get: function (a) {
          if (!localStorage[a]) return null;
          try {
            return JSON.parse(localStorage[a]);
          } catch (b) {
            return localStorage[a];
          }
        },
        remove: function (a) {
          a ? localStorage.removeItem(a) : localStorage.clear();
        },
      });
  })(jQuery);
/**
 * ScrollReveal
 * ------------
 * Version : 3.3.6
 * Website : scrollrevealjs.org
 * Repo    : github.com/jlmakes/scrollreveal.js
 * Author  : Julian Lloyd (@jlmakes)
 */
!(function () {
  "use strict";
  function e(n) {
    return "undefined" == typeof this ||
      Object.getPrototypeOf(this) !== e.prototype
      ? new e(n)
      : ((O = this),
        (O.version = "3.3.6"),
        (O.tools = new E()),
        O.isSupported()
          ? (O.tools.extend(O.defaults, n || {}),
            (O.defaults.container = t(O.defaults)),
            (O.store = { elements: {}, containers: [] }),
            (O.sequences = {}),
            (O.history = []),
            (O.uid = 0),
            (O.initialized = !1))
          : "undefined" != typeof console && null !== console,
        O);
  }
  function t(e) {
    if (e && e.container) {
      if ("string" == typeof e.container)
        return window.document.documentElement.querySelector(e.container);
      if (O.tools.isNode(e.container)) return e.container;
    }
    return O.defaults.container;
  }
  function n(e, t) {
    return "string" == typeof e
      ? Array.prototype.slice.call(t.querySelectorAll(e))
      : O.tools.isNode(e)
      ? [e]
      : O.tools.isNodeList(e)
      ? Array.prototype.slice.call(e)
      : [];
  }
  function i() {
    return ++O.uid;
  }
  function o(e, t, n) {
    t.container && (t.container = n),
      e.config
        ? (e.config = O.tools.extendClone(e.config, t))
        : (e.config = O.tools.extendClone(O.defaults, t)),
      "top" === e.config.origin || "bottom" === e.config.origin
        ? (e.config.axis = "Y")
        : (e.config.axis = "X");
  }
  function r(e) {
    var t = window.getComputedStyle(e.domEl);
    e.styles ||
      ((e.styles = { transition: {}, transform: {}, computed: {} }),
      (e.styles.inline = e.domEl.getAttribute("style") || ""),
      (e.styles.inline += "; visibility: visible; "),
      (e.styles.computed.opacity = t.opacity),
      t.transition && "all 0s ease 0s" !== t.transition
        ? (e.styles.computed.transition = t.transition + ", ")
        : (e.styles.computed.transition = "")),
      (e.styles.transition.instant = s(e, 0)),
      (e.styles.transition.delayed = s(e, e.config.delay)),
      (e.styles.transform.initial = " -webkit-transform:"),
      (e.styles.transform.target = " -webkit-transform:"),
      a(e),
      (e.styles.transform.initial += "transform:"),
      (e.styles.transform.target += "transform:"),
      a(e);
  }
  function s(e, t) {
    var n = e.config;
    return (
      "-webkit-transition: " +
      e.styles.computed.transition +
      "-webkit-transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; transition: " +
      e.styles.computed.transition +
      "transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; "
    );
  }
  function a(e) {
    var t,
      n = e.config,
      i = e.styles.transform;
    (t =
      "top" === n.origin || "left" === n.origin
        ? /^-/.test(n.distance)
          ? n.distance.substr(1)
          : "-" + n.distance
        : n.distance),
      parseInt(n.distance) &&
        ((i.initial += " translate" + n.axis + "(" + t + ")"),
        (i.target += " translate" + n.axis + "(0)")),
      n.scale &&
        ((i.initial += " scale(" + n.scale + ")"), (i.target += " scale(1)")),
      n.rotate.x &&
        ((i.initial += " rotateX(" + n.rotate.x + "deg)"),
        (i.target += " rotateX(0)")),
      n.rotate.y &&
        ((i.initial += " rotateY(" + n.rotate.y + "deg)"),
        (i.target += " rotateY(0)")),
      n.rotate.z &&
        ((i.initial += " rotateZ(" + n.rotate.z + "deg)"),
        (i.target += " rotateZ(0)")),
      (i.initial += "; opacity: " + n.opacity + ";"),
      (i.target += "; opacity: " + e.styles.computed.opacity + ";");
  }
  function l(e) {
    var t = e.config.container;
    t &&
      O.store.containers.indexOf(t) === -1 &&
      O.store.containers.push(e.config.container),
      (O.store.elements[e.id] = e);
  }
  function c(e, t, n) {
    var i = { target: e, config: t, interval: n };
    O.history.push(i);
  }
  function f() {
    if (O.isSupported()) {
      y();
      for (var e = 0; e < O.store.containers.length; e++)
        O.store.containers[e].addEventListener("scroll", d),
          O.store.containers[e].addEventListener("resize", d);
      O.initialized ||
        (window.addEventListener("scroll", d),
        window.addEventListener("resize", d),
        (O.initialized = !0));
    }
    return O;
  }
  function d() {
    T(y);
  }
  function u() {
    var e, t, n, i;
    O.tools.forOwn(O.sequences, function (o) {
      (i = O.sequences[o]), (e = !1);
      for (var r = 0; r < i.elemIds.length; r++)
        (n = i.elemIds[r]), (t = O.store.elements[n]), q(t) && !e && (e = !0);
      i.active = e;
    });
  }
  function y() {
    var e, t;
    u(),
      O.tools.forOwn(O.store.elements, function (n) {
        (t = O.store.elements[n]),
          (e = w(t)),
          g(t)
            ? (t.config.beforeReveal(t.domEl),
              e
                ? t.domEl.setAttribute(
                    "style",
                    t.styles.inline +
                      t.styles.transform.target +
                      t.styles.transition.delayed
                  )
                : t.domEl.setAttribute(
                    "style",
                    t.styles.inline +
                      t.styles.transform.target +
                      t.styles.transition.instant
                  ),
              p("reveal", t, e),
              (t.revealing = !0),
              (t.seen = !0),
              t.sequence && m(t, e))
            : v(t) &&
              (t.config.beforeReset(t.domEl),
              t.domEl.setAttribute(
                "style",
                t.styles.inline +
                  t.styles.transform.initial +
                  t.styles.transition.instant
              ),
              p("reset", t),
              (t.revealing = !1));
      });
  }
  function m(e, t) {
    var n = 0,
      i = 0,
      o = O.sequences[e.sequence.id];
    (o.blocked = !0),
      t && "onload" === e.config.useDelay && (i = e.config.delay),
      e.sequence.timer &&
        ((n = Math.abs(e.sequence.timer.started - new Date())),
        window.clearTimeout(e.sequence.timer)),
      (e.sequence.timer = { started: new Date() }),
      (e.sequence.timer.clock = window.setTimeout(function () {
        (o.blocked = !1), (e.sequence.timer = null), d();
      }, Math.abs(o.interval) + i - n));
  }
  function p(e, t, n) {
    var i = 0,
      o = 0,
      r = "after";
    switch (e) {
      case "reveal":
        (o = t.config.duration), n && (o += t.config.delay), (r += "Reveal");
        break;
      case "reset":
        (o = t.config.duration), (r += "Reset");
    }
    t.timer &&
      ((i = Math.abs(t.timer.started - new Date())),
      window.clearTimeout(t.timer.clock)),
      (t.timer = { started: new Date() }),
      (t.timer.clock = window.setTimeout(function () {
        t.config[r](t.domEl), (t.timer = null);
      }, o - i));
  }
  function g(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return t.active && !t.blocked && !e.revealing && !e.disabled;
    }
    return q(e) && !e.revealing && !e.disabled;
  }
  function w(e) {
    var t = e.config.useDelay;
    return (
      "always" === t ||
      ("onload" === t && !O.initialized) ||
      ("once" === t && !e.seen)
    );
  }
  function v(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return !t.active && e.config.reset && e.revealing && !e.disabled;
    }
    return !q(e) && e.config.reset && e.revealing && !e.disabled;
  }
  function b(e) {
    return { width: e.clientWidth, height: e.clientHeight };
  }
  function h(e) {
    if (e && e !== window.document.documentElement) {
      var t = x(e);
      return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top };
    }
    return { x: window.pageXOffset, y: window.pageYOffset };
  }
  function x(e) {
    var t = 0,
      n = 0,
      i = e.offsetHeight,
      o = e.offsetWidth;
    do
      isNaN(e.offsetTop) || (t += e.offsetTop),
        isNaN(e.offsetLeft) || (n += e.offsetLeft),
        (e = e.offsetParent);
    while (e);
    return { top: t, left: n, height: i, width: o };
  }
  function q(e) {
    function t() {
      var t = c + a * s,
        n = f + l * s,
        i = d - a * s,
        y = u - l * s,
        m = r.y + e.config.viewOffset.top,
        p = r.x + e.config.viewOffset.left,
        g = r.y - e.config.viewOffset.bottom + o.height,
        w = r.x - e.config.viewOffset.right + o.width;
      return t < g && i > m && n < w && y > p;
    }
    function n() {
      return "fixed" === window.getComputedStyle(e.domEl).position;
    }
    var i = x(e.domEl),
      o = b(e.config.container),
      r = h(e.config.container),
      s = e.config.viewFactor,
      a = i.height,
      l = i.width,
      c = i.top,
      f = i.left,
      d = c + a,
      u = f + l;
    return t() || n();
  }
  function E() {}
  var O, T;
  (e.prototype.defaults = {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 0,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 0.9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container: window.document.documentElement,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    beforeReveal: function (e) {},
    beforeReset: function (e) {},
    afterReveal: function (e) {},
    afterReset: function (e) {},
  }),
    (e.prototype.isSupported = function () {
      var e = document.documentElement.style;
      return (
        ("WebkitTransition" in e && "WebkitTransform" in e) ||
        ("transition" in e && "transform" in e)
      );
    }),
    (e.prototype.reveal = function (e, s, a, d) {
      var u, y, m, p, g, w;
      if (
        (void 0 !== s && "number" == typeof s
          ? ((a = s), (s = {}))
          : (void 0 !== s && null !== s) || (s = {}),
        (u = t(s)),
        (y = n(e, u)),
        !y.length)
      )
        return O;
      a &&
        "number" == typeof a &&
        ((w = i()),
        (g = O.sequences[w] = { id: w, interval: a, elemIds: [], active: !1 }));
      for (var v = 0; v < y.length; v++)
        (p = y[v].getAttribute("data-sr-id")),
          p
            ? (m = O.store.elements[p])
            : ((m = { id: i(), domEl: y[v], seen: !1, revealing: !1 }),
              m.domEl.setAttribute("data-sr-id", m.id)),
          g &&
            ((m.sequence = { id: g.id, index: g.elemIds.length }),
            g.elemIds.push(m.id)),
          o(m, s, u),
          r(m),
          l(m),
          (O.tools.isMobile() && !m.config.mobile) || !O.isSupported()
            ? (m.domEl.setAttribute("style", m.styles.inline),
              (m.disabled = !0))
            : m.revealing ||
              m.domEl.setAttribute(
                "style",
                m.styles.inline + m.styles.transform.initial
              );
      return (
        !d &&
          O.isSupported() &&
          (c(e, s, a),
          O.initTimeout && window.clearTimeout(O.initTimeout),
          (O.initTimeout = window.setTimeout(f, 0))),
        O
      );
    }),
    (e.prototype.sync = function () {
      if (O.history.length && O.isSupported()) {
        for (var e = 0; e < O.history.length; e++) {
          var t = O.history[e];
          O.reveal(t.target, t.config, t.interval, !0);
        }
        f();
      }
      return O;
    }),
    (E.prototype.isObject = function (e) {
      return null !== e && "object" == typeof e && e.constructor === Object;
    }),
    (E.prototype.isNode = function (e) {
      return "object" == typeof window.Node
        ? e instanceof window.Node
        : e &&
            "object" == typeof e &&
            "number" == typeof e.nodeType &&
            "string" == typeof e.nodeName;
    }),
    (E.prototype.isNodeList = function (e) {
      var t = Object.prototype.toString.call(e),
        n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
      return "object" == typeof window.NodeList
        ? e instanceof window.NodeList
        : e &&
            "object" == typeof e &&
            n.test(t) &&
            "number" == typeof e.length &&
            (0 === e.length || this.isNode(e[0]));
    }),
    (E.prototype.forOwn = function (e, t) {
      if (!this.isObject(e))
        throw new TypeError(
          'Expected "object", but received "' + typeof e + '".'
        );
      for (var n in e) e.hasOwnProperty(n) && t(n);
    }),
    (E.prototype.extend = function (e, t) {
      return (
        this.forOwn(
          t,
          function (n) {
            this.isObject(t[n])
              ? ((e[n] && this.isObject(e[n])) || (e[n] = {}),
                this.extend(e[n], t[n]))
              : (e[n] = t[n]);
          }.bind(this)
        ),
        e
      );
    }),
    (E.prototype.extendClone = function (e, t) {
      return this.extend(this.extend({}, e), t);
    }),
    (E.prototype.isMobile = function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }),
    (T =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }),
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? define(function () {
          return e;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : (window.ScrollReveal = e);
})();
/*!
 * jQuery Cycle2; version: 2.1.6 build: 20141007
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
!(function (a) {
  "use strict";
  function b(a) {
    return (a || "").toLowerCase();
  }
  var c = "2.1.6";
  (a.fn.cycle = function (c) {
    var d;
    return 0 !== this.length || a.isReady
      ? this.each(function () {
          var d,
            e,
            f,
            g,
            h = a(this),
            i = a.fn.cycle.log;
          if (!h.data("cycle.opts")) {
            (h.data("cycle-log") === !1 ||
              (c && c.log === !1) ||
              (e && e.log === !1)) &&
              (i = a.noop),
              i("--c2 init--"),
              (d = h.data());
            for (var j in d)
              d.hasOwnProperty(j) &&
                /^cycle[A-Z]+/.test(j) &&
                ((g = d[j]),
                (f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
                i(f + ":", g, "(" + typeof g + ")"),
                (d[f] = g));
            (e = a.extend({}, a.fn.cycle.defaults, d, c || {})),
              (e.timeoutId = 0),
              (e.paused = e.paused || !1),
              (e.container = h),
              (e._maxZ = e.maxZ),
              (e.API = a.extend({ _container: h }, a.fn.cycle.API)),
              (e.API.log = i),
              (e.API.trigger = function (a, b) {
                return e.container.trigger(a, b), e.API;
              }),
              h.data("cycle.opts", e),
              h.data("cycle.API", e.API),
              e.API.trigger("cycle-bootstrap", [e, e.API]),
              e.API.addInitialSlides(),
              e.API.preInitSlideshow(),
              e.slides.length && e.API.initSlideshow();
          }
        })
      : ((d = { s: this.selector, c: this.context }),
        a.fn.cycle.log("requeuing slideshow (dom not ready)"),
        a(function () {
          a(d.s, d.c).cycle(c);
        }),
        this);
  }),
    (a.fn.cycle.API = {
      opts: function () {
        return this._container.data("cycle.opts");
      },
      addInitialSlides: function () {
        var b = this.opts(),
          c = b.slides;
        (b.slideCount = 0),
          (b.slides = a()),
          (c = c.jquery ? c : b.container.find(c)),
          b.random &&
            c.sort(function () {
              return Math.random() - 0.5;
            }),
          b.API.add(c);
      },
      preInitSlideshow: function () {
        var b = this.opts();
        b.API.trigger("cycle-pre-initialize", [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.preInit) && c.preInit(b), (b._preInitialized = !0);
      },
      postInitSlideshow: function () {
        var b = this.opts();
        b.API.trigger("cycle-post-initialize", [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.postInit) && c.postInit(b);
      },
      initSlideshow: function () {
        var b,
          c = this.opts(),
          d = c.container;
        c.API.calcFirstSlide(),
          "static" == c.container.css("position") &&
            c.container.css("position", "relative"),
          a(c.slides[c.currSlide]).css({
            opacity: 1,
            display: "block",
            visibility: "visible",
          }),
          c.API.stackSlides(
            c.slides[c.currSlide],
            c.slides[c.nextSlide],
            !c.reverse
          ),
          c.pauseOnHover &&
            (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)),
            d.hover(
              function () {
                c.API.pause(!0);
              },
              function () {
                c.API.resume(!0);
              }
            )),
          c.timeout &&
            ((b = c.API.getSlideOpts(c.currSlide)),
            c.API.queueTransition(b, b.timeout + c.delay)),
          (c._initialized = !0),
          c.API.updateView(!0),
          c.API.trigger("cycle-initialized", [c]),
          c.API.postInitSlideshow();
      },
      pause: function (b) {
        var c = this.opts(),
          d = c.API.getSlideOpts(),
          e = c.hoverPaused || c.paused;
        b ? (c.hoverPaused = !0) : (c.paused = !0),
          e ||
            (c.container.addClass("cycle-paused"),
            c.API.trigger("cycle-paused", [c]).log("cycle-paused"),
            d.timeout &&
              (clearTimeout(c.timeoutId),
              (c.timeoutId = 0),
              (c._remainingTimeout -= a.now() - c._lastQueue),
              (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) &&
                (c._remainingTimeout = void 0)));
      },
      resume: function (a) {
        var b = this.opts(),
          c = !b.hoverPaused && !b.paused;
        a ? (b.hoverPaused = !1) : (b.paused = !1),
          c ||
            (b.container.removeClass("cycle-paused"),
            0 === b.slides.filter(":animated").length &&
              b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout),
            b.API.trigger("cycle-resumed", [b, b._remainingTimeout]).log(
              "cycle-resumed"
            ));
      },
      add: function (b, c) {
        var d,
          e = this.opts(),
          f = e.slideCount,
          g = !1;
        "string" == a.type(b) && (b = a.trim(b)),
          a(b).each(function () {
            var b,
              d = a(this);
            c ? e.container.prepend(d) : e.container.append(d),
              e.slideCount++,
              (b = e.API.buildSlideOpts(d)),
              (e.slides = c ? a(d).add(e.slides) : e.slides.add(d)),
              e.API.initSlide(b, d, --e._maxZ),
              d.data("cycle.opts", b),
              e.API.trigger("cycle-slide-added", [e, b, d]);
          }),
          e.API.updateView(!0),
          (g = e._preInitialized && 2 > f && e.slideCount >= 1),
          g &&
            (e._initialized
              ? e.timeout &&
                ((d = e.slides.length),
                (e.nextSlide = e.reverse ? d - 1 : 1),
                e.timeoutId || e.API.queueTransition(e))
              : e.API.initSlideshow());
      },
      calcFirstSlide: function () {
        var a,
          b = this.opts();
        (a = parseInt(b.startingSlide || 0, 10)),
          (a >= b.slides.length || 0 > a) && (a = 0),
          (b.currSlide = a),
          b.reverse
            ? ((b.nextSlide = a - 1),
              b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1))
            : ((b.nextSlide = a + 1),
              b.nextSlide == b.slides.length && (b.nextSlide = 0));
      },
      calcNextSlide: function () {
        var a,
          b = this.opts();
        b.reverse
          ? ((a = b.nextSlide - 1 < 0),
            (b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1),
            (b.currSlide = a ? 0 : b.nextSlide + 1))
          : ((a = b.nextSlide + 1 == b.slides.length),
            (b.nextSlide = a ? 0 : b.nextSlide + 1),
            (b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1));
      },
      calcTx: function (b, c) {
        var d,
          e = b;
        return (
          e._tempFx
            ? (d = a.fn.cycle.transitions[e._tempFx])
            : c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]),
          d || (d = a.fn.cycle.transitions[e.fx]),
          (e._tempFx = null),
          (this.opts()._tempFx = null),
          d ||
            ((d = a.fn.cycle.transitions.fade),
            e.API.log('Transition "' + e.fx + '" not found.  Using fade.')),
          d
        );
      },
      prepareTx: function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = this.opts();
        return h.slideCount < 2
          ? void (h.timeoutId = 0)
          : (!a ||
              (h.busy && !h.manualTrump) ||
              (h.API.stopTransition(),
              (h.busy = !1),
              clearTimeout(h.timeoutId),
              (h.timeoutId = 0)),
            void (
              h.busy ||
              ((0 !== h.timeoutId || a) &&
                ((d = h.slides[h.currSlide]),
                (e = h.slides[h.nextSlide]),
                (f = h.API.getSlideOpts(h.nextSlide)),
                (g = h.API.calcTx(f, a)),
                (h._tx = g),
                a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed),
                h.nextSlide != h.currSlide &&
                (a || (!h.paused && !h.hoverPaused && h.timeout))
                  ? (h.API.trigger("cycle-before", [f, d, e, b]),
                    g.before && g.before(f, d, e, b),
                    (c = function () {
                      (h.busy = !1),
                        h.container.data("cycle.opts") &&
                          (g.after && g.after(f, d, e, b),
                          h.API.trigger("cycle-after", [f, d, e, b]),
                          h.API.queueTransition(f),
                          h.API.updateView(!0));
                    }),
                    (h.busy = !0),
                    g.transition
                      ? g.transition(f, d, e, b, c)
                      : h.API.doTransition(f, d, e, b, c),
                    h.API.calcNextSlide(),
                    h.API.updateView())
                  : h.API.queueTransition(f)))
            ));
      },
      doTransition: function (b, c, d, e, f) {
        var g = b,
          h = a(c),
          i = a(d),
          j = function () {
            i.animate(
              g.animIn || { opacity: 1 },
              g.speed,
              g.easeIn || g.easing,
              f
            );
          };
        i.css(g.cssBefore || {}),
          h.animate(
            g.animOut || {},
            g.speed,
            g.easeOut || g.easing,
            function () {
              h.css(g.cssAfter || {}), g.sync || j();
            }
          ),
          g.sync && j();
      },
      queueTransition: function (b, c) {
        var d = this.opts(),
          e = void 0 !== c ? c : b.timeout;
        return 0 === d.nextSlide && 0 === --d.loop
          ? (d.API.log("terminating; loop=0"),
            (d.timeout = 0),
            e
              ? setTimeout(function () {
                  d.API.trigger("cycle-finished", [d]);
                }, e)
              : d.API.trigger("cycle-finished", [d]),
            void (d.nextSlide = d.currSlide))
          : void 0 !== d.continueAuto &&
            (d.continueAuto === !1 ||
              (a.isFunction(d.continueAuto) && d.continueAuto() === !1))
          ? (d.API.log("terminating automatic transitions"),
            (d.timeout = 0),
            void (d.timeoutId && clearTimeout(d.timeoutId)))
          : void (
              e &&
              ((d._lastQueue = a.now()),
              void 0 === c && (d._remainingTimeout = b.timeout),
              d.paused ||
                d.hoverPaused ||
                (d.timeoutId = setTimeout(function () {
                  d.API.prepareTx(!1, !d.reverse);
                }, e)))
            );
      },
      stopTransition: function () {
        var a = this.opts();
        a.slides.filter(":animated").length &&
          (a.slides.stop(!1, !0),
          a.API.trigger("cycle-transition-stopped", [a])),
          a._tx && a._tx.stopTransition && a._tx.stopTransition(a);
      },
      advanceSlide: function (a) {
        var b = this.opts();
        return (
          clearTimeout(b.timeoutId),
          (b.timeoutId = 0),
          (b.nextSlide = b.currSlide + a),
          b.nextSlide < 0
            ? (b.nextSlide = b.slides.length - 1)
            : b.nextSlide >= b.slides.length && (b.nextSlide = 0),
          b.API.prepareTx(!0, a >= 0),
          !1
        );
      },
      buildSlideOpts: function (c) {
        var d,
          e,
          f = this.opts(),
          g = c.data() || {};
        for (var h in g)
          g.hasOwnProperty(h) &&
            /^cycle[A-Z]+/.test(h) &&
            ((d = g[h]),
            (e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
            f.API.log(
              "[" + (f.slideCount - 1) + "]",
              e + ":",
              d,
              "(" + typeof d + ")"
            ),
            (g[e] = d));
        (g = a.extend({}, a.fn.cycle.defaults, f, g)),
          (g.slideNum = f.slideCount);
        try {
          delete g.API,
            delete g.slideCount,
            delete g.currSlide,
            delete g.nextSlide,
            delete g.slides;
        } catch (i) {}
        return g;
      },
      getSlideOpts: function (b) {
        var c = this.opts();
        void 0 === b && (b = c.currSlide);
        var d = c.slides[b],
          e = a(d).data("cycle.opts");
        return a.extend({}, c, e);
      },
      initSlide: function (b, c, d) {
        var e = this.opts();
        c.css(b.slideCss || {}),
          d > 0 && c.css("zIndex", d),
          isNaN(b.speed) &&
            (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default),
          b.sync || (b.speed = b.speed / 2),
          c.addClass(e.slideClass);
      },
      updateView: function (a, b) {
        var c = this.opts();
        if (c._initialized) {
          var d = c.API.getSlideOpts(),
            e = c.slides[c.currSlide];
          (!a &&
            b !== !0 &&
            (c.API.trigger("cycle-update-view-before", [c, d, e]),
            c.updateView < 0)) ||
            (c.slideActiveClass &&
              c.slides
                .removeClass(c.slideActiveClass)
                .eq(c.currSlide)
                .addClass(c.slideActiveClass),
            a &&
              c.hideNonActive &&
              c.slides
                .filter(":not(." + c.slideActiveClass + ")")
                .css("visibility", "hidden"),
            0 === c.updateView &&
              setTimeout(function () {
                c.API.trigger("cycle-update-view", [c, d, e, a]);
              }, d.speed / (c.sync ? 2 : 1)),
            0 !== c.updateView &&
              c.API.trigger("cycle-update-view", [c, d, e, a]),
            a && c.API.trigger("cycle-update-view-after", [c, d, e]));
        }
      },
      getComponent: function (b) {
        var c = this.opts(),
          d = c[b];
        return "string" == typeof d
          ? /^\s*[\>|\+|~]/.test(d)
            ? c.container.find(d)
            : a(d)
          : d.jquery
          ? d
          : a(d);
      },
      stackSlides: function (b, c, d) {
        var e = this.opts();
        b ||
          ((b = e.slides[e.currSlide]),
          (c = e.slides[e.nextSlide]),
          (d = !e.reverse)),
          a(b).css("zIndex", e.maxZ);
        var f,
          g = e.maxZ - 2,
          h = e.slideCount;
        if (d) {
          for (f = e.currSlide + 1; h > f; f++)
            a(e.slides[f]).css("zIndex", g--);
          for (f = 0; f < e.currSlide; f++) a(e.slides[f]).css("zIndex", g--);
        } else {
          for (f = e.currSlide - 1; f >= 0; f--)
            a(e.slides[f]).css("zIndex", g--);
          for (f = h - 1; f > e.currSlide; f--)
            a(e.slides[f]).css("zIndex", g--);
        }
        a(c).css("zIndex", e.maxZ - 1);
      },
      getSlideIndex: function (a) {
        return this.opts().slides.index(a);
      },
    }),
    (a.fn.cycle.log = function () {
      window.console &&
        console.log &&
        console.log("[cycle2] " + Array.prototype.join.call(arguments, " "));
    }),
    (a.fn.cycle.version = function () {
      return "Cycle2: " + c;
    }),
    (a.fn.cycle.transitions = {
      custom: {},
      none: {
        before: function (a, b, c, d) {
          a.API.stackSlides(c, b, d),
            (a.cssBefore = {
              opacity: 1,
              visibility: "visible",
              display: "block",
            });
        },
      },
      fade: {
        before: function (b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 0,
              visibility: "visible",
              display: "block",
            })),
            (b.animIn = { opacity: 1 }),
            (b.animOut = { opacity: 0 });
        },
      },
      fadeout: {
        before: function (b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 1,
              visibility: "visible",
              display: "block",
            })),
            (b.animOut = { opacity: 0 });
        },
      },
      scrollHorz: {
        before: function (a, b, c, d) {
          a.API.stackSlides(b, c, d);
          var e = a.container.css("overflow", "hidden").width();
          (a.cssBefore = {
            left: d ? e : -e,
            top: 0,
            opacity: 1,
            visibility: "visible",
            display: "block",
          }),
            (a.cssAfter = { zIndex: a._maxZ - 2, left: 0 }),
            (a.animIn = { left: 0 }),
            (a.animOut = { left: d ? -e : e });
        },
      },
    }),
    (a.fn.cycle.defaults = {
      allowWrap: !0,
      autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
      delay: 0,
      easing: null,
      fx: "fade",
      hideNonActive: !0,
      loop: 0,
      manualFx: void 0,
      manualSpeed: void 0,
      manualTrump: !0,
      maxZ: 100,
      pauseOnHover: !1,
      reverse: !1,
      slideActiveClass: "cycle-slide-active",
      slideClass: "cycle-slide",
      slideCss: { position: "absolute", top: 0, left: 0 },
      slides: "> img",
      speed: 500,
      startingSlide: 0,
      sync: !0,
      timeout: 4e3,
      updateView: 0,
    }),
    a(document).ready(function () {
      a(a.fn.cycle.defaults.autoSelector).cycle();
    });
})(
  jQuery
) /*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */,
  (function (a) {
    "use strict";
    function b(b, d) {
      var e,
        f,
        g,
        h = d.autoHeight;
      if ("container" == h)
        (f = a(d.slides[d.currSlide]).outerHeight()), d.container.height(f);
      else if (d._autoHeightRatio)
        d.container.height(d.container.width() / d._autoHeightRatio);
      else if ("calc" === h || ("number" == a.type(h) && h >= 0)) {
        if (
          ((g = "calc" === h ? c(b, d) : h >= d.slides.length ? 0 : h),
          g == d._sentinelIndex)
        )
          return;
        (d._sentinelIndex = g),
          d._sentinel && d._sentinel.remove(),
          (e = a(d.slides[g].cloneNode(!0))),
          e
            .removeAttr("id name rel")
            .find("[id],[name],[rel]")
            .removeAttr("id name rel"),
          e
            .css({ position: "static", visibility: "hidden", display: "block" })
            .prependTo(d.container)
            .addClass("cycle-sentinel cycle-slide")
            .removeClass("cycle-slide-active"),
          e.find("*").css("visibility", "hidden"),
          (d._sentinel = e);
      }
    }
    function c(b, c) {
      var d = 0,
        e = -1;
      return (
        c.slides.each(function (b) {
          var c = a(this).height();
          c > e && ((e = c), (d = b));
        }),
        d
      );
    }
    function d(b, c, d, e) {
      var f = a(e).outerHeight();
      c.container.animate({ height: f }, c.autoHeightSpeed, c.autoHeightEasing);
    }
    function e(c, f) {
      f._autoHeightOnResize &&
        (a(window).off("resize orientationchange", f._autoHeightOnResize),
        (f._autoHeightOnResize = null)),
        f.container.off("cycle-slide-added cycle-slide-removed", b),
        f.container.off("cycle-destroyed", e),
        f.container.off("cycle-before", d),
        f._sentinel && (f._sentinel.remove(), (f._sentinel = null));
    }
    a.extend(a.fn.cycle.defaults, {
      autoHeight: 0,
      autoHeightSpeed: 250,
      autoHeightEasing: null,
    }),
      a(document).on("cycle-initialized", function (c, f) {
        function g() {
          b(c, f);
        }
        var h,
          i = f.autoHeight,
          j = a.type(i),
          k = null;
        ("string" === j || "number" === j) &&
          (f.container.on("cycle-slide-added cycle-slide-removed", b),
          f.container.on("cycle-destroyed", e),
          "container" == i
            ? f.container.on("cycle-before", d)
            : "string" === j &&
              /\d+\:\d+/.test(i) &&
              ((h = i.match(/(\d+)\:(\d+)/)),
              (h = h[1] / h[2]),
              (f._autoHeightRatio = h)),
          "number" !== j &&
            ((f._autoHeightOnResize = function () {
              clearTimeout(k), (k = setTimeout(g, 50));
            }),
            a(window).on("resize orientationchange", f._autoHeightOnResize)),
          setTimeout(g, 30));
      });
  })(jQuery) /*! caption plugin for Cycle2;  version: 20130306 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
      caption: "> .cycle-caption",
      captionTemplate: "{{slideNum}} / {{slideCount}}",
      overlay: "> .cycle-overlay",
      overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
      captionModule: "caption",
    }),
      a(document).on("cycle-update-view", function (b, c, d, e) {
        if ("caption" === c.captionModule) {
          a.each(["caption", "overlay"], function () {
            var a = this,
              b = d[a + "Template"],
              f = c.API.getComponent(a);
            f.length && b
              ? (f.html(c.API.tmpl(b, d, c, e)), f.show())
              : f.hide();
          });
        }
      }),
      a(document).on("cycle-destroyed", function (b, c) {
        var d;
        a.each(["caption", "overlay"], function () {
          var a = this,
            b = c[a + "Template"];
          c[a] && b && ((d = c.API.getComponent("caption")), d.empty());
        });
      });
  })(jQuery) /*! command plugin for Cycle2;  version: 20140415 */,
  (function (a) {
    "use strict";
    var b = a.fn.cycle;
    (a.fn.cycle = function (c) {
      var d,
        e,
        f,
        g = a.makeArray(arguments);
      return "number" == a.type(c)
        ? this.cycle("goto", c)
        : "string" == a.type(c)
        ? this.each(function () {
            var h;
            return (
              (d = c),
              (f = a(this).data("cycle.opts")),
              void 0 === f
                ? void b.log(
                    'slideshow must be initialized before sending commands; "' +
                      d +
                      '" ignored'
                  )
                : ((d = "goto" == d ? "jump" : d),
                  (e = f.API[d]),
                  a.isFunction(e)
                    ? ((h = a.makeArray(g)), h.shift(), e.apply(f.API, h))
                    : void b.log("unknown command: ", d))
            );
          })
        : b.apply(this, arguments);
    }),
      a.extend(a.fn.cycle, b),
      a.extend(b.API, {
        next: function () {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? -1 : 1;
            (a.allowWrap === !1 && a.currSlide + b >= a.slideCount) ||
              (a.API.advanceSlide(b),
              a.API.trigger("cycle-next", [a]).log("cycle-next"));
          }
        },
        prev: function () {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? 1 : -1;
            (a.allowWrap === !1 && a.currSlide + b < 0) ||
              (a.API.advanceSlide(b),
              a.API.trigger("cycle-prev", [a]).log("cycle-prev"));
          }
        },
        destroy: function () {
          this.stop();
          var b = this.opts(),
            c = a.isFunction(a._data) ? a._data : a.noop;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stop(),
            b.API.trigger("cycle-destroyed", [b]).log("cycle-destroyed"),
            b.container.removeData(),
            c(b.container[0], "parsedAttrs", !1),
            b.retainStylesOnDestroy ||
              (b.container.removeAttr("style"),
              b.slides.removeAttr("style"),
              b.slides.removeClass(b.slideActiveClass)),
            b.slides.each(function () {
              var d = a(this);
              d.removeData(),
                d.removeClass(b.slideClass),
                c(this, "parsedAttrs", !1);
            });
        },
        jump: function (a, b) {
          var c,
            d = this.opts();
          if (!d.busy || d.manualTrump) {
            var e = parseInt(a, 10);
            if (isNaN(e) || 0 > e || e >= d.slides.length)
              return void d.API.log("goto: invalid slide index: " + e);
            if (e == d.currSlide)
              return void d.API.log("goto: skipping, already on slide", e);
            (d.nextSlide = e),
              clearTimeout(d.timeoutId),
              (d.timeoutId = 0),
              d.API.log("goto: ", e, " (zero-index)"),
              (c = d.currSlide < d.nextSlide),
              (d._tempFx = b),
              d.API.prepareTx(!0, c);
          }
        },
        stop: function () {
          var b = this.opts(),
            c = b.container;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stopTransition(),
            b.pauseOnHover &&
              (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)),
              c.off("mouseenter mouseleave")),
            b.API.trigger("cycle-stopped", [b]).log("cycle-stopped");
        },
        reinit: function () {
          var a = this.opts();
          a.API.destroy(), a.container.cycle();
        },
        remove: function (b) {
          for (
            var c, d, e = this.opts(), f = [], g = 1, h = 0;
            h < e.slides.length;
            h++
          )
            (c = e.slides[h]),
              h == b
                ? (d = c)
                : (f.push(c), (a(c).data("cycle.opts").slideNum = g), g++);
          d &&
            ((e.slides = a(f)),
            e.slideCount--,
            a(d).remove(),
            b == e.currSlide
              ? e.API.advanceSlide(1)
              : b < e.currSlide
              ? e.currSlide--
              : e.currSlide++,
            e.API.trigger("cycle-slide-removed", [e, b, d]).log(
              "cycle-slide-removed"
            ),
            e.API.updateView());
        },
      }),
      a(document).on("click.cycle", "[data-cycle-cmd]", function (b) {
        b.preventDefault();
        var c = a(this),
          d = c.data("cycle-cmd"),
          e = c.data("cycle-context") || ".cycle-slideshow";
        a(e).cycle(d, c.data("cycle-arg"));
      });
  })(jQuery) /*! hash plugin for Cycle2;  version: 20130905 */,
  (function (a) {
    "use strict";
    function b(b, c) {
      var d;
      return b._hashFence
        ? void (b._hashFence = !1)
        : ((d = window.location.hash.substring(1)),
          void b.slides.each(function (e) {
            if (a(this).data("cycle-hash") == d) {
              if (c === !0) b.startingSlide = e;
              else {
                var f = b.currSlide < e;
                (b.nextSlide = e), b.API.prepareTx(!0, f);
              }
              return !1;
            }
          }));
    }
    a(document).on("cycle-pre-initialize", function (c, d) {
      b(d, !0),
        (d._onHashChange = function () {
          b(d, !1);
        }),
        a(window).on("hashchange", d._onHashChange);
    }),
      a(document).on("cycle-update-view", function (a, b, c) {
        c.hash &&
          "#" + c.hash != window.location.hash &&
          ((b._hashFence = !0), (window.location.hash = c.hash));
      }),
      a(document).on("cycle-destroyed", function (b, c) {
        c._onHashChange && a(window).off("hashchange", c._onHashChange);
      });
  })(jQuery) /*! loader plugin for Cycle2;  version: 20131121 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { loader: !1 }),
      a(document).on("cycle-bootstrap", function (b, c) {
        function d(b, d) {
          function f(b) {
            var f;
            "wait" == c.loader
              ? (h.push(b),
                0 === j &&
                  (h.sort(g),
                  e.apply(c.API, [h, d]),
                  c.container.removeClass("cycle-loading")))
              : ((f = a(c.slides[c.currSlide])),
                e.apply(c.API, [b, d]),
                f.show(),
                c.container.removeClass("cycle-loading"));
          }
          function g(a, b) {
            return a.data("index") - b.data("index");
          }
          var h = [];
          if ("string" == a.type(b)) b = a.trim(b);
          else if ("array" === a.type(b))
            for (var i = 0; i < b.length; i++) b[i] = a(b[i])[0];
          b = a(b);
          var j = b.length;
          j &&
            (b
              .css("visibility", "hidden")
              .appendTo("body")
              .each(function (b) {
                function g() {
                  0 === --i && (--j, f(k));
                }
                var i = 0,
                  k = a(this),
                  l = k.is("img") ? k : k.find("img");
                return (
                  k.data("index", b),
                  (l = l
                    .filter(":not(.cycle-loader-ignore)")
                    .filter(':not([src=""])')),
                  l.length
                    ? ((i = l.length),
                      void l.each(function () {
                        this.complete
                          ? g()
                          : a(this)
                              .load(function () {
                                g();
                              })
                              .on("error", function () {
                                0 === --i &&
                                  (c.API.log(
                                    "slide skipped; img not loaded:",
                                    this.src
                                  ),
                                  0 === --j &&
                                    "wait" == c.loader &&
                                    e.apply(c.API, [h, d]));
                              });
                      }))
                    : (--j, void h.push(k))
                );
              }),
            j && c.container.addClass("cycle-loading"));
        }
        var e;
        c.loader && ((e = c.API.add), (c.API.add = d));
      });
  })(jQuery) /*! pager plugin for Cycle2;  version: 20140415 */,
  (function (a) {
    "use strict";
    function b(b, c, d) {
      var e,
        f = b.API.getComponent("pager");
      f.each(function () {
        var f = a(this);
        if (c.pagerTemplate) {
          var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
          e = a(g).appendTo(f);
        } else e = f.children().eq(b.slideCount - 1);
        e.on(b.pagerEvent, function (a) {
          b.pagerEventBubble || a.preventDefault(),
            b.API.page(f, a.currentTarget);
        });
      });
    }
    function c(a, b) {
      var c = this.opts();
      if (!c.busy || c.manualTrump) {
        var d = a.children().index(b),
          e = d,
          f = c.currSlide < e;
        c.currSlide != e &&
          ((c.nextSlide = e),
          (c._tempFx = c.pagerFx),
          c.API.prepareTx(!0, f),
          c.API.trigger("cycle-pager-activated", [c, a, b]));
      }
    }
    a.extend(a.fn.cycle.defaults, {
      pager: "> .cycle-pager",
      pagerActiveClass: "cycle-pager-active",
      pagerEvent: "click.cycle",
      pagerEventBubble: void 0,
      pagerTemplate: "<span>•</span>",
    }),
      a(document).on("cycle-bootstrap", function (a, c, d) {
        d.buildPagerLink = b;
      }),
      a(document).on("cycle-slide-added", function (a, b, d, e) {
        b.pager && (b.API.buildPagerLink(b, d, e), (b.API.page = c));
      }),
      a(document).on("cycle-slide-removed", function (b, c, d) {
        if (c.pager) {
          var e = c.API.getComponent("pager");
          e.each(function () {
            var b = a(this);
            a(b.children()[d]).remove();
          });
        }
      }),
      a(document).on("cycle-update-view", function (b, c) {
        var d;
        c.pager &&
          ((d = c.API.getComponent("pager")),
          d.each(function () {
            a(this)
              .children()
              .removeClass(c.pagerActiveClass)
              .eq(c.currSlide)
              .addClass(c.pagerActiveClass);
          }));
      }),
      a(document).on("cycle-destroyed", function (a, b) {
        var c = b.API.getComponent("pager");
        c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty());
      });
  })(jQuery) /*! prevnext plugin for Cycle2;  version: 20140408 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
      next: "> .cycle-next",
      nextEvent: "click.cycle",
      disabledClass: "disabled",
      prev: "> .cycle-prev",
      prevEvent: "click.cycle",
      swipe: !1,
    }),
      a(document).on("cycle-initialized", function (a, b) {
        if (
          (b.API.getComponent("next").on(b.nextEvent, function (a) {
            a.preventDefault(), b.API.next();
          }),
          b.API.getComponent("prev").on(b.prevEvent, function (a) {
            a.preventDefault(), b.API.prev();
          }),
          b.swipe)
        ) {
          var c = b.swipeVert
              ? "swipeUp.cycle"
              : "swipeLeft.cycle swipeleft.cycle",
            d = b.swipeVert
              ? "swipeDown.cycle"
              : "swipeRight.cycle swiperight.cycle";
          b.container.on(c, function () {
            (b._tempFx = b.swipeFx), b.API.next();
          }),
            b.container.on(d, function () {
              (b._tempFx = b.swipeFx), b.API.prev();
            });
        }
      }),
      a(document).on("cycle-update-view", function (a, b) {
        if (!b.allowWrap) {
          var c = b.disabledClass,
            d = b.API.getComponent("next"),
            e = b.API.getComponent("prev"),
            f = b._prevBoundry || 0,
            g = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
          b.currSlide == g
            ? d.addClass(c).prop("disabled", !0)
            : d.removeClass(c).prop("disabled", !1),
            b.currSlide === f
              ? e.addClass(c).prop("disabled", !0)
              : e.removeClass(c).prop("disabled", !1);
        }
      }),
      a(document).on("cycle-destroyed", function (a, b) {
        b.API.getComponent("prev").off(b.nextEvent),
          b.API.getComponent("next").off(b.prevEvent),
          b.container.off(
            "swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle"
          );
      });
  })(jQuery) /*! progressive loader plugin for Cycle2;  version: 20130315 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { progressive: !1 }),
      a(document).on("cycle-pre-initialize", function (b, c) {
        if (c.progressive) {
          var d,
            e,
            f = c.API,
            g = f.next,
            h = f.prev,
            i = f.prepareTx,
            j = a.type(c.progressive);
          if ("array" == j) d = c.progressive;
          else if (a.isFunction(c.progressive)) d = c.progressive(c);
          else if ("string" == j) {
            if (((e = a(c.progressive)), (d = a.trim(e.html())), !d)) return;
            if (/^(\[)/.test(d))
              try {
                d = a.parseJSON(d);
              } catch (k) {
                return void f.log("error parsing progressive slides", k);
              }
            else
              (d = d.split(new RegExp(e.data("cycle-split") || "\n"))),
                d[d.length - 1] || d.pop();
          }
          i &&
            (f.prepareTx = function (a, b) {
              var e, f;
              return a || 0 === d.length
                ? void i.apply(c.API, [a, b])
                : void (b && c.currSlide == c.slideCount - 1
                    ? ((f = d[0]),
                      (d = d.slice(1)),
                      c.container.one("cycle-slide-added", function (a, b) {
                        setTimeout(function () {
                          b.API.advanceSlide(1);
                        }, 50);
                      }),
                      c.API.add(f))
                    : b || 0 !== c.currSlide
                    ? i.apply(c.API, [a, b])
                    : ((e = d.length - 1),
                      (f = d[e]),
                      (d = d.slice(0, e)),
                      c.container.one("cycle-slide-added", function (a, b) {
                        setTimeout(function () {
                          (b.currSlide = 1), b.API.advanceSlide(-1);
                        }, 50);
                      }),
                      c.API.add(f, !0)));
            }),
            g &&
              (f.next = function () {
                var a = this.opts();
                if (d.length && a.currSlide == a.slideCount - 1) {
                  var b = d[0];
                  (d = d.slice(1)),
                    a.container.one("cycle-slide-added", function (a, b) {
                      g.apply(b.API), b.container.removeClass("cycle-loading");
                    }),
                    a.container.addClass("cycle-loading"),
                    a.API.add(b);
                } else g.apply(a.API);
              }),
            h &&
              (f.prev = function () {
                var a = this.opts();
                if (d.length && 0 === a.currSlide) {
                  var b = d.length - 1,
                    c = d[b];
                  (d = d.slice(0, b)),
                    a.container.one("cycle-slide-added", function (a, b) {
                      (b.currSlide = 1),
                        b.API.advanceSlide(-1),
                        b.container.removeClass("cycle-loading");
                    }),
                    a.container.addClass("cycle-loading"),
                    a.API.add(c, !0);
                } else h.apply(a.API);
              });
        }
      });
  })(jQuery) /*! tmpl plugin for Cycle2;  version: 20121227 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { tmplRegex: "{{((.)?.*?)}}" }),
      a.extend(a.fn.cycle.API, {
        tmpl: function (b, c) {
          var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"),
            e = a.makeArray(arguments);
          return (
            e.shift(),
            b.replace(d, function (b, c) {
              var d,
                f,
                g,
                h,
                i = c.split(".");
              for (d = 0; d < e.length; d++)
                if ((g = e[d])) {
                  if (i.length > 1)
                    for (h = g, f = 0; f < i.length; f++)
                      (g = h), (h = h[i[f]] || c);
                  else h = g[c];
                  if (a.isFunction(h)) return h.apply(g, e);
                  if (void 0 !== h && null !== h && h != c) return h;
                }
              return c;
            })
          );
        },
      });
  })(jQuery);
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140407 */
!(function (a) {
  "use strict";
  function b(a, b, c) {
    if (a && c.style.filter) {
      b._filter = c.style.filter;
      try {
        c.style.removeAttribute("filter");
      } catch (d) {}
    } else !a && b._filter && (c.style.filter = b._filter);
  }
  a.extend(a.fn.cycle.transitions, {
    fade: {
      before: function (c, d, e, f) {
        var g = c.API.getSlideOpts(c.nextSlide).slideCss || {};
        c.API.stackSlides(d, e, f),
          (c.cssBefore = a.extend(g, {
            opacity: 0,
            visibility: "visible",
            display: "block",
          })),
          (c.animIn = { opacity: 1 }),
          (c.animOut = { opacity: 0 }),
          b(!0, c, e);
      },
      after: function (a, c, d) {
        b(!1, a, d);
      },
    },
    fadeout: {
      before: function (c, d, e, f) {
        var g = c.API.getSlideOpts(c.nextSlide).slideCss || {};
        c.API.stackSlides(d, e, f),
          (c.cssAfter = a.extend(g, { opacity: 0, visibility: "hidden" })),
          (c.cssBefore = a.extend(g, {
            opacity: 1,
            visibility: "visible",
            display: "block",
          })),
          (c.animOut = { opacity: 0 }),
          b(!0, c, e);
      },
      after: function (a, c, d) {
        b(!1, a, d);
      },
    },
  });
})(jQuery);
/*! Scroll Vert Transition Plugin by Avanzare for Cylce 2 */
!(function (i) {
  "use strict";
  i.fn.cycle.transitions.scrollVert = {
    before: function (i, t, e, s) {
      var o = jQuery(e).height();
      i.API.stackSlides(i, t, e, s),
        (i.cssBefore = {
          top: s ? -o : o,
          left: 0,
          opacity: 1,
          display: "block",
          visibility: "visible",
        }),
        (i.animIn = { top: 0 }),
        (i.animOut = { top: s ? o : -o });
    },
  };
})(jQuery);

/*!
 * mgGlitch : little jquery helper to glitch everything
 * (c) 2016 Hadrien Mongouachon
 * MIT Licensed.
 * Author URI: http://hmongouachon.com
 * Plugin URI: http://hmongouachon.com
 * Version: 1.0.0
 */
!(function (t, e, s, i) {
  "use strict";
  function n(e, s) {
    (this.element = e),
      (this.settings = t.extend({}, a, s)),
      (this._defaults = a),
      (this._name = r),
      this.init();
  }
  var r = "mgGlitch",
    a = {
      destroy: !1,
      glitch: !0,
      scale: !0,
      blend: !0,
      blendModeType: "hue",
      glitch1TimeMin: 600,
      glitch1TimeMax: 900,
      glitch2TimeMin: 10,
      glitch2TimeMax: 115,
      zIndexStart: 5,
    };
  t.extend(n.prototype, {
    init: function () {
      this.glitch();
    },
    glitch: function () {
      function e(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }
      function s() {
        var i = e(10, 1900),
          n = 9999,
          a = e(10, 1300),
          o = 0,
          h = e(0, 16),
          f = e(0, 16),
          d = e(c, l);
        t(r).css({
          clip: "rect(" + i + "px, " + n + "px, " + a + "px," + o + "px)",
          right: f,
          left: h,
        }),
          setTimeout(s, d);
      }
      function i() {
        var s = e(10, 1900),
          n = 9999,
          c = e(10, 1300),
          l = 0,
          f = e(0, 40),
          d = e(0, 40),
          m = e(o, h);
        if (a === !0) var x = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
        else if (a === !1) var x = 1;
        t(r)
          .next()
          .css({
            clip: "rect(" + s + "px, " + n + "px, " + c + "px," + l + "px)",
            left: f,
            right: d,
            "-webkit-transform": "scale(" + x + ")",
            "-ms-transform": "scale(" + x + ")",
            transform: "scale(" + x + ")",
          }),
          setTimeout(i, m);
      }
      function n() {
        var s = e(10, 1900),
          i = 9999,
          c = e(10, 1300),
          l = 0,
          f = e(0, 40),
          d = e(0, 40),
          m = e(o, h);
        if (a === !0) var x = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
        else if (a === !1) var x = 1;
        t(r)
          .next()
          .next()
          .css({
            clip: "rect(" + s + "px, " + i + "px, " + c + "px," + l + "px)",
            left: f,
            right: d,
            "-webkit-transform": "scale(" + x + ")",
            "-ms-transform": "scale(" + x + ")",
            transform: "scale(" + x + ")",
          }),
          setTimeout(n, m);
      }
      var r = this.element,
        a = this.settings.scale,
        c = this.settings.glitch1TimeMin,
        l = this.settings.glitch1TimeMax,
        o = this.settings.glitch2TimeMin,
        h = this.settings.glitch2TimeMax,
        f = this.settings.zIndexStart;
      if (this.settings.destroy === !0)
        (t(r).hasClass("el-front-1") ||
          t(r).hasClass("front-3") ||
          t(r).hasClass("front-2")) &&
          t(".front-1, .front-2, .front-3").remove(),
          t(".back").removeClass("back");
      else if (this.settings.destroy === !1) {
        var d = t(r).clone();
        if (
          (d.insertBefore(r).addClass("back").css({ "z-index": f }),
          this.settings.blend === !0)
        ) {
          var d = t(r).clone();
          d
            .insertAfter(r)
            .addClass("front-3")
            .css({
              "z-index": f + 3,
              "mix-blend-mode": this.settings.blendModeType,
            }),
            n();
        }
        if (this.settings.glitch === !0) {
          var d = t(r).clone();
          d
            .insertAfter(r)
            .addClass("front-2")
            .css({ "z-index": f + 2 }),
            t(".back")
              .next()
              .addClass("front-1")
              .css({ "z-index": f + 1 }),
            s(),
            i();
        }
      }
    },
  }),
    (t.fn[r] = function (t) {
      return this.each(function () {
        new n(this, t);
      });
    });
})(jQuery, window, document);
