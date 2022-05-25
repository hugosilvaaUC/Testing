/*
 * tagContainer Generator v72
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2022-05-25 16:48:22 Europe/Paris
 * ---
 * Version	: 1.00
 * IDTC 	: 17
 * IDS		: 3601
 */
/*!compressed by terser*/ "undefined" == typeof tC &&
  ((void 0 !== document.domain && void 0 !== document.referrer) ||
    (document = window.document),
  (function (t, e) {
    var n,
      i = t.document,
      o = t.location,
      a =
        (t.navigator,
        t.tC,
        t.$,
        Array.prototype.push,
        Array.prototype.slice,
        Array.prototype.indexOf,
        Object.prototype.toString),
      r =
        (Object.prototype.hasOwnProperty,
        String.prototype.trim,
        function (t, e) {
          return new r.fn.init(t, e, n);
        }),
      c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      s = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      d = {};
    (r.containerStart = r.containerStart || Date.now()),
      (r.fn = r.prototype =
        {
          constructor: r,
          init: function (t, e, n) {
            var o, a, d;
            if (!t) return this;
            if (t.nodeType)
              return (this.context = this[0] = t), (this.length = 1), this;
            if ("string" == typeof t) {
              if (
                !(o =
                  "<" === t.charAt(0) &&
                  ">" === t.charAt(t.length - 1) &&
                  t.length >= 3
                    ? [null, t, null]
                    : c.exec(t)) ||
                (!o[1] && e)
              )
                return !e || e.tC
                  ? (e || n).find(t)
                  : this.constructor(e).find(t);
              if (o[1])
                return (
                  (d =
                    (e = e instanceof r ? e[0] : e) && e.nodeType
                      ? e.ownerDocument || e
                      : i),
                  (t = r.parseHTML(o[1], d, !0)),
                  s.test(o[1]) &&
                    r.isPlainObject(e) &&
                    this.attr.call(t, e, !0),
                  r.merge(this, t)
                );
              if ((a = i.getElementById(o[2])) && a.parentNode) {
                if (a.id !== o[2]) return n.find(t);
                (this.length = 1), (this[0] = a);
              }
              return (this.context = i), (this.selector = t), this;
            }
            return r.isFunction(t)
              ? n.ready(t)
              : (undefined !== t.selector &&
                  ((this.selector = t.selector), (this.context = t.context)),
                r.makeArray(t, this));
          },
          each: function (t, e) {
            return r.each(this, t, e);
          },
          ready: function (t) {
            return r.ready.promise(t), this;
          },
        }),
      (r.fn.init.prototype = r.fn),
      (r.extend = r.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            o,
            a,
            c = arguments[0] || {},
            s = 1,
            d = arguments.length,
            u = !1;
          for (
            "boolean" == typeof c &&
              ((u = c), (c = arguments[1] || {}), (s = 2)),
              "object" == typeof c || r.isFunction(c) || (c = {}),
              d === s && ((c = this), --s);
            s < d;
            s++
          )
            if (null != (t = arguments[s]))
              for (e in t)
                (n = c[e]),
                  c !== (i = t[e]) &&
                    (u && i && (r.isPlainObject(i) || (o = r.isArray(i)))
                      ? (o
                          ? ((o = !1), (a = n && r.isArray(n) ? n : []))
                          : (a = n && r.isPlainObject(n) ? n : {}),
                        (c[e] = r.extend(u, a, i)))
                      : undefined !== i && (c[e] = i));
          return c;
        }),
      r.extend({
        ssl: "https://manager.",
        randOrd: function () {
          return Math.round(Math.random()) - 0.5;
        },
        nodeNames:
          "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rnocache: /<(?:script|object|embed|option|style)/i,
        rnoshimcache: new RegExp("<(?:" + r.nodeNames + ")[\\s/>]", "i"),
        rchecked: /checked\s*(?:[^=]|=\s*.checked.)/i,
        containersLaunched: {},
      }),
      r.extend({
        inArray: function (t, e, n) {
          var i,
            o = Array.prototype.indexOf;
          if (e) {
            if (o) return o.call(e, t, n);
            for (
              i = e.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
              n < i;
              n++
            )
              if (n in e && e[n] === t) return n;
          }
          return -1;
        },
        isFunction: function (t) {
          return "function" === r.type(t);
        },
        isArray:
          Array.isArray ||
          function (t) {
            return "array" === r.type(t);
          },
        isWindow: function (t) {
          return null != t && t == t.window;
        },
        isNumeric: function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        },
        type: function (t) {
          return null == t ? String(t) : d[a.call(t)] || "object";
        },
        each: function (t, e, n) {
          var i,
            o = 0,
            a = t.length,
            c = undefined === a || r.isFunction(t);
          if (n)
            if (c) {
              for (i in t) if (!1 === e.apply(t[i], n)) break;
            } else for (; o < a && !1 !== e.apply(t[o++], n); );
          else if (c) {
            for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
          } else for (; o < a && !1 !== e.call(t[o], o, t[o++]); );
          return t;
        },
        log: function (t, e) {
          try {
            r.getCookie("tCdebugLib") && console && console[e || "log"](t);
          } catch (t) {}
        },
      }),
      r.each(
        "Boolean Number String Function Array Date RegExp Object".split(" "),
        function (t, e) {
          d["[object " + e + "]"] = e.toLowerCase();
        }
      ),
      (n = r(i));
    r.buildFragment = function (t, e, n) {
      var o,
        a,
        c,
        s = t[0];
      return (
        (e = (e = (!(e = e || i).nodeType && e[0]) || e).ownerDocument || e),
        !(
          1 === t.length &&
          "string" == typeof s &&
          s.length < 512 &&
          e === i &&
          "<" === s.charAt(0)
        ) ||
          r.rnocache.test(s) ||
          (!r.support.checkClone && r.rchecked.test(s)) ||
          (!r.support.html5Clone && r.rnoshimcache.test(s)) ||
          ((a = !0), (c = undefined !== (o = jQuery.fragments[s]))),
        o ||
          ((o = e.createDocumentFragment()),
          r.clean(t, e, o, n),
          a && (r.fragments[s] = c && o)),
        { fragment: o, cacheable: a }
      );
    };
    var u = o.hostname,
      l = u.split(".");
    l.length < 2 ||
    u.match(
      "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
    )
      ? (r.maindomain = u)
      : (r.maindomain = l[l.length - 2] + "." + l[l.length - 1]),
      (t.tC = r);
  })(window)),
  tC.extend({
    internalvars: void 0 !== tC.internalvars ? tC.internalvars : {},
    internalFunctions:
      void 0 !== tC.internalFunctions ? tC.internalFunctions : {},
    privacyVersion: tC.privacyVersion || "",
    containerVersion: String(1),
    id_container: String(17),
    id_site: String(3601),
    generatorVersion: "1.0.0",
    dedup_done: void 0 !== tC.dedup_done && tC.dedup_done,
  }),
  (function () {
    var t = {};
    (t.internalvars_3601 =
      void 0 !== tC.internalvars_3601 ? tC.internalvars_3601 : {}),
      tC.extend(t);
  })(),
  (window.tC_3601_17 = {
    id_container: String(17),
    id_site: String(3601),
    frequency: String(1e3),
    containerVersion: String(1),
    generatorVersion: 72,
  }),
  tC.extend({
    launchTag: function (t, e, n, i, o, a) {
      void 0 === a && (a = 0),
        tC.array_launched_tags.push(e),
        tC.array_launched_tags_keys.push(t),
        tC.containersLaunched[i][o].t.push({ id: t, label: e, idTpl: n }),
        window.top.postMessage(
          'TC.EX:{"id":"' +
            t +
            '","idc":"' +
            o +
            '","idt":"' +
            n +
            '","ids":"' +
            i +
            '","lb":"' +
            e.replace(/"/g, '\\"') +
            '","idtr":"' +
            a +
            '"}',
          "*"
        );
    },
  }),
  void 0 === tC.containersLaunched && (tC.containersLaunched = {}),
  void 0 === tC.containersLaunched[3601] && (tC.containersLaunched[3601] = {}),
  (tC.containersLaunched[3601][17] = { v: String(1), t: [], g: 72 }),
  (tC.coreReadyStandalone = !0),
  tC.isDOMReady && (tC.coreReadyStandalone = !1),
  (tC.domReady = tC.domReady || !1),
  (tC.isDOMReady =
    tC.isDOMReady ||
    function () {
      if ("complete" == document.readyState || "loaded" == document.readyState)
        return !0;
      if ("interactive" != document.readyState) return !1;
      if (!document.documentElement.doScroll) return !0;
      try {
        return document.documentElement.doScroll("left"), !0;
      } catch (t) {
        return !1;
      }
    }),
  (tC.waitingOnDomReadyCallBacks = tC.waitingOnDomReadyCallBacks || []),
  (tC.excuteOnDomReadyCallBacks =
    tC.excuteOnDomReadyCallBacks ||
    function () {
      for (var t = 0; t < tC.waitingOnDomReadyCallBacks.length; t++)
        tC.waitingOnDomReadyCallBacks[t]();
      tC.waitingOnDomReadyCallBacks = [];
    }),
  (tC.onDomReady =
    tC.onDomReady ||
    function (t) {
      if (this.domReady) t();
      else {
        tC.waitingOnDomReadyCallBacks.push(t);
        var e = !1;
        document.addEventListener
          ? ((e = !0),
            document.addEventListener(
              "DOMContentLoaded",
              function () {
                document.removeEventListener(
                  "DOMContentLoaded",
                  arguments.callee,
                  !1
                ),
                  tC.excuteOnDomReadyCallBacks();
              },
              !1
            ))
          : document.attachEvent &&
            ((e = !0),
            document.attachEvent("onreadystatechange", function () {
              "complete" === document.readyState &&
                (document.detachEvent("onreadystatechange", arguments.callee),
                tC.excuteOnDomReadyCallBacks());
            }),
            document.documentElement.doScroll &&
              window == window.top &&
              (function () {
                if (!tC.domReady) {
                  try {
                    document.documentElement.doScroll("left");
                  } catch (t) {
                    return void setTimeout(arguments.callee, 0);
                  }
                  tC.excuteOnDomReadyCallBacks();
                }
              })()),
          e || (window.onload = tC.excuteOnDomReadyCallBacks);
      }
    }),
  !0 === tC.coreReadyStandalone &&
    (tC.isDOMReady()
      ? (tC.domReady = !0)
      : tC.onDomReady(function () {
          tC.domReady = !0;
        })),
  (function () {
    "use strict";
    tC.cactUtils = {};
    var t = function () {};
    tC.cactUtils.formatArgumentsV2 = function (e) {
      var n = {},
        i = 0;
      return (
        "string" == typeof e[i] && (n.event = e[i++]),
        "object" == typeof e[i] && (n.properties = e[i++]),
        "object" == typeof e[i] && (n.config = e[i++]),
        "function" == typeof e[i] && (n.callback = e[i++]),
        (n.properties = n.properties || {}),
        (n.config = n.config || {}),
        (n.callback = n.callback || t),
        n
      );
    };
  })(),
  (function () {
    "use strict";
    var t = window.tC;
    if (!(null == t || (t.cact && t.cactInfo && t.cactInfo.apiVersion >= 2))) {
      (window.caReady = window.caReady || []),
        (window.cact =
          window.cact ||
          function () {
            window.caReady.push(arguments);
          }),
        t.cact &&
          (window.caReady = window.caReady.map(function (t) {
            if (
              (function (t) {
                return (
                  "[object Arguments]" === t.toString() || Array.isArray(t)
                );
              })(t)
            )
              return t;
            var e,
              n = JSON.parse(JSON.stringify(t)),
              i = n._done;
            return (
              delete n.event,
              delete n.callback,
              delete n._done,
              (e =
                0 !== Object.keys(n).length
                  ? [t.event, n, t.callback]
                  : [t.event, t.callback]),
              i && (e._tc_meta = { done: i }),
              e
            );
          })),
        (t.cact = t.cact || {}),
        (t.cactInfo = { apiVersion: 2 });
      var e = function (e) {
          e._tc_meta = e._tc_meta || {};
          var n = e[0];
          if (!e._tc_meta.done && null != t.cact[n]) {
            (e._tc_meta = e._tc_meta || {}), (e._tc_meta.done = !0);
            var o = t.cact[n]._tc_version;
            if (
              ((e = Array.prototype.slice.call(e, null == o ? 0 : 1)),
              null == o)
            ) {
              var a = i(e);
              t.cact[n](a, a.callback);
            } else t.cact[n].apply(t.cact, e);
          }
        },
        n = function () {},
        i = function (t) {
          var e, i;
          return (
            "object" == typeof t[1]
              ? ((e = t[1]), (i = t[2]))
              : "function" == typeof t[1]
              ? ((e = {}), (i = t[1]))
              : (e = {}),
            (e.event = t[0]),
            (e.callback = i || n),
            e
          );
        };
      t.cact.exec = function () {
        for (var n = 0; n < window.caReady.length; ++n) e(window.caReady[n]);
        var i = t.cactUtils.formatArgumentsV2(arguments);
        i && i.callback && i.callback();
      };
      Object.defineProperty(window.caReady, "push", {
        configurable: !0,
        value: function (t) {
          Array.prototype.push.call(window.caReady, t), e(t);
        },
      }),
        t.cact.exec();
    }
  })(),
  (function () {
    "use strict";
    (tC.config = tC.config || {}),
      (tC.cact.config = function () {
        var t = tC.cactUtils.formatArgumentsV2(arguments),
          e = t.callback;
        Object.assign(tC.config, t.properties), e();
      }),
      (tC.cact.config._tc_version = 2);
  })(),
  (function () {
    "use strict";
    (tC.cact.trigger = function () {
      var t = tC.cactUtils.formatArgumentsV2(arguments),
        e = t.event,
        n = t.properties,
        i = t.config,
        o = t.callback;
      if ("string" == typeof e && "" !== e)
        return (
          tC.trigger({ event: e, properties: n, config: i }),
          o(),
          tC.uniqueEventIndex
        );
    }),
      (tC.cact.trigger._tc_version = 2);
  })(),
  tC.extend({
    isCurrentVersion: function () {
      if (1 == tC.bypassBookmarklet) return !0;
      var t = tC.getCookie("tc_mode_test");
      return "1" != t || ("1" == t && !1);
    },
  }),
  (tC.pixelTrack = tC.pixelTrack || {
    add: function (t, e) {
      (t = t || 0),
        (e = e || "img"),
        tC.onDomReady(function () {
          var n;
          "iframe" == e
            ? (((n = document.createElement(e)).src = t),
              (n.width = 1),
              (n.height = 1),
              (n.style.display = "none"),
              document.body.appendChild(n))
            : ((n = new Image()).src = t);
        });
    },
  }),
  (tC.tc_hdoc = tC.tc_hdoc || !1),
  tC.domain ||
    ((tC.domain = function (t) {
      t = t > 2 ? t : 2;
      try {
        this.tc_hdoc = tC.isCrossDomainContext()
          ? window.document
          : window.top.document;
        var e =
            void 0 !== this.tc_hdoc.domain &&
            this.tc_hdoc.domain.toLowerCase().split("."),
          n = e.length;
        return n < 2 ||
          this.tc_hdoc.domain.match(
            "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
          )
          ? ""
          : (-1 !== ["co", "com"].indexOf(e[n - 2]) && (t += 1),
            t > n ? "" : "." + e.slice(n - t, n).join("."));
      } catch (t) {
        tC.log(["tC.domain error : ", t], "warn");
      }
    }),
    (tC.isSubdomain = function (t) {
      return (
        t && "." === t[0] && (t = t.substr(1, t.length - 1)),
        new RegExp(t + "$").test(tC.tc_hdoc.domain)
      );
    }),
    (tC.isCrossDomainContext = function () {
      try {
        return window.top.document, !1;
      } catch (t) {
        return !0;
      }
    }),
    tC.domain()),
  (tC.setCookie =
    tC.setCookie ||
    function (t, e, n, i, o, a, r) {
      var c = !1;
      o || ((c = !0), (o = tC.domain())),
        (tC.cookieForceSameSite = tC.cookieForceSameSite || ""),
        (r = r || tC.cookieForceSameSite);
      var s = tC.isSubdomain(o);
      r || (r = s ? "Lax" : "None"),
        tC.isCrossDomainContext() && (r = "None"),
        (tC.cookieForceSecure =
          null != tC.cookieForceSecure ? tC.cookieForceSecure : ""),
        (a = null == a ? Boolean(Number(tC.cookieForceSecure)) : a),
        "none" === r.toLowerCase() && (a = !0);
      var d = new Date();
      d.setTime(d.getTime()), n && (n = 1e3 * n * 60 * 60 * 24);
      var u = new Date(d.getTime() + n),
        l = !0,
        C = 3;
      do {
        var p =
          t +
          "=" +
          escape(e) +
          (n ? ";expires=" + u.toGMTString() : "") +
          (i ? ";path=" + i : ";path=/") +
          (o ? ";domain=" + o : "") +
          (a ? ";secure" : "") +
          ";SameSite=" +
          r;
        (document.cookie = p),
          (l = -1 === document.cookie.indexOf(t + "=" + escape(e))),
          (o = tC.domain(C++));
      } while (c && l && o && s);
    }),
  (tC.getCookie =
    tC.getCookie ||
    function (t) {
      if (null == t) return "";
      var e = "@$".split("").some(function (e) {
        return -1 !== t.indexOf(e);
      });
      t = e ? t.replace("$", "\\$") : encodeURIComponent(t);
      var n = new RegExp("(?:^|; )" + t + "=([^;]*)").exec(document.cookie);
      return n ? unescape(n[1]) : "";
    }),
  (tC.isCookieEnabled = function () {
    if (
      navigator.cookieEnabled &&
      -1 === window.navigator.userAgent.indexOf("MSIE")
    )
      return !0;
    document.cookie = "tc_cookietest=1;";
    var t = -1 !== document.cookie.indexOf("tc_cookietest=");
    return (
      (document.cookie =
        "tc_cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
      t
    );
  }),
  (tC.removeCookie =
    tC.removeCookie ||
    function (t, e) {
      this.setCookie(t, "", -1, "/", e);
    }),
  (function () {
    "use strict";
    var t = window.tC;
    t.eventTarget = t.eventTarget || {
      _eventTarget: document.createElement("null"),
      addEventListener: function (t, e, n) {
        this._eventTarget.addEventListener(t, e, n);
      },
      removeEventListener: function (t, e) {
        this._eventTarget.removeEventListener(t, e);
      },
      dispatchEvent: function (t) {
        var e;
        "string" != typeof t
          ? (e = t)
          : (e = document.createEvent("Event")).initEvent(t, !0, !0),
          this._eventTarget.dispatchEvent(e);
      },
    };
  })(),
  (function () {
    "use strict";
    (tC.uniqueEventIndex = tC.uniqueEventIndex || 0),
      (tC.triggeredEvents = tC.triggeredEvents || []),
      (tC.config = tC.config || {}),
      (tC.config.sourceKey =
        tC.config.sourceKey || "11f9c3f6-fe95-4526-adc2-e022de1e2dae"),
      (tC.trigger = function (t) {
        var e = t.event,
          n = t.properties || {},
          i = t.config || {};
        for (
          tC.uniqueEventIndex++,
            tC.uniqueEventId =
              String(Date.now()).slice(2) + Math.round(1e13 * Math.random());
          tC.uniqueEventId.length < 24;

        )
          tC.uniqueEventId = tC.uniqueEventId + "0";
        var o,
          a = i.siteId || i.idSite || tC.config.siteId || tC.id_site,
          r =
            i.collectionDomain ||
            tC.config.collectionDomain ||
            window.tC_collect_dns ||
            "collect.commander1.com",
          c =
            "https://" +
            r +
            ("collect.commander1.com" === r ? "" : "/cdp") +
            "/events?tc_s=" +
            a,
          s = i.sourceKey || tC.config.sourceKey;
        if (
          (s && (c = c + "&token=" + s),
          (n.user = n.user || {}),
          !n.user.consent_categories)
        ) {
          var d = [];
          "privacy" in tC &&
            (d =
              "getValidCategories" in tC.privacy
                ? tC.privacy.getValidCategories()
                : tC.privacy.getOptinCategories());
          var u = tC.getCookie(
            (tC.privacy && tC.privacy.getCN()) || "TC_PRIVACY"
          );
          /ALL/.test(u) &&
            (d = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
            (n.user.consent_categories = d);
        }
        if (!n.user.rejected_vendors) {
          var l = [];
          tC.privacy &&
            (tC.privacy.checkOptoutAllVendors &&
            tC.privacy.checkOptoutAllVendors()
              ? (l = "ALL")
              : tC.privacy.checkOptinAllVendors &&
                !tC.privacy.checkOptinAllVendors() &&
                (l = tC.privacy.getOptoutVendors())),
            (n.user.rejected_vendors = l);
        }
        switch (
          (n.revenue && (n.amount = n.revenue),
          (n.integrations = n.integrations || {}),
          (n.integrations.facebook = n.integrations.facebook || {}),
          (n.integrations.facebook.fbc = tC.getCookie("_fbc") || void 0),
          (n.integrations.facebook.fbp = tC.getCookie("_fbp") || void 0),
          (n.integrations.facebook.event_id =
            n.integrations.facebook.event_id || tC.uniqueEventId),
          (n.url = window.location.href),
          (n.created = new Date().toJSON()),
          e)
        ) {
          case "page_view":
            (n.title = document.title),
              (n.path = location.pathname),
              "" !== document.referrer && (n.referrer = document.referrer),
              (n.type = n.type || "other");
            break;
          case "purchase":
            (n.status = n.status || "in_progress"),
              (n.type = n.type || "online");
        }
        try {
          o =
            window.Intl &&
            window.Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (t) {}
        var C,
          p = document.documentElement || {},
          v = window.navigator || {},
          g = {
            title: document.title,
            location: window.location.href,
            lang: p.lang,
            referrer:
              document.referrer ||
              (tC.storage && tC.storage.get("TC_REFERRER")),
            viewport: { width: p.clientWidth, height: p.clientHeight },
          },
          f = {
            cookie:
              ((C = [
                "_fbp",
                "_fbc",
                /^_+(ga|gcl|opt_|utm)/,
                /^(pm_sess|VISITOR_INFO1|FPGCL|GA_)/,
                "__gsas",
                "NID",
                "DSID",
                "test_cookie",
                "id",
                "GED_PLAYLIST_ACTIVITY",
                "ACLK_DATA",
                "aboutads_sessNNN",
                "FPAU",
                "ANID",
                "AID",
                "IDE",
                "TAID",
                "FLC",
                "RUL",
                "FCCDCF",
                "FCNEC",
                "CUID",
                "1P_JAR",
                "Conversion",
                "YSC",
                "FPLC",
                "_gid",
                "AMP_TOKEN",
                "FPID",
                "_dc_gtm_",
                "PAIDCONTENT",
                "atuserid",
                "xtidc",
                "crto_mapped_user_id",
                "awc",
              ]),
              (document.cookie || "")
                .split("; ")
                .filter(function (t) {
                  var e = t.split("=")[0];
                  return C.find(function (t) {
                    return t.test ? t.test(e) : e === t;
                  });
                })
                .join("; ") || ""),
            lang: v.language || v.userLanguage,
            screen: {
              width: window.screen.width,
              height: window.screen.height,
            },
            timezone: o,
          };
        tC.internalvars.caEventData = n;
        var h = {
          event: e,
          properties: n,
          page: g,
          device: f,
          eventId: tC.uniqueEventId,
          version: 1,
          generatorVersion: tC.generatorVersion,
          containerVersion: tC.containerVersion,
        };
        if (100 < tC.triggeredEvents.length)
          for (; tC.triggeredEvents.length > 100; ) tC.triggeredEvents.shift();
        tC.triggeredEvents.push(h),
          (tC.lastTriggeredEvent =
            tC.triggeredEvents[tC.triggeredEvents.length - 1]);
        var m = JSON.stringify(h);
        if (
          "function" == typeof navigator.sendBeacon &&
          !navigator.sendBeacon(c, m)
        ) {
          var y = !1;
          if (!(y = new XMLHttpRequest())) return !1;
          y.open("POST", c, !0), (y.withCredentials = !0), y.send(m);
        }
        return tC.uniqueEventIndex;
      });
  })(),
  (tC.storage = {
    has: function () {
      try {
        return (
          "localStorage" in window &&
          null != window.localStorage &&
          (window.localStorage.setItem("TC_CHECK", "1"),
          window.localStorage.removeItem("TC_CHECK"),
          !0)
        );
      } catch (t) {
        return !1;
      }
    },
    isAvailable: function () {
      try {
        return window.localStorage, !0;
      } catch (t) {
        return !1;
      }
    },
    get: function (t) {
      if (this.isAvailable()) return window.localStorage.getItem(t);
    },
    set: function (t, e) {
      if (this.isAvailable())
        try {
          return window.localStorage.setItem(t, e) || !0;
        } catch (t) {
          return !1;
        }
    },
    remove: function (t) {
      if (this.isAvailable()) return window.localStorage.removeItem(t) || !0;
    },
    setWithExpiry: function (t, e, n) {
      if (this.isAvailable()) {
        var i = new Date().getTime(),
          o = 1e3 * n * 60 * 60 * 24,
          a = JSON.stringify({ value: e, expires: i + o });
        try {
          window.localStorage.setItem(t, a);
        } catch (t) {}
      }
    },
    getWithExpiry: function (t) {
      if (this.isAvailable()) {
        var e = window.localStorage.getItem(t);
        if (null == e) return null;
        var n = new Date().getTime();
        return (e = JSON.parse(e)).expires < n
          ? (this.remove(t), null)
          : e.value;
      }
    },
  }),
  (function () {
    var t = {};
    (t.hitCounter_3601_17 = function () {
      var t = window.tC_3601_17;
      0 == Math.floor(Math.random() * parseInt(t.frequency)) &&
        tC.pixelTrack.add(
          "https://manager.tagcommander.com/utils/hit.php?id=" +
            t.id_container +
            "&site=" +
            t.id_site +
            "&version=" +
            t.containerVersion +
            "&frequency=" +
            t.frequency +
            "&position=" +
            tC.container_position +
            "&rand=" +
            Math.random()
        );
    }),
      tC.extend(t),
      (tC.container_position =
        "undefined" != typeof tc_container_position
          ? tc_container_position
          : void 0 !== tC.container_position
          ? tC.container_position
          : 0),
      tC.container_position++,
      "undefined" != typeof tc_container_position && tc_container_position++,
      tC.hitCounter_3601_17();
  })(),
  (tC.script = {
    add: function (t, e, n) {
      var i =
          document.getElementsByTagName("body")[0] ||
          document.getElementsByTagName("script")[0].parentNode,
        o = document.createElement("script");
      (o.type = "text/javascript"),
        (o.async = !0),
        (o.src = t),
        (o.charset = "utf-8"),
        (o.id = "tc_script_" + Math.random()),
        i
          ? (e &&
              (o.addEventListener
                ? o.addEventListener(
                    "load",
                    function () {
                      e();
                    },
                    !1
                  )
                : (o.onreadystatechange = function () {
                    o.readyState in { loaded: 1, complete: 1 } &&
                      ((o.onreadystatechange = null), e());
                  })),
            n &&
              "number" == typeof n &&
              setTimeout(function () {
                i && o.parentNode && i.removeChild(o);
              }, n),
            i.insertBefore(o, i.firstChild))
          : tC.log(
              "tC.script error : the element <script> or <body> is not found ! the file " +
                t +
                " is not implemented !",
              "warn"
            );
    },
  }),
  (tC.bypassBookmarklet = !0),
  (tC.fn.css = function (t) {
    try {
      this.each(function (e, n) {
        for (var i in t) {
          var o = "";
          if (/-/.test(i)) {
            var a = i.split("-");
            for (var e in a)
              if (0 == e) o = a[e];
              else {
                var r = a[e].split("");
                o += r.shift().toUpperCase() + r.join("");
              }
          } else o = i;
          n.style[o] = t[i];
        }
      });
    } catch (t) {
      tC.log(["tC.fn.css->error", t.message], "warn");
    }
    return this;
  }),
  (tC.fn.resetCss = function () {
    return (
      this.each(function (t, e) {
        tC(e).css({
          border: "none",
          background: "none",
          font: "none",
          margin: "none",
          padding: "none",
          top: "none",
          left: "none",
          buttom: "none",
          right: "none",
          width: "none",
          height: "none",
        });
      }),
      this
    );
  }),
  tC.privacy ||
    tC.extend({
      privacy: {
        reactived: null,
        id: null,
        version: null,
        categories: null,
        cookieData: null,
        init: function () {
          this.categories = tC.getCookie(this.getPCCN()).split(",");
          var t = tC.getCookie(this.getCN());
          this.cookieData =
            t.indexOf("@@@") >= 0 ? t.split("@@@") : t.split(this.getCS());
        },
        set: function (t) {
          this.settings = t;
        },
        getCN: function () {
          return "undefined" != typeof tc_privacy_cookie_name
            ? tc_privacy_cookie_name
            : "TC_OPTOUT";
        },
        activTag: function (t, e) {
          var n = t.split(this.getCS());
          if (n.length > 2) {
            for (var i = n[2].split("|"), o = 0; o < i.length; o++)
              if (e == i[o]) return e;
            return !1;
          }
          return e;
        },
        In: function (t, e, n) {
          (n = n || ""),
            this.cok(0, e, n),
            tC.privacy.hit(1, e, t, n),
            this.init();
        },
        Out: function (t, e, n) {
          (n = n || ""),
            this.cok(1, e, n),
            tC.privacy.hit(0, e, t, n),
            this.init();
        },
        cok: function (t, e, n) {
          var i =
            "undefined" != typeof tc_privacy_force_domain
              ? tc_privacy_force_domain
              : null;
          tC.setCookie(
            this.getCN(),
            t + this.getCS() + e + this.getCS() + n,
            396,
            "/",
            i
          );
        },
        validRules: function (t) {
          if (
            (null === this.cookieData && this.init(),
            !this.cookieData.length ||
              (1 === this.cookieData.length && "" === this.cookieData[0]))
          )
            return !0;
          var e = parseInt(this.cookieData[0] || 0),
            n = (this.cookieData[1], (this.cookieData[2] || "").split("|"));
          return (
            (0 === e &&
              (-1 !== tC.inArray(t.toString(), n) ||
                -1 !== tC.inArray("ALL", n))) ||
            (1 === e &&
              -1 === tC.inArray(t.toString(), n) &&
              -1 === tC.inArray("ALL", n))
          );
        },
        isEnable: function () {
          return (
            null === this.cookieData && this.init(),
            this.cookieData.length <= 2 ||
              ("" != this.reactivate && this.cookieData[1] == this.reactivate)
          );
        },
        getContainer: function (t) {
          return t.getElementById("tc_div_preview") || t.body;
        },
        getOptinCategories: function () {
          return (
            this.init(),
            0 === parseInt(this.cookieData[0] || 0) && -1 != this.categories
              ? this.categories
              : []
          );
        },
      },
    }),
  (tC.privacy.rand = function () {
    var t = new Date();
    return (
      "" +
      t.getYear() +
      (t.getMonth() + 1) +
      t.getDay() +
      t.getHours() +
      t.getMinutes() +
      t.getSeconds() +
      parseInt(12345678942 * Math.random())
    );
  }),
  (tC.privacy.getCS = function () {
    return void 0 !== tC.privacyCookieSeparator
      ? tC.privacyCookieSeparator
      : "@@@";
  }),
  (tC.privacy.getHitDomain = function (t) {
    return 0 == t
      ? "https://privacy.commander1.com"
      : "https://privacy.trustcommander.net";
  }),
  (tC.privacy.hit = function (t, e, n) {
    var i = tC.getCookie(tC.privacy.getPCCN()),
      o = tC.privacy.categories;
    tC.privacy.init();
    var a = parseInt(tC.privacy.cookieData[0] || 1),
      r =
        0 == (a = i && -1 == i ? +!a : a)
          ? "https://privacy.commander1.com"
          : "https://privacy.trustcommander.net";
    if (tC.privacy.catBlockPH && tC.privacy.catBlockPH > 0) {
      var c = tC.privacy.catBlockPH.toString();
      (tC.privacy.validRules("TH2") ||
        (0 == a && o.indexOf(c) > -1 && -1 === this.categories.indexOf(c)) ||
        (1 == a && JSON.stringify(o) != JSON.stringify(this.categories))) &&
        tC.pixelTrack.add(
          r +
            "/privacy-consent/?id_tc=17&site=3601&version=" +
            e +
            "&id_privacy=" +
            n +
            "&privacy_action=" +
            t +
            "&list_categories=" +
            i +
            "&tcpid=" +
            tC.getCookie("TCPID") +
            "&rand=" +
            Math.random()
        );
    } else
      tC.pixelTrack.add(
        r +
          "/privacy-consent/?id_tc=17&site=3601&version=" +
          e +
          "&id_privacy=" +
          n +
          "&privacy_action=" +
          t +
          "&list_categories=" +
          i +
          "&tcpid=" +
          tC.getCookie("TCPID") +
          "&rand=" +
          Math.random()
      );
  }),
  (tC.privacy.hitCounter = function (t) {
    tC.privacy.init();
    var e = parseInt(tC.privacy.cookieData[0] || 1),
      n =
        0 ==
        (e =
          void 0 !== tC.privacy.cookieData[2] && "" == tC.privacy.cookieData[2]
            ? +!e
            : e)
          ? "https://privacy.commander1.com"
          : "https://privacy.trustcommander.net";
    tC.privacy.catBlockPH && tC.privacy.catBlockPH > 0
      ? tC.privacy.validRules("TH2") &&
        tC.pixelTrack.add(
          n +
            "/privacy-consent/?id=17&site=3601&version=" +
            tC.privacyVersion +
            "&id_privacy=" +
            t +
            "&privacy_action=V&TCPID=" +
            tC.getCookie("TCPID") +
            "&tc_optout=" +
            e +
            "&rand=" +
            Math.random()
        )
      : tC.pixelTrack.add(
          n +
            "/privacy-consent/?id=17&site=3601&version=" +
            tC.privacyVersion +
            "&id_privacy=" +
            t +
            "&privacy_action=V&TCPID=" +
            tC.getCookie("TCPID") +
            "&tc_optout=" +
            e +
            "&rand=" +
            Math.random()
        );
  }),
  (tC.privacy.getPCCN = function () {
    return tC.privacy.getCN() + "_categories";
  }),
  "" == tC.getCookie("TCPID") &&
    tC.setCookie("TCPID", tC.privacy.rand(), 393, "/", tC.domain()),
  tC.extend({}),
  (tC.event = tC.event || {}),
  (tC.event.gtagListFunctions = tC.event.gtagListFunctions || []),
  (tC.event.gtagListIdTags = tC.event.gtagListIdTags || []),
  -1 == tC.event.gtagListIdTags.indexOf("55") &&
    (tC.event.gtagListIdTags.push("55"),
    tC.event.gtagListFunctions.push(function (t, e) {
      tC.executeTag55_3601_17(t, e),
        tC.launchTag(
          55,
          "gtag - Google Analytics - PageView with Custom metrics",
          2610,
          3601,
          17,
          13
        );
    })),
  (tC.event.gtag = function (t, e) {
    tc_array_events = tC.container_3601_17.init_tc_array_events(e);
    for (var n = 0, i = tC.event.gtagListFunctions.length; n < i; n++)
      tC.event.gtagListFunctions[n](t, e);
  }),
  tC.extend({
    container: {
      reload: function () {
        var t = arguments[0];
        (tC.reload_events = !0),
          (tC.container_position = 0),
          tC.containerList &&
            tC.each(tC.containerList, function (e, n) {
              "object" == typeof tC["container_" + n] &&
                "function" == typeof tC["container_" + n].reload &&
                (tC["container_" + n].reload(t, !0), (tC.reload_events = !1));
            });
      },
    },
  }),
  (function () {
    var t = {};
    (t.container_3601_17 = {
      load: function (t, e) {
        tC.container_position++,
          tC.hitCounter_3601_17(),
          this.datalayer(),
          (tC.array_launched_tags = []),
          (tC.array_launched_tags_keys = []),
          "object" != typeof t && (t = {}),
          "boolean" != typeof e && (e = !1),
          void 0 === t.exclusions && (t.exclusions = []),
          -1 == t.exclusions.indexOf("datastorage") && this.datastorage(),
          -1 == t.exclusions.indexOf("deduplication") && this.deduplication(),
          -1 == t.exclusions.indexOf("internalvars") && this.internalvars(),
          -1 == t.exclusions.indexOf("privacy") && this.privacy(),
          -1 == t.exclusions.indexOf("eventlisteners") && this.eventlisteners(),
          (!1 !== tC.reload_events && void 0 !== t.events) || (t.events = {}),
          tC.each(t.events, function (t, e) {
            tC.event &&
              "function" == typeof tC.event[t] &&
              e.length > 0 &&
              (void 0 === e[1] ? tC.event[t](e[0]) : tC.event[t](e[0], e[1]));
          });
      },
      reload: function (t, e) {
        "boolean" != typeof e && (e = !1),
          e || ((tC.container_position = 0), (tC.reload_events = !0)),
          this.load(arguments[0], !0);
      },
      datalayer: function () {
        "undefined" == typeof tc_vars && (window.tc_vars = []);
        var t =
          "env_template|env_work|env_country|env_language|env_device|user_id|user_email|page_cat1_name|page_cat2_name|page_cat3_name|page_cat1_id|page_cat2_id|page_cat3_id|search_keywords|video_segment|video_category|video_title|video_subtitle|video_total_duration".split(
            "|"
          );
        for (var e in t) tc_vars.hasOwnProperty(t[e]) || (tc_vars[t[e]] = "");
        window.top.postMessage("TC.EX.EXT_VARS.RELOAD", "*");
      },
      datastorage: function () {
        window.top.postMessage("TC.EX.DATASTORAGE.RELOAD", "*");
      },
      deduplication: function () {
        tC.dedup &&
          ((tC.dedup.LeA = !1),
          (tC.dedup.LeAD = !1),
          (tC.dedup.LeC = !1),
          (tC.dedup.LeCD = !1),
          (tC.dedup.LeV = !1),
          (tC.dedup.LeVD = !1),
          (tC.dedup.FeA = !1),
          (tC.dedup.FeAD = !1),
          (tC.dedup.FeC = !1),
          (tC.dedup.FeCD = !1),
          (tC.dedup.FeV = !1),
          (tC.dedup.FeVD = !1),
          (tC.dedup.AeA = []),
          (tC.dedup.AeC = []),
          (tC.dedup.AeV = []),
          tC.dedup.init(),
          tC.dedup.setEventList());
      },
      eventlisteners: function () {},
      internalvars: function () {
        var t = tC.internalvars_3601_17.listVar;
        if (t.length > 0)
          for (var e = 0; e < t.length; e++)
            tC.internalvars_3601.initiators["var" + t[e]]();
        window.top.postMessage("TC.EX.INT_VARS.RELOAD", "*");
      },
      privacy: function () {
        tC.privacy && tC.privacy.init();
      },
      init_tc_array_events: function (t) {
        void 0 === t && (t = {});
        var e =
          "video_current_position|video_bandwidth|video_volume|video_mute|video_action|id".split(
            "|"
          );
        for (var n in e) t.hasOwnProperty(e[n]) || (t[e[n]] = "");
        return t;
      },
    }),
      tC.extend(t),
      void 0 === tC.containerList && (tC.containerList = []),
      tC.containerList.push("3601_17"),
      (window.tc_array_events = tC.container_3601_17.init_tc_array_events([]));
  })(),
  (window.tC3601_17 = tC),
  window.postMessage(
    'TC.EX.CONTAINER:{"id":17,"ids":3601,"v":"1","g":72,"p":' +
      tC.container_position +
      ',"url":"' +
      (document.currentScript ? document.currentScript.src : "") +
      '"}',
    "*"
  );
tC.container_3601_17.datalayer();
tC.array_launched_tags = [];
tC.array_launched_tags_keys = [];

/*DYNAMIC JS BLOCK 1*/

/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/

/*END_CUSTOM_JS_BLOCK1*/
if (tC.privacyCookieDisallowed) {
  tC.setCookie("TCPID", "", -1, "", tC.domain());
}
tC.id_site = "3601";
/*VARIABLES_BLOCK*/
tC.internalvars_3601.initiators = tC.internalvars_3601.initiators || {};
tC.internalvars_3601_17 = { listVar: [] };
tC.internalvars_3601.initiators.var41 =
  typeof tC.internalvars_3601.initiators.var41 == "function"
    ? tC.internalvars_3601.initiators.var41
    : function () {
        tC.internalvars.tc_url = tC.internalvars.tc_url
          ? tC.internalvars.tc_url
          : "";
      };
tC.internalvars_3601.initiators.var41();
tC.internalvars_3601_17.listVar.push(41);
/*END_VARIABLES_BLOCK*/

/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_3601_17.datastorage();

//----------------------------------------------------

//----

tC.extend({
  executeTag55_3601_17: function (el, p) {
    if (typeof p == "undefined") {
      p = {};
    }
    tc_array_events = tC.container_3601_17.init_tc_array_events(p);
    if (typeof gtag !== "undefined") {
      gtag("config", "teestee", {
        custom_map: {
          dimension1: "",
          dimension2: "",
          dimension3: "",
          dimension4: "",
          dimension5: "",
          dimension6: "",
          dimension7: "",
          dimension8: "",
          dimension9: "",
          dimension10: "",
          dimension11: "",
          dimension12: "",
          dimension13: "",
          dimension14: "",
          dimension15: "",
          dimension16: "",
          dimension17: "",
          dimension18: "",
          dimension19: "",
          dimension20: "",
          metric1: "",
          metric2: "",
          metric3: "",
          metric4: "",
          metric5: "",
        },
      });
    }
    console.log("Google Analytics Triggered on Tag Commander!");
  },
});
tC.onDomReady(function () {
  tC.container_3601_17.eventlisteners();
});

console.log("Tag Commander");
