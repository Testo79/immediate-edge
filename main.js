let ip  ="" ;
let country ="" ;
let aff_sub1 ="" ;
let aff_sub2 ="" ;
let aff_sub3 ="" ;
let aff_sub4 ="" ;
let language  = "" ; 
let brandName  =  "ImmediateEdge" ;
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
   ip = data.ip;
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });
  fetch('https://amos-mamaya.fun/geo')
  .then(response => response.json())
  .then(data => {
    const country_code = data.country_code;
    country  =  country_code ;  
  })
  .catch(error => {
    console.error('Error:', error);
  });

!(function (e) {
  var t = {}
  function n (r) {
    if (t[r]) return t[r].exports
    var i = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t]
            }.bind(null, i)
          )
      return r
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = '/'),
    n((n.s = 2))
})([
  function (e, t, n) {
    var r
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function (t, n) {
      'use strict'
      'object' == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error('jQuery requires a window with a document')
                return n(e)
              })
        : n(t)
    })('undefined' != typeof window ? window : this, function (n, i) {
      'use strict'
      var o = [],
        a = n.document,
        u = Object.getPrototypeOf,
        s = o.slice,
        l = o.concat,
        c = o.push,
        f = o.indexOf,
        d = {},
        p = d.toString,
        h = d.hasOwnProperty,
        m = h.toString,
        g = m.call(Object),
        v = {},
        y = function (e) {
          return 'function' == typeof e && 'number' != typeof e.nodeType
        },
        b = function (e) {
          return null != e && e === e.window
        },
        x = { type: !0, src: !0, nonce: !0, noModule: !0 }
      function A (e, t, n) {
        var r,
          i,
          o = (n = n || a).createElement('script')
        if (((o.text = e), t))
          for (r in x)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i)
        n.head.appendChild(o).parentNode.removeChild(o)
      }
      function w (e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? d[p.call(e)] || 'object'
          : typeof e
      }
      var C = function (e, t) {
          return new C.fn.init(e, t)
        },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      function T (e) {
        var t = !!e && 'length' in e && e.length,
          n = w(e)
        return (
          !y(e) &&
          !b(e) &&
          ('array' === n ||
            0 === t ||
            ('number' == typeof t && t > 0 && t - 1 in e))
        )
      }
      ;(C.fn = C.prototype =
        {
          jquery: '3.4.1',
          constructor: C,
          length: 0,
          toArray: function () {
            return s.call(this)
          },
          get: function (e) {
            return null == e
              ? s.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e]
          },
          pushStack: function (e) {
            var t = C.merge(this.constructor(), e)
            return (t.prevObject = this), t
          },
          each: function (e) {
            return C.each(this, e)
          },
          map: function (e) {
            return this.pushStack(
              C.map(this, function (t, n) {
                return e.call(t, n, t)
              })
            )
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments))
          },
          first: function () {
            return this.eq(0)
          },
          last: function () {
            return this.eq(-1)
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0)
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
          },
          end: function () {
            return this.prevObject || this.constructor()
          },
          push: c,
          sort: o.sort,
          splice: o.splice
        }),
        (C.extend = C.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              u = 1,
              s = arguments.length,
              l = !1
            for (
              'boolean' == typeof a && ((l = a), (a = arguments[u] || {}), u++),
                'object' == typeof a || y(a) || (a = {}),
                u === s && ((a = this), u--);
              u < s;
              u++
            )
              if (null != (e = arguments[u]))
                for (t in e)
                  (r = e[t]),
                    '__proto__' !== t &&
                      a !== r &&
                      (l && r && (C.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || C.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (a[t] = C.extend(l, o, r)))
                        : void 0 !== r && (a[t] = r))
            return a
          }),
        C.extend({
          expando: 'jQuery' + ('3.4.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (e) {
            throw new Error(e)
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n
            return (
              !(!e || '[object Object]' !== p.call(e)) &&
              (!(t = u(e)) ||
                ('function' ==
                  typeof (n = h.call(t, 'constructor') && t.constructor) &&
                  m.call(n) === g))
            )
          },
          isEmptyObject: function (e) {
            var t
            for (t in e) return !1
            return !0
          },
          globalEval: function (e, t) {
            A(e, { nonce: t && t.nonce })
          },
          each: function (e, t) {
            var n,
              r = 0
            if (T(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
            return e
          },
          trim: function (e) {
            return null == e ? '' : (e + '').replace(E, '')
          },
          makeArray: function (e, t) {
            var n = t || []
            return (
              null != e &&
                (T(Object(e))
                  ? C.merge(n, 'string' == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            )
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : f.call(t, e, n)
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r]
            return (e.length = i), e
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) !== a && r.push(e[i])
            return r
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = []
            if (T(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && a.push(i)
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i)
            return l.apply([], a)
          },
          guid: 1,
          support: v
        }),
        'function' == typeof Symbol &&
          (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function (e, t) {
            d['[object ' + t + ']'] = t.toLowerCase()
          }
        )
      var k =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            u,
            s,
            l,
            c,
            f,
            d,
            p,
            h,
            m,
            g,
            v,
            y,
            b,
            x = 'sizzle' + 1 * new Date(),
            A = e.document,
            w = 0,
            C = 0,
            E = se(),
            T = se(),
            k = se(),
            D = se(),
            F = function (e, t) {
              return e === t && (f = !0), 0
            },
            S = {}.hasOwnProperty,
            B = [],
            j = B.pop,
            q = B.push,
            N = B.push,
            L = B.slice,
            P = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
              return -1
            },
            O =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            H = '[\\x20\\t\\r\\n\\f]',
            R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            I =
              '\\[' +
              H +
              '*(' +
              R +
              ')(?:' +
              H +
              '*([*^$|!~]?=)' +
              H +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              R +
              '))|)' +
              H +
              '*\\]',
            M =
              ':(' +
              R +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              I +
              ')*)|.*)\\)|)',
            z = new RegExp(H + '+', 'g'),
            $ = new RegExp(
              '^' + H + '+|((?:^|[^\\\\])(?:\\\\.)*)' + H + '+$',
              'g'
            ),
            W = new RegExp('^' + H + '*,' + H + '*'),
            _ = new RegExp('^' + H + '*([>+~]|' + H + ')' + H + '*'),
            U = new RegExp(H + '|>'),
            V = new RegExp(M),
            Y = new RegExp('^' + R + '$'),
            X = {
              ID: new RegExp('^#(' + R + ')'),
              CLASS: new RegExp('^\\.(' + R + ')'),
              TAG: new RegExp('^(' + R + '|[*])'),
              ATTR: new RegExp('^' + I),
              PSEUDO: new RegExp('^' + M),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  H +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  H +
                  '*(?:([+-]|)' +
                  H +
                  '*(\\d+)|))' +
                  H +
                  '*\\)|)',
                'i'
              ),
              bool: new RegExp('^(?:' + O + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                  H +
                  '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                  H +
                  '*((?:-\\d)?\\d*)' +
                  H +
                  '*\\)|)(?=[^-]|$)',
                'i'
              )
            },
            G = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              '\\\\([\\da-f]{1,6}' + H + '?|(' + H + ')|.)',
              'ig'
            ),
            ne = function (e, t, n) {
              var r = '0x' + t - 65536
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? '\0' === e
                  ? '�'
                  : e.slice(0, -1) +
                    '\\' +
                    e.charCodeAt(e.length - 1).toString(16) +
                    ' '
                : '\\' + e
            },
            oe = function () {
              d()
            },
            ae = xe(
              function (e) {
                return (
                  !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
                )
              },
              { dir: 'parentNode', next: 'legend' }
            )
          try {
            N.apply((B = L.call(A.childNodes)), A.childNodes),
              B[A.childNodes.length].nodeType
          } catch (e) {
            N = {
              apply: B.length
                ? function (e, t) {
                    q.apply(e, L.call(t))
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1
                  }
            }
          }
          function ue (e, t, r, i) {
            var o,
              u,
              l,
              c,
              f,
              h,
              v,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9
            if (
              ((r = r || []),
              'string' != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r
            if (
              !i &&
              ((t ? t.ownerDocument || t : A) !== p && d(t), (t = t || p), m)
            ) {
              if (11 !== w && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === w) {
                    if (!(l = t.getElementById(o))) return r
                    if (l.id === o) return r.push(l), r
                  } else if (
                    y &&
                    (l = y.getElementById(o)) &&
                    b(t, l) &&
                    l.id === o
                  )
                    return r.push(l), r
                } else {
                  if (f[2]) return N.apply(r, t.getElementsByTagName(e)), r
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return N.apply(r, t.getElementsByClassName(o)), r
                }
              if (
                n.qsa &&
                !D[e + ' '] &&
                (!g || !g.test(e)) &&
                (1 !== w || 'object' !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === w && U.test(e))) {
                  for (
                    (c = t.getAttribute('id'))
                      ? (c = c.replace(re, ie))
                      : t.setAttribute('id', (c = x)),
                      u = (h = a(e)).length;
                    u--;

                  )
                    h[u] = '#' + c + ' ' + be(h[u])
                  ;(v = h.join(',')),
                    (y = (ee.test(e) && ve(t.parentNode)) || t)
                }
                try {
                  return N.apply(r, y.querySelectorAll(v)), r
                } catch (t) {
                  D(e, !0)
                } finally {
                  c === x && t.removeAttribute('id')
                }
              }
            }
            return s(e.replace($, '$1'), t, r, i)
          }
          function se () {
            var e = []
            return function t (n, i) {
              return (
                e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
                (t[n + ' '] = i)
              )
            }
          }
          function le (e) {
            return (e[x] = !0), e
          }
          function ce (e) {
            var t = p.createElement('fieldset')
            try {
              return !!e(t)
            } catch (e) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null)
            }
          }
          function fe (e, t) {
            for (var n = e.split('|'), i = n.length; i--; )
              r.attrHandle[n[i]] = t
          }
          function de (e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex
            if (r) return r
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
            return e ? 1 : -1
          }
          function pe (e) {
            return function (t) {
              return 'input' === t.nodeName.toLowerCase() && t.type === e
            }
          }
          function he (e) {
            return function (t) {
              var n = t.nodeName.toLowerCase()
              return ('input' === n || 'button' === n) && t.type === e
            }
          }
          function me (e) {
            return function (t) {
              return 'form' in t
                ? t.parentNode && !1 === t.disabled
                  ? 'label' in t
                    ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : 'label' in t && t.disabled === e
            }
          }
          function ge (e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]))
                })
              )
            })
          }
          function ve (e) {
            return e && void 0 !== e.getElementsByTagName && e
          }
          for (t in ((n = ue.support = {}),
          (o = ue.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement
              return !G.test(t || (n && n.nodeName) || 'HTML')
            }),
          (d = ue.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : A
              return a !== p && 9 === a.nodeType && a.documentElement
                ? ((h = (p = a).documentElement),
                  (m = !o(p)),
                  A !== p &&
                    (i = p.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener('unload', oe, !1)
                      : i.attachEvent && i.attachEvent('onunload', oe)),
                  (n.attributes = ce(function (e) {
                    return (e.className = 'i'), !e.getAttribute('className')
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(p.createComment('')),
                      !e.getElementsByTagName('*').length
                    )
                  })),
                  (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = x),
                      !p.getElementsByName || !p.getElementsByName(x).length
                    )
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne)
                        return function (e) {
                          return e.getAttribute('id') === t
                        }
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n = t.getElementById(e)
                          return n ? [n] : []
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne)
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode('id')
                          return n && n.value === t
                        }
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e)
                          if (o) {
                            if ((n = o.getAttributeNode('id')) && n.value === e)
                              return [o]
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode('id')) &&
                                n.value === e
                              )
                                return [o]
                          }
                          return []
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e)
                        if ('*' === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n)
                          return r
                        }
                        return o
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && m)
                        return t.getElementsByClassName(e)
                    }),
                  (v = []),
                  (g = []),
                  (n.qsa = K.test(p.querySelectorAll)) &&
                    (ce(function (e) {
                      ;(h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          g.push('[*^$]=' + H + '*(?:\'\'|"")'),
                        e.querySelectorAll('[selected]').length ||
                          g.push('\\[' + H + '*(?:value|' + O + ')'),
                        e.querySelectorAll('[id~=' + x + '-]').length ||
                          g.push('~='),
                        e.querySelectorAll(':checked').length ||
                          g.push(':checked'),
                        e.querySelectorAll('a#' + x + '+*').length ||
                          g.push('.#.+[+~]')
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                      var t = p.createElement('input')
                      t.setAttribute('type', 'hidden'),
                        e.appendChild(t).setAttribute('name', 'D'),
                        e.querySelectorAll('[name=d]').length &&
                          g.push('name' + H + '*[*^$|!~]?='),
                        2 !== e.querySelectorAll(':enabled').length &&
                          g.push(':enabled', ':disabled'),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(':disabled').length &&
                          g.push(':enabled', ':disabled'),
                        e.querySelectorAll('*,:x'),
                        g.push(',.*:')
                    })),
                  (n.matchesSelector = K.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      ;(n.disconnectedMatch = y.call(e, '*')),
                        y.call(e, "[s!='']:x"),
                        v.push('!=', M)
                    }),
                  (g = g.length && new RegExp(g.join('|'))),
                  (v = v.length && new RegExp(v.join('|'))),
                  (t = K.test(h.compareDocumentPosition)),
                  (b =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          )
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0
                          return !1
                        }),
                  (F = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === p || (e.ownerDocument === A && b(A, e))
                              ? -1
                              : t === p || (t.ownerDocument === A && b(A, t))
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        )
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          u = [t]
                        if (!i || !o)
                          return e === p
                            ? -1
                            : t === p
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0
                        if (i === o) return de(e, t)
                        for (n = e; (n = n.parentNode); ) a.unshift(n)
                        for (n = t; (n = n.parentNode); ) u.unshift(n)
                        for (; a[r] === u[r]; ) r++
                        return r
                          ? de(a[r], u[r])
                          : a[r] === A
                          ? -1
                          : u[r] === A
                          ? 1
                          : 0
                      }),
                  p)
                : p
            }),
          (ue.matches = function (e, t) {
            return ue(e, null, null, t)
          }),
          (ue.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== p && d(e),
              n.matchesSelector &&
                m &&
                !D[t + ' '] &&
                (!v || !v.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var r = y.call(e, t)
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r
              } catch (e) {
                D(t, !0)
              }
            return ue(t, p, null, [e]).length > 0
          }),
          (ue.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && d(e), b(e, t)
          }),
          (ue.attr = function (e, t) {
            ;(e.ownerDocument || e) !== p && d(e)
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && S.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !m)
                  : void 0
            return void 0 !== o
              ? o
              : n.attributes || !m
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null
          }),
          (ue.escape = function (e) {
            return (e + '').replace(re, ie)
          }),
          (ue.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e)
          }),
          (ue.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(F),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o))
              for (; i--; ) e.splice(r[i], 1)
            }
            return (c = null), e
          }),
          (i = ue.getText =
            function (e) {
              var t,
                n = '',
                r = 0,
                o = e.nodeType
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ('string' == typeof e.textContent) return e.textContent
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
              } else for (; (t = e[r++]); ) n += i(t)
              return n
            }),
          ((r = ue.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: X,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' }
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                    e.slice(0, 4)
                  )
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    'nth' === e[1].slice(0, 3)
                      ? (e[3] || ue.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ('even' === e[3] || 'odd' === e[3]))),
                        (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                      : e[3] && ue.error(e[0]),
                    e
                  )
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2]
                  return X.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || '')
                        : n &&
                          V.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(')', n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3))
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase()
                  return '*' === e
                    ? function () {
                        return !0
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                      }
                },
                CLASS: function (e) {
                  var t = E[e + ' ']
                  return (
                    t ||
                    ((t = new RegExp('(^|' + H + ')' + e + '(' + H + '|$)')) &&
                      E(e, function (e) {
                        return t.test(
                          ('string' == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute('class')) ||
                            ''
                        )
                      }))
                  )
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ue.attr(r, e)
                    return null == i
                      ? '!=' === t
                      : !t ||
                          ((i += ''),
                          '=' === t
                            ? i === n
                            : '!=' === t
                            ? i !== n
                            : '^=' === t
                            ? n && 0 === i.indexOf(n)
                            : '*=' === t
                            ? n && i.indexOf(n) > -1
                            : '$=' === t
                            ? n && i.slice(-n.length) === n
                            : '~=' === t
                            ? (' ' + i.replace(z, ' ') + ' ').indexOf(n) > -1
                            : '|=' === t &&
                              (i === n || i.slice(0, n.length + 1) === n + '-'))
                  }
                },
                CHILD: function (e, t, n, r, i) {
                  var o = 'nth' !== e.slice(0, 3),
                    a = 'last' !== e.slice(-4),
                    u = 'of-type' === t
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode
                      }
                    : function (t, n, s) {
                        var l,
                          c,
                          f,
                          d,
                          p,
                          h,
                          m = o !== a ? 'nextSibling' : 'previousSibling',
                          g = t.parentNode,
                          v = u && t.nodeName.toLowerCase(),
                          y = !s && !u,
                          b = !1
                        if (g) {
                          if (o) {
                            for (; m; ) {
                              for (d = t; (d = d[m]); )
                                if (
                                  u
                                    ? d.nodeName.toLowerCase() === v
                                    : 1 === d.nodeType
                                )
                                  return !1
                              h = m = 'only' === e && !h && 'nextSibling'
                            }
                            return !0
                          }
                          if (
                            ((h = [a ? g.firstChild : g.lastChild]), a && y)
                          ) {
                            for (
                              b =
                                (p =
                                  (l =
                                    (c =
                                      (f = (d = g)[x] || (d[x] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === w && l[1]) && l[2],
                                d = p && g.childNodes[p];
                              (d =
                                (++p && d && d[m]) || (b = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++b && d === t) {
                                c[e] = [w, p, b]
                                break
                              }
                          } else if (
                            (y &&
                              (b = p =
                                (l =
                                  (c =
                                    (f = (d = t)[x] || (d[x] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  w && l[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (d =
                                (++p && d && d[m]) || (b = p = 0) || h.pop()) &&
                              ((u
                                ? d.nodeName.toLowerCase() !== v
                                : 1 !== d.nodeType) ||
                                !++b ||
                                (y &&
                                  ((c =
                                    (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                    (f[d.uniqueID] = {}))[e] = [w, b]),
                                d !== t));

                            );
                          return (b -= i) === r || (b % r == 0 && b / r >= 0)
                        }
                      }
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ue.error('unsupported pseudo: ' + e)
                  return i[x]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, '', t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                              e[(r = P(e, o[a]))] = !(n[r] = o[a])
                          })
                        : function (e) {
                            return i(e, 0, n)
                          })
                    : i
                }
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = u(e.replace($, '$1'))
                  return r[x]
                    ? le(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), u = e.length; u--; )
                          (o = a[u]) && (e[u] = !(t[u] = o))
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        )
                      }
                }),
                has: le(function (e) {
                  return function (t) {
                    return ue(e, t).length > 0
                  }
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1
                    }
                  )
                }),
                lang: le(function (e) {
                  return (
                    Y.test(e || '') || ue.error('unsupported lang: ' + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n
                      do {
                        if (
                          (n = m
                            ? t.lang
                            : t.getAttribute('xml:lang') ||
                              t.getAttribute('lang'))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + '-')
                          )
                      } while ((t = t.parentNode) && 1 === t.nodeType)
                      return !1
                    }
                  )
                }),
                target: function (t) {
                  var n = e.location && e.location.hash
                  return n && n.slice(1) === t.id
                },
                root: function (e) {
                  return e === h
                },
                focus: function (e) {
                  return (
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  )
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase()
                  return (
                    ('input' === t && !!e.checked) ||
                    ('option' === t && !!e.selected)
                  )
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  )
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1
                  return !0
                },
                parent: function (e) {
                  return !r.pseudos.empty(e)
                },
                header: function (e) {
                  return Q.test(e.nodeName)
                },
                input: function (e) {
                  return J.test(e.nodeName)
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase()
                  return (
                    ('input' === t && 'button' === e.type) || 'button' === t
                  )
                },
                text: function (e) {
                  var t
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'text' === e.type &&
                    (null == (t = e.getAttribute('type')) ||
                      'text' === t.toLowerCase())
                  )
                },
                first: ge(function () {
                  return [0]
                }),
                last: ge(function (e, t) {
                  return [t - 1]
                }),
                eq: ge(function (e, t, n) {
                  return [n < 0 ? n + t : n]
                }),
                even: ge(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n)
                  return e
                }),
                odd: ge(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n)
                  return e
                }),
                lt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r)
                  return e
                }),
                gt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
                  return e
                })
              }
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t)
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t)
          function ye () {}
          function be (e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
            return r
          }
          function xe (e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && 'parentNode' === o,
              u = C++
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i)
                  return !1
                }
              : function (t, n, s) {
                  var l,
                    c,
                    f,
                    d = [w, u]
                  if (s) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, s)) return !0
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t
                        else {
                          if ((l = c[o]) && l[0] === w && l[1] === u)
                            return (d[2] = l[2])
                          if (((c[o] = d), (d[2] = e(t, n, s)))) return !0
                        }
                  return !1
                }
          }
          function Ae (e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1
                  return !0
                }
              : e[0]
          }
          function we (e, t, n, r, i) {
            for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++)
              (o = e[u]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(u)))
            return a
          }
          function Ce (e, t, n, r, i, o) {
            return (
              r && !r[x] && (r = Ce(r)),
              i && !i[x] && (i = Ce(i, o)),
              le(function (o, a, u, s) {
                var l,
                  c,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  m =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) ue(e, t[r], n)
                      return n
                    })(t || '*', u.nodeType ? [u] : u, []),
                  g = !e || (!o && t) ? m : we(m, d, e, u, s),
                  v = n ? (i || (o ? e : h || r) ? [] : a) : g
                if ((n && n(g, v, u, s), r))
                  for (l = we(v, p), r(l, [], u, s), c = l.length; c--; )
                    (f = l[c]) && (v[p[c]] = !(g[p[c]] = f))
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], c = v.length; c--; )
                        (f = v[c]) && l.push((g[c] = f))
                      i(null, (v = []), l, s)
                    }
                    for (c = v.length; c--; )
                      (f = v[c]) &&
                        (l = i ? P(o, f) : d[c]) > -1 &&
                        (o[l] = !(a[l] = f))
                  }
                } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, s) : N.apply(a, v)
              })
            )
          }
          function Ee (e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                u = a || r.relative[' '],
                s = a ? 1 : 0,
                c = xe(
                  function (e) {
                    return e === t
                  },
                  u,
                  !0
                ),
                f = xe(
                  function (e) {
                    return P(t, e) > -1
                  },
                  u,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var i =
                      (!a && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r))
                    return (t = null), i
                  }
                ];
              s < o;
              s++
            )
              if ((n = r.relative[e[s].type])) d = [xe(Ae(d), n)]
              else {
                if ((n = r.filter[e[s].type].apply(null, e[s].matches))[x]) {
                  for (i = ++s; i < o && !r.relative[e[i].type]; i++);
                  return Ce(
                    s > 1 && Ae(d),
                    s > 1 &&
                      be(
                        e
                          .slice(0, s - 1)
                          .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                      ).replace($, '$1'),
                    n,
                    s < i && Ee(e.slice(s, i)),
                    i < o && Ee((e = e.slice(i))),
                    i < o && be(e)
                  )
                }
                d.push(n)
              }
            return Ae(d)
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = ue.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  u,
                  s,
                  l,
                  c = T[e + ' ']
                if (c) return t ? 0 : c.slice(0)
                for (u = e, s = [], l = r.preFilter; u; ) {
                  for (a in ((n && !(i = W.exec(u))) ||
                    (i && (u = u.slice(i[0].length) || u), s.push((o = []))),
                  (n = !1),
                  (i = _.exec(u)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace($, ' ') }),
                    (u = u.slice(n.length))),
                  r.filter))
                    !(i = X[a].exec(u)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (u = u.slice(n.length)))
                  if (!n) break
                }
                return t ? u.length : u ? ue.error(e) : T(e, s).slice(0)
              }),
            (u = ue.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  u = k[e + ' ']
                if (!u) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (u = Ee(t[n]))[x] ? i.push(u) : o.push(u)
                  ;(u = k(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, u, s, c) {
                          var f,
                            h,
                            g,
                            v = 0,
                            y = '0',
                            b = o && [],
                            x = [],
                            A = l,
                            C = o || (i && r.find.TAG('*', c)),
                            E = (w += null == A ? 1 : Math.random() || 0.1),
                            T = C.length
                          for (
                            c && (l = a === p || a || c);
                            y !== T && null != (f = C[y]);
                            y++
                          ) {
                            if (i && f) {
                              for (
                                h = 0,
                                  a ||
                                    f.ownerDocument === p ||
                                    (d(f), (u = !m));
                                (g = e[h++]);

                              )
                                if (g(f, a || p, u)) {
                                  s.push(f)
                                  break
                                }
                              c && (w = E)
                            }
                            n && ((f = !g && f) && v--, o && b.push(f))
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (g = t[h++]); ) g(b, x, a, u)
                            if (o) {
                              if (v > 0)
                                for (; y--; ) b[y] || x[y] || (x[y] = j.call(s))
                              x = we(x)
                            }
                            N.apply(s, x),
                              c &&
                                !o &&
                                x.length > 0 &&
                                v + t.length > 1 &&
                                ue.uniqueSort(s)
                          }
                          return c && ((w = E), (l = A)), b
                        }
                      return n ? le(o) : o
                    })(o, i)
                  )).selector = e
                }
                return u
              }),
            (s = ue.select =
              function (e, t, n, i) {
                var o,
                  s,
                  l,
                  c,
                  f,
                  d = 'function' == typeof e && e,
                  p = !i && a((e = d.selector || e))
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (s = p[0] = p[0].slice(0)).length > 2 &&
                    'ID' === (l = s[0]).type &&
                    9 === t.nodeType &&
                    m &&
                    r.relative[s[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n
                    d && (t = t.parentNode),
                      (e = e.slice(s.shift().value.length))
                  }
                  for (
                    o = X.needsContext.test(e) ? 0 : s.length;
                    o-- && ((l = s[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (i = f(
                        l.matches[0].replace(te, ne),
                        (ee.test(s[0].type) && ve(t.parentNode)) || t
                      ))
                    ) {
                      if ((s.splice(o, 1), !(e = i.length && be(s))))
                        return N.apply(n, i), n
                      break
                    }
                }
                return (
                  (d || u(e, p))(
                    i,
                    t,
                    !m,
                    n,
                    !t || (ee.test(e) && ve(t.parentNode)) || t
                  ),
                  n
                )
              }),
            (n.sortStable = x.split('').sort(F).join('') === x),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement('fieldset'))
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                '#' === e.firstChild.getAttribute('href')
              )
            }) ||
              fe('type|href|height|width', function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = '<input/>'),
                  e.firstChild.setAttribute('value', ''),
                  '' === e.firstChild.getAttribute('value')
                )
              })) ||
              fe('value', function (e, t, n) {
                if (!n && 'input' === e.nodeName.toLowerCase())
                  return e.defaultValue
              }),
            ce(function (e) {
              return null == e.getAttribute('disabled')
            }) ||
              fe(O, function (e, t, n) {
                var r
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null
              }),
            ue
          )
        })(n)
      ;(C.find = k),
        (C.expr = k.selectors),
        (C.expr[':'] = C.expr.pseudos),
        (C.uniqueSort = C.unique = k.uniqueSort),
        (C.text = k.getText),
        (C.isXMLDoc = k.isXML),
        (C.contains = k.contains),
        (C.escapeSelector = k.escape)
      var D = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && C(e).is(n)) break
              r.push(e)
            }
          return r
        },
        F = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e)
          return n
        },
        S = C.expr.match.needsContext
      function B (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }
      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      function q (e, t, n) {
        return y(t)
          ? C.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n
            })
          : t.nodeType
          ? C.grep(e, function (e) {
              return (e === t) !== n
            })
          : 'string' != typeof t
          ? C.grep(e, function (e) {
              return f.call(t, e) > -1 !== n
            })
          : C.filter(t, e, n)
      }
      ;(C.filter = function (e, t, n) {
        var r = t[0]
        return (
          n && (e = ':not(' + e + ')'),
          1 === t.length && 1 === r.nodeType
            ? C.find.matchesSelector(r, e)
              ? [r]
              : []
            : C.find.matches(
                e,
                C.grep(t, function (e) {
                  return 1 === e.nodeType
                })
              )
        )
      }),
        C.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this
            if ('string' != typeof e)
              return this.pushStack(
                C(e).filter(function () {
                  for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0
                })
              )
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n)
            return r > 1 ? C.uniqueSort(n) : n
          },
          filter: function (e) {
            return this.pushStack(q(this, e || [], !1))
          },
          not: function (e) {
            return this.pushStack(q(this, e || [], !0))
          },
          is: function (e) {
            return !!q(
              this,
              'string' == typeof e && S.test(e) ? C(e) : e || [],
              !1
            ).length
          }
        })
      var N,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
      ;((C.fn.init = function (e, t, n) {
        var r, i
        if (!e) return this
        if (((n = n || N), 'string' == typeof e)) {
          if (
            !(r =
              '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : L.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e)
          if (r[1]) {
            if (
              ((t = t instanceof C ? t[0] : t),
              C.merge(
                this,
                C.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : a,
                  !0
                )
              ),
              j.test(r[1]) && C.isPlainObject(t))
            )
              for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
            return this
          }
          return (
            (i = a.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          )
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(C)
          : C.makeArray(e, this)
      }).prototype = C.fn),
        (N = C(a))
      var P = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 }
      function H (e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
          })
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = 'string' != typeof e && C(e)
          if (!S.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  o.push(n)
                  break
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
        },
        index: function (e) {
          return e
            ? 'string' == typeof e
              ? f.call(C(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          )
        }
      }),
        C.each(
          {
            parent: function (e) {
              var t = e.parentNode
              return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
              return D(e, 'parentNode')
            },
            parentsUntil: function (e, t, n) {
              return D(e, 'parentNode', n)
            },
            next: function (e) {
              return H(e, 'nextSibling')
            },
            prev: function (e) {
              return H(e, 'previousSibling')
            },
            nextAll: function (e) {
              return D(e, 'nextSibling')
            },
            prevAll: function (e) {
              return D(e, 'previousSibling')
            },
            nextUntil: function (e, t, n) {
              return D(e, 'nextSibling', n)
            },
            prevUntil: function (e, t, n) {
              return D(e, 'previousSibling', n)
            },
            siblings: function (e) {
              return F((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
              return F(e.firstChild)
            },
            contents: function (e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (B(e, 'template') && (e = e.content || e),
                  C.merge([], e.childNodes))
            }
          },
          function (e, t) {
            C.fn[e] = function (n, r) {
              var i = C.map(this, t, n)
              return (
                'Until' !== e.slice(-5) && (r = n),
                r && 'string' == typeof r && (i = C.filter(r, i)),
                this.length > 1 &&
                  (O[e] || C.uniqueSort(i), P.test(e) && i.reverse()),
                this.pushStack(i)
              )
            }
          }
        )
      var R = /[^\x20\t\r\n\f]+/g
      function I (e) {
        return e
      }
      function M (e) {
        throw e
      }
      function z (e, t, n, r) {
        var i
        try {
          e && y((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && y((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }
      ;(C.Callbacks = function (e) {
        e =
          'string' == typeof e
            ? (function (e) {
                var t = {}
                return (
                  C.each(e.match(R) || [], function (e, n) {
                    t[n] = !0
                  }),
                  t
                )
              })(e)
            : C.extend({}, e)
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          u = -1,
          s = function () {
            for (i = i || e.once, r = t = !0; a.length; u = -1)
              for (n = a.shift(); ++u < o.length; )
                !1 === o[u].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((u = o.length), (n = !1))
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : '')
          },
          l = {
            add: function () {
              return (
                o &&
                  (n && !t && ((u = o.length - 1), a.push(n)),
                  (function t (n) {
                    C.each(n, function (n, r) {
                      y(r)
                        ? (e.unique && l.has(r)) || o.push(r)
                        : r && r.length && 'string' !== w(r) && t(r)
                    })
                  })(arguments),
                  n && !t && s()),
                this
              )
            },
            remove: function () {
              return (
                C.each(arguments, function (e, t) {
                  for (var n; (n = C.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= u && u--
                }),
                this
              )
            },
            has: function (e) {
              return e ? C.inArray(e, o) > -1 : o.length > 0
            },
            empty: function () {
              return o && (o = []), this
            },
            disable: function () {
              return (i = a = []), (o = n = ''), this
            },
            disabled: function () {
              return !o
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ''), this
            },
            locked: function () {
              return !!i
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || s()),
                this
              )
            },
            fire: function () {
              return l.fireWith(this, arguments), this
            },
            fired: function () {
              return !!r
            }
          }
        return l
      }),
        C.extend({
          Deferred: function (e) {
            var t = [
                [
                  'notify',
                  'progress',
                  C.Callbacks('memory'),
                  C.Callbacks('memory'),
                  2
                ],
                [
                  'resolve',
                  'done',
                  C.Callbacks('once memory'),
                  C.Callbacks('once memory'),
                  0,
                  'resolved'
                ],
                [
                  'reject',
                  'fail',
                  C.Callbacks('once memory'),
                  C.Callbacks('once memory'),
                  1,
                  'rejected'
                ]
              ],
              r = 'pending',
              i = {
                state: function () {
                  return r
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this
                },
                catch: function (e) {
                  return i.then(null, e)
                },
                pipe: function () {
                  var e = arguments
                  return C.Deferred(function (n) {
                    C.each(t, function (t, r) {
                      var i = y(e[r[4]]) && e[r[4]]
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments)
                        e && y(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + 'With'](this, i ? [e] : arguments)
                      })
                    }),
                      (e = null)
                  }).promise()
                },
                then: function (e, r, i) {
                  var o = 0
                  function a (e, t, r, i) {
                    return function () {
                      var u = this,
                        s = arguments,
                        l = function () {
                          var n, l
                          if (!(e < o)) {
                            if ((n = r.apply(u, s)) === t.promise())
                              throw new TypeError('Thenable self-resolution')
                            ;(l =
                              n &&
                              ('object' == typeof n ||
                                'function' == typeof n) &&
                              n.then),
                              y(l)
                                ? i
                                  ? l.call(n, a(o, t, I, i), a(o, t, M, i))
                                  : (o++,
                                    l.call(
                                      n,
                                      a(o, t, I, i),
                                      a(o, t, M, i),
                                      a(o, t, I, t.notifyWith)
                                    ))
                                : (r !== I && ((u = void 0), (s = [n])),
                                  (i || t.resolveWith)(u, s))
                          }
                        },
                        c = i
                          ? l
                          : function () {
                              try {
                                l()
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (r !== M && ((u = void 0), (s = [n])),
                                    t.rejectWith(u, s))
                              }
                            }
                      e
                        ? c()
                        : (C.Deferred.getStackHook &&
                            (c.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(c))
                    }
                  }
                  return C.Deferred(function (n) {
                    t[0][3].add(a(0, n, y(i) ? i : I, n.notifyWith)),
                      t[1][3].add(a(0, n, y(e) ? e : I)),
                      t[2][3].add(a(0, n, y(r) ? r : M))
                  }).promise()
                },
                promise: function (e) {
                  return null != e ? C.extend(e, i) : i
                }
              },
              o = {}
            return (
              C.each(t, function (e, n) {
                var a = n[2],
                  u = n[5]
                ;(i[n[1]] = a.add),
                  u &&
                    a.add(
                      function () {
                        r = u
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + 'With'](this === o ? void 0 : this, arguments),
                      this
                    )
                  }),
                  (o[n[0] + 'With'] = a.fireWith)
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            )
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = s.call(arguments),
              o = C.Deferred(),
              a = function (e) {
                return function (n) {
                  ;(r[e] = this),
                    (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                    --t || o.resolveWith(r, i)
                }
              }
            if (
              t <= 1 &&
              (z(e, o.done(a(n)).resolve, o.reject, !t),
              'pending' === o.state() || y(i[n] && i[n].then))
            )
              return o.then()
            for (; n--; ) z(i[n], a(n), o.reject)
            return o.promise()
          }
        })
      var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      ;(C.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          $.test(e.name) &&
          n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
      }),
        (C.readyException = function (e) {
          n.setTimeout(function () {
            throw e
          })
        })
      var W = C.Deferred()
      function _ () {
        a.removeEventListener('DOMContentLoaded', _),
          n.removeEventListener('load', _),
          C.ready()
      }
      ;(C.fn.ready = function (e) {
        return (
          W.then(e).catch(function (e) {
            C.readyException(e)
          }),
          this
        )
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            ;(!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== e && --C.readyWait > 0) || W.resolveWith(a, [C]))
          }
        }),
        (C.ready.then = W.then),
        'complete' === a.readyState ||
        ('loading' !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (a.addEventListener('DOMContentLoaded', _),
            n.addEventListener('load', _))
      var U = function (e, t, n, r, i, o, a) {
          var u = 0,
            s = e.length,
            l = null == n
          if ('object' === w(n))
            for (u in ((i = !0), n)) U(e, t, u, n[u], !0, o, a)
          else if (
            void 0 !== r &&
            ((i = !0),
            y(r) || (a = !0),
            l &&
              (a
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(C(e), n)
                  }))),
            t)
          )
            for (; u < s; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)))
          return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
        },
        V = /^-ms-/,
        Y = /-([a-z])/g
      function X (e, t) {
        return t.toUpperCase()
      }
      function G (e) {
        return e.replace(V, 'ms-').replace(Y, X)
      }
      var J = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      }
      function Q () {
        this.expando = C.expando + Q.uid++
      }
      ;(Q.uid = 1),
        (Q.prototype = {
          cache: function (e) {
            var t = e[this.expando]
            return (
              t ||
                ((t = {}),
                J(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                      }))),
              t
            )
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e)
            if ('string' == typeof t) i[G(t)] = n
            else for (r in t) i[G(r)] = t[r]
            return i
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][G(t)]
          },
          access: function (e, t, n) {
            return void 0 === t || (t && 'string' == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t)
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando]
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(G)
                  : (t = G(t)) in r
                  ? [t]
                  : t.match(R) || []).length
                for (; n--; ) delete r[t[n]]
              }
              ;(void 0 === t || C.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando])
            }
          },
          hasData: function (e) {
            var t = e[this.expando]
            return void 0 !== t && !C.isEmptyObject(t)
          }
        })
      var K = new Q(),
        Z = new Q(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g
      function ne (e, t, n) {
        var r
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = 'data-' + t.replace(te, '-$&').toLowerCase()),
            'string' == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  'true' === e ||
                  ('false' !== e &&
                    ('null' === e
                      ? null
                      : e === +e + ''
                      ? +e
                      : ee.test(e)
                      ? JSON.parse(e)
                      : e))
                )
              })(n)
            } catch (e) {}
            Z.set(e, t, n)
          } else n = void 0
        return n
      }
      C.extend({
        hasData: function (e) {
          return Z.hasData(e) || K.hasData(e)
        },
        data: function (e, t, n) {
          return Z.access(e, t, n)
        },
        removeData: function (e, t) {
          Z.remove(e, t)
        },
        _data: function (e, t, n) {
          return K.access(e, t, n)
        },
        _removeData: function (e, t) {
          K.remove(e, t)
        }
      }),
        C.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes
            if (void 0 === e) {
              if (
                this.length &&
                ((i = Z.get(o)), 1 === o.nodeType && !K.get(o, 'hasDataAttrs'))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf('data-') &&
                    ((r = G(r.slice(5))), ne(o, r, i[r]))
                K.set(o, 'hasDataAttrs', !0)
              }
              return i
            }
            return 'object' == typeof e
              ? this.each(function () {
                  Z.set(this, e)
                })
              : U(
                  this,
                  function (t) {
                    var n
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e))
                        ? n
                        : void 0 !== (n = ne(o, e))
                        ? n
                        : void 0
                    this.each(function () {
                      Z.set(this, e, t)
                    })
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                )
          },
          removeData: function (e) {
            return this.each(function () {
              Z.remove(this, e)
            })
          }
        }),
        C.extend({
          queue: function (e, t, n) {
            var r
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = K.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = K.access(e, t, C.makeArray(n)))
                    : r.push(n)),
                r || []
              )
          },
          dequeue: function (e, t) {
            t = t || 'fx'
            var n = C.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = C._queueHooks(e, t)
            'inprogress' === i && ((i = n.shift()), r--),
              i &&
                ('fx' === t && n.unshift('inprogress'),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    C.dequeue(e, t)
                  },
                  o
                )),
              !r && o && o.empty.fire()
          },
          _queueHooks: function (e, t) {
            var n = t + 'queueHooks'
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: C.Callbacks('once memory').add(function () {
                  K.remove(e, [t + 'queue', n])
                })
              })
            )
          }
        }),
        C.fn.extend({
          queue: function (e, t) {
            var n = 2
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? C.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = C.queue(this, e, t)
                    C._queueHooks(this, e),
                      'fx' === e && 'inprogress' !== n[0] && C.dequeue(this, e)
                  })
            )
          },
          dequeue: function (e) {
            return this.each(function () {
              C.dequeue(this, e)
            })
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', [])
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = C.Deferred(),
              o = this,
              a = this.length,
              u = function () {
                --r || i.resolveWith(o, [o])
              }
            for (
              'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
              a--;

            )
              (n = K.get(o[a], e + 'queueHooks')) &&
                n.empty &&
                (r++, n.empty.add(u))
            return u(), i.promise(t)
          }
        })
      var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
        oe = ['Top', 'Right', 'Bottom', 'Left'],
        ae = a.documentElement,
        ue = function (e) {
          return C.contains(e.ownerDocument, e)
        },
        se = { composed: !0 }
      ae.getRootNode &&
        (ue = function (e) {
          return (
            C.contains(e.ownerDocument, e) ||
            e.getRootNode(se) === e.ownerDocument
          )
        })
      var le = function (e, t) {
          return (
            'none' === (e = t || e).style.display ||
            ('' === e.style.display && ue(e) && 'none' === C.css(e, 'display'))
          )
        },
        ce = function (e, t, n, r) {
          var i,
            o,
            a = {}
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o])
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o]
          return i
        }
      function fe (e, t, n, r) {
        var i,
          o,
          a = 20,
          u = r
            ? function () {
                return r.cur()
              }
            : function () {
                return C.css(e, t, '')
              },
          s = u(),
          l = (n && n[3]) || (C.cssNumber[t] ? '' : 'px'),
          c =
            e.nodeType &&
            (C.cssNumber[t] || ('px' !== l && +s)) &&
            ie.exec(C.css(e, t))
        if (c && c[3] !== l) {
          for (s /= 2, l = l || c[3], c = +s || 1; a--; )
            C.style(e, t, c + l),
              (1 - o) * (1 - (o = u() / s || 0.5)) <= 0 && (a = 0),
              (c /= o)
          ;(c *= 2), C.style(e, t, c + l), (n = n || [])
        }
        return (
          n &&
            ((c = +c || +s || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
          i
        )
      }
      var de = {}
      function pe (e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = de[r]
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = C.css(t, 'display')),
          t.parentNode.removeChild(t),
          'none' === i && (i = 'block'),
          (de[r] = i),
          i)
        )
      }
      function he (e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ('none' === n &&
                  ((i[o] = K.get(r, 'display') || null),
                  i[o] || (r.style.display = '')),
                '' === r.style.display && le(r) && (i[o] = pe(r)))
              : 'none' !== n && ((i[o] = 'none'), K.set(r, 'display', n)))
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o])
        return e
      }
      C.fn.extend({
        show: function () {
          return he(this, !0)
        },
        hide: function () {
          return he(this)
        },
        toggle: function (e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? C(this).show() : C(this).hide()
              })
        }
      })
      var me = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i,
        ye = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', '']
        }
      function be (e, t) {
        var n
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && B(e, t)) ? C.merge([e], n) : n
        )
      }
      function xe (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'))
      }
      ;(ye.optgroup = ye.option),
        (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td)
      var Ae,
        we,
        Ce = /<|&#?\w+;/
      function Ee (e, t, n, r, i) {
        for (
          var o,
            a,
            u,
            s,
            l,
            c,
            f = t.createDocumentFragment(),
            d = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((o = e[p]) || 0 === o)
            if ('object' === w(o)) C.merge(d, o.nodeType ? [o] : o)
            else if (Ce.test(o)) {
              for (
                a = a || f.appendChild(t.createElement('div')),
                  u = (ge.exec(o) || ['', ''])[1].toLowerCase(),
                  s = ye[u] || ye._default,
                  a.innerHTML = s[1] + C.htmlPrefilter(o) + s[2],
                  c = s[0];
                c--;

              )
                a = a.lastChild
              C.merge(d, a.childNodes), ((a = f.firstChild).textContent = '')
            } else d.push(t.createTextNode(o))
        for (f.textContent = '', p = 0; (o = d[p++]); )
          if (r && C.inArray(o, r) > -1) i && i.push(o)
          else if (
            ((l = ue(o)), (a = be(f.appendChild(o), 'script')), l && xe(a), n)
          )
            for (c = 0; (o = a[c++]); ) ve.test(o.type || '') && n.push(o)
        return f
      }
      ;(Ae = a.createDocumentFragment().appendChild(a.createElement('div'))),
        (we = a.createElement('input')).setAttribute('type', 'radio'),
        we.setAttribute('checked', 'checked'),
        we.setAttribute('name', 't'),
        Ae.appendChild(we),
        (v.checkClone = Ae.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (Ae.innerHTML = '<textarea>x</textarea>'),
        (v.noCloneChecked = !!Ae.cloneNode(!0).lastChild.defaultValue)
      var Te = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        De = /^([^.]*)(?:\.(.+)|)/
      function Fe () {
        return !0
      }
      function Se () {
        return !1
      }
      function Be (e, t) {
        return (
          (e ===
            (function () {
              try {
                return a.activeElement
              } catch (e) {}
            })()) ==
          ('focus' === t)
        )
      }
      function je (e, t, n, r, i, o) {
        var a, u
        if ('object' == typeof t) {
          for (u in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
            je(e, u, n, r, t[u], o)
          return e
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ('string' == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Se
        else if (!i) return e
        return (
          1 === o &&
            ((a = i),
            ((i = function (e) {
              return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++))),
          e.each(function () {
            C.event.add(this, t, i, r, n)
          })
        )
      }
      function qe (e, t, n) {
        n
          ? (K.set(e, t, !1),
            C.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = K.get(this, t)
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (C.event.special[t] || {}).delegateType &&
                      e.stopPropagation()
                  else if (
                    ((o = s.call(arguments)),
                    K.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = K.get(this, t)) || r
                      ? K.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    )
                } else
                  o.length &&
                    (K.set(this, t, {
                      value: C.event.trigger(
                        C.extend(o[0], C.Event.prototype),
                        o.slice(1),
                        this
                      )
                    }),
                    e.stopImmediatePropagation())
              }
            }))
          : void 0 === K.get(e, t) && C.event.add(e, t, Fe)
      }
      ;(C.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            u,
            s,
            l,
            c,
            f,
            d,
            p,
            h,
            m,
            g = K.get(e)
          if (g)
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && C.find.matchesSelector(ae, i),
                n.guid || (n.guid = C.guid++),
                (s = g.events) || (s = g.events = {}),
                (a = g.handle) ||
                  (a = g.handle =
                    function (t) {
                      return void 0 !== C && C.event.triggered !== t.type
                        ? C.event.dispatch.apply(e, arguments)
                        : void 0
                    }),
                l = (t = (t || '').match(R) || ['']).length;
              l--;

            )
              (p = m = (u = De.exec(t[l]) || [])[1]),
                (h = (u[2] || '').split('.').sort()),
                p &&
                  ((f = C.event.special[p] || {}),
                  (p = (i ? f.delegateType : f.bindType) || p),
                  (f = C.event.special[p] || {}),
                  (c = C.extend(
                    {
                      type: p,
                      origType: m,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && C.expr.match.needsContext.test(i),
                      namespace: h.join('.')
                    },
                    o
                  )),
                  (d = s[p]) ||
                    (((d = s[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (C.event.global[p] = !0))
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            u,
            s,
            l,
            c,
            f,
            d,
            p,
            h,
            m,
            g = K.hasData(e) && K.get(e)
          if (g && (s = g.events)) {
            for (l = (t = (t || '').match(R) || ['']).length; l--; )
              if (
                ((p = m = (u = De.exec(t[l]) || [])[1]),
                (h = (u[2] || '').split('.').sort()),
                p)
              ) {
                for (
                  f = C.event.special[p] || {},
                    d = s[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    u =
                      u[2] &&
                      new RegExp(
                        '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
                      ),
                    a = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!i && m !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (u && !u.test(c.namespace)) ||
                      (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                      (d.splice(o, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c))
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                    C.removeEvent(e, p, g.handle),
                  delete s[p])
              } else for (p in s) C.event.remove(e, p + t[l], n, r, !0)
            C.isEmptyObject(s) && K.remove(e, 'handle events')
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            u = C.event.fix(e),
            s = new Array(arguments.length),
            l = (K.get(this, 'events') || {})[u.type] || [],
            c = C.event.special[u.type] || {}
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]
          if (
            ((u.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, u))
          ) {
            for (
              a = C.event.handlers.call(this, u, l), t = 0;
              (i = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== o.namespace &&
                  !u.rnamespace.test(o.namespace)) ||
                  ((u.handleObj = o),
                  (u.data = o.data),
                  void 0 !==
                    (r = (
                      (C.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, s)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()))
            return c.postDispatch && c.postDispatch.call(this, u), u.result
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            u = [],
            s = t.delegateCount,
            l = e.target
          if (s && l.nodeType && !('click' === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ('click' !== e.type || !0 !== l.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < s; n++)
                  void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                    (a[i] = r.needsContext
                      ? C(i, this).index(l) > -1
                      : C.find(i, this, null, [l]).length),
                    a[i] && o.push(r)
                o.length && u.push({ elem: l, handlers: o })
              }
          return (
            (l = this),
            s < t.length && u.push({ elem: l, handlers: t.slice(s) }),
            u
          )
        },
        addProp: function (e, t) {
          Object.defineProperty(C.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent)
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e]
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              })
            }
          })
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e)
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e
              return (
                me.test(t.type) &&
                  t.click &&
                  B(t, 'input') &&
                  qe(t, 'click', Fe),
                !1
              )
            },
            trigger: function (e) {
              var t = this || e
              return (
                me.test(t.type) && t.click && B(t, 'input') && qe(t, 'click'),
                !0
              )
            },
            _default: function (e) {
              var t = e.target
              return (
                (me.test(t.type) &&
                  t.click &&
                  B(t, 'input') &&
                  K.get(t, 'click')) ||
                B(t, 'a')
              )
            }
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }),
        (C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n)
        }),
        (C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t)
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Fe
                  : Se),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0)
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: Se,
          isPropagationStopped: Se,
          isImmediatePropagationStopped: Se,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent
            ;(this.isDefaultPrevented = Fe),
              e && !this.isSimulated && e.preventDefault()
          },
          stopPropagation: function () {
            var e = this.originalEvent
            ;(this.isPropagationStopped = Fe),
              e && !this.isSimulated && e.stopPropagation()
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent
            ;(this.isImmediatePropagationStopped = Fe),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation()
          }
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which
            }
          },
          C.event.addProp
        ),
        C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          C.event.special[e] = {
            setup: function () {
              return qe(this, e, Be), !1
            },
            trigger: function () {
              return qe(this, e), !0
            },
            delegateType: t
          }
        }),
        C.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout'
          },
          function (e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj
                return (
                  (i && (i === r || C.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                )
              }
            }
          }
        ),
        C.fn.extend({
          on: function (e, t, n, r) {
            return je(this, e, t, n, r)
          },
          one: function (e, t, n, r) {
            return je(this, e, t, n, r, 1)
          },
          off: function (e, t, n) {
            var r, i
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                C(e.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              )
            if ('object' == typeof e) {
              for (i in e) this.off(i, t, e[i])
              return this
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Se),
              this.each(function () {
                C.event.remove(this, e, n, t)
              })
            )
          }
        })
      var Ne =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      function He (e, t) {
        return (
          (B(e, 'table') &&
            B(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
            C(e).children('tbody')[0]) ||
          e
        )
      }
      function Re (e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
      }
      function Ie (e) {
        return (
          'true/' === (e.type || '').slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute('type'),
          e
        )
      }
      function Me (e, t) {
        var n, r, i, o, a, u, s, l
        if (1 === t.nodeType) {
          if (
            K.hasData(e) &&
            ((o = K.access(e)), (a = K.set(t, o)), (l = o.events))
          )
            for (i in (delete a.handle, (a.events = {}), l))
              for (n = 0, r = l[i].length; n < r; n++)
                C.event.add(t, i, l[i][n])
          Z.hasData(e) &&
            ((u = Z.access(e)), (s = C.extend({}, u)), Z.set(t, s))
        }
      }
      function ze (e, t) {
        var n = t.nodeName.toLowerCase()
        'input' === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ('input' !== n && 'textarea' !== n) ||
            (t.defaultValue = e.defaultValue)
      }
      function $e (e, t, n, r) {
        t = l.apply([], t)
        var i,
          o,
          a,
          u,
          s,
          c,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          m = y(h)
        if (m || (d > 1 && 'string' == typeof h && !v.checkClone && Pe.test(h)))
          return e.each(function (i) {
            var o = e.eq(i)
            m && (t[0] = h.call(this, i, o.html())), $e(o, t, n, r)
          })
        if (
          d &&
          ((o = (i = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (u = (a = C.map(be(i, 'script'), Re)).length; f < d; f++)
            (s = i),
              f !== p &&
                ((s = C.clone(s, !0, !0)), u && C.merge(a, be(s, 'script'))),
              n.call(e[f], s, f)
          if (u)
            for (
              c = a[a.length - 1].ownerDocument, C.map(a, Ie), f = 0;
              f < u;
              f++
            )
              (s = a[f]),
                ve.test(s.type || '') &&
                  !K.access(s, 'globalEval') &&
                  C.contains(c, s) &&
                  (s.src && 'module' !== (s.type || '').toLowerCase()
                    ? C._evalUrl &&
                      !s.noModule &&
                      C._evalUrl(s.src, {
                        nonce: s.nonce || s.getAttribute('nonce')
                      })
                    : A(s.textContent.replace(Oe, ''), s, c))
        }
        return e
      }
      function We (e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || C.cleanData(be(r)),
            r.parentNode &&
              (n && ue(r) && xe(be(r, 'script')), r.parentNode.removeChild(r))
        return e
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e.replace(Ne, '<$1></$2>')
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            u = e.cloneNode(!0),
            s = ue(e)
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              C.isXMLDoc(e)
            )
          )
            for (a = be(u), r = 0, i = (o = be(e)).length; r < i; r++)
              ze(o[r], a[r])
          if (t)
            if (n)
              for (
                o = o || be(e), a = a || be(u), r = 0, i = o.length;
                r < i;
                r++
              )
                Me(o[r], a[r])
            else Me(e, u)
          return (
            (a = be(u, 'script')).length > 0 && xe(a, !s && be(e, 'script')), u
          )
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = C.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (J(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle)
                n[K.expando] = void 0
              }
              n[Z.expando] && (n[Z.expando] = void 0)
            }
        }
      }),
        C.fn.extend({
          detach: function (e) {
            return We(this, e, !0)
          },
          remove: function (e) {
            return We(this, e)
          },
          text: function (e) {
            return U(
              this,
              function (e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function () {
                      ;(1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e)
                    })
              },
              null,
              e,
              arguments.length
            )
          },
          append: function () {
            return $e(this, arguments, function (e) {
              ;(1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                He(this, e).appendChild(e)
            })
          },
          prepend: function () {
            return $e(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = He(this, e)
                t.insertBefore(e, t.firstChild)
              }
            })
          },
          before: function () {
            return $e(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
            })
          },
          after: function () {
            return $e(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling)
            })
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (C.cleanData(be(e, !1)), (e.textContent = ''))
            return this
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return C.clone(this, e, t)
              })
            )
          },
          html: function (e) {
            return U(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML
                if (
                  'string' == typeof e &&
                  !Le.test(e) &&
                  !ye[(ge.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e)
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (C.cleanData(be(t, !1)), (t.innerHTML = e))
                    t = 0
                  } catch (e) {}
                }
                t && this.empty().append(e)
              },
              null,
              e,
              arguments.length
            )
          },
          replaceWith: function () {
            var e = []
            return $e(
              this,
              arguments,
              function (t) {
                var n = this.parentNode
                C.inArray(this, e) < 0 &&
                  (C.cleanData(be(this)), n && n.replaceChild(t, this))
              },
              e
            )
          }
        }),
        C.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
          },
          function (e, t) {
            C.fn[e] = function (e) {
              for (
                var n, r = [], i = C(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  C(i[a])[t](n),
                  c.apply(r, n.get())
              return this.pushStack(r)
            }
          }
        )
      var _e = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
        Ue = function (e) {
          var t = e.ownerDocument.defaultView
          return (t && t.opener) || (t = n), t.getComputedStyle(e)
        },
        Ve = new RegExp(oe.join('|'), 'i')
      function Ye (e, t, n) {
        var r,
          i,
          o,
          a,
          u = e.style
        return (
          (n = n || Ue(e)) &&
            ('' !== (a = n.getPropertyValue(t) || n[t]) ||
              ue(e) ||
              (a = C.style(e, t)),
            !v.pixelBoxStyles() &&
              _e.test(a) &&
              Ve.test(t) &&
              ((r = u.width),
              (i = u.minWidth),
              (o = u.maxWidth),
              (u.minWidth = u.maxWidth = u.width = a),
              (a = n.width),
              (u.width = r),
              (u.minWidth = i),
              (u.maxWidth = o))),
          void 0 !== a ? a + '' : a
        )
      }
      function Xe (e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments)
            delete this.get
          }
        }
      }
      !(function () {
        function e () {
          if (c) {
            ;(l.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              ae.appendChild(l).appendChild(c)
            var e = n.getComputedStyle(c)
            ;(r = '1%' !== e.top),
              (s = 12 === t(e.marginLeft)),
              (c.style.right = '60%'),
              (u = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = 'absolute'),
              (o = 12 === t(c.offsetWidth / 3)),
              ae.removeChild(l),
              (c = null)
          }
        }
        function t (e) {
          return Math.round(parseFloat(e))
        }
        var r,
          i,
          o,
          u,
          s,
          l = a.createElement('div'),
          c = a.createElement('div')
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
          C.extend(v, {
            boxSizingReliable: function () {
              return e(), i
            },
            pixelBoxStyles: function () {
              return e(), u
            },
            pixelPosition: function () {
              return e(), r
            },
            reliableMarginLeft: function () {
              return e(), s
            },
            scrollboxSize: function () {
              return e(), o
            }
          }))
      })()
      var Ge = ['Webkit', 'Moz', 'ms'],
        Je = a.createElement('div').style,
        Qe = {}
      function Ke (e) {
        var t = C.cssProps[e] || Qe[e]
        return (
          t ||
          (e in Je
            ? e
            : (Qe[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                    n--;

                  )
                    if ((e = Ge[n] + t) in Je) return e
                })(e) || e))
        )
      }
      var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: 'absolute', visibility: 'hidden', display: 'block' },
        nt = { letterSpacing: '0', fontWeight: '400' }
      function rt (e, t, n) {
        var r = ie.exec(t)
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
      }
      function it (e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0,
          u = 0,
          s = 0
        if (n === (r ? 'border' : 'content')) return 0
        for (; a < 4; a += 2)
          'margin' === n && (s += C.css(e, n + oe[a], !0, i)),
            r
              ? ('content' === n && (s -= C.css(e, 'padding' + oe[a], !0, i)),
                'margin' !== n &&
                  (s -= C.css(e, 'border' + oe[a] + 'Width', !0, i)))
              : ((s += C.css(e, 'padding' + oe[a], !0, i)),
                'padding' !== n
                  ? (s += C.css(e, 'border' + oe[a] + 'Width', !0, i))
                  : (u += C.css(e, 'border' + oe[a] + 'Width', !0, i)))
        return (
          !r &&
            o >= 0 &&
            (s +=
              Math.max(
                0,
                Math.ceil(
                  e['offset' + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    s -
                    u -
                    0.5
                )
              ) || 0),
          s
        )
      }
      function ot (e, t, n) {
        var r = Ue(e),
          i =
            (!v.boxSizingReliable() || n) &&
            'border-box' === C.css(e, 'boxSizing', !1, r),
          o = i,
          a = Ye(e, t, r),
          u = 'offset' + t[0].toUpperCase() + t.slice(1)
        if (_e.test(a)) {
          if (!n) return a
          a = 'auto'
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            'auto' === a ||
            (!parseFloat(a) && 'inline' === C.css(e, 'display', !1, r))) &&
            e.getClientRects().length &&
            ((i = 'border-box' === C.css(e, 'boxSizing', !1, r)),
            (o = u in e) && (a = e[u])),
          (a = parseFloat(a) || 0) +
            it(e, t, n || (i ? 'border' : 'content'), o, r, a) +
            'px'
        )
      }
      function at (e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ye(e, 'opacity')
                return '' === n ? '1' : n
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
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              u = G(t),
              s = et.test(t),
              l = e.style
            if (
              (s || (t = Ke(u)),
              (a = C.cssHooks[t] || C.cssHooks[u]),
              void 0 === n)
            )
              return a && 'get' in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : l[t]
            'string' === (o = typeof n) &&
              (i = ie.exec(n)) &&
              i[1] &&
              ((n = fe(e, t, i)), (o = 'number')),
              null != n &&
                n == n &&
                ('number' !== o ||
                  s ||
                  (n += (i && i[3]) || (C.cssNumber[u] ? '' : 'px')),
                v.clearCloneStyle ||
                  '' !== n ||
                  0 !== t.indexOf('background') ||
                  (l[t] = 'inherit'),
                (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                  (s ? l.setProperty(t, n) : (l[t] = n)))
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            u = G(t)
          return (
            et.test(t) || (t = Ke(u)),
            (a = C.cssHooks[t] || C.cssHooks[u]) &&
              'get' in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = Ye(e, t, r)),
            'normal' === i && t in nt && (i = nt[t]),
            '' === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          )
        }
      }),
        C.each(['height', 'width'], function (e, t) {
          C.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ze.test(C.css(e, 'display')) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, r)
                  : ce(e, tt, function () {
                      return ot(e, t, r)
                    })
            },
            set: function (e, n, r) {
              var i,
                o = Ue(e),
                a = !v.scrollboxSize() && 'absolute' === o.position,
                u = (a || r) && 'border-box' === C.css(e, 'boxSizing', !1, o),
                s = r ? it(e, t, r, u, o) : 0
              return (
                u &&
                  a &&
                  (s -= Math.ceil(
                    e['offset' + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      it(e, t, 'border', !1, o) -
                      0.5
                  )),
                s &&
                  (i = ie.exec(n)) &&
                  'px' !== (i[3] || 'px') &&
                  ((e.style[t] = n), (n = C.css(e, t))),
                rt(0, n, s)
              )
            }
          }
        }),
        (C.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ye(e, 'marginLeft')) ||
                e.getBoundingClientRect().left -
                  ce(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left
                  })) + 'px'
            )
        })),
        C.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          ;(C.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = 'string' == typeof n ? n.split(' ') : [n];
                r < 4;
                r++
              )
                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0]
              return i
            }
          }),
            'margin' !== e && (C.cssHooks[e + t].set = rt)
        }),
        C.fn.extend({
          css: function (e, t) {
            return U(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0
                if (Array.isArray(t)) {
                  for (r = Ue(e), i = t.length; a < i; a++)
                    o[t[a]] = C.css(e, t[a], !1, r)
                  return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
              },
              e,
              t,
              arguments.length > 1
            )
          }
        }),
        (C.Tween = at),
        (at.prototype = {
          constructor: at,
          init: function (e, t, n, r, i, o) {
            ;(this.elem = e),
              (this.prop = n),
              (this.easing = i || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (C.cssNumber[n] ? '' : 'px'))
          },
          cur: function () {
            var e = at.propHooks[this.prop]
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
          },
          run: function (e) {
            var t,
              n = at.propHooks[this.prop]
            return (
              this.options.duration
                ? (this.pos = t =
                    C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : at.propHooks._default.set(this),
              this
            )
          }
        }),
        (at.prototype.init.prototype = at.prototype),
        (at.propHooks = {
          _default: {
            get: function (e) {
              var t
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = C.css(e.elem, e.prop, '')) && 'auto' !== t
                ? t
                : 0
            },
            set: function (e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!C.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit)
            }
          }
        }),
        (at.propHooks.scrollTop = at.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
          }),
        (C.easing = {
          linear: function (e) {
            return e
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
          },
          _default: 'swing'
        }),
        (C.fx = at.prototype.init),
        (C.fx.step = {})
      var ut,
        st,
        lt = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/
      function ft () {
        st &&
          (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ft)
            : n.setTimeout(ft, C.fx.interval),
          C.fx.tick())
      }
      function dt () {
        return (
          n.setTimeout(function () {
            ut = void 0
          }),
          (ut = Date.now())
        )
      }
      function pt (e, t) {
        var n,
          r = 0,
          i = { height: e }
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i['margin' + (n = oe[r])] = i['padding' + n] = e
        return t && (i.opacity = i.width = e), i
      }
      function ht (e, t, n) {
        for (
          var r,
            i = (mt.tweeners[t] || []).concat(mt.tweeners['*']),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r
      }
      function mt (e, t, n) {
        var r,
          i,
          o = 0,
          a = mt.prefilters.length,
          u = C.Deferred().always(function () {
            delete s.elem
          }),
          s = function () {
            if (i) return !1
            for (
              var t = ut || dt(),
                n = Math.max(0, l.startTime + l.duration - t),
                r = 1 - (n / l.duration || 0),
                o = 0,
                a = l.tweens.length;
              o < a;
              o++
            )
              l.tweens[o].run(r)
            return (
              u.notifyWith(e, [l, r, n]),
              r < 1 && a
                ? n
                : (a || u.notifyWith(e, [l, 1, 0]), u.resolveWith(e, [l]), !1)
            )
          },
          l = u.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ut || dt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = C.Tween(
                e,
                l.opts,
                t,
                n,
                l.opts.specialEasing[t] || l.opts.easing
              )
              return l.tweens.push(r), r
            },
            stop: function (t) {
              var n = 0,
                r = t ? l.tweens.length : 0
              if (i) return this
              for (i = !0; n < r; n++) l.tweens[n].run(1)
              return (
                t
                  ? (u.notifyWith(e, [l, 1, 0]), u.resolveWith(e, [l, t]))
                  : u.rejectWith(e, [l, t]),
                this
              )
            }
          }),
          c = l.props
        for (
          !(function (e, t) {
            var n, r, i, o, a
            for (n in e)
              if (
                ((i = t[(r = G(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = C.cssHooks[r]) && ('expand' in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i))
              else t[r] = i
          })(c, l.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = mt.prefilters[o].call(l, e, c, l.opts)))
            return (
              y(r.stop) &&
                (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
              r
            )
        return (
          C.map(c, ht, l),
          y(l.opts.start) && l.opts.start.call(e, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          C.fx.timer(C.extend(s, { elem: e, anim: l, queue: l.opts.queue })),
          l
        )
      }
      ;(C.Animation = C.extend(mt, {
        tweeners: {
          '*': [
            function (e, t) {
              var n = this.createTween(e, t)
              return fe(n.elem, e, ie.exec(t), n), n
            }
          ]
        },
        tweener: function (e, t) {
          y(e) ? ((t = e), (e = ['*'])) : (e = e.match(R))
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (mt.tweeners[n] = mt.tweeners[n] || []),
              mt.tweeners[n].unshift(t)
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              a,
              u,
              s,
              l,
              c,
              f = 'width' in t || 'height' in t,
              d = this,
              p = {},
              h = e.style,
              m = e.nodeType && le(e),
              g = K.get(e, 'fxshow')
            for (r in (n.queue ||
              (null == (a = C._queueHooks(e, 'fx')).unqueued &&
                ((a.unqueued = 0),
                (u = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || u()
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, C.queue(e, 'fx').length || a.empty.fire()
                })
              })),
            t))
              if (((i = t[r]), lt.test(i))) {
                if (
                  (delete t[r],
                  (o = o || 'toggle' === i),
                  i === (m ? 'hide' : 'show'))
                ) {
                  if ('show' !== i || !g || void 0 === g[r]) continue
                  m = !0
                }
                p[r] = (g && g[r]) || C.style(e, r)
              }
            if ((s = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = g && g.display) && (l = K.get(e, 'display')),
                'none' === (c = C.css(e, 'display')) &&
                  (l
                    ? (c = l)
                    : (he([e], !0),
                      (l = e.style.display || l),
                      (c = C.css(e, 'display')),
                      he([e]))),
                ('inline' === c || ('inline-block' === c && null != l)) &&
                  'none' === C.css(e, 'float') &&
                  (s ||
                    (d.done(function () {
                      h.display = l
                    }),
                    null == l &&
                      ((c = h.display), (l = 'none' === c ? '' : c))),
                  (h.display = 'inline-block'))),
              n.overflow &&
                ((h.overflow = 'hidden'),
                d.always(function () {
                  ;(h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2])
                })),
              (s = !1),
              p))
                s ||
                  (g
                    ? 'hidden' in g && (m = g.hidden)
                    : (g = K.access(e, 'fxshow', { display: l })),
                  o && (g.hidden = !m),
                  m && he([e], !0),
                  d.done(function () {
                    for (r in (m || he([e]), K.remove(e, 'fxshow'), p))
                      C.style(e, r, p[r])
                  })),
                  (s = ht(m ? g[r] : 0, r, d)),
                  r in g ||
                    ((g[r] = s.start), m && ((s.end = s.start), (s.start = 0)))
          }
        ],
        prefilter: function (e, t) {
          t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
        }
      })),
        (C.speed = function (e, t, n) {
          var r =
            e && 'object' == typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (y(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !y(t) && t)
                }
          return (
            C.fx.off
              ? (r.duration = 0)
              : 'number' != typeof r.duration &&
                (r.duration in C.fx.speeds
                  ? (r.duration = C.fx.speeds[r.duration])
                  : (r.duration = C.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
            (r.old = r.complete),
            (r.complete = function () {
              y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
            }),
            r
          )
        }),
        C.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r)
          },
          animate: function (e, t, n, r) {
            var i = C.isEmptyObject(e),
              o = C.speed(t, n, r),
              a = function () {
                var t = mt(this, C.extend({}, e), o)
                ;(i || K.get(this, 'finish')) && t.stop(!0)
              }
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            )
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop
              delete e.stop, t(n)
            }
            return (
              'string' != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || 'fx', []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + 'queueHooks',
                  o = C.timers,
                  a = K.get(this)
                if (i) a[i] && a[i].stop && r(a[i])
                else for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i])
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1))
                ;(!t && n) || C.dequeue(this, e)
              })
            )
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function () {
                var t,
                  n = K.get(this),
                  r = n[e + 'queue'],
                  i = n[e + 'queueHooks'],
                  o = C.timers,
                  a = r ? r.length : 0
                for (
                  n.finish = !0,
                    C.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1))
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this)
                delete n.finish
              })
            )
          }
        }),
        C.each(['toggle', 'show', 'hide'], function (e, t) {
          var n = C.fn[t]
          C.fn[t] = function (e, r, i) {
            return null == e || 'boolean' == typeof e
              ? n.apply(this, arguments)
              : this.animate(pt(t, !0), e, r, i)
          }
        }),
        C.each(
          {
            slideDown: pt('show'),
            slideUp: pt('hide'),
            slideToggle: pt('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' }
          },
          function (e, t) {
            C.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r)
            }
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var e,
            t = 0,
            n = C.timers
          for (ut = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1)
          n.length || C.fx.stop(), (ut = void 0)
        }),
        (C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start()
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          st || ((st = !0), ft())
        }),
        (C.fx.stop = function () {
          st = null
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (e, t) {
          return (
            (e = (C.fx && C.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e)
              r.stop = function () {
                n.clearTimeout(i)
              }
            })
          )
        }),
        (function () {
          var e = a.createElement('input'),
            t = a.createElement('select').appendChild(a.createElement('option'))
          ;(e.type = 'checkbox'),
            (v.checkOn = '' !== e.value),
            (v.optSelected = t.selected),
            ((e = a.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (v.radioValue = 't' === e.value)
        })()
      var gt,
        vt = C.expr.attrHandle
      C.fn.extend({
        attr: function (e, t) {
          return U(this, C.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e)
          })
        }
      }),
        C.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === o && C.isXMLDoc(e)) ||
                    (i =
                      C.attrHooks[t.toLowerCase()] ||
                      (C.expr.match.bool.test(t) ? gt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ''), n)
                    : i && 'get' in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = C.find.attr(e, t))
                    ? void 0
                    : r)
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && 'radio' === t && B(e, 'input')) {
                  var n = e.value
                  return e.setAttribute('type', t), n && (e.value = n), t
                }
              }
            }
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(R)
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n)
          }
        }),
        (gt = {
          set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
          }
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = vt[t] || C.find.attr
          vt[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase()
            return (
              r ||
                ((o = vt[a]),
                (vt[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (vt[a] = o)),
              i
            )
          }
        })
      var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i
      function xt (e) {
        return (e.match(R) || []).join(' ')
      }
      function At (e) {
        return (e.getAttribute && e.getAttribute('class')) || ''
      }
      function wt (e) {
        return Array.isArray(e) ? e : ('string' == typeof e && e.match(R)) || []
      }
      C.fn.extend({
        prop: function (e, t) {
          return U(this, C.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e]
          })
        }
      }),
        C.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(e)) ||
                  ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              )
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = C.find.attr(e, 'tabindex')
                return t
                  ? parseInt(t, 10)
                  : yt.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
                  ? 0
                  : -1
              }
            }
          },
          propFix: { for: 'htmlFor', class: 'className' }
        }),
        v.optSelected ||
          (C.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode
              return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
              var t = e.parentNode
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
          }),
        C.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable'
          ],
          function () {
            C.propFix[this.toLowerCase()] = this
          }
        ),
        C.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              u,
              s = 0
            if (y(e))
              return this.each(function (t) {
                C(this).addClass(e.call(this, t, At(this)))
              })
            if ((t = wt(e)).length)
              for (; (n = this[s++]); )
                if (
                  ((i = At(n)), (r = 1 === n.nodeType && ' ' + xt(i) + ' '))
                ) {
                  for (a = 0; (o = t[a++]); )
                    r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ')
                  i !== (u = xt(r)) && n.setAttribute('class', u)
                }
            return this
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              u,
              s = 0
            if (y(e))
              return this.each(function (t) {
                C(this).removeClass(e.call(this, t, At(this)))
              })
            if (!arguments.length) return this.attr('class', '')
            if ((t = wt(e)).length)
              for (; (n = this[s++]); )
                if (
                  ((i = At(n)), (r = 1 === n.nodeType && ' ' + xt(i) + ' '))
                ) {
                  for (a = 0; (o = t[a++]); )
                    for (; r.indexOf(' ' + o + ' ') > -1; )
                      r = r.replace(' ' + o + ' ', ' ')
                  i !== (u = xt(r)) && n.setAttribute('class', u)
                }
            return this
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = 'string' === n || Array.isArray(e)
            return 'boolean' == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
              ? this.each(function (n) {
                  C(this).toggleClass(e.call(this, n, At(this), t), t)
                })
              : this.each(function () {
                  var t, i, o, a
                  if (r)
                    for (i = 0, o = C(this), a = wt(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                  else
                    (void 0 !== e && 'boolean' !== n) ||
                      ((t = At(this)) && K.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          t || !1 === e
                            ? ''
                            : K.get(this, '__className__') || ''
                        ))
                })
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0
            for (t = ' ' + e + ' '; (n = this[r++]); )
              if (1 === n.nodeType && (' ' + xt(At(n)) + ' ').indexOf(t) > -1)
                return !0
            return !1
          }
        })
      var Ct = /\r/g
      C.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0]
          return arguments.length
            ? ((r = y(e)),
              this.each(function (n) {
                var i
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, C(this).val()) : e)
                    ? (i = '')
                    : 'number' == typeof i
                    ? (i += '')
                    : Array.isArray(i) &&
                      (i = C.map(i, function (e) {
                        return null == e ? '' : e + ''
                      })),
                  ((t =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, i, 'value')) ||
                    (this.value = i))
              }))
            : i
            ? (t =
                C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(i, 'value'))
              ? n
              : 'string' == typeof (n = i.value)
              ? n.replace(Ct, '')
              : null == n
              ? ''
              : n
            : void 0
        }
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = C.find.attr(e, 'value')
                return null != t ? t : xt(C.text(e))
              }
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = 'select-one' === e.type,
                  u = a ? null : [],
                  s = a ? o + 1 : i.length
                for (r = o < 0 ? s : a ? o : 0; r < s; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !B(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = C(n).val()), a)) return t
                    u.push(t)
                  }
                return u
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = C.makeArray(t), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0)
                return n || (e.selectedIndex = -1), o
              }
            }
          }
        }),
        C.each(['radio', 'checkbox'], function () {
          ;(C.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = C.inArray(C(e).val(), t) > -1)
            }
          }),
            v.checkOn ||
              (C.valHooks[this].get = function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value
              })
        }),
        (v.focusin = 'onfocusin' in n)
      var Et = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
          e.stopPropagation()
        }
      C.extend(C.event, {
        trigger: function (e, t, r, i) {
          var o,
            u,
            s,
            l,
            c,
            f,
            d,
            p,
            m = [r || a],
            g = h.call(e, 'type') ? e.type : e,
            v = h.call(e, 'namespace') ? e.namespace.split('.') : []
          if (
            ((u = p = s = r = r || a),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Et.test(g + C.event.triggered) &&
              (g.indexOf('.') > -1 &&
                ((v = g.split('.')), (g = v.shift()), v.sort()),
              (c = g.indexOf(':') < 0 && 'on' + g),
              ((e = e[C.expando]
                ? e
                : new C.Event(g, 'object' == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join('.')),
              (e.rnamespace = e.namespace
                ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : C.makeArray(t, [e])),
              (d = C.event.special[g] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !b(r)) {
              for (
                l = d.delegateType || g, Et.test(l + g) || (u = u.parentNode);
                u;
                u = u.parentNode
              )
                m.push(u), (s = u)
              s === (r.ownerDocument || a) &&
                m.push(s.defaultView || s.parentWindow || n)
            }
            for (o = 0; (u = m[o++]) && !e.isPropagationStopped(); )
              (p = u),
                (e.type = o > 1 ? l : d.bindType || g),
                (f =
                  (K.get(u, 'events') || {})[e.type] && K.get(u, 'handle')) &&
                  f.apply(u, t),
                (f = c && u[c]) &&
                  f.apply &&
                  J(u) &&
                  ((e.result = f.apply(u, t)),
                  !1 === e.result && e.preventDefault())
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(m.pop(), t)) ||
                !J(r) ||
                (c &&
                  y(r[g]) &&
                  !b(r) &&
                  ((s = r[c]) && (r[c] = null),
                  (C.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, Tt),
                  r[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, Tt),
                  (C.event.triggered = void 0),
                  s && (r[c] = s))),
              e.result
            )
          }
        },
        simulate: function (e, t, n) {
          var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 })
          C.event.trigger(r, null, t)
        }
      }),
        C.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this)
            })
          },
          triggerHandler: function (e, t) {
            var n = this[0]
            if (n) return C.event.trigger(e, t, n, !0)
          }
        }),
        v.focusin ||
          C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var n = function (e) {
              C.event.simulate(t, e.target, C.event.fix(e))
            }
            C.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  i = K.access(r, t)
                i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1)
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  i = K.access(r, t) - 1
                i
                  ? K.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), K.remove(r, t))
              }
            }
          })
      var kt = n.location,
        Dt = Date.now(),
        Ft = /\?/
      C.parseXML = function (e) {
        var t
        if (!e || 'string' != typeof e) return null
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml')
        } catch (e) {
          t = void 0
        }
        return (
          (t && !t.getElementsByTagName('parsererror').length) ||
            C.error('Invalid XML: ' + e),
          t
        )
      }
      var St = /\[\]$/,
        Bt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        qt = /^(?:input|select|textarea|keygen)/i
      function Nt (e, t, n, r) {
        var i
        if (Array.isArray(t))
          C.each(t, function (t, i) {
            n || St.test(e)
              ? r(e, i)
              : Nt(
                  e + '[' + ('object' == typeof i && null != i ? t : '') + ']',
                  i,
                  n,
                  r
                )
          })
        else if (n || 'object' !== w(t)) r(e, t)
        else for (i in t) Nt(e + '[' + i + ']', t[i], n, r)
      }
      ;(C.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = y(t) ? t() : t
            r[r.length] =
              encodeURIComponent(e) +
              '=' +
              encodeURIComponent(null == n ? '' : n)
          }
        if (null == e) return ''
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function () {
            i(this.name, this.value)
          })
        else for (n in e) Nt(n, e[n], t, i)
        return r.join('&')
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray())
          },
          serializeArray: function () {
            return this.map(function () {
              var e = C.prop(this, 'elements')
              return e ? C.makeArray(e) : this
            })
              .filter(function () {
                var e = this.type
                return (
                  this.name &&
                  !C(this).is(':disabled') &&
                  qt.test(this.nodeName) &&
                  !jt.test(e) &&
                  (this.checked || !me.test(e))
                )
              })
              .map(function (e, t) {
                var n = C(this).val()
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (e) {
                      return { name: t.name, value: e.replace(Bt, '\r\n') }
                    })
                  : { name: t.name, value: n.replace(Bt, '\r\n') }
              })
              .get()
          }
        })
      var Lt = /%20/g,
        Pt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Mt = {},
        zt = {},
        $t = '*/'.concat('*'),
        Wt = a.createElement('a')
      function _t (e) {
        return function (t, n) {
          'string' != typeof t && ((n = t), (t = '*'))
          var r,
            i = 0,
            o = t.toLowerCase().match(R) || []
          if (y(n))
            for (; (r = o[i++]); )
              '+' === r[0]
                ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n)
        }
      }
      function Ut (e, t, n, r) {
        var i = {},
          o = e === zt
        function a (u) {
          var s
          return (
            (i[u] = !0),
            C.each(e[u] || [], function (e, u) {
              var l = u(t, n, r)
              return 'string' != typeof l || o || i[l]
                ? o
                  ? !(s = l)
                  : void 0
                : (t.dataTypes.unshift(l), a(l), !1)
            }),
            s
          )
        }
        return a(t.dataTypes[0]) || (!i['*'] && a('*'))
      }
      function Vt (e, t) {
        var n,
          r,
          i = C.ajaxSettings.flatOptions || {}
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
        return r && C.extend(!0, e, r), e
      }
      ;(Wt.href = kt.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: kt.href,
            type: 'GET',
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                kt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': $t,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript'
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON'
            },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': C.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function (e, t) {
            return t ? Vt(Vt(e, C.ajaxSettings), t) : Vt(C.ajaxSettings, e)
          },
          ajaxPrefilter: _t(Mt),
          ajaxTransport: _t(zt),
          ajax: function (e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
            var r,
              i,
              o,
              u,
              s,
              l,
              c,
              f,
              d,
              p,
              h = C.ajaxSetup({}, t),
              m = h.context || h,
              g = h.context && (m.nodeType || m.jquery) ? C(m) : C.event,
              v = C.Deferred(),
              y = C.Callbacks('once memory'),
              b = h.statusCode || {},
              x = {},
              A = {},
              w = 'canceled',
              E = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t
                  if (c) {
                    if (!u)
                      for (u = {}; (t = Ht.exec(o)); )
                        u[t[1].toLowerCase() + ' '] = (
                          u[t[1].toLowerCase() + ' '] || []
                        ).concat(t[2])
                    t = u[e.toLowerCase() + ' ']
                  }
                  return null == t ? null : t.join(', ')
                },
                getAllResponseHeaders: function () {
                  return c ? o : null
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = A[e.toLowerCase()] = A[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  )
                },
                overrideMimeType: function (e) {
                  return null == c && (h.mimeType = e), this
                },
                statusCode: function (e) {
                  var t
                  if (e)
                    if (c) E.always(e[E.status])
                    else for (t in e) b[t] = [b[t], e[t]]
                  return this
                },
                abort: function (e) {
                  var t = e || w
                  return r && r.abort(t), T(0, t), this
                }
              }
            if (
              (v.promise(E),
              (h.url = ((e || h.url || kt.href) + '').replace(
                It,
                kt.protocol + '//'
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || '*').toLowerCase().match(R) || [
                ''
              ]),
              null == h.crossDomain)
            ) {
              l = a.createElement('a')
              try {
                ;(l.href = h.url),
                  (l.href = l.href),
                  (h.crossDomain =
                    Wt.protocol + '//' + Wt.host != l.protocol + '//' + l.host)
              } catch (e) {
                h.crossDomain = !0
              }
            }
            if (
              (h.data &&
                h.processData &&
                'string' != typeof h.data &&
                (h.data = C.param(h.data, h.traditional)),
              Ut(Mt, h, t, E),
              c)
            )
              return E
            for (d in ((f = C.event && h.global) &&
              0 == C.active++ &&
              C.event.trigger('ajaxStart'),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Rt.test(h.type)),
            (i = h.url.replace(Pt, '')),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || '').indexOf(
                    'application/x-www-form-urlencoded'
                  ) &&
                (h.data = h.data.replace(Lt, '+'))
              : ((p = h.url.slice(i.length)),
                h.data &&
                  (h.processData || 'string' == typeof h.data) &&
                  ((i += (Ft.test(i) ? '&' : '?') + h.data), delete h.data),
                !1 === h.cache &&
                  ((i = i.replace(Ot, '$1')),
                  (p = (Ft.test(i) ? '&' : '?') + '_=' + Dt++ + p)),
                (h.url = i + p)),
            h.ifModified &&
              (C.lastModified[i] &&
                E.setRequestHeader('If-Modified-Since', C.lastModified[i]),
              C.etag[i] && E.setRequestHeader('If-None-Match', C.etag[i])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              E.setRequestHeader('Content-Type', h.contentType),
            E.setRequestHeader(
              'Accept',
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ('*' !== h.dataTypes[0] ? ', ' + $t + '; q=0.01' : '')
                : h.accepts['*']
            ),
            h.headers))
              E.setRequestHeader(d, h.headers[d])
            if (h.beforeSend && (!1 === h.beforeSend.call(m, E, h) || c))
              return E.abort()
            if (
              ((w = 'abort'),
              y.add(h.complete),
              E.done(h.success),
              E.fail(h.error),
              (r = Ut(zt, h, t, E)))
            ) {
              if (((E.readyState = 1), f && g.trigger('ajaxSend', [E, h]), c))
                return E
              h.async &&
                h.timeout > 0 &&
                (s = n.setTimeout(function () {
                  E.abort('timeout')
                }, h.timeout))
              try {
                ;(c = !1), r.send(x, T)
              } catch (e) {
                if (c) throw e
                T(-1, e)
              }
            } else T(-1, 'No Transport')
            function T (e, t, a, u) {
              var l,
                d,
                p,
                x,
                A,
                w = t
              c ||
                ((c = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (o = u || ''),
                (E.readyState = e > 0 ? 4 : 0),
                (l = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function (e, t, n) {
                    for (
                      var r, i, o, a, u = e.contents, s = e.dataTypes;
                      '*' === s[0];

                    )
                      s.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader('Content-Type'))
                    if (r)
                      for (i in u)
                        if (u[i] && u[i].test(r)) {
                          s.unshift(i)
                          break
                        }
                    if (s[0] in n) o = s[0]
                    else {
                      for (i in n) {
                        if (!s[0] || e.converters[i + ' ' + s[0]]) {
                          o = i
                          break
                        }
                        a || (a = i)
                      }
                      o = o || a
                    }
                    if (o) return o !== s[0] && s.unshift(o), n[o]
                  })(h, E, a)),
                (x = (function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    u,
                    s,
                    l = {},
                    c = e.dataTypes.slice()
                  if (c[1])
                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !s &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (s = o),
                      (o = c.shift()))
                    )
                      if ('*' === o) o = s
                      else if ('*' !== s && s !== o) {
                        if (!(a = l[s + ' ' + o] || l['* ' + o]))
                          for (i in l)
                            if (
                              (u = i.split(' '))[1] === o &&
                              (a = l[s + ' ' + u[0]] || l['* ' + u[0]])
                            ) {
                              !0 === a
                                ? (a = l[i])
                                : !0 !== l[i] && ((o = u[0]), c.unshift(u[1]))
                              break
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t)
                          else
                            try {
                              t = a(t)
                            } catch (e) {
                              return {
                                state: 'parsererror',
                                error: a
                                  ? e
                                  : 'No conversion from ' + s + ' to ' + o
                              }
                            }
                      }
                  return { state: 'success', data: t }
                })(h, x, E, l)),
                l
                  ? (h.ifModified &&
                      ((A = E.getResponseHeader('Last-Modified')) &&
                        (C.lastModified[i] = A),
                      (A = E.getResponseHeader('etag')) && (C.etag[i] = A)),
                    204 === e || 'HEAD' === h.type
                      ? (w = 'nocontent')
                      : 304 === e
                      ? (w = 'notmodified')
                      : ((w = x.state), (d = x.data), (l = !(p = x.error))))
                  : ((p = w), (!e && w) || ((w = 'error'), e < 0 && (e = 0))),
                (E.status = e),
                (E.statusText = (t || w) + ''),
                l ? v.resolveWith(m, [d, w, E]) : v.rejectWith(m, [E, w, p]),
                E.statusCode(b),
                (b = void 0),
                f &&
                  g.trigger(l ? 'ajaxSuccess' : 'ajaxError', [E, h, l ? d : p]),
                y.fireWith(m, [E, w]),
                f &&
                  (g.trigger('ajaxComplete', [E, h]),
                  --C.active || C.event.trigger('ajaxStop')))
            }
            return E
          },
          getJSON: function (e, t, n) {
            return C.get(e, t, n, 'json')
          },
          getScript: function (e, t) {
            return C.get(e, void 0, t, 'script')
          }
        }),
        C.each(['get', 'post'], function (e, t) {
          C[t] = function (e, n, r, i) {
            return (
              y(n) && ((i = i || r), (r = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  C.isPlainObject(e) && e
                )
              )
            )
          }
        }),
        (C._evalUrl = function (e, t) {
          return C.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (e) {
              C.globalEval(e, t)
            }
          })
        }),
        C.fn.extend({
          wrapAll: function (e) {
            var t
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild
                    return e
                  })
                  .append(this)),
              this
            )
          },
          wrapInner: function (e) {
            return y(e)
              ? this.each(function (t) {
                  C(this).wrapInner(e.call(this, t))
                })
              : this.each(function () {
                  var t = C(this),
                    n = t.contents()
                  n.length ? n.wrapAll(e) : t.append(e)
                })
          },
          wrap: function (e) {
            var t = y(e)
            return this.each(function (n) {
              C(this).wrapAll(t ? e.call(this, n) : e)
            })
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not('body')
                .each(function () {
                  C(this).replaceWith(this.childNodes)
                }),
              this
            )
          }
        }),
        (C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e)
        }),
        (C.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          )
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest()
          } catch (e) {}
        })
      var Yt = { 0: 200, 1223: 204 },
        Xt = C.ajaxSettings.xhr()
      ;(v.cors = !!Xt && 'withCredentials' in Xt),
        (v.ajax = Xt = !!Xt),
        C.ajaxTransport(function (e) {
          var t, r
          if (v.cors || (Xt && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  u = e.xhr()
                if (
                  (u.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) u[a] = e.xhrFields[a]
                for (a in (e.mimeType &&
                  u.overrideMimeType &&
                  u.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i['X-Requested-With'] ||
                  (i['X-Requested-With'] = 'XMLHttpRequest'),
                i))
                  u.setRequestHeader(a, i[a])
                ;(t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        u.onload =
                        u.onerror =
                        u.onabort =
                        u.ontimeout =
                        u.onreadystatechange =
                          null),
                      'abort' === e
                        ? u.abort()
                        : 'error' === e
                        ? 'number' != typeof u.status
                          ? o(0, 'error')
                          : o(u.status, u.statusText)
                        : o(
                            Yt[u.status] || u.status,
                            u.statusText,
                            'text' !== (u.responseType || 'text') ||
                              'string' != typeof u.responseText
                              ? { binary: u.response }
                              : { text: u.responseText },
                            u.getAllResponseHeaders()
                          ))
                  }
                }),
                  (u.onload = t()),
                  (r = u.onerror = u.ontimeout = t('error')),
                  void 0 !== u.onabort
                    ? (u.onabort = r)
                    : (u.onreadystatechange = function () {
                        4 === u.readyState &&
                          n.setTimeout(function () {
                            t && r()
                          })
                      }),
                  (t = t('abort'))
                try {
                  u.send((e.hasContent && e.data) || null)
                } catch (e) {
                  if (t) throw e
                }
              },
              abort: function () {
                t && t()
              }
            }
        }),
        C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1)
        }),
        C.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (e) {
              return C.globalEval(e), e
            }
          }
        }),
        C.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = 'GET')
        }),
        C.ajaxTransport('script', function (e) {
          var t, n
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                ;(t = C('<script>')
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i('error' === e.type ? 404 : 200, e.type)
                    })
                  )),
                  a.head.appendChild(t[0])
              },
              abort: function () {
                n && n()
              }
            }
        })
      var Gt,
        Jt = [],
        Qt = /(=)\?(?=&|$)|\?\?/
      C.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var e = Jt.pop() || C.expando + '_' + Dt++
          return (this[e] = !0), e
        }
      }),
        C.ajaxPrefilter('json jsonp', function (e, t, r) {
          var i,
            o,
            a,
            u =
              !1 !== e.jsonp &&
              (Qt.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  0 ===
                    (e.contentType || '').indexOf(
                      'application/x-www-form-urlencoded'
                    ) &&
                  Qt.test(e.data) &&
                  'data')
          if (u || 'jsonp' === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              u
                ? (e[u] = e[u].replace(Qt, '$1' + i))
                : !1 !== e.jsonp &&
                  (e.url += (Ft.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
              (e.converters['script json'] = function () {
                return a || C.error(i + ' was not called'), a[0]
              }),
              (e.dataTypes[0] = 'json'),
              (o = n[i]),
              (n[i] = function () {
                a = arguments
              }),
              r.always(function () {
                void 0 === o ? C(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(i)),
                  a && y(o) && o(a[0]),
                  (a = o = void 0)
              }),
              'script'
            )
        }),
        (v.createHTMLDocument =
          (((Gt = a.implementation.createHTMLDocument('').body).innerHTML =
            '<form></form><form></form>'),
          2 === Gt.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
          return 'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t =
                      a.implementation.createHTMLDocument('')).createElement(
                      'base'
                    )).href = a.location.href),
                    t.head.appendChild(r))
                  : (t = a)),
              (o = !n && []),
              (i = j.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Ee([e], t, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], i.childNodes)))
          var r, i, o
        }),
        (C.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            u = e.indexOf(' ')
          return (
            u > -1 && ((r = xt(e.slice(u))), (e = e.slice(0, u))),
            y(t)
              ? ((n = t), (t = void 0))
              : t && 'object' == typeof t && (i = 'POST'),
            a.length > 0 &&
              C.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                .done(function (e) {
                  ;(o = arguments),
                    a.html(r ? C('<div>').append(C.parseHTML(e)).find(r) : e)
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e])
                      })
                    }
                ),
            this
          )
        }),
        C.each(
          [
            'ajaxStart',
            'ajaxStop',
            'ajaxComplete',
            'ajaxError',
            'ajaxSuccess',
            'ajaxSend'
          ],
          function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e)
            }
          }
        ),
        (C.expr.pseudos.animated = function (e) {
          return C.grep(C.timers, function (t) {
            return e === t.elem
          }).length
        }),
        (C.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              u,
              s,
              l = C.css(e, 'position'),
              c = C(e),
              f = {}
            'static' === l && (e.style.position = 'relative'),
              (u = c.offset()),
              (o = C.css(e, 'top')),
              (s = C.css(e, 'left')),
              ('absolute' === l || 'fixed' === l) &&
              (o + s).indexOf('auto') > -1
                ? ((a = (r = c.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(s) || 0)),
              y(t) && (t = t.call(e, n, C.extend({}, u))),
              null != t.top && (f.top = t.top - u.top + a),
              null != t.left && (f.left = t.left - u.left + i),
              'using' in t ? t.using.call(e, f) : c.css(f)
          }
        }),
        C.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    C.offset.setOffset(this, e, t)
                  })
            var t,
              n,
              r = this[0]
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 }
              if ('fixed' === C.css(r, 'position'))
                t = r.getBoundingClientRect()
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  'static' === C.css(e, 'position');

                )
                  e = e.parentNode
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = C(e).offset()).top += C.css(e, 'borderTopWidth', !0)),
                  (i.left += C.css(e, 'borderLeftWidth', !0)))
              }
              return {
                top: t.top - i.top - C.css(r, 'marginTop', !0),
                left: t.left - i.left - C.css(r, 'marginLeft', !0)
              }
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && 'static' === C.css(e, 'position');

              )
                e = e.offsetParent
              return e || ae
            })
          }
        }),
        C.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (e, t) {
            var n = 'pageYOffset' === t
            C.fn[e] = function (r) {
              return U(
                this,
                function (e, r, i) {
                  var o
                  if (
                    (b(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r]
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i)
                },
                e,
                r,
                arguments.length
              )
            }
          }
        ),
        C.each(['top', 'left'], function (e, t) {
          C.cssHooks[t] = Xe(v.pixelPosition, function (e, n) {
            if (n)
              return (n = Ye(e, t)), _e.test(n) ? C(e).position()[t] + 'px' : n
          })
        }),
        C.each({ Height: 'height', Width: 'width' }, function (e, t) {
          C.each(
            { padding: 'inner' + e, content: t, '': 'outer' + e },
            function (n, r) {
              C.fn[r] = function (i, o) {
                var a = arguments.length && (n || 'boolean' != typeof i),
                  u = n || (!0 === i || !0 === o ? 'margin' : 'border')
                return U(
                  this,
                  function (t, n, i) {
                    var o
                    return b(t)
                      ? 0 === r.indexOf('outer')
                        ? t['inner' + e]
                        : t.document.documentElement['client' + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body['scroll' + e],
                          o['scroll' + e],
                          t.body['offset' + e],
                          o['offset' + e],
                          o['client' + e]
                        ))
                      : void 0 === i
                      ? C.css(t, n, u)
                      : C.style(t, n, i, u)
                  },
                  t,
                  a ? i : void 0,
                  a
                )
              }
            }
          )
        }),
        C.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function (e, t) {
            C.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t)
            }
          }
        ),
        C.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
          }
        }),
        C.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n)
          },
          unbind: function (e, t) {
            return this.off(e, null, t)
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, '**')
              : this.off(t, e || '**', n)
          }
        }),
        (C.proxy = function (e, t) {
          var n, r, i
          if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (r = s.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, r.concat(s.call(arguments)))
              }).guid = e.guid =
                e.guid || C.guid++),
              i
            )
        }),
        (C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0)
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = B),
        (C.isFunction = y),
        (C.isWindow = b),
        (C.camelCase = G),
        (C.type = w),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
          var t = C.type(e)
          return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
        }),
        void 0 ===
          (r = function () {
            return C
          }.apply(t, [])) || (e.exports = r)
      var Kt = n.jQuery,
        Zt = n.$
      return (
        (C.noConflict = function (e) {
          return (
            n.$ === C && (n.$ = Zt), e && n.jQuery === C && (n.jQuery = Kt), C
          )
        }),
        i || (n.jQuery = n.$ = C),
        C
      )
    })
  },
  function (e, t, n) {
    'use strict'
    function r (e) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function i (e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    n.d(t, 'a', function () {
      return o
    })
    var o = (function () {
      function e (t, n) {
        var r = this,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if (
          ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
          !t)
        )
          throw 'Invalid form param'
        n &&
          (Object.keys(n).forEach(function (e) {
            if (!t.querySelector('input[name="'.concat(e, '"]')))
              throw ''.concat(e, ' is not a valid input in the form.')
          }),
          (this.rules = n))
        ;(this.form = t),
          (this.validationResults = {}),
          (this.validationMsgsConfig = i),
          (this.validationStatus = !0),
          document.addEventListener('registrationError', function (e) {
            var t = e.detail.response.data.errors,
              n = r.form.querySelectorAll('[data-general-error]')
            n.forEach(function (e) {
              e.innerText = ''
            })
            var i = function (e) {
              if (t.hasOwnProperty(e))
                if (r.form.querySelector('input[name="'.concat(e, '"]')))
                  r.invalidate(e)
                else {
                  var i = r.form.querySelector(
                      '[data-for-rule="'.concat(e, '"]')
                    ),
                    o = r.form.querySelector(
                      '[data-default-error-for="'.concat(e, '"]')
                    )
                  i && !i.innerText.includes('funnel::')
                    ? n.forEach(function (e) {
                        e.innerHTML += i.innerText + '</br>'
                      })
                    : o
                    ? n.forEach(function (e) {
                        e.innerHTML += o.innerText + '</br>'
                      })
                    : n.forEach(function (n) {
                        n.innerHTML += t[e] + '</br>'
                      }),
                    n.forEach(function (e) {
                      e.classList.contains('hidden') &&
                        e.classList.remove('hidden')
                    })
                }
            }
            for (var o in t) i(o)
            r.updateValidationState()
          })
      }
      var t, n, o
      return (
        (t = e),
        (n = [
          {
            key: 'validate',
            value: function () {
              for (
                var e = this, t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              if (n.length)
                n.forEach(function (t) {
                  var n = {}
                  if (!(t in e.rules))
                    throw ''.concat(t, ' has no rules associated with it')
                  var r = t,
                    i = e.rules[r].split('|'),
                    o = (t = e.form.querySelector(
                      'input[name="'.concat(r, '"]')
                    )).value
                  i.forEach(function (t) {
                    var r = t.split(':').map(function (e) {
                      return e.trim()
                    })[0]
                    ;(n[r] = e.testRule(t, o)),
                      n[r] || (e.validationStatus = !1)
                  }),
                    (e.validationResults[r] = n)
                })
              else {
                var i = Object.keys(this.rules)
                i.forEach(function (t) {
                  return e.validate(t)
                })
              }
            }
          },
          {
            key: 'getInputValidity',
            value: function (e) {
              var t = this.validationResults[e]
              for (var n in t) if (t.hasOwnProperty(n) && !t[n]) return !1
              return !0
            }
          },
          {
            key: 'updateValidationStatus',
            value: function () {
              for (var e in ((this.validationStatus = !0),
              this.validationResults))
                if (this.validationResults.hasOwnProperty(e)) {
                  var t = this.validationResults[e]
                  for (var n in t)
                    t.hasOwnProperty(n) &&
                      (t[n] || (this.validationStatus = !1))
                }
            }
          },
          {
            key: 'invalidate',
            value: function () {
              for (
                var e = this, t = arguments.length, n = new Array(t), i = 0;
                i < t;
                i++
              )
                n[i] = arguments[i]
              if (!n.length) throw 'No input parameteres supplied to invalidate'
              n.forEach(function (t) {
                var n,
                  i,
                  o = {}
                if ('string' == typeof t)
                  (i = t),
                    e.validationResults.hasOwnProperty(i) &&
                      (o = e.validationResults[i]),
                    (n = e.rules[i].split('|')).forEach(function (e) {
                      var t = e.split(':').map(function (e) {
                        return e.trim()
                      })[0]
                      o[t] = !1
                    }),
                    (e.validationResults[i] = o)
                else if (Array.isArray(t))
                  t.forEach(function (t) {
                    if (Array.isArray(t) || 'object' !== r(t))
                      throw 'Supplied parameter is invalid. Read the description of the invalidate method.'
                    for (var a in t)
                      if (t.hasOwnProperty(a)) {
                        if (!Array.isArray(t[a]))
                          throw 'Supplied parameter is invalid. Read the description of the invalidate method.'
                        ;(n = t[a]),
                          (i = a),
                          e.validationResults.hasOwnProperty(i) &&
                            (o = e.validationResults[i]),
                          n.forEach(function (e) {
                            var t = e.split(':').map(function (e) {
                              return e.trim()
                            })[0]
                            o[t] = !1
                          })
                      }
                    ;(e.validationResults[i] = o), (o = {})
                  })
                else if ('object' === r(t)) {
                  for (var a in t)
                    t.hasOwnProperty(a) &&
                      ((n = t[a]),
                      (i = a),
                      e.validationResults.hasOwnProperty(i) &&
                        (o = e.validationResults[i]),
                      n.forEach(function (e) {
                        var t = e.split(':').map(function (e) {
                          return e.trim()
                        })[0]
                        o[t] = !1
                      }))
                  e.validationResults[i] = o
                }
              })
            }
          },
          {
            key: 'testRule',
            value: function (e, t) {
              var n = null,
                r =
                  (e = e.split(':').map(function (e) {
                    return e.trim()
                  })).length > 1 && e[1]
              if (e[0].toLowerCase().includes('length') && !r)
                throw 'Value not supplied for length rule: '.concat(e[0])
              switch (e[0]) {
                case 'required':
                  n = '' !== t
                  break
                case 'minLength':
                  n = !(t.length < r)
                  break
                case 'maxLength':
                  n = !(t.length > r)
                  break
                case 'onlyLetters':
                  n =
                    /^[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\s]*$/.test(
                      t
                    )
                  break
                case 'email':
                  n =
                    /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/.test(
                      t
                    )
              }
              if (null === n) {
                var i
                try {
                  new RegExp(e[1])
                  var o = e[1].replace(/.*\/([gimy]*)$/, '$1'),
                    a = e[1].replace(new RegExp('^/(.*?)/' + o + '$'), '$1')
                  i = new RegExp(a, o)
                } catch (t) {
                  throw 'Supplied rule is an invalid regular expression: '.concat(
                    e
                  )
                }
                n = i.test(t)
              }
              return n
            }
          },
          {
            key: 'updateValidationState',
            value: function () {
              var e = this.form.querySelectorAll('[data-for-rule]'),
                t = []
              for (var n in (e.forEach(function (e) {
                t.push(e.getAttribute('data-for-rule').toLowerCase())
              }),
              this.validationResults))
                if (this.validationResults.hasOwnProperty(n)) {
                  var r = this.validationResults[n],
                    i = 'default' !== this.validationMsgsConfig[n],
                    o = !0,
                    a = this.form.querySelector('input[name="'.concat(n, '"]')),
                    u = '',
                    s = this.form.querySelector(
                      '[data-for-error="'.concat(n, '"]')
                    )
                  if (!s) {
                    console.log(
                      'No validation error supplied for input: '.concat(n)
                    )
                    continue
                  }
                  var l = this.form.querySelector(
                    '[data-check-icon-for="'.concat(n, '"]')
                  )
                  for (var c in r)
                    if (r.hasOwnProperty(c)) {
                      if ((r[c] || (o = !1), !i)) continue
                      if (!t.includes(c.toLowerCase())) {
                        i = !1
                        continue
                      }
                      this.form
                        .querySelector('[data-for-rule="'.concat(c, '"]'))
                        .innerText.includes('funnel::') && (i = !1)
                    }
                  if (i) {
                    for (var f in r)
                      r.hasOwnProperty(f) &&
                        !r[f] &&
                        (u +=
                          this.form.querySelector(
                            '[data-for-rule="'.concat(f, '"]')
                          ).innerText + '<br>')
                    s.innerHTML = u
                  } else
                    s.innerText.includes('funnel::') &&
                      (s.innerText = this.form.querySelector(
                        '[data-default-error-for="'.concat(n, '"]')
                      ).innerText)
                  o
                    ? (a.setAttribute('data-validation-status', 'passed'),
                      s.setAttribute('data-error-status', 'inactive'),
                      l && l.setAttribute('data-check-icon', 'active'))
                    : (a.setAttribute('data-validation-status', 'failed'),
                      s.setAttribute('data-error-status', 'active'),
                      l && l.setAttribute('data-check-icon', 'inactive'))
                }
            }
          }
        ]) && i(t.prototype, n),
        o && i(t, o),
        e
      )
    })()
  },
  function (e, t, n) {
    e.exports = n(3)
  },
  function (e, t, n) {
    'use strict'
    n.r(t),
      function (e) {
        n(4), n(5), n(7), n(8)
        e('.faq-item-title').on('click', function () {
          e(this).closest('.faq-item').toggleClass('active')
        }),
          e('.what-item-title').on('click', function () {
            e(this).closest('.what-item').toggleClass('active')
          }),
          e('.scroll-top-btn').on('click', function (t) {
            t.preventDefault(),
              e([document.documentElement, document.body]).animate(
                { scrollTop: e(e(this).attr('href')).offset().top },
                1e3
              )
          })
      }.call(this, n(0))
  },
  function (e, t, n) {},
  function (e, t, n) {
    'use strict'
    ;(function (e) {
      n(6)
      var t,
        r = n(1),
        i = {
          first_name: 'required|minLength:2',
          last_name: 'required|minLength:2',
          email: 'required|email'
        },
        o = document.querySelectorAll('[data-id="form"]'),
        a = []
      function u (e, t) {
        a[t].validate(e), a[t].updateValidationState()
      }
      function s (e) {
        if ('de' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Bei der Bearbeitung Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.'
              break
            case 'You are already registered in our system.':
              e = 'Sie sind bereits in unserem System registriert.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Es scheint, dass Sie keine gültige Telefonnummer eingegeben haben. Bitte geben Sie Ihre Telefonnummer an, um exklusive Hilfe zu erhalten.'
              break
            case 'The phone field is required.':
              e = 'Das Feld Telefonnummer ist erforderlich.'
              break
            case 'Please agree to the terms of service.':
              e = 'Bitte stimmen Sie den Nutzungsbedingungen zu.'
          }
        if ('it' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                "C'è stato un errore nel processare la tua richiesta, riprova più tardi."
              break
            case 'You are already registered in our system.':
              e = 'Sei già registrato nel nostro sistema.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Sembra che tu non abbia inserito un numero di telefono valido. Inserisci il tuo numero di telefono per ricevere assistenza esclusiva.'
              break
            case 'The phone field is required.':
              e = 'Il campo relativo al telefono è richiesto.'
              break
            case 'Please agree to the terms of service.':
              e = 'Si prega di accettare i termini di servizio.'
          }
        if ('es' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Hubo un error al procesar su solicitud, por favor intente de nuevo.'
              break
            case 'You are already registered in our system.':
              e = 'Ya está registrado en nuestro sistema.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Parece que no ingrese un telefono valido. Por favor ingrese un teléfono real para recibir ayuda personalizada.'
              break
            case 'The phone field is required.':
              e = 'El campo del teléfono es obligatorio.'
              break
            case 'Please agree to the terms of service.':
              e = 'Por favor acepte los términos de servicio.'
          }
        if ('nl' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Er is een fout opgetreden bij het verwerken van uw verzoek, probeer het later nog eens.'
              break
            case 'You are already registered in our system.':
              e = 'U bent al geregistreerd in ons systeem.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Het lijkt erop dat u geen geldig telefoonnummer hebt ingevoerd. Vul uw telefoonnummer in om exclusieve hulp te krijgen.'
              break
            case 'The phone field is required.':
              e = 'Het telefoonveld is verplicht.'
              break
            case 'Please agree to the terms of service.':
              e = 'Ga akkoord met de servicevoorwaarden.'
          }
        if ('no' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Det oppstod en feil under behandling av forespørselen. Prøv igjen senere.'
              break
            case 'You are already registered in our system.':
              e = 'Du er allerede registrert i vårt system.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Det ser ut til at du ikke har lagt inn et gyldig telefonnummer. Skriv inn telefonnummeret for å få personlig assistanse.'
              break
            case 'The phone field is required.':
              e = 'Telefonfeltet er obligatorisk.'
              break
            case 'Please agree to the terms of service.':
              e = 'Du må godta brukervilkårene.'
          }
        if ('da' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Der opstod en fejl under behandlingen af din anmodning. Prøv venligst igen senere.'
              break
            case 'You are already registered in our system.':
              e = 'Du er allerede registreret i vores system.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Det ser ud til, at du ikke har indtastet et gyldigt telefonnummer. Indtast venligst dit telefonnummer for at få eksklusiv hjælp.'
              break
            case 'The phone field is required.':
              e = 'Feltet for telefon er påkrævet.'
              break
            case 'Please agree to the terms of service.':
              e = 'Accepter venligst servicevilkårene.'
          }
        if ('fr' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                "Une erreur s'est produite lors du traitement de votre demande, veuillez réessayer plus tard."
              break
            case 'You are already registered in our system.':
              e = 'Vous êtes déjà inscrit(e) dans notre système.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                "Apparemment, vous n'avez pas saisi un numéro de téléphone valide. Veuillez entrer votre numéro de téléphone pour obtenir une assistance exclusive."
              break
            case 'The phone field is required.':
              e = "Le champ 'téléphone' est obligatoire."
              break
            case 'Please agree to the terms of service.':
              e = 'Veuillez accepter les conditions de service.'
          }
        if ('sv' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Det uppstod ett fel när din begäran skulle behandlas, försök igen senare.'
              break
            case 'You are already registered in our system.':
              e = 'Du är redan registrerad i vårt system.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Det verkar som att du inte har angett ett giltigt telefonnummer. Ange ditt telefonnummer för att få exklusiv hjälp.'
              break
            case 'The phone field is required.':
              e = "Le champ 'téléphone' est obligatoire."
              break
            case 'Please agree to the terms of service.':
              e = 'Godkänn användarvillkoren.'
          }
        if ('pl' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Wystąpił błąd w przetwarzaniu Twojego żądania, proszę spróbować ponownie później.'
              break
            case 'You are already registered in our system.':
              e = 'Jesteś już zarejestrowany w naszym systemie.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Wygląda na to, że nie wprowadziłeś prawidłowego numeru telefonu. Podaj swój numer telefonu, aby uzyskać kompleksową pomoc.'
              break
            case 'The phone field is required.':
              e = 'Pole telefonu jest wymagane.'
              break
            case 'Please agree to the terms of service.':
              e = 'Prosimy o wyrażenie zgody na warunki korzystania z serwisu.'
          }
        if ('br' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Ocorreu um erro no processamento de seu pedido, por favor, tente novamente mais tarde.'
              break
            case 'You are already registered in our system.':
              e = 'Você já está registrado em nosso sistema.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Parece que você não inseriu um número de telefone válido. Por favor, digite seu número de telefone a fim de obter ajuda exclusiva.'
              break
            case 'The phone field is required.':
              e = 'O campo de telefone é obrigatório.'
              break
            case 'Please agree to the terms of service.':
              e = 'Por favor, concorde com os termos de serviço.'
          }
        if ('gr' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Παρουσιάστηκε σφάλμα κατά την επεξεργασία του αιτήματός σας. Δοκιμάστε ξανά αργότερα.'
              break
            case 'You are already registered in our system.':
              e = 'Έχετε ήδη εγγραφεί στο σύστημά μας.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Φαίνεται ότι δεν εισάγατε έγκυρο αριθμό τηλεφώνου. Πληκτρολογήστε τον αριθμό τηλεφώνου σας για να λάβετε αποκλειστική βοήθεια.'
              break
            case 'The phone field is required.':
              e = 'O campo de telefone é obrigatório.'
          }
        if ('ae' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e = 'حدث خطأ أثناء معالجة طلبك، يرجى إعادة المحاولة في وقت لاحق.'
              break
            case 'You are already registered in our system.':
              e = 'أنت مسجل بالفعل لدينا.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'يبدو أنك لم تدخل رقم هاتف صحيح.  يرجى إدخال رقم هاتفك للحصول على المساعدة الحصرية'
              break
            case 'The phone field is required.':
              e = 'حقل رقم الهاتف مطلوب.'
          }
        if ('hu' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e = 'Hiba történt kérése feldolgozása során, próbálja meg később!'
              break
            case 'You are already registered in our system.':
              e = 'Már regisztrált a rendszerünkben.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Úgy tűnik, nem érvényes telefonszámot adott meg. Kérjük, érvényes telefonszámot adjon meg, hiszen csak így tudunk személyre szabott segítséget nyújtani.'
              break
            case 'The phone field is required.':
              e = 'A telefonszám mező kitöltése kötelező.'
              break
            case 'Please agree to the terms of service.':
              e = 'Kérjük, fogadja el a felhasználói feltételeket.'
          }
        if ('ro' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'A apărut o eroare la procesarea solicitării dvs., vă rugăm să încercați din nou mai târziu.'
              break
            case 'You are already registered in our system.':
              e = 'Deja sunteți înregistrat în sistemul nostru.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Se pare că ați introdus un număr de telefon nevalid. Vă rugăm să introduceți numărul dvs. de telefon pentru a obține ajutor exclusiv.'
              break
            case 'The phone field is required.':
              e = 'Câmpul cu numărul de telefon e obligatoriu.'
              break
            case 'Please agree to the terms of service.':
              e = 'Vă rugăm să acceptați termenii și condițiile.'
          }
        if ('tr' == t)
          switch (e) {
            case 'There was an error processing your request, please try again later.':
              e =
                'Talebiniz işlenirken bir hata oluştu, lütfen daha sonra tekrar deneyin.'
              break
            case 'You are already registered in our system.':
              e = 'Sistemimize zaten kayıt olmuştunuz.'
              break
            case "It seems like you didn't enter a valid phone number. Please enter your phone number in order to get exclusive help from one of our specialists!":
              e =
                'Geçerli bir telefon numarası girmemiş gibi görünüyorsunuz. Lütfen özel yardım almak için telefon numaranızı girin.'
              break
            case 'The phone field is required.':
              e = 'Telefon alanı zorunludur.'
              break
            case 'Please agree to the terms of service.':
              e = 'Lütfen hizmet şartlarını kabul edin.'
          }
        return e
      }
      o.forEach(function (e, t) {
        if (null !== e) {
          a.push(new r.a(e, i, { phone: 'default' }))
          var n = e.querySelector('input[name="first_name"]'),
            o = e.querySelector('input[name="last_name"]'),
            s = e.querySelector('input[name="email"]')
          e.querySelector('input[name="phone"]')
          n.addEventListener('input', function () {
            return u(n.getAttribute('name'), t)
          }),
            o.addEventListener('input', function () {
              return u(o.getAttribute('name'), t)
            }),
            s.addEventListener('input', function () {
              return u(s.getAttribute('name'), t)
            })
        }
      }),
        e('[data-id="form"]').submit(function (n) {
          var r = document.head.querySelector(
            '[name~=isoCode][content]'
          ).content
          n.preventDefault()
          var i = e(this),
            o = e(this).attr('data-lang')
              ? '/' + e(this).attr('data-lang')
              : '',
            u = e(this).serializeArray()
          if (
            ((t = e(this).attr('data-lang')),
            i.find('.alert').text('').addClass('hidden'),
            i.find('[name=agree]').length &&
              !i.find('[name=agree]').is(':checked'))
          )
            return (
              e('#openModalLoading').addClass('open'),
              setTimeout(function () {
                e('#openModalLoading').removeClass('open'),
                  i.find('.alert').text('').removeClass('hidden'),
                  i
                    .find('.alert')
                    .append(
                      s('Please agree to the terms of service.') + '<br />'
                    )
              }, 1200),
              !1
            )
          var l = e('[data-id="form"]').toArray().indexOf(this)
            a[l].validate(), 
            a[l].updateValidationState(),
            a[l].updateValidationStatus(),
            a[l].validationStatus &&
              (e('#openModalLoading').addClass('open'),
              window.location.href.indexOf('stest') > -1 &&
                u.push({ name: 'stest', value: !0 }),
              u.push(
                { name: 'lang', value:language },
                { name: 'isoCode', value: r } , 
                { name: 'ip', value: ip } , 
                { name: 'sub_1', value: aff_sub1 } , 
                { name: 'sub_2', value: aff_sub2 } , 
                { name: 'sub_3', value: aff_sub3 } , 
                { name: 'sub_4', value: aff_sub4 } , 
                { name: 'country', value: country } , 
                {name : "brandName" ,  value : brandName}

              ),
             
              e.ajax({
                url: 'temporary/test.php',  
                type: 'POST',
                data: u,
                success: function (data) {
 
                 if( data != "") {
                  console.log(data.errorMessage) ;
                  e('#openModalLoading').removeClass('open') ; 
                  i.find('.alert').append(data.errorMessage + '<br />');
                  i.find('.alert').removeClass("hidden") ; 




                 }
                 else {
                  let redirect_link  =  data.message.details.redirect.url
                  e.redirect("thankyou/thankyou/index.html");
                  setTimeout(function() {
                    window.location.href =redirect_link; // Replace with the redirect URL
                  }, 5000);

                 }
                
                  

                },
                error: function (t) {
                    console.log(t.responseText); // Add this line to log the response
                    setTimeout(function () {
                        e('#openModalLoading').removeClass('open'),
                        i.find('.alert').text('').removeClass('hidden');
                        i.find('.alert').append(t.responseText + '<br />');
                    }, 1200);
                }
              }))
        })
    }.call(this, n(0)))
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (e) {
        'use strict'
        var t = {
          url: null,
          values: null,
          method: 'POST',
          target: null,
          traditional: !1,
          redirectTop: !1
        }
        ;(e.redirect = function (n, r, i, o, a, u) {
          var s = n
          if ('object' != typeof n)
            s = {
              url: n,
              values: r,
              method: i,
              target: o,
              traditional: a,
              redirectTop: u
            }
          var l = e.extend({}, t, s),
            c = e.redirect.getForm(
              l.url,
              l.values,
              l.method,
              l.target,
              l.traditional
            )
          e('body', l.redirectTop ? window.top.document : void 0).append(
            c.form
          ),
            c.submit(),
            c.form.remove()
        }),
          (e.redirect.getForm = function (t, i, o, a, u) {
            o =
              o &&
              -1 !== ['GET', 'POST', 'PUT', 'DELETE'].indexOf(o.toUpperCase())
                ? o.toUpperCase()
                : 'POST'
            var s = (t = t.split('#'))[1] ? '#' + t[1] : ''
            if (((t = t[0]), !i)) {
              var l = e.parseUrl(t)
              ;(t = l.url), (i = l.params)
            }
            i = r(i)
            var c = e('<form>')
              .attr('method', o)
              .attr('action', t + s)
            a && c.attr('target', a)
            var f = c[0].submit
            return (
              n(i, [], c, null, u),
              {
                form: c,
                submit: function () {
                  f.call(c[0])
                }
              }
            )
          }),
          (e.parseUrl = function (e) {
            if (-1 === e.indexOf('?')) return { url: e, params: {} }
            var t = e.split('?'),
              n = t[1].split('&')
            e = t[0]
            var r,
              i,
              o = {}
            for (r = 0; r < n.length; r += 1) o[(i = n[r].split('='))[0]] = i[1]
            return { url: e, params: o }
          })
        var n = function (t, r, i, o, a) {
            var u = []
            Object.keys(t).forEach(function (s) {
              'object' == typeof t[s]
                ? ((u = r.slice()).push(s),
                  n(t[s], u, i, Array.isArray(t[s]), a))
                : i.append(
                    (function (t, n, r, i, o) {
                      var a
                      if (r.length > 0) {
                        var u
                        for (a = r[0], u = 1; u < r.length; u += 1)
                          a += '[' + r[u] + ']'
                        t = i && o ? a : a + '[' + t + ']'
                      }
                      return e('<input>')
                        .attr('type', 'hidden')
                        .attr('name', t)
                        .attr('value', n)
                    })(s, t[s], r, o, a)
                  )
            })
          },
          r = function (e) {
            for (
              var t = Object.getOwnPropertyNames(e), n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n]
              null === e[i] || void 0 === e[i]
                ? delete e[i]
                : 'object' == typeof e[i]
                ? (e[i] = r(e[i]))
                : e[i].length < 1 && delete e[i]
            }
            return e
          }
      })(e || window.Zepto || window.jqlite)
    }.call(this, n(0)))
  },
  function (e, t, n) {
    ;(function (e) {
      e('.js-contact-form').submit(function (t) {
        t.preventDefault(),
          e('#openModalLoading').addClass('open'),
          console.log('js-contact-form')
        var n = e(this),
          r = n.find('button').text()
        n.find('button').text('SENDING...')
        var i = n,
          o =
            '    <p>Name: ' +
            n.find('#name').val() +
            '</p>    <p>Email: ' +
            n.find('#email').val() +
            '</p>    <p>Messagee: ' +
            n.find('#message').val() +
            '</p>    '
        e.ajax({
          url: '/partials/send_mail.php',
          method: 'POST',
          data: {
            message: o,
            name: n.find('#name').val(),
            email: n.find('#email').val()
          },
          success: function (t) {
            setTimeout(function () {
              'success' == t &&
                (e('#exampleModal').addClass('open'), i[0].reset()),
                e('#openModalLoading').removeClass('open'),
                i.find('button').text(r)
            }, 1200)
          },
          error: function (t) {
            setTimeout(function () {
              e('#openModalLoading').removeClass('open'),
                i.find('button').text(r)
            }, 1200)
          }
        })
      }),
        e('[data-dismiss="modal"]').on('click', function (t) {
          e(this).closest('.modal').removeClass('open')
        })
    }.call(this, n(0)))
  },
  function (e, t, n) {
    ;(function (e) {
      var t = !1
      function n (e) {
        if (!t) {
          var n = document.createElement('script')
          return (
            (n.src = e),
            (n.className = 'phone-script'),
            document.body.appendChild(n),
            new Promise(function (e, t) {
              ;(n.onload = function () {
                e()
              }),
                (n.onerror = function () {
                  t()
                })
            })
          )
        }
      }
      setTimeout(function () {
        n(
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/js/intlTelInput.min.js'
        )
          .then(function () {
            n(
              'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/js/utils.js'
            )
              .then(function () {
                !(function () {
                  for (
                    var n = document.head.querySelector(
                        '[name~=isoCode][content]'
                      ).content,
                      r = document.getElementsByClassName('phone'),
                      i = document.getElementsByClassName('area_code'),
                      o = document.getElementsByClassName('iti'),
                      a = 0;
                    a < r.length;
                    a++
                  ) {
                    var u = intlTelInput(r[a], { initialCountry: n })
                    ;(o[a].style.width = '100%'),
                      (i[a].value = '+' + u.getSelectedCountryData().dialCode),
                      r[a].addEventListener('countrychange', function (t) {
                        var n = window.intlTelInputGlobals.getInstance(this)
                        e(this)
                          .closest('form')
                          .find('.area_code')
                          .val('+' + n.getSelectedCountryData().dialCode)
                      })
                  }
                  t = !0
                })()
              })
              .catch(function () {
                console.error(
                  'Script utils.js loading failed! Handle this error'
                )
              })
          })
          .catch(function () {
            console.error(
              'Script intlTelInput.min.js loading failed! Handle this error'
            )
          })
        var r = document.createElement('link')
        ;(r.rel = 'stylesheet'),
          (r.href =
            'data:text/css,' +
            escape(
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/css/intlTelInput.css');"
            )),
          document.getElementsByTagName('head')[0].appendChild(r)
      }, 800)
    }.call(this, n(0)))
  }
])