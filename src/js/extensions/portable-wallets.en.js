import.meta;
var Xa = Object.defineProperty,
    Ja = Object.defineProperties,
    Za = Object.getOwnPropertyDescriptors,
    wt = Object.getOwnPropertySymbols,
    qr = Object.prototype.hasOwnProperty,
    Wr = Object.prototype.propertyIsEnumerable,
    Jt = (t, e) => ((e = Symbol[t]) ? e : Symbol.for('Symbol.' + t)),
    jr = t => {
        throw TypeError(t);
    },
    Zt = (t, e, n) =>
        e in t
            ? Xa(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (t[e] = n),
    w = (t, e) => {
        for (var n in e || (e = {})) qr.call(e, n) && Zt(t, n, e[n]);
        if (wt) for (var n of wt(e)) Wr.call(e, n) && Zt(t, n, e[n]);
        return t;
    },
    T = (t, e) => Ja(t, Za(e)),
    er = (t, e) => {
        var n = {};
        for (var r in t) qr.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (t != null && wt)
            for (var r of wt(t))
                e.indexOf(r) < 0 && Wr.call(t, r) && (n[r] = t[r]);
        return n;
    },
    d = (t, e, n) => Zt(t, typeof e != 'symbol' ? e + '' : e, n),
    Yr = (t, e, n) => e.has(t) || jr('Cannot ' + n),
    A = (t, e, n) => (
        Yr(t, e, 'read from private field'), n ? n.call(t) : e.get(t)
    ),
    O = (t, e, n) =>
        e.has(t)
            ? jr('Cannot add the same private member more than once')
            : e instanceof WeakSet
            ? e.add(t)
            : e.set(t, n),
    k = (t, e, n, r) => (
        Yr(t, e, 'write to private field'), r ? r.call(t, n) : e.set(t, n), n
    ),
    te = function (t, e) {
        (this[0] = t), (this[1] = e);
    },
    ke = (t, e, n) => {
        var r = (o, s, l, u) => {
                try {
                    var c = n[o](s),
                        h = (s = c.value) instanceof te,
                        p = c.done;
                    Promise.resolve(h ? s[0] : s)
                        .then(y =>
                            h
                                ? r(
                                      o === 'return' ? o : 'next',
                                      s[1]
                                          ? { done: y.done, value: y.value }
                                          : y,
                                      l,
                                      u
                                  )
                                : l({ value: y, done: p })
                        )
                        .catch(y => r('throw', y, l, u));
                } catch (y) {
                    u(y);
                }
            },
            a = o => (i[o] = s => new Promise((l, u) => r(o, s, l, u))),
            i = {};
        return (
            (n = n.apply(t, e)),
            (i[Jt('asyncIterator')] = () => i),
            a('next'),
            a('throw'),
            a('return'),
            i
        );
    },
    re = (t, e, n) =>
        (e = t[Jt('asyncIterator')])
            ? e.call(t)
            : ((t = t[Jt('iterator')]()),
              (e = {}),
              (n = (r, a) =>
                  (a = t[r]) &&
                  (e[r] = i =>
                      new Promise(
                          (o, s, l) => (
                              (i = a.call(t, i)),
                              (l = i.done),
                              Promise.resolve(i.value).then(
                                  u => o({ value: u, done: l }),
                                  s
                              )
                          )
                      ))),
              n('next'),
              n('return'),
              e);
const ei = ':host{display:flex;align-items:center;justify-content:center}';
class ti extends HTMLElement {
    constructor() {
        var e, n;
        super(),
            d(this, 'size'),
            d(this, 'color'),
            (this.size = (e = this.getAttribute('size')) != null ? e : '18px'),
            (this.color =
                (n = this.getAttribute('color')) != null ? n : 'gray'),
            this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        const e = document.createElement('style');
        (e.textContent = ei), this.shadowRoot.appendChild(e);
    }
    render() {
        const e = this.shadowRoot,
            n = '\n      width="'
                .concat(this.size, '"\n      height="')
                .concat(
                    this.size,
                    '"\n      xmlns="http://www.w3.org/2000/svg"\n      aria-hidden="true"\n    '
                );
        e.innerHTML = '\n      <svg '
            .concat(n, ' viewBox="0 0 20 20" fill="')
            .concat(
                this.color,
                '">\n        <path d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z"/>\n      </svg>\n    '
            );
    }
}
const ri =
    '#overlay{position:fixed;width:100%;height:100%;background:#0006;top:0;left:0;z-index:2147483647;animation:modalPop .3s ease-out}#modal{position:fixed;top:20%;left:50%;width:100%;max-width:383px;transform:translate(-50%,-100%);background:#fff;color:#000;border-radius:5px;animation:modalSlideInFromTop .3s forwards}@keyframes modalPop{0%{opacity:0}to{opacity:1}}@keyframes modalSlideInFromTop{0%{transform:translate(-50%,-100%)}to{transform:translate(-50%)}}@keyframes modalSlideInFromBottom{0%{transform:translate(-50%,100%)}to{transform:translate(-50%)}}@media only screen and (max-width: 640px){#modal{top:auto;bottom:0;animation:modalSlideInFromBottom .3s forwards}}#modal footer{padding:0 21px 21px}#modal header{display:flex;justify-content:space-between;padding:21px 21px 16px}#title{font-size:21px;font-weight:600;line-height:25.2px;margin:0}.capitalize:first-letter{display:inline-block;text-transform:capitalize}#content{text-align:left;padding:0 21px 16px;overflow:auto;max-height:50vh}#modal #content p{margin:0;font-size:14px;line-height:21px}#close-icon,#close-button{cursor:pointer}#close-icon{min-width:24px;background:transparent;padding:0;border:none}#close-button{width:100%;padding:16px 21px;color:#fff;background-color:#1773b0;border:none;border-radius:5px;font-size:14px;line-height:21px;font-family:inherit}#close-button:hover,#close-button:active{background:#136f99}#close-button:active,#close-button:focus{box-shadow:0 0 0 4px #1990c640}';
function ni(t) {
    return Tn(t).map(e =>
        e instanceof Error
            ? e
            : new kn('['.concat(typeof e, '] ').concat(ai(e).slice(0, 10240)))
    );
}
function Tn(t, e = 0) {
    return e >= 20
        ? [t, 'Truncated cause stack']
        : t instanceof Error && t.cause
        ? [t, ...Tn(t.cause, e + 1)]
        : [t];
}
function ai(t) {
    var e;
    if (typeof t != 'string')
        try {
            return (e = JSON.stringify(t)) != null ? e : typeof t;
        } catch (n) {}
    return ''.concat(t);
}
var kn = class extends Error {
        constructor() {
            super(...arguments), d(this, 'name', 'BugsnagInvalidError');
        }
    },
    Ln = /^\s*at .*(\S+:\d+|\(native\))/m,
    ii = /^(eval@)?(\[native code])?$/;
function oi(t) {
    return t.stack ? (t.stack.match(Ln) ? si(t) : li(t)) : [];
}
function On(t) {
    if (t.indexOf(':') === -1) return [t];
    let e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ''));
    return [e[1], e[2] ? Number(e[2]) : void 0, e[3] ? Number(e[3]) : void 0];
}
function si(t) {
    return t.stack
        .split('\n')
        .filter(e => !!e.match(Ln))
        .map(e => {
            let n = e.replace(/^\s+/, '').replace(/^.*?\s+/, ''),
                r = n.match(/ (\(.+\)$)/);
            n = r ? n.replace(r[0], '') : n;
            let a = On(r ? r[1] : n),
                i = (r && n) || void 0,
                o = ['eval', '<anonymous>'].indexOf(a[0]) > -1 ? void 0 : a[0];
            return { method: i, file: o, lineNumber: a[1], columnNumber: a[2] };
        });
}
function li(t) {
    return t.stack
        .split('\n')
        .filter(e => !e.match(ii))
        .map(e => {
            if (e.indexOf('@') === -1 && e.indexOf(':') === -1)
                return { method: e };
            let n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                r = e.match(n),
                a = r && r[1] ? r[1] : void 0,
                i = On(e.replace(n, ''));
            return {
                method: a,
                file: i[0],
                lineNumber: i[1],
                columnNumber: i[2],
            };
        });
}
var Kr = '5',
    ci = class {
        constructor(t) {
            d(this, 'breadcrumbs', []),
                d(this, 'apiKey'),
                d(this, 'plugins'),
                d(this, 'appId'),
                d(this, 'appType'),
                d(this, 'appVersion'),
                d(this, 'releaseStage'),
                d(this, 'locale'),
                d(this, 'userAgent'),
                d(this, 'metadata'),
                d(this, 'persistedMetadata'),
                d(this, 'onError'),
                d(this, 'onPostErrorListeners', []),
                d(this, 'endpoints');
            var e, n;
            (this.apiKey = t.apiKey),
                (this.appType = t.appType),
                (this.appId = t.appId),
                (this.appVersion = t.appVersion),
                (this.releaseStage = t.releaseStage),
                (this.locale = t.locale),
                (this.userAgent = t.userAgent),
                (this.metadata = t.metadata),
                (this.onError = t.onError),
                (this.persistedMetadata = {}),
                (this.endpoints =
                    (e = t.endpoints) != null
                        ? e
                        : {
                              notify: 'https://notify.bugsnag.com/',
                              sessions: 'https://sessions.bugsnag.com',
                          }),
                (this.plugins = (n = t.plugins) != null ? n : []),
                this.plugins.forEach(r => r.load(this)),
                this.leaveBreadcrumb('Bugsnag started', void 0, 'state');
        }
        addMetadata(t) {
            for (let e of Object.keys(t)) this.persistedMetadata[e] = t[e];
        }
        leaveBreadcrumb(t, e, n = 'manual') {
            this.breadcrumbs.push({
                name: t,
                metaData: e,
                type: n,
                timestamp: new Date().toISOString(),
            });
        }
        notify(
            t,
            {
                errorClass: e,
                severity: n,
                severityType: r,
                handled: a = !0,
                metadata: i,
                context: o,
                groupingHash: s,
            } = {}
        ) {
            var l, u;
            let c = ni(t),
                h = w(w(w({}, this.metadata), this.persistedMetadata), i),
                p = this.buildBugsnagEvent(c, {
                    errorClass: e,
                    severityType: r,
                    handled: a,
                    severity: n,
                    metadata: h,
                    context: o,
                    groupingHash: s,
                });
            if (
                ((u =
                    (l = this.onError) == null ? void 0 : l.call(this, p, t)) ==
                    null ||
                    u) &&
                this.releaseStage !== 'development'
            ) {
                let y = this.sendToBugsnag(p);
                return this.onPostErrorListeners.forEach(_ => _(p)), y;
            }
            return Promise.resolve();
        }
        addOnPostError(t) {
            this.onPostErrorListeners.push(t);
        }
        buildBugsnagEvent(
            t,
            {
                errorClass: e,
                severity: n = 'error',
                severityType: r = 'handledException',
                handled: a,
                metadata: i = {},
                context: o,
                groupingHash: s,
            }
        ) {
            let l = new Date().toISOString(),
                {
                    breadcrumbs: u,
                    appId: c,
                    appType: h,
                    appVersion: p,
                    releaseStage: y,
                    locale: _,
                    userAgent: C,
                } = this,
                E = t.map((P, $) => ({
                    errorClass: $ === 0 && e != null ? e : P.name,
                    stacktrace: xn(c, P),
                    message: P.message,
                }));
            return {
                payloadVersion: Kr,
                exceptions: E,
                severity: n,
                severityReason: { type: r },
                unhandled: !a,
                app: { id: c, type: h, version: p, releaseStage: y },
                device: { time: l, locale: _, userAgent: C },
                breadcrumbs: u,
                context: o,
                metaData: i,
                groupingHash: s,
            };
        }
        async sendToBugsnag(t) {
            let { apiKey: e } = this,
                n = {
                    apiKey: e,
                    notifier: {
                        name: 'Bugsnag JavaScript',
                        version: '7.22.2',
                        url: 'https://github.com/bugsnag/bugsnag-js',
                    },
                    events: [t],
                };
            try {
                await fetch(this.endpoints.notify, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Bugsnag-Api-Key': e,
                        'Bugsnag-Payload-Version': Kr,
                        'Bugsnag-Sent-At': t.device.time,
                    },
                    body: JSON.stringify(n),
                });
            } catch (r) {
                console.warn('[bugsnag-light] failed to send an event'),
                    console.warn(r);
            }
        }
    };
function xn(t, e) {
    let n = oi(e).map(r => {
        var a, i, o, s;
        let l = (a = r.file) == null ? void 0 : a.includes(t);
        return {
            method: (i = r.method) != null ? i : '',
            file: (o = r.file) != null ? o : '',
            lineNumber: (s = r.lineNumber) != null ? s : 0,
            columnNumber: r.columnNumber,
            inProject: l,
        };
    });
    if (e instanceof kn) {
        let r = n.findIndex(a => a.method.endsWith('notify'));
        r > -1 && (n = n.slice(r + 1));
    }
    return n;
}
var di = class su extends Error {
    constructor(e) {
        super(e),
            d(this, 'reason'),
            (this.name = 'BreadcrumbsPluginFetchError'),
            Object.setPrototypeOf(this, su.prototype);
    }
};
function ui(t, { metadata: e } = {}) {
    let n = window.onerror;
    window.onerror = (r, a, i, o, s) => {
        s &&
            t.notify(s, {
                severityType: 'unhandledException',
                handled: !1,
                metadata: e,
            }),
            typeof n == 'function' && n.apply(window.onerror, [r, a, i, o, s]);
    };
}
function hi(t, { metadata: e } = {}) {
    window.addEventListener('unhandledrejection', n => {
        n.reason &&
            !(n.reason instanceof di) &&
            t.notify(n.reason, {
                severityType: 'unhandledPromiseRejection',
                handled: !1,
                metadata: e,
            });
    });
}
function ct(t) {
    try {
        const e = new RegExp('(^| )'.concat(t, '=([^;]+)')).exec(
            document.cookie
        );
        if (e) {
            const n = e[2];
            try {
                return decodeURIComponent(n);
            } catch (r) {
                return n;
            }
        }
        return null;
    } catch (e) {
        return null;
    }
}
const mr = {
        BRANDED_BUTTON:
            'shopify-payment-button__button shopify-payment-button__button--branded',
        UNBRANDED_BUTTON:
            'shopify-payment-button__button shopify-payment-button__button--unbranded',
        MORE_PAYMENT_OPTION_BUTTON: 'shopify-payment-button__more-options',
    },
    pi = { DARK: 'apple-pay--dark', LIGHT: 'apple-pay--light' },
    mi = 44,
    yi = '_shopify_y',
    Fn = 6,
    gi = 'discount_code',
    Cr = 'https://static-na.payments-amazon.com',
    Sr = ''.concat(Cr, '/checkout.js'),
    Un = 'https://www.paypal.com',
    Bn = 'https://pay.google.com',
    Qe = {
        CURRENCY_CHANGE: 'wallet_currency_change',
        CAPTCHA_REQUIRED: 'wallet_captcha_required',
        NOT_ENOUGH_STOCK: 'wallet_not_enough_stock',
        CART_NOT_READY: 'wallet_cart_not_ready',
        DYNAMIC_TAX: 'wallet_dynamic_tax',
    },
    St = 'VALIDATION_CUSTOM',
    $n = 'portable-wallets',
    De = {
        BUTTON: 'accelerated-checkout-button',
        CONTAINER: 'accelerated-checkout-button-container',
    },
    Hn = 'unknown',
    Gn = { name: 'buy_it_now', wallet_params: {} };
function zn(t) {
    try {
        return !t.toString().includes('[native code]');
    } catch (e) {
        return !0;
    }
}
const tr = new Map(),
    fi = {
        checkDuplicate({ errorClass: t, message: e }) {
            if (tr.has(t)) {
                const n = tr.get(t);
                if (n.has(e)) return !0;
                n.add(e);
            } else tr.set(t, new Set([e]));
            return !1;
        },
        reset() {},
    },
    gt = 'DeveloperError';
class ee extends Error {
    constructor({ code: e, message: n }, r) {
        const a =
            'An unexpected error happened likely because of customizations made to HTML/JavaScript on this site '.concat(
                n
            );
        super('['.concat(e, ']: ').concat(a), r),
            d(this, 'name', gt),
            d(this, 'code'),
            (this.code = e);
    }
}
const Vn = 'SilencedError';
class Ft extends Error {
    constructor() {
        super(...arguments), d(this, 'name', Vn);
    }
}
class bi extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'MissingConfigError');
    }
}
class ge extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'NoResponseError');
    }
}
class Pr extends Error {
    constructor(e, { errorDetails: n, bugsnagGroupingHash: r }) {
        super(e),
            d(this, 'errorDetails'),
            d(this, 'bugsnagGroupingHash'),
            (this.name = 'GraphQLResponseError'),
            (this.errorDetails = n),
            (this.bugsnagGroupingHash = r);
    }
}
const qn = 'IgnoredGraphQLResponseError';
class Wn extends Pr {
    constructor(e, { reason: n, errorDetails: r }) {
        super(e, { errorDetails: r }),
            d(this, 'reason'),
            (this.name = qn),
            (this.reason = n);
    }
}
function R(t, e) {
    if (!{}.hasOwnProperty.call(t, e))
        throw new TypeError('attempted to use private field on non-instance');
    return t;
}
var wi = 0;
function he(t) {
    return '__private_' + wi++ + '_' + t;
}
function Ut(t) {
    return Object.entries(t).map(([e, n]) => ({
        key: e,
        value: { stringValue: String(n) },
    }));
}
function Ei(t) {
    return Object.entries(t).map(([e, n]) => ({ key: e, value: jn(n) }));
}
function jn(t) {
    if (Array.isArray(t)) return { arrayValue: { values: t.map(e => jn(e)) } };
    switch (typeof t) {
        case 'boolean':
            return { boolValue: !!t };
        case 'number':
            return { doubleValue: Number(t) };
        case 'string':
        default:
            return { stringValue: String(t) };
    }
}
const Ir = 1,
    _i = Ai(5, 2, 12);
function Ai(t, e, n) {
    const r = [0];
    for (let a = 0; a < n; a++) {
        const i = Math.floor(t * e ** a);
        r.push(i);
    }
    return r;
}
var fe = he('exporter'),
    X = he('attributes'),
    q = he('metrics'),
    be = he('logs');
class Ci {
    constructor({ exporter: e, attributes: n }) {
        Object.defineProperty(this, fe, { writable: !0, value: void 0 }),
            Object.defineProperty(this, X, { writable: !0, value: void 0 }),
            Object.defineProperty(this, q, { writable: !0, value: [] }),
            Object.defineProperty(this, be, { writable: !0, value: [] }),
            (R(this, fe)[fe] = e),
            (R(this, X)[X] = n != null ? n : {});
    }
    addAttributes(e) {
        R(this, X)[X] = w(w({}, R(this, X)[X]), e);
    }
    histogram({
        name: e,
        value: n,
        unit: r,
        bounds: a,
        attributes: i,
        scale: o,
    }) {
        const s = Date.now() * 1e6;
        a
            ? R(this, q)[q].push({
                  name: e,
                  type: 'histogram',
                  value: n,
                  unit: r,
                  timeUnixNano: s,
                  attributes: i,
                  bounds: a,
              })
            : R(this, q)[q].push({
                  name: e,
                  type: 'exponential_histogram',
                  value: n,
                  unit: r,
                  timeUnixNano: s,
                  attributes: i,
                  scale: o,
              });
    }
    counter({ name: e, value: n, unit: r, attributes: a }) {
        const i = Date.now() * 1e6;
        R(this, q)[q].push({
            name: e,
            type: 'counter',
            value: n,
            unit: r,
            timeUnixNano: i,
            attributes: a,
        });
    }
    gauge({ name: e, value: n, unit: r, attributes: a }) {
        const i = Date.now() * 1e6;
        R(this, q)[q].push({
            name: e,
            type: 'gauge',
            value: n,
            unit: r,
            timeUnixNano: i,
            attributes: a,
        });
    }
    log({ body: e, attributes: n }) {
        const r = Date.now() * 1e6;
        R(this, be)[be].push({ timeUnixNano: r, body: e, attributes: n });
    }
    async exportMetrics() {
        const e = {};
        R(this, q)[q].forEach(r => {
            switch (
                ((r.attributes = w(w({}, R(this, X)[X]), r.attributes)), r.type)
            ) {
                case 'histogram':
                    Si(e, r);
                    break;
                case 'exponential_histogram':
                    Pi(e, r);
                    break;
                case 'counter':
                    Ii(e, r);
                    break;
                case 'gauge':
                    vi(e, r);
                    break;
            }
        });
        const n = Object.values(e);
        n.length !== 0 &&
            ((R(this, q)[q] = []), await R(this, fe)[fe].exportMetrics(n));
    }
    async exportLogs() {
        const e = R(this, be)[be].map(n => {
            const r = {
                timeUnixNano: n.timeUnixNano,
                observedTimeUnixNano: n.timeUnixNano,
                attributes: Ei(w(w({}, R(this, X)[X]), n.attributes)),
            };
            return n.body && (r.body = { stringValue: n.body }), r;
        });
        e.length !== 0 &&
            ((R(this, be)[be] = []), await R(this, fe)[fe].exportLogs(e));
    }
}
function Si(t, e) {
    var n;
    const { name: r, value: a, unit: i, timeUnixNano: o, attributes: s } = e,
        l = (n = e.bounds) !== null && n !== void 0 ? n : _i,
        u = new Array(l.length + 1).fill(0);
    t[r] ||
        (t[r] = {
            name: r,
            unit: i || '1',
            histogram: { aggregationTemporality: Ir, dataPoints: [] },
        });
    for (let c = 0; c < u.length; c++) {
        const h = l[c];
        if (h === void 0) u[c] = 1;
        else if (a <= h) {
            u[c] = 1;
            break;
        }
    }
    t[r].histogram.dataPoints.push({
        startTimeUnixNano: o,
        timeUnixNano: o,
        count: 1,
        sum: a,
        min: a,
        max: a,
        bucketCounts: u,
        explicitBounds: l,
        attributes: Ut(s != null ? s : {}),
    });
}
function Pi(t, e) {
    const {
        name: n,
        value: r,
        unit: a,
        timeUnixNano: i,
        attributes: o,
        scale: s,
    } = e;
    t[n] ||
        (t[n] = {
            name: n,
            unit: a || '1',
            exponentialHistogram: {
                aggregationTemporality: Ir,
                dataPoints: [],
            },
        });
    const l = r <= 0 ? 0 : r,
        u = s || 3,
        c = 2 ** u / Math.log(2),
        h = Math.ceil(Math.log(r) * c) - 1,
        p = r <= 0 ? 1 : 0,
        y = { offset: 0, bucketCounts: [] },
        _ = { offset: r > 0 ? h : 0, bucketCounts: r > 0 ? [1] : [] };
    t[n].exponentialHistogram.dataPoints.push({
        attributes: Ut(o != null ? o : {}),
        startTimeUnixNano: i,
        timeUnixNano: i,
        count: 1,
        sum: l,
        scale: u,
        zeroCount: p,
        positive: _,
        negative: y,
        min: l,
        max: l,
        zeroThreshold: 0,
    });
}
function Ii(t, e) {
    const { name: n, value: r, unit: a, timeUnixNano: i, attributes: o } = e;
    t[n] ||
        (t[n] = {
            name: n,
            unit: a || '1',
            sum: {
                aggregationTemporality: Ir,
                isMonotonic: !0,
                dataPoints: [],
            },
        }),
        t[n].sum.dataPoints.push({
            startTimeUnixNano: i,
            timeUnixNano: i,
            asDouble: r,
            attributes: Ut(o != null ? o : {}),
        });
}
function vi(t, e) {
    const { name: n, value: r, unit: a, timeUnixNano: i, attributes: o } = e;
    t[n] || (t[n] = { name: n, unit: a || '1', gauge: { dataPoints: [] } }),
        t[n].gauge.dataPoints.push({
            startTimeUnixNano: i,
            timeUnixNano: i,
            asDouble: r,
            attributes: Ut(o != null ? o : {}),
        });
}
var Xe = he('url'),
    we = he('serviceName'),
    Je = he('logger'),
    Ze = he('fetchFn');
class Di {
    constructor(e, n, r) {
        Object.defineProperty(this, Xe, { writable: !0, value: void 0 }),
            Object.defineProperty(this, we, { writable: !0, value: void 0 }),
            Object.defineProperty(this, Je, { writable: !0, value: void 0 }),
            Object.defineProperty(this, Ze, { writable: !0, value: void 0 }),
            (R(this, Xe)[Xe] = e.replace(
                /\/v1\/(logs|metrics|traces)\/?$/,
                ''
            )),
            (R(this, we)[we] = n),
            (R(this, Je)[Je] = r == null ? void 0 : r.logger),
            (R(this, Ze)[Ze] = r == null ? void 0 : r.fetchFn);
    }
    async exportMetrics(e) {
        const n = {
            resourceMetrics: [
                {
                    resource: {
                        attributes: [
                            {
                                key: 'service.name',
                                value: { stringValue: R(this, we)[we] },
                            },
                        ],
                    },
                    scopeMetrics: [
                        {
                            scope: {
                                name: 'open-telemetry-mini-client',
                                version: '1.1.0',
                                attributes: [],
                            },
                            metrics: e,
                        },
                    ],
                },
            ],
        };
        await this.exportTo(n, '/v1/metrics');
    }
    async exportLogs(e) {
        const n = {
            resourceLogs: [
                {
                    resource: {
                        attributes: [
                            {
                                key: 'service.name',
                                value: { stringValue: R(this, we)[we] },
                            },
                        ],
                    },
                    scopeLogs: [
                        {
                            scope: {
                                name: 'open-telemetry-mini-client',
                                version: '1.1.0',
                                attributes: [],
                            },
                            logRecords: e,
                        },
                    ],
                },
            ],
        };
        await this.exportTo(n, '/v1/logs');
    }
    async exportTo(e, n) {
        var r;
        const a = await this.exporterFetch()(
            ''.concat(R(this, Xe)[Xe]).concat(n),
            {
                method: 'POST',
                keepalive: !0,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(e),
            }
        );
        if (
            ((r = R(this, Je)[Je]) === null ||
                r === void 0 ||
                r.log({ status: a.status }),
            !a.ok)
        ) {
            if (a.status === 400) {
                const i = await a.text();
                throw new it('Invalid OpenTelemetry Data: '.concat(i));
            }
            if (a.status === 429 || a.status === 503) {
                const i = await a.text(),
                    o = a.headers.get('Retry-After'),
                    s = o ? { seconds: Number(o) } : void 0;
                throw new it('Server did not accept data', {
                    errorData: i,
                    retryAfter: s,
                    body: e,
                });
            }
            throw new it('Server responded with '.concat(a.status));
        }
    }
    exporterFetch() {
        return R(this, Ze)[Ze] || fetch;
    }
}
class it extends Error {
    constructor(e, n) {
        super(e),
            (this.metadata = void 0),
            (this.name = 'OpenTelemetryClientError'),
            (this.metadata = n);
    }
}
const Ri = 'https://otlp-http-production.shopifysvc.com',
    Ni = 'portable_wallets';
var Be;
class Ti {
    constructor(e) {
        O(this, Be), k(this, Be, e);
    }
    async exportMetrics(e) {
        var n;
        try {
            await A(this, Be).exportMetrics(e);
        } catch (r) {
            if (r instanceof it) {
                const a = (n = r.metadata) == null ? void 0 : n.retryAfter;
                if (a) {
                    await new Promise(i => {
                        setTimeout(() => {
                            this.exportMetrics(e), i();
                        }, a.seconds * 1e3);
                    });
                    return;
                }
            }
            throw new Qr('Unable to export metrics', { cause: r });
        }
    }
    async exportLogs(e) {
        var n;
        try {
            await A(this, Be).exportLogs(e);
        } catch (r) {
            if (r instanceof it) {
                const a = (n = r.metadata) == null ? void 0 : n.retryAfter;
                if (a) {
                    await new Promise(i => {
                        setTimeout(() => {
                            this.exportLogs(e), i();
                        }, a.seconds * 1e3);
                    });
                    return;
                }
            }
            throw new Qr('Unable to export logs', { cause: r });
        }
    }
}
Be = new WeakMap();
const ki = new Di(Ri, Ni),
    Li = new Ti(ki),
    I = new Ci({ exporter: Li }),
    Yn = 'TelemetryExportError';
class Qr extends Error {
    constructor() {
        super(...arguments), d(this, 'name', Yn);
    }
}
const Bt = 'GraphQL Client',
    Xr = 0,
    Jr = 3,
    Kn =
        "An error occurred while fetching from the API. Review 'graphQLErrors' for details.",
    Qn = 'Response returned unexpected Content-Type:',
    Xn =
        'An unknown error has occurred. The API did not return a data object or any errors in its response.',
    yr = { json: 'application/json', multipart: 'multipart/mixed' },
    Zr = 'X-SDK-Variant',
    en = 'X-SDK-Version',
    Oi = 'shopify-graphql-client',
    xi = '1.3.0',
    Jn = 1e3,
    Mi = [429, 503],
    Zn = /@(defer)\b/i,
    tn = '\r\n',
    Fi = /boundary="?([^=";]+)"?/i,
    rn = tn + tn;
function de(t, e = Bt) {
    return t.startsWith(''.concat(e)) ? t : ''.concat(e, ': ').concat(t);
}
function je(t) {
    return t instanceof Error ? t.message : JSON.stringify(t);
}
function ea(t) {
    return t instanceof Error && t.cause ? t.cause : void 0;
}
function ta(t) {
    return t.flatMap(({ errors: e }) => (e != null ? e : []));
}
function ra({ client: t, retries: e }) {
    if (e !== void 0 && (typeof e != 'number' || e < Xr || e > Jr))
        throw new Error(
            ''
                .concat(t, ': The provided "retries" value (')
                .concat(e, ') is invalid - it cannot be less than ')
                .concat(Xr, ' or greater than ')
                .concat(Jr)
        );
}
function z(t, e) {
    return e &&
        (typeof e != 'object' ||
            Array.isArray(e) ||
            (typeof e == 'object' && Object.keys(e).length > 0))
        ? { [t]: e }
        : {};
}
function na(t, e) {
    if (t.length === 0) return e;
    const n = { [t.pop()]: e };
    return t.length === 0 ? n : na(t, n);
}
function aa(t, e) {
    return Object.keys(e || {}).reduce(
        (n, r) =>
            (typeof e[r] == 'object' || Array.isArray(e[r])) && t[r]
                ? ((n[r] = aa(t[r], e[r])), n)
                : ((n[r] = e[r]), n),
        Array.isArray(t) ? [...t] : w({}, t)
    );
}
function ia([t, ...e]) {
    return e.reduce(aa, w({}, t));
}
function Ui({
    clientLogger: t,
    customFetchApi: e = fetch,
    client: n = Bt,
    defaultRetryWaitTime: r = Jn,
    retriableCodes: a = Mi,
}) {
    const i = async (o, s, l) => {
        const u = s + 1,
            c = l + 1;
        let h;
        try {
            if (
                ((h = await e(...o)),
                t({
                    type: 'HTTP-Response',
                    content: { requestParams: o, response: h },
                }),
                !h.ok && a.includes(h.status) && u <= c)
            )
                throw new Error();
            return h;
        } catch (p) {
            if (u <= c) {
                const y = h == null ? void 0 : h.headers.get('Retry-After');
                return (
                    await Bi(y ? parseInt(y, 10) : r),
                    t({
                        type: 'HTTP-Retry',
                        content: {
                            requestParams: o,
                            lastResponse: h,
                            retryAttempt: s,
                            maxRetries: l,
                        },
                    }),
                    i(o, u, l)
                );
            }
            throw new Error(
                de(
                    ''
                        .concat(
                            l > 0
                                ? 'Attempted maximum number of '.concat(
                                      l,
                                      ' network retries. Last message - '
                                  )
                                : ''
                        )
                        .concat(je(p)),
                    n
                )
            );
        }
    };
    return i;
}
async function Bi(t) {
    return new Promise(e => setTimeout(e, t));
}
function $i({
    headers: t,
    url: e,
    customFetchApi: n = fetch,
    retries: r = 0,
    logger: a,
}) {
    ra({ client: Bt, retries: r });
    const i = { headers: t, url: e, retries: r },
        o = Hi(a),
        s = Ui({
            customFetchApi: n,
            clientLogger: o,
            defaultRetryWaitTime: Jn,
        }),
        l = Gi(s, i),
        u = zi(l),
        c = Qi(l);
    return { config: i, fetch: l, request: u, requestStream: c };
}
function Hi(t) {
    return e => {
        t && t(e);
    };
}
async function oa(t) {
    const { errors: e, data: n, extensions: r } = await t.json();
    return w(
        T(w(w({}, z('data', n)), z('extensions', r)), { headers: t.headers }),
        e || !n
            ? {
                  errors: T(
                      w(
                          {
                              networkStatusCode: t.status,
                              message: de(e ? Kn : Xn),
                          },
                          z('graphQLErrors', e)
                      ),
                      { response: t }
                  ),
              }
            : {}
    );
}
function Gi(t, { url: e, headers: n, retries: r }) {
    return async (a, i = {}) => {
        const {
                variables: o,
                headers: s,
                url: l,
                retries: u,
                keepalive: c,
                signal: h,
            } = i,
            p = JSON.stringify({ query: a, variables: o });
        ra({ client: Bt, retries: u });
        const y = Object.entries(w(w({}, n), s)).reduce(
            (C, [E, P]) => (
                (C[E] = Array.isArray(P) ? P.join(', ') : P.toString()), C
            ),
            {}
        );
        !y[Zr] && !y[en] && ((y[Zr] = Oi), (y[en] = xi));
        const _ = [
            l != null ? l : e,
            { method: 'POST', headers: y, body: p, signal: h, keepalive: c },
        ];
        return t(_, 1, u != null ? u : r);
    };
}
function zi(t) {
    return async (...e) => {
        if (Zn.test(e[0]))
            throw new Error(
                de(
                    'This operation will result in a streamable response - use requestStream() instead.'
                )
            );
        try {
            const n = await t(...e),
                { status: r, statusText: a } = n,
                i = n.headers.get('content-type') || '';
            return n.ok
                ? i.includes(yr.json)
                    ? oa(n)
                    : {
                          errors: {
                              networkStatusCode: r,
                              message: de(''.concat(Qn, ' ').concat(i)),
                              response: n,
                          },
                      }
                : {
                      errors: {
                          networkStatusCode: r,
                          message: de(a),
                          response: n,
                      },
                  };
        } catch (n) {
            return { errors: { message: je(n) } };
        }
    };
}
function Vi(t) {
    return ke(this, null, function* () {
        const e = new TextDecoder();
        if (t.body[Symbol.asyncIterator])
            try {
                for (
                    var n = re(t.body), r, a, i;
                    (r = !(a = yield new te(n.next())).done);
                    r = !1
                ) {
                    const o = a.value;
                    yield e.decode(o);
                }
            } catch (o) {
                i = [o];
            } finally {
                try {
                    r && (a = n.return) && (yield new te(a.call(n)));
                } finally {
                    if (i) throw i[0];
                }
            }
        else {
            const o = t.body.getReader();
            let s;
            try {
                for (; !(s = yield new te(o.read())).done; )
                    yield e.decode(s.value);
            } finally {
                o.cancel();
            }
        }
    });
}
function qi(t, e) {
    return {
        [Symbol.asyncIterator]() {
            return ke(this, null, function* () {
                try {
                    let o = '';
                    try {
                        for (
                            var n = re(t), r, a, i;
                            (r = !(a = yield new te(n.next())).done);
                            r = !1
                        ) {
                            const s = a.value;
                            if (((o += s), o.indexOf(e) > -1)) {
                                const l = o.lastIndexOf(e),
                                    u = o
                                        .slice(0, l)
                                        .split(e)
                                        .filter(c => c.trim().length > 0)
                                        .map(c =>
                                            c
                                                .slice(
                                                    c.indexOf(rn) + rn.length
                                                )
                                                .trim()
                                        );
                                u.length > 0 && (yield u),
                                    (o = o.slice(l + e.length)),
                                    o.trim() === '--' && (o = '');
                            }
                        }
                    } catch (s) {
                        i = [s];
                    } finally {
                        try {
                            r && (a = n.return) && (yield new te(a.call(n)));
                        } finally {
                            if (i) throw i[0];
                        }
                    }
                } catch (o) {
                    throw new Error(
                        'Error occured while processing stream payload - '.concat(
                            je(o)
                        )
                    );
                }
            });
        },
    };
}
function Wi(t) {
    return {
        [Symbol.asyncIterator]() {
            return ke(this, null, function* () {
                const e = yield new te(oa(t));
                yield T(w({}, e), { hasNext: !1 });
            });
        },
    };
}
function ji(t) {
    return t
        .map(e => {
            try {
                return JSON.parse(e);
            } catch (n) {
                throw new Error(
                    'Error in parsing multipart response - '.concat(je(n))
                );
            }
        })
        .map(e => {
            const {
                data: n,
                incremental: r,
                hasNext: a,
                extensions: i,
                errors: o,
            } = e;
            if (!r)
                return T(
                    w(w({ data: n || {} }, z('errors', o)), z('extensions', i)),
                    { hasNext: a }
                );
            const s = r.map(({ data: l, path: u, errors: c }) =>
                w({ data: l && u ? na(u, l) : {} }, z('errors', c))
            );
            return T(
                w(
                    {
                        data:
                            s.length === 1
                                ? s[0].data
                                : ia([...s.map(({ data: l }) => l)]),
                    },
                    z('errors', ta(s))
                ),
                { hasNext: a }
            );
        });
}
function Yi(t, e) {
    if (t.length > 0) throw new Error(Kn, { cause: { graphQLErrors: t } });
    if (Object.keys(e).length === 0) throw new Error(Xn);
}
function Ki(t, e) {
    var n, r;
    const a = (e != null ? e : '').match(Fi),
        i = '--'.concat(a ? a[1] : '-');
    if (
        !((n = t.body) != null && n.getReader) &&
        !((r = t.body) != null && r[Symbol.asyncIterator])
    )
        throw new Error(
            'API multipart response did not return an iterable body',
            { cause: t }
        );
    const o = Vi(t);
    let s = {},
        l;
    return {
        [Symbol.asyncIterator]() {
            return ke(this, null, function* () {
                var u, c;
                try {
                    let C = !0;
                    try {
                        for (
                            var h = re(qi(o, i)), p, y, _;
                            (p = !(y = yield new te(h.next())).done);
                            p = !1
                        ) {
                            const E = y.value,
                                P = ji(E);
                            l =
                                (c =
                                    (u = P.find(B => B.extensions)) == null
                                        ? void 0
                                        : u.extensions) != null
                                    ? c
                                    : l;
                            const $ = ta(P);
                            (s = ia([s, ...P.map(({ data: B }) => B)])),
                                (C = P.slice(-1)[0].hasNext),
                                Yi($, s),
                                yield T(
                                    w(w({}, z('data', s)), z('extensions', l)),
                                    { hasNext: C }
                                );
                        }
                    } catch (E) {
                        _ = [E];
                    } finally {
                        try {
                            p && (y = h.return) && (yield new te(y.call(h)));
                        } finally {
                            if (_) throw _[0];
                        }
                    }
                    if (C)
                        throw new Error(
                            'Response stream terminated unexpectedly'
                        );
                } catch (C) {
                    const E = ea(C);
                    yield T(w(w({}, z('data', s)), z('extensions', l)), {
                        errors: T(
                            w(
                                {
                                    message: de(je(C)),
                                    networkStatusCode: t.status,
                                },
                                z(
                                    'graphQLErrors',
                                    E == null ? void 0 : E.graphQLErrors
                                )
                            ),
                            { response: t }
                        ),
                        hasNext: !1,
                    });
                }
            });
        },
    };
}
function Qi(t) {
    return async (...e) => {
        if (!Zn.test(e[0]))
            throw new Error(
                de(
                    'This operation does not result in a streamable response - use request() instead.'
                )
            );
        try {
            const n = await t(...e),
                { statusText: r } = n;
            if (!n.ok) throw new Error(r, { cause: n });
            const a = n.headers.get('content-type') || '';
            switch (!0) {
                case a.includes(yr.json):
                    return Wi(n);
                case a.includes(yr.multipart):
                    return Ki(n, a);
                default:
                    throw new Error(''.concat(Qn, ' ').concat(a), { cause: n });
            }
        } catch (n) {
            return {
                [Symbol.asyncIterator]() {
                    return ke(this, null, function* () {
                        const r = ea(n);
                        yield {
                            errors: w(
                                w(
                                    { message: de(je(n)) },
                                    z(
                                        'networkStatusCode',
                                        r == null ? void 0 : r.status
                                    )
                                ),
                                z('response', r)
                            ),
                            hasNext: !1,
                        };
                    });
                },
            };
        }
    };
}
var g = (t => (
    (t.InvalidLanguage =
        'Variable $language of type LanguageCode was provided invalid value'),
    (t.InvalidCountry =
        'Variable $country of type CountryCode was provided invalid value'),
    (t.MissingCartId =
        'Variable $cartId of type ID! was provided invalid value'),
    (t.BuyerIdentityInvalidCountry =
        'Variable $buyerIdentity of type CartBuyerIdentityInput! was provided invalid value for countryCode'),
    (t.BuyerIdentityInvalidPhone = 'INVALID: buyerIdentity.phone'),
    (t.BuyerIdentityEmailRequired = 'BUYER_IDENTITY_EMAIL_REQUIRED'),
    (t.BuyerIdentityEmailDomainInvalid =
        'BUYER_IDENTITY_EMAIL_DOMAIN_IS_INVALID'),
    (t.BuyerIdentityEmailNotExpectedPattern =
        'BUYER_IDENTITY_EMAIL_DOES_NOT_MATCH_EXPECTED_PATTERN'),
    (t.BuyerIdentityEmailInvalid = 'INVALID: buyerIdentity.email'),
    (t.CaptchaCompletionRequired = 'CAPTCHA_COMPLETION_REQUIRED'),
    (t.CustomValidation = ''.concat(St)),
    (t.DeliveryFirstNameInvalid = 'DELIVERY_FIRST_NAME_INVALID'),
    (t.DeliveryFirstNameRequired = 'DELIVERY_FIRST_NAME_REQUIRED'),
    (t.BuyerIdentityDeliveryFirstNameRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
    (t.DeliveryFirstNameContainsEmojis =
        'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
    (t.DeliveryFirstNameTooLong =
        'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
    (t.DeliveryFirstNameContainsUrl =
        'ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
    (t.DeliveryFirstNameContainsHtmlTags =
        'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
    (t.DeliveryFirstNameDoesNotMatchExpectedPattern =
        'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
    (t.DeliveryLastNameInvalid = 'DELIVERY_LAST_NAME_INVALID'),
    (t.DeliveryLastNameRequired = 'DELIVERY_LAST_NAME_REQUIRED'),
    (t.BuyerIdentityDeliveryLastNameRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
    (t.DeliveryLastNameContainsEmojis =
        'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
    (t.DeliveryLastNameTooLong =
        'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
    (t.DeliveryLastNameContainsUrl =
        'ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
    (t.DeliveryLastNameContainsHtmlTags =
        'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
    (t.DeliveryLastNameDoesNotMatchExpectedPattern =
        'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
    (t.BuyerIdentityDeliveryAddress1Required =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1'),
    (t.DeliveryAddress1Required = 'DELIVERY_ADDRESS1_REQUIRED'),
    (t.DeliveryAddress1Invalid = 'DELIVERY_ADDRESS1_INVALID'),
    (t.DeliveryAddress1TooLong =
        'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1'),
    (t.DeliveryAddress1ContainsHtmlTags =
        'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1'),
    (t.DeliveryAddress1ContainsEmojis =
        'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1'),
    (t.DeliveryAddress2Required = 'DELIVERY_ADDRESS2_REQUIRED'),
    (t.DeliveryAddress2AddressFieldRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
    (t.DeliveryAddress2Invalid = 'DELIVERY_ADDRESS2_INVALID'),
    (t.DeliveryAddress2TooLong =
        'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
    (t.DeliveryAddress2ContainsHtmlTags =
        'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
    (t.DeliveryAddress2ContainsEmojis =
        'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
    (t.DeliveryCityRequired = 'DELIVERY_CITY_REQUIRED'),
    (t.DeliveryCityAddressFieldRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
    (t.DeliveryCityInvalid = 'DELIVERY_CITY_INVALID'),
    (t.DeliveryCityTooLong =
        'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
    (t.DeliveryCityContainsHtmlTags =
        'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
    (t.DeliveryCityContainsEmojis =
        'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
    (t.DeliveryZoneNotFound = 'DELIVERY_ZONE_NOT_FOUND'),
    (t.DeliveryZoneRequiredForCountry = 'DELIVERY_ZONE_REQUIRED_FOR_COUNTRY'),
    (t.DeliveryProvinceRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.province'),
    (t.DeliveryPostalCodeInvalid = 'DELIVERY_POSTAL_CODE_INVALID'),
    (t.DeliveryInvalidPostalCodeForZone =
        'DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE'),
    (t.DeliveryInvalidPostalCodeForCountry =
        'DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY'),
    (t.DeliveryPostalCodeRequired = 'DELIVERY_POSTAL_CODE_REQUIRED'),
    (t.DeliveryPostalCodeAddressFieldRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip'),
    (t.DeliveryZipInvalidForProvince = 'INVALID_ZIP_CODE_FOR_PROVINCE'),
    (t.BuyerIdentityDeliveryZipInvalidForProvince =
        'INVALID_ZIP_CODE_FOR_PROVINCE: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip'),
    (t.DeliveryZipInvalidForCountry =
        'INVALID_ZIP_CODE_FOR_COUNTRY: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip'),
    (t.DeliveryPostalCodeContainsEmojis =
        'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip'),
    (t.DeliveryCountryRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country'),
    (t.DeliveryCountryInvalid =
        'INVALID: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country'),
    (t.DeliveryPhoneNumberRequired = 'DELIVERY_PHONE_NUMBER_REQUIRED'),
    (t.BuyerIdentityDeliveryPhoneNumberRequired =
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone'),
    (t.DeliveryOptionsPhoneNumberRequired =
        'DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED'),
    (t.DeliveryPhoneNumberInvalid = 'DELIVERY_PHONE_NUMBER_INVALID'),
    (t.DeliveryPhoneDoesNotMatchExpectedPattern =
        'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone'),
    (t.MerchandiseOutOfStock = 'MERCHANDISE_OUT_OF_STOCK'),
    (t.MerchandiseNotEnoughStock = 'MERCHANDISE_NOT_ENOUGH_STOCK'),
    (t.InvalidQuantity = 'INVALID: input.lines.0.quantity'),
    (t.DeliveryOutOfStockAtOrigin = 'DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION'),
    (t.DeliveryExternalPromiseUnfulfillable =
        'DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE'),
    (t.MerchandiseNotApplicable = 'MERCHANDISE_NOT_APPLICABLE'),
    (t.MerchandiseVariantNotFound = 'MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND'),
    (t.MerchandiseNotFound = 'MERCHANDISE_NOT_FOUND'),
    (t.MerchandiseNotPublished = 'MERCHANDISE_PRODUCT_NOT_PUBLISHED'),
    (t.MerchandiseNotSupportedForB2B =
        'MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B'),
    (t.MerchandiseBundleRequiresComponents =
        'MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS'),
    (t.MerchandiseGiftCardsNotSupported =
        'MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED'),
    (t.MerchandiseGiftCardGreaterThanZero =
        'MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO'),
    (t.MerchandiseGiftCardCannotExceedLimit =
        'MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT'),
    (t.UnacceptablePaymentsAmount = 'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT'),
    (t.DiscountNotApplicable = 'DISCOUNT_NOT_APPLICABLE'),
    (t.DeliveryNotAvailable = 'DELIVERY_NO_DELIVERY_AVAILABLE'),
    (t.DeliveryNoStrategyAvailable = 'DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE'),
    (t.DeliveryNoLocalPickupStrategyAvailable =
        'DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE'),
    (t.DeliveryLineChanged = 'DELIVERY_DELIVERY_LINE_DETAIL_CHANGED'),
    (t.DeliveryLocalPickupLineChanged =
        'DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED'),
    (t.DeliveryNoDeliveryAvailableForMerchandise =
        'DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE'),
    (t.DeliveryFulfillmentConstraintNotSatisfied =
        'DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED'),
    (t.DeliveryFulfillmentLocationConstraint =
        'DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED'),
    (t.NoDeliveryGroupSelected = 'NO_DELIVERY_GROUP_SELECTED'),
    (t.DeliveryOptionInvalid =
        'INVALID_DELIVERY_OPTION: selectedDeliveryOptions'),
    (t.DeliveryGroupInvalid =
        'INVALID_DELIVERY_GROUP: selectedDeliveryOptions'),
    (t.DeliveryDetailChanged = 'DELIVERY_DETAIL_CHANGED'),
    (t.PendingDeliveryGroups = 'PENDING_DELIVERY_GROUPS'),
    (t.InvalidPaymentAmount = 'INVALID_PAYMENT: amount'),
    (t.InvalidPaymentPaymentAmount = 'INVALID_PAYMENT: payment.amount'),
    (t.NewTaxMustBeAccepted = 'TAX_NEW_TAX_MUST_BE_ACCEPTED'),
    (t.MerchandiseExpectedPriceMismatch =
        'MERCHANDISE_EXPECTED_PRICE_MISMATCH'),
    (t.InvalidPaymentApplePayBillingAddress =
        'INVALID_PAYMENT: payment.walletPaymentMethod.applePayWalletContent.billingAddress'),
    (t.InvalidPaymentGooglePayBillingAddress =
        'INVALID_PAYMENT: payment.walletPaymentMethod.googlePayWalletContent.billingAddress'),
    (t.InvalidPaymentBillingAddress =
        'INVALID_PAYMENT: payment.freePaymentMethod.billingAddress'),
    (t.UnsupportedGooglePayPaymentMethod =
        'PAYMENT_METHOD_NOT_SUPPORTED: payment.walletPaymentMethod.googlePayWalletContent'),
    (t.UnsupportedApplePayPaymentMethod =
        'PAYMENT_METHOD_NOT_SUPPORTED: payment.walletPaymentMethod.applePayWalletContent'),
    t
))(g || {});
const Xi = [
        'DELIVERY_FIRST_NAME_REQUIRED',
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName',
    ],
    Ji = [
        'DELIVERY_FIRST_NAME_INVALID',
        'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName',
    ],
    Zi = [
        'DELIVERY_LAST_NAME_REQUIRED',
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName',
    ],
    eo = [
        'DELIVERY_LAST_NAME_INVALID',
        'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName',
    ],
    to = [
        'DELIVERY_ADDRESS1_REQUIRED',
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1',
    ],
    ro = [
        'DELIVERY_ADDRESS2_REQUIRED',
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2',
    ],
    no = [
        'DELIVERY_CITY_REQUIRED',
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city',
    ],
    ao = [
        'DELIVERY_POSTAL_CODE_REQUIRED',
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip',
    ],
    sa = [
        'DELIVERY_POSTAL_CODE_INVALID',
        'INVALID_ZIP_CODE_FOR_COUNTRY: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip',
        'INVALID_ZIP_CODE_FOR_PROVINCE',
        'DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE',
        'DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY',
        'INVALID_ZIP_CODE_FOR_PROVINCE: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip',
    ],
    io = [
        'DELIVERY_PHONE_NUMBER_REQUIRED',
        'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone',
    ],
    oo = [
        'INVALID: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country',
        'Variable $buyerIdentity of type CartBuyerIdentityInput! was provided invalid value for countryCode',
    ],
    so = [
        'DELIVERY_PHONE_NUMBER_INVALID',
        'INVALID: buyerIdentity.phone',
        'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone',
    ],
    la = [
        'INVALID_DELIVERY_OPTION: selectedDeliveryOptions',
        'INVALID_DELIVERY_GROUP: selectedDeliveryOptions',
        'DELIVERY_NO_DELIVERY_AVAILABLE',
        'DELIVERY_DETAIL_CHANGED',
        'NO_DELIVERY_GROUP_SELECTED',
        'DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE',
        'DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE',
    ],
    ca = ['INVALID_PAYMENT: amount', 'INVALID_PAYMENT: payment.amount'],
    vr = [
        'TAX_NEW_TAX_MUST_BE_ACCEPTED',
        'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT',
    ],
    lo = [
        'DELIVERY_DELIVERY_LINE_DETAIL_CHANGED',
        'DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED',
    ],
    co = [
        'INVALID_PAYMENT: payment.freePaymentMethod.billingAddress',
        'INVALID_PAYMENT: payment.walletPaymentMethod.applePayWalletContent.billingAddress',
    ],
    da = [
        'DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE',
        'DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION',
        'DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED',
        'DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED',
        'DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE',
        'MERCHANDISE_OUT_OF_STOCK',
        'MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND',
        'MERCHANDISE_NOT_FOUND',
        'MERCHANDISE_PRODUCT_NOT_PUBLISHED',
        'MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B',
        'MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS',
        'MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED',
        'MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO',
        'MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT',
        'INVALID: input.lines.0.quantity',
        'MERCHANDISE_NOT_APPLICABLE',
    ],
    uo =
        'mutation cartCreate($input:CartInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartCreate(input:$input){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}',
    ho =
        'mutation cartAttributesUpdate($cartId:ID!$attributes:[AttributeInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartAttributesUpdate(cartId:$cartId attributes:$attributes){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}',
    po =
        'mutation cartBillingAddressUpdate($cartId:ID!$billingAddress:MailingAddressInput$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartBillingAddressUpdate(cartId:$cartId billingAddress:$billingAddress){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}',
    mo =
        'mutation cartBuyerIdentityUpdate($cartId:ID!$buyerIdentity:CartBuyerIdentityInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartBuyerIdentityUpdate(cartId:$cartId buyerIdentity:$buyerIdentity){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}',
    yo =
        'mutation cartSelectedDeliveryOptionsUpdate($cartId:ID!$selectedDeliveryOptions:[CartSelectedDeliveryOptionInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartSelectedDeliveryOptionsUpdate(cartId:$cartId selectedDeliveryOptions:$selectedDeliveryOptions){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}',
    go =
        'mutation applePaySessionCreate($validationUrl:URL!){applePaySessionCreate(validationUrl:$validationUrl){...@defer{applePaySession{body}}}}',
    fo =
        'mutation PayPalBuyerDetailsFetch($token:String!$cartId:ID){paypalBuyerDetailsFetch(token:$token cartId:$cartId){...@defer{paypalDetails{email expiresAt remoteOrderId destinationAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}billingAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}}}}}',
    bo =
        'mutation PayPalTokenCreate($cartId:ID!){paypalTokenCreate(cartId:$cartId){...@defer{paypalToken{token}}}}',
    wo =
        'query cartQuery($id:ID!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){cart(id:$id){...@defer(if:$withCarrierRates){...CartParts}}}',
    Eo =
        'query limitedCartQuery($id:ID!$country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){cart(id:$id){id lines(first:50){edges{node{merchandise{...on ProductVariant{requiresShipping}}sellingPlanAllocation{sellingPlan{id}}}}}}}',
    _o =
        'query subscriptionPolicyQuery($country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){shop{subscriptionPolicy(sanitized:true){body}}}',
    Ao =
        'mutation cartPaymentUpdate($cartId:ID!$input:CartPaymentInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartPaymentUpdate(cartId:$cartId payment:$input){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}',
    Et =
        'fragment CartParts on Cart{id checkoutUrl deliveryGroups(first:10 withCarrierRates:$withCarrierRates){edges{node{id groupType selectedDeliveryOption{code title handle deliveryPromise deliveryMethodType estimatedCost{amount currencyCode}}deliveryOptions{code title handle deliveryPromise deliveryMethodType estimatedCost{amount currencyCode}}}}}cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}totalTaxAmount{amount currencyCode}totalDutyAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}discountCodes{code applicable}lines(first:10){edges{node{quantity cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}merchandise{...on ProductVariant{requiresShipping}}sellingPlanAllocation{priceAdjustments{price{amount currencyCode}}sellingPlan{billingPolicy{...on SellingPlanRecurringBillingPolicy{interval intervalCount}}priceAdjustments{orderCount}recurringDeliveries}}}}}}',
    rr = 'fragment CartErrorParts on CartUserError{message field code}',
    nn =
        'fragment PreparedCartFragment on Mutation{preparedCart:cartPrepareForCompletion(cartId:$cartId)@include(if:$prepareCart){...@defer{result{__typename ...on CartStatusReady{cart{...CartParts}}...on CartStatusNotReady{cart{...CartParts}errors{code message}}...on CartThrottled{cart{...CartParts}pollAfter}}errors:userErrors{...CartErrorParts}}}}',
    Co =
        'mutation prepareCart($cartId:ID!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=true)@inContext(country:$country language:$language){...PreparedCartFragment}',
    So =
        'mutation cartSubmitForCompletion($cartId:ID!$attemptToken:String!$country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){cartSubmitForCompletion(cartId:$cartId attemptToken:$attemptToken){result{__typename ...on SubmitSuccess{redirectUrl}...on SubmitThrottled{pollAfterV2:pollAfter}...on SubmitFailed{errors{code message}checkoutUrl}}errors:userErrors{...on CartUserError{code field message}}}}',
    Po =
        'mutation cartRemovePersonalData($cartId:ID!){cartRemovePersonalData(cartId:$cartId){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}';
async function Io(t, e) {
    var n, r;
    if (!e.errors) return;
    const a = ko(e.errors, t),
        i = await To(e.errors.response),
        o =
            ((r = (n = e.errors.response) == null ? void 0 : n.headers) == null
                ? void 0
                : r.get('content-type')) || void 0,
        s = [];
    if (e.errors.graphQLErrors)
        for (const l of e.errors.graphQLErrors) l.code && s.push(l.code);
    return {
        operationName: t,
        statusCode: e.errors.networkStatusCode,
        contentType: o,
        message: a,
        responseBody: i,
        errorCodes: s,
    };
}
const vo = [/API multipart response did not return an iterable body/],
    Do = [/signal is aborted/i, /fetch is aborted/i, /operation was aborted/i],
    Ro = [
        /timed?.out/i,
        /error occured while processing stream payload/i,
        /response stream terminated/i,
    ];
function No(t) {
    if (t.statusCode && t.statusCode !== 200)
        return { isIgnorable: !0, reason: 'statusCode-'.concat(t.statusCode) };
    if (t.message) {
        if (Ro.some(e => e.test(t.message)))
            return { isIgnorable: !0, reason: 'timeout' };
        if (Do.some(e => e.test(t.message)))
            return { isIgnorable: !0, reason: 'abort' };
        if (vo.some(e => e.test(t.message)))
            return { isIgnorable: !0, reason: 'message' };
    }
    return { isIgnorable: !1, reason: void 0 };
}
async function To(t) {
    if (!t || t.bodyUsed) return '';
    try {
        return (await t.text()).slice(0, 1024);
    } catch (e) {
        return console.error('Failed to read response body:', e), '';
    }
}
function ko(t, e) {
    var n, r;
    if (!t) return '';
    const a =
            (r =
                (n = t.graphQLErrors) == null
                    ? void 0
                    : n.map(s => s.message).join(', ')) != null
                ? r
                : '',
        i = ''.concat(t.message).concat(a.length > 0 ? ' - '.concat(a) : ''),
        o = t.networkStatusCode
            ? 'with status '.concat(t.networkStatusCode, ' => ').concat(i)
            : '=> '.concat(i);
    return 'GraphQL response error for '.concat(e, ': ').concat(o);
}
function Lo(t) {
    const { operationName: e, errorCodes: n } = t,
        r = n.join('-') || 'unknown';
    return ''.concat(e, '-').concat(r);
}
const an = 'UNKNOWN';
function Oo({ url: t, accessToken: e }) {
    return {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Shopify-Storefront-Access-Token': e,
            'X-SDK-Variant': 'portable-wallets',
        },
        url: t,
        retries: 0,
        customFetchApi: (n, r) => (
            b.leaveBreadcrumb(
                'Request '
                    .concat((r == null ? void 0 : r.method) || an, ': ')
                    .concat(n),
                { url: n, method: r == null ? void 0 : r.method },
                'request'
            ),
            fetch(n, r)
        ),
        logger: n => {
            if (n.type === 'HTTP-Response') {
                const [r, a] = n.content.requestParams,
                    {
                        status: i,
                        statusText: o,
                        headers: s,
                        type: l,
                    } = n.content.response;
                b.leaveBreadcrumb(
                    'Response '
                        .concat((a == null ? void 0 : a.method) || an, ': ')
                        .concat(r),
                    {
                        statusCode: i,
                        statusText: o,
                        responseHeaders: xo(s),
                        responseType: l,
                        url: r,
                        method: a == null ? void 0 : a.method,
                        headers: a == null ? void 0 : a.headers,
                        body: a == null ? void 0 : a.body,
                    },
                    'log'
                );
            }
        },
    };
}
function xo(t) {
    if ('fromEntries' in Object) return Object.fromEntries(t);
    const e = {};
    for (const [n, r] of t.entries()) e[n] = r;
    return e;
}
var f = (t => (
        (t.BuyItNow = 'BuyItNow'),
        (t.MoreOptions = 'MoreOptions'),
        (t.ApplePay = 'ApplePay'),
        (t.PayPal = 'PayPal'),
        (t.Venmo = 'Venmo'),
        (t.GooglePay = 'GooglePay'),
        (t.ShopPay = 'ShopPay'),
        (t.MetaPay = 'FacebookPay'),
        (t.BuyWithPrime = 'BuyWithPrime'),
        (t.AmazonPay = 'AmazonPay'),
        (t.Unknown = 'Unknown'),
        t
    ))(f || {}),
    $t = (t => ((t.InvalidQuantity = 'InvalidQuantity'), t))($t || {}),
    S = (t => (
        (t.CartPage = 'cart_page'),
        (t.CartAjax = 'cart_ajax'),
        (t.ProductPage = 'product'),
        (t.Checkout = 'checkout'),
        (t.Unknown = 'unknown'),
        t
    ))(S || {}),
    tt = (t => (
        (t.CartChange = '/cart/change'),
        (t.CartUpdate = '/cart/update'),
        (t.CartAdd = '/cart/add'),
        (t.CartClear = '/cart/clear'),
        t
    ))(tt || {}),
    ve = (t => (
        (t.OneTimePurchase = 'ONE_TIME_PURCHASE'),
        (t.Subscription = 'SUBSCRIPTION'),
        t
    ))(ve || {});
function Mo(t) {
    const e = document.querySelectorAll(
            'shopify-accelerated-checkout .shopify-payment-button__skeleton, shopify-accelerated-checkout-cart .wallet-cart-button__skeleton'
        ),
        n = document.getElementById('shopify-buyer-consent');
    for (let r = 0; r < e.length; r++) e[r].remove();
    n && n.remove();
}
function ua(t) {
    !(t instanceof ErrorEvent) ||
        !(typeof t.message == 'string' && t.message.includes('import.meta')) ||
        !(
            typeof t.filename == 'string' &&
            t.filename.includes('portable-wallets')
        ) ||
        (window.removeEventListener('error', ua),
        (window.Shopify.PaymentButton.failedToLoad = t),
        document.readyState === 'loading'
            ? document.addEventListener(
                  'DOMContentLoaded',
                  window.Shopify.PaymentButton.init
              )
            : window.Shopify.PaymentButton.init());
}
window.addEventListener('error', ua);
function Fo(t, e, n) {
    return (
        (e = Bo(e)) in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function on(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (a) {
                return Object.getOwnPropertyDescriptor(t, a).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function sn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? on(Object(n), !0).forEach(function (r) {
                  Fo(t, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : on(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                      t,
                      r,
                      Object.getOwnPropertyDescriptor(n, r)
                  );
              });
    }
    return t;
}
function Uo(t, e) {
    if (typeof t != 'object' || !t) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(t, e);
        if (typeof r != 'object') return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(t);
}
function Bo(t) {
    var e = Uo(t, 'string');
    return typeof e == 'symbol' ? e : e + '';
}
const $o = 'https://monorail-edge.shopifysvc.com',
    Ho = '/v1/produce';
function Go() {
    if (typeof crypto < 'u' && crypto && typeof crypto.randomUUID == 'function')
        return crypto.randomUUID();
    const t = new Array(36);
    for (let e = 0; e < 36; e++) t[e] = Math.floor(Math.random() * 16);
    return (
        (t[14] = 4),
        (t[19] = t[19] &= -5),
        (t[19] = t[19] |= 8),
        (t[8] = t[13] = t[18] = t[23] = '-'),
        t.map(e => e.toString(16)).join('')
    );
}
function zo(t) {
    const e = {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Monorail-Edge-Event-Created-At-Ms': (
            (t && t.eventCreatedAtMs) ||
            Date.now()
        ).toString(),
        'X-Monorail-Edge-Event-Sent-At-Ms': Date.now().toString(),
        'X-Monorail-Edge-Client-Message-Id': (
            (t && t.clientMessageId) ||
            Go()
        ).toString(),
    };
    return (
        t && t.userAgent && (e['User-Agent'] = t.userAgent),
        t && t.remoteIp && (e['X-Forwarded-For'] = t.remoteIp),
        t &&
            t.deviceInstallId &&
            (e['X-Monorail-Edge-Device-Install-Id'] = t.deviceInstallId),
        t && t.client && (e['X-Monorail-Edge-Client'] = t.client),
        t && t.clientOs && (e['X-Monorail-Edge-Client-OS'] = t.clientOs),
        e
    );
}
async function Vo({ endpoint: t, event: e, keepalive: n }) {
    return fetch(t != null ? t : $o + Ho, {
        method: 'post',
        headers: zo(e.metadata),
        body: JSON.stringify(
            sn(
                sn(
                    { schema_id: e.schemaId, payload: e.payload },
                    e.metadata && {
                        metadata: {
                            client_message_id: e.metadata.clientMessageId,
                            event_created_at_ms: e.metadata.eventCreatedAtMs,
                        },
                    }
                ),
                e.consent && {
                    consent: e.consent,
                    consent_provider: e.consent_provider,
                    consent_version: e.consent_version,
                }
            )
        ),
        keepalive: n,
    });
}
const qo = '2.1',
    Wo = '3',
    nr = { NO_VALUE: '', ACCEPTED: '1', DECLINED: '0' },
    K = { PREFERENCES: 'p', ANALYTICS: 'a', MARKETING: 'm', SALE_OF_DATA: 't' },
    oe = {
        MARKETING: 'm',
        ANALYTICS: 'a',
        PREFERENCES: 'p',
        SALE_OF_DATA: 's',
    },
    jo = () => (typeof __CtaTestEnv__ > 'u' ? !1 : __CtaTestEnv__ === 'true'),
    Yo = '_tracking_consent';
function ha(t, e = !1) {
    const n = document.cookie ? document.cookie.split('; ') : [];
    for (let r = 0; r < n.length; r++) {
        const [a, i] = n[r].split('=');
        if (t === decodeURIComponent(a)) return decodeURIComponent(i);
    }
    if (
        e &&
        t === '_tracking_consent' &&
        !window.localStorage.getItem('tracking_consent_fetched')
    )
        return jo()
            ? void 0
            : (console.debug('_tracking_consent missing'),
              Ko(),
              window.localStorage.setItem('tracking_consent_fetched', 'true'),
              ha(t, !1));
}
function Ko(t = '/') {
    const e = new XMLHttpRequest();
    e.open('HEAD', t, !1), (e.withCredentials = !0), e.send();
}
function Qo() {
    return ha(Yo);
}
const Xo = '_cs';
function Jo() {
    return new URLSearchParams(window.location.search).get(Xo);
}
function Zo() {
    const t = Jo() || Qo();
    if (t !== void 0) return es(t);
}
function es(t) {
    const e = t.slice(0, 1);
    if (e == '{') return ts(t);
    if (e == '3') return rs(t);
}
function ts(t) {
    var e;
    let n;
    try {
        n = JSON.parse(t);
    } catch (r) {
        return;
    }
    if (n.v === qo && (e = n.con) !== null && e !== void 0 && e.CMP) return n;
}
function rs(t) {
    const e = t.slice(1).split('_'),
        [n, r, a, i, o] = e;
    let s;
    try {
        s = e[5] ? JSON.parse(e.slice(5).join('_')) : void 0;
    } catch (h) {}
    let l;
    if (o) {
        const h = o.replace(/\*/g, '/').replace(/-/g, '+'),
            p = Array.from(atob(h))
                .map(y => y.charCodeAt(0).toString(16).padStart(2, '0'))
                .join('');
        l = [8, 13, 18, 23].reduce(
            (y, _) => y.slice(0, _) + '-' + y.slice(_),
            p
        );
    }
    function u(h) {
        const p = n.split('.')[0];
        return p.includes(h.toLowerCase())
            ? nr.DECLINED
            : p.includes(h.toUpperCase())
            ? nr.ACCEPTED
            : nr.NO_VALUE;
    }
    function c(h) {
        return n.includes(h.replace('t', 's').toUpperCase());
    }
    return {
        v: Wo,
        con: {
            CMP: {
                [oe.ANALYTICS]: u(oe.ANALYTICS),
                [oe.PREFERENCES]: u(oe.PREFERENCES),
                [oe.MARKETING]: u(oe.MARKETING),
                [oe.SALE_OF_DATA]: u(oe.SALE_OF_DATA),
            },
        },
        region: r || '',
        cus: s,
        purposes: {
            [K.ANALYTICS]: c(K.ANALYTICS),
            [K.PREFERENCES]: c(K.PREFERENCES),
            [K.MARKETING]: c(K.MARKETING),
            [K.SALE_OF_DATA]: c(K.SALE_OF_DATA),
        },
        sale_of_data_region: i == 't',
        display_banner: a == 't',
        consent_id: l,
    };
}
function Ht(t) {
    const e = Zo();
    if (!e || !e.purposes) return !0;
    const n = e.purposes[t];
    return typeof n == 'boolean' ? n : !0;
}
function ns() {
    return Ht(K.PREFERENCES);
}
function as() {
    return Ht(K.ANALYTICS);
}
function is() {
    return Ht(K.MARKETING);
}
function os() {
    return Ht(K.SALE_OF_DATA);
}
function ss() {
    return as();
}
function ls() {
    return ns();
}
function cs() {
    return is();
}
function ds() {
    return os();
}
function us() {
    return cs();
}
function hs() {
    return ss();
}
function ps() {
    return ls();
}
function ms() {
    return ds();
}
function ys() {
    const t = [];
    return (
        hs() && t.push('analytics'),
        us() && t.push('marketing'),
        ms() && t.push('sale_of_data'),
        ps() && t.push('preferences'),
        t
    );
}
function gs(t, e) {
    switch (e) {
        case 'v1': {
            const n = ys();
            return T(w({}, t), {
                metadata: T(w({}, t == null ? void 0 : t.metadata), {
                    consent: n,
                    consent_provider: 'consent-tracking-api',
                    consent_version: e,
                }),
            });
        }
        default:
            throw new Dr(e);
    }
}
class Dr extends Error {
    constructor(e) {
        super(
            'Version '.concat(
                e,
                ' is not supported by the consent-tracking-api provider'
            )
        ),
            (this.name = 'MonorailConsentTrackingApiProviderVersionError'),
            Object.setPrototypeOf(this, Dr.prototype);
    }
}
var D = (t => (
        (t.ButtonRender = 'portable_wallets_button_render'),
        (t.Decelerated = 'portable_wallets_decelerated'),
        (t.InitCompleted = 'portable_wallets_init_completed'),
        (t.InstrumentLoadEligibility =
            'portable_wallets_instrument_load_eligibility'),
        (t.InstrumentLoadTime = 'portable_wallets_instrument_load_time'),
        (t.InstrumentLoadTimeFromPageLoad =
            'portable_wallets_instrument_load_time_from_page_load'),
        (t.MonorailProduceError = 'portable_wallets_monorail_produce_error'),
        (t.SheetClicked = 'portable_wallets_sheet_clicked'),
        (t.SheetCancelled = 'portable_wallets_sheet_cancelled'),
        (t.SheetFailed = 'portable_wallets_sheet_failed'),
        (t.UpdateFailed = 'portable_wallets_update_failed'),
        (t.AuthorizationAttempt = 'portable_wallets_authorization_attempt'),
        (t.AuthorizationComplete = 'portable_wallets_authorization_complete'),
        (t.CartTokenMissing = 'portable_wallets_cart_token_missing'),
        (t.RemovePersonalDataResult =
            'portable_wallets_cart_remove_personal_data_result'),
        (t.GooglePayNotEligibleWebview =
            'portable_wallets_google_pay_not_eligible_webview'),
        (t.WalletConfigDeveloperError =
            'portable_wallets_wallet_config_developer_error'),
        (t.LegacyCartCookie = 'portable_wallets_legacy_cart_cookie'),
        (t.StyleBackwardsCompatibility =
            'portable_wallets_style_backwards_compatibility'),
        (t.AmazonPayLoadRetries =
            'portable_wallets_amazon_pay_sdk_load_retries'),
        (t.DynamicTaxFailed = 'portable_wallets_dynamic_tax_failed'),
        (t.DynamicShippingFailed = 'portable_wallets_dynamic_shipping_failed'),
        (t.SheetLoaded = 'portable_wallets_sheet_loaded'),
        (t.ErrorTriggered = 'portable_wallets_error_triggered'),
        (t.AmazonAdExperimentAcceleratedCheckoutButtonClicked =
            'portable_wallets_amazon_ad_experiment_accelerated_checkout_button_clicked'),
        (t.AmazonAdExperimentAcceleratedCheckoutButtonSetup =
            'portable_wallets_amazon_ad_experiment_accelerated_checkout_button_setup'),
        (t.AmazonAdExperimentPaymentButtonHidden =
            'portable_wallets_amazon_ad_experiment_payment_button_hidden'),
        (t.AmazonAdExperimentRecommendedWalletOverriden =
            'portable_wallets_amazon_ad_experiment_recommended_wallet_overriden'),
        t
    ))(D || {}),
    Pe = (t => (
        (t.InstrumentSdkLoaded = 'portable_wallets_instrument_sdk_loaded'),
        (t.InstrumentSdkFailed = 'portable_wallets_instrument_sdk_failed'),
        (t.InstrumentSdkEligible = 'portable_wallets_instrument_sdk_eligible'),
        (t.InstrumentSdkNotEligible =
            'portable_wallets_instrument_sdk_not_eligible'),
        t
    ))(Pe || {});
const fs = ['Chrome-Lighthouse'];
function bs() {
    const t = navigator.userAgent;
    return fs.some(e => t.includes(e));
}
async function ws(t) {
    if (bs()) return;
    const e = gs(t, 'v1');
    let n;
    try {
        n = await Vo({ event: e });
    } catch (r) {}
    if (!(n != null && n.ok))
        try {
            I.counter({
                name: D.MonorailProduceError,
                value: 1,
                attributes: { schemaId: e.schemaId },
            });
        } catch (r) {}
}
const ar = 'shopify_wallet_checkout_track/6.2';
async function V(t) {
    var e, n, r, a, i, o, s;
    const l = await Es();
    if (!l) return;
    const u = {
        schemaId: ar,
        payload: {
            app_name: 'storefront',
            page_type: nl(),
            checkout_one: !0,
            event: t.event,
            event_subtype: t.eventSubtype,
            checkout_token: t.checkoutToken,
            instrument_id: t.instrumentId,
            ttl: t.ttl,
            error_reason: t.errorReason,
            uniq_token: (e = l == null ? void 0 : l.uniqToken) != null ? e : '',
            visit_token:
                (n = l == null ? void 0 : l.visitToken) != null ? n : '',
            micro_session_id:
                (r = l == null ? void 0 : l.microSessionId) != null ? r : '',
            micro_session_count:
                (a = l == null ? void 0 : l.microSessionCount) != null ? a : 0,
            shop_id: (i = l == null ? void 0 : l.shopId) != null ? i : 0,
            theme_id: l == null ? void 0 : l.themeId,
            theme_city_hash:
                (o = l == null ? void 0 : l.themeCityHash) != null ? o : '',
            content_language:
                (s = l == null ? void 0 : l.contentLanguage) != null ? s : '',
            referer: l == null ? void 0 : l.referer,
        },
    };
    b.leaveBreadcrumb('monorail event produced to '.concat(ar), {
        schemaId: ar,
        payload: t,
    });
    try {
        await ws(u);
    } catch (c) {
        b.notify(
            new _s('Failed to send monorail event: '.concat(c), { cause: c }),
            {
                metadata: {
                    request: { monorail: { payload: JSON.stringify(u) } },
                },
            }
        );
    }
}
async function Es() {
    var t, e, n, r, a;
    return (
        ((e =
            (t = window == null ? void 0 : window.ShopifyAnalytics) == null
                ? void 0
                : t.lib) != null &&
            e.trekkie) ||
            (await new Promise(i => {
                const o = setInterval(() => {
                        var l, u;
                        (u =
                            (l =
                                window == null
                                    ? void 0
                                    : window.ShopifyAnalytics) == null
                                ? void 0
                                : l.lib) != null &&
                            u.trekkie &&
                            (clearInterval(o), i());
                    }, 100),
                    s = setTimeout(() => {
                        clearInterval(o), clearTimeout(s), i();
                    }, 7e3);
            })),
        (a =
            (r = (n = window.ShopifyAnalytics) == null ? void 0 : n.lib) == null
                ? void 0
                : r.trekkie) == null
            ? void 0
            : a.defaultAttributes
    );
}
class _s extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'MonorailError');
    }
}
var H = (t => (
    (t.CartInitCalled = 'portable_wallets_cart_init_called'),
    (t.ClickSheetCancelled =
        'portable_wallets_instrument_click_sheet_cancelled'),
    (t.ClickSheetFailed = 'portable_wallets_instrument_click_sheet_failure'),
    (t.ClickSheetSuccess = 'portable_wallets_instrument_click_sheet_success'),
    (t.SheetFailed = 'portable_wallets_instrument_sheet_failed'),
    (t.AuthorizationAttempt = 'portable_wallets_authorization_attempt'),
    (t.AuthorizationComplete = 'portable_wallets_authorization_complete'),
    (t.InitCalled = 'portable_wallets_init_called'),
    (t.InitFailed = 'portable_wallets_init_failed'),
    (t.InitSuccess = 'portable_wallets_init_success'),
    (t.UpdateFailed = 'portable_wallets_instrument_update_failed'),
    (t.InstrumentLoaded = 'portable_wallets_instrument_loaded'),
    (t.InstrumentLoadFailed = 'portable_wallets_instrument_load_failed'),
    (t.FirstVisible = 'portable_wallets_first_visible'),
    (t.FirstVisibleNotAvailable =
        'portable_wallets_first_visible_not_available'),
    (t.SheetLoaded = 'portable_wallets_sheet_loaded'),
    t
))(H || {});
const ln = {
    [S.Checkout]: 'bwp_checkout_widget_click',
    [S.CartAjax]: 'bwp_cart_widget_click',
    [S.CartPage]: 'bwp_cart_widget_click',
    [S.ProductPage]: 'bwp_widget_click',
    [S.Unknown]: 'bwp_widget_click',
};
function As({ apiClientId: t, skus: e, pageType: n }) {
    var r;
    if (!((r = window.Shopify) != null && r.analytics)) return;
    const a = (n && ln[n]) || 'bwp_widget_click';
    a === ln[S.Checkout] &&
        window.Shopify.analytics.publish(
            'shopify:app:pixels:load:'.concat(t),
            {},
            { sendTo: 'PIXEL-LOADER' }
        ),
        e && window.Shopify.analytics.publish(a, { skus: e }, { sendTo: t });
}
let Gt = Cs();
function Cs() {
    return { shopId: Hn, debug: !1, pageType: S.Unknown };
}
function Ss(t) {
    Object.assign(Gt, t);
}
function Rr() {
    const t = Gt,
        { debug: e } = t;
    return er(t, ['debug']);
}
function Ps() {
    return Gt.debug;
}
function pa() {
    return Gt.pageType;
}
function U(t) {
    return w({ pageType: pa() }, t);
}
function Is() {
    const t = pa() === S.CartPage ? H.CartInitCalled : H.InitCalled;
    V({ event: t });
}
function vs(t) {
    var e, n;
    const r = t ? 'Failed' : 'Success',
        a = t && Ws(t) ? '['.concat(t.name, ']: ').concat(t.code) : void 0,
        i = H['Init'.concat(r)];
    V({ event: i, eventSubtype: a }),
        I.counter({
            name: D.InitCompleted,
            value: 1,
            attributes: U({
                result: r.toLowerCase(),
                eventType: a,
                recoveredFailure: !!(
                    (n =
                        (e = window.Shopify) == null
                            ? void 0
                            : e.PaymentButton) != null && n.failedToLoad
                ),
            }),
        });
}
function Ds({ instrumentOrComponentName: t, result: e, measurement: n }) {
    V({
        event: e === 'success' ? H.InstrumentLoaded : H.InstrumentLoadFailed,
        instrumentId: t,
        ttl: n,
    }),
        n != null &&
            (I.histogram({
                name: D.InstrumentLoadTime,
                value: n,
                attributes: U({ instrument: t }),
                unit: 'ms',
            }),
            I.histogram({
                name: D.InstrumentLoadTimeFromPageLoad,
                value: window.performance.now(),
                attributes: U({ instrument: t }),
                unit: 'ms',
            }));
}
function Rs({ instrument: t, measurement: e, result: n }) {
    const r = n === 'success' ? Pe.InstrumentSdkLoaded : Pe.InstrumentSdkFailed;
    V({
        event: r,
        instrumentId: t,
        ttl: e,
        errorReason: n === 'success' ? void 0 : n,
    }),
        e != null &&
            I.histogram({
                name: Pe.InstrumentSdkLoaded,
                value: e,
                attributes: U({ instrument: t, result: n }),
                unit: 'ms',
            });
}
function Ns({ instrument: t, result: e, reason: n }) {
    const r =
        e === 'success'
            ? Pe.InstrumentSdkEligible
            : Pe.InstrumentSdkNotEligible;
    V({ event: r, instrumentId: t }),
        I.counter({
            name: Pe.InstrumentSdkEligible,
            value: 1,
            attributes: U({ instrument: t, reason: n, result: e }),
        });
}
function Ts({ instrument: t, result: e, reason: n }) {
    I.counter({
        name: D.InstrumentLoadEligibility,
        value: 1,
        attributes: U({ instrument: t, result: e, reason: n }),
    });
}
function ks(t) {
    I.counter({
        name: D.ButtonRender,
        value: 1,
        attributes: U({ result: 'success', instrument: t }),
    });
}
function Ls(t) {
    I.counter({
        name: D.ButtonRender,
        value: 1,
        attributes: U({ result: 'failed', instrument: t }),
    });
}
function Os({ instrument: t, result: e, webPixelMetaData: n }) {
    V({
        event: e === 'success' ? H.ClickSheetSuccess : H.ClickSheetFailed,
        instrumentId: t,
    }),
        I.counter({
            name: D.SheetClicked,
            value: 1,
            attributes: U({ instrument: t, result: e }),
        }),
        t === f.BuyWithPrime && n && As(n);
}
function xs(t, e) {
    V({ event: ''.concat(H.UpdateFailed, '-').concat(e), instrumentId: t }),
        I.counter({
            name: D.UpdateFailed,
            value: 1,
            attributes: U({ instrument: t, request: e }),
        });
}
function Ms(t) {
    V({ event: H.ClickSheetCancelled, instrumentId: t }),
        I.counter({
            name: D.SheetCancelled,
            value: 1,
            attributes: U({ instrument: t }),
        });
}
function Fs(t, e) {
    V({
        event: H.SheetFailed,
        instrumentId: t,
        errorReason: e == null ? void 0 : e.message,
    }),
        I.counter({
            name: D.SheetFailed,
            value: 1,
            attributes: U({ instrument: t }),
        });
}
function Us(t) {
    V({ event: H.AuthorizationAttempt, instrumentId: t }),
        I.counter({
            name: D.AuthorizationAttempt,
            value: 1,
            attributes: U({ instrument: t }),
        });
}
function Bs({ instrument: t, measurement: e, result: n }) {
    V({
        event: H.AuthorizationComplete,
        eventSubtype: n,
        ttl: e,
        instrumentId: t,
    }),
        e != null &&
            I.histogram({
                name: D.AuthorizationComplete,
                value: e,
                attributes: U({ instrument: t, result: n }),
                unit: 'ms',
            });
}
function $s({ instrument: t, reason: e }) {
    I.counter({
        name: D.Decelerated,
        value: 1,
        attributes: U({ instrument: t, reason: e }),
    }),
        m.flushTelemetry();
}
function Hs({ reason: t }) {
    I.counter({
        name: D.CartTokenMissing,
        value: 1,
        attributes: { reason: t },
    });
}
function Gs({ success: t }) {
    I.counter({
        name: D.RemovePersonalDataResult,
        value: 1,
        attributes: U({ success: t }),
    });
}
function zs() {
    I.counter({ name: D.WalletConfigDeveloperError, value: 1 });
}
function Vs() {
    I.counter({ name: D.LegacyCartCookie, value: 1 });
}
function qs() {
    window.setInterval(() => {
        ma();
    }, 1e3);
}
function Ws(t) {
    return (t == null ? void 0 : t.name) === gt;
}
function ma() {
    I.exportMetrics(), I.exportLogs();
}
function js(t) {
    const { body: e, attributes: n } = t;
    I.log({ body: e, attributes: w(w({}, Rr()), n) });
}
function Ys({ usedBackwardsCompatibility: t }) {
    I.counter({
        name: D.StyleBackwardsCompatibility,
        value: 1,
        attributes: { usedBackwardsCompatibility: t },
    });
}
function Ks({ retries: t }) {
    I.counter({
        name: D.AmazonPayLoadRetries,
        value: 1,
        attributes: { retries: t },
    });
}
function Qs({ instrument: t }) {
    I.counter({
        name: D.DynamicTaxFailed,
        value: 1,
        attributes: { instrument: t },
    }),
        m.log({ body: 'Dynamic tax failed', attributes: { instrument: t } });
}
function Xs({ instrument: t }) {
    I.counter({
        name: D.DynamicShippingFailed,
        value: 1,
        attributes: { instrument: t },
    }),
        m.log({
            body: 'Dynamic shipping failed',
            attributes: { instrument: t },
        });
}
function Js({ instrument: t, measurement: e }) {
    I.histogram({
        name: D.SheetLoaded,
        value: e,
        attributes: U({ instrument: t }),
        unit: 'ms',
    });
}
function Zs({ instrument: t, result: e }) {
    I.counter({
        name: D.AmazonAdExperimentAcceleratedCheckoutButtonClicked,
        value: 1,
        attributes: U({ instrument: t, result: e }),
    });
}
function el({ instrument: t, result: e }) {
    I.counter({
        name: D.AmazonAdExperimentAcceleratedCheckoutButtonSetup,
        value: 1,
        attributes: U({ instrument: t, result: e }),
    });
}
function tl({ instrument: t }) {
    I.counter({
        name: D.AmazonAdExperimentPaymentButtonHidden,
        value: 1,
        attributes: { instrument: t },
    }),
        m.log({ body: 'Payment button hidden', attributes: { instrument: t } });
}
function rl({ instrument: t }) {
    I.counter({
        name: D.AmazonAdExperimentRecommendedWalletOverriden,
        value: 1,
        attributes: { instrument: t },
    }),
        m.log({
            body: 'Recommended wallet overriden',
            attributes: { instrument: t },
        });
}
const m = {
    initStarted: v(Is),
    initCompleted: v(vs),
    instrumentLoaded: v(Ds),
    instrumentLoadEligibility: v(Ts),
    instrumentSDKLoaded: v(Rs),
    instrumentSDKEligible: v(Ns),
    renderSucceeded: v(ks),
    renderFailed: v(Ls),
    sheetClicked: v(Os),
    sheetCancelled: v(Ms),
    sheetFailed: v(Fs),
    updateFailed: v(xs),
    authorizationAttempt: v(Us),
    authorizationComplete: v(Bs),
    startExporter: v(qs),
    decelerated: v($s),
    cartTokenMissing: v(Hs),
    removePersonalDataResult: v(Gs),
    walletConfigDeveloperError: v(zs),
    legacyCartCookie: v(Vs),
    flushTelemetry: v(ma),
    styleBackwardsCompatibility: v(Ys),
    amazonPaySDKLoadRetries: v(Ks),
    dynamicTaxFailed: v(Qs),
    dynamicShippingFailed: v(Xs),
    sheetLoaded: v(Js),
    amazonAdExperimentAcceleratedCheckoutButtonClicked: v(Zs),
    amazonAdExperimentAcceleratedCheckoutButtonSetup: v(el),
    amazonAdExperimentPaymentButtonHidden: v(tl),
    amazonAdExperimentRecommendedWalletOverriden: v(rl),
    log: v(js, { logErrors: !1 }),
};
function v(t, { logErrors: e = !0 } = {}) {
    return (...n) => {
        try {
            t(...n);
        } catch (r) {
            e &&
                m.log({
                    body: 'Error calling telemetry function',
                    attributes: { error: ''.concat(r) },
                });
        }
    };
}
const rt = [];
function pe(t, e, n) {
    if (window.customElements != null)
        try {
            const r = e;
            window.customElements.get(t) ||
                (window.customElements.define(t, r),
                n != null && n.isChildCustomElement && rt.push(t));
        } catch (r) {
            b.notify(r), Mo();
        }
}
function Pt() {
    const t = new URLSearchParams(window.location.search);
    return function (e) {
        return !!t.get(e);
    };
}
function nl() {
    var t, e, n, r;
    const a = (t = window.Shopify) == null ? void 0 : t.CartType;
    if (a === S.CartAjax) return S.CartAjax;
    if (a === S.CartPage) return S.CartPage;
    const i =
        (r =
            (n = (e = window.ShopifyAnalytics) == null ? void 0 : e.meta) ==
            null
                ? void 0
                : n.page) == null
            ? void 0
            : r.pageType;
    if (i)
        switch (i.toLowerCase()) {
            case 'product':
                return S.ProductPage;
            case 'cart':
                return S.CartPage;
        }
    const o = document.querySelector('#shop-js-analytics');
    if (o)
        try {
            const s = JSON.parse(o.textContent || '{}');
            if (s.pageType)
                switch (s.pageType.toLowerCase()) {
                    case 'product':
                        return S.ProductPage;
                    case 'cart':
                        return S.CartPage;
                }
        } catch (s) {
            console.error('Error parsing JSON script tag:', s);
        }
    return S.Unknown;
}
function Ie(t) {
    return Number(t).toFixed(2);
}
function Nr(t) {
    if (!(!t || !t.id || !t.id.includes('gid://shopify/Cart/')))
        return t.id.replace('gid://shopify/Cart/', '').split('?')[0];
}
function se() {
    let t;
    return [new Promise(e => (t = e)), t];
}
const al = {
    force_shop_pay_product: 'direct_checkout_product',
    force_shop_pay_cart: 'direct_checkout_cart',
};
function ue(t, e = 'no_redirect_for_checkout') {
    m.flushTelemetry();
    const n = new URL(t);
    switch (e) {
        case 'skip_shop_pay':
            n.searchParams.set('skip_shop_pay', 'true');
            break;
        case 'no_redirect_for_checkout':
            n.searchParams.set('storefront_wallet', 'true');
            break;
        case 'force_shop_pay_cart':
        case 'force_shop_pay_product':
        case 'force_shop_pay': {
            n.searchParams.set('payment', 'shop_pay');
            const r = al[e];
            r && n.searchParams.set('redirect_source', r);
            break;
        }
    }
    window.location.assign(n.toString());
}
function ya() {
    return !!document.querySelector(
        '[data-source-attribution="shopify.shop-promise-pdp"]'
    );
}
function nt() {
    return new Date().getTime();
}
function Tr(t) {
    return t.find(
        e => typeof e == 'object' && (e == null ? void 0 : e.code) === St
    );
}
const il = {
    currency_changed: Qe.CURRENCY_CHANGE,
    captcha_required: Qe.CAPTCHA_REQUIRED,
    not_enough_stock: Qe.NOT_ENOUGH_STOCK,
    cart_not_ready: Qe.CART_NOT_READY,
    dynamic_tax: Qe.DYNAMIC_TAX,
    cart_throttled: null,
    out_of_stock: null,
};
function Ct({ warnings: t, cartStatus: e }) {
    if (e === 'CartStatusNotReady') return 'cart_not_ready';
    if (e === 'CartThrottled') return 'cart_throttled';
    if (!(!t || t.length === 0)) {
        if (t.includes('MERCHANDISE_OUT_OF_STOCK')) return 'out_of_stock';
        if (t.includes('MERCHANDISE_NOT_ENOUGH_STOCK'))
            return 'not_enough_stock';
    }
}
function kr({ currentCartTotal: t, initialBuyerCurrency: e }) {
    const n = t.amount;
    return !(
        !n ||
        Number(n) === 0 ||
        e.toUpperCase() === t.currencyCode.toUpperCase()
    );
}
function M({ checkoutUrl: t, instrumentName: e, reason: n }) {
    if (!t) throw new Error('Invalid Checkout URL');
    const r = new URL(t),
        a = il[n];
    a && r.searchParams.set(a, 'true'),
        m.decelerated({ instrument: e, reason: n }),
        ue(r.toString());
}
const ol = 'unstable',
    cn = 'RESTRICTED_WALLET_ACCOUNT';
class zt {
    constructor({
        accessToken: e,
        country: n,
        locale: r,
        apiVersion: a = ol,
        withCarrierRates: i = !1,
        cartPrepareMigrationEnabled: o = !1,
    }) {
        if (
            (d(this, 'OPERATION_NAME_REGEX', /[^ ]+ (\w+)/),
            d(this, 'client'),
            d(this, 'country'),
            d(this, 'url'),
            d(this, 'locale'),
            d(this, 'withCarrierRates'),
            d(this, 'lastValidCart'),
            d(this, 'cartPrepareMigrationEnabled'),
            !e || !n)
        )
            throw new ee({
                code: 'invalid-webcomponent',
                message:
                    'accelerated checkout rendered without required webcomponent attributes',
            });
        if (!r)
            throw new Error('StorefrontApiClient constructed with no locale');
        (this.country = n),
            (this.locale = r),
            (this.withCarrierRates = i),
            (this.cartPrepareMigrationEnabled = o),
            (this.url = '/api/'.concat(a, '/graphql.json')),
            (this.client = $i(Oo({ url: this.url, accessToken: e })));
    }
    async createCart(e) {
        var n, r, a;
        const i = await this.requestStream(
            [uo, Et],
            {
                input: {
                    lines: [
                        {
                            merchandiseId: e.merchandiseId,
                            quantity: e.quantity,
                            sellingPlanId: e.sellingPlanId,
                            attributes: e.lineItemProperties,
                        },
                    ],
                    discountCodes: e.discountCodes,
                    buyerIdentity: e.buyerIdentity,
                },
                country: this.country,
                language: this.formatLanguage(this.locale),
            },
            {
                instrumentName: e.instrumentName,
                startingCheckout: !0,
                operationName: 'createCart',
            }
        );
        try {
            for (
                var o = re(i), s, l, u;
                (s = !(l = await o.next()).done);
                s = !1
            ) {
                const c = l.value;
                c.errors && (await this.onError('createCart', c));
                const h = (n = c.data) == null ? void 0 : n.result;
                if (h && !c.hasNext) {
                    h.errors && this.onResultError(h.errors);
                    const p = this.parseMutationWarnings(
                        (a = (r = c.data) == null ? void 0 : r.result) == null
                            ? void 0
                            : a.warnings
                    );
                    return {
                        data: h.cart ? this.parseCartResponse(h.cart) : null,
                        errors: this.parseMutationErrors(c, 'result'),
                        warnings: p,
                        decelerationReason: Ct({ warnings: p }),
                    };
                }
            }
        } catch (c) {
            u = [c];
        } finally {
            try {
                s && (l = o.return) && (await l.call(o));
            } finally {
                if (u) throw u[0];
            }
        }
        throw new ge('Cart create operation returned no response');
    }
    async updateCartBillingAddress(e) {
        const { cartId: n, billingAddress: r, instrumentName: a } = e;
        return this.requestDeferredCart(
            po,
            { cartId: n, billingAddress: r },
            { instrumentName: a, operationName: 'updateCartBillingAddress' }
        );
    }
    async updateCartBuyerIdentity(e, n) {
        const { cartId: r, instrumentName: a } = e;
        return this.requestDeferredCart(
            mo,
            { cartId: r, buyerIdentity: ll(e) },
            {
                instrumentName: a,
                operationName: 'updateCartBuyerIdentity',
                abortSignal: n,
            }
        );
    }
    async updateSelectedDeliveryOptions(e, n, r, a) {
        let i = n;
        const o = nt() + 2e4;
        for (; nt() < o; ) {
            const s = await this.requestDeferredCart(
                yo,
                { cartId: e, selectedDeliveryOptions: i },
                {
                    instrumentName: r,
                    operationName: 'updateSelectedDeliveryOptions',
                    abortSignal: a,
                }
            );
            if (
                !(
                    !this.cartPrepareMigrationEnabled &&
                    s.errors.some(
                        u =>
                            typeof u == 'string' &&
                            u.startsWith(g.PendingDeliveryGroups)
                    )
                )
            )
                return s;
            const l = s.data.deliveryGroups.flatMap(u =>
                u.deliveryOptions.map(c => ({
                    deliveryOptionHandle: c.handle,
                    deliveryGroupId: u.id,
                }))
            );
            i = i.map(u => {
                var c;
                return (c = l.find(
                    h => h.deliveryOptionHandle === u.deliveryOptionHandle
                )) != null
                    ? c
                    : u;
            });
        }
        throw new Error('Selected delivery options update operation timed out');
    }
    async applePaySessionCreate(e) {
        var n, r, a;
        const i = await this.requestStream(
            [go],
            { validationUrl: e.toString() },
            {
                instrumentName: f.ApplePay,
                operationName: 'applePaySessionCreate',
            }
        );
        try {
            for (
                var o = re(i), s, l, u;
                (s = !(l = await o.next()).done);
                s = !1
            ) {
                const c = l.value;
                c.errors && (await this.onError('applePaySessionCreate', c));
                const h =
                    (a =
                        (r =
                            (n = c.data) == null
                                ? void 0
                                : n.applePaySessionCreate) == null
                            ? void 0
                            : r.applePaySession) == null
                        ? void 0
                        : a.body;
                if (h) return h;
            }
        } catch (c) {
            u = [c];
        } finally {
            try {
                s && (l = o.return) && (await l.call(o));
            } finally {
                if (u) throw u[0];
            }
        }
        throw new ge('Apple Pay session create operation returned no response');
    }
    async paypalBuyerDetailsFetch(e, n) {
        var r, a;
        const i = await this.requestStream(
            [fo],
            { token: e, cartId: n },
            {
                instrumentName: f.PayPal,
                operationName: 'paypalBuyerDetailsFetch',
            }
        );
        try {
            for (
                var o = re(i), s, l, u;
                (s = !(l = await o.next()).done);
                s = !1
            ) {
                const c = l.value;
                if (c.hasNext) continue;
                c.errors && (await this.onError('paypalBuyerDetailsFetch', c));
                const h =
                    (a =
                        (r = c.data) == null
                            ? void 0
                            : r.paypalBuyerDetailsFetch) == null
                        ? void 0
                        : a.paypalDetails;
                if (h) return h;
            }
        } catch (c) {
            u = [c];
        } finally {
            try {
                s && (l = o.return) && (await l.call(o));
            } finally {
                if (u) throw u[0];
            }
        }
        throw new ge(
            'PayPal buyer details fetch operation returned no response'
        );
    }
    async paypalTokenCreate(e) {
        var n, r, a, i;
        const o = await this.requestStream(
            [bo],
            { cartId: e },
            { instrumentName: f.PayPal, operationName: 'paypalTokenCreate' }
        );
        try {
            for (
                var s = re(o), l, u, c;
                (l = !(u = await s.next()).done);
                l = !1
            ) {
                const h = u.value;
                if (h.errors) {
                    if (
                        (n = h.errors.graphQLErrors) != null &&
                        n.find(y => {
                            var _;
                            return (
                                ((_ = y.extensions) == null
                                    ? void 0
                                    : _.code) === cn
                            );
                        })
                    )
                        throw new Ft(cn);
                    await this.onError('paypalTokenCreate', h);
                }
                const p =
                    (i =
                        (a =
                            (r = h.data) == null
                                ? void 0
                                : r.paypalTokenCreate) == null
                            ? void 0
                            : a.paypalToken) == null
                        ? void 0
                        : i.token;
                if (p) return p;
            }
        } catch (h) {
            c = [h];
        } finally {
            try {
                l && (u = s.return) && (await u.call(s));
            } finally {
                if (c) throw c[0];
            }
        }
        throw new ge('PayPal token create operation returned no response');
    }
    async fetchLimitedCart({ id: e, startingCheckout: n, instrumentName: r }) {
        var a, i;
        const o = await this.request(
            [Eo],
            { id: e },
            { instrumentName: r, startingCheckout: n }
        );
        if (
            (o.errors && (await this.onError('limitedCartQuery', o)),
            !((a = o.data) != null && a.cart))
        )
            throw new cl('Limited cart query returned no response');
        return (
            b.leaveBreadcrumb(
                'limitedCartQuery response',
                {
                    operationName: 'limitedCartQuery',
                    body: (i = o.data) == null ? void 0 : i.cart,
                },
                'log'
            ),
            {
                id: o.data.cart.id,
                shippingRequired: o.data.cart.lines.edges.some(
                    s => s.node.merchandise.requiresShipping
                ),
                sellingPlan: o.data.cart.lines.edges.some(
                    s => s.node.sellingPlanAllocation != null
                ),
            }
        );
    }
    async fetchCart({ id: e, startingCheckout: n, instrumentName: r }) {
        var a;
        const i = this.formatLanguage(this.locale),
            o = this.cartPrepareMigrationEnabled
                ? 'Prepare cart'
                : 'Fetch cart',
            s = this.cartPrepareMigrationEnabled ? Co : wo,
            l = this.cartPrepareMigrationEnabled ? [Et, rr, nn] : [Et],
            u = this.cartPrepareMigrationEnabled
                ? {
                      cartId: e,
                      country: this.country,
                      language: i,
                      withCarrierRates: this.withCarrierRates,
                      prepareCart: !0,
                  }
                : {
                      id: e,
                      country: this.country,
                      language: i,
                      withCarrierRates: this.withCarrierRates,
                  },
            c = await this.requestStream([s, ...l], u, {
                instrumentName: r,
                startingCheckout: n,
                operationName: 'fetchCart',
            });
        try {
            for (
                var h = re(c), p, y, _;
                (p = !(y = await h.next()).done);
                p = !1
            ) {
                const C = y.value;
                C.errors && (await this.onError('fetchCart', C));
                let E = null,
                    P;
                if (!C.data)
                    throw new ge(
                        ''.concat(o, ' operation returned no data in response')
                    );
                if (sl(C.data)) {
                    const $ = C.data.preparedCart;
                    (E =
                        (a = $ == null ? void 0 : $.result) == null
                            ? void 0
                            : a.cart),
                        (P = this.parsePreparedCartMutationErrors(
                            C.errors,
                            this.extractPreparedCartMutationErrors($)
                        ));
                } else E = C.data.cart;
                if (
                    (b.leaveBreadcrumb(
                        ''.concat(o, ' response'),
                        {
                            operationName: o,
                            body: E,
                            errors: P,
                            hasNext: C.hasNext,
                        },
                        'log'
                    ),
                    E && !C.hasNext)
                ) {
                    const $ = this.parseCartResponse(E);
                    return (this.lastValidCart = $), $;
                }
            }
        } catch (C) {
            _ = [C];
        } finally {
            try {
                p && (y = h.return) && (await y.call(h));
            } finally {
                if (_) throw _[0];
            }
        }
        throw new ge(''.concat(o, ' operation returned no response'));
    }
    async updateCartPayment(e, n, r, a) {
        var i, o;
        const s = { cartId: e, input: n },
            { amount: l, currencyCode: u } = n.amount;
        let c;
        const h = nt() + 1e4;
        for (; nt() < h; ) {
            const p = await this.requestDeferredCart(Ao, s, {
                instrumentName: r,
                operationName: 'updateCartPayment',
                abortSignal: a,
            });
            if (
                (c || (c = p),
                !this.cartPrepareMigrationEnabled &&
                    p.errors.includes(g.InvalidPaymentAmount))
            ) {
                parseFloat(
                    (o =
                        (i = p.data.totalTaxAmount) == null
                            ? void 0
                            : i.amount) != null
                        ? o
                        : '0'
                ) === 0 && (await new Promise(y => setTimeout(y, 500))),
                    (s.input.amount = {
                        amount: p.data.totalAmount.amount,
                        currencyCode: p.data.totalAmount.currencyCode,
                    });
                continue;
            }
            return (p.data.totalAmount.amount === l ||
                parseFloat(p.data.totalAmount.amount) <= parseFloat(l)) &&
                p.data.totalAmount.currencyCode === u
                ? p
                : c;
        }
        throw new Error('Payment update operation timed out');
    }
    async updateCartAttributes({
        cartId: e,
        attributes: n,
        instrumentName: r,
        startingCheckout: a,
    }) {
        const i = { cartId: e, attributes: n };
        return await this.requestDeferredCart(ho, i, {
            instrumentName: r,
            operationName: 'updateCartAttributes',
            startingCheckout: a,
        });
    }
    async submitForCompletion(e, n, r) {
        var a, i;
        const o = this.formatLanguage(this.locale),
            s = await this.request(
                [So],
                {
                    cartId: e,
                    attemptToken: n,
                    country: this.country,
                    language: o,
                    withCarrierRates: this.withCarrierRates,
                },
                { instrumentName: r, operationName: 'submitForCompletion' }
            );
        return {
            data:
                (i =
                    (a = s.data) == null
                        ? void 0
                        : a.cartSubmitForCompletion) == null
                    ? void 0
                    : i.result,
            errors: this.parseCompletionErrors(s),
        };
    }
    async fetchSubscriptionPolicy() {
        var e, n;
        const { data: r } = await this.request(
            [_o],
            {
                country: this.country,
                language: this.formatLanguage(this.locale),
            },
            { operationName: 'fetchSubscriptionPolicy' }
        );
        return (n =
            (e = r == null ? void 0 : r.shop) == null
                ? void 0
                : e.subscriptionPolicy) == null
            ? void 0
            : n.body;
    }
    async cartRemovePersonalData({ cartId: e, shopId: n, instrumentName: r }) {
        var a, i;
        let o, s, l;
        try {
            const c = await this.request(
                [Po, rr],
                { cartId: e },
                { instrumentName: r, keepalive: !0 }
            );
            (o = this.parseMutationWarnings(
                (i =
                    (a = c.data) == null ? void 0 : a.cartRemovePersonalData) ==
                    null
                    ? void 0
                    : i.warnings
            )),
                (s = this.parseMutationErrors(c, 'cartRemovePersonalData'));
        } catch (c) {
            l = c.toString();
        }
        const u = !((o != null && o.length) || (s != null && s.length) || l);
        m.removePersonalDataResult({ success: u }),
            u ||
                m.log({
                    body: 'cartRemovePersonalData failed',
                    attributes: {
                        cartId: e,
                        shopId: n,
                        warnings: o,
                        errors: s,
                        exception: l,
                    },
                });
    }
    generateURLWithOperationName(e) {
        const n = e.match(this.OPERATION_NAME_REGEX);
        if (n) {
            const r = this.url.includes('?') ? '&' : '?',
                a = 'operation_name='.concat(n[1]);
            return ''.concat(this.url).concat(r).concat(a);
        }
        return this.url;
    }
    async request(e, n, r) {
        return this.client.request(e.join(''), {
            variables: n,
            headers: dn(r),
            url: this.generateURLWithOperationName(e[0]),
            keepalive: r.keepalive,
        });
    }
    async requestStream(e, n, r) {
        return this.client.requestStream(e.join(''), {
            variables: n,
            headers: dn(r),
            url: this.generateURLWithOperationName(e[0]),
            signal: r.abortSignal,
        });
    }
    async requestDeferredCart(e, n, r) {
        var a, i, o, s, l, u, c, h, p;
        const y = this.formatLanguage(this.locale),
            _ = await this.requestStream(
                [e, Et, rr, nn],
                T(w({}, n), {
                    country: this.country,
                    language: y,
                    withCarrierRates: this.withCarrierRates,
                    prepareCart: this.cartPrepareMigrationEnabled,
                }),
                r
            );
        try {
            for (
                var C = re(_), E, P, $;
                (E = !(P = await C.next()).done);
                E = !1
            ) {
                const B = P.value;
                B.errors && (await this.onError(r.operationName, B));
                const Ke = this.extractMutationErrors(B),
                    N =
                        (i = (a = B.data) == null ? void 0 : a.preparedCart) ==
                        null
                            ? void 0
                            : i.result,
                    G =
                        (l =
                            (s = (o = B.data) == null ? void 0 : o.result) ==
                            null
                                ? void 0
                                : s.cart) != null
                            ? l
                            : N == null
                            ? void 0
                            : N.cart;
                if (G && !B.hasNext) {
                    let L;
                    this.cartPrepareMigrationEnabled ||
                        (L = await this.fetchCart({
                            id: G.id,
                            instrumentName: r.instrumentName,
                            startingCheckout: !1,
                        }));
                    const x = this.parseMutationWarnings(
                        (c = (u = B.data) == null ? void 0 : u.result) == null
                            ? void 0
                            : c.warnings
                    );
                    return {
                        data: L != null ? L : this.parseCartResponse(G),
                        errors: this.parsePreparedCartMutationErrors(
                            B.errors,
                            Ke
                        ),
                        warnings: x,
                        decelerationReason: Ct({
                            warnings: x,
                            cartStatus: N == null ? void 0 : N.__typename,
                        }),
                    };
                }
                if (this.lastValidCart && Ke.length > 0) {
                    this.onResultError(Ke);
                    const L = this.parseMutationWarnings(
                        (p = (h = B.data) == null ? void 0 : h.result) == null
                            ? void 0
                            : p.warnings
                    );
                    return {
                        data: this.lastValidCart,
                        errors: this.parsePreparedCartMutationErrors(
                            B.errors,
                            Ke
                        ),
                        warnings: L,
                        decelerationReason: Ct({ warnings: L }),
                    };
                }
            }
        } catch (B) {
            $ = [B];
        } finally {
            try {
                E && (P = C.return) && (await P.call(C));
            } finally {
                if ($) throw $[0];
            }
        }
        throw new ge('Deferred cart operation returned no response');
    }
    async onError(e, n) {
        const r = await Io(e, n);
        if (!r) return;
        const a = r,
            { message: i } = a,
            o = er(a, ['message']),
            { isIgnorable: s, reason: l } = No(r);
        throw (
            (b.leaveBreadcrumb(
                i,
                w(w({ ignored: s, ignoredReason: l }, n), o),
                'error'
            ),
            s
                ? new Wn(i, { reason: l, errorDetails: o })
                : new Pr(i, { errorDetails: o, bugsnagGroupingHash: Lo(o) }))
        );
    }
    onResultError(e) {
        b.leaveBreadcrumb('GraphQL result error', e, 'error');
    }
    formatLanguage(e) {
        return e.includes('-')
            ? e.split('-')[0].toUpperCase()
            : e.toUpperCase();
    }
    parseCartResponse(e) {
        var n, r, a;
        const i = e.lines.edges.map(s => {
                var l, u;
                const c = s.node;
                return {
                    quantity: c.quantity,
                    totalAmount: {
                        amount: c.cost.totalAmount.amount,
                        currencyCode: c.cost.totalAmount.currencyCode,
                    },
                    subtotalAmount: {
                        amount:
                            (l = c.cost.subtotalAmount) == null
                                ? void 0
                                : l.amount,
                        currencyCode:
                            (u = c.cost.subtotalAmount) == null
                                ? void 0
                                : u.currencyCode,
                    },
                    merchandise: {
                        requiresShipping: c.merchandise.requiresShipping,
                    },
                    discountAllocations: c.discountAllocations,
                    sellingPlanAllocation: c.sellingPlanAllocation,
                };
            }),
            o = e.deliveryGroups.edges.map(s => s.node);
        return {
            id: e.id,
            totalAmount: e.cost.totalAmount,
            subtotalAmount: (n = e.cost.subtotalAmount) != null ? n : void 0,
            totalTaxAmount: (r = e.cost.totalTaxAmount) != null ? r : void 0,
            totalDutyAmount: (a = e.cost.totalDutyAmount) != null ? a : void 0,
            discountAllocations: e.discountAllocations,
            discountCodes: e.discountCodes,
            lineItems: i,
            deliveryGroups: o,
            checkoutUrl: e.checkoutUrl,
        };
    }
    parseGraphQlErrors(e) {
        var n, r;
        return (r =
            (n = e == null ? void 0 : e.graphQLErrors) == null
                ? void 0
                : n.map(a => a.message.replace(/\(Expected.*\)/, '').trim())) !=
            null
            ? r
            : [];
    }
    parseMutationError(e) {
        return e.code === St
            ? { code: St, message: e.message }
            : e.field && e.field.length > 0
            ? ''.concat(e.code, ': ').concat(e.field.join('.'))
            : e.code;
    }
    parseMutationErrors(e, n) {
        var r, a, i;
        const o = this.parseGraphQlErrors(e.errors),
            s =
                ((i =
                    (a = (r = e.data) == null ? void 0 : r[n]) == null
                        ? void 0
                        : a.errors) == null
                    ? void 0
                    : i.map(this.parseMutationError).filter(u => u)) || [],
            l = [...o, ...s];
        return b.leaveBreadcrumb('GraphQL errors on mutation', l, 'error'), l;
    }
    parseMutationWarnings(e) {
        return !e || e.length === 0 ? [] : e.map(n => n.code);
    }
    filterErrors(e) {
        var n;
        return !(
            ((n = e.code) != null && n.startsWith('PENDING_DELIVERY_GROUPS')) ||
            e.code === 'INVALID_PAYMENT'
        );
    }
    extractPreparedCartMutationErrors(e) {
        var n, r;
        const a = (n = e == null ? void 0 : e.errors) != null ? n : [];
        return (
            ((r = e == null ? void 0 : e.result) == null
                ? void 0
                : r.__typename) === 'CartStatusNotReady' &&
                a.push(...e.result.errors),
            a
        );
    }
    extractMutationErrors(e) {
        var n, r, a, i;
        let o =
            (a =
                (r = (n = e.data) == null ? void 0 : n.result) == null
                    ? void 0
                    : r.errors) != null
                ? a
                : [];
        return (
            this.cartPrepareMigrationEnabled &&
                (o = o.filter(this.filterErrors)),
            [
                ...o,
                ...this.extractPreparedCartMutationErrors(
                    (i = e.data) == null ? void 0 : i.preparedCart
                ),
            ]
        );
    }
    parsePreparedCartMutationErrors(e, n) {
        const r = this.parseGraphQlErrors(e),
            a = n.map(this.parseMutationError).filter(o => o),
            i = [...r, ...a];
        return b.leaveBreadcrumb('GraphQL errors on mutation', i, 'error'), i;
    }
    parseCompletionErrors(e) {
        var n, r, a, i;
        const o = this.parseGraphQlErrors(e.errors);
        let s = [];
        ((a =
            (r = (n = e.data) == null ? void 0 : n.cartSubmitForCompletion) ==
            null
                ? void 0
                : r.result) == null
            ? void 0
            : a.__typename) === 'SubmitFailed' &&
            (s =
                (i = e.data.cartSubmitForCompletion.result.errors.map(
                    u => u.code
                )) != null
                    ? i
                    : []);
        const l = [...o, ...s];
        return b.leaveBreadcrumb('GraphQL errors on completion', l, 'error'), l;
    }
}
function sl(t) {
    return !('cart' in t);
}
function ll({
    emailAddress: t,
    countryCode: e,
    phone: n,
    streetAddress: r,
    validateAddress: a,
    preferences: i,
}) {
    return {
        email: t,
        countryCode: e != null ? e : r == null ? void 0 : r.country,
        phone: n != null ? n : r == null ? void 0 : r.phone,
        deliveryAddressPreferences: r
            ? [
                  {
                      deliveryAddressValidationStrategy: a
                          ? 'STRICT'
                          : 'COUNTRY_CODE_ONLY',
                      deliveryAddress: r,
                  },
              ]
            : [],
        preferences: i,
    };
}
function dn({ instrumentName: t, startingCheckout: e }) {
    const n = {};
    return (
        t && (n['X-Wallet-Name'] = ''.concat(t)),
        e && (n['X-Start-Wallet-Checkout'] = ''.concat(e)),
        n
    );
}
const ga = 'LimitedCartQueryError';
class cl extends Error {
    constructor() {
        super(...arguments), d(this, 'name', ga);
    }
}
const fa = ['OpenTelemetryClientError', Vn, Yn, qn, gt],
    dl = [
        'Load failed',
        'Failed to fetch',
        'when attempting to fetch resource',
        'GraphQL mutation failed with status 404',
        'Component closed',
        ...fa,
    ],
    un = new Map([
        ['TypeError', 'Illegal constructor'],
        ['BugsnagInvalidError', '"isTrusted":true'],
        [ga, 'Limited cart query returned no response'],
        ['AbortError', 'Fetch is aborted'],
    ]),
    ul = ['Chrome-Lighthouse'];
function hl(t) {
    const e = t.exceptions[0];
    return pl()
        ? 'silenced-user-agent'
        : ml(t)
        ? 'empty-stack-trace'
        : yl(e)
        ? 'spin'
        : gl()
        ? 'monkey-patch'
        : wl(t)
        ? 'external-error'
        : _l(t)
        ? 'developer-error'
        : El(e.message)
        ? 'discarded-message'
        : Al(t)
        ? 'discarded-error-class'
        : Cl(e)
        ? 'discarded-class-message'
        : Sl(t)
        ? 'unactionable-invalid-error'
        : fl(t) || null;
}
function pl() {
    return ul.some(t => navigator.userAgent.includes(t));
}
function ml(t) {
    return t.exceptions[0].stacktrace.length === 0;
}
function yl(t) {
    return t.stacktrace.some(e => {
        var n;
        return (n = e.file) == null ? void 0 : n.includes('spin.dev');
    });
}
function gl() {
    return [HTMLElement, Event, document.createElement].some(zn);
}
function fl(t) {
    const e = t.exceptions.map(n => n.stacktrace.filter(r => !bl(r)));
    return e.some(n => {
        var r;
        return !((r = n[0]) != null && r.inProject);
    })
        ? 'external-trigger'
        : e.some(n =>
              n.every(r => [Un, Cr, Bn].some(a => r.file.startsWith(a)))
          )
        ? 'wallet-sdk-stack-trace'
        : null;
}
function bl(t) {
    return t.file.includes('native code') || t.file.includes('/cdn/wpm/');
}
function wl(t) {
    return !t.exceptions[0].stacktrace.some(e => e.inProject);
}
function El(t) {
    return dl.some(e => (t == null ? void 0 : t.includes(e)));
}
function _l(t) {
    const e = t.exceptions.some(n => n.errorClass === gt);
    return e && console.error(t.exceptions[0]), e;
}
function Al(t) {
    return t.exceptions.some(e => fa.includes(e.errorClass));
}
function Cl(t) {
    const e = t.errorClass,
        n = t.message;
    return un.has(e) && (n == null ? void 0 : n.includes(un.get(e)));
}
function Sl(t) {
    return t.exceptions[0].errorClass === 'BugsnagInvalidError' && t.unhandled;
}
function Pl(t, e) {
    const n = t.exceptions[0];
    if (!n || !n.message || fi.checkDuplicate(n)) return !1;
    const r = Dl(e);
    Il(t, r);
    let a = null;
    try {
        a = hl(t);
    } catch (i) {
        const o = i;
        console.error(o);
        const s = {
            errorClass: 'UnfilterableError',
            message: 'Could not properly filter error with message: '.concat(
                o.message
            ),
            stacktrace: xn($n, o),
        };
        t.exceptions.unshift(s);
    }
    return (
        Nl(a),
        Ps() &&
            Tl({
                errorClass: n.errorClass,
                message: n.message,
                stacktrace: JSON.stringify(n.stacktrace),
                filterResult: a,
                metadata: JSON.stringify(t.metaData),
            }),
        a == null
    );
}
function Il(t, e) {
    var n, r, a, i, o;
    const s =
        (a =
            (r = (n = window.ShopifyAnalytics) == null ? void 0 : n.lib) == null
                ? void 0
                : r.trekkie) == null
            ? void 0
            : a.defaultAttributes;
    (t.context = window.location.pathname),
        t.request || (t.request = {}),
        (t.request.url = window.location.href),
        (t.device.orientation =
            (o = (i = window.screen) == null ? void 0 : i.orientation) == null
                ? void 0
                : o.type),
        Rl(t),
        (t.groupingHash = vl(e)),
        (t.metaData = T(w({}, t.metaData), {
            shop: w(w({}, Rr()), t.metaData.shop),
            custom: T(w({}, t.metaData.custom), { customFetch: zn(fetch) }),
            monorail: s,
        })),
        e[0] instanceof Pr &&
            ((t.metaData.graphql = w({}, e[0].errorDetails)),
            e[0] instanceof Wn && (t.metaData.graphql.reason = e[0].reason));
}
function vl(t) {
    for (const e of t)
        if ('bugsnagGroupingHash' in e && e.bugsnagGroupingHash)
            return e.bugsnagGroupingHash.toString();
}
function Dl(t) {
    const e = [];
    let n = t;
    for (; n instanceof Error && e.length < 20; ) {
        e.push(n);
        const r = 'cause' in n ? n.cause : null;
        if (!r) break;
        n = r;
    }
    return e;
}
function Rl(t) {
    for (const e of t.exceptions)
        for (const n of e.stacktrace)
            [Un, Cr, Bn].some(r => n.file.startsWith(r)) && (n.inProject = !0);
}
function Nl(t) {
    I.counter({
        name: D.ErrorTriggered,
        value: 1,
        attributes: { filterResult: t || 'valid-error' },
    });
}
function Tl(t) {
    I.log({ body: 'Bugsnag Error', attributes: w(w({}, Rr()), t) });
}
var Nn;
const kl = {
        apiKey: 'cb577dc231be1c7494db8a63441ef66b',
        appId: $n,
        appVersion: '0.0.0-ea5c59ffb7084bd7c185286f2014ccaceb3ffe81',
        releaseStage: 'production',
        locale: 'en',
        userAgent: navigator.userAgent,
        metadata: { user: { id: (Nn = ct(yi)) != null ? Nn : 'unknown' } },
        onError: Pl,
    },
    b = new ci(kl);
b.addOnPostError(t => {
    b.leaveBreadcrumb(
        'Bugsnag Error Notified',
        {
            errorClass: t.exceptions[0].errorClass,
            message: t.exceptions[0].message,
        },
        'error'
    );
});
var ba = {
    en: {
        express_checkout: 'Express checkout',
        instruments_copy: { checkout: { buy_now: 'Buy it now' } },
        error_dialogs: {
            checkout: {
                title: 'Transaction failed',
                generic_error:
                    'Checkout is currently unavailable due to technical problems. Please try again in a few minutes.',
                button_text: 'Close',
            },
            wallet: {
                title: '%{wallet} unavailable',
                generic_error:
                    'There was an issue with %{wallet}. Try again or use a different payment method.',
                eligibility_error:
                    'Items that were eligible for %{wallet} are no longer in your cart.',
            },
        },
        more_payment_options: 'More payment options',
        action: { view: 'View %{content}' },
        subscriptions: {
            cancellation_policy: 'Cancellation policy',
            policy_not_found:
                'The subscription policy could not be found. Refresh the page or contact us for more information.',
        },
        shipping_methods: {
            connect_shipping_methods: '%{methodOne} and %{methodTwo}',
            choose_delivery_strategy: 'Choose a delivery method',
        },
        delivery_promises: {
            connect_delivery_promises: '%{promiseOne} and %{promiseTwo}',
        },
        order_summary: {
            total: 'Total',
            subtotal: 'Subtotal',
            duties: 'Duties',
            taxes: 'Taxes',
            shipping: 'Shipping',
            shipping_one_time_purchase: 'Shipping (One-time purchase)',
            shipping_subscription: 'Shipping (Subscription)',
            discount: 'Discount',
            subscriptions: {
                recurring_total_tooltip_line:
                    'Does not include shipping, tax, duties, or any applicable discounts',
                recurring_totals: '%{fixedPrice} every %{interval}',
                recurring_totals_with_policies: {
                    one: 'First payment %{fixedPrice}, then %{recurringPrice} every %{interval}',
                    other: 'First %{count} payments %{fixedPrice} each, then %{recurringPrice} every %{interval}',
                },
                recurring_total_intervals: {
                    day: { one: 'day', other: '%{count} days' },
                    month: { one: 'month', other: '%{count} months' },
                    week: { one: 'week', other: '%{count} weeks' },
                    year: { one: 'year', other: '%{count} years' },
                },
            },
        },
        brand: {
            amazon_pay: 'Amazon Pay',
            apple_pay: 'Apple Pay',
            buy_with_prime: 'Buy with Prime',
            paypal: 'PayPal',
            google_pay: 'Google Pay',
            shop_pay: 'Shop Pay',
        },
        buy_with_button_content: 'Buy with %{wallet}',
        shop_promise_delivery: {
            same_day: 'Same-day delivery',
            next_day: 'Next-day delivery',
            two_day: '2-day delivery',
        },
        errors: {
            address_unserviceable:
                '%{shopName} does not currently deliver to this address. Use a different address to complete your purchase.',
            missing: {
                email: 'Enter an email address',
                first_name: 'Enter a first name',
                last_name: 'Enter a last name',
                address1: 'Enter an address',
                address2: 'Enter an apartment, suite, etc.',
                city: 'Enter a city',
                zone: 'Select a state / province',
                country: 'Select a country',
                phone: 'Enter a phone number',
                postal_code: 'Enter a ZIP / postal code',
                shipping_option: 'Select a shipping method',
                emirate: 'Enter an emirate',
            },
            invalid: {
                email: 'Enter a valid email',
                first_name: 'Enter a valid first name',
                last_name: 'Enter a valid last name',
                address1: 'Enter a valid address',
                address2: 'Enter a valid apartment, suite, etc.',
                city: 'Enter a valid city',
                zone: 'Select a valid state / province',
                country: 'Select a country / region',
                phone: 'Enter a valid phone number',
                postal_code: 'Enter a valid zip / postal code',
                billing_address: 'Invalid billing address',
                shipping_address: 'Invalid shipping address',
                payment_method: 'Invalid payment method',
                discount: 'Invalid discount',
                emirate: 'Enter a valid emirate',
            },
            emojis: {
                first_name: 'First name cannot contain emojis',
                last_name: 'Last name cannot contain emojis',
                city: 'City cannot contain emojis',
                address1: 'Address line cannot contain emojis',
                address2: 'Second address line cannot contain emojis',
                postal_code: 'Postal code/zip cannot contain emojis',
            },
            too_long: {
                address1: 'Address line is too long',
                address2: 'Second address line is too long',
                first_name: 'First name is too long',
                last_name: 'Last name is too long',
                city: 'City is too long',
            },
            url: {
                first_name: 'First name cannot contain a URL',
                last_name: 'Last name cannot contain a URL',
            },
            html_tags: {
                first_name: 'First name cannot contain HTML tags',
                last_name: 'Last name cannot contain HTML tags',
                city: 'City cannot contain HTML tags',
                address1: 'Address line cannot contain HTML tags',
                address2: 'Second address line cannot contain HTML tags',
            },
            currency: {
                mismatch:
                    'Your cart and currency has been updated based on your shipping country.',
            },
        },
    },
};
ba.en;
let ir;
class hn extends Error {
    constructor(e, n) {
        const r = "i18n: Missing or invalid translation '"
            .concat(e, "' in '")
            .concat(n, "'");
        super(r);
    }
}
class Ll extends Error {
    constructor(e, n, r) {
        const a = "i18n: Missing translation template key '"
            .concat(e, "' for '")
            .concat(n, "' in '")
            .concat(r, "'");
        super(a);
    }
}
class Ol extends Error {
    constructor(e, n, r) {
        const a = "i18n: Invalid pluralization for '"
            .concat(e, "':'")
            .concat(n, "' in '")
            .concat(r, "'");
        super(a);
    }
}
function Vt() {
    return ir == null && (ir = xl(ba)), ir;
}
function xl(t) {
    const e = (i, o) => typeof i != 'string' && o.count !== 'undefined',
        n = (i, o) => {
            let s = o === 1 ? 'one' : 'other';
            return (
                o === 0 &&
                    typeof i != 'string' &&
                    i.zero !== 'undefined' &&
                    (s = 'zero'),
                s
            );
        },
        r = (i, o = {}) => {
            const s = i.match(/%\{.+?\}/g);
            return s
                ? s.reduce((l, u) => {
                      const c = u.replace(/%\{(.*)\}/, '$1');
                      return o[c]
                          ? l.replace(u, o[c])
                          : (b.notify(new Ll(c, i, a)), l);
                  }, i)
                : i;
        },
        a = Ml();
    return {
        locale: a,
        translate(i, o = {}) {
            var s;
            const l = i.split('.');
            let u = t[a];
            try {
                for (const c of l)
                    switch (typeof u) {
                        case 'object':
                            u = u[c];
                            break;
                        case 'string':
                        case 'undefined':
                            throw new hn(i, a);
                    }
                if (e(u, o)) {
                    if (typeof u == 'string') throw new Ol(i, u, a);
                    u = u[n(u, o.count)];
                }
                if (typeof u != 'string') throw new hn(i, a);
                return r(u, o);
            } catch (c) {
                return b.notify(c), (s = o.defaultValue) != null ? s : i;
            }
        },
    };
}
function Ml() {
    return 'en';
}
class Fl extends HTMLElement {
    constructor() {
        super(),
            d(this, 'overflow'),
            d(this, 'formerFocus'),
            this.attachShadow({ mode: 'open' }),
            (this.overflow = ''),
            (this.formerFocus = document.activeElement);
    }
    connectedCallback() {
        const e = Vt();
        this.render(e);
        const n = this.shadowRoot,
            r = n.getElementById('modal');
        n.querySelectorAll('button').forEach(o =>
            o.addEventListener('click', this.closeModal.bind(this))
        );
        const a = n.getElementById('overlay');
        a == null ||
            a.addEventListener('click', o => this.handleOutsideClick(o, r)),
            document.addEventListener(
                'keydown',
                this.handleEscapeKey.bind(this)
            );
        const i = document.createElement('style');
        (i.textContent = ri),
            n.appendChild(i),
            (this.overflow = document.body.style.overflow),
            (document.body.style.overflow = 'hidden'),
            this.trapFocus(r, n),
            pe('svg-icon', ti);
    }
    trapFocus(e, n) {
        if (!e) return;
        const r = e.querySelectorAll('a[href], button'),
            a = Array.from(r),
            i = a[0],
            o = a[a.length - 1];
        e.addEventListener('keydown', s => {
            s.key === 'Tab' &&
                !s.shiftKey &&
                n.activeElement === o &&
                (s.preventDefault(), i.focus()),
                s.key === 'Tab' &&
                    s.shiftKey &&
                    n.activeElement === i &&
                    (s.preventDefault(), o.focus());
        }),
            i.focus();
    }
    handleOutsideClick(e, n) {
        n && (n.contains(e.target) || this.closeModal());
    }
    handleEscapeKey(e) {
        e.key === 'Escape' && this.closeModal();
    }
    closeModal() {
        var e;
        (document.body.style.overflow = this.overflow),
            this.remove(),
            this.formerFocus &&
                'focus' in (this == null ? void 0 : this.formerFocus) &&
                typeof this.formerFocus.focus == 'function' &&
                ((e = this.formerFocus) == null || e.focus());
    }
    render(e) {
        const n = this.getAttribute('title'),
            r = this.getAttribute('has-close-button'),
            a = e.translate('error_dialogs.checkout.button_text'),
            i =
                '\n      <footer>\n        <button type="button" id="close-button" tabindex="0">'.concat(
                    a,
                    '</button>\n      </footer>\n    '
                );
        this.shadowRoot.innerHTML =
            '\n      <div id="overlay">\n        <div id="modal" role="dialog" aria-modal="true" aria-labelledby="title">\n          <header>\n            <h2 id="title">\n              <span class="capitalize">'
                .concat(
                    n,
                    '</span>\n            </h2>\n            <button type="button" id="close-icon" aria-label='
                )
                .concat(
                    a,
                    ' tabindex="0">\n              <svg-icon color="gray"></svg-icon>\n            </button>\n          </header>\n          <div id="content">\n            <p><slot></slot></p>\n          </div>\n          '
                )
                .concat(r ? i : '', '\n        </div>\n      </div>\n    ');
    }
}
const Ul =
    '@keyframes topLevelModalLoadingSkeleton{50%{opacity:1}75%{opacity:.5}to{opacity:1}}top-level-modal .text-skeleton{display:inline-block;width:100%;height:14px;margin-bottom:7px;animation:topLevelModalLoadingSkeleton 4s ease infinite;animation-delay:-.168s;text-decoration:none!important;background-color:#dedede}top-level-modal .text-skeleton:last-of-type{width:50%}';
function qt({ type: t = 'button', label: e = void 0 } = {}) {
    const n = document.createElement('button');
    return (n.type = t), e && n.setAttribute('aria-label', e), n;
}
function Wt(t, e) {
    for (const [n, r] of Object.entries(e)) t.setAttribute(n, r);
}
function pn(t, e) {
    for (const [n, r] of Object.entries(e)) t.style.setProperty(n, r);
}
function jt(t, e) {
    const n = document.createElement('top-level-modal');
    (n.textContent = e),
        Wt(n, {
            'data-testid': 'top-level-modal',
            'has-close-button': 'true',
            title: t,
        }),
        document.body.appendChild(n);
}
function Lr(t, e, n) {
    const r = document.createElement('top-level-modal');
    Wt(r, { 'data-testid': 'top-level-modal', title: t }),
        e instanceof Promise
            ? ((r.innerHTML = '\n      <style>'.concat(
                  Ul,
                  '</style>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n    '
              )),
              e
                  .then(a => {
                      a && a !== ''
                          ? (r.innerHTML = a)
                          : (r.innerHTML = n != null ? n : '');
                  })
                  .catch(() => {
                      r.innerHTML = n != null ? n : '';
                  }))
            : (r.innerHTML = e),
        document.body.appendChild(r);
}
function Q(t, e) {
    jt(
        e.translate('error_dialogs.wallet.title', { wallet: t }),
        e.translate('error_dialogs.wallet.generic_error', { wallet: t })
    );
}
function ft(t) {
    jt(
        t.translate('error_dialogs.checkout.title'),
        t.translate('error_dialogs.checkout.generic_error')
    );
}
function Re(t, e) {
    jt(t.translate('error_dialogs.checkout.title'), e);
}
function Ne(t, e) {
    switch (e) {
        case $t.InvalidQuantity:
            ft(t);
            break;
    }
}
pe('top-level-modal', Fl);
class Yt extends HTMLElement {
    get buyerCountry() {
        return this.getAttribute('buyer-country');
    }
    get recommendedInstrument() {
        return this.getAttribute('recommended-instrument');
    }
    get buyerCurrency() {
        const e = this.getAttribute('buyer-currency');
        if (e == null) throw new Error('WalletElement buyer-currency is null');
        return e;
    }
    get accessToken() {
        return this.getAttribute('access-token');
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(e) {
        e
            ? this.setAttribute('disabled', '')
            : this.removeAttribute('disabled');
    }
    get hasSellingPlan() {
        const e = this.getAttribute('has-selling-plan');
        return e === 'true' || e === '';
    }
    set hasSellingPlan(e) {
        e
            ? this.setAttribute('has-selling-plan', '')
            : this.removeAttribute('has-selling-plan');
    }
    get isShippingRequired() {
        const e = this.getAttribute('requires-shipping');
        return e === 'true' || e === '';
    }
    set isShippingRequired(e) {
        e
            ? this.setAttribute('requires-shipping', '')
            : this.removeAttribute('requires-shipping');
    }
    get pciEnabled() {
        return this.hasAttribute('pci-enabled');
    }
}
const Bl = '#more-payment-options-link{cursor:pointer}';
function $l(t) {
    const e = n => {
        n.persisted && (t(), window.removeEventListener('pageshow', e));
    };
    window.addEventListener('pageshow', e);
}
class Hl extends Error {
    constructor(e) {
        e instanceof Error
            ? (super('['.concat(e.name, '] ').concat(e.message), {
                  cause: e.cause,
              }),
              (this.stack = e.stack))
            : super('[HandleCreateCartError] '.concat(String(e))),
            (this.name = 'HandleCreateCartError');
    }
}
async function me({ element: t, instrumentName: e, dataSource: n }) {
    try {
        const r = await n.getInitialCart(e),
            { cart: a, errors: i, warnings: o } = r;
        $l(() => {
            t && (t.disabled = !1);
        });
        const s = Tr(i),
            l = i.length === 1 && i[0] === g.InvalidQuantity,
            u = l || s;
        if (!a && !u)
            throw new Error(
                '['
                    .concat(e, '] Failed to create cart: ')
                    .concat(JSON.stringify(i))
            );
        if (a) {
            if (!a.id)
                throw new Error('['.concat(e, '] received invalid cart'));
            if (!a.checkoutUrl)
                throw new Error(
                    '['.concat(e, '] Created cart with no checkout URL')
                );
        }
        if (i.length > 0 && !u)
            throw new Error(
                'Errors present after cart creation: '.concat(JSON.stringify(i))
            );
        return w(
            {
                cart: a,
                customValidationError: s,
                decelerationReason: Ct({ warnings: o }),
            },
            l ? { unrecoverableError: $t.InvalidQuantity } : {}
        );
    } catch (r) {
        throw new Hl(r);
    } finally {
        t.disabled = !1;
    }
}
class Gl extends Yt {
    constructor() {
        super(),
            d(this, 'name', f.MoreOptions),
            d(this, 'anchor'),
            d(this, 'i18n'),
            d(this, 'dataSource'),
            d(this, 'classNames'),
            d(this, 'setI18n'),
            d(this, 'setDataSource'),
            d(this, 'setClassNames'),
            ([this.i18n, this.setI18n] = se()),
            ([this.dataSource, this.setDataSource] = se()),
            ([this.classNames, this.setClassNames] = se());
    }
    static get observedAttributes() {
        return ['disabled'];
    }
    connectedCallback() {
        this.anchor || this.render();
    }
    attributeChangedCallback(e, n, r) {
        n !== r &&
            e === 'disabled' &&
            this.anchor &&
            (r === ''
                ? this.anchor.setAttribute('aria-disabled', 'true')
                : this.anchor.removeAttribute('aria-disabled'),
            this.setAccessibilityAttributes());
    }
    async handleClick(e) {
        var n, r;
        if ((e.preventDefault(), this.disabled || !this.anchor)) return;
        this.disabled = !0;
        const [a, i] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                decelerationReason: o,
                cart: s,
                customValidationError: l,
                unrecoverableError: u,
            } = await me({
                element: this,
                instrumentName: f.MoreOptions,
                dataSource: i,
            });
            if (u) {
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                    Ne(a, u);
                return;
            }
            if (l) {
                Re(a, l.message);
                return;
            }
            if (o) {
                M({
                    checkoutUrl:
                        (n = s == null ? void 0 : s.checkoutUrl) != null
                            ? n
                            : '',
                    instrumentName: f.MoreOptions,
                    reason: o,
                });
                return;
            }
            const c =
                this.recommendedInstrument === f.ShopPay
                    ? 'skip_shop_pay'
                    : 'allow_redirect';
            m.sheetClicked({ instrument: f.MoreOptions, result: 'success' }),
                ue(
                    (r = s == null ? void 0 : s.checkoutUrl) != null ? r : '',
                    c
                );
        } catch (o) {
            m.sheetClicked({ instrument: f.MoreOptions, result: 'failed' }),
                b.notify(o),
                ft(a);
        }
    }
    async render() {
        const e = await this.i18n,
            n = await this.classNames;
        (this.anchor = document.createElement('a')),
            (this.anchor.textContent = e.translate('more_payment_options')),
            (this.anchor.className = n),
            this.anchor.setAttribute('id', 'more-payment-options-link'),
            (this.anchor.onclick = a => this.handleClick(a)),
            this.setAccessibilityAttributes(),
            this.appendChild(this.anchor);
        const r = document.createElement('style');
        (r.textContent = Bl), this.appendChild(r);
    }
    setAccessibilityAttributes() {
        this.anchor &&
            (this.disabled
                ? (this.anchor.removeAttribute('href'),
                  (this.anchor.role = 'link'))
                : (this.anchor.removeAttribute('role'),
                  (this.anchor.href = '#')));
    }
}
var F = (t => (
    (t.ButtonDisplay = 'buttonDisplay'),
    (t.LoadInstrument = 'loadInstrument'),
    (t.LoadSdk = 'loadSDK'),
    (t.AuthorizationLatency = 'authorizationLatency'),
    (t.SheetLoad = 'sheetLoad'),
    t
))(F || {});
function wa() {
    var t, e;
    return (
        !!((t = window.performance) != null && t.mark) &&
        !!((e = window.performance) != null && e.measure)
    );
}
function Kt(t, e) {
    return Ye(t, e), () => Z(t, e);
}
function Ye(t, e) {
    wa() && window.performance.mark(''.concat(t, '-').concat(e, '-start'));
}
function Z(t, e) {
    var n, r;
    if (wa())
        try {
            const a = ''.concat(t, '-').concat(e, '-start'),
                i = ''.concat(t, '-').concat(e, '-end'),
                o = ''.concat(t, '-').concat(e, '-duration');
            window.performance.mark(i);
            const s =
                    (r = window.performance.measure(o, a, i)) != null
                        ? r
                        : (n = window.performance.getEntriesByName(
                              o,
                              'measure'
                          )) == null
                        ? void 0
                        : n[0],
                l = s == null ? void 0 : s.duration;
            return l == null ? void 0 : l;
        } catch (a) {
            return;
        }
}
function Or(t, e, n) {
    if (rt != null && rt.length) {
        const r = rt.join(',');
        t.querySelectorAll(r).forEach(a => {
            n === null ? a.removeAttribute(e) : a.setAttribute(e, n);
        });
    }
}
function zl(t, e) {
    try {
        const n = JSON.parse(t != null ? t : '[]');
        if (!(n instanceof Array))
            throw new ee({
                code: 'invalid-wallet-configs',
                message: '['.concat(e, '] invalid walletConfigs found'),
            });
        return n;
    } catch (n) {
        throw new ee(
            {
                code: 'invalid-wallet-configs',
                message: '['
                    .concat(e, '] Error while parsing walletConfigs JSON: ')
                    .concat(n),
            },
            { cause: n }
        );
    }
}
function Vl(t, e) {
    try {
        return t ? JSON.parse(t) : null;
    } catch (n) {
        throw new ee(
            {
                code: 'invalid-wallet-config',
                message: '['
                    .concat(e, '] Error while parsing walletConfig JSON: ')
                    .concat(n),
            },
            { cause: n }
        );
    }
}
function It(t, e) {
    var n;
    const r = e == null ? void 0 : e.getLoadEligibility(t);
    return (
        m.instrumentLoadEligibility({
            instrument: e == null ? void 0 : e.getInstrumentName(),
            result: r != null && r.eligible ? 'success' : 'failed',
            reason: (r != null && r.eligible) || r == null ? void 0 : r.reason,
        }),
        (n = r == null ? void 0 : r.eligible) != null ? n : !1
    );
}
function ql(t, e) {
    return e.filter(n => It(t, n));
}
async function Ea({ walletInstrument: t, instanceNumber: e }) {
    const n = t.getInstrumentName(),
        r = Kt(F.LoadSdk, ''.concat(n, ':').concat(e));
    try {
        await t.loadWalletSDK(),
            m.instrumentSDKLoaded({
                instrument: n,
                measurement: r(),
                result: 'success',
            });
    } catch (i) {
        return (
            b.notify(i),
            m.instrumentSDKLoaded({
                instrument: n,
                measurement: r(),
                result: 'failed',
            }),
            null
        );
    }
    let a;
    try {
        a = t.getPartnerSDKEligibility();
    } catch (i) {
        b.notify(i), (a = { eligible: !1, reason: 'uncaught exception' });
    }
    return a.eligible
        ? (m.instrumentSDKEligible({ instrument: n, result: 'success' }), t)
        : (m.instrumentSDKEligible({
              instrument: n,
              reason: a.reason,
              result: 'failed',
          }),
          null);
}
function We(t, ...e) {
    try {
        const n = window[t];
        if (typeof n == 'function') return new n(...e);
    } catch (n) {}
    return null;
}
const _a = 'd6d12da0',
    Le = '0402dc2d';
var $e;
class xr extends Yt {
    constructor() {
        super(),
            d(this, 'apiClient'),
            d(this, 'i18n'),
            d(this, 'policy'),
            d(this, 'isFetchingPolicy', !1),
            d(this, 'intersectionObserver', null),
            O(this, $e),
            this.mountIntersectionObserver();
    }
    get shopId() {
        return this.getAttribute('shop-id');
    }
    get cartId() {
        return this.getAttribute('cart-id');
    }
    get walletConfigs() {
        return this.getAttribute('wallet-configs');
    }
    get recommendedWallet() {
        return this.getAttribute('recommended');
    }
    get amazonWallet() {
        return this.isFlagEnabled(Le)
            ? this.getAttribute('amazon-wallet')
            : null;
    }
    get fallbackWallet() {
        return this.getAttribute('fallback');
    }
    get isBuyWithPrimeEligible() {
        return this.isFlagEnabled(Le)
            ? this.hasAttribute('is-buy-with-prime-eligible')
            : !1;
    }
    get variantParams() {
        var e;
        try {
            return JSON.parse(
                (e = this.getAttribute('variant-params')) != null ? e : '[]'
            );
        } catch (n) {
            throw new ee({
                code: 'invalid-variant-params',
                message:
                    'variant-params must be a valid JSON string. Received variant-params: '
                        .concat(
                            this.getAttribute('variant-params'),
                            ', received error: '
                        )
                        .concat(n),
            });
        }
    }
    get styleExtractorDisabled() {
        return this.hasAttribute('disable-compat');
    }
    get onlySdk() {
        return this.hasAttribute('only-sdk');
    }
    get debug() {
        return this.hasAttribute('debug');
    }
    get hidePaymentButton() {
        return this.isFlagEnabled(Le)
            ? this.isBuyWithPrimeEligible && this.isRedirectedFromAmazon
            : !1;
    }
    get isRedirectedFromAmazon() {
        return this.isFlagEnabled(Le)
            ? sessionStorage.getItem('shopify_amazon_referral') === 'mShop'
            : !1;
    }
    triggerLoadedEvent() {
        document.dispatchEvent(
            new Event('shopify:payment_button:loaded', {
                bubbles: !0,
                cancelable: !0,
            })
        );
    }
    async attributeChangedCallback(e, n, r) {
        n !== r && Or(this, e, r);
    }
    showBuyerConsent(e, n) {
        var r, a, i;
        !e ||
            !n ||
            (i =
                (a = (r = window.Shopify) == null ? void 0 : r.PaymentButton) ==
                null
                    ? void 0
                    : a.showBuyerConsent) == null ||
            i.call(a, o => this.onClickSubscriptionPolicy(o, e, n));
    }
    hideBuyerConsent() {
        var e, n, r;
        (r =
            (n = (e = window.Shopify) == null ? void 0 : e.PaymentButton) ==
            null
                ? void 0
                : n.hideBuyerConsent) == null || r.call(n);
    }
    clearUI() {
        this.innerHTML = '';
    }
    isFlagEnabled(e) {
        return (
            A(this, $e) == null && k(this, $e, this.getEnabledFlags()),
            A(this, $e).includes(e)
        );
    }
    getEnabledFlags() {
        const e = this.getAttribute('enabled-flags');
        if (!e) return [];
        try {
            return JSON.parse(e);
        } catch (n) {
            return (
                console.warn('Invalid enabled-flags attribute value:', e), []
            );
        }
    }
    async onClickSubscriptionPolicy(e, n, r) {
        if ((e.preventDefault(), this.isFetchingPolicy)) return;
        if (this.policy) {
            this.showPolicy(this.policy, r);
            return;
        }
        this.isFetchingPolicy = !0;
        const a = this.fetchSubscriptionPolicy(n)
            .then(i => ((this.policy = i), i))
            .catch(
                i => (
                    b.notify(i), r.translate('subscriptions.policy_not_found')
                )
            )
            .finally(() => {
                this.isFetchingPolicy = !1;
            });
        this.showPolicy(a, r);
    }
    async fetchSubscriptionPolicy(e) {
        const n = await e.fetchSubscriptionPolicy();
        return (this.policy = n), n;
    }
    showPolicy(e, n) {
        Lr(
            n.translate('subscriptions.cancellation_policy'),
            e,
            n.translate('subscriptions.policy_not_found')
        );
    }
    mountIntersectionObserver() {
        (this.intersectionObserver = We(
            'IntersectionObserver',
            this.handleIntersection
        )),
            this.intersectionObserver
                ? this.intersectionObserver.observe(this)
                : V({ event: H.FirstVisibleNotAvailable });
    }
    handleIntersection(e, n) {
        e.some(r => r.isIntersecting) &&
            (n.disconnect(), V({ event: H.FirstVisible }));
    }
}
$e = new WeakMap();
function Mr(t) {
    var e, n;
    Ss({
        shopId: (e = t.shopId) != null ? e : Hn,
        cartId: (n = t.cartId) != null ? n : void 0,
        debug: t.debug,
        pageType: t.pageType,
    });
}
function Aa({ type: t, form: e }) {
    if (!e) return [];
    const n = document.querySelectorAll(
            '[name^="'
                .concat(t, '"][form^="')
                .concat(CSS.escape(e.getAttribute('id') || ''), '"]')
        ),
        r = e.querySelectorAll('[name^="'.concat(t, '"]')),
        a = [...n, ...r],
        i = {};
    return (
        a.forEach(o => {
            const s = Wl(o),
                l = jl(o);
            s && typeof l < 'u' && l.trim() !== '' && (i[s] = l);
        }),
        Object.entries(i != null ? i : {}).map(([o, s]) => ({
            key: o,
            value: s,
        }))
    );
}
function Qt({ page: t, element: e }) {
    const n =
            t === 'product'
                ? '[data-shopify="payment-button"]'
                : '[data-shopify="dynamic-checkout-cart"]',
        r = mn(e, n) || document.querySelector(n);
    return mn(r, 'form');
}
const et = Element.prototype;
function mn(t, e) {
    if (
        ((et.matches =
            et.matches ||
            et.webkitMatchesSelector ||
            et.msMatchesSelector ||
            et.mozMatchesSelector),
        !t || t.matches(e))
    )
        return t;
    let n = t;
    for (; n && n !== document.body; )
        if (((n = n.parentElement), n && n.matches(e))) return n;
    return null;
}
function Wl(t) {
    const e = t.getAttribute('name');
    if (e === null) return null;
    const n = e.indexOf('['),
        r = e.lastIndexOf(']');
    return n === -1 || r === -1 ? null : e.substring(n + 1, r);
}
function jl(t) {
    if (
        !(['radio', 'checkbox'].includes(t.type) && !t.checked) &&
        !(t.value === '' || typeof t.value > 'u')
    )
        return t.value;
}
function Fr(t) {
    const e = Qt({ page: 'product', element: t });
    return Ca(e);
}
function Ca(t) {
    var e;
    const n = t == null ? void 0 : t.elements;
    if (!n) return null;
    const r = vt(n, 'id');
    if (!r || isNaN(Number(r))) return null;
    const a = Number((e = vt(n, 'quantity')) != null ? e : '1'),
        i = 'gid://shopify/ProductVariant/'.concat(r),
        o = Kl(n),
        s = Aa({ type: 'properties', form: t });
    return {
        variantId: r,
        quantity: a,
        merchandiseId: i,
        sellingPlanId: o,
        lineItemProperties: s,
    };
}
function Yl(t) {
    const e = t == null ? void 0 : t.elements;
    return e ? !!vt(e, 'selling_plan') : !1;
}
function vt(t, e) {
    var n;
    const r = t.namedItem(e);
    return r && 'value' in r && (n = r.value) != null ? n : null;
}
function Kl(t) {
    const e = vt(t, 'selling_plan');
    if (!(!e || e === 'undefined'))
        return 'gid://shopify/SellingPlan/'.concat(e);
}
class Sa {
    constructor(e, n) {
        d(this, 'addToCartMutationObserver'),
            d(this, 'addToCartForm'),
            d(this, 'addToCartButtons'),
            (this.element = e),
            (this.onFormChanged = n),
            (this.addToCartMutationObserver = null),
            (this.addToCartForm = null),
            (this.addToCartButtons = []);
    }
    setupMutationObservers() {
        if ((this.findAndSetAddToCartButtons(), !this.addToCartForm)) return;
        this.syncComponentStateWithForm();
        const e = new MutationObserver(() => this.reobserveOnFormChanges());
        (this.addToCartMutationObserver = new MutationObserver(() =>
            this.syncComponentStateWithForm()
        )),
            e.observe(this.addToCartForm, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ['value'],
            }),
            this.observeAddToCartButtons();
    }
    syncComponentStateWithForm() {
        if (!this.addToCartForm) {
            this.onFormChanged({ disabled: !0, hasSellingPlan: !1 });
            return;
        }
        const e = Ca(this.addToCartForm),
            n = !!(
                this.addToCartButtons.length > 0 &&
                this.addToCartButtons.every(
                    r =>
                        r.hasAttribute('disabled') ||
                        r.getAttribute('aria-disabled') === 'true'
                )
            );
        this.onFormChanged({
            disabled: n || e === null,
            hasSellingPlan: Yl(this.addToCartForm),
            variantId: e == null ? void 0 : e.variantId,
            sellingPlanId: e == null ? void 0 : e.sellingPlanId,
        });
    }
    observeAddToCartButtons() {
        this.addToCartButtons.forEach(e => {
            this.addToCartMutationObserver.observe(e, { attributes: !0 });
        });
    }
    reobserveOnFormChanges() {
        var e;
        (e = this.addToCartMutationObserver) == null || e.disconnect(),
            this.findAndSetAddToCartButtons(),
            this.observeAddToCartButtons(),
            this.syncComponentStateWithForm();
    }
    findAndSetAddToCartButtons() {
        (this.addToCartForm = Qt({ page: 'product', element: this.element })),
            this.addToCartForm &&
                (this.addToCartButtons = [
                    ...this.addToCartForm.querySelectorAll('[type=submit]'),
                ]);
    }
}
function Ql(t, e, n) {
    try {
        const r = JSON.parse(t != null ? t : '{}'),
            a = JSON.parse(e != null ? e : JSON.stringify(Gn));
        if (r === null || Object.keys(r).length === 0) {
            if (!(a instanceof Object))
                throw (
                    (m.walletConfigDeveloperError(),
                    new ee({
                        code: 'invalid-fallback-wallet-config',
                        message: '['.concat(
                            n,
                            '] Invalid fallback wallet configs JSON'
                        ),
                    }))
                );
            return { recommendedWallet: null, fallbackWallet: a };
        }
        return { recommendedWallet: r, fallbackWallet: a };
    } catch (r) {
        throw (
            (m.walletConfigDeveloperError(),
            new ee(
                {
                    code: 'invalid-recommended-fallback-config',
                    message: '['
                        .concat(
                            n,
                            '] Error while parsing recommended/fallback JSON: '
                        )
                        .concat(r),
                },
                { cause: r }
            ))
        );
    }
}
const Xl =
        '.shopify-payment-button__button--hidden{visibility:hidden}.shopify-payment-button__button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);width:100%;border:none;box-shadow:0 0 0 0 transparent;color:#fff;cursor:pointer;display:block;font-size:1em;font-weight:500;line-height:1;text-align:center;transition:background .2s ease-in-out}.shopify-payment-button__button[disabled]{opacity:.6;cursor:default}.shopify-payment-button__button--unbranded{background-color:#1990c6;padding:1em 2em}.shopify-payment-button__button--unbranded:hover:not([disabled]){background-color:#136f99}.shopify-payment-button__more-options{background:transparent;border:0 none;cursor:pointer;display:block;font-size:1em;margin-top:1em;text-align:center;text-decoration:underline;width:100%}.shopify-payment-button__more-options.shopify-payment-button__skeleton{height:auto!important;min-height:0!important;border-radius:4px!important;width:50%;margin-left:25%;margin-right:25%}.shopify-payment-button__more-options[disabled]{opacity:.6;cursor:default!important}.shopify-payment-button__button.shopify-payment-button__button--branded{display:flex;flex-direction:column;position:relative;z-index:1}.shopify-payment-button__button.shopify-payment-button__button--branded .shopify-cleanslate{flex:1!important;display:flex!important;flex-direction:column!important}.shopify-payment-button__button.button.loading{position:relative;color:transparent}.shopify-payment-button__button.button.loading>.loading-overlay__spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;height:100%;display:flex;align-items:center}.shopify-payment-button__button.button.loading>.loading-overlay__spinner .spinner{width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}.button.loading>.loading-overlay__spinner .path{stroke:#fff}.shopify-payment-button__button .loading-overlay__spinner{width:1.8rem;display:inline-block}.shopify-payment-button__button .spinner{animation:shopify-rotator 1.4s linear infinite}@keyframes shopify-rotator{0%{transform:rotate(0)}to{transform:rotate(270deg)}}.shopify-payment-button__button .path{stroke-dasharray:280;stroke-dashoffset:0;transform-origin:center;stroke:#121212;animation:shopify-dash 1.4s ease-in-out infinite}@media screen and (forced-colors: active){.shopify-payment-button__button .path{stroke:CanvasText}}@keyframes shopify-dash{0%{stroke-dashoffset:280}50%{stroke-dashoffset:75;transform:rotate(135deg)}to{stroke-dashoffset:280;transform:rotate(450deg)}}#shopify-buyer-consent{margin-top:1em;display:inline-block;width:100%}#shopify-buyer-consent.hidden{display:none}#shopify-subscription-policy-button{background:none;border:none;padding:0;text-decoration:underline;font-size:inherit;cursor:pointer}#shopify-subscription-policy-button:before{box-shadow:none}@keyframes acceleratedCheckoutLoadingSkeleton{50%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}75%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-end, .5)}to{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}}.shopify-payment-button__skeleton{animation:acceleratedCheckoutLoadingSkeleton var(--shopify-accelerated-checkout-skeleton-animation-duration, 4s) var(--shopify-accelerated-checkout-skeleton-animation-timing-function, ease) infinite;animation-delay:-.168s;background-color:var(--shopify-accelerated-checkout-skeleton-background-color, #dedede);box-sizing:border-box;text-decoration:none!important;height:var(--shopify-accelerated-checkout-button-block-size, inherit);min-height:25px;max-height:55px;border-radius:var( --shopify-accelerated-checkout-button-border-radius, inherit )}',
    Jl =
        '.accelerated-checkout-button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow);min-width:150px}:host([page-type="cart_page"]) .accelerated-checkout-button{height:100%;width:100%;border-radius:var(--shopify-accelerated-checkout-button-border-radius, 4px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow)}@media (forced-colors: active){.accelerated-checkout-button{border:1px solid transparent!important}:host([page-type="cart_page"]) .accelerated-checkout-button{border:1px solid transparent!important}}',
    Zl = 70;
class ot {
    constructor(e, n, r, a) {
        d(this, 'red'),
            d(this, 'green'),
            d(this, 'blue'),
            d(this, 'opacity'),
            (this.red = e || 0),
            (this.green = n || 0),
            (this.blue = r || 0),
            (this.opacity = typeof a > 'u' ? 1 : a);
    }
    getLuminance() {
        const e = this.red & 255,
            n = this.green & 255,
            r = this.blue & 255;
        return e * 0.2126 + n * 0.7152 + r * 0.0722;
    }
    isDark() {
        return this.opacity === 0
            ? !1
            : this.getLuminance() / this.opacity < Zl;
    }
    blendWith(e, n) {
        (this.opacity = 1 - (1 - e.opacity) * (1 - n.opacity)),
            (this.red = this.blend(e.red, n.red, e, n)),
            (this.green = this.blend(e.green, n.green, e, n)),
            (this.blue = this.blend(e.blue, n.blue, e, n));
    }
    blend(e, n, r, a) {
        return Math.round(
            (e * r.opacity) / this.opacity +
                (n * a.opacity * (1 - r.opacity)) / this.opacity
        );
    }
}
function ec(t) {
    const e = [...t];
    let n = new ot(0, 0, 0, 0),
        r = new ot(255, 255, 255, 1),
        a = e.shift();
    for (; a; )
        n.opacity > 0 && a.opacity > 0
            ? ((r = new ot(0, 0, 0, 0)), r.blendWith(a, n))
            : a.opacity > 0
            ? (r = a)
            : (r = n),
            (n = r),
            (a = e.shift());
    return r;
}
const gr = new ot(255, 255, 255, 1);
function tc(t) {
    const e = [];
    let n = t;
    for (; n.parentElement; ) {
        n = n.parentElement;
        const r = window.getComputedStyle(n).backgroundColor,
            a = rc(r);
        if ((r && e.push(a), a.opacity === 1)) break;
    }
    try {
        return ec(e.reverse());
    } catch (r) {
        return (
            b.notify(
                new Pa(
                    '[BackgroundDetection] Failed to blend colors for element '.concat(
                        t.outerHTML
                    ),
                    { cause: r }
                )
            ),
            gr
        );
    }
}
function rc(t) {
    if (!t) return gr;
    try {
        const e = t.split('(')[1].split(')')[0].replace(' ', '').split(',');
        return new ot(
            Number(e[0]),
            Number(e[1]),
            Number(e[2]),
            typeof e[3] > 'u' ? 1 : Number(e[3])
        );
    } catch (e) {
        b.notify(
            new Pa(
                '[BackgroundDetection] Failed to convert rgbString to array '.concat(
                    t
                ),
                { cause: e }
            )
        );
    }
    return gr;
}
class Pa extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'ColorProcessingError');
    }
}
class Te extends Yt {
    constructor() {
        super(),
            d(this, 'name', f.Unknown),
            d(this, 'i18n'),
            d(this, 'dataSource'),
            d(this, 'apiClient'),
            d(this, 'classNames'),
            d(this, 'containerInstanceNumber'),
            d(this, 'onRendered'),
            d(this, 'setI18n'),
            d(this, 'setDataSource'),
            d(this, 'setApiClient'),
            d(this, 'setClassNames'),
            d(this, 'setContainerInstanceNumber'),
            d(this, 'parsedWalletParams'),
            (this.onRendered = () => {}),
            ([this.i18n, this.setI18n] = se()),
            ([this.dataSource, this.setDataSource] = se()),
            ([this.apiClient, this.setApiClient] = se()),
            ([this.classNames, this.setClassNames] = se()),
            ([this.containerInstanceNumber, this.setContainerInstanceNumber] =
                se());
    }
    async cleanupOnFailure(e, n) {
        var r;
        try {
            await e();
        } catch (a) {
            b.notify(
                new nc(
                    'An error occurred requiring cleanup when attempting to render the '
                        .concat(n, ' instrument: ')
                        .concat(a),
                    { cause: a }
                )
            );
            const i = await this.containerInstanceNumber;
            m.instrumentLoaded({
                instrumentOrComponentName: n,
                result: 'failed',
                measurement: Z(F.ButtonDisplay, ''.concat(n, ':').concat(i)),
            }),
                (r = this.parentElement) == null || r.remove();
        }
    }
    attributeChangedCallback(e, n, r, a) {
        n !== r &&
            e === 'disabled' &&
            a &&
            (r === ''
                ? (a.setAttribute('aria-disabled', 'true'),
                  a.setAttribute('disabled', ''))
                : (a.removeAttribute('aria-disabled'),
                  a.removeAttribute('disabled')));
    }
    get pageType() {
        return this.getAttribute('page-type') || S.Unknown;
    }
    get buttonTheme() {
        return tc(this).isDark() ? 'LIGHT' : 'DARK';
    }
    get isCTA() {
        return this.hasAttribute('call-to-action');
    }
    get walletParams() {
        var e;
        if (this.parsedWalletParams === void 0)
            try {
                this.parsedWalletParams = JSON.parse(
                    (e = this.getAttribute('wallet-params')) != null ? e : '{}'
                );
            } catch (n) {
                throw new ee(
                    {
                        code: 'invalid-wallet-params',
                        message: '['
                            .concat(
                                this.name,
                                '] Error while parsing wallet-params JSON: '
                            )
                            .concat(n),
                    },
                    { cause: n }
                );
            }
        return this.parsedWalletParams;
    }
    async initializeShadowStyles(e, n = '') {
        const r = document.createElement('style');
        (r.innerHTML = [Jl, n].join('\n')), e.appendChild(r);
    }
    async ensureLightDOMIsNotEmpty() {
        this.textContent = '\xA0';
    }
    dispatchWalletEvent({ eventName: e, detail: n = {} }) {
        var r;
        (r = this.parentElement) == null ||
            r.dispatchEvent(new CustomEvent(e, { detail: n }));
    }
}
class nc extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'CleanupOnFailureError');
    }
}
class ac extends Te {
    constructor() {
        super(...arguments),
            d(this, 'name', f.BuyItNow),
            d(this, 'button', null);
    }
    static get observedAttributes() {
        return ['disabled'];
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name);
    }
    attributeChangedCallback(e, n, r) {
        super.attributeChangedCallback(e, n, r, this.button);
    }
    async handleClick() {
        var e, n;
        if (
            this.disabled ||
            !this.button ||
            this.button.getAttribute('aria-disabled')
        )
            return;
        this.disabled = !0;
        const [r, a] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                decelerationReason: i,
                cart: o,
                customValidationError: s,
                unrecoverableError: l,
            } = await me({
                element: this,
                instrumentName: this.name,
                dataSource: a,
            });
            if (l) {
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                    Ne(r, l);
                return;
            }
            if (
                (m.sheetClicked({ instrument: this.name, result: 'success' }),
                s)
            ) {
                Re(r, s.message);
                return;
            }
            if (i) {
                M({
                    checkoutUrl:
                        (e = o == null ? void 0 : o.checkoutUrl) != null
                            ? e
                            : '',
                    instrumentName: this.name,
                    reason: i,
                });
                return;
            }
            ue(
                (n = o == null ? void 0 : o.checkoutUrl) != null ? n : '',
                'allow_redirect'
            );
        } catch (i) {
            b.notify(i),
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                ft(r);
        }
    }
    async render() {
        var e;
        this.button || (this.button = qt());
        const n = await this.classNames;
        (this.button.textContent = (await this.i18n).translate(
            'instruments_copy.checkout.buy_now'
        )),
            (this.button.className = n),
            this.disabled && this.button.setAttribute('aria-disabled', 'true'),
            (this.button.onclick = () => this.handleClick()),
            this.appendChild(this.button),
            (e = this.onRendered) == null || e.call(this);
    }
}
function ic() {
    const t = navigator.userAgent,
        e = t.indexOf('Android') > -1,
        n = t.indexOf('Chrome/') > -1,
        r = parseInt((/Chrome\/([0-9]+)/.exec(t) || ['0', '0'])[1], 10);
    return e && n && r === 114;
}
class ye {
    constructor(e) {
        d(this, 'walletParams'), (this.walletParams = e.wallet_params);
    }
    static walletName() {
        throw new Error('Must define walletName for WalletInstrument subclass');
    }
    createWebComponent({
        walletContainer: e,
        dataSource: n,
        i18n: r,
        apiClient: a,
        containerInstanceNumber: i,
        classNames: o = '',
        callToAction: s,
        pageType: l = S.ProductPage,
        slot: u = 'button',
        onRendered: c = () => {},
    }) {
        var h, p, y;
        const _ = this.getWebComponentName();
        pe(_, this.getWebComponentClass(), { isChildCustomElement: !0 });
        const C = document.createElement(_),
            E = {
                'access-token': (h = e.accessToken) != null ? h : '',
                'buyer-country': (p = e.buyerCountry) != null ? p : '',
                'buyer-currency': e.buyerCurrency,
                'wallet-params': JSON.stringify(
                    (y = this.walletParams) != null ? y : {}
                ),
                'page-type': l,
                slot: u,
            };
        try {
            e.disabled && C.setAttribute('disabled', ''),
                Wt(C, E),
                e.isShippingRequired && C.setAttribute('requires-shipping', ''),
                e.hasSellingPlan && C.setAttribute('has-selling-plan', ''),
                e.pciEnabled && C.setAttribute('pci-enabled', '');
        } catch (P) {
            const $ = P;
            throw $.message.includes('setAttribute is not a function') && ic()
                ? new Ft($.message)
                : $;
        }
        return (
            s && C.setAttribute('call-to-action', ''),
            C.setDataSource(n),
            C.setApiClient(a),
            C.setI18n(r),
            C.setClassNames(o),
            C.setContainerInstanceNumber(i),
            (C.onRendered = c),
            C
        );
    }
    loadWalletSDK() {
        return Promise.resolve();
    }
    getLoadEligibility(e) {
        return { eligible: !0 };
    }
    getPartnerSDKEligibility() {
        return { eligible: !0 };
    }
}
class oc extends ye {
    static walletName() {
        return 'buy_it_now';
    }
    getWebComponentName() {
        return 'shopify-buy-it-now-button';
    }
    getInstrumentName() {
        return f.BuyItNow;
    }
    getWebComponentClass() {
        return ac;
    }
}
const sc =
        'shopify-paypal-button[disabled]{opacity:.5;cursor:not-allowed}shopify-paypal-button div.paypal-buttons>iframe{z-index:auto!important;border-radius:0!important;box-shadow:none}',
    lc = '::slotted(div){height:100%}';
async function Ue(t) {
    const { cartId: e, cartClient: n, instrumentName: r, abortSignal: a } = t;
    try {
        if (!e)
            throw new Error(
                '['.concat(
                    r,
                    '] provided no cart ID when updating buyer identity'
                )
            );
        if (!n)
            throw new Error(
                '['.concat(
                    r,
                    '] provided invalid cart client when updating buyer identity'
                )
            );
        return await n.updateCartBuyerIdentity(t, a);
    } catch (i) {
        throw (m.updateFailed(r, 'updateBuyerIdentity'), i);
    }
}
async function Ur({
    cartId: t,
    totalAmount: e,
    paymentMethod: n,
    billingAddress: r,
    cartClient: a,
    instrumentName: i,
    abortSignal: o,
    hasSellingPlan: s,
    canUsePaymentMethodForFreeOrder: l,
}) {
    try {
        if (!t)
            throw new Error(
                '['.concat(i, '] provided no cart ID when updating payment')
            );
        if (!e)
            throw new Error(
                '['.concat(
                    i,
                    '] provided no total amount when updating payment'
                )
            );
        if (!n)
            throw new Error(
                '['.concat(
                    i,
                    '] provided no apple pay wallet content when updating payment'
                )
            );
        if (!a)
            throw new Error(
                '['.concat(
                    i,
                    '] provided invalid cart client when updating payment'
                )
            );
        const u = { freePaymentMethod: { billingAddress: r } };
        return await a.updateCartPayment(
            t,
            w(
                { amount: { amount: e.amount, currencyCode: e.currencyCode } },
                Number(e.amount) <= 0 && !l && !s ? u : n
            ),
            i,
            o
        );
    } catch (u) {
        throw (m.updateFailed(i, 'updatePayment'), u);
    }
}
function Ia(t) {
    return window[va(t)];
}
function va(t) {
    return 'paypal-'.concat(t.replace(/[^a-zA-Z0-9]/g, ''));
}
function Dt(t) {
    if (!t) return null;
    const e = getComputedStyle(t).borderRadius;
    return e.includes('px') ? parseInt(e, 10) : null;
}
function Rt(t) {
    if (!t) return null;
    const e = getComputedStyle(t).height;
    return e.includes('px') ? parseInt(e, 10) : null;
}
const or = 25,
    yn = 55,
    cc = ['cart_not_ready', 'cart_throttled'],
    sr = 'PAYPAL_CALLBACK_HANDLED_ERROR';
var Ee, le;
class dc extends Te {
    constructor() {
        super(),
            d(this, 'name', f.PayPal),
            d(this, 'abortController', null),
            d(this, 'cartId'),
            d(this, 'sdkButtonsComponent'),
            d(this, 'container', null),
            d(this, 'resizeObserver', null),
            d(this, 'buttonHeight'),
            d(this, 'rendering', !1),
            d(this, 'prevBorderRadius', 0),
            d(this, 'prevHeight', 0),
            O(this, Ee),
            O(this, le, !1),
            k(this, Ee, this.attachShadow({ mode: 'closed' })),
            (this.resizeObserver = We('ResizeObserver', () => this.onResize()));
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name);
    }
    async disconnectedCallback() {
        (this.innerHTML = ''),
            (A(this, Ee).innerHTML = ''),
            await this.teardownPayPalButton(),
            this.resizeObserver && this.resizeObserver.disconnect();
    }
    async teardownPayPalButton() {
        var e;
        try {
            await ((e = this.sdkButtonsComponent) == null
                ? void 0
                : e.close().catch(() => {}));
        } catch (n) {
        } finally {
            this.sdkButtonsComponent = void 0;
        }
    }
    async onResize() {
        const e = Dt(this.container),
            n = Rt(this.container),
            r =
                (e !== null && this.prevBorderRadius !== e) ||
                (n !== null && this.prevHeight !== n);
        !this.rendering &&
            r &&
            (await this.teardownPayPalButton(),
            (this.container.innerHTML = ''),
            await this.cleanupOnFailure(
                () => this.renderFromPayPalSDK(),
                this.name
            ));
    }
    async render() {
        var e;
        const n = document.createElement('div');
        n.className = De.BUTTON;
        const r = document.createElement('style');
        (r.innerHTML = sc),
            this.appendChild(r),
            await this.initializeShadowStyles(A(this, Ee), lc),
            A(this, Ee).appendChild(n),
            (this.container = n),
            this.renderFromPayPalSDK(),
            (e = this.resizeObserver) == null || e.observe(this.container);
    }
    getHeight() {
        const e = Rt(this.container);
        return e
            ? e >= or && e <= yn
                ? e
                : e < or
                ? (console.debug(
                      '[PayPalButton] Container height is less than the minimum height of the PayPal button. Using the minimum height of 25px.'
                  ),
                  or)
                : (console.debug(
                      '[PayPalButton] Container height is greater than the maximum height of the PayPal button. Using the maximum height of 55px.'
                  ),
                  yn)
            : mi;
    }
    async renderFromPayPalSDK() {
        var e, n, r;
        if (!this.container)
            throw new Error(
                'button container not set when attempting to render'
            );
        this.rendering = !0;
        const a = () => this.createToken(this.apiClient);
        let i, o;
        this.requiresBillingAgreement() ? (o = a) : (i = a);
        const s = Dt(this.container),
            l = this.getHeight();
        this.prevHeight = l;
        const u = {
            color: 'gold',
            label: this.isCTA ? 'pay' : 'paypal',
            disableMaxWidth: !0,
            height: l,
            shape: 'sharp',
        };
        s && s > 0 && ((u.borderRadius = s), (this.prevBorderRadius = s));
        const c = await this.i18n;
        (this.sdkButtonsComponent =
            (n =
                (e = Ia(this.walletParams.sdkUrl)) == null
                    ? void 0
                    : e.Buttons) == null
                ? void 0
                : n.call(e, {
                      fundingSource: 'paypal',
                      style: u,
                      createOrder: i,
                      createBillingAgreement: o,
                      onApprove: async h => {
                          await this.onApprove(h);
                      },
                      onCancel: () => {
                          this.cancelPaymentSheet('Payment sheet cancelled');
                      },
                      onClick: this.onClick.bind(this),
                      onError: h => {
                          this.onError(h, c);
                      },
                  })),
            await ((r = this.sdkButtonsComponent) == null
                ? void 0
                : r.render(this.container)),
            (this.rendering = !1),
            this.onRendered();
    }
    cancelPaymentSheet(e) {
        var n;
        k(this, le, !0),
            m.sheetCancelled(this.name),
            (n = this.abortController) == null ||
                n.abort('[PayPal] '.concat(e));
    }
    async onClick(e, n) {
        var r, a;
        if (this.disabled) return n.reject();
        k(this, le, !1), (this.abortController = We('AbortController'));
        const i = this.getBoundingClientRect(),
            o = i.left + i.width / 2,
            s = i.top + i.height / 2,
            l = new MouseEvent('click', {
                view: window,
                bubbles: !0,
                cancelable: !1,
                clientX: o,
                clientY: s,
                screenX: window.screenX + o,
                screenY: window.screenY + s,
            });
        this.dispatchEvent(l);
        const [u, c] = await Promise.all([this.dataSource, this.i18n]);
        try {
            const {
                decelerationReason: h,
                cart: p,
                customValidationError: y,
                unrecoverableError: _,
            } = await me({
                element: this,
                instrumentName: this.name,
                dataSource: u,
            });
            if (_)
                return (
                    m.sheetClicked({ instrument: this.name, result: 'failed' }),
                    Ne(c, _),
                    n.reject()
                );
            if (y) return Re(c, y.message), n.reject();
            const { hasManagedSellingPlanState: C } = this.walletParams;
            return C != null && C !== this.hasSellingPlan
                ? (ue(
                      (r = p == null ? void 0 : p.checkoutUrl) != null ? r : ''
                  ),
                  n.reject())
                : h
                ? (M({
                      checkoutUrl:
                          (a = p == null ? void 0 : p.checkoutUrl) != null
                              ? a
                              : '',
                      instrumentName: this.name,
                      reason: h,
                  }),
                  n.reject())
                : ((this.cartId = p.id), n.resolve());
        } catch (h) {
            return (
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                b.notify(h),
                ft(c),
                n.reject()
            );
        }
    }
    async createToken(e) {
        const n = await e;
        try {
            if (!this.cartId)
                throw new Error('cartId not found when creating token');
            const r = await n.paypalTokenCreate(this.cartId);
            return (
                m.sheetClicked({ instrument: this.name, result: 'success' }), r
            );
        } catch (r) {
            throw (
                (A(this, le) ||
                    (m.sheetClicked({
                        instrument: this.name,
                        result: 'failed',
                    }),
                    b.notify(r)),
                new Error(sr))
            );
        }
    }
    async onApprove({ orderID: e, payerID: n, billingToken: r }) {
        var a;
        try {
            if (
                (m.authorizationAttempt(this.name),
                Ye(F.AuthorizationLatency, this.name),
                !this.cartId)
            )
                throw new Error('Cart not found');
            const i = await this.apiClient,
                o = this.requiresBillingAgreement() && r != null ? r : e,
                {
                    billingAddress: s,
                    destinationAddress: l,
                    expiresAt: u,
                    email: c,
                    remoteOrderId: h,
                } = await i.paypalBuyerDetailsFetch(o, this.cartId),
                { data: p, decelerationReason: y } = await Ue({
                    cartId: this.cartId,
                    cartClient: i,
                    instrumentName: this.name,
                    emailAddress: c,
                    streetAddress: l,
                });
            if (!p) throw new Error('Cart not found');
            const { id: _, checkoutUrl: C, totalAmount: E } = p;
            if (this.shouldDecelerate(y)) {
                M({ checkoutUrl: C, instrumentName: this.name, reason: y });
                return;
            }
            const { decelerationReason: P } = await Ur({
                abortSignal:
                    (a = this.abortController) == null ? void 0 : a.signal,
                cartClient: i,
                cartId: _,
                instrumentName: f.PayPal,
                billingAddress: s != null ? s : l,
                paymentMethod: {
                    walletPaymentMethod: {
                        paypalWalletContent: {
                            billingAddress: s != null ? s : l,
                            email: c,
                            expiresAt: u,
                            payerId: n,
                            token: h != null ? h : e,
                            acceptedSubscriptionTerms: !1,
                            vaultingAgreement: !1,
                            merchantId: this.walletParams.merchantId,
                        },
                    },
                },
                canUsePaymentMethodForFreeOrder: !0,
                totalAmount: E,
            });
            if (this.shouldDecelerate(P)) {
                M({ checkoutUrl: C, instrumentName: this.name, reason: P });
                return;
            }
            if (
                kr({
                    currentCartTotal: E,
                    initialBuyerCurrency: this.buyerCurrency,
                })
            ) {
                M({
                    checkoutUrl: C,
                    instrumentName: this.name,
                    reason: 'currency_changed',
                });
                return;
            }
            m.authorizationComplete({
                instrument: this.name,
                result: 'success',
                measurement: Z(F.AuthorizationLatency, this.name),
            }),
                ue(C);
        } catch (i) {
            throw (
                (A(this, le) ||
                    (m.authorizationComplete({
                        instrument: this.name,
                        result: 'failed',
                        measurement: Z(F.AuthorizationLatency, this.name),
                    }),
                    b.notify(i)),
                new Error(sr))
            );
        }
    }
    onError(e, n) {
        if (A(this, le) || e.message.includes(sr)) return;
        if (e.message === 'Window is closed, can not determine type') {
            this.cancelPaymentSheet('Window Closed Error');
            return;
        }
        if (e.message === 'Detected popup close') {
            this.cancelPaymentSheet('Popup Closed Error');
            return;
        }
        e.message === 'RESTRICTED_WALLET_ACCOUNT'
            ? m.log({ body: 'PayPal modal closed due to error: '.concat(e) })
            : b.notify(new uc(e));
        const r = n.translate('brand.paypal');
        Q(r, n);
    }
    requiresBillingAgreement() {
        return (
            this.walletParams.hasManagedSellingPlanState ||
            this.walletParams.requiresBillingAgreement
        );
    }
    shouldDecelerate(e) {
        return !!(e && cc.includes(e));
    }
}
(Ee = new WeakMap()), (le = new WeakMap());
class uc extends Error {
    constructor(e) {
        e instanceof Error
            ? (super(e.message, { cause: e.cause }), (this.stack = e.stack))
            : super(String(e)),
            (this.name = 'PayPalError');
    }
}
const Oe = class eu extends ye {
    static walletName() {
        return 'paypal';
    }
    constructor(e) {
        super(e);
    }
    getWebComponentName() {
        return 'shopify-paypal-button';
    }
    getInstrumentName() {
        return f.PayPal;
    }
    getWebComponentClass() {
        return dc;
    }
    loadWalletSDK() {
        let e = eu.paypalSDKPromiseByUrl.get(this.walletParams.sdkUrl);
        if (e) return e;
        const n = document.createElement('script');
        return (
            n.setAttribute('src', this.walletParams.sdkUrl),
            (e = new Promise((r, a) => {
                n.setAttribute('data-namespace', va(this.walletParams.sdkUrl)),
                    (n.onload = () => r()),
                    (n.onerror = i => {
                        eu.paypalSDKPromiseByUrl.delete(
                            this.walletParams.sdkUrl
                        ),
                            n &&
                                document.body.contains(n) &&
                                document.body.removeChild(n),
                            a(i);
                    }),
                    document.body.appendChild(n);
            })),
            eu.paypalSDKPromiseByUrl.set(this.walletParams.sdkUrl, e),
            e
        );
    }
    getLoadEligibility() {
        return { eligible: !0 };
    }
    getPartnerSDKEligibility() {
        var e, n;
        try {
            return (n =
                (e = Ia(this.walletParams.sdkUrl)) == null
                    ? void 0
                    : e.Buttons) != null && n.call(e).isEligible()
                ? { eligible: !0 }
                : { eligible: !1, reason: 'PayPal SDK not eligible' };
        } catch (r) {
            throw new ee({
                code: 'paypal-sdk-eligibility-check-failed',
                message:
                    "PayPal SDK 'isEligible' method failed unexpectedly: ".concat(
                        r
                    ),
            });
        }
    }
};
d(Oe, 'paypalSDKPromiseByUrl', new Map());
let fr = Oe;
const hc =
        '.apple-pay-button{display:flex;align-items:center;justify-content:center;width:100%;padding:0!important;cursor:pointer;border:none}.apple-pay-button:hover:not(:disabled){filter:brightness(92%)}.apple-pay-button:disabled{opacity:.5;cursor:not-allowed}.apple-pay-button svg{height:100%;flex-shrink:0}.apple-pay--content{font-size:16px;font-family:San Francisco,sans-serif;width:100%;height:100%;flex-grow:1;display:flex;align-items:center;justify-content:center;white-space:pre}.apple-pay--light{background:#fff;color:#000}.apple-pay--light svg{fill:#000}.apple-pay--dark{background:#000;color:#fff}.apple-pay--dark svg{fill:#fff}',
    br = { UK: 'GB', JA: 'JP' },
    Da = ['AS', 'GU', 'MP', 'PR', 'VI'];
Da.forEach(t => {
    br[t] = 'US';
});
function _t(t) {
    var e, n;
    const r = t.countryCode,
        a = {
            firstName: t.givenName || void 0,
            lastName: t.familyName || void 0,
            address1:
                (e = t == null ? void 0 : t.addressLines) == null
                    ? void 0
                    : e[0],
            address2:
                ((n = t == null ? void 0 : t.addressLines) == null
                    ? void 0
                    : n[1]) || void 0,
            city: t.locality || void 0,
            zip: t.postalCode || void 0,
            province: t.administrativeArea || t.subLocality || void 0,
            country: pc(t.countryCode),
            phone: t.phoneNumber || void 0,
        };
    return (
        a.country === 'HK' && ((a.zip = void 0), (a.province = t.postalCode)),
        r && Da.includes(r) && (a.province = r),
        a.lastName || (a.lastName = a.firstName),
        a
    );
}
function pc(t) {
    if (!t) return 'ZZ';
    const e = t.toUpperCase();
    return Object.keys(br).includes(e) ? br[e] : e;
}
function mc(t, e) {
    return t.map(n => {
        const { title: r, deliveryPromise: a } = fc(n, e);
        return {
            title: r,
            estimatedCost: {
                amount: gc(n),
                currencyCode: n[0].estimatedCost.currencyCode,
            },
            handle: Na(n),
            deliveryPromise: a,
        };
    });
}
function yc(t, e) {
    return t.map(n => {
        const { title: r, description: a } = bc(n, e);
        return { title: r, description: a, handle: Na(n) };
    });
}
function Ra({ deliveryGroups: t }) {
    return t
        .map(e =>
            e.deliveryOptions
                .filter(({ deliveryMethodType: n }) => n === 'SHIPPING')
                .map(n => T(w({}, n), { groupType: e.groupType }))
        )
        .reduce((e, n) => e.flatMap(r => n.map(a => [...r, a])), [[]]);
}
function gc(t) {
    return t.reduce((e, n) => e + Number(n.estimatedCost.amount), 0).toFixed(2);
}
function fc(t, e) {
    const n = t.find(l => l.groupType === ve.OneTimePurchase),
        r = t.find(l => l.groupType === ve.Subscription),
        a = [
            ...new Set([
                n == null ? void 0 : n.title,
                r == null ? void 0 : r.title,
            ]),
        ].filter(Boolean),
        i = [
            ...new Set([
                n == null ? void 0 : n.deliveryPromise,
                r == null ? void 0 : r.deliveryPromise,
            ]),
        ].filter(Boolean),
        o =
            a.length === 2
                ? e.translate('shipping_methods.connect_shipping_methods', {
                      methodOne: a[0],
                      methodTwo: a[1],
                  })
                : a[0],
        s =
            i.length === 2
                ? e.translate('delivery_promises.connect_delivery_promises', {
                      promiseOne: i[0],
                      promiseTwo: i[1],
                  })
                : i[0];
    return { title: o, deliveryPromise: s };
}
function bc(t, e) {
    const n = t.find(o => o.groupType === ve.OneTimePurchase),
        r = t.find(o => o.groupType === ve.Subscription),
        a = t.map(wc).filter(Boolean).join(', ');
    let i = (n == null ? void 0 : n.title) || (r == null ? void 0 : r.title);
    return (
        n &&
            r &&
            (i = e.translate('shipping_methods.connect_shipping_methods', {
                methodOne: n.title,
                methodTwo: r.title,
            })),
        { title: i, description: a }
    );
}
function wc(t) {
    const e = Number(t.estimatedCost.amount).toFixed(2),
        n = t.estimatedCost.currencyCode,
        r = t.deliveryPromise;
    return r
        ? '('.concat(r, ') ').concat(e, ' ').concat(n)
        : ''.concat(e, ' ').concat(n);
}
function Na(t) {
    return t.map(e => e.handle).join(',');
}
function Ta({ deliveryGroups: t, i18n: e }) {
    const n = t.some(r => r.groupType === ve.Subscription);
    return t.map(r => {
        var a;
        let i = e.translate('order_summary.shipping');
        return (
            n &&
                (i =
                    r.groupType === ve.Subscription
                        ? e.translate('order_summary.shipping_subscription')
                        : e.translate(
                              'order_summary.shipping_one_time_purchase'
                          )),
            {
                label: i,
                amount: Ie(
                    ((a = r.selectedDeliveryOption) == null
                        ? void 0
                        : a.estimatedCost.amount) || 0
                ),
            }
        );
    });
}
function Ec(t, e) {
    return at({ label: t, possibleLines: [e] })[0];
}
function _c({
    subtotal: t,
    deliveryGroups: e,
    duties: n,
    taxes: r,
    discountAllocations: a,
    i18n: i,
    formattedRecurringTotals: o,
}) {
    var s;
    const l = at({
            label: i.translate('order_summary.subtotal'),
            possibleLines: [t],
        }),
        u = Ta({ deliveryGroups: e, i18n: i }),
        c = at({
            label: i.translate('order_summary.duties'),
            possibleLines: [n],
        }),
        h = at({
            label: i.translate('order_summary.taxes'),
            possibleLines: [r],
        }),
        p = o.map(C => ({ label: C, amount: '0.00', type: 'pending' })),
        y = p.length
            ? [
                  {
                      label: i.translate(
                          'order_summary.subscriptions.recurring_total_tooltip_line'
                      ),
                      amount: '0.00',
                      type: 'pending',
                  },
              ]
            : [],
        _ =
            (s =
                a == null
                    ? void 0
                    : a.flatMap(C => {
                          var E;
                          const P = (E = C.title) != null ? E : C.code;
                          return at({
                              label:
                                  P != null
                                      ? P
                                      : i.translate('order_summary.discount'),
                              possibleLines: [C.discountedAmount],
                              isDiscount: !0,
                          });
                      })) != null
                ? s
                : [];
    return [...l, ...u, ...c, ...h, ..._, ...p, ...y];
}
function at({ label: t, possibleLines: e, isDiscount: n = !1 }) {
    return e
        .filter(r => (r == null ? void 0 : r.amount) !== void 0)
        .map(r => ({
            label: t,
            amount: n ? '-'.concat(Ie(r.amount)) : Ie(r.amount),
        }));
}
function Ac(t, e) {
    if (!t.length) return [];
    const n = Ra({ deliveryGroups: t });
    return mc(n, e).map(r => {
        var a;
        return {
            label: r.title || '',
            amount: r.estimatedCost.amount,
            identifier: r.handle,
            detail: (a = r.deliveryPromise) != null ? a : '',
        };
    });
}
const lr = async ({
        paymentSheetAction: t,
        onProceed: e,
        terminateSession: n,
    }) => {
        switch (t.action) {
            case 'abort':
                n();
                break;
            case 'show_error':
                await e(t.errors);
                break;
            case 'update':
                await e(t.errors);
                break;
            default:
                throw new Error(
                    'Missing handler for payment sheet action "'.concat(
                        t.action,
                        '"'
                    )
                );
        }
    },
    Cc = ['decelerate', 'abort', 'show_error', 'complete', 'update'];
class Nt extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'UnhandledActionError');
    }
}
class ka {
    constructor() {
        d(this, 'generatePrioritizedPaymentSheetAction', (e, n) => {
            let r;
            const a = [],
                i = [],
                o = [],
                s = n
                    .filter(u => u !== g.UnacceptablePaymentsAmount)
                    .some(u => e[u] !== void 0);
            for (const u of Object.keys(e))
                if (!(u === g.UnacceptablePaymentsAmount && s)) {
                    const c = e[u]();
                    c.effects && i.push(...c.effects),
                        c.action !== 'complete' &&
                            c.errors &&
                            o.push(...c.errors),
                        a.push(c);
                }
            const l = (u =>
                Cc.map(c => u.find(h => h.action === c)).find(c => !!c))(a);
            return (
                l &&
                    ((r = l),
                    (r.effects = i),
                    r.action !== 'complete' && (r.errors = o)),
                r
            );
        });
    }
    getMergedPaymentSheetAction({ result: e, errorActions: n }) {
        const r = {};
        n.forEach(i => {
            i.errors.forEach(o => {
                e.errors.includes(o) && (r[o] = i.generateAction);
            });
        });
        let a;
        for (const i of e.errors) {
            const o = r[i];
            if (o) {
                a = o();
                break;
            }
        }
        return {
            firstPaymentSheetAction: a,
            prioritizedPaymentSheetAction:
                this.generatePrioritizedPaymentSheetAction(r, e.errors),
        };
    }
    getUnhandledErrors(e, n) {
        const r = n.flatMap(a => a.errors);
        return e.filter(a => !r.includes(a));
    }
    decelerateOrAbort({
        reason: e,
        instrumentName: n,
        errorOrWarning: r,
        result: a,
    }) {
        var i, o;
        return ((i = a == null ? void 0 : a.data) == null
            ? void 0
            : i.__typename) === 'SubmitFailed'
            ? {
                  action: 'decelerate',
                  redirectUrl: (o = a.data) == null ? void 0 : o.checkoutUrl,
                  reason: e,
              }
            : {
                  action: 'abort',
                  effects: [
                      () => {
                          var s;
                          b.notify(
                              new Error(
                                  '['
                                      .concat(n, '] unexpected ')
                                      .concat(r, ' received in ')
                                      .concat(
                                          (s = a == null ? void 0 : a.data) ==
                                              null
                                              ? void 0
                                              : s.__typename,
                                          ' response, aborting'
                                      )
                              )
                          );
                      },
                  ],
              };
    }
}
class Sc extends ka {
    constructor(e) {
        super(),
            d(this, 'completionResult'),
            (this.i18n = e),
            (this.completionResult = null);
    }
    mapMutationResultToPaymentSheetAction(e, n) {
        var r;
        const a = this.mapCustomValidationFunctionErrorToAction(e.errors);
        if (a) return a;
        const i = this.getErrorActions({
                shippingCountryCode: n == null ? void 0 : n.shippingCountryCode,
            }),
            o = e.errors,
            s = this.getUnhandledErrors(o, i);
        if (
            (s.forEach(u => {
                b.notify(
                    new Nt(
                        '['
                            .concat(
                                f.ApplePay,
                                '] mutation result error not handled: '
                            )
                            .concat(u)
                    )
                );
            }),
            ((r = e.data) == null ? void 0 : r.deliveryGroups.length) === 0 &&
                n != null &&
                n.shippingRequired)
        )
            return {
                action: 'show_error',
                errors: [new ApplePayError('addressUnserviceable')],
            };
        const { firstPaymentSheetAction: l } = this.getMergedPaymentSheetAction(
            { result: e, errorActions: i }
        );
        return (
            l ||
            (s.length > 0
                ? { action: 'abort' }
                : { action: 'update', errors: [] })
        );
    }
    mapCompletionResultToPaymentSheetAction(e, n) {
        if (!e.data)
            throw new Error(
                '['.concat(f.ApplePay, '] completion returned null result')
            );
        switch (((this.completionResult = e), e.data.__typename)) {
            case 'SubmitSuccess':
                return { action: 'complete', redirectUrl: e.data.redirectUrl };
            case 'SubmitAlreadyAccepted':
            case 'SubmitThrottled':
            case 'SubmitFailed': {
                const r = this.mapCustomValidationFunctionErrorToAction(
                    e.errors
                );
                if (r) return r;
                const a = this.getErrorActions({
                        shippingCountryCode:
                            n == null ? void 0 : n.shippingCountryCode,
                    }),
                    i = e.errors;
                this.getUnhandledErrors(i, a).forEach(s => {
                    b.notify(
                        new Error(
                            '['
                                .concat(
                                    f.ApplePay,
                                    '] completion result error not handled: '
                                )
                                .concat(s)
                        )
                    );
                });
                const { prioritizedPaymentSheetAction: o } =
                    this.getMergedPaymentSheetAction({
                        result: e,
                        errorActions: a,
                    });
                return o || { action: 'abort' };
            }
            default:
                throw new Error(
                    '['
                        .concat(
                            f.ApplePay,
                            '] unknown completion result type: '
                        )
                        .concat(e.data.__typename)
                );
        }
    }
    getErrorActions({ shippingCountryCode: e }) {
        return [
            {
                errors: [g.CaptchaCompletionRequired],
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'captcha_required',
                        instrumentName: f.ApplePay,
                        errorOrWarning: g.CaptchaCompletionRequired,
                        result: this.completionResult,
                    }),
            },
            {
                errors: [g.InvalidLanguage],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => {
                            b.notify(
                                new Error(
                                    '['.concat(
                                        f.ApplePay,
                                        '] mutation provided invalid language, aborting'
                                    )
                                )
                            );
                        },
                    ],
                }),
            },
            {
                errors: [g.InvalidCountry],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => {
                            b.notify(
                                new Error(
                                    '['.concat(
                                        f.ApplePay,
                                        '] mutation provided invalid country, aborting'
                                    )
                                )
                            );
                        },
                    ],
                }),
            },
            {
                errors: [g.MissingCartId],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => {
                            b.notify(
                                new Error(
                                    '['.concat(
                                        f.ApplePay,
                                        '] mutation provided invalid cart ID, aborting'
                                    )
                                )
                            );
                        },
                    ],
                }),
            },
            {
                errors: vr,
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'dynamic_tax',
                        instrumentName: f.ApplePay,
                        errorOrWarning: g.NewTaxMustBeAccepted,
                        result: this.completionResult,
                    }),
            },
            { errors: ca, generateAction: () => ({ action: 'abort' }) },
            {
                errors: [g.MerchandiseNotEnoughStock],
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'not_enough_stock',
                        instrumentName: f.ApplePay,
                        errorOrWarning: g.MerchandiseNotEnoughStock,
                        result: this.completionResult,
                    }),
            },
            {
                errors: da,
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'out_of_stock',
                        instrumentName: f.ApplePay,
                        errorOrWarning: g.MerchandiseOutOfStock,
                        result: this.completionResult,
                    }),
            },
            {
                errors: la,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [new ApplePayError('addressUnserviceable')],
                }),
            },
            {
                errors: [g.BuyerIdentityEmailRequired],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'emailAddress',
                            this.i18n.translate('errors.missing.email')
                        ),
                    ],
                }),
            },
            {
                errors: Xi,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.missing.first_name')
                        ),
                    ],
                }),
            },
            {
                errors: Ji,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.invalid.first_name')
                        ),
                    ],
                }),
            },
            {
                errors: Zi,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.missing.last_name')
                        ),
                    ],
                }),
            },
            {
                errors: eo,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.invalid.last_name')
                        ),
                    ],
                }),
            },
            {
                errors: to,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.missing.address1')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1Invalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.invalid.address1')
                        ),
                    ],
                }),
            },
            {
                errors: ro,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.missing.address2')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2Invalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.invalid.address2')
                        ),
                    ],
                }),
            },
            {
                errors: no,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'locality',
                            this.i18n.translate('errors.missing.city')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityInvalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'locality',
                            this.i18n.translate('errors.invalid.city')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryZoneRequiredForCountry],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        this.createApplePayZoneError(
                            this.i18n.translate('errors.missing.zone'),
                            this.i18n.translate('errors.missing.emirate'),
                            'shippingContactInvalid',
                            e
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryZoneNotFound],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        this.createApplePayZoneError(
                            this.i18n.translate('errors.invalid.zone'),
                            this.i18n.translate('errors.invalid.emirate'),
                            'shippingContactInvalid',
                            e
                        ),
                    ],
                }),
            },
            {
                errors: ao,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'postalCode',
                            this.i18n.translate('errors.missing.postal_code')
                        ),
                    ],
                }),
            },
            {
                errors: sa,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'postalCode',
                            this.i18n.translate('errors.invalid.postal_code')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryCountryRequired],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'country',
                            this.i18n.translate('errors.missing.country')
                        ),
                    ],
                }),
            },
            {
                errors: io,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'phoneNumber',
                            this.i18n.translate('errors.missing.phone')
                        ),
                    ],
                }),
            },
            {
                errors: so,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'phoneNumber',
                            this.i18n.translate('errors.invalid.phone')
                        ),
                    ],
                }),
            },
            {
                errors: oo,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'country',
                            this.i18n.translate('errors.invalid.country')
                        ),
                    ],
                }),
            },
            {
                errors: co,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [new ApplePayError('billingContactInvalid')],
                }),
            },
            {
                errors: [g.UnsupportedApplePayPaymentMethod],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => {
                            Q(
                                this.i18n.translate('brand.apple_pay'),
                                this.i18n
                            );
                        },
                        () => {
                            b.notify(
                                new Nt(
                                    '['.concat(
                                        f.ApplePay,
                                        '] payment method is not supported'
                                    )
                                )
                            );
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.emojis.last_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.emojis.first_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1TooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.too_long.address1')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2TooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.too_long.address2')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameTooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.too_long.first_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameTooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.too_long.last_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityTooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'locality',
                            this.i18n.translate('errors.too_long.city')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameContainsUrl],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.url.first_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameContainsUrl],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.url.last_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1ContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.html_tags.address1')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2ContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.html_tags.address2')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'locality',
                            this.i18n.translate('errors.html_tags.city')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.html_tags.first_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'name',
                            this.i18n.translate('errors.html_tags.last_name')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'locality',
                            this.i18n.translate('errors.emojis.city')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1ContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.emojis.address1')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2ContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'addressLines',
                            this.i18n.translate('errors.emojis.address2')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DeliveryPostalCodeContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'postalCode',
                            this.i18n.translate('errors.emojis.postal_code')
                        ),
                    ],
                }),
            },
            {
                errors: [g.BuyerIdentityEmailInvalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'shippingContactInvalid',
                            'emailAddress',
                            this.i18n.translate('errors.invalid.email')
                        ),
                    ],
                }),
            },
            {
                errors: [g.DiscountNotApplicable],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        new ApplePayError(
                            'couponCodeInvalid',
                            void 0,
                            this.i18n.translate('errors.invalid.discount')
                        ),
                    ],
                }),
            },
        ];
    }
    mapCustomValidationFunctionErrorToAction(e) {
        const n = Tr(e);
        return n
            ? {
                  action: 'abort',
                  effects: [
                      () => {
                          const r = this.i18n.translate('brand.apple_pay');
                          Lr(
                              this.i18n.translate(
                                  'error_dialogs.wallet.title',
                                  { wallet: r }
                              ),
                              n.message
                          );
                      },
                  ],
              }
            : null;
    }
    createApplePayZoneError(e, n, r, a) {
        const i = a === 'AE' ? 'subLocality' : 'administrativeArea';
        return new ApplePayError(r, i, a === 'AE' ? n : e);
    }
}
const gn = ['name', 'postalAddress'];
function Pc({ shippingRequired: t, walletParams: e, buyerCurrency: n }) {
    const { phoneRequired: r, emailRequired: a } = e,
        i = [...(a ? ['email'] : []), ...(r ? ['phone'] : [])],
        o = t ? [...gn, ...i] : i;
    return {
        countryCode: e.countryCode,
        currencyCode: n,
        merchantCapabilities: e.merchantCapabilities,
        supportedNetworks: e.supportedNetworks,
        total: { type: 'pending', label: e.merchantName, amount: '1.00' },
        requiredBillingContactFields: gn,
        requiredShippingContactFields: o,
        shippingType: e.shippingType,
    };
}
const Ic = t => {
        const e = t.lineItems.flatMap(n => n.discountAllocations);
        return [
            ...t.discountCodes
                .filter(
                    n =>
                        n.applicable &&
                        t.discountAllocations.findIndex(
                            r => r.code === n.code
                        ) === -1 &&
                        e.findIndex(r => r.code === n.code) === -1
                )
                .map(n => ({
                    code: n.code,
                    discountedAmount: {
                        amount: '0',
                        currencyCode: t.totalAmount.currencyCode,
                    },
                })),
            ...t.discountAllocations,
            ...e,
        ];
    },
    La = t => {
        const e = t.lineItems.reduce(
            (n, r) => n + Number(r.subtotalAmount.amount),
            0
        );
        return { amount: String(e), currencyCode: t.totalAmount.currencyCode };
    };
function vc(t, e) {
    return t.reduce((n, r) => {
        if (!r.sellingPlanAllocation) return n;
        const {
            sellingPlanAllocation: { sellingPlan: a, priceAdjustments: i },
            quantity: o,
        } = r;
        if (!a.recurringDeliveries || !a.billingPolicy) return n;
        const s = Dc({ billingPolicy: a.billingPolicy, i18n: e });
        if (i.length === 0) {
            const l = At({
                price: Number(r.subtotalAmount.amount) * o,
                currencyCode: r.subtotalAmount.currencyCode,
                locale: e.locale,
            });
            return [
                ...n,
                e.translate('order_summary.subscriptions.recurring_totals', {
                    fixedPrice: l,
                    interval: s,
                }),
            ];
        } else if (i.length === 1) {
            const l = At({
                price: Number(i[0].price.amount) * o,
                currencyCode: i[0].price.currencyCode,
                locale: e.locale,
            });
            return [
                ...n,
                e.translate('order_summary.subscriptions.recurring_totals', {
                    fixedPrice: l,
                    interval: s,
                }),
            ];
        } else if (i.length === 2) {
            const l = At({
                    price: Number(i[0].price.amount) * o,
                    currencyCode: i[0].price.currencyCode,
                    locale: e.locale,
                }),
                u = At({
                    price: Number(i[1].price.amount) * o,
                    currencyCode: i[1].price.currencyCode,
                    locale: e.locale,
                }),
                c = a.priceAdjustments[0].orderCount;
            return [
                ...n,
                e.translate(
                    'order_summary.subscriptions.recurring_totals_with_policies',
                    { count: c, fixedPrice: l, recurringPrice: u, interval: s }
                ),
            ];
        }
        return n;
    }, []);
}
function At({ price: t, currencyCode: e, locale: n }) {
    return Intl.NumberFormat(n, {
        style: 'currency',
        currency: e,
        currencyDisplay: 'narrowSymbol',
    }).format(t);
}
function Dc({ billingPolicy: t, i18n: e }) {
    const { interval: n, intervalCount: r } = t,
        a = {
            YEAR: 'order_summary.subscriptions.recurring_total_intervals.year',
            MONTH: 'order_summary.subscriptions.recurring_total_intervals.month',
            WEEK: 'order_summary.subscriptions.recurring_total_intervals.week',
            DAY: 'order_summary.subscriptions.recurring_total_intervals.day',
        }[n];
    if (!a)
        throw new Error('Unknown selling plan interval provided: '.concat(n));
    return e.translate(a, { count: r });
}
async function Oa({
    cartId: t,
    cartClient: e,
    instrumentName: n,
    selectedDeliveryOptions: r,
    abortSignal: a,
}) {
    try {
        if (!t)
            throw new Error(
                '['.concat(
                    n,
                    '] provided no cart ID when updating shipping method'
                )
            );
        if (!e)
            throw new Error(
                '['.concat(
                    n,
                    '] provided invalid cart client when updating shipping method'
                )
            );
        return await e.updateSelectedDeliveryOptions(t, r, n, a);
    } catch (i) {
        throw (m.updateFailed(n, 'updateSelectedDeliveryOptions'), i);
    }
}
async function xa({ cartId: t, token: e, cartClient: n, instrumentName: r }) {
    try {
        if (!t)
            throw new Error(
                '['.concat(
                    r,
                    '] provided no cart ID when submitting for completion'
                )
            );
        if (!n)
            throw new Error(
                '['.concat(
                    r,
                    '] provided invalid cart client when submitting for completion'
                )
            );
        if (!e)
            throw new Error(
                '['.concat(
                    r,
                    '] provided no token when submitting for completion'
                )
            );
        return await n.submitForCompletion(t, e, r);
    } catch (a) {
        throw (m.updateFailed(r, 'submitForCompletion'), a);
    }
}
function Ma({
    selectedDeliveryOptionHandles: t,
    deliveryGroups: e,
    instrumentName: n,
}) {
    return e.map(r => {
        const a = r.deliveryOptions.filter(i => t.includes(i.handle));
        if (!a.length)
            throw new Error(
                '['
                    .concat(n, '] could not find delivery option for group: ')
                    .concat(r.id)
            );
        if (a.length > 1)
            throw new Error(
                '['
                    .concat(
                        n,
                        '] found multiple delivery options with selectedDeliverOptionHandle in group: '
                    )
                    .concat(r.id)
            );
        return { deliveryGroupId: r.id, deliveryOptionHandle: a[0].handle };
    });
}
async function Rc(t) {
    const { cartClient: e, instrumentName: n } = t;
    try {
        if (!t.cartId)
            throw new Error(
                '['.concat(
                    n,
                    '] provided no cart ID when updating billing address'
                )
            );
        if (!e)
            throw new Error(
                '['.concat(
                    n,
                    '] provided invalid cart client when updating billing address'
                )
            );
        return await e.updateCartBillingAddress(t);
    } catch (r) {
        throw (m.updateFailed(n, 'updateBillingAddress'), r);
    }
}
function fn(t, e) {
    return t.some(n => e.includes(n));
}
function st({ result: t, instrument: e }) {
    var n;
    const r = (n = t.errors) != null ? n : [];
    fn(r, vr) && m.dynamicTaxFailed({ instrument: e }),
        fn(r, lo) && m.dynamicShippingFailed({ instrument: e });
}
const bn = ['cart_not_ready', 'cart_throttled', 'not_enough_stock'];
class Nc {
    constructor({
        accessToken: e,
        buyerCountry: n,
        buyerCurrency: r,
        button: a,
        i18n: i,
        merchantName: o,
        dataSource: s,
        apiClient: l,
        walletParams: u,
    }) {
        d(this, 'name', f.ApplePay),
            d(this, 'accessToken'),
            d(this, 'button'),
            d(this, 'buyerCountry'),
            d(this, 'cart'),
            d(this, 'apiClient'),
            d(this, 'dataSource'),
            d(this, 'i18n'),
            d(this, 'merchantName'),
            d(this, 'session'),
            d(this, 'paymentSheetActionGenerator'),
            d(this, 'cancelled'),
            d(this, 'buyerCurrency'),
            d(this, 'customerAccountEmail'),
            d(this, 'abortController', null),
            d(this, 'isPersonalDataCleared', !1),
            d(this, 'isSheetLoaded', !1),
            d(this, 'onvalidatemerchant', async c => {
                var h, p, y;
                try {
                    const _ = new URL(c.validationURL),
                        C = this.getMerchantSession(_),
                        {
                            cart: E,
                            decelerationReason: P,
                            customValidationError: $,
                            unrecoverableError: B,
                        } = await me({
                            element: this.button,
                            instrumentName: this.name,
                            dataSource: this.dataSource,
                        });
                    if (B) {
                        m.sheetClicked({
                            instrument: this.name,
                            result: 'failed',
                        }),
                            this.session.abort(),
                            (h = this.abortController) == null ||
                                h.abort(
                                    '[Apple Pay] Unrecoverable error '.concat(B)
                                ),
                            Ne(this.i18n, B);
                        return;
                    }
                    if ($) {
                        this.session.abort(),
                            (p = this.abortController) == null ||
                                p.abort('[Apple Pay] Custom validation error'),
                            Re(this.i18n, $.message);
                        return;
                    }
                    this.cart = E;
                    const Ke = await C;
                    if (
                        (b.leaveBreadcrumb(
                            'ApplePay Session completeMerchantValidation',
                            { session: Ke },
                            'log'
                        ),
                        P && bn.includes(P))
                    ) {
                        await this.terminateSession(),
                            M({
                                checkoutUrl:
                                    (y = E == null ? void 0 : E.checkoutUrl) !=
                                    null
                                        ? y
                                        : '',
                                instrumentName: this.name,
                                reason: P,
                            });
                        return;
                    }
                    if (this.sessionIsCancelled()) return;
                    this.session.completeMerchantValidation(Ke);
                } catch (_) {
                    m.sheetClicked({
                        instrument: f.ApplePay,
                        result: 'failed',
                    }),
                        this.terminateSession(_);
                }
            }),
            d(this, 'onshippingcontactselected', async c => {
                try {
                    const h = _t(c.shippingContact),
                        p = await Ue({
                            cartId: this.cart.id,
                            streetAddress: h,
                            cartClient: this.apiClient,
                            instrumentName: this.name,
                        });
                    if (!p.data)
                        throw new Error(
                            'Missing cart during Apple Pay Session creation'
                        );
                    if (await this.decelerateIfNeeded(p)) return;
                    await this.applyPaymentSheetActions(
                        p,
                        y => this.completeShippingContactSelection(p.data, y),
                        {
                            shippingRequired: this.isShippingRequired,
                            shippingCountryCode: h.country,
                        }
                    );
                } catch (h) {
                    this.terminateSession(h);
                }
            }),
            d(this, 'onshippingmethodselected', async c => {
                var h;
                try {
                    const p = c.shippingMethod.identifier.split(','),
                        y = Ma({
                            selectedDeliveryOptionHandles: p,
                            deliveryGroups: this.cart.deliveryGroups,
                            instrumentName: this.name,
                        }),
                        _ = await Oa({
                            cartId: this.cart.id,
                            cartClient: this.apiClient,
                            instrumentName: this.name,
                            selectedDeliveryOptions: y,
                            abortSignal:
                                (h = this.abortController) == null
                                    ? void 0
                                    : h.signal,
                        });
                    if (await this.decelerateIfNeeded(_)) return;
                    await this.applyPaymentSheetActions(
                        _,
                        () => this.completeShippingMethodSelection(_.data),
                        {
                            shippingRequired: this.isShippingRequired,
                            shippingCountryCode: void 0,
                        }
                    ),
                        this.onSheetLoaded();
                } catch (p) {
                    this.terminateSession(p);
                }
            }),
            d(this, 'onpaymentmethodselected', async c => {
                try {
                    const { billingContact: h } = c.paymentMethod;
                    if (!this.isShippingRequired && h) {
                        const _ = _t(h),
                            C = await Ue({
                                cartId: this.cart.id,
                                countryCode: _.country,
                                cartClient: this.apiClient,
                                instrumentName: this.name,
                            });
                        if (!C.data)
                            throw new Error(
                                'Missing cart during Apple Pay Session creation'
                            );
                        if (await this.decelerateIfNeeded(C)) return;
                        await this.applyPaymentSheetActions(
                            C,
                            () => (this.cart = C.data),
                            {
                                shippingRequired: this.isShippingRequired,
                                shippingCountryCode: _.country,
                            }
                        );
                        const E = await Rc({
                            billingAddress: _,
                            cartId: this.cart.id,
                            cartClient: this.apiClient,
                            instrumentName: this.name,
                        });
                        await this.applyPaymentSheetActions(
                            E,
                            () => (this.cart = E.data),
                            {
                                shippingRequired: this.isShippingRequired,
                                shippingCountryCode: _.country,
                            }
                        );
                    }
                    const { newTotal: p, newLineItems: y } =
                        this.getNewTotalAndLineItems(this.cart);
                    if (
                        (b.leaveBreadcrumb(
                            'ApplePay Session completePaymentMethodSelection',
                            { newTotal: p, newLineItems: y },
                            'log'
                        ),
                        this.sessionIsCancelled())
                    )
                        return;
                    this.session.completePaymentMethodSelection({
                        newTotal: p,
                        newLineItems: y,
                    }),
                        this.isShippingRequired || this.onSheetLoaded();
                } catch (h) {
                    this.terminateSession(h);
                }
            }),
            d(this, 'oncancel', () => {
                var c;
                (this.cancelled = !0),
                    this.removePersonalData(),
                    Z(F.SheetLoad, this.name),
                    m.sheetCancelled(this.name),
                    (this.button.disabled = !1),
                    (c = this.abortController) == null ||
                        c.abort('[Apple Pay] Payment sheet cancelled');
            }),
            d(this, 'onpaymentauthorized', async c => {
                m.authorizationAttempt(this.name),
                    Ye(F.AuthorizationLatency, this.name);
                const h = N => {
                        m.authorizationComplete({
                            instrument: this.name,
                            measurement: Z(F.AuthorizationLatency, this.name),
                            result: 'failed',
                        }),
                            this.terminateSession(N);
                    },
                    p = async N => {
                        var G, L;
                        switch (
                            ((G = N.effects) == null || G.forEach(x => x()),
                            N.action)
                        ) {
                            case 'complete': {
                                const x = ApplePaySession.STATUS_SUCCESS;
                                try {
                                    await this.completePayment(x),
                                        ue(N.redirectUrl);
                                } catch (ie) {
                                    h(ie);
                                }
                                break;
                            }
                            case 'show_error': {
                                const x = (L = N.errors) != null ? L : [];
                                try {
                                    await this.completePayment(
                                        ApplePaySession.STATUS_FAILURE,
                                        x
                                    );
                                } catch (ie) {
                                    h(ie);
                                }
                                break;
                            }
                            case 'abort': {
                                try {
                                    this.abortPaymentSheetAndShowError(),
                                        this.removePersonalData();
                                } catch (x) {
                                    h(x);
                                }
                                break;
                            }
                            case 'decelerate': {
                                try {
                                    await this.completePayment(
                                        ApplePaySession.STATUS_FAILURE
                                    ),
                                        await this.removePersonalData(),
                                        M({
                                            checkoutUrl: N.redirectUrl,
                                            instrumentName: this.name,
                                            reason: N.reason,
                                        });
                                } catch (x) {
                                    h(x);
                                }
                                break;
                            }
                            default:
                                h(
                                    new Error(
                                        '['
                                            .concat(
                                                this.name,
                                                '] completion action not handled: '
                                            )
                                            .concat(N.action)
                                    )
                                );
                        }
                    },
                    {
                        token: y,
                        billingContact: _,
                        shippingContact: C,
                    } = c.payment;
                let E = null,
                    P = null;
                try {
                    if (!_) {
                        await this.completePayment(
                            ApplePaySession.STATUS_FAILURE
                        );
                        return;
                    }
                    if (
                        ((E = _t(
                            T(w({}, _), {
                                phoneNumber: C == null ? void 0 : C.phoneNumber,
                            })
                        )),
                        this.isShippingRequired)
                    ) {
                        if (!C) {
                            await this.completePayment(
                                ApplePaySession.STATUS_FAILURE
                            );
                            return;
                        }
                        P = _t(C);
                    }
                } catch (N) {
                    h(N);
                    return;
                }
                const $ = async () => {
                        var N;
                        try {
                            const G = this.isShippingRequired
                                    ? { validateAddress: !0, streetAddress: P }
                                    : {},
                                L =
                                    (N = this.customerAccountEmail) != null
                                        ? N
                                        : C == null
                                        ? void 0
                                        : C.emailAddress,
                                x = await Ue(
                                    w(
                                        {
                                            cartId: this.cart.id,
                                            emailAddress: L,
                                            cartClient: this.apiClient,
                                            instrumentName: this.name,
                                        },
                                        G
                                    )
                                );
                            if (
                                (st({ result: x, instrument: this.name }),
                                await this.decelerateIfNeeded(x))
                            )
                                return;
                            const ie =
                                this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
                                    x,
                                    {
                                        shippingRequired:
                                            this.isShippingRequired,
                                        shippingCountryCode:
                                            P == null ? void 0 : P.country,
                                    }
                                );
                            await lr({
                                paymentSheetAction: ie,
                                onProceed: async bt => {
                                    bt && bt.length > 0
                                        ? await this.completePayment(
                                              ApplePaySession.STATUS_FAILURE,
                                              bt
                                          )
                                        : await B();
                                },
                                terminateSession: h,
                            });
                        } catch (G) {
                            h(G);
                        }
                    },
                    B = async () => {
                        var N;
                        try {
                            const G = this.cart.lineItems.some(
                                    ie => !!ie.sellingPlanAllocation
                                ),
                                L = await Ur({
                                    cartId: this.cart.id,
                                    totalAmount: this.cart.totalAmount,
                                    paymentMethod: {
                                        walletPaymentMethod: {
                                            applePayWalletContent: {
                                                billingAddress: E,
                                                data: y.paymentData.data,
                                                header: y.paymentData.header,
                                                lastDigits:
                                                    y.paymentMethod.displayName.split(
                                                        ' '
                                                    )[1],
                                                signature:
                                                    y.paymentData.signature,
                                                version: y.paymentData.version,
                                            },
                                        },
                                    },
                                    canUsePaymentMethodForFreeOrder: !1,
                                    billingAddress: E,
                                    cartClient: this.apiClient,
                                    instrumentName: this.name,
                                    hasSellingPlan: G,
                                    abortSignal:
                                        (N = this.abortController) == null
                                            ? void 0
                                            : N.signal,
                                });
                            if (
                                (st({ result: L, instrument: this.name }),
                                await this.decelerateIfNeeded(L))
                            )
                                return;
                            const x =
                                this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
                                    L,
                                    {
                                        shippingRequired:
                                            this.isShippingRequired,
                                        shippingCountryCode:
                                            P == null ? void 0 : P.country,
                                    }
                                );
                            await lr({
                                paymentSheetAction: x,
                                onProceed: async ie => {
                                    ie && ie.length > 0
                                        ? await this.completePayment(
                                              ApplePaySession.STATUS_FAILURE,
                                              ie
                                          )
                                        : await Ke();
                                },
                                terminateSession: h,
                            });
                        } catch (G) {
                            h(G);
                        }
                    },
                    Ke = async () => {
                        try {
                            const N = await xa({
                                cartId: this.cart.id,
                                token: y.transactionIdentifier,
                                cartClient: this.apiClient,
                                instrumentName: this.name,
                            });
                            st({ result: N, instrument: this.name });
                            const G =
                                this.paymentSheetActionGenerator.mapCompletionResultToPaymentSheetAction(
                                    N,
                                    {
                                        shippingRequired:
                                            this.isShippingRequired,
                                        shippingCountryCode:
                                            P == null ? void 0 : P.country,
                                    }
                                );
                            await p(G);
                        } catch (N) {
                            h(N);
                        }
                    };
                await $();
            }),
            d(this, 'terminateSession', async c => {
                var h;
                try {
                    (this.button.disabled = !1),
                        Z(F.SheetLoad, this.name),
                        c && b.notify(c),
                        m.sheetFailed(this.name, c);
                    try {
                        b.leaveBreadcrumb('ApplePay Session abort', {}, 'log'),
                            this.session.abort(),
                            (h = this.abortController) == null ||
                                h.abort('[Apple Pay] Payment sheet terminated');
                    } catch (p) {
                        console.debug(
                            '[DEBUG] InvalidAccessError occurred during Apple Pay terminateSession'
                        );
                    }
                    if (c) {
                        const p = this.i18n.translate('brand.apple_pay');
                        Q(p, this.i18n);
                    }
                } finally {
                    await this.removePersonalData();
                }
            }),
            d(this, 'getMostRecentNonNullCart', (c, h) =>
                c ? ((this.cart = c), c) : h
            ),
            d(this, 'handleNullCart', c => {
                if (!c)
                    throw new Error(
                        '['.concat(
                            this.name,
                            '] no cart returned on mutation, aborting'
                        )
                    );
            }),
            d(this, 'completeShippingContactSelection', (c, h) => {
                try {
                    const p = this.getMostRecentNonNullCart(c, this.cart),
                        { newTotal: y, newLineItems: _ } =
                            this.getNewTotalAndLineItems(p),
                        C = Ac(p.deliveryGroups, this.i18n);
                    b.leaveBreadcrumb(
                        'ApplePay Session completeShippingContactSelection',
                        {
                            errors: h,
                            newTotal: y,
                            newLineItems: _,
                            newShippingMethods: C,
                        },
                        'log'
                    ),
                        this.session.completeShippingContactSelection({
                            errors: h != null ? h : [],
                            newTotal: y,
                            newLineItems: _,
                            newShippingMethods: C,
                        });
                } catch (p) {
                    this.terminateSession(p);
                }
            }),
            d(this, 'completeShippingMethodSelection', c => {
                try {
                    this.handleNullCart(c), (this.cart = c);
                    const { newTotal: h, newLineItems: p } =
                        this.getNewTotalAndLineItems(c);
                    b.leaveBreadcrumb(
                        'ApplePay Session completeShippingContactSelection',
                        { newTotal: h, newLineItems: p },
                        'log'
                    ),
                        this.session.completeShippingMethodSelection({
                            newTotal: h,
                            newLineItems: p,
                        });
                } catch (h) {
                    this.terminateSession(h);
                }
            }),
            d(this, 'sessionIsCancelled', () => this.cancelled),
            (this.accessToken = e),
            (this.buyerCountry = n),
            (this.button = a),
            (this.cart = null),
            (this.apiClient = l),
            (this.dataSource = s),
            (this.i18n = i),
            (this.merchantName = o),
            (this.cancelled = !1),
            (this.buyerCurrency = r),
            (this.customerAccountEmail = u.customerAccountEmail),
            (this.session = new ApplePaySession(
                Fn,
                Pc({
                    shippingRequired: this.isShippingRequired,
                    walletParams: u,
                    buyerCurrency: r,
                })
            )),
            (this.session.onvalidatemerchant = this.onvalidatemerchant),
            (this.session.onshippingcontactselected =
                this.onshippingcontactselected),
            (this.session.onshippingmethodselected =
                this.onshippingmethodselected),
            (this.session.onpaymentmethodselected =
                this.onpaymentmethodselected),
            (this.session.oncancel = this.oncancel),
            (this.session.onpaymentauthorized = this.onpaymentauthorized),
            (this.paymentSheetActionGenerator = new Sc(i));
    }
    begin() {
        b.leaveBreadcrumb('ApplePay Session begin', {}, 'log'),
            (this.abortController = We('AbortController')),
            this.session.begin();
    }
    async applyPaymentSheetActions(e, n, r) {
        var a;
        const i =
            this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
                e,
                r
            );
        (a = i.effects) == null || a.forEach(o => o()),
            !this.sessionIsCancelled() &&
                (await lr({
                    paymentSheetAction: i,
                    onProceed: n,
                    terminateSession: this.terminateSession,
                }));
    }
    async getMerchantSession(e) {
        const n = await new zt({
            accessToken: this.accessToken,
            country: this.buyerCountry,
            locale: this.i18n.locale,
            apiVersion: 'unstable',
        }).applePaySessionCreate(e);
        return JSON.parse(n);
    }
    abortPaymentSheetAndShowError() {
        b.leaveBreadcrumb('ApplePay Session abort', {}, 'log'),
            this.session.abort(),
            (this.button.disabled = !1);
        const e = this.i18n.translate('brand.apple_pay');
        Q(e, this.i18n),
            this.emitPaymentCompleteTelemetry(ApplePaySession.STATUS_FAILURE);
    }
    emitPaymentCompleteTelemetry(e) {
        m.authorizationComplete({
            instrument: this.name,
            measurement: Z(F.AuthorizationLatency, this.name),
            result: e === ApplePaySession.STATUS_SUCCESS ? 'success' : 'failed',
        });
    }
    async completePayment(e, n = void 0) {
        b.leaveBreadcrumb(
            'ApplePay Session completePayment',
            { status: e, errors: n },
            'log'
        ),
            this.session.completePayment({ status: e, errors: n }),
            this.emitPaymentCompleteTelemetry(e);
    }
    getNewTotalAndLineItems(e) {
        return {
            newTotal: Ec(this.merchantName, e.totalAmount),
            newLineItems: _c({
                subtotal: La(e),
                discountAllocations: Ic(e),
                deliveryGroups: e.deliveryGroups,
                duties: e.totalDutyAmount,
                taxes: e.totalTaxAmount,
                i18n: this.i18n,
                formattedRecurringTotals: vc(this.cart.lineItems, this.i18n),
            }),
        };
    }
    async decelerateIfNeeded(e) {
        if (!e.data) return !1;
        const { checkoutUrl: n, totalAmount: r } = e.data;
        let a;
        if (
            (e.decelerationReason && bn.includes(e.decelerationReason)
                ? (a = e.decelerationReason)
                : kr({
                      currentCartTotal: r,
                      initialBuyerCurrency: this.buyerCurrency,
                  }) && (a = 'currency_changed'),
            a)
        ) {
            try {
                await this.terminateSession();
            } finally {
                M({ checkoutUrl: n, instrumentName: this.name, reason: a });
            }
            return !0;
        }
        return !1;
    }
    get isShippingRequired() {
        return this.button.isShippingRequired;
    }
    async removePersonalData() {
        this.isPersonalDataCleared ||
            !this.cart ||
            (await this.apiClient.cartRemovePersonalData({
                cartId: this.cart.id,
                instrumentName: this.name,
            }),
            (this.isPersonalDataCleared = !0));
    }
    onSheetLoaded() {
        if (this.isSheetLoaded) return;
        this.isSheetLoaded = !0;
        const e = Z(F.SheetLoad, this.name);
        e &&
            (V({ event: H.SheetLoaded, ttl: e }),
            m.sheetLoaded({ instrument: this.name, measurement: e }));
    }
}
function Br({ translate: t, logoElement: e, setAriaHidden: n }) {
    const r = document.createElement('div');
    return (
        t('buy_with_button_content', { wallet: 'LOGO_PLACEHOLDER' })
            .split(new RegExp('(LOGO_PLACEHOLDER)'))
            .filter(Boolean)
            .forEach(a => {
                let i;
                a === 'LOGO_PLACEHOLDER'
                    ? (i = e)
                    : ((i = document.createElement('span')),
                      (i.innerText = a),
                      n && i.setAttribute('aria-hidden', 'true')),
                    r.appendChild(i);
            }),
        r
    );
}
var He;
class Tc extends Te {
    constructor() {
        super(),
            d(this, 'name', f.ApplePay),
            d(this, 'button', null),
            O(this, He),
            k(this, He, this.attachShadow({ mode: 'closed' }));
    }
    static get observedAttributes() {
        return ['disabled'];
    }
    get merchantName() {
        return this.walletParams.merchantName;
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name);
    }
    attributeChangedCallback(e, n, r) {
        super.attributeChangedCallback(e, n, r, this.button);
    }
    async handleClick(e) {
        if (
            (e.preventDefault(),
            this.disabled ||
                !this.button ||
                this.button.hasAttribute('aria-disabled'))
        )
            return;
        this.disabled = !0;
        const [n, r, a] = await Promise.all([
            this.i18n,
            this.dataSource,
            this.apiClient,
        ]);
        Ye(F.SheetLoad, this.name);
        let i;
        try {
            if (
                ((i = new Nc({
                    accessToken: this.accessToken,
                    buyerCountry: this.buyerCountry,
                    buyerCurrency: this.buyerCurrency,
                    button: this,
                    i18n: n,
                    merchantName: this.merchantName,
                    dataSource: r,
                    apiClient: a,
                    walletParams: this.walletParams,
                })),
                !i)
            )
                throw new Error('missing ApplePaySession');
            i.begin(),
                m.sheetClicked({ instrument: this.name, result: 'success' });
        } catch (o) {
            b.notify(o),
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                i == null || i.terminateSession();
        }
    }
    async render() {
        var e;
        const { translate: n } = await this.i18n,
            r = new DOMParser().parseFromString(
                Ua.applePayLogo,
                'image/svg+xml'
            ).documentElement;
        if (!this.button) {
            const a = this.isCTA
                ? n('buy_with_button_content', { wallet: n('brand.apple_pay') })
                : n('brand.apple_pay');
            if (
                ((this.button = qt({ label: a })),
                (this.button.onclick = i => this.handleClick(i)),
                this.button.classList.add(
                    'apple-pay-button',
                    pi[this.buttonTheme],
                    De.BUTTON
                ),
                this.isCTA)
            ) {
                const i = Br({
                    translate: n,
                    logoElement: r,
                    setAriaHidden: !0,
                });
                i.classList.add('apple-pay--content'),
                    this.button.appendChild(i);
            } else this.button.appendChild(r);
            this.initializeShadowStyles(A(this, He), hc),
                A(this, He).appendChild(this.button),
                this.ensureLightDOMIsNotEmpty(),
                (e = this.onRendered) == null || e.call(this);
        }
        this.disabled &&
            (this.button.setAttribute('disabled', ''),
            this.button.setAttribute('aria-disabled', 'true'));
    }
}
He = new WeakMap();
function $r(t) {
    return function (e, n, r) {
        const a = r.value;
        return (
            (r.value = function (...i) {
                const o = a.apply(this, i);
                return (
                    o.eligible ||
                        console.debug(
                            '[DEBUG] '
                                .concat(t, ' could not be rendered. Reason: ')
                                .concat(o.reason)
                        ),
                    o
                );
            }),
            r
        );
    };
}
var kc = Object.defineProperty,
    Lc = Object.getOwnPropertyDescriptor,
    Fa = (t, e, n, r) => {
        for (var a = Lc(e, n), i = t.length - 1, o; i >= 0; i--)
            (o = t[i]) && (a = o(e, n, a) || a);
        return a && kc(e, n, a), a;
    },
    ce;
const Hr =
    ((ce = class extends ye {
        constructor(t) {
            super(t),
                d(this, 'companyFieldRequired'),
                (this.companyFieldRequired =
                    !!this.walletParams.companyRequired);
        }
        static walletName() {
            return 'apple_pay';
        }
        getWebComponentName() {
            return 'shopify-apple-pay-button';
        }
        getWebComponentClass() {
            return Tc;
        }
        getInstrumentName() {
            return f.ApplePay;
        }
        applePayInIframe() {
            return typeof window > 'u' || window.self !== window.top;
        }
        getLoadEligibility() {
            return this.applePayInIframe()
                ? { eligible: !1, reason: 'cannot be loaded in an iframe' }
                : { eligible: !0 };
        }
        getPartnerSDKEligibility() {
            var t, e, n, r;
            if (typeof window > 'u' || window.ApplePaySession === void 0)
                return {
                    eligible: !1,
                    reason: 'window or ApplePaySession is undefined',
                };
            try {
                if (
                    !(
                        (e = (t = window.ApplePaySession).supportsVersion) !=
                            null && e.call(t, Fn)
                    )
                )
                    return {
                        eligible: !1,
                        reason: 'SDK does not meet minimum version requirement',
                    };
                if (
                    !(
                        (r = (n = window.ApplePaySession).canMakePayments) !=
                            null && r.call(n)
                    )
                )
                    return {
                        eligible: !1,
                        reason: 'failed SDK eligibility check',
                    };
            } catch (a) {
                return {
                    eligible: !1,
                    reason: 'error in SDK eligibility checks',
                };
            }
            return { eligible: !0 };
        }
        async loadWalletSDK() {
            await this.loadAppleLogo();
        }
        async loadAppleLogo() {
            if (
                ((ce.applePayLogo = (
                    await import('./apple-pay-logo-BZB6IYWC.js')
                ).default),
                !ce.applePayLogo)
            )
                throw new Error('Apple Pay logo is empty');
        }
    }),
    d(ce, 'applePayLogo', ''),
    ce);
Fa([$r('Apple Pay')], Hr.prototype, 'getLoadEligibility'),
    Fa([$r('Apple Pay')], Hr.prototype, 'getPartnerSDKEligibility');
let Ua = Hr;
const Oc =
    '.buy-with-prime-button{width:100%;height:100%;padding:12px 10px 8px;display:flex;align-items:center;justify-content:center;gap:5px;opacity:1;border-width:0px}.buy-with-prime-button:hover:enabled{background-color:#0684eb!important}.buy-with-prime-button:focus{box-shadow:0 0 0 2px #1a98ff,inset 0 0 0 2px rgb(var(--color-background))!important;outline:none!important}.buy-with-prime-button:active,.buy-with-prime-button:hover:enabled:active{background-color:#0066cd!important;box-shadow:none!important}';
class Tt extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'MissingAccessTokenError');
    }
}
class Gr extends Error {
    constructor() {
        super(...arguments),
            d(this, 'name', 'FetchingWalletsPlatformConfigError');
    }
}
class zr extends Error {
    constructor() {
        super(...arguments),
            d(this, 'name', 'EmptyLineItemsWalletsPlatformConfigError');
    }
}
async function Vr({
    configOptionsEndpoint: t,
    checkoutUrl: e,
    sourceId: n,
    accessToken: r,
    instrument: a,
}) {
    try {
        const i = JSON.stringify({
                checkout_url: e,
                checkout_cancel_url: window.location.href,
                cart_id: n,
            }),
            o = await fetch(t, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Storefront-Access-Token': r,
                },
                body: i,
            });
        if (o.ok) return o.json();
        const s = await o.json();
        throw s.error
            ? new Error(s.error)
            : new Error(
                  'Could not fetch wallets platform configs: ['
                      .concat(o.status, '] ')
                      .concat(o.statusText)
              );
    } catch (i) {
        const { message: o } = i != null ? i : {};
        switch (o) {
            case 'empty_line_items':
                throw new zr(
                    '[Fetch Pay Config]['.concat(
                        a,
                        '] No eligible line items provided in the config request.'
                    )
                );
            default:
                throw new Gr('[Fetch Pay Config]['.concat(a, '] ').concat(o));
        }
    }
}
const xc = {
    [S.Checkout]: 'Checkout',
    [S.CartAjax]: 'Cart',
    [S.CartPage]: 'Cart',
    [S.ProductPage]: 'Product',
    [S.Unknown]: 'Product',
};
var ht;
const xe = class tu extends Te {
    constructor() {
        super(...arguments),
            d(this, 'name', f.BuyWithPrime),
            d(this, 'button', null),
            d(this, 'apiClientId', ''),
            O(this, ht, this.attachShadow({ mode: 'closed' }));
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name),
            (this.handleOnSendCheckoutAction =
                this.handleOnSendCheckoutAction.bind(this));
    }
    async triggerCheckout() {
        this.handleClick({ showDisabledStyles: !1 });
    }
    async createButton() {
        const { translate: e } = await this.i18n,
            n = qt({ label: e('brand.buy_with_prime') });
        return (
            (n.type = 'button'),
            (n.className = 'buy-with-prime-button'),
            this.applyEnabledStyles(n),
            n
        );
    }
    applyEnabledStyles(e) {
        (e.innerHTML = dt.primeLogo),
            (e.disabled = !1),
            pn(e, {
                'background-color': '#1A98FF',
                color: '#FFFFFF',
                cursor: 'pointer',
            });
    }
    applyDisabledStyles(e) {
        (e.innerHTML = dt.primeLogoDark),
            (e.disabled = !0),
            pn(e, {
                'background-color': '#C0E3FF',
                color: '#7292AC',
                cursor: 'not-allowed',
            });
    }
    async handleClick(e = { showDisabledStyles: !0 }) {
        var n, r, a;
        if (!this.button) return;
        const [i, o] = await Promise.all([this.i18n, this.dataSource]);
        let s = [];
        try {
            e.showDisabledStyles && this.applyDisabledStyles(this.button);
            let l = this.walletParams;
            if (
                ((this.apiClientId = this.apiClientId || l.appId || ''),
                !l.createCheckoutSessionConfig)
            ) {
                const {
                    cart: c,
                    decelerationReason: h,
                    customValidationError: p,
                    unrecoverableError: y,
                } = await me({
                    element: this,
                    instrumentName: this.name,
                    dataSource: o,
                });
                if (y) {
                    m.sheetClicked({
                        instrument: this.name,
                        result: 'failed',
                        webPixelMetaData: this.apiClientId
                            ? {
                                  apiClientId: this.apiClientId,
                                  pageType: this.pageType,
                              }
                            : void 0,
                    }),
                        Ne(i, y);
                    return;
                }
                if (p) {
                    Re(i, p.message);
                    return;
                }
                if (h) {
                    M({
                        checkoutUrl:
                            (n = c == null ? void 0 : c.checkoutUrl) != null
                                ? n
                                : '',
                        instrumentName: this.name,
                        reason: h,
                    });
                    return;
                }
                if (!this.accessToken)
                    throw new Tt(
                        '[Fetch Pay Config] could not fetch pay configs since required accessToken is missing.'
                    );
                l = w(
                    {},
                    await Vr({
                        configOptionsEndpoint: tu.OPTIMUS_CONFIG_REST_API_URL,
                        checkoutUrl:
                            (r = c == null ? void 0 : c.checkoutUrl) != null
                                ? r
                                : '',
                        sourceId: (a = Nr(c)) != null ? a : '',
                        accessToken: this.accessToken,
                        instrument: this.name,
                    })
                );
            }
            (l.placement = this.getPlacement()),
                (s = this.extractSKUs(l)),
                delete l.checkoutSupportsSplitCart,
                delete l.appId;
            const u = l;
            this.pciEnabled &&
                (u.onSendCheckoutAction = this.handleOnSendCheckoutAction),
                window.amazon.buywithprime.initCheckout({
                    amazonPayOptions: u,
                }),
                m.sheetClicked({
                    instrument: this.name,
                    result: 'success',
                    webPixelMetaData: this.apiClientId
                        ? {
                              apiClientId: this.apiClientId,
                              skus: s,
                              pageType: this.pageType,
                          }
                        : void 0,
                });
        } catch (l) {
            tu.EXPECTED_ERRORS.some(h => l instanceof h) || b.notify(l),
                m.sheetClicked({
                    instrument: this.name,
                    result: 'failed',
                    webPixelMetaData: this.apiClientId
                        ? {
                              apiClientId: this.apiClientId,
                              skus: s,
                              pageType: this.pageType,
                          }
                        : void 0,
                });
            const { name: u } = l != null ? l : { name: 'unknown' },
                { translate: c } = i;
            jt(
                c('error_dialogs.wallet.title', {
                    wallet: c('brand.buy_with_prime'),
                }),
                this.getModalContent(u, c)
            );
        } finally {
            this.applyEnabledStyles(this.button);
        }
    }
    getModalContent(e, n) {
        return e === 'EmptyLineItemsWalletsPlatformConfigError'
            ? n('error_dialogs.wallet.eligibility_error', {
                  wallet: n('brand.buy_with_prime'),
              })
            : n('error_dialogs.wallet.generic_error', {
                  wallet: n('brand.buy_with_prime'),
              });
    }
    extractSKUs(e) {
        var n;
        return (n = e.createCheckoutSessionConfig) != null && n.payloadJSON
            ? JSON.parse(e.createCheckoutSessionConfig.payloadJSON)
                  .cartDetails.lineItems.map(r => r && r.sku)
                  .filter(r => r)
            : [];
    }
    getPlacement() {
        return (this.pageType && xc[this.pageType]) || 'Other';
    }
    async render() {
        var e;
        this.button ||
            ((this.button = await this.createButton()),
            (this.button.onclick = () => this.handleClick()),
            this.button.classList.add('buy-with-prime-button'),
            this.getPlacement().includes('Checkout') ||
                this.button.classList.add(De.BUTTON),
            await this.initializeShadowStyles(A(this, ht), Oc),
            A(this, ht).appendChild(this.button),
            (e = this.onRendered) == null || e.call(this));
    }
    buildBwpEventData(e) {
        const n = {};
        return (
            e.createCheckoutSessionConfig &&
                ((n.skus = this.extractSKUs(e)),
                (n.apiClientId = this.apiClientId)),
            n
        );
    }
    async handleOnSendCheckoutAction(e) {
        const {
            eventName: n,
            redirect: r,
            redirectUrl: a,
            requestPayload: i,
        } = e;
        if (r && a) {
            this.dispatchWalletEvent({
                eventName: 'wallet-redirect',
                detail: { redirectUrl: a, requestPayload: i },
            });
            return;
        }
        switch (n) {
            case 'initCheckout': {
                const o = this.walletParams;
                this.dispatchWalletEvent({
                    eventName: 'wallet-clicked',
                    detail: { bwpEventData: this.buildBwpEventData(o) },
                });
                break;
            }
            case 'initChange':
                this.dispatchWalletEvent({ eventName: 'wallet-clicked' });
                break;
            case 'cancelCheckout':
                this.dispatchWalletEvent({ eventName: 'wallet-cancel' });
                break;
        }
    }
};
(ht = new WeakMap()),
    d(
        xe,
        'OPTIMUS_CONFIG_REST_API_URL',
        ''.concat(window.location.origin, '/wallets/config/optimus')
    ),
    d(xe, 'EXPECTED_ERRORS', [Gr, Tt, zr]);
let kt = xe;
async function Ba({
    fn: t,
    maxRetries: e = 3,
    delay: n = 1e3,
    retryPolicyFn: r = () => !0,
    onFinishedFn: a = () => {},
}) {
    const i = () =>
        new Promise(l => {
            setTimeout(l, n);
        });
    let o = 0;
    const s = async () => {
        try {
            return await t();
        } catch (l) {
            if ((o++, o < e && r(l))) return await i(), s();
            throw l;
        }
    };
    try {
        return await s();
    } finally {
        a(o);
    }
}
async function Mc(t) {
    return new Promise((e, n) => {
        if (
            document.querySelector('script[src="'.concat(t, '"]')) &&
            window.amazon
        ) {
            e();
            return;
        }
        const r = document.createElement('script');
        (r.src = t),
            (r.onload = () => {
                window.amazon
                    ? e()
                    : n(new Error('Amazon SDK not present after loading'));
            }),
            (r.onerror = () => {
                n(new Ft('Error loading Amazon SDK'));
            }),
            document.head.append(r);
    });
}
async function $a({ sdkUrl: t = Sr, maxRetries: e = 3 }) {
    return Ba({
        fn: () => Mc(t),
        maxRetries: e,
        delay: 200,
        retryPolicyFn: () => !0,
        onFinishedFn: n => {
            m.amazonPaySDKLoadRetries({ retries: n });
        },
    });
}
const j = class Mn extends ye {
    static walletName() {
        return 'buy_with_prime';
    }
    constructor(e) {
        super(e);
    }
    getWebComponentName() {
        return 'shopify-buy-with-prime-button';
    }
    getInstrumentName() {
        return f.BuyWithPrime;
    }
    getWebComponentClass() {
        return kt;
    }
    async loadWalletSDK() {
        await $a({ sdkUrl: Mn.SDK_URL, maxRetries: Mn.MAX_RETRIES }),
            await this.loadLogos();
    }
    async loadLogos() {
        await Promise.all([this.loadPrimeLogo(), this.loadPrimeLogoDark()]);
    }
    async loadPrimeLogo() {
        if (
            ((Mn.primeLogo = (
                await import('./prime-logo-DoVHKBSO.js')
            ).default),
            !Mn.primeLogo)
        )
            throw new Error('Buy with Prime logo is empty');
    }
    async loadPrimeLogoDark() {
        if (
            ((Mn.primeLogoDark = (
                await import('./prime-logo-dark-DJIA6J0w.js')
            ).default),
            !Mn.primeLogoDark)
        )
            throw new Error('Buy with Prime logo dark is empty');
    }
};
d(j, 'MAX_RETRIES', 3),
    d(j, 'SDK_URL', Sr),
    d(j, 'primeLogo', ''),
    d(j, 'primeLogoDark', '');
let dt = j;
const Fc =
        'shopify-amazon-pay-button div[role=button][slot=amazon-pay-slot][data-testid=amazon-pay-button]{border-radius:0!important}',
    wn = 'amazon-pay-slot';
var pt, mt, Ge, Y, ne, _e, Ae;
const Me = class nu extends Te {
    constructor() {
        super(),
            d(this, 'name', f.AmazonPay),
            d(this, 'resizeObserver', null),
            O(this, pt, 0),
            O(this, mt, 0),
            O(this, Ge, !1),
            O(this, Y, null),
            O(this, ne, null),
            O(this, _e, null),
            O(this, Ae),
            d(this, 'sdkButton', null),
            k(this, Ae, this.attachShadow({ mode: 'closed' })),
            (this.resizeObserver = We('ResizeObserver', () => this.onResize()));
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name);
    }
    async disconnectedCallback() {
        var e;
        (this.innerHTML = ''),
            (A(this, Ae).innerHTML = ''),
            this.teardownAmazonButtonContainer(),
            (e = this.resizeObserver) == null || e.disconnect();
    }
    async triggerCheckout() {
        if (!this.sdkButton)
            throw (
                (m.log({
                    body: 'Attempted to trigger checkout on uninitialized Amazon Pay SDK button',
                    attributes: {
                        pageType: this.pageType,
                        containerID: A(this, ne),
                    },
                }),
                new Error(
                    'Attempted to trigger checkout on uninitialized Amazon Pay SDK button'
                ))
            );
        this.handleClick(this.sdkButton);
    }
    async handleClick(e) {
        var n, r;
        const [a, i] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                cart: o,
                decelerationReason: s,
                customValidationError: l,
                unrecoverableError: u,
            } = await me({
                element: this,
                instrumentName: this.name,
                dataSource: i,
            });
            if (u) {
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                    Ne(a, u);
                return;
            }
            if (l) {
                Re(a, l.message);
                return;
            }
            if (s) {
                M({
                    checkoutUrl:
                        (n = o == null ? void 0 : o.checkoutUrl) != null
                            ? n
                            : '',
                    instrumentName: this.name,
                    reason: s,
                });
                return;
            }
            const {
                totalAmount: { amount: c },
                checkoutUrl: h,
            } = o;
            let p = this.walletParams;
            if (!p.createCheckoutSessionConfig) {
                if (!this.accessToken)
                    throw new Tt(
                        '[Fetch Pay Config] could not fetch pay configs since required accessToken is missing.'
                    );
                p = T(
                    w(
                        {},
                        await Vr({
                            configOptionsEndpoint: nu.CV2_CONFIG_REST_API_URL,
                            checkoutUrl: h,
                            sourceId: (r = Nr(o)) != null ? r : '',
                            accessToken: this.accessToken,
                            instrument: this.name,
                        })
                    ),
                    {
                        placement:
                            this.pageType === S.ProductPage
                                ? 'Product'
                                : 'Cart',
                    }
                );
            }
            delete p.appId,
                e.initCheckout(
                    w(
                        w({}, p),
                        Number(c) !== 0 && {
                            estimatedOrderAmount: {
                                amount: c,
                                currencyCode: this.buyerCurrency,
                            },
                        }
                    )
                ),
                m.sheetClicked({ instrument: this.name, result: 'success' });
        } catch (o) {
            nu.EXPECTED_ERRORS.some(l => o instanceof l) || b.notify(o),
                m.sheetClicked({ instrument: this.name, result: 'failed' });
            const s = a.translate('brand.amazon_pay');
            Q(s, a);
        }
    }
    createContainer({ containerID: e, height: n }) {
        const r = document.createElement('div');
        return (
            (r.id = e),
            (r.style.display = 'flex'),
            n != null && (r.style.height = ''.concat(n, 'px')),
            (r.slot = wn),
            r.setAttribute('data-testid', 'amazon-pay-button'),
            r
        );
    }
    async onResize() {
        const e = Dt(A(this, Y)) || 0,
            n = Rt(A(this, Y)) || 0,
            r = A(this, pt) !== e || A(this, mt) !== n;
        !A(this, Ge) &&
            r &&
            (this.teardownAmazonButtonContainer(),
            await this.cleanupOnFailure(
                () => this.renderFromAmazonSDK(),
                this.name
            ));
    }
    async render() {
        var e;
        try {
            const n = document.createElement('slot');
            n.name = wn;
            const r = document.createElement('style');
            (r.textContent = Fc),
                this.appendChild(r),
                await this.initializeShadowStyles(A(this, Ae));
            const a = await this.containerInstanceNumber;
            k(
                this,
                ne,
                'AcceleratedCheckoutAmazonPayButtonContainer'
                    .concat(this.pageType)
                    .concat(a)
            ),
                k(this, Y, document.createElement('div')),
                A(this, Y).classList.add(De.BUTTON),
                A(this, Y).appendChild(n),
                A(this, Ae).appendChild(A(this, Y)),
                (e = this.resizeObserver) == null || e.observe(A(this, Y)),
                await this.renderFromAmazonSDK();
        } catch (n) {
            b.notify(n);
        }
    }
    async renderFromAmazonSDK() {
        var e;
        try {
            k(this, Ge, !0);
            const n = Rt(A(this, Y)) || 0;
            k(
                this,
                _e,
                this.createContainer({ containerID: A(this, ne), height: n })
            ),
                this.appendChild(A(this, _e));
            const r = Dt(A(this, Y)) || 0,
                a = { buttonBorderRadius: ''.concat(r, 'px') };
            if (
                ((this.sdkButton = window.amazon.Pay.renderButton(
                    '#'.concat(A(this, ne)),
                    T(w({}, this.walletParams), {
                        style: a,
                        placement:
                            this.pageType === S.ProductPage
                                ? 'Product'
                                : 'Cart',
                    })
                )),
                this.sdkButton)
            ) {
                const i = this.sdkButton;
                this.sdkButton.onClick(() => this.handleClick(i));
            } else
                m.log({
                    body: 'Amazon Pay Button rendered null SDK button',
                    attributes: {
                        pageType: this.pageType,
                        containerID: A(this, ne),
                    },
                });
            k(this, mt, n),
                k(this, pt, r),
                m.renderSucceeded(this.name),
                (e = this.onRendered) == null || e.call(this);
        } catch (n) {
            m.renderFailed(this.name);
            const r =
                'Amazon Pay Button not able to render into container #'.concat(
                    A(this, ne),
                    '.'
                );
            console.error(r),
                m.log({
                    body: r,
                    attributes: {
                        pageType: this.pageType,
                        containerID: A(this, ne),
                        error: n == null ? void 0 : n.toString(),
                    },
                });
        } finally {
            k(this, Ge, !1);
        }
    }
    teardownAmazonButtonContainer() {
        var e;
        (e = A(this, _e)) == null || e.remove(), k(this, _e, null);
    }
};
(pt = new WeakMap()),
    (mt = new WeakMap()),
    (Ge = new WeakMap()),
    (Y = new WeakMap()),
    (ne = new WeakMap()),
    (_e = new WeakMap()),
    (Ae = new WeakMap()),
    d(
        Me,
        'CV2_CONFIG_REST_API_URL',
        ''.concat(window.location.origin, '/wallets/config/amazon_pay')
    ),
    d(Me, 'EXPECTED_ERRORS', [Gr, Tt, zr]);
let Lt = Me;
const Fe = class ru extends ye {
    static walletName() {
        return 'amazon_pay';
    }
    constructor(e) {
        super(e);
    }
    getWebComponentName() {
        return 'shopify-amazon-pay-button';
    }
    getInstrumentName() {
        return f.AmazonPay;
    }
    getWebComponentClass() {
        return Lt;
    }
    async loadWalletSDK() {
        await $a({ sdkUrl: ru.SDK_URL, maxRetries: ru.MAX_RETRIES });
    }
    getLoadEligibility(e) {
        return e.getRootNode() instanceof ShadowRoot
            ? {
                  eligible: !1,
                  reason: 'Cannot load Amazon Pay within Shadow DOM',
              }
            : { eligible: !0 };
    }
};
d(Fe, 'MAX_RETRIES', 3), d(Fe, 'SDK_URL', Sr);
let wr = Fe;
var cr = {
        Purple: { D0: '#4524DB', Primary: '#5433EB' },
        Grayscale: { White: '#FFFFFF' },
    },
    Uc = { s: 16 },
    Bc = class extends HTMLElement {
        static get observedAttributes() {
            return ['disabled'];
        }
        constructor() {
            super(), this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            this._updateButton();
        }
        attributeChangedCallback() {
            this._updateButton();
        }
        _updateButton() {
            var t;
            let e = this.shadowRoot;
            e &&
                ((e.innerHTML = Hc),
                this.hasAttribute('disabled') &&
                    ((t = this.shadowRoot.querySelector('button')) == null ||
                        t.setAttribute('disabled', '')));
        }
    };
function $c() {
    window.customElements &&
        (customElements.get('gravity-button') ||
            customElements.define('gravity-button', Bc));
}
var Hc =
    '\n<style>\n  * {\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n    border-color: currentColor;\n    --focused-box-shadow: 0 0 0 3px #DBD1FF, 0 0 #0000;\n  }\n\n  button {\n    text-transform: none;\n    -webkit-appearance: button;\n    background-color: transparent;\n    background-image: none;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    font-size: 100%;\n    font-weight: inherit;\n    line-height: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n\n  .gravity-button {\n    position: relative;\n    display: flex;\n    min-height: var(--gravity-button-min-height);\n    height: var(--gravity-button-height);\n    width: var(--gravity-button-width, 260px);\n    justify-content: center;\n    color: '
        .concat(
            cr.Grayscale.White,
            ';\n    align-items: center;\n    overflow: visible;\n    padding: var(--gravity-button-padding, '
        )
        .concat(
            Uc.s,
            'px 10px);\n    border-radius: var(--gravity-button-border-radius);\n    border: none;\n    background-color: '
        )
        .concat(
            cr.Purple.Primary,
            ';\n    transition: all;\n  }\n\n  .gravity-button:not([disabled]):focus-visible {\n    box-shadow: var(--focused-base-box-shadow, var(--focused-box-shadow));\n    outline: var(--focused-base-outline, 2px solid transparent);\n    outline-offset: var(--focused-base-outline-offset, 2px);\n  }\n\n  .gravity-button:not([disabled]):hover {\n    background-color: '
        )
        .concat(
            cr.Purple.D0,
            ';\n  }\n</style>\n\n<button class="gravity-button">\n  <slot id="button-content"></slot>\n</button>\n'
        );
const Gc =
        '.button-content{display:flex;align-items:center;justify-content:center;width:100%;height:100%;gap:3px;white-space:nowrap;container-type:inline-size;container-name:bc}.ShopPromise>.separator{margin:0 8px}@container bc (width <= 338px){.ShopPromise{display:none!important}}gravity-button{display:block}',
    zc =
        '.accelerated-checkout-button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow);min-width:150px}:host([page-type="cart_page"]) .accelerated-checkout-button{height:100%;width:100%;border-radius:var(--shopify-accelerated-checkout-button-border-radius, 4px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow)}@media (forced-colors: active){.accelerated-checkout-button{border:1px solid transparent!important}:host([page-type="cart_page"]) .accelerated-checkout-button{border:1px solid transparent!important}}.accelerated-checkout-button{--gravity-button-height: clamp(25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px);--gravity-button-min-height: clamp(25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px);--gravity-button-border-radius: var(--shopify-accelerated-checkout-button-border-radius, 0px);--gravity-button-padding: 0px 10px;--gravity-button-width: 100%}:host([page-type="cart_page"]) .accelerated-checkout-button{--gravity-button-height: 100%;--gravity-button-min-height: 100%;--gravity-button-border-radius: var(--shopify-accelerated-checkout-button-border-radius, 4px);--gravity-button-width: 100%}';
class Ha extends Error {
    constructor() {
        const e = 'DeliveryEstimatesResponseIsNullError';
        super('deliveryEstimates is null or undefined'), (this.name = e);
    }
}
class dr extends Error {
    constructor() {
        const e = 'DeliveryPromiseAPIClientError';
        super(
            'window.Shopify.ShopPromise.deliveryPromiseAPIClient is undefined'
        ),
            (this.name = e);
    }
}
const Vc = 15,
    qc = 200;
class Wc {
    constructor(e) {
        d(this, 'storefrontAPIToken'), (this.storefrontAPIToken = e);
    }
    async fetchDeliveryPromise({
        variant: e,
        postalCode: n,
        defaultPostalCode: r,
        sellingPlanId: a,
    }) {
        const i = await Ba({
            fn: async () => this.fetchDeliveryOptions(e, n, r, a),
            maxRetries: Vc,
            delay: qc,
            retryPolicyFn: o => o instanceof dr,
        }).catch(o => {
            if (o instanceof dr) throw o;
            return null;
        });
        if (!i) throw new Ha();
        return i;
    }
    async fetchDeliveryOptions(e, n, r, a) {
        var i, o;
        const s = {
                variantId: e,
                sellingPlanId: a,
                postalCode: n || r,
                isPostalCodeOverride: !!n,
            },
            l =
                (o =
                    (i = window == null ? void 0 : window.Shopify) == null
                        ? void 0
                        : i.ShopPromise) == null
                    ? void 0
                    : o.deliveryPromiseAPIClient;
        if (!l) throw new dr();
        return l(s, this.storefrontAPIToken);
    }
}
function jc(t, e) {
    switch (t) {
        case 0:
            return (
                (e == null
                    ? void 0
                    : e.translate('shop_promise_delivery.same_day')) || null
            );
        case 1:
            return (
                (e == null
                    ? void 0
                    : e.translate('shop_promise_delivery.next_day')) || null
            );
        case 2:
            return (
                (e == null
                    ? void 0
                    : e.translate('shop_promise_delivery.two_day')) || null
            );
        default:
            return null;
    }
}
const Yc = 'delivery_promise_default_address',
    Kc = 'delivery_promise_postal_code';
class Qc extends Yt {
    constructor() {
        super(...arguments),
            d(this, 'lastFetchedProductVariantId'),
            d(this, 'lastFetchSellingPlan'),
            d(this, 'fetching', !1),
            d(this, 'i18n', null),
            d(this, 'daysToDelivery'),
            d(this, 'formObserver', null);
    }
    async connectedCallback() {
        (this.formObserver = new Sa(
            this,
            ({ variantId: e, sellingPlanId: n }) => {
                this.fetchDeliveryPromise(e, n);
            }
        )),
            this.formObserver.setupMutationObservers();
    }
    setTranslations(e) {
        (this.i18n = e), this.render();
    }
    get postalCode() {
        try {
            return JSON.parse(ct(Kc) || 'null') || null;
        } catch (e) {
            return null;
        }
    }
    get defaultDeliveryAddress() {
        try {
            return JSON.parse(ct(Yc) || 'null');
        } catch (e) {
            return null;
        }
    }
    async fetchDeliveryPromise(e, n) {
        var r, a, i, o;
        if (
            !(!e || !this.accessToken) &&
            !(
                e === this.lastFetchedProductVariantId &&
                n === this.lastFetchSellingPlan
            )
        )
            try {
                (this.lastFetchedProductVariantId = e),
                    (this.lastFetchSellingPlan = n);
                const s =
                        ((r = this.defaultDeliveryAddress) == null
                            ? void 0
                            : r.zip) || '',
                    l = await new Wc(this.accessToken).fetchDeliveryPromise({
                        variant: e,
                        postalCode: this.postalCode || '',
                        defaultPostalCode: s,
                        sellingPlanId: n || '',
                    }),
                    u = Fr(this),
                    c =
                        (i =
                            (a =
                                l == null
                                    ? void 0
                                    : l.selectedShippingOption) == null
                                ? void 0
                                : a.brandedPromise) == null
                            ? void 0
                            : i.handle;
                if (
                    (u == null ? void 0 : u.sellingPlanId) !== n ||
                    (u == null ? void 0 : u.variantId) !== e ||
                    c !== 'shop_promise'
                )
                    return;
                (this.daysToDelivery =
                    (o = l == null ? void 0 : l.selectedShippingOption) == null
                        ? void 0
                        : o.maxCalendarDaysToDelivery),
                    this.render();
            } catch (s) {
                s instanceof Ha && (this.daysToDelivery = null);
            }
    }
    render() {
        const e = jc(this.daysToDelivery, this.i18n);
        this.classList.add('ShopPromise'),
            (this.innerHTML = e
                ? '<span class="separator">|</span><span>'.concat(e, '</span>')
                : '');
    }
}
var Ce;
class Xc extends Te {
    constructor() {
        super(),
            d(this, 'name', f.ShopPay),
            d(this, 'button', null),
            d(this, 'shopPromiseProductPageContent', null),
            d(this, 'shopPromiseEligible', !1),
            O(this, Ce),
            k(this, Ce, this.attachShadow({ mode: 'closed' }));
    }
    static get observedAttributes() {
        return ['disabled'];
    }
    connectedCallback() {
        (this.shopPromiseEligible = ya()),
            this.cleanupOnFailure(async () => {
                $c(), await this.render();
            }, this.name);
    }
    attributeChangedCallback(e, n, r) {
        super.attributeChangedCallback(e, n, r, this.button);
    }
    async addButtonContent() {
        if (!this.button) return;
        let e;
        const n = await this.i18n,
            r = new DOMParser().parseFromString(
                za.shopPayLogoElement,
                'image/svg+xml'
            ).documentElement;
        this.isCTA
            ? (e = Br({
                  translate: n.translate,
                  logoElement: r,
                  setAriaHidden: !1,
              }))
            : ((e = document.createElement('div')), e.appendChild(r)),
            e.classList.add('button-content'),
            this.shopPromiseEligible &&
                !this.shopPromiseProductPageContent &&
                ((this.shopPromiseProductPageContent = document.createElement(
                    'shop-promise-product-page-content'
                )),
                this.shopPromiseProductPageContent.setTranslations(n),
                this.shopPromiseProductPageContent.setAttribute(
                    'access-token',
                    this.accessToken || ''
                ),
                e.appendChild(this.shopPromiseProductPageContent)),
            this.button.appendChild(e);
    }
    getShopPayBehavior() {
        return this.pageType === S.ProductPage
            ? 'force_shop_pay_product'
            : this.pageType === S.CartPage
            ? 'force_shop_pay_cart'
            : 'force_shop_pay';
    }
    async handleClick(e) {
        var n, r;
        if (
            (e.preventDefault(),
            this.disabled ||
                !this.button ||
                this.button.getAttribute('disabled'))
        )
            return;
        this.disabled = !0;
        const [a, i] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                decelerationReason: o,
                cart: s,
                customValidationError: l,
                unrecoverableError: u,
            } = await me({
                element: this,
                instrumentName: f.ShopPay,
                dataSource: i,
            });
            if (u) {
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                    Ne(a, u);
                return;
            }
            if (
                (m.sheetClicked({ instrument: this.name, result: 'success' }),
                l)
            ) {
                Re(a, l.message);
                return;
            }
            if (o) {
                M({
                    checkoutUrl:
                        (n = s == null ? void 0 : s.checkoutUrl) != null
                            ? n
                            : '',
                    instrumentName: this.name,
                    reason: o,
                });
                return;
            }
            ue(
                (r = s == null ? void 0 : s.checkoutUrl) != null ? r : '',
                this.getShopPayBehavior()
            );
        } catch (o) {
            b.notify(
                new Jc(
                    'An error occurred when attempting to create a cart using the Shop Pay Button. Details: '.concat(
                        o
                    ),
                    { cause: o }
                )
            ),
                m.sheetClicked({ instrument: this.name, result: 'failed' }),
                ft(a);
        }
    }
    async render() {
        if (A(this, Ce).innerHTML) return;
        this.button || (this.button = document.createElement('gravity-button'));
        const e = document.createElement('style');
        (e.innerHTML = [zc, Gc].join('\n')),
            A(this, Ce).appendChild(e),
            await this.addButtonContent(),
            this.disabled && this.button.setAttribute('disabled', ''),
            this.button.classList.add(De.BUTTON),
            (this.button.onclick = n => this.handleClick(n)),
            A(this, Ce).appendChild(this.button),
            this.ensureLightDOMIsNotEmpty(),
            this.onRendered();
    }
}
(Ce = new WeakMap()), pe('shop-promise-product-page-content', Qc);
class Jc extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'ShopPayButtonError');
    }
}
var Zc = Object.defineProperty,
    ed = Object.getOwnPropertyDescriptor,
    td = (t, e, n, r) => {
        for (var a = ed(e, n), i = t.length - 1, o; i >= 0; i--)
            (o = t[i]) && (a = o(e, n, a) || a);
        return a && Zc(e, n, a), a;
    },
    Se;
const Ga =
    ((Se = class extends ye {
        static walletName() {
            return 'shop_pay';
        }
        constructor(t) {
            super(t);
        }
        getWebComponentName() {
            return 'shop-pay-wallet-button';
        }
        getWebComponentClass() {
            return Xc;
        }
        getInstrumentName() {
            return f.ShopPay;
        }
        async loadWalletSDK() {
            await this.loadLogo();
        }
        getLoadEligibility() {
            return { eligible: !0 };
        }
        async loadLogo() {
            Se.shopPayLogoElement = (
                await import('./shop-pay-logo-CYhOC7ye.js')
            ).default;
        }
    }),
    d(Se, 'shopPayLogoElement'),
    Se);
td([$r('Shop Pay')], Ga.prototype, 'getLoadEligibility');
let za = Ga;
const rd =
    '.button{display:flex;justify-content:center;align-items:center;width:100%;border:none}.button:hover:not(:disabled){filter:brightness(92%);cursor:pointer}.button:disabled{opacity:.5;cursor:not-allowed}.logo-only>svg{width:50px}.dark{background:#000;color:#fff}.light{background:#fff;color:#000;outline:1px solid #3c4043}@media (forced-colors: active){.light{outline:none}}.content{display:flex;justify-content:center;align-items:center;white-space:pre}';
function ur({ cart: t, i18n: e }) {
    const n = La(t),
        r = {
            label: e.translate('order_summary.subtotal'),
            type: 'SUBTOTAL',
            price: Ie(n.amount),
        },
        a = Ta({ deliveryGroups: t.deliveryGroups, i18n: e }).map(s =>
            nd({ lineItem: s, type: 'LINE_ITEM' })
        ),
        i = ad(t, e),
        o = [r, ...a, ...i];
    if (t.totalDutyAmount) {
        const s = {
            label: e.translate('order_summary.duties'),
            type: 'LINE_ITEM',
            price: Ie(t.totalDutyAmount.amount),
        };
        o.push(s);
    }
    if (t.totalTaxAmount) {
        const s = {
            label: e.translate('order_summary.taxes'),
            type: 'TAX',
            price: Ie(t.totalTaxAmount.amount),
        };
        o.push(s);
    }
    return {
        totalPrice: t.totalAmount.amount,
        currencyCode: t.totalAmount.currencyCode,
        totalPriceStatus: 'ESTIMATED',
        totalPriceLabel: e.translate('order_summary.total'),
        displayItems: o,
    };
}
function nd({ lineItem: t, type: e, status: n = 'FINAL' }) {
    return { label: t.label, type: e, price: t.amount, status: n };
}
function ad(t, e) {
    return [
        ...t.lineItems.flatMap(n => n.discountAllocations),
        ...t.discountAllocations,
    ].flatMap(n => {
        var r;
        const a = (r = n.title) != null ? r : n.code;
        return {
            label: a != null ? a : e.translate('order_summary.discount'),
            type: 'LINE_ITEM',
            price: '-'.concat(Ie(Number(n.discountedAmount.amount))),
        };
    });
}
const Va = ['PAYMENT_AUTHORIZATION'],
    id = Va.concat(['SHIPPING_ADDRESS', 'SHIPPING_OPTION']),
    od = ['PAN_ONLY'];
function sd({
    walletParams: t,
    isShippingRequired: e,
    hasSellingPlan: n,
    i18n: r,
    buyerCurrency: a,
    authJwt: i,
}) {
    const o = {
            totalPrice: '0.01',
            currencyCode: a,
            totalPriceStatus: 'ESTIMATED',
            totalPriceLabel: r.translate('order_summary.total'),
            displayItems: [
                {
                    label: r.translate('order_summary.subtotal'),
                    type: 'SUBTOTAL',
                    price: '0.01',
                },
            ],
        },
        s = T(w({}, t.paymentData), {
            shippingAddressRequired: e,
            shippingOptionRequired: e,
            transactionInfo: o,
        });
    return (
        (s.merchantInfo.authJwt = i),
        e || delete s.shippingAddressParameters,
        (s.callbackIntents = e ? id : Va),
        n && ld(s),
        s
    );
}
function ld(t) {
    t.allowedPaymentMethods.forEach(e => {
        e.parameters.allowedAuthMethods =
            e.parameters.allowedAuthMethods.filter(n => od.includes(n));
    });
}
class cd extends ka {
    constructor(e) {
        super(),
            d(this, 'brandName'),
            d(this, 'completionResult'),
            (this.i18n = e),
            (this.brandName = this.i18n.translate('brand.google_pay')),
            (this.completionResult = void 0);
    }
    mapMutationResultToPaymentSheetAction(e) {
        const n = this.mapCustomValidationFunctionErrorToAction(e.errors);
        if (n) return n;
        const r = this.getErrorActions(),
            a = e.errors,
            i = this.getUnhandledErrors(a, r);
        i.forEach(s => {
            b.notify(
                new Nt(
                    '['
                        .concat(
                            f.GooglePay,
                            '] mutation result error not handled: '
                        )
                        .concat(s)
                )
            );
        });
        const { firstPaymentSheetAction: o } = this.getMergedPaymentSheetAction(
            { result: e, errorActions: r }
        );
        return (
            o ||
            (i.length > 0
                ? { action: 'abort' }
                : { action: 'update', errors: [] })
        );
    }
    mapCompletionResultToPaymentSheetAction(e) {
        if (!e.data)
            throw new Error(
                '['.concat(f.GooglePay, '] completion returned null result')
            );
        switch (((this.completionResult = e), e.data.__typename)) {
            case 'SubmitSuccess':
                return { action: 'complete', redirectUrl: e.data.redirectUrl };
            case 'SubmitAlreadyAccepted':
            case 'SubmitThrottled':
            case 'SubmitFailed': {
                const n = this.mapCustomValidationFunctionErrorToAction(
                    e.errors
                );
                if (n) return n;
                const r = this.getErrorActions(),
                    a = e.errors;
                this.getUnhandledErrors(a, r).forEach(o => {
                    b.notify(
                        new Error(
                            '['
                                .concat(
                                    f.GooglePay,
                                    '] completion result error not handled: '
                                )
                                .concat(o)
                        )
                    );
                });
                const { prioritizedPaymentSheetAction: i } =
                    this.getMergedPaymentSheetAction({
                        result: e,
                        errorActions: r,
                    });
                return i || (Q(this.brandName, this.i18n), { action: 'abort' });
            }
            default:
                throw new Error(
                    '['
                        .concat(
                            f.GooglePay,
                            '] unknown completion result type: '
                        )
                        .concat(e.data.__typename)
                );
        }
    }
    getErrorActions() {
        return [
            {
                errors: [g.CaptchaCompletionRequired],
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'captcha_required',
                        instrumentName: f.GooglePay,
                        errorOrWarning: g.CaptchaCompletionRequired,
                        result: this.completionResult,
                    }),
            },
            {
                errors: [g.InvalidLanguage],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => {
                            b.notify(
                                new Error(
                                    '['.concat(
                                        f.GooglePay,
                                        '] mutation provided invalid language, aborting'
                                    )
                                )
                            );
                        },
                        () => Q(this.brandName, this.i18n),
                    ],
                }),
            },
            {
                errors: [g.InvalidCountry],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => {
                            b.notify(
                                new Error(
                                    '['.concat(
                                        f.GooglePay,
                                        '] mutation provided invalid country, aborting'
                                    )
                                )
                            );
                        },
                        () => Q(this.brandName, this.i18n),
                    ],
                }),
            },
            {
                errors: [g.MissingCartId],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => {
                            b.notify(
                                new Error(
                                    '['.concat(
                                        f.GooglePay,
                                        '] mutation provided invalid cart ID, aborting'
                                    )
                                )
                            );
                        },
                        () => Q(this.brandName, this.i18n),
                    ],
                }),
            },
            {
                errors: vr,
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'dynamic_tax',
                        instrumentName: f.GooglePay,
                        errorOrWarning: g.NewTaxMustBeAccepted,
                        result: this.completionResult,
                    }),
            },
            {
                errors: [
                    g.MerchandiseExpectedPriceMismatch,
                    g.DeliveryLineChanged,
                    g.DeliveryLocalPickupLineChanged,
                    ...ca,
                ],
                generateAction: () => ({
                    action: 'abort',
                    effects: [() => Q(this.brandName, this.i18n)],
                }),
            },
            {
                errors: [g.UnsupportedGooglePayPaymentMethod],
                generateAction: () => ({
                    action: 'abort',
                    effects: [
                        () => Q(this.brandName, this.i18n),
                        () => {
                            b.notify(
                                new Nt(
                                    '['.concat(
                                        f.GooglePay,
                                        '] payment method is not supported'
                                    )
                                )
                            );
                        },
                    ],
                }),
            },
            {
                errors: [g.MerchandiseNotEnoughStock],
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'not_enough_stock',
                        instrumentName: f.GooglePay,
                        errorOrWarning: g.MerchandiseNotEnoughStock,
                        result: this.completionResult,
                    }),
            },
            {
                errors: da,
                generateAction: () =>
                    this.decelerateOrAbort({
                        reason: 'out_of_stock',
                        instrumentName: f.GooglePay,
                        errorOrWarning: g.MerchandiseOutOfStock,
                        result: this.completionResult,
                    }),
            },
            {
                errors: la,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_UNSERVICEABLE',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.shipping_address'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: sa,
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.postal_code'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.NoDeliveryGroupSelected],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_OPTION_INVALID',
                            intent: 'SHIPPING_OPTION',
                            message: this.i18n.translate(
                                'errors.missing.shipping_option'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [
                    g.BuyerIdentityEmailDomainInvalid,
                    g.BuyerIdentityEmailNotExpectedPattern,
                    g.BuyerIdentityEmailInvalid,
                ],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'OTHER_ERROR',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.email'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.BuyerIdentityEmailRequired],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.missing.email'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [
                    g.DeliveryAddress2Required,
                    g.DeliveryAddress2AddressFieldRequired,
                ],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.missing.address2'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2Invalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.address2'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [
                    g.DeliveryCityAddressFieldRequired,
                    g.DeliveryCityRequired,
                ],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate('errors.missing.city'),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityInvalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate('errors.invalid.city'),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryZoneRequiredForCountry],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate('errors.missing.zone'),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryZoneNotFound],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate('errors.invalid.zone'),
                        },
                    ],
                }),
            },
            {
                errors: [
                    g.DeliveryPostalCodeRequired,
                    g.DeliveryPostalCodeAddressFieldRequired,
                ],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.missing.postal_code'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [
                    g.DeliveryPostalCodeInvalid,
                    g.DeliveryInvalidPostalCodeForZone,
                    g.DeliveryInvalidPostalCodeForCountry,
                    g.DeliveryZipInvalidForCountry,
                ],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.postal_code'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryPhoneNumberRequired],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'OTHER_ERROR',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.missing.phone_number'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [
                    g.DeliveryPhoneNumberInvalid,
                    g.BuyerIdentityInvalidPhone,
                    g.DeliveryPhoneDoesNotMatchExpectedPattern,
                ],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'OTHER_ERROR',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.phone_number'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [
                    g.BuyerIdentityInvalidCountry,
                    g.DeliveryCountryInvalid,
                ],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.country'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameRequired],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.missing.first_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameInvalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.first_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameRequired],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.missing.last_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameInvalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.last_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1Required],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.missing.address1'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1Invalid],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.invalid.address1'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.emojis.last_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate('errors.emojis.city'),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1ContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.emojis.address1'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2ContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.emojis.address2'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryPostalCodeContainsEmojis],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.emojis.postal_code'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1TooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.too_long.address1'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2TooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.too_long.address2'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameTooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.too_long.first_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameTooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.too_long.last_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityTooLong],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.too_long.city'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameContainsUrl],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.url.first_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameContainsUrl],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.url.last_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress1ContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.html_tags.address1'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryAddress2ContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.html_tags.address2'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryCityContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.html_tags.city'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryFirstNameContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.html_tags.first_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.DeliveryLastNameContainsHtmlTags],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'SHIPPING_ADDRESS',
                            message: this.i18n.translate(
                                'errors.html_tags.last_name'
                            ),
                        },
                    ],
                }),
            },
            {
                errors: [g.InvalidPaymentGooglePayBillingAddress],
                generateAction: () => ({
                    action: 'show_error',
                    errors: [
                        {
                            reason: 'PAYMENT_DATA_INVALID',
                            intent: 'PAYMENT_METHOD',
                            message: this.i18n.translate(
                                'errors.invalid.billing_address'
                            ),
                        },
                    ],
                }),
            },
        ];
    }
    mapCustomValidationFunctionErrorToAction(e) {
        const n = Tr(e);
        return n
            ? (b.notify(
                  new Error(
                      '['
                          .concat(
                              f.GooglePay,
                              '] custom validation function error: '
                          )
                          .concat(JSON.stringify(e))
                  )
              ),
              Lr(
                  this.i18n.translate('error_dialogs.wallet.title', {
                      wallet: this.brandName,
                  }),
                  n.message
              ),
              { action: 'abort' })
            : null;
    }
}
function dd({ deliveryGroups: t, i18n: e }) {
    var n;
    const r = yc(Ra({ deliveryGroups: t }), e),
        a = r.map(({ handle: o, title: s, description: l }) => ({
            id: o,
            label: s != null ? s : '',
            description: l,
        })),
        i =
            (n = r.find(o => {
                var s;
                return o.handle.includes(
                    ((s = t[0].selectedDeliveryOption) == null
                        ? void 0
                        : s.handle) || ''
                );
            })) == null
                ? void 0
                : n.handle;
    return { shippingOptions: a, defaultSelectedOptionId: i };
}
function hr(t) {
    let e = t.administrativeArea,
        n = t.locality;
    t.countryCode === 'AE' &&
        ((n = t.administrativeArea),
        t.administrativeArea in En && (e = En[t.administrativeArea])),
        t.countryCode === 'MX' && e && (e = ud(e));
    let r, a;
    if (t.name) {
        const [i, ...o] = (t.name || '').split(' ');
        o.length === 0 ? (a = i) : (a = o.join(' ')), (r = i);
    }
    return {
        firstName: r,
        lastName: a,
        address1: t.address1,
        address2: t.address2,
        city: n,
        province: e,
        country: t.countryCode,
        phone: t.phoneNumber,
        zip: t.postalCode,
    };
}
const En = {
        '\u0623\u0628\u0648 \u0638\u0628\u064A': 'AZ',
        '\u0625\u0645\u0627\u0631\u0629 \u0627\u0644\u0634\u0627\u0631\u0642\u0629\u0651':
            'SH',
        الفجيرة: 'FU',
        عجمان: 'AJ',
        '\u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629': 'RK',
        '\u0625\u0645\u0627\u0631\u0629 \u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629':
            'RK',
        '\u0623\u0645 \u0627\u0644\u0642\u064A\u0648\u064A\u0646': 'UQ',
        '\u0627\u0645 \u0627\u0644\u0642\u064A\u0648\u064A\u0646': 'UQ',
        دبي: 'DU',
        '\u0625\u0645\u0627\u0631\u0629 \u062F\u0628\u064A\u0651': 'DU',
    },
    ud = t =>
        t === 'M\xE9x.'
            ? 'MEX'
            : t === 'Q.R.'
            ? 'Q ROO'
            : t.replace(/\./g, '').toUpperCase();
class pr extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'GooglePayError');
    }
}
function qa(t) {
    const e = t.auth;
    if (!(Array.isArray(e) && e.length > 0))
        return { result: 'error', reason: 'invalidAuthParams' };
    const n = nt();
    for (const r of e)
        if (n < r.expiresAt * 1e3) return { result: 'success', jwt: r.jwt };
    return { result: 'error', reason: 'authJwtExpired' };
}
const hd = 27e3,
    pd = 'Google Pay Timeout';
var yt, ae, ze;
class md {
    constructor({
        walletParams: e,
        isShippingRequired: n,
        hasSellingPlan: r,
        dataSource: a,
        button: i,
        i18n: o,
        cartClient: s,
        buyerCurrency: l,
        abortController: u,
    }) {
        d(this, 'name', f.GooglePay),
            d(this, 'walletParams'),
            d(this, 'cart', null),
            d(this, 'isShippingRequired'),
            d(this, 'hasSellingPlan'),
            d(this, 'dataSource'),
            d(this, 'button'),
            d(this, 'paymentsClient'),
            d(this, 'i18n'),
            d(this, 'actionGenerator'),
            d(this, 'cartClient'),
            d(this, 'initialBuyerCurrency'),
            d(this, 'terminalCartCreationError'),
            O(this, yt),
            O(this, ae),
            O(this, ze),
            d(this, 'onPaymentDataChanged', async p => {
                var y, _;
                const {
                        callbackTrigger: C,
                        shippingAddress: E,
                        shippingOptionData: P,
                    } = p,
                    { translate: $ } = this.i18n;
                switch (C) {
                    case 'INITIALIZE': {
                        if (!this.cart)
                            try {
                                const {
                                    cart: Ke,
                                    customValidationError: N,
                                    decelerationReason: G,
                                    unrecoverableError: L,
                                } = await me({
                                    element: this.button,
                                    instrumentName: f.GooglePay,
                                    dataSource: this.dataSource,
                                });
                                if (N || L)
                                    return (
                                        (this.terminalCartCreationError = N
                                            ? N.message
                                            : yd(this.i18n, L)),
                                        this.showPaymentDataRequestError({
                                            error: {
                                                reason: 'OTHER_ERROR',
                                                message:
                                                    this
                                                        .terminalCartCreationError,
                                                intent: 'SHIPPING_ADDRESS',
                                            },
                                        })
                                    );
                                if (G)
                                    return (
                                        M({
                                            checkoutUrl:
                                                (y =
                                                    Ke == null
                                                        ? void 0
                                                        : Ke.checkoutUrl) !=
                                                null
                                                    ? y
                                                    : '',
                                            instrumentName: this.name,
                                            reason: G,
                                        }),
                                        this.showPaymentDataRequestError({
                                            error: {
                                                intent: 'SHIPPING_ADDRESS',
                                                reason: 'OTHER_ERROR',
                                                message: '',
                                            },
                                        })
                                    );
                                (this.cart = Ke),
                                    m.sheetClicked({
                                        instrument: this.name,
                                        result: 'success',
                                    });
                            } catch (Ke) {
                                return (
                                    m.sheetClicked({
                                        instrument: this.name,
                                        result: 'failed',
                                    }),
                                    this.showPaymentDataRequestError({
                                        intent: 'SHIPPING_ADDRESS',
                                    })
                                );
                            }
                        let B = !1;
                        if (E)
                            try {
                                return await this.handleShippingAddressChange(
                                    this.cart.id,
                                    E
                                );
                            } catch (Ke) {
                                B = !0;
                            }
                        return w(
                            {
                                newTransactionInfo: ur({
                                    cart: this.cart,
                                    i18n: this.i18n,
                                }),
                            },
                            B ? this.showPaymentDataRequestError() : {}
                        );
                    }
                    case 'SHIPPING_ADDRESS':
                        return this.terminalCartCreationError
                            ? this.showPaymentDataRequestError({
                                  error: {
                                      reason: 'OTHER_ERROR',
                                      message: this.terminalCartCreationError,
                                      intent: 'SHIPPING_ADDRESS',
                                  },
                              })
                            : this.cart
                            ? E
                                ? this.handleShippingAddressChange(
                                      this.cart.id,
                                      E
                                  )
                                : {
                                      newTransactionInfo: ur({
                                          cart: this.cart,
                                          i18n: this.i18n,
                                      }),
                                  }
                            : this.showPaymentDataRequestError({ intent: C });
                    case 'SHIPPING_OPTION': {
                        if (!this.cart)
                            return this.showPaymentDataRequestError({
                                intent: C,
                            });
                        if (!P || !P.id)
                            return {
                                error: {
                                    reason: 'SHIPPING_OPTION_INVALID',
                                    message: $(
                                        'shipping_methods.choose_delivery_strategy'
                                    ),
                                    intent: 'SHIPPING_OPTION',
                                },
                            };
                        const B = await this.handleDeliveryOptionChange(
                            P.id.split(',')
                        );
                        return B.data
                            ? ((this.cart = B.data),
                              B.decelerationReason
                                  ? (M({
                                        checkoutUrl:
                                            (_ = this.cart.checkoutUrl) != null
                                                ? _
                                                : '',
                                        instrumentName: this.name,
                                        reason: B.decelerationReason,
                                    }),
                                    this.showPaymentDataRequestError({
                                        error: {
                                            intent: 'SHIPPING_OPTION',
                                            reason: 'OTHER_ERROR',
                                            message: '',
                                        },
                                    }))
                                  : this.handlePaymentDataRequestUpdate({
                                        result: B,
                                        intent: C,
                                    }))
                            : this.showPaymentDataRequestError({ intent: C });
                    }
                    default:
                        return (
                            this.logException(
                                'Payment data changed callback returned unexpected intent: '.concat(
                                    C
                                ),
                                { severity: 'warning' }
                            ),
                            this.showPaymentDataRequestError({
                                intent: 'SHIPPING_ADDRESS',
                            })
                        );
                }
            }),
            d(this, 'onPaymentAuthorized', async p => {
                var y, _, C;
                m.authorizationAttempt(this.name),
                    Ye(F.AuthorizationLatency, this.name);
                const E =
                        (y = p.paymentMethodData.info) == null
                            ? void 0
                            : y.billingAddress,
                    P = p.shippingAddress,
                    {
                        signature: $,
                        signedMessage: B,
                        protocolVersion: Ke,
                    } = JSON.parse(p.paymentMethodData.tokenizationData.token);
                if (!E)
                    return this.handlePaymentAuthorizationError({
                        error: {
                            reason: 'PAYMENT_DATA_INVALID',
                            intent: 'PAYMENT_AUTHORIZATION',
                            message: this.i18n.translate(
                                'errors.invalid.billing_address'
                            ),
                        },
                    });
                if (this.isShippingRequired && !P)
                    return this.handlePaymentAuthorizationError({
                        error: {
                            reason: 'SHIPPING_ADDRESS_INVALID',
                            intent: 'PAYMENT_AUTHORIZATION',
                            message: this.i18n.translate(
                                'errors.invalid.shipping_address'
                            ),
                        },
                    });
                const N = async () => {
                        var L, x;
                        const ie = (L = A(this, yt)) != null ? L : p.email,
                            bt = this.isShippingRequired
                                ? { validateAddress: !0, streetAddress: hr(P) }
                                : {};
                        return await Ue(
                            w(
                                {
                                    cartClient: this.cartClient,
                                    cartId: this.cart.id,
                                    instrumentName: this.name,
                                    emailAddress: ie,
                                    abortSignal:
                                        (x = A(this, ae)) == null
                                            ? void 0
                                            : x.signal,
                                },
                                bt
                            )
                        );
                    },
                    G = async () => {
                        var L;
                        const x = hr(E);
                        return await Ur({
                            cartId: this.cart.id,
                            totalAmount: this.cart.totalAmount,
                            paymentMethod: {
                                walletPaymentMethod: {
                                    googlePayWalletContent: {
                                        billingAddress: x,
                                        signature: $,
                                        signedMessage: B,
                                        protocolVersion: Ke,
                                    },
                                },
                            },
                            canUsePaymentMethodForFreeOrder: !1,
                            billingAddress: x,
                            cartClient: this.cartClient,
                            instrumentName: this.name,
                            hasSellingPlan: this.hasSellingPlan,
                            abortSignal:
                                (L = A(this, ae)) == null ? void 0 : L.signal,
                        });
                    };
                try {
                    const L = setTimeout(() => {
                            var ou;
                            (ou = A(this, ae)) == null ||
                                ou.abort('[Google Pay] Timeout');
                        }, hd),
                        x = await N(),
                        ie =
                            this.handleIntermediatePaymentAuthorizationResult(
                                x
                            );
                    if (ie) return ie;
                    const bt = await G(),
                        au =
                            this.handleIntermediatePaymentAuthorizationResult(
                                bt
                            );
                    if (au) return au;
                    if (
                        (clearTimeout(L),
                        (C = (_ = A(this, ae)) == null ? void 0 : _.signal) !=
                            null && C.aborted)
                    )
                        throw new pr('Abort Controller was not aborted');
                    const iu = await xa({
                        cartId: this.cart.id,
                        token: $,
                        cartClient: this.cartClient,
                        instrumentName: this.name,
                    });
                    st({ result: iu, instrument: this.name });
                    const du =
                        this.actionGenerator.mapCompletionResultToPaymentSheetAction(
                            iu
                        );
                    return this.handlePaymentAuthorizationResult(du);
                } catch (L) {
                    const { message: x } = L;
                    return x != null && x.includes(pd)
                        ? this.handlePaymentAuthorizationError({
                              status: 'timeout',
                          })
                        : (this.logException(x),
                          this.handlePaymentAuthorizationError());
                }
            }),
            d(this, 'handlePaymentAuthorizationResult', async p => {
                var y, _;
                switch (
                    ((y = p.effects) == null || y.forEach(C => C()), p.action)
                ) {
                    case 'complete':
                        return (
                            this.emitAuthorizationCompleteMetric('success'),
                            ue(p.redirectUrl),
                            { transactionState: 'SUCCESS' }
                        );
                    case 'show_error':
                        return this.handlePaymentAuthorizationError({
                            error: (_ = p.errors) == null ? void 0 : _[0],
                        });
                    case 'decelerate':
                        return (
                            M({
                                checkoutUrl: p.redirectUrl,
                                instrumentName: this.name,
                                reason: p.reason,
                            }),
                            this.emitAuthorizationCompleteMetric('failed'),
                            { transactionState: 'SUCCESS' }
                        );
                    case 'abort':
                    default:
                        return (
                            this.emitAuthorizationCompleteMetric('failed'),
                            { transactionState: 'SUCCESS' }
                        );
                }
            }),
            (this.walletParams = e),
            (this.isShippingRequired = n),
            (this.hasSellingPlan = r),
            (this.dataSource = a),
            (this.button = i),
            (this.i18n = o),
            (this.cartClient = s),
            (this.initialBuyerCurrency = l),
            k(this, yt, e.customerAccountEmail),
            k(this, ae, u);
        const c = qa(this.walletParams);
        if (c.result === 'error')
            throw (
                (b.leaveBreadcrumb(
                    'Google Pay Invalid AuthJwt detected on click',
                    { reason: c.reason, walletParams: this.walletParams },
                    'error'
                ),
                new pr(c.reason))
            );
        k(this, ze, c.jwt);
        const h = {
            environment: this.walletParams.environment,
            merchantInfo: T(w({}, this.walletParams.paymentData.merchantInfo), {
                authJwt: A(this, ze),
            }),
            paymentDataCallbacks: {
                onPaymentDataChanged: this.isShippingRequired
                    ? this.onPaymentDataChanged
                    : void 0,
                onPaymentAuthorized: this.onPaymentAuthorized,
            },
        };
        (this.paymentsClient = new window.google.payments.api.PaymentsClient(
            h
        )),
            (this.actionGenerator = new cd(this.i18n));
    }
    async handleClick() {
        if (!this.isShippingRequired)
            throw new Ft('Google Pay checkout started for digital cart');
        const e = sd({
            walletParams: this.walletParams,
            isShippingRequired: this.isShippingRequired,
            hasSellingPlan: this.hasSellingPlan,
            i18n: this.i18n,
            buyerCurrency: this.initialBuyerCurrency,
            authJwt: A(this, ze),
        });
        await this.paymentsClient.loadPaymentData(e);
    }
    showPaymentDataRequestError({
        error: e,
        intent: n = 'SHIPPING_ADDRESS',
    } = {}) {
        return e
            ? { error: e }
            : {
                  error: {
                      intent: n,
                      reason: 'OTHER_ERROR',
                      message: this.i18n.translate(
                          'error_dialogs.wallet.generic_error',
                          { wallet: this.i18n.translate('brand.google_pay') }
                      ),
                  },
              };
    }
    handlePaymentAuthorizationError({ error: e, status: n = 'failed' } = {}) {
        return (
            this.emitAuthorizationCompleteMetric(n),
            w(
                { transactionState: 'ERROR' },
                this.showPaymentDataRequestError({
                    error: e,
                    intent: 'PAYMENT_AUTHORIZATION',
                })
            )
        );
    }
    handlePaymentDataRequestUpdate({ result: e, intent: n }) {
        var r, a;
        const i = this.actionGenerator.mapMutationResultToPaymentSheetAction(e);
        switch (i.action) {
            case 'update': {
                const o = i,
                    { data: s, decelerationReason: l } = e;
                return s
                    ? l
                        ? (M({
                              checkoutUrl: s.checkoutUrl,
                              instrumentName: this.name,
                              reason: l,
                          }),
                          this.showPaymentDataRequestError({
                              error: {
                                  reason: 'OTHER_ERROR',
                                  message: '',
                                  intent: 'OFFER',
                              },
                          }))
                        : this.isShippingRequired &&
                          s.deliveryGroups.length === 0
                        ? this.showPaymentDataRequestError({
                              error: {
                                  reason: 'SHIPPING_ADDRESS_INVALID',
                                  message: this.i18n.translate(
                                      'errors.address_unserviceable',
                                      {
                                          shopName:
                                              this.walletParams.paymentData
                                                  .merchantInfo.merchantName,
                                      }
                                  ),
                                  intent: 'SHIPPING_ADDRESS',
                              },
                          })
                        : {
                              newTransactionInfo: ur({
                                  cart: s,
                                  i18n: this.i18n,
                              }),
                              newShippingOptionParameters: this
                                  .isShippingRequired
                                  ? dd({
                                        deliveryGroups: s.deliveryGroups,
                                        i18n: this.i18n,
                                    })
                                  : void 0,
                              error: (r = o.errors) == null ? void 0 : r[0],
                          }
                    : this.showPaymentDataRequestError({ intent: n });
            }
            case 'show_error':
                return { error: (a = i.errors) == null ? void 0 : a[0] };
            case 'abort':
                return this.showPaymentDataRequestError({ intent: n });
            default:
                return (
                    this.logException(
                        'Payment sheet update returned unexpected action (see request tab for details)',
                        {
                            metadata: {
                                request: { action: i.action, intent: n },
                            },
                        }
                    ),
                    this.showPaymentDataRequestError({ intent: n })
                );
        }
    }
    handleIntermediatePaymentAuthorizationResult(e) {
        var n, r, a, i;
        if ((st({ result: e, instrument: this.name }), e.decelerationReason))
            return (
                M({
                    checkoutUrl:
                        (r = (n = e.data) == null ? void 0 : n.checkoutUrl) !=
                        null
                            ? r
                            : '',
                    instrumentName: this.name,
                    reason: e.decelerationReason,
                }),
                { transactionState: 'SUCCESS' }
            );
        const o = this.actionGenerator.mapMutationResultToPaymentSheetAction(e);
        if (((a = e.errors) == null ? void 0 : a.length) > 0) {
            const s = o;
            if (s.action === 'show_error')
                return this.handlePaymentAuthorizationError({
                    error: (i = s.errors) == null ? void 0 : i[0],
                });
        }
    }
    handleCurrencyChange(e, n) {
        kr({
            currentCartTotal: n,
            initialBuyerCurrency: this.initialBuyerCurrency,
        }) &&
            M({
                checkoutUrl: e,
                instrumentName: this.name,
                reason: 'currency_changed',
            });
    }
    async handleShippingAddressChange(e, n) {
        var r, a;
        let i = await Ue({
            cartClient: this.cartClient,
            cartId: e,
            streetAddress: n ? hr(n) : {},
            instrumentName: f.GooglePay,
            abortSignal: (r = A(this, ae)) == null ? void 0 : r.signal,
        });
        if (!i.data)
            return this.showPaymentDataRequestError({
                intent: 'SHIPPING_ADDRESS',
            });
        if (((this.cart = i.data), i.decelerationReason))
            return (
                M({
                    checkoutUrl: (a = this.cart.checkoutUrl) != null ? a : '',
                    instrumentName: this.name,
                    reason: i.decelerationReason,
                }),
                this.showPaymentDataRequestError({
                    error: {
                        intent: 'SHIPPING_ADDRESS',
                        reason: 'OTHER_ERROR',
                        message: '',
                    },
                })
            );
        const o =
            this.cart.deliveryGroups.length > 0 &&
            (this.cart.deliveryGroups.some(l => {
                var u;
                return (
                    ((u = l.selectedDeliveryOption) == null
                        ? void 0
                        : u.deliveryMethodType) === 'LOCAL'
                );
            }) ||
                this.cart.deliveryGroups.every(
                    l => l.selectedDeliveryOption == null
                ));
        let s = [];
        if (
            (o
                ? (s = this.cart.deliveryGroups
                      .map(l =>
                          l.deliveryOptions.filter(
                              ({ deliveryMethodType: u }) => u === 'SHIPPING'
                          )
                      )
                      .map(l => {
                          var u;
                          return (u = l[0]) == null ? void 0 : u.handle;
                      })
                      .filter(Boolean))
                : (s = this.cart.deliveryGroups
                      .map(
                          ({
                              selectedDeliveryOption: l,
                              deliveryOptions: u,
                          }) => {
                              var c;
                              return l != null && l.handle
                                  ? l.handle
                                  : (c = u.filter(
                                        ({ deliveryMethodType: h }) =>
                                            h === 'SHIPPING'
                                    )[0]) == null
                                  ? void 0
                                  : c.handle;
                          }
                      )
                      .filter(Boolean)),
            s.length > 0)
        ) {
            if (((i = await this.handleDeliveryOptionChange(s)), !i.data))
                return this.showPaymentDataRequestError({
                    intent: 'SHIPPING_ADDRESS',
                });
            this.cart = i.data;
        }
        return (
            this.handleCurrencyChange(
                this.cart.checkoutUrl,
                this.cart.totalAmount
            ),
            this.handlePaymentDataRequestUpdate({
                result: i,
                intent: 'SHIPPING_ADDRESS',
            })
        );
    }
    async handleDeliveryOptionChange(e) {
        var n;
        const r = Ma({
            deliveryGroups: this.cart.deliveryGroups,
            instrumentName: f.GooglePay,
            selectedDeliveryOptionHandles: e,
        });
        return await Oa({
            cartClient: this.cartClient,
            cartId: this.cart.id,
            instrumentName: f.GooglePay,
            selectedDeliveryOptions: r,
            abortSignal: (n = A(this, ae)) == null ? void 0 : n.signal,
        });
    }
    logException(e, { severity: n, metadata: r } = {}) {
        b.notify(new pr(e), { severity: n != null ? n : 'error', metadata: r });
    }
    emitAuthorizationCompleteMetric(e) {
        m.authorizationComplete({
            instrument: this.name,
            measurement: Z(F.AuthorizationLatency, this.name),
            result: e,
        });
    }
}
(yt = new WeakMap()), (ae = new WeakMap()), (ze = new WeakMap());
function yd(t, e) {
    switch (e) {
        case $t.InvalidQuantity:
            return t.translate('error_dialogs.checkout.generic_error');
    }
}
const gd = { LIGHT: 'light', DARK: 'dark' };
var Ve;
class fd extends Te {
    constructor() {
        super(),
            d(this, 'name', f.GooglePay),
            d(this, 'paymentsClient', null),
            d(this, 'button', null),
            O(this, Ve),
            d(this, 'handleClick', async () => {
                if (this.disabled) return;
                this.disabled = !0;
                const e = We('AbortController');
                try {
                    await this.createPaymentsClient(e),
                        await this.paymentsClient.handleClick();
                } catch (n) {
                    if (((this.disabled = !1), n.statusCode === 'CANCELED')) {
                        e == null ||
                            e.abort('[Google Pay] Payment sheet cancelled'),
                            m.sheetCancelled(f.GooglePay);
                        return;
                    }
                    e == null || e.abort('[Google Pay] Payment sheet failure'),
                        b.notify(n),
                        m.sheetClicked({
                            instrument: this.name,
                            result: 'failed',
                        });
                    const r = await this.i18n,
                        a = r.translate('brand.google_pay');
                    Q(a, r);
                }
            }),
            k(this, Ve, this.attachShadow({ mode: 'closed' }));
    }
    static get observedAttributes() {
        return ['disabled'];
    }
    attributeChangedCallback(e, n, r) {
        super.attributeChangedCallback(e, n, r, this.button);
    }
    async connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name);
    }
    async createPaymentsClient(e) {
        this.paymentsClient = new md({
            walletParams: this.walletParams,
            isShippingRequired: this.isShippingRequired,
            hasSellingPlan: this.hasSellingPlan,
            dataSource: await this.dataSource,
            button: this,
            cartClient: await this.apiClient,
            i18n: await this.i18n,
            buyerCurrency: this.buyerCurrency,
            abortController: e,
        });
    }
    async render() {
        if (this.button) return;
        await this.initializeShadowStyles(A(this, Ve), rd);
        const { translate: e } = await this.i18n,
            n = this.isCTA
                ? e('buy_with_button_content', {
                      wallet: e('brand.google_pay'),
                  })
                : e('brand.google_pay'),
            r = qt({ label: n });
        this.disabled && r.setAttribute('disabled', ''),
            r.classList.add('button', De.BUTTON, gd[this.buttonTheme]),
            (r.onclick = this.handleClick),
            await this.renderButtonContent(r, e),
            (this.button = r),
            A(this, Ve).appendChild(r),
            this.ensureLightDOMIsNotEmpty(),
            this.onRendered();
    }
    async renderButtonContent(e, n) {
        const r =
                this.buttonTheme === 'DARK'
                    ? ut.googlePayLogoDark
                    : ut.googlePayLogo,
            a = new DOMParser().parseFromString(
                r,
                'image/svg+xml'
            ).documentElement;
        if (((e.style.font = window.getComputedStyle(this).font), this.isCTA)) {
            const i = Br({ translate: n, logoElement: a, setAriaHidden: !0 });
            i.classList.add('content'), e.appendChild(i);
        } else e.classList.add('logo-only'), e.appendChild(a);
    }
}
Ve = new WeakMap();
const W = class Xt extends ye {
    static walletName() {
        return 'google_pay';
    }
    constructor(e) {
        super(e);
    }
    getWebComponentName() {
        return 'shopify-google-pay-button';
    }
    getInstrumentName() {
        return f.GooglePay;
    }
    getWebComponentClass() {
        return fd;
    }
    async loadWalletSDK() {
        if (Xt.googlePaySDKPromise) return Xt.googlePaySDKPromise;
        const e = document.createElement('script');
        e.setAttribute('src', this.walletParams.sdkUrl);
        const n = new Promise((r, a) => {
            (e.onload = () => r()),
                (e.onerror = i => {
                    document.body.removeChild(e), a(i);
                }),
                document.body.appendChild(e);
        });
        return (
            (Xt.googlePaySDKPromise = Promise.all([n, this.loadLogos()])),
            Xt.googlePaySDKPromise
        );
    }
    getLoadEligibility() {
        const e = qa(this.walletParams);
        switch (e.result) {
            case 'success':
                return { eligible: !0 };
            case 'error':
                return { eligible: !1, reason: e.reason };
        }
    }
    getPartnerSDKEligibility() {
        return { eligible: !0 };
    }
    async loadLogos() {
        return Promise.all([
            this.loadGooglePayLogo(),
            this.loadGooglePayLogoDark(),
        ]);
    }
    async loadGooglePayLogo() {
        if (
            ((Xt.googlePayLogo = (
                await import('./google-pay-logo-BgkSiJGq.js')
            ).default),
            !Xt.googlePayLogo)
        )
            throw new Error('Google Pay logo is empty');
    }
    async loadGooglePayLogoDark() {
        if (
            ((Xt.googlePayLogoDark = (
                await import('./google-pay-logo-dark-DmTdfep2.js')
            ).default),
            !Xt.googlePayLogoDark)
        )
            throw new Error('Google Pay logo dark is empty');
    }
};
d(W, 'googlePaySDKPromise'),
    d(W, 'googlePayLogo', ''),
    d(W, 'googlePayLogoDark', '');
let ut = W;
const bd = [oc, fr, Ua, ut, dt, wr, za],
    wd = new Map(bd.map(t => [t.walletName(), e => new t(e)]));
function lt(t) {
    if (!t) return null;
    const e = wd.get(t.name);
    return e
        ? e(t)
        : (console.debug("Can't build wallet with name ".concat(t.name)), null);
}
function Ed(t) {
    return t.map(e => lt(e)).filter(e => e != null);
}
const Wa =
    '*{box-sizing:border-box}.wallet-button-fade-in{animation:animation-fade-in .3s cubic-bezier(.1,.79,1,1)}@keyframes animation-fade-in{0%{opacity:0}to{opacity:1}}button[aria-disabled=true]{opacity:.5;cursor:not-allowed}';
class _d {
    constructor(e, n, r) {
        (this.element = e), (this.apiClient = n), (this.instrumentName = r);
    }
    async getInitialCart(e) {
        const n = Fr(this.element);
        if (!n)
            throw new Error(
                '['.concat(this.instrumentName, '] unable to find product form')
            );
        const r = ct(gi),
            {
                data: a,
                errors: i,
                warnings: o,
            } = await this.apiClient.createCart(
                T(w({}, n), { discountCodes: r ? [r] : [], instrumentName: e })
            );
        return { cart: a, errors: i, warnings: o };
    }
}
function Ad({ instanceNumber: t, styleId: e, styles: n, cssFileName: r }) {
    var a, i;
    t === 1 &&
        (i = (a = window.Shopify) == null ? void 0 : a.PaymentButton) != null &&
        i.isStorefrontPortableWallets &&
        (Cd({ styleId: e }) || Sd({ styleId: e, styles: n }));
}
function Cd({ styleId: t }) {
    return !!document.querySelector('style#'.concat(t));
}
function Sd({ styleId: t, styles: e }) {
    const n = document.createElement('style');
    (n.id = t), (n.innerHTML = e), document.head.appendChild(n);
}
const J = {
    buttonBlockSize: '--shopify-accelerated-checkout-button-block-size',
    buttonBorderRadius: '--shopify-accelerated-checkout-button-border-radius',
    buttonBoxShadow: '--shopify-accelerated-checkout-button-box-shadow',
    inlineAlignment: '--shopify-accelerated-checkout-inline-alignment',
};
function _n(t) {
    let e = 0,
        n = 0,
        r = 0;
    const a = t.split(/\s+/);
    for (let i = 0; i < a.length; i++) {
        const o = a[i];
        o !== '>' &&
            (o.includes('#') && (e += (o.match(/#/g) || []).length),
            o.includes('.') && (n += (o.match(/\./g) || []).length),
            o.includes('[') && (n += (o.match(/\[/g) || []).length),
            o.includes(':') && (n += (o.match(/:[^:]/g) || []).length),
            /^[A-Za-z]/.test(o) && (r += 1));
    }
    return [e, n, r];
}
function Pd(t, e) {
    for (let n = 0; n < 3; n++) if (t[n] !== e[n]) return e[n] - t[n];
    return 0;
}
function An(t) {
    return [...t].sort((e, n) => {
        const r = _n(e.selector),
            a = _n(n.selector);
        return Pd(r, a);
    });
}
const Id =
        /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*(>\s*)?li(?![a-zA-Z0-9_.:#-])/,
    vd =
        /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*\[role="?button"?\](?![:\w-])/,
    Dd =
        /\.additional-checkout-buttons\s*(?:div\s*)?\[role="?button"?\](?![:\w-])/,
    ja = /\[data-shopify-buttoncontainer\](?![:\w-])/,
    Ya = /.dynamic-checkout-buttons .shopify-payment-button__button/,
    Rd =
        /(?!.*\.shopify-cleanslate)\.shopify-payment-button__button(?:--branded)?(?![\w-:.#>])/,
    Nd =
        /\.(shopify-payment-button|shopify-payment-button__button|shopify-payment-button__button--branded)\s*\[role="?button"?\](?![:\w-])/,
    Td =
        /(?:only\s+)?(?:screen\s+and\s+)?\((?:min|max)-(?:width|height):\s*\d+px\)/,
    kd = [vd, ja, Id, Dd, Ya],
    Ld = [Rd, Nd, Ya];
function Ka(t) {
    const e = t.pageType,
        n = [...document.styleSheets].filter(Od),
        r = [],
        a = [];
    n.forEach(N => {
        try {
            const G = [...N.cssRules].filter(x => x instanceof CSSMediaRule),
                L = [...N.cssRules].filter(x => x instanceof CSSStyleRule);
            a.push(
                ...G.filter(x => Td.test(x.conditionText)).flatMap(x =>
                    [...x.cssRules]
                        .filter(ie => ie instanceof CSSStyleRule)
                        .flatMap(ie =>
                            ie.selectorText
                                .split(',')
                                .map(bt => bt.trim())
                                .map(bt =>
                                    w(
                                        {
                                            selector: bt,
                                            conditionText: x.conditionText,
                                        },
                                        vn(ie)
                                    )
                                )
                        )
                )
            ),
                r.push(
                    ...L.flatMap(x =>
                        x.selectorText
                            .split(',')
                            .map(ie => ie.trim())
                            .map(ie => w({ selector: ie }, vn(x)))
                    )
                );
        } catch (G) {
            Pt()('shopify-support-debug') &&
                (console.debug(
                    '[shopify-support-debug] stylesheet origin: '.concat(N.href)
                ),
                console.debug(G));
        }
    });
    const i = e === S.ProductPage ? Ld : kd,
        o = new Set();
    function s(N, G) {
        const L = G.selector.match(N);
        return L ? (o.add(L[0]), !0) : !1;
    }
    const l = r.filter(N => i.some(G => s(G, N))).reverse(),
        u = a.filter(N => i.some(G => s(G, N))).reverse(),
        c = Pt()('shopify-support-debug');
    c && console.table(Array.from(o));
    const h = An(l),
        p = An(u),
        y = {},
        _ = Cn(e)
            ? document.querySelector('.cart__blocks .button')
            : document.querySelector('.product-form__buttons .button');
    _ && (y.boxShadow = getComputedStyle(_, ':before').boxShadow);
    for (const N of h) {
        const G = ['height', 'minHeight', 'borderRadius', 'marginTop'];
        Cn(e) && N.selector.match(ja) && G.push('justifyContent');
        for (const L of G)
            y[L] = Fd({ rule: N, property: L, currentPropertyValue: y[L] });
    }
    const {
        height: C,
        borderRadius: E,
        minHeight: P,
        marginTop: $,
        justifyContent: B,
        boxShadow: Ke,
    } = y;
    return (
        c &&
            console.table([
                { property: 'height', value: C },
                { property: 'borderRadius', value: E },
                { property: 'minHeight', value: P },
                { property: 'marginTop', value: $ },
                { property: 'justifyContent', value: B },
                { property: 'boxShadow', value: Ke },
            ]),
        e === S.ProductPage
            ? In({
                  styles: {
                      height: C,
                      minHeight: P,
                      borderRadius: E,
                      marginTop: $,
                      boxShadow: Ke,
                  },
                  mediaRules: p,
                  element: t,
              })
            : In({
                  styles: { borderRadius: E, boxShadow: Ke, justifyContent: B },
                  mediaRules: p,
                  element: t,
              })
    );
}
function Qa(t, e) {
    var n, r, a;
    if (!e) return;
    const i =
            (a =
                (r = (n = window.ShopifyAnalytics) == null ? void 0 : n.lib) ==
                null
                    ? void 0
                    : r.trekkie) == null
                ? void 0
                : a.defaultAttributes,
        o = i == null ? void 0 : i.shopId,
        s = i == null ? void 0 : i.themeId;
    o &&
        s &&
        m.log({
            body: 'Style backwards compatibility used',
            attributes: { shopId: ''.concat(o), themeId: ''.concat(s) },
        });
    const l = 'global-'.concat(t.tagName.toLowerCase(), '-styles');
    if (document.head.querySelector('style#'.concat(l)) == null) {
        const u = document.createElement('style');
        (u.id = l), (u.innerHTML = e), document.head.appendChild(u);
    }
}
function Od(t) {
    const e =
        t.ownerNode instanceof HTMLLinkElement &&
        (t.ownerNode.getAttribute('crossorigin') === 'anonymous' ||
            t.ownerNode.getAttribute('crossorigin') === '');
    return t.href == null || t.href.startsWith(window.location.origin) || e;
}
function Cn(t) {
    return t === S.CartPage || t === S.CartAjax;
}
function Sn({ height: t, minHeight: e }) {
    let n = t,
        r = e;
    return (
        ((n != null && n.includes('var('.concat(J.buttonBlockSize))) ||
            n === 'auto') &&
            (n = null),
        ((r != null && r.includes('var('.concat(J.buttonBlockSize))) ||
            r === 'auto') &&
            (r = null),
        n === r ? n : r && n ? 'max('.concat(n, ',').concat(r, ')') : n || r
    );
}
function Pn({
    existingProperties: t,
    mediaCondition: e,
    selector: n,
    styles: r,
}) {
    const a = w({}, r);
    for (const i of t) delete a[i];
    for (const [i, o] of Object.entries(a))
        o != null && o.startsWith('var('.concat(i)) && delete a[i];
    return Object.keys(a).length === 0
        ? ''
        : xd({ mediaCondition: e, selector: n, styles: a });
}
function xd({ mediaCondition: t, selector: e, styles: n }) {
    let r = ''.concat(t ? '@media '.concat(t, ' { ') : '').concat(e, ' {');
    for (const [a, i] of Object.entries(n))
        i && (r += '\n  '.concat(a, ': ').concat(i, ';'));
    return (r += '\n}'), t && (r += '}'), (r += '\n'), r;
}
function In({ styles: t, element: e, mediaRules: n }) {
    const {
            height: r,
            minHeight: a,
            borderRadius: i,
            marginTop: o,
            justifyContent: s,
            boxShadow: l,
        } = t,
        u = e.tagName.toLowerCase(),
        c = getComputedStyle(e),
        h = new Set();
    for (const y of Object.values(J)) c.getPropertyValue(y) && h.add(y);
    let p = Pn({
        existingProperties: h,
        selector: u,
        styles: {
            [J.buttonBlockSize]: Sn({ height: r, minHeight: a }),
            [J.buttonBorderRadius]: i,
            [J.buttonBoxShadow]: l,
            [J.inlineAlignment]: s,
            'margin-top': o,
            display: o ? 'block' : void 0,
        },
    });
    return (
        n.forEach(y => {
            (y.height ||
                y.minHeight ||
                y.borderRadius ||
                y.boxShadow ||
                y.justifyContent ||
                y.marginTop) &&
                (p += Pn({
                    existingProperties: h,
                    mediaCondition: y.conditionText,
                    selector: u,
                    styles: {
                        [J.buttonBlockSize]: Sn({
                            height: y.height,
                            minHeight: y.minHeight,
                        }),
                        [J.buttonBorderRadius]: y.borderRadius,
                        [J.buttonBoxShadow]: y.boxShadow,
                        [J.inlineAlignment]: y.justifyContent,
                        'margin-top': y.marginTop,
                        display: y.marginTop ? 'block' : void 0,
                    },
                }));
        }),
        p.trim()
    );
}
function vn(t) {
    return [
        ['height'],
        ['minHeight', 'min-height'],
        ['borderRadius', 'border-radius'],
        ['marginTop', 'margin-top'],
        ['justifyContent', 'justify-content'],
    ].reduce(
        (e, [n, r]) => (
            (e[n] = Md({ rule: t, property: r != null ? r : n })), e
        ),
        {}
    );
}
function Md({ rule: t, property: e }) {
    const n = t.style.getPropertyValue(e);
    return t.style.getPropertyPriority(e)
        ? ''.concat(n, ' !important')
        : n || null;
}
function Fd({ rule: t, property: e, currentPropertyValue: n }) {
    const r = t[e];
    return !(n != null && n.includes('!important')) &&
        r != null &&
        r.includes('!important')
        ? r
        : n != null
        ? n
        : r;
}
const Dn = 2e3;
class Rn extends Error {
    constructor() {
        super(...arguments), d(this, 'name', 'AcceleratedCheckoutError');
    }
}
const Ot = class lu extends xr {
    constructor() {
        super(),
            d(this, 'instanceNumber', ++lu.instanceCount),
            d(this, 'pageType', S.ProductPage),
            d(this, 'formObserver'),
            d(this, 'dataSource'),
            d(this, 'wrapper'),
            d(this, 'shopPromiseEligible'),
            d(this, 'didInitiateRender', !1),
            (this.wrapper = document.createElement('div')),
            Ad({
                instanceNumber: this.instanceNumber,
                styleId: 'shopify-accelerated-checkout',
                styles: Xl,
                cssFileName: 'AcceleratedCheckout.css',
            }),
            (this.shopPromiseEligible = ya());
    }
    static get observedAttributes() {
        return [
            'access-token',
            'disabled',
            'has-selling-plan',
            'requires-shipping',
        ];
    }
    async connectedCallback() {
        var e, n;
        try {
            if (
                ((n = (e = this.wrapper) == null ? void 0 : e.children) !=
                    null &&
                    n.length) ||
                this.didInitiateRender
            )
                return;
            if (!this.validateRenderingSurface()) {
                this.clearUI();
                return;
            }
            this.instanceNumber === 1 &&
                (Mr(this), m.initStarted(), this.extractStyles());
            const r = Kt(F.ButtonDisplay, 'dc:'.concat(this.instanceNumber));
            (this.i18n = Vt()),
                this.setupFormObserver(),
                (this.didInitiateRender = !0);
            const a = await this.loadWallet(),
                i = a.getInstrumentName();
            (this.apiClient = new zt({
                accessToken: this.accessToken,
                country: this.buyerCountry,
                locale: this.i18n.locale,
                withCarrierRates: !0,
                cartPrepareMigrationEnabled: this.isFlagEnabled(_a),
            })),
                (this.dataSource = new _d(this, this.apiClient, i));
            const o = this.getWebComponentInstance({
                wallet: a,
                instrumentName: i,
                dataSource: this.dataSource,
                i18n: this.i18n,
                apiClient: this.apiClient,
                buttonDisplayBenchmark: r,
            });
            this.render(o, i),
                m.initCompleted(),
                this.instanceNumber === 1 && this.triggerLoadedEvent();
        } catch (r) {
            if ((this.clearUI(), m.initCompleted(r), r.name === gt)) throw r;
            b.notify(
                new Rn(
                    'An error occurred while attempting to render AcceleratedCheckout: '.concat(
                        r
                    ),
                    { cause: r }
                )
            );
        }
    }
    async attributeChangedCallback(e, n, r) {
        n !== r &&
            (Or(this, e, r),
            e === 'has-selling-plan' && r === ''
                ? this.showBuyerConsent(this.apiClient, this.i18n)
                : e === 'has-selling-plan' &&
                  r === null &&
                  this.hideBuyerConsent());
    }
    getWebComponentInstance({
        wallet: e,
        instrumentName: n,
        dataSource: r,
        i18n: a,
        apiClient: i,
        buttonDisplayBenchmark: o,
    }) {
        if (this.hidePaymentButton) {
            m.log({
                body: 'Payment button hidden for instrument '.concat(n),
                attributes: {
                    instrument: n,
                    pageType: this.pageType,
                    containerInstanceNumber: this.instanceNumber,
                    hidePaymentButton: this.hidePaymentButton,
                    isRedirectedFromAmazon: this.isRedirectedFromAmazon,
                    isBuyWithPrimeEligible: this.isBuyWithPrimeEligible,
                },
            }),
                m.amazonAdExperimentPaymentButtonHidden({ instrument: n });
            return;
        }
        const s = e.createWebComponent({
            walletContainer: this,
            dataSource: r,
            i18n: a,
            apiClient: i,
            classNames: Ud(n),
            callToAction: 'true',
            pageType: this.pageType,
            containerInstanceNumber: this.instanceNumber,
            onRendered: () =>
                m.instrumentLoaded({
                    instrumentOrComponentName: n,
                    result: 'success',
                    measurement: o(),
                }),
        });
        if (!s)
            throw new Rn(
                'No web component instance found for instrument '.concat(n)
            );
        return s;
    }
    async render(e, n) {
        this.clearUI();
        const r = this.attachShadow({ mode: 'closed' }),
            a = document.createElement('style');
        (a.innerHTML = Wa),
            r.appendChild(a),
            (this.wrapper.className =
                'wallet-button-fade-in wallet-button-wrapper');
        const i = document.createElement('slot');
        (i.name = 'button'), this.wrapper.appendChild(i);
        const o = document.createElement('slot');
        (o.name = 'promise'), this.wrapper.appendChild(o);
        const s = document.createElement('slot');
        (s.name = 'more-options'),
            this.wrapper.appendChild(s),
            r == null || r.appendChild(this.wrapper),
            this.hasSellingPlan
                ? this.showBuyerConsent(this.apiClient, this.i18n)
                : this.hideBuyerConsent();
        const l = new DocumentFragment();
        e && l.appendChild(e);
        const u = this.getShopPromiseSlot();
        u && l.appendChild(u);
        const c = this.getMorePaymentOptionsLink(n);
        c && l.appendChild(c), this.appendChild(l);
    }
    getMorePaymentOptionsLink(e) {
        var n, r;
        if (e === f.BuyItNow) return null;
        const a = document.createElement('more-payment-options-link');
        return (
            Wt(a, {
                'buyer-country': (n = this.buyerCountry) != null ? n : '',
                'access-token': (r = this.accessToken) != null ? r : '',
                'recommended-instrument': e,
                slot: 'more-options',
            }),
            (a.disabled = this.disabled),
            a.setDataSource(this.dataSource),
            a.setI18n(this.i18n),
            a.setClassNames(mr.MORE_PAYMENT_OPTION_BUTTON),
            a
        );
    }
    getShopPromiseSlot() {
        if (!this.shopPromiseEligible) return null;
        const e = document.createElement('div');
        return (
            e.setAttribute('data-shopify', 'shop-promise-payment-button-slot'),
            (e.style.height = '100%'),
            (e.slot = 'promise'),
            e
        );
    }
    validateRenderingSurface() {
        return Qt({ page: 'product', element: this }) != null;
    }
    async loadWallet() {
        const e = this.getRecommendedWallet(),
            n = Ql(e, this.fallbackWallet, 'AcceleratedCheckout');
        return await $d(
            this,
            T(w({}, n), { instanceNumber: this.instanceNumber })
        );
    }
    getRecommendedWallet() {
        return this.amazonWallet && this.isRedirectedFromAmazon
            ? (m.log({
                  body: 'Recommended wallet overridden to AmazonPay',
                  attributes: {
                      pageType: this.pageType,
                      containerInstanceNumber: this.instanceNumber,
                      isRedirectedFromAmazon: this.isRedirectedFromAmazon,
                      isBuyWithPrimeEligible: this.isBuyWithPrimeEligible,
                      recommendedWallet: this.recommendedWallet,
                      amazonWallet: this.amazonWallet,
                  },
              }),
              m.amazonAdExperimentRecommendedWalletOverriden({
                  instrument: f.AmazonPay,
              }),
              this.amazonWallet)
            : this.recommendedWallet;
    }
    setupFormObserver() {
        this.formObserver ||
            ((this.formObserver = new Sa(
                this,
                ({ disabled: e, hasSellingPlan: n }) => {
                    (this.disabled = e),
                        (this.hasSellingPlan = n),
                        (this.isShippingRequired = Bd(
                            this,
                            this.variantParams
                        ));
                }
            )),
            this.formObserver.setupMutationObservers());
    }
    extractStyles() {
        if (this.styleExtractorDisabled) {
            Pt()('shopify-support-debug') &&
                console.debug(
                    '[shopify-support-debug] styling backward compatibility disabled'
                ),
                m.styleBackwardsCompatibility({
                    usedBackwardsCompatibility: !1,
                });
            return;
        }
        const e = Ka(this);
        e && Qa(this, e),
            m.styleBackwardsCompatibility({ usedBackwardsCompatibility: !!e });
    }
};
d(Ot, 'instanceCount', 0);
let Er = Ot;
function Ud(t) {
    return t === f.BuyItNow ? mr.UNBRANDED_BUTTON : mr.BRANDED_BUTTON;
}
function Bd(t, e) {
    var n;
    const r = Fr(t);
    return !!(
        (n = e.find(a => a.id === Number(r == null ? void 0 : r.variantId))) !=
            null && n.requiresShipping
    );
}
async function $d(
    t,
    { recommendedWallet: e, fallbackWallet: n, instanceNumber: r }
) {
    const a = e ? lt(e) : null,
        i = lt(n),
        o = async s => {
            const l = Ea({ walletInstrument: s, instanceNumber: r }),
                u = 'timeout',
                c = await Promise.race([
                    l,
                    new Promise(h => setTimeout(() => h(u), Dn)),
                ]);
            if (c === u)
                m.instrumentSDKLoaded({
                    instrument: s.getInstrumentName(),
                    measurement: Dn,
                    result: 'timeout',
                });
            else if (c instanceof ye) return c;
            return null;
        };
    if (It(t, a)) {
        const s = await o(a);
        if (s) return s;
    }
    if (It(t, i)) {
        const s = await o(i);
        if (s) return s;
    }
    return lt(Gn);
}
pe('shopify-accelerated-checkout', Er),
    pe('more-payment-options-link', Gl, { isChildCustomElement: !0 });
const Hd = t => {
        const e = new PerformanceObserver(n => {
            n
                .getEntriesByType('resource')
                .some(
                    r =>
                        r.name.includes(tt.CartUpdate) ||
                        r.name.includes(tt.CartChange) ||
                        r.name.includes(tt.CartAdd) ||
                        r.name.includes(tt.CartClear)
                ) && t();
        });
        return e.observe({ entryTypes: ['resource'] }), e;
    },
    Gd =
        '.wallet-cart-button__skeleton{animation:acceleratedCheckoutLoadingSkeleton var(--shopify-accelerated-checkout-skeleton-animation-duration, 4s) var(--shopify-accelerated-checkout-skeleton-animation-timing-function, ease) infinite;animation-delay:-.168s;background-color:var(--shopify-accelerated-checkout-skeleton-background-color, #dedede)}.wallet-button-wrapper{container-type:inline-size;container-name:wrapper;width:100%}.wallet-cart-grid{margin:0 -5px -5px;padding:0;display:flex;justify-content:var(--shopify-accelerated-checkout-inline-alignment, start)}.wallet-cart-button-container{position:relative;margin:0 5px 5px}.wallet-cart-button-container,.wallet-cart-button{width:150px;height:clamp(25px,var(--shopify-accelerated-checkout-button-inline-size, 42px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 4px);list-style-type:none!important;text-align:center;flex-shrink:0;flex-grow:0}.wallet-cart-grid.wallet-cart-grid--vertical,.additional-checkout-buttons--vertical .wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container,.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child,.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button-container:first-child{margin:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button,.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}@media screen and (max-width: 750px){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0;max-width:none}.wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0;max-width:none}.wallet-cart-button-container:first-child{margin:0}.wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-button-container:first-child{margin:0}.wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}.screen-reader-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}',
    zd =
        '.wallet-cart-button__skeleton{animation:acceleratedCheckoutLoadingSkeleton var(--shopify-accelerated-checkout-skeleton-animation-duration, 4s) var(--shopify-accelerated-checkout-skeleton-animation-timing-function, ease) infinite;animation-delay:-.168s;background-color:var(--shopify-accelerated-checkout-skeleton-background-color, #dedede)}.wallet-button-wrapper{container-type:inline-size;container-name:wrapper;width:100%}.wallet-cart-grid{margin:0 -5px -5px;padding:0;display:flex;justify-content:var(--shopify-accelerated-checkout-inline-alignment, start)}.wallet-cart-button-container{position:relative;margin:0 5px 5px}.wallet-cart-button-container,.wallet-cart-button{width:150px;height:clamp(25px,var(--shopify-accelerated-checkout-button-inline-size, 42px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 4px);list-style-type:none!important;text-align:center;flex-shrink:0;flex-grow:0}.wallet-cart-grid.wallet-cart-grid--vertical,.additional-checkout-buttons--vertical .wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container,.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child,.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button,.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}@media screen and (max-width: 750px){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0;max-width:none}.wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0;max-width:none}.wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-button-container{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px);margin:8px 0 0}.wallet-cart-button-container:first-child{margin:8px 0 0}.wallet-cart-button{width:100%;height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 54px),55px)}}.screen-reader-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}';
function Vd(t) {
    const e = Qt({ page: 'cart', element: t });
    return Aa({ type: 'attributes', form: e });
}
class qd {
    constructor(e, n, r) {
        (this.element = e), (this.cartToken = n), (this.apiClient = r);
    }
    async getInitialCart(e) {
        const n = 'gid://shopify/Cart/'.concat(this.cartToken),
            r = Vd(this.element);
        let a,
            i = [];
        if (r.length) {
            const o = await this.apiClient.updateCartAttributes({
                cartId: n,
                attributes: r,
                instrumentName: e,
                startingCheckout: !0,
            });
            (a = o.data), (i = o.errors);
        } else
            a = await this.apiClient.fetchCart({
                id: n,
                instrumentName: e,
                startingCheckout: !0,
            });
        return { cart: a, errors: i };
    }
}
var qe;
const xt = class cu extends xr {
    constructor() {
        super(),
            d(this, 'instanceNumber', ++cu.instanceCount),
            d(this, 'pageType', S.CartPage),
            d(this, 'cartObserver', null),
            d(this, 'dataSource', null),
            d(this, 'wrapper'),
            d(this, 'didInitiateRender', !1),
            d(this, 'amazonAdExperimentCheckoutButtonListeners', []),
            O(this, qe),
            (this.wrapper = document.createElement('div'));
    }
    static get observedAttributes() {
        return ['access-token', 'has-selling-plan', 'requires-shipping'];
    }
    createDataSource() {
        if (!this.cartToken) {
            m.cartTokenMissing({ reason: 'createDataSource' });
            return;
        }
        (this.i18n = Vt()),
            (this.apiClient = new zt({
                accessToken: this.accessToken,
                country: this.buyerCountry,
                locale: this.i18n.locale,
                withCarrierRates: !0,
                cartPrepareMigrationEnabled: this.isFlagEnabled(_a),
            })),
            (this.dataSource = new qd(this, this.cartToken, this.apiClient));
    }
    async createWebComponents({ shouldRefetchCartAttributes: e }) {
        if (!this.walletConfigs)
            throw new ee({
                code: 'invalid-wallet-configs',
                message:
                    '[AcceleratedCheckoutCart] walletConfigs does not exist',
            });
        const n = zl(this.walletConfigs, 'AcceleratedCheckoutCart');
        if (!(n instanceof Array))
            throw new ee({
                code: 'invalid-wallet-configs',
                message:
                    '[AcceleratedCheckoutCart] invalid walletConfigs found',
            });
        const r = F.ButtonDisplay,
            a = o => ''.concat(o, ':').concat(this.instanceNumber),
            i = await Wd(this, {
                walletConfigs: n,
                startButtonDisplayBenchmark: o => Ye(r, a(o)),
            });
        return (
            this.createDataSource(),
            this.dataSource
                ? (e && (await this.updateAttributes()),
                  i.map(o => {
                      const s = o.getInstrumentName();
                      return o.createWebComponent({
                          walletContainer: this,
                          dataSource: this.dataSource,
                          i18n: this.i18n,
                          apiClient: this.apiClient,
                          pageType: this.pageType,
                          containerInstanceNumber: this.instanceNumber,
                          slot: 'button-'.concat(o.getInstrumentName()),
                          onRendered: (() => {
                              let l = !1;
                              return () => {
                                  l ||
                                      ((l = !0),
                                      m.instrumentLoaded({
                                          instrumentOrComponentName: s,
                                          result: 'success',
                                          measurement: Z(r, a(s)),
                                      }));
                              };
                          })(),
                      });
                  }))
                : []
        );
    }
    async cartChangedCallback() {
        try {
            if (!this.dataSource && this.cartToken) {
                await this.render({ shouldRefetchCartAttributes: !0 }),
                    m.initCompleted();
                return;
            } else if (!this.cartToken) {
                m.cartTokenMissing({ reason: 'cartChangedCallback' });
                return;
            }
            await this.updateAttributes();
        } catch (e) {
            this.clearUI(), b.notify(e);
        }
    }
    async updateAttributes() {
        var e, n;
        if (!this.cartToken || !this.apiClient) return;
        const r = await this.apiClient.fetchLimitedCart({
            id: 'gid://shopify/Cart/'.concat(this.cartToken),
            instrumentName: f.Unknown,
        });
        (this.hasSellingPlan = (e = r.sellingPlan) != null ? e : !1),
            (this.isShippingRequired =
                (n = r.shippingRequired) != null ? n : !1);
    }
    async connectedCallback() {
        try {
            if (this.didInitiateRender) return;
            if (
                (this.instanceNumber === 1 && Mr(this),
                m.initStarted(),
                (this.cartObserver = Hd(() => this.cartChangedCallback())),
                !this.cartToken)
            ) {
                m.cartTokenMissing({ reason: 'connectedCallback' });
                return;
            }
            await this.render({ shouldRefetchCartAttributes: !1 }),
                m.initCompleted();
        } catch (e) {
            this.clearUI(), m.initCompleted(e), b.notify(e);
        }
    }
    disconnectedCallback() {
        var e;
        (e = this.cartObserver) == null || e.disconnect(),
            this.isAmazonAdExperimentEnabled() &&
                this.amazonAdExperimentRemoveCheckoutButtonListeners();
    }
    async attributeChangedCallback(e, n, r) {
        n !== r &&
            (Or(this, e, r),
            e === 'has-selling-plan' && r === ''
                ? this.showBuyerConsent(this.apiClient, this.i18n)
                : e === 'has-selling-plan' &&
                  r === null &&
                  this.hideBuyerConsent());
    }
    get cartToken() {
        return ct('cart');
    }
    async render({ shouldRefetchCartAttributes: e }) {
        var n;
        if (this.hasLegacyCartCookie()) {
            m.legacyCartCookie(), this.clearUI();
            return;
        }
        this.didInitiateRender = !0;
        const r = Kt(F.ButtonDisplay, 'cart:'.concat(this.instanceNumber)),
            a = await this.createWebComponents({
                shouldRefetchCartAttributes: e,
            });
        if ((this.clearUI(), a.length === 0)) return;
        try {
            if (this.isAmazonAdExperimentEnabled()) {
                const c = a.find(p => p.name === f.BuyWithPrime),
                    h = a.find(p => p.name === f.AmazonPay);
                m.log({
                    body: 'available wallets for amazon ad experiment',
                    attributes: this.getTelemetryAttributes({
                        buyWithPrimeCheckoutButton: !!c,
                        amazonPayCheckoutButton: !!h,
                    }),
                }),
                    c
                        ? this.accelerateCheckoutButtonsForAmazonAdExperiment(c)
                        : h
                        ? this.accelerateCheckoutButtonsForAmazonAdExperiment(h)
                        : m.amazonAdExperimentAcceleratedCheckoutButtonSetup({
                              instrument: f.Unknown,
                              result: 'failed',
                          });
            }
        } catch (c) {
            m.log({
                body: 'failed to accelerate checkout buttons for amazon ad experiment',
                attributes: this.getTelemetryAttributes({
                    error: c instanceof Error ? c.message : String(c),
                }),
            }),
                b.notify(c, {
                    context:
                        'failed to accelerate checkout buttons for amazon ad experiment',
                });
        }
        const i = new DocumentFragment(),
            o = this.getOrCreateShadowRoot(),
            s = document.createElement('style');
        (s.innerHTML = [Wa, Gd].join('\n')),
            o.appendChild(s),
            this.extractStyles(),
            (this.wrapper = document.createElement('div')),
            (this.wrapper.className =
                'wallet-button-fade-in wallet-button-wrapper');
        const l = document.createElement('h2');
        (l.className = 'screen-reader-text'),
            (l.textContent =
                ((n = this.i18n) == null
                    ? void 0
                    : n.translate('express_checkout')) || ''),
            this.wrapper.appendChild(l);
        const u = document.createElement('div');
        (u.className = 'wallet-cart-grid '.concat(De.CONTAINER)),
            jd() && u.classList.add('wallet-cart-grid--vertical'),
            a.forEach(c => {
                const h = document.createElement('div'),
                    p = document.createElement('div'),
                    y = document.createElement('slot');
                (y.name = 'button-'.concat(c.name)),
                    (h.className = 'wallet-cart-button-container'),
                    (p.className = 'wallet-cart-button'),
                    h.setAttribute('data-testid', 'grid-cell'),
                    h.appendChild(p),
                    p.appendChild(y),
                    u.appendChild(h),
                    i.appendChild(c);
            }),
            this.wrapper.appendChild(u),
            this.hasSellingPlan
                ? this.showBuyerConsent(this.apiClient, this.i18n)
                : this.hideBuyerConsent(),
            o.appendChild(this.wrapper),
            this.appendChild(i),
            m.instrumentLoaded({
                instrumentOrComponentName: 'AcceleratedCheckoutCart',
                result: 'success',
                measurement: r(),
            });
    }
    getTelemetryAttributes(e = {}) {
        return w(
            {
                isAmazonAdExperimentFlagEnabled: this.isFlagEnabled(Le),
                amazonReferralSessionStorageValue: sessionStorage.getItem(
                    'shopify_amazon_referral'
                ),
                cartToken: this.cartToken,
                cartInstance: this.instanceNumber,
                hasDataSource: !!this.dataSource,
            },
            e
        );
    }
    isAmazonAdExperimentEnabled() {
        return (
            this.isFlagEnabled(Le) &&
            sessionStorage.getItem('shopify_amazon_referral') === 'mShop'
        );
    }
    accelerateCheckoutButtonsForAmazonAdExperiment(e) {
        try {
            const n = document.getElementsByName('checkout');
            if (n.length <= 0)
                throw (
                    (m.log({
                        body: 'attempted to accelerate checkout buttons, but none were found',
                        attributes: this.getTelemetryAttributes({
                            walletName: e.name,
                        }),
                    }),
                    new Error('No checkout buttons found'))
                );
            n.forEach(r => {
                const a = async i => {
                    if ((i.preventDefault(), !this.dataSource)) {
                        this.amazonAdExperimentFallbackToDefaultCheckout(
                            r,
                            e.name
                        );
                        return;
                    }
                    try {
                        const { cart: o } =
                                await this.dataSource.getInitialCart(e.name),
                            s = Nr(o);
                        if (!o || !this.accessToken || !s) {
                            this.amazonAdExperimentFallbackToDefaultCheckout(
                                r,
                                e.name,
                                'checkout button was clicked but was missing required data to validate '
                                    .concat(
                                        e.name,
                                        ' eligibility:\n                cart: '
                                    )
                                    .concat(
                                        (o == null ? void 0 : o.id) ||
                                            'missing',
                                        ',\n                accessToken: '
                                    )
                                    .concat(
                                        this.accessToken || 'missing',
                                        ',\n                checkoutToken: '
                                    )
                                    .concat(s || 'missing')
                            );
                            return;
                        }
                        try {
                            await Vr({
                                configOptionsEndpoint:
                                    e.name === f.BuyWithPrime
                                        ? kt.OPTIMUS_CONFIG_REST_API_URL
                                        : Lt.CV2_CONFIG_REST_API_URL,
                                checkoutUrl: o.checkoutUrl,
                                sourceId: s,
                                accessToken: this.accessToken,
                                instrument: e.name,
                            });
                            try {
                                e.triggerCheckout(),
                                    m.amazonAdExperimentAcceleratedCheckoutButtonClicked(
                                        {
                                            instrument: e.name,
                                            result: 'success',
                                        }
                                    ),
                                    m.log({
                                        body: 'checkout button was clicked and accelerated',
                                        attributes: this.getTelemetryAttributes(
                                            { walletName: e.name }
                                        ),
                                    });
                            } catch (l) {
                                this.amazonAdExperimentFallbackToDefaultCheckout(
                                    r,
                                    e.name,
                                    'checkout button was clicked but failed to accelerate',
                                    l
                                );
                            }
                        } catch (l) {
                            this.amazonAdExperimentFallbackToDefaultCheckout(
                                r,
                                e.name,
                                'checkout button was clicked but failed to fetch wallets platform config, falling back to guest checkout:\n                '.concat(
                                    l instanceof Error
                                        ? ''
                                              .concat(l.name, ': ')
                                              .concat(l.message)
                                        : String(l)
                                )
                            );
                        }
                    } catch (o) {
                        this.amazonAdExperimentFallbackToDefaultCheckout(
                            r,
                            e.name,
                            'checkout button was clicked but was missing required data to validate line item eligibility, falling back to guest checkout',
                            o
                        );
                    }
                };
                r.addEventListener('click', a, !0),
                    this.amazonAdExperimentCheckoutButtonListeners.push({
                        button: r,
                        listener: a,
                    });
            }),
                m.amazonAdExperimentAcceleratedCheckoutButtonSetup({
                    instrument: e.name,
                    result: 'success',
                });
        } catch (n) {
            m.amazonAdExperimentAcceleratedCheckoutButtonSetup({
                instrument: e.name,
                result: 'failed',
            });
        }
    }
    amazonAdExperimentFallbackToDefaultCheckout(e, n, r, a) {
        m.amazonAdExperimentAcceleratedCheckoutButtonClicked({
            instrument: n,
            result: 'failed',
        }),
            r &&
                (m.log({
                    body: r,
                    attributes: this.getTelemetryAttributes({ walletName: n }),
                }),
                a && b.notify(a, { context: r }));
        const i = this.amazonAdExperimentCheckoutButtonListeners.find(
            o => o.button === e
        );
        if (i) {
            e.removeEventListener('click', i.listener, !0),
                (this.amazonAdExperimentCheckoutButtonListeners =
                    this.amazonAdExperimentCheckoutButtonListeners.filter(
                        s => s.button !== e
                    ));
            const o = new Event('click', { bubbles: !0, cancelable: !0 });
            typeof e.click == 'function' ? e.click() : e.dispatchEvent(o);
        }
        m.amazonAdExperimentAcceleratedCheckoutButtonClicked({
            instrument: f.BuyItNow,
            result: 'success',
        });
    }
    amazonAdExperimentRemoveCheckoutButtonListeners() {
        try {
            this.amazonAdExperimentCheckoutButtonListeners.forEach(
                ({ button: e, listener: n }) => {
                    e.removeEventListener('click', n, !0);
                }
            ),
                (this.amazonAdExperimentCheckoutButtonListeners = []);
        } catch (e) {
            b.notify(e, {
                context: 'failed to remove checkout button event listeners',
            });
        }
    }
    getOrCreateShadowRoot() {
        return (
            A(this, qe) || k(this, qe, this.attachShadow({ mode: 'closed' })),
            A(this, qe)
        );
    }
    hasLegacyCartCookie() {
        var e;
        return this.cartToken
            ? (e = this.cartToken) == null
                ? void 0
                : e.match(/^[a-z0-9]+$/)
            : !1;
    }
    extractStyles() {
        if (this.styleExtractorDisabled) {
            Pt()('shopify-support-debug') &&
                console.debug(
                    '[shopify-support-debug] styling backward compatibility disabled'
                ),
                m.styleBackwardsCompatibility({
                    usedBackwardsCompatibility: !1,
                });
            return;
        }
        const e = Ka(this);
        if (e) {
            Qa(this, e);
            const n = this.getOrCreateShadowRoot(),
                r = document.createElement('style');
            (r.innerHTML = zd), n.appendChild(r);
        }
        m.styleBackwardsCompatibility({ usedBackwardsCompatibility: !!e });
    }
};
(qe = new WeakMap()), d(xt, 'instanceCount', 0);
let _r = xt;
async function Wd(
    t,
    { walletConfigs: e, startButtonDisplayBenchmark: n = () => {} }
) {
    const r = ql(t, Ed(e));
    return (
        await Promise.all(
            r.map(
                a => (
                    n(a.getInstrumentName()),
                    Ea({
                        walletInstrument: a,
                        instanceNumber: t.instanceNumber,
                    })
                )
            )
        )
    ).filter(a => a != null);
}
function jd() {
    return !!document.querySelector(
        '.additional-checkout-buttons--vertical shopify-accelerated-checkout-cart'
    );
}
pe('shopify-accelerated-checkout-cart', _r);
class Yd {
    getInitialCart() {
        throw new Error('[NoOpDataSource] Unexpected call to "getCart"');
    }
}
const Mt = class uu extends xr {
    constructor() {
        super(...arguments),
            d(this, 'instanceNumber', ++uu.instanceCount),
            d(this, 'pageType', S.Checkout);
    }
    get walletConfig() {
        return this.getAttribute('wallet-config');
    }
    async connectedCallback() {
        var e;
        try {
            if (this.children.length) return;
            this.instanceNumber === 1 && (Mr(this), m.initStarted());
            const n = Kt(F.ButtonDisplay, 'dc:'.concat(this.instanceNumber)),
                r = Vl(this.walletConfig, 'WalletButton');
            if (!r) throw new bi('[WalletButton] No config provided.');
            const a = lt(r);
            if (!a) return;
            if (!(await this.eligibleToShow(a))) {
                this.pciEnabled &&
                    this.dispatchEvent(
                        new CustomEvent('wallet-rendered', {
                            detail: {
                                status: 'failure',
                                message: 'ineligible',
                            },
                        })
                    );
                return;
            }
            if (this.onlySdk) {
                m.initCompleted(),
                    this.pciEnabled &&
                        this.dispatchEvent(
                            new CustomEvent('wallet-rendered', {
                                detail: { status: 'success' },
                            })
                        );
                return;
            }
            const i = a.getInstrumentName();
            (this.i18n = Vt()),
                (this.apiClient = new zt({
                    accessToken: this.accessToken,
                    country: this.buyerCountry,
                    locale: this.i18n.locale,
                }));
            const o = this.createWebComponent(
                a,
                this.i18n,
                this.apiClient,
                i,
                n
            );
            (this.innerHTML = ''),
                this.appendChild(o),
                m.initCompleted(),
                this.instanceNumber === 1 && this.triggerLoadedEvent();
        } catch (n) {
            (this.innerHTML = ''),
                this.pciEnabled &&
                    this.dispatchEvent(
                        new CustomEvent('wallet-rendered', {
                            detail: {
                                status: 'failure',
                                message:
                                    (e = n.message) != null
                                        ? e
                                        : 'Error loading wallet SDK',
                            },
                        })
                    ),
                m.initCompleted(n),
                b.notify(n);
        }
    }
    createWebComponent(e, n, r, a, i) {
        const o = e.createWebComponent({
            walletContainer: this,
            dataSource: new Yd(),
            i18n: n,
            apiClient: r,
            containerInstanceNumber: this.instanceNumber,
            pageType: this.pageType,
        });
        return (
            (o.onRendered = () => {
                this.pciEnabled &&
                    this.dispatchEvent(
                        new CustomEvent('wallet-rendered', {
                            detail: { status: 'success' },
                        })
                    ),
                    m.instrumentLoaded({
                        instrumentOrComponentName: a,
                        result: 'success',
                        measurement: i(),
                    });
            }),
            o
        );
    }
    async eligibleToShow(e) {
        return !(
            !It(this, e) ||
            (await e.loadWalletSDK(), !e.getPartnerSDKEligibility().eligible)
        );
    }
};
d(Mt, 'instanceCount', 0);
let Ar = Mt;
pe('shopify-wallet-button', Ar),
    ui(b, { metadata: { custom: { 'notify-origin': 'window-onerror' } } }),
    hi(b, {
        metadata: {
            custom: { 'notify-origin': 'unhandled-promise-rejection-handler' },
        },
    }),
    m.startExporter();
