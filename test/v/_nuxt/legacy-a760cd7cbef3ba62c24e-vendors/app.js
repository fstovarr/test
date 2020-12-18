/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "__extends", function () {
          return o;
        }),
        n.d(e, "__assign", function () {
          return c;
        }),
        n.d(e, "__rest", function () {
          return l;
        }),
        n.d(e, "__decorate", function () {
          return d;
        }),
        n.d(e, "__param", function () {
          return h;
        }),
        n.d(e, "__metadata", function () {
          return f;
        }),
        n.d(e, "__awaiter", function () {
          return v;
        }),
        n.d(e, "__generator", function () {
          return m;
        }),
        n.d(e, "__createBinding", function () {
          return y;
        }),
        n.d(e, "__exportStar", function () {
          return _;
        }),
        n.d(e, "__values", function () {
          return w;
        }),
        n.d(e, "__read", function () {
          return C;
        }),
        n.d(e, "__spread", function () {
          return E;
        }),
        n.d(e, "__spreadArrays", function () {
          return T;
        }),
        n.d(e, "__await", function () {
          return x;
        }),
        n.d(e, "__asyncGenerator", function () {
          return A;
        }),
        n.d(e, "__asyncDelegator", function () {
          return S;
        }),
        n.d(e, "__asyncValues", function () {
          return N;
        }),
        n.d(e, "__makeTemplateObject", function () {
          return O;
        }),
        n.d(e, "__importStar", function () {
          return I;
        }),
        n.d(e, "__importDefault", function () {
          return D;
        }),
        n.d(e, "__classPrivateFieldGet", function () {
          return k;
        }),
        n.d(e, "__classPrivateFieldSet", function () {
          return P;
        });
      var r = function (t, b) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, b) {
              t.__proto__ = b;
            }) ||
          function (t, b) {
            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p]);
          })(t, b);
      };
      function o(t, b) {
        function e() {
          this.constructor = t;
        }
        r(t, b),
          (t.prototype =
            null === b
              ? Object.create(b)
              : ((e.prototype = b.prototype), new e()));
      }
      var c = function () {
        return (c =
          Object.assign ||
          function (t) {
            for (var s, i = 1, e = arguments.length; i < e; i++)
              for (var p in (s = arguments[i]))
                Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
            return t;
          }).apply(this, arguments);
      };
      function l(s, t) {
        var e = {};
        for (var p in s)
          Object.prototype.hasOwnProperty.call(s, p) &&
            t.indexOf(p) < 0 &&
            (e[p] = s[p]);
        if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            t.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
              (e[p[i]] = s[p[i]]);
        }
        return e;
      }
      function d(t, e, n, desc) {
        var r,
          o = arguments.length,
          c =
            o < 3
              ? e
              : null === desc
              ? (desc = Object.getOwnPropertyDescriptor(e, n))
              : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          c = Reflect.decorate(t, e, n, desc);
        else
          for (var i = t.length - 1; i >= 0; i--)
            (r = t[i]) &&
              (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
        return o > 3 && c && Object.defineProperty(e, n, c), c;
      }
      function h(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }
      function f(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e);
      }
      function v(t, e, n, r) {
        return new (n || (n = Promise))(function (o, c) {
          function l(t) {
            try {
              h(r.next(t));
            } catch (t) {
              c(t);
            }
          }
          function d(t) {
            try {
              h(r.throw(t));
            } catch (t) {
              c(t);
            }
          }
          function h(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(l, d);
          }
          h((r = r.apply(t, e || [])).next());
        });
      }
      function m(t, body) {
        var e,
          n,
          r,
          g,
          o = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (g = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function c(c) {
          return function (l) {
            return (function (c) {
              if (e) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((e = 1),
                    n &&
                      (r =
                        2 & c[0]
                          ? n.return
                          : c[0]
                          ? n.throw || ((r = n.return) && r.call(n), 0)
                          : n.next) &&
                      !(r = r.call(n, c[1])).done)
                  )
                    return r;
                  switch (((n = 0), r && (c = [2 & c[0], r.value]), c[0])) {
                    case 0:
                    case 1:
                      r = c;
                      break;
                    case 4:
                      return o.label++, { value: c[1], done: !1 };
                    case 5:
                      o.label++, (n = c[1]), (c = [0]);
                      continue;
                    case 7:
                      (c = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !((r = o.trys),
                        (r = r.length > 0 && r[r.length - 1]) ||
                          (6 !== c[0] && 2 !== c[0]))
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === c[0] && (!r || (c[1] > r[0] && c[1] < r[3]))) {
                        o.label = c[1];
                        break;
                      }
                      if (6 === c[0] && o.label < r[1]) {
                        (o.label = r[1]), (r = c);
                        break;
                      }
                      if (r && o.label < r[2]) {
                        (o.label = r[2]), o.ops.push(c);
                        break;
                      }
                      r[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  c = body.call(t, o);
                } catch (t) {
                  (c = [6, t]), (n = 0);
                } finally {
                  e = r = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            })([c, l]);
          };
        }
      }
      function y(t, e, n, r) {
        void 0 === r && (r = n), (t[r] = e[n]);
      }
      function _(t, e) {
        for (var p in t)
          "default" === p || e.hasOwnProperty(p) || (e[p] = t[p]);
      }
      function w(t) {
        var s = "function" == typeof Symbol && Symbol.iterator,
          e = s && t[s],
          i = 0;
        if (e) return e.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && i >= t.length && (t = void 0),
                { value: t && t[i++], done: !t }
              );
            },
          };
        throw new TypeError(
          s ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function C(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          c = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            c.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return c;
      }
      function E() {
        for (var t = [], i = 0; i < arguments.length; i++)
          t = t.concat(C(arguments[i]));
        return t;
      }
      function T() {
        for (var s = 0, i = 0, t = arguments.length; i < t; i++)
          s += arguments[i].length;
        var e = Array(s),
          n = 0;
        for (i = 0; i < t; i++)
          for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++)
            e[n] = a[r];
        return e;
      }
      function x(t) {
        return this instanceof x ? ((this.v = t), this) : new x(t);
      }
      function A(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          g = n.apply(t, e || []),
          q = [];
        return (
          (i = {}),
          r("next"),
          r("throw"),
          r("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function r(t) {
          g[t] &&
            (i[t] = function (e) {
              return new Promise(function (a, b) {
                q.push([t, e, a, b]) > 1 || o(t, e);
              });
            });
        }
        function o(t, e) {
          try {
            (n = g[t](e)).value instanceof x
              ? Promise.resolve(n.value.v).then(c, l)
              : d(q[0][2], n);
          } catch (t) {
            d(q[0][3], t);
          }
          var n;
        }
        function c(t) {
          o("next", t);
        }
        function l(t) {
          o("throw", t);
        }
        function d(t, e) {
          t(e), q.shift(), q.length && o(q[0][0], q[0][1]);
        }
      }
      function S(t) {
        var i, p;
        return (
          (i = {}),
          e("next"),
          e("throw", function (t) {
            throw t;
          }),
          e("return"),
          (i[Symbol.iterator] = function () {
            return this;
          }),
          i
        );
        function e(e, n) {
          i[e] = t[e]
            ? function (r) {
                return (p = !p)
                  ? { value: x(t[e](r)), done: "return" === e }
                  : n
                  ? n(r)
                  : r;
              }
            : n;
        }
      }
      function N(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          e = t[Symbol.asyncIterator];
        return e
          ? e.call(t)
          : ((t = w(t)),
            (i = {}),
            n("next"),
            n("throw"),
            n("return"),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i);
        function n(e) {
          i[e] =
            t[e] &&
            function (n) {
              return new Promise(function (r, o) {
                (function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, o, (n = t[e](n)).done, n.value);
              });
            };
        }
      }
      function O(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, "raw", { value: e })
            : (t.raw = e),
          t
        );
      }
      function I(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      }
      function D(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function k(t, e) {
        if (!e.has(t))
          throw new TypeError("attempted to get private field on non-instance");
        return e.get(t);
      }
      function P(t, e, n) {
        if (!e.has(t))
          throw new TypeError("attempted to set private field on non-instance");
        return e.set(t, n), n;
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return v;
      });
      var r = n(27);
      var o = n(91),
        c = n(73);
      var l = n(36);
      function d(t) {
        return t;
      }
      function h(t) {
        return 0 === t.length
          ? d
          : 1 === t.length
          ? t[0]
          : function (input) {
              return t.reduce(function (t, e) {
                return e(t);
              }, input);
            };
      }
      var f = n(19),
        v = (function () {
          function t(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          return (
            (t.prototype.lift = function (e) {
              var n = new t();
              return (n.source = this), (n.operator = e), n;
            }),
            (t.prototype.subscribe = function (t, e, n) {
              var l = this.operator,
                d = (function (t, e, n) {
                  if (t) {
                    if (t instanceof r.a) return t;
                    if (t[o.a]) return t[o.a]();
                  }
                  return t || e || n ? new r.a(t, e, n) : new r.a(c.a);
                })(t, e, n);
              if (
                (l
                  ? d.add(l.call(d, this.source))
                  : d.add(
                      this.source ||
                        (f.a.useDeprecatedSynchronousErrorHandling &&
                          !d.syncErrorThrowable)
                        ? this._subscribe(d)
                        : this._trySubscribe(d)
                    ),
                f.a.useDeprecatedSynchronousErrorHandling &&
                  d.syncErrorThrowable &&
                  ((d.syncErrorThrowable = !1), d.syncErrorThrown))
              )
                throw d.syncErrorValue;
              return d;
            }),
            (t.prototype._trySubscribe = function (t) {
              try {
                return this._subscribe(t);
              } catch (e) {
                f.a.useDeprecatedSynchronousErrorHandling &&
                  ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                  !(function (t) {
                    for (; t; ) {
                      var e = t,
                        n = e.closed,
                        o = e.destination,
                        c = e.isStopped;
                      if (n || c) return !1;
                      t = o && o instanceof r.a ? o : null;
                    }
                    return !0;
                  })(t)
                    ? console.warn(e)
                    : t.error(e);
              }
            }),
            (t.prototype.forEach = function (t, e) {
              var n = this;
              return new (e = m(e))(function (e, r) {
                var o;
                o = n.subscribe(
                  function (e) {
                    try {
                      t(e);
                    } catch (t) {
                      r(t), o && o.unsubscribe();
                    }
                  },
                  r,
                  e
                );
              });
            }),
            (t.prototype._subscribe = function (t) {
              var source = this.source;
              return source && source.subscribe(t);
            }),
            (t.prototype[l.a] = function () {
              return this;
            }),
            (t.prototype.pipe = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return 0 === t.length ? this : h(t)(this);
            }),
            (t.prototype.toPromise = function (t) {
              var e = this;
              return new (t = m(t))(function (t, n) {
                var r;
                e.subscribe(
                  function (t) {
                    return (r = t);
                  },
                  function (t) {
                    return n(t);
                  },
                  function () {
                    return t(r);
                  }
                );
              });
            }),
            (t.create = function (e) {
              return new t(e);
            }),
            t
          );
        })();
      function m(t) {
        if ((t || (t = f.a.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      e.a = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = !1,
        o = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            t && new Error().stack;
            r = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r;
          },
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return v;
      });
      var r = n(12),
        o = n(92),
        c = n(73),
        l = n(37),
        d = n(91),
        h = n(19),
        f = n(43),
        v = (function (t) {
          function e(n, r, o) {
            var l = t.call(this) || this;
            switch (
              ((l.syncErrorValue = null),
              (l.syncErrorThrown = !1),
              (l.syncErrorThrowable = !1),
              (l.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                l.destination = c.a;
                break;
              case 1:
                if (!n) {
                  l.destination = c.a;
                  break;
                }
                if ("object" == typeof n) {
                  n instanceof e
                    ? ((l.syncErrorThrowable = n.syncErrorThrowable),
                      (l.destination = n),
                      n.add(l))
                    : ((l.syncErrorThrowable = !0),
                      (l.destination = new m(l, n)));
                  break;
                }
              default:
                (l.syncErrorThrowable = !0),
                  (l.destination = new m(l, n, r, o));
            }
            return l;
          }
          return (
            r.__extends(e, t),
            (e.prototype[d.a] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var o = new e(t, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(l.a),
        m = (function (t) {
          function e(e, n, r, l) {
            var d,
              h = t.call(this) || this;
            h._parentSubscriber = e;
            var f = h;
            return (
              Object(o.a)(n)
                ? (d = n)
                : n &&
                  ((d = n.next),
                  (r = n.error),
                  (l = n.complete),
                  n !== c.a &&
                    ((f = Object.create(n)),
                    Object(o.a)(f.unsubscribe) && h.add(f.unsubscribe.bind(f)),
                    (f.unsubscribe = h.unsubscribe.bind(h)))),
              (h._context = f),
              (h._next = d),
              (h._error = r),
              (h._complete = l),
              h
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                h.a.useDeprecatedSynchronousErrorHandling &&
                e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = h.a.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n
                    ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                    : Object(f.a)(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  Object(f.a)(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  h.a.useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (t) {
                if (
                  (this.unsubscribe(),
                  h.a.useDeprecatedSynchronousErrorHandling)
                )
                  throw t;
                Object(f.a)(t);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!h.a.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                e.call(this._context, n);
              } catch (e) {
                return h.a.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0), !0)
                  : (Object(f.a)(e), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(v);
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(125),
        o = "object" == typeof self && self && self.Object === Object && self,
        c = r.a || o || Function("return this")();
      e.a = c;
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      e.a = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        return (
          ("function" == typeof Symbol && Symbol.observable) || "@@observable"
        );
      })();
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var r = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && "number" == typeof t.length;
            }
          );
        })(),
        o = n(121),
        c = n(92),
        l = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  " errors occurred during unsubscription:\n" +
                  t
                    .map(function (t, i) {
                      return i + 1 + ") " + t.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        d = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          var e;
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this._parentOrParents,
                  d = this._ctorUnsubscribe,
                  f = this._unsubscribe,
                  v = this._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  n instanceof t)
                )
                  n.remove(this);
                else if (null !== n)
                  for (var m = 0; m < n.length; ++m) {
                    n[m].remove(this);
                  }
                if (Object(c.a)(f)) {
                  d && (this._unsubscribe = void 0);
                  try {
                    f.call(this);
                  } catch (t) {
                    e = t instanceof l ? h(t.errors) : [t];
                  }
                }
                if (r(v)) {
                  m = -1;
                  for (var y = v.length; ++m < y; ) {
                    var sub = v[m];
                    if (Object(o.a)(sub))
                      try {
                        sub.unsubscribe();
                      } catch (t) {
                        (e = e || []),
                          t instanceof l
                            ? (e = e.concat(h(t.errors)))
                            : e.push(t);
                      }
                  }
                }
                if (e) throw new l(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (
                    n === this ||
                    n.closed ||
                    "function" != typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + e + " added to Subscription."
                  );
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof t) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var c = this._subscriptions;
              return null === c ? (this._subscriptions = [n]) : c.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (((e = new t()).closed = !0), e)),
            t
          );
        })();
      function h(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof l ? e.errors : e);
        }, []);
      }
    },
    function (t, e, n) {
      "use strict";
      function r(template, style, script, t, e, n, r, o, c, l) {
        "boolean" != typeof r && ((c = o), (o = r), (r = !1));
        var d,
          h = "function" == typeof script ? script.options : script;
        if (
          (template &&
            template.render &&
            ((h.render = template.render),
            (h.staticRenderFns = template.staticRenderFns),
            (h._compiled = !0),
            e && (h.functional = !0)),
          t && (h._scopeId = t),
          n
            ? ((d = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  style && style.call(this, c(t)),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(n);
              }),
              (h._ssrRegister = d))
            : style &&
              (d = r
                ? function (t) {
                    style.call(this, l(t, this.$root.$options.shadowRoot));
                  }
                : function (t) {
                    style.call(this, o(t));
                  }),
          d)
        )
          if (h.functional) {
            var f = h.render;
            h.render = function (t, e) {
              return d.call(e), f(t, e);
            };
          } else {
            var v = h.beforeCreate;
            h.beforeCreate = v ? [].concat(v, d) : [d];
          }
        return script;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      function r(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      n(10), n(4), n(33), n(331);
      var r,
        o =
          "undefined" != typeof navigator &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
      function c(t) {
        return function (t, style) {
          return (function (t, e) {
            var n = o ? e.media || "default" : t,
              style = l[n] || (l[n] = { ids: new Set(), styles: [] });
            if (!style.ids.has(t)) {
              style.ids.add(t);
              var code = e.source;
              if (
                (e.map &&
                  ((code += "\n/*# sourceURL=" + e.map.sources[0] + " */"),
                  (code +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) +
                    " */")),
                style.element ||
                  ((style.element = document.createElement("style")),
                  (style.element.type = "text/css"),
                  e.media && style.element.setAttribute("media", e.media),
                  void 0 === r &&
                    (r =
                      document.head ||
                      document.getElementsByTagName("head")[0]),
                  r.appendChild(style.element)),
                "styleSheet" in style.element)
              )
                style.styles.push(code),
                  (style.element.styleSheet.cssText = style.styles
                    .filter(Boolean)
                    .join("\n"));
              else {
                var c = style.ids.size - 1,
                  d = document.createTextNode(code),
                  h = style.element.childNodes;
                h[c] && style.element.removeChild(h[c]),
                  h.length
                    ? style.element.insertBefore(d, h[c])
                    : style.element.appendChild(d);
              }
            }
          })(t, style);
        };
      }
      var l = {};
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(69),
        o = Object.prototype,
        c = o.hasOwnProperty,
        l = o.toString,
        d = r.a ? r.a.toStringTag : void 0;
      var h = function (t) {
          var e = c.call(t, d),
            n = t[d];
          try {
            t[d] = void 0;
            var r = !0;
          } catch (t) {}
          var o = l.call(t);
          return r && (e ? (t[d] = n) : delete t[d]), o;
        },
        f = Object.prototype.toString;
      var v = function (t) {
          return f.call(t);
        },
        m = r.a ? r.a.toStringTag : void 0;
      e.a = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : m && m in Object(t)
          ? h(t)
          : v(t);
      };
    },
    function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    function (t, e, n) {
      "use strict";
      function r() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      n.d(e, "a", function () {
        return o;
      });
      var o = r();
    },
    function (t, e, n) {
      "use strict";
      var r = function () {
          (this.__data__ = []), (this.size = 0);
        },
        o = n(57);
      var c = function (t, e) {
          for (var n = t.length; n--; ) if (Object(o.a)(t[n][0], e)) return n;
          return -1;
        },
        l = Array.prototype.splice;
      var d = function (t) {
        var data = this.__data__,
          e = c(data, t);
        return (
          !(e < 0) &&
          (e == data.length - 1 ? data.pop() : l.call(data, e, 1),
          --this.size,
          !0)
        );
      };
      var h = function (t) {
        var data = this.__data__,
          e = c(data, t);
        return e < 0 ? void 0 : data[e][1];
      };
      var f = function (t) {
        return c(this.__data__, t) > -1;
      };
      var v = function (t, e) {
        var data = this.__data__,
          n = c(data, t);
        return (
          n < 0 ? (++this.size, data.push([t, e])) : (data[n][1] = e), this
        );
      };
      function m(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (m.prototype.clear = r),
        (m.prototype.delete = d),
        (m.prototype.get = h),
        (m.prototype.has = f),
        (m.prototype.set = v);
      e.a = m;
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var content = (function (t, e) {
                var content = t[1] || "",
                  n = t[3];
                if (!n) return content;
                if (e && "function" == typeof btoa) {
                  var r =
                      ((c = n),
                      (l = btoa(
                        unescape(encodeURIComponent(JSON.stringify(c)))
                      )),
                      (data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        l
                      )),
                      "/*# ".concat(data, " */")),
                    o = n.sources.map(function (source) {
                      return "/*# sourceURL="
                        .concat(n.sourceRoot || "")
                        .concat(source, " */");
                    });
                  return [content].concat(o).concat([r]).join("\n");
                }
                var c, l, data;
                return [content].join("\n");
              })(e, t);
              return e[2]
                ? "@media ".concat(e[2], " {").concat(content, "}")
                : content;
            }).join("");
          }),
          (e.i = function (t, n, r) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var c = this[i][0];
                null != c && (o[c] = !0);
              }
            for (var l = 0; l < t.length; l++) {
              var d = [].concat(t[l]);
              (r && o[d[0]]) ||
                (n &&
                  (d[2]
                    ? (d[2] = "".concat(n, " and ").concat(d[2]))
                    : (d[2] = n)),
                e.push(d));
            }
          }),
          e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
          var o = e[i],
            c = o[0],
            l = { id: t + ":" + i, css: o[1], media: o[2], sourceMap: o[3] };
          r[c] ? r[c].parts.push(l) : n.push((r[c] = { id: c, parts: [l] }));
        }
        return n;
      }
      n.r(e),
        n.d(e, "default", function () {
          return y;
        });
      var o = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var c = {},
        head = o && (document.head || document.getElementsByTagName("head")[0]),
        l = null,
        d = 0,
        h = !1,
        f = function () {},
        v = null,
        m =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function y(t, e, n, o) {
        (h = n), (v = o || {});
        var l = r(t, e);
        return (
          _(l),
          function (e) {
            for (var n = [], i = 0; i < l.length; i++) {
              var o = l[i];
              (d = c[o.id]).refs--, n.push(d);
            }
            e ? _((l = r(t, e))) : (l = []);
            for (i = 0; i < n.length; i++) {
              var d;
              if (0 === (d = n[i]).refs) {
                for (var h = 0; h < d.parts.length; h++) d.parts[h]();
                delete c[d.id];
              }
            }
          }
        );
      }
      function _(t) {
        for (var i = 0; i < t.length; i++) {
          var e = t[i],
            n = c[e.id];
          if (n) {
            n.refs++;
            for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r]);
            for (; r < e.parts.length; r++) n.parts.push(C(e.parts[r]));
            n.parts.length > e.parts.length &&
              (n.parts.length = e.parts.length);
          } else {
            var o = [];
            for (r = 0; r < e.parts.length; r++) o.push(C(e.parts[r]));
            c[e.id] = { id: e.id, refs: 1, parts: o };
          }
        }
      }
      function w() {
        var t = document.createElement("style");
        return (t.type = "text/css"), head.appendChild(t), t;
      }
      function C(t) {
        var e,
          n,
          r = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
        if (r) {
          if (h) return f;
          r.parentNode.removeChild(r);
        }
        if (m) {
          var o = d++;
          (r = l || (l = w())),
            (e = x.bind(null, r, o, !1)),
            (n = x.bind(null, r, o, !0));
        } else
          (r = w()),
            (e = A.bind(null, r)),
            (n = function () {
              r.parentNode.removeChild(r);
            });
        return (
          e(t),
          function (r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return;
              e((t = r));
            } else n();
          }
        );
      }
      var E,
        T =
          ((E = []),
          function (t, e) {
            return (E[t] = e), E.filter(Boolean).join("\n");
          });
      function x(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = T(e, o);
        else {
          var c = document.createTextNode(o),
            l = t.childNodes;
          l[e] && t.removeChild(l[e]),
            l.length ? t.insertBefore(c, l[e]) : t.appendChild(c);
        }
      }
      function A(t, e) {
        var n = e.css,
          r = e.media,
          o = e.sourceMap;
        if (
          (r && t.setAttribute("media", r),
          v.ssrId && t.setAttribute("data-vue-ssr-id", e.id),
          o &&
            ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
    },
    function (t, e, n) {
      "use strict";
      var r,
        o = n(71),
        c = n(29).a["__core-js_shared__"],
        l = (r = /[^.]+$/.exec((c && c.keys && c.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      var d = function (t) {
          return !!l && l in t;
        },
        h = n(18),
        f = n(204),
        v = /^\[object .+?Constructor\]$/,
        m = Function.prototype,
        y = Object.prototype,
        _ = m.toString,
        w = y.hasOwnProperty,
        C = RegExp(
          "^" +
            _.call(w)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      var E = function (t) {
        return (
          !(!Object(h.a)(t) || d(t)) &&
          (Object(o.a)(t) ? C : v).test(Object(f.a)(t))
        );
      };
      var T = function (object, t) {
        return null == object ? void 0 : object[t];
      };
      e.a = function (object, t) {
        var e = T(object, t);
        return E(e) ? e : void 0;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(71),
        o = n(111);
      e.a = function (t) {
        return null != t && Object(o.a)(t.length) && !Object(r.a)(t);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(29).a.Symbol;
      e.a = r;
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(56),
        o = n(18);
      e.a = function (t) {
        if (!Object(o.a)(t)) return !1;
        var e = Object(r.a)(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n(19),
        o = n(43),
        c = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
            Object(o.a)(t);
          },
          complete: function () {},
        };
    },
    function (t, e, n) {
      "use strict";
      var r = function (t) {
          return $(
            [
              "text",
              "password",
              "search",
              "email",
              "tel",
              "url",
              "textarea",
              "number",
            ],
            t.type
          );
        },
        o = function (t) {
          return $(["radio", "checkbox"], t.type);
        },
        c = function (t, e) {
          return t.getAttribute("data-vv-" + e);
        },
        l = function (t) {
          return "isNaN" in Number
            ? Number.isNaN(t)
            : "number" == typeof t && t != t;
        },
        d = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return t.every(function (t) {
            return null == t;
          });
        },
        h = function (t, e) {
          if (t instanceof RegExp && e instanceof RegExp)
            return h(t.source, e.source) && h(t.flags, e.flags);
          if (Array.isArray(t) && Array.isArray(e)) {
            if (t.length !== e.length) return !1;
            for (var i = 0; i < t.length; i++) if (!h(t[i], e[i])) return !1;
            return !0;
          }
          return E(t) && E(e)
            ? Object.keys(t).every(function (n) {
                return h(t[n], e[n]);
              }) &&
                Object.keys(e).every(function (n) {
                  return h(t[n], e[n]);
                })
            : !(!l(t) || !l(e)) || t === e;
        },
        f = function (t) {
          return d(t)
            ? null
            : "FORM" === t.tagName
            ? t
            : d(t.form)
            ? d(t.parentNode)
              ? null
              : f(t.parentNode)
            : t.form;
        },
        v = function (path, t, e) {
          if ((void 0 === e && (e = void 0), !path || !t)) return e;
          var n = t;
          return (
            path.split(".").every(function (t) {
              return t in n ? ((n = n[t]), !0) : ((n = e), !1);
            }),
            n
          );
        },
        m = function (t, e, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === n && (n = { cancelled: !1 }),
            0 === e
              ? t
              : function () {
                  for (var o = [], c = arguments.length; c--; )
                    o[c] = arguments[c];
                  var l = function () {
                    (r = null), n.cancelled || t.apply(void 0, o);
                  };
                  clearTimeout(r), (r = setTimeout(l, e)) || t.apply(void 0, o);
                }
          );
          var r;
        },
        y = function (t, e) {
          return e
            ? t
              ? ("string" == typeof e && (e = _(e)), O({}, e, _(t)))
              : _(e)
            : _(t);
        },
        _ = function (t) {
          return t
            ? E(t)
              ? Object.keys(t).reduce(function (e, n) {
                  var r = [];
                  return (
                    (r =
                      !0 === t[n]
                        ? []
                        : Array.isArray(t[n]) || E(t[n])
                        ? t[n]
                        : [t[n]]),
                    !1 !== t[n] && (e[n] = r),
                    e
                  );
                }, {})
              : "string" != typeof t
              ? (w("rules must be either a string or an object."), {})
              : t.split("|").reduce(function (t, e) {
                  var n = (function (t) {
                    var e = [],
                      n = t.split(":")[0];
                    return (
                      $(t, ":") &&
                        (e = t.split(":").slice(1).join(":").split(",")),
                      { name: n, params: e }
                    );
                  })(e);
                  return n.name ? ((t[n.name] = n.params), t) : t;
                }, {})
            : {};
        },
        w = function (t) {
          console.warn("[vee-validate] " + t);
        },
        C = function (t) {
          return new Error("[vee-validate] " + t);
        },
        E = function (t) {
          return null !== t && t && "object" == typeof t && !Array.isArray(t);
        },
        T = function (t) {
          return "function" == typeof t;
        },
        x = function (t, e) {
          return t.classList
            ? t.classList.contains(e)
            : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
        },
        A = function (t, e, n) {
          if (t && e) {
            if (!Array.isArray(e))
              return n
                ? (function (t, e) {
                    t.classList
                      ? t.classList.add(e)
                      : x(t, e) || (t.className += " " + e);
                  })(t, e)
                : void (function (t, e) {
                    if (t.classList) t.classList.remove(e);
                    else if (x(t, e)) {
                      var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                      t.className = t.className.replace(n, " ");
                    }
                  })(t, e);
            e.forEach(function (e) {
              return A(t, e, n);
            });
          }
        },
        S = function (t) {
          if (T(Array.from)) return Array.from(t);
          for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
          return e;
        },
        N = function (t) {
          if (Array.isArray(t)) return [].concat(t);
          var e = S(t);
          return H(e) ? [t] : e;
        },
        O = function (t) {
          for (var e = [], n = arguments.length - 1; n-- > 0; )
            e[n] = arguments[n + 1];
          if (T(Object.assign))
            return Object.assign.apply(Object, [t].concat(e));
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          var r = Object(t);
          return (
            e.forEach(function (t) {
              null != t &&
                Object.keys(t).forEach(function (e) {
                  r[e] = t[e];
                });
            }),
            r
          );
        },
        I = 0,
        D = "{id}",
        k = function (t, e) {
          for (var n = Array.isArray(t) ? t : S(t), i = 0; i < n.length; i++)
            if (e(n[i])) return i;
          return -1;
        },
        P = function (t, e) {
          var n = Array.isArray(t) ? t : S(t),
            r = k(n, e);
          return -1 === r ? void 0 : n[r];
        },
        M = function (t) {
          if (!t) return !1;
          var e = t.componentOptions.tag;
          return /^(keep-alive|transition|transition-group)$/.test(e);
        },
        F = function (input) {
          if ("number" == typeof input) return input;
          if ("string" == typeof input) return parseInt(input);
          var map = {};
          for (var element in input) map[element] = parseInt(input[element]);
          return map;
        },
        R = function (t, source) {
          return E(t) && E(source)
            ? (Object.keys(source).forEach(function (e) {
                var n, r;
                if (E(source[e]))
                  return (
                    t[e] || O(t, (((n = {})[e] = {}), n)),
                    void R(t[e], source[e])
                  );
                O(t, (((r = {})[e] = source[e]), r));
              }),
              t)
            : t;
        },
        L = function (t, e) {
          if ((t.required && (e = y("required", e)), r(t)))
            return (
              "email" === t.type &&
                (e = y("email" + (t.multiple ? ":multiple" : ""), e)),
              t.pattern && (e = y({ regex: t.pattern }, e)),
              t.maxLength >= 0 &&
                t.maxLength < 524288 &&
                (e = y("max:" + t.maxLength, e)),
              t.minLength > 0 && (e = y("min:" + t.minLength, e)),
              "number" === t.type &&
                ((e = y("decimal", e)),
                "" !== t.min && (e = y("min_value:" + t.min, e)),
                "" !== t.max && (e = y("max_value:" + t.max, e))),
              e
            );
          if (
            (function (t) {
              return $(
                ["date", "week", "month", "datetime-local", "time"],
                t.type
              );
            })(t)
          ) {
            var n = t.step && Number(t.step) < 60 ? "HH:mm:ss" : "HH:mm";
            if ("date" === t.type) return y("date_format:yyyy-MM-dd", e);
            if ("datetime-local" === t.type)
              return y("date_format:yyyy-MM-ddT" + n, e);
            if ("month" === t.type) return y("date_format:yyyy-MM", e);
            if ("week" === t.type) return y("date_format:yyyy-[W]WW", e);
            if ("time" === t.type) return y("date_format:" + n, e);
          }
          return e;
        },
        j = function (t) {
          return T(Object.values)
            ? Object.values(t)
            : Object.keys(t).map(function (e) {
                return t[e];
              });
        },
        $ = function (t, e) {
          return -1 !== t.indexOf(e);
        },
        H = function (t) {
          return Array.isArray(t) && 0 === t.length;
        },
        U = function (t, e, n) {
          Object.defineProperty(t, e, {
            configurable: !1,
            writable: !0,
            value: n,
          });
        },
        V = "en",
        W = function (t) {
          void 0 === t && (t = {}), (this.container = {}), this.merge(t);
        },
        B = { locale: { configurable: !0 } };
      (B.locale.get = function () {
        return V;
      }),
        (B.locale.set = function (t) {
          V = t || "en";
        }),
        (W.prototype.hasLocale = function (t) {
          return !!this.container[t];
        }),
        (W.prototype.setDateFormat = function (t, e) {
          this.container[t] || (this.container[t] = {}),
            (this.container[t].dateFormat = e);
        }),
        (W.prototype.getDateFormat = function (t) {
          return this.container[t] && this.container[t].dateFormat
            ? this.container[t].dateFormat
            : null;
        }),
        (W.prototype.getMessage = function (t, e, data) {
          var n = null;
          return (
            (n = this.hasMessage(t, e)
              ? this.container[t].messages[e]
              : this._getDefaultMessage(t)),
            T(n) ? n.apply(void 0, data) : n
          );
        }),
        (W.prototype.getFieldMessage = function (t, e, n, data) {
          if (!this.hasLocale(t)) return this.getMessage(t, n, data);
          var r = this.container[t].custom && this.container[t].custom[e];
          if (!r || !r[n]) return this.getMessage(t, n, data);
          var o = r[n];
          return T(o) ? o.apply(void 0, data) : o;
        }),
        (W.prototype._getDefaultMessage = function (t) {
          return this.hasMessage(t, "_default")
            ? this.container[t].messages._default
            : this.container.en.messages._default;
        }),
        (W.prototype.getAttribute = function (t, e, n) {
          return (
            void 0 === n && (n = ""),
            this.hasAttribute(t, e) ? this.container[t].attributes[e] : n
          );
        }),
        (W.prototype.hasMessage = function (t, e) {
          return !!(
            this.hasLocale(t) &&
            this.container[t].messages &&
            this.container[t].messages[e]
          );
        }),
        (W.prototype.hasAttribute = function (t, e) {
          return !!(
            this.hasLocale(t) &&
            this.container[t].attributes &&
            this.container[t].attributes[e]
          );
        }),
        (W.prototype.merge = function (t) {
          R(this.container, t);
        }),
        (W.prototype.setMessage = function (t, e, n) {
          this.hasLocale(t) ||
            (this.container[t] = { messages: {}, attributes: {} }),
            this.container[t].messages || (this.container[t].messages = {}),
            (this.container[t].messages[e] = n);
        }),
        (W.prototype.setAttribute = function (t, e, n) {
          this.hasLocale(t) ||
            (this.container[t] = { messages: {}, attributes: {} }),
            (this.container[t].attributes[e] = n);
        }),
        Object.defineProperties(W.prototype, B);
      var z = {
          default: new W({ en: { messages: {}, attributes: {}, custom: {} } }),
        },
        Q = "default",
        Y = function () {};
      (Y._checkDriverName = function (t) {
        if (!t) throw C("you must provide a name to the dictionary driver");
      }),
        (Y.setDriver = function (t, e) {
          void 0 === e && (e = null),
            this._checkDriverName(t),
            e && (z[t] = e),
            (Q = t);
        }),
        (Y.getDriver = function () {
          return z[Q];
        });
      var G = function t(e, n) {
        void 0 === e && (e = null),
          void 0 === n && (n = null),
          (this.vmId = n || null),
          (this.items = e && e instanceof t ? e.items : []);
      };
      (G.prototype[
        "function" == typeof Symbol ? Symbol.iterator : "@@iterator"
      ] = function () {
        var t = this,
          e = 0;
        return {
          next: function () {
            return { value: t.items[e++], done: e > t.items.length };
          },
        };
      }),
        (G.prototype.add = function (t) {
          var e;
          (e = this.items).push.apply(e, this._normalizeError(t));
        }),
        (G.prototype._normalizeError = function (t) {
          var e = this;
          return Array.isArray(t)
            ? t.map(function (t) {
                return (
                  (t.scope = d(t.scope) ? null : t.scope),
                  (t.vmId = d(t.vmId) ? e.vmId || null : t.vmId),
                  t
                );
              })
            : ((t.scope = d(t.scope) ? null : t.scope),
              (t.vmId = d(t.vmId) ? this.vmId || null : t.vmId),
              [t]);
        }),
        (G.prototype.regenerate = function () {
          this.items.forEach(function (i) {
            i.msg = T(i.regenerate) ? i.regenerate() : i.msg;
          });
        }),
        (G.prototype.update = function (t, e) {
          var n = P(this.items, function (i) {
            return i.id === t;
          });
          if (n) {
            var r = this.items.indexOf(n);
            this.items.splice(r, 1), (n.scope = e.scope), this.items.push(n);
          }
        }),
        (G.prototype.all = function (t) {
          var e = this;
          return this.items
            .filter(function (n) {
              var r = !0,
                o = !0;
              return (
                d(t) || (r = n.scope === t),
                d(e.vmId) || (o = n.vmId === e.vmId),
                o && r
              );
            })
            .map(function (t) {
              return t.msg;
            });
        }),
        (G.prototype.any = function (t) {
          var e = this;
          return !!this.items.filter(function (n) {
            var r = !0,
              o = !0;
            return (
              d(t) || (r = n.scope === t),
              d(e.vmId) || (o = n.vmId === e.vmId),
              o && r
            );
          }).length;
        }),
        (G.prototype.clear = function (t) {
          var e = this,
            n = d(this.vmId)
              ? function () {
                  return !0;
                }
              : function (i) {
                  return i.vmId === e.vmId;
                },
            r = function (i) {
              return i.scope === t;
            };
          0 === arguments.length
            ? (r = function () {
                return !0;
              })
            : d(t) && (t = null);
          for (var i = 0; i < this.items.length; ++i)
            n(this.items[i]) &&
              r(this.items[i]) &&
              (this.items.splice(i, 1), --i);
        }),
        (G.prototype.collect = function (t, e, map) {
          var n = this;
          void 0 === map && (map = !0);
          var r = !d(t) && !t.includes("*"),
            o = function (t) {
              var e = t.reduce(function (t, e) {
                return d(n.vmId) || e.vmId === n.vmId
                  ? (t[e.field] || (t[e.field] = []),
                    t[e.field].push(map ? e.msg : e),
                    t)
                  : t;
              }, {});
              return r ? j(e)[0] || [] : e;
            };
          if (d(t)) return o(this.items);
          var c = d(e) ? String(t) : e + "." + t,
            l = this._makeCandidateFilters(c),
            h = l.isPrimary,
            f = l.isAlt,
            v = this.items.reduce(
              function (t, e) {
                return h(e) && t.primary.push(e), f(e) && t.alt.push(e), t;
              },
              { primary: [], alt: [] }
            );
          return o((v = v.primary.length ? v.primary : v.alt));
        }),
        (G.prototype.count = function () {
          var t = this;
          return this.vmId
            ? this.items.filter(function (e) {
                return e.vmId === t.vmId;
              }).length
            : this.items.length;
        }),
        (G.prototype.firstById = function (t) {
          var e = P(this.items, function (i) {
            return i.id === t;
          });
          return e ? e.msg : void 0;
        }),
        (G.prototype.first = function (t, e) {
          void 0 === e && (e = null);
          var n = d(e) ? t : e + "." + t,
            r = this._match(n);
          return r && r.msg;
        }),
        (G.prototype.firstRule = function (t, e) {
          var n = this.collect(t, e, !1);
          return (n.length && n[0].rule) || void 0;
        }),
        (G.prototype.has = function (t, e) {
          return void 0 === e && (e = null), !!this.first(t, e);
        }),
        (G.prototype.firstByRule = function (t, e, n) {
          void 0 === n && (n = null);
          var r = this.collect(t, n, !1).filter(function (t) {
            return t.rule === e;
          })[0];
          return (r && r.msg) || void 0;
        }),
        (G.prototype.firstNot = function (t, e, n) {
          void 0 === e && (e = "required"), void 0 === n && (n = null);
          var r = this.collect(t, n, !1).filter(function (t) {
            return t.rule !== e;
          })[0];
          return (r && r.msg) || void 0;
        }),
        (G.prototype.removeById = function (t) {
          var e = function (e) {
            return e.id === t;
          };
          Array.isArray(t) &&
            (e = function (e) {
              return -1 !== t.indexOf(e.id);
            });
          for (var i = 0; i < this.items.length; ++i)
            e(this.items[i]) && (this.items.splice(i, 1), --i);
        }),
        (G.prototype.remove = function (t, e, n) {
          if (!d(t))
            for (
              var r,
                o = d(e) ? String(t) : e + "." + t,
                c = this._makeCandidateFilters(o),
                l = c.isPrimary,
                h = c.isAlt,
                f = function (t) {
                  return l(t) || h(t);
                },
                i = 0;
              i < this.items.length;
              ++i
            )
              (r = this.items[i]),
                (d(n) ? f(r) : f(r) && r.vmId === n) &&
                  (this.items.splice(i, 1), --i);
        }),
        (G.prototype._makeCandidateFilters = function (t) {
          var e = this,
            n = function () {
              return !0;
            },
            r = function () {
              return !0;
            },
            o = function () {
              return !0;
            },
            c = function () {
              return !0;
            },
            l = (function (t) {
              var e = null;
              if (
                ($(t, ":") &&
                  ((e = t.split(":").pop()), (t = t.replace(":" + e, ""))),
                "#" === t[0])
              )
                return { id: t.slice(1), rule: e, name: null, scope: null };
              var n = null,
                r = t;
              if ($(t, ".")) {
                var o = t.split(".");
                (n = o[0]), (r = o.slice(1).join("."));
              }
              return { id: null, scope: n, name: r, rule: e };
            })(t),
            h = l.id,
            f = l.rule,
            v = l.scope,
            m = l.name;
          if (
            (f &&
              (n = function (t) {
                return t.rule === f;
              }),
            h)
          )
            return {
              isPrimary: function (t) {
                return (
                  n(t) &&
                  function (t) {
                    return h === t.id;
                  }
                );
              },
              isAlt: function () {
                return !1;
              },
            };
          (r = d(v)
            ? function (t) {
                return d(t.scope);
              }
            : function (t) {
                return t.scope === v;
              }),
            d(m) ||
              "*" === m ||
              (o = function (t) {
                return t.field === m;
              }),
            d(this.vmId) ||
              (c = function (t) {
                return t.vmId === e.vmId;
              });
          return {
            isPrimary: function (t) {
              return c(t) && o(t) && n(t) && r(t);
            },
            isAlt: function (t) {
              return c(t) && n(t) && t.field === v + "." + m;
            },
          };
        }),
        (G.prototype._match = function (t) {
          if (!d(t)) {
            var e = this._makeCandidateFilters(t),
              n = e.isPrimary,
              r = e.isAlt;
            return this.items.reduce(function (t, e, o, c) {
              var l = o === c.length - 1;
              return t.primary
                ? l
                  ? t.primary
                  : t
                : (n(e) && (t.primary = e),
                  r(e) && (t.alt = e),
                  l ? t.primary || t.alt : t);
            }, {});
          }
        });
      var Z = O(
          {},
          {
            locale: "en",
            delay: 0,
            errorBagName: "errors",
            dictionary: null,
            fieldsBagName: "fields",
            classes: !1,
            classNames: null,
            events: "input",
            inject: !0,
            fastExit: !0,
            aria: !0,
            validity: !1,
            mode: "aggressive",
            useConstraintAttrs: !0,
            i18n: null,
            i18nRootKey: "validation",
          }
        ),
        K = function (t) {
          var e = v("$options.$_veeValidate", t, {});
          return O({}, Z, e);
        },
        X = function () {
          return Z;
        },
        J = function (t) {
          Z = O({}, Z, t);
        };
      function tt(t) {
        return t.data
          ? t.data.model
            ? t.data.model
            : !!t.data.directives &&
              P(t.data.directives, function (t) {
                return "model" === t.name;
              })
          : null;
      }
      function et(t) {
        return tt(t)
          ? [t]
          : (function (t) {
              return Array.isArray(t)
                ? t
                : Array.isArray(t.children)
                ? t.children
                : t.componentOptions &&
                  Array.isArray(t.componentOptions.children)
                ? t.componentOptions.children
                : [];
            })(t).reduce(function (t, e) {
              var n = et(e);
              return n.length && t.push.apply(t, n), t;
            }, []);
      }
      function nt(t) {
        return t.componentOptions
          ? t.componentOptions.Ctor.options.model
          : null;
      }
      function it(t, e, n) {
        if (T(t[e])) {
          var r = t[e];
          t[e] = [r];
        }
        d(t[e]) && (t[e] = []), t[e].push(n);
      }
      function ot(t, e, n) {
        t.componentOptions
          ? (function (t, e, n) {
              t.componentOptions.listeners ||
                (t.componentOptions.listeners = {}),
                it(t.componentOptions.listeners, e, n);
            })(t, e, n)
          : (function (t, e, n) {
              d(t.data.on) && (t.data.on = {}), it(t.data.on, e, n);
            })(t, e, n);
      }
      function at(t, e) {
        return t.componentOptions
          ? (nt(t) || { event: "input" }).event
          : (e && e.modifiers && e.modifiers.lazy) || "select" === t.tag
          ? "change"
          : t.data.attrs && r({ type: t.data.attrs.type || "text" })
          ? "input"
          : "change";
      }
      function st(t, e) {
        return Array.isArray(e) && e[0] ? e[0] : e || t();
      }
      var ut = function () {};
      (ut.generate = function (t, e, n) {
        var r = ut.resolveModel(e, n),
          o = K(n.context);
        return {
          name: ut.resolveName(t, n),
          el: t,
          listen: !e.modifiers.disable,
          bails:
            !!e.modifiers.bails || (!0 !== e.modifiers.continues && void 0),
          scope: ut.resolveScope(t, e, n),
          vm: n.context,
          expression: e.value,
          component: n.componentInstance,
          classes: o.classes,
          classNames: o.classNames,
          getter: ut.resolveGetter(t, n, r),
          events: ut.resolveEvents(t, n) || o.events,
          model: r,
          delay: ut.resolveDelay(t, n, o),
          rules: ut.resolveRules(t, e, n),
          immediate: !!e.modifiers.initial || !!e.modifiers.immediate,
          persist: !!e.modifiers.persist,
          validity: o.validity && !n.componentInstance,
          aria: o.aria && !n.componentInstance,
          initialValue: ut.resolveInitialValue(n),
        };
      }),
        (ut.getCtorConfig = function (t) {
          return t.componentInstance
            ? v("componentInstance.$options.$_veeValidate", t)
            : null;
        }),
        (ut.resolveRules = function (t, e, n) {
          var r = "";
          if (
            (e.value || (e && e.expression) || (r = c(t, "rules")),
            e.value && $(["string", "object"], typeof e.value.rules)
              ? (r = e.value.rules)
              : e.value && (r = e.value),
            n.componentInstance)
          )
            return r;
          var o = _(r);
          return X().useConstraintAttrs ? O({}, L(t, {}), o) : o;
        }),
        (ut.resolveInitialValue = function (t) {
          var e =
            t.data.model ||
            P(t.data.directives, function (t) {
              return "model" === t.name;
            });
          return e && e.value;
        }),
        (ut.resolveDelay = function (t, e, n) {
          var r = c(t, "delay"),
            o = n && "delay" in n ? n.delay : 0;
          return (
            !r &&
              e.componentInstance &&
              e.componentInstance.$attrs &&
              (r = e.componentInstance.$attrs["data-vv-delay"]),
            E(o) ? (d(r) || (o.input = r), F(o)) : F(r || o)
          );
        }),
        (ut.resolveEvents = function (t, e) {
          var n = c(t, "validate-on");
          if (
            (!n &&
              e.componentInstance &&
              e.componentInstance.$attrs &&
              (n = e.componentInstance.$attrs["data-vv-validate-on"]),
            !n && e.componentInstance)
          ) {
            var r = ut.getCtorConfig(e);
            n = r && r.events;
          }
          if (
            (!n && X().events && (n = X().events),
            n && e.componentInstance && $(n, "input"))
          ) {
            var o = (e.componentInstance.$options.model || { event: "input" })
              .event;
            if (!o) return n;
            n = n.replace("input", o);
          }
          return n;
        }),
        (ut.resolveScope = function (t, e, n) {
          void 0 === n && (n = {});
          var r = null;
          return (
            n.componentInstance &&
              d(r) &&
              (r =
                n.componentInstance.$attrs &&
                n.componentInstance.$attrs["data-vv-scope"]),
            d(r)
              ? (function (t) {
                  var e = c(t, "scope");
                  if (d(e)) {
                    var form = f(t);
                    form && (e = c(form, "scope"));
                  }
                  return d(e) ? null : e;
                })(t)
              : r
          );
        }),
        (ut.resolveModel = function (t, e) {
          if (t.arg) return { expression: t.arg };
          var n = tt(e);
          if (!n) return null;
          var r =
              !/[^\w.$]/.test(n.expression) &&
              (function (path, t) {
                var e = t,
                  n = null;
                return path.split(".").reduce(function (t, r) {
                  return null == e || "object" != typeof e
                    ? (!0, t && !1)
                    : r in e
                    ? ((e = e[r]), (n = null === n ? r : n + "." + r), t && !0)
                    : t && !1;
                }, !0);
              })(n.expression, e.context),
            o = !(!n.modifiers || !n.modifiers.lazy);
          return r
            ? { expression: n.expression, lazy: o }
            : { expression: null, lazy: o };
        }),
        (ut.resolveName = function (t, e) {
          var n = c(t, "name");
          if (!n && !e.componentInstance) return t.name;
          if (
            (!n &&
              e.componentInstance &&
              e.componentInstance.$attrs &&
              (n =
                e.componentInstance.$attrs["data-vv-name"] ||
                e.componentInstance.$attrs.name),
            !n && e.componentInstance)
          ) {
            var r = ut.getCtorConfig(e);
            return r && T(r.name)
              ? r.name.bind(e.componentInstance)()
              : e.componentInstance.name;
          }
          return n;
        }),
        (ut.resolveGetter = function (t, e, n) {
          if (n && n.expression)
            return function () {
              return v(n.expression, e.context);
            };
          if (e.componentInstance) {
            var path =
              c(t, "value-path") ||
              (e.componentInstance.$attrs &&
                e.componentInstance.$attrs["data-vv-value-path"]);
            if (path)
              return function () {
                return v(path, e.componentInstance);
              };
            var r = ut.getCtorConfig(e);
            if (r && T(r.value)) {
              var o = r.value.bind(e.componentInstance);
              return function () {
                return o();
              };
            }
            var l = (e.componentInstance.$options.model || { prop: "value" })
              .prop;
            return function () {
              return e.componentInstance[l];
            };
          }
          switch (t.type) {
            case "checkbox":
              return function () {
                var e = document.querySelectorAll(
                  'input[name="' + t.name + '"]'
                );
                if (
                  (e = S(e).filter(function (t) {
                    return t.checked;
                  })).length
                )
                  return e.map(function (t) {
                    return t.value;
                  });
              };
            case "radio":
              return function () {
                var e = document.querySelectorAll(
                    'input[name="' + t.name + '"]'
                  ),
                  n = P(e, function (t) {
                    return t.checked;
                  });
                return n && n.value;
              };
            case "file":
              return function (e) {
                return S(t.files);
              };
            case "select-multiple":
              return function () {
                return S(t.options)
                  .filter(function (t) {
                    return t.selected;
                  })
                  .map(function (t) {
                    return t.value;
                  });
              };
            default:
              return function () {
                return t && t.value;
              };
          }
        });
      var ct = {},
        lt = function () {},
        ht = { rules: { configurable: !0 } };
      (lt.add = function (t, e) {
        var n = e.validate,
          r = e.options,
          o = e.paramNames;
        ct[t] = { validate: n, options: r, paramNames: o };
      }),
        (ht.rules.get = function () {
          return ct;
        }),
        (lt.has = function (t) {
          return !!ct[t];
        }),
        (lt.isImmediate = function (t) {
          return !(!ct[t] || !ct[t].options.immediate);
        }),
        (lt.isRequireRule = function (t) {
          return !(!ct[t] || !ct[t].options.computesRequired);
        }),
        (lt.isTargetRule = function (t) {
          return !(!ct[t] || !ct[t].options.hasTarget);
        }),
        (lt.remove = function (t) {
          delete ct[t];
        }),
        (lt.getParamNames = function (t) {
          return ct[t] && ct[t].paramNames;
        }),
        (lt.getOptions = function (t) {
          return ct[t] && ct[t].options;
        }),
        (lt.getValidatorMethod = function (t) {
          return ct[t] ? ct[t].validate : null;
        }),
        Object.defineProperties(lt, ht);
      var ft = function (t) {
          return (
            ("undefined" != typeof Event && T(Event) && t instanceof Event) ||
            (t && t.srcElement)
          );
        },
        pt = function (t) {
          return t ? ("string" == typeof t ? t.split("|") : t) : [];
        },
        vt = !0,
        mt = function (t, e, n) {
          t.addEventListener(e, n, !!vt && { passive: !0 });
        },
        yt = {
          targetOf: null,
          immediate: !1,
          persist: !1,
          scope: null,
          listen: !0,
          name: null,
          rules: {},
          vm: null,
          classes: !1,
          validity: !0,
          aria: !0,
          events: "input|blur",
          delay: 0,
          classNames: {
            touched: "touched",
            untouched: "untouched",
            valid: "valid",
            invalid: "invalid",
            pristine: "pristine",
            dirty: "dirty",
          },
        },
        gt = function (t) {
          void 0 === t && (t = {}),
            (this.id =
              (I >= 9999 && ((I = 0), (D = D.replace("{id}", "_{id}"))),
              I++,
              D.replace("{id}", String(I)))),
            (this.el = t.el),
            (this.updated = !1),
            (this.vmId = t.vmId),
            U(this, "dependencies", []),
            U(this, "watchers", []),
            U(this, "events", []),
            (this.delay = 0),
            (this.rules = {}),
            (this.forceRequired = !1),
            this._cacheId(t),
            (this.classNames = O({}, yt.classNames)),
            (t = O({}, yt, t)),
            (this._delay = d(t.delay) ? 0 : t.delay),
            (this.validity = t.validity),
            (this.aria = t.aria),
            (this.flags = t.flags || {
              untouched: !0,
              touched: !1,
              dirty: !1,
              pristine: !0,
              valid: null,
              invalid: null,
              validated: !1,
              pending: !1,
              required: !1,
              changed: !1,
            }),
            U(this, "vm", t.vm),
            U(this, "componentInstance", t.component),
            (this.ctorConfig = this.componentInstance
              ? v("$options.$_veeValidate", this.componentInstance)
              : void 0),
            this.update(t),
            (this.initialValue = this.value),
            (this.updated = !1);
        },
        _t = {
          validator: { configurable: !0 },
          isRequired: { configurable: !0 },
          isDisabled: { configurable: !0 },
          alias: { configurable: !0 },
          value: { configurable: !0 },
          bails: { configurable: !0 },
          rejectsFalse: { configurable: !0 },
        };
      (_t.validator.get = function () {
        return this.vm && this.vm.$validator
          ? this.vm.$validator
          : {
              validate: function () {
                return Promise.resolve(!0);
              },
            };
      }),
        (_t.isRequired.get = function () {
          return !!this.rules.required || this.forceRequired;
        }),
        (_t.isDisabled.get = function () {
          return !(!this.el || !this.el.disabled);
        }),
        (_t.alias.get = function () {
          if (this._alias) return this._alias;
          var t = null;
          return (
            this.ctorConfig &&
              this.ctorConfig.alias &&
              (t = T(this.ctorConfig.alias)
                ? this.ctorConfig.alias.call(this.componentInstance)
                : this.ctorConfig.alias),
            !t && this.el && (t = c(this.el, "as")),
            !t && this.componentInstance
              ? this.componentInstance.$attrs &&
                this.componentInstance.$attrs["data-vv-as"]
              : t
          );
        }),
        (_t.value.get = function () {
          if (T(this.getter)) return this.getter();
        }),
        (_t.bails.get = function () {
          return this._bails;
        }),
        (_t.rejectsFalse.get = function () {
          return this.componentInstance && this.ctorConfig
            ? !!this.ctorConfig.rejectsFalse
            : !!this.el && "checkbox" === this.el.type;
        }),
        (gt.prototype.matches = function (t) {
          var e = this;
          return (
            !t ||
            (t.id
              ? this.id === t.id
              : !!(d(t.vmId)
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t === e.vmId;
                    })(t.vmId) &&
                ((void 0 === t.name && void 0 === t.scope) ||
                  (void 0 === t.scope
                    ? this.name === t.name
                    : void 0 === t.name
                    ? this.scope === t.scope
                    : t.name === this.name && t.scope === this.scope)))
          );
        }),
        (gt.prototype._cacheId = function (t) {
          this.el && !t.targetOf && (this.el._veeValidateId = this.id);
        }),
        (gt.prototype.waitFor = function (t) {
          this._waitingFor = t;
        }),
        (gt.prototype.isWaitingFor = function (t) {
          return this._waitingFor === t;
        }),
        (gt.prototype.update = function (t) {
          var e,
            n,
            r,
            o = this;
          if (
            ((this.targetOf = t.targetOf || null),
            (this.immediate = t.immediate || this.immediate || !1),
            (this.persist = t.persist || this.persist || !1),
            !d(t.scope) &&
              t.scope !== this.scope &&
              T(this.validator.update) &&
              this.validator.update(this.id, { scope: t.scope }),
            (this.scope = d(t.scope)
              ? d(this.scope)
                ? null
                : this.scope
              : t.scope),
            (this.name =
              (d(t.name) ? t.name : String(t.name)) || this.name || null),
            (this.rules = void 0 !== t.rules ? _(t.rules) : this.rules),
            (this._bails = void 0 !== t.bails ? t.bails : this._bails),
            (this.model = t.model || this.model),
            (this.listen = void 0 !== t.listen ? t.listen : this.listen),
            (this.classes =
              !(!t.classes && !this.classes) && !this.componentInstance),
            (this.classNames = E(t.classNames)
              ? R(this.classNames, t.classNames)
              : this.classNames),
            (this.getter = T(t.getter) ? t.getter : this.getter),
            (this._alias = t.alias || this._alias),
            (this.events = t.events ? pt(t.events) : this.events),
            (this.delay =
              ((e = this.events),
              (n = t.delay || this.delay),
              (r = this._delay),
              "number" == typeof n
                ? e.reduce(function (t, e) {
                    return (t[e] = n), t;
                  }, {})
                : e.reduce(function (t, e) {
                    return "object" == typeof n && e in n
                      ? ((t[e] = n[e]), t)
                      : "number" == typeof r
                      ? ((t[e] = r), t)
                      : ((t[e] = (r && r[e]) || 0), t);
                  }, {}))),
            this.updateDependencies(),
            this.addActionListeners(),
            void 0 !== t.rules && (this.flags.required = this.isRequired),
            0 === Object.keys(t.rules || {}).length && this.updated)
          ) {
            var c = this.flags.validated;
            this.validator.validate("#" + this.id).then(function () {
              o.flags.validated = c;
            });
          }
          this.flags.validated &&
            void 0 !== t.rules &&
            this.updated &&
            this.validator.validate("#" + this.id),
            (this.updated = !0),
            this.addValueListeners(),
            this.el && (this.updateClasses(), this.updateAriaAttrs());
        }),
        (gt.prototype.reset = function () {
          var t = this;
          this._cancellationToken &&
            ((this._cancellationToken.cancelled = !0),
            delete this._cancellationToken);
          var e = {
            untouched: !0,
            touched: !1,
            dirty: !1,
            pristine: !0,
            valid: null,
            invalid: null,
            validated: !1,
            pending: !1,
            required: !1,
            changed: !1,
          };
          Object.keys(this.flags)
            .filter(function (t) {
              return "required" !== t;
            })
            .forEach(function (n) {
              t.flags[n] = e[n];
            }),
            (this.initialValue = this.value),
            (this.flags.changed = !1),
            this.addValueListeners(),
            this.addActionListeners(),
            this.updateClasses(!0),
            this.updateAriaAttrs(),
            this.updateCustomValidity();
        }),
        (gt.prototype.setFlags = function (t) {
          var e = this,
            n = {
              pristine: "dirty",
              dirty: "pristine",
              valid: "invalid",
              invalid: "valid",
              touched: "untouched",
              untouched: "touched",
            };
          Object.keys(t).forEach(function (r) {
            (e.flags[r] = t[r]),
              n[r] && void 0 === t[n[r]] && (e.flags[n[r]] = !t[r]);
          }),
            (void 0 === t.untouched &&
              void 0 === t.touched &&
              void 0 === t.dirty &&
              void 0 === t.pristine) ||
              this.addActionListeners(),
            this.updateClasses(),
            this.updateAriaAttrs(),
            this.updateCustomValidity();
        }),
        (gt.prototype.updateDependencies = function () {
          var t = this;
          this.dependencies.forEach(function (t) {
            return t.field.destroy();
          }),
            (this.dependencies = []);
          var e = Object.keys(this.rules).reduce(function (e, n) {
            return (
              lt.isTargetRule(n) &&
                e.push({ selector: t.rules[n][0], name: n }),
              e
            );
          }, []);
          e.length &&
            this.vm &&
            this.vm.$el &&
            e.forEach(function (e) {
              var n = e.selector,
                r = e.name,
                o = t.vm.$refs[n],
                c = Array.isArray(o) ? o[0] : o;
              if (c) {
                var l = {
                  vm: t.vm,
                  classes: t.classes,
                  classNames: t.classNames,
                  delay: t.delay,
                  scope: t.scope,
                  events: t.events.join("|"),
                  immediate: t.immediate,
                  targetOf: t.id,
                };
                T(c.$watch)
                  ? ((l.component = c),
                    (l.el = c.$el),
                    (l.getter = ut.resolveGetter(c.$el, c.$vnode)))
                  : ((l.el = c), (l.getter = ut.resolveGetter(c, {}))),
                  t.dependencies.push({ name: r, field: new gt(l) });
              }
            });
        }),
        (gt.prototype.unwatch = function (t) {
          if ((void 0 === t && (t = null), !t))
            return (
              this.watchers.forEach(function (t) {
                return t.unwatch();
              }),
              void (this.watchers = [])
            );
          this.watchers
            .filter(function (e) {
              return t.test(e.tag);
            })
            .forEach(function (t) {
              return t.unwatch();
            }),
            (this.watchers = this.watchers.filter(function (e) {
              return !t.test(e.tag);
            }));
        }),
        (gt.prototype.updateClasses = function (t) {
          var e = this;
          if ((void 0 === t && (t = !1), this.classes && !this.isDisabled)) {
            var n = function (n) {
              A(n, e.classNames.dirty, e.flags.dirty),
                A(n, e.classNames.pristine, e.flags.pristine),
                A(n, e.classNames.touched, e.flags.touched),
                A(n, e.classNames.untouched, e.flags.untouched),
                t &&
                  (A(n, e.classNames.valid, !1),
                  A(n, e.classNames.invalid, !1)),
                !d(e.flags.valid) &&
                  e.flags.validated &&
                  A(n, e.classNames.valid, e.flags.valid),
                !d(e.flags.invalid) &&
                  e.flags.validated &&
                  A(n, e.classNames.invalid, e.flags.invalid);
            };
            if (o(this.el)) {
              var r = document.querySelectorAll(
                'input[name="' + this.el.name + '"]'
              );
              S(r).forEach(n);
            } else n(this.el);
          }
        }),
        (gt.prototype.addActionListeners = function () {
          var t = this;
          if ((this.unwatch(/class/), this.el)) {
            var e = function () {
                (t.flags.touched = !0),
                  (t.flags.untouched = !1),
                  t.classes &&
                    (A(t.el, t.classNames.touched, !0),
                    A(t.el, t.classNames.untouched, !1)),
                  t.unwatch(/^class_blur$/);
              },
              n = r(this.el) ? "input" : "change",
              c = function () {
                (t.flags.dirty = !0),
                  (t.flags.pristine = !1),
                  t.classes &&
                    (A(t.el, t.classNames.pristine, !1),
                    A(t.el, t.classNames.dirty, !0)),
                  t.unwatch(/^class_input$/);
              };
            if (this.componentInstance && T(this.componentInstance.$once))
              return (
                this.componentInstance.$once("input", c),
                this.componentInstance.$once("blur", e),
                this.watchers.push({
                  tag: "class_input",
                  unwatch: function () {
                    t.componentInstance.$off("input", c);
                  },
                }),
                void this.watchers.push({
                  tag: "class_blur",
                  unwatch: function () {
                    t.componentInstance.$off("blur", e);
                  },
                })
              );
            if (this.el) {
              mt(this.el, n, c);
              var l = o(this.el) ? "change" : "blur";
              mt(this.el, l, e),
                this.watchers.push({
                  tag: "class_input",
                  unwatch: function () {
                    t.el.removeEventListener(n, c);
                  },
                }),
                this.watchers.push({
                  tag: "class_blur",
                  unwatch: function () {
                    t.el.removeEventListener(l, e);
                  },
                });
            }
          }
        }),
        (gt.prototype.checkValueChanged = function () {
          return (
            (null !== this.initialValue || "" !== this.value || !r(this.el)) &&
            this.value !== this.initialValue
          );
        }),
        (gt.prototype._determineInputEvent = function () {
          return this.componentInstance
            ? (this.componentInstance.$options.model &&
                this.componentInstance.$options.model.event) ||
                "input"
            : this.model && this.model.lazy
            ? "change"
            : r(this.el)
            ? "input"
            : "change";
        }),
        (gt.prototype._determineEventList = function (t) {
          var e = this;
          return !this.events.length || this.componentInstance || r(this.el)
            ? [].concat(this.events).map(function (t) {
                return "input" === t && e.model && e.model.lazy ? "change" : t;
              })
            : this.events.map(function (e) {
                return "input" === e ? t : e;
              });
        }),
        (gt.prototype.addValueListeners = function () {
          var t = this;
          if ((this.unwatch(/^input_.+/), this.listen && this.el)) {
            var e = { cancelled: !1 },
              n = this.targetOf
                ? function () {
                    var e = t.validator._resolveField("#" + t.targetOf);
                    e &&
                      e.flags.validated &&
                      t.validator.validate("#" + t.targetOf);
                  }
                : function () {
                    for (var n = [], r = arguments.length; r--; )
                      n[r] = arguments[r];
                    (0 === n.length || ft(n[0])) && (n[0] = t.value),
                      (t.flags.pending = !0),
                      (t._cancellationToken = e),
                      t.validator.validate("#" + t.id, n[0]);
                  },
              r = this._determineInputEvent(),
              o = this._determineEventList(r);
            if ($(o, r)) {
              var c = null,
                l = null,
                d = !1;
              if (
                (this.model &&
                  this.model.expression &&
                  ((c = this.vm), (l = this.model.expression), (d = !0)),
                !l &&
                  this.componentInstance &&
                  this.componentInstance.$options.model &&
                  ((c = this.componentInstance),
                  (l = this.componentInstance.$options.model.prop || "value")),
                c && l)
              ) {
                var h = m(n, this.delay[r], e),
                  f = c.$watch(l, h);
                this.watchers.push({
                  tag: "input_model",
                  unwatch: function () {
                    t.vm.$nextTick(function () {
                      f();
                    });
                  },
                }),
                  d &&
                    (o = o.filter(function (t) {
                      return t !== r;
                    }));
              }
            }
            o.forEach(function (r) {
              var o = m(n, t.delay[r], e);
              t._addComponentEventListener(r, o), t._addHTMLEventListener(r, o);
            });
          }
        }),
        (gt.prototype._addComponentEventListener = function (t, e) {
          var n = this;
          this.componentInstance &&
            (this.componentInstance.$on(t, e),
            this.watchers.push({
              tag: "input_vue",
              unwatch: function () {
                n.componentInstance.$off(t, e);
              },
            }));
        }),
        (gt.prototype._addHTMLEventListener = function (t, e) {
          var n = this;
          if (this.el && !this.componentInstance) {
            var r = function (r) {
              mt(r, t, e),
                n.watchers.push({
                  tag: "input_native",
                  unwatch: function () {
                    r.removeEventListener(t, e);
                  },
                });
            };
            if ((r(this.el), o(this.el))) {
              var c = document.querySelectorAll(
                'input[name="' + this.el.name + '"]'
              );
              S(c).forEach(function (t) {
                (t._veeValidateId && t !== n.el) || r(t);
              });
            }
          }
        }),
        (gt.prototype.updateAriaAttrs = function () {
          var t = this;
          if (this.aria && this.el && T(this.el.setAttribute)) {
            var e = function (e) {
              e.setAttribute("aria-required", t.isRequired ? "true" : "false"),
                e.setAttribute(
                  "aria-invalid",
                  t.flags.invalid ? "true" : "false"
                );
            };
            if (o(this.el)) {
              var n = document.querySelectorAll(
                'input[name="' + this.el.name + '"]'
              );
              S(n).forEach(e);
            } else e(this.el);
          }
        }),
        (gt.prototype.updateCustomValidity = function () {
          this.validity &&
            this.el &&
            T(this.el.setCustomValidity) &&
            this.validator.errors &&
            this.el.setCustomValidity(
              this.flags.valid
                ? ""
                : this.validator.errors.firstById(this.id) || ""
            );
        }),
        (gt.prototype.destroy = function () {
          this._cancellationToken && (this._cancellationToken.cancelled = !0),
            this.unwatch(),
            this.dependencies.forEach(function (t) {
              return t.field.destroy();
            }),
            (this.dependencies = []);
        }),
        Object.defineProperties(gt.prototype, _t);
      var bt = function (t) {
          void 0 === t && (t = []),
            (this.items = t || []),
            (this.itemsById = this.items.reduce(function (t, e) {
              return (t[e.id] = e), t;
            }, {}));
        },
        wt = { length: { configurable: !0 } };
      (bt.prototype[
        "function" == typeof Symbol ? Symbol.iterator : "@@iterator"
      ] = function () {
        var t = this,
          e = 0;
        return {
          next: function () {
            return { value: t.items[e++], done: e > t.items.length };
          },
        };
      }),
        (wt.length.get = function () {
          return this.items.length;
        }),
        (bt.prototype.find = function (t) {
          return P(this.items, function (e) {
            return e.matches(t);
          });
        }),
        (bt.prototype.findById = function (t) {
          return this.itemsById[t] || null;
        }),
        (bt.prototype.filter = function (t) {
          return Array.isArray(t)
            ? this.items.filter(function (e) {
                return t.some(function (t) {
                  return e.matches(t);
                });
              })
            : this.items.filter(function (e) {
                return e.matches(t);
              });
        }),
        (bt.prototype.map = function (t) {
          return this.items.map(t);
        }),
        (bt.prototype.remove = function (t) {
          var e = null;
          if (!(e = t instanceof gt ? t : this.find(t))) return null;
          var n = this.items.indexOf(e);
          return this.items.splice(n, 1), delete this.itemsById[e.id], e;
        }),
        (bt.prototype.push = function (t) {
          if (!(t instanceof gt))
            throw C(
              "FieldBag only accepts instances of Field that has an id defined."
            );
          if (!t.id) throw C("Field id must be defined.");
          if (this.findById(t.id))
            throw C("Field with id " + t.id + " is already added.");
          this.items.push(t), (this.itemsById[t.id] = t);
        }),
        Object.defineProperties(bt.prototype, wt);
      var Ct = function (base, t) {
          (this.id = t._uid),
            (this._base = base),
            (this._paused = !1),
            (this.errors = new G(base.errors, this.id));
        },
        Et = {
          flags: { configurable: !0 },
          rules: { configurable: !0 },
          fields: { configurable: !0 },
          dictionary: { configurable: !0 },
          locale: { configurable: !0 },
        };
      (Et.flags.get = function () {
        var t = this;
        return this._base.fields.items
          .filter(function (e) {
            return e.vmId === t.id;
          })
          .reduce(function (t, e) {
            return (
              e.scope &&
                (t["$" + e.scope] || (t["$" + e.scope] = {}),
                (t["$" + e.scope][e.name] = e.flags)),
              (t[e.name] = e.flags),
              t
            );
          }, {});
      }),
        (Et.rules.get = function () {
          return this._base.rules;
        }),
        (Et.fields.get = function () {
          return new bt(this._base.fields.filter({ vmId: this.id }));
        }),
        (Et.dictionary.get = function () {
          return this._base.dictionary;
        }),
        (Et.locale.get = function () {
          return this._base.locale;
        }),
        (Et.locale.set = function (t) {
          this._base.locale = t;
        }),
        (Ct.prototype.localize = function () {
          for (var t, e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return (t = this._base).localize.apply(t, e);
        }),
        (Ct.prototype.update = function () {
          for (var t, e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return (t = this._base).update.apply(t, e);
        }),
        (Ct.prototype.attach = function (t) {
          var e = O({}, t, { vmId: this.id });
          return this._base.attach(e);
        }),
        (Ct.prototype.pause = function () {
          this._paused = !0;
        }),
        (Ct.prototype.resume = function () {
          this._paused = !1;
        }),
        (Ct.prototype.remove = function (t) {
          return this._base.remove(t);
        }),
        (Ct.prototype.detach = function (t, e) {
          return this._base.detach(t, e, this.id);
        }),
        (Ct.prototype.extend = function () {
          for (var t, e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return (t = this._base).extend.apply(t, e);
        }),
        (Ct.prototype.validate = function (t, e, n) {
          return (
            void 0 === n && (n = {}),
            this._paused
              ? Promise.resolve(!0)
              : this._base.validate(t, e, O({}, { vmId: this.id }, n || {}))
          );
        }),
        (Ct.prototype.verify = function () {
          for (var t, e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return (t = this._base).verify.apply(t, e);
        }),
        (Ct.prototype.validateAll = function (t, e) {
          return (
            void 0 === e && (e = {}),
            this._paused
              ? Promise.resolve(!0)
              : this._base.validateAll(t, O({}, { vmId: this.id }, e || {}))
          );
        }),
        (Ct.prototype.validateScopes = function (t) {
          return (
            void 0 === t && (t = {}),
            this._paused
              ? Promise.resolve(!0)
              : this._base.validateScopes(O({}, { vmId: this.id }, t || {}))
          );
        }),
        (Ct.prototype.destroy = function () {
          delete this.id, delete this._base;
        }),
        (Ct.prototype.reset = function (t) {
          return this._base.reset(
            Object.assign({}, t || {}, { vmId: this.id })
          );
        }),
        (Ct.prototype.flag = function () {
          for (var t, e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return (t = this._base).flag.apply(t, e.concat([this.id]));
        }),
        (Ct.prototype._resolveField = function () {
          for (var t, e = [], n = arguments.length; n--; ) e[n] = arguments[n];
          return (t = this._base)._resolveField.apply(t, e);
        }),
        Object.defineProperties(Ct.prototype, Et);
      var Tt = null,
        xt = function () {
          return Tt;
        },
        At = {
          provide: function () {
            return this.$validator && !M(this.$vnode)
              ? { $validator: this.$validator }
              : {};
          },
          beforeCreate: function () {
            if (!M(this.$vnode) && !1 !== this.$options.$__veeInject) {
              this.$parent || J(this.$options.$_veeValidate || {});
              var t = K(this);
              (!this.$parent ||
                (this.$options.$_veeValidate &&
                  /new/.test(this.$options.$_veeValidate.validator))) &&
                (this.$validator = new Ct(xt(), this));
              var e,
                n = ((e = this.$options.inject), !(!E(e) || !e.$validator));
              if (
                (this.$validator ||
                  !t.inject ||
                  n ||
                  (this.$validator = new Ct(xt(), this)),
                n || this.$validator)
              ) {
                if (!n && this.$validator)
                  this.$options._base.util.defineReactive(
                    this.$validator,
                    "errors",
                    this.$validator.errors
                  );
                this.$options.computed || (this.$options.computed = {}),
                  (this.$options.computed[
                    t.errorBagName || "errors"
                  ] = function () {
                    return this.$validator.errors;
                  }),
                  (this.$options.computed[
                    t.fieldsBagName || "fields"
                  ] = function () {
                    return this.$validator.fields.items.reduce(function (t, e) {
                      return e.scope
                        ? (t["$" + e.scope] || (t["$" + e.scope] = {}),
                          (t["$" + e.scope][e.name] = e.flags),
                          t)
                        : ((t[e.name] = e.flags), t);
                    }, {});
                  });
              }
            }
          },
          beforeDestroy: function () {
            this.$validator &&
              this._uid === this.$validator.id &&
              this.$validator.errors.clear();
          },
        };
      function St(t, e) {
        return e && e.$validator
          ? e.$validator.fields.findById(t._veeValidateId)
          : null;
      }
      var Nt = {
          bind: function (t, e, n) {
            var r = n.context.$validator;
            if (r) {
              var o = ut.generate(t, e, n);
              r.attach(o);
            }
          },
          inserted: function (t, e, n) {
            var r = St(t, n.context),
              o = ut.resolveScope(t, e, n);
            r && o !== r.scope && (r.update({ scope: o }), (r.updated = !1));
          },
          update: function (t, e, n) {
            var r = St(t, n.context);
            if (!(!r || (r.updated && h(e.value, e.oldValue)))) {
              var o = ut.resolveScope(t, e, n),
                c = ut.resolveRules(t, e, n);
              r.update({ scope: o, rules: c });
            }
          },
          unbind: function (t, e, n) {
            var r = n.context,
              o = St(t, r);
            o && r.$validator.detach(o);
          },
        },
        Ot = function (t, e, n) {
          void 0 === e && (e = { fastExit: !0 }),
            void 0 === n && (n = null),
            (this.errors = new G()),
            (this.fields = new bt()),
            this._createFields(t),
            (this.paused = !1),
            (this.fastExit = !!d(e && e.fastExit) || e.fastExit),
            (this.$vee = n || {
              _vm: {
                $nextTick: function (t) {
                  return T(t) ? t() : Promise.resolve();
                },
                $emit: function () {},
                $off: function () {},
              },
            });
        },
        It = {
          rules: { configurable: !0 },
          dictionary: { configurable: !0 },
          flags: { configurable: !0 },
          locale: { configurable: !0 },
        },
        Dt = {
          rules: { configurable: !0 },
          dictionary: { configurable: !0 },
          locale: { configurable: !0 },
        };
      (Dt.rules.get = function () {
        return lt.rules;
      }),
        (It.rules.get = function () {
          return lt.rules;
        }),
        (It.dictionary.get = function () {
          return Y.getDriver();
        }),
        (Dt.dictionary.get = function () {
          return Y.getDriver();
        }),
        (It.flags.get = function () {
          return this.fields.items.reduce(function (t, e) {
            var n;
            return e.scope
              ? ((t["$" + e.scope] = (((n = {})[e.name] = e.flags), n)), t)
              : ((t[e.name] = e.flags), t);
          }, {});
        }),
        (It.locale.get = function () {
          return Ot.locale;
        }),
        (It.locale.set = function (t) {
          Ot.locale = t;
        }),
        (Dt.locale.get = function () {
          return Y.getDriver().locale;
        }),
        (Dt.locale.set = function (t) {
          var e = t !== Y.getDriver().locale;
          (Y.getDriver().locale = t),
            e && Ot.$vee && Ot.$vee._vm && Ot.$vee._vm.$emit("localeChanged");
        }),
        (Ot.create = function (t, e) {
          return new Ot(t, e);
        }),
        (Ot.extend = function (t, e, n) {
          void 0 === n && (n = {}), Ot._guardExtend(t, e);
          var r = e.options || {};
          Ot._merge(t, {
            validator: e,
            paramNames: (n && n.paramNames) || e.paramNames,
            options: O({ hasTarget: !1, immediate: !0 }, r, n || {}),
          });
        }),
        (Ot.remove = function (t) {
          lt.remove(t);
        }),
        (Ot.prototype.localize = function (t, e) {
          Ot.localize(t, e);
        }),
        (Ot.localize = function (t, e) {
          var n;
          if (E(t)) Y.getDriver().merge(t);
          else {
            if (e) {
              var r = t || e.name;
              (e = O({}, e)), Y.getDriver().merge((((n = {})[r] = e), n));
            }
            t && (Ot.locale = t);
          }
        }),
        (Ot.prototype.attach = function (t) {
          var e = this,
            n = { name: t.name, scope: t.scope, persist: !0 },
            r = t.persist ? this.fields.find(n) : null;
          r && ((t.flags = r.flags), r.destroy(), this.fields.remove(r));
          var o = t.initialValue,
            c = new gt(t);
          return (
            this.fields.push(c),
            c.immediate
              ? this.$vee._vm.$nextTick(function () {
                  return e.validate("#" + c.id, o || c.value, { vmId: t.vmId });
                })
              : this._validate(c, o || c.value, { initial: !0 }).then(function (
                  t
                ) {
                  (c.flags.valid = t.valid), (c.flags.invalid = !t.valid);
                }),
            c
          );
        }),
        (Ot.prototype.flag = function (t, e, n) {
          void 0 === n && (n = null);
          var r = this._resolveField(t, void 0, n);
          r && e && r.setFlags(e);
        }),
        (Ot.prototype.detach = function (t, e, n) {
          var r = T(t.destroy) ? t : this._resolveField(t, e, n);
          r &&
            (r.persist ||
              (r.destroy(),
              this.errors.remove(r.name, r.scope, r.vmId),
              this.fields.remove(r)));
        }),
        (Ot.prototype.extend = function (t, e, n) {
          void 0 === n && (n = {}), Ot.extend(t, e, n);
        }),
        (Ot.prototype.reset = function (t) {
          var e = this;
          return this.$vee._vm
            .$nextTick()
            .then(function () {
              return e.$vee._vm.$nextTick();
            })
            .then(function () {
              e.fields.filter(t).forEach(function (n) {
                n.waitFor(null),
                  n.reset(),
                  e.errors.remove(n.name, n.scope, t && t.vmId);
              });
            });
        }),
        (Ot.prototype.update = function (t, e) {
          var n = e.scope;
          this._resolveField("#" + t) && this.errors.update(t, { scope: n });
        }),
        (Ot.prototype.remove = function (t) {
          Ot.remove(t);
        }),
        (Ot.prototype.validate = function (t, e, n) {
          var r = this;
          void 0 === n && (n = {});
          var o = n.silent,
            c = n.vmId;
          if (this.paused) return Promise.resolve(!0);
          if (d(t)) return this.validateScopes({ silent: o, vmId: c });
          if ("*" === t)
            return this.validateAll(void 0, { silent: o, vmId: c });
          if (/^(.+)\.\*$/.test(t)) {
            var l = t.match(/^(.+)\.\*$/)[1];
            return this.validateAll(l);
          }
          var h = this._resolveField(t);
          if (!h) return this._handleFieldNotFound(t);
          o || (h.flags.pending = !0), void 0 === e && (e = h.value);
          var f = this._validate(h, e);
          return (
            h.waitFor(f),
            f.then(function (t) {
              return (
                !o &&
                  h.isWaitingFor(f) &&
                  (h.waitFor(null), r._handleValidationResults([t], c)),
                t.valid
              );
            })
          );
        }),
        (Ot.prototype.pause = function () {
          return (this.paused = !0), this;
        }),
        (Ot.prototype.resume = function () {
          return (this.paused = !1), this;
        }),
        (Ot.prototype.validateAll = function (t, e) {
          var n = this;
          void 0 === e && (e = {});
          var r = e.silent,
            o = e.vmId;
          if (this.paused) return Promise.resolve(!0);
          var c = null,
            l = !1;
          return (
            "string" == typeof t
              ? (c = { scope: t, vmId: o })
              : E(t)
              ? ((c = Object.keys(t).map(function (t) {
                  return { name: t, vmId: o, scope: null };
                })),
                (l = !0))
              : (c = Array.isArray(t)
                  ? t.map(function (t) {
                      return "object" == typeof t
                        ? Object.assign({ vmId: o }, t)
                        : { name: t, vmId: o };
                    })
                  : { scope: null, vmId: o }),
            Promise.all(
              this.fields.filter(c).map(function (e) {
                return n._validate(e, l ? t[e.name] : e.value);
              })
            ).then(function (t) {
              return (
                r || n._handleValidationResults(t, o),
                t.every(function (t) {
                  return t.valid;
                })
              );
            })
          );
        }),
        (Ot.prototype.validateScopes = function (t) {
          var e = this;
          void 0 === t && (t = {});
          var n = t.silent,
            r = t.vmId;
          return this.paused
            ? Promise.resolve(!0)
            : Promise.all(
                this.fields.filter({ vmId: r }).map(function (t) {
                  return e._validate(t, t.value);
                })
              ).then(function (t) {
                return (
                  n || e._handleValidationResults(t, r),
                  t.every(function (t) {
                    return t.valid;
                  })
                );
              });
        }),
        (Ot.prototype.verify = function (t, e, n) {
          void 0 === n && (n = {});
          var r = {
              name: (n && n.name) || "{field}",
              rules: _(e),
              bails: v("bails", n, !0),
              forceRequired: !1,
              get isRequired() {
                return !!this.rules.required || this.forceRequired;
              },
            },
            o = Object.keys(r.rules).filter(lt.isTargetRule);
          return (
            o.length &&
              n &&
              E(n.values) &&
              (r.dependencies = o.map(function (t) {
                var e = r.rules[t][0];
                return { name: t, field: { value: n.values[e] } };
              })),
            this._validate(r, t).then(function (t) {
              var e = [],
                n = {};
              return (
                t.errors.forEach(function (t) {
                  e.push(t.msg), (n[t.rule] = t.msg);
                }),
                { valid: t.valid, errors: e, failedRules: n }
              );
            })
          );
        }),
        (Ot.prototype.destroy = function () {
          this.$vee._vm.$off("localeChanged");
        }),
        (Ot.prototype._createFields = function (t) {
          var e = this;
          t &&
            Object.keys(t).forEach(function (n) {
              var r = O({}, { name: n, rules: t[n] });
              e.attach(r);
            });
        }),
        (Ot.prototype._getDateFormat = function (t) {
          var e = null;
          return (
            t.date_format &&
              Array.isArray(t.date_format) &&
              (e = t.date_format[0]),
            e || Y.getDriver().getDateFormat(this.locale)
          );
        }),
        (Ot.prototype._formatErrorMessage = function (t, e, data, n) {
          void 0 === data && (data = {}), void 0 === n && (n = null);
          var r = this._getFieldDisplayName(t),
            o = this._getLocalizedParams(e, n);
          return Y.getDriver().getFieldMessage(this.locale, t.name, e.name, [
            r,
            o,
            data,
          ]);
        }),
        (Ot.prototype._convertParamObjectToArray = function (t, e) {
          if (Array.isArray(t)) return t;
          var n = lt.getParamNames(e);
          return n && E(t)
            ? n.reduce(function (e, n) {
                return n in t && e.push(t[n]), e;
              }, [])
            : t;
        }),
        (Ot.prototype._getLocalizedParams = function (t, e) {
          void 0 === e && (e = null);
          var n = this._convertParamObjectToArray(t.params, t.name);
          return t.options.hasTarget && n && n[0]
            ? [e || Y.getDriver().getAttribute(this.locale, n[0], n[0])].concat(
                n.slice(1)
              )
            : n;
        }),
        (Ot.prototype._getFieldDisplayName = function (t) {
          return (
            t.alias || Y.getDriver().getAttribute(this.locale, t.name, t.name)
          );
        }),
        (Ot.prototype._convertParamArrayToObj = function (t, e) {
          var n = lt.getParamNames(e);
          if (!n) return t;
          if (E(t)) {
            if (
              n.some(function (e) {
                return -1 !== Object.keys(t).indexOf(e);
              })
            )
              return t;
            t = [t];
          }
          return t.reduce(function (t, e, r) {
            return (t[n[r]] = e), t;
          }, {});
        }),
        (Ot.prototype._test = function (t, e, n) {
          var r = this,
            o = lt.getValidatorMethod(n.name),
            c = Array.isArray(n.params) ? S(n.params) : n.params;
          c || (c = []);
          var l = null;
          if (!o || "function" != typeof o)
            return Promise.reject(
              C("No such validator '" + n.name + "' exists.")
            );
          if (n.options.hasTarget && t.dependencies) {
            var d = P(t.dependencies, function (t) {
              return t.name === n.name;
            });
            d &&
              ((l = d.field.alias), (c = [d.field.value].concat(c.slice(1))));
          } else
            "required" === n.name &&
              t.rejectsFalse &&
              (c = c.length ? c : [!0]);
          if (n.options.isDate) {
            var h = this._getDateFormat(t.rules);
            "date_format" !== n.name && c.push(h);
          }
          var f = o(e, this._convertParamArrayToObj(c, n.name));
          return T(f.then)
            ? f.then(function (e) {
                var o = !0,
                  data = {};
                return (
                  Array.isArray(e)
                    ? (o = e.every(function (t) {
                        return E(t) ? t.valid : t;
                      }))
                    : ((o = E(e) ? e.valid : e), (data = e.data)),
                  {
                    valid: o,
                    data: f.data,
                    errors: o ? [] : [r._createFieldError(t, n, data, l)],
                  }
                );
              })
            : (E(f) || (f = { valid: f, data: {} }),
              {
                valid: f.valid,
                data: f.data,
                errors: f.valid
                  ? []
                  : [this._createFieldError(t, n, f.data, l)],
              });
        }),
        (Ot._merge = function (t, e) {
          var n = e.validator,
            r = e.options,
            o = e.paramNames,
            c = T(n) ? n : n.validate;
          n.getMessage && Y.getDriver().setMessage(Ot.locale, t, n.getMessage),
            lt.add(t, { validate: c, options: r, paramNames: o });
        }),
        (Ot._guardExtend = function (t, e) {
          if (!T(e) && !T(e.validate))
            throw C(
              "Extension Error: The validator '" +
                t +
                "' must be a function or have a 'validate' method."
            );
        }),
        (Ot.prototype._createFieldError = function (t, e, data, n) {
          var r = this;
          return {
            id: t.id,
            vmId: t.vmId,
            field: t.name,
            msg: this._formatErrorMessage(t, e, data, n),
            rule: e.name,
            scope: t.scope,
            regenerate: function () {
              return r._formatErrorMessage(t, e, data, n);
            },
          };
        }),
        (Ot.prototype._resolveField = function (t, e, n) {
          if ("#" === t[0]) return this.fields.findById(t.slice(1));
          if (!d(e)) return this.fields.find({ name: t, scope: e, vmId: n });
          if ($(t, ".")) {
            var r = t.split("."),
              o = r[0],
              c = r.slice(1),
              l = this.fields.find({ name: c.join("."), scope: o, vmId: n });
            if (l) return l;
          }
          return this.fields.find({ name: t, scope: null, vmId: n });
        }),
        (Ot.prototype._handleFieldNotFound = function (t, e) {
          var n = d(e) ? t : (d(e) ? "" : e + ".") + t;
          return Promise.reject(
            C(
              'Validating a non-existent field: "' +
                n +
                '". Use "attach()" first.'
            )
          );
        }),
        (Ot.prototype._handleValidationResults = function (t, e) {
          var n = this,
            r = t.map(function (t) {
              return { id: t.id };
            });
          this.errors.removeById(
            r.map(function (t) {
              return t.id;
            })
          ),
            t.forEach(function (t) {
              n.errors.remove(t.field, t.scope, e);
            });
          var o = t.reduce(function (t, e) {
            return t.push.apply(t, e.errors), t;
          }, []);
          this.errors.add(o),
            this.fields.filter(r).forEach(function (e) {
              var n = P(t, function (t) {
                return t.id === e.id;
              });
              e.setFlags({ pending: !1, valid: n.valid, validated: !0 });
            });
        }),
        (Ot.prototype._shouldSkip = function (t, e) {
          return (
            !1 !== t.bails &&
            (!(!t.isDisabled || !X().useConstraintAttrs) ||
              (!t.isRequired && (d(e) || "" === e || H(e))))
          );
        }),
        (Ot.prototype._shouldBail = function (t) {
          return void 0 !== t.bails ? t.bails : this.fastExit;
        }),
        (Ot.prototype._validate = function (t, e, n) {
          var r = this;
          void 0 === n && (n = {});
          var o = n.initial,
            c = Object.keys(t.rules).filter(lt.isRequireRule);
          if (
            ((t.forceRequired = !1),
            c.forEach(function (n) {
              var o = lt.getOptions(n),
                c = r._test(t, e, { name: n, params: t.rules[n], options: o });
              if (T(c.then)) throw C("Require rules cannot be async");
              if (!E(c))
                throw C("Require rules has to return an object (see docs)");
              !0 === c.data.required && (t.forceRequired = !0);
            }),
            this._shouldSkip(t, e))
          )
            return Promise.resolve({
              valid: !0,
              id: t.id,
              field: t.name,
              scope: t.scope,
              errors: [],
            });
          var l = [],
            d = [],
            h = !1;
          return (
            T(t.checkValueChanged) && (t.flags.changed = t.checkValueChanged()),
            Object.keys(t.rules)
              .filter(function (t) {
                return !o || !lt.has(t) || lt.isImmediate(t);
              })
              .some(function (n) {
                var o = lt.getOptions(n),
                  c = r._test(t, e, {
                    name: n,
                    params: t.rules[n],
                    options: o,
                  });
                return (
                  T(c.then)
                    ? l.push(c)
                    : !c.valid && r._shouldBail(t)
                    ? (d.push.apply(d, c.errors), (h = !0))
                    : l.push(
                        new Promise(function (t) {
                          return t(c);
                        })
                      ),
                  h
                );
              }),
            h
              ? Promise.resolve({
                  valid: !1,
                  errors: d,
                  id: t.id,
                  field: t.name,
                  scope: t.scope,
                })
              : Promise.all(l).then(function (e) {
                  return e.reduce(
                    function (t, e) {
                      var n;
                      return (
                        e.valid || (n = t.errors).push.apply(n, e.errors),
                        (t.valid = t.valid && e.valid),
                        t
                      );
                    },
                    {
                      valid: !0,
                      errors: d,
                      id: t.id,
                      field: t.name,
                      scope: t.scope,
                    }
                  );
                })
          );
        }),
        Object.defineProperties(Ot.prototype, It),
        Object.defineProperties(Ot, Dt);
      var kt = function (t) {
          return E(t)
            ? Object.keys(t).reduce(function (e, n) {
                return (e[n] = kt(t[n])), e;
              }, {})
            : T(t)
            ? t("{0}", ["{1}", "{2}", "{3}"])
            : t;
        },
        Pt = function (t, e) {
          (this.i18n = t), (this.rootKey = e);
        },
        Mt = { locale: { configurable: !0 } };
      (Mt.locale.get = function () {
        return this.i18n.locale;
      }),
        (Mt.locale.set = function (t) {
          w(
            "Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead"
          );
        }),
        (Pt.prototype.getDateFormat = function (t) {
          return this.i18n.getDateTimeFormat(t || this.locale);
        }),
        (Pt.prototype.setDateFormat = function (t, e) {
          this.i18n.setDateTimeFormat(t || this.locale, e);
        }),
        (Pt.prototype.getMessage = function (t, e, data) {
          var path = this.rootKey + ".messages." + e,
            n = data;
          return (
            Array.isArray(data) && (n = [].concat.apply([], data)),
            this.i18n.te(path)
              ? this.i18n.t(path, n)
              : this.i18n.te(path, this.i18n.fallbackLocale)
              ? this.i18n.t(path, this.i18n.fallbackLocale, n)
              : this.i18n.t(this.rootKey + ".messages._default", n)
          );
        }),
        (Pt.prototype.getAttribute = function (t, e, n) {
          void 0 === n && (n = "");
          var path = this.rootKey + ".attributes." + e;
          return this.i18n.te(path) ? this.i18n.t(path) : n;
        }),
        (Pt.prototype.getFieldMessage = function (t, e, n, data) {
          var path = this.rootKey + ".custom." + e + "." + n;
          return this.i18n.te(path)
            ? this.i18n.t(path, data)
            : this.getMessage(t, n, data);
        }),
        (Pt.prototype.merge = function (t) {
          var e = this;
          Object.keys(t).forEach(function (n) {
            var r,
              o = R({}, v(n + "." + e.rootKey, e.i18n.messages, {})),
              c = R(
                o,
                (function (t) {
                  var e = {};
                  return (
                    t.messages && (e.messages = kt(t.messages)),
                    t.custom && (e.custom = kt(t.custom)),
                    t.attributes && (e.attributes = t.attributes),
                    d(t.dateFormat) || (e.dateFormat = t.dateFormat),
                    e
                  );
                })(t[n])
              );
            e.i18n.mergeLocaleMessage(n, (((r = {})[e.rootKey] = c), r)),
              c.dateFormat && e.i18n.setDateTimeFormat(n, c.dateFormat);
          });
        }),
        (Pt.prototype.setMessage = function (t, e, n) {
          var r, o;
          this.merge(
            (((o = {})[t] = { messages: ((r = {}), (r[e] = n), r) }), o)
          );
        }),
        (Pt.prototype.setAttribute = function (t, e, n) {
          var r, o;
          this.merge(
            (((o = {})[t] = { attributes: ((r = {}), (r[e] = n), r) }), o)
          );
        }),
        Object.defineProperties(Pt.prototype, Mt);
      var Ft,
        Rt,
        Lt,
        jt = {
          aggressive: function () {
            return { on: ["input"] };
          },
          eager: function (t) {
            return t.errors.length
              ? { on: ["input"] }
              : { on: ["change", "blur"] };
          },
          passive: function () {
            return { on: [] };
          },
          lazy: function () {
            return { on: ["change"] };
          },
        },
        $t = function (t, e) {
          var n;
          this.configure(t),
            (Lt = this),
            e && (Ft = e),
            (this._validator =
              ((n = new Ot(null, { fastExit: t && t.fastExit }, this)),
              (Tt = n),
              n)),
            this._initVM(this.config),
            this._initI18n(this.config);
        },
        Ht = { i18nDriver: { configurable: !0 }, config: { configurable: !0 } },
        Ut = { i18nDriver: { configurable: !0 }, config: { configurable: !0 } };
      ($t.setI18nDriver = function (t, e) {
        Y.setDriver(t, e);
      }),
        ($t.configure = function (t) {
          J(t);
        }),
        ($t.setMode = function (t, e) {
          if ((J({ mode: t }), e)) {
            if (!T(e))
              throw new Error("A mode implementation must be a function");
            jt[t] = e;
          }
        }),
        ($t.use = function (t, e) {
          return (
            void 0 === e && (e = {}),
            T(t)
              ? Lt
                ? void t({ Validator: Ot, ErrorBag: G, Rules: Ot.rules }, e)
                : (Rt || (Rt = []), void Rt.push({ plugin: t, options: e }))
              : w("The plugin must be a callable function")
          );
        }),
        ($t.install = function (t, e) {
          (Ft && t === Ft) ||
            ((Ft = t),
            (Lt = new $t(e)),
            (Ot.$vee = Lt),
            (function () {
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    vt = !0;
                  },
                });
                window.addEventListener("testPassive", null, t),
                  window.removeEventListener("testPassive", null, t);
              } catch (t) {
                vt = !1;
              }
            })(),
            Ft.mixin(At),
            Ft.directive("validate", Nt),
            Rt &&
              (Rt.forEach(function (t) {
                var e = t.plugin,
                  n = t.options;
                $t.use(e, n);
              }),
              (Rt = null)));
        }),
        (Ht.i18nDriver.get = function () {
          return Y.getDriver();
        }),
        (Ut.i18nDriver.get = function () {
          return Y.getDriver();
        }),
        (Ht.config.get = function () {
          return X();
        }),
        (Ut.config.get = function () {
          return X();
        }),
        ($t.prototype._initVM = function (t) {
          var e = this;
          this._vm = new Ft({
            data: function () {
              return {
                errors: e._validator.errors,
                fields: e._validator.fields,
              };
            },
          });
        }),
        ($t.prototype._initI18n = function (t) {
          var e = this,
            n = t.dictionary,
            r = t.i18n,
            o = t.i18nRootKey,
            c = t.locale,
            l = function () {
              n && e.i18nDriver.merge(n), e._validator.errors.regenerate();
            };
          r
            ? ($t.setI18nDriver("i18n", new Pt(r, o)),
              r._vm.$watch("locale", l))
            : "undefined" != typeof window && this._vm.$on("localeChanged", l),
            n && this.i18nDriver.merge(n),
            c && !r && this._validator.localize(c);
        }),
        ($t.prototype.configure = function (t) {
          J(t);
        }),
        Object.defineProperties($t.prototype, Ht),
        Object.defineProperties($t, Ut),
        ($t.mixin = At),
        ($t.directive = Nt),
        ($t.Validator = Ot),
        ($t.ErrorBag = G);
      var qt,
        Vt = {
          name: "en",
          messages: {
            _default: function (t) {
              return "The " + t + " value is not valid";
            },
            after: function (t, e) {
              var n = e[0];
              return (
                "The " +
                t +
                " must be after " +
                (e[1] ? "or equal to " : "") +
                n
              );
            },
            alpha: function (t) {
              return (
                "The " + t + " field may only contain alphabetic characters"
              );
            },
            alpha_dash: function (t) {
              return (
                "The " +
                t +
                " field may contain alpha-numeric characters as well as dashes and underscores"
              );
            },
            alpha_num: function (t) {
              return (
                "The " + t + " field may only contain alpha-numeric characters"
              );
            },
            alpha_spaces: function (t) {
              return (
                "The " +
                t +
                " field may only contain alphabetic characters as well as spaces"
              );
            },
            before: function (t, e) {
              var n = e[0];
              return (
                "The " +
                t +
                " must be before " +
                (e[1] ? "or equal to " : "") +
                n
              );
            },
            between: function (t, e) {
              return (
                "The " + t + " field must be between " + e[0] + " and " + e[1]
              );
            },
            confirmed: function (t) {
              return "The " + t + " confirmation does not match";
            },
            credit_card: function (t) {
              return "The " + t + " field is invalid";
            },
            date_between: function (t, e) {
              return "The " + t + " must be between " + e[0] + " and " + e[1];
            },
            date_format: function (t, e) {
              return "The " + t + " must be in the format " + e[0];
            },
            decimal: function (t, e) {
              void 0 === e && (e = []);
              var n = e[0];
              return (
                void 0 === n && (n = "*"),
                "The " +
                  t +
                  " field must be numeric and may contain" +
                  (n && "*" !== n ? " " + n : "") +
                  " decimal points"
              );
            },
            digits: function (t, e) {
              return (
                "The " +
                t +
                " field must be numeric and contains exactly " +
                e[0] +
                " digits"
              );
            },
            dimensions: function (t, e) {
              return (
                "The " +
                t +
                " field must be " +
                e[0] +
                " pixels by " +
                e[1] +
                " pixels"
              );
            },
            email: function (t) {
              return "The " + t + " field must be a valid email";
            },
            excluded: function (t) {
              return "The " + t + " field must be a valid value";
            },
            ext: function (t) {
              return "The " + t + " field must be a valid file";
            },
            image: function (t) {
              return "The " + t + " field must be an image";
            },
            included: function (t) {
              return "The " + t + " field must be a valid value";
            },
            integer: function (t) {
              return "The " + t + " field must be an integer";
            },
            ip: function (t) {
              return "The " + t + " field must be a valid ip address";
            },
            ip_or_fqdn: function (t) {
              return "The " + t + " field must be a valid ip address or FQDN";
            },
            length: function (t, e) {
              var n = e[0],
                r = e[1];
              return r
                ? "The " + t + " length must be between " + n + " and " + r
                : "The " + t + " length must be " + n;
            },
            max: function (t, e) {
              return (
                "The " +
                t +
                " field may not be greater than " +
                e[0] +
                " characters"
              );
            },
            max_value: function (t, e) {
              return "The " + t + " field must be " + e[0] + " or less";
            },
            mimes: function (t) {
              return "The " + t + " field must have a valid file type";
            },
            min: function (t, e) {
              return (
                "The " + t + " field must be at least " + e[0] + " characters"
              );
            },
            min_value: function (t, e) {
              return "The " + t + " field must be " + e[0] + " or more";
            },
            numeric: function (t) {
              return "The " + t + " field may only contain numeric characters";
            },
            regex: function (t) {
              return "The " + t + " field format is invalid";
            },
            required: function (t) {
              return "The " + t + " field is required";
            },
            required_if: function (t, e) {
              return (
                "The " +
                t +
                " field is required when the " +
                e[0] +
                " field has this value"
              );
            },
            size: function (t, e) {
              return (
                "The " +
                t +
                " size must be less than " +
                (function (t) {
                  var i =
                    0 === (t = 1024 * Number(t))
                      ? 0
                      : Math.floor(Math.log(t) / Math.log(1024));
                  return (
                    1 * (t / Math.pow(1024, i)).toFixed(2) +
                    " " +
                    ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]
                  );
                })(e[0])
              );
            },
            url: function (t) {
              return "The " + t + " field is not a valid URL";
            },
          },
          attributes: {},
        };
      function Wt(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      "undefined" != typeof VeeValidate &&
        VeeValidate.Validator.localize((((qt = {})[Vt.name] = Vt), qt));
      function Bt(t) {
        var e = new Date(t.getTime()),
          n = e.getTimezoneOffset();
        return e.setSeconds(0, 0), 6e4 * n + (e.getTime() % 6e4);
      }
      var zt = {
        dateTimeDelimeter: /[T ]/,
        plainTime: /:/,
        timeZoneDelimeter: /[Z ]/i,
        YY: /^(\d{2})$/,
        YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
        YYYY: /^(\d{4})/,
        YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
        MM: /^-(\d{2})$/,
        DDD: /^-?(\d{3})$/,
        MMDD: /^-?(\d{2})-?(\d{2})$/,
        Www: /^-?W(\d{2})$/,
        WwwD: /^-?W(\d{2})-?(\d{1})$/,
        HH: /^(\d{2}([.,]\d*)?)$/,
        HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
        timezone: /([Z+-].*)$/,
        timezoneZ: /^(Z)$/,
        timezoneHH: /^([+-])(\d{2})$/,
        timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
      };
      function Qt(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        if (null === t) return new Date(NaN);
        var n = e || {},
          r = null == n.additionalDigits ? 2 : Wt(n.additionalDigits);
        if (2 !== r && 1 !== r && 0 !== r)
          throw new RangeError("additionalDigits must be 0, 1 or 2");
        if (
          t instanceof Date ||
          ("object" == typeof t &&
            "[object Date]" === Object.prototype.toString.call(t))
        )
          return new Date(t.getTime());
        if (
          "number" == typeof t ||
          "[object Number]" === Object.prototype.toString.call(t)
        )
          return new Date(t);
        if (
          "string" != typeof t &&
          "[object String]" !== Object.prototype.toString.call(t)
        )
          return new Date(NaN);
        var o = Yt(t),
          c = Gt(o.date, r),
          l = c.year,
          d = c.restDateString,
          h = Zt(d, l);
        if (isNaN(h)) return new Date(NaN);
        if (h) {
          var f,
            v = h.getTime(),
            time = 0;
          if (o.time && ((time = Kt(o.time)), isNaN(time)))
            return new Date(NaN);
          if (o.timezone) {
            if (((f = Xt(o.timezone)), isNaN(f))) return new Date(NaN);
          } else (f = Bt(new Date(v + time))), (f = Bt(new Date(v + time + f)));
          return new Date(v + time + f);
        }
        return new Date(NaN);
      }
      function Yt(t) {
        var e,
          n = {},
          r = t.split(zt.dateTimeDelimeter);
        if (
          (zt.plainTime.test(r[0])
            ? ((n.date = null), (e = r[0]))
            : ((n.date = r[0]),
              (e = r[1]),
              zt.timeZoneDelimeter.test(n.date) &&
                ((n.date = t.split(zt.timeZoneDelimeter)[0]),
                (e = t.substr(n.date.length, t.length)))),
          e)
        ) {
          var o = zt.timezone.exec(e);
          o
            ? ((n.time = e.replace(o[1], "")), (n.timezone = o[1]))
            : (n.time = e);
        }
        return n;
      }
      function Gt(t, e) {
        var n,
          r = zt.YYY[e],
          o = zt.YYYYY[e];
        if ((n = zt.YYYY.exec(t) || o.exec(t))) {
          var c = n[1];
          return { year: parseInt(c, 10), restDateString: t.slice(c.length) };
        }
        if ((n = zt.YY.exec(t) || r.exec(t))) {
          var l = n[1];
          return {
            year: 100 * parseInt(l, 10),
            restDateString: t.slice(l.length),
          };
        }
        return { year: null };
      }
      function Zt(t, e) {
        if (null === e) return null;
        var n, r, o, c;
        if (0 === t.length) return (r = new Date(0)).setUTCFullYear(e), r;
        if ((n = zt.MM.exec(t)))
          return (
            (r = new Date(0)),
            re(e, (o = parseInt(n[1], 10) - 1))
              ? (r.setUTCFullYear(e, o), r)
              : new Date(NaN)
          );
        if ((n = zt.DDD.exec(t))) {
          r = new Date(0);
          var l = parseInt(n[1], 10);
          return (function (t, e) {
            if (e < 1) return !1;
            var n = ne(t);
            if (n && e > 366) return !1;
            if (!n && e > 365) return !1;
            return !0;
          })(e, l)
            ? (r.setUTCFullYear(e, 0, l), r)
            : new Date(NaN);
        }
        if ((n = zt.MMDD.exec(t))) {
          (r = new Date(0)), (o = parseInt(n[1], 10) - 1);
          var d = parseInt(n[2], 10);
          return re(e, o, d) ? (r.setUTCFullYear(e, o, d), r) : new Date(NaN);
        }
        if ((n = zt.Www.exec(t)))
          return ie(e, (c = parseInt(n[1], 10) - 1)) ? Jt(e, c) : new Date(NaN);
        if ((n = zt.WwwD.exec(t))) {
          c = parseInt(n[1], 10) - 1;
          var h = parseInt(n[2], 10) - 1;
          return ie(e, c, h) ? Jt(e, c, h) : new Date(NaN);
        }
        return null;
      }
      function Kt(t) {
        var e, n, r;
        if ((e = zt.HH.exec(t)))
          return oe((n = parseFloat(e[1].replace(",", "."))))
            ? (n % 24) * 36e5
            : NaN;
        if ((e = zt.HHMM.exec(t)))
          return oe(
            (n = parseInt(e[1], 10)),
            (r = parseFloat(e[2].replace(",", ".")))
          )
            ? (n % 24) * 36e5 + 6e4 * r
            : NaN;
        if ((e = zt.HHMMSS.exec(t))) {
          (n = parseInt(e[1], 10)), (r = parseInt(e[2], 10));
          var o = parseFloat(e[3].replace(",", "."));
          return oe(n, r, o) ? (n % 24) * 36e5 + 6e4 * r + 1e3 * o : NaN;
        }
        return null;
      }
      function Xt(t) {
        var e, n, r;
        if ((e = zt.timezoneZ.exec(t))) return 0;
        if ((e = zt.timezoneHH.exec(t)))
          return (
            (r = parseInt(e[2], 10)),
            ae() ? ((n = 36e5 * r), "+" === e[1] ? -n : n) : NaN
          );
        if ((e = zt.timezoneHHMM.exec(t))) {
          r = parseInt(e[2], 10);
          var o = parseInt(e[3], 10);
          return ae(r, o)
            ? ((n = 36e5 * r + 6e4 * o), "+" === e[1] ? -n : n)
            : NaN;
        }
        return 0;
      }
      function Jt(t, e, n) {
        (e = e || 0), (n = n || 0);
        var r = new Date(0);
        r.setUTCFullYear(t, 0, 4);
        var o = 7 * e + n + 1 - (r.getUTCDay() || 7);
        return r.setUTCDate(r.getUTCDate() + o), r;
      }
      var te = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        ee = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function ne(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      function re(t, e, n) {
        if (e < 0 || e > 11) return !1;
        if (null != n) {
          if (n < 1) return !1;
          var r = ne(t);
          if (r && n > ee[e]) return !1;
          if (!r && n > te[e]) return !1;
        }
        return !0;
      }
      function ie(t, e, n) {
        return !(e < 0 || e > 52) && (null == n || !(n < 0 || n > 6));
      }
      function oe(t, e, n) {
        return (
          (null == t || !(t < 0 || t >= 25)) &&
          (null == e || !(e < 0 || e >= 60)) &&
          (null == n || !(n < 0 || n >= 60))
        );
      }
      function ae(t, e) {
        return null == e || !(e < 0 || e > 59);
      }
      function se(t, e, n) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var r = Qt(t, n).getTime(),
          o = Wt(e);
        return new Date(r + o);
      }
      function ue(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = Qt(t, e);
        return !isNaN(n);
      }
      var ce = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function le(t) {
        return function (e) {
          var n = e || {},
            r = n.width ? String(n.width) : t.defaultWidth;
          return t.formats[r] || t.formats[t.defaultWidth];
        };
      }
      var de = {
          date: le({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: le({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: le({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        he = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function fe(t) {
        return function (e, n) {
          var r = n || {},
            o = r.width ? String(r.width) : t.defaultWidth;
          return ("formatting" ===
            (r.context ? String(r.context) : "standalone") && t.formattingValues
            ? t.formattingValues[o] ||
              t.formattingValues[t.defaultFormattingWidth]
            : t.values[o] || t.values[t.defaultWidth])[
            t.argumentCallback ? t.argumentCallback(e) : e
          ];
        };
      }
      function pe(t) {
        return function (e, n) {
          var r = String(e),
            o = n || {},
            c = o.width,
            l =
              (c && t.matchPatterns[c]) || t.matchPatterns[t.defaultMatchWidth],
            d = r.match(l);
          if (!d) return null;
          var h,
            f = d[0],
            v =
              (c && t.parsePatterns[c]) || t.parsePatterns[t.defaultParseWidth];
          return (
            (h =
              "[object Array]" === Object.prototype.toString.call(v)
                ? v.findIndex(function (pattern) {
                    return pattern.test(r);
                  })
                : (function (object, t) {
                    for (var e in object)
                      if (object.hasOwnProperty(e) && t(object[e])) return e;
                  })(v, function (pattern) {
                    return pattern.test(r);
                  })),
            (h = t.valueCallback ? t.valueCallback(h) : h),
            {
              value: (h = o.valueCallback ? o.valueCallback(h) : h),
              rest: r.slice(f.length),
            }
          );
        };
      }
      var ve,
        me = {
          formatDistance: function (t, e, n) {
            var r;
            return (
              (n = n || {}),
              (r =
                "string" == typeof ce[t]
                  ? ce[t]
                  : 1 === e
                  ? ce[t].one
                  : ce[t].other.replace("{{count}}", e)),
              n.addSuffix ? (n.comparison > 0 ? "in " + r : r + " ago") : r
            );
          },
          formatLong: de,
          formatRelative: function (t, e, n, r) {
            return he[t];
          },
          localize: {
            ordinalNumber: function (t, e) {
              var n = Number(t),
                r = n % 100;
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + "st";
                  case 2:
                    return n + "nd";
                  case 3:
                    return n + "rd";
                }
              return n + "th";
            },
            era: fe({
              values: {
                narrow: ["B", "A"],
                abbreviated: ["BC", "AD"],
                wide: ["Before Christ", "Anno Domini"],
              },
              defaultWidth: "wide",
            }),
            quarter: fe({
              values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                  "1st quarter",
                  "2nd quarter",
                  "3rd quarter",
                  "4th quarter",
                ],
              },
              defaultWidth: "wide",
              argumentCallback: function (t) {
                return Number(t) - 1;
              },
            }),
            month: fe({
              values: {
                narrow: [
                  "J",
                  "F",
                  "M",
                  "A",
                  "M",
                  "J",
                  "J",
                  "A",
                  "S",
                  "O",
                  "N",
                  "D",
                ],
                abbreviated: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                wide: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              defaultWidth: "wide",
            }),
            day: fe({
              values: {
                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                wide: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
              },
              defaultWidth: "wide",
            }),
            dayPeriod: fe({
              values: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
              },
              defaultWidth: "wide",
              formattingValues: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
              },
              defaulFormattingWidth: "wide",
            }),
          },
          match: {
            ordinalNumber:
              ((ve = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (t) {
                  return parseInt(t, 10);
                },
              }),
              function (t, e) {
                var n = String(t),
                  r = e || {},
                  o = n.match(ve.matchPattern);
                if (!o) return null;
                var c = o[0],
                  l = n.match(ve.parsePattern);
                if (!l) return null;
                var d = ve.valueCallback ? ve.valueCallback(l[0]) : l[0];
                return {
                  value: (d = r.valueCallback ? r.valueCallback(d) : d),
                  rest: n.slice(c.length),
                };
              }),
            era: pe({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: "any",
            }),
            quarter: pe({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: "any",
              valueCallback: function (t) {
                return t + 1;
              },
            }),
            month: pe({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: "any",
            }),
            day: pe({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: "any",
            }),
            dayPeriod: pe({
              matchPatterns: {
                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: "any",
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: "any",
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
      function ye(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = 1,
          r = Qt(t, e),
          o = r.getUTCDay(),
          c = (o < n ? 7 : 0) + o - n;
        return r.setUTCDate(r.getUTCDate() - c), r.setUTCHours(0, 0, 0, 0), r;
      }
      function ge(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = Qt(t, e),
          r = n.getUTCFullYear(),
          o = new Date(0);
        o.setUTCFullYear(r + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var c = ye(o, e),
          l = new Date(0);
        l.setUTCFullYear(r, 0, 4), l.setUTCHours(0, 0, 0, 0);
        var d = ye(l, e);
        return n.getTime() >= c.getTime()
          ? r + 1
          : n.getTime() >= d.getTime()
          ? r
          : r - 1;
      }
      function _e(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = ge(t, e),
          r = new Date(0);
        r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var o = ye(r, e);
        return o;
      }
      function be(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = Qt(t, e),
          r = ye(n, e).getTime() - _e(n, e).getTime();
        return Math.round(r / 6048e5) + 1;
      }
      function we(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = e || {},
          r = n.locale,
          o = r && r.options && r.options.weekStartsOn,
          c = null == o ? 0 : Wt(o),
          l = null == n.weekStartsOn ? c : Wt(n.weekStartsOn);
        if (!(l >= 0 && l <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var d = Qt(t, n),
          h = d.getUTCDay(),
          f = (h < l ? 7 : 0) + h - l;
        return d.setUTCDate(d.getUTCDate() - f), d.setUTCHours(0, 0, 0, 0), d;
      }
      function Ce(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = Qt(t, e),
          r = n.getUTCFullYear(),
          o = e || {},
          c = o.locale,
          l = c && c.options && c.options.firstWeekContainsDate,
          d = null == l ? 1 : Wt(l),
          h = null == o.firstWeekContainsDate ? d : Wt(o.firstWeekContainsDate);
        if (!(h >= 1 && h <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var f = new Date(0);
        f.setUTCFullYear(r + 1, 0, h), f.setUTCHours(0, 0, 0, 0);
        var v = we(f, e),
          m = new Date(0);
        m.setUTCFullYear(r, 0, h), m.setUTCHours(0, 0, 0, 0);
        var y = we(m, e);
        return n.getTime() >= v.getTime()
          ? r + 1
          : n.getTime() >= y.getTime()
          ? r
          : r - 1;
      }
      function Ee(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = e || {},
          r = n.locale,
          o = r && r.options && r.options.firstWeekContainsDate,
          c = null == o ? 1 : Wt(o),
          l = null == n.firstWeekContainsDate ? c : Wt(n.firstWeekContainsDate),
          d = Ce(t, e),
          h = new Date(0);
        h.setUTCFullYear(d, 0, l), h.setUTCHours(0, 0, 0, 0);
        var f = we(h, e);
        return f;
      }
      function Te(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var n = Qt(t, e),
          r = we(n, e).getTime() - Ee(n, e).getTime();
        return Math.round(r / 6048e5) + 1;
      }
      var xe = "midnight",
        Ae = "noon",
        Se = "morning",
        Ne = "afternoon",
        Oe = "evening",
        Ie = "night",
        De = {
          G: function (t, e, n) {
            var r = t.getUTCFullYear() > 0 ? 1 : 0;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, { width: "abbreviated" });
              case "GGGGG":
                return n.era(r, { width: "narrow" });
              case "GGGG":
              default:
                return n.era(r, { width: "wide" });
            }
          },
          y: function (t, e, n, r) {
            var o = t.getUTCFullYear(),
              c = o > 0 ? o : 1 - o;
            return "yy" === e
              ? ke(c % 100, 2)
              : "yo" === e
              ? n.ordinalNumber(c, { unit: "year" })
              : ke(c, e.length);
          },
          Y: function (t, e, n, r) {
            var o = Ce(t, r),
              c = o > 0 ? o : 1 - o;
            return "YY" === e
              ? ke(c % 100, 2)
              : "Yo" === e
              ? n.ordinalNumber(c, { unit: "year" })
              : ke(c, e.length);
          },
          R: function (t, e, n, r) {
            return ke(ge(t, r), e.length);
          },
          u: function (t, e, n, r) {
            return ke(t.getUTCFullYear(), e.length);
          },
          Q: function (t, e, n, r) {
            var o = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(o);
              case "QQ":
                return ke(o, 2);
              case "Qo":
                return n.ordinalNumber(o, { unit: "quarter" });
              case "QQQ":
                return n.quarter(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return n.quarter(o, { width: "narrow", context: "formatting" });
              case "QQQQ":
              default:
                return n.quarter(o, { width: "wide", context: "formatting" });
            }
          },
          q: function (t, e, n, r) {
            var o = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
              case "q":
                return String(o);
              case "qq":
                return ke(o, 2);
              case "qo":
                return n.ordinalNumber(o, { unit: "quarter" });
              case "qqq":
                return n.quarter(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return n.quarter(o, { width: "narrow", context: "standalone" });
              case "qqqq":
              default:
                return n.quarter(o, { width: "wide", context: "standalone" });
            }
          },
          M: function (t, e, n, r) {
            var o = t.getUTCMonth();
            switch (e) {
              case "M":
                return String(o + 1);
              case "MM":
                return ke(o + 1, 2);
              case "Mo":
                return n.ordinalNumber(o + 1, { unit: "month" });
              case "MMM":
                return n.month(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return n.month(o, { width: "narrow", context: "formatting" });
              case "MMMM":
              default:
                return n.month(o, { width: "wide", context: "formatting" });
            }
          },
          L: function (t, e, n, r) {
            var o = t.getUTCMonth();
            switch (e) {
              case "L":
                return String(o + 1);
              case "LL":
                return ke(o + 1, 2);
              case "Lo":
                return n.ordinalNumber(o + 1, { unit: "month" });
              case "LLL":
                return n.month(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return n.month(o, { width: "narrow", context: "standalone" });
              case "LLLL":
              default:
                return n.month(o, { width: "wide", context: "standalone" });
            }
          },
          w: function (t, e, n, r) {
            var o = Te(t, r);
            return "wo" === e
              ? n.ordinalNumber(o, { unit: "week" })
              : ke(o, e.length);
          },
          I: function (t, e, n, r) {
            var o = be(t, r);
            return "Io" === e
              ? n.ordinalNumber(o, { unit: "week" })
              : ke(o, e.length);
          },
          d: function (t, e, n, r) {
            var o = t.getUTCDate();
            return "do" === e
              ? n.ordinalNumber(o, { unit: "date" })
              : ke(o, e.length);
          },
          D: function (t, e, n, r) {
            var o = (function (t, e) {
              if (arguments.length < 1)
                throw new TypeError(
                  "1 argument required, but only " +
                    arguments.length +
                    " present"
                );
              var n = Qt(t, e),
                r = n.getTime();
              n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
              var o = n.getTime(),
                c = r - o;
              return Math.floor(c / 864e5) + 1;
            })(t, r);
            return "Do" === e
              ? n.ordinalNumber(o, { unit: "dayOfYear" })
              : ke(o, e.length);
          },
          E: function (t, e, n, r) {
            var o = t.getUTCDay();
            switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return n.day(o, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return n.day(o, { width: "short", context: "formatting" });
              case "EEEE":
              default:
                return n.day(o, { width: "wide", context: "formatting" });
            }
          },
          e: function (t, e, n, r) {
            var o = t.getUTCDay(),
              c = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "e":
                return String(c);
              case "ee":
                return ke(c, 2);
              case "eo":
                return n.ordinalNumber(c, { unit: "day" });
              case "eee":
                return n.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return n.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return n.day(o, { width: "short", context: "formatting" });
              case "eeee":
              default:
                return n.day(o, { width: "wide", context: "formatting" });
            }
          },
          c: function (t, e, n, r) {
            var o = t.getUTCDay(),
              c = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "c":
                return String(c);
              case "cc":
                return ke(c, e.length);
              case "co":
                return n.ordinalNumber(c, { unit: "day" });
              case "ccc":
                return n.day(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return n.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return n.day(o, { width: "short", context: "standalone" });
              case "cccc":
              default:
                return n.day(o, { width: "wide", context: "standalone" });
            }
          },
          i: function (t, e, n, r) {
            var o = t.getUTCDay(),
              c = 0 === o ? 7 : o;
            switch (e) {
              case "i":
                return String(c);
              case "ii":
                return ke(c, e.length);
              case "io":
                return n.ordinalNumber(c, { unit: "day" });
              case "iii":
                return n.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return n.day(o, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return n.day(o, { width: "short", context: "formatting" });
              case "iiii":
              default:
                return n.day(o, { width: "wide", context: "formatting" });
            }
          },
          a: function (t, e, n) {
            var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
              case "aaa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaaaa":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          b: function (t, e, n) {
            var r,
              o = t.getUTCHours();
            switch (
              ((r = 12 === o ? Ae : 0 === o ? xe : o / 12 >= 1 ? "pm" : "am"),
              e)
            ) {
              case "b":
              case "bb":
              case "bbb":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbbbb":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          B: function (t, e, n) {
            var r,
              o = t.getUTCHours();
            switch (((r = o >= 17 ? Oe : o >= 12 ? Ne : o >= 4 ? Se : Ie), e)) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          h: function (t, e, n, r) {
            var o = t.getUTCHours() % 12;
            return (
              0 === o && (o = 12),
              "ho" === e
                ? n.ordinalNumber(o, { unit: "hour" })
                : ke(o, e.length)
            );
          },
          H: function (t, e, n, r) {
            var o = t.getUTCHours();
            return "Ho" === e
              ? n.ordinalNumber(o, { unit: "hour" })
              : ke(o, e.length);
          },
          K: function (t, e, n, r) {
            var o = t.getUTCHours() % 12;
            return "Ko" === e
              ? n.ordinalNumber(o, { unit: "hour" })
              : ke(o, e.length);
          },
          k: function (t, e, n, r) {
            var o = t.getUTCHours();
            return (
              0 === o && (o = 24),
              "ko" === e
                ? n.ordinalNumber(o, { unit: "hour" })
                : ke(o, e.length)
            );
          },
          m: function (t, e, n, r) {
            var o = t.getUTCMinutes();
            return "mo" === e
              ? n.ordinalNumber(o, { unit: "minute" })
              : ke(o, e.length);
          },
          s: function (t, e, n, r) {
            var o = t.getUTCSeconds();
            return "so" === e
              ? n.ordinalNumber(o, { unit: "second" })
              : ke(o, e.length);
          },
          S: function (t, e, n, r) {
            var o = e.length,
              c = t.getUTCMilliseconds();
            return ke(Math.floor(c * Math.pow(10, o - 3)), o);
          },
          X: function (t, e, n, r) {
            var o = (r._originalDate || t).getTimezoneOffset();
            if (0 === o) return "Z";
            switch (e) {
              case "X":
                return Me(o);
              case "XXXX":
              case "XX":
                return Pe(o);
              case "XXXXX":
              case "XXX":
              default:
                return Pe(o, ":");
            }
          },
          x: function (t, e, n, r) {
            var o = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "x":
                return Me(o);
              case "xxxx":
              case "xx":
                return Pe(o);
              case "xxxxx":
              case "xxx":
              default:
                return Pe(o, ":");
            }
          },
          O: function (t, e, n, r) {
            var o = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + Fe(o, ":");
              case "OOOO":
              default:
                return "GMT" + Pe(o, ":");
            }
          },
          z: function (t, e, n, r) {
            var o = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + Fe(o, ":");
              case "zzzz":
              default:
                return "GMT" + Pe(o, ":");
            }
          },
          t: function (t, e, n, r) {
            var o = r._originalDate || t;
            return ke(Math.floor(o.getTime() / 1e3), e.length);
          },
          T: function (t, e, n, r) {
            return ke((r._originalDate || t).getTime(), e.length);
          },
        };
      function ke(t, e) {
        for (
          var n = t < 0 ? "-" : "", output = Math.abs(t).toString();
          output.length < e;

        )
          output = "0" + output;
        return n + output;
      }
      function Pe(t, e) {
        var n = e || "",
          r = t > 0 ? "-" : "+",
          o = Math.abs(t);
        return r + ke(Math.floor(o / 60), 2) + n + ke(o % 60, 2);
      }
      function Me(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + ke(Math.abs(t) / 60, 2)
          : Pe(t, e);
      }
      function Fe(t, e) {
        var n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          o = Math.floor(r / 60),
          c = r % 60;
        if (0 === c) return n + String(o);
        var l = e || "";
        return n + String(o) + l + ke(c, 2);
      }
      function Re(pattern, t, e) {
        switch (pattern) {
          case "P":
            return t.date({ width: "short" });
          case "PP":
            return t.date({ width: "medium" });
          case "PPP":
            return t.date({ width: "long" });
          case "PPPP":
          default:
            return t.date({ width: "full" });
        }
      }
      function Le(pattern, t, e) {
        switch (pattern) {
          case "p":
            return t.time({ width: "short" });
          case "pp":
            return t.time({ width: "medium" });
          case "ppp":
            return t.time({ width: "long" });
          case "pppp":
          default:
            return t.time({ width: "full" });
        }
      }
      var je = {
        p: Le,
        P: function (pattern, t, e) {
          var n,
            r = pattern.match(/(P+)(p+)?/),
            o = r[1],
            c = r[2];
          if (!c) return Re(pattern, t);
          switch (o) {
            case "P":
              n = t.dateTime({ width: "short" });
              break;
            case "PP":
              n = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              n = t.dateTime({ width: "long" });
              break;
            case "PPPP":
            default:
              n = t.dateTime({ width: "full" });
          }
          return n.replace("{{date}}", Re(o, t)).replace("{{time}}", Le(c, t));
        },
      };
      function $e(t, e, n) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var r = Wt(e);
        return se(t, -r, n);
      }
      var He = ["D", "DD", "YY", "YYYY"];
      function Ue(t) {
        return -1 !== He.indexOf(t);
      }
      function qe(t) {
        throw new RangeError(
          "`options.awareOfUnicodeTokens` must be set to `true` to use `" +
            t +
            "` token; see: https://git.io/fxCyr"
        );
      }
      var Ve = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        We = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Be = /^'(.*?)'?$/,
        ze = /''/g;
      function Qe(input) {
        return input.match(Be)[1].replace(ze, "'");
      }
      function Ye(t, e, n) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var r = Qt(t, n),
          o = Qt(e, n);
        return r.getTime() > o.getTime();
      }
      function Ge(t, e, n) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var r = Qt(t, n),
          o = Qt(e, n);
        return r.getTime() < o.getTime();
      }
      function Ze(t, e, n) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var r = Qt(t, n),
          o = Qt(e, n);
        return r.getTime() === o.getTime();
      }
      function Ke(t, e, n) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var r = n || {},
          o = r.locale,
          c = o && o.options && o.options.weekStartsOn,
          l = null == c ? 0 : Wt(c),
          d = null == r.weekStartsOn ? l : Wt(r.weekStartsOn);
        if (!(d >= 0 && d <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var h = Qt(t, n),
          f = Wt(e),
          v = h.getUTCDay(),
          m = f % 7,
          y = (m + 7) % 7,
          _ = (y < d ? 7 : 0) + f - v;
        return h.setUTCDate(h.getUTCDate() + _), h;
      }
      var Xe = /^(1[0-2]|0?\d)/,
        Je = /^(3[0-1]|[0-2]?\d)/,
        tn = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        en = /^(5[0-3]|[0-4]?\d)/,
        nn = /^(2[0-3]|[0-1]?\d)/,
        rn = /^(2[0-4]|[0-1]?\d)/,
        on = /^(1[0-1]|0?\d)/,
        an = /^(1[0-2]|0?\d)/,
        sn = /^[0-5]?\d/,
        un = /^[0-5]?\d/,
        cn = /^\d/,
        ln = /^\d{1,2}/,
        dn = /^\d{1,3}/,
        hn = /^\d{1,4}/,
        fn = /^-?\d+/,
        pn = /^-?\d/,
        vn = /^-?\d{1,2}/,
        mn = /^-?\d{1,3}/,
        yn = /^-?\d{1,4}/,
        gn = /^([+-])(\d{2})(\d{2})?|Z/,
        _n = /^([+-])(\d{2})(\d{2})|Z/,
        bn = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        wn = /^([+-])(\d{2}):(\d{2})|Z/,
        Cn = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
      function En(pattern, t, e) {
        var n = t.match(pattern);
        if (!n) return null;
        var r = parseInt(n[0], 10);
        return { value: e ? e(r) : r, rest: t.slice(n[0].length) };
      }
      function Tn(pattern, t) {
        var e = t.match(pattern);
        return e
          ? "Z" === e[0]
            ? { value: 0, rest: t.slice(1) }
            : {
                value:
                  ("+" === e[1] ? 1 : -1) *
                  (36e5 * (e[2] ? parseInt(e[2], 10) : 0) +
                    6e4 * (e[3] ? parseInt(e[3], 10) : 0) +
                    1e3 * (e[5] ? parseInt(e[5], 10) : 0)),
                rest: t.slice(e[0].length),
              }
          : null;
      }
      function xn(t, e) {
        return En(fn, t, e);
      }
      function An(t, e, n) {
        switch (t) {
          case 1:
            return En(cn, e, n);
          case 2:
            return En(ln, e, n);
          case 3:
            return En(dn, e, n);
          case 4:
            return En(hn, e, n);
          default:
            return En(new RegExp("^\\d{1," + t + "}"), e, n);
        }
      }
      function Sn(t, e, n) {
        switch (t) {
          case 1:
            return En(pn, e, n);
          case 2:
            return En(vn, e, n);
          case 3:
            return En(mn, e, n);
          case 4:
            return En(yn, e, n);
          default:
            return En(new RegExp("^-?\\d{1," + t + "}"), e, n);
        }
      }
      function Nn(t) {
        switch (t) {
          case "morning":
            return 4;
          case "evening":
            return 17;
          case "pm":
          case "noon":
          case "afternoon":
            return 12;
          case "am":
          case "midnight":
          case "night":
          default:
            return 0;
        }
      }
      function On(t, e) {
        var n,
          r = e > 0,
          o = r ? e : 1 - e;
        if (o <= 50) n = t || 100;
        else {
          var c = o + 50;
          n = t + 100 * Math.floor(c / 100) - (t >= c % 100 ? 100 : 0);
        }
        return r ? n : 1 - n;
      }
      var In = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Dn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function kn(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      var Pn = {
          G: {
            priority: 140,
            parse: function (t, e, n, r) {
              switch (e) {
                case "G":
                case "GG":
                case "GGG":
                  return (
                    n.era(t, { width: "abbreviated" }) ||
                    n.era(t, { width: "narrow" })
                  );
                case "GGGGG":
                  return n.era(t, { width: "narrow" });
                case "GGGG":
                default:
                  return (
                    n.era(t, { width: "wide" }) ||
                    n.era(t, { width: "abbreviated" }) ||
                    n.era(t, { width: "narrow" })
                  );
              }
            },
            set: function (t, e, n) {
              return (
                t.setUTCFullYear(1 === e ? 10 : -9, 0, 1),
                t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
          y: {
            priority: 130,
            parse: function (t, e, n, r) {
              var o = function (t) {
                return { year: t, isTwoDigitYear: "yy" === e };
              };
              switch (e) {
                case "y":
                  return An(4, t, o);
                case "yo":
                  return n.ordinalNumber(t, { unit: "year", valueCallback: o });
                default:
                  return An(e.length, t, o);
              }
            },
            validate: function (t, e, n) {
              return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, n) {
              var r = Ce(t, n);
              if (e.isTwoDigitYear) {
                var o = On(e.year, r);
                return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              }
              var c = r > 0 ? e.year : 1 - e.year;
              return t.setUTCFullYear(c, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          Y: {
            priority: 130,
            parse: function (t, e, n, r) {
              var o = function (t) {
                return { year: t, isTwoDigitYear: "YY" === e };
              };
              switch (e) {
                case "Y":
                  return An(4, t, o);
                case "Yo":
                  return n.ordinalNumber(t, { unit: "year", valueCallback: o });
                default:
                  return An(e.length, t, o);
              }
            },
            validate: function (t, e, n) {
              return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, n) {
              var r = t.getUTCFullYear();
              if (e.isTwoDigitYear) {
                var o = On(e.year, r);
                return (
                  t.setUTCFullYear(o, 0, n.firstWeekContainsDate),
                  t.setUTCHours(0, 0, 0, 0),
                  we(t, n)
                );
              }
              var c = r > 0 ? e.year : 1 - e.year;
              return (
                t.setUTCFullYear(c, 0, n.firstWeekContainsDate),
                t.setUTCHours(0, 0, 0, 0),
                we(t, n)
              );
            },
          },
          R: {
            priority: 130,
            parse: function (t, e, n, r) {
              return Sn("R" === e ? 4 : e.length, t);
            },
            set: function (t, e, n) {
              var r = new Date(0);
              return (
                r.setUTCFullYear(e, 0, 4), r.setUTCHours(0, 0, 0, 0), ye(r)
              );
            },
          },
          u: {
            priority: 130,
            parse: function (t, e, n, r) {
              return Sn("u" === e ? 4 : e.length, t);
            },
            set: function (t, e, n) {
              return t.setUTCFullYear(e, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          Q: {
            priority: 120,
            parse: function (t, e, n, r) {
              switch (e) {
                case "Q":
                case "QQ":
                  return An(e.length, t);
                case "Qo":
                  return n.ordinalNumber(t, { unit: "quarter" });
                case "QQQ":
                  return (
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "formatting" })
                  );
                case "QQQQQ":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "QQQQ":
                default:
                  return (
                    n.quarter(t, { width: "wide", context: "formatting" }) ||
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 4;
            },
            set: function (t, e, n) {
              return (
                t.setUTCMonth(3 * (e - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
          q: {
            priority: 120,
            parse: function (t, e, n, r) {
              switch (e) {
                case "q":
                case "qq":
                  return An(e.length, t);
                case "qo":
                  return n.ordinalNumber(t, { unit: "quarter" });
                case "qqq":
                  return (
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "standalone" })
                  );
                case "qqqqq":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "standalone",
                  });
                case "qqqq":
                default:
                  return (
                    n.quarter(t, { width: "wide", context: "standalone" }) ||
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 4;
            },
            set: function (t, e, n) {
              return (
                t.setUTCMonth(3 * (e - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
          M: {
            priority: 110,
            parse: function (t, e, n, r) {
              var o = function (t) {
                return t - 1;
              };
              switch (e) {
                case "M":
                  return En(Xe, t, o);
                case "MM":
                  return An(2, t, o);
                case "Mo":
                  return n.ordinalNumber(t, {
                    unit: "month",
                    valueCallback: o,
                  });
                case "MMM":
                  return (
                    n.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) || n.month(t, { width: "narrow", context: "formatting" })
                  );
                case "MMMMM":
                  return n.month(t, { width: "narrow", context: "formatting" });
                case "MMMM":
                default:
                  return (
                    n.month(t, { width: "wide", context: "formatting" }) ||
                    n.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.month(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, n) {
              return t.setUTCMonth(e, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          L: {
            priority: 110,
            parse: function (t, e, n, r) {
              var o = function (t) {
                return t - 1;
              };
              switch (e) {
                case "L":
                  return En(Xe, t, o);
                case "LL":
                  return An(2, t, o);
                case "Lo":
                  return n.ordinalNumber(t, {
                    unit: "month",
                    valueCallback: o,
                  });
                case "LLL":
                  return (
                    n.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) || n.month(t, { width: "narrow", context: "standalone" })
                  );
                case "LLLLL":
                  return n.month(t, { width: "narrow", context: "standalone" });
                case "LLLL":
                default:
                  return (
                    n.month(t, { width: "wide", context: "standalone" }) ||
                    n.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.month(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, n) {
              return t.setUTCMonth(e, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          w: {
            priority: 100,
            parse: function (t, e, n, r) {
              switch (e) {
                case "w":
                  return En(en, t);
                case "wo":
                  return n.ordinalNumber(t, { unit: "week" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 53;
            },
            set: function (t, e, n) {
              return we(
                (function (t, e, n) {
                  if (arguments.length < 2)
                    throw new TypeError(
                      "2 arguments required, but only " +
                        arguments.length +
                        " present"
                    );
                  var r = Qt(t, n),
                    o = Wt(e),
                    c = Te(r, n) - o;
                  return r.setUTCDate(r.getUTCDate() - 7 * c), r;
                })(t, e, n),
                n
              );
            },
          },
          I: {
            priority: 100,
            parse: function (t, e, n, r) {
              switch (e) {
                case "I":
                  return En(en, t);
                case "Io":
                  return n.ordinalNumber(t, { unit: "week" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 53;
            },
            set: function (t, e, n) {
              return ye(
                (function (t, e, n) {
                  if (arguments.length < 2)
                    throw new TypeError(
                      "2 arguments required, but only " +
                        arguments.length +
                        " present"
                    );
                  var r = Qt(t, n),
                    o = Wt(e),
                    c = be(r, n) - o;
                  return r.setUTCDate(r.getUTCDate() - 7 * c), r;
                })(t, e, n),
                n
              );
            },
          },
          d: {
            priority: 90,
            parse: function (t, e, n, r) {
              switch (e) {
                case "d":
                  return En(Je, t);
                case "do":
                  return n.ordinalNumber(t, { unit: "date" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              var r = kn(t.getUTCFullYear()),
                o = t.getUTCMonth();
              return r ? e >= 1 && e <= Dn[o] : e >= 1 && e <= In[o];
            },
            set: function (t, e, n) {
              return t.setUTCDate(e), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          D: {
            priority: 90,
            parse: function (t, e, n, r) {
              switch (e) {
                case "D":
                case "DD":
                  return En(tn, t);
                case "Do":
                  return n.ordinalNumber(t, { unit: "date" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return kn(t.getUTCFullYear())
                ? e >= 1 && e <= 366
                : e >= 1 && e <= 365;
            },
            set: function (t, e, n) {
              return t.setUTCMonth(0, e), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          E: {
            priority: 90,
            parse: function (t, e, n, r) {
              switch (e) {
                case "E":
                case "EE":
                case "EEE":
                  return (
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "EEEEE":
                  return n.day(t, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                  return (
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "EEEE":
                default:
                  return (
                    n.day(t, { width: "wide", context: "formatting" }) ||
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, n) {
              return (t = Ke(t, e, n)).setUTCHours(0, 0, 0, 0), t;
            },
          },
          e: {
            priority: 90,
            parse: function (t, e, n, r) {
              var o = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + r.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "e":
                case "ee":
                  return An(e.length, t, o);
                case "eo":
                  return n.ordinalNumber(t, { unit: "day", valueCallback: o });
                case "eee":
                  return (
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "eeeee":
                  return n.day(t, { width: "narrow", context: "formatting" });
                case "eeeeee":
                  return (
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "eeee":
                default:
                  return (
                    n.day(t, { width: "wide", context: "formatting" }) ||
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, n) {
              return (t = Ke(t, e, n)).setUTCHours(0, 0, 0, 0), t;
            },
          },
          c: {
            priority: 90,
            parse: function (t, e, n, r) {
              var o = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + r.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "c":
                case "cc":
                  return An(e.length, t, o);
                case "co":
                  return n.ordinalNumber(t, { unit: "day", valueCallback: o });
                case "ccc":
                  return (
                    n.day(t, { width: "abbreviated", context: "standalone" }) ||
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
                case "ccccc":
                  return n.day(t, { width: "narrow", context: "standalone" });
                case "cccccc":
                  return (
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
                case "cccc":
                default:
                  return (
                    n.day(t, { width: "wide", context: "standalone" }) ||
                    n.day(t, { width: "abbreviated", context: "standalone" }) ||
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, n) {
              return (t = Ke(t, e, n)).setUTCHours(0, 0, 0, 0), t;
            },
          },
          i: {
            priority: 90,
            parse: function (t, e, n, r) {
              var o = function (t) {
                return 0 === t ? 7 : t;
              };
              switch (e) {
                case "i":
                case "ii":
                  return An(e.length, t);
                case "io":
                  return n.ordinalNumber(t, { unit: "day" });
                case "iii":
                  return (
                    n.day(t, {
                      width: "abbreviated",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    n.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    n.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: o,
                    })
                  );
                case "iiiii":
                  return n.day(t, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: o,
                  });
                case "iiiiii":
                  return (
                    n.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    n.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: o,
                    })
                  );
                case "iiii":
                default:
                  return (
                    n.day(t, {
                      width: "wide",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    n.day(t, {
                      width: "abbreviated",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    n.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    n.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: o,
                    })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 7;
            },
            set: function (t, e, n) {
              return (
                (t = (function (t, e, n) {
                  if (arguments.length < 2)
                    throw new TypeError(
                      "2 arguments required, but only " +
                        arguments.length +
                        " present"
                    );
                  var r = Wt(e);
                  r % 7 == 0 && (r -= 7);
                  var o = 1,
                    c = Qt(t, n),
                    l = c.getUTCDay(),
                    d = r % 7,
                    h = (d + 7) % 7,
                    f = (h < o ? 7 : 0) + r - l;
                  return c.setUTCDate(c.getUTCDate() + f), c;
                })(t, e, n)).setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
          a: {
            priority: 80,
            parse: function (t, e, n, r) {
              switch (e) {
                case "a":
                case "aa":
                case "aaa":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "aaaaa":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "aaaa":
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, n) {
              return t.setUTCHours(Nn(e), 0, 0, 0), t;
            },
          },
          b: {
            priority: 80,
            parse: function (t, e, n, r) {
              switch (e) {
                case "b":
                case "bb":
                case "bbb":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "bbbbb":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "bbbb":
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, n) {
              return t.setUTCHours(Nn(e), 0, 0, 0), t;
            },
          },
          B: {
            priority: 80,
            parse: function (t, e, n, r) {
              switch (e) {
                case "B":
                case "BB":
                case "BBB":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "BBBBB":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "BBBB":
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, n) {
              return t.setUTCHours(Nn(e), 0, 0, 0), t;
            },
          },
          h: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case "h":
                  return En(an, t);
                case "ho":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 12;
            },
            set: function (t, e, n) {
              var r = t.getUTCHours() >= 12;
              return (
                r && e < 12
                  ? t.setUTCHours(e + 12, 0, 0, 0)
                  : r || 12 !== e
                  ? t.setUTCHours(e, 0, 0, 0)
                  : t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
          H: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case "H":
                  return En(nn, t);
                case "Ho":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 23;
            },
            set: function (t, e, n) {
              return t.setUTCHours(e, 0, 0, 0), t;
            },
          },
          K: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case "K":
                  return En(on, t);
                case "Ko":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, n) {
              return (
                t.getUTCHours() >= 12 && e < 12
                  ? t.setUTCHours(e + 12, 0, 0, 0)
                  : t.setUTCHours(e, 0, 0, 0),
                t
              );
            },
          },
          k: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case "k":
                  return En(rn, t);
                case "ko":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 24;
            },
            set: function (t, e, n) {
              var r = e <= 24 ? e % 24 : e;
              return t.setUTCHours(r, 0, 0, 0), t;
            },
          },
          m: {
            priority: 60,
            parse: function (t, e, n, r) {
              switch (e) {
                case "m":
                  return En(sn, t);
                case "mo":
                  return n.ordinalNumber(t, { unit: "minute" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 59;
            },
            set: function (t, e, n) {
              return t.setUTCMinutes(e, 0, 0), t;
            },
          },
          s: {
            priority: 50,
            parse: function (t, e, n, r) {
              switch (e) {
                case "s":
                  return En(un, t);
                case "so":
                  return n.ordinalNumber(t, { unit: "second" });
                default:
                  return An(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 59;
            },
            set: function (t, e, n) {
              return t.setUTCSeconds(e, 0), t;
            },
          },
          S: {
            priority: 40,
            parse: function (t, e, n, r) {
              return An(e.length, t, function (t) {
                return Math.floor(t * Math.pow(10, 3 - e.length));
              });
            },
            set: function (t, e, n) {
              return t.setUTCMilliseconds(e), t;
            },
          },
          X: {
            priority: 20,
            parse: function (t, e, n, r) {
              switch (e) {
                case "X":
                  return Tn(gn, t);
                case "XX":
                  return Tn(_n, t);
                case "XXXX":
                  return Tn(bn, t);
                case "XXXXX":
                  return Tn(Cn, t);
                case "XXX":
                default:
                  return Tn(wn, t);
              }
            },
            set: function (t, e, n) {
              return new Date(t.getTime() - e);
            },
          },
          x: {
            priority: 20,
            parse: function (t, e, n, r) {
              switch (e) {
                case "x":
                  return Tn(gn, t);
                case "xx":
                  return Tn(_n, t);
                case "xxxx":
                  return Tn(bn, t);
                case "xxxxx":
                  return Tn(Cn, t);
                case "xxx":
                default:
                  return Tn(wn, t);
              }
            },
            set: function (t, e, n) {
              return new Date(t.getTime() - e);
            },
          },
          t: {
            priority: 10,
            parse: function (t, e, n, r) {
              return xn(t);
            },
            set: function (t, e, n) {
              return new Date(1e3 * e);
            },
          },
          T: {
            priority: 10,
            parse: function (t, e, n, r) {
              return xn(t);
            },
            set: function (t, e, n) {
              return new Date(e);
            },
          },
        },
        Mn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Fn = /^'(.*?)'?$/,
        Rn = /''/g,
        Ln = /\S/;
      function jn(t) {
        var e = new Date(0);
        return (
          e.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
          e.setHours(
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds(),
            t.getUTCMilliseconds()
          ),
          e
        );
      }
      function $n(input) {
        return input.match(Fn)[1].replace(Rn, "'");
      }
      function Hn(t, e) {
        if ("string" != typeof t) return ue(t) ? t : null;
        var n = (function (t, e, n, r) {
          if (arguments.length < 3)
            throw new TypeError(
              "3 arguments required, but only " + arguments.length + " present"
            );
          var o = String(t),
            c = String(e),
            l = r || {},
            d = l.locale || me;
          if (!d.match)
            throw new RangeError("locale must contain match property");
          var h = d.options && d.options.firstWeekContainsDate,
            f = null == h ? 1 : Wt(h),
            v =
              null == l.firstWeekContainsDate ? f : Wt(l.firstWeekContainsDate);
          if (!(v >= 1 && v <= 7))
            throw new RangeError(
              "firstWeekContainsDate must be between 1 and 7 inclusively"
            );
          var m = d.options && d.options.weekStartsOn,
            y = null == m ? 0 : Wt(m),
            _ = null == l.weekStartsOn ? y : Wt(l.weekStartsOn);
          if (!(_ >= 0 && _ <= 6))
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          if ("" === c) return "" === o ? Qt(n, l) : new Date(NaN);
          var i,
            w = { firstWeekContainsDate: v, weekStartsOn: _, locale: d },
            C = [{ priority: 20, set: jn, index: 0 }],
            E = c.match(Mn);
          for (i = 0; i < E.length; i++) {
            var T = E[i];
            !l.awareOfUnicodeTokens && Ue(T) && qe(T);
            var x = T[0],
              A = Pn[x];
            if (A) {
              var S = A.parse(o, T, d.match, w);
              if (!S) return new Date(NaN);
              C.push({
                priority: A.priority,
                set: A.set,
                validate: A.validate,
                value: S.value,
                index: C.length,
              }),
                (o = S.rest);
            } else {
              if (
                ("''" === T ? (T = "'") : "'" === x && (T = $n(T)),
                0 !== o.indexOf(T))
              )
                return new Date(NaN);
              o = o.slice(T.length);
            }
          }
          if (o.length > 0 && Ln.test(o)) return new Date(NaN);
          var N = C.map(function (t) {
              return t.priority;
            })
              .sort(function (a, b) {
                return b - a;
              })
              .filter(function (t, e, n) {
                return n.indexOf(t) === e;
              })
              .map(function (t) {
                return C.filter(function (e) {
                  return e.priority === t;
                }).reverse();
              })
              .map(function (t) {
                return t[0];
              }),
            O = Qt(n, l);
          if (isNaN(O)) return new Date(NaN);
          var I = $e(O, Bt(O));
          for (i = 0; i < N.length; i++) {
            var D = N[i];
            if (D.validate && !D.validate(I, D.value, w)) return new Date(NaN);
            I = D.set(I, D.value, w);
          }
          return I;
        })(t, e, new Date());
        return ue(n) &&
          (function (t, e, n) {
            if (arguments.length < 2)
              throw new TypeError(
                "2 arguments required, but only " +
                  arguments.length +
                  " present"
              );
            var r = String(e),
              o = n || {},
              c = o.locale || me,
              l = c.options && c.options.firstWeekContainsDate,
              d = null == l ? 1 : Wt(l),
              h =
                null == o.firstWeekContainsDate
                  ? d
                  : Wt(o.firstWeekContainsDate);
            if (!(h >= 1 && h <= 7))
              throw new RangeError(
                "firstWeekContainsDate must be between 1 and 7 inclusively"
              );
            var f = c.options && c.options.weekStartsOn,
              v = null == f ? 0 : Wt(f),
              m = null == o.weekStartsOn ? v : Wt(o.weekStartsOn);
            if (!(m >= 0 && m <= 6))
              throw new RangeError(
                "weekStartsOn must be between 0 and 6 inclusively"
              );
            if (!c.localize)
              throw new RangeError("locale must contain localize property");
            if (!c.formatLong)
              throw new RangeError("locale must contain formatLong property");
            var y = Qt(t, o);
            if (!ue(y, o)) return "Invalid Date";
            var _ = Bt(y),
              w = $e(y, _, o),
              C = {
                firstWeekContainsDate: h,
                weekStartsOn: m,
                locale: c,
                _originalDate: y,
              },
              E = r
                .match(We)
                .map(function (t) {
                  var e = t[0];
                  return "p" === e || "P" === e
                    ? (0, je[e])(t, c.formatLong, C)
                    : t;
                })
                .join("")
                .match(Ve)
                .map(function (t) {
                  if ("''" === t) return "'";
                  var e = t[0];
                  if ("'" === e) return Qe(t);
                  var n = De[e];
                  return n
                    ? (!o.awareOfUnicodeTokens && Ue(t) && qe(t),
                      n(w, t, c.localize, C))
                    : t;
                })
                .join("");
            return E;
          })(n, e) === t
          ? n
          : null;
      }
      var Un = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var n = e.targetValue,
              r = e.inclusion;
            void 0 === r && (r = !1);
            var o = e.format;
            return (
              void 0 === o && ((o = r), (r = !1)),
              (t = Hn(t, o)),
              (n = Hn(n, o)),
              !(!t || !n) && (Ye(t, n) || (r && Ze(t, n)))
            );
          },
          options: { hasTarget: !0, isDate: !0 },
          paramNames: ["targetValue", "inclusion", "format"],
        },
        qn = {
          en: /^[A-Z]*$/i,
          cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
          da: /^[A-ZÆØÅ]*$/i,
          de: /^[A-ZÄÖÜß]*$/i,
          es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
          fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
          fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
          it: /^[A-Z\xC0-\xFF]*$/i,
          lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
          nl: /^[A-ZÉËÏÓÖÜ]*$/i,
          hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
          pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
          pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
          ru: /^[А-ЯЁ]*$/i,
          sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
          sr: /^[A-ZČĆŽŠĐ]*$/i,
          sv: /^[A-ZÅÄÖ]*$/i,
          tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
          uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
          ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
          az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
        },
        Vn = {
          en: /^[A-Z\s]*$/i,
          cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
          da: /^[A-ZÆØÅ\s]*$/i,
          de: /^[A-ZÄÖÜß\s]*$/i,
          es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
          fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,
          fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
          it: /^[A-Z\xC0-\xFF\s]*$/i,
          lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
          nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
          hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
          pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
          pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
          ru: /^[А-ЯЁ\s]*$/i,
          sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
          sr: /^[A-ZČĆŽŠĐ\s]*$/i,
          sv: /^[A-ZÅÄÖ\s]*$/i,
          tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
          uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
          ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
          az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
        },
        Wn = {
          en: /^[0-9A-Z]*$/i,
          cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
          da: /^[0-9A-ZÆØÅ]$/i,
          de: /^[0-9A-ZÄÖÜß]*$/i,
          es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
          fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
          fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
          it: /^[0-9A-Z\xC0-\xFF]*$/i,
          lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
          hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
          nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
          pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
          pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
          ru: /^[0-9А-ЯЁ]*$/i,
          sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
          sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
          sv: /^[0-9A-ZÅÄÖ]*$/i,
          tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
          uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
          ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
          az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
        },
        Bn = {
          en: /^[0-9A-Z_-]*$/i,
          cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
          da: /^[0-9A-ZÆØÅ_-]*$/i,
          de: /^[0-9A-ZÄÖÜß_-]*$/i,
          es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
          fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,
          fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
          it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
          lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
          nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
          hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
          pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
          pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
          ru: /^[0-9А-ЯЁ_-]*$/i,
          sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
          sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
          sv: /^[0-9A-ZÅÄÖ_-]*$/i,
          tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
          uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
          ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
          az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
        },
        zn = function (t, e) {
          void 0 === e && (e = {});
          var n = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return zn(t, [n]);
              })
            : n
            ? (qn[n] || qn.en).test(t)
            : Object.keys(qn).some(function (e) {
                return qn[e].test(t);
              });
        },
        Qn = { validate: zn, paramNames: ["locale"] },
        Yn = function (t, e) {
          void 0 === e && (e = {});
          var n = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return Yn(t, [n]);
              })
            : n
            ? (Bn[n] || Bn.en).test(t)
            : Object.keys(Bn).some(function (e) {
                return Bn[e].test(t);
              });
        },
        Gn = { validate: Yn, paramNames: ["locale"] },
        Zn = function (t, e) {
          void 0 === e && (e = {});
          var n = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return Zn(t, [n]);
              })
            : n
            ? (Wn[n] || Wn.en).test(t)
            : Object.keys(Wn).some(function (e) {
                return Wn[e].test(t);
              });
        },
        Kn = { validate: Zn, paramNames: ["locale"] },
        Xn = function (t, e) {
          void 0 === e && (e = {});
          var n = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return Xn(t, [n]);
              })
            : n
            ? (Vn[n] || Vn.en).test(t)
            : Object.keys(Vn).some(function (e) {
                return Vn[e].test(t);
              });
        },
        Jn = { validate: Xn, paramNames: ["locale"] },
        er = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var n = e.targetValue,
              r = e.inclusion;
            void 0 === r && (r = !1);
            var o = e.format;
            return (
              void 0 === o && ((o = r), (r = !1)),
              (t = Hn(t, o)),
              (n = Hn(n, o)),
              !(!t || !n) && (Ge(t, n) || (r && Ze(t, n)))
            );
          },
          options: { hasTarget: !0, isDate: !0 },
          paramNames: ["targetValue", "inclusion", "format"],
        },
        nr = function (t, e) {
          void 0 === e && (e = {});
          var n = e.min,
            r = e.max;
          return Array.isArray(t)
            ? t.every(function (t) {
                return nr(t, { min: n, max: r });
              })
            : Number(n) <= t && Number(r) >= t;
        },
        rr = { validate: nr, paramNames: ["min", "max"] },
        ir = {
          validate: function (t, e) {
            var n = e.targetValue;
            return String(t) === String(n);
          },
          options: { hasTarget: !0 },
          paramNames: ["targetValue"],
        };
      function or(t) {
        return t &&
          t.__esModule &&
          Object.prototype.hasOwnProperty.call(t, "default")
          ? t.default
          : t;
      }
      function ar(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var sr = ar(function (t, e) {
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function (input) {
            if (!("string" == typeof input || input instanceof String)) {
              var t;
              throw (
                ((t =
                  null === input
                    ? "null"
                    : "object" === (t = n(input)) &&
                      input.constructor &&
                      input.constructor.hasOwnProperty("name")
                    ? input.constructor.name
                    : "a ".concat(t)),
                new TypeError("Expected string but received ".concat(t, ".")))
              );
            }
          }),
          (t.exports = e.default),
          (t.exports.default = e.default);
      });
      or(sr);
      var ur = or(
          ar(function (t, e) {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = function (t) {
                (0, n.default)(t);
                var e = t.replace(/[- ]+/g, "");
                if (!r.test(e)) return !1;
                for (var o, c, l, d = 0, i = e.length - 1; i >= 0; i--)
                  (o = e.substring(i, i + 1)),
                    (c = parseInt(o, 10)),
                    (d += l && (c *= 2) >= 10 ? (c % 10) + 1 : c),
                    (l = !l);
                return !(d % 10 != 0 || !e);
              });
            var n = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(sr);
            var r = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
            (t.exports = e.default), (t.exports.default = e.default);
          })
        ),
        cr = {
          validate: function (t) {
            return ur(String(t));
          },
        },
        lr = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var n = e.min,
              r = e.max,
              o = e.inclusivity;
            void 0 === o && (o = "()");
            var c = e.format;
            void 0 === c && ((c = o), (o = "()"));
            var l = Hn(String(n), c),
              d = Hn(String(r), c),
              h = Hn(String(t), c);
            return (
              !!(l && d && h) &&
              ("()" === o
                ? Ye(h, l) && Ge(h, d)
                : "(]" === o
                ? Ye(h, l) && (Ze(h, d) || Ge(h, d))
                : "[)" === o
                ? Ge(h, d) && (Ze(h, l) || Ye(h, l))
                : Ze(h, d) || Ze(h, l) || (Ge(h, d) && Ye(h, l)))
            );
          },
          options: { isDate: !0 },
          paramNames: ["min", "max", "inclusivity", "format"],
        },
        dr = {
          validate: function (t, e) {
            return !!Hn(t, e.format);
          },
          options: { isDate: !0 },
          paramNames: ["format"],
        },
        fr = function (t, e) {
          void 0 === e && (e = {});
          var n = e.decimals;
          void 0 === n && (n = "*");
          var r = e.separator;
          if ((void 0 === r && (r = "."), d(t) || "" === t)) return !1;
          if (Array.isArray(t))
            return t.every(function (t) {
              return fr(t, { decimals: n, separator: r });
            });
          if (0 === Number(n)) return /^-?\d*$/.test(t);
          if (
            !new RegExp(
              "^[-+]?\\d*(\\" +
                r +
                "\\d" +
                ("*" === n ? "+" : "{1," + n + "}") +
                ")?([eE]{1}[-]?\\d+)?$"
            ).test(t)
          )
            return !1;
          var o = parseFloat(t);
          return o == o;
        },
        pr = { validate: fr, paramNames: ["decimals", "separator"] },
        vr = function (t, e) {
          var n = e[0];
          if (Array.isArray(t))
            return t.every(function (t) {
              return vr(t, [n]);
            });
          var r = String(t);
          return /^[0-9]*$/.test(r) && r.length === Number(n);
        },
        mr = { validate: vr },
        yr = /\.(jpg|svg|jpeg|png|bmp|gif)$/i,
        gr = {
          validate: function (t, e) {
            var n = e[0],
              r = e[1],
              o = N(t).filter(function (t) {
                return yr.test(t.name);
              });
            return (
              0 !== o.length &&
              Promise.all(
                o.map(function (image) {
                  return (function (t, e, n) {
                    var r = window.URL || window.webkitURL;
                    return new Promise(function (o) {
                      var image = new Image();
                      (image.onerror = function () {
                        return o({ valid: !1 });
                      }),
                        (image.onload = function () {
                          return o({
                            valid:
                              image.width === Number(e) &&
                              image.height === Number(n),
                          });
                        }),
                        (image.src = r.createObjectURL(t));
                    });
                  })(image, n, r);
                })
              )
            );
          },
        },
        _r = ar(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = arguments.length > 1 ? arguments[1] : void 0;
              for (var n in e) void 0 === t[n] && (t[n] = e[n]);
              return t;
            }),
            (t.exports = e.default),
            (t.exports.default = e.default);
        });
      or(_r);
      var wr = ar(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function (t, e) {
            var o, c;
            (0, n.default)(t),
              "object" === r(e)
                ? ((o = e.min || 0), (c = e.max))
                : ((o = arguments[1]), (c = arguments[2]));
            var l = encodeURI(t).split(/%..|./).length - 1;
            return l >= o && (void 0 === c || l <= c);
          });
        var n = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(sr);
        function r(t) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        (t.exports = e.default), (t.exports.default = e.default);
      });
      or(wr);
      var Cr = ar(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
              (0, n.default)(t),
                (e = (0, r.default)(e, c)).allow_trailing_dot &&
                  "." === t[t.length - 1] &&
                  (t = t.substring(0, t.length - 1));
              for (var o = t.split("."), i = 0; i < o.length; i++)
                if (o[i].length > 63) return !1;
              if (e.require_tld) {
                var l = o.pop();
                if (
                  !o.length ||
                  !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(l)
                )
                  return !1;
                if (
                  /[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(
                    l
                  )
                )
                  return !1;
              }
              for (var d, h = 0; h < o.length; h++) {
                if (
                  ((d = o[h]),
                  e.allow_underscores && (d = d.replace(/_/g, "")),
                  !/^[a-z\u00a1-\uffff0-9-]+$/i.test(d))
                )
                  return !1;
                if (/[\uff01-\uff5e]/.test(d)) return !1;
                if ("-" === d[0] || "-" === d[d.length - 1]) return !1;
              }
              return !0;
            });
          var n = o(sr),
            r = o(_r);
          function o(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var c = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
          };
          (t.exports = e.default), (t.exports.default = e.default);
        }),
        Er = or(Cr),
        Tr = ar(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function t(e) {
              var c =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              if (((0, n.default)(e), !(c = String(c))))
                return t(e, 4) || t(e, 6);
              if ("4" === c) {
                if (!r.test(e)) return !1;
                var l = e.split(".").sort(function (a, b) {
                  return a - b;
                });
                return l[3] <= 255;
              }
              if ("6" === c) {
                var d = e.split(":"),
                  h = !1,
                  f = t(d[d.length - 1], 4),
                  v = f ? 7 : 8;
                if (d.length > v) return !1;
                if ("::" === e) return !0;
                "::" === e.substr(0, 2)
                  ? (d.shift(), d.shift(), (h = !0))
                  : "::" === e.substr(e.length - 2) &&
                    (d.pop(), d.pop(), (h = !0));
                for (var i = 0; i < d.length; ++i)
                  if ("" === d[i] && i > 0 && i < d.length - 1) {
                    if (h) return !1;
                    h = !0;
                  } else if (f && i === d.length - 1);
                  else if (!o.test(d[i])) return !1;
                return h ? d.length >= 1 : d.length === v;
              }
              return !1;
            });
          var n = (function (t) {
            return t && t.__esModule ? t : { default: t };
          })(sr);
          var r = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
            o = /^[0-9A-F]{1,4}$/i;
          (t.exports = e.default), (t.exports.default = e.default);
        }),
        xr = or(Tr),
        Ar = or(
          ar(function (t, e) {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = function (t, e) {
                if (
                  ((0, n.default)(t),
                  (e = (0, r.default)(e, h)).require_display_name ||
                    e.allow_display_name)
                ) {
                  var d = t.match(f);
                  if (d) t = d[1];
                  else if (e.require_display_name) return !1;
                }
                var C = t.split("@"),
                  E = C.pop(),
                  T = C.join("@"),
                  x = E.toLowerCase();
                if (
                  e.domain_specific_validation &&
                  ("gmail.com" === x || "googlemail.com" === x)
                ) {
                  var A = (T = T.toLowerCase()).split("+")[0];
                  if (!(0, o.default)(A.replace(".", ""), { min: 6, max: 30 }))
                    return !1;
                  for (var S = A.split("."), i = 0; i < S.length; i++)
                    if (!m.test(S[i])) return !1;
                }
                if (
                  !(0, o.default)(T, { max: 64 }) ||
                  !(0, o.default)(E, { max: 254 })
                )
                  return !1;
                if (!(0, c.default)(E, { require_tld: e.require_tld })) {
                  if (!e.allow_ip_domain) return !1;
                  if (!(0, l.default)(E)) {
                    if (!E.startsWith("[") || !E.endsWith("]")) return !1;
                    var N = E.substr(1, E.length - 2);
                    if (0 === N.length || !(0, l.default)(N)) return !1;
                  }
                }
                if ('"' === T[0])
                  return (
                    (T = T.slice(1, T.length - 1)),
                    e.allow_utf8_local_part ? w.test(T) : y.test(T)
                  );
                for (
                  var pattern = e.allow_utf8_local_part ? _ : v,
                    O = T.split("."),
                    I = 0;
                  I < O.length;
                  I++
                )
                  if (!pattern.test(O[I])) return !1;
                return !0;
              });
            var n = d(sr),
              r = d(_r),
              o = d(wr),
              c = d(Cr),
              l = d(Tr);
            function d(t) {
              return t && t.__esModule ? t : { default: t };
            }
            var h = {
                allow_display_name: !1,
                require_display_name: !1,
                allow_utf8_local_part: !0,
                require_tld: !0,
              },
              f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,
              v = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
              m = /^[a-z\d]+$/,
              y = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
              _ = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
              w = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
            (t.exports = e.default), (t.exports.default = e.default);
          })
        );
      var Sr = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var n = e.multiple;
            void 0 === n && (n = !1);
            var r = (function (t, e) {
              var n = {};
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) &&
                  -1 === e.indexOf(r) &&
                  (n[r] = t[r]);
              return n;
            })(e, ["multiple"]);
            n &&
              !Array.isArray(t) &&
              (t = String(t)
                .split(",")
                .map(function (t) {
                  return t.trim();
                }));
            var o = O({}, r);
            return Array.isArray(t)
              ? t.every(function (t) {
                  return Ar(String(t), o);
                })
              : Ar(String(t), o);
          },
        },
        Nr = function (t, e) {
          return Array.isArray(t)
            ? t.every(function (t) {
                return Nr(t, e);
              })
            : S(e).some(function (e) {
                return e == t;
              });
        },
        Or = { validate: Nr },
        Ir = {
          validate: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return !Nr.apply(void 0, t);
          },
        },
        Dr = {
          validate: function (t, e) {
            var n = new RegExp(".(" + e.join("|") + ")$", "i");
            return N(t).every(function (t) {
              return n.test(t.name);
            });
          },
        },
        image = {
          validate: function (t) {
            return (Array.isArray(t) ? t : [t]).every(function (t) {
              return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(t.name);
            });
          },
        },
        kr = {
          validate: function (t) {
            return Array.isArray(t)
              ? t.every(function (t) {
                  return /^-?[0-9]+$/.test(String(t));
                })
              : /^-?[0-9]+$/.test(String(t));
          },
        },
        Pr = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var n = e.version;
            return (
              void 0 === n && (n = 4),
              d(t) && (t = ""),
              Array.isArray(t)
                ? t.every(function (t) {
                    return xr(t, n);
                  })
                : xr(t, n)
            );
          },
          paramNames: ["version"],
        },
        Mr = {
          validate: function (t) {
            return (
              d(t) && (t = ""),
              Array.isArray(t)
                ? t.every(function (t) {
                    return xr(t, "") || Er(t);
                  })
                : xr(t, "") || Er(t)
            );
          },
        },
        Fr = {
          validate: function (t, e) {
            return void 0 === e && (e = []), t === e[0];
          },
        },
        Rr = {
          validate: function (t, e) {
            return void 0 === e && (e = []), t !== e[0];
          },
        },
        Lr = {
          validate: function (t, e) {
            var n = e[0],
              r = e[1];
            return (
              void 0 === r && (r = void 0),
              !d(t) &&
                ((n = Number(n)),
                "number" == typeof t && (t = String(t)),
                t.length || (t = S(t)),
                (function (t, e, n) {
                  return void 0 === n
                    ? t.length === e
                    : ((n = Number(n)), t.length >= e && t.length <= n);
                })(t, n, r))
            );
          },
        },
        jr = function (t, e) {
          var n = e[0];
          return d(t)
            ? n >= 0
            : Array.isArray(t)
            ? t.every(function (t) {
                return jr(t, [n]);
              })
            : String(t).length <= n;
        },
        $r = { validate: jr },
        Hr = function (t, e) {
          var n = e[0];
          return (
            !d(t) &&
            "" !== t &&
            (Array.isArray(t)
              ? t.length > 0 &&
                t.every(function (t) {
                  return Hr(t, [n]);
                })
              : Number(t) <= n)
          );
        },
        Ur = { validate: Hr },
        qr = {
          validate: function (t, e) {
            var n = new RegExp(e.join("|").replace("*", ".+") + "$", "i");
            return N(t).every(function (t) {
              return n.test(t.type);
            });
          },
        },
        Vr = function (t, e) {
          var n = e[0];
          return (
            !d(t) &&
            (Array.isArray(t)
              ? t.every(function (t) {
                  return Vr(t, [n]);
                })
              : String(t).length >= n)
          );
        },
        Wr = { validate: Vr },
        Br = function (t, e) {
          var n = e[0];
          return (
            !d(t) &&
            "" !== t &&
            (Array.isArray(t)
              ? t.length > 0 &&
                t.every(function (t) {
                  return Br(t, [n]);
                })
              : Number(t) >= n)
          );
        },
        zr = { validate: Br },
        Qr = /^[٠١٢٣٤٥٦٧٨٩]+$/,
        Yr = /^[0-9]+$/,
        Gr = {
          validate: function (t) {
            var e = function (t) {
              var e = String(t);
              return Yr.test(e) || Qr.test(e);
            };
            return Array.isArray(t) ? t.every(e) : e(t);
          },
        },
        Zr = function (t, e) {
          var n = e.expression;
          return (
            "string" == typeof n && (n = new RegExp(n)),
            Array.isArray(t)
              ? t.every(function (t) {
                  return Zr(t, { expression: n });
                })
              : n.test(String(t))
          );
        },
        Kr = { validate: Zr, paramNames: ["expression"] },
        Xr = {
          validate: function (t, e) {
            void 0 === e && (e = []);
            var n = e[0];
            return (
              void 0 === n && (n = !1),
              !d(t) && !H(t) && (!1 !== t || !n) && !!String(t).trim().length
            );
          },
        },
        Jr = {
          validate: function (t, e) {
            void 0 === e && (e = []);
            var n = e[0],
              r = e.slice(1).includes(String(n).trim());
            if (!r) return { valid: !0, data: { required: r } };
            var o = H(t) || [!1, null, void 0].includes(t);
            return {
              valid: !(o = o || !String(t).trim().length),
              data: { required: r },
            };
          },
          options: { hasTarget: !0, computesRequired: !0 },
        },
        ti = {
          validate: function (t, e) {
            var n = e[0];
            if (isNaN(n)) return !1;
            var r = 1024 * Number(n);
            return N(t).every(function (t) {
              return t.size <= r;
            });
          },
        },
        ei = or(
          ar(function (t, e) {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = function (t, e) {
                if (
                  ((0, n.default)(t),
                  !t || t.length >= 2083 || /[\s<>]/.test(t))
                )
                  return !1;
                if (0 === t.indexOf("mailto:")) return !1;
                var l, f, m, y, _, w, C, E;
                if (
                  ((e = (0, c.default)(e, d)),
                  (C = t.split("#")),
                  (t = C.shift()),
                  (C = t.split("?")),
                  (t = C.shift()),
                  (C = t.split("://")).length > 1)
                ) {
                  if (
                    ((l = C.shift().toLowerCase()),
                    e.require_valid_protocol && -1 === e.protocols.indexOf(l))
                  )
                    return !1;
                } else {
                  if (e.require_protocol) return !1;
                  if ("//" === t.substr(0, 2)) {
                    if (!e.allow_protocol_relative_urls) return !1;
                    C[0] = t.substr(2);
                  }
                }
                if ("" === (t = C.join("://"))) return !1;
                if (
                  ((C = t.split("/")),
                  "" === (t = C.shift()) && !e.require_host)
                )
                  return !0;
                if ((C = t.split("@")).length > 1) {
                  if (e.disallow_auth) return !1;
                  if (
                    (f = C.shift()).indexOf(":") >= 0 &&
                    f.split(":").length > 2
                  )
                    return !1;
                }
                (y = C.join("@")), (w = null), (E = null);
                var T = y.match(h);
                T
                  ? ((m = ""), (E = T[1]), (w = T[2] || null))
                  : ((C = y.split(":")),
                    (m = C.shift()),
                    C.length && (w = C.join(":")));
                if (
                  null !== w &&
                  ((_ = parseInt(w, 10)),
                  !/^[0-9]+$/.test(w) || _ <= 0 || _ > 65535)
                )
                  return !1;
                if (
                  !(
                    (0, o.default)(m) ||
                    (0, r.default)(m, e) ||
                    (E && (0, o.default)(E, 6))
                  )
                )
                  return !1;
                if (((m = m || E), e.host_whitelist && !v(m, e.host_whitelist)))
                  return !1;
                if (e.host_blacklist && v(m, e.host_blacklist)) return !1;
                return !0;
              });
            var n = l(sr),
              r = l(Cr),
              o = l(Tr),
              c = l(_r);
            function l(t) {
              return t && t.__esModule ? t : { default: t };
            }
            var d = {
                protocols: ["http", "https", "ftp"],
                require_tld: !0,
                require_protocol: !1,
                require_host: !0,
                require_valid_protocol: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1,
                allow_protocol_relative_urls: !1,
              },
              h = /^\[([^\]]+)\](?::([0-9]+))?$/;
            function f(t) {
              return "[object RegExp]" === Object.prototype.toString.call(t);
            }
            function v(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if (t === n || (f(n) && n.test(t))) return !0;
              }
              return !1;
            }
            (t.exports = e.default), (t.exports.default = e.default);
          })
        ),
        ni = {
          validate: function (t, e) {
            void 0 === e && (e = {}), d(t) && (t = "");
            var n = O({}, e);
            return Array.isArray(t)
              ? t.every(function (t) {
                  return ei(t, n);
                })
              : ei(t, n);
          },
        },
        ri = Object.freeze({
          after: Un,
          alpha_dash: Gn,
          alpha_num: Kn,
          alpha_spaces: Jn,
          alpha: Qn,
          before: er,
          between: rr,
          confirmed: ir,
          credit_card: cr,
          date_between: lr,
          date_format: dr,
          decimal: pr,
          digits: mr,
          dimensions: gr,
          email: Sr,
          ext: Dr,
          image: image,
          included: Or,
          integer: kr,
          length: Lr,
          ip: Pr,
          ip_or_fqdn: Mr,
          is_not: Rr,
          is: Fr,
          max: $r,
          max_value: Ur,
          mimes: qr,
          min: Wr,
          min_value: zr,
          excluded: Ir,
          numeric: Gr,
          regex: Kr,
          required: Xr,
          required_if: Jr,
          size: ti,
          url: ni,
        }),
        ii = function (t, e) {
          var n = {
            pristine: function (t, e) {
              return t && e;
            },
            dirty: function (t, e) {
              return t || e;
            },
            touched: function (t, e) {
              return t || e;
            },
            untouched: function (t, e) {
              return t && e;
            },
            valid: function (t, e) {
              return t && e;
            },
            invalid: function (t, e) {
              return t || e;
            },
            pending: function (t, e) {
              return t || e;
            },
            required: function (t, e) {
              return t || e;
            },
            validated: function (t, e) {
              return t && e;
            },
          };
          return Object.keys(n).reduce(function (r, o) {
            return (r[o] = n[o](t[o], e[o])), r;
          }, {});
        },
        oi = function (t, e) {
          return (
            void 0 === e && (e = !0),
            Object.keys(t).reduce(function (n, r) {
              if (!n) return (n = O({}, t[r]));
              var o = 0 === r.indexOf("$");
              return e && o ? ii(oi(t[r]), n) : !e && o ? n : (n = ii(n, t[r]));
            }, null)
          );
        },
        ai = null,
        si = 0,
        ui = {
          $__veeInject: !1,
          inject: {
            $_veeObserver: {
              from: "$_veeObserver",
              default: function () {
                return (
                  this.$vnode.context.$_veeObserver ||
                    (this.$vnode.context.$_veeObserver = {
                      refs: {},
                      subscribe: function (t) {
                        this.refs[t.vid] = t;
                      },
                      unsubscribe: function (t) {
                        delete this.refs[t.vid];
                      },
                    }),
                  this.$vnode.context.$_veeObserver
                );
              },
            },
          },
          props: {
            vid: {
              type: [String, Number],
              default: function () {
                return "_vee_" + ++si;
              },
            },
            name: { type: String, default: null },
            mode: {
              type: [String, Function],
              default: function () {
                return X().mode;
              },
            },
            events: {
              type: Array,
              validate: function () {
                return !0;
              },
              default: function () {
                var t = X().events;
                return "string" == typeof t ? t.split("|") : t;
              },
            },
            rules: { type: [Object, String], default: null },
            immediate: { type: Boolean, default: !1 },
            persist: { type: Boolean, default: !1 },
            bails: {
              type: Boolean,
              default: function () {
                return X().fastExit;
              },
            },
            debounce: {
              type: Number,
              default: function () {
                return X().delay || 0;
              },
            },
            tag: { type: String, default: "span" },
            slim: { type: Boolean, default: !1 },
          },
          watch: {
            rules: {
              deep: !0,
              handler: function (t, e) {
                this._needsValidation = !h(t, e);
              },
            },
          },
          data: function () {
            return {
              messages: [],
              value: void 0,
              initialized: !1,
              initialValue: void 0,
              flags: {
                untouched: !0,
                touched: !1,
                dirty: !1,
                pristine: !0,
                valid: null,
                invalid: null,
                validated: !1,
                pending: !1,
                required: !1,
                changed: !1,
              },
              failedRules: {},
              forceRequired: !1,
              isDeactivated: !1,
              id: null,
            };
          },
          computed: {
            isValid: function () {
              return this.flags.valid;
            },
            fieldDeps: function () {
              var t = this,
                e = _(this.rules);
              return Object.keys(e)
                .filter(lt.isTargetRule)
                .map(function (n) {
                  var r = e[n][0];
                  return (
                    (function t(e, n, r) {
                      void 0 === r && (r = !0);
                      var o = e.$_veeObserver.refs;
                      e._veeWatchers || (e._veeWatchers = {});
                      if (!o[n] && r)
                        return e.$once("hook:mounted", function () {
                          t(e, n, !1);
                        });
                      !T(e._veeWatchers[n]) &&
                        o[n] &&
                        (e._veeWatchers[n] = o[n].$watch("value", function () {
                          e.flags.validated &&
                            ((e._needsValidation = !0), e.validate());
                        }));
                    })(t, r),
                    r
                  );
                });
            },
            normalizedEvents: function () {
              var t = this,
                e = di(this).on;
              return pt(e || this.events || []).map(function (e) {
                return "input" === e ? t._inputEventName : e;
              });
            },
            isRequired: function () {
              var t = _(this.rules),
                e = this.forceRequired,
                n = t.required || e;
              return (this.flags.required = n), n;
            },
            classes: function () {
              var t = this,
                e = X().classNames;
              return Object.keys(this.flags).reduce(function (n, r) {
                var o = (e && e[r]) || r;
                return d(t.flags[r]) || (o && (n[o] = t.flags[r])), n;
              }, {});
            },
          },
          render: function (t) {
            var e = this;
            this.registerField();
            var n = ci(this),
              slot = this.$scopedSlots.default;
            if (!T(slot)) return t(this.tag, this.$slots.default);
            var r = slot(n);
            return (
              et(r).forEach(function (input) {
                pi.call(e, input);
              }),
              this.slim ? st(t, r) : t(this.tag, r)
            );
          },
          beforeDestroy: function () {
            this.$_veeObserver.unsubscribe(this);
          },
          activated: function () {
            this.$_veeObserver.subscribe(this), (this.isDeactivated = !1);
          },
          deactivated: function () {
            this.$_veeObserver.unsubscribe(this), (this.isDeactivated = !0);
          },
          methods: {
            setFlags: function (t) {
              var e = this;
              Object.keys(t).forEach(function (n) {
                e.flags[n] = t[n];
              });
            },
            syncValue: function (t) {
              var e = (function (t) {
                if (ft(t))
                  return "file" === t.target.type
                    ? S(t.target.files)
                    : t.target.value;
                return t;
              })(t);
              (this.value = e), (this.flags.changed = this.initialValue !== e);
            },
            reset: function () {
              (this.messages = []),
                (this._pendingValidation = null),
                (this.initialValue = this.value);
              var t = {
                untouched: !0,
                touched: !1,
                dirty: !1,
                pristine: !0,
                valid: null,
                invalid: null,
                validated: !1,
                pending: !1,
                required: !1,
                changed: !1,
              };
              this.setFlags(t);
            },
            validate: function () {
              for (var t = this, e = [], n = arguments.length; n--; )
                e[n] = arguments[n];
              return (
                e.length > 0 && this.syncValue(e[0]),
                this.validateSilent().then(function (e) {
                  return t.applyResult(e), e;
                })
              );
            },
            validateSilent: function () {
              var t,
                e,
                n = this;
              return (
                this.setFlags({ pending: !0 }),
                ai
                  .verify(this.value, this.rules, {
                    name: this.name,
                    values:
                      ((t = this),
                      (e = t.$_veeObserver.refs),
                      t.fieldDeps.reduce(function (t, n) {
                        return e[n] ? ((t[n] = e[n].value), t) : t;
                      }, {})),
                    bails: this.bails,
                  })
                  .then(function (t) {
                    return (
                      n.setFlags({ pending: !1 }),
                      n.isRequired ||
                        n.setFlags({ valid: t.valid, invalid: !t.valid }),
                      t
                    );
                  })
              );
            },
            applyResult: function (t) {
              var e = t.errors,
                n = t.failedRules;
              (this.messages = e),
                (this.failedRules = O({}, n)),
                this.setFlags({
                  valid: !e.length,
                  changed: this.value !== this.initialValue,
                  invalid: !!e.length,
                  validated: !0,
                });
            },
            registerField: function () {
              ai || (ai = xt() || new Ot(null, { fastExit: X().fastExit })),
                (function (t) {
                  d(t.id) && t.id === t.vid && ((t.id = si), si++);
                  var e = t.id,
                    n = t.vid;
                  if (t.isDeactivated || (e === n && t.$_veeObserver.refs[e]))
                    return;
                  e !== n &&
                    t.$_veeObserver.refs[e] === t &&
                    t.$_veeObserver.unsubscribe({ vid: e });
                  t.$_veeObserver.subscribe(t), (t.id = n);
                })(this);
            },
          },
        };
      function ci(t) {
        return {
          errors: t.messages,
          flags: t.flags,
          classes: t.classes,
          valid: t.isValid,
          failedRules: t.failedRules,
          reset: function () {
            return t.reset();
          },
          validate: function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return t.validate.apply(t, e);
          },
          aria: {
            "aria-invalid": t.flags.invalid ? "true" : "false",
            "aria-required": t.isRequired ? "true" : "false",
          },
        };
      }
      function di(t) {
        return (T(t.mode) ? t.mode : jt[t.mode])({
          errors: t.messages,
          value: t.value,
          flags: t.flags,
        });
      }
      function hi(t) {
        this.initialized || (this.initialValue = t.value);
        var e = (function (t, e) {
          return (
            !(t._ignoreImmediate || !t.immediate) ||
            t.value !== e.value ||
            !!t._needsValidation ||
            (!t.initialized && void 0 === e.value)
          );
        })(this, t);
        (this._needsValidation = !1),
          (this.value = t.value),
          (this._ignoreImmediate = !0),
          e &&
            this.validateSilent().then(
              this.immediate || this.flags.validated
                ? this.applyResult
                : function (t) {
                    return t;
                  }
            );
      }
      function fi(t) {
        var e = t.$veeHandler,
          n = di(t);
        return (
          (e && t.$veeDebounce === t.debounce) ||
            ((e = m(function () {
              t.$nextTick(function () {
                var e = t.validateSilent();
                (t._pendingValidation = e),
                  e.then(function (n) {
                    e === t._pendingValidation &&
                      (t.applyResult(n), (t._pendingValidation = null));
                  });
              });
            }, n.debounce || t.debounce)),
            (t.$veeHandler = e),
            (t.$veeDebounce = t.debounce)),
          {
            onInput: function (e) {
              t.syncValue(e), t.setFlags({ dirty: !0, pristine: !1 });
            },
            onBlur: function () {
              t.setFlags({ touched: !0, untouched: !1 });
            },
            onValidate: e,
          }
        );
      }
      function pi(t) {
        var e = tt(t);
        (this._inputEventName = this._inputEventName || at(t, e)),
          hi.call(this, e);
        var n = fi(this),
          r = n.onInput,
          o = n.onBlur,
          c = n.onValidate;
        ot(t, this._inputEventName, r),
          ot(t, "blur", o),
          this.normalizedEvents.forEach(function (e) {
            ot(t, e, c);
          }),
          (this.initialized = !0);
      }
      var vi = {
        pristine: "every",
        dirty: "some",
        touched: "some",
        untouched: "every",
        valid: "every",
        invalid: "some",
        pending: "some",
        validated: "every",
      };
      var mi = 0,
        yi = {
          name: "ValidationObserver",
          provide: function () {
            return { $_veeObserver: this };
          },
          inject: {
            $_veeObserver: {
              from: "$_veeObserver",
              default: function () {
                return this.$vnode.context.$_veeObserver
                  ? this.$vnode.context.$_veeObserver
                  : null;
              },
            },
          },
          props: {
            tag: { type: String, default: "span" },
            slim: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              vid: "obs_" + mi++,
              refs: {},
              observers: [],
              persistedStore: {},
            };
          },
          computed: {
            ctx: function () {
              var t = this,
                e = {
                  errors: {},
                  validate: function (e) {
                    var n = t.validate(e);
                    return {
                      then: function (t) {
                        return n.then(function (e) {
                          return e && T(t)
                            ? Promise.resolve(t())
                            : Promise.resolve(e);
                        });
                      },
                    };
                  },
                  reset: function () {
                    return t.reset();
                  },
                };
              return j(this.refs)
                .concat(
                  Object.keys(this.persistedStore).map(function (e) {
                    return {
                      vid: e,
                      flags: t.persistedStore[e].flags,
                      messages: t.persistedStore[e].errors,
                    };
                  }),
                  this.observers
                )
                .reduce(function (t, e) {
                  return (
                    Object.keys(vi).forEach(function (n) {
                      var r,
                        o,
                        c = e.flags || e.ctx;
                      n in t
                        ? (t[n] =
                            ((r = t[n]),
                            (o = c[n]),
                            [r, o][vi[n]](function (t) {
                              return t;
                            })))
                        : (t[n] = c[n]);
                    }),
                    (t.errors[e.vid] =
                      e.messages ||
                      j(e.ctx.errors).reduce(function (t, e) {
                        return t.concat(e);
                      }, [])),
                    t
                  );
                }, e);
            },
          },
          created: function () {
            this.$_veeObserver &&
              this.$_veeObserver.subscribe(this, "observer");
          },
          activated: function () {
            this.$_veeObserver &&
              this.$_veeObserver.subscribe(this, "observer");
          },
          deactivated: function () {
            this.$_veeObserver &&
              this.$_veeObserver.unsubscribe(this, "observer");
          },
          beforeDestroy: function () {
            this.$_veeObserver &&
              this.$_veeObserver.unsubscribe(this, "observer");
          },
          render: function (t) {
            var e = this.$slots.default || this.$scopedSlots.default || [];
            return (
              T(e) && (e = e(this.ctx)),
              this.slim
                ? st(t, e)
                : t(this.tag, { on: this.$listeners, attrs: this.$attrs }, e)
            );
          },
          methods: {
            subscribe: function (t, e) {
              var n;
              void 0 === e && (e = "provider"),
                "observer" !== e
                  ? ((this.refs = Object.assign(
                      {},
                      this.refs,
                      (((n = {})[t.vid] = t), n)
                    )),
                    t.persist &&
                      this.persistedStore[t.vid] &&
                      this.restoreProviderState(t))
                  : this.observers.push(t);
            },
            unsubscribe: function (t, e) {
              var n = t.vid;
              void 0 === e && (e = "provider"),
                "provider" === e && this.removeProvider(n);
              var r = k(this.observers, function (t) {
                return t.vid === n;
              });
              -1 !== r && this.observers.splice(r, 1);
            },
            validate: function (t) {
              void 0 === t && (t = { silent: !1 });
              var e = t.silent;
              return Promise.all(
                j(this.refs)
                  .map(function (t) {
                    return t[e ? "validateSilent" : "validate"]().then(
                      function (t) {
                        return t.valid;
                      }
                    );
                  })
                  .concat(
                    this.observers.map(function (t) {
                      return t.validate({ silent: e });
                    })
                  )
              ).then(function (t) {
                return t.every(function (t) {
                  return t;
                });
              });
            },
            reset: function () {
              var t = this;
              return (
                Object.keys(this.persistedStore).forEach(function (e) {
                  t.$delete(t.persistedStore, e);
                }),
                j(this.refs)
                  .concat(this.observers)
                  .forEach(function (t) {
                    return t.reset();
                  })
              );
            },
            restoreProviderState: function (t) {
              var e = this.persistedStore[t.vid];
              t.setFlags(e.flags),
                t.applyResult(e),
                this.$delete(this.persistedStore, t.vid);
            },
            removeProvider: function (t) {
              var e,
                n = this.refs[t];
              n &&
                n.persist &&
                (this.persistedStore = O(
                  {},
                  this.persistedStore,
                  (((e = {})[t] = {
                    flags: n.flags,
                    errors: n.messages,
                    failedRules: n.failedRules,
                  }),
                  e)
                )),
                this.$delete(this.refs, t);
            },
          },
        };
      Object.keys(ri).forEach(function (t) {
        Ot.extend(
          t,
          ri[t].validate,
          O({}, ri[t].options, { paramNames: ri[t].paramNames })
        );
      }),
        Ot.localize({ en: Vt });
      ($t.version = "2.2.15"),
        ($t.mapFields = function (t) {
          if (!t)
            return function () {
              return oi(this.$validator.flags);
            };
          var e = (function (t) {
            return Array.isArray(t)
              ? t.reduce(function (t, e) {
                  return $(e, ".") ? (t[e.split(".")[1]] = e) : (t[e] = e), t;
                }, {})
              : t;
          })(t);
          return Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return (
              (t[n] = function () {
                if (this.$validator.flags[r]) return this.$validator.flags[r];
                if ("*" === e[n]) return oi(this.$validator.flags, !1);
                if (r.indexOf(".") <= 0) return {};
                var t = r.split("."),
                  o = t[0],
                  c = t.slice(1);
                return (
                  (o = this.$validator.flags["$" + o]),
                  "*" === (c = c.join(".")) && o ? oi(o) : o && o[c] ? o[c] : {}
                );
              }),
              t
            );
          }, {});
        }),
        ($t.ValidationProvider = ui),
        ($t.ValidationObserver = yi),
        ($t.withValidation = function (component, t) {
          void 0 === t && (t = null);
          var e = T(component) ? component.options : component;
          e.$__veeInject = !1;
          var n = {
            name: (e.name || "AnonymousHoc") + "WithValidation",
            props: O({}, ui.props),
            data: ui.data,
            computed: O({}, ui.computed),
            methods: O({}, ui.methods),
            $__veeInject: !1,
            beforeDestroy: ui.beforeDestroy,
            inject: ui.inject,
          };
          t ||
            (t = function (t) {
              return t;
            });
          var r = (e.model && e.model.event) || "input";
          return (
            (n.render = function (n) {
              var o;
              this.registerField();
              var c = ci(this),
                l = O({}, this.$listeners),
                d = tt(this.$vnode);
              (this._inputEventName =
                this._inputEventName || at(this.$vnode, d)),
                hi.call(this, d);
              var h = fi(this),
                f = h.onInput,
                v = h.onBlur,
                m = h.onValidate;
              it(l, r, f),
                it(l, "blur", v),
                this.normalizedEvents.forEach(function (t, e) {
                  it(l, t, m);
                });
              var y,
                _,
                w = (nt(this.$vnode) || { prop: "value" }).prop,
                C = O({}, this.$attrs, (((o = {})[w] = d.value), o), t(c));
              return n(
                e,
                { attrs: this.$attrs, props: C, on: l },
                ((y = this.$slots),
                (_ = this.$vnode.context),
                Object.keys(y).reduce(function (t, e) {
                  return (
                    y[e].forEach(function (t) {
                      t.context ||
                        ((y[e].context = _),
                        t.data || (t.data = {}),
                        (t.data.slot = e));
                    }),
                    t.concat(y[e])
                  );
                }, []))
              );
            }),
            n
          );
        }),
        (e.a = $t);
    },
    function (t, e, n) {
      "use strict";
      var r = {
        name: "NoSsr",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            c = r(),
            l = c.default;
          void 0 === l && (l = []);
          var d = c.placeholder;
          return n._isMounted
            ? l
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || d)
                ? t(
                    o.placeholderTag,
                    { class: ["no-ssr-placeholder"] },
                    o.placeholder || d
                  )
                : l.length > 0
                ? l.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = r;
    },
    function (t, e, n) {
      "use strict";
      var r = Array.isArray;
      e.a = r;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(56),
        o = n(35);
      var c = function (t) {
          return Object(o.a)(t) && "[object Arguments]" == Object(r.a)(t);
        },
        l = Object.prototype,
        d = l.hasOwnProperty,
        h = l.propertyIsEnumerable,
        f = c(
          (function () {
            return arguments;
          })()
        )
          ? c
          : function (t) {
              return (
                Object(o.a)(t) && d.call(t, "callee") && !h.call(t, "callee")
              );
            };
      e.a = f;
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        return "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      })();
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      e.a = function (t) {
        return t;
      };
    },
    function (t, e, n) {
      "use strict";
      e.a = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = /^(?:0|[1-9]\d*)$/;
      e.a = function (t, e) {
        var n = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == n || ("symbol" != n && r.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(67),
        o = n(29),
        c = Object(r.a)(o.a, "Map");
      e.a = c;
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(29),
          o = n(215),
          c =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          l = c && "object" == typeof t && t && !t.nodeType && t,
          d = l && l.exports === c ? r.a.Buffer : void 0,
          h = (d ? d.isBuffer : void 0) || o.a;
        e.a = h;
      }.call(this, n(153)(t)));
    },
    function (t, e, n) {
      "use strict";
      var r = Object.prototype;
      e.a = function (t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || r);
      };
    },
    ,
    ,
    function (t, e, n) {
      t.exports = (function () {
        "use strict";
        var t,
          e = {
            name: "en",
            messages: {
              _default: function (t) {
                return "The " + t + " value is not valid";
              },
              after: function (t, e) {
                var n = e[0];
                return (
                  "The " +
                  t +
                  " must be after " +
                  (e[1] ? "or equal to " : "") +
                  n
                );
              },
              alpha: function (t) {
                return (
                  "The " + t + " field may only contain alphabetic characters"
                );
              },
              alpha_dash: function (t) {
                return (
                  "The " +
                  t +
                  " field may contain alpha-numeric characters as well as dashes and underscores"
                );
              },
              alpha_num: function (t) {
                return (
                  "The " +
                  t +
                  " field may only contain alpha-numeric characters"
                );
              },
              alpha_spaces: function (t) {
                return (
                  "The " +
                  t +
                  " field may only contain alphabetic characters as well as spaces"
                );
              },
              before: function (t, e) {
                var n = e[0];
                return (
                  "The " +
                  t +
                  " must be before " +
                  (e[1] ? "or equal to " : "") +
                  n
                );
              },
              between: function (t, e) {
                return (
                  "The " + t + " field must be between " + e[0] + " and " + e[1]
                );
              },
              confirmed: function (t) {
                return "The " + t + " confirmation does not match";
              },
              credit_card: function (t) {
                return "The " + t + " field is invalid";
              },
              date_between: function (t, e) {
                return "The " + t + " must be between " + e[0] + " and " + e[1];
              },
              date_format: function (t, e) {
                return "The " + t + " must be in the format " + e[0];
              },
              decimal: function (t, e) {
                void 0 === e && (e = []);
                var n = e[0];
                return (
                  void 0 === n && (n = "*"),
                  "The " +
                    t +
                    " field must be numeric and may contain" +
                    (n && "*" !== n ? " " + n : "") +
                    " decimal points"
                );
              },
              digits: function (t, e) {
                return (
                  "The " +
                  t +
                  " field must be numeric and contains exactly " +
                  e[0] +
                  " digits"
                );
              },
              dimensions: function (t, e) {
                return (
                  "The " +
                  t +
                  " field must be " +
                  e[0] +
                  " pixels by " +
                  e[1] +
                  " pixels"
                );
              },
              email: function (t) {
                return "The " + t + " field must be a valid email";
              },
              excluded: function (t) {
                return "The " + t + " field must be a valid value";
              },
              ext: function (t) {
                return "The " + t + " field must be a valid file";
              },
              image: function (t) {
                return "The " + t + " field must be an image";
              },
              included: function (t) {
                return "The " + t + " field must be a valid value";
              },
              integer: function (t) {
                return "The " + t + " field must be an integer";
              },
              ip: function (t) {
                return "The " + t + " field must be a valid ip address";
              },
              ip_or_fqdn: function (t) {
                return "The " + t + " field must be a valid ip address or FQDN";
              },
              length: function (t, e) {
                var n = e[0],
                  i = e[1];
                return i
                  ? "The " + t + " length must be between " + n + " and " + i
                  : "The " + t + " length must be " + n;
              },
              max: function (t, e) {
                return (
                  "The " +
                  t +
                  " field may not be greater than " +
                  e[0] +
                  " characters"
                );
              },
              max_value: function (t, e) {
                return "The " + t + " field must be " + e[0] + " or less";
              },
              mimes: function (t) {
                return "The " + t + " field must have a valid file type";
              },
              min: function (t, e) {
                return (
                  "The " + t + " field must be at least " + e[0] + " characters"
                );
              },
              min_value: function (t, e) {
                return "The " + t + " field must be " + e[0] + " or more";
              },
              numeric: function (t) {
                return (
                  "The " + t + " field may only contain numeric characters"
                );
              },
              regex: function (t) {
                return "The " + t + " field format is invalid";
              },
              required: function (t) {
                return "The " + t + " field is required";
              },
              required_if: function (t, e) {
                return (
                  "The " +
                  t +
                  " field is required when the " +
                  e[0] +
                  " field has this value"
                );
              },
              size: function (t, e) {
                return (
                  "The " +
                  t +
                  " size must be less than " +
                  (function (t) {
                    var e = 1024,
                      n =
                        0 == (t = Number(t) * e)
                          ? 0
                          : Math.floor(Math.log(t) / Math.log(e));
                    return (
                      1 * (t / Math.pow(e, n)).toFixed(2) +
                      " " +
                      ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][
                        n
                      ]
                    );
                  })(e[0])
                );
              },
              url: function (t) {
                return "The " + t + " field is not a valid URL";
              },
            },
            attributes: {},
          };
        return (
          "undefined" != typeof VeeValidate &&
            VeeValidate.Validator.localize((((t = {})[e.name] = e), t)),
          e
        );
      })();
    },
    function (t, e, n) {
      "use strict";
      var r = n(56),
        o = n(111),
        c = n(35),
        l = {};
      (l["[object Float32Array]"] = l["[object Float64Array]"] = l[
        "[object Int8Array]"
      ] = l["[object Int16Array]"] = l["[object Int32Array]"] = l[
        "[object Uint8Array]"
      ] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l[
        "[object Uint32Array]"
      ] = !0),
        (l["[object Arguments]"] = l["[object Array]"] = l[
          "[object ArrayBuffer]"
        ] = l["[object Boolean]"] = l["[object DataView]"] = l[
          "[object Date]"
        ] = l["[object Error]"] = l["[object Function]"] = l[
          "[object Map]"
        ] = l["[object Number]"] = l["[object Object]"] = l[
          "[object RegExp]"
        ] = l["[object Set]"] = l["[object String]"] = l[
          "[object WeakMap]"
        ] = !1);
      var d = function (t) {
        return Object(c.a)(t) && Object(o.a)(t.length) && !!l[Object(r.a)(t)];
      };
      var h = function (t) {
          return function (e) {
            return t(e);
          };
        },
        f = n(159),
        v = f.a && f.a.isTypedArray,
        m = v ? h(v) : d;
      e.a = m;
    },
    ,
    function (t, e, n) {
      "use strict";
      function r(t) {
        return null !== t && "object" == typeof t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t) {
        return t && "number" == typeof t.length && "function" != typeof t;
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ,
    function (t, e, n) {
      "use strict";
      (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.a = n;
      }.call(this, n(40)));
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      });
      var r = n(43),
        o = n(58),
        c = n(36),
        l = n(122),
        d = n(123),
        h = n(121),
        f = function (t) {
          if (t && "function" == typeof t[c.a])
            return (
              (v = t),
              function (t) {
                var e = v[c.a]();
                if ("function" != typeof e.subscribe)
                  throw new TypeError(
                    "Provided object does not correctly implement Symbol.observable"
                  );
                return e.subscribe(t);
              }
            );
          if (Object(l.a)(t))
            return (
              (f = t),
              function (t) {
                for (var i = 0, e = f.length; i < e && !t.closed; i++)
                  t.next(f[i]);
                t.complete();
              }
            );
          if (Object(d.a)(t))
            return (
              (n = t),
              function (t) {
                return (
                  n
                    .then(
                      function (e) {
                        t.closed || (t.next(e), t.complete());
                      },
                      function (e) {
                        return t.error(e);
                      }
                    )
                    .then(null, r.a),
                  t
                );
              }
            );
          if (t && "function" == typeof t[o.a])
            return (
              (e = t),
              function (t) {
                for (var n = e[o.a](); ; ) {
                  var r = void 0;
                  try {
                    r = n.next();
                  } catch (e) {
                    return t.error(e), t;
                  }
                  if (r.done) {
                    t.complete();
                    break;
                  }
                  if ((t.next(r.value), t.closed)) break;
                }
                return (
                  "function" == typeof n.return &&
                    t.add(function () {
                      n.return && n.return();
                    }),
                  t
                );
              }
            );
          var e,
            n,
            f,
            v,
            m = Object(h.a)(t) ? "an invalid object" : "'" + t + "'";
          throw new TypeError(
            "You provided " +
              m +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
          );
        };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
      }
      var o = r(n(201));
      o.default.registerVersion("firebase", "7.24.0", "app"),
        (t.exports = o.default);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
          o = {
            NODE_CLIENT: !1,
            NODE_ADMIN: !1,
            SDK_VERSION: "${JSCORE_VERSION}",
          },
          c = function (t, e) {
            if (!t) throw l(e);
          },
          l = function (t) {
            return new Error(
              "Firebase Database (" +
                o.SDK_VERSION +
                ") INTERNAL ASSERT FAILED: " +
                t
            );
          },
          d = function (t) {
            for (var e = [], p = 0, i = 0; i < t.length; i++) {
              var n = t.charCodeAt(i);
              n < 128
                ? (e[p++] = n)
                : n < 2048
                ? ((e[p++] = (n >> 6) | 192), (e[p++] = (63 & n) | 128))
                : 55296 == (64512 & n) &&
                  i + 1 < t.length &&
                  56320 == (64512 & t.charCodeAt(i + 1))
                ? ((n =
                    65536 + ((1023 & n) << 10) + (1023 & t.charCodeAt(++i))),
                  (e[p++] = (n >> 18) | 240),
                  (e[p++] = ((n >> 12) & 63) | 128),
                  (e[p++] = ((n >> 6) & 63) | 128),
                  (e[p++] = (63 & n) | 128))
                : ((e[p++] = (n >> 12) | 224),
                  (e[p++] = ((n >> 6) & 63) | 128),
                  (e[p++] = (63 & n) | 128));
            }
            return e;
          },
          h = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
              return this.ENCODED_VALS_BASE + "+/=";
            },
            get ENCODED_VALS_WEBSAFE() {
              return this.ENCODED_VALS_BASE + "-_.";
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray: function (input, t) {
              if (!Array.isArray(input))
                throw Error("encodeByteArray takes an array as a parameter");
              this.init_();
              for (
                var e = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                  output = [],
                  i = 0;
                i < input.length;
                i += 3
              ) {
                var n = input[i],
                  r = i + 1 < input.length,
                  o = r ? input[i + 1] : 0,
                  c = i + 2 < input.length,
                  l = c ? input[i + 2] : 0,
                  d = n >> 2,
                  h = ((3 & n) << 4) | (o >> 4),
                  f = ((15 & o) << 2) | (l >> 6),
                  v = 63 & l;
                c || ((v = 64), r || (f = 64)),
                  output.push(e[d], e[h], e[f], e[v]);
              }
              return output.join("");
            },
            encodeString: function (input, t) {
              return this.HAS_NATIVE_SUPPORT && !t
                ? btoa(input)
                : this.encodeByteArray(d(input), t);
            },
            decodeString: function (input, t) {
              return this.HAS_NATIVE_SUPPORT && !t
                ? atob(input)
                : (function (t) {
                    for (var e = [], n = 0, r = 0; n < t.length; ) {
                      var o = t[n++];
                      if (o < 128) e[r++] = String.fromCharCode(o);
                      else if (o > 191 && o < 224) {
                        var c = t[n++];
                        e[r++] = String.fromCharCode(
                          ((31 & o) << 6) | (63 & c)
                        );
                      } else if (o > 239 && o < 365) {
                        var u =
                          (((7 & o) << 18) |
                            ((63 & (c = t[n++])) << 12) |
                            ((63 & (l = t[n++])) << 6) |
                            (63 & t[n++])) -
                          65536;
                        (e[r++] = String.fromCharCode(55296 + (u >> 10))),
                          (e[r++] = String.fromCharCode(56320 + (1023 & u)));
                      } else {
                        c = t[n++];
                        var l = t[n++];
                        e[r++] = String.fromCharCode(
                          ((15 & o) << 12) | ((63 & c) << 6) | (63 & l)
                        );
                      }
                    }
                    return e.join("");
                  })(this.decodeStringToByteArray(input, t));
            },
            decodeStringToByteArray: function (input, t) {
              this.init_();
              for (
                var e = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                  output = [],
                  i = 0;
                i < input.length;

              ) {
                var n = e[input.charAt(i++)],
                  r = i < input.length ? e[input.charAt(i)] : 0,
                  o = ++i < input.length ? e[input.charAt(i)] : 64,
                  c = ++i < input.length ? e[input.charAt(i)] : 64;
                if ((++i, null == n || null == r || null == o || null == c))
                  throw Error();
                var l = (n << 2) | (r >> 4);
                if ((output.push(l), 64 !== o)) {
                  var d = ((r << 4) & 240) | (o >> 2);
                  if ((output.push(d), 64 !== c)) {
                    var h = ((o << 6) & 192) | c;
                    output.push(h);
                  }
                }
              }
              return output;
            },
            init_: function () {
              if (!this.byteToCharMap_) {
                (this.byteToCharMap_ = {}),
                  (this.charToByteMap_ = {}),
                  (this.byteToCharMapWebSafe_ = {}),
                  (this.charToByteMapWebSafe_ = {});
                for (var i = 0; i < this.ENCODED_VALS.length; i++)
                  (this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i)),
                    (this.charToByteMap_[this.byteToCharMap_[i]] = i),
                    (this.byteToCharMapWebSafe_[
                      i
                    ] = this.ENCODED_VALS_WEBSAFE.charAt(i)),
                    (this.charToByteMapWebSafe_[
                      this.byteToCharMapWebSafe_[i]
                    ] = i),
                    i >= this.ENCODED_VALS_BASE.length &&
                      ((this.charToByteMap_[
                        this.ENCODED_VALS_WEBSAFE.charAt(i)
                      ] = i),
                      (this.charToByteMapWebSafe_[
                        this.ENCODED_VALS.charAt(i)
                      ] = i));
              }
            },
          },
          f = function (t) {
            try {
              return h.decodeString(t, !0);
            } catch (t) {
              console.error("base64Decode failed: ", t);
            }
            return null;
          };
        function v(t, source) {
          if (!(source instanceof Object)) return source;
          switch (source.constructor) {
            case Date:
              return new Date(source.getTime());
            case Object:
              void 0 === t && (t = {});
              break;
            case Array:
              t = [];
              break;
            default:
              return source;
          }
          for (var e in source)
            source.hasOwnProperty(e) && (t[e] = v(t[e], source[e]));
          return t;
        }
        var m = (function () {
          function t() {
            var t = this;
            (this.reject = function () {}),
              (this.resolve = function () {}),
              (this.promise = new Promise(function (e, n) {
                (t.resolve = e), (t.reject = n);
              }));
          }
          return (
            (t.prototype.wrapCallback = function (t) {
              var e = this;
              return function (n, r) {
                n ? e.reject(n) : e.resolve(r),
                  "function" == typeof t &&
                    (e.promise.catch(function () {}),
                    1 === t.length ? t(n) : t(n, r));
              };
            }),
            t
          );
        })();
        function y() {
          return "undefined" != typeof navigator &&
            "string" == typeof navigator.userAgent
            ? navigator.userAgent
            : "";
        }
        function _() {
          try {
            return (
              "[object process]" === Object.prototype.toString.call(t.process)
            );
          } catch (t) {
            return !1;
          }
        }
        var w = (function (t) {
            function e(code, n) {
              var r = t.call(this, n) || this;
              return (
                (r.code = code),
                (r.name = "FirebaseError"),
                Object.setPrototypeOf(r, e.prototype),
                Error.captureStackTrace &&
                  Error.captureStackTrace(r, C.prototype.create),
                r
              );
            }
            return r.__extends(e, t), e;
          })(Error),
          C = (function () {
            function t(t, e, n) {
              (this.service = t), (this.serviceName = e), (this.errors = n);
            }
            return (
              (t.prototype.create = function (code) {
                for (var data = [], t = 1; t < arguments.length; t++)
                  data[t - 1] = arguments[t];
                for (
                  var e = data[0] || {},
                    n = this.service + "/" + code,
                    template = this.errors[code],
                    r = template ? E(template, e) : "Error",
                    o = this.serviceName + ": " + r + " (" + n + ").",
                    c = new w(n, o),
                    l = 0,
                    d = Object.keys(e);
                  l < d.length;
                  l++
                ) {
                  var h = d[l];
                  "_" !== h.slice(-1) &&
                    (h in c &&
                      console.warn(
                        'Overwriting FirebaseError base field "' +
                          h +
                          '" can cause unexpected behavior.'
                      ),
                    (c[h] = e[h]));
                }
                return c;
              }),
              t
            );
          })();
        function E(template, data) {
          return template.replace(T, function (t, e) {
            var n = data[e];
            return null != n ? String(n) : "<" + e + "?>";
          });
        }
        var T = /\{\$([^}]+)}/g;
        function x(t) {
          return JSON.parse(t);
        }
        var A = function (t) {
          var header = {},
            e = {},
            data = {},
            n = "";
          try {
            var r = t.split(".");
            (header = x(f(r[0]) || "")),
              (e = x(f(r[1]) || "")),
              (n = r[2]),
              (data = e.d || {}),
              delete e.d;
          } catch (t) {}
          return { header: header, claims: e, data: data, signature: n };
        };
        var S = (function () {
          function t() {
            (this.chain_ = []),
              (this.buf_ = []),
              (this.W_ = []),
              (this.pad_ = []),
              (this.inbuf_ = 0),
              (this.total_ = 0),
              (this.blockSize = 64),
              (this.pad_[0] = 128);
            for (var i = 1; i < this.blockSize; ++i) this.pad_[i] = 0;
            this.reset();
          }
          return (
            (t.prototype.reset = function () {
              (this.chain_[0] = 1732584193),
                (this.chain_[1] = 4023233417),
                (this.chain_[2] = 2562383102),
                (this.chain_[3] = 271733878),
                (this.chain_[4] = 3285377520),
                (this.inbuf_ = 0),
                (this.total_ = 0);
            }),
            (t.prototype.compress_ = function (t, e) {
              e || (e = 0);
              var n = this.W_;
              if ("string" == typeof t)
                for (var i = 0; i < 16; i++)
                  (n[i] =
                    (t.charCodeAt(e) << 24) |
                    (t.charCodeAt(e + 1) << 16) |
                    (t.charCodeAt(e + 2) << 8) |
                    t.charCodeAt(e + 3)),
                    (e += 4);
              else
                for (i = 0; i < 16; i++)
                  (n[i] =
                    (t[e] << 24) |
                    (t[e + 1] << 16) |
                    (t[e + 2] << 8) |
                    t[e + 3]),
                    (e += 4);
              for (i = 16; i < 80; i++) {
                var r = n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16];
                n[i] = 4294967295 & ((r << 1) | (r >>> 31));
              }
              var o,
                c,
                a = this.chain_[0],
                b = this.chain_[1],
                l = this.chain_[2],
                d = this.chain_[3],
                h = this.chain_[4];
              for (i = 0; i < 80; i++) {
                i < 40
                  ? i < 20
                    ? ((o = d ^ (b & (l ^ d))), (c = 1518500249))
                    : ((o = b ^ l ^ d), (c = 1859775393))
                  : i < 60
                  ? ((o = (b & l) | (d & (b | l))), (c = 2400959708))
                  : ((o = b ^ l ^ d), (c = 3395469782));
                r = (((a << 5) | (a >>> 27)) + o + h + c + n[i]) & 4294967295;
                (h = d),
                  (d = l),
                  (l = 4294967295 & ((b << 30) | (b >>> 2))),
                  (b = a),
                  (a = r);
              }
              (this.chain_[0] = (this.chain_[0] + a) & 4294967295),
                (this.chain_[1] = (this.chain_[1] + b) & 4294967295),
                (this.chain_[2] = (this.chain_[2] + l) & 4294967295),
                (this.chain_[3] = (this.chain_[3] + d) & 4294967295),
                (this.chain_[4] = (this.chain_[4] + h) & 4294967295);
            }),
            (t.prototype.update = function (t, e) {
              if (null != t) {
                void 0 === e && (e = t.length);
                for (
                  var n = e - this.blockSize,
                    r = 0,
                    o = this.buf_,
                    c = this.inbuf_;
                  r < e;

                ) {
                  if (0 === c)
                    for (; r <= n; )
                      this.compress_(t, r), (r += this.blockSize);
                  if ("string" == typeof t) {
                    for (; r < e; )
                      if (
                        ((o[c] = t.charCodeAt(r)), ++r, ++c === this.blockSize)
                      ) {
                        this.compress_(o), (c = 0);
                        break;
                      }
                  } else
                    for (; r < e; )
                      if (((o[c] = t[r]), ++r, ++c === this.blockSize)) {
                        this.compress_(o), (c = 0);
                        break;
                      }
                }
                (this.inbuf_ = c), (this.total_ += e);
              }
            }),
            (t.prototype.digest = function () {
              var t = [],
                e = 8 * this.total_;
              this.inbuf_ < 56
                ? this.update(this.pad_, 56 - this.inbuf_)
                : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
              for (var i = this.blockSize - 1; i >= 56; i--)
                (this.buf_[i] = 255 & e), (e /= 256);
              this.compress_(this.buf_);
              var n = 0;
              for (i = 0; i < 5; i++)
                for (var r = 24; r >= 0; r -= 8)
                  (t[n] = (this.chain_[i] >> r) & 255), ++n;
              return t;
            }),
            t
          );
        })();
        var N = (function () {
          function t(t, e) {
            var n = this;
            (this.observers = []),
              (this.unsubscribes = []),
              (this.observerCount = 0),
              (this.task = Promise.resolve()),
              (this.finalized = !1),
              (this.onNoObservers = e),
              this.task
                .then(function () {
                  t(n);
                })
                .catch(function (t) {
                  n.error(t);
                });
          }
          return (
            (t.prototype.next = function (t) {
              this.forEachObserver(function (e) {
                e.next(t);
              });
            }),
            (t.prototype.error = function (t) {
              this.forEachObserver(function (e) {
                e.error(t);
              }),
                this.close(t);
            }),
            (t.prototype.complete = function () {
              this.forEachObserver(function (t) {
                t.complete();
              }),
                this.close();
            }),
            (t.prototype.subscribe = function (t, e, n) {
              var r,
                o = this;
              if (void 0 === t && void 0 === e && void 0 === n)
                throw new Error("Missing Observer.");
              void 0 ===
                (r = (function (t, e) {
                  if ("object" != typeof t || null === t) return !1;
                  for (var n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    if (o in t && "function" == typeof t[o]) return !0;
                  }
                  return !1;
                })(t, ["next", "error", "complete"])
                  ? t
                  : { next: t, error: e, complete: n }).next && (r.next = O),
                void 0 === r.error && (r.error = O),
                void 0 === r.complete && (r.complete = O);
              var c = this.unsubscribeOne.bind(this, this.observers.length);
              return (
                this.finalized &&
                  this.task.then(function () {
                    try {
                      o.finalError ? r.error(o.finalError) : r.complete();
                    } catch (t) {}
                  }),
                this.observers.push(r),
                c
              );
            }),
            (t.prototype.unsubscribeOne = function (i) {
              void 0 !== this.observers &&
                void 0 !== this.observers[i] &&
                (delete this.observers[i],
                (this.observerCount -= 1),
                0 === this.observerCount &&
                  void 0 !== this.onNoObservers &&
                  this.onNoObservers(this));
            }),
            (t.prototype.forEachObserver = function (t) {
              if (!this.finalized)
                for (var i = 0; i < this.observers.length; i++)
                  this.sendOne(i, t);
            }),
            (t.prototype.sendOne = function (i, t) {
              var e = this;
              this.task.then(function () {
                if (void 0 !== e.observers && void 0 !== e.observers[i])
                  try {
                    t(e.observers[i]);
                  } catch (t) {
                    "undefined" != typeof console &&
                      console.error &&
                      console.error(t);
                  }
              });
            }),
            (t.prototype.close = function (t) {
              var e = this;
              this.finalized ||
                ((this.finalized = !0),
                void 0 !== t && (this.finalError = t),
                this.task.then(function () {
                  (e.observers = void 0), (e.onNoObservers = void 0);
                }));
            }),
            t
          );
        })();
        function O() {}
        function I(t, e, n) {
          var r = "";
          switch (e) {
            case 1:
              r = n ? "first" : "First";
              break;
            case 2:
              r = n ? "second" : "Second";
              break;
            case 3:
              r = n ? "third" : "Third";
              break;
            case 4:
              r = n ? "fourth" : "Fourth";
              break;
            default:
              throw new Error(
                "errorPrefix called with argumentNumber > 4.  Need to update it?"
              );
          }
          var o = t + " failed: ";
          return (o += r + " argument ");
        }
        (e.CONSTANTS = o),
          (e.Deferred = m),
          (e.ErrorFactory = C),
          (e.FirebaseError = w),
          (e.MAX_VALUE_MILLIS = 144e5),
          (e.RANDOM_FACTOR = 0.5),
          (e.Sha1 = S),
          (e.areCookiesEnabled = function () {
            return !(!navigator || !navigator.cookieEnabled);
          }),
          (e.assert = c),
          (e.assertionError = l),
          (e.async = function (t, e) {
            return function () {
              for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              Promise.resolve(!0)
                .then(function () {
                  t.apply(void 0, n);
                })
                .catch(function (t) {
                  e && e(t);
                });
            };
          }),
          (e.base64 = h),
          (e.base64Decode = f),
          (e.base64Encode = function (t) {
            var e = d(t);
            return h.encodeByteArray(e, !0);
          }),
          (e.calculateBackoffMillis = function (t, e, n) {
            void 0 === e && (e = 1e3), void 0 === n && (n = 2);
            var r = e * Math.pow(n, t),
              o = Math.round(0.5 * r * (Math.random() - 0.5) * 2);
            return Math.min(144e5, r + o);
          }),
          (e.contains = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.createSubscribe = function (t, e) {
            var n = new N(t, e);
            return n.subscribe.bind(n);
          }),
          (e.decode = A),
          (e.deepCopy = function (t) {
            return v(void 0, t);
          }),
          (e.deepExtend = v),
          (e.errorPrefix = I),
          (e.getUA = y),
          (e.isAdmin = function (t) {
            var e = A(t).claims;
            return "object" == typeof e && !0 === e.admin;
          }),
          (e.isBrowser = function () {
            return "object" == typeof self && self.self === self;
          }),
          (e.isBrowserExtension = function () {
            var t =
              "object" == typeof chrome
                ? chrome.runtime
                : "object" == typeof browser
                ? browser.runtime
                : void 0;
            return "object" == typeof t && void 0 !== t.id;
          }),
          (e.isElectron = function () {
            return y().indexOf("Electron/") >= 0;
          }),
          (e.isEmpty = function (t) {
            for (var e in t)
              if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
            return !0;
          }),
          (e.isIE = function () {
            var t = y();
            return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
          }),
          (e.isIndexedDBAvailable = function () {
            return "indexedDB" in self && null != indexedDB;
          }),
          (e.isMobileCordova = function () {
            return (
              "undefined" != typeof window &&
              !!(window.cordova || window.phonegap || window.PhoneGap) &&
              /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())
            );
          }),
          (e.isNode = _),
          (e.isNodeSdk = function () {
            return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN;
          }),
          (e.isReactNative = function () {
            return (
              "object" == typeof navigator &&
              "ReactNative" === navigator.product
            );
          }),
          (e.isSafari = function () {
            return (
              !_() &&
              navigator.userAgent.includes("Safari") &&
              !navigator.userAgent.includes("Chrome")
            );
          }),
          (e.isUWP = function () {
            return y().indexOf("MSAppHost/") >= 0;
          }),
          (e.isValidFormat = function (t) {
            var e = A(t).claims;
            return !!e && "object" == typeof e && e.hasOwnProperty("iat");
          }),
          (e.isValidTimestamp = function (t) {
            var e = A(t).claims,
              n = Math.floor(new Date().getTime() / 1e3),
              r = 0,
              o = 0;
            return (
              "object" == typeof e &&
                (e.hasOwnProperty("nbf")
                  ? (r = e.nbf)
                  : e.hasOwnProperty("iat") && (r = e.iat),
                (o = e.hasOwnProperty("exp") ? e.exp : r + 86400)),
              !!n && !!r && !!o && n >= r && n <= o
            );
          }),
          (e.issuedAtTime = function (t) {
            var e = A(t).claims;
            return "object" == typeof e && e.hasOwnProperty("iat")
              ? e.iat
              : null;
          }),
          (e.jsonEval = x),
          (e.map = function (t, e, n) {
            var r = {};
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) &&
                (r[o] = e.call(n, t[o], o, t));
            return r;
          }),
          (e.querystring = function (t) {
            for (
              var e = [],
                n = function (t, n) {
                  Array.isArray(n)
                    ? n.forEach(function (n) {
                        e.push(
                          encodeURIComponent(t) + "=" + encodeURIComponent(n)
                        );
                      })
                    : e.push(
                        encodeURIComponent(t) + "=" + encodeURIComponent(n)
                      );
                },
                r = 0,
                o = Object.entries(t);
              r < o.length;
              r++
            ) {
              var c = o[r];
              n(c[0], c[1]);
            }
            return e.length ? "&" + e.join("&") : "";
          }),
          (e.querystringDecode = function (t) {
            var e = {};
            return (
              t
                .replace(/^\?/, "")
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var n = t.split("=");
                    e[n[0]] = n[1];
                  }
                }),
              e
            );
          }),
          (e.safeGet = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
          }),
          (e.stringLength = function (t) {
            for (var p = 0, i = 0; i < t.length; i++) {
              var e = t.charCodeAt(i);
              e < 128
                ? p++
                : e < 2048
                ? (p += 2)
                : e >= 55296 && e <= 56319
                ? ((p += 4), i++)
                : (p += 3);
            }
            return p;
          }),
          (e.stringToByteArray = function (t) {
            for (var e = [], p = 0, i = 0; i < t.length; i++) {
              var n = t.charCodeAt(i);
              if (n >= 55296 && n <= 56319) {
                var r = n - 55296;
                i++,
                  c(i < t.length, "Surrogate pair missing trail surrogate."),
                  (n = 65536 + (r << 10) + (t.charCodeAt(i) - 56320));
              }
              n < 128
                ? (e[p++] = n)
                : n < 2048
                ? ((e[p++] = (n >> 6) | 192), (e[p++] = (63 & n) | 128))
                : n < 65536
                ? ((e[p++] = (n >> 12) | 224),
                  (e[p++] = ((n >> 6) & 63) | 128),
                  (e[p++] = (63 & n) | 128))
                : ((e[p++] = (n >> 18) | 240),
                  (e[p++] = ((n >> 12) & 63) | 128),
                  (e[p++] = ((n >> 6) & 63) | 128),
                  (e[p++] = (63 & n) | 128));
            }
            return e;
          }),
          (e.stringify = function (data) {
            return JSON.stringify(data);
          }),
          (e.validateArgCount = function (t, e, n, r) {
            var o;
            if (
              (r < e
                ? (o = "at least " + e)
                : r > n && (o = 0 === n ? "none" : "no more than " + n),
              o)
            )
              throw new Error(
                t +
                  " failed: Was called with " +
                  r +
                  (1 === r ? " argument." : " arguments.") +
                  " Expects " +
                  o +
                  "."
              );
          }),
          (e.validateCallback = function (t, e, n, r) {
            if ((!r || n) && "function" != typeof n)
              throw new Error(I(t, e, r) + "must be a valid function.");
          }),
          (e.validateContextObject = function (t, e, n, r) {
            if ((!r || n) && ("object" != typeof n || null === n))
              throw new Error(I(t, e, r) + "must be a valid context object.");
          }),
          (e.validateIndexedDBOpenable = function () {
            return new Promise(function (t, e) {
              try {
                var n = !0,
                  r = "validate-browser-context-for-indexeddb-analytics-module",
                  o = window.indexedDB.open(r);
                (o.onsuccess = function () {
                  o.result.close(),
                    n || window.indexedDB.deleteDatabase(r),
                    t(!0);
                }),
                  (o.onupgradeneeded = function () {
                    n = !1;
                  }),
                  (o.onerror = function () {
                    var t;
                    e(
                      (null === (t = o.error) || void 0 === t
                        ? void 0
                        : t.message) || ""
                    );
                  });
              } catch (t) {
                e(t);
              }
            });
          }),
          (e.validateNamespace = function (t, e, n, r) {
            if ((!r || n) && "string" != typeof n)
              throw new Error(
                I(t, e, r) + "must be a valid firebase namespace."
              );
          });
      }.call(this, n(40)));
    },
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(29).a.Uint8Array;
      e.a = r;
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = {
        name: "ClientOnly",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            c = r(),
            l = c.default;
          void 0 === l && (l = []);
          var d = c.placeholder;
          return n._isMounted
            ? l
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || d)
                ? t(
                    o.placeholderTag,
                    { class: ["client-only-placeholder"] },
                    o.placeholder || d
                  )
                : l.length > 0
                ? l.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = r;
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(125),
          o =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          c = o && "object" == typeof t && t && !t.nodeType && t,
          l = c && c.exports === o && r.a.process,
          d = (function () {
            try {
              var t = c && c.require && c.require("util").types;
              return t || (l && l.binding && l.binding("util"));
            } catch (t) {}
          })();
        e.a = d;
      }.call(this, n(153)(t)));
    },
    function (t, e, n) {
      "use strict";
      var r = [
        "style",
        "currency",
        "currencyDisplay",
        "useGrouping",
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "localeMatcher",
        "formatMatcher",
        "unit",
      ];
      function o(t, e) {
        "undefined" != typeof console &&
          (console.warn("[vue-i18n] " + t), e && console.warn(e.stack));
      }
      var c = Array.isArray;
      function l(t) {
        return null !== t && "object" == typeof t;
      }
      function d(t) {
        return "string" == typeof t;
      }
      var h = Object.prototype.toString;
      function f(t) {
        return "[object Object]" === h.call(t);
      }
      function v(t) {
        return null == t;
      }
      function m(t) {
        return "function" == typeof t;
      }
      function y() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var n = null,
          r = null;
        return (
          1 === t.length
            ? l(t[0]) || c(t[0])
              ? (r = t[0])
              : "string" == typeof t[0] && (n = t[0])
            : 2 === t.length &&
              ("string" == typeof t[0] && (n = t[0]),
              (l(t[1]) || c(t[1])) && (r = t[1])),
          { locale: n, params: r }
        );
      }
      function _(t) {
        return JSON.parse(JSON.stringify(t));
      }
      function w(t, e) {
        return !!~t.indexOf(e);
      }
      var C = Object.prototype.hasOwnProperty;
      function E(t, e) {
        return C.call(t, e);
      }
      function T(t) {
        for (
          var e = arguments, output = Object(t), i = 1;
          i < arguments.length;
          i++
        ) {
          var source = e[i];
          if (null != source) {
            var n = void 0;
            for (n in source)
              E(source, n) &&
                (l(source[n])
                  ? (output[n] = T(output[n], source[n]))
                  : (output[n] = source[n]));
          }
        }
        return output;
      }
      function x(a, b) {
        if (a === b) return !0;
        var t = l(a),
          e = l(b);
        if (!t || !e) return !t && !e && String(a) === String(b);
        try {
          var n = c(a),
            r = c(b);
          if (n && r)
            return (
              a.length === b.length &&
              a.every(function (t, i) {
                return x(t, b[i]);
              })
            );
          if (n || r) return !1;
          var o = Object.keys(a),
            d = Object.keys(b);
          return (
            o.length === d.length &&
            o.every(function (t) {
              return x(a[t], b[t]);
            })
          );
        } catch (t) {
          return !1;
        }
      }
      function A(t) {
        return (
          null != t &&
            Object.keys(t).forEach(function (e) {
              "string" == typeof t[e] &&
                (t[e] = t[e]
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&apos;"));
            }),
          t
        );
      }
      var S = {
          beforeCreate: function () {
            var t = this.$options;
            if (((t.i18n = t.i18n || (t.__i18n ? {} : null)), t.i18n))
              if (t.i18n instanceof it) {
                if (t.__i18n)
                  try {
                    var e = t.i18n && t.i18n.messages ? t.i18n.messages : {};
                    t.__i18n.forEach(function (t) {
                      e = T(e, JSON.parse(t));
                    }),
                      Object.keys(e).forEach(function (n) {
                        t.i18n.mergeLocaleMessage(n, e[n]);
                      });
                  } catch (t) {
                    0;
                  }
                (this._i18n = t.i18n),
                  (this._i18nWatcher = this._i18n.watchI18nData());
              } else if (f(t.i18n)) {
                var n =
                  this.$root &&
                  this.$root.$i18n &&
                  this.$root.$i18n instanceof it
                    ? this.$root.$i18n
                    : null;
                if (
                  (n &&
                    ((t.i18n.root = this.$root),
                    (t.i18n.formatter = n.formatter),
                    (t.i18n.fallbackLocale = n.fallbackLocale),
                    (t.i18n.formatFallbackMessages = n.formatFallbackMessages),
                    (t.i18n.silentTranslationWarn = n.silentTranslationWarn),
                    (t.i18n.silentFallbackWarn = n.silentFallbackWarn),
                    (t.i18n.pluralizationRules = n.pluralizationRules),
                    (t.i18n.preserveDirectiveContent =
                      n.preserveDirectiveContent)),
                  t.__i18n)
                )
                  try {
                    var r = t.i18n && t.i18n.messages ? t.i18n.messages : {};
                    t.__i18n.forEach(function (t) {
                      r = T(r, JSON.parse(t));
                    }),
                      (t.i18n.messages = r);
                  } catch (t) {
                    0;
                  }
                var o = t.i18n.sharedMessages;
                o && f(o) && (t.i18n.messages = T(t.i18n.messages, o)),
                  (this._i18n = new it(t.i18n)),
                  (this._i18nWatcher = this._i18n.watchI18nData()),
                  (void 0 === t.i18n.sync || t.i18n.sync) &&
                    (this._localeWatcher = this.$i18n.watchLocale()),
                  n && n.onComponentInstanceCreated(this._i18n);
              } else 0;
            else
              this.$root && this.$root.$i18n && this.$root.$i18n instanceof it
                ? (this._i18n = this.$root.$i18n)
                : t.parent &&
                  t.parent.$i18n &&
                  t.parent.$i18n instanceof it &&
                  (this._i18n = t.parent.$i18n);
          },
          beforeMount: function () {
            var t = this.$options;
            (t.i18n = t.i18n || (t.__i18n ? {} : null)),
              t.i18n
                ? (t.i18n instanceof it || f(t.i18n)) &&
                  (this._i18n.subscribeDataChanging(this),
                  (this._subscribing = !0))
                : ((this.$root &&
                    this.$root.$i18n &&
                    this.$root.$i18n instanceof it) ||
                    (t.parent &&
                      t.parent.$i18n &&
                      t.parent.$i18n instanceof it)) &&
                  (this._i18n.subscribeDataChanging(this),
                  (this._subscribing = !0));
          },
          beforeDestroy: function () {
            if (this._i18n) {
              var t = this;
              this.$nextTick(function () {
                t._subscribing &&
                  (t._i18n.unsubscribeDataChanging(t), delete t._subscribing),
                  t._i18nWatcher &&
                    (t._i18nWatcher(),
                    t._i18n.destroyVM(),
                    delete t._i18nWatcher),
                  t._localeWatcher &&
                    (t._localeWatcher(), delete t._localeWatcher);
              });
            }
          },
        },
        N = {
          name: "i18n",
          functional: !0,
          props: {
            tag: { type: [String, Boolean, Object], default: "span" },
            path: { type: String, required: !0 },
            locale: { type: String },
            places: { type: [Array, Object] },
          },
          render: function (t, e) {
            var data = e.data,
              n = e.parent,
              r = e.props,
              o = e.slots,
              c = n.$i18n;
            if (c) {
              var path = r.path,
                l = r.locale,
                d = r.places,
                h = o(),
                f = c.i(
                  path,
                  l,
                  (function (t) {
                    var e;
                    for (e in t) if ("default" !== e) return !1;
                    return Boolean(e);
                  })(h) || d
                    ? (function (t, e) {
                        var n = e
                          ? (function (t) {
                              0;
                              return Array.isArray(t)
                                ? t.reduce(I, {})
                                : Object.assign({}, t);
                            })(e)
                          : {};
                        if (!t) return n;
                        var r = (t = t.filter(function (t) {
                          return t.tag || "" !== t.text.trim();
                        })).every(D);
                        0;
                        return t.reduce(r ? O : I, n);
                      })(h.default, d)
                    : h
                ),
                v = (r.tag && !0 !== r.tag) || !1 === r.tag ? r.tag : "span";
              return v ? t(v, data, f) : f;
            }
          },
        };
      function O(t, e) {
        return (
          e.data &&
            e.data.attrs &&
            e.data.attrs.place &&
            (t[e.data.attrs.place] = e),
          t
        );
      }
      function I(t, e, n) {
        return (t[n] = e), t;
      }
      function D(t) {
        return Boolean(t.data && t.data.attrs && t.data.attrs.place);
      }
      var k,
        P = {
          name: "i18n-n",
          functional: !0,
          props: {
            tag: { type: [String, Boolean, Object], default: "span" },
            value: { type: Number, required: !0 },
            format: { type: [String, Object] },
            locale: { type: String },
          },
          render: function (t, e) {
            var n = e.props,
              o = e.parent,
              data = e.data,
              c = o.$i18n;
            if (!c) return null;
            var h = null,
              f = null;
            d(n.format)
              ? (h = n.format)
              : l(n.format) &&
                (n.format.key && (h = n.format.key),
                (f = Object.keys(n.format).reduce(function (t, e) {
                  var o;
                  return w(r, e)
                    ? Object.assign({}, t, (((o = {})[e] = n.format[e]), o))
                    : t;
                }, null)));
            var v = n.locale || c.locale,
              m = c._ntp(n.value, v, h, f),
              y = m.map(function (t, e) {
                var n,
                  slot = data.scopedSlots && data.scopedSlots[t.type];
                return slot
                  ? slot(
                      (((n = {})[t.type] = t.value),
                      (n.index = e),
                      (n.parts = m),
                      n)
                    )
                  : t.value;
              }),
              _ = (n.tag && !0 !== n.tag) || !1 === n.tag ? n.tag : "span";
            return _
              ? t(
                  _,
                  {
                    attrs: data.attrs,
                    class: data.class,
                    staticClass: data.staticClass,
                  },
                  y
                )
              : y;
          },
        };
      function M(t, e, n) {
        L(t, n) && j(t, e, n);
      }
      function F(t, e, n, r) {
        if (L(t, n)) {
          var o = n.context.$i18n;
          ((function (t, e) {
            var n = e.context;
            return t._locale === n.$i18n.locale;
          })(t, n) &&
            x(e.value, e.oldValue) &&
            x(t._localeMessage, o.getLocaleMessage(o.locale))) ||
            j(t, e, n);
        }
      }
      function R(t, e, n, r) {
        if (n.context) {
          var c = n.context.$i18n || {};
          e.modifiers.preserve ||
            c.preserveDirectiveContent ||
            (t.textContent = ""),
            (t._vt = void 0),
            delete t._vt,
            (t._locale = void 0),
            delete t._locale,
            (t._localeMessage = void 0),
            delete t._localeMessage;
        } else o("Vue instance does not exists in VNode context");
      }
      function L(t, e) {
        var n = e.context;
        return n
          ? !!n.$i18n ||
              (o("VueI18n instance does not exists in Vue instance"), !1)
          : (o("Vue instance does not exists in VNode context"), !1);
      }
      function j(t, e, n) {
        var r,
          c,
          l = (function (t) {
            var path, e, n, r;
            d(t)
              ? (path = t)
              : f(t) &&
                ((path = t.path), (e = t.locale), (n = t.args), (r = t.choice));
            return { path: path, locale: e, args: n, choice: r };
          })(e.value),
          path = l.path,
          h = l.locale,
          v = l.args,
          m = l.choice;
        if (path || h || v)
          if (path) {
            var y = n.context;
            (t._vt = t.textContent =
              null != m
                ? (r = y.$i18n).tc.apply(r, [path, m].concat($(h, v)))
                : (c = y.$i18n).t.apply(c, [path].concat($(h, v)))),
              (t._locale = y.$i18n.locale),
              (t._localeMessage = y.$i18n.getLocaleMessage(y.$i18n.locale));
          } else o("`path` is required in v-t directive");
        else o("value type not supported");
      }
      function $(t, e) {
        var n = [];
        return t && n.push(t), e && (Array.isArray(e) || f(e)) && n.push(e), n;
      }
      function H(t) {
        H.installed = !0;
        (k = t).version && Number(k.version.split(".")[0]);
        (function (t) {
          t.prototype.hasOwnProperty("$i18n") ||
            Object.defineProperty(t.prototype, "$i18n", {
              get: function () {
                return this._i18n;
              },
            }),
            (t.prototype.$t = function (t) {
              for (var e = [], n = arguments.length - 1; n-- > 0; )
                e[n] = arguments[n + 1];
              var r = this.$i18n;
              return r._t.apply(
                r,
                [t, r.locale, r._getMessages(), this].concat(e)
              );
            }),
            (t.prototype.$tc = function (t, e) {
              for (var n = [], r = arguments.length - 2; r-- > 0; )
                n[r] = arguments[r + 2];
              var o = this.$i18n;
              return o._tc.apply(
                o,
                [t, o.locale, o._getMessages(), this, e].concat(n)
              );
            }),
            (t.prototype.$te = function (t, e) {
              var n = this.$i18n;
              return n._te(t, n.locale, n._getMessages(), e);
            }),
            (t.prototype.$d = function (t) {
              for (var e, n = [], r = arguments.length - 1; r-- > 0; )
                n[r] = arguments[r + 1];
              return (e = this.$i18n).d.apply(e, [t].concat(n));
            }),
            (t.prototype.$n = function (t) {
              for (var e, n = [], r = arguments.length - 1; r-- > 0; )
                n[r] = arguments[r + 1];
              return (e = this.$i18n).n.apply(e, [t].concat(n));
            });
        })(k),
          k.mixin(S),
          k.directive("t", { bind: M, update: F, unbind: R }),
          k.component(N.name, N),
          k.component(P.name, P),
          (k.config.optionMergeStrategies.i18n = function (t, e) {
            return void 0 === e ? t : e;
          });
      }
      var U = function () {
        this._caches = Object.create(null);
      };
      U.prototype.interpolate = function (t, e) {
        if (!e) return [t];
        var n = this._caches[t];
        return (
          n ||
            ((n = (function (t) {
              var e = [],
                n = 0,
                text = "";
              for (; n < t.length; ) {
                var r = t[n++];
                if ("{" === r) {
                  text && e.push({ type: "text", value: text }), (text = "");
                  var sub = "";
                  for (r = t[n++]; void 0 !== r && "}" !== r; )
                    (sub += r), (r = t[n++]);
                  var o = "}" === r,
                    c = V.test(sub)
                      ? "list"
                      : o && W.test(sub)
                      ? "named"
                      : "unknown";
                  e.push({ value: sub, type: c });
                } else "%" === r ? "{" !== t[n] && (text += r) : (text += r);
              }
              return text && e.push({ type: "text", value: text }), e;
            })(t)),
            (this._caches[t] = n)),
          (function (t, e) {
            var n = [],
              r = 0,
              o = Array.isArray(e) ? "list" : l(e) ? "named" : "unknown";
            if ("unknown" === o) return n;
            for (; r < t.length; ) {
              var c = t[r];
              switch (c.type) {
                case "text":
                  n.push(c.value);
                  break;
                case "list":
                  n.push(e[parseInt(c.value, 10)]);
                  break;
                case "named":
                  "named" === o && n.push(e[c.value]);
                  break;
                case "unknown":
                  0;
              }
              r++;
            }
            return n;
          })(n, e)
        );
      };
      var V = /^(?:\d)+/,
        W = /^(?:\w)+/;
      var B = [];
      (B[0] = { ws: [0], ident: [3, 0], "[": [4], eof: [7] }),
        (B[1] = { ws: [1], ".": [2], "[": [4], eof: [7] }),
        (B[2] = { ws: [2], ident: [3, 0], 0: [3, 0], number: [3, 0] }),
        (B[3] = {
          ident: [3, 0],
          0: [3, 0],
          number: [3, 0],
          ws: [1, 1],
          ".": [2, 1],
          "[": [4, 1],
          eof: [7, 1],
        }),
        (B[4] = {
          "'": [5, 0],
          '"': [6, 0],
          "[": [4, 2],
          "]": [1, 3],
          eof: 8,
          else: [4, 0],
        }),
        (B[5] = { "'": [4, 0], eof: 8, else: [5, 0] }),
        (B[6] = { '"': [4, 0], eof: 8, else: [6, 0] });
      var z = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
      function Q(t) {
        if (null == t) return "eof";
        switch (t.charCodeAt(0)) {
          case 91:
          case 93:
          case 46:
          case 34:
          case 39:
            return t;
          case 95:
          case 36:
          case 45:
            return "ident";
          case 9:
          case 10:
          case 13:
          case 160:
          case 65279:
          case 8232:
          case 8233:
            return "ws";
        }
        return "ident";
      }
      function Y(path) {
        var t,
          a,
          e,
          n = path.trim();
        return (
          ("0" !== path.charAt(0) || !isNaN(path)) &&
          ((e = n),
          z.test(e)
            ? (a = (t = n).charCodeAt(0)) !== t.charCodeAt(t.length - 1) ||
              (34 !== a && 39 !== a)
              ? t
              : t.slice(1, -1)
            : "*" + n)
        );
      }
      var G = function () {
        this._cache = Object.create(null);
      };
      (G.prototype.parsePath = function (path) {
        var t = this._cache[path];
        return (
          t ||
            ((t = (function (path) {
              var t,
                e,
                n,
                r,
                o,
                c,
                l,
                d = [],
                h = -1,
                f = 0,
                v = 0,
                m = [];
              function y() {
                var t = path[h + 1];
                if ((5 === f && "'" === t) || (6 === f && '"' === t))
                  return h++, (n = "\\" + t), m[0](), !0;
              }
              for (
                m[1] = function () {
                  void 0 !== e && (d.push(e), (e = void 0));
                },
                  m[0] = function () {
                    void 0 === e ? (e = n) : (e += n);
                  },
                  m[2] = function () {
                    m[0](), v++;
                  },
                  m[3] = function () {
                    if (v > 0) v--, (f = 4), m[0]();
                    else {
                      if (((v = 0), void 0 === e)) return !1;
                      if (!1 === (e = Y(e))) return !1;
                      m[1]();
                    }
                  };
                null !== f;

              )
                if ((h++, "\\" !== (t = path[h]) || !y())) {
                  if (((r = Q(t)), 8 === (o = (l = B[f])[r] || l.else || 8)))
                    return;
                  if (
                    ((f = o[0]),
                    (c = m[o[1]]) &&
                      ((n = void 0 === (n = o[2]) ? t : n), !1 === c()))
                  )
                    return;
                  if (7 === f) return d;
                }
            })(path)) &&
              (this._cache[path] = t)),
          t || []
        );
      }),
        (G.prototype.getPathValue = function (t, path) {
          if (!l(t)) return null;
          var e = this.parsePath(path);
          if (0 === e.length) return null;
          for (var n = e.length, r = t, i = 0; i < n; ) {
            var o = r[e[i]];
            if (void 0 === o) return null;
            (r = o), i++;
          }
          return r;
        });
      var Z,
        K = /<\/?[\w\s="/.':;#-\/]+>/,
        X = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,
        J = /^@(?:\.([a-z]+))?:/,
        tt = /[()]/g,
        et = {
          upper: function (t) {
            return t.toLocaleUpperCase();
          },
          lower: function (t) {
            return t.toLocaleLowerCase();
          },
          capitalize: function (t) {
            return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1);
          },
        },
        nt = new U(),
        it = function (t) {
          var e = this;
          void 0 === t && (t = {}),
            !k && "undefined" != typeof window && window.Vue && H(window.Vue);
          var n = t.locale || "en-US",
            r = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US"),
            o = t.messages || {},
            c = t.dateTimeFormats || {},
            l = t.numberFormats || {};
          (this._vm = null),
            (this._formatter = t.formatter || nt),
            (this._modifiers = t.modifiers || {}),
            (this._missing = t.missing || null),
            (this._root = t.root || null),
            (this._sync = void 0 === t.sync || !!t.sync),
            (this._fallbackRoot =
              void 0 === t.fallbackRoot || !!t.fallbackRoot),
            (this._formatFallbackMessages =
              void 0 !== t.formatFallbackMessages &&
              !!t.formatFallbackMessages),
            (this._silentTranslationWarn =
              void 0 !== t.silentTranslationWarn && t.silentTranslationWarn),
            (this._silentFallbackWarn =
              void 0 !== t.silentFallbackWarn && !!t.silentFallbackWarn),
            (this._dateTimeFormatters = {}),
            (this._numberFormatters = {}),
            (this._path = new G()),
            (this._dataListeners = []),
            (this._componentInstanceCreatedListener =
              t.componentInstanceCreatedListener || null),
            (this._preserveDirectiveContent =
              void 0 !== t.preserveDirectiveContent &&
              !!t.preserveDirectiveContent),
            (this.pluralizationRules = t.pluralizationRules || {}),
            (this._warnHtmlInMessage = t.warnHtmlInMessage || "off"),
            (this._postTranslation = t.postTranslation || null),
            (this._escapeParameterHtml = t.escapeParameterHtml || !1),
            (this.getChoiceIndex = function (t, n) {
              var r = Object.getPrototypeOf(e);
              if (r && r.getChoiceIndex) return r.getChoiceIndex.call(e, t, n);
              var o, c;
              return e.locale in e.pluralizationRules
                ? e.pluralizationRules[e.locale].apply(e, [t, n])
                : ((o = t),
                  (c = n),
                  (o = Math.abs(o)),
                  2 === c ? (o ? (o > 1 ? 1 : 0) : 1) : o ? Math.min(o, 2) : 0);
            }),
            (this._exist = function (t, n) {
              return !(!t || !n) && (!v(e._path.getPathValue(t, n)) || !!t[n]);
            }),
            ("warn" !== this._warnHtmlInMessage &&
              "error" !== this._warnHtmlInMessage) ||
              Object.keys(o).forEach(function (t) {
                e._checkLocaleMessage(t, e._warnHtmlInMessage, o[t]);
              }),
            this._initVM({
              locale: n,
              fallbackLocale: r,
              messages: o,
              dateTimeFormats: c,
              numberFormats: l,
            });
        },
        ot = {
          vm: { configurable: !0 },
          messages: { configurable: !0 },
          dateTimeFormats: { configurable: !0 },
          numberFormats: { configurable: !0 },
          availableLocales: { configurable: !0 },
          locale: { configurable: !0 },
          fallbackLocale: { configurable: !0 },
          formatFallbackMessages: { configurable: !0 },
          missing: { configurable: !0 },
          formatter: { configurable: !0 },
          silentTranslationWarn: { configurable: !0 },
          silentFallbackWarn: { configurable: !0 },
          preserveDirectiveContent: { configurable: !0 },
          warnHtmlInMessage: { configurable: !0 },
          postTranslation: { configurable: !0 },
        };
      (it.prototype._checkLocaleMessage = function (t, e, n) {
        var r = function (t, e, n, l) {
          if (f(n))
            Object.keys(n).forEach(function (o) {
              var c = n[o];
              f(c)
                ? (l.push(o), l.push("."), r(t, e, c, l), l.pop(), l.pop())
                : (l.push(o), r(t, e, c, l), l.pop());
            });
          else if (c(n))
            n.forEach(function (n, o) {
              f(n)
                ? (l.push("[" + o + "]"),
                  l.push("."),
                  r(t, e, n, l),
                  l.pop(),
                  l.pop())
                : (l.push("[" + o + "]"), r(t, e, n, l), l.pop());
            });
          else if (d(n)) {
            if (K.test(n)) {
              var h =
                "Detected HTML in message '" +
                n +
                "' of keypath '" +
                l.join("") +
                "' at '" +
                e +
                "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
              "warn" === t
                ? o(h)
                : "error" === t &&
                  (function (t, e) {
                    "undefined" != typeof console &&
                      (console.error("[vue-i18n] " + t),
                      e && console.error(e.stack));
                  })(h);
            }
          }
        };
        r(e, t, n, []);
      }),
        (it.prototype._initVM = function (data) {
          var t = k.config.silent;
          (k.config.silent = !0),
            (this._vm = new k({ data: data })),
            (k.config.silent = t);
        }),
        (it.prototype.destroyVM = function () {
          this._vm.$destroy();
        }),
        (it.prototype.subscribeDataChanging = function (t) {
          this._dataListeners.push(t);
        }),
        (it.prototype.unsubscribeDataChanging = function (t) {
          !(function (t, e) {
            if (t.length) {
              var n = t.indexOf(e);
              if (n > -1) t.splice(n, 1);
            }
          })(this._dataListeners, t);
        }),
        (it.prototype.watchI18nData = function () {
          var t = this;
          return this._vm.$watch(
            "$data",
            function () {
              for (var i = t._dataListeners.length; i--; )
                k.nextTick(function () {
                  t._dataListeners[i] && t._dataListeners[i].$forceUpdate();
                });
            },
            { deep: !0 }
          );
        }),
        (it.prototype.watchLocale = function () {
          if (!this._sync || !this._root) return null;
          var t = this._vm;
          return this._root.$i18n.vm.$watch(
            "locale",
            function (e) {
              t.$set(t, "locale", e), t.$forceUpdate();
            },
            { immediate: !0 }
          );
        }),
        (it.prototype.onComponentInstanceCreated = function (t) {
          this._componentInstanceCreatedListener &&
            this._componentInstanceCreatedListener(t, this);
        }),
        (ot.vm.get = function () {
          return this._vm;
        }),
        (ot.messages.get = function () {
          return _(this._getMessages());
        }),
        (ot.dateTimeFormats.get = function () {
          return _(this._getDateTimeFormats());
        }),
        (ot.numberFormats.get = function () {
          return _(this._getNumberFormats());
        }),
        (ot.availableLocales.get = function () {
          return Object.keys(this.messages).sort();
        }),
        (ot.locale.get = function () {
          return this._vm.locale;
        }),
        (ot.locale.set = function (t) {
          this._vm.$set(this._vm, "locale", t);
        }),
        (ot.fallbackLocale.get = function () {
          return this._vm.fallbackLocale;
        }),
        (ot.fallbackLocale.set = function (t) {
          (this._localeChainCache = {}),
            this._vm.$set(this._vm, "fallbackLocale", t);
        }),
        (ot.formatFallbackMessages.get = function () {
          return this._formatFallbackMessages;
        }),
        (ot.formatFallbackMessages.set = function (t) {
          this._formatFallbackMessages = t;
        }),
        (ot.missing.get = function () {
          return this._missing;
        }),
        (ot.missing.set = function (t) {
          this._missing = t;
        }),
        (ot.formatter.get = function () {
          return this._formatter;
        }),
        (ot.formatter.set = function (t) {
          this._formatter = t;
        }),
        (ot.silentTranslationWarn.get = function () {
          return this._silentTranslationWarn;
        }),
        (ot.silentTranslationWarn.set = function (t) {
          this._silentTranslationWarn = t;
        }),
        (ot.silentFallbackWarn.get = function () {
          return this._silentFallbackWarn;
        }),
        (ot.silentFallbackWarn.set = function (t) {
          this._silentFallbackWarn = t;
        }),
        (ot.preserveDirectiveContent.get = function () {
          return this._preserveDirectiveContent;
        }),
        (ot.preserveDirectiveContent.set = function (t) {
          this._preserveDirectiveContent = t;
        }),
        (ot.warnHtmlInMessage.get = function () {
          return this._warnHtmlInMessage;
        }),
        (ot.warnHtmlInMessage.set = function (t) {
          var e = this,
            n = this._warnHtmlInMessage;
          if (
            ((this._warnHtmlInMessage = t),
            n !== t && ("warn" === t || "error" === t))
          ) {
            var r = this._getMessages();
            Object.keys(r).forEach(function (t) {
              e._checkLocaleMessage(t, e._warnHtmlInMessage, r[t]);
            });
          }
        }),
        (ot.postTranslation.get = function () {
          return this._postTranslation;
        }),
        (ot.postTranslation.set = function (t) {
          this._postTranslation = t;
        }),
        (it.prototype._getMessages = function () {
          return this._vm.messages;
        }),
        (it.prototype._getDateTimeFormats = function () {
          return this._vm.dateTimeFormats;
        }),
        (it.prototype._getNumberFormats = function () {
          return this._vm.numberFormats;
        }),
        (it.prototype._warnDefault = function (t, e, n, r, o, c) {
          if (!v(n)) return n;
          if (this._missing) {
            var l = this._missing.apply(null, [t, e, r, o]);
            if (d(l)) return l;
          } else 0;
          if (this._formatFallbackMessages) {
            var h = y.apply(void 0, o);
            return this._render(e, c, h.params, e);
          }
          return e;
        }),
        (it.prototype._isFallbackRoot = function (t) {
          return !t && !v(this._root) && this._fallbackRoot;
        }),
        (it.prototype._isSilentFallbackWarn = function (t) {
          return this._silentFallbackWarn instanceof RegExp
            ? this._silentFallbackWarn.test(t)
            : this._silentFallbackWarn;
        }),
        (it.prototype._isSilentFallback = function (t, e) {
          return (
            this._isSilentFallbackWarn(e) &&
            (this._isFallbackRoot() || t !== this.fallbackLocale)
          );
        }),
        (it.prototype._isSilentTranslationWarn = function (t) {
          return this._silentTranslationWarn instanceof RegExp
            ? this._silentTranslationWarn.test(t)
            : this._silentTranslationWarn;
        }),
        (it.prototype._interpolate = function (t, e, n, r, o, l, h) {
          if (!e) return null;
          var y,
            _ = this._path.getPathValue(e, n);
          if (c(_) || f(_)) return _;
          if (v(_)) {
            if (!f(e)) return null;
            if (!d((y = e[n])) && !m(y)) return null;
          } else {
            if (!d(_) && !m(_)) return null;
            y = _;
          }
          return (
            d(y) &&
              (y.indexOf("@:") >= 0 || y.indexOf("@.") >= 0) &&
              (y = this._link(t, e, y, r, "raw", l, h)),
            this._render(y, o, l, n)
          );
        }),
        (it.prototype._link = function (t, e, n, r, o, l, d) {
          var h = n,
            f = h.match(X);
          for (var v in f)
            if (f.hasOwnProperty(v)) {
              var link = f[v],
                m = link.match(J),
                y = m[0],
                _ = m[1],
                C = link.replace(y, "").replace(tt, "");
              if (w(d, C)) return h;
              d.push(C);
              var E = this._interpolate(
                t,
                e,
                C,
                r,
                "raw" === o ? "string" : o,
                "raw" === o ? void 0 : l,
                d
              );
              if (this._isFallbackRoot(E)) {
                if (!this._root) throw Error("unexpected error");
                var T = this._root.$i18n;
                E = T._translate(
                  T._getMessages(),
                  T.locale,
                  T.fallbackLocale,
                  C,
                  r,
                  o,
                  l
                );
              }
              (E = this._warnDefault(t, C, E, r, c(l) ? l : [l], o)),
                this._modifiers.hasOwnProperty(_)
                  ? (E = this._modifiers[_](E))
                  : et.hasOwnProperty(_) && (E = et[_](E)),
                d.pop(),
                (h = E ? h.replace(link, E) : h);
            }
          return h;
        }),
        (it.prototype._createMessageContext = function (t) {
          var e = c(t) ? t : [],
            n = l(t) ? t : {};
          return {
            list: function (t) {
              return e[t];
            },
            named: function (t) {
              return n[t];
            },
          };
        }),
        (it.prototype._render = function (t, e, n, path) {
          if (m(t)) return t(this._createMessageContext(n));
          var r = this._formatter.interpolate(t, n, path);
          return (
            r || (r = nt.interpolate(t, n, path)),
            "string" !== e || d(r) ? r : r.join("")
          );
        }),
        (it.prototype._appendItemToChain = function (t, e, n) {
          var r = !1;
          return (
            w(t, e) ||
              ((r = !0),
              e &&
                ((r = "!" !== e[e.length - 1]),
                (e = e.replace(/!/g, "")),
                t.push(e),
                n && n[e] && (r = n[e]))),
            r
          );
        }),
        (it.prototype._appendLocaleToChain = function (t, e, n) {
          var r,
            o = e.split("-");
          do {
            var c = o.join("-");
            (r = this._appendItemToChain(t, c, n)), o.splice(-1, 1);
          } while (o.length && !0 === r);
          return r;
        }),
        (it.prototype._appendBlockToChain = function (t, e, n) {
          for (var r = !0, i = 0; i < e.length && "boolean" == typeof r; i++) {
            var o = e[i];
            d(o) && (r = this._appendLocaleToChain(t, o, n));
          }
          return r;
        }),
        (it.prototype._getLocaleChain = function (t, e) {
          if ("" === t) return [];
          this._localeChainCache || (this._localeChainCache = {});
          var n = this._localeChainCache[t];
          if (!n) {
            e || (e = this.fallbackLocale), (n = []);
            for (var r, o = [t]; c(o); ) o = this._appendBlockToChain(n, o, e);
            (o = d((r = c(e) ? e : l(e) ? (e.default ? e.default : null) : e))
              ? [r]
              : r) && this._appendBlockToChain(n, o, null),
              (this._localeChainCache[t] = n);
          }
          return n;
        }),
        (it.prototype._translate = function (t, e, n, r, o, c, l) {
          for (
            var d, h = this._getLocaleChain(e, n), i = 0;
            i < h.length;
            i++
          ) {
            var f = h[i];
            if (!v((d = this._interpolate(f, t[f], r, o, c, l, [r])))) return d;
          }
          return null;
        }),
        (it.prototype._t = function (t, e, n, r) {
          for (var o, c = [], l = arguments.length - 4; l-- > 0; )
            c[l] = arguments[l + 4];
          if (!t) return "";
          var d = y.apply(void 0, c);
          this._escapeParameterHtml && (d.params = A(d.params));
          var h = d.locale || e,
            f = this._translate(
              n,
              h,
              this.fallbackLocale,
              t,
              r,
              "string",
              d.params
            );
          if (this._isFallbackRoot(f)) {
            if (!this._root) throw Error("unexpected error");
            return (o = this._root).$t.apply(o, [t].concat(c));
          }
          return (
            (f = this._warnDefault(h, t, f, r, c, "string")),
            this._postTranslation &&
              null != f &&
              (f = this._postTranslation(f, t)),
            f
          );
        }),
        (it.prototype.t = function (t) {
          for (var e, n = [], r = arguments.length - 1; r-- > 0; )
            n[r] = arguments[r + 1];
          return (e = this)._t.apply(
            e,
            [t, this.locale, this._getMessages(), null].concat(n)
          );
        }),
        (it.prototype._i = function (t, e, n, r, o) {
          var c = this._translate(n, e, this.fallbackLocale, t, r, "raw", o);
          if (this._isFallbackRoot(c)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n.i(t, e, o);
          }
          return this._warnDefault(e, t, c, r, [o], "raw");
        }),
        (it.prototype.i = function (t, e, n) {
          return t
            ? (d(e) || (e = this.locale),
              this._i(t, e, this._getMessages(), null, n))
            : "";
        }),
        (it.prototype._tc = function (t, e, n, r, o) {
          for (var c, l = [], d = arguments.length - 5; d-- > 0; )
            l[d] = arguments[d + 5];
          if (!t) return "";
          void 0 === o && (o = 1);
          var h = { count: o, n: o },
            f = y.apply(void 0, l);
          return (
            (f.params = Object.assign(h, f.params)),
            (l = null === f.locale ? [f.params] : [f.locale, f.params]),
            this.fetchChoice((c = this)._t.apply(c, [t, e, n, r].concat(l)), o)
          );
        }),
        (it.prototype.fetchChoice = function (t, e) {
          if (!t || !d(t)) return null;
          var n = t.split("|");
          return n[(e = this.getChoiceIndex(e, n.length))] ? n[e].trim() : t;
        }),
        (it.prototype.tc = function (t, e) {
          for (var n, r = [], o = arguments.length - 2; o-- > 0; )
            r[o] = arguments[o + 2];
          return (n = this)._tc.apply(
            n,
            [t, this.locale, this._getMessages(), null, e].concat(r)
          );
        }),
        (it.prototype._te = function (t, e, n) {
          for (var r = [], o = arguments.length - 3; o-- > 0; )
            r[o] = arguments[o + 3];
          var c = y.apply(void 0, r).locale || e;
          return this._exist(n[c], t);
        }),
        (it.prototype.te = function (t, e) {
          return this._te(t, this.locale, this._getMessages(), e);
        }),
        (it.prototype.getLocaleMessage = function (t) {
          return _(this._vm.messages[t] || {});
        }),
        (it.prototype.setLocaleMessage = function (t, e) {
          ("warn" !== this._warnHtmlInMessage &&
            "error" !== this._warnHtmlInMessage) ||
            this._checkLocaleMessage(t, this._warnHtmlInMessage, e),
            this._vm.$set(this._vm.messages, t, e);
        }),
        (it.prototype.mergeLocaleMessage = function (t, e) {
          ("warn" !== this._warnHtmlInMessage &&
            "error" !== this._warnHtmlInMessage) ||
            this._checkLocaleMessage(t, this._warnHtmlInMessage, e),
            this._vm.$set(
              this._vm.messages,
              t,
              T({}, this._vm.messages[t] || {}, e)
            );
        }),
        (it.prototype.getDateTimeFormat = function (t) {
          return _(this._vm.dateTimeFormats[t] || {});
        }),
        (it.prototype.setDateTimeFormat = function (t, e) {
          this._vm.$set(this._vm.dateTimeFormats, t, e),
            this._clearDateTimeFormat(t, e);
        }),
        (it.prototype.mergeDateTimeFormat = function (t, e) {
          this._vm.$set(
            this._vm.dateTimeFormats,
            t,
            T(this._vm.dateTimeFormats[t] || {}, e)
          ),
            this._clearDateTimeFormat(t, e);
        }),
        (it.prototype._clearDateTimeFormat = function (t, e) {
          for (var n in e) {
            var r = t + "__" + n;
            this._dateTimeFormatters.hasOwnProperty(r) &&
              delete this._dateTimeFormatters[r];
          }
        }),
        (it.prototype._localizeDateTime = function (t, e, n, r, o) {
          for (
            var c = e, l = r[c], d = this._getLocaleChain(e, n), i = 0;
            i < d.length;
            i++
          ) {
            var h = d[i];
            if (((c = h), !v((l = r[h])) && !v(l[o]))) break;
          }
          if (v(l) || v(l[o])) return null;
          var f = l[o],
            m = c + "__" + o,
            y = this._dateTimeFormatters[m];
          return (
            y ||
              (y = this._dateTimeFormatters[m] = new Intl.DateTimeFormat(c, f)),
            y.format(t)
          );
        }),
        (it.prototype._d = function (t, e, n) {
          if (!n) return new Intl.DateTimeFormat(e).format(t);
          var r = this._localizeDateTime(
            t,
            e,
            this.fallbackLocale,
            this._getDateTimeFormats(),
            n
          );
          if (this._isFallbackRoot(r)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n.d(t, n, e);
          }
          return r || "";
        }),
        (it.prototype.d = function (t) {
          for (var e = [], n = arguments.length - 1; n-- > 0; )
            e[n] = arguments[n + 1];
          var r = this.locale,
            o = null;
          return (
            1 === e.length
              ? d(e[0])
                ? (o = e[0])
                : l(e[0]) &&
                  (e[0].locale && (r = e[0].locale), e[0].key && (o = e[0].key))
              : 2 === e.length &&
                (d(e[0]) && (o = e[0]), d(e[1]) && (r = e[1])),
            this._d(t, r, o)
          );
        }),
        (it.prototype.getNumberFormat = function (t) {
          return _(this._vm.numberFormats[t] || {});
        }),
        (it.prototype.setNumberFormat = function (t, e) {
          this._vm.$set(this._vm.numberFormats, t, e),
            this._clearNumberFormat(t, e);
        }),
        (it.prototype.mergeNumberFormat = function (t, e) {
          this._vm.$set(
            this._vm.numberFormats,
            t,
            T(this._vm.numberFormats[t] || {}, e)
          ),
            this._clearNumberFormat(t, e);
        }),
        (it.prototype._clearNumberFormat = function (t, e) {
          for (var n in e) {
            var r = t + "__" + n;
            this._numberFormatters.hasOwnProperty(r) &&
              delete this._numberFormatters[r];
          }
        }),
        (it.prototype._getNumberFormatter = function (t, e, n, r, o, c) {
          for (
            var l = e, d = r[l], h = this._getLocaleChain(e, n), i = 0;
            i < h.length;
            i++
          ) {
            var f = h[i];
            if (((l = f), !v((d = r[f])) && !v(d[o]))) break;
          }
          if (v(d) || v(d[o])) return null;
          var m,
            y = d[o];
          if (c) m = new Intl.NumberFormat(l, Object.assign({}, y, c));
          else {
            var _ = l + "__" + o;
            (m = this._numberFormatters[_]) ||
              (m = this._numberFormatters[_] = new Intl.NumberFormat(l, y));
          }
          return m;
        }),
        (it.prototype._n = function (t, e, n, r) {
          if (!it.availabilities.numberFormat) return "";
          if (!n)
            return (r
              ? new Intl.NumberFormat(e, r)
              : new Intl.NumberFormat(e)
            ).format(t);
          var o = this._getNumberFormatter(
              t,
              e,
              this.fallbackLocale,
              this._getNumberFormats(),
              n,
              r
            ),
            c = o && o.format(t);
          if (this._isFallbackRoot(c)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n.n(
              t,
              Object.assign({}, { key: n, locale: e }, r)
            );
          }
          return c || "";
        }),
        (it.prototype.n = function (t) {
          for (var e = [], n = arguments.length - 1; n-- > 0; )
            e[n] = arguments[n + 1];
          var o = this.locale,
            c = null,
            h = null;
          return (
            1 === e.length
              ? d(e[0])
                ? (c = e[0])
                : l(e[0]) &&
                  (e[0].locale && (o = e[0].locale),
                  e[0].key && (c = e[0].key),
                  (h = Object.keys(e[0]).reduce(function (t, n) {
                    var o;
                    return w(r, n)
                      ? Object.assign({}, t, (((o = {})[n] = e[0][n]), o))
                      : t;
                  }, null)))
              : 2 === e.length &&
                (d(e[0]) && (c = e[0]), d(e[1]) && (o = e[1])),
            this._n(t, o, c, h)
          );
        }),
        (it.prototype._ntp = function (t, e, n, r) {
          if (!it.availabilities.numberFormat) return [];
          if (!n)
            return (r
              ? new Intl.NumberFormat(e, r)
              : new Intl.NumberFormat(e)
            ).formatToParts(t);
          var o = this._getNumberFormatter(
              t,
              e,
              this.fallbackLocale,
              this._getNumberFormats(),
              n,
              r
            ),
            c = o && o.formatToParts(t);
          if (this._isFallbackRoot(c)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n._ntp(t, e, n, r);
          }
          return c || [];
        }),
        Object.defineProperties(it.prototype, ot),
        Object.defineProperty(it, "availabilities", {
          get: function () {
            if (!Z) {
              var t = "undefined" != typeof Intl;
              Z = {
                dateTimeFormat: t && void 0 !== Intl.DateTimeFormat,
                numberFormat: t && void 0 !== Intl.NumberFormat,
              };
            }
            return Z;
          },
        }),
        (it.install = H),
        (it.version = "8.22.1"),
        (e.a = it);
    },
    function (t, e, n) {
      "use strict";
      var r = n(170),
        o = n(67),
        c = (function () {
          try {
            var t = Object(o.a)(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      var l = function (object, t, e) {
          "__proto__" == t && c
            ? c(object, t, {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0,
              })
            : (object[t] = e);
        },
        d = n(57);
      var h = function (object, t, e) {
          ((void 0 !== e && !Object(d.a)(object[t], e)) ||
            (void 0 === e && !(t in object))) &&
            l(object, t, e);
        },
        f = n(207),
        v = n(216),
        m = n(156);
      var y = function (t) {
        var e = new t.constructor(t.byteLength);
        return new m.a(e).set(new m.a(t)), e;
      };
      var _ = function (t, e) {
        var n = e ? y(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
      };
      var w = function (source, t) {
          var e = -1,
            n = source.length;
          for (t || (t = Array(n)); ++e < n; ) t[e] = source[e];
          return t;
        },
        C = n(18),
        E = Object.create,
        T = (function () {
          function object() {}
          return function (t) {
            if (!Object(C.a)(t)) return {};
            if (E) return E(t);
            object.prototype = t;
            var e = new object();
            return (object.prototype = void 0), e;
          };
        })(),
        x = n(205),
        A = Object(x.a)(Object.getPrototypeOf, Object),
        S = n(115);
      var N = function (object) {
          return "function" != typeof object.constructor || Object(S.a)(object)
            ? {}
            : T(A(object));
        },
        O = n(86),
        I = n(76),
        D = n(68),
        k = n(35);
      var P = function (t) {
          return Object(k.a)(t) && Object(D.a)(t);
        },
        M = n(114),
        F = n(71),
        R = n(56),
        L = Function.prototype,
        j = Object.prototype,
        $ = L.toString,
        H = j.hasOwnProperty,
        U = $.call(Object);
      var V = function (t) {
          if (!Object(k.a)(t) || "[object Object]" != Object(R.a)(t)) return !1;
          var e = A(t);
          if (null === e) return !0;
          var n = H.call(e, "constructor") && e.constructor;
          return "function" == typeof n && n instanceof n && $.call(n) == U;
        },
        W = n(119);
      var B = function (object, t) {
          if (
            ("constructor" !== t || "function" != typeof object[t]) &&
            "__proto__" != t
          )
            return object[t];
        },
        z = Object.prototype.hasOwnProperty;
      var Q = function (object, t, e) {
        var n = object[t];
        (z.call(object, t) &&
          Object(d.a)(n, e) &&
          (void 0 !== e || t in object)) ||
          l(object, t, e);
      };
      var Y = function (source, t, object, e) {
          var n = !object;
          object || (object = {});
          for (var r = -1, o = t.length; ++r < o; ) {
            var c = t[r],
              d = e ? e(object[c], source[c], c, object, source) : void 0;
            void 0 === d && (d = source[c]),
              n ? l(object, c, d) : Q(object, c, d);
          }
          return object;
        },
        G = n(208);
      var Z = function (object) {
          var t = [];
          if (null != object) for (var e in Object(object)) t.push(e);
          return t;
        },
        K = Object.prototype.hasOwnProperty;
      var X = function (object) {
        if (!Object(C.a)(object)) return Z(object);
        var t = Object(S.a)(object),
          e = [];
        for (var n in object)
          ("constructor" != n || (!t && K.call(object, n))) && e.push(n);
        return e;
      };
      var J = function (object) {
        return Object(D.a)(object) ? Object(G.a)(object, !0) : X(object);
      };
      var tt = function (t) {
        return Y(t, J(t));
      };
      var et = function (object, source, t, e, n, r, o) {
        var c = B(object, t),
          l = B(source, t),
          d = o.get(l);
        if (d) h(object, t, d);
        else {
          var f = r ? r(c, l, t + "", object, source, o) : void 0,
            m = void 0 === f;
          if (m) {
            var y = Object(I.a)(l),
              E = !y && Object(M.a)(l),
              T = !y && !E && Object(W.a)(l);
            (f = l),
              y || E || T
                ? Object(I.a)(c)
                  ? (f = c)
                  : P(c)
                  ? (f = w(c))
                  : E
                  ? ((m = !1), (f = Object(v.a)(l, !0)))
                  : T
                  ? ((m = !1), (f = _(l, !0)))
                  : (f = [])
                : V(l) || Object(O.a)(l)
                ? ((f = c),
                  Object(O.a)(c)
                    ? (f = tt(c))
                    : (Object(C.a)(c) && !Object(F.a)(c)) || (f = N(l)))
                : (m = !1);
          }
          m && (o.set(l, f), n(f, l, e, r, o), o.delete(l)), h(object, t, f);
        }
      };
      var nt = function t(object, source, e, n, o) {
          object !== source &&
            Object(f.a)(
              source,
              function (c, l) {
                if ((o || (o = new r.a()), Object(C.a)(c)))
                  et(object, source, l, e, t, n, o);
                else {
                  var d = n
                    ? n(B(object, l), c, l + "", object, source, o)
                    : void 0;
                  void 0 === d && (d = c), h(object, l, d);
                }
              },
              J
            );
        },
        it = n(110);
      var ot = function (t, e, n) {
          switch (n.length) {
            case 0:
              return t.call(e);
            case 1:
              return t.call(e, n[0]);
            case 2:
              return t.call(e, n[0], n[1]);
            case 3:
              return t.call(e, n[0], n[1], n[2]);
          }
          return t.apply(e, n);
        },
        at = Math.max;
      var st = function (t, e, n) {
        return (
          (e = at(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var r = arguments, o = -1, c = at(r.length - e, 0), l = Array(c);
              ++o < c;

            )
              l[o] = r[e + o];
            o = -1;
            for (var d = Array(e + 1); ++o < e; ) d[o] = r[o];
            return (d[e] = n(l)), ot(t, this, d);
          }
        );
      };
      var ut = function (t) {
          return function () {
            return t;
          };
        },
        ct = c
          ? function (t, e) {
              return c(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: ut(e),
                writable: !0,
              });
            }
          : it.a,
        lt = Date.now;
      var ht = (function (t) {
        var e = 0,
          n = 0;
        return function () {
          var r = lt(),
            o = 16 - (r - n);
          if (((n = r), o > 0)) {
            if (++e >= 800) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      })(ct);
      var ft = function (t, e) {
          return ht(st(t, e, it.a), t + "");
        },
        pt = n(112);
      var vt = function (t, e, object) {
        if (!Object(C.a)(object)) return !1;
        var n = typeof e;
        return (
          !!("number" == n
            ? Object(D.a)(object) && Object(pt.a)(e, object.length)
            : "string" == n && e in object) && Object(d.a)(object[e], t)
        );
      };
      var mt = (function (t) {
        return ft(function (object, e) {
          var n = -1,
            r = e.length,
            o = r > 1 ? e[r - 1] : void 0,
            c = r > 2 ? e[2] : void 0;
          for (
            o = t.length > 3 && "function" == typeof o ? (r--, o) : void 0,
              c && vt(e[0], e[1], c) && ((o = r < 3 ? void 0 : o), (r = 1)),
              object = Object(object);
            ++n < r;

          ) {
            var source = e[n];
            source && t(object, source, n, o);
          }
          return object;
        });
      })(function (object, source, t) {
        nt(object, source, t);
      });
      e.a = mt;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = {
        computed: {
          themeClass: function () {
            return (
              this.$root.$material.prefix + this.$root.$material.currentTheme
            );
          },
        },
      };
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(38),
        o = n(45),
        c = !1;
      try {
        var l = Object.defineProperty({}, "passive", {
          get: function () {
            c = !0;
          },
        });
        window.addEventListener("testPassive", null, l),
          window.removeEventListener("testPassive", null, l);
      } catch (t) {}
      var d = function (t, e, n) {
          "start" === e
            ? (t.addEventListener("mousedown", n, !!c && { passive: !0 }),
              t.addEventListener("touchstart", n, !!c && { passive: !0 }))
            : (t.addEventListener("mouseup", n, !!c && { passive: !0 }),
              t.addEventListener("touchend", n, !!c && { passive: !0 }));
        },
        h = function (t, e, n) {
          "start" === e
            ? (t.removeEventListener("mousedown", n),
              t.removeEventListener("touchstart", n))
            : (t.removeEventListener("mouseup", n),
              t.removeEventListener("touchend", n));
        },
        f = {
          name: "md-ink-ripple",
          props: { mdDisabled: Boolean },
          data: function () {
            return {
              mounted: !1,
              rippleElement: null,
              parentElement: null,
              parentDimensions: {
                width: null,
                height: null,
                top: null,
                left: null,
              },
              awaitingComplete: !1,
              hasCompleted: !1,
              fadeOut: !1,
              active: !1,
            };
          },
          computed: {
            classes: function () {
              return { "md-fadeout": this.fadeOut, "md-active": this.active };
            },
            styles: function () {
              return {
                width: this.parentDimensions.width,
                height: this.parentDimensions.height,
                top: this.parentDimensions.top,
                left: this.parentDimensions.left,
              };
            },
            disabled: function () {
              return this.mdDisabled;
            },
          },
          watch: {
            disabled: function (t) {
              t ? this.destroy() : this.init();
            },
          },
          methods: {
            checkAvailablePositions: function (element) {
              return (
                ["relative", "absolute", "fixed"].indexOf(
                  getComputedStyle(element).position
                ) > -1
              );
            },
            getClosestPositionedParent: function (element) {
              var t = element && element.parentNode;
              return (
                !(!t || "body" === t.tagName.toLowerCase()) &&
                (this.checkAvailablePositions(element)
                  ? element
                  : this.getClosestPositionedParent(t))
              );
            },
            getParentSize: function () {
              var t = this.parentElement;
              return Math.round(Math.max(t.offsetWidth, t.offsetHeight)) + "px";
            },
            getClickPosition: function (t) {
              if (this.$refs.ripple) {
                var rect = this.parentElement.getBoundingClientRect(),
                  e = t.pageY,
                  n = t.pageX;
                return (
                  "touchstart" === t.type &&
                    ((e = t.changedTouches[0].pageY),
                    (n = t.changedTouches[0].pageX)),
                  {
                    top:
                      e -
                      rect.top -
                      this.$refs.ripple.offsetHeight / 2 -
                      document.body.scrollTop +
                      "px",
                    left:
                      n -
                      rect.left -
                      this.$refs.ripple.offsetWidth / 2 -
                      document.body.scrollLeft +
                      "px",
                  }
                );
              }
              return !1;
            },
            setDimensions: function () {
              var t = this.getParentSize();
              (this.parentDimensions.width = t),
                (this.parentDimensions.height = t);
            },
            setPositions: function (t) {
              var e = this.getClickPosition(t);
              e &&
                ((this.parentDimensions.top = e.top),
                (this.parentDimensions.left = e.left));
            },
            clearState: function () {
              (this.active = !1),
                (this.fadeOut = !1),
                (this.hasCompleted = !1),
                this.setDimensions(),
                window.clearTimeout(this.awaitingComplete),
                h(document.body, "end", this.endRipple);
            },
            startRipple: function (t) {
              var e = this;
              "touchstart" === t.type
                ? this.previous.push("touch")
                : this.previous.push("mouse"),
                (this.previous = this.previous.splice(
                  this.previous.length - 2,
                  this.previous.length
                )),
                (this.previous.length >= 2 &&
                  "touch" === this.previous[1] &&
                  "mouse" === this.previous[0]) ||
                  (this.clearState(),
                  (this.awaitingComplete = window.setTimeout(function () {
                    e.hasCompleted = !0;
                  }, 400)),
                  d(document.body, "end", this.endRipple),
                  this.$nextTick(function () {
                    e.setPositions(t), (e.active = !0);
                  }));
            },
            endRipple: function () {
              var t = this;
              this.hasCompleted
                ? (this.fadeOut = !0)
                : (this.awaitingComplete = window.setTimeout(function () {
                    t.fadeOut = !0;
                  }, 200)),
                h(document.body, "end", this.endRipple);
            },
            registerTriggerEvent: function () {
              d(this.parentElement, "start", this.startRipple);
            },
            unregisterTriggerEvent: function () {
              this.parentElement &&
                h(this.parentElement, "start", this.startRipple);
            },
            init: function () {
              (this.rippleElement = this.$el),
                (this.parentElement = this.getClosestPositionedParent(
                  this.$el.parentNode
                )),
                (this.previous = ["mouse"]),
                this.parentElement
                  ? (this.rippleElement.parentNode.removeChild(
                      this.rippleElement
                    ),
                    this.parentElement.querySelectorAll(".md-ink-ripple")
                      .length > 0
                      ? this.$destroy()
                      : (this.parentElement.appendChild(this.rippleElement),
                        this.registerTriggerEvent(),
                        this.setDimensions()))
                  : this.$destroy();
            },
            destroy: function () {
              this.rippleElement &&
                this.rippleElement.parentNode &&
                (this.unregisterTriggerEvent(),
                this.rippleElement.parentNode.removeChild(this.rippleElement));
            },
          },
          mounted: function () {
            var t = this;
            window.setTimeout(function () {
              t.disabled ? t.destroy() : t.init(),
                t.$nextTick(function () {
                  t.mounted = !0;
                });
            }, 100);
          },
          beforeDestroy: function () {
            this.destroy();
          },
        },
        v = function (t) {
          t &&
            t("data-v-6b9cad68_0", {
              source:
                ".md-ink-ripple{pointer-events:none;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 100%);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-ripple{position:absolute;background-color:currentColor;border-radius:50%;opacity:.2;transform:scale(0) translateZ(0);transition:none;will-change:background-color,opacity,transform,width,height,top,left}.md-ripple.md-active{animation:ripple 1s cubic-bezier(.25,.8,.25,1) forwards}.md-ripple.md-active.md-fadeout{opacity:0!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.6s}@keyframes ripple{to{transform:scale(2.2) translateZ(0)}}",
              map: void 0,
              media: void 0,
            });
        },
        m = Object(r.a)(
          {
            render: function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return this.mounted || !this.disabled
                ? e("div", { staticClass: "md-ink-ripple" }, [
                    e("div", {
                      ref: "ripple",
                      staticClass: "md-ripple",
                      class: this.classes,
                      style: this.styles,
                    }),
                  ])
                : this._e();
            },
            staticRenderFns: [],
          },
          v,
          f,
          void 0,
          !1,
          void 0,
          !1,
          o.a,
          void 0,
          void 0
        );
      e.a = m;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r =
        ".THEME_NAME.md-button:not([disabled]):hover {\n  background-color: BACKGROUND-INVERTED-0.15;\n}\n.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button) {\n  color: TEXT-TITLE;\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button):hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-raised.md-icon-button:not(.md-raised) {\n  color: TEXT-TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab {\n  color: TEXT-ACCENT_TITLE;\n  background-color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab:hover {\n  background-color: RAISED-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab.md-clean {\n  color: TEXT-TITLE;\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-fab.md-clean:hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary:not(.md-icon-button) {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary.md-raised, .THEME_NAME.md-button:not([disabled]).md-primary.md-fab {\n  background-color: ACCENT-PRIMARY;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary.md-raised:hover, .THEME_NAME.md-button:not([disabled]).md-primary.md-fab:hover {\n  background-color: RAISED-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary.md-icon-button:not(.md-raised) {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary[md-theme=inverted] {\n  background-color: COMPONENT-BUTTON;\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-primary[md-theme=inverted]:hover {\n  background-color: COMPONENT-BUTTON;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent:not(.md-icon-button) {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent.md-raised {\n  background-color: ACCENT-SECONDARY;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent.md-raised:hover {\n  background-color: RAISED-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-accent.md-icon-button:not(.md-raised) {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn:not(.md-icon-button) {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn.md-raised, .THEME_NAME.md-button:not([disabled]).md-warn.md-fab {\n  background-color: ACCENT-WARN;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn.md-raised:hover, .THEME_NAME.md-button:not([disabled]).md-warn.md-fab:hover {\n  background-color: RAISED-WARN;\n}\n.THEME_NAME.md-button:not([disabled]).md-warn.md-icon-button:not(.md-raised) {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-button[disabled] {\n  color: TEXT-DISABLED;\n}\n.THEME_NAME.md-button[disabled].md-raised, .THEME_NAME.md-button[disabled].md-fab {\n  background-color: BACKGROUND-INVERTED-0.12;\n}\n.THEME_NAME.md-button .md-button__badge {\n  background-color: COMPONENT-BADGE;\n  color: COMPONENT-TEXT;\n}";
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "g", function () {
          return f;
        }),
        n.d(e, "h", function () {
          return v;
        }),
        n.d(e, "i", function () {
          return m;
        }),
        n.d(e, "j", function () {
          return y;
        }),
        n.d(e, "k", function () {
          return _;
        }),
        n.d(e, "l", function () {
          return w;
        }),
        n.d(e, "m", function () {
          return C;
        }),
        n.d(e, "n", function () {
          return E;
        }),
        n.d(e, "o", function () {
          return T;
        }),
        n.d(e, "p", function () {
          return x;
        }),
        n.d(e, "q", function () {
          return A;
        }),
        n.d(e, "r", function () {
          return S;
        }),
        n.d(e, "s", function () {
          return N;
        }),
        n.d(e, "t", function () {
          return O;
        }),
        n.d(e, "u", function () {
          return I;
        }),
        n.d(e, "v", function () {
          return D;
        });
      var r =
          "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",
        o =
          "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z",
        c =
          "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
        l =
          "M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z",
        d =
          "M21 11.11V7A2 2 0 0 0 19 5H15V3A2 2 0 0 0 13 1H9A2 2 0 0 0 7 3V5H3A2 2 0 0 0 1 7V18A2 2 0 0 0 3 20H10.26A7 7 0 1 0 21 11.11M9 3H13V5H9M19 20A5 5 0 0 1 13 20A5 5 0 1 1 19 20M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13",
        h =
          "M16.5,12C19,12 21,14 21,16.5C21,17.38 20.75,18.21 20.31,18.9L23.39,22L22,23.39L18.88,20.32C18.19,20.75 17.37,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12M16.5,14A2.5,2.5 0 0,0 14,16.5A2.5,2.5 0 0,0 16.5,19A2.5,2.5 0 0,0 19,16.5A2.5,2.5 0 0,0 16.5,14M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V13.03C20.85,11.21 18.82,10 16.5,10A6.5,6.5 0 0,0 10,16.5C10,18.25 10.69,19.83 11.81,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z",
        f =
          "M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z",
        v = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
        m = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
        y =
          "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
        _ =
          "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z",
        w =
          "M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
        C =
          "M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z",
        E =
          "M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",
        T =
          "M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z",
        x =
          "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
        A = "M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z",
        S =
          "M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",
        N =
          "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",
        O = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
        I =
          "M18.1,4.8C18,4.3 17.6,4 17.1,4H13L13.2,7H10.8L11,4H6.8C6.3,4 5.9,4.4 5.8,4.8L3.1,18.8C3,19.4 3.5,20 4.1,20H10L10.3,15H13.7L14,20H19.8C20.4,20 20.9,19.4 20.8,18.8L18.1,4.8M10.4,13L10.6,9H13.2L13.4,13H10.4Z",
        D =
          "M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r =
        ".THEME_NAME.md-icon.md-primary {\n  color: ACCENT-PRIMARY;\n}\n.THEME_NAME.md-icon.md-accent {\n  color: ACCENT-SECONDARY;\n}\n.THEME_NAME.md-icon.md-warn {\n  color: ACCENT-WARN;\n}\n.THEME_NAME.md-icon .md-icon__badge {\n  background-color: COMPONENT-BADGE;\n  color: COMPONENT-TEXT;\n}";
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(67),
        o = Object(r.a)(Object, "create");
      var c = function () {
        (this.__data__ = o ? o(null) : {}), (this.size = 0);
      };
      var l = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        },
        d = Object.prototype.hasOwnProperty;
      var h = function (t) {
          var data = this.__data__;
          if (o) {
            var e = data[t];
            return "__lodash_hash_undefined__" === e ? void 0 : e;
          }
          return d.call(data, t) ? data[t] : void 0;
        },
        f = Object.prototype.hasOwnProperty;
      var v = function (t) {
        var data = this.__data__;
        return o ? void 0 !== data[t] : f.call(data, t);
      };
      var m = function (t, e) {
        var data = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (data[t] = o && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
      function y(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (y.prototype.clear = c),
        (y.prototype.delete = l),
        (y.prototype.get = h),
        (y.prototype.has = v),
        (y.prototype.set = m);
      var _ = y,
        w = n(59),
        C = n(113);
      var E = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new _(),
            map: new (C.a || w.a)(),
            string: new _(),
          });
      };
      var T = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
      var x = function (map, t) {
        var data = map.__data__;
        return T(t) ? data["string" == typeof t ? "string" : "hash"] : data.map;
      };
      var A = function (t) {
        var e = x(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
      var S = function (t) {
        return x(this, t).get(t);
      };
      var N = function (t) {
        return x(this, t).has(t);
      };
      var O = function (t, e) {
        var data = x(this, t),
          n = data.size;
        return data.set(t, e), (this.size += data.size == n ? 0 : 1), this;
      };
      function I(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (I.prototype.clear = E),
        (I.prototype.delete = A),
        (I.prototype.get = S),
        (I.prototype.has = N),
        (I.prototype.set = O);
      e.a = I;
    },
    function (t, e, n) {
      "use strict";
      var r = n(59);
      var o = function () {
        (this.__data__ = new r.a()), (this.size = 0);
      };
      var c = function (t) {
        var data = this.__data__,
          e = data.delete(t);
        return (this.size = data.size), e;
      };
      var l = function (t) {
        return this.__data__.get(t);
      };
      var d = function (t) {
          return this.__data__.has(t);
        },
        h = n(113),
        f = n(169);
      var v = function (t, e) {
        var data = this.__data__;
        if (data instanceof r.a) {
          var n = data.__data__;
          if (!h.a || n.length < 199)
            return n.push([t, e]), (this.size = ++data.size), this;
          data = this.__data__ = new f.a(n);
        }
        return data.set(t, e), (this.size = data.size), this;
      };
      function m(t) {
        var data = (this.__data__ = new r.a(t));
        this.size = data.size;
      }
      (m.prototype.clear = o),
        (m.prototype.delete = c),
        (m.prototype.get = l),
        (m.prototype.has = d),
        (m.prototype.set = v);
      e.a = m;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r,
        o,
        c = n(12),
        l = n(152),
        component = n(202),
        d = n(203),
        h =
          (((r = {})["no-app"] =
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
          (r["bad-app-name"] = "Illegal App name: '{$appName}"),
          (r["duplicate-app"] =
            "Firebase App named '{$appName}' already exists"),
          (r["app-deleted"] =
            "Firebase App named '{$appName}' already deleted"),
          (r["invalid-app-argument"] =
            "firebase.{$appName}() takes either no argument or a Firebase App instance."),
          (r["invalid-log-argument"] =
            "First argument to `onLog` must be null or a function."),
          r),
        f = new l.ErrorFactory("app", "Firebase", h),
        v =
          (((o = {})["@firebase/app"] = "fire-core"),
          (o["@firebase/analytics"] = "fire-analytics"),
          (o["@firebase/auth"] = "fire-auth"),
          (o["@firebase/database"] = "fire-rtdb"),
          (o["@firebase/functions"] = "fire-fn"),
          (o["@firebase/installations"] = "fire-iid"),
          (o["@firebase/messaging"] = "fire-fcm"),
          (o["@firebase/performance"] = "fire-perf"),
          (o["@firebase/remote-config"] = "fire-rc"),
          (o["@firebase/storage"] = "fire-gcs"),
          (o["@firebase/firestore"] = "fire-fst"),
          (o["fire-js"] = "fire-js"),
          (o["firebase-wrapper"] = "fire-js-all"),
          o),
        m = new d.Logger("@firebase/app"),
        y = (function () {
          function t(t, e, n) {
            var r,
              o,
              d = this;
            (this.firebase_ = n),
              (this.isDeleted_ = !1),
              (this.name_ = e.name),
              (this.automaticDataCollectionEnabled_ =
                e.automaticDataCollectionEnabled || !1),
              (this.options_ = l.deepCopy(t)),
              (this.container = new component.ComponentContainer(e.name)),
              this._addComponent(
                new component.Component(
                  "app",
                  function () {
                    return d;
                  },
                  "PUBLIC"
                )
              );
            try {
              for (
                var h = c.__values(this.firebase_.INTERNAL.components.values()),
                  f = h.next();
                !f.done;
                f = h.next()
              ) {
                var v = f.value;
                this._addComponent(v);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                f && !f.done && (o = h.return) && o.call(h);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          return (
            Object.defineProperty(
              t.prototype,
              "automaticDataCollectionEnabled",
              {
                get: function () {
                  return (
                    this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                  );
                },
                set: function (t) {
                  this.checkDestroyed_(),
                    (this.automaticDataCollectionEnabled_ = t);
                },
                enumerable: !1,
                configurable: !0,
              }
            ),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return this.checkDestroyed_(), this.name_;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "options", {
              get: function () {
                return this.checkDestroyed_(), this.options_;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.delete = function () {
              var t = this;
              return new Promise(function (e) {
                t.checkDestroyed_(), e();
              })
                .then(function () {
                  return (
                    t.firebase_.INTERNAL.removeApp(t.name_),
                    Promise.all(
                      t.container.getProviders().map(function (t) {
                        return t.delete();
                      })
                    )
                  );
                })
                .then(function () {
                  t.isDeleted_ = !0;
                });
            }),
            (t.prototype._getService = function (t, e) {
              return (
                void 0 === e && (e = "[DEFAULT]"),
                this.checkDestroyed_(),
                this.container.getProvider(t).getImmediate({ identifier: e })
              );
            }),
            (t.prototype._removeServiceInstance = function (t, e) {
              void 0 === e && (e = "[DEFAULT]"),
                this.container.getProvider(t).clearInstance(e);
            }),
            (t.prototype._addComponent = function (component) {
              try {
                this.container.addComponent(component);
              } catch (t) {
                m.debug(
                  "Component " +
                    component.name +
                    " failed to register with FirebaseApp " +
                    this.name,
                  t
                );
              }
            }),
            (t.prototype._addOrOverwriteComponent = function (component) {
              this.container.addOrOverwriteComponent(component);
            }),
            (t.prototype.checkDestroyed_ = function () {
              if (this.isDeleted_)
                throw f.create("app-deleted", { appName: this.name_ });
            }),
            t
          );
        })();
      (y.prototype.name && y.prototype.options) ||
        y.prototype.delete ||
        console.log("dc");
      var _ = (function t() {
          var e = (function (t) {
            var e = {},
              n = new Map(),
              r = {
                __esModule: !0,
                initializeApp: function (n, o) {
                  void 0 === o && (o = {});
                  if ("object" != typeof o || null === o) {
                    o = { name: o };
                  }
                  var c = o;
                  void 0 === c.name && (c.name = "[DEFAULT]");
                  var d = c.name;
                  if ("string" != typeof d || !d)
                    throw f.create("bad-app-name", { appName: String(d) });
                  if (l.contains(e, d))
                    throw f.create("duplicate-app", { appName: d });
                  var h = new t(n, c, r);
                  return (e[d] = h), h;
                },
                app: o,
                registerVersion: function (t, e, n) {
                  var r,
                    o = null !== (r = v[t]) && void 0 !== r ? r : t;
                  n && (o += "-" + n);
                  var c = o.match(/\s|\//),
                    l = e.match(/\s|\//);
                  if (c || l) {
                    var d = [
                      'Unable to register library "' +
                        o +
                        '" with version "' +
                        e +
                        '":',
                    ];
                    return (
                      c &&
                        d.push(
                          'library name "' +
                            o +
                            '" contains illegal characters (whitespace or "/")'
                        ),
                      c && l && d.push("and"),
                      l &&
                        d.push(
                          'version name "' +
                            e +
                            '" contains illegal characters (whitespace or "/")'
                        ),
                      void m.warn(d.join(" "))
                    );
                  }
                  h(
                    new component.Component(
                      o + "-version",
                      function () {
                        return { library: o, version: e };
                      },
                      "VERSION"
                    )
                  );
                },
                setLogLevel: d.setLogLevel,
                onLog: function (t, e) {
                  if (null !== t && "function" != typeof t)
                    throw f.create("invalid-log-argument", { appName: name });
                  d.setUserLogHandler(t, e);
                },
                apps: null,
                SDK_VERSION: "7.20.0",
                INTERNAL: {
                  registerComponent: h,
                  removeApp: function (t) {
                    delete e[t];
                  },
                  components: n,
                  useAsService: function (t, e) {
                    if ("serverAuth" === e) return null;
                    return e;
                  },
                },
              };
            function o(t) {
              if (((t = t || "[DEFAULT]"), !l.contains(e, t)))
                throw f.create("no-app", { appName: t });
              return e[t];
            }
            function h(component) {
              var d,
                h,
                v = component.name;
              if (n.has(v))
                return (
                  m.debug(
                    "There were multiple attempts to register component " +
                      v +
                      "."
                  ),
                  "PUBLIC" === component.type ? r[v] : null
                );
              if ((n.set(v, component), "PUBLIC" === component.type)) {
                var y = function (t) {
                  if ((void 0 === t && (t = o()), "function" != typeof t[v]))
                    throw f.create("invalid-app-argument", { appName: v });
                  return t[v]();
                };
                void 0 !== component.serviceProps &&
                  l.deepExtend(y, component.serviceProps),
                  (r[v] = y),
                  (t.prototype[v] = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    var n = this._getService.bind(this, v);
                    return n.apply(this, component.multipleInstances ? t : []);
                  });
              }
              try {
                for (
                  var _ = c.__values(Object.keys(e)), w = _.next();
                  !w.done;
                  w = _.next()
                ) {
                  var C = w.value;
                  e[C]._addComponent(component);
                }
              } catch (t) {
                d = { error: t };
              } finally {
                try {
                  w && !w.done && (h = _.return) && h.call(_);
                } finally {
                  if (d) throw d.error;
                }
              }
              return "PUBLIC" === component.type ? r[v] : null;
            }
            return (
              (r.default = r),
              Object.defineProperty(r, "apps", {
                get: function () {
                  return Object.keys(e).map(function (t) {
                    return e[t];
                  });
                },
              }),
              (o.App = t),
              r
            );
          })(y);
          return (
            (e.INTERNAL = c.__assign(c.__assign({}, e.INTERNAL), {
              createFirebaseNamespace: t,
              extendNamespace: function (t) {
                l.deepExtend(e, t);
              },
              createSubscribe: l.createSubscribe,
              ErrorFactory: l.ErrorFactory,
              deepExtend: l.deepExtend,
            })),
            e
          );
        })(),
        w = (function () {
          function t(t) {
            this.container = t;
          }
          return (
            (t.prototype.getPlatformInfoString = function () {
              return this.container
                .getProviders()
                .map(function (t) {
                  if (
                    (function (t) {
                      var component = t.getComponent();
                      return (
                        "VERSION" ===
                        (null == component ? void 0 : component.type)
                      );
                    })(t)
                  ) {
                    var e = t.getImmediate();
                    return e.library + "/" + e.version;
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .join(" ");
            }),
            t
          );
        })();
      if (l.isBrowser() && void 0 !== self.firebase) {
        m.warn(
          "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
        );
        var C = self.firebase.SDK_VERSION;
        C &&
          C.indexOf("LITE") >= 0 &&
          m.warn(
            "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
          );
      }
      var E = _.initializeApp;
      _.initializeApp = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          l.isNode() &&
            m.warn(
              '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '
            ),
          E.apply(void 0, t)
        );
      };
      var T = _;
      !(function (t, e) {
        t.INTERNAL.registerComponent(
          new component.Component(
            "platform-logger",
            function (t) {
              return new w(t);
            },
            "PRIVATE"
          )
        ),
          t.registerVersion("@firebase/app", "0.6.11", e),
          t.registerVersion("fire-js", "");
      })(T),
        (e.default = T),
        (e.firebase = T);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(12),
        o = n(152),
        c = (function () {
          function t(t, e, n) {
            (this.name = t),
              (this.instanceFactory = e),
              (this.type = n),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = "LAZY");
          }
          return (
            (t.prototype.setInstantiationMode = function (t) {
              return (this.instantiationMode = t), this;
            }),
            (t.prototype.setMultipleInstances = function (t) {
              return (this.multipleInstances = t), this;
            }),
            (t.prototype.setServiceProps = function (t) {
              return (this.serviceProps = t), this;
            }),
            t
          );
        })(),
        l = (function () {
          function t(t, e) {
            (this.name = t),
              (this.container = e),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map());
          }
          return (
            (t.prototype.get = function (t) {
              void 0 === t && (t = "[DEFAULT]");
              var e = this.normalizeInstanceIdentifier(t);
              if (!this.instancesDeferred.has(e)) {
                var n = new o.Deferred();
                this.instancesDeferred.set(e, n);
                try {
                  var r = this.getOrInitializeService(e);
                  r && n.resolve(r);
                } catch (t) {}
              }
              return this.instancesDeferred.get(e).promise;
            }),
            (t.prototype.getImmediate = function (t) {
              var e = r.__assign({ identifier: "[DEFAULT]", optional: !1 }, t),
                n = e.identifier,
                o = e.optional,
                c = this.normalizeInstanceIdentifier(n);
              try {
                var l = this.getOrInitializeService(c);
                if (!l) {
                  if (o) return null;
                  throw Error("Service " + this.name + " is not available");
                }
                return l;
              } catch (t) {
                if (o) return null;
                throw t;
              }
            }),
            (t.prototype.getComponent = function () {
              return this.component;
            }),
            (t.prototype.setComponent = function (component) {
              var t, e;
              if (component.name !== this.name)
                throw Error(
                  "Mismatching Component " +
                    component.name +
                    " for Provider " +
                    this.name +
                    "."
                );
              if (this.component)
                throw Error(
                  "Component for " + this.name + " has already been provided"
                );
              if (
                ((this.component = component),
                (function (component) {
                  return "EAGER" === component.instantiationMode;
                })(component))
              )
                try {
                  this.getOrInitializeService("[DEFAULT]");
                } catch (t) {}
              try {
                for (
                  var n = r.__values(this.instancesDeferred.entries()),
                    o = n.next();
                  !o.done;
                  o = n.next()
                ) {
                  var c = r.__read(o.value, 2),
                    l = c[0],
                    d = c[1],
                    h = this.normalizeInstanceIdentifier(l);
                  try {
                    var f = this.getOrInitializeService(h);
                    d.resolve(f);
                  } catch (t) {}
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o && !o.done && (e = n.return) && e.call(n);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.clearInstance = function (t) {
              void 0 === t && (t = "[DEFAULT]"),
                this.instancesDeferred.delete(t),
                this.instances.delete(t);
            }),
            (t.prototype.delete = function () {
              return r.__awaiter(this, void 0, void 0, function () {
                var t;
                return r.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Array.from(this.instances.values())),
                        [
                          4,
                          Promise.all(
                            r.__spread(
                              t
                                .filter(function (t) {
                                  return "INTERNAL" in t;
                                })
                                .map(function (t) {
                                  return t.INTERNAL.delete();
                                }),
                              t
                                .filter(function (t) {
                                  return "_delete" in t;
                                })
                                .map(function (t) {
                                  return t._delete();
                                })
                            )
                          ),
                        ]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.isComponentSet = function () {
              return null != this.component;
            }),
            (t.prototype.getOrInitializeService = function (t) {
              var e = this.instances.get(t);
              return (
                !e &&
                  this.component &&
                  ((e = this.component.instanceFactory(
                    this.container,
                    (function (t) {
                      return "[DEFAULT]" === t ? void 0 : t;
                    })(t)
                  )),
                  this.instances.set(t, e)),
                e || null
              );
            }),
            (t.prototype.normalizeInstanceIdentifier = function (t) {
              return this.component
                ? this.component.multipleInstances
                  ? t
                  : "[DEFAULT]"
                : t;
            }),
            t
          );
        })();
      var d = (function () {
        function t(t) {
          (this.name = t), (this.providers = new Map());
        }
        return (
          (t.prototype.addComponent = function (component) {
            var t = this.getProvider(component.name);
            if (t.isComponentSet())
              throw new Error(
                "Component " +
                  component.name +
                  " has already been registered with " +
                  this.name
              );
            t.setComponent(component);
          }),
          (t.prototype.addOrOverwriteComponent = function (component) {
            this.getProvider(component.name).isComponentSet() &&
              this.providers.delete(component.name),
              this.addComponent(component);
          }),
          (t.prototype.getProvider = function (t) {
            if (this.providers.has(t)) return this.providers.get(t);
            var e = new l(t, this);
            return this.providers.set(t, e), e;
          }),
          (t.prototype.getProviders = function () {
            return Array.from(this.providers.values());
          }),
          t
        );
      })();
      (e.Component = c), (e.ComponentContainer = d), (e.Provider = l);
    },
    function (t, e, n) {
      "use strict";
      function r() {
        for (var s = 0, i = 0, t = arguments.length; i < t; i++)
          s += arguments[i].length;
        var e = Array(s),
          n = 0;
        for (i = 0; i < t; i++)
          for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++)
            e[n] = a[r];
        return e;
      }
      var o;
      n.r(e),
        n.d(e, "LogLevel", function () {
          return c;
        }),
        n.d(e, "Logger", function () {
          return m;
        }),
        n.d(e, "setLogLevel", function () {
          return y;
        }),
        n.d(e, "setUserLogHandler", function () {
          return _;
        });
      var c,
        l = [];
      !(function (t) {
        (t[(t.DEBUG = 0)] = "DEBUG"),
          (t[(t.VERBOSE = 1)] = "VERBOSE"),
          (t[(t.INFO = 2)] = "INFO"),
          (t[(t.WARN = 3)] = "WARN"),
          (t[(t.ERROR = 4)] = "ERROR"),
          (t[(t.SILENT = 5)] = "SILENT");
      })(c || (c = {}));
      var d = {
          debug: c.DEBUG,
          verbose: c.VERBOSE,
          info: c.INFO,
          warn: c.WARN,
          error: c.ERROR,
          silent: c.SILENT,
        },
        h = c.INFO,
        f =
          (((o = {})[c.DEBUG] = "log"),
          (o[c.VERBOSE] = "log"),
          (o[c.INFO] = "info"),
          (o[c.WARN] = "warn"),
          (o[c.ERROR] = "error"),
          o),
        v = function (t, e) {
          for (var n = [], o = 2; o < arguments.length; o++)
            n[o - 2] = arguments[o];
          if (!(e < t.logLevel)) {
            var c = new Date().toISOString(),
              l = f[e];
            if (!l)
              throw new Error(
                "Attempted to log a message with an invalid logType (value: " +
                  e +
                  ")"
              );
            console[l].apply(console, r(["[" + c + "]  " + t.name + ":"], n));
          }
        },
        m = (function () {
          function t(t) {
            (this.name = t),
              (this._logLevel = h),
              (this._logHandler = v),
              (this._userLogHandler = null),
              l.push(this);
          }
          return (
            Object.defineProperty(t.prototype, "logLevel", {
              get: function () {
                return this._logLevel;
              },
              set: function (t) {
                if (!(t in c))
                  throw new TypeError(
                    'Invalid value "' + t + '" assigned to `logLevel`'
                  );
                this._logLevel = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.setLogLevel = function (t) {
              this._logLevel = "string" == typeof t ? d[t] : t;
            }),
            Object.defineProperty(t.prototype, "logHandler", {
              get: function () {
                return this._logHandler;
              },
              set: function (t) {
                if ("function" != typeof t)
                  throw new TypeError(
                    "Value assigned to `logHandler` must be a function"
                  );
                this._logHandler = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "userLogHandler", {
              get: function () {
                return this._userLogHandler;
              },
              set: function (t) {
                this._userLogHandler = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.DEBUG], t)),
                this._logHandler.apply(this, r([this, c.DEBUG], t));
            }),
            (t.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.VERBOSE], t)),
                this._logHandler.apply(this, r([this, c.VERBOSE], t));
            }),
            (t.prototype.info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.INFO], t)),
                this._logHandler.apply(this, r([this, c.INFO], t));
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.WARN], t)),
                this._logHandler.apply(this, r([this, c.WARN], t));
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, c.ERROR], t)),
                this._logHandler.apply(this, r([this, c.ERROR], t));
            }),
            t
          );
        })();
      function y(t) {
        l.forEach(function (e) {
          e.setLogLevel(t);
        });
      }
      function _(t, e) {
        for (
          var n = function (n) {
              var r = null;
              e && e.level && (r = d[e.level]),
                (n.userLogHandler =
                  null === t
                    ? null
                    : function (e, n) {
                        for (var o = [], l = 2; l < arguments.length; l++)
                          o[l - 2] = arguments[l];
                        var d = o
                          .map(function (t) {
                            if (null == t) return null;
                            if ("string" == typeof t) return t;
                            if ("number" == typeof t || "boolean" == typeof t)
                              return t.toString();
                            if (t instanceof Error) return t.message;
                            try {
                              return JSON.stringify(t);
                            } catch (t) {
                              return null;
                            }
                          })
                          .filter(function (t) {
                            return t;
                          })
                          .join(" ");
                        n >= (null != r ? r : e.logLevel) &&
                          t({
                            level: c[n].toLowerCase(),
                            message: d,
                            args: o,
                            type: e.name,
                          });
                      });
            },
            r = 0,
            o = l;
          r < o.length;
          r++
        ) {
          n(o[r]);
        }
      }
    },
    function (t, e, n) {
      "use strict";
      var r = Function.prototype.toString;
      e.a = function (t) {
        if (null != t) {
          try {
            return r.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = (function (t) {
        return function (object, e, n) {
          for (
            var r = -1, o = Object(object), c = n(object), l = c.length;
            l--;

          ) {
            var d = c[t ? l : ++r];
            if (!1 === e(o[d], d, o)) break;
          }
          return object;
        };
      })();
      e.a = r;
    },
    function (t, e, n) {
      "use strict";
      var r = function (t, e) {
          for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
          return r;
        },
        o = n(86),
        c = n(76),
        l = n(114),
        d = n(112),
        h = n(119),
        f = Object.prototype.hasOwnProperty;
      e.a = function (t, e) {
        var n = Object(c.a)(t),
          v = !n && Object(o.a)(t),
          m = !n && !v && Object(l.a)(t),
          y = !n && !v && !m && Object(h.a)(t),
          _ = n || v || m || y,
          w = _ ? r(t.length, String) : [],
          C = w.length;
        for (var E in t)
          (!e && !f.call(t, E)) ||
            (_ &&
              ("length" == E ||
                (m && ("offset" == E || "parent" == E)) ||
                (y &&
                  ("buffer" == E || "byteLength" == E || "byteOffset" == E)) ||
                Object(d.a)(E, C))) ||
            w.push(E);
        return w;
      };
    },
    function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        return (
          (e = e || {}),
          new Promise(function (n, r) {
            var s = new XMLHttpRequest(),
              o = [],
              u = [],
              i = {},
              a = function () {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function () {
                    return Promise.resolve(s.responseText);
                  },
                  json: function () {
                    return Promise.resolve(s.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([s.response]));
                  },
                  clone: a,
                  headers: {
                    keys: function () {
                      return o;
                    },
                    entries: function () {
                      return u;
                    },
                    get: function (t) {
                      return i[t.toLowerCase()];
                    },
                    has: function (t) {
                      return t.toLowerCase() in i;
                    },
                  },
                };
              };
            for (var c in (s.open(e.method || "get", t, !0),
            (s.onload = function () {
              s
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, e, n) {
                  o.push((e = e.toLowerCase())),
                    u.push([e, n]),
                    (i[e] = i[e] ? i[e] + "," + n : n);
                }),
                n(a());
            }),
            (s.onerror = r),
            (s.withCredentials = "include" == e.credentials),
            e.headers))
              s.setRequestHeader(c, e.headers[c]);
            s.send(e.body || null);
          })
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = function (t) {
        return (
          (function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
          !(function (t) {
            var e = Object.prototype.toString.call(t);
            return (
              "[object RegExp]" === e ||
              "[object Date]" === e ||
              (function (t) {
                return t.$$typeof === o;
              })(t)
            );
          })(t)
        );
      };
      var o =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function c(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t)
          ? v(((n = t), Array.isArray(n) ? [] : {}), t, e)
          : t;
        var n;
      }
      function l(t, source, e) {
        return t.concat(source).map(function (element) {
          return c(element, e);
        });
      }
      function d(t) {
        return Object.keys(t).concat(
          (function (t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function (symbol) {
                  return t.propertyIsEnumerable(symbol);
                })
              : [];
          })(t)
        );
      }
      function h(object, t) {
        try {
          return t in object;
        } catch (t) {
          return !1;
        }
      }
      function f(t, source, e) {
        var n = {};
        return (
          e.isMergeableObject(t) &&
            d(t).forEach(function (r) {
              n[r] = c(t[r], e);
            }),
          d(source).forEach(function (r) {
            (function (t, e) {
              return (
                h(t, e) &&
                !(
                  Object.hasOwnProperty.call(t, e) &&
                  Object.propertyIsEnumerable.call(t, e)
                )
              );
            })(t, r) ||
              (h(t, r) && e.isMergeableObject(source[r])
                ? (n[r] = (function (t, e) {
                    if (!e.customMerge) return v;
                    var n = e.customMerge(t);
                    return "function" == typeof n ? n : v;
                  })(r, e)(t[r], source[r], e))
                : (n[r] = c(source[r], e)));
          }),
          n
        );
      }
      function v(t, source, e) {
        ((e = e || {}).arrayMerge = e.arrayMerge || l),
          (e.isMergeableObject = e.isMergeableObject || r),
          (e.cloneUnlessOtherwiseSpecified = c);
        var n = Array.isArray(source);
        return n === Array.isArray(t)
          ? n
            ? e.arrayMerge(t, source, e)
            : f(t, source, e)
          : c(source, e);
      }
      v.all = function (t, e) {
        if (!Array.isArray(t))
          throw new Error("first argument should be an array");
        return t.reduce(function (t, n) {
          return v(t, n, e);
        }, {});
      };
      var m = v;
      t.exports = m;
    },
    function (t, e, n) {
      "use strict";
      n(10), n(30), n(16), n(48), n(130), n(31), n(32), n(4), n(129), n(38);
      var r,
        o,
        c = {
          light: {
            background: {
              elevation_0: "#FFFFFF",
              elevation_1: "#FFFFFF",
              elevation_2: "#F5F5F5",
              elevation_3: "#F5F5F5",
              inverted: "#000000",
            },
            component: {
              text: "#FFFFFF",
              appbar: "#EEEEEE",
              badge: "#D0021B",
              button: "#FFFFFF",
              logo: "#353535",
              snackbar: "#383B40",
              switch_thumb: "#BDBDBD",
              tooltip: "#616161",
            },
            accent: {
              primary: "#00ACC1",
              secondary: "#00ACC1",
              warn: "#E53935",
            },
            raised: {
              primary: "#0097A7",
              secondary: "#0097A7",
              warn: "#C9312E",
            },
            text: {
              default: "rgba(0, 0, 0, 0.54)",
              title: "rgba(0, 0, 0, 0.87)",
              disabled: "rgba(0, 0, 0, 0.26)",
              accent_default: "rgba(255, 255, 255, 0.54)",
              accent_title: "rgba(255, 255, 255, 0.87)",
              accent_disabled: "rgba(255, 255, 255, 0.20)",
            },
          },
          dark: {
            base: "#010101",
            background: {
              elevation_0: "#010101",
              elevation_1: "#27292D",
              elevation_2: "#383B40",
              elevation_3: "#5E626B",
              inverted: "#FFFFFF",
            },
            component: {
              text: "#FFFFFF",
              appbar: "#27292D",
              badge: "#EF5350",
              button: "#383B40",
              logo: "#F3F3F3",
              snackbar: "#E3E3E3",
              switch_thumb: "#808080",
              tooltip: "#A9A9A9",
            },
            accent: {
              primary: "#CDDC39",
              secondary: "#CDDC39",
              warn: "#CF6679",
            },
            raised: {
              primary: "#C0CA33",
              secondary: "#C0CA33",
              warn: "#bd5769",
            },
            text: {
              default: "rgba(255, 255, 255, 0.65)",
              title: "rgba(255, 255, 255, 0.90)",
              disabled: "rgba(255, 255, 255, 0.38)",
              accent_default: "rgba(0, 0, 0, 0.65)",
              accent_title: "rgba(0, 0, 0, 0.87)",
              accent_disabled: "rgba(0, 0, 0, 0.20)",
            },
          },
        },
        l = {
          red: {
            50: "#ffebee",
            100: "#ffcdd2",
            200: "#ef9a9a",
            300: "#e57373",
            400: "#ef5350",
            500: "#f44336",
            600: "#e53935",
            700: "#d32f2f",
            800: "#c62828",
            900: "#b71c1c",
            A100: "#ff8a80",
            A200: "#ff5252",
            A400: "#ff1744",
            A700: "#d50000",
            darkText: [50, 100, 200, 300, "A100"],
          },
          pink: {
            50: "#fce4ec",
            100: "#f8bbd0",
            200: "#f48fb1",
            300: "#f06292",
            400: "#ec407a",
            500: "#e91e63",
            600: "#d81b60",
            700: "#c2185b",
            800: "#ad1457",
            900: "#880e4f",
            A100: "#ff80ab",
            A200: "#ff4081",
            A400: "#f50057",
            A700: "#c51162",
            darkText: [50, 100, 200, "A100"],
          },
          purple: {
            50: "#f3e5f5",
            100: "#e1bee7",
            200: "#ce93d8",
            300: "#ba68c8",
            400: "#ab47bc",
            500: "#9c27b0",
            600: "#8e24aa",
            700: "#7b1fa2",
            800: "#6a1b9a",
            900: "#4a148c",
            A100: "#ea80fc",
            A200: "#e040fb",
            A400: "#d500f9",
            A700: "#aa00ff",
            darkText: [50, 100, 200, "A100"],
          },
          "deep-purple": {
            50: "#ede7f6",
            100: "#d1c4e9",
            200: "#b39ddb",
            300: "#9575cd",
            400: "#7e57c2",
            500: "#673ab7",
            600: "#5e35b1",
            700: "#512da8",
            800: "#4527a0",
            900: "#311b92",
            A100: "#b388ff",
            A200: "#7c4dff",
            A400: "#651fff",
            A700: "#6200ea",
            darkText: [50, 100, 200, "A100"],
          },
          indigo: {
            50: "#e8eaf6",
            100: "#c5cae9",
            200: "#9fa8da",
            300: "#7986cb",
            400: "#5c6bc0",
            500: "#3f51b5",
            600: "#3949ab",
            700: "#303f9f",
            800: "#283593",
            900: "#1a237e",
            A100: "#8c9eff",
            A200: "#536dfe",
            A400: "#3d5afe",
            A700: "#304ffe",
            darkText: [50, 100, 200, "A100"],
          },
          blue: {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
            A100: "#82b1ff",
            A200: "#448aff",
            A400: "#2979ff",
            A700: "#2962ff",
            darkText: [50, 100, 200, 300, 400, "A100"],
          },
          "light-blue": {
            50: "#e1f5fe",
            100: "#b3e5fc",
            200: "#81d4fa",
            300: "#4fc3f7",
            400: "#29b6f6",
            500: "#03a9f4",
            600: "#039be5",
            700: "#0288d1",
            800: "#0277bd",
            900: "#01579b",
            A100: "#80d8ff",
            A200: "#40c4ff",
            A400: "#00b0ff",
            A700: "#0091ea",
            darkText: [50, 100, 200, 300, 400, 500, "A100", "A200", "A300"],
          },
          cyan: {
            50: "#e0f7fa",
            100: "#b2ebf2",
            200: "#80deea",
            300: "#4dd0e1",
            400: "#26c6da",
            500: "#00bcd4",
            600: "#00acc1",
            700: "#0097a7",
            800: "#00838f",
            900: "#006064",
            A100: "#84ffff",
            A200: "#18ffff",
            A400: "#00e5ff",
            A700: "#00b8d4",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          teal: {
            50: "#e0f2f1",
            100: "#b2dfdb",
            200: "#80cbc4",
            300: "#4db6ac",
            400: "#26a69a",
            500: "#009688",
            600: "#00897b",
            700: "#00796b",
            800: "#00695c",
            900: "#004d40",
            A100: "#a7ffeb",
            A200: "#64ffda",
            A400: "#1de9b6",
            A700: "#00bfa5",
            darkText: [50, 100, 200, 300, 400, "A100", "A200", "A300", "A400"],
          },
          green: {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#4caf50",
            600: "#43a047",
            700: "#388e3c",
            800: "#2e7d32",
            900: "#1b5e20",
            A100: "#b9f6ca",
            A200: "#69f0ae",
            A400: "#00e676",
            A700: "#00c853",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          "light-green": {
            50: "#f1f8e9",
            100: "#dcedc8",
            200: "#c5e1a5",
            300: "#aed581",
            400: "#9ccc65",
            500: "#8bc34a",
            600: "#7cb342",
            700: "#689f38",
            800: "#558b2f",
            900: "#33691e",
            A100: "#ccff90",
            A200: "#b2ff59",
            A400: "#76ff03",
            A700: "#64dd17",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          lime: {
            50: "#f9fbe7",
            100: "#f0f4c3",
            200: "#e6ee9c",
            300: "#dce775",
            400: "#d4e157",
            500: "#cddc39",
            600: "#c0ca33",
            700: "#afb42b",
            800: "#9e9d24",
            900: "#827717",
            A100: "#f4ff81",
            A200: "#eeff41",
            A400: "#c6ff00",
            A700: "#aeea00",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              700,
              800,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          yellow: {
            50: "#fffde7",
            100: "#fff9c4",
            200: "#fff59d",
            300: "#fff176",
            400: "#ffee58",
            500: "#ffeb3b",
            600: "#fdd835",
            700: "#fbc02d",
            800: "#f9a825",
            900: "#f57f17",
            A100: "#ffff8d",
            A200: "#ffff00",
            A400: "#ffea00",
            A700: "#ffd600",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              700,
              800,
              900,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          amber: {
            50: "#fff8e1",
            100: "#ffecb3",
            200: "#ffe082",
            300: "#ffd54f",
            400: "#ffca28",
            500: "#ffc107",
            600: "#D69600",
            700: "#ffa000",
            800: "#ff8f00",
            900: "#ff6f00",
            A100: "#ffe57f",
            A200: "#ffd740",
            A400: "#ffc400",
            A700: "#ffab00",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              700,
              800,
              900,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          orange: {
            50: "#fff3e0",
            100: "#ffe0b2",
            200: "#ffcc80",
            300: "#ffb74d",
            400: "#ffa726",
            500: "#ff9800",
            600: "#fb8c00",
            700: "#f57c00",
            800: "#ef6c00",
            900: "#e65100",
            A100: "#ffd180",
            A200: "#ffab40",
            A400: "#ff9100",
            A700: "#ff6d00",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              700,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          "deep-orange": {
            50: "#fbe9e7",
            100: "#ffccbc",
            200: "#ffab91",
            300: "#ff8a65",
            400: "#ff7043",
            500: "#ff5722",
            600: "#f4511e",
            700: "#e64a19",
            800: "#d84315",
            900: "#bf360c",
            A100: "#ff9e80",
            A200: "#ff6e40",
            A400: "#ff3d00",
            A700: "#dd2c00",
            darkText: [50, 100, 200, 300, 400, "A100", "A200"],
          },
          brown: {
            50: "#efebe9",
            100: "#d7ccc8",
            200: "#bcaaa4",
            300: "#a1887f",
            400: "#8d6e63",
            500: "#795548",
            600: "#6d4c41",
            700: "#5d4037",
            800: "#4e342e",
            900: "#3e2723",
            A100: "#d7ccc8",
            A200: "#bcaaa4",
            A400: "#8d6e63",
            A700: "#5d4037",
            darkText: [50, 100, 200, "A100", "A200", "A300", "A400"],
          },
          grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#fff",
            A200: "#000000",
            A400: "#303030",
            A700: "#616161",
            darkText: [50, 100, 200, 300, 400, 500, "A100"],
          },
          "blue-grey": {
            50: "#eceff1",
            100: "#cfd8dc",
            200: "#b0bec5",
            300: "#90a4ae",
            400: "#78909c",
            500: "#607d8b",
            600: "#546e7a",
            700: "#455a64",
            800: "#37474f",
            900: "#263238",
            A100: "#cfd8dc",
            A200: "#b0bec5",
            A400: "#78909c",
            A700: "#455a64",
            darkText: [50, 100, 200, 300, "A100", "A200", "A300", "A400"],
          },
          white: {
            50: "#fff",
            100: "#fff",
            200: "#fff",
            300: "#fff",
            400: "#fff",
            500: "#fff",
            600: "#fff",
            700: "#fff",
            800: "#fff",
            900: "#fff",
            A100: "#fff",
            A200: "#fff",
            A400: "#fff",
            A700: "#fff",
            darkText: [
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              700,
              800,
              900,
              "A100",
              "A200",
              "A300",
              "A400",
            ],
          },
          black: {
            50: "#000",
            100: "#000",
            200: "#000",
            300: "#000",
            400: "#000",
            500: "#000",
            600: "#000",
            700: "#000",
            800: "#000",
            900: "#000",
            A100: "#000",
            A200: "#000",
            A400: "#000",
            A700: "#000",
            darkText: [],
          },
        };
      (r = function (t) {
        var e = document.querySelector('meta[name="theme-color"]');
        e
          ? e.setAttribute("content", t)
          : ((e = document.createElement("meta")).setAttribute(
              "name",
              "theme-color"
            ),
            e.setAttribute("content", t),
            document.head.appendChild(e));
      }),
        (o = function (style, t) {
          var head = document.head,
            e = head.querySelector("#" + t);
          if (e) e.textContent = style;
          else {
            var n = document.createElement("style");
            (n.type = "text/css"),
              (n.id = t),
              (n.textContent = style),
              head.appendChild(n);
          }
        });
      var d = new RegExp(
          "(" +
            ["background", "component", "accent", "raised", "text"]
              .join("|")
              .toUpperCase() +
            ")-(" +
            [
              "elevation_0",
              "elevation_1",
              "elevation_2",
              "elevation_3",
              "inverted",
              "text",
              "logo",
              "appbar",
              "snackbar",
              "tooltip",
              "badge",
              "switch_thumb",
              "button",
              "primary",
              "secondary",
              "warn",
              "default",
              "title",
              "disabled",
              "accent_default",
              "accent_title",
              "accent_disabled",
            ]
              .join("|")
              .toUpperCase() +
            ")-?(0\\.[0-9]{1,2})?",
          "g"
        ),
        h = {},
        f = function (style, t) {
          return style.replace(d, function (e, n, r, o) {
            var c = t[n.toLowerCase()][r.toLowerCase()];
            return o
              ? (function (t, e) {
                  var n = "",
                    g = "",
                    b = "",
                    r = t.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);
                  if (!r) throw new Error("Invalid color" + t);
                  if (6 === (t = r[1]).length)
                    (n = parseInt(t.substring(0, 2), 16)),
                      (g = parseInt(t.substring(2, 4), 16)),
                      (b = parseInt(t.substring(4, 6), 16));
                  else if (3 === t.length) {
                    var o = t.substring(0, 1),
                      c = t.substring(1, 2),
                      l = t.substring(2, 3);
                    (n = parseInt(o + o, 16)),
                      (g = parseInt(c + c, 16)),
                      (b = parseInt(l + l, 16));
                  }
                  return e
                    ? (e > 1 && (e /= 100),
                      "rgba("
                        .concat(n, ", ")
                        .concat(g, ", ")
                        .concat(b, ", ")
                        .concat(e, ")"))
                    : "rgb(".concat(n, ", ").concat(g, ", ").concat(b, ")");
                })(c, o)
              : c;
          });
        };
      function v(style, t, e) {
        o &&
          ((style = (style = f(style, t)).replace(/THEME_NAME/g, e)),
          o(style, e));
      }
      var m = {
        name: "md-theme",
        data: function () {
          return {
            currentTheme: null,
            currentBioTheme: null,
            inkRipple: !0,
            prefix: "md-theme-",
            styles: [],
            themes: { light: c.light, dark: c.dark },
            registeredComponents: [],
          };
        },
        created: function () {
          this.$root.$material ||
            (this.$root.$material = {
              prefix: this.prefix,
              themes: this.themes,
              currentBioTheme: this.currentBioTheme,
              currentTheme: this.currentTheme,
            }),
            this.$root.$on("component-created", this.refreshInjectedStyles),
            this.refreshInjectedStyles({
              name: "coreTheme",
              theme:
                ".THEME_NAME :not(input):not(textarea)::selection {\n  background-color: ACCENT-PRIMARY;\n  color: TEXT-ACCENT_TITLE;\n}\n.THEME_NAME a:not(.md-button) {\n  color: ACCENT-SECONDARY;\n}\n\nbody.THEME_NAME {\n  background-color: BACKGROUND-ELEVATION_0;\n  color: TEXT-TITLE;\n}\n\n/* Typography */\n.THEME_NAME .md-caption,\n.THEME_NAME .md-display-1,\n.THEME_NAME .md-display-2,\n.THEME_NAME .md-display-3,\n.THEME_NAME .md-display-4,\n.THEME_NAME .md-label {\n  color: TEXT-DEFAULT;\n}\n.THEME_NAME .md-headline,\n.THEME_NAME .md-title,\n.THEME_NAME .md-subheading,\n.THEME_NAME .md-subheading-1,\n.THEME_NAME .md-subheading-2,\n.THEME_NAME .md-body-1,\n.THEME_NAME .md-body-2 {\n  color: TEXT-TITLE;\n}\n.THEME_NAME code:not(.hljs) {\n  background-color: ACCENT-WARN-0.15;\n  color: ACCENT-WARN;\n}",
            });
        },
        mounted: function () {
          this.setCurrentTheme("dark");
        },
        render: function (t) {
          return t("span");
        },
        methods: {
          useTheme: function (t) {
            if (!(t in h)) {
              var e,
                n = this.themes[t];
              return n
                ? (v(this.styles.join("\n"), n, this.prefix + t), (h[t] = !0))
                : ((e = t),
                  void console.warn(
                    "The theme '".concat(
                      e,
                      "' doesn't exists. You need to register"
                    ) + " it first in order to use."
                  ));
            }
          },
          refreshInjectedStyles: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e) {
              var n = -1 === this.registeredComponents.indexOf(e.name);
              n &&
                (this.styles.push(e.theme),
                this.registeredComponents.push(e.name));
            }
            var r = this.styles.join("\n"),
              o = this.prefix;
            Object.keys(h).forEach(function (e) {
              var n = t.themes[e];
              v(r, n, o + e);
            });
          },
          setCurrentTheme: function (t) {
            t !== this.currentTheme &&
              (this.useTheme(t),
              this.currentTheme &&
                document.body.classList.remove(this.prefix + this.currentTheme),
              (this.currentTheme = t),
              this.$emit("theme-updated", this.currentTheme),
              (this.$root.$material.currentTheme = t),
              document.body.classList.add(this.prefix + t));
          },
          setBioTheme: function (t) {
            if ("default" !== t && "bio" !== t) {
              var e = /^([a-z]*)?([A-Z][a-z]*)?([0-9]*)$/g.exec(t),
                n = e[1].toLowerCase();
              e[2] && (n += "-".concat(e[2].toLowerCase()));
              var o = l[n][e[3] ? e[3] : "600"];
              r && r(o),
                this.setAccentColor(o),
                (this.currentBioTheme = t),
                (this.$root.$material.currentBioTheme = t);
            }
          },
          setAccentColor: function (t) {
            var e = this.themes[
              this.currentTheme ? this.currentTheme : "default"
            ];
            (e.accent.primary = t),
              (e.raised.primary = t),
              (e.accent.secondary = t),
              (e.raised.secondary = t),
              this.refreshInjectedStyles();
          },
        },
      };
      e.a = m;
    },
    function (t, e, n) {
      "use strict";
      var r = n(38),
        o = n(45),
        c = { name: "md-toolbar" },
        l = function (t) {
          t &&
            t("data-v-b156ddf8_0", {
              source:
                ".md-toolbar{min-height:56px;padding:0 8px;display:flex;align-items:center;align-content:center;flex-flow:row wrap;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translate3D(0,0,0);background-color:#27292d;color:rgba(255,255,255,.9)}.md-toolbar .md-input-container.md-input-focused input,.md-toolbar .md-input-container.md-input-focused textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar .md-input-container.md-input-focused .md-icon:not(.md-icon-delete),.md-toolbar .md-input-container.md-input-focused label{color:rgba(255,255,255,.9)}.md-toolbar .md-input-container:after{background-color:rgba(255,255,255,.9)}.md-toolbar .md-input-container input,.md-toolbar .md-input-container textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar .md-input-container input::-webkit-input-placeholder,.md-toolbar .md-input-container textarea::-webkit-input-placeholder{color:rgba(255,255,255,.65)}.md-toolbar .md-input-container .md-icon:not(.md-icon-delete),.md-toolbar .md-input-container label{color:rgba(255,255,255,.9)}.md-toolbar.md-accent{color:rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container.md-input-focused input,.md-toolbar.md-accent .md-input-container.md-input-focused textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete),.md-toolbar.md-accent .md-input-container.md-input-focused label{color:rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container:after{background-color:rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container input,.md-toolbar.md-accent .md-input-container textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-accent .md-input-container input::-webkit-input-placeholder,.md-toolbar.md-accent .md-input-container textarea::-webkit-input-placeholder{color:rgba(255,255,255,.65)}.md-toolbar.md-accent .md-input-container .md-icon:not(.md-icon-delete),.md-toolbar.md-accent .md-input-container label{color:rgba(255,255,255,.9)}.md-toolbar.md-warn{color:rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container.md-input-focused input,.md-toolbar.md-warn .md-input-container.md-input-focused textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete),.md-toolbar.md-warn .md-input-container.md-input-focused label{color:rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container:after{background-color:rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container input,.md-toolbar.md-warn .md-input-container textarea{color:rgba(255,255,255,.9);text-shadow:0 0 0 rgba(255,255,255,.9)}.md-toolbar.md-warn .md-input-container input::-webkit-input-placeholder,.md-toolbar.md-warn .md-input-container textarea::-webkit-input-placeholder{color:rgba(255,255,255,.65)}.md-toolbar.md-warn .md-input-container .md-icon:not(.md-icon-delete),.md-toolbar.md-warn .md-input-container label{color:rgba(255,255,255,.9)}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-dense.md-medium{min-height:72px}.md-toolbar.md-dense.md-large{min-height:96px}.md-toolbar.md-dense .md-toolbar-container{height:48px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-large{min-height:128px;align-content:inherit}.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-account-header{min-height:164px}.md-toolbar.md-account-header .md-ink-ripple{color:#010101}.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]){background-color:rgba(1,1,1,.12)}.md-toolbar.md-account-header .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab){background-color:rgba(1,1,1,.1)}.md-toolbar.md-account-header .md-avatar-list{margin:16px 0 8px}.md-toolbar.md-account-header .md-avatar-list .md-list-item-container{align-items:flex-start}.md-toolbar.md-account-header .md-avatar-list .md-avatar+.md-avatar{margin-left:16px}.md-toolbar .md-toolbar-container{width:100%;height:64px;display:flex;align-items:center;align-self:flex-start}.md-toolbar .md-toolbar-container>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar .md-toolbar-container>.md-button+.md-button{margin-left:0}.md-toolbar>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar>.md-button+.md-button{margin-left:0}.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400}.md-toolbar .md-title:first-child{margin-left:8px}.md-toolbar .md-title+.md-input-container{margin-left:24px}.md-toolbar .md-input-container{min-height:32px;margin-top:0;margin-bottom:0;padding-top:0}.md-toolbar .md-list{padding:0;margin:0 -8px;flex:1}",
              map: void 0,
              media: void 0,
            });
        },
        d = Object(r.a)(
          {
            render: function () {
              var t = this.$createElement;
              return (this._self._c || t)(
                "div",
                { staticClass: "md-toolbar", class: [this.themeClass] },
                [this._t("default")],
                2
              );
            },
            staticRenderFns: [],
          },
          l,
          c,
          void 0,
          !1,
          void 0,
          !1,
          o.a,
          void 0,
          void 0
        );
      e.a = d;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(163);
      var r = n(38),
        o = n(45),
        c = n(167),
        l = {
          name: "md-icon",
          props: {
            mdSrc: String,
            iconSvg: String,
            badge: Number,
            iconColor: { type: String, default: "currentColor" },
            size: { type: String, default: "24px" },
          },
          created: function () {
            this.$root.$emit("component-created", {
              name: "mdIcon",
              theme: c.a,
            });
          },
          data: function () {
            return { svgContent: null, imageSrc: null };
          },
          computed: {
            badgeText: function () {
              return Math.min(this.badge, 99);
            },
            currentTheme: function () {
              return this.theme;
            },
            cssVariables: function () {
              return { "--size": this.size, "--icon-color": this.iconColor };
            },
          },
        },
        d = function (t) {
          t &&
            t("data-v-09c01062_0", {
              source:
                ".md-icon{width:var(--size);min-width:var(--size);height:var(--size);min-height:var(--size);position:relative;margin:auto;display:inline-flex!important;align-items:center;text-rendering:optimizeLegibility;vertical-align:middle;fill:var(--icon-color)}.md-icon svg{width:var(--size);height:auto}.md-icon__badge{position:absolute;top:-6px;right:-6px;width:12px;height:12px;border-radius:50%;text-align:center;font-size:7px;font-style:normal;line-height:12px;font-family:Muli,Helvetica,Arial,sans-serif}img.md-icon{user-select:none;-webkit-user-drag:none}",
              map: void 0,
              media: void 0,
            });
        },
        h = Object(r.a)(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "span",
                { staticClass: "md-icon", style: t.cssVariables },
                [
                  n("svg", { attrs: { viewBox: "0 0 24 25" } }, [
                    n("path", {
                      class: t.currentTheme,
                      attrs: { d: t.iconSvg },
                    }),
                  ]),
                  t._v(" "),
                  t.badge
                    ? n("div", { staticClass: "md-icon__badge" }, [
                        t._v(t._s(t.badgeText)),
                      ])
                    : t._e(),
                ]
              );
            },
            staticRenderFns: [],
          },
          d,
          l,
          void 0,
          !1,
          void 0,
          !1,
          o.a,
          void 0,
          void 0
        );
      e.default = h;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(163);
      var r = n(38),
        o = n(45),
        c = n(162),
        l = n(164),
        d = n(165),
        h = {
          name: "md-button",
          components: { MdInkRipple: l.a },
          props: {
            href: String,
            target: String,
            rel: String,
            type: { type: String, default: "button" },
            disabled: Boolean,
            badge: Number,
          },
          mixins: [c.a],
          computed: {
            newRel: function () {
              return "_blank" === this.target
                ? this.rel || "noopener"
                : this.rel;
            },
            badgeText: function () {
              return Math.min(this.badge, 99);
            },
            currentTheme: function () {
              return this.theme;
            },
          },
          created: function () {
            this.$root.$emit("component-created", {
              name: "mdButton",
              theme: d.a,
            });
          },
        },
        f = function (t) {
          t &&
            t("data-v-818237cc_0", {
              source:
                ".md-button{min-width:88px;min-height:36px;margin:6px 8px;padding:0 16px;display:inline-block;position:relative;user-select:none;cursor:pointer;outline:0;background:0 0;border:0;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:currentColor;font-family:inherit;font-size:14px;font-style:inherit;font-variant:inherit;font-weight:600;letter-spacing:inherit;line-height:36px;text-align:center;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button:focus{outline:0}.md-button::-moz-focus-inner{border:0}.md-button:active:not([disabled]):hover{text-decoration:none}.md-button.md-raised:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-button.md-dense{min-height:32px;line-height:32px;font-size:13px}.md-button.md-icon-button .md-icon{position:absolute;top:1px;right:0;bottom:0;left:0}.md-button.md-fab .md-icon{position:absolute;top:1px;right:0;bottom:0;left:0}.md-button.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;padding:8px;border-radius:50%;line-height:24px}.md-button.md-icon-button.md-dense{width:32px;min-width:32px;height:32px;min-height:32px;padding:4px}.md-button.md-icon-button .md-ink-ripple{border-radius:50%}.md-button.md-icon-button .md-ink-ripple .md-ripple{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-button.md-icon-button .md-ripple.md-active{animation-duration:.9s}.md-button.md-fab{width:56px;height:56px;padding:0;min-width:0;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:56px;line-height:56px;background-clip:padding-box;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow,transform}.md-button.md-fab:focus,.md-button.md-fab:hover{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-button.md-fab.md-mini{width:40px;height:40px;line-height:20px}.md-button.md-fab .md-ink-ripple{border-radius:56px}.md-button[disabled]{cursor:default;pointer-events:none}.md-button[disabled].md-fab{box-shadow:none}.md-button:after{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-button .md-ink-ripple{border-radius:2px;background-clip:padding-box;overflow:hidden}.md-button__badge{position:absolute;top:1px;right:-1px;width:18px;height:18px;border-radius:50%;font-size:12px;line-height:18px}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{display:block}.md-fab.md-fab-bottom-center,.md-fab.md-fab-bottom-left,.md-fab.md-fab-bottom-right,.md-fab.md-fab-top-center,.md-fab.md-fab-top-left,.md-fab.md-fab-top-right,.md-speed-dial.md-fab-bottom-center,.md-speed-dial.md-fab-bottom-left,.md-speed-dial.md-fab-bottom-right,.md-speed-dial.md-fab-top-center,.md-speed-dial.md-fab-top-left,.md-speed-dial.md-fab-top-right{margin:0;position:absolute;z-index:10}.md-fab.md-fab-top-left,.md-speed-dial.md-fab-top-left{top:24px;left:24px}.md-fab.md-fab-top-center,.md-speed-dial.md-fab-top-center{top:24px;left:50%;transform:translateX(-50%)}.md-fab.md-fab-top-right,.md-speed-dial.md-fab-top-right{top:24px;right:24px}.md-fab.md-fab-bottom-left,.md-speed-dial.md-fab-bottom-left{bottom:24px;left:24px}.md-fab.md-fab-bottom-center,.md-speed-dial.md-fab-bottom-center{bottom:24px;left:50%;transform:translateX(-50%)}.md-fab.md-fab-bottom-right,.md-speed-dial.md-fab-bottom-right{right:24px;bottom:24px}.md-button-tooltip.md-tooltip-top{margin-top:-8px}.md-button-tooltip.md-tooltip-right{margin-left:8px}.md-button-tooltip.md-tooltip-bottom{margin-top:8px}.md-button-tooltip.md-tooltip-left{margin-left:-8px}",
              map: void 0,
              media: void 0,
            });
        },
        v = Object(r.a)(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return t.href
                ? n(
                    "a",
                    {
                      staticClass: "md-button",
                      class: [t.themeClass],
                      style: t.cssVariables,
                      attrs: {
                        href: t.href,
                        disabled: t.disabled,
                        target: t.target,
                        rel: t.newRel,
                      },
                      on: {
                        click: function (e) {
                          return t.$emit("click", e);
                        },
                      },
                    },
                    [
                      t.badge
                        ? n("div", { staticClass: "md-button__badge" }, [
                            t._v(t._s(t.badgeText)),
                          ])
                        : t._e(),
                      t._v(" "),
                      n("md-ink-ripple", {
                        attrs: { "md-disabled": t.disabled },
                      }),
                      t._v(" "),
                      t._t("default"),
                    ],
                    2
                  )
                : n(
                    "button",
                    {
                      staticClass: "md-button",
                      class: [t.themeClass],
                      style: t.cssVariables,
                      attrs: { type: t.type, disabled: t.disabled },
                      on: {
                        click: function (e) {
                          return t.$emit("click", e);
                        },
                      },
                    },
                    [
                      t.badge
                        ? n("div", { staticClass: "md-button__badge" }, [
                            t._v(t._s(t.badgeText)),
                          ])
                        : t._e(),
                      t._v(" "),
                      n("md-ink-ripple", {
                        attrs: { "md-disabled": t.disabled },
                      }),
                      t._v(" "),
                      t._t("default"),
                    ],
                    2
                  );
            },
            staticRenderFns: [],
          },
          f,
          h,
          void 0,
          !1,
          void 0,
          !1,
          o.a,
          void 0,
          void 0
        );
      e.default = v;
    },
    function (t, e, n) {
      "use strict";
      e.a = function () {
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(29),
          o =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          c = o && "object" == typeof t && t && !t.nodeType && t,
          l = c && c.exports === o ? r.a.Buffer : void 0,
          d = l ? l.allocUnsafe : void 0;
        e.a = function (t, e) {
          if (e) return t.slice();
          var n = t.length,
            r = d ? d(n) : new t.constructor(n);
          return t.copy(r), r;
        };
      }.call(this, n(153)(t)));
    },
    function (t, e, n) {
      (function (t, n) {
        var r = "[object Arguments]",
          o = "[object Function]",
          c = "[object GeneratorFunction]",
          l = "[object Map]",
          d = "[object Set]",
          h = /\w*$/,
          f = /^\[object .+?Constructor\]$/,
          v = /^(?:0|[1-9]\d*)$/,
          m = {};
        (m[r] = m["[object Array]"] = m["[object ArrayBuffer]"] = m[
          "[object DataView]"
        ] = m["[object Boolean]"] = m["[object Date]"] = m[
          "[object Float32Array]"
        ] = m["[object Float64Array]"] = m["[object Int8Array]"] = m[
          "[object Int16Array]"
        ] = m["[object Int32Array]"] = m[l] = m["[object Number]"] = m[
          "[object Object]"
        ] = m["[object RegExp]"] = m[d] = m["[object String]"] = m[
          "[object Symbol]"
        ] = m["[object Uint8Array]"] = m["[object Uint8ClampedArray]"] = m[
          "[object Uint16Array]"
        ] = m["[object Uint32Array]"] = !0),
          (m["[object Error]"] = m[o] = m["[object WeakMap]"] = !1);
        var y = "object" == typeof t && t && t.Object === Object && t,
          _ = "object" == typeof self && self && self.Object === Object && self,
          w = y || _ || Function("return this")(),
          C = e && !e.nodeType && e,
          E = C && "object" == typeof n && n && !n.nodeType && n,
          T = E && E.exports === C;
        function x(map, t) {
          return map.set(t[0], t[1]), map;
        }
        function A(t, e) {
          return t.add(e), t;
        }
        function S(t, e, n, r) {
          var o = -1,
            c = t ? t.length : 0;
          for (r && c && (n = t[++o]); ++o < c; ) n = e(n, t[o], o, t);
          return n;
        }
        function N(t) {
          var e = !1;
          if (null != t && "function" != typeof t.toString)
            try {
              e = !!(t + "");
            } catch (t) {}
          return e;
        }
        function O(map) {
          var t = -1,
            e = Array(map.size);
          return (
            map.forEach(function (n, r) {
              e[++t] = [r, n];
            }),
            e
          );
        }
        function I(t, e) {
          return function (n) {
            return t(e(n));
          };
        }
        function D(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t) {
              n[++e] = t;
            }),
            n
          );
        }
        var k,
          P = Array.prototype,
          M = Function.prototype,
          F = Object.prototype,
          R = w["__core-js_shared__"],
          L = (k = /[^.]+$/.exec((R && R.keys && R.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + k
            : "",
          j = M.toString,
          $ = F.hasOwnProperty,
          H = F.toString,
          U = RegExp(
            "^" +
              j
                .call($)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          V = T ? w.Buffer : void 0,
          W = w.Symbol,
          B = w.Uint8Array,
          z = I(Object.getPrototypeOf, Object),
          Q = Object.create,
          Y = F.propertyIsEnumerable,
          G = P.splice,
          Z = Object.getOwnPropertySymbols,
          K = V ? V.isBuffer : void 0,
          X = I(Object.keys, Object),
          J = At(w, "DataView"),
          tt = At(w, "Map"),
          et = At(w, "Promise"),
          nt = At(w, "Set"),
          it = At(w, "WeakMap"),
          ot = At(Object, "create"),
          at = Dt(J),
          st = Dt(tt),
          ut = Dt(et),
          ct = Dt(nt),
          lt = Dt(it),
          ht = W ? W.prototype : void 0,
          ft = ht ? ht.valueOf : void 0;
        function pt(t) {
          var e = -1,
            n = t ? t.length : 0;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function vt(t) {
          var e = -1,
            n = t ? t.length : 0;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function mt(t) {
          var e = -1,
            n = t ? t.length : 0;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function yt(t) {
          this.__data__ = new vt(t);
        }
        function gt(t, e) {
          var n =
              Pt(t) ||
              (function (t) {
                return (
                  (function (t) {
                    return (
                      (function (t) {
                        return !!t && "object" == typeof t;
                      })(t) && Mt(t)
                    );
                  })(t) &&
                  $.call(t, "callee") &&
                  (!Y.call(t, "callee") || H.call(t) == r)
                );
              })(t)
                ? (function (t, e) {
                    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                    return r;
                  })(t.length, String)
                : [],
            o = n.length,
            c = !!o;
          for (var l in t)
            (!e && !$.call(t, l)) ||
              (c && ("length" == l || Ot(l, o))) ||
              n.push(l);
          return n;
        }
        function _t(object, t, e) {
          var n = object[t];
          ($.call(object, t) && kt(n, e) && (void 0 !== e || t in object)) ||
            (object[t] = e);
        }
        function bt(t, e) {
          for (var n = t.length; n--; ) if (kt(t[n][0], e)) return n;
          return -1;
        }
        function wt(t, e, n, f, v, object, y) {
          var _;
          if ((f && (_ = object ? f(t, v, object, y) : f(t)), void 0 !== _))
            return _;
          if (!Lt(t)) return t;
          var w = Pt(t);
          if (w) {
            if (
              ((_ = (function (t) {
                var e = t.length,
                  n = t.constructor(e);
                e &&
                  "string" == typeof t[0] &&
                  $.call(t, "index") &&
                  ((n.index = t.index), (n.input = t.input));
                return n;
              })(t)),
              !e)
            )
              return (function (source, t) {
                var e = -1,
                  n = source.length;
                t || (t = Array(n));
                for (; ++e < n; ) t[e] = source[e];
                return t;
              })(t, _);
          } else {
            var C = Nt(t),
              E = C == o || C == c;
            if (Ft(t))
              return (function (t, e) {
                if (e) return t.slice();
                var n = new t.constructor(t.length);
                return t.copy(n), n;
              })(t, e);
            if ("[object Object]" == C || C == r || (E && !object)) {
              if (N(t)) return object ? t : {};
              if (
                ((_ = (function (object) {
                  return "function" != typeof object.constructor || It(object)
                    ? {}
                    : ((t = z(object)), Lt(t) ? Q(t) : {});
                  var t;
                })(E ? {} : t)),
                !e)
              )
                return (function (source, object) {
                  return Tt(source, St(source), object);
                })(
                  t,
                  (function (object, source) {
                    return object && Tt(source, jt(source), object);
                  })(_, t)
                );
            } else {
              if (!m[C]) return object ? t : {};
              _ = (function (object, t, e, n) {
                var r = object.constructor;
                switch (t) {
                  case "[object ArrayBuffer]":
                    return Et(object);
                  case "[object Boolean]":
                  case "[object Date]":
                    return new r(+object);
                  case "[object DataView]":
                    return (function (t, e) {
                      var n = e ? Et(t.buffer) : t.buffer;
                      return new t.constructor(n, t.byteOffset, t.byteLength);
                    })(object, n);
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return (function (t, e) {
                      var n = e ? Et(t.buffer) : t.buffer;
                      return new t.constructor(n, t.byteOffset, t.length);
                    })(object, n);
                  case l:
                    return (function (map, t, e) {
                      return S(
                        t ? e(O(map), !0) : O(map),
                        x,
                        new map.constructor()
                      );
                    })(object, n, e);
                  case "[object Number]":
                  case "[object String]":
                    return new r(object);
                  case "[object RegExp]":
                    return (function (t) {
                      var e = new t.constructor(t.source, h.exec(t));
                      return (e.lastIndex = t.lastIndex), e;
                    })(object);
                  case d:
                    return (function (t, e, n) {
                      return S(e ? n(D(t), !0) : D(t), A, new t.constructor());
                    })(object, n, e);
                  case "[object Symbol]":
                    return (symbol = object), ft ? Object(ft.call(symbol)) : {};
                }
                var symbol;
              })(t, C, wt, e);
            }
          }
          y || (y = new yt());
          var T = y.get(t);
          if (T) return T;
          if ((y.set(t, _), !w))
            var I = n
              ? (function (object) {
                  return (function (object, t, e) {
                    var n = t(object);
                    return Pt(object)
                      ? n
                      : (function (t, e) {
                          for (
                            var n = -1, r = e.length, o = t.length;
                            ++n < r;

                          )
                            t[o + n] = e[n];
                          return t;
                        })(n, e(object));
                  })(object, jt, St);
                })(t)
              : jt(t);
          return (
            (function (t, e) {
              for (
                var n = -1, r = t ? t.length : 0;
                ++n < r && !1 !== e(t[n], n, t);

              );
            })(I || t, function (r, o) {
              I && (r = t[(o = r)]), _t(_, o, wt(r, e, n, f, o, t, y));
            }),
            _
          );
        }
        function Ct(t) {
          return (
            !(!Lt(t) || ((e = t), L && L in e)) &&
            (Rt(t) || N(t) ? U : f).test(Dt(t))
          );
          var e;
        }
        function Et(t) {
          var e = new t.constructor(t.byteLength);
          return new B(e).set(new B(t)), e;
        }
        function Tt(source, t, object, e) {
          object || (object = {});
          for (var n = -1, r = t.length; ++n < r; ) {
            var o = t[n],
              c = e ? e(object[o], source[o], o, object, source) : void 0;
            _t(object, o, void 0 === c ? source[o] : c);
          }
          return object;
        }
        function xt(map, t) {
          var e,
            n,
            data = map.__data__;
          return (
            "string" == (n = typeof (e = t)) ||
            "number" == n ||
            "symbol" == n ||
            "boolean" == n
              ? "__proto__" !== e
              : null === e
          )
            ? data["string" == typeof t ? "string" : "hash"]
            : data.map;
        }
        function At(object, t) {
          var e = (function (object, t) {
            return null == object ? void 0 : object[t];
          })(object, t);
          return Ct(e) ? e : void 0;
        }
        (pt.prototype.clear = function () {
          this.__data__ = ot ? ot(null) : {};
        }),
          (pt.prototype.delete = function (t) {
            return this.has(t) && delete this.__data__[t];
          }),
          (pt.prototype.get = function (t) {
            var data = this.__data__;
            if (ot) {
              var e = data[t];
              return "__lodash_hash_undefined__" === e ? void 0 : e;
            }
            return $.call(data, t) ? data[t] : void 0;
          }),
          (pt.prototype.has = function (t) {
            var data = this.__data__;
            return ot ? void 0 !== data[t] : $.call(data, t);
          }),
          (pt.prototype.set = function (t, e) {
            return (
              (this.__data__[t] =
                ot && void 0 === e ? "__lodash_hash_undefined__" : e),
              this
            );
          }),
          (vt.prototype.clear = function () {
            this.__data__ = [];
          }),
          (vt.prototype.delete = function (t) {
            var data = this.__data__,
              e = bt(data, t);
            return (
              !(e < 0) &&
              (e == data.length - 1 ? data.pop() : G.call(data, e, 1), !0)
            );
          }),
          (vt.prototype.get = function (t) {
            var data = this.__data__,
              e = bt(data, t);
            return e < 0 ? void 0 : data[e][1];
          }),
          (vt.prototype.has = function (t) {
            return bt(this.__data__, t) > -1;
          }),
          (vt.prototype.set = function (t, e) {
            var data = this.__data__,
              n = bt(data, t);
            return n < 0 ? data.push([t, e]) : (data[n][1] = e), this;
          }),
          (mt.prototype.clear = function () {
            this.__data__ = {
              hash: new pt(),
              map: new (tt || vt)(),
              string: new pt(),
            };
          }),
          (mt.prototype.delete = function (t) {
            return xt(this, t).delete(t);
          }),
          (mt.prototype.get = function (t) {
            return xt(this, t).get(t);
          }),
          (mt.prototype.has = function (t) {
            return xt(this, t).has(t);
          }),
          (mt.prototype.set = function (t, e) {
            return xt(this, t).set(t, e), this;
          }),
          (yt.prototype.clear = function () {
            this.__data__ = new vt();
          }),
          (yt.prototype.delete = function (t) {
            return this.__data__.delete(t);
          }),
          (yt.prototype.get = function (t) {
            return this.__data__.get(t);
          }),
          (yt.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (yt.prototype.set = function (t, e) {
            var n = this.__data__;
            if (n instanceof vt) {
              var r = n.__data__;
              if (!tt || r.length < 199) return r.push([t, e]), this;
              n = this.__data__ = new mt(r);
            }
            return n.set(t, e), this;
          });
        var St = Z
            ? I(Z, Object)
            : function () {
                return [];
              },
          Nt = function (t) {
            return H.call(t);
          };
        function Ot(t, e) {
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == typeof t || v.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        }
        function It(t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || F);
        }
        function Dt(t) {
          if (null != t) {
            try {
              return j.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        }
        function kt(t, e) {
          return t === e || (t != t && e != e);
        }
        ((J && "[object DataView]" != Nt(new J(new ArrayBuffer(1)))) ||
          (tt && Nt(new tt()) != l) ||
          (et && "[object Promise]" != Nt(et.resolve())) ||
          (nt && Nt(new nt()) != d) ||
          (it && "[object WeakMap]" != Nt(new it()))) &&
          (Nt = function (t) {
            var e = H.call(t),
              n = "[object Object]" == e ? t.constructor : void 0,
              r = n ? Dt(n) : void 0;
            if (r)
              switch (r) {
                case at:
                  return "[object DataView]";
                case st:
                  return l;
                case ut:
                  return "[object Promise]";
                case ct:
                  return d;
                case lt:
                  return "[object WeakMap]";
              }
            return e;
          });
        var Pt = Array.isArray;
        function Mt(t) {
          return (
            null != t &&
            (function (t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            })(t.length) &&
            !Rt(t)
          );
        }
        var Ft =
          K ||
          function () {
            return !1;
          };
        function Rt(t) {
          var e = Lt(t) ? H.call(t) : "";
          return e == o || e == c;
        }
        function Lt(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function jt(object) {
          return Mt(object)
            ? gt(object)
            : (function (object) {
                if (!It(object)) return X(object);
                var t = [];
                for (var e in Object(object))
                  $.call(object, e) && "constructor" != e && t.push(e);
                return t;
              })(object);
        }
        n.exports = function (t) {
          return wt(t, !0, !0);
        };
      }.call(this, n(40), n(226)(t)));
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return null !== t && "object" == typeof t;
      }
      function o(t, e, n) {
        if (!r(e)) return o(t, {}, n);
        var c = Object.assign({}, e);
        for (var l in t)
          if ("__proto__" !== l && "constructor" !== l) {
            var d = t[l];
            null !== d &&
              ((n && n(c, l, d)) ||
                (Array.isArray(d) && Array.isArray(c[l])
                  ? (c[l] = c[l].concat(d))
                  : r(d) && r(c[l])
                  ? (c[l] = o(d, c[l], n))
                  : (c[l] = d)));
          }
        return c;
      }
      function c(t) {
        return function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return n.reduce(function (p, e) {
            return o(p, e, t);
          }, {});
        };
      }
      var l = c();
      (l.fn = c(function (t, e, n) {
        if (void 0 !== t[e] && "function" == typeof n)
          return (t[e] = n(t[e])), !0;
      })),
        (l.arrayFn = c(function (t, e, n) {
          if (Array.isArray(t[e]) && "function" == typeof n)
            return (t[e] = n(t[e])), !0;
        })),
        (l.extend = c),
        (t.exports = l);
    },
    function (t, e, n) {
      "use strict";
      var r = {
        bind: function (t) {
          t && t.classList.add("tdl-lazy-loader-hide-background-image");
        },
        inserted: function (t) {
          var e =
              "IMG" === t.nodeName || "VIDEO" === t.nodeName
                ? "src"
                : "background",
            n = function () {
              t &&
                "src" === e &&
                (t.addEventListener("error", function () {
                  return console.error(
                    "There was an error loading the content."
                  );
                }),
                (t.src = t.dataset.url)),
                t.classList.remove("tdl-lazy-loader-hide-background-image");
            },
            r = function (e, r) {
              e.forEach(function (e) {
                e.isIntersecting && (n(), r.unobserve(t));
              });
            };
          window.IntersectionObserver
            ? new IntersectionObserver(r, { rootMargin: "300px 0px" }).observe(
                t
              )
            : n();
        },
      };
      e.a = r;
    },
    function (t, e, n) {
      !(function (e, n) {
        var r = (function (t, e, n) {
          "use strict";
          var r, o;
          if (
            ((function () {
              var e,
                n = {
                  lazyClass: "lazyload",
                  loadedClass: "lazyloaded",
                  loadingClass: "lazyloading",
                  preloadClass: "lazypreload",
                  errorClass: "lazyerror",
                  autosizesClass: "lazyautosizes",
                  srcAttr: "data-src",
                  srcsetAttr: "data-srcset",
                  sizesAttr: "data-sizes",
                  minSize: 40,
                  customMedia: {},
                  init: !0,
                  expFactor: 1.5,
                  hFac: 0.8,
                  loadMode: 2,
                  loadHidden: !0,
                  ricTimeout: 0,
                  throttleDelay: 125,
                };
              for (e in ((o = t.lazySizesConfig || t.lazysizesConfig || {}), n))
                e in o || (o[e] = n[e]);
            })(),
            !e || !e.getElementsByClassName)
          )
            return { init: function () {}, cfg: o, noSupport: !0 };
          var c = e.documentElement,
            l = t.HTMLPictureElement,
            d = t.addEventListener.bind(t),
            h = t.setTimeout,
            f = t.requestAnimationFrame || h,
            v = t.requestIdleCallback,
            m = /^picture$/i,
            y = ["load", "error", "lazyincluded", "_lazyloaded"],
            _ = {},
            w = Array.prototype.forEach,
            C = function (t, e) {
              return (
                _[e] || (_[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
                _[e].test(t.getAttribute("class") || "") && _[e]
              );
            },
            E = function (t, e) {
              C(t, e) ||
                t.setAttribute(
                  "class",
                  (t.getAttribute("class") || "").trim() + " " + e
                );
            },
            T = function (t, e) {
              var n;
              (n = C(t, e)) &&
                t.setAttribute(
                  "class",
                  (t.getAttribute("class") || "").replace(n, " ")
                );
            },
            x = function (t, e, n) {
              var r = n ? "addEventListener" : "removeEventListener";
              n && x(t, e),
                y.forEach(function (n) {
                  t[r](n, e);
                });
            },
            A = function (t, n, o, c, l) {
              var d = e.createEvent("Event");
              return (
                o || (o = {}),
                (o.instance = r),
                d.initEvent(n, !c, !l),
                (d.detail = o),
                t.dispatchEvent(d),
                d
              );
            },
            S = function (e, n) {
              var r;
              !l && (r = t.picturefill || o.pf)
                ? (n &&
                    n.src &&
                    !e.getAttribute("srcset") &&
                    e.setAttribute("srcset", n.src),
                  r({ reevaluate: !0, elements: [e] }))
                : n && n.src && (e.src = n.src);
            },
            N = function (t, style) {
              return (getComputedStyle(t, null) || {})[style];
            },
            O = function (t, e, n) {
              for (
                n = n || t.offsetWidth;
                n < o.minSize && e && !t._lazysizesWidth;

              )
                (n = e.offsetWidth), (e = e.parentNode);
              return n;
            },
            I =
              ((Et = []),
              (Tt = []),
              (xt = Et),
              (At = function () {
                var t = xt;
                for (xt = Et.length ? Tt : Et, wt = !0, Ct = !1; t.length; )
                  t.shift()();
                wt = !1;
              }),
              (St = function (t, n) {
                wt && !n
                  ? t.apply(this, arguments)
                  : (xt.push(t), Ct || ((Ct = !0), (e.hidden ? h : f)(At)));
              }),
              (St._lsFlush = At),
              St),
            D = function (t, e) {
              return e
                ? function () {
                    I(t);
                  }
                : function () {
                    var e = this,
                      n = arguments;
                    I(function () {
                      t.apply(e, n);
                    });
                  };
            },
            k = function (t) {
              var e,
                r,
                o = function () {
                  (e = null), t();
                },
                c = function () {
                  var t = n.now() - r;
                  t < 99 ? h(c, 99 - t) : (v || o)(o);
                };
              return function () {
                (r = n.now()), e || (e = h(c, 99));
              };
            },
            P =
              ((J = /^img$/i),
              (tt = /^iframe$/i),
              (et =
                "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent)),
              (nt = 0),
              (it = 0),
              (ot = -1),
              (at = function (t) {
                it--, (!t || it < 0 || !t.target) && (it = 0);
              }),
              (st = function (t) {
                return (
                  null == X && (X = "hidden" == N(e.body, "visibility")),
                  X ||
                    !(
                      "hidden" == N(t.parentNode, "visibility") &&
                      "hidden" == N(t, "visibility")
                    )
                );
              }),
              (ut = function (t, n) {
                var r,
                  o = t,
                  l = st(t);
                for (
                  Y -= n, K += n, G -= n, Z += n;
                  l && (o = o.offsetParent) && o != e.body && o != c;

                )
                  (l = (N(o, "opacity") || 1) > 0) &&
                    "visible" != N(o, "overflow") &&
                    ((r = o.getBoundingClientRect()),
                    (l =
                      Z > r.left &&
                      G < r.right &&
                      K > r.top - 1 &&
                      Y < r.bottom + 1));
                return l;
              }),
              (ct = function () {
                var t,
                  i,
                  rect,
                  n,
                  l,
                  d,
                  h,
                  f,
                  v,
                  m,
                  y,
                  _,
                  w = r.elements;
                if ((W = o.loadMode) && it < 8 && (t = w.length)) {
                  for (i = 0, ot++; i < t; i++)
                    if (w[i] && !w[i]._lazyRace)
                      if (!et || (r.prematureUnveil && r.prematureUnveil(w[i])))
                        yt(w[i]);
                      else if (
                        (((f = w[i].getAttribute("data-expand")) &&
                          (d = 1 * f)) ||
                          (d = nt),
                        m ||
                          ((m =
                            !o.expand || o.expand < 1
                              ? c.clientHeight > 500 && c.clientWidth > 500
                                ? 500
                                : 370
                              : o.expand),
                          (r._defEx = m),
                          (y = m * o.expFactor),
                          (_ = o.hFac),
                          (X = null),
                          nt < y && it < 1 && ot > 2 && W > 2 && !e.hidden
                            ? ((nt = y), (ot = 0))
                            : (nt = W > 1 && ot > 1 && it < 6 ? m : 0)),
                        v !== d &&
                          ((z = innerWidth + d * _),
                          (Q = innerHeight + d),
                          (h = -1 * d),
                          (v = d)),
                        (rect = w[i].getBoundingClientRect()),
                        (K = rect.bottom) >= h &&
                          (Y = rect.top) <= Q &&
                          (Z = rect.right) >= h * _ &&
                          (G = rect.left) <= z &&
                          (K || Z || G || Y) &&
                          (o.loadHidden || st(w[i])) &&
                          ((U && it < 3 && !f && (W < 3 || ot < 4)) ||
                            ut(w[i], d)))
                      ) {
                        if ((yt(w[i]), (l = !0), it > 9)) break;
                      } else
                        !l &&
                          U &&
                          !n &&
                          it < 4 &&
                          ot < 4 &&
                          W > 2 &&
                          (H[0] || o.preloadAfterLoad) &&
                          (H[0] ||
                            (!f &&
                              (K ||
                                Z ||
                                G ||
                                Y ||
                                "auto" != w[i].getAttribute(o.sizesAttr)))) &&
                          (n = H[0] || w[i]);
                  n && !l && yt(n);
                }
              }),
              (lt = (function (t) {
                var e,
                  r = 0,
                  c = o.throttleDelay,
                  l = o.ricTimeout,
                  d = function () {
                    (e = !1), (r = n.now()), t();
                  },
                  f =
                    v && l > 49
                      ? function () {
                          v(d, { timeout: l }),
                            l !== o.ricTimeout && (l = o.ricTimeout);
                        }
                      : D(function () {
                          h(d);
                        }, !0);
                return function (t) {
                  var o;
                  (t = !0 === t) && (l = 33),
                    e ||
                      ((e = !0),
                      (o = c - (n.now() - r)) < 0 && (o = 0),
                      t || o < 9 ? f() : h(f, o));
                };
              })(ct)),
              (ht = function (t) {
                var e = t.target;
                e._lazyCache
                  ? delete e._lazyCache
                  : (at(t),
                    E(e, o.loadedClass),
                    T(e, o.loadingClass),
                    x(e, pt),
                    A(e, "lazyloaded"));
              }),
              (ft = D(ht)),
              (pt = function (t) {
                ft({ target: t.target });
              }),
              (vt = function (source) {
                var t,
                  e = source.getAttribute(o.srcsetAttr);
                (t =
                  o.customMedia[
                    source.getAttribute("data-media") ||
                      source.getAttribute("media")
                  ]) && source.setAttribute("media", t),
                  e && source.setAttribute("srcset", e);
              }),
              (mt = D(function (t, e, n, r, c) {
                var l, d, f, v, y, _;
                (y = A(t, "lazybeforeunveil", e)).defaultPrevented ||
                  (r &&
                    (n ? E(t, o.autosizesClass) : t.setAttribute("sizes", r)),
                  (d = t.getAttribute(o.srcsetAttr)),
                  (l = t.getAttribute(o.srcAttr)),
                  c && (v = (f = t.parentNode) && m.test(f.nodeName || "")),
                  (_ = e.firesLoad || ("src" in t && (d || l || v))),
                  (y = { target: t }),
                  E(t, o.loadingClass),
                  _ && (clearTimeout(V), (V = h(at, 2500)), x(t, pt, !0)),
                  v && w.call(f.getElementsByTagName("source"), vt),
                  d
                    ? t.setAttribute("srcset", d)
                    : l &&
                      !v &&
                      (tt.test(t.nodeName)
                        ? (function (t, e) {
                            try {
                              t.contentWindow.location.replace(e);
                            } catch (n) {
                              t.src = e;
                            }
                          })(t, l)
                        : (t.src = l)),
                  c && (d || v) && S(t, { src: l })),
                  t._lazyRace && delete t._lazyRace,
                  T(t, o.lazyClass),
                  I(function () {
                    var e = t.complete && t.naturalWidth > 1;
                    (_ && !e) ||
                      (e && E(t, "ls-is-cached"),
                      ht(y),
                      (t._lazyCache = !0),
                      h(function () {
                        "_lazyCache" in t && delete t._lazyCache;
                      }, 9)),
                      "lazy" == t.loading && it--;
                  }, !0);
              })),
              (yt = function (t) {
                if (!t._lazyRace) {
                  var e,
                    n = J.test(t.nodeName),
                    r =
                      n &&
                      (t.getAttribute(o.sizesAttr) || t.getAttribute("sizes")),
                    c = "auto" == r;
                  ((!c && U) ||
                    !n ||
                    (!t.getAttribute("src") && !t.srcset) ||
                    t.complete ||
                    C(t, o.errorClass) ||
                    !C(t, o.lazyClass)) &&
                    ((e = A(t, "lazyunveilread").detail),
                    c && M.updateElem(t, !0, t.offsetWidth),
                    (t._lazyRace = !0),
                    it++,
                    mt(t, e, c, r, n));
                }
              }),
              (gt = k(function () {
                (o.loadMode = 3), lt();
              })),
              (_t = function () {
                3 == o.loadMode && (o.loadMode = 2), gt();
              }),
              (bt = function () {
                U ||
                  (n.now() - B < 999
                    ? h(bt, 999)
                    : ((U = !0), (o.loadMode = 3), lt(), d("scroll", _t, !0)));
              }),
              {
                _: function () {
                  (B = n.now()),
                    (r.elements = e.getElementsByClassName(o.lazyClass)),
                    (H = e.getElementsByClassName(
                      o.lazyClass + " " + o.preloadClass
                    )),
                    d("scroll", lt, !0),
                    d("resize", lt, !0),
                    d("pageshow", function (t) {
                      if (t.persisted) {
                        var n = e.querySelectorAll("." + o.loadingClass);
                        n.length &&
                          n.forEach &&
                          f(function () {
                            n.forEach(function (img) {
                              img.complete && yt(img);
                            });
                          });
                      }
                    }),
                    t.MutationObserver
                      ? new MutationObserver(lt).observe(c, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (c.addEventListener("DOMNodeInserted", lt, !0),
                        c.addEventListener("DOMAttrModified", lt, !0),
                        setInterval(lt, 999)),
                    d("hashchange", lt, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (t) {
                      e.addEventListener(t, lt, !0);
                    }),
                    /d$|^c/.test(e.readyState)
                      ? bt()
                      : (d("load", bt),
                        e.addEventListener("DOMContentLoaded", lt),
                        h(bt, 2e4)),
                    r.elements.length ? (ct(), I._lsFlush()) : lt();
                },
                checkElems: lt,
                unveil: yt,
                _aLSL: _t,
              }),
            M =
              ((L = D(function (t, e, n, r) {
                var o, i, c;
                if (
                  ((t._lazysizesWidth = r),
                  (r += "px"),
                  t.setAttribute("sizes", r),
                  m.test(e.nodeName || ""))
                )
                  for (
                    i = 0, c = (o = e.getElementsByTagName("source")).length;
                    i < c;
                    i++
                  )
                    o[i].setAttribute("sizes", r);
                n.detail.dataAttr || S(t, n.detail);
              })),
              (j = function (t, e, n) {
                var r,
                  o = t.parentNode;
                o &&
                  ((n = O(t, o, n)),
                  (r = A(t, "lazybeforesizes", { width: n, dataAttr: !!e }))
                    .defaultPrevented ||
                    ((n = r.detail.width) &&
                      n !== t._lazysizesWidth &&
                      L(t, o, r, n)));
              }),
              ($ = k(function () {
                var i,
                  t = R.length;
                if (t) for (i = 0; i < t; i++) j(R[i]);
              })),
              {
                _: function () {
                  (R = e.getElementsByClassName(o.autosizesClass)),
                    d("resize", $);
                },
                checkElems: $,
                updateElem: j,
              }),
            F = function () {
              !F.i && e.getElementsByClassName && ((F.i = !0), M._(), P._());
            };
          var R, L, j, $;
          var H,
            U,
            V,
            W,
            B,
            z,
            Q,
            Y,
            G,
            Z,
            K,
            X,
            J,
            tt,
            et,
            nt,
            it,
            ot,
            at,
            st,
            ut,
            ct,
            lt,
            ht,
            ft,
            pt,
            vt,
            mt,
            yt,
            gt,
            _t,
            bt;
          var wt, Ct, Et, Tt, xt, At, St;
          return (
            h(function () {
              o.init && F();
            }),
            (r = {
              cfg: o,
              autoSizer: M,
              loader: P,
              init: F,
              uP: S,
              aC: E,
              rC: T,
              hC: C,
              fire: A,
              gW: O,
              rAF: I,
            })
          );
        })(e, e.document, Date);
        (e.lazySizes = r), t.exports && (t.exports = r);
      })("undefined" != typeof window ? window : {});
    },
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return map;
      });
      var r = n(12),
        o = n(27);
      function map(t, e) {
        return function (source) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return source.lift(new c(t, e));
        };
      }
      var c = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, source) {
              return source.subscribe(new l(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        l = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            e
          );
        })(o.a);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(335);
    },
    function (t, e, n) {
      "use strict";
      (function (r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(201),
          c = n(12),
          l = n(152),
          d = n(203),
          component = n(202);
        function h(t) {
          return t && "object" == typeof t && "default" in t
            ? t
            : { default: t };
        }
        var f,
          v = h(o),
          m = (function () {
            function t(t) {
              (this.domStorage_ = t), (this.prefix_ = "firebase:");
            }
            return (
              (t.prototype.set = function (t, e) {
                null == e
                  ? this.domStorage_.removeItem(this.prefixedName_(t))
                  : this.domStorage_.setItem(
                      this.prefixedName_(t),
                      l.stringify(e)
                    );
              }),
              (t.prototype.get = function (t) {
                var e = this.domStorage_.getItem(this.prefixedName_(t));
                return null == e ? null : l.jsonEval(e);
              }),
              (t.prototype.remove = function (t) {
                this.domStorage_.removeItem(this.prefixedName_(t));
              }),
              (t.prototype.prefixedName_ = function (t) {
                return this.prefix_ + t;
              }),
              (t.prototype.toString = function () {
                return this.domStorage_.toString();
              }),
              t
            );
          })(),
          y = (function () {
            function t() {
              (this.cache_ = {}), (this.isInMemoryStorage = !0);
            }
            return (
              (t.prototype.set = function (t, e) {
                null == e ? delete this.cache_[t] : (this.cache_[t] = e);
              }),
              (t.prototype.get = function (t) {
                return l.contains(this.cache_, t) ? this.cache_[t] : null;
              }),
              (t.prototype.remove = function (t) {
                delete this.cache_[t];
              }),
              t
            );
          })(),
          _ = function (t) {
            try {
              if ("undefined" != typeof window && void 0 !== window[t]) {
                var e = window[t];
                return (
                  e.setItem("firebase:sentinel", "cache"),
                  e.removeItem("firebase:sentinel"),
                  new m(e)
                );
              }
            } catch (t) {}
            return new y();
          },
          w = _("localStorage"),
          C = _("sessionStorage"),
          E = new d.Logger("@firebase/database"),
          T =
            ((f = 1),
            function () {
              return f++;
            }),
          x = function (t) {
            var e = l.stringToByteArray(t),
              n = new l.Sha1();
            n.update(e);
            var r = n.digest();
            return l.base64.encodeByteArray(r);
          },
          A = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            for (var n = "", i = 0; i < t.length; i++) {
              var r = t[i];
              Array.isArray(r) ||
              (r && "object" == typeof r && "number" == typeof r.length)
                ? (n += A.apply(null, r))
                : (n += "object" == typeof r ? l.stringify(r) : r),
                (n += " ");
            }
            return n;
          },
          S = null,
          N = !0,
          O = function (t, e) {
            l.assert(
              !e || !0 === t || !1 === t,
              "Can't turn on custom loggers persistently."
            ),
              !0 === t
                ? ((E.logLevel = d.LogLevel.VERBOSE),
                  (S = E.log.bind(E)),
                  e && C.set("logging_enabled", !0))
                : "function" == typeof t
                ? (S = t)
                : ((S = null), C.remove("logging_enabled"));
          },
          I = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if (
              (!0 === N &&
                ((N = !1),
                null === S && !0 === C.get("logging_enabled") && O(!0)),
              S)
            ) {
              var n = A.apply(null, t);
              S(n);
            }
          },
          D = function (t) {
            return function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              I.apply(void 0, c.__spread([t], e));
            };
          },
          k = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n =
              "FIREBASE INTERNAL ERROR: " + A.apply(void 0, c.__spread(t));
            E.error(n);
          },
          P = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = "FIREBASE FATAL ERROR: " + A.apply(void 0, c.__spread(t));
            throw (E.error(n), new Error(n));
          },
          M = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = "FIREBASE WARNING: " + A.apply(void 0, c.__spread(t));
            E.warn(n);
          },
          F = function (data) {
            return (
              "number" == typeof data &&
              (data != data ||
                data === Number.POSITIVE_INFINITY ||
                data === Number.NEGATIVE_INFINITY)
            );
          },
          R = "[MIN_NAME]",
          L = "[MAX_NAME]",
          j = function (a, b) {
            if (a === b) return 0;
            if (a === R || b === L) return -1;
            if (b === R || a === L) return 1;
            var t = Q(a),
              e = Q(b);
            return null !== t
              ? null !== e
                ? t - e == 0
                  ? a.length - b.length
                  : t - e
                : -1
              : null !== e
              ? 1
              : a < b
              ? -1
              : 1;
          },
          $ = function (a, b) {
            return a === b ? 0 : a < b ? -1 : 1;
          },
          H = function (t, e) {
            if (e && t in e) return e[t];
            throw new Error(
              "Missing required key (" + t + ") in object: " + l.stringify(e)
            );
          },
          U = function (t) {
            if ("object" != typeof t || null === t) return l.stringify(t);
            var e = [];
            for (var n in t) e.push(n);
            e.sort();
            for (var r = "{", i = 0; i < e.length; i++)
              0 !== i && (r += ","),
                (r += l.stringify(e[i])),
                (r += ":"),
                (r += U(t[e[i]]));
            return (r += "}");
          },
          V = function (t, e) {
            var n = t.length;
            if (n <= e) return [t];
            for (var r = [], o = 0; o < n; o += e)
              o + e > n
                ? r.push(t.substring(o, n))
                : r.push(t.substring(o, o + e));
            return r;
          };
        function W(t, e) {
          for (var n in t) t.hasOwnProperty(n) && e(n, t[n]);
        }
        var B = function (t) {
            l.assert(!F(t), "Invalid JSON number");
            var s, e, n, r, i;
            0 === t
              ? ((e = 0), (n = 0), (s = 1 / t == -1 / 0 ? 1 : 0))
              : ((s = t < 0),
                (t = Math.abs(t)) >= Math.pow(2, -1022)
                  ? ((e =
                      (r = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) +
                      1023),
                    (n = Math.round(t * Math.pow(2, 52 - r) - Math.pow(2, 52))))
                  : ((e = 0), (n = Math.round(t / Math.pow(2, -1074)))));
            var o = [];
            for (i = 52; i; i -= 1)
              o.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
            for (i = 11; i; i -= 1)
              o.push(e % 2 ? 1 : 0), (e = Math.floor(e / 2));
            o.push(s ? 1 : 0), o.reverse();
            var c = o.join(""),
              d = "";
            for (i = 0; i < 64; i += 8) {
              var h = parseInt(c.substr(i, 8), 2).toString(16);
              1 === h.length && (h = "0" + h), (d += h);
            }
            return d.toLowerCase();
          },
          z = new RegExp("^-?(0*)\\d{1,10}$"),
          Q = function (t) {
            if (z.test(t)) {
              var e = Number(t);
              if (e >= -2147483648 && e <= 2147483647) return e;
            }
            return null;
          },
          Y = function (t) {
            try {
              t();
            } catch (t) {
              setTimeout(function () {
                var e = t.stack || "";
                throw (M("Exception was thrown by user callback.", e), t);
              }, Math.floor(0));
            }
          },
          G = function (t, time) {
            var e = setTimeout(t, time);
            return "object" == typeof e && e.unref && e.unref(), e;
          },
          Z = (function () {
            function t(t, e) {
              if (void 0 === e) {
                this.pieces_ = t.split("/");
                for (var n = 0, i = 0; i < this.pieces_.length; i++)
                  this.pieces_[i].length > 0 &&
                    ((this.pieces_[n] = this.pieces_[i]), n++);
                (this.pieces_.length = n), (this.pieceNum_ = 0);
              } else (this.pieces_ = t), (this.pieceNum_ = e);
            }
            return (
              Object.defineProperty(t, "Empty", {
                get: function () {
                  return new t("");
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.getFront = function () {
                return this.pieceNum_ >= this.pieces_.length
                  ? null
                  : this.pieces_[this.pieceNum_];
              }),
              (t.prototype.getLength = function () {
                return this.pieces_.length - this.pieceNum_;
              }),
              (t.prototype.popFront = function () {
                var e = this.pieceNum_;
                return e < this.pieces_.length && e++, new t(this.pieces_, e);
              }),
              (t.prototype.getBack = function () {
                return this.pieceNum_ < this.pieces_.length
                  ? this.pieces_[this.pieces_.length - 1]
                  : null;
              }),
              (t.prototype.toString = function () {
                for (
                  var t = "", i = this.pieceNum_;
                  i < this.pieces_.length;
                  i++
                )
                  "" !== this.pieces_[i] && (t += "/" + this.pieces_[i]);
                return t || "/";
              }),
              (t.prototype.toUrlEncodedString = function () {
                for (
                  var t = "", i = this.pieceNum_;
                  i < this.pieces_.length;
                  i++
                )
                  "" !== this.pieces_[i] &&
                    (t += "/" + encodeURIComponent(String(this.pieces_[i])));
                return t || "/";
              }),
              (t.prototype.slice = function (t) {
                return (
                  void 0 === t && (t = 0),
                  this.pieces_.slice(this.pieceNum_ + t)
                );
              }),
              (t.prototype.parent = function () {
                if (this.pieceNum_ >= this.pieces_.length) return null;
                for (
                  var e = [], i = this.pieceNum_;
                  i < this.pieces_.length - 1;
                  i++
                )
                  e.push(this.pieces_[i]);
                return new t(e, 0);
              }),
              (t.prototype.child = function (e) {
                for (
                  var n = [], i = this.pieceNum_;
                  i < this.pieces_.length;
                  i++
                )
                  n.push(this.pieces_[i]);
                if (e instanceof t)
                  for (i = e.pieceNum_; i < e.pieces_.length; i++)
                    n.push(e.pieces_[i]);
                else {
                  var r = e.split("/");
                  for (i = 0; i < r.length; i++)
                    r[i].length > 0 && n.push(r[i]);
                }
                return new t(n, 0);
              }),
              (t.prototype.isEmpty = function () {
                return this.pieceNum_ >= this.pieces_.length;
              }),
              (t.relativePath = function (e, n) {
                var r = e.getFront(),
                  o = n.getFront();
                if (null === r) return n;
                if (r === o) return t.relativePath(e.popFront(), n.popFront());
                throw new Error(
                  "INTERNAL ERROR: innerPath (" +
                    n +
                    ") is not within outerPath (" +
                    e +
                    ")"
                );
              }),
              (t.comparePaths = function (t, e) {
                for (
                  var n = t.slice(), r = e.slice(), i = 0;
                  i < n.length && i < r.length;
                  i++
                ) {
                  var o = j(n[i], r[i]);
                  if (0 !== o) return o;
                }
                return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
              }),
              (t.prototype.equals = function (t) {
                if (this.getLength() !== t.getLength()) return !1;
                for (
                  var i = this.pieceNum_, e = t.pieceNum_;
                  i <= this.pieces_.length;
                  i++, e++
                )
                  if (this.pieces_[i] !== t.pieces_[e]) return !1;
                return !0;
              }),
              (t.prototype.contains = function (t) {
                var i = this.pieceNum_,
                  e = t.pieceNum_;
                if (this.getLength() > t.getLength()) return !1;
                for (; i < this.pieces_.length; ) {
                  if (this.pieces_[i] !== t.pieces_[e]) return !1;
                  ++i, ++e;
                }
                return !0;
              }),
              t
            );
          })(),
          K = (function () {
            function t(path, t) {
              (this.errorPrefix_ = t),
                (this.parts_ = path.slice()),
                (this.byteLength_ = Math.max(1, this.parts_.length));
              for (var i = 0; i < this.parts_.length; i++)
                this.byteLength_ += l.stringLength(this.parts_[i]);
              this.checkValid_();
            }
            return (
              Object.defineProperty(t, "MAX_PATH_DEPTH", {
                get: function () {
                  return 32;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t, "MAX_PATH_LENGTH_BYTES", {
                get: function () {
                  return 768;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.push = function (t) {
                this.parts_.length > 0 && (this.byteLength_ += 1),
                  this.parts_.push(t),
                  (this.byteLength_ += l.stringLength(t)),
                  this.checkValid_();
              }),
              (t.prototype.pop = function () {
                var t = this.parts_.pop();
                (this.byteLength_ -= l.stringLength(t)),
                  this.parts_.length > 0 && (this.byteLength_ -= 1);
              }),
              (t.prototype.checkValid_ = function () {
                if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES)
                  throw new Error(
                    this.errorPrefix_ +
                      "has a key path longer than " +
                      t.MAX_PATH_LENGTH_BYTES +
                      " bytes (" +
                      this.byteLength_ +
                      ")."
                  );
                if (this.parts_.length > t.MAX_PATH_DEPTH)
                  throw new Error(
                    this.errorPrefix_ +
                      "path specified exceeds the maximum depth that can be written (" +
                      t.MAX_PATH_DEPTH +
                      ") or object contains a cycle " +
                      this.toErrorString()
                  );
              }),
              (t.prototype.toErrorString = function () {
                return 0 === this.parts_.length
                  ? ""
                  : "in property '" + this.parts_.join(".") + "'";
              }),
              t
            );
          })(),
          X = (function () {
            function t(t, e, n, r, o, c, l) {
              void 0 === o && (o = !1),
                void 0 === c && (c = ""),
                void 0 === l && (l = !1),
                (this.secure = e),
                (this.namespace = n),
                (this.webSocketOnly = r),
                (this.nodeAdmin = o),
                (this.persistenceKey = c),
                (this.includeNamespaceInQueryParams = l),
                (this.host = t.toLowerCase()),
                (this.domain = this.host.substr(this.host.indexOf(".") + 1)),
                (this.internalHost = w.get("host:" + t) || this.host);
            }
            return (
              (t.prototype.needsQueryParam = function () {
                return (
                  this.host !== this.internalHost ||
                  this.isCustomHost() ||
                  this.includeNamespaceInQueryParams
                );
              }),
              (t.prototype.isCacheableHost = function () {
                return "s-" === this.internalHost.substr(0, 2);
              }),
              (t.prototype.isDemoHost = function () {
                return "firebaseio-demo.com" === this.domain;
              }),
              (t.prototype.isCustomHost = function () {
                return (
                  "firebaseio.com" !== this.domain &&
                  "firebaseio-demo.com" !== this.domain
                );
              }),
              (t.prototype.updateHost = function (t) {
                t !== this.internalHost &&
                  ((this.internalHost = t),
                  this.isCacheableHost() &&
                    w.set("host:" + this.host, this.internalHost));
              }),
              (t.prototype.connectionURL = function (t, e) {
                var n;
                if (
                  (l.assert("string" == typeof t, "typeof type must == string"),
                  l.assert(
                    "object" == typeof e,
                    "typeof params must == object"
                  ),
                  "websocket" === t)
                )
                  n =
                    (this.secure ? "wss://" : "ws://") +
                    this.internalHost +
                    "/.ws?";
                else {
                  if ("long_polling" !== t)
                    throw new Error("Unknown connection type: " + t);
                  n =
                    (this.secure ? "https://" : "http://") +
                    this.internalHost +
                    "/.lp?";
                }
                this.needsQueryParam() && (e.ns = this.namespace);
                var r = [];
                return (
                  W(e, function (t, e) {
                    r.push(t + "=" + e);
                  }),
                  n + r.join("&")
                );
              }),
              (t.prototype.toString = function () {
                var t = this.toURLString();
                return (
                  this.persistenceKey && (t += "<" + this.persistenceKey + ">"),
                  t
                );
              }),
              (t.prototype.toURLString = function () {
                return (this.secure ? "https://" : "http://") + this.host;
              }),
              t
            );
          })();
        var J,
          tt,
          et,
          nt,
          it,
          ot = function (t, e) {
            var n = at(t),
              r = n.namespace;
            "firebase.com" === n.domain &&
              P(
                n.host +
                  " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
              ),
              (r && "undefined" !== r) ||
                "localhost" === n.domain ||
                P(
                  "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
                ),
              n.secure ||
                ("undefined" != typeof window &&
                  window.location &&
                  window.location.protocol &&
                  -1 !== window.location.protocol.indexOf("https:") &&
                  M(
                    "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
                  ));
            var o = "ws" === n.scheme || "wss" === n.scheme;
            return {
              repoInfo: new X(n.host, n.secure, r, e, o, "", r !== n.subdomain),
              path: new Z(n.pathString),
            };
          },
          at = function (t) {
            var e = "",
              n = "",
              r = "",
              o = "",
              l = "",
              d = !0,
              h = "https",
              f = 443;
            if ("string" == typeof t) {
              var v = t.indexOf("//");
              v >= 0 && ((h = t.substring(0, v - 1)), (t = t.substring(v + 2)));
              var m = t.indexOf("/");
              -1 === m && (m = t.length);
              var y = t.indexOf("?");
              -1 === y && (y = t.length),
                (e = t.substring(0, Math.min(m, y))),
                m < y &&
                  (o = (function (t) {
                    for (var e = "", n = t.split("/"), i = 0; i < n.length; i++)
                      if (n[i].length > 0) {
                        var r = n[i];
                        try {
                          r = decodeURIComponent(r.replace(/\+/g, " "));
                        } catch (t) {}
                        e += "/" + r;
                      }
                    return e;
                  })(t.substring(m, y)));
              var _ = (function (t) {
                var e,
                  n,
                  r = {};
                "?" === t.charAt(0) && (t = t.substring(1));
                try {
                  for (
                    var o = c.__values(t.split("&")), l = o.next();
                    !l.done;
                    l = o.next()
                  ) {
                    var d = l.value;
                    if (0 !== d.length) {
                      var h = d.split("=");
                      2 === h.length
                        ? (r[decodeURIComponent(h[0])] = decodeURIComponent(
                            h[1]
                          ))
                        : M(
                            "Invalid query segment '" +
                              d +
                              "' in query '" +
                              t +
                              "'"
                          );
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    l && !l.done && (n = o.return) && n.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r;
              })(t.substring(Math.min(t.length, y)));
              (v = e.indexOf(":")) >= 0
                ? ((d = "https" === h || "wss" === h),
                  (f = parseInt(e.substring(v + 1), 10)))
                : (v = e.length);
              var w = e.slice(0, v);
              if ("localhost" === w.toLowerCase()) n = "localhost";
              else if (w.split(".").length <= 2) n = w;
              else {
                var C = e.indexOf(".");
                (r = e.substring(0, C).toLowerCase()),
                  (n = e.substring(C + 1)),
                  (l = r);
              }
              "ns" in _ && (l = _.ns);
            }
            return {
              host: e,
              port: f,
              domain: n,
              subdomain: r,
              secure: d,
              scheme: h,
              pathString: o,
              namespace: l,
            };
          },
          st = /[\[\].#$\/\u0000-\u001F\u007F]/,
          ut = /[\[\].#$\u0000-\u001F\u007F]/,
          ct = function (t) {
            return "string" == typeof t && 0 !== t.length && !st.test(t);
          },
          lt = function (t) {
            return "string" == typeof t && 0 !== t.length && !ut.test(t);
          },
          ht = function (t) {
            return (
              null === t ||
              "string" == typeof t ||
              ("number" == typeof t && !F(t)) ||
              (t && "object" == typeof t && l.contains(t, ".sv"))
            );
          },
          ft = function (t, e, data, path, n) {
            (n && void 0 === data) || pt(l.errorPrefix(t, e, n), data, path);
          },
          pt = function (t, data, e) {
            var path = e instanceof Z ? new K(e, t) : e;
            if (void 0 === data)
              throw new Error(t + "contains undefined " + path.toErrorString());
            if ("function" == typeof data)
              throw new Error(
                t +
                  "contains a function " +
                  path.toErrorString() +
                  " with contents = " +
                  data.toString()
              );
            if (F(data))
              throw new Error(
                t + "contains " + data.toString() + " " + path.toErrorString()
              );
            if (
              "string" == typeof data &&
              data.length > 10485760 / 3 &&
              l.stringLength(data) > 10485760
            )
              throw new Error(
                t +
                  "contains a string greater than 10485760 utf8 bytes " +
                  path.toErrorString() +
                  " ('" +
                  data.substring(0, 50) +
                  "...')"
              );
            if (data && "object" == typeof data) {
              var n = !1,
                r = !1;
              if (
                (W(data, function (e, o) {
                  if (".value" === e) n = !0;
                  else if (
                    ".priority" !== e &&
                    ".sv" !== e &&
                    ((r = !0), !ct(e))
                  )
                    throw new Error(
                      t +
                        " contains an invalid key (" +
                        e +
                        ") " +
                        path.toErrorString() +
                        '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    );
                  path.push(e), pt(t, o, path), path.pop();
                }),
                n && r)
              )
                throw new Error(
                  t +
                    ' contains ".value" child ' +
                    path.toErrorString() +
                    " in addition to actual children."
                );
            }
          },
          vt = function (t, e, data, path, n) {
            if (!n || void 0 !== data) {
              var r = l.errorPrefix(t, e, n);
              if (!data || "object" != typeof data || Array.isArray(data))
                throw new Error(
                  r + " must be an object containing the children to replace."
                );
              var o = [];
              W(data, function (t, e) {
                var n = new Z(t);
                if (
                  (pt(r, e, path.child(n)),
                  ".priority" === n.getBack() && !ht(e))
                )
                  throw new Error(
                    r +
                      "contains an invalid value for '" +
                      n.toString() +
                      "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                  );
                o.push(n);
              }),
                (function (t, e) {
                  var i, n;
                  for (i = 0; i < e.length; i++)
                    for (var r = (n = e[i]).slice(), o = 0; o < r.length; o++)
                      if (".priority" === r[o] && o === r.length - 1);
                      else if (!ct(r[o]))
                        throw new Error(
                          t +
                            "contains an invalid key (" +
                            r[o] +
                            ") in path " +
                            n.toString() +
                            '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                        );
                  e.sort(Z.comparePaths);
                  var c = null;
                  for (i = 0; i < e.length; i++) {
                    if (((n = e[i]), null !== c && c.contains(n)))
                      throw new Error(
                        t +
                          "contains a path " +
                          c.toString() +
                          " that is ancestor of another path " +
                          n.toString()
                      );
                    c = n;
                  }
                })(r, o);
            }
          },
          mt = function (t, e, n, r) {
            if (!r || void 0 !== n) {
              if (F(n))
                throw new Error(
                  l.errorPrefix(t, e, r) +
                    "is " +
                    n.toString() +
                    ", but must be a valid Firebase priority (a string, finite number, server value, or null)."
                );
              if (!ht(n))
                throw new Error(
                  l.errorPrefix(t, e, r) +
                    "must be a valid Firebase priority (a string, finite number, server value, or null)."
                );
            }
          },
          yt = function (t, e, n, r) {
            if (!r || void 0 !== n)
              switch (n) {
                case "value":
                case "child_added":
                case "child_removed":
                case "child_changed":
                case "child_moved":
                  break;
                default:
                  throw new Error(
                    l.errorPrefix(t, e, r) +
                      'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                  );
              }
          },
          gt = function (t, e, n, r) {
            if (!((r && void 0 === n) || ct(n)))
              throw new Error(
                l.errorPrefix(t, e, r) +
                  'was an invalid key = "' +
                  n +
                  '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
              );
          },
          _t = function (t, e, n, r) {
            if (!((r && void 0 === n) || lt(n)))
              throw new Error(
                l.errorPrefix(t, e, r) +
                  'was an invalid path = "' +
                  n +
                  '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
              );
          },
          bt = function (t, e, n, r) {
            n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), _t(t, e, n, r);
          },
          wt = function (t, path) {
            if (".info" === path.getFront())
              throw new Error(t + " failed = Can't modify data under /.info/");
          },
          Ct = function (t, e, n) {
            var r = n.path.toString();
            if (
              "string" != typeof n.repoInfo.host ||
              0 === n.repoInfo.host.length ||
              (!ct(n.repoInfo.namespace) &&
                "localhost" !== n.repoInfo.host.split(":")[0]) ||
              (0 !== r.length &&
                !(function (t) {
                  return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), lt(t);
                })(r))
            )
              throw new Error(
                l.errorPrefix(t, e, !1) +
                  'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
              );
          },
          Et = function (t, e, n, r) {
            if ((!r || void 0 !== n) && "boolean" != typeof n)
              throw new Error(l.errorPrefix(t, e, r) + "must be a boolean.");
          },
          Tt = (function () {
            function t(t, e) {
              (this.repo_ = t), (this.path_ = e);
            }
            return (
              (t.prototype.cancel = function (t) {
                l.validateArgCount(
                  "OnDisconnect.cancel",
                  0,
                  1,
                  arguments.length
                ),
                  l.validateCallback("OnDisconnect.cancel", 1, t, !0);
                var e = new l.Deferred();
                return (
                  this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)),
                  e.promise
                );
              }),
              (t.prototype.remove = function (t) {
                l.validateArgCount(
                  "OnDisconnect.remove",
                  0,
                  1,
                  arguments.length
                ),
                  wt("OnDisconnect.remove", this.path_),
                  l.validateCallback("OnDisconnect.remove", 1, t, !0);
                var e = new l.Deferred();
                return (
                  this.repo_.onDisconnectSet(
                    this.path_,
                    null,
                    e.wrapCallback(t)
                  ),
                  e.promise
                );
              }),
              (t.prototype.set = function (t, e) {
                l.validateArgCount("OnDisconnect.set", 1, 2, arguments.length),
                  wt("OnDisconnect.set", this.path_),
                  ft("OnDisconnect.set", 1, t, this.path_, !1),
                  l.validateCallback("OnDisconnect.set", 2, e, !0);
                var n = new l.Deferred();
                return (
                  this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)),
                  n.promise
                );
              }),
              (t.prototype.setWithPriority = function (t, e, n) {
                l.validateArgCount(
                  "OnDisconnect.setWithPriority",
                  2,
                  3,
                  arguments.length
                ),
                  wt("OnDisconnect.setWithPriority", this.path_),
                  ft("OnDisconnect.setWithPriority", 1, t, this.path_, !1),
                  mt("OnDisconnect.setWithPriority", 2, e, !1),
                  l.validateCallback("OnDisconnect.setWithPriority", 3, n, !0);
                var r = new l.Deferred();
                return (
                  this.repo_.onDisconnectSetWithPriority(
                    this.path_,
                    t,
                    e,
                    r.wrapCallback(n)
                  ),
                  r.promise
                );
              }),
              (t.prototype.update = function (t, e) {
                if (
                  (l.validateArgCount(
                    "OnDisconnect.update",
                    1,
                    2,
                    arguments.length
                  ),
                  wt("OnDisconnect.update", this.path_),
                  Array.isArray(t))
                ) {
                  for (var n = {}, i = 0; i < t.length; ++i) n["" + i] = t[i];
                  (t = n),
                    M(
                      "Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
                    );
                }
                vt("OnDisconnect.update", 1, t, this.path_, !1),
                  l.validateCallback("OnDisconnect.update", 2, e, !0);
                var r = new l.Deferred();
                return (
                  this.repo_.onDisconnectUpdate(
                    this.path_,
                    t,
                    r.wrapCallback(e)
                  ),
                  r.promise
                );
              }),
              t
            );
          })(),
          xt = (function () {
            function t(t, e) {
              (this.committed = t), (this.snapshot = e);
            }
            return (
              (t.prototype.toJSON = function () {
                return (
                  l.validateArgCount(
                    "TransactionResult.toJSON",
                    0,
                    1,
                    arguments.length
                  ),
                  {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON(),
                  }
                );
              }),
              t
            );
          })(),
          At =
            ((J =
              "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"),
            (tt = 0),
            (et = []),
            function (t) {
              var i,
                e = t === tt;
              tt = t;
              var n = new Array(8);
              for (i = 7; i >= 0; i--)
                (n[i] = J.charAt(t % 64)), (t = Math.floor(t / 64));
              l.assert(0 === t, "Cannot push at time == 0");
              var r = n.join("");
              if (e) {
                for (i = 11; i >= 0 && 63 === et[i]; i--) et[i] = 0;
                et[i]++;
              } else
                for (i = 0; i < 12; i++) et[i] = Math.floor(64 * Math.random());
              for (i = 0; i < 12; i++) r += J.charAt(et[i]);
              return (
                l.assert(20 === r.length, "nextPushId: Length should be 20."), r
              );
            }),
          St = (function () {
            function t(t, e) {
              (this.name = t), (this.node = e);
            }
            return (
              (t.Wrap = function (e, n) {
                return new t(e, n);
              }),
              t
            );
          })(),
          Nt = (function () {
            function t() {}
            return (
              (t.prototype.getCompare = function () {
                return this.compare.bind(this);
              }),
              (t.prototype.indexedValueChanged = function (t, e) {
                var n = new St(R, t),
                  r = new St(R, e);
                return 0 !== this.compare(n, r);
              }),
              (t.prototype.minPost = function () {
                return St.MIN;
              }),
              t
            );
          })(),
          Ot = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              c.__extends(e, t),
              Object.defineProperty(e, "__EMPTY_NODE", {
                get: function () {
                  return nt;
                },
                set: function (t) {
                  nt = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.compare = function (a, b) {
                return j(a.name, b.name);
              }),
              (e.prototype.isDefinedOn = function (t) {
                throw l.assertionError(
                  "KeyIndex.isDefinedOn not expected to be called."
                );
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !1;
              }),
              (e.prototype.minPost = function () {
                return St.MIN;
              }),
              (e.prototype.maxPost = function () {
                return new St(L, nt);
              }),
              (e.prototype.makePost = function (t, e) {
                return (
                  l.assert(
                    "string" == typeof t,
                    "KeyIndex indexValue must always be a string."
                  ),
                  new St(t, nt)
                );
              }),
              (e.prototype.toString = function () {
                return ".key";
              }),
              e
            );
          })(Nt),
          It = new Ot();
        var Dt,
          kt,
          Pt,
          Mt = function (t) {
            return "number" == typeof t ? "number:" + B(t) : "string:" + t;
          },
          Ft = function (t) {
            if (t.isLeafNode()) {
              var e = t.val();
              l.assert(
                "string" == typeof e ||
                  "number" == typeof e ||
                  ("object" == typeof e && l.contains(e, ".sv")),
                "Priority must be a string or number."
              );
            } else
              l.assert(t === it || t.isEmpty(), "priority of unexpected type.");
            l.assert(
              t === it || t.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            );
          },
          Rt = (function () {
            function t(e, n) {
              void 0 === n && (n = t.__childrenNodeConstructor.EMPTY_NODE),
                (this.value_ = e),
                (this.priorityNode_ = n),
                (this.lazyHash_ = null),
                l.assert(
                  void 0 !== this.value_ && null !== this.value_,
                  "LeafNode shouldn't be created with null/undefined value."
                ),
                Ft(this.priorityNode_);
            }
            return (
              Object.defineProperty(t, "__childrenNodeConstructor", {
                get: function () {
                  return Dt;
                },
                set: function (t) {
                  Dt = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isLeafNode = function () {
                return !0;
              }),
              (t.prototype.getPriority = function () {
                return this.priorityNode_;
              }),
              (t.prototype.updatePriority = function (e) {
                return new t(this.value_, e);
              }),
              (t.prototype.getImmediateChild = function (e) {
                return ".priority" === e
                  ? this.priorityNode_
                  : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.getChild = function (path) {
                return path.isEmpty()
                  ? this
                  : ".priority" === path.getFront()
                  ? this.priorityNode_
                  : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.hasChild = function () {
                return !1;
              }),
              (t.prototype.getPredecessorChildName = function (t, e) {
                return null;
              }),
              (t.prototype.updateImmediateChild = function (e, n) {
                return ".priority" === e
                  ? this.updatePriority(n)
                  : n.isEmpty() && ".priority" !== e
                  ? this
                  : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                      e,
                      n
                    ).updatePriority(this.priorityNode_);
              }),
              (t.prototype.updateChild = function (path, e) {
                var n = path.getFront();
                return null === n
                  ? e
                  : e.isEmpty() && ".priority" !== n
                  ? this
                  : (l.assert(
                      ".priority" !== n || 1 === path.getLength(),
                      ".priority must be the last token in a path"
                    ),
                    this.updateImmediateChild(
                      n,
                      t.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                        path.popFront(),
                        e
                      )
                    ));
              }),
              (t.prototype.isEmpty = function () {
                return !1;
              }),
              (t.prototype.numChildren = function () {
                return 0;
              }),
              (t.prototype.forEachChild = function (t, e) {
                return !1;
              }),
              (t.prototype.val = function (t) {
                return t && !this.getPriority().isEmpty()
                  ? {
                      ".value": this.getValue(),
                      ".priority": this.getPriority().val(),
                    }
                  : this.getValue();
              }),
              (t.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var t = "";
                  this.priorityNode_.isEmpty() ||
                    (t += "priority:" + Mt(this.priorityNode_.val()) + ":");
                  var e = typeof this.value_;
                  (t += e + ":"),
                    (t += "number" === e ? B(this.value_) : this.value_),
                    (this.lazyHash_ = x(t));
                }
                return this.lazyHash_;
              }),
              (t.prototype.getValue = function () {
                return this.value_;
              }),
              (t.prototype.compareTo = function (e) {
                return e === t.__childrenNodeConstructor.EMPTY_NODE
                  ? 1
                  : e instanceof t.__childrenNodeConstructor
                  ? -1
                  : (l.assert(e.isLeafNode(), "Unknown node type"),
                    this.compareToLeafNode_(e));
              }),
              (t.prototype.compareToLeafNode_ = function (e) {
                var n = typeof e.value_,
                  r = typeof this.value_,
                  o = t.VALUE_TYPE_ORDER.indexOf(n),
                  c = t.VALUE_TYPE_ORDER.indexOf(r);
                return (
                  l.assert(o >= 0, "Unknown leaf type: " + n),
                  l.assert(c >= 0, "Unknown leaf type: " + r),
                  o === c
                    ? "object" === r
                      ? 0
                      : this.value_ < e.value_
                      ? -1
                      : this.value_ === e.value_
                      ? 0
                      : 1
                    : c - o
                );
              }),
              (t.prototype.withIndex = function () {
                return this;
              }),
              (t.prototype.isIndexed = function () {
                return !0;
              }),
              (t.prototype.equals = function (t) {
                if (t === this) return !0;
                if (t.isLeafNode()) {
                  var e = t;
                  return (
                    this.value_ === e.value_ &&
                    this.priorityNode_.equals(e.priorityNode_)
                  );
                }
                return !1;
              }),
              (t.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"]),
              t
            );
          })();
        var Lt,
          jt,
          $t = new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              c.__extends(e, t),
              (e.prototype.compare = function (a, b) {
                var t = a.node.getPriority(),
                  e = b.node.getPriority(),
                  n = t.compareTo(e);
                return 0 === n ? j(a.name, b.name) : n;
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !t.getPriority().isEmpty();
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !t.getPriority().equals(e.getPriority());
              }),
              (e.prototype.minPost = function () {
                return St.MIN;
              }),
              (e.prototype.maxPost = function () {
                return new St(L, new Rt("[PRIORITY-POST]", Pt));
              }),
              (e.prototype.makePost = function (t, e) {
                var n = kt(t);
                return new St(e, new Rt("[PRIORITY-POST]", n));
              }),
              (e.prototype.toString = function () {
                return ".priority";
              }),
              e
            );
          })(Nt))(),
          Ht = (function () {
            function t(t, e, n, r, o) {
              void 0 === o && (o = null),
                (this.isReverse_ = r),
                (this.resultGenerator_ = o),
                (this.nodeStack_ = []);
              for (var c = 1; !t.isEmpty(); )
                if (((t = t), (c = e ? n(t.key, e) : 1), r && (c *= -1), c < 0))
                  t = this.isReverse_ ? t.left : t.right;
                else {
                  if (0 === c) {
                    this.nodeStack_.push(t);
                    break;
                  }
                  this.nodeStack_.push(t),
                    (t = this.isReverse_ ? t.right : t.left);
                }
            }
            return (
              (t.prototype.getNext = function () {
                if (0 === this.nodeStack_.length) return null;
                var t,
                  e = this.nodeStack_.pop();
                if (
                  ((t = this.resultGenerator_
                    ? this.resultGenerator_(e.key, e.value)
                    : { key: e.key, value: e.value }),
                  this.isReverse_)
                )
                  for (e = e.left; !e.isEmpty(); )
                    this.nodeStack_.push(e), (e = e.right);
                else
                  for (e = e.right; !e.isEmpty(); )
                    this.nodeStack_.push(e), (e = e.left);
                return t;
              }),
              (t.prototype.hasNext = function () {
                return this.nodeStack_.length > 0;
              }),
              (t.prototype.peek = function () {
                if (0 === this.nodeStack_.length) return null;
                var t = this.nodeStack_[this.nodeStack_.length - 1];
                return this.resultGenerator_
                  ? this.resultGenerator_(t.key, t.value)
                  : { key: t.key, value: t.value };
              }),
              t
            );
          })(),
          Ut = (function () {
            function t(e, n, r, o, c) {
              (this.key = e),
                (this.value = n),
                (this.color = null != r ? r : t.RED),
                (this.left = null != o ? o : Vt.EMPTY_NODE),
                (this.right = null != c ? c : Vt.EMPTY_NODE);
            }
            return (
              (t.prototype.copy = function (e, n, r, o, c) {
                return new t(
                  null != e ? e : this.key,
                  null != n ? n : this.value,
                  null != r ? r : this.color,
                  null != o ? o : this.left,
                  null != c ? c : this.right
                );
              }),
              (t.prototype.count = function () {
                return this.left.count() + 1 + this.right.count();
              }),
              (t.prototype.isEmpty = function () {
                return !1;
              }),
              (t.prototype.inorderTraversal = function (t) {
                return (
                  this.left.inorderTraversal(t) ||
                  !!t(this.key, this.value) ||
                  this.right.inorderTraversal(t)
                );
              }),
              (t.prototype.reverseTraversal = function (t) {
                return (
                  this.right.reverseTraversal(t) ||
                  t(this.key, this.value) ||
                  this.left.reverseTraversal(t)
                );
              }),
              (t.prototype.min_ = function () {
                return this.left.isEmpty() ? this : this.left.min_();
              }),
              (t.prototype.minKey = function () {
                return this.min_().key;
              }),
              (t.prototype.maxKey = function () {
                return this.right.isEmpty() ? this.key : this.right.maxKey();
              }),
              (t.prototype.insert = function (t, e, n) {
                var r = this,
                  o = n(t, r.key);
                return (r =
                  o < 0
                    ? r.copy(null, null, null, r.left.insert(t, e, n), null)
                    : 0 === o
                    ? r.copy(null, e, null, null, null)
                    : r.copy(
                        null,
                        null,
                        null,
                        null,
                        r.right.insert(t, e, n)
                      )).fixUp_();
              }),
              (t.prototype.removeMin_ = function () {
                if (this.left.isEmpty()) return Vt.EMPTY_NODE;
                var t = this;
                return (
                  t.left.isRed_() ||
                    t.left.left.isRed_() ||
                    (t = t.moveRedLeft_()),
                  (t = t.copy(
                    null,
                    null,
                    null,
                    t.left.removeMin_(),
                    null
                  )).fixUp_()
                );
              }),
              (t.prototype.remove = function (t, e) {
                var n, r;
                if (e(t, (n = this).key) < 0)
                  n.left.isEmpty() ||
                    n.left.isRed_() ||
                    n.left.left.isRed_() ||
                    (n = n.moveRedLeft_()),
                    (n = n.copy(null, null, null, n.left.remove(t, e), null));
                else {
                  if (
                    (n.left.isRed_() && (n = n.rotateRight_()),
                    n.right.isEmpty() ||
                      n.right.isRed_() ||
                      n.right.left.isRed_() ||
                      (n = n.moveRedRight_()),
                    0 === e(t, n.key))
                  ) {
                    if (n.right.isEmpty()) return Vt.EMPTY_NODE;
                    (r = n.right.min_()),
                      (n = n.copy(
                        r.key,
                        r.value,
                        null,
                        null,
                        n.right.removeMin_()
                      ));
                  }
                  n = n.copy(null, null, null, null, n.right.remove(t, e));
                }
                return n.fixUp_();
              }),
              (t.prototype.isRed_ = function () {
                return this.color;
              }),
              (t.prototype.fixUp_ = function () {
                var t = this;
                return (
                  t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
                  t.left.isRed_() &&
                    t.left.left.isRed_() &&
                    (t = t.rotateRight_()),
                  t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
                  t
                );
              }),
              (t.prototype.moveRedLeft_ = function () {
                var t = this.colorFlip_();
                return (
                  t.right.left.isRed_() &&
                    (t = (t = (t = t.copy(
                      null,
                      null,
                      null,
                      null,
                      t.right.rotateRight_()
                    )).rotateLeft_()).colorFlip_()),
                  t
                );
              }),
              (t.prototype.moveRedRight_ = function () {
                var t = this.colorFlip_();
                return (
                  t.left.left.isRed_() &&
                    (t = (t = t.rotateRight_()).colorFlip_()),
                  t
                );
              }),
              (t.prototype.rotateLeft_ = function () {
                var e = this.copy(null, null, t.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, e, null);
              }),
              (t.prototype.rotateRight_ = function () {
                var e = this.copy(null, null, t.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, e);
              }),
              (t.prototype.colorFlip_ = function () {
                var t = this.left.copy(
                    null,
                    null,
                    !this.left.color,
                    null,
                    null
                  ),
                  e = this.right.copy(
                    null,
                    null,
                    !this.right.color,
                    null,
                    null
                  );
                return this.copy(null, null, !this.color, t, e);
              }),
              (t.prototype.checkMaxDepth_ = function () {
                var t = this.check_();
                return Math.pow(2, t) <= this.count() + 1;
              }),
              (t.prototype.check_ = function () {
                if (this.isRed_() && this.left.isRed_())
                  throw new Error(
                    "Red node has red child(" +
                      this.key +
                      "," +
                      this.value +
                      ")"
                  );
                if (this.right.isRed_())
                  throw new Error(
                    "Right child of (" +
                      this.key +
                      "," +
                      this.value +
                      ") is red"
                  );
                var t = this.left.check_();
                if (t !== this.right.check_())
                  throw new Error("Black depths differ");
                return t + (this.isRed_() ? 0 : 1);
              }),
              (t.RED = !0),
              (t.BLACK = !1),
              t
            );
          })(),
          qt = (function () {
            function t() {}
            return (
              (t.prototype.copy = function (t, e, n, r, o) {
                return this;
              }),
              (t.prototype.insert = function (t, e, n) {
                return new Ut(t, e, null);
              }),
              (t.prototype.remove = function (t, e) {
                return this;
              }),
              (t.prototype.count = function () {
                return 0;
              }),
              (t.prototype.isEmpty = function () {
                return !0;
              }),
              (t.prototype.inorderTraversal = function (t) {
                return !1;
              }),
              (t.prototype.reverseTraversal = function (t) {
                return !1;
              }),
              (t.prototype.minKey = function () {
                return null;
              }),
              (t.prototype.maxKey = function () {
                return null;
              }),
              (t.prototype.check_ = function () {
                return 0;
              }),
              (t.prototype.isRed_ = function () {
                return !1;
              }),
              t
            );
          })(),
          Vt = (function () {
            function t(e, n) {
              void 0 === n && (n = t.EMPTY_NODE),
                (this.comparator_ = e),
                (this.root_ = n);
            }
            return (
              (t.prototype.insert = function (e, n) {
                return new t(
                  this.comparator_,
                  this.root_
                    .insert(e, n, this.comparator_)
                    .copy(null, null, Ut.BLACK, null, null)
                );
              }),
              (t.prototype.remove = function (e) {
                return new t(
                  this.comparator_,
                  this.root_
                    .remove(e, this.comparator_)
                    .copy(null, null, Ut.BLACK, null, null)
                );
              }),
              (t.prototype.get = function (t) {
                for (var e, n = this.root_; !n.isEmpty(); ) {
                  if (0 === (e = this.comparator_(t, n.key))) return n.value;
                  e < 0 ? (n = n.left) : e > 0 && (n = n.right);
                }
                return null;
              }),
              (t.prototype.getPredecessorKey = function (t) {
                for (var e, n = this.root_, r = null; !n.isEmpty(); ) {
                  if (0 === (e = this.comparator_(t, n.key))) {
                    if (n.left.isEmpty()) return r ? r.key : null;
                    for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                    return n.key;
                  }
                  e < 0 ? (n = n.left) : e > 0 && ((r = n), (n = n.right));
                }
                throw new Error(
                  "Attempted to find predecessor key for a nonexistent key.  What gives?"
                );
              }),
              (t.prototype.isEmpty = function () {
                return this.root_.isEmpty();
              }),
              (t.prototype.count = function () {
                return this.root_.count();
              }),
              (t.prototype.minKey = function () {
                return this.root_.minKey();
              }),
              (t.prototype.maxKey = function () {
                return this.root_.maxKey();
              }),
              (t.prototype.inorderTraversal = function (t) {
                return this.root_.inorderTraversal(t);
              }),
              (t.prototype.reverseTraversal = function (t) {
                return this.root_.reverseTraversal(t);
              }),
              (t.prototype.getIterator = function (t) {
                return new Ht(this.root_, null, this.comparator_, !1, t);
              }),
              (t.prototype.getIteratorFrom = function (t, e) {
                return new Ht(this.root_, t, this.comparator_, !1, e);
              }),
              (t.prototype.getReverseIteratorFrom = function (t, e) {
                return new Ht(this.root_, t, this.comparator_, !0, e);
              }),
              (t.prototype.getReverseIterator = function (t) {
                return new Ht(this.root_, null, this.comparator_, !0, t);
              }),
              (t.EMPTY_NODE = new qt()),
              t
            );
          })(),
          Wt = Math.log(2),
          Bt = (function () {
            function t(t) {
              var e;
              (this.count = ((e = t + 1), parseInt(Math.log(e) / Wt, 10))),
                (this.current_ = this.count - 1);
              var n,
                mask = ((n = this.count), parseInt(Array(n + 1).join("1"), 2));
              this.bits_ = (t + 1) & mask;
            }
            return (
              (t.prototype.nextBitIsOne = function () {
                var t = !(this.bits_ & (1 << this.current_));
                return this.current_--, t;
              }),
              t
            );
          })(),
          zt = function (t, e, n, r) {
            t.sort(e);
            var o = function (e, r) {
                var c,
                  l,
                  d = r - e;
                if (0 === d) return null;
                if (1 === d)
                  return (
                    (c = t[e]),
                    (l = n ? n(c) : c),
                    new Ut(l, c.node, Ut.BLACK, null, null)
                  );
                var h = parseInt(d / 2, 10) + e,
                  f = o(e, h),
                  v = o(h + 1, r);
                return (
                  (c = t[h]),
                  (l = n ? n(c) : c),
                  new Ut(l, c.node, Ut.BLACK, f, v)
                );
              },
              c = (function (e) {
                for (
                  var r = null,
                    c = null,
                    l = t.length,
                    d = function (e, r) {
                      var c = l - e,
                        d = l;
                      l -= e;
                      var f = o(c + 1, d),
                        v = t[c],
                        m = n ? n(v) : v;
                      h(new Ut(m, v.node, r, null, f));
                    },
                    h = function (t) {
                      r ? ((r.left = t), (r = t)) : ((c = t), (r = t));
                    },
                    i = 0;
                  i < e.count;
                  ++i
                ) {
                  var f = e.nextBitIsOne(),
                    v = Math.pow(2, e.count - (i + 1));
                  f ? d(v, Ut.BLACK) : (d(v, Ut.BLACK), d(v, Ut.RED));
                }
                return c;
              })(new Bt(t.length));
            return new Vt(r || e, c);
          },
          Qt = {},
          Yt = (function () {
            function t(t, e) {
              (this.indexes_ = t), (this.indexSet_ = e);
            }
            return (
              Object.defineProperty(t, "Default", {
                get: function () {
                  return (
                    l.assert(Qt && $t, "ChildrenNode.ts has not been loaded"),
                    (Lt = Lt || new t({ ".priority": Qt }, { ".priority": $t }))
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var e = l.safeGet(this.indexes_, t);
                if (!e) throw new Error("No index defined for " + t);
                return e instanceof Vt ? e : null;
              }),
              (t.prototype.hasIndex = function (t) {
                return l.contains(this.indexSet_, t.toString());
              }),
              (t.prototype.addIndex = function (e, n) {
                l.assert(
                  e !== It,
                  "KeyIndex always exists and isn't meant to be added to the IndexMap."
                );
                for (
                  var r,
                    o = [],
                    d = !1,
                    h = n.getIterator(St.Wrap),
                    f = h.getNext();
                  f;

                )
                  (d = d || e.isDefinedOn(f.node)),
                    o.push(f),
                    (f = h.getNext());
                r = d ? zt(o, e.getCompare()) : Qt;
                var v = e.toString(),
                  m = c.__assign({}, this.indexSet_);
                m[v] = e;
                var y = c.__assign({}, this.indexes_);
                return (y[v] = r), new t(y, m);
              }),
              (t.prototype.addToIndexes = function (e, n) {
                var r = this;
                return new t(
                  l.map(this.indexes_, function (t, o) {
                    var c = l.safeGet(r.indexSet_, o);
                    if (
                      (l.assert(c, "Missing index implementation for " + o),
                      t === Qt)
                    ) {
                      if (c.isDefinedOn(e.node)) {
                        for (
                          var d = [],
                            h = n.getIterator(St.Wrap),
                            f = h.getNext();
                          f;

                        )
                          f.name !== e.name && d.push(f), (f = h.getNext());
                        return d.push(e), zt(d, c.getCompare());
                      }
                      return Qt;
                    }
                    var v = n.get(e.name),
                      m = t;
                    return (
                      v && (m = m.remove(new St(e.name, v))),
                      m.insert(e, e.node)
                    );
                  }),
                  this.indexSet_
                );
              }),
              (t.prototype.removeFromIndexes = function (e, n) {
                return new t(
                  l.map(this.indexes_, function (t) {
                    if (t === Qt) return t;
                    var r = n.get(e.name);
                    return r ? t.remove(new St(e.name, r)) : t;
                  }),
                  this.indexSet_
                );
              }),
              t
            );
          })();
        function Gt(t, e) {
          return j(t.name, e.name);
        }
        function Zt(t, e) {
          return j(t, e);
        }
        var Kt = (function () {
            function t(t, e, n) {
              (this.children_ = t),
                (this.priorityNode_ = e),
                (this.indexMap_ = n),
                (this.lazyHash_ = null),
                this.priorityNode_ && Ft(this.priorityNode_),
                this.children_.isEmpty() &&
                  l.assert(
                    !this.priorityNode_ || this.priorityNode_.isEmpty(),
                    "An empty node cannot have a priority"
                  );
            }
            return (
              Object.defineProperty(t, "EMPTY_NODE", {
                get: function () {
                  return jt || (jt = new t(new Vt(Zt), null, Yt.Default));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isLeafNode = function () {
                return !1;
              }),
              (t.prototype.getPriority = function () {
                return this.priorityNode_ || jt;
              }),
              (t.prototype.updatePriority = function (e) {
                return this.children_.isEmpty()
                  ? this
                  : new t(this.children_, e, this.indexMap_);
              }),
              (t.prototype.getImmediateChild = function (t) {
                if (".priority" === t) return this.getPriority();
                var e = this.children_.get(t);
                return null === e ? jt : e;
              }),
              (t.prototype.getChild = function (path) {
                var t = path.getFront();
                return null === t
                  ? this
                  : this.getImmediateChild(t).getChild(path.popFront());
              }),
              (t.prototype.hasChild = function (t) {
                return null !== this.children_.get(t);
              }),
              (t.prototype.updateImmediateChild = function (e, n) {
                if (
                  (l.assert(n, "We should always be passing snapshot nodes"),
                  ".priority" === e)
                )
                  return this.updatePriority(n);
                var r = new St(e, n),
                  o = void 0,
                  c = void 0;
                n.isEmpty()
                  ? ((o = this.children_.remove(e)),
                    (c = this.indexMap_.removeFromIndexes(r, this.children_)))
                  : ((o = this.children_.insert(e, n)),
                    (c = this.indexMap_.addToIndexes(r, this.children_)));
                var d = o.isEmpty() ? jt : this.priorityNode_;
                return new t(o, d, c);
              }),
              (t.prototype.updateChild = function (path, t) {
                var e = path.getFront();
                if (null === e) return t;
                l.assert(
                  ".priority" !== path.getFront() || 1 === path.getLength(),
                  ".priority must be the last token in a path"
                );
                var n = this.getImmediateChild(e).updateChild(
                  path.popFront(),
                  t
                );
                return this.updateImmediateChild(e, n);
              }),
              (t.prototype.isEmpty = function () {
                return this.children_.isEmpty();
              }),
              (t.prototype.numChildren = function () {
                return this.children_.count();
              }),
              (t.prototype.val = function (e) {
                if (this.isEmpty()) return null;
                var n = {},
                  r = 0,
                  o = 0,
                  c = !0;
                if (
                  (this.forEachChild($t, function (l, d) {
                    (n[l] = d.val(e)),
                      r++,
                      c && t.INTEGER_REGEXP_.test(l)
                        ? (o = Math.max(o, Number(l)))
                        : (c = !1);
                  }),
                  !e && c && o < 2 * r)
                ) {
                  var l = [];
                  for (var d in n) l[d] = n[d];
                  return l;
                }
                return (
                  e &&
                    !this.getPriority().isEmpty() &&
                    (n[".priority"] = this.getPriority().val()),
                  n
                );
              }),
              (t.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var t = "";
                  this.getPriority().isEmpty() ||
                    (t += "priority:" + Mt(this.getPriority().val()) + ":"),
                    this.forEachChild($t, function (e, n) {
                      var r = n.hash();
                      "" !== r && (t += ":" + e + ":" + r);
                    }),
                    (this.lazyHash_ = "" === t ? "" : x(t));
                }
                return this.lazyHash_;
              }),
              (t.prototype.getPredecessorChildName = function (t, e, n) {
                var r = this.resolveIndex_(n);
                if (r) {
                  var o = r.getPredecessorKey(new St(t, e));
                  return o ? o.name : null;
                }
                return this.children_.getPredecessorKey(t);
              }),
              (t.prototype.getFirstChildName = function (t) {
                var e = this.resolveIndex_(t);
                if (e) {
                  var n = e.minKey();
                  return n && n.name;
                }
                return this.children_.minKey();
              }),
              (t.prototype.getFirstChild = function (t) {
                var e = this.getFirstChildName(t);
                return e ? new St(e, this.children_.get(e)) : null;
              }),
              (t.prototype.getLastChildName = function (t) {
                var e = this.resolveIndex_(t);
                if (e) {
                  var n = e.maxKey();
                  return n && n.name;
                }
                return this.children_.maxKey();
              }),
              (t.prototype.getLastChild = function (t) {
                var e = this.getLastChildName(t);
                return e ? new St(e, this.children_.get(e)) : null;
              }),
              (t.prototype.forEachChild = function (t, e) {
                var n = this.resolveIndex_(t);
                return n
                  ? n.inorderTraversal(function (t) {
                      return e(t.name, t.node);
                    })
                  : this.children_.inorderTraversal(e);
              }),
              (t.prototype.getIterator = function (t) {
                return this.getIteratorFrom(t.minPost(), t);
              }),
              (t.prototype.getIteratorFrom = function (t, e) {
                var n = this.resolveIndex_(e);
                if (n)
                  return n.getIteratorFrom(t, function (t) {
                    return t;
                  });
                for (
                  var r = this.children_.getIteratorFrom(t.name, St.Wrap),
                    o = r.peek();
                  null != o && e.compare(o, t) < 0;

                )
                  r.getNext(), (o = r.peek());
                return r;
              }),
              (t.prototype.getReverseIterator = function (t) {
                return this.getReverseIteratorFrom(t.maxPost(), t);
              }),
              (t.prototype.getReverseIteratorFrom = function (t, e) {
                var n = this.resolveIndex_(e);
                if (n)
                  return n.getReverseIteratorFrom(t, function (t) {
                    return t;
                  });
                for (
                  var r = this.children_.getReverseIteratorFrom(
                      t.name,
                      St.Wrap
                    ),
                    o = r.peek();
                  null != o && e.compare(o, t) > 0;

                )
                  r.getNext(), (o = r.peek());
                return r;
              }),
              (t.prototype.compareTo = function (t) {
                return this.isEmpty()
                  ? t.isEmpty()
                    ? 0
                    : -1
                  : t.isLeafNode() || t.isEmpty()
                  ? 1
                  : t === Xt
                  ? -1
                  : 0;
              }),
              (t.prototype.withIndex = function (e) {
                if (e === It || this.indexMap_.hasIndex(e)) return this;
                var n = this.indexMap_.addIndex(e, this.children_);
                return new t(this.children_, this.priorityNode_, n);
              }),
              (t.prototype.isIndexed = function (t) {
                return t === It || this.indexMap_.hasIndex(t);
              }),
              (t.prototype.equals = function (t) {
                if (t === this) return !0;
                if (t.isLeafNode()) return !1;
                var e = t;
                if (this.getPriority().equals(e.getPriority())) {
                  if (this.children_.count() === e.children_.count()) {
                    for (
                      var n = this.getIterator($t),
                        r = e.getIterator($t),
                        o = n.getNext(),
                        c = r.getNext();
                      o && c;

                    ) {
                      if (o.name !== c.name || !o.node.equals(c.node))
                        return !1;
                      (o = n.getNext()), (c = r.getNext());
                    }
                    return null === o && null === c;
                  }
                  return !1;
                }
                return !1;
              }),
              (t.prototype.resolveIndex_ = function (t) {
                return t === It ? null : this.indexMap_.get(t.toString());
              }),
              (t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
              t
            );
          })(),
          Xt = new ((function (t) {
            function e() {
              return (
                t.call(this, new Vt(Zt), Kt.EMPTY_NODE, Yt.Default) || this
              );
            }
            return (
              c.__extends(e, t),
              (e.prototype.compareTo = function (t) {
                return t === this ? 0 : 1;
              }),
              (e.prototype.equals = function (t) {
                return t === this;
              }),
              (e.prototype.getPriority = function () {
                return this;
              }),
              (e.prototype.getImmediateChild = function (t) {
                return Kt.EMPTY_NODE;
              }),
              (e.prototype.isEmpty = function () {
                return !1;
              }),
              e
            );
          })(Kt))();
        Object.defineProperties(St, {
          MIN: { value: new St(R, Kt.EMPTY_NODE) },
          MAX: { value: new St(L, Xt) },
        }),
          (Ot.__EMPTY_NODE = Kt.EMPTY_NODE),
          (Rt.__childrenNodeConstructor = Kt),
          (it = Xt),
          (function (t) {
            Pt = t;
          })(Xt);
        function Jt(t, e) {
          if ((void 0 === e && (e = null), null === t)) return Kt.EMPTY_NODE;
          if (
            ("object" == typeof t && ".priority" in t && (e = t[".priority"]),
            l.assert(
              null === e ||
                "string" == typeof e ||
                "number" == typeof e ||
                ("object" == typeof e && ".sv" in e),
              "Invalid priority type found: " + typeof e
            ),
            "object" == typeof t &&
              ".value" in t &&
              null !== t[".value"] &&
              (t = t[".value"]),
            "object" != typeof t || ".sv" in t)
          )
            return new Rt(t, Jt(e));
          if (t instanceof Array) {
            var n = Kt.EMPTY_NODE;
            return (
              W(t, function (e, r) {
                if (l.contains(t, e) && "." !== e.substring(0, 1)) {
                  var o = Jt(r);
                  (!o.isLeafNode() && o.isEmpty()) ||
                    (n = n.updateImmediateChild(e, o));
                }
              }),
              n.updatePriority(Jt(e))
            );
          }
          var r = [],
            o = !1;
          if (
            (W(t, function (t, e) {
              if ("." !== t.substring(0, 1)) {
                var n = Jt(e);
                n.isEmpty() ||
                  ((o = o || !n.getPriority().isEmpty()), r.push(new St(t, n)));
              }
            }),
            0 === r.length)
          )
            return Kt.EMPTY_NODE;
          var c = zt(
            r,
            Gt,
            function (t) {
              return t.name;
            },
            Zt
          );
          if (o) {
            var d = zt(r, $t.getCompare());
            return new Kt(
              c,
              Jt(e),
              new Yt({ ".priority": d }, { ".priority": $t })
            );
          }
          return new Kt(c, Jt(e), Yt.Default);
        }
        !(function (t) {
          kt = t;
        })(Jt);
        var te,
          ee = new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              c.__extends(e, t),
              (e.prototype.compare = function (a, b) {
                var t = a.node.compareTo(b.node);
                return 0 === t ? j(a.name, b.name) : t;
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !0;
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !t.equals(e);
              }),
              (e.prototype.minPost = function () {
                return St.MIN;
              }),
              (e.prototype.maxPost = function () {
                return St.MAX;
              }),
              (e.prototype.makePost = function (t, e) {
                var n = Jt(t);
                return new St(e, n);
              }),
              (e.prototype.toString = function () {
                return ".value";
              }),
              e
            );
          })(Nt))(),
          ne = (function (t) {
            function e(e) {
              var n = t.call(this) || this;
              return (
                (n.indexPath_ = e),
                l.assert(
                  !e.isEmpty() && ".priority" !== e.getFront(),
                  "Can't create PathIndex with empty path or .priority key"
                ),
                n
              );
            }
            return (
              c.__extends(e, t),
              (e.prototype.extractChild = function (t) {
                return t.getChild(this.indexPath_);
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !t.getChild(this.indexPath_).isEmpty();
              }),
              (e.prototype.compare = function (a, b) {
                var t = this.extractChild(a.node),
                  e = this.extractChild(b.node),
                  n = t.compareTo(e);
                return 0 === n ? j(a.name, b.name) : n;
              }),
              (e.prototype.makePost = function (t, e) {
                var n = Jt(t),
                  r = Kt.EMPTY_NODE.updateChild(this.indexPath_, n);
                return new St(e, r);
              }),
              (e.prototype.maxPost = function () {
                var t = Kt.EMPTY_NODE.updateChild(this.indexPath_, Xt);
                return new St(L, t);
              }),
              (e.prototype.toString = function () {
                return this.indexPath_.slice().join("/");
              }),
              e
            );
          })(Nt),
          re = (function () {
            function t(t, e, n) {
              (this.node_ = t), (this.ref_ = e), (this.index_ = n);
            }
            return (
              (t.prototype.val = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.val",
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.val()
                );
              }),
              (t.prototype.exportVal = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.exportVal",
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.val(!0)
                );
              }),
              (t.prototype.toJSON = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.toJSON",
                    0,
                    1,
                    arguments.length
                  ),
                  this.exportVal()
                );
              }),
              (t.prototype.exists = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.exists",
                    0,
                    0,
                    arguments.length
                  ),
                  !this.node_.isEmpty()
                );
              }),
              (t.prototype.child = function (e) {
                l.validateArgCount(
                  "DataSnapshot.child",
                  0,
                  1,
                  arguments.length
                ),
                  (e = String(e)),
                  _t("DataSnapshot.child", 1, e, !1);
                var n = new Z(e),
                  r = this.ref_.child(n);
                return new t(this.node_.getChild(n), r, $t);
              }),
              (t.prototype.hasChild = function (t) {
                l.validateArgCount(
                  "DataSnapshot.hasChild",
                  1,
                  1,
                  arguments.length
                ),
                  _t("DataSnapshot.hasChild", 1, t, !1);
                var e = new Z(t);
                return !this.node_.getChild(e).isEmpty();
              }),
              (t.prototype.getPriority = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.getPriority",
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.getPriority().val()
                );
              }),
              (t.prototype.forEach = function (e) {
                var n = this;
                if (
                  (l.validateArgCount(
                    "DataSnapshot.forEach",
                    1,
                    1,
                    arguments.length
                  ),
                  l.validateCallback("DataSnapshot.forEach", 1, e, !1),
                  this.node_.isLeafNode())
                )
                  return !1;
                var r = this.node_;
                return !!r.forEachChild(this.index_, function (r, o) {
                  return e(new t(o, n.ref_.child(r), $t));
                });
              }),
              (t.prototype.hasChildren = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.hasChildren",
                    0,
                    0,
                    arguments.length
                  ),
                  !this.node_.isLeafNode() && !this.node_.isEmpty()
                );
              }),
              Object.defineProperty(t.prototype, "key", {
                get: function () {
                  return this.ref_.getKey();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.numChildren = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.numChildren",
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.numChildren()
                );
              }),
              (t.prototype.getRef = function () {
                return (
                  l.validateArgCount(
                    "DataSnapshot.ref",
                    0,
                    0,
                    arguments.length
                  ),
                  this.ref_
                );
              }),
              Object.defineProperty(t.prototype, "ref", {
                get: function () {
                  return this.getRef();
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })(),
          ie = (function () {
            function t(t, e, n, r) {
              (this.eventType = t),
                (this.eventRegistration = e),
                (this.snapshot = n),
                (this.prevName = r);
            }
            return (
              (t.prototype.getPath = function () {
                var t = this.snapshot.getRef();
                return "value" === this.eventType ? t.path : t.getParent().path;
              }),
              (t.prototype.getEventType = function () {
                return this.eventType;
              }),
              (t.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function () {
                return (
                  this.getPath().toString() +
                  ":" +
                  this.eventType +
                  ":" +
                  l.stringify(this.snapshot.exportVal())
                );
              }),
              t
            );
          })(),
          oe = (function () {
            function t(t, e, path) {
              (this.eventRegistration = t),
                (this.error = e),
                (this.path = path);
            }
            return (
              (t.prototype.getPath = function () {
                return this.path;
              }),
              (t.prototype.getEventType = function () {
                return "cancel";
              }),
              (t.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function () {
                return this.path.toString() + ":cancel";
              }),
              t
            );
          })(),
          ae = (function () {
            function t(t, e, n) {
              (this.callback_ = t),
                (this.cancelCallback_ = e),
                (this.context_ = n);
            }
            return (
              (t.prototype.respondsTo = function (t) {
                return "value" === t;
              }),
              (t.prototype.createEvent = function (t, e) {
                var n = e.getQueryParams().getIndex();
                return new ie(
                  "value",
                  this,
                  new re(t.snapshotNode, e.getRef(), n)
                );
              }),
              (t.prototype.getEventRunner = function (t) {
                var e = this.context_;
                if ("cancel" === t.getEventType()) {
                  l.assert(
                    this.cancelCallback_,
                    "Raising a cancel event on a listener with no cancel callback"
                  );
                  var n = this.cancelCallback_;
                  return function () {
                    n.call(e, t.error);
                  };
                }
                var r = this.callback_;
                return function () {
                  r.call(e, t.snapshot);
                };
              }),
              (t.prototype.createCancelEvent = function (t, path) {
                return this.cancelCallback_ ? new oe(this, t, path) : null;
              }),
              (t.prototype.matches = function (e) {
                return (
                  e instanceof t &&
                  (!e.callback_ ||
                    !this.callback_ ||
                    (e.callback_ === this.callback_ &&
                      e.context_ === this.context_))
                );
              }),
              (t.prototype.hasAnyCallback = function () {
                return null !== this.callback_;
              }),
              t
            );
          })(),
          se = (function () {
            function t(t, e, n) {
              (this.callbacks_ = t),
                (this.cancelCallback_ = e),
                (this.context_ = n);
            }
            return (
              (t.prototype.respondsTo = function (t) {
                var e = "children_added" === t ? "child_added" : t;
                return (
                  (e = "children_removed" === e ? "child_removed" : e),
                  l.contains(this.callbacks_, e)
                );
              }),
              (t.prototype.createCancelEvent = function (t, path) {
                return this.cancelCallback_ ? new oe(this, t, path) : null;
              }),
              (t.prototype.createEvent = function (t, e) {
                l.assert(
                  null != t.childName,
                  "Child events should have a childName."
                );
                var n = e.getRef().child(t.childName),
                  r = e.getQueryParams().getIndex();
                return new ie(
                  t.type,
                  this,
                  new re(t.snapshotNode, n, r),
                  t.prevName
                );
              }),
              (t.prototype.getEventRunner = function (t) {
                var e = this.context_;
                if ("cancel" === t.getEventType()) {
                  l.assert(
                    this.cancelCallback_,
                    "Raising a cancel event on a listener with no cancel callback"
                  );
                  var n = this.cancelCallback_;
                  return function () {
                    n.call(e, t.error);
                  };
                }
                var r = this.callbacks_[t.eventType];
                return function () {
                  r.call(e, t.snapshot, t.prevName);
                };
              }),
              (t.prototype.matches = function (e) {
                var n = this;
                if (e instanceof t) {
                  if (!this.callbacks_ || !e.callbacks_) return !0;
                  if (this.context_ === e.context_) {
                    var r = Object.keys(e.callbacks_),
                      o = Object.keys(this.callbacks_),
                      c = r.length;
                    if (c === o.length) {
                      if (1 === c) {
                        var l = r[0],
                          d = o[0];
                        return !(
                          d !== l ||
                          (e.callbacks_[l] &&
                            this.callbacks_[d] &&
                            e.callbacks_[l] !== this.callbacks_[d])
                        );
                      }
                      return o.every(function (t) {
                        return e.callbacks_[t] === n.callbacks_[t];
                      });
                    }
                  }
                }
                return !1;
              }),
              (t.prototype.hasAnyCallback = function () {
                return null !== this.callbacks_;
              }),
              t
            );
          })(),
          ue = (function () {
            function t(t, path, e, n) {
              (this.repo = t),
                (this.path = path),
                (this.queryParams_ = e),
                (this.orderByCalled_ = n);
            }
            return (
              Object.defineProperty(t, "__referenceConstructor", {
                get: function () {
                  return l.assert(te, "Reference.ts has not been loaded"), te;
                },
                set: function (t) {
                  te = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.validateQueryEndpoints_ = function (t) {
                var e = null,
                  n = null;
                if (
                  (t.hasStart() && (e = t.getIndexStartValue()),
                  t.hasEnd() && (n = t.getIndexEndValue()),
                  t.getIndex() === It)
                ) {
                  var r =
                      "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                    o =
                      "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
                  if (t.hasStart()) {
                    if (t.getIndexStartName() !== R) throw new Error(r);
                    if ("string" != typeof e) throw new Error(o);
                  }
                  if (t.hasEnd()) {
                    if (t.getIndexEndName() !== L) throw new Error(r);
                    if ("string" != typeof n) throw new Error(o);
                  }
                } else if (t.getIndex() === $t) {
                  if ((null != e && !ht(e)) || (null != n && !ht(n)))
                    throw new Error(
                      "Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string)."
                    );
                } else if (
                  (l.assert(
                    t.getIndex() instanceof ne || t.getIndex() === ee,
                    "unknown index type."
                  ),
                  (null != e && "object" == typeof e) ||
                    (null != n && "object" == typeof n))
                )
                  throw new Error(
                    "Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object."
                  );
              }),
              (t.validateLimit_ = function (t) {
                if (
                  t.hasStart() &&
                  t.hasEnd() &&
                  t.hasLimit() &&
                  !t.hasAnchoredLimit()
                )
                  throw new Error(
                    "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
                  );
              }),
              (t.prototype.validateNoPreviousOrderByCall_ = function (t) {
                if (!0 === this.orderByCalled_)
                  throw new Error(
                    t + ": You can't combine multiple orderBy calls."
                  );
              }),
              (t.prototype.getQueryParams = function () {
                return this.queryParams_;
              }),
              (t.prototype.getRef = function () {
                return (
                  l.validateArgCount("Query.ref", 0, 0, arguments.length),
                  new t.__referenceConstructor(this.repo, this.path)
                );
              }),
              (t.prototype.on = function (e, n, r, o) {
                l.validateArgCount("Query.on", 2, 4, arguments.length),
                  yt("Query.on", 1, e, !1),
                  l.validateCallback("Query.on", 2, n, !1);
                var c = t.getCancelAndContextArgs_("Query.on", r, o);
                if ("value" === e) this.onValueEvent(n, c.cancel, c.context);
                else {
                  var d = {};
                  (d[e] = n), this.onChildEvent(d, c.cancel, c.context);
                }
                return n;
              }),
              (t.prototype.onValueEvent = function (t, e, n) {
                var r = new ae(t, e || null, n || null);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.onChildEvent = function (t, e, n) {
                var r = new se(t, e, n);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.off = function (t, e, n) {
                l.validateArgCount("Query.off", 0, 3, arguments.length),
                  yt("Query.off", 1, t, !0),
                  l.validateCallback("Query.off", 2, e, !0),
                  l.validateContextObject("Query.off", 3, n, !0);
                var r = null,
                  o = null;
                if ("value" === t) {
                  var c = e || null;
                  r = new ae(c, null, n || null);
                } else
                  t &&
                    (e && ((o = {})[t] = e), (r = new se(o, null, n || null)));
                this.repo.removeEventCallbackForQuery(this, r);
              }),
              (t.prototype.once = function (e, n, r, o) {
                var c = this;
                l.validateArgCount("Query.once", 1, 4, arguments.length),
                  yt("Query.once", 1, e, !1),
                  l.validateCallback("Query.once", 2, n, !0);
                var d = t.getCancelAndContextArgs_("Query.once", r, o),
                  h = !0,
                  f = new l.Deferred();
                f.promise.catch(function () {});
                var v = function (t) {
                  h &&
                    ((h = !1),
                    c.off(e, v),
                    n && n.bind(d.context)(t),
                    f.resolve(t));
                };
                return (
                  this.on(e, v, function (t) {
                    c.off(e, v),
                      d.cancel && d.cancel.bind(d.context)(t),
                      f.reject(t);
                  }),
                  f.promise
                );
              }),
              (t.prototype.limitToFirst = function (e) {
                if (
                  (l.validateArgCount(
                    "Query.limitToFirst",
                    1,
                    1,
                    arguments.length
                  ),
                  "number" != typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw new Error(
                    "Query.limitToFirst: First argument must be a positive integer."
                  );
                if (this.queryParams_.hasLimit())
                  throw new Error(
                    "Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.queryParams_.limitToFirst(e),
                  this.orderByCalled_
                );
              }),
              (t.prototype.limitToLast = function (e) {
                if (
                  (l.validateArgCount(
                    "Query.limitToLast",
                    1,
                    1,
                    arguments.length
                  ),
                  "number" != typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw new Error(
                    "Query.limitToLast: First argument must be a positive integer."
                  );
                if (this.queryParams_.hasLimit())
                  throw new Error(
                    "Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.queryParams_.limitToLast(e),
                  this.orderByCalled_
                );
              }),
              (t.prototype.orderByChild = function (path) {
                if (
                  (l.validateArgCount(
                    "Query.orderByChild",
                    1,
                    1,
                    arguments.length
                  ),
                  "$key" === path)
                )
                  throw new Error(
                    'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
                  );
                if ("$priority" === path)
                  throw new Error(
                    'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
                  );
                if ("$value" === path)
                  throw new Error(
                    'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
                  );
                _t("Query.orderByChild", 1, path, !1),
                  this.validateNoPreviousOrderByCall_("Query.orderByChild");
                var e = new Z(path);
                if (e.isEmpty())
                  throw new Error(
                    "Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead."
                  );
                var n = new ne(e),
                  r = this.queryParams_.orderBy(n);
                return (
                  t.validateQueryEndpoints_(r),
                  new t(this.repo, this.path, r, !0)
                );
              }),
              (t.prototype.orderByKey = function () {
                l.validateArgCount("Query.orderByKey", 0, 0, arguments.length),
                  this.validateNoPreviousOrderByCall_("Query.orderByKey");
                var e = this.queryParams_.orderBy(It);
                return (
                  t.validateQueryEndpoints_(e),
                  new t(this.repo, this.path, e, !0)
                );
              }),
              (t.prototype.orderByPriority = function () {
                l.validateArgCount(
                  "Query.orderByPriority",
                  0,
                  0,
                  arguments.length
                ),
                  this.validateNoPreviousOrderByCall_("Query.orderByPriority");
                var e = this.queryParams_.orderBy($t);
                return (
                  t.validateQueryEndpoints_(e),
                  new t(this.repo, this.path, e, !0)
                );
              }),
              (t.prototype.orderByValue = function () {
                l.validateArgCount(
                  "Query.orderByValue",
                  0,
                  0,
                  arguments.length
                ),
                  this.validateNoPreviousOrderByCall_("Query.orderByValue");
                var e = this.queryParams_.orderBy(ee);
                return (
                  t.validateQueryEndpoints_(e),
                  new t(this.repo, this.path, e, !0)
                );
              }),
              (t.prototype.startAt = function (e, n) {
                void 0 === e && (e = null),
                  l.validateArgCount("Query.startAt", 0, 2, arguments.length),
                  ft("Query.startAt", 1, e, this.path, !0),
                  gt("Query.startAt", 2, n, !0);
                var r = this.queryParams_.startAt(e, n);
                if (
                  (t.validateLimit_(r),
                  t.validateQueryEndpoints_(r),
                  this.queryParams_.hasStart())
                )
                  throw new Error(
                    "Query.startAt: Starting point was already set (by another call to startAt or equalTo)."
                  );
                return (
                  void 0 === e && ((e = null), (n = null)),
                  new t(this.repo, this.path, r, this.orderByCalled_)
                );
              }),
              (t.prototype.endAt = function (e, n) {
                void 0 === e && (e = null),
                  l.validateArgCount("Query.endAt", 0, 2, arguments.length),
                  ft("Query.endAt", 1, e, this.path, !0),
                  gt("Query.endAt", 2, n, !0);
                var r = this.queryParams_.endAt(e, n);
                if (
                  (t.validateLimit_(r),
                  t.validateQueryEndpoints_(r),
                  this.queryParams_.hasEnd())
                )
                  throw new Error(
                    "Query.endAt: Ending point was already set (by another call to endAt or equalTo)."
                  );
                return new t(this.repo, this.path, r, this.orderByCalled_);
              }),
              (t.prototype.equalTo = function (t, e) {
                if (
                  (l.validateArgCount("Query.equalTo", 1, 2, arguments.length),
                  ft("Query.equalTo", 1, t, this.path, !1),
                  gt("Query.equalTo", 2, e, !0),
                  this.queryParams_.hasStart())
                )
                  throw new Error(
                    "Query.equalTo: Starting point was already set (by another call to startAt or equalTo)."
                  );
                if (this.queryParams_.hasEnd())
                  throw new Error(
                    "Query.equalTo: Ending point was already set (by another call to endAt or equalTo)."
                  );
                return this.startAt(t, e).endAt(t, e);
              }),
              (t.prototype.toString = function () {
                return (
                  l.validateArgCount("Query.toString", 0, 0, arguments.length),
                  this.repo.toString() + this.path.toUrlEncodedString()
                );
              }),
              (t.prototype.toJSON = function () {
                return (
                  l.validateArgCount("Query.toJSON", 0, 1, arguments.length),
                  this.toString()
                );
              }),
              (t.prototype.queryObject = function () {
                return this.queryParams_.getQueryObject();
              }),
              (t.prototype.queryIdentifier = function () {
                var t = this.queryObject(),
                  e = U(t);
                return "{}" === e ? "default" : e;
              }),
              (t.prototype.isEqual = function (e) {
                if (
                  (l.validateArgCount("Query.isEqual", 1, 1, arguments.length),
                  !(e instanceof t))
                ) {
                  var n =
                    "Query.isEqual failed: First argument must be an instance of firebase.database.Query.";
                  throw new Error(n);
                }
                var r = this.repo === e.repo,
                  o = this.path.equals(e.path),
                  c = this.queryIdentifier() === e.queryIdentifier();
                return r && o && c;
              }),
              (t.getCancelAndContextArgs_ = function (t, e, n) {
                var r = { cancel: null, context: null };
                if (e && n)
                  (r.cancel = e),
                    l.validateCallback(t, 3, r.cancel, !0),
                    (r.context = n),
                    l.validateContextObject(t, 4, r.context, !0);
                else if (e)
                  if ("object" == typeof e && null !== e) r.context = e;
                  else {
                    if ("function" != typeof e)
                      throw new Error(
                        l.errorPrefix(t, 3, !0) +
                          " must either be a cancel callback or a context object."
                      );
                    r.cancel = e;
                  }
                return r;
              }),
              Object.defineProperty(t.prototype, "ref", {
                get: function () {
                  return this.getRef();
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })(),
          ce = (function () {
            function t(t) {
              this.node_ = t;
            }
            return (
              (t.prototype.getImmediateChild = function (e) {
                return new t(this.node_.getImmediateChild(e));
              }),
              (t.prototype.node = function () {
                return this.node_;
              }),
              t
            );
          })(),
          le = (function () {
            function t(t, path) {
              (this.syncTree_ = t), (this.path_ = path);
            }
            return (
              (t.prototype.getImmediateChild = function (e) {
                var n = this.path_.child(e);
                return new t(this.syncTree_, n);
              }),
              (t.prototype.node = function () {
                return this.syncTree_.calcCompleteEventCache(this.path_);
              }),
              t
            );
          })(),
          de = function (t, e, n) {
            return t && "object" == typeof t
              ? (l.assert(
                  ".sv" in t,
                  "Unexpected leaf node or priority contents"
                ),
                "string" == typeof t[".sv"]
                  ? he(t[".sv"], e, n)
                  : "object" == typeof t[".sv"]
                  ? fe(t[".sv"], e)
                  : void l.assert(
                      !1,
                      "Unexpected server value: " + JSON.stringify(t, null, 2)
                    ))
              : t;
          },
          he = function (t, e, n) {
            switch (t) {
              case "timestamp":
                return n.timestamp;
              default:
                l.assert(!1, "Unexpected server value: " + t);
            }
          },
          fe = function (t, e, n) {
            t.hasOwnProperty("increment") ||
              l.assert(
                !1,
                "Unexpected server value: " + JSON.stringify(t, null, 2)
              );
            var r = t.increment;
            "number" != typeof r &&
              l.assert(!1, "Unexpected increment value: " + r);
            var o = e.node();
            if (
              (l.assert(
                null != o,
                "Expected ChildrenNode.EMPTY_NODE for nulls"
              ),
              !o.isLeafNode())
            )
              return r;
            var c = o.getValue();
            return "number" != typeof c ? r : c + r;
          },
          pe = function (path, t, e, n) {
            return me(t, new le(e, path), n);
          },
          ve = function (t, e, n) {
            return me(t, new ce(e), n);
          };
        function me(t, e, n) {
          var r,
            o = t.getPriority().val(),
            c = de(o, e.getImmediateChild(".priority"), n);
          if (t.isLeafNode()) {
            var l = t,
              d = de(l.getValue(), e, n);
            return d !== l.getValue() || c !== l.getPriority().val()
              ? new Rt(d, Jt(c))
              : t;
          }
          var h = t;
          return (
            (r = h),
            c !== h.getPriority().val() && (r = r.updatePriority(new Rt(c))),
            h.forEachChild($t, function (t, o) {
              var c = me(o, e.getImmediateChild(t), n);
              c !== o && (r = r.updateImmediateChild(t, c));
            }),
            r
          );
        }
        var ye,
          ge = (function () {
            function t() {
              (this.value = null), (this.children = new Map());
            }
            return (
              (t.prototype.find = function (path) {
                if (null != this.value) return this.value.getChild(path);
                if (!path.isEmpty() && this.children.size > 0) {
                  var t = path.getFront();
                  return (
                    (path = path.popFront()),
                    this.children.has(t)
                      ? this.children.get(t).find(path)
                      : null
                  );
                }
                return null;
              }),
              (t.prototype.remember = function (path, data) {
                if (path.isEmpty()) (this.value = data), this.children.clear();
                else if (null !== this.value)
                  this.value = this.value.updateChild(path, data);
                else {
                  var e = path.getFront();
                  this.children.has(e) || this.children.set(e, new t());
                  var n = this.children.get(e);
                  (path = path.popFront()), n.remember(path, data);
                }
              }),
              (t.prototype.forget = function (path) {
                if (path.isEmpty())
                  return (this.value = null), this.children.clear(), !0;
                if (null !== this.value) {
                  if (this.value.isLeafNode()) return !1;
                  var t = this.value;
                  this.value = null;
                  var e = this;
                  return (
                    t.forEachChild($t, function (t, n) {
                      e.remember(new Z(t), n);
                    }),
                    this.forget(path)
                  );
                }
                if (this.children.size > 0) {
                  var n = path.getFront();
                  if (((path = path.popFront()), this.children.has(n)))
                    this.children.get(n).forget(path) &&
                      this.children.delete(n);
                  return 0 === this.children.size;
                }
                return !0;
              }),
              (t.prototype.forEachTree = function (t, e) {
                null !== this.value
                  ? e(t, this.value)
                  : this.forEachChild(function (n, r) {
                      var path = new Z(t.toString() + "/" + n);
                      r.forEachTree(path, e);
                    });
              }),
              (t.prototype.forEachChild = function (t) {
                this.children.forEach(function (e, n) {
                  t(n, e);
                });
              }),
              t
            );
          })();
        !(function (t) {
          (t[(t.OVERWRITE = 0)] = "OVERWRITE"),
            (t[(t.MERGE = 1)] = "MERGE"),
            (t[(t.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
            (t[(t.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
        })(ye || (ye = {}));
        var _e,
          be,
          we = (function () {
            function t(t, e, n, r) {
              (this.fromUser = t),
                (this.fromServer = e),
                (this.queryId = n),
                (this.tagged = r),
                l.assert(!r || e, "Tagged queries must be from server.");
            }
            return (
              (t.User = new t(!0, !1, null, !1)),
              (t.Server = new t(!1, !0, null, !1)),
              (t.forServerTaggedQuery = function (e) {
                return new t(!1, !0, e, !0);
              }),
              t
            );
          })(),
          Ce = (function () {
            function t(path, t, e) {
              (this.path = path),
                (this.affectedTree = t),
                (this.revert = e),
                (this.type = ye.ACK_USER_WRITE),
                (this.source = we.User);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                  if (null != this.affectedTree.value)
                    return (
                      l.assert(
                        this.affectedTree.children.isEmpty(),
                        "affectedTree should not have overlapping affected paths."
                      ),
                      this
                    );
                  var n = this.affectedTree.subtree(new Z(e));
                  return new t(Z.Empty, n, this.revert);
                }
                return (
                  l.assert(
                    this.path.getFront() === e,
                    "operationForChild called for unrelated child."
                  ),
                  new t(this.path.popFront(), this.affectedTree, this.revert)
                );
              }),
              t
            );
          })(),
          Ee = (function () {
            function t(t, e) {
              void 0 === e && (_e || (_e = new Vt($)), (e = _e)),
                (this.value = t),
                (this.children = e);
            }
            return (
              (t.fromObject = function (e) {
                var n = t.Empty;
                return (
                  W(e, function (t, e) {
                    n = n.set(new Z(t), e);
                  }),
                  n
                );
              }),
              (t.prototype.isEmpty = function () {
                return null === this.value && this.children.isEmpty();
              }),
              (t.prototype.findRootMostMatchingPathAndValue = function (t, e) {
                if (null != this.value && e(this.value))
                  return { path: Z.Empty, value: this.value };
                if (t.isEmpty()) return null;
                var n = t.getFront(),
                  r = this.children.get(n);
                if (null !== r) {
                  var o = r.findRootMostMatchingPathAndValue(t.popFront(), e);
                  return null != o
                    ? { path: new Z(n).child(o.path), value: o.value }
                    : null;
                }
                return null;
              }),
              (t.prototype.findRootMostValueAndPath = function (t) {
                return this.findRootMostMatchingPathAndValue(t, function () {
                  return !0;
                });
              }),
              (t.prototype.subtree = function (e) {
                if (e.isEmpty()) return this;
                var n = e.getFront(),
                  r = this.children.get(n);
                return null !== r ? r.subtree(e.popFront()) : t.Empty;
              }),
              (t.prototype.set = function (e, n) {
                if (e.isEmpty()) return new t(n, this.children);
                var r = e.getFront(),
                  o = (this.children.get(r) || t.Empty).set(e.popFront(), n),
                  c = this.children.insert(r, o);
                return new t(this.value, c);
              }),
              (t.prototype.remove = function (e) {
                if (e.isEmpty())
                  return this.children.isEmpty()
                    ? t.Empty
                    : new t(null, this.children);
                var n = e.getFront(),
                  r = this.children.get(n);
                if (r) {
                  var o = r.remove(e.popFront()),
                    c = void 0;
                  return (
                    (c = o.isEmpty()
                      ? this.children.remove(n)
                      : this.children.insert(n, o)),
                    null === this.value && c.isEmpty()
                      ? t.Empty
                      : new t(this.value, c)
                  );
                }
                return this;
              }),
              (t.prototype.get = function (t) {
                if (t.isEmpty()) return this.value;
                var e = t.getFront(),
                  n = this.children.get(e);
                return n ? n.get(t.popFront()) : null;
              }),
              (t.prototype.setTree = function (e, n) {
                if (e.isEmpty()) return n;
                var r = e.getFront(),
                  o = (this.children.get(r) || t.Empty).setTree(
                    e.popFront(),
                    n
                  ),
                  c = void 0;
                return (
                  (c = o.isEmpty()
                    ? this.children.remove(r)
                    : this.children.insert(r, o)),
                  new t(this.value, c)
                );
              }),
              (t.prototype.fold = function (t) {
                return this.fold_(Z.Empty, t);
              }),
              (t.prototype.fold_ = function (t, e) {
                var n = {};
                return (
                  this.children.inorderTraversal(function (r, o) {
                    n[r] = o.fold_(t.child(r), e);
                  }),
                  e(t, this.value, n)
                );
              }),
              (t.prototype.findOnPath = function (path, t) {
                return this.findOnPath_(path, Z.Empty, t);
              }),
              (t.prototype.findOnPath_ = function (t, e, n) {
                var r = !!this.value && n(e, this.value);
                if (r) return r;
                if (t.isEmpty()) return null;
                var o = t.getFront(),
                  c = this.children.get(o);
                return c ? c.findOnPath_(t.popFront(), e.child(o), n) : null;
              }),
              (t.prototype.foreachOnPath = function (path, t) {
                return this.foreachOnPath_(path, Z.Empty, t);
              }),
              (t.prototype.foreachOnPath_ = function (e, n, r) {
                if (e.isEmpty()) return this;
                this.value && r(n, this.value);
                var o = e.getFront(),
                  c = this.children.get(o);
                return c
                  ? c.foreachOnPath_(e.popFront(), n.child(o), r)
                  : t.Empty;
              }),
              (t.prototype.foreach = function (t) {
                this.foreach_(Z.Empty, t);
              }),
              (t.prototype.foreach_ = function (t, e) {
                this.children.inorderTraversal(function (n, r) {
                  r.foreach_(t.child(n), e);
                }),
                  this.value && e(t, this.value);
              }),
              (t.prototype.foreachChild = function (t) {
                this.children.inorderTraversal(function (e, n) {
                  n.value && t(e, n.value);
                });
              }),
              (t.Empty = new t(null)),
              t
            );
          })(),
          Te = (function () {
            function t(source, path) {
              (this.source = source),
                (this.path = path),
                (this.type = ye.LISTEN_COMPLETE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                return this.path.isEmpty()
                  ? new t(this.source, Z.Empty)
                  : new t(this.source, this.path.popFront());
              }),
              t
            );
          })(),
          xe = (function () {
            function t(source, path, t) {
              (this.source = source),
                (this.path = path),
                (this.snap = t),
                (this.type = ye.OVERWRITE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                return this.path.isEmpty()
                  ? new t(this.source, Z.Empty, this.snap.getImmediateChild(e))
                  : new t(this.source, this.path.popFront(), this.snap);
              }),
              t
            );
          })(),
          Ae = (function () {
            function t(source, path, t) {
              (this.source = source),
                (this.path = path),
                (this.children = t),
                (this.type = ye.MERGE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                  var n = this.children.subtree(new Z(e));
                  return n.isEmpty()
                    ? null
                    : n.value
                    ? new xe(this.source, Z.Empty, n.value)
                    : new t(this.source, Z.Empty, n);
                }
                return (
                  l.assert(
                    this.path.getFront() === e,
                    "Can't get a merge for a child not on the path of the operation"
                  ),
                  new t(this.source, this.path.popFront(), this.children)
                );
              }),
              (t.prototype.toString = function () {
                return (
                  "Operation(" +
                  this.path +
                  ": " +
                  this.source.toString() +
                  " merge: " +
                  this.children.toString() +
                  ")"
                );
              }),
              t
            );
          })(),
          Se = (function () {
            function t(t, e, n) {
              (this.node_ = t),
                (this.fullyInitialized_ = e),
                (this.filtered_ = n);
            }
            return (
              (t.prototype.isFullyInitialized = function () {
                return this.fullyInitialized_;
              }),
              (t.prototype.isFiltered = function () {
                return this.filtered_;
              }),
              (t.prototype.isCompleteForPath = function (path) {
                if (path.isEmpty())
                  return this.isFullyInitialized() && !this.filtered_;
                var t = path.getFront();
                return this.isCompleteForChild(t);
              }),
              (t.prototype.isCompleteForChild = function (t) {
                return (
                  (this.isFullyInitialized() && !this.filtered_) ||
                  this.node_.hasChild(t)
                );
              }),
              (t.prototype.getNode = function () {
                return this.node_;
              }),
              t
            );
          })(),
          Ne = (function () {
            function t(t, e) {
              (this.eventCache_ = t), (this.serverCache_ = e);
            }
            return (
              (t.prototype.updateEventSnap = function (e, n, r) {
                return new t(new Se(e, n, r), this.serverCache_);
              }),
              (t.prototype.updateServerSnap = function (e, n, r) {
                return new t(this.eventCache_, new Se(e, n, r));
              }),
              (t.prototype.getEventCache = function () {
                return this.eventCache_;
              }),
              (t.prototype.getCompleteEventSnap = function () {
                return this.eventCache_.isFullyInitialized()
                  ? this.eventCache_.getNode()
                  : null;
              }),
              (t.prototype.getServerCache = function () {
                return this.serverCache_;
              }),
              (t.prototype.getCompleteServerSnap = function () {
                return this.serverCache_.isFullyInitialized()
                  ? this.serverCache_.getNode()
                  : null;
              }),
              (t.Empty = new t(
                new Se(Kt.EMPTY_NODE, !1, !1),
                new Se(Kt.EMPTY_NODE, !1, !1)
              )),
              t
            );
          })(),
          Oe = (function () {
            function t(t, e, n, r, o) {
              (this.type = t),
                (this.snapshotNode = e),
                (this.childName = n),
                (this.oldSnap = r),
                (this.prevName = o);
            }
            return (
              (t.valueChange = function (e) {
                return new t(t.VALUE, e);
              }),
              (t.childAddedChange = function (e, n) {
                return new t(t.CHILD_ADDED, n, e);
              }),
              (t.childRemovedChange = function (e, n) {
                return new t(t.CHILD_REMOVED, n, e);
              }),
              (t.childChangedChange = function (e, n, r) {
                return new t(t.CHILD_CHANGED, n, e, r);
              }),
              (t.childMovedChange = function (e, n) {
                return new t(t.CHILD_MOVED, n, e);
              }),
              (t.CHILD_ADDED = "child_added"),
              (t.CHILD_REMOVED = "child_removed"),
              (t.CHILD_CHANGED = "child_changed"),
              (t.CHILD_MOVED = "child_moved"),
              (t.VALUE = "value"),
              t
            );
          })(),
          Ie = (function () {
            function t(t) {
              this.index_ = t;
            }
            return (
              (t.prototype.updateChild = function (t, e, n, r, source, o) {
                l.assert(
                  t.isIndexed(this.index_),
                  "A node must be indexed if only a child is updated"
                );
                var c = t.getImmediateChild(e);
                return c.getChild(r).equals(n.getChild(r)) &&
                  c.isEmpty() === n.isEmpty()
                  ? t
                  : (null != o &&
                      (n.isEmpty()
                        ? t.hasChild(e)
                          ? o.trackChildChange(Oe.childRemovedChange(e, c))
                          : l.assert(
                              t.isLeafNode(),
                              "A child remove without an old child only makes sense on a leaf node"
                            )
                        : c.isEmpty()
                        ? o.trackChildChange(Oe.childAddedChange(e, n))
                        : o.trackChildChange(Oe.childChangedChange(e, n, c))),
                    t.isLeafNode() && n.isEmpty()
                      ? t
                      : t.updateImmediateChild(e, n).withIndex(this.index_));
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                return (
                  null != n &&
                    (t.isLeafNode() ||
                      t.forEachChild($t, function (t, r) {
                        e.hasChild(t) ||
                          n.trackChildChange(Oe.childRemovedChange(t, r));
                      }),
                    e.isLeafNode() ||
                      e.forEachChild($t, function (e, r) {
                        if (t.hasChild(e)) {
                          var o = t.getImmediateChild(e);
                          o.equals(r) ||
                            n.trackChildChange(Oe.childChangedChange(e, r, o));
                        } else n.trackChildChange(Oe.childAddedChange(e, r));
                      })),
                  e.withIndex(this.index_)
                );
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t.isEmpty() ? Kt.EMPTY_NODE : t.updatePriority(e);
              }),
              (t.prototype.filtersNodes = function () {
                return !1;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this;
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              t
            );
          })(),
          De = (function () {
            function t() {
              this.changeMap = new Map();
            }
            return (
              (t.prototype.trackChildChange = function (t) {
                var e = t.type,
                  n = t.childName;
                l.assert(
                  e === Oe.CHILD_ADDED ||
                    e === Oe.CHILD_CHANGED ||
                    e === Oe.CHILD_REMOVED,
                  "Only child changes supported for tracking"
                ),
                  l.assert(
                    ".priority" !== n,
                    "Only non-priority child changes can be tracked."
                  );
                var r = this.changeMap.get(n);
                if (r) {
                  var o = r.type;
                  if (e === Oe.CHILD_ADDED && o === Oe.CHILD_REMOVED)
                    this.changeMap.set(
                      n,
                      Oe.childChangedChange(n, t.snapshotNode, r.snapshotNode)
                    );
                  else if (e === Oe.CHILD_REMOVED && o === Oe.CHILD_ADDED)
                    this.changeMap.delete(n);
                  else if (e === Oe.CHILD_REMOVED && o === Oe.CHILD_CHANGED)
                    this.changeMap.set(n, Oe.childRemovedChange(n, r.oldSnap));
                  else if (e === Oe.CHILD_CHANGED && o === Oe.CHILD_ADDED)
                    this.changeMap.set(
                      n,
                      Oe.childAddedChange(n, t.snapshotNode)
                    );
                  else {
                    if (e !== Oe.CHILD_CHANGED || o !== Oe.CHILD_CHANGED)
                      throw l.assertionError(
                        "Illegal combination of changes: " +
                          t +
                          " occurred after " +
                          r
                      );
                    this.changeMap.set(
                      n,
                      Oe.childChangedChange(n, t.snapshotNode, r.oldSnap)
                    );
                  }
                } else this.changeMap.set(n, t);
              }),
              (t.prototype.getChanges = function () {
                return Array.from(this.changeMap.values());
              }),
              t
            );
          })(),
          ke = new ((function () {
            function t() {}
            return (
              (t.prototype.getCompleteChild = function (t) {
                return null;
              }),
              (t.prototype.getChildAfterChild = function (t, e, n) {
                return null;
              }),
              t
            );
          })())(),
          Pe = (function () {
            function t(t, e, n) {
              void 0 === n && (n = null),
                (this.writes_ = t),
                (this.viewCache_ = e),
                (this.optCompleteServerCache_ = n);
            }
            return (
              (t.prototype.getCompleteChild = function (t) {
                var e = this.viewCache_.getEventCache();
                if (e.isCompleteForChild(t))
                  return e.getNode().getImmediateChild(t);
                var n =
                  null != this.optCompleteServerCache_
                    ? new Se(this.optCompleteServerCache_, !0, !1)
                    : this.viewCache_.getServerCache();
                return this.writes_.calcCompleteChild(t, n);
              }),
              (t.prototype.getChildAfterChild = function (t, e, n) {
                var r =
                    null != this.optCompleteServerCache_
                      ? this.optCompleteServerCache_
                      : this.viewCache_.getCompleteServerSnap(),
                  o = this.writes_.calcIndexedSlice(r, e, 1, n, t);
                return 0 === o.length ? null : o[0];
              }),
              t
            );
          })(),
          Me = function (t, e) {
            (this.viewCache = t), (this.changes = e);
          },
          Fe = (function () {
            function t(t) {
              this.filter_ = t;
            }
            return (
              (t.prototype.assertIndexed = function (t) {
                l.assert(
                  t
                    .getEventCache()
                    .getNode()
                    .isIndexed(this.filter_.getIndex()),
                  "Event snap not indexed"
                ),
                  l.assert(
                    t
                      .getServerCache()
                      .getNode()
                      .isIndexed(this.filter_.getIndex()),
                    "Server snap not indexed"
                  );
              }),
              (t.prototype.applyOperation = function (e, n, r, o) {
                var c,
                  d,
                  h = new De();
                if (n.type === ye.OVERWRITE) {
                  var f = n;
                  f.source.fromUser
                    ? (c = this.applyUserOverwrite_(e, f.path, f.snap, r, o, h))
                    : (l.assert(f.source.fromServer, "Unknown source."),
                      (d =
                        f.source.tagged ||
                        (e.getServerCache().isFiltered() && !f.path.isEmpty())),
                      (c = this.applyServerOverwrite_(
                        e,
                        f.path,
                        f.snap,
                        r,
                        o,
                        d,
                        h
                      )));
                } else if (n.type === ye.MERGE) {
                  var v = n;
                  v.source.fromUser
                    ? (c = this.applyUserMerge_(e, v.path, v.children, r, o, h))
                    : (l.assert(v.source.fromServer, "Unknown source."),
                      (d = v.source.tagged || e.getServerCache().isFiltered()),
                      (c = this.applyServerMerge_(
                        e,
                        v.path,
                        v.children,
                        r,
                        o,
                        d,
                        h
                      )));
                } else if (n.type === ye.ACK_USER_WRITE) {
                  var m = n;
                  c = m.revert
                    ? this.revertUserWrite_(e, m.path, r, o, h)
                    : this.ackUserWrite_(e, m.path, m.affectedTree, r, o, h);
                } else {
                  if (n.type !== ye.LISTEN_COMPLETE)
                    throw l.assertionError("Unknown operation type: " + n.type);
                  c = this.listenComplete_(e, n.path, r, h);
                }
                var y = h.getChanges();
                return t.maybeAddValueEvent_(e, c, y), new Me(c, y);
              }),
              (t.maybeAddValueEvent_ = function (t, e, n) {
                var r = e.getEventCache();
                if (r.isFullyInitialized()) {
                  var o = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                    c = t.getCompleteEventSnap();
                  (n.length > 0 ||
                    !t.getEventCache().isFullyInitialized() ||
                    (o && !r.getNode().equals(c)) ||
                    !r.getNode().getPriority().equals(c.getPriority())) &&
                    n.push(Oe.valueChange(e.getCompleteEventSnap()));
                }
              }),
              (t.prototype.generateEventCacheAfterServerEvent_ = function (
                t,
                e,
                n,
                source,
                r
              ) {
                var o = t.getEventCache();
                if (null != n.shadowingWrite(e)) return t;
                var c = void 0,
                  d = void 0;
                if (e.isEmpty())
                  if (
                    (l.assert(
                      t.getServerCache().isFullyInitialized(),
                      "If change path is empty, we must have complete server data"
                    ),
                    t.getServerCache().isFiltered())
                  ) {
                    var h = t.getCompleteServerSnap(),
                      f = h instanceof Kt ? h : Kt.EMPTY_NODE,
                      v = n.calcCompleteEventChildren(f);
                    c = this.filter_.updateFullNode(
                      t.getEventCache().getNode(),
                      v,
                      r
                    );
                  } else {
                    var m = n.calcCompleteEventCache(t.getCompleteServerSnap());
                    c = this.filter_.updateFullNode(
                      t.getEventCache().getNode(),
                      m,
                      r
                    );
                  }
                else {
                  var y = e.getFront();
                  if (".priority" === y) {
                    l.assert(
                      1 === e.getLength(),
                      "Can't have a priority with additional path components"
                    );
                    var _ = o.getNode();
                    d = t.getServerCache().getNode();
                    var w = n.calcEventCacheAfterServerOverwrite(e, _, d);
                    c =
                      null != w
                        ? this.filter_.updatePriority(_, w)
                        : o.getNode();
                  } else {
                    var C = e.popFront(),
                      E = void 0;
                    if (o.isCompleteForChild(y)) {
                      d = t.getServerCache().getNode();
                      var T = n.calcEventCacheAfterServerOverwrite(
                        e,
                        o.getNode(),
                        d
                      );
                      E =
                        null != T
                          ? o.getNode().getImmediateChild(y).updateChild(C, T)
                          : o.getNode().getImmediateChild(y);
                    } else E = n.calcCompleteChild(y, t.getServerCache());
                    c =
                      null != E
                        ? this.filter_.updateChild(
                            o.getNode(),
                            y,
                            E,
                            C,
                            source,
                            r
                          )
                        : o.getNode();
                  }
                }
                return t.updateEventSnap(
                  c,
                  o.isFullyInitialized() || e.isEmpty(),
                  this.filter_.filtersNodes()
                );
              }),
              (t.prototype.applyServerOverwrite_ = function (
                t,
                e,
                n,
                r,
                o,
                c,
                l
              ) {
                var d,
                  h = t.getServerCache(),
                  f = c ? this.filter_ : this.filter_.getIndexedFilter();
                if (e.isEmpty()) d = f.updateFullNode(h.getNode(), n, null);
                else if (f.filtersNodes() && !h.isFiltered()) {
                  var v = h.getNode().updateChild(e, n);
                  d = f.updateFullNode(h.getNode(), v, null);
                } else {
                  var m = e.getFront();
                  if (!h.isCompleteForPath(e) && e.getLength() > 1) return t;
                  var y = e.popFront(),
                    _ = h.getNode().getImmediateChild(m).updateChild(y, n);
                  d =
                    ".priority" === m
                      ? f.updatePriority(h.getNode(), _)
                      : f.updateChild(h.getNode(), m, _, y, ke, null);
                }
                var w = t.updateServerSnap(
                    d,
                    h.isFullyInitialized() || e.isEmpty(),
                    f.filtersNodes()
                  ),
                  source = new Pe(r, w, o);
                return this.generateEventCacheAfterServerEvent_(
                  w,
                  e,
                  r,
                  source,
                  l
                );
              }),
              (t.prototype.applyUserOverwrite_ = function (t, e, n, r, o, c) {
                var l,
                  d,
                  h = t.getEventCache(),
                  source = new Pe(r, t, o);
                if (e.isEmpty())
                  (d = this.filter_.updateFullNode(
                    t.getEventCache().getNode(),
                    n,
                    c
                  )),
                    (l = t.updateEventSnap(d, !0, this.filter_.filtersNodes()));
                else {
                  var f = e.getFront();
                  if (".priority" === f)
                    (d = this.filter_.updatePriority(
                      t.getEventCache().getNode(),
                      n
                    )),
                      (l = t.updateEventSnap(
                        d,
                        h.isFullyInitialized(),
                        h.isFiltered()
                      ));
                  else {
                    var v = e.popFront(),
                      m = h.getNode().getImmediateChild(f),
                      y = void 0;
                    if (v.isEmpty()) y = n;
                    else {
                      var _ = source.getCompleteChild(f);
                      y =
                        null != _
                          ? ".priority" === v.getBack() &&
                            _.getChild(v.parent()).isEmpty()
                            ? _
                            : _.updateChild(v, n)
                          : Kt.EMPTY_NODE;
                    }
                    if (m.equals(y)) l = t;
                    else {
                      var w = this.filter_.updateChild(
                        h.getNode(),
                        f,
                        y,
                        v,
                        source,
                        c
                      );
                      l = t.updateEventSnap(
                        w,
                        h.isFullyInitialized(),
                        this.filter_.filtersNodes()
                      );
                    }
                  }
                }
                return l;
              }),
              (t.cacheHasChild_ = function (t, e) {
                return t.getEventCache().isCompleteForChild(e);
              }),
              (t.prototype.applyUserMerge_ = function (e, path, n, r, o, c) {
                var l = this,
                  d = e;
                return (
                  n.foreach(function (n, h) {
                    var f = path.child(n);
                    t.cacheHasChild_(e, f.getFront()) &&
                      (d = l.applyUserOverwrite_(d, f, h, r, o, c));
                  }),
                  n.foreach(function (n, h) {
                    var f = path.child(n);
                    t.cacheHasChild_(e, f.getFront()) ||
                      (d = l.applyUserOverwrite_(d, f, h, r, o, c));
                  }),
                  d
                );
              }),
              (t.prototype.applyMerge_ = function (t, e) {
                return (
                  e.foreach(function (e, n) {
                    t = t.updateChild(e, n);
                  }),
                  t
                );
              }),
              (t.prototype.applyServerMerge_ = function (
                t,
                path,
                e,
                n,
                r,
                o,
                c
              ) {
                var l = this;
                if (
                  t.getServerCache().getNode().isEmpty() &&
                  !t.getServerCache().isFullyInitialized()
                )
                  return t;
                var d,
                  h = t;
                d = path.isEmpty() ? e : Ee.Empty.setTree(path, e);
                var f = t.getServerCache().getNode();
                return (
                  d.children.inorderTraversal(function (e, d) {
                    if (f.hasChild(e)) {
                      var v = t.getServerCache().getNode().getImmediateChild(e),
                        m = l.applyMerge_(v, d);
                      h = l.applyServerOverwrite_(h, new Z(e), m, n, r, o, c);
                    }
                  }),
                  d.children.inorderTraversal(function (e, d) {
                    var v =
                      !t.getServerCache().isCompleteForChild(e) &&
                      null == d.value;
                    if (!f.hasChild(e) && !v) {
                      var m = t.getServerCache().getNode().getImmediateChild(e),
                        y = l.applyMerge_(m, d);
                      h = l.applyServerOverwrite_(h, new Z(e), y, n, r, o, c);
                    }
                  }),
                  h
                );
              }),
              (t.prototype.ackUserWrite_ = function (t, e, n, r, o, c) {
                if (null != r.shadowingWrite(e)) return t;
                var l = t.getServerCache().isFiltered(),
                  d = t.getServerCache();
                if (null != n.value) {
                  if (
                    (e.isEmpty() && d.isFullyInitialized()) ||
                    d.isCompleteForPath(e)
                  )
                    return this.applyServerOverwrite_(
                      t,
                      e,
                      d.getNode().getChild(e),
                      r,
                      o,
                      l,
                      c
                    );
                  if (e.isEmpty()) {
                    var h = Ee.Empty;
                    return (
                      d.getNode().forEachChild(It, function (t, e) {
                        h = h.set(new Z(t), e);
                      }),
                      this.applyServerMerge_(t, e, h, r, o, l, c)
                    );
                  }
                  return t;
                }
                var f = Ee.Empty;
                return (
                  n.foreach(function (t, n) {
                    var r = e.child(t);
                    d.isCompleteForPath(r) &&
                      (f = f.set(t, d.getNode().getChild(r)));
                  }),
                  this.applyServerMerge_(t, e, f, r, o, l, c)
                );
              }),
              (t.prototype.listenComplete_ = function (t, path, e, n) {
                var r = t.getServerCache(),
                  o = t.updateServerSnap(
                    r.getNode(),
                    r.isFullyInitialized() || path.isEmpty(),
                    r.isFiltered()
                  );
                return this.generateEventCacheAfterServerEvent_(
                  o,
                  path,
                  e,
                  ke,
                  n
                );
              }),
              (t.prototype.revertUserWrite_ = function (t, path, e, n, r) {
                var o;
                if (null != e.shadowingWrite(path)) return t;
                var source = new Pe(e, t, n),
                  c = t.getEventCache().getNode(),
                  d = void 0;
                if (path.isEmpty() || ".priority" === path.getFront()) {
                  var h = void 0;
                  if (t.getServerCache().isFullyInitialized())
                    h = e.calcCompleteEventCache(t.getCompleteServerSnap());
                  else {
                    var f = t.getServerCache().getNode();
                    l.assert(
                      f instanceof Kt,
                      "serverChildren would be complete if leaf node"
                    ),
                      (h = e.calcCompleteEventChildren(f));
                  }
                  (h = h), (d = this.filter_.updateFullNode(c, h, r));
                } else {
                  var v = path.getFront(),
                    m = e.calcCompleteChild(v, t.getServerCache());
                  null == m &&
                    t.getServerCache().isCompleteForChild(v) &&
                    (m = c.getImmediateChild(v)),
                    (d =
                      null != m
                        ? this.filter_.updateChild(
                            c,
                            v,
                            m,
                            path.popFront(),
                            source,
                            r
                          )
                        : t.getEventCache().getNode().hasChild(v)
                        ? this.filter_.updateChild(
                            c,
                            v,
                            Kt.EMPTY_NODE,
                            path.popFront(),
                            source,
                            r
                          )
                        : c).isEmpty() &&
                      t.getServerCache().isFullyInitialized() &&
                      (o = e.calcCompleteEventCache(
                        t.getCompleteServerSnap()
                      )).isLeafNode() &&
                      (d = this.filter_.updateFullNode(d, o, r));
                }
                return (
                  (o =
                    t.getServerCache().isFullyInitialized() ||
                    null != e.shadowingWrite(Z.Empty)),
                  t.updateEventSnap(d, o, this.filter_.filtersNodes())
                );
              }),
              t
            );
          })(),
          Re = (function () {
            function t(t) {
              (this.query_ = t),
                (this.index_ = this.query_.getQueryParams().getIndex());
            }
            return (
              (t.prototype.generateEventsForChanges = function (t, e, n) {
                var r = this,
                  o = [],
                  c = [];
                return (
                  t.forEach(function (t) {
                    t.type === Oe.CHILD_CHANGED &&
                      r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                      c.push(Oe.childMovedChange(t.childName, t.snapshotNode));
                  }),
                  this.generateEventsForType_(o, Oe.CHILD_REMOVED, t, n, e),
                  this.generateEventsForType_(o, Oe.CHILD_ADDED, t, n, e),
                  this.generateEventsForType_(o, Oe.CHILD_MOVED, c, n, e),
                  this.generateEventsForType_(o, Oe.CHILD_CHANGED, t, n, e),
                  this.generateEventsForType_(o, Oe.VALUE, t, n, e),
                  o
                );
              }),
              (t.prototype.generateEventsForType_ = function (t, e, n, r, o) {
                var c = this,
                  l = n.filter(function (t) {
                    return t.type === e;
                  });
                l.sort(this.compareChanges_.bind(this)),
                  l.forEach(function (e) {
                    var n = c.materializeSingleChange_(e, o);
                    r.forEach(function (r) {
                      r.respondsTo(e.type) &&
                        t.push(r.createEvent(n, c.query_));
                    });
                  });
              }),
              (t.prototype.materializeSingleChange_ = function (t, e) {
                return (
                  "value" === t.type ||
                    "child_removed" === t.type ||
                    (t.prevName = e.getPredecessorChildName(
                      t.childName,
                      t.snapshotNode,
                      this.index_
                    )),
                  t
                );
              }),
              (t.prototype.compareChanges_ = function (a, b) {
                if (null == a.childName || null == b.childName)
                  throw l.assertionError("Should only compare child_ events.");
                var t = new St(a.childName, a.snapshotNode),
                  e = new St(b.childName, b.snapshotNode);
                return this.index_.compare(t, e);
              }),
              t
            );
          })(),
          Le = (function () {
            function t(t, e) {
              (this.query_ = t), (this.eventRegistrations_ = []);
              var n = this.query_.getQueryParams(),
                r = new Ie(n.getIndex()),
                filter = n.getNodeFilter();
              this.processor_ = new Fe(filter);
              var o = e.getServerCache(),
                c = e.getEventCache(),
                l = r.updateFullNode(Kt.EMPTY_NODE, o.getNode(), null),
                d = filter.updateFullNode(Kt.EMPTY_NODE, c.getNode(), null),
                h = new Se(l, o.isFullyInitialized(), r.filtersNodes()),
                f = new Se(d, c.isFullyInitialized(), filter.filtersNodes());
              (this.viewCache_ = new Ne(f, h)),
                (this.eventGenerator_ = new Re(this.query_));
            }
            return (
              (t.prototype.getQuery = function () {
                return this.query_;
              }),
              (t.prototype.getServerCache = function () {
                return this.viewCache_.getServerCache().getNode();
              }),
              (t.prototype.getCompleteServerCache = function (path) {
                var t = this.viewCache_.getCompleteServerSnap();
                return t &&
                  (this.query_.getQueryParams().loadsAllData() ||
                    (!path.isEmpty() &&
                      !t.getImmediateChild(path.getFront()).isEmpty()))
                  ? t.getChild(path)
                  : null;
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this.eventRegistrations_.length;
              }),
              (t.prototype.addEventRegistration = function (t) {
                this.eventRegistrations_.push(t);
              }),
              (t.prototype.removeEventRegistration = function (t, e) {
                var n = [];
                if (e) {
                  l.assert(
                    null == t,
                    "A cancel should cancel all event registrations."
                  );
                  var r = this.query_.path;
                  this.eventRegistrations_.forEach(function (t) {
                    e = e;
                    var o = t.createCancelEvent(e, r);
                    o && n.push(o);
                  });
                }
                if (t) {
                  for (
                    var o = [], i = 0;
                    i < this.eventRegistrations_.length;
                    ++i
                  ) {
                    var c = this.eventRegistrations_[i];
                    if (c.matches(t)) {
                      if (t.hasAnyCallback()) {
                        o = o.concat(this.eventRegistrations_.slice(i + 1));
                        break;
                      }
                    } else o.push(c);
                  }
                  this.eventRegistrations_ = o;
                } else this.eventRegistrations_ = [];
                return n;
              }),
              (t.prototype.applyOperation = function (t, e, n) {
                t.type === ye.MERGE &&
                  null !== t.source.queryId &&
                  (l.assert(
                    this.viewCache_.getCompleteServerSnap(),
                    "We should always have a full cache before handling merges"
                  ),
                  l.assert(
                    this.viewCache_.getCompleteEventSnap(),
                    "Missing event cache, even though we have a server cache"
                  ));
                var r = this.viewCache_,
                  o = this.processor_.applyOperation(r, t, e, n);
                return (
                  this.processor_.assertIndexed(o.viewCache),
                  l.assert(
                    o.viewCache.getServerCache().isFullyInitialized() ||
                      !r.getServerCache().isFullyInitialized(),
                    "Once a server snap is complete, it should never go back"
                  ),
                  (this.viewCache_ = o.viewCache),
                  this.generateEventsForChanges_(
                    o.changes,
                    o.viewCache.getEventCache().getNode(),
                    null
                  )
                );
              }),
              (t.prototype.getInitialEvents = function (t) {
                var e = this.viewCache_.getEventCache(),
                  n = [];
                e.getNode().isLeafNode() ||
                  e.getNode().forEachChild($t, function (t, e) {
                    n.push(Oe.childAddedChange(t, e));
                  });
                return (
                  e.isFullyInitialized() && n.push(Oe.valueChange(e.getNode())),
                  this.generateEventsForChanges_(n, e.getNode(), t)
                );
              }),
              (t.prototype.generateEventsForChanges_ = function (t, e, n) {
                var r = n ? [n] : this.eventRegistrations_;
                return this.eventGenerator_.generateEventsForChanges(t, e, r);
              }),
              t
            );
          })(),
          je = (function () {
            function t() {
              this.views = new Map();
            }
            return (
              Object.defineProperty(t, "__referenceConstructor", {
                get: function () {
                  return l.assert(be, "Reference.ts has not been loaded"), be;
                },
                set: function (t) {
                  l.assert(
                    !be,
                    "__referenceConstructor has already been defined"
                  ),
                    (be = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this.views.size;
              }),
              (t.prototype.applyOperation = function (t, e, n) {
                var r,
                  o,
                  d = t.source.queryId;
                if (null !== d) {
                  var view = this.views.get(d);
                  return (
                    l.assert(
                      null != view,
                      "SyncTree gave us an op for an invalid query."
                    ),
                    view.applyOperation(t, e, n)
                  );
                }
                var h = [];
                try {
                  for (
                    var f = c.__values(this.views.values()), v = f.next();
                    !v.done;
                    v = f.next()
                  ) {
                    view = v.value;
                    h = h.concat(view.applyOperation(t, e, n));
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    v && !v.done && (o = f.return) && o.call(f);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return h;
              }),
              (t.prototype.addEventRegistration = function (t, e, n, r, o) {
                var c = t.queryIdentifier(),
                  view = this.views.get(c);
                if (!view) {
                  var l = n.calcCompleteEventCache(o ? r : null),
                    d = !1;
                  l
                    ? (d = !0)
                    : r instanceof Kt
                    ? ((l = n.calcCompleteEventChildren(r)), (d = !1))
                    : ((l = Kt.EMPTY_NODE), (d = !1));
                  var h = new Ne(new Se(l, d, !1), new Se(r, o, !1));
                  (view = new Le(t, h)), this.views.set(c, view);
                }
                return view.addEventRegistration(e), view.getInitialEvents(e);
              }),
              (t.prototype.removeEventRegistration = function (e, n, r) {
                var o,
                  l,
                  d = e.queryIdentifier(),
                  h = [],
                  f = [],
                  v = this.hasCompleteView();
                if ("default" === d)
                  try {
                    for (
                      var m = c.__values(this.views.entries()), y = m.next();
                      !y.done;
                      y = m.next()
                    ) {
                      var _ = c.__read(y.value, 2),
                        w = _[0],
                        view = _[1];
                      (f = f.concat(view.removeEventRegistration(n, r))),
                        view.isEmpty() &&
                          (this.views.delete(w),
                          view.getQuery().getQueryParams().loadsAllData() ||
                            h.push(view.getQuery()));
                    }
                  } catch (t) {
                    o = { error: t };
                  } finally {
                    try {
                      y && !y.done && (l = m.return) && l.call(m);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                else
                  (view = this.views.get(d)) &&
                    ((f = f.concat(view.removeEventRegistration(n, r))),
                    view.isEmpty() &&
                      (this.views.delete(d),
                      view.getQuery().getQueryParams().loadsAllData() ||
                        h.push(view.getQuery())));
                return (
                  v &&
                    !this.hasCompleteView() &&
                    h.push(new t.__referenceConstructor(e.repo, e.path)),
                  { removed: h, events: f }
                );
              }),
              (t.prototype.getQueryViews = function () {
                var t,
                  e,
                  n = [];
                try {
                  for (
                    var r = c.__values(this.views.values()), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var view = o.value;
                    view.getQuery().getQueryParams().loadsAllData() ||
                      n.push(view);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return n;
              }),
              (t.prototype.getCompleteServerCache = function (path) {
                var t,
                  e,
                  n = null;
                try {
                  for (
                    var r = c.__values(this.views.values()), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var view = o.value;
                    n = n || view.getCompleteServerCache(path);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return n;
              }),
              (t.prototype.viewForQuery = function (t) {
                if (t.getQueryParams().loadsAllData())
                  return this.getCompleteView();
                var e = t.queryIdentifier();
                return this.views.get(e);
              }),
              (t.prototype.viewExistsForQuery = function (t) {
                return null != this.viewForQuery(t);
              }),
              (t.prototype.hasCompleteView = function () {
                return null != this.getCompleteView();
              }),
              (t.prototype.getCompleteView = function () {
                var t, e;
                try {
                  for (
                    var n = c.__values(this.views.values()), r = n.next();
                    !r.done;
                    r = n.next()
                  ) {
                    var view = r.value;
                    if (view.getQuery().getQueryParams().loadsAllData())
                      return view;
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    r && !r.done && (e = n.return) && e.call(n);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return null;
              }),
              t
            );
          })(),
          $e = (function () {
            function t(t) {
              this.writeTree_ = t;
            }
            return (
              (t.prototype.addWrite = function (path, e) {
                if (path.isEmpty()) return new t(new Ee(e));
                var n = this.writeTree_.findRootMostValueAndPath(path);
                if (null != n) {
                  var r = n.path,
                    o = n.value,
                    c = Z.relativePath(r, path);
                  return (
                    (o = o.updateChild(c, e)), new t(this.writeTree_.set(r, o))
                  );
                }
                var l = new Ee(e);
                return new t(this.writeTree_.setTree(path, l));
              }),
              (t.prototype.addWrites = function (path, t) {
                var e = this;
                return (
                  W(t, function (t, n) {
                    e = e.addWrite(path.child(t), n);
                  }),
                  e
                );
              }),
              (t.prototype.removeWrite = function (path) {
                return path.isEmpty()
                  ? t.Empty
                  : new t(this.writeTree_.setTree(path, Ee.Empty));
              }),
              (t.prototype.hasCompleteWrite = function (path) {
                return null != this.getCompleteNode(path);
              }),
              (t.prototype.getCompleteNode = function (path) {
                var t = this.writeTree_.findRootMostValueAndPath(path);
                return null != t
                  ? this.writeTree_
                      .get(t.path)
                      .getChild(Z.relativePath(t.path, path))
                  : null;
              }),
              (t.prototype.getCompleteChildren = function () {
                var t = [],
                  e = this.writeTree_.value;
                return (
                  null != e
                    ? e.isLeafNode() ||
                      e.forEachChild($t, function (e, n) {
                        t.push(new St(e, n));
                      })
                    : this.writeTree_.children.inorderTraversal(function (
                        e,
                        n
                      ) {
                        null != n.value && t.push(new St(e, n.value));
                      }),
                  t
                );
              }),
              (t.prototype.childCompoundWrite = function (path) {
                if (path.isEmpty()) return this;
                var e = this.getCompleteNode(path);
                return new t(
                  null != e ? new Ee(e) : this.writeTree_.subtree(path)
                );
              }),
              (t.prototype.isEmpty = function () {
                return this.writeTree_.isEmpty();
              }),
              (t.prototype.apply = function (t) {
                return (function t(e, n, r) {
                  if (null != n.value) return r.updateChild(e, n.value);
                  var o = null;
                  return (
                    n.children.inorderTraversal(function (n, c) {
                      ".priority" === n
                        ? (l.assert(
                            null !== c.value,
                            "Priority writes must always be leaf nodes"
                          ),
                          (o = c.value))
                        : (r = t(e.child(n), c, r));
                    }),
                    r.getChild(e).isEmpty() ||
                      null === o ||
                      (r = r.updateChild(e.child(".priority"), o)),
                    r
                  );
                })(Z.Empty, this.writeTree_, t);
              }),
              (t.Empty = new t(new Ee(null))),
              t
            );
          })();
        var He = (function () {
            function t() {
              (this.visibleWrites_ = $e.Empty),
                (this.allWrites_ = []),
                (this.lastWriteId_ = -1);
            }
            return (
              (t.prototype.childWrites = function (path) {
                return new Ue(path, this);
              }),
              (t.prototype.addOverwrite = function (path, t, e, n) {
                l.assert(
                  e > this.lastWriteId_,
                  "Stacking an older write on top of newer ones"
                ),
                  void 0 === n && (n = !0),
                  this.allWrites_.push({
                    path: path,
                    snap: t,
                    writeId: e,
                    visible: n,
                  }),
                  n &&
                    (this.visibleWrites_ = this.visibleWrites_.addWrite(
                      path,
                      t
                    )),
                  (this.lastWriteId_ = e);
              }),
              (t.prototype.addMerge = function (path, t, e) {
                l.assert(
                  e > this.lastWriteId_,
                  "Stacking an older merge on top of newer ones"
                ),
                  this.allWrites_.push({
                    path: path,
                    children: t,
                    writeId: e,
                    visible: !0,
                  }),
                  (this.visibleWrites_ = this.visibleWrites_.addWrites(
                    path,
                    t
                  )),
                  (this.lastWriteId_ = e);
              }),
              (t.prototype.getWrite = function (t) {
                for (var i = 0; i < this.allWrites_.length; i++) {
                  var e = this.allWrites_[i];
                  if (e.writeId === t) return e;
                }
                return null;
              }),
              (t.prototype.removeWrite = function (t) {
                var e = this,
                  n = this.allWrites_.findIndex(function (s) {
                    return s.writeId === t;
                  });
                l.assert(
                  n >= 0,
                  "removeWrite called with nonexistent writeId."
                );
                var r = this.allWrites_[n];
                this.allWrites_.splice(n, 1);
                for (
                  var o = r.visible, c = !1, i = this.allWrites_.length - 1;
                  o && i >= 0;

                ) {
                  var d = this.allWrites_[i];
                  d.visible &&
                    (i >= n && this.recordContainsPath_(d, r.path)
                      ? (o = !1)
                      : r.path.contains(d.path) && (c = !0)),
                    i--;
                }
                if (o) {
                  if (c) return this.resetTree_(), !0;
                  r.snap
                    ? (this.visibleWrites_ = this.visibleWrites_.removeWrite(
                        r.path
                      ))
                    : W(r.children, function (t) {
                        e.visibleWrites_ = e.visibleWrites_.removeWrite(
                          r.path.child(t)
                        );
                      });
                  return !0;
                }
                return !1;
              }),
              (t.prototype.getCompleteWriteData = function (path) {
                return this.visibleWrites_.getCompleteNode(path);
              }),
              (t.prototype.calcCompleteEventCache = function (e, n, r, o) {
                if (r || o) {
                  var c = this.visibleWrites_.childCompoundWrite(e);
                  if (!o && c.isEmpty()) return n;
                  if (o || null != n || c.hasCompleteWrite(Z.Empty)) {
                    var l = t.layerTree_(
                      this.allWrites_,
                      function (t) {
                        return (
                          (t.visible || o) &&
                          (!r || !~r.indexOf(t.writeId)) &&
                          (t.path.contains(e) || e.contains(t.path))
                        );
                      },
                      e
                    );
                    f = n || Kt.EMPTY_NODE;
                    return l.apply(f);
                  }
                  return null;
                }
                var d = this.visibleWrites_.getCompleteNode(e);
                if (null != d) return d;
                var h = this.visibleWrites_.childCompoundWrite(e);
                if (h.isEmpty()) return n;
                if (null != n || h.hasCompleteWrite(Z.Empty)) {
                  var f = n || Kt.EMPTY_NODE;
                  return h.apply(f);
                }
                return null;
              }),
              (t.prototype.calcCompleteEventChildren = function (t, e) {
                var n = Kt.EMPTY_NODE,
                  r = this.visibleWrites_.getCompleteNode(t);
                if (r)
                  return (
                    r.isLeafNode() ||
                      r.forEachChild($t, function (t, e) {
                        n = n.updateImmediateChild(t, e);
                      }),
                    n
                  );
                if (e) {
                  var o = this.visibleWrites_.childCompoundWrite(t);
                  return (
                    e.forEachChild($t, function (t, e) {
                      var r = o.childCompoundWrite(new Z(t)).apply(e);
                      n = n.updateImmediateChild(t, r);
                    }),
                    o.getCompleteChildren().forEach(function (t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                    n
                  );
                }
                return (
                  this.visibleWrites_
                    .childCompoundWrite(t)
                    .getCompleteChildren()
                    .forEach(function (t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                  n
                );
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function (
                t,
                e,
                n,
                r
              ) {
                l.assert(
                  n || r,
                  "Either existingEventSnap or existingServerSnap must exist"
                );
                var path = t.child(e);
                if (this.visibleWrites_.hasCompleteWrite(path)) return null;
                var o = this.visibleWrites_.childCompoundWrite(path);
                return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e));
              }),
              (t.prototype.calcCompleteChild = function (t, e, n) {
                var path = t.child(e),
                  r = this.visibleWrites_.getCompleteNode(path);
                return null != r
                  ? r
                  : n.isCompleteForChild(e)
                  ? this.visibleWrites_
                      .childCompoundWrite(path)
                      .apply(n.getNode().getImmediateChild(e))
                  : null;
              }),
              (t.prototype.shadowingWrite = function (path) {
                return this.visibleWrites_.getCompleteNode(path);
              }),
              (t.prototype.calcIndexedSlice = function (t, e, n, r, o, c) {
                var l,
                  d = this.visibleWrites_.childCompoundWrite(t),
                  h = d.getCompleteNode(Z.Empty);
                if (null != h) l = h;
                else {
                  if (null == e) return [];
                  l = d.apply(e);
                }
                if ((l = l.withIndex(c)).isEmpty() || l.isLeafNode()) return [];
                for (
                  var f = [],
                    v = c.getCompare(),
                    m = o
                      ? l.getReverseIteratorFrom(n, c)
                      : l.getIteratorFrom(n, c),
                    y = m.getNext();
                  y && f.length < r;

                )
                  0 !== v(y, n) && f.push(y), (y = m.getNext());
                return f;
              }),
              (t.prototype.recordContainsPath_ = function (t, path) {
                if (t.snap) return t.path.contains(path);
                for (var e in t.children)
                  if (
                    t.children.hasOwnProperty(e) &&
                    t.path.child(e).contains(path)
                  )
                    return !0;
                return !1;
              }),
              (t.prototype.resetTree_ = function () {
                (this.visibleWrites_ = t.layerTree_(
                  this.allWrites_,
                  t.DefaultFilter_,
                  Z.Empty
                )),
                  this.allWrites_.length > 0
                    ? (this.lastWriteId_ = this.allWrites_[
                        this.allWrites_.length - 1
                      ].writeId)
                    : (this.lastWriteId_ = -1);
              }),
              (t.DefaultFilter_ = function (t) {
                return t.visible;
              }),
              (t.layerTree_ = function (t, filter, e) {
                for (var n = $e.Empty, i = 0; i < t.length; ++i) {
                  var r = t[i];
                  if (filter(r)) {
                    var o = r.path,
                      c = void 0;
                    if (r.snap)
                      e.contains(o)
                        ? ((c = Z.relativePath(e, o)),
                          (n = n.addWrite(c, r.snap)))
                        : o.contains(e) &&
                          ((c = Z.relativePath(o, e)),
                          (n = n.addWrite(Z.Empty, r.snap.getChild(c))));
                    else {
                      if (!r.children)
                        throw l.assertionError(
                          "WriteRecord should have .snap or .children"
                        );
                      if (e.contains(o))
                        (c = Z.relativePath(e, o)),
                          (n = n.addWrites(c, r.children));
                      else if (o.contains(e))
                        if ((c = Z.relativePath(o, e)).isEmpty())
                          n = n.addWrites(Z.Empty, r.children);
                        else {
                          var d = l.safeGet(r.children, c.getFront());
                          if (d) {
                            var h = d.getChild(c.popFront());
                            n = n.addWrite(Z.Empty, h);
                          }
                        }
                    }
                  }
                }
                return n;
              }),
              t
            );
          })(),
          Ue = (function () {
            function t(path, t) {
              (this.treePath_ = path), (this.writeTree_ = t);
            }
            return (
              (t.prototype.calcCompleteEventCache = function (t, e, n) {
                return this.writeTree_.calcCompleteEventCache(
                  this.treePath_,
                  t,
                  e,
                  n
                );
              }),
              (t.prototype.calcCompleteEventChildren = function (t) {
                return this.writeTree_.calcCompleteEventChildren(
                  this.treePath_,
                  t
                );
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function (
                path,
                t,
                e
              ) {
                return this.writeTree_.calcEventCacheAfterServerOverwrite(
                  this.treePath_,
                  path,
                  t,
                  e
                );
              }),
              (t.prototype.shadowingWrite = function (path) {
                return this.writeTree_.shadowingWrite(
                  this.treePath_.child(path)
                );
              }),
              (t.prototype.calcIndexedSlice = function (t, e, n, r, o) {
                return this.writeTree_.calcIndexedSlice(
                  this.treePath_,
                  t,
                  e,
                  n,
                  r,
                  o
                );
              }),
              (t.prototype.calcCompleteChild = function (t, e) {
                return this.writeTree_.calcCompleteChild(this.treePath_, t, e);
              }),
              (t.prototype.child = function (e) {
                return new t(this.treePath_.child(e), this.writeTree_);
              }),
              t
            );
          })(),
          qe = (function () {
            function t(t) {
              (this.listenProvider_ = t),
                (this.syncPointTree_ = Ee.Empty),
                (this.pendingWriteTree_ = new He()),
                (this.tagToQueryMap = new Map()),
                (this.queryToTagMap = new Map());
            }
            return (
              (t.prototype.applyUserOverwrite = function (path, t, e, n) {
                return (
                  this.pendingWriteTree_.addOverwrite(path, t, e, n),
                  n
                    ? this.applyOperationToSyncPoints_(new xe(we.User, path, t))
                    : []
                );
              }),
              (t.prototype.applyUserMerge = function (path, t, e) {
                this.pendingWriteTree_.addMerge(path, t, e);
                var n = Ee.fromObject(t);
                return this.applyOperationToSyncPoints_(
                  new Ae(we.User, path, n)
                );
              }),
              (t.prototype.ackUserWrite = function (t, e) {
                void 0 === e && (e = !1);
                var n = this.pendingWriteTree_.getWrite(t);
                if (this.pendingWriteTree_.removeWrite(t)) {
                  var r = Ee.Empty;
                  return (
                    null != n.snap
                      ? (r = r.set(Z.Empty, !0))
                      : W(n.children, function (t, e) {
                          r = r.set(new Z(t), e);
                        }),
                    this.applyOperationToSyncPoints_(new Ce(n.path, r, e))
                  );
                }
                return [];
              }),
              (t.prototype.applyServerOverwrite = function (path, t) {
                return this.applyOperationToSyncPoints_(
                  new xe(we.Server, path, t)
                );
              }),
              (t.prototype.applyServerMerge = function (path, t) {
                var e = Ee.fromObject(t);
                return this.applyOperationToSyncPoints_(
                  new Ae(we.Server, path, e)
                );
              }),
              (t.prototype.applyListenComplete = function (path) {
                return this.applyOperationToSyncPoints_(
                  new Te(we.Server, path)
                );
              }),
              (t.prototype.applyTaggedQueryOverwrite = function (path, e, n) {
                var r = this.queryKeyForTag_(n);
                if (null != r) {
                  var o = t.parseQueryKey_(r),
                    c = o.path,
                    l = o.queryId,
                    d = Z.relativePath(c, path),
                    h = new xe(we.forServerTaggedQuery(l), d, e);
                  return this.applyTaggedOperation_(c, h);
                }
                return [];
              }),
              (t.prototype.applyTaggedQueryMerge = function (path, e, n) {
                var r = this.queryKeyForTag_(n);
                if (r) {
                  var o = t.parseQueryKey_(r),
                    c = o.path,
                    l = o.queryId,
                    d = Z.relativePath(c, path),
                    h = Ee.fromObject(e),
                    f = new Ae(we.forServerTaggedQuery(l), d, h);
                  return this.applyTaggedOperation_(c, f);
                }
                return [];
              }),
              (t.prototype.applyTaggedListenComplete = function (path, e) {
                var n = this.queryKeyForTag_(e);
                if (n) {
                  var r = t.parseQueryKey_(n),
                    o = r.path,
                    c = r.queryId,
                    l = Z.relativePath(o, path),
                    d = new Te(we.forServerTaggedQuery(c), l);
                  return this.applyTaggedOperation_(o, d);
                }
                return [];
              }),
              (t.prototype.addEventRegistration = function (e, n) {
                var path = e.path,
                  r = null,
                  o = !1;
                this.syncPointTree_.foreachOnPath(path, function (t, e) {
                  var n = Z.relativePath(t, path);
                  (r = r || e.getCompleteServerCache(n)),
                    (o = o || e.hasCompleteView());
                });
                var c,
                  d = this.syncPointTree_.get(path);
                (d
                  ? ((o = o || d.hasCompleteView()),
                    (r = r || d.getCompleteServerCache(Z.Empty)))
                  : ((d = new je()),
                    (this.syncPointTree_ = this.syncPointTree_.set(path, d))),
                null != r)
                  ? (c = !0)
                  : ((c = !1),
                    (r = Kt.EMPTY_NODE),
                    this.syncPointTree_
                      .subtree(path)
                      .foreachChild(function (t, e) {
                        var n = e.getCompleteServerCache(Z.Empty);
                        n && (r = r.updateImmediateChild(t, n));
                      }));
                var h = d.viewExistsForQuery(e);
                if (!h && !e.getQueryParams().loadsAllData()) {
                  var f = t.makeQueryKey_(e);
                  l.assert(
                    !this.queryToTagMap.has(f),
                    "View does not exist, but we have a tag"
                  );
                  var v = t.getNextQueryTag_();
                  this.queryToTagMap.set(f, v), this.tagToQueryMap.set(v, f);
                }
                var m = this.pendingWriteTree_.childWrites(path),
                  y = d.addEventRegistration(e, n, m, r, c);
                if (!h && !o) {
                  var view = d.viewForQuery(e);
                  y = y.concat(this.setupListener_(e, view));
                }
                return y;
              }),
              (t.prototype.removeEventRegistration = function (e, n, r) {
                var o = this,
                  path = e.path,
                  c = this.syncPointTree_.get(path),
                  l = [];
                if (
                  c &&
                  ("default" === e.queryIdentifier() || c.viewExistsForQuery(e))
                ) {
                  var d = c.removeEventRegistration(e, n, r);
                  c.isEmpty() &&
                    (this.syncPointTree_ = this.syncPointTree_.remove(path));
                  var h = d.removed;
                  l = d.events;
                  var f =
                      -1 !==
                      h.findIndex(function (t) {
                        return t.getQueryParams().loadsAllData();
                      }),
                    v = this.syncPointTree_.findOnPath(path, function (t, e) {
                      return e.hasCompleteView();
                    });
                  if (f && !v) {
                    var m = this.syncPointTree_.subtree(path);
                    if (!m.isEmpty())
                      for (
                        var y = this.collectDistinctViewsForSubTree_(m), i = 0;
                        i < y.length;
                        ++i
                      ) {
                        var view = y[i],
                          _ = view.getQuery(),
                          w = this.createListenerForView_(view);
                        this.listenProvider_.startListening(
                          t.queryForListening_(_),
                          this.tagForQuery_(_),
                          w.hashFn,
                          w.onComplete
                        );
                      }
                  }
                  if (!v && h.length > 0 && !r)
                    if (f) {
                      this.listenProvider_.stopListening(
                        t.queryForListening_(e),
                        null
                      );
                    } else
                      h.forEach(function (e) {
                        var n = o.queryToTagMap.get(t.makeQueryKey_(e));
                        o.listenProvider_.stopListening(
                          t.queryForListening_(e),
                          n
                        );
                      });
                  this.removeTags_(h);
                }
                return l;
              }),
              (t.prototype.calcCompleteEventCache = function (path, t) {
                var e = this.pendingWriteTree_,
                  n = this.syncPointTree_.findOnPath(path, function (t, e) {
                    var n = Z.relativePath(t, path),
                      r = e.getCompleteServerCache(n);
                    if (r) return r;
                  });
                return e.calcCompleteEventCache(path, n, t, !0);
              }),
              (t.prototype.collectDistinctViewsForSubTree_ = function (t) {
                return t.fold(function (t, e, n) {
                  if (e && e.hasCompleteView()) return [e.getCompleteView()];
                  var r = [];
                  return (
                    e && (r = e.getQueryViews()),
                    W(n, function (t, e) {
                      r = r.concat(e);
                    }),
                    r
                  );
                });
              }),
              (t.prototype.removeTags_ = function (e) {
                for (var n = 0; n < e.length; ++n) {
                  var r = e[n];
                  if (!r.getQueryParams().loadsAllData()) {
                    var o = t.makeQueryKey_(r),
                      c = this.queryToTagMap.get(o);
                    this.queryToTagMap.delete(o), this.tagToQueryMap.delete(c);
                  }
                }
              }),
              (t.queryForListening_ = function (t) {
                return t.getQueryParams().loadsAllData() &&
                  !t.getQueryParams().isDefault()
                  ? t.getRef()
                  : t;
              }),
              (t.prototype.setupListener_ = function (e, view) {
                var path = e.path,
                  n = this.tagForQuery_(e),
                  r = this.createListenerForView_(view),
                  o = this.listenProvider_.startListening(
                    t.queryForListening_(e),
                    n,
                    r.hashFn,
                    r.onComplete
                  ),
                  c = this.syncPointTree_.subtree(path);
                if (n)
                  l.assert(
                    !c.value.hasCompleteView(),
                    "If we're adding a query, it shouldn't be shadowed"
                  );
                else
                  for (
                    var d = c.fold(function (t, e, n) {
                        if (!t.isEmpty() && e && e.hasCompleteView())
                          return [e.getCompleteView().getQuery()];
                        var r = [];
                        return (
                          e &&
                            (r = r.concat(
                              e.getQueryViews().map(function (view) {
                                return view.getQuery();
                              })
                            )),
                          W(n, function (t, e) {
                            r = r.concat(e);
                          }),
                          r
                        );
                      }),
                      i = 0;
                    i < d.length;
                    ++i
                  ) {
                    var h = d[i];
                    this.listenProvider_.stopListening(
                      t.queryForListening_(h),
                      this.tagForQuery_(h)
                    );
                  }
                return o;
              }),
              (t.prototype.createListenerForView_ = function (view) {
                var t = this,
                  e = view.getQuery(),
                  n = this.tagForQuery_(e);
                return {
                  hashFn: function () {
                    return (view.getServerCache() || Kt.EMPTY_NODE).hash();
                  },
                  onComplete: function (r) {
                    if ("ok" === r)
                      return n
                        ? t.applyTaggedListenComplete(e.path, n)
                        : t.applyListenComplete(e.path);
                    var o = (function (code, t) {
                      var e = "Unknown Error";
                      "too_big" === code
                        ? (e =
                            "The data requested exceeds the maximum size that can be accessed with a single request.")
                        : "permission_denied" === code
                        ? (e =
                            "Client doesn't have permission to access the desired data.")
                        : "unavailable" === code &&
                          (e = "The service is unavailable");
                      var n = new Error(
                        code + " at " + t.path.toString() + ": " + e
                      );
                      return (n.code = code.toUpperCase()), n;
                    })(r, e);
                    return t.removeEventRegistration(e, null, o);
                  },
                };
              }),
              (t.makeQueryKey_ = function (t) {
                return t.path.toString() + "$" + t.queryIdentifier();
              }),
              (t.parseQueryKey_ = function (t) {
                var e = t.indexOf("$");
                return (
                  l.assert(-1 !== e && e < t.length - 1, "Bad queryKey."),
                  { queryId: t.substr(e + 1), path: new Z(t.substr(0, e)) }
                );
              }),
              (t.prototype.queryKeyForTag_ = function (t) {
                return this.tagToQueryMap.get(t);
              }),
              (t.prototype.tagForQuery_ = function (e) {
                var n = t.makeQueryKey_(e);
                return this.queryToTagMap.get(n);
              }),
              (t.getNextQueryTag_ = function () {
                return t.nextQueryTag_++;
              }),
              (t.prototype.applyTaggedOperation_ = function (t, e) {
                var n = this.syncPointTree_.get(t);
                l.assert(
                  n,
                  "Missing sync point for query tag that we're tracking"
                );
                var r = this.pendingWriteTree_.childWrites(t);
                return n.applyOperation(e, r, null);
              }),
              (t.prototype.applyOperationToSyncPoints_ = function (t) {
                return this.applyOperationHelper_(
                  t,
                  this.syncPointTree_,
                  null,
                  this.pendingWriteTree_.childWrites(Z.Empty)
                );
              }),
              (t.prototype.applyOperationHelper_ = function (t, e, n, r) {
                if (t.path.isEmpty())
                  return this.applyOperationDescendantsHelper_(t, e, n, r);
                var o = e.get(Z.Empty);
                null == n &&
                  null != o &&
                  (n = o.getCompleteServerCache(Z.Empty));
                var c = [],
                  l = t.path.getFront(),
                  d = t.operationForChild(l),
                  h = e.children.get(l);
                if (h && d) {
                  var f = n ? n.getImmediateChild(l) : null,
                    v = r.child(l);
                  c = c.concat(this.applyOperationHelper_(d, h, f, v));
                }
                return o && (c = c.concat(o.applyOperation(t, r, n))), c;
              }),
              (t.prototype.applyOperationDescendantsHelper_ = function (
                t,
                e,
                n,
                r
              ) {
                var o = this,
                  c = e.get(Z.Empty);
                null == n &&
                  null != c &&
                  (n = c.getCompleteServerCache(Z.Empty));
                var l = [];
                return (
                  e.children.inorderTraversal(function (e, c) {
                    var d = n ? n.getImmediateChild(e) : null,
                      h = r.child(e),
                      f = t.operationForChild(e);
                    f &&
                      (l = l.concat(
                        o.applyOperationDescendantsHelper_(f, c, d, h)
                      ));
                  }),
                  c && (l = l.concat(c.applyOperation(t, r, n))),
                  l
                );
              }),
              (t.nextQueryTag_ = 1),
              t
            );
          })(),
          Ve = (function () {
            function t() {
              this.rootNode_ = Kt.EMPTY_NODE;
            }
            return (
              (t.prototype.getNode = function (path) {
                return this.rootNode_.getChild(path);
              }),
              (t.prototype.updateSnapshot = function (path, t) {
                this.rootNode_ = this.rootNode_.updateChild(path, t);
              }),
              t
            );
          })(),
          We = (function () {
            function t() {
              this.counters_ = {};
            }
            return (
              (t.prototype.incrementCounter = function (t, e) {
                void 0 === e && (e = 1),
                  l.contains(this.counters_, t) || (this.counters_[t] = 0),
                  (this.counters_[t] += e);
              }),
              (t.prototype.get = function () {
                return l.deepCopy(this.counters_);
              }),
              t
            );
          })(),
          Be = (function () {
            function t() {}
            return (
              (t.getCollection = function (t) {
                var e = t.toString();
                return (
                  this.collections_[e] || (this.collections_[e] = new We()),
                  this.collections_[e]
                );
              }),
              (t.getOrCreateReporter = function (t, e) {
                var n = t.toString();
                return (
                  this.reporters_[n] || (this.reporters_[n] = e()),
                  this.reporters_[n]
                );
              }),
              (t.collections_ = {}),
              (t.reporters_ = {}),
              t
            );
          })(),
          ze = (function () {
            function t(t) {
              (this.collection_ = t), (this.last_ = null);
            }
            return (
              (t.prototype.get = function () {
                var t = this.collection_.get(),
                  e = c.__assign({}, t);
                return (
                  this.last_ &&
                    W(this.last_, function (t, n) {
                      e[t] = e[t] - n;
                    }),
                  (this.last_ = t),
                  e
                );
              }),
              t
            );
          })(),
          Qe = (function () {
            function t(t, e) {
              (this.server_ = e),
                (this.statsToReport_ = {}),
                (this.statsListener_ = new ze(t));
              var n = 1e4 + 2e4 * Math.random();
              G(this.reportStats_.bind(this), Math.floor(n));
            }
            return (
              (t.prototype.includeStat = function (t) {
                this.statsToReport_[t] = !0;
              }),
              (t.prototype.reportStats_ = function () {
                var t = this,
                  e = this.statsListener_.get(),
                  n = {},
                  r = !1;
                W(e, function (e, o) {
                  o > 0 &&
                    l.contains(t.statsToReport_, e) &&
                    ((n[e] = o), (r = !0));
                }),
                  r && this.server_.reportStats(n),
                  G(
                    this.reportStats_.bind(this),
                    Math.floor(2 * Math.random() * 3e5)
                  );
              }),
              t
            );
          })(),
          Ye = (function () {
            function t() {
              (this.eventLists_ = []), (this.recursionDepth_ = 0);
            }
            return (
              (t.prototype.queueEvents = function (t) {
                for (var e = null, i = 0; i < t.length; i++) {
                  var n = t[i],
                    r = n.getPath();
                  null === e ||
                    r.equals(e.getPath()) ||
                    (this.eventLists_.push(e), (e = null)),
                    null === e && (e = new Ge(r)),
                    e.add(n);
                }
                e && this.eventLists_.push(e);
              }),
              (t.prototype.raiseEventsAtPath = function (path, t) {
                this.queueEvents(t),
                  this.raiseQueuedEventsMatchingPredicate_(function (t) {
                    return t.equals(path);
                  });
              }),
              (t.prototype.raiseEventsForChangedPath = function (t, e) {
                this.queueEvents(e),
                  this.raiseQueuedEventsMatchingPredicate_(function (e) {
                    return e.contains(t) || t.contains(e);
                  });
              }),
              (t.prototype.raiseQueuedEventsMatchingPredicate_ = function (t) {
                this.recursionDepth_++;
                for (var e = !0, i = 0; i < this.eventLists_.length; i++) {
                  var n = this.eventLists_[i];
                  if (n)
                    t(n.getPath())
                      ? (this.eventLists_[i].raise(),
                        (this.eventLists_[i] = null))
                      : (e = !1);
                }
                e && (this.eventLists_ = []), this.recursionDepth_--;
              }),
              t
            );
          })(),
          Ge = (function () {
            function t(t) {
              (this.path_ = t), (this.events_ = []);
            }
            return (
              (t.prototype.add = function (t) {
                this.events_.push(t);
              }),
              (t.prototype.raise = function () {
                for (var i = 0; i < this.events_.length; i++) {
                  var t = this.events_[i];
                  if (null !== t) {
                    this.events_[i] = null;
                    var e = t.getEventRunner();
                    S && I("event: " + t.toString()), Y(e);
                  }
                }
              }),
              (t.prototype.getPath = function () {
                return this.path_;
              }),
              t
            );
          })(),
          Ze = (function () {
            function t(t) {
              (this.allowedEvents_ = t),
                (this.listeners_ = {}),
                l.assert(
                  Array.isArray(t) && t.length > 0,
                  "Requires a non-empty array"
                );
            }
            return (
              (t.prototype.trigger = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n];
                if (Array.isArray(this.listeners_[t]))
                  for (
                    var r = c.__spread(this.listeners_[t]), i = 0;
                    i < r.length;
                    i++
                  )
                    r[i].callback.apply(r[i].context, e);
              }),
              (t.prototype.on = function (t, e, n) {
                this.validateEventType_(t),
                  (this.listeners_[t] = this.listeners_[t] || []),
                  this.listeners_[t].push({ callback: e, context: n });
                var r = this.getInitialEvent(t);
                r && e.apply(n, r);
              }),
              (t.prototype.off = function (t, e, n) {
                this.validateEventType_(t);
                for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                  if (r[i].callback === e && (!n || n === r[i].context))
                    return void r.splice(i, 1);
              }),
              (t.prototype.validateEventType_ = function (t) {
                l.assert(
                  this.allowedEvents_.find(function (e) {
                    return e === t;
                  }),
                  "Unknown event: " + t
                );
              }),
              t
            );
          })(),
          Ke = (function (t) {
            function e() {
              var e,
                n,
                r = t.call(this, ["visible"]) || this;
              return (
                "undefined" != typeof document &&
                  void 0 !== document.addEventListener &&
                  (void 0 !== document.hidden
                    ? ((n = "visibilitychange"), (e = "hidden"))
                    : void 0 !== document.mozHidden
                    ? ((n = "mozvisibilitychange"), (e = "mozHidden"))
                    : void 0 !== document.msHidden
                    ? ((n = "msvisibilitychange"), (e = "msHidden"))
                    : void 0 !== document.webkitHidden &&
                      ((n = "webkitvisibilitychange"), (e = "webkitHidden"))),
                (r.visible_ = !0),
                n &&
                  document.addEventListener(
                    n,
                    function () {
                      var t = !document[e];
                      t !== r.visible_ &&
                        ((r.visible_ = t), r.trigger("visible", t));
                    },
                    !1
                  ),
                r
              );
            }
            return (
              c.__extends(e, t),
              (e.getInstance = function () {
                return new e();
              }),
              (e.prototype.getInitialEvent = function (t) {
                return (
                  l.assert("visible" === t, "Unknown event type: " + t),
                  [this.visible_]
                );
              }),
              e
            );
          })(Ze),
          Xe = (function (t) {
            function e() {
              var e = t.call(this, ["online"]) || this;
              return (
                (e.online_ = !0),
                "undefined" == typeof window ||
                  void 0 === window.addEventListener ||
                  l.isMobileCordova() ||
                  (window.addEventListener(
                    "online",
                    function () {
                      e.online_ || ((e.online_ = !0), e.trigger("online", !0));
                    },
                    !1
                  ),
                  window.addEventListener(
                    "offline",
                    function () {
                      e.online_ && ((e.online_ = !1), e.trigger("online", !1));
                    },
                    !1
                  )),
                e
              );
            }
            return (
              c.__extends(e, t),
              (e.getInstance = function () {
                return new e();
              }),
              (e.prototype.getInitialEvent = function (t) {
                return (
                  l.assert("online" === t, "Unknown event type: " + t),
                  [this.online_]
                );
              }),
              (e.prototype.currentlyOnline = function () {
                return this.online_;
              }),
              e
            );
          })(Ze),
          Je = (function () {
            function t(t) {
              (this.onMessage_ = t),
                (this.pendingResponses = []),
                (this.currentResponseNum = 0),
                (this.closeAfterResponse = -1),
                (this.onClose = null);
            }
            return (
              (t.prototype.closeAfter = function (t, e) {
                (this.closeAfterResponse = t),
                  (this.onClose = e),
                  this.closeAfterResponse < this.currentResponseNum &&
                    (this.onClose(), (this.onClose = null));
              }),
              (t.prototype.handleResponse = function (t, data) {
                var e = this;
                this.pendingResponses[t] = data;
                for (
                  var n = function () {
                      var t = r.pendingResponses[r.currentResponseNum];
                      delete r.pendingResponses[r.currentResponseNum];
                      for (
                        var n = function (i) {
                            t[i] &&
                              Y(function () {
                                e.onMessage_(t[i]);
                              });
                          },
                          i = 0;
                        i < t.length;
                        ++i
                      )
                        n(i);
                      if (r.currentResponseNum === r.closeAfterResponse)
                        return (
                          r.onClose && (r.onClose(), (r.onClose = null)),
                          "break"
                        );
                      r.currentResponseNum++;
                    },
                    r = this;
                  this.pendingResponses[this.currentResponseNum];

                ) {
                  if ("break" === n()) break;
                }
              }),
              t
            );
          })(),
          tn = (function () {
            function t(t, e, n, r, o) {
              (this.connId = t),
                (this.repoInfo = e),
                (this.applicationId = n),
                (this.transportSessionId = r),
                (this.lastSessionId = o),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.everConnected_ = !1),
                (this.log_ = D(t)),
                (this.stats_ = Be.getCollection(e)),
                (this.urlFn = function (t) {
                  return e.connectionURL("long_polling", t);
                });
            }
            return (
              (t.prototype.open = function (t, e) {
                var n = this;
                (this.curSegmentNum = 0),
                  (this.onDisconnect_ = e),
                  (this.myPacketOrderer = new Je(t)),
                  (this.isClosed_ = !1),
                  (this.connectTimeoutTimer_ = setTimeout(function () {
                    n.log_("Timed out trying to connect."),
                      n.onClosed_(),
                      (n.connectTimeoutTimer_ = null);
                  }, Math.floor(3e4))),
                  (function (t) {
                    if (l.isNodeSdk() || "complete" === document.readyState)
                      t();
                    else {
                      var e = !1,
                        n = function () {
                          document.body
                            ? e || ((e = !0), t())
                            : setTimeout(n, Math.floor(10));
                        };
                      document.addEventListener
                        ? (document.addEventListener("DOMContentLoaded", n, !1),
                          window.addEventListener("load", n, !1))
                        : document.attachEvent &&
                          (document.attachEvent(
                            "onreadystatechange",
                            function () {
                              "complete" === document.readyState && n();
                            }
                          ),
                          window.attachEvent("onload", n));
                    }
                  })(function () {
                    if (!n.isClosed_) {
                      n.scriptTagHolder = new en(
                        function () {
                          for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                          var r = c.__read(t, 5),
                            o = r[0],
                            l = r[1],
                            d = r[2];
                          r[3], r[4];
                          if ((n.incrementIncomingBytes_(t), n.scriptTagHolder))
                            if (
                              (n.connectTimeoutTimer_ &&
                                (clearTimeout(n.connectTimeoutTimer_),
                                (n.connectTimeoutTimer_ = null)),
                              (n.everConnected_ = !0),
                              "start" === o)
                            )
                              (n.id = l), (n.password = d);
                            else {
                              if ("close" !== o)
                                throw new Error(
                                  "Unrecognized command received: " + o
                                );
                              l
                                ? ((n.scriptTagHolder.sendNewPolls = !1),
                                  n.myPacketOrderer.closeAfter(l, function () {
                                    n.onClosed_();
                                  }))
                                : n.onClosed_();
                            }
                        },
                        function () {
                          for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                          var r = c.__read(t, 2),
                            o = r[0],
                            data = r[1];
                          n.incrementIncomingBytes_(t),
                            n.myPacketOrderer.handleResponse(o, data);
                        },
                        function () {
                          n.onClosed_();
                        },
                        n.urlFn
                      );
                      var t = { start: "t" };
                      (t.ser = Math.floor(1e8 * Math.random())),
                        n.scriptTagHolder.uniqueCallbackIdentifier &&
                          (t.cb = n.scriptTagHolder.uniqueCallbackIdentifier),
                        (t.v = "5"),
                        n.transportSessionId && (t.s = n.transportSessionId),
                        n.lastSessionId && (t.ls = n.lastSessionId),
                        n.applicationId && (t.p = n.applicationId),
                        "undefined" != typeof location &&
                          location.href &&
                          -1 !== location.href.indexOf("firebaseio.com") &&
                          (t.r = "f");
                      var e = n.urlFn(t);
                      n.log_("Connecting via long-poll to " + e),
                        n.scriptTagHolder.addTag(e, function () {});
                    }
                  });
              }),
              (t.prototype.start = function () {
                this.scriptTagHolder.startLongPoll(this.id, this.password),
                  this.addDisconnectPingFrame(this.id, this.password);
              }),
              (t.forceAllow = function () {
                t.forceAllow_ = !0;
              }),
              (t.forceDisallow = function () {
                t.forceDisallow_ = !0;
              }),
              (t.isAvailable = function () {
                return (
                  !l.isNodeSdk() &&
                  (!!t.forceAllow_ ||
                    !(
                      t.forceDisallow_ ||
                      "undefined" == typeof document ||
                      null == document.createElement ||
                      ("object" == typeof window &&
                        window.chrome &&
                        window.chrome.extension &&
                        !/^chrome/.test(window.location.href)) ||
                      ("object" == typeof Windows &&
                        "object" == typeof Windows.UI)
                    ))
                );
              }),
              (t.prototype.markConnectionHealthy = function () {}),
              (t.prototype.shutdown_ = function () {
                (this.isClosed_ = !0),
                  this.scriptTagHolder &&
                    (this.scriptTagHolder.close(),
                    (this.scriptTagHolder = null)),
                  this.myDisconnFrame &&
                    (document.body.removeChild(this.myDisconnFrame),
                    (this.myDisconnFrame = null)),
                  this.connectTimeoutTimer_ &&
                    (clearTimeout(this.connectTimeoutTimer_),
                    (this.connectTimeoutTimer_ = null));
              }),
              (t.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_("Longpoll is closing itself"),
                  this.shutdown_(),
                  this.onDisconnect_ &&
                    (this.onDisconnect_(this.everConnected_),
                    (this.onDisconnect_ = null)));
              }),
              (t.prototype.close = function () {
                this.isClosed_ ||
                  (this.log_("Longpoll is being closed."), this.shutdown_());
              }),
              (t.prototype.send = function (data) {
                var t = l.stringify(data);
                (this.bytesSent += t.length),
                  this.stats_.incrementCounter("bytes_sent", t.length);
                for (
                  var e = l.base64Encode(t), n = V(e, 1840), i = 0;
                  i < n.length;
                  i++
                )
                  this.scriptTagHolder.enqueueSegment(
                    this.curSegmentNum,
                    n.length,
                    n[i]
                  ),
                    this.curSegmentNum++;
              }),
              (t.prototype.addDisconnectPingFrame = function (t, e) {
                if (!l.isNodeSdk()) {
                  this.myDisconnFrame = document.createElement("iframe");
                  var n = { dframe: "t" };
                  (n.id = t),
                    (n.pw = e),
                    (this.myDisconnFrame.src = this.urlFn(n)),
                    (this.myDisconnFrame.style.display = "none"),
                    document.body.appendChild(this.myDisconnFrame);
                }
              }),
              (t.prototype.incrementIncomingBytes_ = function (t) {
                var e = l.stringify(t).length;
                (this.bytesReceived += e),
                  this.stats_.incrementCounter("bytes_received", e);
              }),
              t
            );
          })(),
          en = (function () {
            function t(e, n, r, o) {
              if (
                ((this.onDisconnect = r),
                (this.urlFn = o),
                (this.outstandingRequests = new Set()),
                (this.pendingSegs = []),
                (this.currentSerial = Math.floor(1e8 * Math.random())),
                (this.sendNewPolls = !0),
                l.isNodeSdk())
              )
                (this.commandCB = e), (this.onMessageCB = n);
              else {
                (this.uniqueCallbackIdentifier = T()),
                  (window["pLPCommand" + this.uniqueCallbackIdentifier] = e),
                  (window["pRTLPCB" + this.uniqueCallbackIdentifier] = n),
                  (this.myIFrame = t.createIFrame_());
                var script = "";
                if (
                  this.myIFrame.src &&
                  "javascript:" ===
                    this.myIFrame.src.substr(0, "javascript:".length)
                )
                  script =
                    '<script>document.domain="' +
                    document.domain +
                    '";</script>';
                var c = "<html><body>" + script + "</body></html>";
                try {
                  this.myIFrame.doc.open(),
                    this.myIFrame.doc.write(c),
                    this.myIFrame.doc.close();
                } catch (t) {
                  I("frame writing exception"), t.stack && I(t.stack), I(t);
                }
              }
            }
            return (
              (t.createIFrame_ = function () {
                var iframe = document.createElement("iframe");
                if (((iframe.style.display = "none"), !document.body))
                  throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                document.body.appendChild(iframe);
                try {
                  iframe.contentWindow.document ||
                    I("No IE domain setting required");
                } catch (e) {
                  var t = document.domain;
                  iframe.src =
                    "javascript:void((function(){document.open();document.domain='" +
                    t +
                    "';document.close();})())";
                }
                return (
                  iframe.contentDocument
                    ? (iframe.doc = iframe.contentDocument)
                    : iframe.contentWindow
                    ? (iframe.doc = iframe.contentWindow.document)
                    : iframe.document && (iframe.doc = iframe.document),
                  iframe
                );
              }),
              (t.prototype.close = function () {
                var t = this;
                (this.alive = !1),
                  this.myIFrame &&
                    ((this.myIFrame.doc.body.innerHTML = ""),
                    setTimeout(function () {
                      null !== t.myIFrame &&
                        (document.body.removeChild(t.myIFrame),
                        (t.myIFrame = null));
                    }, Math.floor(0)));
                var e = this.onDisconnect;
                e && ((this.onDisconnect = null), e());
              }),
              (t.prototype.startLongPoll = function (t, e) {
                for (
                  this.myID = t, this.myPW = e, this.alive = !0;
                  this.newRequest_();

                );
              }),
              (t.prototype.newRequest_ = function () {
                if (
                  this.alive &&
                  this.sendNewPolls &&
                  this.outstandingRequests.size <
                    (this.pendingSegs.length > 0 ? 2 : 1)
                ) {
                  this.currentSerial++;
                  var t = {};
                  (t.id = this.myID),
                    (t.pw = this.myPW),
                    (t.ser = this.currentSerial);
                  for (
                    var e = this.urlFn(t), n = "", i = 0;
                    this.pendingSegs.length > 0;

                  ) {
                    if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870))
                      break;
                    var r = this.pendingSegs.shift();
                    (n =
                      n +
                      "&seg" +
                      i +
                      "=" +
                      r.seg +
                      "&ts" +
                      i +
                      "=" +
                      r.ts +
                      "&d" +
                      i +
                      "=" +
                      r.d),
                      i++;
                  }
                  return (
                    (e += n), this.addLongPollTag_(e, this.currentSerial), !0
                  );
                }
                return !1;
              }),
              (t.prototype.enqueueSegment = function (t, e, data) {
                this.pendingSegs.push({ seg: t, ts: e, d: data }),
                  this.alive && this.newRequest_();
              }),
              (t.prototype.addLongPollTag_ = function (t, e) {
                var n = this;
                this.outstandingRequests.add(e);
                var r = function () {
                    n.outstandingRequests.delete(e), n.newRequest_();
                  },
                  o = setTimeout(r, Math.floor(25e3));
                this.addTag(t, function () {
                  clearTimeout(o), r();
                });
              }),
              (t.prototype.addTag = function (t, e) {
                var n = this;
                l.isNodeSdk()
                  ? this.doNodeLongPoll(t, e)
                  : setTimeout(function () {
                      try {
                        if (!n.sendNewPolls) return;
                        var r = n.myIFrame.doc.createElement("script");
                        (r.type = "text/javascript"),
                          (r.async = !0),
                          (r.src = t),
                          (r.onload = r.onreadystatechange = function () {
                            var t = r.readyState;
                            (t && "loaded" !== t && "complete" !== t) ||
                              ((r.onload = r.onreadystatechange = null),
                              r.parentNode && r.parentNode.removeChild(r),
                              e());
                          }),
                          (r.onerror = function () {
                            I("Long-poll script failed to load: " + t),
                              (n.sendNewPolls = !1),
                              n.close();
                          }),
                          n.myIFrame.doc.body.appendChild(r);
                      } catch (t) {}
                    }, Math.floor(1));
              }),
              t
            );
          })(),
          nn = "";
        var rn = null;
        "undefined" != typeof MozWebSocket
          ? (rn = MozWebSocket)
          : "undefined" != typeof WebSocket && (rn = WebSocket);
        var on = (function () {
            function t(e, n, r, o, c) {
              (this.connId = e),
                (this.applicationId = r),
                (this.keepaliveTimer = null),
                (this.frames = null),
                (this.totalFrames = 0),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.log_ = D(this.connId)),
                (this.stats_ = Be.getCollection(n)),
                (this.connURL = t.connectionURL_(n, o, c)),
                (this.nodeAdmin = n.nodeAdmin);
            }
            return (
              (t.connectionURL_ = function (t, e, n) {
                var r = { v: "5" };
                return (
                  !l.isNodeSdk() &&
                    "undefined" != typeof location &&
                    location.href &&
                    -1 !== location.href.indexOf("firebaseio.com") &&
                    (r.r = "f"),
                  e && (r.s = e),
                  n && (r.ls = n),
                  t.connectionURL("websocket", r)
                );
              }),
              (t.prototype.open = function (t, e) {
                var n = this;
                (this.onDisconnect = e),
                  (this.onMessage = t),
                  this.log_("Websocket connecting to " + this.connURL),
                  (this.everConnected_ = !1),
                  w.set("previous_websocket_failure", !0);
                try {
                  if (l.isNodeSdk()) {
                    var o = this.nodeAdmin ? "AdminNode" : "Node",
                      c = {
                        headers: {
                          "User-Agent":
                            "Firebase/5/" + nn + "/" + r.platform + "/" + o,
                          "X-Firebase-GMPID": this.applicationId || "",
                        },
                      },
                      d = r.env,
                      h =
                        0 === this.connURL.indexOf("wss://")
                          ? d.HTTPS_PROXY || d.https_proxy
                          : d.HTTP_PROXY || d.http_proxy;
                    h && (c.proxy = { origin: h }),
                      (this.mySock = new rn(this.connURL, [], c));
                  } else {
                    c = {
                      headers: { "X-Firebase-GMPID": this.applicationId || "" },
                    };
                    this.mySock = new rn(this.connURL, [], c);
                  }
                } catch (t) {
                  this.log_("Error instantiating WebSocket.");
                  var f = t.message || t.data;
                  return f && this.log_(f), void this.onClosed_();
                }
                (this.mySock.onopen = function () {
                  n.log_("Websocket connected."), (n.everConnected_ = !0);
                }),
                  (this.mySock.onclose = function () {
                    n.log_("Websocket connection was disconnected."),
                      (n.mySock = null),
                      n.onClosed_();
                  }),
                  (this.mySock.onmessage = function (t) {
                    n.handleIncomingFrame(t);
                  }),
                  (this.mySock.onerror = function (t) {
                    n.log_("WebSocket error.  Closing connection.");
                    var e = t.message || t.data;
                    e && n.log_(e), n.onClosed_();
                  });
              }),
              (t.prototype.start = function () {}),
              (t.forceDisallow = function () {
                t.forceDisallow_ = !0;
              }),
              (t.isAvailable = function () {
                var e = !1;
                if ("undefined" != typeof navigator && navigator.userAgent) {
                  var n = navigator.userAgent.match(
                    /Android ([0-9]{0,}\.[0-9]{0,})/
                  );
                  n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0);
                }
                return !e && null !== rn && !t.forceDisallow_;
              }),
              (t.previouslyFailed = function () {
                return (
                  w.isInMemoryStorage ||
                  !0 === w.get("previous_websocket_failure")
                );
              }),
              (t.prototype.markConnectionHealthy = function () {
                w.remove("previous_websocket_failure");
              }),
              (t.prototype.appendFrame_ = function (data) {
                if (
                  (this.frames.push(data),
                  this.frames.length === this.totalFrames)
                ) {
                  var t = this.frames.join("");
                  this.frames = null;
                  var e = l.jsonEval(t);
                  this.onMessage(e);
                }
              }),
              (t.prototype.handleNewFrameCount_ = function (t) {
                (this.totalFrames = t), (this.frames = []);
              }),
              (t.prototype.extractFrameCount_ = function (data) {
                if (
                  (l.assert(
                    null === this.frames,
                    "We already have a frame buffer"
                  ),
                  data.length <= 6)
                ) {
                  var t = Number(data);
                  if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
                }
                return this.handleNewFrameCount_(1), data;
              }),
              (t.prototype.handleIncomingFrame = function (t) {
                if (null !== this.mySock) {
                  var data = t.data;
                  if (
                    ((this.bytesReceived += data.length),
                    this.stats_.incrementCounter("bytes_received", data.length),
                    this.resetKeepAlive(),
                    null !== this.frames)
                  )
                    this.appendFrame_(data);
                  else {
                    var e = this.extractFrameCount_(data);
                    null !== e && this.appendFrame_(e);
                  }
                }
              }),
              (t.prototype.send = function (data) {
                this.resetKeepAlive();
                var t = l.stringify(data);
                (this.bytesSent += t.length),
                  this.stats_.incrementCounter("bytes_sent", t.length);
                var e = V(t, 16384);
                e.length > 1 && this.sendString_(String(e.length));
                for (var i = 0; i < e.length; i++) this.sendString_(e[i]);
              }),
              (t.prototype.shutdown_ = function () {
                (this.isClosed_ = !0),
                  this.keepaliveTimer &&
                    (clearInterval(this.keepaliveTimer),
                    (this.keepaliveTimer = null)),
                  this.mySock && (this.mySock.close(), (this.mySock = null));
              }),
              (t.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_("WebSocket is closing itself"),
                  this.shutdown_(),
                  this.onDisconnect &&
                    (this.onDisconnect(this.everConnected_),
                    (this.onDisconnect = null)));
              }),
              (t.prototype.close = function () {
                this.isClosed_ ||
                  (this.log_("WebSocket is being closed"), this.shutdown_());
              }),
              (t.prototype.resetKeepAlive = function () {
                var t = this;
                clearInterval(this.keepaliveTimer),
                  (this.keepaliveTimer = setInterval(function () {
                    t.mySock && t.sendString_("0"), t.resetKeepAlive();
                  }, Math.floor(45e3)));
              }),
              (t.prototype.sendString_ = function (t) {
                try {
                  this.mySock.send(t);
                } catch (t) {
                  this.log_(
                    "Exception thrown from WebSocket.send():",
                    t.message || t.data,
                    "Closing connection."
                  ),
                    setTimeout(this.onClosed_.bind(this), 0);
                }
              }),
              (t.responsesRequiredToBeHealthy = 2),
              (t.healthyTimeout = 3e4),
              t
            );
          })(),
          an = (function () {
            function t(t) {
              this.initTransports_(t);
            }
            return (
              Object.defineProperty(t, "ALL_TRANSPORTS", {
                get: function () {
                  return [tn, on];
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.initTransports_ = function (e) {
                var n,
                  r,
                  o = on && on.isAvailable(),
                  l = o && !on.previouslyFailed();
                if (
                  (e.webSocketOnly &&
                    (o ||
                      M(
                        "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                      ),
                    (l = !0)),
                  l)
                )
                  this.transports_ = [on];
                else {
                  var d = (this.transports_ = []);
                  try {
                    for (
                      var h = c.__values(t.ALL_TRANSPORTS), f = h.next();
                      !f.done;
                      f = h.next()
                    ) {
                      var v = f.value;
                      v && v.isAvailable() && d.push(v);
                    }
                  } catch (t) {
                    n = { error: t };
                  } finally {
                    try {
                      f && !f.done && (r = h.return) && r.call(h);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }
              }),
              (t.prototype.initialTransport = function () {
                if (this.transports_.length > 0) return this.transports_[0];
                throw new Error("No transports available");
              }),
              (t.prototype.upgradeTransport = function () {
                return this.transports_.length > 1 ? this.transports_[1] : null;
              }),
              t
            );
          })(),
          sn = (function () {
            function t(t, e, n, r, o, c, l, d) {
              (this.id = t),
                (this.repoInfo_ = e),
                (this.applicationId_ = n),
                (this.onMessage_ = r),
                (this.onReady_ = o),
                (this.onDisconnect_ = c),
                (this.onKill_ = l),
                (this.lastSessionId = d),
                (this.connectionCount = 0),
                (this.pendingDataMessages = []),
                (this.state_ = 0),
                (this.log_ = D("c:" + this.id + ":")),
                (this.transportManager_ = new an(e)),
                this.log_("Connection created"),
                this.start_();
            }
            return (
              (t.prototype.start_ = function () {
                var t = this,
                  e = this.transportManager_.initialTransport();
                (this.conn_ = new e(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  this.applicationId_,
                  void 0,
                  this.lastSessionId
                )),
                  (this.primaryResponsesRequired_ =
                    e.responsesRequiredToBeHealthy || 0);
                var n = this.connReceiver_(this.conn_),
                  r = this.disconnReceiver_(this.conn_);
                (this.tx_ = this.conn_),
                  (this.rx_ = this.conn_),
                  (this.secondaryConn_ = null),
                  (this.isHealthy_ = !1),
                  setTimeout(function () {
                    t.conn_ && t.conn_.open(n, r);
                  }, Math.floor(0));
                var o = e.healthyTimeout || 0;
                o > 0 &&
                  (this.healthyTimeout_ = G(function () {
                    (t.healthyTimeout_ = null),
                      t.isHealthy_ ||
                        (t.conn_ && t.conn_.bytesReceived > 102400
                          ? (t.log_(
                              "Connection exceeded healthy timeout but has received " +
                                t.conn_.bytesReceived +
                                " bytes.  Marking connection healthy."
                            ),
                            (t.isHealthy_ = !0),
                            t.conn_.markConnectionHealthy())
                          : t.conn_ && t.conn_.bytesSent > 10240
                          ? t.log_(
                              "Connection exceeded healthy timeout but has sent " +
                                t.conn_.bytesSent +
                                " bytes.  Leaving connection alive."
                            )
                          : (t.log_(
                              "Closing unhealthy connection after timeout."
                            ),
                            t.close()));
                  }, Math.floor(o)));
              }),
              (t.prototype.nextTransportId_ = function () {
                return "c:" + this.id + ":" + this.connectionCount++;
              }),
              (t.prototype.disconnReceiver_ = function (t) {
                var e = this;
                return function (n) {
                  t === e.conn_
                    ? e.onConnectionLost_(n)
                    : t === e.secondaryConn_
                    ? (e.log_("Secondary connection lost."),
                      e.onSecondaryConnectionLost_())
                    : e.log_("closing an old connection");
                };
              }),
              (t.prototype.connReceiver_ = function (t) {
                var e = this;
                return function (n) {
                  2 !== e.state_ &&
                    (t === e.rx_
                      ? e.onPrimaryMessageReceived_(n)
                      : t === e.secondaryConn_
                      ? e.onSecondaryMessageReceived_(n)
                      : e.log_("message on old connection"));
                };
              }),
              (t.prototype.sendRequest = function (t) {
                var e = { t: "d", d: t };
                this.sendData_(e);
              }),
              (t.prototype.tryCleanupConnection = function () {
                this.tx_ === this.secondaryConn_ &&
                  this.rx_ === this.secondaryConn_ &&
                  (this.log_(
                    "cleaning up and promoting a connection: " +
                      this.secondaryConn_.connId
                  ),
                  (this.conn_ = this.secondaryConn_),
                  (this.secondaryConn_ = null));
              }),
              (t.prototype.onSecondaryControl_ = function (t) {
                if ("t" in t) {
                  var e = t.t;
                  "a" === e
                    ? this.upgradeIfSecondaryHealthy_()
                    : "r" === e
                    ? (this.log_("Got a reset on secondary, closing it"),
                      this.secondaryConn_.close(),
                      (this.tx_ !== this.secondaryConn_ &&
                        this.rx_ !== this.secondaryConn_) ||
                        this.close())
                    : "o" === e &&
                      (this.log_("got pong on secondary."),
                      this.secondaryResponsesRequired_--,
                      this.upgradeIfSecondaryHealthy_());
                }
              }),
              (t.prototype.onSecondaryMessageReceived_ = function (t) {
                var e = H("t", t),
                  data = H("d", t);
                if ("c" === e) this.onSecondaryControl_(data);
                else {
                  if ("d" !== e)
                    throw new Error("Unknown protocol layer: " + e);
                  this.pendingDataMessages.push(data);
                }
              }),
              (t.prototype.upgradeIfSecondaryHealthy_ = function () {
                this.secondaryResponsesRequired_ <= 0
                  ? (this.log_("Secondary connection is healthy."),
                    (this.isHealthy_ = !0),
                    this.secondaryConn_.markConnectionHealthy(),
                    this.proceedWithUpgrade_())
                  : (this.log_("sending ping on secondary."),
                    this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } }));
              }),
              (t.prototype.proceedWithUpgrade_ = function () {
                this.secondaryConn_.start(),
                  this.log_("sending client ack on secondary"),
                  this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
                  this.log_("Ending transmission on primary"),
                  this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
                  (this.tx_ = this.secondaryConn_),
                  this.tryCleanupConnection();
              }),
              (t.prototype.onPrimaryMessageReceived_ = function (t) {
                var e = H("t", t),
                  data = H("d", t);
                "c" === e
                  ? this.onControl_(data)
                  : "d" === e && this.onDataMessage_(data);
              }),
              (t.prototype.onDataMessage_ = function (t) {
                this.onPrimaryResponse_(), this.onMessage_(t);
              }),
              (t.prototype.onPrimaryResponse_ = function () {
                this.isHealthy_ ||
                  (this.primaryResponsesRequired_--,
                  this.primaryResponsesRequired_ <= 0 &&
                    (this.log_("Primary connection is healthy."),
                    (this.isHealthy_ = !0),
                    this.conn_.markConnectionHealthy()));
              }),
              (t.prototype.onControl_ = function (t) {
                var e = H("t", t);
                if ("d" in t) {
                  var n = t.d;
                  if ("h" === e) this.onHandshake_(n);
                  else if ("n" === e) {
                    this.log_("recvd end transmission on primary"),
                      (this.rx_ = this.secondaryConn_);
                    for (var i = 0; i < this.pendingDataMessages.length; ++i)
                      this.onDataMessage_(this.pendingDataMessages[i]);
                    (this.pendingDataMessages = []),
                      this.tryCleanupConnection();
                  } else
                    "s" === e
                      ? this.onConnectionShutdown_(n)
                      : "r" === e
                      ? this.onReset_(n)
                      : "e" === e
                      ? k("Server Error: " + n)
                      : "o" === e
                      ? (this.log_("got pong on primary."),
                        this.onPrimaryResponse_(),
                        this.sendPingOnPrimaryIfNecessary_())
                      : k("Unknown control packet command: " + e);
                }
              }),
              (t.prototype.onHandshake_ = function (t) {
                var e = t.ts,
                  n = t.v,
                  r = t.h;
                (this.sessionId = t.s),
                  this.repoInfo_.updateHost(r),
                  0 === this.state_ &&
                    (this.conn_.start(),
                    this.onConnectionEstablished_(this.conn_, e),
                    "5" !== n && M("Protocol version mismatch detected"),
                    this.tryStartUpgrade_());
              }),
              (t.prototype.tryStartUpgrade_ = function () {
                var t = this.transportManager_.upgradeTransport();
                t && this.startUpgrade_(t);
              }),
              (t.prototype.startUpgrade_ = function (t) {
                var e = this;
                (this.secondaryConn_ = new t(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  this.applicationId_,
                  this.sessionId
                )),
                  (this.secondaryResponsesRequired_ =
                    t.responsesRequiredToBeHealthy || 0);
                var n = this.connReceiver_(this.secondaryConn_),
                  r = this.disconnReceiver_(this.secondaryConn_);
                this.secondaryConn_.open(n, r),
                  G(function () {
                    e.secondaryConn_ &&
                      (e.log_("Timed out trying to upgrade."),
                      e.secondaryConn_.close());
                  }, Math.floor(6e4));
              }),
              (t.prototype.onReset_ = function (t) {
                this.log_("Reset packet received.  New host: " + t),
                  this.repoInfo_.updateHost(t),
                  1 === this.state_
                    ? this.close()
                    : (this.closeConnections_(), this.start_());
              }),
              (t.prototype.onConnectionEstablished_ = function (t, e) {
                var n = this;
                this.log_("Realtime connection established."),
                  (this.conn_ = t),
                  (this.state_ = 1),
                  this.onReady_ &&
                    (this.onReady_(e, this.sessionId), (this.onReady_ = null)),
                  0 === this.primaryResponsesRequired_
                    ? (this.log_("Primary connection is healthy."),
                      (this.isHealthy_ = !0))
                    : G(function () {
                        n.sendPingOnPrimaryIfNecessary_();
                      }, Math.floor(5e3));
              }),
              (t.prototype.sendPingOnPrimaryIfNecessary_ = function () {
                this.isHealthy_ ||
                  1 !== this.state_ ||
                  (this.log_("sending ping on primary."),
                  this.sendData_({ t: "c", d: { t: "p", d: {} } }));
              }),
              (t.prototype.onSecondaryConnectionLost_ = function () {
                var t = this.secondaryConn_;
                (this.secondaryConn_ = null),
                  (this.tx_ !== t && this.rx_ !== t) || this.close();
              }),
              (t.prototype.onConnectionLost_ = function (t) {
                (this.conn_ = null),
                  t || 0 !== this.state_
                    ? 1 === this.state_ &&
                      this.log_("Realtime connection lost.")
                    : (this.log_("Realtime connection failed."),
                      this.repoInfo_.isCacheableHost() &&
                        (w.remove("host:" + this.repoInfo_.host),
                        (this.repoInfo_.internalHost = this.repoInfo_.host))),
                  this.close();
              }),
              (t.prototype.onConnectionShutdown_ = function (t) {
                this.log_(
                  "Connection shutdown command received. Shutting down..."
                ),
                  this.onKill_ && (this.onKill_(t), (this.onKill_ = null)),
                  (this.onDisconnect_ = null),
                  this.close();
              }),
              (t.prototype.sendData_ = function (data) {
                if (1 !== this.state_) throw "Connection is not connected";
                this.tx_.send(data);
              }),
              (t.prototype.close = function () {
                2 !== this.state_ &&
                  (this.log_("Closing realtime connection."),
                  (this.state_ = 2),
                  this.closeConnections_(),
                  this.onDisconnect_ &&
                    (this.onDisconnect_(), (this.onDisconnect_ = null)));
              }),
              (t.prototype.closeConnections_ = function () {
                this.log_("Shutting down all connections"),
                  this.conn_ && (this.conn_.close(), (this.conn_ = null)),
                  this.secondaryConn_ &&
                    (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
                  this.healthyTimeout_ &&
                    (clearTimeout(this.healthyTimeout_),
                    (this.healthyTimeout_ = null));
              }),
              t
            );
          })(),
          un = (function () {
            function t() {}
            return (
              (t.prototype.put = function (t, data, e, n) {}),
              (t.prototype.merge = function (t, data, e, n) {}),
              (t.prototype.refreshAuthToken = function (t) {}),
              (t.prototype.onDisconnectPut = function (t, data, e) {}),
              (t.prototype.onDisconnectMerge = function (t, data, e) {}),
              (t.prototype.onDisconnectCancel = function (t, e) {}),
              (t.prototype.reportStats = function (t) {}),
              t
            );
          })(),
          cn = (function (t) {
            function e(n, r, o, c, d, h, f) {
              var v = t.call(this) || this;
              if (
                ((v.repoInfo_ = n),
                (v.applicationId_ = r),
                (v.onDataUpdate_ = o),
                (v.onConnectStatus_ = c),
                (v.onServerInfoUpdate_ = d),
                (v.authTokenProvider_ = h),
                (v.authOverride_ = f),
                (v.id = e.nextPersistentConnectionId_++),
                (v.log_ = D("p:" + v.id + ":")),
                (v.interruptReasons_ = {}),
                (v.listens = new Map()),
                (v.outstandingPuts_ = []),
                (v.outstandingPutCount_ = 0),
                (v.onDisconnectRequestQueue_ = []),
                (v.connected_ = !1),
                (v.reconnectDelay_ = 1e3),
                (v.maxReconnectDelay_ = 3e5),
                (v.securityDebugCallback_ = null),
                (v.lastSessionId = null),
                (v.establishConnectionTimer_ = null),
                (v.visible_ = !1),
                (v.requestCBHash_ = {}),
                (v.requestNumber_ = 0),
                (v.realtime_ = null),
                (v.authToken_ = null),
                (v.forceTokenRefresh_ = !1),
                (v.invalidAuthTokenCount_ = 0),
                (v.firstConnection_ = !0),
                (v.lastConnectionAttemptTime_ = null),
                (v.lastConnectionEstablishedTime_ = null),
                f && !l.isNodeSdk())
              )
                throw new Error(
                  "Auth override specified in options, but not supported on non Node.js platforms"
                );
              return (
                v.scheduleConnect_(0),
                Ke.getInstance().on("visible", v.onVisible_, v),
                -1 === n.host.indexOf("fblocal") &&
                  Xe.getInstance().on("online", v.onOnline_, v),
                v
              );
            }
            return (
              c.__extends(e, t),
              (e.prototype.sendRequest = function (t, body, e) {
                var n = ++this.requestNumber_,
                  r = { r: n, a: t, b: body };
                this.log_(l.stringify(r)),
                  l.assert(
                    this.connected_,
                    "sendRequest call when we're not connected not allowed."
                  ),
                  this.realtime_.sendRequest(r),
                  e && (this.requestCBHash_[n] = e);
              }),
              (e.prototype.listen = function (t, e, n, r) {
                var o = t.queryIdentifier(),
                  c = t.path.toString();
                this.log_("Listen called for " + c + " " + o),
                  this.listens.has(c) || this.listens.set(c, new Map()),
                  l.assert(
                    t.getQueryParams().isDefault() ||
                      !t.getQueryParams().loadsAllData(),
                    "listen() called for non-default but complete query"
                  ),
                  l.assert(
                    !this.listens.get(c).has(o),
                    "listen() called twice for same path/queryId."
                  );
                var d = { onComplete: r, hashFn: e, query: t, tag: n };
                this.listens.get(c).set(o, d),
                  this.connected_ && this.sendListen_(d);
              }),
              (e.prototype.sendListen_ = function (t) {
                var n = this,
                  r = t.query,
                  o = r.path.toString(),
                  c = r.queryIdentifier();
                this.log_("Listen on " + o + " for " + c);
                var l = { p: o };
                t.tag && ((l.q = r.queryObject()), (l.t = t.tag)),
                  (l.h = t.hashFn()),
                  this.sendRequest("q", l, function (l) {
                    var d = l.d,
                      h = l.s;
                    e.warnOnListenWarnings_(d, r),
                      (n.listens.get(o) && n.listens.get(o).get(c)) === t &&
                        (n.log_("listen response", l),
                        "ok" !== h && n.removeListen_(o, c),
                        t.onComplete && t.onComplete(h, d));
                  });
              }),
              (e.warnOnListenWarnings_ = function (t, e) {
                if (t && "object" == typeof t && l.contains(t, "w")) {
                  var n = l.safeGet(t, "w");
                  if (Array.isArray(n) && ~n.indexOf("no_index")) {
                    var r =
                        '".indexOn": "' +
                        e.getQueryParams().getIndex().toString() +
                        '"',
                      o = e.path.toString();
                    M(
                      "Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " +
                        r +
                        " at " +
                        o +
                        " to your security rules for better performance."
                    );
                  }
                }
              }),
              (e.prototype.refreshAuthToken = function (t) {
                (this.authToken_ = t),
                  this.log_("Auth token refreshed"),
                  this.authToken_
                    ? this.tryAuth()
                    : this.connected_ &&
                      this.sendRequest("unauth", {}, function () {}),
                  this.reduceReconnectDelayIfAdminCredential_(t);
              }),
              (e.prototype.reduceReconnectDelayIfAdminCredential_ = function (
                t
              ) {
                ((t && 40 === t.length) || l.isAdmin(t)) &&
                  (this.log_(
                    "Admin auth credential detected.  Reducing max reconnect time."
                  ),
                  (this.maxReconnectDelay_ = 3e4));
              }),
              (e.prototype.tryAuth = function () {
                var t = this;
                if (this.connected_ && this.authToken_) {
                  var e = this.authToken_,
                    n = l.isValidFormat(e) ? "auth" : "gauth",
                    r = { cred: e };
                  null === this.authOverride_
                    ? (r.noauth = !0)
                    : "object" == typeof this.authOverride_ &&
                      (r.authvar = this.authOverride_),
                    this.sendRequest(n, r, function (n) {
                      var r = n.s,
                        data = n.d || "error";
                      t.authToken_ === e &&
                        ("ok" === r
                          ? (t.invalidAuthTokenCount_ = 0)
                          : t.onAuthRevoked_(r, data));
                    });
                }
              }),
              (e.prototype.unlisten = function (t, e) {
                var n = t.path.toString(),
                  r = t.queryIdentifier();
                this.log_("Unlisten called for " + n + " " + r),
                  l.assert(
                    t.getQueryParams().isDefault() ||
                      !t.getQueryParams().loadsAllData(),
                    "unlisten() called for non-default but complete query"
                  ),
                  this.removeListen_(n, r) &&
                    this.connected_ &&
                    this.sendUnlisten_(n, r, t.queryObject(), e);
              }),
              (e.prototype.sendUnlisten_ = function (t, e, n, r) {
                this.log_("Unlisten on " + t + " for " + e);
                var o = { p: t };
                r && ((o.q = n), (o.t = r)), this.sendRequest("n", o);
              }),
              (e.prototype.onDisconnectPut = function (t, data, e) {
                this.connected_
                  ? this.sendOnDisconnect_("o", t, data, e)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: "o",
                      data: data,
                      onComplete: e,
                    });
              }),
              (e.prototype.onDisconnectMerge = function (t, data, e) {
                this.connected_
                  ? this.sendOnDisconnect_("om", t, data, e)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: "om",
                      data: data,
                      onComplete: e,
                    });
              }),
              (e.prototype.onDisconnectCancel = function (t, e) {
                this.connected_
                  ? this.sendOnDisconnect_("oc", t, null, e)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: "oc",
                      data: null,
                      onComplete: e,
                    });
              }),
              (e.prototype.sendOnDisconnect_ = function (t, e, data, n) {
                var r = { p: e, d: data };
                this.log_("onDisconnect " + t, r),
                  this.sendRequest(t, r, function (t) {
                    n &&
                      setTimeout(function () {
                        n(t.s, t.d);
                      }, Math.floor(0));
                  });
              }),
              (e.prototype.put = function (t, data, e, n) {
                this.putInternal("p", t, data, e, n);
              }),
              (e.prototype.merge = function (t, data, e, n) {
                this.putInternal("m", t, data, e, n);
              }),
              (e.prototype.putInternal = function (t, e, data, n, r) {
                var o = { p: e, d: data };
                void 0 !== r && (o.h = r),
                  this.outstandingPuts_.push({
                    action: t,
                    request: o,
                    onComplete: n,
                  }),
                  this.outstandingPutCount_++;
                var c = this.outstandingPuts_.length - 1;
                this.connected_
                  ? this.sendPut_(c)
                  : this.log_("Buffering put: " + e);
              }),
              (e.prototype.sendPut_ = function (t) {
                var e = this,
                  n = this.outstandingPuts_[t].action,
                  r = this.outstandingPuts_[t].request,
                  o = this.outstandingPuts_[t].onComplete;
                (this.outstandingPuts_[t].queued = this.connected_),
                  this.sendRequest(n, r, function (r) {
                    e.log_(n + " response", r),
                      delete e.outstandingPuts_[t],
                      e.outstandingPutCount_--,
                      0 === e.outstandingPutCount_ && (e.outstandingPuts_ = []),
                      o && o(r.s, r.d);
                  });
              }),
              (e.prototype.reportStats = function (t) {
                var e = this;
                if (this.connected_) {
                  var n = { c: t };
                  this.log_("reportStats", n),
                    this.sendRequest("s", n, function (t) {
                      if ("ok" !== t.s) {
                        var n = t.d;
                        e.log_("reportStats", "Error sending stats: " + n);
                      }
                    });
                }
              }),
              (e.prototype.onDataMessage_ = function (t) {
                if ("r" in t) {
                  this.log_("from server: " + l.stringify(t));
                  var e = t.r,
                    n = this.requestCBHash_[e];
                  n && (delete this.requestCBHash_[e], n(t.b));
                } else {
                  if ("error" in t)
                    throw "A server-side error has occurred: " + t.error;
                  "a" in t && this.onDataPush_(t.a, t.b);
                }
              }),
              (e.prototype.onDataPush_ = function (t, body) {
                this.log_("handleServerMessage", t, body),
                  "d" === t
                    ? this.onDataUpdate_(body.p, body.d, !1, body.t)
                    : "m" === t
                    ? this.onDataUpdate_(body.p, body.d, !0, body.t)
                    : "c" === t
                    ? this.onListenRevoked_(body.p, body.q)
                    : "ac" === t
                    ? this.onAuthRevoked_(body.s, body.d)
                    : "sd" === t
                    ? this.onSecurityDebugPacket_(body)
                    : k(
                        "Unrecognized action received from server: " +
                          l.stringify(t) +
                          "\nAre you using the latest client?"
                      );
              }),
              (e.prototype.onReady_ = function (t, e) {
                this.log_("connection ready"),
                  (this.connected_ = !0),
                  (this.lastConnectionEstablishedTime_ = new Date().getTime()),
                  this.handleTimestamp_(t),
                  (this.lastSessionId = e),
                  this.firstConnection_ && this.sendConnectStats_(),
                  this.restoreState_(),
                  (this.firstConnection_ = !1),
                  this.onConnectStatus_(!0);
              }),
              (e.prototype.scheduleConnect_ = function (t) {
                var e = this;
                l.assert(
                  !this.realtime_,
                  "Scheduling a connect when we're already connected/ing?"
                ),
                  this.establishConnectionTimer_ &&
                    clearTimeout(this.establishConnectionTimer_),
                  (this.establishConnectionTimer_ = setTimeout(function () {
                    (e.establishConnectionTimer_ = null),
                      e.establishConnection_();
                  }, Math.floor(t)));
              }),
              (e.prototype.onVisible_ = function (t) {
                t &&
                  !this.visible_ &&
                  this.reconnectDelay_ === this.maxReconnectDelay_ &&
                  (this.log_("Window became visible.  Reducing delay."),
                  (this.reconnectDelay_ = 1e3),
                  this.realtime_ || this.scheduleConnect_(0)),
                  (this.visible_ = t);
              }),
              (e.prototype.onOnline_ = function (t) {
                t
                  ? (this.log_("Browser went online."),
                    (this.reconnectDelay_ = 1e3),
                    this.realtime_ || this.scheduleConnect_(0))
                  : (this.log_("Browser went offline.  Killing connection."),
                    this.realtime_ && this.realtime_.close());
              }),
              (e.prototype.onRealtimeDisconnect_ = function () {
                if (
                  (this.log_("data client disconnected"),
                  (this.connected_ = !1),
                  (this.realtime_ = null),
                  this.cancelSentTransactions_(),
                  (this.requestCBHash_ = {}),
                  this.shouldReconnect_())
                ) {
                  if (this.visible_) {
                    if (this.lastConnectionEstablishedTime_) {
                      new Date().getTime() -
                        this.lastConnectionEstablishedTime_ >
                        3e4 && (this.reconnectDelay_ = 1e3),
                        (this.lastConnectionEstablishedTime_ = null);
                    }
                  } else
                    this.log_("Window isn't visible.  Delaying reconnect."),
                      (this.reconnectDelay_ = this.maxReconnectDelay_),
                      (this.lastConnectionAttemptTime_ = new Date().getTime());
                  var t =
                      new Date().getTime() - this.lastConnectionAttemptTime_,
                    e = Math.max(0, this.reconnectDelay_ - t);
                  (e = Math.random() * e),
                    this.log_("Trying to reconnect in " + e + "ms"),
                    this.scheduleConnect_(e),
                    (this.reconnectDelay_ = Math.min(
                      this.maxReconnectDelay_,
                      1.3 * this.reconnectDelay_
                    ));
                }
                this.onConnectStatus_(!1);
              }),
              (e.prototype.establishConnection_ = function () {
                var t = this;
                if (this.shouldReconnect_()) {
                  this.log_("Making a connection attempt"),
                    (this.lastConnectionAttemptTime_ = new Date().getTime()),
                    (this.lastConnectionEstablishedTime_ = null);
                  var n = this.onDataMessage_.bind(this),
                    r = this.onReady_.bind(this),
                    o = this.onRealtimeDisconnect_.bind(this),
                    c = this.id + ":" + e.nextConnectionId_++,
                    d = this,
                    h = this.lastSessionId,
                    f = !1,
                    v = null,
                    m = function () {
                      v ? v.close() : ((f = !0), o());
                    };
                  this.realtime_ = {
                    close: m,
                    sendRequest: function (t) {
                      l.assert(
                        v,
                        "sendRequest call when we're not connected not allowed."
                      ),
                        v.sendRequest(t);
                    },
                  };
                  var y = this.forceTokenRefresh_;
                  (this.forceTokenRefresh_ = !1),
                    this.authTokenProvider_
                      .getToken(y)
                      .then(function (t) {
                        f
                          ? I("getToken() completed but was canceled")
                          : (I("getToken() completed. Creating connection."),
                            (d.authToken_ = t && t.accessToken),
                            (v = new sn(
                              c,
                              d.repoInfo_,
                              d.applicationId_,
                              n,
                              r,
                              o,
                              function (t) {
                                M(t + " (" + d.repoInfo_.toString() + ")"),
                                  d.interrupt("server_kill");
                              },
                              h
                            )));
                      })
                      .then(null, function (e) {
                        d.log_("Failed to get token: " + e),
                          f || (t.repoInfo_.nodeAdmin && M(e), m());
                      });
                }
              }),
              (e.prototype.interrupt = function (t) {
                I("Interrupting connection for reason: " + t),
                  (this.interruptReasons_[t] = !0),
                  this.realtime_
                    ? this.realtime_.close()
                    : (this.establishConnectionTimer_ &&
                        (clearTimeout(this.establishConnectionTimer_),
                        (this.establishConnectionTimer_ = null)),
                      this.connected_ && this.onRealtimeDisconnect_());
              }),
              (e.prototype.resume = function (t) {
                I("Resuming connection for reason: " + t),
                  delete this.interruptReasons_[t],
                  l.isEmpty(this.interruptReasons_) &&
                    ((this.reconnectDelay_ = 1e3),
                    this.realtime_ || this.scheduleConnect_(0));
              }),
              (e.prototype.handleTimestamp_ = function (t) {
                var e = t - new Date().getTime();
                this.onServerInfoUpdate_({ serverTimeOffset: e });
              }),
              (e.prototype.cancelSentTransactions_ = function () {
                for (var i = 0; i < this.outstandingPuts_.length; i++) {
                  var t = this.outstandingPuts_[i];
                  t &&
                    "h" in t.request &&
                    t.queued &&
                    (t.onComplete && t.onComplete("disconnect"),
                    delete this.outstandingPuts_[i],
                    this.outstandingPutCount_--);
                }
                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
              }),
              (e.prototype.onListenRevoked_ = function (t, e) {
                var n;
                n = e
                  ? e
                      .map(function (q) {
                        return U(q);
                      })
                      .join("$")
                  : "default";
                var r = this.removeListen_(t, n);
                r && r.onComplete && r.onComplete("permission_denied");
              }),
              (e.prototype.removeListen_ = function (t, e) {
                var n,
                  r = new Z(t).toString();
                if (this.listens.has(r)) {
                  var map = this.listens.get(r);
                  (n = map.get(e)),
                    map.delete(e),
                    0 === map.size && this.listens.delete(r);
                } else n = void 0;
                return n;
              }),
              (e.prototype.onAuthRevoked_ = function (t, e) {
                I("Auth token revoked: " + t + "/" + e),
                  (this.authToken_ = null),
                  (this.forceTokenRefresh_ = !0),
                  this.realtime_.close(),
                  ("invalid_token" !== t && "permission_denied" !== t) ||
                    (this.invalidAuthTokenCount_++,
                    this.invalidAuthTokenCount_ >= 3 &&
                      ((this.reconnectDelay_ = 3e4),
                      this.authTokenProvider_.notifyForInvalidToken()));
              }),
              (e.prototype.onSecurityDebugPacket_ = function (body) {
                this.securityDebugCallback_
                  ? this.securityDebugCallback_(body)
                  : "msg" in body &&
                    console.log(
                      "FIREBASE: " + body.msg.replace("\n", "\nFIREBASE: ")
                    );
              }),
              (e.prototype.restoreState_ = function () {
                var t, e, n, r;
                this.tryAuth();
                try {
                  for (
                    var o = c.__values(this.listens.values()), l = o.next();
                    !l.done;
                    l = o.next()
                  ) {
                    var d = l.value;
                    try {
                      for (
                        var h = ((n = void 0), c.__values(d.values())),
                          f = h.next();
                        !f.done;
                        f = h.next()
                      ) {
                        var v = f.value;
                        this.sendListen_(v);
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        f && !f.done && (r = h.return) && r.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    l && !l.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                for (var i = 0; i < this.outstandingPuts_.length; i++)
                  this.outstandingPuts_[i] && this.sendPut_(i);
                for (; this.onDisconnectRequestQueue_.length; ) {
                  var m = this.onDisconnectRequestQueue_.shift();
                  this.sendOnDisconnect_(
                    m.action,
                    m.pathString,
                    m.data,
                    m.onComplete
                  );
                }
              }),
              (e.prototype.sendConnectStats_ = function () {
                var t = {},
                  e = "js";
                l.isNodeSdk() &&
                  (e = this.repoInfo_.nodeAdmin ? "admin_node" : "node"),
                  (t["sdk." + e + "." + nn.replace(/\./g, "-")] = 1),
                  l.isMobileCordova()
                    ? (t["framework.cordova"] = 1)
                    : l.isReactNative() && (t["framework.reactnative"] = 1),
                  this.reportStats(t);
              }),
              (e.prototype.shouldReconnect_ = function () {
                var t = Xe.getInstance().currentlyOnline();
                return l.isEmpty(this.interruptReasons_) && t;
              }),
              (e.nextPersistentConnectionId_ = 0),
              (e.nextConnectionId_ = 0),
              e
            );
          })(un),
          ln = (function (t) {
            function e(e, n, r) {
              var o = t.call(this) || this;
              return (
                (o.repoInfo_ = e),
                (o.onDataUpdate_ = n),
                (o.authTokenProvider_ = r),
                (o.log_ = D("p:rest:")),
                (o.listens_ = {}),
                o
              );
            }
            return (
              c.__extends(e, t),
              (e.prototype.reportStats = function (t) {
                throw new Error("Method not implemented.");
              }),
              (e.getListenId_ = function (t, e) {
                return void 0 !== e
                  ? "tag$" + e
                  : (l.assert(
                      t.getQueryParams().isDefault(),
                      "should have a tag if it's not a default query."
                    ),
                    t.path.toString());
              }),
              (e.prototype.listen = function (t, n, r, o) {
                var c = this,
                  d = t.path.toString();
                this.log_("Listen called for " + d + " " + t.queryIdentifier());
                var h = e.getListenId_(t, r),
                  f = {};
                this.listens_[h] = f;
                var v = t.getQueryParams().toRestQueryStringParameters();
                this.restRequest_(d + ".json", v, function (t, e) {
                  var data = e;
                  (404 === t && ((data = null), (t = null)),
                  null === t && c.onDataUpdate_(d, data, !1, r),
                  l.safeGet(c.listens_, h) === f) &&
                    o(
                      t
                        ? 401 === t
                          ? "permission_denied"
                          : "rest_error:" + t
                        : "ok",
                      null
                    );
                });
              }),
              (e.prototype.unlisten = function (t, n) {
                var r = e.getListenId_(t, n);
                delete this.listens_[r];
              }),
              (e.prototype.refreshAuthToken = function (t) {}),
              (e.prototype.restRequest_ = function (t, e, n) {
                var r = this;
                void 0 === e && (e = {}),
                  (e.format = "export"),
                  this.authTokenProvider_.getToken(!1).then(function (o) {
                    var c = o && o.accessToken;
                    c && (e.auth = c);
                    var d =
                      (r.repoInfo_.secure ? "https://" : "http://") +
                      r.repoInfo_.host +
                      t +
                      "?ns=" +
                      r.repoInfo_.namespace +
                      l.querystring(e);
                    r.log_("Sending REST request for " + d);
                    var h = new XMLHttpRequest();
                    (h.onreadystatechange = function () {
                      if (n && 4 === h.readyState) {
                        r.log_(
                          "REST Response for " + d + " received. status:",
                          h.status,
                          "response:",
                          h.responseText
                        );
                        var t = null;
                        if (h.status >= 200 && h.status < 300) {
                          try {
                            t = l.jsonEval(h.responseText);
                          } catch (t) {
                            M(
                              "Failed to parse JSON response for " +
                                d +
                                ": " +
                                h.responseText
                            );
                          }
                          n(null, t);
                        } else
                          401 !== h.status &&
                            404 !== h.status &&
                            M(
                              "Got unsuccessful REST response for " +
                                d +
                                " Status: " +
                                h.status
                            ),
                            n(h.status);
                        n = null;
                      }
                    }),
                      h.open("GET", d, !0),
                      h.send();
                  });
              }),
              e
            );
          })(un),
          dn = (function () {
            function t(t, e, n, r) {
              var o = this;
              if (
                ((this.repoInfo_ = t),
                (this.app = n),
                (this.dataUpdateCount = 0),
                (this.statsListener_ = null),
                (this.eventQueue_ = new Ye()),
                (this.nextWriteId_ = 1),
                (this.interceptServerDataCallback_ = null),
                (this.onDisconnect_ = new ge()),
                (this.persistentConnection_ = null),
                (this.stats_ = Be.getCollection(t)),
                e ||
                  (
                    ("object" == typeof window &&
                      window.navigator &&
                      window.navigator.userAgent) ||
                    ""
                  ).search(
                    /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
                  ) >= 0)
              )
                (this.server_ = new ln(
                  this.repoInfo_,
                  this.onDataUpdate_.bind(this),
                  r
                )),
                  setTimeout(this.onConnectStatus_.bind(this, !0), 0);
              else {
                var c = n.options.databaseAuthVariableOverride;
                if (null != c) {
                  if ("object" != typeof c)
                    throw new Error(
                      "Only objects are supported for option databaseAuthVariableOverride"
                    );
                  try {
                    l.stringify(c);
                  } catch (t) {
                    throw new Error("Invalid authOverride provided: " + t);
                  }
                }
                (this.persistentConnection_ = new cn(
                  this.repoInfo_,
                  n.options.appId,
                  this.onDataUpdate_.bind(this),
                  this.onConnectStatus_.bind(this),
                  this.onServerInfoUpdate_.bind(this),
                  r,
                  c
                )),
                  (this.server_ = this.persistentConnection_);
              }
              r.addTokenChangeListener(function (t) {
                o.server_.refreshAuthToken(t);
              }),
                (this.statsReporter_ = Be.getOrCreateReporter(t, function () {
                  return new Qe(o.stats_, o.server_);
                })),
                this.transactionsInit_(),
                (this.infoData_ = new Ve()),
                (this.infoSyncTree_ = new qe({
                  startListening: function (t, e, n, r) {
                    var c = [],
                      l = o.infoData_.getNode(t.path);
                    return (
                      l.isEmpty() ||
                        ((c = o.infoSyncTree_.applyServerOverwrite(t.path, l)),
                        setTimeout(function () {
                          r("ok");
                        }, 0)),
                      c
                    );
                  },
                  stopListening: function () {},
                })),
                this.updateInfo_("connected", !1),
                (this.serverSyncTree_ = new qe({
                  startListening: function (t, e, n, r) {
                    return (
                      o.server_.listen(t, n, e, function (e, data) {
                        var n = r(e, data);
                        o.eventQueue_.raiseEventsForChangedPath(t.path, n);
                      }),
                      []
                    );
                  },
                  stopListening: function (t, e) {
                    o.server_.unlisten(t, e);
                  },
                }));
            }
            return (
              (t.prototype.toString = function () {
                return (
                  (this.repoInfo_.secure ? "https://" : "http://") +
                  this.repoInfo_.host
                );
              }),
              (t.prototype.name = function () {
                return this.repoInfo_.namespace;
              }),
              (t.prototype.serverTime = function () {
                var t =
                  this.infoData_
                    .getNode(new Z(".info/serverTimeOffset"))
                    .val() || 0;
                return new Date().getTime() + t;
              }),
              (t.prototype.generateServerValues = function () {
                return (
                  ((t =
                    (t = { timestamp: this.serverTime() }) || {}).timestamp =
                    t.timestamp || new Date().getTime()),
                  t
                );
                var t;
              }),
              (t.prototype.onDataUpdate_ = function (t, data, e, n) {
                this.dataUpdateCount++;
                var path = new Z(t);
                data = this.interceptServerDataCallback_
                  ? this.interceptServerDataCallback_(t, data)
                  : data;
                var r = [];
                if (n)
                  if (e) {
                    var o = l.map(data, function (t) {
                      return Jt(t);
                    });
                    r = this.serverSyncTree_.applyTaggedQueryMerge(path, o, n);
                  } else {
                    var c = Jt(data);
                    r = this.serverSyncTree_.applyTaggedQueryOverwrite(
                      path,
                      c,
                      n
                    );
                  }
                else if (e) {
                  var d = l.map(data, function (t) {
                    return Jt(t);
                  });
                  r = this.serverSyncTree_.applyServerMerge(path, d);
                } else {
                  var h = Jt(data);
                  r = this.serverSyncTree_.applyServerOverwrite(path, h);
                }
                var f = path;
                r.length > 0 && (f = this.rerunTransactions_(path)),
                  this.eventQueue_.raiseEventsForChangedPath(f, r);
              }),
              (t.prototype.interceptServerData_ = function (t) {
                this.interceptServerDataCallback_ = t;
              }),
              (t.prototype.onConnectStatus_ = function (t) {
                this.updateInfo_("connected", t),
                  !1 === t && this.runOnDisconnectEvents_();
              }),
              (t.prototype.onServerInfoUpdate_ = function (t) {
                var e = this;
                W(t, function (t, n) {
                  e.updateInfo_(t, n);
                });
              }),
              (t.prototype.updateInfo_ = function (t, e) {
                var path = new Z("/.info/" + t),
                  n = Jt(e);
                this.infoData_.updateSnapshot(path, n);
                var r = this.infoSyncTree_.applyServerOverwrite(path, n);
                this.eventQueue_.raiseEventsForChangedPath(path, r);
              }),
              (t.prototype.getNextWriteId_ = function () {
                return this.nextWriteId_++;
              }),
              (t.prototype.setWithPriority = function (path, t, e, n) {
                var r = this;
                this.log_("set", {
                  path: path.toString(),
                  value: t,
                  priority: e,
                });
                var o = this.generateServerValues(),
                  c = Jt(t, e),
                  l = this.serverSyncTree_.calcCompleteEventCache(path),
                  d = ve(c, l, o),
                  h = this.getNextWriteId_(),
                  f = this.serverSyncTree_.applyUserOverwrite(path, d, h, !0);
                this.eventQueue_.queueEvents(f),
                  this.server_.put(path.toString(), c.val(!0), function (t, e) {
                    var o = "ok" === t;
                    o || M("set at " + path + " failed: " + t);
                    var c = r.serverSyncTree_.ackUserWrite(h, !o);
                    r.eventQueue_.raiseEventsForChangedPath(path, c),
                      r.callOnCompleteCallback(n, t, e);
                  });
                var v = this.abortTransactions_(path);
                this.rerunTransactions_(v),
                  this.eventQueue_.raiseEventsForChangedPath(v, []);
              }),
              (t.prototype.update = function (path, t, e) {
                var n = this;
                this.log_("update", { path: path.toString(), value: t });
                var r = !0,
                  o = this.generateServerValues(),
                  c = {};
                if (
                  (W(t, function (t, e) {
                    (r = !1),
                      (c[t] = pe(path.child(t), Jt(e), n.serverSyncTree_, o));
                  }),
                  r)
                )
                  I("update() called with empty data.  Don't do anything."),
                    this.callOnCompleteCallback(e, "ok");
                else {
                  var l = this.getNextWriteId_(),
                    d = this.serverSyncTree_.applyUserMerge(path, c, l);
                  this.eventQueue_.queueEvents(d),
                    this.server_.merge(path.toString(), t, function (t, r) {
                      var o = "ok" === t;
                      o || M("update at " + path + " failed: " + t);
                      var c = n.serverSyncTree_.ackUserWrite(l, !o),
                        d = c.length > 0 ? n.rerunTransactions_(path) : path;
                      n.eventQueue_.raiseEventsForChangedPath(d, c),
                        n.callOnCompleteCallback(e, t, r);
                    }),
                    W(t, function (t) {
                      var e = n.abortTransactions_(path.child(t));
                      n.rerunTransactions_(e);
                    }),
                    this.eventQueue_.raiseEventsForChangedPath(path, []);
                }
              }),
              (t.prototype.runOnDisconnectEvents_ = function () {
                var t = this;
                this.log_("onDisconnectEvents");
                var e = this.generateServerValues(),
                  n = new ge();
                this.onDisconnect_.forEachTree(Z.Empty, function (path, r) {
                  var o = pe(path, r, t.serverSyncTree_, e);
                  n.remember(path, o);
                });
                var r = [];
                n.forEachTree(Z.Empty, function (path, e) {
                  r = r.concat(t.serverSyncTree_.applyServerOverwrite(path, e));
                  var n = t.abortTransactions_(path);
                  t.rerunTransactions_(n);
                }),
                  (this.onDisconnect_ = new ge()),
                  this.eventQueue_.raiseEventsForChangedPath(Z.Empty, r);
              }),
              (t.prototype.onDisconnectCancel = function (path, t) {
                var e = this;
                this.server_.onDisconnectCancel(
                  path.toString(),
                  function (n, r) {
                    "ok" === n && e.onDisconnect_.forget(path),
                      e.callOnCompleteCallback(t, n, r);
                  }
                );
              }),
              (t.prototype.onDisconnectSet = function (path, t, e) {
                var n = this,
                  r = Jt(t);
                this.server_.onDisconnectPut(
                  path.toString(),
                  r.val(!0),
                  function (t, o) {
                    "ok" === t && n.onDisconnect_.remember(path, r),
                      n.callOnCompleteCallback(e, t, o);
                  }
                );
              }),
              (t.prototype.onDisconnectSetWithPriority = function (
                path,
                t,
                e,
                n
              ) {
                var r = this,
                  o = Jt(t, e);
                this.server_.onDisconnectPut(
                  path.toString(),
                  o.val(!0),
                  function (t, e) {
                    "ok" === t && r.onDisconnect_.remember(path, o),
                      r.callOnCompleteCallback(n, t, e);
                  }
                );
              }),
              (t.prototype.onDisconnectUpdate = function (path, t, e) {
                var n = this;
                if (l.isEmpty(t))
                  return (
                    I(
                      "onDisconnect().update() called with empty data.  Don't do anything."
                    ),
                    void this.callOnCompleteCallback(e, "ok")
                  );
                this.server_.onDisconnectMerge(
                  path.toString(),
                  t,
                  function (r, o) {
                    "ok" === r &&
                      W(t, function (t, e) {
                        var r = Jt(e);
                        n.onDisconnect_.remember(path.child(t), r);
                      }),
                      n.callOnCompleteCallback(e, r, o);
                  }
                );
              }),
              (t.prototype.addEventCallbackForQuery = function (t, e) {
                var n;
                (n =
                  ".info" === t.path.getFront()
                    ? this.infoSyncTree_.addEventRegistration(t, e)
                    : this.serverSyncTree_.addEventRegistration(t, e)),
                  this.eventQueue_.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.removeEventCallbackForQuery = function (t, e) {
                var n;
                (n =
                  ".info" === t.path.getFront()
                    ? this.infoSyncTree_.removeEventRegistration(t, e)
                    : this.serverSyncTree_.removeEventRegistration(t, e)),
                  this.eventQueue_.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.interrupt = function () {
                this.persistentConnection_ &&
                  this.persistentConnection_.interrupt("repo_interrupt");
              }),
              (t.prototype.resume = function () {
                this.persistentConnection_ &&
                  this.persistentConnection_.resume("repo_interrupt");
              }),
              (t.prototype.stats = function (t) {
                if ((void 0 === t && (t = !1), "undefined" != typeof console)) {
                  var e;
                  t
                    ? (this.statsListener_ ||
                        (this.statsListener_ = new ze(this.stats_)),
                      (e = this.statsListener_.get()))
                    : (e = this.stats_.get());
                  var n = Object.keys(e).reduce(function (t, e) {
                    return Math.max(e.length, t);
                  }, 0);
                  W(e, function (t, e) {
                    for (var r = t, i = t.length; i < n + 2; i++) r += " ";
                    console.log(r + e);
                  });
                }
              }),
              (t.prototype.statsIncrementCounter = function (t) {
                this.stats_.incrementCounter(t),
                  this.statsReporter_.includeStat(t);
              }),
              (t.prototype.log_ = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var n = "";
                this.persistentConnection_ &&
                  (n = this.persistentConnection_.id + ":"),
                  I.apply(void 0, c.__spread([n], t));
              }),
              (t.prototype.callOnCompleteCallback = function (t, e, n) {
                t &&
                  Y(function () {
                    if ("ok" === e) t(null);
                    else {
                      var code = (e || "error").toUpperCase(),
                        r = code;
                      n && (r += ": " + n);
                      var o = new Error(r);
                      (o.code = code), t(o);
                    }
                  });
              }),
              Object.defineProperty(t.prototype, "database", {
                get: function () {
                  return this.__database || (this.__database = new En(this));
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })(),
          hn = (function () {
            function t(e) {
              (this.indexedFilter_ = new Ie(e.getIndex())),
                (this.index_ = e.getIndex()),
                (this.startPost_ = t.getStartPost_(e)),
                (this.endPost_ = t.getEndPost_(e));
            }
            return (
              (t.prototype.getStartPost = function () {
                return this.startPost_;
              }),
              (t.prototype.getEndPost = function () {
                return this.endPost_;
              }),
              (t.prototype.matches = function (t) {
                return (
                  this.index_.compare(this.getStartPost(), t) <= 0 &&
                  this.index_.compare(t, this.getEndPost()) <= 0
                );
              }),
              (t.prototype.updateChild = function (t, e, n, r, source, o) {
                return (
                  this.matches(new St(e, n)) || (n = Kt.EMPTY_NODE),
                  this.indexedFilter_.updateChild(t, e, n, r, source, o)
                );
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                e.isLeafNode() && (e = Kt.EMPTY_NODE);
                var r = e.withIndex(this.index_);
                r = r.updatePriority(Kt.EMPTY_NODE);
                var o = this;
                return (
                  e.forEachChild($t, function (t, e) {
                    o.matches(new St(t, e)) ||
                      (r = r.updateImmediateChild(t, Kt.EMPTY_NODE));
                  }),
                  this.indexedFilter_.updateFullNode(t, r, n)
                );
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function () {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this.indexedFilter_;
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.getStartPost_ = function (t) {
                if (t.hasStart()) {
                  var e = t.getIndexStartName();
                  return t.getIndex().makePost(t.getIndexStartValue(), e);
                }
                return t.getIndex().minPost();
              }),
              (t.getEndPost_ = function (t) {
                if (t.hasEnd()) {
                  var e = t.getIndexEndName();
                  return t.getIndex().makePost(t.getIndexEndValue(), e);
                }
                return t.getIndex().maxPost();
              }),
              t
            );
          })(),
          fn = (function () {
            function t(t) {
              (this.rangedFilter_ = new hn(t)),
                (this.index_ = t.getIndex()),
                (this.limit_ = t.getLimit()),
                (this.reverse_ = !t.isViewFromLeft());
            }
            return (
              (t.prototype.updateChild = function (t, e, n, r, source, o) {
                return (
                  this.rangedFilter_.matches(new St(e, n)) ||
                    (n = Kt.EMPTY_NODE),
                  t.getImmediateChild(e).equals(n)
                    ? t
                    : t.numChildren() < this.limit_
                    ? this.rangedFilter_
                        .getIndexedFilter()
                        .updateChild(t, e, n, r, source, o)
                    : this.fullLimitUpdateChild_(t, e, n, source, o)
                );
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                var r;
                if (e.isLeafNode() || e.isEmpty())
                  r = Kt.EMPTY_NODE.withIndex(this.index_);
                else if (
                  2 * this.limit_ < e.numChildren() &&
                  e.isIndexed(this.index_)
                ) {
                  r = Kt.EMPTY_NODE.withIndex(this.index_);
                  var o = void 0;
                  o = this.reverse_
                    ? e.getReverseIteratorFrom(
                        this.rangedFilter_.getEndPost(),
                        this.index_
                      )
                    : e.getIteratorFrom(
                        this.rangedFilter_.getStartPost(),
                        this.index_
                      );
                  for (var c = 0; o.hasNext() && c < this.limit_; ) {
                    var l = o.getNext();
                    if (
                      !(this.reverse_
                        ? this.index_.compare(
                            this.rangedFilter_.getStartPost(),
                            l
                          ) <= 0
                        : this.index_.compare(
                            l,
                            this.rangedFilter_.getEndPost()
                          ) <= 0)
                    )
                      break;
                    (r = r.updateImmediateChild(l.name, l.node)), c++;
                  }
                } else {
                  r = (r = e.withIndex(this.index_)).updatePriority(
                    Kt.EMPTY_NODE
                  );
                  var d = void 0,
                    h = void 0,
                    f = void 0;
                  o = void 0;
                  if (this.reverse_) {
                    (o = r.getReverseIterator(this.index_)),
                      (d = this.rangedFilter_.getEndPost()),
                      (h = this.rangedFilter_.getStartPost());
                    var v = this.index_.getCompare();
                    f = function (a, b) {
                      return v(b, a);
                    };
                  } else
                    (o = r.getIterator(this.index_)),
                      (d = this.rangedFilter_.getStartPost()),
                      (h = this.rangedFilter_.getEndPost()),
                      (f = this.index_.getCompare());
                  c = 0;
                  for (var m = !1; o.hasNext(); ) {
                    l = o.getNext();
                    !m && f(d, l) <= 0 && (m = !0),
                      m && c < this.limit_ && f(l, h) <= 0
                        ? c++
                        : (r = r.updateImmediateChild(l.name, Kt.EMPTY_NODE));
                  }
                }
                return this.rangedFilter_
                  .getIndexedFilter()
                  .updateFullNode(t, r, n);
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function () {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this.rangedFilter_.getIndexedFilter();
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.prototype.fullLimitUpdateChild_ = function (
                t,
                e,
                n,
                source,
                r
              ) {
                var o;
                if (this.reverse_) {
                  var c = this.index_.getCompare();
                  o = function (a, b) {
                    return c(b, a);
                  };
                } else o = this.index_.getCompare();
                var d = t;
                l.assert(d.numChildren() === this.limit_, "");
                var h = new St(e, n),
                  f = this.reverse_
                    ? d.getFirstChild(this.index_)
                    : d.getLastChild(this.index_),
                  v = this.rangedFilter_.matches(h);
                if (d.hasChild(e)) {
                  for (
                    var m = d.getImmediateChild(e),
                      y = source.getChildAfterChild(
                        this.index_,
                        f,
                        this.reverse_
                      );
                    null != y && (y.name === e || d.hasChild(y.name));

                  )
                    y = source.getChildAfterChild(
                      this.index_,
                      y,
                      this.reverse_
                    );
                  var _ = null == y ? 1 : o(y, h);
                  if (v && !n.isEmpty() && _ >= 0)
                    return (
                      null != r &&
                        r.trackChildChange(Oe.childChangedChange(e, n, m)),
                      d.updateImmediateChild(e, n)
                    );
                  null != r && r.trackChildChange(Oe.childRemovedChange(e, m));
                  var w = d.updateImmediateChild(e, Kt.EMPTY_NODE);
                  return null != y && this.rangedFilter_.matches(y)
                    ? (null != r &&
                        r.trackChildChange(Oe.childAddedChange(y.name, y.node)),
                      w.updateImmediateChild(y.name, y.node))
                    : w;
                }
                return n.isEmpty()
                  ? t
                  : v && o(f, h) >= 0
                  ? (null != r &&
                      (r.trackChildChange(
                        Oe.childRemovedChange(f.name, f.node)
                      ),
                      r.trackChildChange(Oe.childAddedChange(e, n))),
                    d
                      .updateImmediateChild(e, n)
                      .updateImmediateChild(f.name, Kt.EMPTY_NODE))
                  : t;
              }),
              t
            );
          })(),
          pn = (function () {
            function t() {
              (this.limitSet_ = !1),
                (this.startSet_ = !1),
                (this.startNameSet_ = !1),
                (this.endSet_ = !1),
                (this.endNameSet_ = !1),
                (this.limit_ = 0),
                (this.viewFrom_ = ""),
                (this.indexStartValue_ = null),
                (this.indexStartName_ = ""),
                (this.indexEndValue_ = null),
                (this.indexEndName_ = ""),
                (this.index_ = $t);
            }
            return (
              (t.prototype.hasStart = function () {
                return this.startSet_;
              }),
              (t.prototype.isViewFromLeft = function () {
                return "" === this.viewFrom_
                  ? this.startSet_
                  : this.viewFrom_ ===
                      t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
              }),
              (t.prototype.getIndexStartValue = function () {
                return (
                  l.assert(this.startSet_, "Only valid if start has been set"),
                  this.indexStartValue_
                );
              }),
              (t.prototype.getIndexStartName = function () {
                return (
                  l.assert(this.startSet_, "Only valid if start has been set"),
                  this.startNameSet_ ? this.indexStartName_ : R
                );
              }),
              (t.prototype.hasEnd = function () {
                return this.endSet_;
              }),
              (t.prototype.getIndexEndValue = function () {
                return (
                  l.assert(this.endSet_, "Only valid if end has been set"),
                  this.indexEndValue_
                );
              }),
              (t.prototype.getIndexEndName = function () {
                return (
                  l.assert(this.endSet_, "Only valid if end has been set"),
                  this.endNameSet_ ? this.indexEndName_ : L
                );
              }),
              (t.prototype.hasLimit = function () {
                return this.limitSet_;
              }),
              (t.prototype.hasAnchoredLimit = function () {
                return this.limitSet_ && "" !== this.viewFrom_;
              }),
              (t.prototype.getLimit = function () {
                return (
                  l.assert(this.limitSet_, "Only valid if limit has been set"),
                  this.limit_
                );
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.prototype.copy_ = function () {
                var e = new t();
                return (
                  (e.limitSet_ = this.limitSet_),
                  (e.limit_ = this.limit_),
                  (e.startSet_ = this.startSet_),
                  (e.indexStartValue_ = this.indexStartValue_),
                  (e.startNameSet_ = this.startNameSet_),
                  (e.indexStartName_ = this.indexStartName_),
                  (e.endSet_ = this.endSet_),
                  (e.indexEndValue_ = this.indexEndValue_),
                  (e.endNameSet_ = this.endNameSet_),
                  (e.indexEndName_ = this.indexEndName_),
                  (e.index_ = this.index_),
                  (e.viewFrom_ = this.viewFrom_),
                  e
                );
              }),
              (t.prototype.limit = function (t) {
                var e = this.copy_();
                return (
                  (e.limitSet_ = !0), (e.limit_ = t), (e.viewFrom_ = ""), e
                );
              }),
              (t.prototype.limitToFirst = function (e) {
                var n = this.copy_();
                return (
                  (n.limitSet_ = !0),
                  (n.limit_ = e),
                  (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT),
                  n
                );
              }),
              (t.prototype.limitToLast = function (e) {
                var n = this.copy_();
                return (
                  (n.limitSet_ = !0),
                  (n.limit_ = e),
                  (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT),
                  n
                );
              }),
              (t.prototype.startAt = function (t, e) {
                var n = this.copy_();
                return (
                  (n.startSet_ = !0),
                  void 0 === t && (t = null),
                  (n.indexStartValue_ = t),
                  null != e
                    ? ((n.startNameSet_ = !0), (n.indexStartName_ = e))
                    : ((n.startNameSet_ = !1), (n.indexStartName_ = "")),
                  n
                );
              }),
              (t.prototype.endAt = function (t, e) {
                var n = this.copy_();
                return (
                  (n.endSet_ = !0),
                  void 0 === t && (t = null),
                  (n.indexEndValue_ = t),
                  void 0 !== e
                    ? ((n.endNameSet_ = !0), (n.indexEndName_ = e))
                    : ((n.endNameSet_ = !1), (n.indexEndName_ = "")),
                  n
                );
              }),
              (t.prototype.orderBy = function (t) {
                var e = this.copy_();
                return (e.index_ = t), e;
              }),
              (t.prototype.getQueryObject = function () {
                var e = t.WIRE_PROTOCOL_CONSTANTS_,
                  n = {};
                if (
                  (this.startSet_ &&
                    ((n[e.INDEX_START_VALUE] = this.indexStartValue_),
                    this.startNameSet_ &&
                      (n[e.INDEX_START_NAME] = this.indexStartName_)),
                  this.endSet_ &&
                    ((n[e.INDEX_END_VALUE] = this.indexEndValue_),
                    this.endNameSet_ &&
                      (n[e.INDEX_END_NAME] = this.indexEndName_)),
                  this.limitSet_)
                ) {
                  n[e.LIMIT] = this.limit_;
                  var r = this.viewFrom_;
                  "" === r &&
                    (r = this.isViewFromLeft()
                      ? e.VIEW_FROM_LEFT
                      : e.VIEW_FROM_RIGHT),
                    (n[e.VIEW_FROM] = r);
                }
                return (
                  this.index_ !== $t && (n[e.INDEX] = this.index_.toString()), n
                );
              }),
              (t.prototype.loadsAllData = function () {
                return !(this.startSet_ || this.endSet_ || this.limitSet_);
              }),
              (t.prototype.isDefault = function () {
                return this.loadsAllData() && this.index_ === $t;
              }),
              (t.prototype.getNodeFilter = function () {
                return this.loadsAllData()
                  ? new Ie(this.getIndex())
                  : this.hasLimit()
                  ? new fn(this)
                  : new hn(this);
              }),
              (t.prototype.toRestQueryStringParameters = function () {
                var e,
                  n = t.REST_QUERY_CONSTANTS_,
                  r = {};
                return (
                  this.isDefault() ||
                    (this.index_ === $t
                      ? (e = n.PRIORITY_INDEX)
                      : this.index_ === ee
                      ? (e = n.VALUE_INDEX)
                      : this.index_ === It
                      ? (e = n.KEY_INDEX)
                      : (l.assert(
                          this.index_ instanceof ne,
                          "Unrecognized index type!"
                        ),
                        (e = this.index_.toString())),
                    (r[n.ORDER_BY] = l.stringify(e)),
                    this.startSet_ &&
                      ((r[n.START_AT] = l.stringify(this.indexStartValue_)),
                      this.startNameSet_ &&
                        (r[n.START_AT] +=
                          "," + l.stringify(this.indexStartName_))),
                    this.endSet_ &&
                      ((r[n.END_AT] = l.stringify(this.indexEndValue_)),
                      this.endNameSet_ &&
                        (r[n.END_AT] += "," + l.stringify(this.indexEndName_))),
                    this.limitSet_ &&
                      (this.isViewFromLeft()
                        ? (r[n.LIMIT_TO_FIRST] = this.limit_)
                        : (r[n.LIMIT_TO_LAST] = this.limit_))),
                  r
                );
              }),
              (t.WIRE_PROTOCOL_CONSTANTS_ = {
                INDEX_START_VALUE: "sp",
                INDEX_START_NAME: "sn",
                INDEX_END_VALUE: "ep",
                INDEX_END_NAME: "en",
                LIMIT: "l",
                VIEW_FROM: "vf",
                VIEW_FROM_LEFT: "l",
                VIEW_FROM_RIGHT: "r",
                INDEX: "i",
              }),
              (t.REST_QUERY_CONSTANTS_ = {
                ORDER_BY: "orderBy",
                PRIORITY_INDEX: "$priority",
                VALUE_INDEX: "$value",
                KEY_INDEX: "$key",
                START_AT: "startAt",
                END_AT: "endAt",
                LIMIT_TO_FIRST: "limitToFirst",
                LIMIT_TO_LAST: "limitToLast",
              }),
              (t.DEFAULT = new t()),
              t
            );
          })(),
          vn = (function (t) {
            function e(e, path) {
              if (!(e instanceof dn))
                throw new Error(
                  "new Reference() no longer supported - use app.database()."
                );
              return t.call(this, e, path, pn.DEFAULT, !1) || this;
            }
            return (
              c.__extends(e, t),
              (e.prototype.getKey = function () {
                return (
                  l.validateArgCount("Reference.key", 0, 0, arguments.length),
                  this.path.isEmpty() ? null : this.path.getBack()
                );
              }),
              (e.prototype.child = function (t) {
                return (
                  l.validateArgCount("Reference.child", 1, 1, arguments.length),
                  "number" == typeof t
                    ? (t = String(t))
                    : t instanceof Z ||
                      (null === this.path.getFront()
                        ? bt("Reference.child", 1, t, !1)
                        : _t("Reference.child", 1, t, !1)),
                  new e(this.repo, this.path.child(t))
                );
              }),
              (e.prototype.getParent = function () {
                l.validateArgCount("Reference.parent", 0, 0, arguments.length);
                var t = this.path.parent();
                return null === t ? null : new e(this.repo, t);
              }),
              (e.prototype.getRoot = function () {
                l.validateArgCount("Reference.root", 0, 0, arguments.length);
                for (var t = this; null !== t.getParent(); ) t = t.getParent();
                return t;
              }),
              (e.prototype.databaseProp = function () {
                return this.repo.database;
              }),
              (e.prototype.set = function (t, e) {
                l.validateArgCount("Reference.set", 1, 2, arguments.length),
                  wt("Reference.set", this.path),
                  ft("Reference.set", 1, t, this.path, !1),
                  l.validateCallback("Reference.set", 2, e, !0);
                var n = new l.Deferred();
                return (
                  this.repo.setWithPriority(
                    this.path,
                    t,
                    null,
                    n.wrapCallback(e)
                  ),
                  n.promise
                );
              }),
              (e.prototype.update = function (t, e) {
                if (
                  (l.validateArgCount(
                    "Reference.update",
                    1,
                    2,
                    arguments.length
                  ),
                  wt("Reference.update", this.path),
                  Array.isArray(t))
                ) {
                  for (var n = {}, i = 0; i < t.length; ++i) n["" + i] = t[i];
                  (t = n),
                    M(
                      "Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
                    );
                }
                vt("Reference.update", 1, t, this.path, !1),
                  l.validateCallback("Reference.update", 2, e, !0);
                var r = new l.Deferred();
                return (
                  this.repo.update(this.path, t, r.wrapCallback(e)), r.promise
                );
              }),
              (e.prototype.setWithPriority = function (t, e, n) {
                if (
                  (l.validateArgCount(
                    "Reference.setWithPriority",
                    2,
                    3,
                    arguments.length
                  ),
                  wt("Reference.setWithPriority", this.path),
                  ft("Reference.setWithPriority", 1, t, this.path, !1),
                  mt("Reference.setWithPriority", 2, e, !1),
                  l.validateCallback("Reference.setWithPriority", 3, n, !0),
                  ".length" === this.getKey() || ".keys" === this.getKey())
                )
                  throw (
                    "Reference.setWithPriority failed: " +
                    this.getKey() +
                    " is a read-only object."
                  );
                var r = new l.Deferred();
                return (
                  this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)),
                  r.promise
                );
              }),
              (e.prototype.remove = function (t) {
                return (
                  l.validateArgCount(
                    "Reference.remove",
                    0,
                    1,
                    arguments.length
                  ),
                  wt("Reference.remove", this.path),
                  l.validateCallback("Reference.remove", 1, t, !0),
                  this.set(null, t)
                );
              }),
              (e.prototype.transaction = function (t, e, n) {
                if (
                  (l.validateArgCount(
                    "Reference.transaction",
                    1,
                    3,
                    arguments.length
                  ),
                  wt("Reference.transaction", this.path),
                  l.validateCallback("Reference.transaction", 1, t, !1),
                  l.validateCallback("Reference.transaction", 2, e, !0),
                  Et("Reference.transaction", 3, n, !0),
                  ".length" === this.getKey() || ".keys" === this.getKey())
                )
                  throw (
                    "Reference.transaction failed: " +
                    this.getKey() +
                    " is a read-only object."
                  );
                void 0 === n && (n = !0);
                var r = new l.Deferred();
                "function" == typeof e && r.promise.catch(function () {});
                var o = function (t, n, o) {
                  t ? r.reject(t) : r.resolve(new xt(n, o)),
                    "function" == typeof e && e(t, n, o);
                };
                return (
                  this.repo.startTransaction(this.path, t, o, n), r.promise
                );
              }),
              (e.prototype.setPriority = function (t, e) {
                l.validateArgCount(
                  "Reference.setPriority",
                  1,
                  2,
                  arguments.length
                ),
                  wt("Reference.setPriority", this.path),
                  mt("Reference.setPriority", 1, t, !1),
                  l.validateCallback("Reference.setPriority", 2, e, !0);
                var n = new l.Deferred();
                return (
                  this.repo.setWithPriority(
                    this.path.child(".priority"),
                    t,
                    null,
                    n.wrapCallback(e)
                  ),
                  n.promise
                );
              }),
              (e.prototype.push = function (t, e) {
                l.validateArgCount("Reference.push", 0, 2, arguments.length),
                  wt("Reference.push", this.path),
                  ft("Reference.push", 1, t, this.path, !0),
                  l.validateCallback("Reference.push", 2, e, !0);
                var n,
                  r = this.repo.serverTime(),
                  o = At(r),
                  c = this.child(o),
                  d = this.child(o);
                return (
                  (n =
                    null != t
                      ? c.set(t, e).then(function () {
                          return d;
                        })
                      : Promise.resolve(d)),
                  (c.then = n.then.bind(n)),
                  (c.catch = n.then.bind(n, void 0)),
                  "function" == typeof e && n.catch(function () {}),
                  c
                );
              }),
              (e.prototype.onDisconnect = function () {
                return (
                  wt("Reference.onDisconnect", this.path),
                  new Tt(this.repo, this.path)
                );
              }),
              Object.defineProperty(e.prototype, "database", {
                get: function () {
                  return this.databaseProp();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "key", {
                get: function () {
                  return this.getKey();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "parent", {
                get: function () {
                  return this.getParent();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "root", {
                get: function () {
                  return this.getRoot();
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })(ue);
        (ue.__referenceConstructor = vn), (je.__referenceConstructor = vn);
        var mn,
          yn = function () {
            (this.children = {}), (this.childCount = 0), (this.value = null);
          },
          gn = (function () {
            function t(t, e, n) {
              void 0 === t && (t = ""),
                void 0 === e && (e = null),
                void 0 === n && (n = new yn()),
                (this.name_ = t),
                (this.parent_ = e),
                (this.node_ = n);
            }
            return (
              (t.prototype.subTree = function (e) {
                for (
                  var path = e instanceof Z ? e : new Z(e),
                    n = this,
                    r = path.getFront();
                  null !== r;

                ) {
                  (n = new t(r, n, l.safeGet(n.node_.children, r) || new yn())),
                    (r = (path = path.popFront()).getFront());
                }
                return n;
              }),
              (t.prototype.getValue = function () {
                return this.node_.value;
              }),
              (t.prototype.setValue = function (t) {
                l.assert(void 0 !== t, "Cannot set value to undefined"),
                  (this.node_.value = t),
                  this.updateParents_();
              }),
              (t.prototype.clear = function () {
                (this.node_.value = null),
                  (this.node_.children = {}),
                  (this.node_.childCount = 0),
                  this.updateParents_();
              }),
              (t.prototype.hasChildren = function () {
                return this.node_.childCount > 0;
              }),
              (t.prototype.isEmpty = function () {
                return null === this.getValue() && !this.hasChildren();
              }),
              (t.prototype.forEachChild = function (e) {
                var n = this;
                W(this.node_.children, function (r, o) {
                  e(new t(r, n, o));
                });
              }),
              (t.prototype.forEachDescendant = function (t, e, n) {
                e && !n && t(this),
                  this.forEachChild(function (e) {
                    e.forEachDescendant(t, !0, n);
                  }),
                  e && n && t(this);
              }),
              (t.prototype.forEachAncestor = function (t, e) {
                for (var n = e ? this : this.parent(); null !== n; ) {
                  if (t(n)) return !0;
                  n = n.parent();
                }
                return !1;
              }),
              (t.prototype.forEachImmediateDescendantWithValue = function (t) {
                this.forEachChild(function (e) {
                  null !== e.getValue()
                    ? t(e)
                    : e.forEachImmediateDescendantWithValue(t);
                });
              }),
              (t.prototype.path = function () {
                return new Z(
                  null === this.parent_
                    ? this.name_
                    : this.parent_.path() + "/" + this.name_
                );
              }),
              (t.prototype.name = function () {
                return this.name_;
              }),
              (t.prototype.parent = function () {
                return this.parent_;
              }),
              (t.prototype.updateParents_ = function () {
                null !== this.parent_ &&
                  this.parent_.updateChild_(this.name_, this);
              }),
              (t.prototype.updateChild_ = function (t, e) {
                var n = e.isEmpty(),
                  r = l.contains(this.node_.children, t);
                n && r
                  ? (delete this.node_.children[t],
                    this.node_.childCount--,
                    this.updateParents_())
                  : n ||
                    r ||
                    ((this.node_.children[t] = e.node_),
                    this.node_.childCount++,
                    this.updateParents_());
              }),
              t
            );
          })();
        !(function (t) {
          (t[(t.RUN = 0)] = "RUN"),
            (t[(t.SENT = 1)] = "SENT"),
            (t[(t.COMPLETED = 2)] = "COMPLETED"),
            (t[(t.SENT_NEEDS_ABORT = 3)] = "SENT_NEEDS_ABORT"),
            (t[(t.NEEDS_ABORT = 4)] = "NEEDS_ABORT");
        })(mn || (mn = {})),
          (dn.MAX_TRANSACTION_RETRIES_ = 25),
          (dn.prototype.transactionsInit_ = function () {
            this.transactionQueueTree_ = new gn();
          }),
          (dn.prototype.startTransaction = function (path, t, e, n) {
            this.log_("transaction on " + path);
            var r = function () {},
              o = new vn(this, path);
            o.on("value", r);
            var c = {
                path: path,
                update: t,
                onComplete: e,
                status: null,
                order: T(),
                applyLocally: n,
                retryCount: 0,
                unwatcher: function () {
                  o.off("value", r);
                },
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null,
              },
              d = this.getLatestState_(path);
            c.currentInputSnapshot = d;
            var h = c.update(d.val());
            if (void 0 === h) {
              if (
                (c.unwatcher(),
                (c.currentOutputSnapshotRaw = null),
                (c.currentOutputSnapshotResolved = null),
                c.onComplete)
              ) {
                var f = new re(
                  c.currentInputSnapshot,
                  new vn(this, c.path),
                  $t
                );
                c.onComplete(null, !1, f);
              }
            } else {
              pt("transaction failed: Data returned ", h, c.path),
                (c.status = mn.RUN);
              var v = this.transactionQueueTree_.subTree(path),
                m = v.getValue() || [];
              m.push(c), v.setValue(m);
              var y = void 0;
              if (
                "object" == typeof h &&
                null !== h &&
                l.contains(h, ".priority")
              )
                (y = l.safeGet(h, ".priority")),
                  l.assert(
                    ht(y),
                    "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
                  );
              else
                y = (
                  this.serverSyncTree_.calcCompleteEventCache(path) ||
                  Kt.EMPTY_NODE
                )
                  .getPriority()
                  .val();
              y = y;
              var _ = this.generateServerValues(),
                w = Jt(h, y),
                C = ve(w, d, _);
              (c.currentOutputSnapshotRaw = w),
                (c.currentOutputSnapshotResolved = C),
                (c.currentWriteId = this.getNextWriteId_());
              var E = this.serverSyncTree_.applyUserOverwrite(
                path,
                C,
                c.currentWriteId,
                c.applyLocally
              );
              this.eventQueue_.raiseEventsForChangedPath(path, E),
                this.sendReadyTransactions_();
            }
          }),
          (dn.prototype.getLatestState_ = function (path, t) {
            return (
              this.serverSyncTree_.calcCompleteEventCache(path, t) ||
              Kt.EMPTY_NODE
            );
          }),
          (dn.prototype.sendReadyTransactions_ = function (t) {
            var e = this;
            if (
              (void 0 === t && (t = this.transactionQueueTree_),
              t || this.pruneCompletedTransactionsBelowNode_(t),
              null !== t.getValue())
            ) {
              var n = this.buildTransactionQueue_(t);
              l.assert(n.length > 0, "Sending zero length transaction queue"),
                n.every(function (t) {
                  return t.status === mn.RUN;
                }) && this.sendTransactionQueue_(t.path(), n);
            } else
              t.hasChildren() &&
                t.forEachChild(function (t) {
                  e.sendReadyTransactions_(t);
                });
          }),
          (dn.prototype.sendTransactionQueue_ = function (path, t) {
            for (
              var e = this,
                n = t.map(function (t) {
                  return t.currentWriteId;
                }),
                r = this.getLatestState_(path, n),
                o = r,
                c = r.hash(),
                i = 0;
              i < t.length;
              i++
            ) {
              var d = t[i];
              l.assert(
                d.status === mn.RUN,
                "tryToSendTransactionQueue_: items in queue should all be run."
              ),
                (d.status = mn.SENT),
                d.retryCount++;
              var h = Z.relativePath(path, d.path);
              o = o.updateChild(h, d.currentOutputSnapshotRaw);
            }
            var f = o.val(!0),
              v = path;
            this.server_.put(
              v.toString(),
              f,
              function (n) {
                e.log_("transaction put response", {
                  path: v.toString(),
                  status: n,
                });
                var r = [];
                if ("ok" === n) {
                  for (var o = [], i = 0; i < t.length; i++) {
                    if (
                      ((t[i].status = mn.COMPLETED),
                      (r = r.concat(
                        e.serverSyncTree_.ackUserWrite(t[i].currentWriteId)
                      )),
                      t[i].onComplete)
                    ) {
                      var c = t[i].currentOutputSnapshotResolved,
                        l = new vn(e, t[i].path),
                        d = new re(c, l, $t);
                      o.push(t[i].onComplete.bind(null, null, !0, d));
                    }
                    t[i].unwatcher();
                  }
                  e.pruneCompletedTransactionsBelowNode_(
                    e.transactionQueueTree_.subTree(path)
                  ),
                    e.sendReadyTransactions_(),
                    e.eventQueue_.raiseEventsForChangedPath(path, r);
                  for (i = 0; i < o.length; i++) Y(o[i]);
                } else {
                  if ("datastale" === n)
                    for (i = 0; i < t.length; i++)
                      t[i].status === mn.SENT_NEEDS_ABORT
                        ? (t[i].status = mn.NEEDS_ABORT)
                        : (t[i].status = mn.RUN);
                  else {
                    M("transaction at " + v.toString() + " failed: " + n);
                    for (i = 0; i < t.length; i++)
                      (t[i].status = mn.NEEDS_ABORT), (t[i].abortReason = n);
                  }
                  e.rerunTransactions_(path);
                }
              },
              c
            );
          }),
          (dn.prototype.rerunTransactions_ = function (t) {
            var e = this.getAncestorTransactionNode_(t),
              path = e.path(),
              n = this.buildTransactionQueue_(e);
            return this.rerunTransactionQueue_(n, path), path;
          }),
          (dn.prototype.rerunTransactionQueue_ = function (t, path) {
            if (0 !== t.length) {
              for (
                var e,
                  n = [],
                  r = [],
                  o = t
                    .filter(function (q) {
                      return q.status === mn.RUN;
                    })
                    .map(function (q) {
                      return q.currentWriteId;
                    }),
                  i = 0;
                i < t.length;
                i++
              ) {
                var c = t[i],
                  d = Z.relativePath(path, c.path),
                  h = !1,
                  f = void 0;
                if (
                  (l.assert(
                    null !== d,
                    "rerunTransactionsUnderNode_: relativePath should not be null."
                  ),
                  c.status === mn.NEEDS_ABORT)
                )
                  (h = !0),
                    (f = c.abortReason),
                    (r = r.concat(
                      this.serverSyncTree_.ackUserWrite(c.currentWriteId, !0)
                    ));
                else if (c.status === mn.RUN)
                  if (c.retryCount >= dn.MAX_TRANSACTION_RETRIES_)
                    (h = !0),
                      (f = "maxretry"),
                      (r = r.concat(
                        this.serverSyncTree_.ackUserWrite(c.currentWriteId, !0)
                      ));
                  else {
                    var v = this.getLatestState_(c.path, o);
                    c.currentInputSnapshot = v;
                    var m = t[i].update(v.val());
                    if (void 0 !== m) {
                      pt("transaction failed: Data returned ", m, c.path);
                      var y = Jt(m);
                      ("object" == typeof m &&
                        null != m &&
                        l.contains(m, ".priority")) ||
                        (y = y.updatePriority(v.getPriority()));
                      var _ = c.currentWriteId,
                        w = this.generateServerValues(),
                        C = ve(y, v, w);
                      (c.currentOutputSnapshotRaw = y),
                        (c.currentOutputSnapshotResolved = C),
                        (c.currentWriteId = this.getNextWriteId_()),
                        o.splice(o.indexOf(_), 1),
                        (r = (r = r.concat(
                          this.serverSyncTree_.applyUserOverwrite(
                            c.path,
                            C,
                            c.currentWriteId,
                            c.applyLocally
                          )
                        )).concat(this.serverSyncTree_.ackUserWrite(_, !0)));
                    } else
                      (h = !0),
                        (f = "nodata"),
                        (r = r.concat(
                          this.serverSyncTree_.ackUserWrite(
                            c.currentWriteId,
                            !0
                          )
                        ));
                  }
                if (
                  (this.eventQueue_.raiseEventsForChangedPath(path, r),
                  (r = []),
                  h &&
                    ((t[i].status = mn.COMPLETED),
                    (e = t[i].unwatcher),
                    setTimeout(e, Math.floor(0)),
                    t[i].onComplete))
                )
                  if ("nodata" === f) {
                    var E = new vn(this, t[i].path),
                      T = t[i].currentInputSnapshot,
                      x = new re(T, E, $t);
                    n.push(t[i].onComplete.bind(null, null, !1, x));
                  } else
                    n.push(t[i].onComplete.bind(null, new Error(f), !1, null));
              }
              this.pruneCompletedTransactionsBelowNode_(
                this.transactionQueueTree_
              );
              for (i = 0; i < n.length; i++) Y(n[i]);
              this.sendReadyTransactions_();
            }
          }),
          (dn.prototype.getAncestorTransactionNode_ = function (path) {
            var t,
              e = this.transactionQueueTree_;
            for (t = path.getFront(); null !== t && null === e.getValue(); )
              (e = e.subTree(t)), (t = (path = path.popFront()).getFront());
            return e;
          }),
          (dn.prototype.buildTransactionQueue_ = function (t) {
            var e = [];
            return (
              this.aggregateTransactionQueuesForNode_(t, e),
              e.sort(function (a, b) {
                return a.order - b.order;
              }),
              e
            );
          }),
          (dn.prototype.aggregateTransactionQueuesForNode_ = function (t, e) {
            var n = this,
              r = t.getValue();
            if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i]);
            t.forEachChild(function (t) {
              n.aggregateTransactionQueuesForNode_(t, e);
            });
          }),
          (dn.prototype.pruneCompletedTransactionsBelowNode_ = function (t) {
            var e = this,
              n = t.getValue();
            if (n) {
              for (var r = 0, o = 0; o < n.length; o++)
                n[o].status !== mn.COMPLETED && ((n[r] = n[o]), r++);
              (n.length = r), t.setValue(n.length > 0 ? n : null);
            }
            t.forEachChild(function (t) {
              e.pruneCompletedTransactionsBelowNode_(t);
            });
          }),
          (dn.prototype.abortTransactions_ = function (path) {
            var t = this,
              e = this.getAncestorTransactionNode_(path).path(),
              n = this.transactionQueueTree_.subTree(path);
            return (
              n.forEachAncestor(function (e) {
                t.abortTransactionsOnNode_(e);
              }),
              this.abortTransactionsOnNode_(n),
              n.forEachDescendant(function (e) {
                t.abortTransactionsOnNode_(e);
              }),
              e
            );
          }),
          (dn.prototype.abortTransactionsOnNode_ = function (t) {
            var e = t.getValue();
            if (null !== e) {
              for (var n = [], r = [], o = -1, i = 0; i < e.length; i++)
                if (e[i].status === mn.SENT_NEEDS_ABORT);
                else if (e[i].status === mn.SENT)
                  l.assert(
                    o === i - 1,
                    "All SENT items should be at beginning of queue."
                  ),
                    (o = i),
                    (e[i].status = mn.SENT_NEEDS_ABORT),
                    (e[i].abortReason = "set");
                else if (
                  (l.assert(
                    e[i].status === mn.RUN,
                    "Unexpected transaction status in abort"
                  ),
                  e[i].unwatcher(),
                  (r = r.concat(
                    this.serverSyncTree_.ackUserWrite(e[i].currentWriteId, !0)
                  )),
                  e[i].onComplete)
                ) {
                  n.push(
                    e[i].onComplete.bind(null, new Error("set"), !1, null)
                  );
                }
              -1 === o ? t.setValue(null) : (e.length = o + 1),
                this.eventQueue_.raiseEventsForChangedPath(t.path(), r);
              for (i = 0; i < n.length; i++) Y(n[i]);
            }
          });
        var _n,
          bn = (function () {
            function t(t, e) {
              var n = this;
              (this.app_ = t),
                (this.authProvider_ = e),
                (this.auth_ = null),
                (this.auth_ = e.getImmediate({ optional: !0 })),
                this.auth_ ||
                  e.get().then(function (t) {
                    return (n.auth_ = t);
                  });
            }
            return (
              (t.prototype.getToken = function (t) {
                return this.auth_
                  ? this.auth_.getToken(t).catch(function (t) {
                      return t && "auth/token-not-initialized" === t.code
                        ? (I(
                            "Got auth/token-not-initialized error.  Treating as null token."
                          ),
                          null)
                        : Promise.reject(t);
                    })
                  : Promise.resolve(null);
              }),
              (t.prototype.addTokenChangeListener = function (t) {
                this.auth_
                  ? this.auth_.addAuthTokenListener(t)
                  : (setTimeout(function () {
                      return t(null);
                    }, 0),
                    this.authProvider_.get().then(function (e) {
                      return e.addAuthTokenListener(t);
                    }));
              }),
              (t.prototype.removeTokenChangeListener = function (t) {
                this.authProvider_.get().then(function (e) {
                  return e.removeAuthTokenListener(t);
                });
              }),
              (t.prototype.notifyForInvalidToken = function () {
                var t =
                  'Provided authentication credentials for the app named "' +
                  this.app_.name +
                  '" are invalid. This usually indicates your app was not initialized correctly. ';
                "credential" in this.app_.options
                  ? (t +=
                      'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : "serviceAccount" in this.app_.options
                  ? (t +=
                      'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : (t +=
                      'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                  M(t);
              }),
              t
            );
          })(),
          wn = (function () {
            function t() {}
            return (
              (t.prototype.getToken = function (e) {
                return Promise.resolve({ accessToken: t.EMULATOR_AUTH_TOKEN });
              }),
              (t.prototype.addTokenChangeListener = function (e) {
                e(t.EMULATOR_AUTH_TOKEN);
              }),
              (t.prototype.removeTokenChangeListener = function (t) {}),
              (t.prototype.notifyForInvalidToken = function () {}),
              (t.EMULATOR_AUTH_TOKEN = "owner"),
              t
            );
          })(),
          Cn = (function () {
            function t() {
              (this.repos_ = {}), (this.useRestClient_ = !1);
            }
            return (
              (t.getInstance = function () {
                return _n || (_n = new t()), _n;
              }),
              (t.prototype.interrupt = function () {
                var t, e, n, r;
                try {
                  for (
                    var o = c.__values(Object.keys(this.repos_)), l = o.next();
                    !l.done;
                    l = o.next()
                  ) {
                    var d = l.value;
                    try {
                      for (
                        var h =
                            ((n = void 0),
                            c.__values(Object.keys(this.repos_[d]))),
                          f = h.next();
                        !f.done;
                        f = h.next()
                      ) {
                        var v = f.value;
                        this.repos_[d][v].interrupt();
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        f && !f.done && (r = h.return) && r.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    l && !l.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (t.prototype.resume = function () {
                var t, e, n, r;
                try {
                  for (
                    var o = c.__values(Object.keys(this.repos_)), l = o.next();
                    !l.done;
                    l = o.next()
                  ) {
                    var d = l.value;
                    try {
                      for (
                        var h =
                            ((n = void 0),
                            c.__values(Object.keys(this.repos_[d]))),
                          f = h.next();
                        !f.done;
                        f = h.next()
                      ) {
                        var v = f.value;
                        this.repos_[d][v].resume();
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        f && !f.done && (r = h.return) && r.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    l && !l.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (t.prototype.databaseFromApp = function (t, e, n, o) {
                var c = n || t.options.databaseURL;
                void 0 === c &&
                  (t.options.projectId ||
                    P(
                      "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
                    ),
                  I("Using default host for project ", t.options.projectId),
                  (c = t.options.projectId + "-default-rtdb.firebaseio.com"));
                var l,
                  d = ot(c, o),
                  h = d.repoInfo,
                  f = void 0;
                void 0 !== r && (f = r.env.FIREBASE_DATABASE_EMULATOR_HOST),
                  f
                    ? ((l = !0),
                      (c = "http://" + f + "?ns=" + h.namespace),
                      (h = (d = ot(c, o)).repoInfo))
                    : (l = !d.repoInfo.secure);
                var v = o && l ? new wn() : new bn(t, e);
                return (
                  Ct("Invalid Firebase Database URL", 1, d),
                  d.path.isEmpty() ||
                    P(
                      "Database URL must point to the root of a Firebase Database (not including a child path)."
                    ),
                  this.createRepo(h, t, v).database
                );
              }),
              (t.prototype.deleteRepo = function (t) {
                var e = l.safeGet(this.repos_, t.app.name);
                (e && l.safeGet(e, t.repoInfo_.toURLString()) === t) ||
                  P(
                    "Database " +
                      t.app.name +
                      "(" +
                      t.repoInfo_ +
                      ") has already been deleted."
                  ),
                  t.interrupt(),
                  delete e[t.repoInfo_.toURLString()];
              }),
              (t.prototype.createRepo = function (t, e, n) {
                var r = l.safeGet(this.repos_, e.name);
                r || ((r = {}), (this.repos_[e.name] = r));
                var o = l.safeGet(r, t.toURLString());
                return (
                  o &&
                    P(
                      "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
                    ),
                  (o = new dn(t, this.useRestClient_, e, n)),
                  (r[t.toURLString()] = o),
                  o
                );
              }),
              (t.prototype.forceRestClient = function (t) {
                this.useRestClient_ = t;
              }),
              t
            );
          })(),
          En = (function () {
            function t(t) {
              (this.repo_ = t),
                t instanceof dn ||
                  P(
                    "Don't call new Database() directly - please use firebase.database()."
                  ),
                (this.root_ = new vn(t, Z.Empty)),
                (this.INTERNAL = new Tn(this));
            }
            return (
              Object.defineProperty(t.prototype, "app", {
                get: function () {
                  return this.repo_.app;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.ref = function (path) {
                return (
                  this.checkDeleted_("ref"),
                  l.validateArgCount("database.ref", 0, 1, arguments.length),
                  path instanceof vn
                    ? this.refFromURL(path.toString())
                    : void 0 !== path
                    ? this.root_.child(path)
                    : this.root_
                );
              }),
              (t.prototype.refFromURL = function (t) {
                var e = "database.refFromURL";
                this.checkDeleted_(e),
                  l.validateArgCount(e, 1, 1, arguments.length);
                var n = ot(t, this.repo_.repoInfo_.nodeAdmin);
                Ct(e, 1, n);
                var r = n.repoInfo;
                return (
                  r.host !== this.repo_.repoInfo_.host &&
                    P(
                      e +
                        ": Host name does not match the current database: (found " +
                        r.host +
                        " but expected " +
                        this.repo_.repoInfo_.host +
                        ")"
                    ),
                  this.ref(n.path.toString())
                );
              }),
              (t.prototype.checkDeleted_ = function (t) {
                null === this.repo_ &&
                  P("Cannot call " + t + " on a deleted database.");
              }),
              (t.prototype.goOffline = function () {
                l.validateArgCount(
                  "database.goOffline",
                  0,
                  0,
                  arguments.length
                ),
                  this.checkDeleted_("goOffline"),
                  this.repo_.interrupt();
              }),
              (t.prototype.goOnline = function () {
                l.validateArgCount("database.goOnline", 0, 0, arguments.length),
                  this.checkDeleted_("goOnline"),
                  this.repo_.resume();
              }),
              (t.ServerValue = {
                TIMESTAMP: { ".sv": "timestamp" },
                increment: function (t) {
                  return { ".sv": { increment: t } };
                },
              }),
              t
            );
          })(),
          Tn = (function () {
            function t(t) {
              this.database = t;
            }
            return (
              (t.prototype.delete = function () {
                return c.__awaiter(this, void 0, void 0, function () {
                  return c.__generator(this, function (t) {
                    return (
                      this.database.checkDeleted_("delete"),
                      Cn.getInstance().deleteRepo(this.database.repo_),
                      (this.database.repo_ = null),
                      (this.database.root_ = null),
                      (this.database.INTERNAL = null),
                      (this.database = null),
                      [2]
                    );
                  });
                });
              }),
              t
            );
          })(),
          xn = Object.freeze({
            __proto__: null,
            forceLongPolling: function () {
              on.forceDisallow(), tn.forceAllow();
            },
            forceWebSockets: function () {
              tn.forceDisallow();
            },
            isWebSocketsAvailable: function () {
              return on.isAvailable();
            },
            setSecurityDebugCallback: function (t, e) {
              t.repo.persistentConnection_.securityDebugCallback_ = e;
            },
            stats: function (t, e) {
              t.repo.stats(e);
            },
            statsIncrementCounter: function (t, e) {
              t.repo.statsIncrementCounter(e);
            },
            dataUpdateCount: function (t) {
              return t.repo.dataUpdateCount;
            },
            interceptServerData: function (t, e) {
              return t.repo.interceptServerData_(e);
            },
          }),
          An = cn;
        (cn.prototype.simpleListen = function (t, e) {
          this.sendRequest("q", { p: t }, e);
        }),
          (cn.prototype.echo = function (data, t) {
            this.sendRequest("echo", { d: data }, t);
          });
        var Sn = sn,
          Nn = X,
          On = Object.freeze({
            __proto__: null,
            DataConnection: An,
            RealTimeConnection: Sn,
            hijackHash: function (t) {
              var e = cn.prototype.put;
              return (
                (cn.prototype.put = function (n, data, r, o) {
                  void 0 !== o && (o = t()), e.call(this, n, data, r, o);
                }),
                function () {
                  cn.prototype.put = e;
                }
              );
            },
            ConnectionTarget: Nn,
            queryIdentifier: function (t) {
              return t.queryIdentifier();
            },
            forceRestClient: function (t) {
              Cn.getInstance().forceRestClient(t);
            },
          }),
          In = En.ServerValue;
        function Dn(e) {
          !(function (t) {
            nn = t;
          })(e.SDK_VERSION);
          var n = e.INTERNAL.registerComponent(
            new component.Component(
              "database",
              function (t, e) {
                var n = t.getProvider("app").getImmediate(),
                  r = t.getProvider("auth-internal");
                return Cn.getInstance().databaseFromApp(n, r, e);
              },
              "PUBLIC"
            )
              .setServiceProps({
                Reference: vn,
                Query: ue,
                Database: En,
                DataSnapshot: re,
                enableLogging: O,
                INTERNAL: xn,
                ServerValue: In,
                TEST_ACCESS: On,
              })
              .setMultipleInstances(!0)
          );
          e.registerVersion("@firebase/database", "0.6.13"),
            l.isNodeSdk() && (t.exports = n);
        }
        Dn(v.default),
          (e.DataSnapshot = re),
          (e.Database = En),
          (e.OnDisconnect = Tt),
          (e.Query = ue),
          (e.Reference = vn),
          (e.ServerValue = In),
          (e.enableLogging = O),
          (e.registerDatabase = Dn);
      }.call(this, n(150)));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(13);
      function o(t, e) {
        return e
          ? new r.a(function (n) {
              return e.schedule(c, 0, { error: t, subscriber: n });
            })
          : new r.a(function (e) {
              return e.error(t);
            });
      }
      function c(t) {
        var e = t.error;
        t.subscriber.error(e);
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return m;
      });
      var r = n(13),
        o = n(126),
        c = n(37),
        l = n(36);
      var d = n(58);
      var h = n(123),
        f = n(122);
      function v(input, t) {
        if (null != input) {
          if (
            (function (input) {
              return input && "function" == typeof input[l.a];
            })(input)
          )
            return (function (input, t) {
              return new r.a(function (e) {
                var sub = new c.a();
                return (
                  sub.add(
                    t.schedule(function () {
                      var n = input[l.a]();
                      sub.add(
                        n.subscribe({
                          next: function (n) {
                            sub.add(
                              t.schedule(function () {
                                return e.next(n);
                              })
                            );
                          },
                          error: function (n) {
                            sub.add(
                              t.schedule(function () {
                                return e.error(n);
                              })
                            );
                          },
                          complete: function () {
                            sub.add(
                              t.schedule(function () {
                                return e.complete();
                              })
                            );
                          },
                        })
                      );
                    })
                  ),
                  sub
                );
              });
            })(input, t);
          if (Object(h.a)(input))
            return (function (input, t) {
              return new r.a(function (e) {
                var sub = new c.a();
                return (
                  sub.add(
                    t.schedule(function () {
                      return input.then(
                        function (n) {
                          sub.add(
                            t.schedule(function () {
                              e.next(n),
                                sub.add(
                                  t.schedule(function () {
                                    return e.complete();
                                  })
                                );
                            })
                          );
                        },
                        function (n) {
                          sub.add(
                            t.schedule(function () {
                              return e.error(n);
                            })
                          );
                        }
                      );
                    })
                  ),
                  sub
                );
              });
            })(input, t);
          if (Object(f.a)(input))
            return (function (input, t) {
              return new r.a(function (e) {
                var sub = new c.a(),
                  i = 0;
                return (
                  sub.add(
                    t.schedule(function () {
                      i !== input.length
                        ? (e.next(input[i++]),
                          e.closed || sub.add(this.schedule()))
                        : e.complete();
                    })
                  ),
                  sub
                );
              });
            })(input, t);
          if (
            (function (input) {
              return input && "function" == typeof input[d.a];
            })(input) ||
            "string" == typeof input
          )
            return (function (input, t) {
              if (!input) throw new Error("Iterable cannot be null");
              return new r.a(function (e) {
                var n,
                  sub = new c.a();
                return (
                  sub.add(function () {
                    n && "function" == typeof n.return && n.return();
                  }),
                  sub.add(
                    t.schedule(function () {
                      (n = input[d.a]()),
                        sub.add(
                          t.schedule(function () {
                            if (!e.closed) {
                              var t, r;
                              try {
                                var o = n.next();
                                (t = o.value), (r = o.done);
                              } catch (t) {
                                return void e.error(t);
                              }
                              r ? e.complete() : (e.next(t), this.schedule());
                            }
                          })
                        );
                    })
                  ),
                  sub
                );
              });
            })(input, t);
        }
        throw new TypeError(
          ((null !== input && typeof input) || input) + " is not observable"
        );
      }
      function m(input, t) {
        return t
          ? v(input, t)
          : input instanceof r.a
          ? input
          : new r.a(Object(o.a)(input));
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      });
      var r = n(12),
        o = n(27),
        c = n(13),
        l = n(126),
        d = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), n;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(), this.unsubscribe();
            }),
            e
          );
        })(o.a),
        h =
          (o.a,
          (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              r.__extends(e, t),
              (e.prototype.notifyNext = function (t) {
                this.destination.next(t);
              }),
              (e.prototype.notifyError = function (t) {
                this.destination.error(t);
              }),
              (e.prototype.notifyComplete = function () {
                this.destination.complete();
              }),
              e
            );
          })(o.a));
      o.a;
      function f(t) {
        return function (source) {
          var e = new v(t),
            n = source.lift(e);
          return (e.caught = n);
        };
      }
      var v = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, source) {
              return source.subscribe(new m(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        m = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.selector = n), (o.caught = r), o;
          }
          return (
            r.__extends(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (e) {
                  return void t.prototype.error.call(this, e);
                }
                this._unsubscribeAndRecycle();
                var r = new d(this);
                this.add(r);
                var o = (function (t, e) {
                  if (!e.closed)
                    return t instanceof c.a
                      ? t.subscribe(e)
                      : Object(l.a)(t)(e);
                })(n, r);
                o !== r && this.add(o);
              }
            }),
            e
          );
        })(h);
    },
  ],
]);
